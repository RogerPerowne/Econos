/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   Public Goods: build the non-excludable → free rider → market failure → taxation chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Public Goods',
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
      id: 'public-goods-mechanism',
      scenario: {
        icon:  '🌊',
        label: 'Scenario',
        text:  'The UK Environment Agency is considering whether to build new coastal flood defences protecting 5,000 households in a coastal community. There is no current government provision and no private firm is building defences.'
      },
      anchor: 'Coastal flood defences are non-rival and non-excludable.',
      tiles: [
        {
          id:  'step-freerider',
          icon: '🎭',
          text: 'Free rider problem: WTP hidden → D_private ≪ D_social',
          pos:  0
        },
        {
          id:  'step-market-fail',
          icon: '📉',
          text: 'Private firms cannot charge non-payers → Q_market ≈ 0 ≪ Q*',
          pos:  1
        },
        {
          id:  'step-state',
          icon: '🏛️',
          text: 'State funds via taxation → free-rider solved → Q rises toward Q*',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '📈',
          text: 'Rising sea levels increase the MSC of not providing flood defences',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '☂️',
          text: 'Insurers price flood risk accurately, an alternative to state provision',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏘️',
          text: 'Local councils raise council tax to fund community flood barriers',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: "Non-excludability is the key: because flood protection is available to all coastal households once built – regardless of whether they contribute – each household's rational strategy is to wait for others to pay. This is the free rider problem. No one reveals their true WTP for flood protection because they expect to benefit for free. Effective market demand (D_private) collapses to near zero – far below the true social demand (D_social) that reflects the aggregated WTP of all protected households."
        },
        {
          pos:  1,
          text: "Without revealed demand, no private firm can generate enough revenue to cover the cost of provision. Even if a firm were willing to invest in flood defences, it would have no mechanism to charge the 5,000 households it protects – non-excludability prevents revenue collection. Private market provision collapses to Q_market ≈ 0, far below Q* – the socially optimal level at which the marginal social benefit (£8 per £1 invested) would justify provision."
        },
        {
          pos:  2,
          text: "General taxation solves the free rider problem by making payment compulsory. Households cannot opt out of their tax contribution – so the government can collect sufficient revenue to fund Q* of flood protection. The £5.2bn Environment Agency programme demonstrates exactly this: state provision via taxation converts D_social (true aggregate WTP) into effective collective demand, realising the £8/£1 welfare return that the private market could never capture."
        }
      ],
      examBridge: '"Coastal flood defences exhibit both non-rivalry and non-excludability – making them a pure public good. The free rider problem collapses effective market demand from D_social (true WTP) to D_private (revealed WTP ≈ 0) – no private firm can profitably provide protection it cannot exclude non-payers from enjoying. The Environment Agency\'s £5.2bn programme demonstrates state provision via general taxation as the only mechanism that can compel payment and realise the £8/£1 welfare return."',

      prompts: [
        'Why does non-excludability cause effective market demand to collapse to near zero?',
        'Why can no private firm profitably provide coastal flood defences?',
        'How does general taxation solve the free rider problem?'
      ],
      modelAnswers: [
        "Non-excludability means that once flood defences are built, no household can be prevented from benefiting – regardless of whether they contributed. Each household therefore has a dominant strategy of free riding: waiting for others to pay while expecting to receive the protection anyway. Since every household follows this strategy, no one reveals their true WTP – effective market demand collapses to D_private ≈ 0, far below D_social.",
        "A private firm's revenue comes from charging customers. Flood defences protect all coastal households simultaneously – but non-excludability means the firm cannot withhold protection from non-payers. Without a mechanism to collect payment from all beneficiaries, the firm's revenue is far less than the cost of provision. No private firm will supply flood defences because the investment would not be commercially viable – Q_market ≈ 0.",
        "General taxation is compulsory: households cannot choose to opt out. This removes the free rider option – every household contributes via their tax bill, regardless of whether they would voluntarily reveal WTP for flood protection. The government can then use this revenue to fund Q* of flood defences, converting the true aggregate D_social into effective collective demand and realising welfare gains the market cannot capture."
      ],
      vocab: ['public good', 'non-rival', 'non-excludable', 'free rider', 'market failure', 'under-provision', 'general taxation', 'revealed preference', 'social demand', 'private demand', 'quasi-public good']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Public Goods
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Public Goods',
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

  useInLandIt: 'Pure public goods require state provision because non-excludability makes private revenue impossible. Always apply both non-rivalry AND non-excludability explicitly – then explain why the free rider problem makes D_private collapse, and why general taxation is the only mechanism that forces contribution. Evaluate by reference to quasi-public goods, CBA accuracy and government failure.',

  focusInLandIt: {
    context: 'Use specific evidence – the £5.2bn EA programme and the £8/£1 cost-benefit ratio – to anchor your application to the real-world flood defence case, not just generic public goods theory.',
    chain:   'State the chain explicitly: non-excludable → free rider → D_private ≈ 0 → no private revenue → zero market provision → general taxation solves free rider → Q* achieved.',
    extract: 'Use the Trinity House lighthouse example to show the historical debate about public goods provision. When applying the extract, identify whether each good meets both conditions (non-rival AND non-excludable) – partial excludability changes the policy prescription entirely.',
    depends: 'Lead with degree of non-excludability as your top condition – if the good is quasi-public (partially excludable), market mechanisms partially apply and taxation is not the only available solution.',
    judge:   'State a clear position, use the mechanism (non-excludable → free rider → D_private collapses → taxation solves), add the condition (pure vs quasi-public, CBA accuracy), and acknowledge the limitation honestly – government failure in setting Q* is the principal risk of state provision.'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   Public Goods: classify evidence on UK coastal flood defence provision
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Public Goods',
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
    question:    'Which details in this extract most change whether coastal flood defences are a non-rival and non-excludable public good that justifies full state funding via general taxation?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'The Environment Agency\'s [[ea-programme|£5.2bn flood/coastal erosion programme (2021–27) is entirely state-funded]] – the private market does not provide coastal flood protection at all, confirming the public goods problem in practice.',
      'Cost-benefit analysis shows that [[cbr|every £1 of flood defence generates £8 of avoided damage on average]] (Environment Agency 2023) – the social benefit vastly exceeds cost, consistent with D_social far exceeding D_private.',
      'The [[cumbria|2007 Cumbria floods cost £3.5bn; later defences prevented ~£850m by 2020]] – direct evidence that state provision delivers welfare gains the private market would not realise.',
      'Community-funded local flood groups have raised funds for [[community-funds|smaller-scale defences in some areas]] – demonstrating that quasi-private provision exists at small scale in high-risk communities where excludability is more feasible, e.g. private flood barriers for specific properties.',
      'Insurance markets provide [[flood-insurance|flood insurance but require premiums that reflect true flood risk]] – an imperfect market-based solution that compensates for flood damage rather than preventing it, and excludes highest-risk households through unaffordable premiums.'
    ],

    evidence: {
      'ea-programme':    { text: '£5.2bn flood/coastal erosion programme (2021–27) is entirely state-funded' },
      'cbr':             { text: 'every £1 of flood defence generates £8 of avoided damage on average' },
      'cumbria':         { text: '2007 Cumbria floods cost £3.5bn; later defences prevented ~£850m by 2020' },
      'community-funds': { text: 'smaller-scale defences in some areas' },
      'flood-insurance': { text: 'flood insurance but require premiums that reflect true flood risk' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports state provision via taxation',       tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against full state provision',         tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',             tone: 'blue',  icon: '?' }
    ],

    correct: {
      'ea-programme':    'supports',
      'cbr':             'supports',
      'cumbria':         'supports',
      'community-funds': 'complicates',
      'flood-insurance': 'complicates'
    },

    explain: {
      'ea-programme':    'The fact that the entire £5.2bn programme is government-funded directly confirms complete market failure – the private market provides zero coastal flood protection. This is strong evidence for the public goods case: non-excludability makes private provision impossible, so taxation-funded state provision is the only available mechanism.',
      'cbr':             'An £8 return per £1 invested confirms that the social benefit (D_social) far exceeds the cost of provision. The welfare gain from flood defences is enormous – but it cannot be captured by a private firm because non-payers cannot be excluded. This cost-benefit ratio strongly supports state provision as the mechanism to realise the welfare gain.',
      'cumbria':         'The 2007 floods and subsequent prevention of £850m of damage demonstrate that state provision creates real, measurable welfare gains that the free market would never deliver. This supports the case for general taxation as the funding mechanism – the welfare return justifies compulsory contribution.',
      'community-funds': 'The existence of community-funded flood groups in some areas complicates the claim that state provision via general taxation is the only mechanism. In small, homogeneous communities with shared interests and visible local benefit, partial excludability may allow community-level funding to work – qualifying the "only solution" argument for purely local defences.',
      'flood-insurance': 'Private flood insurance provides a market-based response to flood risk, but it compensates for damage rather than preventing it – and it excludes the highest-risk households through unaffordable premiums. This complicates the analysis: insurance is a partial market response, but it does not substitute for defence provision and may create perverse incentives (moral hazard in flood-zone development).'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The £5.2bn programme and the £8/£1 cost-benefit ratio strongly support state provision via taxation as the mechanism that can realise the welfare gain that the free market cannot capture. However, the existence of community-funded local defences and private flood insurance both complicate the absolute claim – partial market and community mechanisms exist at small scale, qualifying the \'only solution\' conclusion for local and quasi-public goods."',

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
   Public Goods: evaluate the state provision claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Public Goods',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether state taxation provision is truly the only effective solution.',
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
      id: 'public-goods-provision',
      claim: {
        icon:   '🌊',
        prompt: 'Policy claim',
        text:   'Tax-funded state provision is the only fix for public good under-supply.'
      },
      factors: [
        {
          id:    'degree-non-excludable',
          icon:  '🚧',
          label: 'Degree of non-excludability',
          why:   'Pure public goods (defence, lighthouse) are completely non-excludable – no private revenue stream is possible. But some quasi-public goods (roads, parks) are partially excludable through technology (toll booths, entrance fees). For quasi-public goods, a mix of user charges and state subsidy may be more efficient than full taxation-funded provision – market mechanisms partially apply.'
        },
        {
          id:    'local-vs-national',
          icon:  '📍',
          label: 'Whether the public good is local or national',
          why:   'National public goods (defence, coastguard) cannot be provided at community level – they require national taxation. Local public goods (street lighting, local flood defence, park maintenance) can sometimes be funded by local levies or community contributions, especially in small, homogeneous communities with shared interests. Provision level and funding source must match the scale of the public good.'
        },
        {
          id:    'cost-benefit',
          icon:  '💰',
          label: 'Accuracy of cost-benefit analysis for provision level',
          why:   'Government must decide Q* – the socially optimal provision level – without market price signals. This requires cost-benefit analysis (CBA), which involves valuing non-market benefits (flood damage avoided, lives saved). If CBA is inaccurate (either over- or understating benefits), the government provides the wrong Q – an example of government information failure compounding the market failure.'
        },
        {
          id:    'government-failure',
          icon:  '⚠️',
          label: 'Risk of government failure in provision decisions',
          why:   'State provision is not guaranteed to achieve Q*. Political pressures may lead to overproduction of visible public goods (flood defences near marginal constituencies) and underproduction of less visible ones. Regulatory capture (building contractors influencing contract awards) can inflate costs. These government failure risks mean taxation-funded provision is efficient in principle but may be inefficient in practice.'
        },
        {
          id:    'crowding-out',
          icon:  '🏢',
          label: 'Crowding out of private sector alternatives',
          why:   'State provision financed by taxation may crowd out private or community-based alternatives that existed before. If local communities fund modest flood barriers voluntarily but are then told the state will provide, voluntary contribution collapses. A mixed model (state co-funding with community contribution) may maintain both incentives and civic engagement.'
        },
        {
          id:    'technology',
          icon:  '💻',
          label: 'Technology enabling partial excludability',
          why:   'New technology can convert non-excludable goods into quasi-public goods. GPS-enabled road pricing makes roads excludable. Smart metering makes park access recordable. Where technology enables excludability, market provision becomes more feasible – reducing the case for full state taxation funding. The public goods boundary is partly a technological question.'
        },
        {
          id:    'international',
          icon:  '🌍',
          label: 'Cross-border public goods requiring international coordination',
          why:   'Some public goods have spillover effects across national boundaries (clean air, global climate, international security). No single national government can compel contribution from foreign free riders. International public goods require treaty-based coordination (Paris Agreement, NATO) – pure state provision at national level solves the domestic free rider problem but not the international one.'
        },
        {
          id:    'merit',
          icon:  '🎓',
          label: 'Distinction between public goods and merit goods',
          why:   'Pure public goods (flood defences) require taxation because of non-excludability. Merit goods (healthcare, education) may be provided publicly for different reasons (equity, positive externalities) but are technically excludable. Conflating the two leads to incorrect policy analysis – the public goods case for state provision is stronger and more absolute than the merit goods case.'
        }
      ],
      modelRanking: ['degree-non-excludable', 'cost-benefit', 'government-failure'],
      judgement: '"State taxation provision is effective when the good is truly non-excludable (no revenue stream possible for private firms) and when the government can accurately estimate Q* through cost-benefit analysis. The case weakens when the good is quasi-public (partial excludability), when government failure in provision is likely (CBA inaccuracy, political distortion), or when community-level provision is feasible for local public goods. The public goods case for state provision is strongest for national goods like coastal flood defence where no private mechanism can compel contribution."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Public Goods: free rider collapses D_private far below D_social
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   S (cost of provision):   (130,390)→(490,30)   y = 520 - x
   D_social (true WTP):     (110,50)→(514,381)    slope ≈ 0.825   y = -40.75 + 0.825x  → E_social ≈ (307,213)
   D_private (free riding): (110,300)→(340,381)   slope ≈ 0.352   y = 261.3 + 0.352x   → E_private ≈ (191,329)  */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Public Goods',
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
    title:       'Why does the private market fail to provide coastal flood defences? Which diagram correctly shows the effect of the free rider problem on market demand?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the free rider problem. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      'd-left',
        correct:  true,
        title:   'Demand shifts left',
        sub:     'Effective market demand falls far below true social demand – free riding means individuals do not reveal their true WTP, collapsing private market demand',
        why:     'Because non-payers cannot be excluded from flood protection, each household free rides – waiting for others to pay. No one reveals their true WTP → effective market demand (D_private) collapses to near zero, far below D_social (true aggregate WTP). The demand shift leftward represents the gap created by the free rider problem: what the market reveals versus what society truly values.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Flood defence provision becomes more costly, reducing supply',
        why:     'Supply shifting left would represent rising costs of flood defence construction – not the public goods mechanism. The reason private firms do not provide flood defences is not that supply is costly, but that they cannot generate revenue from non-excludable non-payers. The failure is on the demand (revenue) side, not the supply (cost) side.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Households demand more flood protection as flood risk increases',
        why:     'Demand shifting right would represent rising WTP for flood protection – perhaps as sea levels rise. But the public goods problem is that true WTP (D_social) already exceeds zero, yet effective market demand (D_private) collapses due to free riding. The issue is that true demand is not revealed, not that it is absent or rising.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'New technology reduces the cost of building flood defences',
        why:     'Supply shifting right would mean flood defences become cheaper to build – a technological improvement. This does not address the public goods market failure: even if defences were free to build, private firms still could not generate revenue from non-excludable beneficiaries. The demand collapse from free riding remains the core problem.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🌊',
    text:  'Environment Agency: £5.2bn flood investment programme (2021–27). £8 return per £1 invested. Private market provides: £0.',
    dataPoints: [
      { icon: '🤝', text: 'Non-excludable: cannot charge individual households for coastal protection' },
      { icon: '🔄', text: 'Non-rival: protection of one household does not reduce others\' protection' },
      { icon: '🎭', text: 'Free rider: each household waits for others → D_private ≈ 0' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – free rider problem collapsing private market demand for coastal flood defences',
    xLabel:    'Quantity of flood protection',
    yLabel:    'Price / Cost (£)',

    lines: [
      /* S – cost of providing flood defences – blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S (cost)', labelX: 494, labelY: 28, labelFill: '#2563eb' },
      /* D_social – true WTP if free riding prevented – amber downward-sloping */
      { x1: 110, y1: 50,  x2: 514, y2: 381, stroke: '#d97706', strokeWidth: 2.5,
        label: 'D_social', labelX: 455, labelY: 372, labelFill: '#d97706' },
      /* D_private – collapsed demand due to free riding – red downward-sloping, near x-axis */
      { x1: 110, y1: 300, x2: 340, y2: 381, stroke: '#dc2626', strokeWidth: 2.5,
        label: 'D_private (free riding)', labelX: 344, labelY: 381, labelFill: '#dc2626' }
    ],

    /* Guide lines + tick labels */
    guides: [
      { x1: 100, y1: 213, x2: 307, y2: 213, tickLeft: 'Q*',        tickLeftY: 216 },
      { x1: 307, y1: 213, x2: 307, y2: 400, tickBottom: 'Q*',        tickBottomX: 307 },
      { x1: 191, y1: 329, x2: 191, y2: 400, tickBottom: 'Q_private', tickBottomX: 191 },
      { x1: 100, y1: 329, x2: 191, y2: 329, tickLeft: 'P_private',  tickLeftY: 332 }
    ],

    /* Shift arrow: D_social → D_private, pointing left – showing free rider collapse */
    shiftArrow: { x1: 400, y1: 200, x2: 340, y2: 200, stroke: '#dc2626' },

    eqDots: [
      {
        cx: 307, cy: 213, fill: '#d97706',
        initLabel: 'Social optimum', initLabel2: '(Q*, if tax-funded)', initLabelX: 314, initLabelY: 208
      },
      {
        cx: 191, cy: 329, fill: '#dc2626',
        newLabel: 'Market failure', newLabel2: '(Q_private ≈ 0)', newLabelX: 198, newLabelY: 324
      }
    ],

    legend: [
      { color: '#d97706', text: 'D_social = True social WTP (if free riding were prevented by taxation)' },
      { color: '#dc2626', text: 'D_private = Effective market demand (collapsed by free rider problem)' },
      { color: '#2563eb', text: 'S = Cost of flood defence provision' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of the free rider problem on coastal flood defence provision.',
    instruction: 'Place the correct labels on the diagram to identify the free rider collapse, the two equilibria and the welfare gap.',
    hint:        'Skill focus: connect the visual demand collapse to the economic outcomes.',

    zones: [
      { id: 'free-rider', label: 'Free rider collapse',           pctX: 55,  pctY: 33,   pctW: 26 },
      { id: 'soc-opt',    label: 'Social optimum',                pctX: 56,  pctY: 42,   pctW: 20 },
      { id: 'mkt-fail',   label: 'Market failure equilibrium',    pctX: 32,  pctY: 65,   pctW: 22 },
      { id: 'und-qty',    label: 'Near-zero private quantity',    pctX: 30,  pctY: 93.5, pctW: 18 },
      { id: 'soc-qty',    label: 'Socially optimal quantity (Q*)', pctX: 52,  pctY: 93.5, pctW: 15 }
    ],

    chips: [
      { id: 'free-rider-chip', text: 'D_social → D_private (free rider collapse)', icon: '←', zone: 'free-rider', correct: true  },
      { id: 'soc-opt-chip',    text: 'Social optimum Q* (tax-funded)',                  icon: '●', zone: 'soc-opt',    correct: true  },
      { id: 'mkt-fail-chip',   text: 'Market failure equilibrium (Q ≈ 0)',         icon: '●', zone: 'mkt-fail',   correct: true  },
      { id: 'und-qty-chip',    text: 'Near-zero private quantity',                      icon: '↓', zone: 'und-qty',    correct: true  },
      { id: 'soc-qty-chip',    text: 'Socially optimal quantity (Q*)',                  icon: '↑', zone: 'soc-qty',    correct: true  },
      { id: 'dem-right',       text: 'D_private shifts right (more demand)',            icon: '→', zone: null,         correct: false },
      { id: 'sup-left',        text: 'Supply shifts left',                              icon: '←', zone: null,         correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['public good', 'non-rival', 'non-excludable', 'free rider', 'market failure', 'under-provision', 'general taxation', 'revealed preference', 'social demand', 'private demand', 'Q*', 'D_social', 'D_private'],

    parts: [
      {
        num:         1,
        title:       'Explain why D_private falls below D_social',
        prompt:      'Why does D_private fall below D_social?',
        maxChars:    240,
        modelAnswer: 'Non-excludability means households cannot be prevented from benefiting from flood defences once provided. Each household\'s rational strategy is to wait for others to pay (free riding). No one reveals true WTP → effective market demand (D_private) collapses to near zero. D_social represents true aggregate WTP if taxation forced everyone to pay their share.'
      },
      {
        num:         2,
        title:       'Explain the welfare gap between Q* and Q_private',
        prompt:      'What is the welfare gap between Q* and Q_private?',
        maxChars:    240,
        modelAnswer: 'At Q_private ≈ 0, the welfare loss is enormous: all the flood damage that could have been avoided (£8 per £1 invested) is left unrealised. Society bears the cost of flooding (£3.5bn in 2007) that defences could have prevented at far lower cost. The gap between D_social and D_private at every quantity represents the welfare that free riding destroys.'
      },
      {
        num:         3,
        title:       'Explain how state provision solves the free rider problem',
        prompt:      'How does state provision via taxation solve the free rider problem?',
        maxChars:    240,
        modelAnswer: 'General taxation is compulsory – it solves the free rider problem by removing the option not to contribute. The government uses tax revenue to provide Q* of flood defences, converting D_social into effective collective demand. No private firm can do this because they have no mechanism to compel payment from non-payers – only the state\'s taxing power can overcome the free rider problem at national scale.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Apply non-rivalry and non-excludability',
      'Explain free rider problem and demand collapse',
      'State market failure outcome (Q ≈ 0)',
      'Explain how taxation solves free rider problem to achieve Q*'
    ],

    examAnswer: '"Coastal flood defences are non-rival and non-excludable – the free rider problem collapses effective market demand from D_social (true WTP = Q*) to D_private (≈0): no household reveals WTP because they cannot be excluded from protection once provided. Private firms cannot profitably supply the good – there is no revenue stream. The Environment Agency\'s £5.2bn programme demonstrates that compulsory general taxation is the only mechanism that can solve the free rider problem, achieving Q* and realising the £8/£1 welfare return."'
  }
};

/* ---- link-extract.js ---- */
/* ============================================================
   ECONOS – Link It · Read the Extract station data
   Public Goods: non-rivalry, non-excludability, free rider problem
   ============================================================ */

window.ECONOS_LINK_EXTRACT = {
  topic:   'Public Goods',
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
  instruction: 'Read the passage carefully. Apply the definitions of non-rivalry and non-excludability precisely – many goods appear "public" but fail one of the two tests.',

  passage: {
    title: 'Extract: UK public goods – lighthouses, defence and broadcast media',
    source: 'Adapted from: Trinity House Annual Report (2022); MOD Defence Statistics; DCMS Broadcasting Survey',
    text: 'Trinity House, the UK\'s General Lighthouse Authority, operates 66 lighthouses around England, Wales and the Channel Islands. Before state funding, private lighthouse provision was chronically under-supplied: shipowners could not be prevented from benefiting from a lighthouse\'s signal whether or not they had contributed to its upkeep, and one ship using the signal in no way reduced its availability to other ships. Economists classify this as a pure public good.<br><br>UK defence spending of £48.6bn (2022–23) provides national security: once the country is defended, every resident benefits regardless of their tax contribution, and one person\'s security does not reduce another\'s. BBC Radio 4, funded through the licence fee, can be received by any radio owner – the broadcaster cannot prevent non-payers from tuning in. However, unlike defence, BBC radio is now available via DAB and online streaming. Digital transmission could, in principle, be encrypted and made available only to paid subscribers – making excludability technically possible in a way it was not for analogue broadcasts.<br><br>Roads present a more complex case. A rural B-road at 2am is non-rival (no congestion) and, without toll booths, non-excludable – resembling a public good. The M25 at peak hours is rival (severely congested) but non-excludable. Economists classify congested roads as a "common resource" – non-excludable but rival.'
  },

  questions: [
    {
      id: 'pg-extract-q1',
      question: 'Which two characteristics of the lighthouse, described in the extract, make it a pure public good?',
      options: [
        'It is provided by the government and funded through taxation – making it available to everyone equally',
        'It is non-excludable (shipowners cannot be prevented from using the signal whether or not they paid) and non-rival (one ship using it does not reduce its availability to others)',
        'It is underprovided by the free market because shipping companies find it unprofitable, and it generates positive externalities for coastal communities',
        'Its benefits are non-excludable because the government has made it illegal to charge for lighthouse services'
      ],
      correct: 1,
      explanation: 'The two defining characteristics of a pure public good are non-excludability and non-rivalry. The extract states both explicitly: "shipowners could not be prevented from benefiting" (non-excludable) and "one ship using the signal in no way reduced its availability to other ships" (non-rival). These two properties together cause the free rider problem – rational individuals don\'t pay because they receive the benefit regardless. This is why the private market chronically under-supplied lighthouses before state funding.'
    },
    {
      id: 'pg-extract-q2',
      question: 'The extract notes that BBC Radio 4 "could, in principle, be encrypted and made available only to paid subscribers." What does this imply about its classification as a public good?',
      options: [
        'BBC Radio is a pure public good because it is funded by the state and available to all licence fee payers',
        'The encryption possibility means BBC Radio could be made excludable, making it closer to a quasi-public good or club good – its public good status depends on the technology and policy choice, not its inherent characteristics',
        'BBC Radio is a merit good, not a public good, because the government believes people would under-consume it if left to the market',
        'BBC Radio is a private good because it is non-rival – one person listening does not prevent another from doing so'
      ],
      correct: 1,
      explanation: 'This is a subtle but important distinction. A pure public good is inherently non-excludable – you cannot technically prevent non-payers from consuming it. BBC Radio\'s analogue broadcast was genuinely non-excludable (any radio could receive it). But digital encryption makes excludability technically possible. This means BBC Radio\'s classification as a public good is not inherent – it\'s a policy choice. If encrypted, it becomes a club good (excludable but non-rival). The fact that it\'s currently non-excludable is a regulatory and infrastructure choice, not an inherent property.'
    },
    {
      id: 'pg-extract-q3',
      question: 'The extract describes roads as having different characteristics at different times. A congested motorway (rival but non-excludable) is classified as a "common resource." Why does this classification matter for policy?',
      options: [
        'Common resources should be fully privatised, as the profit motive will ensure they are maintained efficiently',
        'Common resources generate positive externalities – congested roads benefit local businesses whose customers use them',
        'Because a common resource is rival, over-use imposes costs on other users (congestion slows everyone down), but non-excludability means no price mechanism rations it – creating the "tragedy of the commons" and justifying congestion charges as a corrective policy',
        'Roads should be reclassified as merit goods because the government has decided that car ownership is socially beneficial'
      ],
      correct: 2,
      explanation: 'Common resources are non-excludable (no one can be prevented from using them) but rival (one person\'s use imposes costs on others). On the M25 at peak hours, each additional car slows all other cars – imposing a negative externality on other road users. But without exclusion, no price signal rations access. The result is the "tragedy of the commons": over-use relative to the socially optimal level. Congestion charges (like the London ULEZ or planned road pricing) are the standard economic solution: make the resource effectively excludable by price so that users face the true social cost of their journey.'
    }
  ]
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for public_goods
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Public Goods',
  estTime: '15–20 minutes',
  goal:    'Bridge your public goods knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "Use UK coastal flood defence provision to apply the public goods framework – non-rivalry, non-excludability and the free rider problem – and evaluate why state provision financed by taxation is typically the only effective solution.",
    heroKey: 'heroPublicGoods',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Apply non-rivalry and non-excludability to a real public good',
      'Explain the free rider problem and its effect on market demand',
      'Apply the public goods framework to real-world cases including lighthouses and defence',
      'Evaluate whether state provision or market-based alternatives can solve the under-provision problem'
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
   Public Goods: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Public Goods',
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
      id: 'public-goods-judgement',
      claim: {
        icon:   '🌊',
        prompt: 'Policy claim',
        text:   'State provision financed by general taxation is the only effective solution to the under-provision of pure public goods.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '£5.2bn EA programme, entirely government-funded. £8 return per £1 invested. 2007 Cumbria floods: £3.5bn damage. Private market provision: £0.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Non-excludable → free rider → D_private collapses to ≈0 → no private revenue stream → market provision = 0 → government taxation solves free rider problem → Q*.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'Free rider collapse: D_social → D_private ≈ 0. Social optimum at Q* only achievable via compulsory general taxation.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on degree of non-excludability, accuracy of cost-benefit analysis (Q* estimation), and risk of government failure.' }
      ],
      cloze: 'Pure public goods are [1] and [2] – so private firms cannot exclude non-payers and therefore cannot generate revenue to cover provision costs. The [3] problem means each household waits for others to fund the good → effective market demand (D_private) collapses to near zero, far below D_social (true WTP). Government solves this by [4] to fund provision – making payment compulsory so free riding is eliminated. However, state provision achieves Q* only if [5] accurately estimates the social value of the good. The policy is least effective when the public good is [6] – because technology enabling exclusion opens the door to market-based provision and user charges. State provision may also lead to [7] if political pressures cause over- or under-provision. Therefore, taxation-funded state provision is the [8] solution for pure public goods, but should be complemented by robust cost-benefit analysis and governance to minimise government failure.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-nr',      text: 'non-rival',    correct: true  },
            { id: 'b1-rival',   text: 'rival',        correct: false },
            { id: 'b1-exc',     text: 'excludable',   correct: false },
            { id: 'b1-dem',     text: 'demerit',      correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-ne',      text: 'non-excludable',  correct: true  },
            { id: 'b2-inel',    text: 'inelastic',       correct: false },
            { id: 'b2-comp',    text: 'complementary',   correct: false },
            { id: 'b2-inf',     text: 'inferior',        correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-fr',      text: 'free rider',       correct: true  },
            { id: 'b3-adv',     text: 'adverse selection', correct: false },
            { id: 'b3-mh',      text: 'moral hazard',     correct: false },
            { id: 'b3-pm',      text: 'price mechanism',  correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-tax',     text: 'levying compulsory general taxation',    correct: true  },
            { id: 'b4-bonds',   text: 'issuing voluntary bonds',                correct: false },
            { id: 'b4-pig',     text: 'applying Pigouvian taxes',               correct: false },
            { id: 'b4-sub',     text: 'subsidising private producers',          correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-cba',     text: 'cost-benefit analysis (CBA)',            correct: true  },
            { id: 'b5-price',   text: 'price signals from the market',          correct: false },
            { id: 'b5-survey',  text: 'consumer surveys',                       correct: false },
            { id: 'b5-elas',    text: 'income elasticity',                      correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-quasi',   text: 'quasi-public (partially excludable)',   correct: true  },
            { id: 'b6-inf',     text: 'inferior',                              correct: false },
            { id: 'b6-comp',    text: 'complementary',                         correct: false },
            { id: 'b6-intl',    text: 'international',                         correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-gf',      text: 'government failure',        correct: true  },
            { id: 'b7-mf',      text: 'market failure',            correct: false },
            { id: 'b7-ext',     text: 'positive externalities',    correct: false },
            { id: 'b7-dwl',     text: 'deadweight welfare loss',   correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-only',    text: 'only available',      correct: true  },
            { id: 'b8-least',   text: 'least desirable',     correct: false },
            { id: 'b8-cost',    text: 'most expensive',      correct: false },
            { id: 'b8-regr',    text: 'most regressive',     correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-market',  text: 'Markets can always provide public goods if prices are set correctly',                                                                    correct: false },
          { id: 'op-mix',     text: 'State taxation provision is necessary for pure public goods but may be supplemented by community or market mechanisms for quasi-public goods', correct: true  },
          { id: 'op-charity', text: 'Public goods are best provided by charitable organisations and do not require taxation',                                                 correct: false },
          { id: 'op-all',     text: 'All goods should be provided by the state to eliminate market failure',                                                                  correct: false }
        ]
      },
      examBridge: '"Coastal flood defences are non-rival and non-excludable – the free rider problem collapses effective market demand to near zero (D_private << D_social). No private firm can profitably provide protection it cannot withhold from non-payers. The Environment Agency\'s £5.2bn programme demonstrates that compulsory general taxation is the only mechanism that solves the free rider problem at scale – achieving Q* and realising the £8/£1 welfare return that markets cannot capture. The strongest evaluation acknowledges that government failure (CBA inaccuracy, political distortion) is the principal limitation of state provision, not the theoretical framework."'
    }
  ]
};

