/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   Specialisation & Money: build the division of labour → money chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Specialisation & Money',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('predict'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'predict', label: 'Predict outcome', href: TopicLoader.routes.link('predict') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'specialisation-money-mechanism',
      scenario: {
        icon:  '🏭',
        label: 'Scenario',
        text:  'Adam Smith\'s workers divide pin production into 18 separate tasks. Each worker repeats one task all day. Consider what follows from this arrangement for productivity, output, exchange and the need for money.'
      },
      anchor: 'Specialisation raises labour productivity via practice and tools.',
      tiles: [
        {
          id:  'step-surplus',
          icon: '📦',
          text: 'Productivity gains create output surpluses beyond own consumption',
          pos:  0
        },
        {
          id:  'step-barter',
          icon: '🔄',
          text: 'Surplus must be exchanged – barter blocked by double coincidence',
          pos:  1
        },
        {
          id:  'step-money',
          icon: '💷',
          text: 'Money fixes this – medium of exchange, store of value, unit of account',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🤝',
          text: 'Workers trade directly without any medium of exchange required',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '📉',
          text: 'Specialisation cuts output as workers lose general skills',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏛️',
          text: 'Government must organise distribution whenever specialisation occurs',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'When each worker repeats a single task, productivity rises through learning-by-doing, specialised tools and no time lost switching between operations. Each worker can produce far more than they personally need – generating a surplus. It is this surplus that creates the need and the opportunity for exchange.'
        },
        {
          pos:  1,
          text: 'Surplus output is only valuable if it can be exchanged for the other goods the worker needs. Under barter, exchange requires a double coincidence of wants: the pin-maker must find someone who both has what the pin-maker wants and simultaneously wants pins. In a complex economy with thousands of specialised producers, this condition is almost never met – barter breaks down.'
        },
        {
          pos:  2,
          text: 'Money solves the double coincidence problem. As a medium of exchange, it allows the pin-maker to sell pins for money and use that money to buy bread, steel or housing from anyone. As a store of value, it allows the timing of sales and purchases to be separated. As a unit of account, it allows the relative value of thousands of goods to be compared. Without money, the gains from specialisation cannot be realised through exchange.'
        }
      ],
      examBridge: '"Specialisation raises labour productivity through practice and repetition, generating output surpluses beyond a worker\'s own needs. These surpluses must be exchanged, but barter is impractical in any complex economy because it requires a double coincidence of wants. Money solves this by serving as medium of exchange, store of value and unit of account – making the gains from specialisation realisable through large-scale exchange."',

      prompts: [
        'Why does specialisation lead to a surplus that needs to be exchanged?',
        'Why does barter fail to support a specialised economy?',
        'How does money solve the problem that barter cannot?'
      ],
      modelAnswers: [
        'When workers specialise in a single task, productivity rises far above subsistence – a pin-maker produces thousands of pins but needs only a handful. The surplus must be traded for other goods the worker does not produce. Specialisation creates the imperative for exchange.',
        'Barter requires both parties in any transaction to want exactly what the other offers at exactly the same time. In an economy with thousands of specialised producers, this double coincidence of wants almost never occurs. A pin-maker who wants bread must find a baker who wants pins – an increasingly unlikely match as the economy becomes more complex.',
        'Money separates the act of selling from the act of buying. The pin-maker sells pins for money, then spends that money on bread whenever convenient. Money also acts as a common unit of account, making it possible to price thousands of goods against one another and enabling the large-scale trade networks that support modern supply chains.'
      ],
      vocab: ['division of labour', 'specialisation', 'surplus', 'barter', 'double coincidence of wants', 'medium of exchange', 'store of value', 'unit of account', 'productivity', 'supply chain']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Specialisation & Money
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Specialisation & Money',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'predict', label: 'Predict the Outcome', max: 4, color: '#7c3aed' },
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
      { min: 60, text: 'Good – review the challenging evidence' },
      { min: 0,  text: 'Evidence classification needs work' }
    ],
    chain: [
      { min: 100, text: 'Perfect causal chain' },
      { min: 50,  text: 'Clear causality – check the missing step' },
      { min: 0,   text: 'The causal chain needs work' }
    ],
    predict: [
      { min: 80, text: 'Strong outcome prediction' },
      { min: 55, text: 'Good – check the direction of one variable' },
      { min: 0,  text: 'Prediction skills need more practice' }
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

  useInLandIt: 'Specialisation raises labour productivity through the division of labour, generating output surpluses that require exchange. Money solves the double coincidence of wants problem, enabling large-scale supply chains. The gains from specialisation depend on task divisibility, human capital and functioning exchange systems – and deep specialisation creates systemic vulnerability when any link in the chain fails.',

  focusInLandIt: {
    context: 'Use specific examples – the pin factory, the 30,000-component car, Toyota\'s shutdown – to anchor your application to real-world evidence rather than abstract theory.',
    chain:   'State the chain explicitly: specialisation → surplus output → need for exchange → double coincidence of wants problem → money as solution → large-scale supply chains possible.',
    predict: 'Apply the specialisation → surplus → money chain to novel scenarios. When a trade deal breaks down or barter fails, trace the mechanism through to the impact on output, exchange and living standards.',
    depends: 'Lead with task divisibility as your condition – if the production process cannot be subdivided, the division of labour offers no gains regardless of how skilled or motivated workers are.',
    judge:   'State a clear position, use the mechanism (division of labour → surplus → money → exchange), add the condition (task divisibility / human capital / exchange systems), and acknowledge the limitation (systemic vulnerability from interdependence).'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   Specialisation & Money: classify evidence on the claim that
   specialisation raises productive efficiency but requires money
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Specialisation & Money',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('chain'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'predict', label: 'Predict outcome', href: TopicLoader.routes.link('predict') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether the claim holds – that specialisation raises productive efficiency but requires money to function?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'Adam Smith\'s pin factory demonstrated that [[pin-factory|18 pin operations let 10 workers produce 48,000 pins per day]] – compared with perhaps 20 if each worked alone. The division of labour raised output per worker dramatically through practice, specialisation of tools, and the elimination of time lost switching tasks.',
      'Modern UK manufacturing extends this logic across global supply chains. [[car-components|A UK-built car needs over 30,000 components, most imported]], with suppliers themselves specialising in single sub-assemblies such as semiconductors, brake systems or wiring looms.',
      'However, this interdependence carries risk. [[toyota-shutdown|Toyota\'s UK plants halted production during the 2021 semiconductor shortage]], demonstrating that deep specialisation creates vulnerability when any link in the chain is disrupted.',
      'Exchange at this scale is only possible because money performs its three core functions. [[uk-trade|The UK trades over £800 billion of goods and services per year]] – a volume of exchange that would be impossible under barter, which requires a double coincidence of wants between every pair of trading partners.',
      'Without money, [[barter-constraint|a car-seat maker wanting steel needs a steel producer who wants car seats]] – a condition so restrictive that complex supply chains could not exist.'
    ],

    evidence: {
      'pin-factory':       { text: '18 pin operations let 10 workers produce 48,000 pins per day' },
      'car-components':    { text: 'A UK-built car needs over 30,000 components, most imported' },
      'toyota-shutdown':   { text: 'Toyota\'s UK plants halted production during the 2021 semiconductor shortage' },
      'uk-trade':          { text: 'The UK trades over £800 billion of goods and services per year' },
      'barter-constraint': { text: 'a car-seat maker wanting steel needs a steel producer who wants car seats' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the claim',    tone: 'green', icon: '↑' },
      { id: 'challenges',  label: 'Challenges the claim',  tone: 'pink',  icon: '↓' },
      { id: 'neither',     label: 'Neither',               tone: 'blue',  icon: '?' }
    ],

    correct: {
      'pin-factory':       'supports',
      'car-components':    'supports',
      'toyota-shutdown':   'challenges',
      'uk-trade':          'supports',
      'barter-constraint': 'supports'
    },

    explain: {
      'pin-factory':       'This is the classic evidence for the division of labour raising productivity. Outputper worker rises from ~2 to ~4,800 pins – a direct illustration that specialisation delivers productive efficiency gains.',
      'car-components':    'A modern car requiring 30,000+ imported components shows the depth and scale of specialisation in practice. This supports the claim that specialisation underpins modern large-scale production.',
      'toyota-shutdown':   'Plant shutdowns from a semiconductor shortage reveal a direct cost of deep specialisation – systemic interdependence creates fragility. This challenges the claim by showing that specialisation also creates vulnerability.',
      'uk-trade':          '£800bn in annual trade is the exchange system that specialisation depends on. Money makes this scale of exchange possible – directly supporting the claim that specialisation requires a medium of exchange to realise productivity gains.',
      'barter-constraint': 'The double coincidence of wants problem shows precisely why barter cannot support specialised economies. This supports the claim that money is a necessary condition for specialisation to deliver its efficiency benefits.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The pin factory and the 30,000-component car supply chain both confirm that specialisation dramatically raises productive efficiency. However, the Toyota shutdown shows that deep interdependence creates systemic vulnerability – the gains from specialisation depend on supply chains remaining intact. The double coincidence of wants problem confirms that money is not optional: without it, the scale of exchange needed to realise the gains from specialisation could not exist."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'             },
      { icon: '❓', text: 'Ask which details change the conclusion'           },
      { icon: '⚖️', text: 'Distinguish supporting evidence from challenges'   }
    ]
  }
};

/* ---- link-depends.js ---- */
/* ============================================================
   ECONOS – Link It · It Depends On station data
   Specialisation & Money: evaluate the claim that specialisation
   raises productivity
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Specialisation & Money',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether specialisation actually raises productivity.',
  nextUrl:     TopicLoader.routes.link('judge'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'predict', label: 'Predict outcome', href: TopicLoader.routes.link('predict') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'specialisation-productivity',
      claim: {
        icon:   '⚙️',
        prompt: 'Core claim',
        text:   'Specialisation raises productivity.'
      },
      factors: [
        {
          id:    'task-divisibility',
          icon:  '🔧',
          label: 'Task divisibility',
          why:   'Adam Smith\'s pin factory had 18 distinct operations. A bespoke artist cannot subdivide their work the same way. Productivity gains depend on how many separate tasks the production process can be broken into. Where production is inherently creative or varies from unit to unit, the division of labour offers limited gains.'
        },
        {
          id:    'human-capital',
          icon:  '🎓',
          label: 'Human capital',
          why:   'Workers need skills to specialise effectively. UK apprenticeship completion rates fell after 2017 reforms, reducing the skilled workforce available for specialised manufacturing roles. Without adequate training and education, workers may lack the foundation to perform a specialised task to the standard required – limiting productivity gains.'
        },
        {
          id:    'exchange-systems',
          icon:  '💱',
          label: 'Exchange systems',
          why:   'Specialisation only raises living standards if surplus output can be exchanged. In barter economies or during payment system failures (e.g., 2023 UK banking outages), the gains from specialisation cannot be realised. Without functioning money and trade networks, increased output per worker delivers no benefit to the worker who cannot swap their surplus for other goods.'
        },
        {
          id:    'market-size',
          icon:  '🌍',
          label: 'Size of the market',
          why:   'The division of labour is limited by the extent of the market (Smith). A small local market cannot absorb the output of a highly specialised producer. As markets expand through trade – nationally and internationally – greater specialisation becomes viable, amplifying productivity gains. Trade barriers that shrink accessible markets also shrink the scope for specialisation.'
        },
        {
          id:    'repetitive-strain',
          icon:  '⚠️',
          label: 'Alienation and worker motivation',
          why:   'Highly repetitive specialised tasks can lead to worker alienation, reduced motivation and higher absenteeism – especially in low-wage manufacturing. Marx identified this as a fundamental tension of the division of labour. Where morale effects are significant, the predicted productivity gains may be partially offset by lower effort and higher turnover.'
        },
        {
          id:    'technology',
          icon:  '🤖',
          label: 'Availability of technology',
          why:   'Specialisation and technology are complementary. Automated assembly lines allow specialised operations to run far faster and more accurately than human workers alone. Where firms cannot access modern capital equipment – due to cost or supply constraints – the productivity gains from specialisation are limited by the human pace of production.'
        }
      ],
      modelRanking: ['task-divisibility', 'human-capital', 'exchange-systems'],
      judgement: '"Whether specialisation raises productivity depends primarily on whether the production process is sufficiently divisible into distinct tasks – if it cannot be subdivided, there are no gains to capture. Where task divisibility exists, the extent of the gain depends on the quality of human capital available to perform specialised roles. Finally, even strong productivity gains remain unrealised if functioning exchange systems – money and trade networks – do not exist to allow surplus output to be traded for other goods."'
    }
  ]
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for specialisation_money
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Specialisation & Money',
  estTime: '12–18 minutes',
  goal:    'Bridge your knowledge of specialisation and money into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "You've locked in how the division of labour raises productivity and why money is needed to make exchange work. Now train the skills examiners reward – applying the framework to a real-world supply chain, building the watertight specialisation → surplus → exchange → money chain, and reaching a supported judgement on whether specialisation and money are the foundation of modern prosperity.",
    heroKey: 'heroBars',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use a real UK supply-chain scenario to classify evidence on specialisation and exchange',
      'Build the causal chain from division of labour through to the need for money',
      'Predict the outcome of supply chain disruptions and barter failures using the mechanism',
      'Evaluate the key conditions that determine whether specialisation raises productivity',
      'Reach a supported judgement on the claim that specialisation and money underpin modern prosperity'
    ],
    tip: "These steps are cognitive drills – same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context', skill: 'Application', sub: 'Read an extract and judge which evidence changes the answer.', href: TopicLoader.routes.link('context'), state: 'available' },
      { num: 2, name: 'Build the chain', skill: 'Analysis', sub: 'Order or fill the steps in a reasoning chain.', href: TopicLoader.routes.link('chain'), state: 'available' },
      { num: 3, name: 'Predict outcome', skill: 'Analysis', sub: 'Predict how the market or economy will respond.', href: TopicLoader.routes.link('predict'), state: 'available' },
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
   Specialisation & Money: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Specialisation & Money',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.routes.link('complete'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'predict', label: 'Predict outcome', href: TopicLoader.routes.link('predict') },
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
      id: 'specialisation-money-judgement',
      claim: {
        icon:   '⚙️',
        prompt: 'Overall claim',
        text:   'Specialisation and the use of money are the foundation of modern economic prosperity.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context analysis',  text: 'You found that specialisation raises productivity and enables large-scale production, but also creates dependency on exchange systems and money.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'The causal chain',  text: 'Specialisation → surplus output → need for exchange → money as solution to double coincidence of wants → enables further specialisation.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on…',   text: 'Productivity gains depend on task divisibility, human capital quality, and the existence of functioning exchange infrastructure.' }
      ],
      cloze: 'Overall, specialisation and money are [1] of modern economic prosperity because the division of labour raises [2] dramatically – as Smith\'s pin factory demonstrated – generating [3] beyond individual consumption needs. Money resolves the [4] problem that would otherwise prevent this surplus from being exchanged, allowing complex [5] to form across national and global markets. However, the gains from specialisation depend critically on whether tasks are [6] and whether adequate [7] exists. Furthermore, deep specialisation creates systemic [8] – as Toyota\'s UK shutdown in 2021 showed – meaning prosperity built on specialisation is conditional on supply chains remaining intact.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-foundation',  text: 'the foundation',          correct: true  },
            { id: 'b1-irrelevant',  text: 'largely irrelevant',       correct: false },
            { id: 'b1-obstacle',    text: 'an obstacle',              correct: false },
            { id: 'b1-automatic',   text: 'an automatic guarantee',   correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-labour-prod', text: 'labour productivity',      correct: true  },
            { id: 'b2-inflation',   text: 'the inflation rate',       correct: false },
            { id: 'b2-trade-def',   text: 'the trade deficit',        correct: false },
            { id: 'b2-taxation',    text: 'government tax revenue',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-surplus',     text: 'output surpluses',         correct: true  },
            { id: 'b3-debt',        text: 'national debt',            correct: false },
            { id: 'b3-shortages',   text: 'supply shortages',         correct: false },
            { id: 'b3-inflation',   text: 'inflationary pressure',    correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-double',      text: 'double coincidence of wants', correct: true  },
            { id: 'b4-moral',       text: 'moral hazard',               correct: false },
            { id: 'b4-adverse',     text: 'adverse selection',          correct: false },
            { id: 'b4-free-rider',  text: 'free-rider',                 correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-chains',      text: 'supply chains',             correct: true  },
            { id: 'b5-cartels',     text: 'producer cartels',          correct: false },
            { id: 'b5-monopolies',  text: 'natural monopolies',        correct: false },
            { id: 'b5-externality', text: 'negative externalities',    correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-divisible',   text: 'sufficiently divisible',   correct: true  },
            { id: 'b6-automated',   text: 'fully automated',          correct: false },
            { id: 'b6-exported',    text: 'exported overseas',        correct: false },
            { id: 'b6-subsidised',  text: 'government-subsidised',    correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-humancap',    text: 'human capital',             correct: true  },
            { id: 'b7-gdp',         text: 'GDP growth',                correct: false },
            { id: 'b7-taxation',    text: 'progressive taxation',      correct: false },
            { id: 'b7-regulation',  text: 'financial regulation',      correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-vulner',      text: 'vulnerability',             correct: true  },
            { id: 'b8-inflation',   text: 'inflationary pressure',     correct: false },
            { id: 'b8-efficiency',  text: 'productive efficiency',     correct: false },
            { id: 'b8-revenue',     text: 'tax revenue',               correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-agree',    text: 'Largely agree – specialisation and money are mutually reinforcing and together explain the scale of modern production',                                           correct: true  },
          { id: 'op-partial',  text: 'Partially agree – specialisation raises productivity but money\'s role is overstated; trade credit and digital payment alternatives exist',                    correct: false },
          { id: 'op-disagree', text: 'Largely disagree – the claim ignores problems like structural unemployment from over-specialisation and vulnerability of global supply chains',                correct: false },
          { id: 'op-none',     text: 'Neither agree nor disagree – the evidence is too mixed to reach a clear verdict',                                                                              correct: false }
        ]
      },
      examBridge: '"Specialisation and money are mutually reinforcing foundations of modern prosperity: the division of labour raises labour productivity dramatically, generating surpluses that can only be realised through exchange – and money makes large-scale exchange possible by eliminating the double coincidence of wants. However, the gains are conditional on task divisibility, human capital quality, and functioning exchange infrastructure; and deep specialisation creates systemic vulnerability, as demonstrated by the Toyota shutdown during the 2021 semiconductor shortage."'
    }
  ]
};

/* ---- link-predict.js ---- */
/* ============================================================
   ECONOS – Link It · Predict the Outcome station data
   Specialisation & Money: trade, comparative advantage and exchange
   ============================================================ */

window.ECONOS_LINK_PREDICT = {
  topic:   'Specialisation & Money',
  backUrl: TopicLoader.routes.link('chain'),
  nextUrl: TopicLoader.routes.link('depends'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'predict', label: 'Predict outcome', href: TopicLoader.routes.link('predict') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 2,

  eyebrow:     'Predict the Outcome',
  instruction: 'For each scenario, predict which direction each variable will move. Think carefully about how specialisation and trade create winners and losers even when total output rises.',

  scenarios: [
    {
      id: 'spec-trade-deal',
      icon: '🚢',
      title: 'UK signs a trade deal removing tariffs on imported car parts',
      setup: 'The UK signs a free trade agreement with South Korea, removing all tariffs on imported car components. Previously a 10% tariff protected UK parts manufacturers. UK car assemblers can now buy Korean parts at 20% lower cost. Assume UK car demand is unchanged.',
      variables: [
        {
          id: 'parts_producers',
          label: 'UK car parts manufacturers (output and employment)',
          correct: 'decrease',
          reason: 'UK parts makers now face direct competition from cheaper Korean imports. The price of imported parts falls by 20%, which UK manufacturers cannot match. Some UK parts factories will close or downsize – output and employment in the UK parts sector falls. This is the cost side of comparative advantage: the UK has a comparative disadvantage in parts production relative to South Korea.'
        },
        {
          id: 'assembly_costs',
          label: 'Costs of UK car assembly firms',
          correct: 'decrease',
          reason: 'UK car assemblers (like Jaguar Land Rover, Nissan Sunderland) can now source components 20% more cheaply. Their input costs fall, improving profit margins or allowing them to cut prices. This is the gain from trade: the UK concentrates on assembly (where it has comparative advantage) and imports parts (where it has comparative disadvantage).'
        },
        {
          id: 'car_prices',
          label: 'Price of UK-assembled cars for consumers',
          correct: 'decrease',
          reason: 'With input costs falling, competition among assemblers is likely to drive final car prices down – passing some of the cost saving to consumers. The extent of the price fall depends on the PED for cars and the degree of competition in the market. This is the consumer benefit of international specialisation.'
        },
        {
          id: 'total_employment',
          label: 'Total UK automotive employment (parts + assembly)',
          correct: 'ambiguous',
          reason: 'This is genuinely uncertain. Jobs are lost in parts manufacturing (comparative disadvantage sector) but may be gained in assembly (comparative advantage sector) as lower costs make UK-assembled cars more competitive. The net effect depends on whether assembly gains exceed parts losses – and the speed of adjustment. In the short run, job losses in parts may dominate. In the long run, lower costs may support more assembly jobs. This is why trade liberalisation is controversial: gains are diffuse, losses are concentrated.'
        }
      ],
      examBridge: '"Removing tariffs on car parts allows the UK to import at comparative advantage prices, reducing assembly costs and consumer prices. But parts manufacturers face structural unemployment as their sector loses to cheaper imports. Aggregate welfare rises (more total output at lower cost) but distributional consequences are unequal – workers in the losing sector bear concentrated costs while consumers gain diffuse benefits."'
    },
    {
      id: 'spec-barter-breakdown',
      icon: '🔄',
      title: 'A remote island economy attempts to operate without money',
      setup: 'A thought experiment: 500 people on an island each specialise in producing one good (fishing, farming, building, medicine etc.). They attempt to exchange through barter rather than using money as a medium of exchange. Consider what happens to trade, specialisation, and living standards.',
      variables: [
        {
          id: 'exchange_volume',
          label: 'Volume of exchange between specialists',
          correct: 'decrease',
          reason: 'Barter requires a "double coincidence of wants": both parties must want exactly what the other produces at the same time. A fisherman wanting medicine must find a doctor who wants fish – at precisely the right moment. This search cost is enormous with 500 specialists. Most potential trades fail to occur. Exchange volume collapses compared to a money economy where any surplus can be sold for money and money used to buy anything.'
        },
        {
          id: 'specialisation_depth',
          label: 'Degree of specialisation in the economy',
          correct: 'decrease',
          reason: 'When exchange is difficult, specialisation becomes risky. If a doctor cannot exchange medical services for food, they must grow their own food – reducing time spent on medicine. Specialists retreat toward self-sufficiency. The gains from the division of labour depend on the ability to exchange surplus production: without money, specialisation becomes less feasible and depth of specialisation falls.'
        },
        {
          id: 'living_standards',
          label: 'Average living standards across the island',
          correct: 'decrease',
          reason: 'Specialisation raises productivity – a specialist doctor is far more productive than a farmer who occasionally treats illness. Without money, specialisation unravels, productivity falls, and total output declines. This is Adam Smith\'s insight: the division of labour is limited by the extent of the market. Money expands the market by eliminating the double coincidence problem – without it, the "market" shrinks and living standards fall.'
        },
        {
          id: 'money_emergence',
          label: 'Likelihood that some good spontaneously becomes money',
          correct: 'increase',
          reason: 'History shows that money tends to emerge spontaneously in barter economies. People quickly discover that holding a widely-accepted good (shells, gold, cigarettes in POW camps) makes exchange much easier. A commodity that is durable, divisible, portable and widely desired becomes a medium of exchange – proto-money. The barter failure creates the incentive to adopt money: its emergence is likely, illustrating why all known complex economies have used money.'
        }
      ],
      examBridge: '"Barter requires a double coincidence of wants, making exchange costly and unreliable. As trade volume falls, rational specialists retreat toward self-sufficiency – the division of labour unravels. Total productivity and living standards fall. Money solves this by acting as a medium of exchange, store of value and unit of account – enabling complex specialisation by eliminating search costs and the double coincidence requirement."'
    }
  ]
};

