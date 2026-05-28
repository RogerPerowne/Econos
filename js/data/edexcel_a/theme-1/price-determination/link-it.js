/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   Market Equilibrium: build the demand-shift → new equilibrium chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Market Equilibrium',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('predict'),

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
      id: 'housing-demand-shift',
      scenario: {
        icon:  '🏠',
        label: 'Scenario',
        text:  'Population grows and real incomes rise in a major UK city. Demand for housing increases while new supply is slow to respond due to planning restrictions.'
      },
      anchor: 'Rising incomes and population push up housing demand at every price.',
      tiles: [
        {
          id:  'step-shift',
          icon: '📈',
          text: 'Demand shifts right – at existing rent, a shortage emerges',
          pos:  0
        },
        {
          id:  'step-signal',
          icon: '💰',
          text: 'Rents rise → signal of profit to developers; landlords earn more',
          pos:  1
        },
        {
          id:  'step-supply',
          icon: '🏗️',
          text: 'Inelastic supply (PES ≈ 0.4) → quantity adjusts slowly → rents stay high',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🏛️',
          text: 'Government imposes a rent ceiling, freezing rents at the old level',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '💼',
          text: 'Higher wages let workers save more, ending the housing problem',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '⚡',
          text: 'Supply shifts right instantly, restoring the original rent level',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'When incomes rise and population grows, more households can afford to rent and want to rent. At the old equilibrium rent (P₁), quantity demanded now exceeds quantity supplied – a shortage appears. The demand curve has shifted right: at every rent level, more households seek housing than before.'
        },
        {
          pos:  1,
          text: 'The shortage puts upward pressure on rents. As rents rise, the price mechanism sends a signal: developers see rising returns and begin planning new builds; existing landlords earn above-normal returns. This is the price signal at work – higher prices communicate scarcity and attract resources toward housing. Without this signal, there would be no incentive to increase supply.'
        },
        {
          pos:  2,
          text: 'Higher rents do attract some new supply, but the speed of response matters. With PES ≈ 0.4 in London, a 10% rise in rent triggers only a 4% increase in quantity supplied. Planning restrictions, land costs and construction lead times mean the new equilibrium is reached slowly, and at a significantly higher rent than before. Inelastic supply means the price mechanism is weak: rents must rise a lot before quantity supplied increases even a little.'
        }
      ],
      examBridge: '"Rising incomes and population growth shift the demand curve for housing to the right, creating a shortage at the old equilibrium rent and driving rents upward. The price mechanism signals scarcity and attracting new supply – but with price elasticity of supply at only 0.4, quantity responds slowly and the new equilibrium settles at a substantially higher rent with only modestly more housing."',

      prompts: [
        'Why does demand shift right, and what disequilibrium does this create?',
        'How does the price mechanism respond to the housing shortage?',
        'Why does the new equilibrium involve a much higher rent but only a small increase in quantity?'
      ],
      modelAnswers: [
        'Rising incomes increase households\' ability and willingness to pay for housing; population growth increases the number of households seeking accommodation. At the old rent, quantity demanded now exceeds quantity supplied – a shortage – so there is upward pressure on rents.',
        'Rents rise because landlords face excess demand for their properties. Higher rents act as a price signal: they indicate to developers that building new homes is profitable and to existing landlords that they can charge more. This is the price mechanism allocating resources toward a sector where they are needed.',
        'Housing supply is price inelastic (PES ≈ 0.4) because new supply requires planning permission, takes years to build, and depends on expensive land. A large rise in rent causes only a small increase in quantity supplied. The new equilibrium is therefore at a much higher rent (P₂ >> P₁) with only a modest increase in quantity (Q₂ slightly above Q₁).'
      ],
      vocab: ['demand', 'supply', 'equilibrium', 'shortage', 'surplus', 'price mechanism', 'PES', 'PED', 'price signal', 'long run', 'short run']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Market Equilibrium
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Market Equilibrium',
  stations: [
    { id: 'context', label: 'Use the context',     max: 5,  color: '#059669' },
    { id: 'chain',   label: 'Build the chain',     max: 3,  color: '#f59e0b' },
    { id: 'diagram', label: 'Diagram connector',  max: 9, color: '#7c3aed' },
    { id: 'diagram', label: 'Diagram connector',   max: 9,  color: '#7c3aed' },
    { id: 'judge',   label: 'Make the judgement',  max: 8,  color: '#0891b2' }
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
      { min: 55, text: 'Good – check the outcome for rent and quantity' },
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

  useInLandIt: 'A demand increase shifts the demand curve right, creating a shortage at the original price and driving price upward via the price mechanism. With inelastic housing supply (PES ≈ 0.4), the new equilibrium involves a large rent rise and only a modest increase in quantity – demonstrating that the price mechanism is limited when supply is structurally constrained. Rent controls treat the symptom (high price) but not the cause (inelastic supply), and risk worsening the shortage by reducing landlord incentives to supply.',

  focusInLandIt: {
    context: 'Use specific figures from the extract – the 46% rent-to-earnings ratio, the Stockholm 15% supply fall, PES ≈ 0.4 – to anchor your application. Do not rely on generic supply-and-demand language.',
    chain:   'State the chain explicitly: rising incomes and population growth shift D right → shortage at P₁ → rents rise (price signal) → slow supply response (inelastic PES) → new equilibrium at P₂ > P₁ with Q₂ only slightly above Q₁.',
    diagram: 'Draw a steep supply curve to reflect inelastic housing supply. Show D₁ and D₂, label both equilibria (E₁ and E₂), drop dashed lines to both axes, and label P₁, P₂, Q₁, Q₂. The large rise in P relative to the small rise in Q is the key insight – make it visible.',
    depends: 'Lead with landlord exit risk as your primary condition – if landlords withdraw supply under a rent ceiling, the policy worsens the shortage it was designed to cure. Counterbalance with the PES point: inelastic supply means the supply-destruction effect of the ceiling is weaker than in more elastic markets.',
    judge:   'State a clear position, use the mechanism (demand shifts right → price signal → slow supply response), add the key condition (PES and landlord exit risk), and explain the limitation honestly. Conclude that supply-side reform – planning liberalisation, social housing – addresses the root cause more effectively than a price ceiling.'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   Market Equilibrium: classify evidence on rent controls in UK cities
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Market Equilibrium',
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
    question:    'Which details in this extract most change whether a price ceiling (rent control) is an effective policy for making housing more affordable in UK cities?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'Data from the Office for National Statistics confirms that [[shortage|London rents rose 11.2% in 2023; median rent now 46% of median earnings]] – above the 30% threshold economists typically consider affordable.',
      'Advocates of rent control point out that [[short-supply|London completions fell to 29,000 in 2023, below the 66,000 needed]], suggesting that supply-side responses to high prices are structurally constrained by planning restrictions and land costs.',
      'However, economic analysis shows that [[disincentive|Stockholm rent controls cut rental supply 15% over ten years]], as landlords withdrew properties – demonstrating how a price ceiling below equilibrium can shrink the very supply it is meant to make affordable.',
      'New modelling by the Resolution Foundation suggests that [[multiplier|every 10% London rent rise cuts net in-migration from UK regions by 6%]], indicating that high rents impose economic costs beyond individual households – reducing labour market flexibility and productivity.',
      'The London School of Economics notes that [[elastic|long-run PES of London housing ≈ 0.4 vs national 1.2]] – due to planning constraints, green belt restrictions and high land costs.'
    ],

    evidence: {
      'shortage':    { text: 'London rents rose 11.2% in 2023; median rent now 46% of median earnings' },
      'short-supply':{ text: 'London completions fell to 29,000 in 2023, below the 66,000 needed' },
      'disincentive':{ text: 'Stockholm rent controls cut rental supply 15% over ten years' },
      'national-income-and-the-multiplier':  { text: 'every 10% London rent rise cuts net in-migration from UK regions by 6%' },
      'elastic':     { text: 'long-run PES of London housing ≈ 0.4 vs national 1.2' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports rent control',           tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against rent control',     tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way', tone: 'blue',  icon: '?' }
    ],

    correct: {
      'shortage':     'supports',
      'short-supply': 'complicates',
      'disincentive': 'against',
      'national-income-and-the-multiplier':   'supports',
      'elastic':      'complicates'
    },

    explain: {
      'shortage':     'A rent-to-earnings ratio of 46% – well above the 30% affordability threshold – confirms that housing costs are a genuine burden on renters. This is direct evidence of a market failure to deliver affordable housing, strengthening the case for intervention such as a rent ceiling.',
      'short-supply': 'With completions only 44% of the estimated need, the market is not generating enough new supply. This complicates the debate: on one hand it shows a genuine supply failure that rent control alone cannot fix; on the other it weakens the argument that high rents will automatically attract enough new supply to solve the problem over time.',
      'disincentive': 'The Stockholm evidence shows a concrete supply-side cost of rent control: landlords exited the market, cutting supply by 15% over ten years. A price ceiling that destroys the very supply it is meant to make affordable is a strong argument against the policy.',
      'national-income-and-the-multiplier':   'Every 10% rent rise reducing net in-migration by 6% shows that high rents impose economy-wide costs – reduced labour mobility and lower productivity – beyond just household budgets. These wider externalities strengthen the case for some form of intervention to reduce rents.',
      'elastic':      'With PES ≈ 0.4 – far below the national average – higher prices in London generate very little new supply anyway. This complicates the standard argument against rent control ("it kills supply"): if supply barely responds to price signals, the supply-destruction effect of a rent ceiling may be smaller than critics claim; but it also means there is no easy supply-side fix.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The ONS evidence of rents at 46% of median earnings and the Resolution Foundation\'s labour-mobility finding strongly support intervention, but the case for rent control is complicated by the Stockholm precedent – which shows supply can fall 15% under a ceiling – and by London\'s inelastic housing supply (PES ≈ 0.4), which means neither high prices nor rent controls will quickly change the quantity of housing available."',

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
   Market Equilibrium: evaluate a rent control claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Market Equilibrium',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether rent controls actually achieve their stated objective.',
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
      id: 'rent-control-effectiveness',
      claim: {
        icon:   '🏠',
        prompt: 'Policy claim',
        text:   'The UK should use rent controls to improve city housing affordability.'
      },
      factors: [
        {
          id:    'supply-loss',
          icon:  '🏘️',
          label: 'Risk of landlords exiting the market',
          why:   'If rent controls push rents below landlords\' costs or opportunity cost of capital, they will sell properties or convert them to other uses, reducing the rental supply. Evidence from Stockholm shows a 15% reduction in rental supply over a decade. The policy designed to help renters could shrink the supply available to them – potentially making the shortage worse, not better.'
        },
        {
          id:    'pes-housing',
          icon:  '🏗️',
          label: 'Price elasticity of supply of housing',
          why:   'With PES ≈ 0.4 in London, supply barely responds to price signals in the first place. A rent ceiling reduces the already-weak incentive to build or maintain rental properties. However, the standard argument that rent control "kills supply" is weaker than in markets with elastic supply – there was never much supply response to high rents anyway. PES determines how much supply damage the ceiling actually causes.'
        },
        {
          id:    'supply-alternatives',
          icon:  '⚒️',
          label: 'Availability of alternative supply-side policies',
          why:   'Investment in social housing, planning reform, tax incentives for development and Help to Build schemes can directly expand supply rather than capping price. These address the root cause of unaffordability – structurally inelastic supply – rather than the symptom (high rent). If supply-side alternatives are feasible, a demand-side ceiling is harder to justify as the primary policy instrument.'
        },
        {
          id:    'affordability-scope',
          icon:  '💰',
          label: 'How far below equilibrium the ceiling is set',
          why:   'A ceiling set just below market rent has limited distributional benefit – it only marginally reduces rents for existing tenants. A ceiling set far below equilibrium creates a large shortage and potentially drives landlords to exit. The optimal ceiling, if one exists at all, is extremely hard to calibrate accurately without detailed, up-to-date market data for each sub-market.'
        },
        {
          id:    'distribution',
          icon:  '👥',
          label: 'Who actually benefits – distribution of the gains',
          why:   'Rent control typically benefits existing tenants in controlled properties at the expense of new renters who face lower supply and higher rents in the uncontrolled sector. It may also disproportionately benefit higher-income households who already occupy desirable properties. The distributional outcome may be the reverse of what policymakers intend.'
        },
        {
          id:    'time-horizon',
          icon:  '⏱️',
          label: 'Short-run versus long-run effects',
          why:   'In the short run, rent control freezes rents for existing tenants, reducing their housing costs immediately. Over the long run, as properties exit the controlled sector through sale, conversion or deterioration from under-maintenance, supply contracts and the housing problem worsens. The short-run benefit can mask – and accelerate – long-run damage to the rental stock.'
        },
        {
          id:    'externalities-housing',
          icon:  '🌍',
          label: 'Wider economic externalities of high rents',
          why:   'High rents reduce labour mobility, harm productivity because workers cannot afford to live near high-productivity jobs, and reduce household disposable income. The Resolution Foundation estimates that each 10% rent rise cuts net in-migration to London by 6%. These wider economic costs provide justification for intervention even if the specific form of rent control remains debatable.'
        },
        {
          id:    'enforcement',
          icon:  '🏛️',
          label: 'Government capacity to monitor and enforce',
          why:   'A rent ceiling requires ongoing enforcement: inspections, a system for tenant complaints, penalties for landlords who charge above the ceiling, and regular rent reviews. In a fragmented private rental market of millions of properties, this is administratively costly. Landlords may circumvent controls through informal charges, shorter tenancies, or allowing properties to fall below standard rather than maintaining them at a regulated rent.'
        }
      ],
      modelRanking: ['supply-loss', 'pes-housing', 'supply-alternatives'],
      judgement: '"Whether rent controls make housing more affordable depends primarily on whether landlords exit the rental market in response – the Stockholm evidence of a 15% supply reduction shows this is not hypothetical. The impact on supply is moderated by the fact that London housing supply is already inelastic (PES ≈ 0.4), so supply was never going to respond strongly to price signals anyway. The strongest alternative judgement is that supply-side reform – planning liberalisation, social housing investment – addresses the root cause more directly than capping the price that the market charges for a structurally constrained resource."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Market Equilibrium: demand shifts right, inelastic supply, new equilibrium
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   S (steep/inelastic): x1=130,y1=390, x2=370,y2=30  ⟹  y = 585 - 1.5x
   D₁ (original demand): x1=110,y1=80, x2=510,y2=360  ⟹  y = 80 + (x-110)*0.7
   D₂ (demand +60px right): x1=170,y1=80, x2=540,y2=339  ⟹  y = -39 + 0.7x
   E₁ (S ∩ D₁): x≈265, y≈188  (original equilibrium: P₁, Q₁)
   E₂ (S ∩ D₂): x≈284, y≈159  (new equilibrium: P₂, Q₂)
   Higher P (lower y) and higher Q (higher x) – demand shift right confirmed */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Market Equilibrium',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('judge'),

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
    title:       'Population growth and rising incomes increase the demand for housing in a UK city. Supply is constrained by planning restrictions. Which diagram shows the market response?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the demand increase. Think about which curve shifts and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      'd-right',
        correct:  true,
        title:   'Demand shifts right',
        sub:     'Rising demand creates a shortage at the old rent; rents rise; quantity supplied increases slowly (inelastic supply); new equilibrium at higher P and Q',
        why:     'Population growth and rising incomes are non-price demand factors – they shift the demand curve right. At the original rent P₁, quantity demanded now exceeds quantity supplied, creating a housing shortage. Rents rise until the market clears at the new equilibrium E₂ (P₂, Q₂). With inelastic supply (PES ≈ 0.4), quantity supplied responds only modestly, so P₂ is significantly above P₁ while Q₂ is only slightly above Q₁.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Falling demand creates a surplus, pushing rents down to a new lower equilibrium',
        why:     'Demand shifting left represents a fall in the number of households wanting to rent – perhaps due to falling incomes or population decline. This is the opposite of the scenario: rising incomes and population growth increase demand, not reduce it.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Reduced supply at every price pushes rents up and quantity down',
        why:     'Supply shifting left represents a reduction in the amount of housing available at every rent level – for example if landlords exit the market or properties are demolished. The scenario describes a demand shock (population and income growth), not a supply reduction. Supply is slow to respond but has not actually fallen.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'More housing at every price level lowers rents and raises quantity supplied',
        why:     'Supply shifting right would represent an increase in housing supply – such as a successful housebuilding programme. The scenario describes the problem: supply is constrained by planning restrictions and responds slowly to the demand increase. A rightward supply shift would be the solution, not the initial market response.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🏠',
    text:  'Population growth and rising incomes increase the demand for housing in a UK city. Supply is constrained by planning restrictions.',
    dataPoints: [
      { icon: '📊', text: 'London rents +11.2% in 2023' },
      { icon: '🏗️', text: 'PES of housing supply ≈ 0.4 (inelastic)' },
      { icon: '📉', text: 'Housing completions 44% below needed' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – demand shifts right with inelastic housing supply, creating a new equilibrium at higher rent and quantity',
    xLabel:    'Quantity of housing',
    yLabel:    'Rent (£)',

    lines: [
      /* S – steep upward-sloping (inelastic housing supply) */
      { x1: 130, y1: 390, x2: 370, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S', labelX: 373, labelY: 28, labelFill: '#2563eb' },
      /* D₁ – original demand, downward-sloping */
      { x1: 110, y1: 80,  x2: 510, y2: 360, stroke: '#059669', strokeWidth: 2.5,
        label: 'D₁', labelX: 514, labelY: 360, labelFill: '#059669' },
      /* D₂ – new demand, shifted right 60px */
      { x1: 170, y1: 80,  x2: 540, y2: 339, stroke: '#059669', strokeWidth: 2.5,
        label: 'D₂', labelX: 514, labelY: 320, labelFill: '#059669' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₂ (new equilibrium, higher rent) */
      { x1: 100, y1: 159, x2: 284, y2: 159, tickLeft: 'P₂', tickLeftY: 162 },
      /* Horizontal from y-axis to E₁ (original equilibrium) */
      { x1: 100, y1: 188, x2: 265, y2: 188, tickLeft: 'P₁', tickLeftY: 191 },
      /* Vertical from E₂ down to x-axis */
      { x1: 284, y1: 159, x2: 284, y2: 400, tickBottom: 'Q₂', tickBottomX: 284 },
      /* Vertical from E₁ down to x-axis */
      { x1: 265, y1: 188, x2: 265, y2: 400, tickBottom: 'Q₁', tickBottomX: 265 }
    ],

    /* Shift arrow: horizontal, pointing right, at y=240 between D₁ and D₂ */
    shiftArrow: { x1: 343, y1: 240, x2: 391, y2: 240, stroke: '#059669' },

    eqDots: [
      {
        cx: 265, cy: 188, fill: '#059669',
        initLabel: 'Original', initLabel2: 'equilibrium', initLabelX: 272, initLabelY: 183
      },
      {
        cx: 284, cy: 159, fill: '#059669',
        newLabel: 'New', newLabel2: 'equilibrium', newLabelX: 291, newLabelY: 154
      }
    ],

    legend: [
      { color: '#2563eb', text: 'S = Housing supply (inelastic, PES ≈ 0.4)' },
      { color: '#059669', text: 'D₁ = Original demand' },
      { color: '#059669', text: 'D₂ = New demand (after population growth and rising incomes)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of rising demand on the housing market.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for rent and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',    label: 'Shift label',           pctX: 55,  pctY: 50,   pctW: 22 },
      { id: 'new-eq',   label: 'New equilibrium',        pctX: 51,  pctY: 31,   pctW: 21 },
      { id: 'init-eq',  label: 'Original equilibrium',   pctX: 47,  pctY: 38,   pctW: 23 },
      { id: 'hi-price', label: 'Higher rent (P₂)',        pctX: 0.5, pctY: 31,   pctW: 17 },
      { id: 'hi-out',   label: 'Higher quantity (Q₂)',    pctX: 44,  pctY: 93.5, pctW: 18 }
    ],

    chips: [
      { id: 'dem-right', text: 'Demand shifts right',       icon: '→', zone: 'shift',    correct: true  },
      { id: 'new-eq',    text: 'New equilibrium (Q₂, P₂)',  icon: '●', zone: 'new-eq',   correct: true  },
      { id: 'init-eq',   text: 'Original equilibrium (Q₁)', icon: '●', zone: 'init-eq',  correct: true  },
      { id: 'hi-price',  text: 'Higher rent (P₂)',          icon: '↑', zone: 'hi-price', correct: true  },
      { id: 'hi-out',    text: 'Higher quantity (Q₂)',      icon: '↑', zone: 'hi-out',   correct: true  },
      { id: 'dem-left',  text: 'Demand shifts left',        icon: '←', zone: null,       correct: false },
      { id: 'lo-price',  text: 'Lower rent (P₁)',           icon: '↓', zone: null,       correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['demand', 'supply', 'equilibrium', 'shortage', 'price mechanism', 'PES', 'price signal', 'long run', 'short run', 'allocative efficiency'],

    parts: [
      {
        num:         1,
        title:       'Explain why demand shifts and what happens at the original rent',
        prompt:      'Why does demand shift right, and what immediately happens at the original rent?',
        maxChars:    240,
        modelAnswer: 'Rising incomes and population growth mean more households are willing and able to pay for housing at every price level – the demand curve shifts right from D₁ to D₂. At the original rent P₁, quantity demanded now exceeds quantity supplied, creating a housing shortage. Landlords facing excess demand respond by raising rents.'
      },
      {
        num:         2,
        title:       'Explain the adjustment to the new equilibrium',
        prompt:      'What happens to rent and quantity as the market adjusts to the new equilibrium?',
        maxChars:    240,
        modelAnswer: 'Rents rise from P₁ to P₂ – higher prices signal scarcity and profitability, attracting new supply. Quantity supplied increases from Q₁ to Q₂. However, with inelastic supply (PES ≈ 0.4), the quantity response is small relative to the rent increase. The new equilibrium E₂ involves significantly higher rent and only modestly more housing.'
      },
      {
        num:         3,
        title:       'Explain what the steepness of the supply curve tells us',
        prompt:      'What does the steepness of the supply curve tell us about the effectiveness of the price mechanism here?',
        maxChars:    240,
        modelAnswer: 'A steep supply curve means housing supply is price inelastic (PES ≈ 0.4). The price mechanism is slow and limited: rents must rise substantially before quantity supplied increases even a little. This reflects structural constraints – planning restrictions, land costs, long construction times – that block the market from clearing the shortage quickly. The price mechanism works in direction but not in magnitude.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Identify the non-price demand factor that causes the shift',
      'Explain the shortage and upward pressure on rents',
      'State the outcome for rent (P) and quantity (Q)',
      'Link the inelastic supply to the slow, limited market adjustment'
    ],

    examAnswer: '"Population growth and rising incomes shift the demand curve for housing right from D₁ to D₂, creating a shortage at the original rent P₁ and driving rents upward to P₂. The price mechanism signals scarcity: higher rents attract new supply and quantity rises from Q₁ to Q₂. However, with price elasticity of supply at only 0.4, the quantity response is small relative to the rent increase – the new equilibrium at E₂ involves substantially higher rents with only a modest increase in housing supply, demonstrating that an inelastic supply curve limits the market\'s ability to self-correct."'
  }
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for market_equilibrium
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Market Equilibrium',
  estTime: '15–20 minutes',
  goal:    'Apply the equilibrium framework – how demand and supply shifts create new equilibria, and what limits or delays the market\'s adjustment.',

  intro: {
    summary: "You've mapped equilibrium, disequilibrium, simultaneous shifts and allocative efficiency. Now train the skills examiners reward – applying the framework to real housing-market context, building a watertight demand-shift → new equilibrium chain, and reaching a supported judgement on whether rent controls are an effective policy.",
    heroKey: 'heroSupplyDemand',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real context to test whether rent controls are an effective housing policy',
      'Build a watertight demand-shift → price-signal → new-equilibrium causal chain',
      'Pick, label and explain the supply and demand diagram for a demand-driven market shift.',
      'Evaluate the key conditions that change the policy verdict on rent controls'
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
   Market Equilibrium: synthesise into an exam-quality judgement on rent controls
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Market Equilibrium',
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
      id: 'rent-control-judgement',
      claim: {
        icon:   '🏠',
        prompt: 'Policy claim',
        text:   'The UK government should introduce rent controls to make housing more affordable in UK cities.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'London rents at 46% of median earnings; completions 44% below need; Stockholm saw 15% supply reduction under controls; PES ≈ 0.4.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Rising demand → demand curve shifts right → shortage at old rent → rents rise → price signal → slow supply response (inelastic) → new higher-rent equilibrium.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'Steep supply curve (PES ≈ 0.4): demand shifts right → P rises sharply, Q rises modestly → new equilibrium at much higher rent.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on landlord exit risk, housing supply elasticity, and availability of supply-side alternatives.' }
      ],
      cloze: 'Overall, rent controls may provide short-run relief for existing tenants but are likely to [1] the housing shortage over time, because landlords facing [2] below market levels will [3] properties from the rental market. With PES ≈ 0.4, housing supply is already [4] – so any further reduction in supply incentives will push rents up in the uncontrolled sector. Therefore, the strongest judgement is that rent controls are a [5] policy tool: they redistribute [6] rather than creating new supply. Supply-side alternatives – planning reform, social housing investment – address the [7] of the housing shortage more directly. The most effective long-run approach is to make housing supply more [8] to price signals.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-worsen',      text: 'worsen',      correct: true  },
            { id: 'b1-eliminate',   text: 'eliminate',   correct: false },
            { id: 'b1-solve',       text: 'solve',       correct: false },
            { id: 'b1-redistribute',text: 'redistribute',correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-rents',       text: 'rents',               correct: true  },
            { id: 'b2-wages',       text: 'wages',               correct: false },
            { id: 'b2-interest',    text: 'interest rates',      correct: false },
            { id: 'b2-planning',    text: 'planning permissions', correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-withdraw',    text: 'withdraw',   correct: true  },
            { id: 'b3-add',         text: 'add',        correct: false },
            { id: 'b3-maintain',    text: 'maintain',   correct: false },
            { id: 'b3-subsidise',   text: 'subsidise',  correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-inelastic',       text: 'inelastic',            correct: true  },
            { id: 'b4-elastic',         text: 'elastic',              correct: false },
            { id: 'b4-perf-elastic',    text: 'perfectly elastic',    correct: false },
            { id: 'b4-unit-elastic',    text: 'unit elastic',         correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-distributional',  text: 'distributional rather than allocative', correct: true  },
            { id: 'b5-efficient',       text: 'perfectly efficient',                   correct: false },
            { id: 'b5-supply',          text: 'supply-expanding',                      correct: false },
            { id: 'b5-demand',          text: 'demand-reducing',                       correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-existing',        text: 'existing housing among tenants',  correct: true  },
            { id: 'b6-new',             text: 'new housing across the city',     correct: false },
            { id: 'b6-revenue',         text: 'government revenue',              correct: false },
            { id: 'b6-producer',        text: 'producer surplus to consumers',   correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-root',            text: 'root cause',    correct: true  },
            { id: 'b7-price',           text: 'price level',   correct: false },
            { id: 'b7-demand',          text: 'demand curve',  correct: false },
            { id: 'b7-income',          text: 'income effect', correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-responsive',      text: 'responsive',          correct: true  },
            { id: 'b8-inelastic',       text: 'inelastic',           correct: false },
            { id: 'b8-fixed',           text: 'fixed',               correct: false },
            { id: 'b8-perf-inelastic',  text: 'perfectly inelastic', correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-blunt',    text: 'Rent controls are a blunt tool that treats symptoms; supply-side reform addresses the root cause', correct: true  },
          { id: 'op-always',   text: 'Rent controls always make housing more affordable for all renters',                                correct: false },
          { id: 'op-no',       text: 'Rent controls should never be used – only market forces can solve housing affordability',           correct: false },
          { id: 'op-demand',   text: 'The housing shortage is caused by excess demand, so demand management is the best solution',       correct: false }
        ]
      },
      examBridge: '"Rent controls reduce rents for existing tenants in the short run, but the risk of landlords withdrawing supply – as demonstrated by a 15% supply reduction in Stockholm – means the policy is likely to worsen the housing shortage over time. With housing supply already inelastic (PES ≈ 0.4), a rent ceiling further reduces the incentive to build, invest or maintain rental properties. The strongest judgement is that rent controls are a distributional instrument, not an allocative one: they redistribute existing housing more cheaply among current tenants rather than creating the new supply needed to shift the long-run equilibrium to a lower rent."'
    }
  ]
};

/* ---- link-predict.js ---- */
/* ============================================================
   ECONOS – Link It · Predict the Outcome station data
   Market Equilibrium: demand/supply shocks and policy interventions
   ============================================================ */

window.ECONOS_LINK_PREDICT = {
  topic:   'Market Equilibrium',
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
      id: 'eq-drought-wheat',
      icon: '🌾',
      title: 'Drought hits the UK wheat harvest',
      setup: 'A severe summer drought reduces UK wheat output by 30%. Wheat is used to produce bread, pasta, and breakfast cereals. Simultaneously, consumer incomes remain unchanged.',
      variables: [
        {
          id: 'supply',
          label: 'Supply of wheat',
          correct: 'decrease',
          reason: 'The drought is a negative supply shock – it directly reduces the quantity of wheat that farmers can bring to market at any given price. The supply curve shifts left.'
        },
        {
          id: 'price',
          label: 'Equilibrium price of wheat',
          correct: 'increase',
          reason: 'With supply shifting left and demand unchanged, there is a shortage at the old price. The price rises until quantity demanded falls and quantity supplied rises to a new equilibrium. P* increases.'
        },
        {
          id: 'quantity',
          label: 'Equilibrium quantity of wheat traded',
          correct: 'decrease',
          reason: 'The new equilibrium is at a lower quantity: supply shifted left, and the higher price causes buyers to demand less. Q* falls – less wheat is traded despite the higher price.'
        },
        {
          id: 'bread_price',
          label: 'Price of bread (derived demand)',
          correct: 'increase',
          reason: 'Wheat is a key input for bread. Higher wheat prices raise production costs for bakers, shifting the supply of bread left – leading to a higher equilibrium price for bread. The shock transmits through derived demand.'
        }
      ],
      examBridge: '"A drought shifts the wheat supply curve left, creating a shortage at the original price. The price rises to P₂ where Qd = Qs once again. The new equilibrium has higher P* and lower Q*. Derived demand means this shock transmits to bread and pasta markets – all goods using wheat as an input see costs rise and prices increase."'
    },
    {
      id: 'eq-minimum-wage',
      icon: '💷',
      title: 'Government raises the minimum wage',
      setup: 'The government increases the National Living Wage from £10.42 to £12.00 per hour in all sectors. The minimum wage now exceeds the existing market equilibrium wage in low-skill labour markets.',
      variables: [
        {
          id: 'wage_floor',
          label: 'Wage received by minimum-wage workers',
          correct: 'increase',
          reason: 'The minimum wage is a binding price floor set above the equilibrium wage. Workers who retain employment receive the higher wage of £12.00, up from the market wage of approximately £10.42. Wages rise by definition for those employed.'
        },
        {
          id: 'labour_demanded',
          label: 'Quantity of labour demanded by firms',
          correct: 'decrease',
          reason: 'The higher wage raises firms\' labour costs. As labour becomes more expensive, firms substitute toward capital (automation) or produce less. Quantity of labour demanded falls along the demand curve – this is the standard labour demand response to a price floor above equilibrium.'
        },
        {
          id: 'labour_supplied',
          label: 'Quantity of labour supplied by workers',
          correct: 'increase',
          reason: 'The higher wage makes work more attractive – more workers are willing to supply their labour at £12.00 than were willing at the lower market wage. Quantity supplied rises along the supply curve.'
        },
        {
          id: 'employment-and-unemployment',
          label: 'Unemployment in low-skill markets',
          correct: 'increase',
          reason: 'A binding minimum wage creates a surplus of labour: Qs > Qd at the floor wage. The gap between quantity supplied and quantity demanded is structural (demand-deficient) unemployment. Note this is contested – some economists argue monopsony power in labour markets means a minimum wage can raise employment. In competitive models, unemployment rises.'
        }
      ],
      examBridge: '"A binding minimum wage set above the competitive equilibrium creates a labour surplus (Qs > Qd). Workers who retain jobs gain from the higher wage; those who lose employment face a welfare loss. Net effect on total employment income depends on whether the wage rise for those employed outweighs the job losses."'
    }
  ]
};

