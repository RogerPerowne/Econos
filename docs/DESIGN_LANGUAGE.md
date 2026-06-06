# Econos Design Language

The visual system for the whole site — typography, colour, spacing, radii,
shadows. The tokens **already exist** in `styles.css` `:root`; this document is
the canonical reference for them and the policy for using them. The ongoing work
is **consistency**: use a token, never a raw literal where a token exists.

> Not to be confused with any diagram engine — this is purely the visual chrome
> (pages, cards, controls). It is vanilla CSS custom properties; no framework.

## The tokens (all defined in `styles.css` `:root`)

### Colour — `--econ-*`
Brand palette, each with tints/shades:
- **Ink** — `--econ-ink` (`#0B1426`), `--econ-ink-soft` (body text).
- **Green** (Learn / success) — `--econ-green`, `-50 -100 -600 -700 -800`.
- **Amber/yellow** (Link / attention) — `--econ-amber`, `-50 -100 -600 -700`.
- **Rose/pink** (Land / climax) — `--econ-rose`, `-50 -100 -600 -700`.
- **Purple** (extended / synthesis) — `--econ-purple`, `-50 -100 -600 -700 -800`.
- **Blue** (data / links) — `--econ-blue`, `-dark -50 -100 -600 -700`.
- **Neutrals** — `--econ-cream` (page bg), `--econ-white` (surfaces),
  `--econ-gray-50…900`, `--econ-border`, `--econ-border-strong`.

### Typography
- Families: `--font-display` (Fraunces, headings), `--font-body` (Inter).
- Fraunces presets: `--fraunces-display`, `--fraunces-section`.
- Size scale: `--fs-xs 12` · `sm 13` · `base 15` · `md 16` · `lg 18` · `xl 20` ·
  `2xl 24` · `3xl 28` · `4xl 36` · `5xl 44`.
- Weights: `--fw-normal 400` · `medium 500` · `semi 600` · `bold 700` · `extrabold 800`.
- Line-height: `--lh-tight 1.1` · `snug 1.3` · `normal 1.5` · `relaxed 1.6`.

### Spacing — `--sp-1…12` (4 / 8 / 12 / 16 / 20 / 24 / 28 / 32 / 40 / 48 px)
### Radii — `--r-sm 4` · `md 8` · `lg 14` (cards) · `xl 18` (hero) · `2xl 20` · `full`
### Shadows — `--shadow-sm` · `--shadow-md` · `--shadow-lg` (+ ring / card-rest / card-hover)
### Hover/interaction — `--hover-lift` (-2px) · `--hover-lift-lg` (-3px) · `--hover-tr` (the canonical transition)
### Layout — `--sidebar-w` · `--rightbar-w` · `--header-h` · `--app-max-w` · `--page-max-w`

## The policy

1. **Never hardcode a value a token already expresses.** Use `var(--econ-ink)`,
   not `#0B1426`; `var(--sp-4)`, not `16px`; `var(--fs-base)`, not `15px`.
2. New brand colours go in `:root` first (as an `--econ-*` token), then get used.
3. The `:root` block is the **only** place a raw hex/px literal is authored.
4. Inline `style="…"` in JS is the worst offender — prefer a class in
   `styles.css`; when an inline style is unavoidable, still reference tokens
   (`style="color:var(--econ-ink)"`).

## Measuring + enforcing consistency

`npm run lint:tokens` reports drift across **colour, font-weight, font-size,
line-height and radius**, per file, splitting two kinds:

- **dup** — a raw literal that exactly duplicates a token (e.g. `#0B1426`,
  `font-weight:700`) → should be `var(--…)`. Note: SVG `fill=`/`stroke=`
  *attribute* colours show here but can't take `var()`, so they stay literal
  until a `style="fill:…"` refactor.
- **off** — an off-scale literal with no matching token (e.g. `font-size:14px`,
  `border-radius:12px`, `line-height:1.65`). This is the rationalisation backlog:
  snapping these to the scale is a *visual* change, so it needs sign-off first.

It's a reporter (exit 0); once `dup` is near zero it can be wired into
`npm run lint` as a blocking gate. Run with `--list` for the colour breakdown.

## Consistency — what is token-driven now

Value-preserving sweeps (resolved values identical, screenshot-verified):
- **Colour** — `styles.css` 0 drift; `app.js` inline-style colours tokenised.
- **Font weight** (bold/regular) — `var(--fw-*)` across app.js + styles.css.
- **Font size** — exact-scale literals -> `var(--fs-*)`.
- **Line-height** — exact-scale -> `var(--lh-*)`.
- **Border-radius** — exact-scale -> `var(--r-*)`.
- **Bug fix** — `var(--fraunces-heading)` (undefined) -> `var(--fraunces-section)`.

**Brand serif (Fraunces)** is used occasionally where it adds warmth — economist
quotes and "Big idea"/conclusion statements — body stays Inter.

`npm run lint:tokens` reports two things per file: **dup** (a raw literal that
duplicates a token — tokenise it) and **off** (an off-scale literal with no token
— the rationalisation backlog; snapping to the scale is a visual change so needs
sign-off). SVG `fill=`/`stroke=` *attribute* colours can not take `var()`, so
they show as dup but stay literal until refactored to `style="fill:…"`.

---

## Components

Reusable, token-built UI pieces (`styles.css` + `js/app.js`):

- **Comparison table** (`c.rows` → `.cmp-table`) — the signature table with the
  **black header bar** (`.cmp-table__head { background: var(--econ-ink) }`, white
  uppercase `--fw-extrabold` labels), zebra rows, `--econ-border` rules. This is
  the canonical table look — keep new tabular content on it.
- **Static table** (`c.table`) — lighter grey-header variant for simple 2-column
  reference rows.
- **Tone cards** — green/amber/rose/purple/blue triplets (bg / border / label)
  drive tiles, callouts, branches and the `economistQuote` band.
- **Bullets / ticks** — bullets are `•` in a tone colour; ticks use the bespoke
  `check` glyph in `--econ-green`. (Unifying these into single shared classes is
  the open structural pass — not yet done.)

> Brand serif (Fraunces) appears on the **economist-quote** text (italic) and the
> **"Big idea" / conclusion** statement; everything else stays Inter.

---

## Content boxes

The recurring boxes that appear on most cards (key terms, key takeaway, lock-in,
tips, …) are being moved off bespoke inline styles into one universal, token-only
home in `styles.css` ("DESIGN LANGUAGE — CONTENT BOXES"). Goal: styling is
*guaranteed, not re-typed* — fix the box once, every card updates; adding a box
type is one class.

- **Tone system** — add a `tone-<name>` class
  (`green / amber / blue / purple / rose / slate`) to any box and it inherits the
  brand palette via `--t-50 / --t-100 / --t-solid / --t-ink / --t-accent`. One
  source of truth; mirrors the JS `TONES`/`TONE_NAMES` tables but token-only.
- **Migrated so far:**
  - `.key-terms` / `.kt-tile` — definition tiles with a solid tone header bar.
  - `.key-points` / `.kp-tile` — takeaway tiles with a tone bottom-border
    (`compare` / `minimal` variants supported).
  - `.lock-in` — green success footer strip with a row of ✓ items
    (note-tier hover).
  - `.exam-edge` / `.key-takeaway` — the closing-pair callouts (already
    class-based); each hover deepens its own coloured glow (purple / amber).
  - `.tone-callout` — the tip / note / tipLate inline box (round accent icon +
    optional head + text); one `renderToneCallout` helper drives all three;
    note-tier hover.
  - `.callout-band` — the conclusion (green) / balanced-note (amber) verdict bands;
    shares the **exam-edge treatment** (generous padding, subtle tone gradient,
    1.5px border + 4px left accent, 32px icon, bold label, Inter body) so the
    full-width verdict-band family (exam-edge / key-takeaway / conclusion /
    balanced-note) is visually consistent; `renderCalloutBand` helper.
  - `.step` — numbered sequential cards with a tone left-accent (tone cycles by
    index); tile-tier hover.
  - `.body-box` — definition/lead-text box (plain spacious reading variant +
    `--tone` accent-icon variant); note-tier hover.
  - `.summary-row` / `.summary-cell` — up to 3 tone mini-cards (title + text +
    bullet items); tile-tier hover.
  - `.method-grid` / `.method-card` — cards with a tone header (icon + title) +
    body + optional example line; tile-tier hover.
  - `.diagram-grid` / `.dg-card` — cards with a tone header, an SVG, and
    tone-dot bullets; tile-tier hover.
  - `.gen-verdict` — tone columns of ✓/✕ items split by a VS/→ badge;
    tile-tier hover; stacks on mobile.
  - `.split-decision` — two tone side-cards split by a VS badge; tile-tier
    hover; stacks on mobile.
  - `.gen-comparison` — 2–3 tone cards (icon ring + label + value/caption/
    chips) split by an operator badge (`--triple` for A op B = C); tile-tier hover.
  - `.flow-chain` / `.flow-step` — numbered ring + tone icon circle + title +
    sub joined by dashed connectors, with ✓/✕/! status badges; no hover
    (connected diagram); stacks on mobile.

  Tiles carry the tile-tier hover; full-width strips the note-tier; the
  closing-pair callouts deepen their own glow. More box types land one per
  release.

Data shapes are unchanged — only the renderer behind each box moves to the class.

### Why this also enables migration

Moving every box onto `.tone-*` + tokens (no inline colours) is what keeps the
three layers — content data / pure render engine / token styling — cleanly
separable, so the content is easy to lift to a Postgres + .NET backend. The
data→component contract per box, the export bridge (`npm run export:content`), the
target schema (`docs/schema/postgres.sql`) and the production blueprint live in
**`docs/CONTENT_MIGRATION.md`** and **`docs/PLATFORM_BLUEPRINT.md`**. Rule:
**content data carries semantic tone names, never colours or raw markup.**

---

## Hover interactions

Modelled on the home-page topic box (`.topic` in `index.css`) — a small
`translateY` lift plus a soft, tone-tinted shadow. Centralised in the
**"DESIGN LANGUAGE — HOVER INTERACTIONS"** block in `styles.css` and applied
**selectively** (never to body text, nested parts or table rows). Three tiers,
each a deliberately distinct feel:

| Tier | Applies to | Effect |
|------|-----------|--------|
| **feature** | `.branch-tri` (decision boxes, carry `--tone-strong`) · `.dl-hover-feature` | `-3px` lift + tone-tinted shadow — closest to the home page |
| **tile** | `.mech-tile` · `.impact-card` · `.summary-tile` · `.cause-col` · `.dl-hover-tile` | `-2px` lift + `--shadow-card-hover` (neutral lifted shadow) |
| **note** | `.callout` | no lift — a soft shadow bloom (`--shadow-lg`) so the note "warms" without jumping |

Tokens: `--hover-lift` / `--hover-lift-lg` (the two lift distances) and
`--hover-tr` (the canonical `transform`/`box-shadow`/`border-color` transition).
For a bespoke or inline-styled box, add the opt-in helper class
`dl-hover-tile` or `dl-hover-feature` rather than re-deriving the effect. All
transitions are disabled under `prefers-reduced-motion`, so hovers degrade to
instant + accessible.

## Smartphone

On top of the existing reflow (sidebar hides < 900px, inline grids stack
< 600px, mobile stage strip), a conservative `≤ 480px` layer tames the two
largest type steps at the **token** level (`--fs-5xl` 44→34, `--fs-4xl` 36→30,
so every use scales together) and trims the generous padding on standalone
tiles/callouts to `--sp-4`. Spacing + colour tokens are untouched.

---

## Icons

Two icon mechanisms, both token-coloured (`fill: currentColor`):

1. **Material Symbols** (Rounded, outlined, weight 400) — `js/icons/material-symbols.js`
   is a generated registry of inline SVG paths + a helper
   `window.ECONOS_SYM(name, size)`. The sidebar-nav icons use it; the cover /
   stage / tick symbols deliberately keep their bespoke hand-drawn artwork.
2. **Emoji** — still used as expressive card-tile icons in content data; unchanged.

### Using a Material Symbol in content data — one line

Any data `icon` field accepts a `sym:<name>` value; the renderer
(`renderIcon` in `js/app.js`) turns it into the inline symbol, and passes
emoji/markup through unchanged:

```js
{ icon: 'sym:rocket_launch' }   // a Material Symbol
{ icon: '🚀' }                  // an emoji (unchanged)
```

### Adding a new symbol

1. Add its Material Symbol name (browse https://fonts.google.com/icons, style
   **Rounded**) to `MANIFEST` in `scripts/fetch-symbols.mjs`.
2. Run `npm run fetch:symbols` — it re-downloads the Rounded SVGs and regenerates
   `js/icons/material-symbols.js`. Offline-first: paths are inlined, no font, no
   runtime network.
