(function () {

  window.ECONOS_QUIZ = {
    id:       'poverty_main',
    topicId:  'poverty_main',
    title:    'Poverty',
    subtitle: 'Labour Markets & Distribution',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'poverty' }),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers absolute vs relative poverty, measurement, causes, and anti-poverty policies',
    shortNames: [
      'Absolute poverty','Relative poverty','Poverty trap','Causes','Policies',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_pov_1',
        type: 'mcq',
        q:    'Absolute poverty is defined as:',
        opts: [
          'Earning less than 60% of median income',
          'Lacking the basic necessities for human survival',
          'Having less wealth than the average citizen',
          'Being unable to afford luxury goods'
        ],
        ans:  1,
        exp:  'Absolute poverty means lacking the minimum resources necessary for basic survival — food, clean water, shelter. It is measured against a fixed standard (e.g., the World Bank\'s $2.15/day line).'
      },
      {
        id:   'q_pov_2',
        type: 'mcq',
        q:    'Relative poverty in the UK is most commonly defined as:',
        opts: [
          'Earning below the minimum wage',
          'Household income below 60% of the median after housing costs',
          'Being unable to afford a car or holiday',
          'Living below the UN absolute poverty line'
        ],
        ans:  1,
        exp:  'Relative poverty is a social concept: it measures deprivation relative to prevailing living standards. The UK defines it as household income below 60% of median income — it moves as average incomes change.'
      },
      {
        id:   'q_pov_3',
        type: 'mcq',
        q:    'The poverty trap occurs when:',
        opts: [
          'Wages fall because there are too many workers',
          'Taking paid work leaves someone little better off due to loss of benefits and taxes',
          'The minimum wage is set too low',
          'The government reduces benefits for all workers'
        ],
        ans:  1,
        exp:  'The poverty trap arises when moving into work results in loss of means-tested benefits and/or increased tax, leaving little net gain in disposable income. It reduces the financial incentive to seek employment.'
      },
      {
        id:   'q_pov_4',
        type: 'mcq',
        q:    'Which of the following is a supply-side policy to reduce poverty?',
        opts: [
          'Raising income tax on high earners',
          'Increasing means-tested benefits',
          'Investing in education and vocational training',
          'Expanding the welfare state'
        ],
        ans:  2,
        exp:  'Supply-side policies to reduce poverty address structural causes by improving workers\' employability. Education and training increase human capital, raising earning potential and reducing long-term poverty.'
      },
      {
        id:   'q_pov_5',
        type: 'numeric_input',
        q:    'The median household income is £36,000 per year. What is the relative poverty threshold at 60% of median income?',
        answer: 21600,
        tolerance: 0,
        unit: '£',
        hint: 'Threshold = 60% × median income.',
        workingSteps: ['Threshold = 0.60 × £36,000 = £21,600']
      },
      {
        id:   'q_pov_6',
        type: 'categorise',
        q:    'Categorise each cause of poverty as structural or cyclical.',
        categories: ['Structural poverty','Cyclical poverty'],
        items: [
          { item: 'Lack of skills or education',                 category: 'Structural poverty' },
          { item: 'Recession causing job losses',                category: 'Cyclical poverty' },
          { item: 'Discrimination in the labour market',         category: 'Structural poverty' },
          { item: 'Rise in unemployment during economic crisis', category: 'Cyclical poverty' },
          { item: 'Geographical isolation from labour markets',  category: 'Structural poverty' },
          { item: 'Firms cutting hours in downturn',             category: 'Cyclical poverty' }
        ]
      },
      {
        id:   'q_pov_7',
        type: 'cause_effect',
        q:    'Match each cause to its effect in the context of poverty.',
        pairs: [
          { cause: 'Worker enters low-paid employment',      effect: 'Means-tested benefits withdrawn; poverty trap activates' },
          { cause: 'National Minimum Wage increased',        effect: 'Some in-work poverty reduced for lowest earners' },
          { cause: 'Investment in early years education',    effect: 'Long-run reduction in intergenerational poverty' },
          { cause: 'Recession deepens',                      effect: 'Cyclical unemployment rises; relative poverty increases' },
          { cause: 'Universal Credit replaces legacy benefits',effect: 'Intended to make work pay more consistently' },
          { cause: 'High housing costs in urban areas',      effect: 'Disposable income after housing costs falls below threshold' }
        ]
      },
      {
        id:   'q_pov_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Absolute poverty','Relative poverty','Poverty trap','Gini coefficient'],
        ans:  3,
        exp:  'Absolute poverty, relative poverty, and the poverty trap are all directly related to the concept of poverty. The Gini coefficient is a measure of income inequality — a related but distinct concept.'
      },
      {
        id:   'q_pov_9',
        type: 'data_table',
        q:    'Use the table to identify which household is living in relative poverty (threshold = £21,000).',
        tableHeaders: ['Household','Annual income (£)','Housing costs (£)','Income after housing (£)'],
        tableData: [
          ['A','28,000','6,000','22,000'],
          ['B','24,000','5,000','19,000'],
          ['C','30,000','8,000','22,000'],
          ['D','26,000','4,000','22,000']
        ],
        opts: ['Household A','Household B','Household C','Household D'],
        ans:  1,
        exp:  'Household B has income after housing costs of £19,000, which is below the relative poverty threshold of £21,000. All other households are above the threshold after housing costs.'
      },
      {
        id:   'q_pov_10',
        type: 'match_pairs',
        q:    'Match each anti-poverty policy to how it works.',
        pairs: [
          { a: 'Universal Credit',          b: 'Single benefit that tapers smoothly as earnings rise' },
          { a: 'National Living Wage',      b: 'Mandatory wage floor to reduce in-work poverty' },
          { a: 'Free school meals',         b: 'In-kind benefit targeting food poverty in children' },
          { a: 'Early years education',     b: 'Supply-side investment in human capital to break intergenerational poverty' },
          { a: 'Housing benefit',           b: 'Income transfer to reduce poverty caused by high rents' },
          { a: 'Negative income tax',       b: 'System where low earners receive payments rather than pay tax' }
        ]
      }
    ]
  };

})();
