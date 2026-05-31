---
name: econos-econ-diagram
description: Use when a card needs an economics diagram (any chart with axes and curves — AD/AS, Phillips, PPF, supply-demand, cost curves, etc.). The picker + authoring reference for the declarative econDiagram block and its chart families. Trigger on "add a diagram", "draw the AD/AS", "the Phillips curve", "show a PPF", "tax diagram", "cost curves", or any time you would otherwise reach for a hand-rolled SVG of an econ chart.
---

# Authoring econ diagrams declaratively

**Never hand-roll SVG for a standard econ diagram.** Describe what the chart shows — curves, shifts, intersections, areas — and the `econDiagram` engine computes every coordinate. Equilibria land on real intersections, curves are smooth (no kinks), labels avoid clashes, all by construction. A diagram that used to be 100–300 lines of pixel-wrangled SVG is now 5–15 lines of data.

Full reference: `docs/DIAGRAM_LIBRARY.md`. Engine: `js/blocks/econ-diagram.js`; families: `js/blocks/charts/*.js`.

## Pick the chart family

| The diagram is… | `chart:` |
|---|---|
| AD/AS — demand/supply-side shocks, output gaps | `adas` |
| Phillips curve — SRPC, LRPC/NAIRU, stagflation | `phillips` |
| Production possibility frontier | `ppf` |
| A market — shifts, **indirect tax, subsidy, price ceiling/floor, welfare (CS/PS/DWL)** | `supplyDemand` |
| Negative / positive externality (MSC/MSB vs MPC/MPB) | `externalities-neg` / `externalities-pos` |
| Firm cost curves (AC/AVC/MC/MR) | `costCurves` |
| Market structure (PC / monopoly / monopolistic) — AR, MR, MC, profit | `marketStructure` |
| Labour market — demand/supply, monopsony, minimum wage | `labourMarket` |
| J-curve (current account after depreciation) | `jcurve` |
| Laffer curve | `laffer` |
| Lorenz curve + Gini | `lorenz` |
| Kuznets curve (inequality vs development) | `kuznets` |
| Keynesian 45° cross / multiplier | `fortyFive` |
| Long-run growth (LRAS shift) | `growth` |
| Public good (vertical MB summation) | `publicGoods` |
| Game-theory payoff matrix | use the **`payoffMatrix`** block (not econDiagram) |

If none fits (indifference curves, Edgeworth box, a bespoke shape), it's a candidate for a **new chart family** — add one (`docs/DIAGRAM_LIBRARY.md` → "Adding a New Chart Family"), don't inline an SVG.

## The block shape

```js
{
  type: 'econDiagram',
  chart: 'adas',
  views: [
    { label: 'Baseline', shifts: {} },
    { label: 'AD shifts right', shifts: { AD: 90 } },
    { label: 'Cost-push shock', shifts: { AD: 90, SRAS: -160 },
      analysis: 'SRAS left: price level rises, real output falls.' }
  ]
}
```

Each view is a step tab (CSS-only toggle, CSP-safe). The engine draws faded prior states automatically, so a multi-view diagram tells a sequenced story.

## View fields

- **`shifts: { curveId: Δ }`** — translate a curve. `Δ` is a number (horizontal) or `{ dx, dy }`. The engine recomputes intersections/equilibria for the shifted state — you never place a dot.
- **`points: [names | inline]`** — which points to show. An entry is either a **family point name** (string, e.g. `E`, `Qt_tax`) or an **inline point spec** object: `{ label, tone, onCurve:'D', x }` (on a curve at x), `{ label, tone, at:[x,y] }` (explicit), or `{ label, tone, on:['D','S'] }` (intersection). Inline points let a view place its own markers — e.g. `A` and `B` for a **movement-along-a-curve** story — without the family pre-defining them. Dots get leaders + a label, automatically.
- **Movement along a curve**: show only the curve, place two inline points on it, and draw an arrow between them — e.g. `show:['D'], points:[{label:'A',onCurve:'D',x:200},{label:'B',onCurve:'D',x:500}], arrows:[['A','B']]`. Use this for demand/supply extension–contraction and AD/AS movement-vs-shift (a *shift* uses `shifts:` instead).
- **`arrows: [['A','B',{tone}]]`** — a movement arrow between two points (endpoints sit on the dot edges).
- **`areas: [{ between:['Top','Bottom'], x:[x0,x1], tone, hatch }]`** — shaded region (consumer/producer surplus, deadweight loss with `hatch:true`).
- **`brackets: [{ x:[x0,x1] | between:['A','B'], y, label, tone }]`** — a labelled double-headed bracket (output gap, tax wedge, shortage/surplus).
- **`show: [ids]` / `hide: [ids]`** — render only / all-but these curves. Families mark opt-in curves `optional` (e.g. `supplyDemand`'s price lines), so a bare view stays clean; a view opts them in with `show`.
- **`label`** (tab text) and **`analysis`** (panel under the chart).

## Worked example — a price ceiling on `supplyDemand`

```js
{
  type: 'econDiagram', chart: 'supplyDemand',
  views: [
    { label: 'Free market', shifts: {} },                              // clean D + S + E
    { label: 'Price ceiling', shifts: {},
      show: ['D', 'S', 'PriceCeiling'],
      brackets: [{ x: [330, 430], y: 320, label: 'Shortage', tone: 'rose' }],
      analysis: 'A ceiling below P* creates excess demand — a shortage.' }
  ]
}
```

## Tones & axes

- Tones: `green amber blue purple rose slate`. House grammar: AD/demand blue, supply/SRAS dark/rose, LRAS/LRPC green vertical; old states faded/dashed, new solid; equilibrium dots open with tone stroke, label above.
- Axes and arrowheads are drawn by the engine from the family's `axes` declaration — don't add them.

## Verify

Render in the Studio Library (`dev/renderer-lab.html`, chart-family gallery) or the Editor (`dev/renderer-lab-edit.html`) with the mockup overlay. Geometry correctness is covered by `tests/unit/econ-diagram.test.js`; if you add a family, add an assertion (a known intersection, no-kink, label position).

## dataChart vs econDiagram — when to use which

`econDiagram` draws **economics diagrams**: axes with labelled curves (AD, SRAS, LRAS, demand, supply, cost curves…), named equilibrium points, shift arrows, shaded surplus/loss areas. The author describes *what the chart shows* (shifts, intersections, areas); the engine computes every coordinate.

`dataChart` draws **data charts**: bar, column, line, pie — charts where the data lives in rows of (label, value) pairs like a spreadsheet. Use it for:
- UK CPI trend over time (`kind: 'line'`)
- Income deciles ranked lowest to highest (`kind: 'bar'` with `brokenAxis`)
- GDP by country (`kind: 'column'`)
- Household spending shares (`kind: 'pie'` / donut with `innerRadius`)

Full authoring reference: `docs/DATA_CHARTS.md`.

## See also

- `docs/DIAGRAM_LIBRARY.md` — every family + the full view schema + how to add one.
- `docs/DATA_CHARTS.md` — data-driven charts via the `dataChart` block (bar, column, line, pie).
- `econos-visual-diagram` — when (rarely) you do need a bespoke SVG.
- `econos-mockup-analyse` / `econos-match-mockup` — the mockup→card pipeline.
