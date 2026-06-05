window.ECONOS_TOPIC = {
  id: 'public-goods',
  topicNum: '3.3',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Public Goods',
  estTime: '12-15 minutes',
  goal: 'Master non-rivalry and non-excludability, the free rider problem, the distinction between pure and quasi-public goods, and the case for state provision – and learn to weigh that case against government failure.',
  intro: {
    heroKey: 'heroPublicGoods',
    summary: 'Public goods are the clearest case of market failure: because they are non-excludable and non-rival, no private firm can profitably provide them. The free rider problem ensures that – without state provision – they are drastically under-supplied.',
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
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'done' },
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    /* ============================================================
       CARD 1 – Public Goods: the big picture
       ============================================================ */
    {
      id: 'public_goods_1',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Public Goods: the big picture',
      tip: { icon: '🏛️', tone: 'blue', text: '<strong>Public goods</strong> are unusual because one person can use them without reducing anyone else\'s use, and it is hard or impossible to stop non-payers enjoying them too. That combination creates the <em>free rider</em> problem – and explains why government usually has to step in.' },
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
          caption: '<strong>Non-rivalry</strong> – extra users benefit at near-zero marginal cost.<br><strong>Non-excludability</strong> – non-payers can\'t be stopped from consuming.' },
        right: { tone: 'blue', icon: '🧩', label: 'Important distinction',
          caption: '<strong>Pure</strong> – fully non-rival and non-excludable (defence, clean air).<br><strong>Quasi-public</strong> – partly public, but excludable or rival at some point (motorways, parks).' }
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
       CARD 2 – The Free Rider Problem
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
      examEdge: 'If non-payers cannot be excluded, a private firm cannot charge all beneficiaries, so the market under-provides or fails to provide the good altogether. <em>See Card 5 for the deeper diagrammatic reason – society\'s demand for a public good is the <strong>vertical</strong> sum of individual willingness to pay, and no single buyer reveals enough demand to fund the good alone.</em>'
    },

    /* ============================================================
       CARD 3 – Examples of Public Goods
       ============================================================ */
    {
      id: 'public_goods_3',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Examples of Public Goods',
      tip: { icon: '🏛️', tone: 'blue', text: '<strong>Public goods</strong> are easiest to understand through concrete examples. The test is always the same – is the good <strong>non-rival</strong> and <strong>non-excludable</strong> in practice?' },
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
       CARD 4 – Public, Private and Quasi-Public Goods
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
        { label: '👥 Rivalry',       colA: '<strong style="color:#7C3AED">Yes</strong> – use by one person depletes it for others.', colB: '<strong style="color:#059669">No</strong> – one person\'s use does not reduce others\' use.', colC: '<strong style="color:#2563EB">Partly non-rival</strong> – up to a point, then may become rival.' },
        { label: '🔒 Excludability', colA: '<strong style="color:#7C3AED">Yes</strong> – people can be effectively excluded.',       colB: '<strong style="color:#059669">No</strong> – no one can be effectively excluded.',         colC: '<strong style="color:#2563EB">Partly non-excludable</strong> – some users can be excluded, others not.' },
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
      examEdge: 'A quasi-public good is <em>not</em> a pure public good – it may be excludable or rival at some point, but governments may still provide it for equity or efficiency reasons.'
    },

    /* ============================================================
       CARD 5 – Why Markets Cannot Provide Public Goods
       ============================================================ */
    {
      id: 'public_goods_5',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Adding Up Demand for a Public Good',
      tip: { icon: '📈', tone: 'blue', text: 'Card 2 showed <em>why</em> no one wants to pay. This card shows the deeper diagrammatic reason markets fail <strong>completely</strong>: because everyone consumes the <em>same</em> unit, society\'s demand is summed <strong>vertically</strong> – and no single buyer ever reveals enough willingness to pay to fund it alone.' },
      illustratedGridLabel: 'How demand is added up',
      illustratedGridEmoji: '📈',
      illustratedGridCols: 2,
      illustratedGridSceneHeight: 210,
      illustratedGrid: [
        { scene: 'privateDemandMini', tone: 'purple', title: 'Private good demand',
          body: '<em>For private goods: add quantities <strong>horizontally</strong> at a given price.</em>' },
        { scene: 'publicDemandMini',  tone: 'green',  title: 'Public good demand',
          body: '<em>For public goods: add willingness to pay <strong>vertically</strong> – because the same unit is consumed by everyone.</em>' }
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
        title: 'Bottom line – private market view vs social view',
        emoji: '⚖️',
        position: 'after-causes',
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
       CARD 6 – Government Solutions
       ============================================================ */
    {
      id: 'public_goods_6',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Government Solutions',
      tip: { icon: '🏛️', tone: 'blue', text: 'Because markets fail, governments usually fund and provide public goods through <strong>compulsory taxation</strong>. That solves the <em>free rider</em> problem, but creates a new challenge – deciding how much to provide.' },
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
        { label: '🛡️ Defence',         colA: 'Taxpayers (~£57bn/yr)',   colB: 'UK government (MoD)',          colC: 'All citizens' },
        { label: '💡 Street lighting', colA: 'Council tax (~£0.5bn)',   colB: 'Local councils',               colC: 'All residents and passers-by' },
        { label: '🌊 Flood defences', colA: 'Taxpayers (~£1.2bn/yr)',  colB: 'Environment Agency / Defra',   colC: 'Communities at risk' },
        { label: '📺 BBC',             colA: 'Licence fee (~£3.7bn/yr)', colB: 'BBC (public corporation)',     colC: 'All UK households' }
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
       CARD 7 – Policy Debate
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
        portraitKey: 'economistMazzucato',
        tone: 'amber',
        label: 'Economist insight · the state as investor',
        quote: 'There is not a single key technology behind the iPhone – the internet, GPS, touchscreen, even Siri – that was not government-funded.',
        attribution: 'Mariana Mazzucato, <em>The Entrepreneurial State</em> (2013)'
      },
      flowTitle: 'How to evaluate in an essay',
      flowEmoji: '📝',
      flow: [
        { tone: 'green',  icon: '🔍', title: '1. Identify the public-good properties',  sub: 'Non-rival AND non-excludable? Name both tests and give the example.' },
        { tone: 'purple', icon: '🔓', title: '2. Explain why markets fail',              sub: 'Free-rider problem → private revenue cannot capture the full social benefit (vertical demand summation, Card 5).' },
        { tone: 'amber',  icon: '🏛️', title: '3. Weigh free-rider fix vs preference revelation', sub: 'Government provision solves free-riding via taxation – but cannot easily know the optimal quantity, because demand is hidden.' },
        { tone: 'rose',   icon: '⚖️', title: '4. Judge by scale and certainty',         sub: 'Provision dominates where social benefit is large and broadly shared (defence, flood defences); other tools (subsidies, regulation) may suit where demand can be revealed.' }
      ],
      causesStyle: 'tinted-flat',
      causesEmoji: '⚖️',
      causesLabel: 'Judgement framework',
      causes: [
        { tone: 'green',  icon: '👥', head: 'Scale of social benefit',         body: 'How large and widely shared is the benefit? The bigger the spillover (e.g. national defence), the stronger the case for state provision.' },
        { tone: 'purple', icon: '🔍', head: 'Measurability of demand',         body: 'Can the government work out how much people value the good? Hidden preferences make the optimal quantity hard to set – risk of over- or under-provision.' },
        { tone: 'amber',  icon: '£',  head: 'Opportunity cost of tax funding', body: 'Provision is funded by taxation, so weigh it against the next best use of that money – other public services or leaving it with taxpayers.' },
        { tone: 'rose',   icon: '🏛️', head: 'Risk of government failure',      body: 'State provision can be inefficient or politically captured. Judge whether the likely government failure is smaller than the market failure it corrects.' }
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
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0
   These questions used to live at /quiz/<topic>/<set> as a
   standalone shell. They now ride along with the Learn It data
   under the same window.ECONOS_QUIZ global. The /quiz/ URL
   contract is gone; the quiz is the natural finisher to the
   Learn It journey, so the data lives next to learn cards.
   ============================================================ */
/* ---- quiz-main.js (quiz pool, preserved from former /quiz/ shell) ---- */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Public Goods',
    subtitle: 'Theme 1 &middot; Topic 3.3 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('public_goods_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers the non-excludability and non-rivalry properties, the free-rider problem, and quasi-public goods',
    shortNames: [
      'Definition MCQ', 'Classify goods', 'Free-rider problem', 'Quasi-public goods',
      'Sequence', 'Match pairs', 'Cause & effect', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: pure public good definition */
      { type: 'mcq',
        stem: 'Which combination of properties defines a <strong>pure public good</strong>?',
        opts: [
          'Non-excludable (impossible to prevent non-payers from consuming) AND non-rival (one person\'s consumption does not reduce availability to others)',
          'Non-excludable AND rival (one person\'s use reduces availability to others)',
          'Excludable AND non-rival (can charge, but consumption doesn\'t reduce others\' access)',
          'Excludable AND rival – all goods produced by the government are public goods'
        ],
        ans: 0,
        exp: '<strong>Non-excludability</strong>: technically impossible or prohibitively costly to prevent non-payers from benefiting → creates the free-rider problem. <strong>Non-rivalry</strong>: one person\'s consumption does not reduce the quantity or quality available to others → marginal cost of providing to one more person is zero. Together these make profitable private provision impossible: consumers free-ride rather than pay, so no revenue is collected, and private firms cannot supply the good. Government must provide from taxation. Examples: national defence, flood defences, public fireworks, public broadcast signals.'
      },

      /* 2 – Categorise: types of goods */
      { type: 'categorise',
        stem: 'Sort each good into the correct category based on excludability and rivalry.',
        categories: ['Pure public good', 'Pure private good', 'Club good', 'Common resource'],
        items: [
          { text: 'National defence – non-excludable, non-rival', category: 'Pure public good' },
          { text: 'A sandwich – excludable, rival', category: 'Pure private good' },
          { text: 'Netflix subscription – excludable (password), non-rival (one more viewer costs nothing)', category: 'Club good' },
          { text: 'Fish in an open ocean – non-excludable, rival (overfishing depletes stock)', category: 'Common resource' },
          { text: 'A toll motorway – excludable (toll booth), rival (congestion occurs)', category: 'Pure private good' },
          { text: 'A lighthouse warning signal – non-excludable, non-rival', category: 'Pure public good' }
        ],
        exp: 'The 2×2 goods classification: <strong>Pure public</strong>: non-excludable + non-rival → free-rider problem → government must provide. <strong>Pure private</strong>: excludable + rival → markets work well. <strong>Club goods</strong>: excludable + non-rival → profitable private provision possible (streaming, golf clubs, cable TV). <strong>Common resources</strong>: non-excludable + rival → "tragedy of the commons" – overuse without property rights. Toll roads are private when uncongested (non-rival) but become common resources at capacity. Classification can change with technology (encryption made TV excludable).'
      },

      /* 3 – MCQ: free-rider problem */
      { type: 'mcq',
        stem: 'The <strong>free-rider problem</strong> arises because of:',
        opts: [
          'Non-excludability – rational consumers know they can benefit from the good without paying, so they do not reveal their true willingness to pay',
          'Non-rivalry – since consuming the good does not reduce others\' consumption, there is no incentive to pay for it',
          'Government ownership – public provision removes the profit motive and reduces the incentive to produce',
          'Scarcity – public goods are too rare for everyone to benefit, so free-riding only benefits the first users'
        ],
        ans: 0,
        exp: 'The free-rider problem stems from <strong>non-excludability</strong>: if you cannot be excluded from a good for not paying, rational self-interest says "don\'t pay – consume for free." Since everyone reasons this way, no revenue is collected → private market cannot provide the good → market failure. Non-rivalry means the free-rider\'s consumption doesn\'t harm others (no rivalry loss), reinforcing the incentive to free-ride. Together they make public goods unprofitable to provide privately – the fundamental argument for government provision and public finance through taxation.'
      },

      /* 4 – MCQ: quasi-public goods */
      { type: 'mcq',
        stem: 'A busy motorway at peak hours could be described as a <strong>quasi-public good</strong>. Why?',
        opts: [
          'The road is non-excludable (free to use without a toll) but becomes rival at capacity – congestion means additional users reduce the quality of service for existing users',
          'The road is excludable (toll booths) and non-rival – once built, one more car does not reduce others\' ability to travel',
          'The road is a pure public good at all times – non-excludable and non-rival regardless of traffic levels',
          'The road is a pure private good – firms could profitably provide all roads without government subsidy'
        ],
        ans: 0,
        exp: 'Quasi-public goods (or impure public goods) have characteristics of both public and private goods depending on context. A road without tolls is <strong>non-excludable</strong> (anyone can use it). When uncongested, it is also <strong>non-rival</strong> → pure public good characteristics. But at peak hours, it becomes <strong>rival</strong> – additional cars cause congestion, reducing journey quality and speed for existing users → the road gains private good characteristics. This is why congestion charging (making roads excludable through pricing) is a potential policy solution – converting a quasi-public good into a club good during peak periods.'
      },

      /* 5 – Sequence: free-rider problem to government provision */
      { type: 'sequence',
        stem: 'Place the steps in the correct order showing how the <strong>free-rider problem leads to market failure</strong> for a pure public good.',
        instr: 'Tap the steps in the correct order, from first to last.',
        items: [
          { label: 'A pure public good is non-excludable – no one can be prevented from benefiting', note: '' },
          { label: 'Rational consumers choose not to pay – they can consume the good for free if others pay', note: '' },
          { label: 'Firms cannot collect revenue – consumers do not reveal their willingness to pay', note: '' },
          { label: 'Private provision is unprofitable – no firm will supply the good commercially', note: '' },
          { label: 'Market failure results – the socially beneficial good is not produced at all', note: '' },
          { label: 'Government must provide the good, funded by compulsory taxation', note: '' }
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        exp: 'The free-rider chain: non-excludability → rational self-interest to free-ride → consumers don\'t reveal WTP → no revenue → unprofitable provision → market failure (zero provision) → government must provide via compulsory taxation. Taxation is the only mechanism that overcomes the free-rider problem: it is compulsory, so everyone contributes regardless of whether they individually value the good. The government then acts as the "revealed preference aggregator" – making collective provision decisions on behalf of society.'
      },

      /* 6 – Match pairs: public good concepts */
      { type: 'match_pairs',
        stem: 'Match each concept to its definition.',
        pairs: [
          { a: 'Non-excludability', b: 'Cannot prevent non-payers from consuming the good' },
          { a: 'Non-rivalry', b: 'One person\'s consumption does not reduce availability to others' },
          { a: 'Free-rider', b: 'Person who benefits from a public good without paying for it' },
          { a: 'Quasi-public good', b: 'Good that is non-excludable but becomes rival at high usage' },
          { a: 'Club good', b: 'Good that is excludable but non-rival – e.g. streaming services' },
          { a: 'Tragedy of the commons', b: 'Overuse of a common resource because non-excludable but rival – leads to depletion' }
        ],
        exp: 'Public good concepts: <strong>non-excludability</strong> causes the free-rider problem; <strong>non-rivalry</strong> means the marginal cost of serving one more user is zero; <strong>free-rider</strong> is the individual whose rational behaviour causes collective market failure; <strong>quasi-public good</strong> adds congestion – becomes rival at capacity; <strong>club good</strong> is excludable+non-rival – markets can provide profitably; <strong>tragedy of the commons</strong> applies to common resources (non-excludable+rival) – overfishing, overgrazing, traffic congestion without pricing.'
      },

      /* 7 – Cause & effect: non-excludability consequences */
      { type: 'cause_effect',
        stem: 'Match each public good characteristic to its economic consequence.',
        pairs: [
          { cause: 'National defence is non-excludable', effect: 'All citizens are protected whether or not they pay taxes – free-riding is inevitable' },
          { cause: 'Lighthouse signal is non-rival', effect: 'Marginal cost of warning one more ship is zero – exclusion would be allocatively inefficient' },
          { cause: 'Open-access fishery is non-excludable but rival', effect: 'Overfishing leads to stock depletion – tragedy of the commons' },
          { cause: 'Netflix encrypts its content', effect: 'Transforms a non-rival good into a club good – enables private profitable provision' },
          { cause: 'Flood defences protect an entire area', effect: 'Costs are non-rivalrously shared – government provision is efficient; charging is impractical' },
          { cause: 'Congestion pricing introduced on London roads', effect: 'Converts a quasi-public good into an excludable good – reduces free-riding and congestion' }
        ],
        exp: 'Non-excludability and non-rivalry have distinct but related consequences. Non-excludability → free-rider problem → private underprovision → government provision needed. Non-rivalry → zero marginal cost of additional users → exclusion is allocatively inefficient (users who value the good at above zero but below the price are excluded from beneficial consumption). Technology can change the classification: encryption makes digital goods excludable → enables market provision. Pricing (tolls, congestion charges) can make non-excludable goods excludable → reduces overuse.'
      },

      /* 8 – Odd one out: pure public goods */
      { type: 'odd_one_out',
        stem: 'Three of these are <strong>pure public goods</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🛡️', label: 'National defence – protection covers all citizens; non-payers cannot be excluded', note: '' },
          { icon: '🎆', label: 'A public fireworks display – everyone in the area can watch; watching doesn\'t reduce others\' view', note: '' },
          { icon: '🏟️', label: 'A football stadium – seating is limited (rival) and tickets exclude non-payers (excludable)', note: '' },
          { icon: '🌊', label: 'Flood defences for a coastal community – all residents benefit; benefit is non-rival', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is a <strong>football stadium</strong>. It is both <strong>excludable</strong> (ticketing and gates prevent non-payers) and <strong>rival</strong> (limited seating means one more spectator displaces another at capacity). It is therefore a pure <strong>private good</strong> – and the market provides football stadiums profitably. National defence, public fireworks, and flood defences are all non-excludable (cannot exclude non-contributors) and non-rival (one person\'s benefit doesn\'t reduce others\') – the defining properties of pure public goods.'
      },

      /* 9 – Data table: UK public goods provision */
      { type: 'data_table',
        stem: 'The table shows public goods provision data for the UK.',
        headers: ['Public good', 'Annual government spending (£bn)', 'Private sector could provide?', 'Free-rider severity'],
        rows: [
          ['National defence', '57', 'No – non-excludable', 'Very high'],
          ['BBC World Service', '0.3', 'Partially – some broadcasting is excludable', 'High'],
          ['Street lighting (local)', '0.5 est.', 'No – non-excludable in practice', 'High'],
          ['Flood defences', '1.2', 'No – protects all in area', 'Very high'],
          ['Road network (non-toll)', '8.0', 'With tolls – but impractical on all roads', 'Moderate']
        ],
        question: 'Which conclusion about public good provision is <strong>best supported</strong> by the data?',
        opts: [
          'Government provision is necessary for goods with high free-rider severity – these are cases where non-excludability makes private provision unviable without compulsory taxation',
          'All the goods shown would be better provided by the private sector – government provision crowds out more efficient private alternatives',
          'The BBC World Service should be privatised immediately – partial excludability through encryption means the free-rider problem can be solved without public funding',
          'Road spending at £8bn shows government over-invests in quasi-public goods – tolling all roads would eliminate the need for public spending'
        ],
        ans: 0,
        exp: 'The data support government provision for goods with very high free-rider severity (defence, flood defences, street lighting) – these are genuinely non-excludable and non-rival, making private provision unviable. The road network is a quasi-public good – partial tolling exists on motorways, but not practical for all roads. The BBC World Service has partial excludability through broadcasting but serves as a public good globally (non-excludable to foreign audiences). Option B overclaims. Option C ignores the global non-excludability of broadcast signals. Option D ignores the practical costs of universal tolling.'
      },

      /* 10 – Multi-select: evaluation of public good theory */
      { type: 'multi_select',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of public good theory and government provision?',
        opts: [
          'Pure public goods are non-excludable and non-rival – the free-rider problem makes private provision impossible',
          'While pure public good theory provides a strong case for government provision, the binary classification (public/private) is increasingly challenged by technology: digital goods were once non-excludable (copied freely), but encryption and digital rights management have made many excludable – potentially reversing the case for government provision in areas like broadcasting',
          'The government provides national defence because it is a public good',
          'The government\'s information advantage does not solve the free-rider problem – it creates a different one: government must estimate the public\'s willingness to pay for public goods without market price signals, risking under- or over-provision based on political, rather than efficiency, criteria',
          'Public goods should always be provided free at the point of use',
          'The tragedy of the commons shows that extending the public good framework to common resources (non-excludable + rival) requires a different solution – property rights or quotas rather than simply "government provision" – suggesting that different failure mechanisms warrant different instruments'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: shows how the classification itself is contingent on technology – encryption changed the public good status of digital content, qualifying the case for government broadcasting. D: identifies a second-order failure in government provision of public goods – the absence of price signals creates a different information problem for planners, not just a solution to the free-rider problem. F: distinguishes common resource failures from pure public good failures and concludes that different instruments are warranted – showing analytical sophistication about the scope of the framework. A and E are descriptions; C is description without qualification.'
      }

    ]
  };

})();

