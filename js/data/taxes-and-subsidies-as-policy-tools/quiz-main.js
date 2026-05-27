(function () {

  window.ECONOS_QUIZ = {
    id:       'taxes_subsidies_policy_main',
    topicId:  'taxes_subsidies_policy_main',
    title:    'Taxes & Subsidies as Policy Tools',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.routes.learn('taxes-and-subsidies-as-policy-tools'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers taxation principles, Laffer curve, subsidies, incidence, and policy evaluation',
    shortNames: [
      'Tax principles','Direct vs indirect','Laffer curve','Tax incidence','Subsidies',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_tsp_1',
        type: 'mcq',
        q:    'A progressive tax is one where:',
        opts: [
          'Everyone pays the same flat rate regardless of income',
          'The percentage of income paid in tax rises as income rises',
          'Higher earners pay a smaller share of their income in tax',
          'Only spending, not income, is taxed'
        ],
        ans:  1,
        exp:  'Progressive taxes take a rising proportion of income as income increases (e.g., UK income tax with higher rate bands). They help reduce post-tax income inequality.'
      },
      {
        id:   'q_tsp_2',
        type: 'mcq',
        q:    'The Laffer curve illustrates that:',
        opts: [
          'Higher tax rates always raise more tax revenue',
          'There is an optimal tax rate beyond which further increases reduce total revenue',
          'Tax cuts always pay for themselves through higher growth',
          'VAT is always more efficient than income tax'
        ],
        ans:  1,
        exp:  'The Laffer curve shows a non-linear relationship between the tax rate and tax revenue. Beyond a certain rate, higher taxes reduce work incentives so much that total revenue falls. The optimal rate maximises revenue.'
      },
      {
        id:   'q_tsp_3',
        type: 'mcq',
        q:    'Tax incidence refers to:',
        opts: [
          'The legal liability to pay the tax',
          'The effective burden of a tax – who actually bears the cost in reduced purchasing power',
          'The rate at which tax revenue grows',
          'The compliance cost of filing tax returns'
        ],
        ans:  1,
        exp:  'Tax incidence is the economic burden of a tax – who really pays it in terms of reduced welfare. If demand is inelastic, consumers bear most of the incidence of an indirect tax; if supply is inelastic, producers bear more.'
      },
      {
        id:   'q_tsp_4',
        type: 'mcq',
        q:    'A government subsidy to a firm will:',
        opts: [
          'Shift the supply curve leftward, raising prices',
          'Shift the supply curve rightward, lowering prices and increasing output',
          'Shift the demand curve rightward, raising prices',
          'Reduce consumer surplus by cutting output'
        ],
        ans:  1,
        exp:  'A production subsidy lowers producers\' costs, shifting the supply curve to the right. This increases output and reduces the market price – part of the subsidy is passed to consumers.'
      },
      {
        id:   'q_tsp_5',
        type: 'numeric_input',
        q:    'A £3 indirect tax is imposed. PED = −0.5 and PES = 1.0. What is the consumer\'s share of the tax burden (£)?',
        answer: 2,
        tolerance: 0.1,
        unit: '£',
        hint: 'Consumer share = PES/(PES + |PED|) × tax.',
        workingSteps: ['Consumer share = 1.0/(1.0 + 0.5) × £3 = (1.0/1.5) × £3 = £2']
      },
      {
        id:   'q_tsp_6',
        type: 'categorise',
        q:    'Categorise each tax as progressive, proportional, or regressive.',
        categories: ['Progressive','Proportional','Regressive'],
        items: [
          { item: 'UK income tax with higher rate bands',       category: 'Progressive' },
          { item: 'Flat rate 20% tax on all income',           category: 'Proportional' },
          { item: 'VAT (fixed rate on spending)',               category: 'Regressive' },
          { item: 'Inheritance tax above a threshold',         category: 'Progressive' },
          { item: 'Excise duty on fuel per litre',             category: 'Regressive' },
          { item: 'Flat corporate profit tax rate',            category: 'Proportional' }
        ]
      },
      {
        id:   'q_tsp_7',
        type: 'cause_effect',
        q:    'Match each tax or subsidy policy to its effect.',
        pairs: [
          { cause: 'Indirect tax imposed on inelastic good',     effect: 'Producers absorb little; consumers bear most of the burden' },
          { cause: 'Subsidy given to renewable energy producers', effect: 'Supply increases; price falls; output rises' },
          { cause: 'Income tax rate cut for low earners',        effect: 'Disposable income rises; consumption increases' },
          { cause: 'Carbon tax introduced',                      effect: 'Firms cut emissions; negative externality internalised' },
          { cause: 'Higher corporation tax',                     effect: 'Post-tax profit falls; may reduce business investment' },
          { cause: 'Laffer curve effect activates',              effect: 'Rate rise beyond optimal reduces total tax revenue' }
        ]
      },
      {
        id:   'q_tsp_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Progressive tax','Regressive tax','Proportional tax','Multiplier effect'],
        ans:  3,
        exp:  'Progressive, regressive, and proportional are all types of tax classified by how their share of income varies. The multiplier effect is a macroeconomic concept about how spending injections amplify national income.'
      },
      {
        id:   'q_tsp_9',
        type: 'data_table',
        q:    'Use the table to calculate the tax rate paid as a % of income and classify the tax system.',
        tableHeaders: ['Income (£)','Tax paid (£)','Tax rate (%)','Tax type'],
        tableData: [
          ['20,000','2,000','10','?'],
          ['40,000','6,000','15','?'],
          ['80,000','20,000','25','?'],
          ['100,000','30,000','30','?']
        ],
        opts: [
          'Progressive – tax rate rises with income',
          'Regressive – tax rate falls with income',
          'Proportional – tax rate is the same for all',
          'Cannot be determined without more data'
        ],
        ans:  0,
        exp:  'Tax rates rise from 10% at £20k to 30% at £100k – a rising share of income as income increases. This is a progressive tax system.'
      },
      {
        id:   'q_tsp_10',
        type: 'match_pairs',
        q:    'Match each tax/subsidy concept to its description.',
        pairs: [
          { a: 'Laffer curve',       b: 'Shows optimal tax rate that maximises government revenue' },
          { a: 'Tax incidence',      b: 'Distribution of tax burden between consumers and producers' },
          { a: 'Progressive tax',    b: 'Tax rate rises as income rises' },
          { a: 'Regressive tax',     b: 'Lower earners pay a higher share of income than higher earners' },
          { a: 'Subsidy',            b: 'Government payment to lower producers\' costs and boost output' },
          { a: 'Hypothecated tax',   b: 'Tax revenue ring-fenced for a specific purpose' }
        ]
      }
    ]
  };

})();
