/* ============================================================
   ECONOS – Development Strategies: Market-orientated (Edexcel A 4.3.3)
   7 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   Market-led development strategies: the big picture, trade
   liberalisation, FDI promotion, removing subsidies, floating exchange
   rates, microfinance and privatisation, and the whole story.

   New HTML visual:
     - fdiMagnetHub (Card 3 — a magnet pulling FDI, ringed by pull factors)
   Card 5 reuses the existing fxMarketDiagram chart-engine spec.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'development-strategies-market-orientated',
  topicNum: '4.3.3',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Development Strategies: Market-orientated',
  estTime: '22 min',
  goal: 'Explain the main market-led development strategies — trade liberalisation, FDI, subsidy removal, floating rates, microfinance and privatisation — and evaluate when they work',

  intro: {
    heroKey: 'heroSupplyDemand',
    summary: 'Market-orientated development strategies try to raise growth by improving incentives and letting markets — prices, competition, openness and private ownership — guide investment and production. This deck works through the main tools. Trade liberalisation opens markets and exposes firms to competition. FDI promotion attracts foreign capital, technology and jobs. Removing subsidies cuts distortions and saves public money, at the cost of painful short-run adjustment. Floating exchange rates let the currency adjust automatically to shocks. Microfinance widens access to credit, and privatisation transfers assets from the state to the private sector. The thread throughout is that these reforms work through incentives — so their success depends on whether the economy can actually respond, which means institutions, infrastructure and competition matter as much as the policy itself.',
    doInThis: 'Set out the market-led story and toolkit. Explain trade liberalisation and its trade-offs. Show why FDI flows in and how it helps or harms. Weigh the gains and pains of removing subsidies. Explain floating exchange rates as an automatic stabiliser. Judge microfinance and privatisation, and evaluate when market reforms work.',
    outcomes: [
      'Explain the market-led development story',
      'Evaluate trade liberalisation',
      'Explain FDI promotion and its risks',
      'Weigh removing government subsidies',
      'Explain floating exchange rates',
      'Judge microfinance and privatisation'
    ],
    tip: 'For each market reform, explain how it changes incentives — then judge whether the economy can respond, given its institutions and infrastructure.',
    stages: [
      { num: 1, name: 'Learn',  sub: '7 cards \xb7 22 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'dsmo-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Market-oriented strategies — the big picture',
      lede: 'Market-led development relies on prices, competition, openness and private incentives to allocate resources and encourage growth.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'These strategies aim to improve incentives and let <strong>markets guide investment and production</strong>.' },

      flowTitle: 'THE MARKET STORY',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F513}', title: 'Openness & incentives', sub: 'Lower barriers, more competition.' },
        { tone: 'green', icon: '\u{1F3ED}', title: 'Firms respond', sub: 'Compete, cut costs, serve customers.' },
        { tone: 'green', icon: '\u{1F3D7}️', title: 'Investment rises', sub: 'Domestic and foreign capital flows.' },
        { tone: 'green', icon: '\u{1F4C8}', title: 'Productivity grows', sub: 'Skills and efficiency improve.' },
        { tone: 'green', icon: '\u{1F3E1}', title: 'Living standards improve', sub: 'Higher incomes and more jobs.' }
      ],

      causesLabel: 'THE MAIN TOOLS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'blue',   icon: '\u{1F30D}', head: 'Trade liberalisation', body: 'Lower tariffs and open markets.' },
        { tone: 'purple', icon: '\u{1F9F2}', head: 'FDI promotion', body: 'Attract foreign investment.' },
        { tone: 'amber',  icon: '✂️', head: 'Subsidy removal', body: 'Cut distortions and waste.' },
        { tone: 'green',  icon: '\u{1F4B1}', head: 'Floating exchange rates', body: 'Let the currency adjust.' },
        { tone: 'blue',   icon: '\u{1F3E6}', head: 'Microfinance', body: 'Widen access to credit.' },
        { tone: 'purple', icon: '\u{1F3DB}️', head: 'Privatisation', body: 'Shift assets to the private sector.' }
      ],

      causes2Label: 'WHY SUPPORTERS LIKE IT',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '⚙️', head: 'Efficiency', body: 'Resources move to their best use.' },
        { tone: 'green', icon: '\u{1F3C1}', head: 'Competition', body: 'Pushes firms to improve.' },
        { tone: 'green', icon: '\u{1F4A1}', head: 'Innovation', body: 'Incentives reward new ideas.' },
        { tone: 'green', icon: '\u{1F6D2}', head: 'Consumer choice', body: 'More and cheaper goods.' }
      ],

      causes3Label: 'WHAT IT ASSUMES',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'amber', icon: '\u{1F4CA}', head: 'Working markets', body: 'Prices can signal and clear.' },
        { tone: 'amber', icon: '⚖️', head: 'Strong institutions', body: 'Rules are enforced fairly.' },
        { tone: 'amber', icon: '\u{1F3E6}', head: 'Access to finance', body: 'Firms can fund expansion.' },
        { tone: 'amber', icon: '\u{1F6E3}️', head: 'Basic infrastructure', body: 'Firms can actually respond.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Market-oriented reforms work through incentives — but they assume an economy that can <strong>actually respond</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Market-led strategies aim to accelerate development by making markets more open, competitive and responsive.' },
      examEdge: { title: 'EXAM EDGE', text: 'Always explain the mechanism — how a reform changes incentives, investment or competition — then judge if the economy can respond.' }
    },

    /* ============ CARD 2 – Trade liberalisation ============ */
    {
      id: 'dsmo-trade-liberalisation',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Trade liberalisation',
      lede: 'Reducing tariffs, quotas and other barriers can open markets, expand trade and increase competitive pressure.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Opening up can raise efficiency — but the gains depend on what the country is <strong>ready to produce and sell</strong>.' },

      flowTitle: 'HOW IT WORKS',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F513}', title: 'Lower trade barriers', sub: 'Tariffs and quotas cut.' },
        { tone: 'blue', icon: '\u{1F4E6}', title: 'Exports & imports rise', sub: 'More goods and services flow.' },
        { tone: 'blue', icon: '\u{1F3C1}', title: 'Competition increases', sub: 'Domestic firms face rivals.' },
        { tone: 'blue', icon: '\u{1F3ED}', title: 'Firms specialise', sub: 'Resources shift to advantage.' },
        { tone: 'blue', icon: '\u{1F465}', title: 'Consumers & producers gain', sub: 'Lower prices, wider markets.' }
      ],

      causesLabel: 'POSSIBLE GAINS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F6D2}', head: 'Cheaper imports', body: 'Lower prices for consumers and firms.' },
        { tone: 'green', icon: '\u{1F4E6}', head: 'Export opportunities', body: 'Access to far bigger markets.' },
        { tone: 'green', icon: '\u{1F6E0}️', head: 'Capital goods', body: 'Import the machinery to grow.' },
        { tone: 'green', icon: '⚙️', head: 'Greater efficiency', body: 'Competition raises productivity.' }
      ],

      causes2Label: 'WHY IT CAN GO WRONG',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F423}', head: 'Infant industries', body: 'New sectors exposed too soon.' },
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Current account', body: 'Imports may surge ahead of exports.' },
        { tone: 'rose', icon: '⚖️', head: 'Unequal gains', body: 'Some sectors and workers lose out.' },
        { tone: 'rose', icon: '\u{1F517}', head: 'Dependence', body: 'Reliance on volatile world markets.' }
      ],

      causes3Label: 'WHEN IT WORKS BEST',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'blue', icon: '⚖️', head: 'Good institutions', body: 'To manage the adjustment.' },
        { tone: 'blue', icon: '\u{1F393}', head: 'Skilled labour', body: 'To move into new sectors.' },
        { tone: 'blue', icon: '\u{1F3C1}', head: 'Competitive firms', body: 'Able to withstand rivals.' },
        { tone: 'blue', icon: '\u{1F4C9}', head: 'Stable macro', body: 'A steady exchange rate and prices.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Liberalisation is not the same as opening overnight — timing and sequencing of reform matter.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Trade liberalisation can raise efficiency and growth — but only if firms are ready to compete and adjust.' },
      examEdge: { title: 'EXAM EDGE', text: 'Weigh the gains from trade against adjustment costs and the risk to infant industries — and stress sequencing.' }
    },

    /* ============ CARD 3 – Promotion of FDI ============ */
    {
      id: 'dsmo-fdi',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Promotion of FDI',
      lede: 'Foreign direct investment can bring capital, jobs, technology and export links — if a country attracts the right kind of investment.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'FDI matters most when it builds <strong>local skills, supply chains and long-run productive capacity</strong>.' },

      visualKey: 'fdiMagnetHub',
      visualLabel: 'WHY FDI FLOWS IN',
      visualEmoji: '\u{1F517}',

      causesLabel: 'HOW FDI CAN HELP',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F3D7}️', head: 'Capital & jobs', body: 'Brings finance, creates jobs, raises incomes.' },
        { tone: 'green', icon: '\u{1F4F1}', head: 'Technology transfer', body: 'New methods and know-how spread.' },
        { tone: 'green', icon: '\u{1F4E6}', head: 'Export access', body: 'Into global markets and supply chains.' },
        { tone: 'green', icon: '\u{1F4B5}', head: 'Tax & reserves', body: 'Revenue and foreign currency inflows.' }
      ],

      causes2Label: 'THE RISKS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F4B8}', head: 'Profit repatriation', body: 'Profits flow back overseas.' },
        { tone: 'rose', icon: '\u{1F3C3}', head: 'Footloose firms', body: 'They can leave for cheaper sites.' },
        { tone: 'rose', icon: '\u{1F343}', head: 'Weak standards', body: 'Pressure on labour and the environment.' },
        { tone: 'rose', icon: '\u{1F3DD}️', head: 'Enclave growth', body: 'Few links to the local economy.' }
      ],

      causes3Label: 'WHAT TO JUDGE',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'blue', icon: '\u{1F517}', head: 'Local linkages', body: 'Does it use local suppliers?' },
        { tone: 'blue', icon: '\u{1F454}', head: 'Quality of jobs', body: 'Pay, training and conditions.' },
        { tone: 'blue', icon: '\u{1F4F1}', head: 'Tech spillovers', body: 'Do skills stay in the country?' },
        { tone: 'blue', icon: '⚖️', head: 'Net benefit', body: 'Gains weighed against the costs.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Not all FDI is equal — the biggest gains come when foreign firms are connected to the <strong>domestic economy</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'FDI can accelerate development when it brings capital, technology and jobs that build lasting local capacity.' },
      examEdge: { title: 'EXAM EDGE', text: 'Avoid saying FDI is always good — evaluate repatriated profits, regulation and whether local firms actually benefit.' }
    },

    /* ============ CARD 4 – Removing subsidies ============ */
    {
      id: 'dsmo-removing-subsidies',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Removing government subsidies',
      lede: 'Ending subsidies can reduce distortions and save public money — but it can also create painful short-run adjustment costs.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Subsidy removal aims to improve incentives — but <strong>timing and protection</strong> for vulnerable groups matter.' },

      causesPosition: 'top',
      causesLabel: 'WHY REMOVE THEM',
      causesEmoji: '\u{1F517}',
      causes: [
        { tone: 'green', icon: '\u{1F3DB}️', head: 'Reduce fiscal pressure', body: 'Free up scarce public money.' },
        { tone: 'green', icon: '⚖️', head: 'Cut distortions', body: 'Let prices reflect real costs.' },
        { tone: 'green', icon: '\u{1F500}', head: 'Reallocate resources', body: 'Move them to better uses.' },
        { tone: 'green', icon: '⚙️', head: 'Encourage efficiency', body: 'Firms must compete to survive.' }
      ],

      flowTitle: 'THE BEFORE AND AFTER',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'amber', icon: '✂️', title: 'Subsidy removed', sub: 'Support is withdrawn.' },
        { tone: 'amber', icon: '\u{1F4B2}', title: 'Prices change', sub: 'Costs are passed on.' },
        { tone: 'amber', icon: '\u{1F465}', title: 'Firms & consumers adjust', sub: 'Demand and supply respond.' },
        { tone: 'amber', icon: '\u{1F500}', title: 'Resources move', sub: 'To more productive uses.' }
      ],

      causes2Label: 'WHAT MAY IMPROVE',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '⚙️', head: 'Better efficiency', body: 'Less waste of resources.' },
        { tone: 'green', icon: '\u{1F4C9}', head: 'Lower waste', body: 'No propping up failing firms.' },
        { tone: 'green', icon: '\u{1F3DB}️', head: 'Healthier finances', body: 'Stronger public budgets.' },
        { tone: 'green', icon: '\u{1F4A1}', head: 'Stronger incentives', body: 'Firms innovate to survive.' }
      ],

      causes3Label: 'WHAT MAY HURT',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'rose', icon: '\u{1F4B8}', head: 'Higher prices', body: 'Households face dearer essentials.' },
        { tone: 'rose', icon: '\u{1F465}', head: 'Hits the poor', body: 'Losses for low-income consumers.' },
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Short-run job losses', body: 'Some firms shed workers.' },
        { tone: 'rose', icon: '\u{1F3ED}', head: 'Strategic sectors', body: 'Key industries may weaken.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Judge by the <strong>pace of reform</strong>, targeted support for the poor, the maturity of the industry and political stability.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Removing subsidies can sharpen incentives and free up public money — but the short-run costs fall on the vulnerable.' },
      examEdge: { title: 'EXAM EDGE', text: 'Weigh efficiency gains against the distributional costs — and stress phasing and support to manage them.' }
    },

    /* ============ CARD 5 – Floating exchange rates ============ */
    {
      id: 'dsmo-floating-rates',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Floating exchange rate systems',
      lede: 'Under a floating exchange rate, the currency is largely determined by demand and supply in the foreign exchange market.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A floating currency can act as an <strong>automatic stabiliser</strong> — but volatility can create new problems.' },

      visualKey: 'fxMarketDiagram',
      visualLabel: 'HOW A FLOAT WORKS',
      visualEmoji: '\u{1F517}',
      visualCaption: 'Like a buoy, the currency floats up or down with market forces — demand for and supply of the currency set the rate.',

      flowTitle: 'AUTOMATIC ADJUSTMENT',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F4C9}', title: 'Trade deficit', sub: 'Imports exceed exports.' },
        { tone: 'blue', icon: '\u{1F4B1}', title: 'Currency depreciates', sub: 'The rate falls.' },
        { tone: 'blue', icon: '\u{1F4E6}', title: 'Exports cheaper', sub: 'Demand abroad rises.' },
        { tone: 'blue', icon: '\u{1F6D2}', title: 'Imports dearer', sub: 'Demand for them falls.' },
        { tone: 'blue', icon: '⚖️', title: 'Balance restored', sub: 'The deficit narrows.' }
      ],

      causesLabel: 'WHY SUPPORTERS LIKE IT',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F938}', head: 'Flexibility', body: 'The rate adjusts to shocks.' },
        { tone: 'green', icon: '\u{1F3DB}️', head: 'Policy independence', body: 'No need to defend a peg.' },
        { tone: 'green', icon: '\u{1F4B0}', head: 'Monetary freedom', body: 'Interest rates target the economy.' },
        { tone: 'green', icon: '\u{1F6E1}️', head: 'Shock absorber', body: 'Cushions external shocks.' }
      ],

      causes2Label: 'THE RISKS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F3A2}', head: 'Volatility', body: 'The rate can swing sharply.' },
        { tone: 'rose', icon: '\u{1F4C8}', head: 'Import inflation', body: 'A weaker currency raises prices.' },
        { tone: 'rose', icon: '❓', head: 'Uncertainty', body: 'Harder for firms to plan.' },
        { tone: 'rose', icon: '\u{1F3E6}', head: 'Foreign-currency debt', body: 'Depreciation raises its cost.' }
      ],

      causes3Label: 'WHEN IT HELPS DEVELOPMENT',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'blue', icon: '\u{1F500}', head: 'Diversified economy', body: 'Not reliant on one export.' },
        { tone: 'blue', icon: '⚖️', head: 'Credible institutions', body: 'A trusted central bank.' },
        { tone: 'blue', icon: '\u{1F3E6}', head: 'Low FX debt', body: 'Less exposure to depreciation.' },
        { tone: 'blue', icon: '\u{1F4B9}', head: 'Deep financial markets', body: 'To absorb the swings.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A floating rate can rebalance trade on its own — but the same flexibility can import inflation and uncertainty.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'A floating currency lets the market do the adjusting — a stabiliser for some economies, a source of volatility for others.' },
      examEdge: { title: 'EXAM EDGE', text: 'Link the float to automatic adjustment, then evaluate volatility, import inflation and foreign-currency debt.' }
    },

    /* ============ CARD 6 – Microfinance and privatisation ============ */
    {
      id: 'dsmo-microfinance-privatisation',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Microfinance and privatisation',
      lede: 'Both are market-oriented strategies — but one widens access to finance, while the other changes who owns productive assets.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'These policies work through incentives — but both depend on <strong>competition, regulation and access</strong>.' },

      pairFirst: true,
      pairLabel: 'Microfinance vs Privatisation',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'blue', icon: '\u{1F3E6}', iconStyle: 'circle', label: 'Microfinance',
        points: ['Small loans to the financially excluded', 'Funds micro-businesses', 'Raises incomes and inclusion']
      },
      right: {
        tone: 'purple', icon: '\u{1F3DB}️', iconStyle: 'circle', label: 'Privatisation',
        points: ['Transfers assets from state to private', 'Aims for efficiency and investment', 'Can raise government revenue']
      },

      causesLabel: 'WHAT THEY AIM TO DO',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F513}', head: 'Financial inclusion', body: 'Reach those banks ignore.' },
        { tone: 'green', icon: '\u{1F33E}', head: 'Micro-enterprise', body: 'Fund small, productive ventures.' },
        { tone: 'green', icon: '⚙️', head: 'Efficiency', body: 'Private owners cut waste.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Investment & revenue', body: 'New capital and sale proceeds.' }
      ],

      causes2Label: 'LIMITS TO WATCH',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F4C8}', head: 'High interest', body: 'Microloans can be costly.' },
        { tone: 'rose', icon: '\u{1F50D}', head: 'Tiny scale', body: 'Limited impact on the whole economy.' },
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Job losses', body: 'Privatised firms may cut staff.' },
        { tone: 'rose', icon: '\u{1F454}', head: 'Monopoly risk', body: 'Private monopolies without regulation.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Both help most when access is real and competition or regulation keeps prices and behaviour in check.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Microfinance widens who can invest; privatisation changes who owns and runs assets — both rely on incentives working.' },
      examEdge: { title: 'EXAM EDGE', text: 'Evaluate microfinance on cost and scale, and privatisation on competition and regulation — not ownership alone.' }
    },

    /* ============ CARD 7 – The whole story ============ */
    {
      id: 'dsmo-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'The whole story',
      lede: 'Market-oriented strategies try to raise growth through competition, openness and incentives — but their success depends on whether the economy can respond.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Good evaluation is about <strong>context</strong> — the same reform can help one country and hurt another.' },

      flowTitle: 'THE DEVELOPMENT CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F513}', title: 'Open markets & incentives', sub: 'The reform starts.' },
        { tone: 'green', icon: '\u{1F4E6}', title: 'More trade & investment', sub: 'Activity picks up.' },
        { tone: 'green', icon: '\u{1F4C8}', title: 'Higher productivity', sub: 'Efficiency improves.' },
        { tone: 'green', icon: '\u{1F680}', title: 'Faster growth', sub: 'Output expands.' },
        { tone: 'green', icon: '\u{1F3E1}', title: 'Development gains', sub: 'If gains are shared.' },
        { tone: 'green', icon: '⚖️', title: 'Evaluation', sub: 'Did the economy respond?' }
      ],

      causesLabel: 'THE POLICY TOOLKIT',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'blue',   icon: '\u{1F30D}', head: 'Trade liberalisation', body: 'Open markets and compete.' },
        { tone: 'purple', icon: '\u{1F9F2}', head: 'FDI promotion', body: 'Attract foreign capital.' },
        { tone: 'amber',  icon: '✂️', head: 'Subsidy removal', body: 'Cut distortions.' },
        { tone: 'green',  icon: '\u{1F4B1}', head: 'Floating rates', body: 'Let the currency adjust.' },
        { tone: 'blue',   icon: '\u{1F3E6}', head: 'Microfinance', body: 'Widen access to credit.' },
        { tone: 'purple', icon: '\u{1F3DB}️', head: 'Privatisation', body: 'Shift assets to private hands.' }
      ],

      causes2Label: 'WHERE IT CAN FAIL',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F3DB}️', head: 'Weak institutions', body: 'Reforms are poorly managed.' },
        { tone: 'rose', icon: '\u{1F6E3}️', head: 'Poor infrastructure', body: 'Firms cannot respond.' },
        { tone: 'rose', icon: '⚖️', head: 'Inequality', body: 'Gains are unevenly shared.' },
        { tone: 'rose', icon: '\u{1F3A2}', head: 'Volatility & shocks', body: 'Openness imports instability.' }
      ],

      causes3Label: 'HOW TO WRITE IT',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'green', icon: '\u{1F4D0}', head: 'Define the strategy', body: 'Name the market reform.' },
        { tone: 'green', icon: '\u{1F517}', head: 'Explain the mechanism', body: 'How incentives change.' },
        { tone: 'green', icon: '\u{1F310}', head: 'Apply to the country', body: 'Use its real conditions.' },
        { tone: 'green', icon: '⚖️', head: 'Evaluate trade-offs', body: 'Conditions and counter-arguments.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Market reforms are not magic — they raise productive capacity only when institutions, infrastructure and flexibility are strong enough.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Market-oriented strategies can drive development through competition and incentives — but their success is conditional on context.' },
      economistQuote: {
        portraitKey: 'economistDuflo',
        tone: 'amber',
        label: 'Economist insight on development',
        quote: 'The poor are no less rational than anyone else — quite the contrary. Precisely because they have so little, we often find them putting much careful thought into their choices.',
        attribution: 'Esther Duflo &amp; Abhijit Banerjee, <em>Poor Economics</em> (2011)'
      },
      examEdge: { title: 'EXAM EDGE', text: 'The strongest answers do not just list reforms — they explain the mechanism, apply it to a country, and judge the conditions for success.' }
    }
  ]
};
