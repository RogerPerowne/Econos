/* ============================================================
   ECONOS – Land It · consolidated section data
   Concatenated from per-section files at v0.4.0. Quiz pools
   from the former quiz-*.js shells are folded in here too –
   the questions live on as Land It content.
   ============================================================ */

/* ---- land-complete.js ---- */
/* ============================================================
   ECONOS – Land It complete page data
   Topic: Aggregate Demand (2.7)
   ============================================================ */

window.ECONOS_LAND_COMPLETE = {
  topic:   'Aggregate Demand',
  nextUrl: '/',

  sections: {
    A: { label: 'Section A', sublabel: 'Short questions',    color: '#ec2d68' },
    B: { label: 'Section B', sublabel: 'Extended response',  color: '#f59e0b' },
    C: { label: 'Section C', sublabel: 'Essay',              color: '#2563eb' }
  },

  nextCard: {
    icon:  '&#x1F680;',
    title: 'What to do next',
    text:  'Compare your written answers with the model responses. Check whether you developed a full chain of analysis for each component of AD &#8211; particularly the multiplier mechanism and its leakages. In Section B, review whether your answer on business investment addressed both the short-run AD effect and the long-run supply-side consequences of lower capital accumulation. If your Section C essay lacked a conditional judgement about which factors matter most, practise constructing one before moving to the next topic.'
  }
};

/* ---- land-intro.js ---- */
/* ============================================================
   ECONOS – Land It intro page data
   Topic: Aggregate Demand (2.7)
   ============================================================ */

window.ECONOS_LAND_INTRO = {
  topic:        'Aggregate Demand',
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
    description: 'A 25-mark essay question. In the exam you choose from two options. In Land It you practise one.'
  },

  trains: [
    'Identifying and quantifying the components of aggregate demand: C, I, G, and net exports',
    'Applying the multiplier and AD&#47;AS framework to analyse demand-side shocks',
    'Evaluating the determinants of consumer and business spending using UK data',
    'Constructing a balanced essay on the factors that determine the level of aggregate demand'
  ],

  tip: 'Start with a Section B question for a focused 15-minute practice. Add Sections A and C when you are ready to simulate a fuller exam block.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                               }
  ]
};

/* ---- land-section-a.js ---- */
/* ============================================================
   ECONOS – Land It · Section A data for Aggregate Demand
   Topic: Aggregate Demand (2.7)
   ============================================================ */

window.ECONOS_LAND_SECTION_A = {
  topic:        'Aggregate Demand',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.routes.land('intro'),

  questions: [

    /* ── Q1 – Components of AD ───────────────────────────────── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'Components of aggregate demand',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%', label: 'Household consumption as % of UK GDP (2022)',           value: '61%'   },
          { color: 'green', icon: '%', label: 'Gross fixed capital formation (investment) as % of GDP', value: '18%'  },
          { color: 'rose',  icon: '%', label: 'General government spending as % of GDP',               value: '22%'  },
          { color: 'amber', icon: '%', label: 'UK net exports as % of GDP (2022)',                     value: '&#8722;2%' }
        ]
      },

      parts: [
        {
          id:     'q1a',
          letter: 'a',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following correctly states the formula for aggregate demand?',
          options: [
            { id: 'opt-a', text: 'AD = C &#8722; I + G + (X &#8722; M)'         },
            { id: 'opt-b', text: 'AD = C + I + G + (X &#8722; M)'               },
            { id: 'opt-c', text: 'AD = C + I &#8722; G + (X + M)'               },
            { id: 'opt-d', text: 'AD = C + I + G + (M &#8722; X)'               }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Aggregate demand is the total planned expenditure in an economy: consumption (C) plus investment (I) plus government spending (G) plus net exports (X &#8722; M). All four components add to demand; imports are subtracted because they represent spending on foreign rather than domestically produced goods.',
          feedbackWrong:   'The correct answer is B. AD = C + I + G + (X &#8722; M). Imports are subtracted from exports to give net exports &#8212; a negative value (as the UK data shows) means the country imports more than it exports, reducing net AD from abroad. All other components are positive additions to total demand.'
        },
        {
          id:          'q1b',
          letter:      'b',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain two factors that could cause household consumption to fall, and analyse the likely effect on aggregate demand.',
          hint:        '4-mark response &#8212; identify two distinct factors affecting consumption and develop the mechanism by which each reduces AD.',
          modelAnswer: 'First, a rise in interest rates reduces household consumption. When the Bank of England raises Bank Rate &#8212; as it did from 0.1% to 5.25% between 2021 and 2023 &#8212; the cost of mortgage repayments and consumer credit increases, reducing households&#39; disposable income. Those with variable-rate mortgages face an immediate squeeze, while first-time buyers find home purchase less affordable, reducing housing-related spending. Since consumption accounts for approximately 61% of UK GDP, even a modest fall in C produces a significant leftward shift in the AD curve, reducing real output and potentially raising unemployment. Second, a fall in consumer confidence causes households to save more and spend less &#8212; sometimes called &#8220;precautionary saving&#8221;. If households expect job losses or income falls &#8212; for example, during the cost-of-living crisis of 2022&#8211;23 when real wages fell sharply &#8212; they defer big-ticket purchases such as new cars and holidays. This direct reduction in C again shifts AD to the left, compounding the effect of rising interest rates and creating downward pressure on GDP growth.'
        }
      ]
    },

    /* ── Q2 – The multiplier effect ─────────────────────────── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'The multiplier effect and aggregate demand',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from the Office for Budget Responsibility, Economic and Fiscal Outlook, March 2023',
        text:   'The OBR estimated that households&#39; real disposable income fell by 2.5% in 2022&#8211;23 &#8212; the largest single-year fall since ONS records began in 1956. Energy bills accounted for a significant share of this squeeze, but rising food prices and mortgage costs compounded the effect. The OBR noted that consumer spending growth slowed sharply from 5.8% in 2021 to an estimated 0.4% in 2022, and forecast near-zero growth in 2023. The direct impact on GDP was partially offset by the government&#39;s Energy Price Guarantee, which capped typical household bills at &#163;2,500 per year, supporting incomes through the worst of the price shock.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain how a fall in consumer spending affects aggregate demand through the multiplier process.',
          hint:        '4-mark response &#8212; explain the mechanism of the reverse multiplier (negative multiplier) and use the data to support your answer.',
          modelAnswer: 'When consumer spending falls &#8212; as the extract shows happened in 2022 when growth slowed from 5.8% to just 0.4% &#8212; the effect on aggregate demand is amplified through the multiplier process. The initial fall in consumption directly reduces AD, since C is the largest component at around 61% of UK GDP. But the impact does not stop there: retailers and service businesses receive less revenue, so they reduce staffing and cut orders from suppliers. Workers facing reduced hours or job losses in turn cut their own spending, triggering further rounds of reduced income and expenditure. This &#8220;reverse multiplier&#8221; means the final fall in national income is larger than the initial drop in consumer spending. The size of the multiplied effect depends on leakages &#8212; the more income households save, pay in tax, or spend on imports, the smaller each successive round and the lower the multiplier. The government&#39;s Energy Price Guarantee partially counteracted this process by maintaining households&#39; disposable income, limiting the initial fall in C and thereby reducing the scale of the multiplied contraction in AD.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following would most increase the size of the multiplier?',
          options: [
            { id: 'opt-a', text: 'A higher marginal propensity to save'                                      },
            { id: 'opt-b', text: 'A higher marginal propensity to import'                                    },
            { id: 'opt-c', text: 'A lower marginal rate of income tax'                                       },
            { id: 'opt-d', text: 'A higher marginal propensity to withdraw income from the circular flow'    }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. A lower marginal rate of income tax reduces the tax leakage from each round of spending, meaning more income circulates within the domestic economy. This increases the multiplier, so any given injection of spending generates a larger final rise in national income.',
          feedbackWrong:   'The correct answer is C. The multiplier equals 1 &#247; (MPS + MPT + MPM). Reducing the marginal rate of income tax lowers MPT, which reduces total leakages and increases the multiplier. Options A, B, and D all increase leakages, which reduce the multiplier.'
        }
      ]
    },

    /* ── Q3 – Investment and interest rates ─────────────────── */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'Investment and interest rates',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '%',      label: 'Bank of England Bank Rate (August 2023)',          value: '5.25%'  },
          { color: 'blue',  icon: '%',      label: 'Bank Rate in December 2021',                       value: '0.25%'  },
          { color: 'amber', icon: '%',      label: 'UK business investment growth (2022)',              value: '&#8722;0.3%' },
          { color: 'green', icon: '&#163;', label: 'UK gross fixed capital formation (2022)',           value: '&#163;403bn' }
        ]
      },

      parts: [
        {
          id:          'q3a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain how rising interest rates affect the level of business investment and aggregate demand.',
          hint:        '4-mark response &#8212; explain the mechanism linking interest rates to investment decisions and then to AD.',
          modelAnswer: 'Rising interest rates increase the cost of borrowing for firms. As the Bank Rate rose from 0.25% in December 2021 to 5.25% by August 2023, businesses faced significantly higher repayment costs on loans taken out to finance new machinery, premises, and technology. For many projects, the higher interest cost means expected returns no longer exceed the cost of capital, so firms defer or cancel investment plans. This helps explain why UK business investment growth turned negative at &#8722;0.3% in 2022, despite relatively strong overall economic activity earlier in the year. The fall in investment directly reduces the I component of aggregate demand (AD = C + I + G + X &#8722; M), shifting the AD curve to the left. Through the multiplier, the final reduction in national income will be larger than the initial fall in I: workers employed in capital goods industries face reduced demand, their incomes fall, they cut consumption, and the negative multiplier effect ripples through the economy. Higher interest rates also raise the cost of consumer credit and mortgage repayments, compounding the downward pressure on AD by simultaneously squeezing C.'
        },
        {
          id:     'q3b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following is most likely to increase business investment despite rising interest rates?',
          options: [
            { id: 'opt-a', text: 'A fall in consumer confidence'                                               },
            { id: 'opt-b', text: 'A significant improvement in business confidence and expected future profits' },
            { id: 'opt-c', text: 'An increase in the marginal propensity to save'                              },
            { id: 'opt-d', text: 'A tightening of credit conditions by commercial banks'                       }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Investment depends not only on the cost of borrowing but also on business expectations of future profitability (Keynes called this &#8220;animal spirits&#8221;). If firms expect strong future demand and profits, they may invest even at higher interest rates because expected returns are sufficient to justify the cost of capital.',
          feedbackWrong:   'The correct answer is B. Investment is driven by both the cost of funds (interest rates) and expected future returns. If businesses are highly confident about future profitability &#8212; because they expect strong demand, new markets, or technological opportunity &#8212; they will invest even when borrowing costs are elevated. Options A, C, and D all reduce investment or spending further.'
        }
      ]
    },

    /* ── Q4 – Consumer confidence ────────────────────────────── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'Consumer confidence and household spending',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '%', label: 'GfK Consumer Confidence Index (January 2023)',    value: '&#8722;45'  },
          { color: 'blue',  icon: '%', label: 'GfK Consumer Confidence Index (January 2020)',    value: '&#8722;9'   },
          { color: 'green', icon: '%', label: 'UK household saving ratio (Q1 2021)',              value: '19.9%'      },
          { color: 'amber', icon: '%', label: 'UK household saving ratio (Q4 2022)',              value: '8.1%'       }
        ]
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain how changes in consumer confidence affect aggregate demand in the UK economy.',
          hint:        '4-mark response &#8212; link consumer confidence to the saving ratio and then to consumption and AD. Use the data to support your argument.',
          modelAnswer: 'Consumer confidence measures households&#39; expectations about their own financial situation and the broader economic outlook. When confidence falls sharply &#8212; as the GfK index did from &#8722;9 in January 2020 to &#8722;45 in January 2023 &#8212; households become more cautious and save a larger proportion of their income as a precautionary buffer against anticipated hardship. This is reflected in the data: the household saving ratio surged to 19.9% in Q1 2021 (reflecting COVID-19 uncertainty and restricted spending opportunities) before falling to 8.1% by Q4 2022 as households drew on savings amid the cost-of-living crisis. Lower confidence therefore tends to reduce the marginal propensity to consume &#8212; households defer big-ticket purchases such as new cars, home improvements, and holidays. Since consumption accounts for around 61% of UK GDP, even a modest reduction in the propensity to consume produces a significant leftward shift in the AD curve. Through the negative multiplier, the initial fall in C cascades through the economy: retailers cut orders, producers reduce output and employment, and further rounds of income loss reduce spending still further, amplifying the original demand contraction.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following is most likely to cause consumer confidence to rise?',
          options: [
            { id: 'opt-a', text: 'A significant rise in the rate of inflation'                          },
            { id: 'opt-b', text: 'A rapid rise in unemployment'                                         },
            { id: 'opt-c', text: 'A period of sustained real wage growth and falling unemployment'      },
            { id: 'opt-d', text: 'A sharp increase in variable mortgage interest rates'                 }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. When real wages are rising and unemployment is low and falling, households feel more financially secure and optimistic about future income prospects. This boosts consumer confidence, increases the MPC, and raises consumer spending as a component of AD.',
          feedbackWrong:   'The correct answer is C. Consumer confidence is strongly linked to employment security and real income growth. Rising real wages mean households have more to spend and feel financially secure, while low unemployment reduces fear of job loss. Options A, B, and D all reduce real purchasing power or income security, undermining confidence.'
        }
      ]
    },

    /* ── Q5 – AD shifts and the price level ─────────────────── */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'Shifts in aggregate demand and the price level',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from the Bank of England Monetary Policy Report, November 2022',
        text:   'The UK economy entered 2022 with aggregate demand growing strongly following the pandemic recovery. Consumer spending rebounded as restrictions were lifted, and government support schemes such as the furlough had preserved household incomes. However, by mid-2022 the picture had changed significantly. Inflation reached 11.1% in October 2022 &#8212; a 41-year high &#8212; driven primarily by energy and food prices. The Bank of England responded by raising Bank Rate from 0.1% in December 2021 to 3.0% by November 2022. The MPC judged that tighter monetary policy was needed to bring aggregate demand back in line with supply and prevent inflation becoming embedded.'
      },

      parts: [
        {
          id:     'q5a',
          letter: 'a',
          marks:  1,
          type:   'mcq',
          stem:   'In the AD&#47;AS model, a rise in the general price level (moving along a fixed AD curve) causes:',
          options: [
            { id: 'opt-a', text: 'A rightward shift in the AD curve'                                                              },
            { id: 'opt-b', text: 'A fall in the quantity of real output demanded, shown as a movement along the AD curve'         },
            { id: 'opt-c', text: 'An upward shift in the SRAS curve only'                                                        },
            { id: 'opt-d', text: 'An increase in real GDP and a rightward shift in both AD and SRAS'                              }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. A rise in the price level does not shift the AD curve &#8212; it causes a movement along the existing curve. At a higher price level, the real value of money holdings falls (the wealth effect), exports become less competitive (the international trade effect), and higher interest rates are needed to maintain the money supply (the interest rate effect). All three reduce the quantity of real output demanded.',
          feedbackWrong:   'The correct answer is B. Changes in the price level cause a movement along the AD curve, not a shift. The AD curve slopes downward because a higher price level reduces real wealth, makes exports less competitive, and tends to raise interest rates &#8212; all of which reduce the quantity of real goods and services demanded in the economy.'
        },
        {
          id:          'q5b',
          letter:      'b',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain two factors that caused aggregate demand to shift rightward in the UK in 2021&#8211;22, and explain how the Bank of England sought to address this.',
          hint:        '4-mark response &#8212; identify two AD-shifting factors from the extract, then explain the monetary policy transmission mechanism.',
          modelAnswer: 'Two factors caused the rightward shift in UK aggregate demand in 2021&#8211;22. First, the release of pent-up consumer spending after pandemic restrictions were lifted boosted consumption significantly. Households that had accumulated excess savings during lockdown &#8212; when opportunities to spend were restricted &#8212; increased their spending rapidly as confidence returned and the economy reopened. This added directly to C, shifting AD to the right. Second, the government&#39;s furlough scheme had preserved household incomes throughout the pandemic, preventing the mass unemployment that would normally have reduced consumer spending in a sharp downturn. With incomes intact, the recovery in consumer spending was faster and stronger than in previous recessions. The resulting excess of aggregate demand over aggregate supply &#8212; in a context where global supply chains were still disrupted &#8212; contributed to inflation reaching 11.1% by October 2022. To address this, the Bank of England raised Bank Rate from 0.1% to 3.0%, increasing borrowing costs for households and firms. Higher mortgage rates and consumer credit costs reduce disposable income and dampen consumption, while the higher cost of capital discourages business investment. This shifts AD back to the left, reducing inflationary pressure by bringing demand closer to the economy&#39;s supply capacity.'
        }
      ]
    }

  ]
};

/* ---- land-section-b.js ---- */
/* ============================================================
   ECONOS – Land It · Section B data for Aggregate Demand
   Topic: Aggregate Demand (2.7)
   ============================================================ */

window.ECONOS_LAND_SECTION_B = {
  topic:        'Aggregate Demand',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.routes.land('intro'),

  /* ── Context pack: 3 extracts, collapsible ─────────────────── */
  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'The UK COVID-19 demand shock and recovery, 2020&#8211;22',
        tags:        ['COVID-19', 'GDP &#8722;9.3%', 'furlough scheme', 'demand recovery'],
        defaultOpen: true,
        paragraphs: [
          'The COVID-19 pandemic caused the largest single-year fall in UK GDP since modern records began, with output contracting by 9.3% in 2020. The collapse in aggregate demand was broad-based: consumer spending fell as households were unable or unwilling to visit shops, restaurants, and entertainment venues; business investment was frozen amid extreme uncertainty; and exports were hit by the simultaneous collapse in global demand. The shutdown of much of the economy represented a near-total destruction of AD in affected sectors.',
          'The government responded with unprecedented fiscal intervention. The Coronavirus Job Retention Scheme &#8212; commonly known as the furlough &#8212; paid 80% of the wages of around 11 million workers at a total cost of over &#163;70 billion, preventing the mass unemployment that would have caused lasting damage to consumer spending. Additional support for the self-employed, business grants, and emergency loans added further fiscal stimulus. The Bank of England simultaneously cut Bank Rate to a historic low of 0.1% and expanded quantitative easing by &#163;450 billion.',
          'The recovery was faster than many economists expected. UK GDP grew by 7.5% in 2021 as vaccines were rolled out and restrictions lifted. Pent-up consumer demand &#8212; accumulated during lockdowns when spending opportunities were limited &#8212; combined with intact household balance sheets from the furlough to produce a sharp rebound in consumption. However, supply chains remained disrupted, and the rapid recovery in demand began to push up prices, contributing to the inflation surge that followed in 2021&#8211;22.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'The investment function and business confidence',
        tags:        ['business investment', 'animal spirits', 'interest rates', 'uncertainty'],
        defaultOpen: false,
        paragraphs: [
          'Business investment &#8212; or gross fixed capital formation &#8212; is the most volatile component of aggregate demand. In 2020, UK business investment fell by 11.6%, far more than GDP as a whole. Firms facing extreme uncertainty about future demand deferred or cancelled capital expenditure plans, even when borrowing costs were at record lows. This illustrates a key insight from Keynes: investment is driven not only by interest rates but by what he called &#8220;animal spirits&#8221; &#8212; the subjective expectations of entrepreneurs about future profitability.',
          'By 2022, a new set of headwinds had emerged. As the Bank of England raised Bank Rate from 0.1% to 5.25% between 2021 and 2023, the cost of financing new investment rose substantially. UK business investment growth turned negative &#8212; falling by 0.3% in 2022 &#8212; as firms faced both higher borrowing costs and renewed uncertainty from the energy price shock, supply chain disruptions, and the aftermath of Brexit. Many businesses reported that post-Brexit trade friction had reduced their appetite to invest in UK-based capacity.',
          'The relationship between interest rates and investment is captured in the marginal efficiency of capital (MEC) schedule: firms invest as long as the expected rate of return on a project exceeds the cost of borrowing. A rise in interest rates shifts the threshold upward, eliminating marginal projects. But the schedule itself can shift: a collapse in business confidence reduces expected returns on all projects, shifting the MEC curve to the left and depressing investment even if interest rates remain unchanged. Stabilising expectations &#8212; through credible policy, reduced uncertainty, or structural reform &#8212; can shift the MEC curve back to the right and stimulate investment independently of interest rate changes.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'The crowding-out debate: government spending and private investment',
        tags:        ['crowding out', 'fiscal stimulus', 'bond markets', 'loanable funds'],
        defaultOpen: false,
        paragraphs: [
          'A central concern in macroeconomic policy is whether increased government spending &#8220;crowds out&#8221; private investment. The traditional argument runs as follows: when the government borrows heavily to finance spending, it competes with private firms for available loanable funds, driving up interest rates. Higher rates increase the cost of capital for businesses, discouraging investment projects that would otherwise have been profitable. The net effect on aggregate demand may therefore be smaller than the direct injection of government expenditure suggests.',
          'In the UK context, proponents of the crowding-out argument pointed to the surge in government borrowing during COVID-19 &#8212; deficit spending reached over &#163;300 billion in 2020&#8211;21 &#8212; as a potential threat to private investment. However, because the Bank of England simultaneously expanded its quantitative easing programme by purchasing gilts on the secondary market, gilt yields remained extremely low despite record government borrowing. This &#8220;financial crowding out&#8221; was largely avoided, as the central bank effectively monetised a significant portion of the debt.',
          'Critics of the crowding-out hypothesis argue that it applies primarily when the economy is at full capacity. During a deep recession, with significant spare capacity, government borrowing is unlikely to push up interest rates because private sector demand for credit is itself depressed. In this context, government spending does not displace private investment &#8212; it fills a gap that the private sector is unwilling or unable to fill. The relevant question is whether the economy is in a &#8220;Keynesian&#8221; regime &#8212; with an output gap and idle resources &#8212; or at potential output where crowding out is a genuine constraint.'
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
        stem:   'Explain two factors that could cause aggregate demand to increase in the UK economy.',
        tips: [
          'Identify two distinct factors from different components of AD (e.g. one from C, one from G or I).',
          'For each factor, explain the economic mechanism by which it increases AD &#8212; do not simply assert the outcome.',
          'Where relevant, use data or context from the extracts (e.g. the furlough scheme or business confidence).'
        ],
        modelAnswer: 'One factor that increases aggregate demand is a rise in consumer confidence. When households feel secure about their employment prospects and real income, they reduce precautionary saving and increase spending. Extract A illustrates this: following the pandemic, intact household balance sheets from the furlough scheme combined with pent-up demand from lockdowns generated a sharp rise in consumer spending, contributing to UK GDP growth of 7.5% in 2021. The furlough ensured that millions of workers retained 80% of their wages, so their balance sheets were not destroyed in the way they would have been in a conventional recession; once restrictions lifted, this translated into a rapid and powerful recovery in consumption &#8212; the largest component of AD at around 61% of GDP. A second factor is an increase in government spending. When the government raises its expenditure on goods and services &#8212; such as infrastructure, healthcare, or defence &#8212; this directly increases G, a component of AD. The effect is amplified through the multiplier: the initial injection of government spending creates incomes for workers and firms, who spend a proportion, generating further rounds of demand across the economy. The &#163;70 billion furlough scheme in Extract A demonstrates how large-scale government expenditure can sustain aggregate demand even when private sector activity collapses.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extract B, examine the likely effects of a significant fall in business investment on the UK economy.',
        tips: [
          'Define business investment and explain its role in the AD formula.',
          'Apply the AD&#47;AS framework: a fall in I shifts AD to the left &#8212; explain the short-run effects on real GDP, unemployment, and the price level.',
          'Use the multiplier from Extract B to develop the amplified effect on national income.',
          'Refer to Extract B&#39;s data (&#8722;11.6% in 2020; &#8722;0.3% in 2022) and the concept of &#8220;animal spirits&#8221;.',
          'Consider both short-run effects and longer-run supply-side consequences of lower capital accumulation.'
        ],
        modelAnswer: 'Business investment &#8212; or gross fixed capital formation &#8212; represents firms&#39; spending on new capital goods: machinery, equipment, buildings, and technology. It is a component of aggregate demand (AD = C + I + G + X &#8722; M) and, as Extract B notes, the most volatile component. A significant fall in business investment reduces I directly, shifting the AD curve to the left in the AD&#47;AS model. At the existing price level, real GDP falls and unemployment rises as firms in capital goods industries face reduced demand, cut production, and shed workers. The negative multiplier amplifies this initial effect: workers who lose income cut consumption, reducing demand for retail and service businesses, which in turn reduce staffing and orders, generating further rounds of income loss. Extract B illustrates the scale: in 2020, business investment fell by 11.6%, far more than the 9.3% fall in GDP itself, demonstrating its outsized contribution to the demand collapse. The 2022 experience &#8212; when investment fell 0.3% &#8212; shows that even a modest decline in a context of already-tight household budgets can weaken the overall economy. Extract B also highlights the role of &#8220;animal spirits&#8221;: in 2020, investment collapsed even though interest rates were at record lows, because uncertainty about future demand made any investment appear too risky. This shows that the traditional monetary policy tool &#8212; cutting interest rates to stimulate investment &#8212; may be ineffective when business confidence has fundamentally collapsed. Beyond the short-run AD effect, a sustained fall in business investment has serious long-run supply-side consequences. Lower capital accumulation means the capital stock grows more slowly, reducing the productive capacity of the economy over time. This shifts the long-run aggregate supply (LRAS) curve to the left, reducing potential output and the economy&#39;s long-run growth rate. UK productivity growth &#8212; already weak since the 2008 financial crisis &#8212; risks being further damaged by sustained underinvestment, creating a lasting drag on living standards. On balance, a fall in business investment is doubly damaging: it reduces aggregate demand in the short run through the multiplier, and constrains productive capacity in the long run through reduced capital accumulation.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Using the extracts and your own knowledge, discuss the extent to which government spending can effectively substitute for a shortfall in private investment.',
        tips: [
          'Explain the Keynesian case for government spending as a substitute for private investment &#8212; the &#8220;spender of last resort&#8221; argument.',
          'Use Extract A (furlough, fiscal stimulus) to show where government spending successfully filled an AD gap.',
          'Apply the multiplier: government spending with a high multiplier can generate more than &#163;1 of income per &#163;1 spent.',
          'Evaluate the crowding-out argument from Extract C &#8212; under what conditions does this apply?',
          'Consider the limits: short-run vs long-run substitutability; nature of the investment (public vs private); fiscal space constraints.',
          'Reach a clear, supported judgement &#8212; under what conditions is government spending an effective substitute?'
        ],
        modelAnswer: 'The question of whether government spending can substitute for a shortfall in private investment is one of the most contested in macroeconomics. The Keynesian view holds that it can &#8212; and that it must &#8212; when private sector demand collapses and the economy faces a large negative output gap. The alternative view, associated with classical and monetarist economists, is that government spending crowds out private investment and is therefore not an effective or efficient substitute. The evidence from the COVID-19 period, analysed through the lens of all three extracts, suggests that the truth is strongly context-dependent. The Keynesian case is compelling in a deep recession. Extract A demonstrates that the UK government&#39;s &#163;70 billion furlough scheme and broader fiscal stimulus preserved aggregate demand when private sector activity collapsed. By paying 80% of wages for around 11 million workers, the government effectively replaced the consumption spending that would otherwise have evaporated with unemployment. The result was a faster-than-expected recovery: GDP grew 7.5% in 2021, and household balance sheets entered the recovery phase largely intact. Extract B confirms that in 2020, even with Bank Rate at 0.1%, business investment fell by 11.6%, precisely because uncertainty &#8212; not interest rates &#8212; was the binding constraint. In this environment, government spending did not compete with private borrowing for loanable funds; it filled a genuine vacuum. The crowding-out concern raised in Extract C is most relevant at or near full capacity. In 2020&#8211;21, the economy had substantial spare capacity &#8212; a large negative output gap &#8212; so government borrowing did not drive up interest rates. Moreover, the Bank of England&#39;s quantitative easing programme, which expanded by &#163;450 billion, kept gilt yields low despite record public borrowing. Financial crowding out was therefore largely avoided, and real crowding out &#8212; where government spending directly replaces private activity &#8212; was minimal in a period of demand collapse. However, government spending is a less effective substitute for private investment in several important respects. First, it differs in character: private investment in capital goods expands productive capacity and drives technological progress, while much government spending supports consumption or funds public services rather than building the capital stock. Furlough spending, for example, preserved jobs and incomes but did not invest in machinery, infrastructure, or R&amp;D that would boost long-run productivity. Where government does invest in infrastructure &#8212; as with the &#163;100 billion National Infrastructure Strategy &#8212; the supply-side effects can complement private investment, but implementation lags mean benefits arrive slowly. Second, the fiscal space available to governments is finite. Extract C notes that UK public borrowing reached over &#163;300 billion in 2020&#8211;21. Sustaining this level of deficit over the medium term would raise debt-to-GDP ratios to potentially destabilising levels, ultimately constraining the government&#39;s capacity to borrow in future downturns. Third, the nature of the private investment shortfall matters. If firms are not investing because of structural factors &#8212; such as post-Brexit trade uncertainty, regulatory burdens, or skills gaps &#8212; no amount of government demand stimulus will address the root cause. Supply-side reforms to improve business conditions may be more effective than fiscal expansion in this scenario. In conclusion, government spending can be a highly effective short-run substitute for a private investment shortfall &#8212; as the COVID-19 response convincingly demonstrated &#8212; when the economy is operating below capacity, monetary policy is constrained, and fiscal space is available. Its effectiveness is greatest when it directly supports demand rather than merely substituting for it, and when it is accompanied by credible long-run fiscal plans that maintain market confidence. Over the long run, however, public spending cannot fully replicate the productivity-enhancing role of private business investment; structural policies to rebuild private confidence and address supply-side barriers are also needed.'
      }
    ]
  },

  /* ── Right-rail "What strong answers do" ──────────────────────── */
  strongAnswers: [
    'Quote extract data directly &#8212; figures, dates, and policy names',
    'Apply the AD&#47;AS framework accurately and explain the mechanism step by step',
    'Use the multiplier concept to develop amplified effects on national income',
    'Reach a balanced, conditional judgement backed by evidence'
  ]
};

/* ---- land-section-c.js ---- */
/* ============================================================
   ECONOS – Land It · Section C data for Aggregate Demand
   Topic: Aggregate Demand (2.7)
   ============================================================ */

window.ECONOS_LAND_SECTION_C = {
  topic:        'Aggregate Demand',
  sectionLabel: 'Section C &#8212; Essay',
  backUrl:      TopicLoader.routes.land('intro'),

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
      'Evaluate the relative importance of each component &#8212; note that C is ~61% of UK GDP; weigh evidence.',
      'Reach a clear, conditional judgement: which factor or set of factors is most important, and under what conditions does this change?'
    ],

    modelAnswer:
      '<p>Aggregate demand (AD) is the total planned expenditure on domestically produced goods and services at a given price level in a given time period. It is defined as AD = C + I + G + (X &#8722; M), where C is household consumption, I is business investment, G is government spending, and (X &#8722; M) is net exports. Each component has distinct determinants, and the relative importance of each shifts depending on the state of the economic cycle, monetary conditions, and the external environment.</p>'
    + '<p>Consumption is by far the largest component of UK aggregate demand, accounting for approximately 61% of GDP. Its primary determinant is real disposable income &#8212; the income households have after taxes and adjusted for inflation. When real wages rise, households can afford to consume more, shifting the AD curve to the right. However, consumption also depends heavily on consumer confidence: when households expect job losses or income falls, they engage in precautionary saving, reducing the marginal propensity to consume even if current income has not yet fallen. The GfK Consumer Confidence Index plunged to &#8722;45 in January 2023 &#8212; its lowest on record &#8212; as inflation at 11.1% eroded real incomes and uncertainty about energy bills and mortgage costs weighed on spending intentions. Interest rates are a further determinant: the Bank of England&#39;s increases from 0.1% to 5.25% between 2021 and 2023 directly raised mortgage repayment costs for around 1.4 million variable-rate borrowers, reducing their disposable income and constraining consumption. Finally, wealth effects matter: rising house prices and equity markets increase households&#39; perceived wealth, supporting consumption; falling asset prices have the opposite effect.</p>'
    + '<p>Business investment &#8212; around 18% of UK GDP &#8212; is the most volatile component of AD. Its traditional determinant is the rate of interest: firms invest when the expected rate of return on a project (the marginal efficiency of capital) exceeds the cost of borrowing. A fall in interest rates therefore increases the number of viable projects and stimulates investment, shifting AD to the right. However, Keynes emphasised that investment is equally determined by &#8220;animal spirits&#8221; &#8212; entrepreneurs&#39; subjective expectations of future profitability. In 2020, despite Bank Rate at 0.1%, UK business investment collapsed by 11.6% because extreme uncertainty about future demand made any investment appear too risky. This demonstrates that monetary policy may be a blunt instrument for stimulating investment when confidence has broken down. Post-Brexit trade uncertainty and supply chain disruption are additional factors that have weighed on business investment decisions in the UK since 2016, contributing to a persistent underperformance relative to other G7 economies.</p>'
    + '<p>Government spending and taxation determine the G component of AD and the disposable income available for consumption. Expansionary fiscal policy &#8212; higher G or lower taxes &#8212; shifts AD to the right; contractionary policy does the reverse. The scale of fiscal impact depends critically on the fiscal multiplier: during recessions, with spare capacity and low interest rates, the multiplier can reach 1.3&#8211;1.7, meaning each pound of government spending generates more than a pound of national income. The 2020&#8211;21 fiscal response &#8212; including over &#163;70 billion on furlough &#8212; demonstrates the potential of government spending to sustain AD when private sector activity collapses. However, the government&#39;s capacity to use fiscal policy is constrained by the size of the national debt and market expectations of fiscal sustainability. With UK debt approaching 100% of GDP by 2023, fiscal headroom was limited, and the September 2022 Mini-Budget illustrated the risks of unfunded fiscal expansion: gilt yields spiked and sterling fell sharply.</p>'
    + '<p>Net exports &#8212; the difference between export revenues and import expenditure &#8212; add to or subtract from UK AD depending on the trade balance. The UK has run a persistent current account deficit, meaning imports typically exceed exports, so (X &#8722; M) is negative. The key determinants of exports are the competitiveness of UK goods and services, which depends partly on the exchange rate: a depreciation of sterling makes UK exports cheaper in foreign markets, boosting demand, while making imports more expensive and potentially reducing M. Relative inflation rates also matter &#8212; if UK inflation persistently exceeds that of trading partners, UK exports become less price-competitive over time. Global demand conditions are a further factor: when major trading partners (particularly the EU and US) are growing strongly, demand for UK exports rises; a global slowdown reduces it.</p>'
    + '<p>In conclusion, the level of aggregate demand in the UK economy is shaped by a complex interplay of factors across all four components. In normal times, consumer confidence and real incomes are the dominant determinants, given that consumption accounts for around 61% of GDP. However, the relative importance of different factors changes significantly depending on the economic context. During crises &#8212; such as the COVID-19 pandemic or the 2022 cost-of-living shock &#8212; government fiscal policy can become the most powerful determinant, filling gaps left by collapsed private spending. In periods of monetary tightening, interest rates assume greater importance as drivers of both consumption and investment. No single factor &#8220;determines&#8221; aggregate demand in isolation; rather, its level reflects the cumulative interaction of income, confidence, credit conditions, fiscal stance, and external demand. A holistic approach, combining monetary, fiscal, and supply-side policies, is therefore needed to maintain stable and sustainable aggregate demand over the long run.</p>'
  },

  strongAnswers: [
    'Define AD clearly and set out the formula at the start',
    'Structure the answer around the four components, giving balanced treatment',
    'Use specific UK data (GfK index, Bank Rate changes, GDP figures) to support arguments',
    'Evaluate the relative importance of each factor, not just describe it',
    'Conclude with a clear, conditional judgement on which factors matter most'
  ]
};

