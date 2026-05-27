(function () {

  window.ECONOS_QUIZ = {
    title:    'Income & Wealth Inequality',
    subtitle: 'Labour Markets & Distribution',
    backUrl:  TopicLoader.routes.learn('inequality'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers Lorenz curve, Gini coefficient, causes, and redistribution policies',
    shortNames: [
      'Lorenz curve','Gini coefficient','Causes of inequality','Wealth vs income','Redistribution',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'The Lorenz curve shows:',
        opts: [
          'The relationship between price and quantity demanded',
          'The cumulative share of income received by cumulative share of population',
          'The trade-off between inflation and unemployment',
          'The distribution of wealth among countries'
        ],
        ans:  1,
        exp:  'The Lorenz curve plots cumulative % of income (y-axis) against cumulative % of population (x-axis), ranked from poorest to richest. The further the curve bows from the diagonal, the greater the inequality.'
      },
      {
        type: 'mcq',
        q:    'A Gini coefficient of 0 means:',
        opts: [
          'Complete inequality – one person has all income',
          'The Lorenz curve lies along the horizontal axis',
          'Perfect equality – everyone has the same income',
          'The economy has zero GDP'
        ],
        ans:  2,
        exp:  'Gini = 0 means perfect equality (Lorenz curve = diagonal). Gini = 1 means perfect inequality (one person has all income). Most countries have Gini coefficients between 0.25 and 0.60.'
      },
      {
        type: 'mcq',
        q:    'Which of the following is a cause of income inequality?',
        opts: [
          'Progressive income tax',
          'Means-tested benefits',
          'Differences in human capital and education',
          'Universal basic income'
        ],
        ans:  2,
        exp:  'Human capital differences (education, skills, experience) lead to wage differentials. Workers with higher human capital earn more, widening the distribution of income.'
      },
      {
        type: 'mcq',
        q:    'Wealth inequality is generally greater than income inequality because:',
        opts: [
          'Wages are rising faster than asset prices',
          'Wealth accumulates over generations and assets generate returns that compound',
          'Income includes benefits but wealth does not',
          'Governments tax wealth more heavily than income'
        ],
        ans:  1,
        exp:  'Wealth (assets minus liabilities) compounds over time – returns on wealth generate more wealth. Intergenerational transfers (inheritance) further concentrate wealth at the top, widening the distribution beyond income inequality.'
      },
      {
        type: 'numeric_input',
        q:    'If the area between the Lorenz curve and the line of equality is 0.18 and the total area below the diagonal is 0.5, what is the Gini coefficient?',
        answer: 0.36,
        tolerance: 0.01,
        unit: '',
        hint: 'Gini = (area between Lorenz curve and diagonal) ÷ (total area below diagonal).',
        workingSteps: ['Gini = 0.18 ÷ 0.50 = 0.36']
      },
      {
        type: 'categorise',
        q:    'Categorise each policy as a method of reducing income inequality or wealth inequality.',
        categories: ['Reduces income inequality','Reduces wealth inequality'],
        items: [
          { item: 'Progressive income tax',          category: 'Reduces income inequality' },
          { item: 'Inheritance tax',                 category: 'Reduces wealth inequality' },
          { item: 'Higher minimum wage',             category: 'Reduces income inequality' },
          { item: 'Mansion tax / annual wealth levy',category: 'Reduces wealth inequality' },
          { item: 'State pension and benefits',      category: 'Reduces income inequality' },
          { item: 'Capital gains tax on assets',     category: 'Reduces wealth inequality' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each cause to its effect on inequality.',
        pairs: [
          { cause: 'Technological change displaces low-skill jobs', effect: 'Income gap between high- and low-skill workers widens' },
          { cause: 'Progressive income tax rates raised',           effect: 'Post-tax income inequality falls' },
          { cause: 'Asset prices (housing, shares) rise sharply',  effect: 'Wealth inequality increases' },
          { cause: 'Universal basic education improves',           effect: 'Human capital spread more equally; wage gap narrows' },
          { cause: 'Inheritance passes wealth between generations', effect: 'Wealth concentrates at top; inequality persists' },
          { cause: 'Globalisation increases returns to capital',   effect: 'Share of income going to profits rises vs wages' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Lorenz curve','Gini coefficient','Decile ratio','Consumer Price Index'],
        ans:  3,
        exp:  'The Lorenz curve, Gini coefficient, and decile ratio (ratio of top 10% income to bottom 10%) are all measures of income or wealth inequality. The Consumer Price Index measures inflation.'
      },
      {
        type: 'data_table',
        q:    'Use the table to identify which country has the highest income inequality.',
        tableHeaders: ['Country','Gini Coefficient'],
        tableData: [
          ['Denmark','0.29'],
          ['United Kingdom','0.36'],
          ['United States','0.41'],
          ['South Africa','0.63']
        ],
        opts: ['Denmark','United Kingdom','United States','South Africa'],
        ans:  3,
        exp:  'A higher Gini coefficient means greater inequality. South Africa\'s Gini of 0.63 is the highest in the table – it has the most unequal income distribution shown.'
      },
      {
        type: 'match_pairs',
        q:    'Match each concept to its correct description.',
        pairs: [
          { a: 'Lorenz curve',         b: 'Graph plotting cumulative income share against cumulative population share' },
          { a: 'Gini coefficient',     b: 'Ratio of area between Lorenz curve and diagonal to total area under diagonal' },
          { a: 'Income',               b: 'Flow of earnings from work, benefits, and investments over time' },
          { a: 'Wealth',               b: 'Stock of assets minus liabilities at a point in time' },
          { a: 'Regressive tax',       b: 'Takes a larger share of income from lower earners' },
          { a: 'Progressive tax',      b: 'Takes a larger share of income from higher earners' }
        ]
      }
    ]
  };

})();
