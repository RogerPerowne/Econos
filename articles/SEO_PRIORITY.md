# Econos article SEO priority queue

This is the production queue for Econos's SEO article moat. Each article is
a single indexable page targeted at a high-intent A-level economics search,
written to the house style in `templates/article-template.md`, and ending in
a soft funnel into the matching Econos SPA topic.

## How the queue is ordered

Three signals, applied in this order:

1. **Search volume during the revision peak (March-May).** "What is inflation"
   type queries from Y12/Y13 students on phones. These drive the highest
   traffic and have the highest funnel intent.
2. **Spec coverage gap.** Every named Edexcel A spec point eventually gets a
   page. Where two topics have similar volume, prefer the one the SPA already
   has rich Learn/Link/Land content for - we want articles to funnel into
   live product, not coming-soon screens.
3. **Editorial differentiation.** Topics where the Econos "friction-first"
   angle most obviously out-teaches Tutor2u/SaveMyExams/PMT come earlier.
   Plain-vanilla definition pages can wait.

UK-specific examples and real datasets (SDIL, MUP, ONS releases, Bank of
England MPC, CMA decisions) are part of editorial differentiation, not a
nice-to-have. They are the moat.

Status legend: `[ ]` not started, `[~]` drafted, `[R]` with Roger, `[L]` live.

---

## Tranche 1 - macro "what is X" definitions (highest revision-peak volume)

These are the 12 queries that dominate Google searches between January and
June. Year 13s ask them again every year. Each one should be the first thing
in Google when a panicking sixth former types it the night before Paper 2.

- [ ] **What is inflation? A-level economics explained**
  - Keyword: "what is inflation a level economics"
  - SPA topic: `inflation`, `inflation_meas`
  - Friction angle: students confuse inflation, deflation, disinflation, and falling inflation rates. Lead on this.
  - UK example: ONS CPI series, BoE 2% target, 2022-23 inflation spike causes.

- [ ] **GDP explained - what it measures and what it misses**
  - Keyword: "what is gdp a level economics"
  - SPA topic: `national_income`, `growth_measure`, `sol_wellbeing`
  - Friction angle: GDP vs GNI vs real vs nominal. Limitations as welfare measure.
  - UK example: ONS quarterly GDP release; comparison with HDI / ONS wellbeing dashboard.

- [ ] **Aggregate demand (AD) explained with diagram**
  - Keyword: "what is aggregate demand a level"
  - SPA topic: `ad`
  - Friction angle: confusion between movement along AD and shifts in AD.
  - Diagram: AD curve, shift vs movement, components C+I+G+(X-M).

- [ ] **SRAS vs LRAS - the aggregate supply diagram, properly**
  - Keyword: "what is sras a level economics"
  - SPA topic: `agg_supply`
  - Friction angle: Keynesian LRAS (kinked) vs Classical LRAS (vertical) - students draw the wrong one for the wrong essay.
  - Diagram: both LRAS shapes side by side, with prose on when each is appropriate.

- [ ] **The multiplier effect explained - with worked numbers**
  - Keyword: "multiplier effect a level economics"
  - SPA topic: `multiplier`
  - Friction angle: students quote the formula but cannot apply it to an injection. Worked example with MPC/MPS/MPT/MPM.

- [ ] **Fiscal policy - tools, limits, and when it works**
  - Keyword: "what is fiscal policy a level economics"
  - SPA topic: `fiscal_policy`, `taxation`, `government_spending`
  - Friction angle: expansionary vs contractionary, automatic stabilisers vs discretionary.
  - UK example: 2020 furlough scheme as discretionary fiscal expansion.

- [ ] **Monetary policy and the Bank of England's MPC**
  - Keyword: "monetary policy a level economics"
  - SPA topic: `monetary`, `central_banks`
  - Friction angle: interest rate transmission mechanism - the full chain, not just "rates up, spending down".
  - UK example: BoE Bank Rate path 2021-2024.

- [ ] **Unemployment - types, measures, and why the figures disagree**
  - Keyword: "types of unemployment a level economics"
  - SPA topic: `unemployment`
  - Friction angle: claimant count vs ILO; structural vs cyclical vs frictional.
  - UK example: ONS Labour Market Statistics release.

- [ ] **Economic growth - causes, measurement, and limits**
  - Keyword: "what is economic growth a level economics"
  - SPA topic: `growth_measure`, `factors_growth_development`
  - Friction angle: actual vs potential, short-run vs long-run, growth vs development.

- [ ] **The balance of payments explained**
  - Keyword: "balance of payments a level economics"
  - SPA topic: `balance_of_payments`, `bop_t2`
  - Friction angle: current account vs capital account vs financial account - students mash all three.
  - UK example: UK persistent current account deficit, services surplus.

- [ ] **The Phillips curve - short run, long run, and the 1970s break**
  - Keyword: "phillips curve a level economics"
  - SPA topic: `unemployment`, `inflation`
  - Friction angle: SRPC vs LRPC; expectations-augmented; NAIRU.

- [ ] **Demand-pull vs cost-push inflation**
  - Keyword: "demand pull vs cost push inflation"
  - SPA topic: `inflation`
  - Friction angle: students label every inflation episode "demand-pull" by default. Walk through both AD-shift and SRAS-shift cases.
  - UK example: 2022 energy-driven cost-push inflation.

---

## Tranche 2 - micro "what is X" definitions (second-highest volume)

The micro equivalents. Year 12s especially search these in autumn term.

- [ ] **Monopoly explained - diagram, profit max, deadweight loss**
  - Keyword: "monopoly a level economics"
  - SPA topic: `monopoly`
  - Friction angle: students draw MR = MC but forget to read price off AR. The "where does the price come from?" question.
  - Differentiation: Schumpeterian defence, CMA 25% threshold.

- [ ] **Perfect competition - the model and why it's a benchmark**
  - Keyword: "perfect competition a level economics"
  - SPA topic: `perfect_competition`
  - Friction angle: confusion between short-run (supernormal profit possible) and long-run (normal profit only).

- [ ] **Oligopoly, the kinked demand curve, and game theory basics**
  - Keyword: "oligopoly a level economics"
  - SPA topic: `oligopoly`, `game_theory`, `collusion_cartels`
  - Friction angle: students recite "interdependence" without showing the price rigidity it implies.
  - UK example: UK supermarket pricing; the Big Four energy retailers pre-Octopus.

- [ ] **Price elasticity of demand (PED) - how to use it, not just calculate it**
  - Keyword: "price elasticity of demand a level"
  - SPA topic: `ped`
  - Friction angle: PED -> total revenue logic; the sign convention; perfect elasticity edge cases.
  - UK example: SDIL incidence analysis.

- [ ] **YED and XED - income and cross elasticity**
  - Keyword: "income elasticity of demand a level"
  - SPA topic: `yed_xed`
  - Friction angle: positive vs negative YED interpretation; necessities vs luxuries vs inferior goods.

- [ ] **Market failure - the four big causes**
  - Keyword: "market failure a level economics"
  - SPA topic: `market_failure`
  - Friction angle: students treat "market failure" as a vague label. Pin it to specific causes (externalities, public goods, asymmetric info, market power).

- [ ] **Externalities - positive, negative, and the policy fix**
  - Keyword: "externalities a level economics"
  - SPA topic: `neg_externalities`, `pos_externalities`
  - Friction angle: MSC = MPC + MEC; identifying the welfare loss triangle on the diagram.
  - UK example: SDIL, EU ETS, vaccination subsidies.

- [ ] **Public goods - non-rival, non-excludable, and the free-rider problem**
  - Keyword: "public goods a level economics"
  - SPA topic: `public_goods`
  - Friction angle: students conflate "public sector" with "public good". Defence vs the NHS distinction.

- [ ] **Asymmetric information and the Akerlof lemons model**
  - Keyword: "asymmetric information a level economics"
  - SPA topic: `info_gaps`, `financial_market_failure`
  - Friction angle: adverse selection vs moral hazard - students collapse them.
  - UK example: used cars; insurance markets; 2008 sub-prime as adverse-selection-at-scale.

- [ ] **The price mechanism - rationing, signalling, incentives**
  - Keyword: "price mechanism a level economics"
  - SPA topic: `price_functions`
  - Friction angle: students name the three functions but cannot trace them through a concrete market shock.

- [ ] **Consumer and producer surplus, and how policy shifts them**
  - Keyword: "consumer surplus producer surplus a level"
  - SPA topic: `consumer_producer_surplus`
  - Friction angle: identifying surplus areas before/after a tax, subsidy, max/min price.

- [ ] **Behavioural economics - nudges, biases, and Thaler in plain English**
  - Keyword: "behavioural economics a level"
  - SPA topic: `behavioural_econ`
  - Friction angle: students list biases without using them to explain why a standard rational-agent prediction fails.
  - UK example: organ donation opt-out switch; pension auto-enrolment.

---

## Tranche 3 - diagram-led pages (high "image search" + intent traffic)

Students literally type "monopoly diagram" or "AD AS diagram" - then click the
top image result. These pages need a clean SVG hero (commission via the
`econos-visual-diagram` skill) plus prose that walks the diagram step-by-step.

- [ ] Monopoly profit-maximisation diagram explained
- [ ] AD-AS diagram explained
- [ ] Externalities diagram (negative production)
- [ ] Externalities diagram (positive consumption)
- [ ] Price elasticity of demand diagrams
- [ ] Long-run vs short-run cost curves
- [ ] Perfect competition - short run vs long run
- [ ] Indirect tax incidence diagram
- [ ] Maximum and minimum price diagrams
- [ ] Production possibility frontier (PPF) and opportunity cost
- [ ] Game theory payoff matrix (Prisoner's Dilemma applied to oligopoly)
- [ ] Phillips curve - SRPC, LRPC, and the shift

---

## Tranche 4 - exam technique (huge volume Feb-June)

These pages compete head-on with Tutor2u and SaveMyExams. Win by giving the
exact moves examiners reward, with worked extracts from real past papers.

- [ ] How to answer a 25-mark question (Edexcel A) - KAA + EV structure
- [ ] How to write a Level 4 evaluation paragraph
- [ ] Chains of analysis - what examiners mean and how to build one
- [ ] The 15-mark essay - tighter scope, same structure
- [ ] Paper 1 (Markets and how they work) - common mistakes
- [ ] Paper 2 (The UK economy) - common mistakes
- [ ] Paper 3 (Microeconomics and macroeconomics) - common mistakes
- [ ] Data response questions - how to use the extract properly
- [ ] Drawing diagrams under time pressure - the 90-second monopoly diagram
- [ ] What "evaluate" actually means in Edexcel mark schemes

---

## Tranche 5 - UK example deep-dives (long-tail, evergreen, high authority)

Each of these doubles as a worked example reusable inside other articles, and
ranks for its own long-tail search ("sugar tax economics a level", "Scottish
minimum unit pricing economics").

- [ ] The Sugar Drinks Industry Levy (SDIL) - a worked indirect tax case
- [ ] Scotland's minimum unit pricing for alcohol - a minimum price case study
- [ ] The 2021 Uber Supreme Court ruling - labour market regulation
- [ ] EU Emissions Trading System (EU ETS) - tradable permits in practice
- [ ] UK national minimum wage - Card-Krueger meets the real labour market
- [ ] Bank of England rate decisions 2022-2024 - monetary policy in real time
- [ ] Thames Water - regulatory capture, natural monopoly, and Stigler
- [ ] HS2 - cost-benefit analysis and the political economy of large projects
- [ ] Octopus Energy and the Big Six - contestable markets in action
- [ ] The 2008 financial crisis as an asymmetric information story
- [ ] Ostrom and the commons - case studies in self-governance
- [ ] Brexit and the UK current account - structural shifts in trade

---

## Tranche 6 - misconception pages (high-intent "why" and "difference" queries)

These rank fast because Google rewards exact-question matching. Each page is
short (600-900 words), one misconception per page, one diagram if needed.

- [ ] Why is MR less than AR for a monopoly?
- [ ] Difference between SRAS and LRAS
- [ ] Difference between Keynesian and Classical LRAS
- [ ] Difference between inflation, deflation, and disinflation
- [ ] Difference between movement along and shift of a demand curve
- [ ] Why does monopoly cause market failure?
- [ ] Why is the long-run aggregate supply curve vertical (Classical view)?
- [ ] Difference between fiscal and monetary policy
- [ ] Difference between economic growth and economic development
- [ ] Why doesn't perfect competition exist in reality? (and why we still teach it)
- [ ] Difference between absolute and comparative advantage
- [ ] Difference between progressive, proportional, and regressive taxes

---

## Not in scope yet (parking lot)

Lower priority, mostly because either (a) the spec point is rarely examined,
(b) search volume is low, or (c) the SPA Learn-it content isn't built yet so
the funnel is weak. Revisit after Tranches 1-4 are live.

- Theme 4 development economics deep-dives (HDI, MDGs->SDGs, dependency theory)
- Game theory beyond Prisoner's Dilemma (sequential games, mixed strategies)
- Niche behavioural biases (hyperbolic discounting, mental accounting)
- IB-only or AQA-only topics that overlap weakly with Edexcel A

---

## Production cadence

Realistic pace with one writer + Claude:
- Tranche 1 (12 articles): 4-6 weeks
- Tranche 2 (12 articles): 4-6 weeks
- Tranche 3 (12 diagrams): 3-4 weeks (faster - more visual, less prose)
- Tranche 4 (10 exam-technique): 3 weeks (Roger is the SME, drafts will need his eye)
- Tranche 5 (12 case studies): 6-8 weeks (research-heavy)
- Tranche 6 (12 misconceptions): 2 weeks (short pieces)

Total: ~6 months to a 70-article moat covering every high-volume A-level
economics search a UK sixth former is likely to make.
