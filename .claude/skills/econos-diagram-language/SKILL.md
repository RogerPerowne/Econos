---
name: econos-diagram-language
description: Use when creating, editing or migrating an analytical economics diagram on Econos with the Econos Diagram Language (EDL, window.ECONOS_DIAGRAMS). Owns the semantic spec grammar (families, intents, show tokens), the arrow + layer + collision model, and the blunt authoring rules. Trigger when the user asks to "add a diagram", "make a supply and demand / tax / subsidy / externality / PPF / AD-AS / Phillips diagram", "draw an economics chart", or to migrate a legacy ECONOS_PPF chart to EDL. Do NOT use for firm cost/revenue (MC/AC) or interactive multi-state charts — those stay on the legacy engine for now.
---

# Econos Diagram Language (EDL)

EDL is a **domain-specific economics diagram language**, exposed as
`window.ECONOS_DIAGRAMS` from `js/diagrams/econos-diagrams.js`. You describe the
**economics**; the engine solves geometry, layering, labels, arrows and rendering.

Full reference: `docs/DIAGRAM_LANGUAGE_GUIDE.md`.
Copy-paste starting points: `docs/DIAGRAM_AUTHORING_RECIPES.md`.
Legacy → EDL: `docs/DIAGRAM_MIGRATION_GUIDE.md`.

## The one move that matters

Write a **semantic spec**. `type` + `intent` is usually enough:

```js
window.ECONOS_DIAGRAMS.render({ version: 1, type: 'tax', intent: 'tax-incidence', tax: { size: 0.18 } });
```

Read solved numbers (equilibria, wedge, prices, quantities) from `.derived`.
Never type them yourself.

## Blunt rules

1. **Prefer semantic specs.** Families: `market`, `tax`, `subsidy`, `price-control`,
   `externality`, `ppf`, `ad-as`, `phillips`. Reach for low-level fields only when a
   template genuinely can't express the idea — then extend the template instead of
   hand-rolling the spec.
2. **Never hand-author raw `<svg>`** in data files or specs. If you typed `<path`,
   `<marker` or `d: 'M ...'`, you did it wrong. When the templates don't cover
   something, use the **`annotations`** escape hatch (`label`/`marker`/`region`/
   `segment`/`bracket`/`arrow`) — and anchor positions semantically
   (`{ point: 'E1' }`, `{ intersection: ['D1','S'] }`, `{ onCurve: 'D1', x }`),
   never raw `{x,y}`, so the addition stays geometry-solved. See guide §15.
   To add a whole new family, call `ECONOS_DIAGRAMS.registerFamily({...})` (§13);
   read the legal vocabulary with `ECONOS_DIAGRAMS.grammar()` (§14).
3. **Never type equilibrium coordinates.** Declare curves by `role` + `elasticity`
   (or just an `intent`) and let the engine intersect them.
4. **Use `show` tokens**, not invented flags. See the token list in the guide.
5. **Use chevron arrows.** They are the default. `triangle` heads are legacy-only and
   must be set explicitly per-arrow.
6. **No `labelDx` / `labelDy`** in a semantic spec unless you also set
   `allowManualLayout: true`. Trust the collision pass; if a label won't fit, shorten
   it or move it into a `teaching` callout.
7. **Run the gates and look at it:**
   - `node scripts/lint-diagrams.mjs` — **blocking**: renders every family ×
     intent and fails on a render error, an unresolved anchor, or a dropped
     label. A dev-mode warning is a red build, not a yellow one (guide §16).
   - `npx vitest run tests/unit/diagrams.test.js`
   - eyeball `dev/diagram-builder.html` (paste the spec) or `dev/diagram-gallery.html`.
8. **Add a gallery example** whenever you add a template or a new intent.

## Modes & viewports

- `mode`: `learn` (colour + callouts), `exam` (slate, essentials only), `debug` (boxes + counts).
- `viewport`: `card` (520×360, compact, auto-hides labels), `stage` (640×440), `article` (760×520), `full` (920×620).

## Accessibility

Add `alt: { summary }`. If you omit it the engine generates one, but a hand-written
summary is better. UK English; short dashes only.

## Legacy boundary

`ECONOS_DIAGRAMS.render` auto-delegates legacy `ECONOS_PPF` specs (raw paths /
`chartArea` / hand-authored markers). **Do not** edit or delete `js/charts/ppf.js`
or `js/charts/specs/*.js`. Keep interactive multi-state charts and firm-side
cost/revenue diagrams on the legacy engine until EDL grows those features.

## When wiring into shells

EDL is loaded today only by `dev/diagram-gallery.html` and `dev/diagram-builder.html`.
Before adding `<script src="/js/diagrams/econos-diagrams.js">` to a Learn It / Link It /
Land It shell, confirm the GitHub Pages route generation and `sw.js` PRECACHE_ASSETS
are updated, and bump `CACHE_NAME` (it is a cache-first asset like `js/icons.js`).
