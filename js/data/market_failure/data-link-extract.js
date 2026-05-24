/* ============================================================
   ECONOS — Link It · Read the Extract station data
   Market Failure: identify and classify market failure types
   ============================================================ */

window.ECONOS_LINK_EXTRACT = {
  topic:   'Market Failure',
  backUrl: TopicLoader.buildUrl('link_chain.html'),
  nextUrl: TopicLoader.buildUrl('link_diagram.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'extract', label: 'Read the extract',   href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 2,

  eyebrow:     'Read the Extract',
  instruction: 'This extract describes three different real-world situations. For each question, identify which type of market failure is present and explain why the free market fails to produce the optimal outcome.',

  passage: {
    title: 'Extract: Three cases of market failure',
    source: 'Composite extract, adapted from academic and policy sources',
    text: '<strong>Case A:</strong> A factory discharges chemical waste into a river, raising treatment costs for the water company downstream by £2 million annually. The factory bears none of these costs.<br><br><strong>Case B:</strong> Street lighting in a town centre is provided by a private firm. Residents who have not paid their subscription still benefit from the light, and one resident\'s use does not reduce the light available to others.<br><br><strong>Case C:</strong> Young workers do not insure against unemployment because they believe they are unlikely to lose their jobs. Insurance companies, knowing this, price policies to reflect the higher-risk pool that actually buys insurance — making policies unaffordable for average-risk workers.'
  },

  questions: [
    {
      id: 'mf-extract-q1',
      question: 'Case A describes which type of market failure, and what is the economic consequence?',
      options: [
        'Public good — the factory\'s output is non-rival and non-excludable',
        'Information gap — the factory does not know the cost it imposes on the water company',
        'Negative production externality — the factory imposes a cost on a third party not reflected in its private cost, causing over-production relative to the social optimum',
        'Demerit good — the factory produces a good whose social costs exceed consumers\' private valuation'
      ],
      correct: 2,
      explanation: 'Case A is a negative production externality: the factory\'s production generates an external cost (£2m water treatment) borne by a third party (the water company and its customers). The factory\'s MPC does not include this external cost, so MPC < MSC. The factory produces where MPC = MR, which is a larger quantity than the socially optimal Q* where MSC = MSB. Result: over-production and deadweight welfare loss.'
    },
    {
      id: 'mf-extract-q2',
      question: 'Case B describes which type of market failure? Why does the private market fail to provide street lighting at the optimal level?',
      options: [
        'Negative externality — street lighting imposes light pollution on residents who prefer darkness',
        'Public good — street lighting is non-excludable (can\'t stop non-payers benefiting) and non-rival (one person\'s use doesn\'t reduce others\'), causing the free rider problem and under-provision',
        'Imperfect information — residents don\'t know whether they want street lighting until they experience it',
        'Monopoly power — the private lighting firm charges a price above marginal cost, reducing consumption'
      ],
      correct: 1,
      explanation: 'Case B describes a pure public good problem. Street lighting is non-excludable (you cannot prevent non-payers from benefiting) and non-rival (my use doesn\'t reduce the light available to you). This causes the free rider problem: rational individuals don\'t pay because they can benefit for free. If everyone reasons this way, the good is under-provided or not provided at all by the private market. The government must fund it through general taxation to achieve the socially optimal level of provision.'
    },
    {
      id: 'mf-extract-q3',
      question: 'Case C describes which type of market failure, and what is the specific mechanism causing it?',
      options: [
        'Moral hazard — workers with insurance take more risks, increasing unemployment claims',
        'Adverse selection — asymmetric information causes low-risk buyers to exit the market, leaving only high-risk buyers, which pushes up prices and may cause the market to collapse',
        'A negative externality — unemployed workers impose costs on the state benefits system',
        'A positive externality — workers who maintain employment generate benefits for employers who are not compensated'
      ],
      correct: 1,
      explanation: 'Case C describes adverse selection, a form of asymmetric information. Workers know their own employment risk better than insurers do (asymmetric information). Low-risk workers see the premium as too expensive relative to their actual risk and don\'t buy insurance. This leaves the insurer with a pool dominated by high-risk workers — so premiums rise further — which drives out more low-risk workers. In the extreme, the market "unravels" entirely. This is Akerlof\'s "Market for Lemons" applied to insurance markets — a classic A-level evaluation point.'
    }
  ]
};
