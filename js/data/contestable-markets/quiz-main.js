(function () {

  window.ECONOS_QUIZ = {
    id:       'contestability_main',
    topicId:  'contestability_main',
    title:    'Contestable Markets',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.routes.learn('contestable-markets'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers sunk costs, hit-and-run entry, and incumbent behaviour',
    shortNames: [
      'Contestability defined','Sunk costs','Hit-and-run','Limit pricing','Perfect contestability',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_cont_1',
        type: 'mcq',
        q:    'A contestable market is one where:',
        opts: [
          'Many small firms compete on price',
          'Entry and exit are free or costless',
          'The government regulates prices',
          'Only one firm operates'
        ],
        ans:  1,
        exp:  'Contestability theory, developed by Baumol, argues that what matters is not the number of existing firms but the ease of entry and exit. A contestable market has low or zero sunk costs and free entry/exit.'
      },
      {
        id:   'q_cont_2',
        type: 'mcq',
        q:    'Sunk costs are important in contestability theory because:',
        opts: [
          'They help firms earn supernormal profit',
          'High sunk costs deter entry and reduce contestability',
          'They are always recoverable when a firm exits',
          'They are paid by the government on behalf of entrants'
        ],
        ans:  1,
        exp:  'Sunk costs are irretrievable costs that cannot be recovered upon exit (e.g., advertising, bespoke equipment). High sunk costs make entry risky – they are the key barrier that reduces market contestability.'
      },
      {
        id:   'q_cont_3',
        type: 'mcq',
        q:    '"Hit-and-run" entry means:',
        opts: [
          'A firm permanently takes over an existing firm',
          'A new entrant enters when profit exists, earns it, then exits at low cost',
          'A firm crashes prices to drive out rivals permanently',
          'Illegal market entry by unlicensed firms'
        ],
        ans:  1,
        exp:  'In a perfectly contestable market, a firm can enter to capture supernormal profit then exit costlessly once the incumbent reacts. This threat disciplines incumbent pricing even without actual entry.'
      },
      {
        id:   'q_cont_4',
        type: 'mcq',
        q:    'Limit pricing is a strategy where:',
        opts: [
          'The government sets a maximum price below the monopoly price',
          'An incumbent sets price low enough to deter profitable entry',
          'A new entrant undercuts the incumbent\'s price permanently',
          'Firms in a cartel set a price ceiling'
        ],
        ans:  1,
        exp:  'To deter entry, an incumbent may set price at or just above the potential entrant\'s average cost – making entry unprofitable. This sacrifice of short-run profit protects the incumbent\'s market position.'
      },
      {
        id:   'q_cont_5',
        type: 'numeric_input',
        q:    'An incumbent sets a limit price of £18. A potential entrant has AC = £20. What is the entrant\'s profit per unit if it enters at £18?',
        answer: -2,
        tolerance: 0,
        unit: '£',
        hint: 'Profit per unit = P − AC.',
        workingSteps: ['Profit per unit = £18 − £20 = −£2 (a loss)']
      },
      {
        id:   'q_cont_6',
        type: 'categorise',
        q:    'Categorise each factor as increasing or decreasing market contestability.',
        categories: ['Increases contestability','Decreases contestability'],
        items: [
          { item: 'Low sunk costs',                       category: 'Increases contestability' },
          { item: 'High advertising expenditure required',category: 'Decreases contestability' },
          { item: 'Freely available technology',          category: 'Increases contestability' },
          { item: 'Strong brand loyalty of incumbent',    category: 'Decreases contestability' },
          { item: 'Easy regulatory licencing',            category: 'Increases contestability' },
          { item: 'Specialist non-transferable equipment',category: 'Decreases contestability' }
        ]
      },
      {
        id:   'q_cont_7',
        type: 'cause_effect',
        q:    'Match each cause to its effect in contestable market theory.',
        pairs: [
          { cause: 'Sunk costs are zero',                        effect: 'Hit-and-run entry is possible' },
          { cause: 'Incumbent earns supernormal profit',         effect: 'Threat of entry disciplines pricing' },
          { cause: 'Market becomes more contestable',           effect: 'Incumbent is forced to price closer to AC' },
          { cause: 'Incumbent practises limit pricing',         effect: 'Potential entrant cannot profitably enter' },
          { cause: 'High regulatory barriers removed',          effect: 'Contestability of the market increases' },
          { cause: 'Perfect contestability achieved',           effect: 'Incumbent must price at normal profit level' }
        ]
      },
      {
        id:   'q_cont_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Sunk costs','Freedom of entry','Hit-and-run entry','Economies of scale'],
        ans:  3,
        exp:  'Sunk costs (low), freedom of entry, and hit-and-run entry are all core elements of contestability theory. Economies of scale are a barrier to entry that reduce contestability – they belong to monopoly theory.'
      },
      {
        id:   'q_cont_9',
        type: 'data_table',
        q:    'Use the table to identify which market is most contestable.',
        tableHeaders: ['Market','Sunk cost (£000s)','Regulatory barriers','Brand loyalty'],
        tableData: [
          ['Street food stall','2','Low','Low'],
          ['Airline route','500','High','High'],
          ['App development','10','Low','Medium'],
          ['Nuclear power station','2,000','Very High','Low']
        ],
        opts: ['Street food stall','Airline route','App development','Nuclear power station'],
        ans:  0,
        exp:  'Street food has the lowest sunk costs (£2k), low regulatory barriers, and low brand loyalty – all factors that maximise contestability and make hit-and-run entry feasible.'
      },
      {
        id:   'q_cont_10',
        type: 'match_pairs',
        q:    'Match each contestability term to its correct description.',
        pairs: [
          { a: 'Contestable market',     b: 'Market where entry and exit are free or costless' },
          { a: 'Sunk costs',             b: 'Irrecoverable costs that deter market entry' },
          { a: 'Hit-and-run entry',      b: 'Entering to capture profit then exiting costlessly' },
          { a: 'Limit pricing',          b: 'Setting price low to make profitable entry impossible' },
          { a: 'Incumbent firm',         b: 'Existing firm already operating in the market' },
          { a: 'Potential competition',  b: 'Threat of new entry that disciplines incumbent pricing' }
        ]
      }
    ]
  };

})();
