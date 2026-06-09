/* ============================================================
   ECONOS – Development Strategies: Interventionist (Edexcel A 4.3.3)
   8 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   Government-led development strategies: the big picture, human capital,
   protectionism and infant industries, managed exchange rates,
   infrastructure, joint ventures, buffer stocks, and the whole story.

   Chart-engine spec:
     - bufferStockBands (Card 7 — price oscillating between a floor and ceiling)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'development-strategies-interventionist',
  topicNum: '4.3.3',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Development Strategies: Interventionist',
  estTime: '24 min',
  goal: 'Explain the main interventionist development strategies — human capital, protectionism, managed rates, infrastructure, joint ventures and buffer stocks — and evaluate state capacity to deliver them',

  intro: {
    heroKey: 'heroGlobe',
    summary: 'Interventionist development strategies have the government guide development directly rather than leaving outcomes to markets — building capabilities, protecting key sectors, stabilising prices and shaping structural change. This deck works through the toolkit. Human capital investment raises the productivity of people through education, training and health. Protectionism shields infant industries while they learn and scale. Managed exchange rates balance market signals with policy control. Infrastructure provision lowers costs across the whole economy. Joint ventures and FDI rules bring in foreign capability while building domestic capacity. And buffer stocks try to smooth volatile commodity prices. The recurring tension is the core trade-off: intervention can correct market failures and build capacity, but it also risks government failure — corruption, capture, misallocation and fiscal cost — so state capacity and targeting decide whether it works.',
    doInThis: 'Set out the interventionist toolkit and the core trade-off. Explain human-capital investment and protectionism. Weigh managed exchange rates and infrastructure provision. Judge joint ventures and buffer stocks. Evaluate when state-led strategies succeed or fail.',
    outcomes: [
      'Explain the interventionist toolkit',
      'Analyse human-capital investment',
      'Evaluate protectionism and infant industries',
      'Weigh managed exchange rates and infrastructure',
      'Judge joint ventures and buffer stocks',
      'Evaluate state capacity to deliver'
    ],
    tip: 'Intervention is judged on the core trade-off: can the state correct a market failure without creating a bigger government failure?',
    stages: [
      { num: 1, name: 'Learn',  sub: '8 cards \xb7 24 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'dsint-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Interventionist strategies — the big picture',
      lede: 'Governments sometimes guide development directly by building capabilities, protecting key sectors, stabilising prices and shaping structural change.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Interventionist strategies try to <strong>build productive capacity and steer development</strong>, not just leave outcomes to markets.' },

      causesLabel: 'THE TOOLKIT',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'blue',   icon: '\u{1F393}', head: 'Human capital', body: 'Invest in education, skills and health.' },
        { tone: 'amber',  icon: '\u{1F6E1}️', head: 'Protectionism', body: 'Shield infant industries.' },
        { tone: 'green',  icon: '\u{1F4B1}', head: 'Managed rates', body: 'Steer the exchange rate.' },
        { tone: 'purple', icon: '\u{1F6E3}️', head: 'Infrastructure', body: 'Provide the economy-wide backbone.' },
        { tone: 'blue',   icon: '\u{1F91D}', head: 'Joint ventures', body: 'Partner with global firms.' },
        { tone: 'amber',  icon: '\u{1F4E6}', head: 'Buffer stocks', body: 'Stabilise commodity prices.' }
      ],

      causes2Label: 'WHY GOVERNMENTS INTERVENE',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose',   icon: '⚠️', head: 'Market failures', body: 'Markets under-provide key goods.' },
        { tone: 'amber',  icon: '\u{1F423}', head: 'Infant industries', body: 'New sectors need time to grow.' },
        { tone: 'rose',   icon: '\u{1F3A2}', head: 'Volatility', body: 'Prices and flows swing sharply.' },
        { tone: 'blue',   icon: '\u{1F9E9}', head: 'Coordination', body: 'Big projects need joining up.' },
        { tone: 'purple', icon: '\u{1F52D}', head: 'Long-term vision', body: 'Markets can be short-termist.' },
        { tone: 'green',  icon: '⚖️', head: 'Equity', body: 'Spread the gains more fairly.' }
      ],

      pairLabel: 'Potential gains vs Government failure risks',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'green', icon: '✅', iconStyle: 'circle', label: 'Potential gains',
        points: ['Build capabilities and capacity', 'Correct market failures', 'Support structural change']
      },
      right: {
        tone: 'rose', icon: '⚠️', iconStyle: 'circle', label: 'Government failure risks',
        points: ['Corruption and capture', 'Misallocation of resources', 'High fiscal cost and complacency']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Intervention can build long-term capacity and tackle market failure — but it must beat the risk of <strong>government failure</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Interventionist strategies use the state to build capacity and steer development — judged on whether it can outperform the market.' },
      examEdge: { title: 'EXAM EDGE', text: 'Define the strategy, explain the mechanism, apply it to a country, then evaluate state capacity and the risk of government failure.' }
    },

    /* ============ CARD 2 – Human capital ============ */
    {
      id: 'dsint-human-capital',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Human capital first',
      lede: 'Education, training and health build people’s skills and wellbeing, which raise labour productivity and make broader development possible.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Human capital is intervention aimed at <strong>people</strong> — stronger skills and health raise productivity across the economy.' },

      flowTitle: 'THE PRODUCTIVITY CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F3EB}', title: 'Schooling & training', sub: 'Build skills and knowledge.' },
        { tone: 'blue', icon: '\u{1F9E0}', title: 'Skills', sub: 'A more capable workforce.' },
        { tone: 'blue', icon: '\u{1F4C8}', title: 'Labour productivity', sub: 'More output per worker.' },
        { tone: 'blue', icon: '\u{1F4B7}', title: 'Higher incomes', sub: 'Better-paid jobs.' },
        { tone: 'blue', icon: '\u{1F3DB}️', title: 'Tax base', sub: 'Revenue to reinvest.' },
        { tone: 'blue', icon: '\u{1F3E1}', title: 'Development', sub: 'Broader living standards.' }
      ],

      causesLabel: 'WHY IT MATTERS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F4D6}', head: 'Literacy & numeracy', body: 'The base for all other skills.' },
        { tone: 'green', icon: '\u{1F6E0}️', head: 'Technical skills', body: 'For higher-value sectors.' },
        { tone: 'green', icon: '\u{1F3E5}', head: 'Health & attendance', body: 'Healthy people work and learn.' },
        { tone: 'green', icon: '\u{1F4F1}', head: 'Technology absorption', body: 'Skills let firms adopt new tech.' }
      ],

      causes2Label: 'POLICY TOOLS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue', icon: '\u{1F3EB}', head: 'Schools', body: 'Universal basic education.' },
        { tone: 'blue', icon: '\u{1F6E0}️', head: 'Vocational training', body: 'Job-ready technical skills.' },
        { tone: 'blue', icon: '\u{1F393}', head: 'Universities', body: 'Higher-level skills and research.' },
        { tone: 'blue', icon: '\u{1F489}', head: 'Public health', body: 'Vaccination and basic care.' }
      ],

      causes3Label: 'EVALUATION',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'rose', icon: '⏳', head: 'Long time lags', body: 'Benefits take years to appear.' },
        { tone: 'rose', icon: '\u{1F4B8}', head: 'Financing pressure', body: 'Costly for tight budgets.' },
        { tone: 'rose', icon: '✈️', head: 'Brain drain', body: 'Skilled workers may emigrate.' },
        { tone: 'rose', icon: '\u{1F500}', head: 'Skills mismatch', body: 'Training may not fit the jobs.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Investing in people raises productivity, incomes and the capacity for sustained development.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Human capital is a long-run intervention — slower to pay off, but foundational for every other strategy.' },
      examEdge: { title: 'EXAM EDGE', text: 'Link education and health to productivity, incomes and the tax base — but recognise the long lags and financing strain.' }
    },

    /* ============ CARD 3 – Protectionism and infant industries ============ */
    {
      id: 'dsint-protectionism',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Protectionism and infant industries',
      lede: 'Governments may shield young domestic industries from foreign competition so they can learn, scale and survive.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Protection can buy <strong>learning time</strong> — but only if firms become genuinely competitive.' },

      flowTitle: 'THE INFANT INDUSTRY STORY',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'amber', icon: '\u{1F423}', title: 'Young firms, high costs', sub: 'Not yet competitive.' },
        { tone: 'amber', icon: '\u{1F6E1}️', title: 'Temporary protection', sub: 'Shielded from imports.' },
        { tone: 'amber', icon: '\u{1F4C8}', title: 'Learning & scale', sub: 'Costs fall over time.' },
        { tone: 'amber', icon: '\u{1F3C1}', title: 'Lower long-run costs', sub: 'Now able to compete.' }
      ],

      causesLabel: 'POLICY TOOLS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'blue', icon: '\u{1F4B7}', head: 'Tariffs', body: 'Taxes on competing imports.' },
        { tone: 'blue', icon: '\u{1F6AB}', head: 'Import quotas', body: 'Limits on import volumes.' },
        { tone: 'blue', icon: '\u{1F4B0}', head: 'Subsidies', body: 'Financial support to producers.' },
        { tone: 'blue', icon: '\u{1F4CB}', head: 'Local-content rules', body: 'Require domestic inputs.' }
      ],

      causes2Label: 'WHEN IT CAN WORK',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '⏱️', head: 'Time-limited', body: 'Support has a clear end date.' },
        { tone: 'green', icon: '\u{1F4E6}', head: 'Export discipline', body: 'Firms must still compete abroad.' },
        { tone: 'green', icon: '\u{1F3C1}', head: 'Competition kept', body: 'Some rivalry remains.' },
        { tone: 'green', icon: '\u{1F6AA}', head: 'Credible exit', body: 'Protection is genuinely removed.' }
      ],

      causes3Label: 'THE RISKS',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Inefficiency', body: 'Sheltered firms stay weak.' },
        { tone: 'rose', icon: '\u{1F4B8}', head: 'Higher prices', body: 'Consumers pay more.' },
        { tone: 'rose', icon: '\u{1F91D}', head: 'Rent-seeking', body: 'Lobbying to keep protection.' },
        { tone: 'rose', icon: '⚔️', head: 'Retaliation', body: 'Trading partners hit back.' }
      ],

      pairLabel: 'Success vs Failure',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'green', icon: '✅', iconStyle: 'circle', label: 'When it succeeds',
        points: ['Protection is temporary', 'Firms are pushed to improve', 'They go on to export']
      },
      right: {
        tone: 'rose', icon: '❌', iconStyle: 'circle', label: 'When it fails',
        points: ['Protection becomes permanent', 'Firms stay inefficient', 'Consumers keep paying']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Strategic, well-designed protection can help infant industries grow — but it is hard to remove and easy to abuse.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Protection can give young industries time to become competitive — but only if it is temporary and disciplined.' },
      examEdge: { title: 'EXAM EDGE', text: 'In evaluation, stress that the case for protection depends on it being time-limited and tied to genuine improvement.' }
    },

    /* ============ CARD 4 – Managed exchange rates ============ */
    {
      id: 'dsint-managed-rates',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Managed exchange rates',
      lede: 'Governments may manage the currency to support competitiveness, stability or development goals.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A managed exchange rate tries to balance <strong>market signals with policy control</strong>.' },

      causesPosition: 'top',
      causesLabel: 'WHY MANAGE THE RATE?',
      causesEmoji: '\u{1F517}',
      causes: [
        { tone: 'green', icon: '\u{1F4E6}', head: 'Export competitiveness', body: 'A weaker rate boosts exports.' },
        { tone: 'green', icon: '\u{1F4C9}', head: 'Inflation control', body: 'A stronger rate curbs import prices.' },
        { tone: 'green', icon: '\u{1FA99}', head: 'Reserve management', body: 'Build and guard reserves.' },
        { tone: 'green', icon: '⚖️', head: 'Stability & confidence', body: 'Predictability for investors.' }
      ],

      flowTitle: 'THE POLICY MECHANISM',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F3E6}', title: 'Central bank acts', sub: 'It enters the FX market.' },
        { tone: 'blue', icon: '\u{1F504}', title: 'Buys or sells currency', sub: 'Using reserves.' },
        { tone: 'blue', icon: '\u{1F4CA}', title: 'Demand & supply shift', sub: 'For the currency.' },
        { tone: 'blue', icon: '\u{1F4B1}', title: 'Rate is influenced', sub: 'Moved toward the target.' }
      ],

      causes2Label: 'POSSIBLE GAINS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F52E}', head: 'Predictability', body: 'A steadier planning environment.' },
        { tone: 'green', icon: '\u{1F4E6}', head: 'Export support', body: 'A competitive rate aids trade.' },
        { tone: 'green', icon: '\u{1F6E1}️', head: 'Less volatility', body: 'Smooths out extreme swings.' },
        { tone: 'green', icon: '\u{1F3ED}', head: 'Industrial policy', body: 'Can support target sectors.' }
      ],

      causes3Label: 'POSSIBLE COSTS',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'rose', icon: '\u{1FA99}', head: 'Reserves run down', body: 'Defending a rate is costly.' },
        { tone: 'rose', icon: '⚖️', head: 'Distortion', body: 'Prices may misalign.' },
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Misalignment risk', body: 'The target may be wrong.' },
        { tone: 'rose', icon: '⚔️', head: 'Retaliation', body: 'Accusations of manipulation.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A managed rate can support stability and development goals — but defending it drains reserves and can distort prices.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Managing the rate gives the state a lever over competitiveness and stability — at the cost of reserves and flexibility.' },
      examEdge: { title: 'EXAM EDGE', text: 'Explain how the central bank moves the rate, then weigh competitiveness gains against reserve costs and retaliation.' }
    },

    /* ============ CARD 5 – Infrastructure ============ */
    {
      id: 'dsint-infrastructure',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Infrastructure as a development platform',
      lede: 'Transport, power, water, broadband, schools and ports act as the backbone of the economy — lowering costs, connecting people and firms, and lifting productivity.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Infrastructure is a system-wide intervention — it <strong>lowers costs for almost every firm</strong>.' },

      causesPosition: 'top',
      causesLabel: 'THE NETWORK EFFECT',
      causesEmoji: '\u{1F517}',
      causes: [
        { tone: 'blue',   icon: '\u{1F69A}', head: 'Transport', body: 'Roads, rail and ports.' },
        { tone: 'amber',  icon: '⚡', head: 'Power', body: 'Reliable electricity.' },
        { tone: 'green',  icon: '\u{1F6B0}', head: 'Water', body: 'Clean water and sanitation.' },
        { tone: 'purple', icon: '\u{1F4F6}', head: 'Broadband', body: 'Digital connectivity.' },
        { tone: 'blue',   icon: '\u{1F3E5}', head: 'Public services', body: 'Health and education.' },
        { tone: 'green',  icon: '\u{1F3ED}', head: 'Firms & workers', body: 'All connected to the network.' }
      ],

      flowTitle: 'FROM INFRASTRUCTURE TO PRODUCTIVITY',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F6E3}️', title: 'Better infrastructure', sub: 'The platform is built.' },
        { tone: 'green', icon: '\u{1F4C9}', title: 'Lower costs', sub: 'Cheaper to produce and trade.' },
        { tone: 'green', icon: '\u{1F3D7}️', title: 'More investment', sub: 'Private capital follows.' },
        { tone: 'green', icon: '\u{1F4C8}', title: 'Higher productivity', sub: 'Across many sectors at once.' }
      ],

      causes2Label: 'WHY STATES OFTEN LEAD',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue', icon: '\u{1F3ED}', head: 'Natural monopoly', body: 'One network is most efficient.' },
        { tone: 'blue', icon: '\u{1F9E9}', head: 'Coordination', body: 'Big projects need joining up.' },
        { tone: 'blue', icon: '⏳', head: 'Long payback', body: 'Returns take many years.' },
        { tone: 'blue', icon: '\u{1F30D}', head: 'Public goods', body: 'Wide, shared benefits.' }
      ],

      causes3Label: 'THE RISKS',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'rose', icon: '\u{1F3E6}', head: 'Debt exposure', body: 'Large borrowing to build.' },
        { tone: 'rose', icon: '\u{1F418}', head: 'White elephants', body: 'Costly projects with little use.' },
        { tone: 'rose', icon: '\u{1F575}️', head: 'Corruption', body: 'Contracts and procurement abused.' },
        { tone: 'rose', icon: '\u{1F527}', head: 'Poor maintenance', body: 'Networks fall into disrepair.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Infrastructure raises capacity across the whole economy — but it is expensive, slow and easy to mismanage.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Infrastructure is a platform intervention — its gains spread across sectors, but so do the costs of getting it wrong.' },
      examEdge: { title: 'EXAM EDGE', text: 'Stress the economy-wide, multiplier effect of infrastructure — then weigh debt, maintenance and corruption risks.' }
    },

    /* ============ CARD 6 – Joint ventures ============ */
    {
      id: 'dsint-joint-ventures',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Joint ventures with global companies',
      lede: 'Governments may encourage foreign firms to partner with local firms so domestic businesses gain technology, skills and market access.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Joint ventures aim to turn FDI into <strong>learning, spillovers and domestic capability</strong>.' },

      flowTitle: 'THE JOINT-VENTURE STORY',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'purple', icon: '\u{1F30D}', title: 'Global firm + local firm', sub: 'They partner up.' },
        { tone: 'purple', icon: '\u{1F91D}', title: 'Joint venture', sub: 'Shared risk and ownership.' },
        { tone: 'purple', icon: '\u{1F4F1}', title: 'Skills & technology', sub: 'Transferred to local staff.' },
        { tone: 'purple', icon: '\u{1F4C8}', title: 'Domestic capability', sub: 'Local firms grow stronger.' }
      ],

      causesLabel: 'POTENTIAL GAINS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F4F1}', head: 'Technology transfer', body: 'Know-how passes to local firms.' },
        { tone: 'green', icon: '\u{1F9D1}‍\u{1F3ED}', head: 'Management skills', body: 'Better practices spread.' },
        { tone: 'green', icon: '\u{1F4E6}', head: 'Market access', body: 'Into global supply chains.' },
        { tone: 'green', icon: '\u{1F517}', head: 'Supply-chain links', body: 'Local suppliers are developed.' }
      ],

      causes2Label: 'WHY GOVERNMENTS PROMOTE THEM',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue', icon: '\u{1F3D7}️', head: 'Build capability', body: 'Grow domestic firms faster.' },
        { tone: 'blue', icon: '\u{1F4BC}', head: 'Keep more value', body: 'More gains stay onshore.' },
        { tone: 'blue', icon: '\u{1F9E0}', head: 'Spillovers', body: 'Skills diffuse through the economy.' },
        { tone: 'blue', icon: '⚖️', head: 'Bargaining', body: 'Better terms than pure FDI.' }
      ],

      causes3Label: 'THE LIMITS',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'rose', icon: '\u{1F512}', head: 'Weak transfer', body: 'Foreign firms guard their secrets.' },
        { tone: 'rose', icon: '\u{1F4B8}', head: 'Profit sharing', body: 'Returns flow partly abroad.' },
        { tone: 'rose', icon: '⚖️', head: 'Conflict of interest', body: 'Partners’ goals may clash.' },
        { tone: 'rose', icon: '\u{1F3DB}️', head: 'Capacity needed', body: 'Local firms must be ready.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Success depends on strong education, capable institutions and contract enforcement, so genuine local capability can grow.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Joint ventures try to capture more of the value of FDI — turning foreign investment into lasting domestic capability.' },
      examEdge: { title: 'EXAM EDGE', text: 'Explain how joint ventures aim for technology and skills transfer — then judge whether local firms can actually absorb them.' }
    },

    /* ============ CARD 7 – Buffer stocks ============ */
    {
      id: 'dsint-buffer-stocks',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Buffer stock schemes',
      lede: 'Governments or agencies may buy commodities when prices are low and sell when prices are high to reduce instability.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Buffer stocks try to smooth commodity price volatility — but they are <strong>difficult and costly to sustain</strong>.' },

      visualKey: 'bufferStockBands',
      visualLabel: 'THE PRICE-STABILISATION STORY',
      visualEmoji: '\u{1F517}',
      visualCaption: 'The agency buys at the floor to support the price and sells from stock at the ceiling to cap it — keeping price within a stability band.',

      flowTitle: 'HOW IT WORKS',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F4C9}', title: 'Prices fall', sub: 'Below the floor.' },
        { tone: 'blue', icon: '\u{1F3E6}', title: 'Authority buys & stores', sub: 'Supporting the price.' },
        { tone: 'blue', icon: '\u{1F4C8}', title: 'Prices rise', sub: 'Above the ceiling.' },
        { tone: 'blue', icon: '\u{1F4E4}', title: 'Authority releases stock', sub: 'Capping the price.' }
      ],

      causesLabel: 'WHY STABILITY MATTERS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F468}‍\u{1F33E}', head: 'Steadier incomes', body: 'Farmers can plan ahead.' },
        { tone: 'green', icon: '\u{1F4B1}', head: 'Export revenue', body: 'Foreign earnings are smoother.' },
        { tone: 'green', icon: '\u{1F3D7}️', head: 'Better planning', body: 'Firms invest with confidence.' },
        { tone: 'green', icon: '\u{1F465}', head: 'Less poverty risk', body: 'Fewer income shocks for the poor.' }
      ],

      causes2Label: 'THE PROBLEMS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F3ED}', head: 'Storage costs', body: 'Expensive to hold stock.' },
        { tone: 'rose', icon: '\u{1F34E}', head: 'Perishability', body: 'Some goods cannot be stored.' },
        { tone: 'rose', icon: '\u{1F4B8}', head: 'Financing strain', body: 'Buying takes large funds.' },
        { tone: 'rose', icon: '\u{1F3AF}', head: 'Wrong price band', body: 'A bad band drains the scheme.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Many developing economies depend on a few primary commodities — but buffer stocks need strong capacity and funding to work.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Buffer stocks aim to stabilise prices and incomes — but storage, finance and setting the right band make them hard to sustain.' },
      examEdge: { title: 'EXAM EDGE', text: 'Explain the buy-low / sell-high mechanism, then evaluate storage, financing and the difficulty of choosing the band.' }
    },

    /* ============ CARD 8 – The whole story ============ */
    {
      id: 'dsint-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'The whole story',
      lede: 'Strong answers weigh interventionist strategies as attempts to solve structural problems, while judging state capacity and unintended consequences.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Interventionist strategies work best when they <strong>build productivity, tackle market failure and are well targeted</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F3DB}️', title: 'State action', sub: 'Targeted intervention.' },
        { tone: 'green', icon: '\u{1F4C8}', title: 'Higher productivity', sub: 'Capacity is built.' },
        { tone: 'green', icon: '\u{1F500}', title: 'Diversification', sub: 'New sectors emerge.' },
        { tone: 'green', icon: '\u{1F4E6}', title: 'More exports', sub: 'And foreign earnings.' },
        { tone: 'green', icon: '\u{1F477}', title: 'New jobs', sub: 'Across the economy.' },
        { tone: 'green', icon: '\u{1F3E1}', title: 'Development', sub: 'Broader living standards.' }
      ],

      causesLabel: 'WHEN THEY CAN SUCCEED',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F3DB}️', head: 'Capable institutions', body: 'The state can deliver.' },
        { tone: 'green', icon: '\u{1F3AF}', head: 'Clear objectives', body: 'Well-targeted goals.' },
        { tone: 'green', icon: '\u{1F9E9}', head: 'Complementary policy', body: 'Reforms reinforce each other.' },
        { tone: 'green', icon: '⏳', head: 'Patience', body: 'Time for results to appear.' }
      ],

      causes2Label: 'WHEN THEY CAN FAIL',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F575}️', head: 'Corruption & capture', body: 'Policy serves vested interests.' },
        { tone: 'rose', icon: '\u{1F3DA}️', head: 'Weak capacity', body: 'The state cannot deliver.' },
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Poor incentives', body: 'Sheltered firms stay weak.' },
        { tone: 'rose', icon: '\u{1F4B8}', head: 'Fiscal strain', body: 'Costs outrun the budget.' }
      ],

      causes3Label: 'COMPARE THE STRATEGIES',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'blue',   icon: '\u{1F393}', head: 'Human capital', body: 'Slow but foundational.' },
        { tone: 'amber',  icon: '\u{1F6E1}️', head: 'Protectionism', body: 'Risky and hard to remove.' },
        { tone: 'green',  icon: '\u{1F4B1}', head: 'Managed rates', body: 'Costly to defend.' },
        { tone: 'purple', icon: '\u{1F6E3}️', head: 'Infrastructure', body: 'Wide gains, big spend.' },
        { tone: 'blue',   icon: '\u{1F91D}', head: 'Joint ventures', body: 'Capability if absorbed.' },
        { tone: 'amber',  icon: '\u{1F4E6}', head: 'Buffer stocks', body: 'Stabilising but fragile.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Intervention is about building capability, not just spending — judge it on state capacity, targeting and the risk of government failure.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Interventionist strategies can solve problems markets miss — but only where the state has the capacity to deliver them well.' },
      examEdge: { title: 'EXAM EDGE', text: 'The strongest answers compare strategies, apply them to a country, and judge state capacity against government-failure risks.' }
    }
  ]
};
