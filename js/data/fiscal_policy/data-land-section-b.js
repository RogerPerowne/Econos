/* ============================================================
   ECONOS — Land It · Section B data for Fiscal Policy
   Topic: Fiscal Policy (2.12)
   ============================================================ */

window.ECONOS_LAND_SECTION_B = {
  topic:        'Fiscal Policy',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

  /* ── Context pack: 3 extracts, collapsible ─────────────────── */
  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'The UK fiscal position, 2022&#8211;23',
        tags:        ['&#163;127bn deficit', '~100% debt&#47;GDP', 'OBR forecasts', 'Autumn Statement 2022'],
        defaultOpen: true,
        paragraphs: [
          'In 2022&#8211;23 the UK government borrowed &#163;127 billion &#8212; equivalent to 5.1% of GDP &#8212; as elevated energy support schemes, pandemic-related spending, and weak growth kept the deficit high. The national debt reached approximately &#163;2.7 trillion, pushing the debt-to-GDP ratio close to 100% for the first time since the 1960s.',
          'The Office for Budget Responsibility (OBR) forecast in November 2022 that the UK would enter a recession, with GDP contracting by 1.4% in 2023. Against this backdrop, Chancellor Jeremy Hunt&#39;s Autumn Statement announced a &#163;55 billion fiscal consolidation package, combining spending cuts and tax rises, including a freeze on income tax thresholds that amounted to a real-terms tax increase for millions of households.',
          'The OBR warned that rising debt-interest costs &#8212; projected to exceed &#163;100 billion per year &#8212; were crowding out productive public investment. Critics of the consolidation argued that cutting spending into a forecast recession risked deepening the downturn and could prove self-defeating if falling tax revenues offset the intended savings.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'The multiplier and fiscal stimulus',
        tags:        ['multiplier effect', 'MPC', 'leakages', 'fiscal space'],
        defaultOpen: false,
        paragraphs: [
          'The fiscal multiplier measures the final change in national income resulting from a unit change in government spending or taxation. When an initial injection of government spending creates incomes, recipients spend a proportion &#8212; determined by the marginal propensity to consume (MPC) &#8212; generating further rounds of income and spending across the economy. Leakages through saving, taxation, and imports reduce each successive round, so the multiplier is larger in economies with a high MPC and low import dependency.',
          'Estimates of the UK fiscal multiplier have varied considerably. The IMF revised its estimates upward after the 2010 austerity period, suggesting multipliers in the range of 0.9&#8211;1.7 during recessions when monetary policy is constrained by the zero lower bound and spare capacity is available. In contrast, multipliers tend to be smaller during periods of full employment, when additional government spending competes with private sector demand and is more likely to generate inflation than real output growth.',
          'A key consideration for fiscal stimulus is the availability of &#8220;fiscal space&#8221; &#8212; the government&#39;s capacity to borrow without triggering adverse market reactions. With UK debt approaching 100% of GDP and annual debt-interest payments above &#163;100 billion, the OBR noted that the government had limited room to use discretionary fiscal stimulus without risking a loss of market confidence in debt sustainability.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'The Keynesian case for deficit spending in recession',
        tags:        ['Keynes', 'paradox of thrift', 'aggregate demand', 'cyclical deficit'],
        defaultOpen: false,
        paragraphs: [
          'Keynesians argue that in a recession, the private sector reduces spending simultaneously, creating a &#8220;paradox of thrift&#8221;: individually rational saving decisions collectively deepen the downturn by reducing aggregate demand further. In such circumstances, the government is uniquely placed to step in as the &#8220;spender of last resort&#8221;, borrowing to inject demand into the economy and preventing a spiral of falling output, rising unemployment, and collapsing tax revenues.',
          'The Keynesian argument is strengthened when monetary policy is ineffective &#8212; for example, when interest rates are already at or near zero and further cuts are impossible. In this &#8220;liquidity trap&#8221; scenario, only fiscal expansion can stimulate aggregate demand. Proponents point to the 2009 G20 coordinated fiscal stimulus as evidence: countries that maintained spending fared better than those that tightened prematurely.',
          'Critics, however, argue that deficit spending risks crowding out private investment as higher government borrowing pushes up interest rates. Supply-side economists contend that the long-run costs of higher debt &#8212; increased tax burden on future generations, reduced fiscal flexibility, and potential sovereign risk &#8212; outweigh the short-run stabilisation benefits. They favour a balanced budget or rules-based approach, relying instead on automatic stabilisers and monetary policy to manage the cycle.'
        ]
      }
    ]
  },

  /* ── Question: one multi-part Extended Response ──────────────── */
  question: {
    id:       'q1',
    title:    'Extended response using the context pack',
    subtitle: 'Refer to the extracts where directed, and bring in your own knowledge.',
    marks:    25,

    parts: [
      {
        id:     'q1a',
        letter: 'a',
        marks:  5,
        type:   'freetext',
        stem:   'Explain two possible impacts of a government budget deficit on the economy.',
        tips: [
          'Identify two distinct impacts (e.g. stimulus to AD, higher national debt, crowding out, inflationary pressure).',
          'For each impact, explain the economic mechanism clearly &#8212; do not simply assert the outcome.',
          'Where relevant, refer to the context pack data (e.g. the UK&#39;s &#163;127bn deficit and ~100% debt&#47;GDP ratio).'
        ],
        modelAnswer: 'One impact of a budget deficit is that it provides a stimulus to aggregate demand. When the government spends more than it collects in taxes &#8212; as the UK did to the tune of &#163;127 billion in 2022&#8211;23 &#8212; it injects additional demand into the circular flow of income. Government spending is a component of aggregate demand (AD = C + I + G + X &#8211; M), so the direct increase in G shifts the AD curve to the right. Through the multiplier effect, the final rise in national income may be larger than the initial deficit, supporting output and employment. This can be particularly beneficial in a recession when private sector spending is depressed. A second impact is that persistent deficits add to the national debt, which reached approximately &#163;2.7 trillion (around 100% of GDP) by 2023. Rising debt generates growing interest payments &#8212; projected to exceed &#163;100 billion per year &#8212; which crowd out other public spending. If debt is perceived by markets as unsustainable, gilt yields may rise, increasing the government&#39;s borrowing costs and potentially deterring private investment across the wider economy.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extracts A and B, examine the likely effects of government spending cuts during a recession.',
        tips: [
          'Define the context: the UK faced a forecast recession in 2022&#8211;23 while implementing &#163;55bn of fiscal consolidation.',
          'Explain the direct effect of spending cuts on aggregate demand &#8212; use the AD&#47;AS framework.',
          'Apply the multiplier: use Extract B to explain why the negative multiplier may be large during a recession.',
          'Consider the argument in Extract A that cuts could be &#8220;self-defeating&#8221; &#8212; falling revenues offsetting intended savings.',
          'Present a balanced view: also consider the benefits of consolidation (market confidence, lower debt-interest costs).'
        ],
        modelAnswer: 'Government spending cuts during a recession directly reduce aggregate demand. G is a component of AD, so a fall in public expenditure shifts the AD curve to the left, reducing real GDP and increasing unemployment. Extract A confirms this concern: with the OBR forecasting a 1.4% contraction in UK GDP for 2023, critics argued that the &#163;55 billion Autumn Statement consolidation risked deepening the downturn at precisely the wrong moment in the economic cycle. The effect is amplified by the multiplier. Extract B notes that IMF research suggests multipliers of 0.9&#8211;1.7 during recessions, particularly when the economy has spare capacity and monetary policy is constrained. This means each pound cut from spending could reduce national income by more than a pound, as reduced public sector incomes lead to lower consumer spending, which in turn reduces business revenues and employment. A smaller tax base then reduces government revenues &#8212; making the deficit reduction self-defeating, as Extract A acknowledges. Workers made redundant in the public sector may claim benefits, further adding to spending. However, there are arguments for consolidation during a period of elevated debt. With national debt close to 100% of GDP and annual debt-interest costs exceeding &#163;100 billion, Extract A notes the OBR&#39;s concern that interest payments are crowding out productive investment. Restoring fiscal credibility may lower gilt yields over time, reducing the cost of servicing debt and rebuilding the fiscal headroom needed to respond to future shocks. On balance, the evidence from Extracts A and B suggests that spending cuts in a deep recession are likely to reduce output and employment in the short run &#8212; with the multiplied negative effects potentially offsetting a significant portion of the planned savings &#8212; though the long-run costs of sustained high debt remain a legitimate concern.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss the effectiveness of fiscal policy in reducing unemployment in the UK. Refer to the extracts and your own knowledge.',
        tips: [
          'Define fiscal policy and distinguish expansionary (demand-side) from supply-side fiscal measures.',
          'Explain how expansionary fiscal policy reduces cyclical unemployment via the AD&#47;AS framework.',
          'Use Extract B (multiplier) and Extract C (Keynesian case) to support the case for fiscal stimulus.',
          'Evaluate the limits: fiscal space constraints (Extract A), time lags, crowding out, structural vs cyclical unemployment.',
          'Consider that fiscal policy cannot address structural unemployment without supply-side reforms.',
          'Reach a clear, supported judgement on overall effectiveness.'
        ],
        modelAnswer: 'Fiscal policy &#8212; the use of government spending and taxation to influence aggregate demand &#8212; can be an effective tool for reducing unemployment, but its effectiveness depends critically on the type of unemployment, the state of the public finances, and whether monetary policy is available as an alternative. Expansionary fiscal policy directly addresses cyclical unemployment by shifting aggregate demand to the right. A rise in government spending on infrastructure, for example, directly employs construction workers and, through the multiplier, generates further employment as their incomes create demand across the economy. Extract B confirms that during recessions, with spare capacity and interest rates near zero, multipliers can reach 0.9&#8211;1.7, meaning a &#163;10 billion spending increase could generate &#163;9&#8211;17 billion of additional national income and the associated employment. Extract C reinforces this with the Keynesian argument: when the private sector is simultaneously cutting back, government is uniquely placed to act as &#8220;spender of last resort&#8221;, preventing the paradox of thrift from deepening unemployment. The 2009 global fiscal stimulus &#8212; including the UK VAT cut and spending boosts &#8212; is cited by Keynesians as evidence that coordinated fiscal expansion can stabilise output and preserve jobs. However, fiscal policy faces significant limitations. First, as Extract A shows, the UK government entered the 2022&#8211;23 downturn with a deficit of &#163;127 billion and debt near 100% of GDP. This severely constrained its ability to use discretionary fiscal stimulus without risking a loss of market confidence &#8212; as the September 2022 Mini-Budget demonstrated when gilt yields spiked and sterling fell sharply. The government instead chose consolidation, prioritising debt sustainability over short-run demand support. Second, fiscal policy cannot easily reduce structural unemployment &#8212; caused by skills mismatches, regional imbalances, or technological displacement &#8212; through spending alone. Supply-side fiscal measures, such as investment in training, education, and infrastructure, are better suited to structural unemployment but work slowly over many years. Third, even effective stimulus requires careful timing: parliamentary processes mean fiscal decisions are slow to implement and difficult to reverse, risking stimulus arriving after the economy has already recovered, potentially causing inflation. Finally, if higher government borrowing pushes up interest rates &#8212; the crowding-out argument &#8212; private investment may fall, partially offsetting any reduction in unemployment. Overall, fiscal policy is an effective tool for reducing cyclical unemployment, particularly when the economy has significant spare capacity, monetary policy is constrained, and the government has sufficient fiscal space. In the UK context of 2022&#8211;23, the limited fiscal headroom reduced the government&#39;s ability to deploy large-scale stimulus. Fiscal policy is therefore necessary but not sufficient: its effectiveness is greatest when combined with monetary policy, automatic stabilisers, and long-run supply-side reform targeted at structural unemployment.'
      }
    ]
  },

  /* ── Right-rail "What strong answers do" ──────────────────────── */
  strongAnswers: [
    'Use extract data directly (figures, dates, and context)',
    'Develop the chain of analysis step by step',
    'Apply the AD&#47;AS framework with accuracy',
    'Reach a balanced, supported judgement'
  ]
};
