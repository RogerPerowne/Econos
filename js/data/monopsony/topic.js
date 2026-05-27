window.ECONOS_TOPIC = {
  id: 'monopsony',
  topicNum: '4.6',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Monopsony',
  estTime: '7-9 minutes',
  goal: 'Understand monopsony power in labour markets – how a single buyer of labour can pay wages below the competitive level, and the policy implications.',

  intro: {
    heroKey: 'heroLabour',
    summary: 'A monopsony is a single buyer in a market – typically applied to labour markets where one employer dominates. Unlike competitive labour markets where wages equal MRP, a monopsonist can set wages below workers\' marginal revenue product, creating under-employment and a welfare loss analogous to monopoly in product markets.',
    doInThis: 'Content coming soon – this topic will cover the monopsony diagram, the MCL > W relationship, wage and employment outcomes, comparison to competitive equilibrium, and the minimum wage as a corrective policy.',
    outcomes: [
      'Define monopsony and explain why the marginal cost of labour exceeds the wage rate',
      'Draw the monopsony diagram and identify the wage gap and employment gap',
      'Explain how a minimum wage can increase both wages and employment under monopsony',
      'Evaluate monopsony as a justification for trade unions and minimum wage legislation'
    ],
    tip: 'Monopsony: MCL > supply curve because raising wage to attract one more worker means paying higher wage to all existing workers. Hire where MRP = MCL, then pay wage from supply curve. Result: W < MRP and L < competitive level.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Content coming soon', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'monopsony_intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Monopsony: coming soon',
      lede: 'This topic is under construction. Full content covering monopsony power in labour markets will be added shortly.',
      branches: [
        { tone: 'blue',   label: 'Monopsony definition',    sub: 'A single buyer of labour. Faces an upward-sloping supply curve – to hire more, must raise wages for all workers.' },
        { tone: 'rose',   label: 'MCL > W',                 sub: 'Marginal cost of labour exceeds the wage: hiring one more worker raises wages for all existing workers too.' },
        { tone: 'amber',  label: 'Under-employment',        sub: 'Hire where MRP = MCL; pay from supply curve. Result: wages below MRP, employment below competitive level.' },
        { tone: 'green',  label: 'Minimum wage correction', sub: 'A wage floor up to the competitive wage can increase both wages AND employment – corrects monopsony distortion.' }
      ],
      body: 'Full content for this topic is being developed. Key concepts: the monopsony diagram (supply, MCL, MRP curves), why MCL lies above the supply curve, the monopsony wage gap (W < MRP), employment gap (L < competitive), and the bilateral monopoly case (monopsony employer + trade union).',
      examEdge: 'Monopsony is the key theoretical justification for the National Minimum Wage. Standard theory predicts a wage floor causes unemployment. Under monopsony, a minimum wage up to the competitive wage level can INCREASE both wages AND employment – correcting the monopsony distortion. This explains why empirical studies find small disemployment effects from NMW increases in low-wage sectors.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};
