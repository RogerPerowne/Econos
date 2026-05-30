# econos plugin — skills system overview

This plugin bundles five skills that together cover the full lifecycle of econos content work: designing visuals, building topics, verifying them in a browser, and shipping them to main. The skills are designed to chain — each one hands off cleanly to the next, and none of them duplicate logic that already lives in another.

## The five skills

| Skill                       | What it owns                                                                                         |
|-----------------------------|------------------------------------------------------------------------------------------------------|
| **`econos-build-from-mockup`** | End-to-end topic builder: GPT Image 2 mockups → vision extraction → schema-correct `data-topic.js` → SVGs → validation → shipping handoff. |
| **`econos-new-topic`**         | The `data-topic.js` shape, the URL contract (no new HTML), and registration in `js/topics.js`.       |
| **`econos-card-template`**     | The card template catalogue. Picks the right template (default `ad-interactive`) and lists every field on it. |
| **`econos-visual-diagram`**    | The diagram system: generator-first decision tree (`window.ECONOS_DIAGRAMS` via `'diagram'` block), one-off statics in `js/diagrams/static/`, hand-authored SVG recipes. Tone palette, viewBox conventions, spec-first workflow. |
| **`econos-mockup-analyse`**    | FIRST step for a mockup image: decompose it into a structured build plan (regions→blocks, charts→econDiagram families, confidence scores, corrections, unresolved gaps) before writing any data. |
| **`econos-match-mockup`**      | The build-and-converge loop: render the card in the Studio Editor with the mockup overlay + live similarity score, fix the largest deltas first, iterate to a faithful match with no back-and-forth. |
| **`econos-econ-diagram`**      | The `econDiagram` picker + authoring reference: which of the 16 chart families for a given diagram, and the full view schema (shifts / points / arrows / areas / brackets / show). Never hand-roll econ-chart SVG. |
| **`run-econos`**               | Headless Playwright driver that launches the static SPA in this container and screenshots a card by index. |
| **`econos-ship-changes`**      | The shipping flow: backup `main` first, push, PR, squash-merge, dev-branch reset. The single source of truth for any git operation that ends on `main`. |

## How they chain — the canonical flow

```
                      ┌──────────────────────────┐
                      │   econos-build-from-     │   end-to-end orchestrator
                      │       mockup             │   (only call directly when
                      └──────────────┬───────────┘    starting a new topic)
                                     │
                                     ▼
   ┌───────────────────────┐    Stage 1 brief        ┌──────────────────────┐
   │  econos-card-template │◀─── field reference ────│  econos-new-topic    │   topic-level
   └───────────────────────┘                         │  (data-topic.js +    │   structure
                                                     │   js/topics.js)      │
                                                     └──────────┬───────────┘
                                                                │
                                                                ▼
                                                  ┌────────────────────────┐
                                                  │  econos-visual-diagram │   when a card
                                                  │  (generator / static / │   needs a diagram
                                                  │   hand-authored SVG)   │   or visual
                                                  └──────────┬─────────────┘
                                                             │
                                                             ▼
                                                   ┌────────────────────┐
                                                   │     run-econos     │   visual verify
                                                   │  (screenshot card) │   before ship
                                                   └──────────┬─────────┘
                                                              │
                                                              ▼
                                                  ┌────────────────────────┐
                                                  │  econos-ship-changes   │   backup → PR
                                                  │  (backup → PR → merge) │   → squash → reset
                                                  └────────────────────────┘
```

## Hand-off rules (so the skills don't fight)

- **`econos-build-from-mockup` is the orchestrator.** It runs end-to-end and calls every other skill. Use it when starting a new topic from a brief or a set of mockup images.
- **Schema lives in `econos-new-topic`.** Anything to do with the `window.ECONOS_TOPIC` global, file layout, URL contract, or `js/topics.js` registration is owned there. Other skills reference it, never re-state it.
- **Card fields live in `econos-card-template`.** Template names, field lists, tone values — all there. The build-from-mockup and new-topic skills both link to it.
- **Diagrams live in `econos-visual-diagram`.** Generator-first: use `window.ECONOS_DIAGRAMS` via the `'diagram'` block. One-off statics in `js/diagrams/static/`. Only hand-author a new SVG when no generator or static fits. `viewBox`, tone hexes, named recipes. `js/icons.js` is now UI/hero/scene icons only.
- **Verification lives in `run-econos`.** The Playwright driver navigates by card index, not URL params. Use it after any topic, SVG, or card edit.
- **All git work that ends on `main` goes through `econos-ship-changes`.** Backup `main` first, push, PR, squash-merge, reset the dev branch. Never duplicate this logic in another skill — and never force-push `main`.

## Brand cues (used across skills)

- **Aesthetic**: Apple / Notion / Linear / Brilliant — premium, intelligent, exam-focused.
- **Page background**: warm cream `#FAF8F4`.
- **Typography**: serif headings (Fraunces or similar), sans-serif body (Inter).
- **Six teaching tones** (saturated fills, never pale tints):

  | Tone   | Fill     | Text    | Meaning                                              |
  |--------|----------|---------|------------------------------------------------------|
  | green  | `#D1FAE5` | `#065F46` | Core idea, correct route, benefit, lock-in           |
  | blue   | `#DBEAFE` | `#1E3A8A` | Explanation, exam technique, primary action          |
  | purple | `#EDE9FE` | `#5B21B6` | Evaluation, judgement, exam edge, deeper insight     |
  | amber  | `#FEF3C7` | `#92400E` | Trade-off, incentive, "it depends" condition         |
  | rose   | `#FFE4E6` | `#9F1239` | Market failure, welfare loss, risk, incorrect route  |
  | slate  | `#E2E8F0` | `#1E293B` | Neutral or structural                                |

## Repo conventions the skills enforce

- **Six HTML shells only** at the repo root (`index.html`, `learn.html`, `link.html`, `land.html`, `quiz.html`, `login.html`). Never add a new HTML file.
- **Topic IDs**: `snake_case` (`factors_of_production`).
- **Card IDs**: `hyphen-case` and semantic (`four-factors`, not `factors_of_production_1`).
- **Global**: `window.ECONOS_TOPIC = {...}` (singular). `ECONOS_TOPIC_DATA['<id>']` is wrong and renders blank.
- **`examEdge`**: object `{ title, text }` — not a bare string, not `heroIcon`, not `color`, not `const topicData`.
- **Lint**: `scripts/lint.sh` blocks legacy filenames and direct `window.location.href` calls in engine code.
- **Pre-push e2e**: `npm run test:e2e` runs unless `ECONOS_SKIP_E2E=1` is set. Use the skip flag only when the only failing test is the known home-page a11y issue.

## Security

The `econos-build-from-mockup` skill reads `OPENAI_API_KEY` from the environment. The key lives in `.claude/settings.local.json` under the `env` block, which is gitignored and never committed. Never write the key into a prompt, a commit, or a log line.

## See also

Each skill's own `SKILL.md` is the source of truth for its details — this README is the map, not the territory.
