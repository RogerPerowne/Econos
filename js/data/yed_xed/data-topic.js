window.ECONOS_TOPIC = {
  id: 'yed_xed',
  topicNum: '1.10',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'YED & XED',
  estTime: '7-9 minutes',
  goal: 'Lock in income and cross-price elasticities — formulas, signs, interpretation, and their applications to business and trade strategy.',
  intro: {
    heroKey: 'market',
    summary: 'YED and XED extend elasticity analysis beyond own-price. They reveal how demand responds to income changes (YED) and to the prices of related goods (XED) — critical for classifying goods and understanding market linkages.',
    doInThis: 'Work through 7 cards covering YED formula and interpretation, normal vs inferior goods, luxury goods, XED formula, substitutes vs complements, and applications to business strategy and international trade.',
    outcomes: [
      'Calculate and interpret YED including sign and magnitude',
      'Classify goods as normal (luxury/necessity) or inferior using YED',
      'Calculate and interpret XED including sign and what it reveals about the relationship between goods',
      'Apply YED and XED to business portfolio and trade analysis'
    ],
    tip: 'YED: positive = normal good (rises with income); negative = inferior good (falls with income); >1 = luxury. XED: positive = substitutes (rise in price of B raises demand for A); negative = complements.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'yed_xed_1',
      template: 'framing',
      title: 'Income Elasticity of Demand (YED)',
      body: '<strong>YED</strong> measures the responsiveness of quantity demanded to a change in consumer income.<br><br><strong>Formula:</strong> YED = (% ΔQD) \xf7 (% Δ Income)<br><br>Unlike PED, YED can be positive or negative, and its sign is crucial:<br>• <strong>YED > 0:</strong> Normal good — demand rises as income rises (consumers can afford more)<br>• <strong>YED < 0:</strong> Inferior good — demand falls as income rises (consumers switch to better alternatives)<br>• <strong>YED > 1:</strong> Luxury good — demand rises proportionally more than income<br>• <strong>0 < YED < 1:</strong> Necessity (normal but not luxury) — demand rises proportionally less than income',
      keyTerms: [
        { term: 'YED', def: '% change in quantity demanded \xf7 % change in income. Sign indicates good type; magnitude indicates responsiveness.' },
        { term: 'Normal good', def: 'YED > 0: demand increases as income rises.' },
        { term: 'Inferior good', def: 'YED < 0: demand falls as income rises — consumers trade up to superior alternatives.' }
      ],
      examEdge: 'The sign of YED is its most important feature — it classifies the good. The magnitude determines sensitivity. A common error: students say "demand is inelastic" when they mean "necessity" (low YED). YED is not about price responsiveness — use "normal/inferior" and "luxury/necessity" language instead.'
    },
    {
      id: 'yed_xed_2',
      template: 'cause',
      title: 'Applying YED: Normal, Inferior, and Luxury Goods',
      causes: [
        { head: 'Normal goods (YED > 0)', body: 'Most goods: furniture, clothing, electronics, restaurant meals. Demand grows with the economy. Positive relationship between economic growth and demand — important for business planning in growing markets.' },
        { head: 'Luxury goods (YED > 1)', body: 'Foreign holidays, luxury cars, fine dining, premium brands. Demand grows proportionally faster than income. During recessions, demand collapses; during booms, demand surges. High income sensitivity = high cyclical risk.' },
        { head: 'Necessities (0 < YED < 1)', body: 'Bread, milk, utilities, basic clothing. Demand barely changes with income — relatively income-inelastic. Recession-resilient businesses; lower growth potential in boom times.' },
        { head: 'Inferior goods (YED < 0)', body: 'Value-brand food, bus travel, certain basic goods. Demand falls when incomes rise as consumers upgrade. During recessions, inferior good sales rise; during booms, they fall. Counter-cyclical.' }
      ],
      examEdge: 'YED is crucial for recession analysis: luxury good producers (LVMH, Rolls-Royce) are highly pro-cyclical — revenues collapse in recessions. Supermarket own-brand sales are counter-cyclical (inferior goods rise in recessions). This explains corporate strategy during economic downturns.'
    },
    {
      id: 'yed_xed_3',
      template: 'framing',
      title: 'YED and Business Strategy',
      body: '<strong>Diversification:</strong> firms with products across different YED categories have more stable overall revenues. A portfolio mixing luxury goods (high YED) with necessities (low YED) buffers against recession.<br><br><strong>Market selection:</strong> in rapidly growing emerging markets (rising incomes), luxury goods companies expand aggressively — high YED means disproportionate sales growth. China luxury goods market grew 50x 2000-2020 as incomes rose.<br><br><strong>Macroeconomic sensitivity:</strong> firms with high YED products must track GDP forecasts carefully. High YED = high economic sensitivity = more volatile earnings = higher financial risk.',
      keyTerms: [
        { term: 'Pro-cyclical', def: 'Sales rise in booms and fall in recessions — typical of luxury goods with high positive YED.' },
        { term: 'Counter-cyclical', def: 'Sales rise in recessions and fall in booms — typical of inferior goods (negative YED) like discount retailers.' },
        { term: 'Diversification', def: 'Holding products with different YED profiles reduces overall revenue volatility.' }
      ],
      examEdge: 'Ryanair benefited from the 2008-09 recession: consumers switched from full-service airlines (normal good, high YED) to low-cost airlines (inferior good substitute, negative YED relative to full-service). This illustrates how understanding YED reveals competitive dynamics during economic downturns.'
    },
    {
      id: 'yed_xed_4',
      template: 'framing',
      title: 'Cross-Price Elasticity of Demand (XED)',
      body: '<strong>XED</strong> measures the responsiveness of demand for Good A to a change in the price of Good B.<br><br><strong>Formula:</strong> XED = (% ΔQD of Good A) \xf7 (% ΔP of Good B)<br><br>XED sign reveals the relationship between the goods:<br>• <strong>XED > 0 (positive):</strong> Substitutes — a rise in price of B causes consumers to switch to A. Stronger positive XED → closer substitutes. Example: Pepsi and Coca-Cola.<br>• <strong>XED < 0 (negative):</strong> Complements — a rise in price of B reduces demand for A (used together). Stronger negative XED → closer complements. Example: petrol and cars.<br>• <strong>XED = 0:</strong> Unrelated goods — price of B has no effect on demand for A.',
      keyTerms: [
        { term: 'XED', def: '% change in QD of Good A \xf7 % change in price of Good B. Sign reveals relationship between goods.' },
        { term: 'Substitutes', def: 'Goods that can be used in place of each other; XED > 0.' },
        { term: 'Complements', def: 'Goods used together; XED < 0 — a rise in price of one reduces demand for the other.' }
      ],
      examEdge: 'XED is tested in supply/demand chain questions: "If the price of butter rises, what happens to demand for margarine?" XED(margarine, butter) > 0 → substitutes → demand for margarine rises. Walk through: price of B rises → consumers switch to A → demand for A increases. Always trace the direction carefully.'
    },
    {
      id: 'yed_xed_5',
      template: 'mechanisms',
      title: 'XED Applications: Substitutes and Complements',
      intro: 'XED analysis is used in competition policy, business strategy, and market definition.',
      steps: [
        { label: 'Market definition (competition law)', text: 'Regulators use XED to define a product\'s market. If XED between two products is high (>0.5), they are in the same market and a merger between their producers may reduce competition. XED evidence is used in CMA merger investigations.' },
        { label: 'Complement pricing strategy', text: 'If XED(A, B) is strongly negative, cutting price of B boosts demand for A. Razor-blade model: cheap razors → high demand for blades. Console manufacturers: cheap PlayStation → high demand for games.' },
        { label: 'Competitive pricing', text: 'High positive XED between two firms\' products → intense competition. A price cut by rival B significantly increases B\'s QD at expense of A. Cola wars: Pepsi and Coke have high positive XED.' },
        { label: 'Portfolio strategy', text: 'Firms producing complements (negative XED) can cross-subsidise — lower price of one product to boost demand for the complementary product where margins are higher.' }
      ],
      examEdge: 'Competition law application: the CMA (UK) or European Commission define the "relevant market" using XED. If XED between two products is high and positive, they constrain each other\'s pricing — they are in the same market. Low or negative XED means they are separate markets. This determines whether a merger is investigated.'
    },
    {
      id: 'yed_xed_6',
      template: 'diagnose',
      title: 'Calculating YED and XED: Worked Examples',
      intro: 'Practise interpreting calculated values with the correct sign, magnitude, and conclusion.',
      rows: [
        { label: 'Scenario', colA: 'Incomes rise 5%; demand for bus travel falls 10%', colB: 'Price of coffee rises 15%; demand for tea rises 9%' },
        { label: 'Formula', colA: 'YED = -10% \xf7 5% = -2', colB: 'XED = +9% \xf7 +15% = +0.6' },
        { label: 'Interpretation', colA: 'YED = -2: strong inferior good. A 5% income rise causes 10% fall in bus demand. As incomes rise, passengers switch to cars or taxis.', colB: 'XED = +0.6: substitutes (positive sign). A 15% rise in coffee price raises tea demand by 9%. Moderate substitutes — some consumers switch but not all.' }
      ],
      footer: 'Note for YED: the number 2 matters — demand is highly income sensitive. For XED: the value 0.6 confirms positive (substitutes) but indicates moderate substitutability — goods are imperfect substitutes rather than near-identical.',
      examEdge: 'Multi-mark YED/XED questions: (1) state formula, (2) substitute values, (3) calculate, (4) interpret sign, (5) interpret magnitude. Full marks require ALL five steps. Missing the magnitude interpretation (just saying "substitutes" without noting "moderate" vs "close") leaves marks on the table.'
    },
    {
      id: 'yed_xed_7',
      template: 'framing',
      title: 'YED, XED and the Wider Economy',
      body: '<strong>YED and international trade:</strong> countries exporting luxury goods (France — champagne, fashion; Germany — premium cars) are more vulnerable to global recessions (high YED in export markets → sharp revenue falls). Countries exporting commodities face different challenges (low YED, but price volatility).<br><br><strong>YED and structural change:</strong> as incomes rise over time, consumer spending shifts from necessities to luxuries (Engel\'s Law). This drives sectoral transformation: agriculture → manufacturing → services, as rising incomes shift demand toward higher-YED goods.<br><br><strong>XED and inflation:</strong> when energy prices rise sharply, negative XED with energy-intensive goods (plastic, chemicals, transport) creates cost-push inflation across complementary markets.',
      keyTerms: [
        { term: 'Engel\'s Law', def: 'As income rises, the proportion spent on food falls — a specific application of YED showing food is a necessity (low YED).' },
        { term: 'Structural transformation', def: 'Shift in economic activity from primary to secondary to tertiary sectors as incomes rise — driven by different YED across sectors.' },
        { term: 'Cost-push transmission', def: 'Rise in price of a complement (energy) reduces demand for and raises costs of energy-intensive goods — inflation spreads through complement linkages.' }
      ],
      examEdge: 'Engel\'s Law as a macro application: UK households spend 8% of income on food; Ethiopian households spend 50%. This reflects different income levels and YED — as development raises incomes, food\'s share of spending falls, releasing income for manufactured goods and services. A powerful micro-macro link.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }
  ]
};
