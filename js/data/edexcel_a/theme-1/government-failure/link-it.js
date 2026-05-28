/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   Government Failure: demand subsidy + inelastic supply → price rise
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Government Failure',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('extract'),

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
      id: 'help-to-buy-failure',
      scenario: {
        icon:  '🏗️',
        label: 'Scenario',
        text:  'The UK government launches the Help to Buy equity loan scheme in 2013. First-time buyers can borrow up to 20% of a new-build\'s purchase price from the government, interest-free for five years. Housing supply is highly inelastic (PES ≈ 0.4).'
      },
      anchor: 'UK housing supply is highly inelastic (PES ≈ 0.4).',
      tiles: [
        {
          id:  'step-policy',
          icon: '💰',
          text: 'Help to Buy equity loans raise buyer purchasing power → demand shifts right',
          pos:  0
        },
        {
          id:  'step-unintended',
          icon: '📊',
          text: 'Inelastic supply → demand stimulus raises P far more than Q (+£8k per OBR)',
          pos:  1
        },
        {
          id:  'step-failure',
          icon: '⚠️',
          text: 'Non-scheme buyers face higher prices → subsidy captured by developers',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '📈',
          text: 'Interest rate rises reduce housing demand by raising mortgage costs',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '🏛️',
          text: 'Government imposes rent controls on the private rented sector',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '⏱️',
          text: 'Planning reforms cut time from permission to build completion',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Help to Buy equity loans effectively lower the deposit required from buyers, shifting their budget constraint rightward. This is a pure demand-side intervention: it raises purchasing power without touching the supply constraints (planning rules, labour availability, land costs) that determine how many homes can be built.'
        },
        {
          pos:  1,
          text: 'With PES ≈ 0.4, the housing supply curve is steep – housebuilders cannot rapidly increase output even when prices rise. When demand shifts right, the market adjustment falls almost entirely on price rather than quantity. Developers facing stronger demand with limited competition can raise prices; the OBR found this effect averaged £8,000 per new-build property.'
        },
        {
          pos:  2,
          text: 'Government failure occurs when an intervention produces an outcome worse than the market failure it was designed to correct. Help to Buy intended to improve affordability but, because supply inelasticity was not addressed, the main effect was to raise new-build prices – a windfall for developers and a deterioration in affordability for buyers outside the scheme. The information failure at design stage was failing to model how inelastic supply would absorb the demand shock.'
        }
      ],
      examBridge: '"Help to Buy shifted demand for new-build homes right from D₁ to D₂. Because housing supply is highly inelastic (PES ≈ 0.4), the new equilibrium at E₂ showed a large price rise and a small quantity increase – consistent with OBR evidence of £8,000 average new-build price inflation. Developers captured the benefit through higher margins; non-subsidised buyers faced higher prices. This is government failure: the intervention worsened the affordability problem it was designed to solve by stimulating demand without addressing supply constraints."',

      prompts: [
        'Why did Help to Buy fail to improve affordability despite its large scale?',
        'What happens to the market equilibrium when demand rises but supply is highly inelastic?',
        'Who captured the benefit of the Help to Buy subsidy, and why?'
      ],
      modelAnswers: [
        'Help to Buy was a demand-side intervention only: it increased purchasing power without changing the planning rules, labour availability or land costs that constrain housing supply. With PES ≈ 0.4, the supply curve barely shifts even when prices rise – so additional demand is absorbed as higher prices, not more homes. Affordability worsened for non-HTB buyers.',
        'With inelastic supply, a rightward demand shift produces a large price increase (P₁ → P₂) and a very small quantity increase (Q₁ → Q₂). On a diagram, the equilibrium moves almost vertically upward rather than horizontally rightward – this is the visual signature of government failure in a supply-constrained market.',
        'Developers (suppliers) captured most of the benefit. Because supply is inelastic, they could raise prices when demand increased without producing proportionally more homes. The OBR\'s £8,000 average new-build price inflation and Barratt\'s record 21% operating margins both confirm that the subsidy was transferred from buyers to developers – a classic incidence outcome when supply is more inelastic than demand.'
      ],
      vocab: ['government failure', 'unintended consequences', 'inelastic supply', 'demand subsidy', 'price elasticity of supply', 'planning constraints', 'information failure', 'regulatory capture', 'opportunity cost', 'windfall profit']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Government Failure
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Government Failure',
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
    extract: [
      { min: 80, text: 'Strong extract reading' },
      { min: 55, text: 'Good – check your evidence application' },
      { min: 0,  text: 'Extract analysis needs more attention' }
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

  useInLandIt: 'Government failure arises when intervention produces worse outcomes than the market failure it targets. The mechanism here: demand stimulus + inelastic supply = price rise, not output rise. Always trace the full market response – including who captures the benefit – to evaluate whether policy achieves its stated objective.',

  focusInLandIt: {
    context: 'Use specific evidence – the OBR\'s £8,000 figure and the RICS new-build premium doubling – to anchor your application to the real-world case, not just generic government failure theory.',
    chain:   'State the chain explicitly: demand subsidy → D shifts right → PES ≈ 0.4 → price rises >> quantity rises → developers capture windfall → non-HTB buyers worse off → government failure.',
    extract: 'Use the extract cases (planning restrictions, biofuel subsidies, energy tariffs) to identify the type of government failure in each: unintended consequences, regulatory capture, or incomplete information. Classify before evaluating – the policy response differs by failure type.',
    depends: 'Lead with housing PES (supply elasticity) as your condition – if PES had been higher (faster planning), the same demand stimulus would have generated more homes rather than higher prices. This is the pivotal factor that determines whether Help to Buy constitutes government failure.',
    judge:   'State a clear position (government failure), use the mechanism (D shifts right, inelastic S absorbs shock into prices), add the condition (PES / information failure), and explain the limitation honestly (counterfactual is uncertain; 310,000 purchases did help some buyers).'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   Government Failure: classify evidence on Help to Buy as government failure
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Government Failure',
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
    question:    'Which details in this extract most change whether Help to Buy (2013–23) represents government failure – a policy that worsened the housing affordability problem it was designed to solve?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'The Ministry of Housing, Communities and Local Government reported that Help to Buy equity loans [[supported|supported 310,000 home purchases in England between 2013 and 2023]], providing first-time buyers with equity loans covering up to 20% of a new-build\'s purchase price (40% in London).',
      'The Office for Budget Responsibility found that [[price-rise|Help to Buy added an average of £8,000 to new-build house prices]], concluding that the scheme had "limited impact on housing supply" because it did not address planning constraints, labour shortages or land costs.',
      'RICS research showed that [[premium|new-build premiums over second-hand homes rose from 9% to 22%]] before and after Help to Buy, indicating that developers – not buyers – captured much of the subsidy as higher margins.',
      'Barratt Developments reported [[margins|record operating margins of 21% in 2021–22]], partly attributed to Help to Buy demand support, suggesting that the policy created substantial windfall profits for housebuilders.',
      'Housing supply is highly price inelastic – the [[pes|PES for new housing ≈ 0.4]] due to planning constraints, construction labour shortages, and land banking by developers, meaning demand stimulus raises prices far more than it raises output.'
    ],

    evidence: {
      'supported': { text: 'supported 310,000 home purchases in England between 2013 and 2023' },
      'price-rise': { text: 'Help to Buy added an average of £8,000 to new-build house prices' },
      'premium':    { text: 'new-build premiums over second-hand homes rose from 9% to 22%' },
      'margins':    { text: 'record operating margins of 21% in 2021–22' },
      'price-elasticity-of-supply':        { text: 'PES for new housing ≈ 0.4' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the government failure claim',    tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against the government failure claim', tone: 'pink', icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',          tone: 'blue',  icon: '?' }
    ],

    correct: {
      'supported':  'against',
      'price-rise': 'supports',
      'premium':    'supports',
      'margins':    'supports',
      'price-elasticity-of-supply':        'supports'
    },

    explain: {
      'supported':  'At face value, 310,000 purchases suggests the scheme helped buyers – but this is a count of users, not evidence that they are better off. The counterfactual question is whether prices would have been lower without the scheme, making those buyers worse off than if it had never existed.',
      'price-rise': 'The OBR\'s £8,000 average new-build price inflation is the strongest single piece of evidence for government failure: the demand stimulus raised prices (benefiting developers) rather than producing more homes (benefiting buyers). This directly supports the claim.',
      'premium':    'The doubling of the new-build premium from 9% to 22% shows the price wedge between subsidised and unsubsidised markets – exactly what economic theory predicts when a demand subsidy meets inelastic supply. Suppliers capture the benefit.',
      'margins':    'Record housebuilder margins confirm that Help to Buy transferred wealth to developers rather than improving buyer affordability. This is the "windfall profit" mechanism of government failure: subsidy intended for consumers is captured by inelastic suppliers.',
      'price-elasticity-of-supply':        'PES ≈ 0.4 is the structural reason Help to Buy produced government failure rather than success. With such inelastic supply, demand stimulus translates mainly into higher prices, not more homes. This supports the claim by explaining the mechanism.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The OBR\'s finding that Help to Buy added £8,000 to average new-build prices, combined with the doubling of the new-build premium (9% to 22%), strongly supports the government failure claim: demand stimulus met inelastic supply (PES ≈ 0.4), and the benefit was captured by developers as windfall profits. Only the count of 310,000 purchases partially complicates the case – but this measure ignores the counterfactual, making it weak evidence against the government failure interpretation."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'             },
      { icon: '❓', text: 'Ask which details change the conclusion'           },
      { icon: '⚖️', text: 'Separate supporting evidence from complications'   }
    ]
  }
};

/* ---- link-depends.js ---- */
/* ============================================================
   ECONOS – Link It · It Depends On station data
   Government Failure: evaluate whether Help to Buy is government failure
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Government Failure',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether Help to Buy constitutes government failure.',
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
      id: 'help-to-buy-depends',
      claim: {
        icon:   '🏗️',
        prompt: 'Policy claim',
        text:   'Help to Buy is government failure – demand boost, supply unfixed.'
      },
      factors: [
        {
          id:    'supply-elasticity',
          icon:  '🏗️',
          label: 'Price elasticity of supply for new housing',
          why:   'With PES ≈ 0.4, most of any demand stimulus is absorbed as higher prices rather than more houses. A demand subsidy only improves affordability if supply is sufficiently elastic to expand output in response to the price signal. In countries with faster planning systems (Germany, Japan), higher PES means demand stimulus translates into more housing rather than price inflation.'
        },
        {
          id:    'information',
          icon:  '🔍',
          label: 'Quality of government information at policy design',
          why:   'Government failure here is partly an information problem: if policymakers had accurately modelled the supply elasticity, they would have known that a demand subsidy with PES ≈ 0.4 would mostly raise prices. Better pre-policy modelling (using the OBR\'s own structural models) could have predicted the unintended consequence before implementation.'
        },
        {
          id:    'political-economy',
          icon:  '🗳️',
          label: 'Political pressures on policy design',
          why:   'Help to Buy was partly designed for political rather than economic reasons – helping voters onto the housing ladder generates electoral support, regardless of efficiency. Housebuilders lobby for demand subsidies (which raise their revenues) rather than planning reforms (which increase competition). Regulatory capture means policy is distorted toward supplier interests even when this creates government failure.'
        },
        {
          id:    'time-lag',
          icon:  '⏱️',
          label: 'Time lag between policy design and impact assessment',
          why:   'Help to Buy ran for 10 years before the OBR\'s impact assessment was published. Policy feedback loops in housing are slow: price effects take years to fully materialise and are confounded by interest rate changes, demographics, and global housing market trends. Long time lags mean government failure is identified slowly – and political capital has often been committed before evidence of failure emerges.'
        },
        {
          id:    'counterfactual',
          icon:  '❓',
          label: 'Difficulty of the counterfactual (what would have happened without HTB)',
          why:   'Attributing price rises to Help to Buy requires estimating what prices would have been without the scheme. OBR\'s £8,000 estimate is a modelled counterfactual. If interest rates had been lower, or immigration higher, prices might have risen similarly without HTB. Uncertainty about the counterfactual makes it difficult to conclude definitively that HTB caused government failure rather than coinciding with an independent price surge.'
        },
        {
          id:    'distributional',
          icon:  '👥',
          label: 'Distributional impact (who benefits and who loses)',
          why:   'Help to Buy primarily benefited buyers in England – particularly in regions where new-build homes are prevalent (outer London, South East). Lower-income buyers priced out of even subsidised homes gained nothing. Developers with land banks in the right areas gained most. The distributional impact is both inefficient (subsidy captured by developers) and inequitable (benefits concentrated among those who could nearly afford homes anyway).'
        },
        {
          id:    'complementary-policy',
          icon:  '🔧',
          label: 'Whether complementary supply-side policy accompanied the scheme',
          why:   'Government failure would have been reduced if HTB had been accompanied by planning reform, social housebuilding, or land value capture. In isolation, demand stimulus with no supply response always raises prices in inelastic markets. A package of demand and supply-side measures might have achieved better affordability outcomes – though political feasibility of planning reform is constrained by NIMBYism.'
        },
        {
          id:    'exit-strategy',
          icon:  '🚪',
          label: 'Impact of HTB termination on market expectations',
          why:   'Help to Buy\'s termination in March 2023 was anticipated to reduce new-build demand sharply. Developers responded by reducing new starts before the deadline, contracting supply further. Government failure can persist beyond the policy itself if exit from a distortionary scheme generates market adjustment costs – suggesting careful phasing-out is needed.'
        }
      ],
      modelRanking: ['supply-elasticity', 'information', 'political-economy'],
      judgement: '"Whether Help to Buy constitutes government failure depends on how housing supply elasticity is modelled. With PES ≈ 0.4, the OBR\'s finding of £8,000 price inflation from the scheme is consistent with economic theory – demand stimulus with inelastic supply raises prices. But the political economy argument is also relevant: housebuilder lobbying ensured the scheme was not paired with planning reform, and the information failure at design stage (failure to model supply inelasticity accurately) is compounded by incentive misalignment."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Government Failure: demand shifts right on steep inelastic housing supply
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378

   S (steep inelastic housing supply, PES ≈ 0.4):
     (200,390)→(280,30)   slope = (30-390)/(280-200) = -360/80 = -4.5
     y = 1290 - 4.5x
     Check: x=200 → y=1290-900=390 ✓; x=280 → y=1290-1260=30 ✓

   D₁ (original demand):
     (110,80)→(490,360)   slope = (360-80)/(490-110) = 280/380 ≈ 0.737
     y = 0.737x - 1.1  (≈ 0.737x)

   D₂ (demand after Help to Buy, shifted +60px right):
     (170,80)→(543,354)   y = 0.737(x-60) = 0.737x - 44.2

   E₁ (D₁ ∩ S):  0.737x = 1290 - 4.5x  →  5.237x = 1290  →  x ≈ 246, y ≈ 182
   E₂ (D₂ ∩ S):  0.737x - 44.2 = 1290 - 4.5x  →  5.237x = 1334.2  →  x ≈ 255, y ≈ 144

   Key visual: ΔQ = 9px (tiny quantity rise), ΔP = 38px upward (large price rise)
   → government failure shown: price jumps, quantity barely moves             */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Government Failure',
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
    title:       'Help to Buy equity loans increase first-time buyer purchasing power. UK housing supply is highly inelastic (PES ≈ 0.4). Which diagram correctly shows the market outcome?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the Help to Buy effect. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      'd-right',
        correct:  true,
        title:   'Demand shifts right',
        sub:     'Demand shifts right – subsidy raises buyer purchasing power, but inelastic supply means prices rise mainly rather than output increasing',
        why:     'Help to Buy equity loans raise effective purchasing power for first-time buyers – a demand-side subsidy. The demand curve shifts right from D₁ to D₂. Because housing supply is highly inelastic (PES ≈ 0.4), the supply curve is very steep. The new equilibrium is almost directly above the old one: a large price rise (P₁ → P₂) with barely any increase in quantity (Q₁ → Q₂). This is the government failure mechanism – demand stimulus absorbed into prices, not output.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Supply expands – more homes are built at every price level',
        why:     'A rightward supply shift would represent planning reform, faster construction, or lower build costs – which is exactly what Help to Buy did NOT address. Help to Buy was a demand-side subsidy only; it left housing supply constraints (planning restrictions, labour shortages, land costs) entirely unchanged. This is the core of the government failure: supply was not addressed.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Demand falls – buyers\' willingness to pay decreases',
        why:     'A leftward demand shift would require something that reduces buyers\' purchasing power or willingness to pay – such as rising interest rates, falling incomes, or regulatory restrictions on mortgages. Help to Buy did the opposite: it increased purchasing power through an equity loan subsidy. The direction is wrong.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Supply contracts – fewer homes are built at every price level',
        why:     'A leftward supply shift would represent rising construction costs, labour shortages worsening, or regulatory tightening of building permissions. Help to Buy had no direct effect on supply costs – and housebuilders responded to higher demand by raising prices, not reducing output. The supply curve was not shifted by Help to Buy.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🏗️',
    text:  'Help to Buy 2013–23: 310,000 homes supported. OBR: scheme added £8,000 to average new-build price. Developer margins hit record 21%.',
    dataPoints: [
      { icon: '📈', text: 'PES for new housing ≈ 0.4 – planning constraints prevent quick supply rise' },
      { icon: '💰', text: 'Demand stimulus: equity loans up to 20% of purchase price' },
      { icon: '⚠️', text: 'Government failure: prices rose, developers captured windfall' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – Help to Buy demand stimulus with inelastic housing supply',
    xLabel:    'Quantity of new homes',
    yLabel:    'Price (£)',

    lines: [
      /* S (steep inelastic housing supply, PES ≈ 0.4) – purple upward-sloping steep */
      { x1: 200, y1: 390, x2: 280, y2: 30,  stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'S (PES ≈ 0.4)', labelX: 284, labelY: 28, labelFill: '#7c3aed' },
      /* D₁ (original demand) – green downward-sloping */
      { x1: 110, y1: 80,  x2: 490, y2: 360, stroke: '#059669', strokeWidth: 2.5,
        label: 'D₁', labelX: 494, labelY: 360, labelFill: '#059669' },
      /* D₂ (demand after Help to Buy, shifted right 60px) – amber downward-sloping */
      { x1: 170, y1: 80,  x2: 543, y2: 354, stroke: '#d97706', strokeWidth: 2.5,
        label: 'D₂', labelX: 545, labelY: 352, labelFill: '#d97706' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₂ (post-HTB, higher price) */
      { x1: 100, y1: 144, x2: 255, y2: 144, tickLeft: 'P₂', tickLeftY: 147 },
      /* Horizontal from y-axis to E₁ (original price) */
      { x1: 100, y1: 182, x2: 246, y2: 182, tickLeft: 'P₁', tickLeftY: 185 },
      /* Vertical from E₂ down to x-axis */
      { x1: 255, y1: 144, x2: 255, y2: 400, tickBottom: 'Q₂', tickBottomX: 255 },
      /* Vertical from E₁ down to x-axis */
      { x1: 246, y1: 182, x2: 246, y2: 400, tickBottom: 'Q₁', tickBottomX: 246 }
    ],

    /* Shift arrow: D₁ → D₂ pointing right */
    shiftArrow: { x1: 280, y1: 110, x2: 340, y2: 110, stroke: '#d97706' },

    eqDots: [
      {
        cx: 246, cy: 182, fill: '#059669',
        initLabel: 'Pre-HTB equilibrium', initLabel2: '(Q₁, P₁)', initLabelX: 253, initLabelY: 177
      },
      {
        cx: 255, cy: 144, fill: '#d97706',
        newLabel: 'Post-HTB equilibrium', newLabel2: '(Q₂, P₂ – higher)', newLabelX: 262, newLabelY: 139
      }
    ],

    legend: [
      { color: '#059669', text: 'D₁ = Original housing demand (before Help to Buy)' },
      { color: '#d97706', text: 'D₂ = Demand after Help to Buy equity loan (shifted right)' },
      { color: '#7c3aed', text: 'S = Housing supply (highly inelastic, PES ≈ 0.4 – planning constraints)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the Help to Buy government failure.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',     label: 'Shift label',                 pctX: 54,  pctY: 19,   pctW: 22 },
      { id: 'new-eq',    label: 'New equilibrium',             pctX: 45,  pctY: 28,   pctW: 22 },
      { id: 'orig-eq',   label: 'Original equilibrium',        pctX: 43,  pctY: 36,   pctW: 22 },
      { id: 'hi-price',  label: 'Higher price P₂ (govt fail)', pctX: 0.5, pctY: 28,   pctW: 17 },
      { id: 'small-qty', label: 'Tiny quantity rise (Q₂≈Q₁)',  pctX: 41,  pctY: 93.5, pctW: 22 }
    ],

    chips: [
      { id: 'demand-shift', text: 'Demand shifts right (Help to Buy)', icon: '→', zone: 'shift',     correct: true  },
      { id: 'new-eq',       text: 'New equilibrium (Q₂, P₂)',          icon: '●', zone: 'new-eq',    correct: true  },
      { id: 'orig-eq',      text: 'Original equilibrium (Q₁, P₁)',     icon: '●', zone: 'orig-eq',   correct: true  },
      { id: 'hi-price',     text: 'Higher price P₂ (govt failure)',     icon: '↑', zone: 'hi-price',  correct: true  },
      { id: 'small-qty',    text: 'Tiny quantity rise (Q₂ ≈ Q₁)',      icon: '→', zone: 'small-qty', correct: true  },
      { id: 'sup-shift',    text: 'Supply shifts right',                icon: '→', zone: null,        correct: false },
      { id: 'big-qty',      text: 'Large quantity increase',            icon: '↑', zone: null,        correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['government failure', 'unintended consequences', 'inelastic supply', 'demand subsidy', 'price elasticity of supply', 'planning constraints', 'information failure', 'windfall profit', 'PES', 'producer surplus'],

    parts: [
      {
        num:         1,
        title:       'Explain why Help to Buy produces government failure',
        prompt:      'Why does Help to Buy produce government failure rather than success?',
        maxChars:    240,
        modelAnswer: 'Housing supply is highly inelastic (PES ≈ 0.4): planning constraints, construction labour shortages and land banking mean supply barely increases even when prices rise. Demand stimulus (HTB equity loans) shifts D right but almost all the adjustment is absorbed by higher prices, not more housing. The government failed to address the supply-side root cause.'
      },
      {
        num:         2,
        title:       'Explain who captures the subsidy',
        prompt:      'Who captures the benefit of the subsidy?',
        maxChars:    240,
        modelAnswer: 'With inelastic supply, sellers (developers) capture most of the subsidy as higher prices rather than consumers receiving affordability gains. This is the producer surplus capture effect: OBR found £8,000 average new-build price inflation and RICS found the new-build premium doubled. Buyers with HTB partially offset this with the equity loan; buyers without HTB face a higher price with no offset.'
      },
      {
        num:         3,
        title:       'Explain what policy would have avoided the failure',
        prompt:      'What policy would have avoided the government failure?',
        maxChars:    240,
        modelAnswer: 'Addressing supply inelasticity directly: zonal planning reform, social house-building, developer land value capture, or build-to-rent investment. Any demand stimulus without supply-side action repeats the same government failure – the price mechanism absorbs demand into prices rather than output when PES is low.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Identify the government failure mechanism (demand stimulus + inelastic supply)',
      'Show diagram outcome (large ΔP, small ΔQ)',
      'Identify who captures the subsidy (developers/suppliers)',
      'Propose a supply-side correction to avoid government failure'
    ],

    examAnswer: '"Help to Buy shifted demand for new-build homes right from D₁ to D₂. Because housing supply is highly inelastic (PES ≈ 0.4), the market absorbed the demand shock almost entirely through higher prices: E₂ is almost directly above E₁ – a large price rise (P₁ → P₂) with a tiny quantity increase. Developers captured the subsidy as windfall profits; non-HTB buyers faced higher prices. This is government failure: the policy worsened the affordability problem it was designed to solve, because the information failure – ignoring supply inelasticity – led to incomplete policy design."'
  }
};

/* ---- link-extract.js ---- */
/* ============================================================
   ECONOS – Link It · Read the Extract station data
   Government Failure: unintended consequences and regulatory capture
   ============================================================ */

window.ECONOS_LINK_EXTRACT = {
  topic:   'Government Failure',
  backUrl: TopicLoader.routes.link('chain'),
  nextUrl: TopicLoader.routes.link('depends'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.routes.link('extract') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 2,

  eyebrow:     'Read the Extract',
  instruction: 'Read the passage carefully. Each case illustrates a different type of government failure. Identify the specific mechanism causing the failure in each example.',

  passage: {
    title: 'Extract: Three cases of government failure in UK policy',
    source: 'Adapted from: NAO Housing Report (2019); IPPR Biofuels Review (2014); CMA Energy Market Investigation (2016)',
    text: '<strong>Case A: UK planning restrictions and housing.</strong> UK planning law requires developers to obtain planning permission before building. The intention was to protect green spaces and architectural character. However, the number of new homes completed annually has fallen chronically short of estimated housing demand – approximately 300,000 homes per year – since the 1970s. By restricting land supply, planning permission created an unintended effect: house prices have risen faster than wages for 30 consecutive years, reducing homeownership rates among under-35s from 65% in 1990 to 38% today.<br><br><strong>Case B: EU biofuel subsidies and food prices.</strong> The EU mandated that 10% of transport fuel must come from biofuels by 2020 to reduce carbon emissions. This created large subsidies for biofuel crop production. An unintended consequence emerged: farmland shifted from food crops to biofuel crops, reducing global food supply. The UN Food and Agriculture Organisation estimated that biofuel mandates contributed to a 75% rise in global food prices between 2005 and 2008, disproportionately affecting the world\'s poorest consumers.<br><br><strong>Case C: Energy market regulation and tacit collusion.</strong> The UK energy market is regulated by Ofgem. During the 2010s, Ofgem approved "simpler" tariff structures to make comparison easier for consumers. However, by limiting the number of tariffs each company could offer, the regulation inadvertently aligned energy firms\' pricing strategies – making it easier for companies to match each other\'s prices without explicit collusion. The CMA found in 2016 that consumers were overpaying by £1.4bn per year.'
  },

  questions: [
    {
      id: 'gf-extract-q1',
      question: 'Case A (planning restrictions) illustrates which type of government failure?',
      options: [
        'Regulatory capture – house builders have lobbied planners to restrict supply and keep prices high, benefiting existing homeowners at the expense of first-time buyers',
        'Unintended consequences – a policy designed to protect green spaces has inadvertently restricted housing supply, causing prices to rise and affordability to worsen for younger generations',
        'Information failure by government – planners do not know how many homes are needed, so they approve too few permissions',
        'Short-termism – governments build too few houses before elections because voters dislike construction noise and disruption'
      ],
      correct: 1,
      explanation: 'Case A is the classic unintended consequences failure. The policy goal (protecting green space and character) was legitimate, but the restriction on land supply created a side effect that the planners did not intend: a chronic housing shortage. Because planning permission is scarce, land with permission commands a premium – raising house prices beyond what market wages support. This is government failure because the intervention (planning restriction) generated a cost (housing unaffordability) that exceeded or overshadowed the intended benefit (environmental protection). Note: regulatory capture is also plausible here – homeowners benefit from restricted supply – making it a good exam evaluation point.'
    },
    {
      id: 'gf-extract-q2',
      question: 'Case B (biofuel subsidies) illustrates which mechanism of government failure, and what was the key unintended consequence?',
      options: [
        'Short-termism – governments subsidised biofuels to win votes in agricultural regions, without considering long-run food supply effects',
        'Unintended consequences – the subsidy shifted land from food to fuel crops, reducing global food supply and contributing to a 75% rise in food prices, harming the world\'s poorest consumers',
        'Regulatory capture – biofuel firms lobbied the EU to mandate their product, capturing the regulatory process',
        'Information failure – the EU did not know that biofuel production required agricultural land, so the subsidy was poorly targeted'
      ],
      correct: 1,
      explanation: 'The EU biofuel mandate is a textbook unintended consequence: the intended effect (cutting transport carbon emissions) was achieved, but an unintended effect (displacing food crop land) caused a separate market failure – a food price spike. The government failed to account for the cross-market linkage between energy and food markets. This shows that well-intentioned intervention can create new market failures elsewhere – a key evaluation point in any government failure answer. Note the distributional dimension: carbon reduction benefits are diffuse and global, while the food price harm fell hardest on the world\'s poorest – an equity argument that complicates cost-benefit analysis.'
    },
    {
      id: 'gf-extract-q3',
      question: 'Case C (energy tariff regulation) is an example of which specific type of government failure?',
      options: [
        'Unintended consequences – the regulation reduced tariff complexity but inadvertently facilitated tacit price collusion, costing consumers £1.4bn per year',
        'Regulatory capture – energy firms lobbied Ofgem to limit tariffs, knowing fewer tariffs would make price comparison easier and reduce competitive pressure',
        'Information failure – Ofgem did not know that energy firms were colluding, so it could not prevent the collusion from occurring',
        'Government monopoly – by limiting tariffs, Ofgem effectively nationalised the pricing decision, eliminating competitive pressure'
      ],
      correct: 0,
      explanation: 'Case C is another unintended consequence – but with a twist: the regulation made the market less competitive, not more. By limiting each firm to a small number of tariffs, Ofgem made it easy for firms to observe and match each other\'s prices. Explicit collusion (price-fixing agreements) is illegal under competition law, but tacit collusion (independently matching prices because the structure makes it rational to do so) is harder to prosecute. The simplified tariff regulation created exactly the structural conditions for tacit collusion. The regulatory intervention that was meant to help consumers ended up costing them £1.4bn per year – a stark illustration of how government failure can worsen the problem it intended to solve.'
    }
  ]
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for govt_failure
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Government Failure',
  estTime: '15–20 minutes',
  goal:    'Bridge your government failure knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: 'Use the UK Help to Buy scheme (2013–23) to apply the government failure framework – how a well-intentioned demand subsidy can worsen the problem it was designed to solve when supply constraints are ignored in policy design.',
    heroKey: 'heroIntervention',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Explain how government failure can arise from information problems and unintended consequences',
      'Build the causal chain from demand subsidy to price rise via inelastic supply',
      'Analyse real-world extract cases of government failure including planning and biofuel policy',
      'Evaluate the conditions under which government intervention worsens rather than corrects market failure'
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
   Government Failure: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Government Failure',
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
      id: 'help-to-buy-judgement',
      claim: {
        icon:   '🏗️',
        prompt: 'Policy claim',
        text:   'Help to Buy is an example of government failure because it stimulated demand without addressing supply constraints.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'OBR: £8,000 average new-build price rise; RICS: new-build premium doubled to 22%; Barratt: 21% operating margins.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Demand stimulus → PES ≈ 0.4 → price rise >> quantity rise → developers capture windfall → non-HTB buyers worse off.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'D shifts right from D₁ to D₂; steep S means E₂ almost directly above E₁ – large ΔP, tiny ΔQ.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Verdict depends on housing PES, quality of government information at design, and political economy pressures.' }
      ],
      cloze: 'Government failure occurs when [1] produces an outcome worse than the market failure it was designed to correct. Help to Buy increased effective demand for new-build homes by [2], shifting the demand curve to the [3]. Because housing supply is highly [4] (PES ≈ 0.4), the new equilibrium showed a large [5] rise and barely any increase in housing output. The scheme transferred benefit to [6] as higher margins rather than improving affordability for buyers outside the scheme. This reflects an [7] at policy design stage – the government failed to account for how supply constraints would shape the market response. The lesson is that demand subsidies in [8] markets with low PES always risk creating price inflation rather than output expansion.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-intervention', text: 'government intervention',         correct: true  },
            { id: 'b1-market',       text: 'market forces',                   correct: false },
            { id: 'b1-consumer',     text: 'consumer demand',                 correct: false },
            { id: 'b1-price',        text: 'price mechanism',                 correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-equity',       text: 'equity loans covering up to 20% of the purchase price', correct: true  },
            { id: 'b2-pigouvian',    text: 'a Pigouvian subsidy',             correct: false },
            { id: 'b2-ceiling',      text: 'a price ceiling below equilibrium', correct: false },
            { id: 'b2-tax',          text: 'a per-unit production tax',       correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-right',        text: 'right',                           correct: true  },
            { id: 'b3-left',         text: 'left',                            correct: false },
            { id: 'b3-up',           text: 'upward',                          correct: false },
            { id: 'b3-down',         text: 'downward',                        correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-inelastic',    text: 'price inelastic',                 correct: true  },
            { id: 'b4-elastic',      text: 'price elastic',                   correct: false },
            { id: 'b4-income',       text: 'income elastic',                  correct: false },
            { id: 'b4-perfect',      text: 'perfectly elastic',               correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-price',        text: 'house price',                     correct: true  },
            { id: 'b5-qty',          text: 'quantity',                        correct: false },
            { id: 'b5-cs',           text: 'consumer surplus',                correct: false },
            { id: 'b5-revenue',      text: 'government tax revenue',          correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-dev',          text: 'developers',                      correct: true  },
            { id: 'b6-ftb',          text: 'first-time buyers',               correct: false },
            { id: 'b6-renters',      text: 'private renters',                 correct: false },
            { id: 'b6-foreign',      text: 'foreign investors',               correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-info',         text: 'information failure',             correct: true  },
            { id: 'b7-moral',        text: 'moral hazard',                    correct: false },
            { id: 'b7-free',         text: 'free rider problem',              correct: false },
            { id: 'b7-dwl',          text: 'deadweight welfare loss',         correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-constrained',  text: 'supply-constrained',              correct: true  },
            { id: 'b8-elastic',      text: 'demand-elastic',                  correct: false },
            { id: 'b8-competitive',  text: 'perfectly competitive',           correct: false },
            { id: 'b8-traded',       text: 'internationally traded',          correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-success',    text: 'Help to Buy was an unambiguous success that improved housing affordability for all first-time buyers',                               correct: false },
          { id: 'op-failure',    text: 'Help to Buy represents government failure because demand stimulus with inelastic supply mainly raises prices – benefiting developers rather than buyers', correct: true  },
          { id: 'op-always',     text: 'Any government housing policy is an example of government failure',                                                                correct: false },
          { id: 'op-corrupt',    text: 'Government failure only occurs when a policy is designed with corrupt intent',                                                     correct: false }
        ]
      },
      examBridge: '"Help to Buy shifted housing demand right from D₁ to D₂. With PES ≈ 0.4, the nearly vertical supply curve meant E₂ was almost directly above E₁ – a large price rise with barely more housing. The £8,000 new-build price inflation (OBR) and record developer margins (Barratt: 21%) show the subsidy was captured by suppliers, not consumers. This is classic government failure: incomplete information at policy design, political incentives favouring demand-side action, and no complementary supply-side reform."'
    }
  ]
};

