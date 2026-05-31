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

## Directive: migrate EVERYTHING (2026-05-31)

The owner wants every hand-rolled diagram migrated for consistency — nothing
stays as a bespoke SVG. Two destination systems:

- **Curve charts → `econDiagram`.** If no family fits, **add a chart family**
  (don't keep-as-legacy). Preserve all content and visuals.
- **Structural / flow / scene visuals → graphics blocks** (`window.ECONOS_GFX`).
  If no layout fits, **add a graphics layout**. Covers dashboards
  (`macroDashboardSvg`, `macroCockpit`), circular flows (`nationalIncomeFlow`),
  hub-and-spoke (`enterpriseCombinationSvg`), tile-grids (`landTypesSvg`),
  scorecards (`growthScorecard`), feedback loops (`investmentFeedbackLoop`).

Draggable explorers (`elasticity-explorer`, `pes-explorer`, `welfare-gf-explorer`)
convert to multi-view econDiagram — discrete views replace the continuous drag,
preserving the pedagogy. Only genuine **non-visual scaffolds** (`essay-scaffold`,
a text-input template) have nothing to migrate.

## Chart-family / graphics-layout gaps to BUILD

- **Keynesian (non-vertical) AS** chart family (or `adas` variant) — 3-segment
  AS for Classical-vs-Keynesian cards (e.g. aggregate-supply `lrasViewsInteractive`).
- **MEC / investment-demand** family (`mecDiagram`).
- **Price discrimination** family (`firstDegreePd` / `thirdDegreePd`).
- Graphics layouts as needed for the dashboards / scorecards / flows above.

## Tooling

- `npm run check:diagrams` (`scripts/check-econ-diagrams.mjs`) — validates every
  econDiagram block's curve/point refs against its family. Wired into
  `scripts/lint.sh` as the anti-invention gate.
