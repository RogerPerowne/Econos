---
name: econos-visual-diagram
description: Use when designing, polishing, or translating SVG diagrams for Econos topic cards. Covers the tone palette, viewBox conventions, the visualKey wiring, and named recipes (tile-grid-6, hub-and-spoke, comparison-row). Trigger when the user asks for a visual, mockup, diagram, illustration, or graphic on a card — especially if they share a reference image (e.g. a ChatGPT mockup).
---

# Econos visual diagrams

All hero SVG visuals on topic cards are inline SVG strings in `window.ECONOS_ICONS` (file: `js/icons.js`). They render onto `ad-interactive` cards via a single `visualKey` field — there is no separate component or build step.

## Wiring a diagram onto a card

1. Add the SVG string to the `ECONOS_ICONS` object in `js/icons.js` under a descriptive camelCase key, e.g. `phillipsCurveSvg`.
2. On the target `ad-interactive` card in `js/data/<topic>/data-topic.js`, add `visualKey: 'phillipsCurveSvg'` right after `lede`. That's it.
3. The render hook lives in `renderCardAdInteractive` in `js/app.js` (search for `c.visualKey && I[c.visualKey]`) — do not duplicate it.

## viewBox conventions

- **Width: always 640.** Matches the card body width on desktop; scales cleanly on mobile.
- **Height: whatever the content needs.** Don't pad. Typical range 200–340.
- No outer background `<rect>`. The SVG sits transparent on the card body — adding a tinted wrapper rectangle makes the diagram feel disconnected. Use tinted tiles/circles for tone, not a backdrop.

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

**Equilibrium markers:**
- Open circle, `fill="#fff"`, `stroke-width="2"`, radius 4–5
- Stroke colour `#2563EB` (AD-blue) for every equilibrium, both old and new — they're "equilibrium" markers, not "curve-X" markers, and using one colour keeps the visual grammar tight
- Section-theme colours (green for boom, amber for oil-shock) are reserved for **shift-direction arrows and the surrounding card chrome**, not the curves or dots

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
3. **`node --check js/icons.js`** to verify the SVG string parses
4. **Bump the SW cache** in `sw.js` (`icons.js` is cache-first; users will see stale charts otherwise)
5. **Render via `run-econos`** — screenshot each affected card, compare to mockup, write up any deltas yourself before asking the user
6. **Only then open the PR**

## Pitfalls (learned the hard way)

- **Don't clip rewards.** Labels below tightly-stacked circles get visually clipped by the next circle. Use pill chips with explicit `y` positioned in the gap between circles, not floating text.
- **Don't put a wide pill at the bottom of a circle's curve.** Circle width at `y = cy + 0.95r` is roughly `0.3 × diameter`. Compute extent before placing.
- **Always letter-space uppercase labels** (`letter-spacing="1"` to `"1.4"`). Tight uppercase reads as a typo.
- **Marker arrows look anaemic at default size.** Use `markerWidth="7" markerHeight="7"` and `stroke-width="2.2"+` for input arrows; thicker (`2.8`+) and a different colour for the output arrow to emphasise direction.
- **Emoji icons in stacked rows render larger than CSS expects on mobile.** A `<span>🏭</span>` next to text often appears 18–24px tall on iOS even though the surrounding text is 12.5px, so adjacent rows overlap. Wrap each icon in `<span style="font-size:15px;line-height:1;flex-shrink:0;width:22px;display:inline-flex;justify-content:center;">…</span>` and give the row `line-height:1.4; min-height:22px`.
- **Template-specific renderer fields.** Not every ad-interactive optional block works across every renderer — `notePosition: 'top'` originally only fired in `renderCardGeneric`, not `renderCardAdInteractive`. Before relying on a block, check it actually exists in the function dispatched by the card's `template` (search `js/app.js` for `function renderCard<Name>`). Add the slot to the specific renderer if it's missing.

## Don't reinvent

If the request maps cleanly to one of the named recipes, reuse the dimensions and structure of the canonical example file rather than designing from scratch. Consistency across diagrams is more valuable than per-diagram cleverness.

## See also

- **`run-econos`** — drive a headless browser to screenshot a card and visually verify the diagram renders. Run this after every SVG edit; do not assume the first draft is correct.
- **`econos-ship-changes`** — when the diagram is final, follow the backup-first workflow before merging. Do not push directly to main without snapshotting it.
- **`econos-card-template`** — for the surrounding card fields (`visualKey` sits alongside `lede`, `tip`, `flow`, `causes`, etc.).
