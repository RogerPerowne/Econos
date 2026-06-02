window.ECONOS_TOPIC = {
  id: 'demand',
  topicNum: '2.1',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Demand',
  estTime: '8-10 minutes',
  goal: 'Lock in the demand curve: why it slopes down, movements along it vs shifts of it, the conditions of demand, and the types of good – the foundations of all market analysis.',
  intro: {
    heroKey: 'heroDemand',
    summary: 'Demand is the quantity of a good consumers are willing and able to buy at each possible price. The demand curve is the most-used diagram in economics – the non-negotiable skill is telling what moves ALONG it (a price change) from what SHIFTS it (a non-price determinant).',
    doInThis: 'Work through 8 cards: the big picture, why the curve slopes down, movements along the curve, shifts of the curve, what shifts demand, types of good, derived demand, and an exam toolkit.',
    outcomes: [
      'Distinguish a movement along the demand curve from a shift of the demand curve',
      'Explain why the demand curve slopes down (substitution, real-income, diminishing marginal utility)',
      'List and apply the conditions of demand that shift the curve',
      'Classify normal, inferior, substitute and complement goods and predict the shift'
    ],
    tip: 'A change in the good’s own price causes a movement ALONG the demand curve. A change in any other determinant (income, tastes, related-goods prices) shifts the WHOLE curve.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    /* ================================================================
       CARD 1 – Demand: the big picture (Decompose a diagram)
       ================================================================ */
    {
      id: 'demand_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Demand: the big picture',
      tip: { icon: '✅', tone: 'green', text: 'Demand means willingness AND ability to pay – not just wanting something. The demand curve shows how much consumers buy at each price.' },
      diagramKey: 'demandBigPicture',
      diagramLabel: 'What the demand curve shows',
      diagramEmoji: '📊',
      causes: [
        { tone: 'blue',  icon: '🙋', head: 'Willingness', body: 'Consumers want the good.' },
        { tone: 'amber', icon: '👛', head: 'Ability',     body: 'They can afford to buy it.' },
        { tone: 'green', icon: '🏷️', head: 'At each price', body: 'Demand is a relationship across prices, not a single number.' }
      ],
      causesLabel: 'What demand really means',
      causesEmoji: '🛒',
      causesStyle: 'tinted-flat',
      keyTerms: [
        { term: '📉 Demand',            def: 'The whole relationship between price and quantity demanded.' },
        { term: '🛒 Quantity demanded', def: 'The amount consumers buy at one particular price.' },
        { term: '⚖️ Ceteris paribus',   def: 'All other influences on demand are held constant.' }
      ],
      keyTermsLabel: 'Key language',
      keyTermsEmoji: '📖',
      examEdge: 'Use <strong>quantity demanded</strong> for movements along the curve; reserve <strong>demand</strong> for the whole curve or a shift. A price change moves us along the curve; a non-price factor shifts the whole curve.'
    },

    /* ================================================================
       CARD 2 – Why the demand curve slopes down (Decompose + reasons)
       ================================================================ */
    {
      id: 'demand_2',
      template: 'framing',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Why the demand curve slopes down',
      tip: { icon: '✅', tone: 'green', text: 'As price falls consumers usually buy more; as price rises they usually buy less. Lower prices make a good both more attractive and more affordable.' },
      diagramKey: 'demandSlopeCurve',
      diagramLabel: 'The downward-sloping demand curve',
      diagramEmoji: '📉',
      causes: [
        { tone: 'green',  icon: '🔀', head: 'Substitution effect',       body: 'When the good gets cheaper, consumers switch towards it and away from alternatives.' },
        { tone: 'amber',  icon: '👛', head: 'Real-income effect',        body: 'A lower price stretches purchasing power, so consumers can afford more.' },
        { tone: 'purple', icon: '📉', head: 'Diminishing marginal utility', body: 'Extra units are valued less, so consumers only buy more if the price falls.' }
      ],
      causesLabel: 'Three reasons',
      causesEmoji: '📈',
      causesStyle: 'tinted-flat',
      causes2: [
        { tone: 'blue',   icon: '⬇️', head: 'Lower price', body: 'A movement <strong>down</strong> the curve – quantity demanded extends.' },
        { tone: 'amber',  icon: '⬆️', head: 'Higher price', body: 'A movement <strong>up</strong> the curve – quantity demanded contracts.' },
        { tone: 'purple', icon: '⚠️', head: 'Usually, not always', body: 'The law of demand holds in most cases; Giffen and Veblen goods are rare exceptions.' }
      ],
      causes2Label: 'Why it matters',
      causes2Emoji: '💡',
      causes2Style: 'tinted-flat',
      examEdge: 'When explaining the slope, name at least one mechanism – the <strong>substitution effect</strong>, the <strong>real-income effect</strong>, or <strong>diminishing marginal utility</strong>. Rare Giffen/Veblen exceptions don’t overturn the basic demand story.'
    },

    /* ================================================================
       CARD 3 – Movements along the demand curve (a)
       ================================================================ */
    {
      id: 'demand_3',
      template: 'framing',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Movements along the demand curve',
      tip: { icon: '✅', tone: 'green', text: 'A change in the good’s own price causes a movement along the SAME demand curve – never a shift. Worked example: price falls £8 → £6, quantity demanded rises 30 → 40.' },
      diagramKey: 'demandMovements',
      diagramLabel: 'Extension vs contraction',
      diagramEmoji: '📈',
      flow: [
        { tone: 'blue',  icon: '🏷️', title: 'Price changes',          sub: 'The good’s own price moves.' },
        { tone: 'blue',  icon: '🧠', title: 'Consumers recalculate value', sub: 'They re-weigh the good against the alternatives.' },
        { tone: 'amber', icon: '🛒', title: 'Quantity demanded changes', sub: 'We slide to a new point on the same curve.' }
      ],
      flowTitle: 'The mechanism',
      flowEmoji: '🔗',
      causes: [
        { tone: 'green', icon: '↗️', head: 'Extension',   body: 'More is bought because price falls (move down the curve).' },
        { tone: 'amber', icon: '↘️', head: 'Contraction', body: 'Less is bought because price rises (move up the curve).' },
        { tone: 'blue',  icon: '🟰', head: 'Same curve',   body: 'Non-price conditions are unchanged, so the curve doesn’t move.' }
      ],
      causesLabel: 'Common language',
      causesEmoji: '📖',
      causesStyle: 'tinted-flat',
      examEdge: 'Say <strong>“extension in quantity demanded”</strong> or <strong>“contraction in quantity demanded”</strong> – not “demand increased” – when the curve itself has not shifted.'
    },

    /* ================================================================
       CARD 4 – Shifts in demand (a)
       ================================================================ */
    {
      id: 'demand_4',
      template: 'framing',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Shifts in demand',
      tip: { icon: '✅', tone: 'green', text: 'When a non-price factor changes, the whole demand curve shifts left or right – more or less is demanded at every price.' },
      diagramKey: 'demandShifts',
      diagramLabel: 'Increase and decrease',
      diagramEmoji: '📊',
      causes: [
        { tone: 'green',  icon: '🛒', head: 'Demand increases', body: 'The curve shifts right (D₁ → D₂): at each price, consumers buy more.' },
        { tone: 'purple', icon: '🛍️', head: 'Demand decreases', body: 'The curve shifts left (D₁ → D₃): at each price, consumers buy less.' }
      ],
      causesLabel: 'Increase vs decrease',
      causesEmoji: '↔️',
      causesStyle: 'tinted-flat',
      causes2Cols: 2,
      note: {
        tone: 'blue', icon: 'ℹ️', head: 'Not a shift',
        text: 'If only the good’s own price changes, we <strong>move along</strong> D₁. The curve <strong>shifts</strong> only when another determinant changes.'
      },
      examEdge: 'Always state whether the question describes a <strong>movement along</strong> the curve or a <strong>shift</strong> of the curve before you explain the outcome.'
    },

    /* ================================================================
       CARD 5 – What shifts demand (b) conditions of demand
       ================================================================ */
    {
      id: 'demand_5',
      template: 'framing',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'What shifts demand',
      tip: { icon: '✅', tone: 'green', text: 'Think of shifts as demand drivers OUTSIDE the good’s own price – the conditions of demand.' },
      diagramKey: 'demandDeterminantsHub',
      diagramLabel: 'The demand drivers',
      diagramEmoji: '🎯',
      causes: [
        { tone: 'purple', icon: '🍦', head: 'Ice creams',      body: 'Hotter weather raises demand (seasonal effect).' },
        { tone: 'green',  icon: '🔌', head: 'Electric cars',    body: 'Stronger green preferences raise demand (tastes).' },
        { tone: 'blue',   icon: '🎬', head: 'Cinema tickets',   body: 'A population increase can raise demand.' }
      ],
      causesLabel: 'One market, many stories',
      causesEmoji: '✨',
      causesStyle: 'tinted-flat',
      note: {
        tone: 'blue', icon: 'ℹ️', head: 'Why isn’t price on the list?',
        text: 'The good’s own price is not a demand driver – it causes a movement <em>along</em> the curve, not a shift.'
      },
      examEdge: 'In essays, <strong>name the determinant</strong>, then say whether it shifts demand <strong>left or right</strong> – don’t just assert that demand changed.'
    },

    /* ================================================================
       CARD 6 – Normal, inferior, substitutes & complements (b)
       ================================================================ */
    {
      id: 'demand_6',
      template: 'framing',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Normal, inferior, substitutes & complements',
      tip: { icon: '✅', tone: 'green', text: 'To predict the shift correctly, you often need to classify the good first – is it normal or inferior, a substitute or a complement?' },
      diagramKey: 'demandGoodTypes',
      diagramLabel: 'Two key relationships',
      diagramEmoji: '⚖️',
      flow: [
        { tone: 'blue',   icon: '🔍', title: 'Identify the change', sub: 'What has actually changed?' },
        { tone: 'amber',  icon: '🏷️', title: 'Classify the good',   sub: 'Normal/inferior, substitute/complement.' },
        { tone: 'purple', icon: '📈', title: 'Predict the direction', sub: 'Which way will demand move?' },
        { tone: 'green',  icon: '💬', title: 'State the shift',      sub: 'Left or right, clearly.' }
      ],
      flowTitle: 'How to think about it',
      flowEmoji: '🧭',
      examEdge: 'Use the terms carefully: <strong>normal/inferior</strong> refer to <em>income</em> changes (YED); <strong>substitutes/complements</strong> refer to the <em>relationship between goods</em> (XED). This sets up the elasticity topic next.'
    },

    /* ================================================================
       CARD 7 – Derived Demand (retained applied extension)
       ================================================================ */
    {
      id: 'demand_7',
      template: 'framing',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Derived Demand',
      tip: { icon: '💡', tone: 'blue', text: 'Some demand is derived: it exists only because of demand for something else. If demand for cars falls in a recession, derived demand for car workers, steel and components falls too – making recessions self-reinforcing.' },
      flow: [
        { icon: '🛍️', title: 'Consumers demand cars',   sub: 'Rising incomes → demand for vehicles grows.',                       tone: 'green'  },
        { icon: '🏭', title: 'Car firms expand output', sub: 'Firms plan to build more vehicles.',                                tone: 'blue'   },
        { icon: '⚙️', title: 'Demand for steel rises',  sub: 'More cars → more steel needed → steel demand shifts right.',        tone: 'amber'  },
        { icon: '👷', title: 'Demand for labour rises', sub: 'More production → firms hire more workers.',                        tone: 'purple' },
        { icon: '📈', title: 'Wages and prices rise',    sub: 'Strong derived demand bids up wages and input costs.',             tone: 'rose'   }
      ],
      flowTitle: 'How derived demand flows through markets',
      flowEmoji: '🔗',
      keyTerms: [
        { term: 'Derived demand', def: 'Demand for a factor or intermediate good arising from demand for the final good it helps produce.' },
        { term: 'Factor market', def: 'Market for inputs to production: labour, capital, land – demand here is always derived.' },
        { term: 'Joint demand', def: 'Demand for two complements used together; demand for one creates demand for the other.' }
      ],
      examEdge: 'Derived demand links micro and macro: if aggregate demand falls in a recession, demand for labour falls across the economy (derived demand) – the chain falling AD → falling product demand → falling derived demand for labour → unemployment is a key transmission mechanism.'
    },

    /* ================================================================
       CARD 8 – The demand exam toolkit (synthesis)
       ================================================================ */
    {
      id: 'demand_8',
      template: 'framing',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'The demand exam toolkit',
      tip: { icon: '✅', tone: 'green', text: 'Most demand questions come down to one distinction: movement or shift? Separate price changes from non-price changes and the logic becomes much clearer.' },
      flow: [
        { tone: 'blue',   icon: '🔍', title: 'Identify the change', sub: 'What has actually happened?' },
        { tone: 'amber',  icon: '🔀', title: 'Movement or shift?',  sub: 'Own-price change or non-price factor?' },
        { tone: 'purple', icon: '📊', title: 'State the effect',    sub: 'Extension, contraction, increase or decrease.' },
        { tone: 'green',  icon: '✅', title: 'Finish the chain',    sub: 'Explain the effect on quantity demanded and the curve.' }
      ],
      flowTitle: 'How to read a demand question',
      flowEmoji: '🧰',
      causes: [
        { tone: 'rose', icon: '🧠', head: 'Wanting is not demand',     body: 'Ability to pay matters – demand must be effective.' },
        { tone: 'rose', icon: '⬇️', head: 'Price fall ≠ demand increase', body: 'Usually it is an extension in quantity demanded, not a shift.' },
        { tone: 'rose', icon: '🚫', head: 'Shifts need a determinant',  body: 'Don’t say the curve moved without naming why.' }
      ],
      causesLabel: 'Common mistakes',
      causesEmoji: '⚠️',
      causesStyle: 'tinted-flat',
      keyTakeaway: {
        title: 'The big takeaway',
        text: 'If you can separate movements (own-price) from shifts (a named determinant), you can explain almost any demand question clearly – using exact language: quantity demanded, extension, contraction, increase in demand, decrease in demand.'
      },
      examEdge: 'Top answers use exact language and always state whether the curve moves or we move on the curve before explaining the outcome.',
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
