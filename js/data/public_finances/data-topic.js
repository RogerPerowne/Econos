window.ECONOS_TOPIC = {
  id: 'public_finances',
  topicNum: '5.3',
  theme: 'Theme 4 \xb7 A Global Perspective',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Public Sector Finances',
  estTime: '9-11 minutes',
  goal: 'Understand the relationship between fiscal deficits, debt, and the economy — including cyclical vs structural deficits, debt sustainability, and the implications of high debt levels.',

  intro: {
    heroKey: 'heroPolicy',
    summary: 'The fiscal deficit is the annual gap between government spending and revenue. The debt stock is the accumulated total of past deficits. UK debt has risen from ~40% of GDP (pre-2008) to ~100% (post-COVID). Understanding debt sustainability and the consequences of high deficits is now a central macro question.',
    doInThis: 'Content coming soon — this topic will cover the fiscal deficit vs debt distinction, automatic stabilisers, cyclical vs structural deficit, debt sustainability (debt dynamics equation), implications of high debt, and fiscal rules. Cross-references fiscal policy in Theme 2 (6.2.1).',
    outcomes: [
      'Distinguish the budget deficit from public debt',
      'Explain the difference between cyclical and structural deficits',
      'Analyse debt sustainability using the debt dynamics equation',
      'Evaluate the consequences of high public debt'
    ],
    tip: 'Deficit = annual gap (spending > revenue). Debt = accumulated stock. Debt/GDP rises when (real interest rate − growth rate) × debt > primary surplus. Cyclical deficit varies with the cycle (auto stabilisers); structural deficit persists at full employment.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Content coming soon', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'public_finances_intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Public sector finances: coming soon',
      lede: 'This topic is under construction. Full content covering deficits, debt sustainability, and fiscal rules will be added shortly. Fiscal policy as a macro tool is covered in detail in Theme 2 topic 6.2.1.',
      branches: [
        { tone: 'blue',   label: 'Deficit vs debt',         sub: 'Deficit: annual gap between spending and revenue (flow). Debt: accumulated total of past deficits (stock). UK 2024: deficit ~5% GDP, debt ~100% GDP.' },
        { tone: 'green',  label: 'Cyclical vs structural',  sub: 'Cyclical: varies with the cycle via auto stabilisers (deficit rises in recession). Structural: persists at full employment — requires deliberate fiscal action to close.' },
        { tone: 'amber',  label: 'Debt dynamics',           sub: 'Debt/GDP rises when (r − g) × debt > primary surplus. If real growth > real interest rate, debt can fall even with primary deficits. Reversed since 2022 → debt sustainability concerns.' },
        { tone: 'rose',   label: 'Consequences',            sub: 'High debt → higher debt interest crowds out other spending. Risk premium on government bonds. Reduced fiscal space for future shocks. Intergenerational transfer.' }
      ],
      body: 'Full content for this topic is being developed. Key concepts: UK public sector net debt trajectory; OBR forecasts; fiscal rules (golden rule, sustainable investment rule, Charter for Budget Responsibility); debt sustainability and the (r − g) dynamic; sovereign debt crises (Greece 2010-12, UK 2022 mini-budget); crowding out vs crowding in; intergenerational equity. For fiscal policy as a macro stabilisation tool, see Theme 2 topic 6.2.1.',
      examEdge: 'The 2022 UK mini-budget was a real-time lesson in fiscal sustainability. Truss/Kwarteng announced £45bn unfunded tax cuts; gilt yields spiked; pension funds faced collateral calls; BoE had to intervene. The political consequence was a new PM within weeks. The economic lesson: fiscal credibility matters enormously when debt is high — markets discipline fiscal policy through bond yields when fiscal rules are abandoned.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
