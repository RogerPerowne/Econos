/* ============================================================
   ECONOS — Quiz content for: Monetary Policy
   10 questions covering the five channels, the MPC, QE, limits of
   monetary policy, credibility, and fiscal-monetary interaction.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'monetary_main',
    topicId:  'monetary_main',
    title:    'Monetary Policy',
    subtitle: 'Theme 2.6.2 &#183; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the five monetary transmission channels, the Bank of England\'s mandate and independence, conventional versus unconventional (QE) policy, four circumstances where monetary policy fails, central bank credibility and the 2022 mini-budget, distributional effects of rate changes, and fiscal-monetary interaction. Mixed formats test both analytical precision and applied evaluative reasoning.',
    shortNames: {
      'channels':           'Five channels',
      'boe':                'Bank of England',
      'transmission':       'Transmission chain',
      'conventional-vs-qe': 'Conventional vs QE',
      'under-stress':       'When the pipe breaks',
      'credibility':        'Credibility',
      'evaluation':         'Evaluation'
    },

    questions: [

      /* 1 &#8212; Elastic sort: five channels */
      { type: 'elastic_sort',
        stem: 'Match each transmission mechanism to the correct <strong>monetary policy channel</strong>.',
        categories: ['borr', 'mort', 'sav', 'exch', 'exp'],
        categoryLabels: ['Borrowing cost', 'Mortgage channel', 'Savings & wealth', 'Exchange rate', 'Expectations'],
        goods: [
          { icon: '&#127968;', label: 'Variable mortgage holders face higher monthly repayments, reducing disposable income for other spending', note: '', ans: 'mort' },
          { icon: '&#127757;', label: 'Higher UK rates attract hot money; sterling appreciates, making exports more expensive abroad and easing import inflation', note: '', ans: 'exch' },
          { icon: '&#128200;', label: 'Firms and trade unions moderate price and wage demands if they believe the BoE will return inflation to target', note: '', ans: 'exp' },
          { icon: '&#128176;', label: 'Higher rates increase the return on savings accounts, incentivising households to save more and spend less', note: '', ans: 'sav' },
          { icon: '&#127981;', label: 'Rising business loan rates increase the cost of financing capital expenditure, postponing marginal investment projects', note: '', ans: 'borr' },
          { icon: '&#127968;', label: 'Falling house and equity prices reduce household wealth; the reverse wealth effect lowers consumption', note: '', ans: 'sav' }
        ],
        exp: '<strong>Five channels:</strong> (1) Borrowing cost &#8212; raises cost of all credit, reducing C and I. (2) Mortgage &#8212; uniquely powerful in the UK because ~30% of mortgages are on variable or short-fix rates. (3) Savings & wealth &#8212; raises returns on deposits; falling asset prices reverse the wealth effect. (4) Exchange rate &#8212; higher UK rates attract capital, appreciate sterling, reduce net exports, and ease import inflation. (5) Expectations &#8212; the strongest channel when credible; reduces inflation without large rate moves. A* answers walk at least one chain fully and identify which channels are most active in the given scenario.'
      },

      /* 2 &#8212; MCQ: BoE independence */
      { type: 'mcq',
        stem: 'The Bank of England was granted <strong>operational independence</strong> in 1997. Which of the following best explains why this improves macroeconomic outcomes?',
        opts: [
          'An independent central bank cannot be pressured by politicians to keep rates artificially low before elections, which anchors long-run inflation expectations and reduces the sacrifice ratio needed to control inflation',
          'Independence gives the Bank of England control over fiscal policy as well as monetary policy, allowing full coordination of both levers simultaneously',
          'An independent Bank is less likely to raise rates, keeping borrowing costs low and maximising employment at all times',
          'Independence from government means the Bank can print unlimited money to finance public spending without Treasury approval'
        ],
        ans: 0,
        exp: 'The credibility gain from independence: an independent MPC cannot be pressured to loosen policy for electoral reasons. Markets therefore trust that inflation will be controlled &#8212; inflation expectations remain anchored at 2%. This reduces the sacrifice ratio: inflation control requires smaller rate rises and less output sacrifice when expectations are already anchored. The UK evidence: after 1997, long-run inflation expectations fell immediately and UK inflation was broadly stable for two decades &#8212; until the external supply shock of 2022. Option B is wrong &#8212; the BoE controls only monetary policy; fiscal policy remains with HM Treasury. Option C is wrong &#8212; independence does not mean rates are kept permanently low.'
      },

      /* 3 &#8212; Para fill: QE mechanism */
      { type: 'para_fill',
        stem: 'Complete the paragraph explaining how Quantitative Easing (QE) works.',
        anchor: 'When Bank Rate reaches the zero lower bound, the Bank of England turns to Quantitative Easing.',
        para: 'The BoE buys [1] (government bonds and corporate bonds) from financial institutions by creating new [2] money. This drives [3] prices up and [4] yields down. Lower yields make [5] less attractive to investors, who shift into riskier assets (equities, property) &#8212; raising [6] prices and stimulating the wealth effect. The cheaper borrowing costs and higher asset prices shift [7] right, raising output and inflation toward target. Between 2009 and 2021, the BoE accumulated approximately [8] of asset purchases under QE.'
        ,
        blanks: [
          { id: 1, opts: ['bonds', 'shares', 'houses', 'foreign currency'], ans: 0 },
          { id: 2, opts: ['central bank', 'commercial bank', 'household', 'government'], ans: 0 },
          { id: 3, opts: ['bond', 'share', 'house', 'commodity'], ans: 0 },
          { id: 4, opts: ['bond', 'equity', 'property', 'interest'], ans: 0 },
          { id: 5, opts: ['bonds', 'equities', 'property', 'gold'], ans: 0 },
          { id: 6, opts: ['asset', 'bond', 'commodity', 'export'], ans: 0 },
          { id: 7, opts: ['AD', 'SRAS', 'LRAS', 'the price level'], ans: 0 },
          { id: 8, opts: ['&#163;895bn', '&#163;200bn', '&#163;2,000bn', '&#163;50bn'], ans: 0 }
        ],
        exp: '(1) <strong>Bonds</strong>: gilt purchases are the primary QE instrument. (2) <strong>Central bank</strong>: new reserves created by the BoE &#8212; \'printing money\' electronically. (3) <strong>Bond</strong>: buying drives up bond prices. (4) <strong>Bond</strong>: higher bond prices → lower yields (they move inversely). (5) <strong>Bonds</strong>: low-yield bonds become less attractive, pushing investors into riskier assets. (6) <strong>Asset</strong>: equity and property prices rise &#8212; the QE wealth effect. (7) <strong>AD</strong>: the final objective is to shift AD right to hit the inflation target. (8) <strong>&#163;895bn</strong>: total BoE QE accumulated by 2021 (&#163;375bn GFC-era + additional rounds post-Brexit and COVID).'
      },

      /* 4 &#8212; Multi-select: when monetary policy is limited */
      { type: 'multi_select',
        stem: 'In which of the following circumstances is <strong>monetary policy most likely to be ineffective</strong>?',
        opts: [
          'The economy is experiencing a liquidity trap: Bank Rate is near zero but firms and households still will not borrow or spend regardless of rate reductions',
          'The central bank raises rates while the economy is overheating with a positive output gap and rising wage inflation',
          'Banks are rebuilding their balance sheets after a financial crisis and are reluctant to pass rate cuts onto customers via lower loan rates',
          'Inflation is driven by a cost-push supply shock (e.g. energy prices) rather than excess domestic demand',
          'Consumer confidence is high and households are actively willing to borrow and spend',
          'The Bank of England has just made a credible commitment to return inflation to the 2% target, anchoring expectations'
        ],
        correct: [0, 2, 3],
        exp: 'Options A, C, and D represent genuine transmission failures. (A) Liquidity trap: the ZLB means rate cuts cannot stimulate; Keynes\'s original insight, confirmed in Japan 1990s-2010s. (C) Bank deleveraging: the credit channel is blocked &#8212; even if Bank Rate falls, banks do not reduce lending rates (post-2008 UK). (D) Cost-push inflation: monetary tightening reduces AD but cannot address supply-side causes &#8212; it raises unemployment without removing the underlying cost pressure. Options B (overheating), E (high confidence), and F (credible commitment) are all circumstances where monetary policy is comparatively <em>effective</em>.'
      },

      /* 5 &#8212; Odd one out: distributional effects */
      { type: 'odd_one_out',
        stem: 'Three of these are <strong>distributional consequences of a Bank Rate rise</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#127968;', label: 'Variable-rate mortgage holders face higher monthly repayments, reducing their discretionary spending', note: '' },
          { icon: '&#128200;', label: 'Savers with cash deposits receive higher interest income, improving their real returns', note: '' },
          { icon: '&#127758;', label: 'Sterling appreciates, making UK exports more expensive and reducing export sector employment', note: '' },
          { icon: '&#127981;', label: 'Firms can borrow more cheaply to fund new capital investment, raising long-run productive capacity', note: '' }
        ],
        ans: 3,
        exp: 'The odd one out is option D. Cheaper borrowing is a consequence of a rate <em>cut</em>, not a rate rise. A Bank Rate rise makes borrowing more expensive for firms &#8212; the opposite of what option D states. The other three are genuine distributional consequences of a rate rise: (A) mortgage holders lose &#8212; higher repayments squeeze disposable income; (B) savers gain &#8212; better returns on cash deposits; (C) export sector loses &#8212; sterling appreciation makes UK goods less competitive. A* answers note that rate rises are therefore distributionally regressive for indebted households (mortgages, credit cards) while benefiting asset-rich savers.'
      },

      /* 6 &#8212; Data table: 2022 mini-budget */
      { type: 'data_table',
        stem: 'The table shows UK financial market data around the September 2022 mini-budget.',
        headers: ['Date', '10-year gilt yield', 'GBP/USD exchange rate', 'BoE action'],
        rows: [
          ['22 Sep 2022', '3.2%', '$1.13', 'Rate rise to 2.25%'],
          ['23 Sep 2022', '3.8%', '$1.09', 'Mini-budget announced (&#163;45bn unfunded tax cuts)'],
          ['27 Sep 2022', '4.5%', '$1.07', 'Gilt market dysfunction &#8212; pension funds at risk'],
          ['28 Sep 2022', '4.0%', '$1.07', 'BoE emergency bond purchases announced'],
          ['17 Oct 2022', '3.9%', '$1.13', 'Mini-budget reversed; new Chancellor appointed']
        ],
        question: 'Which interpretation of the data is most analytically accurate?',
        opts: [
          'The mini-budget triggered a loss of fiscal credibility: gilt yields spiked ~130 basis points in days (signalling market panic), sterling fell sharply, and BoE was forced into emergency intervention &#8212; demonstrating how quickly fiscal-monetary conflict can destabilise financial markets',
          'The data shows that the BoE\'s rate rise on 22 September caused the gilt yield spike by raising interest rate expectations, with the mini-budget being unrelated to the market turmoil',
          'The mini-budget was successful in the short run: sterling remained above $1.07 throughout and gilt yields returned to near-normal levels after the BoE intervention',
          'The episode shows that monetary policy is always able to prevent fiscal credibility crises through emergency bond purchases, making fiscal discipline unnecessary'
        ],
        ans: 0,
        exp: 'The data sequence is unmistakable: gilt yields jumped ~130 basis points (3.2% to 4.5%) in 4 days following the mini-budget announcement &#8212; far faster than any normal market movement. Sterling fell ~5 cents. The BoE was forced into emergency purchases to prevent pension fund collapse. When the budget was reversed, markets stabilised. This is a textbook example of fiscal credibility loss &#8212; markets priced in unsustainable borrowing. Option B is incorrect &#8212; the yield spike started specifically on 23 September (budget day), not on 22 September (rate rise). Option D inverts the lesson &#8212; the episode shows limits of BoE power, not that fiscal credibility is unnecessary.'
      },

      /* 7 &#8212; Calculation: real interest rate */
      { type: 'calculation',
        context: 'The Bank of England sets Bank Rate at <strong>5.25%</strong>. CPI inflation is running at <strong>7.3%</strong>.',
        working: [
          'Real interest rate = nominal rate &#8722; inflation rate',
          'Real rate = 5.25% &#8722; 7.3% = &#8722;2.05%',
          'A negative real rate means that borrowers are being subsidised in real terms',
          'Savers receive less back in real purchasing power than they lend',
          'Incentive to borrow (real cost is negative) and disincentive to save'
        ],
        stem: 'What is the real interest rate in this scenario, and what does it imply for the effectiveness of monetary tightening?',
        opts: [
          { ped: 'Real rate = &#8722;2.05%: despite the historically high nominal rate, monetary policy remains accommodative in real terms, providing limited restraint on borrowing and spending', typ: 'Applies Fisher equation correctly; draws implication for effectiveness', rev: 'Real rate = nominal &#8722; inflation = 5.25 &#8722; 7.3 = &#8722;2.05%' },
          { ped: 'Real rate = +12.55%: add nominal rate and inflation to get the real rate', typ: 'Added nominal and inflation instead of subtracting', rev: 'Real rate = nominal MINUS inflation' },
          { ped: 'Real rate = 5.25%: inflation does not affect the real interest rate when set by the central bank', typ: 'Ignored inflation in the Fisher equation entirely', rev: 'The real rate accounts for the purchasing power erosion caused by inflation' },
          { ped: 'Real rate = 7.3%: the real rate equals the inflation rate when the central bank is targeting inflation', typ: 'Confused the inflation target with the real rate; these are unrelated', rev: 'Real rate = nominal Bank Rate &#8722; actual inflation, not the target' }
        ],
        ans: 0,
        exp: 'Real rate = 5.25% &#8722; 7.3% = <strong>&#8722;2.05%</strong>. Despite a historically high nominal rate, the real rate is negative &#8212; borrowers pay back less in purchasing power than they borrow. This means monetary policy, while tightening, was still accommodative in real terms during this phase of the 2022-23 UK inflation episode. A* answers use the real interest rate framework to evaluate whether monetary policy is genuinely restrictive &#8212; nominal rates alone can be misleading when inflation is high. The BoE continued raising rates precisely because the real rate needed to become positive to genuinely restrain demand.'
      },

      /* 9 &#8212; Multi-select: evaluation of monetary policy effectiveness */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>monetary policy</strong>. Which of the following statements demonstrate <strong>evaluation</strong> &#8212; as opposed to description or one-sided analysis?',
        opts: [
          'Monetary policy is most effective when it operates via the expectations channel: a credible BoE commitment to the 2% target can anchor wage and price-setting without requiring large rate rises, reducing the sacrifice ratio compared to a less-trusted central bank',
          'The BoE raises interest rates to reduce inflation by making borrowing more expensive, which reduces consumer spending and investment',
          'Whether monetary tightening causes a recession depends on the size of the output gap and the share of variable-rate mortgages &#8212; in 2022-23 the UK\'s high proportion of short-fix mortgages amplified the contractionary effect relative to the euro area',
          'The Bank of England is independent from the government, which means it can set interest rates without political interference',
          'A negative real interest rate &#8212; where nominal Bank Rate is below CPI inflation &#8212; indicates that monetary policy remains accommodative despite headline rate rises, qualifying any claim that tightening was genuinely restrictive in 2022',
          'Monetary policy always works through five channels: borrowing cost, mortgage channel, savings and wealth, exchange rate, and expectations'
        ],
        correct: [0, 2, 4],
        exp: '<strong>Options A, C, and E are evaluation.</strong> (A) makes the evaluative move of weighing <em>which</em> channel matters most and why, reaching a directional conclusion about the sacrifice ratio &#8212; not just listing channels. (C) qualifies the claim about recession risk by identifying the specific conditions that determine impact (output gap size, mortgage structure), and uses comparative evidence (UK vs euro area) to reach a direction. (E) uses the real interest rate framework to qualify the claim that tightening was genuinely restrictive, reaching a specific conclusion about 2022 policy. <strong>Options B, D, and F are not evaluation.</strong> (B) is one-sided analysis &#8212; it correctly describes the transmission chain but reaches no qualified conclusion and ignores countervailing factors. (D) is pure description of BoE independence with no evaluative judgement. (F) lists the five channels as fact without weighing their relative importance or qualifying their operation in any specific context.'
      },

      /* 10 &#8212; MCQ: fiscal-monetary interaction */
      { type: 'mcq',
        stem: 'The government announces a large, unfunded fiscal expansion at the same time as the Bank of England is trying to reduce inflation by raising interest rates. What is the likely macroeconomic outcome of this policy <strong>conflict</strong>?',
        opts: [
          'The fiscal expansion shifts AD right while monetary tightening shifts AD left &#8212; the net effect on inflation and output is ambiguous, but the contradiction signals policy inconsistency and may trigger a gilt market credibility crisis',
          'The two policies cancel each other out perfectly, leaving AD, inflation, and output unchanged &#8212; a neutral net outcome',
          'Fiscal expansion always dominates monetary policy because government spending adds directly to AD, so inflation will rise regardless of rate hikes',
          'Monetary policy always dominates fiscal policy because the BoE is independent, so inflation will be controlled and the fiscal expansion will have no effect'
        ],
        ans: 0,
        exp: 'Policy conflicts produce ambiguous macro outcomes and signal institutional credibility problems. The fiscal expansion (&#8593;G → AD right) and monetary tightening (&#8593;r → AD left) partially offset each other &#8212; but markets observe the contradiction. The 2022 mini-budget was exactly this: the government cut taxes (expansionary fiscal) while the BoE was raising rates. Markets priced in that the BoE would have to raise rates even higher to counteract the fiscal impulse &#8212; gilt yields spiked. The net effect is not neutral (option B) &#8212; the conflict forces the BoE to tighten more than otherwise necessary, at greater cost to growth. Neither policy \'dominates\' automatically.'
      },

      /* 10 &#8212; Chain: monetary tightening cycle */
      { type: 'chain',
        stem: 'Place the events in the correct order to trace the <strong>full transmission of a Bank Rate rise</strong> to its ultimate effect on inflation.',
        items: [
          { label: 'CPI inflation begins to fall as demand pressures ease and firms have less pricing power', note: '' },
          { label: 'The Bank of England votes to raise Bank Rate at an MPC meeting', note: '' },
          { label: 'Commercial banks raise mortgage rates, loan rates, and savings rates in response', note: '' },
          { label: 'Aggregate demand falls as C and I contract; a negative output gap may open', note: '' },
          { label: 'Consumer spending and business investment fall as borrowing becomes more expensive', note: '' },
          { label: 'Additionally, sterling appreciates as higher UK rates attract capital flows, easing imported inflation', note: '' }
        ],
        correctOrder: [1, 2, 4, 5, 3, 0],
        exp: '<strong>Monetary tightening transmission:</strong><br>1. MPC votes to raise Bank Rate.<br>2. Commercial banks raise their rates immediately.<br>3. C and I contract as borrowing costs rise.<br>4. AD falls; output gap opens (or negative gap widens).<br>5. Exchange rate channel: sterling appreciates, easing import costs.<br>6. CPI falls as demand pressures ease.<br><br>The key A* evaluation point: step 6 happens 12-24 months after step 1 &#8212; the BoE is always targeting future inflation based on current decisions, using forward-looking models. Policy mistakes arise when today\'s rate decision is calibrated to yesterday\'s inflation data, which may no longer reflect the current economic position.'
      }

    ]
  };

})();
