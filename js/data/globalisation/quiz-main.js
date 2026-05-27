(function () {

  window.ECONOS_QUIZ = {
    id:       'globalisation_main',
    topicId:  'globalisation_main',
    title:    'Globalisation',
    subtitle: 'International Economics',
    backUrl:  TopicLoader.routes.learn('globalisation'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers causes, benefits, costs, multinational corporations, and de-globalisation',
    shortNames: [
      'Globalisation defined','Drivers','Benefits','Costs','MNCs',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_glob_1',
        type: 'mcq',
        q:    'Globalisation refers to:',
        opts: [
          'The process by which countries build trade barriers to protect domestic industries',
          'The increasing integration of world economies through trade, investment, and migration',
          'The convergence of all countries to identical economic systems',
          'The dominance of one country\'s culture and economic model worldwide'
        ],
        ans:  1,
        exp:  'Globalisation is the growing interconnection of world economies: goods, services, capital, and people flow more freely across borders. It is driven by technology, trade liberalisation, and reduced transport costs.'
      },
      {
        id:   'q_glob_2',
        type: 'mcq',
        q:    'Which of the following has been a major driver of globalisation?',
        opts: [
          'Rising trade tariffs between nations',
          'Decreasing internet penetration globally',
          'Falling transport costs and improvements in communications technology',
          'Increasing restrictions on foreign direct investment'
        ],
        ans:  2,
        exp:  'Containerisation cut shipping costs dramatically; digital communications enabled global supply chains and financial markets. Combined with WTO trade liberalisation, these reduced the cost of doing business across borders.'
      },
      {
        id:   'q_glob_3',
        type: 'mcq',
        q:    'A key benefit of globalisation for developing countries is:',
        opts: [
          'Protection of infant industries from foreign competition',
          'Access to FDI, technology transfer, and larger export markets',
          'Reduced dependence on primary commodity exports',
          'Lower rates of urbanisation and migration'
        ],
        ans:  1,
        exp:  'Globalisation can bring FDI (creating jobs and tax revenue), technology transfer, access to global markets, and integration into global value chains – all of which can accelerate development.'
      },
      {
        id:   'q_glob_4',
        type: 'mcq',
        q:    'A multinational corporation (MNC) is a firm that:',
        opts: [
          'Trades internationally but produces only in its home country',
          'Has production operations in multiple countries',
          'Is owned by citizens of more than one country',
          'Is regulated by an international body'
        ],
        ans:  1,
        exp:  'An MNC (or transnational corporation, TNC) maintains significant business activities – production, sales, R&D – in more than one country. Examples include Toyota, Apple, and Shell.'
      },
      {
        id:   'q_glob_5',
        type: 'numeric_input',
        q:    'Global FDI inflows were $1,200bn in 2010 and $1,900bn in 2022. Calculate the percentage increase.',
        answer: 58.3,
        tolerance: 1,
        unit: '%',
        hint: 'Growth rate = ((new − old) / old) × 100.',
        workingSteps: ['Growth = ((1,900 − 1,200) / 1,200) × 100','= (700/1,200) × 100 = 58.3%']
      },
      {
        id:   'q_glob_6',
        type: 'categorise',
        q:    'Categorise each outcome as a potential benefit or potential cost of globalisation.',
        categories: ['Potential benefit','Potential cost'],
        items: [
          { item: 'Lower consumer prices through global competition',     category: 'Potential benefit' },
          { item: 'Deindustrialisation in developed economies',          category: 'Potential cost' },
          { item: 'Technology transfer to developing countries',         category: 'Potential benefit' },
          { item: 'Exploitation of low-wage workers in supply chains',   category: 'Potential cost' },
          { item: 'Economic growth through specialisation',              category: 'Potential benefit' },
          { item: 'Loss of national sovereignty over economic policy',   category: 'Potential cost' }
        ]
      },
      {
        id:   'q_glob_7',
        type: 'cause_effect',
        q:    'Match each aspect of globalisation to its effect.',
        pairs: [
          { cause: 'MNC sets up production in a developing country',  effect: 'FDI inflow; jobs created; technology transferred' },
          { cause: 'Free trade increases import competition',         effect: 'Domestic firms face pressure; some may close' },
          { cause: 'Global supply chain develops',                   effect: 'Production fragmented across countries to reduce costs' },
          { cause: 'Financial markets become globally integrated',   effect: 'Financial crises can spread rapidly across borders' },
          { cause: 'Trade liberalisation reduces tariffs',           effect: 'Comparative advantage drives specialisation and trade growth' },
          { cause: 'Labour migrates from low- to high-wage countries',effect: 'Brain drain in sending countries; wage pressure in receiving countries' }
        ]
      },
      {
        id:   'q_glob_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['FDI','MNC','Trade liberalisation','Protectionism'],
        ans:  3,
        exp:  'FDI, MNCs, and trade liberalisation are all drivers or features of globalisation. Protectionism (tariffs, quotas, subsidies) is the opposite of globalisation – it restricts international economic integration.'
      },
      {
        id:   'q_glob_9',
        type: 'data_table',
        q:    'Use the trade openness data to identify the most globalised economy.',
        tableHeaders: ['Country','Exports + Imports as % GDP (Trade Openness)'],
        tableData: [
          ['USA','27%'],
          ['UK','67%'],
          ['Singapore','320%'],
          ['Brazil','38%']
        ],
        opts: ['USA','UK','Singapore','Brazil'],
        ans:  2,
        exp:  'Trade openness = (X + M) / GDP × 100. Singapore\'s ratio of 320% reflects its role as a major trade and re-export hub – it is the most globally integrated economy in the table.'
      },
      {
        id:   'q_glob_10',
        type: 'match_pairs',
        q:    'Match each globalisation concept to its description.',
        pairs: [
          { a: 'FDI',                    b: 'Investment in productive assets in a foreign country' },
          { a: 'MNC',                    b: 'Firm with operations across multiple countries' },
          { a: 'Trade liberalisation',   b: 'Reduction of barriers to international trade' },
          { a: 'De-globalisation',       b: 'Trend toward more protectionism and reduced economic integration' },
          { a: 'Global value chain',     b: 'Production fragmented across countries, each adding value' },
          { a: 'Technology transfer',    b: 'Movement of knowledge and production methods across borders' }
        ]
      }
    ]
  };

})();
