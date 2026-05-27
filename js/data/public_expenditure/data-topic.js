window.ECONOS_TOPIC = {
  id: 'public_expenditure',
  topicNum: '5.1',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Public Expenditure',
  estTime: '7-9 minutes',
  goal: 'Understand the composition of public expenditure, how it has evolved over time, and the economic effects of different spending categories.',

  intro: {
    heroKey: 'heroFiscalPolicy',
    summary: 'Public expenditure makes up roughly 45% of UK GDP. Its composition – capital vs current, transfer vs real spending, by department – shapes the economic and social character of the country. Understanding the components and trends is essential for any fiscal policy analysis.',
    doInThis: 'Content coming soon – this topic will cover the categories of public expenditure (capital vs current, transfer vs real), spending by function (NHS, education, defence, debt interest), trends in spending as % of GDP, and the productivity vs welfare debate. Cross-references fiscal policy in Theme 2 (6.2.1).',
    outcomes: [
      'Distinguish capital from current expenditure and transfer from real spending',
      'Identify the major UK spending categories and their relative shares',
      'Analyse trends in public spending as a share of GDP over time',
      'Evaluate the economic effects of different spending categories'
    ],
    tip: 'UK public spending ≈ 45% of GDP (post-COVID, higher than 2010s norm of ~40%). Largest items: health (~£180bn), social protection (~£280bn), education (~£100bn), debt interest (~£100bn 2024). Capital investment has been historically low – a long-standing UK weakness.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Content coming soon', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'public_expenditure_intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Public expenditure: coming soon',
      lede: 'This topic is under construction. Full content covering public spending categories, trends, and economic effects will be added shortly. Fiscal policy mechanics are covered in detail in Theme 2 topic 6.2.1.',
      branches: [
        { tone: 'blue',   label: 'Capital vs current',    sub: 'Capital: infrastructure, buildings, equipment (long-term productive capacity). Current: salaries, supplies, day-to-day operations. UK historically low on capital.' },
        { tone: 'green',  label: 'Transfer vs real',      sub: 'Transfer: pensions, benefits (redistribution, no direct output). Real: NHS staff, teachers, soldiers (direct contribution to GDP).' },
        { tone: 'amber',  label: 'By function',           sub: 'Health (~£180bn), social protection (~£280bn), education (~£100bn), debt interest (~£100bn), defence (~£55bn), public order (~£40bn).' },
        { tone: 'purple', label: 'Trend',                 sub: 'UK government spending ≈ 45% of GDP. Rose during 2008 crisis and COVID; now elevated by ageing population and debt interest.' }
      ],
      body: 'Full content for this topic is being developed. Key concepts: Wagner\'s Law (public spending rises with development); demographic pressures on welfare and health spending; crowding-out debate; capital vs current spending and growth effects; fiscal multipliers (higher for capital and lower-income transfers); international comparisons (US ~36%, France ~58%, Sweden ~50%). For fiscal policy as a macro tool, see Theme 2 topic 6.2.1.',
      examEdge: 'The composition of public spending matters as much as the total. £1 of capital investment in infrastructure has a long-run multiplier of 2-3 (raises productive capacity). £1 of current spending on debt interest has zero multiplier (transfer to bondholders). UK\'s long-standing under-investment in capital (5% lower than OECD average) is widely cited as a productivity drag – see ONS productivity puzzle research.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};
