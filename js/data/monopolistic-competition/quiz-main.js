(function () {

  window.ECONOS_QUIZ = {
    title:    'Monopolistic Competition',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.routes.learn('monopolistic-competition'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers product differentiation, SR/LR equilibrium, and excess capacity',
    shortNames: [
      'Key features','Downward demand','SR profit','LR normal profit','Excess capacity',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'Which of the following best describes monopolistic competition?',
        opts: [
          'A few large firms dominating the market',
          'Many firms selling differentiated products with free entry and exit',
          'A single firm protected by high barriers to entry',
          'Many firms selling identical products at the market price'
        ],
        ans:  1,
        exp:  'Monopolistic competition involves many firms, product differentiation, and free entry/exit. Each firm has some price-setting power due to its unique product, but competition limits long-run profit.'
      },
      {
        type: 'mcq',
        q:    'Why does a monopolistically competitive firm face a downward-sloping demand curve?',
        opts: [
          'It is the only seller of its product',
          'Its product is differentiated from competitors, giving it some pricing power',
          'The government sets a minimum price',
          'It sells a homogeneous product in a large market'
        ],
        ans:  1,
        exp:  'Product differentiation gives each firm a degree of brand loyalty. Consumers have preferences, so the firm can raise price without losing all customers – hence a downward-sloping (not horizontal) demand curve.'
      },
      {
        type: 'mcq',
        q:    'In the short run, a monopolistically competitive firm can earn supernormal profit. What happens in the long run?',
        opts: [
          'Supernormal profit persists because products are differentiated',
          'New firms enter, demand for each firm falls, and profit returns to normal',
          'The government taxes away the excess profit',
          'The firm becomes a natural monopoly'
        ],
        ans:  1,
        exp:  'Free entry means new firms enter attracted by supernormal profit. Each existing firm loses customers; demand shifts left until P = AC and only normal profit remains.'
      },
      {
        type: 'mcq',
        q:    'Excess capacity in monopolistic competition means:',
        opts: [
          'Firms produce more than the productively efficient output',
          'Firms produce less than the minimum average cost output',
          'Firms have surplus workers',
          'Firms produce where P = MC'
        ],
        ans:  1,
        exp:  'In long-run equilibrium, P = AC but this occurs on the downward-sloping part of the AC curve, above the minimum. Output is below the productively efficient level – hence excess capacity.'
      },
      {
        type: 'numeric_input',
        q:    'A firm sells 80 units at £15. TC = £1,050. Calculate profit.',
        answer: 150,
        tolerance: 0,
        unit: '£',
        hint: 'Profit = TR − TC = (P × Q) − TC.',
        workingSteps: ['TR = £15 × 80 = £1,200','Profit = £1,200 − £1,050 = £150']
      },
      {
        type: 'categorise',
        q:    'Categorise each statement as applying to monopolistic competition or perfect competition.',
        categories: ['Monopolistic competition','Perfect competition'],
        items: [
          { item: 'Downward-sloping demand curve',        category: 'Monopolistic competition' },
          { item: 'Horizontal (perfectly elastic) demand',category: 'Perfect competition' },
          { item: 'Non-price competition via advertising', category: 'Monopolistic competition' },
          { item: 'Homogeneous products',                  category: 'Perfect competition' },
          { item: 'Excess capacity in long run',           category: 'Monopolistic competition' },
          { item: 'Productive efficiency in long run',     category: 'Perfect competition' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each cause to its effect in monopolistic competition.',
        pairs: [
          { cause: 'Supernormal profit in short run',       effect: 'New firms enter attracted by profit' },
          { cause: 'New firms enter with similar products', effect: 'Each firm\'s demand curve shifts left' },
          { cause: 'Demand falls until P = AC',             effect: 'Only normal profit remains in long run' },
          { cause: 'Product differentiation',               effect: 'Firm has some price-setting power' },
          { cause: 'Long-run equilibrium reached',          effect: 'Excess capacity exists' },
          { cause: 'Advertising increases brand loyalty',   effect: 'Demand becomes less elastic' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out in the context of monopolistic competition?',
        opts: ['Product differentiation','Advertising','Homogeneous products','Free entry and exit'],
        ans:  2,
        exp:  'Monopolistic competition is characterised by product differentiation, advertising, and free entry/exit. Homogeneous products are a feature of perfect competition, not monopolistic competition.'
      },
      {
        type: 'data_table',
        q:    'A firm in monopolistic competition has the following data. Identify the long-run equilibrium output.',
        tableHeaders: ['Output','Price (£)','AC (£)','Profit (£)'],
        tableData: [
          ['40','18','15','120'],
          ['50','16','16','0'],
          ['60','14','17','-180'],
          ['70','12','19','-490']
        ],
        opts: ['Output = 40','Output = 50','Output = 60','Output = 70'],
        ans:  1,
        exp:  'Long-run equilibrium in monopolistic competition requires P = AC (normal profit = 0). This occurs at output = 50 where P = AC = £16 and profit = £0.'
      },
      {
        type: 'match_pairs',
        q:    'Match each term to its correct description.',
        pairs: [
          { a: 'Product differentiation',  b: 'Making a product distinct through quality, branding, or features' },
          { a: 'Excess capacity',          b: 'Output below the minimum average cost level' },
          { a: 'Non-price competition',    b: 'Competing through advertising, quality, not price' },
          { a: 'Long-run equilibrium',     b: 'P = AC; normal profit only; no incentive to enter or exit' },
          { a: 'Short-run supernormal',    b: 'TR exceeds TC including normal profit' },
          { a: 'Allocative inefficiency',  b: 'Price exceeds marginal cost; welfare loss occurs' }
        ]
      }
    ]
  };

})();
