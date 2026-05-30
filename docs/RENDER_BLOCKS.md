# Render Blocks

`renderBlocks(card)` is the Phase 0 composition-as-data contract for Econos cards. It is additive: cards without a `blocks` array keep the existing renderer path.

## Contract

```js
{
  title: 'Card title',
  blocks: [
    { type: 'sectionHeader', icon: '1', label: 'Mechanism', rule: true },
    { type: 'tile', tone: 'green', icon: '+', head: 'Higher AD', body: 'Spending rises.' }
  ]
}
```

When `card.blocks` is a non-empty array, `js/app.js` sets the card body with `window.renderBlocks(card)` before legacy renderer dispatch. The surrounding card chrome, progress, footer, and navigation remain owned by `renderCard`.

`window.ECONOS_BLOCKS` is the global registry. Add later blocks by assigning a renderer function keyed by `type`. A renderer receives the block object and returns HTML. Unknown block types render nothing and warn only in dev mode.

Valid tones are the canonical six: `green`, `amber`, `blue`, `purple`, `rose`, `slate`.

## Starter Blocks

### `sectionHeader`

```js
{ type: 'sectionHeader', icon: 'A', label: 'AD shift', rule: true }
```

`icon` may be text or a key in `window.ECONOS_ICONS`. `rule: false` hides the horizontal rule.

### `calloutStrip` / `tip`

```js
{ type: 'calloutStrip', tone: 'blue', icon: 'i', text: 'A concise reminder.' }
```

`tip` is an alias for `calloutStrip`.

### `heroVisual`

```js
{ type: 'heroVisual', svgKey: 'fiscalDragChart', height: 240, caption: 'Read left to right.' }
```

`svgKey` is looked up from `window.ECONOS_ICONS`.

### `grid`

```js
{
  type: 'grid',
  cols: 3,
  gap: '12px',
  children: [
    { type: 'tile', tone: 'green', icon: '+', head: 'Boost', body: 'AD rises.' },
    { type: 'tile', tone: 'amber', icon: '!', head: 'Constraint', body: 'Capacity may bind.', colSpan: 2 }
  ]
}
```

`cols` can be a number or a CSS grid template string. Children are rendered recursively through `window.ECONOS_BLOCKS`. Child blocks can set `colSpan`, `rowSpan`, or `span`.

Opt-in **tone cycling**: set `cycleTones: true` on a grid and any child without an explicit `tone` gets one auto-assigned from the `green → amber → blue → purple → rose → slate` rotation in array order. Children with their own `tone` are left alone. Lets a 5-tile rainbow be written without per-tile `tone:` keys.

### `tile`

```js
{ type: 'tile', tone: 'rose', icon: '-', head: 'Lower confidence', body: 'Households delay spending.', span: 1 }
```

### `bigIdea`

```js
{ type: 'bigIdea', text: 'AD is total planned spending at each price level.' }
```

Always green.

### `examEdge`

```js
{ type: 'examEdge', title: 'Exam edge', text: 'Link the diagram shift to spare capacity.' }
```

Always purple with a star marker.

### `warning`

```js
{ type: 'warning', text: 'Do not confuse movement along AD with a shift of AD.' }
```

Always amber.

## Phase 1 Blocks — Compare group (`js/blocks/compare.js`)

### `versusRows`

```js
{
  type: 'versusRows',
  left:  { label: 'Expansionary', tone: 'blue' },
  right: { label: 'Contractionary', tone: 'rose' },
  rows:  [
    { criterion: 'Effect on AD', left: 'Increases', right: 'Decreases' }
  ]
}
```

Side-by-side comparison table with a left column for the criterion and two coloured value columns.

### `decisionMatrix`

```js
{
  type: 'decisionMatrix',
  columns: ['Policy', 'Speed', 'Effectiveness'],
  rows: [
    { cells: ['Fiscal', 'Slow', 'High'] },
    { cells: ['Monetary', 'Fast', 'Medium'] }
  ]
}
```

A scrollable table with an optional header row. First cell of each data row is a `<th scope="row">`.

### `trafficLight`

```js
{
  type: 'trafficLight',
  green: 'Works when demand-pull inflation is below 5%.',
  amber: 'May cause crowding out if borrowing costs rise.',
  red:   'Fails during a liquidity trap.'
}
```

Three-band green/amber/red verdict block. Any band with no text is omitted.

### `glossaryRow`

```js
{
  type: 'glossaryRow',
  terms: [
    { term: 'Multiplier', definition: 'The ratio of final income change to the initial injection.' },
    { term: 'MPC', definition: 'Marginal propensity to consume.' }
  ]
}
```

Horizontal `<dl>` of term/definition pairs. Entries missing both fields are skipped.

### `pair`

```js
{
  type: 'pair',
  vsLabel: 'vs',
  left:  { tone: 'green', icon: '+', head: 'Inflation low',  body: 'Real wages preserved.' },
  right: { tone: 'rose',  icon: '-', head: 'Inflation high', body: 'Purchasing power eroded.' }
}
```

Two-column side-by-side comparison with an optional centre "vs" badge. Covers Pattern 2 (Side-by-side pair) from the design catalogue — sister to `versusRows` (criteria × alternatives). Omit `vsLabel` to drop the centre badge and render as a clean two-column block. Stacks on mobile.

## Phase 1 Blocks — Flow group (`js/blocks/flow.js`)

### `stepChain`

```js
{
  type: 'stepChain',
  steps: [
    { head: 'Supply shock',  body: 'OPEC cuts supply.' },
    { head: 'SRAS shifts left', body: 'Costs hit firms.' },
    { head: 'Output falls',  body: 'Stagflation.' },
    { head: 'Wages rise',    body: 'Workers protect real pay.' },
    { head: 'Wage–price spiral', body: 'Expectations ratchet up.' }
  ]
}
```

Rich numbered tile chain with arrow separators between steps. Each step gets a numbered circular badge (1, 2, 3…) in the top-centre automatically; pass an explicit `icon` on a step to override. Tones auto-cycle blue → amber → green → purple → rose unless `cycleTones: false` is set or a step has an explicit `tone`. Covers the "five-step mechanism" mockup pattern (e.g. the stagflation 5-step) that previously required hand-rolled SVG.

### `mechanismChain`

```js
{
  type: 'mechanismChain',
  steps: [
    { label: 'Cut interest rates', detail: 'Base rate falls' },
    { label: 'Cheaper borrowing' },
    { label: 'Investment rises' }
  ],
  breakpoints: [
    { label: 'Liquidity trap', tone: 'amber' }
  ]
}
```

Horizontal causal chain A → B → C with optional caveat chips. Stacks vertically on mobile.

### `rippleCascade`

```js
{
  type: 'rippleCascade',
  initial: '£1,000m',
  rounds: [
    { round: 'Round 1', amount: '£800m' },
    { round: 'Round 2', amount: '£640m' }
  ],
  leakageArrows: ['20% saved', '20% tax']
}
```

Decreasing bar chart showing multiplier rounds with optional leakage labels per round.

### `opposingFlows`

```js
{
  type: 'opposingFlows',
  positive: { label: 'Exports',  value: '£340bn', tone: 'green' },
  negative: { label: 'Imports',  value: '£420bn', tone: 'rose'  },
  result:   { label: 'Trade deficit', value: '−£80bn' }
}
```

Two opposing arrows that net to a result. Useful for trade balance, injections vs leakages, etc.

### `timeline`

```js
{
  type: 'timeline',
  events: [
    { year: '2008', title: 'Financial crisis', tone: 'rose', body: 'Global credit crunch.' },
    { year: '2009', title: 'QE launched',      tone: 'blue', body: 'Bank of England buys gilts.' }
  ]
}
```

Vertical timeline of real-world episodes. Each item can have an optional body paragraph.

## Phase 1 Blocks — Structure group (`js/blocks/structure.js`)

### `spectrum`

```js
{
  type: 'spectrum',
  axis: { left: 'Command', right: 'Free market', label: 'Economic systems' },
  bands: [
    { label: 'North Korea', tone: 'rose',   icon: 'globe' },
    { label: 'UK',          tone: 'blue',   icon: 'globe' },
    { label: 'Hong Kong',   tone: 'green',  icon: 'globe' }
  ]
}
```

4–6 equal-width bands along one labelled axis dimension. Icons are optional `window.ECONOS_ICONS` keys.

### `caseStudies`

```js
{
  type: 'caseStudies',
  cols: 2,
  cases: [
    { title: 'UK 2010–15', cause: 'Austerity', outcome: 'Slow recovery', verdict: 'Mixed', tone: 'amber' }
  ]
}
```

Grid of case-study tiles. Each tile shows cause, outcome, and a coloured verdict pill. `cols` 1–4 (auto if omitted).

### `satelliteDiagram`

```js
{
  type: 'satelliteDiagram',
  centre:     { label: 'GDP', value: '£2.2tn' },
  satellites: [
    { label: 'Consumption', metric: '61%', tone: 'green' },
    { label: 'Investment',  metric: '17%', tone: 'blue'  }
  ]
}
```

Central node with surrounding satellite chips (CSS layout, no SVG). Good for component breakdowns.

### `policyToolkit`

```js
{
  type: 'policyToolkit',
  tools: [
    { label: 'Interest rate cut', bestFor: 'Demand stimulus', risk: 'Asset bubbles', tone: 'blue' },
    { label: 'QE',                bestFor: 'Liquidity crisis', risk: 'Inflation',    tone: 'amber' }
  ]
}
```

Grid of policy-option cards showing label, best-for scenario, and risk. 2-up to 4-up auto layout.

## Phase 1 Blocks — Data group (`js/blocks/data.js`)

### `metricCard`

```js
{
  type: 'metricCard',
  label: 'UK CPI',
  value: '3.2%',
  target: '2%',
  status: 'Above target',
  tone: 'amber',
  display: 'number'
}
```

Headline metric card with optional target and status pill. `display` may be `'number'` (default) or `'badge'`.

### `targetGauge`

```js
{
  type: 'targetGauge',
  label: 'Inflation',
  value: 3.2,
  targetRange: [1, 3],
  min: 0,
  max: 6,
  tone: 'amber'
}
```

Horizontal gauge bar showing current value against a coloured target band. All numeric fields required.

### `equationHero`

```js
{
  type: 'equationHero',
  equation: [
    { token: 'AD', tone: 'blue' },
    '=',
    { token: 'C', tone: 'green' },
    '+',
    { token: 'I', tone: 'blue' },
    '+',
    { token: 'G', tone: 'purple' },
    '+',
    { token: 'X−M', tone: 'amber' }
  ],
  caption: 'Aggregate Demand identity'
}
```

Large centred equation with coloured chip tokens and plain operator strings. Optional caption below.

### `workedExampleStrip`

```js
{
  type: 'workedExampleStrip',
  scenario: 'MPC = 0.8, initial injection = £500m',
  steps: [
    { label: 'Multiplier', value: '1 / (1−0.8) = 5' },
    { label: 'Total ΔY',   value: '5 × £500m' }
  ],
  result: '£2,500m'
}
```

Left-to-right calculation strip with labelled steps and a final result box.

### `factChip`

```js
{
  type: 'factChip',
  label: 'UK unemployment',
  value: '4.2%',
  date: 'Q4 2023',
  tone: 'slate'
}
```

Small inline UK-fact chip for anchoring context. Any field is optional except `value` or `label`.

## Card-Level Metadata Fields

These fields sit on the card object alongside `blocks`. Two drive layout; the rest are agent-only build guidance that the renderer ignores entirely.

### Layout-driving fields

| Field | Type | Effect |
|---|---|---|
| `density` | `"airy" \| "standard" \| "compact" \| "exam"` | Sets `data-density="<value>"` on the `.econ-blocks` wrapper. CSS custom-property overrides in `css/econ-tokens.css` adjust `--econ-gap`, `--econ-pad`, and `--econ-body-size` automatically. Omitting the field leaves the default token values in effect. |
| `layoutPreset` | `string` | Adds `econ-preset--<value>` as a class on the `.econ-blocks` wrapper. No built-in styles are shipped for preset classes — they are hooks for topic-specific CSS additions. |

Example:

```js
{
  id: 'exam-technique',
  density: 'exam',
  layoutPreset: 'two-col-exam',
  blocks: [ /* … */ ]
}
```

Renders as:

```html
<div class="econ-blocks econ-preset--two-col-exam" data-render-blocks="1" data-density="exam">…</div>
```

### Agent-only fields (non-rendering)

The renderer reads none of these — they are carried on the card object purely as build guidance for AI agents and human authors. The validator treats them as known fields and will never flag them as unknown.

| Field | Purpose |
|---|---|
| `mockupMap` | Maps mockup image references to card structure; used during content authoring. |
| `visualBrief` | Free-text brief for SVG / diagram creation passed to visual-generation agents. |
| `buildNotes` | Freeform notes for the build agent about card intent, copy constraints, or review reminders. |
| `layoutLock` | Boolean or string — signals that the current layout should not be changed by an agent pass. Dev mode logs a `console.info` note when set. |
| `hierarchy` | Describes the intended visual hierarchy; used by layout-planning agents. |
| `preserveMockupLayout` | Boolean — instructs agents to preserve the original mockup's spatial arrangement rather than normalising it. Dev mode logs a `console.info` note when set. |

## Dev Tooling

Three dev-only files are loaded on every shell page (`learn-it.html`, `link-it.html`, `land-it.html`) via deferred `<script>` tags after the diagram and boot scripts. They are precached by the service worker alongside the production assets so offline use is unaffected.

### `js/render-validate.js` — topic validator

Validates the active topic against known block types, diagram types, templates, tones, and content-length budgets.

Enable with either:

```js
localStorage.setItem('econosDev', '1')
```

or append `?dev=1` to the page URL.

When active, `render-validate.js` auto-runs on `DOMContentLoaded` and logs any errors and warnings to the console under the `[EconosDebug]` group heading.

You can also call it manually at any time from the browser console:

```js
window.EconosDebug.validate()          // validates window.ECONOS_TOPIC
// → { errors: [...], warnings: [...] }

window.EconosDebug.validate(myTopic)   // validates an arbitrary topic object
```

The validator reads `window.ECONOS_BLOCKS` and `window.ECONOS_DIAGRAMS` when they are available (populated by the block and diagram scripts), falling back to hard-coded baselines so it can report unknown types even before the registries are fully loaded.

### `dev/renderer-lab.html` — QA sandbox

A standalone HTML page (not served in production, not precached) that lets you drop a raw card object into a text area and see it rendered in isolation, without loading a full topic. Useful for authoring new cards and checking block layouts before wiring them into a data file.

Open it directly from the repo:

```
dev/renderer-lab.html
```

No build step required — it loads the production scripts from relative paths.

### `js/screenshot-mode.js` — screenshot and preview modes

Adds body classes to strip UI chrome for automated screenshot capture or card preview.

| Query param | Body class added | Purpose |
|---|---|---|
| `?screenshot=1` | `screenshot-mode` | Full-chrome-strip for Playwright / GPT Image captures |
| `?preview=center-panel` | `preview-center` | Isolates the centre panel for in-browser preview |

Styles for both classes live in `css/screenshot.css`.

Example usage (Playwright):

```js
await page.goto('/edexcel_a/theme-2/causes-of-inflation/learn-it?screenshot=1');
await page.screenshot({ path: 'card.png', fullPage: true });
```

## Example Card

```js
{
  id: 'blocks-demo',
  title: 'Composition-as-data demo',
  lede: 'A Phase 0 card composed from starter blocks.',
  blocks: [
    { type: 'sectionHeader', icon: '1', label: 'Decompose the diagram' },
    { type: 'heroVisual', svgKey: 'fiscalDragChart', height: 230, caption: 'Hero visuals reuse ECONOS_ICONS.' },
    {
      type: 'grid',
      cols: 3,
      children: [
        { type: 'tile', tone: 'green', icon: '+', head: 'Consumption', body: 'Household spending rises.' },
        { type: 'tile', tone: 'blue', icon: 'G', head: 'Government', body: 'Fiscal expansion adds demand.' },
        { type: 'tile', tone: 'rose', icon: '-', head: 'Imports leak', body: 'Some extra spending leaves the circular flow.' }
      ]
    },
    { type: 'examEdge', title: 'Exam edge', text: 'Explain the size of the shift, then evaluate spare capacity.' }
  ]
}
```
