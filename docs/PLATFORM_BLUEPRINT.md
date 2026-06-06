# Econos → Production Ed-Tech Platform — Blueprint

**This is a blueprint, not an implementation.** Econos today is a fast static SPA
(GitHub Pages + offline PWA). The job of the recent design-language + universal-box
work is to keep the architecture *migration-ready* so turning it into a full
Postgres + .NET ed-tech platform is a lift, not a rewrite. This doc sketches the
target shape and the boundaries we keep clean. We are **not** building the platform
here — see `docs/CONTENT_MIGRATION.md` for the concrete export/contract.

## What we already have (the portable core)

Three decoupled layers (detailed in `CONTENT_MIGRATION.md`):
- **Content** — JSON-shaped topic/card data, tone-by-name (no colours embedded).
- **Render engine** — pure `data → HTML` functions (`js/app.js`).
- **Styling** — `styles.css`, all decisions as `:root` design tokens; no framework.

Plus: a content export bridge (`npm run export:content`), a target relational
schema (`docs/schema/postgres.sql`), and per-box data→component contracts.

## Target architecture (what a team would build on top)

```
            ┌──────────────────────────────────────────────┐
 Authoring  │ Content store (Postgres)                      │
   ───────► │  topics · cards(jsonb body) · link · quiz     │
            │  tone enum · boards · (later) users, progress │
            └───────────────┬──────────────────────────────┘
                            │  content API (.NET)
                            ▼
            ┌──────────────────────────────────────────────┐
 Rendering  │ .NET app:  card body (jsonb) ──► HTML         │
            │  • reuse js/app.js renderers via SSR sidecar  │
            │    OR re-implement as Razor/Blazor partials   │
            │  • emit the documented .tone-*/component CSS   │
            └───────────────┬──────────────────────────────┘
                            │  static assets (verbatim)
                            ▼
            styles.css + fonts + chart SVG strings
```

Additive services a real platform needs (each bolts on without touching the core):
- **Auth & accounts** — replace the current localStorage gate.
- **Progress & spaced repetition** — per-user card/quiz state (the SPA already has a
  `progress` module + unit tests to port the logic from).
- **Authoring** — a CMS writing the same `cards.body` JSON shape (validated against
  the contract table).
- **Multi-board / multi-tenant** — `boards` already first-class in data + schema.
- **SSR for SEO** — the pure render engine makes server rendering trivial; the
  articles pipeline is already static-HTML/SEO-oriented to learn from.

## Boundaries to keep clean (so the leap stays cheap)

1. Content data carries **no colours, no raw markup** — semantic tone names + text/
   structured fields only.
2. Renderers stay **pure** `data → HTML` (no globals, no fetch) so they run
   server-side unchanged.
3. Styling stays **token-driven** in `styles.css` (`:root`), framework-free.
4. Every box has **one** component + a recorded data→component contract; no
   per-card bespoke styling. (This is the 100%-consistency goal in progress.)

Hold those four and the migration is: export JSON → load Postgres → render with the
existing functions → serve the existing CSS.
