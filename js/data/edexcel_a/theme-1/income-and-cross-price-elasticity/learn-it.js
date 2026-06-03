window.ECONOS_TOPIC = {
  id: 'income-and-cross-price-elasticity',
  topicNum: '2.3',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Income & Cross-Price Elasticity',
  estTime: '12–14 minutes',
  goal: 'Understand YED and XED – their formulas, signs, magnitudes, and how they classify goods, reveal market relationships, and drive business and policy decisions.',
  intro: {
    heroKey: 'heroElasticity',
    summary: 'YED measures how demand responds to income changes; XED measures how demand for one good responds to the price of another. Together they classify goods (normal, inferior, luxury, necessity) and reveal whether two products are substitutes, complements, or unrelated.',
    doInThis: 'Work through 10 cards: the big picture, income elasticity, a YED worked example, how income reshapes spending, cross-price elasticity, an XED worked example, the strength of XED relationships, what determines the size of YED and XED, real-world uses, and an exam-ready toolkit.',
    outcomes: [
      'Calculate and interpret YED including sign and magnitude',
      'Classify goods as normal (luxury/necessity) or inferior using YED',
      'Calculate and interpret XED including sign and what it reveals about the relationship between goods',
      'Explain the factors that determine the size of YED and XED',
      'Apply YED and XED to business strategy, competition policy, and macroeconomic analysis'
    ],
    tip: 'YED: positive = normal good; negative = inferior good; YED > 1 = luxury; 0 < YED < 1 = necessity. XED: positive = substitutes; negative = complements; zero = unrelated.',
    stages: [
      { num: 1, name: 'Learn it', sub: '10 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    /* ================================================================
       CARD 1 – YED AND XED: THE BIG PICTURE
       Two lenses on demand + what they help us do
       ================================================================ */
    {
      id: 'yed_xed_1',
      stepLabel: 'Learn: Step 1 of 10',
      title: 'YED and XED — the big picture',
      tip: { tone: 'green', icon: '🔒', text: 'YED shows how demand responds to <strong>income</strong>. XED shows how demand responds to <strong>another good’s price</strong>.' },
      intro: 'Demand doesn’t only respond to a good’s own price. It also responds to income and to the prices of related goods.',
      diagramKey: 'yedXedTwoLenses',
      diagramLabel: 'Two lenses on demand',
      diagramEmoji: '🔭',
      causesLabel: 'What they help us do',
      causesEmoji: '🎯',
      causesStyle: 'plain-white',
      causes: [
        { tone: 'green',  icon: '🏷️', head: 'Classify goods', body: 'YED tells us whether goods are normal, inferior or luxury.' },
        { tone: 'purple', icon: '🔀', head: 'Spot substitutes & complements', body: 'XED shows how related goods move together or in opposite directions.' },
        { tone: 'blue',   icon: '📈', head: 'Forecast market shifts', body: 'Anticipate how a change in income or another price will shift demand.' },
        { tone: 'amber',  icon: '⚙️', head: 'Pricing & product decisions', body: 'Firms use YED and XED to set smarter prices and build product strategy.' }
      ],
      keyTakeaway: {
        title: 'Big idea',
        text: 'PED explains movement <em>along</em> a demand curve. YED and XED help explain <em>shifts</em> in demand.'
      },
      examEdge: 'Always identify what changed first — income, the good’s own price, or another good’s price. That tells you whether you need YED, PED or XED.'
    },

    /* ================================================================
       CARD 2 – INCOME ELASTICITY OF DEMAND (concept)
       Formula → classify spectrum → read the sign → predict-reveal
       ================================================================ */
    {
      id: 'yed_xed_2',
      stepLabel: 'Learn: Step 2 of 10',
      title: 'Income elasticity of demand',
      tip: { tone: 'green', icon: '🔒', text: 'YED = % change in quantity demanded \xf7 % change in income.' },
      intro: 'YED measures how strongly quantity demanded responds when consumer income changes.',
      body: `<div style="border:2px solid #1E3A5F;border-radius:12px;padding:18px 16px;text-align:center;background:#F8FAFC;margin-bottom:6px;">
  <div style="font-size:22px;font-weight:800;color:#2563EB;font-family:Fraunces,Georgia,serif;">YED = %ΔQ<sup>d</sup> ÷ %ΔY</div>
  <div style="font-size:13px;color:#475569;margin-top:8px;line-height:1.6;">A <strong>positive</strong> YED means a normal good. A <strong>negative</strong> YED means an inferior good. The <strong>sign</strong> classifies the good — get it right first.</div>
</div>`,
      bodyVisualKey: 'yedClassifySpectrum',
      bodyVisualLabel: 'Classify the result',
      bodyVisualEmoji: '📊',
      productExamplesTitle: 'Normal or inferior?',
      productExamplesSubtitle: 'Predict the YED classification for each good – then reveal the verdict.',
      productExamples: [
        {
          icon: '✈️',
          product: 'Foreign holidays',
          verdict: 'Luxury (YED > 1)',
          verdictTone: 'purple',
          reasoning: 'YED ≈ 1.5–2.5. Demand is strongly income-sensitive – surges in booms, collapses in recessions. Airlines and travel firms must plan for sharp cyclical swings in revenue.'
        },
        {
          icon: '🚌',
          product: 'Bus travel',
          verdict: 'Inferior (YED < 0)',
          verdictTone: 'red',
          reasoning: 'YED ≈ −2. As incomes rise, people switch to cars or taxis. Demand falls when the economy grows, rises in recessions – a counter-cyclical pattern. Subsidies are often needed in booms.'
        },
        {
          icon: '🍞',
          product: 'Bread',
          verdict: 'Necessity (0 < YED < 1)',
          verdictTone: 'amber',
          reasoning: 'YED ≈ 0.1–0.3. Demand barely changes with income. A recession-resilient staple – people buy roughly the same amount regardless of whether the economy grows or contracts.'
        },
        {
          icon: '👜',
          product: 'Designer handbags',
          verdict: 'Luxury (YED > 1)',
          verdictTone: 'purple',
          reasoning: 'YED > 2. Luxury goods have very high income elasticity – demand rises far more than proportionally when incomes grow. The global luxury market collapsed ~30% in the 2008–09 recession.'
        }
      ],
      examEdge: 'State the sign, the size, and the type of good: "YED = +1.8, so demand rises more than proportionately — this is a luxury good." Never use elastic/inelastic language for YED.'
    },

    /* ================================================================
       CARD 3 – INTERACTIVE CALCULATION: YED  (KEEP — bespoke template)
       Bus travel scenario – connected 5-step chain
       ================================================================ */
    {
      id: 'yed_xed_calc',
      template: 'yed-calculation',
      stepLabel: 'Learn: Step 3 of 10',
      title: 'Worked Example: Calculating YED',
      lede: 'The sign matters as much as the number – get both right.',
      scenario: {
        icon: '🚌',
        headline: 'Bus travel demand',
        subline: 'Rising incomes – which way does demand move?',
        currency: '£',
        y1: 100,
        y2: 105,
        q1: 200,
        q2: 180
      },
      conclusion: 'YED = −2 confirms bus travel is an inferior good with high income sensitivity. This shapes transport policy: subsidising buses makes sense when the economy grows (demand falls and operators need support) as well as during recessions when lower-income households rely on public transport.',
      contextLine: 'The negative sign is what matters most – it tells you the good is inferior. The magnitude (2) tells you how strongly income-sensitive demand is.',
      examEdge: {
        title: 'Five steps for full marks',
        text: 'State formula → substitute values → calculate → interpret sign (good type) → interpret magnitude (sensitivity). "Bus travel is an inferior good" alone is not enough – you must quantify and explain the magnitude.'
      }
    },

    /* ================================================================
       CARD 4 – HOW INCOME CHANGES SPENDING PATTERNS
       Income ladder + think like a consumer + what YED reveals
       ================================================================ */
    {
      id: 'yed_xed_4',
      stepLabel: 'Learn: Step 4 of 10',
      title: 'How income changes spending patterns',
      tip: { tone: 'green', icon: '🔒', text: 'Rising income usually lifts necessities a little, luxuries a lot, and can <strong>reduce</strong> demand for inferior goods.' },
      intro: 'As households get richer, they don’t increase demand for every good by the same amount.',
      diagramKey: 'yedIncomeLadder',
      diagramLabel: 'The income ladder',
      diagramEmoji: '📊',
      causesLabel: 'Think like a consumer',
      causesEmoji: '🧑‍🤝‍🧑',
      causes: [
        { head: 'Student budget is tight', body: 'More bus travel, fewer taxis — inferior goods do the work.' },
        { head: 'Family income rises', body: 'Supermarket basics rise a little — necessity demand creeps up.' },
        { head: 'A bonus arrives', body: 'Holidays and restaurant meals jump — luxury demand surges.' }
      ],
      causes2Label: 'What YED reveals',
      causes2Emoji: '📈',
      causes2Style: 'plain-white',
      causes2: [
        { tone: 'green',  icon: '🎯', head: 'Priorities', body: 'Shows how spending shifts as needs and wants change.' },
        { tone: 'blue',   icon: '📊', head: 'Living standards', body: 'Higher incomes move spending from basics to higher-value goods.' },
        { tone: 'amber',  icon: '🛡️', head: 'Vulnerability in recessions', body: 'Households cut luxuries first, sometimes relying more on cheaper goods.' },
        { tone: 'purple', icon: '🚀', head: 'Which markets grow in a boom', body: 'Firms can target the sectors with the strongest income responses.' }
      ],
      keyTakeaway: {
        title: 'Big idea',
        text: 'YED helps explain why economic growth reshapes the <em>composition</em> of demand — not just its level.'
      },
      examEdge: 'Don’t just say "demand rises" — explain whether the good is inferior, a necessity, or a luxury, and why.'
    },

    /* ================================================================
       CARD 5 – CROSS-PRICE ELASTICITY EXPLAINED (concept)
       Relationship hub → read the sign → predict-reveal
       ================================================================ */
    {
      id: 'yed_xed_5',
      stepLabel: 'Learn: Step 5 of 10',
      title: 'Cross-price elasticity explained',
      tip: { tone: 'green', icon: '🔒', text: 'XED = % change in quantity demanded of good A \xf7 % change in price of good B.' },
      intro: 'XED measures how demand for one good responds when the price of another good changes.',
      diagramKey: 'xedRelationshipHub',
      diagramLabel: 'The relationship',
      diagramEmoji: '🕸️',
      causes2Label: 'Read the sign',
      causes2Emoji: '🧭',
      causes2Style: 'plain-white',
      causes2: [
        { tone: 'green',  icon: '➕', head: 'Positive → substitutes', body: 'Consumers switch towards the other good.' },
        { tone: 'amber',  icon: '➖', head: 'Negative → complements', body: 'The goods are used together.' },
        { tone: 'purple', icon: '≈', head: 'Near zero → unrelated', body: 'Little or no relationship.' }
      ],
      productExamplesTitle: 'Substitute or complement?',
      productExamplesSubtitle: 'Predict the XED relationship for each pair – then reveal the verdict.',
      productExamples: [
        {
          icon: '☕',
          product: 'Tea & coffee',
          verdict: 'Substitutes (XED > 0)',
          verdictTone: 'green',
          reasoning: 'XED ≈ +0.6. When coffee prices rise, some consumers switch to tea – positive cross-price elasticity confirms substitutability. The CMA would consider this borderline evidence of market overlap.'
        },
        {
          icon: '⛽',
          product: 'Petrol & cars',
          verdict: 'Complements (XED < 0)',
          verdictTone: 'red',
          reasoning: 'XED ≈ −0.5 to −1.0. When petrol prices spike, demand for (petrol-powered) cars falls – they are used together. A strong oil price rise meaningfully reduces new car sales.'
        },
        {
          icon: '🎮',
          product: 'Games consoles & games',
          verdict: 'Strong Complements (XED << 0)',
          verdictTone: 'red',
          reasoning: 'XED strongly negative. PlayStation console pricing is kept low to drive game sales at full margin – the classic razor-blade model. Demand for games falls sharply if console prices rise.'
        },
        {
          icon: '🚆',
          product: 'Train & bus travel',
          verdict: 'Substitutes (XED > 0)',
          verdictTone: 'green',
          reasoning: 'XED > 0 – when train fares rise, some commuters switch to buses. Both serve the same journey need. Rail strikes (effectively infinite price rise) consistently boost bus and coach demand.'
        }
      ],
      examEdge: 'Name both goods clearly, then interpret the sign and size: "XED(tea, coffee) = +0.6 — they are substitutes, but only moderate ones."'
    },

    /* ================================================================
       CARD 6 – INTERACTIVE CALCULATION: XED  (KEEP — bespoke template)
       Tea & coffee scenario – connected 5-step chain
       ================================================================ */
    {
      id: 'yed_xed_calc2',
      template: 'xed-calculation',
      stepLabel: 'Learn: Step 6 of 10',
      title: 'Worked Example: Calculating XED',
      lede: 'Always name both goods and state which price changed and which quantity responded.',
      scenario: {
        icon: '☕',
        headline: 'Tea and coffee at a café',
        subline: 'Coffee gets more expensive – what happens to tea demand?',
        currency: '£',
        goodA: 'Tea',
        goodB: 'Coffee',
        pb1: 2.00,
        pb2: 2.30,
        qa1: 200,
        qa2: 218
      },
      conclusion: 'XED(tea, coffee) = +0.6 confirms they are moderate substitutes. A business selling tea could use this insight: when coffee prices rise (from commodity shocks or bean shortages), expect a modest boost to tea demand – but not a massive one. Close substitutes would show XED closer to 2 or 3.',
      contextLine: 'The sign (+) tells you the goods are substitutes. The magnitude (0.6) tells you how close – moderate, not close.',
      examEdge: {
        title: 'Name both goods every time',
        text: 'Magnitude matters for XED: a value of 0.1 means very weak substitutes; 2.0 means very close substitutes. The CMA uses XED > ~0.5 as evidence that two products are in the same market when reviewing mergers – a value of 0.6 would be borderline evidence of market overlap.'
      }
    },

    /* ================================================================
       CARD 7 – HOW STRONG IS THE RELATIONSHIP?
       XED strength spectrum + why size matters + quick rules
       ================================================================ */
    {
      id: 'yed_xed_7',
      stepLabel: 'Learn: Step 7 of 10',
      title: 'How strong is the relationship?',
      tip: { tone: 'green', icon: '🔒', text: 'A large <strong>positive</strong> XED suggests close substitutes. A large <strong>negative</strong> XED suggests strong complements.' },
      intro: 'For XED, the sign shows the direction of the relationship. The size shows how close the link really is.',
      diagramKey: 'xedStrengthSpectrum',
      diagramLabel: 'From strong complements to close substitutes',
      diagramEmoji: '📈',
      causesLabel: 'Why size matters',
      causesEmoji: '🧑‍🤝‍🧑',
      causes: [
        { head: 'Closeness of competition', body: 'The bigger the value, the more closely the goods compete (or work together).' },
        { head: 'Bundle dependence', body: 'Large negatives mean demand rises or falls because the goods are bundled.' },
        { head: 'How easy it is to switch or separate', body: 'Higher positives mean it is easier for consumers to switch.' }
      ],
      causes2Label: 'Quick rules',
      causes2Emoji: '⚡',
      causes2: [
        { tone: 'purple', icon: '➕', head: 'High positive — close rivals', body: 'If the price of A rises and demand for B jumps a lot, XED is high and positive.' },
        { tone: 'amber',  icon: '➖', head: 'High negative — bought together', body: 'If the price of A rises and demand for B falls a lot, XED is highly negative.' },
        { tone: 'green',  icon: '≈', head: 'Near zero — little relevance', body: 'Changes in A’s price hardly affect demand for B.' }
      ],
      keyTakeaway: {
        title: 'Big idea',
        text: 'XED doesn’t just label a relationship — it shows how economically <em>important</em> that relationship is.'
      },
      examEdge: 'Interpret both the sign and the magnitude, then link it to consumer choice and firm strategy.'
    },

    /* ================================================================
       CARD 8 – WHAT DETERMINES THE SIZE OF YED AND XED — spec 1.2.3(d)
       Closes the YED/XED determinants gap from the Theme 1 audit.
       Distinct from C4 (what YED *reveals*) and C7 (how to *interpret*
       XED magnitude): this card lists the *factors that drive* the size
       of each elasticity. Two tile blocks (YED drivers, then XED
       drivers), each driver carrying a UK example.
       ================================================================ */
    {
      id: 'yed_xed_determinants',
      stepLabel: 'Learn: Step 8 of 10',
      title: 'What determines the size of YED and XED',
      tip: { tone: 'green', icon: '🔒', text: 'Spec point 1.2.3(d): you must be able to explain the <strong>factors</strong> that make each elasticity large or small — not just calculate it.' },
      intro: 'Two goods can both be "normal" or both be "substitutes", yet have very different elasticity sizes. These are the factors that decide how big the number is.',
      causesLabel: 'What makes YED large or small',
      causesEmoji: '💰',
      causes: [
        { tone: 'blue', head: 'Necessity vs luxury', body: 'Luxuries are highly income-sensitive (YED > 1); necessities barely move (0 < YED < 1); inferior goods fall as income rises (YED < 0). <em>UK: overseas holidays and restaurant meals surge in a boom (luxury); bread and milk creep up slowly (necessity); value own-label ranges can fall as incomes rise.</em>' },
        { tone: 'amber', head: 'Income level &amp; stage of development', body: 'The <em>same</em> good can be a luxury at low income and a necessity — or even inferior — at high income. <em>UK: car ownership was a luxury in the 1950s and a near-necessity today; in lower-income economies a fridge or smartphone is still income-elastic.</em>' },
        { tone: 'purple', head: 'Time horizon', body: 'Spending habits re-base slowly, so YED is often larger in the long run as households adjust their whole lifestyle to a new income level rather than tweaking one purchase.' }
      ],
      causes2Label: 'What makes XED large or small',
      causes2Emoji: '🔀',
      causes2: [
        { tone: 'blue', head: 'Closeness of substitutes', body: 'The more two goods serve the same need, the larger the <strong>positive</strong> XED. <em>UK: rival streaming services (Netflix ↔ Disney+) or branded ↔ supermarket own-label have high positive XED; a price rise in one sends buyers to the other.</em>' },
        { tone: 'amber', head: 'Strength of complementarity', body: 'The more two goods must be used together, the larger the <strong>negative</strong> XED. <em>UK: petrol and large cars, printers and ink, consoles and games — a price rise in one cuts demand for the other.</em>' },
        { tone: 'purple', head: 'Brand loyalty &amp; switching costs', body: 'Strong brand attachment or high switching costs <strong>weaken</strong> XED — loyal or locked-in consumers don\'t switch even when a rival changes price. <em>UK: Apple\'s ecosystem lock-in keeps its XED with Android phones lower than the products\' similarity alone would suggest.</em>' }
      ],
      keyTakeaway: {
        title: 'Big idea',
        text: 'Sign tells you the <em>type</em> of good or relationship; these factors tell you the <em>size</em> of the response — which is what firms and policymakers actually plan around.'
      },
      examEdge: 'A common top-band move: having classified a good or relationship, go one step further and justify <em>why</em> the elasticity is large or small using one of these factors. "Demand is income-elastic because it is a luxury with no necessity component" earns the evaluation mark.'
    },

    /* ================================================================
       CARD 9 – YED AND XED IN THE REAL WORLD
       Four scenarios + who uses them + short context big consequences
       ================================================================ */
    {
      id: 'yed_xed_8',
      stepLabel: 'Learn: Step 9 of 10',
      title: 'YED and XED in the real world',
      tip: { tone: 'green', icon: '🔒', text: 'Elasticities turn a change in income or price into a <strong>prediction about demand</strong>.' },
      intro: 'Elasticities help firms and governments forecast how markets change in recessions, booms, and price shocks.',
      causesLabel: 'Four market scenarios',
      causesEmoji: '🌍',
      causesStyle: 'tinted-flat',
      causes: [
        { tone: 'blue',   icon: '📉', head: 'Recession', body: 'Incomes fall: luxury demand drops sharply, some inferior goods rise.<br><strong>Luxury ↓ · Inferior ↑</strong>' },
        { tone: 'amber',  icon: '📈', head: 'Boom', body: 'Incomes rise: demand for luxuries and travel grows fastest.<br><strong>Luxury ↑ · Travel ↑</strong>' },
        { tone: 'purple', icon: '🔀', head: 'Rival price cut', body: 'Demand shifts from one brand to its substitute.<br><strong>Brand A ↓ · Brand B ↑</strong>' },
        { tone: 'green',  icon: '⛽', head: 'Fuel tax rise', body: 'Demand for a complement such as car journeys is hit.<br><strong>Car journeys ↓ · Public transport ↑</strong>' }
      ],
      causes2Label: 'Who uses them',
      causes2Emoji: '🧑‍🤝‍🧑',
      causes2Style: 'tinted-flat',
      causes2: [
        { tone: 'blue',   icon: '🏢', head: 'Firms — planning & pricing', body: 'Fine-tune pricing, choose the product mix, and prepare for demand shifts.' },
        { tone: 'amber',  icon: '🏛️', head: 'Governments — tax & forecasting', body: 'Predict revenue and behavioural responses to taxes, subsidies and shocks.' },
        { tone: 'green',  icon: '📈', head: 'Investors — winners & losers', body: 'Identify sectors and firms that gain or lose as the economic cycle turns.' }
      ],
      causes3Label: 'Short context, big consequences',
      causes3Emoji: '🎯',
      causes3Style: 'plain-white',
      causes3: [
        { tone: 'blue',   icon: '🔁', head: 'Luxury markets are cyclical', body: 'High YED means booms and busts.' },
        { tone: 'amber',  icon: '🛒', head: 'Inferior goods can be counter-cyclical', body: 'They often rise when incomes fall.' },
        { tone: 'purple', icon: '🤝', head: 'Close substitutes intensify competition', body: 'Small price cuts can steal big demand.' },
        { tone: 'green',  icon: '🔗', head: 'Complements transmit shocks', body: 'A price rise in one good hits its partners.' }
      ],
      keyTakeaway: {
        title: 'Big idea',
        text: 'Elasticities help economists anticipate <em>who gains, who loses, and why</em>.'
      },
      examEdge: 'Use context — recession, boom, substitute, complement — to turn a classification into an application.'
    },

    /* ================================================================
       CARD 9 – THE YED AND XED EXAM TOOLKIT
       How to read → common mistakes → how to write it
       ================================================================ */
    {
      id: 'yed_xed_9',
      stepLabel: 'Learn: Step 10 of 10',
      title: 'The YED and XED exam toolkit',
      tip: { tone: 'green', icon: '🔒', text: 'Good answers <strong>calculate, classify and apply</strong>.' },
      intro: 'Most questions boil down to identifying the change, choosing the right elasticity, calculating it, and applying it.',
      flowTitle: 'How to read the question',
      flowEmoji: 'ℹ️',
      flow: [
        { tone: 'blue',   icon: '🔍', title: 'Identify the change', sub: 'Is the question about income (Y) or the price of another good (Pₓ)?' },
        { tone: 'amber',  icon: '🧮', title: 'Choose the formula',  sub: 'YED = %ΔQ<sup>d</sup> ÷ %ΔY, or XED = %ΔQ<sup>d</sup> ÷ %ΔPₓ.' },
        { tone: 'purple', icon: '⚖️', title: 'Calculate &amp; classify', sub: 'Compute the value, then use the sign and size to decide what it means.' },
        { tone: 'green',  icon: '🎯', title: 'Apply it',             sub: 'Link the result to inferior/luxury or substitute/complement — and a real outcome.' }
      ],
      body: `<style>.yx-toolkit-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px;}@media (max-width:560px){.yx-toolkit-grid{grid-template-columns:1fr;}}</style>
<div style="font-size:11px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#DC2626;margin:6px 0 12px;">⚠️ Common mistakes</div>
<div class="yx-toolkit-grid">
  <div style="border-radius:12px;border:1px solid #FDA4AF;background:#FFF1F2;padding:14px 16px;">
    <div style="font-weight:800;font-size:14.5px;color:#9F1239;margin-bottom:6px;">⚠️ Using PED instead</div>
    <div style="font-size:14px;color:#0B1426;line-height:1.6;">Confusing own-price elasticity with income or cross-price elasticity.</div>
  </div>
  <div style="border-radius:12px;border:1px solid #FDA4AF;background:#FFF1F2;padding:14px 16px;">
    <div style="font-weight:800;font-size:14.5px;color:#9F1239;margin-bottom:6px;">⚠️ Forgetting the sign</div>
    <div style="font-size:14px;color:#0B1426;line-height:1.6;">Ignoring whether the elasticity is positive, negative or zero — the sign is the classification.</div>
  </div>
  <div style="border-radius:12px;border:1px solid #FDA4AF;background:#FFF1F2;padding:14px 16px;">
    <div style="font-weight:800;font-size:14.5px;color:#9F1239;margin-bottom:6px;">⚠️ Using absolute changes</div>
    <div style="font-size:14px;color:#0B1426;line-height:1.6;">Elasticity needs proportional (percentage) changes, not raw differences.</div>
  </div>
  <div style="border-radius:12px;border:1px solid #FDA4AF;background:#FFF1F2;padding:14px 16px;">
    <div style="font-weight:800;font-size:14.5px;color:#9F1239;margin-bottom:6px;">⚠️ No context or implication</div>
    <div style="font-size:14px;color:#0B1426;line-height:1.6;">Giving a number without saying what it implies for behaviour or markets.</div>
  </div>
</div>`,
      causesLabel: 'How to write it',
      causesEmoji: '✍️',
      causesStyle: 'plain-white',
      causes: [
        { tone: 'blue',  icon: '📈', head: 'A YED answer', body: 'Demand is <strong>income elastic</strong> because YED = 1.8, so as income rises demand increases more than proportionately. This suggests a <strong>luxury good</strong>.' },
        { tone: 'green', icon: '☕', head: 'An XED answer', body: 'Demand for tea is <strong>positively cross-price elastic</strong> with coffee, so a rise in coffee prices shifts demand towards tea. This suggests the goods are <strong>substitutes</strong>.' }
      ],
      keyTakeaway: {
        title: 'Big idea',
        text: 'If you can calculate YED and XED and explain what they imply, you can answer most elasticity questions well.'
      },
      examEdge: 'Top answers combine the number with context — inferior or luxury, substitute or complement, recession or boom.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0
   These questions used to live at /quiz/<topic>/<set> as a
   standalone shell. They now ride along with the Learn It data
   under the same window.ECONOS_QUIZ global. The /quiz/ URL
   contract is gone; the quiz is the natural finisher to the
   Learn It journey, so the data lives next to learn cards.
   ============================================================ */
/* ---- quiz-main.js (quiz pool, preserved from former /quiz/ shell) ---- */
(function () {

  window.ECONOS_QUIZ = {
    title:    'YED &amp; XED',
    subtitle: 'Theme 1 &middot; Topic 2.3 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('yed_xed_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers YED and XED formulas, normal/inferior/luxury classification, business strategy, and macro implications',
    shortNames: [
      'YED formula MCQ', 'YED numeric', 'Normal/inferior/luxury sort', 'XED formula MCQ',
      'XED numeric', 'Match pairs', 'Cause & effect', 'Para fill',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: YED interpretation */
      { type: 'mcq',
        stem: 'Which combination of YED values correctly classifies the three types of good?',
        opts: [
          'Normal good: YED = +0.8; Luxury good: YED = +2.1; Inferior good: YED = −0.6',
          'Normal good: YED = −0.8; Luxury good: YED = +2.1; Inferior good: YED = +0.6',
          'Normal good: YED = +0.8; Luxury good: YED = −2.1; Inferior good: YED = −0.6',
          'Normal good: YED = 0; Luxury good: YED = +0.5; Inferior good: YED = −0.6'
        ],
        ans: 0,
        exp: 'YED = % change in quantity demanded ÷ % change in income. <strong>Normal good</strong>: YED > 0 (demand rises with income) but YED < 1 (less than proportionally). <strong>Luxury good</strong>: YED > 1 (demand rises more than proportionally with income – these goods take a larger share of income as incomes rise). <strong>Inferior good</strong>: YED < 0 (demand falls as income rises – consumers switch to superior alternatives). Examples: luxury cars (YED ≈ +2.5), own-brand food (YED ≈ −0.5), bus travel (YED ≈ −0.4), smartphones (YED ≈ +0.8).'
      },

      /* 2 – Numeric input: YED calculation */
      { type: 'numeric_input',
        stem: 'Calculate the <strong>income elasticity of demand (YED)</strong>.',
        context: 'When average UK household income rises from <strong>£40,000 to £44,000 per year</strong>, annual demand for foreign holidays increases from <strong>20 million to 23 million</strong> trips.',
        answer: 1.5,
        tolerance: 0.05,
        unit: '',
        hint: 'YED = (% change in quantity demanded) ÷ (% change in income). Use original values as base.',
        workingSteps: [
          '% change in income = (44,000 − 40,000) ÷ 40,000 × 100 = +10%',
          '% change in QD = (23 − 20) ÷ 20 × 100 = +15%',
          'YED = +15% ÷ +10% = +1.5'
        ],
        exp: '% change in income = (44,000−40,000)/40,000 × 100 = <strong>+10%</strong>. % change in QD = (23−20)/20 × 100 = <strong>+15%</strong>. YED = 15%/10% = <strong>+1.5</strong>. Since YED > 1, foreign holidays are a <strong>luxury good</strong> – demand rises more than proportionally with income. This has important business implications: luxury goods businesses should expand in periods of strong income growth but face sharper demand falls in recessions. Airlines targeting leisure travellers face highly income-elastic demand – this explains why budget carriers cut capacity aggressively during the 2009 recession.'
      },

      /* 3 – Elastic sort: normal vs inferior vs luxury */
      { type: 'elastic_sort',
        stem: 'UK household incomes rise 10%. Classify each good\'s expected demand response.',
        categories: ['rises_lots', 'rises_little', 'falls'],
        categoryLabels: ['Demand rises strongly (luxury, YED > 1)', 'Demand rises slightly (normal, 0 < YED < 1)', 'Demand falls (inferior, YED < 0)'],
        goods: [
          { icon: '✈️', label: 'International business class flights', note: '', ans: 'rises_lots' },
          { icon: '🚌', label: 'Local bus journeys', note: '', ans: 'falls' },
          { icon: '🍞', label: 'Sliced white bread', note: '', ans: 'rises_little' },
          { icon: '💎', label: 'Luxury watches costing over £5,000', note: '', ans: 'rises_lots' },
          { icon: '🥫', label: 'Supermarket own-brand tinned food', note: '', ans: 'falls' },
          { icon: '📱', label: 'Mid-range smartphones', note: '', ans: 'rises_little' }
        ],
        exp: '<strong>Luxury goods (YED > 1)</strong>: demand rises more than proportionally with income – business class travel, luxury watches, fine dining. <strong>Normal goods (0 < YED < 1)</strong>: demand rises but less than proportionally – staple foods, standard electronics. <strong>Inferior goods (YED < 0)</strong>: demand falls as income rises – own-brand basic foods, bus travel (replaced by cars), cheap fast fashion. Understanding income elasticity helps businesses forecast demand through economic cycles and position products for different income segments.'
      },

      /* 4 – MCQ: XED interpretation */
      { type: 'mcq',
        stem: 'If the cross-price elasticity of demand (XED) between Good A and Good B is <strong>−1.8</strong>, this means:',
        opts: [
          'A and B are strong complements – a 10% rise in the price of B causes an 18% fall in demand for A',
          'A and B are strong substitutes – a 10% rise in the price of B causes an 18% rise in demand for A',
          'A and B are unrelated goods – the negative value shows no relationship between their markets',
          'A is an inferior good – its demand falls when B\'s price rises'
        ],
        ans: 0,
        exp: 'XED = % change in QD of Good A ÷ % change in price of Good B. <strong>Negative XED</strong> → goods are <strong>complements</strong>: when the price of B rises, consumers buy less B and therefore less A too (joint demand falls). The stronger the complementary relationship, the more negative the XED. <strong>Positive XED</strong> → substitutes: when B\'s price rises, consumers switch to A (demand for A rises). XED = 0 → unrelated goods. Examples: XED(petrol, cars) ≈ −0.6 (complements); XED(Pepsi, Coca-Cola) ≈ +0.8 (substitutes).'
      },

      /* 5 – Numeric input: XED calculation */
      { type: 'numeric_input',
        stem: 'Calculate the <strong>cross-price elasticity of demand (XED)</strong> between coffee and tea.',
        context: 'When the price of coffee rises from <strong>£3.00 to £3.60 per cup</strong> (a 20% rise), daily demand for tea increases from <strong>5 million to 5.6 million cups</strong>.',
        answer: 0.6,
        tolerance: 0.03,
        unit: '',
        hint: 'XED = (% change in QD of tea) ÷ (% change in price of coffee)',
        workingSteps: [
          '% change in price of coffee = (3.60 − 3.00) ÷ 3.00 × 100 = +20%',
          '% change in QD of tea = (5.6 − 5.0) ÷ 5.0 × 100 = +12%',
          'XED = +12% ÷ +20% = +0.6'
        ],
        exp: '% change in price of coffee = +20%. % change in QD of tea = (5.6−5.0)/5.0 × 100 = +12%. XED = 12%/20% = <strong>+0.6</strong>. Positive XED confirms coffee and tea are <strong>substitutes</strong> – when coffee becomes more expensive, consumers partially switch to tea. XED = +0.6 suggests moderate substitutability (consumers don\'t switch completely – they have distinct preferences for each drink). For a cafe business, this means a competitor\'s price rise creates an opportunity – but the opportunity is limited because the products are imperfect substitutes.'
      },

      /* 6 – Match pairs: YED and XED applications */
      { type: 'match_pairs',
        stem: 'Match each business or policy scenario to the elasticity concept it demonstrates.',
        pairs: [
          { a: 'A luxury car brand plans bigger production cuts in recession than a budget brand', b: 'Luxury goods have YED > 1; demand is more income-sensitive' },
          { a: 'A coffee chain raises prices – nearby tea shops see sales rise', b: 'Positive XED – coffee and tea are substitutes' },
          { a: 'A phone manufacturer bundles phones with cheap data plans', b: 'Negative XED – phones and data plans are complements; lowering plan price raises phone demand' },
          { a: 'Supermarkets stock more own-brand products during recessions', b: 'Inferior goods have negative YED – demand rises as income falls' },
          { a: 'Airlines expand capacity on routes to emerging economies as middle classes grow', b: 'Luxury good YED > 1 – as incomes rise, air travel demand grows disproportionately' },
          { a: 'A government cuts income tax – luxury retailers increase stock levels more than supermarkets', b: 'High YED for luxury goods means stronger demand response to income changes' }
        ],
        exp: 'YED and XED are practical tools for business and policy: <strong>YED > 1 (luxury)</strong> → amplified sensitivity to income cycles; <strong>YED < 0 (inferior)</strong> → counter-cyclical demand; <strong>XED > 0 (substitutes)</strong> → competitive spillovers between firms; <strong>XED < 0 (complements)</strong> → joint demand – pricing one product affects demand for the other. Firms use XED to understand competitive dynamics; policymakers use YED to forecast tax revenue impacts across the economic cycle.'
      },

      /* 7 – Cause & effect: income and cross-price effects */
      { type: 'cause_effect',
        stem: 'Match each economic change to its expected demand effect.',
        pairs: [
          { cause: 'UK economy enters deep recession; incomes fall 5%', effect: 'Demand for luxury goods falls sharply; demand for own-brand food may rise' },
          { cause: 'Petrol prices double due to an OPEC supply cut', effect: 'Demand for electric vehicles rises (substitutes); demand for petrol car servicing falls (complements)' },
          { cause: 'Average UK income rises from £35,000 to £42,000 over 5 years', effect: 'Demand for foreign holidays and luxury cars grows faster than income' },
          { cause: 'Price of smartphones falls 30% due to competition', effect: 'Demand for phone cases and screen protectors rises (complements)' },
          { cause: 'Train fares rise 20% nationally', effect: 'Demand for domestic flights and car hire rises (substitutes)' },
          { cause: 'A country transitions from low to middle income', effect: 'Food share of spending falls; demand for services and manufactured goods rises (Engel\'s Law)' }
        ],
        exp: 'Elasticity in action: recession hits luxury goods (high YED) hardest – inferior goods may benefit. Petrol prices drive substitute and complement effects across transport markets. Income growth in emerging economies drives structural shifts in spending composition (Engel\'s Law: food share falls as income rises). Complement and substitute relationships mean price changes in one market ripple through related markets – a critical insight for both business strategy and competition policy.'
      },

      /* 8 – Para fill: Engel's Law and macro implications */
      { type: 'para_fill',
        stem: 'Complete the paragraph about YED and structural economic change.',
        anchor: 'Engel\'s Law and income elasticity explain the structural transformation of developing economies.',
        para: 'As incomes rise in developing economies, the share of income spent on [1] falls as a proportion of total spending – this is [2]\'s Law. Resources shift toward goods and services with higher [3] elasticity of demand. Industries producing [4] goods (YED > 1) grow faster than the economy; industries producing [5] goods (YED < 0) decline. This helps explain why China\'s rapid income growth since 1990 has produced booming demand for [6] goods and a falling share of [7] in household spending.',
        blanks: [
          { id: 1, opts: ['food', 'housing', 'transport', 'energy'], ans: 0 },
          { id: 2, opts: ['Engel', 'Keynes', 'Hayek', 'Marx'], ans: 0 },
          { id: 3, opts: ['income', 'price', 'cross-price', 'supply'], ans: 0 },
          { id: 4, opts: ['luxury', 'inferior', 'normal', 'staple'], ans: 0 },
          { id: 5, opts: ['inferior', 'luxury', 'normal', 'superior'], ans: 0 },
          { id: 6, opts: ['luxury', 'inferior', 'basic', 'staple'], ans: 0 },
          { id: 7, opts: ['food', 'services', 'housing', 'transport'], ans: 0 }
        ],
        exp: '(1) <strong>Food</strong> – the classic Engel\'s Law pattern. (2) <strong>Engel</strong>\'s Law (19th-century German statistician). (3) <strong>Income</strong> elasticity – YED drives structural shifts. (4) <strong>Luxury</strong> goods industries grow faster (YED > 1). (5) <strong>Inferior</strong> goods industries shrink (YED < 0). (6) <strong>Luxury</strong> goods – cars, tourism, consumer electronics, branded fashion boomed in China. (7) <strong>Food</strong> – food\'s share of household spending has fallen dramatically in China as incomes rose, exactly as Engel\'s Law predicts.'
      },

      /* 9 – Data table: XED in transport markets */
      { type: 'data_table',
        stem: 'The table shows transport market data following a 25% rise in national rail fares in Year 2.',
        headers: ['Indicator', 'Year 1 (before)', 'Year 2 (after)'],
        rows: [
          ['Rail journeys (millions/yr)', '1,740', '1,566'],
          ['Domestic flight passengers (millions/yr)', '42', '46'],
          ['Long-distance coach journeys (millions/yr)', '38', '44'],
          ['Car hire bookings (millions/yr)', '12', '13.2']
        ],
        question: 'Using the data, which transport modes show <strong>positive XED with rail</strong> (i.e. are substitutes for rail)?',
        opts: [
          'All three – domestic flights, coaches, and car hire all increased when rail fares rose, implying positive XED with rail in each case',
          'Only domestic flights – the other modes show no relationship to rail fares',
          'None – positive XED requires the goods to be in direct competition, which transport modes are not',
          'Only coaches – car hire and flights are too different from rail to be substitutes'
        ],
        ans: 0,
        exp: 'When rail fares rose 25%, all three alternative modes increased: domestic flights +9.5%, coaches +15.8%, car hire +10%. Each shows <strong>positive XED</strong> with rail – confirming they are substitutes. The coach market shows the strongest substitution effect (XED ≈ 0.63), suggesting coaches and trains compete closely on price for long-distance domestic travel. Domestic flights and car hire show moderate substitution. This data would be relevant to regulators setting permitted fare increases – demonstrating that rail travellers do have alternatives, which limits the monopolistic pricing power of rail operators.'
      },

      /* 10 – Multi-select: evaluation of YED in business strategy */
      { type: 'multi_select',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of the role of YED in business planning?',
        opts: [
          'Income elasticity of demand measures the responsiveness of demand to a change in consumer income',
          'A firm selling luxury goods (YED = +2.5) faces amplified exposure to economic cycles – strong growth in booms but sharp revenue falls in recessions – suggesting a portfolio strategy mixing luxury and value lines could reduce earnings volatility, though this may dilute brand positioning',
          'YED > 1 means demand rises faster than income',
          'For emerging market investors, Engel\'s Law predicts that rising incomes will produce structural growth in luxury good sectors – but this assumes income gains are broadly distributed rather than concentrated at the top, which may not hold in high-inequality economies',
          'Inferior goods have negative YED',
          'Budget supermarkets may benefit in recessions due to the inferior good effect, but this advantage is self-limiting – as the economy recovers, consumers trade up, eroding the recession-era gains; durable competitive advantage requires quality improvement rather than reliance on inferior good status'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: identifies the two-sided amplification of luxury good exposure (boom benefit, recession penalty) and reaches a qualified strategic conclusion (portfolio approach), then notes its limitation (brand dilution). D: qualifies the Engel\'s Law implication by introducing a distributional condition – the prediction assumes broad-based income growth, not true in high-inequality economies; this contextualises and limits the argument. F: identifies the self-limiting nature of the inferior good advantage (recovery erodes it) and directs a strategic conclusion (quality improvement needed for durable advantage). A, C, and E are descriptions/definitions with no evaluative move.'
      }

    ]
  };

})();
