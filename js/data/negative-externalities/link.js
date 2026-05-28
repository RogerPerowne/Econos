/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   Negative Externalities: build the MPC → overproduction → DWL chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Negative Externalities',
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
      id: 'neg-ext-mechanism',
      scenario: {
        icon:  '🏭',
        label: 'Scenario',
        text:  'A cement plant produces 1,000 tonnes of output per day, emitting particulate pollution that causes respiratory illness in nearby residents. There is no government intervention.'
      },
      anchor: 'The plant\'s MPC ignores the MEC its pollution imposes on others.',
      tiles: [
        {
          id:  'step-mec',
          icon: '👥',
          text: 'Firm produces at Q_market where MPC = MSB – ignores MEC',
          pos:  0
        },
        {
          id:  'step-over',
          icon: '📊',
          text: 'Output Q_market > Q* (where MSC = MSB) → market overproduces',
          pos:  1
        },
        {
          id:  'step-dwl',
          icon: '📉',
          text: 'For each unit beyond Q*, MSC > MSB – a deadweight welfare loss accumulates',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🤝',
          text: 'Third parties negotiate directly with the plant; market self-clears',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '📈',
          text: 'MSB shifts right as pollution increases consumer willingness to pay',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏛️',
          text: 'Government revenue rises automatically as the externality grows larger',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'The firm only responds to its MPC – wages, energy, raw materials. The MEC (harm to residents from pollution) is a real cost to society, but it does not appear in the firm\'s cost calculation. So the firm produces where MPC = MSB, as if external costs do not exist.'
        },
        {
          pos:  1,
          text: 'Because MPC < MSC at every unit of output, the market equilibrium (Q_market) lies to the right of the social optimum (Q*). The firm has no incentive to stop at Q* – it keeps producing as long as MPC ≤ MSB, so it overproduces relative to what society would choose if all costs were included.'
        },
        {
          pos:  2,
          text: 'For every unit produced between Q* and Q_market, the marginal social cost (MSC) exceeds the marginal social benefit (MSB). Society is worse off for each of these units. The total welfare loss – the deadweight welfare loss – equals the area of the triangle between MSC, MSB, and the vertical at Q_market.'
        }
      ],
      examBridge: '"In an unregulated market the cement plant produces at Q_market where MPC = MSB, ignoring the MEC imposed on third parties. Because MSC > MPC throughout, the market overproduces beyond Q*, creating a deadweight welfare loss equal to the area between MSC and MSB from Q* to Q_market."',

      prompts: [
        'Why does the firm not account for the harm it causes to third parties?',
        'Where does the market equilibrium fall relative to the social optimum?',
        'What happens to social welfare for every unit produced beyond Q*?'
      ],
      modelAnswers: [
        'The firm only faces its MPC – private costs of inputs. The MEC (harm to residents) does not enter its cost function, so it acts as if external costs are zero. This is the core of market failure from negative externalities.',
        'The market equilibrium is at Q_market, where MPC = MSB. But MSC = MPC + MEC > MPC, so MSC = MSB at a lower output level Q*. The market therefore overproduces – Q_market > Q*.',
        'For each unit from Q* to Q_market, MSC > MSB – the true social cost exceeds the benefit. Society suffers a net welfare loss on each of these units, accumulating the deadweight welfare loss triangle on the diagram.'
      ],
      vocab: ['MPC', 'MEC', 'MSC', 'MSB', 'Q*', 'Q_market', 'deadweight welfare loss', 'social optimum', 'overproduction', 'internalise']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Negative Externalities
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Negative Externalities',
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

  useInLandIt: 'A Pigouvian tax corrects negative externalities by shifting effective supply from MPC to MSC, reducing output from Q_market to Q* and eliminating the deadweight welfare loss. However, it works best when the MEC is accurately measured and demand is elastic enough that the tax genuinely reduces output rather than mainly raising consumer prices.',

  focusInLandIt: {
    context: 'Use specific evidence – the £20bn MEC and ETS revenue figures – to anchor your application to the real-world case, not just generic externality theory.',
    chain:   'State the chain explicitly: MPC excludes MEC → firm overproduces at Q_market → MSC > MSB between Q* and Q_market → deadweight welfare loss.',
    diagram: 'Draw all three curves (MSB, MPC, MSC), label both equilibria (Q_market/P_market and Q*/P*), and shade the DWL triangle between MSC, MSB and the vertical at Q_market.',
    depends: 'Lead with MEC accuracy as your condition – if the tax is miscalibrated, the whole correction mechanism fails regardless of how the rest of the policy is designed.',
    judge:   'State a clear position, use the mechanism (MPC → MSC shift, DWL eliminated), add the condition (MEC measurability / elasticity / leakage), and explain the limitation honestly.'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   Negative Externalities: classify evidence on extending the UK ETS
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Negative Externalities',
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
    question:    'Which details in this extract most change whether the government should extend and tighten the UK Emissions Trading Scheme to cover all major industrial polluters?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'New analysis from the Office for Environmental Protection estimates that UK steel and cement production generates [[health-costs|around £20 billion in annual health and environmental damage]], including respiratory illness, reduced life expectancy and climate impacts on communities near industrial sites.',
      'Proponents of extending the UK Emissions Trading Scheme argue that the existing scheme [[revenue|raised £4.4bn in 2023, much funding clean energy and green investment]] – evidence that a well-designed carbon price can both correct externalities and fund the green transition.',
      'However, industry groups warn that tightening the ETS would [[competitiveness|raise steel production costs by 18–22%]], threatening the viability of blast furnace operations in South Wales and Yorkshire.',
      'Economists raise the concern of [[leakage|carbon leakage: UK output falls but global demand shifts elsewhere]], total global emissions may not fall – and the domestic economic cost would be borne for no net environmental benefit.',
      'New elasticity estimates suggest the [[inelastic|short-run PED for industrial steel ≈ −0.15]], meaning a large price rise from an extended ETS would result in only a modest reduction in output.'
    ],

    evidence: {
      'health-costs':    { text: 'around £20 billion in annual health and environmental damage' },
      'revenue':         { text: 'raised £4.4bn in 2023, much funding clean energy and green investment' },
      'competitiveness': { text: 'raise steel production costs by 18–22%' },
      'leakage':         { text: 'carbon leakage: UK output falls but global demand shifts elsewhere' },
      'inelastic':       { text: 'short-run PED for industrial steel ≈ −0.15' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports extending the ETS',       tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against extending the ETS', tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',  tone: 'blue',  icon: '?' }
    ],

    correct: {
      'health-costs':    'supports',
      'revenue':         'supports',
      'competitiveness': 'against',
      'leakage':         'complicates',
      'inelastic':       'complicates'
    },

    explain: {
      'health-costs':    'Quantifying £20bn of annual harm confirms a large MEC – the measured external cost directly justifies intervention to correct the overproduction from unregulated markets.',
      'revenue':         'Tax revenue recycled into clean energy subsidies creates a "double dividend": the ETS both corrects the externality and generates funds for further green transition. This strengthens the case for extending it.',
      'competitiveness': 'An 18–22% rise in production costs may make UK steel unviable, triggering plant closures and regional unemployment. This is a concrete argument against tightening the ETS without border adjustment protection.',
      'leakage':         'If UK output falls but global demand is satisfied by less regulated producers, total emissions may not fall. This complicates rather than settles the argument – border adjustment mechanisms (like a CBAM) could resolve it, or they might not.',
      'inelastic':       'With PED ≈ −0.15, a large price increase from the ETS cuts output and pollution only a little in the short run. The tax achieves less correction of overproduction than the theory predicts – complicating the case without clearly settling it.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"Quantified evidence of a £20bn MEC strongly supports intervention, but the case for extending the ETS is complicated by inelastic short-run demand – the tax will raise prices significantly while reducing output only modestly – and by the risk of carbon leakage if unilateral UK action shifts production to less regulated economies."',

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
   Negative Externalities: evaluate a Pigouvian tax claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Negative Externalities',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether a Pigouvian tax actually achieves its stated objective.',
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
      id: 'pigouvian-tax-effectiveness',
      claim: {
        icon:   '💸',
        prompt: 'Policy claim',
        text:   'A Pigouvian tax best corrects negative externalities from pollution.'
      },
      factors: [
        {
          id:    'mec-accuracy',
          icon:  '🔍',
          label: 'Accuracy of the MEC estimate',
          why:   'The tax must equal the MEC at Q* to achieve the social optimum. In practice, measuring MEC requires valuing non-market goods – health damage, biodiversity loss, climate impacts – with significant uncertainty. A tax set too low leaves overproduction continuing; too high, it suppresses output below Q* unnecessarily.'
        },
        {
          id:    'price-elasticity-of-demand',
          icon:  '📉',
          label: 'Price elasticity of demand',
          why:   'If demand is price inelastic (as with industrial steel, PED ≈ −0.15), a tax raises price substantially but reduces output and pollution only a little. The overproduction is barely corrected, and the tax is mostly passed to buyers as higher prices. The policy works best where demand is more elastic.'
        },
        {
          id:    'leakage',
          icon:  '🌍',
          label: 'Risk of carbon / pollution leakage',
          why:   'If polluting firms can relocate to countries with laxer standards, domestic output and pollution fall but global emissions may not. The externality is geographically displaced rather than corrected. The tax\'s effectiveness depends critically on whether international coordination or border carbon adjustment prevents this leakage.'
        },
        {
          id:    'political',
          icon:  '🗣️',
          label: 'Political feasibility and regulatory capture',
          why:   'Governments often set Pigouvian taxes below the true MEC to avoid political unpopularity. Powerful industry lobbying can weaken the tax before or after implementation, leaving a rate too low to correct the externality. The theoretical optimum and the politically deliverable rate may diverge significantly.'
        },
        {
          id:    'certainty',
          icon:  '🎯',
          label: 'Certainty of the environmental outcome',
          why:   'A tax sets a price on pollution but not a quantity ceiling – firms can always pollute more by paying more tax. Regulation (emission standards, bans) sets a hard limit directly. Where the environmental outcome must be guaranteed, regulation produces greater certainty than a tax.'
        },
        {
          id:    'monitoring',
          icon:  '📡',
          label: 'Ease of monitoring and enforcement',
          why:   'A Pigouvian tax requires accurate measurement of each firm\'s pollution output. For diffuse externalities – agricultural runoff, noise, particulate drift – monitoring may be technically difficult or costly. Where pollution cannot be reliably measured, a tax is impractical relative to blanket emission standards.'
        },
        {
          id:    'irreversibility',
          icon:  '⚠️',
          label: 'Irreversibility or severity of the harm',
          why:   'A tax allows firms to continue causing harm as long as they pay. Where external damage is catastrophic (toxic soil contamination, species extinction), allowing continued harm in exchange for revenue may be unacceptable. Command-and-control bans may be the only appropriate instrument.'
        },
        {
          id:    'revenue-use',
          icon:  '♻️',
          label: 'How the tax revenue is used',
          why:   'If Pigouvian tax revenue is recycled into green investment, compensation for affected third parties or lower taxes elsewhere, the net welfare gain is amplified – the "double dividend". If revenue disappears into general spending unrelated to the externality, the efficiency argument for the tax weakens.'
        }
      ],
      modelRanking: ['mec-accuracy', 'price-elasticity-of-demand', 'leakage'],
      judgement: '"Whether a Pigouvian tax is the \'most effective\' policy depends primarily on whether the MEC can be accurately measured – a miscalibrated tax will under- or over-correct the externality. Where demand is price inelastic, the tax raises consumer prices substantially while doing little to reduce overproduction. And where production can relocate to unregulated economies, the tax corrects the domestic market failure without reducing global externalities."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Negative Externalities: Pigouvian tax shifts supply left (MPC → MSC)
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   MSB (D):  (110,50)→(510,380)  slope = 0.825  ⟹  y = 50 + (x-110)*0.825
   MPC (S₁): (130,390)→(490,30)  slope = -1.0   ⟹  y = 520 - x
   MSC (S₂): (130,330)→(430,30)  MEC = 60px vertical gap above MPC  ⟹  y = 460 - x
   E₁ (MPC ∩ MSB): x ≈ 307, y ≈ 213  (market equilibrium)
   E₂ (MSC ∩ MSB): x ≈ 274, y ≈ 186  (social optimum)                           */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Negative Externalities',
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
    title:       'The government imposes a Pigouvian tax equal to the MEC on the cement plant. Which diagram correctly shows the effect on the market?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the Pigouvian tax. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      's-left',
        correct:  true,
        title:   'Supply shifts left',
        sub:     'The tax raises firms\' effective costs – output falls, price rises toward the social optimum',
        why:     'A Pigouvian tax equal to the MEC is added to the firm\'s costs, raising effective supply from MPC to MSC. The supply curve shifts left: at every price, firms supply less. Output falls from Q_market to Q* and price rises from P_market to P*, eliminating the deadweight welfare loss.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Consumer spending falls, reducing the quantity demanded at every price',
        why:     'The Pigouvian tax is levied on producers, not consumers. Demand (MSB) does not shift – consumers\' willingness to pay is unchanged. A leftward demand shift would represent a fall in consumer income or preferences, which is not what happens here.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Output rises and prices fall as supply expands',
        why:     'Supply shifting right means firms can produce more at every price – this represents falling costs or a technology improvement. A Pigouvian tax raises costs; it does not reduce them. This diagram shows the opposite of what a corrective tax does.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Rising consumer demand pushes up the price level',
        why:     'Demand shifting right represents rising consumer spending or income. The Pigouvian tax affects the supply side (firms\' costs), not the demand side. This diagram is irrelevant to the mechanism of a corrective tax.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🏭',
    text:  'The government imposes a Pigouvian tax equal to the MEC on the cement plant to internalise the cost of pollution.',
    dataPoints: [
      { icon: '💸', text: 'Tax = MEC at the social optimum Q*' },
      { icon: '📉', text: 'Effective supply shifts: MPC + tax = MSC' },
      { icon: '🌱', text: 'Third parties benefit as output falls to Q*' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – Pigouvian tax correcting a negative production externality',
    xLabel:    'Quantity of output',
    yLabel:    'Price / Cost (£)',

    lines: [
      /* MSB (= D) – green downward-sloping */
      { x1: 110, y1: 50,  x2: 510, y2: 380, stroke: '#059669', strokeWidth: 2.5,
        label: 'MSB (D)', labelX: 514, labelY: 380, labelFill: '#059669' },
      /* MPC (S₁ – supply before tax) – blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'MPC (S₁)', labelX: 492, labelY: 28, labelFill: '#2563eb' },
      /* MSC (S₂ – supply after Pigouvian tax) – purple upward-sloping, 60px above MPC */
      { x1: 130, y1: 330, x2: 430, y2: 30,  stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'MSC (S₂)', labelX: 433, labelY: 28, labelFill: '#7c3aed' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₂ (social optimum) */
      { x1: 100, y1: 186, x2: 274, y2: 186, tickLeft: 'P*',  tickLeftY: 189 },
      /* Horizontal from y-axis to E₁ (market equilibrium) */
      { x1: 100, y1: 213, x2: 307, y2: 213, tickLeft: 'P_m', tickLeftY: 216 },
      /* Vertical from E₂ down to x-axis */
      { x1: 274, y1: 186, x2: 274, y2: 400, tickBottom: 'Q*',  tickBottomX: 274 },
      /* Vertical from E₁ down to x-axis */
      { x1: 307, y1: 213, x2: 307, y2: 400, tickBottom: 'Q_m', tickBottomX: 307 }
    ],

    /* Shift arrow: from MPC toward MSC at y=80, pointing left */
    shiftArrow: { x1: 436, y1: 80, x2: 384, y2: 80, stroke: '#7c3aed' },

    eqDots: [
      {
        cx: 307, cy: 213, fill: '#2563eb',
        initLabel: 'Market', initLabel2: 'equilibrium', initLabelX: 314, initLabelY: 208
      },
      {
        cx: 274, cy: 186, fill: '#7c3aed',
        newLabel: 'Social', newLabel2: 'optimum', newLabelX: 281, newLabelY: 181
      }
    ],

    legend: [
      { color: '#059669', text: 'MSB = Marginal Social Benefit (Demand)' },
      { color: '#2563eb', text: 'MPC = Marginal Private Cost (Supply before tax)' },
      { color: '#7c3aed', text: 'MSC = Marginal Social Cost (Supply after Pigouvian tax)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of a Pigouvian tax equal to the MEC.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',    label: 'Shift label',          pctX: 62,  pctY: 13.5, pctW: 22 },
      { id: 'soc-opt',  label: 'Social optimum',       pctX: 49,  pctY: 37,   pctW: 22 },
      { id: 'mkt-eq',   label: 'Market equilibrium',   pctX: 56,  pctY: 44,   pctW: 24 },
      { id: 'hi-price', label: 'Higher price (P*)',     pctX: 0.5, pctY: 38,   pctW: 17 },
      { id: 'lo-out',   label: 'Lower output (Q*)',     pctX: 42,  pctY: 93.5, pctW: 18 }
    ],

    chips: [
      { id: 'tax-shift',  text: 'Tax shifts supply left',       icon: '←', zone: 'shift',    correct: true  },
      { id: 'soc-opt',    text: 'Social optimum (Q*, P*)',      icon: '●', zone: 'soc-opt',  correct: true  },
      { id: 'mkt-eq',     text: 'Market equilibrium (Q_m)',     icon: '●', zone: 'mkt-eq',   correct: true  },
      { id: 'hi-price',   text: 'Higher price (P*)',            icon: '↑', zone: 'hi-price', correct: true  },
      { id: 'lo-out',     text: 'Lower output (Q*)',            icon: '↓', zone: 'lo-out',   correct: true  },
      { id: 'dem-left',   text: 'Demand falls (MSB shifts)',    icon: '←', zone: null,       correct: false },
      { id: 'hi-out',     text: 'Higher output (Q_market)',     icon: '↑', zone: null,       correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['MPC', 'MEC', 'MSC', 'MSB', 'Q*', 'Q_market', 'Pigouvian tax', 'social optimum', 'deadweight welfare loss', 'internalise', 'allocative efficiency'],

    parts: [
      {
        num:         1,
        title:       'Explain the curves',
        prompt:      'Why does MSC sit above MPC, and what does the gap between them represent?',
        maxChars:    240,
        modelAnswer: 'MSC sits above MPC because MSC = MPC + MEC – the marginal external cost imposed on third parties (pollution, health damage) that the firm does not pay for. The vertical gap between the two curves is the MEC: the cost the free market ignores and the Pigouvian tax is designed to internalise.'
      },
      {
        num:         2,
        title:       'Explain the shift',
        prompt:      'What happens to price and quantity when the Pigouvian tax is imposed?',
        maxChars:    240,
        modelAnswer: 'The tax raises the firm\'s effective supply from MPC to MSC. The equilibrium shifts from E₁ (Q_market, P_market) to E₂ (Q*, P*): output falls from Q_market to Q* and price rises from P_market to P*. The deadweight welfare loss – the triangle between MSC and MSB from Q* to Q_market – is eliminated.'
      },
      {
        num:         3,
        title:       'Add a wider effect',
        prompt:      'Add one effect on third parties or allocative efficiency.',
        maxChars:    240,
        modelAnswer: 'Third parties benefit from reduced external harm – less pollution, lower respiratory illness and reduced NHS costs. Allocative efficiency is restored: society now produces the quantity at which the true cost of each unit (MSC) equals its true benefit (MSB). If the tax revenue is reinvested in green infrastructure, the welfare gain is further amplified.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Reference both MPC and MSC',
      'Explain the direction of the shift',
      'State the outcome for Q and P',
      'Name the welfare effect'
    ],

    examAnswer: '"A Pigouvian tax equal to the MEC raises the firm\'s effective marginal cost from MPC to MSC, shifting the supply curve left and reducing output from Q_market to Q* – the social optimum. Price rises from P_market to P*, internalising the external cost and eliminating the deadweight welfare loss that arises when the free market overproduces beyond Q*. Third parties benefit from reduced harm, and allocative efficiency is restored at the point where MSC = MSB."'
  }
};

/* ---- link-extract.js ---- */
/* ============================================================
   ECONOS – Link It · Read the Extract station data
   Negative Externalities: diesel vehicles and air quality policy
   ============================================================ */

window.ECONOS_LINK_EXTRACT = {
  topic:   'Negative Externalities',
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
  instruction: 'Read the passage carefully, then use economic theory to interpret each question. Link what the extract says to the concepts you\'ve studied.',

  passage: {
    title: 'Extract: Air pollution and diesel vehicles in UK cities',
    source: 'Adapted from: DEFRA Clean Air Strategy (2019) and PHE data',
    text: 'Diesel vehicles emit nitrogen oxides (NO<sub>x</sub>) and particulate matter (PM2.5) linked to approximately 28,000 premature deaths annually in the UK. The NHS spends an estimated £1.6 billion per year treating pollution-related respiratory conditions. Vehicle owners pay only the private cost of fuel, maintenance and time – they do not pay for the health damage their emissions impose on others. In response, London introduced the Ultra Low Emission Zone (ULEZ) in 2019, which charges the most polluting vehicles a daily fee to drive in central London.'
  },

  questions: [
    {
      id: 'neg-ext-extract-q1',
      question: 'According to the extract, why does the market for diesel vehicle use represent a case of market failure?',
      options: [
        'Diesel vehicles are a demerit good because consumers underestimate their own health risks from driving',
        'There is a divergence between private cost and social cost – third parties bear health costs that are not reflected in the driver\'s private cost',
        'The NHS is a public good that is under-provided by the free market',
        'There is asymmetric information between fuel companies and consumers about emissions levels'
      ],
      correct: 1,
      explanation: 'The extract describes a classic negative externality: "Vehicle owners pay only the private cost... they do not pay for the health damage their emissions impose on others." The social cost (MPC + external cost to NHS and residents) exceeds the private cost (MPC). This divergence causes the market to over-produce diesel vehicle use relative to the socially optimal quantity – the definition of negative externality market failure.'
    },
    {
      id: 'neg-ext-extract-q2',
      question: '"Vehicle owners do not pay for the health damage their emissions impose on others." Which economic concept does this sentence most precisely describe?',
      options: [
        'The free rider problem – some people use the NHS without contributing tax',
        'A negative consumption externality – the cost falls on third parties not party to the transaction',
        'Regulatory failure – the government has failed to set sufficient emission standards',
        'Information failure – drivers are not aware of the pollution their vehicles produce'
      ],
      correct: 1,
      explanation: 'This is the textbook definition of a negative externality: a cost imposed on a third party (here, people breathing polluted air and NHS patients) that is not reflected in the price or cost faced by those causing it (vehicle owners). The marginal social cost (MSC) exceeds the marginal private cost (MPC) by the value of the external health cost – approximately £1.6bn/year of NHS spending, plus lost life-years from 28,000 premature deaths.'
    },
    {
      id: 'neg-ext-extract-q3',
      question: 'The ULEZ charge is an example of which type of government intervention, and what is its theoretical effect on the externality?',
      options: [
        'A maximum price ceiling – it makes driving cheaper and more accessible for low-income drivers',
        'A regulation banning all diesel vehicles – removing the source of the externality entirely',
        'A Pigouvian tax – by charging polluting vehicles, it raises the private cost toward the social cost, reducing quantity driven toward the socially optimal level',
        'A subsidy to EV manufacturers – incentivising the production of cleaner vehicles as a long-run solution'
      ],
      correct: 2,
      explanation: 'The ULEZ charge is a Pigouvian tax (named after Arthur Pigou, 1920). By adding a charge equal to (or approximating) the external cost per journey, it internalises the externality – making drivers pay the full social cost of their trip. In theory, this shifts the effective private cost curve up to coincide with the social cost curve, reducing quantity toward the socially optimal level where MSB = MSC. In practice, setting the charge equal to the exact external cost is difficult – the £12.50/day ULEZ charge is an approximation.'
    }
  ]
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for neg_externalities
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Negative Externalities',
  estTime: '15–20 minutes',
  goal:    'Bridge your externality knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "You've locked in the costs trilogy, the negative externality diagram and the key policies. Now train the skills examiners reward – applying the framework to real context, building a watertight MPC → MSC chain, and reaching a supported judgement on whether intervention is justified.",
    heroKey: 'heroBars',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real context to test whether intervention is justified',
      'Build a watertight MPC → MSC → overproduction causal chain',
      'Pick, label and explain the negative externality supply and demand diagram',
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
   Negative Externalities: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Negative Externalities',
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
      id: 'pigouvian-tax-judgement',
      claim: {
        icon:   '💸',
        prompt: 'Policy claim',
        text:   'A Pigouvian tax is the most effective policy to correct negative externalities from industrial pollution.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '£20bn annual MEC confirmed; ETS raised £4.4bn reinvested in green transition; inelastic demand (PED −0.15).' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'MEC ignored by market → firm produces at Q_market > Q* → overproduction → deadweight welfare loss.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'Tax shifts supply left from MPC to MSC → Q falls to Q*, P rises to P*, DWL eliminated.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on MEC accuracy, price elasticity of demand, and risk of carbon leakage.' }
      ],
      cloze: 'Overall, a Pigouvian tax is [1] when the [2] can be accurately measured, because it forces firms to face the true [3] of their output, shifting effective supply left from MPC to [4]. This eliminates the [5] and restores [6]. However, the policy is less effective when demand is [7], since the tax raises [8] substantially while reducing output only a little. Therefore, the strongest judgement is that a Pigouvian tax is theoretically efficient but practically limited – and command-and-control regulation may produce a more certain outcome when irreversibility of harm is the primary concern.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-effective',   text: 'most effective',       correct: true  },
            { id: 'b1-irrelevant',  text: 'largely irrelevant',   correct: false },
            { id: 'b1-harmful',     text: 'harmful in all cases', correct: false },
            { id: 'b1-automatic',   text: 'automatically optimal', correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-mec',         text: 'marginal external cost',     correct: true  },
            { id: 'b2-gdp',         text: 'national income level',      correct: false },
            { id: 'b2-mpc',         text: 'marginal private cost',      correct: false },
            { id: 'b2-ped',         text: 'price elasticity of supply', correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-social',      text: 'social cost',          correct: true  },
            { id: 'b3-private',     text: 'private benefit',      correct: false },
            { id: 'b3-consumer',    text: 'consumer surplus',     correct: false },
            { id: 'b3-tax',         text: 'tax revenue burden',   correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-msc',         text: 'MSC',  correct: true  },
            { id: 'b4-msb',         text: 'MSB',  correct: false },
            { id: 'b4-ad',          text: 'AD',   correct: false },
            { id: 'b4-lras',        text: 'LRAS', correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-dwl',         text: 'deadweight welfare loss', correct: true  },
            { id: 'b5-cs',          text: 'consumer surplus',        correct: false },
            { id: 'b5-price',       text: 'general price level',     correct: false },
            { id: 'b5-revenue',     text: 'tax revenue',             correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-allocative',  text: 'allocative efficiency', correct: true  },
            { id: 'b6-gdp',         text: 'GDP growth',            correct: false },
            { id: 'b6-trade',       text: 'trade balance',         correct: false },
            { id: 'b6-monetary',    text: 'monetary stability',    correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-inelastic',   text: 'price inelastic',    correct: true  },
            { id: 'b7-elastic',     text: 'price elastic',      correct: false },
            { id: 'b7-income',      text: 'income elastic',     correct: false },
            { id: 'b7-cross',       text: 'cross-price elastic', correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-prices',      text: 'consumer prices',   correct: true  },
            { id: 'b8-spending',    text: 'government spending', correct: false },
            { id: 'b8-producer',    text: 'producer surplus',  correct: false },
            { id: 'b8-wages',       text: 'real wages',        correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',   text: 'Pigouvian taxes always achieve the social optimum',                      correct: false },
          { id: 'op-useful',   text: 'Pigouvian taxes are theoretically efficient but practically conditional', correct: true  },
          { id: 'op-no',       text: 'Pigouvian taxes should not be used – only regulation works',             correct: false },
          { id: 'op-market',   text: 'Market failure does not require government intervention',                 correct: false }
        ]
      },
      examBridge: '"A Pigouvian tax is theoretically efficient: it shifts effective supply left from MPC to MSC, reducing output to Q* and eliminating the deadweight welfare loss. However, its practical effectiveness depends on the accuracy of the MEC estimate, the elasticity of demand, and whether carbon leakage undermines the environmental outcome. The strongest judgement is that it is a useful first-line tool, but command-and-control regulation may be preferred where irreversibility of harm demands certainty of outcome."'
    }
  ]
};

/* ---- link-predict.js ---- */
/* ============================================================
   ECONOS – Link It · Predict the Outcome station data
   Negative Externalities: policy interventions and market effects
   ============================================================ */

window.ECONOS_LINK_PREDICT = {
  topic:   'Negative Externalities',
  backUrl: TopicLoader.routes.link('depends'),
  nextUrl: TopicLoader.routes.link('judge'),

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
      id: 'neg-pigouvian-tax',
      icon: '🏭',
      title: 'Government introduces a Pigouvian tax on cement production',
      setup: 'To correct for pollution externalities, the government imposes a tax per tonne of cement equal to the estimated marginal external cost (MEC). The tax is levied on cement producers. Assume cement demand is inelastic in the short run.',
      variables: [
        {
          id: 'mpc_shift',
          label: 'Effective marginal private cost (MPC) for cement producers',
          correct: 'increase',
          reason: 'The per-unit tax is added to each tonne produced. From the firm\'s perspective, the tax becomes a cost just like wages or energy. The effective MPC rises by the amount of the tax – the supply curve shifts left by the amount of the tax.'
        },
        {
          id: 'output',
          label: 'Quantity of cement produced (Q_market)',
          correct: 'decrease',
          reason: 'Higher effective costs push the supply curve left. At the original price, producers supply less. The new equilibrium occurs at Q* (the social optimum) – output falls from Q_market toward Q*. The tax internalises the externality by closing the gap between MPC and MSC.'
        },
        {
          id: 'consumer_price',
          label: 'Price of cement paid by consumers',
          correct: 'increase',
          reason: 'With supply shifting left, the equilibrium price rises. Consumers pay a higher price (the extent of the rise depends on tax incidence – with inelastic demand, consumers bear most of the burden). The consumer price rises by approximately the consumer\'s share of the tax.'
        },
        {
          id: 'dwl',
          label: 'Deadweight welfare loss (DWL) from the externality',
          correct: 'decrease',
          reason: 'Before the tax, output was at Q_market (where MPC = MSB) but the social optimum was Q* (where MSC = MSB). The DWL triangle between Q* and Q_market represented welfare destroyed by overproduction. As the tax moves output toward Q*, the DWL shrinks – in theory, a perfectly calibrated Pigouvian tax eliminates it entirely.'
        },
        {
          id: 'tax_revenue',
          label: 'Government tax revenue from the levy',
          correct: 'increase',
          reason: 'Tax revenue = tax per tonne × quantity produced after the tax. Assuming the tax is positive and cement continues to be produced (demand is inelastic), the government collects meaningful revenue. This can be used to compensate affected third parties or fund environmental remediation.'
        }
      ],
      examBridge: '"A Pigouvian tax equal to MEC shifts the effective supply curve from MPC to MSC, reducing output from Q_market to Q*. Consumer price rises; DWL falls toward zero. Tax revenue = MEC × Q*. The limitation: accurately measuring MEC is technically difficult – if the tax is set too low, overproduction continues; too high, output falls below Q* and efficiency is reduced."'
    }
  ]
};

