/* ============================================================
   ECONOS — content data for multiplier
   7 cards · revision-tight · exam-edge gems flagged
   Edexcel Theme 2.4
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'multiplier',
  topicNum: '2.4',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'National Income & The Multiplier',
  estTime: '9-11 minutes',
  goal: 'Lock in equilibrium income, the multiplier formula, and the leakages that shrink it',

  intro: {
    heroKey: 'heroMultiplier',
    summary: "The multiplier is one of the most-tested concepts in Paper 2. The formula is easy; the nuance — what determines its size, why it differs between policies, and how the circular flow leaks — is what lifts B answers to A*.",
    doInThis: 'Work through 8 cards: circular flow, equilibrium income, multiplier formula, a full worked calculation, factors affecting the multiplier, the accelerator, policy comparisons, and welfare caveats.',
    outcomes: [
      'Calculate and apply the multiplier using MPC and leakage rates',
      'Explain why the multiplier differs across policies and countries',
      'Distinguish the multiplier from the accelerator'
    ],
    tip: 'These cards are revision, not first-time learning. They cue what you already know and flag the gems that lift answers from B to A*.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards',    state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 — Framing: the circular flow ----- */
    {
      id: 'circular-flow',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'The circular flow of income',
      lede: 'Income circulates between households and firms. Injections add to the flow; leakages remove from it. Equilibrium is where injections equal leakages.',
      branches: [
        { tone: 'green',  label: 'Injections (J)',   sub: '<strong>Investment (I) + Government spending (G) + Exports (X)</strong> — money flowing INTO the circular flow from outside. Each raises national income.' },
        { tone: 'rose',   label: 'Leakages (W)',     sub: '<strong>Savings (S) + Taxation (T) + Imports (M)</strong> — money leaving the circular flow. Each reduces the multiplied effect of any injection.' },
        { tone: 'blue',   label: 'Equilibrium',      sub: '<strong>J = W</strong> — national income is stable when total injections equal total leakages. If J > W, income rises; if W > J, income falls.' }
      ],
      examEdge: {
        title: 'Paradox of thrift',
        text: 'If every household saves more (rational individually), total leakages rise → income falls → saving falls back to where it started. <strong>The paradox of thrift:</strong> individually rational saving is collectively self-defeating. A* answers cite this in recession contexts to argue against austerity when households are already saving heavily.'
      },
      keyTakeaway: {
        title: 'National income accounting identity',
        text: 'At equilibrium: Y = C + I + G + (X−M). This is the same as the expenditure approach to GDP — confirming that the circular flow and the GDP accounts are two perspectives on the same thing.'
      }
    },

    /* ----- CARD 2 — Equilibrium national income ----- */
    {
      id: 'equilibrium-income',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Equilibrium national income',
      lede: 'The economy reaches equilibrium when planned expenditure equals actual output — and when injections equal leakages. Knowing what moves it is the foundation of macro policy analysis.',
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: '45-degree diagram',
          text: '<strong>Planned expenditure (E) vs national income (Y).</strong> The 45° line shows all points where Y = E. Equilibrium: where the expenditure line crosses the 45° line. Below: Y < E → firms run down stocks → output rises. Above: Y > E → stocks build → output falls.'
        },
        {
          num: '2',
          tone: 'blue',
          title: 'Injection-leakage diagram',
          text: '<strong>J and W plotted against Y.</strong> Leakages (S + T + M) rise with income (they\'re income-dependent). Injections (I + G + X) are broadly autonomous — horizontal. Equilibrium: where the two lines cross. Injection ↑ → equilibrium income rises.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Recessionary and inflationary gaps',
          text: '<strong>Recessionary gap:</strong> equilibrium income < full employment income — Keynesian case for stimulus. <strong>Inflationary gap:</strong> equilibrium income > full employment income — case for fiscal tightening or monetary tightening.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'Automatic stabilisers',
          text: 'In a recession, tax revenues fall and welfare spending rises automatically — injections rise and leakages fall — pushing equilibrium income back up without discretionary policy. A* answers cite this as the first line of macro defence before active fiscal policy.'
        }
      ],
      examEdge: {
        title: 'Full employment equilibrium vs Keynesian equilibrium',
        text: 'The Classical view: equilibrium always occurs at full employment (flexible prices/wages). The Keynesian view: equilibrium can occur <strong>below</strong> full employment — a deficiency of AD that requires intervention to fix. Stating this as the core disagreement between schools is analytically precise.'
      },
      connection: {
        title: 'Link to output gaps',
        text: 'A recessionary gap in the Keynesian model is identical to a negative output gap in the AD/AS model. Both describe an economy operating below potential. The multiplier is the tool that explains how a given injection closes that gap.'
      }
    },

    /* ----- CARD 3 — The multiplier formula ----- */
    {
      id: 'multiplier-formula',
      template: 'puzzle',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'The multiplier: formula and mechanism',
      lede: "A £10bn injection doesn't just add £10bn to GDP. It circulates — income, spending, income, spending — until leakages drain it away. The multiplier tells you the total effect.",
      classical: {
        title: 'The multiplier formulas',
        formula: 'k = 1 \xf7 (1 − MPC)',
        formulaSub: 'Equivalent forms: k = 1 \xf7 MPS = 1 \xf7 (MPS + MRT + MPM)',
        quote: '"Every injection becomes someone else\'s income, and they spend part of it, and so on..."',
        examples: 'If MPC = 0.8, k = 5. A £10bn injection raises national income by £50bn total. If MPC = 0.6, k = 2.5. The <strong>more households spend rather than save/tax/import</strong>, the larger the multiplier.'
      },
      puzzle: {
        title: 'Tracing the ripple with MPC = 0.8',
        chartCaption: 'Each round, 80% of income is spent; 20% leaks out. Total converges to £50bn.',
        bullets: [
          '<strong>Round 1:</strong> Government injects £10bn into road-building. Construction workers receive £10bn income.',
          '<strong>Round 2:</strong> Workers spend £8bn (MPC=0.8) at local shops. Shopkeepers receive £8bn income.',
          '<strong>Round 3:</strong> Shopkeepers spend £6.4bn. And so on — each round 80% of the previous.',
          '<strong>Total over all rounds:</strong> £10bn \xd7 1\xf7(1−0.8) = £10bn \xd7 5 = <strong>£50bn</strong>.'
        ],
        cliffhanger: 'So the full effect is always 5× the injection?',
        reveal: {
          title: 'No — the full-leakage formula',
          text: "Real-world multipliers are much smaller. The full formula is <strong>k = 1\xf7(MPS+MRT+MPM)</strong>. In the UK, MPM (marginal propensity to import) is high (~0.3) and MRT (marginal tax rate) is ~0.35. Typical UK multiplier ≈ <strong>0.5 to 1.5</strong> — far below the simple 5. Citing the full-leakage version is an A* move.",
          hints: ['MPS ≈ 0.15', 'MRT ≈ 0.35', 'MPM ≈ 0.30', 'k ≈ 1\xf70.8 ≈ 1.25']
        }
      },
      examEdge: {
        title: 'Always apply the multiplier to fiscal policy answers',
        text: 'When asked about the effect of fiscal stimulus, the answer is <strong>never</strong> just \'AD shifts right by £X\'. It\'s \'AD shifts right by £X \xd7 k\'. Stating the multiplier value (even approximately) and the factors that determine it is a 3-mark gem in Paper 2.'
      }
    },

    /* ----- CARD 4 — Worked example: full multiplier calculation ----- */
    {
      id: 'multiplier-worked',
      template: 'worked-example',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Worked Example: Calculating the Multiplier Effect',
      scenario: 'The UK government announces a <strong>£10bn green infrastructure programme</strong> — new offshore wind farms built using domestic contractors. A macro analyst is asked to estimate the total impact on national income.\n\nGiven: MPS = 0.15 · MRT = 0.25 · MPM = 0.10',
      steps: [
        {
          label: 'Step 1 — Sum the leakage rates',
          hint: 'The full multiplier formula uses three leakages. What do MPS, MRT, and MPM each represent, and what is their sum here?',
          answer: '<strong>MPS</strong> (marginal propensity to save) = 0.15 — fraction of each extra £1 of income that is saved.\n<strong>MRT</strong> (marginal rate of tax) = 0.25 — fraction taken in tax.\n<strong>MPM</strong> (marginal propensity to import) = 0.10 — fraction spent on imports (leaks abroad).\n\n<strong>Total leakage rate = MPS + MRT + MPM = 0.15 + 0.25 + 0.10 = 0.50</strong>\n\nHalf of every additional pound of income leaks out of the domestic circular flow.'
        },
        {
          label: 'Step 2 — Calculate the multiplier (k)',
          hint: 'Apply the full leakage formula. What is k = 1 ÷ (total leakage rate)?',
          answer: '<strong>k = 1 ÷ (MPS + MRT + MPM) = 1 ÷ 0.50 = 2.0</strong>\n\nEvery £1 of government injection will generate £2 of national income in total — £1 direct + £1 from successive re-spending rounds.'
        },
        {
          label: 'Step 3 — Calculate the total change in national income (ΔY)',
          hint: 'Multiply the initial injection by k. What is the total income effect of the £10bn programme?',
          answer: '<strong>ΔY = k × ΔG = 2.0 × £10bn = £20bn</strong>\n\nThe £10bn injection raises national income by £20bn. Of this, £10bn is the direct effect; the remaining £10bn is the multiplied effect as income is re-spent round after round until all £20bn has leaked out.'
        },
        {
          label: 'Step 4 — Contrast with the simple (naïve) multiplier',
          hint: 'If a student used only MPS and ignored taxes and imports, what multiplier would they get — and why is it wrong?',
          answer: '<strong>Simple k = 1 ÷ MPS = 1 ÷ 0.15 = 6.7</strong> → would predict ΔY = <strong>£67bn</strong>.\n\nThat is <em>more than three times</em> the realistic estimate. The simple version ignores that each re-spending round also loses 25p to tax and 10p to imports per £1. Using k = 1/(1−MPC) without accounting for MRT and MPM is a common exam error — and an easy mark lost.'
        },
        {
          label: 'Step 5 — Evaluate: will the full £20bn materialise?',
          hint: 'Even with a correct multiplier, what real-world factors could mean the actual income gain is less (or more) than £20bn?',
          answer: '<strong>Factors that could reduce the effect below £20bn:</strong>\n• <em>Spare capacity limit:</em> if the economy is near full employment, extra demand becomes inflation, not extra output — the real multiplier falls toward zero.\n• <em>Crowding out:</em> if the programme is debt-financed, higher borrowing may raise interest rates → private investment falls → partially offsets G.\n• <em>Confidence:</em> if households expect future tax rises to repay the debt, they may save the extra income rather than spend it.\n• <em>Time lags:</em> the full chain takes 18–24 months — the economy may have recovered before the effect plays through.\n\n<strong>Examiner\'s note:</strong> stating a specific k value (e.g. k = 2) and then evaluating the real-world limits is a 4–5 mark structure in Paper 2 data-response questions.'
        }
      ],
      conclusion: {
        label: 'Key result',
        text: 'k = 2.0 → ΔY = £20bn. The full-leakage multiplier (accounting for MPS, MRT, and MPM) gives a result roughly 3× smaller than the naïve formula. In the UK, realistic multipliers are typically 1.2–1.7 — far below the textbook k = 5 that students sometimes mis-apply.'
      }
    },

    /* ----- CARD 5 — Factors affecting the size of the multiplier ----- */
    {
      id: 'multiplier-size',
      template: 'cause',
      tone: 'amber',
      bannerLabel: 'What determines the multiplier value?',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'What determines the size of the multiplier?',
      lede: 'The multiplier is NOT a fixed number. It varies by country, by policy type, and by where the economy is in the cycle. Understanding why is the A* distinction.',
      diagramCaption: 'The multiplier = 1 \xf7 (MPS + MRT + MPM). Each leakage reduces the multiplier.',
      causes: {
        title: 'Factors that shrink the multiplier',
        items: [
          '<strong>High MPM (marginal propensity to import):</strong> open economies like the UK \'leak\' a large share of each injection into imports. This is why UK multipliers are lower than in larger, more closed economies like the US.',
          '<strong>High MRT (marginal tax rate):</strong> progressive tax systems drain income quickly each round. Higher tax rates → lower multiplier.',
          '<strong>High MPS (savings rate):</strong> households save more → less circulates as spending each round.',
          '<strong>Excess capacity vs full employment:</strong> at full employment, extra AD becomes inflation not output — the real-world multiplier falls towards zero.',
          '<strong>Confidence and expectations:</strong> if stimulus is not believed to be permanent, households may save it rather than spend — reducing the multiplier.',
          '<strong>Timing and speed:</strong> if the economy recovers before the injection works through, the multiplier\'s full chain is cut short.'
        ]
      },
      hallmarks: {
        title: 'When the multiplier is largest',
        items: [
          'Economy in deep recession: large negative output gap, spare capacity absorbs extra demand',
          'Interest rates already low (no crowding out): fiscal stimulus isn\'t offset by higher rates',
          'High MPC population: spending stimulus, not saving',
          'Domestically-produced goods targeted: less \'leaks\' into imports',
          'Sustained multi-year spending commitments, not one-off'
        ]
      },
      ukExamples: {
        title: 'UK multiplier estimates',
        text: '<strong>IMF estimates (2012):</strong> UK fiscal multipliers were 0.9–1.7 during the 2008-10 recession — higher than the pre-crisis estimate of ~0.5. This led them to criticise austerity as underestimating the output cost. <strong>Treasury estimates (2010):</strong> assumed multiplier of 0.5 — now widely considered too low for a recession context.'
      },
      examEdge: {
        title: 'The IMF mea culpa is exam gold',
        text: "The IMF's 2012 admission that fiscal multipliers were larger than estimated during recessions is one of the most powerful real-world economics examples available. Citing it signals serious engagement: <em>'The IMF's 2012 World Economic Outlook revised multiplier estimates upward, suggesting austerity policies were contractionary at larger-than-expected magnitudes.'</em>"
      },
      policy: {
        title: 'Policy targeting implications',
        text: 'Multipliers vary by policy type: <strong>transfer payments</strong> have high multipliers (go to high-MPC households). <strong>Tax cuts for the wealthy</strong> have low multipliers (low-MPC — much saved). <strong>Government spending on domestic goods/services</strong> avoids import leakage. Targeting the multiplier is a key dimension of fiscal policy design.'
      }
    },

    /* ----- CARD 6 — The accelerator ----- */
    {
      id: 'accelerator',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'The accelerator principle',
      lede: "The multiplier says an injection raises income. The accelerator says rising income raises investment further. Together they create boom-bust cycles. The interaction is the A* insight.",
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'The accelerator relationship',
          text: '<strong>I = v \xd7 ΔY</strong> — investment is a function of the <em>change</em> in national income, not its level. If output grows, firms need more capacity → investment rises. If growth slows (output still rising, but more slowly), investment falls.'
        },
        {
          num: '2',
          tone: 'blue',
          title: 'Why it amplifies cycles',
          text: 'Multiplier: injection → income rises. Accelerator: rising income → investment rises → more income (multiplier again). The <strong>multiplier-accelerator interaction</strong> amplifies booms and deepens recessions beyond what either mechanism alone would produce.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Why investment collapses in recessions',
          text: 'If GDP growth slows from 3% to 1%, output is still rising — but the <em>change</em> in output (ΔY) has fallen. The accelerator means investment falls sharply. This explains why investment is the most volatile component of AD despite being \'only\' ~17% of GDP.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'Limitations of the accelerator',
          text: 'Assumes firms always invest to expand capacity (ignores spare capacity, confidence). Ignores interest rates and credit conditions. Real-world: firms may respond to rising demand by using overtime before investing. The accelerator is a tendency, not a mechanical rule.'
        }
      ],
      examEdge: {
        title: 'The multiplier-accelerator link',
        text: "A* answers don't treat the multiplier and accelerator as separate topics — they link them: <em>'The fiscal injection raises income via the multiplier, which stimulates investment via the accelerator, generating further income rounds. This interaction explains why economic cycles are more volatile than the initial shock.'</em>"
      },
      connection: {
        title: 'Cycle connection',
        text: 'The multiplier-accelerator interaction is the theoretical explanation for the trade cycle. Expansions overshoot because rising income accelerates investment; downturns deepen because falling growth collapses investment. Government policy can break the cycle by stabilising the income path.'
      }
    },

    /* ----- CARD 7 — Multiplier and fiscal policy types ----- */
    {
      id: 'multiplier-policy',
      template: 'paired',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Multiplier effects by policy type',
      lede: 'Not all fiscal policies have the same multiplier. Understanding the differences is key to evaluating fiscal policy options.',
      pairs: [
        {
          tone: 'green',
          label: 'Higher multiplier policies',
          drivers: [
            'Direct government spending on public services, infrastructure',
            'Transfer payments to low-income households (high MPC)',
            'Tax cuts targeted at low-income earners (high MPC)',
            'Domestically-produced goods and services (less import leakage)',
            'Sustained multi-year programmes (chain builds up over time)'
          ],
          example: '<strong>2009 UK stimulus:</strong> car scrappage scheme boosted UK manufacturing directly. <strong>Infrastructure investment:</strong> multiplier estimated 1.5+ because it employs domestic labour and creates lasting capacity.'
        },
        {
          tone: 'amber',
          label: 'Lower multiplier policies',
          drivers: [
            'Tax cuts for high-income earners (low MPC — mostly saved)',
            'Spending on imported goods and services',
            'Short-term, reversible stimulus (doesn\'t build income expectations)',
            'Stimulus when economy is at or near full capacity',
            'Stimulus when interest rates rise to offset (crowding out)'
          ],
          example: '<strong>Trickle-down tax cuts:</strong> reducing top income tax rates primarily benefits high-MPC households. Research finds multipliers of 0.1-0.3 for top-rate cuts. <strong>Austerity context:</strong> spending cuts multipliers were underestimated 2010-12.'
        }
      ],
      examEdge: {
        title: 'Balanced budget multiplier',
        text: 'An A* insight: if government raises taxes AND spending by the same amount (ΔG = ΔT), the net multiplier effect is <strong>positive</strong> (≈ 1). Why? Because the spending multiplier > tax multiplier (tax is saved partly; spending goes directly into output). Citing this challenges the view that balanced budgets are fiscally neutral.'
      },
      policy: {
        title: 'Fiscal policy evaluation',
        text: 'The \'best\' fiscal stimulus for a deep recession: <strong>direct public spending on domestic infrastructure</strong> targeted at unemployed construction workers (high MPC, no import leakage, capacity-building). The \'worst\': one-off tax rebates to high earners when the economy is near full capacity.'
      }
    },

    /* ----- CARD 7 — National income and welfare ----- */
    {
      id: 'income-welfare',
      template: 'deflation',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'National income: what the numbers really tell us',
      lede: "National income statistics are the most-cited economic data in the world. But they come with crucial caveats — and knowing the caveats is what lifts welfare answers to A*.",
      mechanismsTitle: 'Five things to check before citing national income data',
      mechanisms: [
        {
          icon: '💱',
          title: 'Real, not nominal',
          text: 'Always adjust for inflation. Nominal income rising 5% with 5% inflation = no real gain. State explicitly: \'real national income\' or \'constant-price GDP\'.'
        },
        {
          icon: '👥',
          title: 'Per capita, not aggregate',
          text: 'If population grows faster than GDP, per capita income falls even with rising total GDP. The living standards measure is <strong>real GDP per capita</strong>.'
        },
        {
          icon: '⚖️',
          title: 'Distribution',
          text: 'Average income rising conceals who gets the gains. Rising GDP with widening Gini = growth concentrated at the top. Cite median income alongside mean for welfare questions.'
        },
        {
          icon: '🌿',
          title: 'Sustainability',
          text: 'Income generated by depleting natural resources or running unsustainable deficits overstates long-run welfare. Green GDP and genuine savings measures adjust for resource depletion.'
        },
        {
          icon: '🌍',
          title: 'Purchasing power (PPP)',
          text: 'International comparisons must use PPP-adjusted figures. Market exchange rates distort real purchasing power differences — especially for developing country comparisons.'
        }
      ],
      examples: {
        title: 'National income caveats in action',
        items: [
          { period: 'UK 2010-19', text: 'Total GDP grew, but real median wages stagnated or fell. National income was growing but labour\'s share was falling — a distributional story invisible in headline GDP.' },
          { period: 'China 2000-2020', text: 'GDP grew ~10%/year. But at market exchange rates, GDP per capita remained far below the US. At PPP, the gap was much smaller — and welfare (especially basic goods) was higher than market rates suggested.' },
          { period: 'Nigeria 2014 rebasing', text: 'Nigeria rebased its GDP calculation and overnight became Africa\'s largest economy. No actual change in output — just a better measurement. Illustrating how national income is constructed, not discovered.' }
        ]
      },
      examEdge: {
        title: 'The complete welfare sentence',
        text: 'In any welfare question, the A* structure is: <em>\'While real GDP per capita has [risen/fallen], this overstates/understates actual welfare because [distribution/PPP/sustainability]. A better measure — [HDI/Gini/median income] — reveals [alternative picture].\'</em> This structure always works and always scores.'
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }
  ]
};
