/* ============================================================
   ECONOS — Link It · Diagram Connector data
   Inflation: cost-push (SRAS shifts left)
   ============================================================ */

window.ECONOS_LINK_DIAGRAM = {
  topic:        'Causes of Inflation & Deflation',
  sessionLabel: 'Session 2 of 3: Link',
  backUrl:      TopicLoader.buildUrl('link_intro.html'),
  nextUrl:      TopicLoader.buildUrl('link_depends.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',     href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 2,

  /* ── Stage 0: Select the right diagram ── */
  select: {
    eyebrow:     'Diagram Connector — Select the Diagram',
    title:       'Which diagram best shows the effect of this shock on the economy?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the economic impact. Think about which curve is directly affected.',
    hint:        'Skill focus: identify the right model before drawing it.',

    options: [
      {
        id:       'sras-left',
        correct:  true,
        title:    'SRAS shifts left',
        sub:      'Higher costs reduce supply at every price level — stagflationary pressure',
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
        why:      'LRAS shifts right when the economy\'s long-run potential output grows — through investment, technology or labour force expansion. An energy price spike reduces productive capacity; it does not expand it.'
      },
      {
        id:       'ad-left',
        correct:  false,
        title:    'AD shifts left',
        sub:      'Consumer spending falls, reducing demand and the price level',
        why:      'AD shifting left represents a demand-side contraction (e.g. a recession, tax rise or credit crunch). While weak consumer confidence is mentioned in the data, the primary direct effect of an energy price rise hits firms\' costs — the SRAS curve.'
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

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector — Label the Diagram',
    title:       'Use the diagram to show the effect of higher energy costs on the UK economy.',
    instruction: 'Connect the visual shift to the economic outcomes by placing the correct labels on the diagram.',
    hint:        'Skill focus: connect the visual shift to economic outcomes.',

    zones: [
      { id: 'shift',    label: 'Shift label'       },
      { id: 'new-eq',   label: 'New equilibrium'   },
      { id: 'init-eq',  label: 'Initial eq.'       },
      { id: 'hi-price', label: 'Higher price level' },
      { id: 'lo-out',   label: 'Lower real output'  }
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
    eyebrow:     'Diagram Connector — Read & Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis — Bridge the diagram into clear written analysis.',

    vocab: ['SRAS', 'cost-push', 'price level', 'real output', 'negative supply shock', 'stagflation', 'purchasing power', 'profit margins'],

    parts: [
      {
        num:         1,
        title:       'Use the shift',
        prompt:      'Which curve shifts, why does it shift, and what type of inflation is this?',
        maxChars:    240,
        modelAnswer: 'SRAS shifts left because higher energy prices raise firms\' costs of production at every level of output. This is cost-push inflation — supply-side in origin, not driven by any change in aggregate demand.'
      },
      {
        num:         2,
        title:       'Explain the outcome',
        prompt:      'What happens to the price level and real output as the curve shifts?',
        maxChars:    240,
        modelAnswer: 'The equilibrium moves up the AD curve: the price level rises from P₁ to P₂ while real output falls from Y₁ to Y₂. The economy faces higher prices and lower output simultaneously — stagflationary pressure.'
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

    examAnswer: '"Higher energy prices shift SRAS to the left, raising the price level from P₁ to P₂ while reducing real output from Y₁ to Y₂. This represents cost-push inflation driven by a supply-side shock — distinct from demand-pull because aggregate demand has not changed. The resulting fall in real output alongside rising prices creates stagflation: a particularly challenging macroeconomic outcome for policymakers."'
  }
};
