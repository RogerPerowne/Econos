---
name: econos-visual-diagram
description: Use when designing, polishing, or translating SVG diagrams for Econos topic cards. Covers the diagram generator library, the 'diagram' block, one-off static diagrams, and hand-authored SVG recipes. Trigger when the user asks for a visual, mockup, diagram, illustration, or graphic on a card — especially if they share a reference image (e.g. a ChatGPT mockup).
---

# Econos visual diagrams

## FIRST CHOICE: use a diagram generator via the `'diagram'` block

Before hand-authoring any SVG, check whether one of the built-in generators covers the topic. This is the preferred path for every standard economics diagram.

The generators live in `window.ECONOS_DIAGRAMS` (populated by `js/diagrams/generators/*.js` and indexed by `js/diagrams/index.js`). They are all built on the `window.EconSvg` primitive layer in `js/diagrams/econ-svg.js`, which handles axes, curves, equilibrium dots, guide lines, tone palette and ID namespacing automatically.

**Available generators:**

| Generator key | What it draws |
|---|---|
| `adasDiagram` | AD/AS diagram — demand-pull, cost-push, monetary, recession, gap modes |
| `ppfDiagram` | PPF/PPC — basic, opportunity cost, trade, growth-shift, efficiency-gap |
| `taxSubsidyDiagram` | Indirect tax or subsidy wedge on a supply/demand diagram |
| `priceControlDiagram` | Price ceiling (`'ceiling'`) or price floor (`'floor'`) |
| `multiplierDiagram` | Spending rounds, ripple effect, or AD-shift view |
| `elasticityDiagram` | Demand or supply curve at any elasticity; optional tax wedge |
| `costCurvesDiagram` | MC, AC, AVC, AFC for a competitive firm |
| `marketStructureDiagram` | AR/MR/MC/AC for monopoly, oligopoly, or perfect competition |
| `labourMarketDiagram` | Labour demand/supply with optional minimum wage or monopsony |
| `phillipsCurve` | SRPC and/or LRPC with NAIRU marker |
| `jCurveDiagram` | Trade balance response to a depreciation/devaluation |
| `fortyFiveDiagram` | Keynesian national income determination (45° diagram) |
| `growthDiagram` | Growth sources, sustainability, or Kuznets curve |

Wire a generator onto any card that uses the `blocks` array via the `'diagram'` block type:

```js
{
  type: 'diagram',
  spec: {
    type: 'adasDiagram',   // generator key
    mode: 'demand-pull',   // generator-specific config
  },
  caption: 'AD shifts right as consumer confidence rises.',  // optional
  height:  260,                                              // optional, px
}
```

The block renders inside the same `.hero-visual` frame used by `heroVisual` blocks — no additional stylesheet needed. Full config options for every generator are documented in `docs/DIAGRAM_LIBRARY.md`.

### Second choice: a one-off static diagram in `js/diagrams/static/`

If no generator produces the right output, check `js/diagrams/static/` for a pre-built one-off SVG file. These are standalone econ charts that don't need parameterisation (e.g. `externalities.js`, `monopoly.js`, `phillips-lorenz.js`). They are registered on both `window.ECONOS_DIAGRAMS` and `window.ECONOS_ICONS`, so they are available to both the `'diagram'` block (via `svgKey`) and legacy `visualKey` cards. Use the `svgKey` form in a `'diagram'` block or a `heroVisual` block to reference them without any code change.

### Third choice: hand-author a brand-new SVG

Only reach for a hand-authored SVG when no generator and no static file fits. Follow `docs/ECON_DIAGRAM_RULES.md` for the full canonical conventions (curve colours, shift styling, equilibrium markers, viewBox margins, tone palette, safe-zone padding, text escaping, `<defs>` scoping). The rules summary is also maintained in the "House rules for econ line charts" and "Tone palette" sections below.

Place the finished SVG string in `js/diagrams/static/<diagram-name>.js` (not in `js/icons.js`). Register it on `window.ECONOS_DIAGRAMS` and optionally mirror it to `window.ECONOS_ICONS` so legacy `visualKey` cards can reach it. Add the file to `PRECACHE_ASSETS` in `sw.js` and bump `CACHE_NAME`.

### `js/icons.js` is now UI/hero/scene icons only

`js/icons.js` (`window.ECONOS_ICONS`) holds UI chrome icons (navigation, action, status), hero illustration SVGs, and scene graphics. Economics diagram SVGs have been relocated to `js/diagrams/static/` and the generator system. Do not add new econ charts to `js/icons.js`.

## Wiring a diagram onto a legacy `ad-interactive` card

For cards that do not yet use `blocks`, the `visualKey` field on an `ad-interactive` card still works. Point it at any key in `window.ECONOS_ICONS` (which includes the static diagram keys mirrored there). The render hook in `js/app.js` (`renderCardAdInteractive`, search for `c.visualKey && I[c.visualKey]`) picks it up automatically — no code changes needed.

For new cards, prefer the `blocks` array with a `'diagram'` block over `visualKey`.

## viewBox conventions

- **Width: 640 by default; widen to 720+ when right-edge labels need a margin.** Matches the card body width on desktop; scales cleanly on mobile. If end-of-curve labels (e.g. "Standard GDP", "1.5°C budget", "Emissions path") sit at `x ≥ 580`, widen the viewBox horizontally rather than repositioning the labels inward — the chart effectively shifts left within visible area which usually looks better than crammed-in labels.
- **Height: whatever the content needs.** Don't pad. Typical range 200–340. If a chart caption/footnote line needs to sit below the x-axis labels (e.g. "Y-axis broken between £2,000 and £12,000…"), extend viewBox height to 360–370 to fit.
- No outer background `<rect>`. The SVG sits transparent on the card body — adding a tinted wrapper rectangle makes the diagram feel disconnected. Use tinted tiles/circles for tone, not a backdrop.

## When to break out of pure SVG: HTML+SVG hybrid heroes

Pure SVG hits a wall on layouts that need: multi-line wrapping text, CSS grid, responsive breakpoints, or an "overlay" element floating on top of other tiles (e.g. a central circle on top of a 2×2 grid). For those, **build the hero as HTML with inline SVG only for the chart bits inside it.** Canonical example: `growthScorecard` in `js/icons.js` — a 2×2 grid of corner tiles with a central circular GDP card overlaid, plus dashed connectors behind. Built as a `<div>`-based layout with inline SVG gauge dials inside each tile.

Two non-obvious things to know when using HTML inside a `visualKey`:

1. **The engine wraps `visualKey` HTML in `line-height:0`.** Your outer wrapper must explicitly set `line-height:1.5` (or whatever your text needs) or every paragraph collapses to zero height and the layout breaks. See `js/app.js` ~line 2489.
2. **Scoped `<style>` blocks inside the visualKey HTML do work.** Use them for media queries — inline styles can't host `@media`. Always scope with a top-level class on the wrapper (e.g. `.growth-scorecard .gs-grid`) so the CSS doesn't leak to the rest of the page. Used to collapse the 2×2 grid to single-column below 560 px without changing inline styles.

```html
<div class="my-hero" style="line-height:1.5;background:#fff;border-radius:14px;padding:18px 14px;font-family:Inter,sans-serif;">
  <style>
    .my-hero .grid { display:grid; grid-template-columns:1fr 1fr; column-gap:170px; }
    @media (max-width: 560px) {
      .my-hero .grid { grid-template-columns:1fr; column-gap:0; }
    }
  </style>
  <!-- ...HTML+SVG content here... -->
</div>
```

Reach for HTML+SVG when: 4 tiles need to surround a centred overlay; tiles need long body text that has to wrap; mobile needs a fundamentally different layout (stacking) from desktop. Stay in pure SVG when: the diagram is essentially a chart with short text labels.

## Tone palette

Six canonical tones map to PATTERN_TONES across the codebase. Use the same hexes inside SVGs for visual consistency:

| Tone   | Fill (light) | Stroke   | Title (dark) | Subtitle |
|--------|-------------|----------|--------------|----------|
| green  | `#ECFDF5`   | `#6EE7B7`| `#065F46`    | `#059669`|
| amber  | `#FFFBEB`   | `#FCD34D`| `#92400E`    | `#B45309`|
| blue   | `#EFF6FF`   | `#93C5FD`| `#1E3A8A`    | `#2563EB`|
| purple | `#F5F3FF`   | `#C4B5FD`| `#5B21B6`    | `#7C3AED`|
| rose   | `#FFF1F2`   | `#FDA4AF`| `#9F1239`    | `#BE123C`|
| slate  | `#F1F5F9`   | `#CBD5E1`| `#334155`    | `#475569`|

Use gradient variants (`linearGradient` light→slightly-darker stop of same tone) on hub-and-spoke circles for lift; flat fills on tile-grid rectangles.

## Reusable `<defs>` block

For hub-and-spoke or any diagram with circles + arrows, copy this pattern:

```xml
<defs>
  <linearGradient id="ec-green" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ECFDF5"/>
    <stop offset="100%" stop-color="#D1FAE5"/>
  </linearGradient>
  <!-- repeat for each tone you need -->
  <filter id="ec-shadow" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
    <feOffset dx="0" dy="2" result="off"/>
    <feComponentTransfer><feFuncA type="linear" slope="0.18"/></feComponentTransfer>
    <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <marker id="ec-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M 0 0 L 10 5 L 0 10 z" fill="#94A3B8"/>
  </marker>
</defs>
```

Prefix `id`s per-diagram (e.g. `pc-` for Phillips curve) so multiple diagrams on the same page never collide.

## Named recipes

### `tile-grid-6` — six labelled examples

Canonical example: `landTypesSvg` and `capitalTypesSvg` in `js/icons.js`.

- viewBox `640 × 332`
- Section header at `y=24`, font-size 13, weight 800, letter-spacing 1; horizontal rule at `y=36` in light tone hex
- Two rows of three tiles: tile width 198, height 130, rounded corners `rx=8`
- Row 1 at `y=46`, row 2 at `y=190`
- Within each tile: emoji or inline icon at `y=96/240`, font-size 38; title at `y=125/269`, size 14 bold; subtitle at `y=146/290`, size 12
- Use any mix of six tones — diversity reads better than repetition

### `hub-and-spoke` — inputs → coordinator → output

Canonical example: `enterpriseCombinationSvg` in `js/icons.js`.

- viewBox `640 × 312`
- Three column header labels at `y=20` (e.g. "FACTOR INPUTS / + COORDINATOR / = OUTPUT")
- Left column: three input circles at `cx=90`, `cy=70/160/250`, `r=30`, each with custom inline icon + label below + reward pill chip below the label
- Centre circle (the hub): `cx=300`, `cy=160`, `r=70`, with icon + multi-line title + descriptor + optional reward pill
- Right column: output circle `cx=550`, `cy=160`, `r=42`
- Optional dashed sub-badge under the hub for a secondary concept (e.g. institutions, externalities)
- Arrow geometry: input arrows start on the input circle's edge facing the hub and end on the hub's edge facing the input; calculate using `cx + r*cos(θ)` where θ points at the hub centre
- Arrow labels: small white pills (`rx=8`, stroke `#CBD5E1`) sitting at the midpoint of each arrow

### `broken-axis-bar-chart` — values with vastly different magnitudes

Canonical example: `incomeSpectrumChart` in `js/icons.js` — five income-decile bars where the top bar (£12,000+) is 60× the bottom (£200) and a linear scale would render the bottom four bars as illegible slivers.

- viewBox ≥ 720 × 372 (gives bottom margin for a two-line footnote)
- Y-axis is linear from 0 to the upper bound of the lower bars (£2,000 in the canonical), THEN a break, THEN a single tick for the outlier (£12,000)
- Break decorations (both required for the convention to be legible):
  1. **Across the Y-axis line itself:** a small white `<rect>` covers the axis line in a 4–6 px band, then two short parallel diagonal slashes are drawn across that band. Example: `<rect x="75" y="105" width="10" height="14" fill="#fff"/>` plus `<line x1="74" y1="116" x2="86" y2="108"/>` repeated at a 4 px offset
  2. **Across the outlier bar itself:** a white horizontal strip + a 6-point zigzag path drawn in the bar's stroke colour, both spanning the bar's width at the same y as the axis break
- Gridlines: linear ones through the lower range, plus a single dashed gridline at the outlier's value level for visual anchoring
- Always annotate: a short caption under the chart stating the broken range explicitly (e.g. *"Y-axis broken between £2,000 and £12,000 so the bottom four bars stay readable"*). The break notation is itself a small data-literacy teaching moment students can use in evaluation answers.
- A second annotation line is often needed to justify the outlier value if it looks aggressive (e.g. *"Top-1% bar reflects wages + capital gains; the bottom decile is wage-only"*).
- Use a 2-view `interactiveDiagram` to pair the broken £ view with a linear %-of-income view. The proportional view doesn't need a break, and contrasting both lenses makes the same inequality story land twice.

### `comparison-row` — three boxes with arrows between them

Canonical example: `regulatoryCaptureSvg` in `js/icons.js`.

- viewBox `640 × 196` (or grow if needed)
- Three rounded rectangle boxes, tone-coded, with bold uppercase header + 1–2 lines of body
- Connecting arrows (forward) along a horizontal axis; optional reverse arc above for capture/feedback dynamics
- Bottom caption rect with a one-line "Result:" summary

## Translation workflow (when user shares a ChatGPT mockup)

ChatGPT-shared HTML/SVG mockups arrive with subtle bugs — arrow directions reversed, coordinates that don't actually intersect, curves labelled wrong. **Don't translate them line-by-line.** Use the spec-first workflow below instead.

### Spec-first workflow (mandatory for line charts)

For any econ line chart (AD/AS, J=W, 45° diagram, output gaps, Phillips curve, etc.), **write the chart spec as plain text BEFORE drawing any SVG** and confirm it with the user. A spec is shorter than an SVG and survives translation; HTML/SVG mockups don't.

A complete spec covers:

1. **viewBox** — chosen for the chart shape (square plot → roughly square viewBox; twin chart → wider)
2. **Plot area** — x range, y range (these define where curves can sit; everything outside is margin for labels and arrow heads)
3. **Each curve** — colour (per house rules below), endpoints `(x₀,y₀)→(x₁,y₁)`, derived SVG slope, what the line semantically represents
4. **Each intersection** — coordinate, mathematically verified by solving the two line equations. State which line(s) the equilibrium sits on (e.g. "(180, 90) — verified on 45° line since 270-180=90")
5. **Each label** — text, position `(x,y)`, anchor (`start`/`middle`/`end`), and the curve/axis it's annotating
6. **Reference lines** — Y_FE markers, dashed leaders to axes, gap arrows
7. **Section header / caption** — text above and below the chart

Echo this spec back to the user as a numbered checklist before writing SVG. One round of "yes / fix that" saves three rounds of iteration after the fact.

### House rules for econ line charts

These conventions are enforced across every chart in the codebase:

**Curve colours (never deviate):**
- `AD` always `#2563EB` (blue)
- `AS` / `SRAS` always `#0B1426` (black)
- `J` (injections) blue · `W` (withdrawals) black on the J=W diagram
- `45° line` and `E` line: 45° in black, E in blue

**Shifts:**
- Line **colour stays the same** on a shift; only solid vs dashed changes
- Old curve = `stroke-dasharray="4 3"` + `opacity="0.55"`
- New curve = solid, full opacity, slightly thicker `stroke-width` (2.2 vs 2 is enough)
- Subscript labels (`AD₁` / `AD₂`, `SRAS₁` / `SRAS₂`) at the right-end of each curve, **off the line**

**Curve labels (the default position):**
- **Always label a curve ABOVE it** unless the curve runs to the top edge or another label clashes there
- "Above" means: for an upward-sloping curve, position the label so the text baseline sits ~10–14 px above the curve at the label's x; for a downward-sloping curve, same — above the curve
- Exceptions in priority order: (1) the curve exits the top of the plot area — label inline at the right endpoint, just past where the curve stops; (2) another label already occupies the space above — move the new label below the curve with the same 10–14 px clearance; (3) the curve is at the chart edge and there's no room above — label below
- When two curves cross, place each label on the side of its own curve, never in the wedge between them where it could read as belonging to either

**Equilibrium markers:**
- Open circle, `fill="#fff"`, `stroke-width="2"`, radius 4–5
- Stroke colour `#2563EB` (AD-blue) for every equilibrium, both old and new — they're "equilibrium" markers, not "curve-X" markers, and using one colour keeps the visual grammar tight
- Section-theme colours (green for boom, amber for oil-shock) are reserved for **shift-direction arrows and the surrounding card chrome**, not the curves or dots

**Equilibrium-point labels — default placement is ABOVE the dot:**
- Label sits directly above the equilibrium circle, centred horizontally
- Convention: `<text x="${cx}" y="${cy - r - 4}" text-anchor="middle">E₀</text>` — `cy - r - 4` puts the baseline ~4 px above the top edge of the circle, so the character body clears the dot with a small visual gap
- Use this for every dot label: `A`, `B`, `C`, `S`, `E₀`–`E₃`, etc. Don't reach for upper-right offsets (`anchor="start"` at `cx+12, cy-4`) — that asymmetry reads as inconsistent across multi-equilibrium charts
- Acceptable to break the convention only when the centred label would clash with a curve label or another dot — in that case nudge horizontally (`cx ± 6`) but stay above

**Reference lines (Y_FE, leaders):**
- Grey `#94A3B8`, `stroke-width="1"`, `stroke-dasharray="3 3"`
- Every equilibrium dot needs a leader to **both** axes (vertical to x-axis, horizontal to y-axis) — not just one
- Y_FE markers extend the full vertical range of the plot area; accept that they visually cross AD/AS (textbook convention)

**Gap arrows (recessionary / inflationary):**
- Double-headed (`marker-start` + `marker-end`), tone-coloured (green for recessionary, amber for inflationary)
- Sit just above the x-axis baseline, with `Gap` label centred above

### Label-clash checklist (mandatory before shipping)

For every text label in the chart:

1. Determine the label's bounding box: text starts at `(x, baseline)`; for `font-size=N`, text top is roughly `baseline - N` and bottom is `baseline`.
2. For every line drawn at any range of x that overlaps the label's x range, compute the line's y at the label's x via the line equation.
3. If the line's y at any x in the label's range falls inside `[baseline - N, baseline]`, **the label clips the line** — move it.

Common failure modes I've shipped accidentally:
- Sub-label below a main label on a shallow-sloping curve → sub-label runs through the curve
- Curve label at the line's right endpoint → label baseline coincides with line, clipping the descenders
- Axis-edge labels (`AD₁`, `AD₂`) placed at `y = baseline - small` → labels clip the x-axis line itself

Fixes are nearly always: shift the label past the line endpoint, or move it clearly above/below the line's y at that x.

### Implementation order

1. **Spec first** (above) → confirm with user
2. **Implement to spec coords** — every constant in the SVG should trace back to a line in the spec
3. **`node --check js/diagrams/static/<name>.js`** (or the generator file) to verify the JS parses
4. **Bump the SW cache** in `sw.js` (diagram files are cache-first; add the new file to `PRECACHE_ASSETS` and increment `CACHE_NAME`)
5. **Render via `run-econos`** — screenshot each affected card, compare to mockup, write up any deltas yourself before asking the user
6. **Only then open the PR**

## Pitfalls (learned the hard way)

- **Don't clip rewards.** Labels below tightly-stacked circles get visually clipped by the next circle. Use pill chips with explicit `y` positioned in the gap between circles, not floating text.
- **Don't put a wide pill at the bottom of a circle's curve.** Circle width at `y = cy + 0.95r` is roughly `0.3 × diameter`. Compute extent before placing.
- **Always letter-space uppercase labels** (`letter-spacing="1"` to `"1.4"`). Tight uppercase reads as a typo.
- **Marker arrows look anaemic at default size.** Use `markerWidth="7" markerHeight="7"` and `stroke-width="2.2"+` for input arrows; thicker (`2.8`+) and a different colour for the output arrow to emphasise direction.
- **Emoji icons in stacked rows render larger than CSS expects on mobile.** A `<span>🏭</span>` next to text often appears 18–24px tall on iOS even though the surrounding text is 12.5px, so adjacent rows overlap. Wrap each icon in `<span style="font-size:15px;line-height:1;flex-shrink:0;width:22px;display:inline-flex;justify-content:center;">…</span>` and give the row `line-height:1.4; min-height:22px`.
- **Template-specific renderer fields.** Not every ad-interactive optional block works across every renderer — `notePosition: 'top'` originally only fired in `renderCardGeneric`, not `renderCardAdInteractive`. Before relying on a block, check it actually exists in the function dispatched by the card's `template` (search `js/app.js` for `function renderCard<Name>`). Add the slot to the specific renderer if it's missing.
- **SVG markers can render bigger than their `markerWidth`/`markerHeight`.** Multiple times I've drawn a `markerWidth="8" markerHeight="8"` arrow that came out 30+ px on screen — looking like a flag or pennant instead of a slim indicator. Default `markerUnits="strokeWidth"` scales the marker by stroke width and the rotation under `orient="auto"` can read weirdly for vertical lines. **For any directional indicator smaller than ~12 px, draw it as an inline `<polygon>` instead of using a marker.** You get exact control over size and orientation; you skip the rotation maths entirely.
- **`<defs>` are scoped to the SVG they live in once they're out of the DOM.** When two cards render at different times, marker IDs defined in Card A's SVG are not visible to Card B's SVG — `url(#tc-arr-amber)` from B's path silently produces a bare line with no arrowhead. **Put `<defs>` inside every SVG that references them**, even if it means duplicating the marker block. Cards are rendered independently; don't rely on document-wide ID lookup for SVG defs across cards.
- **viewBox clips silently — both edges.** A text label at `x=586` in a `viewBox="0 0 640 320"` chart renders fine if the label is short — but `"Potential GDP"` at ~80 px wide extends to x=666, past the viewBox right edge, and gets clipped to `"Potential C"`. The same trap exists on the **left**: an axis subtitle with `text-anchor="end"` at `x="36"` (e.g. `"price level"` at ~55 px wide) starts at roughly `x=-19` and the leading `"pr"` clips, leaving the user reading `"ice level"`. Default to `text-anchor="start"` at `x="8"` for y-axis subtitles, and audit both edges before shipping: for `start`-anchored text, `label_x + estimated_width ≤ viewBox_width`; for `end`-anchored text, `label_x − estimated_width ≥ 0`.
- **Multi-layer interactive SVGs need silent faded layers.** When the same chart has multiple step views (Layer 1 / 2 / 3 / 4 etc.) and curves accumulate or fade across views, **don't repeat every label in every layer**. In each step, only the *active* curves and the *new* equilibrium get full labels (P-axis tick, Y-axis tick, equilibrium letter, axis dashed leaders). Older faded curves become tiny grey dots with no labels — the chart memory lives in the description column on the right. Repeating "AD₀ AD₁ AD₂" in every layer creates a stacked-label pile-up at the bottom right that ruins the chart. Canonical: the `inflation2022AdAs` SVG in `js/icons.js` — only the layer's own equilibrium carries P/Y/E labels.
- **Bezier curves are guesswork for smooth periodic shapes.** Three attempts to draw a trade-cycle wave with cubic Beziers all had visible kinks at the turning points (peaks/troughs weren't flat) or wrong amplitudes. For any curve where the math defines the shape (sine waves, exponentials, logistic curves), **sample the function at every 10–20 px and emit a polyline with `stroke-linejoin="round"`**. The visual is indistinguishable from a smooth curve at chart scale, and you skip all the control-point gymnastics. Save Beziers for genuinely irregular shapes that don't have a closed-form equation.
- **For a Bezier to have a TRUE flat peak/trough**, the control points either side of the joint must be horizontal — same y as the joint. Otherwise the curve is still descending or ascending through the turning point and reads as a kink. If you must use a Bezier through a peak at `(xp, yp)`, the second control of the incoming segment AND the first control of the outgoing segment both go at `(_, yp)`, with their x positions ~30–60 px either side of the joint.
- **Markers placed on a Bezier curve must be computed parametrically — eyeballing drifts them off the line.** I shipped the Kuznets curve with country dots sitting 10–30 px below the curve at every position because I positioned them by sight. Fix: for a cubic Bezier with control points `P0, P1, P2, P3`, the on-curve y for a chosen x is `y(t) = (1-t)³·y0 + 3(1-t)²t·y1 + 3(1-t)t²·y2 + t³·y3`, where `t` is solved from the same formula on x. Solve `x(t) = chosen_x` iteratively (binary-search over t∈[0,1] is fine — converges in ~10 steps to <0.01 px), then plug t into the y formula. Spend the 5 minutes; don't eyeball.
- **Label-on-shaded-region: inside the shape, or outside with an arrow — choose by area.** If the shaded area is large enough to host the full label cleanly inside (label width × height fits comfortably with breathing room), put the label inside at the area's centroid (or vertical midpoint at the label's x). If the area is a small wedge or thin strip — label spills outside the shape — put the label in adjacent white space and add a short arrow (shaft `<line>` + arrowhead `<polygon>`) pointing into the shape. Both approaches in `growthSustainability3View`: "Natural-capital depletion" sits inside the depletion gap at the vertical midpoint between the two GDP curves; "debt to future" sits below the budget line with a red arrow pointing up into the small carbon-debt wedge.
- To find the vertical midpoint of a region bounded by two curves at a chosen x: compute each curve's y at that x (parametrically — see above) and average them.

## Don't reinvent

If the request maps cleanly to one of the named recipes, reuse the dimensions and structure of the canonical example file rather than designing from scratch. Consistency across diagrams is more valuable than per-diagram cleverness.

## See also

- **`docs/DIAGRAM_LIBRARY.md`** — full config reference for every generator (`window.EconSvg` primitives, `window.ECONOS_DIAGRAMS` generators, `'diagram'` block schema).
- **`docs/ECON_DIAGRAM_RULES.md`** — canonical conventions for hand-authored SVGs (curve colours, shifts, equilibrium markers, viewBox, safe-zone padding, text escaping).
- **`docs/RENDER_BLOCKS.md`** — block schema reference, dev tooling (`renderer-lab.html`, `EconosDebug.validate`, `?dev=1`, `?screenshot=1`).
- **`run-econos`** — drive a headless browser to screenshot a card and visually verify the diagram renders. Run this after every SVG edit; do not assume the first draft is correct.
- **`econos-ship-changes`** — when the diagram is final, follow the backup-first workflow before merging. Do not push directly to main without snapshotting it.
- **`econos-card-template`** — for the surrounding card fields and block types.
