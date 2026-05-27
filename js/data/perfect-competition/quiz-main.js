(function () {

  window.ECONOS_QUIZ = {
    id:       'perfect_competition_main',
    topicId:  'perfect_competition_main',
    title:    'Perfect Competition',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.routes.learn('perfect-competition'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers the conditions, equilibrium, and efficiency of perfect competition',
    shortNames: [
      'PC conditions','Price taker','SR supernormal','LR normal profit','Elastic demand',
      'Categorise firms','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_pc_1',
        type: 'mcq',
        q:    'Which of the following is NOT a condition of perfect competition?',
        opts: ['Homogeneous products','Free entry and exit','Perfect information','Product differentiation'],
        ans:  3,
        exp:  'In perfect competition all products are identical (homogeneous). Product differentiation is a feature of monopolistic competition, not perfect competition.'
      },
      {
        id:   'q_pc_2',
        type: 'mcq',
        q:    'Why is the demand curve facing an individual perfectly competitive firm perfectly elastic?',
        opts: [
          'The firm is the only seller in the market',
          'Consumers cannot distinguish between firms\' products',
          'If the firm raises its price above the market price, it loses all its customers',
          'The government fixes the price'
        ],
        ans:  2,
        exp:  'With homogeneous products and perfect information, any price above the market price causes all buyers to switch to rivals. So the firm is a price taker with a horizontal (perfectly elastic) demand curve.'
      },
      {
        id:   'q_pc_3',
        type: 'mcq',
        q:    'In the short run, a perfectly competitive firm can earn:',
        opts: [
          'Only normal profit',
          'Only supernormal profit',
          'Normal, supernormal, or subnormal profit',
          'Only losses'
        ],
        ans:  2,
        exp:  'In the short run, entry and exit have not yet occurred, so firms can earn supernormal, normal, or subnormal (loss-making) profit depending on where price sits relative to AC.'
      },
      {
        id:   'q_pc_4',
        type: 'mcq',
        q:    'In long-run equilibrium in perfect competition, firms earn:',
        opts: ['Supernormal profit','Subnormal profit','Normal profit','Zero revenue'],
        ans:  2,
        exp:  'Supernormal profits attract new entrants; losses cause exit. Entry/exit continues until P = AC, leaving only normal profit in the long run.'
      },
      {
        id:   'q_pc_5',
        type: 'numeric_input',
        q:    'The market price is £12. A firm produces 300 units with TC = £3,200. Calculate profit.',
        answer: 400,
        tolerance: 0,
        unit: '£',
        hint: 'Profit = TR − TC = (P × Q) − TC.',
        workingSteps: ['TR = £12 × 300 = £3,600','Profit = £3,600 − £3,200 = £400']
      },
      {
        id:   'q_pc_6',
        type: 'categorise',
        q:    'Categorise each feature as belonging to perfect competition or monopolistic competition.',
        categories: ['Perfect competition','Monopolistic competition'],
        items: [
          { item: 'Homogeneous products',      category: 'Perfect competition' },
          { item: 'Product differentiation',   category: 'Monopolistic competition' },
          { item: 'Price taker',               category: 'Perfect competition' },
          { item: 'Downward-sloping demand',   category: 'Monopolistic competition' },
          { item: 'Long-run normal profit',    category: 'Perfect competition' },
          { item: 'Advertising and branding',  category: 'Monopolistic competition' }
        ]
      },
      {
        id:   'q_pc_7',
        type: 'cause_effect',
        q:    'Match each cause to its effect in a perfectly competitive market.',
        pairs: [
          { cause: 'Short-run supernormal profit exists',        effect: 'New firms enter the market' },
          { cause: 'New firms enter the market',                 effect: 'Market supply increases and price falls' },
          { cause: 'Price falls to minimum AC',                  effect: 'Supernormal profit is eliminated' },
          { cause: 'Firms make losses in short run',             effect: 'Some firms exit the market' },
          { cause: 'Firms exit, reducing supply',                effect: 'Price rises back toward AC' },
          { cause: 'Long-run equilibrium is reached',           effect: 'P = MC = AC, allocative and productive efficiency' }
        ]
      },
      {
        id:   'q_pc_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Price taker','Homogeneous products','Barriers to entry','Perfect information'],
        ans:  2,
        exp:  'Perfect competition requires free entry and exit – the absence of barriers. Barriers to entry are a feature of monopoly or oligopoly, not perfect competition.'
      },
      {
        id:   'q_pc_9',
        type: 'data_table',
        q:    'The table shows market conditions for a perfectly competitive firm. At which price is the firm in long-run equilibrium?',
        tableHeaders: ['Price (£)','Output','TR (£)','TC (£)','Profit (£)'],
        tableData: [
          ['10','100','1,000','1,200','-200'],
          ['12','120','1,440','1,320','120'],
          ['11','110','1,210','1,210','0'],
          ['13','130','1,690','1,430','260']
        ],
        opts: ['£10','£11','£12','£13'],
        ans:  1,
        exp:  'Long-run equilibrium requires normal profit only, i.e. Profit = 0. This occurs at P = £11 where TR = TC = £1,210.'
      },
      {
        id:   'q_pc_10',
        type: 'match_pairs',
        q:    'Match each term to its correct description.',
        pairs: [
          { a: 'Allocative efficiency',  b: 'P = MC; resources match consumer preferences' },
          { a: 'Productive efficiency',  b: 'Output at minimum average cost' },
          { a: 'Normal profit',          b: 'Revenue just covers all opportunity costs' },
          { a: 'Price taker',            b: 'Firm accepts market price it cannot influence' },
          { a: 'Homogeneous product',    b: 'Identical goods supplied by all firms' },
          { a: 'Long-run equilibrium',   b: 'P = MC = min AC; zero supernormal profit' }
        ]
      }
    ]
  };

})();
