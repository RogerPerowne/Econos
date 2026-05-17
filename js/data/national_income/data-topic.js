window.ECONOS_TOPIC = {
  id: 'national_income',
  topicNum: '4.1-4.3',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'National Income',
  estTime: '8-10 minutes',
  goal: 'Lock in the circular flow of income, equilibrium national income, and the caveats that make national income data meaningful.',

  intro: {
    heroKey: 'heroMultiplier',
    summary: 'National income is the total value of goods and services produced in an economy. The circular flow shows how income moves between households and firms; equilibrium is reached when injections equal leakages. But the numbers alone are not enough — knowing their limitations is what separates B from A* answers.',
    doInThis: 'Work through 3 cards: the circular flow (injections, leakages, equilibrium), equilibrium national income (the 45-degree diagram, output gaps), and the caveats for interpreting national income data (real vs nominal, per capita, distribution, PPP).',
    outcomes: [
      'Explain the circular flow of income with injections and leakages',
      'Identify equilibrium national income on a 45-degree or injection-leakage diagram',
      'Evaluate national income data using caveats: real vs nominal, per capita, distribution, PPP'
    ],
    tip: 'Equilibrium national income is where injections = leakages (J = W), or equivalently where planned expenditure = actual output on the 45-degree diagram. A recessionary gap (equilibrium below full employment) is the Keynesian case for stimulus.',
    stages: [
      { num: 1, name: 'Learn it', sub: '3 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [

    {
      id: 'circular-flow',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 3',
      title: 'The circular flow of income',
      lede: 'Income circulates between households and firms. Injections add to the flow; leakages remove from it. Equilibrium is where injections equal leakages.',
      branches: [
        { tone: 'green',  label: 'Injections (J)',   sub: '<strong>Investment (I) + Government spending (G) + Exports (X)</strong> — money flowing INTO the circular flow from outside. Each raises national income.' },
        { tone: 'rose',   label: 'Leakages (W)',     sub: '<strong>Savings (S) + Taxation (T) + Imports (M)</strong> — money leaving the circular flow. Each reduces the multiplied effect of any injection.' },
        { tone: 'blue',   label: 'Equilibrium',      sub: '<strong>J = W</strong> — national income is stable when total injections equal total leakages. If J > W, income rises; if W > J, income falls.' }
      ],
      body: 'The <strong>circular flow of income</strong> models how income flows between the two main sectors of a simple economy — households and firms. Households supply factors of production to firms and receive factor incomes (wages, rent, profit, interest). Firms use these factors to produce goods and services, which households buy.<br><br>In the full model, <strong>injections</strong> (I + G + X) add money into the flow from outside. <strong>Leakages</strong> (S + T + M) drain money out. The economy is in equilibrium when J = W — any imbalance triggers a change in national income until the two re-equalise.',
      keyTerms: [
        { term: 'Injection', def: 'Money added to the circular flow from outside: investment (I), government spending (G), export revenue (X).' },
        { term: 'Leakage (withdrawal)', def: 'Money leaving the circular flow: savings (S), taxation (T), imports (M).' },
        { term: 'Equilibrium (J = W)', def: 'National income is stable when total injections equal total leakages.' }
      ],
      examEdge: 'Paradox of thrift: if every household saves more (rational individually), total leakages rise → income falls → saving falls back to where it started. The paradox of thrift: individually rational saving is collectively self-defeating. A* answers cite this in recession contexts to argue against austerity when households are already saving heavily.'
    },

    {
      id: 'equilibrium-income',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 2 of 3',
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
      examEdge: 'Full employment equilibrium vs Keynesian equilibrium: the Classical view says equilibrium always occurs at full employment (flexible prices/wages). The Keynesian view says equilibrium can occur below full employment — a deficiency of AD that requires intervention to fix. Stating this as the core disagreement between schools is analytically precise.'
    },

    {
      id: 'income-welfare',
      template: 'deflation',
      stepLabel: 'Learn: Step 3 of 3',
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
      examEdge: 'The complete welfare sentence: \'While real GDP per capita has [risen/fallen], this overstates/understates actual welfare because [distribution/PPP/sustainability]. A better measure — [HDI/Gini/median income] — reveals [alternative picture].\' This structure always works and always scores.',
      keyTakeaway: { title: 'The big picture', text: 'National income is not the same as national welfare. GDP measures the value of output, not the quality of life. Real, per-capita, distribution-adjusted, and PPP-corrected measures are all better proxies for welfare than headline nominal GDP. Use the caveats to construct analytically precise answers in any welfare question.' },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
