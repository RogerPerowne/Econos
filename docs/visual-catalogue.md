# Econos Visual Catalogue

A lookup of **every reusable visual** in the codebase, grouped by what it
*looks like*, so that when a mock-up arrives we can match it to an existing
high-impact visual and adjust — instead of rebuilding from scratch.

> **Living doc.** When you add a new chart spec or `icons.js` visual, add a
> one-liner here under the right archetype. When matching a mock-up, **read
> this first**, then grep only to confirm the exact key.

## How to use this

1. Look at the mock-up and name the **archetype** (hub-and-spoke? cost-curve
   diagram? spectrum bar? scorecard grid? flow chain?).
2. Jump to that archetype below and pick the closest existing component.
3. Reuse the binding (`I.<key>` in a card's `visualKey`/`interactiveDiagram.svgKey`,
   or `window.ECONOS_PPF.render(window.ECONOS_<NAME>_SPEC)`), then adjust copy
   / geometry. Most mock-ups are a *selection* problem, not a build problem.

Two delivery mechanisms:
- **Engine chart specs** — `js/charts/specs/<name>.js` → `window.ECONOS_<NAME>_SPEC`,
  bound in `icons.js` as `<key>: window.ECONOS_PPF.render(...)`. Geometry is
  guaranteed by the engine (see CLAUDE.md "Charts & diagrams"). Use for any
  economic *curve* diagram.
- **Hand-rolled `icons.js` visuals** — a `<key>: \`<svg…>\`` (or `<div>…`)
  template literal. Use for hubs, flows, scorecards, decompose diagrams,
  dashboards — anything that isn't an axes-and-curves chart.

---

## Part A — Engine chart specs (curve diagrams)

80 specs. Flags: **[i]** stepped/interactive layers · **[CK]** Classical↔Keynesian
perspective toggle · **[mp]** multi-panel small-multiples.

### PPF (production possibility frontiers)
`ppf-card1…6`, `ppf-big-picture`, `ppf-classify`, `ppf-opp-cost`,
`ppf-shifts-trio` [mp], `ppf-today-tomorrow` [mp]. Bowed-out frontier,
opportunity-cost triangles, inward/outward shifts, capital-vs-consumer choice.

### Supply, demand & equilibrium
`equilibrium-basic` [i], `models-supply-demand`, `ceteris-paribus-demand`,
`demand-card1/2/4/7` [i], `supply-card1/2/4/7` [i], `shifts-interactive` [i],
`sim-shifts-interactive` [i], `disequilibrium-interactive` [i],
`price-rationing-scarcity`, `cps-diagram`, `cps-build-interactive`.

### Elasticity
`elastic-vs-inelastic-demand` [mp], `elastic-vs-inelastic-supply` [mp],
`ped-linear-regions` [i], `elasticity-incidence-interactive` [i][mp].

### Welfare, efficiency & externalities
`welfare-surplus`, `welfare-loss-diagram` [mp], `allocative-efficiency`,
`neg-externality-interactive`, `pos-externality-interactive`,
`private-vs-social` [mp], `market-failure-overview`, `mec-diagram`,
`welfare-govt-failure-interactive` [i].

### Tax, subsidy & price controls
`tax-diagram-interactive`, `subsidy-diagram-interactive`,
`tax-incidence-interactive` [i], `tax-types-interactive` [i],
`subsidy-interactive` [i], `price-ceiling-diagram`, `price-floor-diagram`.

### AD/AS & macro
- **AD:** `ad-slope`, `ad-slope-interactive` [i], `ad-movement-shift` [mp],
  `ad-movement-shift-interactive` [i], `ad-shift-interactive` [i],
  `ad-shift-classical-keynesian` [i][CK], `ad-shift-left-classical-keynesian` [i][CK],
  `ad-demand-pull-interactive` [i][CK], `ad-cost-push-interactive` [i].
- **AS:** `as-intro-classical-keynesian` [i][CK], `as-sr-to-lr` [i] (self-correction),
  `sras-big-picture` [i], `sras-curve-static` [i], `sras-zones` [i],
  `sras-shift-directions` [i], `sras-shift-interactive` [i],
  `sras-shift-left-classical-keynesian` [i][CK], `sras-right-shift-interactive` [i],
  `sras-lras-intro` [i], `lras-views-interactive` [CK],
  `lras-vertical-interactive` [i][CK], `lras-shift-diagram` [i],
  `lras-shift-right-classical-keynesian` [i][CK], `lras-demand-vs-capacity` [mp],
  `supply-side-sr-lr` [i][CK].
- **Other macro:** `stagflation-phillips` [i], `inflation-2022-ad-as` [i],
  `crowding-out` [i], `consumption-function`, `actual-vs-potential-growth` [i],
  `uk-productivity-puzzle`, `j-curve-interactive` [i].

> **Note for Theme 3:** the firm/cost/market-structure *curve* diagrams
> (cost stacks, LRAC, shutdown, monopoly, monopsony, price discrimination)
> are **hand-rolled in `icons.js`**, not engine specs — see Part B §7.

---

## Part B — Non-standard visuals (`icons.js`)

Organised by archetype. Each entry: `key` — what it shows.

### 1. Hub-and-spoke / radial hubs
*Use when:* a central concept with 4–6 driver/factor cards arranged around it
(the "circular diagram" look).
- `bopDriverHub` — central balance + 6 driver tiles, dashed spokes (current account).
- `demandDeterminantsHub` — HTML grid hub, central node + determinant cards.
- `supplyDeterminantsHub` — supply-side determinant hub.
- `pedDriversHub` — drivers of PED around a hub.
- `xedRelationshipHub` — substitutes/complements around XED.
- `rationalAgentHub` — rational-agent assumptions hub.
- `firmFourLensesHub` — 4-tile lens hub (Size/Type/Objectives/Control) around "The firm" (3.1.1 C1).
- `firmSizeMeasuresHub` — 5 numbered measure tiles around "Firm size" (3.1.1 C2).
- `firmStaySmallHub` — 6-reason hub around "A small firm may stay small" (3.1.1 C3).
- `businessGrowthMapHub` — 4-route hub (Organic / Vertical / Horizontal / Conglomerate) around "Business growth" (3.1.2 C1).
- `conglomerateRiskHub` — 4-industry hub (Food / Travel / Media / Technology) around "One firm spreading risk" (3.1.2 C5).
- `demergerReasonsHub` — 6 numbered motivation tiles (sharper focus / unlock value / remove non-core / reduce diseconomies / separate risk / clearer incentives) around "Demerger" (3.1.3 C2).
- `businessObjectivesMap` — Survival on top + 4-tile grid (Sales / Profit / Growth / Social aims) with "Business objectives" core (3.1.4 C1).
- `costsHub` — 4 cost-type tiles (FC green · VC amber · AC purple · MC rose) around "Total cost · TC = FC + VC" (3.3.2 C1).
- `internalEconomiesHub` — 5 internal economies (Technical / Managerial / Purchasing / Financial / Marketing) around "Lower average cost" (3.3.3 C2).
- `diseconomiesHub` — 5 diseconomies (Coordination / Communication / Motivation / Bureaucracy / Weak control) around "A growing organisation" (3.3.3 C3).
- `efficiencyFlywheel` — 3 efficiency types (Productive / Allocative / Dynamic) around central "Efficiency" gauge with a dashed flywheel rotation ring + tiny arrows (3.4.1 C1).
- `pcMarketHub` — 5 PC assumptions (Many buyers and sellers / Homogeneous product / Perfect information / Free entry and exit / Price takers) around "The market" (3.4.2 C1).

### 2. Spectrums / gradient bars
*Use when:* items sit on a continuum (regimes, strengths, time horizons).
- `contestabilitySpectrum`, `policySpectrumDiagram`, `incomeSpectrumChart`,
  `xedStrengthSpectrum`, `yedClassifySpectrum`, `pedClassifySpectrum`,
  `pesDriversSpectrum`, `pesIndustrySpectrum`, `pesTimeHorizons`, `yedIncomeLadder`.

### 3. Flow chains / process diagrams
*Use when:* a sequence of stages connected by arrows (transmission mechanism).
- `priceMechanismFlow`, `derivedDemandFlow`, `autoStabilisersFlow`,
  `govMultiplierChain`, `crowdingOutLoanableFunds`, `investmentFeedbackLoop`,
  `multiplierRipple`, `nationalIncomeFlow`, `nationalIncomeOpenEconomy`,
  `bopConsequencesFlow`, `threeRoutesDiagram`, `priceMechanismFlow`,
  `stagflation5Step`, `stagflationTimeline`, `tradeWaveCycle`.

### 4. Funnels / equations / identities
*Use when:* components sum into a total, or a layered identity.
- `bopThreeAccounts` — three account boxes funnelling into the CA pill.
- `bopCurrentAccountEquation`, `bopMatchingIdentity` — additive identities.
- `profitEquationHero` — profit = TR − TC hero.
- `revenueThreeMetrics` — 3-tile decompose of TR / AR / MR with formulas inset (3.3.1 C1).
- `profitCoreEquation` — interactive 3-bar reveal of Profit = TR − TC (£120k − £95k = £25k) (3.3.4 C1).

### 5. Scorecards / dashboards / cockpits
*Use when:* a grid of rated metrics, verdict cards, or a gauge dashboard.
- `growthScorecard`, `economicSystemsScorecard`, `goodMoneyScorecard`,
  `growthSustainability3View`, `macroCockpit`, `macroHeadlineCards`,
  `macroDashboardSvg`, `bopSustainabilityDashboard` (uses dials),
  `macroConstraintCompass`, `macroPhillipsWorkstation`, `macroConstraintWeb`,
  `conflictLensMap`, `bopGoodVsWarning`, `bopHowToWriteIt`.

### 6. Twin / side-by-side comparisons
*Use when:* two panels contrasted (before/after, A vs B, two schools).
- `demandShocksTwin`, `supplyShocksTwin`, `eniOutputGapsTwin`,
  `yedXedTwoLenses`, `firmLevelPcVsMonopoly`, `twoSystemsDiagram`,
  `adAsTwoOutcomes`, `pesBigPictureCompare`, `specialisationGainsCompare`,
  `marginalUtilityCompare`, `economicMixedWhoDoesWhat`, `eniTwinJW45`.
- `whereProfitComesFrom` — Revenue side (green) vs Cost side (orange) twin with central "Revenue − cost = profit" calculator pill (3.3.4 C2).
- `pcPerfectlyElasticDemand` — industry market (D + S) vs individual firm (horizontal AR=MR=D) twin, joined by a dashed connector showing the market price is fed across to the firm (3.4.2 C2).
- `dynamicEfficiencyDiagram` — twin "before / after innovation" panels showing AC₁ (solid) vs AC₂ (lower, with AC₁ dashed for reference) (3.4.1 C4).
- `externalEconomies` — 4 external economies (left) vs 4 external diseconomies (right) flanking a central "Industry cluster" (3.3.3 C5).
- `firmOwnershipObjectives` — Ownership pair (private vs public) above Objectives pair (for-profit vs not-for-profit) with examples strip (3.1.4 C5).

### 7. Firm / cost / market-structure diagrams (THEME 3 CORE)
*Use when:* a micro firm diagram with cost/revenue curves, profit areas,
equilibria. These are the workhorses for Themes 3.3–3.4.
- **Cost-function-driven generator (preferred for new firm diagrams):**
  `window.ECONOS_FIRM.costCurves({ fc, vc:[b1,b2,b3], qMax, yMax, … })`
  (`js/charts/firm-model.js`) returns a pure-data `ECONOS_PPF` spec that
  **derives** MC/AVC/AC/AFC from one cubic cost function, so the MC "Nike
  tick" provably cuts AVC and AC at their minima (crossings solved by the
  engine via `point.intersection`). Reference render: `marcosCostCurves`
  (`js/charts/specs/marcos-cost-curves.js`, Marco's FC=200 calibration).
  Use this instead of hand-plotting cost-curve points.
  `window.ECONOS_FIRM.costRevenue({ …, demand })` adds the revenue side:
  AR/MR (`demand:{type:'linear',a,b}` → MR at twice the slope, or
  `{type:'horizontal',price}` for a price-taker), **solves MC=MR**, reads the
  price up to AR and shades the supernormal-profit/loss rectangle. Reference
  renders: `marcosProfitMax` (monopolistic competition, `marcos-profit-max.js`)
  and `marcosProfitMaxPC` (perfect competition, `marcos-profit-max-pc.js`).
  `costCurves` also accepts a `layers` array (parallel to `curves`) to drive a
  stepped interactiveDiagram reveal — reference render `averageCostFamilyChart`
  (`average-cost-family.js`, Costs card 3: AFC/AVC/AC, layers acf-1/2/3, same
  FC=£40 cubic as the total-cost chart).
  `window.ECONOS_FIRM.totalCost({ fc, vc, … })` builds the TFC/TVC/TC
  total-cost diagram (TVC the S-cubic from the origin, TC the same shifted up
  by TFC, gap arrow), layered tfc-1/2/3 for a 3-step reveal — reference render
  `fixedVariableTotalChart` (`total-cost.js`, Costs card 2; FC=£40 calibration).
  Migration of the remaining legacy hand-rolled curves below onto the generator
  is in progress.
- **Costs (legacy hand-rolled SVG):** `shortRunCostStack` (TC/TFC/TVC), `lracEnvelope` (SRAC→LRAC),
  `mcLrTangency`, `fixedVariableTotalChart` (3.3.2 C2 — interactive TFC/TVC/TC reveal, Marco's Pizzeria), `averageCostFamilyChart` (3.3.2 C3 — interactive AFC/AVC/AC reveal), `marginalCostChart` (3.3.2 C4 — interactive table → MC curve with AC/AVC reference), `fullCostDiagram` (3.3.2 C5 — static AFC/AVC/AC/MC composite), `costDataBakery` (3.3.2 C6 — read-a-table procedure + bakery worked example), `costsChainFlow` (3.3.2 C7 — six-tile horizontal flow chain: Fixed cost → Variable cost → Total cost → Average cost → Marginal cost → Decisions; reuse for any 6-step horizontal cost/concept chain).
- **Economies of scale:** `lracBigPicture` (3.3.3 C1 — annotated U-shaped LRAC with three regions), `mesChart` (3.3.3 C4 — LRAC with MES region + small/medium/large industry mini-curves).
- **Revenue:** `totalRevenueInteractive` (3.3.1 C2 — formula panel + worked table + bar chart, 3-view reveal), `averageRevenueInteractive` (3.3.1 C3 — linear demand with A/B point reveal), `marginalRevenueInteractive` (3.3.1 C4 — MR table + AR/MR curves, 2-view reveal), `revenueElasticityTriptych` (3.3.1 C5 — 3-panel elastic/unit/inelastic regime grid).
- **Profit / shutdown:** `profitsShutdownDiagram`, `revMaxDiagram`,
  `monopolySupernormalProfit`, `monopolyDwl`,
  `breakEvenChart` (3.3.4 C3 — interactive TC/TR/break-even reveal with shaded loss + profit regions),
  `profitMeasures` (3.3.4 C4 — interactive profit-per-unit stacked bar + 20% margin donut chart, Product A vs B compare strip),
  `pcShortRunProfit` (3.4.2 C3 — PC firm SR with shaded abnormal-profit rectangle),
  `pcLossDiagram` (3.4.2 C4 — PC firm with AVC + shaded loss rectangle and keep-producing annotation),
  `pcLongRunDiagram` (3.4.2 C5 — PC firm at LR equilibrium with P=AC at min AC, normal profit only),
  `pcEfficiencyDiagram` (3.4.2 C6 — same chart with both allocative + productive efficiency callouts).
- **Efficiency:** `productiveEfficiencyDiagram` (3.4.1 C2 — AC U-curve with MC crossing at min, MC = AC condition), `toeAllocativeDiagram` (3.4.1 C3 — D + MC crossing at P=MC, allocative efficiency point).
- **Market structures:** `naturalMonopolyDiagram`, `kinkedDemandInteractive`,
  `mesBarrierDiagram`, `limitPricingDiagram`, `networkEffectDiagram`,
  `marketLevelWelfare`, `contestabilityFrames`, `contestabilityDiagram`.
- **Price discrimination:** `firstDegreePd`, `thirdDegreePd`.
- **Cartel / collusion:** `cartelJointProfitDiagram`, `cartelPrisonersDilemma`.
- **Labour:** `labourMarketEquilibrium`, `monopsonyDiagram`,
  `backwardBendingLSC`, `nmwDiagram`.
- **Growth / firms:** `businessGrowthDiagram` (integration types),
  `revMaxDiagram`, `firmGrowthFlywheel` (circular 5-node growth cycle with
  internal/external growth feeds — 3.1.1 C4),
  `firmOwnershipObjectives` (two-row ownership + objectives decompose with
  bidirectional arrow + examples strip — 3.1.1 C5),
  `verticalSupplyChain` (5-stage Raw → Components → Manufacturing →
  Distribution → Retail frieze with Backward / Forward integration axes —
  3.1.2 C3), `horizontalCombineDiagram` (Firm A + Firm B → Combined firm
  with market-share badges and a 3-benefit annotation column — 3.1.2 C4),
  `growthRoadblockers` (4 numbered constraint tiles separated by traffic
  barriers, road strip behind — 3.1.2 C6),
  `demergerBeforeAfter` (two-panel structural tree: parent + three
  divisions → two focused companies with reassigned divisions, spin-off
  arrow between — 3.1.3 C1).

### 8. Game theory / payoff matrices
*Use when:* a 2×2 payoff grid / prisoner's dilemma.
- `prisonersDilemmaInteractive`, `cartelPrisonersDilemma`.
- **Game Theory deck (3.4.4)** — one shared price-cutting matrix (Firm A
  rows × Firm B cols; payoffs 8,8 / 2,12 / 12,2 / 5,5; A's profit green,
  B's blue) reused across three cards:
  - `gameMatrixSimple` — static taster + colour key (Card 1).
  - `gameMatrixAnatomy` — interactive build-up (`gma-1..4`: players →
    strategies → payoffs → ordered pair).
  - `gameMatrixDilemma` — interactive (`gmd-1..3`: column best response →
    Low dominates → (5,5) outcome).
  - `gameMatrixNash` — interactive (`gmn-1..3`: each firm's best-response
    ticks → the cell ticked by both = Nash).
  - `repeatedGameCycle` — interactive tit-for-tat loop (`rgc-*`:
    co-operate → cheat → retaliate → profits fall → loop back).
  - `hitAndRunCycle` — interactive five-stage hit-and-run timeline
    (`hr-1..5`, Contestable Markets 3.4.7): supernormal profit → entrant
    spots it → entry → profits competed away → hit-and-run exit.

### 8b. Firm cost-curve diagrams (MC / AC / AR / MR)
*Use when:* a profit-maximising firm diagram (monopoly, monopolistic
competition, perfect competition). Hand-rolled reveal-layer SVGs sharing
the geometry `x = 80 + 54·Q`, `y = 320 − 9.125·£` (desktop 760×360).
- `mcShortRunDiagram`, `mcLongRunDiagram`, `mcEfficiencyDiagram` (monopolistic competition).
- **Monopoly (3.4.5):** `monopolyProfitMax` (`mp-1..4`: MR=MC → Qm → Pm →
  supernormal profit), `monopolyWelfare` (`mw-1..3`: monopoly outcome →
  competitive P=MC benchmark → deadweight-loss triangle), `naturalMonopoly`
  (`nm-1..3`: falling LRAC → unregulated profit-max → P=AC / P=MC
  regulation points), `priceDiscPanels` (`pd-1..3`: combined-market MC →
  inelastic Market A high price → elastic Market B low price), and the
  hubs `monopolyFeaturesHub` (6 spokes) and `priceDiscHub` (two markets).
- **Third-degree price discrimination (3.4.5):** `thirdDegreePd` is built by
  `ECONOS_FIRM.priceDiscrimination({ markets:[{a,b,…},{a,b,…}], mc, qMax, yMax })`
  — a two-panel chart on ONE shared (Q, £) scale so the asymmetry reads
  directly: the elastic market (flat demand) gets the lower price + larger
  quantity, the inelastic market (steep demand) the higher price + smaller
  quantity. MR=MC is engine-`intersection`-solved per market and the price
  dot is snapped `on:` demand. Curve ids are suffixed per market (`AR_A`,
  `MR_B`, …) because the engine resolves `on:`/`intersection:` ids globally
  across panels. Spec: `js/charts/specs/price-discrimination.js`.
- **Controlling Market Power (3.6.1):** `priceCapMonopoly` (interactive
  price-cap-on-a-monopoly, `pcm-1..2` — monopoly outcome → cap lowers
  price and raises output; reuses the monopoly coordinate system).
- **Hubs (6-spoke, monopolyFeaturesHub grammar):** `monopolyFeaturesHub`,
  `occupationChoiceHub` (Supply of Labour), `govStakeholderHub`
  (Government Intervention — six stakeholder groups around the state).
- **Monopsony (3.4.6):** `monopsonyLabourDiagram` (`ms-1..3`: MCL above the
  labour supply curve → employment at MCL=MRP → wage Wm read down on
  supply → wage gap vs the competitive Wc/Lc), plus the hub
  `monopsonyBuyerHub` (one buyer between many workers and many suppliers).

### 8c. Labour-market diagrams
*Use when:* a labour demand/supply curve (wage on y, employment on x).
- **Demand for Labour (3.5.1):** `labourDemandCurve` (interactive MRP =
  D_L curve, `ld-1..2`), `labourDemandShift` (interactive D_L shift,
  `lds-1..3`), `labourShiftVsMovement` (static shift-vs-movement panels).
- **Supply of Labour (3.5.2):** `labourSupplyCurve` (interactive upward S,
  `ls-1..2`), `labourSupplyShift` (interactive S shift, `lss-1..3`),
  `occupationChoiceHub` (6-factor hub), `regionalMobility` (static
  two-region jobs-vs-workers diagram).
- **Wage Determination (3.5.3):** `labourMarketEqDiagram` (interactive
  D_L/S_L equilibrium with surplus/shortage zones, `lme-*`),
  `wageFloorCeiling` (interactive min/max wage controls, `wf-*` — the
  price-floor/ceiling style applied to wages), `labourSupplyElasticity`
  (static inelastic-vs-elastic two-panel). Reuses `monopsonyLabourDiagram`.
- **Protecting Suppliers & Employees (3.6.1):** `monopsonyMinWage`
  (interactive minimum-wage-in-a-monopsony, `mmw-1..2` — a min wage
  between Wm and Wc raises both pay and employment). Reuses
  `monopsonyLabourDiagram`.
- **Monopsony (3.4.6):** `monopsonyLabourDiagram` (see §8b).

### 8d. Government-intervention bespoke visuals (3.6)
- `priceCapMonopoly` (Controlling Market Power), `monopsonyMinWage`
  (Protecting Suppliers & Employees) — see §8b.
- `govStakeholderHub`, `consumerChoiceHub` (4-spoke), `priceProfitTools`
  (two-panel price/profit tools with a before/after table),
  `qualityVsCostTension` (firm pulled between lower cost and higher
  quality) — Impact of Government Intervention 3.6.2.

### 8e. Theme 4 (A Global Perspective) bespoke visuals
- `globalisationConnectsHub` — Globalisation 4.1.1 Card 1. A globe at the
  centre with **five** numbered spokes (pentagon layout, dashed SVG
  connectors) for trade / capital / labour / technology / brands &
  culture. The go-to pattern when a hub needs five rather than four
  spokes; collapses to a single column on mobile.
- `globalSupplyChainMap` — Globalisation 4.1.1 Card 3. A horizontal
  "one product, many countries" ribbon (design → components → assembly →
  shipping → retail), each stage a node with a location pill, over a
  subtle world gradient. Use for any global value-chain / process
  sequence that needs place labels.
- `absoluteAdvantageTable` — Specialisation & Trade 4.1.2 Card 2. An
  output table with the winning cell tinted per column + trophy callout
  pills. The go-to for an "absolute advantage" worked data table.
- `compAdvDataTable` + `compAdvOppCost` — Specialisation & Trade 4.1.2
  Card 3. A two-good output table and a pair of opportunity-cost panels.
  Pattern for any comparative-advantage calculation: pair them across
  `visualKey` + `visualKey2` so each keeps its own section label.
- `gainsFromTradePPF` — Specialisation & Trade 4.1.2 Card 4. A linear
  PPF with production point P and a dashed trade line out to consumption
  point C beyond the frontier. Hand-computed geometry (P sits exactly on
  the PPF). Use for any "consume beyond the PPF" gains-from-trade diagram.
- `patternOfTradeGlobe` — Pattern of Trade 4.1.3 Card 1. The globe hub
  (see `globalisationConnectsHub`) adapted to **four** numbered spokes in
  a 2×2 ring. The go-to when a hub needs four drivers around a globe.
- `patternCompAdvLogic` — Pattern of Trade 4.1.3 Card 2. A three-panel
  worked "core logic" chain (data table → conclusion → outcome) joined by
  arrows. Pattern for any "table → infer → result" mini-argument.
- `tradeThenNow` — Pattern of Trade 4.1.3 Card 3. Twin before/after panels
  with stylised SVG flow diagrams (hub radiating out vs nodes feeding in).
  Use for any "how the map changed" comparison.
- `exchangeRateCases` — Pattern of Trade 4.1.3 Card 5. Twin appreciate /
  depreciate panels with a currency-direction row and three effect lines.
  Pattern for any two-case currency / direction comparison.
- `termsOfTradeFormula` — Terms of Trade 4.1.4 Card 1. A three-node
  "A → result ← B" formula diagram (export index, central index circle,
  import index). Use for any "two inputs → one index" definition.
- `totWorkedExamples` — Terms of Trade 4.1.4 Card 2. Twin calculation
  panels (favourable vs unfavourable result) with working + result badge.
  The go-to for a "show the working both ways" numerical card.
- `totTwoStories` — Terms of Trade 4.1.4 Card 3. Twin three-step
  mini-flows (improvement vs deterioration). Use for any mirrored
  cause → mechanism → outcome pair.
- `ftaVsCustomsFlows` — Trading Blocs & WTO 4.1.5 Card 3. Two rows of
  member↔member nodes with a dashed link to "rest of world", contrasting
  how outside goods route in under an FTA vs a customs union. Use for any
  "two regimes, same actors, different flow" comparison.
- **Balance of Payments 4.1.7 bespoke set** — `bopGlobeHub` (globe + 3
  account spokes), `bopBankStatement` (current + capital + financial = ),
  `bopDriverDials` (four metallic rotary knobs + deficit/surplus balance —
  reusable for any "set of dials drive an outcome" card), `bopFinanceMatch`
  (deficit financed by surplus — two-box identity), `bopPolicySliders`
  (four labelled sliders converging on an outcome), `bopWorldImbalances`
  (two country panels feeding a central globe with opposing flow rows).
  NOTE: an older orphaned `bopThreeAccounts`/`bopDriverHub`/… set from a
  pre-pipeline attempt still sits lower in `icons.js` — ignore it; the
  live topic uses the `bop*` keys above.
- **Exchange Rates 4.1.8 set** — `fxLifebuoy` (gold £ on a life-ring;
  hand-drawn SVG, the floating currency) and `fxAnchor` (£ on a ship's
  anchor + "TARGET RATE" tag; hand-drawn SVG, the fixed currency) —
  reusable hero illustrations for floating/fixed metaphors. Plus
  `fxGlobeHub` (globe + £/$/€ price tag, 4 spokes), `fxIntervention`
  (central-bank buy/sell), `fxSpectrum` (3-node Floating/Managed/Fixed),
  `fxTerminologyGrid` (2×2 matrix). Chart specs: `fxMarketDiagram`
  (D£/S£ equilibrium) and `fxFloatingShifts` (2-panel appreciation vs
  depreciation) — reuse for any currency S&D diagram.
- **Exchange Rate Intervention 4.1.8 set** — `fxInterventionDiagrams`
  (2-panel: buy £ → demand right / sell £ → supply right), `fxPegDefence`
  (peg above equilibrium, excess-supply gap the central bank buys) and
  `fxInterestMagnet` (a dial-engine gauge wrapped as a "capital magnet" —
  reuse for any "higher X = stronger pull" idea).
- **Exchange Rate Impacts 4.1.8 set** — `marshallLernerScale` (a balance
  scale weighing PEDₓ vs PEDₘ against the > 1 threshold — reuse for any
  "two forces weighed against a threshold" idea), `caChannel` (a one-node
  fork into two coloured paths converging on an outcome — reuse for any
  branching transmission mechanism) and `fxMacroChannels` (a 4-row
  label | weaker | vs | stronger comparison grid). Card 6 reuses the
  existing `jCurveInteractive` chart spec.
- **International Competitiveness 4.1.9 set** — `competitivenessHub` (a
  four-spoke radial hub orbiting a centre node — reuse for any "one idea
  fed by four drivers" map), `costChain` (a five-node chain wired with
  interlocking SVG chain-link connectors — reuse for any "A feeds B feeds
  C" causal sequence where the links themselves should read as a chain),
  `competeRace` (a two-panel race with a central VS badge — reuse for any
  "regime A vs regime B" head-to-head), and `competitivenessGaugeHub` (a
  driver tile grid wrapped around a live `ECONOS_DIALS` gauge — reuse for
  any "many inputs → one index readout" composite).
- **Absolute & Relative Poverty 4.2.1 set** — `povertyLineSpectrum`
  (figures split left/right of a dashed threshold on an income axis —
  reuse for any "above vs below a line" population split), `povertyMove
  Differently` (a scenario grid where each case shows the direction two
  indicators move via green-↓/red-↑ badges, plus a four-cell outcome
  matrix — reuse for any "which way does each measure move under
  scenario X" story), `povertyTrapCycle` (a horizontal node chain closed
  by a dashed return arrow — reuse for any self-reinforcing feedback
  loop), `incomeLadder` (a rungs-and-households ladder with two dashed
  reference lines beside a driver grid — reuse for any "distribution
  with thresholds" picture), and `povertyCausesOutcomes` (a row of cause
  nodes feeding one wider twin-outcome box — reuse for "many levers →
  two bundled results").
- **What Makes Exchange Rates Move? 4.1.8 set** — `currencyMoveChain` (a
  numbered mechanism chain where each step carries a green-▲ and amber-▼
  tag — reuse for any "same chain, two opposite directions" mechanism),
  `demandForPoundsHub` / `supplyOfPoundsHub` (mirrored centre-and-five-
  spokes hubs — reuse for "one concept fed by five sources", and pair two
  for a demand/supply or inflow/outflow mirror), and `exchangeDriversHub`
  (a 2×2 radial driver hub around a central pressure pill — the
  `competitivenessHub` grammar retoned). Card 5 reuses the
  `fxFloatingShifts` two-panel FOREX chart spec.
- **Inequality 4.2.2 set** — chart-engine Lorenz/Gini diagrams (declared
  via `ECONOS_PPF`, never hand-rolled): `lorenzCurve` (45° equality line +
  a bowed Lorenz cubic — reuse for any cumulative-share distribution
  picture), `lorenzCompare` (two-panel comparison — reuse for "A vs B" and
  "before vs after" on the same axes), `giniAreas` (Lorenz curve with
  shaded A/B polygons sampled along the cubic — reuse for any
  ratio-of-areas measure). Plus two HTML visuals: `flowVsStock` (a
  flow-vs-stock tap/reservoir pair — reuse for any "rate over time vs
  accumulated level" distinction) and `giniScale` (a green→red 0→1 index
  bar with markers — reuse for any single-axis severity scale).
- **Causes of Inequality 4.2.2 set** — `kuznetsDevelopment` (the inverted-U
  Kuznets curve through `ECONOS_PPF`: a two-segment cubic with three phase
  dots and short along-curve labels — reuse for any "rises then falls with
  X" hump relationship). Named `kuznetsDevelopment` because a legacy
  hand-rolled `kuznetsCurve` SVG already exists. The rest of the deck
  reuses flow chains, two-flow cards, icon-top tile grids and VS pairs.
- **Measures of Development 4.3.1 set** — `developmentMeaningHub` (a
  globe ringed by three dimension tiles — reuse for "one idea built from
  three pillars"), `hdiBuild` (input boxes → a formula/operator node → a
  result badge — reuse for any "components combine into one index/score"
  story, e.g. composite indicators) and `developmentDashboard` (a globe
  ringed by six indicator tiles, the `competitivenessGaugeHub` 3-left /
  centre / 3-right grid retoned — reuse for any "central concept measured
  by many indicators" dashboard).
- **Development Factors: External Barriers 4.3.2 set** —
  `foreignCurrencyGap` (a two-column sources/uses layout around a centre
  "tank" SVG whose fill sits below a dashed "need" line — reuse for any
  inflow-vs-outflow shortfall, e.g. savings gap, balance-of-payments
  pressure) and `capitalFlightHub` (a 2×2 radial driver hub around a
  central red "Capital flight" core — the `exchangeDriversHub` grammar
  retoned for a push-factor story).
- **Development Factors: Domestic Capacity 4.3.2 set** —
  `capacityEngineHub` (six foundation tiles around a central engine — the
  `developmentDashboard` 3-left / centre / 3-right grid with a gear core,
  reuse for "many inputs power one engine"), `savingsGapLoop` (a five-node
  vicious circle closed by a dashed return arrow — the `povertyTrapCycle`
  grammar retoned, reuse for any reinforcing low-level trap) and
  `demographyPyramids` (two stylised population pyramids — wide-base burden
  vs working-age-bulge dividend — built from centred CSS bars, reuse for
  any "two shapes of the same distribution" contrast).
- **Development Strategies: Market-orientated 4.3.3 set** — `fdiMagnetHub`
  (a magnet core with money emojis being pulled in, ringed by six
  pull-factor tiles — the `developmentDashboard` grid with a magnet centre,
  reuse for any "central force attracts X" story). Card 5 reuses the
  `fxMarketDiagram` FOREX demand/supply spec for the floating-rate diagram.
- **Development Strategies: Interventionist 4.3.3 set** — `bufferStockBands`
  (a price-vs-time wave clamped between a dashed floor and ceiling with the
  stability band shaded, through `ECONOS_PPF` — reuse for any "variable
  held within a target band over time" picture, e.g. inflation targeting,
  managed-rate corridors). The rest of the deck reuses flow chains, tile
  grids and VS pairs.
- **Market Failure in the Financial Sector 4.4.2 set** — `bubbleCycle` (an
  asset-price-vs-time curve that rises, peaks at euphoria and crashes to an
  aftermath, with five colour-coded phase dots, through `ECONOS_PPF` —
  reuse for any boom-bust / overshoot-and-correct lifecycle). The rest of
  the deck reuses flow chains, tile grids and VS pairs.
- **Role of Central Banks 4.4.3 set** — `centralBankHub` (the four core
  central-bank functions as a 2×2 radial hub around a "Central bank" core —
  the `exchangeDriversHub` / `capacityEngineHub` grammar retoned amber).
  The rest of the deck reuses the transmission-chain flow, tile grids and
  VS pairs.
- **Public Expenditure 4.5.1 set** — `govBudgetHub` (six drivers of
  public-spending change — ageing population, recessions, shocks & security,
  development stage, debt interest, climate & infrastructure — as a
  three-column radial hub around a central "Government budget" node, collapsing
  to two columns with the core ordered first on mobile; the
  `exchangeDriversHub` / `capacityEngineHub` grammar retoned blue). The rest of
  the deck reuses flow chains, tile grids and VS pairs.
- **Public Sector Finances 4.5.3 set** — five bespoke pieces:
  `fiscalMapHub` (six fiscal concepts as a numbered 3×2 tile map — reuse for
  any "map the territory" overview); `debtBathtub` (a stock-vs-flow SVG: a
  bath filled by a revenue tap and drained by a spending tap, the annual
  deficit piping into a debt tank — reuse for any stock/flow or
  inflows/outflows story); `outputGapCompare` (a two-panel `ECONOS_PPF`
  time-series contrasting a recession's negative output gap against output at
  trend — reuse for any potential-vs-actual / gap diagram); `deficitPressurePanel`
  (six `ECONOS_DIALS` gauges on two rows with WIDENS/NARROWS framing — reuse
  for any "what pushes this up or down" driver panel); `debtSnowball` (a
  snowball SVG with inbound/outbound arrows — reuse for any compounding /
  snowball dynamic). The rest of the deck reuses flow chains, side-by-side
  pairs and tile grids.
- **Macroeconomic Policy in a Global Context 4.5.4 set** — `policyToolkitHub`
  (the five macro-policy tools as a radial hub around a central "The economy"
  node — the `govBudgetHub` / `capacityEngineHub` grammar with a 3/2 split,
  reuse for any "tools around a core" map). Card 3 reuses `debtBathtub`
  (above). The rest of the deck reuses flow chains, side-by-side pairs and
  tile grids.
- **Limits of Policy in a Global Economy 4.5.4 set** — `policyLimitsHub` (five
  forces around a central "Policy tools" node — the `policyToolkitHub` grammar,
  reuse for any "constraints around a core" map) and `transferPricingFlow` (a
  three-box high-tax → parent → low-tax profit-shifting flow with an
  internal-price arrow between each and a summary banner — reuse for any
  cross-border flow / arbitrage / before→intermediary→after story). The rest of
  the deck reuses flow chains and tile grids.
- **Chart-engine S&D welfare diagrams (Restrictions on Free Trade 4.1.6)** —
  proper `ECONOS_PPF` specs with stepped `idl-N` reveal, not hand-rolled
  SVG. `tariffDiagramInteractive` (Pw→Pt, revenue rectangle, two DWL
  triangles along S and D), `quotaDiagramInteractive` (S+quota shift,
  price→Pq, quota-rent rectangle), `subsidyTradeInteractive` (S₁→S₂ shift,
  output up, imports displaced). Reuse these (or the tax/subsidy specs) for
  any tariff / quota / domestic-subsidy welfare analysis — geometry is
  computed from the line equations so dots sit exactly on curves.

### 9. Decompose / labelled anatomy
*Use when:* one figure with named parts/regions; the visual IS the content.
- `landTypesSvg`, `capitalTypesSvg`, `enterpriseCombinationSvg`,
  `labourClassification`, `regulatoryCaptureSvg`, `bitFrameworkDiagram`,
  `nudgeDefaultDiagram`, `prospectTheoryDiagram`, `barterTriangle`.

### 10. Interactive HTML explorers (stateful widgets)
*Use when:* the mock-up implies click-to-explore beyond layer reveal.
- `marketInteractive`, `phillipsInteractive`, `lorenzInteractive`,
  `priceControlsInteractive`, `autoStabilisersInteractive`,
  `kinkedDemandInteractive`, `prisonersDilemmaInteractive`,
  `bopJCurveInteractive`, `biasGalleryInteractive`, `presentBiasInteractive`,
  `boundedSelfControlInteractive`, `ukNudgesInteractive`, `adInteractive`.

### 11. Named curves / models / maps
- `kuznetsCurve`, `cobwebModel`, `phillipsInteractive`, `lorenzInteractive`,
  `inflationSurge2021`, `japanMap`.

---

## Part C — Dials / gauges

`js/icons/dial-engine.js` → `window.ECONOS_DIALS.render({ type:'gauge', size,
value, min, max, tone, ariaLabel })`. Semicircle gauge, tone-matched to the
chart palette. Used inside dashboard visuals (e.g. `bopSustainabilityDashboard`,
`macroCockpit`). Reach for a gauge when a mock-up shows a speedometer/score dial.

---

## Part D — Heroes (topic cover images)

Full-bleed cover SVGs for the Learn-It intro. One per topic; pick by subject.
`heroBars, heroConsumption, heroInvestment, heroGovSpending, heroNetTrade,
heroAd, heroUnemployment, heroMonetary, heroAggSupply, heroFiscal, heroGrowth,
heroMultiplier, heroTradeCycle, heroFiscalPolicy, heroFinancialMarkets,
heroDevelopment, heroMacroObjectives, heroWellbeing, heroShortRunCosts,
heroLongRunCosts, heroPosExternalities, heroPublicGoods, heroDemand, heroSupply,
heroSupplyDemand, heroCPS, heroElasticity, heroPPF, heroScarcity, heroPrice,
heroSpecialisationMoney, heroEconomicSystems, heroExternalities, heroFirm,
heroCostCurves, heroMarketPower, heroGameTheory, heroLabour, heroGlobe,
heroExchangeRates, heroInequality, heroBehavioural, heroIntervention, heroTrade,
heroMarketFailure`.

> Theme 3 already has `heroFirm`, `heroCostCurves`, `heroMarketPower`,
> `heroGameTheory`, `heroLabour`, `heroIntervention`.

---

## Part E — Card storytelling patterns

The *arrangement* layer (which blocks a card uses) is documented in the
`econos-card-template` skill — the 10 patterns (Sequential flow chain,
Side-by-side pair, Spectrum/regime grid, Comparison table, Worked example,
Predict-then-reveal, Interactive multi-state diagram, Decompose a diagram,
Evidence-then-verdict, Tile grid) and the `ad-interactive` block vocabulary
(`flow`, `pair`, `causes/causes2/causes3`, `comparisonTable`, `summaryRow`,
`interactiveDiagram`, `visualKey`, `diagnose`, `worked-example`, …). This
catalogue covers the *visual* layer that slots into `visualKey` /
`interactiveDiagram.svgKey`; the skill covers how to frame it.

---

## Appendix — Theme 3 quick-start (what already exists per topic)

| Spec topic | Reusable visuals already in the codebase |
|---|---|
| 3.1.1 Sizes & types of firms | `firmFourLensesHub`, `firmSizeMeasuresHub`, `firmStaySmallHub`, `firmOwnershipObjectives` (also 3.1.4 C5) — fully built |
| 3.1.2 Business growth | `businessGrowthMapHub`, `verticalSupplyChain`, `horizontalCombineDiagram`, `conglomerateRiskHub`, `growthRoadblockers` — fully built |
| 3.1.3 Demergers | `demergerBeforeAfter`, `demergerReasonsHub` — fully built |
| 3.1.4 Business objectives | `businessObjectivesMap`, `whoWantsWhatHub`, `objectivesJourney`, `firmOwnershipObjectives` — fully built |
| 3.3.1 Revenue | `revenueThreeMetrics`, `totalRevenueInteractive`, `averageRevenueInteractive`, `marginalRevenueInteractive`, `revenueElasticityTriptych` — fully built |
| 3.3.2 Costs | `costsHub`, `fixedVariableTotalChart`, `averageCostFamilyChart`, `marginalCostChart`, `fullCostDiagram`, `costDataBakery`, `costsChainFlow` — fully built. Older alternatives: `shortRunCostStack`, `lracEnvelope`, `mcLrTangency`, `heroCostCurves`. |
| 3.3.3 EoS | `lracBigPicture`, `internalEconomiesHub`, `diseconomiesHub`, `mesChart`, `externalEconomies` — fully built. Older alternatives: `lracEnvelope`, `mesBarrierDiagram`. |
| 3.3.4 Profits | `profitCoreEquation`, `whereProfitComesFrom`, `breakEvenChart`, `profitMeasures` — fully built. Older alternatives: `profitsShutdownDiagram`, `revMaxDiagram`. |
| 3.4.1 Efficiency | `efficiencyFlywheel`, `productiveEfficiencyDiagram`, `toeAllocativeDiagram`, `dynamicEfficiencyDiagram` — fully built. Older alternatives: `marketLevelWelfare`, `firmLevelPcVsMonopoly`. |
| 3.4.2 Perfect competition | `pcMarketHub`, `pcPerfectlyElasticDemand`, `pcShortRunProfit`, `pcLossDiagram`, `pcLongRunDiagram`, `pcEfficiencyDiagram` — fully built |
| 3.4.4 Oligopoly | `kinkedDemandInteractive`, `cartelJointProfitDiagram`, `cartelPrisonersDilemma`, `prisonersDilemmaInteractive`, `limitPricingDiagram` |
| 3.4.5 Monopoly / price disc. | `monopolySupernormalProfit`, `monopolyDwl`, `naturalMonopolyDiagram`, `firstDegreePd`, `thirdDegreePd`, `networkEffectDiagram` |
| 3.4.6 Monopsony | `monopsonyDiagram`, `labourMarketEquilibrium` |
| 3.4.7 Contestability | `contestabilitySpectrum`, `contestabilityFrames`, `contestabilityDiagram` |
| 3.5.x Labour | `labourMarketEquilibrium`, `derivedDemandFlow`, `backwardBendingLSC`, `nmwDiagram`, `monopsonyDiagram` |
| 3.6.x Govt intervention | `regulatoryCaptureSvg`, `govtFailureDiagram`, `policySpectrumDiagram` |
