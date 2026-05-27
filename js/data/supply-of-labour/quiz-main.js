(function () {

  window.ECONOS_QUIZ = {
    title:    'Labour Supply, Trade Unions & NMW',
    subtitle: 'Labour Markets & Distribution',
    backUrl:  TopicLoader.routes.learn('supply-of-labour'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers labour supply, backward-bending curve, trade unions, and minimum wage effects',
    shortNames: [
      'Backward bend','Substitution effect','Income effect','Trade union','NMW effects',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'The backward-bending labour supply curve occurs when:',
        opts: [
          'Workers always supply more labour as wages rise',
          'At high enough wages, workers choose more leisure over work (income effect dominates)',
          'Employers cut wages and workers supply less labour',
          'Government sets a maximum working week'
        ],
        ans:  1,
        exp:  'At low wages, the substitution effect dominates: higher wages make leisure more expensive, so workers supply more hours. At high wages, the income effect dominates: workers are rich enough to "buy" more leisure – so supply falls.'
      },
      {
        type: 'mcq',
        q:    'The substitution effect of a wage rise means:',
        opts: [
          'Workers feel richer and work fewer hours',
          'Workers substitute work for leisure because each hour of leisure now costs more',
          'Firms substitute capital for labour',
          'Workers leave the market because wages are too high'
        ],
        ans:  1,
        exp:  'When wages rise, the opportunity cost of leisure increases. Workers substitute work for leisure – they supply more hours. This is the substitution effect and it always acts to increase labour supply.'
      },
      {
        type: 'mcq',
        q:    'A trade union\'s primary role in wage bargaining is to:',
        opts: [
          'Reduce the supply of labour to the market',
          'Act as a monopoly seller of labour, pushing wages above competitive levels',
          'Maximise employment by accepting lower wages',
          'Set prices in product markets on behalf of workers'
        ],
        ans:  1,
        exp:  'By collectively organising workers, a trade union acts as a monopoly supplier of labour. It can push for wages above the free-market equilibrium, potentially at the cost of lower employment if demand is elastic.'
      },
      {
        type: 'mcq',
        q:    'In a monopsony labour market, a National Minimum Wage set above the monopsony wage can:',
        opts: [
          'Reduce both wages and employment',
          'Raise wages and employment simultaneously',
          'Have no effect on the labour market',
          'Always reduce employment'
        ],
        ans:  1,
        exp:  'A monopsonist restricts employment to keep wages low. A minimum wage set between the monopsony wage and competitive wage forces the monopsonist to pay more – and because MLC now equals the minimum wage, it may actually hire more workers.'
      },
      {
        type: 'numeric_input',
        q:    'Before a minimum wage, workers earn £7/hr and 1,000 workers are employed. After a minimum wage of £9/hr, employment falls to 900. What is the change in the total wage bill (£)?',
        answer: 1100,
        tolerance: 50,
        unit: '£/hr',
        hint: 'Change = new wage bill − old wage bill.',
        workingSteps: ['Old wage bill = £7 × 1,000 = £7,000/hr','New wage bill = £9 × 900 = £8,100/hr','Change = £8,100 − £7,000 = +£1,100/hr']
      },
      {
        type: 'categorise',
        q:    'Categorise each effect of a National Minimum Wage as a potential benefit or potential cost.',
        categories: ['Potential benefit','Potential cost'],
        items: [
          { item: 'Higher disposable income for low-paid workers',  category: 'Potential benefit' },
          { item: 'Some employment may be lost in competitive firms',category: 'Potential cost' },
          { item: 'Reduction in in-work poverty',                   category: 'Potential benefit' },
          { item: 'Firms\' labour costs rise, squeezing profits',   category: 'Potential cost' },
          { item: 'Increased incentive to seek work',               category: 'Potential benefit' },
          { item: 'Risk of inflation if firms pass on higher costs', category: 'Potential cost' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each cause to its effect in labour supply and minimum wage contexts.',
        pairs: [
          { cause: 'Wage rises beyond a critical level',           effect: 'Income effect dominates; labour supply bends backward' },
          { cause: 'Trade union achieves wage rise',               effect: 'Wage rises above competitive equilibrium' },
          { cause: 'NMW set in competitive market above W*',       effect: 'Excess supply of labour (unemployment) emerges' },
          { cause: 'NMW set in monopsony market above W_m',        effect: 'Both wages and employment can rise' },
          { cause: 'Workers\' reservation wage increases',         effect: 'Labour supply falls at any given wage' },
          { cause: 'Working Tax Credit reduces as earnings rise',  effect: 'Poverty trap: effective marginal tax rate very high' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Backward-bending supply','Income effect','Substitution effect','Marginal Revenue Product'],
        ans:  3,
        exp:  'The backward-bending supply curve, the income effect, and the substitution effect are all related to worker labour supply decisions. MRP is a labour demand concept (the value of an additional worker to the firm).'
      },
      {
        type: 'data_table',
        q:    'Use the table to identify at which wage the backward-bending supply curve begins to bend backward.',
        tableHeaders: ['Wage (£/hr)','Hours supplied/week'],
        tableData: [
          ['6','20'],
          ['8','28'],
          ['10','35'],
          ['12','38'],
          ['14','36'],
          ['16','32']
        ],
        opts: ['£8/hr','£10/hr','£12/hr','£14/hr'],
        ans:  2,
        exp:  'Hours supplied peak at £12/hr (38 hours). After £12, hours fall (to 36 at £14, then 32 at £16) – the income effect dominates the substitution effect. The backward bend begins at £12/hr.'
      },
      {
        type: 'match_pairs',
        q:    'Match each concept to its correct description.',
        pairs: [
          { a: 'Substitution effect (labour)',   b: 'Higher wage makes leisure relatively more expensive; worker works more' },
          { a: 'Income effect (labour)',          b: 'Higher wage means worker is richer; "buys" more leisure, works less' },
          { a: 'Trade union',                    b: 'Monopoly seller of labour that negotiates above-market wages' },
          { a: 'National Minimum Wage',          b: 'Legally set wage floor below which employers cannot pay' },
          { a: 'Bilateral monopoly',             b: 'Single employer (monopsony) faces a single union (monopoly seller)' },
          { a: 'Reservation wage',               b: 'Minimum wage below which a worker will not supply any labour' }
        ]
      }
    ]
  };

})();
