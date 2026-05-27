(function () {

  window.ECONOS_QUIZ = {
    id:       'ad_main',
    topicId:  'ad_main',
    title:    'Aggregate Demand',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.routes.learn('aggregate-demand'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers AD components, shifts, the multiplier, and macroeconomic equilibrium',
    shortNames: [
      'AD formula','AD slope','Consumption drivers','Investment','Multiplier',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_ad_1',
        type: 'mcq',
        q:    'The correct formula for Aggregate Demand is:',
        opts: ['AD = C + I + G + (X – M)','AD = C + I + G – (X + M)','AD = C – I + G + (X + M)','AD = C + I – G + (X – M)'],
        ans:  0,
        exp:  'AD = Consumption + Investment + Government spending + (Exports − Imports). The net export term (X − M) is added because exports inject spending into the economy while imports represent a withdrawal.'
      },
      {
        id:   'q_ad_2',
        type: 'mcq',
        q:    'The AD curve slopes downward because:',
        opts: [
          'Higher prices reduce the real value of money holdings and make exports less competitive',
          'Higher prices always reduce wages',
          'Firms supply less at higher prices',
          'Investment always falls when prices rise'
        ],
        ans:  0,
        exp:  'Three effects explain the downward slope: (1) the wealth effect – higher prices erode real wealth; (2) the interest rate effect – higher prices raise money demand and interest rates; (3) the international competitiveness effect – exports become dearer, imports cheaper.'
      },
      {
        id:   'q_ad_3',
        type: 'mcq',
        q:    'Which of the following would shift the AD curve to the RIGHT?',
        opts: [
          'A rise in income tax rates',
          'An increase in consumer confidence',
          'A fall in government spending',
          'An appreciation of the exchange rate'
        ],
        ans:  1,
        exp:  'Higher consumer confidence encourages more spending (rising C). This shifts the entire AD curve to the right – more real output is demanded at every price level.'
      },
      {
        id:   'q_ad_4',
        type: 'mcq',
        q:    'The Keynesian multiplier is defined as:',
        opts: [
          'The change in AD divided by the change in government spending',
          '1 ÷ (1 − MPC) or equivalently 1 ÷ MPS',
          'The change in investment divided by the change in saving',
          'MPC ÷ (1 − MPS)'
        ],
        ans:  1,
        exp:  'The multiplier = 1/(1−MPC) = 1/MPS. An initial injection of spending is re-spent round after round, each time losing a fraction (MPS) as leakages. The final increase in national income is a multiple of the initial injection.'
      },
      {
        id:   'q_ad_5',
        type: 'numeric_input',
        q:    'The MPC = 0.75. The government increases spending by £200m. What is the total increase in national income (£m)?',
        answer: 800,
        tolerance: 0,
        unit: '£m',
        hint: 'Multiplier = 1/(1−MPC). Total change = multiplier × injection.',
        workingSteps: ['Multiplier = 1/(1−0.75) = 1/0.25 = 4','Total change = 4 × £200m = £800m']
      },
      {
        id:   'q_ad_6',
        type: 'categorise',
        q:    'Categorise each factor as a determinant of Consumption or Investment.',
        categories: ['Consumption','Investment'],
        items: [
          { item: 'Consumer confidence',                         category: 'Consumption' },
          { item: 'Expected rate of return on a project',        category: 'Investment' },
          { item: 'Household real disposable income',            category: 'Consumption' },
          { item: 'Cost of borrowing (interest rate)',           category: 'Investment' },
          { item: 'Wealth effects from rising house prices',     category: 'Consumption' },
          { item: 'Business confidence (animal spirits)',        category: 'Investment' }
        ]
      },
      {
        id:   'q_ad_7',
        type: 'cause_effect',
        q:    'Match each cause to its effect on Aggregate Demand.',
        pairs: [
          { cause: 'Government cuts income tax',           effect: 'Household disposable income rises; C increases' },
          { cause: 'Interest rates fall',                  effect: 'Borrowing cheaper; C and I both increase' },
          { cause: 'Exchange rate appreciates',            effect: 'Exports become less competitive; X falls, M rises; AD falls' },
          { cause: 'Consumer confidence collapses',        effect: 'C falls sharply; AD shifts left' },
          { cause: 'Government increases infrastructure spending', effect: 'G rises; multiplier effect boosts AD further' },
          { cause: 'Trading partner economies grow rapidly',effect: 'Demand for exports rises; X increases; AD shifts right' }
        ]
      },
      {
        id:   'q_ad_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out in the AD formula?',
        opts: ['Consumption (C)','Investment (I)','Taxation (T)','Government spending (G)'],
        ans:  2,
        exp:  'C, I, and G are all direct components in the AD = C + I + G + (X−M) formula. Taxation affects AD indirectly by influencing consumption – but T itself does not appear as a component of AD.'
      },
      {
        id:   'q_ad_9',
        type: 'data_table',
        q:    'Use the data to calculate the multiplier and the final change in national income from a £50bn investment injection.',
        tableHeaders: ['MPC','MPS','Multiplier','Change in Y (£bn) from £50bn injection'],
        tableData: [
          ['0.5','0.5','?','?'],
          ['0.6','0.4','?','?'],
          ['0.8','0.2','?','?'],
          ['0.9','0.1','?','?']
        ],
        opts: [
          'MPC=0.8 gives multiplier of 5 and ΔY = £250bn',
          'MPC=0.9 gives multiplier of 10 and ΔY = £500bn',
          'MPC=0.6 gives multiplier of 2.5 and ΔY = £125bn',
          'MPC=0.5 gives multiplier of 2 and ΔY = £100bn'
        ],
        ans:  0,
        exp:  'Multiplier = 1/MPS. For MPC=0.8, MPS=0.2, multiplier = 1/0.2 = 5, ΔY = 5 × £50bn = £250bn. Option A is correct.'
      },
      {
        id:   'q_ad_10',
        type: 'match_pairs',
        q:    'Match each AD concept to its correct description.',
        pairs: [
          { a: 'Multiplier',             b: 'The amplified effect of an injection on final national income' },
          { a: 'MPC',                    b: 'Fraction of additional income that is spent rather than saved' },
          { a: 'Wealth effect',          b: 'Rising asset prices boost consumer spending and AD' },
          { a: 'Injection',              b: 'Spending added to the circular flow: G, I, or X' },
          { a: 'Leakage',                b: 'Withdrawal from the circular flow: S, T, or M' },
          { a: 'Animal spirits',         b: 'Keynes\'s term for business confidence driving investment' }
        ]
      }
    ]
  };

})();
