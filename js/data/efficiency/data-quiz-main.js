(function () {

  window.ECONOS_QUIZ = {
    id:       'efficiency_main',
    topicId:  'efficiency_main',
    title:    'Efficiency',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.routes.learn('efficiency'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers allocative, productive, dynamic, and X-inefficiency',
    shortNames: [
      'Allocative eff.','Productive eff.','Dynamic eff.','X-inefficiency','Pareto efficiency',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_eff_1',
        type: 'mcq',
        q:    'Allocative efficiency is achieved when:',
        opts: [
          'Firms produce at minimum average cost',
          'Price equals marginal cost (P = MC)',
          'All resources are fully employed',
          'A firm earns only normal profit'
        ],
        ans:  1,
        exp:  'Allocative efficiency means resources are allocated to their highest-value use. This occurs when P = MC: price reflects both what consumers value the last unit at and what it costs society to produce it.'
      },
      {
        id:   'q_eff_2',
        type: 'mcq',
        q:    'Productive efficiency requires that firms produce:',
        opts: [
          'Where price equals marginal cost',
          'At the output that maximises total revenue',
          'At the lowest point on the average cost curve',
          'Where marginal revenue equals marginal cost'
        ],
        ans:  2,
        exp:  'Productive efficiency is achieved when output is produced at minimum average cost – the firm is on the lowest point of its long-run average cost curve, using resources without waste.'
      },
      {
        id:   'q_eff_3',
        type: 'mcq',
        q:    'Dynamic efficiency refers to:',
        opts: [
          'Producing the current level of output at minimum cost',
          'Prices equalling marginal cost in all markets simultaneously',
          'Innovation, R&D, and new product development over time',
          'Eliminating X-inefficiency within a firm'
        ],
        ans:  2,
        exp:  'Dynamic efficiency occurs when firms invest in research and development, producing new products and better production methods over time. It is a benefit sometimes associated with monopoly (funded by supernormal profit).'
      },
      {
        id:   'q_eff_4',
        type: 'mcq',
        q:    'X-inefficiency is most likely to occur when:',
        opts: [
          'Firms face intense competition and must minimise costs',
          'A firm faces little competitive pressure and allows costs to rise above minimum',
          'Firms invest heavily in automation to reduce unit costs',
          'Price equals marginal cost across the industry'
        ],
        ans:  1,
        exp:  'X-inefficiency (Leibenstein) refers to unnecessary internal cost inflation caused by managerial slack, lack of discipline, or absence of competitive pressure. Monopolies are especially prone to it.'
      },
      {
        id:   'q_eff_5',
        type: 'numeric_input',
        q:    'A firm produces 500 units at AC = £8. Its technically minimum AC is £6. Calculate the total X-inefficiency cost.',
        answer: 1000,
        tolerance: 0,
        unit: '£',
        hint: 'X-ineff cost = (AC − min AC) × Q.',
        workingSteps: ['Excess cost per unit = £8 − £6 = £2','Total X-inefficiency = £2 × 500 = £1,000']
      },
      {
        id:   'q_eff_6',
        type: 'categorise',
        q:    'Categorise each condition as evidence of allocative efficiency or productive efficiency.',
        categories: ['Allocative efficiency','Productive efficiency'],
        items: [
          { item: 'P = MC',                              category: 'Allocative efficiency' },
          { item: 'Output at minimum AC',                category: 'Productive efficiency' },
          { item: 'No deadweight welfare loss',          category: 'Allocative efficiency' },
          { item: 'No productive waste in production',   category: 'Productive efficiency' },
          { item: 'Resources match consumer preferences',category: 'Allocative efficiency' },
          { item: 'Minimum efficient scale achieved',    category: 'Productive efficiency' }
        ]
      },
      {
        id:   'q_eff_7',
        type: 'cause_effect',
        q:    'Match each cause to its effect on economic efficiency.',
        pairs: [
          { cause: 'Monopolist sets P > MC',              effect: 'Allocative inefficiency arises' },
          { cause: 'Intense competition forces cost cuts',effect: 'X-inefficiency is eliminated' },
          { cause: 'Supernormal profit funds R&D',        effect: 'Dynamic efficiency increases over time' },
          { cause: 'Firm produces at min AC',             effect: 'Productive efficiency achieved' },
          { cause: 'Resources flow to highest-value use', effect: 'Allocative efficiency is achieved' },
          { cause: 'Lack of competitive pressure',        effect: 'X-inefficiency and cost inflation develop' }
        ]
      },
      {
        id:   'q_eff_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Allocative efficiency','Productive efficiency','X-inefficiency','Dynamic efficiency'],
        ans:  2,
        exp:  'Allocative, productive, and dynamic efficiency are all desirable economic states. X-inefficiency is an undesirable outcome – unnecessary cost inflation from lack of competitive pressure.'
      },
      {
        id:   'q_eff_9',
        type: 'data_table',
        q:    'Use the table to identify which firm is productively efficient.',
        tableHeaders: ['Firm','Output (Q)','TC (£)','AC (£)','Min AC (£)'],
        tableData: [
          ['Alpha','100','600','6.00','5.50'],
          ['Beta','200','1,000','5.00','5.00'],
          ['Gamma','150','900','6.00','5.00'],
          ['Delta','80','560','7.00','5.50']
        ],
        opts: ['Alpha','Beta','Gamma','Delta'],
        ans:  1,
        exp:  'Productive efficiency requires AC = minimum AC. Only Beta achieves this: AC = £5.00 = min AC. The other firms all operate above their minimum average cost.'
      },
      {
        id:   'q_eff_10',
        type: 'match_pairs',
        q:    'Match each efficiency concept to its correct description.',
        pairs: [
          { a: 'Allocative efficiency',  b: 'P = MC; resources flow to highest-value uses' },
          { a: 'Productive efficiency',  b: 'Production at minimum average cost' },
          { a: 'Dynamic efficiency',     b: 'Innovation and improvement in products over time' },
          { a: 'X-inefficiency',         b: 'Avoidable costs rising above minimum due to competitive slack' },
          { a: 'Pareto efficiency',      b: 'Cannot make one person better off without making another worse off' },
          { a: 'Deadweight loss',        b: 'Welfare lost when output is below the allocatively efficient level' }
        ]
      }
    ]
  };

})();
