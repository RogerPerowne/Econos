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
    "A full-page screenshot mockup of one card view in econos, a premium A-Level Economics "
    "learning web app. Render the COMPLETE PAGE LAYOUT - not just the inner content card. "
    "The aesthetic is closer to Apple, Notion and Linear than to PowerPoint or Canva: warm, "
    "calm, intelligent, exam-focused. Page background is warm cream #FAF8F4. "
    "\n\nPAGE STRUCTURE (left to right, all three rails always present):\n"
    "(1) LEFT SIDEBAR (~200px wide, white panel): at the top the econos wordmark logo with three "
    "small coloured dots above it (red, yellow, green) and the tagline 'Learn it. Link it. Land it.' "
    "in tiny serif italics. Below it a vertical nav menu with small line icons and labels: "
    "Home, My topics (highlighted soft green pill — this is the active item), Progress, "
    "Exam practice, Study planner, Messages, Settings. At the bottom a soft green streak widget: "
    "a flame emoji and '1 Day streak / Keep it going!'. "
    "(2) MAIN CONTENT COLUMN (centre, ~900px): at the very top a small green uppercase eyebrow "
    "'SESSION 1 OF 3: LEARN' next to a back-arrow chevron, with the topic title underneath "
    "(e.g. 'Output Gaps') as small grey display text. Below that, the actual rich CONTENT CARD "
    "(white, rounded 24px corners, soft shadow, ~32px padding) with: a large serif display "
    "heading (Fraunces, ~36px), a 'Learn: Step X of Y' grey caption beneath it, then a "
    "highlighted intro/lede block (soft blue tip card with a 💡 icon and italic body), then the "
    "rich content blocks for this specific card (diagram, comparison row, causes grid, exam-edge "
    "callout, etc.). At the bottom of the page, two large nav buttons: a soft '← Previous card' "
    "outline button on the left, and a bold solid blue 'Next card →' button on the right. "
    "(3) RIGHT RAIL (~240px wide): at the top a 'X of Y cards' progress widget with a "
    "horizontal dot tracker (filled green for completed, half-filled for current, grey for "
    "upcoming). Below that a 'Cards' panel listing every card in this topic by number with "
    "short titles — completed ones get a green tick, current one is highlighted in soft green, "
    "upcoming ones are grey. At the bottom a star icon and 'Quiz' link. "
    "(4) TOP-RIGHT CHROME: a small streak flame chip ('🔥 1 day streak') and a circular user "
    "avatar with initials. "
    "\n\nTYPOGRAPHY: display headings in an elegant serif (Fraunces or similar); body, labels "
    "and UI in clean sans-serif (Inter). Generous whitespace. Short headings, concise body, "
    "no dense paragraphs anywhere. "
    "\n\nTONE PALETTE (the six teaching colours, used as soft fills): "
    "green #ECFDF5 (core ideas, correct routes, benefits, lock-in), "
    "blue #EFF6FF (explanations, exam technique, primary actions), "
    "purple #F5F3FF (evaluation, judgement, exam edge, deeper insight), "
    "amber #FFFBEB (trade-offs, incentives, 'it depends'), "
    "rose #FFF1F2 (market failure, welfare loss, risk), "
    "slate #F1F5F9 (neutral/structural). Coloured callout boxes use a matching 1px border one "
    "shade darker and dark same-family text. Section labels are small, uppercase, letter-spaced. "
    "Icons are simple line symbols inside soft circular chips — no emoji overload, no stock "
    "photography, no glassmorphism, no gradients. "
    "\n\nDIAGRAMS: clean buildable SVG-style — simple axes with bold black arrow tips, clear "
    "non-overlapping labels, dashed guide lines where helpful, demand in blue, supply in green, "
    "LRAS as a vertical line in dark navy, AD in red/coral, equilibrium points marked clearly, "
    "welfare or shortage areas shaded in soft amber or rose. "
    "\n\nCARD CONTENT MUST BE RICH AND COMPLETE: the central content card should fill the main "
    "column with multiple stacked blocks (lede + hero diagram + supporting grid/comparison + "
    "exam-edge callout) — never a sparse single-element card. Target visual density similar to "
    "a modern educational SaaS card (Brilliant, Notion templates, Linear changelog cards). "
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
            size="1792x1024",          # landscape — full-page econos layout
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
