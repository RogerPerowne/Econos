window.ECONOS_TOPIC = {
  id: 'economic_systems',
  topicNum: '1.6',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Economic Systems',
  estTime: '7-9 minutes',
  goal: 'Lock in the free market, command, and mixed economy models — their mechanisms, advantages, and failures.',
  intro: {
    heroKey: 'heroEconomicSystems',
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

    /* ================================================================
       CARD 1 — The big picture: flow chain + tappable system overview
       ================================================================ */
    {
      id: 'economic_systems_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Economic systems: the big picture',
      tip: 'Every economy faces the same three questions: What to produce? How to produce it? For whom? The difference between systems is simply who decides the answers.',
      flow: [
        { icon: '⚠️', title: 'Scarcity',            sub: 'Resources are limited. Choices must be made.',                     tone: 'rose'   },
        { icon: '❓', title: 'Three questions',      sub: 'What? How? For whom?',                                            tone: 'amber'  },
        { icon: '🏛️', title: 'An economic system',  sub: 'A set of rules for answering those questions.',                   tone: 'blue'   },
        { icon: '⚖️', title: 'Allocate resources',  sub: 'Land, labour, capital directed to their highest-value uses.',     tone: 'purple' },
        { icon: '📊', title: 'Outcomes',             sub: 'Efficiency, equity, growth — the goals every system pursues.',   tone: 'green'  }
      ],
      flowTitle: 'From scarcity to outcomes',
      flowEmoji: '🔗',
      branches: [
        { tone: 'green',  label: 'The free market',          sub: 'Prices and self-interest coordinate millions of decentralised decisions. Adam Smith\'s invisible hand at work.' },
        { tone: 'rose',   label: 'The command economy',      sub: 'The state owns resources and plans production. Equity is prioritised, but information and incentive problems bite hard.' },
        { tone: 'purple', label: 'The mixed economy',        sub: 'A blend: markets allocate most goods, government corrects failures and provides essentials. Every real economy lives here.' },
        { tone: 'blue',   label: 'The price mechanism',      sub: 'Signals, incentives and rationing — the three jobs prices do whenever markets are allowed to function.' },
        { tone: 'amber',  label: 'Transition &amp; hybrids', sub: 'Russia\'s shock therapy, China\'s gradualism: different paths from plan to market, with very different outcomes.' }
      ],
      branchesLabel: 'The five big ideas — tap each to recall',
      examEdge: 'The invisible hand is not magic — it works only when prices reflect all costs and benefits. Market failure occurs precisely when prices don\'t capture external costs (externalities) or when public goods are non-excludable. This is why Theme 1 moves from free markets to market failure.'
    },

    /* ================================================================
       CARD 2 — Free Market: Advantages vs Disadvantages (icon rows)
       ================================================================ */
    {
      id: 'economic_systems_2',
      template: 'paired',
      title: 'Free Market: Advantages vs Disadvantages',
      tip: 'The free market\'s strengths and weaknesses are two sides of the same coin: the profit motive drives efficiency but ignores social costs.',
      left: {
        label: 'Advantages of free markets',
        tone: 'green',
        icon: '✅',
        rows: [
          { icon: '📡', title: 'Efficient allocation',    text: 'Price signals direct resources to highest-value uses, achieving allocative efficiency.' },
          { icon: '💡', title: 'Dynamic efficiency',      text: 'Competition spurs innovation and the development of new products and processes.' },
          { icon: '👑', title: 'Consumer sovereignty',    text: 'Firms produce what consumers demand — or go out of business.' },
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
          { icon: '⚖️', title: 'Inequality',        text: 'Market outcomes depend on factor endowments — initial distribution may be highly unequal.' },
          { icon: '📉', title: 'Short-termism',     text: 'Profit motive may sacrifice long-run welfare for short-run returns.' },
          { icon: '🚫', title: 'No public goods',   text: 'The free rider problem means markets under-provide defence, policing, and street lighting.' },
          { icon: '🌊', title: 'Instability',       text: 'Unregulated markets are prone to boom-bust cycles and speculative bubbles.' }
        ]
      },
      examEdge: 'Market failure is the bridge between the free market ideal and the need for government intervention. A perfect market (no externalities, full information, no public goods, no monopoly) would achieve optimal outcomes. Real markets fail on all four counts.'
    },

    /* ================================================================
       CARD 3 — The Command Economy: icon causes + body context
       ================================================================ */
    {
      id: 'economic_systems_3',
      template: 'framing',
      title: 'The Command Economy',
      tip: 'In a command economy, the state answers all three economic questions. Prices don\'t signal scarcity — directives do.',
      causes: [
        { icon: '🏛️', head: 'State ownership',      body: 'The government owns the means of production — land, factories, capital. No private property in the means of production.' },
        { icon: '📋', head: 'Central planning',      body: 'Government agencies (e.g. Soviet Gosplan) set production targets, input allocation, and price levels across the whole economy.' },
        { icon: '🚫', head: 'No price signals',      body: 'Prices are set by planners, not supply and demand. They cannot reflect relative scarcity or consumer preferences.' },
        { icon: '🎯', head: 'Production targets',    body: 'Firms are told what to produce and how much. Output quotas replace profit as the incentive for production.' },
        { icon: '⚖️', head: 'Equity priority',       body: 'Resources can be directed to social priorities — healthcare, defence, literacy — regardless of ability to pay.' },
        { icon: '🌍', head: 'Historical examples',   body: 'Soviet Union (1917–1991), Maoist China, North Korea. Rapid early industrialisation (USSR 1930s–50s), but chronic inefficiency later.' }
      ],
      causesLabel: 'Key features',
      causesEmoji: '🏛️',
      examEdge: 'Hayek\'s "knowledge problem" is the killer critique: no central authority can possess the dispersed, local knowledge that millions of price signals aggregate. Price signals are an information system; removing them causes chronic misallocation. This is an exam-quality analytical point.'
    },

    /* ================================================================
       CARD 4 — Command Economy: Advantages vs Disadvantages (icon rows)
       ================================================================ */
    {
      id: 'economic_systems_4',
      template: 'paired',
      title: 'Command Economy: Advantages vs Disadvantages',
      tip: 'The command economy\'s theoretical strengths are real — but Hayek\'s knowledge problem means they rarely survived contact with reality.',
      left: {
        label: 'Potential advantages',
        tone: 'purple',
        icon: '✅',
        rows: [
          { icon: '🏥', title: 'Social priorities',    text: 'Resources directed to healthcare, defence, and education regardless of ability to pay.' },
          { icon: '⚖️', title: 'Greater equality',     text: 'State sets wages and prices — income distribution is more equal than in free markets.' },
          { icon: '⚡', title: 'Rapid mobilisation',   text: 'Can direct resources quickly in crisis: wartime production, industrialisation drives.' },
          { icon: '📉', title: 'No boom-bust',         text: 'Avoids the speculative excess and financial instability of unregulated markets.' },
          { icon: '🔭', title: 'Long-run planning',    text: 'Investment can be directed to long-run priorities without short-term profit pressure.' }
        ]
      },
      right: {
        label: 'Disadvantages — why it failed',
        tone: 'rose',
        icon: '❌',
        rows: [
          { icon: '🧩', title: 'Knowledge problem',    text: 'Hayek: planners cannot possess the dispersed, local knowledge that price signals aggregate.' },
          { icon: '😴', title: 'No incentives',        text: 'No profit motive means poor incentives for innovation, efficiency, or quality improvement.' },
          { icon: '📦', title: 'Chronic shortages',    text: 'Prices cannot equilibrate supply and demand — queues and shortages become the norm.' },
          { icon: '🤝', title: 'Corruption',           text: 'Planners allocate based on political connections, not efficiency — rent-seeking flourishes.' },
          { icon: '🙅', title: 'No consumer choice',  text: 'Citizens receive what planners decide, not what they want — sovereignty is absent.' }
        ]
      },
      balancedNote: 'The Soviet collapse (1991) is the definitive real-world test: by 1991, Soviet productivity growth was near zero, innovation had stalled, and consumer goods were scarce despite nominally full employment. Not ideology — empirical evidence for Hayek\'s knowledge problem.',
      examEdge: 'Contrast the Soviet "big bang" decline with China\'s gradualist success. China retained state control while introducing market elements from 1978 — suggesting the knowledge problem can be partially mitigated by allowing price signals to operate in some sectors.'
    },

    /* ================================================================
       CARD 5 — The Mixed Economy: causes for the rationale
       ================================================================ */
    {
      id: 'economic_systems_5',
      template: 'framing',
      title: 'The Mixed Economy',
      tip: 'All real-world economies are mixed. The debate is never "market vs state" — it\'s always "what degree of each, and where?"',
      body: 'A <strong>mixed economy</strong> combines private market allocation with government intervention. Markets handle most goods efficiently — but they fail in specific, well-defined ways. Government intervenes in those areas while leaving markets to function elsewhere.<br><br>The UK is a textbook mixed economy: private markets for most goods and services; NHS (public provision); state education; regulated utilities; progressive taxation; welfare state.',
      causes: [
        { icon: '🏭', head: 'Externalities',           body: 'Pollution and congestion are not priced by markets — government taxes, caps, or regulates to correct this.', tone: 'rose'   },
        { icon: '🛡️', head: 'Public goods',            body: 'Defence and street lighting are non-excludable and non-rival — markets under-provide them, so the state steps in.', tone: 'blue'   },
        { icon: '🔍', head: 'Information gaps',        body: 'Patients can\'t evaluate medical care; students can\'t assess education quality. Government provides or regulates.', tone: 'amber'  },
        { icon: '⚖️', head: 'Inequality',              body: 'Market outcomes depend on factor endowments. Progressive taxation and transfers redistribute towards equity.', tone: 'purple' },
        { icon: '📉', head: 'Market instability',      body: 'Boom-bust cycles and financial crises justify macroeconomic stabilisation — fiscal and monetary policy.', tone: 'green'  }
      ],
      causesLabel: 'Why government intervenes',
      causesEmoji: '🏛️',
      causesStyle: 'tinted-flat',
      examEdge: 'The debate is not "market vs state" but "which mix?" Thatcher (1979–90) shifted the UK rightward — privatisation, deregulation, lower taxes. Post-2008 and COVID reversed some of this — bailouts, furlough, QE. Acknowledging this spectrum earns evaluation credit.'
    },

    /* ================================================================
       CARD 6 — The Price Mechanism: flow (4 functions)
       ================================================================ */
    {
      id: 'economic_systems_6',
      template: 'mechanisms',
      title: 'The Price Mechanism as Allocator',
      tip: 'Prices perform three simultaneous functions — signal, incentive, ration — all without any central coordination.',
      flow: [
        {
          icon: '📡',
          title: 'Signalling',
          sub: 'Rising price → scarcity signal. Producers expand; consumers economise.',
          tone: 'blue'
        },
        {
          icon: '💰',
          title: 'Incentive',
          sub: 'High prices raise profit margins. Firms enter and supply more. Low prices squeeze margins and drive exit.',
          tone: 'green'
        },
        {
          icon: '⚖️',
          title: 'Rationing',
          sub: 'When demand > supply, price rises until QD = QS. No queues — prices allocate to those who value most.',
          tone: 'amber'
        },
        {
          icon: '🔗',
          title: 'Transmission',
          sub: 'A shortage of one component ripples up the supply chain automatically — coordinating thousands of decisions.',
          tone: 'purple'
        }
      ],
      flowTitle: 'Three functions, one price',
      flowEmoji: '📡',
      keyTerms: [
        { term: '📡 Signal',    def: 'Price changes communicate information about relative scarcity and value across the whole economy.' },
        { term: '💰 Incentive', def: 'Higher prices increase profit margins, drawing more supply into a market without any central instruction.' },
        { term: '⚖️ Ration',   def: 'Prices clear markets by making scarce goods unaffordable to lower-value uses — allocating to highest willingness to pay.' }
      ],
      examEdge: 'All three functions must work for the price mechanism to allocate efficiently. Market failures disrupt each one: externalities mean prices don\'t signal true social costs; information gaps distort signals; monopoly pricing exceeds true scarcity cost.'
    },

    /* ================================================================
       CARD 7 — Transition Economies: verdict Russia vs China + conclusion
       ================================================================ */
    {
      id: 'economic_systems_7',
      template: 'framing',
      title: 'Transition Economies: Russia vs China',
      tip: 'The contrast between Russia (shock therapy) and China (gradualism) is one of the most important natural experiments in modern economics.',
      verdict: {
        title: 'Two routes from plan to market',
        emoji: '🌍',
        layout: 'vs',
        columns: [
          {
            tone: 'rose',
            icon: '🇷🇺',
            label: 'Russia — Shock Therapy',
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
            icon: '🇨🇳',
            label: 'China — Gradualism',
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
      conclusion: 'The China model challenges the binary "market vs command" framing — markets and state can coexist productively. But critics argue success depends on institutional specifics (property rights, contract law) rather than ownership per se.',
      keyTerms: [
        { term: '⚡ Shock therapy',    def: 'Rapid, simultaneous liberalisation of prices, privatisation, and trade — Russia\'s approach, with chaotic results.' },
        { term: '🐢 Gradualism',       def: 'Incremental market reforms while maintaining state oversight — China\'s approach, with more stable outcomes.' },
        { term: '🏭 State capitalism', def: 'Significant state ownership of key industries alongside market competition — China\'s current model.' }
      ],
      examEdge: 'Evaluating transition economies: institutional quality matters as much as speed. Russia lacked property rights enforcement and contract law when it liberalised — markets without institutions produce disorder. This nuance earns evaluation marks.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
