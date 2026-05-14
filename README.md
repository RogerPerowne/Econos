# econos

A-Level Economics revision SPA — *Learn it. Link it. Land it.*

A static, no-build vanilla-JS site. Open `index.html` (or any topic page) in a browser, or serve the folder with any static file server.

## Project structure

```
/
├── index.html               Landing page
├── login.html               Demo access gate
├── topic_*.html             Topic landing pages (inflation, AD, monetary, unemployment)
├── link_*.html              "Link it" exercise pages
├── land_*.html              "Land it" exam-style sections (A, B, C) + intro / complete
├── quiz_*.html              Quiz pages
│
├── css/
│   └── styles.css           All app styling
│
├── js/
│   ├── auth-check.js        Login gate redirect
│   ├── icons.js             Shared inline SVG icon set
│   ├── app.js               Topic-page renderer
│   ├── data/                Per-page content data (data-*.js)
│   └── engines/             Per-page render engines (*-engine.js)
│
└── assets/                  Logos and images
```

## Conventions

- **No build step.** Plain ES5 (`var`/`function`) so it runs everywhere with no transpilation.
- Each interactive page pairs a **data file** (`js/data/data-foo.js`) with an **engine** (`js/engines/foo-engine.js`); the HTML page just loads both and calls the boot function.
- Styling lives in one `css/styles.css` with BEM-ish class names and a `theme--*` scope per area.
- Session/progress is persisted to `localStorage` (`econosLandSession`, `econosLandResults`).

## Demo access

Default credentials for the deployed demo site:

- **Username:** `econos`
- **Password:** `demo2024`

The login gate is purely client-side and meant to keep casual visitors out of the demo. It is not real authentication.
