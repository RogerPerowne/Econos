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
