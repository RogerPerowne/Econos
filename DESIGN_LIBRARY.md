# Econos Design Library — Learn It Card Patterns

Reference document for designing and developing Learn It cards across all 63 topics. The **Inflation & Deflation** topic (`js/data/inflation`) is the gold standard. All other topics should aspire to this quality.

---

## 1. The 7-Card Narrative Arc

Every topic should follow this sequence:

| # | Archetype | Purpose | Visual anchor |
|---|-----------|---------|---------------|
| 1 | **Framing** | Establish 3–5 tone-coded branches (the taxonomy) | Branch tree diagram + tappable callouts |
| 2 | **Deep-dive A** | Cause/case type 1, fully unpacked | Coloured cause banner + AD-AS-style diagram |
| 3 | **Deep-dive B** | Cause/case type 2, fully unpacked | Coloured cause banner + paired diagram |
| 4 | **Diagnose** | Comparison table + "Make your call" scenarios | Predict-then-reveal cards |
| 5 | **Mechanisms** | Resolve a paradox or list 4 reasons | 2×2 mechanism-tile grid + cliffhanger reveal |
| 6 | **Impacts** | Winners & losers, distributional analysis | Split panels (↑ green / ↓ red) + group cards |
| 7 | **Wrap-up / Asymmetry** | The contrarian insight or policy implication | Tappable mechanism rows + real examples |

---

## 2. Tone Colour System

The four-tone palette has **semantic meaning**. Always use consistently.

| Tone | Hex / CSS var | Semantic meaning | Example uses |
|------|---|---|---|
| 🟢 **Green** | `--econ-green` `#1FB574` | Expansionary, growth, positive, winners | Demand-pull inflation, exporters benefiting, expansionary fiscal |
| 🟡 **Amber** | `--econ-amber` `#F5B800` | Trade-off, friction, warning, dilemma | Cost-push inflation, stagflation, policy conflict |
| 🔵 **Blue** | `--econ-blue` `#3B82F6` | Technical, monetary, foundational, structural | Monetary policy, interest rates, intellectual frameworks |
| 🌹 **Rose/Pink** | `--econ-rose` `#EC2D68` | Downside, contraction, danger, culmination | Deflation, recession risks, losers |
| 🟣 **Purple** | `--econ-purple` `#7C3AED` | Heterogeneous, distributional, mixed | Cross-cutting themes, multiple-cause cases |

---

## 3. Visual Ingredients

### Hero illustrations (one per topic)
Custom SVG at the top of the intro card. Defined in `js/icons.js`.

Currently authored:
- `heroBars` — Inflation (price-tag montage)
- `heroAd` — Aggregate Demand
- `heroUnemployment`, `heroMonetary`

**Missing for most topics.** Highest-payoff new asset.

### Diagram patterns
- **Branch tree** (`branchDiagram`) — three branches diverging from a root, tone-coded
- **AD-AS curves** (`adAsDemandPull`, `adAsCostPush`) — mathematically correct curves with labelled axes
- **Transmission chain** — five pillars connecting policy to outcome
- **Mechanism tile grid** — 2×2 or 1×4 numbered tiles

### Callouts & highlights
| Component | Icon | CSS class | Purpose |
|---|---|---|---|
| Exam edge | ⭐ | `.exam-edge` | Flag the high-value gem |
| Key takeaway | 💡 | `.callout--success` | Why this matters |
| Policy box | 🎯 | `.policy-box` | What policy responds with |
| Dilemma | ⚠ | `.dilemma` | The tragic trade-off |
| Real example | 📊 | `.callout--info` | Concrete UK / global case |
| Winners/Losers | ↑ / ↓ | `.wl-panel--win` / `.wl-panel--lose` | Distributional split |

### Branch callouts
- `.branch-cal--green / --amber / --blue / --purple / --rose`
- Coloured dot + label + sub-text + "tap to recall" hint
- Sub-text initially hidden, revealed on tap

### Step labels
- `.card__step-label` — "Learn: Step X of 7" chip at top of every card
- Provides spatial orientation in the sequence

---

## 4. Interaction Patterns

### Tap-to-recall flaps
- **Used in:** Card 1 (framing branches), Card 7 (deflation mechanism rows)
- **Mechanism:** Click on the branch / row toggles the hidden sub-text. "tap to recall" hint disappears.
- **Why:** Active recall beats passive reading.

### Predict-before-reveal answers
- **Used in:** Card 4 (Diagnose scenarios)
- **Mechanism:** Read the case → click "Make your call" → answer appears.
- **Why:** Prediction forces engagement before encoding.

### Scenario cards
- 3–4 mini cases per card, each tone-coded
- "Make your call" eye-icon button reveals the diagnosis
- Tone of the card matches the answer (subtle visual cue)

### Cliffhanger reveal (puzzle resolution)
- **Used in:** Card 5 (monetary QE puzzle)
- **Mechanism:** Provocative question → student thinks → click reveals four-reason grid with hint pills.
- **Why:** Mirrors how economists think — observe paradox, hypothesise, verify.

---

## 5. Card Data Shape Conventions

```js
{
  id: 'unique-id',
  template: 'framing' | 'cause' | 'diagnose' | 'puzzle' | 'mechanisms' | 'impacts' | 'deflation' | 'generic',
  stepLabel: 'Learn: Step X of 7',
  title: 'Punchy headline',
  lede: 'Position the stakes in one sentence.',
  diagramKey: 'heroBars' | 'branchDiagram' | 'adAsDemandPull' | ...,

  // framing template
  branches: [{ tone, label, sub }],

  // cause template
  tone, bannerLabel, causes: [...], hallmarks: [...], policy: {...}, dilemma: {...},

  // diagnose template
  rows: [{ label, colA, colB }],
  scenarios: [{ label, tone, text, answer }],

  // mechanisms template
  classical: { title, formula, formulaSub, quote, examples },
  cliffhanger: 'Why...?',
  reveal: { title, text, hints: [...] },
  mechanisms: [{ num, tone, title, text }],

  // impacts template
  groups: [{ tone, icon, label, bullets }],
  winners: { label, items },
  losers: { label, items },

  // every card
  examEdge: { title, text },
  keyTakeaway: { title, text }
}
```

---

## 6. Roadmap

### Quick wins (renderer + small data work)
1. Add exam-edge + key-takeaway to every card that lacks them
2. Standardise framing-style intro card across all topics (4 tone-coded branches + diagram)
3. Add "Diagnose this" scenario card to every topic

### Medium effort (SVG authoring)
4. Author one hero SVG per topic (~63 illustrations)
5. Build reusable AD-AS variants for macro topics (shortRun, longRun, movement, shift)
6. Deploy winners/losers cards to ~15 macro topics

### Strategic (data refactor)
7. Migrate all topics to the standard 7-card narrative arc
8. Build an interactive AD-AS diagram with step-based reveals for foundational macro topics

---

## 7. Design Principles (cheat sheet)

1. **Colour tone = semantic meaning.** Never use a tone arbitrarily.
2. **Framing precedes deep-dive.** Establish the taxonomy first.
3. **Diagnosis before prescription.** Comparison and scenario cards early.
4. **Predict before reveal.** Reveal mechanics enforce active recall.
5. **Exam-edge on every card.** Don't make students infer what matters.
6. **Real examples anchor abstraction.** UK case or global case on every topic.
7. **Interactive beats passive.** Tap, reveal, click-to-expand wherever possible.
