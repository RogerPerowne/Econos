# Changelog

All notable changes to econos. Newest at the top. Loosely follows
[Keep a Changelog](https://keepachangelog.com/). This is a perpetual-beta
educational site, so versions track release rhythm rather than a frozen
public API: bump the minor when a release block of improvements ships;
bump the patch for bugfix-only sweeps.

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
