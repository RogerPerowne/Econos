window.ECONOS_TOPIC = {
  id: 'supply',
  topicNum: '2.4',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Supply',
  estTime: '8-10 minutes',
  goal: 'Lock in the supply curve: why it slopes up, movements along it vs shifts of it, and the conditions of supply – the mirror of demand analysis.',
  intro: {
    heroKey: 'heroSupply',
    summary: 'Supply is the quantity of a good producers are willing and able to offer for sale at each price. It mirrors demand: the non-negotiable skill is telling what moves ALONG the curve (a price change) from what SHIFTS it (a non-price determinant).',
    doInThis: 'Work through 8 cards: the big picture, why the curve slopes up, movements along the curve, shifts of the curve, what shifts supply, how costs/productivity/tax work, joint and competing supply, and an exam toolkit.',
    outcomes: [
      'Distinguish a movement along the supply curve from a shift of the supply curve',
      'Explain why the supply curve slopes up (profit incentive, rising marginal cost, higher-cost producers)',
      'List and apply the conditions of supply that shift the curve',
      'Link a determinant to unit cost, then to the direction of the shift',
      'Distinguish joint supply from competing supply and trace the knock-on effects'
    ],
    tip: 'A change in the good’s own price causes a movement ALONG the supply curve (price up → extension; price down → contraction). A non-price determinant shifts the WHOLE curve – right = increase, left = decrease.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    /* ================ CARD 1 – Supply: the big picture ================ */
    {
      id: 'supply_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Supply: the big picture',
      tip: { icon: '✅', tone: 'green', text: 'Supply means willingness AND ability to offer output for sale – not just making something. The supply curve shows how much producers sell at each price.' },
      interactiveDiagram: {
        svgKey: 'supplyBigPicture',
        label: 'What the supply curve shows',
        emoji: '📈',
        layers: ['layer-a', 'layer-b'],
        views: [
          { label: 'The supply curve', tone: 'blue', show: [],
            head: 'The supply curve',
            body: 'Supply shows how much producers are willing and able to sell at each price – the whole upward-sloping curve <strong>S</strong>.' },
          { label: 'A lower price → less', tone: 'amber', show: ['layer-a'],
            head: 'At a lower price (A)',
            body: 'At the lower price of <strong>£6</strong> (point A), quantity supplied is just <strong>20</strong>.' },
          { label: 'A higher price → more', tone: 'green', show: ['layer-b'],
            head: 'At a higher price (B)',
            body: 'At the higher price of <strong>£10</strong> (point B), quantity supplied rises to <strong>40</strong> – the law of supply.' }
        ]
      },
      causes: [
        { tone: 'blue',  icon: '🙋', head: 'Willingness', body: 'Producers want to sell the good.' },
        { tone: 'amber', icon: '🏭', head: 'Ability',     body: 'They can produce it with their resources and costs.' },
        { tone: 'green', icon: '🏷️', head: 'At each price', body: 'Supply is a relationship across prices, not a single number.' }
      ],
      causesLabel: 'What supply really means',
      causesEmoji: '🏭',
      causesStyle: 'tinted-flat',
      keyTerms: [
        { term: '📈 Supply',            def: 'The whole relationship between price and quantity supplied.' },
        { term: '🛒 Quantity supplied', def: 'The amount producers sell at one particular price.' },
        { term: '⚖️ Ceteris paribus',   def: 'All other influences on supply are held constant.' }
      ],
      keyTermsLabel: 'Key language',
      keyTermsEmoji: '📖',
      examEdge: 'Use <strong>quantity supplied</strong> for movements along the curve; reserve <strong>supply</strong> for the whole curve or a shift. A price change moves us along the curve; a non-price factor shifts the whole curve.'
    },

    /* ================ CARD 2 – Why the supply curve slopes up ================ */
    {
      id: 'supply_2',
      template: 'framing',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Why the supply curve slopes up',
      tip: { icon: '✅', tone: 'green', text: 'As price rises producers usually sell more; as price falls they usually sell less. Higher prices make extra output more worthwhile.' },
      interactiveDiagram: {
        svgKey: 'supplySlopeCurve',
        label: 'Why quantity supplied rises as price rises',
        emoji: '📈',
        layers: ['layer-a', 'layer-b', 'layer-c'],
        views: [
          { label: 'Profit incentive', tone: 'green', show: ['layer-a'],
            head: 'Profit incentive',
            body: 'At a higher price (from A, £6 → 20), each unit sold earns more – a higher price raises potential revenue and profit, so firms want to <strong>sell more</strong>.' },
          { label: 'Rising marginal cost', tone: 'amber', show: ['layer-b'],
            head: 'Rising marginal cost',
            body: 'Extra units (B, £8 → 30) often need overtime, less-efficient inputs or stretched capacity. Firms need a <strong>higher price</strong> to cover this rising marginal cost.' },
          { label: 'Higher-cost producers join', tone: 'purple', show: ['layer-c'],
            head: 'Higher-cost producers join in',
            body: 'At low prices some firms or units aren’t worth running. Higher prices (C, £10 → 40) bring <strong>higher-cost producers</strong> into the market.' }
        ]
      },
      causes: [
        { tone: 'green',  icon: '💰', head: 'Profit incentive',         body: 'A higher price raises potential revenue and profit, so firms want to sell more.' },
        { tone: 'amber',  icon: '📈', head: 'Rising marginal cost',     body: 'Extra units cost more to make, so a higher price is needed to cover them.' },
        { tone: 'purple', icon: '🏭', head: 'Higher-cost producers join', body: 'Higher prices make production worthwhile for firms that stayed out at low prices.' }
      ],
      causesLabel: 'Three reasons',
      causesEmoji: '📈',
      causesStyle: 'tinted-flat',
      causes2: [
        { tone: 'green',  icon: '⬆️', head: 'Higher price', body: 'A movement <strong>up</strong> the curve – quantity supplied extends.' },
        { tone: 'amber',  icon: '⬇️', head: 'Lower price', body: 'A movement <strong>down</strong> the curve – quantity supplied contracts.' },
        { tone: 'purple', icon: '⚠️', head: 'Usually, not always', body: 'The law of supply holds in most ordinary markets; responses can be weak near full capacity.' }
      ],
      causes2Label: 'Why it matters',
      causes2Emoji: '💡',
      causes2Style: 'tinted-flat',
      examEdge: 'When explaining the slope, name a mechanism – the <strong>profit incentive</strong>, <strong>rising marginal cost</strong>, or <strong>higher-cost producers becoming worthwhile</strong>.'
    },

    /* ================ CARD 3 – Movements along the supply curve ================ */
    {
      id: 'supply_3',
      template: 'framing',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Movements along the supply curve',
      tip: { icon: '✅', tone: 'green', text: 'A change in the good’s own price causes a movement along the SAME supply curve – never a shift.' },
      interactiveDiagram: {
        svgKey: 'supplyMovements',
        label: 'Extension vs contraction',
        emoji: '📈',
        layers: ['layer-contract', 'layer-extend'],
        views: [
          { label: 'On the curve', tone: 'blue', show: [],
            head: 'Start at point B',
            body: 'We begin at point <strong>B</strong>: price <strong>£8</strong>, quantity supplied <strong>30</strong>.' },
          { label: 'Price rises → extension', tone: 'green', show: ['layer-extend'],
            head: 'Price rises → extension',
            body: 'Price rises to <strong>£10</strong>, so we move <strong>up</strong> the curve to C. Quantity supplied <strong>extends</strong> to 40.' },
          { label: 'Price falls → contraction', tone: 'rose', show: ['layer-contract'],
            head: 'Price falls → contraction',
            body: 'Price falls to <strong>£6</strong>, so we move <strong>down</strong> the curve to A. Quantity supplied <strong>contracts</strong> to 20.' }
        ]
      },
      causes: [
        { tone: 'green', icon: '↗️', head: 'Extension',   body: 'More is supplied because price rises (move up the curve).' },
        { tone: 'amber', icon: '↘️', head: 'Contraction', body: 'Less is supplied because price falls (move down the curve).' },
        { tone: 'blue',  icon: '🟰', head: 'Same curve',   body: 'Non-price conditions are unchanged, so the curve doesn’t move.' }
      ],
      causesLabel: 'Common language',
      causesEmoji: '📖',
      causesStyle: 'tinted-flat',
      examEdge: 'Say <strong>“extension in quantity supplied”</strong> or <strong>“contraction in quantity supplied”</strong> – not “supply increased” – when the curve itself has not shifted.'
    },

    /* ================ CARD 4 – Shifts in supply ================ */
    {
      id: 'supply_4',
      template: 'framing',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Shifts in supply',
      tip: { icon: '✅', tone: 'green', text: 'When a non-price factor changes, the WHOLE supply curve shifts – more or less is supplied at every price. Step through an increase and a decrease.' },
      interactiveDiagram: {
        svgKey: 'supplyShifts',
        label: 'Increase and decrease',
        emoji: '📊',
        layers: ['layer-base', 'layer-incr', 'layer-decr'],
        views: [
          { label: 'Starting point', tone: 'blue', show: ['layer-base'],
            head: 'Starting point',
            body: 'We begin on supply curve <strong>S₁</strong>. At each price, producers offer the quantity shown by the curve.' },
          { label: 'Shift right (increase)', tone: 'green', show: ['layer-incr'],
            head: 'Shift right – supply increases',
            body: 'A favourable non-price change – lower costs, better technology, a subsidy – shifts supply right to <strong>S₂</strong>. At <em>every</em> price, more is supplied.' },
          { label: 'Shift left (decrease)', tone: 'rose', show: ['layer-decr'],
            head: 'Shift left – supply decreases',
            body: 'An adverse change – higher costs, an indirect tax, a supply shock – shifts supply left to <strong>S₃</strong>. At <em>every</em> price, less is supplied.' }
        ]
      },
      examEdge: 'A shift is <strong>not</strong> the same as a movement along the curve: only the good’s own price moves us along S₁. Always state whether the question describes a movement or a shift before you explain the outcome.'
    },

    /* ================ CARD 5 – What shifts supply ================ */
    {
      id: 'supply_5',
      template: 'framing',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'What shifts supply',
      tip: { icon: '✅', tone: 'green', text: 'Think of shifts as supply drivers OUTSIDE the good’s own price – the conditions of supply.' },
      diagramKey: 'supplyDeterminantsHub',
      diagramLabel: 'The supply drivers',
      diagramEmoji: '🎯',
      causes: [
        { tone: 'rose',   icon: '🔥', head: 'UK gas (2021–22)', body: 'Russia\'s invasion of Ukraine cut European gas supply; UK wholesale gas prices rose ~5× in 12 months. A textbook supply shock: a non-price input constraint shifted supply left, dragging electricity supply left with it.' },
        { tone: 'blue',   icon: '☕', head: 'Coffee beans',     body: 'Bad weather can cut supply (a supply shock).' },
        { tone: 'purple', icon: '🔆', head: 'Solar panels',     body: 'A subsidy can raise supply.' },
        { tone: 'green',  icon: '🛵', head: 'Food delivery',    body: 'Lower fuel costs can raise supply.' }
      ],
      causesLabel: 'One market, many stories',
      causesEmoji: '✨',
      causesStyle: 'tinted-flat',
      note: {
        tone: 'blue', icon: 'ℹ️', head: 'Why isn’t price on the list?',
        text: 'The good’s own price is not a supply driver – it causes a movement <em>along</em> the curve, not a shift.'
      },
      examEdge: 'In essays, <strong>name the determinant</strong>, then say whether it shifts supply <strong>left or right</strong> – don’t just assert that supply changed.'
    },

    /* ================ CARD 6 – Costs, productivity, tax & subsidy ================ */
    {
      id: 'supply_6',
      template: 'framing',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Costs, productivity, tax & subsidy',
      tip: { icon: '✅', tone: 'green', text: 'Many supply changes work through one mechanism – the producer’s unit cost. Lower unit cost tends to raise supply; higher unit cost tends to reduce it.' },
      diagramKey: 'supplyCostFactors',
      diagramLabel: 'Two key relationships',
      diagramEmoji: '⚖️',
      flow: [
        { tone: 'blue',   icon: '🔍', title: 'Identify the change', sub: 'Be clear what has changed.' },
        { tone: 'amber',  icon: '⚖️', title: 'Ask about unit cost', sub: 'Will it be lower or higher?' },
        { tone: 'purple', icon: '📈', title: 'Predict the direction', sub: 'Lower cost = right; higher cost = left.' },
        { tone: 'green',  icon: '💬', title: 'State the shift',      sub: 'Right or left, clearly.' }
      ],
      flowTitle: 'How to think about it',
      flowEmoji: '🧭',
      examEdge: 'Link the determinant to <strong>unit cost</strong>, then to supply – that causal chain (determinant → cost → supply shift) is what earns the marks. <strong>Timing matters:</strong> the shift logic above describes the long-run direction, but in practice supply responses take time – especially for capital-intensive goods (housing, oil) where the long run may be years. The full short-run vs long-run distinction is the elasticity-of-supply topic next (spec 1.2.5).'
    },

    /* ================ CARD 7 – Joint & competing supply (applied extension) ================ */
    {
      id: 'supply_7',
      template: 'framing',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Joint & competing supply',
      tip: { icon: '💡', tone: 'blue', text: 'Some products are supplied together, while others compete for the same scarce resources – so one supply decision can ripple into another market.' },
      conceptBoxes: [
        {
          tone: 'green',
          head: 'Joint supply',
          sub: 'Products are produced together.',
          flows: [
            { inputs: [{ icon: '🐄', label: 'Cattle' }],    outputs: [{ icon: '🥩', label: 'Beef' },   { icon: '🟫', label: 'Leather' }], connector: '+' },
            { inputs: [{ icon: '🛢️', label: 'Crude oil' }], outputs: [{ icon: '⛽', label: 'Petrol' }, { icon: '💧', label: 'Diesel' }],  connector: '+' }
          ],
          bullets: [
            'Two or more products come from the same production process.',
            'You can’t get more of one without also getting more of the other.',
            'When output of one rises, supply of the joint product rises too.'
          ]
        },
        {
          tone: 'purple',
          head: 'Competing supply',
          sub: 'Products compete for the same scarce resources.',
          flows: [
            { inputs: [{ icon: '🌾', label: 'Farmland' }], outputs: [{ icon: '🌽', label: 'Wheat' },  { icon: '🌻', label: 'Rapeseed' }], connector: 'or' },
            { inputs: [{ icon: '🏭', label: 'Factory' }],  outputs: [{ icon: '🚗', label: 'Cars' },   { icon: '🚐', label: 'Vans' }],    connector: 'or' }
          ],
          bullets: [
            'Resources have alternative uses across different products.',
            'Using more resources for one means fewer for the other.',
            'More resources for one product can reduce supply of the other.'
          ]
        }
      ],
      howToThink: {
        left:  { icon: '🧩', tone: 'green',  head: 'Joint supply',    body: 'Produced together – more of one means more of the other.' },
        right: { icon: '🧩', tone: 'purple', head: 'Competing supply', body: 'Share scarce resources – more of one can mean less of the other.' }
      },
      examEdge: 'Joint supply is a favourite context question: "Beef demand rises – what happens to leather prices?" Walk the chain: beef price up → beef output rises (extension) → more leather produced as a by-product → leather supply shifts right → leather price falls.'
    },

    /* ================ CARD 8 – The supply exam toolkit ================ */
    {
      id: 'supply_8',
      template: 'framing',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'The supply exam toolkit',
      tip: { icon: '✅', tone: 'green', text: 'Most supply questions come down to one distinction: movement or shift? Separate price changes from non-price changes and the logic becomes much clearer.' },
      flow: [
        { tone: 'blue',   icon: '🔍', title: 'Identify the change', sub: 'What has actually happened?' },
        { tone: 'amber',  icon: '🔀', title: 'Movement or shift?',  sub: 'Own-price change or non-price factor?' },
        { tone: 'purple', icon: '📊', title: 'State the effect',    sub: 'Extension, contraction, increase or decrease.' },
        { tone: 'green',  icon: '✅', title: 'Finish the chain',    sub: 'Explain the effect on quantity supplied and the curve.' }
      ],
      flowTitle: 'How to read a supply question',
      flowEmoji: '🧰',
      causes: [
        { tone: 'rose', icon: '📦', head: 'Stock is not supply',       body: 'Supply means willingness and ability to sell at a price, not how much exists.' },
        { tone: 'rose', icon: '⬆️', head: 'Price rise ≠ supply increase', body: 'Often it is an extension in quantity supplied, not a shift.' },
        { tone: 'rose', icon: '🚫', head: 'Shifts need a determinant',  body: 'Don’t say the curve moved without naming why.' }
      ],
      causesLabel: 'Common mistakes',
      causesEmoji: '⚠️',
      causesStyle: 'tinted-flat',
      keyTakeaway: {
        title: 'The big takeaway',
        text: 'If you can separate movements (own-price) from shifts (a named determinant), you can explain almost any supply question clearly – using exact language: quantity supplied, extension, contraction, increase in supply, decrease in supply.'
      },
      examEdge: 'Top answers use exact language and always state whether the curve moves or we move on the curve before explaining the outcome.',
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
    title:    'Supply',
    subtitle: 'Theme 1 &middot; Topic 2.4 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('supply_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers the law of supply, shifts vs movements, non-price determinants, producer surplus, joint and competing supply',
    shortNames: [
      'Law of supply', 'Move vs shift sort', 'Joint supply', 'Producer surplus calc',
      'Leftward shifts', 'Competing supply fill', 'Cause & effect', 'Odd one out',
      'Energy data table', 'Supply chain'
    ],

    questions: [

      /* 1 – MCQ: law of supply */
      { type: 'mcq',
        stem: 'The <strong>law of supply</strong> states that, ceteris paribus, as price rises quantity supplied rises. The primary reason for the upward slope of the supply curve in the short run is:',
        opts: [
          'As output expands, firms face rising marginal costs (law of diminishing returns) – so higher prices are needed to justify producing additional units',
          'As price rises, consumers demand more, which forces firms to produce additional output regardless of cost',
          'Government regulations require firms to maintain minimum output levels as prices rise',
          'All firms have constant marginal costs at every output level'
        ],
        ans: 0,
        exp: 'In the short run, as firms expand output they add more variable factors (e.g. labour) to a fixed capital stock. The <strong>law of diminishing returns</strong> sets in: each additional worker adds less to output, raising marginal cost per unit. Firms only produce more if price rises to cover this higher marginal cost. The supply curve is effectively the marginal cost curve – connecting supply theory to cost theory (Theme 3). Constant marginal costs would produce a horizontal supply curve, not an upward slope.'
      },

      /* 2 – Elastic sort: shift vs movement along supply */
      { type: 'elastic_sort',
        stem: 'Classify each event as causing a <strong>movement along</strong> the supply curve or a <strong>shift</strong> of the supply curve.',
        categories: ['move', 'shift'],
        categoryLabels: ['Movement along the supply curve', 'Shift of the supply curve'],
        goods: [
          { icon: '🌾', label: 'The price of wheat rises from £150 to £200 per tonne', note: '', ans: 'move' },
          { icon: '⚡', label: 'A new generation of wind turbines doubles electricity output per turbine', note: '', ans: 'shift' },
          { icon: '🚗', label: 'A rise in steel prices reduces the quantity of cars supplied at every price', note: '', ans: 'shift' },
          { icon: '🍓', label: 'Unusually cold weather destroys 30% of the UK strawberry crop', note: '', ans: 'shift' },
          { icon: '📊', label: 'Higher profit margins in the coffee shop sector attract 500 new outlets', note: '', ans: 'shift' },
          { icon: '🐟', label: 'A fall in the price of fish reduces the quantity supplied by fishing boats', note: '', ans: 'move' }
        ],
        exp: '<strong>Movements along</strong> supply are caused only by a change in the good\'s own price (extension or contraction of quantity supplied). <strong>Shifts</strong> occur from non-price changes: technology improvement shifts right (more at every price); higher input costs (steel) shift left; natural disasters reduce harvest and shift left; new entrants shift right. Key test: did the good\'s own price change? Yes → movement. No → possible shift.'
      },

      /* 3 – MCQ: joint supply */
      { type: 'mcq',
        stem: 'A drought significantly reduces global beef production. Considering <strong>joint supply</strong>, what would you expect to happen to the leather market?',
        opts: [
          'Leather supply falls (shifts left), causing leather prices to rise, because leather is a by-product of beef production',
          'Leather supply rises (shifts right), causing leather prices to fall, because resources move from beef to leather',
          'The leather market is unaffected because leather is made from synthetic materials',
          'Leather demand falls as consumers switch away from animal products'
        ],
        ans: 0,
        exp: '<strong>Joint supply</strong>: beef and leather are by-products – slaughtering cattle for beef also produces hides for leather. If beef production falls (fewer cattle slaughtered), fewer hides are produced → leather supply shifts <strong>left</strong> → leather price <strong>rises</strong>. This transmission from one market to another through the by-product link is a classic joint supply chain. Other examples: oil and natural gas; beef tallow and soap; wheat and straw.'
      },

      /* 4 – Numeric input: producer surplus */
      { type: 'numeric_input',
        stem: 'Calculate the <strong>total producer surplus</strong> (£) in this market.',
        context: 'Three suppliers of handmade furniture: Supplier A minimum acceptable price £200; Supplier B minimum £300; Supplier C minimum £400. Market equilibrium price is <strong>£450</strong> per unit.',
        answer: 450,
        tolerance: 1,
        unit: '£',
        hint: 'Producer surplus = sum of (market price − minimum acceptable price) for each seller who trades.',
        workingSteps: [
          'All three sell at £450 (all minimum prices ≤ £450)',
          'Supplier A: £450 − £200 = £250',
          'Supplier B: £450 − £300 = £150',
          'Supplier C: £450 − £400 = £50',
          'Total = £250 + £150 + £50 = £450'
        ],
        exp: 'Producer surplus = sum of (market price − minimum acceptable price) for each unit sold. (450−200) + (450−300) + (450−400) = 250 + 150 + 50 = <strong>£450</strong>. If price falls to £350, Supplier C exits (minimum price £400 > £350) and total surplus collapses. This illustrates the profit-motive mechanism: entry and exit respond to changes in producer surplus, equating long-run surplus with normal profit.'
      },

      /* 5 – Multi-select: causes of leftward supply shift */
      { type: 'multi_select',
        stem: 'Which of the following would cause the supply curve for <strong>new cars</strong> to shift <strong>leftward</strong> (decrease in supply)?',
        opts: [
          'A sharp rise in the price of steel (a key input to car manufacturing)',
          'A new regulation requiring all new cars to meet stricter emissions standards, raising production costs',
          'A technological improvement enabling robots to assemble cars more efficiently',
          'The price of new cars rises following increased consumer demand',
          'A global semiconductor shortage limits supply of components needed for car production',
          'Several major manufacturers close UK factories and relocate abroad'
        ],
        correct: [0, 1, 4, 5],
        exp: 'Options A, B, E, and F shift car supply <strong>leftward</strong>: higher steel prices raise input costs; stricter emissions regulations add compliance costs; semiconductor shortage limits production; factory closures reduce number of producers. Option C (technology improvement) shifts supply <strong>rightward</strong> – lower cost per unit. Option D (price of new cars rises) is a movement <strong>along</strong> the supply curve, not a shift – a price change causes an extension of quantity supplied, not a shift.'
      },

      /* 6 – Para fill: competing supply */
      { type: 'para_fill',
        stem: 'Complete the paragraph about competing supply.',
        anchor: 'Competing supply arises when the same resources can produce either of two goods.',
        para: 'Competing supply occurs when a factor of production – typically [1] – can be used to produce either of two alternative goods. A rise in the price of [2] Good A increases its [3] and causes producers to switch [4] resources from Good B to Good A. This reduces the [5] of Good B, shifting its supply curve [6]. The price of Good B consequently [7] as supply falls while demand is unchanged.',
        blanks: [
          { id: 1, opts: ['land', 'money', 'technology', 'infrastructure'], ans: 0 },
          { id: 2, opts: ['substitute', 'complement', 'inferior', 'joint'], ans: 0 },
          { id: 3, opts: ['profitability', 'demand', 'cost', 'regulation'], ans: 0 },
          { id: 4, opts: ['productive', 'financial', 'human', 'fixed'], ans: 0 },
          { id: 5, opts: ['supply', 'demand', 'price', 'quantity demanded'], ans: 0 },
          { id: 6, opts: ['leftward', 'rightward', 'upward along', 'downward along'], ans: 0 },
          { id: 7, opts: ['rises', 'falls', 'stays constant', 'becomes indeterminate'], ans: 0 }
        ],
        exp: '(1) <strong>Land</strong> is the classic competing supply factor – a farmer can grow wheat OR oilseed rape, not both on the same field. (2) <strong>Substitute</strong>: the goods compete for the same resources. (3) Higher price increases <strong>profitability</strong>, drawing resources in. (4) <strong>Productive</strong> resources are switched. (5) Supply of Good B <strong>falls</strong>. (6) Supply curve shifts <strong>leftward</strong>. (7) With unchanged demand and lower supply, price of Good B <strong>rises</strong>. Example: if wheat prices rise, farmers switch land to wheat → rapeseed supply falls → rapeseed price rises.'
      },

      /* 7 – Cause & effect: supply determinants */
      { type: 'cause_effect',
        stem: 'Match each cause to its correct effect on the supply curve.',
        pairs: [
          { cause: 'Fall in the cost of a key raw material input', effect: 'Supply curve shifts rightward' },
          { cause: 'Rise in the good\'s own market price', effect: 'Movement along – extension of quantity supplied' },
          { cause: 'Introduction of a production subsidy from government', effect: 'Supply curve shifts rightward' },
          { cause: 'New labour-saving technology adopted by all firms', effect: 'Supply curve shifts rightward' },
          { cause: 'A rise in the price of a jointly supplied by-product', effect: 'Supply of main good shifts rightward' },
          { cause: 'A major supply chain disruption (e.g. global semiconductor shortage)', effect: 'Supply curve shifts leftward' }
        ],
        exp: 'Non-price determinants shift the supply curve: lower input costs → rightward (more profitable at every price); subsidies → rightward (lower effective cost); technology → rightward; joint supply increase → more of both by-products supplied; supply chain disruption → leftward. The good\'s own price only causes a movement along the existing curve. A rightward shift means more is supplied at every price – not that price has fallen.'
      },

      /* 8 – Odd one out: rightward supply shift */
      { type: 'odd_one_out',
        stem: 'Three of these cause the supply curve for a manufactured good to shift <strong>rightward</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🤖', label: 'A new automated assembly technology cuts unit production costs by 30%', note: '' },
          { icon: '💰', label: 'The government introduces a production subsidy of £500 per unit', note: '' },
          { icon: '📈', label: 'A substantial increase in the market price of the good incentivises firms to produce more', note: '' },
          { icon: '🏭', label: 'Twenty new overseas firms enter the UK market, expanding total industry capacity', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is a <strong>rise in the market price</strong>. A price rise causes an extension of quantity supplied – a movement <em>up</em> the existing supply curve – not a rightward shift of the curve. The other three are non-price changes that shift the entire supply curve rightward: new technology lowers cost per unit; a production subsidy effectively reduces firms\' costs; new entrants expand total market supply.'
      },

      /* 9 – Data table: UK energy supply shock 2021-22 */
      { type: 'data_table',
        stem: 'The table shows UK energy market data around the 2021–2022 energy crisis.',
        headers: ['Indicator', 'Q4 2020', 'Q4 2021', 'Q4 2022'],
        rows: [
          ['UK wholesale gas price (p/therm)', '50', '250', '400'],
          ['UK electricity generation from gas (%)', '38%', '36%', '32%'],
          ['UK household energy bill (avg, £/yr)', '1,100', '1,800', '2,500'],
          ['New renewable energy capacity added (GW)', '3.2', '3.8', '4.5'],
          ['UK gas production from North Sea (bcm)', '40', '38', '35']
        ],
        question: 'Which interpretation is <strong>most consistent with supply theory</strong>?',
        opts: [
          'Surging wholesale gas prices shifted the household energy supply curve leftward, raising equilibrium bills; declining North Sea production reduced domestic supply further – consistent with a negative supply shock',
          'Higher gas prices caused a leftward shift in gas demand, which is why household bills rose',
          'The rise in renewable capacity fully offset the gas supply shock, leaving bills unchanged',
          'North Sea gas production data is irrelevant to household bills because the UK imports most of its gas'
        ],
        ans: 0,
        exp: 'The data show a clear negative supply shock: wholesale gas prices surged 700% (50p to 400p/therm), representing a massive increase in the key input cost for energy suppliers – shifting the household energy supply curve leftward and raising equilibrium prices. Declining North Sea production (40→35 bcm) reduced domestic supply further. New renewables added capacity but too slowly to offset the shock (generation share fell). Option B incorrectly attributes the bill rise to demand. Option C is refuted by the bill data (£1,100 to £2,500).'
      },

      /* 10 – Chain: technology improvement to new equilibrium */
      { type: 'chain',
        stem: 'A technological breakthrough significantly reduces the cost of producing electric vehicles. Place the following events in the correct order.',
        items: [
          { label: 'EV prices fall as firms compete on price to attract expanded demand', note: '' },
          { label: 'Production costs per EV fall substantially', note: '' },
          { label: 'New firms enter the EV market attracted by profit opportunities', note: '' },
          { label: 'The supply curve for EVs shifts rightward – more supplied at every price', note: '' },
          { label: 'EV market reaches a new equilibrium with lower price and higher output', note: '' },
          { label: 'Existing EV manufacturers earn higher profits as cost reductions widen margins', note: '' }
        ],
        correctOrder: [1, 3, 5, 2, 0, 4],
        exp: '<strong>Correct sequence:</strong> (1) Technology reduces production costs (the supply-side shock). (2) Supply curve shifts rightward. (3) Existing firms earn higher profits (wider margin at existing price). (4) New firms enter, attracted by profit opportunities – incentive function of the price mechanism. (5) Competition drives prices down as supply expands. (6) New equilibrium: lower price, higher quantity. In perfect competition, entry continues until profits are driven to normal. Intellectual property may sustain profits for the innovating firm for some time.'
      }

    ]
  };

})();
