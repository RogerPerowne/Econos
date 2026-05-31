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
| consumer-and-producer-surplus | `taxDiagramInteractive` (card 3), `subsidyDiagramInteractive` (card 4) | supplyDemand | #807 |
| indirect-taxes-and-subsidies | `taxIncidenceInteractive` (card 2), `subsidyInteractive` (card 3) | supplyDemand | #809 |
| government-intervention-in-markets | `subsidyInteractive` (card 3), `priceCeilingDiagramInteractive` (card 4), `priceFloorDiagramInteractive` (card 5) | supplyDemand | #809 |

### Breadth pass (#810) — 14 cards across 10 files

causes-of-inflation (demand-pull, cost-push → adas), employment-and-unemployment
(cyclical → adas), net-trade (Marshall-Lerner → jcurve), macro-conflicts
(stagflation → phillips; inflation-surge → adas), supply (×2 → supplyDemand),
negative-externalities (→ externalities-neg), positive-externalities (→
externalities-pos), taxes-and-subsidies-as-policy-tools (→ supplyDemand +
externalities-neg), market-power-and-contestability (→ marketStructure),
government-intervention-subsidies (→ supplyDemand). All screenshot-verified;
validator green (34 blocks / 18 files).

### Remaining work — grouped by what it needs (from the 67 skips)

**A. econDiagram engine capabilities to build (highest leverage):**
- **Named on-curve movement points + A→B movement arrows** — depict "movement
  along" a single curve (demand contraction/extension, AD slope, SRAS A→B).
  Recurring across demand, supply, PED, PES, aggregate-demand, aggregate-supply.
- **Variable-elasticity curve variants** (steep / flat / vertical / horizontal D
  and S) — incidence-by-elasticity, PED/PES regime diagrams.
- **Ad-valorem (pivoting) tax curve** on supplyDemand.
- **Two-panel side-by-side comparison** (movement-vs-shift, Classical-vs-Keynesian).

**B. New econDiagram families — ✅ BUILT (#814):**
`keynesianAS` (Classical vs Keynesian reverse-L) · `mec` (investment-demand) ·
`priceDiscrimination` (1st & 3rd degree) · `lrac` (LRAC + MES + limit pricing) ·
`cobweb` / `cobwebDivergent` · `monopolyWelfare` (D=AR, MR, S=ΣMC, DWL) ·
`elasticityRegimes` (steep/flat/unit/perfectly-elastic/inelastic D & S + incidence).
All registered, smoke-tested, wired into shells + precache. Cards that needed
them migrate in the next pass.

**C. Structural / flow visuals → graphics blocks (separate workflow):**
- ~40 cards: tile-grids, hub-and-spoke, circular-flow, rippleCascade,
  mechanism-flow, dashboards/scorecards, comparison-rows, spectrum, compass/dial.
  Many map to EXISTING graphics blocks (grid+tiles, hubSpoke, spectrum,
  opposingFlows, mechanismChain, caseStudies, rippleCascade) — add layouts only
  where none fits.

**D. Data charts → dataChart system:**
- Per-decile bars (broken-axis), trade-cycle wave, actual-vs-potential trend,
  dual diverging time-series, account-component bars.

### Capability gaps surfaced (detail)

- **Ad-valorem (pivoting) tax supply curve** in `supplyDemand` — a wedge that
  widens with price (vs the parallel `S_taxed`). Blocks: indirect-taxes card 1
  (`taxTypesInteractive`), government-intervention card 2 (diagram array).
- **Variable demand elasticity / two-panel** — steep-vs-flat D to show incidence
  following the less elastic side. Blocks: indirect-taxes card 4
  (`elasticityIncidenceInteractive`).
- **`policySpectrumDiagram` → `spectrum`/`policyToolkit` graphics block** (those
  blocks already exist). Blocks: government-intervention cards 1, 9.
- **Draggable welfare** (`welfare-gf-explorer`, government-intervention card 10)
  → convert to a multi-view `supplyDemand` welfare sequence.

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
