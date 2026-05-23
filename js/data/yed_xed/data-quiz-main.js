(function () {

  window.ECONOS_QUIZ = {
    id:       'yed_xed_main',
    topicId:  'yed_xed_main',
    title:    'YED &amp; XED',
    subtitle: 'Theme 1 &middot; Topic 2.3 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering income elasticity of demand (YED), cross-price elasticity (XED), classifying normal, inferior and luxury goods, business strategy applications, and the macro implications of Engel\'s Law. Mixed formats &#8212; calculation, sorting, evaluation multi-select, data table, paragraph completion &#8212; aimed at the higher analysis and evaluation marks.',
    shortNames: {
      'yed_xed_1': 'YED formula',
      'yed_xed_2': 'Normal, inferior, luxury',
      'yed_xed_3': 'Business strategy',
      'yed_xed_4': 'XED formula',
      'yed_xed_5': 'Substitutes & complements',
      'yed_xed_6': 'Worked calculations',
      'yed_xed_7': 'Wider economy'
    },

    questions: [

      /* 1 — calculation: YED */
      { type: 'calculation',
        context: 'UK household incomes rise by <strong>4%</strong> following a period of real wage growth. Demand for foreign holidays increases by <strong>10%</strong>, while demand for bus travel falls by <strong>6%</strong>.',
        working: [
          'YED (foreign holidays) = % &#916;QD &#247; % &#916;Income',
          '= +10% &#247; +4% = +2.5',
          'YED (bus travel) = -6% &#247; +4% = -1.5'
        ],
        stem: 'What do the two YED values indicate about these goods?',
        opts: [
          { ped: 'Foreign holidays: YED = +2.5 (luxury good); bus travel: YED = &#8722;1.5 (inferior good)', typ: 'Correct signs and magnitudes &#8212; positive YED &gt; 1 confirms luxury; negative YED confirms inferior', rev: 'Sign determines type; magnitude determines sensitivity' },
          { ped: 'Foreign holidays: YED = +0.4 (necessity); bus travel: YED = +1.5 (luxury)', typ: 'Divided the wrong way and ignored sign for bus travel', rev: 'YED = % &#916;QD &#247; % &#916;Y; check sign of QD change carefully' },
          { ped: 'Both goods are normal because both are responsive to income changes', typ: 'Ignored the negative sign for bus travel which confirms it as inferior', rev: 'Negative YED = demand falls as income rises = inferior good' },
          { ped: 'Foreign holidays: YED = &#8722;2.5 (inferior); bus travel: YED = +1.5 (luxury)', typ: 'Reversed signs &#8212; did not track direction of QD change relative to income change', rev: 'Holiday demand rose (+10%) as income rose (+4%) &#8658; positive YED' }
        ],
        ans: 0,
        exp: 'YED = % &#916;QD &#247; % &#916;Y. <strong>Foreign holidays</strong>: +10% &#247; +4% = <strong>+2.5</strong>. Positive and greater than 1 &#8658; luxury good. Demand rises more than proportionally with income &#8212; highly income-sensitive and pro-cyclical. <strong>Bus travel</strong>: &#8722;6% &#247; +4% = <strong>&#8722;1.5</strong>. Negative &#8658; inferior good. As incomes rise, consumers switch to cars or trains, reducing bus demand. This creates counter-cyclical demand for bus services &#8212; demand rises in recessions when incomes fall. Businesses in these two sectors face opposite macroeconomic risks.'
      },

      /* 2 — elastic_sort: classify goods by YED */
      { type: 'elastic_sort',
        stem: 'Classify each good using its expected <strong>YED sign and magnitude</strong>.',
        categories: ['luxury', 'necessity', 'inferior'],
        categoryLabels: ['Luxury (YED &gt; 1)', 'Necessity (0 &lt; YED &lt; 1)', 'Inferior (YED &lt; 0)'],
        goods: [
          { icon: '&#9992;', label: 'Business-class transatlantic flights', note: '', ans: 'luxury' },
          { icon: '&#127811;', label: 'Bread and basic staple foods', note: '', ans: 'necessity' },
          { icon: '&#128652;', label: 'Budget supermarket own-brand products', note: '', ans: 'inferior' },
          { icon: '&#128246;', label: 'Luxury designer handbags', note: '', ans: 'luxury' },
          { icon: '&#128137;', label: 'Prescription medications', note: '', ans: 'necessity' },
          { icon: '&#127859;', label: 'Instant noodles / value ready meals', note: '', ans: 'inferior' }
        ],
        exp: '<strong>Luxury goods (YED &gt; 1):</strong> demand is highly income-elastic &#8212; business-class flights and designer goods are discretionary purchases disproportionately consumed at higher incomes. Producers of these goods face high cyclical risk &#8212; revenues collapse in recessions. <strong>Necessities (0 &lt; YED &lt; 1):</strong> basic foods and medicines &#8212; demand rises with income, but slowly. Recession-resilient businesses. <strong>Inferior goods (YED &lt; 0):</strong> demand falls as incomes rise &#8212; consumers trade up to branded or higher-quality alternatives. Counter-cyclical &#8212; supermarket own-brand sales rise in recessions as households economise.'
      },

      /* 3 — mcq: XED calculation */
      { type: 'mcq',
        stem: 'The price of butter rises by <strong>12%</strong>. In response, demand for margarine rises by <strong>8%</strong>. What is the XED(margarine, butter), and what does it indicate?',
        opts: [
          'XED = +0.67; positive sign confirms that butter and margarine are substitutes &#8212; a rise in the price of butter causes consumers to switch to margarine',
          'XED = &#8722;0.67; negative sign confirms that butter and margarine are complements &#8212; both are consumed together and higher butter prices reduce margarine demand',
          'XED = +1.5; the high positive value confirms that margarine and butter are perfect substitutes and completely interchangeable',
          'XED = 0; no relationship between the two goods &#8212; they are independent in the market'
        ],
        ans: 0,
        exp: 'XED = (% &#916;QD of good A) &#247; (% &#916;P of good B) = +8% &#247; +12% = <strong>+0.67</strong>. The <strong>positive sign</strong> confirms that butter and margarine are substitutes: when butter becomes more expensive, consumers switch to margarine. The magnitude (0.67) indicates moderate substitutability &#8212; not all consumers switch, perhaps because some strongly prefer butter. A value closer to 1 would indicate closer substitutability. For complements (e.g. bread and butter), XED would be negative: a rise in butter prices reduces demand for bread (as the bundle becomes more expensive). The sign is the most important feature of XED &#8212; always state it and what it means.'
      },

      /* 4 — multi_select: XED business applications */
      { type: 'multi_select',
        stem: 'Which of the following correctly applies XED analysis to business or policy decisions?',
        opts: [
          'A games console manufacturer cuts the console price to increase demand for its games &#8212; exploiting a negative XED (console-game complement)',
          'A supermarket raises the price of Pepsi and monitors whether Coca-Cola demand increases &#8212; using positive XED between substitutes to assess competitive pressure',
          'A pharmaceutical company uses positive XED to show two of its drugs are substitutes &#8212; relevant evidence in a Competition and Markets Authority merger review',
          'A firm argues its luxury perfume and budget deodorant have zero XED &#8212; to show they are in different markets and do not compete',
          'A government uses negative XED between fuel and motor vehicles to predict that a carbon tax on fuel will also reduce new car purchases',
          'A firm raises the price of its best-selling product, expecting demand for its own-brand substitute to fall &#8212; arguing XED between its products is positive'
        ],
        correct: [0, 1, 2, 3, 4],
        exp: 'Options A&#8211;E all represent valid XED applications. (A) Razor-blade complement strategy &#8212; cutting console price boosts game software revenue through negative XED. (B) Supermarket competitive analysis &#8212; high positive XED identifies close rivals. (C) CMA market definition &#8212; high positive XED means products constrain each other\'s pricing; relevant to merger review. (D) Market definition for regulation &#8212; zero/near-zero XED argues two products are not in the same market. (E) Carbon tax modelling &#8212; negative XED between fuel and cars predicts second-order demand effects on vehicle market. Option F is <strong>incorrect</strong>: if XED between a firm\'s own products is positive (they are substitutes for each other), then raising the price of one would increase demand for the other &#8212; not reduce it. The firm has confused the direction.'
      },

      /* 5 — para_fill: Engel's Law */
      { type: 'para_fill',
        stem: 'Complete the paragraph about Engel\'s Law and structural change.',
        anchor: 'Rising incomes change the composition of household spending over time.',
        para: 'As household incomes rise, the [1] spent on food tends to fall &#8212; a relationship known as [2] Law. This reflects the fact that food is a [3] good (YED between 0 and 1), so demand rises [4] than income. As countries develop, this frees up income for [5] goods such as manufactured products and services, which have [6] YED. This shift in spending patterns drives [7] transformation &#8212; the movement of economic activity from agriculture toward industry and then services.',
        blanks: [
          { id: 1, opts: ['proportion', 'absolute amount', 'volume', 'price'], ans: 0 },
          { id: 2, opts: ['Engel\'s', 'Keynes\'', 'Hayek\'s', 'Akerlof\'s'], ans: 0 },
          { id: 3, opts: ['necessity', 'luxury', 'inferior', 'demerit'], ans: 0 },
          { id: 4, opts: ['less rapidly', 'more rapidly', 'at the same rate', 'inversely'], ans: 0 },
          { id: 5, opts: ['higher-YED', 'lower-YED', 'inferior', 'perfectly elastic'], ans: 0 },
          { id: 6, opts: ['higher', 'lower', 'negative', 'zero'], ans: 0 },
          { id: 7, opts: ['structural', 'cyclical', 'monetary', 'fiscal'], ans: 0 }
        ],
        exp: '(1) <strong>Proportion</strong>: Engel\'s Law is about budget share, not absolute spending &#8212; absolute food spending may still rise, but as a fraction of income it falls. (2) <strong>Engel\'s</strong> Law: named after Ernst Engel (1857). (3) <strong>Necessity</strong>: YED between 0 and 1 &#8212; demand rises with income but sub-proportionally. (4) <strong>Less rapidly</strong>: this is the definition of a necessity &#8212; income-inelastic demand. (5) <strong>Higher-YED</strong> goods: as necessities are satisfied, spending shifts to discretionary goods. (6) <strong>Higher</strong> YED: manufactured goods and services have higher income sensitivity than food. (7) <strong>Structural</strong> transformation: the agriculture → industry → services transition observed in all developing economies is demand-driven through rising YED for non-food goods.'
      },

      /* 6 — odd_one_out: negative XED (complements) */
      { type: 'odd_one_out',
        stem: 'Three of these pairs of goods are <strong>complements</strong> (negative XED). Which is the ODD ONE OUT?',
        items: [
          { icon: '&#128664;', label: 'Petrol and motor vehicles', note: '' },
          { icon: '&#127863;', label: 'Coffee and coffee pods', note: '' },
          { icon: '&#127828;', label: 'Burgers and hot dogs', note: '' },
          { icon: '&#128241;', label: 'Smartphones and mobile data contracts', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>burgers and hot dogs</strong>. These are substitutes (positive XED): if the price of burgers rises, consumers switch to hot dogs &#8212; demand for hot dogs increases. The other three are complements (negative XED): petrol and cars are used together (higher petrol prices reduce demand for cars &#8212; a key relationship in the EV transition); coffee machines and pods are the razor-blade complement relationship (Nespresso model); smartphones and data contracts are inseparable &#8212; a price rise in one reduces demand for the other. Identifying whether goods are substitutes or complements is the first step in XED analysis &#8212; and the sign of XED is the test.'
      },

      /* 7 — multi_select: evaluation of YED analysis for business planning */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>how YED analysis can help businesses plan for a recession</strong>. Which of the following statements demonstrate <strong>evaluation</strong> &#8212; as opposed to description or one-sided analysis?',
        opts: [
          'YED measures how demand responds to changes in income; a positive YED means demand rises with income',
          'For firms selling luxury goods (YED &gt; 1), a recession causes a disproportionate revenue collapse &#8212; a 3% fall in real incomes can cause a &gt;3% fall in demand &#8212; meaning these firms face greater cyclical risk than the macroeconomic data alone would suggest; the 2008&#8211;09 data for Rolls-Royce (revenue &#8722;25% against a ~3% income fall, implying YED &#8776; 8) illustrates this amplification',
          'Businesses should sell inferior goods to be safe in recessions',
          'YED analysis has a key limitation as a planning tool: YED estimates are derived from historical data and may not accurately predict future demand responses if consumer preferences, credit availability, or the income distribution shifts &#8212; meaning firms cannot simply read off a historical YED and assume it will hold in the next downturn',
          'A portfolio strategy that combines products with high positive YED (for boom-time revenue growth) and negative or near-zero YED (for recession resilience) reduces overall revenue volatility &#8212; but this diversification benefit only works if the firm can manage the operational complexity of serving fundamentally different market segments simultaneously',
          'Inferior goods always perform well in recessions because consumers always switch to cheaper options when incomes fall'
        ],
        correct: [1, 3, 4],
        exp: '<strong>Option B (index 1)</strong> is strong evaluation: it uses the YED framework to derive a specific directional implication (revenue falls more than proportionally for luxury firms), quantifies this with the 2008&#8211;09 Rolls-Royce data (YED &#8776; 8), and reaches a directional conclusion about the amplification of cyclical risk. This is evaluation through mechanism plus evidence plus direction. <strong>Option D (index 3)</strong> is strong evaluation: it identifies a genuine limitation of YED as a forecasting tool &#8212; historical estimates may not hold when structural conditions change &#8212; and qualifies the practical usefulness of the analysis rather than accepting it at face value. This is a conditional evaluation of the framework itself. <strong>Option E (index 4)</strong> is strong evaluation: it grants the portfolio diversification logic (conceding the benefit) but then qualifies its applicability by identifying the operational complexity condition &#8212; the strategy only works under a specific condition (ability to manage diverse segments). This conditional qualifier is the evaluative move. <strong>Option A (index 0)</strong> is a distractor: it accurately defines YED but makes no evaluative move &#8212; no application, no conditions, no directional conclusion about business planning. <strong>Option C (index 2)</strong> is a distractor: it offers a simplistic one-sided recommendation without acknowledging the operational challenges, brand positioning constraints, or the fact that very inferior goods (budget own-brands) may not suit all firms\' existing strategies. <strong>Option F (index 5)</strong> is a distractor: an overclaim that ignores the fact that not all consumers are willing or able to switch to inferior goods (habits, quality preferences, availability), and that some inferior goods categories are highly context-specific.'
      },

      /* 8 — data_table: luxury goods and recession */
      { type: 'data_table',
        stem: 'The table shows revenue changes for four UK firms during the 2008&#8211;09 recession (when real household incomes fell approximately 3%).',
        headers: ['Firm / sector', 'Revenue change 2008&#8211;09', 'Implied YED', 'Good type'],
        rows: [
          ['Aldi (discount supermarket)', '+12%', '&#8722;4.0', 'Inferior'],
          ['Marks &amp; Spencer Food (premium)', '&#8722;8%', '+2.7', 'Luxury'],
          ['Tesco basic range', '+5%', '&#8722;1.7', 'Inferior'],
          ['Rolls-Royce cars', '&#8722;25%', '+8.3', 'Luxury']
        ],
        question: 'Which conclusion is most consistent with the data?',
        opts: [
          'Firms with high positive YED (luxury) experienced the sharpest revenue falls; firms with negative YED (inferior goods) saw counter-cyclical gains &#8212; demonstrating the risk management importance of YED analysis',
          'All firms lost revenue in the recession &#8212; the data suggest YED analysis overstates the resilience of inferior goods during downturns',
          'The data show that YED is irrelevant to corporate planning because external factors like credit conditions drive revenues regardless of income elasticity',
          'Rolls-Royce had the worst outcome because its demand is price-inelastic, not because of income effects'
        ],
        ans: 0,
        exp: 'The data strongly confirm YED theory. Goods with <strong>negative YED</strong> (inferior goods &#8212; Aldi, Tesco basics) showed <em>rising</em> revenues as incomes fell, confirming counter-cyclical demand. Goods with <strong>high positive YED</strong> (luxury &#8212; M&amp;S premium, Rolls-Royce) suffered sharp revenue falls as incomes fell. Rolls-Royce\'s YED = +8.3 implies luxury goods demand is extremely income-elastic &#8212; a 3% income fall causes 25% revenue collapse. This data justify portfolio diversification strategies: firms that diversified into budget ranges (e.g. Tesco Basics) reduced recession exposure. Option D incorrectly attributes Rolls-Royce\'s loss to PED rather than YED &#8212; the recession context makes YED the relevant elasticity.'
      },

      /* 9 — mcq: XED and market definition */
      { type: 'mcq',
        stem: 'The <strong>Competition and Markets Authority (CMA)</strong> is investigating a proposed merger between two broadband internet providers. Which use of XED analysis is most relevant to their inquiry?',
        opts: [
          'High positive XED between the two providers\' products would indicate they are close substitutes and constrain each other\'s pricing &#8212; evidence the merger reduces competition in the same market',
          'Negative XED between broadband and mobile data contracts would indicate they are complements &#8212; proving the merger creates anti-competitive bundling',
          'Zero XED between broadband and fibre broadband would indicate these are entirely separate markets &#8212; the merger has no competition implications',
          'XED analysis is irrelevant to competition law &#8212; only PED matters for assessing market power'
        ],
        ans: 0,
        exp: 'The CMA\'s market definition exercise asks: do these two firms\' products compete? <strong>High positive XED</strong> between them (e.g. XED &gt; 0.5) indicates they are substitutes &#8212; a price rise by one firm shifts demand to the other. This means they are in the same relevant market and the merger, by combining two substitutes, reduces competitive constraints. In practice, the CMA uses a hypothetical monopolist test (SSNIP test) &#8212; would a 5&#8211;10% price rise be profitable after the merger? If consumers would switch to close substitutes (high XED), the price rise is not profitable and the merger is in the same market. Option C is wrong: copper and fibre broadband are close substitutes for consumers &#8212; XED &gt; 0, not 0. Option D is simply incorrect &#8212; XED is central to market definition in competition law.'
      },

      /* 10 — chain: income rise and structural transformation */
      { type: 'chain',
        stem: 'Rising per-capita income in an emerging economy triggers structural change. Place events in the correct logical order.',
        items: [
          { label: 'Agriculture\'s share of GDP and employment falls as a proportion', note: '' },
          { label: 'Rising incomes lift households\' demand for manufactured goods and services (high YED)', note: '' },
          { label: 'Per-capita income rises as industrialisation proceeds and urban wages grow', note: '' },
          { label: 'Share of spending on food (low YED) falls &#8212; Engel\'s Law in operation', note: '' },
          { label: 'Manufacturing and service sectors expand to meet new demand patterns', note: '' },
          { label: 'Country transitions from low-income agricultural economy toward middle-income industrial economy', note: '' }
        ],
        correctOrder: [2, 1, 3, 4, 0, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Per-capita income rises (initial driver).<br>2. Demand for high-YED manufactured goods and services rises disproportionately.<br>3. Food\'s share of spending falls &#8212; Engel\'s Law.<br>4. Manufacturing and services expand to meet new demand.<br>5. Agriculture shrinks as a share of GDP (may still grow in absolute terms).<br>6. Structural transformation complete &#8212; economy has shifted up the development ladder.<br><br>This is the YED-driven explanation of economic development. The sequence from South Korea (1960s), China (1980s&#8211;2000s), and India (1990s&#8211;present) all follow this pattern. Engel\'s Law is micro-level YED analysis with macro-scale consequences &#8212; a powerful synthesis of elasticity theory and growth economics.'
      }

    ]
  };

})();
