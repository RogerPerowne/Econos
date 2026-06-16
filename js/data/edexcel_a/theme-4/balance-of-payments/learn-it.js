/* ============================================================
   ECONOS – Balance of Payments (Edexcel A 4.1.7)
   7 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   The country's international scorecard: the three accounts, why
   current accounts move, how deficits are financed, how to correct
   an imbalance, and why global imbalances matter.

   Six bespoke visuals (js/icons.js):
     - bopGlobeHub        (Card 1 — globe + three accounts)
     - bopBankStatement   (Card 2 — current + capital + financial = )
     - bopDriverDials     (Card 3 — four rotary driver knobs + balance)
     - bopMatchingIdentity(Card 4 — CA deficit financed by FA surplus)
     - bopPolicySliders   (Card 5 — four policy levers → CA improves)
     - bopWorldImbalances (Card 6 — surplus vs deficit countries + globe)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'balance-of-payments',
  topicNum: '4.1.7',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Balance of Payments',
  estTime: '20 min',
  goal: 'Define the balance of payments and its accounts, explain why current accounts move into deficit or surplus, analyse how deficits are financed, evaluate correction policies, and judge why global imbalances matter',

  intro: {
    heroKey: 'heroBalanceOfPayments',
    summary: 'The balance of payments is a country’s international scorecard — every transaction with the rest of the world, split into current, capital and financial accounts. Why deficits and surpluses arise, how they are financed, and which policies can correct them are what turn that statement into economics.',
    doInThis: 'Distinguish the three accounts, explain why current accounts swing into deficit or surplus and how deficits are financed, then evaluate the policies that correct an imbalance and why global imbalances matter.',
    outcomes: [
      'Define the balance of payments and its accounts',
      'Distinguish the current, capital and financial accounts',
      'Explain why current accounts move into deficit or surplus',
      'Analyse how deficits are financed',
      'Evaluate correction policies and their trade-offs',
      'Judge why global imbalances matter'
    ],
    tip: 'The phrase that lifts answers is how the deficit is financed — a deficit funded by FDI is far more reassuring than one funded by hot money.',
    stages: [
      { num: 1, name: 'Learn',  sub: '7 cards \xb7 20 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'bop-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 7',
      title: 'Balance of payments — the big picture',
      lede: 'The balance of payments records all transactions between a country and the rest of the world.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The current, capital and financial accounts are different parts of <strong>one overall international record</strong>.' },

      visualKey: 'bopGlobeHub',
      visualLabel: 'WHAT THE BALANCE OF PAYMENTS TRACKS',
      visualEmoji: '\u{1F310}',
      visualCaption: 'The accounts record different kinds of cross-border flows.',

      flowTitle: 'THE SIMPLE LOGIC',
      flowEmoji: '\u{1F3AF}',
      flow: [
        { tone: 'blue',   icon: '\u{1F465}', title: 'Cross-border activity', sub: 'Residents buy, sell and earn abroad.' },
        { tone: 'purple', icon: '\u{1F4DD}', title: 'Recorded in accounts', sub: 'Flows split across accounts.' },
        { tone: 'amber',  icon: '↕️', title: 'Deficits & surpluses', sub: 'Appear in the current account.' },
        { tone: 'green',  icon: '⚖️', title: 'Financial flows balance it', sub: 'They complete the picture.' }
      ],

      causesLabel: 'WHY IT MATTERS',
      causesEmoji: '\u{1F4CA}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F6A2}', head: 'Trade position', body: 'Reveals whether export earnings exceed import spending.' },
        { tone: 'blue',   icon: '\u{1F3DB}️', head: 'Policy signal', body: 'Helps governments judge competitiveness and demand.' },
        { tone: 'amber',  icon: '\u{1F4C9}', head: 'Currency pressure', body: 'Persistent deficits can weaken the currency.' },
        { tone: 'purple', icon: '\u{1F310}', head: 'Global links', body: 'Connects trade, finance and growth.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The balance of payments is not just about trade — it also includes <strong>investment and financial flows</strong>.' },

      conclusion: { title: 'Big idea', text: 'The balance of payments is a country’s international scorecard for trade, income and finance.' },
      examEdge: 'Start by defining the balance of payments, then distinguish clearly between the <strong>current, capital and financial</strong> accounts.'
    },

    /* ============ CARD 2 – The three accounts ============ */
    {
      id: 'bop-three-accounts',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 7',
      title: 'The three accounts',
      lede: 'The balance of payments is easiest to understand when you treat it like an international bank statement.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Current account tracks trade and income. Capital account is small. Financial account records <strong>how assets and money move</strong>.' },

      visualKey: 'bopBankStatement',
      visualLabel: 'THE INTERNATIONAL BANK STATEMENT',
      visualEmoji: '\u{1F310}',
      visualCaption: 'Together, the accounts record what crosses borders and how it is financed.',

      flowTitle: 'HOW THEY FIT TOGETHER',
      flowEmoji: '\u{1F3AF}',
      flow: [
        { tone: 'blue',   icon: '\u{1F310}', title: 'Trade & income flows', sub: 'Goods, services and income cross borders.' },
        { tone: 'green',  icon: '\u{1F3DB}️', title: 'Current account result', sub: 'Net earner or net spender?' },
        { tone: 'purple', icon: '↕️', title: 'Capital / financial', sub: 'Assets and transfers finance positions.' },
        { tone: 'amber',  icon: '⚖️', title: 'Overall balance', sub: 'All accounts must balance to zero.' }
      ],

      causesLabel: 'COMMON CONFUSIONS',
      causesEmoji: '\u{1F465}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F6D2}', head: 'Not only goods', body: 'The current account includes services and both primary and secondary income.' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: 'Capital is tiny', body: 'It covers transfers and a few assets — not the whole of finance.' },
        { tone: 'purple', icon: '\u{1F4CA}', head: 'Financial = FDI & loans', body: 'It captures investment, loans, deposits and reserve changes.' },
        { tone: 'blue',   icon: '⚖️', head: 'It all balances', body: 'Surpluses in some accounts are offset by deficits in others.' }
      ],

      conclusion: { title: 'Big idea', text: 'Think of the balance of payments as a country’s international bank statement with three main sections.' },
      examEdge: 'Define each account carefully — especially the difference between the <strong>capital and financial</strong> accounts.'
    },

    /* ============ CARD 3 – Why current accounts move ============ */
    {
      id: 'bop-deficit-surplus',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 7',
      title: 'Why current accounts go into deficit or surplus',
      lede: 'A current account reflects competitiveness, demand and the prices a country faces in world markets.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Deficits appear when import spending and net outflows exceed export earnings and inflows. <strong>Surpluses are the reverse.</strong>' },

      visualKey: 'bopDriverDials',
      visualLabel: 'THE FOUR MAIN DRIVERS',
      visualEmoji: '\u{1F39B}️',

      flowTitle: 'THE CAUSAL CHAIN — towards deficit',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'rose', icon: '\u{1F465}', title: 'Weaker competitiveness', sub: 'Or stronger domestic demand.' },
        { tone: 'rose', icon: '\u{1F6D2}', title: 'Imports rise vs exports', sub: 'Spending leaks abroad.' },
        { tone: 'rose', icon: '\u{1F4C9}', title: 'Current account worsens', sub: 'Net outflows grow.' },
        { tone: 'rose', icon: '⬇️', title: 'Deficit pressure rises', sub: '' }
      ],

      flow2Title: 'THE CAUSAL CHAIN — towards surplus',
      flow2Emoji: '\u{1F517}',
      flow2Sep: '→',
      flow2: [
        { tone: 'green', icon: '\u{1F465}', title: 'Stronger competitiveness', sub: 'Or weaker domestic demand.' },
        { tone: 'green', icon: '\u{1F6D2}', title: 'Exports rise vs imports', sub: 'Earnings flow in.' },
        { tone: 'green', icon: '\u{1F4C8}', title: 'Current account improves', sub: 'Net inflows grow.' },
        { tone: 'green', icon: '⬆️', title: 'Surplus pressure rises', sub: '' }
      ],

      pairLabel: 'Typical features of a deficit vs a surplus',
      pairEmoji: '⚖️',
      left: {
        tone: 'rose',
        icon: '\u{1F4C9}',
        iconStyle: 'circle',
        label: 'Features of a deficit',
        points: ['High import spending vs exports', 'Weak export earnings', 'Currency / depreciation pressure', 'Need for external financing']
      },
      right: {
        tone: 'green',
        icon: '\u{1F4C8}',
        iconStyle: 'circle',
        label: 'Features of a surplus',
        points: ['Strong export earnings', 'Net inflows from trade and income', 'Reserve build-up or outward investment', 'Currency / appreciation pressure']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A deficit is not always bad — what matters is whether it is <strong>sustainable and what is causing it</strong>.' },

      conclusion: { title: 'Big idea', text: 'Current accounts move because a country’s costs, demand and exchange-rate position change relative to the rest of the world.' },
      examEdge: 'Explain the <strong>cause first</strong> — weak competitiveness, strong demand, or an exchange-rate change — before stating the current-account effect.'
    },

    /* ============ CARD 4 – Who funds a deficit ============ */
    {
      id: 'bop-financing',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 7',
      title: 'Who funds a deficit?',
      lede: 'If the current account is in deficit, the country must attract financial inflows or run down reserves to balance the accounts.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Current account deficit → financial account surplus. The gap is <strong>financed, not ignored</strong>.' },

      visualKey: 'bopFinanceMatch',
      visualLabel: 'THE MATCHING IDENTITY',
      visualEmoji: '\u{1F517}',

      causesFirst: true,
      causesLabel: 'QUALITY OF FINANCE',
      causesEmoji: '⚖️',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '\u{1F6E1}️', head: 'More stable', body: 'FDI and long-term investment.' },
        { tone: 'blue',   icon: '\u{1F396}️', head: 'Quality matters', body: 'Sustainability depends on the quality of finance.' },
        { tone: 'amber',  icon: '\u{1F4C9}', head: 'More volatile', body: 'Short-term portfolio flows and hot money.' }
      ],

      causes2Label: 'WHY IT MATTERS',
      causes2Emoji: '\u{1F4CA}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'blue',   icon: '\u{1F6E1}️', head: 'Confidence', body: 'Investors and lenders need reassurance.' },
        { tone: 'amber',  icon: '\u{1F504}', head: 'Currency risk', body: 'Volatile inflows can cause sharp currency moves.' },
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Future income', body: 'The right finance can boost long-term growth.' },
        { tone: 'purple', icon: '\u{1F3DB}️', head: 'Policy limits', body: 'Persistent deficits limit policy flexibility.' }
      ],

      flowTitle: 'NOT ALL DEFICITS ARE BAD — the good path',
      flowEmoji: '✅',
      flowSep: '→',
      flow: [
        { tone: 'green', icon: '\u{1F331}', title: 'Foreign investment in', sub: 'Long-term inflows.' },
        { tone: 'green', icon: '\u{1F3ED}', title: 'Funds productive capacity', sub: 'Builds the supply side.' },
        { tone: 'green', icon: '\u{1F4C8}', title: 'Raises future income', sub: 'Output grows.' },
        { tone: 'green', icon: '⭐', title: 'Healthy, sustainable growth', sub: '' }
      ],

      flow2Title: 'The risky path',
      flow2Emoji: '⚠️',
      flow2Sep: '→',
      flow2: [
        { tone: 'rose', icon: '⚡', title: 'Short-term borrowing in', sub: 'Hot money.' },
        { tone: 'rose', icon: '\u{1F4B8}', title: 'Funds consumption or gaps', sub: 'No new capacity.' },
        { tone: 'rose', icon: '\u{1F4C9}', title: 'Subject to sudden reversals', sub: 'Flows can stop.' },
        { tone: 'rose', icon: '⚠️', title: 'Vulnerability & crisis risk', sub: '' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A deficit is more worrying when it is <strong>persistent, large and financed by short-term or reversible flows</strong>.' },

      conclusion: { title: 'Big idea', text: 'The key question is not just whether there is a deficit — it is how that deficit is being financed.' },
      examEdge: 'When evaluating a current-account deficit, always comment on the financial account — <strong>FDI is usually more reassuring than hot money</strong>.'
    },

    /* ============ CARD 5 – Reducing an imbalance ============ */
    {
      id: 'bop-correction',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 7',
      title: 'How can a country reduce an imbalance?',
      lede: 'Policies can try to switch spending, reduce spending, or improve competitiveness — but each route has trade-offs.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Short-run demand measures can narrow a deficit quickly. <strong>Long-run supply-side measures are usually more durable.</strong>' },

      visualKey: 'bopPolicySliders',
      visualLabel: 'THE POLICY TOOLKIT',
      visualEmoji: '\u{1F9F0}',

      causesLabel: 'WHAT EACH ROUTE DOES',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F6A2}', head: 'Exports up', body: 'Foreign demand for our goods and services rises.' },
        { tone: 'amber',  icon: '\u{1F6D2}', head: 'Imports down', body: 'Fewer goods and services bought abroad.' },
        { tone: 'green',  icon: '❄️', head: 'Demand cooled', body: 'Lower spending reduces pressure on imports.' },
        { tone: 'purple', icon: '\u{1F396}️', head: 'Edge improves', body: 'Lower unit costs, better quality, stronger export base.' }
      ],

      causes2Label: 'THE TRADE-OFFS',
      causes2Emoji: '⚖️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'rose',   icon: '\u{1F4C9}', head: 'Slower growth', body: 'Less demand or trade restrictions can reduce growth.' },
        { tone: 'rose',   icon: '\u{1F3F7}️', head: 'Inflation risk', body: 'Depreciation or supply constraints can raise prices.' },
        { tone: 'purple', icon: '⏱️', head: 'Time lag', body: 'Supply-side reforms take time to show results.' },
        { tone: 'blue',   icon: '\u{1F30D}', head: 'WTO risk', body: 'Trade barriers can trigger retaliation or breach rules.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Measures that work in the short run are <strong>not always the best long-run solution</strong>.' },

      conclusion: { title: 'Big idea', text: 'Reducing an imbalance is about changing spending patterns and improving international competitiveness.' },
      examEdge: 'Separate <strong>expenditure switching, expenditure reducing and supply-side</strong> measures in your answer, then evaluate likely side effects.'
    },

    /* ============ CARD 6 – Why global imbalances matter ============ */
    {
      id: 'bop-global-imbalances',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 7',
      title: 'Why global imbalances matter',
      lede: 'When some countries run persistent surpluses and others run persistent deficits, the effects can spread across exchange rates, debt and world demand.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Global imbalances link surplus countries, deficit countries and <strong>international capital flows</strong>.' },

      visualKey: 'bopWorldImbalances',
      visualLabel: 'THE WORLD PICTURE',
      visualEmoji: '\u{1F310}',
      visualCaption: 'Surplus countries export goods and savings; deficit countries import goods and capital.',

      causesFirst: true,
      causesLabel: 'WHY SURPLUSES CAN HELP — AND HURT',
      causesEmoji: '\u{1F44D}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green', icon: '\u{1F6E1}️', head: 'Build reserves', body: 'Stronger external position and financial buffers.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Resilience', body: 'Ability to absorb shocks and invest for the future.' },
        { tone: 'amber', icon: '\u{1F4C9}', head: 'Weak demand', body: 'Households may save too much; growth can be imbalanced.' },
        { tone: 'amber', icon: '\u{1F3ED}', head: 'Export-reliant', body: 'Vulnerable to global slowdowns and trade tensions.' }
      ],

      causes2Label: 'WHY DEFICITS CAN HELP — AND HURT',
      causes2Emoji: '⚖️',
      causes2Style: 'icon-top',
      causes2Cols: 5,
      causes2: [
        { tone: 'green', icon: '\u{1F4B9}', head: 'Funds growth', body: 'Financing supports infrastructure and expansion.' },
        { tone: 'green', icon: '\u{1F465}', head: 'Living now', body: 'Borrowing allows living standards to rise now.' },
        { tone: 'amber', icon: '\u{1F45B}', head: 'Rising debt', body: 'External debt must be serviced in the future.' },
        { tone: 'rose',  icon: '\u{1F4B1}', head: 'Weaker FX', body: 'Deficits can weaken the currency and raise costs.' },
        { tone: 'rose',  icon: '⚠️', head: 'Crisis risk', body: 'Sudden stops in capital flows can trigger crises.' }
      ],

      causes3Label: 'WHY POLICY MAKERS CARE',
      causes3Emoji: '\u{1F3DB}️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'purple', icon: '\u{1F310}', head: 'Demand gaps', body: 'Some countries rely on others to sustain demand and growth.' },
        { tone: 'purple', icon: '\u{1F4C9}', head: 'Market risk', body: 'Large imbalances can increase financial-market volatility.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'Political tension', body: 'Trade, currency and distributional issues can spark conflict.' },
        { tone: 'purple', icon: '\u{1F504}', head: 'Pressure', body: 'Countries face calls to save, spend or change policy.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The issue is <strong>persistence</strong> — temporary imbalances are common, but large long-lasting ones can become destabilising.' },

      conclusion: { title: 'Big idea', text: 'Global trade imbalances are not just national stories — they are linked through capital flows and the world economy.' },
      examEdge: 'When evaluating global imbalances, consider both the benefits of financing and the <strong>risks of persistent surpluses or deficits</strong>.'
    },

    /* ============ CARD 7 – The whole story ============ */
    {
      id: 'bop-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 7 of 7',
      title: 'The whole story',
      lede: 'Strong answers define the accounts, explain deficits and surpluses, analyse how deficits are financed, and then judge the policy and global implications.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A current-account outcome only makes sense when you connect it to <strong>financing, causes and consequences</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F310}', title: 'Cross-border transactions' },
        { tone: 'amber',  icon: '\u{1F4CA}', title: 'Current, capital & financial' },
        { tone: 'purple', icon: '↕️', title: 'Deficit or surplus' },
        { tone: 'blue',   icon: '\u{1F3E6}', title: 'Financing flows' },
        { tone: 'green',  icon: '\u{1F6E1}️', title: 'Policy responses' },
        { tone: 'purple', icon: '⚖️', title: 'Final judgement' }
      ],

      causesLabel: 'COMMON EVALUATION POINTS',
      causesEmoji: '\u{1F44D}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F50D}', head: 'Cause matters', body: 'Understand the underlying drivers of the imbalance.' },
        { tone: 'blue',   icon: '\u{1F396}️', head: 'Financing quality', body: 'Different types of financing have different risks.' },
        { tone: 'green',  icon: '\u{1F551}', head: 'Short vs long run', body: 'Impacts can differ over time as adjustment occurs.' },
        { tone: 'purple', icon: '\u{1F310}', head: 'Global context', body: 'Exchange rates, conditions and linkages shape outcomes.' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '\u{1F3DB}️', head: 'Capital vs financial', body: 'Capital transfers are not the same as financial flows and financing.' },
        { tone: 'rose', icon: '❌', head: 'Every deficit is bad', body: 'Deficits can be fine if they support growth and are well financed.' },
        { tone: 'rose', icon: '⚖️', head: 'Forgetting it balances', body: 'The balance of payments always sums to zero overall.' }
      ],

      causes3Label: 'HOW TO WRITE IT',
      causes3Emoji: '✍️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'blue', icon: '\u{1F4DD}', head: '1 · Define the accounts', body: 'Briefly explain current, capital and financial.' },
        { tone: 'blue', icon: '\u{1F4CA}', head: '2 · Identify the imbalance', body: 'State whether it is a deficit or surplus, and its size.' },
        { tone: 'blue', icon: '\u{1F517}', head: '3 · Explain cause & finance', body: 'Use evidence to show why it occurred and how it is financed.' },
        { tone: 'blue', icon: '⚖️', head: '4 · Judge significance', body: 'Weigh effects, suggest responses, conclude with a view.' }
      ],

      conclusion: { title: 'Big idea', text: 'The balance of payments is a connected story about trade, income, finance and adjustment.' },
      examEdge: 'Top answers move beyond simple deficit vs surplus labels and explain the <strong>causes, financing and consequences</strong>.'
    }
  ]
};
