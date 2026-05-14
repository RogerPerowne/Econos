# econos

A-Level Economics revision SPA — *Learn it. Link it. Land it.*

A static, no-build vanilla-JS site. Open `index.html` (or any page with `?topic=<id>`) in a browser, or serve the folder with any static file server.

## Project structure

```
/
├── index.html               Landing page with topic cards
├── login.html               Demo access gate
├── topic.html               Generic topic page (?topic=<id>)
├── land_intro.html          Land It configurator
├── land_section_{a,b,c}.html  Land It exam sections
├── land_complete.html       Land It results
├── link_{intro,chain,chain_open,context,depends,diagram,judge,complete}.html
│                            Link It exercise pages
├── quiz.html                Topic quiz (?topic=<id>&quiz=<id>)
│
├── css/
│   └── styles.css           All app styling
│
├── js/
│   ├── auth-check.js        Login gate redirect
│   ├── topic-loader.js      URL helper + dynamic data loader
│   ├── topics.js            Topic registry (id, name, availability)
│   ├── icons.js             Shared inline SVG icon set
│   ├── app.js               Topic-page renderer
│   ├── data/<topic>/        Per-topic content data files
│   │     ├── data-topic.js
│   │     ├── data-land-{intro,section-a,section-b,section-c,complete}.js
│   │     ├── data-link-{intro,chain,context,depends,diagram,judge,complete}.js
│   │     └── data-quiz-<id>.js
│   └── engines/             Per-section render engines
│
└── assets/                  Logos and images
```

## Topic-agnostic routing

Every interactive page reads `?topic=<id>` from the URL and dynamically loads the matching data file from `js/data/<topic>/`. **Adding a new topic requires no new HTML files** — just drop a new `js/data/<new-topic>/` folder with the data files, then add the topic to `js/topics.js` so it appears on the home page.

The shared helper `js/topic-loader.js` provides:

- `TopicLoader.getTopic()` — current topic id from the URL
- `TopicLoader.buildUrl(page, extra?)` — build a topic-aware URL (e.g. `'land_section_a.html?topic=inflation'`)
- `TopicLoader.loadData(files, callback, label)` — dynamic per-topic data loader
- `TopicLoader.loadDataAndBoot(files, bootFn, label)` — common case for engine boot

If a topic's data file is missing, the page shows a "Content not ready yet" placeholder instead of breaking.

## Conventions

- **No build step.** Plain ES5 (`var`/`function`) so it runs everywhere with no transpilation.
- Each interactive page pairs a **data file** (`js/data/<topic>/data-*.js`) with an **engine** (`js/engines/*-engine.js`); the HTML page just loads both via TopicLoader and the engine boots.
- Styling lives in one `css/styles.css` with BEM-ish class names and a `theme--*` scope per area.
- Session/progress is persisted to `localStorage` (`econosLandSession`, `econosLandResults`).

## Adding a new topic

1. Create `js/data/<topic-id>/` (e.g. `js/data/market-failure/`).
2. Add `data-topic.js` for the topic landing page.
3. Add any of `data-land-*.js`, `data-link-*.js`, `data-quiz-*.js` as the topic's content matures.
4. Register the topic in `js/topics.js`.

That's it — no new HTML, no engine changes.

## Demo access

Default credentials for the deployed demo site:

- **Username:** `econos`
- **Password:** `demo2024`

The login gate is purely client-side and meant to keep casual visitors out of the demo. It is not real authentication.
