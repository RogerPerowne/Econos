/* ============================================================
   ECONOS — Quiz content for: National Income & The Multiplier
   10 questions covering the circular flow, equilibrium income,
   the multiplier formula, leakages, the accelerator, and welfare.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'multiplier_main',
    topicId:  'multiplier_main',
    title:    'National Income &amp; The Multiplier',
    subtitle: 'Theme 2.4 &#183; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the circular flow of income, the paradox of thrift, equilibrium national income, the multiplier formula and its leakages, factors affecting the multiplier, the accelerator, and the caveats for using national income as a welfare measure. Mixed formats develop the quantitative and applied analytical skills that Paper 2 consistently tests.',
    shortNames: {
      'circular-flow':      'Circular flow',
      'equilibrium-income': 'Equilibrium income',
      'multiplier-formula': 'The multiplier formula',
      'multiplier-size':    'Multiplier determinants',
      'accelerator':        'The accelerator',
      'multiplier-policy':  'Policy type differences',
      'income-welfare':     'National income and welfare'
    },

    questions: [

      /* 1 &#8212; MCQ: circular flow */
      { type: 'mcq',
        stem: 'In the circular flow model, which of the following is a <strong>leakage</strong> (withdrawal) from the circular flow?',
        opts: [
          'Household saving: income set aside rather than spent on domestic goods and services',
          'Government spending on public services and infrastructure',
          'Export earnings flowing into the domestic economy from abroad',
          'Firm investment in new machinery and factory equipment'
        ],
        ans: 0,
        exp: '<strong>Leakages</strong> (withdrawals) are flows of money out of the circular flow: <em>Savings (S) + Taxation (T) + Imports (M)</em>. Each reduces the multiplied effect of any injection. Option A (saving) is correct. Options B (G), C (exports), and D (investment) are all <em>injections</em> &#8212; flows of money into the circular flow. Equilibrium occurs when total injections (I + G + X) equal total leakages (S + T + M). If leakages exceed injections, national income falls; if injections exceed leakages, national income rises.'
      },

      /* 2 &#8212; Calculation: multiplier with MPC */
      { type: 'calculation',
        context: 'The government announces a <strong>&#163;8 billion</strong> increase in infrastructure spending. The marginal propensity to consume is <strong>0.8</strong>. The marginal propensity to import is <strong>0.25</strong> and the marginal rate of taxation is <strong>0.30</strong>.',
        working: [
          'Simple multiplier: k = 1 &#247; (1 &#8722; MPC) = 1 &#247; (1 &#8722; 0.8) = 1 &#247; 0.2 = 5',
          'Simple total effect: &#163;8bn &#215; 5 = &#163;40bn',
          'Full-leakage multiplier: k = 1 &#247; (MPS + MRT + MPM)',
          'MPS = 1 &#8722; MPC &#8722; MRT &#8722; MPM ... but use given values directly:',
          'k = 1 &#247; (0.20 + 0.30 + 0.25) = 1 &#247; 0.75 &#8776; 1.33',
          'Full-leakage total: &#163;8bn &#215; 1.33 &#8776; &#163;10.7bn'
        ],
        stem: 'What is the simple multiplier value, and how does the full-leakage estimate compare?',
        opts: [
          { ped: 'Simple k = 5 (total &#163;40bn); but full-leakage k &#8776; 1.33 (total ~&#163;10.7bn) &#8212; import and tax leakages dramatically reduce the real-world multiplier', typ: 'Correctly computes both multipliers and recognises the gap between them', rev: 'Simple: 1/(1-0.8)=5. Full: 1/(0.2+0.3+0.25)=1.33' },
          { ped: 'k = 1.33 in both cases; the simple multiplier formula is just a simplified version that gives the same result', typ: 'Confused the two formulas &#8212; they give very different results', rev: 'Simple formula ignores tax and import leakages; they are large in the UK' },
          { ped: 'k = 5 in both cases; the full-leakage formula does not apply to government spending, only to private investment', typ: 'Incorrectly restricts the full formula to private investment', rev: 'All injections face the same leakages &#8212; the formula applies to any injection type' },
          { ped: 'k = 8 because MPC = 0.8 and the multiplier equals MPC divided by one minus MPC', typ: 'Used k = MPC/(1-MPC) which gives 0.8/0.2 = 4, still wrong', rev: 'k = 1/(1-MPC) = 1/0.2 = 5, not 0.8/0.2' }
        ],
        ans: 0,
        exp: 'Simple k = 1/(1&#8722;0.8) = <strong>5</strong>, giving &#163;40bn. But the full-leakage formula k = 1/(MPS + MRT + MPM) = 1/(0.20 + 0.30 + 0.25) = 1/0.75 &#8776; <strong>1.33</strong>, giving ~&#163;10.7bn. The gap between &#163;40bn (simple) and &#163;10.7bn (full) illustrates why UK multipliers are much smaller than textbook examples suggest. The UK\'s high MPM (~0.3, reflecting our open trade position) and progressive tax system (MRT ~0.30-0.35) are the key leakages. The IMF\'s 2012 revision of multiplier estimates from ~0.5 to 0.9-1.7 during recessions (when leakages are smaller) is the real-world evidence A* answers deploy.'
      },

      /* 3 &#8212; Elastic sort: injections vs leakages */
      { type: 'elastic_sort',
        stem: 'Classify each item as an <strong>injection</strong> or a <strong>leakage</strong> from the circular flow.',
        categories: ['inj', 'leak'],
        categoryLabels: ['Injection', 'Leakage'],
        goods: [
          { icon: '&#128200;', label: 'UK businesses export manufactured goods to Germany', note: '', ans: 'inj' },
          { icon: '&#127968;', label: 'Households save 8% of their monthly income in ISAs', note: '', ans: 'leak' },
          { icon: '&#127968;', label: 'Government spends &#163;180bn on the NHS annually', note: '', ans: 'inj' },
          { icon: '&#128176;', label: 'Consumers pay income tax and National Insurance on their wages', note: '', ans: 'leak' },
          { icon: '&#128664;', label: 'UK households spend &#163;60bn per year importing foreign-made clothing', note: '', ans: 'leak' },
          { icon: '&#127981;', label: 'A technology firm invests &#163;500m in a new UK data centre', note: '', ans: 'inj' }
        ],
        exp: '<strong>Injections</strong> (I + G + X) add money into the circular flow from outside the household-firm loop. <strong>Leakages</strong> (S + T + M) remove money from the flow before it completes the next cycle. At equilibrium, total injections equal total leakages. An increase in any injection raises national income through the multiplier until leakages rise to match. A reduction in any injection (e.g. export collapse in 2008-09 global recession) reduces income through the reverse multiplier.'
      },

      /* 4 &#8212; MCQ: paradox of thrift */
      { type: 'mcq',
        stem: 'The <strong>paradox of thrift</strong> states that:',
        opts: [
          'If all households simultaneously increase saving, total national income falls, which reduces total saving back to its original level &#8212; individually rational but collectively self-defeating',
          'Governments that save (run surpluses) during recessions cause national income to fall faster, which increases the deficit and forces them to stop saving',
          'Firms that reduce investment (save their profits) during recessions are correct because it builds financial resilience and prevents further losses',
          'High savings rates always cause deflation because consumption falls, which is a permanent outcome unless the central bank intervenes'
        ],
        ans: 0,
        exp: 'The <strong>paradox of thrift</strong> (Keynes): if one household saves more, it is individually rational and builds its financial buffer. But if ALL households save more simultaneously, total consumption falls → AD falls → incomes fall → total saving actually falls back. The paradox: the collective attempt to save more results in the same aggregate saving but lower income for everyone. A* answers deploy this in recession contexts: if the government cuts spending (saves) when households are also saving heavily, the paradox compounds the fiscal multiplier-in-reverse, deepening the recession. This is the core Keynesian argument against austerity in a recession.'
      },

      /* 5 &#8212; Para fill: accelerator */
      { type: 'para_fill',
        stem: 'Complete the paragraph explaining the accelerator principle.',
        anchor: 'The accelerator links changes in national income to changes in investment.',
        para: 'The accelerator principle states that investment depends on the [1] in national income rather than its level. The formula is I = v &#215; [2]. Even if output is still rising but more slowly, investment [3] &#8212; because the change in output has fallen. This explains why investment is so [4] during the business cycle: a small slowdown in growth triggers a large fall in investment. When combined with the [5] effect, this creates boom-bust amplification: the injection raises income, which [6] investment, which raises income further. A key limitation is that the accelerator ignores [7] &#8212; firms may use overtime or existing spare capacity before investing.'
        ,
        blanks: [
          { id: 1, opts: ['change', 'level', 'total', 'growth rate'], ans: 0 },
          { id: 2, opts: ['&#916;Y', 'Y', 'Y/L', 'C'], ans: 0 },
          { id: 3, opts: ['falls', 'rises', 'stays constant', 'turns negative'], ans: 0 },
          { id: 4, opts: ['volatile', 'stable', 'predictable', 'large'], ans: 0 },
          { id: 5, opts: ['multiplier', 'wealth', 'crowding-out', 'substitution'], ans: 0 },
          { id: 6, opts: ['accelerates', 'reduces', 'stabilises', 'smooths'], ans: 0 },
          { id: 7, opts: ['spare capacity', 'interest rates', 'tax levels', 'inflation'], ans: 0 }
        ],
        exp: '(1) <strong>Change</strong>: the accelerator is driven by &#8710;Y, not Y itself. (2) <strong>&#916;Y</strong>: I = v &#215; &#8710;Y where v is the capital-output ratio. (3) <strong>Falls</strong>: if &#8710;Y falls (growth slows), investment falls even though the level of Y is still rising. (4) <strong>Volatile</strong>: UK investment fell 25% in 2008-09 despite I being only 17% of AD. (5) <strong>Multiplier</strong>: multiplier-accelerator interaction amplifies cycles. (6) <strong>Accelerates</strong>: rising income accelerates investment which raises income further. (7) <strong>Spare capacity</strong>: firms with idle machinery will use it before investing &#8212; the accelerator is a tendency, not a mechanical rule.'
      },

      /* 6 &#8212; Multi-select: factors raising multiplier */
      { type: 'multi_select',
        stem: 'Which of the following would tend to <strong>increase the size of the fiscal multiplier</strong>?',
        opts: [
          'The economy is in a deep recession with a large negative output gap',
          'The Bank of England simultaneously raises interest rates to prevent crowding out',
          'Spending is directed at low-income households with a high marginal propensity to consume',
          'The economy is a closed economy with no import leakage',
          'The government stimulus takes the form of one-off cash transfers to high-income earners',
          'Interest rates are at the zero lower bound, eliminating the crowding out effect'
        ],
        correct: [0, 2, 3, 5],
        exp: 'Options A, C, D, and F all increase the multiplier. (A) Spare capacity: with a negative output gap, extra AD becomes real output not inflation, maximising the multiplier. (C) Low-income, high-MPC targeting: each &#163;1 circulates more, with less leaking into savings. (D) No import leakage: a closed economy retains all spending domestically. (F) ZLB: no crowding out via interest rate rises. Option B (rate rises) and E (high-income earners, low MPC) both <em>reduce</em> the multiplier &#8212; option B through crowding out, option E through high savings rates.'
      },

      /* 7 &#8212; Odd one out */
      { type: 'odd_one_out',
        stem: 'Three of these are <strong>reasons to use national income per capita cautiously as a welfare measure</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#9878;', label: 'Rising average income may coexist with widening inequality &#8212; the median voter may be worse off', note: '' },
          { icon: '&#127807;', label: 'GDP does not subtract the environmental costs of pollution and resource depletion', note: '' },
          { icon: '&#128200;', label: 'GDP per capita is internationally comparable using PPP-adjusted figures from the World Bank', note: '' },
          { icon: '&#9203;', label: 'Longer working hours increase GDP but reduce leisure time and may reduce overall wellbeing', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is option C. International comparability using PPP-adjusted data is a <strong>strength</strong> of GDP per capita &#8212; it allows meaningful cross-country welfare comparisons. The other three are genuine caveats: (A) distribution &#8212; average income can rise while median income falls; (B) environmental externalities are omitted from GDP; (D) leisure and work-life balance are not captured by output measures. A* welfare essays always include at least two of these caveats, matched to the specific country context in the question.'
      },

      /* 8 &#8212; Multi-select: evaluation of the multiplier and fiscal policy */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>the multiplier and fiscal policy</strong>. Which of the following statements demonstrate <strong>evaluation</strong> &#8212; as opposed to description or one-sided analysis?',
        opts: [
          'The fiscal multiplier is larger in a recession with a negative output gap than at full employment because spare capacity means extra AD translates into real output growth rather than inflation, amplifying the income effect of any injection',
          'The multiplier works by causing a chain of spending: an initial injection raises income, which raises consumption by the marginal propensity to consume, which raises income again, and so on until leakages absorb the full injection',
          'Infrastructure investment has a higher multiplier (1.5&#8211;2.0) than corporation tax cuts (0.2&#8211;0.4) because construction workers have higher MPC and the spending stays largely domestic &#8212; making the composition of fiscal stimulus as important as its size',
          'Government spending increases aggregate demand through the multiplier effect, with the size of the total increase depending on the marginal propensity to consume and the rate of leakages',
          'A fiscal credibility argument qualifies the Keynesian case for stimulus: if markets doubt the government\'s ability to stabilise debt, gilt yields rise and crowd out private investment, potentially offsetting the multiplier effect &#8212; as illustrated by the UK\'s experience during the 2022 mini-budget',
          'The marginal propensity to save, the marginal rate of taxation, and the marginal propensity to import all act as leakages that reduce the size of the multiplier below the simple 1/(1&#8722;MPC) formula'
        ],
        correct: [0, 2, 4],
        exp: '<strong>Options A, C, and E are evaluation.</strong> (A) qualifies the size of the multiplier by specifying the macroeconomic conditions (negative output gap vs full employment) that determine whether it is large or small &#8212; reaching a directional conclusion that the multiplier is context-dependent, not a fixed number. (C) uses the comparison between infrastructure and corporate tax multipliers to reach the evaluative conclusion that stimulus composition matters as much as scale &#8212; a genuine weighing of evidence with a specific direction. (E) introduces the fiscal credibility counter-argument to the Keynesian stimulus case, specifying the mechanism (gilt yield rise → crowding out) and citing the 2022 mini-budget as evidence, reaching a qualified conclusion that the multiplier effect may be offset in certain fiscal contexts. <strong>Options B, D, and F are not evaluation.</strong> (B) is an accurate description of the multiplier mechanism but is pure description with no evaluative content &#8212; it does not qualify the conclusion or weigh competing factors. (D) is a general statement of how fiscal policy works through the multiplier &#8212; correct but entirely descriptive. (F) correctly identifies the three leakages and their effect on the multiplier but is description of a formula rather than evaluation of when or how much the multiplier matters in a specific context.'
      },

      /* 9 &#8212; Data table: multiplier policy types */
      { type: 'data_table',
        stem: 'The table shows IMF estimates of fiscal multipliers by policy type during recession contexts.',
        headers: ['Policy type', 'Typical multiplier range', 'Key reason'],
        rows: [
          ['Government spending on infrastructure', '1.5 &#8211; 2.0', 'Domestic employment, capacity-building, minimal import leakage'],
          ['Welfare transfers to low-income households', '1.0 &#8211; 1.5', 'High MPC recipients; spending stays domestic'],
          ['Income tax cuts &#8212; broad base', '0.5 &#8211; 1.0', 'Mixed MPC; some savings leakage especially higher earners'],
          ['Corporation tax cuts', '0.2 &#8211; 0.4', 'Low MPC (profits saved or paid to shareholders); long-run investment benefit uncertain'],
          ['One-off cash transfers to high earners', '0.1 &#8211; 0.2', 'Low MPC; most saved rather than spent']
        ],
        question: 'Which policy design would maximise the impact on GDP per pound of fiscal stimulus during a recession?',
        opts: [
          'Infrastructure investment, because it directly employs domestic workers (high MPC), avoids import leakage, and builds productive capacity that also shifts LRAS right in the long run',
          'Corporation tax cuts, because lower business taxes attract foreign investment and signal pro-business commitment, which eventually feeds through to higher wages and consumption',
          'One-off cash transfers to all households equally, because the broad base maximises the number of recipients and therefore total spending',
          'Broad-based income tax cuts, because reducing the marginal tax rate increases the incentive to work and raises potential output via supply-side effects'
        ],
        ans: 0,
        exp: 'Infrastructure investment has the highest multiplier (1.5&#8211;2.0) for three reasons: (1) it directly employs domestic construction workers who have high MPC; (2) spending is predominantly on domestic goods and services (low import leakage); (3) it builds productive capacity (shifts LRAS right), adding a long-run supply-side benefit on top of the short-run demand effect. Corporation tax cuts and transfers to high earners have the lowest multipliers (0.1&#8211;0.4) because recipients have low MPC and much of the stimulus is saved or invested in financial assets rather than domestic spending. This analysis &#8212; comparing policy types by multiplier &#8212; is exactly the kind of evaluation Edexcel rewards in fiscal policy questions.'
      },

      /* 10 &#8212; Chain: the multiplier-accelerator interaction */
      { type: 'chain',
        stem: 'Place the steps in the correct order to describe the <strong>multiplier-accelerator interaction</strong> during an economic expansion.',
        items: [
          { label: 'Firms invest further to expand capacity, triggering another round of the multiplier', note: '' },
          { label: 'The government injects &#163;10bn into the economy via infrastructure spending', note: '' },
          { label: 'Higher output and rising income signal to firms that demand is growing; investment rises (accelerator: &#916;I = v &#215; &#916;Y)', note: '' },
          { label: 'National income rises by the multiplied amount: &#163;10bn &#215; k = &#163;13bn (assuming k &#8776; 1.3)', note: '' },
          { label: 'The interaction creates an expansion larger than either the multiplier or accelerator alone would produce', note: '' },
          { label: 'Workers in the construction sector receive income and spend most of it on other domestic goods (MPC = 0.75)', note: '' }
        ],
        correctOrder: [1, 5, 3, 2, 0, 4],
        exp: '<strong>The multiplier-accelerator chain:</strong><br>1. Government injects &#163;10bn.<br>2. Workers receive income and spend 75% (MPC = 0.75) &#8212; Round 1 multiplier.<br>3. Income rises by ~&#163;13bn via full multiplier chain.<br>4. Rising &#916;Y signals to firms &#8212; they invest more (accelerator).<br>5. New investment triggers another multiplier round.<br>6. The combined effect exceeds either mechanism alone &#8212; boom amplification.<br><br>The interaction works in reverse during recessions: falling income collapses investment (accelerator) which further reduces income (multiplier). This is the theoretical explanation for why economic cycles are more volatile than the underlying shocks. A* answers link both mechanisms explicitly and note that government counter-cyclical policy can break the cycle by stabilising &#916;Y.'
      }

    ]
  };

})();
