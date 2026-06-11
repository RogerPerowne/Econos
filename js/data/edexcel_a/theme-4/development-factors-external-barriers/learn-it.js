/* ============================================================
   ECONOS – Development Factors: External Barriers (Edexcel A 4.3.2)
   7 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   The external barriers to growth and development: the big picture,
   primary product dependence, commodity price volatility, the
   foreign-currency gap, capital flight, debt and external fragility,
   and the whole story.

   New HTML visuals:
     - foreignCurrencyGap (Card 4 — sources vs uses tank with the gap)
     - capitalFlightHub   (Card 5 — four reasons money flees, 2x2 hub)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'development-factors-external-barriers',
  topicNum: '4.3.2',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Development Factors: External Barriers',
  estTime: '22 min',
  goal: 'Explain the external barriers to growth and development — primary product dependence, commodity volatility, the foreign-currency gap, capital flight and debt — and evaluate how far they can be escaped',

  intro: {
    heroKey: 'heroExternalBarriers',
    summary: 'Some of the biggest barriers to development come from a country\'s position in the world economy. This deck works through the major external constraints. Primary product dependence leaves an economy exposed to volatile world prices and stuck with low value added. Commodity price volatility turns that dependence into unstable export earnings, budgets and investment. The foreign-currency gap means a country cannot earn enough hard currency to pay for the imported machinery, fuel and technology development needs. Capital flight drains savings and confidence when people fear instability. And debt — especially in foreign currency — can fund take-off, or trap a country when servicing it overwhelms the economy. The deck closes by linking these barriers together and asking which constraint binds hardest, and whether a country can escape it.',
    doInThis: 'Explain primary product dependence and its risks. Show how commodity price volatility destabilises development. Distinguish the foreign-currency gap from the savings gap. Explain capital flight and how to reduce it. Weigh useful borrowing against the debt trap. Link the barriers together and evaluate which binds hardest.',
    outcomes: [
      'See how external barriers fit together',
      'Explain primary product dependence',
      'Analyse commodity price volatility',
      'Explain the foreign-currency gap',
      'Explain capital flight and its effects',
      'Weigh debt as fuel vs trap'
    ],
    tip: 'External barriers matter most when they combine — weak exports, a currency shortfall, capital flight and debt can reinforce one another.',
    stages: [
      { num: 1, name: 'Learn',  sub: '7 cards \xb7 22 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'dfeb-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'External barriers to development — the big picture',
      lede: 'Some countries struggle not because they lack ambition, but because external constraints make growth unstable and hard to sustain.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'When foreign earnings are narrow, unstable or leaky, development becomes <strong>much harder</strong>.' },

      flowTitle: 'THE EXTERNAL STORY',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'amber', icon: '\u{1F33E}', title: 'Primary product reliance', sub: 'A narrow export base.' },
        { tone: 'amber', icon: '\u{1F39A}️', title: 'Commodity price swings', sub: 'World prices boom and bust.' },
        { tone: 'amber', icon: '\u{1F4C9}', title: 'Unstable export earnings', sub: 'Foreign income lurches.' },
        { tone: 'amber', icon: '\u{1F4B1}', title: 'Foreign-currency shortage', sub: 'Too little hard currency.' },
        { tone: 'amber', icon: '\u{1F3D7}️', title: 'Lower investment & imports', sub: 'Fewer capital goods.' },
        { tone: 'amber', icon: '\u{1F4C9}', title: 'Slower development', sub: 'Growth held back.' }
      ],

      causesLabel: 'FOUR KEY BARRIERS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'amber',  icon: '\u{1F33E}', head: 'Primary product dependence', body: 'A narrow, exposed export base.' },
        { tone: 'blue',   icon: '\u{1F4B1}', head: 'Foreign-currency gap', body: 'Not enough hard currency for imports.' },
        { tone: 'rose',   icon: '\u{1F4B8}', head: 'Capital flight', body: 'Savings leave the economy.' },
        { tone: 'purple', icon: '\u{1F3E6}', head: 'Debt', body: 'Repayment pressure squeezes development.' }
      ],

      causes2Label: 'WHY IT MATTERS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose',  icon: '\u{1F3A2}', head: 'Volatility', body: 'Growth and revenue become erratic.' },
        { tone: 'blue',  icon: '\u{1F3D7}️', head: 'Investment', body: 'Firms put off investing.' },
        { tone: 'green', icon: '\u{1F3E5}', head: 'Public services', body: 'Lower revenue weakens delivery.' },
        { tone: 'amber', icon: '⚠️', head: 'Vulnerability', body: 'Shocks do more damage.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'External constraints often interact — a price shock can worsen the currency gap, raise borrowing needs and trigger capital flight.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'External barriers matter because development depends on stable foreign earnings, reliable finance and the ability to import what the economy needs.' },
      examEdge: { title: 'EXAM EDGE', text: 'Frame external barriers as one set of factors — then judge whether internal factors matter more in a given context.' }
    },

    /* ============ CARD 2 – Primary product dependence ============ */
    {
      id: 'dfeb-primary-products',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Primary product dependence',
      lede: 'Relying heavily on one or two raw-material or agricultural exports can make development narrow, risky and hard to diversify.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A country that depends on a few primary exports is highly exposed to <strong>world prices and weak value added</strong>.' },

      flowTitle: 'THE DEPENDENCY TRAP',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'amber', icon: '\u{1F33E}', title: 'Narrow export base', sub: 'A few primary products dominate.' },
        { tone: 'amber', icon: '\u{1F3ED}', title: 'Limited processing', sub: 'Little value is added at home.' },
        { tone: 'amber', icon: '\u{1F4C9}', title: 'Price exposure', sub: 'Revenue swings with world prices.' },
        { tone: 'amber', icon: '\u{1F4C8}', title: 'Unstable growth', sub: 'Development becomes hard to plan.' }
      ],

      causesLabel: 'POTENTIAL BENEFITS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F4B1}', head: 'Foreign exchange', body: 'Exports earn hard currency.' },
        { tone: 'green', icon: '\u{1F465}', head: 'Jobs and income', body: 'Employment in the export sector.' },
        { tone: 'green', icon: '⚖️', head: 'Comparative advantage', body: 'Specialise where resources fit.' },
        { tone: 'green', icon: '\u{1F680}', head: 'Take-off chance', body: 'Earnings can fund development.' }
      ],

      causes2Label: 'MAIN RISKS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F3A2}', head: 'Price volatility', body: 'Export revenue swings sharply.' },
        { tone: 'rose', icon: '\u{1F4E6}', head: 'Low value added', body: 'Little processing means thin margins.' },
        { tone: 'rose', icon: '\u{1F4B1}', head: 'Dutch disease', body: 'Other sectors lose competitiveness.' },
        { tone: 'rose', icon: '\u{1F3DB}️', head: 'Fiscal instability', body: 'Government revenue is volatile.' }
      ],

      causes3Label: 'WHEN IT IS WORSE',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'blue', icon: '\u{1F3DD}️', head: 'Enclave production', body: 'Few links to the rest of the economy.' },
        { tone: 'blue', icon: '\u{1F517}', head: 'Few alternatives', body: 'No diversification to fall back on.' },
        { tone: 'blue', icon: '\u{1F3DB}️', head: 'Weak institutions', body: 'Export earnings poorly managed.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Primary product dependence is not destiny — the key question is whether export income is turned into <strong>diversification and productivity</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Primary products can fund development, but dependence becomes a problem when it leaves the economy narrow, volatile and hard to upgrade.' },
      examEdge: { title: 'EXAM EDGE', text: 'Weigh the export and income benefits against the long-run risks of volatility, low value added and weak diversification.' }
    },

    /* ============ CARD 3 – Commodity price volatility ============ */
    {
      id: 'dfeb-commodity-volatility',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Commodity price volatility',
      lede: 'When world prices boom and bust, export earnings, government revenue and development plans can swing with them.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Volatility is dangerous because development needs <strong>steady revenue</strong>, not economic whiplash.' },

      flowTitle: 'THE VOLATILITY STORY',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'amber', icon: '\u{1F39A}️', title: 'Commodity price swings', sub: 'Boom and slump.' },
        { tone: 'amber', icon: '\u{1F4B1}', title: 'Export earnings move', sub: 'Up in booms, down in slumps.' },
        { tone: 'amber', icon: '\u{1F3DB}️', title: 'Tax and spending', sub: 'Government budgets follow.' },
        { tone: 'amber', icon: '\u{1F4C8}', title: 'Investment & development', sub: 'Sustained or set back.' }
      ],

      causesLabel: 'WHO FEELS IT',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'blue', icon: '\u{1F3DB}️', head: 'Government', body: 'Budgets become unstable.' },
        { tone: 'blue', icon: '\u{1F3ED}', head: 'Firms', body: 'Investment plans are delayed.' },
        { tone: 'blue', icon: '\u{1F465}', head: 'Workers', body: 'Jobs and wages become insecure.' },
        { tone: 'blue', icon: '\u{1F4B1}', head: 'Currency & debt', body: 'Exchange rate and borrowing costs swing.' }
      ],

      causes2Label: 'WHY BOOMS CAN MISLEAD',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '\u{1F381}', head: 'Temporary windfalls', body: 'A boom is not a permanent gain.' },
        { tone: 'rose', icon: '\u{1F634}', head: 'Over-reliance', body: 'Easy gains delay diversification.' },
        { tone: 'rose', icon: '\u{1F4A5}', head: 'Hard landings', body: 'Slumps expose the weakness.' }
      ],

      causes3Label: 'HOW COUNTRIES COPE',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'green', icon: '\u{1F3E6}', head: 'Stabilisation funds', body: 'Save in good times, spend in bad.' },
        { tone: 'green', icon: '\u{1F500}', head: 'Diversification', body: 'Broaden the export base.' },
        { tone: 'green', icon: '\u{1F4C5}', head: 'Long-term budgeting', body: 'Plan beyond the boom.' },
        { tone: 'green', icon: '\u{1F3DB}️', head: 'Better institutions', body: 'Manage the revenue well.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A commodity boom can support development — but only if the gains are <strong>managed and the economy diversifies</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Volatility turns export dependence into unstable growth, unstable budgets and unstable development.' },
      examEdge: { title: 'EXAM EDGE', text: 'Link volatility to investment and growth: planning is harder when revenue swings, so development slows.' }
    },

    /* ============ CARD 4 – The foreign currency gap ============ */
    {
      id: 'dfeb-foreign-currency-gap',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'The foreign currency gap',
      lede: 'A country may want to invest and import vital goods, but still lack the foreign exchange needed to pay for them.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Development needs imported machinery, medicine, fuel and technology — and those imports need <strong>foreign currency</strong>.' },

      visualKey: 'foreignCurrencyGap',
      visualLabel: 'THE GAP',
      visualEmoji: '\u{1F517}',

      causesLabel: 'WHY IT HAPPENS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Weak exports', body: 'Low foreign-currency earnings.' },
        { tone: 'rose', icon: '\u{1F4E5}', head: 'Import dependence', body: 'Capital goods and fuel bought abroad.' },
        { tone: 'rose', icon: '\u{1F4A5}', head: 'Price shocks', body: 'Imports suddenly cost more.' },
        { tone: 'rose', icon: '\u{1FA99}', head: 'Limited reserves', body: 'Little buffer to draw on.' }
      ],

      causes2Label: 'WHY IT MATTERS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'amber', icon: '\u{1F6D2}', head: 'Import rationing', body: 'Less of what development needs.' },
        { tone: 'amber', icon: '\u{1F3D7}️', head: 'Lower investment', body: 'Fewer capital goods imported.' },
        { tone: 'amber', icon: '\u{1F4B1}', head: 'Currency pressure', body: 'The exchange rate weakens.' },
        { tone: 'amber', icon: '\u{1F3E6}', head: 'More borrowing', body: 'Debt taken on to cover the gap.' }
      ],

      causes3Label: 'HOW THE GAP IS FILLED',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'blue',  icon: '\u{1F4B3}', head: 'Borrowing', body: 'Helpful, but can build up debt.' },
        { tone: 'blue',  icon: '\u{1F91D}', head: 'Aid', body: 'Support, but often unreliable.' },
        { tone: 'green', icon: '\u{1F3D7}️', head: 'FDI', body: 'Brings capital and skills.' },
        { tone: 'green', icon: '\u{1F4E6}', head: 'Export growth', body: 'The most sustainable fix.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A savings gap is about finding the money to invest; a <strong>foreign-currency gap</strong> is about too little hard currency to buy what development needs.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'The foreign-currency gap matters because development is not just about demand — it is about being able to pay for key imports.' },
      examEdge: { title: 'EXAM EDGE', text: 'Distinguish the savings gap from the foreign-exchange gap, and link both to investment, productivity and growth.' }
    },

    /* ============ CARD 5 – Capital flight ============ */
    {
      id: 'dfeb-capital-flight',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Capital flight',
      lede: 'Money that could have financed domestic growth leaves the country when people fear instability, inflation, poor returns or weak institutions.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Capital flight drains savings, weakens confidence and leaves <strong>less finance for domestic investment</strong>.' },

      visualKey: 'capitalFlightHub',
      visualLabel: 'WHY MONEY LEAVES',
      visualEmoji: '\u{1F517}',

      causesLabel: 'WHAT IT DOES',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'rose', icon: '\u{1F3D7}️', head: 'Less investment', body: 'Fewer funds for firms and infrastructure.' },
        { tone: 'rose', icon: '\u{1F4B1}', head: 'Weaker currency', body: 'More pressure on the exchange rate.' },
        { tone: 'rose', icon: '\u{1F3DB}️', head: 'Lower tax revenue', body: 'Less income and wealth captured.' },
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Slower development', body: 'Lost capital holds productivity down.' }
      ],

      causes2Label: 'NOT ALL OUTFLOWS ARE THE SAME',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2Cols: 2,
      causes2: [
        { tone: 'green', icon: '\u{1F310}', head: 'Normal investment', body: 'Planned, long-term diversification abroad — not financially harmful.' },
        { tone: 'rose',  icon: '\u{1F3C3}', head: 'Capital flight', body: 'Sudden and fear-driven, reactive and damaging to the economy.' }
      ],

      causes3Label: 'HOW TO REDUCE IT',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'blue', icon: '\u{1F4DC}', head: 'Stable policy', body: 'Predictable, credible rules.' },
        { tone: 'blue', icon: '⚖️', head: 'Strong institutions', body: 'Rule of law and property rights.' },
        { tone: 'blue', icon: '\u{1F4C9}', head: 'Macro stability', body: 'Low inflation and a stable currency.' },
        { tone: 'blue', icon: '\u{1F44D}', head: 'Build confidence', body: 'Attract and retain investment.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Capital flight is both a symptom and a cause — it reflects weak confidence, then makes development harder by draining finance.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Capital flight leaves a country with less of its own savings to invest, just when it needs them most.' },
      examEdge: { title: 'EXAM EDGE', text: 'Distinguish normal outward investment from fear-driven capital flight, and link flight to lower investment and a weaker currency.' }
    },

    /* ============ CARD 6 – Debt and external fragility ============ */
    {
      id: 'dfeb-debt-fragility',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Debt and external fragility',
      lede: 'Borrowing can fund development, but high debt — especially in foreign currency — can make countries more exposed to shocks and crises.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Debt is helpful when it builds <strong>productive capacity</strong> — but dangerous when servicing it overwhelms the economy.' },

      pairFirst: true,
      pairLabel: 'Useful borrowing vs Debt trap',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'green', icon: '\u{1F3D7}️', iconStyle: 'circle', label: 'Useful borrowing',
        points: ['Funds infrastructure and energy', 'Raises productivity', 'Returns exceed the borrowing cost', 'Supports future growth']
      },
      right: {
        tone: 'rose', icon: '\u{1F578}️', iconStyle: 'circle', label: 'Debt trap',
        points: ['Borrowing to repay old debt', 'Rising interest burden', 'Crowds out spending', 'Default risk and lost market access']
      },

      flowTitle: 'WHY FOREIGN-CURRENCY DEBT IS RISKY',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'rose', icon: '\u{1F4B1}', title: 'Currency depreciates', sub: 'The exchange rate falls.' },
        { tone: 'rose', icon: '\u{1F4C8}', title: 'Repayment cost rises', sub: 'More local currency needed.' },
        { tone: 'rose', icon: '\u{1F3DB}️', title: 'Fiscal pressure', sub: 'Budgets come under strain.' },
        { tone: 'rose', icon: '✂️', title: 'Cuts or crisis', sub: 'Services are cut or a crisis hits.' }
      ],

      causesLabel: 'WHAT EXTERNAL DEBT LOOKS LIKE',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'blue', icon: '\u{1F3D7}️', head: 'Borrow to invest', body: 'Capital projects funded by lending.' },
        { tone: 'amber', icon: '\u{1F4CA}', head: 'High service ratio', body: 'A large share of income repays debt.' },
        { tone: 'rose', icon: '\u{1F4A5}', head: 'A shock hits', body: 'Prices, rates or the currency move.' },
        { tone: 'rose', icon: '\u{1F6AB}', head: 'Lost market access', body: 'Borrowing dries up.' }
      ],

      causes2Label: 'EVALUATION',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F680}', head: 'Can finance take-off', body: 'If invested productively.' },
        { tone: 'blue',  icon: '\u{1F310}', head: 'Context matters', body: 'Currency, maturity and use.' },
        { tone: 'blue',  icon: '⚖️', head: 'Institutions matter', body: 'Good management lowers the risk.' },
        { tone: 'amber', icon: '\u{1F4C9}', head: 'Sustainability', body: 'Depends on growth vs interest.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Debt is a tool, not a verdict: it raises future capacity if invested well, but <strong>foreign-currency debt magnifies every shock</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Borrowing can fund development or trap it — what matters is whether the money is invested productively and the debt is sustainable.' },
      examEdge: { title: 'EXAM EDGE', text: 'In evaluation, distinguish productive borrowing from unsustainable debt, and stress foreign-currency exposure.' }
    },

    /* ============ CARD 7 – The whole story ============ */
    {
      id: 'dfeb-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'The whole story',
      lede: 'Strong answers link external barriers together, then judge which constraint is most severe and whether the country can escape it.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'External constraints matter most when they <strong>combine</strong> to weaken foreign earnings, investment and resilience at once.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F33E}', title: 'Primary product dependence', sub: 'Narrow export base.' },
        { tone: 'green', icon: '\u{1F39A}️', title: 'Commodity price volatility', sub: 'Unstable earnings.' },
        { tone: 'green', icon: '\u{1F4B1}', title: 'Foreign-currency gap', sub: 'Cannot pay for imports.' },
        { tone: 'green', icon: '\u{1F3E6}', title: 'More borrowing', sub: 'Debt builds up.' },
        { tone: 'green', icon: '\u{1F4B8}', title: 'Capital flight', sub: 'Savings leave.' },
        { tone: 'green', icon: '\u{1F4C9}', title: 'Slower development', sub: 'Growth held back.' }
      ],

      causesLabel: 'COMMON EVALUATION POINTS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'blue', icon: '\u{1F500}', head: 'Diversification', body: 'Broader exports reduce the risk.' },
        { tone: 'blue', icon: '⚖️', head: 'Institutions', body: 'Good institutions manage shocks.' },
        { tone: 'blue', icon: '⏳', head: 'Short vs long run', body: 'Timing changes the impact.' },
        { tone: 'blue', icon: '\u{1F310}', head: 'Context', body: 'Depends on the country and policy.' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '❌', head: 'All primary is bad', body: 'Primary exports can fund development.' },
        { tone: 'rose', icon: '❌', head: 'All debt is harmful', body: 'Productive borrowing can pay off.' },
        { tone: 'rose', icon: '\u{1F30D}', head: 'Ignoring context', body: 'Country and policy decide the outcome.' }
      ],

      causes3Label: 'HOW TO WRITE IT',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'green', icon: '\u{1F50D}', head: 'Identify the barrier', body: 'Name the external constraint.' },
        { tone: 'green', icon: '\u{1F517}', head: 'Explain the mechanism', body: 'Trace it through to growth.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Apply to development', body: 'Link to investment and incomes.' },
        { tone: 'green', icon: '⚖️', head: 'Evaluate', body: 'Context, policy and escape routes.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The same country can face several constraints at once — the strongest answers show how they interact rather than treating them as isolated.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'External barriers interlock — judge which constraint binds hardest, and whether institutions, diversification and policy can loosen it.' },
      examEdge: { title: 'EXAM EDGE', text: 'Show the chain, then evaluate: structural barriers can be temporary or manageable with better policy.' }
    }
  ]
};
