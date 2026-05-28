/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   Taxes & Subsidies as Policy: build the MPB → underproduction → DWL chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Taxes &amp; Subsidies as Policy',
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
      id: 'pos-ext-mechanism',
      scenario: {
        icon:  '🌬️',
        label: 'Scenario',
        text:  'Offshore wind energy generates positive externalities: it reduces carbon emissions, lowers air pollution and improves energy security. Without intervention, the market underproduces relative to the socially optimal level.'
      },
      anchor: 'Wind producers earn only MPB – cannot capture the MEB they create.',
      tiles: [
        {
          id:  'step-supply',
          icon: '💡',
          text: 'Produce at Q_market where MPB = MPC – ignoring MEB',
          pos:  0
        },
        {
          id:  'step-under',
          icon: '📊',
          text: 'Q_market < Q* (where MSB = MPC) → market underproduces',
          pos:  1
        },
        {
          id:  'step-subsidy',
          icon: '💸',
          text: 'Subsidy = MEB → supply shifts right to Q* → DWL removed',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🤝',
          text: 'Consumers pay more to cover the external benefit, fixing it automatically',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '📈',
          text: 'The market overproduces renewables because consumers value clean energy',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏛️',
          text: 'Regulation fixes it by setting a maximum fossil-fuel output level',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Offshore wind producers only receive the market price – reflecting consumers\' willingness to pay (MPB). The MEB they create – avoided carbon damage, cleaner air, energy security – is a real benefit to society, but no-one pays producers for it. So the firm supplies where MPB = MPC, as if external benefits do not exist.'
        },
        {
          pos:  1,
          text: 'Because MPB < MSB at every unit of output (MSB = MPB + MEB), the market equilibrium (Q_market) lies to the left of the social optimum (Q*). The firm has no incentive to expand to Q* – the full social benefit exceeds what they can charge – so the market underproduces relative to what society would choose if all benefits were included.'
        },
        {
          pos:  2,
          text: 'A production subsidy equal to the MEB reduces the effective cost of production by the externality amount per unit. This closes the gap between MPC and MSB – the supply curve shifts right until it intersects MSB at Q*. Output rises to the social optimum and the deadweight welfare loss from underproduction is eliminated.'
        }
      ],
      examBridge: '"In an unregulated market, offshore wind producers supply at Q_market where MPB = MPC, ignoring the MEB of clean energy they provide to society. Because MSB = MPB + MEB > MPB throughout, the market underproduces below Q*, creating a deadweight welfare loss. A production subsidy equal to the MEB shifts effective supply right to Q*, restoring the social optimum."',

      prompts: [
        'Why do offshore wind producers not account for the external benefits they generate?',
        'Where does the market equilibrium fall relative to the social optimum, and why?',
        'How does a production subsidy equal to the MEB correct the market failure?'
      ],
      modelAnswers: [
        'Producers only respond to the market price, which reflects MPB – private willingness to pay. The MEB (reduced carbon, cleaner air, energy security) benefits society as a whole but is not captured in the price signal. Producers therefore act as if external benefits are zero, supplying only where MPB = MPC.',
        'The market equilibrium is at Q_market, where MPB = MPC. But MSB = MPB + MEB > MPB, so MSB = MPC at a higher output level Q*. The market therefore underproduces – Q_market < Q* – because producers stop where the private benefit equals their cost, not where the social benefit does.',
        'The subsidy reduces the effective cost of production by exactly the MEB per unit. This shifts the effective supply curve right – producers now supply more at each price. The new equilibrium is at Q*, where the subsidised MPC equals MSB. The DWL triangle from underproduction – the area between MSB and MPC from Q_market to Q* – is eliminated.'
      ],
      vocab: ['MPB', 'MEB', 'MSB', 'MPC', 'Q*', 'Q_market', 'subsidy', 'social optimum', 'underproduction', 'deadweight welfare loss', 'positive externality']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Taxes & Subsidies as Policy
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Taxes &amp; Subsidies as Policy',
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

  useInLandIt: 'A production subsidy corrects positive externalities by shifting effective supply right from MPC to MPC−subsidy, raising output from Q_market to Q* and eliminating the deadweight welfare loss from underproduction. The subsidy works best when the MEB is accurately estimated, and its net benefit is greatest when combined with carbon pricing that addresses the negative externality from fossil fuel use simultaneously.',

  focusInLandIt: {
    context: 'Use specific evidence – the £28 MEB per MWh, the 14 GW delivered capacity and the 63% cost reduction – to anchor your application to the real-world CfD case, not just generic positive externality theory.',
    chain:   'State the chain explicitly: MEB ignored by market → producers supply at Q_market < Q* → MSB > MPC between Q_market and Q* → deadweight welfare loss from underproduction.',
    diagram: 'Draw all three curves (MSB, S₁ = MPC, S₂ = MPC−subsidy), label both equilibria (Q₀/P₀ and Q_s/P_s), and show the supply shift right with the arrow pointing from S₁ toward S₂.',
    depends: 'Lead with MEB accuracy as your condition – if the subsidy is miscalibrated, the whole correction mechanism fails regardless of how the rest of the policy is designed.',
    judge:   'State a clear position, use the mechanism (supply shifts right, DWL eliminated), add the condition (MEB measurability / technology learning / funding equity), and note that subsidies paired with carbon pricing deliver the strongest correction on both sides of the market failure.'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   Taxes & Subsidies as Policy: classify evidence on the UK CfD scheme
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Taxes &amp; Subsidies as Policy',
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
    question:    'Which details in this extract most change whether the UK government\'s Contracts for Difference (CfD) subsidy scheme is an effective way to expand renewable energy production?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'The UK\'s Contracts for Difference scheme guarantees offshore wind producers a fixed "strike price" – currently £44 per MWh – regardless of the market price, with the difference paid by a levy on household energy bills. The scheme has [[capacity|delivered 14 GW of offshore wind – the world\'s largest such market]] by installed capacity.',
      'Independent economists calculate that each megawatt-hour of wind energy generates [[meb|approximately £28 in marginal external benefits]] – through avoided carbon damage, reduced air pollution and energy security gains – which the private market would otherwise not reward producers for providing.',
      'However, consumer groups warn that the CfD levy adds [[regressive-cost|an estimated £65 per year to average household energy bills]], with the burden falling disproportionately on fuel-poor households who spend the highest share of income on energy.',
      'The Energy Transitions Commission notes that [[cost-reduction|offshore wind LCOE fell from £120/MWh (2012) to £44/MWh (2024) – −63%]] – suggesting that the subsidy is successfully pulling technology down the learning curve and may become less necessary as the sector matures.',
      'Energy security analysts point out that [[fossil-dependency|the UK imported 39% of its gas needs in 2022]], exposing consumers to volatile international markets; domestic renewable expansion directly reduces this dependency, an external benefit not captured in market prices.'
    ],

    evidence: {
      'capacity':         { text: 'delivered 14 GW of offshore wind – the world\'s largest such market' },
      'meb':              { text: 'approximately £28 in marginal external benefits' },
      'regressive-cost':  { text: 'an estimated £65 per year to average household energy bills' },
      'cost-reduction':   { text: 'offshore wind LCOE fell from £120/MWh (2012) to £44/MWh (2024) – −63%' },
      'fossil-dependency': { text: 'the UK imported 39% of its gas needs in 2022' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the CfD subsidy scheme',  tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against the CfD scheme',    tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',  tone: 'blue',  icon: '?' }
    ],

    correct: {
      'capacity':          'supports',
      'meb':               'supports',
      'regressive-cost':   'against',
      'cost-reduction':    'complicates',
      'fossil-dependency': 'supports'
    },

    explain: {
      'capacity':          'Delivering 14 GW and the world\'s largest offshore wind market is direct evidence of deployment success – the subsidy has expanded output well beyond what the unsubsidised private market would have provided, strongly supporting the CfD scheme\'s effectiveness.',
      'meb':               'Quantifying £28 of MEB per MWh confirms that a significant positive externality exists and goes unrewarded by the private market. This is the theoretical foundation for the subsidy: it closes the gap between MPB and MSB, correcting the underproduction from the unsubsidised market.',
      'regressive-cost':   'A flat levy of £65 per year on household energy bills is regressive – fuel-poor households spend a higher share of income on energy and bear a disproportionate burden. This is a concrete argument against the CfD\'s funding mechanism, even if the subsidy itself is justified by the externality.',
      'cost-reduction':    'A 63% fall in levelised costs strengthens the case that the subsidy is working – the technology is maturing and costs are converging with the strike price. But this also raises the question of whether the subsidy is still needed as market prices approach £44/MWh, complicating the case rather than settling it either way.',
      'fossil-dependency': 'The UK\'s 39% gas import dependency creates energy security risks not captured in private market prices – this is an external benefit of domestic renewables beyond just carbon reduction. Quantifying this supports the case that the MEB is large enough to justify the CfD subsidy.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"Quantified evidence of £28 MEB per MWh and 14 GW of delivered capacity strongly supports the CfD scheme, but the case is complicated by the 63% cost reduction – the subsidy may be self-undermining as market prices converge with the strike price – and the regressive burden of the levy on fuel-poor households argues for an alternative funding mechanism even if the subsidy itself remains justified."',

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
   Taxes & Subsidies as Policy: evaluate a production subsidy claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Taxes &amp; Subsidies as Policy',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether a production subsidy actually achieves its stated objective.',
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
      id: 'subsidy-effectiveness',
      claim: {
        icon:   '🌬️',
        prompt: 'Policy claim',
        text:   'Subsidies to renewables best correct clean energy underproduction.'
      },
      factors: [
        {
          id:    'meb-accuracy',
          icon:  '🔍',
          label: 'Accuracy of the MEB estimate',
          why:   'Like a Pigouvian tax, a production subsidy must equal the MEB at Q* to restore allocative efficiency. Estimating the MEB for carbon reduction, air quality and energy security is technically complex and subject to wide ranges. An incorrectly calibrated subsidy over- or under-corrects the externality – a subsidy above the MEB causes overproduction; one below leaves underproduction continuing.'
        },
        {
          id:    'technology-learning',
          icon:  '📉',
          label: 'Speed of technology cost reduction',
          why:   'If the subsidy successfully pulls renewable costs down the learning curve – as offshore wind costs fell 63% from 2012 to 2024 – the market may eventually self-sustain without the subsidy. The policy is most effective when it bridges the gap from high-cost early technology to cost-competitive maturity, at which point the subsidy becomes unnecessary and can be withdrawn.'
        },
        {
          id:    'regressive-cost',
          icon:  '💰',
          label: 'Who bears the cost of the subsidy',
          why:   'If funded by a flat levy on energy bills (like the CfD), the subsidy is regressive – low-income households bear a disproportionate share of the cost relative to their income. Progressive funding via general taxation would be fairer but requires political decisions about prioritisation. The distributional impact on who pays does not change whether the subsidy corrects the externality, but it determines whether the net welfare gain is equitable.'
        },
        {
          id:    'alternative-policies',
          icon:  '⚡',
          label: 'Effectiveness vs alternative instruments',
          why:   'Carbon taxes, cap-and-trade, emission standards and public investment in grid infrastructure each address renewable underproduction differently. Subsidies expand supply directly but do not price fossil fuels out of the market. Combining subsidies with a carbon price may be more effective than subsidies alone – the subsidy corrects the positive externality on the renewable side, while the carbon price corrects the negative externality on the fossil fuel side.'
        },
        {
          id:    'crowding-out',
          icon:  '🏦',
          label: 'Risk of crowding out private investment',
          why:   'If government subsidises renewable energy heavily, private investors may reduce their own R&D and deployment spending, expecting public funds to cover the gap. The net increase in investment may be smaller than the subsidy cost implies – the government expenditure partially displaces rather than supplements private capital, reducing the efficiency of the subsidy as a correction mechanism.'
        },
        {
          id:    'fossil-dependency',
          icon:  '🌍',
          label: 'Security of fossil fuel import dependency',
          why:   'Domestically produced renewables reduce import dependency and exposure to geopolitical energy shocks. This is a strategic argument for subsidies beyond the pure externality case – the UK imported 39% of its gas needs in 2022 – and may justify higher subsidy levels than the pure MEB calculation would indicate, strengthening the case for the CfD scheme.'
        },
        {
          id:    'grid-integration',
          icon:  '🔌',
          label: 'Grid capacity and storage constraints',
          why:   'Expanding renewable generation beyond what the grid can absorb creates curtailment – wasted output that cannot be transmitted or stored. Subsidies that increase generation without parallel investment in grid and storage infrastructure deliver less of the MEB than the theory predicts, because some of the output never reaches consumers and generates no external benefit.'
        },
        {
          id:    'time-horizon',
          icon:  '⏱️',
          label: 'Time horizon of the external benefit',
          why:   'Climate benefits from reduced emissions accrue over decades, while subsidy costs are immediate. If future benefits are heavily discounted (a high social discount rate), the case for large current subsidies weakens. Conversely, if future climate costs are underestimated – as many economists now argue – the subsidy is underpowered relative to the true MEB, and the correction is insufficient.'
        }
      ],
      modelRanking: ['meb-accuracy', 'technology-learning', 'alternative-policies'],
      judgement: '"Whether a production subsidy is the \'most effective\' policy depends primarily on whether the MEB can be accurately measured – a miscalibrated subsidy will under- or over-correct the externality. If the subsidy successfully pulls renewable technology down the learning curve, it may become redundant as market prices converge with the strike price. And whether subsidies are more effective than alternative instruments – such as a carbon price – depends on whether correcting the positive externality on the renewable side alone is sufficient, or whether the negative externality from fossil fuels must also be explicitly priced."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Taxes & Subsidies as Policy: production subsidy shifts supply right (MPC → MPC−subsidy)
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   MSB (D):   (110,80)→(490,350)  slope = 0.711  ⟹  y = 80 + (x-110)*0.711
   S₁ (MPC):  (130,390)→(490,30)  slope = -1.0   ⟹  y = 520 - x
   S₂ (MPC−subsidy): (210,390)→(543,57)           ⟹  y = 600 - x  (80px shift right)
   E₁ (S₁ ∩ MSB): x ≈ 303, y ≈ 217  (market equilibrium – underproduction)
   E₂ (S₂ ∩ MSB): x ≈ 350, y ≈ 250  (social optimum after subsidy)              */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Taxes &amp; Subsidies as Policy',
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
    title:       'The government grants a production subsidy equal to the MEB to offshore wind producers. Which diagram correctly shows the market effect?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the production subsidy. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      's-right',
        correct:  true,
        title:   'Supply shifts right',
        sub:     'The subsidy reduces effective production costs – output rises toward Q*, price falls; underproduction is corrected',
        why:     'A production subsidy equal to the MEB reduces the firm\'s effective cost of supply, shifting the supply curve right. At every price, firms can now profitably supply more. Output rises from Q_market to Q* (the social optimum) and the consumer price falls from P₀ to P_s, eliminating the deadweight welfare loss from underproduction.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Rising consumer demand pushes up the price level',
        why:     'The production subsidy is paid to producers, not consumers. Demand (MSB) does not shift – consumers\' willingness to pay is unchanged. A rightward demand shift would represent rising consumer income or preferences, which is not the mechanism of a production subsidy.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Output falls and prices rise as supply contracts',
        why:     'Supply shifting left means producers face higher costs or a reduction in supply – this is the effect of a tax, not a subsidy. A production subsidy reduces effective costs and expands supply to the right. This diagram shows the opposite of what a corrective subsidy does.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Consumer spending falls, reducing the quantity demanded at every price',
        why:     'The production subsidy does not reduce consumer demand. Demand shifting left would represent a fall in consumer income or a change in preferences – neither of which is caused by a government subsidy to producers.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🌬️',
    text:  'The government grants a production subsidy equal to the MEB to offshore wind producers to correct the underproduction from a positive externality.',
    dataPoints: [
      { icon: '💸', text: 'Subsidy = MEB at the social optimum Q*' },
      { icon: '📈', text: 'Effective supply: MPC − subsidy = new lower cost curve' },
      { icon: '🌱', text: 'Output rises to Q*, eliminating the DWL from underproduction' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – production subsidy correcting a positive externality (underproduction)',
    xLabel:    'Quantity of output',
    yLabel:    'Price / Cost (£)',

    lines: [
      /* MSB (= D) – green downward-sloping */
      { x1: 110, y1: 80,  x2: 490, y2: 350, stroke: '#059669', strokeWidth: 2.5,
        label: 'MSB (D)', labelX: 493, labelY: 350, labelFill: '#059669' },
      /* S₁ (MPC – supply before subsidy) – blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S₁ (MPC)', labelX: 492, labelY: 28, labelFill: '#2563eb' },
      /* S₂ (MPC−subsidy – supply after production subsidy) – purple upward-sloping, 80px right of S₁ */
      { x1: 210, y1: 390, x2: 543, y2: 57,  stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'S₂ (subsidy)', labelX: 448, labelY: 53, labelFill: '#7c3aed' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₁ (original equilibrium price P₀) */
      { x1: 100, y1: 217, x2: 303, y2: 217, tickLeft: 'P₀',  tickLeftY: 220 },
      /* Horizontal from y-axis to E₂ (consumer price after subsidy P_s) */
      { x1: 100, y1: 250, x2: 350, y2: 250, tickLeft: 'P_s', tickLeftY: 253 },
      /* Vertical from E₁ down to x-axis */
      { x1: 303, y1: 217, x2: 303, y2: 400, tickBottom: 'Q₀',  tickBottomX: 303 },
      /* Vertical from E₂ down to x-axis */
      { x1: 350, y1: 250, x2: 350, y2: 400, tickBottom: 'Q_s', tickBottomX: 350 }
    ],

    /* Shift arrow: from S₁ toward S₂ at y=200, pointing right */
    shiftArrow: { x1: 324, y1: 200, x2: 396, y2: 200, stroke: '#7c3aed' },

    eqDots: [
      {
        cx: 303, cy: 217, fill: '#2563eb',
        initLabel: 'Original', initLabel2: 'equilibrium', initLabelX: 310, initLabelY: 212
      },
      {
        cx: 350, cy: 250, fill: '#7c3aed',
        newLabel: 'New', newLabel2: 'equilibrium', newLabelX: 357, newLabelY: 245
      }
    ],

    legend: [
      { color: '#059669', text: 'MSB (D) = Marginal Social Benefit (Demand)' },
      { color: '#2563eb', text: 'S₁ = MPC (supply before subsidy)' },
      { color: '#7c3aed', text: 'S₂ = MPC − subsidy (supply after production subsidy)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of a production subsidy equal to the MEB.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',    label: 'Shift label',           pctX: 56,  pctY: 41,   pctW: 23 },
      { id: 'new-eq',   label: 'New equilibrium',        pctX: 63,  pctY: 51,   pctW: 22 },
      { id: 'pre-eq',   label: 'Original equilibrium',   pctX: 54,  pctY: 44,   pctW: 23 },
      { id: 'lo-price', label: 'Lower consumer price',   pctX: 0.5, pctY: 53,   pctW: 16 },
      { id: 'hi-out',   label: 'Higher output',          pctX: 56,  pctY: 93.5, pctW: 16 }
    ],

    chips: [
      { id: 'sub-shift', text: 'Subsidy shifts supply right', icon: '→', zone: 'shift',    correct: true  },
      { id: 'new-eq',    text: 'New equilibrium (Q_s, P_s)',  icon: '●', zone: 'new-eq',   correct: true  },
      { id: 'pre-eq',    text: 'Original equilibrium (Q₀)',   icon: '●', zone: 'pre-eq',   correct: true  },
      { id: 'lo-price',  text: 'Lower consumer price (P_s)',  icon: '↓', zone: 'lo-price', correct: true  },
      { id: 'hi-out',    text: 'Higher output (Q_s)',         icon: '↑', zone: 'hi-out',   correct: true  },
      { id: 'dem-right', text: 'Demand shifts right',         icon: '→', zone: null,       correct: false },
      { id: 'hi-price',  text: 'Consumer price rises',        icon: '↑', zone: null,       correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['subsidy', 'MEB', 'MSB', 'MPC', 'MPB', 'Q*', 'Q_market', 'positive externality', 'underproduction', 'deadweight welfare loss', 'producer surplus', 'consumer surplus'],

    parts: [
      {
        num:         1,
        title:       'Explain the curves',
        prompt:      'Why does S₂ sit below and to the right of S₁, and what does the gap represent?',
        maxChars:    240,
        modelAnswer: 'The subsidy reduces the effective cost of production by the MEB amount per unit – producers now receive the market price plus the subsidy payment, making it profitable to supply more at each price. S₂ sits to the right of S₁ because the vertical distance between them equals the subsidy = MEB; this closes the gap between MPC and MSB, correcting the underproduction from the positive externality.'
      },
      {
        num:         2,
        title:       'Explain the shift',
        prompt:      'What happens to the consumer price and output level after the subsidy?',
        maxChars:    240,
        modelAnswer: 'The market equilibrium shifts from E₁ (Q₀, P₀) to E₂ (Q_s, P_s): consumer price falls from P₀ to P_s and output rises from Q₀ to Q_s (toward Q*). The deadweight welfare loss from underproduction – the triangle between MSB and MPC from Q_market to Q* – is eliminated as the socially optimal quantity is reached.'
      },
      {
        num:         3,
        title:       'Add a wider effect',
        prompt:      'Add one effect on external benefits or wider social welfare.',
        maxChars:    240,
        modelAnswer: 'As offshore wind output rises to Q_s, the MEB is delivered – carbon emissions fall, air quality improves and energy security increases; society gains the external benefit that the unsubsidised market would not have produced. If the subsidy is set exactly equal to the MEB at Q*, allocative efficiency is restored at the point where MSB = MPC.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Reference both S₁ (MPC) and S₂ (MPC − subsidy)',
      'Explain the direction of the shift',
      'State the outcome for Q and P',
      'Name the welfare effect'
    ],

    examAnswer: '"A production subsidy equal to the MEB reduces effective costs, shifting supply right from S₁ (MPC) to S₂ (MPC − subsidy) and raising output from Q₀ to Q_s – the social optimum. Consumer price falls from P₀ to P_s, and the deadweight welfare loss from underproduction is eliminated as the market now produces where MSB = MPC. Society gains the full marginal external benefit – reduced carbon, cleaner air and improved energy security – that the unsubsidised private market failed to deliver."'
  }
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for taxes_subsidies_policy
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Taxes &amp; Subsidies as Policy',
  estTime: '15–20 minutes',
  goal:    'Apply the taxes and subsidies framework – when subsidies correct underproduction, and what conditions make them more or less effective than regulation.',

  intro: {
    summary: "You've locked in the justification logic, the UK case studies and the three-axis evaluation framework. Now train the skills examiners reward – applying the subsidy framework to real context, building a watertight MPB → underproduction chain, and reaching a supported judgement on whether the CfD scheme is justified.",
    heroKey: 'heroIntervention',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real context to test whether a production subsidy is justified',
      'Build a watertight MPB → underproduction → DWL causal chain',
      'Pick, label and explain the supply and demand diagram showing a production subsidy correcting underproduction.',
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
   Taxes & Subsidies as Policy: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Taxes &amp; Subsidies as Policy',
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
      id: 'subsidy-judgement',
      claim: {
        icon:   '🌬️',
        prompt: 'Policy claim',
        text:   'Government subsidies to renewable energy producers are the most effective way to correct the underproduction of clean energy.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '£28 MEB per MWh confirmed; 14 GW of offshore wind delivered; 63% cost reduction 2012–24; regressive £65/yr levy on household bills.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'MEB ignored by market → producers supply at Q_market < Q* → underproduction → deadweight welfare loss.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'Subsidy shifts supply right from S₁ (MPC) to S₂ (MPC−subsidy) → Q rises to Q_s, P falls to P_s, DWL eliminated.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on MEB accuracy, speed of technology cost reduction, and whether subsidies are paired with carbon pricing.' }
      ],
      cloze: 'Overall, a production subsidy is effective at correcting renewable energy underproduction when it is set equal to the [1], because it shifts effective supply right from MPC to [2], raising output from Q_market to [3] and eliminating the deadweight welfare loss. However, the subsidy is less effective when the [4] cannot be accurately measured, risking over- or under-correction of the externality. The cost of the subsidy falls on [5] via the energy bill levy, creating a [6] burden. Therefore, the strongest judgement is that subsidies are a [7] instrument for correcting positive externalities, but their net benefit depends on combining them with policies that also [8] fossil fuels, such as a carbon price.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-meb',       text: 'marginal external benefit (MEB)', correct: true  },
            { id: 'b1-mpb',       text: 'marginal private benefit',        correct: false },
            { id: 'b1-ar',        text: 'average revenue',                 correct: false },
            { id: 'b1-cs',        text: 'consumer surplus',                correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-msb',       text: 'MSB',  correct: true  },
            { id: 'b2-mpb',       text: 'MPB',  correct: false },
            { id: 'b2-mpc',       text: 'MPC',  correct: false },
            { id: 'b2-ad',        text: 'AD',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-qstar',     text: 'Q*, the social optimum',  correct: true  },
            { id: 'b3-qmarket',   text: 'Q_market',                correct: false },
            { id: 'b3-lras',      text: 'LRAS',                    correct: false },
            { id: 'b3-orig',      text: 'the original equilibrium', correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-meb',       text: 'MEB',              correct: true  },
            { id: 'b4-mpc',       text: 'MPC',              correct: false },
            { id: 'b4-price',     text: 'consumer price',   correct: false },
            { id: 'b4-budget',    text: 'government budget', correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-consumers', text: 'energy consumers', correct: true  },
            { id: 'b5-producers', text: 'producers',        correct: false },
            { id: 'b5-gov',       text: 'the government',   correct: false },
            { id: 'b5-foreign',   text: 'foreign investors', correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-regressive',   text: 'regressive',   correct: true  },
            { id: 'b6-progressive',  text: 'progressive',  correct: false },
            { id: 'b6-proportional', text: 'proportional', correct: false },
            { id: 'b6-neutral',      text: 'neutral',       correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-conditional', text: 'theoretically sound but conditional',  correct: true  },
            { id: 'b7-perfect',     text: 'perfect and self-sustaining',          correct: false },
            { id: 'b7-irrelevant',  text: 'irrelevant to market failure',         correct: false },
            { id: 'b7-superior',    text: 'always superior to regulation',        correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-price-in',   text: 'price in the cost of',    correct: true  },
            { id: 'b8-expand',     text: 'expand the production of', correct: false },
            { id: 'b8-subsidise',  text: 'subsidise the use of',    correct: false },
            { id: 'b8-import',     text: 'import more',             correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-best',       text: 'Subsidies correct positive externalities but are most effective when paired with carbon pricing to address the negative externality side', correct: true  },
          { id: 'op-always',     text: 'Subsidies always achieve the social optimum for positive externalities',                                                                  correct: false },
          { id: 'op-no',         text: 'Subsidies should not be used – only regulation corrects renewable underproduction',                                                       correct: false },
          { id: 'op-market',     text: 'Renewable energy underproduction does not require government intervention',                                                               correct: false }
        ]
      },
      examBridge: '"A production subsidy is theoretically sound: it shifts effective supply right from MPC to S₂, raising output to Q* and eliminating the deadweight welfare loss from underproduction of a positive externality. However, its practical effectiveness depends on the accuracy of the MEB estimate, the speed at which technology costs fall, and whether the regressive funding mechanism can be replaced with a more equitable alternative. The strongest judgement is that subsidies are a useful first-line tool for correcting positive externalities, but their net benefit is maximised when combined with a carbon price that also addresses the negative externality from fossil fuel use."'
    }
  ]
};

