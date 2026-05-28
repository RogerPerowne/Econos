/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-calc.js ---- */
/* ============================================================
   ECONOS – Link It · Calculate It station data
   PPF: opportunity cost calculations
   ============================================================ */

window.ECONOS_LINK_CALC = {
  topic:   'Production Possibility Frontiers',
  backUrl: TopicLoader.routes.link('chain'),
  nextUrl: TopicLoader.routes.link('depends'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 2,

  eyebrow:     'Calculate It',
  instruction: 'Opportunity cost is the core calculation skill for PPF questions. Work through each question – use "Reveal step-by-step method" if you get stuck.',

  questions: [
    {
      id: 'ppf-q1',
      title: 'Opportunity cost – reading coordinates from the PPF',
      scenario: 'An economy produces two goods: machines (capital) and food (consumption). The table shows two points on its Production Possibility Frontier. The economy is currently at Point A and the government decides to invest more in capital goods.',
      table: {
        caption: 'Points on the PPF',
        headers: ['Point', 'Machines', 'Food (tonnes)'],
        rows: [
          ['A', '80', '20'],
          ['B', '60', '30']
        ]
      },
      question: 'Moving from Point A to Point B, calculate the opportunity cost of producing <strong>one extra tonne of food</strong>.',
      hint: 'Opportunity cost = what is given up ÷ what is gained',
      method: [
        { step: 'Change in machines (what is given up)', working: '80 − 60 = 20 machines' },
        { step: 'Change in food (what is gained)',        working: '30 − 20 = 10 tonnes of food' },
        { step: 'Opportunity cost per tonne of food',     working: '20 ÷ 10 = 2 machines per tonne' },
        { step: 'State the final answer',                 working: 'Moving from A to B, the opportunity cost of 1 extra tonne of food is 2 machines.' }
      ],
      inputType: 'number',
      answer: 2,
      unit: 'machines per tonne of food',
      tolerance: 0,
      feedback: {
        correct: 'Correct! You gave up 20 machines (80→60) to gain 10 extra tonnes of food (20→30). Divide the sacrifice by the gain: 20 ÷ 10 = 2 machines per tonne. The economy has moved along its PPF.',
        wrong: 'Not quite. The method: (1) Machines given up = 80 − 60 = 20. (2) Food gained = 30 − 20 = 10. (3) Opportunity cost = 20 ÷ 10 = 2 machines per tonne of food.'
      },
      examTip: 'Always state units clearly: "X machines per tonne of food." This shows the examiner you understand opportunity cost as a ratio, not just a number. A common error is to give the total sacrifice (20) rather than the per-unit opportunity cost (2).'
    },
    {
      id: 'ppf-q2',
      title: 'Opportunity cost – a different pair of points',
      scenario: 'The same linear PPF. Now compare Points C and D. The government is considering a different allocation – starting from the maximum machines scenario (Point C) and moving toward more food production.',
      table: {
        caption: 'Points on the PPF',
        headers: ['Point', 'Machines', 'Food (tonnes)'],
        rows: [
          ['C', '100', '0'],
          ['D', '70', '15']
        ]
      },
      question: 'Moving from Point C to Point D, calculate the opportunity cost of producing <strong>one extra tonne of food</strong>.',
      hint: 'Same method as Question 1 – divide sacrifice by gain.',
      method: [
        { step: 'Change in machines (given up)', working: '100 − 70 = 30 machines' },
        { step: 'Change in food (gained)',        working: '15 − 0 = 15 tonnes of food' },
        { step: 'Opportunity cost per tonne',     working: '30 ÷ 15 = 2 machines per tonne' },
        { step: 'State the answer',               working: 'Moving from C to D, the opportunity cost of 1 tonne of food is 2 machines.' }
      ],
      inputType: 'number',
      answer: 2,
      unit: 'machines per tonne of food',
      tolerance: 0,
      feedback: {
        correct: 'Correct! On a straight-line (linear) PPF, opportunity cost is constant at every point along the frontier – always 2 machines per tonne of food here. This is a key feature of the linear PPF model.',
        wrong: 'Check your calculation: 30 machines given up ÷ 15 tonnes gained = 2 machines per tonne. On a linear PPF, the opportunity cost is the same at every point.'
      },
      examTip: 'On a linear PPF, opportunity cost is constant – the frontier\'s gradient is fixed. On a concave (bowed-out) PPF, opportunity cost increases as you produce more of one good, because resources are not equally suited to all uses. Examiners often ask you to identify which shape implies what.'
    },
    {
      id: 'ppf-q3',
      title: 'Interpreting PPF positions – efficiency and growth',
      scenario: 'A country operates below its PPF. Unemployment is at 8%. The government introduces a new training programme. Five years later the economy is producing at a point that was previously outside the old PPF.',
      question: 'Which combination of outcomes correctly describes the economy at each stage?',
      hint: 'Think: what does operating inside the PPF represent? What causes an outward shift?',
      method: [
        { step: 'Operating below the PPF', working: 'Inside the PPF → productive inefficiency. Resources (labour) are unemployed or misallocated.' },
        { step: 'Training programme effect (short run)', working: 'Moves the economy toward its PPF – improving allocative and productive efficiency as unemployed workers gain skills and enter work.' },
        { step: 'Producing beyond the old PPF', working: 'The PPF itself has shifted outward. Training increased productive capacity (human capital), so more of both goods can now be produced.' },
        { step: 'Conclusion', working: 'Stage 1: Productive inefficiency (inside PPF). Stage 2: PPF shifts outward via human capital investment → economic growth.' }
      ],
      inputType: 'mcq',
      options: [
        'Initially inefficient (inside PPF); later operating outside the frontier through allocative efficiency',
        'Initially inefficient (inside PPF); later operating on an outward-shifted PPF due to increased productive capacity',
        'Initially on the PPF; later on an outward-shifted PPF through improved technology only',
        'Initially outside the PPF (impossible point); later on the original PPF after adjustment'
      ],
      answer: 'Initially inefficient (inside PPF); later operating on an outward-shifted PPF due to increased productive capacity',
      feedback: {
        correct: 'Correct! Operating at 8% unemployment means the economy is inside the PPF – resources are wasted. The training programme raises human capital, shifting the PPF outward over time. This is economic growth: the ability to produce more of all goods simultaneously.',
        wrong: 'Operating below the PPF = inside the frontier (inefficiency/unemployment, not a different type of efficiency). Producing at a previously impossible point means the PPF shifted outward – not that the economy became more allocatively efficient on the same frontier.'
      },
      examTip: 'Three key PPF scenarios examiners test: (1) Moving along the PPF – trade-off with fixed resources. (2) Inside the PPF – unemployed/misallocated resources. (3) PPF shifts outward – economic growth via technology, capital, human capital, or resources. Always identify which of these three is occurring.'
    }
  ]
};

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   PPF: build the investment → movement along PPF → long-run shift chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Production Possibility Frontiers',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('calc'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'ppf-investment-mechanism',
      scenario: {
        icon:  '🌱',
        label: 'Scenario',
        text:  'The UK government allocates resources to green infrastructure – offshore wind farms, battery storage and solar – rather than current public services. Resources (engineers, capital, land) shift from consumption goods (NHS capacity, welfare services) to investment goods (clean energy infrastructure).'
      },
      anchor: 'Investment goods vs current consumption compete for finite resources.',
      tiles: [
        {
          id:  'step-movement',
          icon: '📍',
          text: 'Economy near PPF: more green investment → less for consumption (move along)',
          pos:  0
        },
        {
          id:  'step-opp-cost',
          icon: '💷',
          text: 'SR trade-off: wind investment → forgone NHS/welfare spend (along PPF)',
          pos:  1
        },
        {
          id:  'step-shift',
          icon: '📈',
          text: 'LR: green investment raises capacity → PPF shifts outward',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🏭',
          text: 'Operating inside the PPF represents full employment of all resources',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '👥',
          text: 'A PPF can only shift outward through population growth, not investment',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏛️',
          text: 'Moving outside the PPF is possible if government raises taxation',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'When the UK economy is operating at or near full capacity – with workers employed, capital in use, and land in productive activity – there is no free lunch. Choosing to build offshore wind farms requires engineers, steel, and land that would otherwise be available for NHS construction, school building, or other public services. The economy does not move outside the PPF; it moves along it. The trade-off is real and unavoidable as long as resources are fully employed.'
        },
        {
          pos:  1,
          text: 'The short-run opportunity cost is concrete: every £1 of public money directed to offshore wind infrastructure is £1 not spent on NHS waiting list reduction, mental health services, or social care. Engineers hired to build wind farms are not available to work on hospital construction. This is not a theoretical abstraction – it is the actual sacrifice of forgone public services. The movement is along the existing PPF, leaving the frontier itself unchanged in the short run.'
        },
        {
          pos:  2,
          text: 'The long-run case for green investment is that it shifts the PPF outward: cheaper, reliable clean energy reduces costs across all sectors of the economy, improving productive efficiency. Energy independence reduces import costs. New green industries (offshore wind manufacturing, battery storage) expand productive capacity. If these effects are large enough, the PPF shifts out sufficiently that both green investment and consumption goods can be produced in greater quantities in future – the short-run trade-off is retrospectively justified by the long-run capacity gain.'
        }
      ],
      examBridge: '"Green investment represents a movement along the UK PPF: resources shift from current consumption (NHS, welfare) toward investment goods (wind farms, battery storage). The short-run opportunity cost is forgone public services. The long-run justification is an outward PPF shift: cheaper, reliable clean energy raises productive capacity across all sectors. The 30% renewable share already achieved demonstrates that previous PPF trade-offs have delivered measurable capacity shifts."',

      prompts: [
        'Why does green investment involve a trade-off rather than a free lunch?',
        'What is the opportunity cost of allocating resources to offshore wind?',
        'Under what conditions does the short-run sacrifice become retrospectively justified?'
      ],
      modelAnswers: [
        'At or near full employment, resources are already in use. Engineers, capital, and land directed to wind farms are unavailable for NHS or education – the economy moves along its PPF, not outside it. There is no spare capacity to absorb the investment without cost.',
        'The opportunity cost is the forgone public services – NHS capacity, welfare spending, school building – that the same resources could have delivered. Every £1 of public green investment is £1 not available for alternative current consumption.',
        'The sacrifice is justified if the resulting long-run outward PPF shift is larger than the short-run opportunity cost: if cheap, reliable clean energy raises productivity across all sectors, future output of both investment and consumption goods can exceed what was possible before the investment – making both goods more plentiful in the long run.'
      ],
      vocab: ['PPF', 'production possibility frontier', 'trade-off', 'opportunity cost', 'investment goods', 'consumption goods', 'economic growth', 'productive capacity', 'outward shift', 'movement along the PPF', 'full employment', 'productive efficiency']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Production Possibility Frontiers
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Production Possibility Frontiers',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'calc',    label: 'Calculate It',        max: 6, color: '#3B82F6' },
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
      { min: 80, text: 'Strong evidence classification' },
      { min: 60, text: 'Good – review the complicating factors' },
      { min: 0,  text: 'Evidence classification needs work' }
    ],
    chain: [
      { min: 100, text: 'Perfect causal chain' },
      { min: 50,  text: 'Clear causality – check the missing step' },
      { min: 0,   text: 'The causal chain needs work' }
    ],
    depends: [
      { min: 80, text: 'Strong evaluation conditions identified' },
      { min: 50, text: 'Good – one key condition missed' },
      { min: 0,  text: 'Review the key evaluation conditions' }
    ],
    judge: [
      { min: 80, text: 'Excellent judgement structure' },
      { min: 60, text: 'Judgement is strong but could be more precise' },
      { min: 0,  text: 'Judgement structure needs more precision' }
    ]
  },

  useInLandIt: 'PPF analysis requires you to distinguish: (1) movements along the frontier (trade-offs with fixed resources), (2) operating inside the frontier (inefficiency/employment-and-unemployment), and (3) shifts of the frontier (economic growth from investment or technology). Always state which of these three is occurring, and state the opportunity cost of any movement along the frontier.',

  focusInLandIt: {
    context: 'Use specific evidence – the £28bn/£7.3bn investment figures, 0.5% productivity growth, and 30% renewable share – to anchor your application to the real-world case, not just generic PPF theory.',
    chain:   'State the chain explicitly: resources shift from consumption to investment → economy moves along the PPF → opportunity cost is forgone public services → if investment raises productive capacity, the PPF shifts outward in the long run.',
    depends: 'Lead with productivity return as your condition – if the PPF shift from green investment is smaller than the opportunity cost, the trade-off is not rational regardless of intentions.',
    judge:   'State a clear position (rational if productivity return is high and politically sustained), use the mechanism (movement along PPF → short-run trade-off → long-run outward shift), add the condition (political sustainability and crowding-in magnitude), and acknowledge the honest risk (the £28bn to £7.3bn revision shows commitment failure is a real constraint).'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   PPF: classify evidence on UK green investment as a PPF trade-off
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Production Possibility Frontiers',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('chain'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether UK green investment represents a rational PPF trade-off – accepting a short-run sacrifice of consumption to achieve a long-run outward PPF shift?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'The UK Labour government pledged [[pledge|£28 billion per year in green investment]] as part of its 2024 general election manifesto – later scaled to £7.3 billion in the first term – focused on offshore wind, solar and battery storage, representing an explicit allocation of public resources toward investment goods rather than current consumption.',
      'UK productivity growth has averaged only [[productivity|0.5% per year since 2008]], compared with 2.5% pre-financial crisis (ONS 2023), suggesting the PPF has barely shifted outward since the financial crisis – reflecting insufficient investment in productive capacity.',
      'UK renewable energy capacity doubled between 2015 and 2023, with [[renewables|wind now providing 30% of electricity generation]] (National Grid ESO), demonstrating that previous green infrastructure investment has already shifted the production frontier – evidence the mechanism works.',
      'Every £1 of public green investment is estimated to [[crowdin|crowd in £3–4 of private green investment]] (IPPR/LSE Grantham Institute 2023) – suggesting the opportunity cost of green investment may be lower than the gross figure implies, as private activity amplifies each pound of public spending.',
      'UK defence spending is required by NATO to reach [[defence|2.5% of GDP – rising from 2.3% in 2023]] – meaning green investment competes not only with NHS and welfare spending but also with mandatory international commitments, constraining the trade-off space available.'
    ],

    evidence: {
      'pledge':      { text: '£28 billion per year in green investment' },
      'productivity': { text: '0.5% per year since 2008' },
      'renewables':  { text: 'wind now providing 30% of electricity generation' },
      'crowdin':     { text: 'crowd in £3–4 of private green investment' },
      'defence':     { text: '2.5% of GDP – rising from 2.3% in 2023' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the investment as a rational PPF trade-off', tone: 'green', icon: '↑' },
      { id: 'complicates', label: 'Complicates the case either way',                     tone: 'blue',  icon: '?' },
      { id: 'against',     label: 'Argues the trade-off is less justified',              tone: 'pink',  icon: '↓' }
    ],

    correct: {
      'pledge':       'supports',
      'productivity': 'supports',
      'renewables':   'supports',
      'crowdin':      'complicates',
      'defence':      'complicates'
    },

    explain: {
      'pledge':       'An explicit £28bn annual green investment pledge is a direct PPF allocation: public resources shift from current consumption (NHS, welfare) to investment goods (wind farms, battery storage). The scale of the commitment signals that the government judges the long-run PPF shift will exceed the opportunity cost – supporting the rational trade-off claim.',
      'productivity': 'Post-2008 productivity growth of only 0.5%/year confirms that the PPF has barely shifted outward over 15 years – a structural consequence of chronic underinvestment. This supports the case for green investment: the frontier needs to move, and past stagnation shows the cost of not investing.',
      'renewables':   'Wind energy already providing 30% of UK generation demonstrates that previous PPF trade-offs have delivered measurable outward capacity shifts. This is empirical evidence that the mechanism works – not just a theoretical claim. It directly supports the rationality of the current investment trade-off.',
      'crowdin':      'If each £1 of public investment crowds in £3–4 of private capital, the true opportunity cost of green investment is significantly lower than the headline figure suggests – the multiplier changes the trade-off calculation. However, if private crowding-in fails to materialise, the full opportunity cost falls on current public spending. This complicates rather than settles the verdict.',
      'defence':      'Rising NATO defence commitments mean green investment competes with a mandatory, internationally binding spending commitment – not just discretionary domestic priorities. This constrains the available resource pool and means the PPF trade-off is tighter than it appears, complicating the case without clearly settling it either way.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"UK green investment is a classic PPF trade-off: the £28bn pledge moves resources from current consumption toward investment goods, with the long-run justification being an outward PPF shift. The fact that wind energy already provides 30% of generation demonstrates the mechanism has delivered in the past. However, the case is complicated by crowding-in uncertainty – the true opportunity cost depends on whether £3–4 of private investment actually materialises per £1 of public spending – and by rising defence commitments that tighten the resource constraint further."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};

/* ---- link-depends.js ---- */
/* ============================================================
   ECONOS – Link It · It Depends On station data
   PPF: evaluate the green investment as rational PPF trade-off claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Production Possibility Frontiers',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether the long-run PPF shift justifies the short-run opportunity cost.',
  nextUrl:     TopicLoader.routes.link('judge'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'ppf-green-investment',
      claim: {
        icon:   '🌱',
        prompt: 'Claim',
        text:   'Green investment is a rational PPF trade – SR sacrifice for LR shift.'
      },
      factors: [
        {
          id:    'time-preference',
          icon:  '⏱️',
          label: 'Society\'s time preference (present vs future)',
          why:   'The PPF trade-off involves giving up present consumption for future capacity. Whether this is rational depends on society\'s discount rate: how much future benefits are valued relative to current costs. A high discount rate (impatient society) favours current consumption; a low discount rate (patient society) favours investment. Government policy must reflect democratic time preferences.'
        },
        {
          id:    'productivity-multiplier',
          icon:  '🔧',
          label: 'Productivity of the investment (size of PPF shift)',
          why:   'The long-run justification only holds if green investment actually shifts the PPF outward by more than the opportunity cost. If offshore wind energy is cheap and reliable, the productivity gain across the economy may justify the current sacrifice. If cost overruns occur or technology underperforms, the PPF shift is smaller than expected – making the trade-off retrospectively poor.'
        },
        {
          id:    'crowding-out',
          icon:  '💷',
          label: 'Whether public investment crowds out or crowds in private investment',
          why:   'Government green investment may crowd out private green investment (competing for the same engineers, land and finance). Or it may crowd in private investment (de-risking early-stage projects, building supply chains, creating markets). IPPR estimates £3–4 of private investment per £1 public – if accurate, the opportunity cost of each £1 public investment is less than it appears because private activity amplifies the shift.'
        },
        {
          id:    'political-commitment',
          icon:  '🗳️',
          label: 'Political sustainability of the investment plan',
          why:   'Long-run PPF shifts require sustained investment over many years. If a green investment programme is abandoned mid-way (as the UK\'s £28bn pledge was scaled back before implementation), sunk costs are realised without the PPF shift completing. Political discontinuity reduces the expected value of investment – increasing effective opportunity cost.'
        },
        {
          id:    'international-competitiveness',
          icon:  '🌍',
          label: 'Whether competitors are making similar PPF investments',
          why:   'If all major economies invest in green infrastructure simultaneously (IRA in USA, EU Green Deal), the relative competitiveness effect is muted. If only the UK invests heavily, it may build a first-mover advantage in green industries – a larger PPF shift from the same opportunity cost. The global investment landscape shapes the return on UK PPF allocation.'
        },
        {
          id:    'resource-availability',
          icon:  '⚡',
          label: 'Availability of complementary resources (skilled workers, supply chains)',
          why:   'A PPF shift from green investment requires not just capital but also engineers, skilled construction workers, grid infrastructure, and supply chains. If these are scarce (UK currently imports most offshore wind components), the PPF shift is delayed and the short-run opportunity cost is higher while supply chains are built. Complementary resource availability determines the speed and magnitude of PPF shift.'
        },
        {
          id:    'distribution',
          icon:  '👥',
          label: 'Distribution of short-run sacrifice and long-run gains',
          why:   'The PPF trade-off may not be evenly shared: the short-run cost (higher energy prices, reduced welfare spending) may fall disproportionately on lower-income households, while long-run gains (energy security, new jobs) may accrue to higher-income skilled workers and shareholders. Even if the aggregate PPF shift is positive, distributional consequences affect whether the trade-off is equitable.'
        },
        {
          id:    'alternative-investment',
          icon:  '🏗️',
          label: 'Opportunity cost vs alternatives (health, education, housing)',
          why:   'Green infrastructure is not the only way to shift the PPF outward. Investment in healthcare capacity, education quality, or housing infrastructure also raises productive potential. The PPF argument for green investment is strongest when its productivity return exceeds that of alternatives – which requires careful cost-benefit comparison across competing investment categories.'
        }
      ],
      modelRanking: ['productivity-multiplier', 'political-commitment', 'crowding-out'],
      judgement: '"Whether green investment is the best PPF trade-off depends primarily on the size of the outward shift it produces: if cheap, reliable clean energy raises productivity across all sectors by more than the opportunity cost of foregone public services, the trade-off is rational. Political sustainability is the second key condition – the long-run shift requires consistent investment across multiple governments. And crowding-in of private capital determines the true opportunity cost of each £1 of public investment."'
    }
  ]
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for ppf
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Production Possibility Frontiers',
  estTime: '15–20 minutes',
  goal:    'Bridge your PPF knowledge into exam-quality application, analysis and evaluation of real-world trade-offs.',

  intro: {
    summary: "You've locked in PPF construction, opportunity cost, shifts, and efficiency. Now train the skills examiners reward – applying PPF analysis to a real government investment decision, building a watertight causal chain from trade-off to long-run shift, and reaching a supported judgement about whether the short-run sacrifice of current consumption is justified.",
    heroKey: 'heroPPF',

    doInThis: 'Four short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Explain what points on, inside, and beyond the PPF represent',
      'Build the causal chain from investment choice to PPF shift',
      'Evaluate the conditions under which outward PPF shifts are more or less likely',
      'Judge whether the sacrifice of current consumption for investment is economically justified'
    ],
    tip: "These steps are cognitive drills – same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context', skill: 'Application', sub: 'Read an extract and judge which evidence changes the answer.', href: TopicLoader.routes.link('context'), state: 'available' },
      { num: 2, name: 'Build the chain', skill: 'Analysis', sub: 'Order or fill the steps in a reasoning chain.', href: TopicLoader.routes.link('chain'), state: 'available' },
      { num: 3, name: 'Calculate It', skill: 'Analysis', sub: 'Work through the calculations with revealable methods.', href: TopicLoader.routes.link('calc'), state: 'available' },
      { num: 4, name: 'It depends on', skill: 'Evaluation', sub: 'Rank the factors that most change the answer.', href: TopicLoader.routes.link('depends'), state: 'available' },
      { num: 5, name: 'Make the judgement', skill: 'Evaluation', sub: 'Synthesise everything into an exam-quality judgement.', href: TopicLoader.routes.link('judge'), state: 'available' }
    ],

    stages: [
      { num: 1, name: 'Learn it', sub: 'Recap and lock in the gems',    state: 'done',    href: TopicLoader.routes.learn()      },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'current'                                                },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked'                                                 }
    ],

    startUrl:   TopicLoader.routes.link('context'),
    startLabel: 'Start Link it'
  }
};

/* ---- link-judge.js ---- */
/* ============================================================
   ECONOS – Link It · Make the Judgement station data
   PPF: synthesise into an exam-quality judgement on green investment
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Production Possibility Frontiers',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.routes.link('complete'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 4,

  wgll: [
    { icon: '🎯', text: 'Take a clear position'  },
    { icon: '🔗', text: 'Use the mechanism'       },
    { icon: '➕', text: 'Add a condition'         },
    { icon: '💬', text: 'Explain the limitation'  }
  ],

  scenarios: [
    {
      id: 'ppf-green-investment-judgement',
      claim: {
        icon:   '🌱',
        prompt: 'Claim',
        text:   'Investment in green infrastructure represents a rational choice on the PPF – accepting a short-run sacrifice of consumption to achieve long-run outward PPF shift through sustainable economic growth.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green', icon: '🔍', title: 'Context',       text: 'UK pledged £28bn green investment (scaled to £7.3bn); productivity growth 0.5%/yr since 2008; renewables 30% of generation; £1 public → £3–4 private crowding-in.' },
        { id: 'chain',   tone: 'amber', icon: '🔗', title: 'Chain',         text: 'Resources shift from consumption to investment → move along PPF (opportunity cost of public services) → long-run PPF shift outward if investment raises productive capacity.' },
        { id: 'depends', tone: 'blue',  icon: '⚖️', title: 'It depends on', text: 'Productivity of the shift; political sustainability; crowding-in of private capital; distribution of sacrifice and gains.' }
      ],
      cloze: 'A PPF illustrates the [1] between producing investment goods and consumption goods with given resources. A movement [2] the PPF (from current consumption toward green investment) reduces current output of public services – this is the [3]. The long-run justification is an [4] shift of the PPF if the investment raises productive capacity – allowing more of both goods in future. The trade-off is most rational when the [5] of the investment is high (PPF shifts far outward for a given sacrifice) and [6] is sustainable across multiple governments. The risk is that if investment yields are lower than expected (cost overruns, technological failure), the PPF shifts [7] than anticipated, and the opportunity cost of forgone consumption goods [8] the benefit.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-tradeoff',  text: 'trade-off',          correct: true  },
            { id: 'b1-mf',        text: 'market failure',     correct: false },
            { id: 'b1-price',     text: 'price signal',       correct: false },
            { id: 'b1-income',    text: 'income effect',      correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-along',     text: 'along',    correct: true  },
            { id: 'b2-outside',   text: 'outside',  correct: false },
            { id: 'b2-inside',    text: 'inside',   correct: false },
            { id: 'b2-beyond',    text: 'beyond',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-opp',       text: 'opportunity cost',   correct: true  },
            { id: 'b3-cs',        text: 'consumer surplus',   correct: false },
            { id: 'b3-dwl',       text: 'deadweight loss',    correct: false },
            { id: 'b3-ps',        text: 'producer surplus',   correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-outward',   text: 'outward',    correct: true  },
            { id: 'b4-inward',    text: 'inward',     correct: false },
            { id: 'b4-parallel',  text: 'parallel',   correct: false },
            { id: 'b4-diagonal',  text: 'diagonal',   correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-prod',      text: 'productivity return',     correct: true  },
            { id: 'b5-pop',       text: 'political popularity',   correct: false },
            { id: 'b5-conf',      text: 'consumer confidence',    correct: false },
            { id: 'b5-ped',       text: 'PED',                    correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-pol',       text: 'political commitment',   correct: true  },
            { id: 'b6-demand',    text: 'consumer demand',        correct: false },
            { id: 'b6-monetary',  text: 'monetary policy',        correct: false },
            { id: 'b6-trade',     text: 'trade balance',          correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-less',      text: 'less far',     correct: true  },
            { id: 'b7-sharp',     text: 'more sharply', correct: false },
            { id: 'b7-instant',   text: 'instantly',    correct: false },
            { id: 'b7-inward',    text: 'inward',       correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-exceeds',   text: 'exceeds',          correct: true  },
            { id: 'b8-equals',    text: 'equals',           correct: false },
            { id: 'b8-below',     text: 'falls below',      correct: false },
            { id: 'b8-unrelated', text: 'is unrelated to',  correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',   text: 'Green investment always shifts the PPF outward by more than the opportunity cost',                                                                         correct: false },
          { id: 'op-rational', text: 'Green investment is a rational PPF trade-off when productivity return is high, politically sustained, and crowding-in is significant',                    correct: true  },
          { id: 'op-inferior', text: 'PPF analysis shows green investment is always inferior to current consumption',                                                                           correct: false },
          { id: 'op-irrelevant', text: 'The PPF is irrelevant to real-world policy decisions',                                                                                                 correct: false }
        ]
      },
      examBridge: '"Green investment moves the UK along its PPF from consumption toward investment goods – the opportunity cost is foregone NHS and welfare spending. The long-run case is an outward PPF shift: cheaper clean energy raises productive capacity across all sectors. Whether this is the best trade-off depends on the productivity return of the investment (vs alternatives like health or housing) and political sustainability (the £28bn to £7.3bn revision illustrates the risk of commitment failure)."'
    }
  ]
};

