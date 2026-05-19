# econos

A-Level Economics revision SPA — *Learn it. Link it. Land it.*

## Quick start

```bash
npm install           # one-time
npm run dev           # http://localhost:5173 with HMR
npm run build         # emits /dist for deploy
npm run preview       # serve /dist locally at http://localhost:4173

npm run lint          # repo lint + eslint (0 warnings)
npm run test:e2e      # Playwright suite (13 desktop + 5 mobile)
npm run format        # prettier across js / html / json / md
```

Pre-commit hook runs the lint; pre-push runs the e2e suite. Override
either with `--no-verify` or `ECONOS_SKIP_E2E=1` if you really mean it.

## Architecture

There are **exactly six** HTML files served from the repo root.
Three of them are "shells" — interactive entry points parameterised
by query string:

| Shell        | URL pattern                                  | Hosts                       |
| ------------ | -------------------------------------------- | --------------------------- |
| `index.html` | none                                         | Topic grid                  |
| `learn.html` | `?topic=<id>`                                | Learn It cards (`app.js`)   |
| `link.html`  | `?topic=<id>&station=<intro\|context\|chain\|chain_open\|diagram\|depends\|judge\|complete\|quiz>` | Link It stations |
| `land.html`  | `?topic=<id>&station=<intro\|a\|b\|c\|complete\|quiz>` | Land It sections   |
| `quiz.html`  | `?topic=<id>&quiz=<set>`                     | Topic quizzes               |
| `login.html` | none                                         | Demo gate                   |

`link.html` and `land.html` delegate to `LinkRouter` / `LandRouter`
(`js/engines/link-router.js`, `land-router.js`) which lazy-load
each station's engine + data file on first visit, cache by
`${topic}/${file}`, prefetch the likely next station during
`requestIdleCallback`, and swap stations in place via
`history.pushState`.

Chrome (sidebar, topbar, mobile-nav, skip-link, 3-stage progress
widget) is rendered by `js/engines/shell.js` — a single source of
truth used by every engine.

### URL conventions

**Do not introduce new HTML files at the repo root.** A new topic
or a new station never needs new HTML — only a new data file under
`js/data/<topic>/` (and a station entry in the relevant router if
the station itself is new).

The legacy per-section URLs (`topic.html`, `link_chain.html`,
`land_section_a.html`, etc.) **have been deleted** as of commit
following d2cb5e1. They no longer exist as files or HTTP routes.
`scripts/lint.sh` blocks them from being re-introduced.

The aliasing layer in `js/topic-loader.js` (`PAGE_MAP`) is kept,
because **data files still write the legacy names** for back-compat
— e.g. `backUrl: TopicLoader.buildUrl('link_intro.html')`. The
loader rewrites that to `link.html?topic=…&station=intro` before
the URL ever reaches the network. New code can write the canonical
form directly: `TopicLoader.buildUrl('link.html', { station: 'intro' })`.

If a station's URL is mistyped, the router renders an in-place
"Station not found" message with a link back to the section intro
— not a 404.

```
/
├── index.html              ──┐
├── learn.html / link.html  ──┤  ← entry points (Vite multi-page)
├── land.html  / quiz.html  ──┤
├── login.html              ──┘
│
├── styles.css              ──┐  ← canonical stylesheet
├── index.css / login.css   ──┤    (page-specific)
├── fonts.css               ──┘    (self-hosted Inter + Fraunces)
├── fonts/                       Inter + Fraunces variable WOFF2
│
├── js/
│   ├── auth-check.js            login gate stub
│   ├── topic-loader.js          URL helper + PAGE_MAP + dynamic loader
│   ├── progress.js              localStorage wrapper
│   ├── logger.js                console.* with runtime toggle
│   ├── topics.js                topic registry
│   ├── icons.js                 shared inline SVG icons
│   ├── app.js                   Learn It engine
│   ├── data/<topic>/            per-topic content
│   └── engines/                 shell + routers + per-station engines
│
├── tests/e2e/                   Playwright (shells, a11y, mobile, PAGE_MAP)
├── scripts/lint.sh              repo-local lint
└── .github/workflows/ci.yml     lint + build + e2e
```

## Adding a new topic

1. `js/data/<topic-id>/` with at minimum `data-topic.js`.
2. Add `data-land-*.js`, `data-link-*.js`, `data-quiz-*.js` as content matures.
3. Register the topic in `js/topics.js`.

No new HTML, no engine changes — the shells discover the data.

## SPA contract

Engines navigate via `TopicLoader.go(url)` so routers can intercept.
The repo lint blocks direct `window.location.*` in engines — use
`TopicLoader.go(TopicLoader.buildUrl('link_chain.html'))` and the
loader rewrites it to `link.html?topic=…&station=chain` transparently.

## CSP

Every shell ships a `Content-Security-Policy` meta tag:
`default-src 'self'; script-src 'self' 'unsafe-inline'; style-src
'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data:
blob:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self';
form-action 'self'; object-src 'none'`. `'unsafe-inline'` on
script/style stays until the engines move to ES modules.

## Conventions

- Plain ES5 (`var`/`function`) so engines run everywhere with no transpile.
- BEM-ish class names with `theme--learn|link|land` scopes.
- Session/progress in `localStorage` via the `Progress` module.
- One stylesheet (`styles.css`), no chained "POLISH v#" patches — fixes go
  into the canonical section. `scripts/lint.sh` enforces this.

## Demo access

- **Username:** `econos`
- **Password:** `demo2024`

Client-side gate only — keeps casual visitors out, not real auth.

## Further reading

- `CHANGELOG.md` — every tranche of recent changes.
- `STYLE_GUIDE.md` — design system reference.
- `DESIGN_LIBRARY.md` — component inventory.
