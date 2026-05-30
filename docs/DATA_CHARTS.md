# Data charts

`dataChart` is the block for charts where **the chart IS the data** — bar graphs,
line charts, pie/donut charts, column charts. It is distinct from `econDiagram`
(which draws economic curves with axes, shifts, and intersections) and from
`diagram` (which generates static economic SVGs).

> Rule of thumb: if you are showing numbers that could live in a spreadsheet,
> use `dataChart`. If you are showing supply, demand, cost curves, or any
> economic-graph relationships, use `econDiagram`.

See also: `docs/DIAGRAM_LIBRARY.md` (econDiagram), `docs/STRUCTURAL_GRAPHICS.md` (layout blocks).

---

## Pick the chart kind

| The data is… | `kind:` |
|---|---|
| Ranked items (GDP, income deciles, a league table) — horizontal bars | `bar` |
| Time series or two competing categories — vertical bars | `column` |
| A trend over time; one or more overlapping lines | `line` |
| Part-of-whole breakdown; can be a donut | `pie` |

---

## The block shape

All kinds share the outer wrapper:

```js
{
  type: 'dataChart',
  kind: 'bar',       // 'bar' | 'column' | 'line' | 'pie'
  caption: '…',
  // … kind-specific fields
}
```

The block is wired through `js/blocks/data-chart.js` (the dispatcher) and
`js/blocks/data-charts/<kind>.js` (the renderer registered on
`window.ECONOS_DATACHART`).

---

## `kind: 'bar'` — horizontal bar chart

Best for ranked data (GDP league tables, income deciles, policy scores). Bars
run left-to-right; labels sit on the left.

```js
{
  type: 'dataChart',
  kind: 'bar',
  yLabel: 'Annual household income (£)',   // axis label (optional)
  valueSuffix: '£',                         // appended to every value label
  sort: 'asc',                              // 'asc' | 'desc' (optional — omit to keep author order)
  brokenAxis: { from: 60000, to: 180000 }, // dual-scale break for outlier data (optional)
  caption: 'ONS, 2023',
  rows: [
    { label: '1st decile', value: 8700,   tone: 'rose'   },
    { label: '5th decile', value: 31800,  tone: 'amber'  },
    { label: '10th decile',value: 191500, tone: 'purple' }
  ]
}
```

**`brokenAxis`** draws a zig-zag break on the axis between `from` and `to`,
letting a large outlier (e.g. top-decile income) sit on its own scale without
compressing all lower bars into slivers. Use when the top value is > 3× the
median.

**Narrow (`@container` ≤ 520px):** bars switch to a card list with value
badge on each row.

---

## `kind: 'column'` — vertical column chart

Best for time series (GDP by year, unemployment over time) or small-n
comparisons you want to see as heights.

```js
{
  type: 'dataChart',
  kind: 'column',
  valueSuffix: '$tn',
  sort: 'desc',
  xLabel: 'GDP (2023, USD trillion)',
  caption: 'IMF World Economic Outlook 2023',
  rows: [
    { label: 'United States',  value: 25.5 },
    { label: 'China',          value: 17.7 },
    { label: 'Germany',        value: 4.5  },
    { label: 'Japan',          value: 4.2  },
    { label: 'United Kingdom', value: 3.1  }
  ]
}
```

**Narrow:** columns stack into a horizontal bar list (same card-list as `bar`).

---

## `kind: 'line'` — line chart

Best for time-series trends, especially when comparing two overlapping series
(e.g. CPI vs Bank Rate).

### Single series

```js
{
  type: 'dataChart',
  kind: 'line',
  yLabel: 'Unemployment (%)',
  valueSuffix: '%',
  smooth: true,    // cubic interpolation (optional, default false)
  markers: true,   // dot on each data point (optional, default false)
  caption: 'ONS Labour Force Survey',
  rows: [
    { label: '2019', value: 3.8 },
    { label: '2020', value: 4.6 },
    { label: '2021', value: 4.5 },
    { label: '2022', value: 3.7 },
    { label: '2023', value: 4.2 }
  ]
}
```

### Multi-series

Replace `rows` with `series`:

```js
{
  type: 'dataChart',
  kind: 'line',
  yLabel: 'Rate (%)',
  xLabel: 'Year',
  valueSuffix: '%',
  smooth: true,
  markers: true,
  caption: 'UK CPI vs Bank Rate, 2018–2023 (ONS / BoE)',
  series: [
    {
      name: 'CPI inflation',
      tone: 'rose',
      rows: [
        { label: '2018', value: 2.5 },
        { label: '2019', value: 1.8 },
        { label: '2020', value: 0.9 },
        { label: '2021', value: 2.6 },
        { label: '2022', value: 9.1 },
        { label: '2023', value: 6.8 }
      ]
    },
    {
      name: 'Bank Rate',
      tone: 'blue',
      rows: [
        { label: '2018', value: 0.75 },
        { label: '2019', value: 0.75 },
        { label: '2020', value: 0.1  },
        { label: '2021', value: 0.1  },
        { label: '2022', value: 3.5  },
        { label: '2023', value: 5.25 }
      ]
    }
  ]
}
```

All series must share the same labels (x-axis points).

**Narrow:** the chart shrinks gracefully to container width. `markers: true`
keeps dots visible at all sizes.

---

## `kind: 'pie'` — pie / donut chart

Best for part-of-whole breakdowns (spending shares, market shares, portfolio
allocation). Add `innerRadius` to make it a donut.

```js
{
  type: 'dataChart',
  kind: 'pie',
  caption: 'UK household spending breakdown, 2024 (ONS)',
  innerRadius: 0.55,   // 0 = full pie, 0.4–0.65 = donut (optional)
  showLegend: true,    // force legend (auto-shows for > 4 slices; optional)
  rows: [
    { label: 'Housing',      value: 27, tone: 'blue'   },
    { label: 'Food & drink', value: 18, tone: 'green'  },
    { label: 'Transport',    value: 14, tone: 'amber'  },
    { label: 'Recreation',   value: 12, tone: 'purple' },
    { label: 'Clothing',     value: 9,  tone: 'rose'   },
    { label: 'Other',        value: 20, tone: 'slate'  }
  ]
}
```

Values do **not** need to sum to 100; the renderer normalises them.

**Narrow:** pie/donut size is capped at the container width; legend always
renders below the chart.

---

## Shared fields

| Field | Kinds | Purpose |
|---|---|---|
| `caption` | all | Small grey caption below the chart |
| `valueSuffix` | all | String appended to value labels (e.g. `'%'`, `'$tn'`, `'£bn'`) |
| `sort` | bar, column | `'asc'` or `'desc'` — reorder rows by value; omit to keep author order |
| `xLabel` | column, line | Label under the x-axis |
| `yLabel` | bar, column, line | Label next to the y-axis |
| `brokenAxis` | bar | `{ from, to }` draws a zig-zag scale break |
| `smooth` | line | `true` = cubic Bezier interpolation |
| `markers` | line | `true` = dot on each data point |
| `innerRadius` | pie | `0`–`<1`; values 0.4–0.65 give a readable donut |
| `showLegend` | pie, line | Force the legend panel (auto for large series) |

---

## Responsive behaviour

All kinds use `@container gfx (max-width: 520px)` (not `@media`) for reflow,
following the same contract as all structural-graphics blocks:

| Kind | Wide | Narrow |
|---|---|---|
| `bar` | horizontal bars with left labels | card list: label + value badge |
| `column` | vertical columns with rotated or angled x labels | same card list |
| `line` | full SVG line chart with legend | compressed SVG; legend below |
| `pie` | pie / donut centred with legend to the right | legend below |

---

## Adding a new kind

1. Create `js/blocks/data-charts/<kind>.js` — IIFE that registers on
   `window.ECONOS_DATACHART['<kind>']`.
2. Create `css/blocks/data-charts/<kind>.css` if the kind needs its own
   layout rules beyond the shared `css/blocks/data-chart.css`.
3. Wire both files into all four shells + the renderer-lab pages (same
   pattern as the existing kinds).
4. Add to `PRECACHE_ASSETS` in `sw.js` and bump `CACHE_NAME`.
5. Add a Library fixture in `dev/renderer-lab.html` Section 20.
6. Add an Editor preset in `dev/renderer-lab-edit.html`.
7. Document the kind here.
