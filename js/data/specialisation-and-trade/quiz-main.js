(function () {

  window.ECONOS_QUIZ = {
    title:    'Trade & Specialisation',
    subtitle: 'International Economics',
    backUrl:  TopicLoader.routes.learn('specialisation-and-trade'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers comparative advantage, gains from trade, terms of trade, and free trade arguments',
    shortNames: [
      'Comparative advantage','Absolute advantage','Opportunity cost','Terms of trade','Gains from trade',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'Comparative advantage means a country should specialise in goods it can produce:',
        opts: [
          'With the lowest absolute cost compared to all other countries',
          'With the lowest opportunity cost relative to other goods it could produce',
          'Using the most labour-intensive methods available',
          'Only if it has access to natural resources'
        ],
        ans:  1,
        exp:  'Comparative advantage (Ricardo) is based on opportunity cost, not absolute cost. A country has a comparative advantage in a good if its opportunity cost of producing it is lower than for other countries – even if it is less efficient in absolute terms.'
      },
      {
        type: 'mcq',
        q:    'Country A can produce either 100 cars or 200 tonnes of wheat. Country B can produce either 80 cars or 200 tonnes of wheat. Which country has the comparative advantage in cars?',
        opts: [
          'Country A – it produces more cars than B',
          'Country B – the opportunity cost of a car is lower in B (2.5 wheat vs 2 wheat in A)',
          'Country A – the opportunity cost of a car is lower (2 wheat) than in B (2.5 wheat)',
          'Neither – both have the same output of wheat'
        ],
        ans:  2,
        exp:  'Country A: 1 car costs 200/100 = 2 tonnes of wheat. Country B: 1 car costs 200/80 = 2.5 tonnes of wheat. Country A has the lower opportunity cost in cars – it has the comparative advantage in car production.'
      },
      {
        type: 'mcq',
        q:    'The Terms of Trade (ToT) measures:',
        opts: [
          'The rate at which imports can be substituted for domestic goods',
          'The index of export prices divided by the index of import prices × 100',
          'The balance of trade between two countries',
          'The exchange rate between two trading partners'
        ],
        ans:  1,
        exp:  'ToT = (Index of export prices / Index of import prices) × 100. An improvement in ToT means export prices have risen relative to import prices – each unit of exports can buy more imports.'
      },
      {
        type: 'mcq',
        q:    'Free trade benefits consumers because:',
        opts: [
          'It protects domestic industries from unfair competition',
          'It allows access to more goods at lower prices through specialisation and competition',
          'It eliminates trade deficits',
          'It always benefits every citizen in every country equally'
        ],
        ans:  1,
        exp:  'Free trade expands the range of available goods and drives down prices through competition and specialisation based on comparative advantage. This raises consumer surplus and overall welfare (though distribution effects can vary).'
      },
      {
        type: 'numeric_input',
        q:    'The export price index = 120 and the import price index = 100. What is the Terms of Trade index value?',
        answer: 120,
        tolerance: 0,
        unit: '',
        hint: 'ToT = (export price index / import price index) × 100.',
        workingSteps: ['ToT = (120/100) × 100 = 120']
      },
      {
        type: 'categorise',
        q:    'Categorise each as a potential benefit or limitation of specialisation and free trade.',
        categories: ['Benefit','Limitation'],
        items: [
          { item: 'Lower prices for consumers through competition',      category: 'Benefit' },
          { item: 'Structural unemployment in non-competitive industries',category: 'Limitation' },
          { item: 'Greater variety of goods available',                  category: 'Benefit' },
          { item: 'Dependency on volatile commodity prices',             category: 'Limitation' },
          { item: 'Economies of scale from larger markets',              category: 'Benefit' },
          { item: 'Loss of strategic industries (e.g., food security)',  category: 'Limitation' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each trade concept to its effect.',
        pairs: [
          { cause: 'Country specialises based on comparative advantage',  effect: 'World output rises; both countries gain from trade' },
          { cause: 'Terms of trade improve for a country',               effect: 'Each unit of exports buys more imports' },
          { cause: 'Terms of trade deteriorate for a developing country',effect: 'More exports needed to pay for the same imports' },
          { cause: 'Free trade opens a previously protected market',     effect: 'Domestic producers face more competition; prices fall' },
          { cause: 'Gains from trade are unevenly distributed',         effect: 'Some workers and industries face structural unemployment' },
          { cause: 'Economies of scale achieved through large markets',  effect: 'Average costs fall; international competitiveness improves' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Comparative advantage','Absolute advantage','Terms of trade','Multiplier effect'],
        ans:  3,
        exp:  'Comparative advantage, absolute advantage, and terms of trade are all international trade concepts. The multiplier effect is a macroeconomic concept about how changes in spending amplify national income – not a trade theory concept.'
      },
      {
        type: 'data_table',
        q:    'Use the data to identify which country has the comparative advantage in which good.',
        tableHeaders: ['Country','Output per worker: Cars','Output per worker: Cloth'],
        tableData: [
          ['UK','4 cars','8 units cloth'],
          ['India','1 car','4 units cloth']
        ],
        opts: [
          'UK has comparative advantage in both; India should not trade',
          'India has comparative advantage in cloth; UK in cars',
          'UK has comparative advantage in cloth; India in cars',
          'Both countries have identical comparative advantages'
        ],
        ans:  1,
        exp:  'UK opportunity cost of 1 car = 2 units cloth. India opportunity cost of 1 car = 4 units cloth. UK has lower OC for cars → comparative advantage in cars. India has lower OC for cloth (0.25 cars vs 0.5 cars for UK) → comparative advantage in cloth.'
      },
      {
        type: 'match_pairs',
        q:    'Match each trade concept to its description.',
        pairs: [
          { a: 'Comparative advantage',   b: 'Produce good with lowest opportunity cost relative to other goods' },
          { a: 'Absolute advantage',      b: 'Produce more output per unit of input than all rivals' },
          { a: 'Terms of trade',          b: 'Export price index / import price index × 100' },
          { a: 'Gains from trade',        b: 'Increase in total welfare from specialisation and exchange' },
          { a: 'Free trade',              b: 'No tariffs, quotas, or subsidies distorting international commerce' },
          { a: 'Prebisch-Singer thesis',  b: 'Commodity prices fall relative to manufactured goods over time' }
        ]
      }
    ]
  };

})();
