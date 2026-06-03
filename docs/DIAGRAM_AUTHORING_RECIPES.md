# Diagram authoring recipes (EDL)

Copy-paste starting points for the common A-level diagrams. Every recipe is a
**semantic spec** — no coordinates, no SVG. Paste into `dev/diagram-builder.html`
to tweak live, then read the solved numbers from `render(spec).derived`.

All recipes assume the envelope `{ version: 1, mode: 'learn', viewport: 'card', ... }`.

---

## Market

### Equilibrium
```js
{ version: 1, type: 'market', intent: 'market-equilibrium' }
```

### Demand shift right (with the full story)
```js
{
  version: 1, type: 'market', intent: 'demand-shift-right',
  show: ['equilibrium', 'shift-arrow', 'price-change', 'quantity-change', 'takeaway'],
  teaching: { takeaway: 'Demand rises, increasing both equilibrium price and quantity.' }
}
```

### Supply shift left (e.g. a cost shock)
```js
{ version: 1, type: 'market', intent: 'supply-shift-left' }
```

### Both curves move
```js
{ version: 1, type: 'market', intent: 'simultaneous-demand-and-supply-shift' }
```

---

## Tax

### Incidence — who pays?
```js
{
  version: 1, type: 'tax', intent: 'tax-incidence',
  demand: { elasticity: 'inelastic' }, supply: { elasticity: 'normal' },
  tax: { size: 0.18, imposedOn: 'producers' },
  show: ['tax-wedge', 'consumer-burden', 'producer-burden', 'deadweight-loss']
}
```
Inelastic demand → consumers bear the larger burden. Read `derived.consumerPrice`,
`derived.producerPrice`, `derived.taxPerUnit`.

### Revenue and deadweight loss
```js
{
  version: 1, type: 'tax', intent: 'tax-revenue-and-deadweight-loss',
  tax: { size: 0.2 },
  show: ['tax-wedge', 'government-revenue', 'deadweight-loss']
}
```

### Elasticity comparison (render two side by side)
```js
{ version: 1, type: 'tax', intent: 'tax-inelastic-demand', tax: { size: 0.2 } }
{ version: 1, type: 'tax', intent: 'tax-elastic-demand',   tax: { size: 0.2 } }
```

---

## Subsidy

```js
{
  version: 1, type: 'subsidy', intent: 'subsidy-incidence',
  subsidy: { size: 0.18, paidTo: 'producers' },
  show: ['subsidy-wedge', 'consumer-benefit', 'producer-benefit', 'government-cost']
}
```
`paidTo` and the `*-benefit` tokens show how the subsidy is split. `government-cost`
shades the total outlay (per-unit subsidy × subsidised quantity).

---

## Price controls

### Maximum price → shortage
```js
{ version: 1, type: 'price-control', intent: 'maximum-price-shortage' }
```

### Minimum price → surplus
```js
{ version: 1, type: 'price-control', intent: 'minimum-price-surplus' }
```
`Qᴅ` and `Qₛ` are labelled by *what they are* (demand/supply), so they read correctly
whether the controlled price sits above or below equilibrium. The excess is bracketed.

---

## Externalities

### Negative production externality
```js
{
  version: 1, type: 'externality', intent: 'negative-production-externality',
  externality: { size: 0.2 },
  show: ['msc', 'welfare-loss', 'correction-arrow']
}
```
MSC sits above MPC; the market over-produces at `Qₘ` beyond the social optimum `Q*`;
the welfare-loss triangle is solved between them. `correction-arrow` adds the "Tax → Q*".

### Positive consumption externality
```js
{
  version: 1, type: 'externality', intent: 'positive-consumption-externality',
  show: ['msb', 'welfare-loss', 'correction-arrow']
}
```
MSB sits above MPB; the market under-provides; correction is "Subsidy → Q*".

---

## PPF

### Efficient / inefficient / unattainable
```js
{ version: 1, type: 'ppf', intent: 'ppf-efficient-inefficient-unattainable' }
```

### Outward shift (economic growth)
```js
{ version: 1, type: 'ppf', intent: 'ppf-outward-shift' }
```

### Opportunity cost (movement along the frontier)
```js
{ version: 1, type: 'ppf', intent: 'ppf-opportunity-cost' }
```
The bowed-out frontier gives increasing opportunity cost; the `movement` arrow arcs
along the curve.

---

## AD-AS

### AD shift right (demand-pull)
```js
{ version: 1, type: 'ad-as', intent: 'ad-shift-right' }
```

### SRAS shift left (cost-push / stagflation)
```js
{ version: 1, type: 'ad-as', intent: 'sras-shift-left' }
```

### Classical LRAS with an output gap
```js
{ version: 1, type: 'ad-as', intent: 'output-gap' }
```

### Keynesian AS (reverse-L)
```js
{ version: 1, type: 'ad-as', intent: 'keynesian-as' }
```

---

## Phillips

### Short-run trade-off
```js
{ version: 1, type: 'phillips', intent: 'short-run-phillips-curve' }
```

### Long-run (vertical at NAIRU)
```js
{ version: 1, type: 'phillips', intent: 'long-run-phillips-curve' }
```

### Expectations shift
```js
{ version: 1, type: 'phillips', intent: 'expectations-shift' }
```

---

## Modes & viewports

The same spec in three modes:

```js
{ version: 1, type: 'tax', intent: 'tax-incidence', mode: 'learn' }   // full colour
{ version: 1, type: 'tax', intent: 'tax-incidence', mode: 'exam' }    // slate, essentials only
{ version: 1, type: 'tax', intent: 'tax-incidence', mode: 'debug' }   // bounding boxes + counts
```

And four canvas sizes via `viewport: 'card' | 'stage' | 'article' | 'full'`. Card mode
hides low-priority labels automatically — check `render(spec).hidden` to see what dropped.

---

## House-style reminders

- Open chevron arrows, round caps/joins, low-opacity region fills — all automatic.
- UK English. Short dashes only, never long dashes.
- Keep takeaways to one calm sentence (`teaching.takeaway` + the `takeaway` show token).
- Don't fight the collision pass with manual offsets; if a label can't fit, shorten it
  or move the annotation into a `teaching` callout.
