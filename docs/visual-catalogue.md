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
- **Costs:** `shortRunCostStack` (TC/TFC/TVC), `lracEnvelope` (SRAC→LRAC),
  `mcLrTangency`, `fixedVariableTotalChart` (3.3.2 C2 — interactive TFC/TVC/TC reveal, Marco's Pizzeria), `averageCostFamilyChart` (3.3.2 C3 — interactive AFC/AVC/AC reveal), `marginalCostChart` (3.3.2 C4 — interactive table → MC curve with AC/AVC reference), `fullCostDiagram` (3.3.2 C5 — static AFC/AVC/AC/MC composite), `costDataBakery` (3.3.2 C6 — read-a-table procedure + bakery worked example).
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
- **Monopsony (3.4.6):** `monopsonyLabourDiagram` (see §8b).

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
| 3.3.2 Costs | `costsHub`, `fixedVariableTotalChart`, `averageCostFamilyChart`, `marginalCostChart`, `fullCostDiagram`, `costDataBakery` — fully built. Older alternatives: `shortRunCostStack`, `lracEnvelope`, `mcLrTangency`, `heroCostCurves`. |
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
