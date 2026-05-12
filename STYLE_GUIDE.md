# Econos — Style Guide

A single source of truth for the visual language. Reference this for every new topic, every new card, every new diagram. When something on screen disagrees with this guide, change the screen, not the guide. When the guide itself needs updating, edit it here and ripple changes through.

---

## 1. Colour system

### Brand palette
| Role | Token | Hex | Used for |
|------|-------|-----|----------|
| Primary | `--econ-blue` | `#2563EB` | Brand, primary CTAs, diagram curves, "info" callouts |
| Primary deep | `--econ-blue-dark` | `#1E40AF` | Brand text, deep emphasis |
| Success / positive | `--econ-green` | `#10B981` | Demand-pull, "expansion", green ticks, positive shifts |
| Warning / caution | `--econ-amber` | `#F59E0B` | Cost-push, volatile signals, "policy" boxes |
| Danger / problem | `--econ-rose` | `#E11D48` | Deflation, dilemma, danger callouts |
| Editorial accent | `--econ-purple-700` | `#7E22CE` | Exam-edge (the "gem") ONLY |

### Critical rule: matching layers
On any themed box, the four colour layers must all reference the same hue family:
- Border-left stripe (accent)
- Title text colour
- Icon badge background
- Border-color of the surrounding 1.5px frame (NOT a light tint — match the stripe or use neutral grey-200)

**This rule was learned the hard way on the exam-edge debug.** A light purple frame around a deep purple stripe reads as pink because the eye picks up warm contrast. Either match the frame to the stripe, or use a true neutral grey.

### Diagram colours (different from box accents)
Diagrams use a slightly different, softer palette to feel illustrative rather than UI:
| Element | Hex | Notes |
|---------|-----|-------|
| Primary curve (AD, SRAS, etc) | `#2563EB` | Same as brand blue, thick stroke |
| Secondary curve (AD₂, shifted) | `#2563EB` (parallel) or `#10B981` (alternate visual) | Match curve nature; don't switch colours for the same conceptual line |
| Dashed/historical curve | `#94A3B8` | Greyed-out previous state |
| Projection lines (P₁, Y₁ etc) | `#FCA5A5` (soft red) | Friendly, never grey — harmonises with blue |
| Equilibrium dots | Match curve colour | With semi-transparent halo at 18% opacity |
| Shift arrow (positive/outward) | `#10B981` (green) | Slim, elegant |
| Movement arrow (along curve) | `#F97316` (orange) | Slim, distinct from shift |
| Axis | `#0F172A` | Black, 2px |
| Axis labels | `#0F172A` | Bold, 800-weight |

### What we do NOT use
- ❌ Dark navy panels for diagrams (web context is white cards; reserved for PowerPoint slides)
- ❌ Yellow accent callouts in diagrams (PowerPoint pattern only)
- ❌ Heavy grids in diagram backgrounds
- ❌ "RESULT P↑ Y↑" chips (the diagram tells its own story; don't summarise it in a chip)
- ❌ Chunky filled arrowheads (slim, elegant)

### Text colour: ink only (accessibility rule)
**All text** uses `--econ-ink` (or `--ink` in standalone HTML). We do not use grey for body text, captions, hints, labels, or any other text content. Users have a wide range of eyesight quality — pure ink ensures clear visibility at all times.

Grey variables (`--econ-gray-*`) remain available for **non-text** uses only: borders, dividers, icon backgrounds, subtle fills.

---

## 2. Typography

- **Font**: Inter, weights 400/500/600/700/800. **Inter only — no serif fonts anywhere in the system.** Earlier versions used Georgia for the cliffhanger "Why?" and the multiplier formula; both reverted to Inter 800-weight. Serif fonts are off-brand and break the visual consistency.
- **Card title**: `--fs-2xl` (24px), 800 weight
- **Lede paragraph**: `--fs-base` (15px), 400 weight, `--econ-gray-700`
- **Box title**: `--fs-md` (16px), 700 weight, in the box's theme colour
- **Eyebrow / step label**: `--fs-xs` (11px), 800 weight, uppercase, 2px letter-spacing
- **Body inside boxes**: `--fs-sm` to `--fs-base`, 1.6 line-height

For diagrams:
- Axis labels (Price level, Real GDP): 15px, **800 weight, black** — bold and confident, NOT 11px and grey
- Axis values (P₁, Y₁, GPL₂): 13px, 700 weight, black
- Curve labels (AD, AD₂, SRAS): 14px, 700 weight, dark grey
- Legend dots + text at top of diagram: 13px, 600 weight, `#334155`

---

## 3. Reserved icon column rule

**Every box has two regions:**

```
┌──────┬───────────────────────────────┐
│ ICON │ TITLE                         │
│ 36px │ Body text                     │
│  ⬛   │ More body text                │
│      │ ─────────────────────────────│
│      │ Additional content row        │
└──────┴───────────────────────────────┘
```

1. **Icon column**: fixed 36px on the left, reserved exclusively for one badge
2. **Content column**: everything to the right of icon + gap; every row of content aligns starting from this column's left edge

**No content row may bleed back into the icon column.** This is enforced naturally by flex-based boxes (single content child). For grid-based boxes (e.g. `.do-box`), set `grid-column: 2` explicitly on any rows below the icon.

### Standardised icon badge
| Property | Value |
|----------|-------|
| Size | 36×36px |
| Shape | `border-radius: var(--r-full)` (circle) |
| Background | Box's theme colour |
| Icon/glyph colour | White |
| Icon size | 18px |
| Flex-shrink | 0 (never compresses) |

---

## 4. Box anatomy

```
┌─ 4px coloured stripe ─────────────────┐
│                                       │
│ [ICON]  THEMED TITLE                  │
│         Body text in dark gray-800    │
│         More body text                │
│                                       │
└───────────────────────────────────────┘
```

- **Stripe**: 4px solid left border, theme colour
- **Background**: theme `*-50` token (e.g. `--econ-green-50`), OR linear gradient for premium boxes (exam-edge)
- **Frame border**: 1px or 1.5px, MUST match the stripe colour OR use neutral `var(--econ-gray-200)`. Never a slightly-lighter-tint of the theme colour.
- **Padding**: `var(--sp-5)` top/bottom, `var(--sp-5)` left/right
- **Box shadow**: `var(--shadow-sm)` default, `var(--shadow-md)` on hover-lift surfaces
- **Border radius**: `var(--r-lg)` (10px)

### Editorial accent: exam-edge
The "exam edge" callout uses **deep purple-800 (#6B21A8)** for stripe, title, and star badge. Background uses violet-100 (`#EDE9FE`). **Border matches the stripe (#6B21A8)** to prevent pink perception. This is the only purple box in the system; reserve it strictly for "the gem that lifts answers from B to A*".

---

## 5. Diagram principles

### Six rules
1. **White background, generous margins** — chart area sits inside a comfortable frame, never crammed against edges. Aim for 60-110px left/right margins, 40-60px top/bottom.
2. **Bold black axes, big bold axis labels** — "Price level (P)" goes top-left in 15px bold black, NOT crammed at the arrowhead in 11px grey. Axis label belongs OUTSIDE the chart, not on it.
3. **Thick confident curves** — 3-4px stroke for primary curves. Thin lines look like academic textbook figures and lose visual weight.
4. **Soft red dashed projection lines** — `#FCA5A5` with `stroke-dasharray="5 4"`. Never grey for projections; they should feel friendly and connect to the curve narrative.
5. **Halo dots for equilibria** — solid coloured dot at the intersection, 6px radius, with a semi-transparent halo (18% opacity, 11px radius) around it. Gives points visual weight without resorting to pills/badges.
6. **Slim, elegant arrows** — 2.5px stroke for shift/movement arrows, slim arrowheads. Chunky arrows feel PowerPoint-y; slim feels editorial.

### Diagram annotations
- **Legend at the top** of the chart explains what's happening: `[● green dot] Non-price factor changes → whole curve shifts (AD₁ → AD₂)`. State-aware — changes with the visible layer.
- **Axis values** (P₁, Y₂, GPL₃) live just outside the axis they reference, in bold black.
- **Curve labels** (AD, AD₂) live at the end of the curve, not in legends.
- **No result chips, no boxes around labels.** The diagram tells its own story; resist the urge to summarise in a corner.

### Interactive diagrams (test-then-explain pattern)
For pop-up book interactivity, layered SVG + CSS state machine. **Landscape layout**: full-width diagram on top, horizontal tab strip below, then a content panel for the active tab.

```html
<div class="ad-interactive">
  <div class="ad-interactive__diagram show-base">
    <svg class="ad-svg" viewBox="0 0 900 440">
      <g class="layer-axes">       <!-- always visible -->
      <g class="layer-curve-solid"> <!-- base + extension states -->
      <g class="layer-curve-dashed"> <!-- shift state only -->
      <g class="layer-e1">           <!-- base + extension states -->
      <g class="layer-extension">    <!-- extension state only -->
      <g class="layer-shift">        <!-- shift state only -->
      <g class="layer-legend-base">      <!-- base state title strip -->
      <g class="layer-legend-extension"> <!-- extension state title strip -->
      <g class="layer-legend-shift">     <!-- shift state title strip -->
    </svg>
  </div>
  <div class="ad-interactive__tabs">    <!-- 3 horizontal tab buttons -->
  <div class="ad-interactive__panels">  <!-- active tab's content panel -->
</div>
```

CSS uses opacity transitions (`0.32s ease`) on layer visibility based on the container's state class (`show-base | show-extension | show-shift`). Pure CSS state machine, no DOM thrashing.

**SVG canvas convention**: 900×440 (landscape). Chart area is the LEFT half (x ∈ [60, 580]); RIGHT half (x ≥ 615) is a vertical explainer panel with state-aware annotations. The vertical divider at x=615 is a dashed grey line. The annotation panel uses 11px uppercase eyebrows and 13-14px body text — bullet-list-equivalent structure rather than prose paragraphs.

This landscape pattern replaces the earlier portrait pattern (480×560 diagram squeezed into a 1.5fr column). The diagram is the pedagogical centrepiece and deserves the full card width.

---

## 6. Layout grids

| Use case | Grid |
|----------|------|
| Card 1 framing (flaps + diagram) | `1.15fr 1fr` |
| Cause cards (full-width diagram, then two-column) | `1fr` then `1fr 1fr` |
| Diagnose / AD-interactive (diagram + steps) | full-width stacked: diagram → tabs → panel |
| Paired (G + Net Trade) | `1fr 1fr` |
| Mechanisms (2×2 tiles) | `1fr 1fr` |
| Mobile breakpoint | All collapse to `1fr` at max-width 900px |

---

## 7. Interaction patterns

### Test-then-explain (the core pedagogical move)
Show a label, hide the body, let the student attempt recall before revealing. Implemented on:
- **Framing branches** (Card 1): tap to reveal sub-text
- **Diagnose scenarios** (Card 4 of inflation): "Make your call" button reveals answer
- **Deflation mechanisms** (Card 7 of inflation): tap row to reveal text
- **AD-interactive steps** (Card 3 of AD): tap step → diagram changes AND step expands

### Cliffhanger reveal
"Why?" button that bobs gently to invite tap. On click: shrinks/fades, reveals an explanation panel with hint chips, and pulses the "Next card" button to invite progression.

### Staggered fade-in (Card 6 mechanisms)
4 tiles cascade in with 0.05/0.18/0.31/0.44s delays on `econ-rise-in` animation.

### Reduced motion
All animations respect `@media (prefers-reduced-motion: reduce)`.

---

## 8. Card templates (current inventory)

| Template | Used for | Reusable across topics |
|----------|----------|------------------------|
| `framing` | Topic-opening card with branches/flaps + central diagram | Every topic (Card 1) |
| `cause` | Mechanism + drivers + hallmarks + UK example + policy | Any "factor of X" card |
| `diagnose` | Table OR diagram + scenario reveals | "Spotting the difference" cards |
| `puzzle` | Setup + chart + cliffhanger reveal | "Why didn't X cause Y?" cards |
| `mechanisms` | 2×2 grid of explanations | "Why does X work this way?" cards |
| `deflation` | Mechanism flaps + examples + bridge | Final cards with reveal pattern |
| `paired` | Two related sub-topics side-by-side | "G + Net Trade" type cards |
| `ad-interactive` | Layered diagram + accordion explanation | Any "see it move" card |

When a new pedagogical pattern emerges that doesn't fit the above, add a new template and document it here.

---

## 9. Spelling, terms, voice

- **United Kingdom English** throughout (organisation, behaviour, analyse, etc)
- **Short dashes (`-`)** only, never `–` or `—`
- **Sentence-case** for headings (not Title Case) except where conventionally capitalised (e.g. proper nouns)
- **Authoritative voice** in card content: "this is what happens because…" not "this might happen because…"
- **Exam edge gems**: always start the title with the practical move, not the abstraction. E.g. "Quote the savings ratio" not "Importance of the savings ratio"
- **UK examples**: prefer dated, named episodes ("2008-09 crisis", "Lawson boom 1986-89", "Brexit uncertainty 2016-19") over generic phrasing ("recent recession")

---

## 10. What "good" looks like

A card is shipped-quality when:
- [ ] Lede is ≤2 sentences and earns its place (no padding)
- [ ] Every box follows the icon column rule
- [ ] Every themed box has stripe + title + frame in matching colours
- [ ] Diagram (if present) has bold black axes, thick curves, halo dots, soft red projections
- [ ] At least one exam-edge gem is present and specific
- [ ] At least one UK example is dated and named (not generic)
- [ ] Interactive moments (reveals) test before they explain
- [ ] Card title sits comfortably on one line at desktop width

---

*Last updated: as we work. When patterns change, edit this document FIRST, then ripple through code.*
