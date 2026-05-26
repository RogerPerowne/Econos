/* ============================================================
   ECONOS — content data for net_trade
   Stub topic. Full 8-card build coming next.
   Edexcel Theme 2.2.5
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'net_trade',
  topicNum: '2.5',
  theme: 'Theme 2 · The National and Global Economy',
  title: 'Net Trade (X − M)',
  estTime: 'Coming soon',
  goal: 'Understand the open-economy link — small in level, volatile in effect.',

  intro: {
    heroKey: 'heroNetTrade',
    summary: 'Net trade (X − M) is only about 3% of UK AD on average — but it can swing sharply with the exchange rate, world income, and competitiveness. This topic will cover the determinants of exports and imports, the Marshall-Lerner condition, the J-curve link, and policy levers.',
    doInThis: 'Topic under construction — full 8-card deep dive will land shortly. The cards below preview the content to come.',
    outcomes: [
      'Define net trade and its share of UK AD',
      'List the determinants of exports and imports',
      'Explain the Marshall-Lerner condition and the J-curve',
      'Evaluate policy levers (exchange rate, competitiveness, trade policy)'
    ],
    tip: 'Net trade is small in level (~3% of AD) but punches above its weight when the exchange rate or world income moves.',
    stages: [
      { num: 1, name: 'Learn',  sub: 'Coming soon',                       state: 'current' },
      { num: 2, name: 'Master', sub: 'Apply in exam-style questions',     state: 'locked' },
      { num: 3, name: 'Review', sub: 'See your progress and next steps',  state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'net-trade-intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Net trade: coming soon',
      lede: 'Full content for this topic is under construction. The four branches below preview what the deep dive will cover.',
      branches: [
        { tone: 'purple', label: 'What is (X − M)?',           sub: 'Exports of goods and services minus imports. UK runs a persistent net trade deficit — services surplus does not fully offset the goods deficit.' },
        { tone: 'blue',   label: 'Drivers of X and M',         sub: 'Exchange rate, real income at home (M) and abroad (X), relative price competitiveness, non-price competitiveness (quality, brand), trade barriers.' },
        { tone: 'amber',  label: 'Marshall-Lerner & J-curve',  sub: 'Depreciation only improves net trade if PEDx + PEDm > 1. Even then, the curve dips first (price effect) before recovering (volume effect). Covered fully in BoP topic.' },
        { tone: 'rose',   label: 'Policy levers',              sub: 'Exchange rate (limited under floating), supply-side reform for competitiveness, trade agreements / tariffs (constrained under WTO). Hardest AD component for policymakers to steer directly.' }
      ],
      body: 'Topic placeholder — full 8-card lesson covering the determinants, Marshall-Lerner, the J-curve, and policy levers will replace this. Edexcel Theme 2.2.5.',
      examEdge: 'Net trade is small but volatile — exchange rate moves can shift it sharply, but Marshall-Lerner must hold for the effect to be positive.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
