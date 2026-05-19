window.ECONOS_TOPIC = {
  id: 'price_functions',
  topicNum: '2.7',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'The Price Mechanism',
  estTime: '7-9 minutes',
  goal: 'Lock in how prices signal, incentivise, ration and transmit information — and why market failure occurs when these functions break down.',
  intro: {
    heroKey: 'heroPrice',
    summary: 'Prices do far more than measure value — they coordinate economic activity across millions of decentralised agents without central direction. Understanding these functions explains both why markets are powerful and why they sometimes fail.',
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
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
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
        tiles: [
          { tone: 'green', icon: '📡', title: 'Signalling', body: 'Changing prices give information about scarcity and consumer demand.' },
          { tone: 'amber', icon: '🏃', title: 'Incentive',  body: 'Rising prices encourage producers and consumers to change behaviour.' },
          { tone: 'blue',  icon: '👥', title: 'Rationing',  body: 'Prices allocate scarce goods to those willing and able to pay.' }
        ],
        diagramKey: 'priceMechanismFlow'
      },
      economistQuote: {
        portraitKey: 'economistHayek',
        tone: 'amber',
        label: 'Economist insight',
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
        { term: 'Dispersed knowledge', def: 'Hayek\'s concept: relevant economic knowledge is distributed across millions of individuals — no central authority can aggregate it as efficiently as prices do.' },
        { term: 'Efficient allocation', def: 'A pattern of resource use where goods flow to their most highly-valued uses and producers respond to genuine consumer demand.' }
      ],
      examEdge: 'Strong answers explain the link between prices and resource allocation. Don\'t just say "prices change behaviour" — show how this leads to efficient allocation.'
    },
    {
      id: 'price_functions_2',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Prices as incentives',
      tip: {
        icon: '💡',
        tone: 'blue',
        text: '<em>Higher prices encourage producers to supply more and consumers to buy less — lower prices do the opposite.</em><br>Prices therefore act like <strong>signals with consequences</strong> — they change behaviour.'
      },
      pairLabel: 'How prices change behaviour',
      pairEmoji: '⚖️',
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
        { term: 'Incentive function', def: 'Prices motivate producers and consumers to adjust behaviour in response to scarcity signals — the mechanism by which markets self-correct.' },
        { term: 'Profit signal',      def: 'Abnormal profit signals under-supply of a good, attracting new entrants. Losses signal over-supply, causing exit.' },
        { term: 'Entry and exit',     def: 'The mechanism by which the incentive function restores equilibrium — new firms enter profitable markets; unprofitable firms exit.' }
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
        text: '<em>When a product is scarce, price helps ration it. A higher price does not create more tickets or more seats today — it decides who gets them.</em><br>In a market, scarce goods usually go to those <strong>willing and able to pay</strong>.'
      },
      diagramKey: 'priceRationingScarcity',
      flowTitle: 'How rationing works',
      flowEmoji: '⚖️',
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
      causes2Style: 'plain-white',
      causes2Emoji: '🌍',
      causes2Label: 'Real-world examples',
      causes2: [
        { tone: 'green', icon: '🎪', head: 'Festival tickets',      body: 'Higher prices mean tickets go to those who value the experience most.' },
        { tone: 'amber', icon: '🚆', head: 'Peak-time train fares', body: 'Higher fares at busy times reduce crowding and manage limited seats.' },
        { tone: 'blue',  icon: '🏠', head: 'Rental housing',        body: 'Higher rents ration limited homes to those willing and able to pay.' }
      ],
      keyTerms: [
        { term: 'Rationing function',  def: 'Prices allocate scarce goods among competing buyers by excluding those unwilling or unable to pay the market price.' },
        { term: 'Willingness to pay',  def: 'The maximum price a buyer would offer for a unit — combines both need and income.' },
        { term: 'Non-market rationing', def: 'Alternatives to price rationing: queuing (NHS), vouchers, lottery, merit assessment — used when price rationing produces inequitable outcomes.' }
      ],
      examEdge: 'The price mechanism rations <strong>efficiently in one sense</strong> — it matches supply and demand quickly and uses resources well. But it is <strong>not always fair</strong>. In exams, mention both <strong>efficiency</strong> (good use of scarce resources) and <strong>equity</strong> (fairness and access).'
    },
    {
      id: 'price_functions_4',
      template: 'mechanisms',
      title: 'How Price Signals Transmit Through Markets',
      intro: 'Price signals cascade through interconnected markets — a change in one market ripples through others via supply chains and complementary/substitute relationships.',
      steps: [
        { label: '🌾 Initial shock', text: 'Drought reduces wheat harvest → wheat supply falls → wheat price rises sharply. The signal: wheat is scarcer.' },
        { label: '🍞 Direct response', text: 'Bread producers face higher input costs → reduce output or raise bread prices. Consumers switch to rice or potatoes (substitutes). Farmers incentivised to plant more wheat next season.' },
        { label: '🥪 Downstream transmission', text: 'Higher bread prices raise costs for sandwich shops, school canteens, catering firms. Profits squeezed → some raise prices, some reduce portion sizes.' },
        { label: '📈 Long-run correction', text: 'High wheat prices persist → more farmland switched to wheat next season → supply rises → price falls back. Price signal has coordinated reallocation without central direction.' }
      ],
      examEdge: 'Supply chain transmission questions are common in Paper 1 extracts. Trace the chain: input price shock → cost rise for producers → supply shift in output market → price adjustment → consumer and downstream responses. Each step is a transmission of the price signal through the system.'
    },
    {
      id: 'price_functions_5',
      template: 'framing',
      title: 'Entrepreneurship and the Price Mechanism',
      body: 'The <strong>entrepreneur</strong> (Schumpeter\'s "creative destroyer") plays a crucial role in the price mechanism: by spotting profit opportunities (price signals), taking risks, and bringing new products to market, entrepreneurs drive the allocation of resources toward unmet demand.<br><br><strong>Role in the price mechanism:</strong><br>• Identifies markets where price exceeds cost (abnormal profit signals)<br>• Bears the risk of resource deployment in uncertain environments<br>• Innovates — creating new products and services, destroying old ones<br>• Coordinates factors of production to respond to consumer demand<br><br>Without entrepreneurs, price signals would exist but no one would act on them.',
      keyTerms: [
        { term: 'Entrepreneur', def: 'An economic agent who organises factors of production to create goods/services, bearing risk in search of profit.' },
        { term: 'Creative destruction', def: 'Schumpeter\'s term for entrepreneurial innovation destroying old industries while creating new ones — the engine of dynamic efficiency.' },
        { term: 'Abnormal profit signal', def: 'Profit above normal return — the price signal that attracts entrepreneurs into a profitable market.' }
      ],
      examEdge: 'Linking entrepreneurship to the price mechanism: "Without entrepreneurship, the price mechanism cannot function — prices signal profit opportunities, but only entrepreneurs convert those signals into new supply. This is why countries with poor property rights, high corruption, or regulatory barriers fail to respond to price signals efficiently." A sophisticated analytical connection.'
    },
    {
      id: 'price_functions_6',
      template: 'cause',
      title: 'When the Price Mechanism Fails',
      causesStyle: 'tinted-flat',
      causesEmoji: '⚠️',
      causesLabel: 'Five routes to price mechanism failure',
      causes: [
        { icon: '💨', head: 'Externalities', body: 'External costs and benefits are not captured in market prices. Pollution: the social cost exceeds the private cost reflected in price → price signal understates true cost → overproduction of polluting goods.' },
        { icon: '🏛️', head: 'Public goods', body: 'Non-excludability means the price mechanism cannot charge for public goods → free rider problem → no profit signal → zero market supply of socially valuable goods (defence, street lighting).' },
        { icon: '📊', head: 'Information asymmetries', body: 'Sellers may have better information than buyers (used cars, insurance) → prices don\'t accurately reflect quality → adverse selection and market unravelling (Akerlof\'s "Market for Lemons").' },
        { icon: '🏗️', head: 'Monopoly power', body: 'Firms with market power set P > MC → price signal overstates scarcity → consumers buy less than optimal. Price signal distorted by market power, not just cost and demand.' },
        { icon: '🍎', head: 'Merit and demerit goods', body: 'Consumers may not have perfect information about the value of healthcare, education (merit goods) or the harm of tobacco (demerit goods) → demand signals don\'t reflect true social value.' }
      ],
      examEdge: 'Market failure = price mechanism failure. Each type of market failure represents a specific way in which prices fail to signal, incentivise, or ration correctly. Always tie market failure back to which function of price has broken down — this earns analytical marks above description.'
    },
    {
      id: 'price_functions_7',
      template: 'framing',
      title: 'Price Mechanism vs Government Allocation',
      verdict: {
        leftLabel: '📈 Price mechanism',
        rightLabel: '🏛️ Government allocation',
        separator: 'VS',
        rows: [
          { aspect: 'Information', left: 'Uses dispersed local knowledge — no central information requirement', right: 'Can correct externalities by adjusting prices (taxes, subsidies)' },
          { aspect: 'Adjustment', left: 'Automatic — no government decisions or delays needed', right: 'Can provide public goods that markets under-supply' },
          { aspect: 'Efficiency', left: 'Dynamic efficiency — profit signals drive innovation', right: 'Can overcome information failures through regulation and standards' },
          { aspect: 'Equity', left: 'Rations by ability to pay — may exclude the poorest', right: 'Can address distributional concerns — price mechanism rations by income, not need' }
        ]
      },
      examEdge: 'Neither system is universally superior — the optimal choice is context-specific. Markets excel at allocating private goods with well-defined property rights and no externalities. Government is needed where prices fail to capture social costs/benefits. The debate is always about the marginal case — not an all-or-nothing choice.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
