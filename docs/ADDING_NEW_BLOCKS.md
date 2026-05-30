# Adding a new block type

When a mockup contains a visual pattern that none of the existing blocks renders cleanly, the answer is a new block type — not a hand-rolled HTML chunk inside an existing block. This doc is the checklist.

## When to add a new block (vs reuse)

Run the mockup → block cheat sheet in `econos-card-template` first. Only add a new block when:

1. The pattern recurs (you'd reach for it on at least 2–3 cards across topics), AND
2. The visual identity is distinct enough that the existing blocks can't be parameterised to cover it without bloat, AND
3. The structure is data-shaped (rows of items, named slots, ordered steps) — i.e. you can write a schema for it.

If only one card needs it, prefer a tweak to an existing block (new optional field, new tone). If the structure is bespoke and won't recur, put it in `js/icons.js` as a static SVG and reference it via `heroVisual`.

## The 9-step recipe

### 1. Sketch the schema first

Before any code, write the schema as a comment:

```
type:    'roiBar'                     // kebab-or-camel, unique
required: [data, label]                // engine + form will enforce
optional: [tone, valueSuffix]
fields:
  data:        Array<{ label: string, value: number, tone?: Tone }>
  label:       string
  tone:        Tone (default 'blue')
  valueSuffix: string (default '%')
```

If you can't write this in 4–6 lines, the block is doing too much. Split it.

### 2. Add the schema entry

Edit `js/blocks/_schema.js` and add an entry for the new type. The validator and (future) form editor both read from this file:

```js
roiBar: {
  required: ['data', 'label'],
  optional: ['tone', 'valueSuffix'],
  arrayOf: { data: { required: ['label', 'value'] } }
}
```

### 3. Pick the file

| Block group | File | Loaded as |
|---|---|---|
| Core / structural primitives | `js/render-blocks.js` | `BLOCK_RENDERERS.foo = ...` |
| Comparison-shaped | `js/blocks/compare.js` | `B.foo = ...` |
| Flow / sequence-shaped | `js/blocks/flow.js` | `B.foo = ...` |
| Layout / arrangement | `js/blocks/structure.js` | `B.foo = ...` |
| Data / metric / equation | `js/blocks/data.js` | `B.foo = ...` |
| Diagram-related | `js/blocks/diagram.js` | `B.foo = ...` |

If none fits, the block is probably a new group — add a new file `js/blocks/<group>.js`, follow the existing IIFE pattern, and add a `<script defer>` tag to all three shells (`learn-it.html`, `link-it.html`, `land-it.html`) + the Studio Library + the Studio Editor.

### 4. Write the renderer

Use `window.ECONOS_BLOCK_UTILS` for escaping, tones, icons, and recursive child rendering. Never write raw user input into HTML without escaping. Pattern:

```js
B.roiBar = function roiBar(block) {
  var data = Array.isArray(block.data) ? block.data : [];
  if (!data.length) return '';

  var rows = data.map(function (item) {
    var tone = U.toneClass(item.tone, 'blue');
    var label = U.escapeHtml(item.label);
    var value = U.escapeHtml(item.value);
    return (
      '<li class="roi-bar__row ' + tone + '">' +
        '<span class="roi-bar__label">' + label + '</span>' +
        '<span class="roi-bar__value">' + value + '</span>' +
      '</li>'
    );
  }).join('');

  return (
    '<div class="roi-bar" data-overflow-watch>' +
      '<h4 class="roi-bar__heading">' + U.escapeHtml(block.label) + '</h4>' +
      '<ul class="roi-bar__list" role="list">' + rows + '</ul>' +
    '</div>'
  );
};
```

### 5. Write the CSS

Add styles to the matching `css/blocks/<group>.css`. Three rules:

- Scope every selector with `.econ-blocks` so it can't bleed into the shell chrome
- Use design tokens (`--econ-tone-*`, `--econ-gap`, `--econ-pad`) — no raw hex colours
- Stretch + align via flex/grid, not fixed widths. Tile heights should auto-match via stretch

### 6. Add a fixture to the Studio Library

Open `dev/renderer-lab.html`, find the right section's `renderBlocks([...])` call, and add the new block with realistic content:

```js
{ type: 'sectionHeader', icon: 'N', label: 'roiBar — toned ROI bars' },
{
  type: 'roiBar',
  label: 'Investment returns by sector',
  data: [
    { label: 'Tech',     value: 18.4, tone: 'green' },
    { label: 'Energy',   value:  6.2, tone: 'amber' },
    { label: 'Retail',   value: -2.1, tone: 'rose'  }
  ]
}
```

Update the section subtitle and the table of contents at the top of the file.

### 7. Add a preset to the Studio Editor

Edit `dev/renderer-lab-edit.html`. Add an entry to `PRESETS`:

```js
'ROI bar': {
  title: 'ROI bar',
  blocks: [{ type: 'roiBar', label: 'Returns', data: [ ... ] }]
}
```

The preset bar gives you a one-click starting card to iterate from.

### 8. Document it

- `docs/RENDER_BLOCKS.md` — add a section with the JSON example + a sentence on when to use it
- `.claude/skills/econos-card-template/SKILL.md` — add a row to the **mockup → block cheat sheet**, add a row to the **block component catalogue** table

### 9. Bump the SW cache + commit

`sw.js` is cache-first for `js/blocks/*.js` and `css/blocks/*.css`. New block files don't need precaching individually (they're loaded via existing `<script>` tags), but any new `css/blocks/*.css` file does need adding to `PRECACHE_ASSETS`. Bump `CACHE_NAME`.

Then push, PR, ship.

## Naming conventions

- **Block type name** — camelCase, single noun-phrase. `tile`, `pair`, `stepChain`, `versusRows`, `targetGauge`. Not `tile-block`, not `Pair`.
- **CSS class** — kebab-case derived from the type. `tile` → `.econ-tile`; `stepChain` → `.step-chain`; `pair` → `.pair`. Always with the `.econ-blocks` parent scope.
- **Schema entry key** — same as the block type name. `roiBar:` not `'roi-bar':`.
- **Fixture id** — `lab-NN-<group>` where NN matches the section number in the Library.

## Smell tests

A new block is wrong if any of these apply:

- It takes a `html: '<...>'` field. That's "render literally this HTML"; an attacker-controlled card breaks the page. If you find yourself reaching for that, the structure isn't data-shaped enough — keep iterating the schema.
- It has more than ~6 top-level fields, or more than two levels of nested arrays. That's a sign two blocks are being smushed into one.
- It depends on a sibling block being present elsewhere on the card. Blocks must be locally renderable.
- It writes to globals other than `window.ECONOS_BLOCKS[<name>]`. The block renderer's purity is a load-bearing property of the framework.

## Walked example — adding `pair` (a real one)

The `pair` block was added for the side-by-side "vs" pattern that recurred across multiple topics' Pattern-2 cards.

1. Schema sketch — `left:{tone,icon?,head,body}`, `right:{...}`, optional `vsLabel`
2. Schema entry — added under `pair:` in `js/blocks/_schema.js`
3. File — `js/blocks/compare.js` (compare group)
4. Renderer — 40 lines including the `side()` helper for symmetry
5. CSS — `.econ-blocks .pair` grid with optional `.pair__vs` badge that becomes the middle column; mobile breakpoint stacks
6. Library fixture — section 2, with-VS and no-VS variants
7. Editor preset — "Pair (side-by-side)" with green/rose contrast
8. Docs — `RENDER_BLOCKS.md` + cheat-sheet row "Two coloured cards side-by-side with vs between" → `pair`
9. Cache bumped, shipped

Total elapsed: ~90 minutes including review. The recipe above is what made that fast.
