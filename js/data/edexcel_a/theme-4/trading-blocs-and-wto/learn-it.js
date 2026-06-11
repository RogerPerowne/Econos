/* ============================================================
   ECONOS – Trading Blocs and the WTO (Edexcel A 4.1.5)
   7 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   Regional integration (FTA → customs union → common market →
   monetary union) and the multilateral system (the WTO), evaluated
   through trade creation vs trade diversion and regional gains vs
   global efficiency.

   Card patterns (no two consecutive repeat):
     1 Flow overview + why-it-matters + roadmap + RTA-vs-WTO pair
     2 Numbered ladder (four types) + step-adds flow + trade-off pair
     3 Side-by-side pair + FTA/customs flow diagram + possible effects
     4 Twin pair (common market / monetary union) + conditions + eurozone flow
     5 Evidence-then-verdict (benefits + costs + welfare story + who-gains)
     6 Tile grid (what WTO does) + liberalisation flow + why + limits
     7 Evidence-then-verdict (chain + benefits + risks + how-to)

   New visual (js/icons.js):
     - ftaVsCustomsFlows (Card 3 flowChart — how outside goods can slip in
       via the lower-tariff member in an FTA, but not in a customs union)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'trading-blocs-and-wto',
  topicNum: '4.1.5',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Trading Blocs and the WTO',
  estTime: '18 min',
  goal: 'Classify the main types of trading bloc, analyse their costs and benefits through trade creation and diversion, explain the role of the WTO, and evaluate regional integration against wider global welfare',

  intro: {
    heroKey: 'heroTradingBlocs',
    summary: 'This topic has two layers. Trading blocs are regional: countries form a group and give each other preferential access, climbing a ladder of integration from a free trade area, through a customs union and common market, to a monetary union — each rung deeper, each rung costing more policy independence. The WTO is global: a rules-based system that tries to keep the wider trading system open, predictable and fair. The analytical heart is trade creation versus trade diversion — whether a bloc shifts demand to lower-cost producers (raising welfare) or to higher-cost members behind a common tariff (lowering it). The deck closes by weighing regional gains against global efficiency.',
    doInThis: 'Classify the four main types of bloc and what each stage adds. Compare FTAs and customs unions and show how trade flows change. Explain common markets and monetary unions and the conditions a currency union needs. Weigh the benefits and costs of regional agreements through trade creation and diversion. Explain the role and limits of the WTO. Finish with a balanced judgement of regionalism versus the multilateral system.',
    outcomes: [
      'Classify the main types of trading bloc',
      'Explain the ladder of economic integration',
      'Compare FTAs and customs unions',
      'Analyse common markets and monetary unions',
      'Evaluate the benefits and costs of regional agreements',
      'Explain the role and limits of the WTO'
    ],
    tip: 'The phrase that separates top answers is trade creation versus trade diversion — it decides whether a bloc raises or lowers welfare.',
    stages: [
      { num: 1, name: 'Learn',  sub: '7 cards \xb7 18 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – The big picture
       Pattern: Flow overview + why-it-matters + roadmap + RTA-vs-WTO pair
       ==================================================================== */
    {
      id: 'tbw-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 7',
      title: 'Trading blocs and the WTO — the big picture',
      lede: 'Countries often trade more freely within blocs, while the WTO tries to keep the wider global trading system open and rules-based.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Regional trade agreements reduce trade barriers <strong>within a group</strong> — the WTO aims to liberalise trade <strong>more broadly</strong> across the world.' },

      flowTitle: 'WHAT THIS TOPIC IS ABOUT',
      flowEmoji: '\u{1F310}',
      flow: [
        { tone: 'green',  icon: '\u{1F465}', title: 'Trading blocs', sub: 'Countries form regional groups.' },
        { tone: 'amber',  icon: '\u{1F6A7}', title: 'Lower internal barriers', sub: 'Barriers fall inside the bloc.' },
        { tone: 'purple', icon: '⚖️', title: 'WTO rules', sub: 'Global rules keep trade open.' },
        { tone: 'blue',   icon: '\u{1F501}', title: 'Creation or diversion', sub: 'Trade may expand or shift.' },
        { tone: 'green',  icon: '\u{1F3C6}', title: 'Winners & losers', sub: 'Some gain access; others lose.' }
      ],

      causesLabel: 'WHY IT MATTERS',
      causesEmoji: '\u{1F4CA}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green', icon: '\u{1F4C8}', head: 'Trade can expand', body: 'More market access and competition.' },
        { tone: 'amber', icon: '\u{1F3F7}️', head: 'Prices can fall', body: 'Imports become cheaper.' },
        { tone: 'purple', icon: '\u{1F3ED}', head: 'Trade patterns change', body: 'Firms reorient supply chains.' },
        { tone: 'rose',  icon: '❗', head: 'Conflicts can emerge', body: 'Bloc preferences may clash with wider liberalisation.' }
      ],

      causes3Label: 'WHAT YOU WILL LEARN',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'blue', icon: '\u{1F5C2}️', head: '1 · Types of bloc', body: 'From FTA to monetary union.' },
        { tone: 'blue', icon: '⚖️', head: '2 · Costs & benefits', body: 'Trade creation and diversion.' },
        { tone: 'blue', icon: '\u{1F310}', head: '3 · Role of the WTO', body: 'The multilateral system.' },
        { tone: 'blue', icon: '\u{1F6E1}️', head: '4 · Conflicts & evaluation', body: 'Regional vs global welfare.' }
      ],

      pairLabel: 'Regional trade agreements vs The WTO',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue',
        icon: '\u{1F310}',
        iconStyle: 'circle',
        label: 'Regional trade agreements',
        points: ['Countries join a smaller group', 'Preferential access inside the bloc', 'FTAs, customs unions, common markets, monetary unions']
      },
      right: {
        tone: 'green',
        icon: '\u{1F3DB}️',
        iconStyle: 'circle',
        label: 'The WTO',
        points: ['Global rules-based framework', 'Promotes freer trade and settles disputes', 'Covers many countries, not just one bloc']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Do not treat all trading blocs as the same — <strong>each stage of integration goes further</strong>.' },

      conclusion: { title: 'Big idea', text: 'Trading blocs are about preferential regional integration; the WTO is about keeping the broader global trading system as open and predictable as possible.' },
      examEdge: 'Strong answers define the <strong>type of bloc</strong>, explain the likely effects on trade, then weigh regional gains against wider global tensions.'
    },

    /* ====================================================================
       CARD 2 – The ladder of integration
       Pattern: Numbered ladder (four types) + step-adds flow + trade-off pair
       ==================================================================== */
    {
      id: 'tbw-ladder',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 7',
      title: 'The ladder of integration',
      lede: 'Regional trade agreements go in stages — each step removes more barriers but usually requires more shared rules.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'As you move up the ladder from FTA to monetary union, <strong>integration deepens</strong> and policy independence usually falls.' },

      causesFirst: true,
      causesLabel: 'THE FOUR MAIN TYPES',
      causesEmoji: '\u{1F310}',
      causesStyle: 'numbered-rows',
      causes: [
        { tone: 'green',  icon: '\u{1F91D}', head: 'Free trade area', body: 'Tariffs removed between members; each country keeps its own external tariffs.' },
        { tone: 'amber',  icon: '\u{1F6E1}️', head: 'Customs union', body: 'Free trade inside, plus a common external tariff.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'Common market', body: 'Customs union plus freer movement of labour and capital.' },
        { tone: 'blue',   icon: '\u{1FA99}', head: 'Monetary union', body: 'Common market plus a shared currency and usually a common interest rate.' }
      ],

      flowTitle: 'WHAT EACH STEP ADDS',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '\u{1F3F7}️', title: 'Remove tariffs' },
        { tone: 'amber',  icon: '\u{1F6E1}️', title: 'Share border tariff' },
        { tone: 'purple', icon: '\u{1F465}', title: 'Allow factor mobility' },
        { tone: 'blue',   icon: '\u{1FA99}', title: 'Share money policy' }
      ],

      pairLabel: 'More integration vs Less policy freedom',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '\u{1F4C8}',
        iconStyle: 'circle',
        label: 'More integration',
        points: ['Bigger market', 'Lower barriers', 'Easier trade']
      },
      right: {
        tone: 'rose',
        icon: '⚠️',
        iconStyle: 'circle',
        label: 'Less policy freedom',
        points: ['Shared rules', 'Harder to act alone', 'Common decisions matter']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Do not confuse the types — a customs union is deeper than an FTA, and a monetary union is deeper still.' },

      conclusion: { title: 'Big idea', text: 'Trading blocs are best understood as stages of economic integration.' },
      examEdge: 'In essays, identify the <strong>exact type of bloc</strong> before discussing costs, benefits or conflicts.'
    },

    /* ====================================================================
       CARD 3 – Free trade areas and customs unions
       Pattern: Side-by-side pair + FTA/customs flow diagram + possible effects
       ==================================================================== */
    {
      id: 'tbw-fta-customs',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 7',
      title: 'Free trade areas and customs unions',
      lede: 'Both lower barriers inside the bloc — but only customs unions share the same external tariff.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The key extra feature of a customs union is the <strong>common external tariff</strong>.' },

      pairFirst: true,
      pairLabel: 'Free trade area vs Customs union',
      pairEmoji: '\u{1F310}',
      left: {
        tone: 'blue',
        icon: '\u{1F310}',
        iconStyle: 'circle',
        label: 'Free trade area',
        points: ['No tariffs between members', 'Each country keeps its own external tariff', 'Rules of origin matter', 'e.g. UK trade-deal / NAFTA-style logic']
      },
      right: {
        tone: 'green',
        icon: '\u{1F3DB}️',
        iconStyle: 'circle',
        label: 'Customs union',
        points: ['No tariffs between members', 'Same external tariff against non-members', 'Less need for rules of origin', 'e.g. EU customs-union logic']
      },

      flowChart: {
        svgKey: 'ftaVsCustomsFlows',
        label: 'HOW TRADE FLOWS CHANGE',
        emoji: '\u{1F500}',
        caption: 'In an FTA, outside goods can route in through the lower-tariff member; a common external tariff closes that gap.'
      },

      causesLabel: 'POSSIBLE EFFECTS',
      causesEmoji: '\u{1F4CA}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Trade creation', body: 'A lower-cost member replaces a dearer home producer.' },
        { tone: 'amber',  icon: '\u{1F500}', head: 'Trade diversion', body: 'A member replaces a cheaper outside producer because of bloc preference.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'More competition', body: 'Firms face stronger rivals.' },
        { tone: 'blue',   icon: '\u{1F91D}', head: 'Policy coordination', body: 'Members act more jointly on trade.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: '<strong>Trade creation</strong> tends to raise welfare — <strong>trade diversion</strong> may reduce it.' },

      conclusion: { title: 'Big idea', text: 'FTAs and customs unions both liberalise regional trade, but customs unions integrate more deeply.' },
      examEdge: 'Always explain whether welfare rises because trade is <strong>created</strong> — or falls because trade is <strong>diverted</strong>.'
    },

    /* ====================================================================
       CARD 4 – Common markets and monetary unions
       Pattern: Twin pair + conditions + eurozone flow
       ==================================================================== */
    {
      id: 'tbw-common-monetary',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 7',
      title: 'Common markets and monetary unions',
      lede: 'Some blocs go beyond tariffs — allowing factor mobility or even sharing a currency.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A monetary union works best when member economies can <strong>cope with one interest rate and one currency</strong>.' },

      pairFirst: true,
      pairLabel: 'Common market vs Monetary union',
      pairEmoji: '\u{1F310}',
      left: {
        tone: 'green',
        icon: '\u{1F465}',
        iconStyle: 'circle',
        label: 'Common market',
        points: ['Customs union plus free movement of labour and capital', 'Workers and firms can relocate more easily', 'Integration affects labour and investment, not just goods']
      },
      right: {
        tone: 'purple',
        icon: '\u{1FA99}',
        iconStyle: 'circle',
        label: 'Monetary union',
        points: ['Members share a currency and monetary policy', 'Exchange-rate uncertainty disappears inside the union', 'Members lose their own exchange rate and rate-setting power']
      },

      causesFirst: true,
      causesLabel: 'CONDITIONS FOR SUCCESS',
      causesEmoji: '\u{1F9F1}',
      causesStyle: 'icon-top',
      causesCols: 2,
      causes: [
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Similar business cycles', body: 'One interest rate suits members better.' },
        { tone: 'blue',   icon: '\u{1F9F3}', head: 'Labour mobility', body: 'Workers can move to where jobs are.' },
        { tone: 'amber',  icon: '\u{1F967}', head: 'Fiscal support / transfers', body: 'Help regions hit by shocks.' },
        { tone: 'purple', icon: '⚙️', head: 'Flexible wages and prices', body: 'Economies adjust without devaluation.' }
      ],

      flowTitle: 'EUROZONE LESSON',
      flowEmoji: '\u{1F4CA}',
      flowSep: '→',
      flow: [
        { tone: 'blue',   icon: '\u{1FA99}', title: 'Single currency' },
        { tone: 'green',  icon: '\u{1F4B3}', title: 'Lower transaction costs' },
        { tone: 'blue',   icon: '\u{1F4C8}', title: 'Easier trade & investment' },
        { tone: 'rose',   icon: '⚠️', title: 'But asymmetric shocks can hurt' }
      ],

      bottomTip: [
        { icon: '⚠️', tone: 'amber', text: 'If Greece, Germany and Spain face different shocks, <strong>one interest rate may not fit all</strong>.' },
        { icon: 'ℹ️', tone: 'blue', text: 'Monetary unions can bring stability and lower transaction costs — but they reduce national macroeconomic freedom.' }
      ],

      conclusion: { title: 'Big idea', text: 'The deeper the bloc, the greater the integration — and the greater the need for successful adjustment mechanisms.' },
      examEdge: 'When discussing the Eurozone, balance lower trading costs against the <strong>loss of national monetary policy</strong>.'
    },

    /* ====================================================================
       CARD 5 – Benefits and costs of regional trade agreements
       Pattern: Evidence-then-verdict (benefits + costs + welfare story + who-gains)
       ==================================================================== */
    {
      id: 'tbw-benefits-costs',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 7',
      title: 'Benefits and costs of regional trade agreements',
      lede: 'Blocs can raise welfare — but the gains are uneven and some trade may simply be redirected.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The strongest evaluation turns on <strong>trade creation versus trade diversion</strong>.' },

      causesFirst: true,
      causesLabel: 'BENEFITS',
      causesEmoji: '\u{1F310}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green', icon: '\u{1F4C8}', head: 'Larger markets', body: 'Firms sell to more consumers.' },
        { tone: 'amber', icon: '\u{1F3ED}', head: 'Economies of scale', body: 'Lower average costs as output rises.' },
        { tone: 'purple', icon: '\u{1F3C6}', head: 'More competition', body: 'Inefficient firms face pressure.' },
        { tone: 'blue',  icon: '\u{1F6D2}', head: 'Lower prices & choice', body: 'Consumers gain from imports.' }
      ],

      causes2Label: 'COSTS AND RISKS',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'rose', icon: '\u{1F500}', head: 'Trade diversion', body: 'Imports switch from the cheapest world source to a member country.' },
        { tone: 'rose', icon: '\u{1F465}', head: 'Uneven regional gains', body: 'Core areas may gain more than weaker regions.' },
        { tone: 'rose', icon: '\u{1F3DB}️', head: 'Loss of tariff revenue', body: 'Governments may collect less.' },
        { tone: 'rose', icon: '\u{1F512}', head: 'Reduced policy autonomy', body: 'Rules inside the bloc can constrain members.' }
      ],

      flowTitle: 'A SIMPLE WELFARE STORY',
      flowEmoji: '⚖️',
      flowSep: '→',
      flow: [
        { tone: 'blue',   icon: '\u{1F310}', title: 'Before bloc', sub: 'Buy from home or the world.' },
        { tone: 'purple', icon: '\u{1F465}', title: 'After bloc', sub: 'A lower-cost member enters.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Trade creation', sub: 'Efficiency up.' },
        { tone: 'rose',   icon: '\u{1F4C9}', title: 'Trade diversion', sub: 'Efficiency may fall.' }
      ],

      causes3Label: 'WHO GAINS MOST?',
      causes3Emoji: '\u{1F465}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'green', icon: '\u{1F6D2}', head: 'Consumers', body: 'Usually like lower prices and more choice.' },
        { tone: 'blue',  icon: '\u{1F4BC}', head: 'Efficient firms', body: 'Gain export access.' },
        { tone: 'rose',  icon: '\u{1F477}', head: 'Less competitive firms / workers', body: 'May lose from tougher competition.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Regional trade agreements are not automatically good or bad — it depends on <strong>what trade changes and who gains</strong>.' },

      conclusion: { title: 'Big idea', text: 'Regional integration can increase welfare, but its benefits depend on whether it creates or diverts trade.' },
      examEdge: 'Evaluation should consider <strong>dynamic gains, short-run adjustment costs, and the distribution of gains</strong> between groups.'
    },

    /* ====================================================================
       CARD 6 – The WTO and trade liberalisation
       Pattern: Tile grid (what WTO does) + liberalisation flow + why + limits
       ==================================================================== */
    {
      id: 'tbw-wto',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 7',
      title: 'The WTO and trade liberalisation',
      lede: 'The World Trade Organization tries to keep global trade more open, more predictable, and more rules-based.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The WTO promotes freer trade mainly through <strong>rules, negotiations and dispute settlement</strong>.' },

      causesPosition: 'top',
      causesLabel: 'WHAT THE WTO DOES',
      causesEmoji: '\u{1F310}',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '⚖️', head: 'Sets rules', body: 'A common framework for global trade.' },
        { tone: 'amber',  icon: '\u{1F465}', head: 'Negotiates', body: 'A forum for reducing barriers.' },
        { tone: 'purple', icon: '\u{1F528}', head: 'Settles disputes', body: 'Countries challenge unfair trade practices.' },
        { tone: 'blue',   icon: '\u{1F4C4}', head: 'Encourages transparency', body: 'Members publish and justify policies.' }
      ],

      flowTitle: 'HOW IT SUPPORTS LIBERALISATION',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '\u{1F91D}', title: 'Negotiation round' },
        { tone: 'amber',  icon: '\u{1F4C9}', title: 'Tariffs & barriers fall' },
        { tone: 'blue',   icon: '\u{1F310}', title: 'Trade flows expand' },
        { tone: 'purple', icon: '\u{1F4C8}', title: 'Specialisation & competition rise' }
      ],

      causes2Label: 'WHY IT MATTERS',
      causes2Emoji: '\u{1F4CA}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'green',  icon: '\u{1F465}', head: 'Smaller countries', body: 'Rules can protect them from pure power politics.' },
        { tone: 'amber',  icon: '\u{1F4BC}', head: 'Firms', body: 'More predictable access to markets.' },
        { tone: 'purple', icon: '\u{1F6D2}', head: 'Consumers', body: 'More choice and lower prices.' },
        { tone: 'blue',   icon: '\u{1F3DB}️', head: 'Governments', body: 'Fewer trade wars, clearer dispute process.' }
      ],

      causes3Label: 'LIMITS AND CRITICISMS',
      causes3Emoji: '⚠️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'rose', icon: '⏳', head: 'Slow progress', body: 'Consensus is hard.' },
        { tone: 'rose', icon: '\u{1F3CB}️', head: 'Power imbalances', body: 'Stronger states still matter.' },
        { tone: 'rose', icon: '\u{1F551}', head: 'Disputes can drag on', body: 'Rulings are not instant.' },
        { tone: 'rose', icon: '\u{1F578}️', head: 'Regional blocs move faster', body: 'Countries may prefer smaller deals.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The WTO is not a world government — it is a <strong>rules-based system that depends on member cooperation</strong>.' },

      conclusion: { title: 'Big idea', text: 'The WTO is the main global institution for trade liberalisation, but it works through negotiation and compliance rather than force.' },
      examEdge: 'When asked about the WTO, explain both its role in <strong>freeing trade</strong> and the practical <strong>limits</strong> on what it can achieve.'
    },

    /* ====================================================================
       CARD 7 – The whole story
       Pattern: Evidence-then-verdict (chain + benefits + risks + how-to)
       ==================================================================== */
    {
      id: 'tbw-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 7 of 7',
      title: 'The whole story',
      lede: 'Strong answers classify the bloc, explain the effects on trade, and then judge whether regional integration supports or weakens wider global welfare.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Regional trade agreements and the WTO both lower trade barriers — but they do so at <strong>different scales</strong> and with <strong>different side-effects</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F6A6}', title: 'Type of bloc', sub: 'FTA → monetary union.' },
        { tone: 'amber',  icon: '⬇️', title: 'Barriers fall', sub: 'Internal trade is easier.' },
        { tone: 'purple', icon: '\u{1F501}', title: 'Trade changes', sub: 'Creation or diversion.' },
        { tone: 'blue',   icon: '\u{1F465}', title: 'Winners & losers', sub: 'Consumers, firms, governments.' },
        { tone: 'green',  icon: '\u{1F310}', title: 'WTO context', sub: 'Inside a wider global system.' },
        { tone: 'purple', icon: '⚖️', title: 'Final judgement', sub: 'Benefits depend on context.' }
      ],

      causesLabel: 'COMMON BENEFITS',
      causesEmoji: '\u{1F381}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green', icon: '\u{1F4C8}', head: 'More trade', body: 'Bigger markets, more access.' },
        { tone: 'green', icon: '\u{1F3F7}️', head: 'Lower prices', body: 'Cheaper imports for consumers.' },
        { tone: 'green', icon: '\u{1F465}', head: 'Bigger markets', body: 'Firms sell to more buyers.' },
        { tone: 'green', icon: '\u{1F3ED}', head: 'Scale gains', body: 'Lower costs as output rises.' }
      ],

      causes2Label: 'COMMON RISKS',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'rose', icon: '\u{1F501}', head: 'Trade diversion', body: 'Demand shifts to dearer members.' },
        { tone: 'rose', icon: '\u{1F465}', head: 'Unequal gains', body: 'Some regions gain more.' },
        { tone: 'rose', icon: '\u{1F512}', head: 'Less policy freedom', body: 'Shared rules constrain members.' },
        { tone: 'rose', icon: '\u{1F30D}', head: 'Global tension', body: 'Clash with wider liberalisation.' }
      ],

      causes3Label: 'HOW TO WRITE IT',
      causes3Emoji: '✍️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'blue', icon: '\u{1F4C4}', head: '1 · Define the bloc', body: 'Name the exact type.' },
        { tone: 'blue', icon: '⚙️', head: '2 · Explain the mechanism', body: 'How barriers and flows change.' },
        { tone: 'blue', icon: '⚖️', head: '3 · Analyse costs & benefits', body: 'Creation vs diversion.' },
        { tone: 'blue', icon: '\u{1F310}', head: '4 · Evaluate with WTO & context', body: 'Regional vs global welfare.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Do not assume all regional integration is good — deeper integration brings both <strong>larger gains and larger trade-offs</strong>.' },

      conclusion: { title: 'Big idea', text: 'Trading blocs are about regional integration; the WTO is about the wider multilateral trading system.' },
      examEdge: 'Top answers combine classification, analysis and evaluation — especially <strong>trade creation versus diversion</strong> and regional gains versus global efficiency.'
    }
  ]
};
