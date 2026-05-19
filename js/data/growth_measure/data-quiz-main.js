/* ============================================================
   ECONOS — Quiz content for: Economic Growth & National Income
   10 questions covering GDP measurement, real vs nominal, GNI,
   PPP, short/long run growth, and GDP welfare limits.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'growth_measure_main',
    topicId:  'growth_measure_main',
    title:    'Economic Growth &amp; National Income',
    subtitle: 'Theme 2.1.1 &#183; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the three GDP measurement approaches, real versus nominal GDP, GNI and PPP, short and long run growth, and the limitations of GDP as a welfare measure. Mixed formats test both knowledge recall and applied analytical reasoning.',
    shortNames: {
      'gdp-framing':    'Three measurement approaches',
      'real-vs-nominal': 'Real vs nominal GDP',
      'gnp-gni':        'GDP vs GNI',
      'ppp':            'Purchasing Power Parity',
      'sr-lr-growth':   'Short vs long run growth',
      'growth-causes':  'Causes of growth',
      'gdp-limits':     'GDP limitations'
    },

    questions: [

      /* 1 &#8212; MCQ: GDP definition */
      { type: 'mcq',
        stem: 'Which of the following is the most accurate definition of <strong>Gross Domestic Product (GDP)</strong>?',
        opts: [
          'The total value of all final goods and services produced within a country\'s borders over a given period, regardless of the nationality of the producer',
          'The total value of all goods and services produced by a country\'s residents, wherever in the world they are located',
          'The total market value of all goods and services traded internationally by a country in a given year',
          'The total income earned by a country\'s households and firms, net of taxes and transfer payments'
        ],
        ans: 0,
        exp: '<strong>GDP</strong> measures output produced <em>within</em> the geographic borders, regardless of ownership. A Toyota plant in Derby contributes to UK GDP even though Toyota is Japanese-owned. This is the \'domestic\' in GDP. Option B describes GNP/GNI &#8212; the \'national\' measure that follows residents worldwide. The distinction matters most for countries with large foreign investment inflows or outflows.'
      },

      /* 2 &#8212; Elastic sort: three approaches */
      { type: 'elastic_sort',
        stem: 'Classify each item as part of the <strong>expenditure</strong>, <strong>income</strong>, or <strong>output</strong> approach to measuring GDP.',
        categories: ['exp', 'inc', 'out'],
        categoryLabels: ['Expenditure approach', 'Income approach', 'Output approach'],
        goods: [
          { icon: '&#127968;', label: 'Household spending on housing, food, and transport', note: '', ans: 'exp' },
          { icon: '&#127981;', label: 'Value added by UK manufacturing firms at each production stage', note: '', ans: 'out' },
          { icon: '&#128200;', label: 'Wages and salaries paid to employees across the economy', note: '', ans: 'inc' },
          { icon: '&#127968;', label: 'Government spending on public services (G)', note: '', ans: 'exp' },
          { icon: '&#128176;', label: 'Corporate profits, rent, and interest received by firms', note: '', ans: 'inc' },
          { icon: '&#127981;', label: 'Gross value added by financial services sector', note: '', ans: 'out' }
        ],
        exp: '<strong>Three approaches, one number:</strong> the expenditure approach sums C + I + G + (X&#8722;M). The income approach sums all wages, profit, rent, and interest. The output approach sums value added at each production stage to avoid double-counting. In theory all three give the same GDP figure &#8212; every pound of output creates a pound of income and a pound of spending. Citing this circular flow logic in essays is an A* analytical signal.'
      },

      /* 3 &#8212; Calculation: real vs nominal GDP */
      { type: 'calculation',
        context: 'UK nominal GDP in 2020 was <strong>&#163;2,050 billion</strong>. The GDP deflator for 2020 (base year 2015 = 100) stood at <strong>115</strong>.',
        working: [
          'Real GDP = (Nominal GDP &#247; GDP deflator) &#215; 100',
          'Real GDP = (&#163;2,050bn &#247; 115) &#215; 100',
          'Real GDP = &#163;1,782.6bn (at 2015 prices)',
          'The deflator of 115 means prices have risen 15% since 2015',
          'Real GDP removes this price increase to show genuine output change'
        ],
        stem: 'Using the GDP deflator, what is the approximate <strong>real GDP</strong> in 2020 at 2015 prices?',
        opts: [
          { ped: 'Approximately &#163;1,783 billion', typ: 'Correctly deflates nominal GDP: &#163;2,050 &#247; 1.15 &#8776; &#163;1,783bn', rev: 'Apply the formula: Real GDP = (Nominal &#247; Deflator) &#215; 100' },
          { ped: 'Approximately &#163;2,358 billion', typ: 'Inflates rather than deflates: &#163;2,050 &#215; 1.15 &#8212; wrong direction', rev: 'Divide by the deflator to remove price increases, do not multiply' },
          { ped: 'Approximately &#163;2,050 billion', typ: 'Used nominal GDP unchanged, ignoring the deflator entirely', rev: 'Nominal GDP must be adjusted for the 15% price rise since 2015' },
          { ped: 'Approximately &#163;1,935 billion', typ: 'Subtracted 15% of deflator value not as a fraction but as flat &#163;115bn', rev: 'Divide nominal GDP by deflator/100, not subtract the deflator' }
        ],
        ans: 0,
        exp: 'Real GDP = (&#163;2,050bn &#247; 115) &#215; 100 = <strong>&#163;1,783bn</strong>. The deflator of 115 indicates prices are 15% higher than in the 2015 base year. Dividing removes this inflation so we compare output at constant prices. This is why real GDP growth &#8212; not nominal &#8212; is the correct measure of genuine economic expansion. Stating "real GDP" in essays signals you have removed the distortion of price changes.'
      },

      /* 4 &#8212; Diagnostic pair: GNI distinction */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Explain why GNI may be a better measure of welfare than GDP for a developing country heavily dependent on foreign direct investment."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Priya', badge: 'Candidate A',
            answer: 'GDP measures all output produced <em>within</em> a country\'s borders, including the output of foreign-owned firms. When multinational corporations repatriate profits to their home countries, those profits leave the developing country and do not benefit its residents. <strong>GNI</strong> (= GDP + net income from abroad) subtracts these outflows, giving a more accurate picture of the income actually available to the country\'s residents. For a country with large FDI inflows &#8212; such as sub-Saharan African nations with foreign-owned extractive industries &#8212; GDP can <strong>significantly overstate</strong> resident welfare because a substantial share of value added leaves as profit repatriation. GNI corrects for this: it adds income earned by residents abroad and subtracts income paid to foreign residents in the home country.'
          },
          { name: 'James', badge: 'Candidate B',
            answer: 'GDP is the total value of goods and services in a country. GNI is different because it includes income from abroad. In developing countries that have a lot of foreign companies, the GDP can be quite high but some of the money goes abroad. So GNI would be lower than GDP and is a better measure of what people in the country actually earn. For example, if a mining company is based abroad and sends its profits home, that counts in the country\'s GDP but not in the money left for residents. Therefore GNI is better because it shows the income that stays in the country.'
          }
        ],
        ans: 0,
        exp: '<strong>Priya</strong> gives the stronger answer. She precisely defines both GDP and GNI, explains the mechanism (profit repatriation reducing resident income), and provides a specific example (sub-Saharan extractive industries). The analytical phrase \'GDP significantly overstates resident welfare\' targets the exact point the examiner is looking for. James reaches the same conclusion but without the precise terminology (he does not use \'net income from abroad\' or \'profit repatriation\') and without a sufficiently specific example. Priya\'s structural clarity &#8212; definition, mechanism, application &#8212; is the A* pattern.'
      },

      /* 5 &#8212; MCQ: PPP */
      { type: 'mcq',
        stem: 'A <strong>Purchasing Power Parity (PPP)</strong> adjustment is necessary when comparing living standards across countries because:',
        opts: [
          'Market exchange rates reflect financial flows and speculation, not what money actually buys; PPP adjusts for the fact that the same income buys very different quantities in different countries',
          'PPP removes the effect of inflation over time, converting past GDP figures to present values for valid time-series comparison within a single country',
          'PPP adjusts GDP figures upward to account for the value of unpaid domestic work and the informal economy, which are missing from official statistics',
          'PPP converts all countries\' GDP into US dollars using the official exchange rate, creating a common currency for direct numerical comparison'
        ],
        ans: 0,
        exp: 'PPP adjusts for the fact that <strong>the cost of living varies dramatically between countries</strong>. A &#163;30,000 income buys far more in India than in London because non-traded goods (haircuts, housing, local services) are much cheaper in lower-income countries. Converting at market exchange rates understates real purchasing power in developing economies. This is why India\'s GDP per capita rises from ~$2,400 to ~$9,200 when PPP-adjusted. The IMF and World Bank use PPP for international welfare comparisons; the HDI uses GNI per capita at PPP for its income dimension.'
      },

      /* 6 &#8212; Para fill: short vs long run growth */
      { type: 'para_fill',
        stem: 'Complete the paragraph by selecting the correct word or phrase for each blank.',
        anchor: 'The distinction between short run and long run growth is fundamental to macro policy analysis.',
        para: 'In the short run, economic growth occurs when the economy moves [1] its Production Possibility Frontier, using [2] capacity that already exists. This is caused by increases in [3] Demand and does not create new productive capacity. In the long run, growth requires the PPF to shift [4], caused by increases in the quantity or quality of [5] of production. In the AD/AS model, this is shown by [6] shifting to the right. This type of growth is non-inflationary because it expands the economy\'s [7] output.',
        blanks: [
          { id: 1, opts: ['towards', 'beyond', 'away from', 'parallel to'], ans: 0 },
          { id: 2, opts: ['spare', 'imported', 'future', 'borrowed'], ans: 0 },
          { id: 3, opts: ['Aggregate', 'Domestic', 'Consumer', 'External'], ans: 0 },
          { id: 4, opts: ['outward', 'inward', 'upward', 'downward'], ans: 0 },
          { id: 5, opts: ['factors', 'products', 'markets', 'exports'], ans: 0 },
          { id: 6, opts: ['LRAS', 'SRAS', 'AD', 'the price level'], ans: 0 },
          { id: 7, opts: ['potential', 'actual', 'nominal', 'current'], ans: 0 }
        ],
        exp: '(1) <strong>Towards</strong>: the economy moves closer to its existing PPF by using idle resources. (2) <strong>Spare</strong>: spare capacity &#8212; unemployed workers and underused capital. (3) <strong>Aggregate</strong>: AD shifts right, moving the economy towards its frontier. (4) <strong>Outward</strong>: long run growth pushes the PPF outward, creating new capacity. (5) <strong>Factors</strong>: factors of production (capital, labour, technology). (6) <strong>LRAS</strong>: the Long Run Aggregate Supply curve is the AS-model equivalent of the PPF. (7) <strong>Potential</strong>: potential (trend) output rises, so actual output can grow without inflationary pressure.'
      },

      /* 7 &#8212; Odd one out: GDP limitations */
      { type: 'odd_one_out',
        stem: 'Three of these are genuine <strong>limitations of GDP as a welfare measure</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#9878;', label: 'GDP does not capture income distribution &#8212; rising GDP may coexist with worsening inequality', note: '' },
          { icon: '&#127807;', label: 'GDP excludes the value of unpaid domestic work and informal economic activity', note: '' },
          { icon: '&#128200;', label: 'GDP is the most widely used and internationally comparable measure of economic output', note: '' },
          { icon: '&#128336;', label: 'GDP counts defensive expenditures (e.g. crime clean-up, pollution remediation) as positive output', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is option C: <strong>international comparability is a strength of GDP</strong>, not a limitation. GDP\'s widespread use and standardisation make it valuable for cross-country comparison &#8212; exactly the opposite of a limitation. The other three are genuine welfare measurement problems: (A) the Gini coefficient better captures distribution; (B) informal and unpaid activity is a major omission, especially in developing countries; (D) defensive expenditures (road accident costs, oil-spill clean-up) inflate GDP without improving welfare.'
      },

      /* 8 &#8212; Multi-select: causes of long run growth */
      { type: 'multi_select',
        stem: 'Which of the following are causes of <strong>long run economic growth</strong> (i.e. they shift LRAS right / the PPF outward)?',
        opts: [
          'A sustained increase in business investment in physical capital',
          'A cut in income tax that raises disposable income and consumer spending',
          'An improvement in the quality of education and workforce skills',
          'A fall in Bank Rate that stimulates borrowing and consumption',
          'Net inward migration that expands the working-age labour force',
          'A major breakthrough in technology that raises total factor productivity'
        ],
        correct: [0, 2, 4, 5],
        exp: 'Options A, C, E and F all increase the <strong>productive capacity</strong> of the economy by adding to capital, labour quality, labour supply, or technology &#8212; the determinants of LRAS. Options B and D are demand-side factors: income tax cuts and interest rate cuts raise AD, which can achieve short run growth up to the PPF, but they do not shift the PPF itself. The distinction matters for policy: only supply-side improvements enable <em>non-inflationary</em> long run growth.'
      },

      /* 9 &#8212; Data table: real vs nominal */
      { type: 'data_table',
        stem: 'The table shows UK GDP data for a three-year period.',
        headers: ['Year', 'Nominal GDP (&#163;bn)', 'GDP Deflator (base=100)', 'Population (m)'],
        rows: [
          ['2021', '2,200', '100', '67.0'],
          ['2022', '2,420', '108', '67.3'],
          ['2023', '2,580', '115', '67.6']
        ],
        question: 'Based on the data, which statement is most analytically accurate?',
        opts: [
          'Real GDP per capita rose from 2021 to 2023, but by significantly less than nominal GDP growth suggests, because part of the nominal increase reflects rising prices rather than genuine output expansion',
          'The economy grew by 17.3% between 2021 and 2023 in real terms, because nominal GDP rose from &#163;2,200bn to &#163;2,580bn &#8212; a gain of &#163;380bn',
          'Real GDP fell between 2021 and 2023 because the GDP deflator rose from 100 to 115, indicating significant inflation that completely offset nominal GDP growth',
          'GDP per capita grew faster than GDP because population growth exceeded the rate of nominal GDP growth over the period'
        ],
        ans: 0,
        exp: 'Real GDP in 2021 = &#163;2,200bn (deflator=100). Real GDP in 2023 = (&#163;2,580 &#247; 115) &#215; 100 &#8776; &#163;2,243bn. Real growth = ~2%. Nominal growth = 17.3%. The gap is almost entirely due to the 15-point rise in the deflator. Real GDP per capita: &#163;2,243bn / 67.6m &#8776; &#163;33,180 vs &#163;2,200bn / 67.0m &#8776; &#163;32,836 &#8212; a real per capita rise of ~1%. Option B confuses nominal with real. Option C overstates &#8212; real output did grow, just by much less than the nominal figure suggests. Option D is incorrect because nominal GDP grew faster than population.'
      },

      /* 10 &#8212; Chain: PPP comparison */
      { type: 'chain',
        stem: 'Place these steps in the correct logical order to explain why <strong>PPP adjustment</strong> is necessary for cross-country income comparisons.',
        items: [
          { label: 'Non-traded goods and services are generally much cheaper in lower-income countries', note: '' },
          { label: 'Converting countries\' incomes using market exchange rates alone understates real purchasing power in developing economies', note: '' },
          { label: 'The same nominal income therefore buys different quantities of goods depending on where you live', note: '' },
          { label: 'PPP adjusts for price-level differences, enabling like-for-like welfare comparisons across countries', note: '' },
          { label: 'Price levels and the cost of living vary significantly across countries', note: '' },
          { label: 'Market exchange rates reflect trade flows and capital movements, not the cost of non-traded goods', note: '' }
        ],
        correctOrder: [4, 5, 0, 2, 1, 3],
        exp: '<strong>The logical sequence:</strong><br>1. Price levels vary across countries.<br>2. Market exchange rates reflect financial flows, not purchasing power.<br>3. Non-traded goods are cheaper in poor countries.<br>4. The same income buys different amounts in different places.<br>5. Market-rate conversion therefore understates real living standards in developing countries.<br>6. PPP adjusts for this, enabling valid welfare comparisons.<br><br>This chain is the core justification for why the World Bank and HDI use PPP-adjusted GNI per capita. A* answers deploy this logic explicitly when evaluating cross-country comparisons.'
      }

    ]
  };

})();
