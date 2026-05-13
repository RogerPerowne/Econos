/* ============================================================
   ECONOS — Link It · Diagram Connector data
   Inflation: cost-push (SRAS shifts left)
   ============================================================ */

window.ECONOS_LINK_DIAGRAM = {
  topic:        'Causes of Inflation & Deflation',
  sessionLabel: 'Session 2 of 3: Link',
  backUrl:      'link_inflation_intro.html',
  nextUrl:      'link_inflation_depends.html',

  stations: [
    { id: 'context', label: 'Use the context',    href: 'link_inflation_context.html' },
    { id: 'chain',   label: 'Build the chain',    href: 'link_inflation_chain.html'   },
    { id: 'diagram', label: 'Diagram connector',  href: 'link_inflation_diagram.html' },
    { id: 'depends', label: 'It depends on',     href: 'link_inflation_depends.html' },
    { id: 'judge',   label: 'Make the judgement', href: 'link_inflation_judge.html' }
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

  /* ── Stage 2: Interpret the diagram ── */
  interpret: {
    eyebrow:     'Diagram Connector — Interpret the Diagram',
    title:       'Connect the labelled diagram to the economic story.',
    instruction: 'Interpret each part of the diagram and explain what it means economically.',
    hint:        'Skill hint: Link each part of the diagram to the economic story using cause → mechanism → effect.',

    questions: [
      {
        num:         1,
        question:    'Which curve shifted and why?',
        modelAnswer: 'SRAS shifted left because higher energy prices increased firms\' average costs of production, making it more expensive to supply any given level of output.'
      },
      {
        num:         2,
        question:    'What happens to the price level?',
        modelAnswer: 'The price level rises from P₁ to P₂. As SRAS shifts left, the equilibrium moves up the AD curve — firms charge higher prices to cover their increased costs.'
      },
      {
        num:         3,
        question:    'What happens to real output?',
        modelAnswer: 'Real output falls from Y₁ to Y₂. The leftward SRAS shift means the economy can produce less at every price level — output contracts alongside the price rise, creating stagflationary pressure.'
      },
      {
        num:         4,
        question:    'Why is this cost-push inflation?',
        modelAnswer: 'It is cost-push because the inflation originates on the supply side — rising input costs reduce SRAS, pushing up the price level without any increase in aggregate demand. The trigger is a cost shock, not excess consumer spending.'
      }
    ],

    vocab: ['SRAS', 'cost-push', 'price level', 'real output', 'negative supply shock', 'stagflation', 'purchasing power', 'profit margins']
  },

  /* ── Stage 3: Explain the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector — Explain the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'Use the visual shift and the context to write a short, clear explanation.',
    hint:        'Skill focus: Analysis — Bridge the diagram into clear written analysis.',

    parts: [
      {
        num:         1,
        title:       'Use the shift',
        prompt:      'State which curve shifts and why.',
        maxChars:    200,
        modelAnswer: 'Higher energy prices increase firms\' costs of production. On the AD/AS diagram, SRAS shifts to the left — the economy becomes more costly to operate at every output level.'
      },
      {
        num:         2,
        title:       'Explain the outcome',
        prompt:      'Explain what happens to inflation and real output.',
        maxChars:    200,
        modelAnswer: 'The leftward shift in SRAS raises the equilibrium price level from P₁ to P₂, causing cost-push inflation. Simultaneously, real output falls from Y₁ to Y₂ as production becomes uneconomical at the higher cost level.'
      },
      {
        num:         3,
        title:       'Add a wider effect',
        prompt:      'Add one likely effect on real incomes, spending or growth.',
        maxChars:    200,
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
