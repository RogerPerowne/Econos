# Changelog

All notable changes to econos. Newest at the top. Loosely follows
[Keep a Changelog](https://keepachangelog.com/). This is a perpetual-beta
educational site, so versions track release rhythm rather than a frozen
public API: bump the minor when a release block of improvements ships;
bump the patch for bugfix-only sweeps.

## 0.21.0 — 2026-05-30

### Diagram system — data-driven generators + `diagram` block (additive)

The new way to make and render economics diagrams. Fully additive — no
existing diagram or card changed; this is the foundation for relocating the
icons.js diagrams into a single library next.

- `js/diagrams/econ-svg.js` — `window.EconSvg` builder (axes, curves, labels,
  callouts, equilibria) with the house palette baked in (AD blue, SRAS amber,
  LRAS green vertical, old curves dashed/faded, new solid). `docs/ECON_DIAGRAM_RULES.md`
  is the canonical style reference.
- `js/diagrams/generators/*` — 13 data-driven generators on `window.ECONOS_DIAGRAMS`:
  adasDiagram, ppfDiagram, taxSubsidyDiagram, priceControlDiagram, multiplierDiagram,
  elasticityDiagram, costCurvesDiagram, marketStructureDiagram, labourMarketDiagram,
  phillipsCurve, jCurveDiagram, fortyFiveDiagram, growthDiagram. Each takes a config
  and returns an SVG string; defaults yield the canonical textbook version.
- `js/blocks/diagram.js` — a `diagram` block that resolves a `spec:{type,...}` via
  the generators, or falls back to an existing `svgKey` from icons.js, wrapped in the
  hero-visual frame. `docs/DIAGRAM_LIBRARY.md` documents the API.
- Wired into the three shells; `sw.js` precache updated, `CACHE_NAME` → `econos-v122`.
  `js/data/_fixtures/diagrams-demo.js` exercises every generator (screenshot-verified).

## 0.20.0 — 2026-05-30

### Renderer Phase 1 — block component library (17 new blocks)

Extends the Phase 0 block system with 17 data-driven components, each in
its own self-registering module under `js/blocks/` with matching CSS under
`css/blocks/`. Authored by a parallel Claude-agent workflow; all reuse the
shared `window.ECONOS_BLOCK_UTILS` helpers (escaping, tone mapping, icons,
nesting) now exposed by `render-blocks.js`.

- **compare** — versusRows, decisionMatrix, trafficLight, glossaryRow
- **flow** — mechanismChain (with breakpoint chips), rippleCascade,
  opposingFlows, timeline
- **structure** — spectrum, caseStudies, satelliteDiagram, policyToolkit
- **data** — metricCard, targetGauge, equationHero, workedExampleStrip, factChip

Wired into the three card shells (CSS links + deferred module scripts after
`render-blocks.js`); `sw.js` precache updated and `CACHE_NAME` → `econos-v121`.
`docs/RENDER_BLOCKS.md` documents every new block; `js/data/_fixtures/blocks-phase1.js`
exercises them all. Known follow-up polish: proportional sizing for
rippleCascade bars / opposingFlows arrows, targetGauge marker clamp on narrow
cards, satelliteDiagram orbit layout.

## 0.19.0 — 2026-05-30

### Renderer Phase 0 — composition-as-data block foundation

Adds a new, **additive** block-rendering layer that coexists with the
existing `ad-interactive` / template renderers — the first phase of the
image-faithful renderer overhaul. No existing card changes behaviour.

- `js/render-blocks.js` — `window.ECONOS_BLOCKS` registry + `renderBlocks(card)`.
  When a card carries a `blocks: [...]` array it is composed from a starter
  block set (sectionHeader, calloutStrip/tip, heroVisual, grid with
  col/row span, tile, bigIdea, examEdge, warning) with HTML-escaped output
  and a recursive grid. Cards without `blocks` are untouched.
- `css/econ-tokens.css` + `css/econ-blocks.css` — design tokens (6-tone
  scale, density modes, title/text-fit/clamp utilities, section header,
  icon shapes, overflow-warning) and class-based block styling. Block
  styles that share legacy names (`exam-edge`, `big-idea`, `warning`) are
  scoped under `.econ-blocks` so existing cards are unaffected.
- `renderCard()` gains a one-line `blocks` branch that takes precedence and
  falls through to the existing paths otherwise. Linked into the three card
  shells via `<script defer>`; `CACHE_NAME` bumped to `econos-v120`.
- Dev-only (`?dev=1` or `localStorage.econosDev='1'`) overflow detector and
  `EconosDebug.inspectCard()`. `docs/RENDER_BLOCKS.md` documents the schema;
  `js/data/_fixtures/blocks-demo.js` is a local-only demo fixture.

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
