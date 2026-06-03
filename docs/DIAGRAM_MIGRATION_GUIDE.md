# Diagram migration guide — legacy charts → EDL

This guide explains how to move a diagram from the legacy chart engine
(`window.ECONOS_PPF`, raw-path specs under `js/charts/specs/`) to the Econos
Diagram Language (`window.ECONOS_DIAGRAMS`).

> **Nothing is forced.** Legacy specs keep working forever via the delegation
> path. Migrate a diagram when you are *touching* it anyway, or when you want the
> stronger guarantees EDL gives (solved equilibria, managed layers, collision-safe
> labels, exam/learn/debug modes).

---

## 1. Why migrate

| Legacy chart spec | EDL semantic spec |
| --- | --- |
| Raw SVG paths `d: 'M 0.1,0.9 L ...'` | Curves declared by `role` + `elasticity` |
| Equilibrium typed as `{ x, y }` literals | Equilibrium **solved** as `intersection(D, S)` |
| Hand-placed labels, manual `labelDx/labelDy` | Collision-managed labels with candidate positions |
| Hand-authored markers in `defs` | Open chevron markers generated per colour |
| One look | `learn` / `exam` / `debug` modes for free |
| `chartArea` pixel maths | `viewport: card \| stage \| article \| full` |

---

## 2. The advisor

Run the non-destructive classifier to triage the legacy library:

```bash
node scripts/convert-legacy-charts.mjs            # full report
node scripts/convert-legacy-charts.mjs --min 0.5  # only confident candidates
node scripts/convert-legacy-charts.mjs --json     # machine-readable + skeletons
node scripts/convert-legacy-charts.mjs --file tax # one spec
```

It classifies each legacy spec into one of:

```
market-equilibrium · demand-shift · supply-shift · tax · subsidy ·
price-control · externality · ppf · ad-as · phillips · unknown
```

…with a **confidence score** and a suggested EDL skeleton. It **never edits files**.

---

## 3. Migration recipe

1. **Identify the family.** Use the advisor, or read the legacy spec's comment header.
2. **Pick the intent.** Match the legacy diagram's story to an intent from the
   [supported list](DIAGRAM_LANGUAGE_GUIDE.md#3-supported-families--intents).
3. **Write the semantic spec.** Start from `type` + `intent`; add `show` tokens and
   family inputs (`tax.size`, `demand.elasticity`, …) only as needed.
4. **Delete the geometry.** Throw away `d:` paths, `chartArea`, typed equilibria,
   `defs` markers, `labelDx/labelDy`. If you find yourself re-adding them, the
   template is missing something — extend the template, don't hand-roll the spec.
5. **Verify.** `node scripts/lint-diagrams.mjs`, `npx vitest run`, and eyeball the
   result in `dev/diagram-builder.html` (paste the spec) or add it to
   `dev/diagram-gallery.html`.

### Worked example — indirect tax

**Before** (`js/charts/specs/tax-diagram-interactive.js`, abridged):

```js
window.ECONOS_TAX_DIAGRAM_SPEC = {
  chartArea: { x: 55, y: 18, width: 360, height: 254 },
  defs: '<marker id="tax-arr" ...><path d="M 0 0 L 10 5 L 0 10 z" .../></marker>',
  curves: [
    { d: 'M 0.1,0.85 L 0.92,0.18', tone: 'blue', label: 'D' },
    { d: 'M 0.1,0.12 L 0.92,0.88', tone: 'gray', label: 'S' },
    { d: 'M 0.1,0.30 L 0.92,1.06', tone: 'orange', label: 'S+tax' },
  ],
  points: [{ x: 0.5, y: 0.52, id: 'E', label: 'E' }, /* typed coords */ ],
  // ...hand-placed Pc / Pp / DWL annotations
};
```

**After** (EDL):

```js
{
  version: 1,
  type: 'tax',
  intent: 'tax-incidence',
  mode: 'learn',
  viewport: 'card',
  demand: { elasticity: 'inelastic' },
  supply: { elasticity: 'normal' },
  tax: { size: 0.18, imposedOn: 'producers' },
  show: ['tax-wedge', 'consumer-burden', 'producer-burden', 'deadweight-loss'],
  alt: { summary: 'A specific tax shifts supply up; consumers bear most of the burden when demand is inelastic.' }
}
```

The equilibrium, the post-tax quantity, `Pᴄ`/`Pₚ`, the wedge, the burden rectangles
and the deadweight-loss triangle are all **solved** — read them from `render(spec).derived`.

---

## 4. Mapping table

| Legacy concept | EDL replacement |
| --- | --- |
| `curves: [{ d, tone, label }]` | `curves: { D1: { role, elasticity }, ... }` or an `intent` |
| typed `E = { x, y }` | `derived.E1` / `derived.E2` (solved) |
| `perpendicular: { from, t, to }` | `show: ['frontier-after']` / arrow `kind: 'perpendicular-between-curves'` |
| `defs` chevron markers | automatic — `head: 'chevron'` (default) |
| `chartArea` | `viewport` |
| `labelDx` / `labelDy` | collision pass (or `allowManualLayout: true` to opt out) |
| `inverseLayers` (state swaps) | not yet — keep interactive multi-state charts on `ECONOS_PPF` for now |

---

## 5. What to leave on the legacy engine (for now)

- **Interactive multi-state charts** (`layers` / `inverseLayers` reveal steps) —
  EDL v1 renders a single state. Keep these on `ECONOS_PPF` until EDL grows states.
- **Firm-side cost/revenue diagrams** (MC/AC/AVC, monopoly, kinked demand) — not yet
  an EDL family.
- Anything already shipped and stable that you are not otherwise editing.

---

## 6. Safety

- The conversion script is advisory and **never writes files**.
- `js/charts/ppf.js` and every `js/charts/specs/*.js` stay in place.
- The legacy delegation path is covered by tests in `tests/unit/diagrams.test.js`
  (`legacy ECONOS_PPF compatibility`).
