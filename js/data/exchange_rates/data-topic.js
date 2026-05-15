window.ECONOS_TOPIC = {
  id: 'exchange_rates',
  topicNum: '4.5',
  theme: 'Theme 4 \xb7 A Global Perspective',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Exchange Rates',
  estTime: '7-9 minutes',
  goal: 'Lock in what determines exchange rates, how changes affect trade and macro objectives, and the floating vs fixed debate.',
  intro: {
    heroKey: 'monetary',
    summary: 'The exchange rate is the price of one currency in terms of another. It connects domestic and international markets: a depreciation makes exports cheaper and imports dearer, affecting competitiveness, inflation and the current account.',
    doInThis: 'Work through 7 cards covering FOREX markets, appreciation vs depreciation, the Marshall-Lerner condition, J-curve effect, floating vs fixed systems, and exchange rate policy trade-offs.',
    outcomes: [
      'Explain how supply and demand in FOREX markets determine the exchange rate',
      'Analyse the effects of currency depreciation on exports, imports, inflation and growth',
      'Apply the Marshall-Lerner condition and J-curve to current-account analysis',
      'Evaluate floating vs fixed exchange rate systems'
    ],
    tip: 'Depreciation: \xa3 falls in value → exports cheaper in foreign currency (volume rises) → imports dearer in \xa3 (volume falls). Net effect on current account depends on price elasticities (Marshall-Lerner).',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'exchange_rates_1',
      template: 'framing',
      title: 'The FOREX Market',
      body: 'The <strong>foreign exchange market (FOREX)</strong> is a global, decentralised market where currencies are bought and sold. The exchange rate is determined by supply and demand.<br><br><strong>Demand for \xa3:</strong> foreigners buying UK exports, investing in the UK, or speculating that \xa3 will rise.<br><strong>Supply of \xa3:</strong> UK residents buying imports, investing abroad, or speculating that \xa3 will fall.<br><br>A <strong>depreciation</strong> (or devaluation if fixed system) means the \xa3 buys fewer foreign currency units. An <strong>appreciation</strong> means \xa3 buys more.',
      keyTerms: [
        { term: 'Appreciation', def: 'The currency rises in value against others — exports become more expensive, imports cheaper.' },
        { term: 'Depreciation', def: 'The currency falls in value — exports become cheaper, imports more expensive.' },
        { term: 'Devaluation', def: 'A deliberate lowering of a fixed or managed exchange rate by the government or central bank.' }
      ],
      examEdge: 'Always state the direction of trade effect precisely: depreciation makes UK exports cheaper in foreign currency terms AND UK imports more expensive in \xa3 terms. Two separate effects — both matter for the current account.'
    },
    {
      id: 'exchange_rates_2',
      template: 'cause',
      title: 'Factors Shifting the Exchange Rate',
      causes: [
        { head: 'Interest rate differentials', body: 'Higher UK interest rates attract "hot money" capital inflows — foreigners buy \xa3 to deposit in UK banks. Demand for \xa3 rises, exchange rate appreciates. Major short-run driver.' },
        { head: 'Inflation differentials', body: 'If UK inflation exceeds trading partners, UK exports become less competitive, demand for \xa3 falls. Exchange rate depreciates (Purchasing Power Parity theory — long-run tendency).' },
        { head: 'Current account balance', body: 'Persistent current account surplus → net demand for \xa3 → appreciation. Persistent deficit → net supply of \xa3 → depreciation.' },
        { head: 'Speculation and sentiment', body: 'Short-run exchange rates dominated by expectations. "Risk-off" episodes (e.g. Brexit vote) trigger rapid depreciation as investors exit \xa3 assets.' },
        { head: 'Government/central bank intervention', body: 'Central banks can buy or sell their own currency to influence the rate. Effective short-run but costly in foreign reserves; hard to sustain long-run.' }
      ],
      examEdge: 'In the short run, interest rate differentials and speculation dominate. In the long run, PPP and productivity growth matter more. Essays should distinguish these timeframes — a single answer covering only one gets capped.'
    },
    {
      id: 'exchange_rates_3',
      template: 'mechanisms',
      title: 'Effects of Depreciation',
      intro: 'Depreciation has wide-ranging macro effects — some beneficial, some harmful — that depend on the size of the depreciation and the structure of the economy.',
      steps: [
        { label: 'Current account', text: 'Exports cheaper in foreign currency → export volume rises. Imports dearer in domestic currency → import volume falls. If Marshall-Lerner holds, current account improves long-run.' },
        { label: 'Inflation (imported)', text: 'Import prices rise in \xa3 terms → higher cost-push inflation. For the UK, roughly 0.3% rise in CPI per 10% depreciation. Worsens inflation outlook.' },
        { label: 'Growth', text: 'Net export improvement adds to AD. But higher imported input costs reduce SRAS → stagflationary risk if depreciation is large.' },
        { label: 'Living standards', text: 'Real purchasing power of consumers falls as import prices rise. Holidays and imported goods become costlier. Regressive if low-income households spend more on traded goods.' }
      ],
      examEdge: 'Depreciation is not a free lunch. It boosts competitiveness but raises inflation and cuts real wages. The Bank of England faces a dilemma: raise rates to defend \xa3 (costs growth) or allow depreciation (costs inflation). Use this trade-off in evaluations.'
    },
    {
      id: 'exchange_rates_4',
      template: 'framing',
      title: 'Marshall-Lerner Condition & J-Curve',
      body: 'The <strong>Marshall-Lerner condition</strong> states that depreciation will improve the current account only if the sum of the price elasticity of demand for exports (PEDx) and imports (PEDm) is greater than 1: |PEDx| + |PEDm| > 1.<br><br>The <strong>J-curve</strong> explains why the current account initially worsens before improving after depreciation: contracts are already in place, so import bills rise immediately in domestic currency while export volumes take time to rise. The current account "dips" then improves, tracing a J shape over time.<br><br>Empirical evidence: Marshall-Lerner does hold in the long run for most economies; J-curve lasts approximately 12-18 months.',
      keyTerms: [
        { term: 'Marshall-Lerner condition', def: 'Depreciation improves current account if |PEDx| + |PEDm| > 1.' },
        { term: 'J-curve', def: 'Current account worsens then improves after depreciation; short-run contracts prevent immediate volume adjustment.' },
        { term: 'Price elasticity of demand for exports', def: 'How responsive export demand is to a change in export price — related to uniqueness and substitutability of exports.' }
      ],
      examEdge: 'If a country exports unique goods (aircraft, luxury brands, pharmaceuticals), PEDx is low — depreciation boosts revenues but volume rises little. If exports are commodity-like, PEDx is high and volume response is large. The UK\'s services exports are relatively inelastic — depreciation helps less than it would for a goods-heavy economy.'
    },
    {
      id: 'exchange_rates_5',
      template: 'paired',
      title: 'Floating vs Fixed Exchange Rate Systems',
      left: {
        label: 'Floating rate',
        points: [
          'Rate set by FOREX market supply and demand',
          'Automatic adjustment: deficit → depreciation → improved competitiveness',
          'Monetary policy independence retained',
          'No need for large foreign reserves',
          'Volatility can deter trade and investment; unpredictable for businesses'
        ]
      },
      right: {
        label: 'Fixed rate',
        points: [
          'Rate pegged to another currency (e.g. dollar, euro)',
          'Price stability and certainty for traders and investors',
          'Disciplines domestic monetary policy (must match anchor country)',
          'Requires large foreign reserves to defend; vulnerable to speculative attack (e.g. UK 1992, ERM)',
          'Cannot use exchange rate as adjustment tool for trade imbalances'
        ]
      },
      examEdge: '1992 Black Wednesday: UK tried to maintain ERM parity with DM. Speculators (Soros) shorted \xa3; Bank of England spent \xa315bn in reserves; forced exit. Key lesson: fixed rates are unsustainable if domestic conditions diverge from anchor — use this as a case study of fixed-rate vulnerability.'
    },
    {
      id: 'exchange_rates_6',
      template: 'framing',
      title: 'Managed Exchange Rates & Currency Manipulation',
      body: 'Most economies operate <strong>managed floats</strong> — rates are primarily market-determined but central banks intervene to smooth volatility. Some countries deliberately undervalue their currency to gain export competitiveness — China was accused of this in the 2000s-2010s through sterilised intervention (buying US Treasuries to absorb capital inflows).<br><br>A <strong>currency war</strong> occurs when multiple countries simultaneously devalue to gain competitive advantage — self-defeating in aggregate since all cannot depreciate simultaneously. "Beggar-thy-neighbour" policy.<br><br>The IMF monitors exchange rate policies and can designate countries as "currency manipulators," triggering diplomatic and trade pressure.',
      keyTerms: [
        { term: 'Managed float', def: 'Market-set rate with periodic central bank intervention to reduce volatility.' },
        { term: 'Currency manipulation', def: 'Deliberate undervaluation of currency to gain unfair export advantage.' },
        { term: 'Beggar-thy-neighbour', def: 'Policy that benefits one country at others\' expense; currency depreciation is a classic example.' }
      ],
      examEdge: 'US-China tension over currency is the exam case. China\'s current account surplus with the US creates political pressure for dollar-yuan revaluation. But China\'s peg supported export-led growth from the 1990s — demonstrating that exchange rate policy is inseparable from development strategy.'
    },
    {
      id: 'exchange_rates_7',
      template: 'diagnose',
      title: 'Exchange Rates & Macro Objectives',
      intro: 'Exchange rate changes affect all four main macro objectives simultaneously, often creating conflicts.',
      rows: [
        { label: 'Objective', colA: 'Growth', colB: 'Inflation' },
        { label: 'Depreciation effect', colA: 'Positive: cheaper exports boost AD and net trade', colB: 'Negative: import price rises add to cost-push inflation' },
        { label: 'Policy conflict', colA: 'Weaker \xa3 raises growth but risks inflation overshoot', colB: 'Rate rises to defend \xa3 control inflation but reduce growth' }
      ],
      footer: 'Balance of payments: depreciation helps current account (if M-L holds) but appreciation worsens it. Employment: depreciation boosts export-sector jobs but raises input costs and may shrink import-competing firms. No free lunch in exchange rate policy.',
      examEdge: 'A 25-mark essay on exchange rate policy requires systematic treatment of ALL objectives — growth, inflation, BoP, and employment — and how policy-makers face impossible trade-offs when these conflict. "It depends on the cause of the change" is valid evaluation.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }
  ]
};
