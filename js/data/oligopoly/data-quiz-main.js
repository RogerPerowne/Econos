(function () {

  window.ECONOS_QUIZ = {
    id:       'oligopoly_main',
    topicId:  'oligopoly_main',
    title:    'Oligopoly',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'oligopoly' }),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers oligopoly characteristics, interdependence, and kinked demand',
    shortNames: [
      'Oligopoly definition','Interdependence','Kinked demand','Price rigidity','Non-price competition',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_olig_1',
        type: 'mcq',
        q:    'Which of the following best describes an oligopoly?',
        opts: [
          'Many small firms with identical products',
          'One firm dominating the market',
          'A few large firms that are mutually interdependent',
          'Two firms competing with homogeneous products'
        ],
        ans:  2,
        exp:  'Oligopoly is a market structure dominated by a small number of large firms. A key feature is strategic interdependence – each firm must consider rivals\' reactions to its decisions.'
      },
      {
        id:   'q_olig_2',
        type: 'mcq',
        q:    'Strategic interdependence in oligopoly means:',
        opts: [
          'Firms set price equal to marginal cost',
          'Each firm\'s decisions are influenced by how rivals might react',
          'Government controls all pricing decisions',
          'Firms produce identical products with no branding'
        ],
        ans:  1,
        exp:  'Because there are few dominant firms, any price or output change by one firm directly affects rivals. Each firm therefore considers likely reactions before making decisions.'
      },
      {
        id:   'q_olig_3',
        type: 'mcq',
        q:    'The kinked demand curve model predicts price rigidity because:',
        opts: [
          'Rivals match price cuts but ignore price rises',
          'Rivals ignore price cuts but match price rises',
          'Rivals always undercut any price change',
          'Government intervention prevents price changes'
        ],
        ans:  0,
        exp:  'If a firm raises price, rivals keep theirs low (the firm loses many customers – elastic section). If a firm cuts price, rivals follow (the firm gains few customers – inelastic section). The kink creates a gap in MR, keeping price stable.'
      },
      {
        id:   'q_olig_4',
        type: 'mcq',
        q:    'Which of the following is an example of non-price competition in oligopoly?',
        opts: [
          'Cutting price below rivals',
          'Advertising and branding campaigns',
          'Reducing output to raise market price',
          'Setting price equal to marginal cost'
        ],
        ans:  1,
        exp:  'Oligopolists tend to avoid price competition (risk of price wars) and instead compete via advertising, product quality, loyalty schemes, and brand image – collectively called non-price competition.'
      },
      {
        id:   'q_olig_5',
        type: 'numeric_input',
        q:    'Four firms in a market have outputs of 200, 150, 120, and 80 units. Total market output is 800 units. What is the four-firm concentration ratio (%)?',
        answer: 68.75,
        tolerance: 0.5,
        unit: '%',
        hint: 'CR4 = combined output of 4 largest firms ÷ total market output × 100.',
        workingSteps: ['Top 4 output = 200+150+120+80 = 550','CR4 = 550/800 × 100 = 68.75%']
      },
      {
        id:   'q_olig_6',
        type: 'categorise',
        q:    'Categorise each feature as characteristic of oligopoly or perfect competition.',
        categories: ['Oligopoly','Perfect competition'],
        items: [
          { item: 'Strategic interdependence',          category: 'Oligopoly' },
          { item: 'Many identical small firms',         category: 'Perfect competition' },
          { item: 'High barriers to entry',             category: 'Oligopoly' },
          { item: 'Free entry and exit',                category: 'Perfect competition' },
          { item: 'Price rigidity',                     category: 'Oligopoly' },
          { item: 'Horizontal demand curve for firm',   category: 'Perfect competition' }
        ]
      },
      {
        id:   'q_olig_7',
        type: 'cause_effect',
        q:    'Match each cause to its effect in an oligopoly market.',
        pairs: [
          { cause: 'One firm cuts price',                    effect: 'Rivals match the cut, triggering a price war' },
          { cause: 'Kinked demand above current price',      effect: 'Demand is elastic; firm loses many customers if it raises price' },
          { cause: 'Non-price competition intensifies',      effect: 'Advertising spending rises across the industry' },
          { cause: 'Firms collude tacitly on price',         effect: 'Industry behaves like a monopoly; higher prices for consumers' },
          { cause: 'High barriers to entry maintained',      effect: 'Supernormal profit persists in long run' },
          { cause: 'MR has a gap at the kink',               effect: 'MC can shift without changing profit-maximising output' }
        ]
      },
      {
        id:   'q_olig_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Kinked demand curve','Concentration ratio','Perfect information','Strategic interdependence'],
        ans:  2,
        exp:  'Kinked demand, concentration ratios, and strategic interdependence are all concepts central to oligopoly analysis. Perfect information is a defining feature of perfect competition.'
      },
      {
        id:   'q_olig_9',
        type: 'data_table',
        q:    'Use the concentration ratio table to identify which market is most oligopolistic.',
        tableHeaders: ['Market','CR4 (%)'],
        tableData: [
          ['Supermarkets','72'],
          ['Hair salons','12'],
          ['Petrol retailing','68'],
          ['Online search engines','95']
        ],
        opts: ['Supermarkets','Hair salons','Petrol retailing','Online search engines'],
        ans:  3,
        exp:  'Online search engines have a CR4 of 95%, meaning the top 4 firms control 95% of output – the highest degree of market concentration shown.'
      },
      {
        id:   'q_olig_10',
        type: 'match_pairs',
        q:    'Match each oligopoly concept to its correct description.',
        pairs: [
          { a: 'Concentration ratio',     b: 'Share of market output held by largest firms' },
          { a: 'Kinked demand curve',     b: 'Model explaining price rigidity due to asymmetric rival responses' },
          { a: 'Price leadership',        b: 'Dominant firm sets price that rivals follow tacitly' },
          { a: 'Collusion',               b: 'Firms cooperate to fix price or output' },
          { a: 'Non-price competition',   b: 'Competing through branding, quality, or loyalty schemes' },
          { a: 'Interdependence',         b: 'Each firm\'s profit depends on rivals\' actions' }
        ]
      }
    ]
  };

})();
