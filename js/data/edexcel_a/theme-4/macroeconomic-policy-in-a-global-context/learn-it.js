/* ============================================================
   ECONOS – Macroeconomic Policy in a Global Context (Edexcel A 4.5.4)
   8 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   The policy map and toolkit, reducing deficits and debt, reducing
   poverty and inequality, interest rates and the money supply,
   international competitiveness, responding to external shocks, and the
   whole story.

   First of the two-way split of spec 4.5.4.

   Visuals:
     - policyToolkitHub (Card 1 — five policy tools around the economy)
     - debtBathtub      (Card 3 — reused stock-vs-flow illustration)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'macroeconomic-policy-in-a-global-context',
  topicNum: '4.5.4',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Macroeconomic Policy in a Global Context',
  estTime: '24 min',
  goal: 'Map the macro-policy toolkit, match tools to objectives, and evaluate measures to cut deficits and debt, reduce poverty, manage demand, raise competitiveness and respond to shocks',

  intro: {
    heroKey: 'heroGlobe',
    summary: 'Governments use a policy toolkit to influence growth, inflation, unemployment, trade, inequality and stability — but every tool also creates trade-offs, and in an open economy its effects spill across borders. This deck maps the five tools (fiscal, monetary, exchange-rate, supply-side and direct controls) and shows which works best for which problem and through which transmission channel. It then evaluates the big policy missions: reducing fiscal deficits and the national debt, reducing poverty and inequality, changing interest rates and the money supply, raising international competitiveness, and responding to external shocks. It closes on how to structure a balanced, context-driven evaluation — because a tool that works in theory may not work here, now and at this scale.',
    doInThis: 'Map the five policy tools and their transmission channels. Match tools to objectives. Evaluate measures to cut deficits and debt, reduce poverty and inequality, change interest rates, raise competitiveness and respond to shocks. Weigh the trade-offs in a global context.',
    outcomes: [
      'Map the five macro-policy tools',
      'Match each tool to its objective and channel',
      'Evaluate measures to reduce deficits and debt',
      'Evaluate measures to reduce poverty and inequality',
      'Explain how interest rates and the money supply work',
      'Evaluate competitiveness policy and shock responses'
    ],
    tip: 'Always link the tool to its transmission mechanism, then to the objective — and judge the trade-offs in context.',
    stages: [
      { num: 1, name: 'Learn',  sub: '8 cards \xb7 24 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'mpg-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Macroeconomic policy — the big picture',
      lede: 'Governments have a policy toolkit. But each tool affects growth, inflation, unemployment, trade, inequality and stability differently.',
      ledeStyle: 'plain',

      note: { icon: 'ℹ️', tone: 'blue', text: 'Every policy tool can help — but every tool also creates <strong>trade-offs</strong>.' },
      notePosition: 'top',

      visualKey: 'policyToolkitHub',
      visualLabel: 'THE POLICY MAP',
      visualEmoji: '\u{1F5FA}️',

      causesFirst: true,
      causesLabel: 'WHAT GOVERNMENTS TRY TO IMPROVE',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Growth', body: 'A bigger economy over time.' },
        { tone: 'rose',   icon: '\u{1F525}', head: 'Inflation', body: 'Low and stable price rises.' },
        { tone: 'blue',   icon: '\u{1F465}', head: 'Employment', body: 'More people in work.' },
        { tone: 'purple', icon: '⚖️', head: 'Equality', body: 'Fairer incomes and opportunity.' },
        { tone: 'amber',  icon: '\u{1F3C6}', head: 'Competitiveness', body: 'Selling well at home and abroad.' },
        { tone: 'blue',   icon: '\u{1F30D}', head: 'Trade & stability', body: 'A sustainable external position.' }
      ],

      causes2Label: 'WHY GLOBAL CONTEXT MATTERS',
      causes2Emoji: '\u{1F30D}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue',   icon: '\u{1F4B8}', head: 'Capital flows', body: 'Money moves in and out, affecting rates and the currency.' },
        { tone: 'green',  icon: '\u{1F517}', head: 'Trade linkages', body: 'Demand and supply abroad shape the home economy.' },
        { tone: 'blue',   icon: '\u{1F4B1}', head: 'Exchange-rate moves', body: 'A changing currency alters trade and prices.' },
        { tone: 'rose',   icon: '⚡', head: 'External shocks', body: 'Crises and price spikes arrive from outside.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Countries often pursue several objectives at once. So policy must be judged by their side-effects as well as their benefits.' },
      examEdge: { title: 'EXAM EDGE', text: 'Name the objective, the tool and its transmission channel — then weigh the trade-offs in a global context.' }
    },

    /* ============ CARD 2 – The policy toolkit ============ */
    {
      id: 'mpg-toolkit',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'The policy toolkit',
      lede: 'Different policy tools work through different channels — demand, incentives, costs and expectations.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Strong analysis links the tool to the <strong>transmission mechanism</strong> and then to the objective.' },

      causesPosition: 'top',
      causesLabel: 'THE FIVE TOOLS',
      causesEmoji: '\u{1F6E0}️',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'blue',   icon: '\u{1F3DB}️', head: 'Fiscal policy', body: 'Spending and taxes affect demand and incentives.' },
        { tone: 'purple', icon: '\u{1F3E6}', head: 'Monetary policy', body: 'Interest rates and the money supply influence the cost of borrowing.' },
        { tone: 'blue',   icon: '\u{1F4B1}', head: 'Exchange-rate policy', body: 'Affects trade, inflation and capital flows.' },
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Supply-side policy', body: 'Raises productivity, capacity and growth.' },
        { tone: 'rose',   icon: '\u{1F6E1}️', head: 'Direct controls', body: 'Targeted rules on prices, quantities or behaviour.' }
      ],

      causes2Label: 'WHEN EACH IS MOST USEFUL',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue',   icon: '\u{1F4C9}', head: 'Recession or weak demand', body: 'Fiscal or monetary stimulus.' },
        { tone: 'rose',   icon: '\u{1F525}', head: 'High inflation', body: 'Tighter monetary policy.' },
        { tone: 'amber',  icon: '\u{1F3C3}', head: 'Weak competitiveness', body: 'Supply-side reform and exchange rate.' },
        { tone: 'purple', icon: '⚖️', head: 'High inequality', body: 'Fiscal redistribution and public spending.' },
        { tone: 'rose',    icon: '\u{1F6A8}', head: 'Crisis or market failure', body: 'Direct controls or targeted support.' }
      ],

      causes3Label: 'WATCH THE TRADE-OFFS',
      causes3Emoji: '⚠️',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'amber',  icon: '⏳', head: 'Time lags', body: 'Policy may take effect long after the decision.' },
        { tone: 'rose',   icon: '\u{1F4A5}', head: 'Side effects', body: 'Helping one objective can hurt another.' },
        { tone: 'purple', icon: '⚔️', head: 'Policy conflicts', body: 'Goals can pull against each other.' },
        { tone: 'blue',   icon: '\u{1F30D}', head: 'Global spillovers', body: 'Effects leak across borders.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Policy tools differ in speed, precision and side-effects — no single tool solves every problem.' },
      examEdge: { title: 'EXAM EDGE', text: 'Name the tool, explain the mechanism, then judge whether it suits the problem and context.' }
    },

    /* ============ CARD 3 – Reducing deficits and national debt ============ */
    {
      id: 'mpg-deficits-debt',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Reducing deficits and national debt',
      lede: 'Governments can cut a fiscal gap, but the route chosen affects growth, living standards and confidence.',
      ledeStyle: 'plain',

      note: { icon: 'ℹ️', tone: 'blue', text: 'A deficit is the yearly gap between spending and revenue — <strong>debt</strong> is the accumulated stock.' },
      notePosition: 'top',

      visualKey: 'debtBathtub',
      visualLabel: 'THE CORE DISTINCTION',
      visualEmoji: '\u{1F6C1}',

      causesFirst: true,
      causesLabel: 'THREE MAIN ROUTES',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'rose',  icon: '✂️', head: 'Spend less', body: 'Lower current spending or delay projects — but this can weaken demand or services.' },
        { tone: 'blue',  icon: '\u{1F9FE}', head: 'Tax more', body: 'Raise revenue through direct or indirect taxes — but this may reduce the deficit at the cost of incentives.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Grow faster', body: 'Stronger GDP growth raises revenue and shrinks the deficit without cuts — the ideal, but hard to engineer.' }
      ],

      causes2Label: 'KEY TRADE-OFFS',
      causes2Emoji: '⚖️',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Growth & employment', body: 'Sharp cuts or tax rises can slow the economy.' },
        { tone: 'green',  icon: '\u{1F3E5}', head: 'Living standards & services', body: 'Spending cuts can hit public services.' },
        { tone: 'amber',  icon: '\u{1F4B8}', head: 'Interest costs & credibility', body: 'Markets reward a credible plan.' },
        { tone: 'purple', icon: '⚖️', head: 'Equality', body: 'Who bears the burden of consolidation?' },
        { tone: 'rose',   icon: '\u{1F5F3}️', head: 'Political feasibility', body: 'Voters may resist cuts or tax rises.' }
      ],

      causes3Label: 'GLOBAL CONTEXT',
      causes3Emoji: '\u{1F30D}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'amber', icon: '\u{1F4B8}', head: 'Borrowing costs', body: 'Higher interest rates make debt harder to manage.' },
        { tone: 'blue',  icon: '\u{1F465}', head: 'Investor confidence', body: 'Credibility keeps borrowing affordable.' },
        { tone: 'rose',  icon: '⚡', head: 'External shocks', body: 'A downturn abroad can blow a plan off course.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Reducing debt is not just about cutting — it is a macroeconomic balancing act between consolidation, growth and confidence.' },
      examEdge: { title: 'EXAM EDGE', text: 'Separate deficit from debt clearly, then weigh the route chosen to reduce them against the trade-offs.' }
    },

    /* ============ CARD 4 – Reducing poverty and inequality ============ */
    {
      id: 'mpg-poverty-inequality',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Reducing poverty and inequality',
      lede: 'Policy can raise living standards and spread opportunity, but the design of redistribution matters.',
      ledeStyle: 'plain',

      note: { icon: 'ℹ️', tone: 'blue', text: 'Reducing inequality is not only about cash — it is also about <strong>opportunity, public services and mobility</strong>.' },
      notePosition: 'top',

      causesPosition: 'top',
      causesLabel: 'THE TOOLKIT FOR EQUALITY',
      causesEmoji: '\u{1F9F0}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green',  icon: '\u{1F4CA}', head: 'Progressive taxes', body: 'Higher earners pay more, narrowing the gap.' },
        { tone: 'blue',   icon: '\u{1F4B7}', head: 'Cash benefits & transfers', body: 'Direct support raises incomes for the worst off.' },
        { tone: 'purple', icon: '\u{1F393}', head: 'Education & skills', body: 'Better learning and training raise long-run pay.' },
        { tone: 'rose',   icon: '\u{1F3E5}', head: 'Health & housing', body: 'Access to health and housing protects the vulnerable.' },
        { tone: 'amber',  icon: '\u{1F4B5}', head: 'Minimum wages & labour rules', body: 'Fair pay and safe work protect low earners.' },
        { tone: 'blue',   icon: '\u{1F5FA}️', head: 'Regional investment', body: 'Better places to live and invest spread opportunity.' }
      ],

      flowTitle: 'HOW THE TOOLS WORK',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F501}', title: 'Redistribution', sub: 'Taxes and transfers move resources.' },
        { tone: 'blue', icon: '\u{1F3E5}', title: 'Public services', sub: 'Universal access to essentials.' },
        { tone: 'blue', icon: '\u{1F393}', title: 'Human capital', sub: 'Skills and health raise potential.' },
        { tone: 'blue', icon: '\u{1F465}', title: 'Employment', sub: 'More and better-paid work.' }
      ],

      causes2Label: 'THE MAIN TRADE-OFFS',
      causes2Emoji: '⚖️',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'amber',  icon: '\u{1F3C3}', head: 'Equity vs incentives', body: 'High taxes or benefits can blunt work incentives.' },
        { tone: 'blue',   icon: '\u{1F3AF}', head: 'Universal vs targeted', body: 'Universal is simple; targeted is cheaper but complex.' },
        { tone: 'purple', icon: '⏳', head: 'Short-run vs long-run', body: 'Cash helps now; skills help later.' },
        { tone: 'rose',   icon: '\u{1F4B8}', head: 'Affordability', body: 'Redistribution must be financed.' }
      ],

      causes3Label: 'WHO BENEFITS?',
      causes3Emoji: '\u{1F465}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'green', icon: '\u{1F3E0}', head: 'Low-income households', body: 'Higher incomes and security.' },
        { tone: 'blue',  icon: '\u{1F476}', head: 'Children', body: 'Better start in life.' },
        { tone: 'blue',  icon: '\u{1F5FA}️', head: 'Regions left behind', body: 'Investment and jobs.' },
        { tone: 'purple', icon: '\u{1F393}', head: 'Future workers', body: 'Skills for tomorrow.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'The best anti-poverty strategy combines redistribution with opportunity — cash, public services and mobility.' },
      examEdge: { title: 'EXAM EDGE', text: 'Separate which policy reduces poverty directly from which raises opportunity over time — then judge which matters more here.' }
    },

    /* ============ CARD 5 – Interest rates and the money supply ============ */
    {
      id: 'mpg-interest-rates',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Interest rates and the money supply',
      lede: 'Monetary policy changes borrowing, saving, spending, investment and often the exchange rate too.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Higher rates usually cool demand — lower rates usually stimulate it, but the <strong>transmission is never instant</strong>.' },

      flowTitle: 'HOW MONETARY POLICY WORKS',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F4B0}', title: 'Interest rates & liquidity', sub: 'The central bank sets the policy rate.' },
        { tone: 'blue', icon: '\u{1F501}', title: 'Borrowing & saving', sub: 'Credit becomes cheaper or dearer.' },
        { tone: 'blue', icon: '\u{1F6D2}', title: 'Consumption & investment', sub: 'Households and firms adjust spending.' },
        { tone: 'blue', icon: '\u{1F4C8}', title: 'Aggregate demand', sub: 'Total demand shifts in the economy.' },
        { tone: 'blue', icon: '\u{1F525}', title: 'Inflation & growth', sub: 'Prices and output respond over time.' }
      ],

      causesLabel: 'TWO DIRECTIONS',
      causesEmoji: '↕️',
      causesStyle: 'icon-top',
      causesCols: 2,
      causes: [
        { tone: 'rose',  icon: '\u{2B06}️', head: 'Tighter policy', body: 'Higher rates · slower credit growth · weaker demand · lower inflation.' },
        { tone: 'green', icon: '\u{2B07}️', head: 'Looser policy', body: 'Lower rates · faster credit growth · stronger demand · higher inflation.' }
      ],

      causes2Label: 'THE MAIN TOOLS',
      causes2Emoji: '\u{1F6E0}️',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'blue',   icon: '\u{1F3E6}', head: 'Bank Rate / policy rate', body: 'The central bank’s main lever on the cost of money.' },
        { tone: 'purple', icon: '\u{1F4B8}', head: 'Asset purchases / liquidity', body: 'Quantitative easing and liquidity support in stress.' },
        { tone: 'amber',  icon: '\u{1F4CB}', head: 'Credit & lending conditions', body: 'Guidance, rules and macroprudential standards shape lending.' }
      ],

      causes3Label: 'WHO FEELS IT?',
      causes3Emoji: '\u{1F465}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'blue',   icon: '\u{1F3E0}', head: 'Households', body: 'Mortgages, loans and savings returns change.' },
        { tone: 'green',  icon: '\u{1F3ED}', head: 'Firms', body: 'Borrowing for investment gets cheaper or dearer.' },
        { tone: 'amber',  icon: '\u{1F4B0}', head: 'Savers & borrowers', body: 'Returns and repayments move in opposite directions.' },
        { tone: 'rose',   icon: '\u{1F3D8}️', head: 'The housing market', body: 'Rates feed straight into prices and demand.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Monetary policy works through the financial system — and its effects depend on confidence, credit and time lags.' },
      examEdge: { title: 'EXAM EDGE', text: 'Trace the full chain from interest-rate change to spending, inflation and growth — and say which step might break.' }
    },

    /* ============ CARD 6 – International competitiveness ============ */
    {
      id: 'mpg-competitiveness',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Increasing international competitiveness',
      lede: 'Countries compete on prices, productivity, quality, reliability and innovation — not just on a cheap currency.',
      ledeStyle: 'plain',

      note: { icon: 'ℹ️', tone: 'blue', text: 'Sustainable competitiveness usually comes from <strong>productivity and quality</strong>, not just lower costs.' },

      pairFirst: true,
      pairLabel: 'PRICE VS NON-PRICE',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue', icon: '\u{1F3F7}️', iconStyle: 'circle', label: 'Price competitiveness',
        sub: 'Selling more cheaply than rivals.',
        points: ['Unit costs and wages', 'Business tax', 'Exchange rates', 'Energy costs']
      },
      right: {
        tone: 'green', icon: '\u{1F396}️', iconStyle: 'circle', label: 'Non-price competitiveness',
        sub: 'Winning on what the product offers.',
        points: ['Quality and branding', 'Skills and innovation', 'Reliability and service', 'Infrastructure']
      },

      causesLabel: 'POLICY LEVERS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'purple', icon: '\u{1F393}', head: 'Skills & education', body: 'A more productive workforce.' },
        { tone: 'blue',   icon: '\u{1F309}', head: 'Infrastructure', body: 'Lower costs and faster trade.' },
        { tone: 'green',  icon: '\u{1F52C}', head: 'Innovation & R&D', body: 'Better products and processes.' },
        { tone: 'amber',  icon: '\u{1F4CB}', head: 'Business tax & regulation', body: 'A friendlier environment to invest.' },
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Supply-side reform', body: 'More flexible, efficient markets.' },
        { tone: 'rose',   icon: '\u{1F4B1}', head: 'Exchange rate', body: 'A weaker currency can help in the short run.' }
      ],

      causes2Label: 'WHY IT MATTERS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F6A2}', head: 'Exports', body: 'Sell more goods and services abroad.' },
        { tone: 'blue',  icon: '\u{1F3E6}', head: 'FDI inflows', body: 'Attract investment and jobs.' },
        { tone: 'amber', icon: '\u{1F465}', head: 'Jobs & wages', body: 'Stronger demand for labour.' },
        { tone: 'blue',  icon: '\u{1F4C8}', head: 'Long-run growth', body: 'Higher productivity raises potential.' }
      ],

      causes3Label: 'RISKS',
      causes3Emoji: '⚠️',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'rose',  icon: '\u{1F4C9}', head: 'Race to the bottom', body: 'Cutting costs and wages can backfire.' },
        { tone: 'amber', icon: '⏳', head: 'Short-run vs long-run', body: 'Quick fixes do not build real capability.' },
        { tone: 'purple', icon: '\u{1F4B1}', head: 'Gains can be eroded', body: 'A cheaper currency only helps until inflation catches up.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'A depreciation may help in the short run, but real productivity eventually drags competitiveness back down.' },
      examEdge: { title: 'EXAM EDGE', text: 'Distinguish price and non-price competitiveness, then judge which policies improve each one most effectively.' }
    },

    /* ============ CARD 7 – Responding to external shocks ============ */
    {
      id: 'mpg-external-shocks',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Responding to external shocks',
      lede: 'When the world changes suddenly, governments must identify the shock and choose the right policy mix.',
      ledeStyle: 'plain',

      note: { icon: 'ℹ️', tone: 'blue', text: 'Good policy starts with diagnosis — is the shock hitting <strong>demand, supply, finance or confidence?</strong>' },

      causesPosition: 'top',
      causesLabel: 'TYPES OF SHOCK',
      causesEmoji: '⚡',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'amber', icon: '⛽', head: 'Energy or commodity price spike', body: 'A cost-push, supply-side shock.' },
        { tone: 'blue',  icon: '\u{1F30D}', head: 'Global recession or trade slump', body: 'A demand-side shock from abroad.' },
        { tone: 'purple', icon: '\u{1F3E6}', head: 'Financial crisis', body: 'A shock to credit and confidence.' },
        { tone: 'rose',  icon: '\u{1F9A0}', head: 'Supply disruption or pandemic', body: 'A hit to supply and activity.' }
      ],

      flowTitle: 'THE RESPONSE TOOLKIT',
      flowEmoji: '\u{1F6E0}️',
      flow: [
        { tone: 'green', icon: '\u{1F3DB}️', title: 'Fiscal support', sub: 'Spending and tax cushions.' },
        { tone: 'green', icon: '\u{1F3E6}', title: 'Monetary action', sub: 'Rate cuts and liquidity.' },
        { tone: 'green', icon: '\u{1F4B1}', title: 'Exchange-rate response', sub: 'Let it adjust or intervene.' },
        { tone: 'green', icon: '\u{1F6E1}️', title: 'Direct controls', sub: 'Emergency measures if needed.' },
        { tone: 'green', icon: '\u{1F527}', title: 'Supply-side repair', sub: 'Fix the bottleneck.' }
      ],

      causes2Label: 'CHOOSE BY CONTEXT',
      causes2Emoji: '\u{1F9ED}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue',   icon: '\u{1F50D}', head: 'What is driving it?', body: 'Demand, supply, finance or confidence?' },
        { tone: 'amber',  icon: '\u{1F4B8}', head: 'How much fiscal space?', body: 'Can the government afford to act?' },
        { tone: 'purple', icon: '\u{1F465}', head: 'Is confidence weak or strong?', body: 'Markets and households may need reassurance.' },
        { tone: 'blue',   icon: '\u{1F4B1}', head: 'Fixed or floating?', body: 'The exchange-rate regime limits the options.' }
      ],

      causes3Label: 'RISKS OF THE WRONG RESPONSE',
      causes3Emoji: '⚠️',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'rose',  icon: '\u{1F4B8}', head: 'Debt can surge', body: 'Over-large fiscal support can pile up borrowing.' },
        { tone: 'amber', icon: '\u{1F525}', head: 'Inflation can persist', body: 'Loose policy into a supply shock can entrench it.' },
        { tone: 'purple', icon: '\u{1F40C}', head: 'Recovery can stall', body: 'Acting too little or too late lets damage spread.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'The same shock can need a different response in different countries — the best response depends on the type of shock and the room to manoeuvre.' },
      examEdge: { title: 'EXAM EDGE', text: 'In evaluation, show why one country can absorb a shock more easily than another — and that may simply not have the policy space.' }
    },

    /* ============ CARD 8 – The whole story ============ */
    {
      id: 'mpg-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'The whole story',
      lede: 'The best macro answers diagnose the problem, choose the right tool, trace the mechanism and then judge the trade-offs.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Policy evaluation is about fit — not just whether a tool works in theory, but whether it works <strong>here, now and at this scale</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F50D}', title: 'Diagnose', sub: 'What is the problem?' },
        { tone: 'blue', icon: '\u{1F6E0}️', title: 'Choose the tool', sub: 'Which policy fits?' },
        { tone: 'blue', icon: '\u{1F517}', title: 'Explain the mechanism', sub: 'How does it transmit?' },
        { tone: 'blue', icon: '\u{1F4CA}', title: 'Analyse the effects', sub: 'On the key objectives.' },
        { tone: 'blue', icon: '⚖️', title: 'Weigh the trade-offs', sub: 'Costs vs benefits.' },
        { tone: 'blue', icon: '\u{1F3AF}', title: 'Judge the result', sub: 'Does it work in context?' }
      ],

      causesLabel: 'WHICH TOOL FOR WHICH GOAL?',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'rose',   icon: '\u{1F525}', head: 'Inflation', body: 'Usually monetary policy first.' },
        { tone: 'blue',   icon: '\u{1F4C9}', head: 'Recession', body: 'Fiscal or monetary support.' },
        { tone: 'purple', icon: '⚖️', head: 'Inequality', body: 'Fiscal redistribution and public services.' },
        { tone: 'green',  icon: '\u{1F3C6}', head: 'Competitiveness', body: 'Supply-side reform and productivity.' },
        { tone: 'amber',  icon: '\u{1F4B8}', head: 'Fiscal strain', body: 'A mix of consolidation and growth.' }
      ],

      causes2Label: 'EVALUATION CHECKLIST',
      causes2Emoji: '✅',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'amber',  icon: '⏳', head: 'Time lags', body: 'How fast does it work?' },
        { tone: 'rose',   icon: '\u{1F4A5}', head: 'Side effects', body: 'What else does it hit?' },
        { tone: 'blue',   icon: '\u{1F465}', head: 'Confidence', body: 'Will markets and people believe it?' },
        { tone: 'blue',   icon: '\u{1F30D}', head: 'Global context', body: 'How do spillovers change it?' },
        { tone: 'purple', icon: '⚖️', head: 'Distributional impact', body: 'Who gains and who loses?' },
        { tone: 'green',  icon: '\u{1F6CB}️', head: 'Policy space', body: 'Is there room to act?' }
      ],

      causes3Label: 'HOW TO WRITE IT',
      causes3Emoji: '✍️',
      causes3Style: 'numbered',
      causes3: [
        { tone: 'blue', head: 'Define the issue', body: 'What is the problem and why?' },
        { tone: 'blue', head: 'Apply the policy', body: 'Which tool, and how is it used?' },
        { tone: 'blue', head: 'Trace the chain', body: 'Mechanism and effects, step by step.' },
        { tone: 'blue', head: 'Make a balanced judgement', body: 'Weigh trade-offs and context.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Good macro policy is about choosing the least-bad mix of tools in a real, uncertain world.' },
      examEdge: { title: 'EXAM EDGE', text: 'Judging effectiveness in context — country type, shock, inflation, debt, confidence and time — turns a good answer into a top one.' }
    }
  ]
};
