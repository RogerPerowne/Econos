(function () {

  window.ECONOS_QUIZ = {
    id:       'unemployment_main',
    topicId:  'unemployment_main',
    title:    'Employment & Unemployment',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'unemployment' }),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers types of unemployment, measurement, policy responses, and hysteresis',
    shortNames: [
      'Unemployment definition','Frictional','Structural','Cyclical','Hysteresis',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_unemp_1',
        type: 'mcq',
        q:    'The ILO definition classifies a person as unemployed if they are:',
        opts: [
          'Not in work and not looking for work',
          'Without a job but actively seeking and available for work',
          'Working part-time but wanting full-time work',
          'On a zero-hours contract with irregular hours'
        ],
        ans:  1,
        exp:  'The ILO (International Labour Organisation) standard defines unemployment as: without a job, available to start work within two weeks, and actively sought work in the past four weeks.'
      },
      {
        id:   'q_unemp_2',
        type: 'mcq',
        q:    'Frictional unemployment arises because:',
        opts: [
          'The economy is in a recession and firms are laying off workers',
          'Workers are between jobs and searching for new employment',
          'Workers\' skills no longer match the requirements of available jobs',
          'The minimum wage is set above the market-clearing wage'
        ],
        ans:  1,
        exp:  'Frictional unemployment is the temporary unemployment that occurs when workers transition between jobs. It is often considered inevitable and even healthy – it allows better job matching.'
      },
      {
        id:   'q_unemp_3',
        type: 'mcq',
        q:    'Structural unemployment is caused by:',
        opts: [
          'A general fall in aggregate demand reducing output',
          'Workers changing jobs in a healthy economy',
          'Changes in the structure of the economy making certain skills or industries obsolete',
          'Seasonal variation in demand for labour'
        ],
        ans:  2,
        exp:  'Structural unemployment arises when industries decline (e.g., manufacturing, mining) or technology replaces roles. Workers\' skills no longer match available vacancies – a supply-side mismatch that requires retraining.'
      },
      {
        id:   'q_unemp_4',
        type: 'mcq',
        q:    'Hysteresis in unemployment means:',
        opts: [
          'Unemployment always returns to its natural rate quickly after a shock',
          'Long-term unemployment causes skills to atrophy, permanently raising the natural rate',
          'Cyclical unemployment is always temporary',
          'The government can eliminate unemployment with enough spending'
        ],
        ans:  1,
        exp:  'Hysteresis means past events have persistent effects. Prolonged cyclical unemployment can become structural – workers lose skills and motivation, employers "scar" them by preferring recent graduates, raising the long-run natural rate permanently.'
      },
      {
        id:   'q_unemp_5',
        type: 'numeric_input',
        q:    'The labour force is 32 million. 1.6 million are unemployed. What is the unemployment rate (%)?',
        answer: 5,
        tolerance: 0,
        unit: '%',
        hint: 'Unemployment rate = (unemployed ÷ labour force) × 100.',
        workingSteps: ['Rate = (1.6m ÷ 32m) × 100 = 5%']
      },
      {
        id:   'q_unemp_6',
        type: 'categorise',
        q:    'Categorise each type of unemployment as demand-deficient or supply-side.',
        categories: ['Demand-deficient','Supply-side'],
        items: [
          { item: 'Cyclical unemployment from recession',          category: 'Demand-deficient' },
          { item: 'Structural unemployment from deindustrialisation',category: 'Supply-side' },
          { item: 'Recession-driven mass layoffs',                 category: 'Demand-deficient' },
          { item: 'Frictional unemployment between jobs',          category: 'Supply-side' },
          { item: 'Keynes\'s deficient effective demand',          category: 'Demand-deficient' },
          { item: 'Seasonal unemployment in tourism',              category: 'Supply-side' }
        ]
      },
      {
        id:   'q_unemp_7',
        type: 'cause_effect',
        q:    'Match each unemployment cause to its policy response.',
        pairs: [
          { cause: 'Cyclical unemployment from falling AD',         effect: 'Fiscal or monetary stimulus to boost demand' },
          { cause: 'Structural unemployment from skills mismatch',  effect: 'Investment in retraining and vocational education' },
          { cause: 'Frictional unemployment from poor job matching',effect: 'Improve job centres and labour market information' },
          { cause: 'Real wage unemployment above market-clearing',  effect: 'Reform minimum wage or union power' },
          { cause: 'Hysteresis raising long-run natural rate',      effect: 'Active labour market policies targeting long-term unemployed' },
          { cause: 'Geographical immobility of labour',             effect: 'Housing subsidies and relocation support' }
        ]
      },
      {
        id:   'q_unemp_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Frictional unemployment','Structural unemployment','Cyclical unemployment','Deflation'],
        ans:  3,
        exp:  'Frictional, structural, and cyclical are all types of unemployment. Deflation is a macroeconomic price-level concept – it can cause unemployment but is not itself a type of unemployment.'
      },
      {
        id:   'q_unemp_9',
        type: 'data_table',
        q:    'Use the data to calculate the unemployment rate for Country B.',
        tableHeaders: ['Country','Working-age population (m)','Employed (m)','Unemployed (m)','Inactive (m)'],
        tableData: [
          ['A','50','38','2','10'],
          ['B','40','29','3','8'],
          ['C','60','48','4','8'],
          ['D','30','22','1','7']
        ],
        opts: ['7.5%','9.4%','10%','11.2%'],
        ans:  1,
        exp:  'Labour force = Employed + Unemployed = 29 + 3 = 32m. Unemployment rate = (3 ÷ 32) × 100 = 9.375% ≈ 9.4%.'
      },
      {
        id:   'q_unemp_10',
        type: 'match_pairs',
        q:    'Match each unemployment concept to its description.',
        pairs: [
          { a: 'Frictional',           b: 'Short-term unemployment while searching for a new job' },
          { a: 'Structural',           b: 'Skills or location mismatch due to changing economic structure' },
          { a: 'Cyclical',             b: 'Unemployment caused by a fall in aggregate demand' },
          { a: 'Seasonal',             b: 'Regular fluctuations in employment due to time of year' },
          { a: 'Hysteresis',           b: 'Long-term unemployment becoming permanent, raising NAIRU' },
          { a: 'Natural rate',         b: 'Unemployment rate when economy is at full employment (NAIRU)' }
        ]
      }
    ]
  };

})();
