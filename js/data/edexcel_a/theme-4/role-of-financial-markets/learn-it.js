/* ============================================================
   ECONOS – Role of Financial Markets (Edexcel A 4.4.1)
   7 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   What financial markets do: the big picture, saving, lending,
   payments and exchange, forward markets, equities, and the whole story.

   No new visuals — built from flow chains, tile grids and VS pairs.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'role-of-financial-markets',
  topicNum: '4.4.1',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Role of Financial Markets',
  estTime: '20 min',
  goal: 'Explain the core functions of financial markets — saving, lending, payments, risk management and raising equity — and why they matter for the wider economy',

  intro: {
    heroKey: 'heroFinancialMarkets',
    summary: 'Financial markets move money from those who have it to those who can use it, and they let the wider economy trade, invest, manage risk and grow. This deck works through their core roles. Saving channels spare income into investable funds. Lending and intermediation move money from savers to borrowers who put it to work. Payments systems make exchange quick and safe, enabling specialisation and trade. Forward markets let firms lock in a future price or exchange rate to manage risk. And equity markets let firms raise long-term capital by selling shares. The thread throughout is that markets perform functions — allocating funds, enabling exchange, spreading risk and providing finance — that the rest of the economy depends on, which is also why their failure matters so much.',
    doInThis: 'Set out the core functions of financial markets. Explain how saving becomes investable funds. Show how lending and intermediation work. Explain payments and exchange. Show how forward markets manage risk. Explain how equity markets raise capital, then evaluate why markets matter.',
    outcomes: [
      'Name the core functions of financial markets',
      'Explain saving and intermediation',
      'Explain lending and its macro effects',
      'Explain payments and exchange',
      'Explain forward markets and hedging',
      'Explain equity markets and capital raising'
    ],
    tip: 'For each function, explain what the market does and who it connects — then link it to investment, trade and growth.',
    stages: [
      { num: 1, name: 'Learn',  sub: '7 cards \xb7 20 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'rofm-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Role of financial markets — the big picture',
      lede: 'Financial markets move money from savers to borrowers and help the wider economy trade, invest, manage risk and grow.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Financial markets <strong>channel funds, enable exchange, spread risk</strong> and create routes into investment.' },

      flowTitle: 'THE FIVE ROLES',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F437}', title: 'Saving', sub: 'Pool spare funds.' },
        { tone: 'blue', icon: '\u{1F3E6}', title: 'Lending', sub: 'Finance households and firms.' },
        { tone: 'blue', icon: '\u{1F4B3}', title: 'Payments', sub: 'Enable exchange.' },
        { tone: 'blue', icon: '\u{1F4C5}', title: 'Forward markets', sub: 'Manage future risk.' },
        { tone: 'blue', icon: '\u{1F4C8}', title: 'Equities', sub: 'Raise share capital.' }
      ],

      causesLabel: 'WHO USES THEM',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green',  icon: '\u{1F465}', head: 'Households', body: 'Save, borrow, pay and invest.' },
        { tone: 'blue',   icon: '\u{1F3ED}', head: 'Firms', body: 'Raise finance, pay suppliers, grow.' },
        { tone: 'purple', icon: '\u{1F3E6}', head: 'Banks & institutions', body: 'Intermediate funds and provide services.' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: 'Governments', body: 'Borrow, manage debt and raise capital.' }
      ],

      causes2Label: 'WHY THEY MATTER',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F9ED}', head: 'Allocate funds', body: 'Direct savings to their best use.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Support growth', body: 'Finance investment, jobs and innovation.' },
        { tone: 'green', icon: '\u{1F4C9}', head: 'Cut costs', body: 'Make exchange faster, cheaper and safer.' },
        { tone: 'green', icon: '\u{1F6E1}️', head: 'Spread risk', body: 'Let risk be shared and managed.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Financial markets connect saving, borrowing, trading and risk management across the whole economy.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Financial markets perform functions — allocating funds, enabling exchange, spreading risk and raising finance — the rest of the economy relies on.' },
      examEdge: { title: 'EXAM EDGE', text: 'Name the specific function for each role — allocation, exchange, risk or finance — rather than treating finance as one blur.' }
    },

    /* ============ CARD 2 – Saving ============ */
    {
      id: 'rofm-saving',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Saving — from spare cash to investable funds',
      lede: 'Financial markets give households and organisations places to store wealth safely and earn a return.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Saving matters because pooled funds become the <strong>raw material for lending and investment</strong>.' },

      flowTitle: 'HOW SAVING FLOWS',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F4B5}', title: 'Income not spent', sub: 'Set aside for later.' },
        { tone: 'blue', icon: '\u{1F3E6}', title: 'Deposited', sub: 'Into accounts and funds.' },
        { tone: 'blue', icon: '\u{1F501}', title: 'Pooled', sub: 'Institutions gather it.' },
        { tone: 'blue', icon: '\u{1F4C8}', title: 'Funds for investment', sub: 'Available to borrowers.' }
      ],

      causesLabel: 'WHY PEOPLE SAVE',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F6E1}️', head: 'Safety', body: 'Protect money from loss or theft.' },
        { tone: 'green', icon: '\u{1F4B0}', head: 'Interest return', body: 'Earn a return over time.' },
        { tone: 'green', icon: '\u{1F4C5}', head: 'Future spending', body: 'Save for big purchases.' },
        { tone: 'green', icon: '\u{1F474}', head: 'Retirement', body: 'Build funds for later life.' }
      ],

      causes2Label: 'HOW MARKETS FACILITATE IT',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue', icon: '\u{1F3E6}', head: 'Banks & societies', body: 'Accept deposits safely.' },
        { tone: 'blue', icon: '\u{1F4BC}', head: 'Pension & funds', body: 'Pool long-term saving.' },
        { tone: 'blue', icon: '\u{1F4A7}', head: 'Liquidity & access', body: 'Withdraw when needed.' },
        { tone: 'blue', icon: '\u{1F4C8}', head: 'A return', body: 'Interest or investment growth.' }
      ],

      causes3Label: 'WHY IT MATTERS',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'amber', icon: '\u{1F3D7}️', head: 'More capital', body: 'More funds available to invest.' },
        { tone: 'amber', icon: '\u{1F501}', head: 'Better intermediation', body: 'Savings reach productive uses.' },
        { tone: 'amber', icon: '\u{1F4C8}', head: 'Higher long-run growth', body: 'Investment lifts capacity.' },
        { tone: 'amber', icon: '\u{1F6E1}️', head: 'Resilience', body: 'Buffers for households and firms.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Without saving, there is little to lend for loans, mortgages and business investment.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Financial markets transform scattered savings into a pool of funds that can finance investment.' },
      examEdge: { title: 'EXAM EDGE', text: 'Do not stop at “people save” — link saving to the supply of investable funds and long-run growth.' }
    },

    /* ============ CARD 3 – Lending ============ */
    {
      id: 'rofm-lending',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Lending — moving money to where it can be used',
      lede: 'Financial markets and institutions match savers with borrowers so spending and investment can happen earlier than income would otherwise allow.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Lending helps households smooth spending and helps firms finance <strong>capital and expansion</strong>.' },

      flowTitle: 'THE INTERMEDIATION STORY',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F465}', title: 'Savers', sub: 'Have spare funds.' },
        { tone: 'blue', icon: '\u{1F3E6}', title: 'Banks', sub: 'Pool funds, assess risk.' },
        { tone: 'blue', icon: '\u{1F4B8}', title: 'Lend', sub: 'Credit is extended.' },
        { tone: 'blue', icon: '\u{1F3E0}', title: 'Borrowers', sub: 'Households and firms.' },
        { tone: 'blue', icon: '\u{1F4C8}', title: 'Put to use', sub: 'Spend and invest.' }
      ],

      causesLabel: 'WHAT GETS FINANCED',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F3E0}', head: 'Mortgages', body: 'Buy homes over time.' },
        { tone: 'green', icon: '\u{1F4B3}', head: 'Consumer credit', body: 'Cars and big purchases.' },
        { tone: 'green', icon: '\u{1F3ED}', head: 'Business loans', body: 'Working capital and expansion.' },
        { tone: 'green', icon: '\u{1F3D7}️', head: 'Investment projects', body: 'New plant and equipment.' }
      ],

      causes2Label: 'HOW PRICE AND RISK MATTER',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue', icon: '\u{1F4B2}', head: 'Interest rate', body: 'The price of borrowing.' },
        { tone: 'blue', icon: '\u{1F50D}', head: 'Credit risk', body: 'Checks on ability to repay.' },
        { tone: 'blue', icon: '⏳', head: 'Time horizon', body: 'Short-term vs long-term loans.' },
        { tone: 'blue', icon: '\u{1F6E1}️', head: 'Collateral', body: 'Security against the loan.' }
      ],

      causes3Label: 'MACRO EFFECTS',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'amber', icon: '\u{1F3D7}️', head: 'Investment rises', body: 'Firms fund expansion.' },
        { tone: 'amber', icon: '\u{1F501}', head: 'Smoother spending', body: 'Households bring it forward.' },
        { tone: 'amber', icon: '\u{1F4C8}', head: 'Growth & jobs', body: 'Activity expands.' },
        { tone: 'rose',  icon: '⚠️', head: 'Debt risk', body: 'Too much credit can destabilise.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Efficient lending means money flows towards its highest-value use, lifting productivity and growth.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Intermediation moves idle savings to borrowers who can use them — turning saving into spending and investment.' },
      examEdge: { title: 'EXAM EDGE', text: 'Explain the saver → bank → borrower chain, then weigh the growth benefits against the risk of excess debt.' }
    },

    /* ============ CARD 4 – Payments ============ */
    {
      id: 'rofm-payments',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Payments and exchange — making trade possible',
      lede: 'Financial markets and payment systems make it easier for people and businesses to exchange goods and services quickly and safely.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Exchange is smoother when money can move reliably between <strong>buyers and sellers</strong>.' },

      flowTitle: 'THE PAYMENT JOURNEY',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F6D2}', title: 'Buyer', sub: 'Wants a good or service.' },
        { tone: 'blue', icon: '\u{1F4B3}', title: 'Payment method', sub: 'Card, transfer or app.' },
        { tone: 'blue', icon: '\u{1F3E6}', title: 'Network & bank', sub: 'Verifies and processes.' },
        { tone: 'blue', icon: '✅', title: 'Settlement', sub: 'Funds move across.' },
        { tone: 'blue', icon: '\u{1F454}', title: 'Seller', sub: 'Receives payment.' }
      ],

      causesLabel: 'WHAT THIS ENABLES',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F6D2}', head: 'Everyday transactions', body: 'Quick, routine purchases.' },
        { tone: 'green', icon: '\u{1F5A5}️', head: 'Online trade', body: 'E-commerce at scale.' },
        { tone: 'green', icon: '\u{1F310}', head: 'International trade', body: 'Cross-border payment.' },
        { tone: 'green', icon: '\u{1F4C9}', head: 'Lower costs', body: 'Cheaper, faster exchange.' }
      ],

      causes2Label: 'TOOLS OF EXCHANGE',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue', icon: '\u{1F3E6}', head: 'Bank accounts', body: 'Hold and move money.' },
        { tone: 'blue', icon: '\u{1F4B3}', head: 'Cards', body: 'Debit and credit payment.' },
        { tone: 'blue', icon: '\u{1F4F1}', head: 'Digital payments', body: 'Apps and instant transfers.' },
        { tone: 'blue', icon: '\u{1F4B1}', head: 'FX services', body: 'Convert between currencies.' }
      ],

      causes3Label: 'WHY IT MATTERS',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'amber', icon: '⚡', head: 'Faster commerce', body: 'Trade happens at speed.' },
        { tone: 'amber', icon: '\u{1F91D}', head: 'More trust', body: 'Buyers and sellers are protected.' },
        { tone: 'amber', icon: '\u{1F30D}', head: 'Bigger markets', body: 'Specialisation and reach grow.' },
        { tone: 'amber', icon: '\u{1F4C8}', head: 'More activity', body: 'Lower frictions lift output.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'When payment systems work, trade becomes cheaper, faster and more extensive.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Payment systems make exchange quick and safe — the bedrock of specialisation, trade and a modern economy.' },
      examEdge: { title: 'EXAM EDGE', text: 'Link good payment systems to lower transaction costs, more trade and higher efficiency.' }
    },

    /* ============ CARD 5 – Forward markets ============ */
    {
      id: 'rofm-forward-markets',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Forward markets — managing future risk',
      lede: 'Forward markets let buyers and sellers agree a future price today, helping them manage uncertainty.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A forward contract can lock in a future price or rate <strong>before the transaction happens</strong>.' },

      flowTitle: 'HOW A FORWARD CONTRACT WORKS',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F91D}', title: 'Today', sub: 'Buyer and seller agree terms.' },
        { tone: 'blue', icon: '\u{1F512}', title: 'Locked price', sub: 'The future price is fixed.' },
        { tone: 'blue', icon: '\u{1F4C5}', title: 'Future date', sub: 'Settlement at agreed terms.' }
      ],

      causesLabel: 'WHO USES THEM',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green',  icon: '\u{1F4E5}', head: 'Importers', body: 'Lock in a future exchange rate.' },
        { tone: 'green',  icon: '\u{1F4E4}', head: 'Exporters', body: 'Protect their future earnings.' },
        { tone: 'green',  icon: '✈️', head: 'Airlines', body: 'Fix the price of fuel ahead.' },
        { tone: 'green',  icon: '\u{1F33E}', head: 'Producers', body: 'Lock in a crop or metal price.' }
      ],

      causes2Label: 'WHAT PROBLEM DO THEY SOLVE?',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue', icon: '\u{1F4B1}', head: 'Exchange-rate risk', body: 'Currencies can move sharply.' },
        { tone: 'blue', icon: '\u{1F3A2}', head: 'Price volatility', body: 'Commodity prices swing.' },
        { tone: 'blue', icon: '\u{1F4C5}', head: 'Planning certainty', body: 'Budgets become reliable.' },
        { tone: 'blue', icon: '\u{1F6E1}️', head: 'Cost control', body: 'Input costs are pinned down.' }
      ],

      causes3Label: 'BENEFITS AND TRADE-OFFS',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'green', icon: '\u{1F6E1}️', head: 'Risk hedging', body: 'Protects against bad moves.' },
        { tone: 'green', icon: '\u{1F4CA}', head: 'Better budgeting', body: 'Known prices aid planning.' },
        { tone: 'rose',  icon: '\u{1F4C8}', head: 'Miss good moves', body: 'You forgo favourable swings.' },
        { tone: 'rose',  icon: '\u{1F3B2}', head: 'Speculation', body: 'Can be used to gamble, not hedge.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Forwards trade away uncertainty — a firm accepts a known price to avoid the risk of a worse one later.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Forward markets let firms manage risk by fixing a future price today — turning uncertainty into a known cost.' },
      examEdge: { title: 'EXAM EDGE', text: 'Use a business example — fixing a fuel or currency price — to show how forwards reduce risk and aid planning.' }
    },

    /* ============ CARD 6 – Equities ============ */
    {
      id: 'rofm-equities',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Equities — ownership and capital raising',
      lede: 'Equity markets allow firms to raise finance by selling shares, while investors gain a stake in future profits.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The stock market is not the whole of finance — but it is a key route for <strong>long-term business funding</strong>.' },

      pairFirst: true,
      pairLabel: 'Primary market vs Secondary market',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'green', icon: '\u{1F195}', iconStyle: 'circle', label: 'Primary market',
        points: ['Firms issue new shares', 'Raise fresh capital', 'Money flows to the firm']
      },
      right: {
        tone: 'blue', icon: '\u{1F501}', iconStyle: 'circle', label: 'Secondary market',
        points: ['Investors buy and sell existing shares', 'Creates liquidity', 'Shares change hands between investors']
      },

      causesLabel: 'WHY EQUITY MARKETS MATTER',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F4B0}', head: 'Raise capital', body: 'Long-term funding for firms.' },
        { tone: 'green', icon: '\u{1F465}', head: 'Spread ownership', body: 'Risk is shared widely.' },
        { tone: 'green', icon: '\u{1F4A7}', head: 'Liquidity', body: 'Shares can be sold easily.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Price signals', body: 'Markets value the firm.' }
      ],

      causes2Label: 'WHO BENEFITS?',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue', icon: '\u{1F3ED}', head: 'Growing firms', body: 'Fund expansion without debt.' },
        { tone: 'blue', icon: '\u{1F680}', head: 'Start-ups', body: 'Scale up with new capital.' },
        { tone: 'blue', icon: '\u{1F4BC}', head: 'Institutions', body: 'Invest pensions and funds.' },
        { tone: 'blue', icon: '\u{1F465}', head: 'Households', body: 'Share in business profits.' }
      ],

      causes3Label: 'HOW RETURNS WORK',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'amber', icon: '\u{1F4B5}', head: 'Dividends', body: 'A share of company profit.' },
        { tone: 'amber', icon: '\u{1F4C8}', head: 'Capital gain', body: 'The share price rises.' },
        { tone: 'amber', icon: '\u{1F4CA}', head: 'Total return', body: 'Dividends plus gains.' },
        { tone: 'rose',  icon: '⚠️', head: 'Risk of loss', body: 'Prices can fall too.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Equity markets turn savings into business finance and tradeable ownership.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Equity markets raise long-term capital for firms and give investors a tradeable stake in future profits.' },
      examEdge: { title: 'EXAM EDGE', text: 'Distinguish clearly between primary capital-raising and the secondary market for trading shares after issue.' }
    },

    /* ============ CARD 7 – The whole story ============ */
    {
      id: 'rofm-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'The whole story',
      lede: 'Strong answers explain how financial markets move funds, support trade, manage risk and help firms raise capital.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The role of financial markets is broader than banking alone — it is about <strong>allocation, exchange, risk and finance</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F437}', title: 'Saving', sub: 'Spare funds pooled.' },
        { tone: 'green', icon: '\u{1F3E6}', title: 'Lending', sub: 'Funds reach borrowers.' },
        { tone: 'green', icon: '\u{1F4B3}', title: 'Payments', sub: 'Exchange made easy.' },
        { tone: 'green', icon: '\u{1F4C5}', title: 'Forward markets', sub: 'Risk is managed.' },
        { tone: 'green', icon: '\u{1F4C8}', title: 'Equities', sub: 'Capital is raised.' },
        { tone: 'green', icon: '\u{1F331}', title: 'Growth', sub: 'The economy expands.' }
      ],

      flow2Title: 'HOW TO WRITE IT',
      flow2Emoji: '\u{1F517}',
      flow2Sep: '→',
      flow2: [
        { tone: 'blue', icon: '\u{1F4D0}', title: 'Define the function' },
        { tone: 'blue', icon: '\u{1F517}', title: 'Explain how it works' },
        { tone: 'blue', icon: '\u{1F465}', title: 'Link to the economy' },
        { tone: 'blue', icon: '⚖️', title: 'Judge benefits & limits' }
      ],

      causesLabel: 'THE PAY-OFFS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F3D7}️', head: 'More investment', body: 'Funds reach productive uses.' },
        { tone: 'green', icon: '\u{1F30D}', head: 'Easier trade', body: 'Payments and exchange flow.' },
        { tone: 'green', icon: '\u{1F6E1}️', head: 'Better risk management', body: 'Risk is shared and hedged.' },
        { tone: 'green', icon: '\u{1F4B9}', head: 'Deeper markets', body: 'More capital, allocated well.' }
      ],

      causes2Label: 'LIMITS AND RISKS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F3A2}', head: 'Instability', body: 'Crises can spread quickly.' },
        { tone: 'rose', icon: '\u{1F3B2}', head: 'Speculation', body: 'Bubbles and excess risk.' },
        { tone: 'rose', icon: '\u{1F6AB}', head: 'Unequal access', body: 'Some are shut out of finance.' },
        { tone: 'rose', icon: '\u{1F46E}', head: 'Need for regulation', body: 'Markets need rules to work well.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Well-functioning financial markets can accelerate growth — but poorly regulated ones can spread risk and instability.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Financial markets are the economy’s co-ordination system for money, risk and capital.' },
      examEdge: { title: 'EXAM EDGE', text: 'The best answers move from description to evaluation — link each function to the economy, then weigh the risks.' }
    }
  ]
};
