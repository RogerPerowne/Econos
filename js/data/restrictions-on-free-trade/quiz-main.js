(function () {

  window.ECONOS_QUIZ = {
    title:    'Protectionism',
    subtitle: 'International Economics',
    backUrl:  TopicLoader.routes.learn('restrictions-on-free-trade'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers tariffs, quotas, subsidies, arguments for/against, and contemporary trade conflicts',
    shortNames: [
      'Tariff effects','Quota effects','Subsidies','Arguments for','Arguments against',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'A tariff is:',
        opts: [
          'A government payment to domestic producers to lower their costs',
          'A tax imposed on imported goods',
          'A limit on the quantity of imports allowed',
          'A regulation requiring foreign firms to use domestic labour'
        ],
        ans:  1,
        exp:  'A tariff is a tax on imports. It raises the price of imported goods, making domestic alternatives more competitive. The revenue goes to the government. The consumer pays more, reducing consumer surplus.'
      },
      {
        type: 'mcq',
        q:    'An import quota differs from a tariff because:',
        opts: [
          'A quota raises revenue for the government; a tariff does not',
          'A quota directly limits the quantity of imports allowed; a tariff limits via price',
          'A quota is always more effective than a tariff',
          'A tariff is illegal under WTO rules; a quota is permitted'
        ],
        ans:  1,
        exp:  'A tariff works through the price mechanism – it raises import costs, reducing quantity demanded. A quota sets a hard limit on import volumes regardless of price. Quotas give no revenue to the government (the windfall goes to the quota holder).'
      },
      {
        type: 'mcq',
        q:    'The infant industry argument for protectionism states that:',
        opts: [
          'Developed industries should be permanently protected from foreign competition',
          'New industries in developing countries need temporary protection to develop economies of scale',
          'All industries should be protected until they achieve global dominance',
          'Governments should subsidise industries that are failing due to poor management'
        ],
        ans:  1,
        exp:  'The infant industry case: a new industry may not yet have achieved the scale to compete with established foreign rivals. Temporary protection allows it to grow, achieve MES, and eventually compete without support.'
      },
      {
        type: 'mcq',
        q:    'A key argument against protectionism is that it:',
        opts: [
          'Reduces government tax revenue from import duties',
          'Raises consumer prices, reduces competition, and may invite retaliation from trade partners',
          'Always leads to lower employment in the protected industry',
          'Prevents firms from achieving economies of scale'
        ],
        ans:  1,
        exp:  'Protectionism harms consumers (higher prices, less choice), reduces efficiency (protected firms face less pressure), and can trigger retaliatory tariffs – a trade war that harms all parties.'
      },
      {
        type: 'numeric_input',
        q:    'World price of a good = £20. A tariff of £5 is applied. Domestic demand falls from 500 to 450 units, and domestic supply rises from 100 to 150 units. Calculate the tariff revenue for the government (£).',
        answer: 1500,
        tolerance: 0,
        unit: '£',
        hint: 'Tariff revenue = tariff × quantity still imported.',
        workingSteps: ['Imports = demand − domestic supply = 450 − 150 = 300 units','Revenue = £5 × 300 = £1,500']
      },
      {
        type: 'categorise',
        q:    'Categorise each argument as for or against protectionism.',
        categories: ['Argument for protectionism','Argument against protectionism'],
        items: [
          { item: 'Infant industry needs time to reach MES',      category: 'Argument for protectionism' },
          { item: 'Consumers face higher prices and less choice', category: 'Argument against protectionism' },
          { item: 'Strategic industry essential for national security', category: 'Argument for protectionism' },
          { item: 'Risk of trade war and retaliation',            category: 'Argument against protectionism' },
          { item: 'Dumping by foreign firms harms domestic industry',  category: 'Argument for protectionism' },
          { item: 'Protected firms become inefficient over time', category: 'Argument against protectionism' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each protectionist measure to its primary effect.',
        pairs: [
          { cause: 'Tariff imposed on steel imports',              effect: 'Steel imports become more expensive; domestic production rises' },
          { cause: 'Import quota on textiles',                     effect: 'Quantity of textile imports limited; domestic price rises' },
          { cause: 'Export subsidy to domestic farmers',           effect: 'Domestic food production becomes globally cheaper; non-member exports undercut' },
          { cause: 'Country A retaliates with tariff against B',   effect: 'Trade war begins; both countries face higher costs' },
          { cause: 'Anti-dumping duty imposed',                    effect: 'Foreign firms selling below cost face an offsetting tax' },
          { cause: 'Embargo (trade ban) on goods',                 effect: 'No imports of banned goods; may provoke diplomatic dispute' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Tariff','Import quota','Export subsidy','Comparative advantage'],
        ans:  3,
        exp:  'Tariff, import quota, and export subsidy are all protectionist measures that restrict free trade. Comparative advantage is the principle underpinning the case for free trade – it argues against protectionism.'
      },
      {
        type: 'data_table',
        q:    'Use the tariff data to calculate the deadweight welfare loss area (approximately). Assume a simple triangular DWL.',
        tableHeaders: ['Measure','Value'],
        tableData: [
          ['World price (£)','20'],
          ['Tariff (£)','4'],
          ['Fall in import quantity (units)','100'],
          ['DWL (£) = ?','?']
        ],
        opts: ['£200','£400','£100','£300'],
        ans:  0,
        exp:  'Deadweight loss ≈ ½ × tariff × reduction in imports = ½ × £4 × 100 = £200. This represents the efficiency loss from the trade barrier.'
      },
      {
        type: 'match_pairs',
        q:    'Match each protectionism concept to its description.',
        pairs: [
          { a: 'Tariff',              b: 'Tax on imported goods; raises price and generates government revenue' },
          { a: 'Import quota',        b: 'Maximum quantity of imports allowed per period' },
          { a: 'Export subsidy',      b: 'Government payment to domestic exporters to lower their prices abroad' },
          { a: 'Dumping',             b: 'Exporting goods at below cost to destroy foreign competition' },
          { a: 'Infant industry',     b: 'New industry needing temporary protection to achieve economies of scale' },
          { a: 'Trade war',           b: 'Escalating cycle of retaliatory tariffs between countries' }
        ]
      }
    ]
  };

})();
