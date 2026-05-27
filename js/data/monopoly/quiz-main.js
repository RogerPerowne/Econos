(function () {

  window.ECONOS_QUIZ = {
    id:       'monopoly_main',
    topicId:  'monopoly_main',
    title:    'Monopoly',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.routes.learn('monopoly'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers monopoly power, pricing, profit, and welfare effects',
    shortNames: [
      'Monopoly definition','Price maker','Profit max','Welfare loss','Natural monopoly',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_mon_1',
        type: 'mcq',
        q:    'A pure monopoly is defined as a market where:',
        opts: [
          'The top four firms control 80% of output',
          'One firm supplies the entire market',
          'Two firms dominate pricing',
          'There are no barriers to entry'
        ],
        ans:  1,
        exp:  'A pure monopoly exists when a single firm is the sole supplier of a good with no close substitutes, typically protected by high barriers to entry.'
      },
      {
        id:   'q_mon_2',
        type: 'mcq',
        q:    'Unlike a perfectly competitive firm, a monopolist faces a:',
        opts: [
          'Perfectly elastic demand curve',
          'Downward-sloping demand curve',
          'Perfectly inelastic demand curve',
          'Horizontal marginal revenue curve'
        ],
        ans:  1,
        exp:  'A monopolist is the only seller, so it faces the whole market demand curve, which slopes downward. To sell more, it must lower price for all units.'
      },
      {
        id:   'q_mon_3',
        type: 'mcq',
        q:    'For a monopolist with a downward-sloping demand curve, Marginal Revenue is:',
        opts: [
          'Equal to price',
          'Greater than price',
          'Less than price',
          'Equal to zero at all outputs'
        ],
        ans:  2,
        exp:  'Because the monopolist must reduce price on all units to sell one more, MR falls more steeply than AR (price). Therefore MR < P (AR) at every positive output.'
      },
      {
        id:   'q_mon_4',
        type: 'numeric_input',
        q:    'A monopolist sells 50 units at £20 each. TC = £800. Calculate supernormal profit.',
        answer: 200,
        tolerance: 0,
        unit: '£',
        hint: 'Supernormal profit = TR − TC.',
        workingSteps: ['TR = £20 × 50 = £1,000','Profit = £1,000 − £800 = £200']
      },
      {
        id:   'q_mon_5',
        type: 'mcq',
        q:    'A natural monopoly occurs when:',
        opts: [
          'The government grants one firm an exclusive licence',
          'Long-run average costs fall across the entire market demand range',
          'One firm patents a product',
          'Barriers to entry are created by brand loyalty'
        ],
        ans:  1,
        exp:  'A natural monopoly arises when the scale economies are so large that one firm can supply the whole market at lower average cost than two or more firms could – the market can only support one efficient supplier.'
      },
      {
        id:   'q_mon_6',
        type: 'categorise',
        q:    'Categorise each as either a barrier to entry or an efficiency argument for monopoly.',
        categories: ['Barrier to entry','Efficiency argument'],
        items: [
          { item: 'Patent protection',              category: 'Barrier to entry' },
          { item: 'Economies of scale',             category: 'Efficiency argument' },
          { item: 'High sunk costs',                category: 'Barrier to entry' },
          { item: 'R&D investment funded by profit',category: 'Efficiency argument' },
          { item: 'Predatory pricing',              category: 'Barrier to entry' },
          { item: 'Natural monopoly cost savings',  category: 'Efficiency argument' }
        ]
      },
      {
        id:   'q_mon_7',
        type: 'cause_effect',
        q:    'Match each cause to its effect in a monopoly market.',
        pairs: [
          { cause: 'Monopolist sets P > MC',              effect: 'Allocative inefficiency / deadweight loss' },
          { cause: 'High barriers to entry persist',      effect: 'Supernormal profit maintained long run' },
          { cause: 'Monopolist faces no competition',     effect: 'Less incentive for productive efficiency' },
          { cause: 'Supernormal profit reinvested',       effect: 'Dynamic efficiency through R&D' },
          { cause: 'Government regulates price at P=MC',  effect: 'Deadweight loss eliminated' },
          { cause: 'Monopolist price discriminates',      effect: 'Consumer surplus transferred to producer' }
        ]
      },
      {
        id:   'q_mon_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Patent','Brand loyalty','Perfect information','High sunk costs'],
        ans:  2,
        exp:  'Patents, brand loyalty, and high sunk costs are all barriers to entry that protect monopoly power. Perfect information is a condition of perfect competition – its presence undermines monopoly power.'
      },
      {
        id:   'q_mon_9',
        type: 'data_table',
        q:    'Use the table to identify at which output the monopolist maximises profit (MR = MC).',
        tableHeaders: ['Output','Price (£)','TR (£)','MR (£)','TC (£)','MC (£)'],
        tableData: [
          ['1','50','50','–','30','–'],
          ['2','45','90','40','52','22'],
          ['3','40','120','30','69','17'],
          ['4','35','140','20','92','23'],
          ['5','30','150','10','120','28']
        ],
        opts: ['Output = 2','Output = 3','Output = 4','Output = 5'],
        ans:  1,
        exp:  'At output 3, MR = 30 and MC = 17, so MR > MC. At output 4, MR = 20 and MC = 23, so MC > MR. Profit is maximised between 3 and 4; conventionally the firm produces 3 units (last unit where MR ≥ MC).'
      },
      {
        id:   'q_mon_10',
        type: 'match_pairs',
        q:    'Match each term to its correct definition.',
        pairs: [
          { a: 'Deadweight loss',       b: 'Loss of welfare because output is below the competitive level' },
          { a: 'Price maker',           b: 'Firm that can set its own price along the demand curve' },
          { a: 'X-inefficiency',        b: 'Internal cost inefficiency from lack of competitive pressure' },
          { a: 'Supernormal profit',    b: 'Revenue above all costs including normal profit' },
          { a: 'Natural monopoly',      b: 'Single firm can supply at lower AC than multiple firms' },
          { a: 'Regulatory capture',    b: 'Regulator acts in interest of firm rather than consumers' }
        ]
      }
    ]
  };

})();
