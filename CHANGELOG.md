# Changelog

All notable changes to econos are listed here. Newer entries on top.
Format loosely follows [Keep a Changelog](https://keepachangelog.com/).

## Unreleased

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
