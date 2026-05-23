/* ============================================================
   ECONOS — Quiz content for: Aggregate Demand
   10 questions covering AD components, the slope, movement vs shift,
   consumption drivers, investment volatility, and the multiplier.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'ad_main',
    topicId:  'ad_main',
    title:    'Aggregate Demand',
    subtitle: 'Theme 2.2 &#183; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the four AD components and their UK shares, the three reasons for the downward slope, the distinction between movement along and shift of AD, the drivers of consumption and investment, and the multiplier. Mixed formats develop the analytical precision that distinguishes A* answers from B answers.',
    shortNames: {
      'composition':       'AD components',
      'slope':             'Why AD slopes down',
      'movement-vs-shift': 'Movement vs shift',
      'consumption':       'Consumption drivers',
      'investment':        'Investment volatility',
      'gov-nettrade':      'Government and net trade',
      'multiplier':        'The multiplier'
    },

    questions: [

      /* 1 &#8212; MCQ: AD composition */
      { type: 'mcq',
        stem: 'Which of the following correctly states the approximate percentage shares of each component of UK Aggregate Demand?',
        opts: [
          'Consumption ~60%, Government ~20%, Investment ~17%, Net Trade ~3%',
          'Consumption ~40%, Government ~30%, Investment ~25%, Net Trade ~5%',
          'Consumption ~70%, Government ~15%, Investment ~10%, Net Trade ~5%',
          'Consumption ~50%, Investment ~30%, Government ~15%, Net Trade ~5%'
        ],
        ans: 0,
        exp: 'UK approximate AD shares: <strong>C ~60%</strong> (the dominant engine), <strong>G ~20%</strong> (the directly controllable lever), <strong>I ~17%</strong> (small but the most volatile), <strong>(X&#8722;M) ~3%</strong> (often negative for the UK). Quoting these shares in essays signals genuine understanding of the UK economy rather than abstract formula recital. The key insight: although I is only ~17% of AD, its <em>volatility</em> means it drives most of the business cycle fluctuation. A* answers note both the size and the volatility for each component.'
      },

      /* 2 &#8212; Multi-select: AD slope reasons */
      { type: 'multi_select',
        stem: 'Which of the following are genuine reasons why the <strong>Aggregate Demand curve slopes downward</strong>?',
        opts: [
          'The wealth effect: a higher price level erodes the real value of fixed nominal assets, making households feel poorer and consume less',
          'The interest rate effect: a higher price level raises demand for money, pushing up interest rates, reducing investment and consumption',
          'Consumers substitute cheaper foreign goods for expensive domestic goods when domestic prices rise',
          'The international substitution effect: a higher domestic price level makes UK exports less competitive, reducing net exports',
          'As the price level rises, firms reduce production to maintain profit margins',
          'A higher price level encourages saving rather than consumption due to rising real interest rates'
        ],
        correct: [0, 1, 3],
        exp: 'The three macroeconomic effects explaining the AD slope: (A) <strong>Wealth effect</strong>: higher prices erode the real value of nominal assets. (B) <strong>Interest rate effect</strong>: higher prices raise money demand, pushing up interest rates, reducing I and C. (D) <strong>International substitution effect</strong>: higher UK prices reduce export competitiveness and encourage more imports &#8212; net exports fall. Option C is a common student error &#8212; this describes a <em>microeconomic</em> substitution (buying cheaper goods from abroad), which is part of the international substitution effect but cannot be described as a separate mechanism. Option E describes a supply response, not an AD mechanism. Option F conflates real and nominal interest rates.'
      },

      /* 3 &#8212; Elastic sort: shift vs movement */
      { type: 'elastic_sort',
        stem: 'Classify each event as causing a <strong>shift of the AD curve</strong> or a <strong>movement along the AD curve</strong>.',
        categories: ['shift', 'move'],
        categoryLabels: ['Shift of AD', 'Movement along AD'],
        goods: [
          { icon: '&#127968;', label: 'The Bank of England cuts Bank Rate from 5% to 3%, stimulating borrowing and spending', note: '', ans: 'shift' },
          { icon: '&#128200;', label: 'Aggregate supply shifts right, lowering the price level and increasing the quantity of AD demanded', note: '', ans: 'move' },
          { icon: '&#128664;', label: 'The government increases public spending by &#163;20bn on NHS infrastructure', note: '', ans: 'shift' },
          { icon: '&#128104;&#8205;&#128187;', label: 'The price level falls due to falling commodity input costs, increasing the quantity demanded along the existing AD', note: '', ans: 'move' },
          { icon: '&#127758;', label: 'Sterling depreciates sharply, making UK exports cheaper and imports more expensive', note: '', ans: 'shift' },
          { icon: '&#128200;', label: 'Consumer confidence collapses as unemployment rises, shifting spending decisions', note: '', ans: 'shift' }
        ],
        exp: '<strong>Shift of AD</strong>: any non-price change in C, I, G, or (X&#8722;M) &#8212; interest rate cuts, fiscal stimulus, exchange rate changes, confidence shocks. The entire curve moves to a new position. <strong>Movement along AD</strong>: caused by a change in the <em>price level</em> &#8212; moving the economy from one point on the existing AD curve to another. When SRAS shifts right and prices fall, the economy slides down the existing AD curve (movement). The distinction is the most commonly marked-down error in AD/AS essays &#8212; opening with \'this causes a shift of AD because...\' is the A* analytical move.'
      },

      /* 4 &#8212; Calculation: multiplier */
      { type: 'calculation',
        context: 'The UK government announces a <strong>&#163;15 billion</strong> infrastructure investment programme. Assume the marginal propensity to consume (MPC) is <strong>0.75</strong>.',
        working: [
          'Multiplier (k) = 1 &#247; (1 &#8722; MPC) = 1 &#247; (1 &#8722; 0.75) = 1 &#247; 0.25 = 4',
          'Total change in GDP = &#163;15bn &#215; 4 = &#163;60bn',
          'Note: real-world UK multiplier is smaller due to import leakage (MPM ~0.3) and tax leakage (MRT ~0.35)',
          'Full-leakage formula: k = 1 &#247; (MPS + MRT + MPM) = 1 &#247; (0.1 + 0.35 + 0.3) = 1 &#247; 0.75 &#8776; 1.3',
          'Realistic impact: &#163;15bn &#215; 1.3 &#8776; &#163;19.5bn (more realistic for the UK open economy)'
        ],
        stem: 'Using the simple multiplier formula, what is the total estimated increase in GDP from this investment? What does the real-world caveat reveal?',
        opts: [
          { ped: '&#163;60bn using the simple formula; but the real-world UK multiplier (~1.0-1.5) is much smaller due to import and tax leakages, so the realistic impact is closer to &#163;15-23bn', typ: 'Correctly calculates k = 4, total = &#163;60bn, and identifies the caveat from full-leakage formula', rev: 'k = 1/(1-MPC) = 1/0.25 = 4; multiply by &#163;15bn' },
          { ped: '&#163;15bn: the multiplier does not apply to government infrastructure spending, only to private investment', typ: 'Incorrectly restricts the multiplier to private spending &#8212; G is part of AD', rev: 'The multiplier applies to any injection into the circular flow, including G' },
          { ped: '&#163;75bn: add the MPC of 0.75 to the initial injection as a simple proportion', typ: 'Multiplied &#163;15bn by 0.75 instead of applying the multiplier formula correctly', rev: 'k = 1/(1-MPC); with MPC=0.75, k = 4, not 0.75' },
          { ped: '&#163;11.25bn: the multiplier effect reduces the initial injection by the MPS leakage in each round', typ: 'Incorrectly multiplied by MPS rather than using the k formula', rev: 'The multiplier amplifies, not reduces, the initial injection' }
        ],
        ans: 0,
        exp: 'Simple multiplier: k = 1 &#247; (1 &#8722; 0.75) = <strong>4</strong>. Total GDP change = &#163;15bn &#215; 4 = <strong>&#163;60bn</strong>. However, the full-leakage formula &#8212; k = 1 &#247; (MPS + MRT + MPM) &#8212; gives a much more realistic UK figure. With MPS~0.10, MRT~0.35, MPM~0.30, k &#8776; 1/(0.75) &#8776; 1.3. The realistic impact is ~&#163;20bn &#8212; far smaller than the simple formula implies. The gap illustrates why open economies with high tax rates have smaller multipliers. A* answers always note both the simple and full-leakage versions, explaining why the latter is more appropriate for the UK.'
      },

      /* 5 &#8212; Para fill: consumption function */
      { type: 'para_fill',
        stem: 'Complete the paragraph describing the main determinants of consumer spending.',
        anchor: 'Consumption is the largest component of UK aggregate demand, accounting for approximately 60% of GDP.',
        para: 'The primary driver of consumption is [1] income &#8212; what households have after tax. However, [2] rates also play a major role: when rates rise, borrowing becomes more expensive and saving becomes more attractive, so consumption falls. The [3] effect links house and share prices to spending: when asset values rise, households feel wealthier and consume more. When consumer [4] falls &#8212; for example during a pandemic &#8212; households save more, pushing up the [5] ratio. The MPC (marginal propensity to consume) measures the fraction of each extra &#163;1 of income that is spent; a typical UK value is [6]. This MPC value directly determines the [7] of the fiscal multiplier.'
        ,
        blanks: [
          { id: 1, opts: ['disposable', 'nominal', 'real', 'gross'], ans: 0 },
          { id: 2, opts: ['interest', 'inflation', 'exchange', 'tax'], ans: 0 },
          { id: 3, opts: ['wealth', 'income', 'substitution', 'fiscal'], ans: 0 },
          { id: 4, opts: ['confidence', 'income', 'wealth', 'spending'], ans: 0 },
          { id: 5, opts: ['savings', 'investment', 'debt', 'import'], ans: 0 },
          { id: 6, opts: ['0.6&#8211;0.8', '0.2&#8211;0.4', '0.9&#8211;1.0', '0.0&#8211;0.2'], ans: 0 },
          { id: 7, opts: ['size', 'timing', 'direction', 'type'], ans: 0 }
        ],
        exp: '(1) <strong>Disposable</strong>: income after income tax and National Insurance. (2) <strong>Interest</strong>: the Bank Rate transmission mechanism works largely through its effect on consumption via mortgage and credit costs. (3) <strong>Wealth</strong>: the wealth effect &#8212; one of the three reasons AD slopes downward. (4) <strong>Confidence</strong>: consumer confidence is a leading indicator &#8212; when it falls, households precautionarily save. (5) <strong>Savings</strong>: the savings ratio spiked to ~25% during COVID-19 lockdowns. (6) <strong>0.6&#8211;0.8</strong>: the typical range for UK MPC. (7) <strong>Size</strong>: the multiplier k = 1/(1&#8722;MPC), so higher MPC means larger multiplier.'
      },

      /* 6 &#8212; Odd one out */
      { type: 'odd_one_out',
        stem: 'Three of these cause a <strong>rightward shift of the AD curve</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#127968;', label: 'Government announces &#163;30bn increase in NHS and education spending', note: '' },
          { icon: '&#128200;', label: 'A sharp rise in the domestic price level reduces the real value of households\' cash savings', note: '' },
          { icon: '&#128664;', label: 'Sterling depreciates 15% against major trading currencies, boosting UK export competitiveness', note: '' },
          { icon: '&#128176;', label: 'The Bank of England cuts Bank Rate from 5.25% to 3%, lowering mortgage costs and stimulating borrowing', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is option B. A rise in the domestic price level does not shift AD &#8212; it causes a <em>movement along</em> the existing AD curve (a contraction). The wealth effect from rising prices reduces the quantity of AD demanded but this is already captured in the downward slope, not a separate shift. Options A (&#8593;G), C (&#8593;X via depreciation), and D (&#8593;C and &#8593;I via lower interest rates) are all non-price changes to the components of AD that shift the entire curve rightward.'
      },

      /* 7 &#8212; Data table: consumption signals */
      { type: 'data_table',
        stem: 'The table shows UK consumer indicators over a period of change.',
        headers: ['Indicator', 'Q1', 'Q2', 'Q3', 'Q4'],
        rows: [
          ['Consumer confidence index', '+8', '+5', '&#8722;3', '&#8722;12'],
          ['Savings ratio (%)', '5.2', '5.8', '8.1', '11.4'],
          ['Retail sales growth (% y/y)', '+3.2', '+2.1', '+0.4', '&#8722;1.8'],
          ['Bank Rate (%)', '5.25', '5.25', '5.25', '5.00']
        ],
        question: 'What does the data most strongly suggest about the trajectory of UK aggregate demand?',
        opts: [
          'AD is weakening: consumer confidence has turned sharply negative, the savings ratio is rising, and retail sales are falling &#8212; consistent with a consumption-led deceleration of AD',
          'AD is rising: the Bank of England has begun cutting rates, which will immediately boost consumption and shift AD right in Q4',
          'The data shows stable AD because the Bank Rate has barely changed and government spending is not shown in the data',
          'Retail sales growth is still positive through Q3, so AD must be rising throughout the period shown'
        ],
        ans: 0,
        exp: 'The leading indicators all point to a weakening of AD through the period. Consumer confidence turned negative in Q3 and fell sharply in Q4. The savings ratio jumped from 5.2% to 11.4% &#8212; households precautionarily saving rather than spending (the reverse multiplier). Retail sales growth declined and turned negative in Q4. These are classic signals of a consumption-led AD deceleration. Option B overstates the rate cut effect &#8212; the policy transmission lag is 12-24 months, so Q4\'s minor cut would not show up immediately. Option C ignores the leading indicator signals. Option D is backward-looking &#8212; Q3 positive retail sales do not negate the Q4 contraction.'
      },

      /* 8 &#8212; Multi-select: evaluation of AD and the multiplier */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>aggregate demand and the multiplier</strong>. Which of the following statements demonstrate <strong>evaluation</strong> &#8212; as opposed to description or one-sided analysis?',
        opts: [
          'The simple multiplier overstates the real-world impact of fiscal stimulus in the UK because import and tax leakages reduce the multiplier to approximately 1.0&#8211;1.5 &#8212; meaning a &#163;15bn injection raises GDP by roughly &#163;15&#8211;23bn, not &#163;60bn',
          'Aggregate demand has four components: consumption, investment, government spending, and net exports',
          'Although investment is only ~17% of UK AD, it is the most volatile component and therefore drives most of the business cycle&#8217;s amplitude &#8212; a small share does not mean a small influence',
          'A rise in consumer confidence will increase consumption and shift the AD curve to the right',
          'Fiscal stimulus is more effective at closing a negative output gap than at full employment: when there is spare capacity, the multiplier operates without crowding out or inflation, so the same &#163;10bn injection has a larger real effect in a recession than at full employment',
          'Investment is important because when it rises, aggregate demand increases'
        ],
        correct: [0, 2, 4],
        exp: 'Option A is strong evaluation: it qualifies the multiplier claim with a specific real-world adjustment (import/tax leakages), names the full-leakage formula, and provides a quantified range &#8212; this is a weighing move that limits the scope of a theoretical claim. Option C is strong evaluation: it resolves an apparent contradiction (small share, large impact) by identifying the key variable (volatility), reaching a directional conclusion. Option E is strong evaluation: it conditions the effectiveness of fiscal stimulus on the state of the economy, using spare capacity and the crowding-out mechanism to differentiate contexts &#8212; the hallmark of conditional evaluation. Option B is pure description &#8212; listing AD components is a knowledge statement, not an evaluative move. Option D is one-sided analysis &#8212; it states a mechanism without any qualification, context, or counter-argument. Option F is vague and circular &#8212; it merely restates the definition of investment as an AD component without adding analytical insight.'
      },

      /* 9 &#8212; MCQ: government spending */
      { type: 'mcq',
        stem: 'Which statement best explains why government spending (G) is described as the <strong>only directly controllable component</strong> of aggregate demand?',
        opts: [
          'Unlike C, I, or (X&#8722;M), which respond indirectly to policy via interest rates, exchange rates, or confidence, G is set directly by government spending decisions &#8212; it adds to AD immediately when the government contracts for goods and services',
          'Government spending is directly controllable because it never leaks into imports or savings, giving it a multiplier of exactly 1 regardless of the economic context',
          'G is the largest component of UK AD at ~60%, so changes to it have the biggest absolute effect on total demand',
          'G is directly controllable because the Bank of England sets the level of government spending as part of its monetary policy mandate'
        ],
        ans: 0,
        exp: 'Government spending is \'direct\' in the sense that a budget decision to spend &#163;10bn on roads <em>immediately adds &#163;10bn to AD</em> when the contracts are placed &#8212; unlike monetary policy, which works via the interest rate transmission chain (12-24 months). Consumption and investment are influenced indirectly through tax policy, interest rates, and confidence &#8212; the government cannot guarantee how much C or I will change. Net exports depend on global demand and exchange rates. Only G is directly set. Option B is wrong &#8212; G has leakages like any injection, and its multiplier varies by composition and context. Option C confuses sizes &#8212; C is ~60%; G is ~20%.'
      },

      /* 10 &#8212; Chain: AD transmission from rate cut */
      { type: 'chain',
        stem: 'The Bank of England cuts Bank Rate by 1 percentage point. Place the events in the correct order to trace the effect through to aggregate demand.',
        items: [
          { label: 'Aggregate demand shifts rightward: at each price level, higher output is demanded', note: '' },
          { label: 'Commercial banks reduce their mortgage and loan rates in response to the lower base rate', note: '' },
          { label: 'The Bank of England votes to cut Bank Rate from 5.25% to 4.25%', note: '' },
          { label: 'Households face lower mortgage repayments, freeing disposable income for spending; firms borrow more cheaply for investment', note: '' },
          { label: 'Consumer spending (C) and business investment (I) both rise', note: '' },
          { label: 'Additionally, lower UK rates reduce demand for sterling, depreciating the pound and boosting net exports (X&#8722;M)', note: '' }
        ],
        correctOrder: [2, 1, 3, 4, 5, 0],
        exp: '<strong>The transmission sequence:</strong><br>1. Bank of England cuts Bank Rate.<br>2. Commercial banks reduce mortgage and loan rates.<br>3. Households and firms gain from lower borrowing costs.<br>4. C and I rise.<br>5. Exchange rate channel: lower UK rates depreciate sterling, boosting (X&#8722;M).<br>6. AD shifts right.<br><br>This chain covers three of the five monetary transmission channels simultaneously (borrowing cost, mortgage, exchange rate). A* answers walk at least one chain fully and name the channel, rather than simply stating \'AD rises\'. The 12-24 month transmission lag &#8212; meaning step 6 materialises long after step 1 &#8212; is an important evaluation point.'
      }

    ]
  };

})();
