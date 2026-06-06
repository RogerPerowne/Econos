/* ============================================================
   ECONOS – National Income (Edexcel A 2.4.1)
   2 cards · circular flow → income vs wealth
   Trimmed on 2026-06-05 to match the spec sub-section: 2.4.1.
   The injections / withdrawals / open-economy equilibrium material
   lives on `injections-and-withdrawals` (2.4.2).
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'national-income',
  topicNum: '2.4.1',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'National Income',
  estTime: '6 min',
  goal: 'Lock in the circular flow of income and the income-vs-wealth distinction.',

  intro: {
    heroKey: 'heroMultiplier',
    summary: 'National income is the total flow of income produced in an economy over a period. The circular flow shows how that income moves between households and firms – the foundation for every macro question that follows. This topic covers the basic flow and the income-vs-wealth distinction; injections and withdrawals (2.4.2) are their own topic.',
    doInThis: 'Draw the two-sector circular flow, then distinguish income (a flow) from wealth (a stock).',
    outcomes: [
      'Draw and label the two-sector circular flow of income',
      'Distinguish income (flow) from wealth (stock) and explain the wealth effect'
    ],
    tip: 'Treat the circular flow as the macro version of the demand/supply diagram. Every Paper 2 question about AD, fiscal policy, or the multiplier traces back to this loop.',
    stages: [
      { num: 1, name: 'Learn it', sub: '2 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [

    /* ============================================================
       CARD 1 – The circular flow of income (foundation)
       ============================================================ */
    {
      id: 'circular-flow',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 2',
      title: 'The circular flow of income',
      lede: 'Households and firms are linked by <strong>real flows</strong> and <strong>money flows</strong>. The same economic activity can be measured as income, output, and expenditure.',
      ledeStyle: 'plain',
      tip: { icon: '✓', tone: 'green', text: 'Income = output = expenditure – three ways of measuring the same flow.' },

      visualKey: 'nationalIncomeFlow',
      visualLabel: 'The two-sector loop',
      visualEmoji: '\u{1F501}',

      causesFirst: true,
      causesLabel: 'The three measures',
      causesEmoji: '⚖️',
      causesStyle: 'numbered',
      causes: [
        {
          tone: 'green', icon: '\u{1F4B0}', head: 'Income',
          body: 'Wages, rent, interest, profit earned from production.'
        },
        {
          tone: 'blue', icon: '\u{1F4E6}', head: 'Output',
          body: 'The value of goods and services produced.'
        },
        {
          tone: 'purple', icon: '\u{1F6D2}', head: 'Expenditure',
          body: 'Spending on final goods and services.'
        }
      ],

      causesNote: { tone: 'slate', text: 'National income can be measured from the income, output, or expenditure side – the totals should match.' },

      flowTitle: 'Why they are equal',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F3ED}', title: 'Production', sub: 'creates income.' },
        { tone: 'green',  icon: '\u{1F465}', title: 'Income',     sub: 'funds spending.' },
        { tone: 'purple', icon: '\u{1F6CD}️', title: 'Spending',   sub: 'buys output.' }
      ],

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'The circular flow is the core model behind national income. Follow the flow and the logic of later macro topics becomes much easier.'
      },
      examEdge: 'When asked how national income is measured, state clearly that the same economic activity can be counted as income, output, or expenditure – and that, by accounting identity, the three totals must be equal.'
    },

    /* ============================================================
       CARD 2 – Income vs wealth (flow vs stock)
       ============================================================ */
    {
      id: 'income-vs-wealth',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 2',
      title: 'Income vs wealth',
      lede: 'Income is earned over time, while wealth is owned at a point in time. The distinction matters for consumption, saving, and macro analysis.',
      ledeStyle: 'plain',
      tip: { icon: '✓', tone: 'green', text: 'Income is a flow. Wealth is a stock.' },

      pairFirst: true,
      pairLabel: 'The difference',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue',
        icon: '\u{1F30A}',
        iconStyle: 'circle',
        label: 'Income – a flow',
        sub: 'measured per unit of time.',
        points: ['wages per month', 'GDP per year', 'interest earned this year']
      },
      right: {
        tone: 'amber',
        icon: '\u{1F9F1}',
        iconStyle: 'circle',
        label: 'Wealth – a stock',
        sub: 'measured at a point in time.',
        points: ['house value', 'pension pot', 'savings balance', 'shares owned']
      },

      flowTitle: 'How they connect',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F464}', title: 'Income earned',          sub: 'e.g. wages, salary, profits' },
        { tone: 'green',  icon: '\u{1F437}', title: 'Saving',                 sub: 'e.g. savings account, house deposit' },
        { tone: 'purple', icon: '\u{1F4C8}', title: 'Wealth accumulated',     sub: 'e.g. assets, investments, property' },
        { tone: 'amber',  icon: '£',    title: 'Wealth generates income', sub: 'e.g. rent, dividends, interest' }
      ],

      nuanceBanner: {
        tone: 'amber',
        emoji: '\u{1F4C8}',
        label: 'The wealth effect',
        icon: '\u{1F3E0}',
        primary: 'Rising house prices or share prices can make households feel richer.',
        secondary: 'This can increase confidence and lead to higher spending – even without a pay rise.',
        exampleLabel: 'Example',
        example: 'House prices rise 10% → household spends more on holidays or a new car.'
      },

      checkList: {
        emoji: '❓',
        label: 'Common confusions',
        items: [
          { head: 'GDP is a flow, not a stock.',          body: 'It measures output within a period, not the level of assets.' },
          { head: 'A house is wealth, not income.',       body: 'It can provide income (rent) but the house itself is an asset.' },
          { head: 'Saving converts income into wealth.',  body: 'Not all income is saved – some is spent on consumption.' }
        ]
      },

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'Income tells us how much is being earned now. Wealth tells us what has been built up over time. Both matter for how households behave.'
      },
      examEdge: 'Use the language precisely – income is measured per period, wealth at a point in time. That distinction picks up easy marks.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};
