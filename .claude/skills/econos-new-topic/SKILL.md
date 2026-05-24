---
name: econos-new-topic
description: Use when adding a new topic to Econos from scratch, or when stubbing out additional learning sections (Land It, Link It, Quiz) on an existing topic. Covers the data file structure, the URL contract (no new HTML), and registration in `js/topics.js`. Trigger when the user asks to add/create a topic, add a lesson, or build a new learning page.
---

# Adding a topic to Econos

Econos is a static SPA with **exactly six HTML files at the repo root** (`index.html`, `learn.html`, `link.html`, `land.html`, `quiz.html`, `login.html`). Adding a topic never requires a new HTML file — only new data files + a register entry.

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

Topic IDs are kebab_case (underscores, not hyphens — match existing folders). Examples: `factors_of_production`, `price_controls`, `monopolistic_competition`.

## Step 1 — Create `data-topic.js`

```js
window.ECONOS_TOPIC_DATA = window.ECONOS_TOPIC_DATA || {};
window.ECONOS_TOPIC_DATA['<topic-id>'] = {
  id: '<topic-id>',
  title: 'Topic Title',
  summary: 'One-paragraph summary that previews on the home page.',
  cards: [
    {
      id: 'intro',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of N',
      title: 'Card title',
      lede: 'Opening paragraph.',
      // ...optional fields per the econos-card-template skill...
    },
    // more cards...
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

1. `node --check js/data/<topic-id>/data-topic.js`
2. `node --check js/topics.js`
3. `npm run lint` — must pass
4. Open `learn.html?topic=<id>` locally; verify the first card renders, navigate forward through all cards
5. If you added Link/Land/Quiz data, hit those URLs too

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
