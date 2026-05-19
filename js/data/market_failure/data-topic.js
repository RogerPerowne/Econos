window.ECONOS_TOPIC = {
  id: 'market_failure',
  topicNum: '3.1',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Market Failure',
  estTime: '8-10 minutes',
  goal: 'Understand what market failure is, why free markets fail to achieve allocative efficiency, and how the four main types of market failure connect to the government interventions that follow.',
  intro: {
    heroKey: 'heroMarketFailure',
    summary: 'A free market achieves allocative efficiency when price equals marginal social cost and benefit. Market failure occurs when the price mechanism produces an outcome that is not socially optimal — either through externalities, public goods characteristics, information gaps, or factor immobility.',
    doInThis: 'Work through 6 cards covering the definition of market failure, allocative efficiency and the price mechanism, the four types of market failure, a framework for diagnosing failures, and an introduction to government responses.',
    outcomes: [
      'Define market failure and explain its link to allocative efficiency',
      'Identify the four main types of market failure with examples',
      'Explain why private markets may over- or under-produce relative to the social optimum',
      'Set up the framework for evaluating government intervention'
    ],
    tip: 'Market failure does not mean markets "break down" — it means the price mechanism produces the wrong quantity from society\'s perspective. The output is not zero, it is just above or below the socially optimal level.',
    stages: [
      { num: 1, name: 'Learn it', sub: '6 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'market_failure_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'Market failure: the big picture',
      lede: 'Free markets are powerful — but they fail when private incentives diverge from social welfare.',
      tip: 'Private equilibrium: where MPB = MPC. Social optimum: where MSB = MSC. Market failure = the gap between these two points. Government intervention aims to close this gap.',
      branches: [
        { tone: 'green',  label: 'What it means',        sub: 'Market failure = the price mechanism allocates resources in a way that is not socially optimal. Not "broken" — just producing the wrong amount.' },
        { tone: 'blue',   label: 'Externalities',         sub: 'Costs or benefits that spill over to third parties. Negative: over-production. Positive: under-production.' },
        { tone: 'purple', label: 'Public goods',          sub: 'Non-rival and non-excludable goods. Free-rider problem → private market will under-provide or not provide at all.' },
        { tone: 'amber',  label: 'Information gaps',      sub: 'Asymmetric information between buyers and sellers leads to adverse selection and moral hazard.' },
        { tone: 'rose',   label: 'Factor immobility',     sub: 'Labour and capital that cannot move to where they are most productive — persistent unemployment and inefficiency.' }
      ],
      body: '<strong>Market failure</strong> occurs when the free price mechanism fails to achieve an allocation of resources that maximises social welfare — i.e., when the market does not produce the socially optimal output level.<br><br>This happens when there is a divergence between private costs/benefits (what individuals face) and social costs/benefits (what society as a whole faces). When this gap exists, the market equilibrium is not allocatively efficient.<br><br><strong>Why it matters:</strong> market failure is the primary justification for government intervention in a market economy. Without market failure, there is no efficiency case for intervention — though equity arguments may still apply.',
      keyTerms: [
        { term: 'Market failure', def: 'A situation in which the free market fails to produce the socially optimal quantity of a good or service, leading to a misallocation of resources.' },
        { term: 'Allocative efficiency', def: 'Achieved when resources are allocated so that P = MC (or MSB = MSC) — no reallocation can improve overall welfare.' },
        { term: 'Social optimum', def: 'The output level at which marginal social benefit equals marginal social cost — maximises total social welfare.' }
      ],
      examEdge: 'Market failure is NOT the same as market collapse. Markets can "fail" while still functioning — they just produce too much or too little of a good. The key distinction: private equilibrium (where MPB = MPC) vs social optimum (where MSB = MSC). Market failure = the gap between these two.'
    },
    {
      id: 'market_failure_2',
      template: 'framing',
      title: 'Allocative Efficiency and the Price Mechanism',
      body: 'In a perfectly competitive market with no externalities and full information, the price mechanism achieves allocative efficiency: P = MC, which means MSB = MSC at the market equilibrium.<br><br>At this point, total surplus (consumer surplus + producer surplus) is maximised. Any deviation — producing more or less than this quantity — creates a deadweight welfare loss (DWL): a triangle of surplus that no one receives.<br><br><strong>When markets fail:</strong> the private equilibrium (where MPB = MPC) differs from the social optimum (where MSB = MSC). The gap between private and social marginal costs/benefits is the externality — the part the price mechanism ignores.',
      keyTerms: [
        { term: 'Marginal private cost (MPC)', def: 'The additional cost borne by the producer of producing one more unit — what the price mechanism responds to.' },
        { term: 'Marginal social cost (MSC)', def: 'MPC + any negative externality costs imposed on third parties. MSC = MPC + MEC.' },
        { term: 'Deadweight welfare loss (DWL)', def: 'The loss of total surplus (consumer + producer + external) when output differs from the social optimum — the cost of market failure.' }
      ],
      examEdge: 'The DWL triangle is the key diagram tool for market failure. It shows the welfare cost of producing the wrong quantity. With a negative externality: market over-produces, DWL is the triangle above MSC below MSB between Q* and Qm. With a positive externality: market under-produces, DWL is the triangle above MSB below MSC between Qm and Q*. Learn both orientations.'
    },
    {
      id: 'market_failure_3',
      template: 'cause',
      causesEmoji: '🔍',
      causesLabel: 'Four types of market failure',
      causesStyle: 'tinted-flat',
      title: 'The Four Types of Market Failure',
      causes: [
        { icon: '💨', head: 'Externalities', body: '<strong>Negative:</strong> third-party costs ignored by producers/consumers → over-production (pollution, congestion, smoking). <strong>Positive:</strong> third-party benefits ignored → under-production (education, vaccination, R&D). Both create a gap between private and social optimum.' },
        { icon: '🏛️', head: 'Public goods', body: 'Goods that are non-rival (one person\'s consumption does not reduce availability to others) and non-excludable (cannot prevent non-payers from consuming). Free-rider problem → rational not to pay → private market under-provides. Examples: national defence, street lighting, flood defences.' },
        { icon: '📊', head: 'Information gaps', body: 'Asymmetric information: one party knows more than the other. <strong>Adverse selection:</strong> before a transaction (e.g. used car market, insurance). <strong>Moral hazard:</strong> after a transaction (e.g. insured person takes more risks). Leads to under- or over-consumption relative to the optimum.' },
        { icon: '🚧', head: 'Factor immobility', body: 'Labour and capital that cannot move freely between sectors or regions. Geographic immobility (workers cannot move to where jobs are) and occupational immobility (workers lack skills for available jobs) prevent efficient resource allocation, causing structural unemployment and persistent regional inequality.' }
      ],
      examEdge: 'All four types of market failure can appear in exams. The most common are externalities and public goods. Information gaps and factor immobility are often examined in context (healthcare, labour markets). Make sure you can link each type to a specific real-world example and the relevant government response.'
    },
    {
      id: 'market_failure_4',
      template: 'diagnose',
      title: 'Diagnosing Market Failure: A Framework',
      intro: 'Use this framework to structure any market failure question.',
      rows: [
        { label: 'Type of failure', colA: 'Negative externality / public bad', colB: 'Positive externality / public good / info gap' },
        { label: 'Market outcome', colA: 'Over-production relative to social optimum. MSC > MSB at market output. DWL above MSC.', colB: 'Under-production relative to social optimum. MSB > MSC at market output. DWL below MSB.' },
        { label: 'Welfare effect', colA: 'Excess production imposes costs on third parties not reflected in price. Total social cost exceeds total social benefit at market output.', colB: 'Too little production means positive spillover benefits are foregone. Total social benefit exceeds total social cost at market output.' },
        { label: 'Policy response', colA: 'Tax, regulation, cap-and-trade, information campaigns to reduce consumption/production.', colB: 'Subsidy, public provision, regulation (minimum consumption), information campaigns to increase consumption/production.' }
      ],
      footer: 'The direction of the failure (over vs under-production) determines whether you need a "stick" (tax/regulation) or a "carrot" (subsidy/provision). Always identify the direction first.',
      examEdge: 'For any market failure question: (1) identify the type of failure; (2) state whether market over- or under-produces; (3) show the DWL on a diagram; (4) explain the government response; (5) evaluate whether the response corrects the failure or creates new problems (government failure).'
    },
    {
      id: 'market_failure_5',
      template: 'framing',
      title: 'Market Failure vs Government Failure',
      verdict: {
        leftLabel: '📉 Market failure — case FOR intervention',
        rightLabel: '🏛️ Government failure — case AGAINST',
        separator: 'VS',
        rows: [
          { aspect: 'Externalities', left: 'Free market ignores external costs/benefits — price mechanism sends wrong signals', right: 'Governments lack the information to set optimal taxes, subsidies or regulations' },
          { aspect: 'Public goods', left: 'Public goods under-provided because free-rider problem removes private incentive', right: 'Preference revelation problem: government cannot know optimal quantity without price signals' },
          { aspect: 'Information', left: 'Asymmetric information leads to adverse selection and moral hazard', right: 'Public choice theory: politicians serve their own interests, not the public interest' },
          { aspect: 'Equity', left: 'Even without efficiency failure, distributional outcomes may be unacceptable', right: 'Regulatory capture: industry lobbying shapes regulation to benefit incumbents' }
        ]
      },
      examEdge: 'The market failure vs government failure comparison is the key evaluative framework for all Section B and Section C questions on microeconomic policy. The existence of market failure justifies the case for intervention; the risk of government failure limits that case. A sophisticated answer considers both sides and evaluates which is likely to dominate in a specific context.'
    },
    {
      id: 'market_failure_6',
      template: 'framing',
      title: 'From Market Failure to Policy: The Roadmap Ahead',
      body: 'The next topics in this section explore each type of market failure in depth and evaluate the policy responses available.<br><br><strong>3.2a — Negative Externalities:</strong> pollution, smoking, congestion. Policy tools: Pigouvian taxes, regulation, tradeable permits.<br><br><strong>3.2b — Positive Externalities:</strong> education, healthcare, R&D. Policy tools: subsidies, public provision, regulation (minimum requirements).<br><br><strong>3.3 — Public Goods:</strong> national defence, lighthouses. Policy tools: government provision, contracting out.<br><br><strong>3.4 — Information Gaps:</strong> used cars, insurance, healthcare. Policy tools: information provision, regulation, mandatory disclosure.',
      keyTerms: [
        { term: 'Government intervention', def: 'Any action by government to correct a market failure — taxes, subsidies, regulation, public provision, or information campaigns.' },
        { term: 'Second-best solution', def: 'When the first-best (perfectly correcting market failure) is unavailable due to information constraints, governments aim for the best achievable outcome.' },
        { term: 'Cost-benefit analysis', def: 'A framework for evaluating whether the benefits of government intervention outweigh the costs — including the risk of government failure.' }
      ],
      keyTakeaway: { title: 'The big picture', text: 'Market failure occurs when the price mechanism produces outcomes that are not socially optimal. The four main types — externalities, public goods, information gaps, and factor immobility — each create a specific gap between private and social optimum. Government intervention can correct these failures, but risks creating new ones (government failure). The goal is always to maximise total social welfare.' },
      examEdge: 'Market failure topics account for a significant portion of Theme 1 marks. Make sure you can: (1) define each type; (2) draw the relevant diagram; (3) calculate or estimate the DWL; (4) propose an appropriate policy; (5) evaluate the policy against alternatives. Breadth of knowledge and quality of evaluation are both rewarded.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
