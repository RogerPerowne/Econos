# Structural graphics

A unified system of **named layout blocks** — mind maps, hub-and-spoke, cycles,
matrices, quadrants, pyramids, funnels, venn, tables, … — that all delegate to a
single shared engine and are **mobile-responsive by construction**.

Nine layouts ship: `hubSpoke`, `matrix`, `quadrant`, `pyramid`, `funnel`, `cycle`, `venn`, `richTable`, `flowChart`.
This doc is the architecture decision and the recipe for adding more.

---

## The architecture decision

### 1. Responsive by construction via CSS container queries

Every structural-graphics block's root element is `.gfx-root`, which sets:

```css
container-type: inline-size;
container-name: gfx;
```

All reflow rules are keyed on the graphic's **own width**:

```css
@container gfx (max-width: 520px) { … }   /* NOT @media (max-width: …) */
```

This is the load-bearing decision. A viewport `@media` query asks "how wide is
the *screen*?" — wrong, because the same graphic can sit full-bleed on one card
and inside a narrow two-column slot on another. A `@container` query asks "how
wide is *this graphic's box*?" — so a hub-and-spoke dropped into a 320 px column
on a 1440 px desktop reflows to its stacked layout correctly, with zero
knowledge of the screen. **Correct by construction, not by hand-tuned
breakpoints per placement.**

This *replaces* the old per-block ad-hoc viewport breakpoints (the
`@media (max-width: 640px)` / `720px` rules scattered through `structure.css`
etc.). New graphics never use a viewport `@media`; they use `@container gfx`.

### 2. One shared breakpoint constant

There is a single breakpoint: **520px**, documented as the token
`--econ-gfx-bp` in `css/econ-tokens.css`.

> **Why the literal `520px` is repeated.** CSS cannot interpolate a custom
> property into a media-/container-*condition* — `@container gfx (max-width:
> var(--econ-gfx-bp))` is invalid. So the token is the documented source of
> truth (and the value the JS/docs reference), while the literal `520px` is
> repeated in every `@container` query. **If you change the breakpoint, change
> the token AND every `520px` in `css/blocks/graphics*.css`.**

### 3. Token-driven

All spacing/sizing/colour come from the design tokens: `--econ-gap`,
`--econ-pad`, `--econ-body-size`, and the six tones' `-50` / `-100` / `-700`
scales via the existing `.econ-tone--*` classes (background = tone-50,
border = tone-100, label = tone-700, body = navy). The breakpoint constant is
the only hard pixel value of consequence.

### 4. Named blocks delegate to a shared engine

Authors pick a layout **by name** with a tight schema and never hand-position
anything. The block renderer emits semantic structure; the engine
(`window.ECONOS_GFX`) builds the reusable primitive markup; the CSS does all
positioning and reflow.

---

## The pieces

| File | Role |
|---|---|
| `css/blocks/graphics.css` | Shared engine stylesheet: `.gfx-root` container context, primitive classes (`.gfx-node` + shape modifiers, `.gfx-badge`, `.gfx-panel`, `.gfx-title`/`.gfx-caption`, `.gfx-connector`/`.gfx-arrow`), and `@container`-driven reflow utilities (`.gfx-flow-row`, `.gfx-grid`, `.gfx-stack`). |
| `js/blocks/graphics/engine.js` | `window.ECONOS_GFX` — pure string-returning helpers every layout uses. |
| `js/blocks/graphics/<name>.js` | One file per named layout; registers `B.<name>` on `window.ECONOS_BLOCKS`. |
| `css/blocks/graphics/<name>.css` | Layout-specific styles + the `@container gfx` reflow for that layout. |
| `js/blocks/_schema.js` | Schema entry per layout (`group: 'graphics'`). |

Load order (deferred scripts in every shell): `render-blocks.js` →
`engine.js` → each layout file. The engine MUST load before the layouts.

### The engine API — `window.ECONOS_GFX`

All helpers are **pure functions returning HTML strings**; all author text is
escaped via `ECONOS_BLOCK_UTILS.escapeHtml`.

| Helper | Signature | Returns |
|---|---|---|
| `node` | `node({ label, body?, tone?, shape?, icon?, solid? })` | A `.gfx-node`. `shape` ∈ `rect`/`pill`/`circle`/`diamond`/`hex`. `solid` = navy hero variant. `body` may carry trusted inline HTML. |
| `badge` | `badge({ n?, icon?, tone?, solid? })` | A numbered/iconed `.gfx-badge` disc. |
| `arrow` | `arrow(dir?)` | A CSS chevron (`→`, or `↓` if `dir==='down'`) that the CSS rotates at the breakpoint inside `.gfx-flow-row`. |
| `connectorSvg` | `connectorSvg(lines, { w?, h? })` | An absolutely-positioned SVG overlay drawing straight `lines` (`[{x1,y1,x2,y2}]`) in a `w×h` viewBox with `preserveAspectRatio="none"`. |
| `radialCoords` | `radialCoords(n, r, cx?, cy?)` | `[{ x, y, angle }]` — `n` evenly-spaced points on radius `r` around `(cx,cy)`, starting at 12 o'clock, clockwise. For hub/cycle positioning. |
| `toneClass` | `toneClass(tone, fallback?)` | `'econ-tone--<tone>'` (validated, falls back to `slate`). |
| `escape` | `escape(value)` | Re-export of `ECONOS_BLOCK_UTILS.escapeHtml`. |

---

## The three reference layouts

### `hubSpoke`

Central node + N spokes radiating around it. Subsumes (and is richer than) the
legacy `satelliteDiagram` — spokes carry detail body text and optional
centre→spoke connectors can be drawn.

```js
{
  type: 'hubSpoke',
  connectors: true,                                   // optional centre→spoke lines
  centre: { label: 'Aggregate Demand', value: 'C+I+G+(X−M)', tone: 'slate' },
  spokes: [
    { label: 'Consumption', detail: '~60% of AD.', tone: 'green', icon: 'C' },
    { label: 'Investment',  detail: 'Rate-sensitive.', tone: 'blue' },
    // …
  ]
}
```

- **Desktop:** spokes flex around a centred navy hero node; connectors (if on)
  drawn behind via the SVG overlay.
- **Narrow (`@container` ≤ 520px):** vertical stack, centre on top, spokes
  full-width one per row; connectors hidden (they don't map onto a list).

### `matrix`

M×N grid with row + column headers — the generic comparison/decision table.

```js
{
  type: 'matrix',
  colHeaders: ['Inflation', 'Unemployment', 'Growth'],
  rows: [
    { header: 'Tight monetary', cells: [
      { body: 'Falls.', tone: 'green' },
      { body: 'Rises short-run.', tone: 'rose' },
      { body: 'Slows.', tone: 'amber' }
    ]},
    // …
  ]
}
```

- **Desktop:** a CSS grid — blank corner, column headers across the top, each
  row labelled down the side.
- **Narrow:** each row reflows to a **labelled card** with its cells stacked
  under per-cell column captions (NOT a horizontal scroll). The cells already
  carry their column-header text as a caption that is hidden on desktop and
  revealed at the breakpoint, so the stacked view stays self-describing.

### `quadrant`

2×2 grid with axis labels (SWOT, BCG matrix, …). Exactly four quadrants in
order **TL, TR, BL, BR**.

```js
{
  type: 'quadrant',
  xAxis: { left: 'Internal', right: 'External' },
  yAxis: { top: 'Helpful', bottom: 'Harmful' },
  quadrants: [
    { label: 'Strengths',     tone: 'green', items: ['Strong brand', 'Low unit costs'] },
    { label: 'Opportunities', tone: 'blue',  items: ['New markets'] },
    { label: 'Weaknesses',    tone: 'amber', items: ['High debt'] },
    { label: 'Threats',       tone: 'rose',  items: ['New entrants'] }
  ]
}
```

- **Desktop:** 2×2 grid of toned panels with axis labels centred on each edge.
- **Narrow:** the four quadrants stack into one column; edge axis labels are
  dropped and replaced by an inline "left ↔ right / top ↕ bottom" legend.

### `pyramid`

Triangular tier hierarchy — Maslow's needs, Bloom's taxonomy, any N-level
ranked structure. Tiers listed apex-first (index 0 = top); the apex tier is
the narrowest row, the base tier is widest.

```js
{
  type: 'pyramid',
  tiers: [
    { label: 'Self-Actualisation', body: 'Reaching full potential',          tone: 'purple' },
    { label: 'Esteem',             body: 'Status, recognition, achievement', tone: 'blue'   },
    { label: 'Love & Belonging',   body: 'Family, friendship, community',    tone: 'green'  },
    { label: 'Safety',             body: 'Security, employment, health',     tone: 'amber'  },
    { label: 'Physiological',      body: 'Food, water, shelter, warmth',     tone: 'rose'   }
  ]
}
```

- **Desktop:** tapering rows, each centred, with `label` + optional `body`.
- **Narrow (`@container` ≤ 520px):** equal-width stacked rows; the visual
  weight comes from background-tone rather than width.

### `funnel`

Narrowing conversion funnel — pipeline stages, recruitment, consumer journey,
policy adoption. Each stage is narrower than the previous.

```js
{
  type: 'funnel',
  stages: [
    { label: 'Awareness',  body: 'Discovers product',  value: '10,000', tone: 'blue'   },
    { label: 'Engagement', body: 'Reads a card',        value: '3,500',  tone: 'green'  },
    { label: 'Sign-up',    body: 'Creates account',    value: '900',    tone: 'amber'  },
    { label: 'Conversion', body: 'Paid plan',           value: '120',    tone: 'purple' }
  ]
}
```

- **Desktop:** trapezoid stages with count badge (`value`) on the right.
- **Narrow:** equal-width stacked cards with percentage-of-top calculation.

### `cycle`

Circular flow of repeating phases — business cycle, circular economy,
policy feedback loop. Nodes arranged around a ring with connecting arrows.

```js
{
  type: 'cycle',
  direction: 'cw',             // 'cw' (default) or 'ccw'
  nodes: [
    { label: 'Boom',      detail: 'Output above trend', tone: 'green'  },
    { label: 'Slowdown',  detail: 'Growth decelerates', tone: 'amber'  },
    { label: 'Recession', detail: 'Negative GDP growth', tone: 'rose'   },
    { label: 'Recovery',  detail: 'Output rises',        tone: 'blue'   }
  ]
}
```

- **Desktop:** nodes on a circle; arrows trace the clockwise (or counter-
  clockwise) direction around the ring.
- **Narrow:** nodes stack vertically with directional arrows between them.

### `venn`

2- or 3-set Venn diagram for concepts with overlap. Each intersection region
gets a label.

```js
{
  type: 'venn',
  sets: [
    { label: 'Microeconomics', tone: 'blue'  },
    { label: 'Macroeconomics', tone: 'green' },
    { label: 'International',  tone: 'amber' }
  ],
  intersections: [
    { label: 'Market failure + policy',  of: [0, 1]    },
    { label: 'Trade & competitiveness',  of: [1, 2]    },
    { label: 'Tariffs & externalities',  of: [0, 2]    },
    { label: 'Political economy',         of: [0, 1, 2] }
  ]
}
```

- `of` is an array of zero-based set indices. `[0,1]` labels the A∩B region;
  `[0,1,2]` labels the triple overlap.
- **Desktop:** circles positioned with CSS; intersection labels float in the
  overlap zones.
- **Narrow:** list fallback with set labels + intersection badges.

### `richTable`

Comparison table where individual cells carry tone, icon and body text —
richer than `decisionMatrix` (which has plain text cells). Columns come from
`colHeaders`; the first entry names the row-header column.

```js
{
  type: 'richTable',
  colHeaders: ['Criterion', 'ChatGPT Plus', 'Econos', 'Seneca'],
  rows: [
    {
      header: 'Exam board',
      cells: [
        { body: 'None', tone: 'rose' },
        { body: 'Edexcel A, B · AQA · OCR', tone: 'green', icon: 'check' },
        { body: 'Edexcel A only', tone: 'amber' }
      ]
    }
  ]
}
```

- cells:`icon` accepts `'check'` (renders a tick mark).
- **Narrow:** each row reflows to a labelled card with cells stacked.

### `flowChart`

General-purpose flowchart / process diagram. Author specifies nodes and
directed links by id; the layout engine positions them.

```js
{
  type: 'flowChart',
  topology: 'linear',          // 'linear' (default) or 'branching'
  nodes: [
    { id: 'a', label: 'BoE raises Bank Rate',   tone: 'blue',   shape: 'rect' },
    { id: 'b', label: 'Commercial rates rise',  tone: 'amber',  shape: 'rect' },
    { id: 'c', label: 'Borrowing costs ↑',      tone: 'rose',   shape: 'rect' },
    { id: 'd', label: 'Consumer spending ↓',    tone: 'purple', shape: 'rect' },
    { id: 'e', label: 'Aggregate Demand falls', tone: 'slate',  shape: 'rect' }
  ],
  links: [
    { from: 'a', to: 'b' },
    { from: 'b', to: 'c' },
    { from: 'c', to: 'd' },
    { from: 'd', to: 'e' }
  ]
}
```

- `shape` ∈ `'rect'` | `'diamond'` | `'pill'`. Diamonds conventionally mark
  decision nodes.
- `topology: 'linear'` — single chain of nodes; rendered horizontally on
  desktop, vertically on narrow.
- `topology: 'branching'` — arbitrary DAG; rendered as an indented tree on
  both widths (no SVG graph layout).
- **Narrow:** always a vertical stack; arrows become downward chevrons.

---

## Adding a new layout

1. **Sketch the schema** (4–6 lines). If you can't, it's doing too much.
2. **`js/blocks/_schema.js`** — add an entry with `group: 'graphics'`.
3. **`js/blocks/graphics/<name>.js`** — IIFE that grabs
   `ECONOS_BLOCK_UTILS`, `ECONOS_GFX`, `ECONOS_BLOCKS`, registers `B.<name>`,
   delegates element markup to `ECONOS_GFX`, escapes all author text, and wraps
   output in `<div class="gfx-root …">`.
4. **`css/blocks/graphics/<name>.css`** — layout + reflow. Scope everything
   under `.econ-blocks`. Use tokens. Reflow with `@container gfx (max-width:
   520px)` — never a viewport `@media`.
5. **Wire** the new JS + CSS into `learn-it.html`, `link-it.html`,
   `land-it.html`, `dev/renderer-lab.html`, `dev/renderer-lab-edit.html`
   (engine.js before the layout files). Add both files to `PRECACHE_ASSETS`
   in `sw.js` and **bump `CACHE_NAME`**.
6. **Library + Editor** — add a fixture in the renderer-lab "Structural
   graphics" section and a preset in `renderer-lab-edit.html`.
7. **Document** the layout here with its schema + reflow behaviour.
