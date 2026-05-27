(function () {

  window.ECONOS_QUIZ = {
    id:       'price_controls_main',
    topicId:  'price_controls_main',
    title:    'Government Intervention in Markets',
    subtitle: 'Introduction to Markets and Market Failure',
    backUrl:  TopicLoader.routes.learn('price_controls'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers maximum and minimum prices, their effects, and unintended consequences',
    shortNames: [
      'Maximum price','Minimum price','Shortage','Surplus','Black markets',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_pc_ctrl_1',
        type: 'mcq',
        q:    'A maximum price (price ceiling) must be set BELOW the equilibrium price to:',
        opts: [
          'Create a surplus of supply over demand',
          'Have any effect – if set above equilibrium, it is non-binding',
          'Raise the market price above the free-market level',
          'Allow producers to earn supernormal profit'
        ],
        ans:  1,
        exp:  'A price ceiling only has effect if it is below the market equilibrium. Set above equilibrium, it has no effect – the market will price below the ceiling anyway. Only a binding (below-equilibrium) ceiling restricts price.'
      },
      {
        id:   'q_pc_ctrl_2',
        type: 'mcq',
        q:    'A maximum price typically causes:',
        opts: [
          'A surplus because too many producers want to sell at the low price',
          'A shortage because quantity demanded exceeds quantity supplied at the controlled price',
          'Higher prices than the free market would produce',
          'Lower consumer surplus'
        ],
        ans:  1,
        exp:  'Below the equilibrium price, Qd > Qs – a shortage develops. Consumers want to buy more at the low price than producers are willing to supply. Examples: rent controls, fuel price caps, wartime rationing.'
      },
      {
        id:   'q_pc_ctrl_3',
        type: 'mcq',
        q:    'A minimum price (price floor) must be set ABOVE the equilibrium price to be effective. It typically causes:',
        opts: [
          'A shortage of supply',
          'A surplus of supply over demand',
          'A fall in producer incomes',
          'A black market where goods are sold below the floor'
        ],
        ans:  1,
        exp:  'Above equilibrium, Qs > Qd – a surplus develops. Producers want to supply more at the higher price than consumers want to buy. Examples: agricultural minimum prices, the National Minimum Wage (if above equilibrium).'
      },
      {
        id:   'q_pc_ctrl_4',
        type: 'mcq',
        q:    'A black market is most likely to emerge following:',
        opts: [
          'A minimum price imposed below equilibrium',
          'A maximum price imposed below equilibrium, creating a shortage',
          'A free-market equilibrium with no government intervention',
          'A surplus caused by a minimum price'
        ],
        ans:  1,
        exp:  'When a maximum price creates a shortage, frustrated buyers and sellers have an incentive to trade illegally above the official price. Black (shadow) markets develop to clear the excess demand at a higher, unofficial price.'
      },
      {
        id:   'q_pc_ctrl_5',
        type: 'numeric_input',
        q:    'Equilibrium price = £10. A maximum price of £7 is set. At £7: Qd = 800 and Qs = 500. What is the size of the shortage (units)?',
        answer: 300,
        tolerance: 0,
        unit: 'units',
        hint: 'Shortage = Qd − Qs at the controlled price.',
        workingSteps: ['Shortage = 800 − 500 = 300 units']
      },
      {
        id:   'q_pc_ctrl_6',
        type: 'categorise',
        q:    'Categorise each as a maximum price or minimum price example.',
        categories: ['Maximum price','Minimum price'],
        items: [
          { item: 'Rent control in a city housing market',      category: 'Maximum price' },
          { item: 'EU minimum price for agricultural output',   category: 'Minimum price' },
          { item: 'Energy price cap on household bills',        category: 'Maximum price' },
          { item: 'National Minimum Wage',                      category: 'Minimum price' },
          { item: 'Maximum fare on public transport',           category: 'Maximum price' },
          { item: 'Minimum alcohol unit price',                 category: 'Minimum price' }
        ]
      },
      {
        id:   'q_pc_ctrl_7',
        type: 'cause_effect',
        q:    'Match each price control scenario to its effect.',
        pairs: [
          { cause: 'Maximum rent set below equilibrium',         effect: 'Housing shortage develops; quality may deteriorate' },
          { cause: 'Minimum price for wheat set above equilibrium', effect: 'Wheat surplus emerges; government may need to buy excess' },
          { cause: 'Price ceiling creates shortage',             effect: 'Black market may develop at higher unofficial price' },
          { cause: 'Minimum wage set above market wage',         effect: 'Excess supply of labour (unemployment) may occur in some sectors' },
          { cause: 'Energy price cap protects consumers',        effect: 'Supplier revenues fall; investment in capacity may fall' },
          { cause: 'Agricultural price floor set',              effect: 'Farmers\' incomes stabilised above what free market would give' }
        ]
      },
      {
        id:   'q_pc_ctrl_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Maximum price','Minimum price','Price floor','Automatic stabiliser'],
        ans:  3,
        exp:  'Maximum price, minimum price, and price floor are all forms of price controls. An automatic stabiliser is a macroeconomic fiscal concept (like unemployment benefits) – not a price control.'
      },
      {
        id:   'q_pc_ctrl_9',
        type: 'data_table',
        q:    'Use the supply and demand data to identify the equilibrium price and determine whether a £6 price control creates a shortage or surplus.',
        tableHeaders: ['Price (£)','Qd','Qs'],
        tableData: [
          ['4','100','20'],
          ['6','80','40'],
          ['8','60','60'],
          ['10','40','80']
        ],
        opts: [
          'Equilibrium at £8; £6 control creates a shortage of 40 units',
          'Equilibrium at £6; no effect – £6 is already the market price',
          'Equilibrium at £8; £6 control creates a surplus of 40 units',
          'Equilibrium at £10; £6 control creates a shortage of 40 units'
        ],
        ans:  0,
        exp:  'Equilibrium (Qd=Qs) is at £8 (both = 60). A price of £6 gives Qd=80, Qs=40 → shortage of 40 units. It is a binding maximum price.'
      },
      {
        id:   'q_pc_ctrl_10',
        type: 'match_pairs',
        q:    'Match each price control concept to its description.',
        pairs: [
          { a: 'Maximum price',      b: 'Legal upper limit on price; must be below equilibrium to be binding' },
          { a: 'Minimum price',      b: 'Legal lower limit on price; must be above equilibrium to be binding' },
          { a: 'Shortage',           b: 'Excess demand: Qd > Qs at the controlled price' },
          { a: 'Surplus',            b: 'Excess supply: Qs > Qd at the controlled price' },
          { a: 'Black market',       b: 'Illegal trading above/below the official price to clear the imbalance' },
          { a: 'Non-binding control',b: 'Price control set outside the equilibrium range; has no market effect' }
        ]
      }
    ]
  };

})();
