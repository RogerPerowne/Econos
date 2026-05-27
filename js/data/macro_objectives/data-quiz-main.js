(function () {

  window.ECONOS_QUIZ = {
    id:       'macro_objectives_main',
    topicId:  'macro_objectives_main',
    title:    'Macroeconomic Objectives & Trade-offs',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.routes.learn('macro_objectives'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers the five objectives, trade-offs, Phillips curve, and NAIRU',
    shortNames: [
      'Five objectives','Conflict: inflation/unemploy','Phillips curve','NAIRU','Stagflation',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_mo_1',
        type: 'mcq',
        q:    'Which of the following is NOT typically listed as a macroeconomic objective?',
        opts: [
          'Low and stable inflation',
          'Low unemployment',
          'Maximising firm profit',
          'Sustainable economic growth'
        ],
        ans:  2,
        exp:  'The five main macroeconomic objectives are: low inflation, low unemployment, sustainable growth, a satisfactory current account, and fiscal sustainability. Maximising firm profit is a microeconomic business objective, not a macroeconomic goal.'
      },
      {
        id:   'q_mo_2',
        type: 'mcq',
        q:    'The short-run Phillips curve shows:',
        opts: [
          'A positive relationship between inflation and unemployment',
          'A negative relationship between inflation and unemployment',
          'The relationship between GDP growth and current account',
          'The trade-off between growth and the environment'
        ],
        ans:  1,
        exp:  'The original Phillips curve (1958) showed a negative relationship: when unemployment was low, wage demands pushed prices up (higher inflation); when unemployment was high, wage pressure fell (lower inflation). This is the short-run trade-off.'
      },
      {
        id:   'q_mo_3',
        type: 'mcq',
        q:    'NAIRU stands for:',
        opts: [
          'National Association of Inflation Regulation Units',
          'Non-Accelerating Inflation Rate of Unemployment',
          'Net Annual Inflation Rate and Unemployment Index',
          'Nominal Adjusted Interest Rate and Unemployment'
        ],
        ans:  1,
        exp:  'NAIRU is the Non-Accelerating Inflation Rate of Unemployment – the level of unemployment at which inflation is stable. Below NAIRU, inflation accelerates; above it, inflation falls. It corresponds to the vertical long-run Phillips curve.'
      },
      {
        id:   'q_mo_4',
        type: 'mcq',
        q:    'A potential conflict between macroeconomic objectives occurs when:',
        opts: [
          'A policy to reduce inflation simultaneously reduces unemployment',
          'A policy to boost growth also improves the current account',
          'Policies to reduce unemployment by boosting demand may also raise inflation',
          'Lower interest rates reduce both inflation and unemployment'
        ],
        ans:  2,
        exp:  'Expanding demand (e.g., lower interest rates) can reduce unemployment but also push up prices – this is the classic inflation-unemployment trade-off. More growth can also worsen the current account as imports rise.'
      },
      {
        id:   'q_mo_5',
        type: 'numeric_input',
        q:    'The inflation target is 2%. Actual inflation is 5.5%. By how many percentage points does inflation exceed the target?',
        answer: 3.5,
        tolerance: 0,
        unit: 'pp',
        hint: 'Overshoot = actual − target.',
        workingSteps: ['Overshoot = 5.5% − 2% = 3.5 percentage points']
      },
      {
        id:   'q_mo_6',
        type: 'categorise',
        q:    'Categorise each policy as more likely to achieve lower inflation or lower unemployment.',
        categories: ['Reduces inflation','Reduces unemployment'],
        items: [
          { item: 'Raising interest rates',                   category: 'Reduces inflation' },
          { item: 'Expanding vocational training programmes', category: 'Reduces unemployment' },
          { item: 'Cutting government spending (austerity)',  category: 'Reduces inflation' },
          { item: 'Increasing job centre effectiveness',      category: 'Reduces unemployment' },
          { item: 'Tightening monetary policy',               category: 'Reduces inflation' },
          { item: 'Subsidising apprenticeships',              category: 'Reduces unemployment' }
        ]
      },
      {
        id:   'q_mo_7',
        type: 'cause_effect',
        q:    'Match each macroeconomic cause to its effect on objectives.',
        pairs: [
          { cause: 'Government stimulates AD to cut unemployment',  effect: 'Inflation may rise – trade-off activated' },
          { cause: 'Strong growth boosts imports',                  effect: 'Current account deficit may widen' },
          { cause: 'Central bank raises interest rates',            effect: 'Inflation falls but growth and employment may suffer' },
          { cause: 'Supply-side policies improve productivity',     effect: 'Growth rises without inflation – objectives aligned' },
          { cause: 'Negative supply shock hits the economy',        effect: 'Stagflation: higher inflation and higher unemployment' },
          { cause: 'Large fiscal deficit persists',                 effect: 'Government debt rises; fiscal sustainability threatened' }
        ]
      },
      {
        id:   'q_mo_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Phillips curve','NAIRU','Laffer curve','Stagflation'],
        ans:  2,
        exp:  'The Phillips curve, NAIRU, and stagflation are all directly related to the inflation-unemployment relationship. The Laffer curve is a fiscal concept about the relationship between tax rates and tax revenue – not an inflation/unemployment concept.'
      },
      {
        id:   'q_mo_9',
        type: 'data_table',
        q:    'Use the table to identify which country best achieves multiple macroeconomic objectives.',
        tableHeaders: ['Country','Inflation (%)','Unemployment (%)','GDP growth (%)','Current account (% GDP)'],
        tableData: [
          ['Alpia','2.1','4.2','2.5','-1.2'],
          ['Bortia','8.5','7.8','1.1','-6.3'],
          ['Centri','1.8','3.9','3.0','+0.5'],
          ['Dorus','12.0','5.0','4.5','-8.0']
        ],
        opts: ['Alpia','Bortia','Centri','Dorus'],
        ans:  2,
        exp:  'Centri has near-target inflation (1.8%), low unemployment (3.9%), solid growth (3%), and a small current account surplus. It best achieves multiple macro objectives simultaneously.'
      },
      {
        id:   'q_mo_10',
        type: 'match_pairs',
        q:    'Match each macroeconomic concept to its correct description.',
        pairs: [
          { a: 'Phillips curve',      b: 'Short-run negative trade-off between inflation and unemployment' },
          { a: 'NAIRU',               b: 'Unemployment rate at which inflation is stable' },
          { a: 'Stagflation',         b: 'Rising inflation occurring simultaneously with rising unemployment' },
          { a: 'Current account',     b: 'Record of trade in goods, services, and income transfers with the rest of the world' },
          { a: 'Fiscal sustainability',b: 'Government managing debt and deficit without endangering long-run finances' },
          { a: 'Supply-side policy',  b: 'Measures that improve productive capacity and shift LRAS rightward' }
        ]
      }
    ]
  };

})();
