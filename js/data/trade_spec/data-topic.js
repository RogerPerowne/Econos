window.ECONOS_TOPIC = {
  id: 'trade_spec',
  topicNum: '4.2',
  theme: 'Theme 4 \xb7 A Global Perspective',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Trade & Specialisation',
  estTime: '11-13 minutes',
  goal: 'Lock in comparative advantage, the gains from trade, and why specialisation shapes global commerce.',
  intro: {
    heroKey: 'heroGlobe',
    summary: 'Countries trade because it is mutually beneficial even when one partner is more productive at everything. Comparative advantage — not absolute advantage — determines the pattern of trade.',
    doInThis: 'Work through 8 cards covering absolute and comparative advantage, gains from trade, terms of trade, free trade benefits and limitations, and the case for managed trade — including a worked example calculation and a 25-mark essay scaffold.',
    outcomes: [
      'Distinguish absolute from comparative advantage with numerical examples',
      'Calculate opportunity costs and identify which good each country should specialise in',
      'Explain how free trade raises world output and consumer welfare',
      'Evaluate the limitations of comparative advantage theory'
    ],
    tip: 'Opportunity cost is the key — whichever country gives up less of the other good to produce one unit has comparative advantage in that good.',
    stages: [
      { num: 1, name: 'Learn it', sub: '9 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'trade_spec_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Trade and specialisation: why countries trade',
      lede: 'Even a country that\'s worse at making everything can gain from trade. Ricardo\'s insight is one of the most counter-intuitive ideas in economics.',
      branches: [
        { tone: 'green',  label: 'Absolute vs comparative', sub: 'Absolute = more output per input. Comparative = lower opportunity cost. Trade gains rest on comparative advantage, not absolute.' },
        { tone: 'blue',   label: 'Gains from specialisation', sub: 'Higher world output, lower prices, economies of scale, more variety. The pie grows when each country focuses on what it gives up least to produce.' },
        { tone: 'amber',  label: 'Terms of trade', sub: 'The price of exports relative to imports decides who captures the gains. Falling commodity prices have squeezed primary exporters (Prebisch-Singer).' },
        { tone: 'rose',   label: 'Limits and losers', sub: 'Assumptions of the model break in reality — transport costs, scale economies, structural unemployment. Free trade creates losers as well as winners.' }
      ],
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
      examEdge: 'Examiners reward awareness that the UK runs a structural goods deficit but services surplus. Mentioning global value chains as a reason why simple comparative advantage models are insufficient earns evaluation credit.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    },
    {
      id: 'ca-worked',
      template: 'worked-example',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Worked Example: Identifying Comparative Advantage',
      scenario: '<p>The table below shows the output per worker per day in two countries.</p><table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:0.92rem"><thead><tr><th style="border:1px solid #CBD5E1;padding:8px 12px;background:#F1F5F9;text-align:left">Country</th><th style="border:1px solid #CBD5E1;padding:8px 12px;background:#F1F5F9;text-align:center">Wheat (tonnes)</th><th style="border:1px solid #CBD5E1;padding:8px 12px;background:#F1F5F9;text-align:center">Textiles (metres)</th></tr></thead><tbody><tr><td style="border:1px solid #CBD5E1;padding:8px 12px">Agraria</td><td style="border:1px solid #CBD5E1;padding:8px 12px;text-align:center">6</td><td style="border:1px solid #CBD5E1;padding:8px 12px;text-align:center">2</td></tr><tr><td style="border:1px solid #CBD5E1;padding:8px 12px">Textilia</td><td style="border:1px solid #CBD5E1;padding:8px 12px;text-align:center">2</td><td style="border:1px solid #CBD5E1;padding:8px 12px;text-align:center">4</td></tr></tbody></table><p>Agraria has absolute advantage in both goods. Identify comparative advantage and show the gains from specialisation.</p>',
      steps: [
        {
          prompt: 'Step 1: Calculate opportunity cost of wheat in each country',
          hint: 'OC of wheat = units of textiles given up to produce 1 tonne of wheat.',
          answer: '<p><strong>Agraria:</strong> producing 1 tonne of wheat means giving up 2/6 = <strong>⅓ metres of textiles</strong>.</p><p><strong>Textilia:</strong> producing 1 tonne of wheat means giving up 4/2 = <strong>2 metres of textiles</strong>.</p><p>Agraria has the lower opportunity cost in wheat (⅓ &lt; 2), so <strong>Agraria has comparative advantage in wheat</strong>.</p>'
        },
        {
          prompt: 'Step 2: Calculate opportunity cost of textiles in each country',
          hint: 'OC of textiles = units of wheat given up to produce 1 metre of textiles.',
          answer: '<p><strong>Agraria:</strong> producing 1 metre of textiles means giving up 6/2 = <strong>3 tonnes of wheat</strong>.</p><p><strong>Textilia:</strong> producing 1 metre of textiles means giving up 2/4 = <strong>½ tonne of wheat</strong>.</p><p>Textilia has the lower opportunity cost in textiles (½ &lt; 3), so <strong>Textilia has comparative advantage in textiles</strong>.</p>'
        },
        {
          prompt: 'Step 3: Determine specialisation — who produces what?',
          hint: 'Each country specialises in the good where it has the lower opportunity cost.',
          answer: '<p><strong>Agraria specialises fully in wheat</strong> (OC = ⅓ textiles per wheat, the lower figure).</p><p><strong>Textilia specialises fully in textiles</strong> (OC = ½ wheat per textile, the lower figure).</p><p>Notice: Agraria has absolute advantage in both goods, yet it is still mutually beneficial for Textilia to specialise — this is Ricardo\'s key insight.</p>'
        },
        {
          prompt: 'Step 4: Show the gain from specialisation with 10 workers each',
          hint: 'Compare total output before (5 workers each on each good) and after (full specialisation).',
          answer: '<p><strong>Before specialisation</strong> (5 workers each on each good):<br>Agraria: 5×6 = 30 wheat + 5×2 = 10 textiles<br>Textilia: 5×2 = 10 wheat + 5×4 = 20 textiles<br><strong>World total: 40 wheat + 30 textiles</strong></p><p><strong>After specialisation</strong> (10 workers each on own CA good):<br>Agraria: 10×6 = 60 wheat; Textilia: 10×4 = 40 textiles<br><strong>World total: 60 wheat + 40 textiles</strong></p><p>Specialisation adds 20 tonnes of wheat and 10 metres of textiles — both countries can consume more after trading.</p>'
        },
        {
          prompt: 'Step 5: State a valid terms-of-trade range for exchange',
          hint: 'Both countries will only trade if they can get more than they could produce domestically.',
          answer: '<p>Agraria\'s domestic OC: 1 wheat costs ⅓ textile → it will trade 1 wheat for anything <strong>above ⅓ textile</strong>.<br>Textilia\'s domestic OC: 1 wheat costs 2 textiles → it will pay up to <strong>2 textiles per wheat</strong>.</p><p>A <strong>mutually beneficial ToT</strong> lies between these limits: <strong>⅓ &lt; textiles per wheat &lt; 2</strong>.<br>For example, 1 tonne of wheat traded for 1 metre of textiles benefits both countries.</p>'
        }
      ],
      conclusion: 'Comparative advantage is determined by <strong>opportunity cost, not absolute productivity</strong>. Calculate four OC figures (two goods × two countries), identify the lower value in each column, and the pattern of specialisation follows automatically. The gains from trade are real — world output rises when countries specialise.',
      examEdge: 'Always show four OC calculations and compare them explicitly. State which country has CA in which good before concluding. If asked for a terms-of-trade range, quote both domestic OC boundaries and a valid exchange ratio between them. Show full working for 4-mark data questions.'
    }

  ]
};
