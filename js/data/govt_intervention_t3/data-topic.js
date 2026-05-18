window.ECONOS_TOPIC = {
  id: 'govt_intervention_t3',
  topicNum: '6.1',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Government Intervention',
  estTime: '7-9 minutes',
  goal: 'Evaluate government intervention in markets — competition policy, regulation, nationalisation, price controls, and labour market policy.',

  intro: {
    heroKey: 'heroIntervention',
    summary: 'Government intervention in business markets takes many forms: competition law to prevent monopoly abuse, price regulation for natural monopolies, nationalisation and privatisation, minimum wages, and labour market reforms. Evaluating the case for and against each type of intervention is a core analytical skill.',
    doInThis: 'Content coming soon — this topic will cover competition policy (CMA powers), regulation of natural monopolies (RPI-X), nationalisation vs privatisation, and evaluation of government failure risks.',
    outcomes: [
      'Explain the rationale for competition policy and describe the CMA\'s main powers',
      'Evaluate RPI-X price cap regulation of natural monopolies',
      'Compare nationalisation and privatisation as policy approaches',
      'Analyse government failure risks in market intervention'
    ],
    tip: 'Intervention is justified by market failure (monopoly power, externalities, information problems). But government failure (regulatory capture, unintended consequences, information asymmetry) means intervention is not costless. Always evaluate both market failure AND government failure when assessing intervention.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Content coming soon', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'govt_intervention_t3_intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Government intervention in business: coming soon',
      lede: 'This topic is under construction. Full content covering competition policy, regulation, and labour market intervention will be added shortly.',
      branches: [
        { tone: 'blue',   label: 'Competition policy',      sub: 'CMA investigates mergers, markets, and anticompetitive practices. Can block mergers, impose fines, require divestiture.' },
        { tone: 'green',  label: 'Natural monopoly regulation', sub: 'RPI-X price caps, average cost pricing, marginal cost pricing. Trade-offs between allocative efficiency and cost recovery.' },
        { tone: 'amber',  label: 'Nationalisation vs privatisation', sub: 'Public ownership for natural monopolies and essential services vs private ownership with regulation.' },
        { tone: 'rose',   label: 'Government failure',      sub: 'Regulatory capture, information asymmetry, unintended consequences — intervention is not costless.' }
      ],
      body: 'Full content for this topic is being developed. Key concepts: CMA powers and merger control thresholds; RPI-X regulation (Ofwat, Ofgem, Ofcom); UK privatisation programme 1980s-1990s; evaluation of privatisation outcomes; government failure risks including regulatory capture and principal-agent problems in public ownership.',
      examEdge: 'The A* structure for government intervention questions: (1) identify the market failure justifying intervention; (2) explain the specific intervention and how it corrects the failure; (3) evaluate government failure risks — does the cure worse than the disease? Use specific UK examples (CMA, Ofwat, NHS) to ground the analysis.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
