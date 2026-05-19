window.ECONOS_TOPIC = {
  id: 'demand',
  topicNum: '2.1',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Demand',
  estTime: '7-9 minutes',
  goal: 'Lock in the law of demand, demand curve shifts, consumer surplus, and derived demand — the foundations of all market analysis.',
  intro: {
    heroKey: 'heroDemand',
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
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Demand: the big picture',
      tip: 'Why do queues form for Taylor Swift tickets but shops slash prices on old stock? Demand helps explain how consumers respond to price — and why firms obsess over it.',
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
      examEdge: 'Always state the ceteris paribus assumption when explaining the law of demand — other things stay the same. Giffen goods are the rare exception: a price rise increases quantity demanded because the income effect overwhelms the substitution effect. Mention this only for evaluation marks.'
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
      causes: [
        { icon: '🏷️', head: 'Price change',          body: 'A change in the good\'s own price causes a movement along the existing demand curve — not a shift.',                                 tone: 'green'  },
        { icon: '💰', head: 'Income',                 body: 'Higher income raises demand for normal goods (rightward shift). Lower income reduces it. Inferior goods move in the opposite direction.', tone: 'purple' },
        { icon: '🎨', head: 'Tastes & advertising',  body: 'A shift in consumer preferences, a viral trend or an effective campaign shifts the entire demand curve left or right.',               tone: 'blue'   },
        { icon: '🔄', head: 'Prices of related goods',body: 'A substitute\'s price rise shifts demand right. A complement\'s price rise shifts demand left.',                                      tone: 'amber'  }
      ],
      examEdge: 'Never say "demand rises because price falls" — that confuses demand (the whole schedule) with quantity demanded (a point on the schedule). Price falls cause quantity demanded to rise (movement along). Demand rising means the curve shifts right. Examiners specifically test this distinction.'
    },
    {
      id: 'demand_3',
      template: 'cause',
      title: 'Non-Price Determinants of Demand',
      tip: { icon: '💡', tone: 'blue', text: 'Demand shifts when anything other than the good\'s own price changes — income, tastes, related goods prices, population or expectations.' },
      shiftDiagrams: 'demand',
      causesStyle: 'tinted-flat',
      causesEmoji: '📋',
      causesLabel: 'What shifts the demand curve',
      causes: [
        { icon: '💰', head: 'Income',                   body: 'For normal goods: higher income → demand shifts right. For inferior goods (value-brand food, bus travel): higher income → demand shifts left. The key driver of YED analysis.',                  tone: 'green'  },
        { icon: '↔️', head: 'Substitutes',              body: 'A rise in the price of a substitute shifts demand for this good right — consumers switch across. A fall in the substitute\'s price shifts demand left.',                                         tone: 'blue'   },
        { icon: '🔗', head: 'Complements',              body: 'A rise in the price of a complement shifts demand for this good left — the two are bought together, so demand for both falls. A fall in the complement\'s price shifts demand right.',            tone: 'amber'  },
        { icon: '🎨', head: 'Tastes & preferences',    body: 'Advertising, health recommendations, celebrity endorsements and social trends all shift demand. Changes can be rapid (viral trends) or gradual (long-run health awareness).',                    tone: 'purple' },
        { icon: '👥', head: 'Population & demographics',body: 'Population growth increases total market demand. A changing age structure shifts demand between sectors — an ageing population increases healthcare demand; a younger one increases education.', tone: 'rose'   },
        { icon: '🔮', head: 'Expectations',             body: 'If consumers expect future price rises, they bring purchases forward → demand rises now. In asset markets, expected price rises increase demand today — a key driver of speculative bubbles.',  tone: 'slate'  }
      ],
      howToThink: {
        left:  { icon: '➡️', tone: 'green', head: 'Shifts demand right', body: 'Higher income (normal goods) · Substitute\'s price rises · Complement\'s price falls · Positive taste shift · Population growth · Expected price rise' },
        right: { icon: '⬅️', tone: 'rose',  head: 'Shifts demand left',  body: 'Lower income · Substitute\'s price falls · Complement\'s price rises · Negative taste shift · Population falls · Expected price fall' }
      },
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
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Demand in Real Markets',
      tip: { icon: '💡', tone: 'blue', text: 'In real markets, demand is shaped by many things at once — price, incomes, tastes, expectations, and market conditions. Understanding the full picture helps explain why demand changes.' },
      examples: [
        { tone: 'green', icon: '🎫', title: 'Taylor Swift tickets',   body: 'High willingness to pay, limited supply and loyal fans <strong>mean demand is very strong and not very price sensitive.</strong>' },
        { tone: 'green', icon: '⛽', title: 'Petrol',                  body: 'Relatively inelastic in the short run. People need it to get to work, school and essentials.' },
        { tone: 'green', icon: '🛒', title: 'Budget supermarkets',     body: 'Demand rises when incomes fall as people trade down to cheaper options. A rise in incomes can shift demand back.' },
        { tone: 'green', icon: '📺', title: 'Streaming subscriptions', body: 'Many close substitutes mean consumers can switch easily, making demand more elastic.' }
      ],
      causesStyle: 'plain-white',
      causesEmoji: '🔍',
      causesLabel: 'What economists look for',
      causes: [
        { tone: 'blue',   icon: '🏷️', head: 'Price sensitivity',     body: 'How much demand changes when price changes.' },
        { tone: 'amber',  icon: '🔄', head: 'Substitutes',            body: 'More substitutes usually mean more elastic demand.' },
        { tone: 'green',  icon: '📈', head: 'Market data',            body: 'Sales, prices and volumes reveal real behaviour.' },
        { tone: 'purple', icon: '🗓️', head: 'Seasonality',            body: 'Demand often follows predictable patterns.' },
        { tone: 'rose',   icon: '🔮', head: 'Consumer expectations',  body: 'Future beliefs influence today\'s demand.' }
      ],
      causes2Style: 'plain-white',
      causes2Emoji: '⚡',
      causes2Label: 'Demand can shift in real time',
      causes2: [
        { tone: 'green', icon: '☀️', head: 'Summer heatwave',    body: '<strong style="color:#059669;">Demand shifts right →</strong> for ice cream, fans and sun cream as warm weather drives a spike in willingness to buy.' },
        { tone: 'rose',  icon: '🌧️', head: 'Trend ends or fades', body: '<strong style="color:#DC2626;">← Demand shifts left</strong> as consumers lose interest, switch to the next craze, or the season ends.' }
      ],
      examEdge: 'Use context: name the market, identify the likely determinant, and explain why demand is likely to be more or less responsive.'
    },
    {
      id: 'demand_7',
      title: 'The Demand Curve and Market Analysis',
      tip: 'Diagram checklist: label both axes (P, Q), label the curve (D), mark key points (P*, Q*), show any shift as D₂ clearly. Methodical technique earns marks even when written analysis is incomplete.',
      diagramKey: 'demandScheduleCurve',
      flow: [
        { icon: '📖', title: 'Read the curve',  sub: 'The curve slopes downward. There is an inverse relationship between price and quantity demanded.',            tone: 'green'  },
        { icon: '🔧', title: 'Use the curve',   sub: 'Estimate the effects of price changes, calculate revenue and measure consumer surplus.',                      tone: 'amber'  },
        { icon: '⚠️', title: 'Limitations',     sub: 'In real life, many other factors change simultaneously. The ceteris paribus assumption rarely holds perfectly.', tone: 'blue'   }
      ],
      flowTitle: 'How to use this diagram',
      flowEmoji: '📈',
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
