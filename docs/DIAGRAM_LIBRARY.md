# Econos Diagram Library

This document covers the three-layer diagram system:
1. `window.EconSvg` — composable SVG primitives
2. `window.ECONOS_DIAGRAMS` — high-level diagram generators
3. The `'diagram'` block type — rendering inside Learn It / Link It / Land It cards

---

## Load Order

```html
<!-- After /js/icons.js and /js/render-blocks.js -->
<script defer src="/js/diagrams/econ-svg.js"></script>
<script defer src="/js/diagrams/generators/adas.js"></script>
<script defer src="/js/diagrams/generators/ppf.js"></script>
<script defer src="/js/diagrams/generators/tax-controls.js"></script>
<script defer src="/js/diagrams/generators/mult-elas.js"></script>
<script defer src="/js/diagrams/generators/firm-labour.js"></script>
<script defer src="/js/diagrams/generators/macro-misc.js"></script>
<script defer src="/js/diagrams/index.js"></script>
<script defer src="/js/blocks/diagram.js"></script>
```

---

## 1. `window.EconSvg` — SVG Primitives

All helpers return SVG fragment strings. They are stateless and pure.

### `EconSvg.svg(opts)` → `string`

Wraps fragments in a full `<svg>` element with a padded `<g>` translate.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `viewBox` | `string\|number[]` | `'0 0 640 340'` | SVG viewBox |
| `width` | `number` | viewBox width | Rendered `width` attr |
| `height` | `number` | viewBox height | Rendered `height` attr |
| `children` | `string\|string[]` | — | SVG fragment(s) nested inside the padded `<g>` |
| `pad` | `{left,top,right,bottom}` | `{48,36,56,44}` | Override plot margins |

### `EconSvg.defs(idPrefix?)` → `string`

Returns a `<defs>` block with arrowhead markers and tone gradients. `idPrefix` (default `'ec'`) namespaces IDs so multiple diagrams on the same page don't collide.

### `EconSvg.axes(opts)` → `string`

| Option | Type | Description |
|--------|------|-------------|
| `xLabel` | `string` | Horizontal axis label |
| `yLabel` | `string` | Vertical axis label (rotated) |
| `xTicks` | `string[]` | Optional tick labels (evenly spaced) |
| `yTicks` | `string[]` | Optional tick labels (evenly spaced) |
| `w` | `number` | Plot-area width in pixels |
| `h` | `number` | Plot-area height in pixels |
| `tone` | `string` | Axis colour key (default `'slate'`) |

### `EconSvg.curve(opts)` → `string`

Draws a polyline with an optional end label.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | `'AD'\|'SRAS'\|'LRAS'\|'demand'\|'supply'\|'custom'` | `'custom'` | Sets tone + default points when `points` is omitted |
| `points` | `[x,y][]` | auto | Pixel or 0..1 normalised coords |
| `tone` | `string` | type default | Stroke colour key |
| `dashed` | `boolean` | `false` | Dashed stroke |
| `opacity` | `number` | `1` | Stroke opacity |
| `label` | `string` | — | Text near the last point |
| `labelPos` | `{x,y}` | near last point | Override label position |
| `strokeWidth` | `number` | `2` | Stroke width |
| `norm` | `boolean` | `true` | Set `false` to disable auto-normalisation |
| `w`, `h` | `number` | `300`, `240` | Plot-area size for LRAS and normalisation |

### `EconSvg.line(opts)` → `string`

Draws a single `<line>`.

| Option | Type | Description |
|--------|------|-------------|
| `x1,y1,x2,y2` | `number` | Endpoints (plot-area pixels) |
| `tone` | `string` | Colour key |
| `dashed` | `boolean` | Dashed stroke |
| `strokeWidth` | `number` | Default `1.5` |
| `opacity` | `number` | Default `1` |

### `EconSvg.label(opts)` → `string`

Draws a `<text>` element with optional pill background.

| Option | Type | Description |
|--------|------|-------------|
| `x, y` | `number` | Position |
| `text` | `string` | Label text |
| `tone` | `string` | Colour key |
| `small` | `boolean` | `font-size: 11` |
| `muted` | `boolean` | Reduced opacity |
| `pill` | `boolean` | White rounded-rect background |
| `anchor` | `'start'\|'middle'\|'end'` | Text anchor (default `'start'`) |
| `bold` | `boolean` | `font-weight: 700` |

### `EconSvg.callout(opts)` → `string`

Draws a 140px-wide tooltip-style box with title + body text.

| Option | Type | Description |
|--------|------|-------------|
| `x, y` | `number` | Anchor point |
| `title` | `string` | Bold header line |
| `body` | `string` | Body text (wraps at 22 chars) |
| `tone` | `string` | Colour key |
| `anchor` | `'left'\|'right'` | Which side the box extends (default `'left'`) |

### `EconSvg.equilibrium(opts)` → `string`

Draws a filled dot with dashed guide lines to both axes.

| Option | Type | Description |
|--------|------|-------------|
| `x, y` | `number` | Dot position (plot-area pixels) |
| `label` | `string` | Optional label near the dot |
| `tone` | `string` | Colour key (default `'blue'`) |
| `w, h` | `number` | Plot-area size for guide lines |

### `EconSvg.TONES` → `Object`

Read-only map of the six canonical tone objects:
`green`, `amber`, `blue`, `purple`, `rose`, `slate`.

Each tone has: `fill`, `stroke`, `title`, `sub`, `curve`.

### `EconSvg._scale(plotW, plotH)` → `{px, py}`

Returns helpers that map `0..1` normalised coords → pixel coords.

---

## 2. `window.ECONOS_DIAGRAMS` — Generators

Each generator returns a complete `<svg>` string. All configs are optional.

### `ECONOS_DIAGRAMS.adasDiagram(cfg)` — AD/AS Diagram

**File:** `js/diagrams/generators/adas.js`

| Config | Type | Default | Description |
|--------|------|---------|-------------|
| `mode` | `string` | `'demand-pull'` | `'demand-pull'`, `'cost-push'`, `'monetary'`, `'recession'`, `'ad-shift-left'`, `'ad-shift-right'`, `'sras-shift-left'`, `'sras-shift-right'`, `'lras-shift-right'`, `'recessionary-gap'`, `'inflationary-gap'` |
| `showLras` | `boolean` | `true` | Draw LRAS vertical line |
| `showSras` | `boolean` | `true` | Draw SRAS curve |
| `showOldCurve` | `boolean` | `true` | Draw old/dashed curve in shift modes |
| `showGuides` | `boolean` | `true` | Dashed guide lines from equilibria to axes |
| `showEquilibria` | `boolean` | `true` | Filled equilibrium dots |
| `annotations` | `Array` | `[]` | Extra `[{x,y,text,anchor?,tone?,bold?}]` labels |
| `title` | `string` | — | Optional chart title |
| `idPrefix` | `string` | `'ad'` | SVG ID namespace |
| `viewBoxWidth` | `number` | `640` | ViewBox width |
| `viewBoxHeight` | `number` | `360` | ViewBox height |

---

### `ECONOS_DIAGRAMS.ppfDiagram(cfg)` — PPF/PPC Diagram

**File:** `js/diagrams/generators/ppf.js`

| Config | Type | Default | Description |
|--------|------|---------|-------------|
| `mode` | `string` | `'basic'` | `'basic'`, `'opportunity-cost'`, `'consumer-vs-capital'`, `'trade'`, `'efficiency-gap'`, `'growth-shift'` |
| `goodX` | `string` | `'Good X'` | Horizontal axis label |
| `goodY` | `string` | `'Good Y'` | Vertical axis label |
| `curveLabel` | `string` | `'PPF'` | Curve end label |
| `viewBoxW` | `number` | `640` | ViewBox width |
| `viewBoxH` | `number` | `380` | ViewBox height |
| `pointA` | `[nx,ny]` | mode default | Normalised coords for point A |
| `pointB` | `[nx,ny]` | mode default | Normalised coords for point B |
| `pointC` | `[nx,ny]` | mode default | Normalised coords for point C |
| `labelA/B/C` | `string` | `'A'`/`'B'`/`'C'` | Labels for points |
| `calloutText` | `string` | auto | Override callout body |
| `showArrow` | `boolean` | `true` | Show movement arrow (opportunity-cost) |
| `tone` | `string` | `'blue'` | Main curve tone |
| `growthTone` | `string` | `'green'` | Shifted curve tone (growth-shift) |
| `tradeTone` | `string` | `'green'` | TPF curve tone (trade) |
| `gapTone` | `string` | `'rose'` | Inefficiency point tone (efficiency-gap) |

---

### `ECONOS_DIAGRAMS.taxSubsidyDiagram(cfg)` — Tax/Subsidy Diagram

**File:** `js/diagrams/generators/tax-controls.js`

| Config | Type | Default | Description |
|--------|------|---------|-------------|
| `mode` | `string` | `'indirect-tax'` | `'indirect-tax'`, `'subsidy'` |
| (see file) | — | — | Additional config documented in source |

---

### `ECONOS_DIAGRAMS.priceControlDiagram(cfg)` — Price Control Diagram

**File:** `js/diagrams/generators/tax-controls.js`

| Config | Type | Default | Description |
|--------|------|---------|-------------|
| `mode` | `string` | `'ceiling'` | `'ceiling'` (price ceiling / maximum price), `'floor'` (price floor / minimum price) |
| (see file) | — | — | Additional config documented in source |

---

### `ECONOS_DIAGRAMS.multiplierDiagram(cfg)` — Multiplier Diagram

**File:** `js/diagrams/generators/mult-elas.js`

| Config | Type | Default | Description |
|--------|------|---------|-------------|
| `view` | `string` | `'rounds'` | `'rounds'`, `'ripple'`, `'adShift'` |
| `multiplier` | `number` | `2` | The multiplier (k) |
| `injection` | `number` | `100` | Initial injection (£) |
| `rounds` | `number` | `5` | Visible spending rounds |
| `showLeakage` | `boolean` | `true` | Annotate leakage labels |
| `mpc` | `number` | `0.5` | Marginal propensity to consume |
| `title` | `string` | auto | Chart header override |
| `idPrefix` | `string` | `'me-mul'` | SVG ID namespace |

---

### `ECONOS_DIAGRAMS.elasticityDiagram(cfg)` — Elasticity Diagram

**File:** `js/diagrams/generators/mult-elas.js`

| Config | Type | Default | Description |
|--------|------|---------|-------------|
| `curve` | `string` | `'demand'` | `'demand'` or `'supply'` |
| `elasticity` | `string` | `'inelastic'` | `'elastic'`, `'inelastic'`, `'unit'`, `'perfectly-elastic'`, `'perfectly-inelastic'` |
| `showTax` | `boolean` | `false` | Overlay a per-unit tax wedge |
| `taxPerUnit` | `number` | `30` | Tax wedge size (plot units) |
| `title` | `string` | auto | Chart header override |
| `idPrefix` | `string` | `'me-ela'` | SVG ID namespace |

---

### `ECONOS_DIAGRAMS.costCurvesDiagram(cfg)` — Cost Curves Diagram

**File:** `js/diagrams/generators/firm-labour.js`

Renders MC, AC, AVC, AFC cost curves for a competitive firm.

---

### `ECONOS_DIAGRAMS.marketStructureDiagram(cfg)` — Market Structure Diagram

**File:** `js/diagrams/generators/firm-labour.js`

Renders AR/MR/MC/AC for monopoly, oligopoly, or perfect competition.

---

### `ECONOS_DIAGRAMS.labourMarketDiagram(cfg)` — Labour Market Diagram

**File:** `js/diagrams/generators/firm-labour.js`

Renders labour demand/supply with optional minimum wage or monopsony.

---

### `ECONOS_DIAGRAMS.phillipsCurve(cfg)` — Phillips Curve

**File:** `js/diagrams/generators/macro-misc.js`

Renders SRPC and/or LRPC with NAIRU marker.

---

### `ECONOS_DIAGRAMS.jCurveDiagram(cfg)` — J-Curve

**File:** `js/diagrams/generators/macro-misc.js`

Renders the trade balance response to a depreciation/devaluation.

---

### `ECONOS_DIAGRAMS.fortyFiveDiagram(cfg)` — 45-Degree Diagram

**File:** `js/diagrams/generators/macro-misc.js`

Renders the Keynesian national income determination diagram.

---

### `ECONOS_DIAGRAMS.growthDiagram(cfg)` — Growth Diagram

**File:** `js/diagrams/generators/macro-misc.js`

Renders economic growth sources, sustainability, or Kuznets curve.

---

### `ECONOS_DIAGRAMS.resolve(keyOrSpec)` → `string`

**File:** `js/diagrams/index.js`

Convenience helper. Accepts a generator key string or a spec object.

```js
// String key → calls generator with empty config
ECONOS_DIAGRAMS.resolve('adasDiagram');

// Spec object → calls generator with config
ECONOS_DIAGRAMS.resolve({ type: 'adasDiagram', mode: 'cost-push' });

// Legacy SVG icon fallback
ECONOS_DIAGRAMS.resolve('fiscalDragChart');  // → ECONOS_ICONS['fiscalDragChart']
```

---

## 3. `'diagram'` Block Type

Use in any `blocks` array in a card data file.

```js
{
  type: 'diagram',

  // Option A: generate from the diagram system
  spec: {
    type: 'adasDiagram',    // generator name on ECONOS_DIAGRAMS
    mode: 'demand-pull',    // ...plus any generator-specific config
  },

  // Option B: use a legacy SVG icon (ECONOS_ICONS key)
  svgKey: 'fiscalDragChart',

  // Both options support:
  caption: 'AD shifts right as consumer confidence rises.',  // optional
  height:  260,                                              // optional, px
}
```

The block renders inside the existing `.hero-visual` frame — the same CSS
used by `heroVisual` blocks — so no additional stylesheet is required.

### Examples

```js
// Basic AD/AS demand-pull shift
{ type: 'diagram', spec: { type: 'adasDiagram', mode: 'demand-pull' }, caption: 'Demand-pull inflation' }

// PPF opportunity cost with custom points
{ type: 'diagram', spec: { type: 'ppfDiagram', mode: 'opportunity-cost', pointA: [0.2, 0.78], pointB: [0.7, 0.48] } }

// Legacy icon fallback
{ type: 'diagram', svgKey: 'adShiftRight', caption: 'AD shifts right' }
```

---

## Adding a New Generator

1. Create `js/diagrams/generators/<name>.js` as an IIFE.
2. At the end of the IIFE: `global.ECONOS_DIAGRAMS = global.ECONOS_DIAGRAMS || {}; global.ECONOS_DIAGRAMS.myDiagram = myDiagram;`
3. Add `<script defer src="/js/diagrams/generators/<name>.js"></script>` to `learn-it.html`, `link-it.html`, `land-it.html` (before `index.js`).
4. Add the path to `PRECACHE_ASSETS` in `sw.js` and bump `CACHE_NAME`.
5. Add a fixture block to `js/data/_fixtures/diagrams-demo.js`.

---

## 4. `'econDiagram'` Block Type — Declarative Interactive Diagrams

`econDiagram` is the declarative, data-driven interactive block. The author writes view-level shift data; the engine computes line intercepts, equilibrium intersections, label placement, and implements a CSS-only step toggle.

**File:** `js/blocks/econ-diagram.js` (engine) + `js/blocks/charts/<family>.js` (chart families)

### Schema

```js
{
  type:  'econDiagram',
  chart: string,      // registered chart family name (see table below)
  views: [            // one entry per interactive step
    {
      label:    string,                                         // tab label
      shifts?:  { [curveId]: number | { dx?: number, dy?: number } },
      points?:  string[],                                       // named point IDs to show
      arrows?:  [[fromId, toId, { tone?: string }]],            // movement arrows
      areas?:   [{ between: [curveA, curveB], x: [x1, x2], tone?: string, hatch?: boolean }],
      brackets?:[{ x: [x1, x2], y: number, label: string, tone?: string }],
      analysis?:string                                          // text in the analysis pane
    }
  ]
}
```

### Registered Chart Families

| Chart ID | File | Curves / Elements | Named Points |
|---|---|---|---|
| `adas` | `js/blocks/charts/adas.js` | AD, SRAS, LRAS | E0, E1, E2 |
| `phillips` | `js/blocks/charts/phillips.js` | SRPC, LRPC | A, B, C |
| `ppf` | `js/blocks/charts/ppf.js` | PPF0, PPF1 (frontier) | A, B, I |
| `supplyDemand` | `js/blocks/charts/supply-demand.js` | D, S, PriceLine | E, Qs_ceiling, Qd_ceiling |
| `externalities-neg` | `js/blocks/charts/externalities.js` | MPC, MSC, MPB | marketEq, socialEq |
| `externalities-pos` | `js/blocks/charts/externalities.js` | MPC, MSB, MPB | marketEq, socialEq |
| `costCurves` | `js/blocks/charts/cost-curves.js` | MC, AVC, ATC, MR | atcMin, avcMin, profitMax |
| `marketStructure` | `js/blocks/charts/market-structure.js` | AR, MR, MC, ATC | profitMaxQ, priceOnAR, compEquil |
| `labourMarket` | `js/blocks/charts/labour-market.js` | LD, LS, MCL, Wmin | E, Em, Wm, Ld, Ls |
| `jcurve` | `js/blocks/charts/jcurve.js` | jcurve (fn), zeroLine | Trough, Recovery, Peak |
| `laffer` | `js/blocks/charts/laffer.js` | laffer (fn), xAxis | tStar, tLow, tHigh |
| `lorenz` | `js/blocks/charts/lorenz-kuznets.js` | lineOfEquality, lorenzCurve | LorenzMid |
| `kuznets` | `js/blocks/charts/lorenz-kuznets.js` | kuznets (fn) | EarlyDev, PeakIneq, LateDev |
| `fortyFive` | `js/blocks/charts/forty-five.js` | fortyfive, AE | E0, E1 |
| `growth` | `js/blocks/charts/growth.js` | AD, SRAS, LRAS | E0, E1 |
| `publicGoods` | `js/blocks/charts/public-goods.js` | MB_A, MB_B, ΣMB, MC | Eopt, Pa, Pb |

### Load Order (shells)

```html
<!-- After js/blocks/econ-diagram.js — one tag per chart family: -->
<script defer src="/js/blocks/charts/adas.js"></script>
<script defer src="/js/blocks/charts/phillips.js"></script>
<script defer src="/js/blocks/charts/ppf.js"></script>
<script defer src="/js/blocks/charts/supply-demand.js"></script>
<script defer src="/js/blocks/charts/externalities.js"></script>
<script defer src="/js/blocks/charts/cost-curves.js"></script>
<script defer src="/js/blocks/charts/market-structure.js"></script>
<script defer src="/js/blocks/charts/labour-market.js"></script>
<script defer src="/js/blocks/charts/jcurve.js"></script>
<script defer src="/js/blocks/charts/laffer.js"></script>
<script defer src="/js/blocks/charts/lorenz-kuznets.js"></script>
<script defer src="/js/blocks/charts/forty-five.js"></script>
<script defer src="/js/blocks/charts/growth.js"></script>
<script defer src="/js/blocks/charts/public-goods.js"></script>
```

### Adding a New Chart Family

1. Create `js/blocks/charts/<name>.js` as an IIFE that calls `window.ECONOS_ECON_DIAGRAM.register('<chartId>', { … })`.
2. Add `<script defer src="/js/blocks/charts/<name>.js"></script>` to `learn-it.html`, `link-it.html`, `land-it.html`, and `dev/renderer-lab.html` (after `econ-diagram.js`).
3. Add the path to `PRECACHE_ASSETS` in `sw.js` and bump `CACHE_NAME`.
4. Add a gallery entry in `dev/renderer-lab.html` section 16.
5. Add the chart ID to the table above.
