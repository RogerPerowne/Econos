/* ============================================================
   ECONOS — content data for government_spending
   Stub topic. Full 8-card build coming next.
   Edexcel Theme 2.2.4
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'government_spending',
  topicNum: '2.2.4',
  theme: 'Theme 2 · The National and Global Economy',
  title: 'Government Spending',
  estTime: 'Coming soon',
  goal: 'Understand G — the only AD component policymakers control directly.',

  intro: {
    heroKey: 'heroGovSpending',
    summary: 'Government spending is ~20% of UK AD and the only component policymakers can move with a single decision. This topic will cover the composition of G (current vs capital), automatic stabilisers, discretionary fiscal policy, fiscal rules, and the constraints on G from debt and political cycles.',
    doInThis: 'Topic under construction — full 8-card deep dive will land shortly. The cards below preview the content to come.',
    outcomes: [
      'Define government spending and its share of UK AD',
      'Distinguish current vs capital spending',
      'Explain automatic stabilisers and discretionary fiscal policy',
      'Evaluate the constraints on G (debt, fiscal rules, political cycle)'
    ],
    tip: 'G is the only direct AD lever — but it is constrained by debt sustainability, fiscal rules and political consent.',
    stages: [
      { num: 1, name: 'Learn',  sub: 'Coming soon',                       state: 'current' },
      { num: 2, name: 'Master', sub: 'Apply in exam-style questions',     state: 'locked' },
      { num: 3, name: 'Review', sub: 'See your progress and next steps',  state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'government-intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Government spending: coming soon',
      lede: 'Full content for this topic is under construction. The four branches below preview what the deep dive will cover.',
      branches: [
        { tone: 'blue',   label: 'What is G?',                sub: 'Current spending (wages, benefits, services) + capital spending (infrastructure, public investment). About ~20% of UK AD. Transfer payments are excluded — they re-enter as C.' },
        { tone: 'green',  label: 'Automatic stabilisers',     sub: 'Welfare and tax revenue move counter-cyclically without active decisions — soften booms and busts automatically. Larger in countries with bigger welfare states.' },
        { tone: 'amber',  label: 'Discretionary fiscal',      sub: 'Active decisions: stimulus packages, tax cuts, spending reviews. 2020 furlough scheme is the textbook recent example. Slower to deploy than monetary policy.' },
        { tone: 'rose',   label: 'Constraints on G',          sub: 'Debt-to-GDP, fiscal rules (debt falling by year 5), political cycle, crowding-out concerns. Higher G can\'t go on forever without raising T or borrowing.' }
      ],
      body: 'Topic placeholder — full 8-card lesson covering composition, fiscal stance, automatic stabilisers, and the constraints on G will replace this. Edexcel Theme 2.2.4.',
      examEdge: 'G is the only AD component policymakers control directly — that is why fiscal policy is so powerful, and why fiscal rules matter so much.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
