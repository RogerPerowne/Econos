/* ============================================================
   ECONOS – Development Strategies: Other (Edexcel A 4.3.3)
   8 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   Other development strategies: the big picture, industrialisation and
   the Lewis model, tourism, primary industries, Fairtrade, aid and debt
   relief, the World Bank / IMF / NGOs, and the whole story.

   No new visuals — built from flow chains, tile grids and VS pairs.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'development-strategies-other',
  topicNum: '4.3.3',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Development Strategies: Other',
  estTime: '24 min',
  goal: 'Explain the other development strategies — industrialisation, tourism, primary industries, Fairtrade, aid, debt relief and international institutions — and match each to the constraint it solves',

  intro: {
    heroKey: 'heroDevelopment',
    summary: 'Beyond the market-led and interventionist toolkits, countries can pursue development through a range of other strategies — each tackling a different constraint. Industrialisation, captured by the Lewis model, moves surplus labour from low-productivity agriculture into higher-productivity industry and reinvests the profits. Tourism brings foreign exchange, jobs and multiplier effects. Primary industries can be a springboard or a trap. Fairtrade tries to improve the terms on which producers sell. Aid and debt relief fund development and free up fiscal space, while the World Bank, IMF and NGOs provide finance, expertise and support. None guarantees development on its own — the skill is matching the strategy to the bottleneck it is trying to solve, then judging the context and how the gains are shared.',
    doInThis: 'Map the other strategies to the constraints they fix. Explain the Lewis model of industrialisation. Weigh tourism and primary industries. Judge Fairtrade. Evaluate aid and debt relief. Compare the roles of the World Bank, IMF and NGOs, then match strategy to problem.',
    outcomes: [
      'Match strategies to development constraints',
      'Explain the Lewis model of industrialisation',
      'Evaluate tourism and primary industries',
      'Judge Fairtrade schemes',
      'Evaluate aid and debt relief',
      'Compare the World Bank, IMF and NGOs'
    ],
    tip: 'Match each strategy to the bottleneck it tackles — then evaluate the context and how widely the gains are shared.',
    stages: [
      { num: 1, name: 'Learn',  sub: '8 cards \xb7 24 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'dso-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Other development strategies — the big picture',
      lede: 'Countries can pursue development through industrialisation, tourism, primary industries, Fairtrade, aid, debt relief and support from international institutions.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'No single strategy guarantees development — each tackles a <strong>different constraint</strong> and brings different trade-offs.' },

      flowTitle: 'THE STRATEGY MAP',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F3ED}', title: 'Build production', sub: 'Industrialisation, primary industries.' },
        { tone: 'blue', icon: '\u{1F4B1}', title: 'Earn foreign exchange', sub: 'Tourism and exports.' },
        { tone: 'blue', icon: '\u{1F91D}', title: 'Improve terms', sub: 'Fairtrade for producers.' },
        { tone: 'blue', icon: '\u{1F3E6}', title: 'Fill resource gaps', sub: 'Aid, debt relief, institutions.' }
      ],

      causesLabel: 'WHAT THESE STRATEGIES TRY TO FIX',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Low productivity', body: 'Output per worker is low.' },
        { tone: 'rose', icon: '\u{1F4B1}', head: 'Foreign-exchange gap', body: 'Too little hard currency.' },
        { tone: 'rose', icon: '⚖️', head: 'Unfair prices', body: 'Producers get a poor deal.' },
        { tone: 'rose', icon: '\u{1F3E6}', head: 'Finance gaps', body: 'Not enough funds to invest.' },
        { tone: 'rose', icon: '\u{1F50C}', head: 'Weak infrastructure', body: 'High costs hold firms back.' },
        { tone: 'rose', icon: '\u{1F3DB}️', head: 'Weak institutions', body: 'Capacity to deliver is thin.' }
      ],

      causes2Label: 'WHY CONTEXT MATTERS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue', icon: '\u{1F48E}', head: 'Resource quality', body: 'What a country can build on.' },
        { tone: 'blue', icon: '\u{1F3DB}️', head: 'State capacity', body: 'Can it deliver the strategy?' },
        { tone: 'blue', icon: '\u{1F310}', head: 'Global conditions', body: 'World prices and demand.' },
        { tone: 'blue', icon: '⚖️', head: 'Distribution of gains', body: 'Who actually benefits.' }
      ],

      causes3Label: 'HOW TO THINK ABOUT IT',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'green', icon: '\u{1F50D}', head: 'Identify the constraint', body: 'What is holding growth back?' },
        { tone: 'green', icon: '\u{1F9E9}', head: 'Match the strategy', body: 'Pick the right tool.' },
        { tone: 'green', icon: '\u{1F517}', head: 'Explain the mechanism', body: 'How it raises capacity.' },
        { tone: 'green', icon: '⚖️', head: 'Evaluate trade-offs', body: 'Costs, risks and context.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Development strategy is about choosing the <strong>right tool for the right bottleneck</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'There is no single best strategy — the right one depends on the constraint a country faces and its context.' },
      examEdge: { title: 'EXAM EDGE', text: 'Always link the strategy to the constraint it solves, then weigh the trade-offs in the country’s context.' }
    },

    /* ============ CARD 2 – Industrialisation / Lewis model ============ */
    {
      id: 'dso-industrialisation',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Industrialisation and the Lewis model',
      lede: 'Development can accelerate when surplus labour moves from low-productivity agriculture into higher-productivity industry and profits are reinvested.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Lewis highlights <strong>structural change</strong> — labour shifts sector, output rises, and reinvestment drives further growth.' },

      flowTitle: 'THE MODEL IN MOTION',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F33E}', title: 'Subsistence agriculture', sub: 'Surplus, low-paid labour.' },
        { tone: 'blue', icon: '\u{1F6B6}', title: 'Workers move', sub: 'Into industry.' },
        { tone: 'blue', icon: '\u{1F3ED}', title: 'Industrial profits', sub: 'Higher productivity.' },
        { tone: 'blue', icon: '\u{1F501}', title: 'Profits reinvested', sub: 'Capital stock grows.' },
        { tone: 'blue', icon: '\u{1F4C8}', title: 'Output expands', sub: 'And growth continues.' }
      ],

      causesLabel: 'THE LEWIS TURNING POINT',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'slate',  icon: '\u{1F4B5}', head: 'Abundant labour', body: 'Wages stay low while surplus lasts.' },
        { tone: 'amber',  icon: '\u{1F4C9}', head: 'Surplus shrinks', body: 'Wages start to rise as it runs out.' },
        { tone: 'rose',   icon: '\u{1F4CD}', head: 'Turning point', body: 'Surplus exhausted; wages climb.' }
      ],

      causes2Label: 'WHY INDUSTRIALISATION CAN HELP',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F4C8}', head: 'Higher productivity', body: 'Industry beats subsistence farming.' },
        { tone: 'green', icon: '\u{1F4E6}', head: 'Export diversification', body: 'New manufactured exports.' },
        { tone: 'green', icon: '\u{1F477}', head: 'Job creation', body: 'Formal-sector employment.' },
        { tone: 'green', icon: '\u{1F9E0}', head: 'Learning by doing', body: 'Skills build over time.' }
      ],

      causes3Label: 'RISKS AND LIMITS',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'rose', icon: '\u{1F3D9}️', head: 'Urban overcrowding', body: 'Cities strain to absorb migrants.' },
        { tone: 'rose', icon: '\u{1F33E}', head: 'Rural neglect', body: 'Agriculture is left behind.' },
        { tone: 'rose', icon: '\u{1F3ED}', head: 'Poor conditions', body: 'Low pay and weak protections.' },
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Premature deindustrialisation', body: 'Industry fades too early.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Industrialisation works when labour shifts into productive sectors <strong>and profits are reinvested</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'The Lewis model shows development as structural change — moving labour to where it is more productive.' },
      examEdge: { title: 'EXAM EDGE', text: 'Use the Lewis model to explain the productivity gain from moving labour, then evaluate the urban and rural costs.' }
    },

    /* ============ CARD 3 – Tourism ============ */
    {
      id: 'dso-tourism',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Tourism as a development strategy',
      lede: 'Tourism can bring foreign exchange, jobs and multiplier effects — but leakages and vulnerability matter.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Tourism helps most when spending <strong>stays local</strong> and supports wider development.' },

      flowTitle: 'HOW TOURISM GENERATES GROWTH',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '✈️', title: 'Tourists arrive', sub: 'Bringing spending power.' },
        { tone: 'green', icon: '\u{1F3E8}', title: 'Spending', sub: 'Hotels, food, transport.' },
        { tone: 'green', icon: '\u{1F477}', title: 'Jobs and incomes', sub: 'In many local sectors.' },
        { tone: 'green', icon: '\u{1F501}', title: 'Multiplier effects', sub: 'Spending circulates.' },
        { tone: 'green', icon: '\u{1F4B1}', title: 'Foreign exchange', sub: 'And tax revenue.' }
      ],

      causesLabel: 'WHAT TOURISM CAN BUILD',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F3EA}', head: 'Jobs and SMEs', body: 'Work across many small firms.' },
        { tone: 'green', icon: '\u{1F6E3}️', head: 'Infrastructure', body: 'Airports, roads and utilities.' },
        { tone: 'green', icon: '\u{1F5FA}️', head: 'Regional development', body: 'Spreads beyond the capital.' },
        { tone: 'green', icon: '\u{1F4B1}', head: 'Export earnings', body: 'Foreign currency inflows.' }
      ],

      causes2Label: 'RISKS AND LEAKAGES',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F4B8}', head: 'Profit leakage', body: 'Foreign-owned chains take profits out.' },
        { tone: 'rose', icon: '\u{1F326}️', head: 'Seasonal demand', body: 'Incomes are uneven.' },
        { tone: 'rose', icon: '\u{1F343}', head: 'Environmental damage', body: 'Pressure on land and nature.' },
        { tone: 'rose', icon: '\u{1F3A2}', head: 'Exposure to shocks', body: 'Crises and events deter visitors.' }
      ],

      causes3Label: 'WHEN IT WORKS BEST',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'blue', icon: '\u{1F3E0}', head: 'Local ownership', body: 'More spending stays at home.' },
        { tone: 'blue', icon: '\u{1F6E1}️', head: 'Safety & stability', body: 'Visitors feel secure.' },
        { tone: 'blue', icon: '\u{1F6E3}️', head: 'Good transport', body: 'Easy to reach and move around.' },
        { tone: 'blue', icon: '\u{1F33F}', head: 'Sustainability', body: 'Protects the assets it relies on.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Tourism can sustain a virtuous circle of income and investment — but only if leakages are kept low.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Tourism can earn foreign exchange and create jobs, but leakages and vulnerability decide how much development it brings.' },
      examEdge: { title: 'EXAM EDGE', text: 'Weigh the multiplier and foreign-exchange gains against profit leakage, seasonality and environmental costs.' }
    },

    /* ============ CARD 4 – Primary industries ============ */
    {
      id: 'dso-primary-industries',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Primary industries — springboard or trap?',
      lede: 'Agriculture, mining and other primary industries can generate jobs and exports — but dependence and volatility create risks.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Primary industries can fund development, but relying on them too heavily can <strong>hold countries back</strong>.' },

      causesPosition: 'top',
      causesLabel: 'WHAT PRIMARY INDUSTRIES OFFER',
      causesEmoji: '\u{1F517}',
      causes: [
        { tone: 'green', icon: '\u{1F4B1}', head: 'Export earnings', body: 'Foreign exchange from sales.' },
        { tone: 'green', icon: '\u{1F477}', head: 'Employment', body: 'Jobs in farming and mining.' },
        { tone: 'green', icon: '\u{1F6E0}️', head: 'Raw materials', body: 'Inputs for domestic industry.' },
        { tone: 'green', icon: '\u{1F517}', head: 'Linkages', body: 'Can feed wider supply chains.' }
      ],

      flowTitle: 'THE DEVELOPMENT PATH',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F33E}', title: 'Primary production', sub: 'Raw commodities.' },
        { tone: 'blue', icon: '\u{1F3ED}', title: 'Move to processing', sub: 'Add some value at home.' },
        { tone: 'blue', icon: '\u{1F4C8}', title: 'Value-added activities', sub: 'Higher-value output.' },
        { tone: 'blue', icon: '\u{1F500}', title: 'Diversify & upgrade', sub: 'Broaden the economy.' }
      ],

      causes2Label: 'WHY IT CAN BECOME A TRAP',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F3A2}', head: 'Volatile prices', body: 'Revenue swings sharply.' },
        { tone: 'rose', icon: '\u{1F4E6}', head: 'Low value added', body: 'Little processing at home.' },
        { tone: 'rose', icon: '\u{1F634}', head: 'Over-dependence', body: 'Other sectors are neglected.' },
        { tone: 'rose', icon: '\u{1F343}', head: 'Environmental damage', body: 'Depletion and pollution.' }
      ],

      causes3Label: 'HOW TO MAKE IT WORK BETTER',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'blue', icon: '\u{1F3E6}', head: 'Stabilise revenue', body: 'Save windfalls for lean years.' },
        { tone: 'blue', icon: '\u{1F4F1}', head: 'Improve technology', body: 'Raise yields and quality.' },
        { tone: 'blue', icon: '\u{1F501}', head: 'Reinvest', body: 'Fund diversification.' },
        { tone: 'blue', icon: '\u{1F500}', head: 'Diversify', body: 'Reduce reliance on one export.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Primary industries help most when they become a platform for wider development, not the whole economy.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Primary industries can be a springboard if earnings are reinvested and upgraded — or a trap if relied on alone.' },
      examEdge: { title: 'EXAM EDGE', text: 'Contrast the springboard and trap cases, and stress processing, reinvestment and diversification.' }
    },

    /* ============ CARD 5 – Fairtrade ============ */
    {
      id: 'dso-fairtrade',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'How Fairtrade schemes aim to help',
      lede: 'Fairtrade tries to improve the terms on which producers sell — through standards, a minimum price and a premium.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Fairtrade is designed to give producers a better deal — but it is <strong>not a full solution to poverty</strong>.' },

      flowTitle: 'HOW FAIRTRADE WORKS',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '✅', title: 'Certified producer', sub: 'Meets agreed standards.' },
        { tone: 'green', icon: '\u{1F4B7}', title: 'Minimum price', sub: 'A floor below the market.' },
        { tone: 'green', icon: '\u{1F381}', title: 'Community premium', sub: 'Extra for shared projects.' },
        { tone: 'green', icon: '\u{1F3EB}', title: 'Investment', sub: 'Schools, equipment, welfare.' }
      ],

      causesLabel: 'POTENTIAL BENEFITS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F4B0}', head: 'More stable incomes', body: 'A price floor reduces risk.' },
        { tone: 'green', icon: '\u{1F465}', head: 'Better standards', body: 'Labour and safety improve.' },
        { tone: 'green', icon: '\u{1F91D}', head: 'Greater bargaining', body: 'Producers act together.' },
        { tone: 'green', icon: '\u{1F3D8}️', head: 'Community projects', body: 'Premium funds local goods.' }
      ],

      causes2Label: 'LIMITATIONS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F50D}', head: 'Limited coverage', body: 'Only a small share of trade.' },
        { tone: 'rose', icon: '\u{1F4DC}', head: 'Certification costs', body: 'Fees can be a barrier.' },
        { tone: 'rose', icon: '\u{1F6D2}', head: 'Demand-dependent', body: 'Relies on consumer choices.' },
        { tone: 'rose', icon: '⚖️', head: 'Not transformative', body: 'It cannot fix whole markets.' }
      ],

      causes3Label: 'WHEN IT HELPS MOST',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'blue', icon: '\u{1F4AA}', head: 'Weak bargaining power', body: 'Small, scattered producers.' },
        { tone: 'blue', icon: '\u{1F33E}', head: 'Cash-crop sectors', body: 'Coffee, cocoa, cotton.' },
        { tone: 'blue', icon: '\u{1F6D2}', head: 'Informed consumers', body: 'Willing to pay the premium.' },
        { tone: 'blue', icon: '\u{1F91D}', head: 'Strong co-ops', body: 'To organise and reinvest.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Fairtrade can raise incomes and conditions for some producers, but reaches a small share of world trade.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Fairtrade improves the terms of trade for certified producers — a real help, but not a cure for poverty.' },
      examEdge: { title: 'EXAM EDGE', text: 'Judge Fairtrade on coverage and conditions for producers — not as a fix for whole-economy development.' }
    },

    /* ============ CARD 6 – Aid and debt relief ============ */
    {
      id: 'dso-aid-debt-relief',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Aid and debt relief',
      lede: 'External support can fund development and ease pressure — but quality, incentives and institutions matter.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Aid can finance development and debt relief can free fiscal space — but neither works <strong>automatically</strong>.' },

      pairFirst: true,
      pairLabel: 'Aid vs Debt relief',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'green', icon: '\u{1F91D}', iconStyle: 'circle', label: 'Aid',
        points: ['Grants or concessional loans', 'Funds projects and services', 'Adds to available resources']
      },
      right: {
        tone: 'blue', icon: '\u{1F3E6}', iconStyle: 'circle', label: 'Debt relief',
        points: ['Cuts debt-service payments', 'Frees room for public spending', 'Eases the fiscal squeeze']
      },

      flowTitle: 'THE DEBT-OVERHANG STORY',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'rose', icon: '\u{1F3E6}', title: 'High debt', sub: 'Built up over years.' },
        { tone: 'rose', icon: '\u{1F4B8}', title: 'High debt service', sub: 'Repayments eat the budget.' },
        { tone: 'rose', icon: '\u{1F4C9}', title: 'Low public spending', sub: 'Less for development.' },
        { tone: 'rose', icon: '\u{1F40C}', title: 'Weak growth', sub: 'Relief can break the loop.' }
      ],

      causesLabel: 'HOW THEY CAN HELP',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F6E3}️', head: 'Fund infrastructure', body: 'And basic services.' },
        { tone: 'green', icon: '\u{1F3E5}', head: 'Health & education', body: 'Build human capital.' },
        { tone: 'green', icon: '\u{1F4B1}', head: 'Fill gaps', body: 'Foreign-exchange or budget.' },
        { tone: 'green', icon: '\u{1F501}', head: 'Free resources', body: 'Room to invest.' }
      ],

      causes2Label: 'RISKS AND LIMITS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F517}', head: 'Dependency', body: 'Reliance can become a habit.' },
        { tone: 'rose', icon: '\u{1F3F7}️', head: 'Tied aid', body: 'Serves donor priorities.' },
        { tone: 'rose', icon: '\u{1F575}️', head: 'Corruption', body: 'Funds can be diverted.' },
        { tone: 'rose', icon: '\u{1F504}', head: 'May not last', body: 'Debt can build up again.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'External finance helps most when it strengthens long-run productive capacity rather than only easing pressure.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Aid and debt relief can free resources for development — but their impact depends on how well they are used.' },
      examEdge: { title: 'EXAM EDGE', text: 'Distinguish aid from debt relief, then evaluate dependency, governance and whether the money funds capacity.' }
    },

    /* ============ CARD 7 – World Bank, IMF and NGOs ============ */
    {
      id: 'dso-institutions',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'World Bank, IMF and NGOs',
      lede: 'International institutions and NGOs can provide finance, expertise and support — but their roles and trade-offs differ.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Know who does what — <strong>long-run finance, short-run stabilisation and grassroots support</strong> are not the same thing.' },

      causesPosition: 'top',
      causesLabel: 'WHO DOES WHAT',
      causesEmoji: '\u{1F517}',
      causes: [
        { tone: 'blue',   icon: '\u{1F3DB}️', head: 'World Bank', body: 'Long-run development finance — infrastructure, education and policy advice.' },
        { tone: 'amber',  icon: '\u{1F4B1}', head: 'IMF', body: 'Balance-of-payments support and stabilisation, with conditionality attached.' },
        { tone: 'green',  icon: '\u{1F91D}', head: 'NGOs', body: 'Grassroots projects, advocacy and humanitarian help, delivered locally.' }
      ],

      causes2Label: 'HOW THEY CAN HELP',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F4B0}', head: 'Funding', body: 'Loans, grants and support.' },
        { tone: 'green', icon: '\u{1F9E0}', head: 'Expertise', body: 'Technical and policy advice.' },
        { tone: 'green', icon: '\u{1F198}', head: 'Emergency support', body: 'Help in crises and shocks.' },
        { tone: 'green', icon: '\u{1F4CD}', head: 'Local reach', body: 'NGOs work on the ground.' }
      ],

      causes3Label: 'WHAT TO QUESTION',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'rose', icon: '\u{1F4DC}', head: 'Conditionality', body: 'Strings attached to support.' },
        { tone: 'rose', icon: '⚖️', head: 'Accountability', body: 'Who answers for outcomes?' },
        { tone: 'rose', icon: '\u{1F30D}', head: 'Donor influence', body: 'Priorities set from abroad.' },
        { tone: 'rose', icon: '\u{1F50D}', head: 'Limited scale', body: 'NGOs cannot do everything.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Best used for: the World Bank for long-run projects, the IMF for short-run crises, NGOs for targeted grassroots help.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'International organisations and NGOs each fill a different role — finance, stabilisation or local delivery.' },
      examEdge: { title: 'EXAM EDGE', text: 'Differentiate clearly between the World Bank, the IMF and NGOs, then evaluate conditionality and accountability.' }
    },

    /* ============ CARD 8 – The whole story ============ */
    {
      id: 'dso-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'The whole story',
      lede: 'The best development strategy depends on the constraint, the context and how the gains are shared.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Strong evaluation matches each strategy to the <strong>bottleneck it is trying to solve</strong>.' },

      causesPosition: 'top',
      causesLabel: 'THE STRATEGY MENU',
      causesEmoji: '\u{1F517}',
      causes: [
        { tone: 'blue',   icon: '\u{1F3ED}', head: 'Industrialisation', body: 'Move labour up the value chain.' },
        { tone: 'green',  icon: '✈️', head: 'Tourism', body: 'Earn foreign exchange.' },
        { tone: 'amber',  icon: '\u{1F33E}', head: 'Primary industries', body: 'Build on natural resources.' },
        { tone: 'purple', icon: '\u{1F91D}', head: 'Fairtrade', body: 'Improve producer terms.' },
        { tone: 'blue',   icon: '\u{1F3E6}', head: 'Aid & debt relief', body: 'Fill finance gaps.' },
        { tone: 'green',  icon: '\u{1F30D}', head: 'Institutions', body: 'World Bank, IMF, NGOs.' }
      ],

      flowTitle: 'MATCH STRATEGY TO PROBLEM',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'blue', icon: '\u{1F4C9}', title: 'Low productivity' },
        { tone: 'green', icon: '\u{1F4B1}', title: 'Foreign-exchange gap' },
        { tone: 'purple', icon: '\u{1F91D}', title: 'Weak producer power' },
        { tone: 'amber', icon: '\u{1F3E6}', title: 'Finance gaps' }
      ],

      causes2Label: 'HOW TO WRITE IT',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F50D}', head: 'Identify the constraint', body: 'What is holding growth back?' },
        { tone: 'green', icon: '\u{1F9E9}', head: 'Match the strategy', body: 'Pick the right tool.' },
        { tone: 'green', icon: '\u{1F310}', head: 'Apply in context', body: 'Use the country’s reality.' },
        { tone: 'green', icon: '⚖️', head: 'Evaluate', body: 'Limits, trade-offs and gains.' }
      ],

      pairLabel: 'Benefits vs Risks',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'green', icon: '✅', iconStyle: 'circle', label: 'Benefits',
        points: ['More jobs and income', 'Foreign exchange and finance', 'Higher productivity']
      },
      right: {
        tone: 'rose', icon: '⚠️', iconStyle: 'circle', label: 'Risks',
        points: ['Dependency and leakage', 'Volatility and shocks', 'Poor governance and capture']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'No single strategy works everywhere — the strongest results come from choosing the right combination for the country’s constraints, then making sure the gains are broad and sustainable.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Development strategies work best when they fit the country’s bottleneck and are backed by capable institutions.' },
      examEdge: { title: 'EXAM EDGE', text: 'Compare strategies on context and government-failure risks, and always say what each works best for.' }
    }
  ]
};
