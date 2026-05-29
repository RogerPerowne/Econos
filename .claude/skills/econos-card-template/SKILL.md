---
name: econos-card-template
description: Use when planning, building or rebuilding an Econos card. Owns the design-pattern catalogue (10 storytelling patterns), the planning-time discipline rule, and the field reference for the `ad-interactive` renderer. Trigger when the user asks to "add a card", "build a card", "rebuild this card", "plan a topic", "which pattern fits", or any time you're about to write multiple cards in a row.
---

# Econos card design

Cards are made of **storytelling patterns**, not field arrangements. The `ad-interactive` renderer is a Swiss-army host for those patterns — but reaching for `ad-interactive` is not a design decision. The design decision is **which pattern best tells this piece of the story**.

The single most common failure mode in this codebase: producing five cards in a row that all use `visualKey + causes + flow + bottomTip + conclusion + examEdge`, just with different content. That's not five cards; that's one card filled five times. Variety lives at the pattern level.

## Planning discipline (mandatory before any topic build)

Every topic plan, before any card writing, must list the **pattern name** assigned to each card. Format:

> Card 1: *Decompose a diagram* — the wave with phase bands.
> Card 2: *Side-by-side pair* — positive vs negative demand shock.
> Card 3: *Comparison table* — SRAS-shift cases against Fight inflation / Support growth.
> Card 4: *Spectrum / regime grid* — five drivers of potential growth.
> Card 5: *Evidence-then-verdict* — benefits and costs weighed to a sustainable-growth judgement.

Two rules:

1. If two consecutive cards use the same pattern, either change one or explicitly justify the repeat.
2. If a topic uses *Tile grid* on three or more cards, you've defaulted. Replace two of them with patterns 1-9 below.

When the rule is broken, the topic feels flat — that's the signal to step back, not push through.

**The rules are about cards, not blocks within a single card.** A single rich card with `pair + causes2 + causes3 + conclusion` is fine if each block does distinct evaluative work (e.g. Benefits vs Costs + Sustainable vs Unsustainable + Who Wins + Verdict). I gutted exactly that card once by over-applying the rule to within-card structure; the visual richness was the whole point. Apply the rules across cards in the topic, not across blocks in a card.

## The 10 storytelling patterns

Each pattern has: the mental model it creates, the renderer wiring, a canonical example you can read for reference, the content shape it suits, and the content shape it does not.

### 1. Sequential flow chain

The mental model: *follow the steps in order, each leads to the next*. A horizontal or vertical chain of step tiles, separator arrows, the next step depending on the previous.

Renderer wiring: `flow: [{ tone, icon, title, sub }, ...]` with `flowTitle`, `flowEmoji`, `flowSep: '→'`.

Canonical example: `js/data/edexcel_a/theme-1/demand/learn-it.js` card 5 (derived demand chain: consumers → cars → steel → labour → wages); `js/data/edexcel_a/theme-2/national-income-and-the-multiplier/learn-it.js` Card 1 (geometric series symbolic flow).

Use for: causal chains, transmission mechanisms, before-during-after sequences, anything where order matters.

Avoid when: the items have equal weight and could be re-ordered — that's a tile grid.

### 2. Side-by-side pair

The mental model: *see both sides at once*. Two columns of head+body content, mirrored layout, often with a `vs` badge.

Renderer wiring: `pairLabel`, `left: { tone, icon, iconStyle, label, text }`, `right: { ... }`, plus `pairFirst: true` to place above the flow row.

Canonical example: `js/data/edexcel_a/theme-2/equilibrium-national-income/learn-it.js` Card 3 (Classical vs Keynesian view of gaps).

Use for: true dichotomies, before/after, positive/negative shocks, fight-inflation vs support-growth, "two ways to think about it".

Avoid when: comparing three or more things (use a comparison table or spectrum), or when one side dominates the discussion (the symmetric layout misleads).

### 3. Spectrum / regime grid

The mental model: *the continuum, not the binary*. 4–6 items positioned along a single dimension, each with regime characteristics, often with a mini-diagram per cell.

Renderer wiring: `causes: [...]` with `causesCols: 4` or `5`, each item having a tone shifted along the spectrum; or the dedicated `ped-five-frames` / `pes-five-frames` templates for elasticity regimes.

Canonical example: `js/data/edexcel_a/theme-1/price-elasticity-of-demand/learn-it.js` Card 4 (PED regimes from perfectly inelastic to perfectly elastic, each with a curve and a real example).

Use for: elasticity regimes, market structures (PC → MC → oligopoly → monopoly), fiscal stances, policy intensities.

Avoid when: only 2-3 regimes (use a pair) or when the underlying dimension is not really continuous.

### 4. Comparison table

The mental model: *how do they stack up on each metric?* Rows are criteria, columns are alternatives, cells optionally carry verdicts (✓ / ✗ / nuanced text).

Renderer wiring: the renderer's `versusRows` block (see `app.js` around line 4750) with leftTone/rightTone, or a multi-column `keyPoints` with `keyPointsCols: 3` and consistent row structure. Specialised template: `market-structures-comparison`.

Canonical example: `js/data/edexcel_a/theme-1/economic-systems/learn-it.js` Card 7 (Russia shock therapy vs China gradualism rated across speed, GDP impact, oligarchy).

Use for: evaluating alternatives against a consistent rubric, weighing trade-offs across multiple dimensions, "X vs Y vs Z on the same criteria".

Avoid when: binary comparison (use a pair) or when the criteria differ between alternatives (the matrix becomes meaningless).

### 5. Worked example walkthrough

The mental model: *see exactly how to apply it*. Scenario at the top, then locked steps that reveal one at a time, ending in a result and exam-edge note.

Renderer wiring: `template: 'worked-example'`, plus `scenario`, `steps: [{ label, hint, answer }, ...]`, `conclusion: { label, text }`. For elasticity, prefer the calculation templates (`ped-calculation`, `pes-calculation`, `yed-calculation`, `xed-calculation`).

Canonical example: `js/data/edexcel_a/theme-2/national-income-and-the-multiplier/learn-it.js` Card 3 (the £10bn green infrastructure calculation through five reveal steps).

Use for: multi-step calculations, applying a formula to a realistic case, building procedural fluency.

Avoid when: the formula has one step and the working would distract from the concept.

### 6. Predict-then-reveal

The mental model: *predict, then check*. User reads a scenario or a list of items, predicts the answer or verdict, then clicks to see reasoning.

Renderer wiring: `template: 'diagnose'` with `scenarios: { title, items: [{ tone, label, text, answer }, ...] }`. Optionally `diagramKey` puts a shared chart above the scenarios. For elasticity-style "predict the type" lists, `productExamples: [{ icon, name, verdict, verdictTone, reasoning }, ...]`.

**`diagnose` template constraint — the `label` field is rendered as a 28×28 px circular badge.** It's designed for single-character indicators ("1"–"5" or "A"–"E"), not multi-word case titles. If you pass "2008 Global Financial Crisis" as the label it overflows the circle and reads as an empty badge. Pass the number in `label` and prepend the case title to the `text` field in bold:

```js
{ tone: 'rose', label: '1', text: '<strong>2008 Global Financial Crisis.</strong> US sub-prime …', answer: '<strong>Negative demand shock.</strong> …' }
```

Also: `diagnose` and `puzzle` are in the `isGenericCard` bypass list at the top of `app.js` so they reach their dedicated renderers even when `diagramKey` is set. If you add a new specialised template that needs the same treatment, add its name to the bypass list.

Canonical example: `js/data/edexcel_a/theme-1/price-elasticity-of-demand/learn-it.js` Card 5 (salt, petrol, holidays, designer trainers — predict PED, then reveal); `js/data/edexcel_a/theme-2/trade-cycle-shocks-and-economic-growth/learn-it.js` Card 2 (five historical shocks to diagnose).

Use for: building diagnostic pattern recognition, classification practice, "spot the type of X in unseen contexts".

Avoid when: the answer is genuinely contested or context-dependent — ambiguous reveals undermine learning.

### 7. Interactive multi-state diagram

The mental model: *click to explore*. One SVG that responds to step buttons by either revealing layers cumulatively or swapping between scenario states. Often paired with an analysis panel below that updates per step.

Renderer wiring: `interactiveDiagram: { svgKey, wide, label, emoji, layers: ['idl-1', 'idl-2', ...], views: [{ label, tone, head, body, analysis, show?: ['idl-N', ...] }, ...] }`. The SVG itself wraps reveal content in `<g class="idl-N" style="display:none">...</g>` groups.

**Two reveal modes — pick one explicitly per topic:**
- **Cumulative build-up (default).** The renderer's `i < vi` rule reveals layers 0..vi-1 inclusive as views advance. Use when each view builds on the previous (Round 1, +Round 2, +Round 3 of the multiplier).
- **Mutually exclusive swap.** Pass an explicit `show: ['some-layer']` on each view to control exactly which layers appear. Use when clicking a step shows ONE thing in isolation (click a phase → only that band lights up; click another phase → previous fades). Layer classes can be anything — use `.phase-boom`, `.phase-slowdown` etc. for readability.

Canonical example: `js/data/edexcel_a/theme-2/national-income-and-the-multiplier/learn-it.js` Card 1 (round-by-round multiplier build-up); `js/data/edexcel_a/theme-1/indirect-taxes-and-subsidies/learn-it.js` Cards 1-4 (tax mechanic + ad valorem + incidence + subsidy mirror).

Use for: layered explainers where order of revelation matters, scenario comparison on a shared visual, anything where manipulating the diagram is the lesson.

Avoid when: a static diagram tells the story without clicks — interaction for its own sake is friction.

### 8. Decompose a diagram

The mental model: *learn by labelling the parts*. A static hero SVG with named regions, callouts, or annotated lines. The visual IS the content; text is supporting.

Renderer wiring: `visualKey: 'svgName'` with `visualLabel`, `visualEmoji`, optionally `visualCaption`. The SVG itself carries the labels.

Canonical example: `js/data/edexcel_a/theme-2/trade-cycle-shocks-and-economic-growth/learn-it.js` Card 1 (the wave with phase bands); `js/data/edexcel_a/theme-2/equilibrium-national-income/learn-it.js` Card 2 (the AD/AS core diagram with E, P*, Y* labelled).

Use for: anatomy diagrams, mechanism frames where the structure is the lesson, single-visual cards where text would crowd the SVG.

Avoid when: the diagram has too many parts to label without clutter — split into Interactive multi-state diagram instead.

### 9. Evidence-then-verdict

The mental model: *weigh the evidence, then judge*. Multiple supporting points or arguments laid out, then a synthesised conclusion or recommendation block at the end.

Renderer wiring: `causes: [...]` for arguments (or `keyPoints` with `keyPointsCompare: true`), followed by `conclusion: { title, text }` carrying the verdict. Often paired with `examEdge` framing how examiners reward the synthesis.

Canonical example: `js/data/edexcel_a/theme-2/equilibrium-national-income/learn-it.js` Card 4 (the five GDP-data filters with the welfare-judgement conclusion); `js/data/edexcel_a/theme-2/trade-cycle-shocks-and-economic-growth/learn-it.js` Card 5 (benefits vs costs leading to "growth is necessary but not sufficient").

Use for: evaluation cards, policy trade-offs, "is X worth it?" framings, the synthesis card at the end of a topic.

Avoid when: there's only one side to the argument — a one-sided "verdict" is a tile grid pretending to be evaluation.

### 10. Tile grid (use sparingly)

The mental model: *parts of a whole*. 2-6 coloured boxes of related items, no implicit order, no verdict, no comparison structure.

Renderer wiring: `causes: [...]`, `causes2: [...]`, `keyPoints: [...]`, with appropriate `Cols` and `Style`.

Canonical example: `js/data/edexcel_a/theme-1/introduction-to-economics/learn-it.js` Card 1 (four factors of production).

Use for: true component decomposition where the items are genuinely equal-weight and unordered (factors of production, components of AD, the standard footer references).

Avoid when (this is the rule): the content has order (use #1), contrast (use #2), gradation (use #3), evaluation criteria (use #4), procedure (use #5), classification (use #6), exploration (use #7), structural emphasis (use #8), or judgement (use #9). If any of those apply, use the matching pattern instead. The tile grid is the *default we are trying to avoid overusing*.

## The anti-pattern

When a *topic* has three or more cards where the **primary** pattern is *Tile grid*, you've defaulted. Replace at least two of those cards with patterns 1-9.

This rule is about the **dominant pattern of each card**, not about the count of tile-grid-like blocks within a single card. A card whose main job is "weigh benefits against costs, then judge" might legitimately use a pair block (Benefits vs Costs) + a causes2 block (Sustainable vs Unsustainable) + a causes3 block (Who Wins) + a verdict conclusion — that's an *Evidence-then-verdict* card, and the multiple tile-style blocks all serve the evaluation. I once gutted exactly that card by deleting two of the three blocks in the name of "consolidation"; the visual richness was the whole point. The rule that matters is variety **across cards in the topic**, not minimalism within any one card.

## Field reference (for the `ad-interactive` renderer)

The renderer at `renderCardAdInteractive` (`js/app.js` around line 4321) reads these fields. Add only what the pattern needs.

| Field           | What it renders                                                  |
|-----------------|------------------------------------------------------------------|
| `id`            | kebab-case, unique within topic                                   |
| `template`      | `'ad-interactive'` for everything in patterns 1-3, 6-10; specialised templates only for 5 (`worked-example`) and certain variants |
| `stepLabel`     | "Learn: Step N of M"                                              |
| `title`         | `h1` card title                                                   |
| `lede`          | Opening paragraph. Use `<strong>` for emphasis                    |
| `ledeStyle`     | `'plain'` for a paragraph; default is a styled callout            |
| `tip`           | `{ icon, tone, text }` — top callout right after the lede         |
| `note`          | `{ tone, icon, head, text }` with `notePosition: 'top'` to render between tip and visualKey (explainer/recap) |
| `visualKey`     | Hero SVG key from `ECONOS_ICONS`. Uses the `econos-visual-diagram` skill |
| `visualLabel`   | Section header above the SVG                                      |
| `visualEmoji`   | Emoji for the section header                                      |
| `visualCaption` | Italic caption below the SVG                                      |
| `interactiveDiagram` | `{ svgKey, wide, maxWidth, label, emoji, layers, views }` — for pattern 7 |
| `pairFirst`     | Boolean — render the pair above the flow/causes                   |
| `pairLabel`     | Pair heading; if it contains "vs" the renderer adds a VS badge    |
| `pairEmoji`     | Emoji for the pair heading                                        |
| `left` / `right`| `{ tone, icon, iconStyle, label, sub, text, points, checks }`     |
| `causesLabel`   | Heading above the `causes` grid                                   |
| `causesEmoji`   | Emoji for the causes heading                                      |
| `causesFirst`   | Boolean — render `causes` before flow (default: after)            |
| `causesCols`    | Explicit column count (the renderer uses `minmax(0, 1fr)` — narrow columns will squish text on mobile, prefer 2-3 for content-heavy items) |
| `causesStyle`   | `'numbered'`, `'numbered-rows'`, `'icon-top'`, or default tinted-flat |
| `causes`        | `[{ tone, icon, head, body, example? }, ...]` — the first tile-grid block |
| `causes2Label` / `causes2Emoji` / `causes2Cols` / `causes2`       | Second tile grid (e.g. SUSTAINABLE VS UNSUSTAINABLE) |
| `causes3Label` / `causes3Emoji` / `causes3Cols` / `causes3`       | Third tile grid (e.g. WHO WINS — added to renderer 2026-05) |
| `flowTitle`     | Heading above the flow row                                        |
| `flowEmoji`     | Emoji for the flow heading                                        |
| `flowSep`       | Separator between flow tiles (`'→'`, `'·'`, `'+'`)                |
| `flow`          | `[{ tone, icon, title, sub }, ...]` — sequential chain            |
| `productExamples` | Predict-then-reveal product cells (pattern 6)                    |
| `keyTerms`      | Glossary grid (standard footer chrome — not a pattern)            |
| `equation`      | `{ lhs, op, rhs, result }` reusable equation                      |
| `economistQuote`| `{ portraitKey, tone, label, quote, attribution }`                |
| `bottomTip`     | Small callout below the flow/causes                               |
| `conclusionPosition` | `'end'` to render conclusion at the very bottom              |
| `conclusion`    | `{ title, text }` — closing summary block                         |
| `examEdge`      | String or `{ title, text }` — yellow exam-edge callout            |
| `quizCta`       | `{ href, label }` — only on the last card of a topic              |

### Tone palette (do not invent)

The six valid tones are `green | amber | blue | purple | rose | slate`. The renderer maps them to fixed hex codes for backgrounds, borders, labels and accents.

## Specialised templates

These exist for content shapes the `ad-interactive` renderer doesn't cover. Use only when the pattern catalogue points to them.

| Template                                   | Pattern it serves | When to use                                              |
|--------------------------------------------|-------------------|----------------------------------------------------------|
| `paired`                                   | 2                 | Two-column comparison standalone (rare — the `ad-interactive` pair block usually works) |
| `framing`                                  | 8 / 10            | Topic intro card with a single big idea                  |
| `cause`                                    | 1                 | Cause-and-effect diagram (legacy — prefer `flow`)        |
| `mechanisms`                               | 1 / 7             | Transmission-mechanism explainer                         |
| `worked-example`                           | 5                 | Step-through calculation (the canonical pattern 5 template) |
| `ped-calculation` / `pes-calculation` / `yed-calculation` / `xed-calculation` | 5 | Elasticity calculators with built-in formula |
| `ped-five-frames` / `pes-five-frames`      | 3                 | Five-frame regime spectrum for PED/PES (canonical pattern 3) |
| `diagnose`                                 | 6                 | Single-scenario diagnostic puzzle                        |
| `puzzle`                                   | 6                 | Active reasoning puzzle (richer than `diagnose`)         |
| `market-structures-comparison`             | 4                 | The big PC/monopoly/oligopoly/MC comparison grid         |
| `transmission-chain`                       | 1                 | Multi-step transmission chain with channel selector      |

### Bespoke one-offs — do not reuse for new topics

These templates were built for a specific topic and don't generalise. If your content needs something like them, prefer extending `ad-interactive` with a new field over copying the template.

- `monetary` — monetary-policy specific layout, tightly coupled to that topic.
- `impacts` — impact assessment grid for one specific card.
- `deflation` / `inflation` — topic-specific deflationary-spiral visuals.
- `regulatory-capture-explorer` — bespoke regulatory-capture animation.
- `welfare-gf-explorer` — bespoke welfare gain/loss explorer.

## Process for building a topic

1. **Plan the patterns first.** List each card with its pattern name from the 10 above. Apply the planning discipline rules. Get user sign-off on the pattern list before writing any cards.
2. **For each card, identify the canonical reference.** Open the referenced topic's `learn-it.js` and read the matching card before writing the new one — it's faster than thinking from scratch.
3. **Wire the fields.** Use the pattern's renderer wiring as the starting point; add only the optional fields the card needs.
4. **Self-review before shipping.** Use `run-econos` to render each card; compare to the mockup or to the pattern's canonical example. Look for the anti-pattern (3+ tile grids) and the consecutive-same-pattern rule.

## See also

- **`econos-visual-diagram`** — when a card uses `visualKey` or `interactiveDiagram`, that skill owns the SVG spec-first workflow and house rules.
- **`econos-new-topic`** — for creating a whole topic from scratch rather than editing one card.
- **`run-econos`** — screenshot the card after editing to confirm it renders.
- **`econos-ship-changes`** — backup main, push, PR, merge, reset.
