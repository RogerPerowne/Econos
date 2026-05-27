(function () {

  window.ECONOS_QUIZ = {
    id:       'economic_systems_main',
    topicId:  'economic_systems_main',
    title:    'Economic Systems',
    subtitle: 'Theme 1 &middot; Topic 1.6 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'economic_systems_main' }),
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
        id: 'q_es_1',
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
        id: 'q_es_2',
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
        id: 'q_es_3',
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
        id: 'q_es_4',
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
        id: 'q_es_5',
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
        id: 'q_es_6',
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
        id: 'q_es_7',
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
        id: 'q_es_8',
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
        id: 'q_es_9',
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
        id: 'q_es_10',
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
