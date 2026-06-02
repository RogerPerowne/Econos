window.ECONOS_TOPIC = {
  id: 'market-failure',
  topicNum: '3.1',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Market Failure',
  estTime: '8-10 minutes',
  goal: 'Understand what market failure is, why the price mechanism sometimes produces the wrong quantity, and how to spot it in real-world contexts.',
  intro: {
    heroKey: 'heroMarketFailure',
    summary: 'A free market achieves allocative efficiency when price equals marginal social cost and benefit. Market failure occurs when private incentives diverge from social welfare – through externalities, public goods, or information gaps – so the market produces too much or too little for society.',
    doInThis: 'Work through 5 cards covering the big picture of market failure, the private-vs-social framework, three routes to failure, welfare loss and allocative inefficiency, and how to diagnose market failure in real contexts.',
    outcomes: [
      'Define market failure and explain its link to allocative efficiency',
      'Distinguish private vs social costs and benefits, and explain why their divergence causes failure',
      'Identify the three core routes to market failure with real-world examples',
      'Draw and interpret the welfare-loss (deadweight loss) triangle',
      'Diagnose market failure in unseen contexts using a four-step framework'
    ],
    tip: 'Market failure does not mean markets "break down" – it means the price mechanism produces the wrong quantity from society\'s perspective. The output is not zero; it is just above or below the socially optimal level.',
    stages: [
      { num: 1, name: 'Learn it', sub: '5 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    {
      id: 'market_failure_1',
      stepLabel: 'Learn: Step 1 of 5',
      title: 'Market failure',
      tip: { icon: '💡', tone: 'blue', text: 'Markets usually coordinate resources well – but sometimes private choices create social outcomes that are inefficient. The market still functions; it just produces the wrong amount from society\'s point of view.' },
      diagramKey: 'marketFailureOverview',
      diagramLabel: 'When markets fail',
      diagramEmoji: '⚖️',
      keyPointsLabel: 'What market failure means',
      keyPointsEmoji: '🔍',
      keyPointsCols: 3,
      keyPoints: [
        { title: 'Misallocation of resources', icon: '👥', headline: 'Resources are used by the wrong people or in the wrong quantities', body: 'The price mechanism sends signals based on private costs and benefits, missing the wider picture. So inputs flow to uses that society does not value most.', tone: 'green' },
        { title: 'Allocative inefficiency', icon: '📊', headline: 'The market outcome does not maximise total surplus', body: 'When MSB ≠ MSC at the market quantity, reallocating could make society better off overall. The market sits short of the socially optimal point.', tone: 'amber' },
        { title: 'Welfare loss', icon: '📉', headline: 'The gap between actual and best outcome is a deadweight loss', body: 'The lost potential surplus – neither captured by consumers, producers, nor the third parties affected – is the cost of the failure.', tone: 'rose' }
      ],
      keyTerms: [
        { term: 'Market failure', def: 'A situation in which the free market fails to produce the socially optimal quantity of a good or service, leading to a misallocation of resources.' },
        { term: 'Allocative efficiency', def: 'Achieved when resources are allocated so that price equals marginal cost (P = MC, or MSB = MSC) – no reallocation can improve overall welfare.' },
        { term: 'Social optimum', def: 'The output level at which marginal social benefit equals marginal social cost – maximises total social welfare.' }
      ],
      examEdge: 'Market failure is NOT the same as market collapse. Markets can "fail" while still functioning – they just produce too much or too little of a good. The key distinction: <strong>private equilibrium</strong> (where MPB = MPC) vs <strong>social optimum</strong> (where MSB = MSC). Market failure = the gap between these two.'
    },

    {
      id: 'market_failure_2',
      stepLabel: 'Learn: Step 2 of 5',
      title: 'Private vs social costs and benefits',
      tip: { icon: '💡', tone: 'blue', text: 'A decision can look worthwhile to the individual, but once spillover effects are included, the answer for society may be very different.' },
      diagramKey: 'privateVsSocialDiagram',
      diagramLabel: 'The private vs social framework',
      diagramEmoji: '⚖️',
      keyPointsLabel: 'Two real-world examples',
      keyPointsEmoji: '🌍',
      keyPointsCols: 2,
      keyPointsCompare: true,
      keyPoints: [
        { title: 'Negative externality', icon: '🏭', headline: 'A factory produces goods – but locals breathe the pollution', body: 'It bears the cost of production, but local residents suffer health problems from the emissions.<br><br><strong>Private cost: ££</strong><br><strong>Social cost: £££</strong><br><br>Social cost &gt; private cost, so the factory over-produces relative to the social optimum.', tone: 'rose' },
        { title: 'Positive externality', icon: '💉', headline: 'A vaccinated person also protects the community', body: 'They gain personal protection, and others are less likely to catch the disease (herd immunity).<br><br><strong>Private benefit: ££</strong><br><strong>Social benefit: £££</strong><br><br>Social benefit &gt; private benefit, so the market under-produces vaccinations.', tone: 'green' }
      ],
      keyTerms: [
        { term: 'Private cost / benefit', def: 'The cost (or benefit) borne by the individual consumer or producer making the decision – what the price mechanism responds to.' },
        { term: 'External cost / benefit', def: 'A spillover cost or benefit imposed on (or enjoyed by) third parties not involved in the transaction.' },
        { term: 'Social cost / benefit', def: 'Private + external. The full cost or benefit to society as a whole. Market failure begins when social and private values diverge.' }
      ],
      examEdge: 'The exam trick: market failure begins the moment <strong>private and social costs (or benefits) diverge</strong>. State this explicitly, then identify whether the divergence is on the cost or the benefit side – that tells the examiner whether the market is over- or under-producing.'
    },

    {
      id: 'market_failure_3',
      stepLabel: 'Learn: Step 3 of 5',
      title: 'Three routes to market failure',
      tip: { icon: '💡', tone: 'blue', text: 'At this stage you only need the map: three broad reasons markets may fail. Each one gets a dedicated topic later – for now, secure the framework.' },
      diagramKey: 'threeRoutesDiagram',
      diagramLabel: 'The three routes – and what each one breaks',
      diagramEmoji: '🌳',
      keyTerms: [
        { term: 'Externality', def: 'A cost or benefit imposed on a third party that is not reflected in the market price. Negative externalities cause over-production; positive externalities cause under-production.' },
        { term: 'Public good', def: 'A good that is non-rival (one person\'s use does not reduce availability) and non-excludable (you cannot stop non-payers from consuming). Free markets under-provide them.' },
        { term: 'Asymmetric information', def: 'When one party in a transaction has materially better information than the other – leading to adverse selection or moral hazard.' },
        { term: 'Free-rider problem', def: 'When people benefit from a good without paying for it. Because no-one can be excluded, no-one has an incentive to pay – so the market under-provides.' }
      ],
      examEdge: 'You do not need every detail yet – first secure the map, then study each failure type in depth. In an essay, naming the route correctly is the first credit-earning step. After that, link the route to the divergence (cost or benefit) and the direction of the failure (over- or under-production).'
    },

    {
      id: 'market_failure_4',
      stepLabel: 'Learn: Step 4 of 5',
      title: 'Welfare loss and allocative inefficiency',
      tip: { icon: '💡', tone: 'amber', text: 'When the market produces the wrong quantity, society misses out on potential welfare. That missing value is <strong>deadweight loss</strong> – surplus no-one receives.' },
      diagramKey: 'welfareLossDiagram',
      diagramLabel: 'The welfare loss triangle',
      diagramEmoji: '📐',
      keyPointsLabel: 'How welfare is lost',
      keyPointsEmoji: '📉',
      keyPointsCols: 3,
      keyPoints: [
        { title: 'Too much output', icon: '📈', headline: 'The market produces beyond Q*', body: 'Consumers value the last units less than they cost society to produce. The extra output creates welfare loss. <strong>Example:</strong> traffic congestion from the over-use of roads.', tone: 'rose' },
        { title: 'Too little output', icon: '📉', headline: 'The market produces below Q*', body: 'People value additional units more than the cost of providing them. The under-production creates welfare loss. <strong>Example:</strong> under-provision of vaccines for a contagious disease.', tone: 'amber' },
        { title: 'Why society loses', icon: '👥', headline: 'Resources are pulled away from their most valued use', body: 'In both cases the market allocates resources away from where they would do most good. The gap between benefit and cost is the deadweight loss to society. <strong>Example:</strong> pollution damages from over-production.', tone: 'green' }
      ],
      keyTerms: [
        { term: 'Marginal social cost (MSC)', def: 'The total cost to society of producing one more unit – private cost plus any external cost. MSC = MPC + MEC.' },
        { term: 'Marginal social benefit (MSB)', def: 'The total benefit to society from consuming one more unit – private benefit plus any external benefit. MSB = MPB + MEB.' },
        { term: 'Deadweight welfare loss (DWL)', def: 'The loss of total surplus when output differs from the social optimum – the welfare cost of market failure, shown as a triangle on the diagram.' }
      ],
      examEdge: 'Always link market failure to the <strong>wrong quantity</strong> and the resulting <strong>loss of total surplus</strong>. Show the welfare-loss triangle on the diagram, identify Q* and Qm, and state which direction the market has missed. That sequence – direction, quantity gap, surplus lost – is what earns the marks.'
    },

    {
      id: 'market_failure_5',
      stepLabel: 'Learn: Step 5 of 5',
      title: 'Spotting market failure in the real world',
      tip: { icon: '💡', tone: 'blue', text: 'The final skill is diagnosis: can you recognise where the price mechanism is misfiring in real contexts? Each case below maps onto one of the three routes.' },
      keyPointsLabel: 'Four cases to diagnose',
      keyPointsEmoji: '🔬',
      keyPointsCols: 2,
      keyPoints: [
        { title: 'Petrol, congestion and emissions', icon: '🚗', headline: 'Drivers ignore the full impact of driving', body: '<strong>Route:</strong> <em>Externality</em>.<br><strong>What goes wrong:</strong> Too much driving → pollution, congestion and higher social costs that the price of petrol doesn\'t capture.', tone: 'rose' },
        { title: 'Vaccination or education', icon: '💉', headline: 'Benefits extend well beyond the individual', body: '<strong>Route:</strong> <em>Positive externality / public good characteristics</em>.<br><strong>What goes wrong:</strong> Under-provision because individuals don\'t capture the full social benefits when deciding.', tone: 'blue' },
        { title: 'Street lighting or flood defences', icon: '💡', headline: 'Everyone benefits and no-one can be excluded', body: '<strong>Route:</strong> <em>Public good</em>.<br><strong>What goes wrong:</strong> Under-provision since people can free-ride on others\' payments – no-one has an incentive to pay.', tone: 'amber' },
        { title: 'Food labels, used cars, vaping info', icon: '🏷️', headline: 'One side has more or better information', body: '<strong>Route:</strong> <em>Information gap</em>.<br><strong>What goes wrong:</strong> Poor-quality and biased choices → inefficient outcomes; the price reflects misperception, not reality.', tone: 'purple' }
      ],
      economistQuote: {
        portraitKey: 'economistElinorOstrom',
        tone: 'amber',
        label: 'Economist insight on market failure',
        quote: 'A core goal of public policy should be to facilitate the development of institutions that bring out the best in humans.',
        attribution: 'Elinor Ostrom, Nobel Prize Lecture (2009)'
      },
      flowTitle: 'How to diagnose market failure',
      flowEmoji: '🧭',
      flow: [
        { icon: '⚖️', title: 'Costs/benefits gap?', sub: 'Is there a divergence between private and social costs or benefits?', tone: 'green' },
        { icon: '👥', title: 'Non-rival or non-excludable?', sub: 'Does the good have public-good characteristics that the market can\'t price?', tone: 'amber' },
        { icon: '🔍', title: 'Information missing?', sub: 'Do buyers or sellers lack key information that the price should reflect?', tone: 'blue' },
        { icon: '📉', title: 'Welfare loss?', sub: 'Does the market outcome leave society worse off than at the social optimum?', tone: 'rose' }
      ],
      keyTerms: [
        { term: 'Diagnosis', def: 'In an exam context: identifying which type of failure is occurring in an unseen scenario, justified by the cost/benefit divergence and the direction of misallocation.' },
        { term: 'Adverse selection', def: 'When asymmetric information before a transaction causes the wrong people to participate – e.g., used-car buyers fearing "lemons", so the market for good used cars shrinks.' },
        { term: 'Moral hazard', def: 'When asymmetric information after a transaction changes behaviour – e.g., an insured person takes more risks because they no longer bear the full cost.' }
      ],
      examEdge: 'A strong answer does more than name the failure – it explains <strong>why</strong> the market outcome is allocatively inefficient. Use the four-step diagnostic: divergence → direction → quantity gap → welfare loss. That structure works for any market failure question.',
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
    title:    'Market Failure',
    subtitle: 'Theme 1 &middot; Topic 3.1 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('market_failure_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers types of market failure, externalities, public goods, information gaps, and deadweight loss',
    shortNames: [
      'Market failure definition', 'Types categorise', 'Negative externality MCQ', 'Public goods MCQ',
      'Information asymmetry', 'Deadweight loss MCQ', 'Match pairs', 'Cause & effect',
      'Odd one out', 'Data table'
    ],

    questions: [

      /* 1 – MCQ: market failure definition */
      { type: 'mcq',
        stem: 'Which statement best defines <strong>market failure</strong>?',
        opts: [
          'A situation where the free market misallocates resources – failing to achieve allocative efficiency (P ≠ MSC) and producing at a socially suboptimal output level',
          'A situation where a business goes bankrupt and closes – failing to generate sufficient revenue to cover costs',
          'A situation where demand falls and prices drop below the equilibrium price, causing unsold stock',
          'A situation where government intervention prevents the market from reaching equilibrium'
        ],
        ans: 0,
        exp: '<strong>Market failure</strong> is the failure of the price mechanism to allocate resources efficiently from a social perspective. It occurs when private costs and benefits diverge from social costs and benefits, causing over- or under-production relative to the social optimum. Key types: externalities (costs/benefits not reflected in prices), public goods (non-excludable/non-rival), information asymmetry, and inequality. Market failure justifies potential government intervention – though intervention itself can fail.'
      },

      /* 2 – Categorise: types of market failure */
      { type: 'categorise',
        stem: 'Sort each example into the correct type of market failure.',
        categories: ['Negative externality', 'Positive externality', 'Public good', 'Information gap'],
        items: [
          { text: 'A factory pollutes a river – costs borne by local residents not reflected in the product price', category: 'Negative externality' },
          { text: 'Street lighting – non-excludable and non-rival; no firm can profitably charge for it', category: 'Public good' },
          { text: 'Getting vaccinated reduces disease transmission to others not party to the transaction', category: 'Positive externality' },
          { text: 'Used car sellers know quality but buyers do not – adverse selection causes market collapse', category: 'Information gap' },
          { text: 'A motorist\'s exhaust fumes impose air pollution costs on pedestrians who paid nothing', category: 'Negative externality' },
          { text: 'Education creates skilled workers who benefit employers and society beyond the individual', category: 'Positive externality' }
        ],
        exp: '<strong>Negative externality</strong>: cost imposed on third parties → overproduction. <strong>Positive externality</strong>: benefit to third parties not rewarded → underproduction. <strong>Public good</strong>: non-excludable and non-rival → free-rider problem → market underprovides. <strong>Information gap</strong>: asymmetric information → adverse selection or moral hazard → wrong quantities or quality mix. Each type requires a different policy response.'
      },

      /* 3 – MCQ: negative externality and overproduction */
      { type: 'mcq',
        stem: 'In a market with a <strong>negative externality of production</strong>, the free market equilibrium compared to the social optimum shows:',
        opts: [
          'Output is too high and price is too low – the private cost curve lies below the social cost curve; producers do not bear the external cost',
          'Output is too low and price is too high – external costs make production expensive and under-incentivised',
          'Output and price are both at the social optimum – externalities affect distribution but not efficiency',
          'Output is too high and price is too high – firms charge above marginal social cost to cover external costs'
        ],
        ans: 0,
        exp: 'With a negative externality of production: <strong>MSC > MPC</strong>. The market only reflects MPC, so the equilibrium price is too low and output too high. Consumers don\'t pay the full social cost – production continues beyond the social optimum (where MSC = MSB), creating a <strong>deadweight welfare loss</strong>. Policy response: Pigouvian tax equal to the marginal external cost, shifting MPC up to MSC, reducing output to the social optimum.'
      },

      /* 4 – MCQ: public goods */
      { type: 'mcq',
        stem: 'Which combination of properties defines a <strong>pure public good</strong>?',
        opts: [
          'Non-excludable (cannot prevent non-payers from consuming) AND non-rival (one person\'s consumption does not reduce availability to others)',
          'Non-excludable AND rival (one person\'s consumption reduces availability to others)',
          'Excludable (can charge for access) AND non-rival',
          'Excludable AND rival – standard private goods that happen to be produced by the government'
        ],
        ans: 0,
        exp: '<strong>Non-excludability</strong>: impossible to prevent non-payers from benefiting → free-rider problem → rational to not pay. <strong>Non-rivalry</strong>: one person\'s consumption does not reduce others\' consumption → marginal cost of an extra user is zero. Together these cause market failure: no firm can profitably provide the good (cannot exclude free-riders), so the market fails to provide it. Government must provide from general taxation. Examples: national defence, flood defences, street lighting, public fireworks.'
      },

      /* 5 – MCQ: information asymmetry */
      { type: 'mcq',
        stem: 'Akerlof\'s "Market for Lemons" model shows that information asymmetry in used car markets can cause:',
        opts: [
          'Market collapse through adverse selection – buyers cannot distinguish good from bad cars, offer average price; sellers of good cars exit; only "lemons" remain',
          'Higher prices overall – since buyers cannot assess quality, they assume all cars are high quality and overpay',
          'Perfect market outcomes – buyers and sellers negotiate until information is fully revealed',
          'A positive externality – one buyer\'s experience informs others, increasing market information over time'
        ],
        ans: 0,
        exp: 'Akerlof (1970): sellers know car quality; buyers don\'t. Buyers offer an average price reflecting their uncertainty. This average is too low for sellers of good cars → good sellers exit → market contains more lemons → buyers\' offer falls further → potential market collapse. This is <strong>adverse selection</strong>: information asymmetry systematically selects for the worse option. Policy responses: warranties (quality signals), car history reports, consumer protection law, third-party inspections.'
      },

      /* 6 – MCQ: deadweight loss */
      { type: 'mcq',
        stem: 'The <strong>deadweight welfare loss</strong> from a negative externality represents:',
        opts: [
          'The net welfare cost of overproduction – social costs that exceed social benefits in the units produced beyond the social optimum',
          'The total profit earned by firms that impose negative externalities on third parties',
          'The total tax revenue collected by the government from Pigouvian taxes on polluters',
          'The cost to firms of complying with environmental regulations'
        ],
        ans: 0,
        exp: 'Deadweight welfare loss (DWL) is the triangle between market equilibrium and social optimum. For a negative externality: each unit beyond the social optimum has MSC > MSB – social cost exceeds social benefit. The DWL is the sum of these net losses. A Pigouvian tax equal to the marginal external cost eliminates the DWL by making producers face the full social cost. DWL also arises from monopoly, taxes (if not correcting externalities), and price controls.'
      },

      /* 7 – Match pairs: market failure concepts */
      { type: 'match_pairs',
        stem: 'Match each concept to its definition or example.',
        pairs: [
          { a: 'External cost', b: 'Cost imposed on third parties not reflected in market price' },
          { a: 'External benefit', b: 'Benefit to third parties not captured in the market price' },
          { a: 'Free-rider problem', b: 'Rational agents consume without paying – prevents profitable private provision' },
          { a: 'Moral hazard', b: 'Party changes behaviour after gaining protection (e.g. more risk once insured)' },
          { a: 'Adverse selection', b: 'Information gap causes market to select for worse-quality participants' },
          { a: 'Pigouvian tax', b: 'Tax equal to marginal external cost – corrects overproduction from negative externality' }
        ],
        exp: 'Market failure vocabulary is highly examinable: <strong>external cost/benefit</strong> – divergence between private and social; <strong>free-rider</strong> – public good mechanism; <strong>moral hazard</strong> – post-contract information asymmetry (insurance); <strong>adverse selection</strong> – pre-contract information asymmetry (used cars, insurance pools); <strong>Pigouvian tax</strong> – named after A.C. Pigou, equal to marginal external cost. Using these terms precisely earns AO1 marks.'
      },

      /* 8 – Cause & effect: externalities */
      { type: 'cause_effect',
        stem: 'Match each scenario to the market failure mechanism it illustrates.',
        pairs: [
          { cause: 'A steel mill dumps waste in a river; fishing communities suffer losses', effect: 'Negative production externality – MPC < MSC; overproduction of steel' },
          { cause: 'A homeowner beautifies their garden; neighbours\' property values rise', effect: 'Positive consumption externality – MPB < MSB; underinvestment in gardens' },
          { cause: 'Citizens plan to watch national fireworks without paying', effect: 'Public good free-rider problem – market cannot profitably provide' },
          { cause: 'People with pre-existing conditions disproportionately buy health insurance', effect: 'Adverse selection – insurer cannot distinguish risk types; pool becomes high-risk' },
          { cause: 'A driver insured for all risks drives more recklessly than before', effect: 'Moral hazard – full insurance removes incentive for careful driving' },
          { cause: 'Workers underestimate health risks of smoking and overconsume', effect: 'Information failure – rational behaviour based on incorrect beliefs' }
        ],
        exp: 'Each failure maps to a distinct policy response: <strong>negative externality</strong> → Pigouvian tax; <strong>positive externality</strong> → subsidy; <strong>public good</strong> → direct government provision; <strong>adverse selection</strong> → compulsory insurance, disclosure; <strong>moral hazard</strong> → co-payments, deductibles; <strong>information failure</strong> → education, labelling. Identifying the type of failure correctly is essential for choosing the right policy instrument.'
      },

      /* 9 – Odd one out: public goods */
      { type: 'odd_one_out',
        stem: 'Three of these are <strong>pure public goods</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🛡️', label: 'National defence – protects all citizens simultaneously; non-payers cannot be excluded', note: '' },
          { icon: '🌊', label: 'Flood defences for a coastal town – non-rival and non-excludable benefit', note: '' },
          { icon: '🎠', label: 'A theme park – can charge admission and exclude non-payers', note: '' },
          { icon: '💡', label: 'Street lighting in a public area – non-rival and non-excludable', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is a <strong>theme park</strong>. It is both <strong>excludable</strong> (fences and ticketing prevent non-payers from entering) and <strong>rival</strong> (at capacity, additional visitors cause congestion). It is therefore a <strong>private good</strong> – the market can provide it profitably. National defence, flood defences, and street lighting are all non-excludable (cannot charge non-beneficiaries) and non-rival (one person\'s benefit does not reduce others\') – the defining properties of a pure public good.'
      },

      /* 10 – Data table: pollution and social optimum */
      { type: 'data_table',
        stem: 'The table shows marginal costs and benefits of steel production with a negative externality.',
        headers: ['Output (000 tonnes)', 'Marginal Private Cost (£)', 'Marginal External Cost (£)', 'Marginal Social Benefit (£)'],
        rows: [
          ['1', '50', '20', '90'],
          ['2', '60', '20', '80'],
          ['3', '70', '20', '70'],
          ['4', '80', '20', '60'],
          ['5', '90', '20', '50']
        ],
        question: 'What is the <strong>socially optimal output</strong> and at what output does the <strong>free market settle</strong>?',
        opts: [
          'Social optimum: 3,000 tonnes (MSC = MSB = £90). Free market: 4,000 tonnes (MPC = MSB = £80). Overproduction of 1,000 tonnes creates deadweight loss',
          'Social optimum is 4,000 tonnes – this is where the market and social optimum coincide',
          'Social optimum cannot be determined without knowing total demand, not just marginal benefit',
          'Social optimum is 2,000 tonnes – the government should aim for minimum pollution'
        ],
        ans: 0,
        exp: 'Social optimum: MSC = MSB. MSC = MPC + MEC. At 3,000: MSC = £70 + £20 = £90 = MSB ✓. Free market: MPC = MSB → at 4,000 (£80 = £80). The free market overproduces by 1,000 units. A Pigouvian tax of £20/tonne (= MEC) would shift MPC up to MSC, reducing output from 4,000 to 3,000 tonnes and eliminating the deadweight welfare loss. This illustrates why Pigouvian taxes are set equal to the marginal external cost, not to eliminate all output.'
      }

    ]
  };

})();

