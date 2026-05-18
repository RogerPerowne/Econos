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
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Movement Along vs Shift of the Supply Curve',
      lede: 'The same fundamental distinction as demand — but the supply curve slopes the other way. Explore interactively.',
      diagramKey: 'supplyInteractive',
      steps: [
        {
          key: 'base',
          label: 'The supply curve',
          text: 'The supply curve shows the <strong>positive relationship between price and quantity supplied</strong>. Ceteris paribus, as price rises, quantity supplied rises. It slopes upward because higher prices increase the profitability of production — existing firms expand output, new firms enter. Rising output also raises marginal costs (diminishing returns), so higher prices are needed to justify more production.'
        },
        {
          key: 'extension',
          label: 'Movement along',
          text: 'A change in the good\'s <strong>own price</strong> causes a movement along the supply curve — nothing else can. A price rise causes an <strong>extension</strong> (E₂: higher P, higher Q supplied). A price fall causes a <strong>contraction</strong> (E₃: lower P, lower Q supplied). The curve itself does not move. Say "quantity supplied rises/falls," not "supply rises/falls."'
        },
        {
          key: 'shift',
          label: 'Supply shifts',
          text: 'A change in any <strong>non-price determinant</strong> shifts the entire supply curve. <strong>Rightward (S₂ — increase):</strong> more supplied at every price — lower input costs, better technology, more producers, or a subsidy. <strong>Leftward (S₀ — decrease):</strong> less supplied at every price — higher input costs, a new tax, a supply shock, or fewer producers. At every price, producers are now willing to supply a different quantity.'
        }
      ],
      causes: [
        { icon: '🏷️', head: 'Price change',       body: 'A change in the good\'s own price causes a movement along the existing supply curve — not a shift.', tone: 'green'  },
        { icon: '🏭', head: 'Costs of production', body: 'Higher input costs reduce profit at each price, shifting supply left. Lower costs shift it right.',    tone: 'purple' },
        { icon: '💻', head: 'Technology',           body: 'Better technology raises productivity and lowers unit costs, shifting the supply curve to the right.', tone: 'blue'   },
        { icon: '🏛️', head: 'Tax or subsidy',       body: 'A new tax raises costs and shifts supply left. A subsidy reduces effective costs and shifts it right.', tone: 'amber'  }
      ],
      examEdge: 'A leftward shift in supply raises equilibrium price — it looks like an "upward" shift on the diagram. Always describe shifts as left or right (not up or down), then explain the cause and the effect on equilibrium price and quantity. Both cause and effect are needed for full marks.'
    },
    {
      id: 'supply_3',
      template: 'cause',
      title: 'Non-Price Determinants of Supply',
      tip: { icon: '💡', tone: 'blue', text: 'Supply shifts when firms\' costs, productivity or business conditions change — even if the product\'s own price stays the same.' },
      shiftDiagrams: true,
      causesStyle: 'tinted-flat',
      causesEmoji: '📋',
      causesLabel: 'What shifts the supply curve',
      causes: [
        { icon: '💰', head: 'Costs of production',       body: 'Higher input costs (wages, raw materials, energy) reduce profit at every price level — supply shifts left. Lower costs shift it right.',                                                    tone: 'green'  },
        { icon: '⚙️', head: 'Productivity & technology', body: 'Better technology raises output per unit of input, cutting unit costs and shifting supply right. It\'s the main long-run driver of expanding supply.',                                        tone: 'blue'   },
        { icon: '🏛️', head: 'Indirect taxes & subsidies',body: 'A new indirect tax raises effective costs → supply shifts left. A subsidy lowers effective costs → supply shifts right.',                                                                    tone: 'amber'  },
        { icon: '🏭', head: 'Number of firms',            body: 'More firms in the market → total market supply rises (right shift). Fewer firms after exits or consolidation → supply decreases.',                                                           tone: 'purple' },
        { icon: '🌦️', head: 'Weather & natural shocks',  body: 'Floods, droughts and natural disasters disrupt production, shifting supply left. Good conditions increase it — especially relevant for agricultural markets.',                               tone: 'rose'   },
        { icon: '📋', head: 'Government regulation',      body: 'Environmental standards, health &amp; safety rules and planning restrictions add compliance costs, shifting supply left. Deregulation can shift it right.',                                  tone: 'slate'  }
      ],
      howToThink: {
        left:  { icon: '➡️', tone: 'green', head: 'Shifts supply right', body: 'Lower input costs · Better technology · Subsidies · More firms · Good weather · Deregulation' },
        right: { icon: '⬅️', tone: 'rose',  head: 'Shifts supply left',  body: 'Higher input costs · Indirect taxes · Stricter regulation · Fewer firms · Bad weather · Supply shocks' }
      },
      examEdge: 'The Ukraine-Russia war (2022) provides excellent exam material: Russian gas and Ukrainian wheat export restrictions caused simultaneous leftward shifts in European energy and food supply curves — illustrating supply shocks and their inflationary consequences.'
    },
    {
      id: 'supply_4',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Producer Surplus',
      lede: 'The supply curve reveals more than how much firms produce — it shows how much they gain from selling at the market price. Tap each step to build the picture.',
      diagramKey: 'supplyPsSvg',
      steps: [
        {
          key: 'base',
          label: 'Supply curve',
          text: 'Each point on the supply curve shows the minimum price a seller would accept for that unit — their marginal cost. Low-cost producers are willing to supply at low prices; higher-cost producers only enter if the market price is high enough. The market price P* is the same for every seller.'
        },
        {
          key: 'ps',
          label: 'Producer surplus',
          text: 'Producer surplus is the rose triangle — the area below the market price P* and above the supply curve. Every seller who would have accepted less than P* receives a "bonus". The triangle\'s area measures the total extra revenue producers receive beyond their minimum acceptable price. Formula: PS = ½ × Q* × (P* − min supply price).'
        },
        {
          key: 'prise',
          label: 'Price rises → PS grows',
          text: 'When price rises to P₂, producer surplus expands in two ways: ① Existing sellers earn (P₂ − P*) extra on every unit already supplied — the rectangle between P* and P₂ is their gain. ② New sellers enter who weren\'t profitable at P* — output extends to Q₂, adding a further triangle of surplus. A tax does the reverse: lowering the producer price shrinks PS, with part going to government revenue and part lost as deadweight welfare loss.'
        }
      ],
      examEdge: 'Total welfare = CS + PS. Market efficiency is maximised at the competitive equilibrium where total surplus is maximised. Any distortion (tax, price control, monopoly) creates deadweight loss — reducing total surplus below this maximum. In the supply context: a leftward supply shift raises price and PS per unit but reduces quantity — overall PS change depends on elasticity.'
    },
    {
      id: 'supply_5',
      title: 'Joint Supply and Competing Supply',
      tip: { icon: '💡', tone: 'blue', text: 'Some products are supplied together, while others compete for the same scarce resources. That means one supply decision can affect another market.' },
      conceptBoxes: [
        {
          tone: 'green',
          head: 'Joint supply',
          sub: 'Products are produced together.',
          flows: [
            { inputs: [{ icon: '🐄', label: 'Cattle' }],    outputs: [{ icon: '🥩', label: 'Beef' },   { icon: '🟫', label: 'Leather' }], connector: '+' },
            { inputs: [{ icon: '🛢️', label: 'Crude oil' }], outputs: [{ icon: '⛽', label: 'Petrol' }, { icon: '💧', label: 'Diesel' }],  connector: '+' }
          ],
          bullets: [
            'Two or more products are created in the same production process.',
            'You cannot get more of one without also getting more of the other.',
            'When output of one rises, the supply of the joint product also rises.'
          ]
        },
        {
          tone: 'purple',
          head: 'Competing supply',
          sub: 'Products compete for the same scarce resources.',
          flows: [
            { inputs: [{ icon: '🌾', label: 'Farmland' }], outputs: [{ icon: '🌽', label: 'Wheat' },  { icon: '🌻', label: 'Rapeseed' }], connector: 'or' },
            { inputs: [{ icon: '🏭', label: 'Factory' }],  outputs: [{ icon: '🚗', label: 'Cars' },   { icon: '🚐', label: 'Vans' }],    connector: 'or' }
          ],
          bullets: [
            'Resources have alternative uses in different products.',
            'Using more resources for one product means less for another.',
            'More resources for one product can reduce supply of the other.'
          ]
        }
      ],
      howToThink: {
        left:  { icon: '🧩', tone: 'green',  head: 'Key idea — Joint supply',    body: 'Products are produced together. More of one means more of the other.' },
        right: { icon: '🧩', tone: 'purple', head: 'Key idea — Competing supply', body: 'Products use the same scarce resources. More of one can mean less of the other.' }
      },
      examEdge: 'Joint supply is regularly tested in context questions. "A rise in demand for beef raises beef prices — what happens to leather prices?" Answer: beef production rises (extension of supply) → more leather produced as joint product → leather supply shifts right → leather price falls. Walk through each step carefully.'
    },
    {
      id: 'supply_6',
      template: 'diagnose',
      title: 'Supply in Context: Key Markets',
      intro: 'Supply conditions vary significantly across markets — know the specific characteristics that make each unusual.',
      rows: [
        { label: 'Market', colA: 'Housing supply', colB: 'Oil supply' },
        { label: 'Key characteristic', colA: 'Very inelastic in short run (takes years to build); planning restrictions limit supply expansion', colB: 'Controlled by OPEC cartel; supply deliberately restricted to maintain prices above competitive level' },
        { label: 'Policy implication', colA: 'House price rises are mainly absorbed as price increase, not output increase — planning reform needed', colB: 'Oil market is not a free market; supply management by a cartel distorts the price mechanism' }
      ],
      footer: 'Agricultural supply is highly weather-dependent — random supply shocks cause large price swings. Buffer stock schemes attempt to stabilise this (covered in Unstable Markets topic).',
      examEdge: 'PES (price elasticity of supply) determines how much of a supply shift becomes price vs quantity change. Very inelastic supply (housing): demand shift → mainly price rise, little quantity change. Elastic supply (manufacturing): demand shift → mainly quantity change, small price change.'
    },
    {
      id: 'supply_7',
      template: 'framing',
      title: 'Supply and the Profit Motive',
      body: 'Supply in a market economy is ultimately driven by the <strong>profit motive</strong>. Firms supply goods where they can earn a profit — where price exceeds average cost. This means supply responds to price signals because prices signal profit opportunities:<br><br>• Price rises → profit margin rises → existing firms expand, new firms enter → supply increases<br>• Price falls → profit margins squeezed → firms contract, some exit → supply decreases<br><br>This profit-driven supply response is the market\'s mechanism for solving the "what to produce" question. Resources flow to where profits are highest — automatically directing productive capacity to what consumers value most (at current prices).',
      conclusion: { title: 'The profit motive is the engine of supply', text: 'In a free market, producers supply what is profitable — not what society necessarily needs. This is simultaneously supply\'s greatest strength (efficient resource allocation) and its greatest weakness (ignores externalities and public goods). Theme 1\'s market failure section explores precisely when and why this breaks down.' },
      keyTerms: [
        { term: 'Profit motive', def: 'The incentive for firms to produce goods and services where price exceeds cost — the engine of market supply.' },
        { term: 'Entry and exit', def: 'New firms entering a profitable market increases supply; firms exiting an unprofitable market reduces it — key to long-run equilibrium.' },
        { term: 'Sunk costs', def: 'Costs already incurred that cannot be recovered — relevant to exit decisions; high sunk costs create barriers to exit and sustain supply even when unprofitable.' }
      ],
      examEdge: 'The link between supply and profit connects to market structures (Theme 3). In perfect competition, long-run profits are driven to zero by entry — supply is perfectly elastic in the long run. Monopoly restricts supply to maintain supernormal profit. Oligopoly collude to restrict supply. The supply model underpins all of this.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
