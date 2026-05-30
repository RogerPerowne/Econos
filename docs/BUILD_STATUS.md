# Topic build status

Single source of truth for **which Learn It topics are built to the current
"mockup-era" standard, and which still need work.** Maintained by hand;
read by build sessions (and Dispatch) before starting a topic.

## How to read this

Two things are tracked, because they're different questions:

1. **Build state** — verifiable from the data file:
   - 🟢 **Modern** — all/most cards use `template: 'ad-interactive'` with the
     10-pattern design system (gauges, interactive diagrams, diagnose rows,
     flows, pairs, evidence-then-verdict). Built in the last sprint.
   - 🟡 **Legacy** — complete (~7 cards) but built on the *old* bespoke
     templates (`framing` / `diagnose` / `mechanisms` / `cause` / `paired` /
     `deflation` / generic). Works, but pre-dates the pattern system — a
     rebuild candidate.
   - 🔴 **Stub** — 0–2 cards; effectively not built.
2. **Mockup-built?** — did this topic go through the full pipeline
   *ChatGPT makes one image per card → Claude turns the images into the actual
   cards*? This is the question that decides whether Dispatch needs to run it.
   A topic can be 🟢 Modern (looks right in the data) but **not** have been
   mockup-built — e.g. built directly to the pattern system without images.

> ⚠️ The assistant **cannot** verify the mockup column from the data file alone
> — a mockup-built card and a directly-built card both end up as the same
> `ad-interactive` JS. Only Roger / the session history knows. The only entries
> the assistant has marked `✅` are the two it built **from Roger's ChatGPT
> images this session**. Everything else is `❓` (Roger to confirm) or `☐`
> (not yet done).

When Dispatch runs a topic through the mockup→build pipeline, set **Build** to
🟢, set **Mockup-built?** to `✅`, and add the date.

---

## Theme 2 — Macroeconomics (the active area)

| Topic | Build | Mockup-built? | Notes |
|-------|:-----:|:------------------:|-------|
| the-impact-of-economic-growth | 🟢 | ✅ session | 6 cards, mockup-built 05-30 (scorecard, broken-axis chart, sustainability 3-view) |
| macroeconomic-objectives-and-trade-offs | 🟢 | ✅ session | 6 cards, mockup-built 05-30 (gauge scorecard, Phillips, diagnose rows) |
| trade-cycle-shocks-and-economic-growth | 🟢 | ☐ | 5 cards, rebuilt 05-29 (Card 5 reworked with Roger) |
| aggregate-demand | 🟢 | ☐ | 8 cards, modern (05-29) |
| aggregate-supply | 🟢 | ☐ | 8 cards, modern (05-28) |
| causes-of-inflation-and-deflation | 🟢 | ☐ | 8 cards, modern (05-28) |
| consumption | 🟢 | ☐ | 8 cards, modern (05-28) |
| employment-and-unemployment | 🟢 | ☐ | 8 cards, modern (05-29) |
| equilibrium-national-income | 🟢 | ☐ | 4 cards, modern (05-29) |
| government-spending | 🟢 | ☐ | 8 cards, modern (05-28) |
| inflation-measurement-and-costs | 🟢 | ☐ | 7 cards, modern (05-28); essay-framework card just got icon-top fix |
| investment | 🟢 | ☐ | 8 cards, modern (05-28) |
| national-income | 🟢 | ☐ | 5 cards, modern (05-28) |
| national-income-and-the-multiplier | 🟢 | ☐ | 4 cards, modern (05-29) |
| net-trade | 🟢 | ☐ | 8 cards, modern (05-28) |
| measures-of-economic-performance | 🟡 | ☐ | 8 cards but generic template (essay framework, Coyle quote) — rebuild candidate |
| demand-side-policies-fiscal | 🟡 | ☐ | 7 cards, legacy templates |
| demand-side-policies-monetary | 🟡 | ☐ | 7 cards, mostly legacy |
| supply-side-policies | 🟡 | ☐ | 7 cards, mostly legacy |
| standard-of-living-and-wellbeing | 🟡 | ☐ | 7 cards, legacy |
| macro-conflicts-and-trade-offs | 🟡 | ☐ | 4 cards; **overlaps** macroeconomic-objectives — decide whether to keep/merge |

## Theme 1 — Microeconomics

| Topic | Build | Mockup-built? | Notes |
|-------|:-----:|:------------------:|-------|
| factors-of-production | 🟢 | ☐ | 8 cards, modern (05-28) |
| demand | 🟡 | ☐ | 7 cards, mixed (2 ad-int) |
| supply | 🟡 | ☐ | 7 cards, mixed |
| price-determination | 🟡 | ☐ | 7 cards, mixed (3 ad-int) |
| production-possibility-frontiers | 🟡 | ☐ | 6 cards, mixed |
| negative-externalities | 🟡 | ☐ | 7 cards, mostly legacy |
| positive-externalities | 🟡 | ☐ | 7 cards, mostly legacy |
| introduction-to-economics | 🟡 | ☐ | 7 cards, legacy |
| economic-systems | 🟡 | ☐ | 7 cards, legacy |
| price-elasticity-of-demand | 🟡 | ☐ | 7 cards, legacy (uses ped-five-frames/calc) |
| price-elasticity-of-supply | 🟡 | ☐ | 7 cards, legacy |
| income-and-cross-price-elasticity | 🟡 | ☐ | 7 cards, legacy |
| the-price-mechanism | 🟡 | ☐ | 7 cards, legacy |
| government-failure | 🟡 | ☐ | 7 cards, legacy |
| government-intervention-in-markets | 🟡 | ☐ | ~10 cards, legacy |
| information-gaps | 🟡 | ☐ | 7 cards, legacy |
| public-goods | 🟡 | ☐ | 7 cards, legacy |
| specialisation-and-money | 🟡 | ☐ | 7 cards, legacy |
| behavioural-economics | 🟡 | ☐ | 5 cards, legacy |
| consumer-and-producer-surplus | 🟡 | ☐ | 6 cards, legacy |
| market-failure | 🟡 | ☐ | 5 cards, legacy |
| indirect-taxes-and-subsidies | 🟡 | ☐ | 4 cards, mixed |
| taxes-and-subsidies-as-policy-tools | 🟡 | ☐ | 3 cards, legacy |
| environmental-economics | 🔴 | ☐ | stub (~1 card) |

## Theme 3 — Business economics & market structures

> Mostly legacy or stub. `monopoly`, `profits-and-losses`, `contestable-markets`
> are large legacy topics; the rest are stubs. **Verify card count before
> building** — some use non-standard structures my scan couldn't count cleanly.

| Topic | Build | Mockup-built? | Notes |
|-------|:-----:|:------------------:|-------|
| monopoly | 🟡 | ☐ | large legacy topic |
| profits-and-losses | 🟡 | ☐ | large legacy topic (~11 cards) |
| contestable-markets | 🟡 | ☐ | large legacy topic |
| costs / revenue / wage-determination | 🟡 | ☐ | legacy, partial |
| game-theory / oligopoly | 🟡 | ☐ | legacy, 1 ad-int card each |
| business-growth, business-objectives, collusion-and-cartels, demand-for-labour, economies-and-diseconomies-of-scale, government-intervention, monopolistic-competition, monopsony, perfect-competition, supply-of-labour, types-of-efficiency | 🔴 | ☐ | stub (~1 card) — build from scratch |

## Theme 4 — Global economy

| Topic | Build | Mockup-built? | Notes |
|-------|:-----:|:------------------:|-------|
| balance-of-payments | 🟢 | ☐ | 8 cards, modern (05-28) |
| globalisation | 🟡 | ☐ | 7 cards, legacy |
| international-competitiveness | 🟡 | ☐ | 7 cards, legacy |
| restrictions-on-free-trade | 🟡 | ☐ | 7 cards, legacy |
| trading-blocs-and-wto | 🟡 | ☐ | 7 cards, legacy |
| absolute-and-relative-poverty | 🟡 | ☐ | 7 cards, legacy |
| specialisation-and-trade | 🟡 | ☐ | 8 cards, legacy |
| exchange-rates | 🟡 | ☐ | mixed, partial |
| inequality | 🟡 | ☐ | mixed, partial |
| factors-influencing-growth-and-development, strategies-influencing-growth-and-development, macroeconomic-policies-in-a-global-context, market-failure-in-the-financial-sector, measures-of-development, public-expenditure, public-sector-finances, role-of-central-banks, role-of-financial-markets, taxation | 🔴 | ☐ | stub (~1 card) — build from scratch |

---

## Suggested next targets (Theme 2 first, since that's the active sprint)

1. Tick the 🟢 Theme-2 topics you've already reviewed so we know the real gap.
2. Rebuild the 🟡 Theme-2 four: `measures-of-economic-performance`,
   `demand-side-policies-fiscal`, `demand-side-policies-monetary`,
   `supply-side-policies`.
3. Resolve the `macro-conflicts-and-trade-offs` vs
   `macroeconomic-objectives-and-trade-offs` overlap.
