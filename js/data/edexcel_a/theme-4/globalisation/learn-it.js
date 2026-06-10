/* ============================================================
   ECONOS – Globalisation (Edexcel A 4.1.1)
   6 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   Opens Theme 4 (A Global Perspective): defines globalisation,
   explains what drove it, traces global supply chains, then
   weighs the gains against the costs and risks before a balanced
   whole-story judgement.

   Card patterns (no two consecutive repeat; <=2 tile-grid dominant):
     1 Interactive hub (globe + 5 spokes) + core features + who-feels
     2 Sequential flow chain (drivers + causal chain) + reminders
     3 Decompose a diagram (global supply-chain map) + why + trade-offs
     4 Flow chain (country-level gains) + who-benefits + why-companies
     5 Tile grid (downsides) + environment flow + why-governments-worry
     6 Evidence-then-verdict (chain + evaluate + good/wrong pair)

   New visuals (js/icons.js):
     - globalisationConnectsHub (Card 1 visualKey — globe + 5 spokes)
     - globalSupplyChainMap     (Card 3 visualKey — one product, many countries)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'globalisation',
  topicNum: '4.1.1',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Globalisation',
  estTime: '16 min',
  goal: 'Define globalisation and its characteristics, explain the factors that have driven it, and evaluate the gains, costs and risks for consumers, producers, workers, governments and the environment',

  intro: {
    heroKey: 'heroFirm',
    summary: 'Globalisation is the growing integration of the world’s economies — through trade, capital flows, migration, technology and culture — so that what happens in one country increasingly affects the others. This deck starts with what globalisation actually connects, then explains the forces that drove it: cheaper transport, the internet, freer trade, multinationals and the rise of emerging economies. It traces how a single product now crosses many countries, then turns to the heart of the topic — the gains for consumers, firms and developing countries set against the costs of inequality, insecurity, tax avoidance and environmental damage. The recurring exam skill is to explain the mechanism and then weigh the trade-offs in context.',
    doInThis: 'Map what globalisation connects and who feels the effects. Explain the factors that drove it and how they chain together. Trace a global supply chain and the trade-offs of producing across borders. Set out the gains for consumers, producers, workers and developing economies, then the costs and risks — including the environment. Finish with a balanced judgement of globalisation as a trade-off.',
    outcomes: [
      'Define globalisation and its core characteristics',
      'Explain the factors that have driven globalisation',
      'Analyse global supply chains and multinational firms',
      'Evaluate the gains from globalisation',
      'Evaluate the costs and risks, including the environment',
      'Build a balanced whole-story judgement'
    ],
    tip: 'The phrase to reach for is judge the trade-offs — globalisation is neither automatically good nor bad; its value depends on how the gains and costs are distributed and managed.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 16 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – The big picture
       Pattern: Interactive hub (globe + 5 spokes) + core features + who-feels
       ==================================================================== */
    {
      id: 'glob-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Globalisation — the big picture',
      lede: 'Globalisation is the growing integration of the world’s economies — economies become more connected and more interdependent.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Globalisation links national economies through <strong>trade, capital, people, technology and culture</strong> — so events in one country ripple out to the rest.' },

      visualKey: 'globalisationConnectsHub',
      visualLabel: 'WHAT GLOBALISATION CONNECTS',
      visualEmoji: '\u{1F310}',

      causesLabel: 'THREE CORE FEATURES',
      causesEmoji: '✨',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F6A2}', head: 'More international trade', body: 'A rising share of output is bought and sold across borders.' },
        { tone: 'amber',  icon: '\u{1F3ED}', head: 'More global production', body: 'Firms split production across many countries.' },
        { tone: 'purple', icon: '\u{1F517}', head: 'More interdependence', body: 'Economies rely on one another for goods, finance and labour.' }
      ],

      causes2Label: 'WHO FEELS THE EFFECTS',
      causes2Emoji: '\u{1F465}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'green',  icon: '\u{1F6D2}', head: 'Consumers', body: 'Cheaper, wider choice — but exposed to global shocks.' },
        { tone: 'blue',   icon: '\u{1F3E2}', head: 'Producers', body: 'Bigger markets and cheaper inputs — but tougher rivals.' },
        { tone: 'amber',  icon: '\u{1F477}', head: 'Workers', body: 'New jobs and skills — but competition and insecurity.' },
        { tone: 'purple', icon: '\u{1F3DB}️', head: 'Govt.', body: 'Growth and investment — but less control over outcomes.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Globalisation is a process, not an event — it deepens and occasionally reverses, but the long-run trend is towards more integration.' },

      conclusion: { title: 'Big idea', text: 'Globalisation is the growing integration of economies through trade, capital, people, technology and culture — making them more interdependent.' },
      examEdge: 'Define globalisation precisely as <strong>increasing economic integration and interdependence</strong> — not just “more trade”.'
    },

    /* ====================================================================
       CARD 2 – What drove globalisation?
       Pattern: Sequential flow chain (drivers + causal chain) + reminders
       ==================================================================== */
    {
      id: 'glob-drivers',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'What drove globalisation?',
      lede: 'Globalisation accelerated because several forces lowered the cost and friction of doing business across borders.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Each driver did the same thing — it made it <strong>cheaper and easier</strong> to trade, move money and spread production around the world.' },

      causesFirst: true,
      causesLabel: 'THE FIVE DRIVERS',
      causesEmoji: '\u{1F680}',
      causesStyle: 'icon-top',
      causesCols: 5,
      causes: [
        { tone: 'blue',   icon: '\u{1F4E6}', head: 'Cheaper freight', body: 'Containers and air freight slashed transport costs.' },
        { tone: 'purple', icon: '\u{1F4F1}', head: 'The internet', body: 'ICT gave instant communication across borders.' },
        { tone: 'green',  icon: '\u{1F91D}', head: 'Freer trade', body: 'Lower tariffs and trade deals via the WTO.' },
        { tone: 'amber',  icon: '\u{1F3E2}', head: 'Global firms', body: 'Multinationals invest and produce abroad (FDI).' },
        { tone: 'rose',   icon: '\u{1F4C8}', head: 'Rising Asia', body: 'China, India and others opened up and grew fast.' }
      ],

      flowTitle: 'THE CAUSAL CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F4C9}', title: 'Barriers fall', sub: 'Costs and tariffs drop.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Trade rises', sub: 'More crosses borders.' },
        { tone: 'amber',  icon: '\u{1F3ED}', title: 'Production spreads', sub: 'Firms go multinational.' },
        { tone: 'purple', icon: '\u{1F310}', title: 'Markets integrate', sub: 'Prices and finance link up.' },
        { tone: 'rose',   icon: '\u{1F517}', title: 'Interdependence', sub: 'Economies rely on each other.' }
      ],

      causes2Label: 'DO NOT FORGET',
      causes2Emoji: '\u{1F4CC}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'blue',   icon: '⏳', head: 'It is gradual', body: 'These forces built up over decades, not overnight.' },
        { tone: 'amber',  icon: '\u{1F501}', head: 'It can reverse', body: 'Tariffs, conflict or pandemics can slow it down.' },
        { tone: 'purple', icon: '⚖️', head: 'It is uneven', body: 'Some countries and groups gain far more than others.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The drivers reinforce each other — cheaper transport plus the internet plus freer trade together unlocked global production.' },

      conclusion: { title: 'Big idea', text: 'Globalisation was driven by cheaper transport, ICT, trade liberalisation, multinationals and the rise of emerging economies — all lowering the cost of crossing borders.' },
      examEdge: 'Do not just list drivers — show the <strong>causal chain</strong>: lower barriers → more trade → spread production → deeper interdependence.'
    },

    /* ====================================================================
       CARD 3 – Global supply chains and global companies
       Pattern: Decompose a diagram (supply-chain map) + why + trade-offs
       ==================================================================== */
    {
      id: 'glob-supply-chains',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'Global supply chains and global companies',
      lede: 'A single product is now designed, built and sold across many countries — each stage located where it is cheapest or best.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Multinationals slice production into stages and place each one where it adds the most value — this is the <strong>global value chain</strong>.' },

      visualKey: 'globalSupplyChainMap',
      visualLabel: 'ONE PRODUCT, MANY COUNTRIES',
      visualEmoji: '\u{1F30F}',

      causesFirst: true,
      causesLabel: 'WHY FIRMS GO GLOBAL',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F4B7}', head: 'Lower costs', body: 'Cheaper labour, land and inputs abroad.' },
        { tone: 'green',  icon: '\u{1F30D}', head: 'Bigger markets', body: 'Access to billions more customers.' },
        { tone: 'amber',  icon: '\u{1F4C8}', head: 'Economies of scale', body: 'Larger output cuts unit costs.' },
        { tone: 'purple', icon: '\u{1F6E1}️', head: 'Spread risk', body: 'Less reliance on any single market.' }
      ],

      causes2Label: 'THE TRADE-OFFS',
      causes2Emoji: '⚖️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'green',  icon: '✅', head: 'Efficiency', body: 'Each stage is done where it is cheapest or best.' },
        { tone: 'rose',   icon: '\u{1F517}', head: 'Fragility', body: 'A shock in one country can halt the whole chain.' },
        { tone: 'amber',  icon: '\u{1F30D}', head: 'Emissions', body: 'Long-distance shipping raises the carbon footprint.' },
        { tone: 'purple', icon: '⚖️', head: 'Power', body: 'Lead firms can squeeze small overseas suppliers.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Global supply chains are efficient in normal times but vulnerable to shocks — Covid and the Suez blockage exposed how fragile they can be.' },

      conclusion: { title: 'Big idea', text: 'Multinationals split production across borders to cut costs and reach bigger markets — gaining efficiency but creating fragile, far-flung supply chains.' },
      examEdge: 'Use the term <strong>global value chain</strong> and give a concrete example (e.g. a smartphone designed in the US, built from Asian parts, assembled in China).'
    },

    /* ====================================================================
       CARD 4 – The gains from globalisation
       Pattern: Flow chain (country-level gains) + who-benefits + why-companies
       ==================================================================== */
    {
      id: 'glob-gains',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'The gains from globalisation',
      lede: 'Globalisation can raise living standards — through cheaper goods, bigger markets, investment and the transfer of technology.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The core gain is <strong>specialisation and exchange</strong> — countries do what they are relatively best at, then trade, so total output and choice rise.' },

      causesFirst: true,
      causesLabel: 'WHO CAN BENEFIT',
      causesEmoji: '\u{1F44D}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F6D2}', head: 'Consumers', body: 'Lower prices and a far wider choice of goods.' },
        { tone: 'blue',   icon: '\u{1F3E2}', head: 'Producers', body: 'Bigger markets, cheaper inputs, scale economies.' },
        { tone: 'amber',  icon: '\u{1F477}', head: 'Workers', body: 'New jobs, skills and higher wages in growing sectors.' },
        { tone: 'purple', icon: '\u{1F3DB}️', head: 'Govt.', body: 'More growth, investment and tax revenue.' }
      ],

      flowTitle: 'COUNTRY-LEVEL GAINS',
      flowEmoji: '\u{1F4C8}',
      flow: [
        { tone: 'blue',   icon: '\u{1F4E6}', title: 'Export growth', sub: 'Sell to the world.' },
        { tone: 'amber',  icon: '\u{1F3E2}', title: 'FDI flows in', sub: 'Foreign firms invest.' },
        { tone: 'purple', icon: '\u{1F4A1}', title: 'Technology transfer', sub: 'New skills and know-how.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Productivity rises', sub: 'Living standards improve.' }
      ],

      causes2Label: 'WHY GLOBAL COMPANIES CAN HELP',
      causes2Emoji: '\u{1F310}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'blue',   icon: '\u{1F4B0}', head: 'Investment', body: 'Build factories, infrastructure and supply networks.' },
        { tone: 'green',  icon: '\u{1F468}‍\u{1F3EB}', head: 'Skills', body: 'Train workers and raise local productivity.' },
        { tone: 'amber',  icon: '\u{1F4BC}', head: 'Jobs', body: 'Create employment in developing economies.' },
        { tone: 'purple', icon: '\u{1F4B7}', head: 'Tax & exports', body: 'Add to tax revenue and export earnings.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The gains are real but not automatic — they depend on a country having the skills, infrastructure and institutions to capture them.' },

      conclusion: { title: 'Big idea', text: 'Globalisation can raise living standards through cheaper goods, bigger markets, foreign investment and technology transfer — if a country can capture the gains.' },
      examEdge: 'Link the gains to <strong>comparative advantage and technology transfer</strong>, then qualify with “provided the country has the capacity to benefit”.'
    },

    /* ====================================================================
       CARD 5 – The costs and risks of globalisation
       Pattern: Tile grid (downsides) + environment flow + why-governments-worry
       ==================================================================== */
    {
      id: 'glob-costs-risks',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'The costs and risks of globalisation',
      lede: 'The same forces that create gains also create losers — and risks that spread quickly across an interconnected world.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Globalisation’s gains are often <strong>uneven</strong> — some workers, regions and countries lose out even as the total pie grows.' },

      causesFirst: true,
      causesLabel: 'THE MAIN DOWNSIDES',
      causesEmoji: '⚠️',
      causesStyle: 'icon-top',
      causesCols: 5,
      causes: [
        { tone: 'rose',   icon: '⚖️', head: 'Wider gaps', body: 'Inequality grows; gains concentrate, some left behind.' },
        { tone: 'amber',  icon: '\u{1F4C9}', head: 'Job losses', body: 'Work shifts abroad; whole industries decline.' },
        { tone: 'blue',   icon: '\u{1F4B8}', head: 'Lost taxes', body: 'Multinationals avoid tax by shifting profits offshore.' },
        { tone: 'purple', icon: '\u{1F3ED}', head: 'Lost culture', body: 'Local firms and traditions get squeezed out.' },
        { tone: 'rose',   icon: '\u{1F4A5}', head: 'Crises spread', body: 'Contagion runs fast across linked economies.' }
      ],

      flowTitle: 'THE ENVIRONMENT STORY',
      flowEmoji: '\u{1F30D}',
      flow: [
        { tone: 'amber',  icon: '\u{1F3ED}', title: 'More production', sub: 'Output rises worldwide.' },
        { tone: 'rose',   icon: '\u{1F6A2}', title: 'More transport', sub: 'Goods shipped further.' },
        { tone: 'rose',   icon: '\u{1F525}', title: 'More emissions', sub: 'Higher carbon footprint.' },
        { tone: 'amber',  icon: '\u{1F333}', title: 'Resource pressure', sub: 'Depletion and pollution.' },
        { tone: 'green',  icon: '\u{1F4A1}', title: 'But cleaner tech', sub: 'Can spread globally too.' }
      ],

      causes2Label: 'WHY GOVERNMENTS WORRY',
      causes2Emoji: '\u{1F3DB}️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'blue',   icon: '\u{1F3AF}', head: 'Less control', body: 'Footloose firms can relocate to dodge rules.' },
        { tone: 'amber',  icon: '\u{1F4C9}', head: 'Structural decline', body: 'Whole regions can lose their industries.' },
        { tone: 'rose',   icon: '\u{1F4B8}', head: 'Lost revenue', body: 'Profit shifting erodes the tax base.' },
        { tone: 'purple', icon: '\u{1F30A}', head: 'Shared shocks', body: 'Financial and supply crises spill over borders.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The costs explain the backlash — protectionism, “reshoring” and anti-globalisation politics are responses to these uneven effects.' },

      conclusion: { title: 'Big idea', text: 'Globalisation’s costs — inequality, insecurity, tax avoidance, environmental damage and contagion — fall unevenly, which is why it provokes a backlash.' },
      examEdge: 'Strong evaluation names the <strong>losers</strong> — displaced workers, declining regions, the environment — not just the aggregate gains.'
    },

    /* ====================================================================
       CARD 6 – The whole story
       Pattern: Evidence-then-verdict (chain + evaluate + good/wrong pair)
       ==================================================================== */
    {
      id: 'glob-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole story',
      lede: 'Strong answers define globalisation, explain what drove it, then judge the effects on countries, firms, workers, consumers and the environment.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Globalisation is best judged as a <strong>trade-off</strong> — higher efficiency and opportunity, but also adjustment costs and sustainability concerns.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F4C9}', title: 'Costs & barriers fall', sub: 'Transport, tariffs drop.' },
        { tone: 'amber',  icon: '\u{1F6A2}', title: 'Trade & FDI rise', sub: 'Flows expand.' },
        { tone: 'purple', icon: '\u{1F310}', title: 'Supply chains expand', sub: 'Production spreads.' },
        { tone: 'green',  icon: '\u{1F6D2}', title: 'Competition & choice rise', sub: 'Markets integrate.' },
        { tone: 'amber',  icon: '⚖️', title: 'Gains & losses uneven', sub: 'Winners and losers.' },
        { tone: 'blue',   icon: '\u{1F3DB}️', title: 'Final judgement', sub: 'Depends on context & policy.' }
      ],

      causesLabel: 'HOW TO EVALUATE',
      causesEmoji: '⚖️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F465}', head: 'Stakeholders', body: 'Who gains and who loses?' },
        { tone: 'blue',   icon: '⏱️', head: 'Short vs long run', body: 'Disruption now, possible gains later.' },
        { tone: 'amber',  icon: '\u{1F310}', head: 'Country context', body: 'Skills, infrastructure and institutions matter.' },
        { tone: 'purple', icon: '\u{1F343}', head: 'Environment & fairness', body: 'Are gains sustainable and shared?' }
      ],

      pairLabel: 'Why it can be good vs why it can go wrong',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '\u{1F44D}',
        iconStyle: 'circle',
        label: 'Why it can be good',
        points: ['Lower prices for consumers', 'Larger markets for firms', 'Investment and technology transfer', 'Higher productivity and efficiency']
      },
      right: {
        tone: 'rose',
        icon: '\u{1F44E}',
        iconStyle: 'circle',
        label: 'Why it can go wrong',
        points: ['Inequality and uneven development', 'Insecurity and job displacement', 'Tax avoidance and profit shifting', 'Pollution and environmental damage', 'Financial contagion and instability']
      },

      bottomTip: { icon: '⚖️', tone: 'green', text: 'Globalisation tends to work best when countries are <strong>competitive</strong>, workers can <strong>adapt</strong>, and governments <strong>manage the side-effects</strong> well.' },

      conclusion: { title: 'Big idea', text: 'Globalisation is neither automatically good nor automatically bad — its value depends on how the gains and costs are distributed and managed.' },
      economistQuote: {
        portraitKey: 'economistElinorOstrom',
        tone: 'amber',
        label: 'Economist insight on shared resources',
        quote: 'There is no reason to believe that distant officials, however well meaning, can craft better rules than the people on the spot, who have both the local knowledge and the strongest incentive to get the solution right.',
        attribution: 'Elinor Ostrom, <em>Governing the Commons</em> (1990)'
      },
      examEdge: 'In essays, do not just describe globalisation — explain the <strong>mechanism</strong> and then weigh the <strong>trade-offs in context</strong>.'
    }
  ]
};
