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

`npm run lint:tokens` reports **token drift** — raw 6-digit hex literals that
exactly duplicate a defined colour token — per file, with a total to drive down.
Run `node scripts/lint-tokens.mjs --list` for the per-hex breakdown.

```
   0  styles.css (outside :root)   ← swept to tokens
 522  js/app.js                    ← inline-style sweep, next
3013  js/icons.js                  ← hand-authored SVG chart fills
```

It is a **reporter** today (exit 0). Once `js/app.js` is swept it can be wired
into `npm run lint` as a blocking gate to prevent regression.

## Progress / roadmap

- [x] **Audit** — the token set is complete; the issue is application.
- [x] **`styles.css` swept** — 77 duplicated hexes → tokens (value-preserving;
  `:root` definitions untouched). 0 drift remaining.
- [x] **Drift reporter** — `npm run lint:tokens`.
- [ ] **`js/app.js`** — tokenise inline-style hexes (~522), then add spacing/type
  literals; verify per card with screenshots.
- [ ] **`js/icons.js`** — tokenise SVG chart fills (~3013) where they duplicate a
  brand colour (chart-specific shades stay literal).
- [ ] **Make `lint:tokens` blocking** once the count is near zero.
- [ ] Extend the reporter to flag duplicated spacing/radius px literals too.
