# Topic build status

Single source of truth for **which Learn It topics are built to the current
"mockup-era" standard, and which still need work.** Maintained by hand;
read by build sessions (and Dispatch) before starting a topic.

## How to read this

Two things are tracked, because they're different questions:

1. **Build state** — verifiable from the data file:
   - 🟢 **Modern** — all/most cards use `template: 'ad-interactive'` with the
     10-pattern design system (gauges, interactive diagrams, diagnose rows,
     flows, pairs, evidence-then-verdict).
   - 🟡 **Legacy** — built on the *old* bespoke templates (`framing` /
     `diagnose` / `mechanisms` / `cause` / `paired` / `deflation` / generic).
     Works, but pre-dates the pattern system.
   - 🔴 **Stub** — 0–2 cards; effectively not built.
   - ⬜ **Cover-only placeholder** — `learn-it.js` stripped to a cover so
     unreviewed legacy content can't mislead. Replace with a full
     `ad-interactive` build once the topic runs through the mockup pipeline.
2. **Mockup-built?** — did this topic go through the full pipeline
   *ChatGPT makes one image per card → Claude turns the images into the
   actual cards*? This is the question that decides whether Dispatch needs
   to run it.

When Dispatch runs a topic through the mockup→build pipeline, set
**Build** to 🟢, set **Mockup-built?** to ✅, and add the date.

> Order of every table below follows the **Edexcel A homepage order**
> (the order topics appear in `js/topics.js`), so this doc reads like
> a build queue: scroll down from the top, the first unticked row is
> the next thing to build.

---

## Theme 1 — Microeconomics · all mockup-built ✅

| # | Topic | Build | Mockup-built? | Notes |
|--:|-------|:-----:|:-------------:|-------|
| 1 | introduction-to-economics | 🟢 | ✅ | |
| 2 | factors-of-production | 🟢 | ✅ | |
| 3 | production-possibility-frontiers | 🟢 | ✅ | |
| 4 | specialisation-and-money | 🟢 | ✅ | |
| 5 | economic-systems | 🟢 | ✅ | |
| 6 | demand | 🟢 | ✅ | |
| 7 | price-elasticity-of-demand | 🟢 | ✅ | uses `ped-five-frames` / `ped-calculation` |
| 8 | income-and-cross-price-elasticity | 🟢 | ✅ | uses `yed-calculation` / `xed-calculation` |
| 9 | supply | 🟢 | ✅ | |
| 10 | price-elasticity-of-supply | 🟢 | ✅ | uses `pes-five-frames` / `pes-calculation` |
| 11 | price-determination | 🟢 | ✅ | |
| 12 | the-price-mechanism | 🟢 | ✅ | |
| 13 | consumer-and-producer-surplus | 🟢 | ✅ | |
| 14 | indirect-taxes-and-subsidies | 🟢 | ✅ | |
| 15 | behavioural-economics | 🟢 | ✅ | |
| 16 | market-failure | 🟢 | ✅ | |
| 17 | negative-externalities | 🟢 | ✅ | |
| 18 | positive-externalities | 🟢 | ✅ | |
| 19 | public-goods | 🟢 | ✅ | |
| 20 | information-gaps | 🟢 | ✅ | |
| 21 | taxes-and-subsidies-as-policy-tools | 🟢 | ✅ | |
| 22 | government-failure | 🟢 | ✅ | |
| 23 | environmental-economics | 🟢 | ✅ | |
| 24 | government-intervention-in-markets | 🟢 | ✅ | |

## Theme 2 — Macroeconomics

| # | Topic | Build | Mockup-built? | Notes |
|--:|-------|:-----:|:-------------:|-------|
| 25 | inflation-measurement-and-costs | 🟢 | ✅ | 7 cards · essay-framework card got `icon-top` fix |
| 26 | causes-of-inflation-and-deflation | 🟢 | ✅ | 8 cards |
| 27 | employment-and-unemployment | 🟢 | ✅ | 8 cards |
| 28 | aggregate-demand | 🟢 | ✅ | 8 cards |
| 29 | consumption | 🟢 | ✅ | 8 cards |
| 30 | investment | 🟢 | ✅ | 8 cards |
| 31 | government-spending | 🟢 | ✅ | 8 cards |
| 32 | net-trade | 🟢 | ✅ | 8 cards |
| 33 | aggregate-supply | 🟢 | ✅ | 8 cards |
| 34 | national-income | 🟢 | ✅ | 5 cards |
| 35 | national-income-and-the-multiplier | 🟢 | ✅ | 4 cards · uses worked-example template for C3 |
| 36 | measures-of-economic-performance | 🟡 | ☐ | 8 cards, **legacy templates** — rebuild candidate |
| 37 | equilibrium-national-income | 🟢 | ✅ | 4 cards |
| 38 | trade-cycle-shocks-and-economic-growth | 🟢 | ✅ | 5 cards · Card 5 reworked with Roger 05-29 |
| 39 | the-impact-of-economic-growth | 🟢 | ✅ | 6 cards · built from mockups this session 05-30 |
| 40 | macroeconomic-objectives-and-trade-offs | 🟢 | ✅ | 6 cards · built from mockups this session 05-30 |
| 41 | demand-side-policies-fiscal | ⬜ | ☐ | Stripped 05-30 — was legacy, pre-mockup pipeline |
| 42 | demand-side-policies-monetary | ⬜ | ☐ | Stripped 05-30 — was legacy |
| 43 | supply-side-policies | ⬜ | ☐ | Stripped 05-30 — was legacy |
| 44 | macro-conflicts-and-trade-offs | ⬜ | ☐ | Stripped 05-30 — **overlaps #40**, resolve before rebuilding |
| 45 | standard-of-living-and-wellbeing | ⬜ | ☐ | Stripped 05-30 — was legacy |

## Theme 3 — Business economics & market structures · none mockup-built

All topics in Theme 3 have been **stripped to cover-only placeholders** —
they predate the mockup pipeline and the legacy content hadn't been
reviewed. Replace each with a full `ad-interactive` build once it runs
through the pipeline.

| # | Topic | Build | Mockup-built? |
|--:|-------|:-----:|:-------------:|
| 46 | business-growth | ⬜ | ☐ |
| 47 | business-objectives | ⬜ | ☐ |
| 48 | revenue | ⬜ | ☐ |
| 49 | costs | ⬜ | ☐ |
| 50 | economies-and-diseconomies-of-scale | ⬜ | ☐ |
| 51 | profits-and-losses | ⬜ | ☐ |
| 52 | types-of-efficiency | ⬜ | ☐ |
| 53 | perfect-competition | ⬜ | ☐ |
| 54 | monopolistic-competition | ⬜ | ☐ |
| 55 | oligopoly | ⬜ | ☐ |
| 56 | collusion-and-cartels | ⬜ | ☐ |
| 57 | game-theory | ⬜ | ☐ |
| 58 | monopoly | ⬜ | ☐ |
| 59 | monopsony | ⬜ | ☐ |
| 60 | contestable-markets | ⬜ | ☐ |
| 61 | demand-for-labour | ⬜ | ☐ |
| 62 | supply-of-labour | ⬜ | ☐ |
| 63 | wage-determination | ⬜ | ☐ |
| 64 | government-intervention | ⬜ | ☐ |

## Theme 4 — Global economy · none mockup-built

All topics in Theme 4 have been **stripped to cover-only placeholders**
for the same reason.

| # | Topic | Build | Mockup-built? |
|--:|-------|:-----:|:-------------:|
| 65 | globalisation | ⬜ | ☐ |
| 66 | specialisation-and-trade | ⬜ | ☐ |
| 67 | trading-blocs-and-wto | ⬜ | ☐ |
| 68 | restrictions-on-free-trade | ⬜ | ☐ |
| 69 | balance-of-payments | ⬜ | ☐ |
| 70 | exchange-rates | ⬜ | ☐ |
| 71 | international-competitiveness | ⬜ | ☐ |
| 72 | absolute-and-relative-poverty | ⬜ | ☐ |
| 73 | inequality | ⬜ | ☐ |
| 74 | measures-of-development | ⬜ | ☐ |
| 75 | factors-influencing-growth-and-development | ⬜ | ☐ |
| 76 | strategies-influencing-growth-and-development | ⬜ | ☐ |
| 77 | role-of-financial-markets | ⬜ | ☐ |
| 78 | market-failure-in-the-financial-sector | ⬜ | ☐ |
| 79 | role-of-central-banks | ⬜ | ☐ |
| 80 | public-expenditure | ⬜ | ☐ |
| 81 | taxation | ⬜ | ☐ |
| 82 | public-sector-finances | ⬜ | ☐ |
| 83 | macroeconomic-policies-in-a-global-context | ⬜ | ☐ |

---

## Next-up queue

1. **#36 `measures-of-economic-performance`** — the only remaining gap inside
   the Theme-2 ✅ block. Either run it through the mockup pipeline next, or
   accept the legacy build is fine for now.
2. **#41–#45 Theme 2 tail** — five stripped Theme-2 topics; rebuild via
   Dispatch in homepage order.
3. **Theme 3** — start at #46 once Theme 2 is closed out.
4. **Theme 4** — start at #65 once Theme 3 is closed out.
