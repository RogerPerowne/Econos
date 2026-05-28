/* ============================================================
   ECONOS – Land It · consolidated section data
   Concatenated from per-section files at v0.4.0. Quiz pools
   from the former quiz-*.js shells are folded in here too —
   the questions live on as Land It content.
   ============================================================ */

/* ---- land-complete.js ---- */
/* ============================================================
   ECONOS – Land It complete page data
   Topic: Fiscal Policy (2.12)
   ============================================================ */

window.ECONOS_LAND_COMPLETE = {
  topic:   'Fiscal Policy',
  nextUrl: '/',

  sections: {
    A: { label: 'Section A', sublabel: 'Short questions',    color: '#ec2d68' },
    B: { label: 'Section B', sublabel: 'Extended response',  color: '#f59e0b' },
    C: { label: 'Section C', sublabel: 'Essay',              color: '#2563eb' }
  },

  nextCard: {
    icon:  '&#x1F680;',
    title: 'What to do next',
    text:  'Compare your written answers with the model responses. Note where your chains of analysis could be extended &#8211; particularly on the multiplier mechanism, the crowding-out debate, and the conditions under which fiscal policy is most effective. If your Section C essay lacked a clear conditional judgement, practise constructing one before moving to the next topic.'
  }
};

/* ---- land-intro.js ---- */
/* ============================================================
   ECONOS – Land It intro page data
   Topic: Fiscal Policy (2.12)
   ============================================================ */

window.ECONOS_LAND_INTRO = {
  topic:        'Fiscal Policy',
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
    'Interpreting fiscal data: deficits, debt, and OBR forecasts',
    'Building extended chains of analysis using the multiplier and AD&#47;AS model',
    'Evaluating fiscal policy trade-offs with crowding out, time lags, and debt sustainability',
    'Constructing a balanced essay on expansionary fiscal policy and recessions'
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
   ECONOS – Land It · Section A data for Fiscal Policy
   Topic: Fiscal Policy (2.12)
   ============================================================ */

window.ECONOS_LAND_SECTION_A = {
  topic:        'Fiscal Policy',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.routes.land('intro'),

  questions: [

    /* ── Q1 – Government budget: deficit, surplus, and debt ── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'Government budget: deficit, surplus, and national debt',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '&#163;', label: 'UK Public Sector Net Borrowing (2022&#8211;23)', value: '&#163;127bn'        },
          { color: 'rose',  icon: '%',      label: 'Deficit as % of GDP (2022&#8211;23)',            value: '5.1%'               },
          { color: 'blue',  icon: '&#163;', label: 'UK National Debt (2023)',                        value: '&#163;2.7 trillion' },
          { color: 'blue',  icon: '%',      label: 'Debt as % of GDP (2023)',                        value: '~100%'              }
        ]
      },

      parts: [
        {
          id:     'q1a',
          letter: 'a',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following correctly distinguishes a budget deficit from the national debt?',
          options: [
            { id: 'opt-a', text: 'The deficit is a stock; the national debt is a flow'                                     },
            { id: 'opt-b', text: 'The deficit is a flow in one year; the national debt is the accumulated stock of borrowing' },
            { id: 'opt-c', text: 'The deficit measures total government spending; the debt measures total tax revenue'      },
            { id: 'opt-d', text: 'The deficit only arises in recessions; the national debt is constant over time'          }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The budget deficit is a flow &#8212; the gap between government spending and tax revenue in a single year. The national debt is a stock &#8212; the accumulated total of all past borrowing that has not yet been repaid.',
          feedbackWrong:   'The correct answer is B. The deficit is a flow concept: it measures how much more the government spends than it receives in taxes in one year. The national debt is a stock: it accumulates all past deficits (minus any surpluses) over time. In 2022&#8211;23 the UK ran a deficit of &#163;127bn, adding to a national debt of around &#163;2.7 trillion.'
        },
        {
          id:          'q1b',
          letter:      'b',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain two possible consequences of a high national debt for the UK economy.',
          hint:        '4-mark response &#8212; identify two distinct consequences and develop each with an economic explanation.',
          modelAnswer: 'First, a high national debt of &#163;2.7 trillion generates large annual interest payments &#8212; the UK pays over &#163;100bn per year in debt interest. This crowds out other government spending on public services and infrastructure, reducing the government&#39;s ability to respond to future economic shocks without further borrowing. As debt rises, debt-servicing costs grow, creating a self-reinforcing fiscal constraint. Second, a national debt approaching 100% of GDP may undermine market confidence in the government&#39;s long-run fiscal sustainability. If investors doubt the government&#39;s ability to service its debt, they will demand higher yields on government bonds (gilts) to compensate for perceived risk. Higher gilt yields raise the government&#39;s borrowing costs still further and can also push up interest rates across the wider economy, crowding out private investment and slowing economic growth.'
        }
      ]
    },

    /* ── Q2 – The multiplier effect ─────────────────────────── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'The multiplier effect',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '&#163;', label: 'Government infrastructure spending increase',       value: '&#163;10bn'    },
          { color: 'green', icon: '%',      label: 'Marginal propensity to consume (MPC)',               value: '0.75'          },
          { color: 'rose',  icon: '%',      label: 'Marginal propensity to import (MPM)',                value: '0.20'          },
          { color: 'amber', icon: '%',      label: 'Marginal propensity to tax (MPT)',                   value: '0.25'          }
        ]
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain how the multiplier effect works and calculate the approximate final change in national income from the &#163;10bn spending increase.',
          hint:        '4-mark response &#8212; explain the mechanism and apply the multiplier formula to the data.',
          modelAnswer: 'The multiplier effect occurs because an initial injection of government spending generates successive rounds of additional income and spending in the economy. When the government spends &#163;10bn on infrastructure, this creates incomes for construction workers and firms. These recipients spend a fraction of their additional income (determined by the MPC), creating further income for others, and so on. Each round is smaller than the last because some income leaks out via savings, taxation, and imports. The size of the multiplier can be estimated as 1 &#247; (1 &#8722; MPC + MPM + MPT) = 1 &#247; (1 &#8722; 0.75 + 0.20 + 0.25) = 1 &#247; 0.70 &#8776; 1.43. Applying this to the initial injection: &#163;10bn &#215; 1.43 &#8776; &#163;14.3bn. The total rise in national income is therefore approximately &#163;14.3bn &#8212; significantly larger than the original spending increase, illustrating the amplifying effect of the multiplier.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following factors would most increase the size of the fiscal multiplier?',
          options: [
            { id: 'opt-a', text: 'A higher marginal propensity to import'                              },
            { id: 'opt-b', text: 'A higher marginal propensity to save'                                },
            { id: 'opt-c', text: 'A lower marginal propensity to tax combined with a lower import share' },
            { id: 'opt-d', text: 'A higher rate of corporation tax'                                    }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. The multiplier is larger when leakages are smaller. A lower marginal propensity to tax and a lower import share both reduce leakages from the circular flow, so each round of spending is larger and the total multiplied effect is greater.',
          feedbackWrong:   'The correct answer is C. The fiscal multiplier equals 1 &#247; (MPS + MPT + MPM). Any reduction in leakages &#8212; saving, taxation, or imports &#8212; increases the multiplier. Options A, B, and D all increase leakages, reducing the multiplier.'
        }
      ]
    },

    /* ── Q3 – Automatic stabilisers ─────────────────────────── */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'Automatic stabilisers',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from OBR Economic and Fiscal Outlook, November 2022',
        text:   'The OBR forecast that the UK economy would enter a recession in the second half of 2022, with GDP forecast to fall by 1.4% over 2023. As growth slowed and unemployment rose, tax revenues were expected to fall sharply &#8212; particularly receipts from income tax, National Insurance, and VAT. At the same time, social security spending, including Universal Credit and Housing Benefit, was projected to rise automatically, partially offsetting the fall in households&#39; disposable incomes. The OBR estimated these automatic stabilisers would add around &#163;35bn to borrowing over the two-year forecast period.'
      },

      parts: [
        {
          id:     'q3a',
          letter: 'a',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following best describes an automatic stabiliser?',
          options: [
            { id: 'opt-a', text: 'A government decision to increase public spending during a recession'                                  },
            { id: 'opt-b', text: 'A fiscal mechanism that responds automatically to economic conditions without new government decisions' },
            { id: 'opt-c', text: 'The Bank of England cutting interest rates in response to falling GDP'                                 },
            { id: 'opt-d', text: 'A balanced budget rule that prevents the government from running a deficit'                            }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Automatic stabilisers are built-in features of the fiscal system &#8212; such as progressive taxation and welfare benefits &#8212; that respond to changing economic conditions without requiring any new policy decision by the government.',
          feedbackWrong:   'The correct answer is B. Automatic stabilisers work without any new government decision: when the economy slows, tax revenues fall automatically and welfare spending rises automatically, cushioning the fall in aggregate demand. This contrasts with discretionary fiscal policy, which requires an active government decision.'
        },
        {
          id:          'q3b',
          letter:      'b',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain how automatic stabilisers help to stabilise the economy during a recession.',
          hint:        '4-mark response &#8212; identify two stabilisers from the extract and explain the mechanism by which each cushions the impact of the recession.',
          modelAnswer: 'During a recession, automatic stabilisers cushion the fall in aggregate demand through two main channels. First, tax revenues fall automatically: as the OBR noted, income tax, National Insurance, and VAT receipts all decline as employment and consumer spending fall. This means households retain a larger share of their already-reduced income than would otherwise be the case, slowing the fall in consumption and limiting the leftward shift in aggregate demand. Second, welfare spending rises automatically: Universal Credit and Housing Benefit payments increase as unemployment rises, as the extract identifies. This transfer of income to those who have lost jobs &#8212; who tend to have a high marginal propensity to consume &#8212; partially replaces lost wages and again limits the contraction in aggregate demand. Together, these mechanisms reduce the severity of the recession without requiring any new government decision, adding around &#163;35bn to borrowing but preventing a larger collapse in national income.'
        }
      ]
    },

    /* ── Q4 – Expansionary vs contractionary fiscal policy ─── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'Expansionary and contractionary fiscal policy',
      marks:    5,

      context: {
        type:       'data-table',
        tableTitle: 'UK fiscal policy measures, selected years',
        headers:    ['Measure', 'Year', 'Type', 'Scale'],
        rows: [
          { label: 'Fiscal stimulus package', values: ['2009', 'Expansionary', 'VAT cut to 15%; &#163;20bn spending boost'] },
          { label: 'Emergency Budget',        values: ['2010', 'Contractionary', 'VAT rise to 20%; departmental cuts ~25%'] },
          { label: 'COVID-19 furlough scheme', values: ['2020', 'Expansionary', '&#163;70bn+ wage support; 80% of salary'] },
          { label: 'Autumn Statement',        values: ['2022', 'Contractionary', '&#163;55bn fiscal consolidation package'] }
        ]
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain the likely macroeconomic effects of the 2009 expansionary fiscal policy and the 2010 contractionary fiscal policy.',
          hint:        '4-mark response &#8212; use the AD&#47;AS framework to explain the effects of each policy on output, employment, and the price level.',
          modelAnswer: 'The 2009 expansionary fiscal policy &#8212; including a VAT cut to 15% and a &#163;20bn spending boost &#8212; was designed to shift aggregate demand to the right. Lower VAT reduced prices and boosted consumer spending power, while the spending increase directly added to the components of AD. The resulting rightward shift in AD would, in theory, increase real GDP and reduce unemployment, though the degree of stimulus would depend on the size of the fiscal multiplier and the extent of spare capacity. The 2010 contractionary measures &#8212; raising VAT to 20% and cutting departmental spending by around 25% &#8212; shifted aggregate demand to the left. Higher VAT reduced households&#39; real purchasing power, while spending cuts reduced the government component of AD directly. This was intended to reduce the budget deficit, but at the cost of slower growth and potential job losses in the public sector, as critics of the &#8220;austerity&#8221; policy argued.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following policies represents a contractionary fiscal stance?',
          options: [
            { id: 'opt-a', text: 'Increasing the personal tax allowance'                     },
            { id: 'opt-b', text: 'Raising government spending on infrastructure'             },
            { id: 'opt-c', text: 'Introducing a new employment subsidy scheme'               },
            { id: 'opt-d', text: 'Increasing the rate of VAT and cutting welfare expenditure' }
          ],
          correct:         'opt-d',
          feedbackCorrect: 'Correct. Raising VAT reduces household real incomes and spending, while cutting welfare expenditure reduces transfer payments and lowers aggregate demand. Both actions reduce the fiscal deficit &#8212; a contractionary stance.',
          feedbackWrong:   'The correct answer is D. Contractionary fiscal policy reduces aggregate demand by increasing taxation or cutting government spending. Raising VAT and cutting welfare both withdraw spending power from the economy, shifting AD to the left. Options A, B, and C all increase disposable income or government spending, making them expansionary.'
        }
      ]
    },

    /* ── Q5 – Laffer curve and supply-side fiscal effects ──── */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'The Laffer curve and supply-side fiscal effects',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from HM Treasury commentary on the September 2022 Mini-Budget',
        text:   'The September 2022 &#8220;Mini-Budget&#8221; announced a cut in the 45p additional-rate income tax band to 40p, alongside a reduction in the basic rate from 20p to 19p. Proponents argued that lower marginal tax rates would improve work incentives, encourage high-income earners to remain in the UK rather than relocate, and potentially increase taxable income enough to partially offset the revenue cost &#8212; consistent with the logic of the Laffer curve. Critics argued the cuts would primarily benefit high earners, widen inequality, add to the deficit, and were unlikely to generate sufficient growth to compensate for the revenue loss. Financial markets reacted sharply: gilt yields spiked and sterling fell, prompting the reversal of many measures within weeks.'
        },

      parts: [
        {
          id:     'q5a',
          letter: 'a',
          marks:  1,
          type:   'mcq',
          stem:   'The Laffer curve suggests that cutting a very high marginal tax rate could increase total tax revenue because:',
          options: [
            { id: 'opt-a', text: 'Government spending falls, reducing the deficit'                                                                },
            { id: 'opt-b', text: 'Higher post-tax incomes boost consumer confidence'                                                             },
            { id: 'opt-c', text: 'Lower rates incentivise more work and economic activity, expanding the tax base and raising total receipts'    },
            { id: 'opt-d', text: 'Central bank independence prevents the government from running a deficit'                                      }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. The Laffer curve argument is that above a certain tax rate, cutting the rate increases the incentive to work and earn, expanding the taxable base. If the supply-side response is large enough, total revenue rises even though the rate is lower.',
          feedbackWrong:   'The correct answer is C. The Laffer curve shows that tax revenue is zero at both a 0% rate and a 100% rate, with a maximum somewhere between. If tax rates are on the prohibitive side of the curve, cutting the rate can increase the tax base &#8212; through more work, less avoidance, and less emigration &#8212; sufficiently to raise total receipts.'
        },
        {
          id:          'q5b',
          letter:      'b',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain two arguments for and against using income tax cuts as a supply-side policy measure.',
          hint:        '4-mark response &#8212; use evidence from the extract and explain one argument for and one argument against clearly.',
          modelAnswer: 'One argument in favour is that lower marginal tax rates improve work incentives at the margin. As the extract notes, proponents argued that reducing the additional rate from 45p to 40p would encourage high-income earners to work more hours, take on additional responsibilities, and choose to remain domiciled in the UK rather than relocate to lower-tax jurisdictions. If the resulting increase in economic activity is large enough &#8212; the Laffer curve logic &#8212; the revenue cost may be smaller than the headline rate cut implies, or could even be self-financing. One argument against is that the revenue cost risks widening the budget deficit and adding to national debt, particularly if the supply-side response is small. Critics cited in the extract questioned whether the growth effects would materialise, and the market reaction &#8212; rising gilt yields and a falling pound &#8212; illustrated that investors were not persuaded the fiscal position remained sustainable. If markets lose confidence, borrowing costs rise, potentially reversing any supply-side gains.'
        }
      ]
    }

  ]
};

/* ---- land-section-b.js ---- */
/* ============================================================
   ECONOS – Land It · Section B data for Fiscal Policy
   Topic: Fiscal Policy (2.12)
   ============================================================ */

window.ECONOS_LAND_SECTION_B = {
  topic:        'Fiscal Policy',
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
        title:       'The UK fiscal position, 2022&#8211;23',
        tags:        ['&#163;127bn deficit', '~100% debt&#47;GDP', 'OBR forecasts', 'Autumn Statement 2022'],
        defaultOpen: true,
        paragraphs: [
          'In 2022&#8211;23 the UK government borrowed &#163;127 billion &#8212; equivalent to 5.1% of GDP &#8212; as elevated energy support schemes, pandemic-related spending, and weak growth kept the deficit high. The national debt reached approximately &#163;2.7 trillion, pushing the debt-to-GDP ratio close to 100% for the first time since the 1960s.',
          'The Office for Budget Responsibility (OBR) forecast in November 2022 that the UK would enter a recession, with GDP contracting by 1.4% in 2023. Against this backdrop, Chancellor Jeremy Hunt&#39;s Autumn Statement announced a &#163;55 billion fiscal consolidation package, combining spending cuts and tax rises, including a freeze on income tax thresholds that amounted to a real-terms tax increase for millions of households.',
          'The OBR warned that rising debt-interest costs &#8212; projected to exceed &#163;100 billion per year &#8212; were crowding out productive public investment. Critics of the consolidation argued that cutting spending into a forecast recession risked deepening the downturn and could prove self-defeating if falling tax revenues offset the intended savings.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'The multiplier and fiscal stimulus',
        tags:        ['multiplier effect', 'MPC', 'leakages', 'fiscal space'],
        defaultOpen: false,
        paragraphs: [
          'The fiscal multiplier measures the final change in national income resulting from a unit change in government spending or taxation. When an initial injection of government spending creates incomes, recipients spend a proportion &#8212; determined by the marginal propensity to consume (MPC) &#8212; generating further rounds of income and spending across the economy. Leakages through saving, taxation, and imports reduce each successive round, so the multiplier is larger in economies with a high MPC and low import dependency.',
          'Estimates of the UK fiscal multiplier have varied considerably. The IMF revised its estimates upward after the 2010 austerity period, suggesting multipliers in the range of 0.9&#8211;1.7 during recessions when monetary policy is constrained by the zero lower bound and spare capacity is available. In contrast, multipliers tend to be smaller during periods of full employment, when additional government spending competes with private sector demand and is more likely to generate inflation than real output growth.',
          'A key consideration for fiscal stimulus is the availability of &#8220;fiscal space&#8221; &#8212; the government&#39;s capacity to borrow without triggering adverse market reactions. With UK debt approaching 100% of GDP and annual debt-interest payments above &#163;100 billion, the OBR noted that the government had limited room to use discretionary fiscal stimulus without risking a loss of market confidence in debt sustainability.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'The Keynesian case for deficit spending in recession',
        tags:        ['Keynes', 'paradox of thrift', 'aggregate demand', 'cyclical deficit'],
        defaultOpen: false,
        paragraphs: [
          'Keynesians argue that in a recession, the private sector reduces spending simultaneously, creating a &#8220;paradox of thrift&#8221;: individually rational saving decisions collectively deepen the downturn by reducing aggregate demand further. In such circumstances, the government is uniquely placed to step in as the &#8220;spender of last resort&#8221;, borrowing to inject demand into the economy and preventing a spiral of falling output, rising unemployment, and collapsing tax revenues.',
          'The Keynesian argument is strengthened when monetary policy is ineffective &#8212; for example, when interest rates are already at or near zero and further cuts are impossible. In this &#8220;liquidity trap&#8221; scenario, only fiscal expansion can stimulate aggregate demand. Proponents point to the 2009 G20 coordinated fiscal stimulus as evidence: countries that maintained spending fared better than those that tightened prematurely.',
          'Critics, however, argue that deficit spending risks crowding out private investment as higher government borrowing pushes up interest rates. Supply-side economists contend that the long-run costs of higher debt &#8212; increased tax burden on future generations, reduced fiscal flexibility, and potential sovereign risk &#8212; outweigh the short-run stabilisation benefits. They favour a balanced budget or rules-based approach, relying instead on automatic stabilisers and monetary policy to manage the cycle.'
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
        stem:   'Explain two possible impacts of a government budget deficit on the economy.',
        tips: [
          'Identify two distinct impacts (e.g. stimulus to AD, higher national debt, crowding out, inflationary pressure).',
          'For each impact, explain the economic mechanism clearly &#8212; do not simply assert the outcome.',
          'Where relevant, refer to the context pack data (e.g. the UK&#39;s &#163;127bn deficit and ~100% debt&#47;GDP ratio).'
        ],
        modelAnswer: 'One impact of a budget deficit is that it provides a stimulus to aggregate demand. When the government spends more than it collects in taxes &#8212; as the UK did to the tune of &#163;127 billion in 2022&#8211;23 &#8212; it injects additional demand into the circular flow of income. Government spending is a component of aggregate demand (AD = C + I + G + X &#8211; M), so the direct increase in G shifts the AD curve to the right. Through the multiplier effect, the final rise in national income may be larger than the initial deficit, supporting output and employment. This can be particularly beneficial in a recession when private sector spending is depressed. A second impact is that persistent deficits add to the national debt, which reached approximately &#163;2.7 trillion (around 100% of GDP) by 2023. Rising debt generates growing interest payments &#8212; projected to exceed &#163;100 billion per year &#8212; which crowd out other public spending. If debt is perceived by markets as unsustainable, gilt yields may rise, increasing the government&#39;s borrowing costs and potentially deterring private investment across the wider economy.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extracts A and B, examine the likely effects of government spending cuts during a recession.',
        tips: [
          'Define the context: the UK faced a forecast recession in 2022&#8211;23 while implementing &#163;55bn of fiscal consolidation.',
          'Explain the direct effect of spending cuts on aggregate demand &#8212; use the AD&#47;AS framework.',
          'Apply the multiplier: use Extract B to explain why the negative multiplier may be large during a recession.',
          'Consider the argument in Extract A that cuts could be &#8220;self-defeating&#8221; &#8212; falling revenues offsetting intended savings.',
          'Present a balanced view: also consider the benefits of consolidation (market confidence, lower debt-interest costs).'
        ],
        modelAnswer: 'Government spending cuts during a recession directly reduce aggregate demand. G is a component of AD, so a fall in public expenditure shifts the AD curve to the left, reducing real GDP and increasing unemployment. Extract A confirms this concern: with the OBR forecasting a 1.4% contraction in UK GDP for 2023, critics argued that the &#163;55 billion Autumn Statement consolidation risked deepening the downturn at precisely the wrong moment in the economic cycle. The effect is amplified by the multiplier. Extract B notes that IMF research suggests multipliers of 0.9&#8211;1.7 during recessions, particularly when the economy has spare capacity and monetary policy is constrained. This means each pound cut from spending could reduce national income by more than a pound, as reduced public sector incomes lead to lower consumer spending, which in turn reduces business revenues and employment. A smaller tax base then reduces government revenues &#8212; making the deficit reduction self-defeating, as Extract A acknowledges. Workers made redundant in the public sector may claim benefits, further adding to spending. However, there are arguments for consolidation during a period of elevated debt. With national debt close to 100% of GDP and annual debt-interest costs exceeding &#163;100 billion, Extract A notes the OBR&#39;s concern that interest payments are crowding out productive investment. Restoring fiscal credibility may lower gilt yields over time, reducing the cost of servicing debt and rebuilding the fiscal headroom needed to respond to future shocks. On balance, the evidence from Extracts A and B suggests that spending cuts in a deep recession are likely to reduce output and employment in the short run &#8212; with the multiplied negative effects potentially offsetting a significant portion of the planned savings &#8212; though the long-run costs of sustained high debt remain a legitimate concern.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss the effectiveness of fiscal policy in reducing unemployment in the UK. Refer to the extracts and your own knowledge.',
        tips: [
          'Define fiscal policy and distinguish expansionary (demand-side) from supply-side fiscal measures.',
          'Explain how expansionary fiscal policy reduces cyclical unemployment via the AD&#47;AS framework.',
          'Use Extract B (multiplier) and Extract C (Keynesian case) to support the case for fiscal stimulus.',
          'Evaluate the limits: fiscal space constraints (Extract A), time lags, crowding out, structural vs cyclical unemployment.',
          'Consider that fiscal policy cannot address structural unemployment without supply-side reforms.',
          'Reach a clear, supported judgement on overall effectiveness.'
        ],
        modelAnswer: 'Fiscal policy &#8212; the use of government spending and taxation to influence aggregate demand &#8212; can be an effective tool for reducing unemployment, but its effectiveness depends critically on the type of unemployment, the state of the public finances, and whether monetary policy is available as an alternative. Expansionary fiscal policy directly addresses cyclical unemployment by shifting aggregate demand to the right. A rise in government spending on infrastructure, for example, directly employs construction workers and, through the multiplier, generates further employment as their incomes create demand across the economy. Extract B confirms that during recessions, with spare capacity and interest rates near zero, multipliers can reach 0.9&#8211;1.7, meaning a &#163;10 billion spending increase could generate &#163;9&#8211;17 billion of additional national income and the associated employment. Extract C reinforces this with the Keynesian argument: when the private sector is simultaneously cutting back, government is uniquely placed to act as &#8220;spender of last resort&#8221;, preventing the paradox of thrift from deepening unemployment. The 2009 global fiscal stimulus &#8212; including the UK VAT cut and spending boosts &#8212; is cited by Keynesians as evidence that coordinated fiscal expansion can stabilise output and preserve jobs. However, fiscal policy faces significant limitations. First, as Extract A shows, the UK government entered the 2022&#8211;23 downturn with a deficit of &#163;127 billion and debt near 100% of GDP. This severely constrained its ability to use discretionary fiscal stimulus without risking a loss of market confidence &#8212; as the September 2022 Mini-Budget demonstrated when gilt yields spiked and sterling fell sharply. The government instead chose consolidation, prioritising debt sustainability over short-run demand support. Second, fiscal policy cannot easily reduce structural unemployment &#8212; caused by skills mismatches, regional imbalances, or technological displacement &#8212; through spending alone. Supply-side fiscal measures, such as investment in training, education, and infrastructure, are better suited to structural unemployment but work slowly over many years. Third, even effective stimulus requires careful timing: parliamentary processes mean fiscal decisions are slow to implement and difficult to reverse, risking stimulus arriving after the economy has already recovered, potentially causing inflation. Finally, if higher government borrowing pushes up interest rates &#8212; the crowding-out argument &#8212; private investment may fall, partially offsetting any reduction in unemployment. Overall, fiscal policy is an effective tool for reducing cyclical unemployment, particularly when the economy has significant spare capacity, monetary policy is constrained, and the government has sufficient fiscal space. In the UK context of 2022&#8211;23, the limited fiscal headroom reduced the government&#39;s ability to deploy large-scale stimulus. Fiscal policy is therefore necessary but not sufficient: its effectiveness is greatest when combined with monetary policy, automatic stabilisers, and long-run supply-side reform targeted at structural unemployment.'
      }
    ]
  },

  /* ── Right-rail "What strong answers do" ──────────────────────── */
  strongAnswers: [
    'Use extract data directly (figures, dates, and context)',
    'Develop the chain of analysis step by step',
    'Apply the AD&#47;AS framework with accuracy',
    'Reach a balanced, supported judgement'
  ]
};

/* ---- land-section-c.js ---- */
/* ============================================================
   ECONOS – Land It · Section C data for Fiscal Policy
   Topic: Fiscal Policy (2.12)
   ============================================================ */

window.ECONOS_LAND_SECTION_C = {
  topic:        'Fiscal Policy',
  sectionLabel: 'Section C &#8212; Essay',
  backUrl:      TopicLoader.routes.land('intro'),

  /* In the exam there are two options; here we present one. */
  question: {
    id:          'qc',
    commandWord: 'Evaluate',
    stem:        'Evaluate the view that expansionary fiscal policy is the most appropriate response to a recession.',
    marks:       25,
    suggestedMinutes: 30,

    structureTips: [
      'Define recession and expansionary fiscal policy; distinguish from automatic stabilisers.',
      'Explain the Keynesian case: the paradox of thrift, the multiplier, and the role of government as &#8220;spender of last resort&#8221;.',
      'Apply the AD&#47;AS diagram: rightward shift of AD from higher G or tax cuts → higher real GDP, lower unemployment.',
      'Present the case for using monetary policy instead &#8212; speed, flexibility, and independence from political pressures.',
      'Evaluate the limits of expansionary fiscal policy: crowding out, time lags, debt sustainability, inflationary risk.',
      'Consider when fiscal policy is most effective: liquidity trap, zero lower bound, large negative output gap.',
      'Reach a clear, supported judgement &#8212; under what conditions is fiscal expansion the most appropriate response?'
    ],

    modelAnswer:
      '<p>A recession is conventionally defined as two consecutive quarters of negative real GDP growth. It is characterised by falling aggregate demand, rising unemployment, and a growing negative output gap. Expansionary fiscal policy involves increasing government spending, reducing taxation, or both, with the aim of shifting aggregate demand to the right and restoring output and employment towards potential. The Keynesian view holds that this is precisely the appropriate response; the question is whether it is the <em>most</em> appropriate.</p>'
    + '<p>The Keynesian case for fiscal expansion in recession rests on the paradox of thrift: when households and firms simultaneously cut spending, individually rational behaviour collectively deepens the downturn, reducing incomes and tax revenues further. The government, as the only agent unconstrained by falling private income, can break this cycle by increasing its own expenditure or cutting taxes to boost household disposable income. An increase in government spending directly raises the government component of aggregate demand (AD = C + I + G + X &#8722; M), shifting the AD curve to the right. Crucially, the multiplier amplifies this initial injection: each pound of government spending creates incomes for workers and firms, who spend a fraction &#8212; determined by the marginal propensity to consume &#8212; generating further rounds of demand. With the UK MPC estimated at around 0.6&#8722;0.7 and allowing for leakages, multipliers of 1.3&#8722;1.7 are plausible when significant spare capacity exists and monetary policy is constrained. The 2009 G20 coordinated fiscal stimulus &#8212; including the UK&#39;s VAT cut to 15% and &#163;20 billion spending boost &#8212; illustrates this approach, and IMF research subsequently suggested it helped limit the depth of the global recession relative to a counterfactual with no stimulus.</p>'
    + '<p>The case for fiscal expansion is particularly strong when monetary policy is unable to fulfil its stabilising role. When the Bank Rate is at or near zero &#8212; as in 2009 and 2020 &#8212; conventional interest rate cuts are no longer available, and the economy may be trapped in a &#8220;liquidity trap&#8221; where further reductions in borrowing costs do not stimulate spending. In this environment, fiscal policy is not merely desirable but arguably the only tool capable of directly expanding aggregate demand. The 2020 COVID-19 response &#8212; including the &#163;70 billion furlough scheme &#8212; demonstrates that large-scale fiscal intervention can sustain household incomes and prevent permanent labour market scarring when the economy is struck by a severe demand shock.</p>'
    + '<p>However, expansionary fiscal policy faces several significant limitations. First, crowding out: higher government borrowing increases the public sector&#39;s demand for loanable funds, potentially pushing up interest rates and discouraging private investment. If the fiscal stimulus is largely offset by falls in private capital expenditure, the net impact on AD may be modest. Second, time lags: unlike monetary policy, which the Bank of England can adjust at eight meetings per year, fiscal changes require parliamentary approval and procurement processes that delay their impact. Infrastructure spending, in particular, may not reach the economy until the recession has already ended, risking a procyclical stimulus that generates inflation rather than real output growth. Third, debt sustainability: if the government already carries a high debt burden &#8212; as the UK did with national debt near 100% of GDP in 2022&#8211;23 &#8212; further borrowing risks triggering adverse market reactions, rising gilt yields, and a self-defeating loss of fiscal credibility. The September 2022 Mini-Budget illustrated this risk vividly: unfunded tax cuts caused gilt yields to spike and sterling to fall, forcing a swift policy reversal. Finally, the composition of any stimulus matters: poorly targeted spending may have a lower multiplier, while tax cuts for high-income households &#8212; who have a lower MPC &#8212; may leak substantially into saving.</p>'
    + '<p>Monetary policy offers an alternative. The Bank of England can respond quickly, symmetrically, and without the political pressures that complicate discretionary fiscal decisions. Rate cuts reduce borrowing costs across the whole economy, stimulating both consumption and business investment. However, as noted above, monetary policy loses its conventional effectiveness at the zero lower bound, and quantitative easing &#8212; while helpful &#8212; is a more indirect and uncertain tool. Supply-side policies can also support recovery by reducing structural unemployment and increasing potential output, but they operate over years rather than months and cannot address an immediate demand shortfall.</p>'
    + '<p>In conclusion, expansionary fiscal policy is the most appropriate response to a recession under specific conditions: when the output gap is large, when monetary policy is constrained by the zero lower bound, when the multiplier is high (i.e. spare capacity is available and import propensity is low), and when the government has sufficient fiscal space to borrow without alarming financial markets. Under these conditions &#8212; as in 2009 and 2020 &#8212; fiscal expansion can be highly effective and may be the only tool capable of restoring aggregate demand. Where these conditions do not hold &#8212; particularly when debt is already high and markets are sensitive to fiscal credibility &#8212; the risks of expansionary fiscal policy may outweigh its benefits, and a combination of automatic stabilisers, monetary easing, and targeted supply-side support may prove more appropriate. Fiscal policy is therefore a powerful but context-dependent tool; its appropriateness depends not on ideology but on the specific macroeconomic circumstances of the recession in question.</p>'
  },

  strongAnswers: [
    'Define key terms and set up the debate precisely',
    'Apply a well-labelled AD&#47;AS diagram to the analysis',
    'Use specific UK evidence (figures, dates, policy names)',
    'Develop both the case for and the limitations of fiscal expansion',
    'Conclude with a clear, conditional judgement'
  ]
};

