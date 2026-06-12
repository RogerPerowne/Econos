/* ============================================================
   ECONOS – Specialisation and Trade (Edexcel A 4.1.2)
   7 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   The trade-theory core of Theme 4: absolute vs comparative
   advantage, opportunity-cost calculation, the gains-from-trade
   PPF diagram, the model's assumptions and its real-world limits,
   then a balanced whole-story judgement.

   Card patterns (varied; the two consecutive 3x2 tile grids on
   cards 5 & 6 mirror the mockups — "The Big Six" assumptions and
   "Key Limits" — and are framed differently, neutral vs critical):
     1 Sequential flow chain (core idea) + abs/comp pair + why-differ
     2 Comparison table (absolute advantage data) + tells-us + mistakes
     3 Worked example (opportunity-cost calculation) + who + why
     4 Decompose a diagram (gains-from-trade PPF) + gains chain + who
     5 Tile grid (the Big Six assumptions) + why-they-matter
     6 Tile grid (key limits) + who-may-lose + so-what flow
     7 Evidence-then-verdict (chain + advantages/disadvantages + how-to)

   New visuals (js/icons.js):
     - absoluteAdvantageTable (Card 2 visualKey — output table + trophies)
     - compAdvDataTable       (Card 3 visualKey — wheat/wine output table)
     - compAdvOppCost         (Card 3 visualKey2 — opportunity-cost panels)
     - gainsFromTradePPF      (Card 4 visualKey — PPF, trade line, P & C)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'specialisation-and-trade',
  topicNum: '4.1.2',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Specialisation and Trade',
  estTime: '18 min',
  goal: 'Explain absolute and comparative advantage, calculate opportunity cost, show the gains from trade on a PPF diagram, and evaluate the theory against its assumptions and real-world limits',

  intro: {
    heroKey: 'heroSpecialisationTrade',
    summary: 'Specialisation and trade is the theoretical heart of international economics. The big idea is comparative advantage: a country gains by specialising in the goods it sacrifices least to produce — the goods with the lowest opportunity cost — and then trading for the rest. This deck builds the theory carefully: first the difference between absolute advantage (who produces more) and comparative advantage (who gives up less), then the opportunity-cost calculation that decides who should specialise, then the gains-from-trade PPF diagram that shows a country consuming beyond its own frontier. It finishes by stress-testing the model — its assumptions and its real-world limits — so you can evaluate, not just describe.',
    doInThis: 'Distinguish absolute from comparative advantage. Calculate opportunity cost from an output table and identify who should specialise. Use a PPF diagram to show how trade lets a country consume beyond its frontier. Set out the assumptions the theory relies on, then the limits — transport costs, dynamic advantage, over-specialisation and uneven gains. Finish with a balanced judgement of trade as a trade-off.',
    outcomes: [
      'Explain the core idea of specialisation and trade',
      'Distinguish absolute from comparative advantage',
      'Calculate opportunity cost and identify who should specialise',
      'Show the gains from trade on a PPF diagram',
      'Explain the assumptions the theory relies on',
      'Evaluate the limits of comparative advantage'
    ],
    tip: 'The phrase examiners reward is lower opportunity cost — comparative advantage is about relative efficiency, not who can produce the most.',
    stages: [
      { num: 1, name: 'Learn',  sub: '7 cards \xb7 18 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – The big picture
       Pattern: Sequential flow chain (core idea) + abs/comp pair + why-differ
       ==================================================================== */
    {
      id: 'spec-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 7',
      title: 'Specialisation and trade — the big picture',
      lede: 'Countries can gain when they focus relatively more on what they do best and then trade with each other.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Comparative advantage is about <strong>lower opportunity cost</strong> — not simply producing more.' },

      flowTitle: 'THE CORE IDEA',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F3AF}', title: 'Specialise', sub: 'Focus on goods with lower opportunity cost.' },
        { tone: 'amber',  icon: '\u{1F501}', title: 'Trade', sub: 'Exchange output with other countries.' },
        { tone: 'purple', icon: '\u{1F310}', title: 'World output rises', sub: 'Resources used more efficiently.' },
        { tone: 'blue',   icon: '\u{1F6D2}', title: 'Choice expands', sub: 'Consumers access more goods.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Living standards rise', sub: 'Lower prices, higher real income.' }
      ],

      causesLabel: 'WHY COUNTRIES DIFFER',
      causesEmoji: '\u{1F465}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F33F}', head: 'Resources', body: 'Oil, land, minerals and climate.' },
        { tone: 'purple', icon: '\u{1F9E0}', head: 'Skills & tech', body: 'Knowledge, training and machinery.' },
        { tone: 'blue',   icon: '\u{1F309}', head: 'Capital', body: 'Ports, roads, energy and finance.' },
        { tone: 'amber',  icon: '\u{1F465}', head: 'Scale', body: 'Efficient firms and bigger markets.' }
      ],

      pairLabel: 'Absolute advantage vs Comparative advantage',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue',
        icon: '\u{1F4CA}',
        iconStyle: 'circle',
        label: 'Absolute advantage',
        points: ['A country can produce more with the same resources.']
      },
      right: {
        tone: 'green',
        icon: '⚖️',
        iconStyle: 'circle',
        label: 'Comparative advantage',
        points: ['A country gives up less of one good to make another.']
      },

      bottomTip: [
        { icon: 'ℹ️', tone: 'blue', text: 'Trade theory depends mainly on <strong>comparative advantage</strong>, because opportunity cost reveals relative efficiency.' },
        { icon: 'ℹ️', tone: 'blue', text: 'If one country has a comparative advantage in wine and another in cloth, both can gain by specialising and trading.' }
      ],

      conclusion: { title: 'Big idea', text: 'Trade is most powerful when countries specialise according to comparative advantage.' },
      examEdge: 'Define absolute and comparative advantage clearly — then explain gains from trade using <strong>opportunity cost</strong>.'
    },

    /* ====================================================================
       CARD 2 – Absolute advantage
       Pattern: Comparison table (output data) + what-it-tells-us + mistakes
       ==================================================================== */
    {
      id: 'spec-absolute-advantage',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 7',
      title: 'Absolute advantage — who is more productive?',
      lede: 'Absolute advantage compares how much different countries can produce with the same resources.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A country has absolute advantage if it can <strong>produce more with the same inputs</strong>.' },

      visualKey: 'absoluteAdvantageTable',
      visualLabel: 'A SIMPLE EXAMPLE',
      visualEmoji: '\u{1F517}',

      causesLabel: 'WHAT IT TELLS US',
      causesEmoji: '\u{1F4A1}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F465}', head: 'Same resources', body: 'Compare output from identical inputs.' },
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Productivity', body: 'More output means absolute advantage.' },
        { tone: 'purple', icon: '⚖️', head: 'Not the whole story', body: 'Trade depends mainly on comparative advantage, not just absolute productivity.' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'amber', icon: '❌', head: 'Do not confuse it', body: 'Absolute advantage is not the same as comparative advantage.' },
        { tone: 'amber', icon: '\u{1F501}', head: 'Trade still happens', body: 'If one country is better at both goods, trade can still happen.' },
        { tone: 'amber', icon: '\u{1F511}', head: 'Opportunity cost is key', body: 'It is still the key next step in the analysis.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Absolute advantage tells us <strong>who is best</strong> at producing — comparative advantage tells us <strong>who should specialise</strong>.' },

      conclusion: { title: 'Big idea', text: 'Absolute advantage is about higher output per unit of input.' },
      examEdge: 'Define absolute advantage clearly, but move quickly to <strong>comparative advantage</strong> when explaining trade.'
    },

    /* ====================================================================
       CARD 3 – Comparative advantage
       Pattern: Worked example (opportunity-cost calculation) + who + why
       ==================================================================== */
    {
      id: 'spec-comparative-advantage',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 7',
      title: 'Comparative advantage — opportunity cost is the key',
      lede: 'Comparative advantage shows which good a country sacrifices less of when it specialises.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A country has comparative advantage in the good with the <strong>lower opportunity cost</strong>.' },

      visualKey: 'compAdvDataTable',
      visualLabel: 'START WITH THE DATA',
      visualEmoji: '\u{1F517}',

      visualKey2: 'compAdvOppCost',
      visualLabel2: 'WORK OUT OPPORTUNITY COST',
      visualEmoji2: '\u{1F9EE}',

      flowTitle: 'WHO SHOULD SPECIALISE?',
      flowEmoji: '\u{1F465}',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '\u{1F33E}', title: 'Country A', sub: 'Advantage in wheat.' },
        { tone: 'purple', icon: '⚖️', title: 'Compare costs', sub: 'Lower cost wins.' },
        { tone: 'blue',   icon: '\u{1F377}', title: 'Country B', sub: 'Advantage in wine.' }
      ],

      causesLabel: 'WHY THIS HAPPENS',
      causesEmoji: '\u{1F4A1}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '⬇️', head: 'Lower sacrifice', body: 'Fewer units given up to specialise.' },
        { tone: 'purple', icon: '\u{1F3AF}', head: 'Relative efficiency', body: 'Even if one country is weaker overall, it can still specialise.' },
        { tone: 'amber',  icon: '\u{1F4C8}', head: 'Trade gains follow', body: 'Specialisation can increase total output.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Comparative advantage depends on <strong>relative efficiency</strong> — not on who can make the most of everything.' },

      conclusion: { title: 'Big idea', text: 'Opportunity cost is the heart of comparative advantage.' },
      examEdge: 'Show the calculation, compare the opportunity costs, then identify the good each country should specialise in.'
    },

    /* ====================================================================
       CARD 4 – How trade creates gains
       Pattern: Decompose a diagram (gains-from-trade PPF) + gains chain + who
       ==================================================================== */
    {
      id: 'spec-gains-from-trade',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 7',
      title: 'How trade creates gains',
      lede: 'Specialisation changes what a country produces — trade changes what it can consume.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'With trade, a country can <strong>consume beyond its own production possibility frontier</strong>.' },

      interactiveDiagram: {
        svgKey: 'gainsFromTradePPF',
        label: 'THE DIAGRAM',
        emoji: '\u{1F517}',
        layers: ['idl-1', 'idl-2', 'idl-3', 'idl-4'],
        views: [
          {
            label: 'Your own PPF',
            tone: 'amber',
            show: ['idl-1'],
            head: 'Without trade you are stuck on the PPF',
            body: 'The PPF shows every wine–cloth combination the country can make with its own resources. Alone, it must produce and consume on the frontier — say at point A.'
          },
          {
            label: 'Specialise',
            tone: 'green',
            show: ['idl-1', 'idl-2'],
            head: 'Shift all resources into cloth',
            body: 'The country has a comparative advantage in cloth, so it specialises completely — production moves to P, the cloth-axis intercept.'
          },
          {
            label: 'Trade line',
            tone: 'blue',
            show: ['idl-1', 'idl-2', 'idl-3'],
            head: 'Swap cloth for wine at world prices',
            body: 'Starting from P, the country trades cloth for wine at the world terms of trade. That trade line is steeper than the PPF, so it lies beyond the frontier.'
          },
          {
            label: 'Gains from trade',
            tone: 'purple',
            show: ['idl-1', 'idl-2', 'idl-3', 'idl-4'],
            head: 'Consume beyond the PPF at C',
            body: 'By trading along the line, the country reaches consumption point C — more cloth AND more wine than the no-trade point A.',
            analysis: 'Trade does not add domestic resources; it lets the country specialise where its opportunity cost is lowest and swap the surplus, so consumption sits outside its own production frontier. That outward jump is the gain from trade.'
          }
        ]
      },

      flowTitle: 'THE GAINS CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F3AF}', title: 'Specialise' },
        { tone: 'purple', icon: '\u{1F310}', title: 'World output rises' },
        { tone: 'blue',   icon: '\u{1F6D2}', title: 'Trade' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Consumption expands' }
      ],

      causesLabel: 'WHO BENEFITS?',
      causesEmoji: '\u{1F465}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F64B}', head: 'Consumers', body: 'More choice and lower prices.' },
        { tone: 'purple', icon: '\u{1F3EA}', head: 'Firms', body: 'Access to larger markets.' },
        { tone: 'blue',   icon: '\u{1F477}', head: 'Workers', body: 'Higher demand in export sectors.' },
        { tone: 'amber',  icon: '\u{1F310}', head: 'Countries', body: 'Potential growth and efficiency gains.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Trade does not create more domestic resources — it lets countries <strong>use them more efficiently</strong> and exchange the gains.' },

      conclusion: { title: 'Big idea', text: 'The key gain from trade is consumption beyond the frontier.' },
      examEdge: 'In diagram questions, explain specialisation first and then show how trade allows <strong>consumption outside the PPF</strong>.'
    },

    /* ====================================================================
       CARD 5 – The theory works under assumptions
       Pattern: Tile grid (the Big Six assumptions) + why-they-matter
       ==================================================================== */
    {
      id: 'spec-assumptions',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 7',
      title: 'The theory works under assumptions',
      lede: 'Comparative advantage is powerful, but the textbook model simplifies reality.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The more the assumptions hold, the more persuasive the <strong>gains-from-trade</strong> story becomes.' },

      causesLabel: 'THE BIG SIX',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '\u{1F310}', head: '1 · Two countries, two goods', body: 'Keeps the model simple.' },
        { tone: 'amber',  icon: '\u{1F4D0}', head: '2 · Constant opportunity cost', body: 'Straight-line PPFs.' },
        { tone: 'blue',   icon: '\u{1F6A2}', head: '3 · Free trade', body: 'No tariffs or transport costs.' },
        { tone: 'green',  icon: '\u{1F501}', head: '4 · Factors mobile at home', body: 'Resources can shift between sectors domestically.' },
        { tone: 'purple', icon: '\u{1F512}', head: '5 · Factors immobile abroad', body: 'Labour and capital do not move freely between countries.' },
        { tone: 'amber',  icon: '\u{1F465}', head: '6 · Full employment', body: 'Resources are not left idle.' }
      ],

      whyItMatters: {
        title: 'WHY THEY MATTER',
        emoji: '\u{1F465}',
        items: [
          { tone: 'green',  icon: '\u{1F4C8}', label: 'Stable trade pattern', text: 'Opportunity cost stays predictable.' },
          { tone: 'purple', icon: '\u{1F500}', label: 'Easy specialisation', text: 'Resources can move where needed.' },
          { tone: 'blue',   icon: '\u{1F6E1}️', label: 'Low friction', text: 'Gains are not lost to trade barriers.' }
        ]
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', head: 'REAL-WORLD MESSAGE', text: 'The theory is still useful because it highlights <strong>relative efficiency</strong>, but real-world trade is more complex than the simple Ricardian model.' },

      conclusion: { title: 'Big idea', text: 'Assumptions do not make the theory useless — they define the conditions under which it works best.' },
      examEdge: 'After explaining comparative advantage, comment briefly on assumptions such as <strong>constant costs and free trade</strong>.'
    },

    /* ====================================================================
       CARD 6 – Where comparative advantage can fall short
       Pattern: Tile grid (key limits) + who-may-lose + so-what flow
       ==================================================================== */
    {
      id: 'spec-limits',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 7',
      title: 'Where comparative advantage can fall short',
      lede: 'The theory is insightful, but real-world trade can create winners, losers and new risks.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Comparative advantage is <strong>dynamic</strong> — today’s low-opportunity-cost sector may not stay that way forever.' },

      causesFirst: true,
      causesLabel: 'KEY LIMITS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '\u{1F69A}', head: '1 · Transport & tariffs', body: 'Trade may be too expensive.' },
        { tone: 'amber',  icon: '\u{1F4C8}', head: '2 · Dynamic advantage', body: 'Education and technology can change it over time.' },
        { tone: 'purple', icon: '\u{1F3ED}', head: '3 · Infant industries', body: 'New sectors may need temporary protection.' },
        { tone: 'blue',   icon: '\u{1F3AF}', head: '4 · Over-specialisation', body: 'Dependence on one export can be risky.' },
        { tone: 'green',  icon: '⚖️', head: '5 · Unequal gains', body: 'Some workers and regions lose out.' },
        { tone: 'amber',  icon: '\u{1F33F}', head: '6 · Environmental costs', body: 'Production and transport may harm the planet.' }
      ],

      causes2Label: 'WHO MAY LOSE?',
      causes2Emoji: '\u{1F465}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'purple', icon: '\u{1F477}', head: 'Workers', body: 'In declining sectors.' },
        { tone: 'purple', icon: '\u{1F3D8}️', head: 'Regions', body: 'Tied to old industries.' },
        { tone: 'purple', icon: '\u{1F3EA}', head: 'Small firms', body: 'Domestic firms that struggle to compete.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'Future people', body: 'Later generations, if resources are depleted.' }
      ],

      flowTitle: 'SO WHAT?',
      flowEmoji: '\u{1F4A1}',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '\u{1F4CA}', title: 'Theory predicts gains', sub: 'Specialise and trade.' },
        { tone: 'amber',  icon: '⚠️', title: 'Reality adds costs', sub: 'And adjustment problems.' },
        { tone: 'purple', icon: '⚖️', title: 'Judgement', sub: 'Depends on context.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A country may have comparative advantage in <strong>low-value products</strong>, but that does not automatically mean it should ignore long-term development.' },

      conclusion: { title: 'Big idea', text: 'Comparative advantage explains trade well, but not every pattern of specialisation is desirable.' },
      examEdge: 'Use evaluation points such as <strong>transport costs, changing comparative advantage and the uneven distribution of gains</strong>.'
    },

    /* ====================================================================
       CARD 7 – The whole story
       Pattern: Evidence-then-verdict (chain + advantages/disadvantages + how-to)
       ==================================================================== */
    {
      id: 'spec-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 7 of 7',
      title: 'The whole story',
      lede: 'Strong answers define the theory, apply it carefully, and then weigh the benefits against the risks.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Trade can increase welfare overall — but the gains are <strong>not automatic, equal or permanent</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F310}', title: 'Different costs & resources' },
        { tone: 'amber',  icon: '⚖️', title: 'Comparative advantage' },
        { tone: 'purple', icon: '\u{1F3AF}', title: 'Specialisation' },
        { tone: 'blue',   icon: '\u{1F501}', title: 'Trade' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Gains from trade' },
        { tone: 'purple', icon: '\u{1F4CB}', title: 'Evaluation' }
      ],

      causesLabel: 'ADVANTAGES OF SPECIALISATION & TRADE',
      causesEmoji: '\u{1F44D}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green', icon: '⚙️', head: 'Efficiency', body: 'Resources are used better.' },
        { tone: 'blue',  icon: '\u{1F6D2}', head: 'Lower prices', body: 'And more choice for consumers.' },
        { tone: 'green', icon: '\u{1F3ED}', head: 'Economies of scale', body: 'Bigger output cuts unit costs.' },
        { tone: 'blue',  icon: '\u{1F310}', head: 'Export income', body: 'Growth and higher export earnings.' }
      ],

      causes2Label: 'DISADVANTAGES AND RISKS',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'rose',   icon: '\u{1F6A2}', head: 'Few exports', body: 'Over-dependence on a narrow base.' },
        { tone: 'amber',  icon: '\u{1F4C9}', head: 'Job losses', body: 'Structural change displaces workers.' },
        { tone: 'rose',   icon: '\u{1F465}', head: 'Unequal gains', body: 'Between countries or groups.' },
        { tone: 'purple', icon: '\u{1F33F}', head: 'Environment', body: 'Production and transport add pressure.' }
      ],

      causes3Label: 'HOW TO WRITE IT',
      causes3Emoji: '✍️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'blue', icon: '\u{1F4DD}', head: '1 · Define', body: 'Define the key concept.' },
        { tone: 'blue', icon: '\u{1F9EE}', head: '2 · Calculate', body: 'Identify comparative advantage.' },
        { tone: 'blue', icon: '\u{1F517}', head: '3 · Explain gains', body: 'With a diagram or chain.' },
        { tone: 'blue', icon: '⚖️', head: '4 · Evaluate', body: 'Assumptions, distribution and long-run risks.' }
      ],

      conclusion: { title: 'Big idea', text: 'The strongest trade answers combine theory, calculation, diagrams and evaluation.' },
      economistQuote: {
        portraitKey: 'economistRicardo',
        tone: 'amber',
        label: 'Economist insight on trade',
        quote: 'Under a system of perfectly free commerce, each country naturally devotes its capital and labour to such employments as are most beneficial to each. This pursuit of individual advantage is admirably connected with the universal good of the whole.',
        attribution: 'David Ricardo, <em>On the Principles of Political Economy and Taxation</em> (1817)'
      },
      examEdge: 'Use <strong>comparative advantage</strong> as the core explanation, then balance the advantages of trade against its limitations.'
    }
  ]
};
