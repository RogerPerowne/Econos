window.ECONOS_TOPIC = {
  id: 'exchange_rates',
  topicNum: '4.5',
  theme: 'Theme 4 \xb7 A Global Perspective',
  sessionLabel: 'Session 1 of 3: Learn',
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
      lede: 'A currency is just another asset — its price moves with supply, demand, and expectations. Four lenses unlock how rates are set and why they matter.',
      branches: [
        { tone: 'green',  label: 'Supply and demand', sub: 'Exports, FDI inflows, and hot-money chasing UK assets create demand for £. Imports and capital outflows create supply. The market clears like any other.' },
        { tone: 'blue',   label: 'Drivers of movement', sub: 'Interest-rate differentials and inflation gaps drive the long run; speculation and sentiment dominate the short run. Distinguish the two timeframes.' },
        { tone: 'amber',  label: 'Trade-offs of depreciation', sub: 'A weaker £ boosts exports but raises imported inflation and cuts real wages. No free lunch — every move helps some, hurts others.' },
        { tone: 'purple', label: 'Floating vs fixed regimes', sub: 'Float lets the market adjust but invites volatility. Peg locks in stability but surrenders monetary policy. Managed floats sit in the middle.' }
      ],
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
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Marshall-Lerner Condition & J-Curve',
      lede: 'Depreciation makes exports cheaper and imports dearer — but the current account does not improve immediately. The J-curve traces the path; Marshall-Lerner says when it actually completes.',
      diagramKey: 'jCurveInteractive',
      steps: [
        {
          key: 'base',
          label: 'Starting point',
          text: 'Before depreciation the currency is stable and the current account sits at its <strong>pre-depreciation level</strong>. Then £ depreciates: exports become cheaper in foreign currency, imports dearer in £. The intuition says CA should improve — but contracts and prices are locked in short-run, so <strong>volumes cannot adjust immediately</strong>.'
        },
        {
          key: 'extension',
          label: 'The J-curve unfolds',
          text: 'Four phases: <strong>A → B</strong> short-run worsening (import bills up in £, export volumes unchanged); <strong>B</strong> trough at ~6 months (maximum deterioration); <strong>B → C</strong> volumes respond as new contracts are written and demand for cheaper exports picks up; <strong>C → D</strong> long-run improvement — CA rises above the pre-depreciation level. Typical duration: 12–18 months.'
        },
        {
          key: 'shift',
          label: 'Marshall-Lerner condition',
          text: 'The J-curve only completes if <strong>|PED_X| + |PED_M| &gt; 1</strong> — the volume response is large enough to outweigh the price effect. If exports and imports are inelastic (e.g. unique goods, services-heavy trade), depreciation can leave the CA <strong>permanently worse</strong> (dashed purple path). The UK\'s services-heavy exports are relatively inelastic — limits the J in practice.'
        }
      ],
      examEdge: 'If a country exports unique goods (aircraft, luxury brands, pharmaceuticals), PED_X is low — depreciation boosts revenues but volume rises little. If exports are commodity-like, PED_X is high and volume response is large. Always state the M-L condition explicitly and link it to the country\'s export composition.'
    },
    {
      id: 'exchange_rates_worked',
      template: 'worked-example',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Worked Example: Marshall-Lerner Condition',
      scenario: 'The pound <strong>depreciates 20%</strong> against the dollar. A government economist must assess whether the current account deficit will improve.\n\nGiven: UK exports = \xa3100bn \xb7 UK imports = \xa3100bn \xb7 PED for UK exports = −0.7 \xb7 PED for UK imports = −0.5',
      steps: [
        {
          label: 'Step 1 — Check the Marshall-Lerner condition',
          hint: 'The M-L condition says depreciation improves the current account only if the sum of the absolute PED values exceeds 1. Does it hold here?',
          answer: '<strong>|PED_X| + |PED_M| = 0.7 + 0.5 = 1.2 &gt; 1</strong>\n\nThe Marshall-Lerner condition IS satisfied. In the long run (once contracts adjust and volumes respond), depreciation will improve the current account. If the sum had been less than 1, depreciation would have made the deficit worse.'
        },
        {
          label: 'Step 2 — Calculate the effect on export revenue',
          hint: 'Depreciation makes UK exports cheaper in dollars. How does the 20% depreciation affect the volume of exports — and therefore export revenue in pounds?',
          answer: 'UK export prices in \xa3 are <strong>unchanged</strong> — UK firms still receive the same pounds per unit.\nIn dollars, UK goods are <strong>20% cheaper</strong> → foreign buyers respond.\n\n%ΔQ_X = |PED_X| \xd7 depreciation = 0.7 \xd7 20% = <strong>+14%</strong>\n\nNew export revenue: \xa3100bn \xd7 1.14 = <strong>\xa3114bn</strong> (up \xa314bn)\n\nNote: export revenue in \xa3 rises because price per unit is unchanged but volume is up 14%.'
        },
        {
          label: 'Step 3 — Calculate the effect on import spending',
          hint: 'Depreciation makes imports more expensive in pounds. How do higher import prices affect the volume of imports — and the total import bill?',
          answer: 'UK import prices in \xa3 rise <strong>+20%</strong> (weaker \xa3 → foreign goods cost more).\nImporters respond by buying less.\n\n%ΔQ_M = |PED_M| \xd7 price rise = 0.5 \xd7 20% = <strong>−10%</strong>\n\nNew import spending: \xa3100bn \xd7 1.20 \xd7 0.90 = <strong>\xa3108bn</strong> (up \xa38bn)\n\nThe import bill rose because |PED_M| = 0.5 &lt; 1 — the price effect (+20%) outweighs the volume fall (−10%). Import spending rises despite fewer imports being bought.'
        },
        {
          label: 'Step 4 — Calculate the net change in the trade balance',
          hint: 'Use X − M before and after depreciation. By how much does the current account improve?',
          answer: 'Before depreciation: \xa3100bn − \xa3100bn = <strong>\xa30bn</strong> (balanced)\nAfter depreciation: \xa3114bn − \xa3108bn = <strong>+\xa36bn surplus</strong>\n\n<strong>Improvement = +\xa36bn</strong>\n\nExports rose by \xa314bn but imports rose by only \xa38bn — so the net position improved by \xa36bn. This confirms M-L: with |PED_X| + |PED_M| = 1.2, the volume response was large enough to outweigh the adverse price effect on imports.'
        },
        {
          label: 'Step 5 — Apply the J-curve: will this happen immediately?',
          hint: 'The M-L result is a long-run outcome. What happens in the short run — and why is the path shaped like a “J”?',
          answer: '<strong>Short run (0–6 months):</strong> trade contracts are fixed. Import volumes do not fall but the import bill in \xa3 rises (prices up). Export volumes unchanged. Current account <em>worsens</em>.\n\n<strong>Medium run (6–18 months):</strong> contracts renegotiated. Export orders rise as foreign buyers respond. Import substitution kicks in. CA starts improving.\n\n<strong>Long run:</strong> the full +\xa36bn improvement materialises — but only if the M-L condition holds.\n\n<strong>UK evaluation:</strong> financial services exports (a large UK share) are relatively price-inelastic. The actual UK M-L sum may be close to 1 — improvement is modest and slow. Always tailor to the country\'s export composition.'
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
    },
    {
      id: 'er-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 9 of 9',
      question: 'Evaluate the view that a depreciation of the pound will always improve the UK\'s current account balance. [25 marks]',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define depreciation and current account. State the Marshall-Lerner condition as the key analytical framework. Signal a conditional conclusion.',
          hint: 'Depreciation = fall in currency value in a floating system. Current account = trade in goods + services + primary + secondary income. Marshall-Lerner: depreciation improves current account only if PEDx + PEDm > 1.',
          model: 'A depreciation of the pound means a fall in the sterling exchange rate — the price of £1 falls in terms of foreign currencies, so exports become cheaper for foreign buyers and imports become more expensive for UK consumers. The current account records the flow of money from trade in goods and services, primary income (investment returns), and secondary income (transfers). A depreciation is often argued to improve the current account by raising export volumes and reducing import volumes. However, this conclusion is conditional: the Marshall-Lerner condition states that depreciation improves the current account only if the sum of the price elasticities of demand for exports and imports (|PEDx| + |PEDm|) exceeds unity. In the short run, this condition may not hold, producing a J-curve pattern rather than immediate improvement. Whether depreciation "always" improves the current account therefore depends on these price elasticities, the J-curve time profile, and the macroeconomic conditions in which the depreciation occurs.'
        },
        {
          type: 'analysis',
          label: 'Analysis — the case that depreciation improves the current account',
          prompt: 'Explain the price competitiveness mechanism: exports cheaper, imports dearer, net trade balance improves. Reference the Marshall-Lerner condition.',
          hint: '£ depreciates → exports cheaper in foreign currency → PEDx determines volume response → export revenue rises if PEDx > 0. Imports dearer in £ → PEDm determines volume response → import spending falls if PEDm > 0. If |PEDx| + |PEDm| > 1, current account improves.',
          model: 'A sterling depreciation improves price competitiveness directly: if £1 falls from $1.40 to $1.20, UK goods that previously cost $140 now cost $120 in the US market. If demand for UK exports is price-elastic (|PEDx| > 0.5), export volume rises enough to increase total export revenue — the fall in price is more than offset by the gain in volume. Simultaneously, imports priced in foreign currencies cost more in sterling terms, reducing import volumes if UK demand for imports is price-elastic (|PEDm| > 0.5). The combined effect, captured in the Marshall-Lerner condition, requires |PEDx| + |PEDm| > 1 for the current account to improve. In the long run, price elasticities tend to be relatively high: consumers and firms have time to switch suppliers, contracts can be renegotiated, and substitute products can be found. Empirically, the long-run price elasticities for UK trade are generally estimated to satisfy the Marshall-Lerner condition — so a sustained depreciation should, over time, improve the current account balance.'
        },
        {
          type: 'counter',
          label: 'Counter-argument — why depreciation may not improve the current account',
          prompt: 'Explain the J-curve effect (short-run elasticities are low), pass-through inflation, and structural factors that limit improvement.',
          hint: 'J-curve: in the short run, contracts are fixed, so volumes don\'t change immediately — the current account worsens as import prices rise before volumes adjust. Import-price inflation → real depreciation erodes over time. If exports are price-inelastic (luxury goods, niche manufactures), volume response is weak. Domestic inflation may rapidly offset the nominal depreciation.',
          model: 'In the short run, the Marshall-Lerner condition is frequently violated, producing the J-curve effect. Existing trade contracts are fixed in advance: a UK importer contracted to pay $100m for US goods must now pay more in sterling, worsening the current account immediately. Meanwhile, foreign buyers take time to respond to lower sterling prices by switching suppliers — new contracts take months to negotiate. The initial effect of depreciation is therefore a deterioration in the current account (the downward stroke of the J), before volume adjustments produce the eventual improvement (the upward stroke). For the UK, this adjustment lag has been estimated at 1-2 years. A second structural limitation is inflation pass-through: as import prices rise in sterling, domestic inflation increases. Higher UK price levels erode the competitiveness gain from depreciation in nominal terms — over time, the real exchange rate may recover toward its pre-depreciation level, leaving the current account little changed. This is especially relevant for a commodity-importing economy like the UK, where energy and food price increases following depreciation can significantly offset the export competitiveness gain. Furthermore, if UK exports are price-inelastic — either because they are high-quality differentiated goods where buyers are less sensitive to price, or because there is limited capacity to scale up export production — the volume response to cheaper prices will be limited.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — macroeconomic context determines effectiveness',
          prompt: 'Evaluate whether depreciation improves the current account conditional on: export product mix, trading partner income levels, domestic capacity, and current account composition.',
          hint: 'If UK\'s main trading partners are in recession, their income effects dominate price effects — demand for UK exports falls despite lower prices. If UK inflation is already high, real depreciation is small. Services trade (60% of UK exports) may be less price-sensitive than goods trade. Current account composition: UK primary income deficit depends on investment flows, not just trade prices.',
          model: 'The effectiveness of depreciation in improving the current account also depends on the macroeconomic context. If the UK\'s trading partners (EU: 42% of UK trade; US: 15%) are themselves in recession, the income effect on demand for UK exports dominates the price effect — even cheaper UK goods will not find willing buyers if foreign incomes are depressed. This was the experience after the 2008 financial crisis, when sterling depreciated by 25% but the current account deficit persisted and widened, partly because the global recession suppressed export demand. The composition of UK trade is also relevant: services represent approximately 60% of UK exports (financial services, education, tourism). Service exports are generally less price-sensitive than goods — demand for UK legal services, financial products, or university education is determined more by quality and reputation than price competitiveness. Depreciation-driven improvement is therefore more limited for a service-dominated exporter than for a manufacturing-dominated one. Finally, the UK\'s current account deficit includes a primary income deficit (investment income flows), which depends on capital flows and asset returns, not exchange rates. Even a large improvement in the trade balance may be insufficient to correct the overall current account if the income deficit persists.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Make a conditional judgement: under what conditions does depreciation improve the current account? What is the overall verdict?',
          hint: 'Depreciation CAN improve the current account, but only when: Marshall-Lerner holds in the long run, pass-through inflation is contained, trading partners\' incomes are growing, and there is export capacity to respond. Short run worsening (J-curve) is likely. "Always" improves is clearly false.',
          model: 'The view that depreciation always improves the current account is clearly too strong. Depreciation is a necessary but insufficient condition for current account improvement, and even its sufficiency is conditional. In the long run, where Marshall-Lerner elasticities are satisfied, trading partner growth is positive, domestic inflation is contained, and there is spare productive capacity to expand exports, depreciation can and does improve the current account — the sterling depreciation of 2008-09 did eventually contribute to some rebalancing toward export growth from 2012 onwards. However, the short-run J-curve deterioration is well-documented and can persist for 1-2 years; pass-through inflation can rapidly erode the real competitiveness gain; and structural features of the UK economy (service dominance, inelastic export products, income account deficit) limit the trade adjustment channel. The most accurate summary is that depreciation is a useful but imperfect tool for current account adjustment — more reliable in the long run than the short run, and more effective for goods-intensive exporters than service-intensive ones like the UK. Policymakers cannot rely on exchange rate adjustment alone to correct persistent current account imbalances; structural supply-side reforms to boost export capacity and productivity are also required.'
        }
      ]
    }
  ]
};
