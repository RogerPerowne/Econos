# Econos — Claude Code Instructions

## Git workflow

**Default for every push.** Every time you push work to the active development
branch (whether `claude/development` or a session-specific `claude/...` branch),
follow the full flow automatically — do not stop at the push and wait for the
user to ask for a PR. The user has standing authorisation for this sequence.

1. Develop on the session's designated branch (the one specified in the system
   prompt — typically `claude/development`, sometimes a session-specific
   `claude/...` branch). Never create extra feature branches.
2. **Push → PR → squash-merge → reset → force-push** as a single unit:

```bash
git push -u origin <dev-branch>
# open PR via GitHub MCP (head=<dev-branch>, base=main) → squash-merge
git fetch origin main
git reset --hard origin/main           # while still on <dev-branch>
git push -u origin <dev-branch> --force
```

3. Do this once per logical task — not after every individual commit. If
   several commits land before the PR is opened, that's fine; the squash
   collapses them.

## Repository

- Owner: RogerPerowne
- Repo: Econos
- Default branch: main
- Development branch: claude/development

## URL & routing rules

### The contract (path-based)

User-facing URLs are path-based, hyphenated, and contain neither `.html`
nor a query string for the topic / station / quiz set:

```
/                                                       home (topic picker)
/<board>/<theme>/<topic>/learn-it                       Learn It cover     e.g. /edexcel_a/theme-2/causes-of-inflation-and-deflation/learn-it
/<board>/<theme>/<topic>/learn-it/<card>                Learn It card      e.g. /edexcel_a/theme-2/causes-of-inflation-and-deflation/learn-it/demand-pull-inflation
/<board>/<theme>/<topic>/link-it                        Link It intro      e.g. /edexcel_a/theme-2/causes-of-inflation-and-deflation/link-it
/<board>/<theme>/<topic>/link-it/<station>              Link It station    e.g. /edexcel_a/theme-2/causes-of-inflation-and-deflation/link-it/chain
/<board>/<theme>/<topic>/land-it                        Land It intro      e.g. /ocr/macro/causes-of-inflation-and-deflation/land-it
/<board>/<theme>/<topic>/land-it/<section>              Land It section    e.g. /ocr/macro/causes-of-inflation-and-deflation/land-it/section-a
/articles/                                              article hub
/articles/<slug>                                        single article
/login /privacy-policy /terms /offline /404             standalone shells
```

URL grammar:
- The **bare shell URL renders the intro / cover** — `/learn-it`,
  `/link-it`, `/land-it` are themselves the entry points. There is no
  separate `/intro` sub-route; `routes.<shell>('intro')` collapses to
  the bare URL via `makeShellRoute`.
- `<board>` is one of `edexcel_a` / `edexcel_b` / `aqa` / `ocr`. Each board
  reads ONLY its own data files; there is no cross-board fallback.
- `<theme>` is `theme-1`..`theme-4` for the Edexcel boards (from the
  spec's first digit), `micro` / `macro` for AQA (from the spec's second
  digit) or OCR (from the spec's first digit — 1 = Component 1 micro,
  2 = Component 2 macro). Derived from `boards.<board>.spec` in the
  topic registry via `themeFor(topic, board)`. Display labels per board
  ("Theme 2 — …", "Paper 1 — …", "Component 1 — …") come from
  `window.ECONOS_BOARD_DIVISIONS` in `js/config/boards.js`.
- `<topic>` is the topic id from `js/topics.js` (and the directory name
  under `js/data/<board>/<theme>/<topic>/`).
- `<card>` is a title-derived slug per Learn It card (e.g.
  `demand-pull-inflation`). Deduped within a topic; falls back to
  `card-<n>` when the title is empty. Slug generation lives in
  `window.ECONOS_CARD_SLUG` in `js/config/stations.js`; the
  build-time route generator and `app.js` share it.
- `<station>` and `<section>` are the short-token forms used in
  `js/config/stations.js`. Land It sections are `section-a` /
  `section-b` / `section-c` (legacy `/land-it/a` rewrites in place via
  `history.replaceState`).

Topic ids, station tokens and theme slugs all use hyphens. No
underscore-to-hyphen mapping anywhere — the same string is used in the
URL, the registry, the data folder name and the routes module.

### How GitHub Pages serves these

Every path-based URL has a **real generated file** in `dist/`. The
`topic-routes` plugin walks `js/topics.js` × `BOARDS_FOR_URLS` at build
time and writes, for each available (board, topic, shell, station)
combination:

```
dist/<board>/<theme>/<topic>/learn-it/index.html                     <!-- cover -->
dist/<board>/<theme>/<topic>/learn-it/<card>/index.html              <!-- per-card -->
dist/<board>/<theme>/<topic>/link-it/index.html                      <!-- intro -->
dist/<board>/<theme>/<topic>/link-it/<station>/index.html            <!-- per-station -->
dist/<board>/<theme>/<topic>/land-it/index.html                      <!-- intro -->
dist/<board>/<theme>/<topic>/land-it/<section>/index.html            <!-- per-section -->
```

For non-Edexcel-A boards every topic ships a placeholder Learn It
file (cover view only — `cards: []`) so the grid is complete; only
`learn-it/intro` is emitted for those boards until real content
ships. The placeholders are auto-generated by `generatePlaceholders()`
in `vite.config.js` and committed.

Each generated file is a copy of the matching base shell (`learn.html`,
`link.html`, `land.html`) with the `<title>`, `<meta name=description>`,
`og:*`, and `<link rel=canonical>` rewritten to be topic-specific. The
browser hits the URL, GitHub Pages returns a 200, the shell HTML loads,
and the client-side `TopicLoader` reads `window.location.pathname` to
figure out what to render. No client-side redirects, no query strings.

The same plugin runs as a Connect middleware in `npm run dev`, rewriting
`/<board>/<theme>/<topic>/<shell>` → `/<shell>.html` on the request so
the dev server serves the right base shell. `npm run preview` serves the
already-generated per-route `index.html` files directly.

### The URL API (the only way to build a URL in code)

```js
TopicLoader.routes.home()                       // → '/'
TopicLoader.routes.learn(card?, topic?)         // → '/<board>/<theme>/<topic>/learn-it/<card>'
TopicLoader.routes.link(station, topic?)        // → '/<board>/<theme>/<topic>/link-it/<station>'
TopicLoader.routes.land(section, topic?)        // → '/<board>/<theme>/<topic>/land-it/<section>'
```

All three are produced by a single `makeShellRoute(shellSegment)`
factory so adding a fourth shell (e.g. `quiz-it`) is one line.
`routes.learn()` with no args returns the bare `learn-it` path;
`routes.learn('intro')` / `routes.learn('demand-pull-inflation')`
return the per-card form.

The board comes from `TopicLoader.getBoard()`; the theme is derived from
the topic registry via the internal `themeFor(topic, board)` helper. So
the same source-code call `TopicLoader.routes.learn('inflation')`
produces a different URL on each board.

Topic defaults to the current topic from the URL. **There is no legacy
`buildUrl(legacyFilename)` API** — every call site (engines, data files,
shells) uses `routes`. The base shell HTML files (`learn.html` etc.) stay
at the repo root because the build copies them into the per-topic
subdirectories — don't add additional HTML files at the root.

### Inbound legacy URLs

`TopicLoader` includes a one-shot redirect at boot that rewrites any
inbound `?topic=…&station=…` query-string URL to the canonical path form
via `history.replaceState`. Anyone landing on a stale link from before
the migration sees the address bar fix itself once. No reload, no flash.

### Sitemap

`sitemap.xml` is **generated** by the `topic-routes` plugin from the same
topic registry that drives the per-topic shells, so it can't drift. Don't
hand-edit it. If you change the topic registry, the next `npm run build`
emits the right sitemap.

### Navigation contract (enforced by lint)

- **Engines must never call `window.location.href` / `.replace` directly.**
  Use `TopicLoader.go(url)` so SPA routers can intercept. `scripts/lint.sh`
  fails the build on a violation.
- The two router files (`link-router.js`, `land-router.js`) are allowed to
  call `window.location.href` as the cross-shell escape hatch.

## Conventions enforced by CI

- `npm run lint` must pass (repo lint + ESLint with `--max-warnings=0`).
- `npm run test:unit` must pass (Vitest, pure-function coverage under `tests/unit/`).
- `npm run test:e2e` must pass (Playwright suite across desktop + mobile + a11y).
- `pre-commit` runs the lint + unit tests; `pre-push` runs the e2e suite. Override with `--no-verify` or `ECONOS_SKIP_E2E=1` only when you genuinely know better.

## Versioning & CHANGELOG

`package.json` carries a semver: bump the **minor** when a release block of
improvements ships, bump the **patch** for bugfix-only sweeps. Add an entry
to `CHANGELOG.md` at the top under the new version heading describing what
changed and why, grouped by area when there are several. The CHANGELOG is
the place where "what shipped" lives — commit messages are the supporting
detail, not a substitute.

## Service worker cache — BUMP IT when you change cache-first assets

`sw.js` caches app shell assets **cache-first** via `PRECACHE_ASSETS`
(currently `CACHE_NAME = 'econos-v129'`). Topic data files under `js/data/...`
are network-first and refresh themselves; everything else does not.

**Bump `CACHE_NAME` whenever you change any of:**

- `js/app.js`, `js/icons.js`, `styles.css`
- `js/render-blocks.js`, `js/blocks/*.js`, `css/econ-blocks.css`,
  `css/econ-tokens.css`, `css/blocks/*.css`
- `js/diagrams/econ-svg.js`, `js/diagrams/generators/*.js`,
  `js/diagrams/static/*.js`, `js/diagrams/index.js`
- `js/render-validate.js`, `js/screenshot-mode.js`, `css/screenshot.css`

The activate handler deletes any cache whose name differs from the current one,
forcing a full refresh for all connected clients.

You do **not** need to bump for changes to topic data files (`js/data/<topic>/...`)
— those are network-first.

## Block rendering system

Cards with a `blocks: [...]` array are rendered by the **block system**
(`js/render-blocks.js`). Full schema and block reference: `docs/RENDER_BLOCKS.md`.

### Dispatch

`renderCard` in `js/app.js` checks blocks first:

```js
if (Array.isArray(c.blocks) && c.blocks.length) { body = window.renderBlocks(c); }
```

If `blocks` is absent or empty the card falls through to the legacy renderers
(see [Coexistence](#block-vs-legacy-coexistence) below). The surrounding card
chrome — progress bar, footer, navigation — is always owned by `renderCard`.

### Globals

| Global | Purpose |
|---|---|
| `window.ECONOS_BLOCKS` | Registry object. Keys are block `type` strings; values are renderer functions that receive the block object and return HTML. |
| `window.renderBlocks(card)` | Renders all blocks in `card.blocks`, prepends the card chrome, and returns the full HTML string. |
| `window.ECONOS_BLOCK_UTILS` | Shared helpers (`escapeHtml`, `toneClass`, `renderIcon`, `renderChild`, `blockStyle`, `safeGridCols`, `safeGap`, `safeSpan`, `isDevMode`, `VALID_TONES`) exposed so component modules in `js/blocks/*.js` can reuse them without duplicating logic. |

### Card chrome

`renderBlocks` emits three heading elements before the block wrapper when the
card carries them:

```js
card.stepLabel  → <div class="card__step-label">…</div>
card.title      → <h1 class="card__title">…</h1>
card.lede       → <p class="card__lede">…</p>
```

These match what the legacy template renderers emit, so a migrated card keeps
its heading without any HTML changes.

### Component block modules

Phase 1 blocks live in separate files that self-register into `window.ECONOS_BLOCKS`:

| File | Block types |
|---|---|
| `js/blocks/compare.js` | `versusRows`, `decisionMatrix`, `trafficLight`, `glossaryRow` |
| `js/blocks/flow.js` | `mechanismChain`, `rippleCascade`, `opposingFlows`, `timeline` |
| `js/blocks/structure.js` | `spectrum`, `caseStudies`, `satelliteDiagram`, `policyToolkit` |
| `js/blocks/data.js` | `metricCard`, `targetGauge`, `equationHero`, `workedExampleStrip`, `factChip` |
| `js/blocks/diagram.js` | `diagram` (see [Diagram library](#diagram-library) below) |

Each module is loaded as a deferred `<script>` in the shell HTML files
(`learn-it.html`, `link-it.html`, `land-it.html`) after `render-blocks.js`.

### CSS

| File | Scope |
|---|---|
| `css/econ-tokens.css` | Design tokens, density overrides (`[data-density="…"]`), layout custom properties |
| `css/econ-blocks.css` | Core block styles (`.econ-blocks`, `.econ-block`, `.econ-tile`, `.econ-grid`, `.calloutStrip`, `.hero-visual`, `.big-idea`, `.exam-edge`, `.warning`, `.econ-section`) |
| `css/blocks/compare.css` | Compare-group block styles |
| `css/blocks/flow.css` | Flow-group block styles |
| `css/blocks/structure.css` | Structure-group block styles |
| `css/blocks/data.css` | Data-group block styles |

## Diagram library

Three-layer system for SVG diagrams inside cards. Full reference: `docs/DIAGRAM_LIBRARY.md`.

### Load order (deferred scripts in each shell)

```
js/diagrams/econ-svg.js           → window.EconSvg (SVG primitives)
js/diagrams/generators/*.js       → window.ECONOS_DIAGRAMS (generator functions)
js/diagrams/static/*.js           → static SVGs registered into both
                                    window.ECONOS_DIAGRAMS and window.ECONOS_ICONS
js/diagrams/index.js              → ECONOS_DIAGRAMS.resolve(keyOrSpec)
js/blocks/diagram.js              → registers the 'diagram' block type
```

### Globals

| Global | Purpose |
|---|---|
| `window.EconSvg` | Stateless SVG-primitive helpers (`svg`, `defs`, `axes`, `curve`, `line`, `label`, `callout`, `equilibrium`, `TONES`, `_scale`). All return SVG fragment strings. |
| `window.ECONOS_DIAGRAMS` | High-level generator functions (e.g. `adasDiagram`, `ppfDiagram`, `taxSubsidyDiagram`, `priceControlDiagram`, `multiplierDiagram`, `elasticityDiagram`, `costCurvesDiagram`, `marketStructureDiagram`, `labourMarketDiagram`, `phillipsCurve`, `jCurveDiagram`, `fortyFiveDiagram`, `growthDiagram`). Each returns a complete `<svg>` string. |
| `window.ECONOS_DIAGRAMS.resolve(keyOrSpec)` | Accepts a generator-key string or a `{ type, ...config }` spec object. Falls back to `ECONOS_ICONS[key]` for legacy SVG keys. |

### The `'diagram'` block type

Use inside any `blocks` array:

```js
{ type: 'diagram', spec: { type: 'adasDiagram', mode: 'demand-pull' }, caption: '…' }
// — or —
{ type: 'diagram', svgKey: 'adShiftRight', caption: '…' }
```

`spec` generates from the diagram system; `svgKey` falls back to a legacy icon.
Both support `caption` and `height`.

### `js/icons.js` scope

`icons.js` now holds **UI, hero, and scene icons only** (navigation, topic-picker,
brand marks, small inline decorators). Economics diagram SVGs have been relocated
to `js/diagrams/static/` and are registered there into both `window.ECONOS_DIAGRAMS`
and `window.ECONOS_ICONS`. The `inline-extracted.js` static file additionally
back-fills into `window.ECONOS_ICONS` so that existing `svgKey` look-ups and
inline `${…}` references in data files continue to work unchanged.

Adding a new generator: create `js/diagrams/generators/<name>.js` as an IIFE
that registers onto `global.ECONOS_DIAGRAMS`, add `<script defer>` tags to all
three shells, and add the path to `PRECACHE_ASSETS` in `sw.js` (then bump
`CACHE_NAME`).

## Dev tooling

Three dev-only scripts are loaded as deferred `<script>` tags in every shell
and are included in `PRECACHE_ASSETS` so offline use is unaffected.

### `js/render-validate.js` — topic validator

Enable via `?dev=1` or `localStorage.setItem('econosDev', '1')`.

- Auto-runs on `DOMContentLoaded` and logs errors/warnings under `[EconosDebug]`.
- `window.EconosDebug.validate()` — validates `window.ECONOS_TOPIC`; returns
  `{ errors, warnings }`.
- `window.EconosDebug.validate(myTopic)` — validates an arbitrary topic object.
- Reads `window.ECONOS_BLOCKS` and `window.ECONOS_DIAGRAMS` when available;
  falls back to hard-coded baselines.

### `dev/renderer-lab.html` — QA sandbox

Standalone page (not served in production). Paste a raw card object into the
textarea and see it rendered in isolation — no topic load required. Open
directly from the repo; no build step needed.

### `js/screenshot-mode.js` — screenshot and preview modes

| Query param | Body class | Purpose |
|---|---|---|
| `?screenshot=1` | `screenshot-mode` | Strip UI chrome for Playwright / GPT Image captures |
| `?preview=center-panel` | `preview-center` | Isolate the centre panel for in-browser preview |

Styles live in `css/screenshot.css`.

## Block vs legacy coexistence

Both rendering paths coexist and are supported long-term. `renderCard` dispatches
**blocks-first**: if `card.blocks` is a non-empty array, the block system handles
the card entirely. Otherwise the card falls through to the legacy renderer switch.

**Use blocks** for new cards and migrated cards where composition-as-data is a
good fit.

**Use legacy renderers** for cards that require specialised interactivity or
layout that the block system does not yet cover:

| Template / renderer | When to keep it |
|---|---|
| `ad-interactive` | Interactive diagram with step-by-step highlight + analysis panel |
| `transmission-chain` | Animated horizontal mechanism chain |
| `elasticity-explorer`, `yed-xed-explorer`, `pes-explorer` | Draggable interactive curve widgets |
| `market-structures-comparison` | Multi-panel side-by-side market structure comparison |
| `essay-scaffold` | Structured essay-writing template |
| `welfare-gf-explorer` | Welfare / deadweight loss interactive |
| Tabbed-steps / five-frames / calculation strips | Any card using `interactiveDiagram`, tabbed steps, or scaffolded calculation reveal |

Legacy template cards still use `js/app.js`'s existing renderer functions; no
changes to those paths are implied by the block system's presence.

## Adding a new topic

1. **Plan the patterns first.** Before writing any data file, list each
   card's storytelling pattern from the 10-pattern catalogue in the
   `econos-card-template` skill (Sequential flow chain, Side-by-side
   pair, Spectrum/regime grid, Comparison table, Worked example
   walkthrough, Predict-then-reveal, Interactive multi-state diagram,
   Decompose a diagram, Evidence-then-verdict, Tile grid). Get user
   sign-off on the pattern list. Two rules enforced at planning time:
   no two consecutive cards use the same pattern, and *Tile grid*
   appears on at most two cards per topic.
2. Create `js/data/<topic-id>/` with at minimum `data-topic.js`.
3. Add `data-land-*.js`, `data-link-*.js`, `data-quiz-*.js` files as the content matures.
4. Register the topic in `js/topics.js`.

No new HTML, no engine changes. The shells discover the data through
`TopicLoader.loadData(...)` at runtime.

## Multi-exam-board

UK A-level economics has four mainstream boards (Edexcel A, Edexcel B,
AQA, OCR). Econos lets the user pick one and remembers the choice; every
spec-point display surface reads it.

### Registry — `js/config/boards.js`

Single source of truth for supported boards. Each entry is
`{ id, name, short, isDefault? }`. Load order is fixed by
`window.ECONOS_BOARDS_ORDER` so the picker UI is deterministic. Adding
a new board (e.g. WJEC / Eduqas) is a one-line change here.

### Persistence + accessors — `TopicLoader`

- `TopicLoader.getBoard()` — returns the selected board id; falls back
  to the registry's `isDefault: true` entry (currently `edexcel_a`).
- `TopicLoader.setBoard(id)` — persists to `localStorage` key
  `econos:board`. Returns `false` for unknown ids.
- `TopicLoader.getBoardName()` — display label for the current board.

Selection is read by every display surface that needs a board-specific
spec point or a board pill.

### UI

The board picker lives in the account-menu dropdown (sidebar user-card
or topbar avatar). It's a radio group above the Log-out divider.
Selecting a board persists and reloads — push-style runtime updates
would need every render-site to subscribe; a reload is one line.

The current board is visible at a glance in the sidebar user-card
("A-Level Economics · Edexcel A") so the user never has to open the
picker to confirm.

### Per-topic spec mapping — `js/topics.js`

Every topic in the registry carries a `boards` map:

```js
boards: {
  edexcel_a: { spec: '2.2.2', included: true },
  edexcel_b: { spec: '2.5.3', included: true },
  aqa:       { spec: '3.2.3.3', included: true },
  ocr:       { spec: '2.4',  included: true }
}
```

- `spec` is the bare sub-section number (no board prefix — the chip
  is already labelled by board name elsewhere). `null` means the
  topic isn't an explicit sub-section in that spec; the chip then
  falls back to the entry's Edexcel A baseline `num` rather than
  showing nothing.
- `included: false` hides the topic from that board's home-page
  grid. The default is `true`. No topic excludes any board today;
  the flag is in the schema for the day boards diverge in scope.

The mapping was built from the canonical spec docs in `docs/` —
`edexcel-a-spec.md`, `edexcel-b-spec.md`, `aqa-economics-spec.md`,
`ocr-economics-spec.md`. When refining a mapping, edit `js/topics.js`
directly; no code changes are needed.

### Per-article spec mapping — frontmatter

The article frontmatter `spec:` field accepts two shapes:

1. **Legacy string** — `spec: "Edexcel A · Theme 2.2.2"`. Treated as
   a single block, rendered verbatim in the meta line + footer.
2. **Per-board object** (preferred for new articles):
   ```yaml
   spec:
     edexcel_a: "2.1.2"
     edexcel_b: "2.5.3"
     aqa:       "3.2.3.3"
     ocr:       "2.4"
   ```
   The build renders every populated entry — "A-level (Edexcel A
   2.1.2 · Edexcel B 2.5.3 · AQA 3.2.3.3 · OCR 2.4)". This is
   intentional: article HTML is static, so we ship every variant
   for SEO and let any board's reader find a spec point they
   recognise. Personalised per-board rendering can come later when
   articles get JS.

### Per-board content overrides — `js/data/<board>/<topic>/`

`TopicLoader.loadData` first looks for opt-in board overrides:

- Default path: `/js/data/<topic>/<file>` (the Edexcel A baseline).
- Override path: `/js/data/<board>/<topic>/<file>`, but only when
  `(board, topic)` is listed in `window.ECONOS_BOARD_OVERRIDES`
  (declared in `js/config/boards.js`).

This keeps the repo lean — every board reads the Edexcel A baseline
for free, with zero file duplication. When AQA, OCR or Edexcel B
publishes a topic variant, drop the data files under
`js/data/<board>/<topic>/` and register the topic in the overrides
set; the loader picks them up.

The opt-in list (rather than runtime 404-probing) means
non-Edexcel-A users don't pay a 404 round-trip on every page load.

## Articles — SEO long-form content

Articles live at `/articles/<slug>/` and exist for one job: rank on Google
for high-intent A-level economics queries from the SEO queue
(`articles/SEO_PRIORITY.md`). Each article is its own indexable HTML page —
**not** JS-driven, **not** rendered through the SPA — so search engines see
the prose immediately and per-article meta / OG / JSON-LD live in the
response.

### Two source formats

Both end up at `dist/articles/<slug>/index.html` after `npm run build`:

1. **Markdown sources** (preferred for new articles) — `articles/sources/<slug>.md`.
   YAML frontmatter holds all metadata and the structured blocks
   (`friction`, `glance`, `faq`, `want_more`); the body is Markdown with
   `:::section` directives wrapping each prose section. The `article-routes`
   Vite plugin reads each `.md`, renders through `markdown-it` (with HTML
   pass-through so authors can drop raw `<svg>` for diagrams), wraps in
   the shared topnav + breadcrumb + article header + footer chrome, and
   emits the final HTML. **One source file, ~150–200 lines, ships a full
   article.** See `articles/sources/inflation-a-level-economics.md` for the
   reference shape.
2. **Hand-rolled HTML** — `articles/<slug>/index.html`. Pinned exemplars
   that need bespoke per-article visuals beyond what the directive palette
   supports (e.g. the monopoly article's custom chain widget + two-col
   cause-cards + want-more preview tile). Copied through verbatim. Their
   metadata is read from `articles/search-index.json` so the hub still
   knows about them.

### Adding a new Markdown article

1. Pick the next item from `articles/SEO_PRIORITY.md` and tick it `[~]` (drafted).
2. Create `articles/sources/<slug>.md`. The slug IS the URL segment.
3. Fill in frontmatter — title, description, lede, theme, spec, keywords,
   read_minutes, dates, friction, glance, faq, want_more, breadcrumb. Mark
   `status: draft` if WIP (the build skips drafts).
4. Write the body using `:::section eyebrow="…" color="green|purple|blue|pink"
   icon="bulb|target|globe|scale|cap|spark|check"` containers around each
   prose section. Each container produces the eyebrow-prefixed
   `<section class="section">` chrome the existing articles use.
5. `npm run build` — emits `dist/articles/<slug>/index.html` + appends a
   `<url>` to `dist/sitemap.xml` + adds the entry to
   `dist/articles/search-index.json` (so the hub picks it up).
6. Tick `[L]` (live) in `SEO_PRIORITY.md` once it ships.

The hub's "Library status: N of 70 articles live" reads N from the
search-index.json at runtime, so it updates automatically when an article
is added or moved out of draft.
