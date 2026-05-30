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

## Dev Tooling

Dev mode is off by default. Enable with either:

```js
localStorage.setItem('econosDev', '1')
```

or append `?dev=1` to the page URL.

In dev mode, rendered block surfaces are scanned after render. If content overflows its box, `.overflow-warning` is added and a console warning is emitted. `window.EconosDebug.inspectCard()` returns a summary of rendered block types and overflow results.

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
