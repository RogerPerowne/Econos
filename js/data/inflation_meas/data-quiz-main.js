(function () {

  window.ECONOS_QUIZ = {
    id:       'inflation_meas_main',
    topicId:  'inflation_meas_main',
    title:    'Inflation: Measurement & Costs',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'inflation_meas' }),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers CPI construction, RPI/CPIH, winners and losers, and the 2% target',
    shortNames: [
      'CPI construction','Basket of goods','CPI vs RPI','Winners/losers','Costs of inflation',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_infm_1',
        type: 'mcq',
        q:    'The Consumer Price Index (CPI) measures inflation by:',
        opts: [
          'Tracking the price of all goods and services produced domestically',
          'Tracking changes in the cost of a representative basket of goods and services over time',
          'Measuring the growth rate of the money supply',
          'Recording average house prices and rent levels'
        ],
        ans:  1,
        exp:  'The CPI tracks the changing cost of a representative "basket" of goods and services consumed by a typical UK household. The basket is updated annually and the weights reflect spending patterns.'
      },
      {
        id:   'q_infm_2',
        type: 'mcq',
        q:    'The main difference between CPI and RPI (Retail Price Index) is:',
        opts: [
          'RPI includes housing costs (mortgage interest payments); CPI does not',
          'CPI includes housing costs; RPI does not',
          'RPI only covers goods, not services',
          'CPI is used for setting interest rates; RPI for measuring output'
        ],
        ans:  0,
        exp:  'RPI includes mortgage interest payments and some housing costs that CPI excludes. RPI therefore tends to be higher than CPI when interest rates are rising. CPIH is a variant of CPI that includes owner-occupier housing costs.'
      },
      {
        id:   'q_infm_3',
        type: 'mcq',
        q:    'The Bank of England\'s inflation target (set by the government) is:',
        opts: ['1% CPI','2% CPI','3% RPI','0% – price stability means zero inflation'],
        ans:  1,
        exp:  'The UK government set the Bank of England a symmetric inflation target of 2% CPI. If inflation deviates by more than 1 percentage point (above 3% or below 1%), the Governor must write an open letter of explanation to the Chancellor.'
      },
      {
        id:   'q_infm_4',
        type: 'mcq',
        q:    'Which group benefits from unexpectedly high inflation?',
        opts: [
          'Savers with fixed-rate savings accounts',
          'Pensioners on fixed nominal incomes',
          'Borrowers with fixed-rate mortgages',
          'Creditors owed a fixed nominal sum'
        ],
        ans:  2,
        exp:  'Borrowers gain from unexpected inflation because the real value of their debt falls. A £100,000 mortgage becomes cheaper in real terms when prices rise – they repay less in purchasing power terms.'
      },
      {
        id:   'q_infm_5',
        type: 'numeric_input',
        q:    'The CPI basket costs £850 in the base year and £893 in the current year. Calculate the CPI index value for the current year (base year = 100).',
        answer: 105.1,
        tolerance: 0.2,
        unit: '',
        hint: 'CPI = (current basket cost ÷ base year cost) × 100.',
        workingSteps: ['CPI = (£893 ÷ £850) × 100 = 105.06 ≈ 105.1']
      },
      {
        id:   'q_infm_6',
        type: 'categorise',
        q:    'Categorise each group as a winner or loser from unexpected inflation.',
        categories: ['Winner from inflation','Loser from inflation'],
        items: [
          { item: 'Mortgage borrower with fixed rate',          category: 'Winner from inflation' },
          { item: 'Pensioner on fixed nominal pension',         category: 'Loser from inflation' },
          { item: 'Government with large nominal debt',         category: 'Winner from inflation' },
          { item: 'Saver with cash in a low-interest account',  category: 'Loser from inflation' },
          { item: 'Exporter if domestic inflation below rivals',category: 'Winner from inflation' },
          { item: 'Creditor owed a fixed sum',                  category: 'Loser from inflation' }
        ]
      },
      {
        id:   'q_infm_7',
        type: 'cause_effect',
        q:    'Match each cost or consequence of inflation to its effect.',
        pairs: [
          { cause: 'High and variable inflation',              effect: 'Business uncertainty rises; investment may fall' },
          { cause: 'Inflation above trading partners\' rate',  effect: 'Exports become less competitive; current account worsens' },
          { cause: 'Workers negotiate higher nominal wages',   effect: 'Risk of wage-price spiral developing' },
          { cause: 'Shoe-leather costs arise',                 effect: 'People spend more time managing cash holdings' },
          { cause: 'Menu costs arise',                         effect: 'Firms must frequently update prices; administrative burden' },
          { cause: 'Deflation takes hold',                     effect: 'Consumers delay purchases expecting lower prices; demand collapses' }
        ]
      },
      {
        id:   'q_infm_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['CPI','RPI','CPIH','Gini coefficient'],
        ans:  3,
        exp:  'CPI, RPI, and CPIH are all measures of price inflation. The Gini coefficient measures income or wealth inequality – it is not an inflation measure.'
      },
      {
        id:   'q_infm_9',
        type: 'data_table',
        q:    'Use the table to calculate the inflation rate between Year 2 and Year 3.',
        tableHeaders: ['Year','CPI Index'],
        tableData: [
          ['Year 1 (base)','100.0'],
          ['Year 2','106.0'],
          ['Year 3','113.4']
        ],
        opts: ['6.0%','7.4%','6.98%','7.0%'],
        ans:  3,
        exp:  'Inflation Year 2→3 = ((113.4 − 106.0) ÷ 106.0) × 100 = (7.4 ÷ 106) × 100 ≈ 6.98% ≈ 7.0%.'
      },
      {
        id:   'q_infm_10',
        type: 'match_pairs',
        q:    'Match each inflation measurement concept to its description.',
        pairs: [
          { a: 'CPI',              b: 'Headline UK inflation measure using consumer basket; excludes housing' },
          { a: 'RPI',              b: 'Older measure including mortgage costs; typically higher than CPI' },
          { a: 'CPIH',             b: 'CPI variant including owner-occupier housing costs' },
          { a: 'Base year',        b: 'Reference year with index set to 100' },
          { a: 'Shoe-leather cost',b: 'Extra cost of managing cash holdings to avoid inflation erosion' },
          { a: 'Menu cost',        b: 'Cost of updating prices frequently due to inflation' }
        ]
      }
    ]
  };

})();
