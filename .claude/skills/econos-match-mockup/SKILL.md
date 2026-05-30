---
name: econos-match-mockup
description: Use to iterate an Econos card to a pixel-faithful match of a mockup image, using the Studio Editor's mockup overlay + live similarity score. The build-and-converge loop that follows econos-mockup-analyse. Trigger after you have a decomposition/build plan and need the rendered card to match the design with no back-and-forth, or when the user says "it doesn't match", "the spacing/colour/layout is off", or "get it pixel-perfect".
---

# Matching a mockup, closing the loop

You have a build plan (from `econos-mockup-analyse`). This skill turns it into a card and converges it onto the mockup using the **Studio Editor's overlay + similarity score** — so you optimise against a *number*, not a vibe. The goal: the user looks once and approves.

## The loop

1. **Write the card JSON** from the decomposition — `blocks: [...]` using the mapped block types and `econDiagram` chart families. Validate it (`window.EconosDebug.validate(card)` / the Editor's inline validator) — fix unknown blocks, tone typos, missing fields, content-length-budget warnings before looking at pixels.

2. **Open the Studio Editor** — `dev/renderer-lab-edit.html` (serve via `npm run dev`, then `/dev/renderer-lab-edit.html`). Paste the card JSON on the left; it renders live on the right.

3. **Drop the mockup as an overlay.** Use the "Drop mockup image here" zone (client-side only). Turn on **Lock 720 px** so the render frame matches production card width and the overlay aligns. Set overlay **opacity ~50%** to see card and mockup at once; use **X-ray flip** (mockup in front at 80%) to spot drift.

4. **Read the similarity score** (top of the render pane). It's per-pixel where the canvas isn't tainted, luminance-histogram otherwise. Treat it as the optimisation target. Higher = closer.

5. **Fix the largest deltas first**, in this order (cheapest, highest-impact first):
   - **Structure/order** — is every region present and in the right vertical order? Missing/extra block, wrong nesting.
   - **Layout** — grid columns, spans, `density` (airy/standard/compact/exam), section spacing.
   - **Diagram** — wrong chart family, wrong number of views, an equilibrium/label off (almost always fixed by using the right `econDiagram` family + view, never by nudging pixels).
   - **Tone/colour** — swap to the matching tone (green/amber/blue/purple/rose/slate).
   - **Text fit** — if text overflows (dev-mode overflow detector flags it red), **shorten the text** before shrinking the font or changing the layout.

6. **Re-render, re-read the score, repeat.** Each pass should raise the number. Stop when it plateaus high and an X-ray flip shows no meaningful drift, or the user approves.

## When the mockup is wrong

If, while matching, you find the mockup's economics is wrong (mislabelled curve, impossible shift, equilibrium off the intersection, a kink, a wrong UK figure), render the **correct** version — don't chase a high pixel score on a mistake. Note the correction in the PR description. The diagram families place equilibria on real intersections and draw smooth curves by construction, so the engine-correct version is usually also the cleaner one. (Stylistic choices and deliberate pedagogical simplifications are not "wrong" — match those.)

## What NOT to chase pixels on

- The fixed chrome (top bar, progress, sidebar, exam-edge frame) is the shell's, not the card's — don't try to match its exact pixels; match the **card body** in the centre panel. Use `?screenshot=1` / `?preview=center-panel` to capture just the card.
- Sub-pixel font rendering differences. Aim for structural fidelity (positions, sizes, colours, alignment, the diagram), not a 100.0% pixel identity that's physically impossible across font stacks.

## Definition of done

- Every region from the decomposition is present, correct, and in order.
- Diagrams use the right `econDiagram` family and render with correct geometry (no overflow-warning outlines in dev mode).
- The overlay X-ray flip shows no layout drift; the similarity score is high and stable.
- The validator is clean; lint + unit + build pass.
- Any economics corrections are logged for the PR.

## See also

- `econos-mockup-analyse` — produce the decomposition first.
- `econos-econ-diagram` — picking the chart family + authoring views.
- `econos-card-template` — the block catalogue + design discipline.
- `docs/CARD_STUDIO.md` — the Library/Editor/validator/renderer overview.
