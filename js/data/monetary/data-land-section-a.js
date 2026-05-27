window.ECONOS_LAND_SECTION_A = {
  topic:        'Monetary Policy',
  sectionLabel: 'Section A &#8211; Short questions',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

  questions: [

    /* ── Q1 – The Bank Rate and transmission ─────────────────── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'The Bank Rate and the transmission mechanism',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'green', icon: '%', label: 'Bank Rate (December 2021)', value: '0.25%'  },
          { color: 'rose',  icon: '%', label: 'Bank Rate (August 2023)',   value: '5.25%'  },
          { color: 'rose',  icon: '%', label: 'CPI inflation (Oct 2022)',  value: '11.1%'  },
          { color: 'blue',  icon: '%', label: 'CPI inflation (Dec 2023)',  value: '3.9%'   }
        ]
      },

      parts: [
        {
          id:          'q1a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain the transmission mechanism through which the Bank of England\'s interest rate rises reduced the rate of inflation between 2022 and 2023.',
          hint:        '4-mark response &#8211; trace at least two channels linking the Bank Rate rise to lower inflation.',
          modelAnswer: 'The Bank Rate rose from 0.25% to 5.25%, a 5 percentage point increase. This rise transmitted to commercial lending rates &#8211; mortgage rates, loan rates, and credit card rates all increased, raising the cost of borrowing. Households with variable-rate mortgages faced higher repayments, directly reducing their disposable income and their ability to spend on goods and services. Simultaneously, higher savings rates increased the attractiveness of saving relative to consumption. Both effects reduced consumer spending and shifted aggregate demand to the left. With output growth slowing and firms competing harder for customers, upward price pressure eased. CPI fell from 11.1% to 3.9%, though it remained above the 2% target. Additionally, higher UK interest rates attracted capital inflows from overseas investors seeking better returns on UK assets, increasing demand for sterling and causing it to appreciate. A stronger pound reduced the price of UK imports, directly dampening the cost-push inflationary pressure that had been driving the energy price surge.'
        },
        {
          id:     'q1b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'The Bank of England\'s primary objective, as set by HM Treasury, is to:',
          options: [
            { id: 'opt-a', text: 'Maximise economic growth'                                },
            { id: 'opt-b', text: 'Keep CPI inflation at 2%'                               },
            { id: 'opt-c', text: 'Maintain sterling at a fixed exchange rate'              },
            { id: 'opt-d', text: 'Minimise unemployment below 4%'                         }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The Bank of England has a single primary mandate: to keep CPI inflation at 2%. Subject to achieving that, it must also support the government&#39;s objectives for growth and employment.',
          feedbackWrong:   'The correct answer is B. The Bank of England&#39;s primary objective is price stability &#8211; specifically keeping CPI at 2%. While it also has a secondary objective to support economic growth and employment, price stability takes precedence.'
        }
      ]
    },

    /* ── Q2 – Quantitative easing ─────────────────────────────── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'Quantitative easing',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from Bank of England Quarterly Bulletin, 2021',
        text:   'Since March 2009, the Bank of England has purchased &#163;895 billion of government and corporate bonds through its Asset Purchase Facility. By purchasing bonds in the secondary market, the Bank pushes bond prices up and yields down, reducing long-term borrowing costs across the economy. The newly created central bank reserves increase the broad money supply. Critics of quantitative easing argue that much of this newly created money has boosted asset prices rather than stimulating real economic activity, primarily benefiting already-wealthy asset owners.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain how quantitative easing is intended to stimulate aggregate demand.',
          hint:        '4-mark response &#8211; explain the mechanism from bond purchases through to higher aggregate demand.',
          modelAnswer: 'Quantitative easing (QE) involves the Bank of England creating new central bank reserves to purchase government and corporate bonds from financial institutions. As the extract explains, large-scale bond purchases push bond prices up and yields (interest rates) down across the economy. Lower long-term interest rates reduce the cost of borrowing for firms (for investment) and households (for mortgages and credit), stimulating consumption and investment &#8211; both components of aggregate demand. Additionally, lower bond yields make other assets such as equities more attractive, raising asset prices and household wealth. Higher wealth encourages greater consumer spending (the wealth effect), further boosting AD. QE is particularly important when the Bank Rate is already near the zero lower bound and cannot be cut further &#8211; as in 2009 and 2020 &#8211; providing an alternative monetary stimulus channel.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following best describes a potential criticism of quantitative easing as a monetary policy tool?',
          options: [
            { id: 'opt-a', text: 'It raises short-term interest rates, reducing consumer borrowing'       },
            { id: 'opt-b', text: 'It primarily inflates asset prices, increasing wealth inequality'       },
            { id: 'opt-c', text: 'It reduces government bond issuance and restricts fiscal policy'        },
            { id: 'opt-d', text: 'It causes immediate hyperinflation by expanding the money supply'       }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The extract explicitly notes this criticism: much QE money boosts asset prices (bonds, equities, property) rather than the real economy. Since wealthier households own more assets, QE disproportionately benefits the already-wealthy, potentially increasing income and wealth inequality.',
          feedbackWrong:   'The correct answer is B. The extract states that critics argue QE primarily boosted asset prices rather than real economic activity, benefiting asset owners &#8211; typically wealthier households. This is a distributional criticism: QE may worsen wealth inequality without generating proportionate real economic stimulus.'
        }
      ]
    },

    /* ── Q3 – The zero lower bound ───────────────────────────── */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'The zero lower bound problem',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%', label: 'Bank Rate (March 2009 &#8211; March 2020)', value: '0.5&#8211;0.25%' },
          { color: 'blue',  icon: '%', label: 'Bank Rate (March 2020 &#8211; Dec 2021)',   value: '0.10%'           },
          { color: 'rose',  icon: '%', label: 'Eurozone ECB deposit rate (2014&#8211;22)', value: 'Negative rates'  },
          { color: 'green', icon: '&#163;', label: 'Total BoE QE purchases (2009&#8211;21)', value: '&#163;895bn'   }
        ]
      },

      parts: [
        {
          id:          'q3a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Explain why the zero lower bound creates a constraint on conventional monetary policy and how central banks have responded.',
          hint:        '4-mark response &#8211; define the zero lower bound, explain the constraint it creates, and explain QE and/or forward guidance as responses.',
          modelAnswer: 'The zero lower bound (ZLB) is the constraint that nominal interest rates cannot typically be reduced below zero (or cannot be reduced significantly below zero), because at negative rates depositors would prefer to hold physical cash. The data shows the UK Bank Rate stuck at 0.10% from March 2020 &#8211; at the effective lower bound. With rates unable to fall further, the Bank cannot use its primary instrument to stimulate aggregate demand during a deep recession. Central banks have responded with unconventional tools. First, quantitative easing (QE): purchasing bonds to directly reduce long-term yields and expand the money supply &#8211; the UK spent &#163;895bn. Second, forward guidance: committing to keep rates low for an extended period to anchor expectations and support borrowing decisions now. The Eurozone ECB went further, implementing negative interest rates (charging banks to deposit reserves) &#8211; though the UK Bank of England explicitly rejected this approach, expressing doubts about its effectiveness through the banking transmission channel.'
        },
        {
          id:     'q3b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Forward guidance, as a monetary policy tool, works primarily through which channel?',
          options: [
            { id: 'opt-a', text: 'Directly reducing government borrowing costs'                    },
            { id: 'opt-b', text: 'Anchoring expectations about future interest rates'              },
            { id: 'opt-c', text: 'Increasing the money supply by purchasing financial assets'      },
            { id: 'opt-d', text: 'Setting a fixed exchange rate to reduce import prices'           }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Forward guidance works by credibly communicating the central bank\'s intended future policy path, anchoring interest rate expectations and thereby influencing current borrowing, saving and investment decisions.',
          feedbackWrong:   'The correct answer is B. Forward guidance reduces current borrowing costs and stimulates spending by credibly signalling that rates will remain low, anchoring market expectations. Unlike QE, it does not involve asset purchases or money creation &#8211; it works through the expectations channel.'
        }
      ]
    },

    /* ── Q4 – Exchange rate channel ─────────────────────────── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'Exchange rate channel of monetary policy',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '&#163;', label: '&#163;/$ rate (before rate rise)', value: '&#163;1 = $1.22'  },
          { color: 'green', icon: '&#163;', label: '&#163;/$ rate (after rate rise)',  value: '&#163;1 = $1.28'  },
          { color: 'green', icon: '%',      label: 'Change in import prices',          value: '&#8722;4.9%'      },
          { color: 'blue',  icon: '%',      label: 'UK import intensity of GDP',       value: '&#8776; 30%'      }
        ]
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain how a rise in the Bank Rate affects the sterling exchange rate and inflation through the exchange rate channel.',
          hint:        '4-mark response &#8211; explain the hot money flow mechanism, its effect on sterling, and how this feeds through to import prices and inflation.',
          modelAnswer: 'A rise in the Bank Rate increases the interest rate paid on UK financial assets relative to assets in other countries. This attracts &#8220;hot money&#8221; capital inflows from overseas investors seeking higher returns &#8211; they must buy sterling to invest in UK assets. Increased demand for sterling causes the exchange rate to appreciate, as shown in the data (from $1.22 to $1.28). A stronger sterling makes UK imports cheaper: the same amount of sterling now buys more foreign currency, so import prices fall by 4.9%. Since the UK import intensity of GDP is approximately 30%, lower import prices directly reduce the cost of many goods consumed domestically, applying downward pressure on the CPI. This exchange rate channel operates quickly compared with the demand channel and is particularly important for an open, trade-dependent economy such as the UK.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'A country with a high marginal propensity to import will find the exchange rate channel of monetary policy particularly:',
          options: [
            { id: 'opt-a', text: 'Ineffective, because most spending is on domestic goods'                    },
            { id: 'opt-b', text: 'Effective, because a larger share of spending is on import-priced goods'   },
            { id: 'opt-c', text: 'Ineffective, because exchange rates cannot be influenced by interest rates' },
            { id: 'opt-d', text: 'Effective, because higher imports always cause currency depreciation'       }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. A high marginal propensity to import means consumers spend a large share of extra income on imported goods. Exchange rate changes therefore affect a larger proportion of the price level, making the exchange rate channel of monetary policy more powerful.',
          feedbackWrong:   'The correct answer is B. The more open the economy (higher import share of spending), the larger the impact of exchange rate changes on domestic price levels. Countries with high import intensity experience stronger inflationary/deflationary effects from exchange rate movements.'
        }
      ]
    },

    /* ── Q5 – Limitations of monetary policy ────────────────── */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'Limitations of monetary policy',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from OBR Economic and Fiscal Outlook, 2023',
        text:   'The Bank of England estimates that changes in the Bank Rate take between 18 and 24 months to feed fully through to inflation. This long and variable lag creates a significant challenge for monetary policymakers: they must make decisions today based on forecasts of economic conditions two years hence. Forecasting errors have repeatedly resulted in policy being either too loose (failing to prevent inflation) or too tight (choking off recovery). The 2021&#8211;22 period, when the Bank kept rates near zero while inflation accelerated sharply, has been cited as an example of policy being behind the curve.'
      },

      parts: [
        {
          id:          'q5a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain two limitations of monetary policy as a tool for managing the macroeconomy.',
          hint:        '4-mark response &#8211; identify two distinct limitations with explanation, using the extract for at least one.',
          modelAnswer: 'First, monetary policy operates with long and variable lags. The extract states that Bank Rate changes take 18&#8211;24 months to feed fully through to inflation. This means the Bank must set policy based on forecasts of future economic conditions that may prove incorrect &#8211; as the extract notes, the 2021&#8211;22 period saw rates remain near zero while inflation accelerated, with policy &#8220;behind the curve.&#8221; If the Bank misjudges timing, it can amplify economic instability rather than reduce it. Second, monetary policy is a blunt instrument that cannot be targeted at specific sectors or groups. A rise in the Bank Rate increases borrowing costs across the entire economy, harming mortgage holders, small businesses, and exporters simultaneously regardless of whether the inflation originates from their spending. This indiscriminate impact may cause collateral damage &#8211; for instance, raising unemployment in sectors unrelated to the inflationary pressure &#8211; that fiscal policy could potentially avoid through targeted measures.'
        },
        {
          id:     'q5b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following best describes the concept of \'independence\' of the Bank of England in its monetary policy decisions?',
          options: [
            { id: 'opt-a', text: 'The Bank sets its own inflation target without government involvement'                 },
            { id: 'opt-b', text: 'The Bank sets interest rates to meet the government-set inflation target'             },
            { id: 'opt-c', text: 'The Bank can override government fiscal policy decisions'                             },
            { id: 'opt-d', text: 'The Bank is free to set any inflation target it chooses'                              }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The Bank of England has &#8220;operational independence&#8221; &#8211; it sets interest rates to meet the 2% inflation target. But the target itself is set by HM Treasury (the government), not the Bank. The Bank decides HOW to achieve the target; the government decides WHAT the target is.',
          feedbackWrong:   'The correct answer is B. The Bank of England has operational independence &#8211; the freedom to set interest rates as it sees fit to meet the inflation target. But the inflation target (2% CPI) is set by the government (HM Treasury). This distinction between target-setting (government) and instrument-setting (Bank) is important.'
        }
      ]
    }

  ]
};
