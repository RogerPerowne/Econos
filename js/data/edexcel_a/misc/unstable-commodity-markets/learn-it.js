window.ECONOS_TOPIC = {
  id: 'unstable-commodity-markets',
  topicNum: '1.22',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Unstable Commodity Markets',
  estTime: '9-11 minutes',
  goal: 'Lock in why commodity markets are volatile, the buffer stock model, and the evaluation of price stabilisation schemes.',
  intro: {
    heroKey: 'heroSupplyDemand',
    summary: 'Agricultural and commodity markets are characterised by price volatility – inelastic supply and demand combined with unpredictable supply shocks create large price swings. Buffer stock schemes attempt to stabilise prices, but face significant practical challenges.',
    doInThis: 'Work through 7 cards covering why commodity markets are unstable, the role of PED/PES, the cobweb model, buffer stock mechanisms, their limitations, alternatives, and evaluation.',
    outcomes: [
      'Explain why commodity markets experience more price volatility than other markets',
      'Apply PED and PES analysis to commodity price instability',
      'Explain the cobweb model of agricultural price cycles',
      'Evaluate buffer stock schemes and alternative stabilisation approaches'
    ],
    tip: 'Volatile commodity prices: inelastic demand (necessities) + inelastic supply (seasonal) + unpredictable supply shocks = large price swings. Cobweb: farmers plan on last season\'s price → systematic over/underproduction cycles.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'unstable_markets_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Unstable commodity markets: the big picture',
      lede: 'Food and raw-material prices swing wildly because supply lags, demand is inelastic, and small shocks cause big movements.',
      tip: '% change in price ≈ % change in supply ÷ (|PED| + PES). If |PED| = 0.2 and PES = 0.3, a 10% supply fall → 20% price rise. The smaller the elasticities, the more volatile the price.',
      branches: [
        { tone: 'green',  label: 'Why prices swing',     sub: 'Inelastic demand <em>and</em> inelastic short-run supply mean small shocks → large price changes.' },
        { tone: 'blue',   label: 'The cobweb model',     sub: 'Production lags + price-based planting decisions create cyclical convergent or divergent oscillations.' },
        { tone: 'rose',   label: 'Real-world costs',     sub: 'Farmer income volatility, food insecurity, inflation pass-through, investment uncertainty.' },
        { tone: 'amber',  label: 'Buffer stock schemes', sub: 'Government buys at floor, sells at ceiling to stabilise prices – in theory. In practice: cost, storage, corruption.' },
        { tone: 'purple', label: 'Globalised commodities', sub: 'World prices, futures markets, and speculation now dominate – domestic policy levers are weaker than ever.' }
      ],
      body: 'Agricultural and commodity markets are characterised by extreme price volatility because both supply and demand are highly price inelastic:<br><br><strong>Inelastic demand (|PED| < 1):</strong> food is a necessity – demand barely changes with price. When supply falls, consumers cannot easily substitute → large price rise needed to clear market.<br><br><strong>Inelastic supply (PES < 1, short run):</strong> supply is fixed by the season – once crops are planted, quantity cannot be quickly adjusted. A bad harvest causes a large price spike because supply cannot increase to meet demand.<br><br>Combined: any supply shock → very large price change. PED = -0.2, PES = 0.3 (typical agricultural estimates) → 1% fall in supply causes ~3-4% rise in price.',
      keyTerms: [
        { term: 'Price volatility', def: 'Large, unpredictable fluctuations in price – common in commodity markets due to inelastic demand and supply combined with supply shocks.' },
        { term: 'Supply shock', def: 'Sudden unexpected change in supply – drought, disease, geopolitical disruption – causes large price movements when supply is inelastic.' },
        { term: 'Commodity market', def: 'Market for standardised physical goods (wheat, coffee, oil, metals) – often highly volatile due to supply uncertainty and inelastic demand.' }
      ],
      examEdge: 'The mathematics of commodity price volatility: % change in price ≈ % change in supply ÷ (|PED| + PES). If |PED| = 0.2 and PES = 0.3, and supply falls 10%, then price rises ≈ 10 ÷ 0.5 = 20%. The smaller the sum of elasticities, the larger the price swing from any supply shock. This formula is useful for estimating price impacts.'
    },
    {
      id: 'unstable_markets_2',
      template: 'framing',
      diagramKey: 'cobwebModel',
      title: 'The Cobweb Model',
      lede: 'Farmers plant on last year\'s price, so a glut breeds a shortage breeds a glut – boom-and-bust baked into the harvest cycle.',
      body: 'The <strong>cobweb model</strong> explains cyclical price and quantity oscillations in agricultural markets arising from production lags.<br><br><strong>Mechanism:</strong><br>1. Good harvest → low price this year.<br>2. Farmers plan next year\'s planting based on this year\'s (low) price → reduce acreage.<br>3. Bad supply next year → high price.<br>4. High price → farmers plant lots next year.<br>5. Large harvest → low price again. Cycle repeats.<br><br><strong>Convergent cobweb:</strong> if supply is more elastic than demand, oscillations shrink over time – market tends toward equilibrium. <strong>Divergent cobweb:</strong> if demand is more inelastic than supply is elastic, oscillations grow – market becomes increasingly unstable.',
      keyTerms: [
        { term: 'Cobweb model', def: 'A model of price/quantity cycles in markets with production lags – farmers base planting decisions on last period\'s price.' },
        { term: 'Convergent cobweb', def: 'Supply more elastic than demand – oscillations diminish; market converges to equilibrium.' },
        { term: 'Divergent cobweb', def: 'Demand more inelastic – oscillations grow; market diverges from equilibrium.' }
      ],
      examEdge: 'Cobweb diagram technique: draw S and D. Start below equilibrium at Q0 (excess demand → high price P1). At P1, supply = Q1 (read off supply curve). Q1 on demand curve gives P2 (low price). At P2, supply = Q2. Continue: if supply slope > demand slope (both negative/positive), convergent; if reverse, divergent. Draw the cobweb pattern explicitly.'
    },
    {
      id: 'unstable_markets_3',
      template: 'cause',
      title: 'Consequences of Price Volatility',
      lede: 'Wild prices wreck farmer incomes, push food out of reach for the poorest, and can topple whole economies built on one export.',
      causesStyle: 'tinted-flat',
      causesEmoji: '⚠️',
      causesLabel: 'Who gets hurt by volatile commodity prices',
      causes: [
        { icon: '🛒', head: 'Consumer harm', body: 'Food price spikes reduce real incomes, particularly for low-income households in developing countries where food represents 50-70% of expenditure. Global food price spike (2007-08) contributed to food riots in 30+ countries.' },
        { icon: '👨‍🌾', head: 'Producer income instability', body: 'Farmers face highly volatile incomes – in bad years (low supply, which often coincides with high prices globally), they may still face local price spikes but lower yields. In good years, gluts depress prices → revenues fall despite high output.' },
        { icon: '📉', head: 'Investment disincentive', body: 'Volatile prices deter long-run investment in agricultural capacity. Farmers uncertain about future prices under-invest in machinery, irrigation, and land improvement – reducing long-run supply capacity.' },
        { icon: '🌍', head: 'Macro instability in commodity exporters', body: 'Countries heavily dependent on commodity exports (Nigeria – oil; Zambia – copper; Brazil – soy) face government revenue volatility. Commodity price cycles create boom-bust fiscal and economic cycles.' }
      ],
      examEdge: 'The food price crisis of 2007-08 is the go-to commodity instability case study: drought in Australia + biofuel mandates in US (corn for ethanol) + speculative financial investment in food futures → global food prices doubled → political instability in 30+ countries. Multiple supply and demand shocks combining is typical of real commodity crises.'
    },
    {
      id: 'unstable_markets_4',
      template: 'mechanisms',
      title: 'Buffer Stock Schemes',
      lede: 'Buy the glut, store it, sell it back in the famine – the state turns trader to keep prices inside a band. At least, that\'s the plan.',
      intro: 'A buffer stock scheme is a government or international authority intervention to stabilise commodity prices within a target band.',
      steps: [
        { label: '📦 Abundant year', text: 'Good harvest → price falls below floor. Authority buys surplus at the floor price → removes excess supply → price supported at floor. Stock accumulated in reserve.' },
        { label: '📤 Scarce year', text: 'Poor harvest → price rises above ceiling. Authority sells from reserve → adds supply → price kept below ceiling. Stock depleted.' },
        { label: '📊 Price band', text: 'Authority sets a target price band (floor to ceiling). Within the band, market operates freely. Outside the band, authority intervenes. Long-run equilibrium price should be within the band for the scheme to be self-financing.' },
        { label: '💰 Finance requirement', text: 'Authority needs capital to buy stocks in good years. Storage costs must be funded. Risk: sustained low prices → authority runs out of funds; sustained high prices → authority runs out of stocks.' }
      ],
      examEdge: 'Buffer stock diagram: draw S and D with equilibrium at P*. Mark floor (Pf) and ceiling (Pc). Show a supply shift that would push price below Pf – government buys the difference (horizontal purchase arrow). Show a supply shift that pushes price above Pc – government sells from reserves. The authority acts as a countercyclical trader.'
    },
    {
      id: 'unstable_markets_5',
      template: 'cause',
      title: 'Limitations of Buffer Stock Schemes',
      lede: 'Storage bills, the wrong target price, running out of cash or stock – why most buffer schemes, like the Tin Council, eventually collapse.',
      causesStyle: 'tinted-flat',
      causesEmoji: '⚠️',
      causesLabel: 'Why buffer stocks fail in practice',
      causes: [
        { icon: '🏪', head: 'Storage costs', body: 'Storing physical commodities (grain, butter) is expensive. Costs include warehousing, preservation (temperature control, fumigation), transportation, and spoilage. EU "butter mountains" and "grain mountains" from CAP price supports: enormous storage costs and eventual dumping at below-market prices.' },
        { icon: '🎯', head: 'Setting the target price', body: 'If the floor price is set above the long-run equilibrium, permanent surplus accumulates. If below, permanent shortage. Identifying the "correct" long-run equilibrium is an information challenge – prices trend over time as technology and tastes change.' },
        { icon: '💸', head: 'Financial sustainability', body: 'Sustained low prices exhaust the authority\'s purchase funds; sustained high prices exhaust reserves. International Tin Council (1985): ran out of money to support the floor price → collapsed → tin price fell 50% instantly.' },
        { icon: '📈', head: 'Speculation and manipulation', body: 'Traders aware of the floor/ceiling can exploit the scheme – buy just before the authority must sell; sell just before the authority must buy. Buffer stock schemes can be destabilised by speculative attacks.' }
      ],
      examEdge: 'The International Tin Agreement collapse (1985) is the definitive buffer stock failure case study. The authority over-committed to a floor price that was above the long-run market equilibrium → bought more than it could finance → ran out of money → floor collapsed → prices crashed far below equilibrium (overcorrection). A devastating real-world test.'
    },
    {
      id: 'unstable_markets_6',
      template: 'framing',
      title: 'Buffer Stocks vs Alternatives',
      lede: 'Why hoard physical stock when futures, sovereign wealth funds, diversification and better crops can smooth prices without the warehouse?',
      verdict: {
        leftLabel: '📦 Buffer stock schemes',
        rightLabel: '🔄 Alternative approaches',
        separator: 'VS',
        rows: [
          { aspect: 'Price stability', left: 'Direct price stabilisation within a band – predictable outcome for producers and consumers', right: 'Futures markets: producers sell forward contracts locking in a price – hedges against risk without storage costs' },
          { aspect: 'Cost', left: 'High storage costs; financial sustainability at risk if prices persistently outside the band', right: 'Income stabilisation funds (Norway, Chile): save commodity revenue in sovereign wealth funds – macro buffer without physical storage' },
          { aspect: 'Incentives', left: 'Can distort production incentives if floor price set above long-run equilibrium', right: 'Diversification: commodity-dependent countries build manufacturing and services to reduce income volatility' },
          { aspect: 'Track record', left: 'Historical record poor – most international commodity agreements have failed (Tin Council 1985)', right: 'R&D investment: drought/disease-resistant crop varieties reduce supply shocks and smooth the cobweb' }
        ]
      },
      examEdge: 'Futures markets are the private-sector alternative to buffer stocks. A wheat farmer selling futures contracts in March for September delivery locks in a price – hedges against price risk. The farmer gives up potential gains (if price rises) to avoid losses (if price falls). Financial markets provide price stability without government intervention and storage costs.'
    },
    {
      id: 'unstable_markets_7',
      template: 'framing',
      title: 'Commodity Markets in a Globalised World',
      lede: 'Today OPEC manages supply at the wellhead and hedge funds trade futures by the billion – domestic price levers have never been weaker.',
      body: '<strong>OPEC and oil markets:</strong> the oil cartel manages supply to stabilise (or raise) oil prices. OPEC+ production cuts in 2020 (after COVID demand collapse) and 2022-23 demonstrate supply management at global scale. Unlike buffer stocks, OPEC restricts supply (withholds production) rather than storing it – different mechanism, same price stabilisation goal.<br><br><strong>Financialisation of commodity markets:</strong> since 2000s, financial investors (hedge funds, pension funds) trade commodity futures alongside physical traders. This has increased price co-movement with financial markets and potentially increased volatility – commodity prices rose in 2022 partly due to financial flows, not just supply disruption.',
      keyTerms: [
        { term: 'OPEC', def: 'Organisation of Petroleum Exporting Countries – cartel controlling ~40% of world oil supply, managing production to influence prices.' },
        { term: 'Financialisation', def: 'Increased role of financial instruments and investors in commodity markets – may amplify price volatility beyond fundamentals.' },
        { term: 'Commodity futures', def: 'Contracts to buy/sell a fixed quantity of a commodity at a set price on a future date – allow producers and consumers to hedge price risk.' }
      ],
      examEdge: 'OPEC is a supply-side price stabilisation mechanism: restrict supply to raise price (floor management). Contrast with buffer stocks: buffer stocks use reserves to stabilise (buying/selling existing stocks); OPEC manages new production. Both aim to reduce price volatility but OPEC\'s primary goal is actually to raise prices above competitive equilibrium – a cartel, not a neutral stabilisation scheme.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0
   These questions used to live at /quiz/<topic>/<set> as a
   standalone shell. They now ride along with the Learn It data
   under the same window.ECONOS_QUIZ global. The /quiz/ URL
   contract is gone; the quiz is the natural finisher to the
   Learn It journey, so the data lives next to learn cards.
   ============================================================ */
/* ---- quiz-main.js (quiz pool, preserved from former /quiz/ shell) ---- */
(function () {

  window.ECONOS_QUIZ = {
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
        type: 'numeric_input',
        q:    'A country earns 80% of export revenue from one commodity. If its commodity price falls by 25%, by how many percentage points does total export revenue fall (assuming other exports unchanged)?',
        answer: 20,
        tolerance: 0,
        unit: '%',
        hint: 'Fall in total revenue = 80% share × 25% price fall.',
        workingSteps: ['Impact on total exports = 0.80 × 25% = 20 percentage points']
      },
      {
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
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Buffer stock scheme','Cobweb model','Commodity price volatility','Quantitative Easing'],
        ans:  3,
        exp:  'Buffer stocks, the cobweb model, and commodity price volatility are all related to the economics of unstable markets. Quantitative Easing is a monetary policy tool – it is not relevant to commodity market instability.'
      },
      {
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

