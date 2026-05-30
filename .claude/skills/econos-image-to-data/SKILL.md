---
name: econos-image-to-data
description: Use when rebuilding an Econos card from a ChatGPT mockup image using the block system (blocks:[...]). This is distinct from econos-build-from-mockup, which targets the ad-interactive renderer. Trigger when the user shares a mockup image and asks to "build this card", "turn this mockup into a block card", "convert this to blocks", or when the card being built uses the renderBlocks path rather than ad-interactive.
---

# Building a block-based Econos card from a ChatGPT mockup

This skill covers the full journey from a ChatGPT mockup image to a schema-correct card that uses the `blocks:[...]` system documented in `docs/RENDER_BLOCKS.md`. It is **not** a path to the `ad-interactive` renderer — use the `econos-card-template` and `econos-build-from-mockup` skills for that.

When `card.blocks` is a non-empty array, `js/app.js` hands the card body directly to `window.renderBlocks(card)`. The surrounding chrome — progress bar, header, footer, navigation — is still managed by `renderCard`. No template field is required. All Phase 0 and Phase 1 blocks defined in `docs/RENDER_BLOCKS.md` are valid; the `diagram` block type (documented in `docs/DIAGRAM_LIBRARY.md`) is also valid inside a `blocks` array.

---

## The prime directive: mockup is the visual source of truth

The mockup is a composition contract, not a content script. Follow these priorities in order:

1. **Preserve composition before wording.** If the mockup shows three tiles in a row, build three tiles. Adjust copy only after the layout is settled.
2. **Shorten text before changing layout.** If a tile's body text overflows, cut words — don't collapse a 3-column grid to 2 columns.
3. **Reuse existing renderer blocks and diagram generators before inventing SVG.** Check whether an existing `ECONOS_DIAGRAMS` generator or a named block type covers the visual before authoring custom SVG. Custom SVG is only warranted when no generator or block fits.
4. **Override the mockup only for:** a factual error, an impossible interaction (e.g. a toggle that has no JS backing), or layout overflow that cannot be resolved by shortening text. When you override, record the delta and tell the user.

---

## Step-by-step

### Step 1 — Read the mockup

Examine the image carefully. Note:

- The card title and lede text
- Each distinct visual region from top to bottom (section headers, tile grids, charts, comparison rows, flow arrows, gauges, equation strips, exam-edge callout, etc.)
- The tone of each region (green, amber, blue, purple, rose, slate)
- Any diagram type shown (AD/AS, PPF, Phillips curve, elasticity, etc.)
- The number of columns in grids
- The text in every tile head, body, label, and caption

Produce an **extraction object** in the intermediate schema (see the section below) before writing any block data. This is your working document.

### Step 2 — Identify the storytelling pattern

Name the pattern from the 10-pattern catalogue in the `econos-card-template` skill:

1. Sequential flow chain
2. Side-by-side pair
3. Spectrum / regime grid
4. Comparison table
5. Worked example walkthrough
6. Predict-then-reveal
7. Interactive multi-state diagram
8. Decompose a diagram
9. Evidence-then-verdict
10. Tile grid

The pattern determines which blocks are the _core_ of the card. Other blocks are additions. If two consecutive cards in the topic share the same pattern, flag it before building.

### Step 3 — Map each visual region to a block type

Walk through the extraction object region by region and assign a block type from the table below. When multiple block types could work, prefer the one that requires the least custom markup.

| Mockup visual region | Primary block type(s) | Notes |
|---|---|---|
| Section heading with rule | `sectionHeader` | `icon` may be a number, emoji, or `ECONOS_ICONS` key; `rule: false` hides the rule |
| Single green callout / tip strip | `calloutStrip` (alias: `tip`) | Tone must be one of the six canonical values |
| Single hero SVG icon | `heroVisual` | `svgKey` into `window.ECONOS_ICONS`; use `diagram` block if a generator covers it |
| Generated econ diagram (AD/AS, PPF, etc.) | `diagram` with `spec:` | Set `spec.type` to the generator name on `ECONOS_DIAGRAMS`; see generator list below |
| Legacy SVG icon (non-generated) | `diagram` with `svgKey:` | Fallback when no generator covers the shape |
| Grid of coloured tiles | `grid` containing `tile` children | Set `cols:` to the mockup column count; children use `tone`, `icon`, `head`, `body` |
| Single large tile | `tile` (direct, no `grid` wrapper) | Use for a standalone emphasis tile |
| Single big concept statement | `bigIdea` | Always renders green; short declarative sentence |
| Exam-edge purple callout | `examEdge` | Always purple with a star marker; every block card should end with one |
| Amber warning / caveat | `warning` | Always amber |
| Side-by-side comparison table | `versusRows` | `left` and `right` headers with tone; `rows` carry criterion + left/right values |
| Multi-column data table | `decisionMatrix` | `columns` header array + `rows` of `cells` |
| Green / amber / red verdict | `trafficLight` | Any omitted band is hidden |
| Glossary strip | `glossaryRow` | `terms:[{term, definition}]` |
| Horizontal causal chain A→B→C | `mechanismChain` | `steps:[{label, detail?}]`; optional `breakpoints` for caveats |
| Decreasing multiplier bars | `rippleCascade` | `initial`, `rounds`, optional `leakageArrows` |
| Opposing arrows netting to result | `opposingFlows` | Trade balance, injections vs leakages, etc. |
| Vertical real-world timeline | `timeline` | `events:[{year, title, tone, body?}]` |
| Spectrum bar with 4–6 bands | `spectrum` | `axis` labels + `bands:[{label, tone, icon?}]` |
| Case-study tiles with verdict pill | `caseStudies` | `cases:[{title, cause, outcome, verdict, tone}]`; `cols` 1–4 |
| Central node + satellite chips | `satelliteDiagram` | CSS layout, no SVG needed |
| Policy toolkit grid | `policyToolkit` | `tools:[{label, bestFor, risk, tone}]` |
| Headline metric with target | `metricCard` | `label`, `value`, `target?`, `status?`, `tone`, `display:'number'\|'badge'` |
| Horizontal gauge bar | `targetGauge` | All numeric fields required: `value`, `targetRange:[lo,hi]`, `min`, `max` |
| Large centred equation | `equationHero` | `equation:[token\|string]` where token is `{token, tone}`; optional `caption` |
| Calculation strip with steps | `workedExampleStrip` | `scenario`, `steps:[{label, value}]`, `result` |
| Small UK-fact anchor chip | `factChip` | `label`, `value`, optional `date`, `tone` |

### Step 4 — Choose diagram generators over custom SVG

Before authoring any custom SVG, check whether an `ECONOS_DIAGRAMS` generator covers the diagram shown in the mockup. The full generator list (all configs documented in `docs/DIAGRAM_LIBRARY.md`):

| Diagram type | Generator name | Key config options |
|---|---|---|
| AD/AS shifts, gaps | `adasDiagram` | `mode`: `demand-pull`, `cost-push`, `monetary`, `recession`, `ad-shift-left`, `ad-shift-right`, `sras-shift-left`, `sras-shift-right`, `lras-shift-right`, `recessionary-gap`, `inflationary-gap` |
| PPF / PPC | `ppfDiagram` | `mode`: `basic`, `opportunity-cost`, `consumer-vs-capital`, `trade`, `efficiency-gap`, `growth-shift` |
| Indirect tax or subsidy | `taxSubsidyDiagram` | `mode`: `indirect-tax`, `subsidy` |
| Price ceiling or floor | `priceControlDiagram` | `mode`: `ceiling`, `floor` |
| Multiplier rounds / ripple / AD shift | `multiplierDiagram` | `view`: `rounds`, `ripple`, `adShift`; `multiplier`, `mpc`, `injection`, `rounds` |
| PED/PES elasticity curves | `elasticityDiagram` | `curve`: `demand`\|`supply`; `elasticity`: `elastic`, `inelastic`, `unit`, `perfectly-elastic`, `perfectly-inelastic` |
| Firm cost curves MC/AC/AVC/AFC | `costCurvesDiagram` | — |
| Market structure AR/MR/MC/AC | `marketStructureDiagram` | — |
| Labour market with min-wage or monopsony | `labourMarketDiagram` | — |
| Short-run + long-run Phillips curve | `phillipsCurve` | — |
| J-curve (depreciation + trade balance) | `jCurveDiagram` | — |
| 45-degree Keynesian diagram | `fortyFiveDiagram` | — |
| Economic growth sources / sustainability | `growthDiagram` | — |

Use the `diagram` block:

```js
// Generator-backed diagram
{ type: 'diagram', spec: { type: 'adasDiagram', mode: 'demand-pull' }, caption: 'Demand-pull inflation' }

// Legacy SVG icon (ECONOS_ICONS key)
{ type: 'diagram', svgKey: 'adShiftRight', caption: 'AD shifts right', height: 240 }
```

When the mockup shows a diagram that no generator covers (e.g. a bespoke comparative-advantage diagram), author custom SVG in `js/icons.js` following the `econos-visual-diagram` skill, then reference it with `{ type: 'heroVisual', svgKey: 'yourKey' }` or `{ type: 'diagram', svgKey: 'yourKey' }`.

### Step 5 — Assemble the `blocks:[...]` card

Write the card data object. The minimum required fields are `id`, `title`, `lede`, and `blocks`. Do not add a `template` field — the presence of `blocks` routes the card automatically.

```js
{
  id: 'semantic-card-id',        // hyphenated, unique within the topic
  title: 'Card title',
  lede: 'Opening paragraph. Use <strong> for emphasis.',
  blocks: [
    // blocks in visual top-to-bottom order as they appear in the mockup
  ]
}
```

Block order must match the mockup's top-to-bottom layout. Every block card should end with an `examEdge` block unless the mockup explicitly omits one.

Assemble from the extraction object produced in Step 1, mapping each region to the block type chosen in Step 3. Validate all tones (`green | amber | blue | purple | rose | slate`), all required numeric fields on `targetGauge`, all token shapes on `equationHero`, and all `spec.type` values against the generator list in Step 4.

### Step 6 — Verify in `dev/renderer-lab.html`

Open `dev/renderer-lab.html` in a browser. Paste the raw card object into the text area. The sandbox renders it in isolation without loading a full topic.

Check that:

- Every block renders (unknown block types produce no output; check the console for warnings)
- Column counts match the mockup
- No tile heads or bodies overflow their container
- Diagram generators produce the correct mode
- The `examEdge` block appears at the bottom

Append `?screenshot=1` to the URL to strip chrome and see the card as a plain content slab for comparison against the mockup image.

### Step 7 — Screenshot and compare

Use the `run-econos` skill to take a full-page screenshot of the rendered card. Compare side-by-side against the mockup. Note any deltas; apply fixes iteratively, checking the renderer-lab between each change.

Common fixable deltas:

| Delta | Fix |
|---|---|
| Grid has wrong column count | Adjust `cols:` on the `grid` block |
| Tile body overflows | Shorten body text (preserve meaning, cut words) |
| Diagram mode is close but not exact | Try adjacent `mode` values or add `annotations:[]` overrides |
| Tone wrong on a tile | Correct the `tone` field — never invent a non-canonical tone |
| Missing section separator | Add a `sectionHeader` block between regions |
| Exam-edge callout text truncated | Shorten the `text` field — do not change the purple styling |

### Step 8 — Run `EconosDebug.validate()`

In the browser console (with `?dev=1` appended to the URL, or `localStorage.setItem('econosDev','1')`):

```js
window.EconosDebug.validate()
// → { errors: [...], warnings: [...] }
```

All errors must be cleared before shipping. Treat warnings as review items — fix any that relate to unknown block types or missing required fields.

---

## Mockup extraction intermediate schema

Before writing block data, capture the raw reading of each mockup in this JSON shape. It is your translation layer — structured enough to drive block mapping, but not yet block syntax. Produce one object per card.

```json
{
  "page": {
    "title": "Card title as written in the mockup",
    "lede": "Opening paragraph text",
    "blocks": [
      {
        "type": "raw region type — use the vocabulary below",
        "bounds": "optional rough position: top | upper | middle | lower | bottom",
        "content": {
          "description": "free-text description of what the region shows",
          "columns": 3,
          "items": [
            {
              "tone": "green",
              "icon": "emoji if visible",
              "head": "tile heading",
              "body": "tile body text"
            }
          ],
          "diagramType": "AD/AS | PPF | Phillips | elasticity | multiplier | etc. — or null",
          "diagramMode": "the specific scenario shown — or null",
          "diagramCaption": "caption text below the diagram — or null",
          "equationTokens": ["AD", "=", "C", "+", "I", "+", "G", "+", "X-M"],
          "criterion": "for versus/comparison rows — the dimension being compared",
          "leftLabel": "left-column header",
          "rightLabel": "right-column header",
          "rows": [
            { "criterion": "row label", "left": "left value", "right": "right value" }
          ],
          "text": "for single-text blocks (calloutStrip, bigIdea, examEdge, warning)",
          "steps": [
            { "label": "step label", "detail": "optional explanation" }
          ],
          "value": "metric value for metricCard or targetGauge",
          "unit": "£ | % | bn etc.",
          "target": "target value or range",
          "events": [
            { "year": "2008", "title": "Event", "tone": "rose", "body": "Optional detail." }
          ]
        }
      }
    ]
  }
}
```

### Vocabulary for `type` in the extraction schema

Use these raw region types when filling in the extraction object. They map directly to block types in the next step:

| Raw region type | Maps to block type |
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

## Reference example

**Mockup description:** A card titled "Aggregate Demand" with a lede explaining AD as total planned spending. The mockup shows:

1. A green tip callout: "Always state what happens to each component separately"
2. A large centred equation: AD = C + I + G + (X − M), each token colour-coded
3. A section header "THE COMPONENTS" with rule
4. A 2×2 tile grid — C (green, household spending), I (blue, business investment), G (purple, government spending), X−M (amber, net exports)
5. An AD/AS diagram shifted right with a caption "Demand-pull inflation"
6. A purple exam-edge callout: "Link every AD shift to a specific component — examiners want cause, not just 'AD rises'"

**Extraction object:**

```json
{
  "page": {
    "title": "Aggregate Demand",
    "lede": "Aggregate Demand is total planned spending on goods and services produced in an economy at any given price level.",
    "blocks": [
      { "type": "callout-strip", "bounds": "top",
        "content": { "tone": "green", "text": "Always state what happens to each component separately" } },
      { "type": "equation-hero", "bounds": "upper",
        "content": { "equationTokens": ["AD", "=", "C", "I", "G", "X-M"] } },
      { "type": "section-header", "bounds": "middle",
        "content": { "text": "THE COMPONENTS" } },
      { "type": "tile-grid", "bounds": "middle",
        "content": { "columns": 2,
          "items": [
            { "tone": "green",  "icon": "🏠", "head": "Consumption (C)",  "body": "Household spending on goods and services — the largest component." },
            { "tone": "blue",   "icon": "🏭", "head": "Investment (I)",   "body": "Business spending on capital: machinery, buildings, R&D." },
            { "tone": "purple", "icon": "🏛️", "head": "Government (G)",   "body": "Public spending on services, infrastructure, and transfer payments." },
            { "tone": "amber",  "icon": "🌍", "head": "Net Exports (X−M)","body": "Exports minus imports; a deficit subtracts from AD." }
          ]
        }
      },
      { "type": "diagram", "bounds": "lower",
        "content": { "diagramType": "AD/AS", "diagramMode": "demand-pull",
                     "diagramCaption": "Demand-pull inflation" } },
      { "type": "exam-edge", "bounds": "bottom",
        "content": { "text": "Link every AD shift to a specific component — examiners want cause, not just 'AD rises'" } }
    ]
  }
}
```

**Resulting `blocks:[...]` card:**

```js
{
  id: 'aggregate-demand-components',
  title: 'Aggregate Demand',
  lede: 'Aggregate Demand is total planned spending on goods and services produced in an economy at any given price level.',
  blocks: [
    {
      type: 'calloutStrip',
      tone: 'green',
      icon: '💡',
      text: 'Always state what happens to each component separately.'
    },
    {
      type: 'equationHero',
      equation: [
        { token: 'AD',  tone: 'blue'   },
        '=',
        { token: 'C',   tone: 'green'  },
        '+',
        { token: 'I',   tone: 'blue'   },
        '+',
        { token: 'G',   tone: 'purple' },
        '+',
        { token: 'X−M', tone: 'amber'  }
      ],
      caption: 'Aggregate Demand identity'
    },
    {
      type: 'sectionHeader',
      icon: '2',
      label: 'The components',
      rule: true
    },
    {
      type: 'grid',
      cols: 2,
      children: [
        { type: 'tile', tone: 'green',  icon: '🏠', head: 'Consumption (C)',   body: 'Household spending on goods and services — the largest component.' },
        { type: 'tile', tone: 'blue',   icon: '🏭', head: 'Investment (I)',    body: 'Business spending on capital: machinery, buildings, R&D.' },
        { type: 'tile', tone: 'purple', icon: '🏛️', head: 'Government (G)',    body: 'Public spending on services, infrastructure, and transfer payments.' },
        { type: 'tile', tone: 'amber',  icon: '🌍', head: 'Net Exports (X−M)', body: 'Exports minus imports; a trade deficit subtracts from AD.' }
      ]
    },
    {
      type: 'diagram',
      spec: { type: 'adasDiagram', mode: 'demand-pull' },
      caption: 'Demand-pull inflation: AD shifts right, price level and real output rise.'
    },
    {
      type: 'examEdge',
      title: 'Exam edge',
      text: 'Link every AD shift to a specific component — examiners want cause, not just "AD rises".'
    }
  ]
}
```

Notice: the equation used the `equationHero` block rather than a flat text field; the diagram reused the `adasDiagram` generator rather than custom SVG; and the exam-edge callout closes the card.

---

## Dev tooling quick reference

| Tool | How to use |
|---|---|
| `dev/renderer-lab.html` | Drop the raw card object into the text area; renders in isolation with no topic loaded |
| `?screenshot=1` | Append to any card URL to strip chrome; body class `screenshot-mode` applied by `js/screenshot-mode.js` |
| `?dev=1` | Enables `js/render-validate.js`; logs validator output to console under `[EconosDebug]` |
| `window.EconosDebug.validate()` | Call from console; validates `window.ECONOS_TOPIC` or an arbitrary object you pass |
| `run-econos` skill | Headless Playwright screenshots; compare to mockup before shipping |

---

## Guardrails

- **Never invent a tone.** Only `green | amber | blue | purple | rose | slate` are valid. The renderer maps them to fixed hex codes; anything else silently breaks the colour.
- **Never inline SVG into a block field.** Custom SVG lives in `js/icons.js` under a named key and is referenced by `svgKey`. The only exception is HTML+SVG hybrid heroes (see `econos-visual-diagram` skill) — those go in `js/icons.js` too.
- **Bump `CACHE_NAME` in `sw.js` when you change `js/icons.js`.** Icons are cache-first; users on the old cache keep seeing stale SVG until the service worker activates a new cache name.
- **Never fabricate UK data.** If a metric from the mockup is not verifiable, replace the number with a qualitative label or ask the user for the correct figure.
- **`EconosDebug.validate()` must report zero errors before shipping.** Warnings are review items; errors are blockers.
- **Hand off all git work to `econos-ship-changes`.** Do not run push, PR, or merge logic from this skill.

---

## See also

- `docs/RENDER_BLOCKS.md` — authoritative block type reference with all fields and defaults
- `docs/DIAGRAM_LIBRARY.md` — generator configs and the `diagram` block spec
- `docs/MOCKUP_SCHEMA.md` — standalone reference for the extraction intermediate schema
- `econos-card-template` — 10 storytelling patterns, pattern-selection framework, and the `ad-interactive` field reference (for cards not using the block path)
- `econos-visual-diagram` — SVG spec-first workflow, tone hex palette, and named SVG recipes for custom diagrams
- `run-econos` — screenshot driver for visual verification
- `econos-ship-changes` — mandatory shipping workflow (backup main first)
