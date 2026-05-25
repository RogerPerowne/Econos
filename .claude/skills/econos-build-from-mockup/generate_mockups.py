#!/usr/bin/env python3
"""
generate_mockups.py - Stage 2 of the econos-build-from-mockup skill.

Generates one mockup image per card using OpenAI's GPT Image 2, driven by a
JSON config file. Saves each image as mockup_card_NN.png next to the config,
under tmp/<topic_id>/.

Usage:
    python generate_mockups.py --config path/to/config.json

config.json shape:
    {
      "topic_id": "price_controls",
      "cards": [
        { "card_num": 1, "prompt": "an infographic card explaining ..." },
        { "card_num": 2, "prompt": "an infographic card showing ..." }
      ]
    }

Dependencies: openai + Python stdlib only. No Pillow, no OpenCV.
The OPENAI_API_KEY must be present in the environment (it lives in
.claude/settings.local.json under the 'env' block and is never committed).
"""

import argparse
import base64
import json
import os
import sys
from pathlib import Path

# Pinned snapshot, not the rolling "gpt-image-2" alias, so a future model
# bump cannot silently change image style partway through a batch.
IMAGE_MODEL = "gpt-image-2-2026-04-21"

# Shared art-direction preamble prepended to every card prompt so the whole
# topic reads as one visual family AND matches the real econos product. The
# palette/fonts/background here are the corrected econos brand values - the
# "premium SaaS" art direction (Apple/Notion/Linear, not PowerPoint) with the
# real tokens, not the cooler off-brand ones from the generic mockup prompt.
STYLE_PREAMBLE = (
    "A portrait mockup of ONE concept card from econos, a premium A-Level Economics learning web app. "
    "Render ONLY the content card itself — NO sidebar, NO right rail, NO top chrome, NO navigation "
    "buttons, NO progress widgets. The card fills almost the entire frame so that every block inside "
    "it is large, bold and richly detailed. Generous internal padding (~48px), rounded 24px corners, "
    "1px #E5E7EB border, soft shadow, white card on a warm cream page background #FAF8F4. "
    "Aesthetic: Apple / Notion / Linear / Brilliant — calm, intelligent, exam-focused, premium. "
    "\n\nCARD STRUCTURE (top to bottom, every card must hit this density):\n"
    "(1) A small uppercase letter-spaced eyebrow with the card number ('STEP 1 OF 6' or similar). "
    "(2) A LARGE serif display heading (Fraunces or similar refined serif, ~44px, dark navy #0F172A) — "
    "the card title. "
    "(3) A short subline below the heading in mid-grey sans-serif (Inter). "
    "(4) A LEDE / tip card — soft tone fill (usually blue), a 💡 icon in a circular chip, italic body "
    "text on one or two lines. "
    "(5) The HERO content block for this card: either a clean SVG-style diagram, a comparison row, a "
    "2x2 or 2x3 grid of tone-coded tiles, a worked example, or a flow row — whichever the prompt "
    "specifies. This block is large and visually dominant. "
    "(6) One or two SUPPORTING blocks beneath the hero (a small example callout, a real-world hook, "
    "or a definition row). "
    "(7) A bold purple EXAM EDGE callout at the bottom — graduation cap 🎓 icon in a circular chip, "
    "title 'EXAM EDGE' in small uppercase letter-spaced text, then a one or two line examiner tip. "
    "\n\nTONE PALETTE (these are the REAL econos fills — bold and saturated, NOT the pale near-white "
    "tints. Use these exact hex values for the tinted blocks): "
    "green #D1FAE5 fill / #065F46 text (core ideas, correct routes, benefits, lock-in), "
    "blue #DBEAFE fill / #1E3A8A text (explanations, exam technique, primary actions), "
    "purple #EDE9FE fill / #5B21B6 text (evaluation, judgement, exam edge, deeper insight), "
    "amber #FEF3C7 fill / #92400E text (trade-offs, incentives, 'it depends' conditions), "
    "rose #FFE4E6 fill / #9F1239 text (market failure, welfare loss, risk, incorrect routes), "
    "slate #E2E8F0 fill / #1E293B text (neutral or structural items). "
    "Every coloured block has a matching 1px border ~10% darker than the fill, dark same-family text, "
    "and a circular icon chip in a slightly darker shade of the same hue. Section labels are small, "
    "uppercase, letter-spaced. NO pale washed-out near-white tints — the fills must be confidently "
    "coloured so the card reads as a teaching system at a glance. "
    "\n\nTYPOGRAPHY: display heading in an elegant serif (Fraunces or similar) at ~44px; body, labels, "
    "captions in clean sans-serif (Inter). Strong type hierarchy with confident size jumps. Generous "
    "whitespace. Short headings, concise body, no dense paragraphs. "
    "\n\nDIAGRAMS: clean buildable SVG-style — simple axes with bold black arrow tips, clear "
    "non-overlapping labels in 14-16px sans-serif, dashed guide lines where helpful, demand in blue, "
    "supply in green, LRAS as a vertical line in dark navy, AD in red/coral, equilibrium points "
    "marked with bold filled dots, welfare or shortage areas shaded in the saturated amber or rose. "
    "Icons are simple line symbols inside soft circular chips — NO emoji overload, NO stock "
    "photography, NO glassmorphism, NO gradients. "
    "\n\nCONTENT DENSITY: the card MUST be rich and complete. Every prompt block listed must be "
    "present and visually substantial. Aim for the density of a Brilliant card or a Notion template "
    "hero — multiple stacked blocks filling the portrait frame, never sparse, never empty space. "
)


def load_config(config_path: Path) -> dict:
    if not config_path.is_file():
        sys.exit(f"ERROR: config file not found: {config_path}")
    try:
        with config_path.open(encoding="utf-8") as fh:
            config = json.load(fh)
    except json.JSONDecodeError as exc:
        sys.exit(f"ERROR: config file is not valid JSON: {exc}")

    topic_id = config.get("topic_id")
    cards = config.get("cards")
    if not topic_id or not isinstance(cards, list) or not cards:
        sys.exit(
            "ERROR: config must contain a non-empty 'topic_id' string and a "
            "non-empty 'cards' array of { card_num, prompt } objects."
        )
    return config


def get_client():
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        sys.exit(
            "ERROR: OPENAI_API_KEY is not set in the environment. "
            "Add it to .claude/settings.local.json under the 'env' block "
            "(it is never committed to the repo)."
        )
    try:
        import openai  # imported here so the key check fails first with a clear message
    except ImportError:
        sys.exit(
            "ERROR: the 'openai' package is not installed. "
            "Install it with: pip install openai"
        )
    return openai.OpenAI(api_key=api_key)


def generate(config_path: Path) -> None:
    config = load_config(config_path)
    topic_id = config["topic_id"]
    cards = config["cards"]

    # Images land alongside the config, in tmp/<topic_id>/.
    out_dir = config_path.parent
    out_dir.mkdir(parents=True, exist_ok=True)

    client = get_client()

    total = len(cards)
    print(f"Generating {total} mockup image(s) for topic '{topic_id}' with {IMAGE_MODEL}")

    for idx, card in enumerate(cards, start=1):
        card_num = card.get("card_num", idx)
        prompt = (card.get("prompt") or "").strip()
        if not prompt:
            print(f"  [skip] card {card_num}: empty prompt")
            continue

        full_prompt = STYLE_PREAMBLE + prompt
        print(f"  [{idx}/{total}] card {card_num}: requesting image...")

        # NOTE: no 'style' parameter - GPT Image 2 rejects it.
        response = client.images.generate(
            model=IMAGE_MODEL,
            prompt=full_prompt,
            n=1,
            size="1024x1792",          # portrait — single card, maximum content density
            quality="high",            # valid: standard | high
            output_format="png",       # png | webp | jpeg — response is always b64_json
        )

        image_bytes = base64.b64decode(response.data[0].b64_json)
        out_path = out_dir / f"mockup_card_{card_num:02d}.png"
        with out_path.open("wb") as fh:
            fh.write(image_bytes)
        print(f"        saved -> {out_path.resolve()}")

    print("Done.")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Generate econos card mockups with GPT Image 2."
    )
    parser.add_argument(
        "--config",
        required=True,
        help="Path to the JSON config file (topic_id + cards array).",
    )
    args = parser.parse_args()
    generate(Path(args.config))


if __name__ == "__main__":
    main()
