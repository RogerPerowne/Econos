window.ECONOS_TOPIC = {
  id: 'supply',
  topicNum: '2.4',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Supply',
  estTime: '7-9 minutes',
  goal: 'Lock in the law of supply, supply curve analysis, producer surplus, and all the non-price determinants that shift the supply curve.',
  intro: {
    heroKey: 'heroSupply',
    summary: 'Supply is the quantity of a good producers are willing and able to offer for sale at each price level. Understanding what moves along the supply curve versus what shifts it is the mirror of demand analysis – both are essential for all market diagrams.',
    doInThis: 'Work through 7 cards covering the law of supply, movements vs shifts, non-price supply determinants, producer surplus, joint supply, supply in context, and how supply fits into market analysis.',
    outcomes: [
      'State the law of supply and explain why supply curves slope upward',
      'Distinguish a movement along the supply curve from a shift',
      'List and explain the non-price determinants of supply',
      'Illustrate and interpret producer surplus'
    ],
    tip: 'Price change → movement ALONG supply curve (extension = price up; contraction = price down). Non-price change → SHIFT of the whole supply curve. Right = increase; left = decrease.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'done' },
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'supply_1',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Supply: the big picture',
      tip: { icon: '💡', tone: 'blue', text: 'A supply curve shows how much producers are willing and able to sell at different prices. Higher price usually means higher quantity supplied – but only ceteris paribus.' },
      diagramKey: 'supplyCurveBasic',
      keyPoints: [
        { icon: '🏷️', title: 'Price',             body: 'The market price is what producers receive for each unit sold.',                                 tone: 'green'  },
        { icon: '📈', title: 'Profit incentive',  body: 'Higher prices increase potential profit, encouraging firms to supply more.',                     tone: 'amber'  },
        { icon: '📦', title: 'Quantity supplied', body: 'The amount producers are willing and able to sell at a given price.',                            tone: 'purple' }
      ],
      keyTerms: [
        { term: 'Law of supply', def: 'Ceteris paribus: higher price → higher quantity supplied. Price and quantity supplied move in the same direction.' },
        { term: 'Supply curve', def: 'A graph showing quantity supplied at each possible price – upward sloping under normal conditions.' },
        { term: 'Extension of supply', def: 'Rise in quantity supplied caused by a price increase – movement up the existing supply curve.' }
      ],
      examEdge: 'Do not confuse a movement along the supply curve with a shift of the supply curve – that depends on non-price factors. Always state ceteris paribus when explaining the law of supply.'
    },
    {
      id: 'supply_2',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Movement Along vs Shift of the Supply Curve',
      lede: 'The same fundamental distinction as demand – but the supply curve slopes the other way. Explore interactively.',
      diagramKey: 'supplyInteractive',
      steps: [
        {
          key: 'base',
          label: 'The supply curve',
          text: 'The supply curve shows the <strong>positive relationship between price and quantity supplied</strong>. It slopes upward because higher prices make production more profitable: existing firms expand output and new firms enter. Rising output raises marginal costs (diminishing returns).'
        },
        {
          key: 'extension',
          label: 'Movement along',
          text: 'A change in the good\'s <strong>own price</strong> causes a movement along the curve – nothing else can. A price rise causes an <strong>extension</strong> (E₂); a price fall causes a <strong>contraction</strong> (E₃). Say "quantity supplied rises/falls," not "supply rises/falls."'
        },
        {
          key: 'shift',
          label: 'Supply shifts',
          text: 'A change in any <strong>non-price determinant</strong> shifts the whole curve. <strong>Right (S₂):</strong> more supplied at every price – lower costs, better tech, more producers, subsidy. <strong>Left (S₀):</strong> less at every price – higher costs, tax, supply shock.'
        }
      ],
      causes: [
        { icon: '🏷️', head: 'Price change',       body: 'A change in the good\'s own price causes a movement along the existing supply curve – not a shift.', tone: 'green'  },
        { icon: '🏭', head: 'Costs of production', body: 'Higher input costs reduce profit at each price, shifting supply left. Lower costs shift it right.',    tone: 'purple' },
        { icon: '💻', head: 'Technology',           body: 'Better technology raises productivity and lowers unit costs, shifting the supply curve to the right.', tone: 'blue'   },
        { icon: '🏛️', head: 'Tax or subsidy',       body: 'A new tax raises costs and shifts supply left. A subsidy reduces effective costs and shifts it right.', tone: 'amber'  }
      ],
      examEdge: 'A leftward shift in supply raises equilibrium price – it looks like an "upward" shift on the diagram. Always describe shifts as left or right (not up or down), then explain the cause and the effect on equilibrium price and quantity. Both cause and effect are needed for full marks.'
    },
    {
      id: 'supply_3',
      template: 'cause',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Non-Price Determinants of Supply',
      tip: { icon: '💡', tone: 'blue', text: 'Supply shifts when firms\' costs, productivity or business conditions change – even if the product\'s own price stays the same.' },
      shiftDiagrams: true,
      causesStyle: 'tinted-flat',
      causesEmoji: '📋',
      causesLabel: 'What shifts the supply curve',
      causes: [
        { icon: '💰', head: 'Costs of production',       body: 'Higher input costs (wages, raw materials, energy) reduce profit at every price level – supply shifts left. Lower costs shift it right.',                                                    tone: 'green'  },
        { icon: '⚙️', head: 'Productivity & technology', body: 'Better technology raises output per unit of input, cutting unit costs and shifting supply right. It\'s the main long-run driver of expanding supply.',                                        tone: 'blue'   },
        { icon: '🏛️', head: 'Indirect taxes & subsidies',body: 'A new indirect tax raises effective costs → supply shifts left. A subsidy lowers effective costs → supply shifts right.',                                                                    tone: 'amber'  },
        { icon: '🏭', head: 'Number of firms',            body: 'More firms in the market → total market supply rises (right shift). Fewer firms after exits or consolidation → supply decreases.',                                                           tone: 'purple' },
        { icon: '🌦️', head: 'Weather & natural shocks',  body: 'Floods, droughts and natural disasters disrupt production, shifting supply left. Good conditions increase it – especially relevant for agricultural markets.',                               tone: 'rose'   },
        { icon: '📋', head: 'Government regulation',      body: 'Environmental standards, health &amp; safety rules and planning restrictions add compliance costs, shifting supply left. Deregulation can shift it right.',                                  tone: 'slate'  }
      ],
      howToThink: {
        left:  { icon: '➡️', tone: 'green', head: 'Shifts supply right', body: 'Lower input costs · Better technology · Subsidies · More firms · Good weather · Deregulation' },
        right: { icon: '⬅️', tone: 'rose',  head: 'Shifts supply left',  body: 'Higher input costs · Indirect taxes · Stricter regulation · Fewer firms · Bad weather · Supply shocks' }
      },
      examEdge: 'The Ukraine-Russia war (2022) provides excellent exam material: Russian gas and Ukrainian wheat export restrictions caused simultaneous leftward shifts in European energy and food supply curves – illustrating supply shocks and their inflationary consequences.'
    },
    {
      id: 'supply_4',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Producer Surplus',
      lede: 'The supply curve reveals more than how much firms produce – it shows how much they gain from selling at the market price. Tap each step to build the picture.',
      diagramKey: 'supplyPsSvg',
      steps: [
        {
          key: 'base',
          label: 'Supply curve',
          text: 'Each point on the supply curve shows the minimum price a seller would accept for that unit – their marginal cost. Low-cost producers supply at low prices; higher-cost producers only enter if the market price rises.'
        },
        {
          key: 'ps',
          label: 'Producer surplus',
          text: 'Producer surplus is the rose triangle – the area below the market price P* and above the supply curve. Every seller who would have accepted less than P* receives a "bonus" measuring the extra revenue producers gain beyond their minimum acceptable price.'
        },
        {
          key: 'prise',
          label: 'Price rises → PS grows',
          text: 'When price rises to P₂, producer surplus expands two ways: ① Existing sellers earn (P₂ − P*) extra on every unit already supplied – the rectangle between P* and P₂. ② New sellers enter who weren\'t profitable at P* – output extends to Q₂, adding a further triangle of surplus.'
        }
      ],
      examEdge: 'Total welfare = CS + PS. Market efficiency is maximised at the competitive equilibrium where total surplus is maximised. Any distortion (tax, price control, monopoly) creates deadweight loss – reducing total surplus below this maximum. In the supply context: a leftward supply shift raises price and PS per unit but reduces quantity – overall PS change depends on elasticity.'
    },
    {
      id: 'supply_5',
      stepLabel: 'Learn: Step 5 of 7',
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
        left:  { icon: '🧩', tone: 'green',  head: 'Key idea – Joint supply',    body: 'Products are produced together. More of one means more of the other.' },
        right: { icon: '🧩', tone: 'purple', head: 'Key idea – Competing supply', body: 'Products use the same scarce resources. More of one can mean less of the other.' }
      },
      examEdge: 'Joint supply is regularly tested in context questions. "A rise in demand for beef raises beef prices – what happens to leather prices?" Answer: beef production rises (extension of supply) → more leather produced as joint product → leather supply shifts right → leather price falls. Walk through each step carefully.'
    },
    {
      id: 'supply_6',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Supply in Context: Key Markets',
      tip: { icon: '💡', tone: 'blue', text: 'Supply behaves differently across markets because time, capacity, stock levels and nature all affect how easily producers can respond. In the short run supply is often less responsive; in the long run firms can adjust capacity more fully.' },
      causesStyle: 'plain-white',
      causesLabel: null,
      causes: [
        { tone: 'green', icon: '🌱', head: 'Agriculture',                  body: 'Supply is strongly affected by weather and growing seasons.<br><br>Bad weather or pests can sharply reduce output in the short run.' },
        { tone: 'green', icon: '🏠', head: 'Housing',                      body: 'Supply is slow to respond in the short run due to planning, approvals and construction lags.<br><br>More responsive in the long run.' },
        { tone: 'green', icon: '🛢️', head: 'Energy / oil',                 body: 'Supply requires large capital investment and infrastructure.<br><br>Global shocks, geopolitics and OPEC decisions can shift supply.' },
        { tone: 'green', icon: '🛒', head: 'Manufactured consumer goods', body: 'Supply can often respond more quickly if spare capacity exists.<br><br>Firms can increase output with existing machinery and labour.' }
      ],
      examEdge: 'PES (price elasticity of supply) determines how much of a supply shift becomes price vs quantity change. Very inelastic supply (housing): demand shift → mainly price rise, little quantity change. Elastic supply (manufacturing): demand shift → mainly quantity change, small price change.'
    },
    {
      id: 'supply_7',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'Supply and the Profit Motive',
      tip: { icon: '💡', tone: 'blue', text: 'The law of supply is rooted in incentives: when selling becomes more profitable, firms usually want to produce more.' },
      flowTitle: 'How the profit motive drives supply',
      flowEmoji: '➡️',
      flow: [
        { tone: 'green',  icon: '🏷️', title: 'Higher market price',                     sub: 'When the market price rises, each unit sold is worth more.' },
        { tone: 'amber',  icon: '📈', title: 'Higher potential revenue / profit',        sub: 'With costs unchanged in the short run, higher price raises potential profit per unit.' },
        { tone: 'purple', icon: '🏭', title: 'Firms expand output or enter the market',  sub: 'Existing firms produce more and/or new firms are attracted by higher profits.' },
        { tone: 'green',  icon: '🛒', title: 'Quantity supplied rises',                  sub: 'More total output is available at each price level.' }
      ],
      causesStyle: 'plain-white',
      causesLabel: 'What shapes the response',
      causesEmoji: '🔍',
      causes: [
        { tone: 'green',  icon: '⚖️', head: 'Revenue vs cost',   body: 'Firms care about profit, not just price. They compare expected revenue with the cost of production.' },
        { tone: 'amber',  icon: '📢', head: 'Profit signals',     body: 'Rising profit is a signal that attracts expansion (investing more resources) and entry by other firms.' },
        { tone: 'purple', icon: '🕐', head: 'Limits',             body: 'Capacity constraints, time lags, regulation and firm objectives can weaken or slow the response.' }
      ],
      conclusion: { title: 'The profit motive is the engine of supply', text: 'In a free market, producers supply what is profitable – not what society necessarily needs. This is simultaneously supply\'s greatest strength (efficient resource allocation) and its greatest weakness (ignores externalities and public goods). Theme 1\'s market failure section explores precisely when and why this breaks down.' },
      keyTerms: [
        { term: 'Profit motive', def: 'The incentive for firms to produce goods and services where price exceeds cost – the engine of market supply.' },
        { term: 'Entry and exit', def: 'New firms entering a profitable market increases supply; firms exiting an unprofitable market reduces it – key to long-run equilibrium.' },
        { term: 'Sunk costs', def: 'Costs already incurred that cannot be recovered – relevant to exit decisions; high sunk costs create barriers to exit and sustain supply even when unprofitable.' }
      ],
      examEdge: 'The link between supply and profit connects to market structures (Theme 3). In perfect competition, long-run profits are driven to zero by entry – supply is perfectly elastic in the long run. Monopoly restricts supply to maintain supernormal profit. Oligopoly collude to restrict supply. The supply model underpins all of this.',
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
    title:    'Supply',
    subtitle: 'Theme 1 &middot; Topic 2.4 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('supply_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers the law of supply, shifts vs movements, non-price determinants, producer surplus, joint and competing supply',
    shortNames: [
      'Law of supply', 'Move vs shift sort', 'Joint supply', 'Producer surplus calc',
      'Leftward shifts', 'Competing supply fill', 'Cause & effect', 'Odd one out',
      'Energy data table', 'Supply chain'
    ],

    questions: [

      /* 1 – MCQ: law of supply */
      { type: 'mcq',
        stem: 'The <strong>law of supply</strong> states that, ceteris paribus, as price rises quantity supplied rises. The primary reason for the upward slope of the supply curve in the short run is:',
        opts: [
          'As output expands, firms face rising marginal costs (law of diminishing returns) – so higher prices are needed to justify producing additional units',
          'As price rises, consumers demand more, which forces firms to produce additional output regardless of cost',
          'Government regulations require firms to maintain minimum output levels as prices rise',
          'All firms have constant marginal costs at every output level'
        ],
        ans: 0,
        exp: 'In the short run, as firms expand output they add more variable factors (e.g. labour) to a fixed capital stock. The <strong>law of diminishing returns</strong> sets in: each additional worker adds less to output, raising marginal cost per unit. Firms only produce more if price rises to cover this higher marginal cost. The supply curve is effectively the marginal cost curve – connecting supply theory to cost theory (Theme 3). Constant marginal costs would produce a horizontal supply curve, not an upward slope.'
      },

      /* 2 – Elastic sort: shift vs movement along supply */
      { type: 'elastic_sort',
        stem: 'Classify each event as causing a <strong>movement along</strong> the supply curve or a <strong>shift</strong> of the supply curve.',
        categories: ['move', 'shift'],
        categoryLabels: ['Movement along the supply curve', 'Shift of the supply curve'],
        goods: [
          { icon: '🌾', label: 'The price of wheat rises from £150 to £200 per tonne', note: '', ans: 'move' },
          { icon: '⚡', label: 'A new generation of wind turbines doubles electricity output per turbine', note: '', ans: 'shift' },
          { icon: '🚗', label: 'A rise in steel prices reduces the quantity of cars supplied at every price', note: '', ans: 'shift' },
          { icon: '🍓', label: 'Unusually cold weather destroys 30% of the UK strawberry crop', note: '', ans: 'shift' },
          { icon: '📊', label: 'Higher profit margins in the coffee shop sector attract 500 new outlets', note: '', ans: 'shift' },
          { icon: '🐟', label: 'A fall in the price of fish reduces the quantity supplied by fishing boats', note: '', ans: 'move' }
        ],
        exp: '<strong>Movements along</strong> supply are caused only by a change in the good\'s own price (extension or contraction of quantity supplied). <strong>Shifts</strong> occur from non-price changes: technology improvement shifts right (more at every price); higher input costs (steel) shift left; natural disasters reduce harvest and shift left; new entrants shift right. Key test: did the good\'s own price change? Yes → movement. No → possible shift.'
      },

      /* 3 – MCQ: joint supply */
      { type: 'mcq',
        stem: 'A drought significantly reduces global beef production. Considering <strong>joint supply</strong>, what would you expect to happen to the leather market?',
        opts: [
          'Leather supply falls (shifts left), causing leather prices to rise, because leather is a by-product of beef production',
          'Leather supply rises (shifts right), causing leather prices to fall, because resources move from beef to leather',
          'The leather market is unaffected because leather is made from synthetic materials',
          'Leather demand falls as consumers switch away from animal products'
        ],
        ans: 0,
        exp: '<strong>Joint supply</strong>: beef and leather are by-products – slaughtering cattle for beef also produces hides for leather. If beef production falls (fewer cattle slaughtered), fewer hides are produced → leather supply shifts <strong>left</strong> → leather price <strong>rises</strong>. This transmission from one market to another through the by-product link is a classic joint supply chain. Other examples: oil and natural gas; beef tallow and soap; wheat and straw.'
      },

      /* 4 – Numeric input: producer surplus */
      { type: 'numeric_input',
        stem: 'Calculate the <strong>total producer surplus</strong> (£) in this market.',
        context: 'Three suppliers of handmade furniture: Supplier A minimum acceptable price £200; Supplier B minimum £300; Supplier C minimum £400. Market equilibrium price is <strong>£450</strong> per unit.',
        answer: 450,
        tolerance: 1,
        unit: '£',
        hint: 'Producer surplus = sum of (market price − minimum acceptable price) for each seller who trades.',
        workingSteps: [
          'All three sell at £450 (all minimum prices ≤ £450)',
          'Supplier A: £450 − £200 = £250',
          'Supplier B: £450 − £300 = £150',
          'Supplier C: £450 − £400 = £50',
          'Total = £250 + £150 + £50 = £450'
        ],
        exp: 'Producer surplus = sum of (market price − minimum acceptable price) for each unit sold. (450−200) + (450−300) + (450−400) = 250 + 150 + 50 = <strong>£450</strong>. If price falls to £350, Supplier C exits (minimum price £400 > £350) and total surplus collapses. This illustrates the profit-motive mechanism: entry and exit respond to changes in producer surplus, equating long-run surplus with normal profit.'
      },

      /* 5 – Multi-select: causes of leftward supply shift */
      { type: 'multi_select',
        stem: 'Which of the following would cause the supply curve for <strong>new cars</strong> to shift <strong>leftward</strong> (decrease in supply)?',
        opts: [
          'A sharp rise in the price of steel (a key input to car manufacturing)',
          'A new regulation requiring all new cars to meet stricter emissions standards, raising production costs',
          'A technological improvement enabling robots to assemble cars more efficiently',
          'The price of new cars rises following increased consumer demand',
          'A global semiconductor shortage limits supply of components needed for car production',
          'Several major manufacturers close UK factories and relocate abroad'
        ],
        correct: [0, 1, 4, 5],
        exp: 'Options A, B, E, and F shift car supply <strong>leftward</strong>: higher steel prices raise input costs; stricter emissions regulations add compliance costs; semiconductor shortage limits production; factory closures reduce number of producers. Option C (technology improvement) shifts supply <strong>rightward</strong> – lower cost per unit. Option D (price of new cars rises) is a movement <strong>along</strong> the supply curve, not a shift – a price change causes an extension of quantity supplied, not a shift.'
      },

      /* 6 – Para fill: competing supply */
      { type: 'para_fill',
        stem: 'Complete the paragraph about competing supply.',
        anchor: 'Competing supply arises when the same resources can produce either of two goods.',
        para: 'Competing supply occurs when a factor of production – typically [1] – can be used to produce either of two alternative goods. A rise in the price of [2] Good A increases its [3] and causes producers to switch [4] resources from Good B to Good A. This reduces the [5] of Good B, shifting its supply curve [6]. The price of Good B consequently [7] as supply falls while demand is unchanged.',
        blanks: [
          { id: 1, opts: ['land', 'money', 'technology', 'infrastructure'], ans: 0 },
          { id: 2, opts: ['substitute', 'complement', 'inferior', 'joint'], ans: 0 },
          { id: 3, opts: ['profitability', 'demand', 'cost', 'regulation'], ans: 0 },
          { id: 4, opts: ['productive', 'financial', 'human', 'fixed'], ans: 0 },
          { id: 5, opts: ['supply', 'demand', 'price', 'quantity demanded'], ans: 0 },
          { id: 6, opts: ['leftward', 'rightward', 'upward along', 'downward along'], ans: 0 },
          { id: 7, opts: ['rises', 'falls', 'stays constant', 'becomes indeterminate'], ans: 0 }
        ],
        exp: '(1) <strong>Land</strong> is the classic competing supply factor – a farmer can grow wheat OR oilseed rape, not both on the same field. (2) <strong>Substitute</strong>: the goods compete for the same resources. (3) Higher price increases <strong>profitability</strong>, drawing resources in. (4) <strong>Productive</strong> resources are switched. (5) Supply of Good B <strong>falls</strong>. (6) Supply curve shifts <strong>leftward</strong>. (7) With unchanged demand and lower supply, price of Good B <strong>rises</strong>. Example: if wheat prices rise, farmers switch land to wheat → rapeseed supply falls → rapeseed price rises.'
      },

      /* 7 – Cause & effect: supply determinants */
      { type: 'cause_effect',
        stem: 'Match each cause to its correct effect on the supply curve.',
        pairs: [
          { cause: 'Fall in the cost of a key raw material input', effect: 'Supply curve shifts rightward' },
          { cause: 'Rise in the good\'s own market price', effect: 'Movement along – extension of quantity supplied' },
          { cause: 'Introduction of a production subsidy from government', effect: 'Supply curve shifts rightward' },
          { cause: 'New labour-saving technology adopted by all firms', effect: 'Supply curve shifts rightward' },
          { cause: 'A rise in the price of a jointly supplied by-product', effect: 'Supply of main good shifts rightward' },
          { cause: 'A major supply chain disruption (e.g. global semiconductor shortage)', effect: 'Supply curve shifts leftward' }
        ],
        exp: 'Non-price determinants shift the supply curve: lower input costs → rightward (more profitable at every price); subsidies → rightward (lower effective cost); technology → rightward; joint supply increase → more of both by-products supplied; supply chain disruption → leftward. The good\'s own price only causes a movement along the existing curve. A rightward shift means more is supplied at every price – not that price has fallen.'
      },

      /* 8 – Odd one out: rightward supply shift */
      { type: 'odd_one_out',
        stem: 'Three of these cause the supply curve for a manufactured good to shift <strong>rightward</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🤖', label: 'A new automated assembly technology cuts unit production costs by 30%', note: '' },
          { icon: '💰', label: 'The government introduces a production subsidy of £500 per unit', note: '' },
          { icon: '📈', label: 'A substantial increase in the market price of the good incentivises firms to produce more', note: '' },
          { icon: '🏭', label: 'Twenty new overseas firms enter the UK market, expanding total industry capacity', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is a <strong>rise in the market price</strong>. A price rise causes an extension of quantity supplied – a movement <em>up</em> the existing supply curve – not a rightward shift of the curve. The other three are non-price changes that shift the entire supply curve rightward: new technology lowers cost per unit; a production subsidy effectively reduces firms\' costs; new entrants expand total market supply.'
      },

      /* 9 – Data table: UK energy supply shock 2021-22 */
      { type: 'data_table',
        stem: 'The table shows UK energy market data around the 2021–2022 energy crisis.',
        headers: ['Indicator', 'Q4 2020', 'Q4 2021', 'Q4 2022'],
        rows: [
          ['UK wholesale gas price (p/therm)', '50', '250', '400'],
          ['UK electricity generation from gas (%)', '38%', '36%', '32%'],
          ['UK household energy bill (avg, £/yr)', '1,100', '1,800', '2,500'],
          ['New renewable energy capacity added (GW)', '3.2', '3.8', '4.5'],
          ['UK gas production from North Sea (bcm)', '40', '38', '35']
        ],
        question: 'Which interpretation is <strong>most consistent with supply theory</strong>?',
        opts: [
          'Surging wholesale gas prices shifted the household energy supply curve leftward, raising equilibrium bills; declining North Sea production reduced domestic supply further – consistent with a negative supply shock',
          'Higher gas prices caused a leftward shift in gas demand, which is why household bills rose',
          'The rise in renewable capacity fully offset the gas supply shock, leaving bills unchanged',
          'North Sea gas production data is irrelevant to household bills because the UK imports most of its gas'
        ],
        ans: 0,
        exp: 'The data show a clear negative supply shock: wholesale gas prices surged 700% (50p to 400p/therm), representing a massive increase in the key input cost for energy suppliers – shifting the household energy supply curve leftward and raising equilibrium prices. Declining North Sea production (40→35 bcm) reduced domestic supply further. New renewables added capacity but too slowly to offset the shock (generation share fell). Option B incorrectly attributes the bill rise to demand. Option C is refuted by the bill data (£1,100 to £2,500).'
      },

      /* 10 – Chain: technology improvement to new equilibrium */
      { type: 'chain',
        stem: 'A technological breakthrough significantly reduces the cost of producing electric vehicles. Place the following events in the correct order.',
        items: [
          { label: 'EV prices fall as firms compete on price to attract expanded demand', note: '' },
          { label: 'Production costs per EV fall substantially', note: '' },
          { label: 'New firms enter the EV market attracted by profit opportunities', note: '' },
          { label: 'The supply curve for EVs shifts rightward – more supplied at every price', note: '' },
          { label: 'EV market reaches a new equilibrium with lower price and higher output', note: '' },
          { label: 'Existing EV manufacturers earn higher profits as cost reductions widen margins', note: '' }
        ],
        correctOrder: [1, 3, 5, 2, 0, 4],
        exp: '<strong>Correct sequence:</strong> (1) Technology reduces production costs (the supply-side shock). (2) Supply curve shifts rightward. (3) Existing firms earn higher profits (wider margin at existing price). (4) New firms enter, attracted by profit opportunities – incentive function of the price mechanism. (5) Competition drives prices down as supply expands. (6) New equilibrium: lower price, higher quantity. In perfect competition, entry continues until profits are driven to normal. Intellectual property may sustain profits for the innovating firm for some time.'
      }

    ]
  };

})();

