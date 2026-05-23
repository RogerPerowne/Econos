window.ECONOS_TOPIC = {
  id: 'public_goods',
  topicNum: '3.3',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Public Goods',
  estTime: '12-15 minutes',
  goal: 'Master non-rivalry and non-excludability, the free rider problem, the distinction between pure and quasi-public goods, and the case for state provision — and learn to weigh that case against government failure.',
  intro: {
    heroKey: 'heroPublicGoods',
    summary: 'Public goods are the clearest case of market failure: because they are non-excludable and non-rival, no private firm can profitably provide them. The free rider problem ensures that — without state provision — they are drastically under-supplied.',
    doInThis: 'Work through 7 cards: the big picture, the free rider problem, four classic examples, the public/private/quasi distinction, why markets fail (vertical demand summation), how government steps in, and the policy debate.',
    outcomes: [
      'Define public good using the two criteria: non-rival and non-excludable',
      'Explain the free rider problem using prisoner\'s dilemma logic',
      'Distinguish pure public goods from quasi-public goods with worked examples',
      'Use vertical demand summation to show why markets cannot capture enough revenue',
      'Evaluate state provision against government failure (information, opportunity cost, optimal quantity)'
    ],
    tip: 'Non-rival = one person\'s use does not reduce availability to others. Non-excludable = impossible to prevent non-payers from benefiting. BOTH must apply for a pure public good. Either alone is not sufficient.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    /* ============================================================
       CARD 1 — Public Goods: the big picture
       ============================================================ */
    {
      id: 'public_goods_1',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Public Goods: the big picture',
      tip: { icon: '🏛️', tone: 'blue', text: '<strong>Public goods</strong> are unusual because one person can use them without reducing anyone else\'s use, and it is hard or impossible to stop non-payers enjoying them too. That combination creates the <em>free rider</em> problem — and explains why government usually has to step in.' },
      flowTitle: 'The logic of the topic',
      flowEmoji: '🧭',
      flow: [
        { tone: 'green',  icon: '👥', title: 'Non-rival',           sub: 'one person\'s use does not reduce another\'s.' },
        { tone: 'purple', icon: '🔓', title: 'Non-excludable',      sub: 'non-payers cannot easily be kept out.' },
        { tone: 'amber',  icon: '🪤', title: 'Free rider problem',  sub: 'rational people wait for others to pay.' },
        { tone: 'rose',   icon: '📉', title: 'Market failure',      sub: 'private firms cannot capture enough revenue.' },
        { tone: 'blue',   icon: '🏛️', title: 'Government provision', sub: 'state funds / provides the good through taxation.' }
      ],
      comparison: {
        title: 'Two defining properties · the public–quasi distinction',
        emoji: '⚖️',
        vs: '+',
        position: 'after-diagram',
        left:  { tone: 'green', icon: '👥', label: 'The two defining properties',
          caption: '<strong style="color:#059669">Non-rivalry</strong> — extra users can benefit at near-zero marginal cost.<br><em>e.g. defence, street lighting.</em><br><br><strong style="color:#7C3AED">Non-excludability</strong> — once provided, it is difficult to stop non-payers consuming the good.<br><em>e.g. flood defences, police patrols.</em>' },
        right: { tone: 'blue', icon: '🧩', label: 'Important distinction',
          caption: '<strong style="color:#059669">Pure public goods</strong> — fully non-rival and non-excludable.<br><em>e.g. national defence, clean air.</em><br><br><strong style="color:#2563EB">Quasi-public goods</strong> — partly public, but excludable or rival at some point.<br><em>e.g. motorways, parks, public broadcasting.</em>' }
      },
      lockIn: {
        title: 'What you need to lock in',
        items: [
          'Define non-rival and non-excludable accurately',
          'Explain the free rider problem',
          'Distinguish pure from quasi-public goods',
          'Link public goods to market failure and state intervention'
        ]
      },
      examEdge: 'Public goods cause <strong>complete market failure</strong> because non-excludability prevents firms charging all beneficiaries, while non-rivalry means society\'s total benefit is greater than any one individual\'s willingness to pay.'
    },

    /* ============================================================
       CARD 2 — The Free Rider Problem
       ============================================================ */
    {
      id: 'public_goods_2',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'The Free Rider Problem',
      tip: { icon: '👥', tone: 'blue', text: 'Because public goods are non-excludable, people can enjoy them even if they do not pay. A rational individual therefore has an incentive to <em>free ride</em> and wait for others to fund the good.' },
      flowTitle: 'Why the market breaks down',
      flowEmoji: '⚙️',
      flow: [
        { tone: 'green',  icon: '🌍', title: 'Public good exists',         sub: 'A good that everyone can enjoy.' },
        { tone: 'purple', icon: '🔓', title: 'Non-payers cannot be excluded', sub: 'Everyone can use it, whether they pay or not.' },
        { tone: 'amber',  icon: '⏳', title: 'Individuals wait for others to pay', sub: 'Each person hopes someone else will cover the cost.' },
        { tone: 'rose',   icon: '📉', title: 'Firm cannot collect enough revenue', sub: 'Not enough money is raised, so provision collapses.' }
      ],
      rowsLabel: 'A simple prisoner\'s dilemma logic',
      rowsEmoji: '🎲',
      rowsHeader: 'Resident A',
      colA: '😀 B Contributes',
      colB: '😐 B does not contribute',
      rows: [
        { label: 'Contributes',         colA: '<strong>Both contribute:</strong> public good is provided. Both pay the cost.',     colB: '<strong>A pays, B free rides:</strong> public good is provided. B benefits for free.' },
        { label: 'Does not contribute', colA: '<strong>A free rides, B pays:</strong> public good is provided. A benefits for free.', colB: '<strong>Both avoid paying:</strong> public good is <em>not</em> provided.' }
      ],
      causesStyle: 'tinted-flat',
      causesEmoji: '💡',
      causesLabel: 'Key economic insight',
      causes: [
        { tone: 'green', icon: '✅', head: 'Rational for the individual', body: 'Free riding is individually sensible because you can enjoy the benefit without paying the cost.' },
        { tone: 'rose',  icon: '👥', head: 'Bad for society',             body: 'If everyone behaves this way, the good is not provided at all.' }
      ],
      lockIn: {
        title: 'What to lock in',
        items: [
          'Define free rider',
          'Link it to non-excludability',
          'Explain why firms cannot earn revenue',
          'Conclude with no private provision'
        ]
      },
      examEdge: 'If non-payers cannot be excluded, a private firm cannot charge all beneficiaries, so the market under-provides or fails to provide the good altogether.'
    },

    /* ============================================================
       CARD 3 — Examples of Public Goods
       ============================================================ */
    {
      id: 'public_goods_3',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Examples of Public Goods',
      tip: { icon: '🏛️', tone: 'blue', text: '<strong>Public goods</strong> are easiest to understand through concrete examples. The test is always the same — is the good <strong>non-rival</strong> and <strong>non-excludable</strong> in practice?' },
      illustratedGridLabel: 'Four classic examples',
      illustratedGridEmoji: '🖼️',
      illustratedGridCols: 2,
      illustratedGrid: [
        { scene: 'defenceScene',      tone: 'green',  title: 'National defence',
          body: '<strong style="color:#059669">Non-rival?</strong> One more citizen is protected without reducing anyone else\'s protection.<br><strong style="color:#059669">Non-excludable?</strong> It is impossible to exclude non-payers.' },
        { scene: 'floodDefenceScene', tone: 'purple', title: 'Flood defences',
          body: '<strong style="color:#7C3AED">Non-rival?</strong> Once the barrier is built, all nearby properties benefit.<br><strong style="color:#7C3AED">Non-excludable?</strong> You cannot selectively protect only taxpayers.' },
        { scene: 'streetLightScene',  tone: 'amber',  title: 'Street lighting',
          body: '<strong style="color:#D97706">Non-rival?</strong> One person using the light does not stop others using it.<br><strong style="color:#D97706">Non-excludable?</strong> Passers-by cannot easily be excluded.' },
        { scene: 'policeScene',       tone: 'blue',   title: 'Police services',
          body: '<strong style="color:#2563EB">Non-rival?</strong> Patrol presence protects whole areas.<br><strong style="color:#2563EB">Non-excludable?</strong> Once provided, non-payers also benefit.' }
      ],
      causesStyle: 'tinted-flat',
      causesEmoji: '🎯',
      causesLabel: 'Exam move',
      causes: [
        { tone: 'green',  icon: '👥', head: 'Identify the third-party beneficiaries who gain without paying.', body: '' },
        { tone: 'blue',   icon: '📋', head: 'Explain both properties: non-rival AND non-excludable.',         body: '' },
        { tone: 'amber',  icon: '⚖️', head: 'Remember many real-world goods are not perfectly pure.',         body: '' }
      ],
      tipLate: { icon: 'ℹ️', tone: 'blue', text: '<strong>Pure or quasi?</strong> In exams, show you understand that many "public goods" are public <em>in practice</em>, rather than perfectly pure in theory.' },
      lockIn: {
        title: 'What you need to lock in',
        items: [
          'Use precise examples',
          'Apply both tests',
          'Avoid vague statements',
          'Mention real-world context'
        ]
      },
      examEdge: '<strong>National defence and street lighting</strong> are classic public goods because one more user does not reduce availability, and non-payers cannot realistically be excluded.'
    },

    /* ============================================================
       CARD 4 — Public, Private and Quasi-Public Goods
       ============================================================ */
    {
      id: 'public_goods_4',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Public, Private and Quasi-Public Goods',
      tip: { icon: '⚖️', tone: 'blue', text: 'Not all goods fit neatly into one category. Economists compare <strong>rivalry</strong> and <strong>excludability</strong> to decide whether a good is private, public, or quasi-public.' },
      rowsLabel: 'Comparing the three categories',
      rowsEmoji: '📊',
      rowsHeader: '',
      colA: '🔒 Private goods',
      colB: '👥 Pure public goods',
      colC: '🧩 Quasi-public goods',
      rows: [
        { label: '👥 Rivalry',       colA: '<strong style="color:#7C3AED">Yes</strong> — use by one person depletes it for others.', colB: '<strong style="color:#059669">No</strong> — one person\'s use does not reduce others\' use.', colC: '<strong style="color:#2563EB">Partly non-rival</strong> — up to a point, then may become rival.' },
        { label: '🔒 Excludability', colA: '<strong style="color:#7C3AED">Yes</strong> — people can be effectively excluded.',       colB: '<strong style="color:#059669">No</strong> — no one can be effectively excluded.',         colC: '<strong style="color:#2563EB">Partly non-excludable</strong> — some users can be excluded, others not.' },
        { label: '🛍️ Examples',     colA: 'Cinema ticket · Sandwich · Pair of trainers',                                            colB: 'National defence · Flood defences · Street lighting',                                        colC: 'Motorways · Parks · Public broadcasting · Streaming services' },
        { label: '💡 Key insight',  colA: 'Markets can charge users directly.',                                                      colB: 'Private markets fail because of free riding.',                                              colC: 'Often publicly provided for efficiency or equity reasons.' }
      ],
      comparison: {
        title: 'How to think about quasi-public goods · the equity twist',
        emoji: '🧭',
        position: 'after-diagram',
        vs: '→',
        left:  { tone: 'blue', icon: '🧩', label: 'Private → Quasi-public → Pure public',
          caption: '<strong>Private:</strong> rival and excludable.<br><strong>Quasi-public:</strong> between the two extremes.<br><strong>Pure public:</strong> non-rival and non-excludable.' },
        right: { tone: 'amber', icon: '⚖️', label: 'Equity twist',
          caption: 'Some excludable goods may still be publicly provided because governments want <strong>wider access</strong> or to <strong>reduce inequality</strong>.' }
      },
      lockIn: {
        title: 'What you need to lock in',
        items: [
          'Define rivalry: does one person\'s use reduce others\'?',
          'Define excludability: can people be kept out?',
          'Classify examples carefully using both dimensions',
          'Explain why quasi-public does not mean fully public'
        ]
      },
      examEdge: 'A quasi-public good is <em>not</em> a pure public good — it may be excludable or rival at some point, but governments may still provide it for equity or efficiency reasons.'
    },

    /* ============================================================
       CARD 5 — Why Markets Cannot Provide Public Goods
       ============================================================ */
    {
      id: 'public_goods_5',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Why Markets Cannot Provide Public Goods',
      tip: { icon: '🏛️', tone: 'blue', text: 'This is <strong>complete market failure, not partial</strong>. Because firms cannot charge every beneficiary, private revenue is lower than society\'s total benefit.' },
      flowTitle: 'The revenue-capture problem',
      flowEmoji: '💸',
      flow: [
        { tone: 'green',  icon: '👥', title: 'Society benefits widely',          sub: 'Many people gain from the good.' },
        { tone: 'purple', icon: '💷', title: 'Firm can only charge a few or none', sub: 'Cannot bill everyone who benefits.' },
        { tone: 'amber',  icon: '📉', title: 'Revenue too low',                  sub: 'Private revenue is less than the cost of provision.' },
        { tone: 'rose',   icon: '🚫', title: 'No incentive to supply',           sub: 'Firms will not provide the good.' }
      ],
      illustratedGridLabel: 'Vertical demand summation',
      illustratedGridEmoji: '📈',
      illustratedGridCols: 2,
      illustratedGrid: [
        { scene: 'privateDemandMini', tone: 'purple', title: 'Private good demand',
          body: '<em>For private goods: add quantities <strong>horizontally</strong> at a given price.</em>' },
        { scene: 'publicDemandMini',  tone: 'green',  title: 'Public good demand',
          body: '<em>For public goods: add willingness to pay <strong>vertically</strong> — because the same unit is consumed by everyone.</em>' }
      ],
      causesStyle: 'tinted-flat',
      causesEmoji: '✅',
      causesLabel: 'Three things to notice',
      causes: [
        { tone: 'green', icon: '👥', head: 'Same quantity for all users',                  body: 'Everyone receives the same unit of the good.' },
        { tone: 'green', icon: '➕', head: 'Aggregate society\'s willingness to pay vertically', body: 'Not horizontally as for private goods.' },
        { tone: 'green', icon: '🌍', head: 'Social benefit exceeds any single person\'s WTP',   body: 'Society\'s total benefit is larger than any individual\'s.' }
      ],
      comparison: {
        title: 'Bottom line — private market view vs social view',
        emoji: '⚖️',
        position: 'after-diagram',
        vs: 'VS',
        left:  { tone: 'purple', icon: '🧍', label: 'Private market view',
          caption: 'No firm can capture enough revenue to cover the cost, so it will not supply.' },
        right: { tone: 'green',  icon: '👥', label: 'Social view',
          caption: 'Total social benefit may justify provision, but no single consumer reveals enough demand to finance it alone.' }
      },
      lockIn: {
        title: 'What you need to lock in',
        items: [
          'Complete market failure',
          'Revenue capture problem',
          'Vertical summation',
          'Social WTP vs individual WTP'
        ]
      },
      examEdge: 'For a public good, society\'s marginal benefit is found by <strong>vertically summing</strong> individual willingness to pay, because the same unit is consumed collectively rather than separately.'
    },

    /* ============================================================
       CARD 6 — Government Solutions
       ============================================================ */
    {
      id: 'public_goods_6',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Government Solutions',
      tip: { icon: '🏛️', tone: 'blue', text: 'Because markets fail, governments usually fund and provide public goods through <strong>compulsory taxation</strong>. That solves the <em>free rider</em> problem, but creates a new challenge — deciding how much to provide.' },
      flowTitle: 'How government steps in',
      flowEmoji: '🧭',
      flow: [
        { tone: 'green',  icon: '👥', title: 'Tax is collected',         sub: 'Citizens pay compulsory taxes.' },
        { tone: 'purple', icon: '🏛️', title: 'Government decides spending', sub: 'Decides how much of the public good to provide.' },
        { tone: 'amber',  icon: '👷', title: 'Public good is provided',  sub: 'Government funds and provides the public good.' },
        { tone: 'rose',   icon: '🤝', title: 'Society benefits collectively', sub: 'Everyone enjoys the benefits non-excludably.' }
      ],
      rowsLabel: 'Direct state provision',
      rowsEmoji: '📋',
      rowsHeader: '',
      colA: '💰 Who pays',
      colB: '🏛️ Who provides',
      colC: '👥 Who benefits',
      rows: [
        { label: '🛡️ Defence',         colA: 'Taxpayers', colB: 'Government',         colC: 'All citizens' },
        { label: '💡 Street lighting', colA: 'Taxpayers', colB: 'Local government',   colC: 'All residents' },
        { label: '🌊 Flood defences', colA: 'Taxpayers', colB: 'National government', colC: 'Communities at risk' }
      ],
      tipLate: { icon: '❓', tone: 'purple', text: '<strong>The preference revelation problem.</strong> People may understate or overstate how much they value the public good. For example, someone might say they only want a small amount of flood defence to save tax, even though they would like more protection. Because preferences are hidden, the government cannot easily know the <strong>optimal quantity</strong> to provide.' },
      causesStyle: 'tinted-flat',
      causesEmoji: '⚖️',
      causesLabel: 'Efficiency gain · decision problem',
      causes: [
        { tone: 'green', icon: '✅', head: 'Efficiency gain',  body: 'Taxation overcomes the free rider problem. Public goods can be provided for everyone to benefit.' },
        { tone: 'rose',  icon: '❌', head: 'Decision problem', body: 'Optimal quantity is hard to calculate. Willingness to pay is hidden, so the government cannot easily know the best level.' }
      ],
      lockIn: {
        title: 'What you need to lock in',
        items: [
          'Compulsory taxation',
          'Direct provision',
          'Preference revelation',
          'Optimal quantity not obvious'
        ]
      },
      examEdge: 'Government provision solves the free rider problem through taxation, but does <em>not</em> automatically guarantee the socially optimal quantity, because preferences are difficult to reveal accurately.'
    },

    /* ============================================================
       CARD 7 — Policy Debate
       ============================================================ */
    {
      id: 'public_goods_7',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'Policy Debate',
      tip: { icon: '⚖️', tone: 'blue', text: 'The exam is <em>not</em> just about saying government should provide public goods. <strong>Strong answers weigh the benefits against government failure</strong>, information problems, and long-run value creation.' },
      verdict: {
        title: 'The case for government provision vs its limits',
        emoji: '⚖️',
        layout: 'vs',
        columns: [
          { tone: 'green', icon: '👍', label: 'Case for provision', items: [
            { ok: true, text: '<strong>Solves free rider problem</strong>' },
            { ok: true, text: '<strong>Ensures socially valuable provision</strong>' },
            { ok: true, text: '<strong>Supports equity / access</strong>' },
            { ok: true, text: '<strong>Can create long-run spillovers</strong>' }
          ]},
          { tone: 'rose',  icon: '⚠️', label: 'Limitations', items: [
            { ok: false, text: '<strong>Hard to measure demand</strong>' },
            { ok: false, text: '<strong>Risk of over- or under-provision</strong>' },
            { ok: false, text: '<strong>Tax opportunity cost</strong>' },
            { ok: false, text: '<strong>Bureaucracy and inefficiency</strong>' }
          ]}
        ]
      },
      economistQuote: {
        portraitKey: null,
        tone: 'amber',
        label: 'Economist insight · ARPANET and the internet',
        quote: 'State-backed early network investment created huge future value that private firms may not have funded at the start because returns were uncertain and widely shared.',
        attribution: 'Public goods and long-run value creation'
      },
      flowTitle: 'How to evaluate in an essay',
      flowEmoji: '📝',
      flow: [
        { tone: 'green',  icon: '🔍', title: 'Identify the public-good characteristics', sub: '' },
        { tone: 'purple', icon: '🔓', title: 'Explain why markets fail',                  sub: '' },
        { tone: 'amber',  icon: '🏛️', title: 'Assess why government provision helps',   sub: '' },
        { tone: 'rose',   icon: '⚖️', title: 'Weigh limitations and give a judgement',  sub: '' }
      ],
      causesStyle: 'tinted-flat',
      causesEmoji: '⚖️',
      causesLabel: 'Judgement framework',
      causes: [
        { tone: 'green',  icon: '👥', head: 'Scale of social benefit',     body: '' },
        { tone: 'purple', icon: '🔍', head: 'Measurability of demand',     body: '' },
        { tone: 'amber',  icon: '£',  head: 'Opportunity cost of tax funding', body: '' },
        { tone: 'rose',   icon: '🏛️', head: 'Risk of government failure', body: '' }
      ],
      lockIn: {
        title: 'What you need to lock in',
        items: [
          'Argue both sides clearly',
          'Use relevant examples',
          'Mention long-run value',
          'Finish with a clear judgement'
        ]
      },
      examEdge: 'Government provision is usually justified where free riding makes market provision impossible, but the best judgement depends on whether the social gains outweigh the information, funding, and efficiency problems of state action.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
