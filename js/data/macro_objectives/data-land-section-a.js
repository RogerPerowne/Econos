window.ECONOS_LAND_SECTION_A = {
  topic:        'Macroeconomic Objectives and Conflicts',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

  questions: [

    /* ── Q1 — The four main objectives ───────────────────────── */
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

    /* ── Q2 — Inflation vs unemployment (Phillips curve) ────── */
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

    /* ── Q3 — Current account and growth conflict ──────────────  */
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

    /* ── Q4 — Equity vs efficiency trade-off ─────────────────── */
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

    /* ── Q5 — Environmental sustainability and growth ─────────── */
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
          feedbackWrong:   'The correct answer is B. A carbon tax prices the negative externality of carbon emissions, correcting the market failure and improving allocative efficiency (P &#8594; MSC). Simultaneously, by discouraging carbon-intensive production and consumption, it promotes environmental sustainability. Both objectives are served by a single policy instrument.'
        }
      ]
    }

  ]
};
