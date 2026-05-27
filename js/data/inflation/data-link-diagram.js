/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Inflation: cost-push (SRAS shifts left)
   ============================================================ */

window.ECONOS_LINK_DIAGRAM = {
  topic:        'Causes of Inflation & Deflation',
  backUrl:      TopicLoader.buildUrl('link_intro.html'),
  nextUrl:      TopicLoader.buildUrl('link_depends.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 2,

  /* ── Stage 0: Select the right diagram ── */
  select: {
    eyebrow:     'Diagram Connector – Select the Diagram',
    title:       'Which diagram best shows the effect of this shock on the economy?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the economic impact. Think about which curve is directly affected.',
    hint:        'Skill focus: identify the right model before drawing it.',

    options: [
      {
        id:       'sras-left',
        correct:  true,
        title:    'SRAS shifts left',
        sub:      'Higher costs reduce supply at every price level – stagflationary pressure',
        why:      'Higher energy costs directly raise firms\' costs of production. This is a supply-side shock: SRAS shifts left, raising the price level and reducing real output simultaneously. This is the defining signature of cost-push inflation.',
        diagramType: 'cost-push'
      },
      {
        id:       'ad-right',
        correct:  false,
        title:    'AD shifts right',
        sub:      'Consumer or government spending increases, pulling up the price level',
        why:      'AD shifting right would cause demand-pull inflation, not cost-push. The shock here is on the supply side (higher energy costs for firms), not a change in consumer or government spending.'
      },
      {
        id:       'lras-right',
        correct:  false,
        title:    'LRAS shifts right',
        sub:      'Long-run productive capacity expands due to improved technology or capital',
        why:      'LRAS shifts right when the economy\'s long-run potential output grows – through investment, technology or labour force expansion. An energy price spike reduces productive capacity; it does not expand it.'
      },
      {
        id:       'ad-left',
        correct:  false,
        title:    'AD shifts left',
        sub:      'Consumer spending falls, reducing demand and the price level',
        why:      'AD shifting left represents a demand-side contraction (e.g. a recession, tax rise or credit crunch). While weak consumer confidence is mentioned in the data, the primary direct effect of an energy price rise hits firms\' costs – the SRAS curve.'
      }
    ]
  },

  /* ── Scenario context shown across stages ── */
  scenario: {
    icon:  '🔥',
    text:  'Global oil and gas prices rise sharply, pushing up firms\' production and transport costs.',
    dataPoints: [
      { icon: '📊', text: 'Energy prices +18% in 3 months' },
      { icon: '👥', text: 'UK wage growth 3.1%' },
      { icon: '😟', text: 'Consumer confidence still weak' }
    ]
  },

  /* ── Diagram specification (read by link-diagram-engine renderDiagramSVG) ── */
  /* viewBox 0 0 560 430; axes origin at (100,400); clip rect x=101 y=21 w=442 h=378 */
  diagram: {
    ariaLabel: 'AD/AS diagram – cost-push inflation (SRAS shifts left)',
    xLabel: 'Real output',
    yLabel: 'Price level',

    lines: [
      /* LRAS – vertical grey dashed */
      { x1: 308, y1: 21,  x2: 308, y2: 399, stroke: '#374151', strokeWidth: 1.5,
        label: 'LRAS', labelX: 312, labelY: 18,  labelFill: '#374151' },
      /* AD₁ – green downward-sloping */
      { x1: 110, y1: 40,  x2: 510, y2: 360, stroke: '#059669', strokeWidth: 2.5,
        label: 'AD₁',  labelX: 514, labelY: 360, labelFill: '#059669' },
      /* SRAS₁ – blue upward-sloping (original) */
      { x1: 130, y1: 399, x2: 460, y2: 25,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'SRAS₁',labelX: 463, labelY: 23,  labelFill: '#2563eb' },
      /* SRAS₂ – purple upward-sloping (shifted left; starts left of y-axis, clipPath trims it) */
      { x1: 50,  y1: 399, x2: 380, y2: 25,  stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'SRAS₂',labelX: 383, labelY: 23,  labelFill: '#7c3aed' }
    ],

    /* Guide lines + tick labels shown at stage 2 (showDashes) */
    guides: [
      /* Horizontal from y-axis to new equilibrium (E₂ at 261,161) */
      { x1: 100, y1: 161, x2: 261, y2: 161, tickLeft: 'P₂', tickLeftY: 164 },
      /* Horizontal from y-axis to initial equilibrium (E₁ at 308,198) */
      { x1: 100, y1: 198, x2: 308, y2: 198, tickLeft: 'P₁', tickLeftY: 201 },
      /* Vertical from E₂ down to x-axis */
      { x1: 261, y1: 161, x2: 261, y2: 400, tickBottom: 'Y₂', tickBottomX: 261 },
      /* Vertical from E₁ down to x-axis */
      { x1: 308, y1: 198, x2: 308, y2: 400, tickBottom: 'Y₁', tickBottomX: 308 }
    ],

    /* Shift arrow shown at stage 2; points from SRAS₁ toward SRAS₂ */
    shiftArrow: { x1: 432, y1: 45, x2: 372, y2: 45, stroke: '#7c3aed' },

    /* Equilibrium dots – initial (E₁) and new (E₂) */
    eqDots: [
      {
        cx: 308, cy: 198, fill: '#2563eb',
        initLabel: 'Initial', initLabel2: 'equilibrium', initLabelX: 314, initLabelY: 193
      },
      {
        cx: 261, cy: 161, fill: '#7c3aed',
        newLabel: 'New', newLabel2: 'equilibrium', newLabelX: 268, newLabelY: 156
      }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of higher energy costs on the UK economy.',
    instruction: 'Connect the visual shift to the economic outcomes by placing the correct labels on the diagram.',
    hint:        'Skill focus: connect the visual shift to economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',    label: 'Shift label',        pctX: 34,  pctY: 13.5, pctW: 19 },
      { id: 'new-eq',   label: 'New equilibrium',    pctX: 48,  pctY: 33,   pctW: 21 },
      { id: 'init-eq',  label: 'Initial eq.',        pctX: 57,  pctY: 41,   pctW: 22 },
      { id: 'hi-price', label: 'Higher price level', pctX: 0.5, pctY: 33,   pctW: 17 },
      { id: 'lo-out',   label: 'Lower real output',  pctX: 39,  pctY: 93.5, pctW: 18 }
    ],

    chips: [
      { id: 'sras-left', text: 'SRAS shifts left',   icon: '←', zone: 'shift',    correct: true  },
      { id: 'new-eq',    text: 'New equilibrium',     icon: '●', zone: 'new-eq',   correct: true  },
      { id: 'init-eq',   text: 'Initial equilibrium', icon: '●', zone: 'init-eq',  correct: true  },
      { id: 'hi-price',  text: 'Higher price level',  icon: '↑', zone: 'hi-price', correct: true  },
      { id: 'lo-out',    text: 'Lower real output',   icon: '↓', zone: 'lo-out',   correct: true  },
      { id: 'ad-right',  text: 'AD shifts right',     icon: '→', zone: null,       correct: false },
      { id: 'hi-out',    text: 'Higher real output',  icon: '↑', zone: null,       correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram (merged Interpret + Explain) ── */
  explain: {
    eyebrow:     'Diagram Connector – Read & Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – Bridge the diagram into clear written analysis.',

    vocab: ['SRAS', 'cost-push', 'price level', 'real output', 'negative supply shock', 'stagflation', 'purchasing power', 'profit margins'],

    parts: [
      {
        num:         1,
        title:       'Use the shift',
        prompt:      'Which curve shifts, why does it shift, and what type of inflation is this?',
        maxChars:    240,
        modelAnswer: 'SRAS shifts left because higher energy prices raise firms\' costs of production at every level of output. This is cost-push inflation – supply-side in origin, not driven by any change in aggregate demand.'
      },
      {
        num:         2,
        title:       'Explain the outcome',
        prompt:      'What happens to the price level and real output as the curve shifts?',
        maxChars:    240,
        modelAnswer: 'The equilibrium moves up the AD curve: the price level rises from P₁ to P₂ while real output falls from Y₁ to Y₂. The economy faces higher prices and lower output simultaneously – stagflationary pressure.'
      },
      {
        num:         3,
        title:       'Add a wider effect',
        prompt:      'Add one likely effect on real incomes, spending or growth.',
        maxChars:    240,
        modelAnswer: 'As prices rise faster than wages, real incomes fall. This reduces households\' purchasing power and dampens consumer spending, potentially deepening the fall in output and creating stagflationary conditions.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Use the diagram',
      'Keep the chain clear',
      'Name the macro outcome',
      'Use the context'
    ],

    examAnswer: '"Higher energy prices shift SRAS to the left, raising the price level from P₁ to P₂ while reducing real output from Y₁ to Y₂. This represents cost-push inflation driven by a supply-side shock – distinct from demand-pull because aggregate demand has not changed. The resulting fall in real output alongside rising prices creates stagflation: a particularly challenging macroeconomic outcome for policymakers."'
  }
};
