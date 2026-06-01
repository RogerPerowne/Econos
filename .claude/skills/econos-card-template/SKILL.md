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

## Design decision framework

The single biggest failure mode is defaulting to `visualKey + causes + flow + bottomTip + conclusion + examEdge` regardless of what the card is actually trying to teach. Use this framework to pick deliberately. Run through it in order: lesson job → pattern → blocks → block style → anti-pattern audit.

### Step 1 · Pattern selection by lesson's job

Ask: *"What is the student supposed to come away knowing or able to do?"* That sentence maps to a pattern:

| If the lesson is fundamentally about… | Pattern | Tell-tale you've picked wrong |
|---|---|---|
| What happens next as a result of X | **Sequential flow chain** | Tiles could be reordered without losing meaning → it's Tile grid |
| Choosing between two opposing things | **Side-by-side pair** | One side has 3× the content of the other → use Evidence-then-verdict |
| Where on a continuum each example sits | **Spectrum / regime grid** | You can't name the dimension being graded → use Tile grid (or rethink) |
| Which option wins on which criterion | **Comparison table** | Criteria differ between alternatives → the matrix has empty cells |
| How to apply a formula procedurally | **Worked example** | Step 1 IS the whole calculation → use Decompose instead |
| Spotting the type in unseen cases | **Predict-then-reveal** | The "answer" is genuinely contested → ambiguous reveals undermine learning |
| Manipulating the diagram IS the lesson | **Interactive multi-state** | A static image says the same thing → interaction is theatre |
| Anatomy of one diagram | **Decompose a diagram** | More than ~8 labels → split into Interactive multi-state |
| Weighing pros and cons to a judgement | **Evidence-then-verdict** | There's no real verdict, just a list → it's Tile grid |
| Equal-weight, unordered components | **Tile grid** | Any of the above 9 applies → pick the matching pattern |

### Step 2 · Block composition by pattern

Each pattern has a *core block set*. Add other blocks only when each does distinct work — and resist adding more.

| Pattern | Core blocks | Common additions |
|---|---|---|
| Sequential flow chain | `flow` | `tip` (intro), `bottomTip` (caveat), `conclusion` |
| Side-by-side pair | `left`/`right` + `pairLabel` (+ `pairFirst: true`) | `bottomTip`, `causes2` (worked cases) |
| Spectrum / regime grid | `causes` with `causesCols: 4-5` + `'numbered'`/`'numbered-rows'` | Static `visualKey` (continuum diagram), `bottomTip` |
| Comparison table | `versusRows` | `causes2` (case studies), `conclusion` |
| Worked example | `template: 'worked-example'` + `scenario` + `steps` + `conclusion` | `examEdge` (mark-scheme link) |
| Predict-then-reveal | `template: 'diagnose'` / `'puzzle'` + scenarios | Shared `diagramKey` above scenarios |
| Interactive multi-state | `interactiveDiagram` (svgKey + layers + views) | Closing `causes` (5-tile summary), `conclusion` |
| Decompose a diagram | `visualKey` + `visualLabel` + `visualCaption` | `causes` (annotation panels), `bottomTip` (sub-concept) |
| Evidence-then-verdict | `pair` + `causes2` + (`causes3`?) + `conclusion` ✦ | The kitchen-sink card — be generous here |
| Tile grid | `causes` (default style) | Resist additions — extras are a sign you wanted a different pattern |

✦ Evidence-then-verdict is the ONE card where 3+ tile-style blocks legitimately co-exist, because each block does distinct evaluative work (Benefits vs Costs + Sustainable vs Unsustainable + Who Wins + Verdict).

### Step 3 · `causes` block style by content shape

Pick by *item count* × *body density per item* × *column constraint*:

| Items | Body length per item | Column constraint | → Style | Why |
|---|---|---|---|---|
| 2-3 | 1 sentence | Wide columns | *default* (no `causesFirst`) | Lightweight side-by-side; no styling overhead |
| 3-5 | 1 sentence | 4-5 columns | `'numbered'` | Outlined numbered circle on top; reads as "N parallel categories" |
| **4-7** | **Rich (3-4 sentences + data + stats)** | **Full row width** | **`'numbered-rows'`** | Stacked rows; each item gets the full body width it needs |
| 3-6 | Short, but **titles are long** | 4-up tile grid | `'icon-top'` (or `causes3Style: 'icon-top'`) | Title moves to its own line; no overflow |
| 3-4 | Medium body | Standard | `'tinted-flat'` | Flatter aesthetic, less colour weight |
| Any | Technical/numerical (tone is distracting) | Standard | `'plain-white'` | White card, tone only in title; clean for formulas |

**Hard-won rules:**
- **`causesStyle` is silently ignored without `causesFirst: true`.** The unstyled branch of the renderer takes over. Symptom: "I set numbered-rows and nothing changed." Always set `causesFirst: true` when you use a style.
- **5-item rows are the sweet spot for `numbered`/`numbered-rows`.** Six numbered items feels arbitrary; three feels like a tile grid pretending to be sequential.
- **Long titles in 4-up grids almost always need `icon-top`.** Side-by-side icon+title only works for one-word titles in 4-up.

### Step 4 · Specialised template, or `ad-interactive`?

Reach for a specialised template only when the content shape genuinely fights against `ad-interactive`:

| Template | Reach for it when |
|---|---|
| `worked-example` | The reveal sequence IS the pedagogy — hidden steps + reveal-on-click |
| `diagnose` / `puzzle` | Fast-feedback classification practice (predict the type, click for verdict) |
| `ped-/pes-/yed-/xed-calculation` | An elasticity formula with input boxes and live result |
| `ped-/pes-five-frames` | The 5 elasticity regimes specifically — don't reuse for non-elasticity spectrums |
| `transmission-chain` | 5+ step transmission with channel selector — too rich for `flow` |
| `market-structures-comparison` | The canonical PC/Mon/Oligopoly/MC comparison grid |
| `paired` | Standalone two-column comparison (rare — the `pair` block inside `ad-interactive` usually works) |
| `framing` | Topic-intro card with a single big-idea hero |

**Never reach for**: `monetary`, `impacts`, `deflation`, `inflation`, `regulatory-capture-explorer`, `welfare-gf-explorer`. These are bespoke one-offs that don't generalise — extend `ad-interactive` with a new field instead.

### Step 5 · Pre-ship anti-pattern audit

Before opening the PR, scan the topic for these flags:

| Symptom | Likely real problem | Fix |
|---|---|---|
| 3+ cards in a row use `visualKey + causes` | Defaulted to Decompose-then-Tile | Replace 1-2 with Pair, Flow, Comparison, or Evidence-then-verdict |
| Same emoji vocabulary across 5 cards | Pattern hasn't actually varied | Pattern audit — name each card's pattern explicitly |
| Card has 4+ tile blocks but no `conclusion` | Tile grid masquerading as evaluation | Add a verdict, or restructure to Evidence-then-verdict |
| `causesStyle` set but tiles look unstyled | `causesFirst: true` missing | Add the flag |
| Long titles overflowing 4-up tile rows | Side-by-side icon+title wrong here | Switch to `icon-top` (or `causes3Style: 'icon-top'`) |
| Bars in a chart vary by 50× | Linear axis renders smaller bars as unreadable slivers | Broken-axis convention (see `econos-visual-diagram`) |
| Right-edge SVG labels clipped | viewBox too narrow | Widen viewBox horizontally |
| Consecutive cards feel disconnected when they cover the same dimensions | No visual rhyme — different tones, different layouts | Reuse tone palette and tile shape across the related cards |

### Quick mental flowchart

1. **Is the lesson testing a specific procedure** (calculate, classify, walk-through)? → specialised template (`worked-example`, `diagnose`, calculator)
2. **Otherwise, name the lesson's job in one sentence.** Match Step 1 → pattern
3. **What blocks does that pattern need at minimum?** (Step 2.) Add others only when each does distinct work
4. **Within tile blocks, what's the item count × body density?** (Step 3.) → block style
5. **Does this card need to echo an adjacent card** because they cover the same dimensions in different lenses? Reuse tones and tile layouts
6. **Run the anti-pattern audit** (Step 5) before opening the PR

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
| `left` / `right`| `{ tone, icon, iconStyle, label, sub, labelCenter, text, points, checks, rows, example }` — `rows: [{icon, text}]` gives per-item icon rows with dividers; `example: {icon, label, text}` adds a bottom example box; `labelCenter: true` centres the header (used on the supply-side pair, Macro Objectives card 5) |
| `diagnoseRows`  | `[{ label, tone, icon, case, prompt?, verdict, verdictIcon?, pills: [{label, dir:'up'\|'down', tone}] }, ...]` — predict-then-reveal rows: case on the left, a Verdict box with coloured ↑/↓ pills on the right. With `diagnoseRowsLabel`/`diagnoseRowsEmoji`. Renders right after the pair slot. Pattern 6 inside `ad-interactive` when you also need a `flow`/`bottomTip` (the standalone `diagnose` template can't host those). Canonical: Macro Objectives card 3 |
| `causesLabel`   | Heading above the `causes` grid                                   |
| `causesEmoji`   | Emoji for the causes heading                                      |
| `causesFirst`   | Boolean — render `causes` before flow (default: after)            |
| `causesCols`    | Explicit column count (the renderer uses `minmax(0, 1fr)` — narrow columns will squish text on mobile, prefer 2-3 for content-heavy items) |
| `causesStyle`   | `'numbered'`, `'numbered-rows'`, `'icon-top'`, `'tinted-flat'`, or default ⚠ requires `causesFirst: true` |
| `causes`        | `[{ tone, icon, head, body, example? }, ...]` — the first tile-grid block |
| `causes2Label` / `causes2Emoji` / `causes2Cols` / `causes2`       | Second tile grid (e.g. SUSTAINABLE VS UNSUSTAINABLE) |
| `causes3Style`  | `'icon-top'` — stack icon (white square) above title in a `causes3` tile so long titles don't get clipped in 4-up grids |
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

### Styled-causes gate: `causesFirst: true` (non-obvious)

`causesStyle: 'numbered' | 'numbered-rows' | 'icon-top' | 'tinted-flat'` is only honoured by the `causesFirst` branch of the renderer. Without `causesFirst: true` set on the card, the engine falls through to the default non-first branch (`app.js` ~line 4762) which renders a generic side-by-side icon+title tile and silently ignores the style. **If a styled causes block isn't rendering, the missing field is almost always `causesFirst: true`.**

`causesFirst: true` also shifts both `causes` and `causes2` upward in the render order (above the flow / steps / equation / letterFormula blocks). If you want the styled causes to appear later in the card, you need to place other content (interactiveDiagram, equation etc.) before the causes definition in the data object and accept that the renderer dictates the position regardless.

### Canonical examples of each style

For copy-paste reference when picking a style (the decision rubric lives in *Design decision framework · Step 3*):

- **`numbered`** — `the-impact-of-economic-growth` card 2 (income spectrum, pre-switch); good for 3–5 equal-weight numbered categories in a column grid
- **`numbered-rows`** — `inflation-measurement-and-costs` card 4; `causes-of-inflation-and-deflation` cards 2 and 6; `the-impact-of-economic-growth` card 2 (income spectrum, final form). 4–7 items with rich body content
- **`icon-top`** — `the-impact-of-economic-growth` card 6 A* framework (via `causes3Style`). 4-up tile rows where titles risk overflow
- **`tinted-flat`** — `equilibrium-national-income` card 3 (Classical vs Keynesian)
- **`plain-white`** — `measures-of-economic-performance` cards 2/3/4/5/6 (nominal-vs-real, output gap, etc. — technical/numerical content)

### Visual rhyming across cards

When consecutive cards each have a tile/row sequence of similar size (e.g. 5 items each), echo the layout to make the cards feel like a coherent series. Examples in `the-impact-of-economic-growth`:

- Card 1's closing 5-tile `flow` row (filled tone-accent circles 1–5 above title) and Card 2's `numbered-rows` spectrum (outlined numbered circles 1–5 above body) both use "circles above titles" — the visual rhyme signals "same series of 5 things, two different angles".
- Card 1's hub-and-spoke scorecard tiles use the same five tone colours (rose, amber, blue, purple, green) as Card 2's bar chart bars and Card 2's spectrum rows. The shared colour grammar lets students mentally connect the dimensions across cards.

Don't force a rhyme that isn't there — but when two cards genuinely cover the same dimensions in different lenses, reusing tones and tile layouts is high-leverage.

### Interactive 2-view chart for "same data, two lenses"

The `interactiveDiagram` block isn't just for cumulative reveals (multiplier rounds) or mutually-exclusive states (Kuznets vs natural-capital vs carbon). It's also the right shape for *one data set viewed two ways* — e.g. £ absolute gain vs % of household income on Card 2 of `the-impact-of-economic-growth`. Each view's analysis panel teaches the framing that makes that lens valuable. Use when the same numbers tell two different evaluation stories.

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

## Block taxonomy — pick the styling by the lesson's job

The patterns above are the *story*. This is the *render vocabulary* — every
core block in the generic field-based renderer (`framing` / `renderCardGeneric`,
`js/app.js`), grouped by the pedagogical job it does. Pick by job, then vary
the block across consecutive cards so the topic doesn't read as one card
five times. Every block listed is mobile-responsive (chart-beside-text and
vs-pairs stack on phones) and draws colour from the named tone family
(green / amber / blue / rose / purple / slate) — never raw hex in data.

### Hook & framing
| Job | Block | Character |
|---|---|---|
| One-line essence at the top | `tip` (and a late `tipLate`) | Coloured strip, icon + sentence. A green ✅ for the take-home, an amber ⚠️ for a caveat. |
| A short framing note mid-card | `note` (object or array) | Tinted callout, icon circle + bold head + body. Stack 2–3 for a "what this means" block (icon circles, no numbers). |

### Define a concept
| Job | Block | Character |
|---|---|---|
| Term ⇆ meaning, two facets | `comparison` (left/right) | Two equal tinted cards with a dark **VS** badge, big centred icons. "Definition vs Purpose", "Utility vs Budget constraint". |
| Vocabulary list | `keyTerms` | Term + definition grid (footer chrome). |

### Contrast & conflict — the "vs" family (all share the dark VS badge)
| Job | Block | When |
|---|---|---|
| X vs Y at a glance | `comparison` | One clean two-way contrast, icon-led, short captions. |
| Same input → different output | `splitDecision` | Two structured cards: name → premise → interpretation → ↓ → bold conclusion. Two economists, two firms reaching opposite calls. |
| Several tensions / trade-offs | `versusList` | A *stack* of "A vs B" rows, each with a note below. "Consumers vs Firms", "Growth vs Environment". |
| Every feature of A vs every feature of B | `paired` (`left`/`right` points) | Two bullet-list columns. Micro vs Macro, Positive vs Normative. |

### List reasons / factors / types (unordered)
| Job | Block | When |
|---|---|---|
| 2–4 reasons / factors | `causes` (+ `causes2`) | The workhorse icon tiles. `causesStyle` needs `causesFirst: true` (see gate above). |
| Each item deserves colour + an example | `methodGrid` | Tone cards: tinted title band + icon + body + italic "Example:" footer. "What economists use instead", "Limits to rationality". No numbers — use where a numbered block sits nearby. |
| Principles / aphorisms | `branches: 'quotes'` | Pull-quote tiles with an oversized tone mark. |

### Parallel set of N (use with care)
| Job | Block | When |
|---|---|---|
| Genuinely parallel triad/quad | `branches: 'triptych'` | Numbered columns. **Only** when items are equal-weight AND no other numbered block (a `flow`) sits nearby — else the numerals clash (use `methodGrid` or `versusList` instead). |

### Sequence / process / mechanism
| Job | Block | When |
|---|---|---|
| Ordered steps | `flow` (+ `flowBottom`) | Numbered circles joined by dashed arrows. Icons must be **thematic** (🔍 ⚖️ 💡), never keycap-number emoji — those duplicate the auto-numbers. |

### Data, diagrams & worked examples
| Job | Block | When |
|---|---|---|
| Reference mapping | `table` | 2-col label → value, light borders. |
| A drawn relationship | chart toolkit (`ECONOS_PPF.render`) / dial engine | Never hand-roll SVG. On-curve points declared via `intersection`/`on:`/`shape:through`. |
| Worked example beside a chart | `diagramPanel` | Chart + bullets (`layout:'side'|'stacked'`). `position:'after-causes'|'after-table'` lands the diagram where the mockup wants it (often last, as the payoff). |
| Click-through multi-state diagram | `interactiveDiagram` / `ad-interactive` | Pattern 7. |

### Consolidate
| Job | Block | Character |
|---|---|---|
| The take-home | `keyTakeaway` | Amber box, 32px star — geometry matches Exam Edge. |
| The exam gem | `examEdge` | Purple box, ⭐. |

### Variation rule (the whole point)
Rotate blocks across consecutive cards. The three "vs" blocks
(`comparison` / `splitDecision` / `versusList`) are visually coherent (shared
VS badge) but pedagogically distinct — reach for the one whose *structure*
matches the content, not the first that compares two things. If two
consecutive cards would both be `causes` tile-grids, convert one to
`methodGrid`, `versusList`, or a `flow`.

## See also

- **`econos-visual-diagram`** — when a card uses `visualKey` or `interactiveDiagram`, that skill owns the SVG spec-first workflow and house rules.
- **`econos-new-topic`** — for creating a whole topic from scratch rather than editing one card.
- **`run-econos`** — screenshot the card after editing to confirm it renders.
- **`econos-ship-changes`** — backup main, push, PR, merge, reset.
