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
/                                 home (topic picker)
/learn/<topic>                    Learn It                e.g. /learn/causes-of-inflation-and-deflation
/link/<topic>/<station>           Link It                 e.g. /link/causes-of-inflation-and-deflation/chain
                                                          /link/causes-of-inflation-and-deflation/chain-open
/land/<topic>/<section>           Land It                 e.g. /land/causes-of-inflation-and-deflation/a
/quiz/<topic>/<set>               Standalone quiz         e.g. /quiz/causes-of-inflation-and-deflation/main
/login /privacy-policy /terms     standalone shells
/offline /404
```

`<topic>` and `<station>` slugs use hyphens. Internal IDs (in `js/topics.js`,
in data-file paths under `js/data/<id>/...`, in router config) use underscores.
The two are bridged at exactly one point — `TopicLoader.toSlug` / `.fromSlug`
in `js/topic-loader.js`. Don't introduce a second mapping.

### How GitHub Pages serves these

Every path-based URL has a **real generated file** in `dist/`. The
`topic-routes` plugin in `vite.config.js` walks `js/topics.js` at build
time and writes, for each available topic + station:

```
dist/learn/<topic-slug>/index.html
dist/link/<topic-slug>/<station>/index.html
dist/land/<topic-slug>/<section>/index.html
dist/quiz/<topic-slug>/<set>/index.html
```

Each generated file is a copy of the matching base shell (`learn.html`,
`link.html`, ...) with the `<title>`, `<meta name=description>`, `og:*`,
and `<link rel=canonical>` rewritten to be topic-specific. The browser
hits the URL, GitHub Pages returns a 200, the shell HTML loads, and the
client-side `TopicLoader` reads `window.location.pathname` to figure out
what to render. No client-side redirects, no `?topic=` query string, no
404s for canonical URLs.

The same plugin runs as a Connect middleware in `npm run dev` and
`npm run preview`, rewriting `/learn/<topic>` → `/learn.html` on the
request so the dev server serves the right base shell.

### The URL API (the only way to build a URL in code)

```js
TopicLoader.routes.home()              // → '/'
TopicLoader.routes.learn(topic?)       // → '/learn/<topic>'
TopicLoader.routes.link(station, topic?)
TopicLoader.routes.land(section, topic?)
TopicLoader.routes.quiz(set, topic?)
```

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

1. Create `js/data/<topic-id>/` with at minimum `data-topic.js`.
2. Add `data-land-*.js`, `data-link-*.js`, `data-quiz-*.js` files as the content matures.
3. Register the topic in `js/topics.js`.

No new HTML, no engine changes. The shells discover the data through
`TopicLoader.loadData(...)` at runtime.

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
