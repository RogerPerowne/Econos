/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   Market Failure: build the information asymmetry → adverse selection → DWL chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Market Failure',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('diagram'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.routes.link('extract') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'info-asymmetry-mechanism',
      scenario: {
        icon:  '🚗',
        label: 'Scenario',
        text:  'Car sellers know whether their vehicle has hidden defects (\'lemons\') or is high quality; buyers cannot reliably distinguish quality before purchase.'
      },
      anchor: 'Sellers know if cars are lemons; buyers cannot verify quality.',
      tiles: [
        {
          id:  'step-adverse',
          icon: '❓',
          text: 'Adverse selection: buyers pay average-quality price → good cars exit',
          pos:  0
        },
        {
          id:  'step-spiral',
          icon: '📉',
          text: 'Spiral: quality ↓ → WTP ↓ → more exits → demand shifts left',
          pos:  1
        },
        {
          id:  'step-dwl',
          icon: '⚖️',
          text: 'Market failure: too few quality cars → DWL from lost gains from trade',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '⛽',
          text: 'Rising petrol prices reduce overall demand for used cars',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '💰',
          text: 'Government imposes a tax on used car dealers to reduce profit margins',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏭',
          text: 'New car manufacturers increase production, reducing demand for used cars',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Buyers cannot verify quality before purchase – they face information asymmetry. Rational buyers therefore base their willingness to pay (WTP) on expected average quality rather than verified quality. This depresses WTP below the level a quality seller needs to cover costs. Quality sellers withdraw from the market when buyers will not pay the price that reflects their car\'s true quality.'
        },
        {
          pos:  1,
          text: 'As good-quality cars exit, the average quality of cars remaining falls further. Buyers observe this deterioration (or anticipate it), reducing WTP again. Another round of good-quality sellers exits. This self-reinforcing adverse selection spiral continues until the market for quality vehicles has largely collapsed – effective demand has shifted left from the full-information demand curve D₁ to the information-gap demand curve D₂.'
        },
        {
          pos:  2,
          text: 'The information-gap equilibrium produces fewer quality cars than the social optimum: Q₂ < Q₁. Between Q₂ and Q₁, there are deals that both a quality seller and a fully informed buyer would willingly strike – gains from trade that never materialise. This represents a deadweight welfare loss: resources (quality vehicles) are not allocated to their highest-valued use because information asymmetry prevents mutually beneficial exchange.'
        }
      ],
      examBridge: '"Information asymmetry depresses effective demand for used cars from the full-information level D₁ to the information-gap level D₂: buyers cannot verify quality so base WTP on average expected quality. The market equilibrium shifts to a lower quantity Q₂ and lower price P₂. This market failure – adverse selection causing underproduction of quality goods – is partially corrected by the Consumer Rights Act 2015 and private information intermediaries like AutoTrader valuations."',

      prompts: [
        'Why do buyers base WTP on average quality rather than true quality?',
        'Why do quality sellers exit the market first?',
        'What is the welfare loss from the information gap?'
      ],
      modelAnswers: [
        'Buyers cannot verify the quality of a used car before purchase – they face information asymmetry. A rational buyer therefore offers only the price that reflects the average quality of cars on the market, not the higher price that a verified high-quality car would justify. This is the core of Akerlof\'s \'lemons\' problem.',
        'When buyers offer only an average-quality price, high-quality sellers cannot recoup the value of their cars. A seller of a genuinely good car receives the same price as a seller of a lemon – so quality sellers withdraw. This adverse selection effect means that the cars remaining in the market skew toward lower quality, reinforcing the downward spiral in average quality and prices.',
        'Between Q₂ (information-gap equilibrium) and Q₁ (full-information equilibrium), quality sellers would be willing to sell and informed buyers would be willing to pay. These mutually beneficial transactions never occur because information asymmetry prevents buyers from distinguishing quality. The lost potential surplus – the deadweight welfare loss – is the welfare cost of the market failure.'
      ],
      vocab: ['information asymmetry', 'adverse selection', 'moral hazard', 'market for lemons', 'market failure', 'consumer surplus', 'deadweight welfare loss', 'mandatory disclosure', 'signalling', 'screening', 'WTP', 'full-information demand']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Market Failure
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Market Failure',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'extract', label: 'Read the Extract',   max: 3, color: '#8B5CF6' },
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

  useInLandIt: 'Information asymmetry causes market failure by depressing effective demand (D-left). Adverse selection is the key mechanism: high-quality sellers exit when buyers price on average quality. Mandatory disclosure and private information platforms are the two corrective mechanisms – evaluate their effectiveness by reference to enforcement and uptake.',

  focusInLandIt: {
    context: 'Use specific evidence – the 1-in-3 undisclosed defects figure and the sub-2% enforcement rate – to anchor your application to the real-world case, not just generic market failure theory.',
    chain:   'State the chain explicitly: buyers cannot verify quality → assume average quality → WTP depressed → adverse selection (quality sellers exit) → D shifts left from D₁ to D₂ → deadweight welfare loss.',
    diagram: 'Draw D₁ (full-information demand), D₂ (information-gap demand) and supply S unchanged. Label both equilibria (Q₁/P₁ and Q₂/P₂), shade the DWL triangle between D₁, D₂ and the vertical at Q₂, and show the leftward demand shift arrow.',
    depends: 'Lead with severity of information asymmetry as your condition – if the seller\'s information advantage is small or private platforms (AutoTrader, HPI) close it significantly, the case for mandatory government disclosure weakens. Then evaluate enforcement quality as the critical policy variable.',
    judge:   'State a clear position, use the mechanism (D shifts left, DWL created), add the condition (enforcement quality / private platform availability / product complexity), and explain the limitation honestly.'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   Market Failure: classify evidence on information asymmetry in the used car market
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Market Failure',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('chain'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.routes.link('extract') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether information asymmetry is the primary cause of market failure in the UK used car market, justifying mandatory disclosure and consumer protection legislation?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'Citizens Advice research (2023) found that [[defects|1 in 3 UK used car buyers found a significant undisclosed defect]] – demonstrating that sellers systematically withhold quality information and buyers cannot verify vehicle condition before purchase.',
      'The [[cra-2015|Consumer Rights Act 2015: used cars must be satisfactory and as described]], giving buyers legal remedies when sellers misrepresent vehicle condition – a government attempt to correct information failure through mandatory disclosure.',
      'AutoTrader valuation data and HPI vehicle history checks are [[private-info|now widely available to UK buyers at low cost]], providing private-sector information intermediaries that partially reduce the information gap without government mandate.',
      'FCA research found that [[broader-failure|34% of financial product buyers did not fully understand the charges]] – suggesting that information asymmetry is a pervasive market failure extending well beyond the used car market, rather than a sector-specific problem.',
      'Trading Standards data indicate that [[enforcement|under 2% of used car disputes in England reach formal proceedings yearly]], suggesting that the deterrent effect of the Consumer Rights Act is limited by weak enforcement and high transaction costs for buyers.'
    ],

    evidence: {
      'defects':        { text: '1 in 3 UK used car buyers found a significant undisclosed defect' },
      'cra-2015':       { text: 'Consumer Rights Act 2015: used cars must be satisfactory and as described' },
      'private-info':   { text: 'now widely available to UK buyers at low cost' },
      'broader-failure': { text: '34% of financial product buyers did not fully understand the charges' },
      'enforcement':    { text: 'under 2% of used car disputes in England reach formal proceedings yearly' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports mandatory disclosure legislation', tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against mandatory disclosure',       tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',           tone: 'blue',  icon: '?' }
    ],

    correct: {
      'defects':         'supports',
      'cra-2015':        'supports',
      'private-info':    'against',
      'broader-failure': 'complicates',
      'enforcement':     'complicates'
    },

    explain: {
      'defects':         'If 1 in 3 buyers experience undisclosed defects, the information asymmetry is severe and pervasive – buyers systematically cannot distinguish quality. This directly confirms that the market failure justifies mandatory disclosure: without it, D remains depressed from D₁ to D₂ and quality sellers continue to exit.',
      'cra-2015':        'The Consumer Rights Act shows government has already recognised information asymmetry as a market failure requiring legal correction. Its existence supports the case for mandatory disclosure – the question is whether the law is effective, not whether intervention is justified in principle.',
      'private-info':    'If AutoTrader and HPI checks are widely available at low cost, the market may partially self-correct without government mandate. Private information intermediaries can move D₂ back toward D₁ voluntarily – weakening the argument that mandatory disclosure is the only or primary solution.',
      'broader-failure': 'The FCA data show that information asymmetry is not unique to used cars – it is a systemic market failure across many sectors. This complicates the case: it neither strengthens nor weakens the argument for disclosure specifically in used cars, but suggests that the problem may require broader regulatory frameworks rather than sector-specific legislation.',
      'enforcement':     'If fewer than 2% of disputes reach legal proceedings, the deterrent effect of the Consumer Rights Act is limited by enforcement costs. This complicates the case: mandatory disclosure exists but may not be delivering the correction D₂ → D₁ that the policy intended, without stronger enforcement mechanisms.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The pervasive information asymmetry (1 in 3 buyers experiencing undisclosed defects) confirms the market failure and supports mandatory disclosure – D is systematically depressed from D₁ to D₂ because buyers cannot verify quality. However, the case is complicated by two factors: private platforms (AutoTrader, HPI) already partially correct the gap without government mandate, and weak enforcement of the Consumer Rights Act (fewer than 2% of disputes reaching legal proceedings) means mandatory disclosure may not be effectively shifting D back toward D₁."',

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
   Market Failure: evaluate an information asymmetry claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Market Failure',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether information asymmetry is really the primary cause of the market failure.',
  nextUrl:     TopicLoader.routes.link('judge'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.routes.link('extract') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'info-asymmetry-effectiveness',
      claim: {
        icon:   '🚗',
        prompt: 'Policy claim',
        text:   'Information asymmetry is the prime cause of used-car market failure.'
      },
      factors: [
        {
          id:    'info-severity',
          icon:  '🔍',
          label: 'Severity of information asymmetry (how much sellers know that buyers don\'t)',
          why:   'In markets where the seller\'s information advantage is large (complex used machinery, specialist equipment), the adverse selection problem is more severe and demand depression is larger. In used car markets with comprehensive digital history records (DVLA, AutoTrader), the asymmetry has shrunk – but not disappeared. The degree of information gap determines how far D shifts from D₁ to D₂.'
        },
        {
          id:    'enforcement',
          icon:  '⚖️',
          label: 'Strength of enforcement of mandatory disclosure laws',
          why:   'The Consumer Rights Act 2015 requires truthful disclosure, but enforcement relies on buyers pursuing legal remedies. Fewer than 2% of disputes reach legal proceedings – making the deterrent effect weak. If enforcement is low, sellers can continue withholding quality information despite legal requirements. Strong enforcement (Trading Standards, FCA) shifts D back toward D₁ more than weak enforcement.'
        },
        {
          id:    'private-info-intermediaries',
          icon:  '💻',
          label: 'Availability of private information platforms',
          why:   'AutoTrader valuations, HPI checks, mileage verification services and Carfax reports are private-sector responses to the information gap – charging buyers (or subsidising sellers) to verify quality. Where these are widely used and trusted, the market partially self-corrects without government mandate, reducing the market failure and moving D toward D₁ voluntarily.'
        },
        {
          id:    'repeat-purchase',
          icon:  '🔄',
          label: 'Frequency of repeat transactions and reputation effects',
          why:   'Dealers who repeatedly transact in the same market face reputation incentives to disclose quality – if they sell lemons, buyers will not return and word-of-mouth damages their business. For private sellers (one-off transactions), reputation effects are absent – adverse selection is more severe. The market failure is worse in anonymous markets than in markets with repeat trading.'
        },
        {
          id:    'signalling',
          icon:  '📡',
          label: 'Effectiveness of seller signalling mechanisms',
          why:   'Sellers of high-quality cars can try to signal quality (warranties, AA inspections, manufacturer-certified used programmes). If buyers trust these signals, sellers can differentiate and achieve higher WTP – reducing adverse selection. Where signalling is credible and costless to verify, the market partially corrects itself without external regulation.'
        },
        {
          id:    'consumer-sophistication',
          icon:  '🎓',
          label: 'Consumer ability to assess quality (financial literacy / product knowledge)',
          why:   'Sophisticated buyers (mechanics, car enthusiasts) have narrower information asymmetry – they can assess quality through inspection. Unsophisticated buyers (first-time buyers, elderly) face larger asymmetry and are more at risk of adverse selection. Mandatory disclosure addresses the least-sophisticated buyers; it cannot eliminate the knowledge advantage of expert sellers.'
        },
        {
          id:    'product-complexity',
          icon:  '🔧',
          label: 'Complexity of the product (ease of quality verification)',
          why:   'Cars are complex mechanical systems – even test drives reveal little about future reliability. More complex vehicles (electric cars with battery health unknown) have higher information asymmetry. Simpler products with observable quality (agricultural commodities) have lower asymmetry. Market failure from information gaps is proportional to product complexity.'
        },
        {
          id:    'market-concentration',
          icon:  '🏪',
          label: 'Market structure (independent dealers vs franchised dealers)',
          why:   'Large franchised dealerships with manufacturer backing offer certified pre-owned programmes and stronger warranty commitments – reducing adverse selection in that market segment. Independent dealers with lower overhead may have weaker disclosure incentives. Market structure determines whether the information problem is concentrated in particular segments.'
        }
      ],
      modelRanking: ['info-severity', 'enforcement', 'private-info-intermediaries'],
      judgement: '"The severity of information asymmetry depends on how much sellers know relative to buyers – which varies by product complexity and market structure. In the used car market, digital platforms (AutoTrader, HPI) have reduced but not eliminated the gap. Enforcement of mandatory disclosure laws (Consumer Rights Act) is the key policy variable: strong enforcement shifts D back toward D₁; weak enforcement leaves the adverse selection spiral intact despite legal requirements."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Market Failure: information asymmetry shifts demand left (D₁ → D₂)
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   S (supply, unchanged): (130,390)→(490,30)  slope = -1.0  ⟹  y = 520 - x
   D₁ (full-info demand): (110,50) →(514,381)  slope = 0.82  ⟹  y = -40.2 + 0.82x
     Check: x=110 → y=-40.2+90.2=50 ✓; x=514 → y=-40.2+421.5≈381 ✓
     E₁ (S ∩ D₁): 520-x = -40.2+0.82x → 560.2 = 1.82x → x≈308, y≈212
   D₂ (info-gap demand): (110,100)→(449,381)  slope = 0.83  ⟹  y = 8.7 + 0.83x
     Check: x=110 → y=8.7+91.3=100 ✓; x=449 → y=8.7+372.7≈381 ✓
     E₂ (S ∩ D₂): 520-x = 8.7+0.83x → 511.3 = 1.83x → x≈279, y≈241           */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Market Failure',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('depends'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.routes.link('extract') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: -1,

  /* ── Stage 0: Select the right diagram ── */
  select: {
    eyebrow:     'Diagram Connector – Select the Diagram',
    title:       'Buyers in the used car market cannot verify quality before purchase. Which diagram correctly shows the effect of information asymmetry on the market for used cars?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of information asymmetry. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      'd-left',
        correct:  true,
        title:   'Demand shifts left',
        sub:     'Effective demand falls – buyers reduce WTP because they cannot distinguish quality, depressing demand for quality cars',
        why:     'Information asymmetry depresses buyer WTP: unable to verify quality, buyers offer only average-quality prices. D₁ (full-information demand) shifts left to D₂ (information-gap demand). The equilibrium moves from Q₁ to Q₂: fewer quality cars are traded, at a lower price, and a deadweight welfare loss appears from the deals that never happen.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Rising consumer demand pushes up the price level',
        why:     'A rightward demand shift would mean buyers are willing to pay more – the opposite of what information asymmetry does. Information asymmetry depresses WTP because buyers cannot verify quality and assume average quality. Demand falls left, not right.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Output falls and prices rise as supply contracts',
        why:     'While adverse selection does eventually reduce the supply of quality cars (sellers exit), this is a secondary consequence of the primary demand-side effect. The direct mechanism of information asymmetry is that buyer WTP is depressed – a leftward demand shift – not that supply contracts first. In exam diagrams, the information asymmetry market failure is modelled as a demand-side failure.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Output rises and prices fall as supply expands',
        why:     'Supply shifting right would represent falling costs or improved technology – neither of which is caused by information asymmetry. Information asymmetry is primarily a demand-side failure: it depresses buyer WTP and shifts demand left, reducing the quantity of quality cars traded.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🚗',
    text:  'UK: 7.2m used car transactions (2022). 1 in 3 buyers experienced undisclosed defects (Citizens Advice 2023). Consumer Rights Act 2015 mandates disclosure.',
    dataPoints: [
      { icon: '❓', text: 'Buyers cannot verify quality: assume average → WTP depressed' },
      { icon: '📉', text: 'Good cars exit market (adverse selection spiral)' },
      { icon: '⚖️', text: 'Result: fewer quality cars than socially optimal (underproduction)' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – information asymmetry causing demand to fall left in the used car market',
    xLabel:    'Quantity of used cars (quality)',
    yLabel:    'Price (£)',

    lines: [
      /* S (supply of used cars, unchanged) – blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S', labelX: 494, labelY: 28, labelFill: '#2563eb' },
      /* D₁ (full-information demand) – amber downward-sloping */
      { x1: 110, y1: 50,  x2: 514, y2: 381, stroke: '#d97706', strokeWidth: 2.5,
        label: 'D₁ (full info)', labelX: 462, labelY: 381, labelFill: '#d97706' },
      /* D₂ (information-gap demand) – green downward-sloping, shifted left */
      { x1: 110, y1: 100, x2: 449, y2: 381, stroke: '#059669', strokeWidth: 2.5,
        label: 'D₂ (info gap)', labelX: 453, labelY: 381, labelFill: '#059669' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₁ (full-info equilibrium price P₁) */
      { x1: 100, y1: 212, x2: 308, y2: 212, tickLeft: 'P₁',  tickLeftY: 215 },
      /* Horizontal from y-axis to E₂ (info-gap equilibrium price P₂) */
      { x1: 100, y1: 241, x2: 279, y2: 241, tickLeft: 'P₂',  tickLeftY: 244 },
      /* Vertical from E₁ down to x-axis */
      { x1: 308, y1: 212, x2: 308, y2: 400, tickBottom: 'Q₁',  tickBottomX: 308 },
      /* Vertical from E₂ down to x-axis */
      { x1: 279, y1: 241, x2: 279, y2: 400, tickBottom: 'Q₂',  tickBottomX: 279 }
    ],

    /* Shift arrow: from D₁ toward D₂ at y=120, pointing left */
    shiftArrow: { x1: 410, y1: 120, x2: 350, y2: 120, stroke: '#059669' },

    eqDots: [
      {
        cx: 308, cy: 212, fill: '#d97706',
        initLabel: 'Full-info equilibrium', initLabel2: '(Q₁, P₁)', initLabelX: 315, initLabelY: 207
      },
      {
        cx: 279, cy: 241, fill: '#059669',
        newLabel: 'Info-gap equilibrium', newLabel2: '(Q₂, P₂)', newLabelX: 227, newLabelY: 248
      }
    ],

    legend: [
      { color: '#d97706', text: 'D₁ = Full-information demand (if buyers knew quality)' },
      { color: '#059669', text: 'D₂ = Effective demand with information gap (buyers assume average quality)' },
      { color: '#2563eb', text: 'S = Supply of used cars (unchanged)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of information asymmetry on the used car market.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',      label: 'Shift label',                pctX: 55,  pctY: 20,   pctW: 25 },
      { id: 'new-eq',     label: 'Info-gap equilibrium',       pctX: 40,  pctY: 47,   pctW: 22 },
      { id: 'orig-eq',    label: 'Full-info equilibrium',      pctX: 58,  pctY: 42,   pctW: 24 },
      { id: 'orig-price', label: 'Full-info price (P₁)',       pctX: 0.5, pctY: 43,   pctW: 14 },
      { id: 'lo-price',   label: 'Information-gap price (P₂)', pctX: 0.5, pctY: 50,   pctW: 14 }
    ],

    chips: [
      { id: 'dem-left',   text: 'Demand shifts left (info gap)',      icon: '←', zone: 'shift',      correct: true  },
      { id: 'new-eq',     text: 'Info-gap equilibrium (Q₂, P₂)',     icon: '●', zone: 'new-eq',     correct: true  },
      { id: 'orig-eq',    text: 'Full-info equilibrium (Q₁, P₁)',    icon: '●', zone: 'orig-eq',    correct: true  },
      { id: 'orig-price', text: 'Full-info price (P₁)',               icon: '−', zone: 'orig-price', correct: true  },
      { id: 'lo-price',   text: 'Information-gap price (P₂)',         icon: '↓', zone: 'lo-price',   correct: true  },
      { id: 'dem-right',  text: 'Demand shifts right',                icon: '→', zone: null,         correct: false },
      { id: 'sup-left',   text: 'Supply shifts left',                 icon: '←', zone: null,         correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['information asymmetry', 'adverse selection', 'market for lemons', 'D₁', 'D₂', 'WTP', 'deadweight welfare loss', 'Q₁', 'Q₂', 'mandatory disclosure', 'signalling', 'Consumer Rights Act'],

    parts: [
      {
        num:         1,
        title:       'Why does effective demand fall from D₁ to D₂?',
        prompt:      'Why does information asymmetry shift demand left from D₁ to D₂?',
        maxChars:    240,
        modelAnswer: 'Buyers cannot verify quality before purchase. They base WTP on expected average quality. If sellers know some cars are defective, the average quality is below what buyers would pay for a verified high-quality car. D₁ = what buyers would pay with perfect information; D₂ = what they actually offer, depressed by quality uncertainty. The gap between D₁ and D₂ at every quantity represents the welfare cost of the information gap.'
      },
      {
        num:         2,
        title:       'What is the welfare loss from the information gap?',
        prompt:      'What deadweight welfare loss does the shift from D₁ to D₂ create?',
        maxChars:    240,
        modelAnswer: 'At Q₂ < Q₁, there are unexploited gains from trade: a good-quality seller would gladly sell at P₁, and an informed buyer would gladly pay P₁. But the information gap prevents this deal – creating a deadweight welfare loss (the triangle between D₁, D₂ and the vertical at Q₂). Quality car sellers exit; buyers get worse cars than they would under full information.'
      },
      {
        num:         3,
        title:       'How does the Consumer Rights Act and private intermediaries correct this?',
        prompt:      'How do mandatory disclosure and private platforms shift D₂ back toward D₁?',
        maxChars:    240,
        modelAnswer: 'Mandatory disclosure (Consumer Rights Act 2015) requires sellers to reveal vehicle history – MOT records, finance checks, mileage – reducing buyer uncertainty and moving D₂ back toward D₁. Private information intermediaries (AutoTrader valuations, HPI checks) further close the gap by giving buyers better quality signals. However, enforcement costs are high and private solutions may be incomplete, leaving residual adverse selection and a persistent gap between D₂ and D₁.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Explain why D shifts left (information gap reduces WTP)',
      'Identify adverse selection mechanism',
      'State welfare loss (DWL from Q₂ < Q₁)',
      'Evaluate corrective policy effectiveness and limitations'
    ],

    examAnswer: '"Information asymmetry in the used car market depresses effective demand from the full-information level D₁ to D₂: buyers cannot distinguish quality and reduce WTP to reflect average expected quality, driving quality sellers from the market (adverse selection). The equilibrium shifts from Q₁ to Q₂, with a deadweight welfare loss representing deals that never happen. The Consumer Rights Act 2015 corrects this partly through mandatory disclosure – shifting D₂ back toward D₁ – but residual asymmetry persists where enforcement is difficult."'
  }
};

/* ---- link-extract.js ---- */
/* ============================================================
   ECONOS – Link It · Read the Extract station data
   Market Failure: identify and classify market failure types
   ============================================================ */

window.ECONOS_LINK_EXTRACT = {
  topic:   'Market Failure',
  backUrl: TopicLoader.routes.link('chain'),
  nextUrl: TopicLoader.routes.link('diagram'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.routes.link('extract') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 2,

  eyebrow:     'Read the Extract',
  instruction: 'This extract describes three different real-world situations. For each question, identify which type of market failure is present and explain why the free market fails to produce the optimal outcome.',

  passage: {
    title: 'Extract: Three cases of market failure',
    source: 'Composite extract, adapted from academic and policy sources',
    text: '<strong>Case A:</strong> A factory discharges chemical waste into a river, raising treatment costs for the water company downstream by £2 million annually. The factory bears none of these costs.<br><br><strong>Case B:</strong> Street lighting in a town centre is provided by a private firm. Residents who have not paid their subscription still benefit from the light, and one resident\'s use does not reduce the light available to others.<br><br><strong>Case C:</strong> Young workers do not insure against unemployment because they believe they are unlikely to lose their jobs. Insurance companies, knowing this, price policies to reflect the higher-risk pool that actually buys insurance – making policies unaffordable for average-risk workers.'
  },

  questions: [
    {
      id: 'mf-extract-q1',
      question: 'Case A describes which type of market failure, and what is the economic consequence?',
      options: [
        'Public good – the factory\'s output is non-rival and non-excludable',
        'Information gap – the factory does not know the cost it imposes on the water company',
        'Negative production externality – the factory imposes a cost on a third party not reflected in its private cost, causing over-production relative to the social optimum',
        'Demerit good – the factory produces a good whose social costs exceed consumers\' private valuation'
      ],
      correct: 2,
      explanation: 'Case A is a negative production externality: the factory\'s production generates an external cost (£2m water treatment) borne by a third party (the water company and its customers). The factory\'s MPC does not include this external cost, so MPC < MSC. The factory produces where MPC = MR, which is a larger quantity than the socially optimal Q* where MSC = MSB. Result: over-production and deadweight welfare loss.'
    },
    {
      id: 'mf-extract-q2',
      question: 'Case B describes which type of market failure? Why does the private market fail to provide street lighting at the optimal level?',
      options: [
        'Negative externality – street lighting imposes light pollution on residents who prefer darkness',
        'Public good – street lighting is non-excludable (can\'t stop non-payers benefiting) and non-rival (one person\'s use doesn\'t reduce others\'), causing the free rider problem and under-provision',
        'Imperfect information – residents don\'t know whether they want street lighting until they experience it',
        'Monopoly power – the private lighting firm charges a price above marginal cost, reducing consumption'
      ],
      correct: 1,
      explanation: 'Case B describes a pure public good problem. Street lighting is non-excludable (you cannot prevent non-payers from benefiting) and non-rival (my use doesn\'t reduce the light available to you). This causes the free rider problem: rational individuals don\'t pay because they can benefit for free. If everyone reasons this way, the good is under-provided or not provided at all by the private market. The government must fund it through general taxation to achieve the socially optimal level of provision.'
    },
    {
      id: 'mf-extract-q3',
      question: 'Case C describes which type of market failure, and what is the specific mechanism causing it?',
      options: [
        'Moral hazard – workers with insurance take more risks, increasing unemployment claims',
        'Adverse selection – asymmetric information causes low-risk buyers to exit the market, leaving only high-risk buyers, which pushes up prices and may cause the market to collapse',
        'A negative externality – unemployed workers impose costs on the state benefits system',
        'A positive externality – workers who maintain employment generate benefits for employers who are not compensated'
      ],
      correct: 1,
      explanation: 'Case C describes adverse selection, a form of asymmetric information. Workers know their own employment risk better than insurers do (asymmetric information). Low-risk workers see the premium as too expensive relative to their actual risk and don\'t buy insurance. This leaves the insurer with a pool dominated by high-risk workers – so premiums rise further – which drives out more low-risk workers. In the extreme, the market "unravels" entirely. This is Akerlof\'s "Market for Lemons" applied to insurance markets – a classic A-level evaluation point.'
    }
  ]
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for market_failure
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Market Failure',
  estTime: '15–20 minutes',
  goal:    'Bridge your market failure knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "You've locked in the three routes to market failure, the welfare-loss triangle and the diagnostic framework. Now train the skills examiners reward – applying the information asymmetry framework to a real market, building a watertight adverse selection chain, and reaching a supported judgement on whether disclosure legislation is justified.",
    heroKey: 'heroBars',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real context to test whether information asymmetry justifies mandatory disclosure',
      'Build a watertight adverse selection causal chain',
      'Pick, label and explain the demand-fall diagram for information asymmetry',
      'Evaluate the key conditions that change whether disclosure or regulation is most effective'
    ],
    tip: "These steps are cognitive drills – same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context', skill: 'Application', sub: 'Read an extract and judge which evidence changes the answer.', href: TopicLoader.routes.link('context'), state: 'available' },
      { num: 2, name: 'Build the chain', skill: 'Analysis', sub: 'Order or fill the steps in a reasoning chain.', href: TopicLoader.routes.link('chain'), state: 'available' },
      { num: 3, name: 'Read the extract', skill: 'Analysis', sub: 'Pull the evaluation-worthy detail from a real-world extract.', href: TopicLoader.routes.link('extract'), state: 'available' },
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
   Market Failure: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Market Failure',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.routes.link('complete'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.routes.link('extract') },
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
      id: 'info-asymmetry-judgement',
      claim: {
        icon:   '🚗',
        prompt: 'Policy claim',
        text:   'Information asymmetry is the primary cause of market failure in the used car market.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '1 in 3 buyers experienced undisclosed defects; Consumer Rights Act 2015 mandates disclosure; fewer than 2% of disputes reach legal proceedings.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Buyers assume average quality → WTP depressed → adverse selection spiral → D shifts left from D₁ to D₂ → fewer quality cars than socially optimal.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'D shifts left from D₁ to D₂ → equilibrium moves from Q₁ to Q₂ at lower price → deadweight welfare loss from deals that never happen.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness of disclosure depends on severity of asymmetry, enforcement quality, and availability of private information platforms (AutoTrader, HPI).' }
      ],
      cloze: 'Information asymmetry causes market failure when sellers know more about [1] than buyers can verify. In the used car market, buyers cannot distinguish high from low quality cars before purchase – so they base WTP on [2], depressing effective demand from D₁ to D₂. This [3] shift creates a deadweight welfare loss: gains from trade between quality sellers and buyers willing to pay for quality are never realised. The adverse selection spiral occurs because [4] cars exit the market when buyers will not pay above average-quality prices. Mandatory disclosure (Consumer Rights Act 2015) attempts to restore D toward D₁ by [5]. However, enforcement of disclosure is costly – and the policy works best when [6] of defects is reliably detected and sanctioned. Private information intermediaries (AutoTrader valuations) partially [7] the market failure without government mandate. Therefore, information asymmetry is most damaging in markets with [8] products where quality cannot be assessed before or during purchase.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-quality',     text: 'product quality',           correct: true  },
            { id: 'b1-price',       text: 'price',                     correct: false },
            { id: 'b1-supply',      text: 'supply conditions',         correct: false },
            { id: 'b1-pref',        text: 'consumer preferences',      correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-avg',         text: 'average expected quality',          correct: true  },
            { id: 'b2-max',         text: 'the maximum possible quality',      correct: false },
            { id: 'b2-cert',        text: 'government-certified quality',      correct: false },
            { id: 'b2-cs',          text: 'consumer surplus',                  correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-left',        text: 'leftward demand',    correct: true  },
            { id: 'b3-rsup',        text: 'rightward supply',   correct: false },
            { id: 'b3-lsup',        text: 'leftward supply',    correct: false },
            { id: 'b3-rdem',        text: 'rightward demand',   correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-hq',          text: 'high-quality (lemon-free)', correct: true  },
            { id: 'b4-lq',          text: 'low-quality',               correct: false },
            { id: 'b4-imp',         text: 'imported',                  correct: false },
            { id: 'b4-sh',          text: 'second-hand',               correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-hist',        text: 'requiring sellers to reveal vehicle history and condition', correct: true  },
            { id: 'b5-cost',        text: 'subsidising consumer legal costs',                          correct: false },
            { id: 'b5-tax',         text: 'imposing quality taxes on dealers',                         correct: false },
            { id: 'b5-nat',         text: 'nationalising the used car market',                         correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-nondis',      text: 'non-disclosure',           correct: true  },
            { id: 'b6-pd',          text: 'price discrimination',     correct: false },
            { id: 'b6-oc',          text: 'consumer over-confidence', correct: false },
            { id: 'b6-sc',          text: 'supply contraction',       correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-correct',     text: 'correct',   correct: true  },
            { id: 'b7-amplify',     text: 'amplify',   correct: false },
            { id: 'b7-ignore',      text: 'ignore',    correct: false },
            { id: 'b7-replace',     text: 'replace',   correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-complex',     text: 'complex',      correct: true  },
            { id: 'b8-simple',      text: 'simple',       correct: false },
            { id: 'b8-regulated',   text: 'regulated',    correct: false },
            { id: 'b8-monopoly',    text: 'monopolistic', correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-only',    text: 'Information asymmetry is the only cause of market failure – externalities and public goods are secondary',                                              correct: false },
          { id: 'op-sig',     text: 'Information asymmetry is a significant market failure, correctable by mandatory disclosure and private intermediaries, but enforcement quality determines effectiveness', correct: true  },
          { id: 'op-self',    text: 'Market failures from information gaps always resolve themselves through private sector signalling',                                                    correct: false },
          { id: 'op-ban',     text: 'Banning used car sales is the only way to eliminate the market failure',                                                                             correct: false }
        ]
      },
      examBridge: '"Information asymmetry in the used car market depresses buyer WTP from D₁ to D₂, producing an adverse selection spiral that leaves Q₂ < Q₁ and a deadweight welfare loss. The Consumer Rights Act 2015 addresses this through mandatory disclosure, moving D back toward D₁ – but effectiveness depends on enforcement. AutoTrader valuations and HPI checks are private-sector corrections that partially substitute for government mandate. The strongest evaluation recognises that enforcement quality and digital platform coverage jointly determine how close D₂ gets to D₁."'
    }
  ]
};

