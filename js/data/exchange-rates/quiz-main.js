(function () {

  window.ECONOS_QUIZ = {
    id:       'exchange_rates_main',
    topicId:  'exchange_rates_main',
    title:    'Exchange Rates',
    subtitle: 'International Economics',
    backUrl:  TopicLoader.routes.learn('exchange-rates'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers FOREX markets, depreciation effects, Marshall-Lerner, and fixed vs floating systems',
    shortNames: [
      'Exchange rate defined','Depreciation effects','Appreciation effects','Floating vs fixed','Purchasing power parity',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_er_1',
        type: 'mcq',
        q:    'The exchange rate is:',
        opts: [
          'The rate of interest set by the central bank',
          'The price of one currency expressed in terms of another',
          'The price level of imports relative to exports',
          'The trade balance between two countries'
        ],
        ans:  1,
        exp:  'The exchange rate is the price of one currency in terms of another – e.g., £1 = $1.25. It is determined by supply and demand for currencies in the foreign exchange (FOREX) market.'
      },
      {
        id:   'q_er_2',
        type: 'mcq',
        q:    'If the pound depreciates against the euro, then:',
        opts: [
          'UK exports become more expensive for eurozone buyers',
          'UK imports from the eurozone become cheaper in pounds',
          'UK exports become cheaper for eurozone buyers, boosting export volumes',
          'UK inflation is likely to fall'
        ],
        ans:  2,
        exp:  'Depreciation means the pound buys fewer euros. UK goods cost fewer euros for European buyers – exports become more competitive. However, UK importers pay more pounds for eurozone goods – import costs rise.'
      },
      {
        id:   'q_er_3',
        type: 'mcq',
        q:    'The Marshall-Lerner condition states that a depreciation will improve the current account only if:',
        opts: [
          'The sum of price elasticities of demand for exports and imports exceeds 1',
          'Inflation is below 2% at the time of depreciation',
          'The financial account is in surplus',
          'The depreciation is greater than 10%'
        ],
        ans:  0,
        exp:  'The Marshall-Lerner condition: |PEDx| + |PEDm| > 1. If export and import demand are sufficiently elastic in total, the volume effects of depreciation outweigh the price effects and the trade balance improves.'
      },
      {
        id:   'q_er_4',
        type: 'mcq',
        q:    'Under a fixed exchange rate system, if the currency faces downward pressure:',
        opts: [
          'The market automatically adjusts the rate',
          'The central bank must buy its own currency (using foreign reserves) to maintain the peg',
          'The government must cut taxes',
          'The central bank lowers interest rates to attract capital inflows'
        ],
        ans:  1,
        exp:  'In a fixed exchange rate regime, the central bank must intervene to maintain the peg. If the currency is falling, it buys the domestic currency (selling foreign reserves) to boost demand and support the rate.'
      },
      {
        id:   'q_er_5',
        type: 'numeric_input',
        q:    'The exchange rate is £1 = €1.20. A UK firm exports goods priced at £500. What is the price in euros for a French buyer?',
        answer: 600,
        tolerance: 0,
        unit: '€',
        hint: 'Euro price = £price × exchange rate.',
        workingSteps: ['Euro price = £500 × 1.20 = €600']
      },
      {
        id:   'q_er_6',
        type: 'categorise',
        q:    'Categorise each factor as causing an appreciation or depreciation of the pound.',
        categories: ['Appreciation (£ rises)','Depreciation (£ falls)'],
        items: [
          { item: 'UK interest rates rise, attracting capital inflows',   category: 'Appreciation (£ rises)' },
          { item: 'UK inflation higher than trading partners\'',           category: 'Depreciation (£ falls)' },
          { item: 'Rise in foreign demand for UK exports',               category: 'Appreciation (£ rises)' },
          { item: 'UK residents increase overseas investment',            category: 'Depreciation (£ falls)' },
          { item: 'Positive economic data boosts confidence in the UK',   category: 'Appreciation (£ rises)' },
          { item: 'Large current account deficit reduces demand for £',   category: 'Depreciation (£ falls)' }
        ]
      },
      {
        id:   'q_er_7',
        type: 'cause_effect',
        q:    'Match each exchange rate change to its macroeconomic effect.',
        pairs: [
          { cause: 'Pound depreciates',              effect: 'Import prices rise; cost-push inflation increases' },
          { cause: 'Pound appreciates',              effect: 'Export competitiveness falls; UK exporters suffer' },
          { cause: 'Depreciation + M-L condition met',effect: 'Current account deficit narrows over time' },
          { cause: 'J-curve effect in short run',    effect: 'Current account deficit worsens immediately after depreciation' },
          { cause: 'Higher UK interest rates',       effect: 'Hot money inflows; pound appreciates' },
          { cause: 'Currency crisis (speculative attack)', effect: 'Reserves depleted; forced devaluation of fixed rate' }
        ]
      },
      {
        id:   'q_er_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Depreciation','Appreciation','Devaluation','Hyperinflation'],
        ans:  3,
        exp:  'Depreciation (market-driven fall), appreciation (market-driven rise), and devaluation (government-decreed fall in a fixed system) are all exchange rate movements. Hyperinflation is a domestic price phenomenon – not an exchange rate concept.'
      },
      {
        id:   'q_er_9',
        type: 'data_table',
        q:    'Use the exchange rate data to calculate how the import cost changed for a UK firm buying £200,000 of US goods.',
        tableHeaders: ['Period','£ / $ exchange rate','Cost of $200,000 goods in £'],
        tableData: [
          ['January','£1 = $1.40','?'],
          ['June','£1 = $1.25','?'],
          ['Change','–','?']
        ],
        opts: [
          'January: £142,857; June: £160,000; increase of £17,143',
          'January: £140,000; June: £125,000; fall of £15,000',
          'January: £280,000; June: £250,000; fall of £30,000',
          'No change – exchange rate changes don\'t affect import costs'
        ],
        ans:  0,
        exp:  'January: $200,000 ÷ 1.40 = £142,857. June: $200,000 ÷ 1.25 = £160,000. Pound has weakened (depreciated); import costs rise by ~£17,143.'
      },
      {
        id:   'q_er_10',
        type: 'match_pairs',
        q:    'Match each exchange rate concept to its description.',
        pairs: [
          { a: 'Depreciation',           b: 'Market-driven fall in currency value under floating system' },
          { a: 'Devaluation',            b: 'Government-decreed reduction in fixed exchange rate' },
          { a: 'Marshall-Lerner',        b: 'Condition: |PEDx| + |PEDm| > 1 for depreciation to improve trade' },
          { a: 'J-curve',                b: 'Trade deficit initially worsens after depreciation before improving' },
          { a: 'Hot money',              b: 'Short-term capital flows attracted by interest rate differentials' },
          { a: 'Floating exchange rate', b: 'Rate determined by market supply and demand without government intervention' }
        ]
      }
    ]
  };

})();
