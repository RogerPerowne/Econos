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

1. Identify the structural pattern: is it tile-grid-6, hub-and-spoke, comparison-row, or fresh? If fresh, name the new recipe and add it to this skill afterwards.
2. Map each element to a tone from the palette above (don't invent new colours).
3. Decide icons: emoji is fine for tile-grid; custom inline SVG (stroked paths with `stroke-linejoin=round`) reads better on hub-and-spoke where icons are larger.
4. Draft the SVG with correct viewBox; verify with `node --check js/icons.js`.
5. Add `visualKey: '<key>'` to the target card.
6. Ask the user to screenshot and confirm before iterating — do not assume the first draft is final.

## Pitfalls (learned the hard way)

- **Don't clip rewards.** Labels below tightly-stacked circles get visually clipped by the next circle. Use pill chips with explicit `y` positioned in the gap between circles, not floating text.
- **Don't put a wide pill at the bottom of a circle's curve.** Circle width at `y = cy + 0.95r` is roughly `0.3 × diameter`. Compute extent before placing.
- **Always letter-space uppercase labels** (`letter-spacing="1"` to `"1.4"`). Tight uppercase reads as a typo.
- **Marker arrows look anaemic at default size.** Use `markerWidth="7" markerHeight="7"` and `stroke-width="2.2"+` for input arrows; thicker (`2.8`+) and a different colour for the output arrow to emphasise direction.

## Don't reinvent

If the request maps cleanly to one of the named recipes, reuse the dimensions and structure of the canonical example file rather than designing from scratch. Consistency across diagrams is more valuable than per-diagram cleverness.

## See also

- **`run-econos`** — drive a headless browser to screenshot a card and visually verify the diagram renders. Run this after every SVG edit; do not assume the first draft is correct.
- **`econos-ship-changes`** — when the diagram is final, follow the backup-first workflow before merging. Do not push directly to main without snapshotting it.
- **`econos-card-template`** — for the surrounding card fields (`visualKey` sits alongside `lede`, `tip`, `flow`, `causes`, etc.).
