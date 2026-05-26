/* ============================================================
   ECONOS — content data for consumption
   Stub topic. Full 8-card build coming next.
   Edexcel Theme 2.2.2
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'consumption',
  topicNum: '2.2',
  theme: 'Theme 2 · The National and Global Economy',
  title: 'Consumption',
  estTime: 'Coming soon',
  goal: 'Understand what drives household consumption — the biggest engine of AD.',

  intro: {
    heroKey: 'heroConsumption',
    summary: 'Consumption is ~60% of UK AD. Stable most of the time but can collapse in confidence shocks. This topic will cover the determinants (income, interest rates, wealth, expectations, debt), MPC vs APC, the savings ratio as a real-time signal, and the policy implications.',
    doInThis: 'Topic under construction — full 8-card deep dive will land shortly. The cards below preview the content to come.',
    outcomes: [
      'Define consumption and its share of UK AD',
      'List the determinants of consumption',
      'Explain MPC, APC, and the savings ratio',
      'Evaluate consumption-driven policy responses'
    ],
    tip: 'Consumption is the largest AD component (~60%) but also the most stable — until it isn\'t. Confidence shocks are the key risk.',
    stages: [
      { num: 1, name: 'Learn',  sub: 'Coming soon',                       state: 'current' },
      { num: 2, name: 'Master', sub: 'Apply in exam-style questions',     state: 'locked' },
      { num: 3, name: 'Review', sub: 'See your progress and next steps',  state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'consumption-intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Consumption: coming soon',
      lede: 'Full content for this topic is under construction. The four branches below preview what the deep dive will cover.',
      branches: [
        { tone: 'green',  label: 'What drives C',         sub: 'Disposable income (main driver), interest rates, wealth effects, expectations, household debt, MPC vs APC.' },
        { tone: 'blue',   label: 'The savings ratio',     sub: 'Real-time signal of consumer confidence. Spiked to 25% in COVID, normalised to ~5-10%. Moves opposite to C in shocks.' },
        { tone: 'amber',  label: 'UK consumption today',  sub: '2020 lockdown C collapse · 2022 cost-of-living squeeze · real-wage erosion · how consumption tracks confidence indices.' },
        { tone: 'purple', label: 'Policy implications',   sub: 'C is the transmission belt for monetary policy (rates → borrowing → C) and tax cuts. Anything that affects household income or confidence has a huge AD effect.' }
      ],
      body: 'Topic placeholder — full 8-card lesson covering determinants, MPC/APC, UK data, and policy connections will replace this. Edexcel Theme 2.2.2.',
      examEdge: 'Quote the savings ratio as a real-time signal — it moves opposite to consumption in confidence shocks.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
