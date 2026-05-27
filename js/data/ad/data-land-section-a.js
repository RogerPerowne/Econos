/* ============================================================
   ECONOS – Land It · Section A data for Aggregate Demand
   Topic: Aggregate Demand (2.7)
   ============================================================ */

window.ECONOS_LAND_SECTION_A = {
  topic:        'Aggregate Demand',
  sectionLabel: 'Section A &#8211; Short questions',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

  questions: [

    /* ── Q1 – Components of AD ───────────────────────────────── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'Components of aggregate demand',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%', label: 'Household consumption as % of UK GDP (2022)',           value: '61%'   },
          { color: 'green', icon: '%', label: 'Gross fixed capital formation (investment) as % of GDP', value: '18%'  },
          { color: 'rose',  icon: '%', label: 'General government spending as % of GDP',               value: '22%'  },
          { color: 'amber', icon: '%', label: 'UK net exports as % of GDP (2022)',                     value: '&#8722;2%' }
        ]
      },

      parts: [
        {
          id:     'q1a',
          letter: 'a',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following correctly states the formula for aggregate demand?',
          options: [
            { id: 'opt-a', text: 'AD = C &#8722; I + G + (X &#8722; M)'         },
            { id: 'opt-b', text: 'AD = C + I + G + (X &#8722; M)'               },
            { id: 'opt-c', text: 'AD = C + I &#8722; G + (X + M)'               },
            { id: 'opt-d', text: 'AD = C + I + G + (M &#8722; X)'               }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Aggregate demand is the total planned expenditure in an economy: consumption (C) plus investment (I) plus government spending (G) plus net exports (X &#8722; M). All four components add to demand; imports are subtracted because they represent spending on foreign rather than domestically produced goods.',
          feedbackWrong:   'The correct answer is B. AD = C + I + G + (X &#8722; M). Imports are subtracted from exports to give net exports &#8211; a negative value (as the UK data shows) means the country imports more than it exports, reducing net AD from abroad. All other components are positive additions to total demand.'
        },
        {
          id:          'q1b',
          letter:      'b',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain two factors that could cause household consumption to fall, and analyse the likely effect on aggregate demand.',
          hint:        '4-mark response &#8211; identify two distinct factors affecting consumption and develop the mechanism by which each reduces AD.',
          modelAnswer: 'First, a rise in interest rates reduces household consumption. When the Bank of England raises Bank Rate &#8211; as it did from 0.1% to 5.25% between 2021 and 2023 &#8211; the cost of mortgage repayments and consumer credit increases, reducing households&#39; disposable income. Those with variable-rate mortgages face an immediate squeeze, while first-time buyers find home purchase less affordable, reducing housing-related spending. Since consumption accounts for approximately 61% of UK GDP, even a modest fall in C produces a significant leftward shift in the AD curve, reducing real output and potentially raising unemployment. Second, a fall in consumer confidence causes households to save more and spend less &#8211; sometimes called &#8220;precautionary saving&#8221;. If households expect job losses or income falls &#8211; for example, during the cost-of-living crisis of 2022&#8211;23 when real wages fell sharply &#8211; they defer big-ticket purchases such as new cars and holidays. This direct reduction in C again shifts AD to the left, compounding the effect of rising interest rates and creating downward pressure on GDP growth.'
        }
      ]
    },

    /* ── Q2 – The multiplier effect ─────────────────────────── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'The multiplier effect and aggregate demand',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from the Office for Budget Responsibility, Economic and Fiscal Outlook, March 2023',
        text:   'The OBR estimated that households&#39; real disposable income fell by 2.5% in 2022&#8211;23 &#8211; the largest single-year fall since ONS records began in 1956. Energy bills accounted for a significant share of this squeeze, but rising food prices and mortgage costs compounded the effect. The OBR noted that consumer spending growth slowed sharply from 5.8% in 2021 to an estimated 0.4% in 2022, and forecast near-zero growth in 2023. The direct impact on GDP was partially offset by the government&#39;s Energy Price Guarantee, which capped typical household bills at &#163;2,500 per year, supporting incomes through the worst of the price shock.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain how a fall in consumer spending affects aggregate demand through the multiplier process.',
          hint:        '4-mark response &#8211; explain the mechanism of the reverse multiplier (negative multiplier) and use the data to support your answer.',
          modelAnswer: 'When consumer spending falls &#8211; as the extract shows happened in 2022 when growth slowed from 5.8% to just 0.4% &#8211; the effect on aggregate demand is amplified through the multiplier process. The initial fall in consumption directly reduces AD, since C is the largest component at around 61% of UK GDP. But the impact does not stop there: retailers and service businesses receive less revenue, so they reduce staffing and cut orders from suppliers. Workers facing reduced hours or job losses in turn cut their own spending, triggering further rounds of reduced income and expenditure. This &#8220;reverse multiplier&#8221; means the final fall in national income is larger than the initial drop in consumer spending. The size of the multiplied effect depends on leakages &#8211; the more income households save, pay in tax, or spend on imports, the smaller each successive round and the lower the multiplier. The government&#39;s Energy Price Guarantee partially counteracted this process by maintaining households&#39; disposable income, limiting the initial fall in C and thereby reducing the scale of the multiplied contraction in AD.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following would most increase the size of the multiplier?',
          options: [
            { id: 'opt-a', text: 'A higher marginal propensity to save'                                      },
            { id: 'opt-b', text: 'A higher marginal propensity to import'                                    },
            { id: 'opt-c', text: 'A lower marginal rate of income tax'                                       },
            { id: 'opt-d', text: 'A higher marginal propensity to withdraw income from the circular flow'    }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. A lower marginal rate of income tax reduces the tax leakage from each round of spending, meaning more income circulates within the domestic economy. This increases the multiplier, so any given injection of spending generates a larger final rise in national income.',
          feedbackWrong:   'The correct answer is C. The multiplier equals 1 &#247; (MPS + MPT + MPM). Reducing the marginal rate of income tax lowers MPT, which reduces total leakages and increases the multiplier. Options A, B, and D all increase leakages, which reduce the multiplier.'
        }
      ]
    },

    /* ── Q3 – Investment and interest rates ─────────────────── */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'Investment and interest rates',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '%',      label: 'Bank of England Bank Rate (August 2023)',          value: '5.25%'  },
          { color: 'blue',  icon: '%',      label: 'Bank Rate in December 2021',                       value: '0.25%'  },
          { color: 'amber', icon: '%',      label: 'UK business investment growth (2022)',              value: '&#8722;0.3%' },
          { color: 'green', icon: '&#163;', label: 'UK gross fixed capital formation (2022)',           value: '&#163;403bn' }
        ]
      },

      parts: [
        {
          id:          'q3a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain how rising interest rates affect the level of business investment and aggregate demand.',
          hint:        '4-mark response &#8211; explain the mechanism linking interest rates to investment decisions and then to AD.',
          modelAnswer: 'Rising interest rates increase the cost of borrowing for firms. As the Bank Rate rose from 0.25% in December 2021 to 5.25% by August 2023, businesses faced significantly higher repayment costs on loans taken out to finance new machinery, premises, and technology. For many projects, the higher interest cost means expected returns no longer exceed the cost of capital, so firms defer or cancel investment plans. This helps explain why UK business investment growth turned negative at &#8722;0.3% in 2022, despite relatively strong overall economic activity earlier in the year. The fall in investment directly reduces the I component of aggregate demand (AD = C + I + G + X &#8722; M), shifting the AD curve to the left. Through the multiplier, the final reduction in national income will be larger than the initial fall in I: workers employed in capital goods industries face reduced demand, their incomes fall, they cut consumption, and the negative multiplier effect ripples through the economy. Higher interest rates also raise the cost of consumer credit and mortgage repayments, compounding the downward pressure on AD by simultaneously squeezing C.'
        },
        {
          id:     'q3b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following is most likely to increase business investment despite rising interest rates?',
          options: [
            { id: 'opt-a', text: 'A fall in consumer confidence'                                               },
            { id: 'opt-b', text: 'A significant improvement in business confidence and expected future profits' },
            { id: 'opt-c', text: 'An increase in the marginal propensity to save'                              },
            { id: 'opt-d', text: 'A tightening of credit conditions by commercial banks'                       }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Investment depends not only on the cost of borrowing but also on business expectations of future profitability (Keynes called this &#8220;animal spirits&#8221;). If firms expect strong future demand and profits, they may invest even at higher interest rates because expected returns are sufficient to justify the cost of capital.',
          feedbackWrong:   'The correct answer is B. Investment is driven by both the cost of funds (interest rates) and expected future returns. If businesses are highly confident about future profitability &#8211; because they expect strong demand, new markets, or technological opportunity &#8211; they will invest even when borrowing costs are elevated. Options A, C, and D all reduce investment or spending further.'
        }
      ]
    },

    /* ── Q4 – Consumer confidence ────────────────────────────── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'Consumer confidence and household spending',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '%', label: 'GfK Consumer Confidence Index (January 2023)',    value: '&#8722;45'  },
          { color: 'blue',  icon: '%', label: 'GfK Consumer Confidence Index (January 2020)',    value: '&#8722;9'   },
          { color: 'green', icon: '%', label: 'UK household saving ratio (Q1 2021)',              value: '19.9%'      },
          { color: 'amber', icon: '%', label: 'UK household saving ratio (Q4 2022)',              value: '8.1%'       }
        ]
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain how changes in consumer confidence affect aggregate demand in the UK economy.',
          hint:        '4-mark response &#8211; link consumer confidence to the saving ratio and then to consumption and AD. Use the data to support your argument.',
          modelAnswer: 'Consumer confidence measures households&#39; expectations about their own financial situation and the broader economic outlook. When confidence falls sharply &#8211; as the GfK index did from &#8722;9 in January 2020 to &#8722;45 in January 2023 &#8211; households become more cautious and save a larger proportion of their income as a precautionary buffer against anticipated hardship. This is reflected in the data: the household saving ratio surged to 19.9% in Q1 2021 (reflecting COVID-19 uncertainty and restricted spending opportunities) before falling to 8.1% by Q4 2022 as households drew on savings amid the cost-of-living crisis. Lower confidence therefore tends to reduce the marginal propensity to consume &#8211; households defer big-ticket purchases such as new cars, home improvements, and holidays. Since consumption accounts for around 61% of UK GDP, even a modest reduction in the propensity to consume produces a significant leftward shift in the AD curve. Through the negative multiplier, the initial fall in C cascades through the economy: retailers cut orders, producers reduce output and employment, and further rounds of income loss reduce spending still further, amplifying the original demand contraction.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following is most likely to cause consumer confidence to rise?',
          options: [
            { id: 'opt-a', text: 'A significant rise in the rate of inflation'                          },
            { id: 'opt-b', text: 'A rapid rise in unemployment'                                         },
            { id: 'opt-c', text: 'A period of sustained real wage growth and falling unemployment'      },
            { id: 'opt-d', text: 'A sharp increase in variable mortgage interest rates'                 }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. When real wages are rising and unemployment is low and falling, households feel more financially secure and optimistic about future income prospects. This boosts consumer confidence, increases the MPC, and raises consumer spending as a component of AD.',
          feedbackWrong:   'The correct answer is C. Consumer confidence is strongly linked to employment security and real income growth. Rising real wages mean households have more to spend and feel financially secure, while low unemployment reduces fear of job loss. Options A, B, and D all reduce real purchasing power or income security, undermining confidence.'
        }
      ]
    },

    /* ── Q5 – AD shifts and the price level ─────────────────── */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'Shifts in aggregate demand and the price level',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from the Bank of England Monetary Policy Report, November 2022',
        text:   'The UK economy entered 2022 with aggregate demand growing strongly following the pandemic recovery. Consumer spending rebounded as restrictions were lifted, and government support schemes such as the furlough had preserved household incomes. However, by mid-2022 the picture had changed significantly. Inflation reached 11.1% in October 2022 &#8211; a 41-year high &#8211; driven primarily by energy and food prices. The Bank of England responded by raising Bank Rate from 0.1% in December 2021 to 3.0% by November 2022. The MPC judged that tighter monetary policy was needed to bring aggregate demand back in line with supply and prevent inflation becoming embedded.'
      },

      parts: [
        {
          id:     'q5a',
          letter: 'a',
          marks:  1,
          type:   'mcq',
          stem:   'In the AD&#47;AS model, a rise in the general price level (moving along a fixed AD curve) causes:',
          options: [
            { id: 'opt-a', text: 'A rightward shift in the AD curve'                                                              },
            { id: 'opt-b', text: 'A fall in the quantity of real output demanded, shown as a movement along the AD curve'         },
            { id: 'opt-c', text: 'An upward shift in the SRAS curve only'                                                        },
            { id: 'opt-d', text: 'An increase in real GDP and a rightward shift in both AD and SRAS'                              }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. A rise in the price level does not shift the AD curve &#8211; it causes a movement along the existing curve. At a higher price level, the real value of money holdings falls (the wealth effect), exports become less competitive (the international trade effect), and higher interest rates are needed to maintain the money supply (the interest rate effect). All three reduce the quantity of real output demanded.',
          feedbackWrong:   'The correct answer is B. Changes in the price level cause a movement along the AD curve, not a shift. The AD curve slopes downward because a higher price level reduces real wealth, makes exports less competitive, and tends to raise interest rates &#8211; all of which reduce the quantity of real goods and services demanded in the economy.'
        },
        {
          id:          'q5b',
          letter:      'b',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain two factors that caused aggregate demand to shift rightward in the UK in 2021&#8211;22, and explain how the Bank of England sought to address this.',
          hint:        '4-mark response &#8211; identify two AD-shifting factors from the extract, then explain the monetary policy transmission mechanism.',
          modelAnswer: 'Two factors caused the rightward shift in UK aggregate demand in 2021&#8211;22. First, the release of pent-up consumer spending after pandemic restrictions were lifted boosted consumption significantly. Households that had accumulated excess savings during lockdown &#8211; when opportunities to spend were restricted &#8211; increased their spending rapidly as confidence returned and the economy reopened. This added directly to C, shifting AD to the right. Second, the government&#39;s furlough scheme had preserved household incomes throughout the pandemic, preventing the mass unemployment that would normally have reduced consumer spending in a sharp downturn. With incomes intact, the recovery in consumer spending was faster and stronger than in previous recessions. The resulting excess of aggregate demand over aggregate supply &#8211; in a context where global supply chains were still disrupted &#8211; contributed to inflation reaching 11.1% by October 2022. To address this, the Bank of England raised Bank Rate from 0.1% to 3.0%, increasing borrowing costs for households and firms. Higher mortgage rates and consumer credit costs reduce disposable income and dampen consumption, while the higher cost of capital discourages business investment. This shifts AD back to the left, reducing inflationary pressure by bringing demand closer to the economy&#39;s supply capacity.'
        }
      ]
    }

  ]
};
