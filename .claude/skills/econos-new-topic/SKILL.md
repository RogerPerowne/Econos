---
name: econos-new-topic
description: Use when adding a new topic to Econos from scratch, or when stubbing out additional learning sections (Land It, Link It, Quiz) on an existing topic. Covers the data file structure, the URL contract (no new HTML), and registration in `js/topics.js`. Trigger when the user asks to add/create a topic, add a lesson, or build a new learning page.
---

# Adding a topic to Econos

Econos is a static SPA with **exactly six HTML files at the repo root** (`index.html`, `learn.html`, `link.html`, `land.html`, `quiz.html`, `login.html`). Adding a topic never requires a new HTML file — only new data files + a register entry.

## Plan the patterns first

Before any data file is written, the topic plan must list the **storytelling pattern** assigned to each card, drawn from the 10 patterns in the `econos-card-template` skill. Format:

> Card 1: *Decompose a diagram* — the wave with phase bands.
> Card 2: *Side-by-side pair* — positive vs negative AD shock.
> Card 3: *Worked example walkthrough* — £10bn green-infrastructure calculation.

Two non-negotiable rules: (1) no two consecutive cards use the same pattern without explicit justification; (2) if three or more cards use *Tile grid*, the plan is defaulted — rework.

Get user sign-off on the pattern list before writing data files. This is the single highest-leverage step for variety and engagement.

## File layout

A topic lives in `js/data/<topic-id>/`. The minimum viable topic is a single file:

```
js/data/<topic-id>/
  data-topic.js          # Required: defines the Learn It cards
  data-land-a.js         # Optional: Land It section A
  data-land-b.js         # Optional: Land It section B
  data-land-c.js         # Optional: Land It section C
  data-link-intro.js     # Optional: Link It stations (any subset)
  data-link-context.js
  data-link-chain.js
  data-link-diagram.js
  data-link-depends.js
  data-link-judge.js
  data-quiz-<set>.js     # Optional: quiz sets
```

Topic IDs are `snake_case` (underscores, not hyphens — match existing folders). Examples: `factors_of_production`, `price_controls`, `inflation_meas`. Card IDs are `hyphen-case` and semantic (`four-factors`, not `<topic_id>_1`).

## Step 1 — Create `data-topic.js`

The engine (`js/app.js`) reads `window.ECONOS_TOPIC` (singular, assigned directly). A file that uses the keyed-dictionary form `ECONOS_TOPIC_DATA['<id>']` will load without errors but render a blank page — confirm the global is right.

```js
/* ECONOS — content data for <topic_id> */
window.ECONOS_TOPIC = {
  id: '<topic_id>',
  topicNum: '2.1',                  // Edexcel spec reference
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Topic Title',
  estTime: '8–10 minutes',
  goal: 'One sentence describing what the learner locks in.',

  intro: {
    heroKey: 'heroKeyName',         // optional; named SVG in js/icons.js
    summary: 'Paragraph shown on the topic landing.',
    doInThis: 'What the student does in this topic.',
    outcomes: [
      'Learning outcome 1',
      'Learning outcome 2'
    ],
    tip: 'Short cue or quick-reference line.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'N concept cards',               state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'semantic-card-id',       // hyphenated and semantic
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of N',
      title: 'Card title',
      lede: 'Opening paragraph. Use <strong> for emphasis.',
      // ...optional blocks per the econos-card-template skill...
    }
  ]
};
```

Use the `econos-card-template` skill for the full field reference.

## Step 2 — Register in `js/topics.js`

Add an entry to the topics array so the topic surfaces on the home page and is routable. Match the surrounding entry style — fields typically include `id`, `title`, `theme`, `unit`, `order`, and a short tag list.

## Step 3 — URL contract

Once registered, the topic is automatically accessible via:

- `learn.html?topic=<id>` — Learn It cards (driven by `data-topic.js`)
- `link.html?topic=<id>&station=<intro|context|chain|diagram|depends|judge|complete|quiz>` — Link It stations (driven by `data-link-*.js`)
- `land.html?topic=<id>&station=<intro|a|b|c|complete|quiz>` — Land It sections (driven by `data-land-*.js`)
- `quiz.html?topic=<id>&quiz=<set>` — Quizzes (driven by `data-quiz-*.js`)

**Do not** create per-topic or per-section HTML files. The shells discover data through `TopicLoader.loadData(...)` at runtime.

## Step 4 — Cross-link from a router data file

For per-card URLs that link between sections, use:

```js
backUrl: TopicLoader.buildUrl('link.html', { station: 'intro' })
```

Per-topic data files sometimes still write legacy paths like `TopicLoader.buildUrl('link_intro.html')` — the loader rewrites these via `PAGE_MAP` in `js/topic-loader.js`. **New code should use the canonical form** with the `station:` query param. Don't introduce new legacy filenames; `scripts/lint.sh` blocks them.

## Navigation contract

Inside engine code, never call `window.location.href` or `.replace` directly — use `TopicLoader.go(url)` so SPA routers can intercept. The two router files (`link-router.js`, `land-router.js`) are the only allowed exceptions. The lint enforces this.

## Verification

After adding a topic:

1. `node --check js/data/<topic_id>/data-topic.js`
2. `node --check js/topics.js`
3. `scripts/lint.sh` — must pass (blocks legacy filenames and direct navigation)
4. Use the `run-econos` skill to screenshot the topic at card index 0, then step through every card and confirm each renders
5. Confirm the global with `grep -q "window.ECONOS_TOPIC\s*=" js/data/<topic_id>/data-topic.js` — if it returns empty, the file uses the wrong global and will render blank

## Reference topics

Strong existing topics to model new ones on:

- **Full topic with all sections**: `factors_of_production` — eight Learn It cards plus rich content blocks
- **Calculation-heavy topic**: `ped`, `pes`, `yed_xed`
- **Diagram-heavy topic**: `consumer_producer_surplus`, `regulatory_capture` (lives in `govt_failure`)

## Don't

- Don't add a `data-topic.html` or any other HTML file at the repo root.
- Don't duplicate the topic ID across folders; one folder per topic.
- Don't add a topic without registering it in `js/topics.js` — it'll be invisible to learners.

## See also

- **`econos-card-template`** — picking the right template for each card you add to the new topic.
- **`econos-visual-diagram`** — when the topic needs hero SVG visuals via `visualKey`.
- **`run-econos`** — screenshot the new topic page to verify routing and rendering.
- **`econos-ship-changes`** — backup main, push, PR, merge, reset. Mandatory before landing the new topic.
