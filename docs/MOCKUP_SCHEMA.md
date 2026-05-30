# Mockup Extraction Schema

When building a block-based card from a ChatGPT mockup image, capture the raw reading of the mockup in this intermediate JSON shape before writing any block data. The schema is your translation layer — structured enough to drive the block-type mapping in the `econos-image-to-data` skill, but free from block syntax so the extraction stays readable.

Produce one object per card.

---

## Shape

```json
{
  "page": {
    "title": "Card title as written in the mockup",
    "lede": "Opening paragraph text",
    "blocks": [
      {
        "type": "raw region type — see vocabulary below",
        "bounds": "optional rough position: top | upper | middle | lower | bottom",
        "content": { }
      }
    ]
  }
}
```

The `blocks` array is ordered top-to-bottom as the regions appear in the mockup. Each entry has:

| Field | Type | Required | Notes |
|---|---|---|---|
| `type` | string | yes | One of the raw region types from the vocabulary table below |
| `bounds` | string | no | Rough vertical position: `top`, `upper`, `middle`, `lower`, `bottom` |
| `content` | object | yes | Shape varies by region type — see per-type fields below |

---

## Per-type content fields

### `section-header`

```json
{ "text": "THE MECHANISM", "icon": "optional emoji or number" }
```

Maps to: `sectionHeader`

---

### `callout-strip`

```json
{ "tone": "green", "icon": "💡", "text": "Short reminder text." }
```

Maps to: `calloutStrip` (alias: `tip`)

---

### `hero-visual`

```json
{ "svgKey": "existing ECONOS_ICONS key — or null if custom", "caption": "optional caption" }
```

Maps to: `heroVisual` when referencing a named icon; `diagram` with `svgKey` when using the diagram block frame.

---

### `diagram`

```json
{
  "diagramType": "AD/AS | PPF | Phillips | elasticity | multiplier | labour-market | cost-curves | market-structure | J-curve | 45-degree | growth | tax | price-control | other",
  "diagramMode": "the specific scenario shown — e.g. demand-pull, cost-push, ceiling, growth-shift — or null",
  "diagramCaption": "caption text below the diagram — or null",
  "generatorName": "resolved ECONOS_DIAGRAMS key if known — or null",
  "svgKey": "ECONOS_ICONS fallback key if no generator covers it — or null"
}
```

Maps to: `diagram` block with `spec:` (when a generator covers it) or `svgKey:` (legacy icon fallback).

Use `docs/DIAGRAM_LIBRARY.md` to resolve `diagramType` + `diagramMode` to a `generatorName`. If no generator fits, the diagram needs custom SVG in `js/icons.js`.

---

### `tile-grid`

```json
{
  "columns": 3,
  "items": [
    { "tone": "green",  "icon": "🏠", "head": "Tile heading", "body": "Body text." },
    { "tone": "blue",   "icon": "🏭", "head": "Tile heading", "body": "Body text." }
  ]
}
```

Maps to: `grid` with `cols: N` containing `tile` children.

---

### `single-tile`

```json
{ "tone": "amber", "icon": "⚠️", "head": "Heading", "body": "Body text." }
```

Maps to: `tile` (used directly, without a `grid` wrapper, when the mockup shows a standalone emphasis tile).

---

### `big-idea`

```json
{ "text": "Aggregate Demand is total planned spending at each price level." }
```

Maps to: `bigIdea` (always renders green).

---

### `exam-edge`

```json
{ "title": "Exam edge", "text": "Exam tip text." }
```

Maps to: `examEdge` (always purple with a star marker).

---

### `warning`

```json
{ "text": "Do not confuse movement along AD with a shift of AD." }
```

Maps to: `warning` (always amber).

---

### `versus-rows`

```json
{
  "leftLabel": "Expansionary",
  "leftTone": "blue",
  "rightLabel": "Contractionary",
  "rightTone": "rose",
  "rows": [
    { "criterion": "Effect on AD",    "left": "Increases",  "right": "Decreases" },
    { "criterion": "Effect on jobs",  "left": "More jobs",  "right": "Fewer jobs" }
  ]
}
```

Maps to: `versusRows`

---

### `decision-matrix`

```json
{
  "columns": ["Policy", "Speed", "Effectiveness"],
  "rows": [
    { "cells": ["Fiscal",   "Slow", "High"]   },
    { "cells": ["Monetary", "Fast", "Medium"] }
  ]
}
```

Maps to: `decisionMatrix`

---

### `traffic-light`

```json
{
  "green": "Works when demand-pull inflation is below 5%.",
  "amber": "May cause crowding out if borrowing costs rise.",
  "red":   "Fails during a liquidity trap."
}
```

Maps to: `trafficLight` (any omitted band is hidden in the rendered output).

---

### `glossary-row`

```json
{
  "terms": [
    { "term": "Multiplier",   "definition": "The ratio of final income change to the initial injection." },
    { "term": "MPC",          "definition": "Marginal propensity to consume." }
  ]
}
```

Maps to: `glossaryRow`

---

### `mechanism-chain`

```json
{
  "steps": [
    { "label": "Cut interest rates", "detail": "Base rate falls" },
    { "label": "Cheaper borrowing" },
    { "label": "Investment rises" }
  ],
  "breakpoints": [
    { "label": "Liquidity trap", "tone": "amber" }
  ]
}
```

Maps to: `mechanismChain`

---

### `ripple-cascade`

```json
{
  "initial": "£1,000m",
  "rounds": [
    { "round": "Round 1", "amount": "£800m" },
    { "round": "Round 2", "amount": "£640m" }
  ],
  "leakageArrows": ["20% saved", "20% tax"]
}
```

Maps to: `rippleCascade`

---

### `opposing-flows`

```json
{
  "positiveLabel": "Exports",  "positiveValue": "£340bn", "positiveTone": "green",
  "negativeLabel": "Imports",  "negativeValue": "£420bn", "negativeTone": "rose",
  "resultLabel":   "Trade deficit", "resultValue": "−£80bn"
}
```

Maps to: `opposingFlows`

---

### `timeline`

```json
{
  "events": [
    { "year": "2008", "title": "Financial crisis",  "tone": "rose", "body": "Global credit crunch." },
    { "year": "2009", "title": "QE launched",        "tone": "blue", "body": "Bank of England buys gilts." }
  ]
}
```

Maps to: `timeline`

---

### `spectrum`

```json
{
  "axisLeft":  "Command",
  "axisRight": "Free market",
  "axisLabel": "Economic systems",
  "bands": [
    { "label": "North Korea", "tone": "rose",  "icon": "🌐" },
    { "label": "UK",          "tone": "blue",  "icon": "🌐" },
    { "label": "Hong Kong",   "tone": "green", "icon": "🌐" }
  ]
}
```

Maps to: `spectrum`

---

### `case-studies`

```json
{
  "cols": 2,
  "cases": [
    { "title": "UK 2010–15", "cause": "Austerity", "outcome": "Slow recovery", "verdict": "Mixed", "tone": "amber" }
  ]
}
```

Maps to: `caseStudies`

---

### `satellite-diagram`

```json
{
  "centre": { "label": "GDP", "value": "£2.2tn" },
  "satellites": [
    { "label": "Consumption", "metric": "61%", "tone": "green" },
    { "label": "Investment",  "metric": "17%", "tone": "blue"  }
  ]
}
```

Maps to: `satelliteDiagram`

---

### `policy-toolkit`

```json
{
  "tools": [
    { "label": "Interest rate cut", "bestFor": "Demand stimulus",  "risk": "Asset bubbles", "tone": "blue"  },
    { "label": "QE",                "bestFor": "Liquidity crisis", "risk": "Inflation",     "tone": "amber" }
  ]
}
```

Maps to: `policyToolkit`

---

### `metric-card`

```json
{
  "label":   "UK CPI",
  "value":   "3.2%",
  "target":  "2%",
  "status":  "Above target",
  "tone":    "amber",
  "display": "number"
}
```

Maps to: `metricCard` (`display` is `number` or `badge`).

---

### `target-gauge`

```json
{
  "label":       "Inflation",
  "value":       3.2,
  "targetLow":   1,
  "targetHigh":  3,
  "min":         0,
  "max":         6,
  "tone":        "amber"
}
```

Maps to: `targetGauge` (all numeric fields are required in the block; `targetLow`/`targetHigh` become `targetRange:[lo,hi]`).

---

### `equation-hero`

```json
{
  "tokens": [
    { "token": "AD",  "tone": "blue"   },
    "=",
    { "token": "C",   "tone": "green"  },
    "+",
    { "token": "I",   "tone": "blue"   },
    "+",
    { "token": "G",   "tone": "purple" },
    "+",
    { "token": "X−M", "tone": "amber"  }
  ],
  "caption": "Aggregate Demand identity"
}
```

Maps to: `equationHero` (plain strings in the tokens array are operators; objects with `token` + `tone` are coloured chips).

---

### `worked-example-strip`

```json
{
  "scenario": "MPC = 0.8, initial injection = £500m",
  "steps": [
    { "label": "Multiplier", "value": "1 / (1−0.8) = 5" },
    { "label": "Total ΔY",   "value": "5 × £500m" }
  ],
  "result": "£2,500m"
}
```

Maps to: `workedExampleStrip`

---

### `fact-chip`

```json
{
  "label": "UK unemployment",
  "value": "4.2%",
  "date":  "Q4 2023",
  "tone":  "slate"
}
```

Maps to: `factChip`

---

## Vocabulary table

| Raw region type | Econos block type |
|---|---|
| `section-header` | `sectionHeader` |
| `callout-strip` | `calloutStrip` / `tip` |
| `hero-visual` | `heroVisual` or `diagram` |
| `diagram` | `diagram` (with `spec` or `svgKey`) |
| `tile-grid` | `grid` + `tile` children |
| `single-tile` | `tile` |
| `big-idea` | `bigIdea` |
| `exam-edge` | `examEdge` |
| `warning` | `warning` |
| `versus-rows` | `versusRows` |
| `decision-matrix` | `decisionMatrix` |
| `traffic-light` | `trafficLight` |
| `glossary-row` | `glossaryRow` |
| `mechanism-chain` | `mechanismChain` |
| `ripple-cascade` | `rippleCascade` |
| `opposing-flows` | `opposingFlows` |
| `timeline` | `timeline` |
| `spectrum` | `spectrum` |
| `case-studies` | `caseStudies` |
| `satellite-diagram` | `satelliteDiagram` |
| `policy-toolkit` | `policyToolkit` |
| `metric-card` | `metricCard` |
| `target-gauge` | `targetGauge` |
| `equation-hero` | `equationHero` |
| `worked-example-strip` | `workedExampleStrip` |
| `fact-chip` | `factChip` |

---

## See also

- `.claude/skills/econos-image-to-data/SKILL.md` — the full skill that consumes this schema
- `docs/RENDER_BLOCKS.md` — authoritative block type reference with all fields
- `docs/DIAGRAM_LIBRARY.md` — generator configs and the `diagram` block spec
