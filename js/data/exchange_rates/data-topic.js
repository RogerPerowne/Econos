window.ECONOS_TOPIC = {
  id: 'exchange_rates',
  topicNum: '1.8',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Exchange Rates',
  estTime: '11-13 minutes',
  goal: 'Lock in what determines exchange rates, how changes affect trade and macro objectives, and the floating vs fixed debate.',
  intro: {
    heroKey: 'heroExchangeRates',
    summary: 'The exchange rate is the price of one currency in terms of another. It connects domestic and international markets: a depreciation makes exports cheaper and imports dearer, affecting competitiveness, inflation and the current account.',
    doInThis: 'Work through 9 cards covering FOREX markets, appreciation vs depreciation, the Marshall-Lerner condition and J-curve, a full Marshall-Lerner worked calculation, floating vs fixed systems, exchange rate policy trade-offs, and a 25-mark essay scaffold on depreciation and the current account.',
    outcomes: [
      'Explain how supply and demand in FOREX markets determine the exchange rate',
      'Analyse the effects of currency depreciation on exports, imports, inflation and growth',
      'Apply the Marshall-Lerner condition and J-curve to current-account analysis',
      'Evaluate floating vs fixed exchange rate systems'
    ],
    tip: 'Depreciation: \xa3 falls in value → exports cheaper in foreign currency (volume rises) → imports dearer in \xa3 (volume falls). Net effect on current account depends on price elasticities (Marshall-Lerner).',
    stages: [
      { num: 1, name: 'Learn it', sub: '9 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'exchange_rates_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Exchange rates: the price of money',
      lede: 'A currency is just another asset – its price moves with supply, demand, and expectations. Four lenses unlock how rates are set and why they matter.',
      branches: [
        { tone: 'green',  label: 'Supply and demand', sub: 'Exports, FDI inflows, and hot-money chasing UK assets create demand for £. Imports and capital outflows create supply. The market clears like any other.' },
        { tone: 'blue',   label: 'Drivers of movement', sub: 'Interest-rate differentials and inflation gaps drive the long run; speculation and sentiment dominate the short run. Distinguish the two timeframes.' },
        { tone: 'amber',  label: 'Trade-offs of depreciation', sub: 'A weaker £ boosts exports but raises imported inflation and cuts real wages. No free lunch – every move helps some, hurts others.' },
        { tone: 'purple', label: 'Floating vs fixed regimes', sub: 'Float lets the market adjust but invites volatility. Peg locks in stability but surrenders monetary policy. Managed floats sit in the middle.' }
      ],
      body: 'The <strong>foreign exchange market (FOREX)</strong> is a global, decentralised market where currencies are bought and sold. The exchange rate is determined by supply and demand.<br><br><strong>Demand for \xa3:</strong> foreigners buying UK exports, investing in the UK, or speculating that \xa3 will rise.<br><strong>Supply of \xa3:</strong> UK residents buying imports, investing abroad, or speculating that \xa3 will fall.<br><br>A <strong>depreciation</strong> (or devaluation if fixed system) means the \xa3 buys fewer foreign currency units. An <strong>appreciation</strong> means \xa3 buys more.',
      keyTerms: [
        { term: 'Appreciation', def: 'The currency rises in value against others – exports become more expensive, imports cheaper.' },
        { term: 'Depreciation', def: 'The currency falls in value – exports become cheaper, imports more expensive.' },
        { term: 'Devaluation', def: 'A deliberate lowering of a fixed or managed exchange rate by the government or central bank.' }
      ],
      examEdge: 'Always state the direction of trade effect precisely: depreciation makes UK exports cheaper in foreign currency terms AND UK imports more expensive in \xa3 terms. Two separate effects – both matter for the current account.'
    },
    {
      id: 'exchange_rates_2',
      template: 'cause',
      title: 'Factors Shifting the Exchange Rate',
      causes: [
        { head: 'Interest rate differentials', body: 'Higher UK interest rates attract "hot money" capital inflows – foreigners buy \xa3 to deposit in UK banks. Demand for \xa3 rises, exchange rate appreciates. Major short-run driver.' },
        { head: 'Inflation differentials', body: 'If UK inflation exceeds trading partners, UK exports become less competitive, demand for \xa3 falls. Exchange rate depreciates (Purchasing Power Parity theory – long-run tendency).' },
        { head: 'Current account balance', body: 'Persistent current account surplus → net demand for \xa3 → appreciation. Persistent deficit → net supply of \xa3 → depreciation.' },
        { head: 'Speculation and sentiment', body: 'Short-run exchange rates dominated by expectations. "Risk-off" episodes (e.g. Brexit vote) trigger rapid depreciation as investors exit \xa3 assets.' },
        { head: 'Government/central bank intervention', body: 'Central banks can buy or sell their own currency to influence the rate. Effective short-run but costly in foreign reserves; hard to sustain long-run.' }
      ],
      examEdge: 'In the short run, interest rate differentials and speculation dominate. In the long run, PPP and productivity growth matter more. Essays should distinguish these timeframes – a single answer covering only one gets capped.'
    },
    {
      id: 'exchange_rates_3',
      template: 'mechanisms',
      title: 'Effects of Depreciation',
      intro: 'Depreciation has wide-ranging macro effects – some beneficial, some harmful – that depend on the size of the depreciation and the structure of the economy.',
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
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Marshall-Lerner Condition & J-Curve',
      lede: 'Depreciation makes exports cheaper and imports dearer – but the current account does not improve immediately. The J-curve traces the path; Marshall-Lerner says when it actually completes.',
      interactiveDiagram: {
        svgKey: 'jCurveInteractive',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'Before devaluation',
            tone: 'blue',
            head: 'The pre-depreciation position',
            body: 'Currency is stable and the current account sits at its pre-depreciation level. Then the pound depreciates – exports become cheaper abroad, imports dearer at home. The intuition says CA should improve, but contracts and prices are locked in the short run.',
            analysis: 'Key question: will the CA improve? Not immediately – volumes take time to adjust.'
          },
          {
            label: 'Worse first',
            tone: 'rose',
            show: ['idl-1'],
            head: 'CA dips to the trough',
            body: 'Import prices rise immediately in £, but contracts are fixed – buyers keep purchasing at the new higher price. Export volumes do not jump because foreign buyers also sit on existing contracts. The import bill rises while export revenue is flat, so the CA worsens to its trough at ~6 months.',
            analysis: 'This is why depreciation looks like it isn\'t working in the short run. With elasticities low (PED_X + PED_M < 1) the CA is actively worsening.'
          },
          {
            label: 'Recovery',
            tone: 'green',
            show: ['idl-1', 'idl-2'],
            head: 'Volumes respond and CA improves',
            body: 'New contracts get written at the post-depreciation prices. Foreign demand for cheaper exports picks up and domestic buyers switch away from dearer imports. The CA recovers past the baseline into surplus – the classic J-curve shape. Typical duration: 12–18 months.',
            analysis: 'The trick is patience. The mechanism was always going to work – it just needed time for elasticities to kick in.'
          },
          {
            label: 'Marshall-Lerner',
            tone: 'purple',
            show: ['idl-1', 'idl-2', 'idl-3'],
            head: 'The J only completes if M-L holds',
            body: 'The recovery requires <strong>|PED_X| + |PED_M| &gt; 1</strong> – the volume response large enough to outweigh the adverse price effect. If exports and imports are too inelastic, depreciation leaves the CA <em>permanently worse</em> (dashed purple path).',
            analysis: 'UK services-heavy exports are relatively inelastic – limits how far the J completes in practice. Always link M-L to the country\'s export composition in an evaluation.'
          }
        ]
      },
      examEdge: 'If a country exports unique goods (aircraft, luxury brands, pharmaceuticals), PED_X is low – depreciation boosts revenues but volume rises little. If exports are commodity-like, PED_X is high and volume response is large. Always state the M-L condition explicitly and link it to the country\'s export composition.'
    },
    {
      id: 'exchange_rates_worked',
      template: 'worked-example',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Worked Example: Marshall-Lerner Condition',
      scenario: 'The pound <strong>depreciates 20%</strong> against the dollar. A government economist must assess whether the current account deficit will improve.\n\nGiven: UK exports = \xa3100bn \xb7 UK imports = \xa3100bn \xb7 PED for UK exports = −0.7 \xb7 PED for UK imports = −0.5',
      steps: [
        {
          label: 'Step 1 – Check the Marshall-Lerner condition',
          hint: 'The M-L condition says depreciation improves the current account only if the sum of the absolute PED values exceeds 1. Does it hold here?',
          answer: '<strong>|PED_X| + |PED_M| = 0.7 + 0.5 = 1.2 &gt; 1</strong>\n\nThe Marshall-Lerner condition IS satisfied. In the long run (once contracts adjust and volumes respond), depreciation will improve the current account. If the sum had been less than 1, depreciation would have made the deficit worse.'
        },
        {
          label: 'Step 2 – Calculate the effect on export revenue',
          hint: 'Depreciation makes UK exports cheaper in dollars. How does the 20% depreciation affect the volume of exports – and therefore export revenue in pounds?',
          answer: 'UK export prices in \xa3 are <strong>unchanged</strong> – UK firms still receive the same pounds per unit.\nIn dollars, UK goods are <strong>20% cheaper</strong> → foreign buyers respond.\n\n%ΔQ_X = |PED_X| \xd7 depreciation = 0.7 \xd7 20% = <strong>+14%</strong>\n\nNew export revenue: \xa3100bn \xd7 1.14 = <strong>\xa3114bn</strong> (up \xa314bn)\n\nNote: export revenue in \xa3 rises because price per unit is unchanged but volume is up 14%.'
        },
        {
          label: 'Step 3 – Calculate the effect on import spending',
          hint: 'Depreciation makes imports more expensive in pounds. How do higher import prices affect the volume of imports – and the total import bill?',
          answer: 'UK import prices in \xa3 rise <strong>+20%</strong> (weaker \xa3 → foreign goods cost more).\nImporters respond by buying less.\n\n%ΔQ_M = |PED_M| \xd7 price rise = 0.5 \xd7 20% = <strong>−10%</strong>\n\nNew import spending: \xa3100bn \xd7 1.20 \xd7 0.90 = <strong>\xa3108bn</strong> (up \xa38bn)\n\nThe import bill rose because |PED_M| = 0.5 &lt; 1 – the price effect (+20%) outweighs the volume fall (−10%). Import spending rises despite fewer imports being bought.'
        },
        {
          label: 'Step 4 – Calculate the net change in the trade balance',
          hint: 'Use X − M before and after depreciation. By how much does the current account improve?',
          answer: 'Before depreciation: \xa3100bn − \xa3100bn = <strong>\xa30bn</strong> (balanced)\nAfter depreciation: \xa3114bn − \xa3108bn = <strong>+\xa36bn surplus</strong>\n\n<strong>Improvement = +\xa36bn</strong>\n\nExports rose by \xa314bn but imports rose by only \xa38bn – so the net position improved by \xa36bn. This confirms M-L: with |PED_X| + |PED_M| = 1.2, the volume response was large enough to outweigh the adverse price effect on imports.'
        },
        {
          label: 'Step 5 – Apply the J-curve: will this happen immediately?',
          hint: 'The M-L result is a long-run outcome. What happens in the short run – and why is the path shaped like a “J”?',
          answer: '<strong>Short run (0–6 months):</strong> trade contracts are fixed. Import volumes do not fall but the import bill in \xa3 rises (prices up). Export volumes unchanged. Current account <em>worsens</em>.\n\n<strong>Medium run (6–18 months):</strong> contracts renegotiated. Export orders rise as foreign buyers respond. Import substitution kicks in. CA starts improving.\n\n<strong>Long run:</strong> the full +\xa36bn improvement materialises – but only if the M-L condition holds.\n\n<strong>UK evaluation:</strong> financial services exports (a large UK share) are relatively price-inelastic. The actual UK M-L sum may be close to 1 – improvement is modest and slow. Always tailor to the country\'s export composition.'
        }
      ],
      conclusion: {
        label: 'Key result',
        text: '|PED_X| + |PED_M| = 1.2 > 1 → M-L satisfied → CA improves by +\xa36bn long-run. Short-run: J-curve means CA first worsens before improving. For the UK, with inelastic services exports, the actual gain is smaller and slower than this model predicts.'
      }
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
      examEdge: '1992 Black Wednesday: UK tried to maintain ERM parity with DM. Speculators (Soros) shorted \xa3; Bank of England spent \xa315bn in reserves; forced exit. Key lesson: fixed rates are unsustainable if domestic conditions diverge from anchor – use this as a case study of fixed-rate vulnerability.'
    },
    {
      id: 'exchange_rates_6',
      template: 'framing',
      title: 'Managed Exchange Rates & Currency Manipulation',
      body: 'Most economies operate <strong>managed floats</strong> – rates are primarily market-determined but central banks intervene to smooth volatility. Some countries deliberately undervalue their currency to gain export competitiveness – China was accused of this in the 2000s-2010s through sterilised intervention (buying US Treasuries to absorb capital inflows).<br><br>A <strong>currency war</strong> occurs when multiple countries simultaneously devalue to gain competitive advantage – self-defeating in aggregate since all cannot depreciate simultaneously. "Beggar-thy-neighbour" policy.<br><br>The IMF monitors exchange rate policies and can designate countries as "currency manipulators," triggering diplomatic and trade pressure.',
      keyTerms: [
        { term: 'Managed float', def: 'Market-set rate with periodic central bank intervention to reduce volatility.' },
        { term: 'Currency manipulation', def: 'Deliberate undervaluation of currency to gain unfair export advantage.' },
        { term: 'Beggar-thy-neighbour', def: 'Policy that benefits one country at others\' expense; currency depreciation is a classic example.' }
      ],
      examEdge: 'US-China tension over currency is the exam case. China\'s current account surplus with the US creates political pressure for dollar-yuan revaluation. But China\'s peg supported export-led growth from the 1990s – demonstrating that exchange rate policy is inseparable from development strategy.'
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
      examEdge: 'A 25-mark essay on exchange rate policy requires systematic treatment of ALL objectives – growth, inflation, BoP, and employment – and how policy-makers face impossible trade-offs when these conflict. "It depends on the cause of the change" is valid evaluation.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};
