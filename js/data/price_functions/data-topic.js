window.ECONOS_TOPIC = {
  id: 'price_functions',
  topicNum: '1.11',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Functions of the Price Mechanism',
  estTime: '7-9 minutes',
  goal: 'Lock in how prices signal, incentivise, ration and transmit information — and why market failure occurs when these functions break down.',
  intro: {
    heroKey: 'market',
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
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Functions of the price mechanism: the big picture',
      lede: 'Prices do three jobs at once — and that is how markets allocate resources without anyone in charge.',
      branches: [
        { tone: 'blue',   label: 'Signalling',                 sub: 'Prices broadcast information about relative scarcity. A rise tells producers to expand and consumers to economise — no central planner required.' },
        { tone: 'green',  label: 'Incentives',                 sub: 'Higher prices reward producers who supply scarce goods; lower prices punish those producing unwanted ones. Self-interest does the heavy lifting.' },
        { tone: 'amber',  label: 'Rationing',                  sub: 'When supply is scarce, rising prices ration the good to those who value it most — and choke off lower-value uses.' },
        { tone: 'purple', label: 'Entrepreneurship',           sub: 'Price gaps between costs and willingness-to-pay reveal profit opportunities. Entrepreneurs spot them and reallocate resources.' },
        { tone: 'rose',   label: 'When prices fail',           sub: 'Externalities, public goods and information gaps stop prices reflecting true social costs — the bridge into market failure.' }
      ],
      body: 'Prices communicate information about relative scarcity and value across markets — without anyone needing to understand the big picture.<br><br>A price rise signals that a good is becoming scarcer relative to demand. This information reaches producers, who expand supply, and consumers, who economise. Neither needs to know why the price rose — just that it did.<br><br><strong>Hayek\'s insight:</strong> the price system aggregates dispersed knowledge that no central planner could possess. Millions of individual decisions — crop harvests, consumer preferences, technological costs — are compressed into a single price that guides all market participants simultaneously.',
      keyTerms: [
        { term: 'Price signal', def: 'A price change that communicates information about relative scarcity or value, guiding resource allocation decisions.' },
        { term: 'Dispersed knowledge', def: 'Hayek\'s concept: relevant economic knowledge is distributed across millions of individuals — no central authority can aggregate it as efficiently as prices do.' },
        { term: 'Information aggregation', def: 'The process by which prices combine information from all market participants into a single number that guides decisions.' }
      ],
      examEdge: 'Hayek vs Keynes/Pigou on prices: Hayek argues prices convey information that planners cannot access → markets superior to planning. Pigou argues prices fail when external costs exist → government must correct price signals. Both are correct in their domain — high-level evaluation for essays on government vs market.'
    },
    {
      id: 'price_functions_2',
      template: 'framing',
      title: 'Prices as Incentives',
      body: 'Prices create incentives to respond to scarcity signals:<br><br>• <strong>Rising prices</strong> incentivise producers to expand output, invest in new capacity, and innovate to reduce costs. New entrepreneurs enter profitable markets, drawn by the profit signal.<br>• <strong>Falling prices</strong> signal oversupply — incentivise firms to reduce output, shift to other products, or exit the market.<br><br>The <strong>profit motive</strong> is the engine of the incentive function. Profit = the difference between price and cost. High prices → higher profit → strong incentive to supply. Loss → incentive to exit or cut costs.',
      keyTerms: [
        { term: 'Incentive function', def: 'Prices motivate producers and consumers to adjust behaviour in response to scarcity signals — the mechanism by which markets self-correct.' },
        { term: 'Profit signal', def: 'Abnormal profit signals under-supply of a good, attracting new entrants. Losses signal over-supply, causing exit.' },
        { term: 'Entry and exit', def: 'The mechanism by which the incentive function restores equilibrium — new firms enter profitable markets; unprofitable firms exit.' }
      ],
      examEdge: 'The incentive function is undermined by barriers to entry. If firms cannot enter profitable markets (e.g. natural monopoly, legal protections), the price signal is present but the incentive cannot be acted on — market stays below efficient output. This is one reason monopoly is inefficient.'
    },
    {
      id: 'price_functions_3',
      template: 'framing',
      title: 'Prices as a Rationing Device',
      body: 'When supply is scarce relative to demand, prices ration access to the available goods:<br><br>• Price rises until only those willing and able to pay the higher price remain in the market<br>• Goods flow to those who value them most highly (as expressed by willingness to pay)<br>• No government queuing system or central authority is needed<br><br><strong>Criticism of the rationing function:</strong> willingness to pay reflects both value AND income. Rich consumers outbid poor ones even if the poor need the good more urgently. The price mechanism rations by purchasing power, not need — a major objection to pure market allocation of goods like healthcare, education, and housing.',
      keyTerms: [
        { term: 'Rationing function', def: 'Prices allocate scarce goods among competing buyers by excluding those unwilling or unable to pay the market price.' },
        { term: 'Willingness to pay', def: 'The maximum price a buyer would offer for a unit — combines both need and income.' },
        { term: 'Non-market rationing', def: 'Alternatives to price rationing: queuing (NHS), vouchers, lottery, merit assessment — used when price rationing produces inequitable outcomes.' }
      ],
      examEdge: 'The rationing function is why economists argue against rent controls and price ceilings: if price cannot ration, queuing and shortage result — less efficient and often still inequitable. The counter-argument: price rationing excludes low-income consumers regardless of need — normative question about equity vs efficiency.'
    },
    {
      id: 'price_functions_4',
      template: 'mechanisms',
      title: 'How Price Signals Transmit Through Markets',
      intro: 'Price signals cascade through interconnected markets — a change in one market ripples through others via supply chains and complementary/substitute relationships.',
      steps: [
        { label: 'Initial shock', text: 'Drought reduces wheat harvest → wheat supply falls → wheat price rises sharply. The signal: wheat is scarcer.' },
        { label: 'Direct response', text: 'Bread producers face higher input costs → reduce output or raise bread prices. Consumers switch to rice or potatoes (substitutes). Farmers incentivised to plant more wheat next season.' },
        { label: 'Downstream transmission', text: 'Higher bread prices raise costs for sandwich shops, school canteens, catering firms. Profits squeezed → some raise prices, some reduce portion sizes.' },
        { label: 'Long-run correction', text: 'High wheat prices persist → more farmland switched to wheat next season → supply rises → price falls back. Price signal has coordinated reallocation without central direction.' }
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
      causes: [
        { head: 'Externalities', body: 'External costs and benefits are not captured in market prices. Pollution: the social cost exceeds the private cost reflected in price → price signal understates true cost → overproduction of polluting goods.' },
        { head: 'Public goods', body: 'Non-excludability means the price mechanism cannot charge for public goods → free rider problem → no profit signal → zero market supply of socially valuable goods (defence, street lighting).' },
        { head: 'Information asymmetries', body: 'Sellers may have better information than buyers (used cars, insurance) → prices don\'t accurately reflect quality → adverse selection and market unravelling (Akerlof\'s "Market for Lemons").' },
        { head: 'Monopoly power', body: 'Firms with market power set P > MC → price signal overstates scarcity → consumers buy less than optimal. Price signal distorted by market power, not just cost and demand.' },
        { head: 'Merit and demerit goods', body: 'Consumers may not have perfect information about the value of healthcare, education (merit goods) or the harm of tobacco (demerit goods) → demand signals don\'t reflect true social value.' }
      ],
      examEdge: 'Market failure = price mechanism failure. Each type of market failure represents a specific way in which prices fail to signal, incentivise, or ration correctly. Always tie market failure back to which function of price has broken down — this earns analytical marks above description.'
    },
    {
      id: 'price_functions_7',
      template: 'paired',
      title: 'Price Mechanism vs Government Allocation',
      left: {
        label: 'Price mechanism advantages',
        points: [
          'Uses dispersed local knowledge — no central information requirement',
          'Automatic adjustment — no government decisions needed',
          'Dynamic efficiency — profit signals drive innovation',
          'Consumer sovereignty — production reflects revealed preferences',
          'Efficient resource allocation when prices reflect all costs and benefits'
        ]
      },
      right: {
        label: 'Government allocation advantages',
        points: [
          'Can correct externalities by adjusting prices (taxes, subsidies)',
          'Can provide public goods that markets under-supply',
          'Can address distributional concerns — price mechanism rations by income, not need',
          'Can overcome information failures through regulation and standards',
          'Can take account of long-run social benefits that short-term market prices ignore'
        ]
      },
      examEdge: 'Neither system is universally superior — the optimal choice is context-specific. Markets excel at allocating private goods with well-defined property rights and no externalities. Government is needed where prices fail to capture social costs/benefits. The debate is always about the marginal case — not an all-or-nothing choice.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }
  ]
};
