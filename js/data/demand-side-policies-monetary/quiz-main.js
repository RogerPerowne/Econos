(function () {

  window.ECONOS_QUIZ = {
    id:       'monetary_main',
    topicId:  'monetary_main',
    title:    'Monetary Policy',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.routes.learn('demand-side-policies-monetary'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers interest rate transmission, QE, the MPC, and limits of monetary policy',
    shortNames: [
      'Interest rate tool','Transmission channels','QE','Bank of England MPC','Limits of MP',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_mp_1',
        type: 'mcq',
        q:    'The Bank of England\'s primary instrument of monetary policy is:',
        opts: [
          'Government spending levels',
          'The Bank Rate (base interest rate)',
          'The exchange rate',
          'Income tax thresholds'
        ],
        ans:  1,
        exp:  'The Bank of England\'s Monetary Policy Committee (MPC) sets the Bank Rate – the base interest rate. Changes in Bank Rate ripple through the economy via multiple transmission channels to influence inflation and output.'
      },
      {
        id:   'q_mp_2',
        type: 'mcq',
        q:    'If the Bank of England raises interest rates, the expected effect on aggregate demand is:',
        opts: [
          'AD increases because saving becomes less attractive',
          'AD falls because borrowing becomes more expensive and saving more attractive',
          'AD is unaffected because only fiscal policy influences spending',
          'AD increases because exports become more competitive'
        ],
        ans:  1,
        exp:  'Higher interest rates raise the cost of borrowing (reducing consumption and investment) and reward saving (reducing current spending). Both channels reduce aggregate demand, putting downward pressure on inflation.'
      },
      {
        id:   'q_mp_3',
        type: 'mcq',
        q:    'Quantitative Easing (QE) involves the Bank of England:',
        opts: [
          'Cutting income taxes to boost disposable income',
          'Purchasing government and corporate bonds to inject money into the financial system',
          'Fixing the exchange rate at a lower level',
          'Requiring banks to hold higher capital reserves'
        ],
        ans:  1,
        exp:  'QE is an unconventional monetary policy: the central bank creates electronic money and uses it to buy assets (mainly government bonds). This pushes down long-term interest rates and increases the money supply, stimulating lending and spending.'
      },
      {
        id:   'q_mp_4',
        type: 'mcq',
        q:    'A limitation of using interest rate cuts to stimulate the economy is:',
        opts: [
          'Interest rates can only be raised, not cut',
          'At very low rates (zero lower bound), further cuts have little effect on spending',
          'Lower rates always cause hyperinflation',
          'The Bank of England cannot change rates without Treasury approval'
        ],
        ans:  1,
        exp:  'The zero lower bound problem: once rates reach near 0%, cutting further has diminishing returns. Banks may be unwilling to lend, and consumers unwilling to borrow regardless of rates – a "liquidity trap" in Keynesian terms.'
      },
      {
        id:   'q_mp_5',
        type: 'numeric_input',
        q:    'Bank Rate rises from 1.5% to 4.0%. A household has a variable-rate mortgage of £200,000. Approximately how much more do they pay per year in interest (£)?',
        answer: 5000,
        tolerance: 100,
        unit: '£',
        hint: 'Extra annual interest = change in rate (decimal) × mortgage value.',
        workingSteps: ['Rate rise = 4.0% − 1.5% = 2.5%','Extra annual interest = 0.025 × £200,000 = £5,000']
      },
      {
        id:   'q_mp_6',
        type: 'categorise',
        q:    'Categorise each scenario as expansionary or contractionary monetary policy.',
        categories: ['Expansionary monetary policy','Contractionary monetary policy'],
        items: [
          { item: 'Bank Rate cut from 3% to 1%',              category: 'Expansionary monetary policy' },
          { item: 'Bank Rate raised from 0.5% to 3%',         category: 'Contractionary monetary policy' },
          { item: 'QE programme launched',                    category: 'Expansionary monetary policy' },
          { item: 'QE reversed: bonds sold back to market',   category: 'Contractionary monetary policy' },
          { item: 'Forward guidance that rates will stay low', category: 'Expansionary monetary policy' },
          { item: 'Rate rises signalled to cool housing market',category: 'Contractionary monetary policy' }
        ]
      },
      {
        id:   'q_mp_7',
        type: 'cause_effect',
        q:    'Match each monetary policy action to its transmission effect.',
        pairs: [
          { cause: 'Bank Rate cut',                          effect: 'Mortgage costs fall; consumer spending rises' },
          { cause: 'Bank Rate raised',                       effect: 'Investment borrowing costlier; firms cut capital spending' },
          { cause: 'QE injected into bond markets',          effect: 'Long-term interest rates fall; asset prices rise (wealth effect)' },
          { cause: 'Pound appreciates after rate rise',      effect: 'Exports less competitive; imports cheaper; AD falls' },
          { cause: 'Forward guidance signals low rates',     effect: 'Business confidence improves; investment rises' },
          { cause: 'Zero lower bound reached',               effect: 'Rate cuts lose traction; QE or fiscal policy needed' }
        ]
      },
      {
        id:   'q_mp_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Bank Rate','Quantitative Easing','Forward guidance','Automatic stabilisers'],
        ans:  3,
        exp:  'Bank Rate, QE, and forward guidance are all tools of monetary policy used by the central bank. Automatic stabilisers are a feature of fiscal policy (built into the tax/benefit system).'
      },
      {
        id:   'q_mp_9',
        type: 'data_table',
        q:    'Use the data to assess the effectiveness of monetary policy across different periods.',
        tableHeaders: ['Year','Bank Rate (%)','CPI Inflation (%)','GDP Growth (%)'],
        tableData: [
          ['2008','5.0','3.6','−0.3'],
          ['2009','0.5','2.2','−4.3'],
          ['2015','0.5','0.0','2.3'],
          ['2023','5.25','6.7','0.1']
        ],
        opts: [
          '2008: rate cut in response to recession was too slow',
          '2009: low Bank Rate successfully prevented deflation',
          '2015: zero inflation despite 0.5% rate shows limits of MP',
          '2023: high Bank Rate still failed to bring inflation to target quickly'
        ],
        ans:  3,
        exp:  'In 2023, Bank Rate was 5.25% but inflation was still 6.7% – well above the 2% target. This illustrates a lag and limitation of monetary policy: rate rises take 12–18 months to fully feed through to prices.'
      },
      {
        id:   'q_mp_10',
        type: 'match_pairs',
        q:    'Match each monetary policy concept to its description.',
        pairs: [
          { a: 'Bank Rate',           b: 'Base interest rate set by the MPC; key tool of monetary policy' },
          { a: 'MPC',                 b: 'Monetary Policy Committee: the body that sets Bank Rate' },
          { a: 'Quantitative Easing', b: 'Central bank asset purchases to inject money and lower long-term rates' },
          { a: 'Forward guidance',    b: 'Communication about future interest rate path to shape expectations' },
          { a: 'Zero lower bound',    b: 'Constraint: interest rates cannot easily go below 0%' },
          { a: 'Inflation targeting', b: 'Policy framework with a specific CPI objective (2% in UK)' }
        ]
      }
    ]
  };

})();
