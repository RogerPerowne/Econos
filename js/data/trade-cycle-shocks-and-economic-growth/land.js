/* ============================================================
   ECONOS – Land It · consolidated section data
   Concatenated from per-section files at v0.4.0. Quiz pools
   from the former quiz-*.js shells are folded in here too —
   the questions live on as Land It content.
   ============================================================ */

/* ---- land-complete.js ---- */
/* ============================================================
   ECONOS – Land It complete page data
   Topic: Economic Growth and the Business Cycle (2.10)
   ============================================================ */

window.ECONOS_LAND_COMPLETE = {
  topic:   'Economic Growth and the Business Cycle',
  nextUrl: '/',

  sections: {
    A: { label: 'Section A', sublabel: 'Short questions',    color: '#ec2d68' },
    B: { label: 'Section B', sublabel: 'Extended response',  color: '#f59e0b' },
    C: { label: 'Section C', sublabel: 'Essay',              color: '#2563eb' }
  },

  nextCard: {
    icon:  '&#x1F680;',
    title: 'What to do next',
    text:  'Compare your written answers with the model responses. Check that you described all four phases of the business cycle clearly in Section B part (a) and applied GDP data from the extracts accurately. Review whether your analysis of the 2020 recession addressed both the demand-side and supply-side causes &#8211; the dual nature of the COVID-19 shock is frequently missed. In Section C, consider whether your essay distinguished between physical capital investment, R&amp;D, and human capital investment, and whether your conclusion was genuinely conditional rather than simply restating the question.'
  }
};

/* ---- land-intro.js ---- */
/* ============================================================
   ECONOS – Land It intro page data
   Topic: Economic Growth and the Business Cycle (2.10)
   ============================================================ */

window.ECONOS_LAND_INTRO = {
  topic:        'Economic Growth and the Business Cycle',
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
    'Identifying and explaining the four phases of the business cycle using UK GDP data',
    'Applying the concept of the output gap to analyse inflationary and deflationary pressures',
    'Evaluating causes and consequences of recession using the 2008 and 2020 UK examples',
    'Constructing a balanced essay on the role of investment in determining long-run growth'
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
   ECONOS – Land It · Section A data for Economic Growth and the Business Cycle
   Topic: Economic Growth and the Business Cycle (2.10)
   ============================================================ */

window.ECONOS_LAND_SECTION_A = {
  topic:        'Economic Growth and the Business Cycle',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.routes.land('intro'),

  questions: [

    /* ── Q1 – Business cycle phases ─────────────────────────── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'Phases of the business cycle',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%', label: 'UK real GDP growth (2021)',         value: '+7.5%'       },
          { color: 'rose',  icon: '%', label: 'UK real GDP growth (2020)',          value: '&#8722;9.3%' },
          { color: 'green', icon: '%', label: 'UK real GDP growth (2019)',          value: '+1.7%'       },
          { color: 'amber', icon: '%', label: 'UK real GDP growth (2022)',          value: '+4.1%'       }
        ]
      },

      parts: [
        {
          id:     'q1a',
          letter: 'a',
          marks:  1,
          type:   'mcq',
          stem:   'In the context of the business cycle, which phase is characterised by rising real GDP, falling unemployment, and growing inflationary pressure?',
          options: [
            { id: 'opt-a', text: 'Recession'  },
            { id: 'opt-b', text: 'Trough'     },
            { id: 'opt-c', text: 'Recovery'   },
            { id: 'opt-d', text: 'Boom'       }
          ],
          correct:         'opt-d',
          feedbackCorrect: 'Correct. A boom is the peak phase of the business cycle, characterised by real GDP growing above its long-run trend rate, unemployment falling below its natural rate, and inflationary pressure building as aggregate demand exceeds productive capacity. A positive output gap opens up.',
          feedbackWrong:   'The correct answer is D. A boom is defined by real GDP growing strongly &#8212; often above trend &#8212; with unemployment low and falling, and aggregate demand pressing against the limits of productive capacity. This excess demand generates inflationary pressure, opening a positive output gap. The recovery phase also involves rising GDP but starts from a trough and has not yet reached full capacity.'
        },
        {
          id:          'q1b',
          letter:      'b',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, identify the phase of the business cycle experienced in 2020 and explain two characteristics of this phase.',
          hint:        '4-mark response &#8212; name the phase and explain two distinct economic characteristics with reference to the GDP data.',
          modelAnswer: 'The data shows UK real GDP fell by 9.3% in 2020 &#8212; the largest single-year contraction in modern records. This indicates the economy was experiencing a severe recession, conventionally defined as two or more consecutive quarters of negative GDP growth. Two key characteristics follow. First, rising unemployment: as output collapses, firms face falling demand for their products and cut production, leading to redundancies across most sectors of the economy. Cyclical unemployment rises as workers are laid off and job vacancies dry up. In 2020, UK unemployment rose from around 4% to a peak of 5.1% despite the furlough scheme &#8212; without which the rise would have been far steeper. Second, a large negative output gap: when real GDP falls well below potential GDP, the economy is producing significantly less than it is capable of at full employment. This spare capacity means inflation tends to fall (or deflationary pressure builds), as firms cut prices to attract scarce customers and workers accept lower wage offers due to reduced bargaining power. The OBR estimated the UK output gap widened sharply in 2020, consistent with the deflationary conditions that accompanied the COVID-19 demand and supply collapse.'
        }
      ]
    },

    /* ── Q2 – GDP growth data ────────────────────────────────── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'Measuring and interpreting GDP growth',
      marks:    5,

      context: {
        type:       'data-table',
        tableTitle: 'UK real GDP growth rate, selected years',
        headers:    ['Year', 'Real GDP growth (%)', 'Context'],
        rows: [
          { label: '2008', values: ['&#8722;0.3%', 'Financial crisis begins; banking system stressed']     },
          { label: '2009', values: ['&#8722;4.2%', 'Deep recession; unemployment reaches 8%']             },
          { label: '2010', values: ['+1.7%',       'Recovery begins; fiscal consolidation announced']     },
          { label: '2020', values: ['&#8722;9.3%', 'COVID-19 pandemic; largest peacetime contraction']    },
          { label: '2021', values: ['+7.5%',       'Vaccine rollout; restrictions lifted; bounce-back']   }
        ]
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, compare the depth and pattern of the 2008&#8211;09 recession with the 2020 COVID-19 recession.',
          hint:        '4-mark response &#8212; use the GDP figures to compare depth, speed of onset, and recovery trajectory for both recessions.',
          modelAnswer: 'The two recessions differ significantly in depth, cause, and recovery pattern. The 2008&#8211;09 financial crisis recession saw GDP fall by 0.3% in 2008 and a further 4.2% in 2009 &#8212; a cumulative loss of output of around 4.5% over two years, reflecting the gradual transmission of the banking crisis through credit markets, business investment, and consumer confidence. The 2020 COVID-19 recession was both faster and far deeper: GDP contracted by 9.3% in a single year, more than double the two-year loss in 2008&#8211;09. However, the recovery pattern was also markedly different. After 2009, recovery was slow: the UK did not return to its pre-crisis GDP level until 2013, and the economy never fully regained its pre-crisis growth trajectory. In contrast, following the COVID-19 contraction, GDP bounced back by 7.5% in 2021 as vaccines were rolled out and restrictions lifted, reflecting the release of pent-up demand and the preservation of household incomes through the furlough scheme. The 2009 recession left deeper structural scars &#8212; particularly to the banking sector and business investment &#8212; while the 2020 recession, despite its severity, involved less permanent damage to the productive capacity of the economy.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following best defines real GDP growth?',
          options: [
            { id: 'opt-a', text: 'The percentage increase in the money value of all goods and services produced, unadjusted for inflation'  },
            { id: 'opt-b', text: 'The percentage increase in the volume of goods and services produced, after adjusting for inflation'       },
            { id: 'opt-c', text: 'The percentage increase in the government&#39;s tax revenues in a given year'                              },
            { id: 'opt-d', text: 'The growth in household consumption as a proportion of total national income'                             }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Real GDP growth measures the increase in the actual volume of goods and services produced, stripping out the effect of price changes. It is a better measure of economic welfare than nominal GDP growth, which can rise simply because prices have increased without any more goods being produced.',
          feedbackWrong:   'The correct answer is B. Real GDP adjusts nominal GDP for inflation using a price deflator, so it measures the actual change in the quantity of goods and services produced. Nominal GDP growth (option A) would overstate economic progress when prices are rising. Real GDP growth is the standard measure used to track the business cycle.'
        }
      ]
    },

    /* ── Q3 – Output gap ─────────────────────────────────────── */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'The output gap and macroeconomic implications',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '%', label: 'UK CPI inflation (peak, October 2022)',              value: '11.1%'        },
          { color: 'blue',  icon: '%', label: 'Bank of England Bank Rate (August 2023)',            value: '5.25%'        },
          { color: 'green', icon: '%', label: 'OBR estimate: UK output gap (2021)',                 value: '+0.3%'        },
          { color: 'amber', icon: '%', label: 'OBR estimate: UK output gap (2020)',                 value: '&#8722;6.8%'  }
        ]
      },

      parts: [
        {
          id:          'q3a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain what is meant by the output gap and analyse the macroeconomic consequences of a positive output gap.',
          hint:        '4-mark response &#8212; define the output gap concept clearly, then explain the consequences of a positive gap using the AD&#47;AS framework and the data provided.',
          modelAnswer: 'The output gap measures the difference between an economy&#39;s actual output (real GDP) and its potential output (the level it could produce at full employment with all resources efficiently used). A negative output gap &#8212; such as the OBR&#39;s estimate of &#8722;6.8% in 2020 &#8212; means the economy is producing well below potential, with significant spare capacity and upward pressure on unemployment. A positive output gap means actual output exceeds potential, indicating that the economy is &#8220;overheating&#8221;. The data shows that the UK moved from a severely negative gap in 2020 to a small positive gap (+0.3%) in 2021 as the recovery proceeded. In the AD&#47;AS model, a positive output gap occurs when aggregate demand has shifted right of the LRAS curve. Because the economy is already at or beyond full capacity, the additional demand cannot be met by higher real output &#8212; instead, prices are bid up. This generates demand-pull inflationary pressure, consistent with the subsequent CPI surge to 11.1% in October 2022. To close the positive gap, the Bank of England raised Bank Rate to 5.25%, aiming to reduce consumer spending and business investment, shifting AD back toward the LRAS. If left unchecked, a positive output gap risks embedding inflationary expectations and triggering a wage-price spiral.'
        },
        {
          id:     'q3b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'A negative output gap is most likely to be associated with which combination of outcomes?',
          options: [
            { id: 'opt-a', text: 'High inflation, low unemployment, and rising real wages'              },
            { id: 'opt-b', text: 'Rising unemployment, deflationary pressure, and a budget deficit'    },
            { id: 'opt-c', text: 'High GDP growth, rising asset prices, and strong consumer confidence' },
            { id: 'opt-d', text: 'A current account surplus and falling government borrowing'           }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. A negative output gap means the economy is producing below potential. This is associated with rising cyclical unemployment (as firms cut production), deflationary or disinflationary pressure (as spare capacity reduces firms&#39; pricing power), and a widening budget deficit (as tax revenues fall and welfare spending rises through automatic stabilisers).',
          feedbackWrong:   'The correct answer is B. A negative output gap reflects an economy operating below potential &#8212; there is spare capacity in the form of unemployed labour and underutilised capital. This depresses price inflation, raises unemployment, and automatically widens the budget deficit as tax revenues fall (particularly income tax and VAT) and spending on unemployment benefits rises.'
        }
      ]
    },

    /* ── Q4 – Causes of recession ───────────────────────────── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'Causes of recession',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from the Bank of England Monetary Policy Report, February 2009',
        text:   'The UK economy entered recession in the second half of 2008, following the collapse of confidence in global financial markets triggered by the failure of Lehman Brothers in September 2008. Credit markets froze as banks became unwilling to lend to each other or to businesses and households, dramatically tightening credit conditions. Consumer confidence plummeted as house prices fell sharply &#8212; reducing the wealth of millions of homeowners &#8212; and unemployment began to rise. Business investment collapsed as firms faced both tightening credit and extreme uncertainty about future demand. Exports fell as the global economy simultaneously contracted. The Bank of England noted that all four components of aggregate demand &#8212; consumption, investment, government spending, and net exports &#8212; were under severe downward pressure, creating the conditions for the deepest recession since the early 1980s.'
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain two causes of the 2008&#8211;09 UK recession.',
          hint:        '4-mark response &#8212; identify two distinct causes, explain the mechanism by which each reduced aggregate demand, and use evidence from the extract.',
          modelAnswer: 'One cause of the 2008&#8211;09 recession was a collapse in credit availability and consumer confidence following the financial crisis. As the extract notes, the failure of Lehman Brothers in September 2008 caused credit markets to freeze: banks became unwilling to lend to each other or to businesses and households, dramatically tightening credit conditions. Without access to credit, households could not finance purchases of homes, cars, and consumer durables, causing consumption &#8212; the largest component of AD &#8212; to fall sharply. Simultaneously, house prices fell, reducing households&#39; perceived wealth and further dampening their willingness to spend. This leftward shift in AD reduced real GDP, opening a large negative output gap and triggering rising unemployment. A second cause was the simultaneous collapse in business investment. The extract confirms that firms faced both tightening credit &#8212; limiting their ability to borrow for capital expenditure &#8212; and extreme uncertainty about future demand, which destroyed the incentive to invest even for those with access to funds. Investment in new plant, machinery, and property fell sharply, directly reducing the I component of AD. Through the multiplier, this fall in I was amplified: lower business spending reduced incomes in capital goods industries, whose workers and suppliers then cut their own spending in successive rounds, further deepening the recession.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following is a demand-side cause of recession?',
          options: [
            { id: 'opt-a', text: 'A surge in oil prices that raises production costs for all firms'                          },
            { id: 'opt-b', text: 'A major strike that prevents production in key industries'                                  },
            { id: 'opt-c', text: 'A sharp fall in consumer and business confidence that reduces aggregate demand'             },
            { id: 'opt-d', text: 'A natural disaster that destroys productive capacity in a region'                          }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. A demand-side cause of recession reduces aggregate demand &#8212; the total planned expenditure in the economy. A fall in consumer and business confidence reduces both consumption and investment, shifting the AD curve to the left and reducing real output. This is a classic demand-deficiency recession.',
          feedbackWrong:   'The correct answer is C. Demand-side causes of recession reduce aggregate demand &#8212; the AD curve shifts left. A fall in confidence reduces C and I simultaneously, deepening the contraction through the multiplier. Options A and D are supply-side causes (shifting SRAS or LRAS left). Option B is also a supply-side disruption.'
        }
      ]
    },

    /* ── Q5 – Long-run growth factors ───────────────────────── */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'Factors determining long-run economic growth',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%',      label: 'UK average annual real GDP growth, 2010&#8211;2019',          value: '1.9%'   },
          { color: 'rose',  icon: '%',      label: 'UK average annual real GDP growth, 2022&#8211;2024 (est.)',   value: '0.6%'   },
          { color: 'green', icon: '%',      label: 'UK gross fixed capital formation as % of GDP (2022)',         value: '18%'    },
          { color: 'amber', icon: '&#163;', label: 'UK government R&amp;D expenditure (2022)',                    value: '&#163;15bn' }
        ]
      },

      parts: [
        {
          id:          'q5a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain two factors that determine the long-run rate of economic growth in the UK economy.',
          hint:        '4-mark response &#8212; identify two distinct supply-side factors and explain the mechanism by which each contributes to long-run growth, using the data to illustrate the UK&#39;s position.',
          modelAnswer: 'First, the rate of investment in physical capital is a key determinant of long-run growth. Gross fixed capital formation &#8212; which stood at 18% of UK GDP in 2022 &#8212; measures the addition to the economy&#39;s capital stock from spending on machinery, buildings, and infrastructure. Higher investment increases the capital-to-labour ratio, enabling workers to produce more output per hour and raising productivity. This shifts the LRAS to the right, raising potential output and sustaining higher GDP growth over time. The data shows UK average growth falling from 1.9% per year in 2010&#8211;19 to an estimated 0.6% in 2022&#8211;24, partly reflecting the squeeze on business investment from rising interest rates and post-Brexit uncertainty. Second, investment in research, development, and innovation is critical to long-run growth. Government R&amp;D expenditure of &#163;15 billion in 2022 &#8212; alongside private business R&amp;D &#8212; funds the development of new technologies and processes that raise total factor productivity. Innovation enables the economy to produce more from existing resources and generates new industries and products that expand potential output. Countries that invest heavily in R&amp;D consistently exhibit higher long-run growth rates; the UK&#39;s total R&amp;D spend of 1.7% of GDP below the G7 average partly explains the persistent productivity underperformance that has constrained growth.'
        },
        {
          id:     'q5b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following best explains why long-run economic growth is represented by a rightward shift of the LRAS curve?',
          options: [
            { id: 'opt-a', text: 'AD shifts right when incomes rise, pulling output up along the SRAS curve'                                              },
            { id: 'opt-b', text: 'The LRAS shifts right when the economy&#39;s productive potential increases through more or better factors of production'  },
            { id: 'opt-c', text: 'SRAS shifts right in the short run as inflation falls, increasing the economy&#39;s capacity'                             },
            { id: 'opt-d', text: 'Government spending automatically causes the LRAS to shift right through the multiplier'                                 }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The LRAS is determined by the economy&#39;s productive potential &#8212; its factor endowments, technology, and institutional quality. Long-run economic growth occurs when this potential increases: more workers, better skills, a larger capital stock, or improved technology all raise potential output, shifting LRAS to the right.',
          feedbackWrong:   'The correct answer is B. Long-run economic growth is an expansion of productive potential, not just a temporary increase in actual output. The LRAS shifts right when the economy acquires more or better factors of production, or when technology improves. Option A describes a movement along SRAS in response to higher AD &#8212; this is short-run output growth, not long-run growth. Government spending (option D) shifts AD and may prevent hysteresis, but does not directly shift LRAS.'
        }
      ]
    }

  ]
};

/* ---- land-section-b.js ---- */
/* ============================================================
   ECONOS – Land It · Section B data for Economic Growth and the Business Cycle
   Topic: Economic Growth and the Business Cycle (2.10)
   ============================================================ */

window.ECONOS_LAND_SECTION_B = {
  topic:        'Economic Growth and the Business Cycle',
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
        title:       'UK economic performance, 2008&#8211;2023',
        tags:        ['GDP growth', 'financial crisis', 'productivity puzzle', 'trend growth'],
        defaultOpen: true,
        paragraphs: [
          'The UK economy experienced two severe recessions within fifteen years. The 2008&#8211;09 financial crisis caused GDP to contract by approximately 4.5% cumulatively, with the economy not recovering its pre-crisis peak until 2013. The subsequent recovery was slow and marked by a persistent &#8220;productivity puzzle&#8221;: labour productivity growth averaged just 0.4% per year between 2008 and 2023, compared with 2.2% in the fifteen years before the crisis. This shortfall implies that by 2023, UK output per worker was approximately 20% below the level it would have reached had the pre-crisis trend been maintained.',
          'The COVID-19 pandemic of 2020 then caused the largest single-year fall in UK GDP since modern records began &#8212; a contraction of 9.3% in 2020 &#8212; followed by a sharp recovery of 7.5% in 2021. Over the longer arc of 2008&#8211;2023, UK average real GDP growth was approximately 1.3% per year, significantly below the pre-2008 trend of around 2.5% and below comparable G7 economies. Business investment, at around 9&#8211;10% of GDP, has persistently lagged behind competitor economies and was further dampened by post-Brexit uncertainty and the shift to remote working reducing commercial property demand.',
          'Structural weaknesses include a chronic current account deficit &#8212; reaching 8% of GDP in 2022 &#8212; and a concentration of economic activity and investment in London and the south-east. The UK&#39;s long-term growth prospects are a subject of considerable policy debate, with some economists arguing that the economy has shifted to a permanently lower growth trajectory, while others believe targeted supply-side reform can restore faster expansion.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'The 2020 COVID-19 recession and the speed of recovery',
        tags:        ['COVID-19', '&#8722;9.3% GDP', 'furlough', 'V-shaped recovery', 'scarring'],
        defaultOpen: false,
        paragraphs: [
          'The UK&#39;s COVID-19 recession of 2020 was unprecedented in its speed and depth. GDP fell by 25% in April 2020 alone &#8212; the sharpest monthly contraction on record &#8212; before recovering as restrictions were relaxed. For the full year, output contracted by 9.3%. The causes were equally unusual: a combination of a catastrophic demand shock (households could not spend on services, travel, or entertainment) and a deliberate supply restriction (government-mandated lockdowns shut down large parts of the economy entirely).',
          'The government response was on an exceptional scale. The Coronavirus Job Retention Scheme &#8212; or furlough &#8212; paid 80% of wages for around 11 million workers at a total cost exceeding &#163;70 billion. Additional grants, business rate holidays, and emergency loans added further support. The Bank of England cut Bank Rate to a historic low of 0.1% and expanded quantitative easing by &#163;450 billion. Together, these measures preserved household incomes and firm solvency to an unprecedented degree, preventing the mass unemployment and business failures that typically deepen recessions and leave lasting economic scars.',
          'The recovery was correspondingly rapid by historical standards. GDP grew 7.5% in 2021 &#8212; a near-V-shaped bounce-back &#8212; driven by pent-up consumer demand, intact household balance sheets, and the successful vaccine programme. However, the recovery was uneven across sectors: hospitality, transport, and international travel recovered more slowly, while financial services and some technology sectors recovered quickly. The legacy of the recession included a surge in public borrowing &#8212; the deficit reached over &#163;300 billion in 2020&#8211;21 &#8212; and the onset of significant inflation from 2021 onwards, as supply chains remained disrupted while demand recovered strongly.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Long-run productivity and UK growth prospects',
        tags:        ['productivity', 'investment', 'R&amp;D', 'human capital', 'growth prospects'],
        defaultOpen: false,
        paragraphs: [
          'The UK&#39;s long-run growth prospects are fundamentally tied to its ability to raise labour productivity. Output per hour worked grew at just 0.4% per year on average since 2008 &#8212; one of the worst performances in the OECD. Slow productivity growth constrains real wage growth, limits non-inflationary GDP expansion, and narrows the tax base available to fund public services. The Resolution Foundation estimates that had the UK maintained its pre-2008 productivity trend, household incomes would be around &#163;10,000 per year higher by the mid-2020s.',
          'Several structural factors explain the productivity underperformance. Business investment &#8212; at roughly 9&#8211;10% of GDP &#8212; is low by international comparison, limiting the rate at which the capital stock grows and new technology is adopted. R&amp;D spending at 1.7% of GDP is below the G7 average of 2.7%, slowing innovation diffusion. Skills gaps &#8212; particularly in technical and digital fields &#8212; prevent many workers from using new technology effectively. Regional economic imbalances mean productivity is highly concentrated in London and the south-east, while large parts of the country operate well below their potential.',
          'Policy responses have included the &#8220;levelling up&#8221; agenda, full expensing of business investment, and significant commitments to infrastructure. However, economists caution that these initiatives will take many years to bear fruit and that their effectiveness depends on sustained political commitment and private sector confidence. Some structural issues &#8212; such as the post-Brexit reduction in inward foreign direct investment and access to EU labour &#8212; may prove difficult to reverse, creating a persistent drag on the economy&#39;s long-run growth rate.'
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
        stem:   'Explain the four phases of the business cycle.',
        tips: [
          'Name all four phases: expansion&#47;recovery, boom (peak), recession&#47;contraction, and trough.',
          'For each phase, describe the key characteristics: GDP growth, unemployment, inflation, and confidence.',
          'Use the UK data from Extract A to illustrate the cycle with real examples where relevant.'
        ],
        modelAnswer: 'The business cycle describes the regular pattern of alternating expansions and contractions in real GDP around its long-run trend growth path. It has four identifiable phases. The first is expansion or recovery, when real GDP is growing &#8212; often following a period of recession. Output rises as firms increase production to meet recovering demand, unemployment begins to fall, and consumer and business confidence gradually improve. The UK experienced this phase in 2021, when GDP grew 7.5% following the COVID-19 contraction. The second phase is the boom or peak, where real GDP growth exceeds the long-run trend rate and the economy is at or above full capacity. A positive output gap opens, meaning actual output exceeds potential. Inflationary pressure builds as excess demand cannot be fully met by output increases, and unemployment may fall below the natural rate. The third phase is recession or contraction, conventionally defined as two or more consecutive quarters of negative real GDP growth. Output falls, unemployment rises cyclically, and consumer and business confidence collapse. Firms cut investment and defer spending; the government&#39;s automatic stabilisers kick in, raising the deficit. The UK suffered recessions in 2008&#8211;09 (GDP &#8722;4.5% cumulatively) and 2020 (&#8722;9.3%). The fourth phase is the trough, the lowest point of the cycle. Output, employment, and confidence are at their minimum; inflationary pressure is minimal (or the economy may face deflationary pressure); the output gap is at its most negative. The economy is positioned to begin the next recovery if demand can be stimulated or confidence restored.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extract B, examine the causes and consequences of the 2020 UK recession.',
        tips: [
          'Explain both the demand-side and supply-side causes of the COVID-19 recession &#8212; it was unusual in having both simultaneously.',
          'Use the GDP figure (&#8722;9.3%) and Extract B data (furlough cost, Bank Rate, QE) to support the analysis.',
          'Examine at least three distinct consequences: for unemployment, for public finances, for inflation, or for long-run growth.',
          'Consider the role of policy in modifying the consequences &#8212; what would have happened without the furlough?',
          'Acknowledge the unusual speed of recovery and discuss what drove it.'
        ],
        modelAnswer: 'The 2020 UK recession was caused by an unprecedented combination of demand-side collapse and supply-side restriction acting simultaneously. On the demand side, lockdown measures prevented households from spending on a wide range of goods and services &#8212; hospitality, transport, entertainment, and retail &#8212; causing a catastrophic fall in consumption, the largest component of aggregate demand. Business investment was frozen as firms faced extreme uncertainty about future demand and revenues. Net exports were hit by the simultaneous collapse in global activity, which reduced foreign demand for UK exports. Extract B confirms the scale: GDP fell by 25% in April 2020 alone, and by 9.3% for the full year &#8212; the deepest annual contraction since modern records began. On the supply side, government-mandated business closures directly prevented production in hospitality, non-essential retail, and parts of manufacturing, shifting the effective SRAS curve to the left by restricting capacity. This dual nature &#8212; both an AD collapse and a supply restriction &#8212; made the 2020 recession structurally different from demand-only recessions such as 2008&#8211;09. The consequences were wide-ranging. First, unemployment would have risen catastrophically without policy intervention &#8212; estimates suggest it could have reached 15&#8211;20% without the furlough scheme, which instead preserved employment for around 11 million workers at a cost exceeding &#163;70 billion. Second, the public finances were severely affected: the deficit reached over &#163;300 billion in 2020&#8211;21, adding significantly to national debt and constraining future fiscal space. Third, supply chain disruptions &#8212; compounded by the pandemic shock &#8212; created the conditions for the subsequent inflation surge: when demand recovered strongly in 2021 while supply chains remained stretched, price pressures emerged across goods markets. This eventually contributed to CPI reaching 11.1% by October 2022. The speed of recovery in 2021 (+7.5%) was driven by the release of pent-up demand, the preservation of household incomes through the furlough &#8212; so balance sheets were intact when spending became possible again &#8212; and the successful vaccine rollout. However, Extract B notes the recovery was uneven, with some sectors &#8212; international travel, hospitality, and transport &#8212; recovering far more slowly. The legacy of increased public debt and subsequent inflation creates a difficult macroeconomic inheritance, limiting policy flexibility for future downturns.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Using the extracts and your own knowledge, discuss whether the UK can achieve a sustained higher long-run rate of economic growth.',
        tips: [
          'Define long-run economic growth and distinguish it from short-run cyclical recovery.',
          'Identify the structural factors constraining UK growth using Extracts A and C (productivity puzzle, investment, R&amp;D, regional imbalances).',
          'Present the policy case for each key reform &#8212; investment incentives, education, infrastructure, R&amp;D &#8212; and explain how each could raise LRAS.',
          'Evaluate the obstacles: time lags of supply-side reform, post-Brexit structural headwinds, fiscal constraints, and political economy barriers.',
          'Consider whether demand-side conditions &#8212; maintaining stable AD &#8212; are also necessary for supply-side improvements to materialise.',
          'Reach a clear, supported judgement: can the UK revert to faster growth, and what would be required?'
        ],
        modelAnswer: 'Long-run economic growth refers to a sustained increase in the economy&#39;s productive potential &#8212; a rightward shift of the LRAS curve &#8212; as opposed to short-run cyclical recovery, which simply closes an existing output gap. Whether the UK can achieve a sustainably higher rate of long-run growth depends on whether it can address the structural weaknesses that have constrained productivity since 2008, while navigating the fiscal, political, and external headwinds that complicate any sustained reform programme. The case for optimism begins with the diagnosis: the productivity puzzle is well understood, and its causes &#8212; underinvestment in physical capital, R&amp;D, human capital, and infrastructure; regional economic imbalances; and a business environment complicated by post-Brexit uncertainty &#8212; are in principle addressable by policy. Extract C identifies that UK output per hour could be around &#163;10,000 per household higher per year if the pre-2008 productivity trend had been sustained, creating a powerful economic argument for reform. The government&#39;s &#8220;full expensing&#8221; of capital investment, introduced in 2023, directly reduces the after-tax cost of business investment, which at 9&#8211;10% of GDP has persistently lagged G7 peers. By lowering the effective cost of acquiring new plant and technology, it could raise the capital-to-labour ratio, improving labour productivity. Infrastructure spending &#8212; including the National Infrastructure Strategy &#8212; can lower firms&#39; operating costs, improve labour market mobility, and attract private investment by improving the business environment. Education and skills investment, including T-levels and apprenticeship expansion, aims to address the human capital gap &#8212; particularly in digital and technical fields &#8212; that prevents effective technology adoption. Targeted R&amp;D support could raise innovation above the current 1.7% of GDP, closing the gap with the G7 average of 2.7%. Each of these interventions, sustained over time, would shift the LRAS to the right and raise the UK&#39;s trend growth rate. However, there are substantial reasons for caution. First, supply-side reforms work slowly. Education reform takes a generation; infrastructure projects routinely suffer delays and cost overruns &#8212; HS2 has risen from &#163;37 billion to over &#163;100 billion and been significantly curtailed. Second, some structural headwinds may be difficult to reverse. Post-Brexit reductions in inward foreign direct investment &#8212; as some businesses relocated European operations to EU countries &#8212; and reduced access to EU labour for sectors such as construction, hospitality, and healthcare create a persistent drag, as Extract C acknowledges. Third, the fiscal legacy of two recessions and significant pandemic spending leaves the government with limited room to finance a large supply-side investment programme without risking market concern about debt sustainability. The national debt approaching 100% of GDP constrains the scale of public investment that can credibly be promised. Fourth, the political economy of sustained structural reform is challenging: many beneficial policies &#8212; education and infrastructure &#8212; have benefits that arrive only after several electoral cycles, creating incentives to prioritise short-run measures over long-run structural investment. The evidence from Extract A underscores the seriousness of the challenge: average real growth of 1.3% per year between 2008 and 2023, well below the pre-crisis trend of 2.5%. Closing even half this gap over the coming decade would require a sustained and coordinated programme of supply-side investment significantly more ambitious than anything yet delivered. In conclusion, a sustainably higher rate of long-run growth is achievable for the UK in principle, but it requires both addressing the supply-side fundamentals &#8212; investment, skills, innovation, and infrastructure &#8212; and maintaining a stable macroeconomic environment that supports private sector confidence and prevents hysteresis from short-run downturns eroding long-run potential. The key risk is that fiscal constraints, political short-termism, and structural post-Brexit headwinds prevent the sustained commitment needed. A modestly more optimistic scenario &#8212; recovering to around 1.8&#8211;2.0% annual trend growth &#8212; is plausible if policy is sustained; a return to pre-2008 rates appears unlikely without transformative structural change.'
      }
    ]
  },

  /* ── Right-rail "What strong answers do" ──────────────────────── */
  strongAnswers: [
    'Use GDP figures from the extracts precisely &#8212; cite years and percentages',
    'Distinguish between short-run cyclical recovery and long-run structural growth',
    'Apply the AD&#47;AS and LRAS framework accurately to the UK context',
    'Evaluate obstacles to growth with specific examples &#8212; avoid vague assertions'
  ]
};

/* ---- land-section-c.js ---- */
/* ============================================================
   ECONOS – Land It · Section C data for Economic Growth and the Business Cycle
   Topic: Economic Growth and the Business Cycle (2.10)
   ============================================================ */

window.ECONOS_LAND_SECTION_C = {
  topic:        'Economic Growth and the Business Cycle',
  sectionLabel: 'Section C &#8212; Essay',
  backUrl:      TopicLoader.routes.land('intro'),

  /* In the exam there are two options; here we present one. */
  question: {
    id:          'qc',
    commandWord: 'Evaluate',
    stem:        'Evaluate the role of investment in determining the long-run rate of economic growth in the UK.',
    marks:       25,
    suggestedMinutes: 30,

    structureTips: [
      'Define long-run economic growth and explain its relationship to the LRAS curve.',
      'Distinguish between physical capital investment, human capital investment, and R&amp;D investment &#8212; all three are relevant.',
      'Analyse the mechanism by which each type of investment raises productivity and shifts LRAS to the right.',
      'Use specific UK evidence: business investment as % of GDP, R&amp;D data, the productivity puzzle, and infrastructure plans.',
      'Evaluate the limits of investment as a growth driver: diminishing returns, the importance of complementary factors (institutions, skills, demand), and the post-2008 &#8220;investment gap&#8221;.',
      'Consider alternative determinants of long-run growth: trade, institutions, human capital (separately from investment), and technological change.',
      'Reach a conditional judgement: how important is investment relative to other factors, and under what conditions is it the binding constraint on UK growth?'
    ],

    modelAnswer:
      '<p>Long-run economic growth is defined as a sustained increase in an economy&#39;s productive potential &#8212; its capacity to produce goods and services &#8212; shown in the AD&#47;AS model as a rightward shift of the long-run aggregate supply (LRAS) curve. Unlike short-run cyclical recovery, which simply returns actual output to potential, long-run growth moves the potential frontier itself outward. Investment &#8212; in its various forms &#8212; is widely regarded as the most important driver of this process, but its role must be understood alongside other fundamental growth determinants.</p>'
    + '<p>Physical capital investment &#8212; businesses&#39; spending on new plant, machinery, equipment, and buildings &#8212; directly raises the capital-to-labour ratio. As workers have access to more and better capital, their productivity rises: output per hour increases, enabling higher real wages and more goods and services for the same number of working hours. In the neoclassical growth model, capital accumulation is the primary proximate source of per-capita output growth, at least until diminishing marginal returns set in. UK gross fixed capital formation stood at around 18% of GDP in 2022 &#8212; below the G7 average and historically low for an advanced economy. This chronic underinvestment in physical capital is widely cited as a central cause of the UK&#39;s productivity puzzle: output per worker grew at just 0.4% per year on average since 2008, compared with 2.2% in the fifteen years before the financial crisis. Had investment been maintained at pre-crisis levels, capital stock growth &#8212; and with it productivity &#8212; would have been materially higher. The 2023 Budget&#39;s introduction of &#8220;full expensing&#8221; &#8212; allowing firms to deduct 100% of capital expenditure in the year of purchase &#8212; directly addresses this gap by lowering the effective after-tax cost of investment, aiming to stimulate a higher rate of capital accumulation and shift the LRAS to the right.</p>'
    + '<p>R&amp;D investment plays an equally important role by driving technological progress &#8212; the factor that, in endogenous growth theory, sustains long-run productivity growth even in the face of diminishing returns to capital. Unlike physical capital, knowledge is non-rival &#8212; its use by one firm does not diminish its availability to others &#8212; and generates positive externalities through spillovers across firms and industries. The market therefore systematically underinvests in R&amp;D relative to the socially optimal level, creating a role for government support. UK total R&amp;D spending at 1.7% of GDP falls well below the G7 average of 2.7%, suggesting that the UK&#39;s innovation gap is itself a significant constraint on long-run growth. Each percentage-point increase in R&amp;D intensity is estimated to raise the long-run growth rate by around 0.1&#8211;0.2 percentage points &#8212; a small annual increment that compounds substantially over decades. Government R&amp;D tax credits, Innovate UK, and university research funding all aim to correct this market failure, but their impact depends on private sector willingness to co-invest and on the availability of skilled researchers to conduct the work.</p>'
    + '<p>Human capital investment &#8212; education, training, and skills development &#8212; is a third dimension of investment that determines long-run growth. A more educated and skilled workforce is more productive, able to adopt and use new technologies, and capable of generating the managerial and entrepreneurial quality that drives innovation. The UK&#39;s skills shortages &#8212; particularly in technical, digital, and engineering fields &#8212; prevent many firms from deploying available technology effectively, limiting the return on physical capital investment. In this sense, human capital and physical capital are complements: investment in machinery delivers its full productivity benefit only if workers have the skills to operate it effectively. Government investment in T-levels, apprenticeships, and numeracy programmes addresses this complementarity, though the returns are measured in decades rather than years.</p>'
    + '<p>However, the role of investment in determining long-run growth has important limits. First, in the standard neoclassical model, capital accumulation faces diminishing marginal returns: each additional unit of capital adds progressively less to output, so investment alone cannot sustain permanently higher growth without ongoing technological progress. This is why endogenous growth theorists emphasise R&amp;D and human capital alongside physical investment. Second, investment is not the only determinant of long-run growth: the quality of institutions &#8212; rule of law, property rights, contract enforcement, and regulatory quality &#8212; fundamentally determines the environment in which investment decisions are made. Poor institutions deter investment by raising uncertainty and reducing expected returns; strong institutions attract foreign direct investment and support domestic capital formation. The post-Brexit reduction in UK inward FDI &#8212; as firms relocated some European operations to maintain single-market access &#8212; illustrates how institutional and trade relationships interact with investment incentives. Third, even well-designed investment requires sufficient aggregate demand to justify it: firms invest when they are confident that future demand will generate adequate returns. If macroeconomic policy maintains too tight a stance, potential growth cannot be realised because investment does not materialise. The concept of hysteresis suggests that prolonged weak demand &#8212; as the UK experienced after 2010&#8211;12 austerity &#8212; may have permanently damaged the supply-side by deterring investment that would otherwise have occurred.</p>'
    + '<p>In conclusion, investment &#8212; across its physical, technological, and human dimensions &#8212; is the most important proximate determinant of long-run economic growth in the UK. The productivity puzzle of 0.4% annual growth since 2008 is substantially explained by chronic underinvestment across all three dimensions. Policies that raise business investment, R&amp;D, and human capital accumulation &#8212; such as full expensing, R&amp;D tax credits, and skills reform &#8212; are therefore well-targeted. However, investment operates within a broader ecosystem: it requires strong institutions, adequate aggregate demand, appropriate skills, and an open trade environment to deliver its full growth dividend. For the UK specifically, addressing the investment gap is necessary but not sufficient; post-Brexit structural headwinds, regional imbalances, and skills shortages must be addressed concurrently. Investment is best understood not as a single lever but as the centrepiece of a coherent, long-run growth strategy.</p>'
  },

  strongAnswers: [
    'Define long-run growth precisely and link investment to LRAS from the outset',
    'Distinguish between physical capital, R&amp;D, and human capital investment &#8212; all three matter',
    'Use specific UK data: business investment as % of GDP, R&amp;D figures, productivity growth rates',
    'Evaluate investment&#39;s limits: diminishing returns, the role of institutions and demand, hysteresis',
    'Conclude with a conditional judgement that acknowledges complementary factors'
  ]
};

