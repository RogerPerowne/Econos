(function () {

  window.ECONOS_QUIZ = {
    id:       'profits_shutdown_main',
    topicId:  'profits_shutdown_main',
    title:    'Revenue, Profit & Shutdown',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'profits_shutdown' }),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers TR, AR, MR, profit, and shutdown decisions',
    shortNames: [
      'TR formula','AR definition','Profit max rule','Subnormal profit','Shutdown SR',
      'MR curve','Cause-effect','Odd one out','Data table','Sequence'
    ],
    questions: [
      {
        id:   'q_ps_1',
        type: 'mcq',
        q:    'A firm sells 200 units at £8 each. What is its Total Revenue (TR)?',
        opts: ['£160','£1,600','£208','£1,200'],
        ans:  1,
        exp:  'TR = Price × Quantity = £8 × 200 = £1,600.'
      },
      {
        id:   'q_ps_2',
        type: 'mcq',
        q:    'Average Revenue (AR) is defined as:',
        opts: ['Total Revenue ÷ Price','Total Revenue ÷ Quantity','Price × Quantity','Marginal Revenue × Output'],
        ans:  1,
        exp:  'AR = TR / Q. For a price-taking firm, AR equals the market price.'
      },
      {
        id:   'q_ps_3',
        type: 'mcq',
        q:    'A profit-maximising firm produces where:',
        opts: ['TR is maximised','MC = AC','MR = MC','AR = AC'],
        ans:  2,
        exp:  'The golden rule: produce up to the point where MR = MC. Beyond this, each extra unit costs more than it earns.'
      },
      {
        id:   'q_ps_4',
        type: 'numeric_input',
        q:    'A firm has TR = £5,000 and TC = £5,800. Calculate the profit (use a negative number for a loss).',
        answer: -800,
        tolerance: 0,
        unit: '£',
        hint: 'Profit = TR − TC.',
        workingSteps: ['Profit = TR − TC','= £5,000 − £5,800','= −£800 (a loss of £800)']
      },
      {
        id:   'q_ps_5',
        type: 'mcq',
        q:    'In the short run, a firm should continue to produce even at a loss as long as:',
        opts: [
          'TR exceeds TC',
          'Price exceeds Average Variable Cost',
          'Price exceeds Average Total Cost',
          'MR is positive'
        ],
        ans:  1,
        exp:  'In the short run, fixed costs are sunk. As long as P > AVC, the firm covers its variable costs and contributes something toward fixed costs, so it is better to produce than shut down.'
      },
      {
        id:   'q_ps_6',
        type: 'elastic_sort',
        q:    'Sort the following revenue and profit concepts into the correct category.',
        categories: ['Revenue concept','Profit concept'],
        categoryLabels: ['Revenue concept','Profit concept'],
        goods: [
          { name: 'Total Revenue',       ans: 'Revenue concept' },
          { name: 'Marginal Revenue',    ans: 'Revenue concept' },
          { name: 'Average Revenue',     ans: 'Revenue concept' },
          { name: 'Normal profit',       ans: 'Profit concept' },
          { name: 'Supernormal profit',  ans: 'Profit concept' },
          { name: 'Subnormal profit',    ans: 'Profit concept' }
        ]
      },
      {
        id:   'q_ps_7',
        type: 'cause_effect',
        q:    'Match each cause to the correct effect on a firm\'s profit position.',
        pairs: [
          { cause: 'Market price falls below AVC',          effect: 'Firm shuts down in short run' },
          { cause: 'Market price equals AC',                effect: 'Firm earns normal profit' },
          { cause: 'MR exceeds MC on last unit produced',   effect: 'Firm should increase output' },
          { cause: 'TC rises but TR stays constant',        effect: 'Profit falls' },
          { cause: 'Firm operates in long-run equilibrium', effect: 'Supernormal profit is zero' },
          { cause: 'Price rises above AC',                  effect: 'Supernormal profit earned' }
        ]
      },
      {
        id:   'q_ps_8',
        type: 'odd_one_out',
        q:    'Which of the following is the odd one out?',
        opts: ['Normal profit','Supernormal profit','Subnormal profit','Marginal cost'],
        ans:  3,
        exp:  'Normal, supernormal, and subnormal profit are all types of profit outcome. Marginal cost is a cost concept, not a profit category.'
      },
      {
        id:   'q_ps_9',
        type: 'data_table',
        q:    'Use the table to answer: at which output is profit maximised?',
        tableHeaders: ['Output (Q)','TR (£)','TC (£)','Profit (£)'],
        tableData: [
          ['1','10','14','-4'],
          ['2','20','22','-2'],
          ['3','30','28','2'],
          ['4','40','36','4'],
          ['5','50','46','4'],
          ['6','60','58','2']
        ],
        opts: ['Q = 3','Q = 4','Q = 5','Q = 6'],
        ans:  1,
        exp:  'Profit is highest at Q=4 and Q=5 (both £4). When two outputs share the same maximum profit, the firm conventionally produces at the lower output where MR = MC.'
      },
      {
        id:   'q_ps_10',
        type: 'sequence',
        q:    'Place these steps in the correct order for a firm deciding whether to shut down in the short run.',
        items: [
          'Compare market price to Average Variable Cost',
          'Calculate Average Variable Cost (TVC ÷ Q)',
          'Identify Total Variable Cost at current output',
          'If P < AVC, shut down; if P ≥ AVC, continue producing'
        ],
        correctOrder: [2, 1, 0, 3]
      }
    ]
  };

})();
