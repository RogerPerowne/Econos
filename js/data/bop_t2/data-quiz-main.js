/* ============================================================
   ECONOS — Quiz content for: Balance of Payments
   10 questions covering BoP accounts, current account components,
   UK deficit causes, J-curve, Marshall-Lerner, and correction policies.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'bop_t2_main',
    topicId:  'bop_t2_main',
    title:    'Balance of Payments',
    subtitle: 'Theme 2.1.4 &#183; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the three BoP accounts, UK current account deficit causes, consequences and financing, the Marshall-Lerner condition, the J-curve effect, and expenditure-switching versus expenditure-reducing correction policies. Designed to develop the applied analytical and evaluation skills Edexcel Paper 2 requires.',
    shortNames: {
      'bop-framing':          'Three accounts',
      'current-account':      'Current account components',
      'deficit-causes':       'UK deficit causes',
      'deficit-consequences': 'Deficit consequences',
      'bop-correction':       'Correction policies',
      'bop-exchange-rate':    'BoP and exchange rate',
      'bop-evaluation':       'Evaluating policies'
    },

    questions: [

      /* 1 &#8212; MCQ: BoP always balances */
      { type: 'mcq',
        stem: 'The UK runs a persistent current account <em>deficit</em>. How is this consistent with the claim that the <strong>balance of payments always balances overall</strong>?',
        opts: [
          'The current account deficit is offset by a surplus on the financial account &#8212; the UK attracts net capital inflows (FDI, portfolio investment) that finance the deficit',
          'The BoP does not always balance; the current account deficit represents unfinanced excess spending and is unsustainable by definition',
          'The capital account automatically moves into surplus when the current account is in deficit, as government borrowing replaces private sector financing',
          'The BoP balances because exchange rate depreciation always eliminates the current account deficit over time'
        ],
        ans: 0,
        exp: 'The overall BoP <em>must</em> sum to zero by accounting identity: current account + capital account + financial account = 0. A UK current account deficit means more &#163; are leaving the country (imports exceed exports) than arriving (exports). This excess outflow must be matched by net <em>inflows</em> on the financial account &#8212; foreigners buying UK assets (FDI, gilts, equities, property). Mervyn King\'s \'kindness of strangers\' quote captures the risk: if financial inflows dry up, the deficit cannot be sustained and sterling falls sharply. Option C confuses capital and financial accounts.'
      },

      /* 2 &#8212; Elastic sort: current account components */
      { type: 'elastic_sort',
        stem: 'Classify each item into the correct <strong>current account sub-component</strong>.',
        categories: ['goods', 'svcs', 'prim', 'sec'],
        categoryLabels: ['Trade in goods', 'Trade in services', 'Primary income', 'Secondary income'],
        goods: [
          { icon: '&#128665;', label: 'UK exports of Jaguar Land Rover vehicles to China', note: '', ans: 'goods' },
          { icon: '&#127760;', label: 'Dividends paid to US shareholders of BP', note: '', ans: 'prim' },
          { icon: '&#127891;', label: 'International student tuition fees paid to UK universities', note: '', ans: 'svcs' },
          { icon: '&#127967;', label: 'UK foreign aid payments to developing countries', note: '', ans: 'sec' },
          { icon: '&#127758;', label: 'Fees earned by UK law firms advising overseas clients', note: '', ans: 'svcs' },
          { icon: '&#127981;', label: 'Profits repatriated by a French-owned supermarket chain operating in the UK', note: '', ans: 'prim' }
        ],
        exp: '<strong>Trade in goods</strong>: physical exports/imports (cars, food, electronics). UK runs a large goods deficit (~&#163;150-180bn). <strong>Trade in services</strong>: financial services, education, tourism, legal fees. UK runs a consistent services surplus. <strong>Primary income</strong>: investment returns &#8212; dividends, profits, interest. Outflows (profits repatriated by foreign-owned UK firms) reduce this. <strong>Secondary income</strong>: foreign aid, remittances, government transfers. UK runs a small deficit here. The overall current account is the net of all four &#8212; goods deficit partially offset by services surplus and historically positive primary income.'
      },

      /* 3 &#8212; Diagnostic pair: structural vs cyclical deficit */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Explain why the UK current account deficit is considered structural rather than cyclical."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Zara', badge: 'Candidate A',
            answer: 'A <strong>cyclical</strong> deficit widens during booms (higher incomes boost import demand) and narrows automatically during recessions. A <strong>structural</strong> deficit persists even at full employment, reflecting fundamental competitiveness weaknesses rather than temporary demand fluctuations. The UK current account deficit is structural for three reasons. First, the UK has undergone severe deindustrialisation since the 1980s, drastically reducing its capacity to export manufactured goods &#8212; the goods deficit (~&#163;150-180bn) reflects this permanent supply-side change. Second, productivity growth has lagged major competitors, raising unit labour costs relative to trading partners. Third, Brexit introduced non-tariff barriers that have eroded the services surplus (reduced EU financial passporting, lower EU student numbers) &#8212; the one sub-account that partially offset the goods deficit. The structural nature is evidenced by the deficit persisting through multiple business cycles, including when GDP growth was near zero.'
          },
          { name: 'Liam', badge: 'Candidate B',
            answer: 'A structural deficit is one that exists regardless of the state of the economy, while a cyclical deficit only exists when the economy is in recession. The UK\'s current account deficit is structural because it has existed for many years through good and bad economic periods. This is because the UK imports many more goods than it exports &#8212; partly due to deindustrialisation. The services sector does produce a surplus but not enough to compensate for the goods deficit. Brexit has also made trade harder with EU countries. Because the deficit exists even when the economy is growing, it is structural rather than cyclical.'
          }
        ],
        ans: 0,
        exp: '<strong>Zara</strong> gives the stronger answer. She defines both structural and cyclical precisely before applying the distinction &#8212; a key exam technique. She names three specific structural causes with quantification where possible (&#163;150-180bn goods deficit), names the mechanism for each (deindustrialisation, relative productivity, Brexit passporting), and provides the empirical test (persists through multiple cycles). Liam correctly identifies the key points but without quantification, without the precise structural/cyclical definition, and without naming Brexit\'s specific channel (passporting). Zara\'s analytical layering is the A* pattern.'
      },

      /* 4 &#8212; MCQ: Marshall-Lerner condition */
      { type: 'mcq',
        stem: 'The <strong>Marshall-Lerner condition</strong> states that a currency depreciation will improve the current account <em>only if</em>:',
        opts: [
          'The sum of the price elasticities of demand for exports and imports exceeds 1 (PEDx + PEDm > 1)',
          'The exchange rate depreciates by more than 10%, as smaller depreciations are insufficient to change trade volumes',
          'The current account deficit is smaller than 3% of GDP at the time of depreciation',
          'Domestic inflation remains below 2% after the depreciation, so that competitiveness gains are not eroded'
        ],
        ans: 0,
        exp: 'The Marshall-Lerner condition: for depreciation to improve the BoP, <strong>PEDx + PEDm &gt; 1</strong>. If demand for exports and imports is sufficiently price-elastic (combined &gt; 1), the volume effects (more exports, fewer imports) outweigh the price effects. If combined elasticity &lt; 1 (inelastic in the short run &#8212; contracts already signed, limited substitutes), the import bill actually rises after depreciation &#8212; explaining the J-curve. In the long run, elasticities are larger (more time to adjust), so the Marshall-Lerner condition tends to be satisfied eventually. A* answers always pair the Marshall-Lerner condition with the J-curve when discussing depreciation as a BoP correction.'
      },

      /* 5 &#8212; Para fill: J-curve */
      { type: 'para_fill',
        stem: 'Complete the paragraph describing the J-curve effect.',
        anchor: 'The J-curve explains why exchange rate depreciation does not improve the current account immediately.',
        para: 'In the short run after depreciation, import prices [1] because the exchange rate has fallen. However, import [2] is relatively [3] in the short run because trade contracts are already signed and consumers and firms cannot easily switch to alternatives quickly. This means the import [4] initially rises, worsening the current account. Over time, demand becomes more [5] as consumers adjust &#8212; volumes of imports fall and exports rise. Eventually the [6] condition is satisfied and the BoP improves. The time lag before improvement is typically [7] months.'
        ,
        blanks: [
          { id: 1, opts: ['rise', 'fall', 'stabilise', 'fluctuate'], ans: 0 },
          { id: 2, opts: ['demand', 'supply', 'income', 'output'], ans: 0 },
          { id: 3, opts: ['inelastic', 'elastic', 'unit elastic', 'volatile'], ans: 0 },
          { id: 4, opts: ['bill', 'volume', 'price', 'surplus'], ans: 0 },
          { id: 5, opts: ['elastic', 'inelastic', 'stable', 'volatile'], ans: 0 },
          { id: 6, opts: ['Marshall-Lerner', 'Fisher', 'Okun', 'Keynesian'], ans: 0 },
          { id: 7, opts: ['12-24', '1-3', '3-6', '36-48'], ans: 0 }
        ],
        exp: '(1) <strong>Rise</strong>: depreciation means each unit of foreign currency costs more &#163;, so import prices rise. (2) <strong>Demand</strong>: it is the demand for imports that matters for the bill. (3) <strong>Inelastic</strong>: short-run inelasticity &#8212; existing contracts, limited alternatives. (4) <strong>Bill</strong>: higher prices on unchanged (inelastic) volumes means the bill rises. (5) <strong>Elastic</strong>: long-run elasticity rises as consumers and firms adjust their buying decisions. (6) <strong>Marshall-Lerner</strong>: once demand is sufficiently elastic, the condition is satisfied. (7) <strong>12-24</strong>: empirical estimates suggest 12-24 months for the J-curve to turn positive. The UK\'s 1967 devaluation took 12 months before the BoP improved.'
      },

      /* 6 &#8212; Multi-select: expenditure-switching */
      { type: 'multi_select',
        stem: 'Which of the following are examples of <strong>expenditure-switching policies</strong> designed to reduce a current account deficit?',
        opts: [
          'Allowing the exchange rate to depreciate, making imports more expensive and exports cheaper',
          'Cutting government spending to reduce domestic income and therefore import demand',
          'Imposing tariffs on imported manufactured goods to redirect consumers to domestically-produced alternatives',
          'Raising interest rates to reduce consumption and therefore reduce the volume of imports purchased',
          'Investing in supply-side productivity improvements to make UK exports more price-competitive',
          'Devaluing the currency under a fixed exchange rate system to improve export competitiveness'
        ],
        correct: [0, 2, 4, 5],
        exp: 'Expenditure-switching policies redirect spending from imports to domestic goods without necessarily reducing domestic income. Options A (depreciation), C (tariffs), D (productivity), and F (devaluation) all change relative prices to favour domestic production. Options B (government spending cuts) and D (interest rate rises) are <em>expenditure-reducing</em> &#8212; they cut domestic income to reduce import demand, but at the cost of lower output and employment. A* answers always contrast the two approaches: expenditure-switching is preferred because it can improve the BoP without sacrificing domestic output, whereas expenditure-reducing \'corrects the deficit by impoverishing the population.\''
      },

      /* 7 &#8212; Calculation: depreciation effect */
      { type: 'calculation',
        context: 'The &#163; depreciates against the euro from <strong>&#163;1 = &#8364;1.20</strong> to <strong>&#163;1 = &#8364;1.00</strong>. A UK consumer imports a French wine that costs <strong>&#8364;12 per bottle</strong> in France.',
        working: [
          'Before depreciation: &#163;1 = &#8364;1.20, so &#8364;12 &#247; 1.20 = &#163;10 per bottle',
          'After depreciation: &#163;1 = &#8364;1.00, so &#8364;12 &#247; 1.00 = &#163;12 per bottle',
          'Sterling price rise = &#163;2 per bottle = 20% increase',
          'The depreciation of &#163;1.20 &#8594; &#163;1.00 is a 16.7% depreciation against the euro',
          'Sterling prices of all euro-denominated imports rise by the same proportion'
        ],
        stem: 'After the depreciation, what is the new sterling price of the wine, and what does this illustrate about the BoP?',
        opts: [
          { ped: '&#163;12 per bottle: a 20% rise, illustrating how depreciation raises import prices and (if demand is inelastic) initially worsens the import bill &#8212; the J-curve', typ: 'Correctly converts &#8364;12 at new rate &#163;1 = &#8364;1.00; notes J-curve implication of price elasticity', rev: 'Divide euro price by new exchange rate' },
          { ped: '&#163;10 per bottle: unchanged, because the price in euros has not changed', typ: 'Used the original exchange rate &#8212; ignored the depreciation', rev: 'Must use the new rate &#163;1 = &#8364;1.00 to find the new sterling price' },
          { ped: '&#163;8 per bottle: depreciation lowers import prices by making the pound worth less', typ: 'Inverted logic &#8212; depreciation makes imports MORE expensive in sterling, not less', rev: 'A weaker &#163; means more &#163; are needed to buy the same foreign goods' },
          { ped: '&#163;14.40 per bottle: the euro price rises by the same percentage as the depreciation', typ: 'The euro price is set in France; it does not change with UK exchange rate moves', rev: 'Only the sterling equivalent changes, not the foreign currency price' }
        ],
        ans: 0,
        exp: 'Before: &#8364;12 &#247; 1.20 = <strong>&#163;10</strong>. After: &#8364;12 &#247; 1.00 = <strong>&#163;12</strong>. The sterling price rises 20% &#8212; illustrating cost-push inflation from a weaker pound. If demand for French wine is inelastic (no close domestic substitute), UK consumers continue buying similar volumes and the import bill rises from ~&#163;10 to ~&#163;12 per bottle &#8212; worsening the current account initially (J-curve). Only as consumers switch to domestic alternatives over time does the volume fall and the deficit improve. This is why the Marshall-Lerner condition depends on long-run elasticities.'
      },

      /* 8 &#8212; Odd one out */
      { type: 'odd_one_out',
        stem: 'Three of these are potential <strong>problems caused by a persistent current account deficit</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#127758;', label: 'Dependence on foreign capital inflows to finance the deficit creates vulnerability to sudden stops', note: '' },
          { icon: '&#128200;', label: 'A current account deficit directly causes domestic inflation by reducing aggregate demand', note: '' },
          { icon: '&#128176;', label: 'Rising net foreign liabilities as the UK borrows more from overseas to finance the deficit', note: '' },
          { icon: '&#128664;', label: 'Downward pressure on the exchange rate as more &#163; leave the country than enter via trade', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is option B. A current account deficit does <em>not</em> directly cause domestic inflation &#8212; it actually represents a net demand leakage (imports exceed exports), which is <em>deflationary</em> for domestic demand (reduces the net exports component of AD). The other three are genuine problems: (A) financial account financing dependence is the Mervyn King \'kindness of strangers\' vulnerability; (C) rising net foreign liabilities constrain future policy options; (D) excess &#163; supply on FOREX markets puts downward pressure on sterling, which can then cause import price inflation &#8212; but that is a secondary effect through the exchange rate, not a direct effect of the deficit.'
      },

      /* 9 &#8212; Data table: UK current account */
      { type: 'data_table',
        stem: 'The table shows selected UK current account data.',
        headers: ['Year', 'Goods balance (&#163;bn)', 'Services balance (&#163;bn)', 'Overall current account (% GDP)'],
        rows: [
          ['2015', '&#8722;125', '+90', '&#8722;5.2%'],
          ['2018', '&#8722;138', '+105', '&#8722;4.0%'],
          ['2021', '&#8722;148', '+112', '&#8722;2.6%'],
          ['2022', '&#8722;191', '+119', '&#8722;7.5%']
        ],
        question: 'Which interpretation of the data is most analytically accurate?',
        opts: [
          'The goods deficit has widened persistently and the 2022 spike likely reflects surging energy import prices; the services surplus provides a partial offset but is insufficient to prevent an overall current account deficit throughout the period',
          'The UK\'s current account position has steadily improved since 2015 because the services surplus has grown from &#163;90bn to &#163;119bn, more than offsetting the widening goods deficit',
          'The 2022 current account deficit of 7.5% of GDP is primarily explained by the services surplus falling, as Brexit reduced financial services exports to the EU',
          'The data shows that trade in goods is unimportant for the UK current account because the services surplus provides adequate compensation'
        ],
        ans: 0,
        exp: 'The goods deficit has widened every year (&#8722;&#163;125bn to &#8722;&#163;191bn), with a sharp 2022 jump clearly driven by energy import price surges (Ukraine war + LNG market). The services surplus has also grown (&#163;90bn to &#163;119bn) but cannot fully offset the goods deficit. The overall current account worsened sharply in 2022 to &#8722;7.5% &#8212; near-record. Option B is incorrect &#8212; the overall position worsened despite services growth because goods deteriorated faster. Option C is incorrect &#8212; the services surplus actually grew in 2022. Option D understates goods trade importance &#8212; the goods deficit is ~&#163;190bn vs ~&#163;120bn surplus in services.'
      },

      /* 10 &#8212; Chain: BoP correction via depreciation */
      { type: 'chain',
        stem: 'Place the steps in the correct order to describe the complete <strong>J-curve adjustment process</strong> following sterling depreciation.',
        items: [
          { label: 'In the long run, export volumes rise and import volumes fall as demand adjusts &#8212; Marshall-Lerner condition satisfied', note: '' },
          { label: 'Sterling depreciates on foreign exchange markets due to current account deficit pressure', note: '' },
          { label: 'Import prices rise in sterling terms; export prices fall in foreign currency terms', note: '' },
          { label: 'The current account initially worsens as the higher import bill outweighs volume changes', note: '' },
          { label: 'Demand for imports and exports is inelastic in the short run &#8212; volumes barely change', note: '' },
          { label: 'The current account improves beyond its pre-depreciation position &#8212; the J-curve turns upward', note: '' }
        ],
        correctOrder: [1, 2, 4, 3, 0, 5],
        exp: '<strong>The J-curve sequence:</strong><br>1. Sterling depreciates.<br>2. Import prices rise in &#163;; export prices fall in foreign currency.<br>3. Short-run inelastic demand &#8212; volumes unchanged.<br>4. Import bill rises immediately &#8212; BoP worsens (the bottom of the J).<br>5. Long-run elastic demand &#8212; volumes adjust (more exports, fewer imports).<br>6. BoP improves, eventually better than before (the upward curve of the J).<br><br>The timeline between steps 4 and 5 is typically 12-24 months. The 1967 UK devaluation took 12 months to turn the J-curve upward. A* answers name the Marshall-Lerner condition at step 5 and the time lag at step 4.'
      }

    ]
  };

})();
