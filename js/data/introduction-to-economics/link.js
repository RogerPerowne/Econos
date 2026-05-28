/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   The Economic Problem: build the scarcity → economic questions → opportunity cost chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'The Economic Problem',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('depends'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'econ-problem-mechanism',
      scenario: {
        icon:  '⚕️',
        label: 'Scenario',
        text:  'NHS England has a budget of £167bn in 2023–24. Demand for healthcare – driven by an ageing population, new medical technologies, and 7.7 million patients already waiting – is effectively unlimited. There is no government policy that can make all health needs simultaneously affordable.'
      },
      anchor: 'NHS budget (£167bn) is finite; healthcare demand is effectively unlimited.',
      tiles: [
        {
          id:  'step-questions',
          icon: '❓',
          text: 'Scarcity forces NHS to decide WHAT, HOW and FOR WHOM to produce',
          pos:  0
        },
        {
          id:  'step-opp-cost',
          icon: '💷',
          text: 'Every choice has an opportunity cost – the forgone next-best alternative',
          pos:  1
        },
        {
          id:  'step-universal',
          icon: '🌍',
          text: 'Scarcity is permanent – new tech and needs always create fresh demand',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🏛️',
          text: 'Better NHS management could eliminate scarcity without more funding',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '💊',
          text: 'Private healthcare ends the economic problem via price rationing',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🖨️',
          text: 'If the government printed more money, NHS scarcity could be fully resolved',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Scarcity makes choice inevitable. The NHS cannot treat 7.7 million waiting patients simultaneously with a £167bn budget – it must prioritise. That prioritisation answers the three fundamental economic questions: what treatments to provide (cancer vs mental health vs prevention), how to provide them (surgery, medication, community care), and for whom (triage systems, QALY thresholds, waiting-list management). The economic problem does not require poverty or mismanagement – it follows directly from unlimited wants meeting finite resources.'
        },
        {
          pos:  1,
          text: 'When NICE approves a £50m cancer drug meeting the £30,000/QALY threshold, the opportunity cost is whatever else could have been done with £50m: additional mental health therapists, preventive screening programmes, or primary care appointments. The QALY threshold makes opportunity cost explicit – every approval forecloses alternatives. This is the economic problem made operational: not a failure of the system, but the system responding to unavoidable scarcity.'
        },
        {
          pos:  2,
          text: 'Each new treatment – CAR-T cell therapy at £300,000 per patient, weight-loss drugs at £9,000 per year – creates fresh demand that absorbs new funding. A larger NHS budget would shift the frontier but would not eliminate it: new technologies and an ageing population continuously expand wants faster than any realistic funding increase. The economic problem is a permanent feature of economic life, not a temporary shortfall to be solved by any single budget settlement.'
        }
      ],
      examBridge: '"The NHS illustrates the universal economic problem: a £167bn budget cannot meet 7.7 million waiting list patients simultaneously. NICE\'s QALY threshold makes opportunity cost explicit – every drug approved means alternatives foregone. The economic problem persists regardless of funding level because new medical technologies continuously expand demand. In a mixed economy like the UK, the question is not whether to make trade-offs but how – through market prices, QALY thresholds, or political negotiation."',

      prompts: [
        'What makes NHS needs \'unlimited\' while resources are finite?',
        'What is the opportunity cost of the NICE drug approval decision?',
        'Why does a larger NHS budget not eliminate the economic problem?'
      ],
      modelAnswers: [
        'Human health needs are effectively unlimited: ageing population, new diseases, new technologies constantly expand demand. But doctors, nurses, hospital beds, drugs, and funding are all finite. The gap between unlimited wants and limited means is the economic problem – no amount of funding can permanently close it because new treatments and needs arise.',
        'When NICE approves a £50m cancer drug meeting the £30,000/QALY threshold, the opportunity cost is whatever else could have been done with £50m: additional mental health therapists, preventive screening programmes, or primary care appointments. The QALY threshold makes opportunity cost explicit – every approval forecloses alternatives.',
        'Each new treatment (CAR-T cell therapy at £300,000/patient, weight-loss drugs at £9,000/year) creates fresh demand that absorbs new funding. The economic problem is not a funding shortfall to be solved – it is a permanent feature of scarcity in a world of advancing technology and changing needs.'
      ],
      vocab: ['scarcity', 'opportunity cost', 'economic problem', 'QALY', 'trade-off', 'what to produce', 'how to produce', 'for whom to produce', 'finite resources', 'unlimited wants', 'mixed economy', 'factor of production']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   The Economic Problem
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'The Economic Problem',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
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

  useInLandIt: 'Every economics answer involves scarcity and opportunity cost – even where no price or diagram is involved. Anchor responses to the NHS example: NICE\'s QALY threshold is the most explicit real-world expression of opportunity cost in UK public policy. Always state what is foregone, not just what is chosen.',

  focusInLandIt: {
    context: 'Use specific evidence – the £167bn budget, 7.7 million waiting list, and QALY threshold figures – to anchor your application to the real-world case, not just generic scarcity theory.',
    chain:   'State the chain explicitly: unlimited wants exceed finite resources → three economic questions must be answered (what, how, for whom) → every allocation has an opportunity cost equal to the next-best alternative foregone.',
    depends: 'Lead with the severity of the scarcity gap as your condition – the economic problem is always present but its intensity varies with productive capacity, technology, and political choices about funding.',
    judge:   'State a clear position (the economic problem is universal), use the mechanism (scarcity → choice → opportunity cost), add the condition (technology and economic system shape how severe and how visible the problem is), and acknowledge the honest limitation (the severity of scarcity is partly a political choice, not purely fixed by nature).'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   The Economic Problem: classify evidence on NHS resource allocation
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'The Economic Problem',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('chain'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether scarcity is an unavoidable feature of NHS resource allocation – or a problem that better funding could eliminate?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'NHS England operated with a budget of [[budget|£167 billion in 2023–24]] – the largest in the organisation\'s history – yet NHS waiting lists reached [[waiting|7.7 million patients]], the highest since records began, confirming that demand for healthcare consistently outstrips the resources available to meet it.',
      'NICE (National Institute for Health and Care Excellence) uses a [[qaly|cost-effectiveness threshold of ~£20,000–£30,000 per QALY]] to approve drugs for NHS use – making the opportunity cost of every treatment decision explicit in institutional policy.',
      'Comparative data show that [[spending|UK NHS spending per capita is below peer European systems]] (Germany, France, Netherlands) – raising the question of whether NHS scarcity reflects fixed resource constraints or political choices about taxation and public spending.',
      'The NHS faces a projected [[workforce|shortfall of 264,000 clinical staff by 2036–37]] (NHS Long Term Workforce Plan 2023), demonstrating that scarcity is not purely financial – labour is a scarce factor of production even within the world\'s largest employer in Europe.',
      'In 2022–23, NHS spending of £10.8 billion on cancer treatments [[crowding|crowded out investment in mental health services and preventive care]], illustrating the three central economic questions – what, how, and for whom – in real allocation decisions.'
    ],

    evidence: {
      'budget':    { text: '£167 billion in 2023–24' },
      'waiting':   { text: '7.7 million patients' },
      'qaly':      { text: 'cost-effectiveness threshold of ~£20,000–£30,000 per QALY' },
      'spending':  { text: 'UK NHS spending per capita is below peer European systems' },
      'workforce': { text: 'shortfall of 264,000 clinical staff by 2036–37' },
      'crowding':  { text: 'crowded out investment in mental health services and preventive care' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports – scarcity is unavoidable',        tone: 'green', icon: '↑' },
      { id: 'complicates', label: 'Complicates the case either way',            tone: 'blue',  icon: '?' },
      { id: 'against',     label: 'Argues scarcity is a political choice',      tone: 'pink',  icon: '↓' }
    ],

    correct: {
      'budget':    'supports',
      'waiting':   'supports',
      'qaly':      'supports',
      'spending':  'against',
      'workforce': 'supports',
      'crowding':  'supports'
    },

    explain: {
      'budget':    'Even at £167bn – the largest NHS budget ever – waiting lists hit a record high. This confirms that demand is effectively unlimited: more funding does not eliminate scarcity, it just shifts the frontier at which the constraint bites.',
      'waiting':   '7.7 million waiting patients alongside a record budget illustrates the gap between unlimited wants and finite resources – the defining feature of the economic problem. The highest waiting list on record supports the claim that scarcity is structural, not incidental.',
      'qaly':      'The QALY threshold is an institutional expression of opportunity cost: every treatment approved at £30,000/QALY means the same funds cannot be used elsewhere. This makes the economic problem explicit in NHS decision-making – scarcity is built into the approval process.',
      'spending':  'Lower per-capita spending than Germany, France, or the Netherlands suggests the severity of NHS scarcity is partly a political choice about tax levels and NHS funding, not purely a resource constraint. This complicates the claim that scarcity is entirely unavoidable – the frontier is not fixed.',
      'workforce': 'A projected 264,000 clinical staff shortfall shows that scarcity extends beyond finance to labour as a factor of production. Even if the NHS budget doubled, shortages of doctors and nurses would remain – supporting the view that scarcity is multi-dimensional and unavoidable.',
      'crowding':  'Cancer spending of £10.8bn explicitly crowded out mental health and prevention – a real-world instance of the economic problem in action. One allocation decision directly forecloses others, making opportunity cost visible in NHS budget choices.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"NHS waiting lists of 7.7 million alongside a record £167bn budget confirm that demand for healthcare is effectively unlimited – scarcity is structural, not a funding gap. The QALY threshold makes opportunity cost explicit in policy: every approved treatment forecloses alternatives. The complication is that UK per-capita NHS spending is lower than peer European systems – so the severity of the economic problem partly reflects political choices, not purely fixed resource constraints."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'            },
      { icon: '❓', text: 'Ask which details change the conclusion'          },
      { icon: '⚖️', text: 'Separate supporting evidence from complications'  }
    ]
  }
};

/* ---- link-depends.js ---- */
/* ============================================================
   ECONOS – Link It · It Depends On station data
   The Economic Problem: evaluate a scarcity and opportunity cost claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'The Economic Problem',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether the economic problem is more or less acute.',
  nextUrl:     TopicLoader.routes.link('judge'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 2,

  scenarios: [
    {
      id: 'econ-problem-severity',
      claim: {
        icon:   '⚕️',
        prompt: 'Claim',
        text:   'Scarcity makes the economic problem unavoidable in every society.'
      },
      factors: [
        {
          id:    'severity-scarcity',
          icon:  '📊',
          label: 'Severity of scarcity relative to wants',
          why:   'The economic problem is more acute when the gap between available resources and desired outputs is larger. UK NHS waiting lists (7.7m) vs a system with higher funding (Germany) illustrate that political choices affect the severity of scarcity – not just technology or population. Scarcity is always present but its intensity varies across systems.'
        },
        {
          id:    'technology',
          icon:  '🔬',
          label: 'State of technology and productive capacity',
          why:   'Advanced technology shifts the PPF outward – more can be produced from given resources. But technology also expands wants (new treatments, new devices) – so it may increase rather than reduce the economic problem. The net effect on scarcity depends on whether technology raises productive capacity faster than it expands human desires.'
        },
        {
          id:    'mixed-vs-command',
          icon:  '🏛️',
          label: 'How the economic system allocates scarce resources',
          why:   'Free markets use price signals to ration scarce goods – those willing and able to pay receive them. Command economies use central planning. Mixed economies (UK) use a combination. The mechanism for addressing scarcity differs, but no system eliminates it. The choice of mechanism determines who receives the scarce goods (for whom) and how efficiently they are produced.'
        },
        {
          id:    'public-vs-private',
          icon:  '⚕️',
          label: 'Whether goods are public, private or merit goods',
          why:   'Private goods are allocated through markets – price rations demand. Public goods cannot be withheld from non-payers. Merit goods (healthcare, education) are often provided publicly because market price would exclude those who need them most. The type of good determines which institution addresses scarcity and which trade-offs become explicit.'
        },
        {
          id:    'time-horizon',
          icon:  '⏳',
          label: 'Short-run vs long-run scarcity',
          why:   'Some scarcities are temporary – a shortage of PPE during COVID was resolved through supply chain expansion. Others are structural – the scarcity of NHS clinical staff reflects decades of undertraining. Long-run solutions (training more doctors) take years; short-run trade-offs (postponing non-urgent care) are immediate. The distinction affects what opportunity costs are most relevant.'
        },
        {
          id:    'preference-intensity',
          icon:  '❤️',
          label: 'Strength and distribution of individual preferences',
          why:   'The economic problem is more acute when preferences are strongly held and heterogeneous – each person prioritises differently, making collective allocation contentious. The NHS must weigh cancer treatment against mental health against preventive care – all strongly preferred by different groups. Where preferences are more homogeneous, allocation trade-offs are less contested.'
        },
        {
          id:    'political-economy',
          icon:  '🗳️',
          label: 'Political process for determining allocation',
          why:   'In democratic systems, the economic problem is partly a political problem: which trade-offs are politically acceptable? Cutting NHS cancer treatment to fund mental health would be politically contested even if QALYs were equated. The visibility and political salience of opportunity costs affects which trade-offs are actually made.'
        },
        {
          id:    'sustainability',
          icon:  '🌍',
          label: 'Environmental limits and natural resource scarcity',
          why:   'Human wants include not only current consumption but future security. Environmental scarcity (water, clean air, carbon budget) adds a sustainability dimension to the economic problem: using resources for current production creates opportunity costs for future generations. The economic problem is not just about allocating today\'s stock but about sustaining tomorrow\'s.'
        }
      ],
      modelRanking: ['severity-scarcity', 'technology', 'mixed-vs-command'],
      judgement: '"Whether scarcity is most severe depends on the gap between productive capacity and wants – which technology shapes on both sides simultaneously. How scarcity is addressed depends on the economic system: markets use price (efficient but inequitable), command economies use planning (equitable intent but information-poor), and mixed economies combine both. The economic problem is most analytically visible when opportunity costs are made explicit – as NICE\'s QALY threshold does for NHS decisions."'
    }
  ]
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for basic_econ_problem
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'The Economic Problem',
  estTime: '15–20 minutes',
  goal:    'Bridge your knowledge of scarcity and opportunity cost into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "You've locked in scarcity, opportunity cost, and the three fundamental economic questions. Now train the skills examiners reward – applying the framework to a real context, building a watertight causal chain from unlimited wants to allocation decisions, and reaching a supported judgement about whether the economic problem is more or less severe in different systems.",
    heroKey: 'heroScarcity',

    doInThis: 'Four short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Apply scarcity and opportunity cost to a real-world resource allocation decision',
      'Build the causal chain from unlimited wants to the three economic questions',
      'Evaluate the conditions under which opportunity cost is most and least visible',
      'Construct a judgement about whether the economic problem is more or less severe in mixed economies'
    ],
    tip: "These steps are cognitive drills – same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context', skill: 'Application', sub: 'Read an extract and judge which evidence changes the answer.', href: TopicLoader.routes.link('context'), state: 'available' },
      { num: 2, name: 'Build the chain', skill: 'Analysis', sub: 'Order or fill the steps in a reasoning chain.', href: TopicLoader.routes.link('chain'), state: 'available' },
      { num: 3, name: 'It depends on', skill: 'Evaluation', sub: 'Rank the factors that most change the answer.', href: TopicLoader.routes.link('depends'), state: 'available' },
      { num: 4, name: 'Make the judgement', skill: 'Evaluation', sub: 'Synthesise everything into an exam-quality judgement.', href: TopicLoader.routes.link('judge'), state: 'available' }
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
   The Economic Problem: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'The Economic Problem',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.routes.link('complete'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 3,

  wgll: [
    { icon: '🎯', text: 'Take a clear position'  },
    { icon: '🔗', text: 'Use the mechanism'       },
    { icon: '➕', text: 'Add a condition'         },
    { icon: '💬', text: 'Explain the limitation'  }
  ],

  scenarios: [
    {
      id: 'econ-problem-judgement',
      claim: {
        icon:   '⚕️',
        prompt: 'Claim',
        text:   'Scarcity makes the economic problem unavoidable – all societies must prioritise among competing wants, and every choice involves an opportunity cost.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green', icon: '🔍', title: 'Context',       text: 'NHS budget £167bn; waiting lists 7.7m (record); NICE QALY threshold £20k–£30k; workforce shortfall 264k by 2036.' },
        { id: 'chain',   tone: 'amber', icon: '🔗', title: 'Chain',         text: 'Unlimited wants + finite resources → WHAT, HOW, FOR WHOM decisions → opportunity cost of every choice (QALY threshold makes this explicit).' },
        { id: 'depends', tone: 'blue',  icon: '⚖️', title: 'It depends on', text: 'Severity depends on gap between capacity and wants; technology both widens and narrows it; economic system determines how trade-offs are made.' }
      ],
      cloze: 'Scarcity arises because [1] are unlimited while the resources available to satisfy them are [2]. This makes the economic problem [3]: every society – whether market, command or mixed – must answer the three central questions of what, how and [4]. Every allocation decision involves an opportunity cost – the value of the [5] alternative foregone. The NHS QALY threshold makes opportunity cost explicit: every drug approved means [6] not funded. The severity of the economic problem depends partly on [7]: new medical technologies expand both productive capacity and human wants simultaneously. In a mixed economy like the UK, scarcity is addressed through a combination of [8] and government allocation – but neither eliminates the fundamental trade-off.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-wants',     text: 'human wants',       correct: true  },
            { id: 'b1-outputs',   text: 'resource outputs',  correct: false },
            { id: 'b1-budgets',   text: 'government budgets', correct: false },
            { id: 'b1-prices',    text: 'consumer prices',   correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-finite',    text: 'finite',            correct: true  },
            { id: 'b2-unlimited', text: 'unlimited',         correct: false },
            { id: 'b2-elastic',   text: 'elastic',           correct: false },
            { id: 'b2-free',      text: 'freely available',  correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-universal', text: 'universal and unavoidable',                  correct: true  },
            { id: 'b3-temp',      text: 'temporary',                                 correct: false },
            { id: 'b3-command',   text: 'relevant only in command economies',         correct: false },
            { id: 'b3-growth',    text: 'solved by economic growth',                  correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-forwhom',   text: 'for whom to produce',  correct: true  },
            { id: 'b4-when',      text: 'when to produce',      correct: false },
            { id: 'b4-whether',   text: 'whether to produce',   correct: false },
            { id: 'b4-why',       text: 'why to produce',       correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-nextbest',  text: 'next-best',      correct: true  },
            { id: 'b5-worst',     text: 'worst',          correct: false },
            { id: 'b5-cheapest',  text: 'cheapest',       correct: false },
            { id: 'b5-popular',   text: 'most popular',   correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-other',     text: 'other treatments are',   correct: true  },
            { id: 'b6-tax',       text: 'tax revenue is',         correct: false },
            { id: 'b6-cs',        text: 'consumer surplus is',    correct: false },
            { id: 'b6-profit',    text: 'producer profit is',     correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-tech',      text: 'technology',       correct: true  },
            { id: 'b7-inflation', text: 'causes-of-inflation-and-deflation',        correct: false },
            { id: 'b7-monetary',  text: 'monetary policy',  correct: false },
            { id: 'b7-fx',        text: 'exchange rates',   correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-price',     text: 'price signals',         correct: true  },
            { id: 'b8-subsidy',   text: 'subsidy mechanisms',    correct: false },
            { id: 'b8-trade',     text: 'trade agreements',      correct: false },
            { id: 'b8-tax',       text: 'tax thresholds',        correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-growth',   text: 'Economic growth permanently solves the economic problem by eliminating scarcity',                                              correct: false },
          { id: 'op-universal', text: 'The economic problem is universal – scarcity and opportunity cost exist in all economies regardless of system or affluence', correct: true  },
          { id: 'op-command',  text: 'Only command economies face the economic problem – markets solve scarcity automatically',                                      correct: false },
          { id: 'op-poor',     text: 'The economic problem only applies to poor countries – wealthy nations have no meaningful scarcity',                            correct: false }
        ]
      },
      examBridge: '"NHS resource allocation demonstrates that scarcity is universal and unavoidable: a £167bn budget cannot meet 7.7 million waiting patients simultaneously. NICE\'s QALY threshold makes opportunity cost explicit – every approved treatment forecloses alternatives. Technology complicates the picture: it raises productive capacity but expands wants (new treatments, precision medicine) simultaneously. The economic problem cannot be permanently solved – it can only be managed through allocation mechanisms that minimise waste and distribute trade-offs fairly."'
    }
  ]
};

