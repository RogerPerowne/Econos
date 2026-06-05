/* ============================================================
   ECONOS – Land It · consolidated section data
   Concatenated from per-section files at v0.4.0. Quiz pools
   from the former quiz-*.js shells are folded in here too –
   the questions live on as Land It content.
   ============================================================ */

/* ---- land-complete.js ---- */
window.ECONOS_LAND_COMPLETE = {
  topic:   'Macroeconomic Objectives and Conflicts',
  nextUrl: '/',

  sections: {
    A: { label: 'Section A', sublabel: 'Short questions',    color: '#ec2d68' },
    B: { label: 'Section B', sublabel: 'Extended response',  color: '#f59e0b' },
    C: { label: 'Section C', sublabel: 'Essay',              color: '#2563eb' }
  },

  nextCard: {
    icon:  '&#x1F680;',
    title: 'What to do next',
    text:  'Compare your answers with the model responses. Check whether you named the specific conflict mechanism &#8211; not just &#8220;inflation and growth conflict.&#8221; In the essay, did you distinguish short-run conflicts from long-run possibilities of complementarity? Did your conclusion include a conditional judgement rather than a binary &#8220;yes conflicts are inevitable&#8221;?'
  }
};

/* ---- land-intro.js ---- */
window.ECONOS_LAND_INTRO = {
  topic:        'Macroeconomic Objectives and Conflicts',
  sectionA: {
    description: 'Short data-response questions worth 5 marks each. Select how many to include in your session.'
  },

  sectionB: {
    description: 'Each mark value represents a different question style. Select one or more to practise in this session.',
    options: [
      { id: 'b5',   label: '5 marks',  marks: 5  },
      { id: 'b8',   label: '8 marks',  marks: 8  },
      { id: 'b12',  label: '12 marks', marks: 12 },
      { id: 'none', label: 'Skip',     marks: 0  }
    ]
  },

  sectionC: {
    description: 'A 25-mark essay question. In the exam you choose from two options. In Land It you practice one.'
  },

  trains: [
    'Identifying and analysing conflicts between macroeconomic objectives',
    'Applying the Phillips curve and AD/AS to explain policy trade-offs',
    'Evaluating whether objectives can be pursued simultaneously or require trade-offs',
    'Practising extended writing under exam-style time pressure'
  ],

  tip: 'The core skill is identifying WHICH objectives conflict and WHY. Growth vs inflation, unemployment vs inflation (Phillips curve), current account vs growth &#8211; always explain the mechanism of conflict, not just state that it exists.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                     }
  ]
};

/* ---- land-section-a.js ---- */
window.ECONOS_LAND_SECTION_A = {
  topic:        'Macroeconomic Objectives and Conflicts',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.routes.land('intro'),

  questions: [

    /* ── Q1 – The four main objectives ───────────────────────── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'The UK&#39;s macroeconomic objectives',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%', label: 'UK real GDP growth (2023)',          value: '0.1%'   },
          { color: 'rose',  icon: '%', label: 'UK CPI inflation (2023 avg)',         value: '7.3%'   },
          { color: 'blue',  icon: '%', label: 'UK unemployment rate (2023 avg)',     value: '4.2%'   },
          { color: 'rose',  icon: '&#163;', label: 'UK current account deficit (2023)', value: '&#163;86bn' }
        ]
      },

      parts: [
        {
          id:     'q1a',
          letter: 'a',
          marks:  1,
          type:   'mcq',
          stem:   'Using the data, which of the following best describes the UK macroeconomic situation in 2023?',
          options: [
            { id: 'opt-a', text: 'Meeting its inflation and growth objectives but missing on unemployment'    },
            { id: 'opt-b', text: 'Missing its inflation target but broadly near its unemployment objective'  },
            { id: 'opt-c', text: 'Meeting all four macroeconomic objectives simultaneously'                  },
            { id: 'opt-d', text: 'In recession with deflation and rising unemployment'                       }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. CPI of 7.3% is far above the 2% target &#8212; the inflation objective was clearly missed. Unemployment of 4.2% is close to most estimates of the NAIRU (around 4&#8211;5%), suggesting the labour market was performing near equilibrium. Growth at 0.1% was barely positive but not officially a recession.',
          feedbackWrong:   'The correct answer is B. The most prominent failure was on inflation &#8212; 7.3% is more than three times the 2% target. Unemployment at 4.2% was close to equilibrium. Growth of 0.1% was weak but technically positive. The current account deficit shows a further area of underperformance.'
        },
        {
          id:          'q1b',
          letter:      'b',
          marks:       4,
          type:        'freetext',
          stem:        'Explain the conflict between the UK government\'s objective of low inflation and its objective of high economic growth in 2023.',
          hint:        '4-mark response &#8212; explain the mechanism of the conflict, not just state it exists. Use the data.',
          modelAnswer: 'With CPI inflation at 7.3% in 2023, the Bank of England was raising interest rates sharply to bring inflation back to its 2% target. Higher interest rates reduce aggregate demand by increasing borrowing costs for households (mortgages, credit) and firms (investment finance). This dampens consumer spending and business investment &#8212; key components of GDP. While the lower aggregate demand helps reduce inflationary pressure, it simultaneously reduces economic growth. GDP growth of only 0.1% in 2023 reflects this conflict: the tight monetary policy needed to control inflation was actively suppressing the growth rate. There is therefore a direct short-run conflict between reducing inflation and maintaining strong growth &#8212; policies that achieve one objective necessarily worsen the other.'
        }
      ]
    },

    /* ── Q2 – Inflation vs unemployment (Phillips curve) ────── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'The inflation-unemployment trade-off',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from Office for National Statistics, Labour Market Overview, 2023',
        text:   'The UK labour market remained surprisingly tight throughout much of 2023 despite the Bank of England&#39;s fourteen consecutive interest rate rises. Wage growth peaked at 8.5% in mid-2023, the highest for 20 years. The Bank of England warned that above-productivity pay growth risked keeping services inflation persistently high, potentially requiring rates to remain elevated for longer. Some economists suggested that demographic change and Brexit-related reductions in EU labour supply had permanently tightened the labour market, raising the NAIRU.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain how a fall in unemployment can lead to higher wage growth and persistently high inflation.',
          hint:        '4-mark response &#8212; explain the wage-price spiral mechanism and link to the Phillips curve concept.',
          modelAnswer: 'When unemployment is low and the labour market is tight &#8212; as the extract describes &#8212; workers have stronger bargaining power because employers are competing to attract and retain staff from a limited pool. This pushes up wage growth, which reached 8.5% in mid-2023. Higher wages raise households&#39; disposable income and consumer spending, increasing aggregate demand and adding demand-pull inflationary pressure. Simultaneously, higher labour costs for firms increase their cost of production, generating cost-push inflation as firms pass these costs on through higher prices. This creates a wage-price spiral: higher prices prompt further wage demands, which raise prices further. The extract&#39;s warning that above-productivity pay growth risked keeping &#8220;services inflation persistently high&#8221; reflects this mechanism. This is the short-run Phillips curve relationship: lower unemployment is associated with higher inflation through the labour market tightening mechanism.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'In the long run, the Phillips curve is vertical at the NAIRU. This implies that:',
          options: [
            { id: 'opt-a', text: 'There is always a trade-off between lower unemployment and lower inflation'      },
            { id: 'opt-b', text: 'Governments can permanently reduce unemployment by accepting higher inflation'   },
            { id: 'opt-c', text: 'Attempts to reduce unemployment below the NAIRU result in accelerating inflation'},
            { id: 'opt-d', text: 'The unemployment rate has no effect on the rate of wage inflation'               }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. The vertical long-run Phillips curve (Friedman-Phelps) shows that pushing unemployment below the NAIRU causes inflation to accelerate without any permanent reduction in unemployment &#8212; as inflation expectations adjust upward, the short-run Phillips curve shifts up.',
          feedbackWrong:   'The correct answer is C. In the long run, workers adjust their inflation expectations. If unemployment is kept below NAIRU, workers demand higher wages to compensate for higher inflation, pushing costs up further &#8212; causing accelerating inflation without any lasting reduction in unemployment.'
        }
      ]
    },

    /* ── Q3 – Current account and growth conflict ──────────────  */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'Current account deficit and growth conflict',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '&#163;', label: 'UK current account deficit (2023)',   value: '&#163;86bn'  },
          { color: 'rose',  icon: '%',      label: 'Current account as % of GDP (2023)', value: '&#8722;3.3%' },
          { color: 'blue',  icon: '%',      label: 'UK real GDP growth (2023)',            value: '0.1%'        },
          { color: 'blue',  icon: '%',      label: 'UK household savings ratio (2023 Q2)',value: '8.5%'        }
        ]
      },

      parts: [
        {
          id:          'q3a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Explain why higher economic growth in the UK tends to worsen the current account deficit.',
          hint:        '4-mark response &#8212; explain the import propensity mechanism and why growth pulls in more imports.',
          modelAnswer: 'Economic growth raises household incomes and consumer spending. A significant proportion of UK consumer spending falls on imported goods &#8212; electronics, clothing, food, fuel &#8212; because the UK has a high marginal propensity to import. Therefore, when GDP grows faster, consumer spending rises, pulling in a higher volume of imports. Higher imports increase the deficit on the current account (more spending on foreign goods and services than overseas spending on UK goods). This creates a conflict between the growth objective and the current account balance objective: policies designed to boost growth (lower interest rates, tax cuts, infrastructure spending) typically worsen the current account by stimulating import demand. The UK&#39;s persistent current account deficit partly reflects this structural tendency &#8212; the deficit has been negative in every year since 1984, even during periods of weak growth.'
        },
        {
          id:     'q3b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following policies would most directly reduce a current account deficit without conflicting with the objective of economic growth?',
          options: [
            { id: 'opt-a', text: 'A rise in interest rates to reduce consumer spending on imports'             },
            { id: 'opt-b', text: 'A depreciation of sterling to make exports cheaper and imports more expensive'},
            { id: 'opt-c', text: 'A reduction in government spending to dampen import demand'                  },
            { id: 'opt-d', text: 'A rise in income tax to reduce household disposable income'                  }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. A depreciation improves price competitiveness: exports become cheaper for foreign buyers (boosting export revenues) and imports become more expensive for UK consumers (reducing import volumes). This can improve the current account while maintaining or boosting growth through higher net exports &#8212; unlike options A, C and D which all reduce aggregate demand.',
          feedbackWrong:   'The correct answer is B. A sterling depreciation changes relative prices: UK exports become cheaper for foreign buyers and imports become more expensive domestically. If the Marshall-Lerner condition holds (combined export and import price elasticities exceed 1), this improves the current account without the growth-reducing demand effects of options A, C and D.'
        }
      ]
    },

    /* ── Q4 – Equity vs efficiency trade-off ─────────────────── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'Equity and efficiency trade-offs',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from Resolution Foundation, Living Standards Outlook, 2023',
        text:   'The UK faces a fundamental tension between raising living standards through economic growth and reducing income inequality. Supply-side reforms &#8212; such as reducing corporation tax, cutting the top rate of income tax, and deregulating labour markets &#8212; may incentivise investment and raise productive efficiency. However, these same policies often increase pre-tax income inequality, with gains concentrated among higher earners and capital owners. Redistribution through higher public spending and progressive taxation can reduce inequality but may reduce efficiency incentives if tax rates are sufficiently high.'
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain the conflict between the macroeconomic objectives of economic efficiency and equity.',
          hint:        '4-mark response &#8212; explain what each objective means and why pursuing one tends to worsen the other.',
          modelAnswer: 'Economic efficiency refers to producing goods and services at the lowest cost and allocating resources to their highest-value uses, often enhanced by market incentives. Equity refers to a fair distribution of income and wealth. The extract highlights the tension between these: supply-side reforms that raise efficiency &#8212; such as cutting corporation tax or top income tax rates &#8212; may increase incentives to invest, innovate, and work, raising potential output. However, the gains from these efficiency improvements tend to be concentrated among higher earners and capital owners, worsening income inequality. Conversely, redistributive policies &#8212; higher progressive taxes and public spending on welfare &#8212; reduce income inequality and improve equity outcomes, but may reduce incentives to work, save, and invest, potentially lowering efficiency. This creates a fundamental trade-off: governments must decide how much efficiency they are prepared to sacrifice for greater equity, and vice versa &#8212; no policy can simultaneously maximise both without compromise.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following provides an example of two macroeconomic objectives being COMPLEMENTARY (achieved together) rather than conflicting?',
          options: [
            { id: 'opt-a', text: 'Low inflation and low unemployment'                                            },
            { id: 'opt-b', text: 'Reducing the budget deficit and increasing economic growth'                   },
            { id: 'opt-c', text: 'Reducing the current account deficit and higher economic growth'              },
            { id: 'opt-d', text: 'Higher growth through supply-side reform and reduced income inequality'       }
          ],
          correct:         'opt-d',
          feedbackCorrect: 'Correct. Supply-side reforms that raise productivity (investment in education, infrastructure, R&amp;D) can simultaneously increase growth AND reduce inequality if they focus on improving human capital of lower-income workers &#8212; raising their productivity and wages. This is one area where objectives can be complementary rather than conflicting.',
          feedbackWrong:   'The correct answer is D. Supply-side investment in human capital (education, training) can simultaneously raise GDP growth and reduce income inequality by improving the earnings potential of lower-skilled workers &#8212; creating a virtuous circle where the objectives reinforce each other. Options A, B and C all represent conflicts rather than complementarities.'
        }
      ]
    },

    /* ── Q5 – Environmental sustainability and growth ─────────── */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'Environmental sustainability and economic growth',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '%', label: 'UK CO&#8322; emissions reduction (1990&#8211;2023)', value: '&#8722;53%' },
          { color: 'blue',  icon: '%', label: 'UK real GDP growth (1990&#8211;2023, cumulative)',   value: '+91%'        },
          { color: 'green', icon: '%', label: 'Renewable energy share of UK electricity (2023)',     value: '42%'         },
          { color: 'blue',  icon: '&#163;', label: 'UK green investment needed (annual, CCC est.)',  value: '&#163;50bn+' }
        ]
      },

      parts: [
        {
          id:          'q5a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, discuss whether the UK has demonstrated that economic growth and environmental sustainability can be achieved simultaneously.',
          hint:        '4-mark response &#8212; the data shows both growth and emissions reduction. Explain why this might be possible and what limitations still exist.',
          modelAnswer: 'The data suggests the UK has made significant progress in decoupling growth from emissions: real GDP grew by 91% between 1990 and 2023 while CO&#8322; emissions fell by 53%. This challenges the assumption that growth and environmental sustainability necessarily conflict. The rise in renewable energy to 42% of UK electricity reflects structural change &#8212; deindustrialisation, energy efficiency improvements, and the transition to cleaner power generation. This supports the Environmental Kuznets Curve hypothesis: at higher income levels, societies may invest in cleaner technologies and shift toward less carbon-intensive services. However, limitations remain. First, UK emissions statistics often exclude those embedded in imported goods &#8212; if production has simply moved overseas, total global emissions may not have fallen. Second, further decarbonisation requires an estimated &#163;50bn+ annually in green investment, far exceeding current commitments. While past decoupling is encouraging, achieving net zero by 2050 will require far more aggressive action that may genuinely constrain certain forms of growth, particularly in aviation, heavy industry, and transport.'
        },
        {
          id:     'q5b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'A carbon tax is best described as a policy that attempts to achieve which combination of objectives simultaneously?',
          options: [
            { id: 'opt-a', text: 'Economic growth and lower unemployment'                        },
            { id: 'opt-b', text: 'Environmental sustainability and allocative efficiency'        },
            { id: 'opt-c', text: 'Lower inflation and a stronger current account balance'        },
            { id: 'opt-d', text: 'Greater income equality and fiscal balance'                    }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. A carbon tax internalises the external cost of carbon emissions (environmental sustainability) while also correcting the market failure that leads to over-production of carbon-intensive goods &#8212; bringing the private cost closer to the social cost and improving allocative efficiency (P = MSC).',
          feedbackWrong:   'The correct answer is B. A carbon tax prices the negative externality of carbon emissions, correcting the market failure and improving allocative efficiency (P → MSC). Simultaneously, by discouraging carbon-intensive production and consumption, it promotes environmental sustainability. Both objectives are served by a single policy instrument.'
        }
      ]
    }

  ]
};

/* ---- land-section-b.js ---- */
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

/* ---- land-section-c.js ---- */
window.ECONOS_LAND_SECTION_C = {
  topic:        'Macroeconomic Objectives and Conflicts',
  sectionLabel: 'Section C &#8212; Essay',
  backUrl:      TopicLoader.routes.land('intro'),

  question: {
    id:               'qc',
    commandWord:      'Evaluate',
    stem:             'Evaluate the view that governments inevitably face conflicts between their macroeconomic objectives.',
    marks:            25,
    suggestedMinutes: 30,

    structureTips: [
      'Define the main macroeconomic objectives: low inflation, low unemployment, economic growth, current account balance, environmental sustainability.',
      'Explain the main conflicts: Phillips curve (inflation vs unemployment), growth vs inflation, growth vs current account, growth vs environment.',
      'Consider circumstances when objectives can be complementary: supply-side growth (raises potential and lowers inflation), green investment.',
      'Evaluate whether conflicts are permanent (long-run) or short-run phenomena.',
      'Use specific UK evidence: 2022&#8211;23 inflation/growth conflict; UK decoupling data; Truss episode.',
      'Conclude with a supported judgement on whether conflicts are inevitable or context-dependent.'
    ],

    modelAnswer:
      '<p>Macroeconomic objectives include low and stable inflation, high employment, sustainable economic growth, a satisfactory current account position, and increasingly environmental sustainability. Governments universally aspire to all of these simultaneously. The question is whether achieving progress toward one objective necessarily compromises others &#8212; or whether, with the right policies, objectives can be simultaneously advanced.</p>'
    + '<p>Several conflict relationships are well-established. The short-run Phillips curve captures the inflation-unemployment trade-off: when the economy operates near full capacity and unemployment falls below the NAIRU, wage growth accelerates and demand-pull inflationary pressure builds. Policies to reduce inflation &#8212; higher interest rates, fiscal tightening &#8212; typically raise unemployment. The UK in 2023 illustrated this sharply: fourteen consecutive Bank Rate rises from 0.10% to 5.25% reduced CPI inflation but simultaneously compressed GDP growth to 0.1%, reflecting the direct conflict between price stability and economic expansion. Similarly, economic growth tends to worsen the current account because rising incomes increase import spending; the UK&#39;s persistent current account deficit (&#8722;3.3% of GDP in 2023) reflects this structural tendency. The conflict between growth and environmental sustainability is historically well-founded: carbon emissions rose with industrialisation and have only begun declining with major structural shifts.</p>'
    + '<p>However, these conflicts are not always inevitable or permanent. Several qualifications are important. First, the Phillips curve trade-off is primarily a <em>short-run</em> phenomenon. In the long run, the Phillips curve is vertical at the NAIRU: there is no permanent trade-off between inflation and unemployment. Supply-side policies that raise productivity &#8212; investment in education, infrastructure, and technology &#8212; can simultaneously reduce the NAIRU and raise the productive potential of the economy, allowing lower unemployment <em>without</em> higher inflation. This represents a case where two objectives reinforce rather than conflict. Second, high-quality economic growth need not worsen the current account if it is driven by productivity improvements and export competitiveness rather than import-intensive consumption. Third, the UK&#39;s experience of decoupling &#8212; GDP up 90%, emissions down 50% since 1990 &#8212; suggests that green investment can resolve the growth-environment conflict over time, particularly in electricity generation where renewables are now cost-competitive with fossil fuels.</p>'
    + '<p>The circumstances under which conflicts arise or resolve therefore depend on the type of policy pursued, the structure of the economy, and the time horizon considered. Short-run demand management typically involves more acute conflicts; long-run supply-side investment can reduce them. The Truss episode in 2022 demonstrated that the conflict between objectives can be amplified by policy incoherence &#8212; running fiscal and monetary policy in opposing directions created financial market instability that simultaneously worsened inflation, growth, and fiscal sustainability.</p>'
    + '<p>In conclusion, conflicts between macroeconomic objectives are real and frequently binding in the short run &#8212; particularly between inflation and unemployment, and between growth and inflation during demand-driven cycles. The view that they are <em>inevitable</em> is, however, overstated. With coherent supply-side policy, credible institutions, and well-designed fiscal and monetary coordination, many conflicts can be reduced or eliminated over the medium to long term. The most accurate assessment is that conflicts are frequent, context-dependent, and short-run dominant &#8212; but not structurally inevitable with the right policy mix.</p>'
  },

  strongAnswers: [
    'Define all objectives briefly before discussing conflicts',
    'Identify and explain specific conflict mechanisms &#8212; not just assert they exist',
    'Distinguish short-run conflicts from long-run possibilities of complementarity',
    'Use specific UK evidence: 2022&#8211;23 data, Phillips curve, decoupling statistics',
    'Conclude with a nuanced, conditional judgement rather than a binary yes/no'
  ]
};

