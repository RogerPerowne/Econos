/* ============================================================
   ECONOS – Land It · consolidated section data
   Concatenated from per-section files at v0.4.0. Quiz pools
   from the former quiz-*.js shells are folded in here too –
   the questions live on as Land It content.
   ============================================================ */

/* ---- land-complete.js ---- */
/* ============================================================
   ECONOS – Land It complete page data
   ============================================================ */

window.ECONOS_LAND_COMPLETE = {
  topic:   'Causes of Inflation & Deflation',
  nextUrl: '/',

  sections: {
    A: { label: 'Section A', sublabel: 'Short questions',    color: '#ec2d68' },
    B: { label: 'Section B', sublabel: 'Extended response',  color: '#f59e0b' },
    C: { label: 'Section C', sublabel: 'Essay',              color: '#2563eb' }
  },

  nextCard: {
    icon:  '🚀',
    title: 'What to do next',
    text:  'Compare your written answers with the model responses. Note where your chains of analysis could be extended and where your evaluation goes further than the model – or falls short. Aim to repeat the weakest section before moving to a new topic.'
  }
};

/* ---- land-intro.js ---- */
/* ============================================================
   ECONOS – Land It intro page data
   ============================================================ */

window.ECONOS_LAND_INTRO = {
  topic:        'Causes of Inflation & Deflation',
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
    'Applying economic theory to unseen data and extracts',
    'Building extended chains of analysis with accurate diagrams',
    'Evaluating policy and reaching a supported final judgement',
    'Practising extended writing under exam-style time pressure'
  ],

  tip: 'Start with a Section B question for a focused 15-minute practice. Add Sections A and C when you are ready to simulate a fuller exam block.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                     }
  ]
};

/* ---- land-section-a.js ---- */
/* ============================================================
   ECONOS – Land It · Section A data for inflation
   ============================================================ */

window.ECONOS_LAND_SECTION_A = {
  topic:        'Causes of Inflation & Deflation',
  sectionLabel: 'Section A – Short questions',
  backUrl:      TopicLoader.routes.land('intro'),

  questions: [

    /* ── Q1 – Measuring inflation ─────────────────────────── */
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

    /* ── Q2 – Exchange rates and cost-push inflation ─────── */
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

    /* ── Q3 – Money supply and the quantity theory ────────── */
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

    /* ── Q4 – Wage-price spiral and demand-pull inflation ─── */
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

    /* ── Q5 – Interest rates and the transmission mechanism ─ */
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

/* ---- land-section-b.js ---- */
/* ============================================================
   ECONOS – Land It · Section B data for inflation
   ============================================================ */

window.ECONOS_LAND_SECTION_B = {
  topic:        'Causes of Inflation & Deflation',
  sectionLabel: 'Section B – Extended response',
  backUrl:      TopicLoader.routes.land('intro'),

  /* ── Context pack: 2–4 extracts, collapsible ─────────────── */
  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'UK Monetary Policy decisions, 2020',
        tags:        ['0.1% base rate', '&#163;200bn QE', 'deflation risk', 'later inflation concern'],
        defaultOpen: true,
        paragraphs: [
          'In March 2020, as the COVID-19 pandemic hit the UK economy, the Bank of England cut the base rate from 0.75% to 0.10%. It also restarted quantitative easing (QE) with a further &#163;200 billion of government bond purchases.',
          'The aim was to support aggregate demand, keep borrowing costs low and prevent the economy from slipping into deflation. Over the following months and years, the Bank kept rates low and continued asset purchases until QE holdings peaked at &#163;895 billion.',
          'Some commentators argued that this large-scale money creation helped avoid deflation and stabilise demand. Others later criticised QE, claiming it contributed to higher inflation, while some economists argued much of the new money stayed within financial markets rather than reaching the real economy.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'Wage growth and the cost of living crisis, 2022–23',
        tags:        ['11.1% CPI peak', '8.5% wage growth', '5.25% Bank Rate', 'supply-side shocks'],
        defaultOpen: false,
        paragraphs: [
          'By late 2022, UK CPI inflation reached a 40-year high of 11.1%, driven largely by post-pandemic supply bottlenecks and the energy price shock following Russia&#39;s invasion of Ukraine. Households faced sharply rising costs for energy, food and transport.',
          'In response, UK workers across the public and private sectors sought significant pay rises to restore their real purchasing power, with average regular pay growth peaking at 8.5% in mid-2023. The Bank of England&#39;s Monetary Policy Committee raised the Bank Rate fourteen consecutive times, from 0.10% in late 2021 to 5.25% by August 2023.',
          'The MPC warned that sustained wage growth above productivity risked embedding inflation expectations. Critics argued the rate rises came too late to prevent a wage-price spiral, while others suggested monetary policy alone could not address inflation driven by global supply shocks.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Economist commentary on monetary policy',
        tags:        ['transmission lags', 'expectations channel', 'policy trade-offs'],
        defaultOpen: false,
        paragraphs: [
          'Economists generally agree that monetary policy works with &ldquo;long and variable lags&rdquo;. The Bank of England estimates that a change in interest rates takes 18&ndash;24 months to feed fully through to inflation. This means rate decisions taken today are aimed at inflation expected several years from now.',
          'There is wider disagreement about the relative importance of the transmission channels. Some emphasise the demand channel (higher rates reduce consumption and investment), while others focus on the expectations channel (a credible inflation target anchors wage and price setting).',
          'Most economists accept a trade-off: returning inflation to target may require slowing growth, raising unemployment and accepting weaker output in the short run.'
        ]
      }
    ]
  },

  /* ── Question: one multi-part Extended Response ──────────── */
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
        stem:   'Explain two likely causes of demand-pull inflation in the UK.',
        tips: [
          'Identify two distinct causes (e.g. lower interest rates, rising consumer confidence, fiscal stimulus).',
          'For each cause, explain the mechanism by which it shifts aggregate demand to the right.',
          'Use the language of the AD/AS model: AD shifts right → rising price level if economy is near full capacity.'
        ],
        modelAnswer: 'One cause of demand-pull inflation is a cut in interest rates. Lower borrowing costs encourage households to take out loans and mortgages, increasing consumption, while firms borrow more cheaply to fund investment. Total spending rises, shifting aggregate demand (AD) to the right. If the economy is operating near full capacity, this excess demand pulls the price level up. A second cause is an expansionary fiscal policy &#8212; for example, tax cuts or higher government spending. Tax cuts raise households&#39; disposable income, boosting consumption, while higher government spending directly adds to AD. Again, the rightward shift in AD against a relatively inelastic short-run aggregate supply curve pulls prices up.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extract A, examine the likely impact of quantitative easing on the UK price level.',
        tips: [
          'Briefly define quantitative easing and link it to the &#163;200bn figure in Extract A.',
          'Trace the transmission mechanism: asset purchases → higher bond prices, lower yields → lower borrowing costs → higher AD.',
          'Explain why QE may help avoid deflation when interest rates are near the zero lower bound.',
          'Use a balanced view: some commentators in Extract A argue QE later contributed to inflation, others that the money stayed in financial markets.'
        ],
        modelAnswer: 'Quantitative easing (QE) is the creation of central bank reserves to purchase financial assets &#8212; in this case &#163;200bn of government bonds. By bidding up bond prices, QE pushes yields down across the economy, lowering borrowing costs for firms and households. This stimulates investment and consumption, shifting AD to the right. With the Bank Rate already at the zero lower bound (0.10% per Extract A), conventional monetary easing was exhausted, so QE was the principal tool to prevent the economy slipping into deflation. In the short run, QE clearly helped support the price level. However, Extract A notes that some commentators later linked QE to higher inflation: by expanding the broad money supply substantially, QE may have fuelled excess demand once the economy reopened, consistent with the quantity theory of money. On the other hand, others argue much of the newly created money stayed within financial markets &#8212; raising asset prices rather than consumer prices &#8212; weakening the link to CPI. Overall, QE likely supported the price level and helped avoid deflation in the short run, but its longer-run inflationary impact depends on how much new money reaches the real economy and how anchored inflation expectations remain.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss the extent to which monetary policy can effectively control inflation in the UK. Refer to Extract B and your own knowledge.',
        tips: [
          'Define monetary policy and identify its key tools: Bank Rate, QE/QT, forward guidance.',
          'Explain how higher rates reduce inflation via the demand channel and the exchange-rate channel.',
          'Use Extract B: 14 consecutive rate rises from 0.10% to 5.25% in response to 11.1% CPI.',
          'Evaluate the limits: long and variable lags (18&ndash;24 months), supply-side shocks not addressable by demand-side tools.',
          'Consider the wage-price spiral and the expectations channel.',
          'Conclude with a balanced, supported judgement on effectiveness.'
        ],
        modelAnswer: 'Monetary policy &#8212; primarily the setting of the Bank Rate, supplemented by quantitative easing or tightening and forward guidance &#8212; is the UK&#39;s main tool for controlling inflation, with the Bank of England mandated to keep CPI at 2%. A rise in the Bank Rate raises commercial interest rates, dampening consumption and investment and slowing aggregate demand growth; higher rates also attract capital inflows, appreciating sterling and reducing import prices. Extract B illustrates this in action: facing 11.1% CPI inflation, the MPC raised rates fourteen times consecutively from 0.10% to 5.25%, eventually returning inflation closer to target. This shows monetary policy can be highly effective when the cause is demand-driven, when the Bank acts credibly, and when its 2% target anchors expectations. However, several factors limit effectiveness. First, monetary policy operates with long and variable lags &#8212; typically 18&#8211;24 months &#8212; meaning rate changes today address inflation expected years ahead. Extract B notes critics arguing the rate rises came too late to prevent a wage-price spiral. Second, much of the 2022 inflation was supply-driven (energy shock, post-pandemic bottlenecks); raising rates cannot directly lower oil prices and risks unnecessary damage to growth and employment. Third, an entrenched wage-price spiral, as hinted by 8.5% pay growth, can keep inflation high even as demand softens. Finally, the zero lower bound &#8212; as in 2020 &#8212; can disable conventional rate cuts during deflationary shocks, although QE provides a partial substitute. Overall, monetary policy is necessary but not sufficient. It is highly effective against demand-driven inflation and well-anchored expectations, but is blunt against supply shocks and slow to act. Effective inflation control therefore depends on the Bank acting credibly and pre-emptively, supported where appropriate by fiscal and supply-side policies. On balance, monetary policy can control inflation, but only within these limits.'
      }
    ]
  },

  /* ── Right-rail "What strong answers do" ──────────────────── */
  strongAnswers: [
    'Use the context directly',
    'Develop the chain of analysis',
    'Apply a relevant diagram or example',
    'Reach a supported judgement'
  ]
};

/* ---- land-section-c.js ---- */
/* ============================================================
   ECONOS – Land It · Section C data for inflation
   ============================================================ */

window.ECONOS_LAND_SECTION_C = {
  topic:        'Causes of Inflation & Deflation',
  sectionLabel: 'Section C – Essay',
  backUrl:      TopicLoader.routes.land('intro'),

  /* In the exam there are two options; here we present one. */
  question: {
    id:          'qc',
    commandWord: 'Evaluate',
    stem:        'Evaluate the policies that the UK government and the Bank of England could use to reduce the rate of inflation.',
    marks:       25,
    suggestedMinutes: 30,

    structureTips: [
      'Define inflation briefly and identify whether the causes are demand-pull, cost-push, or both.',
      'Cover monetary policy (Bank Rate, QE/QT) with an AD/AS diagram showing AD shifting left.',
      'Cover fiscal policy &mdash; higher taxes or lower government spending &mdash; and its effect on AD.',
      'Include supply-side policy: addressing structural causes via productivity, investment, and skills.',
      'Apply UK evidence: the BoE&#39;s 14 consecutive rate rises from 0.10% to 5.25% during 2021&ndash;23.',
      'Evaluate each policy: lags, trade-offs, political and supply-side limits.',
      'Reach a clear, supported judgement &mdash; which policy is most effective and under what conditions?'
    ],

    modelAnswer:
      '<p>Inflation in the UK is measured by the Consumer Prices Index, with the Bank of England mandated by HM Treasury to keep CPI at a 2% target. When inflation deviates significantly from target &mdash; as it did in 2022, peaking at 11.1% &mdash; the Bank and government have a range of demand-side and supply-side tools available, though the effectiveness of each depends on the underlying cause of inflation.</p>'
    + '<p>The Bank of England&#39;s primary tool is the Bank Rate. Raising the Bank Rate increases the cost of borrowing and the return on saving, dampening consumer spending and business investment. This shifts aggregate demand to the left, reducing upward pressure on the price level along the SRAS curve. A higher Bank Rate also typically attracts capital inflows, appreciating sterling and reducing imported inflation &mdash; an especially important channel in an open economy like the UK. The Bank&#39;s fourteen consecutive rate rises from 0.10% to 5.25% during 2021&ndash;23 illustrate this in action, contributing to CPI falling back towards target. The Bank can also use quantitative tightening to reduce the broad money supply, further restraining aggregate demand.</p>'
    + '<p>Fiscal policy offers a complementary demand-side tool. A contractionary fiscal stance &mdash; higher taxes or lower government spending &mdash; reduces aggregate demand directly. Sustained high taxes and real-terms spending restraint in 2023 supported the Bank&#39;s monetary tightening. However, fiscal policy faces political constraints: tax rises and spending cuts are unpopular, and parliamentary processes make timing difficult. The UK&#39;s elevated debt-to-GDP ratio (above 100%) also limits scope for active fiscal stabilisation, particularly where debt-servicing costs already crowd out other spending.</p>'
    + '<p>Supply-side policies provide a structural response. Investment in skills, infrastructure and productivity-enhancing reform can shift the LRAS curve to the right, raising the economy&#39;s non-inflationary speed limit and addressing cost-push pressures that demand-side policy cannot reach. For example, sustained investment in domestic energy infrastructure could reduce future vulnerability to global energy shocks, while reform of planning and labour market rules could reduce bottleneck-driven price pressures. However, supply-side reforms work over years, not months, and offer little help in an immediate inflation crisis.</p>'
    + '<p>All three policies face significant constraints. Monetary policy operates with long and variable lags &mdash; the Bank itself estimates 18&ndash;24 months &mdash; meaning rate decisions today target inflation expected several years ahead. Aggressive rate rises risk recession and rising unemployment, raising the question of an acceptable trade-off. Fiscal tightening can deepen any downturn. And supply-side policy, while powerful, is too slow to break an active wage-price spiral.</p>'
    + '<p>In conclusion, no single policy can effectively control inflation in all circumstances. Monetary policy is best suited to demand-driven inflation when expectations remain anchored, and is rightly the UK&#39;s first line of defence. Fiscal policy provides essential support but is politically and fiscally constrained. Supply-side reform addresses structural causes over the long run but cannot solve a current crisis. The most effective approach therefore combines all three, deployed with credibility and based on a clear diagnosis of the inflation&#39;s cause &mdash; with the Bank of England leading on cyclical control, supported by complementary fiscal restraint and a steady programme of structural reform.</p>'
  },

  strongAnswers: [
    'Define key terms precisely up front',
    'Apply at least one accurate AD/AS diagram',
    'Use specific UK evidence (rates, dates, figures)',
    'Develop both sides before reaching judgement',
    'Conclude with a clear, supported decision'
  ]
};

