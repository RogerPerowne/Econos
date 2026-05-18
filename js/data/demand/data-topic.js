window.ECONOS_TOPIC = {
  id: 'demand',
  topicNum: '2.1',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Demand',
  estTime: '7-9 minutes',
  goal: 'Lock in the law of demand, demand curve shifts, consumer surplus, and derived demand — the foundations of all market analysis.',
  intro: {
    heroKey: 'heroSupplyDemand',
    summary: 'Demand is the quantity of a good consumers are willing and able to buy at each possible price. The demand curve is the most used diagram in economics — understanding what moves along it vs what shifts it is non-negotiable.',
    doInThis: 'Work through 7 cards covering the law of demand, the demand curve, movements vs shifts, the determinants of demand, consumer surplus, derived demand, and demand in real markets.',
    outcomes: [
      'State the law of demand and explain the two effects underpinning it',
      'Distinguish a movement along the demand curve from a shift in demand',
      'List and explain the non-price determinants of demand',
      'Illustrate and calculate consumer surplus'
    ],
    tip: 'A price change causes a movement ALONG the demand curve. A change in any other determinant (income, tastes, related goods prices) shifts the WHOLE curve.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'demand_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Demand: the big picture',
      diagramKey: 'demandLawCurve',
      tip: 'Demand is not just "wanting" something — it requires both willingness AND ability to pay. A wish list without purchasing power is not demand.',
      branches: [
        { tone: 'green',  label: 'Law of demand',       sub: 'Ceteris paribus, price ↓ → quantity demanded ↑. Driven by the substitution effect (switching to alternatives) and the income effect (real purchasing power changes).' },
        { tone: 'amber',  label: 'Movement vs shift',   sub: 'A change in the good\'s own price moves you along the curve. A change in any other determinant (income, tastes, related prices) shifts the whole curve.' },
        { tone: 'blue',   label: 'Determinants',        sub: 'Income, tastes, prices of related goods (substitutes/complements), expectations, population. Each shifts demand left or right.' },
        { tone: 'purple', label: 'Consumer surplus',    sub: 'The gap between the maximum a consumer would pay and the price they actually pay. The triangular welfare gain from trade.' }
      ],
      causes: [
        {
          icon: '🔄',
          head: 'Substitution effect',
          body: 'As price rises, the good becomes more expensive relative to substitutes. Consumers switch to alternatives — reducing quantity demanded. Works for all normal goods.',
          tone: 'blue'
        },
        {
          icon: '💸',
          head: 'Income effect',
          body: 'As price rises, real purchasing power falls. Consumers can afford less of everything — including the good itself. Reinforces the substitution effect for normal goods.',
          tone: 'purple'
        }
      ],
      causesLabel: 'Why the demand curve slopes downward',
      causesEmoji: '📉',
      causesStyle: 'tinted-flat',
      keyTerms: [
        { term: 'Law of demand', def: 'Ceteris paribus: a fall in price leads to a rise in quantity demanded; price and quantity demanded move in opposite directions.' },
        { term: 'Substitution effect', def: 'Price rise makes a good relatively expensive → consumers switch to substitutes.' },
        { term: 'Income effect', def: 'Price rise reduces real purchasing power → less of all normal goods demanded.' }
      ],
      examEdge: 'Giffen goods are an exception: for extremely inferior goods with no substitutes (historically: Irish potatoes during famine), a price rise may increase quantity demanded because the negative income effect is overwhelming. Extremely rare in practice — useful for evaluation.'
    },
    {
      id: 'demand_2',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Movement Along vs Shift of the Demand Curve',
      lede: 'This is the most common source of error in exam diagrams — explore the distinction interactively.',
      diagramKey: 'demandInteractive',
      steps: [
        {
          key: 'base',
          label: 'The demand curve',
          text: 'The demand curve shows the <strong>inverse relationship between price and quantity demanded</strong>. Ceteris paribus, as price rises, quantity demanded falls. It slopes downward because of the <strong>substitution effect</strong> (the good becomes expensive relative to alternatives) and the <strong>income effect</strong> (real purchasing power falls as price rises).'
        },
        {
          key: 'extension',
          label: 'Movement along',
          text: 'A change in the good\'s <strong>own price</strong> causes a movement along the demand curve — nothing else can. A price rise causes a <strong>contraction</strong> (E₂: higher P, lower Q). A price fall causes an <strong>extension</strong> (E₃: lower P, higher Q). The curve itself does not move. Precise language matters: say "quantity demanded falls," not "demand falls."'
        },
        {
          key: 'shift',
          label: 'Demand shifts',
          text: 'A change in any <strong>non-price determinant</strong> shifts the entire demand curve. <strong>Rightward (D₂ — increase):</strong> more demanded at every price — higher income, changed tastes, or a rise in a substitute\'s price. <strong>Leftward (D₀ — decrease):</strong> less demanded at every price — lower income, or a rise in a complement\'s price. Quantity changes at every price level, not just P₁.'
        }
      ],
      examEdge: 'Never say "demand rises because price falls" — that confuses demand (the whole schedule) with quantity demanded (a point on the schedule). Price falls cause quantity demanded to rise (movement along). Demand rising means the curve shifts right. Examiners specifically test this distinction.'
    },
    {
      id: 'demand_3',
      template: 'cause',
      title: 'Non-Price Determinants of Demand',
      diagramKey: 'demandShiftMini',
      tip: 'Remember PIRATE: Price of Related goods, Income, fashion/Advertising (Tastes), populaTion, Expectations. Any of these can shift demand left or right.',
      causes: [
        { icon: '💰', head: 'Income',                      body: 'For normal goods: higher income → more demand (rightward shift). For inferior goods (value-brand food, bus travel): higher income → less demand (leftward shift). Crucial for YED analysis.' },
        { icon: '🔄', head: 'Price of related goods',      body: 'Substitutes: rise in price of Good B → rise in demand for substitute A (rightward shift). Complements: rise in price of Good B → fall in demand for complement A (leftward shift).' },
        { icon: '🎨', head: 'Tastes and fashion',          body: 'Advertising, social trends, health recommendations shift demand. A celebrity endorsement, a health scare, or a viral trend can cause rapid demand shifts.' },
        { icon: '👥', head: 'Population and demographics', body: 'Population growth increases market demand. An ageing population increases healthcare demand; a younger population increases education demand.' },
        { icon: '🔮', head: 'Expectations',                body: 'If consumers expect future price rises, they bring forward purchases → demand rises now. In asset markets, expected price rises increase demand today — driving speculative bubbles.' }
      ],
      examEdge: 'Examiners expect you to identify the relevant shifter for the specific context, not just list all of them. If the question is about the housing market, identify the most important driver (interest rates, income, expectations) and apply it precisely.'
    },
    {
      id: 'demand_4',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Consumer Surplus',
      lede: 'The demand curve does more than show quantity — it reveals how much buyers gain from market exchange. Tap each step to build the picture.',
      diagramKey: 'demandCsSvg',
      steps: [
        {
          key: 'base',
          label: 'Demand curve',
          text: 'Each point on the demand curve shows the maximum price a buyer would pay for that unit — their willingness to pay (WTP). At lower quantities, WTP is high; it falls as more units are consumed (diminishing marginal utility). The market price P* is the same for every buyer.'
        },
        {
          key: 'cs',
          label: 'Consumer surplus',
          text: 'Consumer surplus is the green triangle — the area above the market price P* and below the demand curve. Every buyer who would have paid more than P* receives a "bonus". The triangle\'s area measures the total benefit consumers receive beyond what they actually pay. Formula: CS = ½ × Q* × (max WTP − P*).'
        },
        {
          key: 'pfall',
          label: 'Price falls → CS grows',
          text: 'When price falls to P₂, consumer surplus expands in two ways: ① Existing buyers each save (P* − P₂) on every unit — the rectangle between P* and P₂ is their gain. ② New buyers enter who weren\'t willing to pay P* — output extends to Q₂, adding a further triangle of surplus. A tax does the reverse: raising consumer price shrinks CS, with part going to government revenue and part lost as deadweight welfare loss.'
        }
      ],
      examEdge: 'A tax causes: (1) consumer surplus transferred to government as revenue, (2) consumer surplus destroyed as deadweight loss (DWL). Distinguish which part is redistribution and which is pure welfare loss — this shows you understand welfare analysis, not just diagram labelling.'
    },
    {
      id: 'demand_5',
      template: 'framing',
      title: 'Derived Demand',
      diagramKey: 'derivedDemandFlow',
      tip: 'Derived demand links product and factor markets. If demand for cars falls in a recession, derived demand for car workers, steel, and components falls too — making recessions self-reinforcing.',
      flow: [
        { icon: '🛍️', title: 'Consumers demand cars',      sub: 'Rising incomes → demand for vehicles grows.',                tone: 'green'  },
        { icon: '🏭', title: 'Car firms expand output',    sub: 'Firms plan to build more vehicles.',                         tone: 'blue'   },
        { icon: '⚙️', title: 'Demand for steel rises',    sub: 'More cars → more steel needed → steel market demand shifts right.',  tone: 'amber'  },
        { icon: '👷', title: 'Demand for labour rises',    sub: 'More production → firms hire more workers in assembly.',     tone: 'purple' },
        { icon: '📈', title: 'Wages and prices rise',      sub: 'Strong derived demand bids up wages and input costs.',       tone: 'rose'   }
      ],
      flowTitle: 'How derived demand flows through markets',
      flowEmoji: '🔗',
      keyTerms: [
        { term: 'Derived demand', def: 'Demand for a factor or intermediate good arising from demand for the final good it helps produce.' },
        { term: 'Factor market', def: 'Market for inputs to production: labour, capital, land — demand in factor markets is always derived.' },
        { term: 'Joint demand', def: 'Demand for two goods that are complements — used together; demand for one creates demand for the other.' }
      ],
      examEdge: 'Derived demand links micro and macro: if aggregate demand falls in a recession, demand for labour falls across the economy (derived demand), explaining rising unemployment. This chain — falling AD → falling product demand → falling derived demand for labour → unemployment — is a key transmission mechanism.'
    },
    {
      id: 'demand_6',
      template: 'diagnose',
      title: 'Demand in Real Markets',
      diagramKey: 'realMarketsGrid',
      intro: 'Demand analysis applies to every market — but context-specific factors determine which determinants dominate.',
      rows: [
        { label: 'Market', colA: 'Housing', colB: 'Petrol' },
        { label: 'Key demand driver', colA: 'Income, mortgage availability, population in area, expectations of future prices', colB: 'Car ownership, commuting distance, price (relatively inelastic demand)' },
        { label: 'Key shift', colA: 'Interest rate fall → demand rises; immigration → demand rises; house price expectations up → demand rises now', colB: 'Rise in car ownership → derived demand rises; EV adoption → derived demand for petrol falls' }
      ],
      footer: 'For exam questions, always identify the MOST IMPORTANT non-price determinant for the specific market asked about — do not just list all possible factors.',
      examEdge: 'Housing market is particularly exam-relevant: highly inelastic supply (takes years to build), volatile demand (interest-rate and sentiment driven) → house price volatility. The interaction of low PES and shifting demand explains why house prices are so unstable.'
    },
    {
      id: 'demand_7',
      template: 'framing',
      title: 'The Demand Curve and Market Analysis',
      diagramKey: 'demandScheduleCurve',
      tip: 'Diagram checklist: label both axes (P, Q), label the curve (D or D₁), mark equilibrium (P*, Q*), show shifts clearly (D₂ rightward = increase). Methodical technique earns marks even when written analysis is incomplete.',
      body: 'The demand curve is the foundation of all market analysis in economics. It must be mastered before moving on to supply, equilibrium, elasticity, and market failure.<br><br><strong>Key diagram rules:</strong><br>1. Label axes: Price (P) on vertical, Quantity (Q) on horizontal.<br>2. Label the curve D (or D1 if you will draw D2).<br>3. Mark equilibrium point with coordinates (P*, Q*).<br>4. For a shift, draw D2 and label it clearly.<br>5. Arrow direction: right for increase in demand, left for decrease.',
      keyTerms: [
        { term: 'Ceteris paribus', def: 'Latin for "all else equal" — the assumption that only one variable changes at a time when analysing its effect.' },
        { term: 'Effective demand', def: 'Demand backed by both willingness AND ability to pay — a wish list without purchasing power is not demand.' },
        { term: 'Market demand', def: 'Horizontal sum of all individual demand curves — aggregate quantity demanded at each price across all consumers.' }
      ],
      examEdge: 'Edexcel examiners note: too many students confuse "demand" (the whole schedule) with "quantity demanded" (a specific point on the schedule). "Demand" shifts; "quantity demanded" moves. Using these terms precisely throughout an essay is a marker of top-band understanding.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
