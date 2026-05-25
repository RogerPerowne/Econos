---
name: econos-build-from-mockup
description: Use to build a new econos topic from a set of mockup images. Generates one mockup per card with GPT Image 2, extracts structured card content from each image with a vision model, assembles a schema-correct data-topic.js, converts diagram descriptions into named SVGs, then verifies and hands off to shipping. Trigger when the user wants to "build a topic from mockups", "generate cards from images", "turn these mockups into a topic", or describes a topic to spin up visually first.
---

# Building an econos topic from mockups

This skill turns a short topic brief into a working econos topic by way of generated mockup images: GPT Image 2 draws one infographic per card, a vision model reads each image back into structured card data, and Claude assembles a schema-correct `data-topic.js`, converts any diagrams to named SVGs, verifies the topic renders, and hands off to shipping. It produces **no new HTML files** - econos is a static SPA whose six root shells discover topics at runtime through `TopicLoader.loadData(...)`.

The skill bundles one helper script (`generate_mockups.py`) for the image-generation stage and reuses the existing econos skills for everything they already own. Do not reinvent their logic.

## Skills this one calls

- **`econos-card-template`** - field reference for `ad-interactive` and the specialised templates. Read it at Stage 1.
- **`econos-visual-diagram`** - SVG language, viewBox conventions, and `js/icons.js` key registration. Read it whenever a card needs a diagram (Stage 4).
- **`econos-new-topic`** - `data-topic.js` structure, the URL contract, and `js/topics.js` registration. Read it at Stage 5.
- **`run-econos`** - static server + Playwright driver for screenshots. Card navigation is by card-index argument, not URL params. Use it at Stage 5 to verify rendering.
- **`econos-ship-changes`** - the mandatory backup-main-first → push → PR → squash-merge → dev-branch-reset flow. **Stage 5 hands off here for all git work. Never duplicate its logic in this skill.**

## Security: API key handling

The skill reads `OPENAI_API_KEY` from the environment only. The key lives in `.claude/settings.local.json` under the `env` block, which is never committed. Both scripts check for the key and exit with a clear message if it is absent. Never write the key into a file, a prompt, a commit, or a log line.

---

## Stage 1 - Topic brief

Collect from the user:

- **topic_id** in `underscore_case` (e.g. `price_controls`, `factors_of_production`) - this is also the folder name under `js/data/`.
- **title** - human-readable topic title.
- **card count** - roughly how many concept cards.
- **the economic concept** - what the topic teaches, enough to write good image prompts.

Read the **`econos-card-template`** skill now for the full field reference before writing any prompts or data.

---

## Stage 2 - Generate mockup images with GPT Image 2

Write a `config.json` describing one prompt per card, then run the bundled `generate_mockups.py`. The script prepends a minimal art-direction preamble (portrait single-card layout, no app chrome, warm cream `#FAF8F4` background, Fraunces serif headings, Inter body, and the six saturated econos tone fills — green `#D1FAE5`, blue `#DBEAFE`, purple `#EDE9FE`, amber `#FEF3C7`, rose `#FFE4E6`, slate `#E2E8F0` — as a teaching system). Beyond that the model has FULL creative freedom over layout, blocks, diagrams and decoration.

**Each per-card `prompt` should be SHORT and CONCEPT-LED, not a layout brief.** Say what the card teaches in 1-2 sentences and let GPT Image 2 invent the visual. Do not list blocks, do not specify a diagram, do not enumerate tiles or chips — over-specifying kills the creative variety that makes the mockups worth using. If a specific diagram is non-negotiable for the concept, name it in plain English and stop there.

Match each card's dominant tone to its teaching role, since the preamble encodes the meaning: green for core/correct/benefit, blue for explanation/technique, purple for evaluation/judgement/exam-edge, amber for trade-offs/incentives/"it depends", rose for market failure/welfare loss/risk, slate for neutral. Keep cards uncluttered - one concept each.

Write the config to the skill's tmp area:

```
.claude/skills/econos-build-from-mockup/tmp/<topic_id>/config.json
```

`config.json` shape:

```json
{
  "topic_id": "price_controls",
  "cards": [
    { "card_num": 1, "prompt": "an infographic card introducing price controls: what a price ceiling and a price floor are, with a simple supply-demand diagram and labelled headings" },
    { "card_num": 2, "prompt": "an infographic card on the effects of a binding price ceiling: shortage, excess demand, with a supply-demand diagram showing the ceiling below equilibrium" }
  ]
}
```

Then run:

```bash
python .claude/skills/econos-build-from-mockup/generate_mockups.py \
  --config .claude/skills/econos-build-from-mockup/tmp/<topic_id>/config.json
```

Images are saved as `mockup_card_NN.png` in the same tmp directory. The script pins the image model to the snapshot `gpt-image-2-2026-04-21` (not the rolling `gpt-image-2` alias) and sends **no `style` parameter** - GPT Image 2 rejects it.

The full script is bundled as `generate_mockups.py`; its body is reproduced at the end of this file for reference.

---

## Stage 3 - Extract structured content from each image

For each `mockup_card_NN.png`, send the image (base64) to a vision model with the extraction prompt below, parse the returned JSON, and assemble the cards into a draft `data-topic.js`.

**Vision model:** expose it as a configurable variable. Default to `gpt-4.1` (capable and cheaper). `gpt-5.4` is the high-quality alternative. **Do not hardcode `gpt-4o`** - it was retired from the OpenAI API on 13 February 2026 and will 404.

Extraction prompt (send as the text part alongside each image):

```
You are extracting structured content from an econos card mockup image for an A-Level Economics web app.
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
- If a diagram is shown, describe it in diagramDescription - Claude will convert it to SVG later. Do not attempt to produce SVG here.
- tone must be one of: green, amber, blue, purple, rose, slate
- All icon fields must be a single emoji character
- Card id: leave as a short hint; Stage 4 rewrites it to a hyphenated semantic id (e.g. "price-ceiling")
- exam: if the card shows an exam tip, return { "title": "...", "text": "..." } - Stage 4 maps it to the examEdge object
- Be economically accurate - this is A-Level Economics content
```

The extraction script (configurable vision model, base64 image input, per-card JSON parse with a clear flag on failure):

```python
#!/usr/bin/env python3
"""Stage 3 - read each mockup PNG back into structured card JSON."""
import base64, json, os, sys
from pathlib import Path

# Default to a current model. gpt-4o is RETIRED (since 2026-02-13) - do not use it.
# gpt-5.4 is the higher-quality alternative if extraction quality is poor.
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
- If a diagram is shown, describe it in diagramDescription - Claude will convert it to SVG later. Do not attempt to produce SVG here.
- tone must be one of: green, amber, blue, purple, rose, slate
- All icon fields must be a single emoji character
- Card id: leave as a short hint; Stage 4 rewrites it to a hyphenated semantic id (e.g. "price-ceiling")
- exam: if the card shows an exam tip, return { "title": "...", "text": "..." } - Stage 4 maps it to the examEdge object
- Be economically accurate - this is A-Level Economics content"""


def get_client():
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        sys.exit("ERROR: OPENAI_API_KEY is not set. Add it to .claude/settings.local.json under 'env'.")
    try:
        import openai
    except ImportError:
        sys.exit("ERROR: the 'openai' package is not installed. Install it with: pip install openai")
    return openai.OpenAI(api_key=api_key)


def extract_card(client, png_path: Path) -> dict:
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
    # Models sometimes wrap JSON in ```json fences - strip them before parsing.
    if raw.startswith("```"):
        raw = raw.split("```", 2)[1]
        if raw.startswith("json"):
            raw = raw[4:]
        raw = raw.strip()
    return json.loads(raw)


def main():
    if len(sys.argv) < 3:
        sys.exit("Usage: python extract_cards.py <topic_id> <tmp_dir_with_pngs>")
    topic_id, tmp_dir = sys.argv[1], Path(sys.argv[2])
    client = get_client()

    cards, failures = [], []
    for png in sorted(tmp_dir.glob("mockup_card_*.png")):
        print(f"Extracting {png.name} with {VISION_MODEL}...")
        try:
            cards.append(extract_card(client, png))
        except (json.JSONDecodeError, KeyError, IndexError) as exc:
            print(f"  FAILED to parse {png.name}: {exc} - flag for manual review")
            failures.append(png.name)

    out = tmp_dir / "cards_draft.json"
    out.write_text(json.dumps(cards, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\nWrote {len(cards)} card(s) -> {out.resolve()}")
    if failures:
        print(f"{len(failures)} card(s) need manual review: {', '.join(failures)}")


if __name__ == "__main__":
    main()
```

Assemble the parsed cards into the `data-topic.js` template below. Treat extraction as a **draft** - Stage 4 is where it becomes correct.

### data-topic.js template

```js
/* ECONOS - content data for <topic_id> */
window.ECONOS_TOPIC = {
  id: '<topic_id>',                 // underscore_case, matches the folder name
  topicNum: '1.3',                  // Edexcel spec reference, e.g. '1.3'
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Topic Title',
  estTime: '10-12 minutes',
  goal: 'One-sentence statement of what the learner locks in.',

  intro: {
    heroKey: 'heroKeyName',         // named SVG key in js/icons.js (optional)
    summary: 'Intro paragraph shown on the topic landing.',
    doInThis: 'What the student does in this topic.',
    outcomes: [
      'Learning outcome 1',
      'Learning outcome 2'
    ],
    tip: 'A short cue or quick-reference line.',
    // Learn-It topic stages carry NO href - the shell handles navigation.
    // (Only the Link-It data files attach hrefs to their station lists.)
    stages: [
      { num: 1, name: 'Learn it', sub: 'N concept cards',                 state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context',   state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',      state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'semantic-card-id',       // hyphenated + semantic: 'four-factors', not '<topic_id>_1'
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of N',
      title: 'Card title',
      lede: 'Opening paragraph. Use <strong> for emphasis.',
      // Optional blocks - include only what the card needs. Full reference: econos-card-template skill.
      // visualKey: 'someSvgKey',     // hero diagram, key into ECONOS_ICONS in js/icons.js
      // tip: { icon: '⚠️', tone: 'amber', text: '...' },
      // pairFirst: true,             // render the paired comparison before flow/causes
      // pairLabel, pairEmoji, left: { tone, icon, iconStyle:'circle', label, text }, right: {...},
      // flowTitle, flowEmoji, flow: [{ tone, icon, title, sub }],
      // causesLabel, causesEmoji, causes: [{ tone, icon, head, body }],
      // causes2Label, causes2Emoji, causes2: [...], causes2Cols: 2,   // secondary grid
      // productExamples, keyTerms: [{ term, def }],
      // equation: { label, emoji, terms:[{tone,icon,title,sub}], operator:'+', resultOperator:'=', result:{...} },
      // economistQuote: { portraitKey, label, quote, attribution },
      // conclusion: { title, text },
      // examEdge: { title, text },   // OBJECT, not a bare string
      // quizCta: { href: TopicLoader.buildUrl('quiz.html', { quiz: 'main' }), label: 'Test yourself ->' }  // last card only
    }
    // more cards...
  ]
};
```

Three things the engine and the real topics insist on, that briefs tend to get wrong:

- The global is `window.ECONOS_TOPIC` (singular, assigned directly). `learn.html` calls `TopicLoader.loadDataThenScript('data-topic.js', 'js/app.js', ...)` and `app.js` reads `window.ECONOS_TOPIC`. The keyed-dictionary form `ECONOS_TOPIC_DATA['<id>']` is *not* read by the engine - a file using it loads without error but renders a blank page. (Note the quiz data file `data-quiz-*.js` *does* wrap `window.ECONOS_QUIZ` in an IIFE; the topic file does not. Match each file to its own pattern.)
- Topic id uses underscores (`factors_of_production`); card ids use hyphens and are semantic (`four-factors`, `factor-mobility`) - never `<topic_id>_1`. Semantic ids matter because the quiz engine falls back to `c.id` as a display name.
- `examEdge` is an object `{ title, text }`. There is no `heroIcon`, `color`, `subtitle`, or `const topicData`.

---

## Stage 4 - Review, convert diagrams to SVG, validate

Read the draft and make it correct. Vision extraction is a starting point, not the answer.

**Correct extraction errors.** Fix wrong tones (must be one of `green`, `amber`, `blue`, `purple`, `rose`, `slate`), garbled or truncated text, misread icons (each `icon` must be a single emoji), and - most importantly - anything economically inaccurate. This is A-Level content; a misstated definition or a back-to-front diagram is worse than a missing card.

**Convert each `diagramDescription` to a named SVG.** For every card whose draft carries a `diagramDescription`:

1. Read the **`econos-visual-diagram`** skill - it owns the SVG language, the tone palette hexes, the `viewBox="0 0 640 H"` convention (width always 640, height to fit), and the named recipes.
2. Author the SVG as a named key in `js/icons.js` (`ECONOS_ICONS.keyName = \`<svg ...>\``).
3. On the card, remove `diagramDescription` and add `visualKey: 'keyName'` (right after `lede`).

Never inline an SVG into a card body field. Diagrams live in `js/icons.js` and are referenced by key.

**Confirm the global.** The file must assign `window.ECONOS_TOPIC = {...}` directly. Don't trust this from memory - verify it against what the shell actually reads, so a wrong global is caught before it ships as a blank page:

```bash
# the data file must define the global that learn.html -> app.js reads
grep -q "window.ECONOS_TOPIC\s*=" js/data/<topic_id>/data-topic.js && echo "global OK" || echo "WRONG GLOBAL - app.js reads window.ECONOS_TOPIC"
# and learn.html must still load data-topic.js the expected way
grep -q "loadDataThenScript('data-topic.js'" learn.html && echo "loader OK"
```

Also confirm card ids are hyphenated and semantic (not `<topic_id>_1`), and that every `visualKey` on a card has a matching key in `js/icons.js`.

**Validate (both must pass before Stage 5):**

```bash
node --check js/data/<topic_id>/data-topic.js
node --check js/icons.js
```

If either fails, fix the syntax before continuing - a file that does not parse will not load.

---

## Stage 5 - Register, verify, ship

1. **Register** the topic in `js/topics.js`. Read the **`econos-new-topic`** skill for the exact entry shape - match the surrounding entries (fields typically include `id`, `title`, `theme`, `unit`, `order`, and a short tag list). An unregistered topic is invisible to learners.

2. **Lint:**

   ```bash
   scripts/lint.sh
   ```

   Must pass.

3. **Verify rendering.** Read the **`run-econos`** skill and use its driver to screenshot the topic. Navigation is by card-index argument, not URL params - start at card index `0`, then step through every card and confirm each renders without errors and any diagrams paint. Increase the driver's wait if a heavy card screenshots blank.

4. **Stop here and hand off.** For the push → PR → squash-merge → dev-branch reset (and the mandatory backup-main-first step), use the **`econos-ship-changes`** skill. Do not run any of that git logic from this skill - `econos-ship-changes` is the single source of truth, including the rule that `main` is never force-pushed and is always backed up first.

---

## Reference: generate_mockups.py

The bundled Stage 2 script (also present as a sibling file in this skill directory):

```python
#!/usr/bin/env python3
"""generate_mockups.py - Stage 2: one GPT Image 2 mockup per card from a JSON config."""
import argparse, base64, json, os, sys
from pathlib import Path

# Pinned snapshot, not the rolling "gpt-image-2" alias, so a model bump
# cannot silently change image style partway through a batch.
IMAGE_MODEL = "gpt-image-2-2026-04-21"

STYLE_PREAMBLE = (
    "A portrait mockup of ONE concept card from econos, a premium A-Level Economics learning web app. "
    "Render ONLY the content card itself on a warm cream page background #FAF8F4 — no sidebar, no nav, "
    "no app chrome. White card, rounded corners, soft shadow, generous padding. "
    "Aesthetic: Apple / Notion / Linear / Brilliant — premium, calm, intelligent, exam-focused. "
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
        config = json.loads(config_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        sys.exit(f"ERROR: config file is not valid JSON: {exc}")
    if not config.get("topic_id") or not isinstance(config.get("cards"), list) or not config["cards"]:
        sys.exit("ERROR: config needs a 'topic_id' string and a non-empty 'cards' array of { card_num, prompt }.")
    return config


def get_client():
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        sys.exit("ERROR: OPENAI_API_KEY is not set. Add it to .claude/settings.local.json under 'env' (never committed).")
    try:
        import openai
    except ImportError:
        sys.exit("ERROR: the 'openai' package is not installed. Install it with: pip install openai")
    return openai.OpenAI(api_key=api_key)


def generate(config_path: Path) -> None:
    config = load_config(config_path)
    topic_id, cards = config["topic_id"], config["cards"]
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
        print(f"  [{idx}/{total}] card {card_num}: requesting image...")
        # No 'style' parameter - GPT Image 2 rejects it.
        response = client.images.generate(
            model=IMAGE_MODEL,
            prompt=STYLE_PREAMBLE + prompt,
            n=1,
            size="1024x1792",          # portrait — single card, max content density
            quality="high",            # valid: standard | high
            output_format="png",       # png | webp | jpeg — response is always b64_json
        )
        image_bytes = base64.b64decode(response.data[0].b64_json)
        out_path = out_dir / f"mockup_card_{card_num:02d}.png"
        out_path.write_bytes(image_bytes)
        print(f"        saved -> {out_path.resolve()}")
    print("Done.")


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate econos card mockups with GPT Image 2.")
    parser.add_argument("--config", required=True, help="Path to the JSON config (topic_id + cards array).")
    generate(Path(parser.parse_args().config))


if __name__ == "__main__":
    main()
```
