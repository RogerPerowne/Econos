# econos-visual-diagram skill

Covers the full lifecycle of diagrams and visual assets on Econos topic cards: picking the right rendering path, configuring generators, placing one-off static SVGs, and hand-authoring new charts when nothing else fits.

## Architecture overview for newcomers

### Card rendering — blocks-first dispatch

Every Learn It card passes through `renderCard` in `js/app.js`. If the card data object carries a non-empty `blocks` array, `window.renderBlocks(card)` is called first and the card body is composed from the block list. The surrounding chrome (step label, title, lede, progress, footer) is still owned by `renderCard`.

Cards that do not have a `blocks` array fall through to the legacy `ad-interactive` / template renderers (`renderCardAdInteractive`, and the specialised templates: `calculation`, `five-frames`, `explorer`, `essay-scaffold`, `transmission-chain`, `market-structures-comparison`). Both paths coexist permanently; new content should use `blocks`.

`window.ECONOS_BLOCKS` is the global block-type registry (populated by `js/render-blocks.js` and the files in `js/blocks/`). Each entry maps a `type` string to a renderer function that returns HTML. Unknown types silently render nothing in production, and warn in dev mode.

### The diagram library

Diagrams are a three-layer system:

1. **`window.EconSvg`** (`js/diagrams/econ-svg.js`) — stateless SVG primitive helpers: `svg()`, `axes()`, `curve()`, `line()`, `label()`, `callout()`, `equilibrium()`. All return SVG fragment strings. They handle the six-tone palette, ID namespacing, plot-area padding, and arrowhead markers.

2. **`window.ECONOS_DIAGRAMS`** (`js/diagrams/generators/*.js` + `js/diagrams/index.js`) — high-level parameterised diagram generators built on `EconSvg`. Each generator accepts a config object and returns a complete `<svg>` string. The 13 generators cover the standard A-level economics diagram canon: `adasDiagram`, `ppfDiagram`, `taxSubsidyDiagram`, `priceControlDiagram`, `multiplierDiagram`, `elasticityDiagram`, `costCurvesDiagram`, `marketStructureDiagram`, `labourMarketDiagram`, `phillipsCurve`, `jCurveDiagram`, `fortyFiveDiagram`, `growthDiagram`. The `ECONOS_DIAGRAMS.resolve(keyOrSpec)` helper handles both string keys and config objects, with a fallback to legacy `ECONOS_ICONS` keys.

3. **One-off static diagrams** (`js/diagrams/static/*.js`) — pre-built SVG files for charts that don't need parameterisation (e.g. `externalities.js`, `monopoly.js`, `phillips-lorenz.js`). Each file registers its SVG on both `window.ECONOS_DIAGRAMS` and `window.ECONOS_ICONS`, making them accessible to both the `'diagram'` block and legacy `visualKey` cards.

`js/icons.js` (`window.ECONOS_ICONS`) is now UI/hero/scene icons only. Economics diagram SVGs have been relocated to `js/diagrams/static/`.

### The `'diagram'` block

Cards using `blocks` render diagrams through the `'diagram'` block type (implemented in `js/blocks/diagram.js`). It accepts either a `spec` object pointing at a generator, or a `svgKey` string for a static/icon lookup:

```js
// Generator path
{ type: 'diagram', spec: { type: 'adasDiagram', mode: 'demand-pull' }, caption: '...' }

// Static/icon path
{ type: 'diagram', svgKey: 'fiscalDragChart', caption: '...' }
```

The block renders inside the `.hero-visual` frame — the same CSS used by `heroVisual` blocks.

### Dev tooling

Three dev-only files are loaded on every shell page:

- **`js/render-validate.js`** — validates the active topic against known block types, diagram types, tones, and content budgets. Enable with `?dev=1` or `localStorage.setItem('econosDev','1')`. Callable manually as `window.EconosDebug.validate()`.
- **`dev/renderer-lab.html`** — a standalone QA sandbox. Paste a raw card object into the text area and see it rendered in isolation, without loading a full topic. No build step needed; it loads production scripts from relative paths.
- **`js/screenshot-mode.js`** — adds body classes for automated captures: `?screenshot=1` strips all UI chrome for Playwright/GPT Image; `?preview=center-panel` isolates the centre panel for in-browser preview.

### Canonical docs

| Doc | What it covers |
|---|---|
| `docs/DIAGRAM_LIBRARY.md` | Full config reference: `EconSvg` primitives, all 13 generators, `'diagram'` block schema, load order, adding a new generator |
| `docs/ECON_DIAGRAM_RULES.md` | Canonical chart conventions: curve colours, shift styling, equilibrium markers, viewBox/safe-zone, tone palette, text escaping, `<defs>` scoping |
| `docs/RENDER_BLOCKS.md` | Block schema reference, card-level metadata fields (`density`, `layoutPreset`), full dev-tooling docs |
| `docs/MOCKUP_SCHEMA.md` | Agent-only card fields (`mockupMap`, `visualBrief`, `buildNotes`, etc.) |

## See also

- **`SKILL.md`** in this folder — the full working guide: generator-first decision tree, tone palette, viewBox conventions, named recipes, spec-first workflow, house rules, pitfalls catalogue.
- **`econos-card-template`** skill — card template catalogue, block field reference, storytelling patterns.
- **`run-econos`** skill — headless Playwright driver for screenshotting cards after any diagram edit.
