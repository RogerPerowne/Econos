window.ECONOS_LAND_SECTION_B = {
  topic:        'Macroeconomic Objectives and Conflicts',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.routes.land('intro'),

  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'UK macroeconomic performance, 2022&#8211;2023',
        tags:        ['11.1% CPI', '4.2% unemployment', '0.1% growth', '&#163;86bn current account deficit'],
        defaultOpen: true,
        paragraphs: [
          'In 2023, the UK simultaneously faced multiple macroeconomic challenges. CPI inflation, which peaked at 11.1% in October 2022 &#8212; the highest for 40 years &#8212; remained well above the 2% target throughout 2023, averaging 7.3% for the year. The Bank of England raised interest rates from 0.10% to 5.25% in an effort to bring inflation under control.',
          'Despite the rapid rate rises, the labour market remained surprisingly resilient. Unemployment held close to its post-pandemic lows at 4.2%, and wage growth peaked at 8.5% in mid-2023. However, economic growth ground to near-stagnation, with real GDP growing by just 0.1% for the year. The OBR warned of a decade of subdued growth prospects unless productivity improved significantly.',
          'The current account deficit remained large at &#163;86 billion (approximately &#8722;3.3% of GDP), reflecting persistent import dependency and weakened export performance since Brexit. The UK&#39;s fiscal deficit also remained elevated, with net borrowing exceeding &#163;100 billion for the fourth consecutive year, limiting the government&#39;s fiscal headroom.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'The macroeconomic policy trilemma',
        tags:        ['monetary-fiscal conflict', 'Truss episode', 'policy coordination', 'credibility'],
        defaultOpen: false,
        paragraphs: [
          'In September 2022, the UK government announced an unfunded &#163;45 billion package of tax cuts. Financial markets responded immediately: gilt yields spiked by more than 1 percentage point within days, sterling fell sharply against the dollar, and some pension funds faced margin calls on their liability-driven investment strategies, prompting emergency Bank of England intervention.',
          'The episode illustrated a fundamental tension between expansionary fiscal policy and the Bank of England&#39;s inflation-fighting mandate. By announcing a major fiscal stimulus at the very moment the Bank was tightening monetary policy to control inflation, the government effectively forced the Bank to contemplate even higher rates to maintain credibility &#8212; creating a direct conflict between the two arms of macroeconomic policy.',
          'Most economists concluded that the episode demonstrated the limits of running fiscal and monetary policy in opposing directions. Sustainable macroeconomic management requires that both policy arms work coherently toward compatible objectives, even if their precise tools differ.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Can growth and environmental sustainability coexist?',
        tags:        ['green growth', 'net zero', 'carbon tax', 'Kuznets curve'],
        defaultOpen: false,
        paragraphs: [
          'The UK has reduced carbon emissions by over 50% since 1990 while growing its economy by more than 90% &#8212; offering an example of &#8220;decoupling&#8221; growth from environmental damage. However, the Climate Change Committee (CCC) warned in 2023 that the UK was off track to meet its legally binding net-zero targets, with insufficient progress in key areas including home heating, aviation and agriculture.',
          'Green investment offers the prospect of resolving the conflict between growth and sustainability. Infrastructure investment in offshore wind, EV charging networks, and hydrogen production creates jobs, raises productivity, and reduces emissions simultaneously. The CCC estimated that achieving net zero requires &#163;50 billion of additional annual investment &#8212; a sum that, if deployed efficiently, could materially raise GDP growth.',
          'Economists disagree on the scale of the growth cost of decarbonisation. Some argue it will require accepting lower consumption standards in carbon-intensive activities; others contend that green innovation will generate new industries and higher productivity that more than compensate.'
        ]
      }
    ]
  },

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
        stem:   'Explain two conflicts between the UK\'s macroeconomic objectives evident in Extract A.',
        tips: [
          'Identify two separate conflicts &#8212; do not describe the same mechanism twice.',
          'Use specific data from Extract A to support your analysis.',
          'Explain the mechanism of the conflict, not just state that it exists.'
        ],
        modelAnswer: 'First, there is a conflict between reducing inflation and maintaining economic growth. Extract A shows CPI at 7.3% average in 2023, requiring the Bank of England to raise rates to 5.25%. These rate rises dampened consumer spending and business investment &#8212; contributing to GDP growth of only 0.1%. The tight monetary policy needed to bring inflation toward its 2% target actively suppressed growth, demonstrating the direct short-run trade-off between these two objectives. Second, there is a conflict between low unemployment and low inflation (the Phillips curve trade-off). Despite the rate rises, unemployment held at 4.2% and wage growth peaked at 8.5% &#8212; well above productivity growth. This tight labour market was itself inflationary: high wage growth raised firms&#39; costs and maintained consumer spending, adding to the inflationary pressure the Bank was trying to reduce. Lower unemployment therefore directly complicated the task of returning CPI to target.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extract B, examine the likely consequences of a conflict between fiscal and monetary policy for the UK macroeconomy.',
        tips: [
          'Explain what happened in the extract &#8212; unfunded tax cuts during a period of monetary tightening.',
          'Analyse the market response: gilt yields, sterling, pension funds.',
          'Explain why fiscal-monetary conflict undermines macroeconomic stability.',
          'Consider the reputational/credibility consequences for both policy arms.',
          'Reach a balanced assessment of the consequences.'
        ],
        modelAnswer: 'Extract B describes the September 2022 mini-budget, in which the UK government announced &#163;45 billion of unfunded tax cuts while the Bank of England was actively raising interest rates to control inflation. The immediate market response was severe: gilt yields spiked sharply (raising government borrowing costs), sterling fell against the dollar (worsening imported inflation), and pension fund liquidity crises required emergency Bank of England intervention &#8212; directly contradicting its stated objective of tightening monetary conditions. The fiscal stimulus announced was essentially pro-inflationary at precisely the moment monetary policy was contractionary, creating an incoherent policy mix. Markets interpreted this as a signal that the government prioritised short-term growth over fiscal responsibility, causing a loss of credibility that raised the risk premium on UK government debt. Higher gilt yields feed directly into commercial mortgage rates and corporate borrowing costs, tightening financial conditions beyond what the Bank itself intended. This episode demonstrates that fiscal and monetary policies cannot be treated as independent: an irresponsible fiscal expansion forces either tighter monetary policy or financial market instability. The consequences included higher mortgage rates for households already squeezed by inflation, a period of severe financial market volatility, and ultimately the reversal of the tax cuts &#8212; a costly episode that demonstrated the macroeconomic cost of policy incoherence.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss the extent to which economic growth and environmental sustainability are conflicting macroeconomic objectives. Refer to Extract C and your own knowledge.',
        tips: [
          'Define both objectives precisely.',
          'Use the UK decoupling evidence from Extract C (50% emissions fall, 90% GDP growth).',
          'Explain the Environmental Kuznets Curve and when decoupling is possible.',
          'Consider the argument that green investment could resolve the conflict.',
          'Evaluate: is the conflict inevitable or context-dependent? Consider aviation, agriculture, and the global dimension.',
          'Conclude with a supported, conditional judgement.'
        ],
        modelAnswer: 'Environmental sustainability requires managing economic activity within ecological limits &#8212; particularly reducing greenhouse gas emissions to meet net-zero commitments by 2050. Economic growth refers to rising real GDP. The traditional assumption is that growth necessarily increases resource consumption and emissions, creating conflict. However, the evidence in Extract C challenges this: the UK reduced CO&#8322; by over 50% while GDP grew by over 90% since 1990, suggesting decoupling is possible. This decoupling reflects deindustrialisation (shifting from manufacturing to services), energy efficiency improvements, and a major transition to renewable electricity (42% by 2023). The Environmental Kuznets Curve hypothesis argues that at higher income levels, societies invest in cleaner technologies and prefer environmental quality &#8212; suggesting growth and sustainability can ultimately be complementary. Green investment offers a further route to resolving the conflict. Extract C notes that &#163;50 billion of annual green investment could simultaneously create jobs, raise productivity, and reduce emissions &#8212; suggesting the objectives reinforce rather than conflict. However, important caveats apply. First, UK decoupling partly reflects &#8220;carbon leakage&#8221;: emissions are embedded in manufactured imports from China and elsewhere &#8212; the UK&#39;s consumption footprint has fallen less than its territorial emissions. Second, further decarbonisation is substantially harder than the first 50%: aviation, heavy industry, agriculture and home heating have few immediate low-carbon alternatives. The CCC&#39;s 2023 warning that the UK was off-track reflects these sectoral challenges. Third, net zero requires genuinely reducing consumption in carbon-intensive areas, not just switching technology &#8212; this likely constrains certain dimensions of growth. In conclusion, the conflict between growth and sustainability is real but not absolute. For sectors where green technology is cost-competitive (electricity, EVs), the conflict is largely resolved. For hard-to-abate sectors (aviation, steel, agriculture), genuine trade-offs persist. The extent of conflict therefore depends on the technological frontier, the ambition of emissions targets, and the effectiveness of green investment policy. The UK evidence suggests that with appropriate policy, the objectives are more complementary than conflicting &#8212; but achieving net zero will require confronting the remaining genuine trade-offs.'
      }
    ]
  },

  strongAnswers: [
    'Name the specific conflict and explain the mechanism &#8212; not just state it exists',
    'Use data from the extracts precisely &#8212; cite figures',
    'Develop chains of analysis: cause → mechanism → consequence',
    'Reach a balanced, conditional judgement in part c'
  ]
};
