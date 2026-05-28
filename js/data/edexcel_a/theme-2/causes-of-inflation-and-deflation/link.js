/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   Inflation: build a causal chain of economic reasoning
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:        'Causes of Inflation & Deflation',
  backUrl:      TopicLoader.routes.link('intro'),
  nextUrl:      TopicLoader.routes.link('diagram'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly to the next.',

  chains: [
    /* ── 1. Cost-push (energy / supply shock) ── */
    {
      id: 'cost-push',
      scenario: {
        icon:  '⚡',
        label: 'Scenario',
        text:  'A sharp rise in global oil and gas prices follows a major supply disruption. Energy-intensive industries immediately report soaring input costs.'
      },
      anchor:   'Firms face higher production and energy costs',
      tiles: [
        {
          id:   'cp-step1',
          icon: '📉',
          text: 'SRAS shifts left, reducing output',
          pos:  0
        },
        {
          id:   'cp-step2',
          icon: '💰',
          text: 'Firms pass costs on as higher prices',
          pos:  1
        },
        {
          id:   'cp-step3',
          icon: '📊',
          text: 'CPI rises – cost-push inflation',
          pos:  2
        },
        {
          id:   'cp-dist1',
          icon: '🛒',
          text: 'Consumer confidence surges upward',
          pos:  null
        },
        {
          id:   'cp-dist2',
          icon: '📈',
          text: 'AD shifts right on rising incomes',
          pos:  null
        },
        {
          id:   'cp-dist3',
          icon: '🏦',
          text: 'Bank of England cuts interest rates',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Higher energy costs raise firms\' average costs of production. On the AD/AS diagram, SRAS shifts leftward – the economy produces less at every price level, creating stagflationary pressure.'
        },
        {
          pos:  1,
          text: 'To protect profit margins, firms raise their output prices. This is the transmission mechanism from higher input costs to consumer prices – sometimes called a cost mark-up.'
        },
        {
          pos:  2,
          text: 'The general price level rises across the economy: the headline CPI ticks up. Because the cause is supply-side (input costs), this is classified as cost-push inflation – accompanied by falling output rather than rising demand.'
        }
      ],
      examBridge: '"An oil-price shock shifts SRAS leftward; firms facing squeezed margins raise output prices, transmitting higher input costs into CPI – a classic cost-push inflation where rising prices are accompanied by falling real output."',

      prompts: [
        'What happens to firms\' output or prices as costs rise?',
        'How does this affect the general price level?',
        'What is the wider effect on households and real incomes?'
      ],
      modelAnswers: [
        'Firms face squeezed profit margins and respond by cutting output and/or raising prices – on the AD/AS diagram, SRAS shifts leftward.',
        'The leftward SRAS shift raises the equilibrium price level. CPI increases, producing cost-push inflation even without any change in aggregate demand.',
        'Higher prices erode households\' real wages and purchasing power. Real incomes fall, reducing consumer spending and potentially deepening the slowdown.'
      ],
      vocab: ['SRAS', 'cost-push', 'price level', 'CPI', 'real incomes', 'purchasing power', 'profit margins', 'stagflation']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic:        'Causes of Inflation & Deflation',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'diagram', label: 'Diagram connector',  max: 9, color: '#7c3aed' },
    { id: 'depends', label: 'It depends on',      max: 3, color: '#2563eb' },
    { id: 'judge',   label: 'Make the judgement', max: 8, color: '#0891b2' }
  ],

  overallMessages: [
    { min: 85, text: 'Excellent thinking structure – you\'re ready to write.' },
    { min: 70, text: 'Strong thinking structure – you\'re nearly ready to write.' },
    { min: 55, text: 'Good foundations – review your weakest step before Land It.' },
    { min: 0,  text: 'More practice recommended before tackling Land It.' }
  ],

  readinessLabels: [
    { min: 85, text: 'Ready for Land It' },
    { min: 70, text: 'Nearly ready for Land It' },
    { min: 55, text: 'Building readiness' },
    { min: 0,  text: 'More practice recommended' }
  ],

  stationFeedback: {
    context: [
      { min: 80, text: 'Strong evidence selection' },
      { min: 60, text: 'Good – review the borderline cases' },
      { min: 0,  text: 'Evidence selection needs work' }
    ],
    chain: [
      { min: 100, text: 'Perfect causal chain' },
      { min: 50,  text: 'Clear causality – check the missing step' },
      { min: 0,   text: 'The causal chain needs work' }
    ],
    diagram: [
      { min: 80, text: 'Strong diagram reading' },
      { min: 55, text: 'Good – check the output effect explanation' },
      { min: 0,  text: 'Diagram work needs more attention' }
    ],
    depends: [
      { min: 80, text: 'Strong evaluation factors' },
      { min: 50, text: 'Good factors – one key condition missed' },
      { min: 0,  text: 'Review the key evaluation conditions' }
    ],
    judge: [
      { min: 80, text: 'Excellent judgement' },
      { min: 60, text: 'Judgement is strong but could be more precise' },
      { min: 0,  text: 'Judgement structure needs more precision' }
    ]
  },

  useInLandIt: 'Higher interest rates can reduce inflation by lowering borrowing, consumption and investment, shifting AD left. However, this is most effective when inflation is demand-pull. If inflation is driven by global supply shocks, higher rates may be less effective and may weaken output and employment.',

  focusInLandIt: {
    context: 'Use specific evidence from the extract to change your conclusion – don\'t just apply generic economics to the claim.',
    chain:   'Write your causal chain explicitly – every step should follow mechanically from the last, naming the curve that shifts.',
    diagram: 'Make sure your explanation links the diagram shift to the specific cause of inflation, not just the direction of change in P and Y.',
    depends: 'Identify your single strongest condition and explain clearly how it tips the judgement for or against the policy.',
    judge:   'Combine your chain, diagram and evaluation into one structured judgement: clear position, mechanism, condition, limitation.'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   Inflation: read a news extract, classify the evidence
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:        'Causes of Inflation & Deflation',
  backUrl:      TopicLoader.routes.link('intro'),
  nextUrl:      TopicLoader.routes.link('chain'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in the extract matter most for judging whether the Bank of England should raise interest rates further?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Focus on what changes the answer, not just what sounds economic.',

    extract: [
      'The Office for National Statistics confirmed UK CPI inflation has [[cpi-level|risen to 6.8%]], driven largely by a sharp rise in global energy prices following supply disruption in major producing regions.',
      '[[energy|Energy prices have risen by 18%]] over the past three months, pushing up firms\' production and transport costs across the economy.',
      'However, [[wages|wage growth stands at 3.1%]], below the rate of inflation, meaning real wages are falling for most workers.',
      'The Bank of England\'s Monetary Policy Committee is considering a further 50 basis point rise in the base rate, having already raised rates from 0.1% to 4.5% over the past two years.',
      '[[confidence|Consumer confidence remains weak]], with the GfK index at -30, reflecting the squeeze on household budgets from higher energy bills.',
      'A minority of economists warn that a further rate rise risks [[recession|tipping the economy into recession]], given that output growth is already close to zero.'
    ],

    evidence: {
      'cpi-level':  { text: 'risen to 6.8%' },
      'energy':     { text: 'Energy prices have risen by 18%' },
      'wages':      { text: 'wage growth stands at 3.1%' },
      'confidence': { text: 'Consumer confidence remains weak' },
      'recession':  { text: 'tipping the economy into recession' }
    },

    buckets: [
      { id: 'raises',      label: 'Supports raising rates',         tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against raising rates',   tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way', tone: 'blue',  icon: '?' }
    ],

    correct: {
      'cpi-level':  'raises',
      'energy':     'complicates',
      'wages':      'complicates',
      'confidence': 'against',
      'recession':  'against'
    },

    explain: {
      'cpi-level':  'CPI at 6.8% is well above the 2% target, confirming inflation is high – this is the clearest direct justification for a rate rise to anchor expectations and cool demand.',
      'energy':     'A cost-push energy shock is the origin of this inflation. Rate rises work on demand, not supply costs, so their effectiveness here is limited – the shock complicates the case for tightening.',
      'wages':      'Real wages falling means workers are already suffering a squeeze on purchasing power. This suggests demand is not the primary driver of inflation, complicating the justification for further rate rises.',
      'confidence': 'With consumer confidence already weak, a further rate rise would tighten conditions on households already under strain – arguing against raising rates when demand may already be cooling.',
      'recession':  'If output growth is near zero, a further rate rise could tip the economy into recession – this is a significant argument against raising rates given the fragile growth outlook.'
    },

    bucketCue: 'Good application uses context to change the conclusion.',

    examBridge: '"With inflation at 6.8% and driven by a supply-side energy shock, the case for further rate rises is genuinely uncertain: rates can anchor expectations, but if the shock is temporary, a rate rise imposes output costs without removing the underlying pressure."',

    whatGoodLooksLike: [
      { icon: '🔍',  text: 'Use evidence from the extract'        },
      { icon: '❓',  text: 'Ask which details matter most'        },
      { icon: '⚖️',  text: 'Separate evidence from judgement'     }
    ]
  }
};

/* ---- link-depends.js ---- */
/* ============================================================
   ECONOS – Link It · It Depends On station data
   Inflation: evaluative judgement – pick & rank key factors
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:        'Causes of Inflation & Deflation',
  backUrl:      TopicLoader.routes.link('intro'),
  eyebrow:      'It Depends On',
  instruction:  'Pick the three factors that most change the answer to this claim. Explain why each one matters, then check against the ideal evaluation.',
  nextUrl:      TopicLoader.routes.link('judge'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 3,

  scenarios: [
    /* ── 1. Interest rates & inflation ── */
    {
      id: 'interest-rates-inflation',
      claim: {
        icon:   '🏦',
        prompt: 'Policy claim',
        text:   'Higher interest rates are the best way to reduce inflation.'
      },
      factors: [
        {
          id:    'cause-of-inflation',
          icon:  '🔍',
          label: 'Cause of inflation',
          why:   'Interest rate rises work by suppressing demand, so they are most effective against demand-pull inflation. If inflation is cost-push – driven by supply shocks – raising rates may deepen the recession without reducing the price level.'
        },
        {
          id:    'transmission-strength',
          icon:  '⚙️',
          label: 'Strength of the transmission mechanism',
          why:   'Higher rates only reduce inflation if households and firms actually cut spending in response. If borrowers are on fixed-rate mortgages or if corporate debt is long-term, the transmission from rate rises to lower AD is weak and slow.'
        },
        {
          id:    'household-debt',
          icon:  '💳',
          label: 'Household debt levels',
          why:   'Highly indebted households on variable-rate mortgages feel rate rises immediately in their disposable income, amplifying the demand effect. Low household debt reduces this channel, limiting the policy\'s bite.'
        },
        {
          id:    'inflation-expectations',
          icon:  '🔮',
          label: 'Inflation expectations',
          why:   'If expectations are de-anchored – workers and firms already pricing in persistent inflation – monetary policy must work much harder to restore credibility, often requiring deeper rate rises that risk a sharper recession.'
        },
        {
          id:    'time-lag',
          icon:  '⏱️',
          label: 'Time lag of monetary policy',
          why:   'The Bank of England estimates interest rate changes take 18–24 months to have their full effect on inflation. A temporary supply shock may have already reversed before the rate rise even takes effect, causing unnecessary economic damage.'
        },
        {
          id:    'global-supply-shocks',
          icon:  '🌍',
          label: 'Global supply shocks',
          why:   'Domestic monetary policy cannot address the root cause of globally driven cost-push inflation, such as energy price spikes or commodity shortages. Rate rises impose a domestic demand squeeze on a supply-side problem.'
        },
        {
          id:    'real-interest-rate',
          icon:  '📐',
          label: 'Real vs nominal interest rates',
          why:   'What matters for spending decisions is the real interest rate (nominal minus inflation). If inflation is very high, even large nominal rate rises may leave real rates low or negative, limiting their restraining effect on demand.'
        },
        {
          id:    'alternative-policies',
          icon:  '🔄',
          label: 'Availability of alternative policies',
          why:   'If fiscal policy or supply-side reforms could address inflation more directly – e.g. targeted energy subsidies for cost-push, or boosting productive capacity – then interest rates may not be the "best" tool regardless of their effectiveness.'
        }
      ],
      modelRanking: ['cause-of-inflation', 'transmission-strength', 'inflation-expectations'],
      judgement: '"Whether higher interest rates are the \'best\' tool depends primarily on the cause of inflation: if inflation is demand-pull and inflation expectations remain anchored, rate rises can reduce AD effectively – but where inflation is cost-push or supply-driven, monetary tightening imposes output costs without addressing the underlying pressure."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Inflation: cost-push (SRAS shifts left)
   ============================================================ */

window.ECONOS_LINK_DIAGRAM = {
  topic:        'Causes of Inflation & Deflation',
  backUrl:      TopicLoader.routes.link('intro'),
  nextUrl:      TopicLoader.routes.link('depends'),

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

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for inflation
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:        'Causes of Inflation & Deflation',
  estTime:      '15–20 minutes',
  goal:         'Bridge knowledge to exam application',

  intro: {
    summary: "Now you've locked in the content. Time to train the skills examiners reward – applying it to context, building chains of reasoning, spotting flaws and reaching a judgement.",
    heroKey: 'heroBars',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real news context to change the answer',
      'Build watertight chains of reasoning',
      'Spot examiner-grade flaws and reach a judgement'
    ],
    tip: "These steps are not tests – they're cognitive drills. Treat them like circuits in the gym: same movement patterns, different topic content.",

    stations: [
      { num: 1, name: 'Use the context', skill: 'Application', sub: 'Read an extract and judge which evidence changes the answer.', href: TopicLoader.routes.link('context'), state: 'available' },
      { num: 2, name: 'Build the chain', skill: 'Analysis', sub: 'Order or fill the steps in a reasoning chain.', href: TopicLoader.routes.link('chain'), state: 'available' },
      { num: 3, name: 'Diagram connector', skill: 'Analysis', sub: 'Pick, label, interpret and explain the right diagram.', href: TopicLoader.routes.link('diagram'), state: 'available' },
      { num: 4, name: 'It depends on', skill: 'Evaluation', sub: 'Rank the factors that most change the answer.', href: TopicLoader.routes.link('depends'), state: 'available' },
      { num: 5, name: 'Make the judgement', skill: 'Evaluation', sub: 'Synthesise everything into an exam-quality judgement.', href: TopicLoader.routes.link('judge'), state: 'available' }
    ],

    stages: [
      { num: 1, name: 'Learn it', sub: 'Recap and lock in the gems',       state: 'done',     href: TopicLoader.routes.learn()      },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context',    state: 'current'                                       },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',       state: 'available', href: TopicLoader.routes.land('intro') }
    ],

    startUrl:   TopicLoader.routes.link('context'),
    startLabel: 'Start Link it'
  }
};

/* ---- link-judge.js ---- */
/* ============================================================
   ECONOS – Link It · Make the Judgement station data
   Inflation: synthesise evidence into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:        'Causes of Inflation & Deflation',
  backUrl:      TopicLoader.routes.link('intro'),
  eyebrow:      'Make the Judgement',
  instruction:  'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:      TopicLoader.routes.link('complete'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 4,

  wgll: [
    { icon: '🎯', text: 'Take a clear position'    },
    { icon: '🔗', text: 'Use the mechanism'         },
    { icon: '➕', text: 'Add a condition'           },
    { icon: '💬', text: 'Explain the limitation'    }
  ],

  scenarios: [
    /* ── 1. Interest rates & inflation ── */
    {
      id: 'interest-rates-inflation',
      claim: {
        icon:   '🏦',
        prompt: 'Policy claim',
        text:   'Higher interest rates are the best way to reduce inflation.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'Energy prices +18%: cost-push inflation, real wages falling.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Energy costs ↑ → SRAS shifts left → price level ↑, output ↓.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'SRAS shifts left – stagflation: higher P, lower Y simultaneously.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on cause, credibility and transmission.' }
      ],
      cloze: 'Overall, higher interest rates are [1] when inflation is mainly [2], because higher borrowing costs reduce [3] and shift [4] left. However, their effectiveness is weaker when inflation is driven by [5], since interest rates do not directly reduce firms\' [6]. Therefore, the strongest judgement is that higher interest rates are [7], but only if the transmission mechanism is strong and the fall in [8] is not excessive.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-most-effective',   text: 'most effective',       correct: true  },
            { id: 'b1-irrelevant',       text: 'irrelevant',             correct: false },
            { id: 'b1-harmful',          text: 'harmful in all cases',   correct: false },
            { id: 'b1-automatic',        text: 'automatic',              correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-demand-pull',      text: 'demand-pull inflation', correct: true  },
            { id: 'b2-cost-push',        text: 'cost-push inflation',    correct: false },
            { id: 'b2-structural',       text: 'structural unemployment',correct: false },
            { id: 'b2-trade',            text: 'trade liberalisation',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-consumption',      text: 'consumption and investment', correct: true  },
            { id: 'b3-government',       text: 'government spending',          correct: false },
            { id: 'b3-labour',           text: 'labour mobility',              correct: false },
            { id: 'b3-exports',          text: 'exports only',                 correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-ad',               text: 'AD',   correct: true  },
            { id: 'b4-sras',             text: 'SRAS', correct: false },
            { id: 'b4-lras',             text: 'LRAS', correct: false },
            { id: 'b4-mpc',              text: 'MPC',  correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-supply-shocks',    text: 'global supply shocks',   correct: true  },
            { id: 'b5-confidence',       text: 'rising confidence',       correct: false },
            { id: 'b5-lower-rates',      text: 'lower interest rates',    correct: false },
            { id: 'b5-competition',      text: 'stronger competition',    correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-costs',            text: 'production costs',    correct: true  },
            { id: 'b6-tax',              text: 'tax revenue',         correct: false },
            { id: 'b6-surplus',          text: 'consumer surplus',     correct: false },
            { id: 'b6-exchange',         text: 'exchange rates',       correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-useful-limited',   text: 'useful but limited',         correct: true  },
            { id: 'b7-best-policy',      text: 'always the best policy',     correct: false },
            { id: 'b7-ineffective',      text: 'completely ineffective',     correct: false },
            { id: 'b7-monopoly',         text: 'only suitable in monopoly markets', correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-output',           text: 'output and employment', correct: true  },
            { id: 'b8-imports',          text: 'imports and tariffs',    correct: false },
            { id: 'b8-pensions',         text: 'pensions only',          correct: false },
            { id: 'b8-tax',              text: 'tax receipts only',      correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',     text: 'Higher rates are always best',                    correct: false },
          { id: 'op-useful',     text: 'Higher rates are useful but conditional',          correct: true  },
          { id: 'op-not-used',   text: 'Higher rates should not be used',                  correct: false },
          { id: 'op-supply',     text: 'Inflation can only be solved with supply-side policy', correct: false }
        ]
      },
      examBridge: '"Higher interest rates are useful but conditional: most effective against demand-pull inflation through their effect on consumption and investment, but limited against cost-push pressures from global supply shocks. The strongest judgement is that they should be used when the transmission mechanism is strong and the output cost is acceptable."'
    }
  ]
};

