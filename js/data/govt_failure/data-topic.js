window.ECONOS_TOPIC = {
  id: 'govt_failure',
  topicNum: '4.2',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Government Failure',
  estTime: '9-11 minutes',
  goal: 'Lock in the causes and types of government failure — and why intervention intended to correct market failure can sometimes make things worse.',
  intro: {
    heroKey: 'heroIntervention',
    summary: 'Government intervention is justified by market failure — but intervention is not costless. Government failure occurs when intervention produces a worse outcome than the market would have, due to information problems, political incentives, unintended consequences, or regulatory capture.',
    doInThis: 'Work through 7 cards covering the definition of government failure, information problems, regulatory capture, the law of unintended consequences, short-termism, intervention vs market failure comparison, and the case for minimal intervention.',
    outcomes: [
      'Define government failure and distinguish it from market failure',
      'Identify the main causes of government failure with examples',
      'Explain regulatory capture and the principal-agent problem in government',
      'Evaluate when market failure is worse than government failure — and vice versa'
    ],
    tip: 'Government failure occurs when the costs of intervention (including unintended consequences) exceed the costs of the market failure it was designed to correct. Intervention is not automatically better than the market.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'govt_failure_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Government failure: the big picture',
      lede: 'Intervention designed to fix market failure can make things worse — and recognising when is the heart of evaluation.',
      branches: [
        { tone: 'green',  label: 'The core idea',         sub: 'A net welfare loss <em>from</em> intervention. The comparator is realistic government, not a perfect one.' },
        { tone: 'amber',  label: 'Causes',                sub: 'Information failures, conflicting objectives, administrative cost, political short-termism.' },
        { tone: 'rose',   label: 'Regulatory capture',    sub: 'Regulators end up serving the industry they\'re meant to regulate — distorted policy, weak enforcement.' },
        { tone: 'purple', label: 'Unintended consequences', sub: 'Rent controls → housing shortages. Drug bans → black markets. Subsidies → dependence. The classic exam material.' },
        { tone: 'blue',   label: 'Reducing failure',      sub: 'Better information, transparency, sunset clauses, cost-benefit analysis, independent regulators.' }
      ],
      body: '<strong>Government failure</strong> occurs when government intervention in markets produces a net welfare loss — either because it creates new inefficiencies, has large unintended consequences, or corrects the market failure poorly. The result is an outcome worse than the uncorrected market.<br><br>Government failure does not mean all intervention is wrong — just that intervention has costs as well as benefits and should be subject to rigorous evaluation. The relevant comparison is not "market outcome vs perfect government" but "market outcome vs realistic government intervention."<br><br>Market failure + government failure = a case for choosing the lesser of two evils.',
      keyTerms: [
        { term: 'Government failure', def: 'When government intervention creates welfare losses that exceed (or could exceed) the market failure it was designed to correct.' },
        { term: 'Net welfare loss', def: 'Total cost of intervention (deadweight loss, unintended consequences, fiscal cost) exceeds the welfare gain from correcting the market failure.' },
        { term: 'Second-best theory', def: 'When one market failure exists, correcting it through imperfect intervention may produce a second-best outcome worse than doing nothing.' }
      ],
      examEdge: 'Examiners often set essays asking "evaluate government intervention to correct a market failure." High-band answers argue: intervention is justified in principle (market failure exists) but may fail in practice (information problems, unintended consequences, political incentives). The second paragraph always needs government failure analysis.'
    },
    {
      id: 'govt_failure_2',
      template: 'cause',
      diagramKey: 'govtFailureDiagram',
      title: 'Causes of Government Failure',
      causes: [
        { head: 'Information failure', body: 'Governments face the same information problems as markets — or worse. Setting optimal taxes, subsidies, or production targets requires knowing the MEC or MEB, which is inherently uncertain. Incorrect information → wrong policy level → under- or over-correction.' },
        { head: 'Political incentives (short-termism)', body: 'Politicians on 4-5 year election cycles prefer visible short-run benefits over long-run welfare gains. Infrastructure investment, climate policy, and pension reform all have costs now and benefits later — systematically under-prioritised.' },
        { head: 'Regulatory capture', body: 'Regulators are "captured" by the industries they regulate — they adopt the industry\'s perspective and protect incumbent firms rather than consumers. Energy regulators, financial regulators, pharmaceutical approvals all face this risk.' },
        { head: 'Unintended consequences', body: 'Complex markets produce unexpected reactions to interventions. Biofuel mandates (intended to reduce CO2) caused food price spikes by diverting crops. Rent controls caused housing shortages. Sugar tax caused reformulation (intended) but also smaller portion sizes (unintended).' },
        { head: 'Spending inefficiency', body: 'Government production lacks profit motive and competitive pressure → productive inefficiency. NHS procurement, defence contracts, and public IT projects have a poor track record of cost and time overruns.' }
      ],
      examEdge: 'Hayek\'s knowledge problem applies to government just as it does to central planning: no government can perfectly know all the information needed to set optimal policy. This is not an argument against all intervention — just for humility about what intervention can achieve. Use this framing for evaluation.'
    },
    {
      id: 'govt_failure_3',
      template: 'framing',
      title: 'Regulatory Capture',
      body: '<strong>Regulatory capture</strong> occurs when a regulatory body, set up to act in the public interest, ends up advancing the commercial or political interests of the industry it regulates. The regulator is "captured" by the regulated.<br><br><strong>Mechanisms:</strong><br>• <em>Revolving door:</em> regulators are recruited from industry → sympathetic to industry perspective; often return to industry after regulatory stint.<br>• <em>Information asymmetry:</em> industry has better knowledge of its costs and technology than the regulator — can manipulate regulatory decisions.<br>• <em>Concentrated interest vs diffuse public:</em> industry has strong incentive to lobby intensively; consumers have weak individual incentive to counter-lobby.<br><br><strong>Examples:</strong> Financial services regulation (pre-2008 FSA captured by banks); energy regulation; pharmaceutical approvals.',
      keyTerms: [
        { term: 'Regulatory capture', def: 'Regulatory body that is supposed to protect the public ends up serving the industry it regulates.' },
        { term: 'Revolving door', def: 'Movement of individuals between roles in government regulation and roles in the industries being regulated — creates conflicts of interest.' },
        { term: 'Concentrated vs diffuse interest', body: 'Industry has high per-firm benefit from favourable regulation → intensive lobbying. Each consumer has tiny interest → weak counter-lobbying. Asymmetry tilts regulation toward industry.' }
      ],
      examEdge: 'Pre-2008 financial crisis: FSA\'s "light-touch" regulation was a form of regulatory capture. Banks convinced regulators that self-regulation was sufficient. Result: excessive risk-taking → 2008 crash → £137bn taxpayer bank bailout. Post-crisis: tighter regulation (FPC, PRA), but risk of recapture always present.'
    },
    {
      id: 'govt_failure_4',
      template: 'mechanisms',
      title: 'Unintended Consequences',
      intro: 'Government interventions regularly produce significant unintended consequences — the "law of unintended consequences."',
      steps: [
        { label: 'Biofuels mandate', text: 'US and EU mandated fuel ethanol from crops (positive externality of lower CO2). Unintended: increased demand for corn/rapeseed → food prices rose globally → food riots in developing countries (2007-08). Cure worse than disease for the poorest.' },
        { label: 'Right to buy (UK housing)', text: 'Council tenants given right to buy at discounts — aimed at increasing homeownership. Unintended: council housing stock reduced from 6.5m (1979) to 2m (2020); councils lacked funds to build replacements; housing shortage worsened.' },
        { label: 'Cobra effect', text: 'Colonial India: British government paid bounty for dead cobras to reduce population. Unintended: Indians bred cobras to collect the bounty → cobra population rose. When scheme cancelled, breeders released farmed cobras → worse than before.' },
        { label: 'Sugary drink tax (smaller cans)', text: 'Sugar levy incentivised manufacturers to reduce can sizes to stay under 5g/100ml threshold. Consumers paid more per litre for smaller portions — higher unit cost, smaller quantity. Unintended redistributive effect.' }
      ],
      examEdge: 'The cobra effect is the canonical exam example of perverse incentives and unintended consequences. It illustrates a general principle: when you target a metric (cobra count → bounty), agents game the metric (breed cobras). Goodhart\'s Law: "When a measure becomes a target, it ceases to be a good measure." Apply to any performance target in government policy.'
    },
    {
      id: 'govt_failure_5',
      template: 'paired',
      title: 'Market Failure vs Government Failure',
      left: {
        label: 'When market failure is severe (intervention justified)',
        points: [
          'Public goods: market provides zero; any government provision is better than none',
          'Large externalities: climate change, pandemics, nuclear risks — market price signals radically understate true costs',
          'Severe information asymmetry: patients cannot evaluate medical quality; financial products are complex',
          'Natural monopoly: market provides at P > MC; regulation or public provision improves welfare'
        ]
      },
      right: {
        label: 'When government failure dominates (caution or restraint)',
        points: [
          'Marginal externalities: intervention costs may exceed the modest welfare gain from correction',
          'Fast-moving markets: government regulation too slow to keep up with technology (social media, crypto)',
          'Complex supply chains: intervention in one part distorts others (biofuel → food prices)',
          'High political risk: policy reversal, regulatory capture, or short-termism undermines long-run welfare'
        ]
      },
      examEdge: 'The comparison is never "perfect market vs perfect government" — it is "imperfect market vs imperfect government." For climate change: market failure is massive, global, irreversible → intervention justified despite government failure risk. For small local noise externality: market failure is modest → negotiated private solution (Coase) preferred over costly regulation.'
    },
    {
      id: 'govt_failure_6',
      template: 'framing',
      title: 'Government Failure in Practice',
      body: '<strong>HS2 (High Speed Rail):</strong> Major infrastructure investment. Costs have risen from £37.5bn (2010 estimate) to £100bn+. Phase 2 (Manchester/Leeds) cancelled 2023. Illustrates: optimism bias in government project appraisal, information failures, and political difficulty of cancelling committed projects even when costs escalate.<br><br><strong>PFI (Private Finance Initiative):</strong> Government attempted to bring private sector discipline to public infrastructure. Result: expensive long-term contracts; many projects had to be renationalised. Government failure: poor contract design, underestimated corporate bargaining power, information asymmetry between public sector client and private provider.',
      keyTerms: [
        { term: 'Optimism bias', def: 'Systematic tendency to underestimate costs and overestimate benefits in government project appraisal.' },
        { term: 'PFI', def: 'Private Finance Initiative — government contracts private firms to build and operate public infrastructure; rents facility back. Often more expensive than direct public provision.' },
        { term: 'Sunk cost fallacy', def: 'Continuing investment in a failing project because past spending cannot be recovered — rational exit is politically difficult.' }
      ],
      examEdge: 'HS2 is a live exam case study. Points to make: (1) large infrastructure projects systematically overrun costs (reference Flyvbjerg\'s research on "megaproject paradox"); (2) political commitment makes rational abandonment difficult (sunk cost fallacy in politics); (3) even failed projects can produce some benefit — the Manchester leg\'s cancellation may have caused more harm than completing it at higher cost.'
    },
    {
      id: 'govt_failure_7',
      template: 'framing',
      title: 'Reducing Government Failure',
      body: 'Government failure is not inevitable — better institutional design reduces its likelihood:<br><br>• <strong>Independent regulatory agencies:</strong> Arm\'s-length from political control (Bank of England independence for monetary policy; OBR for fiscal forecasting; Competition and Markets Authority). Reduces short-termism and political capture.<br>• <strong>Sunset clauses:</strong> automatic expiry of regulations forces reassessment — prevents vested interests from making temporary measures permanent.<br>• <strong>Cost-benefit analysis:</strong> rigorous appraisal before intervention (Treasury Green Book). Forces explicit accounting of costs including unintended consequences.<br>• <strong>Pilot schemes:</strong> test policy at small scale before full rollout — reduces scale of unintended consequence risk.',
      keyTerms: [
        { term: 'Independent regulator', def: 'Agency insulated from political interference — reduces short-termism and regulatory capture.' },
        { term: 'Cost-benefit analysis', def: 'Systematic comparison of all costs and benefits of an intervention — required before major UK government spending decisions.' },
        { term: 'OBR', def: 'Office for Budget Responsibility — independent UK body forecasting public finances; reduces government\'s ability to manipulate its own fiscal projections.' }
      ],
      examEdge: 'Bank of England independence (granted 1997) is the most successful institutional reform to reduce government failure in economic policy: central bank sets interest rates free from electoral cycle pressure → lower and more stable inflation than before. It demonstrates that delegating decisions to independent bodies with clear mandates can significantly reduce government failure in key policy areas.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }

  ]
};
