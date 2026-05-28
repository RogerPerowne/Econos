/* ============================================================
   ECONOS – Land It · consolidated section data
   Concatenated from per-section files at v0.4.0. Quiz pools
   from the former quiz-*.js shells are folded in here too —
   the questions live on as Land It content.
   ============================================================ */

/* ---- land-complete.js ---- */
window.ECONOS_LAND_COMPLETE = {
  topic:   'Monetary Policy',
  nextUrl: '/',

  sections: {
    A: { label: 'Section A', sublabel: 'Short questions',    color: '#ec2d68' },
    B: { label: 'Section B', sublabel: 'Extended response',  color: '#f59e0b' },
    C: { label: 'Section C', sublabel: 'Essay',              color: '#2563eb' }
  },

  nextCard: {
    icon:  '&#x1F680;',
    title: 'What to do next',
    text:  'Compare your answers with the model responses. Check whether you traced the full transmission mechanism &#8211; Bank Rate through to AD through to the price level &#8211; rather than stating the conclusion without the mechanism. Note whether your essay distinguished demand-pull (monetary policy effective) from cost-push (monetary policy limited), and whether your judgement was conditional rather than absolute.'
  }
};

/* ---- land-intro.js ---- */
window.ECONOS_LAND_INTRO = {
  topic:        'Monetary Policy',
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
    'Tracing the transmission mechanism from Bank Rate to inflation and output',
    'Analysing quantitative easing and its effects on the money supply',
    'Evaluating the limitations of monetary policy (lags, zero lower bound)',
    'Practising extended writing under exam-style time pressure'
  ],

  tip: 'Always trace the full transmission mechanism: Bank Rate → commercial interest rates → consumption and investment → aggregate demand → price level and output. Do not just say &#8220;raising rates reduces inflation&#8221; &#8211; show the mechanism step by step.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                     }
  ]
};

/* ---- land-section-a.js ---- */
window.ECONOS_LAND_SECTION_A = {
  topic:        'Monetary Policy',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.routes.land('intro'),

  questions: [

    /* ── Q1 – The Bank Rate and transmission ─────────────────── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'The Bank Rate and the transmission mechanism',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'green', icon: '%', label: 'Bank Rate (December 2021)', value: '0.25%'  },
          { color: 'rose',  icon: '%', label: 'Bank Rate (August 2023)',   value: '5.25%'  },
          { color: 'rose',  icon: '%', label: 'CPI inflation (Oct 2022)',  value: '11.1%'  },
          { color: 'blue',  icon: '%', label: 'CPI inflation (Dec 2023)',  value: '3.9%'   }
        ]
      },

      parts: [
        {
          id:          'q1a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain the transmission mechanism through which the Bank of England\'s interest rate rises reduced the rate of inflation between 2022 and 2023.',
          hint:        '4-mark response &#8212; trace at least two channels linking the Bank Rate rise to lower inflation.',
          modelAnswer: 'The Bank Rate rose from 0.25% to 5.25%, a 5 percentage point increase. This rise transmitted to commercial lending rates &#8212; mortgage rates, loan rates, and credit card rates all increased, raising the cost of borrowing. Households with variable-rate mortgages faced higher repayments, directly reducing their disposable income and their ability to spend on goods and services. Simultaneously, higher savings rates increased the attractiveness of saving relative to consumption. Both effects reduced consumer spending and shifted aggregate demand to the left. With output growth slowing and firms competing harder for customers, upward price pressure eased. CPI fell from 11.1% to 3.9%, though it remained above the 2% target. Additionally, higher UK interest rates attracted capital inflows from overseas investors seeking better returns on UK assets, increasing demand for sterling and causing it to appreciate. A stronger pound reduced the price of UK imports, directly dampening the cost-push inflationary pressure that had been driving the energy price surge.'
        },
        {
          id:     'q1b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'The Bank of England\'s primary objective, as set by HM Treasury, is to:',
          options: [
            { id: 'opt-a', text: 'Maximise economic growth'                                },
            { id: 'opt-b', text: 'Keep CPI inflation at 2%'                               },
            { id: 'opt-c', text: 'Maintain sterling at a fixed exchange rate'              },
            { id: 'opt-d', text: 'Minimise unemployment below 4%'                         }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The Bank of England has a single primary mandate: to keep CPI inflation at 2%. Subject to achieving that, it must also support the government&#39;s objectives for growth and employment.',
          feedbackWrong:   'The correct answer is B. The Bank of England&#39;s primary objective is price stability &#8212; specifically keeping CPI at 2%. While it also has a secondary objective to support economic growth and employment, price stability takes precedence.'
        }
      ]
    },

    /* ── Q2 – Quantitative easing ─────────────────────────────── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'Quantitative easing',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from Bank of England Quarterly Bulletin, 2021',
        text:   'Since March 2009, the Bank of England has purchased &#163;895 billion of government and corporate bonds through its Asset Purchase Facility. By purchasing bonds in the secondary market, the Bank pushes bond prices up and yields down, reducing long-term borrowing costs across the economy. The newly created central bank reserves increase the broad money supply. Critics of quantitative easing argue that much of this newly created money has boosted asset prices rather than stimulating real economic activity, primarily benefiting already-wealthy asset owners.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain how quantitative easing is intended to stimulate aggregate demand.',
          hint:        '4-mark response &#8212; explain the mechanism from bond purchases through to higher aggregate demand.',
          modelAnswer: 'Quantitative easing (QE) involves the Bank of England creating new central bank reserves to purchase government and corporate bonds from financial institutions. As the extract explains, large-scale bond purchases push bond prices up and yields (interest rates) down across the economy. Lower long-term interest rates reduce the cost of borrowing for firms (for investment) and households (for mortgages and credit), stimulating consumption and investment &#8212; both components of aggregate demand. Additionally, lower bond yields make other assets such as equities more attractive, raising asset prices and household wealth. Higher wealth encourages greater consumer spending (the wealth effect), further boosting AD. QE is particularly important when the Bank Rate is already near the zero lower bound and cannot be cut further &#8212; as in 2009 and 2020 &#8212; providing an alternative monetary stimulus channel.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following best describes a potential criticism of quantitative easing as a monetary policy tool?',
          options: [
            { id: 'opt-a', text: 'It raises short-term interest rates, reducing consumer borrowing'       },
            { id: 'opt-b', text: 'It primarily inflates asset prices, increasing wealth inequality'       },
            { id: 'opt-c', text: 'It reduces government bond issuance and restricts fiscal policy'        },
            { id: 'opt-d', text: 'It causes immediate hyperinflation by expanding the money supply'       }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The extract explicitly notes this criticism: much QE money boosts asset prices (bonds, equities, property) rather than the real economy. Since wealthier households own more assets, QE disproportionately benefits the already-wealthy, potentially increasing income and wealth inequality.',
          feedbackWrong:   'The correct answer is B. The extract states that critics argue QE primarily boosted asset prices rather than real economic activity, benefiting asset owners &#8212; typically wealthier households. This is a distributional criticism: QE may worsen wealth inequality without generating proportionate real economic stimulus.'
        }
      ]
    },

    /* ── Q3 – The zero lower bound ───────────────────────────── */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'The zero lower bound problem',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%', label: 'Bank Rate (March 2009 &#8212; March 2020)', value: '0.5&#8211;0.25%' },
          { color: 'blue',  icon: '%', label: 'Bank Rate (March 2020 &#8212; Dec 2021)',   value: '0.10%'           },
          { color: 'rose',  icon: '%', label: 'Eurozone ECB deposit rate (2014&#8211;22)', value: 'Negative rates'  },
          { color: 'green', icon: '&#163;', label: 'Total BoE QE purchases (2009&#8211;21)', value: '&#163;895bn'   }
        ]
      },

      parts: [
        {
          id:          'q3a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Explain why the zero lower bound creates a constraint on conventional monetary policy and how central banks have responded.',
          hint:        '4-mark response &#8212; define the zero lower bound, explain the constraint it creates, and explain QE and/or forward guidance as responses.',
          modelAnswer: 'The zero lower bound (ZLB) is the constraint that nominal interest rates cannot typically be reduced below zero (or cannot be reduced significantly below zero), because at negative rates depositors would prefer to hold physical cash. The data shows the UK Bank Rate stuck at 0.10% from March 2020 &#8212; at the effective lower bound. With rates unable to fall further, the Bank cannot use its primary instrument to stimulate aggregate demand during a deep recession. Central banks have responded with unconventional tools. First, quantitative easing (QE): purchasing bonds to directly reduce long-term yields and expand the money supply &#8212; the UK spent &#163;895bn. Second, forward guidance: committing to keep rates low for an extended period to anchor expectations and support borrowing decisions now. The Eurozone ECB went further, implementing negative interest rates (charging banks to deposit reserves) &#8212; though the UK Bank of England explicitly rejected this approach, expressing doubts about its effectiveness through the banking transmission channel.'
        },
        {
          id:     'q3b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Forward guidance, as a monetary policy tool, works primarily through which channel?',
          options: [
            { id: 'opt-a', text: 'Directly reducing government borrowing costs'                    },
            { id: 'opt-b', text: 'Anchoring expectations about future interest rates'              },
            { id: 'opt-c', text: 'Increasing the money supply by purchasing financial assets'      },
            { id: 'opt-d', text: 'Setting a fixed exchange rate to reduce import prices'           }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Forward guidance works by credibly communicating the central bank\'s intended future policy path, anchoring interest rate expectations and thereby influencing current borrowing, saving and investment decisions.',
          feedbackWrong:   'The correct answer is B. Forward guidance reduces current borrowing costs and stimulates spending by credibly signalling that rates will remain low, anchoring market expectations. Unlike QE, it does not involve asset purchases or money creation &#8212; it works through the expectations channel.'
        }
      ]
    },

    /* ── Q4 – Exchange rate channel ─────────────────────────── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'Exchange rate channel of monetary policy',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '&#163;', label: '&#163;/$ rate (before rate rise)', value: '&#163;1 = $1.22'  },
          { color: 'green', icon: '&#163;', label: '&#163;/$ rate (after rate rise)',  value: '&#163;1 = $1.28'  },
          { color: 'green', icon: '%',      label: 'Change in import prices',          value: '&#8722;4.9%'      },
          { color: 'blue',  icon: '%',      label: 'UK import intensity of GDP',       value: '&#8776; 30%'      }
        ]
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain how a rise in the Bank Rate affects the sterling exchange rate and inflation through the exchange rate channel.',
          hint:        '4-mark response &#8212; explain the hot money flow mechanism, its effect on sterling, and how this feeds through to import prices and inflation.',
          modelAnswer: 'A rise in the Bank Rate increases the interest rate paid on UK financial assets relative to assets in other countries. This attracts &#8220;hot money&#8221; capital inflows from overseas investors seeking higher returns &#8212; they must buy sterling to invest in UK assets. Increased demand for sterling causes the exchange rate to appreciate, as shown in the data (from $1.22 to $1.28). A stronger sterling makes UK imports cheaper: the same amount of sterling now buys more foreign currency, so import prices fall by 4.9%. Since the UK import intensity of GDP is approximately 30%, lower import prices directly reduce the cost of many goods consumed domestically, applying downward pressure on the CPI. This exchange rate channel operates quickly compared with the demand channel and is particularly important for an open, trade-dependent economy such as the UK.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'A country with a high marginal propensity to import will find the exchange rate channel of monetary policy particularly:',
          options: [
            { id: 'opt-a', text: 'Ineffective, because most spending is on domestic goods'                    },
            { id: 'opt-b', text: 'Effective, because a larger share of spending is on import-priced goods'   },
            { id: 'opt-c', text: 'Ineffective, because exchange rates cannot be influenced by interest rates' },
            { id: 'opt-d', text: 'Effective, because higher imports always cause currency depreciation'       }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. A high marginal propensity to import means consumers spend a large share of extra income on imported goods. Exchange rate changes therefore affect a larger proportion of the price level, making the exchange rate channel of monetary policy more powerful.',
          feedbackWrong:   'The correct answer is B. The more open the economy (higher import share of spending), the larger the impact of exchange rate changes on domestic price levels. Countries with high import intensity experience stronger inflationary/deflationary effects from exchange rate movements.'
        }
      ]
    },

    /* ── Q5 – Limitations of monetary policy ────────────────── */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'Limitations of monetary policy',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from OBR Economic and Fiscal Outlook, 2023',
        text:   'The Bank of England estimates that changes in the Bank Rate take between 18 and 24 months to feed fully through to inflation. This long and variable lag creates a significant challenge for monetary policymakers: they must make decisions today based on forecasts of economic conditions two years hence. Forecasting errors have repeatedly resulted in policy being either too loose (failing to prevent inflation) or too tight (choking off recovery). The 2021&#8211;22 period, when the Bank kept rates near zero while inflation accelerated sharply, has been cited as an example of policy being behind the curve.'
      },

      parts: [
        {
          id:          'q5a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain two limitations of monetary policy as a tool for managing the macroeconomy.',
          hint:        '4-mark response &#8212; identify two distinct limitations with explanation, using the extract for at least one.',
          modelAnswer: 'First, monetary policy operates with long and variable lags. The extract states that Bank Rate changes take 18&#8211;24 months to feed fully through to inflation. This means the Bank must set policy based on forecasts of future economic conditions that may prove incorrect &#8212; as the extract notes, the 2021&#8211;22 period saw rates remain near zero while inflation accelerated, with policy &#8220;behind the curve.&#8221; If the Bank misjudges timing, it can amplify economic instability rather than reduce it. Second, monetary policy is a blunt instrument that cannot be targeted at specific sectors or groups. A rise in the Bank Rate increases borrowing costs across the entire economy, harming mortgage holders, small businesses, and exporters simultaneously regardless of whether the inflation originates from their spending. This indiscriminate impact may cause collateral damage &#8212; for instance, raising unemployment in sectors unrelated to the inflationary pressure &#8212; that fiscal policy could potentially avoid through targeted measures.'
        },
        {
          id:     'q5b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following best describes the concept of \'independence\' of the Bank of England in its monetary policy decisions?',
          options: [
            { id: 'opt-a', text: 'The Bank sets its own inflation target without government involvement'                 },
            { id: 'opt-b', text: 'The Bank sets interest rates to meet the government-set inflation target'             },
            { id: 'opt-c', text: 'The Bank can override government fiscal policy decisions'                             },
            { id: 'opt-d', text: 'The Bank is free to set any inflation target it chooses'                              }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The Bank of England has &#8220;operational independence&#8221; &#8212; it sets interest rates to meet the 2% inflation target. But the target itself is set by HM Treasury (the government), not the Bank. The Bank decides HOW to achieve the target; the government decides WHAT the target is.',
          feedbackWrong:   'The correct answer is B. The Bank of England has operational independence &#8212; the freedom to set interest rates as it sees fit to meet the inflation target. But the inflation target (2% CPI) is set by the government (HM Treasury). This distinction between target-setting (government) and instrument-setting (Bank) is important.'
        }
      ]
    }

  ]
};

/* ---- land-section-b.js ---- */
window.ECONOS_LAND_SECTION_B = {
  topic:        'Monetary Policy',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.routes.land('intro'),

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
          'Between December 2021 and August 2023, the Bank of England\'s Monetary Policy Committee raised the Bank Rate on fourteen consecutive occasions, taking it from 0.10% to 5.25% &#8212; the highest level since 2008. The primary driver was CPI inflation, which peaked at 11.1% in October 2022 following the energy price shock triggered by Russia\'s invasion of Ukraine.',
          'Mortgage holders on variable rates or fixed rates due for renewal faced sharply higher monthly repayments &#8212; in some cases more than doubling. The BoE estimated that by end 2023 around 1.6 million households would see their mortgage payments increase by &#163;500 or more per month. Critics argued the rate rises came too slowly, allowing inflation expectations to become partially unanchored, while others argued they came too quickly, risking a hard landing.',
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
          'Critics raised concerns about the distributional effects of QE. Research by the Resolution Foundation found that the wealthiest 5% of UK households owned over 40% of financial assets &#8212; the primary beneficiary of rising asset prices driven by QE. This suggests QE may have worsened wealth inequality even as it helped stabilise output and employment.',
          'A further concern is that asset price inflation driven by QE made housing increasingly unaffordable for younger, lower-income households, transferring wealth intergenerationally. Supporters of QE counter that avoiding a deep recession or deflation benefits all households and that the alternatives &#8212; including fiscal austerity &#8212; would have caused worse distributional outcomes.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Limits of monetary policy and the case for coordination',
        tags:        ['supply shocks', 'policy lags', 'fiscal-monetary coordination', 'trade-offs'],
        defaultOpen: false,
        paragraphs: [
          'Many economists argue that the inflation of 2021&#8211;23 was primarily cost-push, driven by global energy and commodity supply shocks rather than excess demand. If so, raising interest rates &#8212; a demand-side tool &#8212; addresses the symptom (rising prices) but not the cause (supply constraints), at the cost of reduced output and higher unemployment.',
          'The IMF and several academic economists suggested that a coordinated policy response &#8212; combining targeted fiscal support to shield the most vulnerable from energy costs with tight monetary policy to anchor expectations &#8212; would be superior to relying on rate rises alone. The UK government did provide energy price guarantees in 2022, but critics argued these were insufficiently targeted.',
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
          'Identify two distinct channels &#8212; do not treat them as the same point.',
          'The mortgage repayment channel (higher costs for borrowers) is one; the savings attractiveness channel is another.',
          'Develop each mechanism: explain why the change in behaviour occurs, not just that it does.'
        ],
        modelAnswer: 'First, higher interest rates increase the cost of mortgage repayments for variable-rate borrowers and those rolling off fixed-rate deals. As Extract A notes, some 1.6 million UK households faced mortgage payment increases of &#163;500 or more per month by end 2023. This direct reduction in disposable income forces households to cut back on spending on goods and services to meet higher housing costs &#8212; reducing consumer spending and aggregate demand. Second, higher interest rates raise the return on saving, making it more financially attractive to defer consumption. The opportunity cost of spending rises: each pound spent today forgoes higher interest income. Risk-averse households may also rebuild savings buffers depleted during the pandemic period. Both effects &#8212; the debt service channel and the savings incentive channel &#8212; reduce the propensity to consume and dampen aggregate demand.'
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
        modelAnswer: 'Quantitative easing operates by purchasing financial assets from investors, pushing their prices up and yields down. This wealth effect &#8212; rising asset values &#8212; is intended to stimulate spending by making asset holders feel richer. However, Extract B reveals a significant distributional concern: the wealthiest 5% of UK households own over 40% of financial assets. Rising equity, bond and property prices driven by QE therefore disproportionately benefit the already-wealthy, increasing the gap between asset-rich and asset-poor households. This is a form of regressive redistribution: QE transfers real wealth to those who need it least. The housing market dimension reinforces this: QE-driven low interest rates made mortgage borrowing cheap and helped push house prices up, benefiting existing owners while making homeownership less accessible for younger, lower-income households without inherited wealth. This intergenerational wealth transfer is a lasting distributional consequence. However, the counter-argument in Extract B is important: QE aimed to prevent deep recession and deflation, both of which disproportionately harm lower-income workers (who lack savings and are most vulnerable to unemployment). If QE successfully prevented a worse downturn, its overall effect may still have been progressive compared to the counterfactual. On balance, QE was a pragmatic crisis tool with unavoidable distributional costs, but the alternative &#8212; deep recession &#8212; would likely have been more harmful to vulnerable households. The case for addressing QE&#39;s distributional effects falls more appropriately on targeted fiscal policy than on monetary policy reform.'
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
          'Use Extract C: supply-side shocks &#8212; energy prices &#8212; may not be well-addressed by demand-side monetary tools.',
          'Consider the policy coordination case: fiscal targeting + monetary anchoring may be superior.',
          'Address the Truss episode (Extract C) &#8212; fiscal-monetary tension.',
          'Conclude with a supported, balanced judgement on sufficiency.'
        ],
        modelAnswer: 'Monetary policy &#8212; primarily the Bank Rate, supplemented by quantitative easing, quantitative tightening, and forward guidance &#8212; is the UK&#39;s primary tool for maintaining price stability. Its core strength is credibility: an operationally independent Bank of England with a clear 2% CPI mandate can anchor inflation expectations, reducing the risk of wage-price spirals. Rate rises effectively address demand-pull inflation by increasing borrowing costs and dampening consumer spending and investment &#8212; as demonstrated by the fourteen consecutive rate rises between 2021 and 2023, which contributed to bringing CPI from 11.1% back toward target. However, Extract C highlights a fundamental limitation: if inflation originates from supply-side shocks rather than excess demand, monetary tightening is a blunt and potentially counterproductive tool. Raising interest rates cannot reduce global energy prices or undo supply chain disruptions &#8212; it can only reduce demand enough to offset the price impact, at the cost of lower output and employment. This &#8220;cold bath&#8221; approach to supply-shock inflation is economically costly and arguably unnecessary if the supply shock is temporary. Extract C&#39;s suggestion of policy coordination is therefore compelling: targeted fiscal support (energy price guarantees) shields the most vulnerable from the supply-side price rise, while monetary policy maintains inflation expectations &#8212; a superior combination to relying on rate rises alone. The Truss episode in Extract C further illustrates the interdependence of monetary and fiscal policy: an unfunded fiscal expansion immediately pushed gilt yields higher, tightening financial conditions despite the Bank&#39;s rate path. This shows that monetary policy does not operate in isolation &#8212; fiscal credibility is itself a precondition for monetary effectiveness. In conclusion, monetary policy is necessary but not sufficient for price stability. It is well-suited to demand-pull inflation but limited against supply shocks. Durable price stability requires coordination between credible monetary policy and a responsible fiscal stance &#8212; neither can succeed without the other.'
      }
    ]
  },

  strongAnswers: [
    'Trace the full transmission mechanism &#8212; not just the starting point',
    'Use extract data precisely: cite specific figures and sources',
    'Acknowledge both what monetary policy can and cannot address',
    'Reach a supported judgement on effectiveness, not just a list of limitations'
  ]
};

/* ---- land-section-c.js ---- */
window.ECONOS_LAND_SECTION_C = {
  topic:        'Monetary Policy',
  sectionLabel: 'Section C &#8212; Essay',
  backUrl:      TopicLoader.routes.land('intro'),

  question: {
    id:               'qc',
    commandWord:      'Evaluate',
    stem:             'Evaluate the effectiveness of monetary policy as a tool for managing the UK macroeconomy.',
    marks:            25,
    suggestedMinutes: 30,

    structureTips: [
      'Define monetary policy and identify its main instruments: Bank Rate, QE/QT, forward guidance.',
      'Explain how monetary policy addresses inflation through the transmission mechanism &#8212; include a diagram.',
      'Cover growth/employment objectives: lower rates stimulate investment and consumption.',
      'Evaluate strengths: operational independence, credibility, pre-emptive action possible.',
      'Evaluate limitations: long lags (18&#8211;24 months), zero lower bound, blunt instrument, supply shocks.',
      'Consider interaction with fiscal policy: fiscal credibility affects monetary effectiveness.',
      'Conclude with a supported, conditional judgement on overall effectiveness.'
    ],

    modelAnswer:
      '<p>Monetary policy refers to the Bank of England&#39;s use of interest rates, quantitative easing, and forward guidance to achieve macroeconomic objectives &#8212; primarily the government-set 2% CPI inflation target, with a secondary objective of supporting growth and employment. The Bank&#39;s operational independence, granted in 1997, allows it to make rate decisions insulated from short-term political pressures, a significant structural advantage over the pre-independence era.</p>'
    + '<p>Monetary policy&#39;s clearest strength is its effectiveness against demand-pull inflation. Raising the Bank Rate increases borrowing costs across the economy &#8212; mortgages, business loans, credit &#8212; dampening consumption and investment. It also attracts capital inflows, appreciating sterling and reducing import prices. The fourteen rate rises from 0.10% to 5.25% during 2021&#8211;23 contributed to bringing CPI from 11.1% back toward target, demonstrating that decisive monetary tightening can work. Conversely, rate cuts and quantitative easing (&#163;895 billion of asset purchases since 2009) have supported aggregate demand during recessions, helping prevent both the 2008 financial crisis and the 2020 pandemic from causing deeper downturns. The credibility of an independent central bank is itself macroeconomically valuable: anchored inflation expectations reduce the likelihood of self-fulfilling wage-price spirals and allow the Bank to support growth without triggering inflation.</p>'
    + '<p>However, monetary policy faces significant limitations. Most critically, it operates with long and variable lags &#8212; the Bank estimates 18&#8211;24 months for rate changes to feed fully through to inflation. This requires policymakers to forecast future conditions that may prove wrong: the failure to raise rates quickly enough in 2021 has been cited as allowing inflation expectations to become partially unanchored. Monetary policy is also poorly suited to cost-push inflation from supply shocks &#8212; raising rates cannot reduce global energy prices and risks unnecessarily depressing output and employment in pursuit of a price target that reflects supply-side forces rather than excess demand. The zero lower bound is a further constraint: when the Bank Rate approaches zero (as in 2009 and 2020), conventional rate cuts are exhausted and unconventional tools (QE) must substitute, with less certain and more distributional unequal effects.</p>'
    + '<p>Monetary policy also cannot address structural weaknesses in the UK economy: low productivity growth, regional disparities, skills gaps, and inadequate infrastructure are beyond its reach. These supply-side factors determine the LRAS and the non-inflationary potential of the economy &#8212; only supply-side policy can shift them. Furthermore, as the 2022 Truss episode demonstrated, monetary policy cannot operate effectively when fiscal policy lacks credibility &#8212; unfunded spending commitments immediately pushed gilt yields higher, forcing the MPC to revise its rate path. Monetary and fiscal policy are interdependent, not independent.</p>'
    + '<p>In conclusion, monetary policy is an effective and necessary tool for managing UK macroeconomic stability, particularly against demand-driven inflation and cyclical output gaps. Its operational independence, speed of deployment relative to fiscal changes, and credibility-anchoring function give it clear comparative advantages. However, it is neither sufficient alone nor equally effective in all circumstances: its limitations against supply shocks, its distributional effects through QE, and its dependence on fiscal credibility mean it must be supported by coherent fiscal and supply-side policy to deliver durable macroeconomic stability. Effectiveness, therefore, is high but conditional &#8212; on the nature of the shock, the fiscal context, and the starting level of interest rates.</p>'
  },

  strongAnswers: [
    'Define monetary policy precisely and identify all key instruments',
    'Apply the transmission mechanism with an AD/AS diagram',
    'Distinguish demand-pull (monetary effective) from cost-push (monetary limited)',
    'Use specific UK evidence: dates, Bank Rate levels, QE totals, inflation figures',
    'Conclude with a clear, conditional judgement &#8212; not just a list of limitations'
  ]
};

