(function () {

  window.ECONOS_QUIZ = {
    id:       'labour_markets_main',
    topicId:  'labour_markets_main',
    title:    'Labour Markets',
    subtitle: 'Labour Markets & Distribution',
    backUrl:  TopicLoader.routes.learn('demand-for-labour'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers derived demand, MRP, wage differentials, and monopsony',
    shortNames: [
      'Derived demand','MRP theory','Wage differentials','Monopsony','Labour supply',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_lm_1',
        type: 'mcq',
        q:    'In labour markets, demand for labour is said to be "derived" because:',
        opts: [
          'Workers choose how many hours to offer',
          'Firms hire labour because of the demand for the goods or services it produces',
          'Wages are set by the government',
          'Labour supply determines the wage rate'
        ],
        ans:  1,
        exp:  'Derived demand means labour is not demanded for its own sake but because of the demand for the output it produces. If demand for a product rises, the demand for workers to produce it also rises.'
      },
      {
        id:   'q_lm_2',
        type: 'mcq',
        q:    'A firm maximises profit by hiring labour up to the point where:',
        opts: [
          'MRP = wage rate (W)',
          'MRP is at its maximum',
          'Total revenue product is highest',
          'Labour supply equals labour demand'
        ],
        ans:  0,
        exp:  'MRP (Marginal Revenue Product = MR × MPP) is the revenue earned by the last worker. The firm should hire until MRP = W. Beyond this, the last worker costs more than they generate.'
      },
      {
        id:   'q_lm_3',
        type: 'mcq',
        q:    'Which of the following would cause the demand for labour to increase?',
        opts: [
          'A fall in the wages paid to workers',
          'A fall in consumer demand for the firm\'s product',
          'An increase in worker productivity',
          'An increase in the cost of capital substitutes'
        ],
        ans:  2,
        exp:  'Higher worker productivity increases MRP – each worker now generates more revenue. The demand curve for labour (MRP curve) shifts right, meaning more workers are demanded at any given wage.'
      },
      {
        id:   'q_lm_4',
        type: 'mcq',
        q:    'A monopsony in the labour market is:',
        opts: [
          'A single seller of labour',
          'A single employer (buyer) of labour in a market',
          'A market with many competing employers',
          'A trade union that represents all workers'
        ],
        ans:  1,
        exp:  'A monopsony is a market with a single buyer – in labour markets, a single dominant employer. The monopsonist must raise wages to attract more workers, making the marginal cost of labour exceed the average wage.'
      },
      {
        id:   'q_lm_5',
        type: 'numeric_input',
        q:    'A firm employs 10 workers, each producing 5 units per hour. Each unit sells for £4. What is the Marginal Revenue Product (MRP) of the 10th worker per hour?',
        answer: 20,
        tolerance: 0,
        unit: '£',
        hint: 'MRP = MR × MPP. In a competitive market, MR = Price.',
        workingSteps: ['MPP = 5 units per hour','MR = £4 per unit (competitive market, so MR = P)','MRP = £4 × 5 = £20']
      },
      {
        id:   'q_lm_6',
        type: 'categorise',
        q:    'Categorise each factor as affecting labour demand or labour supply.',
        categories: ['Labour demand','Labour supply'],
        items: [
          { item: 'Change in consumer demand for the product',  category: 'Labour demand' },
          { item: 'Immigration of workers with relevant skills',category: 'Labour supply' },
          { item: 'Rise in worker productivity (MRP rises)',    category: 'Labour demand' },
          { item: 'Higher non-wage benefits offered elsewhere', category: 'Labour supply' },
          { item: 'Fall in price of capital substitutes',       category: 'Labour demand' },
          { item: 'Training and education increasing skills',   category: 'Labour supply' }
        ]
      },
      {
        id:   'q_lm_7',
        type: 'cause_effect',
        q:    'Match each cause to its effect in the labour market.',
        pairs: [
          { cause: 'Rise in demand for a product',                effect: 'MRP of workers rises; labour demand increases' },
          { cause: 'Workers\' productivity improves',              effect: 'MRP shifts right; firms hire more workers' },
          { cause: 'Monopsony employer dominates market',         effect: 'Wage set below competitive level; fewer workers hired' },
          { cause: 'Trade union wins wage rise',                  effect: 'Employers may reduce quantity of labour demanded' },
          { cause: 'Immigration increases labour supply',         effect: 'Downward pressure on wages in competitive market' },
          { cause: 'Automation replaces routine tasks',           effect: 'Demand for low-skill labour falls' }
        ]
      },
      {
        id:   'q_lm_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['MRP','Derived demand','Wage elasticity of supply','Consumer Price Index'],
        ans:  3,
        exp:  'MRP, derived demand, and wage elasticity of supply are all labour market concepts. The Consumer Price Index is a macroeconomic measure of inflation, not a labour market concept.'
      },
      {
        id:   'q_lm_9',
        type: 'data_table',
        q:    'Use the MRP table to identify the profit-maximising number of workers if the market wage is £40/hour.',
        tableHeaders: ['Workers','MPP (units/hr)','MR (£/unit)','MRP (£/hr)'],
        tableData: [
          ['1','12','5','60'],
          ['2','10','5','50'],
          ['3','9','5','45'],
          ['4','8','5','40'],
          ['5','7','5','35'],
          ['6','6','5','30']
        ],
        opts: ['2 workers','3 workers','4 workers','5 workers'],
        ans:  2,
        exp:  'Hire until MRP = wage rate. At 4 workers, MRP = £40 = W. Hiring a 5th gives MRP = £35 < £40, so only 4 workers are profit-maximising.'
      },
      {
        id:   'q_lm_10',
        type: 'match_pairs',
        q:    'Match each labour market term to its description.',
        pairs: [
          { a: 'Derived demand',         b: 'Labour demanded because of demand for the output it produces' },
          { a: 'MRP',                    b: 'Extra revenue generated by employing one more worker' },
          { a: 'Monopsony',              b: 'Single dominant employer of labour in a market' },
          { a: 'Wage differential',      b: 'Difference in pay between groups of workers or industries' },
          { a: 'Marginal labour cost',   b: 'Extra cost to a monopsonist of employing one more worker' },
          { a: 'Non-pecuniary benefits', b: 'Non-wage job features such as conditions, status, or flexibility' }
        ]
      }
    ]
  };

})();
