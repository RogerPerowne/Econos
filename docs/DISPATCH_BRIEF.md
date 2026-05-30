# Dispatch brief — building Econos topics from ChatGPT mockups

This is the operating manual for **Dispatch** (the Claude orchestration
feature) when the job is: *take a topic, get one mockup image per card from
the ChatGPT app, then spin a Claude Code session that turns those images into
real Learn It cards and ships them.*

Read `docs/BUILD_STATUS.md` first to pick a topic that still needs the
pipeline. Read this brief to run it.

---

## The pipeline (what Dispatch coordinates)

```
1. PICK     → choose a topic from BUILD_STATUS.md (🟡 legacy or 🔴 stub,
               Theme 2 first unless told otherwise)
2. PLAN     → agree card titles + one storytelling pattern per card
3. MOCKUPS  → ask ChatGPT for one image per card (prompt template below)
4. BUILD    → open a Claude Code session, hand it the images + context,
               it builds the cards to match and screenshots them
5. SHIP     → the build session opens a PR and squash-merges (it knows how)
6. RECORD   → tick the topic in BUILD_STATUS.md (Build 🟢, Mockup-built ✅, date)
```

Steps 2–4 are where Dispatch adds value. The build session already knows
the repo conventions (they live in `CLAUDE.md` and the `econos-*` skills);
Dispatch's job is to feed it good mockups and clear scope.

---

## Step 2 — Plan the cards before any image is made

A topic is **4–8 cards**, each carrying **one** storytelling pattern from the
10-pattern catalogue (full detail in the `econos-card-template` skill). The
catalogue, in one line each:

1. **Sequential flow chain** — A→B→C, order matters
2. **Side-by-side pair** — two opposing things
3. **Spectrum / regime grid** — 4–6 points along one dimension
4. **Comparison table** — alternatives × criteria
5. **Worked example** — scenario → reveal steps → answer
6. **Predict-then-reveal** — read, predict, reveal verdict
7. **Interactive multi-state diagram** — one SVG, toggle views
8. **Decompose a diagram** — labelled hero, the visual *is* the lesson
9. **Evidence-then-verdict** — pile evidence → judgement
10. **Tile grid** — equal-weight parts (use sparingly, ≤2 per topic)

**Two hard rules:** no two consecutive cards share a primary pattern; *Tile
grid* on at most two cards. Get the title+pattern list signed off **before**
asking ChatGPT for images — the pattern dictates the mockup's shape.

A good plan looks like:

> C1 *Decompose a diagram* — the [concept] scorecard hero
> C2 *Interactive multi-state* — the [model] in 3 views
> C3 *Predict-then-reveal* — diagnose [N] real cases
> C4 *Sequential flow chain* — the [mechanism]
> C5 *Side-by-side pair* — [X] vs [Y]
> C6 *Evidence-then-verdict* — the A* verdict

---

## Step 3 — The ChatGPT mockup ask

Ask ChatGPT for **one image per card** (not one image with all cards). Each
image is a full-page mockup of a single Econos Learn It card. Paste this
template into the ChatGPT app, filling the brackets:

> Design a single full-page mockup for one card of an Econos A-Level
> economics revision app. House style:
> - Clean white card on a light grey page. Serif display title (Fraunces),
>   sans body (Inter). A thin top bar reading "econos", a green progress bar,
>   and "SESSION 1 OF 6 · LEARN" + "LEARN: STEP [n] OF [total]".
> - Six accent tones only: green, amber, blue, purple, rose, slate. Rounded
>   12–14px corners, soft shadows. Emoji or simple line icons.
> - Sections stack vertically, each with a small UPPERCASE eyebrow label +
>   icon. End every card with a purple "EXAM EDGE" callout (star icon).
> - A green check "tip" callout sits just under the lede.
>
> This card is **Card [n] of [total]: "[title]"**.
> Storytelling pattern: **[pattern name]** — [one line on what that means].
> Content to show: [the specific blocks — e.g. "a 6-tile scorecard with a
> radial gauge on each of inflation/unemployment/growth showing the UK's
> current value vs its target zone; then a 5-tile row previewing the
> trade-offs; then the exam-edge line"].
> Use real UK data where relevant ([drop in any numbers you have]).
> Make it information-dense but uncluttered — this is a revision card, not a
> marketing page.

Tips that make the images **buildable**:

- **One card per image.** Multi-card sheets are hard to build to faithfully.
- **Name the pattern in the prompt** so ChatGPT lays it out the right way
  (a pair looks different from a flow looks different from a scorecard).
- **Ask for real numbers.** "UK inflation 2.8%, target 2%" beats "some %".
- **Keep diagrams schematic.** ChatGPT can't draw a perfect AD/AS chart;
  ask for the *shape and labels*, and the build session redraws it correctly
  in SVG from the codebase's existing chart library.
- Tell ChatGPT it's fine to **reuse the same chrome** (top bar, progress,
  exam edge) on every card so the set feels consistent.

Collect the [total] images. They are the spec the build session matches.

---

## Step 4 — Spin the build session

Open a Claude Code session on this repo. Branch + workflow are already
defined in `CLAUDE.md` (develop on the session branch, push → PR →
squash-merge → reset). Hand the session **this exact scope**:

> Build the **[topic name]** Learn It topic (Theme [n] · spec [x.y.z]),
> [total] cards, from the attached ChatGPT mockups — one image per card,
> as close as possible. Patterns per card: [the agreed list].
>
> Before building:
> - Load the `econos-card-template` skill and follow its **Design decision
>   framework** to map each mockup to the right blocks/styles.
> - Load `econos-visual-diagram` for any custom SVG/gauge/chart hero.
> - **Reuse existing content.** Check `js/data/edexcel_a/<theme>/<this-topic>/`
>   and closely-related topics for strong UK data, diagrams (`js/icons.js`),
>   and exam-edge gems already written — fold them in rather than rewriting.
> - Reuse existing named diagrams (e.g. `phillipsInteractive`,
>   `adAsDemandPull`) instead of drawing new ones where they fit.
>
> While building:
> - One `template: 'ad-interactive'` card per mockup unless a specialised
>   template fits better. Add only the blocks each card needs.
> - Bump `CACHE_NAME` in `sw.js`. Keep the quiz pool if one exists.
> - `npm run lint` + `npm run test:unit` must pass.
> - Screenshot **every** card with the `run-econos` skill and compare to the
>   mockup before shipping; note any deltas yourself.
>
> Then ship via the `econos-ship-changes` workflow (push → PR → squash-merge
> → reset) and update `docs/BUILD_STATUS.md` for this topic.

The session will ask clarifying questions if a mockup is ambiguous — answer
from the plan, not from scratch.

---

## Step 5 — Review loop

After the session ships, the cards are live on `main`. Roger reviews the
rendered cards (not the mockups) and sends tweaks; the same session (or a new
one) applies them as small follow-up PRs. Typical tweaks seen so far:
icon overflow → `icon-top`; label clipping → widen viewBox; "make this row
stacked not columns" → `numbered-rows`; broken-axis on big-ratio bar charts.
These are all documented in the skills.

---

## Guardrails

- **Don't invent data.** If a UK figure isn't known, ask Roger or leave it
  qualitative — never fabricate a precise statistic.
- **Don't skip the pattern-variety check.** If the mockups themselves repeat a
  pattern on consecutive cards, flag it to Roger before building.
- **One topic per session/PR.** Keeps reviews and reverts clean.
- **The mockup is a target, not gospel.** Where a mockup's economics is wrong
  (e.g. a curve that doesn't intersect correctly), the build session fixes the
  economics and tells Roger — accuracy beats pixel-matching.
