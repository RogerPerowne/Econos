(function () {

  window.ECONOS_QUIZ = {
    id:       'growth_measure_main',
    topicId:  'growth_measure_main',
    title:    'Economic Growth & National Income',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'growth_measure' }),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers GDP measurement, real vs nominal, GNI, PPP, and welfare limits of GDP',
    shortNames: [
      'GDP definition','Three approaches','Real vs nominal','GNI vs GDP','GDP welfare limits',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_gm_1',
        type: 'mcq',
        q:    'GDP (Gross Domestic Product) measures:',
        opts: [
          'The total value of goods and services produced by a country\'s residents anywhere in the world',
          'The total value of all goods and services produced within a country\'s borders in a given period',
          'A country\'s stock of wealth at a point in time',
          'The total government expenditure in a fiscal year'
        ],
        ans:  1,
        exp:  'GDP measures the total monetary value of all final goods and services produced within a country\'s geographical borders in a period (usually a year or quarter), regardless of the nationality of the producers.'
      },
      {
        id:   'q_gm_2',
        type: 'mcq',
        q:    'The three methods of measuring national income are:',
        opts: [
          'Savings, investment, and government spending approaches',
          'Output, income, and expenditure approaches',
          'Imports, exports, and trade balance approaches',
          'Nominal, real, and PPP-adjusted approaches'
        ],
        ans:  1,
        exp:  'National income can be measured by three equivalent approaches: (1) output approach — sum of value added; (2) income approach — sum of factor incomes; (3) expenditure approach — sum of all spending on final goods (C+I+G+(X-M)).'
      },
      {
        id:   'q_gm_3',
        type: 'mcq',
        q:    'Real GDP differs from nominal GDP because real GDP:',
        opts: [
          'Excludes government spending',
          'Is adjusted for changes in the price level (inflation)',
          'Only counts goods, not services',
          'Measures income of nationals abroad'
        ],
        ans:  1,
        exp:  'Nominal GDP uses current prices; real GDP adjusts for inflation using a base year. Real GDP shows genuine changes in output volume, not just price increases.'
      },
      {
        id:   'q_gm_4',
        type: 'mcq',
        q:    'Purchasing Power Parity (PPP) adjustments are used to:',
        opts: [
          'Convert all countries to a dollar nominal exchange rate',
          'Compare living standards by accounting for price level differences between countries',
          'Measure the trade balance between two economies',
          'Inflate nominal GDP to account for shadow economy activity'
        ],
        ans:  1,
        exp:  'PPP adjusts GDP figures for differences in price levels across countries. A pound buys more in a low-price country than a high-price country — PPP gives a more accurate picture of relative living standards.'
      },
      {
        id:   'q_gm_5',
        type: 'numeric_input',
        q:    'Nominal GDP = £1,200bn. The GDP deflator = 120 (base year = 100). What is real GDP (£bn)?',
        answer: 1000,
        tolerance: 0,
        unit: '£bn',
        hint: 'Real GDP = (Nominal GDP ÷ GDP deflator) × 100.',
        workingSteps: ['Real GDP = (£1,200bn ÷ 120) × 100 = £1,000bn']
      },
      {
        id:   'q_gm_6',
        type: 'categorise',
        q:    'Categorise each measure as a limitation of GDP as a welfare measure or a strength of GDP.',
        categories: ['Limitation of GDP','Strength of GDP'],
        items: [
          { item: 'Ignores distribution of income',              category: 'Limitation of GDP' },
          { item: 'Widely available and internationally comparable',category: 'Strength of GDP' },
          { item: 'Excludes unpaid household work',              category: 'Limitation of GDP' },
          { item: 'Tracks changes in output over time',          category: 'Strength of GDP' },
          { item: 'Does not capture environmental degradation',  category: 'Limitation of GDP' },
          { item: 'Identifies periods of recession and recovery',category: 'Strength of GDP' }
        ]
      },
      {
        id:   'q_gm_7',
        type: 'cause_effect',
        q:    'Match each cause to its effect on GDP measurement.',
        pairs: [
          { cause: 'Inflation rises but output is unchanged',      effect: 'Nominal GDP rises; real GDP unchanged' },
          { cause: 'Country\'s nationals earn more abroad',        effect: 'GNI exceeds GDP by the net factor income' },
          { cause: 'Shadow economy (informal) activity ignored',  effect: 'GDP understates true economic activity' },
          { cause: 'Environmental damage from growth',             effect: 'GDP rises but genuine welfare may fall' },
          { cause: 'GDP per capita compared across countries',    effect: 'Gives a rough guide to average living standards' },
          { cause: 'PPP adjustment applied to GDP comparison',    effect: 'More accurate cross-country welfare comparison' }
        ]
      },
      {
        id:   'q_gm_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['GDP','GNI','HDI','Consumer Price Index'],
        ans:  3,
        exp:  'GDP, GNI (Gross National Income), and HDI (Human Development Index) are all measures of economic output or living standards. The Consumer Price Index measures inflation — it is not a national income or welfare measure.'
      },
      {
        id:   'q_gm_9',
        type: 'data_table',
        q:    'Use the table to identify which country has the highest real GDP per capita.',
        tableHeaders: ['Country','Nominal GDP (£bn)','Population (m)','GDP Deflator'],
        tableData: [
          ['Alpia','600','10','120'],
          ['Bortia','400','5','100'],
          ['Centri','900','20','150'],
          ['Dorus','500','8','125']
        ],
        opts: ['Alpia','Bortia','Centri','Dorus'],
        ans:  1,
        exp:  'Real GDP = Nominal ÷ Deflator × 100. Bortia: (400÷100)×100=£400bn; per capita=£400bn/5m=£80,000. Alpia: £500bn/10m=£50,000. Centri: £600bn/20m=£30,000. Dorus: £400bn/8m=£50,000. Bortia is highest at £80,000.'
      },
      {
        id:   'q_gm_10',
        type: 'match_pairs',
        q:    'Match each national income concept to its description.',
        pairs: [
          { a: 'GDP',              b: 'Value of output produced within a country\'s borders' },
          { a: 'GNI',              b: 'GDP plus net income from abroad earned by residents' },
          { a: 'Real GDP',         b: 'GDP adjusted for inflation to show volume changes' },
          { a: 'GDP per capita',   b: 'Average output per person; proxy for living standards' },
          { a: 'PPP',              b: 'Adjusts GDP for price level differences between countries' },
          { a: 'HDI',              b: 'Composite index: income, education, and life expectancy' }
        ]
      }
    ]
  };

})();
