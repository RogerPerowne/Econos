/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   Consumer & Producer Surplus: supply shift → CS gain → welfare assessment
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Consumer & Producer Surplus',
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
      id: 'bus-subsidy-chain',
      scenario: {
        icon:  '🚌',
        label: 'Scenario',
        text:  'The UK government introduces a per-unit operating subsidy to bus operators. Bus operators receive a fixed payment for each journey provided, reducing their effective marginal cost.'
      },
      anchor: 'Per-unit subsidy to operators cuts MC → more journeys at lower fares.',
      tiles: [
        {
          id:  'step-supply',
          icon: '📊',
          text: 'Subsidy cuts MC → supply shifts right (S₁ → S₂)',
          pos:  0
        },
        {
          id:  'step-eq',
          icon: '📉',
          text: 'New equilibrium: fare P₁ → P₂, quantity Q₁ → Q₂ → CS expands',
          pos:  1
        },
        {
          id:  'step-welfare',
          icon: '⚖️',
          text: 'CS rises; cost = subsidy × Q₂; net gain hinges on externality value',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🚗',
          text: 'Demand for bus travel shifts right as petrol prices rise',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '🏛️',
          text: 'The government imposes a maximum fare (price ceiling) on bus operators',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '⚡',
          text: 'New electric buses reduce production costs without any subsidy',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'The per-unit subsidy is a payment to operators for each bus journey provided. This reduces their effective marginal cost – the amount they need to receive from fares to cover costs falls by the subsidy amount. At every fare level they can profitably run more services, so the supply curve shifts right from S₁ to S₂.'
        },
        {
          pos:  1,
          text: 'With supply shifted right, the new market equilibrium is at a lower fare P₂ and higher quantity Q₂. Consumers who were previously priced out of bus travel can now afford to travel – consumer surplus expands by the area between P₁ and P₂ up to the demand curve (a rectangle plus a new triangle).'
        },
        {
          pos:  2,
          text: 'The subsidy cost to government is (P₁ − P₂) × Q₂ – the subsidy per unit multiplied by all journeys. This exceeds the private CS gain alone. However, if bus travel generates positive externalities (congestion relief, carbon reduction), the social benefit exceeds the private CS gain. The DfT\'s £2.40/£1 return estimate implies net welfare is positive when externalities are included.'
        }
      ],
      examBridge: '"A per-unit bus subsidy shifts supply right from S₁ to S₂, lowering fares from P₁ to P₂ and increasing quantity from Q₁ to Q₂. Consumer surplus rises by the area between P₁ and P₂ up to the demand curve – more passengers travel at a lower fare. The subsidy cost is (P₁ − P₂) × Q₂ (subsidy rectangle). Net welfare gain materialises when the CS increase plus the positive externality benefits exceeds the taxpayer cost."',

      prompts: [
        'Why does the per-unit subsidy shift supply right rather than demand right?',
        'How does consumer surplus change when fares fall from P₁ to P₂?',
        'How do positive externalities affect the welfare case for the subsidy?'
      ],
      modelAnswers: [
        'The subsidy is paid to bus operators, not consumers – it reduces the operators\' effective marginal cost. Each operator can now profitably supply more journeys at any given fare, so the supply curve shifts right. Consumer demand (willingness to pay) is unchanged.',
        'When fares fall from P₁ to P₂, existing passengers gain surplus equal to (P₁ − P₂) × Q₁ – the fare reduction on their existing journeys. New passengers who board at P₂ but not P₁ add a further triangle of CS. Total CS rises by the area between P₁ and P₂ below the demand curve up to Q₂.',
        'If bus travel creates positive externalities (fewer car journeys → congestion relief, lower carbon), MSB > MPB. The market under-provides bus travel even without the subsidy. The subsidy corrects this: moving output toward Q* (where MSB = MSC) improves allocative efficiency and the total welfare gain exceeds the private CS calculation alone.'
      ],
      vocab: ['consumer surplus', 'producer surplus', 'per-unit subsidy', 'supply shift', 'welfare triangle', 'deadweight welfare loss', 'allocative efficiency', 'positive externality', 'marginal social benefit']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Consumer & Producer Surplus
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Consumer & Producer Surplus',
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

  useInLandIt: 'When supply shifts right (via subsidy), price falls and CS rises. The welfare case requires MSB > MPC (positive externality justification). Always quantify the CS change (area above new P below D) and compare with subsidy cost (subsidy per unit × Q₂) to assess net welfare effect.',

  focusInLandIt: {
    context: 'Use specific evidence – the £2.5bn subsidy and the DfT\'s £2.40/£1 return – to anchor your application to the real-world bus case, not just generic surplus theory.',
    chain:   'State the chain explicitly: per-unit subsidy → operators\' effective MPC falls → supply shifts right S₁ to S₂ → fare falls P₁ to P₂ → CS expands by area between prices below demand curve.',
    diagram: 'Draw all three lines (D, S₁, S₂), label both equilibria (Q₁/P₁ and Q₂/P₂), and shade the CS gain rectangle plus triangle between P₁ and P₂ below the demand curve.',
    depends: 'Lead with positive externality size as your key condition – the allocative efficiency argument only holds if MSB genuinely exceeds MPB, making the subsidy a correction rather than a distortion.',
    judge:   'State a clear position, use the mechanism (supply right → fare falls → CS rises), add the condition (positive externalities must justify the cost), and explain the limitation (pass-through rate, PED) honestly.'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   Consumer & Producer Surplus: classify evidence on the UK bus subsidy
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Consumer & Producer Surplus',
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
    question:    'Which details in this extract most change whether per-unit operating subsidies on public bus services increase consumer surplus and improve allocative efficiency?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'The UK government and local authorities spend approximately [[spend|£2.5bn per year on bus subsidies and concessionary fares]] (DfT 2023), reflecting a long-standing policy commitment to keeping public transport affordable for consumers.',
      'Average bus fares rose [[fares-london|75% in real terms outside London (2005–22), while London fares held stable]] under higher TfL subsidy – consistent with the view that a larger subsidy produces a larger consumer surplus gain.',
      'UK bus passenger journeys outside London [[journeys|fell 46% between 2005 and 2022, compared with a 10% fall in London]] – a difference attributable, in part, to the higher subsidy level maintained in the capital.',
      'The UK Department for Transport estimates that [[dft-ratio|each £1 of bus subsidy generates approximately £2.40 in economic benefits]], suggesting that the consumer surplus gain plus positive externality benefits exceed the taxpayer cost at the margin.',
      'The 2023 English bus reform found that [[routing|deregulated operators cut unprofitable routes regardless of subsidy]] – raising the question of whether a per-unit subsidy can sustain service on routes where demand is insufficient.'
    ],

    evidence: {
      'spend':      { text: '£2.5bn per year on bus subsidies and concessionary fares' },
      'fares-london': { text: '75% in real terms outside London (2005–22), while London fares held stable' },
      'journeys':   { text: 'fell 46% between 2005 and 2022, compared with a 10% fall in London' },
      'dft-ratio':  { text: 'each £1 of bus subsidy generates approximately £2.40 in economic benefits' },
      'routing':    { text: 'deregulated operators cut unprofitable routes regardless of subsidy' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the claim',      tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against the claim', tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case',     tone: 'blue',  icon: '?' }
    ],

    correct: {
      'spend':        'supports',
      'fares-london': 'supports',
      'journeys':     'supports',
      'dft-ratio':    'supports',
      'routing':      'complicates'
    },

    explain: {
      'spend':        'The scale of the subsidy (£2.5bn/yr) confirms it is a significant policy instrument, consistent with government intent to expand consumer access to bus travel and increase CS.',
      'fares-london': 'Higher subsidy in London kept fares stable – directly supporting the claim that larger subsidies prevent fare rises and protect consumer surplus for existing passengers.',
      'journeys':     'The contrast between London (−10%) and non-London (−46%) passenger journeys implies that subsidy-supported lower fares preserve both the quantity of travel and the associated consumer surplus.',
      'dft-ratio':    'A £2.40 return per £1 of subsidy implies the CS gain plus positive externality benefits exceed the taxpayer cost, supporting the allocative efficiency claim.',
      'routing':      'If operators withdraw from unprofitable routes even when subsidised, the supply shift is incomplete – some passengers lose access entirely, limiting the CS gain and complicating the allocative efficiency argument.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The £2.40/£1 return estimate strongly supports the allocative efficiency claim for bus subsidies, and the London–non-London comparison shows that higher subsidies do translate into better CS outcomes. However, the routing problem complicates the analysis: if operators withdraw from unprofitable routes despite subsidy, the supply shift is smaller than the diagram implies and the CS gain is reduced."',

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
   Consumer & Producer Surplus: evaluate the bus subsidy welfare claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Consumer & Producer Surplus',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether a per-unit bus subsidy actually maximises consumer welfare.',
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
      id: 'bus-subsidy-welfare',
      claim: {
        icon:   '🚌',
        prompt: 'Policy claim',
        text:   'Per-unit bus subsidies raise consumer surplus and allocative efficiency.'
      },
      factors: [
        {
          id:    'ped-bus',
          icon:  '📉',
          label: 'Price elasticity of demand for bus travel',
          why:   'If demand is price inelastic (short-run bus commuters with no alternative), a fare reduction increases CS mainly through the price reduction on existing journeys rather than attracting many new users. If demand is elastic, more new passengers board, expanding CS further. PED determines how much of the subsidy transfers to consumers vs simply increasing operator margins.'
        },
        {
          id:    'positive-ext',
          icon:  '🌿',
          label: 'Size of positive externalities from bus travel',
          why:   'The allocative efficiency case for the subsidy depends on MSB > MPB. The external benefits (congestion relief, carbon reduction, access for car-free households) must be significant enough to justify the taxpayer cost. If external benefits are small, the subsidy causes overproduction rather than correcting underproduction.'
        },
        {
          id:    'operator-efficiency',
          icon:  '🚌',
          label: 'Operator efficiency and pass-through rate',
          why:   'A per-unit subsidy reduces operators\' costs, but operators may not pass all the saving to passengers in the form of lower fares – they may retain it as profit. The proportion of the subsidy that becomes lower fares (rather than higher margins) determines how much CS rises. In deregulated markets, pass-through may be incomplete.'
        },
        {
          id:    'routing',
          icon:  '📍',
          label: 'Which routes receive the subsidy',
          why:   'Subsidies concentrated on profitable urban routes mainly boost CS for passengers who already had service. The welfare gain is highest when subsidies enable unprofitable socially necessary routes (rural, off-peak) to operate – serving passengers with no alternative. Geographic targeting of subsidy determines welfare impact.'
        },
        {
          id:    'alternative-modes',
          icon:  '🚗',
          label: 'Availability of alternative transport modes',
          why:   'If car ownership is high and petrol relatively cheap, bus fare reductions attract few new passengers – limiting the CS gain and the congestion relief externality. In dense cities with poor car access (e.g., London), bus demand is more elastic and fare reductions attract more new riders, maximising CS gain.'
        },
        {
          id:    'government-cost',
          icon:  '💷',
          label: 'Opportunity cost of public funding',
          why:   'Subsidy funding comes from taxation, which has an opportunity cost. If the £2.5bn spent on bus subsidies could generate a higher welfare return in healthcare or education, the subsidy is inefficient even if it raises bus CS. Full welfare accounting must compare the subsidy benefit against alternative uses of public funds.'
        },
        {
          id:    'crowding-out',
          icon:  '🏢',
          label: 'Crowding-out of private sector bus operators',
          why:   'Government subsidy to publicly franchised operators may deter private entry that could provide lower-cost services without subsidy. If subsidy creates market dependency or barriers to entry, long-run efficiency losses may outweigh short-run CS gains.'
        },
        {
          id:    'temporal',
          icon:  '⏱️',
          label: 'Whether demand and cost conditions are stable over time',
          why:   'A subsidy calibrated for current cost and demand conditions may become miscalibrated as fuel costs, technology (electric buses) and passenger patterns change. Ongoing subsidy review is needed to ensure the welfare gain persists – a fixed per-unit subsidy may over- or under-correct as conditions change.'
        }
      ],
      modelRanking: ['positive-ext', 'ped-bus', 'operator-efficiency'],
      judgement: '"Whether bus subsidies improve allocative efficiency depends fundamentally on whether MSB genuinely exceeds MPB – i.e., whether positive externalities are large enough to justify the taxpayer cost. If they are, the subsidy moves output toward Q*, raising CS and net welfare. But the PED for bus travel determines how much new ridership the lower fare attracts, and the pass-through rate determines whether operators share the subsidy benefit with passengers or retain it as profit."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Consumer & Producer Surplus: per-unit bus subsidy shifts supply right
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   D (MSB): (110,50)→(510,380)  slope = 0.825  ⟹  y = −40.75 + 0.825x
   S₁:      (130,390)→(490,30)  slope = −1.0   ⟹  y = 520 − x
   S₂:      (210,390)→(543,57)  80px right shift ⟹  y = 600 − x
   E₁ (D ∩ S₁): x ≈ 307, y ≈ 213  (original higher fare)
   E₂ (D ∩ S₂): x ≈ 351, y ≈ 249  (new lower fare – higher SVG y = lower price) */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Consumer & Producer Surplus',
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
    title:       'The government introduces a per-unit operating subsidy for bus operators. Which diagram correctly shows the effect on the bus travel market?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the subsidy. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      's-right',
        correct:  true,
        title:   'Supply shifts right',
        sub:     'Supply shifts right – subsidy reduces effective costs, lowering fares and increasing bus journeys',
        why:     'A per-unit subsidy is paid to bus operators, reducing their effective marginal cost. At every fare level, operators can now profitably supply more journeys – supply shifts right from S₁ to S₂. Fares fall from P₁ to P₂ and journeys rise from Q₁ to Q₂, expanding consumer surplus.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Supply falls – wrong direction for a subsidy',
        why:     'Supply shifting left means producers face higher costs and supply less. A per-unit subsidy reduces costs – the opposite of a tax. A leftward supply shift would represent a cost increase (e.g. fuel price rise or a Pigouvian tax), not a government subsidy to operators.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Demand rises – but the subsidy goes to the producer, not the consumer',
        why:     'The bus subsidy is paid to operators, not passengers. Consumer willingness to pay is unchanged – demand does not shift. A rightward demand shift would represent rising consumer income or a change in preferences (e.g. higher petrol prices attracting more bus users), not a production subsidy.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Demand falls – wrong: no mechanism causes demand to fall',
        why:     'Nothing in the subsidy mechanism reduces consumer demand for bus travel. A leftward demand shift would require a fall in consumer income, a fall in petrol prices (reducing the incentive to use buses), or a negative preference shift – none of which is caused by a government operating subsidy.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🚌',
    text:  'UK bus operating subsidy: £2.5bn/yr. DfT estimates £2.40 return per £1 subsidy. London (high subsidy) saw fares stable; non-London fell 46% in journeys.',
    dataPoints: [
      { icon: '💰', text: 'Subsidy = per-unit reduction in operators\' marginal cost' },
      { icon: '📈', text: 'Fare falls from P₁ to P₂; quantity rises from Q₁ to Q₂' },
      { icon: '🌿', text: 'Positive externalities: congestion relief, lower carbon' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – per-unit bus subsidy shifts supply right, lowering fares and raising quantity',
    xLabel:    'Quantity of bus journeys',
    yLabel:    'Fare / Cost (£)',

    lines: [
      /* D (MSB) – green downward-sloping */
      { x1: 110, y1: 50,  x2: 510, y2: 380, stroke: '#059669', strokeWidth: 2.5,
        label: 'D (MSB)', labelX: 514, labelY: 380, labelFill: '#059669' },
      /* S₁ (before subsidy) – blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S₁', labelX: 494, labelY: 28, labelFill: '#2563eb' },
      /* S₂ (after subsidy, 80px right shift) – purple upward-sloping */
      { x1: 210, y1: 390, x2: 543, y2: 57,  stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'S₂', labelX: 545, labelY: 55, labelFill: '#7c3aed' }
    ],

    /* Guide lines + tick labels */
    guides: [
      /* Horizontal from y-axis to E₁ (original higher fare P₁) */
      { x1: 100, y1: 213, x2: 307, y2: 213, tickLeft: 'P₁', tickLeftY: 216 },
      /* Horizontal from y-axis to E₂ (new lower fare P₂) */
      { x1: 100, y1: 249, x2: 351, y2: 249, tickLeft: 'P₂', tickLeftY: 252 },
      /* Vertical from E₁ down to x-axis */
      { x1: 307, y1: 213, x2: 307, y2: 400, tickBottom: 'Q₁', tickBottomX: 307 },
      /* Vertical from E₂ down to x-axis */
      { x1: 351, y1: 249, x2: 351, y2: 400, tickBottom: 'Q₂', tickBottomX: 351 }
    ],

    /* Shift arrow: S₁ toward S₂ at y=80, pointing right */
    shiftArrow: { x1: 380, y1: 80, x2: 450, y2: 80, stroke: '#7c3aed' },

    eqDots: [
      {
        cx: 307, cy: 213, fill: '#2563eb',
        initLabel: 'Original equilibrium', initLabel2: '(Q₁, P₁)', initLabelX: 314, initLabelY: 208
      },
      {
        cx: 351, cy: 249, fill: '#7c3aed',
        newLabel: 'New equilibrium', newLabel2: '(Q₂, P₂ lower)', newLabelX: 358, newLabelY: 255
      }
    ],

    legend: [
      { color: '#059669', text: 'D (MSB) = Demand for bus travel (Marginal Social Benefit)' },
      { color: '#2563eb', text: 'S₁ = Supply before subsidy (operators\' marginal private cost)' },
      { color: '#7c3aed', text: 'S₂ = Supply after subsidy (MPC − subsidy per unit)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of a per-unit bus operating subsidy.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for fare and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',      label: 'Shift label',              pctX: 62,  pctY: 13,   pctW: 22 },
      { id: 'new-eq',     label: 'New equilibrium',           pctX: 63,  pctY: 49,   pctW: 22 },
      { id: 'orig-eq',    label: 'Original equilibrium',      pctX: 56,  pctY: 42,   pctW: 22 },
      { id: 'orig-price', label: 'Original fare (P₁)',        pctX: 0.5, pctY: 43,   pctW: 15 },
      { id: 'lo-fare',    label: 'Lower fare (P₂)',           pctX: 0.5, pctY: 50,   pctW: 16 }
    ],

    chips: [
      { id: 'sub-shift',  text: 'Supply shifts right (subsidy)', icon: '→', zone: 'shift',      correct: true  },
      { id: 'new-eq',     text: 'New equilibrium (Q₂, P₂)',      icon: '●', zone: 'new-eq',     correct: true  },
      { id: 'orig-eq',    text: 'Original equilibrium (Q₁, P₁)', icon: '●', zone: 'orig-eq',    correct: true  },
      { id: 'orig-price', text: 'Original fare (P₁)',             icon: '−', zone: 'orig-price', correct: true  },
      { id: 'lo-fare',    text: 'Lower fare (P₂)',                icon: '↓', zone: 'lo-fare',    correct: true  },
      { id: 'sup-left',   text: 'Supply shifts left',             icon: '←', zone: null,         correct: false },
      { id: 'dem-right',  text: 'Demand shifts right',            icon: '→', zone: null,         correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['consumer surplus', 'producer surplus', 'per-unit subsidy', 'supply shift', 'welfare triangle', 'deadweight welfare loss', 'allocative efficiency', 'positive externality', 'marginal social benefit'],

    parts: [
      {
        num:         1,
        title:       'Explain the CS change',
        prompt:      'How does consumer surplus change when fares fall from P₁ to P₂?',
        maxChars:    240,
        modelAnswer: 'CS is the area above price and below the demand curve. Before the subsidy: CS = triangle above P₁ below D up to Q₁. After the subsidy: CS expands by the rectangle (P₁ − P₂) × Q₁ plus a small new triangle. More passengers travel at the lower fare P₂, gaining surplus they previously could not access.'
      },
      {
        num:         2,
        title:       'Explain the PS and subsidy cost',
        prompt:      'What happens to producer surplus and what does the subsidy cost?',
        maxChars:    240,
        modelAnswer: 'PS for operators: the subsidy payment supplements revenue. The subsidy cost is the per-unit amount × Q₂ = (the vertical gap between S₁ and S₂) × Q₂. Some of this cost is transfer from taxpayers to operators; some transfers to consumers as lower fares. Net welfare gain = CS gain + positive externality benefit − taxpayer cost.'
      },
      {
        num:         3,
        title:       'Add a wider welfare effect',
        prompt:      'Add one argument about positive externalities and allocative efficiency.',
        maxChars:    240,
        modelAnswer: 'If bus travel creates positive externalities (fewer car journeys, less congestion, lower carbon), MSB > MPB and the market under-provides bus travel even without the subsidy. The subsidy may be justified on allocative efficiency grounds: moving output toward Q* (where MSB = MSC). The DfT\'s £2.40 return per £1 estimate supports a net welfare gain.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Identify CS change (area above P below D)',
      'Explain direction of supply shift and why',
      'State outcome for fare (P) and quantity (Q)',
      'Assess net welfare effect including externalities'
    ],

    examAnswer: '"A per-unit bus operating subsidy shifts supply right from S₁ to S₂, lowering fares from P₁ to P₂ and raising journeys from Q₁ to Q₂. Consumer surplus expands by the area between P₁ and P₂ up to the demand curve – additional passengers gain access to bus travel. The subsidy costs taxpayers (subsidy × Q₂), but if positive externalities (congestion relief, carbon reduction) push MSB above the demand curve, the welfare gain to society exceeds the transfer cost. The DfT estimate of £2.40 benefit per £1 subsidy is consistent with a net welfare improvement."'
  }
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for consumer_producer_surplus
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Consumer & Producer Surplus',
  estTime: '15–20 minutes',
  goal:    'Bridge your surplus knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "Use the UK bus subsidy to analyse how consumer surplus and producer surplus change when supply shifts right – and whether the combined welfare gain justifies the public cost.",
    heroKey: 'heroBars',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Calculate and compare CS before and after a supply shift',
      'Trace how CS and PS redistribute when price falls',
      'Evaluate whether a subsidy creates net welfare gain or net loss',
      'Identify conditions under which the welfare gain is maximised'
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
   Consumer & Producer Surplus: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Consumer & Producer Surplus',
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
      id: 'bus-subsidy-judgement',
      claim: {
        icon:   '🚌',
        prompt: 'Policy claim',
        text:   'Per-unit operating subsidies on public bus services increase consumer surplus and improve allocative efficiency by bringing fares closer to the social optimum.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '£2.5bn/yr subsidy; DfT £2.40/£1 return; London (high subsidy) fares stable; non-London journeys −46%.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Subsidy → supply right (S₁ → S₂) → fare falls P₁ to P₂ → CS expands → welfare gain requires MSB > MPC.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'Supply shifts right → fare falls from P₁ to P₂, quantity rises Q₁ to Q₂, CS area expands.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on positive externality size, PED for bus travel, and operator pass-through rate.' }
      ],
      cloze: 'A per-unit bus operating subsidy reduces operators\' effective costs, shifting the supply curve to the [1] from S₁ to S₂. This lowers fares from P₁ to [2] and increases bus journeys from Q₁ to Q₂. Consumer surplus [3] by the area between P₁ and P₂ up to the demand curve – more passengers can afford to travel. The subsidy cost per unit is equal to the [4] between S₁ and S₂ at Q₂. Net welfare gain depends on whether the [5] of bus travel (congestion relief, carbon reduction) justify the taxpayer cost. The policy is most welfare-improving when demand is [6], because fare reductions attract many new passengers and maximise the CS expansion. However, the subsidy may be less effective if operators do not [7] the full cost saving to passengers as lower fares. The strongest judgement is that bus subsidies improve allocative efficiency only when [8] exceeds the social marginal cost of provision.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-right',   text: 'right',   correct: true  },
            { id: 'b1-left',    text: 'left',    correct: false },
            { id: 'b1-up',      text: 'upward',  correct: false },
            { id: 'b1-down',    text: 'downward', correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-p2lo',    text: 'P₂ (lower fare)',    correct: true  },
            { id: 'b2-p2hi',    text: 'P₂ (higher fare)',   correct: false },
            { id: 'b2-pstar',   text: 'P* (social optimum)', correct: false },
            { id: 'b2-pmin',    text: 'P_min (price floor)', correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-rises',   text: 'increases',        correct: true  },
            { id: 'b3-falls',   text: 'decreases',        correct: false },
            { id: 'b3-same',    text: 'stays unchanged',  correct: false },
            { id: 'b3-indet',   text: 'becomes indeterminate', correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-vgap',    text: 'vertical gap',                         correct: true  },
            { id: 'b4-hdist',   text: 'horizontal distance',                  correct: false },
            { id: 'b4-dwl',     text: 'area of the DWL triangle',             correct: false },
            { id: 'b4-rect',    text: 'subsidy rectangle divided by Q₂',      correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-posext',  text: 'positive externalities (MSB > MPB)',   correct: true  },
            { id: 'b5-negext',  text: 'negative externalities',               correct: false },
            { id: 'b5-ied',     text: 'income elasticity',                    correct: false },
            { id: 'b5-ceil',    text: 'price ceiling effects',                correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-elastic', text: 'price elastic',       correct: true  },
            { id: 'b6-inelas',  text: 'price inelastic',     correct: false },
            { id: 'b6-incelas', text: 'income inelastic',    correct: false },
            { id: 'b6-cross',   text: 'cross-price elastic', correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-pass',    text: 'pass through',  correct: true  },
            { id: 'b7-cap',     text: 'capitalise',    correct: false },
            { id: 'b7-with',    text: 'withhold',      correct: false },
            { id: 'b7-tax',     text: 'tax',           correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-msb',     text: 'marginal social benefit (MSB)',  correct: true  },
            { id: 'b8-mpc',     text: 'marginal private cost',          correct: false },
            { id: 'b8-conf',    text: 'consumer confidence',            correct: false },
            { id: 'b8-ps',      text: 'producer surplus',               correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',  text: 'Bus subsidies always maximise consumer welfare regardless of conditions',                                 correct: false },
          { id: 'op-cond',    text: 'Bus subsidies improve allocative efficiency when MSB > MPB and operators pass cost savings to passengers', correct: true  },
          { id: 'op-ps',      text: 'Subsidies always reduce producer surplus',                                                                correct: false },
          { id: 'op-left',    text: 'Consumer surplus only rises when supply shifts left',                                                     correct: false }
        ]
      },
      examBridge: '"A per-unit bus subsidy shifts supply right from S₁ to S₂, lowering fares and raising journeys. CS rises by the area between the original and new price below the demand curve. The welfare case rests on whether MSB (including congestion and carbon externalities) exceeds the taxpayer cost – the DfT\'s £2.40/£1 return estimate suggests it does in aggregate, but pass-through rate and PED determine how evenly the benefit is distributed across current and new passengers."'
    }
  ]
};

