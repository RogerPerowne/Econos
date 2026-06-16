/* ============================================================
   ECONOS – Terms of Trade (Edexcel A 4.1.4)
   6 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   The relative-price topic: what terms of trade measures, how to
   calculate the index, what moves it, and the impact when it
   improves or deteriorates — then a balanced whole story.

   Card patterns (no two consecutive repeat):
     1 Decompose (formula node) + what-it-tells-us + improve/deteriorate
     2 Worked example (calc panels) + three steps + how-to-read
     3 Tile grid (four drivers) + twin stories + why-countries-differ
     4 Evidence-then-verdict (benefits + trade-offs + chain + good/risk)
     5 Twin comparison (costs + upsides + chain + who-is-exposed)
     6 Evidence-then-verdict (chain + evaluation + mistakes + how-to)

   New visuals (js/icons.js):
     - termsOfTradeFormula (Card 1 visualKey — export/import index + TOT node)
     - totWorkedExamples   (Card 2 visualKey — improvement vs deterioration calc)
     - totTwoStories       (Card 3 flowChart — improvement vs deterioration flow)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'terms-of-trade',
  topicNum: '4.1.4',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Terms of Trade',
  estTime: '16 min',
  goal: 'Define and calculate the terms of trade, explain the factors that move it, and evaluate the impact of an improvement or a deterioration on purchasing power, competitiveness and the wider economy',

  intro: {
    heroKey: 'heroTermsOfTrade',
    summary: 'Terms of trade is an index of export prices relative to import prices — when it rises, each unit of exports buys more imports. We calculate and interpret it, explain what moves it, then weigh how an improvement or deterioration trades off purchasing power against export competitiveness.',
    doInThis: 'Calculate the index and read whether it is an improvement or deterioration, explain what moves export prices relative to import prices, then evaluate the impact on purchasing power and competitiveness in a balanced judgement.',
    outcomes: [
      'Define terms of trade and what it measures',
      'Calculate and interpret the terms of trade index',
      'Explain the factors that move terms of trade',
      'Evaluate the impact of an improvement',
      'Evaluate the impact of a deterioration',
      'Combine cause and context into a judgement'
    ],
    tip: 'The phrase to anchor on is relative prices — terms of trade is a purchasing-power story, not a measure of how much is traded.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 16 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – The big picture
       Pattern: Decompose (formula node) + what-it-tells-us + improve/deteriorate
       ==================================================================== */
    {
      id: 'tot-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Terms of trade — the big picture',
      lede: 'Terms of trade compares export prices with import prices — it shows how many imports a country can buy for a given level of exports.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: '<strong>Terms of trade = export price index ÷ import price index × 100</strong>' },

      visualKey: 'termsOfTradeFormula',
      visualLabel: 'WHAT TERMS OF TRADE MEANS',
      visualEmoji: '\u{1F3DB}️',
      visualCaption: 'If the index rises, export prices have improved relative to import prices.',

      causesLabel: 'WHAT IT TELLS US',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F6D2}', head: 'Purchasing power', body: 'Higher terms of trade means exports can buy more imports.' },
        { tone: 'green',  icon: '\u{1F3F7}️', head: 'Relative prices', body: 'It is about export prices versus import prices, not how many goods are traded.' },
        { tone: 'purple', icon: '⚖️', head: 'Not the trade balance', body: 'A country can have improved terms of trade and still run a trade deficit.' }
      ],

      pairLabel: 'Improvement vs Deterioration',
      pairEmoji: '\u{1F4C8}',
      left: {
        tone: 'green',
        icon: '\u{1F4C8}',
        iconStyle: 'circle',
        label: 'Improvement',
        points: ['Export prices rise', 'or import prices fall', 'exports buy more imports']
      },
      right: {
        tone: 'rose',
        icon: '\u{1F4C9}',
        iconStyle: 'circle',
        label: 'Deterioration',
        points: ['Export prices fall', 'or import prices rise', 'exports buy fewer imports']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Terms of trade is an index — <strong>above 100</strong> is more favourable than the base period, <strong>below 100</strong> is less favourable.' },

      conclusion: { title: 'Big idea', text: 'Terms of trade is a purchasing-power story about international trade.' },
      examEdge: 'Define it, quote the formula, then state whether the change is an <strong>improvement or a deterioration</strong>.'
    },

    /* ====================================================================
       CARD 2 – How to calculate terms of trade
       Pattern: Worked example (calc panels) + three steps + how-to-read
       ==================================================================== */
    {
      id: 'tot-calculate',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'How to calculate terms of trade',
      lede: 'Terms of trade is an index that shows export prices relative to import prices.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: '<strong>Terms of trade = export price index ÷ import price index × 100</strong>' },

      causesPosition: 'top',
      causesLabel: 'THE THREE STEPS',
      causesEmoji: '\u{1F4CB}',
      causesCols: 3,
      causes: [
        { tone: 'blue', icon: '\u{1F50D}', head: '1 · Find the export index', body: 'Shows how export prices have changed compared with the base year.' },
        { tone: 'blue', icon: '➗', head: '2 · Divide by the import index', body: 'This compares export prices with import prices.' },
        { tone: 'blue', icon: '✖️', head: '3 · Multiply by 100', body: 'Converts the result into an index number with a base of 100.' }
      ],

      visualKey: 'totWorkedExamples',
      visualLabel: 'WORKED EXAMPLES',
      visualEmoji: '\u{1F9EE}',

      causes2Label: 'HOW TO READ THE NUMBER',
      causes2Emoji: '\u{1F4D6}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green',  icon: '↗️', head: 'Above 100', body: 'More favourable than the base year.' },
        { tone: 'blue',   icon: '🟰', head: 'Exactly 100', body: 'Unchanged from the base year.' },
        { tone: 'rose',   icon: '↘️', head: 'Below 100', body: 'Less favourable than the base year.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'This is an <strong>index number</strong> and does not measure how much is traded.' },

      conclusion: { title: 'Big idea', text: 'Calculating is easy — interpreting whether it is an improvement or deterioration is the key step.' },
      examEdge: 'In exams, show the working, give the answer, then state whether terms of trade <strong>improved or deteriorated</strong>.'
    },

    /* ====================================================================
       CARD 3 – What moves terms of trade?
       Pattern: Tile grid (four drivers) + twin stories + why-countries-differ
       ==================================================================== */
    {
      id: 'tot-drivers',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'What moves terms of trade?',
      lede: 'Terms of trade changes when export prices and import prices move at different speeds.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Anything that raises export prices relative to import prices <strong>improves</strong> terms of trade — and vice versa.' },

      causesFirst: true,
      causesLabel: 'THE FOUR MAIN DRIVERS',
      causesEmoji: '\u{1F3DB}️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F30D}', head: 'Export demand & quality', body: 'Stronger world demand or better quality can lift export prices.' },
        { tone: 'blue',   icon: '\u{1F4CA}', head: 'Inflation & productivity', body: 'Slower domestic cost growth can support export competitiveness.' },
        { tone: 'blue',   icon: '\u{1F4B1}', head: 'Exchange rates', body: 'A stronger currency cheapens imports; a weaker one makes them dearer.' },
        { tone: 'blue',   icon: '\u{1F6E2}️', head: 'World commodity prices', body: 'Vital for countries that export or import primary commodities.' }
      ],

      flowChart: {
        svgKey: 'totTwoStories',
        label: 'TWO QUICK STORIES',
        emoji: '\u{1F3AF}',
        caption: 'Whichever way relative prices move, the terms-of-trade story follows the same shape.'
      },

      causes3Label: 'WHY COUNTRIES DIFFER',
      causes3Emoji: '\u{1F465}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'blue', icon: '\u{1F3ED}', head: 'Manufacturing exporters', body: 'Benefit when world demand for their goods is strong and they stay competitive.' },
        { tone: 'blue', icon: '\u{1F69B}', head: 'Commodity exporters', body: 'Heavily influenced by global prices for their key commodities.' },
        { tone: 'blue', icon: '\u{1F525}', head: 'Heavy energy importers', body: 'Hurt when import prices rise, especially for energy and food.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Exchange-rate effects are important, but they are <strong>not the only cause</strong> of terms of trade changes.' },

      conclusion: { title: 'Big idea', text: 'Terms of trade is a relative-price story driven by both domestic and global forces.' },
      examEdge: 'If asked why terms of trade changed, comment on what happened to <strong>both</strong> export prices and import prices.'
    },

    /* ====================================================================
       CARD 4 – When terms of trade improve
       Pattern: Evidence-then-verdict (benefits + trade-offs + chain + good/risk)
       ==================================================================== */
    {
      id: 'tot-improve',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'When terms of trade improve',
      lede: 'An improvement means export prices rise relative to import prices — so a country’s exports can buy more imports.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Improved terms of trade raises a country’s <strong>purchasing power</strong> — but it does not guarantee stronger export competitiveness.' },

      causesFirst: true,
      causesLabel: 'THE MAIN BENEFITS',
      causesEmoji: '⭐',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue', icon: '\u{1F6D2}', head: 'Higher purchasing power', body: 'Buy more imports for the same volume of exports.' },
        { tone: 'blue', icon: '⚙️', head: 'Cheaper inputs', body: 'Imported capital goods and raw materials cost less.' },
        { tone: 'blue', icon: '⬇️', head: 'Lower imported inflation', body: 'Cheaper imports put downward pressure on domestic prices.' },
        { tone: 'blue', icon: '\u{1F465}', head: 'Higher living standards', body: 'Real incomes can rise when more, cheaper goods are available.' }
      ],

      causes2Label: 'THE TRADE-OFFS',
      causes2Emoji: '⚖️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'purple', icon: '\u{1F6A9}', head: 'Less competitive', body: 'Higher relative export prices can reduce price competitiveness.' },
        { tone: 'purple', icon: '\u{1F4C9}', head: 'Export volumes weaken', body: 'Higher prices can lead to lower export quantities demanded.' },
        { tone: 'purple', icon: '\u{1F3DB}️', head: 'Current account pressure', body: 'Lower export earnings can widen the current account deficit.' },
        { tone: 'purple', icon: '\u{1F6E2}️', head: 'Over-dependence', body: 'Commodity booms can deepen reliance on one or two exports.' }
      ],

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '\u{1F4CB}', title: 'Export prices rise', sub: 'Relative to imports.' },
        { tone: 'blue',   icon: '\u{1F9FA}', title: 'Each unit buys more', sub: 'Imports are cheaper in export terms.' },
        { tone: 'purple', icon: '\u{1F465}', title: 'Cheaper access', sub: 'Consumers and firms gain.' },
        { tone: 'amber',  icon: '\u{1F310}', title: 'Net effect varies', sub: 'Depends on competitiveness.' }
      ],

      pairLabel: 'Good for purchasing power vs Risk for competitiveness',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '✅',
        iconStyle: 'circle',
        label: 'Good for purchasing power',
        points: ['More imports can be bought', 'Lower input costs for firms', 'Support for higher living standards']
      },
      right: {
        tone: 'rose',
        icon: '❗',
        iconStyle: 'circle',
        label: 'Risk for competitiveness',
        points: ['Exports may face weaker demand', 'Market share can be lost', 'Longer-term export capacity may suffer']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The cause matters — an improvement from <strong>higher productivity</strong> is usually stronger than one from temporary commodity-price swings.' },

      conclusion: { title: 'Big idea', text: 'Improved terms of trade usually boosts purchasing power, but evaluation must consider export competitiveness.' },
      examEdge: 'Do not say improvement is always good — weigh higher import purchasing power against possible <strong>loss of export sales</strong>.'
    },

    /* ====================================================================
       CARD 5 – When terms of trade deteriorate
       Pattern: Twin comparison (costs + upsides + chain + who-is-exposed)
       ==================================================================== */
    {
      id: 'tot-deteriorate',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'When terms of trade deteriorate',
      lede: 'A deterioration means export prices fall relative to import prices — so exports buy fewer imports.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Deteriorating terms of trade reduces a country’s <strong>import purchasing power</strong> — but it may improve price competitiveness.' },

      causesFirst: true,
      causesLabel: 'THE MAIN COSTS',
      causesEmoji: '\u{1F3DB}️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue', icon: '\u{1F6D2}', head: 'Lower purchasing power', body: 'Exports buy fewer imports, reducing what the country can afford.' },
        { tone: 'blue', icon: '\u{1F4B7}', head: 'More imported inflation', body: 'Higher import costs feed through into prices at home.' },
        { tone: 'blue', icon: '\u{1F525}', head: 'Dearer essentials', body: 'Imported energy, food or capital goods become more expensive.' },
        { tone: 'blue', icon: '\u{1F465}', head: 'Pressure on standards', body: 'Real incomes fall and the current account may weaken.' }
      ],

      causes2Label: 'THE POSSIBLE UPSIDES',
      causes2Emoji: '\u{1F4C8}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'purple', icon: '\u{1F3C6}', head: 'More competitive', body: 'Lower relative prices can help win market share.' },
        { tone: 'purple', icon: '\u{1F4C8}', head: 'Export volumes rise', body: 'Stronger demand can boost total export earnings over time.' },
        { tone: 'purple', icon: '\u{1F3ED}', head: 'Import substitution', body: 'Local production can replace costlier imports.' },
        { tone: 'purple', icon: '\u{1F334}', head: 'Tourism may gain', body: 'A weaker currency makes the country cheaper, lifting arrivals.' }
      ],

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'rose',   icon: '\u{1F4C9}', title: 'Export prices fall', sub: 'Relative to imports.' },
        { tone: 'amber',  icon: '\u{1F9FA}', title: 'Exports buy fewer', sub: 'Less import purchasing power.' },
        { tone: 'blue',   icon: '\u{1F45B}', title: 'Higher import costs', sub: 'Consumers and firms pay more.' },
        { tone: 'purple', icon: '⚖️', title: 'Inflation & welfare', sub: 'Effects may follow.' }
      ],

      causes3Label: 'WHO IS MOST EXPOSED?',
      causes3Emoji: '\u{1F465}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'blue', icon: '\u{1F69B}', head: 'Commodity exporters', body: 'Rely on a few export prices that can fall sharply.' },
        { tone: 'blue', icon: '⛽', head: 'Energy importers', body: 'Pay more for fuel, raising production and transport costs.' },
        { tone: 'blue', icon: '\u{1F310}', head: 'Import-dependent economies', body: 'Low-income countries face higher costs for food, fuel and medicines.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A deterioration is especially damaging when demand for imports is <strong>hard to cut</strong>.' },

      conclusion: { title: 'Big idea', text: 'Worsening terms of trade often hurts purchasing power, but the final effect depends on competitiveness and import dependence.' },
      examEdge: 'In evaluation, distinguish between the <strong>short-run competitiveness gain</strong> and the longer-run cost of dearer imports.'
    },

    /* ====================================================================
       CARD 6 – The whole story
       Pattern: Evidence-then-verdict (chain + evaluation + mistakes + how-to)
       ==================================================================== */
    {
      id: 'tot-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole story',
      lede: 'Strong answers define terms of trade, calculate it, explain the cause, and then judge the impact.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Terms of trade is about <strong>relative export and import prices</strong> — the right judgement depends on the cause and the context.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F6A2}', title: 'Export & import prices' },
        { tone: 'blue',   icon: '\u{1F9EE}', title: 'Terms of trade index' },
        { tone: 'blue',   icon: '\u{1F4C8}', title: 'Improvement or deterioration' },
        { tone: 'blue',   icon: '\u{1F6D2}', title: 'Purchasing power' },
        { tone: 'blue',   icon: '\u{1F4CA}', title: 'Competitiveness & macro effects' },
        { tone: 'blue',   icon: '⚖️', title: 'Final judgement' }
      ],

      causesLabel: 'COMMON EVALUATION POINTS',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue', icon: '\u{1F50D}', head: 'What caused it?', body: 'Identify demand, supply, exchange-rate or policy factors.' },
        { tone: 'blue', icon: '\u{1F551}', head: 'How large & persistent?', body: 'Consider the size of the change and whether it will last.' },
        { tone: 'blue', icon: '\u{1F310}', head: 'Commodity or import-dependent?', body: 'The impact depends on the country’s trade structure.' },
        { tone: 'blue', icon: '\u{1F465}', head: 'Which channel matters?', body: 'Does purchasing power matter more than competitiveness here?' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '❗', head: 'Confusing it with the trade balance', body: 'They are different and can move in opposite directions.' },
        { tone: 'rose', icon: '❗', head: 'Describing only one side', body: 'Terms of trade is about the relative price of exports and imports.' },
        { tone: 'rose', icon: '❗', head: 'Always good / always bad', body: 'The impact depends on causes and the country’s context.' }
      ],

      causes3Label: 'HOW TO WRITE IT',
      causes3Emoji: '✍️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'blue', icon: '\u{1F4C4}', head: '1 · Define & give the formula', body: 'State what terms of trade is and use the formula correctly.' },
        { tone: 'blue', icon: '\u{1F9EE}', head: '2 · Calculate the change', body: 'Show your working, or identify whether it improves or deteriorates.' },
        { tone: 'blue', icon: '\u{1F4CA}', head: '3 · Explain the effects', body: 'Use the chain — purchasing power, competitiveness, the economy.' },
        { tone: 'blue', icon: '⚖️', head: '4 · Reach a judgement', body: 'Weigh positives and negatives and give a clear conclusion.' }
      ],

      conclusion: { title: 'Big idea', text: 'Terms of trade links international prices to a country’s real purchasing power and trade performance.' },
      examEdge: 'Always move from <strong>formula → change → effect → judgement</strong>.'
    }
  ]
};
