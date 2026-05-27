(function () {

  window.ECONOS_QUIZ = {
    id:       'price_functions_main',
    topicId:  'price_functions_main',
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
        id: 'q_pf_1',
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
        id: 'q_pf_2',
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
        id: 'q_pf_3',
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
        id: 'q_pf_4',
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
        id: 'q_pf_5',
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
        id: 'q_pf_6',
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
        id: 'q_pf_7',
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
        id: 'q_pf_8',
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
        id: 'q_pf_9',
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
        id: 'q_pf_10',
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
