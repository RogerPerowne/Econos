(function () {

  window.ECONOS_QUIZ = {
    id:       'supply_side_main',
    topicId:  'supply_side_main',
    title:    'Supply-Side Policies',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.routes.learn('supply-side-policies'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers market-based vs interventionist tools, NAIRU, and the productivity puzzle',
    shortNames: [
      'Supply-side goals','Market-based','Interventionist','LRAS shift','Productivity puzzle',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_ss_1',
        type: 'mcq',
        q:    'Supply-side policies aim to:',
        opts: [
          'Increase aggregate demand by boosting government spending',
          'Increase the productive capacity of the economy and shift LRAS rightward',
          'Reduce interest rates to stimulate borrowing',
          'Stabilise the exchange rate to improve the trade balance'
        ],
        ans:  1,
        exp:  'Supply-side policies focus on improving the economy\'s productive capacity – shifting the LRAS curve to the right. This raises potential output without necessarily causing inflation.'
      },
      {
        id:   'q_ss_2',
        type: 'mcq',
        q:    'A market-based supply-side policy is:',
        opts: [
          'Government investment in new schools and hospitals',
          'Nationalising strategic industries',
          'Cutting income tax rates to improve work incentives',
          'Subsidising failing firms to prevent unemployment'
        ],
        ans:  2,
        exp:  'Market-based supply-side policies use price signals and incentives to improve efficiency – e.g., cutting income or corporation tax, deregulation, privatisation, or reducing unemployment benefits to increase labour supply incentives.'
      },
      {
        id:   'q_ss_3',
        type: 'mcq',
        q:    'Which of the following is an interventionist supply-side policy?',
        opts: [
          'Reducing trade union power',
          'Deregulating product markets',
          'Government investment in infrastructure and education',
          'Cutting capital gains tax to incentivise investment'
        ],
        ans:  2,
        exp:  'Interventionist supply-side policies involve direct government action: investing in education, infrastructure, R&D, or supporting industries. They are associated with Keynesian and industrial strategy approaches.'
      },
      {
        id:   'q_ss_4',
        type: 'mcq',
        q:    'Supply-side policies that reduce structural unemployment will also:',
        opts: [
          'Increase the natural rate of unemployment (NAIRU)',
          'Reduce the natural rate of unemployment (NAIRU) and shift LRAS rightward',
          'Reduce aggregate demand',
          'Increase inflation by pushing wages up'
        ],
        ans:  1,
        exp:  'Reducing structural unemployment (through training, improved job matching, removing barriers) lowers NAIRU. The economy can grow at a lower unemployment rate without accelerating inflation, and LRAS shifts right.'
      },
      {
        id:   'q_ss_5',
        type: 'numeric_input',
        q:    'Labour productivity is £40,000 output per worker. A supply-side reform raises productivity by 15%. What is the new output per worker (£)?',
        answer: 46000,
        tolerance: 0,
        unit: '£',
        hint: 'New productivity = old × (1 + growth rate).',
        workingSteps: ['New = £40,000 × 1.15 = £46,000']
      },
      {
        id:   'q_ss_6',
        type: 'categorise',
        q:    'Categorise each policy as market-based or interventionist supply-side.',
        categories: ['Market-based','Interventionist'],
        items: [
          { item: 'Cutting corporation tax',                    category: 'Market-based' },
          { item: 'Government investment in broadband rollout', category: 'Interventionist' },
          { item: 'Reducing employment protection legislation', category: 'Market-based' },
          { item: 'State funding for R&D in green technology',  category: 'Interventionist' },
          { item: 'Privatising nationalised industries',        category: 'Market-based' },
          { item: 'Expanding free childcare to raise female labour supply', category: 'Interventionist' }
        ]
      },
      {
        id:   'q_ss_7',
        type: 'cause_effect',
        q:    'Match each supply-side policy to its expected effect.',
        pairs: [
          { cause: 'Investment in education and skills',         effect: 'Human capital rises; structural unemployment falls; LRAS shifts right' },
          { cause: 'Cutting income tax rates',                   effect: 'Work incentives improve; labour supply may increase' },
          { cause: 'Deregulation of product markets',           effect: 'Competition increases; costs and prices fall; efficiency rises' },
          { cause: 'Infrastructure investment (rail, broadband)',effect: 'Connectivity improves; business costs fall; productivity rises' },
          { cause: 'Trade union power reduced',                  effect: 'Wage flexibility increases; labour market more efficient' },
          { cause: 'Subsidies for apprenticeships',             effect: 'Skills gaps narrowed; structural unemployment reduced' }
        ]
      },
      {
        id:   'q_ss_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Privatisation','Deregulation','Government investment in education','Quantitative Easing'],
        ans:  3,
        exp:  'Privatisation, deregulation, and investment in education are all supply-side policies targeting productive capacity. Quantitative Easing is a monetary policy tool – it affects demand, not the supply-side capacity of the economy.'
      },
      {
        id:   'q_ss_9',
        type: 'data_table',
        q:    'Use the productivity data to identify which country has the highest labour productivity growth.',
        tableHeaders: ['Country','Output per worker 2015 (£000s)','Output per worker 2023 (£000s)','Growth (%)'],
        tableData: [
          ['Alpia','40','44','?'],
          ['Bortia','35','42','?'],
          ['Centri','50','56','?'],
          ['Dorus','30','39','?']
        ],
        opts: ['Alpia (10%)','Bortia (20%)','Centri (12%)','Dorus (30%)'],
        ans:  3,
        exp:  'Growth rates: Alpia: (44-40)/40=10%; Bortia: (42-35)/35=20%; Centri: (56-50)/50=12%; Dorus: (39-30)/30=30%. Dorus has the highest productivity growth at 30%.'
      },
      {
        id:   'q_ss_10',
        type: 'match_pairs',
        q:    'Match each supply-side concept to its description.',
        pairs: [
          { a: 'LRAS',                    b: 'Long-run aggregate supply; vertical at potential output' },
          { a: 'NAIRU',                   b: 'Non-accelerating inflation rate of unemployment; target for supply-side policy' },
          { a: 'Privatisation',           b: 'Transfer of state-owned assets to private ownership' },
          { a: 'Deregulation',            b: 'Removal or reduction of government rules on business' },
          { a: 'Human capital',           b: 'Knowledge, skills, and abilities embodied in the workforce' },
          { a: 'Productivity puzzle',     b: 'UK productivity growth stagnated after 2008 despite low unemployment' }
        ]
      }
    ]
  };

})();
