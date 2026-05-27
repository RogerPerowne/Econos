(function () {

  window.ECONOS_QUIZ = {
    id:       'unstable_markets_main',
    topicId:  'unstable_markets_main',
    title:    'Unstable Markets & Commodity Prices',
    subtitle: 'Development Economics',
    backUrl:  TopicLoader.routes.learn('unstable-commodity-markets'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers commodity price volatility, cobweb model, buffer stocks, and stabilisation policies',
    shortNames: [
      'Price volatility','Cobweb model','Inelastic supply/demand','Buffer stocks','Commodity dependency',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_um_1',
        type: 'mcq',
        q:    'Agricultural commodity prices are typically more volatile than manufactured good prices because:',
        opts: [
          'There is no government intervention in agricultural markets',
          'Supply is subject to weather and biological shocks, and both supply and demand are price inelastic',
          'Agricultural goods are always traded at world prices',
          'Farmers always produce at maximum capacity regardless of price'
        ],
        ans:  1,
        exp:  'Agricultural supply can shift dramatically (droughts, floods, disease) and both supply and demand are inelastic. Even small supply or demand shocks therefore cause large price changes – classic conditions for price volatility.'
      },
      {
        id:   'q_um_2',
        type: 'mcq',
        q:    'The cobweb model explains price instability by showing that:',
        opts: [
          'Price volatility is caused solely by speculation in commodity markets',
          'Farmers base next period\'s supply on the current period\'s price, creating cyclical price fluctuations',
          'Commodity prices always converge to equilibrium within one period',
          'Governments always stabilise prices through buffer stocks'
        ],
        ans:  1,
        exp:  'In the cobweb model, if prices are high this period, farmers plan to produce more next period. This extra supply pushes prices down, leading to underproduction and high prices again – creating an oscillating cycle.'
      },
      {
        id:   'q_um_3',
        type: 'mcq',
        q:    'A buffer stock scheme stabilises commodity prices by:',
        opts: [
          'Setting a minimum wage for agricultural workers',
          'Buying surplus production when prices fall and selling stocks when prices rise',
          'Taxing commodity exports to raise government revenue',
          'Limiting the quantity of a commodity that can be traded internationally'
        ],
        ans:  1,
        exp:  'Buffer stocks: an authority (often government or international body) buys the commodity when price falls toward a floor (building stocks) and sells from stocks when price rises toward a ceiling – stabilising price within a band.'
      },
      {
        id:   'q_um_4',
        type: 'mcq',
        q:    'Commodity-dependent developing countries are particularly vulnerable because:',
        opts: [
          'Commodity prices are always rising, which harms importers',
          'Dependence on primary exports with inelastic demand means any price fall causes large income losses',
          'The IMF forces them to export only primary goods',
          'Manufacturing industries in developing countries always fail'
        ],
        ans:  1,
        exp:  'Prebisch-Singer thesis: primary commodity prices tend to fall relative to manufactured goods over time. Countries dependent on one or two commodities face volatile export revenues, making development planning and investment very difficult.'
      },
      {
        id:   'q_um_5',
        type: 'numeric_input',
        q:    'A country earns 80% of export revenue from one commodity. If its commodity price falls by 25%, by how many percentage points does total export revenue fall (assuming other exports unchanged)?',
        answer: 20,
        tolerance: 0,
        unit: '%',
        hint: 'Fall in total revenue = 80% share × 25% price fall.',
        workingSteps: ['Impact on total exports = 0.80 × 25% = 20 percentage points']
      },
      {
        id:   'q_um_6',
        type: 'categorise',
        q:    'Categorise each factor as a cause of commodity price volatility or a consequence.',
        categories: ['Cause of volatility','Consequence of volatility'],
        items: [
          { item: 'Inelastic supply and demand',                   category: 'Cause of volatility' },
          { item: 'Unstable export revenues for developing nations',category: 'Consequence of volatility' },
          { item: 'Weather-related supply shocks',                 category: 'Cause of volatility' },
          { item: 'Difficulty planning government budgets',        category: 'Consequence of volatility' },
          { item: 'Speculative activity in commodity futures markets',category: 'Cause of volatility' },
          { item: 'Cobweb cycles of boom and bust production',     category: 'Consequence of volatility' }
        ]
      },
      {
        id:   'q_um_7',
        type: 'cause_effect',
        q:    'Match each cause to its effect in commodity markets.',
        pairs: [
          { cause: 'Bad harvest reduces supply',              effect: 'Price rises sharply due to inelastic demand' },
          { cause: 'Buffer stock scheme activates at ceiling', effect: 'Authority sells from stocks; price prevented from rising further' },
          { cause: 'Cobweb diverges (supply more elastic)',   effect: 'Price oscillations get larger over time' },
          { cause: 'Long-run commodity price falls',          effect: 'Terms of trade deteriorate for commodity exporters' },
          { cause: 'Diversification into manufacturing',      effect: 'Country reduces commodity dependence; revenue becomes more stable' },
          { cause: 'International commodity agreement formed',effect: 'Coordinated output restriction attempts to raise and stabilise price' }
        ]
      },
      {
        id:   'q_um_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Buffer stock scheme','Cobweb model','Commodity price volatility','Quantitative Easing'],
        ans:  3,
        exp:  'Buffer stocks, the cobweb model, and commodity price volatility are all related to the economics of unstable markets. Quantitative Easing is a monetary policy tool – it is not relevant to commodity market instability.'
      },
      {
        id:   'q_um_9',
        type: 'data_table',
        q:    'Use the buffer stock data to identify in which year the scheme must sell from its stocks.',
        tableHeaders: ['Year','Production (m tonnes)','Target price (£/tonne)','Market price (£/tonne)'],
        tableData: [
          ['Year 1','10','50','45'],
          ['Year 2','8','50','58'],
          ['Year 3','12','50','42'],
          ['Year 4','9','50','55']
        ],
        opts: ['Year 1','Year 2','Year 3','Year 4'],
        ans:  1,
        exp:  'The buffer stock scheme sells from its stocks when price exceeds the ceiling (above target). In Year 2, market price = £58 > £50 target, so the scheme must sell stocks to bring price down. In Year 1 and 3, price is below target – the scheme buys.'
      },
      {
        id:   'q_um_10',
        type: 'match_pairs',
        q:    'Match each unstable markets concept to its description.',
        pairs: [
          { a: 'Buffer stock scheme',    b: 'Buys in surplus; sells in shortage to stabilise price within a band' },
          { a: 'Cobweb model',           b: 'Supply lags create cyclical price instability in agricultural markets' },
          { a: 'Price band',             b: 'Floor and ceiling between which the scheme maintains the commodity price' },
          { a: 'Prebisch-Singer thesis', b: 'Long-run deterioration in developing countries\' commodity terms of trade' },
          { a: 'Commodity dependence',   b: 'Economy relying heavily on one or few primary exports for revenue' },
          { a: 'Speculative bubble',     b: 'Price driven above fundamental value by expectations of further price rises' }
        ]
      }
    ]
  };

})();
