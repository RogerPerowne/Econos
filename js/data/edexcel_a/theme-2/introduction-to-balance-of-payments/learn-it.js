/* ============================================================
   Introduction to Balance of Payments — Edexcel A Theme 2.1.4.

   Six-card Learn-It built from Roger's slide deck (54-slide 2.1.4
   pack) + ChatGPT card mockups (2026-06-04). Theme 2 INTRO scope —
   the J-curve, Marshall-Lerner and the savings–investment identity
   stay on the deeper Theme 4 `balance-of-payments` topic.

   Pattern plan (no two consecutive repeat; no bare tile-grid dominant):
     C1 Decompose a diagram   — the three accounts → balance = 0
     C2 Sequential flow chain — current account = the four parts
     C3 Spectrum / regime grid— the drivers of the current account
     C4 Side-by-side pair     — the matching identity (who funds a deficit)
     C5 Evidence-then-verdict — when is a deficit a problem?
     C6 Comparison / toolkit  — the exam toolkit
   ============================================================ */
window.ECONOS_TOPIC = {
  id: 'introduction-to-balance-of-payments',
  topicNum: '2.1.4',
  theme: 'Theme 2 · The National and Global Economy',
  title: 'Balance of Payments',
  estTime: '~12 min',
  goal: 'Read the balance of payments like an economist — the three accounts, the current account in detail, what moves it, who funds a deficit, and how to judge whether a deficit actually matters.',
  intro: {
    summary: 'The balance of payments records every transaction between the UK and the rest of the world. It is built from three accounts — current, capital and financial — and the whole thing always sums to zero. The current account is the star: it tells you whether a country is living within its means, and a deficit there must be financed by inflows on the financial account.',
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
       CARD 1 — Balance of payments: the big picture
       Pattern: Decompose a diagram (the three accounts → balance = 0)
       ==================================================================== */
    {
      id: 'bop-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'Balance of payments — the big picture',
      lede: 'The balance of payments records a country\'s transactions with the rest of the world over a period of time.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'Every international transaction has two sides — so the balance of payments must <strong>balance overall</strong>.' },

      causesFirst: true,
      causesLabel: 'THE THREE ACCOUNTS',
      causesEmoji: '🌐',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '🌐', head: 'Current account',
          body: 'Trade in <strong>goods</strong>, trade in <strong>services</strong>, <strong>primary (investment) income</strong> and <strong>secondary income</strong> (transfers). The account that matters most.' },
        { tone: 'purple', icon: '🏛️', head: 'Capital account',
          body: 'Small, one-off transfers of non-produced, non-financial assets — patents, land, debt forgiveness. <em>Usually tiny — under 1% of GDP.</em>' },
        { tone: 'blue',   icon: '📈', head: 'Financial account',
          body: 'Investment flows — <strong>FDI</strong>, <strong>portfolio flows</strong>, other investment and <strong>reserve assets</strong>. This is how a deficit gets financed.' }
      ],

      summaryRow: [
        { tone: 'slate', icon: '⚖️', title: 'Overall balance = 0', text: 'A current account deficit is matched by an equal surplus on the capital and financial accounts combined. <strong>Current + Capital + Financial = 0.</strong>' }
      ],

      causes2Label: 'HOW TO READ IT',
      causes2Emoji: '👁️',
      causes2Cols: 3,
      causes2: [
        { tone: 'green', icon: '⬆️', head: 'Surplus', body: 'Money flowing in exceeds money flowing out.' },
        { tone: 'rose',  icon: '⬇️', head: 'Deficit', body: 'Money flowing out exceeds money flowing in.' },
        { tone: 'blue',  icon: '🔍', head: 'Why the current account gets attention', body: 'It shows whether exports, imports and income flows are strengthening or weakening demand.' }
      ],

      flowTitle: 'WHY ECONOMISTS CARE',
      flowEmoji: '🎯',
      flowSep: '→',
      flow: [
        { tone: 'blue',   icon: '📈', title: 'Growth and AD',          sub: 'net trade is a component of AD' },
        { tone: 'amber',  icon: '£',  title: 'Exchange-rate pressure', sub: 'imbalances move the currency' },
        { tone: 'purple', icon: '🏛️', title: 'Foreign borrowing',      sub: 'deficits are funded by asset sales / borrowing' },
        { tone: 'green',  icon: '🎯', title: 'Competitiveness signal', sub: 'reveals underlying strengths or weaknesses' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Do not confuse the <strong>current account</strong> with the <strong>whole balance of payments</strong> — it is one account within the wider set.' },

      conclusion: { title: 'Big idea', text: 'The key identity is simple — the accounts fit together, even when one part is in deficit.' },
      examEdge: 'Strong answers distinguish clearly between the <strong>current, capital and financial accounts</strong> before judging whether a deficit is sustainable.'
    },

    /* ====================================================================
       CARD 2 — Inside the current account
       Pattern: Sequential flow chain (current account = the four parts)
       ==================================================================== */
    {
      id: 'inside-the-current-account',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'Inside the current account',
      lede: 'The current account records trade in goods and services, income flows and current transfers with the rest of the world.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: '<strong>Current account = trade in goods + trade in services + primary income + secondary income.</strong>' },

      flowTitle: 'THE FOUR PARTS',
      flowEmoji: '🧩',
      flowSep: '+',
      flow: [
        { tone: 'green',  icon: '🚢', title: 'Trade in goods',     sub: 'visible: cars, food, technology' },
        { tone: 'blue',   icon: '🧳', title: 'Trade in services',  sub: 'invisible: finance, tourism, law' },
        { tone: 'purple', icon: '🏛️', title: 'Primary income',     sub: 'profits, interest, dividends on assets abroad' },
        { tone: 'amber',  icon: '👥', title: 'Secondary income',   sub: 'transfers: remittances, foreign aid' }
      ],

      causesLabel: 'HOW TO READ THE SIGN',
      causesEmoji: '👁️',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '⬆️', head: 'Surplus', body: 'Inflows exceed outflows.' },
        { tone: 'rose',  icon: '⬇️', head: 'Deficit', body: 'Outflows exceed inflows.' },
        { tone: 'blue',  icon: '⚖️', head: 'Balance', body: 'Inflows are roughly equal to outflows.' }
      ],

      pairLabel: 'THE UK PATTERN',
      pairEmoji: '🇬🇧',
      left: {
        tone: 'rose', icon: '🚢', iconStyle: 'circle',
        label: 'Goods — a persistent deficit',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Imports of goods often exceed exports. The UK ran a <strong>£206bn goods deficit in 2024</strong>.</p>'
      },
      right: {
        tone: 'green', icon: '🧳', iconStyle: 'circle',
        label: 'Services — a strong surplus',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">A world-class services sector runs a <strong>£184bn surplus</strong> that offsets most of the goods gap — net trade deficit was just ~£22bn.</p>'
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Primary income and transfers can push the final balance either way — don\'t stop at goods and services.' },

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

      conclusion: { title: 'Big idea', text: 'The current account is the part of the balance of payments that tells the clearest story about trade, income and demand.' },
      examEdge: 'Name the component that is changing — <strong>goods, services, primary income or transfers</strong> — before you explain the overall effect.'
    },

    /* ====================================================================
       CARD 3 — Why current accounts move
       Pattern: Spectrum / regime grid (the drivers of the current account)
       ==================================================================== */
    {
      id: 'why-current-accounts-move',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 6',
      title: 'Why current accounts move',
      lede: 'Current account balances change when trade performance, incomes, prices and competitiveness change.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'A current account usually <strong>worsens</strong> when outflows on trade and income rise faster than inflows.' },

      causesFirst: true,
      causesLabel: 'THE DRIVERS',
      causesEmoji: '🧭',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '🏠', head: 'Domestic income / demand',     body: 'Stronger home spending often raises imports.' },
        { tone: 'blue',   icon: '🌍', head: 'Foreign income / demand',      body: 'Stronger trading partners raise export demand.' },
        { tone: 'amber',  icon: '£',  head: 'Exchange rate',                body: 'Depreciation can help price competitiveness.' },
        { tone: 'purple', icon: '📈', head: 'Competitiveness / productivity', body: 'Better quality and lower unit costs help exports.' },
        { tone: 'rose',   icon: '🛢️', head: 'Commodity &amp; energy prices', body: 'Expensive imports can worsen the balance — the UK\'s remaining deficit is largely energy.' },
        { tone: 'green',  icon: '🐷', head: 'Saving vs investment',         body: 'Low national saving relative to investment often links to deficits.' }
      ],

      flowTitle: 'A SIMPLE CHAIN',
      flowEmoji: '🔗',
      flowSep: '→',
      flow: [
        { tone: 'blue',   icon: '🏠', title: 'UK demand rises',      sub: '' },
        { tone: 'purple', icon: '🚚', title: 'Imports rise faster',  sub: '' },
        { tone: 'rose',   icon: '⚖️', title: 'Current account moves towards deficit', sub: '' }
      ],

      comparisonTable: {
        title: 'DEFICIT OR SURPLUS?',
        emoji: '⚖️',
        columns: ['Typical deficit forces', 'Typical surplus forces'],
        columnTones: ['rose', 'green'],
        rows: [
          { label: 'Demand',          values: ['Strong imports',          'Strong exports'] },
          { label: 'Competitiveness', values: ['Weak competitiveness',    'Competitive firms'] },
          { label: 'Costs',           values: ['High energy / unit costs','Low costs, high productivity'] },
          { label: 'Saving',          values: ['Low national saving',     'High national saving'] }
        ]
      },

      bottomTip: { icon: '🔄', tone: 'blue', text: '<strong>Common confusion:</strong> a depreciation does <em>not</em> automatically improve the current account straight away. Volumes adjust slowly and the import bill may first rise. <em>(The J-curve — covered in Theme 4.)</em>' },

      conclusion: { title: 'Big idea', text: 'Current account balances move because exports, imports and income flows respond to conditions at home and abroad.' },
      examEdge: 'Top answers trace a <strong>chain</strong> — for example, stronger UK growth raises imports, which worsens the current account unless exports also rise.'
    },

    /* ====================================================================
       CARD 4 — Who funds a deficit?
       Pattern: Side-by-side pair (the matching identity)
       ==================================================================== */
    {
      id: 'who-funds-a-deficit',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 6',
      title: 'Who funds a deficit?',
      lede: 'If the current account is in deficit, the country must attract financial inflows or run down reserves to balance the accounts.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Current account deficit → financial account surplus. <strong>The gap is financed, not ignored.</strong>' },

      pairFirst: true,
      pairLabel: 'THE MATCHING IDENTITY — must be financed by →',
      pairEmoji: '🧩',
      left: {
        tone: 'rose', icon: '⬇️', iconStyle: 'circle',
        label: 'Current account deficit',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.8;"><li>Goods</li><li>Services</li><li>Income</li><li>Transfers</li></ul>'
      },
      right: {
        tone: 'blue', icon: '⬆️', iconStyle: 'circle',
        label: 'Financial account surplus',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.8;"><li><strong>FDI</strong> — foreign firms build or buy assets</li><li><strong>Portfolio flows</strong> — bonds and shares</li><li><strong>Loans / other investment</strong> — borrowing from abroad</li><li><strong>Reserve changes</strong> — official reserve use</li></ul>'
      },

      causesLabel: 'QUALITY OF FINANCE',
      causesEmoji: '⚖️',
      causesCols: 2,
      causes: [
        { tone: 'green',  icon: '🏛️', head: 'More stable', body: '<strong>FDI</strong> — long-term, direct investment in real assets. <strong>Long-term investment</strong> — infrastructure, property, equity.' },
        { tone: 'purple', icon: '⚡', head: 'More volatile', body: '<strong>Short-term portfolio flows</strong> — bonds and shares can move fast. <strong>Hot money</strong> — seeks quick returns and exits suddenly.' }
      ],

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

      causes2Label: 'NOT ALL DEFICITS ARE BAD',
      causes2Emoji: '❓',
      causes2Cols: 2,
      causes2: [
        { tone: 'green', icon: '👍', head: 'Good sign?', body: 'Foreign investors funding <strong>productive investment</strong>: inflow → investment in capacity → stronger future growth.' },
        { tone: 'rose',  icon: '👎', head: 'Warning sign?', body: 'Deficit funded by <strong>short-term borrowing and weak competitiveness</strong>: short-term inflows → vulnerable to shocks → risk of crisis and forced adjustment.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A deficit is more worrying when it is <strong>persistent, large and financed by short-term or reversible flows</strong>.' },

      conclusion: { title: 'Big idea', text: 'The key question is not just whether there is a deficit — it is how that deficit is being financed.' },
      examEdge: 'When evaluating a current account deficit, always comment on the <strong>financial account</strong> — FDI is usually more reassuring than hot money.'
    },

    /* ====================================================================
       CARD 5 — When is a deficit a problem?
       Pattern: Evidence-then-verdict (sustainability dashboard + verdict)
       ==================================================================== */
    {
      id: 'when-is-a-deficit-a-problem',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'When is a deficit a problem?',
      lede: 'A current account deficit is not automatically harmful — economists judge its size, persistence, causes and financing.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'The right judgement is about <strong>sustainability</strong> — not just whether the sign is minus.' },

      causesFirst: true,
      causesLabel: 'THE SUSTAINABILITY DASHBOARD',
      causesEmoji: '🧭',
      causesStyle: 'numbered',
      causesCols: 2,
      causes: [
        { tone: 'green',  icon: '📏', head: 'Size',              body: 'How big is the deficit relative to GDP? <em>(UK ~1.6% of GDP in 2025, down from 6.7% in 2014.)</em>' },
        { tone: 'purple', icon: '⏳', head: 'Persistence',       body: 'Has it lasted for years, or is it a one-off?' },
        { tone: 'blue',   icon: '🎯', head: 'Competitiveness',   body: 'Does it reflect weak exports and high unit costs?' },
        { tone: 'amber',  icon: '🏛️', head: 'Financing quality', body: 'Is it funded by stable FDI or fragile short-term borrowing?' }
      ],

      flowTitle: 'POSSIBLE CONSEQUENCES',
      flowEmoji: '⚠️',
      flowSep: '→',
      flow: [
        { tone: 'amber',  icon: '£',  title: 'Exchange-rate pressure',       sub: 'more selling than buying of the currency' },
        { tone: 'rose',   icon: '🛒', title: 'Imported inflation',           sub: 'a weaker pound raises import costs' },
        { tone: 'purple', icon: '🏛️', title: 'Tighter policy / weaker demand', sub: 'and greater vulnerability to shocks' }
      ],

      pairLabel: 'BUT SOMETIMES IT IS FINE',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', icon: '✅', iconStyle: 'circle',
        label: 'Potentially healthy deficit',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Driven by <strong>strong investment, confidence and future growth</strong> — high-quality investment, investor confidence, stronger future output.</p>'
      },
      right: {
        tone: 'rose', icon: '⚠️', iconStyle: 'circle',
        label: 'More worrying deficit',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Driven by <strong>weak competitiveness, consumption-led imports and fragile finance</strong> — weak exports, import-fuelled spending, volatile hot money.</p>'
      },

      causes2Label: 'WHAT IMPROVES IT',
      causes2Emoji: '🔧',
      causes2Cols: 2,
      causes2: [
        { tone: 'blue',   icon: '⚙️', head: 'Stronger productivity',       body: 'Raises output and lowers unit costs.' },
        { tone: 'green',  icon: '🌍', head: 'Better export competitiveness', body: 'More demand for UK goods and services.' },
        { tone: 'purple', icon: '🐷', head: 'Higher national saving',       body: 'Reduces reliance on foreign finance.' },
        { tone: 'amber',  icon: '⚖️', head: 'Slower import growth',         body: 'Rebalanced demand: less import pressure, better balance.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Do not say "deficit bad" automatically — ask what <strong>caused</strong> it, how <strong>large</strong> it is and how it is <strong>financed</strong>.' },

      conclusion: { title: 'Big idea', text: 'Current account problems are really competitiveness and sustainability problems showing up in an external account.' },
      examEdge: 'Evaluation should cover <strong>time horizon, financing quality</strong> and whether the deficit reflects weak supply-side performance.'
    },

    /* ====================================================================
       CARD 6 — The balance of payments exam toolkit
       Pattern: Comparison / toolkit (what-it-shows + mistakes + method)
       ==================================================================== */
    {
      id: 'bop-exam-toolkit',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 6',
      title: 'The balance of payments exam toolkit',
      lede: 'Strong answers move beyond definition — they diagnose the imbalance, explain the mechanism and judge whether it is sustainable.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Good answers <strong>separate the accounts, trace the cause, then evaluate the significance</strong>.' },

      causesFirst: true,
      causesLabel: 'WHAT IT CAN SHOW',
      causesEmoji: '👁️',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '🚢', head: 'Trade performance',     body: 'Whether a country earns more from goods and services than it pays out.' },
        { tone: 'green', icon: '👤', head: 'Income flows',          body: 'Money earned from abroad and paid to the rest of the world.' },
        { tone: 'green', icon: '🎯', head: 'Competitiveness',       body: 'How well the country competes in global markets over time.' },
        { tone: 'green', icon: '£',  head: 'Exchange-rate pressure', body: 'Whether demand for the currency is rising or falling.' },
        { tone: 'green', icon: '🏛️', head: 'Foreign financing',     body: 'How a deficit or surplus is funded by the rest of the world.' },
        { tone: 'green', icon: '🛡️', head: 'External sustainability', body: 'Whether the external position can be maintained over the long run.' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '⚠️',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '❌', head: 'Confusing the accounts', body: 'Treating the current account as the whole balance of payments.' },
        { tone: 'rose', icon: '❌', head: 'Assuming all deficits are bad', body: 'A deficit can be healthy if it funds productive investment.' },
        { tone: 'rose', icon: '❌', head: 'Ignoring the financial account', body: 'Forgetting the method of finance — FDI vs hot money.' }
      ],

      flowTitle: 'HOW TO WRITE IT',
      flowEmoji: '✍️',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '🔍', title: 'Identify', sub: 'current, capital or financial account?' },
        { tone: 'blue',   icon: '📋', title: 'Explain',  sub: 'what changed — exports, imports, income or transfers?' },
        { tone: 'purple', icon: '🔗', title: 'Link',     sub: 'to AD, exchange rates, competitiveness or finance' },
        { tone: 'amber',  icon: '⚖️', title: 'Judge',    sub: 'size, persistence, financing quality, time horizon' }
      ],

      causes3Label: 'GOOD JUDGEMENT QUESTIONS',
      causes3Emoji: '❓',
      causes3Cols: 2,
      causes3: [
        { tone: 'blue', icon: '⏱️', head: 'Is it temporary or persistent?', body: '' },
        { tone: 'blue', icon: '🔍', head: 'What is causing it?',            body: '' },
        { tone: 'blue', icon: '🏛️', head: 'How is it financed?',            body: '' },
        { tone: 'blue', icon: '📈', head: 'What does it imply for growth and stability?', body: '' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: '<strong>Remember:</strong> the whole balance of payments must balance overall — what matters is <em>where</em> the imbalance sits and what it tells you.' },

      conclusion: { title: 'Big idea', text: 'The balance of payments is less about accounting trivia and more about understanding trade, finance and competitiveness.' },
      examEdge: 'Top answers <strong>diagnose, trace and judge</strong> — they do not just define "deficit" and stop.'
    }
  ]
};
