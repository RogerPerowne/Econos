/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   The Price Mechanism: rationing → signalling → incentivising chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'The Price Mechanism',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('predict'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'predict', label: 'Predict outcome', href: TopicLoader.routes.link('predict') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'ukraine-price-mechanism',
      scenario: {
        icon:  '🌾',
        label: 'Scenario',
        text:  'Ukraine and Russia supplied approximately 30% of world wheat exports. The 2022 war disrupted these exports severely, creating an immediate global wheat shortage and triggering a cascade through the price mechanism.'
      },
      anchor: 'Ukraine war removes ~30% of world wheat supply → global shortage.',
      tiles: [
        {
          id:  'step-ration',
          icon: '⚖️',
          text: 'Rationing: excess demand at P₁ → P rises to P₂ → rations to high-WTP buyers',
          pos:  0
        },
        {
          id:  'step-signal',
          icon: '📡',
          text: 'Signalling: P₂ tells farmers to plant more next season',
          pos:  1
        },
        {
          id:  'step-incentive',
          icon: '🌱',
          text: 'Incentive: P₂ > LRAC → entry and investment → supply rises over time',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🏛️',
          text: 'Government sets a maximum bread price to shield consumers',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '🛒',
          text: 'Consumer demand for wheat falls as households substitute to rice',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏦',
          text: 'Central bank raises interest rates, reducing investment in food processing',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'With Ukrainian wheat removed from global supply, existing world supply cannot satisfy demand at the original price P₁. Excess demand pushes the price up to P₂ – the rationing function is operating. Higher prices signal to consumers to reduce consumption, switching to substitutes (rice, pasta) or cutting food waste, until quantity demanded falls to match available supply. UK food inflation of 19.2% in March 2023 is direct evidence of this rationing at work.'
        },
        {
          pos:  1,
          text: 'The higher food price P₂ is a signal that wheat has become scarcer and that expanding production is profitable. UK farmland prices rose 14% in 2023 – investors and farmers read the price signal and valued agricultural land more highly because the expected return on wheat production had risen. UK wheat planting area rose 3% in 2023, confirming that the price signal was transmitting to supply decisions for the following season.'
        },
        {
          pos:  2,
          text: 'With P₂ above long-run average cost, there is an abnormal profit opportunity in wheat production. This incentivises entry and investment – globally, Argentina, Australia and Canada expanded production in 2022–23. However, the supply response is constrained by agricultural PES ≈ 0.2 in the short run – planting decisions are seasonal and supply cannot respond faster than one growing season. The incentive function worked, but the time lag meant prices remained elevated for 12–24 months.'
        }
      ],
      examBridge: '"The Ukraine war supply shock created excess demand at the original price P₁. The price mechanism rationed existing supply through rising prices (to 19.2% food inflation), signalled farmers to plant more (UK planting area +3%), and incentivised farmland investment (+14%). However, the supply response was slow due to agricultural PES ≈ 0.2 in the short run – and the rationing function excluded the lowest-income households from access, reducing equity."',

      prompts: [
        'How does the rationing function direct existing food supply when a shortage occurs?',
        'What price signal reaches farmers, and how do they respond?',
        'Why does the incentive function take 12–24 months to restore supply in agriculture?'
      ],
      modelAnswers: [
        'When supply contracts, the price rises above P₁ to eliminate excess demand. Higher prices ration existing supply to those with highest WTP – consumers with lower budgets reduce or switch away from wheat products. This happens immediately: the rationing function operates through the price change itself.',
        'Higher wheat prices raise the profit margin above long-run average cost. Farmland prices rise (a derived demand signal) as investors anticipate higher agricultural returns. Farmers respond by planning to increase planting area in the next season – the signalling function converts price information into supply decisions. UK planting area rose 3% in 2023.',
        'Agricultural production is seasonal – planting decisions for wheat must be made months before harvest. Even with a clear price signal and strong profit incentive, supply cannot increase until the next growing cycle. PES ≈ 0.2 means that a 10% price rise only increases supply by 2% in the short run. The incentive function works, but with a biological and seasonal time lag, keeping prices elevated for 12–24 months.'
      ],
      vocab: ['price mechanism', 'rationing function', 'signalling function', 'incentive function', 'excess demand', 'equilibrium price', 'price signal', 'allocative efficiency', 'PES', 'equity']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   The Price Mechanism
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'The Price Mechanism',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'predict', label: 'Predict the Outcome', max: 4, color: '#7c3aed' },
    { id: 'depends', label: 'It depends on',      max: 3, color: '#2563eb' },
    { id: 'judge',   label: 'Make the judgement', max: 8, color: '#0891b2' }
  ],

  overallMessages: [
    { min: 85, text: 'Excellent thinking structure – you\'re ready to write.' },
    { min: 70, text: 'Strong thinking structure – you\'re nearly ready to write.' },
    { min: 55, text: 'Good foundations – review your weakest step before Land It.' },
    { min: 0,  text: 'More practice recommended before tackling Land It.' }
  ],

  readinessLabels: [
    { min: 85, text: 'Ready for Land It' },
    { min: 70, text: 'Nearly ready for Land It' },
    { min: 55, text: 'Building readiness' },
    { min: 0,  text: 'More practice recommended' }
  ],

  stationFeedback: {
    context: [
      { min: 80, text: 'Strong evidence classification' },
      { min: 60, text: 'Good – review the complicating factors' },
      { min: 0,  text: 'Evidence classification needs work' }
    ],
    chain: [
      { min: 100, text: 'Perfect causal chain' },
      { min: 50,  text: 'Clear causality – check the missing step' },
      { min: 0,   text: 'The causal chain needs work' }
    ],
    predict: [
      { min: 80, text: 'Strong outcome prediction' },
      { min: 55, text: 'Good – check the direction of one variable' },
      { min: 0,  text: 'Prediction skills need more practice' }
    ],
    depends: [
      { min: 80, text: 'Strong evaluation conditions identified' },
      { min: 50, text: 'Good – one key condition missed' },
      { min: 0,  text: 'Review the key evaluation conditions' }
    ],
    judge: [
      { min: 80, text: 'Excellent judgement structure' },
      { min: 60, text: 'Judgement is strong but could be more precise' },
      { min: 0,  text: 'Judgement structure needs more precision' }
    ]
  },

  useInLandIt: 'The price mechanism performs three functions simultaneously: rationing (P rises → WTP determines allocation), signalling (P rise → producers plan to expand) and incentivising (profit margin → investment). The strongest answers apply all three functions and then evaluate limitations (PES, equity, market power).',

  focusInLandIt: {
    context: 'Use specific evidence – 19.2% food inflation, 14% farmland price rise, +3% wheat planting – to anchor your application to the 2021–23 food price case, not just generic price mechanism theory.',
    chain:   'State the chain explicitly: supply shock → supply shifts left → excess demand at P₁ → P rises to P₂ → rationing (existing buyers priced out) → signalling (farmers plan expansion) → incentivising (farmland investment rises).',
    predict: 'Apply the three functions of the price mechanism to novel shocks (London housing, gas prices). Always state which function is operating – rationing (P rations existing supply), signalling (P signals producers), incentivising (profit attracts entry) – and note which time horizon each applies to.',
    depends: 'Lead with agricultural PES as your key condition – the rationing function works immediately but the incentive and signalling functions are delayed by the growing season. This is the most exam-relevant limitation of the price mechanism in food markets.',
    judge:   'State a clear position (informationally efficient but not equitably efficient), use the mechanism (supply left → P rises → three functions), add the condition (PES determines speed of supply response), and explain the limitation (price rationing excludes low-income households, requiring welfare support).'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   The Price Mechanism: classify evidence on UK food prices 2021–23
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'The Price Mechanism',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('chain'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'predict', label: 'Predict outcome', href: TopicLoader.routes.link('predict') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether higher food prices following the Ukraine war successfully rationed supply, signalled producers and incentivised investment – demonstrating the allocative power of the price mechanism?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'UK food price inflation hit [[inflation|19.2% in March 2023]] – the highest rate since 1977 (ONS) – indicating that the supply shock transmitted a large price signal to consumers, rationing demand for food at the original price level.',
      'UK farmland prices rose [[farmland|14% in 2023, the highest annual rise in 15 years]] (Savills), reflecting farmer investment responses to high commodity prices and confirming that the incentive function of the price mechanism was operating.',
      'UK wheat planting area rose [[planting|3% in 2023]] (AHDB) as farmers responded to high prices, providing direct evidence that the signalling function of the price mechanism was translating into expanded future supply.',
      'Global wheat output recovered by [[global-recovery|2023–24 as non-Ukraine producers expanded production]] (Argentina, Australia, Canada) in response to the price signal, suggesting the international price mechanism was successfully reallocating supply.',
      'UK food banks reported a [[foodbanks|37% increase in demand]] (Trussell Trust 2023), suggesting the rationing function of price excludes the lowest-income households from access to basic food.'
    ],

    evidence: {
      'causes-of-inflation-and-deflation':        { text: '19.2% in March 2023' },
      'farmland':         { text: '14% in 2023, the highest annual rise in 15 years' },
      'planting':         { text: '3% in 2023' },
      'global-recovery':  { text: '2023–24 as non-Ukraine producers expanded production' },
      'foodbanks':        { text: '37% increase in demand' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the claim',      tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against the claim', tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case',     tone: 'blue',  icon: '?' }
    ],

    correct: {
      'causes-of-inflation-and-deflation':       'supports',
      'farmland':        'supports',
      'planting':        'supports',
      'global-recovery': 'supports',
      'foodbanks':       'complicates'
    },

    explain: {
      'causes-of-inflation-and-deflation':       'A 19.2% price rise is a large and clear price signal – the rationing function was operating strongly, with higher prices excluding lower-demand consumers and directing existing supply to those with highest WTP.',
      'farmland':        'A 14% rise in farmland prices – the highest in 15 years – directly confirms the incentive function: higher commodity prices raised the expected return on agricultural investment, attracting capital into farming.',
      'planting':        'A 3% rise in UK wheat planting confirms the signalling function: the price signal reached UK producers and changed their supply decisions for the next season, beginning to correct the supply shortfall.',
      'global-recovery': 'The international supply recovery shows the price mechanism coordinating production across borders – the global price signal directed Argentina, Australia and Canada to expand, reallocating world supply toward shortage areas.',
      'foodbanks':       'A 37% rise in food bank demand shows that price rationing excludes the poorest households from basic food access. The price mechanism rationed efficiently (demand was reduced) but inequitably (those with low incomes were priced out of necessities), complicating the claim that it is the most efficient allocator of food resources.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The 19.2% food price inflation, 3% rise in wheat planting and 14% farmland price rise all support the claim that the price mechanism performed its three functions after the Ukraine war supply shock. However, a 37% increase in food bank usage complicates the efficiency verdict – price rationing successfully reduced demand but did so by excluding the lowest-income households from food access, revealing an equity failure that requires complementary welfare policy."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};

/* ---- link-depends.js ---- */
/* ============================================================
   ECONOS – Link It · It Depends On station data
   The Price Mechanism: evaluate the food allocation efficiency claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'The Price Mechanism',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether the price mechanism is the most efficient allocator of food during a supply disruption.',
  nextUrl:     TopicLoader.routes.link('judge'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'predict', label: 'Predict outcome', href: TopicLoader.routes.link('predict') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'price-mechanism-food',
      claim: {
        icon:   '🌾',
        prompt: 'Policy claim',
        text:   'The price mechanism best allocates scarce food after a supply shock.'
      },
      factors: [
        {
          id:    'information-quality',
          icon:  '📡',
          label: 'Quality and speed of price signal transmission',
          why:   'The price mechanism works best when prices adjust quickly and accurately to new information. For commodities traded on global exchanges (wheat futures), prices adjusted within hours of the Ukraine invasion. For locally produced goods with slow price transmission, the signal reaches producers later – reducing the speed of supply response.'
        },
        {
          id:    'pes-agri',
          icon:  '🌾',
          label: 'Agricultural PES in the short run',
          why:   'Even with a clear price signal, supply cannot respond faster than the growing season. Agricultural PES ≈ 0.2 in the short run because planting decisions are seasonal. The price mechanism transmits the incentive perfectly, but physical production constraints limit how quickly supply responds. The rationing function works immediately; the incentive function takes 6–24 months.'
        },
        {
          id:    'equity',
          icon:  '⚖️',
          label: 'Distributional consequences of price rationing',
          why:   'Price rationing is informationally efficient but potentially inequitable. When food prices rise 19.2%, households with lower income are rationed out of purchasing food they need. The price mechanism maximises allocative efficiency but does not ensure equity of distribution – requiring complementary welfare policy (food banks, universal credit uplifts) to address the distributional failure.'
        },
        {
          id:    'market-power',
          icon:  '🏪',
          label: 'Degree of competition in the supply chain',
          why:   'If supermarkets or food processors have market power, they may widen margins during the supply shock rather than passing the full price signal to producers. A less competitive supply chain distorts the price signal – farmers receive less of the higher consumer price, reducing the supply incentive. The price mechanism works best in competitive markets.'
        },
        {
          id:    'speculation',
          icon:  '📈',
          label: 'Role of speculation and futures markets',
          why:   'Commodity futures markets allow hedgers and speculators to price in expected future supply/demand. In 2022, speculation in wheat futures amplified the price spike beyond what physical shortages warranted – oversignalling to producers and consumers. If futures prices deviate from fundamentals, the price signal is distorted, triggering over-investment.'
        },
        {
          id:    'international',
          icon:  '🌍',
          label: 'International coordination of price signals',
          why:   'Global food markets transmit price signals across borders. Countries that imposed export restrictions (India for rice in 2023) disrupted the international price mechanism – preventing supply from flowing to highest-value uses globally. The efficiency of the price mechanism in allocating food depends on how open borders are to trade.'
        },
        {
          id:    'storage',
          icon:  '📦',
          label: 'Availability of commodity storage (buffer stocks)',
          why:   'If private or public grain storage exists, surplus from good harvests can buffer the price spike in bad years – smoothing the price signal and reducing the rationing impact. Without storage, supply shocks cause more extreme price volatility, amplifying both the rationing and signalling functions beyond what is optimal.'
        },
        {
          id:    'non-market',
          icon:  '🏛️',
          label: 'Existence of non-market food provision',
          why:   'Some food provision (school meals, NHS catering) occurs through public procurement rather than market prices. In these segments, the price mechanism does not directly operate – government must make rationing and allocation decisions directly. The efficiency comparison between price mechanism and public allocation determines whether supplementing the market improves overall welfare.'
        }
      ],
      modelRanking: ['information-quality', 'pes-agri', 'equity'],
      judgement: '"The price mechanism allocates food efficiently during supply disruptions when prices adjust quickly and producers can respond within the same growing season – i.e., when PES is higher. In UK agriculture, where PES ≈ 0.2, the rationing function operates immediately (P rises) but the incentive and signalling functions take 12–24 months to translate into more output. The mechanism is also least efficient on equity grounds – requiring complementary support policy to protect households priced out of basic food access."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   The Price Mechanism: Ukraine war supply shock shifts supply left
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   D:  (110,60)→(510,360)  slope = 0.75  ⟹  y = −22.5 + 0.75x
   S₁: (130,390)→(490,30)  slope = −1.0  ⟹  y = 520 − x
   S₂: (130,330)→(430,30)  60px up (left shift)  ⟹  y = 460 − x
   E₁ (D ∩ S₁): x = 310, y = 210  (pre-shock equilibrium)
   E₂ (D ∩ S₂): x = 276, y = 184  (post-shock: higher P, lower Q – lower SVG y = higher price) */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'The Price Mechanism',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('depends'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'predict', label: 'Predict outcome', href: TopicLoader.routes.link('predict') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: -1,

  /* ── Stage 0: Select the right diagram ── */
  select: {
    eyebrow:     'Diagram Connector – Select the Diagram',
    title:       'Ukraine war disrupts wheat exports, removing ~30% of world supply. Which diagram correctly shows the immediate effect on the UK food market?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the supply shock. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      's-left',
        correct:  true,
        title:   'Supply shifts left',
        sub:     'Supply shifts left – disruption reduces quantity supplied at every price, triggering the price mechanism',
        why:     'The Ukraine war removes ~30% of world wheat supply from global markets. At every price level, less wheat is available – supply shifts left from S₁ to S₂. This creates excess demand at the original price P₁, pushing prices up to P₂ and reducing quantity to Q₂. The price rise is the price signal that triggers all three price mechanism functions.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Demand rises – but the supply shock is the initial cause, not a rise in consumer demand',
        why:     'The initial shock is a supply disruption, not a rise in consumer demand. Demand for food is unchanged – the same consumers want the same food at the same prices. A rightward demand shift would represent rising consumer income or population growth, neither of which is the mechanism here. Supply shifts left is the accurate first-round effect.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Supply expands – wrong direction: a supply shock removes supply, it does not add it',
        why:     'Supply shifting right means more wheat is available at every price – representing entry of new producers, falling costs, or improved technology. The Ukraine war removed a major supplier from global markets, reducing the quantity supplied at every price. This is a leftward, not rightward, supply shift.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Demand falls – wrong: nothing in the supply shock reduces consumer demand for food',
        why:     'A leftward demand shift would mean consumers want less food at every price – reflecting falling income or a preference change. The Ukraine war does not reduce consumer demand for wheat products; people still need to eat. The first-round effect of a supply disruption is supply shifting left, not demand falling.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🌾',
    text:  'Ukraine war removes ~30% of global wheat supply. UK food inflation: 19.2% (March 2023). UK wheat planting +3%. Farmland prices +14%.',
    dataPoints: [
      { icon: '🔺', text: 'Rationing: price rise rations existing food supply to highest bidders' },
      { icon: '📡', text: 'Signalling: 14% farmland price rise attracts investment' },
      { icon: '🌱', text: 'Incentive: UK wheat planting area increases 3% (AHDB)' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – Ukraine war supply shock shifts supply left, raising food prices and reducing quantity',
    xLabel:    'Quantity of food',
    yLabel:    'Price (£)',

    lines: [
      /* D – green downward-sloping */
      { x1: 110, y1: 60,  x2: 510, y2: 360, stroke: '#059669', strokeWidth: 2.5,
        label: 'D (Demand)', labelX: 514, labelY: 360, labelFill: '#059669' },
      /* S₁ (pre-war supply) – blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S₁', labelX: 494, labelY: 28, labelFill: '#2563eb' },
      /* S₂ (post-war supply, shifted left 60px vertically) – red upward-sloping */
      { x1: 130, y1: 330, x2: 430, y2: 30,  stroke: '#dc2626', strokeWidth: 2.5,
        label: 'S₂', labelX: 434, labelY: 28, labelFill: '#dc2626' }
    ],

    /* Guide lines + tick labels */
    guides: [
      /* Horizontal from y-axis to E₂ (new higher price P₂) */
      { x1: 100, y1: 184, x2: 276, y2: 184, tickLeft: 'P₂', tickLeftY: 187 },
      /* Horizontal from y-axis to E₁ (original lower price P₁) */
      { x1: 100, y1: 210, x2: 310, y2: 210, tickLeft: 'P₁', tickLeftY: 213 },
      /* Vertical from E₂ down to x-axis */
      { x1: 276, y1: 184, x2: 276, y2: 400, tickBottom: 'Q₂', tickBottomX: 276 },
      /* Vertical from E₁ down to x-axis */
      { x1: 310, y1: 210, x2: 310, y2: 400, tickBottom: 'Q₁', tickBottomX: 310 }
    ],

    /* Shift arrow: from S₁ toward S₂ at y=80, pointing left */
    shiftArrow: { x1: 430, y1: 80, x2: 370, y2: 80, stroke: '#dc2626' },

    eqDots: [
      {
        cx: 310, cy: 210, fill: '#2563eb',
        initLabel: 'Pre-shock equilibrium', initLabel2: '(Q₁, P₁)', initLabelX: 317, initLabelY: 205
      },
      {
        cx: 276, cy: 184, fill: '#dc2626',
        newLabel: 'Post-shock equilibrium', newLabel2: '(Q₂, P₂)', newLabelX: 283, newLabelY: 179
      }
    ],

    legend: [
      { color: '#059669', text: 'D = Demand for food (unchanged)' },
      { color: '#2563eb', text: 'S₁ = Pre-war supply (Ukraine wheat available)' },
      { color: '#dc2626', text: 'S₂ = Post-war supply (Ukraine wheat removed)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of the Ukraine war supply shock on the food market.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',    label: 'Shift label',              pctX: 62,  pctY: 13,   pctW: 22 },
      { id: 'new-eq',   label: 'New equilibrium',           pctX: 49,  pctY: 36,   pctW: 22 },
      { id: 'orig-eq',  label: 'Original equilibrium',      pctX: 57,  pctY: 43,   pctW: 24 },
      { id: 'hi-price', label: 'Higher price – price signal', pctX: 0.5, pctY: 37,   pctW: 17 },
      { id: 'lo-qty',   label: 'Lower quantity (Q₂)',        pctX: 43,  pctY: 93.5, pctW: 18 }
    ],

    chips: [
      { id: 'sup-left',  text: 'Supply shifts left (supply shock)', icon: '←', zone: 'shift',    correct: true  },
      { id: 'new-eq',    text: 'New equilibrium (Q₂, P₂)',          icon: '●', zone: 'new-eq',   correct: true  },
      { id: 'orig-eq',   text: 'Original equilibrium (Q₁, P₁)',     icon: '●', zone: 'orig-eq',  correct: true  },
      { id: 'hi-price',  text: 'Higher price – price signal',        icon: '↑', zone: 'hi-price', correct: true  },
      { id: 'lo-qty',    text: 'Lower quantity (Q₂)',                icon: '↓', zone: 'lo-qty',   correct: true  },
      { id: 'sup-right', text: 'Supply shifts right',                icon: '→', zone: null,       correct: false },
      { id: 'lo-price',  text: 'Lower price',                        icon: '↓', zone: null,       correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['price mechanism', 'rationing function', 'signalling function', 'incentive function', 'excess demand', 'equilibrium price', 'price signal', 'allocative efficiency', 'PES', 'equity'],

    parts: [
      {
        num:         1,
        title:       'Explain the rationing function',
        prompt:      'How does the price rise from P₁ to P₂ ration existing food supply?',
        maxChars:    240,
        modelAnswer: 'Price rises from P₁ to P₂ when supply contracts. This rationing signal means existing supply flows to those willing and able to pay the higher price – reducing waste and ensuring supply is directed to highest-value uses. However, rationing by price excludes lower-income consumers who cannot afford P₂.'
      },
      {
        num:         2,
        title:       'Explain the signalling and incentive functions',
        prompt:      'How do higher prices at P₂ signal and incentivise producers?',
        maxChars:    240,
        modelAnswer: 'Higher P₂ transmits a price signal to producers globally: profitability has risen. Farmers plant more wheat; investors bid up farmland prices (+14%); suppliers in unaffected countries expand output. The incentive is the higher profit margin at P₂ > long-run average cost. Supply gradually shifts right again over 12–24 months as production responds.'
      },
      {
        num:         3,
        title:       'Evaluate: strengths and limitations',
        prompt:      'Where does the price mechanism work well and fail in this case?',
        maxChars:    240,
        modelAnswer: 'Works well: information is efficiently conveyed without central direction (Hayek\'s knowledge problem solved). Fails: equity (food bank use +37%) and speed of response (agricultural PES ≈ 0.2 in SR). A mixed approach – price mechanism plus emergency food support for low-income households – better addresses both dimensions.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Explain the supply shift mechanism',
      'Name and apply all three price mechanism functions',
      'State outcome for P and Q',
      'Evaluate equity and speed-of-response limitations'
    ],

    examAnswer: '"Ukraine war supply disruption shifted the food supply curve left from S₁ to S₂, raising prices from P₁ to P₂ and reducing output from Q₁ to Q₂. The price mechanism performed three functions: rationing existing supply through higher prices; signalling farmers to expand planting (UK wheat area +3%); and incentivising investment (farmland prices +14%). However, the rationing function was inequitable (food bank use +37%) and the supply response was slow (PES ≈ 0.2 in SR), suggesting a complementary role for targeted food support alongside the price mechanism."'
  }
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for price_functions
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'The Price Mechanism',
  estTime: '15–20 minutes',
  goal:    'Bridge your price mechanism knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "Use the 2021–23 UK food price surge to apply the three functions of the price mechanism – rationing, signalling and incentivising – and evaluate how well prices coordinate market adjustment when supply is disrupted.",
    heroKey: 'heroBars',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Explain and apply the three price mechanism functions in a real context',
      'Build the causal chain from supply disruption to market adjustment',
      'Predict market outcomes of price shocks including London housing and gas price surges',
      'Evaluate when the price mechanism succeeds and fails as a resource allocator'
    ],
    tip: "These steps are cognitive drills – same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context', skill: 'Application', sub: 'Read an extract and judge which evidence changes the answer.', href: TopicLoader.routes.link('context'), state: 'available' },
      { num: 2, name: 'Build the chain', skill: 'Analysis', sub: 'Order or fill the steps in a reasoning chain.', href: TopicLoader.routes.link('chain'), state: 'available' },
      { num: 3, name: 'Predict outcome', skill: 'Analysis', sub: 'Predict how the market or economy will respond.', href: TopicLoader.routes.link('predict'), state: 'available' },
      { num: 4, name: 'It depends on', skill: 'Evaluation', sub: 'Rank the factors that most change the answer.', href: TopicLoader.routes.link('depends'), state: 'available' },
      { num: 5, name: 'Make the judgement', skill: 'Evaluation', sub: 'Synthesise everything into an exam-quality judgement.', href: TopicLoader.routes.link('judge'), state: 'available' }
    ],

    stages: [
      { num: 1, name: 'Learn it', sub: 'Recap and lock in the gems',    state: 'done',    href: TopicLoader.routes.learn()      },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'current'                                                },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked'                                                 }
    ],

    startUrl:   TopicLoader.routes.link('context'),
    startLabel: 'Start Link it'
  }
};

/* ---- link-judge.js ---- */
/* ============================================================
   ECONOS – Link It · Make the Judgement station data
   The Price Mechanism: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'The Price Mechanism',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.routes.link('complete'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'predict', label: 'Predict outcome', href: TopicLoader.routes.link('predict') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 4,

  wgll: [
    { icon: '🎯', text: 'Take a clear position'  },
    { icon: '🔗', text: 'Use the mechanism'       },
    { icon: '➕', text: 'Add a condition'         },
    { icon: '💬', text: 'Explain the limitation'  }
  ],

  scenarios: [
    {
      id: 'price-mechanism-judgement',
      claim: {
        icon:   '🌾',
        prompt: 'Policy claim',
        text:   'The price mechanism is the most efficient allocator of scarce food resources when supply is disrupted, because higher prices simultaneously ration existing supply and signal producers to expand output.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'Food inflation 19.2%; farmland +14%; planting +3%; food bank use +37% (Trussell Trust 2023).' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Supply shock → excess demand → P rises → ration (existing) → signal (farmers) → incentivise (investment).' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'Supply shifts left S₁ to S₂ → P rises P₁ to P₂, Q falls Q₁ to Q₂ → price signal activated.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on price signal speed, agricultural PES, and distributional equity consequences.' }
      ],
      cloze: 'The price mechanism performs three functions when food supply is disrupted. First, higher prices [1] existing supply – directing it to those willing and able to pay P₂. Second, the price signal [2] producers: higher prices indicate that expanding output is [3]. Third, the profit incentive at P₂ > long-run average cost [4] investment in new capacity. However, price rationing is most effective when markets are [5]: if supermarkets have pricing power, the signal may not reach farmers in full. The equity cost of price rationing is that [6] households are excluded from access – requiring complementary welfare policy. The supply response depends on [7] – in agriculture, the growing season limits response to 6–24 months even when the signal is clear. The strongest judgement is that the price mechanism is informationally [8] but not always equitably efficient.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-ration',    text: 'ration',      correct: true  },
            { id: 'b1-sub',       text: 'subsidise',   correct: false },
            { id: 'b1-elim',      text: 'eliminate',   correct: false },
            { id: 'b1-tax',       text: 'tax',         correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-signal',    text: 'signals',     correct: true  },
            { id: 'b2-tax',       text: 'taxes',       correct: false },
            { id: 'b2-ignore',    text: 'ignores',     correct: false },
            { id: 'b2-regulate',  text: 'regulates',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-profit',    text: 'profitable',          correct: true  },
            { id: 'b3-social',    text: 'socially optimal',    correct: false },
            { id: 'b3-regulated', text: 'regulated',           correct: false },
            { id: 'b3-political', text: 'politically feasible', correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-incentive', text: 'incentivises',   correct: true  },
            { id: 'b4-discour',   text: 'discourages',    correct: false },
            { id: 'b4-neutral',   text: 'neutralises',    correct: false },
            { id: 'b4-taxes',     text: 'taxes',          correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-comp',      text: 'competitive',   correct: true  },
            { id: 'b5-reg',       text: 'regulated',     correct: false },
            { id: 'b5-mono',      text: 'monopolistic',  correct: false },
            { id: 'b5-state',     text: 'state-owned',   correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-low',       text: 'low-income',    correct: true  },
            { id: 'b6-high',      text: 'high-income',   correct: false },
            { id: 'b6-mid',       text: 'middle-income', correct: false },
            { id: 'b6-overseas',  text: 'overseas',      correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-pes',       text: 'price elasticity of supply', correct: true  },
            { id: 'b7-ied',       text: 'income elasticity of demand', correct: false },
            { id: 'b7-gov',       text: 'government regulation',      correct: false },
            { id: 'b7-cb',        text: 'central bank policy',        correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-eff',       text: 'efficient',   correct: true  },
            { id: 'b8-eq',        text: 'equitable',   correct: false },
            { id: 'b8-suff',      text: 'sufficient',  correct: false },
            { id: 'b8-cost',      text: 'costless',    correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',   text: 'The price mechanism is always the best allocator of all goods in all circumstances',         correct: false },
          { id: 'op-cond',     text: 'The price mechanism is informationally efficient but may fail on equity and speed of response', correct: true  },
          { id: 'op-never',    text: 'The price mechanism never works in agricultural markets due to PES constraints',              correct: false },
          { id: 'op-gov',      text: 'Government allocation is always more equitable and efficient than market prices',             correct: false }
        ]
      },
      examBridge: '"The Ukraine-driven supply shock demonstrates the price mechanism\'s strengths: UK food prices rose 19.2%, rationing existing supply and signalling farmers (+3% wheat planting) and investors (+14% farmland prices). But the short-run agricultural PES ≈ 0.2 meant the incentive function only translated into more supply over a 12–24 month lag. And price rationing excluded the lowest-income households – evidenced by 37% more food bank usage – requiring complementary targeted welfare support."'
    }
  ]
};

/* ---- link-predict.js ---- */
/* ============================================================
   ECONOS – Link It · Predict the Outcome station data
   The Price Mechanism: price signals, rationing and incentivising
   ============================================================ */

window.ECONOS_LINK_PREDICT = {
  topic:   'The Price Mechanism',
  backUrl: TopicLoader.routes.link('chain'),
  nextUrl: TopicLoader.routes.link('depends'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'predict', label: 'Predict outcome', href: TopicLoader.routes.link('predict') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 2,

  eyebrow:     'Predict the Outcome',
  instruction: 'For each scenario, predict the directional effect on each variable. Trace the three price mechanism functions: rationing (who gets the good now), signalling (what does the price tell producers) and incentivising (what action does the signal prompt).',

  scenarios: [
    {
      id: 'pm-house-price-rise',
      icon: '🏠',
      title: 'London house prices rise 25% in two years',
      setup: 'A combination of falling interest rates, rising population and constrained planning permission causes London house prices to rise 25% over two years. The price mechanism is the primary allocation mechanism for the private housing market.',
      variables: [
        {
          id: 'rationing',
          label: 'Who gets London housing (allocation effect)',
          correct: 'ambiguous',
          reason: 'Higher prices ration housing toward those able and willing to pay more. First-time buyers and lower-income households are priced out; those with higher incomes or existing equity can still buy. This is the rationing function of the price mechanism at work – but whether this allocation is efficient or equitable is contested. Markets ration by willingness to pay, not by need or social value.'
        },
        {
          id: 'building_profits',
          label: 'Profit margins for property developers and house builders',
          correct: 'increase',
          reason: 'Higher house prices, with input costs (land, labour, materials) initially unchanged, mean wider profit margins for builders. This is the signalling function: rising prices signal that housing is in shortage, and high profits are the market\'s way of incentivising more supply. This is precisely how the price mechanism is supposed to work in theory.'
        },
        {
          id: 'new_housing_supply',
          label: 'Rate of new house building in London',
          correct: 'increase',
          reason: 'Higher prices and profits incentivise developers to build more – this is the incentivising function. Firms respond to the price signal by redirecting resources (capital, workers, land) into housing construction. In a well-functioning market, supply rises to close the gap. In the UK, however, planning restrictions limit this response – supply is inelastic, so price rises persist longer than pure theory predicts.'
        },
        {
          id: 'rental_prices',
          label: 'Private rental prices in London',
          correct: 'increase',
          reason: 'Higher house prices push potential buyers into the rental market (they cannot afford to buy). Demand for rental properties rises, while rental supply is unchanged in the short run. Landlords can charge higher rents – rental prices rise. This illustrates how house price rises transmit to the rental market through the substitution effect: buying and renting are substitutes.'
        }
      ],
      examBridge: '"Rising London house prices demonstrate all three price mechanism functions simultaneously: rationing (housing moves to those willing to pay more), signalling (the price rise communicates shortage to developers and investors), and incentivising (higher profits attract new building). However, UK planning restrictions limit the supply response – PES for housing is low – so prices rise further than in a market with elastic supply, and the rationing function creates significant distributional concerns."'
    },
    {
      id: 'pm-gas-price-surge',
      icon: '⛽',
      title: 'UK gas prices treble following a supply disruption',
      setup: 'A major disruption to UK gas imports causes the wholesale price of natural gas to treble in three months. Gas is used for domestic heating, cooking, and as an input in manufacturing and electricity generation. The government has not capped prices.',
      variables: [
        {
          id: 'gas_consumption',
          label: 'UK household gas consumption',
          correct: 'decrease',
          reason: 'The higher price rations gas – this is the rationing function. Households reduce consumption by turning down thermostats, improving insulation, or switching to alternatives. The fall in consumption depends on PED for gas: in the short run, demand is quite inelastic (households need heat) so consumption falls less than proportionately to the price rise. In the long run, as households invest in insulation or heat pumps, demand is more elastic.'
        },
        {
          id: 'heat_pump_demand',
          label: 'Demand for heat pumps and electric heating (substitutes)',
          correct: 'increase',
          reason: 'Gas and electricity-based heat pumps are substitutes. When gas prices treble, the relative cost of gas heating rises sharply compared to electric alternatives. Cross-price elasticity of demand (XED) for heat pumps with respect to gas price is positive – demand for heat pumps rises. The price signal incentivises the switch to alternatives, which is the market\'s mechanism for promoting energy transition.'
        },
        {
          id: 'gas_investment',
          label: 'Investment in UK domestic gas production and storage',
          correct: 'increase',
          reason: 'High gas prices signal shortage and create profit opportunities for producers. The incentivising function: energy firms and investors are attracted by the higher returns available from increased gas production, storage investment, or LNG import terminal capacity. This is how the price mechanism is supposed to encourage supply-side adjustment to correct a shortage.'
        },
        {
          id: 'manufacturing_costs',
          label: 'Production costs for gas-intensive UK manufacturers',
          correct: 'increase',
          reason: 'Gas is a key input for glass, ceramics, chemicals and food processing. When gas prices treble, input costs for these industries rise substantially. This shifts their supply curves left – higher prices to consumers and/or lower output and employment in these sectors. The price signal transmits a negative supply shock from energy markets into manufacturing, illustrating how price mechanism shocks ripple across interconnected markets.'
        }
      ],
      examBridge: '"Tripling gas prices performs all three price mechanism functions: rationing (lower consumption as price rises), signalling (shortage communicated to producers and investors), and incentivising (firms invest in alternatives and new gas capacity). However, distributional concerns arise – higher energy bills are regressive, taking a larger share of income from poorer households. This is a classic case where the market mechanism is allocatively efficient but raises equity concerns that justify government intervention (energy subsidies, windfall taxes)."'
    }
  ]
};

