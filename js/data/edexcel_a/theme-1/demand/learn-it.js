window.ECONOS_TOPIC = {
  id: 'demand',
  topicNum: '2.1',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Demand',
  estTime: '7-9 minutes',
  goal: 'Lock in the law of demand, demand curve shifts, consumer surplus, and derived demand – the foundations of all market analysis.',
  intro: {
    heroKey: 'heroDemand',
    summary: 'Demand is the quantity of a good consumers are willing and able to buy at each possible price. The demand curve is the most used diagram in economics – understanding what moves along it vs what shifts it is non-negotiable.',
    doInThis: 'Work through 7 cards covering the law of demand, the demand curve, movements vs shifts, the determinants of demand, consumer surplus, derived demand, and demand in real markets.',
    outcomes: [
      'State the law of demand and explain the two effects underpinning it',
      'Distinguish a movement along the demand curve from a shift in demand',
      'List and explain the non-price determinants of demand',
      'Illustrate and calculate consumer surplus'
    ],
    tip: 'A price change causes a movement ALONG the demand curve. A change in any other determinant (income, tastes, related goods prices) shifts the WHOLE curve.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'done' },
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'demand_1',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Demand: the big picture',
      diagramKey: 'demandLawCurve',
      keyPoints: [
        { icon: '⚖️',  title: 'Law of demand',    headline: 'As price falls, quantity demanded usually rises.',                                  body: 'Consumers buy more when it\'s cheaper and less when it\'s more expensive.',         tone: 'green' },
        { icon: '🛒',  title: 'Effective demand',  headline: 'Consumers must both want and be able to pay.',                                       body: 'If incomes are too low or credit is unavailable, demand won\'t be realised.',        tone: 'amber' },
        { icon: '🏛️', title: 'Demand matters',    headline: 'Firms, governments and economists use demand analysis to predict behaviour.',         body: 'It underpins pricing, marketing, policy and forecasting.',                            tone: 'blue'  }
      ],
      keyTerms: [
        { term: 'Law of demand', def: 'Ceteris paribus: a fall in price leads to a rise in quantity demanded; price and quantity demanded move in opposite directions.' },
        { term: 'Substitution effect', def: 'Price rise makes a good relatively expensive vs alternatives → consumers switch away → quantity demanded falls.' },
        { term: 'Income effect', def: 'Price rise reduces real purchasing power → consumers can afford less of the good (and others).' }
      ],
      blocks: [
        { type: 'calloutStrip', tone: 'blue', icon: '💡', text: 'Why do queues form for Taylor Swift tickets but shops slash prices on old stock? Demand helps explain how consumers respond to price – and why firms obsess over it.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Always state the ceteris paribus assumption when explaining the law of demand – other things stay the same. Giffen goods are the rare exception: a price rise increases quantity demanded because the income effect overwhelms the substitution effect. Mention this only for evaluation marks.' }
      ]
    },
    {
      id: 'demand_2',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Movement Along vs Shift of the Demand Curve',
      lede: 'This is the most common source of error in exam diagrams – explore the distinction interactively.',
      blocks: [
        { type: 'sectionHeader', icon: '📈', label: 'Movement along vs shift' },
        {
          type: 'econDiagram',
          chart: 'supplyDemand',
          views: [
            {
              label: 'The demand curve',
              show: ['D', 'S'],
              head: 'The demand curve',
              body: 'The demand curve shows the inverse relationship between price and quantity demanded. Ceteris paribus, as price rises, quantity demanded falls.',
              analysis: 'It slopes downward because of the substitution effect (the good becomes expensive relative to alternatives) and the income effect (real purchasing power falls as price rises). Equilibrium sits where demand meets supply at Pₑ, Qₑ.'
            },
            {
              label: 'Movement along',
              show: ['D'],
              points: [
                { label: 'A', tone: 'blue',  onCurve: 'D', x: 200 },
                { label: 'B', tone: 'green', onCurve: 'D', x: 500 }
              ],
              arrows: [['A', 'B', { tone: 'slate' }]],
              head: 'Movement along the demand curve',
              body: 'A change in the good\'s own price causes a movement along the demand curve – nothing else can. A price rise causes a contraction (A: higher P, lower Q); a price fall causes an extension (B: lower P, higher Q).',
              analysis: 'The curve itself does not move – the point simply slides along the existing D. Precise language matters: say "quantity demanded falls," not "demand falls." A price rise gives a contraction; a price fall gives an extension.'
            },
            {
              label: 'Demand shifts',
              show: ['D', 'S'],
              shifts: { D: 80 },
              head: 'A shift of the whole demand curve',
              body: 'A change in any non-price determinant shifts the entire demand curve. A rightward shift (increase) means more is demanded at every price; price and quantity both rise at the new equilibrium E₁.',
              analysis: 'Rightward (increase): more demanded at every price – higher income, changed tastes, or a rise in a substitute\'s price. Leftward (decrease): less demanded at every price – lower income, or a rise in a complement\'s price. Quantity changes at every price level, not just at one point.'
            }
          ]
        },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'green',  icon: '🏷️', head: 'Price change',           body: 'A change in the good\'s own price causes a movement along the existing demand curve – not a shift.' },
          { type: 'tile', tone: 'purple', icon: '💰', head: 'Income',                  body: 'Higher income raises demand for normal goods (rightward shift). Lower income reduces it. Inferior goods move in the opposite direction.' },
          { type: 'tile', tone: 'blue',   icon: '🎨', head: 'Tastes & advertising',    body: 'A shift in consumer preferences, a viral trend or an effective campaign shifts the entire demand curve left or right.' },
          { type: 'tile', tone: 'amber',  icon: '🔄', head: 'Prices of related goods', body: 'A substitute\'s price rise shifts demand right. A complement\'s price rise shifts demand left.' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'Never say "demand rises because price falls" – that confuses demand (the whole schedule) with quantity demanded (a point on the schedule). Price falls cause quantity demanded to rise (movement along). Demand rising means the curve shifts right. Examiners specifically test this distinction.' }
      ]
    },
    {
      id: 'demand_3',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Non-Price Determinants of Demand',
      shiftDiagrams: 'demand',
      howToThink: {
        left:  { icon: '➡️', tone: 'green', head: 'Shifts demand right', body: 'Higher income (normal goods) · Substitute\'s price rises · Complement\'s price falls · Positive taste shift · Population growth · Expected price rise' },
        right: { icon: '⬅️', tone: 'rose',  head: 'Shifts demand left',  body: 'Lower income · Substitute\'s price falls · Complement\'s price rises · Negative taste shift · Population falls · Expected price fall' }
      },
      blocks: [
        { type: 'calloutStrip', tone: 'blue', icon: '💡', text: 'Demand shifts when anything other than the good\'s own price changes – income, tastes, related goods prices, population or expectations.' },
        { type: 'sectionHeader', icon: '📋', label: 'What shifts the demand curve' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'green',  icon: '💰', head: 'Income',                   body: 'For normal goods: higher income → demand shifts right. For inferior goods (value-brand food, bus travel): higher income → demand shifts left. The key driver of YED analysis.' },
          { type: 'tile', tone: 'blue',   icon: '↔️', head: 'Substitutes',              body: 'A rise in the price of a substitute shifts demand for this good right – consumers switch across. A fall in the substitute\'s price shifts demand left.' },
          { type: 'tile', tone: 'amber',  icon: '🔗', head: 'Complements',              body: 'A rise in the price of a complement shifts demand for this good left – the two are bought together, so demand for both falls. A fall in the complement\'s price shifts demand right.' },
          { type: 'tile', tone: 'purple', icon: '🎨', head: 'Tastes & preferences',    body: 'Advertising, health recommendations, celebrity endorsements and social trends all shift demand. Changes can be rapid (viral trends) or gradual (long-run health awareness).' },
          { type: 'tile', tone: 'rose',   icon: '👥', head: 'Population & demographics',body: 'Population growth increases total market demand. A changing age structure shifts demand between sectors – an ageing population increases healthcare demand; a younger one increases education.' },
          { type: 'tile', tone: 'slate',  icon: '🔮', head: 'Expectations',             body: 'If consumers expect future price rises, they bring purchases forward → demand rises now. In asset markets, expected price rises increase demand today – a key driver of speculative bubbles.' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'Examiners expect you to identify the relevant shifter for the specific context, not just list all of them. If the question is about the housing market, identify the most important driver (interest rates, income, expectations) and apply it precisely.' }
      ]
    },
    {
      id: 'demand_4',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Consumer Surplus',
      lede: 'The demand curve does more than show quantity – it reveals how much buyers gain from market exchange. Tap each step to build the picture.',
      blocks: [
        { type: 'sectionHeader', icon: '📊', label: 'Building consumer surplus' },
        {
          type: 'econDiagram',
          chart: 'supplyDemand',
          views: [
            {
              label: 'Demand curve',
              show: ['D', 'S'],
              head: 'Demand curve',
              body: 'Each point on the demand curve shows the maximum price a buyer would pay for that unit – their willingness to pay (WTP).',
              analysis: 'At lower quantities, WTP is high; it falls as more units are consumed (diminishing marginal utility). The market price P* is the same for every buyer, set where demand meets supply.'
            },
            {
              label: 'Consumer surplus',
              show: ['D', 'S', 'PriceLine'],
              areas: [
                { between: ['D', 'PriceLine'], x: [80, 380], tone: 'green', label: 'CS' }
              ],
              head: 'Consumer surplus',
              body: 'Consumer surplus is the green triangle – the area above the market price P* and below the demand curve.',
              analysis: 'Every buyer who would have paid more than P* receives a "bonus". The triangle\'s area measures the total benefit consumers receive beyond what they actually pay. Formula: CS = ½ × Qₑ × (max WTP − P*).'
            },
            {
              label: 'Price falls → CS grows',
              show: ['D', 'S'],
              shifts: { S: 80 },
              head: 'Price falls → CS grows',
              body: 'When increased supply lowers price to P₂, consumer surplus expands: existing buyers each save on every unit, and new buyers enter as output extends down the demand curve to Q₂.',
              analysis: 'CS grows in two ways: ① existing buyers each save (P* − P₂) on every unit already bought; ② new buyers enter who weren\'t willing to pay P*, adding a further triangle of surplus as output extends. A tax does the reverse: raising the consumer price shrinks CS, with part going to government revenue and part lost as deadweight welfare loss.'
            }
          ]
        },
        { type: 'examEdge', title: 'Exam edge', text: 'A tax causes: (1) consumer surplus transferred to government as revenue, (2) consumer surplus destroyed as deadweight loss (DWL). Distinguish which part is redistribution and which is pure welfare loss – this shows you understand welfare analysis, not just diagram labelling.' }
      ]
    },
    {
      id: 'demand_5',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Derived Demand',
      keyTerms: [
        { term: 'Derived demand', def: 'Demand for a factor or intermediate good arising from demand for the final good it helps produce.' },
        { term: 'Factor market', def: 'Market for inputs to production: labour, capital, land – demand in factor markets is always derived.' },
        { term: 'Joint demand', def: 'Demand for two goods that are complements – used together; demand for one creates demand for the other.' }
      ],
      blocks: [
        { type: 'calloutStrip', tone: 'blue', icon: '💡', text: 'Derived demand links product and factor markets. If demand for cars falls in a recession, derived demand for car workers, steel, and components falls too – making recessions self-reinforcing.' },
        { type: 'sectionHeader', icon: '🔗', label: 'How derived demand flows through markets' },
        { type: 'mechanismChain', steps: [
          { label: 'Consumers demand cars',   detail: 'Rising incomes → demand for vehicles grows.' },
          { label: 'Car firms expand output', detail: 'Firms plan to build more vehicles.' },
          { label: 'Demand for steel rises',  detail: 'More cars → more steel needed → steel market demand shifts right.' },
          { label: 'Demand for labour rises', detail: 'More production → firms hire more workers in assembly.' },
          { label: 'Wages and prices rise',   detail: 'Strong derived demand bids up wages and input costs.' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'Derived demand links micro and macro: if aggregate demand falls in a recession, demand for labour falls across the economy (derived demand), explaining rising unemployment. This chain – falling AD → falling product demand → falling derived demand for labour → unemployment – is a key transmission mechanism.' }
      ]
    },
    {
      id: 'demand_6',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Demand in Real Markets',
      examples: [
        { tone: 'green', icon: '🎫', title: 'Taylor Swift tickets',   body: 'High willingness to pay, limited supply and loyal fans <strong>mean demand is very strong and not very price sensitive.</strong>' },
        { tone: 'green', icon: '⛽', title: 'Petrol',                  body: 'Relatively inelastic in the short run. People need it to get to work, school and essentials.' },
        { tone: 'green', icon: '🛒', title: 'Budget supermarkets',     body: 'Demand rises when incomes fall as people trade down to cheaper options. A rise in incomes can shift demand back.' },
        { tone: 'green', icon: '📺', title: 'Streaming subscriptions', body: 'Many close substitutes mean consumers can switch easily, making demand more elastic.' }
      ],
      blocks: [
        { type: 'calloutStrip', tone: 'blue', icon: '💡', text: 'In real markets, demand is shaped by many things at once – price, incomes, tastes, expectations, and market conditions. Understanding the full picture helps explain why demand changes.' },
        { type: 'sectionHeader', icon: '🔍', label: 'What economists look for' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',   icon: '🏷️', head: 'Price sensitivity',    body: 'How much demand changes when price changes.' },
          { type: 'tile', tone: 'amber',  icon: '🔄', head: 'Substitutes',           body: 'More substitutes usually mean more elastic demand.' },
          { type: 'tile', tone: 'green',  icon: '📈', head: 'Market data',           body: 'Sales, prices and volumes reveal real behaviour.' },
          { type: 'tile', tone: 'purple', icon: '🗓️', head: 'Seasonality',           body: 'Demand often follows predictable patterns.' },
          { type: 'tile', tone: 'rose',   icon: '🔮', head: 'Consumer expectations', body: 'Future beliefs influence today\'s demand.' },
          { type: 'tile', tone: 'slate',  icon: '💰', head: 'Income levels',         body: 'Changes in income shift demand – especially for normal and inferior goods.' }
        ]},
        { type: 'sectionHeader', icon: '⚡', label: 'Demand can shift in real time' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'green', icon: '☀️', head: 'Summer heatwave',    body: '<strong style="color:#059669;">Demand shifts right →</strong> for ice cream, fans and sun cream as warm weather drives a spike in willingness to buy.' },
          { type: 'tile', tone: 'rose',  icon: '🌧️', head: 'Trend ends or fades', body: '<strong style="color:#DC2626;">← Demand shifts left</strong> as consumers lose interest, switch to the next craze, or the season ends.' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'Use context: name the market, identify the likely determinant, and explain why demand is likely to be more or less responsive.' }
      ]
    },
    {
      id: 'demand_7',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'The Demand Curve and Market Analysis',
      diagramKey: 'demandScheduleCurve',
      keyTerms: [
        { term: 'Ceteris paribus', def: 'Latin for "all else equal" – the assumption that only one variable changes at a time when analysing its effect.' },
        { term: 'Effective demand', def: 'Demand backed by both willingness AND ability to pay – a wish list without purchasing power is not demand.' },
        { term: 'Market demand', def: 'Horizontal sum of all individual demand curves – aggregate quantity demanded at each price across all consumers.' }
      ],
      blocks: [
        { type: 'calloutStrip', tone: 'blue', icon: '💡', text: 'Diagram checklist: label both axes (P, Q), label the curve (D), mark key points (P*, Q*), show any shift as D₂ clearly. Methodical technique earns marks even when written analysis is incomplete.' },
        { type: 'sectionHeader', icon: '📈', label: 'How to use this diagram' },
        { type: 'mechanismChain', steps: [
          { label: 'Read the curve',  detail: 'The curve slopes downward. There is an inverse relationship between price and quantity demanded.' },
          { label: 'Use the curve',   detail: 'Estimate the effects of price changes, calculate revenue and measure consumer surplus.' },
          { label: 'Limitations',     detail: 'In real life, many other factors change simultaneously. The ceteris paribus assumption rarely holds perfectly.' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'Edexcel examiners note: too many students confuse "demand" (the whole schedule) with "quantity demanded" (a specific point on the schedule). "Demand" shifts; "quantity demanded" moves. Using these terms precisely throughout an essay is a marker of top-band understanding.' }
      ],
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
    title:    'Demand',
    subtitle: 'Theme 1 &middot; Topic 2.1 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('demand_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers the law of demand, shifts vs movements, determinants, consumer surplus, derived demand, and evaluation',
    shortNames: [
      'Law of demand', 'Move vs shift sort', 'Normal vs inferior', 'Consumer surplus',
      'Demand shifters', 'Derived demand fill', 'Cause & effect', 'Odd one out',
      'Data table', 'Demand chain'
    ],

    questions: [

      /* 1 – MCQ: law of demand */
      { type: 'mcq',
        stem: 'The <strong>law of demand</strong> states that, ceteris paribus, as price rises quantity demanded falls. Which two effects underpin this relationship?',
        opts: [
          'The substitution effect (the good becomes relatively more expensive than alternatives) and the income effect (real purchasing power falls)',
          'The supply effect (higher prices incentivise more production) and the wealth effect (rising prices increase nominal wealth)',
          'The signalling effect (higher prices signal higher quality) and the Veblen effect (conspicuous consumption increases at higher prices)',
          'The production effect (firms expand output at higher prices) and the factor effect (higher prices raise returns to factors of production)'
        ],
        ans: 0,
        exp: 'The <strong>substitution effect</strong>: as a good\'s price rises it becomes more expensive relative to substitutes – consumers switch away. The <strong>income effect</strong>: a price rise reduces real purchasing power, so consumers buy less of everything including the good in question. For normal goods both effects reinforce each other, producing a downward-sloping demand curve. Giffen goods are the rare exception where a perverse income effect dominates.'
      },

      /* 2 – Elastic sort: movement along vs shift */
      { type: 'elastic_sort',
        stem: 'Classify each event as causing a <strong>movement along</strong> the demand curve or a <strong>shift</strong> of the demand curve.',
        categories: ['move', 'shift'],
        categoryLabels: ['Movement along the demand curve', 'Shift of the demand curve'],
        goods: [
          { icon: '🎬', label: 'Cinema ticket prices rise from £12 to £15', note: '', ans: 'move' },
          { icon: '📈', label: 'A rise in household incomes increases demand for restaurant meals', note: '', ans: 'shift' },
          { icon: '🚗', label: 'A fall in petrol prices increases quantity demanded of petrol', note: '', ans: 'move' },
          { icon: '📱', label: 'A health report links a food product to cancer; consumer demand falls', note: '', ans: 'shift' },
          { icon: '☕', label: 'Coffee shop prices rise – fewer coffees are purchased', note: '', ans: 'move' },
          { icon: '🎮', label: 'A popular influencer promotes a gaming console – more purchased at every price', note: '', ans: 'shift' }
        ],
        exp: '<strong>Movements along</strong> the demand curve are caused ONLY by a change in the good\'s own price (extension or contraction of quantity demanded). The demand curve itself does not move. <strong>Shifts</strong> are caused by non-price determinants – income, tastes, prices of related goods, demographics, expectations. The most common exam error is writing "demand falls because price rises" – strictly, a price rise causes a <em>contraction in quantity demanded</em>, not a fall in demand.'
      },

      /* 3 – MCQ: normal vs inferior good */
      { type: 'mcq',
        stem: 'UK household incomes rise significantly. Which pair of demand responses is consistent with one good being <strong>normal</strong> and one being <strong>inferior</strong>?',
        opts: [
          'Demand for restaurant meals rises; demand for supermarket own-brand value food falls',
          'Demand for both luxury cars and public bus travel rises, as consumers have more money for everything',
          'Demand for own-brand food rises; demand for restaurant meals falls, as consumers save more with higher incomes',
          'Demand for both goods falls – rising incomes shift spending toward investment and savings'
        ],
        ans: 0,
        exp: 'A <strong>normal good</strong> has positive YED (demand rises with income). An <strong>inferior good</strong> has negative YED (demand falls as income rises – consumers switch to superior alternatives). Restaurant meals are normal (possibly luxury with YED > 1); own-brand value food is inferior – higher incomes lead consumers to switch to branded or premium products. Option B is wrong: public bus travel is typically inferior (higher incomes → car ownership). Options C and D reverse or misapply the framework.'
      },

      /* 4 – Numeric input: consumer surplus */
      { type: 'numeric_input',
        stem: 'Calculate the total <strong>consumer surplus</strong> (£) in this market.',
        context: 'A consumer\'s willingness to pay for concert tickets: 1st ticket £80, 2nd ticket £60, 3rd ticket £40, 4th ticket £20. The market price is <strong>£40</strong> per ticket.',
        answer: 60,
        tolerance: 0.5,
        unit: '£',
        hint: 'Consumer surplus = sum of (willingness to pay − price paid) for each unit purchased at or above the market price.',
        workingSteps: [
          'At £40, consumer buys tickets where WTP ≥ £40: 1st (£80), 2nd (£60), 3rd (£40)',
          '1st ticket surplus: £80 − £40 = £40',
          '2nd ticket surplus: £60 − £40 = £20',
          '3rd ticket surplus: £40 − £40 = £0',
          'Total = £40 + £20 + £0 = £60'
        ],
        exp: 'At a price of £40 the consumer buys 3 tickets (all with WTP ≥ £40). Consumer surplus = (80−40) + (60−40) + (40−40) = <strong>£60</strong>. The third ticket generates zero surplus but is still purchased. Consumer surplus measures the welfare gain from market exchange above what was paid – it is the "bonus" to buyers. A price fall would expand both the number of units bought and the surplus per existing unit.'
      },

      /* 5 – Multi-select: non-price demand shifters */
      { type: 'multi_select',
        stem: 'A mobile phone company holds its price constant. Which of the following would shift the <strong>demand curve for the phone rightward</strong>?',
        opts: [
          'A rise in consumer incomes (mobile phones are a normal good)',
          'A new health report finds smartphones are harmful – reducing consumers\' desire to own one',
          'A major competitor\'s phone is recalled due to a safety defect',
          'The price of mobile phone contracts (a complementary good) falls significantly',
          'The company cuts its own handset price by 20%',
          'A significant rise in the student population – a core demographic for smartphones'
        ],
        correct: [0, 2, 3, 5],
        exp: 'Options A, C, D, and F shift demand <strong>rightward</strong>: higher incomes increase demand for a normal good; competitor recall reduces availability of substitutes; cheaper contracts (complementary good) increase joint demand; larger student population expands the market. Option B shifts demand <strong>leftward</strong> (adverse taste change). Option E – the company\'s own price cut – causes a <strong>movement along</strong> the demand curve (extension of quantity demanded), NOT a shift. This is the most important distinction in demand analysis.'
      },

      /* 6 – Para fill: derived demand */
      { type: 'para_fill',
        stem: 'Complete the paragraph explaining derived demand.',
        anchor: 'Derived demand links product markets to factor markets through the demand chain.',
        para: 'Derived demand occurs when demand for one good exists because of demand for [1]. For example, demand for steel is [2] from demand for cars and construction. In a [3] market, a firm\'s demand for labour depends on demand for its final [4]. If aggregate demand falls in a [5], firms reduce output and [6] workers – this is the transmission mechanism from product market to labour market through [7] demand.',
        blanks: [
          { id: 1, opts: ['another good', 'the same good', 'a substitute', 'a complement'], ans: 0 },
          { id: 2, opts: ['derived', 'independent', 'primary', 'elastic'], ans: 0 },
          { id: 3, opts: ['factor', 'goods', 'financial', 'housing'], ans: 0 },
          { id: 4, opts: ['product', 'input', 'capital', 'service'], ans: 0 },
          { id: 5, opts: ['recession', 'boom', 'period of growth', 'tax cut'], ans: 0 },
          { id: 6, opts: ['lay off', 'hire', 'train', 'promote'], ans: 0 },
          { id: 7, opts: ['derived', 'direct', 'joint', 'independent'], ans: 0 }
        ],
        exp: '(1) Demand for a factor/intermediate good exists because of demand for <strong>another (final) good</strong>. (2) Steel demand is <strong>derived</strong> from car/construction demand. (3) In a <strong>factor</strong> market (labour, land, capital), demand is always derived. (4) Labour demand depends on demand for the final <strong>product</strong>. (5) In a <strong>recession</strong>, AD falls – this triggers the chain. (6) Firms <strong>lay off</strong> workers when output demand falls. (7) The chain operates through <strong>derived</strong> demand. This links macro shocks to micro labour markets: recession → falling product demand → falling derived demand for labour → unemployment.'
      },

      /* 7 – Cause & effect: demand determinants */
      { type: 'cause_effect',
        stem: 'Match each cause to its correct effect on demand for a good.',
        pairs: [
          { cause: 'Rise in income (normal good)', effect: 'Demand curve shifts rightward' },
          { cause: 'Fall in price of a substitute good', effect: 'Demand for this good shifts leftward' },
          { cause: 'Fall in price of a complementary good', effect: 'Demand curve shifts rightward' },
          { cause: 'Rise in the good\'s own price', effect: 'Movement along – contraction in quantity demanded' },
          { cause: 'Advertising campaign increases brand awareness', effect: 'Demand curve shifts rightward' },
          { cause: 'Rise in income (inferior good)', effect: 'Demand curve shifts leftward' }
        ],
        exp: 'Demand determinants: <strong>own price</strong> → movement along the curve (never a shift). <strong>Income</strong> → rightward shift for normal goods; leftward for inferior goods. <strong>Related goods</strong>: cheaper substitutes reduce this good\'s demand (leftward); cheaper complements increase joint demand (rightward). <strong>Tastes/advertising</strong> → rightward shift. The rule: if the good\'s own price changes → movement along; anything else → shift.'
      },

      /* 8 – Odd one out: causes of rightward shift */
      { type: 'odd_one_out',
        stem: 'Three of these cause the demand curve for <strong>domestic air travel</strong> to shift rightward. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '💰', label: 'A significant rise in disposable incomes across UK households', note: '' },
          { icon: '🚂', label: 'A large rise in domestic rail fares makes train travel less attractive', note: '' },
          { icon: '✈️', label: 'Airlines reduce ticket prices following increased competition on major routes', note: '' },
          { icon: '🌍', label: 'Growing demand for UK city breaks boosts overall domestic travel appetite', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>airlines reducing ticket prices</strong>. A price change causes a movement <em>along</em> the demand curve (extension of quantity demanded) – NOT a shift of the curve. The other three are non-price determinants that shift the curve: higher incomes (air travel is a normal/luxury good – rightward shift); higher rail fares (substitutes more expensive – rightward shift); growing appetite for city breaks (taste/trend – rightward shift).'
      },

      /* 9 – Data table: coffee shop demand */
      { type: 'data_table',
        stem: 'The table shows changes in factors affecting the UK coffee shop market.',
        headers: ['Factor', 'Change', 'Direction'],
        rows: [
          ['Average UK household disposable income', 'Rises by 3%', '↑'],
          ['Price of home coffee machines (substitute)', 'Falls by 15%', '↓'],
          ['Price of coffee shop sandwiches (complement)', 'Falls by 10%', '↓'],
          ['Social media trend promoting coffee culture', 'Strong growth', '↑']
        ],
        question: 'Considering only the <strong>demand-side factors</strong> shown, what is the <strong>net expected effect</strong> on demand for coffee shop visits?',
        opts: [
          'Ambiguous – rising incomes, cheaper complements, and social media trend all shift demand right; cheaper home machines shift it left; net outcome depends on relative magnitudes',
          'Demand will definitely increase – the three rightward-shifting factors outweigh the one leftward factor',
          'Demand will definitely decrease – the substitute effect from cheaper home machines dominates',
          'Only income changes affect demand; the other factors are irrelevant to demand analysis'
        ],
        ans: 0,
        exp: 'Three factors increase demand (rightward shift): higher income (normal/luxury good), cheaper sandwiches (complementary good), and the social media trend (taste shift). One factor reduces demand (leftward shift): cheaper home coffee machines (substitute). The <strong>net effect is ambiguous</strong> without knowing relative magnitudes. Acknowledging competing forces and explaining the analytical uncertainty is a hallmark of strong A-level analysis. Options B and C both over-claim by ignoring the opposing force.'
      },

      /* 10 – Chain: interest rate rise to housing demand */
      { type: 'chain',
        stem: 'The Bank of England raises interest rates from 0.5% to 5.25%. Place the consequences in the correct logical order for the <strong>housing market</strong>.',
        items: [
          { label: 'Mortgage costs rise sharply, reducing the effective demand for home purchases', note: '' },
          { label: 'House prices fall as the market adjusts toward a new lower equilibrium', note: '' },
          { label: 'The Bank of England raises the base rate to 5.25% to combat inflation', note: '' },
          { label: 'Demand for houses shifts leftward – fewer buyers at any given price', note: '' },
          { label: 'Excess supply emerges – sellers cannot achieve asking prices; properties sit unsold', note: '' },
          { label: 'New housing starts fall as developers respond to lower expected selling prices', note: '' }
        ],
        correctOrder: [2, 0, 3, 4, 1, 5],
        exp: '<strong>Correct sequence:</strong> (1) BoE raises interest rates. (2) Mortgage costs rise – key transmission mechanism to housing demand. (3) Housing demand curve shifts leftward (fewer buyers at each price). (4) Excess supply at the old price – sellers cannot sell. (5) House prices fall to new equilibrium. (6) New housing starts fall (supply responds with a lag). The housing market is particularly interest-rate sensitive because most purchases are mortgage-financed, making this a central transmission channel of monetary policy.'
      }

    ]
  };

})();
