/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   Demand: build the income/confidence → demand shift → new equilibrium chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Demand',
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
      id: 'demand-income-confidence',
      scenario: {
        icon:  '🍽️',
        label: 'Scenario',
        text:  'UK leisure sector, summer 2021. Restaurants and hospitality venues reopen after COVID restrictions lift.'
      },
      anchor: '£190bn savings + rising confidence release pent-up leisure demand.',
      tiles: [
        {
          id:   'step-shift',
          icon: '💰',
          text: 'Income and confidence rise → demand curve shifts right',
          pos:  0
        },
        {
          id:   'step-excess',
          icon: '📊',
          text: 'At P₁, Q_d > Q_s → excess demand pushes prices up',
          pos:  1
        },
        {
          id:   'step-eq',
          icon: '📈',
          text: 'New equilibrium at P₂ > P₁, Q₂ > Q₁ – venues expand output',
          pos:  2
        },
        {
          id:   'dist-1',
          icon: '🏗️',
          text: 'Supply of leisure venues increases as new entrants open',
          pos:  null
        },
        {
          id:   'dist-2',
          icon: '🏛️',
          text: 'Government imposes a price ceiling to protect consumers',
          pos:  null
        },
        {
          id:   'dist-3',
          icon: '🔄',
          text: 'Consumers substitute towards cheaper goods as prices rise',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Income and savings release increase consumers\' willingness and ability to pay for leisure at every price level. Consumer confidence further amplifies this – households expect to maintain or grow their spending power and so commit to leisure purchases. These are non-price determinants of demand, so they shift the entire demand curve to the right from D₁ to D₂.'
        },
        {
          pos:  1,
          text: 'At the original market price P₁, the rightward demand shift means that the quantity consumers want to buy (Q demanded) now exceeds the quantity restaurants, hotels and venues can supply (Q supplied). This excess demand creates a queue or shortage – sellers realise they can raise prices and still find buyers, so upward price pressure develops.'
        },
        {
          pos:  2,
          text: 'Price rises from P₁ to P₂ as sellers exploit excess demand. The higher price signals profitability to the leisure sector: existing venues expand capacity and new restaurants and event spaces enter the market, raising quantity supplied. The market reaches a new equilibrium E₂ at P₂ and Q₂ – both price and quantity are higher than before.'
        }
      ],
      examBridge: '"The surge in consumer confidence and accumulated savings in summer 2021 shifted the demand curve for UK leisure services to the right. At the original price, quantity demanded exceeded quantity supplied, creating upward price pressure. The market reached a new equilibrium at a higher price P₂ and higher quantity Q₂, signalling the leisure sector to expand capacity and attract new entrants."',

      prompts: [
        'What causes the demand curve to shift right in this scenario?',
        'What does excess demand at the old price lead to?',
        'What is the new equilibrium and what does it imply for the market?'
      ],
      modelAnswers: [
        'Income and savings release increase consumers\' willingness and ability to pay at every price level – a non-price determinant change. Consumer confidence amplifies this because households expect to sustain their spending power. Together these shift the entire demand curve to the right from D₁ to D₂.',
        'At the original price P₁, quantity demanded now exceeds quantity supplied – a shortage or excess demand. Sellers can charge higher prices without losing all buyers, so price begins to rise. This continues until the market reaches a new equilibrium where the higher price clears the market.',
        'Higher price P₂ and higher quantity Q₂ – the leisure sector responds to the profit signal by expanding output. Existing venues extend capacity and new entrants (restaurants, event spaces, hotels) are attracted by the higher prices and profits. The new equilibrium reflects both higher consumer spending and a larger leisure sector.'
      ],
      vocab: ['demand curve', 'shift in demand', 'consumer confidence', 'income effect', 'excess demand', 'equilibrium price', 'equilibrium quantity', 'non-price determinants']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Demand
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Demand',
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

  useInLandIt: 'A rightward demand shift raises both equilibrium price and quantity. However, the strength of the effect depends on income elasticity (YED > 1 amplifies it) and whether consumer confidence sustains spending – two conditions that should anchor any evaluation of income-driven demand changes.',

  focusInLandIt: {
    context: 'Use specific evidence – the £190bn savings release, the +7 confidence index and the 60% booking surge – to anchor your application to the real-world case, not just generic demand theory.',
    chain:   'State the chain explicitly: income/confidence rise → demand curve shifts right from D₁ to D₂ → excess demand at P₁ → price rises to P₂ and quantity rises to Q₂ as firms expand output.',
    diagram: 'Draw and label both demand curves (D₁ and D₂), label both equilibria (Q₁, P₁ and Q₂, P₂), and show the rightward shift arrow between D₁ and D₂. Keep supply unchanged.',
    depends: 'Lead with income elasticity (YED > 1) as your condition – if leisure services were income inelastic, the same income rise would produce a much smaller demand shift. Then add confidence and substitute availability as the second and third conditions.',
    judge:   'State a clear position, use the mechanism (D shifts right → excess demand → new equilibrium at higher P and Q), add the condition (YED, confidence, substitute availability), and acknowledge the distributional limitation (concentrated savings among higher-income households).'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   Demand: classify evidence on the UK post-COVID leisure recovery
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Demand',
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
    question:    'Which details in this extract most change whether rising consumer income and confidence are the primary drivers of increased demand for UK leisure and hospitality services post-pandemic?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'Data from GfK show that the UK consumer confidence index reached [[confidence|+7 in July 2021 – its highest level since 2016]], reflecting a sharp recovery in households\' willingness to make major purchases and spend on leisure activities.',
      'ONS figures reveal that [[savings|the UK household savings ratio peaked at 29.1% in Q2 2020]] before falling sharply in 2021, as approximately £190 billion in accumulated savings were released into the economy and households increased spending on restaurants, hotels and events.',
      'OpenTable and CGA data show that [[bookings|restaurant and pub bookings in July 2021 were 60% above 2019 levels]], suggesting that pent-up demand surged well beyond pre-pandemic norms once restrictions were lifted.',
      'Travel industry data indicate that [[travel|UK international holiday bookings remained suppressed throughout 2021]] due to ongoing travel restrictions and health concerns, suggesting that some of the domestic leisure surge reflected diversion from overseas travel rather than purely income-driven spending.',
      'Trussell Trust figures show that [[foodbanks|UK food bank usage rose 33% in 2021]], despite aggregate household income rising – indicating that the recovery was deeply unequal and lower-income groups did not experience the leisure demand recovery seen in wealthier households.'
    ],

    evidence: {
      'confidence': { text: '+7 in July 2021 – its highest level since 2016' },
      'savings':    { text: 'the UK household savings ratio peaked at 29.1% in Q2 2020' },
      'bookings':   { text: 'restaurant and pub bookings in July 2021 were 60% above 2019 levels' },
      'travel':     { text: 'UK international holiday bookings remained suppressed throughout 2021' },
      'foodbanks':  { text: 'UK food bank usage rose 33% in 2021' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the claim',      tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against the claim', tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case',     tone: 'blue',  icon: '?' }
    ],

    correct: {
      'confidence': 'supports',
      'savings':    'supports',
      'bookings':   'supports',
      'travel':     'complicates',
      'foodbanks':  'complicates'
    },

    explain: {
      'confidence': 'A consumer confidence index at its highest since 2016 confirms that households\' expectations and willingness to spend improved – a key non-price demand shifter that directly caused the rightward shift in leisure demand.',
      'savings':    'The fall in the savings ratio as £190bn was released into spending provides direct evidence of income and wealth effects driving leisure demand. This confirms the mechanism: accumulated savings → greater ability to pay → demand shifts right.',
      'bookings':   'Bookings 60% above 2019 levels quantify the demand surge, confirming that market activity responded strongly to the income and confidence recovery. This is the outcome – consistent with a large rightward shift in demand.',
      'travel':     'If some of the domestic leisure surge came from households who could not travel abroad (substitution from international to domestic leisure), then income alone is not the full explanation. The absence of substitute activities inflated domestic demand beyond what income growth alone would predict – complicating the claim without refuting it.',
      'foodbanks':  'A 33% rise in food bank usage alongside aggregate income growth shows the recovery was highly unequal. Lower-income households did not accumulate savings and saw no leisure demand recovery. The aggregate demand shift masks very different experiences across income groups – complicating the claim that income was the primary driver for all consumers.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"Consumer confidence at a 5-year high and the release of £190bn in accumulated savings directly supports the claim that income and confidence drove the leisure demand surge. However, the suppression of international travel suggests some recovery was diversion from substitute activities – not purely income-driven – and rising food bank usage confirms that the demand shift was concentrated among higher-income groups, complicating any general claim about consumer income as the primary driver."',

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
   Demand: evaluate the income/confidence claim for UK leisure
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Demand',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether income is the primary driver of leisure demand.',
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
      id: 'demand-income-effectiveness',
      claim: {
        icon:   '🎭',
        prompt: 'Claim',
        text:   'Income and confidence are the primary drivers of UK leisure demand.'
      },
      factors: [
        {
          id:    'income-elasticity',
          icon:  '📊',
          label: 'Income elasticity of demand (YED)',
          why:   'Leisure services have YED > 1 (luxury/income-elastic). A given rise in income produces a more-than-proportional rise in demand – so income effects are amplified for restaurants and hospitality compared with necessities. Where YED is lower, income growth matters less for the demand shift.'
        },
        {
          id:    'confidence',
          icon:  '😊',
          label: 'Consumer confidence and expectations',
          why:   'Demand shifts right not just from current income but from expected future income. If confidence is high, households spend today even before income has fully recovered. If confidence is low, they precautionarily save even as current income rises – the confidence channel amplifies or dampens the income effect.'
        },
        {
          id:    'substitutes',
          icon:  '✈️',
          label: 'Availability and cost of substitute activities',
          why:   'Post-COVID recovery was partly driven by the unavailability of international holidays (substitutes). Once travel restrictions lifted, some of the excess demand for domestic leisure redirected abroad. The strength of the domestic demand shift depends on what substitute activities consumers can access – income alone does not explain this diversion.'
        },
        {
          id:    'saving-buffer',
          icon:  '💰',
          label: 'Distribution of accumulated savings',
          why:   'The £190bn savings buffer was concentrated among higher-income households. Lower-income groups, more likely to work in sectors that kept operating through the pandemic, did not accumulate savings to the same extent – limiting the generality of the income-driven demand surge and weakening the aggregate claim.'
        },
        {
          id:    'capacity',
          icon:  '🏢',
          label: 'Capacity constraints in the supply side',
          why:   'In the short run, restaurants and hotels have fixed capacity. When demand surges, prices rise rather than output expanding – limiting the quantity response and concentrating the income effect into higher prices rather than broader access for consumers. Supply-side constraints shape how the demand shift plays out.'
        },
        {
          id:    'price-expectations',
          icon:  '📈',
          label: 'Price expectations and inflation',
          why:   'Rising prices reduce the real income effect over time. If inflation in hospitality (menu price inflation hit 8.8% in 2023) outpaces wage growth, the demand stimulus is partially self-correcting – consumers reduce visits as real purchasing power falls, reversing part of the rightward shift.'
        },
        {
          id:    'habit',
          icon:  '🔄',
          label: 'Habit formation and brand loyalty',
          why:   'Some consumers had formed new habits during the pandemic (home cooking, online food delivery). Demand for dine-in restaurants partly shifted permanently to delivery platforms, so the post-COVID recovery in traditional hospitality was more muted than raw income data suggested – even where income had fully recovered.'
        },
        {
          id:    'demographics',
          icon:  '👥',
          label: 'Demographic structure of spending',
          why:   'Younger consumers (18–35) showed the strongest post-COVID leisure recovery, driven by social media influence and social reconnection. Older and more vulnerable groups remained more cautious regardless of income level. The aggregate demand shift masks significant demographic variation in the strength of the income effect.'
        }
      ],
      modelRanking: ['income-elasticity', 'confidence', 'substitutes'],
      judgement: '"Whether rising income is the primary driver of leisure demand depends critically on income elasticity – services with YED > 1 see amplified demand effects, while necessities barely respond. Consumer confidence determines whether households translate income gains into spending or precautionary saving. And the availability of substitutes (especially international holidays) shapes how much of any income gain flows into domestic hospitality rather than alternative activities."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Demand: rising income/confidence shifts demand right (D₁ → D₂)
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   S (Supply): (130,390)→(490,30)  slope = -1.0  ⟹  y = 520 - x
   D₁ (original demand): (110,50)→(514,381)  slope ≈ 0.825  ⟹  y = -40.75 + 0.825x
   D₂ (demand shifted right 60px): (170,50)→(540,355)  ⟹  y = -90.25 + 0.825x
   E₁ (S ∩ D₁): 520-x = -40.75+0.825x → 560.75 = 1.825x → x ≈ 307, y ≈ 213
   E₂ (S ∩ D₂): 520-x = -90.25+0.825x → 610.25 = 1.825x → x ≈ 334, y ≈ 186   */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Demand',
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
    title:       'Consumer incomes and confidence rise sharply after the pandemic. Which diagram correctly shows the effect on the market for restaurant meals?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the income and confidence rise. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      'd-right',
        correct:  true,
        title:   'Demand shifts right',
        sub:     'Demand shifts right – more meals demanded at every price as income and confidence rise',
        why:     'Rising income and consumer confidence are non-price determinants of demand – they increase consumers\' willingness and ability to pay for restaurant meals at every price level. This shifts the demand curve to the right from D₁ to D₂. At the original price, excess demand emerges, pushing price up to P₂ and quantity to Q₂. The supply curve is unchanged.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Demand falls – fewer meals demanded at every price',
        why:     'Demand shifts left when income falls, consumer confidence deteriorates, or the prices of substitutes fall. In this scenario, income and confidence are rising – so demand shifts right, not left. A leftward shift would represent the opposite of the post-COVID recovery.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Supply contracts – fewer meals supplied at every price',
        why:     'A leftward supply shift would result from rising input costs, a tax on producers, or fewer restaurants in the market. The post-COVID leisure recovery is a demand-side story – rising consumer income and confidence – not a supply shock. The supply of restaurant meals is unchanged in this scenario.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Supply increases – more meals supplied at every price',
        why:     'Supply shifts right when production costs fall, technology improves, or new firms enter the market. While new entrants may eventually follow the demand surge, the initial impact of rising income and confidence is on demand, not supply. This diagram shows the wrong side of the market.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🍽️',
    text:  'Post-COVID recovery: £190bn savings released; consumer confidence at 5-year high.',
    dataPoints: [
      { icon: '💰', text: 'Savings ratio falls from 29% to 7% as spending surges' },
      { icon: '📈', text: 'Restaurant bookings 60% above 2019 levels (OpenTable)' },
      { icon: '🎉', text: 'Consumer confidence index: +7 (GfK, July 2021)' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – demand shifts right as consumer income and confidence rise, creating a new equilibrium at higher price and quantity',
    xLabel:    'Quantity of restaurant meals',
    yLabel:    'Price (£)',

    lines: [
      /* S (Supply) – blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S', labelX: 494, labelY: 28, labelFill: '#2563eb' },
      /* D₁ (original demand) – green downward-sloping */
      { x1: 110, y1: 50,  x2: 514, y2: 381, stroke: '#059669', strokeWidth: 2.5,
        label: 'D₁', labelX: 516, labelY: 381, labelFill: '#059669' },
      /* D₂ (new demand, shifted right 60px) – amber downward-sloping */
      { x1: 170, y1: 50,  x2: 540, y2: 355, stroke: '#d97706', strokeWidth: 2.5,
        label: 'D₂', labelX: 542, labelY: 353, labelFill: '#d97706' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₂ (new equilibrium, higher price) */
      { x1: 100, y1: 186, x2: 334, y2: 186, tickLeft: 'P₂', tickLeftY: 189 },
      /* Horizontal from y-axis to E₁ (original equilibrium) */
      { x1: 100, y1: 213, x2: 307, y2: 213, tickLeft: 'P₁', tickLeftY: 216 },
      /* Vertical from E₂ down to x-axis */
      { x1: 334, y1: 186, x2: 334, y2: 400, tickBottom: 'Q₂', tickBottomX: 334 },
      /* Vertical from E₁ down to x-axis */
      { x1: 307, y1: 213, x2: 307, y2: 400, tickBottom: 'Q₁', tickBottomX: 307 }
    ],

    /* Shift arrow: horizontal, pointing right, at y=120 between D₁ and D₂ */
    shiftArrow: { x1: 280, y1: 120, x2: 340, y2: 120, stroke: '#d97706' },

    eqDots: [
      {
        cx: 307, cy: 213, fill: '#059669',
        initLabel: 'Original equilibrium', initLabel2: '(Q₁, P₁)', initLabelX: 314, initLabelY: 208
      },
      {
        cx: 334, cy: 186, fill: '#d97706',
        newLabel: 'New equilibrium', newLabel2: '(Q₂, P₂)', newLabelX: 341, newLabelY: 181
      }
    ],

    legend: [
      { color: '#059669', text: 'D₁ = Original demand (before income/confidence rise)' },
      { color: '#d97706', text: 'D₂ = New demand (after savings release and confidence surge)' },
      { color: '#2563eb', text: 'S = Supply of restaurant meals (unchanged)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of rising consumer income and confidence on the market for restaurant meals.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',    label: 'Shift label',                   pctX: 54,  pctY: 21,   pctW: 22 },
      { id: 'new-eq',   label: 'New equilibrium',                pctX: 61,  pctY: 35,   pctW: 20 },
      { id: 'orig-eq',  label: 'Original equilibrium',           pctX: 56,  pctY: 43,   pctW: 22 },
      { id: 'hi-price', label: 'Higher price (P₂)',               pctX: 0.5, pctY: 37,   pctW: 15 },
      { id: 'hi-qty',   label: 'Higher quantity (Q₂)',            pctX: 58,  pctY: 93.5, pctW: 15 }
    ],

    chips: [
      { id: 'dem-right', text: 'Demand shifts right',          icon: '→', zone: 'shift',    correct: true  },
      { id: 'new-eq',    text: 'New equilibrium (Q₂, P₂)',     icon: '●', zone: 'new-eq',   correct: true  },
      { id: 'orig-eq',   text: 'Original equilibrium (Q₁, P₁)',icon: '●', zone: 'orig-eq',  correct: true  },
      { id: 'hi-price',  text: 'Higher price (P₂)',             icon: '↑', zone: 'hi-price', correct: true  },
      { id: 'hi-qty',    text: 'Higher quantity (Q₂)',          icon: '↑', zone: 'hi-qty',   correct: true  },
      { id: 'dem-left',  text: 'Demand shifts left',            icon: '←', zone: null,       correct: false },
      { id: 'lo-price',  text: 'Lower price',                   icon: '↓', zone: null,       correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['demand curve', 'shift in demand', 'consumer confidence', 'income effect', 'excess demand', 'equilibrium price', 'equilibrium quantity', 'non-price determinants'],

    parts: [
      {
        num:         1,
        title:       'Explain the shift',
        prompt:      'Why does the demand curve shift right, not just move along?',
        maxChars:    300,
        modelAnswer: 'Non-price determinants change: income rises and consumer confidence improves, increasing willingness and ability to pay for restaurant meals at every price level. This shifts the entire demand curve to the right from D₁ to D₂ – not a movement along D₁.'
      },
      {
        num:         2,
        title:       'Explain the new equilibrium',
        prompt:      'What happens to price and quantity?',
        maxChars:    300,
        modelAnswer: 'At the original price, quantity demanded exceeds quantity supplied (excess demand). Price rises until the market clears at the new equilibrium E₂: higher price P₂ and higher quantity Q₂. Firms expand output and new entrants are attracted by the profit signal.'
      },
      {
        num:         3,
        title:       'Add a wider effect',
        prompt:      'What does this mean for consumers and the sector?',
        maxChars:    300,
        modelAnswer: 'Rising prices partially erode the consumer surplus gained from higher incomes, but total welfare rises as the gains from trade expand at Q₂. However, the price rise may exclude lower-income households who did not benefit from accumulated savings, worsening distributional equity.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Name the non-price demand shifter',
      'Explain the direction of the shift',
      'State the outcome for P and Q',
      'Comment on welfare or distributional effect'
    ],

    examAnswer: '"Rising consumer income and confidence after the pandemic shifted the demand curve for restaurant meals to the right from D₁ to D₂. At the original equilibrium price, excess demand emerged, driving prices up to P₂ and output to Q₂. The hospitality sector responded to the profit signal by expanding capacity, though the higher price partly offset gains in consumer welfare and affected households unequally."'
  }
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for demand
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Demand',
  estTime: '15–20 minutes',
  goal:    'Bridge your demand knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "You've locked in the law of demand, curve shifts and consumer surplus. Now train the skills examiners reward – applying the framework to real context, building a watertight income → demand → equilibrium chain, and reaching a supported judgement on when income is the dominant shifter.",
    heroKey: 'heroDemand',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Identify demand shifters in a real post-COVID leisure context',
      'Build the causal chain from income and confidence to a new market equilibrium',
      'Read and label a demand-shift diagram correctly',
      'Evaluate when income is vs is not the dominant driver of demand'
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
   Demand: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Demand',
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
      id: 'demand-income-judgement',
      claim: {
        icon:   '🎭',
        prompt: 'Claim',
        text:   'Rising consumer income and confidence are the primary drivers of increased demand for UK leisure and hospitality services post-pandemic.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'Consumer confidence +7 (GfK, July 2021); £190bn savings released; bookings 60% above 2019; but food bank usage +33% and international travel suppressed.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Income/confidence rise → demand curve shifts right from D₁ to D₂ → excess demand at P₁ → price rises to P₂, quantity rises to Q₂.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'D shifts right → new equilibrium at higher P₂ and higher Q₂ – profit signal attracts capacity expansion.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Strength depends on YED (> 1 amplifies effect), consumer confidence, and availability of substitute activities (especially international holidays).' }
      ],
      cloze: 'Overall, rising consumer income and confidence [1] demand for UK leisure services, because higher income [2] consumers\' willingness and ability to pay at every price level, shifting the demand curve [3] from D₁ to D₂. This raises both price and [4], moving the market to a new equilibrium. However, the strength of the demand shift depends on the [5] of the relevant goods: where YED exceeds 1, the income effect is [6]. The impact is further conditioned by consumer [7]: if households expect future income uncertainty, they may save rather than spend even as current income rises. Therefore, income is a powerful driver of leisure demand, but it operates most strongly when goods are [8], confidence is high, and substitutes are unavailable.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-increases',  text: 'increases',        correct: true  },
            { id: 'b1-reduces',    text: 'reduces',          correct: false },
            { id: 'b1-no-effect',  text: 'has no effect on', correct: false },
            { id: 'b1-eliminates', text: 'eliminates',       correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-increases',  text: 'increases',   correct: true  },
            { id: 'b2-reduces',    text: 'reduces',     correct: false },
            { id: 'b2-stabilises', text: 'stabilises',  correct: false },
            { id: 'b2-eliminates', text: 'eliminates',  correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-right',    text: 'to the right',     correct: true  },
            { id: 'b3-left',     text: 'to the left',      correct: false },
            { id: 'b3-up-along', text: 'upward along',     correct: false },
            { id: 'b3-dn-along', text: 'downward along',   correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-quantity', text: 'quantity', correct: true  },
            { id: 'b4-supply',   text: 'supply',   correct: false },
            { id: 'b4-taxes',    text: 'taxes',    correct: false },
            { id: 'b4-costs',    text: 'costs',    correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-yed',   text: 'income elasticity',      correct: true  },
            { id: 'b5-ped',   text: 'price elasticity',       correct: false },
            { id: 'b5-xed',   text: 'cross-price elasticity', correct: false },
            { id: 'b5-pes',   text: 'supply elasticity',      correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-amplified',  text: 'amplified',  correct: true  },
            { id: 'b6-reduced',    text: 'reduced',    correct: false },
            { id: 'b6-reversed',   text: 'reversed',   correct: false },
            { id: 'b6-irrelevant', text: 'irrelevant', correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-confidence', text: 'confidence and expectations', correct: true  },
            { id: 'b7-ignorance',  text: 'rational ignorance',          correct: false },
            { id: 'b7-regulation', text: 'government regulation',       correct: false },
            { id: 'b7-producer',   text: 'producer efficiency',         correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-income-elastic',  text: 'income elastic',   correct: true  },
            { id: 'b8-price-inelastic', text: 'price inelastic',  correct: false },
            { id: 'b8-public',          text: 'a public good',    correct: false },
            { id: 'b8-demerit',         text: 'a demerit good',   correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',      text: 'Income is always the strongest driver of demand for any good',                                    correct: false },
          { id: 'op-conditional', text: 'Income is a powerful driver for income-elastic goods, but confidence and substitutes also matter', correct: true  },
          { id: 'op-price-only',  text: 'Demand is determined by price alone – income shifts have no lasting effect',                      correct: false },
          { id: 'op-confidence',  text: 'Consumer confidence is more important than income in all cases',                                   correct: false }
        ]
      },
      examBridge: '"Rising income and confidence boosted leisure demand because YED for hospitality exceeds 1 – so income gains shift the demand curve right by proportionally more. The new equilibrium delivers higher prices and higher output, but the effect is conditional: concentrated savings distribution and the availability of international substitutes mean the domestic surge was stronger in some segments than others. A strong judgement recognises income as a primary, but not exclusive, driver."'
    }
  ]
};

/* ---- link-predict.js ---- */
/* ============================================================
   ECONOS – Link It · Predict the Outcome station data
   Demand: income changes and cross-price effects on demand
   ============================================================ */

window.ECONOS_LINK_PREDICT = {
  topic:   'Demand',
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
  instruction: 'For each scenario, predict which direction each demand variable will move. Choose ↑ Increase, ↓ Decrease, → No change, or ? Uncertain.',

  scenarios: [
    {
      id: 'dem-recession-normal-inferior',
      icon: '📉',
      title: 'Recession causes household incomes to fall by 8%',
      setup: 'A UK recession reduces average real disposable incomes by 8%. Consider how this affects demand for: foreign holidays (a normal good), own-brand supermarket food (an inferior good), and Starbucks coffee (a luxury good).',
      variables: [
        {
          id: 'holidays',
          label: 'Demand for foreign holidays (normal good)',
          correct: 'decrease',
          reason: 'Foreign holidays are a normal good – demand rises with income and falls when income falls. An 8% income fall will reduce demand for holidays. The demand curve shifts left. The exact fall depends on the income elasticity of demand (YED); for a luxury like holidays, YED > 1, so demand falls more than proportionately.'
        },
        {
          id: 'ownbrand',
          label: 'Demand for own-brand supermarket food (inferior good)',
          correct: 'increase',
          reason: 'Inferior goods are goods where demand rises as income falls and falls as income rises. When consumers feel poorer, they switch from branded to own-brand food. YED < 0 for inferior goods – the demand curve shifts right as income falls.'
        },
        {
          id: 'starbucks',
          label: 'Demand for Starbucks coffee (luxury good)',
          correct: 'decrease',
          reason: 'Starbucks is a luxury (YED > 1). As incomes fall, consumers cut discretionary spending first. Demand for premium coffee shops falls more than proportionately relative to income – consumers switch to cheaper coffee or home brewing. The demand curve shifts left significantly.'
        },
        {
          id: 'price_level',
          label: 'Price of foreign holidays (ceteris paribus)',
          correct: 'decrease',
          reason: 'With demand shifting left (fewer buyers) and supply initially unchanged, there is a surplus of holiday packages at the original price. Airlines and tour operators cut prices to clear excess supply. The equilibrium price falls. This is the transmission from the demand shift to the price outcome.'
        }
      ],
      examBridge: '"A recession reduces real incomes, shifting demand curves: normal goods (holidays, Starbucks) shift left; inferior goods (own-brand food) shift right. The magnitude of the shift depends on YED: luxury goods with high positive YED see the largest demand falls. Prices of normal goods fall as the demand curve moves left – a negative income effect for producers."'
    },
    {
      id: 'dem-petrol-ev',
      icon: '🚗',
      title: 'Petrol price doubles following a new carbon tax',
      setup: 'The government introduces a carbon tax that doubles the price of petrol from 150p to 300p per litre. Electric vehicles (EVs) are substitutes for petrol cars; public transport is also a substitute. Assume consumer incomes are unchanged.',
      variables: [
        {
          id: 'petrol_q',
          label: 'Quantity of petrol demanded',
          correct: 'decrease',
          reason: 'The price of petrol has risen (this is a movement along the demand curve – a change in quantity demanded, not a shift). With PED for petrol typically around −0.2 to −0.4, the fall in quantity demanded is modest. A 100% price rise might reduce quantity by 20–40% in the short run.'
        },
        {
          id: 'ev_demand',
          label: 'Demand for electric vehicles (substitutes)',
          correct: 'increase',
          reason: 'EVs are substitutes for petrol cars – when petrol prices rise, the cost of running a petrol car increases, making EVs relatively more attractive. Demand for EVs shifts right (rises). Cross-price elasticity of demand (XED) for EVs with respect to petrol price is positive (they are substitutes).'
        },
        {
          id: 'public_transport',
          label: 'Demand for public transport (substitute)',
          correct: 'increase',
          reason: 'Higher petrol prices make driving more expensive, so some commuters switch to trains, buses, and cycling. Demand for public transport rises – the demand curve shifts right. The size of this shift depends on the availability and quality of public transport, which varies significantly by region.'
        },
        {
          id: 'new_petrol_cars',
          label: 'Demand for new petrol cars',
          correct: 'decrease',
          reason: 'Higher petrol prices raise the ongoing running cost of petrol cars. This reduces the effective value of owning a petrol car – demand for new petrol cars falls (demand curve shifts left) as consumers anticipate higher future fuel costs and switch toward EVs or delay purchases.'
        }
      ],
      examBridge: '"A carbon tax raising petrol prices shifts demand across substitute markets: EV demand rises (positive XED), public transport demand rises. Demand for new petrol cars falls as running costs increase. This is a cascade of demand shifts triggered by a single price change – showing how interconnected markets transmit price shocks."'
    }
  ]
};

