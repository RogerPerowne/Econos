(function () {

  window.ECONOS_QUIZ = {
    id:       'business_objectives_main',
    topicId:  'business_objectives_main',
    title:    'Business Objectives',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'business_objectives' }),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers profit maximisation, satisficing, sales and revenue goals, and CSR',
    shortNames: [
      'Profit maximisation','Sales maximisation','Revenue maximisation','Satisficing','CSR',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_bo_1',
        type: 'mcq',
        q:    'A profit-maximising firm produces where:',
        opts: ['TR is at its peak','MR = MC','P = AC','MR = 0'],
        ans:  1,
        exp:  'Profit is maximised at the output where Marginal Revenue equals Marginal Cost. Producing beyond this means the cost of the extra unit exceeds the revenue it brings.'
      },
      {
        id:   'q_bo_2',
        type: 'mcq',
        q:    'Sales maximisation (Williamson) involves producing where:',
        opts: [
          'Profit is at its peak',
          'MR = 0 (Total Revenue is maximised)',
          'Price equals average cost',
          'Output is where marginal cost equals price'
        ],
        ans:  1,
        exp:  'A sales-maximising manager produces until MR = 0, the output level where Total Revenue is highest. This is beyond the profit-maximising output, so it yields lower profit but higher output and market share.'
      },
      {
        id:   'q_bo_3',
        type: 'mcq',
        q:    'Revenue maximisation differs from profit maximisation because:',
        opts: [
          'Revenue max produces less output at a higher price',
          'Revenue max produces more output at a lower price, sacrificing profit',
          'Revenue max occurs where price equals marginal cost',
          'Revenue max is identical to profit max in the long run'
        ],
        ans:  1,
        exp:  'Profit max occurs where MR = MC; revenue max where MR = 0. The revenue-maximising output is greater, with a lower price. Profits are lower but sales volumes and revenue are at their peak.'
      },
      {
        id:   'q_bo_4',
        type: 'mcq',
        q:    'Satisficing behaviour (Simon) means a firm:',
        opts: [
          'Aims to maximise profit above all other goals',
          'Targets "good enough" profit to keep stakeholders content, not maximum profit',
          'Produces only to satisfy consumer demand regardless of profit',
          'Sets prices to satisfy the regulator'
        ],
        ans:  1,
        exp:  'Herbert Simon argued that firms operate with bounded rationality. Instead of maximising, managers aim for satisfactory levels of profit – enough to satisfy shareholders, workers, and managers – and no more.'
      },
      {
        id:   'q_bo_5',
        type: 'numeric_input',
        q:    'A firm can produce at MR=MC giving profit of £400, or maximise revenue (MR=0) with profit of £150. What is the profit sacrifice from choosing revenue maximisation?',
        answer: 250,
        tolerance: 0,
        unit: '£',
        hint: 'Profit sacrifice = π (profit max) − π (revenue max).',
        workingSteps: ['Sacrifice = £400 − £150 = £250']
      },
      {
        id:   'q_bo_6',
        type: 'categorise',
        q:    'Categorise each business objective as primarily shareholder-oriented or stakeholder-oriented.',
        categories: ['Shareholder-oriented','Stakeholder-oriented'],
        items: [
          { item: 'Profit maximisation',                category: 'Shareholder-oriented' },
          { item: 'Corporate social responsibility',    category: 'Stakeholder-oriented' },
          { item: 'Dividend maximisation',              category: 'Shareholder-oriented' },
          { item: 'Employee welfare programmes',        category: 'Stakeholder-oriented' },
          { item: 'Short-run earnings per share growth',category: 'Shareholder-oriented' },
          { item: 'Environmental sustainability goals', category: 'Stakeholder-oriented' }
        ]
      },
      {
        id:   'q_bo_7',
        type: 'cause_effect',
        q:    'Match each objective to its effect on firm behaviour.',
        pairs: [
          { cause: 'Firm targets profit maximisation',      effect: 'Produces at MR = MC; higher price, lower output' },
          { cause: 'Manager pursues sales maximisation',    effect: 'Output expands; price falls; profit sacrificed' },
          { cause: 'Firm adopts satisficing approach',      effect: 'Produces at acceptable profit; managerial slack may develop' },
          { cause: 'Firm prioritises CSR',                  effect: 'Costs may rise; brand reputation and sales may improve' },
          { cause: 'Principal-agent conflict exists',       effect: 'Managers may pursue own goals rather than shareholders\'' },
          { cause: 'Revenue maximisation target set',       effect: 'Output where MR = 0; TR at its peak' }
        ]
      },
      {
        id:   'q_bo_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Sales maximisation','Profit maximisation','Revenue maximisation','Satisficing','CSR'],
        ans:  4,
        exp:  'Sales maximisation, profit maximisation, revenue maximisation, and satisficing are all firm-level quantity/profit objectives. CSR (Corporate Social Responsibility) is about wider social and ethical goals, not an output or profit target.'
      },
      {
        id:   'q_bo_9',
        type: 'data_table',
        q:    'Use the table to identify the profit-maximising and revenue-maximising outputs.',
        tableHeaders: ['Output','Price (£)','TR (£)','MR (£)','TC (£)','MC (£)','Profit (£)'],
        tableData: [
          ['10','50','500','–','300','–','200'],
          ['20','46','920','42','420','12','500'],
          ['30','42','1,260','34','600','18','660'],
          ['40','38','1,520','26','840','24','680'],
          ['50','34','1,700','18','1,100','26','600'],
          ['60','30','1,800','10','1,380','28','420'],
          ['70','26','1,820','2','1,700','32','120'],
          ['80','22','1,760','-6','2,080','38','-320']
        ],
        opts: [
          'Profit max Q=40; Revenue max Q=70',
          'Profit max Q=30; Revenue max Q=60',
          'Profit max Q=50; Revenue max Q=80',
          'Profit max Q=40; Revenue max Q=60'
        ],
        ans:  0,
        exp:  'Profit is highest (£680) at Q=40. TR is highest (£1,820) at Q=70 where MR ≈ 0. So profit-max Q=40, revenue-max Q=70.'
      },
      {
        id:   'q_bo_10',
        type: 'match_pairs',
        q:    'Match each business objective concept to its description.',
        pairs: [
          { a: 'Profit maximisation',       b: 'Produce where MR = MC to earn the highest possible profit' },
          { a: 'Sales maximisation',        b: 'Expand output until MR = 0 to maximise market share' },
          { a: 'Revenue maximisation',      b: 'Produce where total revenue is at its peak (MR = 0)' },
          { a: 'Satisficing',               b: 'Target good-enough profit rather than maximum' },
          { a: 'Principal-agent problem',   b: 'Conflict between owners\' and managers\' objectives' },
          { a: 'Corporate social responsibility', b: 'Firm considers obligations to wider society beyond profit' }
        ]
      }
    ]
  };

})();
