/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   Economic Systems: build the price mechanism → efficiency chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Economic Systems',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('extract'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.routes.link('extract') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'free-market-efficiency',
      scenario: {
        icon:  '🏪',
        label: 'Scenario',
        text:  'A country transitions from a command economy (where the state sets prices and allocates goods) to a free market system. Consider what happens to information, incentives and resource allocation.'
      },
      anchor: 'Prices transmit scarcity to millions of decision-makers at once.',
      tiles: [
        {
          id:  'step-profit',
          icon: '💰',
          text: 'Profit incentive drives cost-cutting and innovation → productive efficiency',
          pos:  0
        },
        {
          id:  'step-sovereignty',
          icon: '🛒',
          text: 'Consumer sovereignty steers resources to valued goods → allocative gain',
          pos:  1
        },
        {
          id:  'step-hayek',
          icon: '📚',
          text: 'Hayek\'s knowledge problem: planners cannot replace price signals',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🏛️',
          text: 'Planners use queuing and rationing to match prices at lower cost',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '📉',
          text: 'Rising prices reduce welfare, so markets allocate away from valued goods',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🤝',
          text: 'Free-market sovereignty is undermined by firm advertising creating demand',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'When prices reflect scarcity, firms that produce what consumers value at lower cost earn higher profits. This profit signal attracts resources into high-value activities and drives firms to cut costs and innovate – increasing productive efficiency. Command economies lack this mechanism: state-owned firms face no profit incentive and inefficiency goes unrewarded.'
        },
        {
          pos:  1,
          text: 'In a free market, consumer spending acts as a vote for resources. If consumers value smartphones more than typewriters, higher prices for smartphones attract resources into that sector. Allocative efficiency is achieved when production reflects consumer preferences – which the price mechanism delivers automatically through the signalling function of prices.'
        },
        {
          pos:  2,
          text: 'Hayek\'s knowledge problem is the fundamental case against central planning. The information needed to allocate resources efficiently – preferences, costs, local conditions – is dispersed across millions of individuals and changes constantly. No central planner can collect and process this information as effectively as the price mechanism, which aggregates it spontaneously. This is why command economies produce systematic shortages and surpluses.'
        }
      ],
      examBridge: '"In a free market, the price mechanism transmits scarcity information automatically, creating a profit incentive for productive efficiency and allowing consumer sovereignty to guide allocative decisions. Central planning fails because – as Hayek argued – the dispersed, constantly changing information needed for efficient allocation cannot be processed by any central authority: price signals perform this function without deliberate coordination."',

      prompts: [
        'How does the price mechanism transmit information that central planners cannot replicate?',
        'Why does the profit incentive lead to greater productive efficiency in free markets?',
        'What is Hayek\'s knowledge problem and why does it explain command economy failure?'
      ],
      modelAnswers: [
        'Prices aggregate information from millions of individual decisions about supply and demand. A rise in the price of a good signals that it is becoming scarcer – attracting producers and encouraging consumers to economise – without any central instruction. Central planners would need to collect, process and act on this information manually for every good and service, which is practically impossible.',
        'In a free market, firms that reduce costs or improve quality earn higher profits and attract investment. Firms that are inefficient face losses and exit the market. This competitive pressure continuously drives down costs and encourages innovation. State firms in command economies face no such incentive – losses are covered by the state and there is no reward for efficiency improvements.',
        'The knowledge problem is Hayek\'s observation that the information needed for efficient resource allocation is dispersed, tacit and constantly changing – it exists in the minds and actions of millions of individuals. No central planner can acquire, process or act on this information as efficiently as the price mechanism, which aggregates it through the uncoordinated decisions of buyers and sellers. Command economies therefore produce chronic misallocation, shortages and queues.'
      ],
      vocab: ['price mechanism', 'profit incentive', 'productive efficiency', 'allocative efficiency', 'consumer sovereignty', 'knowledge problem', 'central planning', 'signalling function', 'scarcity', 'market failure']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Economic Systems
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Economic Systems',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'extract', label: 'Read the Extract',   max: 3, color: '#8B5CF6' },
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
    extract: [
      { min: 80, text: 'Strong extract reading' },
      { min: 55, text: 'Good – check your evidence application' },
      { min: 0,  text: 'Extract analysis needs more attention' }
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

  useInLandIt: 'Free markets use the price mechanism to allocate resources efficiently through the profit incentive and consumer sovereignty – but market failures in public goods, externalities and information-asymmetry sectors mean state intervention is needed. A mixed economy like the UK\'s combines both, achieving better outcomes than either extreme. The efficiency advantage of free markets depends critically on the extent of market failures, secure property rights, and a sufficient income distribution.',

  focusInLandIt: {
    context: 'Use specific comparative data – North Korea\'s $1,800 GDP per capita versus South Korea, Cuba\'s healthcare outcomes, the NHS efficiency evidence – to anchor your application in real-world evidence rather than abstract theory.',
    chain:   'State the chain explicitly: price signals → profit incentive → productive efficiency; consumer sovereignty → allocative efficiency; Hayek\'s knowledge problem → why central planning fails to replicate this.',
    extract: 'Use the North Korea/South Korea divergence and Cuba/UK comparison from the extract to apply the free market vs command economy framework. When citing comparative evidence, always explain the mechanism – not just the statistic.',
    depends: 'Lead with market failure extent as your condition – where public goods, externalities or information asymmetry are significant, the price mechanism systematically fails and the efficiency case for free markets collapses in that sector.',
    judge:   'State a clear position, use the mechanism (price mechanism → efficiency), add the condition (market failures / property rights / income distribution), and acknowledge the normative dimension – the optimal mix between markets and state depends on social values, not just technical efficiency.'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   Economic Systems: classify evidence on the claim that free markets
   allocate resources more efficiently than command economies
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Economic Systems',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('chain'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.routes.link('extract') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether free markets allocate resources more efficiently than command economies?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'Cuba operates a near-comprehensive command economy in which the state directs resource allocation centrally. Despite achieving [[cuba-literacy|near-universal literacy and free healthcare at the point of use]], Cuba\'s GDP per capita stood at approximately $9,000 (PPP) in 2024, and the country faces persistent [[cuba-shortages|severe consumer goods shortages, with queuing as the main allocation method]] for basic necessities.',
      'North Korea represents the most extreme surviving command economy. With [[north-korea-gdp|an estimated GDP per capita of approximately $1,800 (PPP)]], it ranks among the poorest economies in the world – a stark contrast to South Korea\'s market-oriented economy and GDP per capita exceeding $50,000.',
      'The United Kingdom operates a mixed economy: the price mechanism allocates resources in the private sector (over 80% of GDP), while the state provides the NHS and a welfare safety net. [[uk-nhs|NHS health outcomes match many higher-spending market systems]], suggesting that state provision can outperform markets in healthcare.',
      'In a hypothetical pure free market, [[price-mechanism|prices transmit scarcity to millions of decision-makers at once]], driving resources toward highest-valued uses without central coordination.',
      'China\'s "socialist market economy" uses [[china-hybrid|market pricing for consumer goods plus state ownership of key industries]], producing rapid growth while maintaining political control – demonstrating that hybrid systems can generate significant efficiency gains.'
    ],

    evidence: {
      'cuba-literacy':     { text: 'near-universal literacy and free healthcare at the point of use' },
      'cuba-shortages':    { text: 'severe consumer goods shortages, with queuing as the main allocation method' },
      'north-korea-gdp':   { text: 'an estimated GDP per capita of approximately $1,800 (PPP)' },
      'uk-nhs':            { text: 'NHS health outcomes match many higher-spending market systems' },
      'price-mechanism':   { text: 'prices transmit scarcity to millions of decision-makers at once' },
      'china-hybrid':      { text: 'market pricing for consumer goods plus state ownership of key industries' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the claim',    tone: 'green', icon: '↑' },
      { id: 'challenges',  label: 'Challenges the claim',  tone: 'pink',  icon: '↓' },
      { id: 'neither',     label: 'Neither',               tone: 'blue',  icon: '?' }
    ],

    correct: {
      'cuba-literacy':     'challenges',
      'cuba-shortages':    'supports',
      'north-korea-gdp':   'supports',
      'uk-nhs':            'challenges',
      'price-mechanism':   'supports',
      'china-hybrid':      'neither'
    },

    explain: {
      'cuba-literacy':     'Cuba\'s command economy achieves near-universal literacy and universal healthcare – social outcomes that pure free markets systematically underprovide due to positive externalities and merit good arguments. This challenges the simple claim that free markets allocate more efficiently.',
      'cuba-shortages':    'Persistent queuing for basic goods is the classic symptom of command economy failure: central planners cannot process the information needed to match supply and demand efficiently. This supports the claim that free markets, via the price mechanism, allocate more effectively.',
      'north-korea-gdp':   'North Korea\'s $1,800 GDP per capita – the result of near-total central planning – is powerful comparative evidence that command economies fail to generate the productive and allocative efficiency that free markets achieve. This strongly supports the claim.',
      'uk-nhs':            'The NHS achieving comparable health outcomes to higher-spending market-oriented systems challenges the claim that free markets are always more efficient allocators. In healthcare specifically, state provision appears to produce better outcomes per pound spent.',
      'price-mechanism':   'The price mechanism\'s ability to aggregate information from millions of individual decisions without central coordination is Hayek\'s core argument for market superiority. This directly supports the claim that markets allocate more efficiently than command systems.',
      'china-hybrid':      'China\'s hybrid model shows rapid growth from a command baseline – but it is neither a pure free market nor a command economy, so it does not cleanly support or challenge the binary claim. It complicates the comparison without settling it.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The North Korea GDP comparison and the price mechanism\'s information-processing advantage strongly support the claim that free markets outperform command economies on efficiency. However, Cuba\'s healthcare and literacy outcomes and the NHS evidence challenge the generalisation – in sectors with significant positive externalities and merit good characteristics, state provision can match or exceed market allocation. The China hybrid case complicates rather than settles the debate."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific data from the extract'                     },
      { icon: '❓', text: 'Ask which details change the conclusion'                },
      { icon: '⚖️', text: 'Distinguish efficiency from equity in your reasoning'   }
    ]
  }
};

/* ---- link-depends.js ---- */
/* ============================================================
   ECONOS – Link It · It Depends On station data
   Economic Systems: evaluate the claim that free markets are more
   efficient than command economies
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Economic Systems',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether free markets actually outperform command economies on efficiency.',
  nextUrl:     TopicLoader.routes.link('judge'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.routes.link('extract') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'free-market-vs-command',
      claim: {
        icon:   '🏪',
        prompt: 'Core claim',
        text:   'Free markets are more efficient than command economies.'
      },
      factors: [
        {
          id:    'market-failure-extent',
          icon:  '⚠️',
          label: 'Extent of market failure',
          why:   'In markets with public goods, large externalities, or information asymmetry, free markets systematically fail to achieve allocative efficiency. The NHS case shows state provision can outperform markets in healthcare – a sector with significant positive externalities, information asymmetry between patients and providers, and merit good characteristics. Where market failures are pervasive, the efficiency argument for free markets collapses.'
        },
        {
          id:    'property-rights',
          icon:  '⚖️',
          label: 'Property rights',
          why:   'Free market efficiency requires secure, well-defined and enforced property rights. Without them, firms cannot capture the returns from investment and innovation – undermining the profit incentive. In countries with weak rule of law, markets become dominated by rent-seeking, corruption and short-termism rather than productive activity. The efficiency argument for free markets depends on an institutional framework that many economies lack.'
        },
        {
          id:    'income-distribution',
          icon:  '💰',
          label: 'Income distribution',
          why:   'Even a productively efficient free market may produce allocative outcomes that satisfy high-income preferences over basic needs of the poor. Consumer sovereignty only works if income is distributed sufficiently equally for preferences to translate into demand. Cuba\'s command economy achieves near-universal literacy and healthcare at the cost of consumer choice – a different efficiency trade-off that reflects different social priorities.'
        },
        {
          id:    'competition',
          icon:  '🏆',
          label: 'Degree of competition in the market',
          why:   'The efficiency case for free markets assumes competitive markets with many buyers and sellers. Where natural monopolies emerge – utilities, rail networks, broadband infrastructure – the price mechanism fails to deliver productive or allocative efficiency without regulation. A "free" market dominated by monopoly may produce worse outcomes than regulated state provision.'
        },
        {
          id:    'information',
          icon:  '📋',
          label: 'Information availability to consumers',
          why:   'Consumer sovereignty requires that buyers have sufficient information to make rational choices. In markets with significant information asymmetry – healthcare, financial services, legal advice – consumers cannot exercise informed choice, and markets systematically under- or over-allocate resources. Regulation or public provision may produce better outcomes than an unregulated price mechanism.'
        },
        {
          id:    'time-horizon',
          icon:  '📅',
          label: 'Time horizon of investment decisions',
          why:   'Free markets can underprovide long-term public investments – infrastructure, basic research, education – where returns are distant and uncertain. Private investors prefer shorter payback periods. Command economies can, in principle, direct resources into long-run strategic investments regardless of short-term profitability, as China\'s infrastructure programme demonstrates. The efficiency comparison depends on which time horizon matters most.'
        }
      ],
      modelRanking: ['market-failure-extent', 'property-rights', 'income-distribution'],
      judgement: '"Whether free markets are more efficient than command economies depends primarily on the extent of market failures present – in sectors with large externalities, public goods or information asymmetry, the price mechanism systematically misallocates resources. The efficiency argument also depends on the security of property rights, since without them the profit incentive that drives productive efficiency is undermined. Finally, even where free markets are productively efficient, the income distribution determines whether consumer sovereignty translates into socially optimal allocative outcomes."'
    }
  ]
};

/* ---- link-extract.js ---- */
/* ============================================================
   ECONOS – Link It · Read the Extract station data
   Economic Systems: market vs command vs mixed economy
   ============================================================ */

window.ECONOS_LINK_EXTRACT = {
  topic:   'Economic Systems',
  backUrl: TopicLoader.routes.link('chain'),
  nextUrl: TopicLoader.routes.link('depends'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.routes.link('extract') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 2,

  eyebrow:     'Read the Extract',
  instruction: 'Read the passage carefully, then use economic systems theory to interpret each question. Connect evidence from the extract to the concepts of efficiency, equity and the role of the price mechanism.',

  passage: {
    title: 'Extract: Comparing economic systems – North Korea, Cuba and the UK',
    source: 'Adapted from: World Bank Development Indicators (2022); OECD Health Statistics; UN Human Development Report',
    text: 'North Korea operates one of the world\'s last command economies: the state owns all productive resources, sets prices, and directs labour allocation through central plans. GDP per capita is estimated at under $1,800 (2022), and chronic food shortages persist despite fertile agricultural land. Economists attribute this to the knowledge problem: central planners cannot process the dispersed, constantly changing information needed for efficient resource allocation. Meanwhile, South Korea – which shared the same territory and institutions in 1945 – operates a mixed market economy with a GDP per capita over $31,000.<br><br>Cuba presents a more complex case. Its command economy has produced outcomes that rival high-income mixed economies in specific sectors: life expectancy of 78 years (vs 79 in the UK), an infant mortality rate of 4 per 1,000 births (lower than the US at 5.4), and near-universal literacy. However, Cuba\'s GDP per capita is approximately $9,500, and access to consumer goods, information, and economic choice remains tightly restricted. The Cuban government argues that prioritising healthcare and education over GDP growth reflects a different set of social objectives.<br><br>The UK\'s mixed economy combines market allocation for most goods with substantial state provision of healthcare (NHS), education, social housing, and welfare. The UK government accounts for approximately 45% of GDP through public spending, positioning it between pure market and command systems.'
  },

  questions: [
    {
      id: 'es-extract-q1',
      question: 'The extract contrasts North Korea and South Korea. What does this comparison reveal about the productive efficiency of command vs market economies?',
      options: [
        'It proves that market economies always outperform command economies on all metrics, because prices efficiently allocate resources in every context',
        'It suggests market economies tend to achieve higher productive efficiency (more output per input) because price signals and profit incentives direct resources where they generate the most value – whereas central planning suffers from Hayek\'s knowledge problem',
        'The comparison is invalid because North and South Korea have different natural resources, populations and cultures – making any economic system comparison meaningless',
        'Command economies outperform market economies on equity (equal distribution), while market economies outperform on efficiency – so neither system is clearly superior'
      ],
      correct: 1,
      explanation: 'The North/South Korea comparison is one of the strongest natural experiments in economics: two countries that shared the same territory, people and starting point in 1945, diverging only in economic system. The outcome – a 17-fold GDP per capita difference – strongly suggests that market economies generate higher productive efficiency. The mechanism is Hayek\'s knowledge problem: price signals process millions of pieces of dispersed information automatically, allocating resources to their highest-value use. Command planners cannot replicate this without prices. However, note this is not definitive proof – other factors (geopolitical isolation, sanctions, different institutions) contribute to North Korea\'s poverty. Good economics acknowledges correlation vs causation.'
    },
    {
      id: 'es-extract-q2',
      question: 'Cuba\'s healthcare outcomes (life expectancy 78, infant mortality 4/1,000) rival high-income countries despite a much lower GDP per capita. What does this suggest about the equity-efficiency trade-off in different economic systems?',
      options: [
        'Cuba\'s results prove that command economies are superior to market economies, because they can achieve better social outcomes at lower cost',
        'Cuba\'s healthcare results show that command economies can deliberately direct resources toward equity objectives (healthcare, education) that market economies may under-provide – but at the cost of lower overall GDP growth and restricted consumer choice',
        'The Cuban government\'s healthcare statistics are unreliable – governments that control information also control reported data, so these figures should be dismissed',
        'Cuba\'s outcomes show that equity and efficiency are complementary, not in conflict – healthier workers are more productive, so healthcare investment always raises GDP'
      ],
      correct: 1,
      explanation: 'Cuba\'s case is genuinely instructive: command economies can achieve specific equity targets by directing resources regardless of profitability. A market system might under-provide rural healthcare (too unprofitable), but a command system can mandate it. The cost is lower overall GDP – fewer consumer goods, restricted information and choice. This is the equity-efficiency trade-off: market economies tend to be more efficient (higher total output) but may produce unequal outcomes; command economies can mandate equity but at the cost of productive efficiency. Cuba\'s mixed performance – excellent healthcare, low GDP – illustrates this trade-off empirically. Good exam answers acknowledge both sides.'
    },
    {
      id: 'es-extract-q3',
      question: 'The UK government accounts for approximately 45% of GDP through public spending. What does this suggest about the UK\'s economic system, and what is the economic justification for this level of state involvement?',
      options: [
        'The UK is effectively a command economy because the state controls nearly half of economic activity through spending',
        'The UK is a mixed economy: market mechanisms allocate most resources, but the state intervenes to correct market failures – providing public goods (defence), merit goods (NHS, education), redistributing income through welfare, and regulating externalities',
        'The 45% figure shows that the UK government is inefficiently large – a pure market economy would achieve the same outcomes at lower cost, since taxes reduce incentives to work and invest',
        'The 45% figure means the UK is more socialist than capitalist – the majority of GDP is controlled by private firms, but the government\'s 45% share represents the dominant force in the economy'
      ],
      correct: 1,
      explanation: 'The UK is the textbook mixed economy: price signals allocate resources in most markets (supermarkets, housing, labour, financial services) while the state intervenes where markets fail. The 45% of GDP in public spending reflects a deliberate choice to correct specific market failures: the NHS corrects for the public good elements of healthcare and the information gap between patients and providers; free education corrects for positive externalities and present bias in investment decisions; welfare transfers correct for distributional market failure; defence and policing provide pure public goods the market would under-supply. The justification is not that markets fail everywhere – but that they fail in specific, identifiable ways, and those failures justify targeted state intervention.'
    }
  ]
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for economic_systems
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Economic Systems',
  estTime: '12–18 minutes',
  goal:    'Bridge your knowledge of market, command and mixed economies into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "You've locked in how different economic systems allocate resources – through the price mechanism, central planning, or a combination of both. Now train the skills examiners reward – applying the framework to real comparisons between the UK, Cuba and North Korea, building the watertight price mechanism → efficiency chain, and reaching a supported judgement on whether a mixed economy is the optimal system.",
    heroKey: 'heroBars',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real comparative data to classify evidence on free market vs command economy efficiency',
      'Build the causal chain from price signals through to allocative efficiency',
      'Apply the economic systems framework to North Korea, South Korea and Cuba case extracts',
      'Evaluate the key conditions that determine whether free markets outperform command economies',
      'Reach a supported judgement on whether a mixed economy best balances efficiency and equity'
    ],
    tip: "These steps are cognitive drills – same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context', skill: 'Application', sub: 'Read an extract and judge which evidence changes the answer.', href: TopicLoader.routes.link('context'), state: 'available' },
      { num: 2, name: 'Build the chain', skill: 'Analysis', sub: 'Order or fill the steps in a reasoning chain.', href: TopicLoader.routes.link('chain'), state: 'available' },
      { num: 3, name: 'Read the extract', skill: 'Analysis', sub: 'Pull the evaluation-worthy detail from a real-world extract.', href: TopicLoader.routes.link('extract'), state: 'available' },
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
   Economic Systems: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Economic Systems',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.routes.link('complete'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.routes.link('extract') },
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
      id: 'mixed-economy-judgement',
      claim: {
        icon:   '⚖️',
        prompt: 'Overall claim',
        text:   'A mixed economy best balances the efficiency of free markets with the equity of state intervention.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context analysis',  text: 'You found that free markets generally outperform command economies on efficiency metrics, but that pure market outcomes can fail on equity and in sectors with large externalities.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'The causal chain',  text: 'Price signals → profit incentive → productive and allocative efficiency – but this chain breaks down when market failures are present or when income inequality distorts consumer sovereignty.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on…',   text: 'Free market efficiency depends on the extent of market failures, the security of property rights, and whether the income distribution is sufficient to translate consumer sovereignty into socially optimal outcomes.' }
      ],
      cloze: 'Overall, a mixed economy [1] the efficiency of free markets with equity considerations because the [2] is powerful at allocating most goods efficiently, but [3] – including public goods, externalities and information asymmetry – prevent it from working well in every sector. The UK\'s mixed economy demonstrates this: the private sector (over [4] of GDP) benefits from competitive markets and the profit incentive, while the NHS uses state provision in a sector where [5] would systematically underprovide. However, the claim that a mixed economy is "best" is contested – the optimal balance depends on a society\'s values regarding [6] versus efficiency, and critics argue the UK may be too [7] in housing and too state-oriented in other sectors. The strongest judgement is therefore that mixed economies are pragmatically superior to either extreme, but that the correct balance is [8] rather than theoretically determined.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-balances',    text: 'best balances',                correct: true  },
            { id: 'b1-ignores',     text: 'entirely ignores',              correct: false },
            { id: 'b1-eliminates',  text: 'eliminates',                   correct: false },
            { id: 'b1-undermines',  text: 'fundamentally undermines',      correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-price',       text: 'price mechanism',              correct: true  },
            { id: 'b2-central',     text: 'central planning committee',   correct: false },
            { id: 'b2-taxation',    text: 'progressive tax system',       correct: false },
            { id: 'b2-trade',       text: 'international trade system',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-failures',    text: 'market failures',              correct: true  },
            { id: 'b3-profits',     text: 'excessive profits',            correct: false },
            { id: 'b3-deficits',    text: 'trade deficits',               correct: false },
            { id: 'b3-wages',       text: 'high wages',                   correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-80pct',       text: '80%',                          correct: true  },
            { id: 'b4-40pct',       text: '40%',                          correct: false },
            { id: 'b4-20pct',       text: '20%',                          correct: false },
            { id: 'b4-99pct',       text: '99%',                          correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-market',      text: 'the free market',              correct: true  },
            { id: 'b5-taxation',    text: 'progressive taxation',         correct: false },
            { id: 'b5-command',     text: 'a command economy',            correct: false },
            { id: 'b5-barter',      text: 'a barter system',              correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-equity',      text: 'equity',                       correct: true  },
            { id: 'b6-inflation',   text: 'inflation control',            correct: false },
            { id: 'b6-trade',       text: 'trade surpluses',              correct: false },
            { id: 'b6-gdp',         text: 'GDP maximisation',             correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-market',      text: 'market-oriented',              correct: true  },
            { id: 'b7-command',     text: 'command-oriented',             correct: false },
            { id: 'b7-socialist',   text: 'socialist',                    correct: false },
            { id: 'b7-protectionist', text: 'protectionist',              correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-normative',   text: 'a normative judgement',        correct: true  },
            { id: 'b8-positive',    text: 'a positive economic fact',     correct: false },
            { id: 'b8-automatic',   text: 'automatically determined by markets', correct: false },
            { id: 'b8-fixed',       text: 'fixed across all countries',   correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-agree',    text: 'Largely agree – the UK\'s mixed economy shows that combining market efficiency with targeted state intervention outperforms either extreme',                                                                correct: true  },
          { id: 'op-partial',  text: 'Partially agree – mixed economies are pragmatic but the optimal balance is contested; the UK may be too market-oriented in some sectors (housing) and too state-oriented in others',                      correct: false },
          { id: 'op-disagree', text: 'Largely disagree – the concept of a \'best balance\' is ideological; the right system depends entirely on a society\'s values regarding equity vs efficiency',                                           correct: false },
          { id: 'op-none',     text: 'Neither agree nor disagree – the evidence is too mixed to reach a clear verdict',                                                                                                                          correct: false }
        ]
      },
      examBridge: '"A mixed economy best balances market efficiency and equity because the price mechanism effectively allocates most goods – generating productive and allocative efficiency through the profit incentive and consumer sovereignty – while targeted state intervention corrects market failures in sectors such as healthcare and public goods provision. However, the claim rests on a normative judgement: the optimal balance between efficiency and equity cannot be determined by economic analysis alone, and the evidence from the UK (housing, social care) suggests the balance may be imperfect even in a mixed economy."'
    }
  ]
};

