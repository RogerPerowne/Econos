window.ECONOS_TOPIC = {
  id: 'economic-systems',
  topicNum: '1.6',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Economic Systems',
  estTime: '7-9 minutes',
  goal: 'Lock in the free market, command, and mixed economy models – their mechanisms, advantages, and failures.',
  intro: {
    heroKey: 'heroEconomicSystems',
    summary: 'Every economy must answer the three fundamental questions: what, how, and for whom to produce. Different economic systems use different mechanisms – prices, central planning, or a mix – to allocate scarce resources. No system is perfect.',
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
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    /* ================================================================
       CARD 1 – The big picture: flow chain + tappable system overview
       ================================================================ */
    {
      id: 'economic_systems_1',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Economic systems: the big picture',
      branches: [
        { tone: 'green',  label: 'The free market',          sub: 'Prices and self-interest coordinate millions of decentralised decisions. Adam Smith\'s invisible hand at work.' },
        { tone: 'rose',   label: 'The command economy',      sub: 'The state owns resources and plans production. Equity is prioritised, but information and incentive problems bite hard.' },
        { tone: 'purple', label: 'The mixed economy',        sub: 'A blend: markets allocate most goods, government corrects failures and provides essentials. Every real economy lives here.' },
        { tone: 'blue',   label: 'The price mechanism',      sub: 'Signals, incentives and rationing – the three jobs prices do whenever markets are allowed to function.' },
        { tone: 'amber',  label: 'Transition &amp; hybrids', sub: 'Russia\'s shock therapy, China\'s gradualism: different paths from plan to market, with very different outcomes.' }
      ],
      branchesLabel: 'The five big ideas – tap each to recall',
      blocks: [
        { type: 'calloutStrip', tone: 'blue', icon: '💡', text: 'Every economy faces the same three questions: What to produce? How to produce it? For whom? The difference between systems is simply who decides the answers.' },
        { type: 'sectionHeader', icon: '🔗', label: 'From scarcity to outcomes' },
        { type: 'mechanismChain', steps: [
          { label: 'Scarcity',           detail: 'Resources are limited. Choices must be made.' },
          { label: 'Three questions',    detail: 'What? How? For whom?' },
          { label: 'An economic system', detail: 'A set of rules for answering those questions.' },
          { label: 'Allocate resources', detail: 'Land, labour, capital directed to their highest-value uses.' },
          { label: 'Outcomes',           detail: 'Efficiency, equity, growth – the goals every system pursues.' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'The invisible hand is not magic – it works only when prices reflect all costs and benefits. Market failure occurs precisely when prices don\'t capture external costs (externalities) or when public goods are non-excludable. This is why Theme 1 moves from free markets to market failure.' }
      ]
    },

    /* ================================================================
       CARD 2 – Free Market: Advantages vs Disadvantages (icon rows)
       ================================================================ */
    {
      id: 'economic_systems_2',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Free Market: Advantages vs Disadvantages',
      left: {
        label: 'Advantages of free markets',
        tone: 'green',
        icon: '✅',
        rows: [
          { icon: '📡', title: 'Efficient allocation',    text: 'Price signals direct resources to highest-value uses, achieving allocative efficiency.' },
          { icon: '💡', title: 'Dynamic efficiency',      text: 'Competition spurs innovation and the development of new products and processes.' },
          { icon: '👑', title: 'Consumer sovereignty',    text: 'Firms produce what consumers demand – or go out of business.' },
          { icon: '🧠', title: 'Decentralised knowledge', text: 'No government information requirement; local knowledge is used automatically through prices.' },
          { icon: '💰', title: 'Profit incentive',        text: 'The profit motive drives effort, investment, and entrepreneurship.' }
        ]
      },
      right: {
        label: 'Disadvantages of free markets',
        tone: 'rose',
        icon: '⚠️',
        rows: [
          { icon: '🏭', title: 'Market failure',    text: 'Externalities, public goods, and information asymmetries prevent optimal outcomes.' },
          { icon: '⚖️', title: 'Inequality',        text: 'Market outcomes depend on factor endowments – initial distribution may be highly unequal.' },
          { icon: '📉', title: 'Short-termism',     text: 'Profit motive may sacrifice long-run welfare for short-run returns.' },
          { icon: '🚫', title: 'No public goods',   text: 'The free rider problem means markets under-provide defence, policing, and street lighting.' },
          { icon: '🌊', title: 'Instability',       text: 'Unregulated markets are prone to boom-bust cycles and speculative bubbles.' }
        ]
      },
      blocks: [
        { type: 'calloutStrip', tone: 'blue', icon: '💡', text: 'The free market\'s strengths and weaknesses are two sides of the same coin: the profit motive drives efficiency but ignores social costs.' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'green', icon: '✅', head: 'Advantages of free markets', body: 'Efficient allocation via price signals · Dynamic efficiency through competition · Consumer sovereignty · Decentralised knowledge · Profit incentive drives effort and investment' },
          { type: 'tile', tone: 'rose',  icon: '⚠️', head: 'Disadvantages of free markets', body: 'Market failure (externalities, public goods, info asymmetry) · Inequality in outcomes · Short-termism · Under-provision of public goods · Boom-bust instability' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'Market failure is the bridge between the free market ideal and the need for government intervention. A perfect market (no externalities, full information, no public goods, no monopoly) would achieve optimal outcomes. Real markets fail on all four counts.' }
      ]
    },

    /* ================================================================
       CARD 3 – The Command Economy: icon causes + body context
       ================================================================ */
    {
      id: 'economic_systems_3',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'The Command Economy',
      blocks: [
        { type: 'calloutStrip', tone: 'blue', icon: '💡', text: 'In a command economy, the state answers all three economic questions. Prices don\'t signal scarcity – directives do.' },
        { type: 'sectionHeader', icon: '🏛️', label: 'Key features' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue',   icon: '🏛️', head: 'State ownership',    body: 'The government owns the means of production – land, factories, capital. No private property in the means of production.' },
          { type: 'tile', tone: 'blue',   icon: '📋', head: 'Central planning',    body: 'Government agencies (e.g. Soviet Gosplan) set production targets, input allocation, and price levels across the whole economy.' },
          { type: 'tile', tone: 'blue',   icon: '🚫', head: 'No price signals',    body: 'Prices are set by planners, not supply and demand. They cannot reflect relative scarcity or consumer preferences.' },
          { type: 'tile', tone: 'blue',   icon: '🎯', head: 'Production targets',  body: 'Firms are told what to produce and how much. Output quotas replace profit as the incentive for production.' },
          { type: 'tile', tone: 'blue',   icon: '⚖️', head: 'Equity priority',     body: 'Resources can be directed to social priorities – healthcare, defence, literacy – regardless of ability to pay.' },
          { type: 'tile', tone: 'blue',   icon: '🌍', head: 'Historical examples', body: 'Soviet Union (1917–1991), Maoist China, North Korea. Rapid early industrialisation (USSR 1930s–50s), but chronic inefficiency later.' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'Hayek\'s "knowledge problem" is the killer critique: no central authority can possess the dispersed, local knowledge that millions of price signals aggregate. Price signals are an information system; removing them causes chronic misallocation. This is an exam-quality analytical point.' }
      ]
    },

    /* ================================================================
       CARD 4 – Command Economy: Advantages vs Disadvantages (icon rows)
       ================================================================ */
    {
      id: 'economic_systems_4',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Command Economy: Advantages vs Disadvantages',
      left: {
        label: 'Potential advantages',
        tone: 'purple',
        icon: '✅',
        rows: [
          { icon: '🏥', title: 'Social priorities',    text: 'Resources directed to healthcare, defence, and education regardless of ability to pay.' },
          { icon: '⚖️', title: 'Greater equality',     text: 'State sets wages and prices – income distribution is more equal than in free markets.' },
          { icon: '⚡', title: 'Rapid mobilisation',   text: 'Can direct resources quickly in crisis: wartime production, industrialisation drives.' },
          { icon: '📉', title: 'No boom-bust',         text: 'Avoids the speculative excess and financial instability of unregulated markets.' },
          { icon: '🔭', title: 'Long-run planning',    text: 'Investment can be directed to long-run priorities without short-term profit pressure.' }
        ]
      },
      right: {
        label: 'Disadvantages – why it failed',
        tone: 'rose',
        icon: '❌',
        rows: [
          { icon: '🧩', title: 'Knowledge problem',    text: 'Hayek: planners cannot possess the dispersed, local knowledge that price signals aggregate.' },
          { icon: '😴', title: 'No incentives',        text: 'No profit motive means poor incentives for innovation, efficiency, or quality improvement.' },
          { icon: '📦', title: 'Chronic shortages',    text: 'Prices cannot equilibrate supply and demand – queues and shortages become the norm.' },
          { icon: '🤝', title: 'Corruption',           text: 'Planners allocate based on political connections, not efficiency – rent-seeking flourishes.' },
          { icon: '🙅', title: 'No consumer choice',  text: 'Citizens receive what planners decide, not what they want – sovereignty is absent.' }
        ]
      },
      balancedNote: 'The Soviet collapse (1991) is the definitive real-world test: by 1991, Soviet productivity growth was near zero, innovation had stalled, and consumer goods were scarce despite nominally full employment. Not ideology – empirical evidence for Hayek\'s knowledge problem.',
      blocks: [
        { type: 'calloutStrip', tone: 'blue', icon: '💡', text: 'The command economy\'s theoretical strengths are real – but Hayek\'s knowledge problem means they rarely survived contact with reality.' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'purple', icon: '✅', head: 'Potential advantages', body: 'Social priorities directed regardless of ability to pay · Greater equality in distribution · Rapid resource mobilisation in crisis · No boom-bust instability · Long-run investment planning possible' },
          { type: 'tile', tone: 'rose',   icon: '❌', head: 'Disadvantages – why it failed', body: 'Hayek\'s knowledge problem: planners cannot replicate price signals · No profit motive → weak incentives · Chronic shortages when prices don\'t equilibrate · Corruption and rent-seeking · No consumer choice or sovereignty' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'Contrast the Soviet "big bang" decline with China\'s gradualist success. China retained state control while introducing market elements from 1978 – suggesting the knowledge problem can be partially mitigated by allowing price signals to operate in some sectors.' }
      ]
    },

    /* ================================================================
       CARD 5 – The Mixed Economy: causes for the rationale
       ================================================================ */
    {
      id: 'economic_systems_5',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'The Mixed Economy',
      body: 'A <strong>mixed economy</strong> combines private market allocation with government intervention. Markets handle most goods efficiently – but they fail in specific, well-defined ways. Government intervenes in those areas while leaving markets to function elsewhere.<br><br>The UK is a textbook mixed economy: private markets for most goods and services; NHS (public provision); state education; regulated utilities; progressive taxation; welfare state.',
      blocks: [
        { type: 'calloutStrip', tone: 'blue', icon: '💡', text: 'All real-world economies are mixed. The debate is never "market vs state" – it\'s always "what degree of each, and where?"' },
        { type: 'sectionHeader', icon: '🏛️', label: 'Why government intervenes' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'rose',   icon: '🏭', head: 'Externalities',      body: 'Pollution and congestion are not priced by markets – government taxes, caps, or regulates to correct this.' },
          { type: 'tile', tone: 'blue',   icon: '🛡️', head: 'Public goods',       body: 'Defence and street lighting are non-excludable and non-rival – markets under-provide them, so the state steps in.' },
          { type: 'tile', tone: 'amber',  icon: '🔍', head: 'Information gaps',   body: 'Patients can\'t evaluate medical care; students can\'t assess education quality. Government provides or regulates.' },
          { type: 'tile', tone: 'purple', icon: '⚖️', head: 'Inequality',         body: 'Market outcomes depend on factor endowments. Progressive taxation and transfers redistribute towards equity.' },
          { type: 'tile', tone: 'green',  icon: '📉', head: 'Market instability', body: 'Boom-bust cycles and financial crises justify macroeconomic stabilisation – fiscal and monetary policy.' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'The debate is not "market vs state" but "which mix?" Thatcher (1979–90) shifted the UK rightward – privatisation, deregulation, lower taxes. Post-2008 and COVID reversed some of this – bailouts, furlough, QE. Acknowledging this spectrum earns evaluation credit.' }
      ]
    },

    /* ================================================================
       CARD 6 – The Price Mechanism: flow (4 functions)
       ================================================================ */
    {
      id: 'economic_systems_6',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'The Price Mechanism as Allocator',
      keyTerms: [
        { term: '📡 Signal',    def: 'Price changes communicate information about relative scarcity and value across the whole economy.' },
        { term: '💰 Incentive', def: 'Higher prices increase profit margins, drawing more supply into a market without any central instruction.' },
        { term: '⚖️ Ration',   def: 'Prices clear markets by making scarce goods unaffordable to lower-value uses – allocating to highest willingness to pay.' }
      ],
      blocks: [
        { type: 'calloutStrip', tone: 'blue', icon: '💡', text: 'Prices perform three simultaneous functions – signal, incentive, ration – all without any central coordination.' },
        { type: 'sectionHeader', icon: '📡', label: 'Three functions, one price' },
        { type: 'mechanismChain', steps: [
          { label: 'Signalling',    detail: 'Rising price → scarcity signal. Producers expand; consumers economise.' },
          { label: 'Incentive',     detail: 'High prices raise profit margins. Firms enter and supply more. Low prices squeeze margins and drive exit.' },
          { label: 'Rationing',     detail: 'When demand > supply, price rises until QD = QS. No queues – prices allocate to those who value most.' },
          { label: 'Transmission',  detail: 'A shortage of one component ripples up the supply chain automatically – coordinating thousands of decisions.' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'All three functions must work for the price mechanism to allocate efficiently. Market failures disrupt each one: externalities mean prices don\'t signal true social costs; information gaps distort signals; monopoly pricing exceeds true scarcity cost.' }
      ]
    },

    /* ================================================================
       CARD 7 – Transition Economies: verdict Russia vs China + conclusion
       ================================================================ */
    {
      id: 'economic_systems_7',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'Transition Economies: Russia vs China',
      verdict: {
        title: 'Two routes from plan to market',
        emoji: '🌍',
        layout: 'vs',
        columns: [
          {
            tone: 'rose',
            icon: '⚡',
            label: 'Russia – Shock Therapy',
            items: [
              { ok: false, text: 'Rapid simultaneous liberalisation from 1991' },
              { ok: false, text: 'GDP fell ~45% between 1990 and 1998' },
              { ok: false, text: 'State assets seized by oligarchs' },
              { ok: false, text: 'Hyperinflation destroyed household savings' },
              { ok: true,  text: 'Markets established quickly in theory' }
            ]
          },
          {
            tone: 'green',
            icon: '🐢',
            label: 'China – Gradualism',
            items: [
              { ok: true,  text: 'Incremental reforms from 1978 under state oversight' },
              { ok: true,  text: 'GDP per capita rose ~30× between 1980 and 2020' },
              { ok: true,  text: 'State retained control of finance and key industries' },
              { ok: true,  text: 'Market competition introduced sector by sector' },
              { ok: false, text: 'Less political freedom; state capitalism model debated' }
            ]
          }
        ]
      },
      keyTerms: [
        { term: '⚡ Shock therapy',    def: 'Rapid, simultaneous liberalisation of prices, privatisation, and trade – Russia\'s approach, with chaotic results.' },
        { term: '🐢 Gradualism',       def: 'Incremental market reforms while maintaining state oversight – China\'s approach, with more stable outcomes.' },
        { term: '🏭 State capitalism', def: 'Significant state ownership of key industries alongside market competition – China\'s current model.' }
      ],
      blocks: [
        { type: 'calloutStrip', tone: 'blue', icon: '💡', text: 'The contrast between Russia (shock therapy) and China (gradualism) is one of the most important natural experiments in modern economics.' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'rose',  icon: '⚡', head: 'Russia – Shock Therapy', body: 'Rapid simultaneous liberalisation from 1991 · GDP fell ~45% (1990–1998) · State assets seized by oligarchs · Hyperinflation destroyed savings' },
          { type: 'tile', tone: 'green', icon: '🐢', head: 'China – Gradualism',     body: 'Incremental reforms from 1978 under state oversight · GDP per capita rose ~30× (1980–2020) · State retained control of finance and key industries · Market competition introduced sector by sector' }
        ]},
        { type: 'bigIdea', text: 'The China model challenges the binary "market vs command" framing – markets and state can coexist productively. But critics argue success depends on institutional specifics (property rights, contract law) rather than ownership per se.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Evaluating transition economies: institutional quality matters as much as speed. Russia lacked property rights enforcement and contract law when it liberalised – markets without institutions produce disorder. This nuance earns evaluation marks.' }
      ],
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0
   These questions used to live at /quiz/<topic>/<set> as a
   standalone shell. They now ride along with the Learn It data
   under the same window.ECONOS_QUIZ global. The /quiz/ URL
   contract is gone; the quiz is the natural finisher to the
   Learn It journey, so the data lives next to learn cards.
   ============================================================ */
/* ---- quiz-main.js (quiz pool, preserved from former /quiz/ shell) ---- */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Economic Systems',
    subtitle: 'Theme 1 &middot; Topic 1.6 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('economic_systems_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers free market, command, mixed economy, the price mechanism as allocator, Hayek, and transition economies',
    shortNames: [
      'Systems categorise', 'Free market MCQ', 'Command economy', 'Price mechanism',
      'Hayek knowledge', 'Match pairs', 'Cause & effect', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – Categorise: economic systems */
      { type: 'categorise',
        stem: 'Sort each policy or feature into the correct economic system.',
        categories: ['Free market economy', 'Command economy', 'Mixed economy'],
        items: [
          { text: 'The government owns all major industries and sets production quotas centrally', category: 'Command economy' },
          { text: 'Private firms compete to produce goods; prices are set by supply and demand', category: 'Free market economy' },
          { text: 'NHS provides healthcare free at point of use; private sector provides most other goods', category: 'Mixed economy' },
          { text: 'A central planning bureau allocates steel, coal, and labour between sectors', category: 'Command economy' },
          { text: 'Government regulates pollution but leaves pricing and production to markets', category: 'Mixed economy' },
          { text: 'No government intervention; consumer sovereignty determines what is produced', category: 'Free market economy' }
        ],
        exp: '<strong>Free market</strong>: private ownership, price mechanism allocates resources, consumer sovereignty, profit motive drives production. <strong>Command economy</strong>: state ownership, central planning bureau allocates resources, production quotas rather than prices. <strong>Mixed economy</strong>: combination – markets for most goods, government provision for public goods and merit goods, regulation of externalities and market power. In practice, all modern economies are mixed – the question is the balance between market and state.'
      },

      /* 2 – MCQ: free market advantages */
      { type: 'mcq',
        stem: 'A key advantage of a <strong>free market economy</strong> over central planning is:',
        opts: [
          'The price mechanism aggregates dispersed information efficiently – no central body needs to know everything; prices coordinate millions of individual decisions automatically',
          'Free markets always achieve allocative efficiency – the goods produced always reflect society\'s true welfare',
          'Free markets eliminate inequality by rewarding effort and punishing idleness',
          'Free markets have no transaction costs – the price mechanism coordinates exchange without any cost to buyers or sellers'
        ],
        ans: 0,
        exp: 'Hayek\'s knowledge argument: information about local preferences, costs, and opportunities is dispersed across millions of agents. No central planner can collect, process, and act on this information effectively. The price mechanism aggregates this dispersed knowledge into a single number (price) that coordinates actions automatically – rising prices signal where resources are needed; falling prices signal where they are in surplus. This is the core economic case for markets over planning. Option B overstates – markets fail in the presence of externalities, public goods, and information asymmetry.'
      },

      /* 3 – MCQ: command economy problems */
      { type: 'mcq',
        stem: 'The <strong>Soviet Union\'s planned economy</strong> achieved rapid industrialisation in the 1930s but faced growing inefficiencies by the 1980s. Which economic explanation best accounts for this?',
        opts: [
          'Central planners could not process the billions of pieces of information required to set prices and quantities efficiently for a complex modern economy; shortages and surpluses became endemic',
          'The Soviet Union lacked natural resources and a sufficiently large population to sustain industrial growth',
          'Soviet workers were not educated enough to operate the complex machinery required by a modern economy',
          'The collapse was caused entirely by US military spending forcing excessive Soviet defence expenditure – the economic system itself was fundamentally sound'
        ],
        ans: 0,
        exp: 'The Soviet economic system worked relatively well for simple industrialisation (build factories, produce steel and coal) where planners could set clear targets. As the economy became more complex (consumer goods, electronics, services), the information requirements exploded. Planners set prices without market feedback, creating chronic shortages (under-priced goods) and surpluses (over-priced goods). The incentive problem also mattered: firms had no profit motive to innovate or reduce costs. By the 1980s, the system produced poor quality goods in the wrong quantities – the quintessential planning failure Hayek predicted in 1945.'
      },

      /* 4 – Sequence: how the price mechanism allocates resources */
      { type: 'sequence',
        stem: 'An increase in demand for electric vehicles. Place the steps showing how the <strong>price mechanism allocates resources</strong> in the correct order.',
        instr: 'Tap the steps in the correct order, from first to last.',
        items: [
          { label: 'Consumer demand for EVs rises – demand curve shifts rightward', note: '' },
          { label: 'EV prices rise – a signal of increased scarcity and value', note: '' },
          { label: 'Higher EV prices create profit opportunities for car manufacturers', note: '' },
          { label: 'Car firms invest in EV production; new firms enter the market', note: '' },
          { label: 'Resources (steel, lithium, engineers) are drawn into EV production', note: '' },
          { label: 'EV output expands; prices stabilise at a new higher equilibrium', note: '' }
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        exp: 'The price mechanism allocates resources through three functions: <strong>signalling</strong> (rising EV prices communicate scarcity and value to producers and consumers); <strong>incentive</strong> (profit opportunity motivates firms to invest and enter); <strong>rationing</strong> (higher price rations EVs to those with highest WTP, while signalling manufacturers to expand). This happens without central direction – millions of agents respond to price signals independently. The contrast with central planning: no one "ordered" resources into EV production; prices did the coordinating work.'
      },

      /* 5 – MCQ: mixed economy rationale */
      { type: 'mcq',
        stem: 'The UK is a <strong>mixed economy</strong>. Which statement best explains why governments intervene even in predominantly market-based economies?',
        opts: [
          'Markets fail in the presence of externalities, public goods, information asymmetry, and inequality – government intervention corrects failures that the price mechanism cannot resolve alone',
          'Governments intervene because politicians prefer to control the economy rather than leave decisions to the private sector',
          'Markets always achieve full employment – government intervention is only needed to manage foreign trade',
          'The price mechanism only works for manufactured goods; all services must be government-provided'
        ],
        ans: 0,
        exp: 'The mixed economy rationale: markets are efficient in most cases but fail systematically in four areas: <strong>externalities</strong> (costs and benefits not reflected in prices – pollution, vaccines); <strong>public goods</strong> (non-excludable, non-rival – cannot be provided by markets); <strong>information asymmetry</strong> (market power through information gaps – healthcare, insurance); <strong>inequality</strong> (markets may produce an efficient but socially unacceptable distribution). Government corrects these failures through taxes, subsidies, regulation, and direct provision – but government intervention also has costs and risks government failure.'
      },

      /* 6 – Match pairs: economic systems vocabulary */
      { type: 'match_pairs',
        stem: 'Match each concept to its correct description.',
        pairs: [
          { a: 'Consumer sovereignty', b: 'Consumers\' preferences determine what is produced – "voting with wallets"' },
          { a: 'Producer sovereignty', b: 'Firms (not consumers) determine what is produced – common in command economies' },
          { a: 'Allocative efficiency', b: 'Resources allocated to their highest-valued uses; P = MC' },
          { a: 'Government failure', b: 'State intervention makes resource allocation worse rather than better' },
          { a: 'Transition economy', b: 'Economy moving from central planning toward market allocation (e.g. post-Soviet Russia)' },
          { a: 'Laissez-faire', b: 'Minimal government intervention – markets left to operate freely' }
        ],
        exp: 'Economic systems vocabulary: <strong>consumer sovereignty</strong> is the key virtue of market economies – consumer preferences drive production decisions through the price mechanism. <strong>Producer sovereignty</strong> is the risk in monopoly and command economies. <strong>Allocative efficiency</strong> is the normative benchmark (P = MC). <strong>Government failure</strong> is the counterpart to market failure – intervention can fail due to information problems, political distortions, or unintended consequences. <strong>Transition economies</strong> face the challenge of building market institutions (property rights, rule of law, price liberalisation) simultaneously.'
      },

      /* 7 – Cause & effect: market vs command economy */
      { type: 'cause_effect',
        stem: 'Match each feature of economic systems to its consequence.',
        pairs: [
          { cause: 'Free market: prices rise when demand exceeds supply', effect: 'Resources automatically flow to profitable areas without central direction' },
          { cause: 'Command economy: prices set below market equilibrium', effect: 'Chronic shortages – queues, black markets, non-price rationing' },
          { cause: 'Free market: no regulation of pollution', effect: 'Market failure – negative externalities lead to overproduction of polluting goods' },
          { cause: 'Mixed economy: government subsidises vaccines', effect: 'Positive externality internalised – consumption rises to socially optimal level' },
          { cause: 'Command economy: no profit motive for firms', effect: 'Weak incentive to innovate, cut costs, or respond to consumer preferences' },
          { cause: 'Free market: unequal income distribution', effect: 'Goods produced for those with highest WTP, not greatest need – distributional concern' }
        ],
        exp: 'Each economic system has structural consequences: <strong>free markets</strong> efficiently allocate through prices but fail on externalities and distribution; <strong>command economies</strong> create incentive and information failures – planners cannot replicate market signals; <strong>mixed economies</strong> try to combine market efficiency with government correction of failures. The debate is not "markets vs planning" but "how much intervention, in which areas, using which instruments" – the practical policy question in all real economies.'
      },

      /* 8 – Odd one out: advantages of free markets */
      { type: 'odd_one_out',
        stem: 'Three of these are genuine <strong>advantages of free market economies</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🚀', label: 'Profit motive incentivises innovation and entrepreneurship', note: '' },
          { icon: '📊', label: 'Price mechanism aggregates dispersed information efficiently', note: '' },
          { icon: '⚖️', label: 'Free markets automatically achieve an equitable distribution of income', note: '' },
          { icon: '🔄', label: 'Consumer sovereignty ensures goods are produced to match consumer preferences', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>equitable income distribution</strong>. Free markets do not automatically produce equitable distribution – they produce an efficient allocation, but efficiency and equity are distinct. Free markets reward scarce skills and capital ownership highly, which may produce high inequality. This is a classic market failure (or market limitation) – markets are not designed to produce fairness, only efficiency. Redistribution requires government intervention (progressive taxation, welfare transfers). The other three are genuine advantages: profit motive, information aggregation, and consumer sovereignty are the core economic case for markets.'
      },

      /* 9 – Data table: market vs command economy performance */
      { type: 'data_table',
        stem: 'The table compares economic performance indicators for market-oriented and command economies (approximate data).',
        headers: ['Indicator', 'USSR 1980', 'USA 1980', 'China (plan) 1978', 'China (market) 2010'],
        rows: [
          ['GDP per capita (PPP, 2015 USD)', '$9,600', '$26,000', '$880', '$8,800'],
          ['Annual GDP growth (5-yr avg)', '2.1%', '3.5%', '5.0%', '10.5%'],
          ['Consumer goods availability', 'Chronic shortages', 'Wide choice', 'Severe shortages', 'Broad range'],
          ['Innovation index (approx ranking)', 'Low', 'High', 'Very low', 'Rising rapidly']
        ],
        question: 'Which conclusion is <strong>best supported</strong> by the data?',
        opts: [
          'Market-oriented economies have generally achieved higher living standards and more dynamic growth – China\'s rapid improvement after market reforms is particularly striking',
          'Command economies outperform market economies on growth – the USSR\'s 2.1% growth proves planning is effective',
          'Innovation only occurs in pure free-market economies like the USA – mixed economies cannot innovate',
          'The data show China\'s command period (1978) achieved higher living standards than the USSR, proving planning works'
        ],
        ans: 0,
        exp: 'The data support the argument that market-oriented economies generally achieve higher living standards: USA GDP per capita (£26k) far exceeded USSR (£9.6k) despite similar resource endowments. Most strikingly, China\'s transition from central planning to market allocation (post-1978 Deng reforms) produced spectacular growth (GDP per capita from $880 to $8,800 by 2010, 10.5% annual growth). Option B: 2.1% Soviet growth is actually below the USA\'s 3.5%, undermining the claim. Option C overstates – mixed economies also innovate. Option D: China in 1978 had far lower living standards than the USSR.'
      },

      /* 10 – Multi-select: evaluation of economic systems */
      { type: 'multi_select',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of the relative merits of free market versus command economies?',
        opts: [
          'In a free market economy, resources are allocated through the price mechanism',
          'While free markets excel at coordinating complex consumption decisions through price signals, they systematically fail for goods with large externalities or public good characteristics – suggesting the optimal system is context-dependent rather than universally "more market" or "more state"',
          'Command economies always fail because central planners are less intelligent than market participants',
          'The Chinese case qualifies both the pure market and pure planning positions: market reforms produced dramatic growth, but state direction of investment in infrastructure and strategic industries played a significant role – suggesting that successful development may require selective state intervention rather than blanket liberalisation',
          'Mixed economies have both government and private sector activity',
          'Hayek\'s knowledge argument is strongest against comprehensive central planning of consumer goods markets, but may be weaker against targeted industrial policy in sectors with clear market failures (R&D, green energy) – distinguishing the strength of the argument by context is essential to genuine evaluation'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: qualifies the free market argument by identifying contexts where it systematically fails, reaching the conclusion that optimal system choice is context-dependent – avoiding the error of universal prescription. D: uses the China case to qualify both pure positions, reaching a nuanced conclusion about selective state intervention – neither pure market nor pure planning, but targeted dirigisme. F: directly limits the scope of Hayek\'s argument, distinguishing contexts where it applies (consumer goods planning) from those where it may not (targeted industrial policy) – a sophisticated contextual evaluation. A and E are descriptions. C is an unsupported assertion.'
      }

    ]
  };

})();
