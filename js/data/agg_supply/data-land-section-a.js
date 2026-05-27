/* ============================================================
   ECONOS – Land It · Section A data for Aggregate Supply
   Topic: Aggregate Supply (2.8)
   ============================================================ */

window.ECONOS_LAND_SECTION_A = {
  topic:        'Aggregate Supply',
  sectionLabel: 'Section A &#8211; Short questions',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

  questions: [

    /* ── Q1 – SRAS vs LRAS ───────────────────────────────────── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'Short-run and long-run aggregate supply',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%',      label: 'UK real GDP growth (2022)',                       value: '4.1%'   },
          { color: 'rose',  icon: '%',      label: 'UK CPI inflation (October 2022)',                  value: '11.1%'  },
          { color: 'green', icon: '%',      label: 'UK unemployment rate (Q4 2022)',                   value: '3.7%'   },
          { color: 'amber', icon: '%',      label: 'UK output gap estimate (2022, OBR)',               value: '&#8722;0.5%' }
        ]
      },

      parts: [
        {
          id:     'q1a',
          letter: 'a',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following correctly distinguishes the short-run aggregate supply (SRAS) curve from the long-run aggregate supply (LRAS) curve?',
          options: [
            { id: 'opt-a', text: 'SRAS is vertical at potential output; LRAS slopes upward'                                                          },
            { id: 'opt-b', text: 'SRAS is downward-sloping; LRAS is upward-sloping'                                                                  },
            { id: 'opt-c', text: 'SRAS slopes upward (higher price level incentivises more output); LRAS is vertical at potential output'             },
            { id: 'opt-d', text: 'Both SRAS and LRAS are vertical, but at different price levels'                                                     }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. In the short run, wages and other input costs are sticky, so a rise in the price level increases firms&#39; profit margins and incentivises them to expand output &#8211; hence SRAS slopes upward. In the long run, wages and costs fully adjust, so output returns to potential regardless of the price level &#8211; hence LRAS is vertical.',
          feedbackWrong:   'The correct answer is C. In the short run, nominal wages are fixed by contracts, so a rise in the price level raises firms&#39; revenue without raising costs, incentivising more production &#8211; the SRAS curve is upward-sloping. In the long run, wages and all input costs adjust fully, so the economy returns to its potential output level regardless of the price level, making LRAS vertical.'
        },
        {
          id:          'q1b',
          letter:      'b',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain two factors that determine the position of the LRAS curve in the UK economy.',
          hint:        '4-mark response &#8211; identify two supply-side factors and explain the mechanism by which each determines the economy&#39;s potential output.',
          modelAnswer: 'First, the quantity and quality of labour determines the LRAS. A larger, better-educated, and more skilled workforce increases the economy&#39;s productive potential. If UK participation rates rise &#8211; for example, through policies that bring more workers into employment, such as improved childcare provision &#8211; the effective labour supply increases, shifting the LRAS to the right and raising potential output. The current unemployment rate of 3.7% suggests the labour market is already fairly tight, meaning there is limited spare labour capacity to expand supply further without wage inflation. Second, the level of capital stock and technology determines productive capacity. Investment in new machinery, infrastructure, and digital technology enhances labour productivity, enabling the same workforce to produce more output. The UK&#39;s persistent output gap of approximately &#8722;0.5% of GDP suggests the economy was operating slightly below potential in 2022, but longer-run growth in potential output depends on sustained investment in physical and human capital. Improvements in technology &#8211; such as automation and AI &#8211; can also shift the LRAS to the right by raising total factor productivity.'
        }
      ]
    },

    /* ── Q2 – Supply-side shock: energy prices ───────────────── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'Supply-side shocks and short-run aggregate supply',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from the ONS, UK Economic Accounts, 2022',
        text:   'UK wholesale natural gas prices rose by over 400% between January 2021 and their peak in August 2022, following the disruption of European energy markets caused by Russia&#39;s invasion of Ukraine. Electricity prices followed a similar trajectory. For UK firms, energy represents a significant input cost &#8211; particularly in manufacturing, chemicals, and food processing &#8211; and the surge in costs directly eroded profit margins. Many energy-intensive businesses reduced output or temporarily closed production lines. The ONS noted that UK manufacturing output fell by 2.1% in the year to December 2022, while producer price inflation (PPI) reached 19.9% by July 2022, reflecting the pass-through of higher input costs to factory-gate prices.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain how a sharp rise in energy prices affects short-run aggregate supply in the UK economy.',
          hint:        '4-mark response &#8211; explain the mechanism by which higher energy costs shift the SRAS curve, and use AD&#47;AS analysis to show the effect on output and the price level.',
          modelAnswer: 'A sharp rise in energy prices is a classic negative supply-side shock. Energy is a key input cost for firms across the economy &#8211; particularly in manufacturing, transport, and food processing, as the extract emphasises. When energy costs surge by over 400%, as UK gas prices did between 2021 and 2022, production becomes more expensive at every level of output. Firms face higher costs without any corresponding increase in revenue or productivity, so their profit margins are squeezed. In the AD&#47;AS model, this is shown as an upward (leftward) shift in the short-run aggregate supply curve (SRAS): at any given price level, firms are willing and able to supply less output because costs have risen. The consequence is stagflation &#8211; a simultaneous fall in real output and rise in the price level. The extract confirms both effects: UK manufacturing output fell 2.1%, while producer price inflation hit 19.9% by July 2022, eventually feeding through into consumer prices at 11.1%. Firms respond by cutting production &#8211; as the extract notes, some energy-intensive businesses temporarily closed &#8211; which reduces real GDP and may lead to job losses, worsening the growth outlook while inflation simultaneously rises. This creates a difficult dilemma for policymakers: demand-management policies that reduce inflation (higher interest rates) risk deepening the output contraction, while policies to support output risk embedding inflation further.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'A negative supply-side shock, such as a sharp rise in energy prices, will most likely result in:',
          options: [
            { id: 'opt-a', text: 'Higher real output and a higher price level'                         },
            { id: 'opt-b', text: 'Lower real output and a lower price level'                           },
            { id: 'opt-c', text: 'Lower real output and a higher price level (stagflation)'            },
            { id: 'opt-d', text: 'Higher real output and a lower price level'                          }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. A negative supply shock shifts SRAS to the left. In the AD&#47;AS model, the new equilibrium occurs at a higher price level and lower real output &#8211; the combination known as stagflation. This is precisely what the UK experienced in 2022.',
          feedbackWrong:   'The correct answer is C. When SRAS shifts left &#8211; because input costs have risen &#8211; the new equilibrium with an unchanged AD curve is at a higher price level (cost-push inflation) and lower real GDP. This is stagflation &#8211; the characteristic outcome of a negative supply shock.'
        }
      ]
    },

    /* ── Q3 – Productivity ───────────────────────────────────── */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'Productivity and aggregate supply',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '%', label: 'UK labour productivity growth, 2008&#8211;2023 (avg. p.a.)', value: '0.4%'  },
          { color: 'blue',  icon: '%', label: 'UK labour productivity growth, 1993&#8211;2008 (avg. p.a.)', value: '2.2%'  },
          { color: 'green', icon: '%', label: 'G7 average productivity growth, 2010&#8211;2022',             value: '0.9%'  },
          { color: 'amber', icon: '%', label: 'UK output per hour worked (index, 2019 = 100) in 2023',       value: '101.2' }
        ]
      },

      parts: [
        {
          id:          'q3a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain how a sustained improvement in labour productivity would affect aggregate supply in the UK economy.',
          hint:        '4-mark response &#8211; explain the mechanism by which higher productivity shifts both SRAS and LRAS, using the data to illustrate the significance of the productivity puzzle.',
          modelAnswer: 'Labour productivity measures output per worker (or per hour worked). A sustained improvement in productivity means the same workforce produces more goods and services in a given period. In the AD&#47;AS model, this shifts both the SRAS curve to the right (as lower unit costs allow firms to supply more at each price level) and the LRAS curve to the right (as the economy&#39;s potential output &#8211; what it can produce at full employment &#8211; increases). The data highlights the critical importance of this: UK productivity growth has averaged just 0.4% per year since 2008, compared with 2.2% per year in the pre-crisis decade and a G7 average of 0.9% per year since 2010. This &#8220;productivity puzzle&#8221; means UK aggregate supply has grown much more slowly than it otherwise would have, constraining real GDP growth and real wage increases. If productivity growth could be restored to its pre-2008 trend &#8211; through higher business investment, better skills, improved management practices, and greater diffusion of technology &#8211; this would shift the LRAS to the right, raising potential output and enabling non-inflationary growth. The output per hour index of 101.2 (vs 2019 = 100) in 2023 confirms that progress since the pandemic has been minimal.'
        },
        {
          id:     'q3b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'A sustained rise in labour productivity in the UK is most likely to:',
          options: [
            { id: 'opt-a', text: 'Shift the LRAS curve to the left, reducing potential output'                                              },
            { id: 'opt-b', text: 'Shift the SRAS curve to the left, causing cost-push inflation'                                           },
            { id: 'opt-c', text: 'Shift the LRAS curve to the right, raising the economy&#39;s productive potential and enabling real wage growth' },
            { id: 'opt-d', text: 'Shift the AD curve to the right but leave SRAS and LRAS unchanged'                                       }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. Higher labour productivity increases the output the economy can produce with its existing resources, shifting the LRAS to the right. This raises potential GDP and, over time, supports real wage growth as workers become more valuable to employers.',
          feedbackWrong:   'The correct answer is C. Rising labour productivity means the same inputs produce more output, increasing the economy&#39;s supply capacity. In the AD&#47;AS model, this shifts the LRAS to the right &#8211; the economy can produce more at full employment &#8211; and lowers unit costs, also shifting SRAS to the right. Real wages can rise without causing inflation because productivity growth justifies the higher pay.'
        }
      ]
    },

    /* ── Q4 – Labour market flexibility ─────────────────────── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'Labour market flexibility and aggregate supply',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from the OECD Employment Outlook, 2022',
        text:   'The OECD notes that labour market flexibility &#8211; the ease with which employers can adjust workforce size, working hours, and pay &#8211; is a key determinant of how quickly an economy can respond to shocks. The UK has traditionally had relatively flexible labour markets compared with continental European economies, with fewer restrictions on hiring and firing and a large part-time and zero-hours workforce. Proponents argue this flexibility reduces structural unemployment and allows the economy to reallocate labour quickly from declining to growing sectors. Critics contend that insecurity and low pay associated with flexible contracts reduce worker investment in skills and dampen productivity. Following the COVID-19 pandemic, the UK experienced significant labour market tightening, with vacancies reaching record highs of over 1.3 million in 2022, suggesting structural mismatches between the skills demanded by employers and those available in the workforce.'
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain two ways in which greater labour market flexibility could affect the level of aggregate supply.',
          hint:        '4-mark response &#8211; identify two distinct channels through which labour market flexibility affects SRAS or LRAS, using evidence from the extract.',
          modelAnswer: 'First, greater labour market flexibility reduces structural unemployment by enabling faster reallocation of workers between sectors. When declining industries shed workers, flexible hiring rules and low barriers to entry mean growing sectors can absorb this labour more quickly. As the extract notes, the UK&#39;s relatively flexible labour market &#8211; with fewer restrictions on hiring and firing compared with continental Europe &#8211; is associated with lower structural unemployment. Lower unemployment means the economy can operate closer to its productive potential, effectively shifting the LRAS to the right as more of the workforce is productively employed. This is particularly relevant in the post-COVID context: the record 1.3 million vacancies in 2022 suggest structural mismatches that prevented rapid reallocation, indicating that flexibility alone is insufficient without complementary skills investment. Second, however, the extract identifies that excessive flexibility may reduce investment in human capital, potentially constraining LRAS growth over the long run. If workers on zero-hours contracts or short-term arrangements lack incentive or financial stability to invest in further training and skills, the quality of the workforce stagnates. Similarly, firms with a flexible &#8220;hire-and-fire&#8221; mentality may underinvest in on-the-job training. Lower human capital accumulation shifts the LRAS to the left relative to what it could have been, reducing the economy&#39;s productive potential. This suggests a trade-off: short-run flexibility may aid SRAS adjustment, but only labour market structures that also encourage productivity-enhancing investment will shift the LRAS to the right sustainably.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following best describes structural unemployment?',
          options: [
            { id: 'opt-a', text: 'Unemployment caused by a fall in aggregate demand across the whole economy'                       },
            { id: 'opt-b', text: 'Unemployment arising from a mismatch between the skills of the unemployed and the jobs available' },
            { id: 'opt-c', text: 'Unemployment that occurs as workers move between jobs in a well-functioning labour market'        },
            { id: 'opt-d', text: 'Unemployment that results from seasonal fluctuations in labour demand'                            }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Structural unemployment arises when there is a mismatch between the skills workers possess and those demanded by employers &#8211; often because technological change or deindustrialisation has made certain skills obsolete. It is a supply-side problem that cannot be solved by demand-side stimulus alone.',
          feedbackWrong:   'The correct answer is B. Structural unemployment is caused by a long-run mismatch between worker skills and employer requirements. The record 1.3 million vacancies in the UK in 2022 alongside significant unemployment suggest structural mismatch. Option A describes cyclical unemployment; option C describes frictional unemployment; option D describes seasonal unemployment.'
        }
      ]
    },

    /* ── Q5 – LRAS shifts and long-run growth ───────────────── */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'Shifts in LRAS and long-run economic growth',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%',      label: 'UK R&amp;D spending as % of GDP (2021)',               value: '1.7%'   },
          { color: 'rose',  icon: '%',      label: 'G7 average R&amp;D spending as % of GDP (2021)',        value: '2.7%'   },
          { color: 'green', icon: '&#163;', label: 'UK government target for infrastructure investment',   value: '&#163;100bn' },
          { color: 'amber', icon: '%',      label: 'UK business investment as % of GDP (2022)',            value: '9.8%'   }
        ]
      },

      parts: [
        {
          id:          'q5a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain two supply-side policies the government could use to shift the LRAS curve to the right.',
          hint:        '4-mark response &#8211; identify two distinct supply-side policy tools and explain the mechanism by which each raises potential output, using the data where relevant.',
          modelAnswer: 'First, the government could increase investment in research and development (R&amp;D) through tax credits or direct funding. The data shows UK R&amp;D spending at just 1.7% of GDP in 2021, significantly below the G7 average of 2.7%. Sustained underinvestment in R&amp;D means new technologies and production methods diffuse more slowly into the UK economy, constraining productivity and potential output. By incentivising private R&amp;D through generous tax allowances &#8211; as the UK has done through the Patent Box and R&amp;D tax credit scheme &#8211; the government can shift the LRAS to the right as innovation raises total factor productivity. Over time, higher productivity means the same workforce and capital stock produce more output, permanently raising potential GDP. Second, large-scale infrastructure investment can shift the LRAS to the right by improving productive capacity. The government&#39;s &#163;100 billion infrastructure target aims to reduce transport bottlenecks, upgrade digital connectivity, and expand energy capacity. Better infrastructure reduces firms&#39; costs &#8211; faster freight, more reliable power &#8211; improving productive efficiency. It also raises the effective mobility of labour by making commuting more feasible, expanding the functional size of labour markets. Since UK business investment as a proportion of GDP (9.8% in 2022) lags behind competitor economies, public infrastructure can complement and crowd in private investment by improving the environment in which firms operate.'
        },
        {
          id:     'q5b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following would shift the LRAS curve to the right?',
          options: [
            { id: 'opt-a', text: 'A cut in income tax rates that temporarily boosts consumer spending'           },
            { id: 'opt-b', text: 'A rise in business confidence that increases planned investment in the short run' },
            { id: 'opt-c', text: 'An increase in the economy&#39;s productive capacity through improved education and training' },
            { id: 'opt-d', text: 'A rise in government current spending on public services'                       }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. The LRAS is determined by the economy&#39;s productive potential &#8211; its stock of labour, capital, technology, and institutional quality. Investment in education and training raises the quality of the human capital stock, permanently increasing the output the economy can produce at full employment and shifting the LRAS to the right.',
          feedbackWrong:   'The correct answer is C. The LRAS shifts right only when the economy&#39;s underlying productive potential increases &#8211; through more or better quality factors of production, or improved technology. Education and training raise human capital, shifting LRAS right. Options A and D affect aggregate demand or SRAS in the short run. Option B affects SRAS and investment temporarily, but does not of itself shift the LRAS.'
        }
      ]
    }

  ]
};
