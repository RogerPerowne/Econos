window.ECONOS_TOPIC = {
  id: 'supply',
  topicNum: '2.4',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Supply',
  estTime: '7-9 minutes',
  goal: 'Lock in the law of supply, supply curve analysis, producer surplus, and all the non-price determinants that shift the supply curve.',
  intro: {
    heroKey: 'heroSupplyDemand',
    summary: 'Supply is the quantity of a good producers are willing and able to offer for sale at each price level. Understanding what moves along the supply curve versus what shifts it is the mirror of demand analysis — both are essential for all market diagrams.',
    doInThis: 'Work through 7 cards covering the law of supply, movements vs shifts, non-price supply determinants, producer surplus, joint supply, supply in context, and how supply fits into market analysis.',
    outcomes: [
      'State the law of supply and explain why supply curves slope upward',
      'Distinguish a movement along the supply curve from a shift',
      'List and explain the non-price determinants of supply',
      'Illustrate and interpret producer surplus'
    ],
    tip: 'Price change → movement ALONG supply curve (extension = price up; contraction = price down). Non-price change → SHIFT of the whole supply curve. Right = increase; left = decrease.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'supply_1',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Supply: the big picture',
      tip: 'A supply curve shows how much producers are willing and able to sell at different prices. Higher price usually means higher quantity supplied — but only ceteris paribus.',
      diagramKey: 'supplyCurveBasic',
      keyPoints: [
        { icon: '🏷️', title: 'Price',             body: 'The market price is what producers receive for each unit sold.',                                 tone: 'green'  },
        { icon: '📈', title: 'Profit incentive',  body: 'Higher prices increase potential profit, encouraging firms to supply more.',                     tone: 'amber'  },
        { icon: '📦', title: 'Quantity supplied', body: 'The amount producers are willing and able to sell at a given price.',                            tone: 'purple' }
      ],
      keyTerms: [
        { term: 'Law of supply', def: 'Ceteris paribus: higher price → higher quantity supplied. Price and quantity supplied move in the same direction.' },
        { term: 'Supply curve', def: 'A graph showing quantity supplied at each possible price — upward sloping under normal conditions.' },
        { term: 'Extension of supply', def: 'Rise in quantity supplied caused by a price increase — movement up the existing supply curve.' }
      ],
      examEdge: 'Do not confuse a movement along the supply curve with a shift of the supply curve — that depends on non-price factors. Always state ceteris paribus when explaining the law of supply.'
    },
    {
      id: 'supply_2',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Movement Along vs Shift of the Supply Curve',
      tip: 'If the good\'s own price changes, move along the curve. If anything else changes producers\' willingness or ability to sell, the whole curve shifts.',
      diagramKey: 'supplyMovementVsShift',
      causesLabel: false,
      causesStyle: 'tinted-flat',
      causes: [
        { icon: '🏷️', head: 'Price change',         body: 'A change in price causes a movement along the existing supply curve.', tone: 'green'  },
        { icon: '🏭', head: 'Costs of production', body: 'Higher costs shift supply left. Lower costs shift supply right.',         tone: 'purple' },
        { icon: '💻', head: 'Technology',          body: 'Better technology often reduces costs and shifts supply to the right.',  tone: 'blue'   },
        { icon: '🏛️', head: 'Tax or subsidy',       body: 'A tax shifts supply left. A subsidy shifts supply right.',               tone: 'amber'  }
      ],
      examEdge: 'A very common mistake is to say "demand changed" or "supply shifted" when the only thing that changed was price. In that case, it is a movement along the supply curve.'
    },
    {
      id: 'supply_3',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Non-Price Determinants of Supply',
      tip: 'Supply shifts when firms\' costs, productivity or business conditions change — even if the product\'s price stays the same.',
      diagramKey: 'supplyShiftDualMini',
      causesLabel: false,
      causesStyle: 'tinted-flat',
      causes: [
        { icon: '💰', head: 'Costs of production',                  body: 'Lower input prices, wages or transport costs reduce costs, shifting supply right.',                                          tone: 'green'  },
        { icon: '⚙️', head: 'Productivity and technology',          body: 'Better technology or more efficient processes let firms produce more at each price.',                                       tone: 'amber'  },
        { icon: '🏛️', head: 'Indirect taxes and subsidies',         body: 'Taxes raise costs and shift supply left; subsidies lower costs and shift supply right.',                                    tone: 'blue'   },
        { icon: '👥', head: 'Number of firms in the market',        body: 'More firms mean a greater quantity supplied at every price (right shift).',                                                  tone: 'purple' },
        { icon: '⛈️', head: 'Weather / natural shocks',              body: 'Good weather can increase supply (right); bad weather reduces supply (left).',                                              tone: 'green'  },
        { icon: '📋', head: 'Government regulation / expectations', body: 'Looser regulation or optimistic outlooks increase supply; stricter rules or pessimism reduce it.',                           tone: 'amber'  }
      ],
      summary: {
        icon: '💭',
        label: 'How to think about it',
        items: [
          { icon: '→', label: 'Shifts supply right', body: 'Lower costs, better technology, subsidy, more firms.', tone: 'green'  },
          { icon: '←', label: 'Shifts supply left',  body: 'Higher costs, tax, stricter regulation, bad weather.', tone: 'purple' }
        ]
      },
      examEdge: 'Always explain the mechanism: higher costs reduce profitability, so firms are willing and able to supply less at every price.'
    },
    {
      id: 'supply_4',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Producer Surplus',
      tip: 'Producer surplus is the difference between the market price firms receive and the minimum price they would have been willing to accept.',
      diagramKey: 'producerSurplus',
      keyPoints: [
        { icon: '📈', title: 'Price rises',             body: 'Surplus expands.',                              tone: 'green'  },
        { icon: '💸', title: 'Costs fall',              body: 'Supply shifts right and surplus can grow.',     tone: 'amber'  },
        { icon: '🛡️', title: 'Price controls / shocks', body: 'Surplus may shrink.',                           tone: 'purple' }
      ],
      keyTerms: [
        { term: 'Producer surplus', def: 'The difference between the price a firm receives and the minimum price it would have been willing to accept — the area below market price and above the supply curve.' },
        { term: 'Marginal cost', def: 'The cost of producing one additional unit — the supply curve shows marginal cost at each level of output.' },
        { term: 'Welfare', def: 'Total welfare = consumer surplus + producer surplus. Market efficiency is maximised at competitive equilibrium where total surplus is greatest.' }
      ],
      examEdge: 'When drawing or explaining producer surplus, be precise about the shaded area and link it to willingness to supply, not willingness to pay.'
    },
    {
      id: 'supply_5',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Joint Supply and Competing Supply',
      tip: 'Some products are supplied together, while others compete for the same scarce resources. That means one supply decision can affect another market.',
      diagramKey: 'jointVsCompetingSupply',
      left: {
        tone: 'green',
        icon: '🔑',
        label: 'Key idea — Joint supply',
        points: [
          'Products are produced together.',
          'More of one means more of the other.'
        ]
      },
      right: {
        tone: 'purple',
        icon: '⚖️',
        label: 'Key idea — Competing supply',
        points: [
          'Products use the same scarce resources.',
          'More of one can mean less of the other.'
        ]
      },
      keyTerms: [
        { term: 'Joint supply', def: 'When two goods are produced together — output of one automatically produces the other.' },
        { term: 'Competing supply', def: 'When the same resources can produce either of two goods — more of one means less of the other.' },
        { term: 'By-product', def: 'A secondary output produced alongside the primary output in a production process.' }
      ],
      examEdge: 'These ideas often help explain why supply changes in related markets, especially agriculture, energy and manufacturing.'
    },
    {
      id: 'supply_6',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Supply in Context: Key Markets',
      tip: 'Supply behaves differently across markets because time, capacity, stock levels and nature all affect how easily producers can respond.',
      note: {
        icon: '⚖️',
        label: 'Short run vs long run',
        body: 'In the short run, supply is often less responsive due to fixed factors and constraints. In the long run, firms can adjust capacity, resources and technology more fully.',
        tone: 'green'
      },
      causesLabel: false,
      causesStyle: 'tinted-flat',
      causes: [
        { icon: '🌱', head: 'Agriculture',                  body: 'Supply is strongly affected by weather and growing seasons. Bad weather or pests can sharply reduce output in the short run.',                tone: 'green' },
        { icon: '🏠', head: 'Housing',                      body: 'Supply is slow to respond in the short run due to planning, approvals and construction lags. More responsive in the long run.',              tone: 'green' },
        { icon: '🛢️', head: 'Energy / oil',                  body: 'Supply requires large capital investment and infrastructure. Global shocks, geopolitics and OPEC decisions can shift supply.',                tone: 'green' },
        { icon: '🛒', head: 'Manufactured consumer goods', body: 'Supply can often respond more quickly if spare capacity exists. Firms can increase output with existing machinery and labour.',                tone: 'green' }
      ],
      summary: {
        icon: '❓',
        label: 'What to ask in context',
        items: [
          { icon: '⏱️', label: 'How quickly can output change?', tone: 'purple' },
          { icon: '⚙️', label: 'Are there spare resources?',     tone: 'purple' },
          { icon: '🏛️', label: 'Is production limited by nature, capacity or regulation?', tone: 'purple' },
          { icon: '🌐', label: 'Is the market local, national or global?', tone: 'purple' }
        ]
      },
      examEdge: 'Strong application means using the market context to explain why supply may be more or less responsive.'
    },
    {
      id: 'supply_7',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'Supply and the Profit Motive',
      tip: 'The law of supply is rooted in incentives: when selling becomes more profitable, firms usually want to produce more.',
      chain: {
        title: 'How the profit motive drives supply',
        items: [
          { icon: '🏷️', title: 'Higher market price',           body: 'When the market price rises, each unit sold is worth more.',                              tone: 'green'  },
          { icon: '📈', title: 'Higher potential revenue / profit', body: 'With costs unchanged in the short run, higher price raises potential profit per unit.', tone: 'amber'  },
          { icon: '🏭', title: 'Firms expand output or enter the market', body: 'Existing firms produce more and/or new firms are attracted by higher profits.', tone: 'purple' },
          { icon: '🛒', title: 'Quantity supplied rises',        body: 'More total output is available at each price level.',                                     tone: 'green'  }
        ]
      },
      causesLabel: false,
      causesStyle: 'tinted-flat',
      causes: [
        { icon: '⚖️', head: 'Revenue vs cost', body: 'Firms care about profit, not just price. They compare expected revenue with the cost of production.', tone: 'green'  },
        { icon: '📣', head: 'Profit signals',  body: 'Rising profit is a signal that attracts expansion (investing more resources) and entry by other firms.', tone: 'amber'  },
        { icon: '⏳', head: 'Limits',          body: 'Capacity constraints, time lags, regulation and firm objectives can weaken or slow the response.',     tone: 'purple' },
        { icon: '📉', head: 'When costs rise sharply', body: 'If costs increase (S₁ → S₂), higher prices may not raise profit much, so supply may not rise strongly.', tone: 'green' }
      ],
      keyTerms: [
        { term: 'Profit motive', def: 'The incentive for firms to produce goods and services where price exceeds cost — the engine of market supply.' },
        { term: 'Entry and exit', def: 'New firms entering a profitable market increases supply; firms exiting an unprofitable market reduces it — key to long-run equilibrium.' },
        { term: 'Sunk costs', def: 'Costs already incurred that cannot be recovered — relevant to exit decisions; high sunk costs create barriers to exit and sustain supply even when unprofitable.' }
      ],
      examEdge: 'Do not treat the law of supply as automatic. It depends on profitability and on firms being willing and able to respond.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
