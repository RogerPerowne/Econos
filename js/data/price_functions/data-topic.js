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
      pairFirst: true,
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
      diagramLabel: 'How rationing works',
      diagramEmoji: '⚖️',
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
        { term: 'Willingness to pay',  def: 'The maximum price a buyer would offer for a unit — combines both need and income.' },
        { term: 'Non-market rationing', def: 'Alternatives to price rationing: queuing (NHS), vouchers, lottery, merit assessment — used when price rationing produces inequitable outcomes.' }
      ],
      examEdge: 'The price mechanism rations <strong>efficiently in one sense</strong> — it matches supply and demand quickly and uses resources well. But it is <strong>not always fair</strong>. In exams, mention both <strong>efficiency</strong> (good use of scarce resources) and <strong>equity</strong> (fairness and access).'
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
      causes2Label: 'Why this matters',
      causes2: [
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
        text: 'Entrepreneurs watch prices closely. <strong>Rising prices and profits reveal unmet demand or scarcity.</strong> That creates an opportunity: enter the market, innovate, or find a cheaper way to supply the product.'
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
        { term: 'Creative destruction',   def: 'Schumpeter\'s term for entrepreneurial innovation destroying old industries while creating new ones — the engine of dynamic efficiency.' },
        { term: 'Abnormal profit signal', def: 'Profit above normal return — the price signal that attracts entrepreneurs into a profitable market.' }
      ],
      examEdge: 'Remember: entrepreneurship is linked to <strong>profit incentives</strong> and <strong>dynamic efficiency</strong>. It\'s not just about starting a business — it\'s about <strong>responding to price signals to create value</strong>.'
    },
    {
      id: 'price_functions_6',
      template: 'cause',
      title: 'When the price mechanism fails',
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
      title: 'Price mechanism vs government allocation',
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
