window.ECONOS_TOPIC = {
  id: 'the-impact-of-economic-growth',
  topicNum: '5.4',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'The Impact of Economic Growth',
  estTime: '7-9 minutes',
  goal: 'Evaluate the benefits and costs of economic growth, including distributional effects, environmental impact, and the distinction between short-run and long-run growth.',

  intro: {
    heroKey: 'heroGrowth',
    summary: 'Economic growth raises living standards – but not automatically and not for everyone. Growth can widen inequality, damage the environment, and be unsustainable. A sophisticated evaluation of growth considers who benefits, at what cost, and for how long.',
    doInThis: 'Content coming soon – this topic will cover the benefits of growth (rising incomes, employment, fiscal space), the costs and risks (inequality, environmental damage, inflation, unsustainability), and how to structure a balanced evaluation of growth policy.',
    outcomes: [
      'Distinguish between short-run and long-run economic growth',
      'Evaluate the distributional effects of economic growth using the Kuznets curve',
      'Analyse the environmental trade-offs of growth and the case for sustainable development'
    ],
    tip: 'Growth is neither good nor bad in isolation – evaluate who benefits (median vs mean income), at what cost (environment, inequality), and over what timeframe (short-run cyclical vs long-run structural). The Kuznets curve and Environmental Kuznets Curve are key diagrams.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Content coming soon', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'growth_impact_intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'The impact of economic growth: coming soon',
      lede: 'This topic is under construction. Full content covering the benefits, costs, and evaluation of economic growth will be added shortly.',
      branches: [
        { tone: 'green',  label: 'Benefits of growth',       sub: 'Rising real incomes, higher employment, more tax revenue for public services, reduced absolute poverty.' },
        { tone: 'rose',   label: 'Costs and risks',          sub: 'Inflation pressure (positive output gap), environmental damage, widening inequality, unsustainable debt.' },
        { tone: 'amber',  label: 'Distributional effects',   sub: 'Growth may benefit the top more than the bottom. Kuznets curve: inequality rises then falls as countries develop. Check median, not mean.' },
        { tone: 'blue',   label: 'Sustainability',           sub: 'Growth driven by resource depletion or debt accumulation is not sustainable. Green GDP measures subtract environmental costs.' }
      ],
      body: 'Full content for this topic is being developed. The key concepts to cover are: the benefits of growth (living standards, employment, fiscal space), the costs (environment, inequality, inflation), the distinction between cyclical and structural growth, the Kuznets curve, and the concept of sustainable development and green growth.',
      examEdge: 'The A* growth evaluation structure: (1) Does growth raise living standards? Yes, but only if gains are distributed (check median income, not GDP per capita). (2) At what cost? Environmental damage, inequality, inflation risk. (3) Is it sustainable? Only if supply-side capacity expands alongside demand. Apply this three-part structure to any growth question.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};
