window.ECONOS_TOPIC = {
  id: 'yed_xed',
  topicNum: '1.10',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'YED & XED',
  estTime: '10-12 minutes',
  goal: 'Lock in income and cross-price elasticities — formulas, signs, interpretation, and their applications to business and trade strategy.',
  intro: {
    heroKey: 'heroElasticity',
    summary: 'YED and XED extend elasticity analysis beyond own-price. They reveal how demand responds to income changes (YED) and to the prices of related goods (XED) — critical for classifying goods and understanding market linkages.',
    doInThis: 'Work through 9 cards: the big picture, an interactive YED Engel-curve explorer, normal/inferior/luxury goods, YED business strategy, the XED formula, an interactive XED cross-price explorer, XED applications, worked calculations, and the wider economy implications.',
    outcomes: [
      'Calculate and interpret YED including sign and magnitude',
      'Classify goods as normal (luxury/necessity) or inferior using YED',
      'Calculate and interpret XED including sign and what it reveals about the relationship between goods',
      'Apply YED and XED to business portfolio and trade analysis'
    ],
    tip: 'YED: positive = normal good (rises with income); negative = inferior good (falls with income); >1 = luxury. XED: positive = substitutes (rise in price of B raises demand for A); negative = complements.',
    stages: [
      { num: 1, name: 'Learn it', sub: '9 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'yed_xed_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 9',
      title: 'YED &amp; XED: the big picture',
      lede: 'Demand doesn&apos;t just respond to a good&apos;s own price — it also reacts to incomes and to the prices of <em>other</em> goods.',
      branches: [
        { tone: 'green',  label: 'YED: income elasticity',         sub: '%&Delta;QD &divide; %&Delta;income. The sign reveals the good type; the size reveals the responsiveness.' },
        { tone: 'blue',   label: 'Normal, inferior, luxury',       sub: 'YED &gt; 0 = normal; &lt; 0 = inferior; &gt; 1 = luxury; 0–1 = necessity. The classification that drives long-run industry growth.' },
        { tone: 'amber',  label: 'XED: cross-price elasticity',    sub: '%&Delta;QD<sub>A</sub> &divide; %&Delta;P<sub>B</sub>. Positive = substitutes; negative = complements; zero = unrelated.' },
        { tone: 'purple', label: 'Business &amp; strategy use',    sub: 'Firms use YED to forecast through the cycle and XED to map rivals and complements. The elasticity toolkit in action.' },
        { tone: 'rose',   label: 'Wider economy implications',     sub: 'Income elasticities shape structural change: as economies grow, demand swings from agriculture to manufacturing to services.' }
      ],
      body: '<strong>YED</strong> measures the responsiveness of quantity demanded to a change in consumer income.<br><br><strong>Formula:</strong> YED = (% ΔQD) \xf7 (% Δ Income)<br><br>Unlike PED, YED can be positive or negative, and its sign is crucial:<br>• <strong>YED > 0:</strong> Normal good — demand rises as income rises (consumers can afford more)<br>• <strong>YED < 0:</strong> Inferior good — demand falls as income rises (consumers switch to better alternatives)<br>• <strong>YED > 1:</strong> Luxury good — demand rises proportionally more than income<br>• <strong>0 < YED < 1:</strong> Necessity (normal but not luxury) — demand rises proportionally less than income',
      keyTerms: [
        { term: 'YED', def: '% change in quantity demanded \xf7 % change in income. Sign indicates good type; magnitude indicates responsiveness.' },
        { term: 'Normal good', def: 'YED > 0: demand increases as income rises.' },
        { term: 'Inferior good', def: 'YED < 0: demand falls as income rises — consumers trade up to superior alternatives.' }
      ],
      examEdge: 'The sign of YED is its most important feature — it classifies the good. The magnitude determines sensitivity. A common error: students say "demand is inelastic" when they mean "necessity" (low YED). YED is not about price responsiveness — use "normal/inferior" and "luxury/necessity" language instead.'
    },
    {
      id: 'yed_explorer',
      template: 'yed-explorer',
      stepLabel: 'Learn: Step 2 of 9',
      title: 'YED Explorer: drag the points along the Engel curve',
      lede: 'Move <strong>A</strong> and <strong>B</strong> along the Engel curve (Income on X, Quantity demanded on Y). The sign of YED classifies the good; the magnitude tells you how sensitive demand is to income. Watch the chip flip as you move from inferior to necessity to luxury.',
      howItWorks: 'When income rises, demand for a <strong>normal good</strong> rises (upward-sloping Engel curve). For an <strong>inferior good</strong>, demand falls as income rises (downward-sloping). The <strong>luxury threshold</strong> is YED > 1 — demand grows <em>faster</em> than income. Try the presets: Bus travel (negative → inferior), Basic food (positive but < 1 → necessity), Through origin (YED = 1 everywhere), Restaurant meals and Foreign holidays (both > 1 → luxury).',
      examEdge: 'The sign of YED is the most-tested feature: positive = normal, negative = inferior. The magnitude (0–1 = necessity; > 1 = luxury) is tested in data-response questions. A common error: writing "income elastic" or "income inelastic" — the exam expects "luxury" or "necessity" language, not elastic/inelastic. Save that language for PED and PES.'
    },
    {
      id: 'yed_xed_2',
      template: 'cause',
      stepLabel: 'Learn: Step 3 of 9',
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
      stepLabel: 'Learn: Step 4 of 9',
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
      id: 'xed_explorer',
      template: 'xed-explorer',
      stepLabel: 'Learn: Step 5 of 9',
      title: 'XED Explorer: drag the points, spot substitute or complement',
      lede: 'Price of Good B is on the X-axis; Quantity demanded of Good A is on the Y-axis. Move <strong>A</strong> and <strong>B</strong> to see how the demand for Good A responds when Good B\'s price changes. The sign of XED tells you everything.',
      howItWorks: '<strong>Positive slope → substitutes</strong>: as Good B gets pricier, consumers switch to Good A (demand for A rises). <strong>Negative slope → complements</strong>: as Good B gets pricier, demand for B falls — and since the goods are used together, demand for A falls too. <strong>Horizontal line → independent</strong>: Good B\'s price has no effect on Good A.<br><br>Try the presets: Coke/Pepsi and Tea/Coffee show substitutes (positive); Petrol & car trips and Tea & milk show complements (negative).',
      examEdge: 'Sign is everything for XED: positive = substitutes, negative = complements. Magnitude tells you how close the relationship is. The most common XED exam error: students forget that the price change is for Good B but the demand change is for Good A — the cross-price relationship always runs between TWO different goods. Always name both goods explicitly in your answer.'
    },
    {
      id: 'yed_xed_4',
      template: 'framing',
      stepLabel: 'Learn: Step 6 of 9',
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
      stepLabel: 'Learn: Step 7 of 9',
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
      stepLabel: 'Learn: Step 8 of 9',
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
      stepLabel: 'Learn: Step 9 of 9',
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
