window.ECONOS_TOPIC = {
  id: 'financial_market_failure',
  topicNum: '4.2',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Market Failure in the Financial Sector',
  estTime: '9-11 minutes',
  goal: 'Identify and evaluate the main types of market failure in finance – asymmetric information, moral hazard, externalities, market rigging, and speculation.',

  intro: {
    heroKey: 'heroFinancialMarkets',
    summary: 'Financial markets fail more spectacularly than most other markets – and the 2007-08 Global Financial Crisis showed why. Asymmetric information, moral hazard from too-big-to-fail, negative externalities from bank collapses, speculation, and market manipulation all undermine financial efficiency. These failures justify the heavy regulation seen post-2008.',
    doInThis: 'Content coming soon – this topic will cover asymmetric information (adverse selection, moral hazard), externalities of bank failure, speculation and asset bubbles, market rigging (LIBOR, FX), and the regulatory response (Basel III, ring-fencing, FPC).',
    outcomes: [
      'Explain asymmetric information and the adverse selection problem in finance',
      'Analyse moral hazard arising from deposit insurance and too-big-to-fail',
      'Evaluate the role of speculation in asset price bubbles',
      'Assess post-2008 regulatory reforms (Basel III, ring-fencing)'
    ],
    tip: 'Financial market failures: (1) Asymmetric information → adverse selection (Akerlof lemons) and moral hazard. (2) Externalities → bank failure damages the wider economy (systemic risk). (3) Speculation → bubbles and crashes. (4) Market manipulation → LIBOR, FX rigging scandals. (5) Concentration of market power.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Content coming soon', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'financial_market_failure_intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Market failure in financial sector: coming soon',
      lede: 'This topic is under construction. Full content covering financial market failures and the regulatory response will be added shortly.',
      branches: [
        { tone: 'amber',  label: 'Asymmetric information', sub: 'Borrowers know more than lenders → adverse selection (bad borrowers crowd out good ones). Once lent, moral hazard (risky behaviour with someone else\'s money).' },
        { tone: 'rose',   label: 'Externalities',         sub: 'Bank failures damage the wider economy (systemic risk). 2007-08 GFC: Lehman collapse triggered global recession. Justifies bailouts and regulation.' },
        { tone: 'blue',   label: 'Speculation & bubbles', sub: 'Herd behaviour, momentum trading, overconfidence → asset price bubbles. Dotcom (1999), housing (2007), crypto (2021). Crashes follow.' },
        { tone: 'purple', label: 'Market rigging',        sub: 'LIBOR scandal (2012), FX manipulation (2014). Banks colluded to fix benchmark rates. Fines: $9bn+ globally.' }
      ],
      body: 'Full content for this topic is being developed. Key concepts: Akerlof\'s lemons problem applied to credit; moral hazard from deposit insurance and TBTF; the GFC narrative; Basel III capital requirements; UK Vickers Commission ring-fencing reforms; Financial Policy Committee (FPC) macroprudential tools; FCA and PRA roles.',
      examEdge: 'The classic A* financial market failure essay structure: (1) identify multiple failures (don\'t just discuss one); (2) explain the mechanism of each; (3) discuss the regulatory response (Basel III, ring-fencing, FPC); (4) evaluate whether regulation has solved the problem (consensus: GFC risk reduced but not eliminated; new risks from shadow banking, crypto, fintech).',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};
