# Econos Diagram Language

EDL is the diagram layer for Econos. The rule is simple: authors describe the economics; the engine draws the geometry.

## Public API

```js
const result = ECONOS_DIAGRAMS.render(spec);
```

The result is always diagnostic:

```js
{
  svg: '<svg ...>',
  errors: [],
  warnings: [],
  derived: {},
  renderPlan: {}
}
```

Use `validate(spec)` when an editor needs fast feedback, and `compile(spec)` when tests need the render plan without legacy ambiguity.

## Recommended authoring mode

Prefer semantic specs.

```js
{
  version: 1,
  type: 'market',
  intent: 'demand-shift-right',
  mode: 'learn',
  curves: {
    D1: { role: 'demand', elasticity: 'normal' },
    D2: { role: 'demand', shiftFrom: 'D1', direction: 'right' },
    S: { role: 'supply', elasticity: 'normal' }
  },
  show: ['equilibrium-before', 'equilibrium-after', 'shift-arrow', 'price-change', 'quantity-change'],
  teaching: {
    takeaway: 'An increase in demand raises equilibrium price and quantity.'
  }
}
```

Avoid raw SVG, manual pixel nudges and raw equilibrium coordinates unless a diagram genuinely needs expert mode.

## Supported market features

- Demand and supply curves
- Elasticity-aware curve slopes
- Right/left curve shifts
- Before and after equilibria
- Price and quantity gridlines
- Shift arrows with open chevron arrowheads
- Shortage and surplus brackets for price controls
- Tax or subsidy wedges
- Consumer and producer burden regions
- Deadweight loss region
- Learn and exam modes
- Card, stage and article viewports
- Collision-aware labels
- Render-plan layering

## Arrowheads

The default Econos arrowhead is an open chevron. Filled triangle arrows are deliberately not the default because they look heavy on dense teaching diagrams.

Available marker styles:

- `chevron` - default
- `dot` - endpoint marker
- `bar` - constraint/boundary marker

## Draw layers

All elements are compiled into a render plan and then sorted by layer.

| Layer | Purpose |
|---:|---|
| 0 | background |
| 10 | zones |
| 20 | regions |
| 30 | gridlines |
| 40 | axes |
| 50 | old or secondary curves |
| 60 | main curves |
| 70 | arrows behind points |
| 80 | points |
| 90 | tick labels |
| 100 | curve labels |
| 110 | point labels |
| 120 | callouts |
| 130 | foreground arrows |
| 999 | debug overlays |

## Agent rules

Claude Code and Codex should follow these rules:

1. Do not hand-author raw SVG in data files.
2. Use semantic diagrams before expert specs.
3. Do not type raw x/y equilibrium points. Let the engine solve intersections.
4. Do not invent new tones, arrowheads or show tokens without adding them to the engine and tests.
5. Do not use manual label offsets unless automatic placement has failed and the warning explains why.
6. Keep `ECONOS_PPF.render()` working until all legacy specs have migrated.
7. Add examples to `dev/diagram-gallery.html` when adding new diagram families.

## Migration

Existing chart specs can continue to render through the legacy compatibility path. New specs should use `ECONOS_DIAGRAMS.render(spec)`.

For migration, wrap old charts as expert specs first, then replace common market, tax, subsidy, price-control and PPF diagrams with semantic EDL specs topic by topic.
