/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-calc.js ---- */
/* ============================================================
   ECONOS – Link It · Calculate It station data
   PES: price elasticity of supply formula and interpretation
   ============================================================ */

window.ECONOS_LINK_CALC = {
  topic:   'Price Elasticity of Supply',
  backUrl: TopicLoader.routes.link('chain'),
  nextUrl: TopicLoader.routes.link('diagram'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 2,

  eyebrow:     'Calculate It',
  instruction: 'PES measures how responsive quantity supplied is to a price change. Practise the formula – then use your answer to make a policy judgement.',

  questions: [
    {
      id: 'pes-q1',
      title: 'Calculate PES – wheat supply',
      scenario: 'The UK wholesale price of wheat rises from £150 per tonne to £180 per tonne following a poor harvest in major exporting countries. UK farmers respond by increasing output from 14.0 million tonnes to 14.7 million tonnes over the following harvest.',
      question: 'Calculate the PES for UK wheat. Give your answer to 2 decimal places.',
      hint: 'PES = (% change in Qs) ÷ (% change in P)',
      method: [
        { step: '% change in price',              working: '(£180 − £150) ÷ £150 × 100 = +20%' },
        { step: '% change in quantity supplied',  working: '(14.7m − 14.0m) ÷ 14.0m × 100 = +5%' },
        { step: 'PES',                             working: '5 ÷ 20 = 0.25' },
        { step: 'Interpret',                       working: 'PES = 0.25 < 1 → price inelastic supply. A 20% price rise generates only a 5% increase in supply – farmers cannot rapidly expand production due to growing seasons and fixed land.' }
      ],
      inputType: 'number',
      answer: 0.25,
      unit: '(PES value)',
      tolerance: 0.01,
      feedback: {
        correct: 'Correct! PES = 0.25. Wheat supply is price inelastic because of growing seasons (it takes months to increase output), fixed land availability, and the time needed to plant and harvest additional crops. This is typical of primary agricultural commodities.',
        wrong: 'Method: (1) %ΔP = (180−150)/150 × 100 = 20%. (2) %ΔQs = (14.7−14.0)/14.0 × 100 = 5%. (3) PES = 5 ÷ 20 = 0.25. PES is always positive (supply curves slope upward).'
      },
      examTip: 'PES is always positive (price and quantity supplied move in the same direction). PES < 1 = inelastic; PES > 1 = elastic; PES = 1 = unit elastic; PES = 0 = perfectly inelastic; PES = ∞ = perfectly elastic. Agricultural commodities typically have low PES in the short run due to growing seasons.'
    },
    {
      id: 'pes-q2',
      title: 'PES and tax burden – connecting PES to policy',
      scenario: 'Two markets face the same specific tax of £5 per unit. In Market A, PES = 3.0 (elastic supply). In Market B, PES = 0.2 (inelastic supply). Assume demand elasticity is similar in both markets.',
      question: 'In which market do producers bear a <strong>greater proportion</strong> of the tax burden, and why?',
      hint: 'More elastic supply → producers can more easily reduce supply and shift the tax onto consumers.',
      method: [
        { step: 'Market A: Elastic supply (PES = 3.0)', working: 'Producers can quickly adjust output. If the tax raises their costs, they can reduce supply significantly. But to sell at all, they must accept some price reduction → elastic supply means producers bear MORE of the tax burden.' },
        { step: 'Market B: Inelastic supply (PES = 0.2)', working: 'Producers cannot easily reduce output (fixed capacity, growing seasons). They must continue supplying even if price falls. This means they can pass more of the tax on to consumers → inelastic supply means producers bear LESS of the tax.' },
        { step: 'Conclusion', working: 'Producers in Market A (elastic supply) bear a greater share of the tax burden than producers in Market B (inelastic supply).' }
      ],
      inputType: 'mcq',
      options: [
        'Market A (elastic supply, PES = 3.0) – producers bear more because they can quickly reduce output',
        'Market B (inelastic supply, PES = 0.2) – producers bear more because they cannot reduce output',
        'Both markets equally – PES does not affect tax incidence',
        'Market A (elastic supply, PES = 3.0) – producers bear more because consumers have no substitutes'
      ],
      answer: 'Market A (elastic supply, PES = 3.0) – producers bear more because they can quickly reduce output',
      feedback: {
        correct: 'Correct! With elastic supply (PES = 3.0), producers can rapidly reduce output if the post-tax net price falls below their costs. This willingness to exit the market forces them to absorb more of the tax to stay competitive. Inelastic suppliers (Market B) have no choice but to keep supplying, so they can pass more of the tax burden to consumers.',
        wrong: 'Elastic supply means producers are willing to reduce output significantly if the price they receive falls. This makes them more sensitive to the tax and forces them to absorb more of it. Inelastic suppliers (PES = 0.2) cannot easily reduce output, so they accept the lower net price – meaning they can pass more of the tax onto consumers who have fewer choices.'
      },
      examTip: 'Tax incidence depends on BOTH demand elasticity AND supply elasticity. More elastic supply → more of the tax falls on producers. More elastic demand → more of the tax falls on producers (consumers can switch). Perfectly inelastic supply → 100% of tax falls on producers. This is a Level 4 analysis point in longer mark questions.'
    }
  ]
};

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   PES: demand surge → price spike via low supply elasticity
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Price Elasticity of Supply',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('diagram'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'pes-housing-mechanism',
      scenario: {
        icon:  '🏠',
        label: 'Scenario',
        text:  'Record net migration (745,000) and post-COVID urban return increase demand for rental housing sharply, but supply is constrained by long construction lead times (PES ≈ 0.2 in SR).'
      },
      anchor: 'Migration (745k) and urban return push rental demand right; SR PES ≈ 0.2.',
      tiles: [
        {
          id:   'step-demand',
          icon: '📈',
          text: 'Demand for rental housing shifts right → excess demand at old rent',
          pos:  0
        },
        {
          id:   'step-signal',
          icon: '💸',
          text: 'Rents rise sharply; supply response slow (PES ≈ 0.2, 24–36 mth builds)',
          pos:  1
        },
        {
          id:   'step-welfare',
          icon: '⚖️',
          text: 'Rents stay elevated for years → tenant CS falls; landlord PS rises',
          pos:  2
        },
        {
          id:   'dist-1',
          icon: '🏛️',
          text: 'The government introduces rent controls, suppressing price signals',
          pos:  null
        },
        {
          id:   'dist-2',
          icon: '🏡',
          text: 'Demand for owner-occupied housing falls as mortgage rates rise',
          pos:  null
        },
        {
          id:   'dist-3',
          icon: '📋',
          text: 'Planning regulations are relaxed, immediately increasing supply',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Net migration and urban return are non-price demand factors – they shift the entire demand curve for rental housing to the right. At the existing rent level, the quantity of rental properties demanded now exceeds the quantity available, creating excess demand (a shortage). Landlords face queues of prospective tenants and begin raising rents.'
        },
        {
          pos:  1,
          text: 'The rent rise sends a price signal: higher rents make new development profitable, encouraging developers to build more. But this signal cannot unlock supply quickly because new housing takes 24–36 months from planning permission to first occupation. PES ≈ 0.2 means a 10% rent rise generates only a 2% rise in quantity supplied – most of the demand shock is absorbed by higher rents, not more housing.'
        },
        {
          pos:  2,
          text: 'Because supply cannot respond in the short run, rents remain elevated. Existing tenants pay significantly more for the same housing – their consumer surplus falls. Landlords and developers benefit from higher rental income and development values – their producer surplus rises. The welfare distribution shifts sharply toward suppliers, and the efficiency cost is visible in the housing shortage that persists until the long-run supply response eventually catches up.'
        }
      ],
      examBridge: '"Record net migration shifted the demand curve for rental housing sharply to the right. Because supply elasticity is very low (PES ≈ 0.2 in the short run), the market adjusted almost entirely through price: rents rose 9.4% while the quantity of rental properties barely increased. The low PES reflects long construction lead times, planning constraints, and landlord exit from the market – all of which prevent supply from responding to the price signal within the policy-relevant time frame."',

      prompts: [
        'Why does the demand surge create excess demand rather than immediately attracting more supply?',
        'Why does the price signal (higher rents) fail to increase supply quickly?',
        'What are the welfare consequences of sustained elevated rents?'
      ],
      modelAnswers: [
        'The demand surge shifts the demand curve right immediately – but supply cannot respond on the same timescale. New housing takes 24–36 months from planning to completion, so quantity supplied remains essentially fixed in the short run. At existing rents, demand now exceeds supply: a housing shortage emerges.',
        'Higher rents signal profitability to developers, but the production period for housing is 24–36 months. Planning constraints add further delays. PES ≈ 0.2 means supply is near-inelastic: a large rent rise produces only a small quantity response. The price mechanism works in direction but not in speed or magnitude.',
        'Tenants face higher rents for essentially the same housing – consumer surplus falls substantially. Existing landlords and developers capture the higher rents as producer surplus. The market does not self-correct quickly: the rent spike persists until the long-run supply response (new construction) eventually closes the gap.'
      ],
      vocab: ['price elasticity of supply', 'PES', 'supply response', 'price signal', 'time period', 'planning permission', 'consumer surplus', 'producer surplus', 'excess demand']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Price Elasticity of Supply
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Price Elasticity of Supply',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'calc',    label: 'Calculate It',        max: 6, color: '#3B82F6' },
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

  useInLandIt: 'When PES is low, demand shocks raise price far more than quantity. In exam responses, the PES coefficient (≈0.2 for UK rental housing) should anchor the analysis of WHY supply cannot respond – reference planning lead times and landlord exit explicitly.',

  focusInLandIt: {
    context: 'Use specific evidence – the 745,000 net migration figure, 9.4% rent rise, and 1.3% listing growth – to anchor your application to the real-world case, not just generic PES theory.',
    chain:   'State the chain explicitly: demand surge → excess demand at existing rents → price signal → slow supply response (PES ≈ 0.2, 24–36 month lead time) → rents stay elevated.',
    diagram: 'Draw the near-vertical supply curve (PES ≈ 0.2), shift demand right, and show that E₂ is almost directly above E₁ – a large price rise and tiny quantity rise.',
    depends: 'Lead with construction lead times as your primary condition – this is the structural root cause of low PES. Add landlord exit as the compounding factor that worsened the short-run position.',
    judge:   'State a clear position, use the mechanism (near-vertical S, E₂ above E₁, 9.4% rent rise), add the condition (planning reform needed over medium run), and acknowledge the landlord exit complication honestly.'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   PES: classify evidence on the UK rental housing shortage 2022–23
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Price Elasticity of Supply',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('chain'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether the low price elasticity of supply of rental housing is the primary reason UK rents rose faster than inflation in 2022–23?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'Office for National Statistics data show that [[migration|UK net migration reached a record 745,000 in the year to June 2023]], driving exceptional demand for rental accommodation at a time when urban return post-COVID was already pushing up city rents.',
      'The average time from planning permission to first occupation for new housing in England is 24–36 months; even with [[approval|planning approval rates at 86%]], new supply cannot reach the market quickly enough to absorb a demand surge.',
      'The result was stark: [[rents|UK private rental prices rose 9.4% in 2023 (ONS)]], the highest annual rate since ONS records began – consistent with a market where price, not quantity, absorbs almost all of the adjustment pressure.',
      'Net rental supply – new listings entering the market – grew by only [[listings|1.3% in 2023 (Rightmove)]], despite the strength of the price signal sent to landlords and developers.',
      'The UK government\'s Renters\' Reform Bill 2024 increased landlord regulatory compliance costs, leading to [[landlords|landlords exiting the sector]] – reducing effective supply at the same time as demand was rising.'
    ],

    evidence: {
      'migration': { text: 'UK net migration reached a record 745,000 in the year to June 2023' },
      'approval':  { text: 'planning approval rates at 86%' },
      'rents':     { text: 'UK private rental prices rose 9.4% in 2023 (ONS)' },
      'listings':  { text: '1.3% in 2023 (Rightmove)' },
      'landlords': { text: 'landlords exiting the sector' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports low PES as primary cause', tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues another factor is primary',  tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',   tone: 'blue',  icon: '?' }
    ],

    correct: {
      'migration': 'supports',
      'approval':  'supports',
      'rents':     'supports',
      'listings':  'supports',
      'landlords': 'complicates'
    },

    explain: {
      'migration': 'A demand surge of 745,000 net migrants is the trigger: it generates excess demand for rental properties. That excess demand turns into a price spike only because PES is low – confirming the mechanism that low PES converts demand shocks into price spikes rather than quantity rises.',
      'approval':  'Even an 86% planning approval rate cannot unlock supply quickly because build times are 24–36 months. This quantifies the structural time lag that keeps PES near zero in the short run – the planning system cannot be blamed alone; the construction lead time is the binding constraint.',
      'rents':     'A 9.4% rent rise from a demand shift that only increased listings 1.3% is the clearest evidence that almost all adjustment went through price. This is precisely what a near-vertical (highly inelastic) supply curve predicts – supporting low PES as the primary cause.',
      'listings':  'Just 1.3% new listing growth despite a 9.4% rent price signal confirms the supply response was negligible. This directly measures the inelasticity: a large price rise produced almost no quantity response – the definition of low PES.',
      'landlords': 'Landlord exit reduced the existing stock of rental properties simultaneously with rising demand. This is a supply contraction – not just slow supply growth. It complicates the PES explanation because the rent spike reflects both inelastic new supply and a shrinking existing supply, not PES alone.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The 9.4% rent rise from just 1.3% listing growth confirms that supply is highly price inelastic: PES ≈ 0.2 in the short run because new builds take 24–36 months from planning to completion. However, the rent spike also reflects landlord exit from the sector – a simultaneous supply contraction that compounds the PES constraint and complicates a pure PES explanation."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'          },
      { icon: '❓', text: 'Ask which details change the conclusion'        },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};

/* ---- link-depends.js ---- */
/* ============================================================
   ECONOS – Link It · It Depends On station data
   PES: evaluate whether low PES is the primary cause of UK rent rises 2022–23
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Price Elasticity of Supply',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether low PES is truly the primary driver of the rent spike.',
  nextUrl:     TopicLoader.routes.link('judge'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'pes-housing-depends',
      claim: {
        icon:   '🏠',
        prompt: 'Policy claim',
        text:   'Low PES of rental housing is the main reason UK rents outpaced inflation.'
      },
      factors: [
        {
          id:    'construction-time',
          icon:  '🏗️',
          label: 'Length of construction and planning lead times',
          why:   'New homes take 24–36 months from planning to completion in England. This creates an almost fixed supply in the short run regardless of the strength of the price signal. Faster planning approval and modular construction would raise PES and moderate the rent rise. This is the structural root cause of low PES.'
        },
        {
          id:    'landlord-exit',
          icon:  '🚪',
          label: 'Rate of landlord exit from the rental sector',
          why:   'Rising mortgage costs and increased regulation (EPC requirements, Renters\' Reform Bill) pushed landlords to sell properties rather than rent them. This reduced the stock of rental supply at the same time as demand surged – a simultaneous inward shift of supply compounding the PES constraint. It partly explains the rent spike independently of new supply elasticity.'
        },
        {
          id:    'planning-system',
          icon:  '📋',
          label: 'Rigidity of the planning system',
          why:   'England\'s discretionary planning system gives local authorities wide scope to refuse or delay applications. Even approved developments face legal challenges and conditions that extend lead times. A more rules-based (zonal) planning system – as in the Netherlands or Japan – produces higher PES and more responsive supply. Planning rigidity is a key determinant of low PES.'
        },
        {
          id:    'financing',
          icon:  '💰',
          label: 'Availability and cost of development finance',
          why:   'Rising interest rates (Bank Rate from 0.1% to 5.25% in 2021–23) raised the cost of development finance. Developers became more cautious about starting new projects, further reducing supply responsiveness to the rent price signal. High financing costs reduce PES by making new development less viable even when rents are high.'
        },
        {
          id:    'demand-composition',
          icon:  '👥',
          label: 'Composition of demand (short-term renters vs families)',
          why:   'Student and young professional demand (short-term, flexible) is more price elastic than family demand (longer-term, needs space). The composition of the demand surge matters: predominantly young renter demand raises rents in studio/1-bed markets more than family homes, affecting PES in different market segments differently.'
        },
        {
          id:    'geographic',
          icon:  '📍',
          label: 'Geographic concentration of demand',
          why:   'Migration and urban return concentrated demand in London and major cities where land is scarce and planning constraints are most severe. PES is lower in high-density cities than in suburban or rural areas. The rent crisis was partly a geographic mismatch between where supply can be added and where demand is concentrated.'
        },
        {
          id:    'rent-control',
          icon:  '⚖️',
          label: 'Impact of rent controls in reducing supply',
          why:   'Scotland introduced rent control measures in 2022. Evidence suggests this accelerated landlord exits and reduced new investment, further lowering effective supply. Where rent controls are introduced elsewhere, they reduce the incentive to build, worsening PES over time – a policy intervention that can compound the original PES problem.'
        },
        {
          id:    'lr-elasticity',
          icon:  '⏳',
          label: 'Short-run vs long-run PES distinction',
          why:   'In the very long run (5–10 years), PES for housing rises significantly as supply responds to sustained high prices – more planning permissions granted, more build-to-rent investment, densification permitted. The rent crisis is partly a short-run phenomenon; whether rents stabilise depends on whether supply responds over a longer time horizon. PES is not permanently near zero – it rises as time extends.'
        }
      ],
      modelRanking: ['construction-time', 'landlord-exit', 'planning-system'],
      judgement: '"The primary reason rents rose faster than inflation is the near-zero short-run PES: construction lead times of 24–36 months mean supply is essentially fixed regardless of the strength of the price signal. But PES alone is not sufficient – the landlord exit effect (rising mortgage costs and regulation) simultaneously contracted existing supply, compounding the inelastic new supply problem. Planning system reform addresses the structural PES constraint, but only over a multi-year horizon."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   PES: demand shifts right, near-vertical inelastic supply, steep price rise
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   S (steep/inelastic, PES ≈ 0.2): x1=200,y1=390, x2=290,y2=30  ⟹  y = 1190 - 4x
     verify: x=200 → y=1190-800=390 ✓; x=290 → y=1190-1160=30 ✓
   D₁ (original demand): x1=110,y1=90, x2=500,y2=363  slope≈0.7  ⟹  y = 13 + 0.7x
     verify: x=110 → y=13+77=90 ✓; x=500 → y=13+350=363 ✓
   D₂ (new demand, shifted right 60px): x1=170,y1=90, x2=543,y2=351  ⟹  y = -27 + 0.7x
     verify: x=170 → y=-27+119=92≈90; x=543 → y=-27+380=353≈351
   E₁ (S ∩ D₁): 1190-4x = 13+0.7x → 1177=4.7x → x≈250.4, y=1190-1002=188  → E₁=(250,188)
   E₂ (S ∩ D₂): 1190-4x = -27+0.7x → 1217=4.7x → x≈259.0, y=1190-1036=154  → E₂=(259,154)
   Key visual: x changes 9px (tiny Q rise), y changes 34px (large P rise) – inelastic supply confirmed */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Price Elasticity of Supply',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('depends'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: -1,

  /* ── Stage 0: Select the right diagram ── */
  select: {
    eyebrow:     'Diagram Connector – Select the Diagram',
    title:       'Net migration surges, driving up rental demand. Housing supply is highly price inelastic in the short run. Which diagram correctly shows the market outcome?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the effect of the demand surge. Think about which curve shifts and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      'd-right',
        correct:  true,
        title:   'Demand shifts right',
        sub:     'Demand shifts right – rents rise steeply because inelastic supply cannot respond',
        why:     'Net migration and post-COVID urban return are non-price demand factors – they shift the demand curve right. At the original rent, quantity demanded exceeds quantity supplied. Rents rise until the market clears at the new equilibrium. Because PES ≈ 0.2 (near-vertical supply), almost all adjustment is through higher rents rather than more housing.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Supply expands – more housing at every price level',
        why:     'Supply shifting right would represent an increase in rental supply – for example, from a successful house-building programme. The scenario describes the problem: supply is constrained by long construction lead times and cannot respond quickly. Supply has not expanded; it is the demand that has surged.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Falling demand reduces rents and quantity',
        why:     'Demand shifting left represents a fall in the number of households seeking rental accommodation – perhaps due to falling incomes or population decline. This is the opposite of the scenario: record net migration and urban return increased rental demand sharply.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Supply contracts – rents rise and quantity falls',
        why:     'Supply shifting left would be the landlord exit effect – a real complicating factor in 2022–23. But the primary diagram for a demand surge with inelastic supply is a rightward demand shift, not a leftward supply shift. The steep (near-vertical) supply curve already captures the inelastic response; it does not need to shift left to model low PES.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🏠',
    text:  'UK net migration: 745,000 in 2023. New rental listings up only 1.3%. Rents up 9.4%.',
    dataPoints: [
      { icon: '📈', text: 'PES for rental housing ≈ 0.2 in short run (24–36 month build cycle)' },
      { icon: '🔴', text: 'Excess demand: more renters than available properties' },
      { icon: '💸', text: 'Rents rose 9.4% (ONS 2023) – fastest on record' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – demand shifts right with near-vertical inelastic housing supply, producing a steep rent rise and tiny quantity increase',
    xLabel:    'Quantity of rental properties',
    yLabel:    'Rent (£)',

    lines: [
      /* S – near-vertical (PES ≈ 0.2, highly inelastic supply) */
      { x1: 200, y1: 390, x2: 290, y2: 30,  stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'S (PES ≈ 0.2)', labelX: 294, labelY: 28, labelFill: '#7c3aed' },
      /* D₁ – original demand, downward-sloping */
      { x1: 110, y1: 90,  x2: 500, y2: 363, stroke: '#059669', strokeWidth: 2.5,
        label: 'D₁', labelX: 504, labelY: 363, labelFill: '#059669' },
      /* D₂ – new demand, shifted right ~60px */
      { x1: 170, y1: 90,  x2: 543, y2: 351, stroke: '#d97706', strokeWidth: 2.5,
        label: 'D₂', labelX: 545, labelY: 349, labelFill: '#d97706' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₂ (new equilibrium, higher rent) */
      { x1: 100, y1: 154, x2: 259, y2: 154, tickLeft: 'P₂', tickLeftY: 157 },
      /* Horizontal from y-axis to E₁ (original equilibrium) */
      { x1: 100, y1: 188, x2: 250, y2: 188, tickLeft: 'P₁', tickLeftY: 191 },
      /* Vertical from E₂ down to x-axis */
      { x1: 259, y1: 154, x2: 259, y2: 400, tickBottom: 'Q₂', tickBottomX: 259 },
      /* Vertical from E₁ down to x-axis */
      { x1: 250, y1: 188, x2: 250, y2: 400, tickBottom: 'Q₁', tickBottomX: 250 }
    ],

    /* Shift arrow: horizontal, pointing right, showing D shifts right */
    shiftArrow: { x1: 280, y1: 110, x2: 340, y2: 110, stroke: '#d97706' },

    eqDots: [
      {
        cx: 250, cy: 188, fill: '#059669',
        initLabel: 'Original rent', initLabel2: 'equilibrium', initLabelX: 257, initLabelY: 183
      },
      {
        cx: 259, cy: 154, fill: '#d97706',
        newLabel: 'New rent', newLabel2: 'equilibrium', newLabelX: 266, newLabelY: 149
      }
    ],

    legend: [
      { color: '#059669', text: 'D₁ = Original demand for rental housing' },
      { color: '#d97706', text: 'D₂ = New demand (after migration surge)' },
      { color: '#7c3aed', text: 'S = Supply of rental housing (PES ≈ 0.2 in SR – highly inelastic)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of a demand surge on the rental housing market with inelastic supply.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for rent and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',       label: 'Shift label',                  pctX: 54,  pctY: 18,   pctW: 22 },
      { id: 'new-eq',      label: 'New equilibrium',               pctX: 47,  pctY: 28,   pctW: 20 },
      { id: 'orig-eq',     label: 'Original equilibrium',          pctX: 44,  pctY: 38,   pctW: 22 },
      { id: 'hi-price',    label: 'Sharply higher rent (P₂)',       pctX: 0.5, pctY: 28,   pctW: 17 },
      { id: 'lo-qty-rise', label: 'Tiny quantity rise (Q₂ ≈ Q₁)',  pctX: 42,  pctY: 93.5, pctW: 22 }
    ],

    chips: [
      { id: 'dem-right',   text: 'Demand shifts right',              icon: '→', zone: 'shift',       correct: true  },
      { id: 'new-eq',      text: 'New equilibrium (higher rent P₂)', icon: '●', zone: 'new-eq',      correct: true  },
      { id: 'orig-eq',     text: 'Original equilibrium (Q₁, P₁)',    icon: '●', zone: 'orig-eq',     correct: true  },
      { id: 'hi-price',    text: 'Sharply higher rent (P₂)',         icon: '↑', zone: 'hi-price',    correct: true  },
      { id: 'lo-qty-rise', text: 'Tiny quantity rise (Q₂ ≈ Q₁)',    icon: '→', zone: 'lo-qty-rise', correct: true  },
      { id: 'sup-right',   text: 'Supply shifts right',              icon: '→', zone: null,          correct: false },
      { id: 'large-qty',   text: 'Large quantity increase',          icon: '↑', zone: null,          correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['price elasticity of supply', 'PES', 'supply response', 'price signal', 'inelastic', 'demand shift', 'equilibrium', 'consumer surplus', 'producer surplus', 'planning permission'],

    parts: [
      {
        num:         1,
        title:       'What does the steep supply curve represent?',
        prompt:      'What does the steep supply curve represent?',
        maxChars:    240,
        modelAnswer: 'PES is approximately 0.2 in the SR. The near-vertical supply line means that for any price increase, quantity supplied barely rises – because new builds take 24–36 months from planning to completion. Even a large rent rise sends a weak price signal that cannot unlock more housing quickly.'
      },
      {
        num:         2,
        title:       'What happens to rent and quantity when demand shifts right?',
        prompt:      'What happens to rent and quantity when demand shifts right?',
        maxChars:    240,
        modelAnswer: 'E₂ is almost directly above E₁: rent rises sharply from P₁ to P₂ while quantity increases only marginally from Q₁ to Q₂. Almost all of the demand shock is absorbed by higher rents, not by more housing – consistent with PES ≈ 0.2 in the short run.'
      },
      {
        num:         3,
        title:       'What are the welfare effects and what policy could help?',
        prompt:      'What are the welfare effects and what policy could help?',
        maxChars:    240,
        modelAnswer: 'Consumer surplus for tenants falls substantially – they pay higher rents for essentially the same housing. Landlords and developers gain. To restore equilibrium at lower rents, policy must increase supply elasticity: faster planning approvals, build-to-rent incentives, or social house-building to shift S right over the longer run.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Explain why supply is inelastic (reference time/planning)',
      'Relate PES to the steepness of supply curve',
      'State outcome for P and Q (large price rise, small quantity rise)',
      'Identify welfare or policy implication'
    ],

    examAnswer: '"The demand shift from record migration shifted the rental housing demand curve to the right. Because PES ≈ 0.2 in the short run – reflecting 24–36 month construction lead times – the supply curve is near-vertical. The new equilibrium E₂ is almost directly above E₁: rents rose 9.4% while the quantity of available rentals barely changed. Consumer surplus for tenants fell sharply, while the price signal (higher rents) will only translate into increased supply years later."'
  }
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for pes
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Price Elasticity of Supply',
  estTime: '15–20 minutes',
  goal:    'Bridge your PES knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "Use the UK rental housing shortage of 2022–23 to apply PES – how the responsiveness of supply shapes whether a demand shock causes large price rises, large quantity rises, or both.",
    heroKey: 'heroElasticity',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Identify what determines PES in a real housing context',
      'Build the causal chain from demand surge to price spike via low PES',
      'Read a demand-shift diagram with inelastic supply',
      'Evaluate the conditions under which PES determines market outcomes'
    ],
    tip: "These steps are cognitive drills – same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context', skill: 'Application', sub: 'Read an extract and judge which evidence changes the answer.', href: TopicLoader.routes.link('context'), state: 'available' },
      { num: 2, name: 'Build the chain', skill: 'Analysis', sub: 'Order or fill the steps in a reasoning chain.', href: TopicLoader.routes.link('chain'), state: 'available' },
      { num: 3, name: 'Calculate It', skill: 'Analysis', sub: 'Work through the calculations with revealable methods.', href: TopicLoader.routes.link('calc'), state: 'available' },
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
   PES: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Price Elasticity of Supply',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.routes.link('complete'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
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
      id: 'pes-housing-judgement',
      claim: {
        icon:   '🏠',
        prompt: 'Policy claim',
        text:   'The low price elasticity of supply of rental housing is the primary reason UK rents rose faster than inflation in 2022–23.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '745,000 net migrants; rents up 9.4% (ONS); new listings up only 1.3% (Rightmove); landlords exiting sector.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Demand surge → excess demand at existing rents → price signal → slow supply response (PES ≈ 0.2) → rents stay elevated.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'D shifts right → near-vertical S → E₂ almost directly above E₁ → large rent rise, tiny quantity rise.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Construction lead times, landlord exit, planning rigidity – all modify how much PES alone explains.' }
      ],
      cloze: 'When demand for rental housing increases, the effect on rent vs quantity supplied depends on [1]. A near-vertical supply curve (PES ≈ 0.2) means most of the demand shock is absorbed by [2] rises rather than [3] increases. In the UK rental market, supply could not respond quickly because new housing takes [4] months to build – reflecting both planning constraints and construction lead times. However, the rent spike was worsened by [5], which reduced the existing stock of rental properties simultaneously. The effectiveness of the price signal as a rationing mechanism depends on whether [6] can respond over the medium term. Therefore, the strongest judgement is that low short-run PES is the primary cause, but [7] worsened the short-run position, and [8] reform is the most effective long-run policy response.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-pes',    text: 'price elasticity of supply (PES)', correct: true  },
            { id: 'b1-yed',    text: 'income elasticity',                correct: false },
            { id: 'b1-ped',    text: 'price elasticity of demand (PED)', correct: false },
            { id: 'b1-xed',    text: 'cross-price elasticity',           correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-rent',   text: 'rent (price)',        correct: true  },
            { id: 'b2-qty',    text: 'quantity',            correct: false },
            { id: 'b2-gov',    text: 'government revenue',  correct: false },
            { id: 'b2-conf',   text: 'consumer confidence', correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-qty',    text: 'quantity',      correct: true  },
            { id: 'b3-price',  text: 'price',         correct: false },
            { id: 'b3-tax',    text: 'tax revenue',   correct: false },
            { id: 'b3-emp',    text: 'employment',    correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-2436',   text: '24–36',  correct: true  },
            { id: 'b4-36',     text: '3–6',    correct: false },
            { id: 'b4-612',    text: '6–12',   correct: false },
            { id: 'b4-4872',   text: '48–72',  correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-exit',   text: 'landlord exit',                  correct: true  },
            { id: 'b5-rent',   text: 'government rent controls',       correct: false },
            { id: 'b5-tax',    text: 'mortgage interest tax relief',   correct: false },
            { id: 'b5-mig',    text: 'immigration restrictions',       correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-supply', text: 'new housing supply',      correct: true  },
            { id: 'b6-ad',     text: 'aggregate demand',        correct: false },
            { id: 'b6-mp',     text: 'monetary policy',         correct: false },
            { id: 'b6-conf',   text: 'consumer confidence',     correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-contr',  text: 'simultaneous supply contraction (landlord exit)', correct: true  },
            { id: 'b7-ped',    text: 'rising PED for housing',                          correct: false },
            { id: 'b7-conf',   text: 'falling consumer confidence',                     correct: false },
            { id: 'b7-mon',    text: 'monetary tightening',                             correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-plan',   text: 'planning system',  correct: true  },
            { id: 'b8-rent',   text: 'rent control',     correct: false },
            { id: 'b8-dep',    text: 'deposit scheme',   correct: false },
            { id: 'b8-mp',     text: 'monetary policy',  correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-all',     text: 'Low PES is entirely responsible for the rent crisis – no other factors matter',                                   correct: false },
          { id: 'op-primary', text: 'Low PES is the primary structural cause, but landlord exit and planning rigidity compound the effect',            correct: true  },
          { id: 'op-demand',  text: 'High demand growth is more important than supply constraints for explaining rent rises',                          correct: false },
          { id: 'op-rent',    text: 'Rent controls are the most effective policy response to a PES problem',                                           correct: false }
        ]
      },
      examBridge: '"The near-zero short-run PES of UK rental housing explains why a demand surge (745,000 net migrants) translated almost entirely into higher rents rather than more housing. The steep supply curve means E₂ is almost directly above E₁ – quantity barely rises while price rises sharply. The primary policy implication is supply-side reform: faster planning, build-to-rent incentives and reduced landlord regulation to raise PES over the medium run."'
    }
  ]
};

