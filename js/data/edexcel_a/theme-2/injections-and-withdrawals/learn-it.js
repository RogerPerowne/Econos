/* ============================================================
   ECONOS – Injections & Withdrawals (Edexcel A 2.4.2)
   3 cards · injections → withdrawals → open-economy equilibrium
   Split from `national-income` on 2026-06-05.
   The 2.4.1 circular flow and income/wealth material stays on
   `national-income`; equilibrium output (2.4.3) is its own topic.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'injections-and-withdrawals',
  topicNum: '2.4.2',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Injections & Withdrawals',
  estTime: '8 min',
  goal: 'Identify the three injections and three withdrawals, and trace how they move income through the circular flow.',

  intro: {
    heroKey: 'heroInjections',
    summary: 'Injections push income into the circular flow – investment, government spending and exports. Withdrawals pull income out – savings, taxation and imports. The economy settles where injections balance withdrawals (J = W). This topic builds on the circular flow foundation (2.4.1) and feeds into equilibrium national income (2.4.3).',
    doInThis: 'Work through the three injections, the three withdrawals, and finish on the full open-economy flow where the two balance.',
    outcomes: [
      'Identify the three injections (I, G, X) and three withdrawals (S, T, M)',
      'Explain how injections and withdrawals change the size of the flow',
      'Apply the J = W condition to find equilibrium income'
    ],
    tip: 'When a question mentions a fiscal, monetary or trade shock, trace it through the circular flow as either an injection or a withdrawal first.',
    stages: [
      { num: 1, name: 'Learn it', sub: '3 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    /* ============================================================
       CARD 1 – Injections: money entering the flow
       ============================================================ */
    {
      id: 'injections',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 3',
      title: 'Injections: money entering the flow',
      lede: '<strong>Injections</strong> are spending flows that enter the basic circular flow from outside the economy. They add demand for goods and services, which raises national income.',
      ledeStyle: 'plain',
      tip: { icon: '✓', tone: 'green', text: 'Investment, government spending, and exports add demand to the circular flow.' },

      causesFirst: true,
      causesLabel: 'The three injections',
      causesEmoji: '\u{1F465}',
      causes: [
        {
          tone: 'blue', icon: '\u{1F3ED}', head: 'Investment (I)',
          body: 'Firms spending on capital goods.',
          example: { label: 'Example', text: 'New machinery or a factory extension.' }
        },
        {
          tone: 'amber', icon: '\u{1F3DB}️', head: 'Government spending (G)',
          body: 'Spending on public services and infrastructure.',
          example: { label: 'Example', text: 'Teachers, hospitals, roads.' }
        },
        {
          tone: 'green', icon: '\u{1F6A2}', head: 'Exports (X)',
          body: 'Overseas demand for UK goods and services.',
          example: { label: 'Example', text: 'UK financial services or pharmaceuticals sold abroad.' }
        }
      ],

      flowTitle: 'How they raise national income',
      flowEmoji: '\u{1F4C8}',
      flow: [
        { tone: 'blue',   icon: '\u{1F310}', title: 'Outside spending', sub: 'enters the economy.' },
        { tone: 'amber',  icon: '\u{1F3ED}', title: 'Firms receive',    sub: 'more revenue.' },
        { tone: 'green',  icon: '\u{1F465}', title: 'Firms hire',       sub: 'and pay more income.' },
        { tone: 'purple', icon: '\u{1F6D2}', title: 'Households',       sub: 'spend more.' },
        { tone: 'rose',   icon: '\u{1F4C8}', title: 'National income',  sub: 'rises.' }
      ],

      formulaPills: {
        emoji: '\u{1F9EE}',
        label: 'The formula view',
        terms: [
          { label: 'Investment (I)', tone: 'blue' },
          { label: 'Government spending (G)', tone: 'amber' },
          { label: 'Exports (X)', tone: 'green' }
        ],
        separator: '+',
        note: 'These are extra spending flows added to the basic household-firm loop.'
      },

      bottomTip: { tone: 'amber', icon: '⚠️', text: 'An injection increases the flow only if it is not offset by a withdrawal elsewhere.' },

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'Injections push extra spending into the economy, so they tend to expand output, income, and employment.'
      },
      examEdge: 'Do not just list the injections – explain that each one adds spending from <em>outside</em> the core household-firm circular flow.'
    },

    /* ============================================================
       CARD 2 – Withdrawals: money leaving the flow
       ============================================================ */
    {
      id: 'withdrawals',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 3',
      title: 'Withdrawals: money leaving the flow',
      lede: '<strong>Withdrawals</strong> are income flows that are not passed on as domestic spending. They remove money from the circular flow, so national income falls.',
      ledeStyle: 'plain',
      tip: { icon: '✓', tone: 'green', text: 'Saving, taxation, and imports drain spending from the domestic circular flow.' },

      causesFirst: true,
      causesLabel: 'The three withdrawals',
      causesEmoji: '\u{1F465}',
      causes: [
        {
          tone: 'blue', icon: '\u{1F437}', head: 'Saving (S)',
          body: 'Income not spent now.',
          example: { label: 'Example', text: 'Households place money in a bank account.' }
        },
        {
          tone: 'amber', icon: '\u{1F3DB}️', head: 'Taxation (T)',
          body: 'Income taken by government.',
          example: { label: 'Example', text: 'Income tax or VAT.' }
        },
        {
          tone: 'purple', icon: '\u{1F30D}', head: 'Imports (M)',
          body: 'Spending on foreign-produced goods and services.',
          example: { label: 'Example', text: 'Imported energy or consumer electronics.' }
        }
      ],

      flowTitle: 'Why they lower national income',
      flowEmoji: '\u{1F4C9}',
      flow: [
        { tone: 'blue',   icon: '\u{1F465}', title: 'Households',          sub: 'or firms earn income.' },
        { tone: 'amber',  icon: '\u{1F501}', title: 'Some income',         sub: 'is saved / taxed / spent abroad.' },
        { tone: 'purple', icon: '\u{1F6CD}️', title: 'Less domestic',  sub: 'spending returns to firms.' },
        { tone: 'green',  icon: '\u{1F3E2}', title: 'Firms earn',          sub: 'less revenue.' },
        { tone: 'rose',   icon: '\u{1F4C9}', title: 'National income',     sub: 'falls.' }
      ],

      whyItMatters: {
        emoji: '\u{1F516}',
        title: 'Important nuance',
        items: [
          { tone: 'blue',   icon: '\u{1F4C8}', label: 'Saving can later',     text: 'help fund investment.' },
          { tone: 'amber',  icon: '\u{1F3DB}️', label: 'Tax can later',  text: 'fund government spending.' },
          { tone: 'purple', icon: '\u{1F501}', label: 'Imports may be',       text: 'matched by exports.' }
        ]
      },

      bottomTip: [
        { tone: 'blue', icon: 'ℹ️', text: 'In this card, the focus is the immediate effect on the domestic spending flow.' },
        { tone: 'amber', icon: '⚠️', text: 'A withdrawal is income earned but not recycled straight back into domestic spending.' }
      ],

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'Withdrawals are the <em>leakages</em> in the circular flow – if they rise without matching injections, national income tends to contract.'
      },
      examEdge: 'In imports questions, explain that spending <em>leaves the domestic flow</em> because it creates income abroad rather than for UK firms.'
    },

    /* ============================================================
       CARD 3 – The full open-economy circular flow (interactive)
       Five-stage build-up: closed economy → financial markets →
       government → overseas → equilibrium identity.
       ============================================================ */
    {
      id: 'open-economy',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 3',
      title: 'The full open-economy circular flow',
      lede: 'Once we add injections and withdrawals, we can see how national income expands, contracts, or stays in equilibrium. Click through the stages to build the diagram up one sector at a time.',
      ledeStyle: 'plain',
      tip: { icon: '✓', tone: 'green', text: 'If injections exceed withdrawals, national income rises. If withdrawals exceed injections, it falls.' },

      interactiveDiagram: {
        svgKey: 'nationalIncomeOpenEconomy',
        wide: true,
        maxWidth: '100%',
        label: 'The full model',
        emoji: '\u{1F501}',
        layers: ['idl-1', 'idl-2', 'idl-3', 'idl-4'],
        views: [
          {
            label: 'Two-sector economy',
            tone: 'blue',
            head: 'The closed two-sector economy',
            body: 'Households supply <strong>factors of production</strong> (land, labour, capital, enterprise) and receive <strong>factor payments</strong> (wages, rent, interest, profit). They spend that income as <strong>consumption (C)</strong>. The same money loops endlessly between households and firms.',
            analysis: 'In this simplest model, income = output = expenditure. There are no withdrawals or injections yet – every pound earned is a pound spent, and national income is whatever level keeps the two flows balanced.'
          },
          {
            label: 'Add financial markets',
            tone: 'purple',
            head: 'Saving (S) and Investment (I)',
            body: 'Not all income is spent. <strong>Saving (S)</strong> is income set aside in financial institutions – it leaves the circular flow. Those institutions channel saving into <strong>Investment (I)</strong> by firms in capital goods (machines, factories, software), which returns to the flow as firm spending.',
            analysis: 'S is a withdrawal; I is an injection. They don’t have to be equal individually – what matters is whether <em>total</em> injections equal <em>total</em> withdrawals across the whole system.'
          },
          {
            label: 'Add G',
            tone: 'amber',
            head: 'Taxation (T) and Government spending (G)',
            body: 'The government takes a share of income as <strong>Taxation (T)</strong> – this leaves the flow. It returns as <strong>Government spending (G)</strong> on public services, infrastructure and transfers. The gap between G and T is the budget balance – a deficit if G > T, a surplus if T > G.',
            analysis: 'T is a withdrawal; G is an injection. Fiscal policy works by adjusting one or both. A balanced-budget expansion (raising both G and T by the same amount) still increases income – the balanced-budget multiplier.'
          },
          {
            label: 'Add Trade',
            tone: 'green',
            head: 'Imports (M) and Exports (X)',
            body: 'Domestic households and firms buy <strong>Imports (M)</strong> from abroad – that money leaves the domestic flow as it pays foreign producers. Domestic firms also sell <strong>Exports (X)</strong> to foreign buyers – that money enters the flow from outside. The net trade balance (X − M) is the current account.',
            analysis: 'M is a withdrawal; X is an injection. A trade deficit (M > X) means more money leaves the domestic flow than enters via trade – but that can still be consistent with equilibrium if other injections (I, G) exceed other withdrawals (S, T) by enough.'
          },
          {
            label: 'J = W - Macro balance',
            tone: 'rose',
            head: 'National income equilibrium',
            body: 'National income is in equilibrium when injections equal withdrawals: <strong>I + G + X = S + T + M</strong>. If J > W, demand exceeds supply and income rises; if W > J, income falls. This identity underpins every macro question about AD, the multiplier and fiscal policy.',
            analysis: 'The three natural pairings are useful intuitions: <strong>S funds I</strong> via financial markets, <strong>T helps fund G</strong> via the budget, <strong>X helps pay for M</strong> via trade. But only the <em>totals</em> must match – a trade deficit can co-exist with equilibrium if other injections are large enough.'
          }
        ]
      },

      causesFirst: false,
      causesLabel: 'The equilibrium rule at a glance',
      causesEmoji: '⚖️',
      causes: [
        {
          tone: 'green', icon: '\u{1F4C8}', head: 'J > W',
          body: 'Total injections exceed total withdrawals – national income rises.'
        },
        {
          tone: 'amber', icon: '\u{1F4C9}', head: 'J < W',
          body: 'Total withdrawals exceed total injections – national income falls.'
        },
        {
          tone: 'blue', icon: '≡', head: 'J = W',
          body: 'Total injections equal total withdrawals – equilibrium national income.'
        }
      ],

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'The open-economy circular flow turns macroeconomics into a balancing story – injections versus withdrawals determine the direction of national income.'
      },
      examEdge: 'In equilibrium, total injections equal total withdrawals. Use that identity explicitly in national-income questions: <em>at equilibrium, I + G + X = S + T + M</em>.'
    }

  ]
};
