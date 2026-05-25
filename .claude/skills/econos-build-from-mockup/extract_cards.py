#!/usr/bin/env python3
"""Stage 3 - read each mockup PNG back into structured card JSON."""
import base64, json, os, sys
from pathlib import Path

# Default to a current model. gpt-4o is RETIRED (since 2026-02-13) - do not use it.
VISION_MODEL = os.environ.get("ECONOS_VISION_MODEL", "gpt-4.1")

EXTRACTION_PROMPT = """You are extracting structured content from an econos card mockup image for an A-Level Economics web app.
Return ONLY valid JSON. Use this exact shape:

{
  "id": "semantic-card-id",
  "template": "ad-interactive",
  "stepLabel": "Learn: Step N of M",
  "title": "Card title",
  "lede": "Opening paragraph.",
  "tip": null,
  "left": null,
  "right": null,
  "flow": [],
  "causes": [],
  "keyTerms": [],
  "conclusion": null,
  "exam": null,
  "diagramDescription": "Plain-text description of any diagram shown, or null if none."
}

Rules:
- Only include array/object fields that have content. Omit empty arrays and null fields from output.
- causes items: { "tone": "blue|green|amber|purple|rose|slate", "icon": "emoji", "head": "heading", "body": "body text" }
- flow items: { "tone": "...", "icon": "emoji", "title": "step title", "sub": "explanation" }
- left/right items: { "tone": "...", "icon": "emoji", "label": "heading", "text": "body text" }
- If a diagram is shown, describe it in diagramDescription - Claude will convert it to SVG later. Do not attempt to produce SVG here.
- tone must be one of: green, amber, blue, purple, rose, slate
- All icon fields must be a single emoji character
- Card id: leave as a short hint; Stage 4 rewrites it to a hyphenated semantic id
- exam: if the card shows an exam tip, return { "title": "...", "text": "..." }
- Be economically accurate - this is A-Level Economics content"""


def get_client():
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        sys.exit("ERROR: OPENAI_API_KEY is not set.")
    import openai
    return openai.OpenAI(api_key=api_key)


def extract_card(client, png_path):
    b64 = base64.b64encode(png_path.read_bytes()).decode("ascii")
    resp = client.chat.completions.create(
        model=VISION_MODEL,
        messages=[{
            "role": "user",
            "content": [
                {"type": "text", "text": EXTRACTION_PROMPT},
                {"type": "image_url",
                 "image_url": {"url": f"data:image/png;base64,{b64}"}},
            ],
        }],
    )
    raw = resp.choices[0].message.content.strip()
    if raw.startswith("```"):
        raw = raw.split("```", 2)[1]
        if raw.startswith("json"):
            raw = raw[4:]
        raw = raw.strip()
    return json.loads(raw)


def main():
    if len(sys.argv) < 3:
        sys.exit("Usage: extract_cards.py <topic_id> <tmp_dir>")
    topic_id, tmp_dir = sys.argv[1], Path(sys.argv[2])
    client = get_client()
    cards, failures = [], []
    for png in sorted(tmp_dir.glob("mockup_card_*.png")):
        print(f"Extracting {png.name} with {VISION_MODEL}...")
        try:
            cards.append(extract_card(client, png))
        except (json.JSONDecodeError, Exception) as exc:
            print(f"  FAILED on {png.name}: {exc}")
            failures.append(png.name)
    out = tmp_dir / "cards_draft.json"
    out.write_text(json.dumps(cards, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\nWrote {len(cards)} card(s) -> {out}")
    if failures:
        print(f"FAILURES: {failures}")


if __name__ == "__main__":
    main()
