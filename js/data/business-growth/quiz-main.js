(function () {

  window.ECONOS_QUIZ = {
    title:    'Business Growth',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.routes.learn('business-growth'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers internal growth, mergers, integration types, and demergers',
    shortNames: [
      'Organic growth','Horizontal integration','Vertical integration','Conglomerate','Demerger',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'Organic (internal) growth refers to:',
        opts: [
          'A firm merging with a rival',
          'A firm acquiring a supplier',
          'A firm expanding through increased sales and reinvested profit',
          'A conglomerate buying an unrelated business'
        ],
        ans:  2,
        exp:  'Organic growth occurs when a firm expands its own operations – opening new outlets, investing in capacity, or growing sales – without merging with or acquiring another firm.'
      },
      {
        type: 'mcq',
        q:    'Horizontal integration occurs when:',
        opts: [
          'A firm merges with a company at a different stage of production',
          'A firm merges with a competitor at the same stage of production',
          'A firm diversifies into an unrelated industry',
          'A firm splits into two separate businesses'
        ],
        ans:  1,
        exp:  'Horizontal integration is the merger or acquisition of firms at the same stage of production in the same industry – e.g., two supermarket chains merging. It can increase market power and economies of scale.'
      },
      {
        type: 'mcq',
        q:    'A car manufacturer acquiring a steel supplier is an example of:',
        opts: [
          'Horizontal integration',
          'Conglomerate merger',
          'Backward vertical integration',
          'Forward vertical integration'
        ],
        ans:  2,
        exp:  'Backward vertical integration means a firm acquires a supplier (earlier stage in the supply chain). The car maker acquires the steel supplier – moving backward toward raw materials.'
      },
      {
        type: 'mcq',
        q:    'A demerger occurs when:',
        opts: [
          'Two firms merge to create a larger business',
          'A large firm splits into two or more separate businesses',
          'A firm acquires a business in an unrelated sector',
          'A government nationalises a private company'
        ],
        ans:  1,
        exp:  'Demergers involve breaking up a large firm into smaller, more focused independent companies. They may be prompted by diseconomies of scale, poor synergies, or pressure from shareholders to "unlock value".'
      },
      {
        type: 'numeric_input',
        q:    'Firm A has revenue of £800m. It acquires Firm B (revenue £300m). After the merger, combined revenue is £1,050m due to some customer overlap. What is the revenue synergy gained (£m)?',
        answer: -50,
        tolerance: 5,
        unit: '£m',
        hint: 'Synergy = combined actual revenue − sum of parts revenue.',
        workingSteps: ['Sum of parts = £800m + £300m = £1,100m','Actual combined = £1,050m','Synergy = £1,050m − £1,100m = −£50m (dissynergy from overlap)']
      },
      {
        type: 'categorise',
        q:    'Categorise each merger or growth type correctly.',
        categories: ['Horizontal','Vertical','Conglomerate'],
        items: [
          { item: 'Tesco acquires Sainsbury\'s',              category: 'Horizontal' },
          { item: 'Brewer acquires pub chain (forward)',      category: 'Vertical' },
          { item: 'Tech giant buys a film studio',           category: 'Conglomerate' },
          { item: 'Oil refiner acquires oil field',          category: 'Vertical' },
          { item: 'Two airlines merge',                      category: 'Horizontal' },
          { item: 'Bank buys an insurance company',          category: 'Conglomerate' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each growth strategy to its primary effect.',
        pairs: [
          { cause: 'Horizontal merger',               effect: 'Increased market share and possible economies of scale' },
          { cause: 'Backward vertical integration',   effect: 'Greater control over input supply and costs' },
          { cause: 'Forward vertical integration',    effect: 'Control over distribution channels and retail pricing' },
          { cause: 'Conglomerate merger',             effect: 'Diversification of risk across different markets' },
          { cause: 'Demerger',                        effect: 'Firms become more focused; diseconomies of scale reduced' },
          { cause: 'Organic growth',                  effect: 'Expansion without merger risk; slower but less disruptive' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Horizontal integration','Vertical integration','Conglomerate merger','Demerger'],
        ans:  3,
        exp:  'Horizontal, vertical, and conglomerate are all forms of external (inorganic) growth involving mergers or acquisitions. A demerger is the opposite – it involves breaking a firm apart.'
      },
      {
        type: 'data_table',
        q:    'Use the table to identify which firm grew most through organic means.',
        tableHeaders: ['Firm','Revenue growth (£m)','Revenue from acquisitions (£m)','Organic growth (£m)'],
        tableData: [
          ['Alpha','200','150','50'],
          ['Beta','300','80','220'],
          ['Gamma','180','180','0'],
          ['Delta','250','100','150']
        ],
        opts: ['Alpha','Beta','Gamma','Delta'],
        ans:  1,
        exp:  'Beta had the highest organic (internally generated) revenue growth of £220m. Gamma had no organic growth – all its revenue increase came from acquisitions.'
      },
      {
        type: 'match_pairs',
        q:    'Match each term to its correct description.',
        pairs: [
          { a: 'Horizontal integration',  b: 'Merger with a firm at the same production stage' },
          { a: 'Backward integration',    b: 'Acquiring a supplier at an earlier production stage' },
          { a: 'Forward integration',     b: 'Acquiring a distributor or retailer at a later stage' },
          { a: 'Conglomerate merger',     b: 'Merging with a firm in an unrelated industry' },
          { a: 'Demerger',                b: 'Breaking a large business into smaller independent firms' },
          { a: 'Synergy',                 b: 'The combined entity performs better than the sum of its parts' }
        ]
      }
    ]
  };

})();
