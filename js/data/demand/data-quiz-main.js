(function () {

  window.ECONOS_QUIZ = {
    id:       'demand_main',
    topicId:  'demand_main',
    title:    'Demand',
    subtitle: 'Theme 1 &middot; Topic 2.1 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'demand_main' }),
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
        id: 'q_demand_1',
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
        id: 'q_demand_2',
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
        id: 'q_demand_3',
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
        id: 'q_demand_4',
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
        id: 'q_demand_5',
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
        id: 'q_demand_6',
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
        id: 'q_demand_7',
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
        id: 'q_demand_8',
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
        id: 'q_demand_9',
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
        id: 'q_demand_10',
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
