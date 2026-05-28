window.ECONOS_TOPIC = {
  id: 'strategies-influencing-growth-and-development',
  topicNum: '3.3',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Strategies Influencing Growth & Development',
  estTime: '9-11 minutes',
  goal: 'Evaluate the main strategies countries can pursue to promote growth and development: market-based, interventionist, aid, debt relief, and trade liberalisation.',

  intro: {
    heroKey: 'heroDevelopment',
    summary: 'Development strategies have shifted over decades: 1950s-70s import substitution → 1980s-90s Washington Consensus (liberalisation, privatisation) → 2000s post-Washington Consensus (institutions, governance) → 2020s climate-resilient and inclusive growth. Each approach has successes and failures.',
    doInThis: 'Content coming soon – this topic will cover market-oriented strategies (trade liberalisation, FDI, microfinance), interventionist strategies (industrial policy, infrastructure investment, education), aid (forms, conditionality, debate), debt relief (HIPC initiative), and the Millennium / Sustainable Development Goals.',
    outcomes: [
      'Compare market-oriented and interventionist development strategies',
      'Evaluate the impact of foreign aid on growth and development',
      'Analyse the role of microfinance in poverty reduction',
      'Assess the case for debt relief and trade liberalisation'
    ],
    tip: 'There is no single right strategy – context determines what works. East Asian state-led industrialisation worked through targeted intervention; Botswana succeeded through institutional quality; some African economies have benefited from mobile money (M-Pesa) and microfinance. Always evaluate strategies in context.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Content coming soon', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'strategies_growth_development_intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Strategies for growth & development: coming soon',
      lede: 'This topic is under construction. Full content covering market-based and interventionist development strategies will be added shortly.',
      branches: [
        { tone: 'green',  label: 'Market-based',       sub: 'Trade liberalisation, FDI promotion, subsidy removal, microfinance, privatisation. Washington Consensus approach.' },
        { tone: 'blue',   label: 'Interventionist',    sub: 'Industrial policy, infrastructure investment, education spending, development banks. East Asian model.' },
        { tone: 'amber',  label: 'Aid and debt relief', sub: 'Bilateral and multilateral aid, conditionality debates, HIPC debt relief initiative, ODA targets (0.7% of GNI).' },
        { tone: 'rose',   label: 'Limits & critiques',  sub: 'Dependency theory, aid effectiveness debate (Sachs vs Easterly), neo-colonial concerns, climate transition pressures.' }
      ],
      body: 'Full content for this topic is being developed. Key concepts: Washington Consensus and structural adjustment programmes; East Asian developmental state model; microfinance (Grameen Bank, M-Pesa); ODA flows and effectiveness; HIPC debt relief; Sustainable Development Goals (2015-2030); climate finance and just transition.',
      examEdge: 'The aid effectiveness debate is exam-rich. Jeffrey Sachs (pro-aid): "big push" to break the poverty trap. William Easterly (sceptical): aid often funds corrupt regimes, distorts markets, undermines local accountability. Empirical evidence is mixed – aid works in well-governed countries (debt relief in Uganda) but fails where institutions are weak.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};
