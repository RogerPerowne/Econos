window.ECONOS_TOPIC = {
  id: 'trade_spec',
  topicNum: '4.2',
  theme: 'Theme 4 \xb7 A Global Perspective',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Trade & Specialisation',
  estTime: '7-9 minutes',
  goal: 'Lock in comparative advantage, the gains from trade, and why specialisation shapes global commerce.',
  intro: {
    heroKey: 'trade',
    summary: 'Countries trade because it is mutually beneficial even when one partner is more productive at everything. Comparative advantage — not absolute advantage — determines the pattern of trade.',
    doInThis: 'Work through 7 concept cards covering absolute and comparative advantage, gains from trade, terms of trade, free trade benefits and limitations, and the case for managed trade.',
    outcomes: [
      'Distinguish absolute from comparative advantage with numerical examples',
      'Calculate opportunity costs and identify which good each country should specialise in',
      'Explain how free trade raises world output and consumer welfare',
      'Evaluate the limitations of comparative advantage theory'
    ],
    tip: 'Opportunity cost is the key — whichever country gives up less of the other good to produce one unit has comparative advantage in that good.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'trade_spec_1',
      template: 'framing',
      title: 'Absolute vs Comparative Advantage',
      body: 'A country has <strong>absolute advantage</strong> when it can produce more of a good with the same resources than another country. A country has <strong>comparative advantage</strong> when it can produce a good at a lower <em>opportunity cost</em>. Ricardo showed that even if one country has absolute advantage in all goods, both countries gain from specialising where their opportunity cost is lowest and trading. This is the foundation of the case for free trade.',
      keyTerms: [
        { term: 'Absolute advantage', def: 'Producing more output per unit of input than a trading partner.' },
        { term: 'Comparative advantage', def: 'Producing a good at a lower opportunity cost than a trading partner.' },
        { term: 'Opportunity cost', def: 'The next best alternative forgone when a choice is made.' }
      ],
      examEdge: 'A common trap: a country can have comparative advantage in a good even if it is less efficient at producing it in absolute terms. Always calculate opportunity cost ratios, not raw output figures.',
      visual: null
    },
    {
      id: 'trade_spec_2',
      template: 'mechanisms',
      title: 'Calculating Comparative Advantage',
      intro: 'To find comparative advantage: (1) state output per worker (or cost per unit), (2) calculate opportunity cost for each good in each country, (3) the country with the lower opportunity cost has comparative advantage in that good.',
      steps: [
        { label: 'Example setup', text: 'Country A: 1 worker produces 4 wheat OR 2 cloth. Country B: 1 worker produces 1 wheat OR 1 cloth.' },
        { label: 'Opportunity cost — wheat', text: 'A gives up 2 cloth per wheat. B gives up 1 cloth per wheat. B has lower OC → comparative advantage in wheat.' },
        { label: 'Opportunity cost — cloth', text: 'A gives up 0.5 wheat per cloth. B gives up 1 wheat per cloth. A has lower OC → comparative advantage in cloth.' },
        { label: 'Specialise and trade', text: 'A specialises in cloth, B in wheat. Both trade at a terms-of-trade ratio between their domestic opportunity costs (between 2 cloth:1 wheat and 1 cloth:1 wheat).' }
      ],
      examEdge: 'If the question gives you a table, calculate the OC for BOTH goods in BOTH countries — you need four numbers. The country with the smaller ratio has comparative advantage. Show your working for full marks.'
    },
    {
      id: 'trade_spec_3',
      template: 'cause',
      title: 'Gains from Trade',
      causes: [
        { head: 'Higher world output', body: 'Specialisation allows global resources to be used where productivity is highest, expanding the world production possibility frontier.' },
        { head: 'Lower prices', body: 'Consumers access goods at world prices which are lower than autarky (no-trade) prices, raising real purchasing power.' },
        { head: 'Economies of scale', body: 'Producing for a global market allows longer production runs and lower average costs, reinforcing dynamic efficiency gains.' },
        { head: 'Variety and innovation', body: 'Competition from abroad and access to foreign goods increases variety and incentivises product innovation (dynamic efficiency).' },
        { head: 'Resource allocation', body: 'Resources shift to highest-valued uses; factor incomes in export industries rise, boosting living standards.' }
      ],
      examEdge: 'Free trade raises <em>allocative efficiency</em> (resources go to lowest-cost producers) and <em>dynamic efficiency</em> (competition spurs innovation). Distinguish these for 8/25-mark essays.'
    },
    {
      id: 'trade_spec_4',
      template: 'framing',
      title: 'Terms of Trade',
      body: 'The <strong>terms of trade (ToT)</strong> measure the relative price of exports to imports: ToT = (Index of export prices \xf7 Index of import prices) \xd7 100. An improvement (ToT rises) means exports buy more imports — real income rises. A deterioration means exports buy fewer imports. Developing countries exporting primary commodities often face declining ToT as commodity prices fall relative to manufactured goods (<em>Prebisch-Singer hypothesis</em>). ToT are also affected by exchange rate changes.',
      keyTerms: [
        { term: 'Terms of trade', def: 'Index of export prices relative to import prices \xd7 100.' },
        { term: 'Improvement', def: 'ToT index rises — same exports buy more imports — beneficial for real income.' },
        { term: 'Prebisch-Singer', def: 'Long-run tendency for commodity prices to fall relative to manufactured goods, worsening ToT for primary exporters.' }
      ],
      examEdge: 'Improved ToT is not always good: if caused by falling export volume (e.g. recession), real income may fall. Always check the cause — improvement from productivity gains is different from improvement from lower import demand.'
    },
    {
      id: 'trade_spec_5',
      template: 'paired',
      title: 'Free Trade: Case For vs Against',
      left: {
        label: 'Case FOR free trade',
        points: [
          'Exploits comparative advantage — raises world output',
          'Lower consumer prices — higher real incomes',
          'Economies of scale via larger markets',
          'Dynamic efficiency — competition spurs innovation',
          'Reduces inflationary pressure by keeping import prices low'
        ]
      },
      right: {
        label: 'Case AGAINST free trade',
        points: [
          'Infant industry argument — new domestic industries cannot compete with established foreign rivals',
          'Structural unemployment when import competition destroys domestic jobs',
          'Overdependence on trade creates vulnerability to global shocks',
          'Assumes constant comparative advantage — ignores learning-by-doing',
          'Does not account for externalities (e.g. carbon-intensive imports)'
        ]
      },
      examEdge: 'The infant-industry argument is the strongest theoretical case for protection — but requires a credible commitment to remove protection once the industry matures, which rarely happens in practice.'
    },
    {
      id: 'trade_spec_6',
      template: 'diagnose',
      title: 'Why Comparative Advantage May Not Hold',
      intro: 'The standard model rests on assumptions that rarely hold in practice.',
      rows: [
        { label: 'Assumption', colA: 'Full employment everywhere', colB: 'Factor mobility between industries' },
        { label: 'Reality', colA: 'Structural unemployment when industries contract; adjustment costs are large and concentrated', colB: 'Capital and labour are often sector-specific; retraining takes years' },
        { label: 'Implication', colA: 'Short-run winners and losers even if long-run gains exist; political economy resists liberalisation', colB: 'Gains from trade may be diffuse; losses concentrated — political pressure for protection' }
      ],
      footer: 'Other limitations: ignores externalities, assumes constant returns, ignores economies of scale, and may not apply to imperfect competition markets (strategic trade theory).',
      examEdge: 'Top-band evaluation: "Comparative advantage is a static model; in a world of learning-by-doing and economies of scale, first-mover advantage may be more important than current opportunity costs."'
    },
    {
      id: 'trade_spec_7',
      template: 'framing',
      title: 'Pattern of World Trade',
      body: 'World trade has shifted dramatically since 1945. <strong>Key trends:</strong> (1) Services now account for roughly 25% of world trade and growing. (2) Emerging economies (China, India) have sharply increased their share of manufactured exports. (3) Intra-industry trade (countries exchanging similar goods, e.g. Germany and France trading cars) has grown — explained by product differentiation and economies of scale, not comparative advantage. (4) Global value chains mean a single product crosses multiple borders during production. <strong>UK trade pattern:</strong> services surplus, goods deficit; main partners EU, USA, China.',
      keyTerms: [
        { term: 'Intra-industry trade', def: 'Trade in similar goods between countries at similar income levels, driven by scale economies and consumer preference for variety.' },
        { term: 'Global value chain', def: 'Production fragmented across countries, with each specialising in one stage (e.g. design, assembly, distribution).' },
        { term: 'Services trade', def: 'Financial services, tourism, education — the UK’s main trade strength.' }
      ],
      examEdge: 'Examiners reward awareness that the UK runs a structural goods deficit but services surplus. Mentioning global value chains as a reason why simple comparative advantage models are insufficient earns evaluation credit.'
    }
  ]
};
