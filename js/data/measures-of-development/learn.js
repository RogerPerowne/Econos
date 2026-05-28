window.ECONOS_TOPIC = {
  id: 'measures-of-development',
  topicNum: '3.1',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Measures of Development',
  estTime: '7-9 minutes',
  goal: 'Distinguish economic growth from economic development, and evaluate the main indicators (HDI, GDP per capita PPP, multidimensional measures).',

  intro: {
    heroKey: 'heroDevelopment',
    summary: 'Economic development is broader than growth: it captures living standards, health, education, and freedom. GDP per capita misses much of what makes a country developed. The HDI and successor measures attempt to capture these dimensions – but each indicator has limitations.',
    doInThis: 'Content coming soon – this topic will cover GDP per capita (PPP), HDI (life expectancy, education, income), Multidimensional Poverty Index, Gender Inequality Index, and limitations of each.',
    outcomes: [
      'Distinguish economic growth from economic development',
      'Construct and interpret the HDI from its three components',
      'Evaluate the strengths and limitations of single-indicator measures',
      'Analyse multidimensional measures (MPI, GII, Inequality-adjusted HDI)'
    ],
    tip: 'GDP per capita measures income only. HDI = geometric mean of life expectancy index + education index + GNI index. Better but still misses inequality, environment, freedom. The Inequality-adjusted HDI (IHDI) partly corrects for this.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Content coming soon', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'measures_of_development_intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Measures of development: coming soon',
      lede: 'This topic is under construction. Full content covering development indicators and their limitations will be added shortly.',
      branches: [
        { tone: 'blue',   label: 'GDP per capita (PPP)', sub: 'Income measure adjusted for purchasing power parity. Standard starting point but ignores distribution, environment, non-market activity.' },
        { tone: 'green',  label: 'HDI',                  sub: 'UN Human Development Index. Combines life expectancy, education (mean + expected schooling years), and GNI per capita.' },
        { tone: 'amber',  label: 'Multidimensional',     sub: 'MPI (deprivation in health, education, living standards), Gender Inequality Index, Inequality-adjusted HDI.' },
        { tone: 'purple', label: 'Limitations',          sub: 'No single measure captures development fully. All ignore freedom, political rights, environmental sustainability. Composite indices hide trade-offs.' }
      ],
      body: 'Full content for this topic is being developed. Key concepts: GDP per capita PPP vs nominal; HDI methodology and rankings; MPI; comparison of high-HDI vs low-HDI economies; the Easterlin paradox (income vs happiness); sustainability indicators.',
      examEdge: 'The A* development indicator answer: identify the limitation of any single measure (GDP misses health and education; HDI misses inequality and environment), then either use multiple indicators or use a composite (HDI) acknowledging its weaknesses. Strong essays use specific data: Norway HDI 0.96 vs Niger 0.39 (2024).',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};
