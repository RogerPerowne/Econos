---
name: econos-mockup-analyse
description: Use as the FIRST step whenever the user shares a mockup image (a ChatGPT/Figma card design) to build into an Econos card. Decomposes the image into a structured build plan — every region mapped to a block type, every diagram mapped to an econDiagram chart family, with confidence scores and a flagged list of anything no block covers — BEFORE any data file is written. Trigger on "build this card from the mockup", "turn this image into a card", "match this design", or whenever you receive a card mockup image.
---

# Analysing a mockup before building

Claude's mockup failures come from translating a whole image to data in one leap, by eye, with no scaffolding. This skill forces the leap into two steps: **decompose first** (this skill), then **build + iterate** (`econos-match-mockup`). Never start writing the card's `blocks: [...]` until you've produced the decomposition below.

## The principle

- **The mockup conveys design intent. The economics must be right regardless.** You are an economist building cards for students, not a tracing program. If the mockup has a factual error (a curve mislabelled, a shift direction that contradicts the analysis, a wrong UK figure, an equilibrium off the intersection, a kink at a turning point), build the **correct** version and note the correction. Do not faithfully reproduce a mistake. (Match stylistic choices — tones, layout, badges — exactly; those are deliberate.)
- **Composition before wording.** Reproduce the *structure* the image shows. Shorten text before changing layout.
- **Reuse before invention.** Map each region to an existing block or chart family. Only flag a region as "no block covers this" when you genuinely can't.

## Step 1 — Read the chrome, then the body

Every Econos card has fixed chrome (top bar, green progress, "SESSION n OF m · LEARN", step label, title, lede, a green ✓ tip under the lede, a purple EXAM EDGE at the bottom). Note the **title**, **lede**, **step label**, **tip text**, and **exam-edge text** first — these are card-level fields, not blocks.

Then walk the body **top to bottom**, one visual region at a time.

## Step 2 — Map each region to a block

For each region, pick the closest block from the catalogue (full reference: `docs/RENDER_BLOCKS.md`; cheat sheet in `econos-card-template`). The common ones:

| What the region looks like | Block |
|---|---|
| Small uppercase eyebrow + icon + rule | `sectionHeader` |
| Green/blue check-callout strip | `calloutStrip` / `tip` |
| A row/grid of equal coloured boxes | `grid` of `tile` |
| Two coloured columns with "vs" | `pair` / `versusRows` |
| Ordered A→B→C with arrows | `mechanismChain` / `stepChain` |
| 4–6 bands along one dimension | `spectrum` |
| Case-study cards each ending in a verdict pill | `caseStudies` |
| A headline metric / gauge | `metricCard` / `targetGauge` |
| A big coloured equation | `equationHero` |
| A worked calculation left→right | `workedExampleStrip` |
| Central object + satellites | `satelliteDiagram` |
| A 2×2 payoff grid | `payoffMatrix` |
| A green "big idea" lock-in | `bigIdea` |
| Purple exam tip | `examEdge` |
| **An economics chart (axes + curves)** | **`econDiagram`** — see Step 3 |

## Step 3 — Map every chart to an econDiagram chart family

Do **not** plan to hand-author SVG. Every standard econ diagram is a declarative `econDiagram` chart family (see `econos-econ-diagram` for the picker and view schema). Identify the family:

`adas` (AD/AS) · `phillips` · `ppf` · `supplyDemand` (incl. tax/subsidy/price-control/welfare via views) · `externalities-neg`/`externalities-pos` · `costCurves` · `marketStructure` · `labourMarket` · `jcurve` · `laffer` · `lorenz` · `kuznets` · `fortyFive` · `growth` · `publicGoods` · `payoffMatrix` (block, for game theory).

For each chart, also note: how many **views** (the step tabs / shift sequence) the mockup shows, and what each view's shifts/points/labels are.

If the chart is a genuinely bespoke shape no family covers (an indifference-curve map, an Edgeworth box, a custom flow), flag it under `unresolved` — that's a candidate for a new chart family, not a hand-rolled SVG dropped into the card.

## Step 4 — Emit the decomposition JSON

Output exactly this shape (it becomes the build plan):

```json
{
  "card": {
    "title": "…", "lede": "…", "stepLabel": "Learn: Step n of m",
    "tip": "…", "examEdge": "…",
    "density": "standard"
  },
  "regions": [
    { "order": 1, "block": "sectionHeader", "content": { "label": "THE TRADE-OFF", "icon": "scale" }, "confidence": 0.95 },
    { "order": 2, "block": "econDiagram", "chart": "phillips",
      "views": [ { "label": "SRPC₀", "points": ["A"] }, { "label": "Stagflation", "shifts": { "SRPC": 170 }, "points": ["A","C"] } ],
      "confidence": 0.8, "notes": "mockup labels the LRPC vertical at NAIRU — correct" },
    { "order": 3, "block": "grid", "cols": 3, "children": [ "tile", "tile", "tile" ], "confidence": 0.9 }
  ],
  "corrections": [
    { "region": 2, "issue": "mockup arrow says 'AD left → inflation up'", "fix": "that's cost-push; relabelled the shift / aligned the analysis text" }
  ],
  "unresolved": [
    { "region": 4, "reason": "indifference-curve map — no chart family yet", "suggestion": "candidate new econDiagram family" }
  ]
}
```

- **`confidence`** per region (0–1). Anything < 0.6 is a region you're unsure how to render — surface it.
- **`corrections`** — every factual fix you'll make (so the PR/user knows).
- **`unresolved`** — regions no block/family covers. These are the catalogue's growth backlog, not an excuse to inline SVG or `customHtml`.

## Step 5 — Hand off

Pass the decomposition to `econos-match-mockup` to write the card JSON and iterate it against the mockup overlay until the similarity score is high. Do not skip the iterate step — the first build is an estimate; the overlay loop is what makes it match.

## Don'ts

- Don't write `blocks: [...]` before the decomposition exists.
- Don't plan a hand-rolled `<svg>` for any standard econ diagram — use a chart family.
- Don't silently "fix" stylistic choices or pedagogical simplifications. Only correct genuine economics/factual errors, and always log them under `corrections`.
- Don't invent data (a region's number, a UK statistic). If the mockup doesn't give it and you don't know it, leave it qualitative and flag it.
