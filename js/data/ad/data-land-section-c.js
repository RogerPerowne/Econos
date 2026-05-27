/* ============================================================
   ECONOS – Land It · Section C data for Aggregate Demand
   Topic: Aggregate Demand (2.7)
   ============================================================ */

window.ECONOS_LAND_SECTION_C = {
  topic:        'Aggregate Demand',
  sectionLabel: 'Section C &#8211; Essay',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

  /* In the exam there are two options; here we present one. */
  question: {
    id:          'qc',
    commandWord: 'Evaluate',
    stem:        'Evaluate the factors that determine the level of aggregate demand in the UK economy.',
    marks:       25,
    suggestedMinutes: 30,

    structureTips: [
      'Define aggregate demand and state the formula (AD = C + I + G + X &#8722; M).',
      'Analyse the determinants of consumption: real incomes, interest rates, consumer confidence, wealth effects, and credit availability.',
      'Analyse the determinants of investment: interest rates, business confidence (animal spirits), expected profits, and technological opportunity.',
      'Consider the role of government spending and fiscal policy as a determinant of G.',
      'Examine the factors affecting net exports: exchange rates, relative inflation rates, and global demand.',
      'Evaluate the relative importance of each component &#8211; note that C is ~61% of UK GDP; weigh evidence.',
      'Reach a clear, conditional judgement: which factor or set of factors is most important, and under what conditions does this change?'
    ],

    modelAnswer:
      '<p>Aggregate demand (AD) is the total planned expenditure on domestically produced goods and services at a given price level in a given time period. It is defined as AD = C + I + G + (X &#8722; M), where C is household consumption, I is business investment, G is government spending, and (X &#8722; M) is net exports. Each component has distinct determinants, and the relative importance of each shifts depending on the state of the economic cycle, monetary conditions, and the external environment.</p>'
    + '<p>Consumption is by far the largest component of UK aggregate demand, accounting for approximately 61% of GDP. Its primary determinant is real disposable income &#8211; the income households have after taxes and adjusted for inflation. When real wages rise, households can afford to consume more, shifting the AD curve to the right. However, consumption also depends heavily on consumer confidence: when households expect job losses or income falls, they engage in precautionary saving, reducing the marginal propensity to consume even if current income has not yet fallen. The GfK Consumer Confidence Index plunged to &#8722;45 in January 2023 &#8211; its lowest on record &#8211; as inflation at 11.1% eroded real incomes and uncertainty about energy bills and mortgage costs weighed on spending intentions. Interest rates are a further determinant: the Bank of England&#39;s increases from 0.1% to 5.25% between 2021 and 2023 directly raised mortgage repayment costs for around 1.4 million variable-rate borrowers, reducing their disposable income and constraining consumption. Finally, wealth effects matter: rising house prices and equity markets increase households&#39; perceived wealth, supporting consumption; falling asset prices have the opposite effect.</p>'
    + '<p>Business investment &#8211; around 18% of UK GDP &#8211; is the most volatile component of AD. Its traditional determinant is the rate of interest: firms invest when the expected rate of return on a project (the marginal efficiency of capital) exceeds the cost of borrowing. A fall in interest rates therefore increases the number of viable projects and stimulates investment, shifting AD to the right. However, Keynes emphasised that investment is equally determined by &#8220;animal spirits&#8221; &#8211; entrepreneurs&#39; subjective expectations of future profitability. In 2020, despite Bank Rate at 0.1%, UK business investment collapsed by 11.6% because extreme uncertainty about future demand made any investment appear too risky. This demonstrates that monetary policy may be a blunt instrument for stimulating investment when confidence has broken down. Post-Brexit trade uncertainty and supply chain disruption are additional factors that have weighed on business investment decisions in the UK since 2016, contributing to a persistent underperformance relative to other G7 economies.</p>'
    + '<p>Government spending and taxation determine the G component of AD and the disposable income available for consumption. Expansionary fiscal policy &#8211; higher G or lower taxes &#8211; shifts AD to the right; contractionary policy does the reverse. The scale of fiscal impact depends critically on the fiscal multiplier: during recessions, with spare capacity and low interest rates, the multiplier can reach 1.3&#8211;1.7, meaning each pound of government spending generates more than a pound of national income. The 2020&#8211;21 fiscal response &#8211; including over &#163;70 billion on furlough &#8211; demonstrates the potential of government spending to sustain AD when private sector activity collapses. However, the government&#39;s capacity to use fiscal policy is constrained by the size of the national debt and market expectations of fiscal sustainability. With UK debt approaching 100% of GDP by 2023, fiscal headroom was limited, and the September 2022 Mini-Budget illustrated the risks of unfunded fiscal expansion: gilt yields spiked and sterling fell sharply.</p>'
    + '<p>Net exports &#8211; the difference between export revenues and import expenditure &#8211; add to or subtract from UK AD depending on the trade balance. The UK has run a persistent current account deficit, meaning imports typically exceed exports, so (X &#8722; M) is negative. The key determinants of exports are the competitiveness of UK goods and services, which depends partly on the exchange rate: a depreciation of sterling makes UK exports cheaper in foreign markets, boosting demand, while making imports more expensive and potentially reducing M. Relative inflation rates also matter &#8211; if UK inflation persistently exceeds that of trading partners, UK exports become less price-competitive over time. Global demand conditions are a further factor: when major trading partners (particularly the EU and US) are growing strongly, demand for UK exports rises; a global slowdown reduces it.</p>'
    + '<p>In conclusion, the level of aggregate demand in the UK economy is shaped by a complex interplay of factors across all four components. In normal times, consumer confidence and real incomes are the dominant determinants, given that consumption accounts for around 61% of GDP. However, the relative importance of different factors changes significantly depending on the economic context. During crises &#8211; such as the COVID-19 pandemic or the 2022 cost-of-living shock &#8211; government fiscal policy can become the most powerful determinant, filling gaps left by collapsed private spending. In periods of monetary tightening, interest rates assume greater importance as drivers of both consumption and investment. No single factor &#8220;determines&#8221; aggregate demand in isolation; rather, its level reflects the cumulative interaction of income, confidence, credit conditions, fiscal stance, and external demand. A holistic approach, combining monetary, fiscal, and supply-side policies, is therefore needed to maintain stable and sustainable aggregate demand over the long run.</p>'
  },

  strongAnswers: [
    'Define AD clearly and set out the formula at the start',
    'Structure the answer around the four components, giving balanced treatment',
    'Use specific UK data (GfK index, Bank Rate changes, GDP figures) to support arguments',
    'Evaluate the relative importance of each factor, not just describe it',
    'Conclude with a clear, conditional judgement on which factors matter most'
  ]
};
