/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   Positive Externalities: build the MPB → underproduction → DWL chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Positive Externalities',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('extract'),

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
      id: 'pos-ext-mechanism',
      scenario: {
        icon:  '💉',
        label: 'Scenario',
        text:  'Individual MPB of vaccination = own protection from illness. MSB = MPB + MEB (herd immunity: protection conferred on unvaccinated/vulnerable third parties). Free market produces Q_market where S = MPB – systematically below Q* where S = MSB.'
      },
      anchor: 'MSB = MPB + MEB (herd immunity); free market gives Q_market < Q*.',
      tiles: [
        {
          id:  'step-market',
          icon: '👤',
          text: 'Market failure: consumers equate MPB with price → Q_market < Q*',
          pos:  0
        },
        {
          id:  'step-provision',
          icon: '🏥',
          text: 'NHS free provision → cost = £0 → supply shifts right → Q rises toward Q*',
          pos:  1
        },
        {
          id:  'step-herd',
          icon: '🌐',
          text: 'At ≥95% coverage, herd immunity internalises the MEB',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '💰',
          text: 'Government taxes unhealthy choices to cross-subsidise vaccines',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '📈',
          text: 'Pharmaceutical companies increase vaccine prices to recover R&D costs',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🛒',
          text: 'Consumers reveal preference for vaccination through private market demand',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Consumers only consider their MPB – own protection from illness. The MEB (herd immunity conferred on others) is a real benefit to society, but it does not enter the individual\'s decision. So the free market equilibrium falls at Q_market where MPB = MPC: below the social optimum Q* where MSB = MPC.'
        },
        {
          pos:  1,
          text: 'NHS free provision eliminates the price barrier: the effective cost to the consumer falls to zero (below MPC). This is economically equivalent to a subsidy that shifts the effective supply curve right from MPC to MPC − subsidy. More people vaccinate – including those who would have been deterred by the market price – raising coverage from Q_market toward Q*.'
        },
        {
          pos:  2,
          text: 'As vaccination coverage crosses the herd immunity threshold (95% for measles), transmission cannot be sustained in the population. The MEB – protection for unvaccinated and vulnerable individuals – is fully realised. It is non-rival (one person\'s immunity does not reduce others\' protection) and non-excludable (unvaccinated people cannot be prevented from benefiting). The positive externality has been fully internalised by the public provision policy.'
        }
      ],
      examBridge: '"In an unregulated market the vaccination rate settles at Q_market where MPB equals MPC, ignoring the MEB (herd immunity benefit) enjoyed by unvaccinated third parties. Because MSB > MPB throughout, the market underproduces relative to Q* – the social optimum where MSB = MPC. NHS free provision shifts effective supply right, raising coverage from Q_market to Q* (95.1% MMR), where the herd immunity threshold is met and the MEB is fully internalised."',

      prompts: [
        'Why does the free market produce below Q* for vaccinations?',
        'How does NHS free provision move the quantity from Q_market toward Q*?',
        'What happens when vaccination coverage crosses the herd immunity threshold?'
      ],
      modelAnswers: [
        'Consumers base vaccination decisions on MPB – their personal protection. The MEB (herd immunity for third parties) does not enter individual decision-making. So the market equilibrium is at Q_market where MPB = MPC – systematically below Q* where MSB (= MPB + MEB) = MPC. Underproduction is the result.',
        'NHS provision sets the consumer price to zero – below MPC. This is equivalent to a supply-side subsidy shifting the effective supply right from MPC to MPC − subsidy. At zero price, more individuals vaccinate: those who previously found the market price above their MPB now participate, raising coverage toward Q*.',
        'Above the 95% herd immunity threshold (for measles), transmission cannot be sustained. Unvaccinated individuals – including those who are medically unable to vaccinate – benefit from reduced infection risk without paying for vaccination. The MEB is non-excludable: the externality is fully internalised, and the social benefit of public provision is maximised.'
      ],
      vocab: ['MPB', 'MEB', 'MSB', 'MPC', 'Q*', 'Q_market', 'deadweight welfare loss', 'social optimum', 'underproduction', 'herd immunity', 'free rider', 'subsidy', 'direct provision', 'internalise']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Positive Externalities
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Positive Externalities',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'diagram', label: 'Diagram connector',  max: 9, color: '#7c3aed' },
    { id: 'diagram', label: 'Diagram connector',  max: 9, color: '#7c3aed' },
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

  useInLandIt: 'Positive externalities cause underproduction: Q_market < Q*. Direct provision shifts effective supply right. The welfare case requires MEB to exceed the fiscal cost of provision. Always compare direct provision with partial subsidy and information campaigns – and note that ideological barriers (vaccine hesitancy) limit the effectiveness of price-based interventions.',

  focusInLandIt: {
    context: 'Use specific evidence – the 24,000 measles cases per 1% coverage point and the 8% private uptake figure – to anchor your application to the real-world case, not just generic externality theory.',
    chain:   'State the chain explicitly: MPB excludes MEB → consumer undervalues vaccination at Q_market → MSB > MPB throughout → Q_market < Q* → deadweight welfare loss.',
    diagram: 'Draw all four curves (MPB, MSB, MPC/S₁, S₂), label both equilibria (Q_m/P_m and Q*/P*), and identify the MEB gap (vertical distance between MSB and MPB). Shade the welfare-gain-forgone triangle between MSB, MPC and the vertical at Q_m.',
    depends: 'Lead with MEB size as your condition – if the external benefit is small or unmeasurable, the case for full public provision is weak regardless of delivery capacity. Then evaluate whether the unvaccinated group is price-sensitive or ideologically resistant.',
    judge:   'State a clear position, use the mechanism (effective supply shifts right from S₁ to S₂, DWL eliminated), add the condition (MEB measurability / price sensitivity / hesitancy), and explain the limitation honestly.'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   Positive Externalities: classify evidence on NHS vaccination provision
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Positive Externalities',
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
    question:    'Which details in this extract most change whether direct public provision of vaccinations is the most effective policy to correct the underproduction caused by positive consumption externalities?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'NHS England data for 2023–24 show that [[mmr-coverage|MMR vaccination coverage for children aged 5 reached 95.1%]] – meeting the WHO herd immunity threshold of 95% for measles, which requires sustained national uptake to prevent outbreaks.',
      'UK Health Security Agency analysis estimates that [[meb-size|each 1 ppt rise in measles coverage prevents ~24,000 cases per year]] in England – providing a large, quantifiable marginal external benefit that the free market systematically fails to deliver.',
      'Research on UK private flu vaccination (employer schemes and pharmacies) shows [[private-uptake|only 8% uptake before NHS programme expansion]] – compared with 73% of at-risk adults covered under the NHS flu programme (2022–23) – confirming that the unsubsidised market produces well below the social optimum.',
      'Evidence from vaccine hesitancy surveys (2022) suggests that [[hesitancy|~15% of MMR-declining parents cited ideology, not cost or access]] for non-vaccination.',
      'The 2019 measles outbreak in England (991 cases) followed [[coverage-fall|MMR coverage falling to 91.2% in 2018 – 3.8 ppt below herd immunity]] – illustrating that small coverage falls can trigger large externality losses and that the benefit of public provision is sensitive to near-threshold effects.'
    ],

    evidence: {
      'mmr-coverage':    { text: 'MMR vaccination coverage for children aged 5 reached 95.1%' },
      'meb-size':        { text: 'each 1 ppt rise in measles coverage prevents ~24,000 cases per year' },
      'private-uptake':  { text: 'only 8% uptake before NHS programme expansion' },
      'hesitancy':       { text: '~15% of MMR-declining parents cited ideology, not cost or access' },
      'coverage-fall':   { text: 'MMR coverage falling to 91.2% in 2018 – 3.8 ppt below herd immunity' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports direct public provision',        tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against direct provision',         tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',         tone: 'blue',  icon: '?' }
    ],

    correct: {
      'mmr-coverage':   'supports',
      'meb-size':       'supports',
      'private-uptake': 'supports',
      'hesitancy':      'against',
      'coverage-fall':  'complicates'
    },

    explain: {
      'mmr-coverage':   'Coverage of 95.1% confirms that NHS free provision achieves the social optimum Q* – the herd immunity threshold. This directly supports the claim that public provision corrects the underproduction from positive consumption externalities.',
      'meb-size':       'A quantified MEB of 24,000 fewer measles cases per 1% coverage point is large and measurable – precisely the conditions under which direct provision is most justified. It confirms that the external benefit ignored by the market is substantial.',
      'private-uptake': 'Private uptake of only 8% vs NHS-driven coverage of 73% demonstrates the size of the gap between Q_market and Q*. Without free provision, the market systematically fails to reach the social optimum – directly supporting the case for direct public provision.',
      'hesitancy':      'If 15% of non-vaccinators cite ideology rather than cost, free provision cannot convert them – the price barrier is not binding for this group. Direct provision has a ceiling and cannot achieve Q* alone, arguing against it as the sole correction mechanism.',
      'coverage-fall':  'The 2019 outbreak shows that the MEB is non-linear near the threshold: a small fall from 95.1% to 91.2% triggered a large externality loss. This complicates rather than settles the case – it shows that direct provision must be sustained indefinitely and complemented by behavioural policy to maintain Q*.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The large, quantified MEB (24,000 fewer measles cases per 1% coverage point) and the collapse of private uptake to 8% strongly support direct public provision – the NHS programme achieves Q* reliably where the market fails. However, the case is complicated by vaccine hesitancy (ideological refusal does not respond to price reduction) and by the coverage-fall evidence – sustaining Q* above the herd immunity threshold requires both continuous public provision and complementary behavioural interventions."',

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
   Positive Externalities: evaluate a direct public provision claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Positive Externalities',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether direct public provision actually achieves the social optimum.',
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
      id: 'direct-provision-effectiveness',
      claim: {
        icon:   '💉',
        prompt: 'Policy claim',
        text:   'Direct public provision best corrects positive consumption externalities.'
      },
      factors: [
        {
          id:    'meb-size',
          icon:  '🧬',
          label: 'Size and measurability of the MEB',
          why:   'The case for intervention depends on the size of the MEB. Herd immunity is large and well-quantified (each 1% coverage point prevents 24,000 measles cases). If the MEB is small or difficult to measure, the optimal level of provision is uncertain and over-provision becomes a risk. Large, measurable MEBs justify full public provision; small or uncertain MEBs may only justify partial subsidies.'
        },
        {
          id:    'price-sensitivity',
          icon:  '💰',
          label: 'Price sensitivity of the target population',
          why:   'Direct provision (free) maximises uptake relative to a partial subsidy only if the unvaccinated group is price-sensitive. If non-vaccinators refuse on ideological grounds (anti-vaccine beliefs) rather than cost, free provision cannot achieve Q* – and the MEB gap persists regardless of price. Behavioural barriers may be more binding than price.'
        },
        {
          id:    'alternative-policies',
          icon:  '📋',
          label: 'Effectiveness of subsidy vs mandate vs information campaigns',
          why:   'Direct provision is one of three main corrective policies. A targeted subsidy (voucher, tax credit) may achieve similar uptake at lower fiscal cost if only price-sensitive individuals are below Q*. A vaccine mandate forces Q to Q* regardless of preference – but has liberty costs. Information campaigns (countering vaccine hesitancy) address behavioural barriers without price changes. The optimal policy mix depends on why Q_market < Q*.'
        },
        {
          id:    'herd-threshold',
          icon:  '🎯',
          label: 'Proximity to the herd immunity threshold',
          why:   'The MEB is non-linear near the herd immunity threshold. Below 95% MMR coverage, each additional vaccination produces decreasing marginal herd immunity benefit; above 95%, the externality is fully realised. Policy interventions must aim to push coverage above the threshold – a subsidy achieving only 92% coverage captures most of the MEB but leaves measles transmission risk.'
        },
        {
          id:    'delivery-capacity',
          icon:  '🏥',
          label: 'Healthcare delivery capacity and accessibility',
          why:   'Even with free provision, vaccination uptake depends on accessibility of delivery. Remote or deprived communities with fewer GP surgeries, less flexible working hours, or language barriers may remain under-vaccinated despite zero price. Complementary policies (outreach vaccination, school programmes) are needed to reach Q* for all demographic groups.'
        },
        {
          id:    'fiscal-cost',
          icon:  '💷',
          label: 'Fiscal cost and opportunity cost of public provision',
          why:   'NHS provision requires government funding. If the same resources could fund other health interventions with larger per-pound welfare gains, direct provision is not the highest-value use of health spending. The case for full public provision depends on comparative welfare efficiency across competing NHS priorities.'
        },
        {
          id:    'distributional',
          icon:  '👥',
          label: 'Distributional equity of the positive externality',
          why:   'The herd immunity benefit is enjoyed by all – including those who free-ride and do not vaccinate. This non-excludable benefit means the state cannot charge free-riders for the externality they enjoy. Public provision ensures the benefit is equitably distributed, whereas a subsidy may still leave lower-income, harder-to-reach groups under-vaccinated.'
        },
        {
          id:    'dynamic',
          icon:  '🔄',
          label: 'Persistence of the externality over time (disease dynamics)',
          why:   'Some positive externalities (e.g., childhood MMR vaccination) produce lifetime immunity and permanent MEB. Others (flu vaccination) require annual repetition because the virus mutates. Where the externality must be replicated annually, direct provision must be a permanent commitment – rather than a one-off intervention – raising fiscal sustainability concerns.'
        }
      ],
      modelRanking: ['meb-size', 'price-sensitivity', 'alternative-policies'],
      judgement: '"Whether direct provision is most effective depends on the size of the MEB (large for vaccinations with herd immunity thresholds) and whether the unvaccinated population is primarily price-sensitive (in which case free provision works) or ideologically resistant (in which case information campaigns or mandates are needed). If the MEB is large, measurable and the non-vaccinating group is price-sensitive, direct provision dominates a partial subsidy by reliably achieving Q*."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Positive Externalities: NHS free provision shifts supply right (MPC → MPC−subsidy)
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   MPB (D):   (110,150)→(510,380)  slope = 0.575  ⟹  y = 86.75 + 0.575x
   MSB:       (110,70) →(510,300)  slope = 0.575  ⟹  y = 6.75 + 0.575x   (80px above MPB)
   MPC (S₁):  (130,390)→(490,30)   slope = -1.0   ⟹  y = 520 - x
   S₂ (NHS):  (210,390)→(543,57)   slope = -1.0   ⟹  y = 600 - x   (80px right of S₁)
   E_market (MPC ∩ MPB): 86.75+0.575x = 520-x → 1.575x = 433.25 → x≈275, y≈245
   E_social  (MPC ∩ MSB): 6.75+0.575x = 520-x  → 1.575x = 513.25 → x≈326, y≈194        */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Positive Externalities',
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
    title:       'The NHS provides free flu vaccinations to correct the underproduction caused by positive externalities. Which diagram correctly shows the effect on the vaccination market?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of free NHS provision. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      's-right',
        correct:  true,
        title:   'Supply shifts right',
        sub:     'Free provision reduces effective price to consumers, raising quantity toward the social optimum',
        why:     'NHS free provision eliminates the price barrier for consumers – the effective consumer cost falls to zero, below the market MPC. This is equivalent to a supply-side subsidy: the effective supply curve shifts right from MPC to MPC − subsidy (S₂). Output rises from Q_m to Q*, and coverage crosses the herd immunity threshold, fully realising the MEB.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Output falls and prices rise as supply contracts',
        why:     'Supply shifting left means costs rise or supply falls – the effect of a tax or a cost increase. NHS free provision reduces the effective cost to consumers and raises the quantity supplied at any given price. A leftward shift shows the opposite of what public provision achieves.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Consumer spending falls, reducing the quantity demanded at every price',
        why:     'Demand (MPB) shifting left would mean consumers value vaccination less – the opposite of what happens. NHS provision works on the supply and cost side: it removes the price barrier, not by changing MPB, but by making the effective price zero. D does not shift in this model.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Rising consumer demand pushes up the price level',
        why:     'A rightward demand shift would represent rising consumer willingness to pay – a change in MPB. NHS public provision does not increase consumer valuation; it reduces the effective price to zero. The primary mechanism is a supply-side shift, not a demand shift. Demand rising would push price up, which is not what free provision does.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '💉',
    text:  'NHS provides free vaccinations. MMR coverage: 95.1% (meets herd immunity threshold). Without provision: estimated 50% uptake.',
    dataPoints: [
      { icon: '🦠', text: 'MEB: each % point of MMR coverage prevents 24,000 measles cases/year' },
      { icon: '📈', text: 'NHS shifts effective supply right: Q_market (50%) → Q* (95%)' },
      { icon: '🤝', text: 'Herd immunity: unvaccinated individuals protected by others\' coverage' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – NHS free provision correcting a positive consumption externality (underproduction)',
    xLabel:    'Quantity of vaccinations',
    yLabel:    'Price / Cost (£)',

    lines: [
      /* MPB (private demand = consumer benefit) – green downward-sloping */
      { x1: 110, y1: 150, x2: 510, y2: 380, stroke: '#059669', strokeWidth: 2.5,
        label: 'MPB (D)', labelX: 514, labelY: 380, labelFill: '#059669' },
      /* MSB (social demand = MPB + MEB) – darker green, dashed, 80px above MPB */
      { x1: 110, y1: 70,  x2: 510, y2: 300, stroke: '#16a34a', strokeWidth: 2,
        strokeDasharray: '6,3',
        label: 'MSB', labelX: 514, labelY: 300, labelFill: '#16a34a' },
      /* MPC (S₁ – supply before NHS provision) – blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'MPC (S₁)', labelX: 494, labelY: 28, labelFill: '#2563eb' },
      /* S₂ (after NHS free provision, 80px right of MPC) – purple upward-sloping */
      { x1: 210, y1: 390, x2: 543, y2: 57,  stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'S₂ (after NHS)', labelX: 450, labelY: 30, labelFill: '#7c3aed' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E_social (social optimum) */
      { x1: 100, y1: 194, x2: 326, y2: 194, tickLeft: 'P*',  tickLeftY: 197 },
      /* Horizontal from y-axis to E_market (market equilibrium) */
      { x1: 100, y1: 245, x2: 275, y2: 245, tickLeft: 'P_m', tickLeftY: 248 },
      /* Vertical from E_social down to x-axis */
      { x1: 326, y1: 194, x2: 326, y2: 400, tickBottom: 'Q*',  tickBottomX: 326 },
      /* Vertical from E_market down to x-axis */
      { x1: 275, y1: 245, x2: 275, y2: 400, tickBottom: 'Q_m', tickBottomX: 275 }
    ],

    /* Shift arrow: from S₁ toward S₂ at y=80, pointing right */
    shiftArrow: { x1: 380, y1: 80, x2: 450, y2: 80, stroke: '#7c3aed' },

    eqDots: [
      {
        cx: 275, cy: 245, fill: '#2563eb',
        initLabel: 'Market', initLabel2: 'equilibrium (Q_m)', initLabelX: 282, initLabelY: 240
      },
      {
        cx: 326, cy: 194, fill: '#7c3aed',
        newLabel: 'Social', newLabel2: 'optimum (Q*)', newLabelX: 333, newLabelY: 189
      }
    ],

    legend: [
      { color: '#059669', text: 'MPB = Marginal Private Benefit (individual vaccination benefit)' },
      { color: '#16a34a', text: 'MSB = Marginal Social Benefit (MPB + MEB herd immunity)' },
      { color: '#2563eb', text: 'MPC (S₁) = Marginal Private Cost (before NHS provision)' },
      { color: '#7c3aed', text: 'S₂ = Effective supply after NHS free provision (MPC − subsidy)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of NHS free vaccination provision.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',    label: 'Shift label',              pctX: 62,  pctY: 13,   pctW: 22 },
      { id: 'soc-opt',  label: 'Social optimum',           pctX: 59,  pctY: 37,   pctW: 20 },
      { id: 'mkt-eq',   label: 'Market equilibrium',       pctX: 49,  pctY: 48,   pctW: 22 },
      { id: 'meb-gap',  label: 'MEB gap (MSB − MPB)', pctX: 0.5, pctY: 37,   pctW: 16 },
      { id: 'hi-qty',   label: 'Higher quantity (Q*)',      pctX: 55,  pctY: 93.5, pctW: 18 }
    ],

    chips: [
      { id: 'supply-shift', text: 'Supply shifts right (NHS provision)', icon: '→', zone: 'shift',   correct: true  },
      { id: 'soc-opt',      text: 'Social optimum (Q*, P*)',             icon: '●', zone: 'soc-opt', correct: true  },
      { id: 'mkt-eq',       text: 'Market equilibrium (Q_m)',            icon: '●', zone: 'mkt-eq',  correct: true  },
      { id: 'meb-gap',      text: 'MEB gap (MSB − MPB)',            icon: '↕', zone: 'meb-gap', correct: true  },
      { id: 'hi-qty',       text: 'Higher quantity (Q*)',                icon: '↑', zone: 'hi-qty',  correct: true  },
      { id: 'sup-left',     text: 'Supply shifts left',                  icon: '←', zone: null,      correct: false },
      { id: 'dem-right',    text: 'Demand shifts right',                 icon: '→', zone: null,      correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['MPB', 'MEB', 'MSB', 'MPC', 'Q*', 'Q_market', 'positive externality', 'herd immunity', 'underproduction', 'deadweight welfare loss', 'social optimum', 'direct provision', 'subsidy'],

    parts: [
      {
        num:         1,
        title:       'Explain why MSB sits above MPB',
        prompt:      'Why does MSB sit above MPB, and what does the vertical gap between them represent?',
        maxChars:    240,
        modelAnswer: 'MSB = MPB + MEB. The MEB is the herd immunity benefit: when you vaccinate, you protect not just yourself but also unvaccinated and vulnerable people who cannot be immunised. The vertical gap between MSB and MPB at every quantity represents this external benefit – which the market ignores because individuals only consider MPB when deciding whether to vaccinate.'
      },
      {
        num:         2,
        title:       'Explain the shift from Q_m to Q*',
        prompt:      'What happens to quantity when the NHS provides free vaccinations?',
        maxChars:    240,
        modelAnswer: 'Free NHS provision reduces the effective cost to consumers to zero (below MPC), shifting effective supply right from S₁ to S₂. The equilibrium moves from E_market (Q_m, P_m) to E_social (Q*, P*): quantity rises from Q_market to Q*. More people vaccinate because there is no price barrier. Coverage crosses the herd immunity threshold, fully realising the MEB.'
      },
      {
        num:         3,
        title:       'Evaluate: direct provision vs subsidy',
        prompt:      'Is direct provision always better than a partial subsidy for correcting this externality?',
        maxChars:    240,
        modelAnswer: 'Direct provision (free at point of use) fully removes the price barrier, achieving Q* reliably. A partial subsidy that reduces price but does not eliminate it may still leave Q below Q* if the remaining price deters price-sensitive individuals. However, direct provision has a higher fiscal cost – a targeted subsidy might achieve near-Q* at lower cost where uptake is driven by convenience rather than price sensitivity. If non-vaccinators refuse on ideological grounds, neither approach achieves Q*.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Explain MEB and why MSB > MPB',
      'State that market produces Q_m < Q* (underproduction)',
      'Explain supply shift mechanism',
      'Evaluate direct provision vs subsidy'
    ],

    examAnswer: '"The positive consumption externality from vaccination (herd immunity = MEB) means MSB > MPB – the free market produces Q_m < Q*, leaving a deadweight welfare loss. NHS free provision shifts effective supply right from S₁ to S₂, removing the price barrier and raising coverage to Q*. MMR coverage of 95.1% meets the herd immunity threshold – the MEB is fully internalised. Direct provision outperforms a partial subsidy here because it reaches price-sensitive and convenience-sensitive groups simultaneously."'
  }
};

/* ---- link-extract.js ---- */
/* ============================================================
   ECONOS – Link It · Read the Extract station data
   Positive Externalities: education and government subsidy
   ============================================================ */

window.ECONOS_LINK_EXTRACT = {
  topic:   'Positive Externalities',
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

  eyebrow:     'Read the Extract',
  instruction: 'Read the passage carefully. Use the economic concepts you have studied to interpret what the extract implies about market failure and policy.',

  passage: {
    title: 'Extract: University education and the social rate of return',
    source: 'Adapted from: IFS analysis of UK Higher Education (2020) and ONS Labour Market data',
    text: 'Research by the Institute for Fiscal Studies estimates that graduates earn, on average, £10,000 more per year than non-graduates – generating significantly higher lifetime income tax revenue. But the benefits of education are not confined to the individual. Educated workforces attract inward investment, generate innovation and technology spillovers, and are associated with lower crime rates and better civic participation. Despite this, UK students pay tuition fees of up to £9,250 per year. Economists argue that without government intervention, the private cost of university acts as a deterrent, producing a level of higher education below what is socially optimal.'
  },

  questions: [
    {
      id: 'pos-ext-extract-q1',
      question: 'The extract argues that university education generates benefits beyond those captured by the student. Which market failure does this describe?',
      options: [
        'A negative externality – graduates impose costs on society through higher graduate salaries',
        'A public good problem – education is non-excludable and non-rival, so the market under-provides it',
        'A positive externality – third parties (firms, society) benefit from the student\'s education without paying for it',
        'An information gap – students do not know the future value of their degree'
      ],
      correct: 2,
      explanation: 'The extract describes a positive externality: benefits that spill over to third parties who do not pay for them. Firms gain productive, innovative workers; society benefits from lower crime and higher tax revenues; communities gain from civic participation. These external benefits mean the Marginal Social Benefit (MSB) exceeds the Marginal Private Benefit (MPB). The free market only reflects MPB, so it under-produces education relative to the socially optimal quantity where MSB = MSC.'
    },
    {
      id: 'pos-ext-extract-q2',
      question: '"Without government intervention, the private cost of university acts as a deterrent, producing a level of higher education below what is socially optimal." What does "socially optimal" mean in this context?',
      options: [
        'The quantity of education that maximises government tax revenue from graduates',
        'The quantity where marginal social benefit equals marginal social cost – the allocatively efficient outcome',
        'The maximum possible quantity of graduates, regardless of cost',
        'The quantity that eliminates all unemployment among non-graduates'
      ],
      correct: 1,
      explanation: 'The socially optimal quantity is where MSB = MSC – this is the allocatively efficient outcome that maximises total welfare (consumer + producer + external benefits, minus total social costs). When education generates positive externalities, MSB > MPB. If the market only produces where MPB = MPC, it falls short of the socially optimal quantity. The gap between market output and socially optimal output represents the welfare loss from under-provision.'
    },
    {
      id: 'pos-ext-extract-q3',
      question: 'The UK government subsidises university education through student loans and Teaching Grant funding. Based on the extract, what is the economic justification for this subsidy?',
      options: [
        'The subsidy corrects for information failure by informing students of graduate wage premiums',
        'The subsidy reduces tuition fees, internalising the positive externality by bringing private cost closer to social cost – increasing consumption toward the socially optimal quantity',
        'The subsidy is justified because education is a public good that the free market cannot provide at all',
        'The subsidy eliminates the negative externality created by competition between graduates in the labour market'
      ],
      correct: 1,
      explanation: 'The economic justification for subsidising education is to bridge the gap between the high private cost (tuition fees + foregone earnings) and the lower effective cost needed to reach the socially optimal quantity. By reducing the private cost, the government makes it rational for more individuals to attend university – increasing provision toward the point where MSB = MSC. This is the standard Pigouvian subsidy argument: internalise the external benefit by reducing the private cost by an amount equal to the marginal external benefit.'
    }
  ]
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for pos_externalities
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Positive Externalities',
  estTime: '15–20 minutes',
  goal:    'Bridge your positive externality knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "You've locked in the benefits trilogy, the positive externality diagram and the key policies. Now train the skills examiners reward – applying the framework to real context, building a watertight MPB → MSB chain, and reaching a supported judgement on whether public provision is justified.",
    heroKey: 'heroBars',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real context to test whether direct provision is justified',
      'Build a watertight MPB → MSB → underproduction causal chain',
      'Pick, label and explain the positive externality supply and demand diagram',
      'Evaluate the key conditions that change the policy verdict'
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
   Positive Externalities: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Positive Externalities',
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
      id: 'direct-provision-judgement',
      claim: {
        icon:   '💉',
        prompt: 'Policy claim',
        text:   'Direct public provision is the most effective policy to correct the underproduction of goods with positive consumption externalities.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'MMR coverage 95.1% (meets herd immunity threshold); private uptake only 8% before NHS expansion; 24,000 measles cases prevented per 1% coverage point.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'MEB ignored by market → consumers produce at Q_market (MPB = MPC) < Q* (MSB = MPC) → underproduction → deadweight welfare loss.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'NHS provision shifts effective supply right from S₁ to S₂ → Q rises from Q_m to Q*, P* below P_m, DWL eliminated.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on size of MEB, whether unvaccinated group is price-sensitive, and whether alternatives (subsidy, mandate, information) are more cost-effective.' }
      ],
      cloze: 'In a positive consumption externality, the [1] (herd immunity for vaccination) means MSB sits [2] MPB at every quantity. The free market produces Q_market where [3] equals MPC – below Q* where MSB equals MPC. This underproduction generates a [4] that represents welfare forgone. NHS free provision shifts effective supply [5] from S₁ to S₂, closing the gap between Q_market and [6]. The policy works best when the MEB is [7]: if the external benefit is large and measurable, full public provision is justified and achieves Q* reliably. However, if non-vaccinators are motivated by [8] rather than price, free provision cannot achieve Q* – and information campaigns or mandates become more effective complementary tools.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-meb',     text: 'MEB (marginal external benefit)', correct: true  },
            { id: 'b1-mec',     text: 'MEC (marginal external cost)',     correct: false },
            { id: 'b1-msc',     text: 'MSC (marginal social cost)',       correct: false },
            { id: 'b1-dwl',     text: 'DWL (deadweight welfare loss)',    correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-above',   text: 'above',       correct: true  },
            { id: 'b2-below',   text: 'below',       correct: false },
            { id: 'b2-equal',   text: 'equal to',    correct: false },
            { id: 'b2-unrel',   text: 'unrelated to', correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-mpb',     text: 'MPB',  correct: true  },
            { id: 'b3-msb',     text: 'MSB',  correct: false },
            { id: 'b3-mpc',     text: 'MPC',  correct: false },
            { id: 'b3-msc',     text: 'MSC',  correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-dwl',     text: 'deadweight welfare loss',  correct: true  },
            { id: 'b4-cs',      text: 'consumer surplus gain',    correct: false },
            { id: 'b4-ps',      text: 'producer surplus',         correct: false },
            { id: 'b4-tax',     text: 'tax revenue',              correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-right',   text: 'right',   correct: true  },
            { id: 'b5-left',    text: 'left',    correct: false },
            { id: 'b5-up',      text: 'upward',  correct: false },
            { id: 'b5-down',    text: 'downward', correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-qstar',   text: 'Q*',        correct: true  },
            { id: 'b6-qmkt',    text: 'Q_market',  correct: false },
            { id: 'b6-msc',     text: 'MSC',       correct: false },
            { id: 'b6-mec',     text: 'MEC',       correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-large',   text: 'large and measurable',   correct: true  },
            { id: 'b7-small',   text: 'small and uncertain',    correct: false },
            { id: 'b7-mpc',     text: 'equal to MPC',          correct: false },
            { id: 'b7-zero',    text: 'zero',                   correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-ideo',    text: 'ideological resistance (vaccine hesitancy)', correct: true  },
            { id: 'b8-price',   text: 'price',                                     correct: false },
            { id: 'b8-income',  text: 'income constraints',                        correct: false },
            { id: 'b8-reg',     text: 'regulatory barriers',                       correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',   text: 'Direct public provision always achieves the social optimum regardless of conditions',    correct: false },
          { id: 'op-cond',     text: 'Direct provision is most effective when MEB is large, measurable and the barrier to uptake is price', correct: true  },
          { id: 'op-never',    text: 'Subsidies never correct positive externalities',                                         correct: false },
          { id: 'op-unlimited', text: 'Positive externalities justify unlimited government spending without welfare analysis',  correct: false }
        ]
      },
      examBridge: '"The NHS vaccination programme demonstrates that direct provision corrects positive consumption externalities where MEB is large (24,000 measles cases prevented per 1% coverage point) and the unvaccinated population is primarily price-sensitive. The shift in effective supply from S₁ to S₂ raises coverage from Q_market (~50%) to Q* (95.1%), meeting the herd immunity threshold and fully internalising the externality. However, the 2019 measles outbreak following a 3.8pp coverage fall illustrates the fragility of the outcome – sustained provision and complementary behavioural interventions are required to maintain Q*."'
    }
  ]
};

