window.ECONOS_TOPIC = {
  id: 'taxation',
  topicNum: '5.2',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Taxation',
  estTime: '9-11 minutes',
  goal: 'Understand the structure of the UK tax system, the distinction between direct and indirect taxes, progressivity, the Laffer curve, and the economic effects of taxation.',

  intro: {
    heroKey: 'heroFiscalPolicy',
    summary: 'Taxes fund public spending, redistribute income, correct market failures, and influence behaviour. The UK tax system raises ~37% of GDP, dominated by income tax, National Insurance, and VAT. Understanding the structure, progressivity, and incidence of taxes is essential for evaluating fiscal policy.',
    doInThis: 'Content coming soon – this topic will cover direct vs indirect taxes, the main UK taxes (income tax, NI, VAT, corporation tax, council tax), progressivity (progressive, proportional, regressive), the Laffer curve, and economic effects (incentives, efficiency, equity). Cross-references indirect taxes & subsidies in Theme 1 (2.9).',
    outcomes: [
      'Distinguish direct from indirect taxes with examples',
      'Calculate progressivity using average and marginal tax rates',
      'Explain the Laffer curve and the trade-off between rate and revenue',
      'Evaluate the economic effects of taxation (incentives, equity, efficiency)'
    ],
    tip: 'Direct tax = on income/wealth (income tax, NI, corporation tax). Indirect tax = on spending (VAT, excise duties). Progressive = average rate rises with income (UK income tax). Proportional = constant rate. Regressive = falls with income (VAT, council tax broadly).',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Content coming soon', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'taxation_intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Taxation: coming soon',
      lede: 'This topic is under construction. Full content covering the UK tax system, progressivity, and the Laffer curve will be added shortly. Tax and subsidy diagrams are covered in detail in Theme 1 topic 2.9.',
      branches: [
        { tone: 'blue',   label: 'Direct vs indirect', sub: 'Direct: income tax, NI, corporation tax (on income/wealth). Indirect: VAT, excise duties (on spending). Direct is harder to avoid; indirect is regressive but harder to evade.' },
        { tone: 'green',  label: 'Progressivity',      sub: 'Progressive: average rate rises with income (UK income tax 0/20/40/45%). Proportional: constant. Regressive: falls with income (council tax broadly). VAT is regressive in income terms.' },
        { tone: 'amber',  label: 'Laffer curve',       sub: 'Tax revenue rises with rate up to a point, then falls (evasion, disincentive). Revenue-maximising rate debated – estimates vary widely. Often used (and abused) in tax debates.' },
        { tone: 'purple', label: 'Economic effects',   sub: 'Incentive effects (income vs substitution effect on labour supply); allocative effects (Pigouvian taxes correct externalities); equity effects (redistribution).' }
      ],
      body: 'Full content for this topic is being developed. Key concepts: UK tax structure (~37% of GDP, similar to OECD average); income tax thresholds and rates; National Insurance; VAT (20% standard, reduced rates); corporation tax (25% main rate); council tax (regressive); fiscal drag; Laffer curve and revenue maximisation; canons of taxation (Adam Smith: equity, certainty, convenience, efficiency); behavioural taxes (sugar tax, carbon tax). For tax incidence and welfare effects of indirect taxes, see Theme 1 topic 2.9.',
      examEdge: 'The Laffer curve is intuitive but empirically slippery. There IS a revenue-maximising rate, but estimates range widely (40-70% for top marginal rates). The Laffer argument was central to Reagan/Thatcher tax cuts (1980s) and the 2022 Truss mini-budget disaster (when bond markets rejected unfunded tax cuts). Use the Laffer curve carefully – explain the mechanism, then acknowledge empirical uncertainty.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
