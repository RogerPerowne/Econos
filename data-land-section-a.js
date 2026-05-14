/* ============================================================
   ECONOS — Land It · Section A data for inflation
   ============================================================ */

window.ECONOS_LAND_SECTION_A = {
  topic:        'Causes of Inflation & Deflation',
  sessionLabel: 'Session 3 of 3: Land',
  sectionLabel: 'Section A — Short questions',
  backUrl:      'land_inflation_intro.html',

  questions: [
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'Interpreting inflation data',
      marks:    5,

      context: {
        type:       'svg-chart',
        chartTitle: 'UK inflation (annual % change)',
        yLabel:     'Annual % change',
        xLabel:     'Year',
        legend: [
          { label: 'CPI',                      style: 'solid'  },
          { label: 'Food and fuel',             style: 'dotted' },
          { label: 'Other goods and services',  style: 'dashed' }
        ]
      },

      parts: [
        {
          id:     'q1a',
          letter: 'a',
          marks:  1,
          type:   'mcq',
          stem:   'Looking at the period from late 2011 to early 2013, which term best describes what happened to the inflation rate?',
          options: [
            { id: 'deflation',    text: 'Deflation'            },
            { id: 'disinflation', text: 'Disinflation'         },
            { id: 'falling-avg',  text: 'Falling average prices'},
            { id: 'falling-mon',  text: 'Falling money supply' }
          ],
          correct:         'disinflation',
          feedbackCorrect: 'Correct. The rate of inflation was positive but falling — that is disinflation, not deflation.',
          feedbackWrong:   'The correct answer is Disinflation. Prices were still rising but at a slower rate — not falling (which would be deflation).'
        },
        {
          id:          'q1b',
          letter:      'b',
          marks:       4,
          type:        'freetext',
          stem:        'Using the chart as context, explain how the Consumer Prices Index is constructed in the UK and why expenditure weights matter.',
          hint:        '4-mark response — mention the basket, price changes, and weights.',
          modelAnswer: 'The CPI is constructed by identifying a representative basket of goods and services bought by a typical UK household. Each item is assigned an expenditure weight reflecting its share of total household spending. Price changes for each item are measured monthly and the weighted average of all price changes gives the overall CPI figure. Weights matter because they ensure that goods on which households spend more — such as housing or food — have a proportionally greater effect on the index than minor items.'
        }
      ]
    },

    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'Calculation and interpretation',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'green', icon: '£', label: 'Nominal pay last year', value: '£24,000' },
          { color: 'green', icon: '£', label: 'Nominal pay this year', value: '£25,200' },
          { color: 'rose',  icon: '%',      label: 'CPI last year',         value: '120'          },
          { color: 'rose',  icon: '%',      label: 'CPI this year',         value: '126'          }
        ]
      },

      parts: [
        {
          id:                'q2calc',
          letter:            null,
          marks:             4,
          type:              'calculation',
          stem:              'Calculate the percentage change in the worker’s real pay. Show your working and state whether real pay has risen or fallen.',
          calculatorAllowed: true,
          steps: [
            { id: 'q2step1', label: '1. Nominal pay change %', correctValue: '5'  },
            { id: 'q2step2', label: '2. Inflation rate %',     correctValue: '5'  },
            { id: 'q2step3', label: '3. Real pay change %',    correctValue: '0'  }
          ],
          interpretation: {
            id:          'q2interp',
            label:       'Interpretation',
            placeholder: 'Risen or fallen?\nExplain briefly…',
            modelAnswer: 'Real pay is unchanged (0%). Nominal pay rose by 5% but inflation also rose by 5%, so the worker’s purchasing power is identical to the previous year.'
          }
        }
      ]
    }
  ]
};
