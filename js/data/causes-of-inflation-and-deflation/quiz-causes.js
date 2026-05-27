(function () {

  window.ECONOS_QUIZ = {
    id:       'inflation_causes',
    topicId:  'inflation_causes',
    title:    'Causes of Inflation & Deflation',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.routes.learn('causes-of-inflation-and-deflation'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers demand-pull, cost-push, monetary inflation, deflation, and wage-price spiral',
    shortNames: [
      'Define inflation','Demand-pull','Cost-push','Monetary theory','Wage-price spiral',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_inf_1',
        type: 'mcq',
        q:    'Inflation is defined as:',
        opts: [
          'A one-off increase in the price of a single good',
          'A sustained rise in the general price level over time',
          'The rate at which the economy is growing',
          'A fall in the purchasing power of a currency in one period'
        ],
        ans:  1,
        exp:  'Inflation is a persistent, ongoing rise in the general (average) price level. A one-off price rise or a change in relative prices is not inflation unless it feeds into a broader sustained upward trend.'
      },
      {
        id:   'q_inf_2',
        type: 'mcq',
        q:    'Demand-pull inflation occurs when:',
        opts: [
          'Rising input costs push the SRAS curve leftward',
          'Excess demand in the economy pulls prices upward',
          'The central bank reduces the money supply',
          'Wages fall below the minimum wage floor'
        ],
        ans:  1,
        exp:  'Demand-pull inflation arises when aggregate demand grows faster than aggregate supply. When the economy is near full capacity, further increases in AD pull prices up rather than expanding output.'
      },
      {
        id:   'q_inf_3',
        type: 'mcq',
        q:    'Cost-push inflation is caused by:',
        opts: [
          'An increase in government spending',
          'Rising costs of production shifting SRAS leftward',
          'A fall in interest rates boosting consumer spending',
          'An expansion of the money supply beyond output growth'
        ],
        ans:  1,
        exp:  'Cost-push (supply-side) inflation arises from rising production costs – e.g., higher oil prices, wage increases, or supply-chain disruptions. SRAS shifts left, leading to higher prices and lower output (stagflation risk).'
      },
      {
        id:   'q_inf_4',
        type: 'mcq',
        q:    'The Quantity Theory of Money (MV = PT) implies that inflation results from:',
        opts: [
          'Wages rising faster than productivity',
          'The money supply growing faster than real output',
          'Government deficits exceeding private saving',
          'Import prices rising due to exchange rate depreciation'
        ],
        ans:  1,
        exp:  'MV = PT: if V (velocity) and T (transactions/output) are constant, a rise in M (money supply) causes a proportional rise in P (price level). Monetarists argue inflation is always "too much money chasing too few goods".'
      },
      {
        id:   'q_inf_5',
        type: 'numeric_input',
        q:    'CPI was 112 last year and is 117.6 this year. What is the inflation rate (%) to one decimal place?',
        answer: 5,
        tolerance: 0.1,
        unit: '%',
        hint: 'Inflation rate = ((new CPI − old CPI) ÷ old CPI) × 100.',
        workingSteps: ['Inflation = ((117.6 − 112) ÷ 112) × 100','= (5.6 ÷ 112) × 100 = 5.0%']
      },
      {
        id:   'q_inf_6',
        type: 'categorise',
        q:    'Categorise each factor as a cause of demand-pull inflation or cost-push inflation.',
        categories: ['Demand-pull','Cost-push'],
        items: [
          { item: 'Surge in consumer spending fuelled by credit',  category: 'Demand-pull' },
          { item: 'Global oil price spike',                        category: 'Cost-push' },
          { item: 'Large government stimulus package',             category: 'Demand-pull' },
          { item: 'Supply-chain disruption raising input costs',   category: 'Cost-push' },
          { item: 'Rapid growth in money supply',                  category: 'Demand-pull' },
          { item: 'Sharp rise in national minimum wage',           category: 'Cost-push' }
        ]
      },
      {
        id:   'q_inf_7',
        type: 'cause_effect',
        q:    'Match each cause to its inflationary effect.',
        pairs: [
          { cause: 'Workers demand higher wages to offset price rises',  effect: 'Wage-price spiral: costs push prices up further' },
          { cause: 'Central bank raises interest rates',                 effect: 'Borrowing costs rise; spending falls; inflation cools' },
          { cause: 'Exchange rate depreciates',                          effect: 'Import prices rise; cost-push inflation increases' },
          { cause: 'Positive output gap opens',                          effect: 'Economy above potential; demand-pull inflation builds' },
          { cause: 'Oil supply cut by major producers',                  effect: 'Energy costs rise; SRAS shifts left; stagflation risk' },
          { cause: 'Inflation expectations become entrenched',           effect: 'Workers demand higher wages; harder to reduce inflation' }
        ]
      },
      {
        id:   'q_inf_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Demand-pull inflation','Cost-push inflation','Hyperinflation','Deflation'],
        ans:  3,
        exp:  'Demand-pull, cost-push, and hyperinflation are all forms of rising prices. Deflation is the opposite – a sustained fall in the general price level. It is the odd one out among inflationary concepts.'
      },
      {
        id:   'q_inf_9',
        type: 'data_table',
        q:    'Use the CPI data to calculate the inflation rate between Year 1 and Year 2.',
        tableHeaders: ['Year','CPI','Inflation Rate (%)'],
        tableData: [
          ['Base year','100','–'],
          ['Year 1','105','5.0'],
          ['Year 2','112.35','?'],
          ['Year 3','118','?']
        ],
        opts: ['5.5%','7.0%','6.2%','4.8%'],
        ans:  1,
        exp:  'Inflation Year 1→2 = ((112.35 − 105) ÷ 105) × 100 = (7.35 ÷ 105) × 100 = 7.0%.'
      },
      {
        id:   'q_inf_10',
        type: 'match_pairs',
        q:    'Match each inflation concept to its correct description.',
        pairs: [
          { a: 'Demand-pull',           b: 'Excess demand in economy pulls up the general price level' },
          { a: 'Cost-push',             b: 'Rising input costs shift SRAS left, raising prices' },
          { a: 'Hyperinflation',        b: 'Extremely rapid and out-of-control inflation (>50%/month)' },
          { a: 'Deflation',             b: 'Sustained fall in the general price level' },
          { a: 'Wage-price spiral',     b: 'Rising prices trigger wage demands that push costs and prices higher' },
          { a: 'Inflation target',      b: 'Government or central bank objective for stable price rises (2% in UK)' }
        ]
      }
    ]
  };

})();
