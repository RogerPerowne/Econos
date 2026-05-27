(function () {

  window.ECONOS_QUIZ = {
    title:    'Standard of Living & Wellbeing',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.routes.learn('standard-of-living-and-wellbeing'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers HDI, composite measures, Kuznets curve, and happiness economics',
    shortNames: [
      'GDP limitations','HDI components','Composite vs single','Kuznets curve','Happiness economics',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'GDP per capita is an imperfect measure of living standards because it:',
        opts: [
          'Cannot be compared between different countries',
          'Ignores the distribution of income and non-material aspects of wellbeing',
          'Only measures the output of the manufacturing sector',
          'Includes only formal market transactions and government spending'
        ],
        ans:  1,
        exp:  'GDP per capita measures average income but ignores inequality (two countries with same GDP per capita can have vastly different distributions), non-material wellbeing (health, freedom, environment), and unpaid work.'
      },
      {
        type: 'mcq',
        q:    'The Human Development Index (HDI) combines which three dimensions?',
        opts: [
          'GDP, trade balance, and inflation',
          'Life expectancy, education, and income per capita',
          'Employment, healthcare spending, and crime rates',
          'Economic freedom, democracy, and innovation'
        ],
        ans:  1,
        exp:  'The UN\'s HDI is a composite of: (1) life expectancy at birth (health), (2) mean and expected years of schooling (education), and (3) GNI per capita at PPP (living standards). It ranges from 0 to 1.'
      },
      {
        type: 'mcq',
        q:    'The Environmental Kuznets Curve hypothesis suggests:',
        opts: [
          'Richer countries always have more pollution than poorer countries',
          'Pollution initially rises with income, then falls once income reaches a threshold',
          'Economic growth is always sustainable and does not harm the environment',
          'Environmental quality is uncorrelated with economic development'
        ],
        ans:  1,
        exp:  'The EKC proposes an inverted-U relationship: as countries grow from poor to middle-income, pollution rises; beyond a threshold, demand for environmental quality and capacity to invest in clean tech leads to improvements.'
      },
      {
        type: 'mcq',
        q:    'Subjective wellbeing measures (such as the ONS Wellbeing Framework) capture:',
        opts: [
          'Only economic output and income data',
          'How people feel about their lives, relationships, health, and environment',
          'Only objective data like crime rates and GDP',
          'The total value of assets held by households'
        ],
        ans:  1,
        exp:  'Subjective wellbeing surveys ask people directly about their life satisfaction, happiness, and sense of purpose. They capture dimensions of human experience that GDP misses – such as mental health, community, and relationships.'
      },
      {
        type: 'numeric_input',
        q:    'A country\'s HDI components score: life expectancy index = 0.80, education index = 0.72, income index = 0.68. What is the HDI? (geometric mean: cube root of the product)',
        answer: 0.733,
        tolerance: 0.005,
        unit: '',
        hint: 'HDI = (LEI × EI × II)^(1/3). Use a calculator or estimate.',
        workingSteps: ['Product = 0.80 × 0.72 × 0.68 = 0.39168','HDI = 0.39168^(1/3) ≈ 0.733']
      },
      {
        type: 'categorise',
        q:    'Categorise each measure as an objective or subjective wellbeing indicator.',
        categories: ['Objective indicator','Subjective indicator'],
        items: [
          { item: 'Life expectancy at birth',          category: 'Objective indicator' },
          { item: 'Self-reported life satisfaction',   category: 'Subjective indicator' },
          { item: 'GDP per capita at PPP',             category: 'Objective indicator' },
          { item: 'Happiness survey score',            category: 'Subjective indicator' },
          { item: 'Mean years of schooling',           category: 'Objective indicator' },
          { item: 'Sense of personal wellbeing index', category: 'Subjective indicator' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each cause to its effect on measured living standards.',
        pairs: [
          { cause: 'GDP rises but inequality worsens',             effect: 'GDP per capita rises but many are worse off' },
          { cause: 'HDI rises due to improved education',         effect: 'Broader human development improves beyond just income' },
          { cause: 'Economic growth causes environmental damage', effect: 'GDP rises but genuine living standards may fall' },
          { cause: 'Country improves health system',              effect: 'Life expectancy rises; HDI improves' },
          { cause: 'Happiness survey shows declining wellbeing',  effect: 'Despite income growth, subjective quality of life has fallen' },
          { cause: 'PPP adjustments applied to GDP comparison',   effect: 'More accurate cross-country welfare comparison' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['HDI','Happy Planet Index','ONS Wellbeing Framework','CPI'],
        ans:  3,
        exp:  'HDI, Happy Planet Index, and the ONS Wellbeing Framework are all composite or multi-dimensional measures of living standards and wellbeing. The CPI measures inflation – not standard of living directly.'
      },
      {
        type: 'data_table',
        q:    'Use the table to identify which country has the highest HDI.',
        tableHeaders: ['Country','Life Expectancy Index','Education Index','Income Index','HDI (approx)'],
        tableData: [
          ['Alpha','0.90','0.88','0.85','?'],
          ['Beta','0.75','0.70','0.65','?'],
          ['Gamma','0.60','0.55','0.50','?'],
          ['Delta','0.85','0.80','0.70','?']
        ],
        opts: ['Alpha','Beta','Gamma','Delta'],
        ans:  0,
        exp:  'Alpha has the highest scores across all three dimensions (0.90, 0.88, 0.85). Its geometric mean HDI will be the highest. Beta and Delta are lower; Gamma is lowest.'
      },
      {
        type: 'match_pairs',
        q:    'Match each wellbeing concept to its description.',
        pairs: [
          { a: 'HDI',                        b: 'UN composite: life expectancy, education, income' },
          { a: 'Genuine Progress Indicator',  b: 'Adjusts GDP by subtracting costs like pollution and crime' },
          { a: 'Happy Planet Index',          b: 'Combines wellbeing, life expectancy, and ecological footprint' },
          { a: 'Kuznets curve',              b: 'Inverted-U relationship between income and inequality or pollution' },
          { a: 'Subjective wellbeing',        b: 'Self-reported life satisfaction and happiness measures' },
          { a: 'PPP adjustment',             b: 'Makes GDP comparable across countries by accounting for price levels' }
        ]
      }
    ]
  };

})();
