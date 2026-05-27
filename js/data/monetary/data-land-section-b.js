window.ECONOS_LAND_SECTION_B = {
  topic:        'Monetary Policy',
  sectionLabel: 'Section B &#8211; Extended response',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'Bank of England rate cycle 2021&#8211;2024',
        tags:        ['14 rate rises', '0.10% to 5.25%', '11.1% peak CPI', 'cutting from 2024'],
        defaultOpen: true,
        paragraphs: [
          'Between December 2021 and August 2023, the Bank of England\'s Monetary Policy Committee raised the Bank Rate on fourteen consecutive occasions, taking it from 0.10% to 5.25% &#8211; the highest level since 2008. The primary driver was CPI inflation, which peaked at 11.1% in October 2022 following the energy price shock triggered by Russia\'s invasion of Ukraine.',
          'Mortgage holders on variable rates or fixed rates due for renewal faced sharply higher monthly repayments &#8211; in some cases more than doubling. The BoE estimated that by end 2023 around 1.6 million households would see their mortgage payments increase by &#163;500 or more per month. Critics argued the rate rises came too slowly, allowing inflation expectations to become partially unanchored, while others argued they came too quickly, risking a hard landing.',
          'By mid-2024, with CPI inflation falling back towards the 2% target, the MPC began cutting rates. The disinflation was attributed partly to the rate rises working through the transmission mechanism and partly to falling global energy and commodity prices.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'Quantitative easing and its effects on the economy',
        tags:        ['&#163;895bn total QE', 'asset price inflation', 'wealth inequality', 'transmission debate'],
        defaultOpen: false,
        paragraphs: [
          'The Bank of England\'s Asset Purchase Facility accumulated &#163;895 billion of government and corporate bonds by 2021. By purchasing bonds in the secondary market, the Bank sought to lower long-term yields, stimulate investment and consumption, and prevent deflation during the financial crisis and pandemic.',
          'Critics raised concerns about the distributional effects of QE. Research by the Resolution Foundation found that the wealthiest 5% of UK households owned over 40% of financial assets &#8211; the primary beneficiary of rising asset prices driven by QE. This suggests QE may have worsened wealth inequality even as it helped stabilise output and employment.',
          'A further concern is that asset price inflation driven by QE made housing increasingly unaffordable for younger, lower-income households, transferring wealth intergenerationally. Supporters of QE counter that avoiding a deep recession or deflation benefits all households and that the alternatives &#8211; including fiscal austerity &#8211; would have caused worse distributional outcomes.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Limits of monetary policy and the case for coordination',
        tags:        ['supply shocks', 'policy lags', 'fiscal-monetary coordination', 'trade-offs'],
        defaultOpen: false,
        paragraphs: [
          'Many economists argue that the inflation of 2021&#8211;23 was primarily cost-push, driven by global energy and commodity supply shocks rather than excess demand. If so, raising interest rates &#8211; a demand-side tool &#8211; addresses the symptom (rising prices) but not the cause (supply constraints), at the cost of reduced output and higher unemployment.',
          'The IMF and several academic economists suggested that a coordinated policy response &#8211; combining targeted fiscal support to shield the most vulnerable from energy costs with tight monetary policy to anchor expectations &#8211; would be superior to relying on rate rises alone. The UK government did provide energy price guarantees in 2022, but critics argued these were insufficiently targeted.',
          'The tension between monetary and fiscal policy became explicit in late 2022 when the Truss government\'s unfunded fiscal expansion pushed gilt yields sharply higher, effectively tightening financial conditions and forcing the MPC to revise its rate path. This episode highlighted the interdependence of monetary and fiscal policy.'
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
        stem:   'Explain two ways in which a rise in the Bank Rate can reduce consumer spending.',
        tips: [
          'Identify two distinct channels &#8211; do not treat them as the same point.',
          'The mortgage repayment channel (higher costs for borrowers) is one; the savings attractiveness channel is another.',
          'Develop each mechanism: explain why the change in behaviour occurs, not just that it does.'
        ],
        modelAnswer: 'First, higher interest rates increase the cost of mortgage repayments for variable-rate borrowers and those rolling off fixed-rate deals. As Extract A notes, some 1.6 million UK households faced mortgage payment increases of &#163;500 or more per month by end 2023. This direct reduction in disposable income forces households to cut back on spending on goods and services to meet higher housing costs &#8211; reducing consumer spending and aggregate demand. Second, higher interest rates raise the return on saving, making it more financially attractive to defer consumption. The opportunity cost of spending rises: each pound spent today forgoes higher interest income. Risk-averse households may also rebuild savings buffers depleted during the pandemic period. Both effects &#8211; the debt service channel and the savings incentive channel &#8211; reduce the propensity to consume and dampen aggregate demand.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extract B, examine the distributional effects of quantitative easing on UK households.',
        tips: [
          'Define QE briefly and explain how it works (bond purchases → lower yields → higher asset prices).',
          'Use the data in Extract B: wealthiest 5% own 40%+ of financial assets.',
          'Explain why rising asset prices primarily benefit wealthier households.',
          'Consider the counter-argument (Extract B paragraph 3): QE may have benefited all through avoiding recession.',
          'Reach a balanced assessment.'
        ],
        modelAnswer: 'Quantitative easing operates by purchasing financial assets from investors, pushing their prices up and yields down. This wealth effect &#8211; rising asset values &#8211; is intended to stimulate spending by making asset holders feel richer. However, Extract B reveals a significant distributional concern: the wealthiest 5% of UK households own over 40% of financial assets. Rising equity, bond and property prices driven by QE therefore disproportionately benefit the already-wealthy, increasing the gap between asset-rich and asset-poor households. This is a form of regressive redistribution: QE transfers real wealth to those who need it least. The housing market dimension reinforces this: QE-driven low interest rates made mortgage borrowing cheap and helped push house prices up, benefiting existing owners while making homeownership less accessible for younger, lower-income households without inherited wealth. This intergenerational wealth transfer is a lasting distributional consequence. However, the counter-argument in Extract B is important: QE aimed to prevent deep recession and deflation, both of which disproportionately harm lower-income workers (who lack savings and are most vulnerable to unemployment). If QE successfully prevented a worse downturn, its overall effect may still have been progressive compared to the counterfactual. On balance, QE was a pragmatic crisis tool with unavoidable distributional costs, but the alternative &#8211; deep recession &#8211; would likely have been more harmful to vulnerable households. The case for addressing QE&#39;s distributional effects falls more appropriately on targeted fiscal policy than on monetary policy reform.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss the extent to which monetary policy alone is sufficient to maintain price stability in the UK. Refer to Extract C and your own knowledge.',
        tips: [
          'Define monetary policy and price stability. Identify the tools: Bank Rate, QE/QT, forward guidance.',
          'Explain how monetary policy addresses demand-pull inflation (effective) via the transmission mechanism.',
          'Use Extract C: supply-side shocks &#8211; energy prices &#8211; may not be well-addressed by demand-side monetary tools.',
          'Consider the policy coordination case: fiscal targeting + monetary anchoring may be superior.',
          'Address the Truss episode (Extract C) &#8211; fiscal-monetary tension.',
          'Conclude with a supported, balanced judgement on sufficiency.'
        ],
        modelAnswer: 'Monetary policy &#8211; primarily the Bank Rate, supplemented by quantitative easing, quantitative tightening, and forward guidance &#8211; is the UK&#39;s primary tool for maintaining price stability. Its core strength is credibility: an operationally independent Bank of England with a clear 2% CPI mandate can anchor inflation expectations, reducing the risk of wage-price spirals. Rate rises effectively address demand-pull inflation by increasing borrowing costs and dampening consumer spending and investment &#8211; as demonstrated by the fourteen consecutive rate rises between 2021 and 2023, which contributed to bringing CPI from 11.1% back toward target. However, Extract C highlights a fundamental limitation: if inflation originates from supply-side shocks rather than excess demand, monetary tightening is a blunt and potentially counterproductive tool. Raising interest rates cannot reduce global energy prices or undo supply chain disruptions &#8211; it can only reduce demand enough to offset the price impact, at the cost of lower output and employment. This &#8220;cold bath&#8221; approach to supply-shock inflation is economically costly and arguably unnecessary if the supply shock is temporary. Extract C&#39;s suggestion of policy coordination is therefore compelling: targeted fiscal support (energy price guarantees) shields the most vulnerable from the supply-side price rise, while monetary policy maintains inflation expectations &#8211; a superior combination to relying on rate rises alone. The Truss episode in Extract C further illustrates the interdependence of monetary and fiscal policy: an unfunded fiscal expansion immediately pushed gilt yields higher, tightening financial conditions despite the Bank&#39;s rate path. This shows that monetary policy does not operate in isolation &#8211; fiscal credibility is itself a precondition for monetary effectiveness. In conclusion, monetary policy is necessary but not sufficient for price stability. It is well-suited to demand-pull inflation but limited against supply shocks. Durable price stability requires coordination between credible monetary policy and a responsible fiscal stance &#8211; neither can succeed without the other.'
      }
    ]
  },

  strongAnswers: [
    'Trace the full transmission mechanism &#8211; not just the starting point',
    'Use extract data precisely: cite specific figures and sources',
    'Acknowledge both what monetary policy can and cannot address',
    'Reach a supported judgement on effectiveness, not just a list of limitations'
  ]
};
