(function () {

  window.ECONOS_QUIZ = {
    id:       'agg_supply_main',
    topicId:  'agg_supply_main',
    title:    'Aggregate Supply',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.routes.learn('aggregate-supply'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers SRAS vs LRAS, Classical vs Keynesian AS, and output gaps',
    shortNames: [
      'SRAS vs LRAS','Classical LRAS','Keynesian AS','SRAS shift','Output gap',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_as_1',
        type: 'mcq',
        q:    'The Short-Run Aggregate Supply (SRAS) curve slopes upward because:',
        opts: [
          'Higher prices attract more workers and capital into the economy',
          'Higher prices make it profitable for firms to increase output, even though some costs are fixed',
          'In the short run, all factor prices are perfectly flexible',
          'Higher prices reduce the cost of imports'
        ],
        ans:  1,
        exp:  'In the short run, some costs (especially wages) are sticky. When the price level rises, firms receive higher revenue but face unchanged costs – so they expand output. This gives an upward-sloping SRAS.'
      },
      {
        id:   'q_as_2',
        type: 'mcq',
        q:    'In the Classical model, the Long-Run Aggregate Supply (LRAS) curve is:',
        opts: [
          'Upward sloping like SRAS',
          'Downward sloping like AD',
          'Perfectly vertical at the full-employment output level',
          'Perfectly horizontal at a fixed price level'
        ],
        ans:  2,
        exp:  'Classical economists argue that in the long run, all prices and wages are fully flexible, so the economy always returns to full employment (potential output, Yf). LRAS is vertical – output is fixed by supply-side capacity.'
      },
      {
        id:   'q_as_3',
        type: 'mcq',
        q:    'In the Keynesian model, the AS curve is horizontal at low output levels because:',
        opts: [
          'All resources are fully employed and fully flexible',
          'There is so much spare capacity that output can rise without any upward price pressure',
          'The government controls all prices below potential output',
          'Investment determines prices rather than output'
        ],
        ans:  1,
        exp:  'Keynes argued that during a recession (with mass unemployment and idle capital), firms can expand output by hiring unemployed resources without bidding up wages or prices. The AS curve is flat in this range.'
      },
      {
        id:   'q_as_4',
        type: 'mcq',
        q:    'Which of the following would shift SRAS to the LEFT (upward)?',
        opts: [
          'A fall in oil prices',
          'An improvement in labour productivity',
          'A sharp rise in raw material costs',
          'A fall in corporation tax'
        ],
        ans:  2,
        exp:  'A rise in raw material costs (a negative supply shock) increases the cost of production at every level of output. Firms produce less at any given price – SRAS shifts left, pushing prices up and output down (stagflation risk).'
      },
      {
        id:   'q_as_5',
        type: 'numeric_input',
        q:    'Potential output is £2,000bn. Actual output is £1,700bn. What is the output gap (£bn) and state the sign (negative for a deflationary gap).',
        answer: -300,
        tolerance: 0,
        unit: '£bn',
        hint: 'Output gap = Actual output − Potential output.',
        workingSteps: ['Output gap = £1,700bn − £2,000bn = −£300bn (negative / deflationary gap)']
      },
      {
        id:   'q_as_6',
        type: 'categorise',
        q:    'Categorise each factor as shifting SRAS or shifting LRAS.',
        categories: ['Shifts SRAS','Shifts LRAS'],
        items: [
          { item: 'Rise in wages (nominal)',                    category: 'Shifts SRAS' },
          { item: 'Improvement in technology and productivity', category: 'Shifts LRAS' },
          { item: 'Fall in commodity prices',                   category: 'Shifts SRAS' },
          { item: 'Net immigration increasing labour force',    category: 'Shifts LRAS' },
          { item: 'Oil price spike',                            category: 'Shifts SRAS' },
          { item: 'Investment in infrastructure',               category: 'Shifts LRAS' }
        ]
      },
      {
        id:   'q_as_7',
        type: 'cause_effect',
        q:    'Match each cause to its effect on aggregate supply.',
        pairs: [
          { cause: 'Oil prices fall sharply',                   effect: 'SRAS shifts right; prices fall, output rises' },
          { cause: 'Labour productivity improves',              effect: 'LRAS shifts right; potential output increases' },
          { cause: 'Cost-push inflation hits wages and inputs', effect: 'SRAS shifts left; stagflation risk' },
          { cause: 'Economy produces above potential output',   effect: 'Positive output gap; upward wage and price pressure' },
          { cause: 'Government invests in worker training',     effect: 'Human capital rises; LRAS shifts right over time' },
          { cause: 'Recession leaves large negative output gap',effect: 'Deflationary pressure; unemployment above natural rate' }
        ]
      },
      {
        id:   'q_as_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out in the context of SRAS shifters?',
        opts: ['Change in input costs','Change in commodity prices','Change in potential output','Change in nominal wages'],
        ans:  2,
        exp:  'Changes in input costs, commodity prices, and nominal wages all shift SRAS by changing the cost of production in the short run. A change in potential output shifts LRAS – it is a long-run supply-side concept.'
      },
      {
        id:   'q_as_9',
        type: 'data_table',
        q:    'Use the data to identify which scenario involves stagflation.',
        tableHeaders: ['Scenario','Change in Price Level','Change in Real Output','Cause'],
        tableData: [
          ['A','Rises','Rises','AD increases'],
          ['B','Falls','Rises','AS increases'],
          ['C','Rises','Falls','SRAS shifts left (cost-push)'],
          ['D','Falls','Falls','AD decreases (recession)']
        ],
        opts: ['Scenario A','Scenario B','Scenario C','Scenario D'],
        ans:  2,
        exp:  'Stagflation is the combination of rising prices AND falling output – the worst of both worlds. Scenario C shows rising prices with falling output caused by a leftward SRAS shift (negative supply shock).'
      },
      {
        id:   'q_as_10',
        type: 'match_pairs',
        q:    'Match each aggregate supply concept to its description.',
        pairs: [
          { a: 'SRAS',              b: 'Short-run supply where some costs are fixed; upward sloping' },
          { a: 'LRAS (Classical)',  b: 'Vertical supply at full employment; determined by supply-side factors' },
          { a: 'Keynesian AS',      b: 'Horizontal range at low output; upward range; then vertical' },
          { a: 'Output gap',        b: 'Difference between actual and potential output' },
          { a: 'Stagflation',       b: 'Simultaneous rise in prices and fall in real output' },
          { a: 'Supply-side shock', b: 'Unexpected change in production costs that shifts SRAS' }
        ]
      }
    ]
  };

})();
