# Changelog

All notable changes to econos. Newest at the top. Loosely follows
[Keep a Changelog](https://keepachangelog.com/). This is a perpetual-beta
educational site, so versions track release rhythm rather than a frozen
public API: bump the minor when a release block of improvements ships;
bump the patch for bugfix-only sweeps.

## 0.44.2 — 2026-06-03

### Theme 1 pedagogy sweep · PR C — Market Failure & Intervention (1.3, 1.4)

Third and final pedagogy-sweep PR. Eight topics touched:

- **Market Failure (1.3.1):** Card 2 examEdge adds an explicit spec callout
  mapping the three routes to spec 1.3.1(b). Card 5 anchors the
  petrol/congestion example with the 2003 London Congestion Charge data
  (traffic −18%, speed +33%, buses +14%, £97m/year revenue).
- **Negative Externalities (1.3.2):** Card 4 "Who is worse off?" row now
  identifies both high-polluting firms <em>and</em> low-income consumers
  (regressive incidence) under a Pigouvian tax — and incumbent high-emitters
  under cap-and-trade. Card 7 examEdge includes a worked 25-mark essay
  structure (define → analyse → evaluate → judge) anchored to the four
  criteria.
- **Positive Externalities (1.3.2):** Card 7 examEdge adds a worked
  subsidy-vs-direct-provision essay structure with the binding-constraint
  judgement ("subsidy when price-sensitive; provision when access-binding").
- **Public Goods (1.3.3):** Card 2 examEdge adds a forward reference to
  Card 5's vertical demand summation. Card 6 (Government Solutions) table
  now carries live UK £ amounts (defence £57bn, street lighting £0.5bn,
  flood defences £1.2bn, BBC licence fee £3.7bn). Card 7 four-step
  evaluation flow expanded with full sub-text including the preference-
  revelation problem.
- **Information Gaps (1.3.4):** Card 1 — repurposed `causes2` as an
  explicit two-tile callout naming Adverse selection (ex-ante) vs Moral
  hazard (ex-post), making the cognitive hierarchy land before Akerlof.
  Card 2 — renamed the unravelling flow "Adverse selection — how the
  market unravels" so the named mechanism stays visible.
- **Taxes & Subsidies as Policy Tools (1.4.1):** Card 3 — added an
  examEdge "what this topic covers / what comes next" signpost forward to
  the full toolkit in Government Intervention.
- **Government Intervention (1.4.1):** Card 6 (tradable permits) — added a
  visible `causes2` "Tax vs permits — when to choose which" 2-tile callout
  with the price-certain vs quantity-certain decision rule, elevated from
  the examEdge prose.
- **Government Failure (1.4.2):** Card 2 — elevated political short-termism
  from examEdge into a visible `causes2` row labelled "the four spec causes
  and one strategic pattern to watch", with UK examples. Card 6 — added
  Bank of England independence (1997) as a fifth case study, retitled
  "Five case studies — four failures and one institutional success" so
  students see both sides of the design question.

Data only (network-first) — no `sw.js` bump.

## 0.44.1 — 2026-06-03

### Theme 1 pedagogy sweep · PR B — Elasticities, Price Mechanism & CPS

Second of three pedagogy-sweep PRs. Five topics touched:

- **Price Elasticity of Demand (1.2.3):** Card 6 (PED & total revenue) — added
  a worked numerical (cigarettes inelastic +20% price → TR rises £600→£660
  vs concert tickets elastic +20% → TR falls £600→£432) so the TR rule is
  shown, not just stated.
- **Income & Cross-Price Elasticity (1.2.3):** Card 8 (determinants) — added
  quantified UK stats (UK restaurant spending +22%/−50%; Aldi+Lidl 5%→16%
  share; Netflix lost ~1m UK subs in 2022). Card 9 (real-world) — tagged
  each scenario with a YED/XED badge so the income-effect vs substitution-
  effect distinction stays explicit.
- **Price Elasticity of Supply (1.2.5):** Card 5 — added a worked SR/LR
  numerical comparison (oil PES 0.25 in Year 1 → 0.80 in Year 5). Card 6 —
  upgraded the housing example with the 2010–22 UK stats. Card 7 — added a
  bottomTip on supply-side policy as a PES lever (T-Levels, planning
  reform, HS2/grid).
- **The Price Mechanism (1.2.7):** Card 1 examEdge — now explicitly flags
  the spec requirement to name signalling/incentive/rationing separately.
  Card 4 — added 2022 UK energy crisis cascade (gas ↑5× → electricity ↑ →
  consumer switching → renewables investment) as the canonical Hayekian
  transmission example. Card 5 — bridge sentence tying entrepreneurship
  back to Card 2's incentive function. Card 6 — added a 7th cause (time
  lags & sticky prices) explicitly naming the Level 3→4 evaluation point.
- **Consumer & Producer Surplus (1.2.8):** new **Card 4 "The surplus exam
  method"** (8 cards now, was 7) — promotes the three-step routine to a
  standalone card with per-policy applications (tax/subsidy/ceiling/floor)
  and a tipLate clarifying transfers vs welfare losses. Card 2 — expanded
  the "common mistake" entry to explain *why* shading whole triangles is
  wrong. Card 8 — added UK Help to Buy (£21bn, 2013–23) as a real-world
  case of subsidy incidence under inelastic supply. Renumbered all
  remaining stepLabels; updated intro `doInThis` and stages copy.

Data only (network-first) — no `sw.js` bump.

## 0.44.0 — 2026-06-03

### Theme 1 pedagogy sweep · PR A — Foundations & Markets (1.1, 1.2)

First of three PRs implementing the final Theme 1 pedagogy review. Eight
topics touched:

- **Positive & Normative (1.1.2):** Card 2 — replaced the generic minimum
  wage / carbon tax pair with UK-anchored debates (National Living Wage
  £11.44/hr 2024 with OBR 20–50k jobs estimate; net-zero by 2050 with CCC
  cost estimates).
- **The Economic Problem (1.1.3):** Card 2 — replaced abstract
  sustainability branches with a UK case (North Sea oil decline 2.9m → 0.7m
  barrels/day; offshore wind 1GW → 14.7GW; CfD strike prices −70%).
- **Production Possibility Frontiers (1.1.4):** swapped Cards 5 ↔ 6 so the
  concrete consumer-vs-capital trade-off comes before the abstract shifts
  card; added the China 9.5%/year vs UK 2.3%/year growth stat in the A→B
  analysis; added a closing meta-line in Card 7 on why the PPF is uniquely
  dense among intro models.
- **Rational Decision Making (1.2.1):** reframed Card 1 lede to lead with
  the two spec assumptions (consumers max utility, firms max profit); moved
  the "rationality is a simplifying assumption" caveat to examEdge so it
  sets up Behavioural rather than hedging upfront.
- **Demand (1.2.2):** added a tipLate after Card 2's three reasons pinning
  diminishing marginal utility as *the* foundational reason (spec
  requirement); Card 6 examEdge now distinguishes shift-mechanism (here)
  from elasticity magnitude (next topic); Card 8 examEdge adds the Level
  3→4 knock-on-effects move.
- **Supply (1.2.4):** Card 5 — added 2022 UK gas crisis (5× price spike) as
  a textbook supply shock; Card 6 examEdge now links cost-driven shifts to
  the short-run/long-run timing distinction in 1.2.5.
- **Price Determination (1.2.6):** Card 4 — added a clean 2×2 "four cases
  at a glance" matrix (D↑S↑, D↑S↓, D↓S↑, D↓S↓ with one-line verdicts)
  before the existing real-world examples; Card 6 examEdge adds UK housing
  shortfall (180k built vs 300k formed → +75% prices to 2022).
- **Behavioural Economics (1.2.10):** Card 4 — added "Habitual behaviour"
  to keyTerms, anchoring Edexcel's middle reason for irrational consumer
  behaviour explicitly to the bounded-self-control card.

Data only (network-first) — no `sw.js` bump.

## 0.43.6 — 2026-06-03

### Remove Environmental Economics — not a standalone spec point

Removed the parked "Environmental Economics" topic (registry entry +
`js/data/edexcel_a/theme-1/environmental-economics/`). It wasn't a distinct
spec sub-section on any board — its Edexcel A mapping (`1.4.1`) is Government
Intervention and its AQA mapping (`4.1.8.4`) is Externalities. The
exam-relevant content (carbon tax, cap-and-trade, climate as market failure)
is already covered by Negative Externalities, Indirect Taxes & Subsidies and
Government Intervention; the rest (sustainability, growth-vs-environment,
international agreements) belongs to Theme 2 macro and Theme 4. Learn-It-only
and unlinked, so nothing breaks. Build now emits 655 per-route files and an
88-URL sitemap (down from 663 / 89). Data + registry only (network-first) —
no `sw.js` bump.

## 0.43.5 — 2026-06-03

### Government Failure Card 7 — five solutions: columns → numbered rows

The "Five institutional solutions" rendered as `tinted-flat` column tiles,
which left an orphan on the last row (5 doesn't divide evenly). Switched to
the `numbered-rows` style with `causesCols: 1` — full-width stacked rows,
each with a numbered circle, the item icon, a tone-coloured left bar, and
head/body. Same elegant treatment used for other 5-item lists; no orphan.
Data only (network-first) — no `sw.js` bump.

## 0.43.4 — 2026-06-03

### Government Failure Card 3 — regulatory-capture diagram: good → great

Three fixes to the regulatory-capture explorer:

- **Standard-formatted title.** The centred serif-bold per-stage title inside
  the SVG is replaced by a proper section-label heading above the diagram
  (genSecLabel style — left-aligned, uppercase, letter-spaced, emoji + rule),
  swapped per stage via the existing `.show-stageN` CSS (new `.rc-head`).
- **Breathing room / no clash.** Removing the in-SVG title frees the top, and
  the stage-4 capture arc + label were re-laid so the dashed arrow no longer
  strikes through "Industry now controls the regulator" (was overlapping the
  arc apex). Doubled "REGULATORY CAPTURE / Industry controls the regulator"
  collapsed to one clear line above the arc.
- **De-duplicated content.** Removed the "Two mechanisms" tiles (Revolving
  door + Information asymmetry) below the diagram — stages 2 and 3 of the
  explorer already teach exactly those, so the tiles were a verbatim repeat.
  Kept the real-world examples (Ofgem, SEC/2008, FDA/opioids) and exam edge.

`app.js` + `styles.css` changed → `sw.js` bumped to `econos-v322`.

## 0.43.3 — 2026-06-03

### Taxes & Subsidies as Policy Tools — Card 2: five case studies → 2×2 of four

Trimmed the case-study card from five to four and laid them out as a 2×2
matrix (`causesCols: 2`) — two taxes on the top row, two subsidies on the
bottom, reinforcing Card 1's tax-vs-subsidy framing. Dropped Fuel duty
(it overlapped Tobacco as a regressive sin-tax on an inelastic good); kept
Sugar Levy (elastic producer reformulation), Tobacco duty (clean
effectiveness story + regressive-incidence/progressive-health nuance), EU
CAP and UK Contracts for Difference. Updated the title, tip and the
effectiveness note (which had referenced fuel duty). Data only
(network-first) — no `sw.js` bump.

## 0.43.2 — 2026-06-03

### Taxes & Subsidies as Policy Tools — Card 1 flow → vs comparison

The opening card compared a Pigouvian tax against a merit-good subsidy using a
*sequential-flow* strip, which wrongly implies one step leads to the next.
They're two parallel, contrasting tools, so this is a *Side-by-side pair*.
Swapped the flow for a `comparison` block with a centred **VS** badge: tax
(rose) "shifts supply up" vs subsidy (green) "shifts supply down", each with
its real-world examples as chips. The directional contrast is now the visual
takeaway. Data only (network-first) — no `sw.js` bump.

## 0.43.1 — 2026-06-03

### Public Goods — de-duplicate Cards 2 & 5 for pattern variety

Card 2 ("The Free Rider Problem") and Card 5 ("Why Markets Cannot Provide…")
both opened with a near-identical *sequential-flow* chain making the same
point — the market can't capture enough revenue, so it fails. Card 5 already
carried the genuinely distinct, examinable content (vertical demand
summation) underneath that duplicate flow.

Re-cast Card 5 as a *Decompose-a-diagram* card: removed the duplicate
revenue-capture flow, retitled it "Adding Up Demand for a Public Good", and
led with the private-(horizontal) vs public-(vertical) demand-summation
diagrams. The existing "private market view vs social view" comparison now
delivers the market-failure conclusion through the summation lens, so no
content is lost and the two cards no longer echo each other. Matches the
intro's existing "why markets fail (vertical demand summation)" framing.
Data only (network-first) — no `sw.js` bump.

## 0.43.0 — 2026-06-03

### Comparison table (.cmp-table) — responsive, no more clipped columns on mobile

The row/colA/colB/colC comparison table (e.g. Public Goods "Direct state
provision") was built entirely from inline styles with a fixed
`140px 1fr 1fr 1fr` grid. On narrow screens the `1fr` tracks couldn't shrink
below their content, so the table overflowed and the right-hand columns were
clipped. Refactored sitewide into a class-based `.cmp-table` component:

- **Desktop is unchanged** — same dark header row, striping, borders and
  reveal-row styling (verified pixel-for-pixel against the old markup).
- **At ≤600px each row stacks into a labelled card**: the dark header row
  hides, the row label becomes a header bar, and every cell shows its column
  header inline (`.cmp-table__key`) above the value. Nothing overflows.
- Reveal-row tables keep their tap-to-reveal hooks (`data-action`,
  `.reveal-cell`, `.is-hidden`); the reveal button moved to a
  `.cmp-table__reveal-btn` class.

Affects all 8 topics using this table. `app.js` + `styles.css` changed →
`sw.js` bumped to `econos-v321`.

## 0.42.20 — 2026-06-03

### Positive externality diagram — shorten the in-triangle label

The welfare-gain triangle is small, so the "Welfare gain" label crowded the
E* dot. Shortened it to "Gain" so it sits cleanly inside the triangle. Spec
only (network-first) — no `sw.js` bump; snapshot updated.

## 0.42.19 — 2026-06-03

### Externalities diagrams — tidy the description panel, kill the repetition

A sweep of the interactive diagram on both Negative Externalities (Card 2)
and Positive Externalities (Card 2), which shared the same three faults:

- **Right-hand description panel (the chart legend) was too long and badly
  formatted.** Each body line had been hand-split into sentence fragments
  that then *also* wrapped in the narrow column ("Marginal private cost – /
  what / the firm itself pays"). Rewritten so each entry is one complete
  short sentence that wraps cleanly, and cut from three sections per step to
  two — the old "what each curve means" section just duplicated the labels
  already drawn on the chart.
- **The analysis panel underneath repeated the legend almost verbatim** at
  every step. Rewritten as the economic *insight* for each move (why Qₘ is
  wrong, what the gap does, what the optimum costs, how the tax/subsidy
  fixes it) rather than re-describing the same coordinates.
- **Subscripts rendered as literal underscores** (`Q_m`, `P_m`, `E_market`).
  Fixed to proper subscripts (Qₘ, Pₘ, Eₘ) across both specs, the step text
  and the exam-edge lines.
- Removed the `diagramCallouts` tiles (a third restatement of output-too-
  high / DWL / MEC gap) and, on Positive Externalities, the redundant
  "what the diagram shows" `tipLate` — keeping only the genuinely additive
  production-side mirror note.

Spec + data files only (network-first) — no `sw.js` bump. Chart SVG
regression snapshots updated for both specs.

## 0.42.18 — 2026-06-03

### Fix sticky caching — "network-first" was secretly serving stale content

Two bugs made deployed changes feel like they needed a manual cache clear:

1. **The service worker's network-first fetches weren't reaching the
   network.** A bare `fetch()` inside a SW still consults the browser's
   HTTP cache, and GitHub Pages stamps `Cache-Control: max-age=600` on every
   asset (HTML, `/js/**`, `.css`). So for 10 minutes after each deploy the
   "network-first" branches returned the stale-but-unexpired copy *and
   re-cached it*. New `fetchFresh()` helper issues `fetch(request, { cache:
   'no-cache' })`, forcing revalidation against the origin on every request
   — still cheap (ETag → 304 when unchanged) but it can never serve a stale
   body. Applied to both the navigation and `/js/`+`.css` branches; the
   offline fallback is unchanged.
2. **Inconsistent SW registration.** `index.html` registered `/sw.js` with
   `updateViaCache: 'none'` but `js/sw-register.js` (used by every
   learn-it/link-it/land-it shell) did not — so on the lesson pages the
   worker script itself was served from the HTTP cache, letting a stale
   (potentially old cache-first) worker stay pinned and never migrate.
   `sw-register.js` now matches `index.html`.

`sw.js` changed → `CACHE_NAME` bumped to `econos-v320`.

## 0.42.17 — 2026-06-03

### Market Failure — reorder cards 2 ↔ 3 for a cleaner pedagogical arc

The Learn It sequence now reads define → map → mechanism → cost → diagnose:
"Three routes to market failure" moves to Step 2 (give students the map of
*why* markets fail before the machinery), and "Private vs social costs and
benefits" moves to Step 3 (the framework that explains *how* each route bites).
Swapped the two card objects, renumbered ids/stepLabels positionally, and
updated the intro `doInThis` and outcomes ordering to match. Data-only change
(network-first) — no `sw.js` bump.

## 0.42.16 — 2026-06-03

### Market Failure Card 3 — diagram title to standard section-label style

The rebuilt three-routes diagram's internal title was centred serif; changed
it to match the site's normal section-label styling — left-aligned,
uppercase, letter-spaced (`0.09em`), 11px/800, leading 🗺️ emoji and trailing
rule, mirroring `genSecLabel`. `icons.js` changed → `sw.js` bumped to
`econos-v319`.

## 0.42.15 — 2026-06-03

### Market Failure Card 3 — rebuilt "three routes" diagram to match the mockup

The old `threeRoutesDiagram` was a cramped 3-tile SVG text-dump (mismatched
colours, "Asymmetric info" naming, "What breaks?" walls of text). Rebuilt it
as a clean hub-and-spoke + comparison table, matching the supplied mockup:

- **Hub:** a "Types of market failure" title with a scales (⚖️) node fanning
  to three colour-coded tiles — **Externalities** (green, 🏭), **Public
  goods** (amber, 💡), **Information gaps** (blue, ℹ️) — each with a short
  description and an Example box.
- **Table:** Problem / What goes wrong / Typical result, one row per route,
  with a colour-matched result badge (↕ / 👥 / 📉).
- Renamed "Asymmetric info" → "Information gaps" to match the spec topic; the
  colour scheme now aligns green/amber/blue across the tiles, table, and badges.

Built as one responsive HTML block (stacks on mobile), self-titled, so the
card's redundant `diagramLabel` header was removed. `icons.js` changed →
`sw.js` cache bumped to `econos-v318`.

## 0.42.14 — 2026-06-03

### Market Failure Card 1 — chart to a side panel with a recap

Converted the `marketFailureOverview` chart from a full-width hero to a
`diagramPanel` with `layout: 'side'` (chart left, explanation right) — part
of the move away from wide charts. Added a brief four-bullet recap of what
the diagram shows, colour-matched to the curves:

- E<sub>m</sub> = MPC(S) ∩ MPB(D) — the market equilibrium
- MSC sits above MPC — the externality the market ignores
- E* (MSB = MSC) at a lower Q*
- the red DWL triangle = welfare lost over-producing Q*→Q<sub>m</sub>

A recap is worth it even though externalities come later, so the diagram
reads on its own. The side layout also shortens the card vs the old
full-width hero (panel ~280px vs ~360px); the chart is the shorter element
in the panel, so no chart-size change was needed. Data-only, no SW bump.

## 0.42.13 — 2026-06-03

### Behavioural Economics — clean up the planner/doer "vs" divider

On the bounded-self-control card's planner-vs-doer diagram
(`boundedSelfControlInteractive`), removed the dashed grey vertical divider
and the grey `vs` badge between the two cards, leaving a single clean `vs`
centred in the gap (moved to the true centre x:220, slightly larger/bolder
so it reads without the badge). `icons.js` changed → `sw.js` cache bumped to
`econos-v317`.

## 0.42.12 — 2026-06-03

### Behavioural Economics — trim the weakness-at-computation reveals

In the new 2×2 grid, the four paragraph-length reveal answers were a wall of
text. Cut each to a single punchy line — the answer (number/verdict) plus a
short clause for the "gotcha":

- ≈ £4,322 — exponential, not ~£2,500 of simple interest
- ≈ 1,355% APR — a monthly rate compounds (Wonga-era)
- The £5 is identical — 33% off £15 vs 1.25% off £400
- ≈ 30 years, £4,500 interest — most of each min payment is interest

Nothing lost: the policy hooks (APR caps, minimum-payment warning) live in the
examEdge and the three-reasons table already frames it. Data-only, no SW bump.

## 0.42.11 — 2026-06-03

### Behavioural Economics — weakness-at-computation card to a 2×2 grid

The four money-trap scenarios rendered 3 + 1 in the diagnose template's
default 3-column grid, leaving an orphan. Added an opt-in **2-column
variant** so the four form a clean 2×2 with no orphan:

- `styles.css`: new `.scenarios__grid--cols2` modifier (2 columns on
  desktop; still collapses to 1 column on mobile via the existing ≤900px
  rule).
- `app.js`: `renderCardDiagnose` emits the modifier class when a card sets
  `scenariosCols: 2`.
- The weakness-at-computation card opts in with `scenariosCols: 2`.

Reusable and opt-in — only cards that set `scenariosCols` change; every
other diagnose card keeps the 3-column default. All four examples kept.

`app.js` + `styles.css` changed → `sw.js` cache bumped to `econos-v316`.

## 0.42.10 — 2026-06-03

### Indirect Taxes Card 4 — black panel titles + ~2pt smaller fonts

Follow-up polish on the incidence chart:

- **Panel titles now black** (`titleColor: '#0F172A'`) instead of red/green,
  so "Inelastic demand" / "Elastic demand" read as headings rather than as
  extra curve labels. (The summary and burden labels stay colour-coded.)
- **Fonts ~2pt smaller.** The engine's typography is global (shared `SIZE`
  tokens with a 12px floor), so per-chart font sizes aren't possible without
  affecting every chart, and rescaling the viewBox would have re-tallened the
  chart. Instead capped the `wide` diagram's rendered width at 560px (default
  640px) — the whole chart renders ~12% smaller, taking the fonts down the
  requested ~2pt without touching the shared tokens.

Spec + data change (both network-first), no service-worker bump.

## 0.42.9 — 2026-06-03

### Indirect Taxes & Subsidies Card 4 — shorter incidence chart, no divider

The elasticity-incidence chart (`elasticityIncidenceInteractive`) felt too
tall against the card staging — the panels were portrait (180w × 230h).
Trimmed:

- Panel height 230 → 168, canvas 300 → 232 — a less-tall, more balanced
  aspect.
- Removed the dashed grey centre divider; the 35px gap between panels
  separates them on its own.
- The shorter height pushed the elastic panel's Pc/Qt y-ticks within 14px
  of P₀ (elastic demand → small consumer burden, so Pc ≈ P₀), so those two
  ticks were dropped — exactly as the inelastic panel already does. The
  "Producer burden" rectangle and the Pp dashed line carry the post-tax
  position; P₀/Q₀ stay labelled.

Design unchanged otherwise (the "old-school" supply-shift look is kept).
Font sizes left at engine defaults pending review. Chart spec change →
snapshot updated; `sw.js` unaffected (chart specs are network-first).

## 0.42.8 — 2026-06-03

### Economic Systems — diagram parity on the free-market card (Theme 1 polish #5)

Card 3 ("How a free market works") was the only content card in the topic
without a hero diagram, while its explicit mirror — Card 4 ("How a command
economy works") — leads with the `economicCommandPlanning` visual. Added
the existing `priceMechanismFlow` diagram (central PRICE node → signalling /
incentives / rationing) as Card 3's hero. It gives the free-market card the
visual anchor the command card already had, and reinforces the Hayek
price-coordination point from Card 2. Reuses an existing icons.js diagram
(no new SVG), data-only, no SW bump.

This was the last of the four Theme 1 polish items (#5 diagram parity,
#6 misconceptions block, #7 worked MUP case, #8 government-failure causes).
Combined with the three spec-gap cards and the bug fixes earlier in the
0.42 line, the Theme 1 review backlog is now fully cleared.

## 0.42.7 — 2026-06-03

### The Economic Problem — "three traps to avoid" misconceptions block (Theme 1 polish #6)

Added a compact misconceptions tile block to Card 1 (the basic economic
problem), mirroring the PPF topic's "common mistakes" pattern:

- **Scarcity ≠ shortage** — scarcity is the permanent wants/resources gap;
  a shortage is temporary and price-clears.
- **Want ≠ need** — economics treats all wants as claims on scarce
  resources; "need" is a normative judgement.
- **Opportunity cost ≠ money price** — the next-best alternative forgone
  often differs from the cash price.

Added as a block on the existing scarcity card (which already handles
scarcity ≠ poverty in its examEdge) rather than a new card, keeping the
already-long topic from growing. Default tiles, no numbering clash with the
card's triptych. Data-only, no SW bump.

## 0.42.6 — 2026-06-03

### Government Failure — align the four causes with the spec (Theme 1 polish #8)

The "Causes of government failure" card listed *information failure, political
short-termism, admin costs, unintended consequences* — but Edexcel 1.4.2(b)
names a different four: **distortion of price signals, unintended consequences,
excessive administrative costs, information gaps**. "Distortion of price
signals" — a named spec cause — was missing (political short-termism stood in
its place).

Reworked the four cause tiles to match the spec exactly:
- **Distortion of price signals** (new) — taxes/subsidies/price controls
  override the information prices carry → misallocation, a welfare loss on top
  of admin cost.
- **Unintended consequences** (kept).
- **Excessive administrative costs** — beefed up with UK numbers (Ofgem cap
  running cost, SDIL collection machinery, Universal Credit / NHS IT over-runs
  per NAO).
- **Information gaps** (kept; the Pigouvian-MEC uncertainty case).

Political short-termism wasn't lost — it moves to the examEdge as an evaluation
add-on, alongside Hayek's knowledge problem. Card 1's overview line updated to
match. Clean 2×2 tile grid (no 5-item orphan). Data-only, no SW bump.

## 0.42.5 — 2026-06-03

### Government Intervention — worked MUP case study (Theme 1 polish #7)

Minimum unit pricing was the canonical UK minimum-price case the spec
asks about, but it sat as one clause in the price-floor card's examEdge.
Added a worked `illustratedGrid` case-study block to the minimum-prices
card (matching the subsidy card's style), drawing out what makes MUP
distinct from a generic floor:

- **How it works** — a floor per *unit of alcohol* (Scotland 50p, 2018;
  Wales 2020), biting hardest on the cheapest high-strength drinks the
  heaviest price-sensitive drinkers buy, so it targets harmful
  consumption rather than the whole market.
- **The evidence** — Public Health Scotland (2023): deaths wholly
  attributable to alcohol down ~13%, off-trade sales ~3%, concentrated
  in the heaviest-purchasing households; cross-border/illicit effects small.
- **The catch** — the key exam discriminator: unlike a *tax*, the higher
  price is a **windfall to retailers, not the Treasury** (a tax would also
  fund treatment). Mildly regressive, but the burden falls on harmful
  consumption.

Added an MUP key term too. No new card or chart (the generic floor diagram
already fits). Data-only (network-first), no SW bump.

## 0.42.4 — 2026-06-03

### Government Intervention — split the overloaded tax Card 2 into two

Card 2 carried **two full interactive diagrams** (tax types + tax incidence)
in a single card — straining the staging budget and burying the
incidence/elasticity link that exam questions hammer. Split into two cards,
each with one diagram:

- **Card 2 — "Indirect taxation – specific vs ad valorem"**: keeps the
  tax-types interactive (parallel vs pivot shift), plus indirect-tax /
  specific / ad-valorem key terms and a focused exam-edge on the shift
  shapes and the inflation-erosion point.
- **Card 3 (new) — "Tax incidence – who really pays"**: takes the incidence
  interactive (Pc/Pp/£T wedge, consumer/producer burden, revenue), the
  incidence + Pigouvian key terms, and the three-evaluation-moves exam edge.

This is a **within-topic** split — the topic stays `government-intervention-in-markets`
(spec 1.4.1) throughout, so spec alignment is unaffected. Topic renumbered
10 → 11 cards. Data-only change (network-first), no service-worker bump.

Decided alongside this: **not** splitting `the-economic-problem` and **not**
re-tagging the 1.4.1 registry cluster — both would push topics away from
spec alignment (factors of production has no standalone Edexcel A
sub-section), so they were dropped. This card split is spec-neutral, which
is why it proceeded.

## 0.42.3 — 2026-06-03

### Information Gaps Card 1 — swap flow/rows formats, trim wording

Two blocks on Card 1 had their formats the wrong way round:

- **The five key areas** (symmetric/asymmetric · adverse selection · moral
  hazard · private solutions · government responses) were a horizontal
  numbered **flow chain** — but they're *parallel categories*, not a
  sequence. Now a single-column stacked-rows list (`causesStyle:
  'numbered-rows'`, `causesCols: 1`, `causesPosition: 'top'`): icons kept,
  no connecting arrows, and a single column so no "5-card orphan" in a
  multi-column grid.
- **The logic chain** (information gap → poor decisions → market failure)
  was a tile grid — but it genuinely *is* a sequence, so it's now the
  `flow` chain with arrows.

Also trimmed the wordy symmetric/asymmetric body copy down to one tight
line. Data-only change (network-first), no service-worker bump.

## 0.42.2 — 2026-06-03

### Weakness-at-computation card (Theme 1 spec gap 1.2.10a)

Third and final Theme 1 spec-gap card. `behavioural-economics` now has a
dedicated **"Weakness at computation"** card (new Card 3, predict-then-reveal).
Spec 1.2.10(a) names three reasons consumers behave irrationally — influence
of others, habit, weakness at computation. The first two were covered (social
norms in C2; habitual behaviour as a keyTerm + the commitment-device / default
examples in C4–C6) but the third was never a card.

The card opens with a table mapping all three Edexcel reasons (and where each
is covered, closing the spec-vocabulary loop), then runs four predict-then-reveal
UK money traps:
- Compound interest underestimation (£1,000 @ 5% for 30y → £4,322, not ~£2,500)
- Payday "25% a month" → ~1,355% APR (the pre-FCA Wonga case)
- % vs £ framing (£5 off £15 vs £5 off £400)
- Credit-card minimum-payment trap (~30 years, >£4,500 interest)

Each pairs the error with the UK policy response (FCA payday cap, minimum-payment
warning, total-cost-of-credit disclosure). Topic renumbered 5 → 6 cards.

**Renderer note:** the `diagnose` template requires either a `diagramKey` or a
`table` with `headers` (it builds a header row unconditionally in the no-diagram
branch) — without either it threw `Cannot read properties of undefined (reading
'headers')`. Resolved by giving the card the three-reasons table, which is
useful content rather than a workaround. Data-only change (network-first), no
service-worker bump.

This completes all three remaining Theme 1 spec-gap cards (comparative
advantage · YED/XED determinants · weakness at computation).

## 0.42.1 — 2026-06-03

### YED/XED determinants card (Theme 1 spec gap 1.2.3d)

Second Theme 1 content gap. `income-and-cross-price-elasticity` now has a
dedicated **"What determines the size of YED and XED"** card (new Card 8).
The topic previously covered what YED *reveals* (Card 4) and how to
*interpret* XED magnitude (Card 7), but never the *factors that drive* the
size of each elasticity — which is what spec 1.2.3(d) asks for.

Two tile blocks, each driver carrying a UK example:

- **YED size:** necessity vs luxury (holidays/dining vs bread/milk); income
  level & stage of development (cars: 1950s luxury → today's near-necessity);
  time horizon (habits re-base slowly → larger long-run YED).
- **XED size:** closeness of substitutes (Netflix ↔ Disney+); strength of
  complementarity (petrol & cars, printers & ink); brand loyalty / switching
  costs (Apple ecosystem lock-in weakens XED).

Framed explicitly as *determinants* (what makes the number big/small) to
stay distinct from Card 7's *interpretation* of the magnitude. Topic
renumbered 9 → 10 cards; intro / outcomes / stage count updated. Data-only
change (network-first), so no service-worker bump.

## 0.42.0 — 2026-06-03

### Comparative advantage card (Theme 1 spec gap 1.1.5c) + worked-example conclusion fix

The first of the Theme 1 content gaps from the audit. `specialisation-and-money`
now has a dedicated **comparative advantage** card (new Card 5, worked-example
walkthrough), closing spec point 1.1.5(c) which the topic previously only
gestured at via the "specialise at comparative advantage" line in Card 4.

The card walks five reveal steps on a UK-vs-China / services-vs-electronics
scenario:
1. Absolute vs comparative advantage (Ricardo's distinction)
2. Each country's opportunity costs (UK: 1 service = 0.5 electronics;
   China: 1 service = 2 electronics)
3. Comparative advantage = lowest opportunity cost (UK → services,
   China → electronics)
4. The gains: full specialisation lifts world output from 150+150 to
   200+200 with the same resources (+50 of each good)
5. Evaluation: the terms-of-trade band (0.5–2), over-specialisation risk,
   and Ricardo's deeper point that comparative advantage applies even when
   one country is absolutely more productive at everything

Numbers chosen so the worked totals are exact and both world outputs rise
cleanly; the "better at everything" case is framed as an opportunity-cost
principle (stated, not a second table) because full specialisation in that
case can lower one total. Topic renumbered 8 → 9 cards; intro/outcomes
updated.

**Renderer fix (latent bug):** `renderCardWorkedExample` interpolated
`c.conclusion` directly as a string, so the documented `{ label, text }`
object form rendered as a literal "[object Object]". This was live on the
multiplier and inflation-measurement worked-example cards. The renderer now
accepts both shapes — a plain string or `{ label, text }` (the object's
`label` overrides the default "Conclusion" heading). No data files needed
editing; all three worked-example cards now render their conclusions
correctly.

`app.js` changed → `sw.js` cache bumped to `econos-v315`.

Minor version bump (0.41 → 0.42) to mark the start of the Theme 1
content-gap build block.

## 0.41.24 — 2026-06-03

### Fix broken externality cross-links (legacy /learn/ URLs → routes API)

The two inter-topic links between the externality topics used the
pre-migration `/learn/<topic>` URL format, which 404s under the
current path-based contract — and the slugs were also stale
(`neg-externalities` / `pos-externalities` vs the real topic ids
`negative-externalities` / `positive-externalities`). Doubly broken.

Replaced the literal hrefs with `TopicLoader.routes.learn(null,
'<topic-id>')`, evaluated at data-file load time (the same API the
`stages` arrays in these files already use). The links now render as
`/edexcel_a/theme-1/positive-externalities/learn-it` — correct
format, correct slug, and board-portable (the route derives board +
theme from the active board, so the same source works on every
board). Both confirmed 200.

This was the only legacy `/learn/` pattern left in the data files
(swept all of `js/data/`), so the cross-link bug class is now closed
and adding further cross-references is unblocked.

## 0.41.23 — 2026-06-03

### PED card — unitary synonym + fix the five/six determinant mismatch

Theme 1 improvement programme, Tier 1 (mechanical). The PED topic
named "unit elastic" but never the exam-board synonym "unitary", and
the determinant count was internally inconsistent:

- Topic intro tip now reads "unit elastic (also called unitary — the
  term Edexcel uses)".
- Card 5 ("What makes demand elastic?") intro said "Five forces decide
  it" while the `pedDriversHub` diagram on the same card shows **six**
  (close substitutes, necessity vs luxury, share of income, time to
  adjust, habit & addiction, brand loyalty). Intro now says six and
  names all of them, so a text-only read enumerates the drivers before
  the vignettes apply them.
- Card 8 toolkit determinants tile listed only five (omitted brand
  loyalty); now lists all six to match.

Note: several other "quick wins" from the Theme 1 audit were
investigated and deliberately NOT shipped in this batch —
`topicNum` is a dormant field (not displayed anywhere, so its `3.x`
values aren't a visible bug); the DMU "duplication" is a defensible
forward-reference + full-treatment split, not redundancy; and the
1.3→1.4 cross-link task surfaced a pre-existing broken-link bug
(legacy `/learn/<topic>` URLs 404 under the path-based contract).
Those are carried into the planning doc rather than shipped blind.

## 0.41.22 — 2026-06-03

### Information gaps Card 1 — symmetric vs asymmetric spec wording fix

Theme 1 audit (gap #2) called this out: the spec for 1.3.4(a) asks
for **symmetric vs asymmetric** information, but Card 1's flow lead
tile contrasted *imperfect vs asymmetric* — right economics, wrong
spec language. The word *symmetric* didn't appear anywhere in the
topic.

Two targeted edits to `info_gaps_1`:

- Flow tile retitled "Symmetric vs asymmetric information". New
  sub-text: symmetric = textbook competitive benchmark; asymmetric =
  failure case where one party knows more. Keeps *imperfect* as a
  parenthetical aside ("a separate idea") so the v0.7 content isn't
  lost, but the spec frame is now front and centre.
- examEdge now explicitly tells students "Edexcel asks for symmetric
  vs asymmetric specifically" — closes the marks-on-exact-wording
  hole the audit identified.

## 0.41.21 — 2026-06-03

### Information gaps — Akerlof lemons card promoted to full case study

User asked whether the Akerlof case study still existed (suspected it
had been lost in earlier refactors). The 5-stage lemons flow + worked
example was present, but a richer version had lived in the original
`link-extract.js` (Read-the-Extract station) before the v0.7 data
restructure flattened Link It into a single chain. That richer
version cited Akerlof 1970 directly and walked through a UK FCA
motor-insurance case with specific data.

Brought the lost depth back into the existing `info_gaps_2` card:

- **Tip box** now attributes the 1970 paper and the 2001 Nobel Prize
  directly, so the card opens with the economist not just the example
- **New "Case study — UK motor insurance (FCA, 2022)" panel** replaces
  the three thin one-line "other markets" bullets:
  - hidden risk before contract
  - the **FCA's 12% inaccurate-information finding**
  - the lemons spiral in insurance (premiums rise → low-risk drivers
    exit → pool gets riskier → repeat)
- **Worked example footer** now explicitly continues the spiral
  ("as buyers learn this, average expected quality falls again")
- **examEdge** retitled "foundational example of adverse selection",
  uses *before-contract* framing as the discriminator and signposts
  forward to Card 4 (moral hazard) so the topic structure is explicit

No spec content was lost — the credit-markets and MBS examples are
now in the examEdge prose rather than as parallel bullets, freeing
the case-study panel for one deep UK example (the FCA 12% figure) per
the universal pedagogy rule "concrete UK data beats generic bullets".

## 0.41.20 — 2026-06-03

### Single-entry legend sweep: strip redundant titleStrips

User rule, stated in this round of feedback:

> When there is only one colour/dot reference in a legend, it is
> always redundant.

A `titleStrip` in this engine is literally that: a single coloured
dot followed by text, sitting above the chart. Each strip is a
one-entry "legend" by definition. Per the universal rule, they all
come out.

Two specs in the codebase used `titleStrips`:
- `neg-externality-interactive.js` — 4 per-view headers stripped
- `pos-externality-interactive.js` — 4 per-view headers stripped

The text those strips carried ("Free market equilibrium: MPC = MSB",
"Production imposes external costs → MSC sits above MPC", etc.) all
duplicated the card lede / body — no information is lost.

The wider `legends` blocks (right-side / below-chart panels with
multiple sections) are kept for now — those are multi-entry text
panels, not single-entry legends, and need a separate pass.

`sw.js` cache bumped to `econos-v314`.

## 0.41.19 — 2026-06-03

### Forensic audit of market-failure topic — fix label imprecision

User asked for a full audit of the market-failure charts checking
whether all the auto-placer rules were being applied consistently and
flagging "imprecision" — equilibrium labels "hovering a little high"
above their dots. Audit identified two root causes:

**Point-label legacy `labelDy: -4`**

Ten point-label declarations across the three market-failure specs
(private-vs-social.js, market-failure-overview.js,
welfare-loss-diagram.js) carried `labelDy: -4`. The engine now sets
`dominant-baseline="middle"` on point-label text, so `labelDy: 0` is
what aligns the label's vertical centre with the dot's centre — the
`-4` was a legacy lift from before the middle-baseline was added,
and it now puts every E*/E_m label ~4px above where the eye expects.
Updated all ten to `labelDy: 0`.

**Curve labels were missing `dominant-baseline="middle"`**

The same fix needed in the curve-label rendering path. Without the
middle baseline, the SVG `y` attribute is the text baseline, so
visible text sits ~5px above where `chooseCurveLabelPosition`'s
bbox math placed it. That ~5px gap is exactly the "imprecision" the
user spotted. Added `dominant-baseline="middle"` to `renderCurve`'s
label `<text>` so rendered position matches the auto-placer's
intended position.

After both fixes, every label in the three market-failure charts
sits where the rules say it should: E*/E_m vertically aligned with
their dots; MPC/MSC and MPB/MSB on opposite vertical sides per the
parallel-pair rule; titles black/bold; DWL at each triangle's
centroid.

`sw.js` cache bumped to `econos-v313`.

## 0.41.18 — 2026-06-03

### Auto-placer + market-failure suite: forensic-feedback sweep

User forensic feedback across four charts in a row (private-vs-social
neg + pos, market-failure-overview, welfare-loss-diagram neg + pos).
Common rules extracted and folded into the engine:

**Engine — `chooseCurveLabelPosition`**

- **Asymmetric base offsets** for ABOVE vs BELOW. ABOVE uses
  `baseOffsetAbove = 6` (label sits close to the curve at the
  endpoint); BELOW uses `baseOffsetBelow = 18` (further from the
  curve, since the curve approaches the label from above as we walk
  back along the path). Matches user feedback: "MSC closer to curve,
  MPC further".
- **Approach-direction-aware slope clearance.** Whichever side the
  curve walks back toward gets the slope clearance, the other side
  uses the base offset. Supply-like curves (penult below endpoint)
  → BELOW gets clearance, ABOVE is free. Demand-like (penult above)
  → ABOVE gets clearance, BELOW is free. My v0.41.17 first cut
  hard-coded "BELOW only" which broke MSB (a demand curve whose
  ABOVE bbox had the curve passing through it).
- **Approach distance = 2×halfW** (not halfW). Candidates that get
  shifted inward to fit the chart extend further from the endpoint
  than their nominal half-width — so the slope clearance must cover
  the worst case. Without this, MSB's auto-placed ABOVE still had
  the curve crossing the shifted bbox.
- **Same-side rule scoped to actually-parallel endpoints.** Skip the
  same-side / opposite-side rules when endpoint dy > 25px — MPB and
  MSB have endpoints 38px apart vertically and don't conflict the
  way MPC and MSC (same y) do.

**Engine — panel rendering**

- New `panel.titleColor` override. Use to keep a panel title bold +
  black even when the panel theme would otherwise tone it (red,
  green, etc) — so the title doesn't read as a stray curve label
  competing for the eye.

**Spec rollout — `private-vs-social.js`**

- Both panel titles now `titleColor: '#0F172A'` (bold/black).
- All curve labels stripped of manual `labelDx`/`labelDy`/`anchor`.
- Positive-externality `E_m` label flipped to `labelDx: -10, anchor:
  'end'` (left of dot) so it doesn't crash into `E*` which sits at
  Q* > Q_m.

**Spec rollout — `market-failure-overview.js`**

- All three curves (`MPB = D`, `MPC = S`, `MSC`) stripped of manual
  placement.
- DWL label moved to the triangle's centroid `(0.487, 0.568)` — was
  hand-set at `(0.495, 0.595)` which sat too low.

**Spec rollout — `welfare-loss-diagram.js`**

- Both panel titles `titleColor: '#0F172A'`.
- All curves auto-placed (both panels).
- DWL labels at each triangle's centroid: `(0.487, 0.568)` for the
  over-production panel, `(0.549, 0.554)` for the under-production
  panel.

`sw.js` cache bumped to `econos-v312`.

## 0.41.17 — 2026-06-03

### Auto-placer: opposite-side rule for parallel curves + E_m flip

User: "MSC should be above with MPC below. Perhaps defaulting to a
few more points away from the line in each. Hope this is helping your
logic (humans need as much distinction as possible)".

Two more rules + a bump:

- **Opposite-side rule.** When a curve's label-candidate is ABOVE or
  BELOW, scan already-placed curve labels. If any has its endpoint
  within 80px AND was placed on the SAME side, add a 350 penalty.
  Additionally, if the nearby label is on the OPPOSITE vertical
  side, GRANT a −300 bonus to this candidate — without the bonus,
  the penalised candidate would just lose to LEFT or RIGHT rather
  than being pushed to the opposite vertical slot. Textbook
  convention: parallel pairs like MPC/MSC and MPB/MSB sit on
  OPPOSITE sides for maximum distinction.

- **Default offset bumped 10 → 14.** Labels float a couple of
  label-widths further off the line by default. Slope-aware
  adjustment still raises this when the line is steep.

`private-vs-social.js` now reads exactly as the user described:
MSC ABOVE the dashed red line at the top of the negative-externality
panel, MPC BELOW inside the chart, MPB ABOVE in the lower-right.
Symmetric outcome in the positive-externality panel (MSB picks
CENTER, MPB and MPC on opposite vertical sides).

E_m label in the right panel flipped from `labelDx: -10, anchor:
'end'` (left of dot) to `labelDx: 10, anchor: 'start'` (right of dot)
to match the left panel and the user's preference.

`sw.js` cache bumped to `econos-v311`.

## 0.41.16 — 2026-06-03

### Auto-placer fixes: interior-direction bias + slope-aware offset

User asked why the v0.41.15 logic was putting the MPC label above the
curve when below was clearly better. Three issues with the first pass:

1. **No interior-direction bias.** All four cardinal candidates tied
   at cost 0 for typical supply/demand layouts; ties fell through to
   the first-listed candidate (LEFT). Added a bias: for an endpoint in
   the UPPER half of the chart prefer BELOW (push label into the open
   chart body); for a LOWER-half endpoint prefer ABOVE. Symmetric
   horizontal bias for endpoints near the right/left edges.

2. **Out-of-bounds disqualified useful slots.** BELOW for MPC ended
   3.6px past the right panel edge — my 1000+ overflow penalty killed
   it even though shifting left 4px would make it fit. Added a shift
   step: when overflow is smaller than the label dimension, slide the
   candidate INWARD and re-evaluate.

3. **Fixed 10px offset wasn't enough for sloped curves.** With a
   straight supply curve, the line RISES from the endpoint as the
   label extends sideways — so a 10px below-the-endpoint offset put
   the curve through the bottom edge of the label. Now the engine
   computes the curve's slope from the last two samples and sizes the
   vertical offset to `max(10, slope × halfWidth + 4)` — the label
   always clears the line by at least 4px.

`private-vs-social.js` is fully auto-placed (all six curve labels
stripped of manual `labelDx`/`labelDy`/`anchor`). Both panels read
cleanly: MPC and MSC sit below their endpoints in the upper area, MPB
sits above its endpoint in the lower area, MSB picks its own slot.

`sw.js` cache bumped to `econos-v310`.

## 0.41.15 — 2026-06-03

### Curve-label auto-placer in the chart engine

User feedback after v0.41.14: "It's interesting that you think it's
better, when it's clearly not. All you need to do each time, is place
a label in four places (left, right, up or down) and then pick the
best. How are we going to solve this frustrating universal problem
once and for all" — followed by a note that DWL-style central
placement makes 5 candidates total.

So that's now in the engine. `chooseCurveLabelPosition` in `ppf.js`
evaluates **five** candidate positions for every curve label that
isn't pinned with explicit `labelDx` + `labelDy`:

| Candidate | Where it puts the label |
|-----------|------------------------|
| **right**  | endpoint + 10px to the right, anchor='start' |
| **left**   | endpoint − 10px to the left, anchor='end' |
| **above**  | endpoint − 10px − halfH, centered horizontally |
| **below**  | endpoint + 10px + halfH, centered horizontally |
| **center** | curve midpoint − 10px − halfH, centered (DWL slot) |

Each candidate is scored on:
- **Out-of-bounds** — 1000 + overflow distance (always disqualifying)
- **Curve overlap** — 100 per curve sample inside the bbox (label
  sits on the line)
- **Other-label overlap** — 500 per intersecting bbox
- **Proximity** — graduated penalty for labels within 14px of any
  edge (the case that motivated this — MSC and MPC bboxes didn't
  quite intersect but were visually stacked)

Lowest cost wins. Used in `renderCurve` when `curve.labelDx` and
`curve.labelDy` are both unset. Explicit values still win when set —
this is opt-in, not a forced rewrite of existing specs.

**First spec on the new system**: `private-vs-social.js` MSC label.
With its labelDx/labelDy removed, the auto-placer picks CENTER (the
curve midpoint, well clear of the MPC label that the old
endpoint-anchored placement was crashing into).

Future: roll out by removing manual labelDx/labelDy from specs that
the audit script (`scripts/audit-labels.mjs`) still flags. Manual
overrides remain available for the rare case where the author needs
a specific position.

`sw.js` cache bumped to `econos-v309`.

## 0.41.14 — 2026-06-03

### Sweep label-to-curve placement using the new audit script

User flagged that the MSC label in `private-vs-social` sat far from
the actual line, and asked for a systematic review of label placement
across every chart instead of one-at-a-time fixes. Built
`scripts/audit-labels.mjs` which samples each curve at 40 points and
measures pixel-distance from the curve to each label centre, plus a
distance-to-nearest-other-label "ambiguous" check. The first pass
found 19 labels >28px from their own curve.

This release works through them, taking the audit number from **19
findings down to 8**:

**Long labels shortened** — the label CENTRE was the actual culprit
on these because anchor='end' with a label this wide pushed the
midpoint well inside the chart:
- `tax-types-interactive`: "S + T (specific)" → "S + T", "S + T%
  (ad valorem)" → "S + T%". The two views are `layerMode: 'exclusive'`
  so the parenthetical is carried by the view title, not the label.
- `ppf-classify`: "Efficient frontier" → "PPF". The classification
  is now carried entirely by the region shadings (amber/green).
- `actual-vs-potential-growth`: "Actual GDP" / "Potential GDP" →
  "Actual" / "Potential". The y-axis "Real GDP" already establishes
  what's plotted.

**Curve trimmed to chart edge** — three specs had supply/demand
lines extending to chart x=1.153 (auto-clipped) but the label was
positioned relative to the un-clipped endpoint, so its centre sat
~46px from the visible end:
- `ad-demand-pull-interactive`, `ad-shift-interactive`: AD₂ curve
  trimmed to `L 1.000,0.218`. Label now anchors at the visible end.
- `sras-right-shift-interactive`: SRAS₂ curve trimmed to `L 1.000,0.743`.

**anchor='end' + bigger labelDx** for wide labels that need to stay
near their curve's endpoint:
- `consumption-function`: "C = a + bY" repositioned.
- `pos-externality-interactive`: "D = MPB", "MPC = MSC".
- `neg-externality-interactive`: "D = MSB".
- `market-failure-overview`, `welfare-loss-diagram`: "MPB = D",
  "MPC = S" (where it didn't create a clash with MSC).
- `models-supply-demand`: "Demand", "Supply".

**User-flagged MSC adjacency** in `private-vs-social.js`: the MSC
label sat at the curve's upper-right endpoint, visually stacked next
to the MPC label. Moved to anchor='end' / labelDy=14 so it sits
inline on the MSC line at chart-x≈0.72 — clearly separated from MPC.

8 remaining findings (30–43px range) are borderline-acceptable in
the supply/demand family — pushing them further risked introducing
clashes with axis ticks or other curve labels (the
`actual-vs-potential` "Actual" ↔ "Tech" clash hit and reverted on
the way through). Future work: rotated inline labels via `texts`
field as a per-spec opt-in.

`sw.js` cache bumped to `econos-v308`.

## 0.41.13 — 2026-06-03

### Chart-engine sweep: clear the 9 label issues v0.41.11 surfaced

The new curve-label tracking in v0.41.11 flagged 9 pre-existing label
problems. This release works through all of them so `lint:charts`
reports **0 known issues** for the first time since the dev-mode checks
were added.

**Curve labels pulled inside their panels** (7 fixes, all the same
pattern — labelDx tightened or anchor flipped so the text fits inside
the SVG width / panel chartArea):
- `ad-demand-pull-interactive`: AD₂ `labelDx: -22 → -32`
- `ad-shift-interactive`: AD₂ `labelDx: -22 → -32`
- `ad-movement-shift`: AD₂ `labelDx: 8 → -10, anchor: 'end'`
- `sras-right-shift-interactive`: SRAS₂ `labelDx: -22 → -32`
- `elasticity-incidence-interactive`: S `labelDx: 6 → -5, anchor: 'end',
  labelDy: -4 → -8` (fixes both panels — shared via `basePanel`).
  Right-panel D `labelDx: 6 → -5, anchor: 'end', labelDy: 4 → 12`.

**Engine fix — propagate `layer`/`perspective` to curve-label bboxes.**
Two of the 9 findings were false-positive label clashes: SRPC₂ ↔ SRPC₃
in `stagflation-phillips` and S+T(specific) ↔ S+T%(ad valorem) in
`tax-types-interactive`. Both pairs live in `layerMode: 'exclusive'`
sibling layers and never co-display, but my v0.41.11 curve-label
tracking didn't carry the curve's `layer` field onto the bbox — so
the clash detector's "skip if different layers" rule couldn't apply
to curve labels. Fixed by setting `cbox.layer = curve.layer` (and the
matching `perspective` field) at curve-bbox-registration time. The
two pairs now correctly skip.

`KNOWN_ISSUES` in `scripts/lint-charts.mjs` is empty as of this release.

`sw.js` cache bumped to `econos-v307`.

## 0.41.12 — 2026-06-03

### PPF Cards 1 and 2 — distinct stories instead of the same diagram twice

User flagged that cards 1 and 2 were running the same A/B/C-on-a-PPF
diagram with slightly different point text. Redrew both so each tells
a genuinely different story:

**Card 1 — "What a PPF shows"** (ppfBigPicture)
- Frontier is now a **boundary** between two shaded zones.
- Light-blue feasible region under the curve, labelled "Feasible
  production"; un-shaded upper-right region labelled "Beyond current
  resources".
- One anchor point on the curve labelled "On the frontier" — the
  classification is no longer this card's job.
- Data-file bullets rewritten to describe the curve + the two regions,
  not three A/B/C points.

**Card 2 — "Classify the point"** (ppfClassify)
- The two regions are now visually distinct: **amber tint under the
  curve** (= underused) and **green tint above the curve** (=
  unattainable). The blue curve itself becomes the "efficient frontier".
- Three A/B/C points sit in their respective regions as classification
  examples.

Both polygons are built from 12 sampled points along the PPF cubic
so the curved boundary reads smoothly.

`sw.js` cache bumped to `econos-v306`.

## 0.41.11 — 2026-06-03

### PPF Card 5 (shifts trio) — PPF₂ labels pulled inside their panels + engine catches this kind of bug

User flagged the PPF₂ labels in the trio panels clashing/clipping against
the curves and the panel edges. The default offset (`labelDx: -4`)
placed the label start ~4 pixels left of the curve endpoint, but the
text extended right by ~30 pixels and overflowed the 170-pixel panel by
12–17px in the outward and biased panels (the inward panel's PPF₂
endpoint sat far enough left that its label fit).

**Spec fix.** Tightened `labelDx: -4` → `labelDx: -34` for PPF₂ in
`ppf-shifts-trio.js` — text now sits fully inside each panel with
clear separation from PPF₁.

**Engine fix (why the existing check missed it).** Two structural gaps
in the dev-mode label checks:

1. **Curve labels weren't tracked in `placedBoxes`.** `renderText`
   tracked text-element bboxes for the clash and off-stage checks, but
   `renderCurve` emitted curve labels as a separate `<text>` and never
   added them to the registry. Any overflow or clash involving a
   curve label was silent. Fixed by tracking curve-label bboxes too.
2. **The off-stage check used the SVG viewBox bounds, not the panel's
   chartArea.** In multi-panel charts, a label spilling out of its
   panel into the next panel's territory still stays inside the SVG,
   so the check passed. Fixed by carrying the panel's `chartArea` on
   each curve-label bbox and using it as the right/left bound when set.

Running lint after these engine changes surfaced **9 pre-existing
issues** the engine had been missing: PPF₂ overflows in the trio
(now fixed), AD₂ overflows in three AD-shift charts, SRAS₂ overflow
in `sras-right-shift-interactive`, S/D overflows in
`elasticity-incidence-interactive`, and two real label clashes
(`stagflation-phillips`'s SRPC₂/SRPC₃ and `tax-types-interactive`'s
specific/ad-valorem labels). The 8 non-trio findings are recorded in
`scripts/lint-charts.mjs` as a `KNOWN_ISSUES` allowlist so the new
engine checks stay strict for future regressions while these tracked
items get worked through one chart at a time. New chart bugs **must
not** be added to that list without a fix plan.

`sw.js` cache bumped to `econos-v305`.

## 0.41.10 — 2026-06-03

### PPF Card 3 — A, B, C labels moved directly below their dots

Previously A's label sat right-of-dot and B/C's labels sat upper-left
(to dodge the arrowheads that approach from below-right). Consistency
trumps individual offsets: all three labels now sit **directly below
their dots** (`anchor: 'middle'`, `labelDx: 0`, `labelDy: +18px`).

Because the A→B and B→C arrows arc outside the PPF (away from origin,
i.e. up-and-right), the area below each dot is clear — no clash
between labels and arrowheads. Verified visually across both views.

`sw.js` cache bumped to `econos-v304`.

## 0.41.9 — 2026-06-03

### PPF Card 6 (UK / Jamland) — narrative button labels

Replaced the four interactive-diagram view labels — which described
the mechanics ("PPF₂: B → C", "C → D along PPF₂") rather than the
story — with the four beats of the Jamland investment trade-off:

- **Three countries, one PPF** — the comparison hook (UK / Germany / China)
- **Less jam today** — the sacrifice (A → B along PPF₁)
- **The frontier grows** — the pay-off (PPF₁ → PPF₂, B → C)
- **More jam tomorrow** — the new equilibrium (C → D on PPF₂)

The "jam" framing ties back to the card's lede ("the Jamland story").
Data-only change — no `sw.js` bump needed (topic data files are
network-first).

## 0.41.8 — 2026-06-03

### PPF Card 5 (shifts trio) — bias-shift arrow moved off the top-left

The outward and inward panels in `ppfShiftsTrio` use symmetric quarter-
arcs and read fine with the arrow anchored at `t = 0.5` (PPF₁ midpoint).
The biased panel is asymmetric — PPF₂ stretches further along x than y —
so at t=0.5 the two curves are still close to the top-left corner and
the perpendicular arrow has only ~0.11 chart-units of room, leaving the
arrowhead crowded against the curve.

Parameterised the `panel()` builder to accept a per-panel `arrowT` and
set the biased panel to **t = 0.7** — anchor (0.55, 0.28) on PPF₁,
hitting PPF₂ at (0.70, 0.36). Arrow length grows from 0.110 to 0.175
chart-units (~60% longer) and the arrowhead now sits in the open space
between the diverging curves rather than overlapping the steep section.

Verified numerically (ray-cubic intersection probe) before rendering
and visually across all three panels.

`sw.js` cache bumped to `econos-v303`.

## 0.41.7 — 2026-06-03

### PPF Card 4 — OC badges aligned directly under their start dots

Two follow-on fixes after user feedback that the v0.41.6 badges were
still "badly placed":

- Each badge is now positioned with `labelDx = 0` and a small negative
  `labelDy` — sitting **directly below its trade's start dot at the
  same x-coordinate**. The green/blue/rose dot owns the green/blue/rose
  label vertically beneath it, removing the visual ambiguity of
  badges floating off to one side.
- Added a numerical pre-check (`tmp/badge-check.mjs`-style probe) used
  while iterating: for each badge, sample the curve at 20 points across
  the badge's x-range and refuse to ship if any sample falls inside the
  badge box. Catches the curve-clash bugs that the eye misses on small
  screens.

Also captured the lessons from the multi-round PPF Card 4 saga in
`CLAUDE.md` under "Charts & diagrams — non-negotiable rules" so the
same iterations don't have to happen again on the next chart:
quarter-arc Bezier as the default bowed shape, `findTAtX`
endpoint-rejection workaround, label-position numerical pre-check,
and the "screenshot every view AND critique it harshly" rule.

`sw.js` cache bumped to `econos-v302`.

## 0.41.6 — 2026-06-03

### PPF Card 4 — labels off the curve, stage taller for axis breathing room

Polish on v0.41.5. The auto-positioned OC badges sat above-left of
each trade's start dot — the default placement that works for a
flat-then-steep curve but, on the new quarter-circle, dragged the
badge through the curve itself (view 3) or off the top of the chart
area (view 1).

- Added `labelDx` / `labelDy` (chart-unit) overrides to the
  `ocTriangle` helper in `js/charts/ppf.js`. When present, the badge
  is centred on `(start.x + labelDx, start.y + labelDy)` instead of
  the auto upper-left. Backward-compatible: existing specs that don't
  set the fields are unaffected.
- Each trade's badge nudged into the consumable region (below the
  curve), forming a diagonal cheap → even → costly arrangement that
  reads cleanly when view 3 shows all three at once.
- Stage enlarged from 440×300 → **460×350**, chartArea from 340×238
  → **360×270**. Top / bottom / right margins all grow so the axis
  titles ("Consumer goods" above the y-arrow, "Capital goods" below
  the x-arrow) and the curve-end "PPF" label no longer crowd the
  chart corners.

`sw.js` cache bumped to `econos-v301`.

## 0.41.5 — 2026-06-03

### PPF Card 4 — canonical quarter-circle curve, OC 1/3 → 1 → 3

User flagged that the v0.41.4 curve still didn't look like a proper
PPF — the textbook shape is closer to a quarter-arc of a circle,
smoothly bowed throughout. Swapped to the canonical cubic-Bezier
approximation `M 0,1 C 0.5523,1 1,0.5523 1,0` (the magic constant
is 4(√2−1)/3 — the standard quarter-arc approximation used in every
vector graphics library). In 0..10 chart units the curve satisfies
x² + y² ≈ 100 to four decimal places everywhere.

The quarter-circle's geometry gives beautifully clean trade values
at integer x positions:

- **View 1 — Cheap** (green, OC ≈ 1/3): capital 2 → 4, consumer 9.8 → 9.2.
- **View 2 — Even** (blue, OC = 1): capital 6 → 8, consumer 8.0 → 6.0 — exact.
- **View 3 — Costly** (rose, OC ≈ 3): capital 8 → ~10, consumer 6.0 → ~0.

OC values form a perfect **3× geometric progression**: 1/3 → 1 → 3.
Triangle heights ratio 1 : 3 : 9 — the increasing-OC story is now
visually overwhelming. View 3's vertical sacrifice arrow runs all
the way down to the x-axis showing the brutal cost of the last few
capital goods.

Trade 3's Δx is 0.199 (not 0.200) because the engine's `findTAtX`
bounds check rejects exact-endpoint targets — `start[0]` computes
to 0.80000194 due to binary-search precision, so adding 0.2 gives
1.00000194 > 1 and the triangle is silently omitted. 0.199 keeps
the end safely inside the curve range without changing the
displayed OC.

`sw.js` cache bumped to `econos-v300`.

## 0.41.4 — 2026-06-03

### PPF Card 4 — moderate-bow curve + bigger Δx so the triangles read

Follow-up to v0.41.3. The extreme-bow curve (`M 0,1 C 0.55,1 1.0,0.05
1.0,0`) plus Δx = 1 capital good made the three opportunity-cost
triangles visually cramped — the lesson "early OC is small" became
"early OC is invisible" because the curve sat at y ≈ 1 for the first
third of the x-axis.

- **Curve** swapped to `M 0,1 C 0.7,0.9 0.9,0.3 1,0` — uniformly
  bowed rather than flat-then-steep. Every triangle along the curve
  now has visible height.
- **Δx doubled** from 1 to **2 capital goods** so each chord is large
  enough that its slope is the dominant visual.
- **Trade positions retuned** to give clean fractional OC values
  straddling the 1-for-1 anchor:
  - View 1 — Cheap (green, OC ≈ 1/3): capital 1 → 3, consumer 9.8 → 9.2.
  - View 2 — Even (blue, OC ≈ 1): capital 5 → 7, consumer 8.0 → 6.1.
  - View 3 — Costly (rose, OC ≈ 5/3): capital 7 → 9, consumer 6.1 → 2.7.
- **X-axis ticks** now appear ONLY at the capital values that matter
  (1, 3, 5, 7, 9) and reveal progressively as views are clicked —
  the axis itself tells the story. The dense 2/4/6/8 grid is gone.
- **Y-axis tick numerals dropped** — the chord slope and the badge
  carry the magnitude, and the y-values aren't clean integers anyway.
- **Card prose** updated to reference the new numbers (Δx = 2,
  fractional OCs).

`sw.js` cache bumped to `econos-v299`.

## 0.41.3 — 2026-06-03

### PPF Card 4 — redrawn from scratch around three distinct OC trades

The "Why the PPF bows out" interactive previously framed three
triangles as "Small cost / Larger cost / Even larger cost" — three
points on a rising curve but the same story told three times.
Redrawn to make each triangle tell a qualitatively **different**
trade, with the three OC values straddling 1.0:

- **View 1 — Cheap trade (green, OC ≈ 0.5)** — capital 2 → 3,
  consumer 9.6 → 9.1. You gain MORE than you give up.
- **View 2 — Even trade (blue, OC ≈ 1.0)** — capital 5 → 6,
  consumer 7.6 → 6.5. Roughly a 1-for-1 trade — the chord sits at
  about 45°.
- **View 3 — Expensive trade (rose, OC ≈ 1.5)** — capital 8 → 9,
  consumer 3.8 → 2.2. You give up MORE than you gain.

Tone progression (green → blue → rose) now maps to the
"ahead / even / behind" framing in the prose, rather than a generic
low/med/high gradient. View bodies lead with the story and a single
concrete number, not a math walkthrough.

Numeric axis ticks (2 / 4 / 6 / 8) added on both axes via the spec's
`texts` field so learners can read the consumer-good sacrifice
straight off the y-axis without mental scaling. PPF curve stretched
to span the full 0..10 / 0..10 chart so the tick numerals line up
with the curve endpoints. Axis labels renamed to "Capital goods" /
"Consumer goods" to match the methodGrid and versusList prose.

`sw.js` cache bumped to `econos-v298`.

## 0.41.2 — 2026-06-03

### PPF Card 3 — move B and C labels off the arrowhead

After fixing the arc geometry in v0.41.1, the arrowheads landed on top of
the **B** and **C** labels: both labels sat at `labelDx: 10, labelDy: -4`
(upper-right of dot), but the arrows approach each point from below-right,
so the marker triangle's body overlapped the label.

Moved B and C labels to the **upper-left** of their dots
(`labelDx: -10, labelDy: -6, anchor: 'end'`) — opposite side from the
arrow approach. A's label stays on the right (no arrow approaches A).
Verified on **both** views.

`sw.js` cache bumped to `econos-v297`.

## 0.41.1 — 2026-06-03

### PPF Card 3 — arrows properly bowed outside the curve

Follow-up to v0.40.3. The previous quadratic-bezier control points were
chosen by eye and produced arcs that only cleared the PPF by 0.0005 to
0.011 chart-units at their tightest — visually overlapping the blue
curve along most of their length, especially the B→C arrow.

Re-picked the controls by **sampling each candidate arc against the
cubic at 10 points and keeping the worst-case clearance**:
- A→B control `(0.85, 0.49)` (0.011 clearance) → `(0.91, 0.56)` (0.038)
- B→C control `(0.61, 0.74)` (0.0005 clearance) → `(0.70, 0.84)` (0.036)

Both arrows now hold a ≥0.036 chart-unit (≈12px) outward clearance
along their full length, so neither overlaps the curve at any sample.

Also — better checking protocol going forward: when an interactive
diagram has multiple views, screenshot **every** view before declaring
done. The previous fix only verified the A→B view; the B→C clash was
shipped because I didn't open the second tab.

`sw.js` cache bumped to `econos-v296`.

## 0.41.0 — 2026-06-03

### PPF Card 6 — restored the Jamland (UK vs Germany vs China) 4-stage interactive

- Reverted Card 6's chart from the 2×2 today-vs-tomorrow grid back to the
  `ppfConsumerCapital` 4-view interactive (the "Jamland" investment
  story). The four views step through:
  1. **Country positions** — UK / Germany / China on a shared PPF₁,
     driven by their investment ratios (~18% / ~22% / ~42%).
  2. **Sacrifice for growth** — UK moves A → B along PPF₁: more capital,
     fewer consumer goods now (with dashed arrow above PPF₁ + projection
     gridlines).
  3. **PPF₂ shift** — years of investment at B shift the frontier
     outward; B → C straight up gives more consumer goods at the same
     capital level.
  4. **C → D along PPF₂** — consumer-heavy again, but D delivers more
     of both goods than A ever did.
- The `ppfConsumerCapital` icon and `ppf-card4.js` spec were already
  wired through the shells from the old PR #824 — just had to swap the
  card data over and update the card 6 keytakeaway / examEdge to the
  longer investment-trajectory pedagogy.
- Also (from earlier in this session): fixed `ppfTodayTomorrow` ids and
  marker references the same way as the triptych and `ppfOppCost`
  (panel-unique ids, built-in tone markers, lower buffer for tight
  panels) — the chart isn't used by any card now but kept clean for
  reference and any future use.

`sw.js` cache bumped to `econos-v295`.

## 0.40.3 — 2026-06-03

### PPF Card 3 — side-by-side layout + clean curved arrows

- Card 3 ("Opportunity cost — moving along the frontier") was full-width
  while Cards 1 and 2 used the `diagramPanel` side-by-side layout. The
  card used the legacy `diagramKey + steps` pattern; converted it to the
  newer `interactiveDiagram { svgKey, views }` block which renders chart
  left + description right by default. The "Move A → B" / "Move B → C"
  toggle buttons now produce clear bordered description boxes beside the
  chart instead of underneath it.
- Fixed the **arrow clash with the PPF**. The original arrows drew
  straight chords from A→B and B→C, cutting through and visually
  competing with the blue curve. Replaced with quadratic-bezier arrow
  paths that arc **outside** the PPF (away from origin), so each arrow
  visibly follows the curve direction without overlapping it. Also
  switched from custom marker `defs` (which the engine doesn't collect
  for non-top-level specs) to the built-in `econos-arrow-amber` /
  `econos-arrow-rose` markers, so the arrowheads always render.

`sw.js` cache bumped to `econos-v294`.

## 0.40.2 — 2026-06-03

### PPF triptych — arrowheads now visible

- The previous fix made the shift arrows the right length but the
  **arrowheads were still invisible**. Cause: the spec authored custom
  arrow markers (`ppfs-green`, `ppfs-rose`, `ppfs-purple`) inside each
  `panel.defs`, but the engine only collects `spec.defs` (top-level) into
  the SVG `<defs>` block — panel-level defs are dropped. So
  `marker-end="url(#ppfs-green)"` referenced a non-existent marker and
  rendered nothing.
- Switched to the engine's built-in tone-named markers
  (`econos-arrow-green` / `econos-arrow-rose` / `econos-arrow-purple`)
  which are emitted automatically in every chart's defs. Removed the
  unused panel-level `defs` block. `sw.js` cache bumped to `econos-v293`.

## 0.40.1 — 2026-06-03

### PPF Card 5 — triptych shift arrows + panel titles

- Fixed the shift arrows on `ppfShiftsTrio`. The three panels declared
  curves with the same ids (`ppf1`, `ppf2`), but the chart engine merges
  every panel's curve registry into one shared lookup — so the third
  panel's `ppf2` overwrote the first two, and all three perpendicular
  arrows resolved against the BIASED PPF₂ (the third panel's curve),
  producing tiny 13px ticks instead of arrows spanning between PPF₁ and
  PPF₂. Made the ids panel-unique (`ppf1-green`, `ppf2-green`, etc.) and
  dropped the per-arrow `buffer` from 14 to 3 so the visible span isn't
  shrunk in these compact 170×175 panels. Bumped marker size 5→7 too.
- Added per-panel titles ("Outward shift" / "Inward shift" / "Biased
  shift") in each panel's tone colour, so the three cases are clearly
  differentiated rather than visually identical except by colour.
- Shortened axis labels from "Consumer goods" / "Capital goods" to
  "Consumer" / "Capital" to save space in the small panels.

`sw.js` cache bumped to `econos-v292`.

## 0.40.0 — 2026-06-02

### Market Failure charts — solved geometry, visible DWL triangles

Three of the four Market Failure charts had equilibrium points placed
by eye, so E\* drifted off the curves it was supposed to sit on. Rewrote
each spec to use the engine's intersection solver — every equilibrium is
now declared by curve identity (`point.intersection: { curves: [...] }`)
and the chart-svg-regression test asserts no drift.

- `marketFailureOverview` (Card 1) — E\_m solved at MPB ∩ MPC, E\* at
  MPB ∩ MSC. Added a visible shaded DWL triangle (was just a floating
  "Welfare loss" caption with no shape). Renamed the card section header
  from "When markets work, and when they fail" to "When markets fail"
  since the chart only shows the failing case.
- `privateVsSocialDiagram` (Card 2, twin) — both panels now have E\*
  exactly on the dashed social curve.
- `welfareLossDiagram` (Card 4, twin) — same intersection fix, plus the
  DWL polygons now use explicit fill colours at 0.35 opacity (the prior
  combo of tint+opacity multiplied to ~0.08 effective alpha, leaving
  them almost invisible). DWL labels nudged off the equilibrium markers.

Curve ids and the intersection solver mean any future drift gets caught
at build time (`node scripts/lint-charts.mjs`) rather than shipping.
`sw.js` cache bumped to `econos-v291`.

## 0.39.0 — 2026-06-02

### Chart engine — honour curve.anchor (cleanup pass)

- `renderCurve` in the chart engine now honours `curve.anchor`
  (`start` / `middle` / `end`), matching how point labels already work.
  Previously the engine silently dropped the curve-label anchor and forced
  every curve label left-anchored, so authors who set `anchor: 'end'` with
  a negative `labelDx` (the consistent convention across 24 specs) saw
  their labels extend the wrong way and often clip the right edge.
- Audited all 24 affected specs; every one had `anchor` paired with a
  consistent `labelDx` sign, so honouring it improved each one. Snapshot
  regression updated.
- **Follow-up tidy** for the four specs the audit exposed:
  - `consumption-function` — widened viewBox 560 → 640 so `C = a + bY` no
    longer clips past the right edge.
  - `market-failure-overview`, `welfare-loss-diagram`, `private-vs-social`
    (both panels) — pushed the long `MPC = S` / `MPC` labels upward
    (`labelDy: -20` instead of `-6`) so they clear the dashed `MSC` / `MSB`
    labels that share the same endpoint y. All four externalities charts
    now stack the curve labels cleanly.

`sw.js` cache bumped to `econos-v290`.

## 0.38.2 — 2026-06-02

### Indirect Taxes & Subsidies Card 4 — wide layout

- Switched the elasticity-incidence interactive to the `wide: true` layout:
  the twin inelastic/elastic chart now spans full width on top (much
  clearer than the cramped left column), and each view's description sits
  in a clean bordered box below it — with the "Analysis" subsection only
  where a view actually has deeper analysis. `sw.js` cache bumped to
  `econos-v289`.

## 0.38.1 — 2026-06-02

### Indirect Taxes & Subsidies Card 1 — un-clip the S+T curve labels

- On the tax-types interactive (`taxTypesInteractive`), the "S + T (specific)"
  and "S + T% (ad valorem)" curve labels were clipped at the right edge
  (the viewBox left only ~25px past the plot, and the engine renders curve
  labels left-anchored regardless of the spec's `anchor`). Widened the
  viewBox 440 → 520 so both labels fit, and nudged the ad-valorem label's
  `labelDy` down so it clears the top edge (its curve runs off the top of
  the plot). `sw.js` cache bumped to `econos-v288`.

## 0.38.0 — 2026-06-02

### Consumer & Producer Surplus — pedagogy pass

- **Added a worked-calculation card** (new card 3, "Calculating CS, PS and
  DWL"). The topic's stated outcome — *calculate CS, PS and deadweight
  loss* — previously had no worked example. New `worked-example` card walks
  through a linear D = 30 − 2Q / S = 6 + Q market: equilibrium → CS (£64m) →
  PS (£32m) → total surplus (£96m) → DWL (£6m) from a £6 tax, all via
  ½ × base × height. Topic is now 7 cards; step labels renumbered.
- Trimmed card 2's exam-edge to remove the now-duplicated area formula and
  signpost the new calculation card.
- **Notation consistency:** the subsidy buyer price was labelled Pᵦ on card 5
  (the interactive) but Pᶜ everywhere else (tax cards + the card-7 mini
  diagram). Standardised on **Pᶜ** (consumer) across the subsidy chart and
  its captions so the whole topic uses one symbol. `sw.js` cache bumped to
  `econos-v287`.

## 0.37.6 — 2026-06-02

### CPS Card 1 — surplus chart now a side-by-side panel

- Card 1's surplus diagram was a lonely full-width chart with no
  description beside it. Wrapped it in a side-by-side `diagramPanel`
  (`layout: 'side'`) — the fully-shaded `cpsDiagram` (identical to card 2's
  final build state) on the left, with three annotations beside it
  (consumer surplus triangle, producer surplus triangle, total surplus =
  CS + PS at E). Matches the card 5 chart-and-text pattern. `sw.js` cache
  bumped to `econos-v286`.

## 0.37.5 — 2026-06-02

### CPS Card 2 — taller build chart to match the rest of the topic

- The `cpsBuildInteractive` chart was the squashed outlier (600×320, ~1.9:1)
  next to the taller tax / subsidy / allocative charts. Reworked the spec
  to mirror the now-modernised static `cpsDiagram` exactly — 480×420, thick
  D / S curves, subtle shaded CS/PS triangles, clear E + Pₑ/Qₑ ticks —
  keeping the cumulative reveal layers so "Build it in this order" still
  steps through E → prices → surpluses. Snapshot updated. `sw.js` cache
  bumped to `econos-v285`.

## 0.37.4 — 2026-06-02

### CPS Card 5 — icon-top tiles to stop title overflow

- The "When markets miss the efficient level" tiles (Underproduction /
  Overproduction / Total surplus test) used the default icon-left layout,
  where "Total surplus test" overflowed beside the icon. Moved the block to
  the `causes3` slot with `causes3Style: 'icon-top'` so the icon sits in a
  square above a full-width title. `sw.js` cache bumped to `econos-v284`.

## 0.37.3 — 2026-06-02

### Chart-side caption text darkened from grey to black

- The description text beside / beneath charts rendered in grey (`#475569`)
  while the chart labels were near-black, hurting legibility (visible on
  Consumer & Producer Surplus cards 2–5). Darkened all chart-adjacent body
  text to the standard ink `#0B1426`:
  - `interactiveDiagram` view `body` (single + multi-perspective) — cards
    2/3/4 (build / tax / subsidy charts)
  - `diagramPanel` `intro` and non-boxed step `body` — card 5 (allocative
    efficiency) and any other diagram-panel card
- This is a first pass; a fuller site-wide grey-text audit is still open.
  `sw.js` cache bumped to `econos-v283`.

## 0.37.2 — 2026-06-02

### Consumer & Producer Surplus Card 1 — modernised the surplus diagram

- Reworked the `cpsDiagram` spec to match the polished welfareSurplusDiagram
  styling: taller aspect (480×420 vs the old flat 600×320), thicker D / S
  curves, engine-traced `welfareRegions` at a subtle 0.18 opacity (replacing
  the heavy hand-coded 0.85 polygon fills), and a clear E marker with
  Pₑ / Qₑ leaders. Kept the demand/supply labels (not MB/MC) since this is
  the market-exchange intro card. `sw.js` cache bumped to `econos-v282`.

## 0.37.1 — 2026-06-02

### Price Mechanism Card 3 — modern rationing chart

- Replaced the old static `priceRationingScarcity` diagram on "Prices as a
  rationing device" with the interactive `disequilibriumInteractive` chart
  reused from Price Determination (equilibrium / surplus / shortage view
  toggles, clean blue-D / orange-S styling). The shortage view is tailored
  to the rationing context (rising price rations the good to those willing
  and able to pay). Its spec is already precached/wired into the shells, so
  no new plumbing. `sw.js` cache bumped to `econos-v281`.

## 0.37.0 — 2026-06-02

### Price Mechanism Card 1 — merged the two function visuals into one

- Card 1 previously showed the three core functions twice: the styled
  framework tiles AND a separate hub-and-spoke diagram (`priceMechanismFlow`)
  below them. Merged into a single visual: a dark **PRICE** source box on
  top fans three dashed arrows down into the Signalling / Incentive /
  Rationing tiles, and each tile now carries the detail rule that used to
  live in the hub circles (`↑P = scarcer · ↓P = abundant`, `↑P → produce
  more · ↓P → less`, `scarce goods → willing & able`).
- `framework` renderer gained two optional fields: `priceSource`
  (`{ title, sub }` — the dark header box + auto-generated fan connector to
  each tile) and per-tile `rule` (a pill line pinned to the tile bottom).
  `sw.js` cache bumped to `econos-v280`.

## 0.36.7 — 2026-06-02

### YED & XED Card 9 — "How to read the question" as a flow chain

- Replaced the 2×2 box grid on the YED & XED exam toolkit ("How to read
  the question") with the standard `flow` block — numbered tone-coloured
  circles (blue / amber / purple / green) joined by dashed connectors,
  with a tinted icon circle below each and a tone-coloured title +
  description, matching the money-functions visual. Each step is now its
  own "coloured button".
- "Common mistakes" stays as a 2×2 box grid since the items are
  classification (no ordering). Reframed its label from "② Common
  mistakes" to "⚠️ Common mistakes" now the two blocks are no longer
  numerically paired. `sw.js` cache bumped to `econos-v279`.

## 0.36.6 — 2026-06-02

### YED & XED — Card 2 cleanup, Card 9 toolkit polish

- Card 2: removed the now-redundant "Read the sign" three-tile block.
  The new spectrum (added in 0.36.4) carries the same examples and
  classification, so the card reads more crisply: lock → intro → formula
  → spectrum → predict-reveal → exam edge.
- Card 9 (exam toolkit): smartened the "How to read the question" and
  "Common mistakes" inline-HTML grids. Switched from
  `auto-fit minmax(150px, 1fr)` (which produced a ragged 3+1 wrap on
  desktop) to a fixed 2×2 grid stacking to 1 column on mobile, bumped
  body type from 12px → 14px and headings from 12px → 14.5px to match
  the rest of the topic, and recoloured the common-mistakes tiles to the
  rose tone (was a soft red on red border, washed out). `sw.js` cache
  bumped to `econos-v278`.

## 0.36.5 — 2026-06-02

### YED Card 2 — spectrum repositioned after the formula

- Moved the `yedClassifySpectrum` down the page so the card now reads
  define → classify → exemplify → practise: green lock → formula box →
  **classification spectrum** → "Read the sign" examples → predict-reveal.
  Previously the generic renderer placed `visualKey` at the very top, so
  the spectrum appeared before the definition.
- Added a `bodyVisualKey` slot to `renderCardGeneric` that renders a hero
  visual immediately after the `body` block (with optional `bodyVisualLabel`
  heading) — for cards where a definition should lead and a diagram follows.
  `sw.js` cache bumped to `econos-v277`.

## 0.36.4 — 2026-06-02

### YED classification — spectrum diagram replaces the box grid

- Replaced the 2×2 "Classify the result" box grid on Income & Cross-Price
  Elasticity Card 2 with a new `yedClassifySpectrum` — the same number-line
  spectrum family used for XED, laid out left → right by YED value:
  inferior (falls) → income-neutral (0) → necessity (0–1) → luxury (>1),
  each with an example, a dot and a value chip over a red → green gradient
  bar. Responsive: cells compress and wrap rather than clip.
- `renderCardGeneric` now renders a section label above `visualKey` when
  `visualLabel` is set (parity with the `ad-interactive` renderer), so the
  spectrum keeps its "Classify the result" heading. `sw.js` cache bumped to
  `econos-v276`.

## 0.36.3 — 2026-06-02

### XED relationship hub — bottom box spacing

- Fixed the large gap between the central "Good A" circle and the bottom
  "Unrelated" box on `xedRelationshipHub` (Income & Cross-Price Elasticity
  Card 5). The grid used `gap:150px`, which set both column- **and**
  row-gap; since the circle is a third grid item it wrapped to a phantom
  second row, injecting ~150px of empty space below the cards. Changed to
  `column-gap:150px; row-gap:0` — the bottom box now sits naturally close
  to the circle (gap 104px → 29px). `sw.js` cache bumped to `econos-v275`.

## 0.36.2 — 2026-06-02

### Rational Decision Making Card 2 — mobile label fix

- On `marginalUtilityCompare`, the mobile breakpoint was rotating the
  whole middle block 90° — which spun the "Shift spending to the higher
  MU per £" label vertical and overlapped it with the panels. Now the
  text stays upright and only the connector arrow rotates to point down
  when the two goods stack. `sw.js` cache bumped to `econos-v274`.

## 0.36.1 — 2026-06-02

### Spectrum strip — unit-elastic cell now blue

- Recoloured the middle "unit elastic" cell (and the gradient midpoint)
  on both classification strips (`pedClassifySpectrum` and the strip in
  `pesCalcClassify`) from gold to blue, so it matches the blue
  unit-elastic frame in the five-frame grid below. `sw.js` cache bumped
  to `econos-v273`.

## 0.36.0 — 2026-06-02

### PED gets the elasticity classification spectrum

- Added the five-point classification strip (the one introduced on PES
  Card 2) to PED Card 3 "Reading the PED coefficient" as an overview
  banner above the detailed five-frame grid — new `pedClassifySpectrum`
  visual, relabelled for demand (perfectly inelastic 0 → perfectly
  elastic ∞). The `ped-five-frames` / `pes-five-frames` renderers now
  accept an optional `visualKey` banner above the frame grid.
- Made both spectrum strips (`pedClassifySpectrum` and the strip inside
  `pesCalcClassify`) responsive: dropped the fixed `min-width:520px` so
  all five cells compress and wrap to fit narrow content columns instead
  of clipping the last cell. `sw.js` cache bumped to `econos-v272`.

## 0.35.1 — 2026-06-02

### PES Card 1 diagram — arrowhead and label fixes

- Redrew the "same rise in price" and ΔQs arrowheads on
  `pesBigPictureCompare` as inline polygons instead of SVG markers —
  `orient="auto"` was rotating the vertical-line markers into
  flag/pennant shapes. Removed the now-unused `<defs>` marker block.
- Pulled the elastic panel's equilibrium points inward so Q₂ no longer
  overlaps the "Quantity supplied" axis label. `sw.js` cache bumped to
  `econos-v271`.

## 0.35.0 — 2026-06-02

### Price Elasticity of Supply — restructured to 8 cards with the visual family

Reworked PES to match the new mockup designs, keeping the genuinely good
content (and the interactive oil-market PES calculator) and adapting every
cartoon-style scene in the mockups (twin supply diagrams, the elasticity
dial, time-horizon curves, industry sparklines) into the established Econos
style — clean tinted tiles, icon-top tile rows, and gradient spectra.

- **Card 1 (big picture):** twin steep-vs-shallow supply diagram (same
  price rise → small vs large ΔQs), the formula box, and an icon-top
  inelastic / elastic / why-it-matters trio.
- **Card 2 (calculate & classify):** two static worked examples (bottled
  water 0.5 vs T-shirts 3.0) above the five-point PES classification
  spectrum (0 → ∞) + a read-the-number trio.
- **Card 3:** kept the interactive PES calculator (crude oil).
- **Card 4 (drivers):** the five drivers of supply elasticity as numbered
  tiles over a less-elastic → more-elastic gradient, with a quick-rule
  chain and typical-patterns row (fish / clothing / housing / digital).
- **Card 5 (time changes everything):** three time horizons (market period
  vertical S → short-run steep S → long-run shallow S) + a follow-one-market
  flow (today / next month / next year).
- **Card 6 (when demand jumps):** reuses the demand-shift twin diagram
  (steep vs shallow supply) + a demand-rises flow + price-volatility and
  real-example tiles.
- **Card 7 (real world):** four industries arranged low → high PES, each
  with a supply-against-time sparkline, plus who-cares and short-context
  tile rows.
- **Card 8 (exam toolkit):** four-step how-to-answer flow + common-mistakes
  tiles + how-to-write pair + memory hooks.

Five new static visuals in `icons.js` (`pesBigPictureCompare`,
`pesCalcClassify`, `pesDriversSpectrum`, `pesTimeHorizons`,
`pesIndustrySpectrum`) — no engine specs, so no shell/precache plumbing.
Card 6 reuses the existing `elasticVsInelasticSupplyDiagram`. Quiz pool
preserved verbatim. `sw.js` cache bumped to `econos-v270`.

## 0.34.0 — 2026-06-02

### Income & Cross-Price Elasticity — restructured to 9 cards with the visual family

Reworked YED/XED to match the new mockup designs, keeping the two
genuinely excellent bespoke interactive calculators (YED bus-travel, XED
tea & coffee) and adapting every cartoon-style scene in the mockups
(escalator, recession/boom dioramas) into the established Econos style
— clean tinted tiles, hub-and-spoke, and a strength spectrum.

- **Card 1 (big picture):** two-lens panel (income vs related-good
  price) + "what they help us do" tiles.
- **Card 2 (income elasticity):** formula + classify spectrum
  (inferior / necessity / luxury / neutral) + read-the-sign +
  predict-reveal.
- **Card 3:** kept interactive YED calculator (bus travel).
- **Card 4 (how income changes spending):** income-ladder tiles
  (inferior ↓ / necessity ↗ / luxury ↑) + think-like-a-consumer +
  what-YED-reveals.
- **Card 5 (cross-price explained):** XED relationship hub
  (substitutes / complements / unrelated, Good A at the centre) +
  read-the-sign + predict-reveal.
- **Card 6:** kept interactive XED calculator (tea & coffee).
- **Card 7 (how strong is the relationship):** XED strength spectrum
  from strong complements (−1.2) through unrelated to close substitutes
  (+1.3) + why-size-matters + quick rules.
- **Card 8 (real world):** four scenarios (recession / boom / rival
  price cut / fuel tax) + who-uses-them tinted tiles +
  short-context strip.
- **Card 9 (exam toolkit):** how-to-read + common mistakes + how-to-write.

Four new static HTML visuals in `icons.js` (`yedXedTwoLenses`,
`yedIncomeLadder`, `xedRelationshipHub`, `xedStrengthSpectrum`) — no
engine specs, so no shell/precache plumbing. Quiz pool preserved
verbatim. `sw.js` cache bumped to `econos-v269`.

## 0.33.0 — 2026-06-02

### Price Elasticity of Demand — restructured to 8 cards with the visual family

Reworked PED to match the new mockup designs, keeping the two excellent
bespoke templates (step-through calculator, five-regime spectrum) and
upgrading the rest to the established interactive / hub / panel visuals.

- **Card 1 (big picture):** elastic-vs-inelastic two-chart hero +
  three-category tinted tiles (elastic / unit / inelastic) + a
  "why PED matters" row (pricing / revenue / tax).
- **Card 2:** step-by-step PED calculator (unchanged bespoke template).
- **Card 3:** five-regime coefficient spectrum (unchanged bespoke template).
- **Card 4 (new interactive):** PED along a linear demand curve — step
  through the elastic upper part → unit-elastic midpoint (TR max) →
  inelastic lower part, on one straight-line demand curve. New engine
  spec `ped-linear-regions.js` (`pedLinearRegions`).
- **Card 5 (what makes demand elastic):** six-driver determinants hub
  (`pedDriversHub`) + "one good, different PED" (insulin / restaurant
  meals / petrol) + the predict-then-reveal product self-test.
- **Card 6 (PED & total revenue):** elastic-vs-inelastic revenue panels
  (`pedTotalRevenue`) + the TR rule tiles.
- **Card 7 (real world):** who-uses-PED tiles (airlines & hotels /
  government tax / supermarket promotions / peak & off-peak) + short-run
  vs long-run + the Marshall quote.
- **Card 8 (exam toolkit):** core facts + common mistakes + a
  read-a-PED-question checklist (Identify / Calculate / Classify / Apply).

The end-of-Learn-It quiz pool is unchanged. `sw.js` cache bumped to
`econos-v268` for the new spec + icon visuals.

## 0.32.0 — 2026-06-02

### Price Determination — interactive family rolled out to cards 1, 3, 4

Completed the diagram swap: cards 1, 3 and 4 now match the card-2
interactive pattern (D & S on one chart, chart-left / description-right /
step buttons below), replacing the broken `ad-interactive` empty-box
diagrams and the cluttered static equilibrium chart.

- **Card 1 (big picture):** demand & supply → equilibrium E (Pₑ/Qₑ) →
  the market clears (Qd = Qs, no pressure).
- **Card 3 (shifts):** step through demand/supply increase/decrease, each
  drawing the shifted curve and the new equilibrium (E₂/E₃) with leaders.
- **Card 4 (simultaneous shifts):** both-increase (Q certain, P ambiguous)
  and demand-up/supply-down (P certain, Q ambiguous); the four real-world
  combos remain as examples.

Also fixed a marker bug on card 2: the up/down price-pressure arrows used
pre-rotated triangles with `orient="auto"`, double-rotating them (the 90°
turn). Now use a standard rightward triangle that `orient` rotates to
follow the line. Specs `equilibrium-basic` / `shifts-interactive` /
`sim-shifts-interactive` rewritten as layered interactive specs;
snapshots updated. SW cache → v267.

## 0.31.0 — 2026-06-02

### Price Determination — interactive excess demand/supply diagram (card 2)

First member of the Price Determination interactive family, fixing the
worst-broken diagram (the old `ad-interactive` excess card rendered a
huge empty box). Card 2 now uses the `interactiveDiagram` block: D & S
on one chart, step through **equilibrium → price too high (surplus) →
price too low (shortage)**, chart-left/description-right.

Per review, the excess is signalled as a double-headed arrow **below the
quantity axis**, spanning Q₁ (quantity demanded) → Q₂ (quantity
supplied), with droplines from the curve points and a clear
"Surplus = excess supply" / "Shortage = excess demand" label, plus a
price-pressure arrow on the price axis. Template for rolling out to
cards 1, 3, 4. SW cache → v266.

## 0.30.1 — 2026-06-02

### Supply — restore joint & competing supply card

Added joint & competing supply back as Card 7 (applied extension),
mirroring the derived-demand decision on the Demand topic. Reuses the
`conceptBoxes` flow visual (cattle → beef + leather; farmland → wheat /
rapeseed). The exam toolkit moves to Card 8; topic is now 8 cards.
Data-only change.

## 0.30.0 — 2026-06-02

### Supply (1.2.4) — restructure to mirror Demand + interactive chart family

Rebuilt Supply as the mirror of Demand: 7 on-spec cards (big picture →
why the curve slopes up → movements → shifts → what shifts supply →
costs/productivity/tax → exam toolkit), dropping the off-spec drift
(Producer Surplus → 1.2.7, "supply in context", joint/competing supply).

Cards 1–4 are the interactive chart family (chart left, description
right, step buttons below; stacks on mobile) on an UPWARD curve:
- **Card 1 (big picture):** the curve → lower price (A, £6→20) → higher
  price (B, £10→40).
- **Card 2 (slope up):** price steps up A→B→C, one reason per step —
  profit incentive, rising marginal cost, higher-cost producers join.
- **Card 3 (movements):** reference point B; extension up to C (price
  rises) / contraction down to A (price falls).
- **Card 4 (shifts):** S₁ baseline → green S₂ (increase, right) → red S₃
  (decrease, left), green/red convention matching Demand.

Specs `supply-card1/2/4` rewritten as layered interactive specs and a
new `supply-card7.js` added (slope card) — wired into the three shells
and the SW precache. Two new HTML heroes: `supplyDeterminantsHub` (six
conditions of supply) and `supplyCostFactors` (cost-side changes +
policy/efficiency). Icon keys renamed to `supplyBigPicture` /
`supplySlopeCurve` / `supplyMovements` / `supplyShifts`. Snapshots
updated. SW cache → v265.

## 0.29.0 — 2026-06-02

### Demand — interactive chart family rolled out to cards 1–3

Cards 1, 2 and 3 now match the Card 4 interactive pattern (the
`interactiveDiagram` block: chart left, description right, step buttons
below; stacks on mobile). All four demand-curve charts are now one
consistent family, each taller (480) with explicit in-bounds labels.

- **Card 1 (big picture):** The demand curve → a higher price (point A,
  £10→20) → a lower price (point B, £6→40).
- **Card 2 (slope):** steps the price down A→B→C, one reason per step —
  substitution effect, real-income effect, diminishing marginal utility.
- **Card 3 (movements):** reference point B persistent; reveal a
  contraction up to A (price rises) or an extension down to C (price
  falls).

Specs `demand-card1` / `demand-card7` / `demand-card2` rewritten as
layered interactive specs; snapshots updated. SW cache → v264.

## 0.28.2 — 2026-06-02

### Demand shifts chart — label clash fix

The curve auto-labels were anchored to the line ends, and D₂/D₃ end
off-stage (right of the plot), so their labels clipped/cramped. Replaced
with explicit in-bounds text labels — one bold curve label per state
plus a faint D₁ on the dashed baseline — all clear of the lines and the
shift arrows. SW cache → v263.

## 0.28.1 — 2026-06-02

### Demand shifts chart — switch to interactiveDiagram block

Reworked per review. The previous attempt re-laid out the
`ad-interactive` pieces and pushed the per-state panels into the right
column, which left the panels orphaned. This release switches Card 4
to the canonical `interactiveDiagram` block (the same component the
Consumer & Producer Surplus topic Card 2 uses): **chart on the left,
description on the right, step buttons underneath the row**. Stacks on
narrow viewports below 1100px.

The `--aside` CSS variant and the renderer's `c.diagramAside` slot
from v0.28.0 are reverted (they were the wrong shape). Chart height
bumped from 360 → 480 in the spec so the demand-curve has more room.
SW cache → v262.

## 0.28.0 — 2026-06-02

### Demand — interactive shifts chart (family template)

Card 4 (shifts) is now an interactive diagram: step through Starting
point → Shift right (increase) → Shift left (decrease), with the chart
on the left and the per-state description on the right (desktop),
stacking on mobile. Blue D₁ baseline; green D₂ for an increase, red D₃
for a decrease, each with a dashed directional arrow.

New shared infra (reused by the rest of the demand chart family next):
- `.ad-interactive--aside` layout variant (opt-in via `diagramAside`)
  — chart left, tabs + description right on desktop, stacked on mobile.
- `dshift-svg` layer state machine (base / incr / decr) in styles.css.
- `demand-card4.js` rewritten as a layered interactive spec.

SW cache → v261.

## 0.27.1 — 2026-06-02

### Demand — shifts chart refinement

Reworked the Card 4 shifts diagram per review: D₁ is now the faint
dashed baseline, with bold solid shifted curves — green D₂ (increase,
right) and red D₃ (decrease, left) — each reached by a dashed
directional arrow. Adopts the standard green=increase / red=decrease
convention. SW cache → v260.

## 0.27.0 — 2026-06-02

### Demand (1.2.2) — restructure + chart rebuild

Fixed two problems at once: several charts were rendering badly, and
three cards drifted off spec 1.2.2. Rebuilt to 8 on-spec cards (big
picture → why the curve slopes down → movements → shifts → what shifts
demand → types of good → derived demand → exam toolkit), dropping
Consumer Surplus (belongs in 1.2.7) and the elasticity-flavoured "real
markets" card; Derived Demand is retained as an applied extension.

Charts: the four `demand-card*.js` specs were rewritten in place (same
global names, so no new shell/precache wiring). The cramped three-state
interactive and the broken consumer-surplus diagram are gone; in their
place are clean static engine charts on one canonical demand line —
big-picture curve, slope curve (3 points), movements (extension/
contraction arrows) and shifts (D₁/D₂/D₃). Icon keys renamed to
`demandBigPicture` / `demandSlopeCurve` / `demandMovements` /
`demandShifts`.

Two new HTML heroes: `demandDeterminantsHub` (Demand at the centre with
the six conditions of demand) and `demandGoodTypes` (normal/inferior +
substitutes/complements with examples). Chart SVG regression snapshots
updated for the four rewritten specs. SW cache → v259.

## 0.26.0 — 2026-06-02

### Rational Decision Making (1.2.1) — visual upgrade pass

Kept the 3-card structure (the spec point is narrow) but rebuilt the
heroes to match a ChatGPT visual set. Three new visuals in
`js/icons.js`:

- **`rationalAgentHub`** (Card 1) — a brain at the centre with the four
  habits of a rational agent radiating to the corners (consistent /
  goal-seeking / marginal / maximising); "who maximises what?" now a
  consumers↔firms comparison + key terms.
- **`marginalUtilityCompare`** (Card 2) — two goods rated by the extra
  satisfaction from the next £1 (stars), with a "shift spending to the
  higher MU per £" hub and the equimarginal rule; the demand-curve link
  is preserved in the takeaway.
- **`profitEquationHero`** (Card 3) — Profit = Total revenue − Total
  costs as a proper equation panel, replacing the inline body text.

SW cache → v258.

## 0.25.0 — 2026-06-02

### Economic Systems (1.1.6) — full restructure

Rebuilt the topic from 7 cards to 8, closing the spec (a) gap (the
distinction "with reference to Adam Smith, Friedrich Hayek and Karl
Marx" — Marx was previously absent entirely) and folding in the
strongest ideas from a ChatGPT visual set. New card order: big
picture → the three thinkers → how a free market works → how a command
economy works → why economies are mixed → comparing the systems →
Russia vs China → the whole story.

Five new responsive heroes in `js/icons.js` (all stack on mobile):

- **`economicSystemsBigPicture`** (Card 1) — a three-questions hub
  (what / how / for-whom radiating from "every economy") above the
  market↔state spectrum (free market · mixed · command on a
  green→blue→rose ribbon).
- **`economicThinkersThree`** (Card 2, spec a) — Smith / Hayek / Marx
  with real portrait photos (new `marx.png` asset + `economistMarx`),
  each thinker's stance and a pull-quote. The thinker→system mapping
  below renders as stacked rows.
- **`economicCommandPlanning`** (Card 4) — a hub-and-spoke planning
  diagram: the government sets priorities, the plan fans down to four
  process steps.
- **`economicMixedWhoDoesWhat`** (Card 5, spec c) — two icon-tile
  panels contrasting what markets allocate with what government
  provides or shapes.
- **`economicSystemsScorecard`** (Card 6) — a six-dimension trade-off
  matrix (choice / incentives / equity / state control / flexibility /
  provision) with fill bars per system.

Card 8 (synthesis) follows the shared chain → limits → final-judgement
pattern. Topic palette standardised: free market = green, mixed = blue,
command = rose. SW cache bumped to v257.

## 0.24.0 — 2026-06-02

### Specialisation & Money — visual upgrade pass

Folded the strongest ideas from a ChatGPT visual set into the topic,
keeping our 8-card spine and the (b)-vs-(c) distinction the spec
examines. Three new heroes in `js/icons.js`, all responsive (stack on
mobile):

- **`specialisationGainsCompare`** (Card 1) — quantified
  self-sufficiency (20 units) → specialisation (300 units) panels,
  replacing the abstract opening flow with a concrete output gain.
- **`barterTriangle`** (Card 5) — Baker/Fisher/Shoemaker hub-and-spoke
  with Has/Wants pills, a central "double coincidence of wants" node
  and a red ✕ on every pairwise edge; makes the deadlock visible.
- **`goodMoneyScorecard`** (Card 7) — scored matrix (six
  characteristics × shells/gold/notes, ✓/◑/✕) with a Score row
  (2/6 · 6/6 · 5/6), replacing the old shells/livestock verdict.

Card 8 (synthesis) rebuilt as an evidence-then-verdict: a 6-step
specialisation→living-standards chain, a rose "Don't forget the limits"
block, and a green/rose two-column "Final judgement". The scarcity
weak-spot on `goodMoneyScorecard` now ties directly to the inflation
point. SW cache bumped to v256 (icons.js changed).

## 0.23.1 — 2026-06-01

### 1.2.1 Rational Decision Making — content authored

Filled the scaffold from v0.22.0 with the three designed cards plus a
6-question quiz:

- **What ‘rational’ means** — consistent / goal-seeking / marginal
  analysis / maximisation, and a "who maximises what?" consumer-vs-firm
  split.
- **Consumers maximise utility** — utility vs budget constraint, a
  £20 worked-example basket, diminishing marginal utility, and the
  link to the downward-sloping demand curve.
- **Firms maximise profit** — the Profit = TR − TC benchmark, how the
  model works, other possible objectives (revenue / growth /
  survival), and a behavioural-economics look-ahead.

Built entirely from the generic renderer's table / flow / flowBottom /
comparison / branches blocks — no new chart needed. Build + lint +
118 unit tests pass; all three cards verified visually.

## 0.23.0 — 2026-06-01

### Theme 1.1 missing cards authored + wired (designs from ChatGPT)

The six cards flagged TODO in v0.22.0 are now built and routed to the
correct spec topics:

**1.1.1 Economics as a Social Science** — now 6 cards. Prepended:
- Thinking like an economist (models & assumptions) — with an
  engine-rendered supply & demand worked example.
- Ceteris paribus — with an engine-rendered "price rises, quantity
  demanded falls" demand-curve worked example.
- Why economics can't run lab experiments (natural experiments,
  historical data, models; disagreement among economists).

**1.1.2 Positive & Normative Statements** — now 3 cards. Added "The
role of value judgements" (same facts → different policies; minimum
wage & carbon tax) and upgraded "Spotting the distinction in
practice" (fast test, clue words, worked classifications).

**1.1.3 The Economic Problem** — now 12 cards. Inserted "Renewable
vs non-renewable resources" (the distinction, opportunity cost over
time, today vs tomorrow, why it matters) after the scarcity card.

### Two new chart specs

- `models-supply-demand.js` (`ECONOS_MODELS_SD_SPEC`) — D/S with
  P*/Q* equilibrium, for the 1.1.1 models card.
- `ceteris-paribus-demand.js` (`ECONOS_CETERIS_DEMAND_SPEC`) —
  movement up the demand curve with P₁→P₂ / Q₁→Q₂ direction arrows.

Both bound in icons.js (`modelsSupplyDemand`, `ceterisParibusDemand`),
loaded in all three shells, precached in the SW, and covered by the
snapshot suite (57 specs render clean). Build + lint + 118 unit
tests pass; all four chart/dense cards verified visually.

## 0.22.0 — 2026-06-01

### Theme 1.1 restructure to match the Edexcel A spec

The first topic conflated three spec points. Split into spec-accurate
topics (Edexcel A scope):

- **1.1.1 Economics as a Social Science** — reuses the
  `introduction-to-economics` URL (no SEO/link loss); reduced to
  methodology scope (economic agents, the rationality assumption,
  micro vs macro). New methodology quiz. Cards on models &
  assumptions, ceteris paribus and the limits of economic
  experiments are still to be authored (ChatGPT brief issued).
- **1.1.2 Positive & Normative Statements** — NEW topic
  (`positive-and-normative-statements`); migrates the positive/
  normative card, adds an applied "spotting the distinction" card,
  and ships a brand-new 6-question quiz. A "role of value
  judgements" card is still to be authored.
- **1.1.3 The Economic Problem** — NEW topic (`the-economic-problem`);
  carries scarcity, opportunity cost and the three economic
  questions (migrated from the old intro) plus the full eight-card
  factors-of-production content folded in. Quiz now spans scarcity →
  opportunity cost → three questions → factors (13 questions). A
  "renewable vs non-renewable resources" card is still to be
  authored.

`factors-of-production` is hidden from the Edexcel A grid
(`included: false`) — its content now lives in 1.1.3 — but stays
live for AQA, OCR and Edexcel B where it's a named sub-section.
Scope this round is Edexcel A only; the other boards keep reading
their existing baseline.

Build, lint and the 116-test unit suite all pass; the home grid now
reads 1.1.1 → 1.1.6 in spec order.

## 0.21.2 — 2026-06-01

### Site-wide rollout of legend-below + overlap fix

PR #892's legend-below mode now applies to every wide chart with a
side legend, not just the two PPF cards:

- demand-card2, demand-card4 (movement vs shift, consumer surplus)
- supply-card2, supply-card4 (movement vs shift, producer surplus)
- shifts-interactive, sim-shifts-interactive (equilibrium dynamics)
- disequilibrium-interactive (surplus / shortage)
- neg-externality-interactive, pos-externality-interactive
- (plus ppf-card1, ppf-card3 from #892)

Eleven 900-wide charts in total. Each one now renders at 590–605 px
on phones with the analysis as HTML beneath the chart — no more
horizontal scroll, no more 5-px legend text.

### Fix — overlapping legends

The engine emitted an "initially visible" rule for the first legend
that had equal specificity with the "hide all" rule but came LATER
in the cascade. With `.show-<key>` set on the parent the matching
legend got opacity:1 — but the FIRST legend's "initially visible"
rule was never overridden, so both rendered at once and the user
saw four sets of headers/rows stacked on top of each other.

The fix drops the "initially visible" rule. The consumer (app.js's
ad-interactive renderer) always sets `.show-<firstkey>` on the
parent at initial render, so the cascade handles the default
without needing an unconditional rule. Also adds
`pointer-events: none` to hidden layers as a defensive measure.

## 0.21.1 — 2026-06-01

### Wide-chart analysis stacks below on phones

PPF cards 1 and 3 (the only 900-wide charts on the site) used to render
their analysis as a side legend at x=600 inside the SVG. On a phone the
whole SVG shrank to fit, dropping the legend text to ~5 px — illegible.
PR #891 added `min-width:720px` + horizontal-scroll as a safety net;
this is the deeper fix Roger asked for ("can the analysis be below as
the other charts?").

**Engine option `spec.legendPosition: 'bottom'`** — opted-in per spec.
When set the engine:
- Skips emitting the side legend inside the SVG.
- Auto-shrinks `width` to `chartArea.x + chartArea.width + 30` so the
  SVG fits a phone natively (560 → 590, no horizontal scroll).
- Drops the dashed vertical divider (no side column to separate from).
- Renders each per-view legend as HTML *after* `</svg>`, wrapped in
  its existing `layer-legend-<view-key>` class.
- Emits a `<style>` block scoped to `.econos-chart-legends` so the
  parent's `.show-<view-key>` cascade fades the HTML legends exactly
  the way it did when they lived inside the SVG.

PPF cards 1 and 3 opt in; cards 2/4/5/6 are 440-wide already and stay
unchanged. Verified visually on iPhone-portrait viewport.

### Fix

- The 4th PPF tab ("Efficiency") on the construction card was bound to
  step key `types-of-efficiency` while the spec view + CSS rules used
  `efficiency` — clicking the tab did not reveal the efficiency layers.
  Renamed the step key to `efficiency` so the cascade fires.

## 0.21.0 — 2026-05-31

### Chart-engine toolkit — ten-piece overhaul

A focused investment block in the chart engine ahead of the theme 2–4
content push. The engine was already powerful but had grown by
accretion; this round formalises the contracts that authors lean on so
the next 100 charts don't repeat the first 100's mistakes. Nine PRs
landed in sequence, plus this regression-snapshot capstone.

**Authoring ergonomics**
- **Named curve shapes** (`{shape:{type:'linear', through:[…], slope:-1}}`,
  `vertical`, `horizontal`, `keynesianAS`). No more hand-typed
  `d="M … L …"` strings; the engine compiles the shape to a path AND
  feeds the same shape to the intersection solver so coords stay in
  sync. The Keynesian reverse-L AS is one named recipe shared by every
  AD-AS chart on the site.
- **Composable templates** (`template: 'ad-as'`, `'supply-demand'`,
  `'ppf'`, `'phillips'`). Pre-set axes, gridlines, default curves and
  styling for the four chart types that account for ~70% of A-level
  charts. Authors override only what differs.
- **Auto welfare-region shading** — CS / PS / DWL triangles get traced
  from curve identity, not hand-typed polygon points. Re-derives after
  any curve shift.

**Correctness guards**
- **Intersection solver** — the engine knows where two curves cross.
  Spec-declared coords get checked against the solved coords; drift
  >2px raises a warning.
- **Geometry assertions** — authors can declare invariants
  (`E1.x === E2.x`, monotonic, on-curve) that the engine validates at
  render time.
- **Tick dedup + collision detection** — duplicate labels collapse,
  ticks <14px apart warn.
- **Spec linter as CI gate** — `scripts/lint-charts.mjs` runs every
  spec through the engine in dev mode and fails the build on any
  warning. Wired into `npm run lint`.
- **SVG regression snapshots** — 36 specs' rendered markup is
  snapshotted under `tests/unit/__snapshots__/`. Any engine change
  that shifts a curve, label or coord shows up as a test diff; you
  refresh with `vitest -u` after eyeballing the change.

**Polish & a11y**
- **Animated transitions** — layer reveals and Classical/Keynesian
  perspective toggles cross-fade (350ms opacity) instead of pop-cutting.
- **Auto alt text** — every rendered SVG carries a `<title>` and
  `<desc>` derived from the spec's curves, points and axes. Screen
  readers and Google Image Search both win; authors override per spec
  if needed.

**By the numbers**
- 91 unit tests (up from ~30 before the toolkit).
- 36 chart specs linted on every PR.
- 37 SVG snapshots — one per spec + one manifest.
- Zero new dependencies. Everything is pure JS + vitest.

This is the foundation layer the rest of theme 2 (and themes 3/4, and
the SEO article diagrams, and revision) will build on top of.

## 0.20.0 — 2026-05-30

### Macro Conflicts & Trade-offs (2.6.4) — full 6-card build from ChatGPT mockups

Sister topic to *Macroeconomic Objectives* (2.6.1) — applied case studies
of the five real UK trade-offs, ending in the four-dimensional A* verdict
framework. Built tightly to the six ChatGPT mockups Roger shared:

- **C1 The conflict lens** — new `conflictLensMap` SVG: five tone-coded
  trade-off tiles arranged around a central "WHEN OBJECTIVES COLLIDE"
  lozenge with dashed arrows pointing inward. Each tile names the
  trade-off + its historical UK case. Closes with a 3-step "Conflict
  analysis" flow (trade-off · policy choice · legacy).
- **C2 Diagnose the trade-off** — uses the existing `diagnoseRows` block
  with a new `reveal: true` mode. Verdict boxes are blurred + faded by
  default; a tone-coloured `?` button on each row toggles a hidden CSS
  checkbox and unblurs the verdict. CSS-only, CSP-safe.
- **C3 1970s stagflation** — new `stagflation5Step` flow icon (five
  vertical tone-tinted tiles with numbered badges + circular icons +
  arrows), plus `stagflationTimeline` icon (3 dated markers on a dashed
  axis), plus a 3-tile `causes3` row of demand-side responses. Required
  one engine addition: `visualKey2`/`visualLabel2`/`visualEmoji2`/
  `visualCaption2` fields on `ad-interactive` to host a second hero.
- **C4 The 2021–23 inflation surge** — big `inflationSurge2021` hero:
  twin panels (shock blue / response amber) with a UK CPI line chart
  peaking 11.1% Oct 2022 + a Bank Rate step chart climbing 0.1% → 5.25%
  from Dec 2021 to Aug 2023. Embeds the "trade-off in real time"
  Phillips-style view + 3 stat callouts at the bottom of the same icon.
- **C5 The supply-side escape route** — uses the pair block (with `rows`
  + `example` extensions added earlier) for the "can do / caveats"
  comparison, with East Asian growth miracle + UK productivity puzzle
  case examples. Closes with a 4-tile "at a glance" verdict row.
- **C6 The A* verdict on any policy conflict** — 4-row evidence pile
  (numbered-rows), four-dimensional judgement framework tiles
  (icon-top), and a How-to-structure-the-judgement guide.

Engine additions reusable across the library: `diagnoseRowsReveal`
mode (click-to-reveal verdicts), `visualKey2` (secondary hero visual).

Cache → `econos-v126`.

## 0.19.1 — 2026-05-30

### Macroeconomic Objectives — final best-of superset

Iterated the six heroes into a "best of both" superset, combining the
solo creative pass with the ChatGPT mockups Roger shared after:

- **C1 cockpit** went from dark slate to a **lighter white dashboard**
  with the same 7-gauge story; added the **"5 STRUCTURAL TRADE-OFFS WE
  WILL EXPLORE" preview flow** at the bottom (ChatGPT's move).
- **C2 headline three** switched from vertical character cards to
  **horizontal numbered rows** with a 4-column data grid (target /
  measure / UK current / why). Kept the personality voice quotes as
  italic subtitles in the head column — the scannability of the table
  format with the character of the original.
- **C3 compass rose** kept (the genuinely-stronger design here).
- **C4 Phillips** redrawn with **both SRPC₁ and SRPC₂ visible by default**
  and **A → B → C labelled clearly** (ChatGPT's clarity); the PLAY
  toggle now animates the path opacity rather than swapping curves.
- **C5 trade-offs** swapped see-saws for **3-step mechanism flow chains**
  (ChatGPT's directness). Hero key renamed `macroSeesaws` →
  `macroTradeoffChains`.
- **C6 constraint web** gained **numbered circles (1–7) on each node**
  to tie back to the C1 scorecard numbering.

Cache → `econos-v122`.

## 0.19.0 — 2026-05-30

### Macroeconomic Objectives (2.6.1) — split, retitled, rebuilt creatively

Edexcel A spec separates 2.6.1 (the seven possible objectives) from 2.6.4
(conflicts and trade-offs). The prior "Macroeconomic Objectives &
Trade-offs" build mashed both into one topic. Split per the spec: this
topic is now **theory only**, the sister topic
`macro-conflicts-and-trade-offs` (2.6.4) holds the applied UK case
studies (1970s stagflation, 2008 GFC, 2021–23 inflation surge — to be
built next).

Six creative cards, unified by a "policymaker's dashboard" metaphor:

- **C1 The cockpit** (`macroCockpit`) — dark dashboard SVG, seven UK
  macro gauges arranged like a pilot's control panel. Primary 3
  (inflation, unemployment, growth) + secondary 4 (BoP, fiscal,
  environment, equality). Some needles in target zone, some flagged
  "! ABOVE ZONE". Adds the **7th equality objective** that was missing.
- **C2 The headline three** (`macroHeadlineCards`) — three vertical
  "trading card" portraits, each anthropomorphised ("I'm noisy and
  impatient"), with target / measure / current / mechanism mini-chain.
- **C3 The four constraints** (`macroConstraintCompass`) — compass rose
  visual pivot from C2. Four cardinal directions; green safe-zone arcs;
  two needles visibly outside zone (fiscal, equality). Numbered-rows
  detail below.
- **C4 The Phillips workstation** (`macroPhillipsWorkstation`) — Phillips
  curve on graph-paper "lab notebook"; two views with a CSS-only PLAY
  toggle that auto-cycles the A→B→C path. Pure theory; no 1970s
  stagflation view (lives in 2.6.4).
- **C5 Four more structural trade-offs** (`macroSeesaws`) — four
  see-saws with the trade-off mechanism as a sliding weight; CSS-only
  flip toggle per see-saw demonstrates reverse direction.
- **C6 Why no objective stands alone** (`macroConstraintWeb`) — radial
  SVG with seven nodes; five hoverable tension lines highlight the
  trade-off pairs; closing four-dimensional A* framework + theory
  verdict.

Topic title shortened to "Macroeconomic Objectives". Quiz pool rewritten
to match (10 questions on the seven objectives, Phillips theory, and
trade-off mechanisms — no historical cases). Cache → `econos-v122`.

## 0.18.2 — 2026-05-30

### Fix: economist portraits + steel/vaccination heroes were 404ing

When topic URLs moved to the path-based form
(`/edexcel_a/<theme>/<topic>/learn-it/`), every relative-path PNG broke
silently — the browser resolves `src="assets/economists/smith.png"`
against the topic URL, not the document root, so every image fetch went
to `…/<topic>/learn-it/assets/economists/smith.png` and 404'd.

Fixed by making all PNG sources absolute (`/assets/...`):

- 16 economist portraits in `js/icons.js` (`economistAdamSmith`,
  `economistMarshall`, `economistPigou`, `economistHayek`,
  `economistKahneman`, `economistOstrom`, `economistRicardo`,
  `economistSchumpeter`, `economistGoldin`, `economistKeynes`,
  `economistCoyle`, `economistSen`, `economistFriedman`,
  `economistDuflo`, `economistMazzucato`, `economistPhillips`).
- `negative-externalities` `heroImage` (`steel-hero.png`).
- `positive-externalities` `heroImage` (`vaccination-hero.png`).

Verified live: `/assets/economists/marshall.png`, `coyle.png`,
`steel-hero.png`, `vaccination-hero.png` all return 200; portraits and
heroes render in the cards that use them. Cache → `econos-v121`.

## 0.18.1 — 2026-05-30

### Quiz engine: fix every quiz question being unanswerable (CSP regression)

The Learn It / Link It / Land It HTML shells ship a strict Content
Security Policy (`script-src 'self'`, no `unsafe-inline`), but
`quiz-engine.js` was built around 33 inline `onclick=""` attributes (plus
one `oninput` and one `onkeydown` for the numeric input). Every click and
keystroke was silently blocked by the browser's CSP enforcement — every
quiz type was unanswerable: MCQ options, "Sort into groups" item/bucket
assignment, numeric input, match-pairs, rank, cause-effect, the lot.

Fix: a single `rebindInlineHandlers(node)` helper plus a `MutationObserver`
watching `#quiz-root`. Every time a node is inserted into the quiz tree
(`innerHTML`, `outerHTML`, append — any path), the helper parses each
inline `on*` attribute (`onclick`, `oninput`, `onkeydown`, `onchange`,
`onkeyup`, `onkeypress`), strips it, and re-attaches as a proper
`addEventListener`. The `this` and `event` tokens are forwarded to the
handler exactly as the inline form would have provided them.

One-place fix; no question-renderer code touched. Verified end-to-end on
the macroeconomic-objectives quiz: MCQ × 4, numeric input, **Sort into
groups (categorise)**, all advance with correct feedback.

Cache → `econos-v120`.

## 0.18.0 — 2026-05-30

### Macroeconomic Objectives & Trade-offs — full 6-card rebuild from mockups

Rebuilt the topic end-to-end against the ChatGPT design mockups, one
storytelling pattern per card, folding in the strong UK-data content
from the prior build:

- **Card 1 · The macro objectives scorecard** (*Decompose a diagram*).
  New `macroObjectivesScorecard` HTML+SVG hero — six objective tiles in
  a 3×2 grid. Tiles 1-3 (inflation 2.8%, unemployment 5.0%, real GDP
  growth 0.6%) carry radial gauges with a green target-zone arc and a
  black needle pointing to the UK's current value; tiles 4-6 (BoP −2.4%,
  fiscal 93.8%, environmental "Mixed") carry an icon + headline value.
  Closing 5-tile trade-off row previews the rest of the topic. Visually
  rhymes with the growth scorecard.
- **Card 2 · The Phillips curve** (*Interactive multi-state*). Reuses the
  `phillipsInteractive` SVG (3 views) with a closing NAIRU / adaptive-
  expectations / trade-off-breaks-down tile row.
- **Card 3 · Diagnose the trade-off** (*Predict-then-reveal*). New
  reusable `diagnoseRows` block in the `ad-interactive` renderer — case
  on the left, a Verdict box with coloured ↑/↓ pills on the right — plus
  a fast-diagnosis `flow` checklist. Three real UK scenarios (BoE rate
  hike, fiscal stimulus + CA deficit, sub-NAIRU unemployment).
- **Card 4 · Stagflation — the mechanism** (*Sequential flow chain*).
  Five-step chain + examples-in-history row + the three policy responses
  with example tools.
- **Card 5 · The supply-side argument** (*Side-by-side pair*). Pair
  renderer extended to support per-item icon `rows`, a bottom `example`
  box, and `labelCenter`. Verdict-pills summary row.
- **Card 6 · The trade-off verdict** (*Evidence-then-verdict*). Evidence
  pile (numbered-rows), the four-dimensional A* framework (icon-top),
  and the synthesised final verdict.

Engine additions (all reusable): `diagnoseRows` block; pair side
`rows` / `example` / `labelCenter`; `icon-top` style on the
top-position causes renderer (shipped in 0.17.10). Quiz pool preserved.
Cache → `econos-v119`.

## 0.17.9 — 2026-05-30

### Routing cleanup: bare shell URL = cover, drop legacy redirects

A small follow-up to v0.17.0 — cleaner URLs, less legacy code:

- **`/learn-it/intro` → `/learn-it`** (and the same for `/link-it`
  and `/land-it`). The cover/intro view of every shell is now
  addressed by the BARE shell URL. The previous `/<...>/learn-it/intro`,
  `/<...>/link-it/intro` and `/<...>/land-it/intro` distinct pages
  are gone — the build no longer emits them.
- **`routes.<shell>('intro', topic)` collapses to bare URL.**
  One line in `makeShellRoute` (`if (sub === 'intro') sub = null;`)
  means every existing call site — engines, data files, UI links —
  emits the new canonical URL without per-caller changes.
- **`/land-it/a` legacy redirect deleted.** Removed
  `LEGACY_LAND_TOKENS`, `rewriteLegacyUrl()` and the bootstrap call
  from `js/topic-loader.js`. Old bookmarks now 404; that's
  intentional.
- **`'intro'` stays as an engine boot key.** `stations.js`'s
  `linkStations.intro` / `landStations.intro` entries are
  retained so `link-router` / `land-router`'s default
  (`getStation() || 'intro'`) still finds the right boot when
  the URL is bare. URL emission drops `'intro'` from the iteration.
- **Per-card Learn It URLs unchanged.** Title-derived card slugs
  (`/learn-it/demand-pull-inflation`) ship as before.
- **SW bump to `econos-v117`.** `topic-loader.js`, `stations.js`,
  `vite.config.js`, `app.js` all change.
- **Tests.** `tests/e2e/topic-loader.spec.js` updated for the new
  `routes.link('intro')` shape; `tests/e2e/mobile.spec.js` updated
  for the bare `/link-it` URL in the stages strip.

## 0.17.10 — 2026-05-30

### Two small fixes ahead of the next topic build

**Measures of Economic Performance · Card 8 essay framework.** The
"Distinguish trend vs cyclical" and "Interpret & evaluate" titles were
overflowing their columns in the 4-up tile grid (icon + title
side-by-side was too wide). Added `'icon-top'` support to the
top-position causes renderer (mirrors the existing `'icon-top'` style
on the causesFirst branch and on causes3); switched Card 8 from
`'plain-white'` to `'icon-top'`. All four titles now fit cleanly.

**Macro Conflicts · Card 2 Phillips curve · third pane (stagflation).**
Two real geometric bugs in the existing diagram:
1. SRPC₃ was drawn with slope 0.525 — shallower than SRPC₁'s slope of
   0.7. A proper supply-shock shift moves the whole curve up while
   keeping the same slope (parallel shift). Fixed by setting SRPC₃ to
   go from (90, -7) to (490, 273), parallel to SRPC₁ shifted up by 110
   pixels. Left portion exits the chart top and is clipped by the
   existing `ph-chart-clip` so the curve appears to enter from the top
   edge cleanly.
2. The stagflation point S was plotted at (400, 160) but SRPC₃ at x=400
   was at y=218 — so S floated 58 px above the curve, contradicting
   the "S is the new equilibrium" pedagogy. Moved S to (400, 210) so
   it lies exactly on SRPC₃ (verified: −7 + 0.7×310 = 210 ✓). All
   associated leaders, labels, and the A→S arrow tip updated.

Cache → `econos-v118`.

## 0.17.8 — 2026-05-30

### Card 6 · A* framework tiles · icon-top layout

The "Sustainability" tile title was being clipped by its column in the
4-up A* framework row (side-by-side icon + title was too wide). Added
`causes3Style: 'icon-top'` support to the engine — icon renders as a
white square on top, title sits on its own line below — and switched
Card 6's framework block to use it. All four titles now fit cleanly.
Cache → `econos-v116`.

## 0.17.7 — 2026-05-30

### Card 5 · annotation labels in the right place

- **"Natural-capital depletion"** label moved from below the Green-GDP
  curve up to the vertical midpoint between the two curves (y195 → y170),
  so it sits inside the pink shaded gap it's labelling.
- **"debt to future"** label moved out of the small wedge (which was
  too tight to host the full label cleanly) into the white area below
  the budget line, with a short red arrow pointing up into the wedge.

Cache → `econos-v115`.

## 0.17.6 — 2026-05-30

### Impact of Economic Growth · Card 5 sustainability diagrams polish

- **Kuznets curve dots now sit on the curve.** Niger / China / UK markers were drawn at approximate positions that drifted off the Bezier; recomputed the on-curve y for each x (Niger 245→231, China 100→93, UK 200→168) so the dots touch the line.
- **Right-edge labels no longer clipped.** ViewBox widened from 640×320 → 720×320 across all three layers. "Standard GDP" / "Green GDP" (depletion gap), "Emissions path" / "1.5°C budget" (carbon debt) all now render fully — and the chart elements naturally sit in the left portion of the canvas with breathing room on the right where the labels live.

Cache → `econos-v114`.

## 0.17.5 — 2026-05-30

### Impact of Economic Growth · Card 2 spectrum → numbered-rows

Switched the UK income spectrum on Card 2 from `causesStyle: 'numbered'`
(5-column tile grid) to `causesStyle: 'numbered-rows'` — the established
stacked-row layout already used on inflation and other macro cards. Each
band now reads as a single horizontal row with numbered circle + icon +
title + full-width body, tone-coloured left bar. Lets the rich per-band
detail breathe instead of cramping into narrow columns. Cache → `econos-v113`.

## 0.17.4 — 2026-05-30

### Impact of Economic Growth · Card 2 footnote

Added a second annotation line under the £ bar chart explaining the Top-1%
bar reflects wages **plus capital gains** (equity, dividends, housing
wealth), while the bottom decile is wage-only. Makes the £12,000+ figure
defensible at a glance without having to open the analysis panel.
ViewBox extended to 720×372 to accommodate. Cache → `econos-v112`.

## 0.17.3 — 2026-05-30

### Impact of Economic Growth · Card 2 redesign

Added an interactive 2-view bar chart hero (`incomeSpectrumChart`) to Card 2.
View 1 plots the £/yr real-income gain per decile (£200 → £12,000+) with a
broken Y-axis between £2,000 and £12,000, paired diagonal slashes across
the axis line, and a zigzag squiggle across the Top-1% bar so the bottom
four bars stay readable next to the truncated outlier. View 2 plots the
same gain as % of typical household income (1.7% → 4.8%) on a linear
0-6% scale, no break needed. Bar tones match the 5 spectrum tiles
beneath. Tiles restyled with `causesStyle: 'numbered'` — numbered
outlined circles above each title — to visually rhyme with Card 1's
multi-dimensional row. Body text trimmed to remove the £ figures now
carried by the chart. Cache → `econos-v111`.

## 0.17.2 — 2026-05-30

### Impact of Economic Growth · Card 1 multi-dimensional row → flow

Replaced the cramped 5-column `causes2` row at the bottom of Card 1 with a
`flow` block: filled tone-accent circles numbered 1–5 sit above each title
with dashed connectors between them. Carries the sequential layering of
the framework ("The headline → but who it lands on → and what it buys →
and whether it lasts → and how it feels") with one of our standard
storytelling layouts rather than a custom tile grid. Cache → `econos-v110`.

## 0.17.1 — 2026-05-29

### Impact of Economic Growth · Card 1 redesign

Rebuilt the "Beyond GDP" hero (`growthScorecard`) as an HTML+SVG hub-and-spoke
scorecard. Each of the four satellite dimensions (Distribution, Composition,
Sustainability, Wellbeing) now carries its own gauge dial, a one-line
description, and a tone-coloured *Exam note:* with a concrete UK statistic.
The centre is a circular Real GDP card that sits in the column gutter rather
than overlapping a satellite. Scoped `<style>` block stacks the 2×2 grid to
single-column on viewports under 560 px. Added a closing "Growth is
multi-dimensional" 5-tile row to anchor the framework verbally as well as
visually. Cache bumped to `econos-v109`.

## 0.17.0 — 2026-05-29

### Universalised routing + full exam-board separation + per-board placeholders

A coordinated three-job ship covering routing, the per-board data
layer, and the topic registry display. The shell URL contract is
now consistent across Learn It / Link It / Land It; each exam
board reads only its own data files (no Edexcel A fallback); every
non-Edexcel-A board ships a placeholder cover for every included
topic.

- **Card tokens in Learn It URLs.** Every Learn It URL now carries
  a self-describing sub-route: `/<board>/<theme>/<topic>/learn-it/<card>`
  where `<card>` is `intro` (cover) or a title-derived slug
  (e.g. `demand-pull-inflation`, deduped within a topic by suffixing
  `-2`/`-3`). Falls back to `card-<n>` when the title is empty.
  Card-slug generation lives in `js/config/stations.js` as
  `window.ECONOS_CARD_SLUG`; the build-time route generator and
  `app.js` share it so URLs round-trip. `app.js` reads the card
  slug at boot to seed the current view, and calls
  `history.replaceState` on next/prev/start-session.
- **Land It section tokens self-describing.** `/land-it/a` →
  `/land-it/section-a` (same for `b`/`c`). Legacy URLs redirect
  in place via `history.replaceState`.
- **Unified route-builder factory.** `routes.learn` / `routes.link`
  / `routes.land` share a single `makeShellRoute(shellSegment)`
  factory; the build-time `topicRoutes()` writeRoute loop iterates
  a station generator per shell from one source of truth. Adding
  a fourth shell (e.g. `quiz-it`) is one line in each file.
- **`getBoard()` reads URL first.** A board pinned in the
  pathname wins over `localStorage`. The account-menu picker
  navigates to the equivalent Learn It page on the new board
  rather than reloading the current URL.
- **No more cross-board data fallback.** `ECONOS_BOARD_OVERRIDES`
  removed; `dataPath()` builds `/js/data/<board>/<theme>/<topic>/<file>`
  unconditionally.
- **Per-board placeholder generator** in `vite.config.js` writes
  a minimal cover-only `learn-it.js` for every non-Edexcel-A
  (board × included-topic) pair. Idempotent — only writes when
  missing or carrying the `/* PLACEHOLDER — auto-generated. */`
  header. **221 placeholder files committed** across Edexcel B
  / AQA / OCR.
- **Non-Edexcel-A boards clamped to Learn-only availability.** Link
  / Land pips render as "Coming soon". Start-session click is
  guarded with `if (!T.cards.length) return;` — the cover renders
  normally, clicking does nothing per the user's instruction
  "normal cover just when you click start session nothing loads".
- **Per-board top-level division labels.** New `divisionLabel`
  per board (Theme / Paper / Component) + `ECONOS_BOARD_DIVISIONS`
  map (slug → official syllabus wording, e.g. AQA `micro` →
  "Paper 1 — Individuals, firms, markets and market failure").
  Homepage grid section headers and the sidebar role pill use
  the right label per board.
- **OCR theme classification.** Uses Edexcel A's theme as a
  structural fallback (the OCR specs in `js/topics.js` are compact
  `X.Y` form that doesn't reliably encode the component — a
  separate content task to audit). Data layer is still
  board-isolated.
- **SW bump to `econos-v108`.** `topic-loader.js`, `stations.js`,
  `boards.js`, `app.js`, `shell.js` and all shell HTML files
  change.
- **Tests.** Unit tests reset the URL between describe blocks
  (the new URL-prefers-board logic would otherwise pollute later
  cases). E2E updated for the `section-a` rename + the new
  board-picker navigation flow.
## 0.16.0 — 2026-05-29

### Articles: clean-slate teardown of all markdown sources

Removed all 74 article markdown sources under `articles/sources/`. A diagram
review across the library surfaced enough content/diagram mismatches that
patching article-by-article was the wrong use of time. Instead we reset:
finish the core topic content carefully, build a vetted **library of named
diagrams** against `docs/diagram-spec.md` (validated by `npm run
audit:diagrams`), then rebuild the article set fresh so every piece matches
the quality bar of the rest of the site.

What was kept: the article **build pipeline** (`article-routes` plugin, the
`:::econos-diagram` directive + interactive-stepper baking), the hub
(`articles/index.html`), `articles.css` / `diagram.css`, the SEO roadmap
(`articles/SEO_PRIORITY.md`), and the diagram tooling shipped earlier this
cycle (spec doc, `audit:diagrams`, `render:charts`). The build emits zero
article pages and an empty article sitemap/search-index until the rebuild
begins — the hub's "N of 70 live" counter reads 0 accordingly.

## 0.15.5 — 2026-05-29

### Articles: real PC-firm diagram for the perfect-competition SR-vs-LR article

The "perfect competition: short run vs long run" article's only diagram was
the decorative `heroCostCurves` (coin stacks) under an analytical caption
("the competitive firm's cost and revenue curves, profit-max where MC = MR").
Swapped it for `firmLevelPcVsMonopoly` at its base state — a correct PC-firm
chart: horizontal AR = MR = P, U-shaped MC/AC, profit-maximising output at
MC = MR (P = min AC in the long run).

## 0.15.4 — 2026-05-29

### Diagrams: spec sheet, hardened audit, label-clash & clipping sweep

- **`docs/diagram-spec.md`** — the canonical reference (web-seeded from
  authoritative A-level sources + standard exam conventions) for every
  diagram family: required elements, geometry rules, label conventions,
  common errors. The ground truth the audit and review check against.
- **Hardened `audit:diagrams`** — now walks *every* interactive tab state
  (waiting past the 0.32s layer cross-fade so it doesn't sample mid-
  transition) and counts `<rect>`/`<text>` so payoff-matrix diagrams are no
  longer false-flagged as blank. This turned a noisy 100+ list into an
  accurate 16-finding worklist.
- **Cleared all 16 findings** at source in `js/icons.js` (shared by Learn It
  and articles): widened viewBoxes so right-edge curve labels stop clipping
  (`monopolySupernormalProfit`, `lemonMarketDiagram`, `prospectTheoryDiagram`,
  `priceFloorDiagramInteractive`); added a left margin to `phillipsInteractive`
  ("Inflation %"); shortened the over-long `prisonersDilemmaInteractive`
  subtitle; and moved the `AD₂` label off the `P` axis label in
  `adAsMonetary` and `adAsRecession` (the "ADP" collision). Audit now ✓ clean.
  Bumped `sw.js` cache (icons.js).

## 0.15.3 — 2026-05-29

### Articles: systematic diagram-review workflow + first fixes

Replaced the ad-hoc spot-check with a repeatable workflow under `scripts/`:

- `scripts/audit-diagrams.mjs` — renders every diagram in all 67 built
  articles in a real browser (with CSS, honouring inherited opacity so
  hidden interactive states do not false-positive) and flags blanks,
  colliding `<text>` labels, and labels clipped outside the frame.
- `scripts/render-charts.mjs` — renders each unique article diagram
  (deduped by svgKey) in every interactive state to PNG for vision review.

First fixes from the review, both swapping in the validated Learn It charts:

- **Demand-pull inflation** — `demandPullDiagram` placed the second
  equilibrium point off the AD₂∩SRAS intersection. Swapped the three
  articles that used it (inflation; demand-pull vs cost-push; inflation
  vs deflation vs disinflation) to the Learn It `adAsDemandPull`, where
  both equilibria sit on their intersections.
- **Keynesian vs Classical LRAS** — both the aggregate-supply article
  (which showed an unrelated SRAS cross) and the dedicated
  keynesian-vs-classical article (which showed only the Classical view)
  now use the Learn It `lrasViewsInteractive` as an interactive
  two-state chart (Classical vertical ↔ Keynesian reverse-L). Bridged the
  SPA's `sv-show` layer scheme to the static-article `show-<state>`
  scheme so the same SVG drives both. Bumped `sw.js` cache (icons.js).

## 0.15.2 — 2026-05-29

### Articles: monopoly cost-curve fix + monetary-policy interactive

Caught by rendering each diagram in a real browser with its CSS (not the
bare SVG):

- **Monopoly hero diagram** — the hand-rolled inline SVG had inverted,
  ∩-shaped ("hill") MC and AC curves and an MR=MC dot that did not sit on
  the MR line. Replaced it with the curated `monopolyDwl` diagram, which
  shows the monopoly-vs-competitive outcome with a correct upward-sloping
  MC and the deadweight-loss triangle. The supernormal-profit half is
  already covered lower in the article by `monopolySupernormalProfit`
  (verified U-shaped / Nike-tick costs).
- **`monopolyDwl` label clipping** — widened its viewBox (700→840) so the
  right-edge "MC (= S under competition)" and "D = AR (= MB)" labels no
  longer run off the frame. Benefits both articles that embed it.
- **Monetary-policy diagram** — was baking the QE-at-the-zero-lower-bound
  edge case as a static snapshot with a generic caption that did not
  match the picture. Switched it to the interactive `adAsMonetary`
  walkthrough (inflation at target → rate hike → QE at the ZLB), matching
  the Bank-of-England article.

Bumped `sw.js` cache (icons.js changed).

## 0.15.1 — 2026-05-29

### Articles: diagram-correctness pass

Audited all 67 article diagrams by rendering each (a checker that honours
inherited opacity so hidden diagram-states are not counted as visible)
and fixed every genuine defect: blank/axes-only diagrams on income &
cross elasticity, balance of payments and Brexit (the keys were JS-only
shells that render empty as static — replaced with verified static
curves), the all-states-at-once clash on the two perfect-competition
pieces, the two-panel label clash on aggregate demand, and the
overlapping rotated axis labels on the public-goods matrix. Final audit:
67 ok, 0 blank, 0 clash.

## 0.15.0 — 2026-05-29

### Articles: a curated diagram on every article

Every live article now carries a diagram. Fixed two that were still blank
(balance of payments → the J-curve; market failure → the negative-
externality diagram, both previously pointing at invalid/JS-only keys),
and added curated diagrams to the ~31 articles that had none — natural
monopoly (Thames Water), contestability (Octopus), the lemons model
(2008 crisis), price floors (minimum wage / MUP), tax-type curves, PPF
trade, prospect theory (behavioural), and AD-AS / demand worked examples
on the exam-technique pieces. Built a render-score harness that counts
visible geometry per diagram to catch blanks automatically; every key
used is verified to render as a static image.

## 0.14.1 — 2026-05-29

### Articles: fix blank diagrams

Five diagrams shipped blank in 0.14.0 because the curated key I picked was
a JS-populated shell that renders empty as a static image. Replaced them
with verified static-rendering curated diagrams: aggregate supply
(SRAS shift), balance of payments (the J-curve), the price mechanism
(market clearing a surplus), economic growth (outward PPF shift) and
monetary policy (AD-AS). Added a build-time render-score check to catch
blank diagrams in future.

## 0.14.0 — 2026-05-29

### Articles: use the exact curated Learn It diagrams

Replaced article diagrams across Theme 1, 2 and 3 with the exact diagrams
the core Learn It modules use, so they are consistent and correct
(previously many were mismatched, mis-stated or missing). Built the
infrastructure for this: the full SVG layer/state CSS is now ported into
`articles/diagram.css`, and the `:::econos-diagram` directive gained a
static `state="<step>"` mode that renders a curated diagram in one fixed
fully-built composition (no step tabs). Most curated diagrams are static
full SVGs embedded directly; the layer-based ones (externalities, PPF,
Phillips, AD-AS recession, kinked demand, cost stack, prisoner's
dilemma) render at their final state. Every diagram was verified by
rendering at desktop and mobile.

Unpublished 7 "diagram explainer" articles that duplicated a canonical
topic article (AD-AS, Phillips, PPF/opportunity cost, negative & positive
externalities, monopoly, PED) — set to `status: draft` so nothing is lost;
the canonical topic articles now carry the curated diagrams. SW cache →
`econos-v88`.

## 0.13.2 — 2026-05-29

### Articles: drop "diagram" from titles

Removed the word "diagram"/"diagrams" from all 12 article titles that
carried it (e.g. "AD-AS diagram explained" → "AD-AS explained"), so titles
read cleanly. (A diagram-overhaul to use the exact curated Learn It
diagrams follows separately.)

## 0.13.1 — 2026-05-29

### Articles: remove the knowledge-check questions

Removed the "Check your knowledge" MCQ section from every article and from
the build engine entirely: deleted `renderKnowledgeCheck`/`QC_DIFFICULTY`
and its call site in `vite.config.js`, removed `articles/quiz.js` (and its
script tag + copy step), dropped the `.article-qc*` CSS from
`articles.css`, and stripped the `questions:` frontmatter block from all
63 article sources. Articles now run body → want-more → footer. SW cache
→ `econos-v87`.

## 0.13.0 — 2026-05-29

### Articles: publish the full library (54 drafts → live)

Flipped all 54 reviewed draft articles to `status: live` and ticked the
remaining `SEO_PRIORITY.md` entries to `[L]`. The article library is now
**74 live articles** with the whole queue (Tranches 1-6) shipped — diagram
explainers, exam-technique guides, UK case studies and misconception
pages alongside the original topic articles. Build emits 74 article pages
and a 74-entry search index / sitemap.

## 0.12.0 — 2026-05-29

### Articles: SEO queue fully drafted (parallel-workflow batch)

Created the remaining ~46 articles in `articles/SEO_PRIORITY.md` as drafts
via a 9-subagent parallel workflow, taking the queue to **0 not-started**
(54 drafted, awaiting review):
- **Diagram explainers** (12) — AD-AS, Phillips, PPF, neg/pos externality,
  PED, indirect-tax incidence, max/min price, game-theory payoff matrix,
  monopoly profit-max, SR-vs-LR cost curves, perfect competition SR-vs-LR.
- **Exam technique** (10) — 25-mark structure, Level-4 evaluation, chains
  of analysis, the 15-mark essay, Paper 1/2/3 mistakes, data response,
  diagrams under time pressure, what "evaluate" means.
- **UK case studies** (12) — SDIL, Scottish MUP, Uber 2021, EU ETS, NMW,
  BoE rates 2022-24, Thames Water, HS2, Octopus Energy, 2008 crisis,
  Ostrom & the commons, Brexit & the current account.
- **Misconception pages** (12) — MR<AR, SRAS vs LRAS, Keynesian vs
  Classical LRAS, inflation/deflation/disinflation, movement vs shift,
  why monopoly fails, vertical LRAS, fiscal vs monetary, growth vs
  development, why perfect competition is a benchmark, absolute vs
  comparative advantage, progressive/proportional/regressive taxes.

Diagrams reuse existing learn-it presets where one fits (interactive) or
existing/authored static SVGs; all `svgKey`/`portraitKey` references were
validated against the icon library and all 54 drafts were verified to
parse/render by building them live once. Fixed a rendering bug in the
authored inline SVGs (blank lines inside `<svg>` made markdown-it spill
the markup as stray text) by stripping intra-SVG blank lines — this also
hardened the live public-goods matrix.

All new articles are `status: draft` (skipped by the build) pending
editorial review before going live.

## 0.11.2 — 2026-05-29

### Articles: complete the topic tranche of the SEO queue

Created the 3 remaining topic articles from `SEO_PRIORITY.md` as drafts:
**economic growth** (PPF outward-shift interactive diagram, Schumpeter),
**demand-pull vs cost-push inflation** (AD interactive diagram, Keynes),
and **behavioural economics** (Kahneman; no diagram — the behavioural
SVGs depend on learn-it JS and don't port to the static article stepper).
Each follows the house shape with three MCQ knowledge-checks.

Reconciled the queue: the topic tranche is now fully accounted for —
15 live, 9 drafted, 0 not-started. (Seven entries were already live but
still ticked `[ ]`; corrected to `[L]`.) Two further tranches remain for
later batches: single-diagram explainers and exam-technique guides.

## 0.11.1 — 2026-05-29

### New favicon set

Replaced the six favicon images (SVG, 96×96 PNG, `.ico`, apple-touch,
and the 192/512 web-app-manifest PNGs) with the supplied set — the
Econos pinwheel-"e" with an opaque white centre. Kept the existing
`site.webmanifest` (brand description, lang, start_url, scope,
orientation and the green/cream theme) since it already references these
filenames. SW cache → `econos-v86`.

## 0.11.0 — 2026-05-29

### Full-width shell, favicons on every page, Articles in the top bar

- **Large-screen layout.** The whole app shell (sidebar + content) was
  capped at 1400px and centred, so wide monitors got big empty gutters
  and a cramped feel. The shell now fills the viewport — sidebar pinned
  left, top bar spanning — and only the scrolling content column is
  capped (`--page-max-w`, 1640px) and centred. Narrow/normal screens are
  unchanged.
- **Favicons everywhere.** Article pages referenced `/favicon-96x96.png`,
  which the `favicon.*` static-copy glob never matched — so it 404'd and
  articles effectively had no favicon. Added a `favicon-*.png` copy rule
  and gave article pages the full icon set (SVG first, then PNG, `.ico`
  and apple-touch), matching the homepage, which renders the white-middle
  SVG.
- **Articles in the desktop top bar.** Added an "Articles" link to the
  top navigation on the homepage and on every article page (it remains in
  the footer too).

SW cache → `econos-v85`.

## 0.10.3 — 2026-05-29

### Learn It quiz: fix the blank screen + simplify the end-of-cards CTA

The end-of-Learn-It quiz was showing a blank screen on several topics.
Two causes, both fixed:

- **A single malformed question blanked the whole quiz.** A question
  whose shape didn't match its declared type (e.g. an `odd_one_out`
  carrying `opts` instead of `items`) threw during boot, wiping the card
  area with nothing to replace it. The engine is now defensive:
  `shuffleQuestion` guards every array access, `bootQuiz` drops any
  question it can't prepare, and `renderQ` catches a failed render
  (or unknown type) and skips that question instead of leaving the
  screen empty. Three mislabelled `odd_one_out` questions (aggregate
  demand, employment & unemployment, supply of labour) were corrected to
  `mcq` so they're kept rather than skipped.
- **Question stems rendered as "undefined".** Quiz pools are
  inconsistent about the stem field — some use `stem`, some `q` — and the
  renderers only read `stem`. `bootQuiz` now normalises `q` → `stem`.

Also: finishing the Learn It cards now shows just **"Take the quiz"** when
a quiz exists (the "Link it" button was removed there); the quiz's own
results screen carries the learner onward. Topics without a quiz still
offer the next stage. SW cache → `econos-v84`.

## 0.10.2 — 2026-05-28

### Mobile stage bar: per-stage colours

The mobile Learn/Link/Land bar coloured every active stage the same —
blue for the current step, green for a completed one — so Link It lit up
blue/green instead of its own colour. It now uses the positional palette
from the desktop stages nav: **Learn = green, Link = amber, Land = rose**,
applied only when a stage is the current step or completed. An
available-but-not-started or locked stage stays grey. SW cache →
`econos-v83`.

## 0.10.1 — 2026-05-28

### Learn It: finish the cards → "Link it", not "Next topic"

The last Learn It card offered a "Next topic" button that jumped
sideways to a different topic. It now walks the learner on to the next
**stage of the same topic** — "Link it" (or "Land it" if Link It isn't
available), linking to that topic's `link-it/intro`. The "Take the quiz"
button is unchanged and stays the primary action when a quiz pool is
present; the stage button only falls back to the next topic's Learn It
when this topic has no further stage. SW cache → `econos-v82`.

Note: the mobile Learn/Link/Land stage bar and the end-of-Learn quiz
both verified working on current `main` — if they appear missing on the
live site it is a stale service-worker cache; this cache bump plus a
redeploy forces every client to refresh.

## 0.10.0 — 2026-05-28

### Articles: diagram build-out, 5 new drafts, portrait fix, tables + mobile

**Diagrams on every existing article.** Added a diagram to the 8 that
lacked one. Two reuse the SPA's `ad-svg` state machine interactively via
new `INTERACTIVE_PRESETS` entries — balance of payments (the J-curve)
and monetary policy (Bank Rate / QE moving AD-AS). Five use clean static
SVGs — inflation (demand-pull), aggregate supply (demand- vs supply-
side), fiscal policy (crowding out), the multiplier (round-by-round
ripple) and GDP (circular flow). Public goods gets a bespoke inline
2×2 rivalry × excludability matrix authored for it (no fitting icon
existed).

**Portrait bug fixed.** Economist portraits embedded a *relative*
`src="assets/economists/x.png"`, which 404'd from an article URL at
`/articles/<slug>/`. The build now absolutises injected `assets/` paths
(portraits and diagram SVGs), so the portraits load.

**5 new draft articles** (status: draft, skipped by the build until
reviewed): the Phillips curve, perfect competition, oligopoly & the
kinked demand curve, income & cross elasticity (YED/XED), and asymmetric
information / the Akerlof lemons model — each to the house shape with
diagrams where a real SVG fits and three MCQ knowledge-checks. Queue
items ticked `[~]`.

**Want-more CTA** trimmed to a single "Explore the full topic" action
(the "Sign up free" button was removed).

**Tables** in article bodies are now styled (card frame, tinted header,
zebra rows) and wrapped so they scroll within the column on phones.

**Smartphone polish.** Tightened the sticky topnav so it no longer
overflows a 360px viewport; inline diagrams and tables scale/scroll in
frame. Verified no horizontal overflow at 360px across sampled articles.

SW cache → `econos-v81`.

## 0.9.2 — 2026-05-28

### Articles: smartphone layout for interactive diagrams

The interactive-diagram step tabs were laid out with an inline
`grid-template-columns`, which overrode the responsive rule — so on a
phone four tabs were crammed into one row, their labels clipped, and
the page scrolled sideways. The column count now comes from an
`--ad-tab-cols` custom property, letting a `max-width: 560px` media
query stack the tabs vertically (full labels, no clipping) and ease the
stage padding; a wide diagram scrolls inside its own card at a readable
min-width instead of being crushed or forcing the page to scroll.
SW cache → `econos-v80`.

## 0.9.1 — 2026-05-28

### Articles: interactive knowledge-check quizzes

The "Check your knowledge" questions are now proper click-to-answer
multiple-choice quizzes (new `articles/quiz.js`). Each option is a
button; the verdict — a green tick on the correct answer, a red cross
on a wrong pick — and the explanation appear only **after** the reader
picks an option, instead of the correct answer highlighting green as
soon as the card was revealed. The card locks after the first pick.
With JS off, the answer + explanation stay visible for accessibility
and indexing.

Every article question is now multiple choice — the 12 written-answer
("hard") questions were rewritten as challenging MCQs with plausible
distractors. The difficulty pill sits on its own line above the
question (never beside it). SW cache bumped to `econos-v79`.

## 0.9.0 — 2026-05-28

### Articles: interactive diagrams, knowledge-check restyle + content review fixes

**Interactive diagrams in articles.** The SPA's interactive diagrams
store every step as a stacked `layer-*` group and reveal one at a time
by swapping a `show-<state>` class; the article pages never loaded that
CSS state machine, so every layer painted at once and the steps
overlapped into an unreadable pile. Ported the layer/state-machine CSS
into a new `articles/diagram.css` (with a `:root` token shim so the SPA
design tokens resolve), added a tiny `articles/diagram.js` controller,
and extended the `:::econos-diagram` directive with an `interactive`
flag that expands into a stepper (stage + tabs + per-step caption) from
a new `INTERACTIVE_PRESETS` registry. With JS off, the first state is
baked in so the diagram still renders one clean state — never the
overlap. Step labels mirror the matching learn-it cards.

Diagrams added or made interactive across the library: negative
externalities, positive externalities, externalities, market failure,
supply and demand, price mechanism, opportunity cost (PPF), consumer
and producer surplus, unemployment (Phillips curve) and aggregate
demand.

**Knowledge-check restyle.** The difficulty now sits on its own line
above the question, the coloured-circle emojis are gone, and MCQ
options are visible up front so the reader can attempt the question —
the correct-answer highlight, tick and explanation are held back until
the card is opened.

**Content review fixes.** Corrected the inflation article's furlough
figure (~£70bn, not the £350bn whole-package number) and the QE start
date (2009, not 2008); aligned the UK carbon price (~£40/tCO₂) and
furlough job count (8.9m) across articles; reworded the opportunity-cost
OBR claim and softened an unsourced admin-cost figure in market failure;
fixed a broken monopoly Learn-It link (`/learn` → `/learn-it`); removed a
malformed economist-insight block from the public-goods article; and
corrected the multiplier article's `spa_topic` and the unemployment
article's AQA spec code.

Service worker cache bumped to `econos-v78` (article CSS/JS are
cache-first).

## 0.8.0 — 2026-05-28

### Articles: diagrams, economist insights, knowledge-check Qs + new footer + 5 new Theme 1 articles

A bundle of upgrades to the article engine plus a content push. The
article render pipeline now reaches feature-parity with the SPA's
learn-it presentation, and the topnav / footer treatment is now
consistent site-wide.

- **`:::econos-diagram` directive.** Articles can now embed any
  SVG from `js/icons.js` by key — the same diagrams used in the
  Learn It cards. Loaded via `loadIconsLib()` at build time
  (mirroring `loadTopicRegistry()`), so the article engine has
  the full `ECONOS_ICONS` map. Wraps the SVG in
  `.diagram-block.article-diagram` with an aria-label and
  optional caption.
- **`:::econ-insight` directive.** Mirrors the SPA's
  `economistQuote` block (portrait left, eyebrow label, quote,
  attribution). `portraitKey` looks up an
  `economistFriedman`/`economistKeynes`/etc. portrait SVG;
  `tone` modifier matches the section colour palette. Body of
  the container is the quote (markdown). The inflation +
  externalities + ped + gdp + multiplier articles now carry
  matching insights, and every new Theme 1 article ships one.
- **Knowledge-check section.** Every article with a
  `questions:` frontmatter array renders a three-card
  `:::article-qc` panel at the bottom: green (easy), amber
  (intermediate), rose (hardest). Each card is a native
  `<details>` element — no JS, fully indexable by Google, and
  accessible out of the box. Supports MCQ (`opts` + `ans`
  index) and short-answer (`ans` string) shapes. Six existing
  articles (inflation, externalities, PED, GDP, multiplier,
  monopoly) and all five new articles ship questions.
- **Topnav cleanup + multi-column footer.** The "Articles"
  link in the homepage and hub topnavs is gone; in its place,
  a four-column footer (`Learn · Library · Account · Legal`)
  with the L/L/L legend below ships on every page (homepage,
  articles hub, every article shell). The article hub's
  "Library status: N of 70" box is also gone — count was
  visually heavy and not actionable. CSS lives in `index.css`
  for the homepage and `articles/articles.css` for everything
  else.
- **5 new Theme 1 articles.** Split the joint externalities
  article into dedicated `negative-externalities-` and
  `positive-externalities-a-level-economics.md` posts. Plus
  three more high-volume Theme 1 topics:
  `public-goods-a-level-economics.md`,
  `supply-and-demand-a-level-economics.md`,
  `consumer-and-producer-surplus-a-level-economics.md`, and
  `price-mechanism-a-level-economics.md`. Each ships
  per-board spec frontmatter, an `:::econ-insight` block
  where matching learn-it data has one, an
  `:::econos-diagram` where the learn-it ships an interactive,
  and a 3-card knowledge-check.
- **SW bump to `econos-v77`.** `js/icons.js`, `vite.config.js`,
  `articles/articles.css`, `index.css` and `sw.js` all
  changed; cache-first assets must refresh on activation.

## 0.5.0 — 2026-05-28

### Articles: board pills + hub filter + theme-folder reorg + 3 new

Per the user directive — board pills at the top of every article,
a hub-wide board filter, an organisation system that scales past
five articles, AND new article content.

- **Board pills at the top of every article.** New
  `renderBoardPills(fm)` helper in `vite.config.js` emits a
  four-pill row (Edexcel A / Edexcel B / AQA / OCR) above the
  article header. Pills for boards the article applies to (a
  spec point exists in the frontmatter) are filled solid; the
  rest render hollow. The per-board spec number appears inside
  each filled pill so a student can spot their reference at a
  glance. Legacy string-shaped `spec:` frontmatter treats the
  article as Edexcel A only.
- **Hub board filter.** `articles/index.html` ships a new
  radio-group row above the search box (`All boards` plus the
  four board pills). The default reads from `localStorage`
  (`econos:board`) so a board switch on the homepage carries
  into the hub. Selecting a board narrows the grid to articles
  where that board is listed in the search-index `boards`
  field. Search + board filter compose.
- **Each hub card shows its board pills.** The runtime hub
  renderer emits a `.article-boards` row on every card so a
  student can scan the grid and see which articles touch their
  board at a glance.
- **Search-index extended.** Per-article entries in
  `dist/articles/search-index.json` now include `boards`
  (array of board ids the article applies to) and
  `board_specs` (object keyed by board id → spec number) on
  top of the existing flattened display `spec` string.
- **Theme-folder reorg.** Sources moved from flat
  `articles/sources/*.md` into `articles/sources/<theme>/*.md`
  (`microeconomics/` + `macroeconomics/` today; finance / global
  / development can follow). The build plugin's source walker
  now recurses, so authors can drop articles into any depth
  without touching `vite.config.js`. URLs stay flat at
  `/articles/<slug>/`.
- **Three new articles.** Tranche-1 priorities from
  `articles/SEO_PRIORITY.md`:
  - **What is GDP?** — real vs nominal, GDP vs GNI, the
    three measurement approaches, what GDP misses; funnels into
    `/learn/measures-of-economic-performance`.
  - **Unemployment explained: types, measures, and why the
    figures disagree** — the four types, claimant count vs
    LFS, NAIRU + natural rate, the inactivity hidden category;
    funnels into `/learn/employment-and-unemployment`.
  - **Monetary policy and the Bank of England's MPC** — the
    five-link transmission mechanism, the toolkit (Bank Rate,
    QE, forward guidance, TFS, QT), the 2022–24 case study;
    funnels into `/learn/demand-side-policies-monetary`.

  Each article ships per-board spec frontmatter so the pill row
  fills correctly across all four boards.
- **Spec-markdown content overviews.** Per user follow-up —
  added a content-focused (not exam-format) "Subject content
  overview" block to each of `docs/{edexcel-a,edexcel-b,aqa,ocr}-spec.md`
  summarising what each board's themes / sections / components
  actually cover and naming each board's distinctive content
  (e.g. Fisher's MV = PQ in AQA, hyperinflation + Harrod-Domar
  in OCR, behavioural economics + the financial sector in
  Edexcel A, business-stakeholder framing throughout Edexcel B).
- **CSS.** `articles/articles.css` gains `.article-boards`
  (full pill row for article pages) + `.hub-card .article-boards`
  (compact variant for hub cards) + `.hub__board-filter`
  (the hub's radio-group row).
- **SW cache** bumped `econos-v66` → `econos-v67`.
- **Version** 0.4.1 → 0.5.0.

## 0.4.1 — 2026-05-28

### Per-board themes on the homepage + folder restructure into board/theme

- **`js/data/<topic>/` → `js/data/<board>/<theme>/<topic>/`.** All
  91 Edexcel A baseline topic folders moved under
  `js/data/edexcel_a/<theme>/<topic>/`; the 15 AQA / OCR /
  Edexcel B override folders moved into their own board/theme
  hierarchies. Theme assignment is derived from each topic's
  `boards.<board>.spec` in the registry: Edexcel A and Edexcel B
  use `theme-1` ... `theme-4`; AQA and OCR use `micro` / `macro`.
  Topics with no registry entry land in `misc`.
- **TopicLoader path resolution updated** to construct
  `/js/data/<board>/<theme>/<topic>/<file>`. The fallback
  (when no override is registered) reads from the Edexcel A
  baseline at `/js/data/edexcel_a/<edexcel_a_theme>/<topic>/<file>`.
  Theme is derived at runtime from the registry via
  `themeFor(topic, board)` — no extra registry fields needed.
- **`link.html` and `land.html`** now defer-load `js/topics.js`
  so the loader has the registry available when constructing
  data paths. Previously only `learn.html` and `index.html`
  did.
- **Homepage shows per-board themes.** The hard-coded Edexcel A
  THEMES array gone. `index.html` now ships
  `BOARD_THEME_DEFS` for all four boards (Edexcel A and B with
  4 themes each; AQA and OCR with 2 sections — micro/macro)
  plus `buildThemesForBoard(board, allTopics)` which classifies
  every topic into the active board's themes by spec digit,
  sorts within each theme by spec, and drops any theme with no
  topics. Switching board via the picker rebuilds the grid for
  that board's structure.
- **SW cache** bumped `econos-v65` → `econos-v66`.
- **Version** 0.4.0 → 0.4.1.

## 0.4.0 — 2026-05-28

### Data layout: rename, consolidate, retire Quiz shell

Sweeping data-layout refactor driven by four user directives in
sequence: board picker at the top of the topics list, rename
`topic.js` → `learn.js`, consolidate per-station / per-section
files into one `link.js` / `land.js` per topic, and retire the
standalone Quiz shell while moving quiz pools into the right Learn
data file.

- **Board picker on the homepage.** A radio-group row above the
  topic grid (`#board-picker` in `index.html`, styles in
  `index.css`). Each board renders as a pill; the active one is
  filled. Selecting reloads — same pattern as the account-menu
  picker. Re-reads `TopicLoader.getBoard()` at render time so
  every spec chip, theme grouping and footer count refreshes.
- **`topic.js` → `learn.js`** across 91 baseline topics + 15
  board overrides = 106 file renames via `git mv`. Boot script
  `js/boot/learn-boot.js` updated to load `learn.js`. The Learn
  It data file now matches the URL contract verb.
- **Per-station / per-section consolidation.** All `link-*.js`
  files for a topic concatenated into a single `link.js` per
  topic; all `land-*.js` files into a single `land.js` per
  topic. Each inner IIFE still publishes its own
  `window.ECONOS_LINK_*` / `window.ECONOS_LAND_*` global, so the
  engines that read those globals need no changes. The router /
  stations config points every station at the consolidated file.
- **`js/config/stations.js` simplified.** Every Link It station
  and Land It section now points at `link.js` or `land.js`; the
  Quiz placeholders are gone.
- **Quiz shell retired.** Standalone `/quiz/<topic>/<set>` URL
  contract removed; `quiz.html`, `js/boot/quiz-boot.js` deleted.
  Quiz pools merged into each topic's `learn.js` under the same
  `window.ECONOS_QUIZ` global. `js/engines/quiz-engine.js` is
  retained and now defer-loaded by `learn.html`, `link.html`
  and `land.html` so any shell can render the quiz inline by
  swapping its `#app-root` for a `#quiz-root` and calling
  `bootQuiz()`. The end-of-Learn-It card surfaces a "Take the
  quiz →" button when `window.ECONOS_QUIZ` is present and uses
  the new `take-quiz` action handler in `js/app.js` to render
  the quiz inline.
- **Per-file override granularity.** `window.ECONOS_BOARD_OVERRIDES`
  in `js/config/boards.js` now lists overrides as
  `{ <topic>: { learn: true, link: false } }` instead of
  `{ <topic>: true }`. The TopicLoader's `dataPath()` checks the
  filename stem against the per-file flag so a board can ship a
  custom `learn.js` while still inheriting the Edexcel A baseline
  for `link.js` / `land.js` on the same topic.
- **Vite topic-routes plugin** drops Quiz: no `/quiz/` shell
  generation, no Quiz JSON-LD, no Quiz availability flag, no
  `quizSets` config field. `SHELL_HTML` is now
  `{ learn, link, land }`.
- **Tests.** Unit `topic-loader.test.js` test for `/quiz/<topic>/<set>`
  rewritten to assert `parsePath` returns `null`. E2E
  `shells.spec.js` Quiz JSON-LD test + CSP test + availability
  test all updated. `tests/e2e/topic-loader.spec.js` routes test
  and parsePath test similarly. 28 / 28 e2e pass, 24 / 24 unit
  pass.
- **Service worker** bumped `econos-v63` → `econos-v64`. Forces
  a clean refresh across all clients given the topic.js → learn.js
  rename and consolidated file paths.
- **Legacy compat shim.** `TopicLoader.routes.quiz()` retained as
  a no-op returning `''` so existing learn.js files that
  reference `quizCta: { href: TopicLoader.routes.quiz('main') }`
  still parse. The renderer no longer reads `quizCta`, so the
  field is orphan data. Shim removable once every learn.js is
  rewritten to drop it.

## 0.3.1 — 2026-05-28

### Multi-board content — first board-variant Learn It topics ship

The framework in 0.3.0 wired the override path; this release fills
in the first batch of per-board variants for the highest-traffic
flagship topics. Every variant preserves the Edexcel A baseline's
visual layout, diagrams, flow-step structure and card-render
templates — what changes is the spec point, the section / theme
name, and the per-board exam-edge framing.

- **5 flagship Learn It topics × 3 boards = 15 new `topic.js` files:**
  - `causes-of-inflation-and-deflation` — AQA 3.2.3.3 (Fisher MV = PQ
    framing per 4.2.3.3 (c) + LR vertical Phillips curve), OCR 2.4
    (hyperinflation distinction explicit per 2.4 (a) + evaluate-verb
    mark-scheme retune), Edexcel B 2.5.3 (business-first reframe:
    impact on firms — uncertainty, loss of international
    competitiveness — and individuals).
  - `aggregate-demand` — AQA 3.2.2.2 (AS/A-level depth distinction),
    OCR 1.2 (evaluate-verb retune), Edexcel B 4.4.1 (Theme 4
    framing as part of "Making markets work").
  - `aggregate-supply` — AQA 3.2.2.5 + 3.2.2.6 (SRAS / LRAS
    determinants split), OCR 1.3 (with cross-reference to OCR 2.8
    Phillips Curve), Edexcel B 4.4.1.
  - `employment-and-unemployment` — AQA 3.2.3.2 / 4.2.3.2 (AS
    vs A-level depth, voluntary / involuntary, natural rate), OCR
    2.3, Edexcel B 2.5.4 (firm-impact lens).
  - `national-income-and-the-multiplier` — AQA 3.2.2.4 / 4.2.2.4
    (explicit k = 1/(1−MPC) only at A-level; no MPW formula),
    OCR 1.5 (multiplier + accelerator bundled per OCR 1.5 (b)),
    Edexcel B 4.4.1.
- **`js/config/boards.js` — overrides registered.** All 15
  (board, topic) pairs added to `window.ECONOS_BOARD_OVERRIDES` so
  the loader resolves to the board path; remaining topics fall back
  to the Edexcel A baseline transparently.
- **Process.** Authoring follows the user's directive — keep the
  rough layout (visual key, flow steps, causes grid, comparison
  tables, examEdge structure), only rework wording where each
  board's spec emphasis or mark-scheme demands it. Topics whose
  Edexcel A content is itself a draft / placeholder are left as
  baseline-only fallbacks; no fake board-specific content is
  authored for them.

## 0.3.0 — 2026-05-28

### Multi-exam-board — content layer + per-(topic, board) spec data

The board picker shipped in 0.1.x set up the framework; this release
fills it in with real per-board data, wires the home page to filter
and display it, and migrates the article footers to ship every
board's spec point.

- **`js/topics.js` — `boards` map on every topic.** Each of the 78
  topics now carries a `{ edexcel_a, edexcel_b, aqa, ocr }` block
  with the relevant sub-section number for each board (sourced from
  the four `docs/<board>-spec.md` reference files added in 0.2.0)
  and an `included: true` flag. Topics whose syllabus mapping
  doesn't exist for a given board carry `spec: null` and continue
  to appear in the grid without a board-specific chip.
- **Home page — board-aware topic grid (`index.html`).** The
  topic-card chip now shows the per-board spec point (e.g. AQA
  users see "3.2.3.3" on the inflation card; OCR sees "2.4"). The
  footer count updates to "N topics · 4 themes · <board> spec".
  Topics with `included: false` for the active board are hidden;
  no topic excludes any board today but the filter is in place.
- **Article frontmatter — per-board `spec:` object.** The five live
  articles (inflation, monopoly, aggregate demand, aggregate
  supply, multiplier) migrated from `spec: "Edexcel A · 3.4.5"` to
  a map keyed by board id. The `article-routes` plugin renders
  every populated entry in the meta line + footer ("Mapped to
  Edexcel A 3.4.5 · Edexcel B 4.1.1 · AQA 4.1.5.6 · OCR 4.2") so
  search engines see every variant and any board's reader finds a
  spec point they recognise. Legacy string-shaped `spec:` still
  works for hand-rolled articles.
- **Per-board content override path — `js/data/<board>/<topic>/`.**
  `TopicLoader.loadData` now consults the
  `window.ECONOS_BOARD_OVERRIDES` opt-in set (declared in
  `js/config/boards.js`) and prefers the board-specific data path
  when a `(board, topic)` pair is listed. The set is empty today —
  every board reads the Edexcel A baseline at `js/data/<topic>/`
  for free, no file duplication. When AQA / OCR / Edexcel B
  publishes a variant of a topic, drop the data files into
  `js/data/<board>/<topic>/` and add the entry to the overrides
  set; the loader picks them up. Opt-in (rather than runtime
  404-probing) means non-Edexcel-A users don't pay a 404 round-trip
  on every page load.
- **SW cache bumped** `econos-v62` → `econos-v63` so the homepage
  + `app.js` + topics registry land freshly on all clients.
- **Docs.** `CLAUDE.md` "Multi-exam-board" section now documents
  the `boards` map schema on topics, the per-article frontmatter
  shapes, and the override directory convention.

## 0.2.0 — 2026-05-28

### National Income (Theme 2 · 4.1–4.3)
- Rebuilt the `national-income` topic from 3 cards to 5, covering Edexcel A
  2.4.1, 2.4.2 and 2.4.3 in sequence: the circular flow of income, the three
  injections (I, G, X), the three withdrawals (S, T, M), the full
  open-economy circular flow with the J = W equilibrium identity, and the
  income-vs-wealth (flow-vs-stock) distinction. Each card is rendered through
  `ad-interactive` with mockup-matched section ordering — green check tip at
  the top, BIG IDEA + EXAM EDGE at the bottom.
- Added two new named SVGs in `js/icons.js`:
  - `nationalIncomeFlow` — the two-sector circular flow used on Card 1, with
    blue real-flow arrows (factors of production, goods and services) and
    amber money-flow arrows (factor payments, consumer spending).
  - `nationalIncomeOpenEconomy` — the full open-economy circular flow used
    on Card 4, with Households, Firms, Government, Financial Markets and
    Overseas Sector boxes plus all six labelled injections and withdrawals.

### Reference docs
- `docs/edexcel-a-spec.md`, `docs/edexcel-b-spec.md`,
  `docs/ocr-economics-spec.md` and `docs/aqa-economics-spec.md` now ship the
  full subject content for all four mainstream UK A-level economics boards.
  Used as the canonical map when authoring or board-tagging content.

### Card renderer extensions (`ad-interactive`)
- `nuanceBanner` — single horizontal callout with optional icon, primary
  text, secondary text, and an "Example" panel. Used for Card 5's wealth
  effect.
- `checkList` — stack of green-check rows with a bold heading and a body
  sentence. Used for Card 5's common confusions.
- `formulaPills` — chip-style formula pills with `+`/operator separators and
  an explanatory note alongside. Used for Card 2's I + G + X formula view.
- `bottomTip` — coloured callout placed late in the card (after `flow`,
  before `conclusion`), single object or array. Used for the amber warning
  on Card 2/3 and the slate info note on Card 4.
- `causesNote` — slim slate caption strip rendered immediately after the
  `causesFirst` causes grid. Used for Card 1's "National income can be
  measured from the income, output, or expenditure side" transition line.
- `conclusionPosition: 'end'` — when set, the `conclusion` (BIG IDEA) block
  defers to render after `nuanceBanner` / `checkList`, just before
  `examEdge`. Keeps the BIG IDEA as the final summary on cards that use the
  new blocks.
- `left.sub` / `right.sub` — pair tiles now accept a subtitle line under the
  label (e.g. "measured per unit of time" / "measured at a point in time" on
  Card 5).

### Plumbing
- Bumped service-worker cache to `econos-v61` (forces a refresh of
  `js/app.js`, `js/icons.js` and `styles.css`).

## 0.1.0 — 2026-05-28

First numbered release. Block of URL contract, SEO, security, observability
and chrome work that cuts the site over from polished-demo toward
ready-for-real-hosting. The "Unreleased" section below covers the
foundational SPA refactor that brought econos to its first usable state and
preceded this numbered release.

### URLs & routing
- Cut over from query-string URLs (`?topic=X&station=Y`) to path-based form
  (`/learn/<topic>`, `/link/<topic>/<station>`, `/land/<topic>/<section>`,
  `/quiz/<topic>/<set>`). Every URL has a real generated `index.html` in
  `dist/`, emitted by the build-time `topic-routes` Vite plugin with per-topic
  `<title>` / `<meta description>` / `<link rel=canonical>` baked in.
- Rebuilt topic IDs so the registry ID is the URL slug — no internal
  hyphen/underscore mapping layer.
- Inbound legacy `?topic=…&station=…` URLs auto-rewrite to the canonical
  path on first load (one-shot `history.replaceState`).
- `sitemap.xml` generated from the registry at build time so it can never
  drift.
- Single source of truth for shell stations (`js/config/stations.js`); the
  build plugin and runtime routers read the same file.

### SEO
- `LearningResource` / `Quiz` JSON-LD on every shell, varying
  `learningResourceType` by stage (Concept / ApplicationExercise /
  AssessmentExercise / Quiz). Same build-plugin pipeline as the meta tags.
- Per-topic stage availability emitted as a meta tag so the runtime stages
  widget can lock stages a topic doesn't have data for.
- Land section labels read "Section A · Land It" instead of bare "A".

### UX chrome
- Topnav + sidebar render the full lockup (dots + wordmark + tagline) with
  absolute asset paths so nested URLs resolve correctly.
- Single top bar on mobile — removed the duplicate `.mobile-nav` block; the
  session topbar carries back + crumbs + avatar on its own.
- Mobile stages strip — Learn / Link / Land jump-points pinned under the
  topbar on viewports ≤ 880 px so mobile users can move between stages
  mid-session.
- Account dropdown (sidebar + topbar) is wired up — Log out clears
  `localStorage.econosAuth` and bounces to `/login`. Replaces the previous
  chevron-but-no-handler dead affordance.
- "Coming soon" affordance: stages without data render locked, with a
  tooltip, on both desktop widget and mobile strip.
- Initial-load skeleton in every shell — no more blank cream page for
  ~500 ms on slow networks.

### Reliability & observability
- Post-deploy smoke test: CI fails if `/`, a representative topic page, or
  `/sitemap.xml` doesn't return 200 within ~90 s of deploy.
- Service worker auto-reloads open tabs when a new cache version activates,
  killing the "old JS against new CSS" half-deployed-UI bug.
- Vitest unit suite (`tests/unit/**`) covering the SW upgrade contract,
  `TopicLoader.parsePath` round-trips, and `Progress.*` per-topic isolation.
  Runs on every commit via pre-commit hook and in CI before build.

### Security
- CSP `script-src 'unsafe-inline'` removed on `learn` / `link` / `land` /
  `quiz` / `login`. Every inline `<script>` moved to an external file under
  `/js/sw-register.js` or `/js/boot/<shell>-boot.js`.

### Deploy pipeline
- GitHub Pages deploys `dist/` via `actions/deploy-pages` rather than the
  branch root — required because the new path-based URLs only exist as
  files after a build.

### Deferred from this sweep (tracked for future work)
- Code-split / SVG-sprite the 1.1 MB `js/icons.js` — needs its own build
  step for symbol-id deduplication.
- Sentry / Plausible — both pending hosting + service signups.
- CSP `style-src 'unsafe-inline'` removal — needs every inline `style=`
  attribute on dynamically-rendered DOM to move to CSS classes first.
- Touch-target audit + login-page a11y test — small but want their own
  focused PR.
- Per-topic `og:image` generator pipeline.

## Unreleased

### Routing

- **Legacy redirect stubs deleted.** The 14 per-section HTML files
  (`topic.html`, `link_intro.html`, `link_chain.html`,
  `link_chain_open.html`, `link_diagram.html`, `link_depends.html`,
  `link_judge.html`, `link_complete.html`, `link_context.html`,
  `land_intro.html`, `land_section_a.html`, `land_section_b.html`,
  `land_section_c.html`, `land_complete.html`) no longer exist as
  files or HTTP routes. Repo root now ships **exactly six HTMLs**:
  `index`, `learn`, `link`, `land`, `quiz`, `login`.
- **`scripts/lint.sh` tightened** with `check_no_legacy_stub_files`
  — a new HTML file matching the legacy pattern at the repo root
  now fails the build.
- **`PAGE_MAP` retained** in `js/topic-loader.js` because per-topic
  data files still write the legacy filenames for back-compat. New
  code may use the canonical form
  `TopicLoader.buildUrl('link.html', { station: 'intro' })`.

### Code health
- **Zero ESLint warnings.** 18 dead-variable / unused-parameter warnings
  cleaned up; `npm run lint:js` enforces `--max-warnings=0`. Pre-commit
  hook fails fast on any new warning.
- **`.editorconfig`** for cross-IDE consistency (LF, UTF-8, 2-space).
- **husky hooks**: pre-commit (lint), pre-push (e2e). Override with
  `--no-verify` or `ECONOS_SKIP_E2E=1` for deliberate WIP pushes.
- **219 redundant `sessionLabel:` lines deleted** from `js/data/`;
  every read site now uses `T.sessionLabel || TopicLoader.sessionLabel(stage)`.
- **41 KB of unused logo PNGs deleted** from `assets/`.
- **Legacy global localStorage key** (`econos_link_unlocked` /
  `econos_land_unlocked`) no longer written; read kept as one-release
  migration fallback.

### Performance
- **rAF-deferred widget init** in `js/app.js`: the 4× explorer DOM
  scans now run after the next paint, so card transitions show
  content before the interactive widgets warm up.

### Build / tooling
- **Vite multi-page build** — `npm run dev` (HMR), `npm run build` (emits
  `/dist`), `npm run preview` (serves `/dist` at port 4173). Classic
  IIFE scripts copied verbatim via `vite-plugin-static-copy`; HTML +
  CSS get hashed asset URLs.
- **Playwright CI** — `npm run test:e2e` runs 18 tests (13 desktop +
  5 mobile) on every push. axe-core a11y included; `region` rule
  disabled (skip-link false positive). GitHub Actions workflow at
  `.github/workflows/ci.yml`.
- **ESLint + Prettier** with a custom `no-restricted-properties` rule
  blocking `window.location.*` in engines (the SPA contract).
- **`scripts/lint.sh`** — repo-local checks: no `window.location.*` in
  engines, no `POLISH v#` headers in styles.css, no legacy HTML refs
  outside `TopicLoader.buildUrl()`.

### Performance / a11y / hardening
- **Self-hosted Inter + Fraunces latin** subsets (165 KB combined). No
  more Google Fonts CDN round-trip on cold load. axe-core's
  `color-contrast` rule is back on now that font-load flicker is gone.
- **Content Security Policy** meta tag on every HTML shell:
  `default-src 'self'`, no third-party script/connect/iframe/object
  sources, `data:` allowed only for fonts + images (Land diagrams).
- **Loading skeleton** rendered after a 180 ms grace period when the
  Link/Land routers lazy-fetch an engine + data file. Cancelled the
  moment the real engine paints; respects `prefers-reduced-motion`.
- **Inline CSS extracted** — `index.html` 825 → 319 lines (`index.css`),
  `login.html` 175 → 78 lines (`login.css`).
- **POLISH v# stigma gone** — v5 (card top stripe), v8 (sticky chrome),
  v9 (land-meta palette parity) inlined into canonical sections. The
  rest (v2 / v3 / v4 / v6 / v7×2) renamed to descriptive *DESIGN
  SYSTEM* headers; lint blocks any new `POLISH v#`.
- **Mobile breakpoints verified** — Pixel 7 viewport tests assert no
  horizontal scroll, sidebar hidden, right-rail hidden, skip-link first.

### Added
- **SPA shell architecture** — three thin shells (`learn.html`, `link.html`,
  `land.html`) replace the 13 per-section pages. `link.html` and
  `land.html` read `?station=<id>` and let dedicated routers (`link-router.js`,
  `land-router.js`) handle in-place navigation via `history.pushState`.
- **`js/engines/shell.js`** — shared sidebar / topbar / app wrapper +
  auto-injected mobile-nav so each shell HTML doesn't hand-roll chrome.
  Engine code renders into `#app-root` only; chrome is single-source.
- **`js/engines/{link,land}-router.js`** — lazy-load each station's engine
  and data file on first visit, cache by `${topic}/${file}`, and
  `<link rel="prefetch">` the next likely station during
  `requestIdleCallback`.
- **`js/topic-loader.js`** PAGE_MAP + `TopicLoader.go()` — legacy
  `link_chain.html` etc. transparently rewrite to
  `link.html?topic=…&station=chain`; SPA-internal navigation skips a
  full page load when the matching shell is loaded.
- **`window.ECONOS_USER`** — single source for the user's initials,
  name, role, and streak (placeholders in dev, ready for real auth wiring).
- **`js/logger.js`** — runtime-toggleable `Logger.info/warn/error`
  wrapper over `console.*` so production can ship with logs off.
- **`scripts/lint.sh`** — repo-local checks:
  - no `window.location.*` in engines (use `TopicLoader.go`);
  - no new `POLISH v*` blocks at the bottom of `styles.css` (inline fixes
    into canonical sections instead);
  - no legacy per-section HTML refs outside `TopicLoader.buildUrl(...)`.
- **Legacy redirect stubs** — `topic.html` + 13 `link_*` / `land_*` files
  meta-refresh + JS-redirect to the SPA shell, preserving `?topic=`.
  Slated for removal one release after the SPA migration ships.
- **Accessibility on the new chrome**:
  - `aria-current="page"` on the active sidebar nav item;
  - `aria-current="step"` and per-stage `aria-label` on the progress widget;
  - `aria-label` on streak chips with the inner emojis `aria-hidden`;
  - sidebar user / topbar avatar promoted from `<div>` to `<button>` with
    `aria-label="Account menu"`;
  - topbar back link gets a descriptive `aria-label`.
- **CHANGELOG.md** (this file).

### Changed
- **Stylesheet** — `styles.css` rewritten with the design-tool polish
  (theme-scoped card top stripes, right-rail per-stage colour system,
  sticky chrome, consistent primary button, session-meta layout, slate
  evidence colour, Land-It meta palette parity). Lives at repo root;
  `css/styles.css` removed. `html { overflow-x: clip }` (not
  `body { overflow-x: hidden }`) so `position: sticky` keeps working.
  Main's `--app-max-w: 1280px` cap preserved.
- **`index.html`** — full home-page redesign; link generators point at
  `learn.html` / `link.html` / `land.html`.
- **Icons palette swap** — `#1FB574 → #10B981` (green), `#F5B800 →
  #F39E0B` (amber), `#EC2D68 → #E11D48` (rose), `#7C3AED → #7D23CB`
  (purple); 97 replacements in `js/icons.js`.
- **Engine navigation** — every `window.location.href` /
  `window.location.replace` in `link-*` and `land-section-*` engines
  swapped to `TopicLoader.go(…)` so the SPA shells stay in charge.
- **Router robustness** — unknown stations now render an in-page
  "Station not found" message into `#app-root` (preserves chrome)
  instead of `console.error` + blank page. `document.title` updates
  on every station navigation.
- **Topbar streak chip removed** — the sidebar streak card is the
  prominent gamification surface; the topbar chip was a duplicate.
- **`quiz.html`** — replaced its hand-rolled sidebar / topbar HTML with
  `Shell.renderSidebar()` / `Shell.renderTopbar()`; the legacy
  `TopicLoader.buildUrl('topic.html')` is now `'learn.html'`.

### Removed
- 13 per-section HTML files: `topic.html`, `link_intro.html`,
  `link_context.html`, `link_chain.html`, `link_chain_open.html`,
  `link_diagram.html`, `link_depends.html`, `link_judge.html`,
  `link_complete.html`, `land_intro.html`, `land_section_a.html`,
  `land_section_b.html`, `land_section_c.html`, `land_complete.html`.
  Redirect stubs ship at the same paths for one release.
- `js/engines/diagram.js`, `js/engines/diagram-specs.js` — dead code
  (nothing in any shell loaded them).
- `css/styles.css` — moved to `/styles.css`.

### Deferred
- **SRI on Google Fonts CSS link** — Google Fonts serves different
  bytes per user-agent, so a static integrity hash doesn't work
  reliably. Handled by the upcoming "self-host font subsets" change
  which will allow real SRI.

## Older entries

Prior history lives in git: `git log --oneline -- styles.css js/app.js`.
