# Chart-migration tracker

Tracks the Goal-1 sweep: migrating hand-rolled econ charts (`svgKey` /
`diagramKey` / `interactiveDiagram` in `js/icons.js` + `js/diagrams/static/`)
to the declarative **`econDiagram`** engine. See the `econos-econ-diagram`
skill and `docs/DIAGRAM_LIBRARY.md` for the engine reference.

## Two classes of target

1. **Static-chart swaps** — a chart sitting in a `blocks` array as
   `{ type: 'diagram', svgKey }`. Pure swap to `{ type: 'econDiagram', … }`;
   no surrounding scaffolding to rewrite. Bundle several per PR.
2. **Interactive diagrams** — `template: 'ad-interactive'` +
   `interactiveDiagram: { svgKey, layers, views }`. One econDiagram block with
   one view per legacy view; the legacy `head`/`body`/`analysis` map to the
   view's `head`/`body`/`analysis` (the engine renders all three). The
   surrounding `causes`/`tip`/`examEdge` become `grid`/`calloutStrip`/`examEdge`
   blocks. Higher-stakes — **one interactive per PR**, BEFORE/AFTER on every view.

## Migrated ✅

| Topic | Chart(s) | Family | PR |
|---|---|---|---|
| consumer-and-producer-surplus | `cpsDiagram` (card 1) | supplyDemand | #805 |
| price-determination | `equilibriumBasic`, `welfareSurplusDiagram` | supplyDemand | #806 |
| equilibrium-national-income | `eniAdAsCore` | adas | #806 |
| national-income-and-the-multiplier | `multiplierAdAs` | adas | #806 |
| consumer-and-producer-surplus | `taxDiagramInteractive` (card 3), `subsidyDiagramInteractive` (card 4) | supplyDemand | (this PR) |

## Engine capabilities added for the sweep

- Area fills accept a `label` (centroid-placed) — CS/PS/DWL legible from the figure. (#805)
- `supplyDemand` tax/subsidy welfare apparatus: `S_taxed`/`S_sub` curves +
  `PcTaxLine`/`PpTaxLine`/`PcSubLine`/`PpSubLine` price lines → tax-revenue /
  subsidy-cost rectangles and DWL triangles are expressible. (this PR)
- An explicitly-empty curve `display: ''` suppresses the label (quiet reference lines). (this PR)
- Views support `head` + `body` + `analysis` (the legacy three-part panel shape). (this PR)

## Interactive — keep as legacy (do NOT force into econDiagram)

These use draggable handles, animation, or text-input scaffolds the declarative
engine does not model. Migrate the AROUND-the-diagram blocks if cheap, but keep
the widget on its legacy template.

| Card / template | Reason |
|---|---|
| `transmission-chain` | animated horizontal mechanism flow |
| `elasticity-explorer`, `yed-xed-explorer`, `pes-explorer` | draggable curve widgets |
| `welfare-gf-explorer` | interactive welfare-loss with drag handles |
| `regulatory-capture-explorer` | bespoke animation |
| `essay-scaffold` | text-input essay template (not a diagram) |
| `market-structures-comparison` | multi-panel side-by-side interactive |

## Chart-family gaps blocking faithful migration

- **Keynesian (non-vertical) AS** — `adas` has only a vertical LRAS anchor, so
  Classical-vs-Keynesian cards (e.g. aggregate-supply `lrasViewsInteractive`)
  can't migrate yet. Needs a 3-segment AS shape.
- **MEC / investment-demand** (`mecDiagram`), **price discrimination**
  (`firstDegreePd` / `thirdDegreePd`) — no matching family.

## Not econDiagram targets (flow / structure / scene graphics)

Hub-and-spoke, dashboards (`macroDashboardSvg`, `macroCockpit`), circular flows
(`nationalIncomeFlow`), tile-grids (`landTypesSvg`), scorecards, feedback loops —
these belong to the structural-graphics blocks or stay as hero SVGs. Leave them.
