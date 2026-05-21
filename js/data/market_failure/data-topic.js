window.ECONOS_TOPIC = {
  id: 'market_failure',
  topicNum: '3.1',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Market Failure',
  estTime: '8-10 minutes',
  goal: 'Understand what market failure is, why the price mechanism sometimes produces the wrong quantity, and how to spot it in real-world contexts.',
  intro: {
    heroKey: 'heroMarketFailure',
    summary: 'A free market achieves allocative efficiency when price equals marginal social cost and benefit. Market failure occurs when private incentives diverge from social welfare — through externalities, public goods, or information gaps — so the market produces too much or too little for society.',
    doInThis: 'Work through 5 cards covering the big picture of market failure, the private-vs-social framework, three routes to failure, welfare loss and allocative inefficiency, and how to diagnose market failure in real contexts.',
    outcomes: [
      'Define market failure and explain its link to allocative efficiency',
      'Distinguish private vs social costs and benefits, and explain why their divergence causes failure',
      'Identify the three core routes to market failure with real-world examples',
      'Draw and interpret the welfare-loss (deadweight loss) triangle',
      'Diagnose market failure in unseen contexts using a four-step framework'
    ],
    tip: 'Market failure does not mean markets "break down" — it means the price mechanism produces the wrong quantity from society\'s perspective. The output is not zero; it is just above or below the socially optimal level.',
    stages: [
      { num: 1, name: 'Learn it', sub: '5 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    {
      id: 'market_failure_1',
      stepLabel: 'Learn: Step 1 of 5',
      title: 'Market failure',
      tip: { icon: '💡', tone: 'blue', text: 'Markets usually coordinate resources well — but sometimes private choices create social outcomes that are inefficient. The market still functions; it just produces the wrong amount from society\'s point of view.' },
      diagramKey: 'marketFailureOverview',
      diagramLabel: 'When markets work, and when they fail',
      diagramEmoji: '⚖️',
      keyPointsLabel: 'What market failure means',
      keyPointsEmoji: '🔍',
      keyPointsCols: 3,
      keyPoints: [
        { title: 'Misallocation of resources', icon: '👥', headline: 'Resources are used by the wrong people or in the wrong quantities', body: 'The price mechanism sends signals based on private costs and benefits, missing the wider picture. So inputs flow to uses that society does not value most.', tone: 'green' },
        { title: 'Allocative inefficiency', icon: '📊', headline: 'The market outcome does not maximise total surplus', body: 'When MSB ≠ MSC at the market quantity, reallocating could make society better off overall. The market sits short of the socially optimal point.', tone: 'amber' },
        { title: 'Welfare loss', icon: '📉', headline: 'The gap between actual and best outcome is a deadweight loss', body: 'The lost potential surplus — neither captured by consumers, producers, nor the third parties affected — is the cost of the failure.', tone: 'rose' }
      ],
      keyTerms: [
        { term: 'Market failure', def: 'A situation in which the free market fails to produce the socially optimal quantity of a good or service, leading to a misallocation of resources.' },
        { term: 'Allocative efficiency', def: 'Achieved when resources are allocated so that price equals marginal cost (P = MC, or MSB = MSC) — no reallocation can improve overall welfare.' },
        { term: 'Social optimum', def: 'The output level at which marginal social benefit equals marginal social cost — maximises total social welfare.' }
      ],
      examEdge: 'Market failure is NOT the same as market collapse. Markets can "fail" while still functioning — they just produce too much or too little of a good. The key distinction: <strong>private equilibrium</strong> (where MPB = MPC) vs <strong>social optimum</strong> (where MSB = MSC). Market failure = the gap between these two.'
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
        { title: 'Negative externality', icon: '🏭', headline: 'A factory produces goods — but locals breathe the pollution', body: 'It bears the cost of production, but local residents suffer health problems from the emissions.<br><br><strong>Private cost: ££</strong><br><strong>Social cost: £££</strong><br><br>Social cost &gt; private cost, so the factory over-produces relative to the social optimum.', tone: 'rose' },
        { title: 'Positive externality', icon: '💉', headline: 'A vaccinated person also protects the community', body: 'They gain personal protection, and others are less likely to catch the disease (herd immunity).<br><br><strong>Private benefit: ££</strong><br><strong>Social benefit: £££</strong><br><br>Social benefit &gt; private benefit, so the market under-produces vaccinations.', tone: 'green' }
      ],
      keyTerms: [
        { term: 'Private cost / benefit', def: 'The cost (or benefit) borne by the individual consumer or producer making the decision — what the price mechanism responds to.' },
        { term: 'External cost / benefit', def: 'A spillover cost or benefit imposed on (or enjoyed by) third parties not involved in the transaction.' },
        { term: 'Social cost / benefit', def: 'Private + external. The full cost or benefit to society as a whole. Market failure begins when social and private values diverge.' }
      ],
      examEdge: 'The exam trick: market failure begins the moment <strong>private and social costs (or benefits) diverge</strong>. State this explicitly, then identify whether the divergence is on the cost or the benefit side — that tells the examiner whether the market is over- or under-producing.'
    },

    {
      id: 'market_failure_3',
      stepLabel: 'Learn: Step 3 of 5',
      title: 'Three routes to market failure',
      tip: { icon: '💡', tone: 'blue', text: 'At this stage you only need the map: three broad reasons markets may fail. Each one gets a dedicated topic later — for now, secure the framework.' },
      diagramKey: 'threeRoutesDiagram',
      diagramLabel: 'The three routes — and what each one breaks',
      diagramEmoji: '🌳',
      keyTerms: [
        { term: 'Externality', def: 'A cost or benefit imposed on a third party that is not reflected in the market price. Negative externalities cause over-production; positive externalities cause under-production.' },
        { term: 'Public good', def: 'A good that is non-rival (one person\'s use does not reduce availability) and non-excludable (you cannot stop non-payers from consuming). Free markets under-provide them.' },
        { term: 'Asymmetric information', def: 'When one party in a transaction has materially better information than the other — leading to adverse selection or moral hazard.' },
        { term: 'Free-rider problem', def: 'When people benefit from a good without paying for it. Because no-one can be excluded, no-one has an incentive to pay — so the market under-provides.' }
      ],
      examEdge: 'You do not need every detail yet — first secure the map, then study each failure type in depth. In an essay, naming the route correctly is the first credit-earning step. After that, link the route to the divergence (cost or benefit) and the direction of the failure (over- or under-production).'
    },

    {
      id: 'market_failure_4',
      stepLabel: 'Learn: Step 4 of 5',
      title: 'Welfare loss and allocative inefficiency',
      tip: { icon: '💡', tone: 'amber', text: 'When the market produces the wrong quantity, society misses out on potential welfare. That missing value is <strong>deadweight loss</strong> — surplus no-one receives.' },
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
        { term: 'Marginal social cost (MSC)', def: 'The total cost to society of producing one more unit — private cost plus any external cost. MSC = MPC + MEC.' },
        { term: 'Marginal social benefit (MSB)', def: 'The total benefit to society from consuming one more unit — private benefit plus any external benefit. MSB = MPB + MEB.' },
        { term: 'Deadweight welfare loss (DWL)', def: 'The loss of total surplus when output differs from the social optimum — the welfare cost of market failure, shown as a triangle on the diagram.' }
      ],
      examEdge: 'Always link market failure to the <strong>wrong quantity</strong> and the resulting <strong>loss of total surplus</strong>. Show the welfare-loss triangle on the diagram, identify Q* and Qm, and state which direction the market has missed. That sequence — direction, quantity gap, surplus lost — is what earns the marks.'
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
        { title: 'Street lighting or flood defences', icon: '💡', headline: 'Everyone benefits and no-one can be excluded', body: '<strong>Route:</strong> <em>Public good</em>.<br><strong>What goes wrong:</strong> Under-provision since people can free-ride on others\' payments — no-one has an incentive to pay.', tone: 'amber' },
        { title: 'Food labels, used cars, vaping info', icon: '🏷️', headline: 'One side has more or better information', body: '<strong>Route:</strong> <em>Information gap</em>.<br><strong>What goes wrong:</strong> Poor-quality and biased choices → inefficient outcomes; the price reflects misperception, not reality.', tone: 'purple' }
      ],
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
        { term: 'Adverse selection', def: 'When asymmetric information before a transaction causes the wrong people to participate — e.g., used-car buyers fearing "lemons", so the market for good used cars shrinks.' },
        { term: 'Moral hazard', def: 'When asymmetric information after a transaction changes behaviour — e.g., an insured person takes more risks because they no longer bear the full cost.' }
      ],
      examEdge: 'A strong answer does more than name the failure — it explains <strong>why</strong> the market outcome is allocatively inefficient. Use the four-step diagnostic: divergence → direction → quantity gap → welfare loss. That structure works for any market failure question.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
