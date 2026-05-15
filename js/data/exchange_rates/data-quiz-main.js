/* ============================================================
   ECONOS — Quiz content for: Exchange Rates
   10 questions covering FOREX markets, depreciation effects,
   Marshall-Lerner condition, J-curve, floating vs fixed systems,
   and exchange rate policy trade-offs.
   ============================================================ */

(function () {

  // Simple FOREX supply/demand diagram
  var FOREX_SVG =
    '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif">' +
    '<line x1="50" y1="20" x2="50" y2="270" stroke="#0B1426" stroke-width="2"/>' +
    '<line x1="50" y1="270" x2="380" y2="270" stroke="#0B1426" stroke-width="2"/>' +
    '<text x="38" y="22" fill="#0B1426" font-size="11" text-anchor="end" font-weight="700">&#163;/$</text>' +
    '<text x="378" y="288" fill="#0B1426" font-size="11" font-weight="700">Q&#163;</text>' +
    '<line x1="80" y1="50" x2="340" y2="260" stroke="#2563EB" stroke-width="2.5"/>' +
    '<text x="343" y="260" fill="#2563EB" font-size="11" font-weight="700">D&#163;</text>' +
    '<line x1="80" y1="260" x2="340" y2="50" stroke="#1FB574" stroke-width="2.5"/>' +
    '<text x="343" y="50" fill="#1FB574" font-size="11" font-weight="700">S&#163;</text>' +
    '<circle cx="210" cy="155" r="5" fill="#F5B800"/>' +
    '<line x1="50" y1="155" x2="210" y2="155" stroke="#0B1426" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>' +
    '<text x="38" y="159" fill="#F5B800" font-size="10" text-anchor="end" font-weight="700">e*</text>' +
    '<text x="210" y="288" fill="#0B1426" font-size="10" text-anchor="middle" font-weight="700">Q*</text>' +
    '</svg>';

  window.ECONOS_QUIZ = {
    id:       'exchange_rates_main',
    topicId:  'exchange_rates_main',
    title:    'Exchange Rates',
    subtitle: 'Theme 4.5 · Edexcel A-Level',
    sessionLabel: 'Session 1 of 3: Learn',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering FOREX market determination, the effects of depreciation on trade and macroeconomic objectives, the Marshall-Lerner condition, the J-curve effect, floating versus fixed exchange rate systems, and currency manipulation. Includes calculation, diagram interpretation, and chain questions.',
    shortNames: {
      'exchange_rates_1': 'FOREX market',
      'exchange_rates_2': 'Factors shifting the exchange rate',
      'exchange_rates_3': 'Effects of depreciation',
      'exchange_rates_4': 'Marshall-Lerner and J-curve',
      'exchange_rates_5': 'Floating vs fixed',
      'exchange_rates_6': 'Managed rates and manipulation',
      'exchange_rates_7': 'Exchange rates and macro objectives'
    },

    questions: [

      /* 1 — Diagram interpretation: FOREX */
      { type: 'diagram_interp',
        stem: 'The Bank of England unexpectedly raises interest rates by 0.75 percentage points, creating a large positive differential relative to US and Eurozone rates.',
        svg: FOREX_SVG,
        caption: 'Initial equilibrium exchange rate e*, quantity of &#163; traded Q*.',
        question: 'What is the MOST LIKELY immediate effect on the &#163;/$ exchange rate?',
        opts: [
          '&#163; appreciates: higher UK interest rates attract "hot money" capital inflows — foreigners buy &#163; to deposit in UK banks, shifting D&#163; right and raising the exchange rate',
          '&#163; depreciates: higher interest rates slow the UK economy, reducing export demand, so foreigners demand fewer &#163;, shifting D&#163; left',
          '&#163; is unaffected: currency markets are forward-looking and had already priced in the rate rise before the announcement',
          '&#163; depreciates: higher interest rates increase the supply of &#163; as UK residents save more domestically rather than investing abroad'
        ],
        ans: 0,
        exp: 'A positive UK-US interest rate differential creates an immediate <strong>capital inflow</strong> as international investors seek higher returns on UK deposits. Foreigners must buy &#163; to invest in the UK &#8212; the demand for &#163; shifts right. The &#163; <strong>appreciates</strong>. This is the dominant short-run determinant of exchange rates &#8212; interest rate differentials and "hot money" flows. The transmission is almost instantaneous: currency markets are highly liquid and forward-looking. If the rate rise was expected, some appreciation may have already occurred (option C has a partial truth) but an unexpectedly large rise would still cause further appreciation. Long-run purchasing power parity (PPP) matters more over years and decades, not in the immediate short run.'
      },

      /* 2 — MCQ: Marshall-Lerner condition */
      { type: 'mcq',
        stem: 'The Marshall-Lerner condition states that a currency depreciation will <strong>improve</strong> the current account only if:',
        opts: [
          'The sum of the absolute price elasticity of demand for exports and imports exceeds 1: |PEDx| + |PEDm| &gt; 1',
          'The domestic currency depreciates by more than 10% to provide sufficient price stimulus to export volumes',
          'Export prices fall by exactly the same percentage as the depreciation, fully passing the price cut to foreign buyers',
          'The central bank simultaneously raises interest rates to prevent imported inflation from offsetting the export competitiveness gain'
        ],
        ans: 0,
        exp: 'The <strong>Marshall-Lerner condition</strong>: depreciation improves the current account <em>if and only if</em> |PEDx| + |PEDm| &gt; 1. Here\'s the logic: depreciation makes exports cheaper in foreign currency (X revenues rise if export demand is elastic) and imports dearer in domestic currency (import spending falls if import demand is elastic). If both demand elasticities are high (goods are substitutable), volume effects dominate and the current account improves. If elasticities are low (inelastic goods &#8212; pharmaceuticals, energy), the price effect dominates: the import bill rises in domestic currency terms faster than export revenues, <em>worsening</em> the current account. For the UK, the Marshall-Lerner condition holds in the long run but not immediately (hence the J-curve).'
      },

      /* 3 — Calculation: exchange rate and export price */
      { type: 'calculation',
        context: 'A UK firm exports machinery priced at &#163;10,000. The &#163;/$ exchange rate depreciates from &#163;1 = $1.40 to &#163;1 = $1.20. The firm keeps its &#163; price unchanged.',
        working: [
          'Before depreciation: export price in $ = £10,000 × $1.40 = $14,000',
          'After depreciation: export price in $ = £10,000 × $1.20 = $12,000',
          'Price reduction in $ terms = $14,000 - $12,000 = $2,000',
          'Percentage price reduction for US buyers = $2,000 / $14,000 × 100 = 14.3%',
          'Firm receives the same £10,000 per unit — no change in £ revenue per unit sold'
        ],
        stem: 'What happens to the price paid by a US buyer, and to the UK firm\'s &#163; revenue per unit?',
        opts: [
          { ped: 'US price falls from $14,000 to $12,000 (&#8722;14.3%); UK firm\'s &#163; revenue per unit is unchanged at &#163;10,000', typ: 'Export $ price = £10,000 × new rate $1.20 = $12,000. Firm earns same £10,000.', rev: 'Depreciation makes exports cheaper in foreign currency without reducing £ revenue — the competitiveness gain' },
          { ped: 'US price rises to $16,000; UK firm earns &#163;13,333 per unit', typ: 'Confused direction of depreciation — used appreciation formula', rev: 'Depreciation means the £ buys fewer $: fewer $ per £ means a lower $ price for the same £ price' },
          { ped: 'US price unchanged at $14,000; UK firm earns &#163;11,667 per unit', typ: 'Assumed the US price stays constant and the £ price adjusts — opposite of assumption in question', rev: 'The question states the firm keeps its £ price unchanged, so the $ price changes with the exchange rate' },
          { ped: 'US price falls to $12,000; UK firm earns &#163;8,571 per unit', typ: 'Divided the $ price by the new exchange rate to find £ revenue: $12,000 ÷ 1.40 ≠ correct', rev: 'Firm earns £10,000 (unchanged); converts to $ at new rate: £10,000 × 1.20 = $12,000' }
        ],
        ans: 0,
        exp: 'Before depreciation: US buyer pays $10,000 &#215; 1.40 = <strong>$14,000</strong>. After depreciation: $10,000 &#215; 1.20 = <strong>$12,000</strong> &#8212; a 14.3% price reduction for US buyers. The UK firm still receives <strong>&#163;10,000</strong> per unit &#8212; its domestic revenue is unchanged. This is the core mechanism of how depreciation boosts competitiveness: exports become cheaper in foreign currency terms <em>without reducing the exporter\'s domestic revenue per unit</em>. Whether the volume effect (more units sold) is large enough to increase total revenue depends on the price elasticity of export demand &#8212; the Marshall-Lerner condition.'
      },

      /* 4 — Elastic sort: J-curve */
      { type: 'elastic_sort',
        stem: 'The J-curve describes how the current account responds to depreciation over time. Place the following phases in the correct order by dragging them.',
        categories: ['short', 'medium', 'long'],
        categoryLabels: ['Short run (0-6 months)', 'Medium run (6-18 months)', 'Long run (18+ months)'],
        goods: [
          { icon: '📉', label: 'Current account worsens: existing import contracts denominated in foreign currency cost more in &#163; terms', note: '', ans: 'short' },
          { icon: '🔄', label: 'Export volumes begin to rise as foreign buyers respond to lower &#163; prices; import volumes start to fall', note: '', ans: 'medium' },
          { icon: '📈', label: 'If Marshall-Lerner holds, current account improves as volume effects dominate the price effects', note: '', ans: 'long' },
          { icon: '⏸️', label: 'Current account at its worst: import bills inflated but export volumes not yet adjusted', note: '', ans: 'short' },
          { icon: '🔁', label: 'Supply chains adjust; firms switch suppliers; consumers substitute domestic for imported goods', note: '', ans: 'medium' },
          { icon: '✅', label: 'Full volume adjustment complete; trade flows reflect new competitive equilibrium', note: '', ans: 'long' }
        ],
        exp: '<strong>The J-curve</strong> explains why depreciation initially <em>worsens</em> the current account before improving it. In the <strong>short run</strong>: contracts are fixed in foreign currency; the import bill rises immediately in &#163; terms (more &#163; needed to pay the same $) but export volumes do not yet rise (buyers need time to adjust). Current account worsens. In the <strong>medium run</strong>: price signals filter through; export volumes rise (foreign buyers respond to cheaper &#163; prices); imports substitute to domestically produced goods. In the <strong>long run</strong>: full adjustment; if Marshall-Lerner holds (|PEDx| + |PEDm| &gt; 1), the current account improves. The UK J-curve lasts approximately 12-18 months empirically. This explains why currency depreciation alone is rarely a sufficient short-run current account policy &#8212; patience and supporting policies are needed.'
      },

      /* 5 — Diagnostic pair: floating vs fixed */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate the relative merits of floating and fixed exchange rate systems."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Yuki', badge: 'Candidate A',
            answer: 'A <strong>floating exchange rate</strong> provides automatic adjustment: a current account deficit causes currency depreciation, which improves competitiveness and partially corrects the deficit without requiring active policy intervention. It also preserves monetary policy independence &#8212; the central bank can set interest rates to target domestic inflation rather than defend a peg. The UK\'s free float since 1992 is consistent with operational independence of the Bank of England. However, floating rates introduce volatility that can deter trade and investment &#8212; businesses cannot price long-term contracts with certainty. A <strong>fixed rate</strong> provides certainty for traders but creates two critical vulnerabilities: (1) the rate must be defended with foreign reserves &#8212; the 1992 UK ERM crisis (Black Wednesday) shows that this is unsustainable if domestic fundamentals diverge from the anchor country; and (2) the country loses the exchange rate as an adjustment tool for external imbalances. The optimal choice depends on the country\'s trade openness, labour market flexibility, and whether it faces symmetric shocks &#8212; the Mundell optimal currency area criteria. There is no universally superior system.'
          },
          { name: 'Dom', badge: 'Candidate B',
            answer: 'A floating exchange rate is when the exchange rate is set by market forces and changes according to supply and demand. A fixed exchange rate is when the government sets the exchange rate at a specific level. Floating rates are good because they adjust automatically and the central bank does not have to worry about defending the rate. Fixed rates are good because they give certainty to businesses. The problem with fixed rates is that they can be attacked by speculators as happened in the UK in 1992. Overall floating rates are probably better for most countries because they give more flexibility, but some countries prefer fixed rates for stability.'
          }
        ],
        ans: 0,
        exp: '<strong>Yuki</strong> gives the stronger answer. She explains the automatic adjustment mechanism precisely, identifies the monetary policy independence gain, uses the 1992 ERM case with institutional detail (Black Wednesday), specifies the two vulnerabilities of fixed rates, and references the Mundell optimal currency area theory as a framework for evaluation. The conclusion &#8212; "no universally superior system; it depends on the criteria" &#8212; is evaluative rather than a simple verdict. Dom identifies the same features but at descriptive level with no mechanisms, no quantified evidence, and no evaluative framework. Yuki accesses Level 4; Dom Level 2. The Mundell OCA reference is an A* differentiator.'
      },

      /* 6 — Multi-select: factors causing depreciation */
      { type: 'multi_select',
        stem: 'Which of the following would cause the &#163; to <strong>depreciate</strong> against the US dollar?',
        opts: [
          'UK inflation significantly exceeds US inflation, reducing UK export competitiveness',
          'The Bank of England cuts interest rates relative to the US Federal Reserve',
          'A sharp rise in UK GDP growth, attracting inward investment into the UK',
          'Speculation that the UK will run large current account deficits for an extended period',
          'A large increase in UK demand for US imports, increasing the supply of &#163; on FOREX markets',
          'An increase in foreign demand for UK government bonds following a rise in gilt yields'
        ],
        correct: [0, 1, 3, 4],
        exp: 'Options A, B, D, and E all cause &#163; depreciation. <strong>A: Inflation</strong> &#8212; higher UK inflation reduces UK export price competitiveness, reducing demand for &#163; (PPP mechanism, long-run). <strong>B: Interest rate cut</strong> &#8212; a lower UK-US differential reduces hot-money inflows, reducing demand for &#163; (main short-run driver). <strong>D: Deficit speculation</strong> &#8212; expectation of persistent current account deficits implies net &#163; supply exceeds demand. <strong>E: Import demand</strong> &#8212; UK residents buying US imports must supply &#163; (buy $), increasing S&#163; on FOREX. Options C and F cause <em>appreciation</em>: strong UK growth attracts FDI (demand for &#163; rises); higher gilt yields attract capital inflows (foreigners buy &#163; to purchase UK bonds).'
      },

      /* 7 — Para fill: Black Wednesday */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph about the 1992 UK ERM crisis.',
        anchor: 'Black Wednesday 1992 illustrates the fundamental weakness of fixed exchange rate systems.',
        para: 'The UK had joined the Exchange Rate Mechanism in 1990, fixing the &#163; against the German [1] at DM 2.95. By 1992, UK inflation was higher than Germany\'s and the UK was in [2], while the Bundesbank kept rates high to manage German reunification costs. Currency [3] (led by George Soros) bet that the UK could not sustain the peg by shorting &#163;. The Bank of England spent &#163;[4] billion in reserves defending the rate and raised interest rates to [5]% in a single day — damaging the real economy. Unable to sustain the defence, the UK [6] the ERM and the &#163; fell sharply. The episode shows that fixed rates require [7] conditions between member countries to be sustainable.',
        blanks: [
          { id: 1, opts: ['Deutschmark', 'Franc', 'Lira', 'Schilling'], ans: 0 },
          { id: 2, opts: ['recession', 'boom', 'hyperinflation', 'surplus'], ans: 0 },
          { id: 3, opts: ['speculators', 'exporters', 'importers', 'central banks'], ans: 0 },
          { id: 4, opts: ['15', '5', '50', '150'], ans: 0 },
          { id: 5, opts: ['15', '5', '25', '10'], ans: 0 },
          { id: 6, opts: ['left', 'joined', 'reformed', 'devalued within'], ans: 0 },
          { id: 7, opts: ['convergent', 'divergent', 'independent', 'flexible'], ans: 0 }
        ],
        exp: '(1) <strong>Deutschmark</strong> &#8212; the DM was the anchor currency of the ERM; the UK fixed &#163; = DM 2.95. (2) <strong>Recession</strong> &#8212; UK economy was contracting; high interest rates needed to defend the peg were inappropriate for domestic conditions. (3) <strong>Speculators</strong> &#8212; Soros\'s Quantum Fund made ~$1bn shorting &#163; when it was clear the peg was unsustainable. (4) <strong>&#163;15 billion</strong> in reserves spent defending the rate. (5) <strong>15%</strong> &#8212; rates raised from 10% to 12% then to 15% in a single day; announced but not implemented at 15%. (6) <strong>Left</strong> &#8212; the UK withdrew from the ERM on 16 September 1992; &#163; depreciated ~20% and UK growth recovered. (7) <strong>Convergent</strong> &#8212; fixed rates require economic convergence (similar inflation, growth cycles) to be stable long-run &#8212; the Mundell OCA criterion.'
      },

      /* 8 — Data table: exchange rate and macro objectives */
      { type: 'data_table',
        stem: 'The table shows UK data following a 15% depreciation of the &#163;.',
        headers: ['Indicator', '12 months before', '6 months after', '18 months after'],
        rows: [
          ['&#163;/$ exchange rate', '1.40', '1.19', '1.21'],
          ['CPI inflation (annual)', '2.1%', '3.8%', '4.2%'],
          ['Export volume (index)', '100', '101', '108'],
          ['Current account balance (&#163;bn, annual)', '&#8722;80', '&#8722;87', '&#8722;72'],
          ['GDP growth (annual)', '1.8%', '2.1%', '2.4%']
        ],
        question: 'Which interpretation is most consistent with all five indicators?',
        opts: [
          'The depreciation increased import prices (raising CPI) with a short-run worsening of the current account (J-curve), but after 18 months export volumes rose and the current account began to improve — consistent with the Marshall-Lerner condition holding in the long run',
          'The depreciation was entirely harmful: inflation rose, growth fell, and the current account worsened throughout the period — a clear case against allowing the &#163; to depreciate',
          'The data show inflation has no connection to exchange rate changes — the CPI rise was entirely due to domestic demand-pull factors unrelated to the depreciation',
          'The J-curve theory is disproved by this data because the current account did not worsen at all in the first 6 months after depreciation'
        ],
        ans: 0,
        exp: 'The data are consistent with standard exchange rate theory. <strong>Short run (6 months):</strong> &#163; has depreciated 15%; import prices rise &#8212; CPI increases from 2.1% to 3.8% (cost-push inflation via imported goods). Export volumes barely rise (101 vs 100) &#8212; consistent with J-curve. Current account worsens from &#8722;&#163;80bn to &#8722;&#163;87bn &#8212; the classic J-curve dip. <strong>Long run (18 months):</strong> export volumes rise significantly (108), current account begins to improve (&#8722;&#163;72bn), and GDP growth rises to 2.4% as net exports contribute. This is the J-curve followed by Marshall-Lerner adjustment. Option B ignores the positive 18-month data. Option C ignores the clear pass-through of exchange rate to import prices. Option D misreads the data &#8212; the current account did worsen at 6 months (confirming J-curve).'
      },

      /* 9 — Chain: hot money and appreciation */
      { type: 'chain',
        stem: 'Arrange the following steps in the correct order showing how a <strong>rise in UK interest rates</strong> transmits to the exchange rate and then to inflation.',
        items: [
          { label: 'Higher &#163; raises import prices in &#163; terms, reducing cost-push inflation pressures', note: '' },
          { label: 'Bank of England raises the base rate', note: '' },
          { label: '&#163; appreciates as international investors buy &#163; to deposit in UK banks', note: '' },
          { label: 'UK interest rates exceed those in the USA and Eurozone &#8212; a positive differential', note: '' },
          { label: 'Capital inflows ("hot money") flow into UK as investors seek higher returns', note: '' },
          { label: 'Demand for &#163; rises on FOREX markets, shifting the demand curve right', note: '' }
        ],
        correctOrder: [1, 3, 4, 5, 2, 0],
        exp: '<strong>The correct sequence:</strong><br>1. Bank of England raises base rate.<br>2. UK rates exceed US/Eurozone &#8212; a positive interest rate differential.<br>3. Hot money flows in &#8212; investors buy &#163; to deposit in UK banks.<br>4. Demand for &#163; rises on FOREX markets.<br>5. &#163; appreciates.<br>6. Higher &#163; reduces import prices in &#163; terms &#8212; dampening imported inflation.<br><br>This is the <strong>exchange rate channel of monetary policy</strong>: rate rises appreciate the currency, which reduces import costs and helps control inflation. This channel works alongside the direct credit/spending channel. The Bank of England\'s forecasting models explicitly account for the exchange rate channel when projecting inflation &#8212; a 10% appreciation reduces CPI by approximately 1 percentage point over 2 years.'
      },

      /* 10 — MCQ: currency manipulation */
      { type: 'mcq',
        stem: 'China was accused of "currency manipulation" in the 2000s-2010s. Which of the following best describes this accusation?',
        opts: [
          'China deliberately prevented the yuan from appreciating by buying large quantities of US Treasuries, absorbing the capital inflows generated by its current account surplus and keeping the yuan artificially cheap to maintain export competitiveness',
          'China raised domestic interest rates above US rates, attracting hot money inflows that caused the yuan to appreciate and made Chinese exports more expensive',
          'China deliberately caused the yuan to appreciate rapidly, making Chinese exports more expensive and reducing its trade surplus with the USA as a diplomatic concession',
          'China engaged in currency swaps with the IMF to maintain the yuan\'s peg to a basket of currencies at a level consistent with purchasing power parity'
        ],
        ans: 0,
        exp: 'China\'s large current account surplus with the USA in the 2000s-2010s generated large inflows of dollars into China. A free-floating currency would have appreciated, making Chinese exports more expensive and reducing the surplus. Instead, China\'s central bank (People\'s Bank of China) <strong>sterilised</strong> the inflows by buying US Treasuries (lending to the USA), absorbing the dollar inflows and preventing the yuan from appreciating. This maintained an artificially cheap yuan, sustained export competitiveness, and built up China\'s foreign exchange reserves (which peaked at $4 trillion). The USA argued this was "beggar-thy-neighbour" currency manipulation; China argued it was legitimate exchange rate management. The IMF designated China a "currency manipulator" in 2019. This case illustrates that exchange rate policy is inseparable from development and geopolitical strategy.'
      }

    ]
  };

})();
