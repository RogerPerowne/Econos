/* ============================================================
   ECONOS – Land It · consolidated section data
   Concatenated from per-section files at v0.4.0. Quiz pools
   from the former quiz-*.js shells are folded in here too —
   the questions live on as Land It content.
   ============================================================ */

/* ---- land-complete.js ---- */
/* ============================================================
   ECONOS – Land It complete page data
   Topic: Aggregate Supply (2.8)
   ============================================================ */

window.ECONOS_LAND_COMPLETE = {
  topic:   'Aggregate Supply',
  nextUrl: '/',

  sections: {
    A: { label: 'Section A', sublabel: 'Short questions',    color: '#ec2d68' },
    B: { label: 'Section B', sublabel: 'Extended response',  color: '#f59e0b' },
    C: { label: 'Section C', sublabel: 'Essay',              color: '#2563eb' }
  },

  nextCard: {
    icon:  '&#x1F680;',
    title: 'What to do next',
    text:  'Compare your written answers with the model responses. Check that you distinguished clearly between SRAS and LRAS and correctly identified what shifts each. In Section B, review whether you addressed both the direct stagflation effect of the energy shock and the second-round wage-price risk. If your Section C essay treated supply-side and demand-side policies as simple opposites rather than complements, revisit the hysteresis argument and how demand stability supports long-run supply-side performance.'
  }
};

/* ---- land-intro.js ---- */
/* ============================================================
   ECONOS – Land It intro page data
   Topic: Aggregate Supply (2.8)
   ============================================================ */

window.ECONOS_LAND_INTRO = {
  topic:        'Aggregate Supply',
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
    'Distinguishing between SRAS and LRAS and identifying what shifts each curve',
    'Applying supply-side shocks &#8211; particularly energy price changes &#8211; to the AD&#47;AS model',
    'Evaluating productivity data and its relationship to aggregate supply',
    'Constructing a balanced essay on the relative effectiveness of supply-side versus demand-side policies'
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
   ECONOS – Land It · Section A data for Aggregate Supply
   Topic: Aggregate Supply (2.8)
   ============================================================ */

window.ECONOS_LAND_SECTION_A = {
  topic:        'Aggregate Supply',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.routes.land('intro'),

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
          feedbackCorrect: 'Correct. In the short run, wages and other input costs are sticky, so a rise in the price level increases firms&#39; profit margins and incentivises them to expand output &#8212; hence SRAS slopes upward. In the long run, wages and costs fully adjust, so output returns to potential regardless of the price level &#8212; hence LRAS is vertical.',
          feedbackWrong:   'The correct answer is C. In the short run, nominal wages are fixed by contracts, so a rise in the price level raises firms&#39; revenue without raising costs, incentivising more production &#8212; the SRAS curve is upward-sloping. In the long run, wages and all input costs adjust fully, so the economy returns to its potential output level regardless of the price level, making LRAS vertical.'
        },
        {
          id:          'q1b',
          letter:      'b',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain two factors that determine the position of the LRAS curve in the UK economy.',
          hint:        '4-mark response &#8212; identify two supply-side factors and explain the mechanism by which each determines the economy&#39;s potential output.',
          modelAnswer: 'First, the quantity and quality of labour determines the LRAS. A larger, better-educated, and more skilled workforce increases the economy&#39;s productive potential. If UK participation rates rise &#8212; for example, through policies that bring more workers into employment, such as improved childcare provision &#8212; the effective labour supply increases, shifting the LRAS to the right and raising potential output. The current unemployment rate of 3.7% suggests the labour market is already fairly tight, meaning there is limited spare labour capacity to expand supply further without wage inflation. Second, the level of capital stock and technology determines productive capacity. Investment in new machinery, infrastructure, and digital technology enhances labour productivity, enabling the same workforce to produce more output. The UK&#39;s persistent output gap of approximately &#8722;0.5% of GDP suggests the economy was operating slightly below potential in 2022, but longer-run growth in potential output depends on sustained investment in physical and human capital. Improvements in technology &#8212; such as automation and AI &#8212; can also shift the LRAS to the right by raising total factor productivity.'
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
        text:   'UK wholesale natural gas prices rose by over 400% between January 2021 and their peak in August 2022, following the disruption of European energy markets caused by Russia&#39;s invasion of Ukraine. Electricity prices followed a similar trajectory. For UK firms, energy represents a significant input cost &#8212; particularly in manufacturing, chemicals, and food processing &#8212; and the surge in costs directly eroded profit margins. Many energy-intensive businesses reduced output or temporarily closed production lines. The ONS noted that UK manufacturing output fell by 2.1% in the year to December 2022, while producer price inflation (PPI) reached 19.9% by July 2022, reflecting the pass-through of higher input costs to factory-gate prices.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain how a sharp rise in energy prices affects short-run aggregate supply in the UK economy.',
          hint:        '4-mark response &#8212; explain the mechanism by which higher energy costs shift the SRAS curve, and use AD&#47;AS analysis to show the effect on output and the price level.',
          modelAnswer: 'A sharp rise in energy prices is a classic negative supply-side shock. Energy is a key input cost for firms across the economy &#8212; particularly in manufacturing, transport, and food processing, as the extract emphasises. When energy costs surge by over 400%, as UK gas prices did between 2021 and 2022, production becomes more expensive at every level of output. Firms face higher costs without any corresponding increase in revenue or productivity, so their profit margins are squeezed. In the AD&#47;AS model, this is shown as an upward (leftward) shift in the short-run aggregate supply curve (SRAS): at any given price level, firms are willing and able to supply less output because costs have risen. The consequence is stagflation &#8212; a simultaneous fall in real output and rise in the price level. The extract confirms both effects: UK manufacturing output fell 2.1%, while producer price inflation hit 19.9% by July 2022, eventually feeding through into consumer prices at 11.1%. Firms respond by cutting production &#8212; as the extract notes, some energy-intensive businesses temporarily closed &#8212; which reduces real GDP and may lead to job losses, worsening the growth outlook while inflation simultaneously rises. This creates a difficult dilemma for policymakers: demand-management policies that reduce inflation (higher interest rates) risk deepening the output contraction, while policies to support output risk embedding inflation further.'
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
          feedbackCorrect: 'Correct. A negative supply shock shifts SRAS to the left. In the AD&#47;AS model, the new equilibrium occurs at a higher price level and lower real output &#8212; the combination known as stagflation. This is precisely what the UK experienced in 2022.',
          feedbackWrong:   'The correct answer is C. When SRAS shifts left &#8212; because input costs have risen &#8212; the new equilibrium with an unchanged AD curve is at a higher price level (cost-push inflation) and lower real GDP. This is stagflation &#8212; the characteristic outcome of a negative supply shock.'
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
          hint:        '4-mark response &#8212; explain the mechanism by which higher productivity shifts both SRAS and LRAS, using the data to illustrate the significance of the productivity puzzle.',
          modelAnswer: 'Labour productivity measures output per worker (or per hour worked). A sustained improvement in productivity means the same workforce produces more goods and services in a given period. In the AD&#47;AS model, this shifts both the SRAS curve to the right (as lower unit costs allow firms to supply more at each price level) and the LRAS curve to the right (as the economy&#39;s potential output &#8212; what it can produce at full employment &#8212; increases). The data highlights the critical importance of this: UK productivity growth has averaged just 0.4% per year since 2008, compared with 2.2% per year in the pre-crisis decade and a G7 average of 0.9% per year since 2010. This &#8220;productivity puzzle&#8221; means UK aggregate supply has grown much more slowly than it otherwise would have, constraining real GDP growth and real wage increases. If productivity growth could be restored to its pre-2008 trend &#8212; through higher business investment, better skills, improved management practices, and greater diffusion of technology &#8212; this would shift the LRAS to the right, raising potential output and enabling non-inflationary growth. The output per hour index of 101.2 (vs 2019 = 100) in 2023 confirms that progress since the pandemic has been minimal.'
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
          feedbackWrong:   'The correct answer is C. Rising labour productivity means the same inputs produce more output, increasing the economy&#39;s supply capacity. In the AD&#47;AS model, this shifts the LRAS to the right &#8212; the economy can produce more at full employment &#8212; and lowers unit costs, also shifting SRAS to the right. Real wages can rise without causing inflation because productivity growth justifies the higher pay.'
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
        text:   'The OECD notes that labour market flexibility &#8212; the ease with which employers can adjust workforce size, working hours, and pay &#8212; is a key determinant of how quickly an economy can respond to shocks. The UK has traditionally had relatively flexible labour markets compared with continental European economies, with fewer restrictions on hiring and firing and a large part-time and zero-hours workforce. Proponents argue this flexibility reduces structural unemployment and allows the economy to reallocate labour quickly from declining to growing sectors. Critics contend that insecurity and low pay associated with flexible contracts reduce worker investment in skills and dampen productivity. Following the COVID-19 pandemic, the UK experienced significant labour market tightening, with vacancies reaching record highs of over 1.3 million in 2022, suggesting structural mismatches between the skills demanded by employers and those available in the workforce.'
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain two ways in which greater labour market flexibility could affect the level of aggregate supply.',
          hint:        '4-mark response &#8212; identify two distinct channels through which labour market flexibility affects SRAS or LRAS, using evidence from the extract.',
          modelAnswer: 'First, greater labour market flexibility reduces structural unemployment by enabling faster reallocation of workers between sectors. When declining industries shed workers, flexible hiring rules and low barriers to entry mean growing sectors can absorb this labour more quickly. As the extract notes, the UK&#39;s relatively flexible labour market &#8212; with fewer restrictions on hiring and firing compared with continental Europe &#8212; is associated with lower structural unemployment. Lower unemployment means the economy can operate closer to its productive potential, effectively shifting the LRAS to the right as more of the workforce is productively employed. This is particularly relevant in the post-COVID context: the record 1.3 million vacancies in 2022 suggest structural mismatches that prevented rapid reallocation, indicating that flexibility alone is insufficient without complementary skills investment. Second, however, the extract identifies that excessive flexibility may reduce investment in human capital, potentially constraining LRAS growth over the long run. If workers on zero-hours contracts or short-term arrangements lack incentive or financial stability to invest in further training and skills, the quality of the workforce stagnates. Similarly, firms with a flexible &#8220;hire-and-fire&#8221; mentality may underinvest in on-the-job training. Lower human capital accumulation shifts the LRAS to the left relative to what it could have been, reducing the economy&#39;s productive potential. This suggests a trade-off: short-run flexibility may aid SRAS adjustment, but only labour market structures that also encourage productivity-enhancing investment will shift the LRAS to the right sustainably.'
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
          feedbackCorrect: 'Correct. Structural unemployment arises when there is a mismatch between the skills workers possess and those demanded by employers &#8212; often because technological change or deindustrialisation has made certain skills obsolete. It is a supply-side problem that cannot be solved by demand-side stimulus alone.',
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
          hint:        '4-mark response &#8212; identify two distinct supply-side policy tools and explain the mechanism by which each raises potential output, using the data where relevant.',
          modelAnswer: 'First, the government could increase investment in research and development (R&amp;D) through tax credits or direct funding. The data shows UK R&amp;D spending at just 1.7% of GDP in 2021, significantly below the G7 average of 2.7%. Sustained underinvestment in R&amp;D means new technologies and production methods diffuse more slowly into the UK economy, constraining productivity and potential output. By incentivising private R&amp;D through generous tax allowances &#8212; as the UK has done through the Patent Box and R&amp;D tax credit scheme &#8212; the government can shift the LRAS to the right as innovation raises total factor productivity. Over time, higher productivity means the same workforce and capital stock produce more output, permanently raising potential GDP. Second, large-scale infrastructure investment can shift the LRAS to the right by improving productive capacity. The government&#39;s &#163;100 billion infrastructure target aims to reduce transport bottlenecks, upgrade digital connectivity, and expand energy capacity. Better infrastructure reduces firms&#39; costs &#8212; faster freight, more reliable power &#8212; improving productive efficiency. It also raises the effective mobility of labour by making commuting more feasible, expanding the functional size of labour markets. Since UK business investment as a proportion of GDP (9.8% in 2022) lags behind competitor economies, public infrastructure can complement and crowd in private investment by improving the environment in which firms operate.'
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
          feedbackCorrect: 'Correct. The LRAS is determined by the economy&#39;s productive potential &#8212; its stock of labour, capital, technology, and institutional quality. Investment in education and training raises the quality of the human capital stock, permanently increasing the output the economy can produce at full employment and shifting the LRAS to the right.',
          feedbackWrong:   'The correct answer is C. The LRAS shifts right only when the economy&#39;s underlying productive potential increases &#8212; through more or better quality factors of production, or improved technology. Education and training raise human capital, shifting LRAS right. Options A and D affect aggregate demand or SRAS in the short run. Option B affects SRAS and investment temporarily, but does not of itself shift the LRAS.'
        }
      ]
    }

  ]
};

/* ---- land-section-b.js ---- */
/* ============================================================
   ECONOS – Land It · Section B data for Aggregate Supply
   Topic: Aggregate Supply (2.8)
   ============================================================ */

window.ECONOS_LAND_SECTION_B = {
  topic:        'Aggregate Supply',
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
        title:       'The UK productivity puzzle, 2008&#8211;2023',
        tags:        ['productivity', 'output per hour', 'zombie firms', 'investment gap'],
        defaultOpen: true,
        paragraphs: [
          'Between 1993 and 2008, UK labour productivity grew at an average rate of 2.2% per year. Since the financial crisis, that rate has collapsed to around 0.4% per year &#8212; one of the worst performances in the G7. By 2023, UK output per worker was approximately 20% lower than it would have been had the pre-crisis trend continued. Economists have termed this the &#8220;productivity puzzle&#8221;, and explanations remain contested.',
          'Several structural factors are cited. First, business investment in the UK has persistently lagged behind competitor economies: at around 9&#8211;10% of GDP, it is below the G7 average and has been further dampened by post-Brexit uncertainty. Low investment means the capital stock grows slowly, limiting the tools and technology available to workers. Second, the survival of &#8220;zombie firms&#8221; &#8212; companies kept alive by ultra-low interest rates despite generating insufficient returns to cover their costs &#8212; may have trapped labour and capital in low-productivity activities, preventing the creative destruction that normally channels resources to more productive uses.',
          'A third explanation focuses on the composition of UK growth: a large share of output is generated by financial services and consumer-facing services with structurally lower productivity growth than manufacturing. Skills gaps &#8212; particularly in STEM subjects &#8212; have also been cited as a brake on technology adoption. The UK spends just 1.7% of GDP on R&amp;D, compared with a G7 average of 2.7%, suggesting chronic underinvestment in innovation that compounds the gap over time.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'The energy price shock, 2021&#8211;22, and short-run aggregate supply',
        tags:        ['energy prices', 'SRAS', 'cost-push inflation', 'stagflation'],
        defaultOpen: false,
        paragraphs: [
          'The global energy price shock of 2021&#8211;22, amplified by Russia&#39;s invasion of Ukraine in February 2022, produced the most severe short-run supply disruption the UK had experienced in decades. Wholesale gas prices rose by over 400% between January 2021 and their August 2022 peak. For UK manufacturers, energy represents between 5% and 30% of total production costs depending on the sector, so the surge in prices directly increased unit costs of production across the economy.',
          'In the AD&#47;AS model, a rise in input costs shifts the short-run aggregate supply (SRAS) curve to the left: at any given price level, firms can profitably supply less output because their costs have risen. The UK experienced the textbook stagflation outcome: CPI inflation reached 11.1% in October 2022 &#8212; driven substantially by energy and food &#8212; while GDP growth slowed sharply and the economy flirted with recession. Manufacturing output fell 2.1% in the year to December 2022, and producer price inflation peaked at 19.9% in July 2022.',
          'The energy price shock also created a second-round risk: if workers negotiated higher nominal wages to compensate for rising prices, unit labour costs would increase, shifting SRAS further to the left and potentially embedding inflation even after energy prices stabilised. The Bank of England raised Bank Rate from 0.1% to 5.25% between December 2021 and August 2023, partly to prevent these second-round wage effects from taking hold. However, critics argued that using monetary policy to address a supply-side shock risked unnecessary sacrifice of output and employment.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Supply-side policy and the long-run aggregate supply curve',
        tags:        ['supply-side policy', 'LRAS', 'education', 'deregulation', 'infrastructure'],
        defaultOpen: false,
        paragraphs: [
          'Supply-side economists argue that raising long-run productive potential &#8212; shifting the LRAS to the right &#8212; is both more sustainable and less inflationary than demand-side stimulus. A rightward shift in LRAS allows the economy to grow at a higher rate without generating inflationary pressure, because the increase in real output is matched by an expansion in the economy&#39;s capacity to produce. This contrasts with demand-side stimulus, which typically raises output in the short run but may push the price level higher if the economy is near capacity.',
          'UK supply-side policy has pursued several approaches. Investment in education and training &#8212; including the expansion of T-levels, apprenticeships, and numeracy programmes &#8212; aims to raise human capital and address skills gaps. Infrastructure investment through projects such as HS2 (high-speed rail) and the National Infrastructure Strategy is intended to reduce transport bottlenecks and improve the productive environment for business. Tax incentives for business investment &#8212; such as full expensing of capital investment introduced in 2023 &#8212; are designed to incentivise firms to upgrade their capital stock.',
          'However, supply-side policies face significant limitations. They typically operate over long time horizons: education reforms may take a decade to produce graduates in shortage subjects, and infrastructure projects routinely experience cost overruns and delays. Deregulation can improve efficiency in some markets but may reduce consumer protection or environmental standards in others. There is also a distributional dimension: some supply-side reforms, such as cutting income tax rates or reducing employment regulation, may increase output but worsen inequality if the gains accrue primarily to higher-income groups or capital owners.'
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
        stem:   'Explain two factors that would cause the short-run aggregate supply (SRAS) curve to shift to the left.',
        tips: [
          'Identify two distinct factors &#8212; ideally from different categories (input costs, exchange rates, indirect taxes, productivity).',
          'For each, explain the economic mechanism by which it shifts SRAS left &#8212; do not simply state &#8220;costs rise&#8221;.',
          'Where relevant, use data or examples from the context pack (e.g. the energy price shock in Extract B).'
        ],
        modelAnswer: 'The SRAS curve shows the total amount of output that all firms in the economy are willing and able to supply at each price level, given that wages and other input costs are fixed in the short run. It shifts left when the costs of production rise, meaning firms can profitably supply less at any given price level. One factor causing a leftward shift is a rise in raw material or energy prices. Extract B illustrates this clearly: when wholesale gas prices rose by over 400% between 2021 and 2022, energy costs &#8212; which account for 5&#8211;30% of production costs in manufacturing &#8212; surged. At any given price level, firms&#39; profit margins were squeezed, leading them to cut output. In the AD&#47;AS model, this leftward shift in SRAS produced stagflation: inflation of 11.1% alongside slowing growth. A second factor is a rise in nominal wages. If workers successfully negotiate higher wage settlements &#8212; for example, in response to high inflation &#8212; unit labour costs rise for all firms. Since labour is typically the largest input cost (around 60&#8211;70% of GDP in the UK), a widespread rise in wages shifts SRAS to the left. This is the &#8220;second-round&#8221; effect the Bank of England was concerned about in 2022: if wage growth persistently exceeded productivity growth, the SRAS would shift left repeatedly, embedding inflationary pressure into the economy.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extract B, examine the likely effects of a significant energy price shock on the UK economy.',
        tips: [
          'Define the energy price shock as a negative supply-side shock that shifts SRAS left.',
          'Use the AD&#47;AS diagram framework to explain the stagflation outcome &#8212; higher prices, lower output.',
          'Apply the data from Extract B (gas prices up 400%, CPI 11.1%, manufacturing output &#8722;2.1%).',
          'Examine the second-round risk of wage-price spirals &#8212; how does this extend the supply shock?',
          'Consider the policy dilemma: monetary tightening reduces inflation but at the cost of output; what are the trade-offs?'
        ],
        modelAnswer: 'A significant energy price shock is a classic negative supply-side shock: it raises the cost of producing goods and services at every level of output, shifting the short-run aggregate supply (SRAS) curve to the left. In the AD&#47;AS model, assuming aggregate demand remains unchanged, the new equilibrium occurs at a higher price level and lower real GDP &#8212; the combination known as stagflation. Extract B confirms that this is precisely what the UK experienced. Wholesale gas prices rose by over 400% between January 2021 and August 2022, directly increasing production costs in manufacturing, chemicals, and other energy-intensive sectors. Producer price inflation peaked at 19.9% in July 2022, reflecting the pass-through of higher energy costs to factory-gate prices; this subsequently fed into consumer prices, with CPI reaching 11.1% in October 2022. At the same time, manufacturing output fell 2.1% in the year to December 2022, confirming the reduction in real supply. The combination of higher prices and lower output is the defining characteristic of the leftward SRAS shift. A further concern highlighted in Extract B is the risk of second-round effects. If workers respond to the rise in the cost of living by demanding higher nominal wages &#8212; which is rational from their individual perspective, since real wages have been eroded &#8212; firms face a second round of rising input costs. This would shift SRAS further to the left, generating additional inflation and potentially leading to a wage-price spiral. The Bank of England raised Bank Rate from 0.1% to 5.25% between 2021 and 2023 specifically to suppress this risk by dampening demand and signalling its commitment to the 2% inflation target. However, this created its own costs: higher interest rates reduce consumption and investment, shifting AD to the left and exacerbating the fall in real output. Critics of the monetary response argued that using demand-side tools to address a supply-side shock was inappropriate &#8212; it successfully reduces inflation but at an unnecessary cost to output and employment. This policy dilemma &#8212; whether to prioritise price stability or output &#8212; is the central challenge posed by negative supply shocks. In the UK case, the severity of the energy price surge and the risk of embedded inflation meant monetary tightening was probably necessary, but its bluntness as a tool for a supply-driven shock illustrates the limits of conventional macroeconomic policy.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Using the extracts and your own knowledge, discuss how supply-side policies can shift the long-run aggregate supply (LRAS) curve to the right in the UK economy.',
        tips: [
          'Explain what shifts the LRAS &#8212; increases in the quantity or quality of factors of production, or improvements in technology.',
          'Analyse at least three supply-side policy tools from Extract C and your own knowledge, explaining the mechanism of each.',
          'Use Extract A (productivity puzzle) to contextualise the need for supply-side reform in the UK.',
          'Evaluate the limits: time lags, uncertain effectiveness, fiscal cost, and potential trade-offs with equity.',
          'Consider whether supply-side policies alone are sufficient or whether demand-side support is also needed.',
          'Reach a clear, supported judgement on the overall effectiveness of supply-side policies.'
        ],
        modelAnswer: 'Long-run aggregate supply (LRAS) represents the total output the economy can produce when all factors of production are fully employed and all prices have adjusted. It is determined by the quantity and quality of the factors of production &#8212; labour, capital, land, and enterprise &#8212; and by the technology available. Supply-side policies aim to shift the LRAS to the right by improving these underlying determinants, thereby raising potential output without generating inflationary pressure. The UK&#39;s chronic productivity puzzle, documented in Extract A &#8212; where productivity growth has averaged just 0.4% per year since 2008 compared with 2.2% before the financial crisis &#8212; provides powerful motivation for supply-side reform. Education and investment in human capital is arguably the most important long-run lever. As Extract C notes, UK programmes such as T-levels, apprenticeships, and numeracy initiatives aim to raise skills and address the mismatch between what workers can offer and what employers demand. A more skilled workforce is more productive, raising output per worker and shifting the LRAS to the right. Investment in STEM education is particularly important given the UK&#39;s relative weakness in R&amp;D &#8212; just 1.7% of GDP against a G7 average of 2.7% (Extract A) &#8212; because technology diffusion is critical to long-run productivity growth. Research suggests that each additional year of schooling raises individual productivity by 8&#8211;13%, and the aggregate effect of sustained improvement in workforce quality is a sustained rightward shift in LRAS. Infrastructure investment is a second significant supply-side lever. Transport bottlenecks, unreliable energy infrastructure, and poor digital connectivity all raise firms&#39; operating costs and limit the effective size of labour markets. The government&#39;s &#163;100 billion National Infrastructure Strategy and projects such as high-speed rail are designed to reduce these barriers. Better infrastructure lowers firms&#39; unit costs &#8212; shifting SRAS to the right &#8212; and over time raises productive capacity, shifting LRAS. Crucially, public infrastructure investment can also &#8220;crowd in&#8221; private investment by improving the conditions in which businesses operate. Third, tax incentives for business investment &#8212; such as the full expensing of capital spending introduced in 2023 &#8212; reduce the effective cost of acquiring new plant and machinery. By lowering the after-tax cost of investment, such policies shift the marginal efficiency of capital schedule to the right, incentivising firms to invest in productivity-enhancing capital goods. Since Extract A identifies low business investment as a central cause of the productivity puzzle, directly reducing its cost is a well-targeted intervention. Deregulation and improvements to the business environment can also raise LRAS by reducing administrative burdens that divert resources from productive activity. However, supply-side policies face substantial limitations. First, they work slowly: education reform takes a generation to produce graduates, and infrastructure projects typically experience long delays and cost overruns &#8212; HS2, for example, has seen its budget rise from &#163;37 billion to over &#163;100 billion. Second, their effectiveness is difficult to guarantee: R&amp;D tax credits, for instance, may simply subsidise investment that would have occurred anyway, rather than incentivising additional activity. Third, there is a distributional dimension, as Extract C acknowledges: some supply-side measures &#8212; particularly deregulation and income tax cuts &#8212; may worsen inequality, concentrating gains among higher-income groups or capital owners. Finally, supply-side policies cannot compensate for a deficiency of aggregate demand: if firms face inadequate demand for their products, no amount of productivity improvement or cost reduction will incentivise them to expand output. A comprehensive growth strategy therefore requires supply-side reform to raise potential output alongside demand-management policies that ensure that potential is actually realised. In conclusion, supply-side policies can and should shift the LRAS to the right in the UK economy &#8212; the productivity puzzle makes this an urgent priority &#8212; but their effectiveness depends on sustained commitment over long time horizons, adequate fiscal investment, and a supportive demand environment. No single supply-side policy is sufficient; a broad programme combining education, infrastructure, business investment incentives, and R&amp;D support is needed to address the multiple causes of the UK&#39;s productivity underperformance.'
      }
    ]
  },

  /* ── Right-rail "What strong answers do" ──────────────────────── */
  strongAnswers: [
    'Distinguish clearly between SRAS and LRAS and what shifts each',
    'Apply the AD&#47;AS framework accurately to supply shocks',
    'Use specific UK data from the extracts (productivity figures, energy price data)',
    'Evaluate supply-side policies with reference to time lags, costs, and trade-offs'
  ]
};

/* ---- land-section-c.js ---- */
/* ============================================================
   ECONOS – Land It · Section C data for Aggregate Supply
   Topic: Aggregate Supply (2.8)
   ============================================================ */

window.ECONOS_LAND_SECTION_C = {
  topic:        'Aggregate Supply',
  sectionLabel: 'Section C &#8212; Essay',
  backUrl:      TopicLoader.routes.land('intro'),

  /* In the exam there are two options; here we present one. */
  question: {
    id:          'qc',
    commandWord: 'Evaluate',
    stem:        'Evaluate the view that supply-side policies are more effective than demand-side policies in raising the long-run rate of economic growth in the UK.',
    marks:       25,
    suggestedMinutes: 30,

    structureTips: [
      'Define long-run economic growth and distinguish it from short-run cyclical fluctuations.',
      'Explain what shifts the LRAS to the right &#8212; factors of production, technology, and institutional quality.',
      'Present the supply-side case: education, infrastructure, R&amp;D, deregulation, and business investment incentives &#8212; using UK evidence.',
      'Present the demand-side case: the Keynesian argument that sustained demand is needed to justify investment and prevent hysteresis.',
      'Evaluate the limits of supply-side policy: time lags, uncertain effectiveness, distributional concerns, and fiscal cost.',
      'Evaluate the limits of demand-side policy: inflationary risk when at capacity, crowding out, and the debt sustainability constraint.',
      'Reach a clear, conditional judgement: under what conditions is each approach superior, and is the question a false dichotomy?'
    ],

    modelAnswer:
      '<p>Long-run economic growth refers to a sustained increase in the productive potential of the economy &#8212; an outward shift of the production possibility frontier (PPF) or, equivalently, a rightward shift of the long-run aggregate supply (LRAS) curve. It is distinct from short-run cyclical recovery, which simply closes an existing output gap without adding to potential. The question of whether supply-side or demand-side policies are more effective in raising this long-run rate of growth is fundamental to macroeconomic policy debates in the UK, where productivity growth has averaged just 0.4% per year since 2008 &#8212; far below the pre-crisis rate of 2.2% and the G7 average of 0.9%.</p>'
    + '<p>The supply-side case rests on the observation that long-run growth is determined by the quantity and quality of factors of production and the technology available to combine them. Demand-side policies &#8212; fiscal or monetary stimulus &#8212; can close an output gap by moving the economy toward its potential frontier, but they cannot move the frontier itself. Only by improving labour quality (through education and training), expanding the capital stock (through business investment incentives and infrastructure), and accelerating technological progress (through R&amp;D support) can governments sustainably raise the long-run growth rate. The UK government&#39;s &#8220;full expensing&#8221; of capital investment, introduced in the 2023 Budget, exemplifies this approach: by allowing firms to deduct 100% of qualifying capital expenditure in the year of purchase, it reduces the effective cost of investment and raises expected returns, shifting the marginal efficiency of capital schedule to the right. Since low business investment &#8212; at around 9.8% of GDP, below the G7 average &#8212; is a central cause of the UK&#39;s productivity puzzle, directly addressing its cost is well-targeted. Similarly, the government&#39;s National Infrastructure Strategy, with a &#163;100 billion commitment, aims to reduce transport and connectivity bottlenecks that raise firms&#39; costs and constrain labour market size, shifting the LRAS to the right over the medium term.</p>'
    + '<p>Education and skills investment represents perhaps the most powerful long-run supply-side tool. The UK&#39;s R&amp;D spend of 1.7% of GDP &#8212; against a G7 average of 2.7% &#8212; reflects both public and private underinvestment in innovation. Government support for research &#8212; through university funding, Innovate UK, and R&amp;D tax credits &#8212; can address the market failure arising from the public good and positive externality characteristics of knowledge. Each unit of knowledge created benefits not just the inventor but spreads across the economy through spillovers, so the private sector will systematically underinvest without public support. Greater innovation raises total factor productivity, enabling the same inputs to produce more output and permanently shifting the LRAS to the right.</p>'
    + '<p>However, supply-side policies face significant limitations. First, they operate over very long time horizons: education reform takes a generation to produce its effects, and infrastructure projects routinely experience delays and cost overruns. The LRAS shift may be real but so distant as to be of limited value for current policymakers. Second, their effectiveness is uncertain: R&amp;D tax credits risk subsidising investment that would have occurred anyway (deadweight loss), while deregulation in some markets may harm consumers or the environment. Third, there is a distributional concern: supply-side measures that lower taxes on capital or reduce employment regulation may increase output but worsen inequality, as gains accrue disproportionately to owners of capital. A society that grows but becomes significantly more unequal may not experience commensurate improvements in average well-being.</p>'
    + '<p>The demand-side case for raising long-run growth rests primarily on the concept of hysteresis: the idea that prolonged periods of weak demand can permanently damage the supply side of the economy. If recession causes long-term unemployment, workers lose skills and become detached from the labour market, permanently reducing the effective labour supply. If firms facing depressed demand cut R&amp;D and investment, the capital stock grows more slowly and innovation stalls. In both cases, the LRAS shifts left relative to what it would otherwise have been. By maintaining strong aggregate demand through fiscal or monetary stimulus, governments can prevent this hysteresis, preserving the supply-side capacity that would otherwise erode. The IMF has argued that the premature austerity of 2010&#8211;12 in the UK likely caused lasting damage to productive potential, reducing long-run growth below what a more supportive demand environment would have allowed. Sustained demand also provides the market signal that justifies private investment: firms invest when they are confident that future demand will be sufficient to generate returns, so demand stability and supply-side capacity are complementary rather than substitutes.</p>'
    + '<p>The limits of demand-side policy are equally important to acknowledge. Demand-side stimulus cannot shift the LRAS; at best, it can fully utilise existing capacity. If the economy is already at potential output &#8212; which, with unemployment at 3.7% in 2022, the UK arguably was &#8212; additional demand stimulus generates inflation rather than real growth. Moreover, large-scale fiscal expansion carries the risk of unsustainable debt accumulation: with UK national debt approaching 100% of GDP, the government&#39;s capacity to deliver sustained demand stimulus without destabilising financial markets is limited. The September 2022 Mini-Budget illustrated this vividly: unfunded demand support via tax cuts caused gilt yields to spike and sterling to fall, forcing a rapid reversal.</p>'
    + '<p>In conclusion, the framing of supply-side versus demand-side policy as competing alternatives is itself misleading: the most effective approach combines both. Supply-side policies are indeed essential for raising the long-run growth rate &#8212; no demand stimulus can permanently shift the LRAS &#8212; but they work slowly, expensively, and uncertainly. Demand-side policies are needed to prevent hysteresis, maintain confidence for private investment, and ensure that supply-side improvements in capacity are actually utilised. For the UK specifically, where the productivity puzzle reflects multiple structural failings &#8212; chronic underinvestment in R&amp;D, infrastructure, and skills &#8212; sustained supply-side reform is urgently needed. But it must be delivered within a macroeconomic framework that maintains stable demand and avoids the premature consolidation that risks damaging the supply side it seeks to improve.</p>'
  },

  strongAnswers: [
    'Define long-run growth precisely and distinguish it from cyclical recovery',
    'Apply LRAS analysis clearly &#8212; explain what shifts it and what does not',
    'Use specific UK evidence: productivity data, R&amp;D spend, business investment figures',
    'Evaluate both supply-side and demand-side policies fairly, with their limits',
    'Conclude with a nuanced, conditional judgement that avoids false dichotomies'
  ]
};

