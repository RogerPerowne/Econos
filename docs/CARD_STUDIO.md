# Card Studio

The dev tooling under `dev/renderer-lab*.html` plus the block renderer, the validator, the diagram generators, and the supporting docs — collectively, this is **Card Studio**. It's the authoring layer of Econos.

This doc names the parts, explains what each is for today, and sketches the direction it's heading.

## What it is today

A static SPA still — cards live as `window.ECONOS_TOPIC = { cards: [...] }` in JS data files at `js/data/<board>/<theme>/<topic>/learn-it.js`. Topics are imported by the shell HTML, the block renderer turns each card into HTML, the diagram library turns each chart key into SVG. Authors edit JS files directly.

Card Studio is the set of tools that makes that authoring tractable:

| Surface | File | Job |
|---|---|---|
| **Studio Library** | `dev/renderer-lab.html` | Reference gallery. Every block type and every diagram generator rendered with sample data, in one scrollable page. The "what blocks do I have?" answer. |
| **Studio Editor** | `dev/renderer-lab-edit.html` | Live JSON editor. Paste a card on the left, see it render on the right, with validator errors and warnings inline. The "iterate on one card" loop. |
| **Block renderer** | `js/render-blocks.js` + `js/blocks/*.js` | Pure data → HTML. Given `card.blocks = [...]`, returns the card body. No side effects, no DOM dependency for the pure path. |
| **Block schemas** | `js/blocks/_schema.js` | Self-describing field declarations per block type. Drives the validator today; will drive form generation tomorrow. |
| **Validator** | `js/render-validate.js` | Checks every card against the schemas: required fields, unknown block types, tone typos, svgKey existence, content-length budgets. |
| **Diagram library** | `js/diagrams/generators/*.js` + `js/diagrams/static/*.js` | High-level chart generators (`adasDiagram`, `phillipsCurve`, …) and pre-rendered SVGs, all callable via the `diagram` block. |

You serve the Studio with `npm run dev` (Vite dev) and visit `/dev/renderer-lab.html` or `/dev/renderer-lab-edit.html`. None of `dev/` ships in the production build.

## Where it's going

The next architectural shift, as you described it, is moving from static data files to a custom CMS over Postgres with multiple non-technical authors. The current Studio is the seed of that CMS — same renderer, same schemas, different storage and a friendlier editor on top.

The contract the framework is being built around:

- **A card is data.** A JSON object validated against the block schemas. No HTML, no CSS, no SVG strings in the authored content. Renderers are downstream of data, never mixed with it.
- **Schemas are the API.** The list of block types and their fields lives in one place (`js/blocks/_schema.js`). The validator reads it, the editor reads it, the doc generator reads it, the future Postgres `cards` table is keyed off it.
- **The renderer is a pure function.** `renderBlocks(card) → htmlString`. Same input, same output. No globals beyond the registries it explicitly looks at. Drop-in on any host — current shell HTML, future CMS preview pane, future server-side renderer for SEO.
- **Diagrams are declarative.** Authors describe what the chart shows (curves, shifts, equilibria) — not pixel coordinates. The diagram engine does the geometry. This is what makes hand-rolled SVG go away.

What changes when the CMS lands:

| Today | After CMS |
|---|---|
| Edit `js/data/.../learn-it.js`, refresh dev server | Edit card in CMS UI, hit preview |
| Validator runs in browser dev-mode console | Validator runs on insert/update server-side; CMS UI blocks save if errors |
| Block schema known only to validator | Schema also drives the form layout — every field a typed input, every array a table |
| JSON textarea in the Editor | Per-field form, per-block-type dedicated controls; "Add block" picker shows the catalogue |
| Diagrams: choose a generator + pass params | Diagrams: same generators, but a wizard-style form ("which chart?" → "which shifts?" → "label the equilibria") |
| Authors are devs | Authors are teachers writing prose; the schema enforces structure |

The Studio is being built so that none of the renderer, validator, schemas, or generators need to change at that transition. Only the storage layer and the editor UI change. The data contract is constant.

## Glossary, the words I'll use

- **Card** — one screen of content. A row in the future `cards` table.
- **Topic** — a sequence of cards. The current `js/topics.js` registry; future `topics` table.
- **Block** — a typed component inside a card. `{ type: 'tile', head, body }`. A block knows nothing about the cards or topics that contain it.
- **Block type** — the registered renderer key. `'tile'`, `'pair'`, `'stepChain'`, etc. Each has a schema, a renderer, and CSS.
- **Schema** — the declared shape of a block type. Required fields, optional fields, field types, default tone.
- **Generator** — a high-level diagram-producing function, e.g. `adasDiagram({ mode: 'demand-pull' })`. Returns SVG. Invoked via the `diagram` block.
- **Studio Library** — `dev/renderer-lab.html`. Reference gallery.
- **Studio Editor** — `dev/renderer-lab-edit.html`. Live JSON editor.

## Naming

When you talk about this in product docs / PR descriptions / Slack:

- The whole thing is **Card Studio** (or just **Studio**).
- Inside Studio you have the **Library** (gallery) and the **Editor** (live JSON).
- The thing being authored is a **card** (block array) or a **topic** (sequence of cards).
- The dev tools that ride alongside (validator, renderer-lab.html) are part of Studio.
- The on-device runtime that turns cards into pixels is the **block renderer**.

Avoid: "the lab", "the block thing", "the dev page". Those are accurate but they make the system sound smaller than it is.

## See also

- `docs/RENDER_BLOCKS.md` — full block catalogue (one entry per block type)
- `docs/DIAGRAM_LIBRARY.md` — diagram-generator reference
- `docs/ADDING_NEW_BLOCKS.md` — workflow for adding a new block type from a mockup
- `.claude/skills/econos-card-template/SKILL.md` — design discipline + mockup → block cheat sheet
- `.claude/skills/econos-visual-diagram/SKILL.md` — diagram authoring conventions
