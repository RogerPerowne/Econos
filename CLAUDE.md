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

- `npm run lint` must pass (repo lint + ESLint with `--max-warnings=0` +
  `lint:charts` + `lint:cards`).
- `npm run test:unit` must pass (Vitest, pure-function coverage under `tests/unit/`).
- `npm run test:e2e` must pass (Playwright suite across desktop + mobile + a11y).
- `pre-commit` runs the lint + unit tests; `pre-push` runs the e2e suite. Override with `--no-verify` or `ECONOS_SKIP_E2E=1` only when you genuinely know better.

## Charts & diagrams — ALWAYS use the toolkit, never hand-roll SVG

Every diagram goes through the chart engine (`window.ECONOS_PPF.render(spec)`)
or the dial engine (`window.ECONOS_DIALS.render(...)`). Do not author raw
`<svg>` in `icons.js` or data files. The whole point of the toolkit is that
geometry is *guaranteed*, not eyeballed.

**Non-negotiable rules (a chart isn't done until all pass):**

1. **Points that sit on a curve must be declared, never typed as raw
   coordinates.** Use one of:
   - `point.intersection: { curves: ['D','S'], near? }` — engine solves
     the exact crossing and asserts any declared x/y matches.
   - `point.on: 'curveId'` — engine snaps the point's y onto that curve at
     its x (and warns if a declared y drifts > 0.01).
   - define the curve *through* the points: `curve.shape: { type:'linear',
     through:[x,y], slope }` so curve and dots share one source of truth.
   Raw `{x, y}` literals for a dot that should be on a line is the bug that
   produced floating equilibrium points — don't do it.
2. **New/changed spec → run the full gate:** `node scripts/lint-charts.mjs`
   (renders every spec, fails on engine warnings) + `npm run test:unit`
   (snapshot regression auto-discovers specs against the manifest) +
   **screenshot-verify** via the `run-econos` skill driver before calling it
   done. Treat dev-mode geometry warnings (intersection drift, off-stage
   labels, label clashes, on-curve drift) as blockers.
3. **Wiring a new spec:** declare `window.ECONOS_FOO_SPEC` in
   `js/charts/specs/foo.js`, bind it in `icons.js` (`fooKey:
   ECONOS_PPF.render(window.ECONOS_FOO_SPEC)`), add the `<script>` to all
   three shells (`learn-it.html`, `link-it.html`, `land-it.html`), and add
   the file to `sw.js` PRECACHE_ASSETS. `lint:cards`/`check_spec_scripts_loaded`
   enforce the script-tag rule.

4. **Canonical shapes.** Don't invent Bezier control points by eye. A
   bowed-out PPF is a quarter-arc of a circle: use
   `M 0,1 C 0.5523,1 1,0.5523 1,0` (the magic constant 4(√2−1)/3 is the
   standard quarter-arc Bezier approximation in every vector library;
   in 0..10 chart units it satisfies x² + y² ≈ 100 to four decimals).
   Hand-tuned cubics like `M 0,1 C 0.55,1 1.0,0.05 1.0,0` produce
   flat-then-cliff shapes that make early features invisible — chart
   shape is part of the lesson, not decoration.

5. **`findTAtX` rejects exact endpoint x.** The engine's bounds check
   `targetX > Math.max(x0, x3)` plus binary-search precision means
   `start[0]` for a fromT near 1 computes to 1.000001..., so
   `start[0] + Δx` overshoots and the engine silently omits the
   triangle (`<!-- ocTriangle: Δx too large for curve -->`). For trades
   ending at the curve's right edge, back Δx off by 0.001 (e.g. 0.199
   instead of 0.200). Same applies to `point.on` near a curve
   endpoint.

6. **Label positions are a design decision, not a default.** The
   `ocTriangle` helper's auto-placed badge sits above-left of the
   start dot — fine for a flat-then-steep curve but it drags through
   a quarter-arc or off the chart top. Set `labelDx` / `labelDy`
   (CHART units, relative to start) explicitly for each trade and
   numerically pre-check before rendering:
   - **Inside the chart**: `0 ≤ box ≤ 1` in both axes.
   - **Curve clearance**: sample the PPF at ≥20 points across the
     badge's x-range; for an "above-curve" placement require
     `curve.y > box.top` (with margin ≥ 0.02 chart-units) at every
     sample; for a "below-curve" placement require `curve.y < box.bottom`.
   - **Cross-overlap**: with cumulative reveal, the final view shows
     every layer's labels at once. Check pairwise box-intersection of
     all labels and refuse to ship if any overlap.

   A 10-line node script that does the above three checks is faster
   than another round of screenshot iteration. Use it; ship only
   labels that pass.

   **Curve labels** (the `<text>` emitted by `renderCurve` for
   `curve.label`) are now also tracked by the engine's dev-mode
   clash + off-stage checks (v0.41.11). For MULTI-panel charts, the
   off-stage check enforces the panel's own `chartArea` bounds, not
   just the SVG viewBox — a `PPF₂` label spilling out of one panel
   into the next will now be caught by `npm run lint:charts`. If
   `lint:charts` shows `0 new finding(s)` your chart is clean;
   `KNOWN_ISSUES` in `scripts/lint-charts.mjs` lists tracked tech
   debt and **must not** grow without a documented fix plan.

7. **Screenshot EVERY view, then critique.** Taking a screenshot is not
   the same as verifying the chart. After rendering, open each view's
   image and ask:
   - Is every label clearly associated with its referent (close enough
     that a stranger would link them without thinking)?
   - Is any element obscured (curve cutting through a label, label
     spilling outside chart, two labels merging visually)?
   - On the final view (all reveal layers visible), does the whole
     story read at a glance?

   If any answer is "no", DO NOT SHIP. Mention the issue in chat
   instead of hoping the user doesn't notice — they will, and the
   iteration cost is much higher when it comes back as "still wrong".

## Description length — keep staging stable

Long copy stretches the card / interactive-diagram staging and makes stage
height jump between cards. `npm run lint:cards`
(`scripts/lint-card-lengths.mjs`) warns (never fails) on over-budget
staging-sensitive fields: interactiveDiagram `view.body` / ad-interactive
`step.body` (280), `view.analysis` (360), `diagramPanel` bullets (170),
`comparison` captions (170), `branches[].sub` (200). New content should land
within budget; don't add to the warning list.

## Versioning & CHANGELOG

`package.json` carries a semver: bump the **minor** when a release block of
improvements ships, bump the **patch** for bugfix-only sweeps. Add an entry
to `CHANGELOG.md` at the top under the new version heading describing what
changed and why, grouped by area when there are several. The CHANGELOG is
the place where "what shipped" lives — commit messages are the supporting
detail, not a substitute.

## Service worker cache — BUMP IT when you change cache-first assets

`sw.js` caches `js/app.js`, `js/icons.js`, `styles.css` and other static assets
**cache-first**. Topic data files under `js/data/...` are network-first and refresh
themselves, but app.js / icons.js / styles.css do not — users on the old cache
keep seeing stale renderers and SVGs even after a hard refresh, because the SW
intercepts requests before the browser cache.

**Whenever you change `js/app.js`, `js/icons.js`, or `styles.css`, bump
`CACHE_NAME` in `sw.js`** (e.g. `econos-v10` → `econos-v11`). The activate
handler deletes any cache that isn't the current one, forcing a full refresh.

You do **not** need to bump for changes to topic data files (`js/data/<topic>/...`)
— those are network-first.

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
