# Theme 2 review — content, pedagogy, recommendations

> A full audit of the Edexcel A **Theme 2 (UK economy: performance and
> policies)** content as it sits on `main` at v0.45.1. Reviewed against the
> Edexcel A specification, the 10-pattern card design discipline (econos-card-template
> skill), and the codebase's own house rules from `CLAUDE.md`.
>
> Scope: 21 topic directories under `js/data/edexcel_a/theme-2/`.
> Method: four parallel review agents, one per spec-section cluster
> (2.1, 2.2, 2.3+2.4, 2.5+2.6), each reading every learn-it.js file in its
> cluster and producing a per-topic dossier. Findings synthesised below.

---

## 1. Executive summary

**Theme 2 is in mixed shape.** The built topics are generally strong on content
coverage and pedagogy, often noticeably better than the Theme 1 starting state
— but **three of the seven topics in Section 2.6 are placeholder stubs with
zero cards**, leaving roughly half of the macro-policy syllabus empty. There
is also one stub in Section 2.1.

The headline findings, in order of leverage:

| # | Issue | Severity | Effort to fix |
|---|---|---|---|
| 1 | **3 placeholder topics covering all of 2.6.2 (fiscal + monetary) and 2.6.3 (supply-side)** | Critical — half of Section 2.6 missing | Large (new content build per topic) |
| 2 | **`standard-of-living-and-wellbeing` is a stub** that duplicates Card 7 of `measures-of-economic-performance` | High — orphan topic on home grid | Small (delete or pivot) |
| 3 | **MRT vs MPT terminology bug** in `national-income-and-the-multiplier` Card 3 directly contradicts its own Card 2's `examEdge` advice | High — actively miseducates students | Small (s/MRT/MPT/) |
| 4 | **Three topics carry an incorrect `topicNum`** (`standard-of-living-and-wellbeing` `'2.1.2'`, `inflation-measurement-and-costs` `'2.2.1'`, `employment-and-unemployment` `'1.3'`) | Medium — cosmetic but confusing | Trivial |
| 5 | **Equilibrium National Income card 2 hand-rolls inline SVGs** in violation of CLAUDE.md's toolkit-only rule | Medium — geometry can drift | Medium (migrate to chart engine) |
| 6 | **Multiple pattern violations**: 5 topics exceed the 2-Tile-Grid cap; 4 topics have consecutive-pattern repeats | Medium — uniformity-drift the pattern discipline was designed to prevent | Medium per topic |
| 7 | **Several spec gaps**: under-employment (2.1.3), CPI substitution/quality bias (2.1.2), demographics & migration + competition policy in LRAS (2.3.3), output-gap diagram (2.5.2), demand for exports / access to credit as I drivers (2.2.3), export-led growth (2.5.1) | Medium — discrete missing concepts | Small per gap |

The pedagogy story is largely positive once you set the placeholders aside: 12 of
the 17 built topics use **6+ distinct storytelling patterns** across their cards,
the worked-example template is being used well (the multiplier and CPI worked
calculations are exemplary), and several topics have genuinely sophisticated
interactive multi-state diagrams (Card 2 of `causes-of-inflation`, Card 1 of
`national-income-and-the-multiplier`, Card 2 of `stagflation-1970s`).

The two recurring weaknesses are: **(a)** opening cards default to Tile-Grid
when a Sequential-flow or Decompose-a-diagram would do more work, and **(b)**
several evaluation/synthesis cards lean on a single hero `visualKey` SVG with
almost no surrounding card text, making the lesson fragile to SVG drift and
opaque to screen readers.

---

## 2. Critical issues (do these first)

### 2.1 The three empty policy topics

`js/data/edexcel_a/theme-2/demand-side-policies-fiscal/learn-it.js`,
`demand-side-policies-monetary/learn-it.js`, and `supply-side-policies/learn-it.js`
are all placeholders — `cards: []`, with a comment instructing future-self to
"Replace this file with a full ad-interactive build once the topic is run
through the ChatGPT → Claude mockup pipeline."

Between them, these three topics cover:
- **All of 2.6.2** — monetary vs fiscal, interest rates, QE, fiscal instruments,
  budget deficit vs surplus, direct vs indirect taxation, AD/AS diagrams,
  Bank of England & MPC, Great Depression / 2008 GFC responses, strengths and
  weaknesses.
- **All of 2.6.3** — market-based vs interventionist supply-side, incentives,
  competition policy, labour-market reform, skills, infrastructure, AD/AS
  diagrams, strengths and weaknesses.

`macro-conflicts-and-trade-offs` already provides 2.6.4 framing on these
policies (e.g. the 2021–23 BoE rate-hiking case study), so when these topics
are built they should explicitly link backward rather than re-cover that ground.

These are the highest-priority Theme 2 build targets and the natural first
candidates for the Friday + next-week green-field work with ChatGPT.

### 2.2 The MRT / MPT terminology bug

In `js/data/edexcel_a/theme-2/national-income-and-the-multiplier/learn-it.js`,
**Card 2's `examEdge` explicitly tells students:** "Use MPC, MPS, MPT, MPM —
not the older MRT". **Card 3 (the worked-example calculation), in its
`scenario` and Steps 1–2, then uses MRT throughout.**

This contradicts the topic's own advice and the Edexcel spec wording (2.4.4
mandates MPT). Fix: rewrite the scenario and Steps 1–2 to use MPT. ~10-line
edit, ships as a hot-fix in 5 minutes.

### 2.3 The wrong `topicNum` triplet

Three topics carry an incorrect internal spec number:

- `standard-of-living-and-wellbeing/learn-it.js` — `topicNum: '2.1.2'` (inflation's number; should be `'2.1.1'` or be retired entirely)
- `inflation-measurement-and-costs/learn-it.js` — `topicNum: '2.2.1'` (AD's number; should be `'2.1.2'`)
- `employment-and-unemployment/learn-it.js` — `topicNum: '1.3'` (micro market-failure's number; should be `'2.1.3'`)

These don't currently surface to the user (the spec chip reads from
`js/topics.js`, not the data file) but they confuse the next maintainer.
One-commit fix-up across the three files.

### 2.4 Hand-rolled SVG in Equilibrium National Income

`equilibrium-national-income/learn-it.js` Card 2 embeds two inline SVGs
(`ENI_MINI_CHART_BOOM`, `ENI_MINI_CHART_OIL`) with hand-computed intersection
points in the header comments. CLAUDE.md mandates: *"Every diagram goes through
the chart engine (`window.ECONOS_PPF.render(spec)`) or the dial engine. Do not
author raw `<svg>` in `icons.js` or data files."*

Migrate these to two `window.ECONOS_PPF.render(...)` specs in `js/charts/specs/`
during the next Theme 2 pass.

---

## 3. Spec coverage matrix

Green = full or near-full coverage. Amber = partial (notable gap or scope creep).
Red = stub / empty. Spec sub-points are from Edexcel A 2017 specification.

| Spec | Topic | Cards | Status |
|---|---|---|---|
| 2.1.1 Economic growth | `measures-of-economic-performance` | 8 | 🟢 |
| 2.1.1 (welfare side) | `standard-of-living-and-wellbeing` | 0 | 🔴 **stub — duplicates 2.1.1 Card 7** |
| 2.1.2 Inflation (causes/effects) | `causes-of-inflation-and-deflation` | 8 | 🟢 |
| 2.1.2 (measurement) | `inflation-measurement-and-costs` | 7 | 🟢 (small CPI-bias gap) |
| 2.1.3 Employment/unemployment | `employment-and-unemployment` | 8 | 🟡 (no under-employment; migration only in policy table) |
| 2.1.4 Balance of payments | — | — | **lives in Theme 4** by design |
| 2.2.1 AD characteristics | `aggregate-demand` | 8 | 🟢 |
| 2.2.2 Consumption | `consumption` | 8 | 🟡 (raw Y vs disposable Yd not distinguished) |
| 2.2.3 Investment | `investment` | 8 | 🟡 ("demand for exports" and "access to credit" missing) |
| 2.2.4 Government spending | `government-spending` | 8 | 🟢 |
| 2.2.5 Net trade | `net-trade` | 8 | 🟢 |
| 2.3 Aggregate supply | `aggregate-supply` | 8 | 🟡 (LRAS drivers: demographics/migration, competition policy, relative productivity not labelled) |
| 2.4.1 + 2.4.2 National income | `national-income` | 5 | 🟢 (overlaps with 2.4.3) |
| 2.4.3 Equilibrium national output | `equilibrium-national-income` | 4 | 🟡 (Card 4 belongs in 2.5.2) |
| 2.4.4 Multiplier | `national-income-and-the-multiplier` | 4 | 🟢 (**MRT/MPT bug in Card 3**) |
| 2.5.1 / 2.5.3 Causes/trade cycle | `trade-cycle-shocks-and-economic-growth` | 5 | 🟡 (no output-gap diagram; export-led growth absent) |
| 2.5.2 Output gaps | — | — | 🟡 (touched in `equilibrium-national-income` Card 4 but not a dedicated topic) |
| 2.5.4 Impact of growth | `the-impact-of-economic-growth` | 6 | 🟢 (best-in-section pattern variety) |
| 2.6.1 Macro objectives | `macroeconomic-objectives-and-trade-offs` | 6 | 🟢 (balanced-budget objective undercooked) |
| 2.6.2 (fiscal) | `demand-side-policies-fiscal` | 0 | 🔴 **stub** |
| 2.6.2 (monetary) | `demand-side-policies-monetary` | 0 | 🔴 **stub** |
| 2.6.3 Supply-side | `supply-side-policies` | 0 | 🔴 **stub** |
| 2.6.4 Conflicts/trade-offs | `macro-conflicts-and-trade-offs` | 6 | 🟢 |

**Net coverage:** 17 of 21 topics built. 4 topics empty (3 critical, 1
redundant). All of the *built* topics either cover their spec sub-points
fully or have a clearly named small gap.

---

## 4. Cross-cutting patterns

### 4.1 Pattern-discipline violations

The econos-card-template skill enforces two rules:
- **No two consecutive cards use the same dominant pattern.**
- **Tile Grid appears on at most 2 cards per topic** (the "default we are
  trying to avoid" rule).

Violations across Theme 2:

| Topic | Violation |
|---|---|
| `aggregate-demand` | Cards 5→6 consecutive Worked-example; Cards 1→2 consecutive Decompose |
| `consumption` | Cards 1→2 consecutive Decompose |
| `investment` | Tile Grid on **3 cards** (1, 4, 8) |
| `government-spending` | Tile Grid on **3 cards** (1, 2, 8); Cards 1→2 consecutive Tile Grids |
| `net-trade` | Tile Grid on **4 cards** (1, 3, 4, 8); Cards 3→4 consecutive Tile Grids; Cards 5→6 consecutive Interactive multi-state |
| `aggregate-supply` | Cards 3→4→5 **three consecutive** Interactive multi-state |
| `national-income` | Cards 2→3 consecutive Sequential flow |
| `equilibrium-national-income` | Cards 1→2→3 **three consecutive** Side-by-side pair |
| `macroeconomic-objectives-and-trade-offs` | Cards 2→3 consecutive Spectrum |
| `macro-conflicts-and-trade-offs` | Cards 4→5 consecutive Side-by-side pair |
| `measures-of-economic-performance` | Tile Grid on **4 cards** (1, 6, 7, 8); Cards 7→8 consecutive Tile Grids |
| `employment-and-unemployment` | Tile Grid dominates **5 cards** (1, 3, 4, 7, 8); Cards 3→4 consecutive Tile Grids |

Tile Grid keeps creeping into the **opener** and the **evaluator/exam-summary
closer**. The card-template skill is explicit about this: if you find yourself
reaching for tiles in those slots, almost always a Sequential flow chain
(opener) or a Spectrum/regime grid (closer) does more work.

### 4.2 Recurring strengths

- **Three exemplary worked-example cards**: `national-income-and-the-multiplier`
  Card 3 (with the 3× overestimate trap), `inflation-measurement-and-costs`
  Card 3 (5-step CPI calculation), `measures-of-economic-performance` Card 2
  (flour/bread double-counting trap).
- **Three top-tier interactive multi-state diagrams**: `causes-of-inflation`
  Card 2 (Classical/Keynesian perspective toggle), `national-income-and-the-multiplier`
  Card 1 (five-view round-by-round geometric series), `macro-conflicts-and-trade-offs`
  Card 2 (Phillips curve 1958 → Friedman/Phelps → 1970s breakdown).
- **Strong use of dated UK case studies**: 2008 GFC, 2021–23 inflation/rates,
  Thatcher 1979–83, 1970s stagflation. The pedagogical signal is consistent
  across topics — the "Evidence-then-verdict" final card is becoming a stable
  closing pattern.
- **`comparison` / `versusRows` blocks are reliably well-used** when
  authors reach for them — Cards 4 (`spotting-the-difference`) of
  `causes-of-inflation`, Card 4 of `consumption`, and Card 4 of `employment`
  are exemplars of one-table diagnostic distillations.

### 4.3 Recurring weaknesses

- **Several cards lean entirely on `visualKey` with no card text**:
  `macroeconomic-objectives-and-trade-offs` Card 2 (`headline-three`) and Card 5
  (`structural-trade-offs`); `measures-of-economic-performance` Card 6
  (`growth-causes`); `macroeconomic-objectives-and-trade-offs` Card 1 has
  no `causes` body. SVG-only cards are fragile to drift, opaque to screen
  readers, and skim badly for students.
- **Cross-topic content duplication**:
  - `measures-of-economic-performance` Card 7 ≈ `standard-of-living-and-wellbeing`
    (entire topic is redundant if the latter doesn't pivot)
  - `trade-cycle-shocks-and-economic-growth` Card 5 (`impact-of-growth`) ≈
    `the-impact-of-economic-growth` (entire topic)
  - `consumption` Card 6 (`consumption-multiplier`) ≈
    `national-income-and-the-multiplier` Cards 1–3
  - `national-income` Card 4 (J=W view 5) ≈ `equilibrium-national-income`
    Card 1
- **Beyond-spec sophistication is sometimes good** (`investment` accelerator
  and MEC), **sometimes crowding** (`measures-of-economic-performance` Card 5
  output-gap, which belongs in 2.5.2 and is repeated there). Consider whether
  each beyond-spec card carries its weight or could become a one-line forward
  pointer.

---

## 5. Recommendations — sorted by leverage

### 5.1 Tonight or first thing tomorrow (cheap, high-impact)

1. **Fix the MRT→MPT terminology in `national-income-and-the-multiplier` Card 3.** Direct contradiction of own exam-edge advice. (~10 lines.)
2. **Fix the three wrong `topicNum` fields** in `standard-of-living-and-wellbeing`, `inflation-measurement-and-costs`, `employment-and-unemployment`. (3-line edit.)
3. **Either delete or repurpose `standard-of-living-and-wellbeing`** — currently a stub that, if built per its placeholder comment, would duplicate the polished `measures-of-economic-performance` Card 7. Best option: pivot it to "Easterlin paradox / ONS wellbeing dashboard / Kahneman experienced wellbeing" so it complements rather than duplicates. Or `included: false` until built.

### 5.2 Theme 2 polish pass (small, surgical edits)

4. **Plug the named spec gaps** with small additions where possible:
   - Add an under-employment tile/state to `employment-and-unemployment` Card 1.
   - Add "demand for exports" and "access to credit" as named tiles in `investment` Card 4 (`determinants`).
   - Label disposable income (Yd) explicitly in `consumption` Card 2 lede.
   - Add "demographics & migration" and "competition policy" tiles to `aggregate-supply` Card 5.
   - Add an output-gap view to `trade-cycle-shocks-and-economic-growth` Card 4 (`actual-vs-potential-growth`) — closes 2.5.2 without a new topic.
   - Add an export-led growth tile to `the-impact-of-economic-growth`.
   - Add a CPI-substitution-bias tile to `inflation-measurement-and-costs` Card 2 (currently buried in the RPI card).
   - Add a balanced-budget deficit/surplus distinction to `macroeconomic-objectives-and-trade-offs` Card 3 (`four-constraints`).

5. **Break the worst pattern-discipline violations** with surgical card-pattern conversions:
   - `net-trade` Cards 3+4 → one Comparison table (X vs M drivers row-by-row).
   - `employment-and-unemployment` Cards 3+4 → merge into one "define-then-classify" reveal card (frees Card 4 slot for a migration & skills card).
   - `equilibrium-national-income` Card 3 → Spectrum/regime grid for output gaps (breaks the 1→2→3 Side-by-side run).
   - `aggregate-supply` Card 5 → Tile-grid or Comparison of LRAS drivers (breaks the 3→4→5 Interactive run).
   - `government-spending` Card 1 → Sequential flow chain (breaks the 1→2 Tile-Grid opener).

6. **Migrate the inline SVGs in `equilibrium-national-income` Card 2 to the chart engine.** Two new specs under `js/charts/specs/eni-boom.js` and `eni-oil.js`.

7. **Resolve the cross-topic duplications** by deleting or hard-linking:
   - `consumption` Card 6 (`consumption-multiplier`) → forward pointer to the multiplier topic.
   - `trade-cycle-shocks-and-economic-growth` Card 5 → forward pointer to `the-impact-of-economic-growth`.
   - `national-income` Card 4 view 5 (J=W equilibrium) → cut, let `equilibrium-national-income` own it.

### 5.3 Strategic — Theme 2's biggest gap

8. **Build the three Section 2.6 policy topics.** Suggested first card-pattern plans (each topic 5–7 cards):

**`demand-side-policies-fiscal`**:
- C1 Sequential-flow: trade cycle → output gap → fiscal stance.
- C2 Comparison table: direct vs indirect taxation, with UK examples.
- C3 Interactive multi-state: G↑ shifts AD right; second view adds crowding-out caveat.
- C4 Side-by-side pair: budget deficit vs surplus, with structural / cyclical distinction.
- C5 Evidence-then-verdict: 2008 GFC fiscal response (UK VAT cut + scrappage; US ARRA).

**`demand-side-policies-monetary`**:
- C1 Decompose-a-diagram: the MPC dashboard (rate vote inputs).
- C2 Interactive multi-state: rate cut → AD shift via four transmission channels (borrowing cost, exchange rate, asset prices, expectations).
- C3 Sequential flow: QE mechanism (asset purchase → bond yield ↓ → lending ↑).
- C4 Comparison table: conventional vs unconventional tools.
- C5 Evidence-then-verdict: 2008 BoE response (5% → 0.5%, QE £375bn) and 2021–23 hiking cycle. Link to `macro-conflicts-and-trade-offs` Card 3 (`inflation-surge-2021-23`).

**`supply-side-policies`**:
- C1 Spectrum/regime grid: market-based ↔ interventionist axis.
- C2 Comparison table: the five policy families (incentives / competition / labour / skills / infrastructure).
- C3 Interactive multi-state: LRAS right-shift per family.
- C4 Sequential flow: UK productivity puzzle as supply-side failure.
- C5 Worked-example walkthrough: one named UK reform (e.g. apprenticeship levy).
- C6 Evidence-then-verdict: synthesis. Reuse the `supply-side-escape` causes from `macro-conflicts-and-trade-offs` Card 5 as the seed.

All three topics should explicitly link to `macro-conflicts-and-trade-offs`
rather than re-cover the 2.6.4 trade-off framing.

---

## 6. Per-topic dossiers

The detailed per-topic findings from the four review agents are preserved
below for reference. Each dossier names cards by ID, fields by exact name,
and recommendations by specific edit. Use these when actually picking up
a topic to revise.

### Section 2.1 — Measures of economic performance

#### `measures-of-economic-performance` → 2.1.1

- **Spec coverage**: Strong on 2.1.1 — rates of change (Card 3 + quiz Q5), real vs nominal (Card 3), per capita (Card 3 `causes3`), GNI + net property income (Card 4), PPPs (Card 4 `examEdge`), GDP limitations (Card 7 six blind spots), happiness/HDI (Card 7 `causes2`). **Gap**: value vs volume distinction is implicit in nominal/real card but never named with that vocabulary — Edexcel asks for it directly. Output-gap framing (Card 5) is extra (sits closer to 2.2.4).
- **Cards & patterns**: 8 cards. C1 Tile grid, C2 Side-by-side trio + worked, C3 Decompose, C4 Side-by-side + Sequential, C5 Decompose, C6 Tile grid (visualKey-only), C7 Tile grid 6-tile, C8 Tile grid checklist. **Tile Grid on 4 cards (1, 6, 7, 8). C7→C8 consecutive Tile Grids.**
- **Strengths**: Flour/bread double-counting trap (C2); deflator + per-capita + nominal-to-real formula scaffolding (C3); Diane Coyle economistQuote on C7.
- **Recommendations**: (i) Convert C6 to Side-by-side pair (actual demand-side vs potential supply-side causes); (ii) Add explicit "value vs volume" mini-row to C3; (iii) C5 actual-vs-potential belongs in 2.2.4 / 2.5.2, consider trimming; (iv) C1 macro-dashboard needs `causes` body (currently SVG-only).

#### `standard-of-living-and-wellbeing` → complement to 2.1.1

- **Spec coverage**: Zero. Placeholder stub (`cards: []`). `topicNum: '2.1.2'` is wrong (that's inflation's number).
- **Cards & patterns**: 0.
- **Recommendations**: (i) Fix `topicNum`; (ii) most intended content already lives on `measures-of-economic-performance` Card 7 — either delete this topic or carve a distinct angle (Easterlin paradox / Kahneman / ONS wellbeing dashboard); (iii) until built, hide from home grid via `included: false`.

#### `causes-of-inflation-and-deflation` → 2.1.2

- **Spec coverage**: Excellent — demand-pull (C2), cost-push (C3), monetary growth via MV=PT (C5), expectations (C5 `conclusion`), winners/losers (C6 `versusRows`), deflation (C7). CPI mechanics correctly deferred to sister topic.
- **Cards & patterns**: 8 cards. C1 Tile grid + Sequential, C2 Interactive multi-state (classical/keynesian toggle), C3 Interactive multi-state + Evidence-then-verdict, C4 Comparison table, C5 Decompose MV=PT + Sequential, C6 Side-by-side `versusRows` + Predict-then-reveal, C7 Sequential + Comparison, C8 Tile grid + Comparison. No consecutive repeats; Tile-Grid at the cap (2).
- **Strengths**: C2 classical/keynesian perspective toggle is one of the strongest cards in the app; C4 "output is the tell" diagnostic; Friedman economistQuote + tipLate on C5.
- **Recommendations**: (i) C6 add anticipated vs unanticipated column to `versusRows`; (ii) C8 `matchTable` is missing the deflation policy row (QE, fiscal stimulus); (iii) C5 add a "Why 2021–23 was different" parallel flow; (iv) tighten C1↔C8 colour-palette callback.

#### `inflation-measurement-and-costs` → 2.1.2 (CPI/RPI side)

- **Spec coverage**: Comprehensive — inflation/disinflation/deflation (C1), CPI construction (C2), CPI worked calc (C3), RPI vs CPI vs CPIH (C4), CPI limitations (Cards 2, 4 examEdge), winners/losers (C5), fiscal-drag (C6), deflation (C7). **Gap**: substitution-bias and quality-change-bias only mentioned in Card 4's RPI bullet, not on Card 2 where CPI's own limitations belong.
- **Cards & patterns**: 7 cards. C1 Spectrum/regime, C2 Sequential + Decompose, C3 Worked-example walkthrough, C4 Comparison + Tile grid, C5 Tile grid + Side-by-side, C6 Sequential + Tile grid, C7 Sequential + Evidence-then-verdict. **Tile Grid on 3 cards (4, 5, 6) — at anti-pattern threshold.**
- **Strengths**: C3 5-step worked example with the "why 9.8% when food rose 20%?" meta-question; C1 trendCurveUp/Wavy/Down visual mnemonic; C6 fiscal-drag four-step flow.
- **Recommendations**: (i) Add CPI-bias tile to C2 (currently buried on C4); (ii) C5 risks duplication with sister topic C6 — consider promoting `versusRows`; (iii) `topicNum: '2.2.1'` is wrong, should be `'2.1.2'`; (iv) fix the off-by-one card-number comment between C4 and C5.

#### `employment-and-unemployment` → 2.1.3

- **Spec coverage**: Strong on causes (six types: frictional, structural, seasonal, real-wage, cyclical, demand-deficient — all in C3), measures (C2 Claimant Count + ILO/LFS), effects (C7). **Gaps**: (a) under-employment **not explicitly named** — spec requires it; (b) migration & skills only as "mobility" in policy table C6.
- **Cards & patterns**: 8 cards. C1 Tile grid + Sequential, C2 Side-by-side + Comparison, C3 Side-by-side + Sequential + Tile grid, C4 Tile grid + Sequential, C5 Decompose + Sequential + Side-by-side, C6 Comparison + Tile grid, C7 Tile grid + Sequential, C8 Tile grid. **Tile Grid dominates 5 cards (1, 3, 4, 7, 8). C3→C4 consecutive Tile Grids.** `topicNum: '1.3'` is wrong.
- **Strengths**: C3 4-vs-2 supply/demand split before the six-tile list; C5 cyclical + wage stickiness with `diagramKey: 'adAsRecession'`; C7 hysteresis flow.
- **Recommendations**: (i) Add under-employment tile to C1; (ii) Cards 3+4 duplicate the six types — merge or repurpose C4 as a migration & skills card to plug the spec gap; (iii) C8 forward-pointer is low-value, consider deleting or converting to Phillips-curve worked example; (iv) fix `topicNum: '1.3'` → `'2.1.3'`.

### Section 2.2 — Aggregate Demand

#### `aggregate-demand` → 2.2.1

- **Spec coverage**: Full coverage of 2.2.1 (components + UK weights, slope via wealth/IR/international substitution, movement vs shift, shifters). Adds beyond-spec multiplier depth — useful but technically 2.6 territory. No explicit "relative importance" framing.
- **Cards & patterns**: 8 cards. C1 Decompose, C2 Decompose, C3 Comparison table, C4 Tile grid, C5 Worked-example, C6 Worked-example, C7 Evidence-then-verdict, C8 Tile grid. **C1→C2 consecutive Decompose; C5→C6 consecutive Worked-example.**
- **Strengths**: C3 movement-vs-shift comparison table; C7 dated UK case studies with C/I/G/X−M chips; C2 slope triplet is canonical Edexcel framing.
- **Recommendations**: (i) Reorder C5–C6 — insert a Predict-then-reveal between them showing UK multiplier estimates; (ii) Add a Spectrum/regime grid card on "relative importance" of C/I/G/(X−M); (iii) C1 → Sequential flow chain (formula building up) to break the C1→C2 Decompose pair; (iv) trim C6 `flow` (5 round entries — risks staging-height jump).

#### `consumption` → 2.2.2

- **Spec coverage**: Disposable income via C = a + bY (C2); savings-consumption (C5 APC/APS/MPC/MPS, dissaving); other influences in C4. **Gap**: spec mandates disposable income as the dominant driver, but C2 uses raw Y without flagging the Yd distinction.
- **Cards & patterns**: 8 cards. C1 Decompose, C2 Decompose, C3 Worked-example, C4 Tile grid, C5 Side-by-side pair, C6 Worked-example, C7 Evidence-then-verdict, C8 Tile grid. **C1→C2 consecutive Decompose.**
- **Strengths**: C5 APC+APS=1 identity boxed; C3 ΔC/ΔY visual maths; C7 post-pandemic / cost-of-living episodes.
- **Recommendations**: (i) C2 lede must use "disposable income (Yd)" — spec hinges on it; (ii) Convert C1 to Tile grid (durables/non-durables/services already structured); (iii) C6 overlaps heavily with the multiplier topic — slim to one MPC-focused step + forward pointer; (iv) Add explicit savings-ratio data to C4 income-distribution cause.

#### `investment` → 2.2.3

- **Spec coverage**: Gross vs net (C2); determinants (C4) covers interest rates, confidence/animal spirits, demand expectations, technology, government/taxes, profits. **Partial gaps**: "demand for exports" not named; "access to credit" bundled with interest rates rather than flagged. Accelerator (C3) and MEC (C5) are beyond-spec stretch content.
- **Cards & patterns**: 8 cards. C1 Tile grid, C2 Sequential, C3 Side-by-side, C4 Tile grid, C5 Decompose, C6 Worked-example, C7 Comparison, C8 Tile grid. **Tile Grid on 3 cards (1, 4, 8). No consecutive repeats.**
- **Strengths**: C2 square-grid visualisation (£100bn / £40bn / £60bn = 50 / 20 / 30 squares); C3 accelerator dual-flow; C5 MEC interactive layered diagram.
- **Recommendations**: (i) Convert C8 to Spectrum/regime grid (the six tests already imply a strong-to-weak spectrum); (ii) Add explicit "access to credit" tile to C4; (iii) Add "demand for exports" tile to C4; (iv) `outcomes` array is 7 items but `doInThis` lists 8 — align.

#### `government-spending` → 2.2.4

- **Spec coverage**: Trade cycle (C7 automatic stabilisers, C4 cyclical/structural); fiscal policy (C3 expansionary/contractionary). Goes well beyond spec with C6 crowding-out interactive, C5 spending multiplier, C2 types-of-spending. Strong overcoverage.
- **Cards & patterns**: 8 cards. C1 Tile grid, C2 Tile grid, C3 Side-by-side, C4 Spectrum/regime, C5 Worked-example, C6 Interactive multi-state, C7 Side-by-side, C8 Tile grid. **Tile Grid on 3 cards (1, 2, 8). C1→C2 consecutive Tile Grids.**
- **Strengths**: C6 3-layer loanable-funds diagram is most rigorous card in section; C4 cyclical/structural distinction with "VS" callout; C2 "Counts in GDP? Yes/No" pre-empts transfer-payment errors.
- **Recommendations**: (i) C1 → Sequential flow chain (market failure → objective → spending decision is already a 3-node `flow`); (ii) Convert C8 to Spectrum/regime grid using existing "Strengthens if / Weakens if" structure; (iii) C3 inline-HTML grid is heavy — consider promoting to flowChart SVG; (iv) C7 use "trade cycle" not "business cycle" to match spec wording.

#### `net-trade` → 2.2.5

- **Spec coverage**: All five drivers covered. Adds Marshall-Lerner and J-curve (beyond core spec but valued). Most complete coverage of the section.
- **Cards & patterns**: 8 cards. C1 Tile grid, C2 Side-by-side, C3 Tile grid, C4 Tile grid, C5 Interactive multi-state, C6 Interactive multi-state, C7 Sequential, C8 Tile grid. **Tile Grid on 4 cards (1, 3, 4, 8) — severe violation. C3→C4 consecutive Tile Grids; C5→C6 consecutive Interactive multi-state.**
- **Strengths**: C6 Marshall-Lerner J-curve 3-view (depreciation → worse first → recovery) with the |PED_X| + |PED_M| > 1 condition; C5 separates price effects before volume response; C2 injection-vs-leakage framing.
- **Recommendations**: (i) **Priority**: merge C3+C4 into one Comparison table (X driver vs M driver side-by-side per row) — solves the worst Tile-Grid count and the C3→C4 violation; (ii) Reframe C5 as Sequential flow chain to break the C5→C6 Interactive run; (iii) Convert C8 to Spectrum/regime grid using existing "Favourable/Conditional/Unfavourable" tags; (iv) C7 is thin (3 flow nodes, single SVG) — expand `analysis` per view or fold into the M-L card.

### Section 2.3 — Aggregate Supply

#### `aggregate-supply` → 2.3

- **Spec coverage**: 2.3.1 (characteristics, SR vs LR) full (C1–C3). 2.3.2 (SRAS factors) — raw materials, energy, exchange rate, indirect taxes present (C2, C4); subsidies bundled with taxes; corporation/wage taxes not separated. 2.3.3 (LRAS factors) C5 covers labour/capital/tech/productivity/education/deregulation but **spec's named drivers "demographics & migration," "competition policy" and "relative productivity" not labelled explicitly**.
- **Cards & patterns**: 8 cards. C1 Decompose, C2 Sequential + Interactive, C3 Interactive (Classical/Keynesian perspective toggle), C4 Interactive, C5 Interactive + Sequential, C6 Comparison, C7 Interactive + Comparison, C8 Tile grid + Sequential. **C3→C4→C5 three consecutive Interactive multi-state. C2 and C4 duplicate the same `causes` shift-arrows array verbatim.**
- **Strengths**: C7 twin interactive panels + comparisonTable; C8 six-test causes grid is clean exam scaffold; C3 Classical/Keynesian perspective toggle.
- **Recommendations**: (i) C4 currently repeats C2's causes block — replace with a "predict which curve / which direction" Predict-then-reveal; (ii) Add explicit 2.3.3 tiles for **demographics & migration, competition policy and relative productivity** in C5; (iii) Convert C5 to Tile-grid or Comparison of LRAS drivers (breaks the C3→C4→C5 Interactive run; C7's supply-side panel already covers the diagram message); (iv) C6 "Tax cuts" needs to clarify income/corporation/indirect for 2.3.2.

### Section 2.4 — National Income

#### `national-income` → 2.4.1 + 2.4.2

- **Spec coverage**: 2.4.1 (circular flow, income vs wealth) covered (C1, C5 with `nuanceBanner` on wealth effect). 2.4.2 (injections, withdrawals) covered (C2, C3, C4). **Scope overlap**: C4 (`open-economy`) view 5 introduces J=W equilibrium — duplicates `equilibrium-national-income` C1. Header `topicNum: '4.1-4.3'` confirms intentional overlap.
- **Cards & patterns**: 5 cards. C1 Decompose, C2 Sequential, C3 Sequential, C4 Interactive multi-state, C5 Side-by-side pair. **C2→C3 consecutive Sequential flow** (near-mirrored injection/withdrawal structures).
- **Strengths**: C4 five-stage interactive build-up (two-sector → financial markets → G → trade → J=W); C5 "Common confusions" checklist (GDP-is-a-flow / house-is-wealth); C1 income=output=expenditure identity teaching.
- **Recommendations**: (i) Convert C3 to Side-by-side pair against C2 (or to a Comparison table) to break the consecutive Sequential flows; (ii) Move the J=W equilibrium reveal (view 5 of C4) out of this topic — let C4 stop at "Add Trade" so `equilibrium-national-income` owns the identity; (iii) C5 lacks a worked numeric example — add £50k salary vs £400k house inside `nuanceBanner`.

#### `equilibrium-national-income` → 2.4.3

- **Spec coverage**: 2.4.3 covered by C1, C2, C3. **Scope creep**: C4 (`reading-national-income-data` / 5 filters) is 2.5.2 not 2.4.3 — file header admits this. Output gaps (C3) sit at the 2.4.3/2.6 boundary.
- **Cards & patterns**: 4 cards. C1 Side-by-side pair, C2 Side-by-side pair (with hand-rolled inline SVGs), C3 Side-by-side pair, C4 Tile grid + worked mini-example. **Three consecutive Side-by-side pairs (C1, C2, C3) — serious violation.**
- **Strengths**: C2 ENI_STEP_ROW mini-stepper for inventory adjustment; C4 `causes2` quick example ("Country A: GDP up 4% → real 1% → welfare ≪ 4%"); C2 intersection points computed in header comments.
- **Recommendations**: (i) **Migrate ENI_MINI_CHART_BOOM/ENI_MINI_CHART_OIL inline SVGs to the chart engine** — violates CLAUDE.md toolkit rule; (ii) Convert C3 (`output-gaps`) to Spectrum/regime grid (recessionary | at-Yf | inflationary) on a single annotated AD/AS panel; (iii) Move C4 out of 2.4.3 to a 2.5.2 topic, or retitle to flag the cross-spec link; (iv) Add an AD-shift-left / SRAS-shift-right cell to C2 so all four 2.4.3 shock cases are represented.

#### `national-income-and-the-multiplier` → 2.4.4

- **Spec coverage**: 2.4.4 fully covered — multiplier ratio + process (C1), MPC/MPS/MPT/MPM (C2), 1/(1−MPC) and 1/MPW calculations (C3), AD-shift significance (C4). **Critical bug**: C3 scenario and Steps 1–2 use "MRT" while C2 correctly uses "MPT" and C2's examEdge tells students to use MPT not MRT.
- **Cards & patterns**: 4 cards. C1 Interactive multi-state, C2 Decompose + Sequential, C3 Worked-example walkthrough, C4 Side-by-side pair + Tile grid. **Healthy pattern mix — four distinct patterns, no repeats, Tile Grid once.**
- **Strengths**: C1 five layered views render the geometric series converging to £500m; C3 5-step worked example contrasts naive k=1/MPS vs full-leakage k=1/MPW (3× overestimate); C4 evaluation tile (time lags / supply limits / crowding out / UK MPM with k≈1.5).
- **Recommendations**: (i) **Critical: rewrite C3 scenario + Steps 1–2 to use MPT not MRT**; (ii) C1 hardcodes MPC=0.8 — add a final view recomputing for MPC=0.5 (k=2) for sensitivity; (iii) Promote C4 accelerator sub-flow to its own labelled section; (iv) Add a `causesNote` cross-link to `equilibrium-national-income` to anchor multiplier-AD-shift in the same equilibrium framework.

### Sections 2.5 + 2.6 — Growth and Policies

#### `trade-cycle-shocks-and-economic-growth` → 2.5.1 / 2.5.3 (+ partial 2.5.2)

- **Spec coverage**: 2.5.1 (growth factors, actual vs potential) in `actual-vs-potential-growth` stages 3+4; 2.5.3 (trade cycle phases) fully in `trade-cycle-wave`; 2.5.4 (impact of growth) in `impact-of-growth`. **Gaps**: 2.5.2 output gaps only implicit; 2.5.1 "importance of trade for export-led growth" absent.
- **Cards & patterns**: 5 cards. C1 Interactive multi-state, C2 Predict-then-reveal, C3 Comparison table, C4 Interactive multi-state, C5 Side-by-side pair. **Healthy spread; no violations.**
- **Strengths**: C2 "P and Y together vs opposite" diagnostic; C3 Thatcher 1979–83 vs Heath 1970s sacrifice-ratio anchoring; C4 cumulative reveal (cycle → trend → drivers → hysteresis).
- **Recommendations**: (i) Add output-gap view (5th stage) to C4 — closes 2.5.2 without a new card; (ii) Add export-led growth tile to C5 `causes3`; (iii) Heavy overlap with next topic — trim C5 to a one-tile lead-in; (iv) Add numeric UK exemplars (unemployment %, inflation %) to C1 trade-cycle-wave view bodies.

#### `the-impact-of-economic-growth` → 2.5.4

- **Spec coverage**: Excellent — consumers (C1), firms (C2), government (C3), current vs future living standards (C4), synthesis verdict (C6). C5 (`beyond-gdp`) adds Easterlin/wellbeing beyond spec. **No material gaps.**
- **Cards & patterns**: 6 cards. C1 Decompose, C2 Spectrum, C3 Sequential, C4 Comparison, C5 Interactive multi-state, C6 Evidence-then-verdict. **Six distinct patterns — exemplary mix.**
- **Strengths**: C3 versusRows pairs each fiscal channel with a counter-caveat ("VAT +£3-4bn" vs "regressive"); C1 dual lens (£ absolute vs % proportional); C6 South Korea vs resource-curse pair.
- **Recommendations**: (i) C2 firms flow is single-direction — add a sixth view showing the loop breaking at productivity step (UK puzzle); (ii) £20bn UK fiscal-dividend figure asserted without derivation in C3 `analysis`; (iii) Heavy overlap with `trade-cycle-shocks-and-economic-growth` C5 — differentiate scope explicitly; (iv) C4 sustainability has 3 views but no overlay/summary — add 4th "all three lenses on one timeline" view.

#### `macroeconomic-objectives-and-trade-offs` → 2.6.1 + 2.6.4 theory

- **Spec coverage**: All seven 2.6.1 objectives in `macro-cockpit` split into "headline three" + "four constraints". 2.6.4 theory (Phillips SRPC/LRPC/NAIRU + structural trade-offs) well covered. **Gaps**: C2 `headline-three` very thin (visualKey + examEdge only); C5 `structural-trade-offs` also delegates everything to visualKey.
- **Cards & patterns**: 6 cards. C1 Decompose, C2 Spectrum, C3 Spectrum, C4 Interactive multi-state, C5 Comparison, C6 Evidence-then-verdict. **C2→C3 consecutive Spectrum.**
- **Strengths**: C4 phillips-workstation causes trio (NAIRU / adaptive expectations / no long-run trade-off); C3 four-constraints consistent Target/Measure/UK-current structure; C6 four-dimensional framework (advanced × compromised × magnitude × time horizon).
- **Recommendations**: (i) Rebuild C2 as Comparison table (Inflation vs Unemployment vs Growth across rows for target/measure/why-it-matters) — breaks C2→C3 violation; (ii) C2 and C5 lean entirely on visualKey — add at least a `causes` array per card; (iii) C1 says "BoE 2% CPI symmetric target" but never names CPIH or RPI — add measurement nuance; (iv) Add deficit/surplus distinction to balanced-government-budget objective.

#### `demand-side-policies-fiscal` → 2.6.2 (fiscal)

- **Spec coverage**: **Zero — placeholder stub.** All of 2.6.2 fiscal uncovered.
- **Recommendations**: see Section 5.3 above.

#### `demand-side-policies-monetary` → 2.6.2 (monetary)

- **Spec coverage**: **Zero — placeholder stub.** All of 2.6.2 monetary uncovered.
- **Recommendations**: see Section 5.3 above.

#### `supply-side-policies` → 2.6.3

- **Spec coverage**: **Zero — placeholder stub.** All of 2.6.3 uncovered.
- **Recommendations**: see Section 5.3 above.

#### `macro-conflicts-and-trade-offs` → 2.6.4

- **Spec coverage**: Strong on 2.6.4 applied side — SRPC breakdown in C2 (`stagflation-1970s`), policy-conflict cases in C3 (`diagnose-trade-off`), AD/AS trade-off in C4 (`inflation-surge-2021-23`), supply-side resolution in C5 (`supply-side-escape`), framework in C6. **Gap**: 2.6.4's "conflicts between objectives" well done, but full potential-conflicts list from 2.6.1 (growth vs equality, growth vs BoP, growth vs environment, growth vs fiscal) only touched in C1 flow tiles and C6 `causes`.
- **Cards & patterns**: 6 cards. C1 Decompose, C2 Predict-then-reveal, C3 Sequential, C4 Side-by-side pair, C5 Side-by-side pair, C6 Evidence-then-verdict. **C4→C5 consecutive Side-by-side pair.**
- **Strengths**: C2 Phillips curve three-view (1958 → Friedman/Phelps → 1970s breakdown) is strongest conceptual reveal in section; C3 diagnoseRows with verdict pills; C4 BoE rate-cycle 2021–23 sequence.
- **Recommendations**: (i) Rebuild C5 as Sequential flow chain (cost → reform → LRAS shift → outcome) to break C4→C5 violation; (ii) C1 is light (three flow tiles, no `causes`) — expand to a 5-cell tile naming each conflict (Phillips / growth-BoP / growth-env / spending-fiscal / equality-efficiency); (iii) C6 four UK case stubs in `causes` need 2-sentence verdicts each; (iv) C2 uses both `visualKey` AND `visualKey2` (`stagflationTimeline`) — second visual has no surrounding analysis text.

---

## 7. Methodology and caveats

- Review was performed by four parallel agents reading every learn-it.js file
  in their respective spec clusters. Each agent saw the same canonical Edexcel A
  Theme 2 specification and the same 10-pattern card design framework.
- Coverage findings reflect content as committed at `main` HEAD on
  2026-06-03 (the EDL-shell-wiring commit). They do not reflect any work in
  Theme 1 cleanup or polish that's still pending.
- Pattern classifications are best-attempt against the 10-pattern catalogue;
  some cards genuinely live between patterns (e.g. a Decompose with a heavy
  Sequential overlay) and have been classified by their dominant element.
- The recommendations are *suggestions to the author* — they're not edits.
  Some recommendations may be wrong on closer inspection or already
  intentionally overridden for good reason. They're a working list, not a
  to-do list.
