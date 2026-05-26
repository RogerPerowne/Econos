/* ============================================================
   ECONOS — content data for investment
   Stub topic. Full 8-card build coming next.
   Edexcel Theme 2.2.3
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'investment',
  topicNum: '2.2.3',
  theme: 'Theme 2 · The National and Global Economy',
  title: 'Investment',
  estTime: 'Coming soon',
  goal: 'Understand the volatile engine of the business cycle.',

  intro: {
    heroKey: 'heroInvestment',
    summary: 'Investment is only ~17% of UK AD but it drives most of the cycle. When firms lose confidence, I falls first and furthest. This topic will cover the determinants (interest rates, animal spirits, accelerator effect, corporate tax), the link to growth, and why investment matters so much for policy.',
    doInThis: 'Topic under construction — full 8-card deep dive will land shortly. The cards below preview the content to come.',
    outcomes: [
      'Define investment and distinguish gross from net',
      'List the determinants of investment',
      'Explain the accelerator effect and animal spirits',
      'Evaluate policy levers (interest rates, allowances, confidence)'
    ],
    tip: 'I is small in level but huge in volatility — it amplifies AD changes far beyond its 17% share.',
    stages: [
      { num: 1, name: 'Learn',  sub: 'Coming soon',                       state: 'current' },
      { num: 2, name: 'Master', sub: 'Apply in exam-style questions',     state: 'locked' },
      { num: 3, name: 'Review', sub: 'See your progress and next steps',  state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'investment-intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Investment: coming soon',
      lede: 'Full content for this topic is under construction. The four branches below preview what the deep dive will cover.',
      branches: [
        { tone: 'amber',  label: 'What drives I',           sub: 'Interest rates, business confidence (animal spirits), the accelerator (ΔY → ΔI), corporate tax rates, credit availability, technology and innovation.' },
        { tone: 'rose',   label: 'Why I is volatile',       sub: 'Investment is forward-looking and confidence-driven. Brexit (2016-19), COVID (2020), and rate-hike cycles all hit I first — a leading indicator of the cycle.' },
        { tone: 'green',  label: 'UK investment today',     sub: 'UK has chronic under-investment vs G7 peers. PMI surveys, capex announcements, business confidence indices — the real-time signals.' },
        { tone: 'blue',   label: 'Policy levers',           sub: 'Monetary policy targets I via interest rates. Fiscal policy via corporate tax, super-deductions, and investment allowances. Confidence shocks dominate.' }
      ],
      body: 'Topic placeholder — full 8-card lesson covering determinants, the accelerator, UK data, and policy connections will replace this. Edexcel Theme 2.2.3.',
      examEdge: 'I is small but volatile, so it amplifies AD changes — a classic A* analytical move.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
