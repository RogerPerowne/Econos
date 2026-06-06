# Econos Content Migration Guide

**Audience: the AI/engineer porting Econos content to a Postgres + .NET backend.**
This is the contract that makes the move low-friction. The goal is *not* to change
the live site — it's to make the content, render engine and styling cleanly
liftable. Read this with `docs/schema/postgres.sql` and `docs/PLATFORM_BLUEPRINT.md`.

## The three clean layers

Econos is deliberately split so each layer ports independently:

1. **Content (data)** — plain JS objects in
   `js/data/<board>/<theme>/<topic>/{learn-it,link-it,land-it}.js`, each assigning
   `window.ECONOS_TOPIC = { id, board, theme, spec, intro, cards:[…] }` (+
   `ECONOS_LINK_*`, `ECONOS_QUIZ`). Already JSON-shaped → maps straight to Postgres.
2. **Render engine** — pure `data → HTML string` functions in `js/app.js`
   (`renderCard(card)` and `renderX(...)` helpers). No side effects, no network.
3. **Styling** — `styles.css`: vanilla CSS with all design decisions as `:root`
   tokens. No framework, no build step.

Because the layers don't leak into each other, you can port them in any order.

## Step 1 — Export the content

```
npm run export:content      # → dist/export/content.json  (all topics + cards)
```

The exporter (`scripts/export-content.mjs`) evaluates every data file in a sandbox
and dumps a backend-agnostic JSON document (`{ topics: [{ board, theme, slug,
topic, link, quiz }] }`). A trimmed sample is committed at
`docs/schema/sample-topic.json`. Load it into the schema in `docs/schema/postgres.sql`
(`topics` + ordered `cards`, with each card's box payload as `jsonb`).

## Step 2 — Understand the content → component contract

Each "box" on a card is triggered by a **data key**; the engine renders it to
**fixed CSS classes**. To reproduce identical HTML in .NET (Razor/Blazor), emit the
same classes. **Tone is always a semantic name (`'green'|'amber'|'blue'|'purple'|
'rose'|'slate'`), never a colour** — store it as the `econ_tone` enum; the
`.tone-*` CSS classes resolve the palette via `--t-50/-100/-solid/-ink/-accent`.

Universal components migrated so far (the contract table grows as migration
continues — keep it current):

| Data key | Schema | Emits |
|----------|--------|-------|
| `keyTerms` | `[{ term, def }]` | `.key-terms > .kt-tile.tone-* > .kt-tile__term / __def` |
| `keyPoints` | `[{ title, headline?, body?, icon?, tone? }]` (+ `keyPointsCompare`, `keyPointsStyle:'minimal'`) | `.key-points > .kp-tile.tone-*[.kp-tile--minimal] > .kp-tile__head/__num/__icon/__title, __headline, __body` |
| `lockIn` | `{ title?, icon?, items:[string] }` or `[string]` | `.lock-in > .lock-in__head(__icon,__title) + .lock-in__items > .lock-in__item > .lock-in__check` |
| `tip` / `note` / `tipLate` | string or `{ text, head?, icon?, tone? }` | `.tone-callout.tone-* > .tone-callout__icon + __body(__head?, __text)` |
| `examEdge` | string or `{ title?, text }` | `.exam-edge > .exam-edge__star + __body(__label,__title?,__text)` |
| `keyTakeaway` | string or `{ title?, text }` | `.key-takeaway > .key-takeaway__star + __body(__label,__text)` |

(Boxes not yet migrated still render via inline styles in `app.js`; they are being
moved onto this same `.tone-*` + token system, one per release, until 100% of
boxes are token-driven and the off-brand `PATTERN_TONES` palette is retired.)

## Step 3 — Reproduce the rendering (two options)

- **Fast path — reuse the engine.** `renderCard(card)` is a pure function. Run
  `js/app.js`'s render functions in a small Node SSR sidecar and have .NET call it,
  or port them with a JS-on-.NET host. No re-implementation, identical output.
- **Native path — re-implement.** Port each `renderX` to a Razor/Blazor partial
  that emits the classes in the table above. Use this table as the spec.

Charts/diagrams (`ECONOS_PPF`) output self-contained `<svg>` strings — portable
verbatim; no backend work beyond storing/serving the string.

## Step 4 — Ship the styling as-is

Copy `styles.css` (and `fonts.css` + the `/fonts` woff2) to the new app. It's
framework-free; the `:root` tokens are the entire theme. Re-skinning later = edit
tokens, not markup.

## Rules that keep this contract stable

- **Data never carries colours or raw HTML** — only semantic tone names + text/
  structured fields. (Enforced by habit + `npm run lint:tokens`.)
- **Renderers stay pure** `data → HTML`.
- **New/changed box → update the contract table above** in the same PR.
- Data shapes are frozen by the universal components, so the Postgres schema is
  stable — migrate with confidence.
