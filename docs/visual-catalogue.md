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

### 7. Firm / cost / market-structure diagrams (THEME 3 CORE)
*Use when:* a micro firm diagram with cost/revenue curves, profit areas,
equilibria. These are the workhorses for Themes 3.3–3.4.
- **Costs:** `shortRunCostStack` (TC/TFC/TVC), `lracEnvelope` (SRAC→LRAC),
  `mcLrTangency`.
- **Profit / shutdown:** `profitsShutdownDiagram`, `revMaxDiagram`,
  `monopolySupernormalProfit`, `monopolyDwl`.
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
  barriers, road strip behind — 3.1.2 C6).

### 8. Game theory / payoff matrices
*Use when:* a 2×2 payoff grid / prisoner's dilemma.
- `prisonersDilemmaInteractive`, `cartelPrisonersDilemma`.

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
| 3.1.1 Sizes & types of firms | `heroFirm`, `businessGrowthDiagram`; hub (`demandDeterminantsHub` as a layout template), twin (`twoSystemsDiagram`) for public-vs-private / profit-vs-not-for-profit |
| 3.1.2 Business growth | `businessGrowthDiagram`, `heroFirm` |
| 3.1.3 Demergers | reuse `businessGrowthDiagram` style; flow chain |
| 3.3.2 Costs | `shortRunCostStack`, `lracEnvelope`, `mcLrTangency`, `heroCostCurves`, `heroShortRunCosts`, `heroLongRunCosts` |
| 3.3.3 EoS | `lracEnvelope`, `mesBarrierDiagram` |
| 3.3.4 Profits | `profitsShutdownDiagram`, `revMaxDiagram` |
| 3.4.1 Efficiency | `marketLevelWelfare`, `firmLevelPcVsMonopoly` |
| 3.4.4 Oligopoly | `kinkedDemandInteractive`, `cartelJointProfitDiagram`, `cartelPrisonersDilemma`, `prisonersDilemmaInteractive`, `limitPricingDiagram` |
| 3.4.5 Monopoly / price disc. | `monopolySupernormalProfit`, `monopolyDwl`, `naturalMonopolyDiagram`, `firstDegreePd`, `thirdDegreePd`, `networkEffectDiagram` |
| 3.4.6 Monopsony | `monopsonyDiagram`, `labourMarketEquilibrium` |
| 3.4.7 Contestability | `contestabilitySpectrum`, `contestabilityFrames`, `contestabilityDiagram` |
| 3.5.x Labour | `labourMarketEquilibrium`, `derivedDemandFlow`, `backwardBendingLSC`, `nmwDiagram`, `monopsonyDiagram` |
| 3.6.x Govt intervention | `regulatoryCaptureSvg`, `govtFailureDiagram`, `policySpectrumDiagram` |
