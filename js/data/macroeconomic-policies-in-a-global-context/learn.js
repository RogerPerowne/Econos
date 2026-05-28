window.ECONOS_TOPIC = {
  id: 'macroeconomic-policies-in-a-global-context',
  topicNum: '5.4',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Macroeconomic Policies in a Global Context',
  estTime: '9-11 minutes',
  goal: 'Evaluate how macro policy is constrained and coordinated in a globalised economy – capital mobility, exchange rate regimes, policy spillovers, international institutions.',

  intro: {
    heroKey: 'heroGlobe',
    summary: 'Globalisation has transformed macro policy. Capital flows across borders within seconds; trade integration transmits shocks globally; exchange rates respond to policy choices instantly. National policy autonomy is constrained by the trilemma (fixed FX + open capital + independent monetary policy – pick two). International institutions (IMF, G20) attempt coordination with mixed success.',
    doInThis: 'Content coming soon – this topic will cover the Mundell-Fleming trilemma, international policy spillovers, the role of the IMF, G7/G20 coordination, currency wars, and the synthesis of theme content across global policy challenges (climate, debt, inequality).',
    outcomes: [
      'Explain the Mundell-Fleming trilemma and apply it to UK policy choices',
      'Analyse cross-border policy spillovers (e.g., US Fed policy on emerging markets)',
      'Evaluate the role of international institutions in policy coordination',
      'Synthesise macro policy in the context of global challenges'
    ],
    tip: 'Mundell-Fleming trilemma: a country can have at most TWO of (1) fixed exchange rate, (2) free capital movement, (3) independent monetary policy. UK chose: floating FX + open capital + independent MP. China: fixed/managed FX + capital controls + independent MP.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Content coming soon', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'macro_policies_global_intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Macro policy in global context: coming soon',
      lede: 'This topic is under construction. Full content covering global policy constraints, coordination, and synthesis will be added shortly.',
      branches: [
        { tone: 'blue',   label: 'Mundell-Fleming trilemma', sub: 'Pick two: fixed FX, free capital movement, independent monetary policy. UK chose float + open + independent. China: managed + controlled + independent.' },
        { tone: 'amber',  label: 'Policy spillovers',        sub: 'US Fed tightening → capital outflows from emerging markets, EM currency depreciation, EM debt distress. ECB QE → euro weakness. No major economy acts in isolation.' },
        { tone: 'green',  label: 'IMF and G20',              sub: 'IMF: lender of last resort to countries facing BoP crises; surveillance. G20: leaders\' coordination forum since 2008 GFC. Variable effectiveness.' },
        { tone: 'purple', label: 'Global challenges',        sub: 'Climate transition, sovereign debt distress (HIPC+), digital tax (OECD Pillar Two), pandemic preparedness. Require coordination but face collective action problems.' }
      ],
      body: 'Full content for this topic is being developed. Key concepts: Mundell-Fleming model and the trilemma; global financial cycle (Rey 2013); spillovers of monetary policy; IMF lending facilities and conditionality; G20 process; coordination challenges (free-riding, distributional disputes); climate finance and the COP process; OECD Pillar Two minimum corporate tax (2024); CBDC and the global monetary system. This is the synthesis topic for the whole Theme 4 syllabus.',
      examEdge: 'A* synthesis-style essays draw on the whole syllabus. Example: "Should the UK pursue fiscal consolidation in 2025?" – answer requires fiscal rules (5.3), monetary-fiscal interaction (4.3), global bond market sentiment (4.2), exchange rate effects (1.8), and the political economy of consolidation. This topic is where Theme 4 essays come together – practise integrating across sub-topics.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};
