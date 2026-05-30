# Econos Diagram Rules — Canonical Reference

All hero SVG diagrams in Econos follow the conventions below. These rules
are enforced across every chart in the codebase and are implemented as
defaults in `js/diagrams/econ-svg.js`.

---

## 1. Curve Colours (never deviate)

| Curve / concept            | Colour         | Hex       |
|----------------------------|----------------|-----------|
| AD (Aggregate Demand)      | blue           | `#2563EB` |
| SRAS (Short-Run AS)        | amber          | `#D97706` |
| LRAS (Long-Run AS)         | green          | `#059669` |
| Demand                     | blue           | `#2563EB` |
| Supply                     | green          | `#059669` |
| Injections (J)             | blue           | `#2563EB` |
| Withdrawals (W)            | dark slate     | `#0B1426` |
| 45° line                   | dark slate     | `#0B1426` |

Curve colour stays the same when a curve shifts — only stroke style changes.

---

## 2. Shifts: Old vs New Curves

| State    | Stroke style              | Opacity |
|----------|---------------------------|---------|
| Old      | `stroke-dasharray="4 3"`  | ~0.55   |
| New      | solid                     | 1.0     |

- Subscript labels (`AD₁` / `AD₂`, `SRAS₁` / `SRAS₂`) sit at the right
  end of each curve, **off the line**.
- Label a curve **above it** by default (baseline ~10–14 px above curve at
  the label's x). Exceptions: curve exits the top edge, or another label
  already occupies that space — then label below with equal clearance.

---

## 3. Equilibrium Markers

- Filled circle, radius 5, `stroke="white"` `stroke-width="1.5"`.
- Dot colour: tone-coloured (typically blue `#2563EB` for standard
  equilibria; tone-coloured for shifted equilibria).
- Dashed guide lines to **both** axes: `stroke="#94A3B8"`, `stroke-width="1"`,
  `stroke-dasharray="3 3"`.

---

## 4. Axes

- Colour: dark slate `#334155`.
- Both axes have inline arrowheads drawn as `<polygon>` (not SVG markers)
  to avoid marker-scaling bugs.
- **Vertical axis**: Price / value / interest rate (left).
- **Horizontal axis**: Real output / quantity (bottom).
- Axis labels: Inter, 12 px, `font-weight: 600`.
- Tick labels: Inter, 10 px.

---

## 5. Tone Palette

Six canonical tones only — no ad-hoc colour invention.

| Tone   | Fill      | Stroke    | Title     | Sub/curve |
|--------|-----------|-----------|-----------|-----------|
| green  | `#ECFDF5` | `#6EE7B7` | `#065F46` | `#059669` |
| amber  | `#FFFBEB` | `#FCD34D` | `#92400E` | `#D97706` |
| blue   | `#EFF6FF` | `#93C5FD` | `#1E3A8A` | `#2563EB` |
| purple | `#F5F3FF` | `#C4B5FD` | `#5B21B6` | `#7C3AED` |
| rose   | `#FFF1F2` | `#FDA4AF` | `#9F1239` | `#BE123C` |
| slate  | `#F1F5F9` | `#CBD5E1` | `#334155` | `#475569` |

Section-theme colours (green for boom, amber for oil-shock) are for card
chrome and shift-direction arrows — **not** for curves or equilibrium dots.

---

## 6. viewBox Conventions

- Default width: **640** px. Use 720+ only when right-edge labels need extra
  margin (e.g. end-of-curve subscript labels sitting at x ≥ 580).
- Height: whatever content needs — typical range 200–460. Do not pad.
- **No outer background `<rect>`** — the SVG sits transparent on the card body.
- `overflow:visible` on the `<svg>` element so arrowheads never clip.

---

## 7. Safe-Zone Padding (plot area)

The inner plot area is inset from the viewBox by:

| Side   | Default margin |
|--------|---------------|
| Left   | 48 px         |
| Top    | 36 px         |
| Right  | 56 px         |
| Bottom | 44 px         |

The plot `<g>` is `transform="translate(left, top)"`. All curve/axis
coordinates are relative to the **plot-area origin** (0,0 = top-left of
plot), not the viewBox origin.

Rules:
- **All labels must stay inside the viewBox** (label_x + estimated_width ≤ viewBox_width).
- Right-hand curve labels need at least 56 px right margin — widen the
  viewBox rather than moving labels inward if needed.
- White background pills (`fill="white" fill-opacity="0.88"`) are required
  behind any label that sits on top of a curve or line.

---

## 8. Gap Arrows

- Double-headed (marker on both ends), tone-coloured.
  - Green: recessionary gap.
  - Amber: inflationary gap.
- Sit just above the x-axis baseline with a `Gap` label centred above.

---

## 9. Text Escaping

All user-visible text passed into SVG fragments **must be XML-escaped**
(ampersands, angle brackets, quotes). Use `EconSvg.esc(str)`.

---

## 10. SVG `<defs>` Scoping

`<defs>` blocks are **always placed inside the SVG they belong to** — never
shared across cards. Prefix all IDs with a per-diagram namespace (e.g.
`ad-`, `pc-`, `ec-`) to prevent ID collisions when multiple diagrams are
in the DOM simultaneously.

---

## 11. Wiring a Diagram onto a Card

1. Build the SVG string using `EconSvg.*` helpers.
2. Add it to `ECONOS_ICONS` in `js/icons.js` under a camelCase key.
3. Reference it from the card in `js/data/<topic>/data-topic.js` via
   `visualKey: 'yourKeyName'`.
4. The renderer in `js/app.js` (`renderCardAdInteractive`) picks it up
   automatically — no code changes needed.

---

## 12. Sampling Guidelines for Smooth Curves

For curves defined by a mathematical function (sine waves, exponentials,
logistic curves), sample the function every 10–20 px and emit a `<path>`
with `stroke-linejoin="round"` rather than using Bezier control points.
This avoids kinking artefacts and is visually indistinguishable from a
smooth curve at chart scale.

Save cubic Beziers for genuinely irregular shapes without a closed-form
equation.

---

*File maintained by the Econos engineering team. Last updated: 2026-05-30.*
