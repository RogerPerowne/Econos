/* ============================================================
   ECONOS – Pattern of Trade (Edexcel A 4.1.3)
   6 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   What shapes who trades what with whom, and why trade flows
   change: comparative advantage, emerging economies, trade
   agreements and exchange rates — then a balanced whole story.

   Card patterns (no two consecutive repeat):
     1 Interactive hub (globe + 4 drivers) + how-the-story-works flow
     2 Decompose (comparative-advantage core logic) + real-trade + vs
     3 Twin comparison (Then/Now) + why-grew + effects flow + who-gains
     4 Side-by-side routes + agreement flows + creation-vs-diversion
     5 Twin comparison (appreciate/depreciate) + why-varies + story
     6 Evidence-then-verdict (chain + evaluation + mistakes + how-to)

   New visuals (js/icons.js):
     - patternOfTradeGlobe (Card 1 visualKey — globe + 4 drivers; the
       globalisation globe retained, adapted to four spokes)
     - patternCompAdvLogic (Card 2 visualKey — 3-panel core logic + table)
     - tradeThenNow        (Card 3 visualKey — Then vs Now trade-flow shift)
     - exchangeRateCases   (Card 5 visualKey — appreciation vs depreciation)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'pattern-of-trade',
  topicNum: '4.1.3',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Pattern of Trade',
  estTime: '16 min',
  goal: 'Explain the factors that shape the pattern of trade — comparative advantage, emerging economies, trading blocs and bilateral agreements, and exchange-rate changes — and why trade flows change over time',

  intro: {
    heroKey: 'heroFirm',
    summary: 'The pattern of trade is about who trades what with whom — and, crucially, why those flows change over time. A strong answer never relies on one factor. This deck works through the four big drivers: comparative advantage (the underlying theory), the rise of emerging economies (which redraws global production), trading blocs and bilateral deals (which change the barriers firms face), and exchange rates (which shift price competitiveness). Each driver is built with its own diagram, and the deck closes by combining them into a single evaluation chain so you can explain an observed trade pattern and then judge which forces matter most in context.',
    doInThis: 'Map the four big drivers of trade patterns around the globe. Use comparative advantage to explain the direction of trade. Show how emerging economies reshape global production, how trade agreements redirect flows (trade creation vs diversion), and how exchange-rate moves change competitiveness. Finish by combining the drivers into a balanced whole-story judgement.',
    outcomes: [
      'Identify the four big drivers of the pattern of trade',
      'Use comparative advantage to explain trade direction',
      'Explain how emerging economies reshape trade',
      'Analyse how trade agreements redirect flows',
      'Explain how exchange rates shift competitiveness',
      'Combine the drivers into a balanced judgement'
    ],
    tip: 'The phrase examiners reward is a combination of factors — trade patterns are a moving map of comparative advantage, policy choices and global change.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 16 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – The big picture
       Pattern: Interactive hub (globe + 4 drivers) + how-the-story-works flow
       ==================================================================== */
    {
      id: 'pot-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Pattern of trade — the big picture',
      lede: 'The pattern of trade is about who trades what with whom — and why trade flows change over time.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Trade patterns reflect <strong>comparative advantage</strong>, changing global production, trade agreements and exchange rates.' },

      visualKey: 'patternOfTradeGlobe',
      visualLabel: 'THE FOUR BIG DRIVERS',
      visualEmoji: '\u{1F3DB}️',

      flowTitle: 'HOW THE STORY WORKS',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F3ED}', title: 'Differences in costs', sub: 'And productivity.' },
        { tone: 'amber',  icon: '⭐', title: 'Specialisation emerges' },
        { tone: 'blue',   icon: '\u{1F6A2}', title: 'Exports & imports occur' },
        { tone: 'purple', icon: '\u{1F310}', title: 'Trade flows change', sub: 'Over time.' },
        { tone: 'green',  icon: '\u{1F4CA}', title: 'Winners & losers emerge' }
      ],

      causesLabel: 'WHAT YOU SHOULD NOTICE',
      causesEmoji: '\u{1F441}️',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '\u{1F504}', head: 'Patterns change', body: 'They are not fixed forever.' },
        { tone: 'blue',  icon: '↔️', head: 'Trade is two-way', body: 'Countries often both import and export.' },
        { tone: 'amber', icon: '\u{1F9E9}', head: 'Context matters', body: 'Products, policies and competitiveness all matter.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Do not explain trade patterns with <strong>one factor only</strong> — the best answers combine several influences.' },

      conclusion: { title: 'Big idea', text: 'Trade patterns are a moving map of comparative advantage, policy choices and global change.' },
      examEdge: 'In essays, explain the pattern first, then use <strong>comparative advantage, emerging economies, trade agreements and exchange rates</strong> to explain why it looks that way.'
    },

    /* ====================================================================
       CARD 2 – Comparative advantage shapes trade
       Pattern: Decompose (core logic) + how-this-shapes + do-not-confuse
       ==================================================================== */
    {
      id: 'pot-comparative-advantage',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'Comparative advantage shapes trade',
      lede: 'Countries tend to export goods where their opportunity cost is lower — even if another country is better at everything.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Comparative advantage helps explain the <strong>direction of trade</strong> — not just who is best in absolute terms.' },

      visualKey: 'patternCompAdvLogic',
      visualLabel: 'THE CORE LOGIC',
      visualEmoji: '\u{1F3DB}️',

      causesLabel: 'HOW THIS SHAPES REAL TRADE',
      causesEmoji: '\u{1F310}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green', icon: '\u{1F4A7}', head: 'Primary products', body: 'Countries rich in oil, minerals or land often export them.' },
        { tone: 'amber', icon: '\u{1F3ED}', head: 'Manufacturing', body: 'Low-cost or highly productive economies export manufactured goods.' },
        { tone: 'blue',  icon: '\u{1F3A7}', head: 'Services', body: 'Skilled labour and technology can create service exports.' },
        { tone: 'blue',  icon: '\u{1F4C8}', head: 'It can change', body: 'Productivity, education and technology can shift advantage over time.' }
      ],

      causes2Label: 'WHY EVALUATION MATTERS',
      causes2Emoji: '\u{1F50D}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green',  icon: '\u{1F69A}', head: 'Transport costs', body: 'Can weaken the trade gain.' },
        { tone: 'amber',  icon: '\u{1F6A7}', head: 'Trade barriers', body: 'Tariffs and quotas may block specialisation.' },
        { tone: 'purple', icon: '⏱️', head: 'Static model', body: 'In reality, costs and advantages evolve.' }
      ],

      pairLabel: 'Absolute advantage vs Comparative advantage',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '\u{1F3C6}',
        iconStyle: 'circle',
        label: 'Absolute advantage',
        points: ['Can produce more with the same resources.']
      },
      right: {
        tone: 'purple',
        icon: '⚖️',
        iconStyle: 'circle',
        label: 'Comparative advantage',
        points: ['Gives up less of the other good.']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Trade can still be worthwhile <strong>even when one country is better at everything</strong>.' },

      conclusion: { title: 'Big idea', text: 'Trade patterns often reflect relative opportunity costs — but they are shaped by more than theory alone.' },
      examEdge: 'If asked about trade patterns, define comparative advantage clearly and then connect it to the <strong>product or country in the question</strong>.'
    },

    /* ====================================================================
       CARD 3 – Emerging economies reshape trade
       Pattern: Twin comparison (Then/Now) + why-grew + effects flow + who-gains
       ==================================================================== */
    {
      id: 'pot-emerging-economies',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'Emerging economies reshape trade',
      lede: 'As fast-growing economies industrialise, they change what the world makes, sells and buys.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'New low-cost and fast-growing producers can <strong>redraw trade patterns</strong> very quickly.' },

      visualKey: 'tradeThenNow',
      visualLabel: 'WHAT CHANGED',
      visualEmoji: '\u{1F3DB}️',

      causesFirst: true,
      causesLabel: 'WHY EMERGING ECONOMIES GREW',
      causesEmoji: '⭐',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F465}', head: 'Lower labour costs', body: 'Helped attract manufacturing.' },
        { tone: 'blue',   icon: '\u{1F310}', head: 'FDI & technology', body: 'Multinationals brought know-how and capital.' },
        { tone: 'purple', icon: '\u{1F6A2}', head: 'Infrastructure & scale', body: 'Ports, roads and factories improved competitiveness.' },
        { tone: 'amber',  icon: '\u{1F4C8}', head: 'Export-led growth', body: 'Governments often backed trade and industry.' }
      ],

      flowTitle: 'THE EFFECTS ON TRADE FLOWS',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '\u{1F3ED}', title: 'More competitive production' },
        { tone: 'rose',   icon: '\u{1F6A2}', title: 'Exports rise' },
        { tone: 'purple', icon: '\u{1F310}', title: 'Supply chains spread' },
        { tone: 'blue',   icon: '\u{1F3DB}️', title: 'Others import or relocate' }
      ],

      causes3Label: 'WHO GAINS — WHO LOSES?',
      causes3Emoji: '\u{1F465}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'green',  icon: '\u{1F6D2}', head: 'Consumers', body: 'Often gain from lower prices and more choice.' },
        { tone: 'blue',   icon: '\u{1F3E2}', head: 'Firms', body: 'Can access cheaper inputs and bigger markets.' },
        { tone: 'amber',  icon: '\u{1F477}', head: 'Workers', body: 'Some gain new jobs, others face tougher competition.' },
        { tone: 'purple', icon: '\u{1F3DB}️', head: 'Governments', body: 'Growth may rise, but adjustment pressures appear.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The gains are real, but they are <strong>not evenly shared</strong>.' },

      conclusion: { title: 'Big idea', text: 'Emerging economies matter because they alter global competitiveness — and that changes the map of trade.' },
      examEdge: 'Use emerging economies as a <strong>dynamic explanation</strong> — they help explain why trade patterns change over time, not just why they exist.'
    },

    /* ====================================================================
       CARD 4 – Trading blocs and bilateral deals
       Pattern: Side-by-side routes + agreement flows + creation-vs-diversion
       ==================================================================== */
    {
      id: 'pot-trading-blocs',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'Trading blocs and bilateral deals',
      lede: 'Trade agreements can redirect imports and exports by lowering barriers between selected countries.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'When tariffs and rules change, <strong>trade flows often change too</strong>.' },

      causesFirst: true,
      causesLabel: 'TWO MAIN ROUTES',
      causesEmoji: '\u{1F3DB}️',
      causesStyle: 'icon-top',
      causesCols: 2,
      causes: [
        { tone: 'green', icon: '\u{1F30D}', head: '1 · Trading bloc', body: 'Several countries reduce trade barriers together.' },
        { tone: 'blue',  icon: '\u{1F91D}', head: '2 · Bilateral deal', body: 'Two countries agree easier trade with each other.' }
      ],

      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '\u{1F3F7}️', title: 'Lower tariffs' },
        { tone: 'blue',   icon: '\u{1F3EA}', title: 'Easier market access' },
        { tone: 'purple', icon: '\u{1F6A2}', title: 'Flow of goods' }
      ],

      flow2Title: 'HOW AGREEMENTS CHANGE FLOWS',
      flow2Emoji: '\u{1F4C8}',
      flow2Sep: '→',
      flow2: [
        { tone: 'green',  icon: '\u{1F6E1}️', title: 'Trade barriers fall' },
        { tone: 'amber',  icon: '\u{1F3F7}️', title: 'Relative prices improve' },
        { tone: 'blue',   icon: '↕️', title: 'Exports & imports rise' },
        { tone: 'purple', icon: '\u{1F504}', title: 'Patterns of trade shift' }
      ],

      causes3Label: 'WHY FIRMS CARE',
      causes3Emoji: '\u{1F465}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'green',  icon: '\u{1F465}', head: 'Bigger market', body: 'Firms can sell to more consumers.' },
        { tone: 'blue',   icon: '\u{1F517}', head: 'Supply chains', body: 'Components move more easily across borders.' },
        { tone: 'amber',  icon: '\u{1F6E1}️', head: 'Common standards', body: 'Trade is simpler when rules align.' },
        { tone: 'purple', icon: '\u{1F3C6}', head: 'Competition', body: 'Domestic firms may face stronger rivals.' }
      ],

      pairLabel: 'Trade creation vs Trade diversion',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '\u{1F4C8}',
        iconStyle: 'circle',
        label: 'Trade creation',
        points: ['Lower-cost suppliers inside the agreement replace higher-cost domestic production.']
      },
      right: {
        tone: 'purple',
        icon: '\u{1F4C9}',
        iconStyle: 'circle',
        label: 'Trade diversion',
        points: ['Imports switch from an efficient outside producer to a less efficient one inside, because tariffs differ.']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Agreements do not help everyone equally — <strong>some sectors gain more than others</strong>.' },

      conclusion: { title: 'Big idea', text: 'Trade agreements matter because they change the barriers firms face — and that can redirect trade, not just increase it.' },
      examEdge: 'A strong answer distinguishes <strong>trade creation from trade diversion</strong> and links the agreement to changing trade flows.'
    },

    /* ====================================================================
       CARD 5 – Exchange rates and trade flows
       Pattern: Twin comparison (appreciate/depreciate) + why-varies + story
       ==================================================================== */
    {
      id: 'pot-exchange-rates',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'Exchange rates and trade flows',
      lede: 'A stronger or weaker currency changes international prices — and can shift exports and imports.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Exchange rate movements can change <strong>price competitiveness</strong> and therefore the pattern of trade.' },

      visualKey: 'exchangeRateCases',
      visualLabel: 'THE TWO MAIN CASES',
      visualEmoji: '\u{1F3DB}️',

      causesFirst: true,
      causesLabel: 'WHY THE EFFECT VARIES',
      causesEmoji: '\u{1F4A1}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '⚖️', head: 'PED matters', body: 'Quantity may respond strongly or weakly.' },
        { tone: 'blue',   icon: '\u{1F396}️', head: 'Non-price factors', body: 'Quality and branding still matter.' },
        { tone: 'purple', icon: '⏰', head: 'Time lags', body: 'Contracts and habits delay the effect.' },
        { tone: 'amber',  icon: '\u{1F3ED}', head: 'Supply capacity', body: 'Firms must be able to expand output.' }
      ],

      flowTitle: 'A SIMPLE TRADE STORY',
      flowEmoji: '\u{1F4D6}',
      flow: [
        { tone: 'green',  icon: '\u{1F4B1}', title: 'Exchange rate moves' },
        { tone: 'amber',  icon: '\u{1F3F7}️', title: 'Relative prices change' },
        { tone: 'blue',   icon: '\u{1F6A2}', title: 'Exports & imports respond' },
        { tone: 'purple', icon: '\u{1F310}', title: 'Trade flows shift' }
      ],

      causes3Label: 'DO NOT OVERSTATE IT',
      causes3Emoji: '\u{1F441}️',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'green',  icon: '\u{1F9E9}', head: 'One factor only', body: 'Exchange rates matter, but are not the whole story.' },
        { tone: 'blue',   icon: '\u{1FA99}', head: 'Imported inputs', body: 'A weaker currency can also raise firms’ costs.' },
        { tone: 'purple', icon: '\u{1F310}', head: 'Global demand', body: 'Even a cheaper export may not sell more in a weak world economy.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The effect is usually clearer when the currency change is <strong>large and persistent</strong>.' },

      conclusion: { title: 'Big idea', text: 'Exchange rates shape trade by changing price competitiveness — but the final effect depends on elasticity, time and context.' },
      examEdge: 'Always explain the direction clearly: appreciation tends to <strong>weaken exports and boost imports</strong>, while depreciation tends to do the reverse.'
    },

    /* ====================================================================
       CARD 6 – The whole story
       Pattern: Evidence-then-verdict (chain + evaluation + mistakes + how-to)
       ==================================================================== */
    {
      id: 'pot-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole story',
      lede: 'Strong answers describe the pattern of trade and then explain how costs, policy and global change shape it.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Trade patterns are best explained by combining <strong>comparative advantage, emerging economies, trade agreements and exchange rates</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F3DB}️',
      flow: [
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Relative costs & productivity' },
        { tone: 'amber',  icon: '⚖️', title: 'Comparative advantage appears' },
        { tone: 'blue',   icon: '\u{1F3ED}', title: 'Emerging economies change production' },
        { tone: 'purple', icon: '\u{1F91D}', title: 'Trade agreements alter barriers' },
        { tone: 'purple', icon: '\u{1F4B7}', title: 'Exchange rates affect competitiveness' },
        { tone: 'green',  icon: '\u{1F310}', title: 'Trade flows shift & outcomes differ' }
      ],

      causesLabel: 'COMMON EVALUATION POINTS',
      causesEmoji: '\u{1F441}️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '⏳', head: 'Short vs long run', body: 'Some changes appear slowly.' },
        { tone: 'amber',  icon: '\u{1F4E6}', head: 'Product matters', body: 'Primary goods, manufactures and services behave differently.' },
        { tone: 'blue',   icon: '\u{1F465}', head: 'Winners & losers', body: 'Gains are uneven across firms, workers and countries.' },
        { tone: 'purple', icon: '\u{1F9E9}', head: 'Several forces at once', body: 'The best explanation combines drivers.' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose',   icon: '❌', head: 'One-cause answers', body: 'Do not rely on one factor only.' },
        { tone: 'amber',  icon: '⏰', head: 'Static thinking', body: 'Trade patterns evolve over time.' },
        { tone: 'purple', icon: '\u{1F4C4}', head: 'Ignore policy', body: 'Agreements and exchange rates can redirect trade.' }
      ],

      causes3Label: 'HOW TO WRITE IT',
      causes3Emoji: '✍️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'green',  icon: '\u{1F4AC}', head: '1 · Describe the pattern', body: 'What is traded and with whom?' },
        { tone: 'amber',  icon: '⚙️', head: '2 · Explain the drivers', body: 'Comparative advantage, emerging economies, deals, exchange rates.' },
        { tone: 'blue',   icon: '\u{1F4C8}', head: '3 · Assess change', body: 'Why have flows shifted?' },
        { tone: 'purple', icon: '⚖️', head: '4 · Judge importance', body: 'Which factor matters most in context?' }
      ],

      conclusion: { title: 'Big idea', text: 'The pattern of trade is a moving outcome — created by relative advantage, reshaped by policy, and constantly influenced by global change.' },
      examEdge: 'Top answers start with the observed trade pattern, then use several linked explanations and a <strong>context-based final judgement</strong>.'
    }
  ]
};
