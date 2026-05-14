/* ============================================================
   ECONOS — Land It · Section A data for inflation
   ============================================================ */

window.ECONOS_LAND_SECTION_A = {
  topic:        'Causes of Inflation & Deflation',
  sessionLabel: 'Session 3 of 3: Land',
  sectionLabel: 'Section A — Short questions',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

  questions: [

    /* ── Q1 — Measuring inflation ─────────────────────────── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'Measuring inflation',
      marks:    5,

      context: {
        type:       'svg-chart',
        chartTitle: 'UK inflation (annual % change)',
        yLabel:     'Annual % change',
        xLabel:     'Year'
      },

      parts: [
        {
          id:     'q1a',
          letter: 'a',
          marks:  1,
          type:   'mcq',
          stem:   'Looking at the period from late 2011 to early 2013, which term best describes what happened to the rate of inflation?',
          options: [
            { id: 'opt-a', text: 'Deflation'      },
            { id: 'opt-b', text: 'Disinflation'   },
            { id: 'opt-c', text: 'Stagflation'    },
            { id: 'opt-d', text: 'Hyperinflation' }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The rate of inflation was positive but falling &#8212; that is disinflation. Prices were still rising, just at a slower pace.',
          feedbackWrong:   'The correct answer is B &#8212; Disinflation. Prices were still rising but at a slower rate. Deflation would mean prices were actually falling; stagflation combines stagnant growth with high inflation.'
        },
        {
          id:          'q1b',
          letter:      'b',
          marks:       4,
          type:        'freetext',
          stem:        'Explain two reasons why the CPI may not accurately reflect the rate of inflation experienced by all households in the UK.',
          hint:        '4-mark response &#8212; identify two distinct reasons and develop each with explanation.',
          modelAnswer: 'First, the CPI uses a single representative basket of goods and services based on average household spending patterns. However, different households have very different spending habits: a retired household spends a much higher proportion of its income on energy and healthcare than a young household. If energy prices rise sharply, retired households will experience significantly higher inflation than the CPI reports, meaning the index understates inflation for that group. Second, CPI does not include owner-occupier housing costs such as mortgage interest payments. For homeowners with variable-rate mortgages, a rise in interest rates substantially increases monthly housing costs. Since these costs are excluded from CPI, the index may significantly understate the true cost of living for this large group of households.'
        }
      ]
    },

    /* ── Q2 — Exchange rates and cost-push inflation ─────── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'Exchange rates and cost-push inflation',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '&#163;', label: 'Sterling/Euro rate (Year 1)', value: '&#163;1 = &#8364;1.40' },
          { color: 'blue',  icon: '&#163;', label: 'Sterling/Euro rate (Year 2)', value: '&#163;1 = &#8364;1.12' },
          { color: 'rose',  icon: '%',      label: 'Change in UK import prices',  value: '+18%'                  },
          { color: 'green', icon: '%',      label: 'UK CPI inflation (Year 2)',   value: '4.2%'                  }
        ]
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain how a depreciation of sterling contributes to cost-push inflation in the UK.',
          hint:        '4-mark response &#8212; link the exchange rate fall to higher import prices, rising production costs, and higher consumer prices.',
          modelAnswer: 'The data shows sterling depreciated against the euro from &#163;1 = &#8364;1.40 to &#163;1 = &#8364;1.12, a fall of 20%. This means UK firms must now spend more pounds to purchase the same quantity of imported raw materials and semi-finished goods. With import prices rising by 18%, production costs increase for UK manufacturers. Faced with higher costs, firms pass these on to consumers through higher prices, pushing up the CPI. This is cost-push inflation because it originates on the supply side: higher input costs shift the short-run aggregate supply curve to the left, raising the price level even without any increase in aggregate demand.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following monetary policy actions is most likely to reduce inflation caused by a currency depreciation?',
          options: [
            { id: 'opt-a', text: 'Reducing income tax'            },
            { id: 'opt-b', text: 'Increasing government spending' },
            { id: 'opt-c', text: 'Raising the Bank Rate'          },
            { id: 'opt-d', text: 'Quantitative easing'            }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. Raising the Bank Rate increases the return on UK assets, attracting capital inflows and causing sterling to appreciate. A stronger pound reduces import prices, dampening cost-push inflationary pressure.',
          feedbackWrong:   'The correct answer is C &#8212; Raising the Bank Rate. Higher interest rates attract overseas capital inflows, boosting demand for sterling and causing it to appreciate, reversing the import price rise. Options A, B and D would increase aggregate demand or weaken sterling further, worsening inflation.'
        }
      ]
    },

    /* ── Q3 — Money supply and the quantity theory ────────── */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'Money supply and the quantity theory',
      marks:    5,

      context: {
        type:       'data-table',
        tableTitle: 'UK monetary and price data',
        headers:    ['', 'Year 1', 'Year 2'],
        rows: [
          { label: 'M4 broad money supply (&#163;bn)', values: ['1,800', '2,160'] },
          { label: 'Consumer Price Index (CPI)',        values: ['100',   '120'  ] },
          { label: 'Real GDP growth (annual %)',        values: ['2.0%',  '2.1%' ] }
        ]
      },

      parts: [
        {
          id:                'q3calc',
          letter:            'a',
          marks:             4,
          type:              'calculation',
          stem:              'Calculate the percentage change in the M4 money supply and the percentage change in the CPI between Year 1 and Year 2. Show your working.',
          calculatorAllowed: true,
          steps: [
            { id: 'q3step1', label: '% change in M4',  correctValue: '20' },
            { id: 'q3step2', label: '% change in CPI', correctValue: '20' }
          ],
          interpretation: {
            id:          'q3interp',
            label:       'What do these figures suggest about the relationship between money supply and inflation?',
            placeholder: 'Comment on the link between the two figures...',
            modelAnswer: 'Both M4 and the price level rose by 20%. With real GDP growth broadly stable at around 2%, this is consistent with the quantity theory of money (MV = PT): if velocity (V) and real output (T) are approximately constant, a proportional rise in the money supply produces an equal rise in the price level. This supports the monetarist view that inflation is, in the long run, a monetary phenomenon.'
          }
        },
        {
          id:     'q3b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'According to the quantity theory of money (MV = PT), if the velocity of circulation and real output are held constant, a doubling of the money supply will:',
          options: [
            { id: 'opt-a', text: 'Halve the price level'              },
            { id: 'opt-b', text: 'Double the price level'             },
            { id: 'opt-c', text: 'Have no effect on the price level'  },
            { id: 'opt-d', text: 'Reduce real GDP'                    }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. With V and T constant, MV = PT simplifies so that M and P are directly proportional. Doubling M therefore causes P to double.',
          feedbackWrong:   'The correct answer is B &#8212; Double the price level. With V and T held constant, MV = PT means M and P must move in direct proportion. A doubling of M produces a doubling of P.'
        }
      ]
    },

    /* ── Q4 — Wage-price spiral and demand-pull inflation ─── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'Wage-price spiral and demand-pull inflation',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from the Bank of England Monetary Policy Report, 2023',
        text:   'Following the energy price shock of 2021&#8211;22, many UK workers sought significant pay rises to restore their real purchasing power. Average regular pay growth reached 8.5% in the three months to July 2023 &#8212; the highest for 20 years. The Bank of England&#39;s Monetary Policy Committee warned that sustained above-productivity wage growth risked becoming embedded in inflation expectations, making the return of CPI to the 2% target significantly more difficult to achieve without further monetary tightening.'
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain what is meant by a wage-price spiral and why it makes inflation difficult to control.',
          hint:        '4-mark response &#8212; define the spiral, explain the self-reinforcing mechanism, and link to why the Bank of England finds it harder to reduce inflation.',
          modelAnswer: 'A wage-price spiral occurs when rising prices lead workers to demand higher wages to restore their real purchasing power &#8212; as the extract shows, UK workers sought large pay rises after energy prices surged. If firms grant these wage increases, their labour costs rise, causing them to raise prices further. This triggers another round of wage demands, creating a self-reinforcing inflationary cycle. It makes inflation difficult to control because it embeds inflation expectations into wage-setting: workers and firms anticipate future inflation and act in ways that perpetuate it. The Bank of England must therefore raise interest rates more aggressively than otherwise needed, risking a slowdown in economic growth, in order to break the cycle and return CPI to its 2% target.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following is the best description of demand-pull inflation?',
          options: [
            { id: 'opt-a', text: 'Rising raw material costs push up the price level'               },
            { id: 'opt-b', text: 'Workers negotiate higher wages to compensate for rising prices'  },
            { id: 'opt-c', text: 'Excess aggregate demand over productive capacity pulls up prices' },
            { id: 'opt-d', text: 'A fall in the exchange rate raises the cost of imported goods'   }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. Demand-pull inflation occurs when aggregate demand exceeds the economy&#39;s productive capacity, pulling prices upward as firms cannot supply sufficient output to meet demand.',
          feedbackWrong:   'The correct answer is C. Demand-pull inflation is caused by excess aggregate demand over aggregate supply. Option A describes cost-push inflation from rising input costs; option B describes the wage-price spiral; option D describes cost-push inflation from exchange rate depreciation.'
        }
      ]
    },

    /* ── Q5 — Interest rates and the transmission mechanism ─ */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'Interest rates and the transmission mechanism',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'green', icon: '%', label: 'Bank Rate (Year 1)',         value: '0.10%' },
          { color: 'rose',  icon: '%', label: 'Bank Rate (Year 2)',         value: '5.25%' },
          { color: 'rose',  icon: '%', label: 'CPI inflation (Year 2)',     value: '6.7%'  },
          { color: 'blue',  icon: '%', label: 'Bank of England CPI target', value: '2.0%'  }
        ]
      },

      parts: [
        {
          id:          'q5a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain the transmission mechanism through which a rise in the Bank Rate helps to reduce the rate of inflation.',
          hint:        '4-mark response &#8212; trace at least two channels from higher Bank Rate through to lower inflation.',
          modelAnswer: 'A rise in the Bank Rate from 0.10% to 5.25% causes commercial banks to raise interest rates on loans, mortgages and credit cards. Higher mortgage repayments reduce households&#39; disposable income, lowering consumer spending on goods and services. Higher borrowing costs also make saving more attractive relative to consumption, further dampening aggregate demand. For firms, the higher cost of borrowing discourages investment in new capital and expansion, reducing business spending. The resulting fall in aggregate demand reduces upward pressure on prices across the economy. Additionally, higher UK interest rates attract hot money capital inflows from overseas investors seeking better returns: increased demand for sterling causes it to appreciate, making imports cheaper and directly reducing cost-push inflationary pressure. Together, these channels help bring CPI back towards the 2% target.'
        },
        {
          id:     'q5b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'What is the Bank of England&#39;s official CPI inflation target?',
          options: [
            { id: 'opt-a', text: '1%' },
            { id: 'opt-b', text: '2%' },
            { id: 'opt-c', text: '3%' },
            { id: 'opt-d', text: '5%' }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The Bank of England has a 2% CPI inflation target set by the government. If CPI moves more than 1 percentage point away from this target, the Governor must write an open letter of explanation to the Chancellor.',
          feedbackWrong:   'The correct answer is B &#8212; 2%. The Bank of England&#39;s Monetary Policy Committee is mandated to keep CPI inflation at 2%. The Governor must write an open letter to the Chancellor if CPI moves more than 1 percentage point above or below this target.'
        }
      ]
    }

  ]
};
