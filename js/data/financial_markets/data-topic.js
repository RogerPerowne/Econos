window.ECONOS_TOPIC = {
  id: 'financial_markets',
  topicNum: '4.1',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Role of Financial Markets',
  estTime: '7-9 minutes',
  goal: 'Understand the core functions of financial markets in a modern economy – facilitating saving and borrowing, enabling investment, managing risk, and providing the money supply.',

  intro: {
    heroKey: 'heroFinancialMarkets',
    summary: 'Financial markets connect savers to borrowers, enable firms to fund investment, allow households to manage risk, and underpin the payments system. A well-functioning financial sector is essential for growth – but financial markets fail more often than other markets, with consequences that can devastate the wider economy.',
    doInThis: 'Content coming soon – this topic will cover the six functions of financial markets, the distinction between money and capital markets, the role of commercial banks vs investment banks, and the importance of liquidity and credit creation.',
    outcomes: [
      'Identify the main functions of financial markets',
      'Distinguish between money markets and capital markets',
      'Explain the role of commercial banks in credit creation',
      'Analyse how financial markets channel savings into investment'
    ],
    tip: 'Six functions: (1) facilitate saving, (2) lend to businesses and individuals, (3) facilitate exchange of goods and services (payments), (4) provide a forward market for currencies and commodities, (5) provide a market for equities, (6) enable risk management through insurance and derivatives.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Content coming soon', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'financial_markets_intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Role of financial markets: coming soon',
      lede: 'This topic is under construction. Full content covering the functions of financial markets and the structure of the financial sector will be added shortly.',
      branches: [
        { tone: 'blue',   label: 'Save & borrow',     sub: 'Channel funds from savers (households) to borrowers (firms, government). Without this, investment would be limited to retained earnings.' },
        { tone: 'green',  label: 'Investment',        sub: 'Enable firms to raise capital through equity and bond issuance. Stock markets price firms and discipline management.' },
        { tone: 'amber',  label: 'Payments & exchange', sub: 'Underpin the payments system (banks, card networks). Provide forward markets for currencies and commodities – exporters can hedge FX risk.' },
        { tone: 'purple', label: 'Risk management',   sub: 'Insurance markets pool risk. Derivatives transfer risk to those willing to bear it. Pension funds smooth income across life.' }
      ],
      body: 'Full content for this topic is being developed. Key concepts: money markets (short-term, < 1 year) vs capital markets (long-term); commercial banking and credit creation (fractional reserve); investment banking (IPOs, M&A advisory); securities markets (equities, bonds); derivatives markets; the role of London as a global financial centre.',
      examEdge: 'Credit creation by commercial banks is a key analytical concept. Banks do not just intermediate existing savings – they CREATE deposits when they lend. £1 of new lending creates £1 of new deposits. The "money multiplier" framework taught in textbooks is misleading; the BoE\'s 2014 quarterly bulletin clarified that banks create money through lending, not through multiplying reserves.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};
