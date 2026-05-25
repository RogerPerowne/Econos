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
    "Render ONLY the content card itself on a warm cream page background #FAF8F4 — no sidebar, no nav, "
    "no app chrome. White card, rounded corners, soft shadow, generous padding. "
    "Aesthetic: Apple / Notion / Linear / Brilliant — premium, intelligent, exam-focused. "
    "Display headings in an elegant serif (Fraunces or similar); body and labels in clean sans-serif (Inter). "
    "Colour is a teaching system. Use bold saturated fills from this palette, never pale near-white tints: "
    "green #D1FAE5 (core / benefit / correct), blue #DBEAFE (explanation / technique), "
    "purple #EDE9FE (evaluation / exam edge / judgement), amber #FEF3C7 (trade-off / 'it depends'), "
    "rose #FFE4E6 (market failure / risk / loss), slate #E2E8F0 (neutral / structural). "
    "Coloured blocks carry dark same-family text and a slightly darker matching border. "
    "Beyond that, you have full creative freedom over layout, composition, blocks, diagrams and "
    "decoration — design the strongest possible card for the concept the per-card prompt describes."
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
