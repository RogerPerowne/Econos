(function () {

  window.ECONOS_QUIZ = {
    id:       'fiscal_policy_main',
    topicId:  'fiscal_policy_main',
    title:    'Fiscal Policy',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'fiscal_policy' }),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers government spending, taxation, deficit/debt, automatic stabilisers, and crowding out',
    shortNames: [
      'Fiscal policy defined','Expansionary','Contractionary','Deficit vs debt','Automatic stabilisers',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_fp_1',
        type: 'mcq',
        q:    'Fiscal policy refers to the use of:',
        opts: [
          'Interest rates and money supply to influence the economy',
          'Government spending and taxation to influence aggregate demand and supply',
          'Exchange rates to manage the current account',
          'Regulatory controls on bank lending'
        ],
        ans:  1,
        exp:  'Fiscal policy involves deliberate changes in government spending (G) and/or taxation (T) to influence macroeconomic objectives such as growth, inflation, and unemployment.'
      },
      {
        id:   'q_fp_2',
        type: 'mcq',
        q:    'An expansionary fiscal policy involves:',
        opts: [
          'Raising taxes and cutting government spending',
          'Cutting taxes and/or increasing government spending to boost AD',
          'Raising interest rates to reduce consumer borrowing',
          'Quantitative easing to increase the money supply'
        ],
        ans:  1,
        exp:  'Expansionary (loose) fiscal policy stimulates aggregate demand by cutting taxes (boosting disposable income) and/or increasing G. It shifts AD to the right.'
      },
      {
        id:   'q_fp_3',
        type: 'mcq',
        q:    'The national debt is best described as:',
        opts: [
          'The annual shortfall between government spending and tax revenue',
          'The total stock of government borrowing accumulated over time',
          'The UK\'s total trade deficit with the rest of the world',
          'The amount the government borrows from the central bank per year'
        ],
        ans:  1,
        exp:  'The budget deficit is the annual flow (spending minus tax revenue). The national debt is the stock – total outstanding government borrowing accumulated over many years. Running a deficit adds to the debt.'
      },
      {
        id:   'q_fp_4',
        type: 'mcq',
        q:    'Automatic stabilisers work by:',
        opts: [
          'The government actively changing tax rates during a recession',
          'Built-in fiscal mechanisms that automatically offset economic cycles without policy changes',
          'The central bank lowering interest rates when GDP falls',
          'Exporters adjusting prices when the exchange rate changes'
        ],
        ans:  1,
        exp:  'Automatic stabilisers (e.g., unemployment benefits and progressive income tax) work without discretionary policy. In a recession: tax revenue falls, benefits spending rises – both support AD automatically.'
      },
      {
        id:   'q_fp_5',
        type: 'numeric_input',
        q:    'Government spending = £800bn. Tax revenue = £720bn. Calculate the budget deficit (£bn).',
        answer: 80,
        tolerance: 0,
        unit: '£bn',
        hint: 'Budget deficit = Government spending − Tax revenue.',
        workingSteps: ['Deficit = £800bn − £720bn = £80bn']
      },
      {
        id:   'q_fp_6',
        type: 'categorise',
        q:    'Categorise each as a direct tax or an indirect tax.',
        categories: ['Direct tax','Indirect tax'],
        items: [
          { item: 'Income tax',          category: 'Direct tax' },
          { item: 'VAT',                 category: 'Indirect tax' },
          { item: 'Corporation tax',     category: 'Direct tax' },
          { item: 'Excise duty on fuel', category: 'Indirect tax' },
          { item: 'National Insurance',  category: 'Direct tax' },
          { item: 'Council tax',         category: 'Direct tax' }
        ]
      },
      {
        id:   'q_fp_7',
        type: 'cause_effect',
        q:    'Match each fiscal policy action to its macroeconomic effect.',
        pairs: [
          { cause: 'Government increases infrastructure spending',   effect: 'AD shifts right; multiplier amplifies effect on income' },
          { cause: 'Income tax rates cut',                          effect: 'Disposable income rises; consumption increases' },
          { cause: 'Contractionary fiscal policy in boom',          effect: 'AD growth slows; inflationary pressure eases' },
          { cause: 'Large budget deficit causes crowding out',      effect: 'Government borrowing raises interest rates; private investment falls' },
          { cause: 'Automatic stabilisers activate in recession',   effect: 'Budget deficit rises; AD partially cushioned' },
          { cause: 'Supply-side tax cuts (e.g., corporation tax)',  effect: 'Investment incentivised; LRAS shifts right over time' }
        ]
      },
      {
        id:   'q_fp_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Budget deficit','National debt','Quantitative easing','Automatic stabiliser'],
        ans:  2,
        exp:  'Budget deficit, national debt, and automatic stabilisers are all fiscal policy concepts. Quantitative easing is a monetary policy tool used by the central bank – not fiscal policy.'
      },
      {
        id:   'q_fp_9',
        type: 'data_table',
        q:    'Use the data to calculate the budget deficit/surplus for each year and identify the year with the largest deficit.',
        tableHeaders: ['Year','G (£bn)','T (£bn)','Balance (£bn)'],
        tableData: [
          ['2020','900','750','?'],
          ['2021','870','800','?'],
          ['2022','830','850','?'],
          ['2023','860','830','?']
        ],
        opts: ['2020 (−£150bn)','2021 (−£70bn)','2022 (+£20bn)','2023 (−£30bn)'],
        ans:  0,
        exp:  '2020: 900−750=−£150bn deficit; 2021: 870−800=−£70bn; 2022: 830−850=+£20bn surplus; 2023: 860−830=−£30bn. 2020 had the largest deficit of £150bn.'
      },
      {
        id:   'q_fp_10',
        type: 'match_pairs',
        q:    'Match each fiscal concept to its correct description.',
        pairs: [
          { a: 'Expansionary fiscal policy', b: 'Cut taxes and/or raise spending to stimulate AD' },
          { a: 'Budget deficit',             b: 'Annual shortfall when government spending exceeds tax revenue' },
          { a: 'National debt',              b: 'Accumulated stock of government borrowing over time' },
          { a: 'Crowding out',               b: 'Government borrowing raises interest rates, reducing private investment' },
          { a: 'Automatic stabiliser',       b: 'Built-in mechanism that smooths the cycle without policy action' },
          { a: 'Progressive tax',            b: 'Tax rate rises as income rises; acts as an automatic stabiliser' }
        ]
      }
    ]
  };

})();
