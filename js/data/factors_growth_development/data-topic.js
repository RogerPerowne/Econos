window.ECONOS_TOPIC = {
  id: 'factors_growth_development',
  topicNum: '3.2',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Factors Influencing Growth & Development',
  estTime: '9-11 minutes',
  goal: 'Identify the economic, political, social and institutional factors that promote or hinder growth and development.',

  intro: {
    heroKey: 'heroDevelopment',
    summary: 'Why do some countries grow rapidly (South Korea, China) while others stagnate (much of Sub-Saharan Africa)? The answer combines economic factors (capital, labour, technology), institutional factors (rule of law, property rights, corruption), and external factors (terms of trade, debt, foreign investment).',
    doInThis: 'Content coming soon – this topic will cover the determinants of growth and development: savings/investment ratios, education and human capital, infrastructure, institutions, governance, trade openness, and the resource curse.',
    outcomes: [
      'Identify the main economic factors influencing growth (savings, investment, productivity)',
      'Explain the role of institutions and governance in development',
      'Evaluate external constraints on development (debt, terms of trade volatility)',
      'Analyse the resource curse and Dutch disease'
    ],
    tip: 'Acemoglu and Robinson (Why Nations Fail): inclusive vs extractive institutions are the primary determinant of long-run development. Geography, culture, and ignorance theories are less powerful. UK industrial revolution = inclusive institutions; resource-rich autocracies = extractive.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Content coming soon', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'factors_growth_development_intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Factors influencing growth & development: coming soon',
      lede: 'This topic is under construction. Full content covering the drivers and constraints on growth and development will be added shortly.',
      branches: [
        { tone: 'green',  label: 'Economic factors',     sub: 'Savings rates, investment in physical and human capital, productivity, technology transfer, trade openness.' },
        { tone: 'blue',   label: 'Institutional factors', sub: 'Rule of law, property rights, contract enforcement, corruption levels, political stability. Acemoglu & Robinson: institutions trump geography.' },
        { tone: 'amber',  label: 'External constraints', sub: 'Debt overhang, primary product dependence, terms of trade volatility, capital flight, brain drain.' },
        { tone: 'rose',   label: 'Resource curse',       sub: 'Resource-rich economies often grow slower than resource-poor ones – Dutch disease, rent-seeking, weak institutions. Botswana is the counter-example.' }
      ],
      body: 'Full content for this topic is being developed. Key concepts: Harrod-Domar model (savings + capital-output ratio); Lewis dual-sector model; human capital and Solow growth model; institutional economics (North, Acemoglu); resource curse and Dutch disease; debt sustainability; the role of FDI; trade openness vs import substitution.',
      examEdge: 'East Asian growth miracle (South Korea, Taiwan, Singapore): combined high savings (~30%+ of GDP), investment in human capital (universal education), export orientation, and developmental state institutions. NOT laissez-faire – strategic state intervention. Contrasts with import substitution failures in Latin America and weak institutions in Sub-Saharan Africa.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};
