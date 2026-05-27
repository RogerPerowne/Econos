(function () {

  window.ECONOS_QUIZ = {
    id:       'multiplier_main',
    topicId:  'multiplier_main',
    title:    'National Income & The Multiplier',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'multiplier' }),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers circular flow, equilibrium income, the multiplier, leakages, and the accelerator',
    shortNames: [
      'Circular flow','Injections/withdrawals','Multiplier formula','MPC & MPS','Accelerator',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_mult_1',
        type: 'mcq',
        q:    'In the circular flow of income, injections include:',
        opts: [
          'Savings, taxation, and imports',
          'Investment, government spending, and exports',
          'Consumption, saving, and taxation',
          'Profits, rents, and wages'
        ],
        ans:  1,
        exp:  'Injections are flows of spending into the circular flow from outside the household-firm loop: Investment (I), Government spending (G), and Export revenue (X). Leakages/withdrawals are Savings (S), Taxation (T), and Imports (M).'
      },
      {
        id:   'q_mult_2',
        type: 'mcq',
        q:    'Keynesian equilibrium national income is where:',
        opts: [
          'AD equals AS (Aggregate Supply)',
          'Total injections equal total leakages (I+G+X = S+T+M)',
          'Unemployment is at its natural rate',
          'Government budget is balanced'
        ],
        ans:  1,
        exp:  'Keynesian equilibrium occurs when planned injections (I+G+X) equal planned withdrawals (S+T+M). At this point there is no tendency for national income to change.'
      },
      {
        id:   'q_mult_3',
        type: 'mcq',
        q:    'The value of the Keynesian multiplier depends on:',
        opts: [
          'The size of the initial injection only',
          'The Marginal Propensity to Consume (MPC) – higher MPC gives a larger multiplier',
          'The level of government debt',
          'The current rate of inflation'
        ],
        ans:  1,
        exp:  'Multiplier = 1/(1−MPC) = 1/MPS. A higher MPC means more of each round of income is re-spent, so the multiplied effect on national income is larger.'
      },
      {
        id:   'q_mult_4',
        type: 'mcq',
        q:    'The accelerator theory states that:',
        opts: [
          'Investment is a constant share of national income',
          'Investment depends on the rate of change of national income (ΔY)',
          'Investment depends only on the interest rate',
          'Higher inflation always accelerates investment spending'
        ],
        ans:  1,
        exp:  'The accelerator principle: investment depends not on the level of income but on the change in income (ΔY). When income is rising, firms invest to expand capacity; when growth slows, investment collapses even before income falls.'
      },
      {
        id:   'q_mult_5',
        type: 'numeric_input',
        q:    'MPS = 0.2. The government injects £100m into the economy. Calculate the final change in national income (£m).',
        answer: 500,
        tolerance: 0,
        unit: '£m',
        hint: 'Multiplier = 1/MPS. Final ΔY = multiplier × injection.',
        workingSteps: ['Multiplier = 1/0.2 = 5','ΔY = 5 × £100m = £500m']
      },
      {
        id:   'q_mult_6',
        type: 'categorise',
        q:    'Categorise each as an injection or a leakage (withdrawal) in the circular flow.',
        categories: ['Injection','Leakage'],
        items: [
          { item: 'Government expenditure on schools',  category: 'Injection' },
          { item: 'Household saving in ISAs',           category: 'Leakage' },
          { item: 'Export earnings from abroad',        category: 'Injection' },
          { item: 'Income tax paid to government',      category: 'Leakage' },
          { item: 'Business investment in machinery',   category: 'Injection' },
          { item: 'Spending on imported goods',         category: 'Leakage' }
        ]
      },
      {
        id:   'q_mult_7',
        type: 'cause_effect',
        q:    'Match each multiplier-related cause to its effect.',
        pairs: [
          { cause: 'MPC rises (from 0.6 to 0.8)',               effect: 'Multiplier increases; each injection has greater impact' },
          { cause: 'Households save more (MPS rises)',           effect: 'Multiplier falls; circular flow loses more per round' },
          { cause: 'Government spending rises by £50bn',         effect: 'National income rises by more than £50bn (multiplier effect)' },
          { cause: 'GDP growth accelerates',                     effect: 'Firms invest more (accelerator effect)' },
          { cause: 'GDP growth slows sharply',                   effect: 'Investment falls (negative accelerator)' },
          { cause: 'Open economy with high import propensity',   effect: 'Multiplier is smaller due to import leakage' }
        ]
      },
      {
        id:   'q_mult_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out in the context of multiplier theory?',
        opts: ['MPC','MPS','MRT (Marginal Rate of Tax)','Monopoly profit'],
        ans:  3,
        exp:  'MPC, MPS, and MRT are all marginal propensities that determine the size of leakages and hence the multiplier. Monopoly profit is a microeconomic concept unrelated to national income multiplier analysis.'
      },
      {
        id:   'q_mult_9',
        type: 'data_table',
        q:    'Use the table to identify the multiplier and the change in national income from a £40bn injection.',
        tableHeaders: ['MPC','Multiplier','ΔY from £40bn injection (£bn)'],
        tableData: [
          ['0.5','?','?'],
          ['0.6','?','?'],
          ['0.75','?','?'],
          ['0.8','?','?']
        ],
        opts: [
          'MPC=0.75 → multiplier 4 → ΔY = £160bn',
          'MPC=0.8 → multiplier 4 → ΔY = £160bn',
          'MPC=0.6 → multiplier 4 → ΔY = £160bn',
          'MPC=0.5 → multiplier 4 → ΔY = £160bn'
        ],
        ans:  0,
        exp:  'Multiplier = 1/(1−MPC). MPC=0.75 → 1/0.25 = 4 → ΔY = 4×£40bn = £160bn. MPC=0.5→2, 0.6→2.5, 0.8→5.'
      },
      {
        id:   'q_mult_10',
        type: 'match_pairs',
        q:    'Match each term to its correct description in multiplier theory.',
        pairs: [
          { a: 'Injection',       b: 'Spending added to the circular flow from outside (G, I, X)' },
          { a: 'Leakage',         b: 'Withdrawal from the circular flow (S, T, M)' },
          { a: 'MPC',             b: 'Fraction of extra income that is spent on consumption' },
          { a: 'Multiplier',      b: '1/MPS; the factor by which a change in spending affects national income' },
          { a: 'Accelerator',     b: 'Investment driven by the rate of change of national income' },
          { a: 'Paradox of thrift',b: 'If all households save more, national income falls and total saving may not rise' }
        ]
      }
    ]
  };

})();
