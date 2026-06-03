# Econos Diagram Language (EDL) — Guide

> **Core principle.** Authors describe the *economics*. The engine solves the
> geometry, layering, labels, arrows and rendering. EDL is a domain-specific
> economics diagram language, **not** a generic charting library.

EDL ships as `window.ECONOS_DIAGRAMS` from `js/diagrams/econos-diagrams.js`.
The legacy chart engine (`window.ECONOS_PPF`, `js/charts/ppf.js`) is untouched
and keeps driving all current Learn It / Link It / Land It content; EDL detects
legacy specs and delegates to it (see [Legacy compatibility](#legacy-compatibility)).

- **Browse it:** open `dev/diagram-gallery.html` (every family, mode + viewport toggles).
- **Build with it:** open `dev/diagram-builder.html` (live spec → preview workbench).

---

## 1. The public API

```js
window.ECONOS_DIAGRAMS = {
  version,                 // '1.0.0'
  render(spec),            // → { svg, errors, warnings, derived, renderPlan, hidden, collisionsResolved }
  validate(spec),          // → { valid, errors, warnings }
  compile(spec),           // → render plan + diagnostics (no SVG string assembled here)
  debug(spec),             // → { normalisedSpec, validation, derivedGeometry, renderPlan, collisions, hidden, svg }
  templates,               // family builders, keyed by family name
  layers,                  // the central layer map (see §6)
  registry,                // allowed families / intents / show tokens / tones / heads / routes
};
```

`render(spec)` returns:

| field | meaning |
| --- | --- |
| `svg` | the SVG string (`role="img"`, `aria-label`, `<title>`) |
| `errors` | blocking problems (empty `svg` if fatal) |
| `warnings` | non-blocking notes (unknown tokens, missing alt, legacy delegation) |
| `derived` | solved geometry — equilibria, wedges, quantities, prices |
| `renderPlan` | the layer-sorted element list actually drawn |
| `hidden` | labels the collision pass dropped (with reason) |
| `collisionsResolved` | labels nudged from their first-choice position |

---

## 2. A semantic spec

The preferred authoring form names the economics and lets the engine do the rest.
**You never type equilibrium coordinates.**

```js
{
  version: 1,
  type: 'market',
  intent: 'demand-shift-right',
  mode: 'learn',          // learn | exam | debug
  viewport: 'card',       // card | stage | article | full
  axes: { x: { label: 'Quantity' }, y: { label: 'Price' } },
  curves: {
    D1: { role: 'demand', elasticity: 'normal' },
    D2: { role: 'demand', shiftFrom: 'D1', direction: 'right' },
    S:  { role: 'supply', elasticity: 'normal' }
  },
  show: ['equilibrium-before', 'equilibrium-after', 'shift-arrow', 'price-change', 'quantity-change'],
  teaching: { takeaway: 'Demand rises, increasing both equilibrium price and quantity.' },
  alt: { summary: 'Demand shifts right, increasing equilibrium price and quantity.' }
}
```

At its most minimal, **`type` + `intent` is enough** — the engine fills curves,
`show` tokens, axes and alt text from the intent:

```js
{ version: 1, type: 'market', intent: 'demand-shift-right' }
```

---

## 3. Supported families & intents

| Family | Intents |
| --- | --- |
| `market` | `market-equilibrium`, `demand-shift-right`, `demand-shift-left`, `supply-shift-right`, `supply-shift-left`, `simultaneous-demand-and-supply-shift` |
| `tax` | `tax-incidence`, `tax-inelastic-demand`, `tax-elastic-demand`, `tax-inelastic-supply`, `tax-elastic-supply`, `tax-revenue-and-deadweight-loss` |
| `subsidy` | `subsidy-incidence`, `subsidy-consumer-benefit`, `subsidy-producer-benefit`, `subsidy-cost` |
| `price-control` | `maximum-price-shortage`, `minimum-price-surplus` |
| `externality` | `negative-production-externality`, `positive-consumption-externality`, `welfare-loss-externality`, `socially-optimal-output` |
| `ppf` | `ppf-basic`, `ppf-efficient-inefficient-unattainable`, `ppf-outward-shift`, `ppf-inward-shift`, `ppf-opportunity-cost`, `ppf-specialisation` |
| `ad-as` | `ad-shift-right`, `ad-shift-left`, `sras-shift-left`, `sras-shift-right`, `classical-lras`, `keynesian-as`, `output-gap` |
| `phillips` | `short-run-phillips-curve`, `long-run-phillips-curve`, `expectations-shift` |

### Family inputs

- **market** — `curves.{D1,D2,S,S2}` with `role`, `elasticity`, `shiftFrom`, `direction`; or just an `intent`.
- **tax** — `demand.elasticity`, `supply.elasticity`, `tax.size` (per-unit, 0–1), `tax.imposedOn`.
- **subsidy** — `demand`, `supply`, `subsidy.size`, `subsidy.paidTo`.
- **price-control** — `control.type: 'maximum' | 'minimum'`, `control.gap` (distance from equilibrium).
- **externality** — `externality.sign: 'negative' | 'positive'`, `externality.size`.
- **ppf** — `shift.direction: 'out' | 'in'`.
- **ad-as** — `shift.curve: 'ad' | 'sras'`, `shift.direction`, `as.shape: 'keynesian'`, `as.lras`.
- **phillips** — `phillips.longRun`, `intent: 'expectations-shift'`.

### Elasticity vocabulary

`perfectly-elastic` · `elastic` · `normal` · `unit` · `inelastic` · `perfectly-inelastic`.
Elasticity controls slope only; curves rotate about a stable base equilibrium so a
single-elasticity change does not slide the whole picture.

---

## 4. Show tokens

`show` is an array of semantic flags. Tokens that do not apply to a family are
ignored; unknown tokens raise a warning.

```
equilibrium · equilibrium-before · equilibrium-after
shift-arrow · price-change · quantity-change · price-line · quantity-line · guides · ticks
tax-wedge · subsidy-wedge · consumer-burden · producer-burden
consumer-benefit · producer-benefit · government-cost · government-revenue · deadweight-loss
shortage · surplus · price-cap · price-floor
mpb · msb · mpc · msc · external-cost · external-benefit · welfare-loss
social-optimum · free-market · correction-arrow
efficient-point · inefficient-point · unattainable-point · opportunity-cost · zones · frontier-before · frontier-after
lras · keynesian · output-gap · natural-rate · expectations · movement
takeaway
```

---

## 5. Arrows

EDL prefers **semantic arrows**. You declare the *kind*; the engine routes, buffers
and heads it. Low-level `x1/y1/x2/y2` arrows remain available as an expert escape
hatch but are never the default.

**Arrow kinds:** `shift`, `movement`, `price-change`, `quantity-change`, `wedge`,
`bracket`, `shortage`, `surplus`, `cause-effect`, `perpendicular-between-curves`, `flow`.

**Route styles:** `auto` (default), `direct`, `curved`, `orthogonal`, `vertical`,
`horizontal`, `bracket`, `perpendicular`, `arc`.

**Arrowhead styles:** `chevron` (**default**, open, rounded), `chevron-small`,
`double-chevron`, `dot`, `bar`, `bracket`, `triangle` (*legacy only — never default*).

Arrowheads are rendered as **open chevron SVG markers** (`M 2 2 L 8 5 L 2 8`,
`fill: none`, round caps/joins). A marker is generated per stroke colour so the
head always matches its line (sidestepping patchy `context-stroke` support).
Arrows buffer away from points and curve endpoints so a head never lands inside a dot.

---

## 6. The layer model

Every renderable element carries a layer. The renderer builds `renderPlan.elements`
first, then sorts by **(layer, priority, declaration order)** and paints afterwards —
paint order is data, never a side effect of call order.

| layer | value | layer | value |
| --- | --- | --- | --- |
| `background` | 0 | `points` | 80 |
| `zones` | 10 | `tickLabels` | 90 |
| `regions` | 20 | `curveLabels` | 100 |
| `gridlines` | 30 | `pointLabels` | 110 |
| `axes` | 40 | `callouts` | 120 |
| `curvesOld` | 50 | `arrowsFront` | 130 |
| `curvesMain` | 60 | `debug` | 999 |
| `arrowsBehind` | 70 | | |

---

## 7. The collision model

Labels are not trusted to "just fit". Every label (axis, curve, point, tick,
callout, region, arrow) becomes a placeable box with: `id`, `type`, `bbox`,
`priority`, `movable`, `hideOnMobile`, candidate positions, and a layer.

Placement pass:

1. Place fixed / high-priority labels first.
2. Try each candidate position in turn; clamp every candidate inside the stage.
3. Skip positions that overlap already-placed boxes.
4. On compact viewports, **hide** low-priority / mobile-hidden labels that cannot fit
   (reported in `hidden`); otherwise fall back to the first candidate and record a
   resolved collision (reported in `collisionsResolved`).

**Priority ladder:** axis labels 100 · curve labels 90 · equilibrium labels 85 ·
price/quantity ticks 80 · wedge labels 75 · teaching callouts 65 · decorative
arrows 45 · secondary notes 30.

---

## 8. Viewport & teaching modes

**Viewports** (`viewport`):

| mode | size | character |
| --- | --- | --- |
| `card` | 520×360 | compact; fewer labels; aggressive auto-hiding |
| `stage` | 640×440 | richer labels; the Econos central panel |
| `article` | 760×520 | wider; legends and richer annotation |
| `full` | 920×620 | debug/detail friendly |

**Teaching modes** (`mode`):

- `learn` — colour, callouts, arrows, region fills.
- `exam` — stripped-down slate diagram; essential labels only; no decorative shading;
  region fills become dashed outlines. Closer to what a student should draw.
- `debug` — bounding boxes, element count, hidden-label tally, derived overlays.

---

## 9. Accessibility

Every spec may carry `alt: { summary, long }`. If absent, the engine generates a
useful summary from the family and intent. The SVG always emits `role="img"`, an
`aria-label`, and a `<title>` (plus `<desc>` when a long description is supplied).

---

## 10. Legacy compatibility

`ECONOS_DIAGRAMS.render(spec)` detects a legacy `ECONOS_PPF` chart spec — a raw
`curves: [{ d: 'M ...' }]`, a `chartArea`, hand-authored `defs`/`layers`,
`inverseLayers` — and transparently delegates to `window.ECONOS_PPF.render`, adding
a warning that it took the legacy path. This lets one entry point serve both worlds
during migration. **`js/charts/ppf.js` is never modified or deleted.** See
`docs/DIAGRAM_MIGRATION_GUIDE.md`.

---

## 11. Agent rules (blunt)

- **Prefer semantic specs.** `type` + `intent` first; only reach for low-level fields when a template genuinely cannot express the idea.
- **Never hand-author raw `<svg>`** in data files or specs.
- **Never type equilibrium coordinates** — declare the economics and read `derived`.
- **Use `show` tokens**, not bespoke flags.
- **Use chevron arrows.** `triangle` heads are legacy-only and must be explicit.
- **No `labelDx`/`labelDy`** in semantic specs unless `allowManualLayout: true`.
- **Run the gates:** `node scripts/lint-diagrams.mjs` + `npx vitest run tests/unit/diagrams.test.js`, and eyeball `dev/diagram-gallery.html`.
- **Add a gallery example** when you add a template or intent.

---

## 12. File map (current + intended split)

EDL currently ships as one internally-sectioned IIFE so the static `<script>`
loader and the node test harness (which evals with `new Function('window', src)`)
both get a plain browser global with no ES-module imports. Each `§` banner in
`econos-diagrams.js` maps to a future module:

```
js/diagrams/econos-diagrams.js   →  registry.js, layers.js, themes.js, markers.js,
                                     validate.js, normalise.js, compile.js,
                                     render-plan.js, render-svg.js,
                                     geometry/*, layout/*, templates/*, legacy/*
```

When a bundler lands, lift each banner into its own file behind the same global.
