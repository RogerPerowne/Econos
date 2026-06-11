/* ============================================================
   Introduction to Balance of Payments – Edexcel A Theme 2.1.4.

   Six-card Learn-It rebuilt from Roger's slide deck + ChatGPT card
   mockups (2026-06-04). Theme 2 INTRO scope – the J-curve, Marshall-
   Lerner and the savings–investment identity stay on the deeper
   Theme 4 `balance-of-payments` topic.

   Each card is anchored on its OWN bespoke hero visual (see
   js/icons.js – bop* keys) matching the mockup design exactly:
     C1 bopThreeAccounts            – 3-column accounts → balance node
     C2 bopCurrentAccountEquation   – visual equation
       + bopUkPattern               – UK pattern arrows-to-balance
     C3 bopDriverHub                – hub-and-spoke 6 drivers
     C4 bopMatchingIdentity         – two pillar columns + arrow
       + bopGoodVsWarning           – healthy vs warning mini-flows
     C5 bopSustainabilityDashboard  – 4 dial gauges (dial engine)
       + bopConsequencesFlow        – branched consequences flow
     C6 bopHowToWriteIt             – 4-step numbered process flow
   ============================================================ */
window.ECONOS_TOPIC = {
  id: 'introduction-to-balance-of-payments',
  topicNum: '2.1.4',
  theme: 'Theme 2 · The National and Global Economy',
  title: 'Balance of Payments',
  estTime: '~12 min',
  goal: 'Read the balance of payments like an economist – the three accounts, the current account in detail, what moves it, who funds a deficit, and how to judge whether a deficit actually matters.',
  intro: {

    heroKey: 'heroIntroBoP',summary: 'The balance of payments records every transaction between the UK and the rest of the world. It is built from three accounts – current, capital and financial – and the whole thing always sums to zero. The current account is the star: it tells you whether a country is living within its means, and a deficit there must be financed by inflows on the financial account.',
    doInThis: 'Meet the three accounts and why they must balance, break the current account into its four parts, learn what drives it, see who funds a deficit, judge when a deficit is a problem, and finish with the exam toolkit.',
    outcomes: [
      'Define the balance of payments and its three accounts',
      'Break the current account into goods, services, primary and secondary income',
      'Explain why the balance of payments must sum to zero',
      'Explain how a current account deficit is financed',
      'Evaluate whether a current account deficit matters'
    ],
    tip: 'Follow the money. A credit is money in; a debit is money out. Then ask: where is the imbalance, and what is it telling you?',
    stages: [
      { num: 1, name: 'Learn it', sub: '6 cards', state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Coming soon', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Coming soon', state: 'locked' }
    ]
  },

  cards: [

    /* ====================================================================
       CARD 1 – Balance of payments: the big picture
       Hero: 3-column accounts with internal tiles converging on the
       central "Overall balance = 0" pill. Plus a "How to read it"
       row (surplus / deficit / why-current-gets-attention) and a
       "Why economists care" 4-step flow.
       ==================================================================== */
    {
      id: 'bop-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'Balance of payments – the big picture',
      lede: 'The balance of payments records a country\'s transactions with the rest of the world over a period of time.',
      ledeStyle: 'plain',
      tip: { icon: '🔒', tone: 'green', text: 'Every international transaction has two sides – so the balance of payments must <strong>balance overall</strong>.' },

      visualKey: 'bopThreeAccounts',
      visualLabel: 'THE THREE ACCOUNTS',
      visualEmoji: '🌐',

      causesLabel: 'HOW TO READ IT',
      causesEmoji: '👁️',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '⬆️', head: 'Surplus', body: 'Money flowing in exceeds money flowing out.' },
        { tone: 'rose',  icon: '⬇️', head: 'Deficit', body: 'Money flowing out exceeds money flowing in.' },
        { tone: 'blue',  icon: '🔍', head: 'Why the current account gets attention', body: 'It shows whether exports, imports and income flows are strengthening or weakening demand.' }
      ],

      whyItMatters: {
        title: 'WHY ECONOMISTS CARE',
        emoji: '🎯',
        items: [
          { tone: 'blue',   icon: '📈', label: 'Growth and AD',          text: 'Net trade is a component of aggregate demand.' },
          { tone: 'amber',  icon: '£',  label: 'Exchange-rate pressure', text: 'Imbalances move the currency.' },
          { tone: 'purple', icon: '🏛️', label: 'Foreign borrowing',      text: 'Deficits are funded by asset sales or borrowing.' },
          { tone: 'green',  icon: '🎯', label: 'Competitiveness signal', text: 'Reveals underlying strengths or weaknesses.' }
        ]
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Do not confuse the <strong>current account</strong> with the <strong>whole balance of payments</strong> – it is one account within the wider set.' },

      conclusion: { title: 'Big idea', text: 'The key identity is simple – the accounts fit together, even when one part is in deficit.' },
      examEdge: 'Strong answers distinguish clearly between the <strong>current, capital and financial accounts</strong> before judging whether a deficit is sustainable.'
    },

    /* ====================================================================
       CARD 2 – Inside the current account
       Hero: visual equation (balance pill = 4 colored component cards).
       Then: surplus/deficit/balance status row. Then: UK pattern SVG
       (Goods + Services arrows into Final balance lozenge).
       ==================================================================== */
    {
      id: 'inside-the-current-account',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'Inside the current account',
      lede: 'The current account records trade in goods and services, income flows and current transfers with the rest of the world.',
      ledeStyle: 'plain',
      tip: { icon: '🔒', tone: 'green', text: '<strong>Current account balance = trade in goods + trade in services + primary income + secondary income.</strong>' },

      visualKey: 'bopCurrentAccountEquation',
      visualLabel: 'THE FOUR PARTS',
      visualEmoji: '🧩',

      causesLabel: 'HOW TO READ THE SIGN',
      causesEmoji: '👁️',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '⬆️', head: 'Surplus', body: 'Inflows exceed outflows.' },
        { tone: 'rose',  icon: '⬇️', head: 'Deficit', body: 'Outflows exceed inflows.' },
        { tone: 'blue',  icon: '⚖️', head: 'Balance', body: 'Inflows are roughly equal to outflows.' }
      ],

      visualKey2: 'bopUkPattern',
      visualLabel2: 'THE UK PATTERN',
      visualEmoji2: '🇬🇧',

      whyItMatters: {
        title: 'WHY IT MATTERS',
        emoji: '🎯',
        items: [
          { tone: 'blue',   icon: '📈', label: 'AD and growth',     text: 'Net exports affect aggregate demand.' },
          { tone: 'amber',  icon: '🎯', label: 'Competitiveness',   text: 'Export strength matters.' },
          { tone: 'purple', icon: '£',  label: 'Exchange rate',     text: 'Deficits may create currency pressure.' },
          { tone: 'green',  icon: '👥', label: 'Living standards',  text: 'Trade patterns affect real incomes.' }
        ]
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Do not confuse a deficit in <strong>trade in goods</strong> with a deficit in the <strong>whole current account</strong> – services and income matter too.' },

      conclusion: { title: 'Big idea', text: 'The current account is the part of the balance of payments that tells the clearest story about trade, income and demand.' },
      examEdge: 'Name the component that is changing – <strong>goods, services, primary income or transfers</strong> – before you explain the overall effect.'
    },

    /* ====================================================================
       CARD 3 – Why current accounts move
       Hero: hub-and-spoke – central "Current account balance" node with
       6 driver cards arranged 3-left, 3-right with curved arrows pointing
       inward. Simple chain runs below the hub inside the same SVG.
       ==================================================================== */
    {
      id: 'why-current-accounts-move',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 6',
      title: 'Why current accounts move',
      lede: 'Current account balances change when trade performance, incomes, prices and competitiveness change.',
      ledeStyle: 'plain',
      tip: { icon: '🔒', tone: 'green', text: 'A current account usually <strong>worsens</strong> when outflows on trade and income rise faster than inflows.' },

      visualKey: 'bopDriverHub',
      visualLabel: 'THE DRIVERS',
      visualEmoji: '🧭',

      pairLabel: 'DEFICIT OR SURPLUS?',
      pairEmoji: '⚖️',
      left: {
        tone: 'rose', icon: '⬇️', iconStyle: 'circle',
        label: 'Typical deficit forces',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.8;"><li>Strong imports</li><li>Weak competitiveness</li><li>High energy / unit costs</li><li>Low national saving</li></ul>'
      },
      right: {
        tone: 'green', icon: '⬆️', iconStyle: 'circle',
        label: 'Typical surplus forces',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.8;"><li>Strong exports</li><li>Competitive firms</li><li>Low costs, high productivity</li><li>High national saving</li></ul>'
      },

      bottomTip: { icon: '🔄', tone: 'blue', text: '<strong>Common confusion:</strong> a depreciation does <em>not</em> automatically improve the current account straight away. Volumes adjust slowly and the import bill may first rise. <em>(The J-curve – covered in Theme 4.)</em>' },

      conclusion: { title: 'Big idea', text: 'Current account balances move because exports, imports and income flows respond to conditions at home and abroad.' },
      examEdge: 'Top answers trace a <strong>chain</strong> – for example, stronger UK growth raises imports, which worsens the current account unless exports also rise.'
    },

    /* ====================================================================
       CARD 4 – Who funds a deficit?
       Hero: matching-identity two-pillar SVG (current deficit ↔
       financial surplus, with "Must be financed by →" arrow).
       Then: Good-sign vs Warning-sign mini-flow comparison.
       ==================================================================== */
    {
      id: 'who-funds-a-deficit',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 6',
      title: 'Who funds a deficit?',
      lede: 'If the current account is in deficit, the country must attract financial inflows or run down reserves to balance the accounts.',
      ledeStyle: 'plain',
      tip: { icon: '✅', tone: 'green', text: 'Current account deficit → financial account surplus. <strong>The gap is financed, not ignored.</strong>' },

      visualKey: 'bopMatchingIdentity',
      visualLabel: 'THE MATCHING IDENTITY',
      visualEmoji: '🧩',

      pairLabel: 'QUALITY OF FINANCE',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', icon: '🏛️', iconStyle: 'circle',
        label: 'More stable',
        text: '<p style="margin:0 0 6px;font-size:13px;color:#0B1426;line-height:1.6;"><strong>FDI</strong> – long-term, direct investment in real assets.</p><p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;"><strong>Long-term investment</strong> – infrastructure, property, equity.</p>'
      },
      right: {
        tone: 'purple', icon: '⚡', iconStyle: 'circle',
        label: 'More volatile',
        text: '<p style="margin:0 0 6px;font-size:13px;color:#0B1426;line-height:1.6;"><strong>Short-term portfolio flows</strong> – bonds and shares can move fast.</p><p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;"><strong>Hot money</strong> – seeks quick returns and exits suddenly.</p>'
      },

      whyItMatters: {
        title: 'WHY IT MATTERS',
        emoji: '🎯',
        items: [
          { tone: 'blue',   icon: '🛡️', label: 'Confidence',          text: 'Reliable inflows make deficits easier to finance.' },
          { tone: 'amber',  icon: '£',  label: 'Exchange rate risk',  text: 'Outflows can weaken the currency.' },
          { tone: 'purple', icon: '📄', label: 'Future income flows', text: 'Borrowing and asset sales create future claims.' },
          { tone: 'rose',   icon: '🏛️', label: 'Policy pressure',     text: 'Fragile financing can force policy adjustment.' }
        ]
      },

      visualKey2: 'bopGoodVsWarning',
      visualLabel2: 'NOT ALL DEFICITS ARE BAD',
      visualEmoji2: '❓',

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A deficit is more worrying when it is <strong>persistent, large and financed by short-term or reversible flows</strong>.' },

      conclusion: { title: 'Big idea', text: 'The key question is not just whether there is a deficit – it is how that deficit is being financed.' },
      examEdge: 'When evaluating a current account deficit, always comment on the <strong>financial account</strong> – FDI is usually more reassuring than hot money.'
    },

    /* ====================================================================
       CARD 5 – When is a deficit a problem?
       Hero: 4 semicircle dial gauges (size, persistence, competitiveness,
       financing quality) with a sustainable ⇆ less-sustainable axis.
       Then: branched consequences SVG. Then: healthy/worrying pair +
       what-improves-it row.
       ==================================================================== */
    {
      id: 'when-is-a-deficit-a-problem',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'When is a deficit a problem?',
      lede: 'A current account deficit is not automatically harmful – economists judge its size, persistence, causes and financing.',
      ledeStyle: 'plain',
      tip: { icon: '🔒', tone: 'green', text: 'The right judgement is about <strong>sustainability</strong> – not just whether the sign is minus.' },

      visualKey: 'bopSustainabilityDashboard',
      visualLabel: 'THE SUSTAINABILITY DASHBOARD',
      visualEmoji: '🧭',

      visualKey2: 'bopConsequencesFlow',
      visualLabel2: 'POSSIBLE CONSEQUENCES',
      visualEmoji2: '⚠️',

      pairLabel: 'BUT SOMETIMES IT IS FINE',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', icon: '✅', iconStyle: 'circle',
        label: 'Potentially healthy deficit',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Driven by <strong>strong investment, confidence and future growth</strong> – high-quality investment, investor confidence, stronger future output.</p>'
      },
      right: {
        tone: 'rose', icon: '⚠️', iconStyle: 'circle',
        label: 'More worrying deficit',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Driven by <strong>weak competitiveness, consumption-led imports and fragile finance</strong> – weak exports, import-fuelled spending, volatile hot money.</p>'
      },

      causesLabel: 'WHAT IMPROVES IT',
      causesEmoji: '🔧',
      causesStyle: 'icon-top',
      causesCols: 2,
      causes: [
        { tone: 'blue',   icon: '⚙️', head: 'Stronger productivity',       body: 'Raises output and lowers unit costs.' },
        { tone: 'green',  icon: '🌍', head: 'Better export competitiveness', body: 'More demand for UK goods and services.' },
        { tone: 'purple', icon: '🐷', head: 'Higher national saving',       body: 'Reduces reliance on foreign finance.' },
        { tone: 'amber',  icon: '⚖️', head: 'Slower import growth',         body: 'Rebalanced demand: less import pressure, better balance.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Do not say "deficit bad" automatically – ask what <strong>caused</strong> it, how <strong>large</strong> it is and how it is <strong>financed</strong>. UK current-account deficit: <strong>~1.6% of GDP in 2025, down from 6.7% in 2014</strong>.' },

      conclusion: { title: 'Big idea', text: 'Current account problems are really competitiveness and sustainability problems showing up in an external account.' },
      examEdge: 'Evaluation should cover <strong>time horizon, financing quality</strong> and whether the deficit reflects weak supply-side performance.'
    },

    /* ====================================================================
       CARD 6 – The balance of payments exam toolkit
       Hero: 4-step numbered process flow (Identify → Explain → Link →
       Judge) with bold tone-coded cards. Then: what-it-shows tile grid
       (6 tiles), common-mistakes tile grid (3 tiles), good-judgement
       questions tile grid (4 tiles).
       ==================================================================== */
    {
      id: 'bop-exam-toolkit',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 6',
      title: 'The balance of payments exam toolkit',
      lede: 'Strong answers move beyond definition – they diagnose the imbalance, explain the mechanism and judge whether it is sustainable.',
      ledeStyle: 'plain',
      tip: { icon: '✅', tone: 'green', text: 'Good answers <strong>separate the accounts, trace the cause, then evaluate the significance</strong>.' },

      visualKey: 'bopHowToWriteIt',
      visualLabel: 'HOW TO WRITE IT – IDENTIFY → EXPLAIN → LINK → JUDGE',
      visualEmoji: '✍️',

      causesLabel: 'WHAT IT CAN SHOW',
      causesEmoji: '👁️',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '🚢', head: 'Trade performance',       body: 'Whether the country earns more from goods and services than it pays out.' },
        { tone: 'green', icon: '👤', head: 'Income flows',            body: 'Money earned from abroad and paid to the rest of the world.' },
        { tone: 'green', icon: '🎯', head: 'Competitiveness',         body: 'How well the country competes in global markets over time.' },
        { tone: 'green', icon: '£',  head: 'Exchange-rate pressure',  body: 'Whether demand for the currency is rising or falling.' },
        { tone: 'green', icon: '🏛️', head: 'Foreign financing',       body: 'How a deficit or surplus is funded by the rest of the world.' },
        { tone: 'green', icon: '🛡️', head: 'External sustainability', body: 'Whether the external position can be maintained over the long run.' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '❌', head: 'Confusing the accounts',     body: 'Treating the current account as the whole balance of payments.' },
        { tone: 'rose', icon: '❌', head: 'Assuming all deficits are bad', body: 'A deficit can be healthy if it funds productive investment.' },
        { tone: 'rose', icon: '❌', head: 'Ignoring the financial account', body: 'Forgetting the method of finance – FDI vs hot money.' }
      ],

      causes3Label: 'GOOD JUDGEMENT QUESTIONS',
      causes3Emoji: '❓',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'blue', icon: '⏱️', head: 'Is it temporary or persistent?', body: '' },
        { tone: 'blue', icon: '🔍', head: 'What is causing it?',             body: '' },
        { tone: 'blue', icon: '🏛️', head: 'How is it financed?',             body: '' },
        { tone: 'blue', icon: '📈', head: 'What does it imply for growth and stability?', body: '' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: '<strong>Remember:</strong> the whole balance of payments must balance overall – what matters is <em>where</em> the imbalance sits and what it tells you.' },

      conclusion: { title: 'Big idea', text: 'The balance of payments is less about accounting trivia and more about understanding trade, finance and competitiveness.' },
      examEdge: 'Top answers <strong>diagnose, trace and judge</strong> – they do not just define "deficit" and stop.'
    }
  ]
};
