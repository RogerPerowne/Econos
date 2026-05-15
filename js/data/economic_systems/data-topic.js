window.ECONOS_TOPIC = {
  id: 'economic_systems',
  topicNum: '1.4',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Economic Systems',
  estTime: '7-9 minutes',
  goal: 'Lock in the free market, command, and mixed economy models — their mechanisms, advantages, and failures.',
  intro: {
    heroKey: 'growth',
    summary: 'Every economy must answer the three fundamental questions: what, how, and for whom to produce. Different economic systems use different mechanisms — prices, central planning, or a mix — to allocate scarce resources. No system is perfect.',
    doInThis: 'Work through 7 cards covering the market mechanism, command economies, mixed economies, the price system as an allocative tool, and the debate between market and state.',
    outcomes: [
      'Describe how a free market economy allocates resources through the price mechanism',
      'Explain how a command economy allocates resources and evaluate its strengths and weaknesses',
      'Define a mixed economy and explain the rationale for government intervention',
      'Evaluate the trade-off between market freedom and government intervention'
    ],
    tip: 'In a free market: prices = signals + incentives + rationing device. High prices signal scarcity, incentivise producers, and ration goods to those who value them most highly.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'economic_systems_1',
      template: 'framing',
      title: 'The Free Market Economy',
      body: 'In a <strong>free market economy</strong>, the three economic questions are answered by the <em>price mechanism</em>. Private ownership of resources is the norm; prices emerge from the interaction of supply and demand; self-interest drives resource allocation; and competition disciplines firms to produce efficiently.<br><br><strong>Adam Smith\'s invisible hand:</strong> individuals pursuing their own self-interest unintentionally promote society\'s interest — as if guided by an invisible hand. The market coordinates millions of decentralised decisions without central direction.',
      keyTerms: [
        { term: 'Free market economy', def: 'An economy where resource allocation is determined primarily by price signals arising from private decisions of buyers and sellers.' },
        { term: 'Invisible hand', def: 'Adam Smith\'s metaphor for how self-interested behaviour coordinates market outcomes — price signals align private and social interest.' },
        { term: 'Price mechanism', def: 'The system by which prices, determined by supply and demand, signal how resources should be allocated.' }
      ],
      examEdge: 'The invisible hand is not magic — it works only when prices reflect all costs and benefits. Market failure occurs precisely when prices don\'t capture external costs (externalities) or when public goods are non-excludable. This is why Theme 1 moves from free markets to market failure.'
    },
    {
      id: 'economic_systems_2',
      template: 'paired',
      title: 'Free Market: Advantages vs Disadvantages',
      left: {
        label: 'Advantages of free markets',
        points: [
          'Efficient resource allocation — price signals direct resources to highest-value uses (allocative efficiency)',
          'Dynamic efficiency — competition spurs innovation and new products',
          'Consumer sovereignty — firms produce what consumers demand or go out of business',
          'Decentralised decisions — no government information requirement; local knowledge used',
          'Incentives — profit motive drives effort, investment, and entrepreneurship'
        ]
      },
      right: {
        label: 'Disadvantages of free markets',
        points: [
          'Market failure — externalities, public goods, information asymmetries prevent optimal outcomes',
          'Inequality — market outcomes depend on factor endowments; initial distribution may be highly unequal',
          'Short-termism — profit motive may sacrifice long-run welfare for short-run returns',
          'No provision of public goods — free rider problem means markets under-provide defence, policing, etc.',
          'Instability — unregulated markets prone to boom-bust cycles, speculative bubbles'
        ]
      },
      examEdge: 'Market failure is the bridge between the free market ideal and the need for government intervention. A perfect market (no externalities, full information, no public goods, no monopoly) would achieve optimal outcomes. Real markets fail on all four counts.'
    },
    {
      id: 'economic_systems_3',
      template: 'framing',
      title: 'The Command Economy',
      body: 'In a <strong>command economy</strong> (centrally planned economy), the state owns the means of production and answers the three economic questions through central planning. The government decides what, how, and for whom — replacing price signals with directives.<br><br><strong>Historical examples:</strong> Soviet Union (1917-1991), Maoist China, North Korea. In theory, central planning can direct resources to social priorities (healthcare, defence, literacy) without market inequalities. In practice, Soviet planning achieved rapid early industrialisation (1930s-50s) but suffered chronic inefficiency, shortages, and innovation stagnation.',
      keyTerms: [
        { term: 'Command economy', def: 'An economy where the state owns productive resources and allocates them through central planning directives.' },
        { term: 'Central planning', def: 'Government agencies determine production targets, input allocation, and price levels — replacing the market mechanism.' },
        { term: 'Gosplan', def: 'Soviet central planning agency responsible for setting production targets across the USSR economy.' }
      ],
      examEdge: 'Hayek\'s "knowledge problem" is the key critique of central planning: no central authority can possess the dispersed, local knowledge that millions of price signals aggregate. Price signals are an information system; removing them causes chronic misallocation. This is an exam-quality analytical point.'
    },
    {
      id: 'economic_systems_4',
      template: 'paired',
      title: 'Command Economy: Advantages vs Disadvantages',
      left: {
        label: 'Potential advantages',
        points: [
          'Resources directed to social priorities (healthcare, defence, education) regardless of ability to pay',
          'Greater equality of income distribution — state sets wages and prices',
          'Can mobilise resources rapidly in crisis (wartime, industrialisation)',
          'Avoids boom-bust cycles driven by speculative excess',
          'Long-run planning possible without short-term profit pressure'
        ]
      },
      right: {
        label: 'Disadvantages (and why it failed)',
        points: [
          'Hayek\'s knowledge problem: planners lack information to allocate efficiently',
          'No profit motive → poor incentives for innovation or efficiency',
          'Chronic shortages and surpluses — prices cannot equilibrate supply and demand',
          'Political corruption and rent-seeking — planners allocate based on power, not efficiency',
          'Consumer sovereignty absent — citizens receive what planners decide, not what they want'
        ]
      },
      examEdge: 'The collapse of the Soviet Union is the definitive empirical test: by 1991, Soviet productivity growth was ~0, innovation had stalled, and consumer goods were scarce despite nominally full employment. This is not just about ideology — it is a real-world demonstration of Hayek\'s knowledge problem.'
    },
    {
      id: 'economic_systems_5',
      template: 'framing',
      title: 'The Mixed Economy',
      body: 'A <strong>mixed economy</strong> combines private market allocation with government intervention. All real-world economies are mixed — the debate is about the degree of intervention, not whether any intervention is justified.<br><br>The rationale for a mixed economy: markets allocate most goods and services efficiently (comparative advantage of markets) but fail in specific, well-defined areas — externalities, public goods, information asymmetries, inequality. Government intervenes in these areas while leaving markets to function elsewhere.<br><br>The UK is a mixed economy: private markets for most goods and services; NHS (public provision); state education; regulated utilities; progressive taxation; welfare state.',
      keyTerms: [
        { term: 'Mixed economy', def: 'An economy using both market allocation and government intervention — the dominant real-world model.' },
        { term: 'Market failure', def: 'When the price mechanism fails to allocate resources optimally — the economic justification for government intervention.' },
        { term: 'Government intervention', def: 'State action that alters resource allocation from what a free market would produce: taxes, subsidies, regulation, public provision.' }
      ],
      examEdge: 'The debate is not "market vs state" but "which mix?" Thatcher (1979-90) shifted the UK rightward (privatisation, deregulation, lower taxes). Post-2008 and COVID reversed some of this (bailouts, furlough, QE). Acknowledging this spectrum earns evaluation credit.'
    },
    {
      id: 'economic_systems_6',
      template: 'mechanisms',
      title: 'The Price Mechanism as Allocator',
      intro: 'Prices perform three simultaneous functions that together coordinate economic activity without central direction.',
      steps: [
        { label: 'Signalling', text: 'Prices signal information about relative scarcity and value. A rising price signals increased scarcity or demand — tells producers to expand supply and consumers to economise.' },
        { label: 'Incentives', text: 'Rising prices increase profit margins, incentivising more supply. Falling prices signal oversupply and squeeze margins, causing firms to exit or reduce output. Profit = incentive for efficiency.' },
        { label: 'Rationing', text: 'When demand exceeds supply, prices rise until quantity demanded falls to equal quantity supplied — rationing access to those who value it most (or who can pay most). Avoids need for queuing or government rationing.' },
        { label: 'Transmission', text: 'Price signals transmit through supply chains — a shortage of components raises component prices, signalling upstream suppliers to produce more, automatically coordinating thousands of separate decisions.' }
      ],
      examEdge: 'All three functions must work for the price mechanism to allocate efficiently. Market failures disrupt these: externalities mean prices don\'t signal true social costs; information gaps mean signals are distorted; monopoly means prices exceed true scarcity cost. Know which failure disrupts which function.'
    },
    {
      id: 'economic_systems_7',
      template: 'framing',
      title: 'Transition Economies and Emerging Models',
      body: 'Many economies have transitioned from command to market systems since 1989. Russia and Eastern Europe privatised state enterprises and liberalised prices — with mixed results. "Shock therapy" (rapid liberalisation) in Russia led to oligarch concentration and economic chaos (GDP fell 45% 1990-1998). "Gradualism" (China from 1978) maintained state control while introducing market elements — more successful in maintaining stability during transition.<br><br>China is a unique hybrid: private enterprise and markets for most goods, but state retains strategic control of finance, technology, and key industries. The debate about whether this "state capitalism" model is sustainable or replicable is central to 21st-century economic policy.',
      keyTerms: [
        { term: 'Transition economy', def: 'An economy shifting from central planning to market allocation (e.g. Russia, Poland, Czech Republic post-1989).' },
        { term: 'Shock therapy', def: 'Rapid, simultaneous liberalisation of prices, privatisation, and trade — contrasted with gradualism.' },
        { term: 'State capitalism', def: 'A system where the state retains significant ownership and control of key industries while allowing market competition in others — China\'s model.' }
      ],
      examEdge: 'The China model challenges the binary "market vs command" framing. China\'s record suggests markets and state can coexist productively — but critics argue this depends on institutional specifics (property rights enforcement, contract law) rather than ownership per se. This nuance earns evaluation marks.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
