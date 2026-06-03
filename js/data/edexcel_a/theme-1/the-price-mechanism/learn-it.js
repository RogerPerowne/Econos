window.ECONOS_TOPIC = {
  id: 'the-price-mechanism',
  topicNum: '2.7',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'The Price Mechanism',
  estTime: '7-9 minutes',
  goal: 'Lock in how prices signal, incentivise, ration and transmit information – and why market failure occurs when these functions break down.',
  intro: {
    heroKey: 'heroPrice',
    summary: 'Prices do far more than measure value – they coordinate economic activity across millions of decentralised agents without central direction. Understanding these functions explains both why markets are powerful and why they sometimes fail.',
    doInThis: 'Work through 7 cards covering the three functions of price (signalling, incentive, rationing), the flow of price information through markets, entrepreneurship and the profit signal, and what happens when prices fail to function.',
    outcomes: [
      'Explain the three functions of prices: signalling, incentives, and rationing',
      'Trace how price signals coordinate production and consumption decisions across markets',
      'Explain the role of the entrepreneur in responding to profit signals',
      'Identify how market failures disrupt the price mechanism\'s functions'
    ],
    tip: 'Signalling = prices transmit information. Incentives = prices motivate action. Rationing = prices allocate scarce goods to those who value them most. All three must work for efficient allocation.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'price_functions_1',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Functions of the price mechanism: the big picture',
      tip: { icon: '💡', tone: 'blue', text: '<em>In a market economy, resources are scarce but wants are unlimited.</em><br><strong>How do prices help decide what gets produced, how much, and who gets it?</strong><br>The price mechanism performs three core functions that keep the economy coordinated and efficient.' },
      framework: {
        label: 'The Price Mechanism: 3 Core Functions',
        priceSource: { title: 'PRICE', sub: 'moves up ↑ / down ↓' },
        tiles: [
          { tone: 'green', icon: '📡', title: 'Signalling', body: 'Changing prices give information about scarcity and consumer demand.', rule: '↑P = scarcer · ↓P = abundant' },
          { tone: 'amber', icon: '🏃', title: 'Incentive',  body: 'Rising prices encourage producers and consumers to change behaviour.', rule: '↑P → produce more · ↓P → less' },
          { tone: 'blue',  icon: '👥', title: 'Rationing',  body: 'Prices allocate scarce goods to those willing and able to pay.', rule: 'scarce goods → willing &amp; able' }
        ]
      },
      economistQuote: {
        portraitKey: 'economistHayek',
        tone: 'amber',
        label: 'Economist insight on the price mechanism',
        quote: 'We must look at the price system as a mechanism for communicating information if we want to understand its real function.',
        attribution: 'Friedrich Hayek, <em>The Use of Knowledge in Society</em> (1945)'
      },
      causesStyle: 'plain-white',
      causesEmoji: '⭐',
      causesLabel: 'Why it matters',
      causes: [
        { tone: 'green', icon: '🏠', head: 'Housing',              body: 'When prices rise, more homes get built and existing homes change hands to those who value them most.' },
        { tone: 'amber', icon: '🎫', head: 'Concert tickets',      body: 'Higher prices ration limited tickets to fans who are willing and able to pay more.' },
        { tone: 'blue',  icon: '⛽', head: 'Petrol & electricity', body: 'Prices guide usage and investment, encouraging conservation and new supply.' }
      ],
      keyTerms: [
        { term: 'Price signal', def: 'A price change that communicates information about relative scarcity or value, guiding resource allocation decisions.' },
        { term: 'Dispersed knowledge', def: 'Hayek\'s concept: relevant economic knowledge is distributed across millions of individuals – no central authority can aggregate it as efficiently as prices do.' },
        { term: 'Efficient allocation', def: 'A pattern of resource use where goods flow to their most highly-valued uses and producers respond to genuine consumer demand.' }
      ],
      examEdge: '<strong>Exam requirement:</strong> spec 1.2.7 mandates that you name and distinguish the three functions — <strong>signalling, incentive, rationing</strong> — separately when explaining how prices allocate resources. Examiners award marks for using the precise terminology; vague phrases like "prices change behaviour" leave marks on the table. Strong answers go further and link each function to the resulting efficient allocation.'
    },
    {
      id: 'price_functions_2',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Prices as incentives',
      tip: {
        icon: '💡',
        tone: 'blue',
        text: '<em>Higher prices encourage producers to supply more and consumers to buy less – lower prices do the opposite.</em><br>Prices therefore act like <strong>signals with consequences</strong> – they change behaviour.'
      },
      flowTitle: 'How prices change behaviour',
      flowEmoji: '⚖️',
      pairLabel: null,
      left: {
        tone: 'green',
        icon: '🏭',
        iconStyle: 'circle',
        centeredLabel: true,
        label: 'Producers respond',
        points: [
          'Price rises → potential profit rises',
          'Firms increase output',
          'New firms may enter',
          'Resources move into this market'
        ]
      },
      right: {
        tone: 'amber',
        icon: '👥',
        iconStyle: 'circle',
        centeredLabel: true,
        label: 'Consumers respond',
        points: [
          'Price rises → quantity demanded falls',
          'Consumers switch to substitutes',
          'Some delay purchases',
          'Scarce goods are used more carefully'
        ]
      },
      flow: [
        { tone: 'green', icon: '📈', title: 'Price rises' },
        { tone: 'green', icon: '⬆️', title: 'Stronger incentive to supply' },
        { tone: 'amber', icon: '⬇️', title: 'Weaker incentive to buy' },
        { tone: 'blue',  icon: '⚖️', title: 'Market moves toward balance' }
      ],
      causesStyle: 'plain-white',
      causesEmoji: '🌍',
      causesLabel: 'Real-world examples',
      causes: [
        { tone: 'green', icon: '⛽', head: 'Petrol prices',          body: 'Higher petrol prices encourage less car use and more fuel efficiency.' },
        { tone: 'amber', icon: '🏠', head: 'House prices',           body: 'Higher house prices encourage more housebuilding.' },
        { tone: 'blue',  icon: '🍓', head: 'Strawberries in winter', body: 'High winter strawberry prices attract imports and greenhouse production.' }
      ],
      keyTerms: [
        { term: 'Incentive function', def: 'Prices motivate producers and consumers to adjust behaviour in response to scarcity signals – the mechanism by which markets self-correct.' },
        { term: 'Profit signal',      def: 'Abnormal profit signals under-supply of a good, attracting new entrants. Losses signal over-supply, causing exit.' },
        { term: 'Entry and exit',     def: 'The mechanism by which the incentive function restores equilibrium – new firms enter profitable markets; unprofitable firms exit.' }
      ],
      examEdge: 'Don\'t stop at "price rises". Explain the incentive: firms chase profit, consumers reconsider value, and resources reallocate.'
    },
    {
      id: 'price_functions_3',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Prices as a rationing device',
      tip: {
        icon: '💡',
        tone: 'blue',
        text: '<em>When a product is scarce, price helps ration it. A higher price does not create more tickets or more seats today – it decides who gets them.</em><br>In a market, scarce goods usually go to those <strong>willing and able to pay</strong>.'
      },
      interactiveDiagram: {
        svgKey: 'disequilibriumInteractive',
        label: 'How rationing works',
        emoji: '⚖️',
        layers: ['layer-base', 'layer-surplus', 'layer-short'],
        views: [
          { label: 'Market in equilibrium', tone: 'green', show: ['layer-base'],
            head: 'Market in equilibrium',
            body: 'At <strong>E</strong>, quantity demanded equals quantity supplied. The market clears at <strong>Pₑ</strong>, <strong>Qₑ</strong> — no shortage, so no rationing pressure.' },
          { label: 'Price too high → surplus', tone: 'amber', show: ['layer-surplus'],
            head: 'Price too high → surplus',
            body: 'At <strong>P₁</strong> (above Pₑ), quantity supplied (Q₂) exceeds quantity demanded (Q₁) — the gap is the <strong>surplus</strong>. Unsold stock builds up, so sellers <strong>cut the price</strong> back towards E.' },
          { label: 'Price too low → shortage', tone: 'blue', show: ['layer-short'],
            head: 'Price too low → shortage rations the good',
            body: 'At <strong>P₂</strong> (below Pₑ), quantity demanded (Q₁) exceeds quantity supplied (Q₂) — the gap is the <strong>shortage</strong>. Buyers compete for scarce stock and <strong>bid the price up</strong>; the rising price <strong>rations</strong> the good to those willing and able to pay, restoring E.' }
        ]
      },
      flow: [
        { tone: 'green', icon: '👥', title: 'Shortage',                          sub: 'More people want tickets than are available.' },
        { tone: 'amber', icon: '📈', title: 'Price rises',                        sub: 'Higher prices signal scarcity and adjust the price.' },
        { tone: 'blue',  icon: '🚪', title: 'Some buyers drop out',               sub: 'Those not willing or able to pay the higher price choose not to buy.' },
        { tone: 'green', icon: '🎫', title: 'Remaining buyers obtain the tickets', sub: 'Tickets go to those willing and able to pay the market price.' }
      ],
      note: {
        icon: '⚖️', tone: 'blue', head: 'Central idea',
        text: 'Prices ration scarce goods. They decide who gets what.'
      },
      causesStyle: 'plain-white',
      causesEmoji: '🔍',
      causesLabel: 'Three things to know',
      causes: [
        { tone: 'green', icon: '❓', head: 'Why it happens',       body: 'Demand exceeds supply. Price rises to balance the quantity people want to buy with the quantity available.' },
        { tone: 'amber', icon: '🎯', head: 'What it achieves',     body: 'It prevents queues and chaos, allocates goods quickly, and encourages efficient use of scarce resources.' },
        { tone: 'blue',  icon: '⚠️', head: 'What the drawback is', body: 'People with lower incomes may be excluded even if they need or value the good a lot.' }
      ],
      causes2Emoji: '🌍',
      causes2Label: 'Real-world examples',
      causes2: [
        { tone: 'green', icon: '🎪', head: 'Festival tickets',      body: 'Higher prices mean tickets go to those who value the experience most.' },
        { tone: 'amber', icon: '🚆', head: 'Peak-time train fares', body: 'Higher fares at busy times reduce crowding and manage limited seats.' },
        { tone: 'blue',  icon: '🏠', head: 'Rental housing',        body: 'Higher rents ration limited homes to those willing and able to pay.' }
      ],
      keyTerms: [
        { term: 'Rationing function',  def: 'Prices allocate scarce goods among competing buyers by excluding those unwilling or unable to pay the market price.' },
        { term: 'Willingness to pay',  def: 'The maximum price a buyer would offer for a unit – combines both need and income.' },
        { term: 'Non-market rationing', def: 'Alternatives to price rationing: queuing (NHS), vouchers, lottery, merit assessment – used when price rationing produces inequitable outcomes.' }
      ],
      examEdge: 'The price mechanism rations <strong>efficiently in one sense</strong> – it matches supply and demand quickly and uses resources well. But it is <strong>not always fair</strong>. In exams, mention both <strong>efficiency</strong> (good use of scarce resources) and <strong>equity</strong> (fairness and access).'
    },
    {
      id: 'price_functions_4',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'How price signals transmit through markets',
      tip: {
        icon: '💡',
        tone: 'blue',
        text: 'Price changes do more than affect one buyer and one seller. They <strong>transmit information through the whole market system</strong>. A higher price tells firms, workers, and related markets that this product has become more scarce or more demanded.'
      },
      flowTitle: 'Following a price signal',
      flowEmoji: '🔗',
      flow: [
        { tone: 'green',  icon: '🌾', title: 'Poor harvest reduces wheat supply' },
        { tone: 'amber',  icon: '💲', title: 'Wheat price rises' },
        { tone: 'blue',   icon: '🥖', title: 'Bakers face higher costs and bread prices may rise' },
        { tone: 'purple', icon: '👨‍🌾', title: 'Consumers adjust spending; farmers consider planting more wheat' },
        { tone: 'slate',  icon: '🕸️', title: 'Resources and production decisions change across connected markets' }
      ],
      causesStyle: 'plain-white',
      causesEmoji: '📡',
      causesLabel: 'What the signal does',
      causes: [
        { tone: 'green', icon: '👤',  head: 'To producers',       body: 'Higher prices encourage expansion, innovation, and reallocation of resources to the more valuable use.' },
        { tone: 'amber', icon: '🛒',  head: 'To consumers',       body: 'Higher prices encourage substitutes, less spending, and more efficient use of the good or service.' },
        { tone: 'blue',  icon: '🕸️', head: 'To related markets', body: 'Price changes ripple to suppliers and complements (substitutes), affecting many linked markets.' }
      ],
      causes2Emoji: '⭐',
      causes2Label: 'Why this matters — including a live UK cascade',
      causes2: [
        { tone: 'rose',  icon: '⚡', head: 'UK energy crisis (2022–24)', body: 'Russian gas supply cuts pushed wholesale gas prices up ~5× in 12 months. Cascade: gas ↑ → electricity (gas is the marginal generator) ↑ → households cut usage and switched to heat pumps; firms switched away from gas heating; offshore-wind and solar investment accelerated. One price signal coordinated millions of unrelated decisions across linked markets — exactly Hayek\'s vision.' },
        { tone: 'green', icon: '🚗', head: 'Electric vehicles and lithium', body: 'Higher lithium prices encourage new mining, battery innovation, and substitutes like LFP batteries.' },
        { tone: 'amber', icon: '☕', head: 'Coffee beans',                 body: 'Higher coffee prices lead cafés to adjust prices, consumers to switch brands, and farmers to plant more.' },
        { tone: 'blue',  icon: '✈️', head: 'Holiday destinations',         body: 'Higher prices for popular destinations shift demand to alternatives and change travel patterns.' }
      ],
      keyTerms: [
        { term: 'Transmission mechanism', def: 'The way price changes in one market propagate through linked markets via supply chains and substitute/complement relationships.' },
        { term: 'Knock-on effects',        def: 'Secondary consequences of a price change as it cascades through downstream and related markets.' },
        { term: 'Resource reallocation',   def: 'The shifting of factors of production (land, labour, capital) toward more valuable uses in response to price signals.' }
      ],
      examEdge: 'Explain the transmission <strong>mechanism</strong>, not just that "price rises". Use language like <strong>signal</strong>, <strong>response</strong>, <strong>resource reallocation</strong>, and <strong>knock-on effects</strong>.'
    },
    {
      id: 'price_functions_5',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Entrepreneurship and the price mechanism',
      tip: {
        icon: '💡',
        tone: 'blue',
        text: 'Entrepreneurs are the living response to the <strong>incentive function</strong> from Card 2: abnormal profits signal unmet demand, attracting capital and labour until the market rebalances. <strong>Rising prices and profits reveal unmet demand or scarcity.</strong> That creates an opportunity: enter the market, innovate, or find a cheaper way to supply the product.'
      },
      flowTitle: 'How entrepreneurs respond',
      flowEmoji: '🚀',
      flow: [
        { tone: 'green',  icon: '🔍', title: 'Spot a price signal',          sub: 'Notice rising prices, shortages or strong demand.' },
        { tone: 'amber',  icon: '📈', title: 'See a profit opportunity',     sub: 'Higher prices suggest consumers are willing to pay more.' },
        { tone: 'blue',   icon: '🌱', title: 'Take a risk / invest',         sub: 'Commit money, time and ideas with uncertainty.' },
        { tone: 'purple', icon: '🧩', title: 'Bring resources together',     sub: 'Combine labour, capital, ideas and technology.' },
        { tone: 'green',  icon: '🏆', title: 'Earn profit if the idea works', sub: 'If consumers value it, profits reward success.' }
      ],
      pairLabel: null,
      left: {
        tone: 'green',
        icon: '👤',
        iconStyle: 'circle',
        label: 'What entrepreneurs do',
        points: [
          'Organise resources to create goods and services.',
          'Innovate with new products, processes or models.',
          'Take risk by investing under uncertainty.',
          'Respond to unmet demand and changing needs.'
        ]
      },
      right: {
        tone: 'blue',
        icon: '⚖️',
        iconStyle: 'circle',
        label: 'Why the price mechanism matters',
        points: [
          'It rewards successful ideas.',
          'It directs resources to where they are valued most.',
          'It encourages efficiency and improvement.',
          'It helps new firms enter and compete.'
        ]
      },
      causesStyle: 'plain-white',
      causesEmoji: '🌍',
      causesLabel: 'Real-world examples',
      causes: [
        { tone: 'green', icon: '🛵', head: 'Food delivery apps', body: '<strong>Price signal:</strong> Busy times mean higher prices and delivery fees.<br><strong>Entrepreneurial response:</strong> Apps enter the market and use tech to match riders with customers.' },
        { tone: 'amber', icon: '⛽', head: 'EV charging',        body: '<strong>Price signal:</strong> High fuel prices and demand for charging.<br><strong>Entrepreneurial response:</strong> Firms invest in charging networks and fast-charging stations.' },
        { tone: 'blue',  icon: '📱', head: 'Revision apps',      body: '<strong>Price signal:</strong> Students value convenient, effective study tools.<br><strong>Entrepreneurial response:</strong> Entrepreneurs create apps with notes, quizzes and personalised plans.' }
      ],
      keyTerms: [
        { term: 'Entrepreneur',           def: 'An economic agent who organises factors of production to create goods/services, bearing risk in search of profit.' },
        { term: 'Creative destruction',   def: 'Schumpeter\'s term for entrepreneurial innovation destroying old industries while creating new ones – the engine of dynamic efficiency.' },
        { term: 'Abnormal profit signal', def: 'Profit above normal return – the price signal that attracts entrepreneurs into a profitable market.' }
      ],
      examEdge: 'Remember: entrepreneurship is linked to <strong>profit incentives</strong> and <strong>dynamic efficiency</strong>. It\'s not just about starting a business – it\'s about <strong>responding to price signals to create value</strong>.'
    },
    {
      id: 'price_functions_6',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'When the price mechanism fails',
      tip: {
        icon: '💡',
        tone: 'blue',
        text: '<em>The price mechanism often coordinates markets well – but not always.</em><br><em>If prices do not reflect all costs and benefits, or if markets are distorted, resources may be allocated inefficiently.</em>'
      },
      causesStyle: 'tinted-flat',
      causesEmoji: '⚠️',
      causesLabel: 'Common sources of failure',
      causes: [
        { tone: 'green',  icon: '🏭', head: 'Externalities',           body: 'Costs or benefits affect others not reflected in prices (e.g. pollution).' },
        { tone: 'blue',   icon: '🏞️', head: 'Public goods',            body: 'Non-excludable and non-rivalrous; markets underprovide them.' },
        { tone: 'amber',  icon: 'ℹ️',  head: 'Information failure',     body: 'Buyers or sellers lack key information; leads to adverse selection or moral hazard.' },
        { tone: 'purple', icon: '👑', head: 'Market power / monopoly', body: 'A firm can influence price above competitive levels; restriction of output.' },
        { tone: 'slate',  icon: '📍', head: 'Factor immobility',       body: 'Resources cannot move freely to where they are most productive.' },
        { tone: 'rose',   icon: '⚖️',  head: 'Merit and demerit goods', body: 'Markets underprovide merit goods and overprovide demerit goods.' },
        { tone: 'blue',   icon: '⏳', head: 'Time lags &amp; sticky prices', body: 'Even when the signal is correct, supply may take years to respond (housing: 5–10 yr lag) and wages are <em>sticky downward</em> (workers resist cuts) — so unemployment can persist. A Level 3→4 evaluation point: not every market failure is about <em>what</em> the price says; some are about <em>how fast</em> the response arrives.' }
      ],
      causes2Style: 'plain-white',
      causes2Emoji: '🔬',
      causes2Label: 'Examples',
      causes2: [
        { tone: 'slate', icon: '🏭', head: 'Pollution',                       body: 'Firms don\'t pay for the full environmental cost, so <strong>too much pollution</strong> is produced.' },
        { tone: 'blue',  icon: '💉', head: 'Vaccination',                     body: 'Benefits extend to others (herd immunity), so private provision is <strong>too low</strong>.' },
        { tone: 'amber', icon: '🚆', head: 'Rail commuters / local monopoly', body: 'Limited alternatives allow <strong>higher prices</strong> and <strong>poorer service</strong> than competition would deliver.' }
      ],
      keyTerms: [
        { term: 'Market failure',       def: 'A situation where the free market fails to allocate resources efficiently – prices fail to signal, incentivise, or ration correctly.' },
        { term: 'Externality',          def: 'A cost or benefit of a transaction that falls on a third party not involved in the exchange.' },
        { term: 'Information asymmetry', def: 'When one side of a transaction has materially better information than the other, distorting decisions and prices.' }
      ],
      examEdge: '<strong>Identify why price no longer gives the correct signal.</strong><br>Then explain the consequence for efficiency and why government intervention may be justified.'
    },
    {
      id: 'price_functions_7',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'Price mechanism vs government allocation',
      tip: {
        icon: '💡',
        tone: 'blue',
        text: 'Markets often allocate resources through prices, but governments also allocate resources through planning, rules, taxes, subsidies, and direct provision. The key question is not <em>"market or government?"</em> but <em>"which works better in this context?"</em>'
      },
      verdict: {
        title: 'Two ways to allocate resources',
        emoji: '⚖️',
        columns: [
          {
            tone: 'green',
            icon: '⚖️',
            label: 'Price mechanism',
            items: [
              { text: 'Decentralised decisions use local knowledge' },
              { text: 'Strong incentives to innovate and improve' },
              { text: 'Quick and flexible responses to change' },
              { text: 'Consumer sovereignty reflects preferences' },
              { text: 'Can be unequal', ok: false },
              { text: 'May fail with market failure', ok: false }
            ]
          },
          {
            tone: 'blue',
            icon: '🏛️',
            label: 'Government allocation',
            items: [
              { text: 'Can pursue equity and redistribution' },
              { text: 'Provide public goods and merit goods' },
              { text: 'Can correct market failure' },
              { text: 'May suffer from bureaucracy and red tape', ok: false },
              { text: 'Weak incentives and less innovation', ok: false },
              { text: 'Risk of government failure and inefficiency', ok: false }
            ]
          }
        ]
      },
      continuum: {
        title: 'When each may work best',
        emoji: '🎯',
        leftCap: 'Markets',
        rightCap: 'Government',
        items: [
          { icon: '🎫', title: 'Concert tickets', verdict: 'Markets work best',     verdictTone: 'green', body: 'Prices respond quickly to demand and supply, ration scarce seats and signal popularity.' },
          { icon: '🏥', title: 'Health care',     verdict: 'Hybrid works best',     verdictTone: 'blue',  body: 'Markets can improve efficiency, but government helps with equity, regulation and information gaps.' },
          { icon: '💡', title: 'Street lighting', verdict: 'Government works best', verdictTone: 'green', dotColor: '#0F766E', body: 'A public good – hard to charge users individually, so markets would underprovide it.' }
        ]
      },
      keyTerms: [
        { term: 'Government failure', def: 'When government intervention produces a worse allocation than the market would – through bureaucracy, poor information, or distorted incentives.' },
        { term: 'Hybrid allocation',  def: 'Combining market exchange with government regulation, subsidies, or direct provision – common in healthcare, education, transport.' },
        { term: 'Contextual judgement', def: 'The exam skill of weighing efficiency vs equity, market failure vs government failure, on the facts of the specific market or policy.' }
      ],
      examEdge: 'Strong answers compare <strong>efficiency and equity</strong>. Recognise <strong>market failure</strong> and <strong>government failure</strong>. Use <strong>examples</strong> and reach a balanced, <strong>contextual judgement</strong> rather than a blanket conclusion.',
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
    title:    'Functions of the Price Mechanism',
    subtitle: 'Theme 1 &middot; Topic 2.7 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('price_functions_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers signalling, incentive, rationing functions, Hayek\'s knowledge problem, entrepreneurship, and when prices fail',
    shortNames: [
      'Hayek MCQ', 'Three functions sort', 'Signal transmission', 'Para fill',
      'Cause & effect', 'Incentive function', 'Match pairs', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: Hayek */
      { type: 'mcq',
        stem: 'Friedrich Hayek argued that the price system is superior to central planning primarily because:',
        opts: [
          'Prices aggregate dispersed knowledge held by millions of individuals – knowledge that no central planner could collect or process efficiently',
          'Prices are always set at the socially optimal level, ensuring allocative efficiency is achieved automatically in all markets',
          'Central planners deliberately suppress prices to benefit powerful interest groups, making markets politically superior',
          'Price signals respond only to short-run changes, whereas planners can take a long-run view'
        ],
        ans: 0,
        exp: 'Hayek\'s core insight in "The Use of Knowledge in Society" (1945): knowledge relevant to resource allocation – about local preferences, costs, opportunities – is dispersed across millions of individuals. No single planner can collect, process, or act on this knowledge in time. <strong>Prices solve this problem automatically</strong>: a single price rise in tin (to use his famous example) coordinates global responses without anyone needing to understand why – miners mine more, manufacturers economise, consumers substitute. The price system aggregates and communicates dispersed knowledge costlessly.'
      },

      /* 2 – Elastic sort: three functions */
      { type: 'elastic_sort',
        stem: 'Classify each example under the correct function of the price mechanism.',
        categories: ['signal', 'incentive', 'rationing'],
        categoryLabels: ['Signalling function', 'Incentive function', 'Rationing function'],
        goods: [
          { icon: '🌾', label: 'Rising wheat prices communicate to farmers that more wheat is needed', note: '', ans: 'signal' },
          { icon: '💰', label: 'High profits in tech attract new software firms to the market', note: '', ans: 'incentive' },
          { icon: '🎫', label: 'High concert ticket prices limit attendance to those willing to pay', note: '', ans: 'rationing' },
          { icon: '🏠', label: 'Rising house prices signal to developers that more homes should be built', note: '', ans: 'signal' },
          { icon: '🚗', label: 'Rising petrol prices encourage drivers to buy more fuel-efficient cars', note: '', ans: 'incentive' },
          { icon: '💊', label: 'High prices for organ transplants would allocate them to the highest bidder', note: '', ans: 'rationing' }
        ],
        exp: '<strong>Signalling</strong>: price changes communicate information about relative scarcity and value – rising prices signal resources are needed there; falling prices signal surplus. <strong>Incentive</strong>: price changes motivate behaviour – profit attracts entry and investment; losses drive exit; energy prices shape consumption choices. <strong>Rationing</strong>: prices allocate scarce goods to those with highest willingness to pay – the "invisible hand" allocating without central direction. All three functions work together.'
      },

      /* 3 – Sequence: price signal transmission through supply chain */
      { type: 'sequence',
        stem: 'A drought in Australia raises global wheat prices. Place the following events in the correct order to show how the <strong>price signal transmits through the supply chain</strong>.',
        instr: 'Tap the steps in the correct order, from first to last.',
        items: [
          { label: 'Global wheat supply falls; wheat price rises on commodity markets', note: '' },
          { label: 'Millers pay more for wheat and raise the price of flour to bread manufacturers', note: '' },
          { label: 'Bread manufacturers face higher input costs and raise the price of bread to supermarkets', note: '' },
          { label: 'Supermarkets pass on higher costs – bread retail prices rise for consumers', note: '' },
          { label: 'Consumers reduce bread consumption and switch to rice, pasta, and other substitutes', note: '' },
          { label: 'High wheat prices incentivise farmers in other countries to plant more wheat next season', note: '' }
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        exp: 'The price signal transmits through the entire supply chain – from commodity market to consumer shelf – without any central coordination. Each link in the chain simply responds to the price signal it faces. Consumers receive the signal at the retail level and adjust behaviour. Producers receive the profit opportunity and adjust supply for the next season. This is the price mechanism working as Hayek described: coordinating the actions of millions of disparate agents through a single number.'
      },

      /* 4 – Para fill: three functions */
      { type: 'para_fill',
        stem: 'Complete the paragraph explaining the three functions of prices.',
        anchor: 'The price mechanism allocates resources through three interconnected functions.',
        para: 'First, prices act as [1] – communicating information about scarcity and surplus to producers and consumers without requiring any central direction. Second, prices provide [2] – rising prices attract resources into profitable markets; falling prices drive resources out. Third, prices perform a [3] function – allocating scarce goods to those with the highest [4] to pay. Together, these functions mean that the [5] can coordinate a complex economy through decentralised decisions. However, when markets [6] – as with externalities or public goods – price signals may no longer accurately reflect [7] costs and benefits.',
        blanks: [
          { id: 1, opts: ['signals', 'barriers', 'costs', 'subsidies'], ans: 0 },
          { id: 2, opts: ['incentives', 'regulations', 'planning', 'taxes'], ans: 0 },
          { id: 3, opts: ['rationing', 'production', 'distribution', 'pricing'], ans: 0 },
          { id: 4, opts: ['willingness', 'ability', 'desire', 'need'], ans: 0 },
          { id: 5, opts: ['price mechanism', 'government', 'central bank', 'regulator'], ans: 0 },
          { id: 6, opts: ['fail', 'succeed', 'clear', 'grow'], ans: 0 },
          { id: 7, opts: ['social', 'private', 'marginal', 'sunk'], ans: 0 }
        ],
        exp: '(1) <strong>Signals</strong> – price changes communicate information without direction. (2) <strong>Incentives</strong> – profit motive drives resource allocation. (3) <strong>Rationing</strong> – prices allocate scarce goods. (4) Highest <strong>willingness</strong> to pay. (5) The <strong>price mechanism</strong> coordinates without a planner. (6) When markets <strong>fail</strong> (externalities, public goods, information asymmetry). (7) Price signals no longer reflect <strong>social</strong> costs and benefits – this is the economic justification for government intervention.'
      },

      /* 5 – Cause & effect: price signals and resource allocation */
      { type: 'cause_effect',
        stem: 'Match each price change to the resource allocation response it triggers.',
        pairs: [
          { cause: 'Avocado prices surge 300% in UK supermarkets', effect: 'Farmers in Mexico and South Africa expand avocado orchards' },
          { cause: 'Oil company profits collapse as renewable energy undercuts fossil fuels', effect: 'Investment shifts away from fossil fuel exploration toward renewables' },
          { cause: 'Skilled data scientist salaries rise to £120,000+ in UK tech firms', effect: 'More students choose computer science degrees and bootcamps' },
          { cause: 'Cheap fast fashion collapses second-hand clothing prices', effect: 'Charity shops struggle to sell donated clothing; some close' },
          { cause: 'Carbon taxes raise the price of coal-fired electricity', effect: 'Energy firms invest in wind and solar to remain cost-competitive' },
          { cause: 'House prices double in a city over 10 years', effect: 'Construction firms redirect resources to build in that city' }
        ],
        exp: 'The price mechanism coordinates resource allocation through the incentive function: rising prices attract resources; falling prices repel them. Each example shows a price change triggering a real-world supply or investment response – without any central direction. This is the Hayekian argument for market allocation: the price signal aggregates dispersed information (scarcity of avocados, skill shortage in data science, housing need) and generates a coordinated response.'
      },

      /* 6 – MCQ: incentive function and entrepreneurship */
      { type: 'mcq',
        stem: 'An entrepreneur observes that electric scooters are selling for high prices with long waiting lists in UK cities. According to the <strong>incentive function</strong> of prices, what action will she likely take?',
        opts: [
          'Enter the electric scooter market – the high price signals high profit potential and attracts new supply',
          'Avoid the market – long waiting lists indicate regulatory barriers that make entry unprofitable',
          'Wait for government guidance on whether to invest – entrepreneurs require policy certainty before acting',
          'Lobby for price controls to benefit consumers – the high price signals market failure requiring intervention'
        ],
        ans: 0,
        exp: 'The <strong>incentive function</strong>: high prices signal profit opportunities → attract entrepreneurial entry → expand supply. A high price with a waiting list is precisely the signal that draws entrepreneurs: it shows consumers value the good more than current suppliers are providing it. Entry increases supply → price eventually falls → the shortage resolves. This is the market self-correcting mechanism. The entrepreneur acts without knowing why prices are high – only needing the price signal to identify the opportunity. This demonstrates Hayek\'s point about dispersed knowledge.'
      },

      /* 7 – Match pairs: when prices fail */
      { type: 'match_pairs',
        stem: 'Match each market failure type to why it causes the price signal to break down.',
        pairs: [
          { a: 'Negative externality', b: 'Price too low – social cost exceeds private cost; overproduction' },
          { a: 'Positive externality', b: 'Price too high – private benefit understates social benefit; underproduction' },
          { a: 'Public good', b: 'Market price cannot be charged – non-excludability prevents revenue collection' },
          { a: 'Information asymmetry', b: 'Price reflects only one party\'s information; other party cannot assess true value' },
          { a: 'Monopoly power', b: 'Price set above competitive level (P > MC) – rationing function distorted upward' },
          { a: 'Merit good undervaluation', b: 'Consumers underestimate long-run benefit – willingness to pay understates social value' }
        ],
        exp: 'The price mechanism only works well when prices accurately reflect all costs and benefits. Each market failure represents a case where this breaks down: externalities mean private and social values diverge; public goods cannot be priced at all; information gaps mean one party misprices; monopoly power distorts above competitive price; merit good undervaluation means consumers\' WTP understates true social value. In each case, the price signal gives inaccurate information – justifying potential government correction.'
      },

      /* 8 – Odd one out: rationing function */
      { type: 'odd_one_out',
        stem: 'Three of these are examples of the <strong>rationing function</strong> of prices. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🎫', label: 'Dynamic pricing for train tickets means peak-hour travellers pay more, reducing demand at busy times', note: '' },
          { icon: '🏠', label: 'High house prices in London allocate homes to those with highest purchasing power', note: '' },
          { icon: '⛽', label: 'A petrol price spike during a supply shock causes drivers to reduce consumption', note: '' },
          { icon: '📈', label: 'Rising tech company salaries attract graduates to computer science degrees rather than arts subjects', note: '' }
        ],
        ans: 3,
        exp: 'The odd one out is <strong>rising salaries attracting graduates to computer science</strong>. This is an example of the <strong>incentive function</strong> of prices (high wages motivating people to acquire skills and enter a market), not the rationing function. The other three all show prices <em>rationing</em> access to scarce goods: peak train pricing reduces overcrowding; high London house prices restrict access; petrol price spike reduces consumption during shortage.'
      },

      /* 9 – Data table: carbon price and signalling */
      { type: 'data_table',
        stem: 'The table shows UK carbon price (ETS) and energy mix data 2015–2022.',
        headers: ['Year', 'Carbon price (£/tonne CO₂)', 'Coal share of electricity (%)', 'Renewables share (%)'],
        rows: [
          ['2015', '5', '22%', '25%'],
          ['2018', '14', '5%', '33%'],
          ['2021', '50', '2%', '42%'],
          ['2022', '65', '1%', '47%']
        ],
        question: 'Which conclusion is <strong>best supported</strong> by the data in terms of the price mechanism?',
        opts: [
          'Rising carbon prices sent a price signal to energy firms – coal became uncompetitive, renewables became relatively more attractive; the data show the signalling and incentive functions working as theory predicts',
          'The fall in coal use proves that carbon pricing alone was responsible for the energy transition – no other factors were relevant',
          'The data show that carbon pricing has failed because coal still accounts for 1% of electricity generation in 2022',
          'Rising carbon prices show the rationing function of prices: only the richest can afford to use coal'
        ],
        ans: 0,
        exp: 'The data show a strong correlation between rising carbon prices (£5 → £65/tonne) and a collapse in coal\'s share (22% → 1%) alongside a rise in renewables (25% → 47%). This is consistent with the <strong>signalling and incentive functions</strong> working as Pigouvian tax theory predicts: the carbon price makes coal more expensive, signalling its social cost, and incentivising investment in cheaper renewables. Option B is too strong (technology costs, subsidies, and regulation also played roles). Option C misreads the data as failure when 1% is a near-elimination. Option D misapplies the rationing concept.'
      },

      /* 10 – Multi-select: evaluation of the price mechanism */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay evaluating the price mechanism as an allocator of resources. Which statements demonstrate <strong>genuine evaluation</strong>?',
        opts: [
          'The price mechanism allocates resources through signalling, incentive, and rationing functions without requiring central direction',
          'While the price mechanism efficiently allocates resources in competitive markets with good information, its rationing function may produce socially unacceptable distributions – in healthcare or housing, allocation by willingness to pay excludes those with low income from goods society may consider essential, justifying a mixed economy approach',
          'The price mechanism is always better than government allocation because governments are prone to political distortion and information failure',
          'Hayek\'s knowledge argument is strongest for goods with rapid, localised information (commodity prices, fashion demand) but weaker for goods requiring long-term coordination or where market signals are distorted by externalities – suggesting the case for market allocation is context-dependent rather than universal',
          'The price mechanism signals scarcity through rising prices',
          'Carbon pricing shows that properly designed price signals can internalise externalities, restoring the signalling function – but this requires government to set the price correctly, reintroducing exactly the information problem Hayek identified with planning'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: weighs the efficiency argument against distributional concerns and reaches a qualified conclusion (mixed economy needed). D: limits the Hayek argument to specific contexts rather than accepting it universally – context-dependent evaluation. F: identifies a paradox in Pigouvian taxation – it restores price signals but requires the government to know the correct price, reintroducing the very knowledge problem it solves. Option A is description of the mechanism. Option C is a one-sided assertion without qualification. Option E is description without application or qualification.'
      }

    ]
  };

})();

