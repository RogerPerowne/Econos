/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Factors of Production: factor-mobility improvement shifts LRAS right
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   AD:    (110,40)→(510,360)
   LRAS₁: vertical at x=280, y=21→399 (initial)
   LRAS₂: vertical at x=360, y=21→399 (after factor-quality/mobility improvement)
   E₁ (AD ∩ LRAS₁): (280, 176)
   E₂ (AD ∩ LRAS₂): (360, 240)  – lower P (higher SVG y), higher Y */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Factors of Production',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('depends'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 2,

  /* ── Stage 0: Select the right diagram ── */
  select: {
    eyebrow:     'Diagram Connector – Select the Diagram',
    title:       'A successful adult retraining and childcare expansion improves the mobility and quality of UK labour. Which diagram correctly shows the long-run macro effect?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the effect on the UK economy. Think about which curve is shifted by a permanent change in factor quality.',
    hint:        'Skill focus: identify whether the change is to long-run productive capacity or short-run output.',

    options: [
      {
        id:      'lras-right',
        correct:  true,
        title:   'LRAS shifts right',
        sub:     'LRAS shifts right – better factor quality and mobility raise productive capacity at every price level.',
        why:     'A permanent improvement in the quality and mobility of labour expands what the economy can produce when all factors are fully employed. Long-run aggregate supply shifts right from LRAS₁ to LRAS₂. The new long-run equilibrium has higher real output Y₂ and a lower price level P₂.'
      },
      {
        id:      'lras-left',
        correct:  false,
        title:   'LRAS shifts left',
        sub:     'LRAS falls – wrong direction for an improvement.',
        why:     'A leftward shift in LRAS represents a fall in productive capacity (e.g. natural disaster, mass emigration, capital destruction). Raising factor mobility and quality does the opposite – it increases the economy\'s capacity to produce.'
      },
      {
        id:      'ad-right',
        correct:  false,
        title:   'AD shifts right',
        sub:     'AD rises – but mobility policy is a supply-side change, not a demand-side one.',
        why:     'Aggregate demand shifts when consumption, investment, government spending or net exports change. A retraining/childcare programme raises the supply of effective labour, not aggregate demand. (There may be a small AD effect from higher incomes, but the principal effect is on LRAS.)'
      },
      {
        id:      'sras-left',
        correct:  false,
        title:   'SRAS shifts left',
        sub:     'SRAS falls – describes a short-run cost shock, not a factor-quality improvement.',
        why:     'A leftward SRAS shift represents rising input costs in the short run (e.g. energy price spike). A long-run factor-quality improvement works in the opposite direction and operates on long-run capacity, not on short-run cost pressures.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🎓',
    text:  'Adult retraining + childcare expansion raises labour quality and mobility. The supply of effective labour rises permanently – a long-run supply-side improvement.',
    dataPoints: [
      { icon: '🧠', text: 'Higher labour quality (skills, training)' },
      { icon: '🔄', text: 'Higher occupational mobility (workers reach shortage sectors)' },
      { icon: '📈', text: 'LRAS shifts right → higher real output, lower price level' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'AD / LRAS diagram – factor-mobility improvement shifts LRAS right, raising real output and lowering the price level',
    xLabel:    'Real output (Y)',
    yLabel:    'Price level (P)',

    lines: [
      /* AD – green downward-sloping */
      { x1: 110, y1: 40,  x2: 510, y2: 360, stroke: '#059669', strokeWidth: 2.5,
        label: 'AD', labelX: 514, labelY: 360, labelFill: '#059669' },
      /* LRAS₁ – blue vertical (initial) */
      { x1: 280, y1: 21,  x2: 280, y2: 399, stroke: '#2563eb', strokeWidth: 2.5,
        label: 'LRAS₁', labelX: 256, labelY: 16, labelFill: '#2563eb' },
      /* LRAS₂ – purple vertical (after factor-mobility improvement) */
      { x1: 360, y1: 21,  x2: 360, y2: 399, stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'LRAS₂', labelX: 368, labelY: 16, labelFill: '#7c3aed' }
    ],

    guides: [
      /* Horizontal from y-axis to E₁ */
      { x1: 100, y1: 176, x2: 280, y2: 176, tickLeft: 'P₁', tickLeftY: 179 },
      /* Horizontal from y-axis to E₂ (lower P) */
      { x1: 100, y1: 240, x2: 360, y2: 240, tickLeft: 'P₂', tickLeftY: 243 },
      /* Vertical from E₁ down */
      { x1: 280, y1: 176, x2: 280, y2: 400, tickBottom: 'Y₁', tickBottomX: 280 },
      /* Vertical from E₂ down */
      { x1: 360, y1: 240, x2: 360, y2: 400, tickBottom: 'Y₂', tickBottomX: 360 }
    ],

    /* Shift arrow: LRAS₁ → LRAS₂ at y=80, pointing right */
    shiftArrow: { x1: 290, y1: 80, x2: 350, y2: 80, stroke: '#7c3aed' },

    eqDots: [
      {
        cx: 280, cy: 176, fill: '#2563eb',
        initLabel: 'Original equilibrium', initLabel2: '(Y₁, P₁)', initLabelX: 156, initLabelY: 172
      },
      {
        cx: 360, cy: 240, fill: '#7c3aed',
        newLabel: 'New equilibrium', newLabel2: '(Y₂ higher, P₂ lower)', newLabelX: 368, newLabelY: 246
      }
    ],

    legend: [
      { color: '#059669', text: 'AD = Aggregate Demand' },
      { color: '#2563eb', text: 'LRAS₁ = Long-run Aggregate Supply (before)' },
      { color: '#7c3aed', text: 'LRAS₂ = Long-run Aggregate Supply (after factor-mobility improvement)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of improved factor mobility and labour quality on the UK economy.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for prices and real output.',
    hint:        'Skill focus: connect the supply-side improvement to long-run macro outcomes.',

    zones: [
      { id: 'shift',     label: 'Shift label',          pctX: 56,  pctY: 13,   pctW: 22 },
      { id: 'new-eq',    label: 'New equilibrium',       pctX: 65,  pctY: 49,   pctW: 22 },
      { id: 'orig-eq',   label: 'Original equilibrium',  pctX: 30,  pctY: 36,   pctW: 22 },
      { id: 'orig-price',label: 'Original price (P₁)',   pctX: 0.5, pctY: 36,   pctW: 16 },
      { id: 'lo-price',  label: 'Lower price (P₂)',      pctX: 0.5, pctY: 51,   pctW: 16 }
    ],

    chips: [
      { id: 'lras-shift', text: 'LRAS shifts right',           icon: '→', zone: 'shift',      correct: true  },
      { id: 'new-eq',     text: 'New equilibrium (Y₂, P₂)',     icon: '●', zone: 'new-eq',     correct: true  },
      { id: 'orig-eq',    text: 'Original equilibrium (Y₁, P₁)',icon: '●', zone: 'orig-eq',    correct: true  },
      { id: 'orig-price', text: 'Original price (P₁)',          icon: '−', zone: 'orig-price', correct: true  },
      { id: 'lo-price',   text: 'Lower price (P₂)',             icon: '↓', zone: 'lo-price',   correct: true  },
      { id: 'lras-left',  text: 'LRAS shifts left',             icon: '←', zone: null,         correct: false },
      { id: 'ad-right',   text: 'AD shifts right',              icon: '→', zone: null,         correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the LRAS shift into clear written analysis using factor-of-production language.',

    vocab: ['LRAS', 'aggregate demand', 'factor mobility', 'occupational mobility', 'geographic mobility', 'labour quality', 'productive capacity', 'supply-side policy', 'real output'],

    parts: [
      {
        num:         1,
        title:       'Explain the LRAS shift',
        prompt:      'Why does improving factor mobility and labour quality shift LRAS right?',
        maxChars:    240,
        modelAnswer: 'Better-trained workers produce more output per hour, and more mobile workers move from low- to high-productivity uses. The same labour force now generates a larger maximum sustainable output when all factors are employed – productive capacity rises. LRAS, which represents this maximum, therefore shifts right from LRAS₁ to LRAS₂.'
      },
      {
        num:         2,
        title:       'Explain the macro outcomes',
        prompt:      'What happens to real output and the price level – and why?',
        maxChars:    240,
        modelAnswer: 'At the new long-run equilibrium, real output rises from Y₁ to Y₂ and the price level falls from P₁ to P₂. Higher productive capacity meets the same aggregate demand, so output expands and inflationary pressure (from supply bottlenecks) eases. This is the classic "supply-side win" – more output and lower inflation simultaneously.'
      },
      {
        num:         3,
        title:       'Add a wider economic effect',
        prompt:      'Add one argument about the wider impact on unemployment or living standards.',
        maxChars:    240,
        modelAnswer: 'Higher LRAS implies higher full-employment output, so structural unemployment falls as displaced workers find jobs in shortage sectors. Real wages can rise without triggering inflation because productivity has improved. Living standards rise both directly (higher real GDP per head) and indirectly (lower inflation eroding purchasing power).'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Identify which curve shifts and why (LRAS, factor quality/mobility)',
      'State outcome for real output (Y) and price level (P)',
      'Explain the mechanism in factor-of-production language',
      'Mention wider effects (employment, productivity, living standards)'
    ],

    examAnswer: '"A successful retraining and childcare programme raises both the quality and the mobility of UK labour. Better-skilled workers reach shortage sectors and produce more per hour, lifting the economy\'s productive capacity. LRAS shifts right from LRAS₁ to LRAS₂. At the new long-run equilibrium, real output rises from Y₁ to Y₂ and the price level falls from P₁ to P₂. Structural unemployment eases as displaced workers reallocate to shortage sectors, and real wages can rise sustainably because productivity has improved. This is the canonical supply-side outcome: more output, lower inflation, higher living standards."'
  }
};
