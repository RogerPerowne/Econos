window.ECONOS_TOPIC = {
  id: 'central_banks',
  topicNum: '4.3',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Role of Central Banks',
  estTime: '7-9 minutes',
  goal: 'Understand the core functions of central banks – monetary policy, financial stability, lender of last resort, and bank regulation.',

  intro: {
    heroKey: 'heroMonetary',
    summary: 'Central banks are the institutional backbone of the modern monetary system. The Bank of England has four main roles: setting interest rates to hit the inflation target, acting as lender of last resort in financial crises, regulating banks for financial stability, and managing the payments system. Each function involves trade-offs and political tensions.',
    doInThis: 'Content coming soon – this topic will cover the four roles of central banks, BoE independence and the inflation target, the Monetary Policy Committee, the Financial Policy Committee, and unconventional tools (QE, forward guidance). Cross-references monetary policy content in Theme 2 (6.2.2).',
    outcomes: [
      'Identify the four main functions of central banks',
      'Explain how BoE independence supports credible monetary policy',
      'Analyse the role of central banks as lender of last resort',
      'Evaluate the unconventional monetary tools used since 2008 (QE, forward guidance)'
    ],
    tip: 'BoE four roles: (1) Monetary policy – MPC sets Bank Rate to hit 2% CPI target. (2) Financial stability – FPC monitors systemic risk, sets macroprudential tools. (3) Lender of last resort – provides emergency liquidity to solvent banks. (4) Bank regulation – PRA supervises individual banks for safety.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Content coming soon', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'central_banks_intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Role of central banks: coming soon',
      lede: 'This topic is under construction. Full content covering central bank functions and tools will be added shortly. Monetary policy mechanics are covered in detail in Theme 2 topic 6.2.2.',
      branches: [
        { tone: 'blue',   label: 'Monetary policy',      sub: 'MPC sets Bank Rate (currently 4.75% as of late 2024) to hit 2% CPI inflation target. Independent since 1997 to enhance credibility.' },
        { tone: 'green',  label: 'Lender of last resort', sub: 'Provides emergency liquidity to solvent but illiquid banks during crises. 2007: emergency funding for Northern Rock. 2008: massive liquidity provision globally.' },
        { tone: 'amber',  label: 'Financial stability',   sub: 'Financial Policy Committee (FPC) monitors systemic risk. Macroprudential tools: countercyclical capital buffer, loan-to-income limits on mortgages.' },
        { tone: 'purple', label: 'Bank regulation',       sub: 'Prudential Regulation Authority (PRA) supervises individual banks for safety and soundness. Conduct regulation is the FCA\'s job.' }
      ],
      body: 'Full content for this topic is being developed. Key concepts: BoE independence (1997); MPC structure (9 members, monthly meetings); inflation targeting framework; QE (£895bn UK stock at peak); forward guidance; FPC and macroprudential policy; ring-fencing rules; international coordination through BIS and FSB. For the mechanics of monetary policy (transmission mechanism, conventional vs unconventional tools), see Theme 2 topic 6.2.2.',
      examEdge: 'Central bank independence is the institutional innovation that made low and stable inflation possible after the 1970s-80s. Argument: governments face short-run political incentives to inflate (boost growth before elections) → time-inconsistency problem. Independent central banks with clear inflation targets credibly commit to price stability. Evidence: inflation in advanced economies fell from 8%+ (1970s-80s) to ~2% (1990s-2010s) post-independence.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};
