(function () {

  window.ECONOS_QUIZ = {
    title:    'International Competitiveness',
    subtitle: 'International Economics',
    backUrl:  TopicLoader.routes.learn('international-competitiveness'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers unit labour costs, price and non-price competitiveness, and supply-side improvements',
    shortNames: [
      'Price competitiveness','Unit labour costs','Non-price factors','Productivity puzzle','Policy responses',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'A country\'s price competitiveness improves when:',
        opts: [
          'Domestic prices rise faster than foreign prices',
          'The exchange rate appreciates strongly',
          'Domestic inflation is lower than trading partners\' or the exchange rate depreciates',
          'Import tariffs are raised to protect domestic firms'
        ],
        ans:  2,
        exp:  'Price competitiveness means exports are relatively cheap for foreign buyers. It improves when domestic inflation is low relative to rivals (keeping export prices low) or when the exchange rate depreciates (exports become cheaper abroad).'
      },
      {
        type: 'mcq',
        q:    'Unit Labour Cost (ULC) is calculated as:',
        opts: [
          'Average wage ÷ output per worker',
          'Total employment costs × number of workers',
          'Wage rate × hours worked',
          'Average wage × labour productivity'
        ],
        ans:  0,
        exp:  'ULC = wage cost per worker ÷ output per worker (labour productivity). If wages rise faster than productivity, ULC rises – reducing price competitiveness. If productivity rises faster than wages, ULC falls.'
      },
      {
        type: 'mcq',
        q:    'Non-price competitiveness includes:',
        opts: [
          'Keeping export prices below those of all rivals',
          'Product quality, design, brand reputation, and after-sales service',
          'Devaluing the currency to make exports cheaper',
          'Reducing corporation tax to cut costs'
        ],
        ans:  1,
        exp:  'Non-price factors drive competitiveness beyond price: product quality, innovation, delivery reliability, brand strength, and customer service. German manufacturing and Swiss luxury goods are examples of strong non-price competitiveness.'
      },
      {
        type: 'mcq',
        q:    'The UK productivity puzzle refers to:',
        opts: [
          'UK productivity growing faster than any other G7 country after 2008',
          'UK productivity growth being significantly slower than pre-2008 trends, despite low unemployment',
          'UK firms refusing to adopt new technology',
          'UK workers being the least educated in the developed world'
        ],
        ans:  1,
        exp:  'After the 2008 financial crisis, UK productivity growth (output per worker) stagnated far below the pre-crisis trend. This is unusual because unemployment stayed low – suggesting zombified firms, weak investment, or misallocation of labour.'
      },
      {
        type: 'numeric_input',
        q:    'A worker earns £30,000/year and produces £150,000 of output. What is the Unit Labour Cost as a proportion of output (to 2 decimal places)?',
        answer: 0.2,
        tolerance: 0.01,
        unit: '',
        hint: 'ULC = wage ÷ output per worker.',
        workingSteps: ['ULC = £30,000 ÷ £150,000 = 0.20']
      },
      {
        type: 'categorise',
        q:    'Categorise each factor as improving price competitiveness or non-price competitiveness.',
        categories: ['Price competitiveness','Non-price competitiveness'],
        items: [
          { item: 'Lower domestic inflation than trading partners',  category: 'Price competitiveness' },
          { item: 'Improved product quality and design',             category: 'Non-price competitiveness' },
          { item: 'Currency depreciation',                           category: 'Price competitiveness' },
          { item: 'Strong brand reputation in export markets',       category: 'Non-price competitiveness' },
          { item: 'Productivity rising faster than wages',           category: 'Price competitiveness' },
          { item: 'After-sales service and warranty improvements',   category: 'Non-price competitiveness' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each cause to its effect on international competitiveness.',
        pairs: [
          { cause: 'Wages rise faster than productivity',           effect: 'Unit labour costs rise; price competitiveness falls' },
          { cause: 'Investment in R&D improves product innovation', effect: 'Non-price competitiveness rises; premium exports grow' },
          { cause: 'Exchange rate appreciates',                     effect: 'Export prices rise in foreign markets; sales may fall' },
          { cause: 'Government invests in skills training',         effect: 'Labour productivity rises; ULC falls' },
          { cause: 'Infrastructure spending improves transport',    effect: 'Business costs fall; competitiveness improves' },
          { cause: 'UK inflation persistently above EU rate',       effect: 'UK exports become gradually less price-competitive' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out in a list of factors improving international competitiveness?',
        opts: ['Rising labour productivity','Lower unit labour costs','Higher domestic inflation','Currency depreciation'],
        ans:  2,
        exp:  'Rising productivity, lower ULC, and currency depreciation all improve price competitiveness. Higher domestic inflation raises the relative price of exports – it reduces competitiveness, not improves it.'
      },
      {
        type: 'data_table',
        q:    'Use the data to identify which country has the lowest unit labour costs.',
        tableHeaders: ['Country','Average wage (£000s)','Output per worker (£000s)','ULC'],
        tableData: [
          ['Alpha','35','140','?'],
          ['Beta','28','140','?'],
          ['Gamma','40','200','?'],
          ['Delta','30','100','?']
        ],
        opts: ['Alpha (0.25)','Beta (0.20)','Gamma (0.20)','Delta (0.30)'],
        ans:  1,
        exp:  'ULC = wage/output. Alpha: 35/140=0.25; Beta: 28/140=0.20; Gamma: 40/200=0.20; Delta: 30/100=0.30. Beta and Gamma both have ULC=0.20, the lowest. Beta is listed first among the equal-lowest.'
      },
      {
        type: 'match_pairs',
        q:    'Match each competitiveness concept to its description.',
        pairs: [
          { a: 'Unit Labour Cost',              b: 'Wage cost per unit of output; key price competitiveness measure' },
          { a: 'Price competitiveness',          b: 'Ability to sell exports at a lower price than rivals' },
          { a: 'Non-price competitiveness',      b: 'Quality, design, brand, reliability as export advantages' },
          { a: 'Productivity puzzle',            b: 'UK output per worker stagnating despite low unemployment post-2008' },
          { a: 'Exchange rate depreciation',     b: 'Lowers export prices in foreign currency; improves price competitiveness' },
          { a: 'Infrastructure investment',      b: 'Supply-side policy reducing business costs and improving connectivity' }
        ]
      }
    ]
  };

})();
