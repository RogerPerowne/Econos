---
name: econos-card-template
description: Use when picking a card template for new Econos content, or when needing a field reference for the rich `ad-interactive` template. Lists all available templates and their use cases. Trigger when the user asks to "add a card", "build a card", "rebuild this card", or asks "which template fits".
---

# Econos card templates

A topic's `data-topic.js` is a list of card objects. Each card has a `template` field that picks its renderer in `js/app.js`. Use `ad-interactive` by default for rich pedagogy — the other templates exist for content shapes that need specialised UI.

## Default: `ad-interactive`

The Swiss-army template. Use this 90% of the time. Renderer: `renderCardAdInteractive` in `js/app.js`.

### Core fields

```js
{
  id: 'card-id',                 // kebab-case, unique within topic
  template: 'ad-interactive',
  stepLabel: 'Learn: Step 2 of 8',
  title: 'Card title',
  lede: 'Opening paragraph. Use <strong> for emphasis.',
  // ...one or more content blocks below...
}
```

### Optional content blocks

Add only what the card needs — every block below is optional.

| Field           | What it renders                                                  |
|-----------------|------------------------------------------------------------------|
| `visualKey`     | Hero SVG from `ECONOS_ICONS`. Use the `econos-visual-diagram` skill. |
| `tip`           | Coloured callout: `{ icon, tone, text }`                         |
| `pairFirst`     | Boolean — render the paired comparison block first (before flow/causes) |
| `pairLabel`     | Heading above the paired comparison                              |
| `pairEmoji`     | Emoji for the paired-block heading                               |
| `left` / `right`| Two halves of a comparison: `{ tone, icon, iconStyle, label, text }` |
| `flowTitle`     | Heading above a `flow` row                                        |
| `flow`          | Array of step tiles: `[{ tone, icon, title, sub }, ...]`         |
| `causesLabel`   | Heading above a `causes` grid                                     |
| `causesEmoji`   | Emoji for the causes heading                                      |
| `causes`        | Array of tone-coded body blocks: `[{ tone, icon, head, body }, ...]` |
| `productExamples` | Product-cell grid for elasticity-style cards                    |
| `keyTerms`      | Glossary grid                                                     |
| `equation`      | `{ lhs, op, rhs, result }` — reusable equation visual            |
| `economistQuote`| `{ quote, attribution }`                                          |
| `conclusion`    | `{ title, text }` — closing summary block                         |
| `exam`          | `{ title, text }` — yellow exam-edge callout                      |

### Tone shortcuts

The six valid tones are `green | amber | blue | purple | rose | slate`. Don't invent others — the renderer maps them to a fixed palette.

## Specialised templates

Use these only when the content shape genuinely needs them.

| Template                          | When to use                                                          |
|-----------------------------------|----------------------------------------------------------------------|
| `paired`                          | Two-column comparison standalone (without the ad-interactive frame). |
| `framing`                         | Topic intro card with a single big idea.                             |
| `cause`                           | Cause-and-effect diagram.                                            |
| `mechanisms`                      | Transmission-mechanism explainer (e.g. monetary policy chain).        |
| `monetary`                        | Monetary-policy specific layout.                                     |
| `impacts`                         | Impact assessment grid (e.g. who wins/loses).                        |
| `deflation` / `inflation`         | Topic-specific inflation visuals.                                    |
| `diagnose`                        | Diagnostic puzzle card (user reads a scenario and classifies).       |
| `puzzle`                          | Active reasoning puzzle.                                             |
| `worked-example`                  | Step-through calculation.                                            |
| `ped-calculation` / `pes-calculation` / `yed-calculation` / `xed-calculation` | Elasticity calculators with built-in formula. |
| `ped-five-frames` / `pes-five-frames` | Five-frame determinant explorer for PED/PES.                     |
| `market-structures-comparison`    | The big PC/monopoly/oligopoly/MC comparison grid.                    |
| `regulatory-capture-explorer`     | The regulatory capture interactive.                                  |
| `welfare-gf-explorer`             | Welfare gain/loss visualisation.                                     |
| `transmission-chain`              | Multi-step transmission chain.                                       |

If you find yourself wanting a specialised template that doesn't exist yet, extend `ad-interactive` with a new optional field instead of adding a new template — the renderer already supports the pattern of "render this block if present, skip if not."

## Decision tree

- "Add a card showing X with examples / comparisons / steps" → `ad-interactive`
- "Add a card with a chart/diagram at the top" → `ad-interactive` + `visualKey`
- "Add a calculation walkthrough for PED/PES/YED/XED" → the matching `*-calculation` template
- "Add a topic intro card" → `ad-interactive` with just `lede` + maybe `visualKey`
- Anything else → `ad-interactive` plus the optional fields that fit

## Reference

Pick a topic with a similar content shape and read its `data-topic.js` before writing a new card from scratch. Strong reference topics:

- `js/data/factors_of_production/data-topic.js` — uses `ad-interactive` heavily with `visualKey`, `flow`, `causes`, `keyTerms`, `economistQuote`, paired blocks
- `js/data/ped/data-topic.js` — elasticity calculation + five-frames
- `js/data/govt_intervention_subsidies/data-topic.js` — welfare-gf-explorer in context

## See also

- **`econos-visual-diagram`** — when a card uses `visualKey`, that skill owns the SVG design language.
- **`econos-new-topic`** — for creating a whole topic from scratch rather than editing one card.
- **`run-econos`** — screenshot the card after editing to confirm it renders.
- **`econos-ship-changes`** — backup main, push, PR, merge, reset. Mandatory before landing changes.
