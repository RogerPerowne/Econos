/* ============================================================
   ECONOS — Land It · Section A data for Fiscal Policy
   Topic: Fiscal Policy (2.12)
   ============================================================ */

window.ECONOS_LAND_SECTION_A = {
  topic:        'Fiscal Policy',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

  questions: [

    /* ── Q1 — Government budget: deficit, surplus, and debt ── */
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

    /* ── Q2 — The multiplier effect ─────────────────────────── */
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

    /* ── Q3 — Automatic stabilisers ─────────────────────────── */
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

    /* ── Q4 — Expansionary vs contractionary fiscal policy ─── */
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

    /* ── Q5 — Laffer curve and supply-side fiscal effects ──── */
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
