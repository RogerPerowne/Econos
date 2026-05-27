window.ECONOS_LAND_SECTION_A = {
  topic:        'Unemployment',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.routes.land('intro'),

  questions: [

    /* ── Q1 – Measuring unemployment ─────────────────────────── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'Measuring unemployment',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%', label: 'UK unemployment rate (ILO, 2024 Q1)', value: '4.2%'     },
          { color: 'rose',  icon: '%', label: 'UK youth unemployment rate (16-24)',   value: '13.2%'    },
          { color: 'green', icon: '%', label: 'Economic inactivity rate',             value: '21.8%'    },
          { color: 'blue',  icon: 'm', label: 'Claimant count (JSA/UC claimants)',    value: '1.65m'    }
        ]
      },

      parts: [
        {
          id:     'q1a',
          letter: 'a',
          marks:  1,
          type:   'mcq',
          stem:   'The claimant count and the ILO measure of unemployment often differ. Which of the following best explains why the ILO measure is generally higher than the claimant count?',
          options: [
            { id: 'opt-a', text: 'The claimant count includes people who are economically inactive'          },
            { id: 'opt-b', text: 'The ILO measure includes people seeking work but not claiming benefits'    },
            { id: 'opt-c', text: 'The ILO measure excludes part-time workers from the labour force'         },
            { id: 'opt-d', text: 'The claimant count covers a wider age range than the ILO measure'         }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The ILO measure counts everyone without work who is actively seeking and available for work, regardless of whether they claim benefits. The claimant count only covers those claiming JSA or Universal Credit &#8212; it misses those who are not entitled to or do not claim benefits.',
          feedbackWrong:   'The correct answer is B. The ILO Labour Force Survey counts all people who are out of work, actively seeking work, and available to start within two weeks &#8212; even if they receive no benefits. Many people are not entitled to claim or choose not to, so the claimant count is usually lower.'
        },
        {
          id:          'q1b',
          letter:      'b',
          marks:       4,
          type:        'freetext',
          stem:        'Explain two limitations of using the unemployment rate as a measure of labour market performance.',
          hint:        '4-mark response &#8212; identify two distinct limitations and develop each with explanation.',
          modelAnswer: 'First, the unemployment rate excludes the economically inactive &#8212; those who are neither working nor seeking work. The data shows an economic inactivity rate of 21.8%, far higher than the unemployment rate of 4.2%. If large numbers of discouraged workers have given up looking for work, the unemployment rate understates the true weakness of the labour market. Second, the unemployment rate does not capture underemployment &#8212; people working part-time who would prefer full-time work, or those in jobs well below their skill level. A low unemployment rate with widespread underemployment may still signal labour market inefficiency, as productive capacity is not being fully utilised.'
        }
      ]
    },

    /* ── Q2 – Types of unemployment ──────────────────────────── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'Types of unemployment',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from a UK government skills strategy report, 2023',
        text:   'The collapse of traditional industries &#8212; coal mining, steel production, and textile manufacturing &#8212; across the North of England during the 1980s and 1990s left many communities with persistently high unemployment. Workers who had spent decades developing industry-specific skills found these skills had no value in the emerging service economy. Three decades later, regional unemployment disparities between London and former industrial areas persist, despite overall UK unemployment falling to historically low levels.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain why the type of unemployment described is difficult to reduce through demand-side macroeconomic policies.',
          hint:        '4-mark response &#8212; identify the type of unemployment, explain its cause, and explain why demand-side policies are insufficient.',
          modelAnswer: 'The extract describes structural unemployment &#8212; unemployment caused by a long-run mismatch between workers\' skills and the skills demanded by employers in the economy. Workers who developed coal mining or steelmaking skills found these industry-specific skills had no value in the service economy. Demand-side policies such as lower interest rates or higher government spending increase aggregate demand across the economy, raising output and employment in expanding sectors. However, they cannot address the skills mismatch at the heart of structural unemployment &#8212; even if there are job vacancies in financial services or technology, former industrial workers lack the qualifications and training to fill them. The persistence of regional disparities three decades later demonstrates that demand stimulus alone is insufficient when the problem is a structural skills gap rather than a deficiency of aggregate demand.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'A worker who is between jobs and spending time searching for a position that best matches their skills is best described as experiencing which type of unemployment?',
          options: [
            { id: 'opt-a', text: 'Cyclical unemployment'    },
            { id: 'opt-b', text: 'Structural unemployment'  },
            { id: 'opt-c', text: 'Frictional unemployment'  },
            { id: 'opt-d', text: 'Seasonal unemployment'    }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. Frictional unemployment occurs when workers voluntarily move between jobs and take time to search for the best match. It is a normal feature of a dynamic labour market.',
          feedbackWrong:   'The correct answer is C &#8212; Frictional unemployment. The worker is between jobs by choice, searching for the best match. Cyclical unemployment is caused by recession; structural unemployment by skills mismatch between sectors; seasonal unemployment by predictable seasonal changes in demand.'
        }
      ]
    },

    /* ── Q3 – Costs of unemployment ──────────────────────────── */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'Economic and social costs of unemployment',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '&#163;', label: 'Annual JSA/UC cost per claimant',        value: '&#163;5,200'   },
          { color: 'rose',  icon: '&#163;', label: 'Estimated annual tax revenue lost per unemployed worker', value: '&#163;8,400' },
          { color: 'blue',  icon: '%',      label: 'UK NEET rate (16-24, not in education, employment or training)', value: '12.2%' },
          { color: 'green', icon: '%',      label: 'Hysteresis effect: long-term unemployed re-entering work within 1 year', value: '28%' }
        ]
      },

      parts: [
        {
          id:          'q3a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain two economic costs of unemployment to the government.',
          hint:        '4-mark response &#8212; use specific data to identify and explain two distinct economic costs.',
          modelAnswer: 'First, unemployment imposes a direct fiscal cost on the government through benefit payments. The data shows a JSA/Universal Credit cost of &#163;5,200 per claimant annually. With 1.65 million claimants, total benefit expenditure exceeds &#163;8.5 billion per year &#8212; a significant call on public spending that must be funded through taxation or borrowing. Second, unemployment reduces government tax revenues. The data shows an estimated &#163;8,400 in lost tax revenue per unemployed worker, representing forgone income tax and National Insurance contributions. Combining benefit costs and forgone revenue, the net fiscal cost per unemployed person approaches &#163;13,600 annually, placing severe pressure on the government&#39;s fiscal position and reducing the resources available for public services.'
        },
        {
          id:     'q3b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which term describes the process by which long-term unemployment permanently reduces a worker\'s human capital and employability, making future unemployment more likely?',
          options: [
            { id: 'opt-a', text: 'The accelerator effect'    },
            { id: 'opt-b', text: 'Hysteresis'                },
            { id: 'opt-c', text: 'Creative destruction'      },
            { id: 'opt-d', text: 'Structural adjustment'     }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Hysteresis describes how a cyclical rise in unemployment can become permanent &#8212; prolonged unemployment erodes skills, weakens networks and signals poor employability, reducing the NAIRU and making high unemployment self-sustaining.',
          feedbackWrong:   'The correct answer is B &#8212; Hysteresis. Prolonged unemployment damages workers\' human capital: skills atrophy, contacts are lost and employers view long gaps negatively. This raises the natural rate of unemployment even after the original cyclical shock has passed.'
        }
      ]
    },

    /* ── Q4 – The Phillips curve ──────────────────────────────── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'The Phillips curve trade-off',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from the Bank of England Monetary Policy Report, 2023',
        text:   'The Bank of England faces a difficult balancing act. Raising interest rates further to reduce persistent above-target inflation risks tipping the economy into recession and pushing unemployment significantly higher. The MPC must judge whether the costs of higher unemployment in the short run are outweighed by the benefits of restoring price stability. Some members argue that maintaining tight monetary policy is necessary to prevent inflation expectations becoming unanchored; others caution that the labour market is already showing signs of softening, with vacancies falling and pay growth slowing.'
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain the short-run trade-off between inflation and unemployment that the Bank of England faces.',
          hint:        '4-mark response &#8212; reference the Phillips curve, explain the mechanism linking monetary tightening to unemployment, and use the extract.',
          modelAnswer: 'The extract illustrates the short-run Phillips curve trade-off: lower inflation can be achieved by raising unemployment, and vice versa. The Bank of England&#39;s tool is the Bank Rate &#8212; raising it increases borrowing costs, reduces consumer spending and business investment, and shifts aggregate demand to the left. Lower AD reduces both inflationary pressure (firms compete harder for customers) and employment (firms produce less output and shed labour). The extract shows this dilemma clearly: further rate rises would cool inflation but risk recession and &#8220;significantly higher unemployment.&#8221; The MPC must weigh these costs against the benefit of restoring the 2% target. The extract also hints at a longer-run consideration: if inflation expectations become unanchored, the Phillips curve shifts outward, making future disinflation even more painful &#8212; this provides the MPC&#39;s case for tolerating short-run unemployment costs now to avoid worse trade-offs later.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'In the long run, the Phillips curve is generally considered to be:',
          options: [
            { id: 'opt-a', text: 'Downward-sloping &#8212; a permanent trade-off exists between inflation and unemployment' },
            { id: 'opt-b', text: 'Upward-sloping &#8212; higher inflation causes higher unemployment in the long run'       },
            { id: 'opt-c', text: 'Vertical at the natural rate of unemployment &#8212; no permanent trade-off exists'       },
            { id: 'opt-d', text: 'Horizontal &#8212; unemployment is unaffected by the inflation rate in the long run'     }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. The long-run Phillips curve (LRPC) is vertical at the natural rate of unemployment (NAIRU). Any attempt to push unemployment below NAIRU causes accelerating inflation as workers and firms adjust their expectations upward, but unemployment returns to NAIRU in the long run.',
          feedbackWrong:   'The correct answer is C. The Friedman-Phelps natural rate hypothesis holds that in the long run, the economy returns to the NAIRU regardless of inflation. Attempts to permanently reduce unemployment below NAIRU simply raise inflation without affecting long-run unemployment &#8212; making the LRPC vertical.'
        }
      ]
    },

    /* ── Q5 – Supply-side policies to reduce unemployment ────── */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'Supply-side policies to reduce unemployment',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%', label: 'UK apprenticeship starts (2022-23)',        value: '0.7m'   },
          { color: 'green', icon: '%', label: 'Employment rate of apprenticeship completers after 6 months', value: '84%' },
          { color: 'rose',  icon: '%', label: 'Long-term unemployment (12+ months)',       value: '24.9% of unemployed' },
          { color: 'blue',  icon: '%', label: 'Employer-funded training (% of firms providing it)', value: '47%' }
        ]
      },

      parts: [
        {
          id:          'q5a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain how investment in education and training can reduce structural unemployment.',
          hint:        '4-mark response &#8212; link skills investment to the skills mismatch that causes structural unemployment, using specific data where relevant.',
          modelAnswer: 'Structural unemployment arises from a mismatch between workers\' skills and the skills required by employers in growing sectors. Investment in education and training directly addresses this by reskilling workers and making their human capital relevant to labour demand. The data shows that 84% of apprenticeship completers find employment within 6 months, demonstrating the effectiveness of targeted vocational training in converting unemployed individuals into employable workers. With 24.9% of unemployed workers in long-term unemployment, where skills atrophy is severe, targeted retraining programmes are especially important for breaking the hysteresis cycle. By shifting the aggregate supply of skilled labour, training investment can reduce the natural rate of unemployment without the inflationary consequences of demand stimulus, offering a more durable solution to structural unemployment.'
        },
        {
          id:     'q5b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'A government reduces the level of unemployment benefits to make work more financially attractive relative to not working. This policy is best described as:',
          options: [
            { id: 'opt-a', text: 'An automatic stabiliser'             },
            { id: 'opt-b', text: 'A supply-side reform'                },
            { id: 'opt-c', text: 'A demand-side fiscal stimulus'       },
            { id: 'opt-d', text: 'A monetary policy instrument'        }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Reducing the replacement ratio (benefit/wage ratio) increases the financial incentive to work, raising labour supply and reducing the natural rate of unemployment. This is a supply-side reform targeting labour market incentives.',
          feedbackWrong:   'The correct answer is B &#8212; A supply-side reform. By reducing the replacement ratio (the ratio of benefits to in-work income), the government makes work more financially attractive, reducing voluntary frictional and structural unemployment. This acts on the supply side of the labour market, not aggregate demand.'
        }
      ]
    }

  ]
};
