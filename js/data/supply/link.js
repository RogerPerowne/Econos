/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   Supply: build the cost shock → supply shift → new equilibrium chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Supply',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('diagram'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'supply-cost-shock',
      scenario: {
        icon:  '🏭',
        label: 'Scenario',
        text:  'UK energy-intensive manufacturing, 2021–22. Natural gas wholesale prices rise 400%; energy costs represent 20–40% of total production costs in steel, ceramics and food processing.'
      },
      anchor: 'Gas +400%; energy is 20–40% of costs in steel, ceramics, food processing.',
      tiles: [
        {
          id:   'step-shift',
          icon: '⚡',
          text: 'Higher energy MC → supply shifts left (S₁ → S₂)',
          pos:  0
        },
        {
          id:   'step-excess',
          icon: '📊',
          text: 'At P₁, Q_s < Q_d → excess demand → upward pressure on prices',
          pos:  1
        },
        {
          id:   'step-eq',
          icon: '📉',
          text: 'New equilibrium: higher P₂, lower Q₂ → output contracts, some firms suspend',
          pos:  2
        },
        {
          id:   'dist-1',
          icon: '🏛️',
          text: 'Government increases corporation tax, reducing investment incentives',
          pos:  null
        },
        {
          id:   'dist-2',
          icon: '🛒',
          text: 'Demand for manufactured goods falls as disposable income is squeezed',
          pos:  null
        },
        {
          id:   'dist-3',
          icon: '💻',
          text: 'New technology reduces unit labour costs in the sector',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Energy is a key input into steel, ceramics and food processing – accounting for 20–40% of total costs. A 400% rise in gas prices raises the marginal cost of production at every level of output. This means firms can profitably supply less at every price than before – the supply curve shifts left from S₁ to S₂. This is a non-price determinant of supply (input costs), so it shifts the whole curve, not just a movement along it.'
        },
        {
          pos:  1,
          text: 'At the original market price P₁, the leftward supply shift means that quantity supplied by manufacturers now falls short of what buyers demand. This excess demand (shortage) gives sellers the ability to raise prices – buyers are competing for a reduced quantity of steel, ceramics and food products. Upward price pressure develops as the market seeks a new clearing price.'
        },
        {
          pos:  2,
          text: 'Price rises from P₁ to P₂ as the energy cost shock passes partly through to output prices. At the same time, output falls from Q₁ to Q₂ as firms reduce production or suspend some capacity (as British Steel did with its Scunthorpe furnace). The new equilibrium E₂ reflects both a higher price and lower quantity – cost-push inflation emerges and industrial output contracts.'
        }
      ],
      examBridge: '"Surging energy input costs shifted the supply curve for energy-intensive manufactured goods to the left from S₁ to S₂. At the original market price, excess demand emerged as output contracted. The new equilibrium E₂ settled at a higher price P₂ and lower quantity Q₂ – with consumers bearing part of the cost increase and firms absorbing the rest in squeezed margins."',

      prompts: [
        'Why does the supply curve shift left when energy prices rise?',
        'What happens at the original price after the supply curve shifts?',
        'What is the new equilibrium and what does it imply for the market?'
      ],
      modelAnswers: [
        'Energy is a key production input – rising energy costs raise marginal private cost at every output level. Firms can now supply less at every price than before, so the entire supply curve shifts left from S₁ to S₂. This is a non-price supply shifter (input costs), not a movement along the supply curve.',
        'At the original price P₁, quantity supplied is now lower than quantity demanded – excess demand (a shortage) emerges. Sellers can raise prices without losing all buyers, so upward price pressure develops as the market attempts to reach a new equilibrium.',
        'The new equilibrium E₂ is at a higher price P₂ and lower output Q₂. Consumers pay more and receive less output – cost-push inflation. Firms with the highest energy intensity or least pricing power are squeezed most severely; some (like British Steel) temporarily suspend production rather than absorbing full losses.'
      ],
      vocab: ['supply curve', 'shift in supply', 'input costs', 'marginal cost', 'excess demand', 'equilibrium price', 'cost-push inflation', 'producer surplus', 'incidence']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Supply
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Supply',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'diagram', label: 'Diagram connector',  max: 9, color: '#7c3aed' },
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
    diagram: [
      { min: 80, text: 'Strong diagram reading' },
      { min: 55, text: 'Good – check the outcome for P and Q' },
      { min: 0,  text: 'Diagram work needs more attention' }
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

  useInLandIt: 'A leftward supply shift raises equilibrium price and reduces quantity. The split between price rise and quantity fall depends on PED for the output – inelastic demand concentrates the shock into higher prices; elastic demand concentrates it in lower output. Both mechanisms should feature in a Land It response.',

  focusInLandIt: {
    context: 'Use specific evidence – the 400% gas price rise, the British Steel furnace suspension, and the 14.8% food producer price inflation – to anchor your application to the real-world case. Note that hedging and EBRS complicate the general picture.',
    chain:   'State the chain explicitly: energy costs rise → marginal production costs rise → supply curve shifts left from S₁ to S₂ → shortage at P₁ → new equilibrium at higher P₂ and lower Q₂.',
    diagram: 'Draw both supply curves (S₁ and S₂), label both equilibria (Q₁, P₁ and Q₂, P₂), and show the leftward shift arrow between S₁ and S₂. Keep demand unchanged. Note the higher price and lower output at the new equilibrium.',
    depends: 'Lead with energy intensity as your condition – the supply shift is only large where energy is a substantial fraction of total costs. Then add PED for the output (determines whether the shock hits price or quantity more) and international competition (determines whether domestic producers can pass costs on or lose market share).',
    judge:   'State a clear position, use the mechanism (S shifts left → shortage → new equilibrium at higher P and lower Q), add the condition (energy intensity, PED, international competition), and acknowledge the limitation (government intervention and hedging moderated the shock for some producers).'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   Supply: classify evidence on the UK energy price shock 2021–22
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Supply',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('chain'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether rising energy input costs are the most significant supply-side shock facing UK energy-intensive manufacturing in 2021–22?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'Natural gas wholesale prices in the UK [[gasprices|rose from ~50p to ~450p per therm (Jan–Oct 2021) – about +400%]], driven by post-COVID demand recovery and tightening Russian pipeline supplies into European markets.',
      'British Steel announced in November 2021 that it was [[steelfurnace|suspending a Scunthorpe blast furnace, citing surging energy costs]] that made continuous operation economically unviable at the prevailing output prices.',
      'ONS data show that [[foodinflation|UK food producer price inflation hit 14.8% in 2022]], as energy-intensive processing and transport costs surged through supply chains from farm gate to shelf, pushing input cost increases into consumer prices.',
      'Industry analysts noted that [[hedging|firms on fixed-price energy contracts were shielded from the spike]] in 2021–22, facing no immediate cost increase and therefore no supply contraction.',
      'In October 2022 the UK government introduced the [[ebrs|Energy Bill Relief Scheme (EBRS), capping industrial gas at £0.211/kWh]] for eligible businesses, partially reversing the cost shock and preventing some of the supply contraction that would otherwise have occurred.'
    ],

    evidence: {
      'gasprices':  { text: 'rose from ~50p to ~450p per therm (Jan–Oct 2021) – about +400%' },
      'steelfurnace': { text: 'suspending a Scunthorpe blast furnace, citing surging energy costs' },
      'foodinflation': { text: 'UK food producer price inflation hit 14.8% in 2022' },
      'hedging':    { text: 'firms on fixed-price energy contracts were shielded from the spike' },
      'ebrs':       { text: 'Energy Bill Relief Scheme (EBRS), capping industrial gas at £0.211/kWh' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the claim',      tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against the claim', tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case',     tone: 'blue',  icon: '?' }
    ],

    correct: {
      'gasprices':    'supports',
      'steelfurnace': 'supports',
      'foodinflation':'supports',
      'hedging':      'complicates',
      'ebrs':         'complicates'
    },

    explain: {
      'gasprices':     'A 400% rise in natural gas spot prices from Jan to Oct 2021 provides direct quantitative evidence of a large supply-side cost shock. For energy-intensive sectors where gas is 20–40% of total costs, this magnitude of increase raises marginal production costs substantially, shifting the supply curve left.',
      'steelfurnace':  'The temporary suspension of a blast furnace by British Steel is direct evidence that rising energy costs made production unviable at existing prices – a real-world supply contraction consistent with a leftward supply shift. This confirms the mechanism, not just the direction of change.',
      'foodinflation': 'Food producer price inflation of 14.8% demonstrates that the energy cost shock rippled through supply chains beyond the most obviously energy-intensive sectors. Rising processing and transport costs shifted supply curves left across multiple food markets, supporting the breadth of the claim.',
      'hedging':       'Firms with fixed-price energy contracts did not face higher costs in 2021–22 and therefore had no supply contraction. This means the aggregate supply shift was smaller than the spot price spike alone would suggest – only the proportion of firms exposed to spot prices actually shifted their supply curve. This complicates the claim without refuting it.',
      'ebrs':          'The EBRS cap partially reversed the cost shock from October 2022 onward, keeping some firms in production that would otherwise have exited. Government intervention moderated the supply contraction below what the unmitigated cost shock would have produced – complicating any assessment of how severe the supply-side impact actually was.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"A 400% rise in natural gas prices provides strong evidence of a significant supply-side cost shock, confirmed by the British Steel furnace suspension and a 14.8% rise in food producer price inflation. However, the significance of the shock was conditioned by hedging arrangements (which shielded some firms entirely) and government intervention through the EBRS (which partially offset the cost increase for others) – complicating any blanket claim about the shock\'s severity."',

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
   Supply: evaluate the energy cost shock claim for UK manufacturing
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Supply',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether energy costs are the dominant supply-side shock.',
  nextUrl:     TopicLoader.routes.link('judge'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'supply-energy-shock',
      claim: {
        icon:   '🏭',
        prompt: 'Claim',
        text:   'Energy costs were the top supply shock for UK manufacturing in 2021–22.'
      },
      factors: [
        {
          id:    'energy-intensity',
          icon:  '⚡',
          label: 'Energy intensity of the production process',
          why:   'In sectors where energy accounts for 20–40% of total costs (steel, ceramics, glass), a 400% gas price rise has a massive effect on marginal cost and shifts supply left dramatically. For sectors where energy is only 5% of costs, the same price spike barely moves the supply curve. The significance of the cost shock depends entirely on how energy-intensive production is.'
        },
        {
          id:    'ped-output',
          icon:  '📉',
          label: 'Price elasticity of demand for the product',
          why:   'If demand is price inelastic (steel, specialist glass), producers can pass more of the cost rise to buyers via higher prices – reducing the output cut. If demand is price elastic, the price rise destroys demand, forcing larger output reductions. PED shapes how the cost shock splits between price and quantity effects – determining whether the supply shift mainly causes inflation or mainly causes output loss.'
        },
        {
          id:    'international-competition',
          icon:  '🌍',
          label: 'Exposure to international competition',
          why:   'UK manufacturers compete with producers in countries with lower energy costs or government subsidies. A UK-specific energy cost shock makes domestic producers uncompetitive against imports, compounding the output loss – the supply curve shifts left AND demand for domestic output may fall. Without border protections, the domestic industry can be hollowed out by lower-cost foreign competitors.'
        },
        {
          id:    'hedging',
          icon:  '🛡️',
          label: 'Degree of energy price hedging',
          why:   'Firms with long-term fixed-price energy contracts were largely shielded from the 2021–22 spot-market spike. Only firms exposed to spot prices bore the full cost increase. The aggregate supply shift is smaller than the raw spot-price data suggests – and varies widely across firms in the same sector. Hedging fundamentally limits the significance of the shock for protected firms.'
        },
        {
          id:    'substitution',
          icon:  '🔄',
          label: 'Substitutability of energy inputs',
          why:   'Some producers can switch from gas to electricity, hydrogen or waste-heat recovery in the medium run, reducing their dependence on natural gas. The more substitutable the energy input, the less permanent the supply shift – and the faster producers can adjust and partially offset the cost increase. In the very short run, however, most industrial processes cannot substitute away from gas quickly.'
        },
        {
          id:    'government-support',
          icon:  '🏛️',
          label: 'Government energy support schemes',
          why:   'The UK Energy Bill Relief Scheme (EBRS) from October 2022 capped gas prices for industrial users, partially reversing the supply shift and keeping firms in production that would otherwise have exited. The actual supply contraction depended on how comprehensive, swift and sustained government intervention was – a key evaluation point about the real-world severity of the shock.'
        },
        {
          id:    'labour-capital',
          icon:  '🛠️',
          label: 'Labour and capital cost changes',
          why:   'Energy costs rose alongside labour costs (tight post-COVID labour market, National Living Wage increases) and raw materials (metals, chemicals). The total shift in supply depends on all input cost changes simultaneously – energy was the largest component but not the only one. A holistic supply-side assessment requires considering the combined cost squeeze.'
        },
        {
          id:    'time-horizon',
          icon:  '⏳',
          label: 'Time horizon and firm exit/entry',
          why:   'In the very short run, some firms suspended production temporarily rather than exiting permanently. Over a longer period, sustained high costs forced permanent closures and investment in energy efficiency – changing the shape of the supply curve itself. The supply-side impact grows more severe if costs remain elevated, as permanent capacity exits the market.'
        }
      ],
      modelRanking: ['energy-intensity', 'ped-output', 'international-competition'],
      judgement: '"Whether energy costs are the most significant supply-side shock depends on the energy intensity of the sector – for steel and ceramics, the effect is dominant. But its impact on equilibrium price vs quantity is shaped by the PED for the output: inelastic demand allows firms to pass costs forward, while elastic demand amplifies output losses. International competition is a critical third factor – UK-specific cost rises push production abroad rather than simply reducing global output."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Supply: rising energy costs shift supply left (S₁ → S₂)
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   D (demand, unchanged): (110,50)→(514,381)  slope ≈ 0.825  ⟹  y = -40.75 + 0.825x
   S₁ (original supply): (130,390)→(490,30)  slope = -1.0  ⟹  y = 520 - x
   S₂ (new supply, shifted left – 60px vertical gap above S₁): (130,330)→(430,30)  ⟹  y = 460 - x
   E₁ (S₁ ∩ D): 520-x = -40.75+0.825x → 560.75 = 1.825x → x ≈ 307, y ≈ 213
   E₂ (S₂ ∩ D): 460-x = -40.75+0.825x → 500.75 = 1.825x → x ≈ 274, y ≈ 186   */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Supply',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('depends'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 2,

  /* ── Stage 0: Select the right diagram ── */
  select: {
    eyebrow:     'Diagram Connector – Select the Diagram',
    title:       'UK energy prices surge 400%. Which diagram correctly shows the effect on the market for energy-intensive manufactured goods?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the energy cost shock. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      's-left',
        correct:  true,
        title:   'Supply shifts left',
        sub:     'Supply shifts left – higher input costs mean firms can supply less at every price',
        why:     'Rising energy costs raise marginal production costs at every output level, so firms can profitably supply less at every price. The supply curve shifts left from S₁ to S₂. At the original price, a shortage emerges, pushing price up to P₂ while output falls to Q₂. Demand is unchanged – the shock is entirely on the supply side.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Supply expands – more output at every price level',
        why:     'Supply shifts right when input costs fall, technology improves, or more firms enter the market. A 400% rise in energy costs does the opposite – it raises production costs and shifts supply left, not right. A rightward shift would represent the solution to the cost crisis, not the crisis itself.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Demand falls – buyers demand less at every price',
        why:     'A leftward demand shift would represent falling consumer income, worsening confidence, or a rise in substitute prices. The energy price shock affects the cost of production – a supply-side shock – not consumers\' willingness to buy. Demand for manufactured goods is unchanged in the first instance.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Demand rises – buyers demand more at every price',
        why:     'Demand shifts right when consumer income rises or confidence improves. This is a supply-side story – rising energy costs hit manufacturers\' cost curves. Demand for the output is unchanged. Choosing this diagram confuses the supply shock with a demand expansion.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🏭',
    text:  'UK natural gas prices rise 400% in 2021–22, surging input costs for steel, ceramics and food processing.',
    dataPoints: [
      { icon: '⚡', text: 'Energy = 20–40% of total costs in energy-intensive sectors' },
      { icon: '📉', text: 'UK steel blast furnace suspended; ceramics firms exit market' },
      { icon: '🍞', text: 'Food producer price inflation: +14.8% (ONS 2022)' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – supply shifts left as energy input costs surge, creating a new equilibrium at higher price and lower output',
    xLabel:    'Quantity of manufactured goods',
    yLabel:    'Price / Cost (£)',

    lines: [
      /* D (Demand, unchanged) – green downward-sloping */
      { x1: 110, y1: 50,  x2: 514, y2: 381, stroke: '#059669', strokeWidth: 2.5,
        label: 'D', labelX: 516, labelY: 381, labelFill: '#059669' },
      /* S₁ (original supply) – blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S₁', labelX: 488, labelY: 28, labelFill: '#2563eb' },
      /* S₂ (new supply after cost shock – shifted left, 60px vertical gap above S₁) – red upward-sloping */
      { x1: 130, y1: 330, x2: 430, y2: 30,  stroke: '#dc2626', strokeWidth: 2.5,
        label: 'S₂', labelX: 424, labelY: 28, labelFill: '#dc2626' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₂ (new equilibrium, higher price) */
      { x1: 100, y1: 186, x2: 274, y2: 186, tickLeft: 'P₂', tickLeftY: 189 },
      /* Horizontal from y-axis to E₁ (original equilibrium) */
      { x1: 100, y1: 213, x2: 307, y2: 213, tickLeft: 'P₁', tickLeftY: 216 },
      /* Vertical from E₂ down to x-axis */
      { x1: 274, y1: 186, x2: 274, y2: 400, tickBottom: 'Q₂', tickBottomX: 274 },
      /* Vertical from E₁ down to x-axis */
      { x1: 307, y1: 213, x2: 307, y2: 400, tickBottom: 'Q₁', tickBottomX: 307 }
    ],

    /* Shift arrow: horizontal, pointing left, at y=80 between S₁ and S₂ */
    shiftArrow: { x1: 436, y1: 80, x2: 376, y2: 80, stroke: '#dc2626' },

    eqDots: [
      {
        cx: 307, cy: 213, fill: '#2563eb',
        initLabel: 'Original equilibrium', initLabel2: '(Q₁, P₁)', initLabelX: 314, initLabelY: 208
      },
      {
        cx: 274, cy: 186, fill: '#dc2626',
        newLabel: 'New equilibrium', newLabel2: '(Q₂, P₂)', newLabelX: 281, newLabelY: 181
      }
    ],

    legend: [
      { color: '#059669', text: 'D = Demand for manufactured goods (unchanged)' },
      { color: '#2563eb', text: 'S₁ = Original supply (before energy cost shock)' },
      { color: '#dc2626', text: 'S₂ = New supply (after 400% gas price rise)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of rising energy costs on the market for energy-intensive manufactured goods.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and output.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',    label: 'Shift label',           pctX: 62,  pctY: 13,   pctW: 22 },
      { id: 'new-eq',   label: 'New equilibrium',        pctX: 49,  pctY: 37,   pctW: 22 },
      { id: 'orig-eq',  label: 'Original equilibrium',   pctX: 56,  pctY: 44,   pctW: 24 },
      { id: 'hi-price', label: 'Higher price (P₂)',       pctX: 0.5, pctY: 38,   pctW: 17 },
      { id: 'lo-out',   label: 'Lower output (Q₂)',       pctX: 42,  pctY: 93.5, pctW: 18 }
    ],

    chips: [
      { id: 'sup-left',  text: 'Supply shifts left',            icon: '←', zone: 'shift',    correct: true  },
      { id: 'new-eq',    text: 'New equilibrium (Q₂, P₂)',      icon: '●', zone: 'new-eq',   correct: true  },
      { id: 'orig-eq',   text: 'Original equilibrium (Q₁, P₁)', icon: '●', zone: 'orig-eq',  correct: true  },
      { id: 'hi-price',  text: 'Higher price (P₂)',              icon: '↑', zone: 'hi-price', correct: true  },
      { id: 'lo-out',    text: 'Lower output (Q₂)',              icon: '↓', zone: 'lo-out',   correct: true  },
      { id: 'sup-right', text: 'Supply shifts right',            icon: '→', zone: null,       correct: false },
      { id: 'lo-price',  text: 'Lower price',                    icon: '↓', zone: null,       correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['supply curve', 'shift in supply', 'input costs', 'marginal cost', 'excess demand', 'equilibrium price', 'cost-push inflation', 'producer surplus', 'incidence'],

    parts: [
      {
        num:         1,
        title:       'Why does the supply curve shift left?',
        prompt:      'Why does the supply curve shift left, not just contract along it?',
        maxChars:    300,
        modelAnswer: 'Energy cost rises increase the marginal cost of production at every output level – they are a non-price supply shifter. This means firms can supply less at every price than before, shifting the entire supply curve to the left from S₁ to S₂. A price change would cause a movement along the supply curve; a cost change shifts it.'
      },
      {
        num:         2,
        title:       'What happens to price and output?',
        prompt:      'What is the new equilibrium and who bears the cost?',
        maxChars:    300,
        modelAnswer: 'The new equilibrium settles at a higher price P₂ and lower output Q₂. Consumers pay more as the cost is partially passed through; producer surplus falls as margins are squeezed. Some producers exit or suspend production (as British Steel did) when they cannot pass enough of the cost increase to buyers.'
      },
      {
        num:         3,
        title:       'Add a wider effect',
        prompt:      'What are the supply-chain or economy-wide consequences?',
        maxChars:    300,
        modelAnswer: 'Cost-push inflation ripples through the supply chain: food processors raise prices → retailers pass costs to consumers → household real incomes fall. Government may need to intervene (e.g., the Energy Bill Relief Scheme) to prevent sector collapse and permanent capacity loss. Job losses in energy-intensive sectors add to macroeconomic costs.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Identify the supply shifter (input costs)',
      'State direction of shift (left)',
      'State outcome for P and Q',
      'Name a wider supply-chain or welfare effect'
    ],

    examAnswer: '"Surging energy input costs raised the marginal cost of production for UK manufacturers, shifting the supply curve left from S₁ to S₂. The new equilibrium settled at a higher price P₂ and lower output Q₂, squeezing consumer surplus and pushing cost-push inflation through supply chains. Third-party effects include industrial job losses and price pressure on households, particularly for essential goods with energy-intensive production processes."'
  }
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for supply
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Supply',
  estTime: '15–20 minutes',
  goal:    'Bridge your supply knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "You've locked in the law of supply, curve shifts and producer surplus. Now train the skills examiners reward – applying the framework to a real cost shock, building a watertight cost → supply shift → new equilibrium chain, and reaching a supported judgement on when cost increases are most damaging.",
    heroKey: 'heroSupply',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Identify supply shifters in a real UK industrial cost context',
      'Build the causal chain from rising energy costs to a new market equilibrium',
      'Read and label a supply-shift diagram correctly',
      'Evaluate when cost increases are more vs less damaging to firms and consumers'
    ],
    tip: "These steps are cognitive drills – same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context', skill: 'Application', sub: 'Read an extract and judge which evidence changes the answer.', href: TopicLoader.routes.link('context'), state: 'available' },
      { num: 2, name: 'Build the chain', skill: 'Analysis', sub: 'Order or fill the steps in a reasoning chain.', href: TopicLoader.routes.link('chain'), state: 'available' },
      { num: 3, name: 'Diagram connector', skill: 'Analysis', sub: 'Pick, label, interpret and explain the right diagram.', href: TopicLoader.routes.link('diagram'), state: 'available' },
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
   Supply: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Supply',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.routes.link('complete'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
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
      id: 'supply-energy-judgement',
      claim: {
        icon:   '🏭',
        prompt: 'Claim',
        text:   'Rising energy input costs are the most significant supply-side shock facing UK energy-intensive manufacturing industries in 2021–22.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'Gas prices +400% (Jan–Oct 2021); British Steel furnace suspended; food producer price inflation +14.8%; but hedged firms unaffected and EBRS partially offset the shock.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Rising energy costs → supply curve shifts left from S₁ to S₂ → shortage at P₁ → new equilibrium at higher P₂ and lower Q₂.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'S shifts left → new equilibrium at higher P₂ and lower Q₂ – cost-push inflation and output contraction.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Severity depends on energy intensity of sector, PED for the final good, and exposure to international competition from lower-cost overseas producers.' }
      ],
      cloze: 'A supply-side cost shock shifts the supply curve to the [1], because rising input costs increase [2] at every level of output. The new equilibrium settles at a [3] price and [4] quantity. The proportion of the cost rise passed to consumers as higher prices depends on the [5] of demand – where demand is price inelastic, firms can pass most of the cost through. However, the policy is less effective at restoring output where firms face [6] from lower-cost overseas producers. The strongest judgement is that energy cost shocks are most damaging in [7] sectors with [8], where the supply shift is large and producers cannot pass costs to buyers without losing market share to imports.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-left',      text: 'left',          correct: true  },
            { id: 'b1-right',     text: 'right',         correct: false },
            { id: 'b1-up-along',  text: 'upward along',  correct: false },
            { id: 'b1-dn-along',  text: 'downward along',correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-mpc',       text: 'marginal production costs',     correct: true  },
            { id: 'b2-wtp',       text: 'consumer willingness to pay',   correct: false },
            { id: 'b2-revenue',   text: 'government revenue',            correct: false },
            { id: 'b2-export',    text: 'export demand',                 correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-higher',    text: 'higher',        correct: true  },
            { id: 'b3-lower',     text: 'lower',         correct: false },
            { id: 'b3-unchanged', text: 'unchanged',     correct: false },
            { id: 'b3-indet',     text: 'indeterminate', correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-lower',     text: 'lower',         correct: true  },
            { id: 'b4-higher',    text: 'higher',        correct: false },
            { id: 'b4-unchanged', text: 'unchanged',     correct: false },
            { id: 'b4-indet',     text: 'indeterminate', correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-ped',       text: 'price elasticity',       correct: true  },
            { id: 'b5-yed',       text: 'income elasticity',      correct: false },
            { id: 'b5-xed',       text: 'cross-price elasticity', correct: false },
            { id: 'b5-pes',       text: 'supply elasticity',      correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-int-comp',  text: 'international competition', correct: true  },
            { id: 'b6-reg',       text: 'domestic regulation',       correct: false },
            { id: 'b6-boycott',   text: 'consumer boycotts',         correct: false },
            { id: 'b6-fiscal',    text: 'fiscal policy',             correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-energy',    text: 'energy-intensive',   correct: true  },
            { id: 'b7-low-cost',  text: 'low-cost',           correct: false },
            { id: 'b7-regulated', text: 'heavily regulated',  correct: false },
            { id: 'b7-labour',    text: 'labour-intensive',   correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-elastic',   text: 'price-elastic demand',   correct: true  },
            { id: 'b8-inelastic', text: 'price-inelastic demand', correct: false },
            { id: 'b8-monopoly',  text: 'monopoly pricing power', correct: false },
            { id: 'b8-subsidy',   text: 'government subsidies',   correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',    text: 'Energy cost shocks always reduce output more than price',                                                          correct: false },
          { id: 'op-condition', text: 'Energy cost shocks are most damaging in energy-intensive sectors facing elastic demand and international competition', correct: true  },
          { id: 'op-inflation', text: 'Supply shocks always cause inflation regardless of market structure',                                               correct: false },
          { id: 'op-govt',      text: 'Government intervention can fully offset any supply-side shock',                                                    correct: false }
        ]
      },
      examBridge: '"A 400% rise in gas prices shifted the supply curve for UK energy-intensive manufacturing sharply to the left, raising prices and reducing output. The severity of the output loss depended on PED for the final good – sectors with inelastic demand (steel, specialist glass) passed more cost to buyers, while those facing import competition bore larger output losses. Government energy price caps partially offset the shock, but permanent supply curve adjustments continued as some producers exited and others invested in efficiency."'
    }
  ]
};

/* ---- link-predict.js ---- */
/* ============================================================
   ECONOS – Link It · Predict the Outcome station data
   Supply: cost shocks and technology on market supply
   ============================================================ */

window.ECONOS_LINK_PREDICT = {
  topic:   'Supply',
  backUrl: TopicLoader.routes.link('chain'),
  nextUrl: TopicLoader.routes.link('diagram'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: -1,

  eyebrow:     'Predict the Outcome',
  instruction: 'For each scenario, predict which direction each market variable will move. Choose ↑ Increase, ↓ Decrease, → No change, or ? Uncertain.',

  scenarios: [
    {
      id: 'sup-energy-cost-shock',
      icon: '⚡',
      title: 'Energy costs surge 40% for UK manufacturers',
      setup: 'Global gas prices spike, raising energy costs for UK manufacturers by an average of 40%. Energy is a significant input cost for steel, cement, glass and food processing. Assume demand for manufactured goods is unchanged in the short run.',
      variables: [
        {
          id: 'supply_steel',
          label: 'Supply of steel (energy-intensive industry)',
          correct: 'decrease',
          reason: 'Energy is a major production cost for steel – blast furnaces require enormous electricity. A 40% rise in energy costs shifts the supply curve for steel left: firms are only willing to supply the same quantity at a higher price (or less at the same price). The supply curve shifts left.'
        },
        {
          id: 'price_steel',
          label: 'Equilibrium price of steel',
          correct: 'increase',
          reason: 'With supply shifting left and demand unchanged, there is a shortage at the original price. The price of steel rises until the market clears. The magnitude of the price rise depends on the PES and PED for steel – inelastic supply and demand amplify the price increase.'
        },
        {
          id: 'quantity_steel',
          label: 'Equilibrium quantity of steel',
          correct: 'decrease',
          reason: 'At the new higher equilibrium price, the quantity demanded is lower (movement along demand curve). The new Q* is less than the original equilibrium quantity. Less steel is traded despite higher prices.'
        },
        {
          id: 'profit_margins',
          label: 'Profit margins of steel producers',
          correct: 'ambiguous',
          reason: 'This is genuinely uncertain: profit margins depend on how much of the cost rise producers can pass on to buyers. If PED for steel is inelastic, producers can pass most of the cost rise through higher prices – margins may be partially protected. If steel buyers can switch to imports or alternative materials, producers cannot pass costs on fully – margins fall. The outcome is ambiguous and depends on market structure and substitutability.'
        }
      ],
      examBridge: '"An energy cost surge shifts supply curves left for energy-intensive industries – steel, cement, glass. Equilibrium prices rise and quantities fall. The degree of price pass-through depends on PED: more inelastic demand allows producers to maintain margins; more elastic demand means cost rises squeeze profits rather than consumer prices."'
    },
    {
      id: 'sup-automation-technology',
      icon: '🤖',
      title: 'New automation technology halves assembly-line labour costs',
      setup: 'A major technological breakthrough halves the cost of robotic assembly across UK car manufacturing. The technology is rapidly adopted by all UK manufacturers. Assume consumer demand for cars is unchanged initially.',
      variables: [
        {
          id: 'supply_cars',
          label: 'Supply of UK-manufactured cars',
          correct: 'increase',
          reason: 'Lower production costs from automation shift the supply curve right: firms can profitably supply more cars at every price. This is a classic positive supply-side shock – the same output can now be produced at lower cost, or more output at the same cost. Supply increases.'
        },
        {
          id: 'price_cars',
          label: 'Equilibrium price of cars',
          correct: 'decrease',
          reason: 'With supply shifting right and demand unchanged, there is a surplus at the original price. Competition among producers drives prices down to a new lower equilibrium. Consumers benefit from the productivity gain.'
        },
        {
          id: 'quantity_cars',
          label: 'Equilibrium quantity of cars sold',
          correct: 'increase',
          reason: 'The lower equilibrium price stimulates demand – consumers move down their demand curve and buy more cars. Q* rises. The supply shift → price fall → demand response creates the new higher equilibrium quantity.'
        },
        {
          id: 'employment_assembly',
          label: 'Employment of assembly-line workers',
          correct: 'decrease',
          reason: 'Automation substitutes capital for labour – robots replace assembly-line workers. Even though output rises, fewer workers are needed per unit of output. Assembly-line employment falls as firms substitute toward the now-cheaper robotic technology. This is the standard displacement effect of labour-saving technology.'
        }
      ],
      examBridge: '"Automation shifts the supply curve right: lower costs → lower prices → higher Q*. Consumers gain from lower prices. But the technology substitutes capital for labour – assembly-line employment falls even as output rises. This is the central tension of productivity-enhancing automation: aggregate efficiency gains coexist with specific labour market disruption."'
    }
  ]
};

