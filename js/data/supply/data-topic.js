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
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Supply: the big picture',
      lede: 'Supply is the producer side of every market — and the profit motive is the engine that drives it.',
      tip: 'Supply ≠ stock. Supply is a relationship between price and quantity — the whole curve. Only a price change moves you along it; everything else shifts the curve.',
      branches: [
        { tone: 'green',  label: 'Law of supply',           sub: 'Ceteris paribus, price ↑ → quantity supplied ↑. Higher prices make production more profitable, drawing firms in and existing firms out further.' },
        { tone: 'amber',  label: 'Movement vs shift',       sub: 'A change in the good\'s own price moves you along the curve. Any other determinant (costs, tech, taxes) shifts the whole curve.' },
        { tone: 'blue',   label: 'Non-price determinants',  sub: 'Production costs, technology, indirect taxes and subsidies, producer numbers and expectations — the levers that shift S left or right.' },
        { tone: 'purple', label: 'Producer surplus',        sub: 'The gap between the price received and the minimum the producer would accept. The welfare gain to firms from trade.' },
        { tone: 'rose',   label: 'Joint &amp; competing supply', sub: 'Beef &amp; leather rise together; wheat &amp; barley compete for the same fields. Linked supply curves complicate the simple picture.' }
      ],
      body: 'The <strong>law of supply</strong> states that, ceteris paribus, as price rises, the quantity supplied rises; as price falls, quantity supplied falls. The supply curve slopes upward from left to right.<br><br><strong>Why?</strong> Higher prices increase the profitability of production — existing firms expand output; new firms enter the market. Lower prices reduce profit margins — firms contract output or exit.<br><br>The upward slope reflects the idea that as output expands, firms must bring in progressively higher-cost factors of production (the law of diminishing returns in the short run) — so higher prices are needed to justify more production.',
      keyTerms: [
        { term: 'Law of supply', def: 'Ceteris paribus: higher price → higher quantity supplied. Price and quantity supplied move in the same direction.' },
        { term: 'Supply curve', def: 'A graph showing quantity supplied at each possible price — upward sloping under normal conditions.' },
        { term: 'Extension of supply', def: 'Rise in quantity supplied caused by a price increase — movement up the existing supply curve.' }
      ],
      examEdge: 'The upward slope of supply links to cost theory (Theme 3): in the short run, diminishing returns raise marginal cost as output increases, so firms only produce more if price rises to cover the higher MC. A firm produces where P = MC — so supply is effectively a marginal cost curve.'
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
      examEdge: 'A leftward shift in supply raises equilibrium price — it looks like an "upward" shift on the diagram. Always describe shifts as left or right (not up or down), then explain the cause and the effect on equilibrium price and quantity. Both cause and effect are needed for full marks.'
    },
    {
      id: 'supply_3',
      template: 'cause',
      title: 'Non-Price Determinants of Supply',
      causesStyle: 'tinted-flat',
      causesEmoji: '📋',
      causesLabel: 'What shifts the supply curve',
      causes: [
        { icon: '💰', head: 'Costs of production', body: 'Input prices (wages, raw materials, energy) are the most important supply shifter. Higher costs → less profit at each price → supply decreases (shifts left). Lower costs → supply increases (shifts right).' },
        { icon: '💻', head: 'Technology', body: 'Improved technology raises productivity — more output per unit of input → lower cost per unit → supply shifts right. Technological progress is the key long-run driver of expanding supply.' },
        { icon: '🏭', head: 'Number of producers', body: 'More firms in the market → total market supply increases (shifts right). Fewer firms (after exits, consolidation) → supply decreases.' },
        { icon: '🏛️', head: 'Government policy', body: 'Production subsidies lower effective costs → supply shifts right. Indirect taxes raise effective costs → supply shifts left. Regulation (e.g. environmental standards) adds compliance costs → supply falls.' },
        { icon: '🌦️', head: 'Natural &amp; external factors', body: 'Weather, natural disasters, pandemics, geopolitical events affect supply of specific goods. Oil supply is affected by OPEC decisions; food supply by harvest quality; manufacturing by component availability.' }
      ],
      examEdge: 'The Ukraine-Russia war (2022) provides excellent exam material: Russian gas and Ukrainian wheat export restrictions caused simultaneous leftward shifts in European energy and food supply curves — illustrating supply shocks and their inflationary consequences.'
    },
    {
      id: 'supply_4',
      template: 'framing',
      title: 'Producer Surplus',
      tip: 'Producer surplus = the triangle BELOW the market price ABOVE the supply curve. It rises when price rises; falls when price falls. Government taxes reduce it; subsidies increase it.',
      body: '<strong>Producer surplus</strong> is the difference between the price a producer actually receives for a unit and the minimum price they would have accepted (their marginal cost). It represents the "profit" or benefit producers gain from market exchange beyond what they needed to cover costs.<br><br>On a diagram, producer surplus is the area above the supply curve and below the equilibrium price — a triangle for a straight supply curve.<br><br>Producer surplus rises when price rises (and when supply shifts left — fewer units sold but at higher price per unit). It falls when price falls or supply shifts right. Government taxes reduce producer surplus; subsidies increase it.',
      keyTerms: [
        { term: 'Producer surplus', def: 'The difference between price received and minimum acceptable price (marginal cost) — welfare gain to producers from market exchange.' },
        { term: 'Minimum acceptable price', def: 'The price at which a supplier is just willing to sell a unit — equal to marginal cost for a competitive firm.' },
        { term: 'Total surplus', def: 'Consumer surplus + producer surplus = total welfare gain from market exchange.' }
      ],
      examEdge: 'Total welfare in a market = consumer surplus + producer surplus. Market efficiency is maximised where total surplus is maximised — the competitive equilibrium. Any distortion (tax, price control, monopoly) creates deadweight loss by reducing total surplus below this maximum.'
    },
    {
      id: 'supply_5',
      template: 'framing',
      title: 'Joint Supply and Competing Supply',
      verdict: {
        leftLabel: '🔗 Joint supply',
        rightLabel: '⚔️ Competing supply',
        separator: 'VS',
        rows: [
          { aspect: 'Definition', left: 'Producing one good automatically creates another as a by-product', right: 'The same resources can produce either of two goods — more of one means less of the other' },
          { aspect: 'Example', left: 'Beef & leather · Oil & natural gas · Electricity & heat', right: 'Wheat & oil-seed rape (same land) · Product A vs B in a factory' },
          { aspect: 'Price link', left: 'Beef price rises → more beef → more leather → leather price falls', right: 'Wheat price rises → farmers switch to wheat → rape supply falls → rape price rises' },
          { aspect: 'Exam angle', left: 'Trace the chain step-by-step — two markets linked via a shared production process', right: 'Trace the opportunity cost — switching resources reduces supply in the other market' }
        ]
      },
      keyTerms: [
        { term: 'Joint supply', def: 'When two goods are produced together — output of one automatically produces the other.' },
        { term: 'Competing supply', def: 'When the same resources can produce either of two goods — more of one means less of the other.' },
        { term: 'By-product', def: 'A secondary output produced alongside the primary output in a production process.' }
      ],
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
