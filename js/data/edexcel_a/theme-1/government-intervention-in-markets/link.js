/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   Government Intervention in Markets: build the binding rent cap → shortage → non-price rationing chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Government Intervention in Markets',
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
      id: 'rent-ceiling-mechanism',
      scenario: {
        icon:  '🏠',
        label: 'Scenario',
        text:  'A city government imposes a legally binding rent cap at 2022 levels – roughly 20% below the current market-clearing rent – on all private rental flats.'
      },
      anchor: 'P_max is set below P_e – the ceiling binds.',
      tiles: [
        {
          id:   'step-shortage',
          icon: '📉',
          text: 'At P_max, Q_s < Q_d – the gap Q_d − Q_s is the shortage',
          pos:  0
        },
        {
          id:   'step-rationing',
          icon: '🎟️',
          text: 'Price cannot clear → non-price rationing: queues, networks, key-money',
          pos:  1
        },
        {
          id:   'step-welfare',
          icon: '⚖️',
          text: 'Sitting tenants gain; lost trades Q_s–Q_e → DWL; quality decline',
          pos:  2
        },
        {
          id:   'dist-1',
          icon: '📈',
          text: 'Landlords raise rents in response to the cap to recover lost revenue',
          pos:  null
        },
        {
          id:   'dist-2',
          icon: '🏗️',
          text: 'Rental supply expands immediately as developers respond to the cap',
          pos:  null
        },
        {
          id:   'dist-3',
          icon: '💰',
          text: 'A binding ceiling above the equilibrium price has no effect on the market',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'A maximum price is only binding when it sits below the free-market equilibrium. At P_max < P_e, landlords are unwilling to supply as many flats as before (Q_s falls) because the legal rent no longer covers the marginal cost of providing each flat, while tenants demand more flats (Q_d rises) at the lower price. The horizontal gap between Q_d and Q_s at P_max is the shortage – the excess demand the price mechanism is no longer allowed to clear.'
        },
        {
          pos:  1,
          text: 'When price cannot ration the limited supply, something else must. In housing markets this typically takes the form of waiting lists, queues, allocation through personal or professional networks, "key-money" side payments, or outright black-market sub-letting above the cap. LSE evidence cited in the extract shows capped flats increasingly reach better-connected or higher-income tenants – so the policy does not reliably reach the lowest-income renters it is designed to protect.'
        },
        {
          pos:  2,
          text: 'Sitting tenants who hold a tenancy gain a transfer: they pay a lower contractual rent, so producer surplus shifts to consumer surplus on the Q_s units still traded. But the trades between Q_s and Q_e that would have happened at P_e no longer occur – that lost surplus is the deadweight welfare loss triangle. Landlords also restore margins by cutting non-essential maintenance (San Francisco evidence: −8% per flat), so the headline rent is lower but the real product is worse.'
        }
      ],
      examBridge: '"A binding rent cap (P_max < P_e) reduces quantity supplied to Q_s while raising quantity demanded to Q_d, opening up a shortage of Q_d − Q_s. Because the price mechanism can no longer clear the market, flats are rationed by queueing, networks and key money – often missing the lowest-income tenants. Sitting tenants gain a transfer from landlords, but trades between Q_s and Q_e are lost as deadweight welfare loss, and landlords restore margins by cutting maintenance and quality."',

      prompts: [
        'Why is a maximum price only effective when set below the equilibrium price?',
        'What is non-price rationing and why does it appear under a binding ceiling?',
        'Who gains and who loses from a binding rent cap, and where does the deadweight loss come from?'
      ],
      modelAnswers: [
        'A maximum price is a legal ceiling – landlords may charge no more than P_max. If P_max sits above the free-market P_e, the market would already clear at a price below the cap, so the cap never binds and has no effect. Only when P_max < P_e does it force the market away from equilibrium: at the lower legal price, landlords reduce the quantity supplied (Q_s) and tenants demand more flats (Q_d), creating the shortage.',
        'Non-price rationing is the allocation of a limited supply through mechanisms other than price – waiting lists, lotteries, queueing, personal connections, side payments or quality reduction. It appears under a binding ceiling because the price mechanism is suppressed: with Q_d > Q_s at P_max, some buyers must be turned away, and something other than the price must decide who gets the flats. The result is often inefficient (good flats reach well-connected rather than highest-need tenants) and erodes the welfare gain the cap was meant to deliver.',
        'Sitting tenants who already hold a tenancy gain – they pay a lower contractual rent than they otherwise would, transferring surplus from landlords to tenants on the Q_s units still traded. Landlords lose surplus and may exit the market (Berlin: −50% new listings within a year). The deadweight loss is the welfare from trades between Q_s and Q_e that would have occurred at P_e but are prevented by the cap – flats that would have been profitably let to tenants willing to pay more than the marginal cost are simply not let at all.'
      ],
      vocab: ['maximum price', 'price ceiling', 'binding', 'shortage', 'non-price rationing', 'key money', 'black market', 'deadweight loss', 'quality decline', 'PES']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Government Intervention in Markets – rent control scenario
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Government Intervention in Markets',
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
      { min: 55, text: 'Good – check Q_s, Q_d and the shortage' },
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

  useInLandIt: 'A binding rent cap (P_max < P_e) is a maximum price that reduces quantity supplied to Q_s, raises quantity demanded to Q_d and opens up a shortage of Q_d − Q_s. The market trades on the short side, so flats are rationed by queues, networks and key money – often missing the lowest-income tenants. Sitting tenants gain a transfer from landlords, but trades between Q_s and Q_e are lost as DWL and landlords cut maintenance to restore margins. For exam essays, always state the long-run PES assumption first, use the diagram to show the shortage, and evaluate whether better-targeted alternatives (housing benefit, social housing) would protect low-income tenants more reliably.',

  focusInLandIt: {
    context: 'Use specific figures from the extract – the 40% unaffordability rate, the 180,000 sitting tenants, the ~50% Berlin listings fall and the ~8% San Francisco maintenance fall – to anchor your application to the real-world case rather than generic price-ceiling theory.',
    chain:   'State the chain explicitly: P_max < P_e (binding) → Q_s falls and Q_d rises → shortage = Q_d − Q_s → non-price rationing by queues, networks and key money → sitting tenants gain a transfer, but DWL on lost trades plus quality decline as landlords cut maintenance.',
    diagram: 'Draw the standard S and D curves, mark the free-market equilibrium (P_e, Q_e), draw a horizontal P_max line below P_e, and label Q_s on the supply curve and Q_d on the demand curve at P_max. The horizontal gap between them is the shortage; the market trades on the short side (Q_s).',
    depends: 'Lead with the long-run PES of housing as your primary condition – when supply is more elastic in the long run, the shortage grows and the policy harms new tenants more than it helps sitting ones. The non-price rationing mechanism and the existence of better-targeted alternatives are the next most important factors.',
    judge:   'State a clear conditional position: the cap protects sitting tenants in the short run but creates a long-run shortage that harms new entrants, and better-targeted alternatives (housing benefit, social housing) usually dominate. Always acknowledge the quality decline and the targeting failure as key trade-offs.'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   Government Intervention in Markets: classify evidence on a rent control proposal
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Government Intervention in Markets',
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
    question:    'Which details in this extract most change whether a binding rent cap is the right way to protect tenants in a tight urban housing market?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'Average market rents in the city have risen 32% over the last three years, and [[affordability|~40% of private renters spend over half their post-tax income on housing]] – a level widely classed as severely unaffordable.',
      'Campaigners argue that an immediate cap holding rents at 2022 levels would [[short-run-gain|protect ~180,000 sitting tenants, locking in lower payments]] and preventing further displacement.',
      'However, landlord associations warn that [[supply-response|LR PES is high – Berlin\'s 2020 cap cut listings ~50% in a year]], as landlords sell to owner-occupiers or convert flats to short-term lets.',
      'City planning data show that [[quality-decline|SF maintenance per flat fell ~8% in the decade after rent stabilisation]], with landlords cutting non-essential repairs to offset capped revenue.',
      'A recent LSE study finds that [[targeting|capped flats are increasingly allocated via networks and key-money payments]] – disproportionately reaching higher-income or better-connected tenants rather than those in greatest need.'
    ],

    evidence: {
      'affordability':  { text: '~40% of private renters spend over half their post-tax income on housing' },
      'short-run-gain': { text: 'protect ~180,000 sitting tenants, locking in lower payments' },
      'supply-response':{ text: 'LR PES is high – Berlin\'s 2020 cap cut listings ~50% in a year' },
      'quality-decline':{ text: 'SF maintenance per flat fell ~8% in the decade after rent stabilisation' },
      'targeting':      { text: 'capped flats are increasingly allocated via networks and key-money payments' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports imposing the rent cap',    tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against the rent cap',       tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',   tone: 'blue',  icon: '?' }
    ],

    correct: {
      'affordability':   'supports',
      'short-run-gain':  'supports',
      'supply-response': 'against',
      'quality-decline': 'against',
      'targeting':       'complicates'
    },

    explain: {
      'affordability':   'A measured affordability crisis – 40% of renters spending over half their income on housing – confirms a genuine welfare problem the policy is trying to address. This supports intervention, because the status quo is producing severe consumer hardship that the market alone is not correcting through new supply quickly enough.',
      'short-run-gain':  'In the short run, sitting tenants benefit directly from a binding cap: lower contractual rents, less displacement, and a transfer of surplus from landlords to renters. This is a real and quantifiable welfare gain for 180,000 households and is the strongest case for the policy on equity grounds.',
      'supply-response': 'Evidence that listings fall by around 50% within a year of a binding cap – as in Berlin – is a direct measurement of the shortage the standard model predicts. It shows the long-run supply response is large: landlords exit the market, reducing the total stock of rented accommodation and leaving new entrants worse off. This is the central economic argument against the cap.',
      'quality-decline': 'An 8% fall in maintenance spending per flat after rent stabilisation is non-price rationing at work: when sellers cannot raise the price, they cut quality to restore margins. The headline rent is lower but the real product is also worse – undermining the welfare gain the cap is supposed to deliver.',
      'targeting':       'If capped flats end up reaching well-connected or higher-income tenants rather than the poorest households, the cap fails on its own distributional terms. This complicates the case either way: the policy still helps some lower-income tenants who hold tenancies, but means-tested housing benefit or direct provision could plausibly reach the target group more reliably.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"Quantified evidence of severe unaffordability (40% of renters spending over half their income on housing) and short-run protection for 180,000 sitting tenants supports a binding rent cap, but a 50% fall in new listings after Berlin\'s cap and an 8% drop in maintenance spending after San Francisco-style stabilisation directly evidence the shortage and quality-decline the standard model predicts – and non-price rationing via networks and key money means the cap does not reliably reach the lowest-income tenants."',

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
   Government Intervention in Markets: evaluate a binding rent cap
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Government Intervention in Markets',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether a binding rent cap actually improves welfare for tenants.',
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
      id: 'rent-cap-effectiveness',
      claim: {
        icon:   '🏠',
        prompt: 'Policy claim',
        text:   'A binding rent cap best protects low-income tenants in tight cities.'
      },
      factors: [
        {
          id:    'price-elasticity-of-supply',
          icon:  '🏗️',
          label: 'Long-run price elasticity of supply (PES) of housing',
          why:   'In the short run, the rental stock is largely fixed (PES is low) and a cap mainly transfers surplus from landlords to sitting tenants. In the long run, supply is much more elastic – landlords sell flats to owner-occupiers, convert to short-term lets, or stop building new rentals altogether. Berlin\'s 2020 cap saw new listings fall by around 50% within a year. The higher long-run PES is, the larger the eventual shortage and the more new tenants are locked out.'
        },
        {
          id:    'time-horizon',
          icon:  '⏳',
          label: 'Time horizon used to judge the policy',
          why:   'Almost every empirical study of rent control finds short-run gains for sitting tenants and long-run losses for the wider rental market – including new entrants, mobile workers and households trying to move within the city. If the policy is judged over one or two years it can look like a clear success; judged over a decade it tends to shrink the rental stock and lower quality. Which horizon you privilege largely determines your verdict.'
        },
        {
          id:    'rationing',
          icon:  '🎟️',
          label: 'How the shortage is rationed in practice',
          why:   'With a binding cap, Q_d > Q_s and something other than price must allocate the limited supply. If allocation is by waiting list or key money, capped flats can drift to better-connected or higher-income tenants – the LSE evidence in the extract. The policy then fails on its own distributional terms: it protects existing tenants but does not reliably reach the lowest-income renters it was designed for. Means-tested housing benefit or direct provision can plausibly target need more accurately.'
        },
        {
          id:    'quality',
          icon:  '🔧',
          label: 'Landlord response on quality and maintenance',
          why:   'When sellers cannot raise the headline price, they restore margins by cutting quality. San Francisco evidence cited in the extract shows roughly an 8% fall in maintenance spending per flat after rent stabilisation was tightened. The contractual rent is lower, but the real product is also worse – undermining the welfare gain the cap is supposed to deliver and pushing some tenants into substandard housing.'
        },
        {
          id:    'alternatives',
          icon:  '💷',
          label: 'Availability of better-targeted alternatives',
          why:   'A rent cap is only "most effective" if it dominates the realistic alternatives. Housing benefit or universal credit can transfer income to low-income tenants without suppressing supply; building more social housing tackles the underlying shortage directly; land-use reform raises long-run supply elasticity by allowing more building. If any of these reach low-income tenants more reliably and with less DWL, the cap loses its claim to being the most effective tool.'
        },
        {
          id:    'enforcement',
          icon:  '👮',
          label: 'Enforcement against black markets and side payments',
          why:   'A cap only protects tenants if the legal price is the price actually paid. In practice, severe shortages create black-market premia, illegal sub-letting and key-money payments that erode the cap\'s benefit – and weak enforcement makes things worse, as landlords charge above the cap to those willing or able to pay. The effectiveness of the policy therefore depends heavily on the regulator\'s capacity to monitor and enforce.'
        },
        {
          id:    'coverage',
          icon:  '🗺️',
          label: 'Coverage of the cap (which flats, which areas)',
          why:   'A cap that exempts new-build flats (as Berlin\'s did initially) protects existing tenants without choking off new construction; a blanket cap dampens building. Similarly, a city-wide cap can push landlord activity to neighbouring uncapped areas, raising rents there. The narrower and better-targeted the coverage, the lower the supply distortion – but also the smaller the scope of tenant protection.'
        },
        {
          id:    'demand-driver',
          icon:  '📈',
          label: 'What is actually driving the rent rise',
          why:   'If rents are rising because demand is genuinely outpacing a fixed supply (population growth, new jobs, tight planning), the underlying problem is a shortage of housing – a cap mainly disguises this and may worsen it. If rents are rising because a small number of landlords have local market power, a cap can offset the monopoly distortion and raise welfare. Diagnosing the cause of the price rise is therefore essential before judging whether a cap is the right tool.'
        }
      ],
      modelRanking: ['price-elasticity-of-supply', 'rationing', 'alternatives'],
      judgement: '"Whether a binding rent cap is the \'most effective\' way to protect low-income tenants depends primarily on the long-run price elasticity of supply of housing – where PES is high (as the Berlin evidence suggests), the cap shrinks the rental stock and pushes the shortage onto new entrants. Effectiveness then depends on how the resulting shortage is rationed: if non-price rationing channels capped flats to well-connected rather than low-income tenants, the policy fails on its own distributional terms. And the cap only dominates the alternatives if better-targeted instruments – housing benefit, social housing, planning reform – would do worse than the supply distortion the cap creates."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Government Intervention in Markets: binding maximum price (rent cap) creates a shortage
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   D (demand):  (110,60)→(510,360)  slope = 0.75   ⟹  y = 60 + (x-110)*0.75
   S (supply):  (130,390)→(490,30)  slope = -1.0   ⟹  y = 520 - x
   E (S ∩ D): 520-x = 60+(x-110)*0.75 → 520-x = -22.5+0.75x → 542.5 = 1.75x → x ≈ 310, y ≈ 210
   P_max horizontal line at y=280 (below P_e in price terms, i.e. higher y in SVG)
   Q_s (on S at y=280): 520-x = 280 → x = 240
   Q_d (on D at y=280): 280 = 60 + (x-110)*0.75 → (x-110) = 293.33 → x ≈ 403
   Shortage = Q_d − Q_s ≈ 163 px wide                                              */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Government Intervention in Markets',
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
    title:       'The city government caps rents at 20% below the market-clearing level. Which diagram correctly shows the effect on the rental housing market?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the binding rent cap. Think about where the legal price sits relative to equilibrium, and what that does to quantities supplied and demanded.',
    hint:        'Skill focus: identify whether the intervention is binding, and which side of the market is the short side at the controlled price.',

    options: [
      {
        id:      'max-below-eq',
        correct:  true,
        title:   'Maximum price set below equilibrium',
        sub:     'A horizontal P_max line below P_e – Q_s falls, Q_d rises, a shortage opens up',
        why:     'A rent cap 20% below the market-clearing rent is the textbook binding price ceiling. At P_max < P_e, landlords reduce quantity supplied to Q_s, tenants increase quantity demanded to Q_d, and the horizontal gap Q_d − Q_s is the shortage. The market trades on the short side, so only Q_s flats are actually let. This is the diagram the scenario requires.'
      },
      {
        id:      'max-above-eq',
        correct:  false,
        title:   'Maximum price set above equilibrium',
        sub:     'A horizontal P_max line above P_e – no effect on the market',
        why:     'A maximum price above the free-market equilibrium is non-binding – the market would already clear at a price below the cap, so the cap never bites. With no shortage and no quantity change, this diagram cannot show the effect of a cap set 20% below the market rent.'
      },
      {
        id:      'min-below-eq',
        correct:  false,
        title:   'Minimum price set below equilibrium',
        sub:     'A horizontal P_min line below P_e – non-binding floor',
        why:     'A minimum price (price floor) below equilibrium is non-binding – sellers can already charge more than P_min in the free market, so the floor has no effect. Even if it were binding (set above P_e), a floor models the opposite policy: it would create excess supply, not a shortage. The wrong mechanism for a rent cap.'
      },
      {
        id:      'supply-shift-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'A leftward shift of the S curve – higher price, lower quantity',
        why:     'A leftward supply shift models a rise in landlords\' costs or a fall in the number of properties on the market – not a price control. With a rent cap the supply curve itself does not move; instead a horizontal legal price line is imposed below P_e, and quantity supplied slides down the unchanged supply curve. Wrong mechanism.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🏠',
    text:  'The city government caps private-sector rents at 2022 levels – roughly 20% below the current market-clearing rent.',
    dataPoints: [
      { icon: '🚫', text: 'P_max set ~20% below the equilibrium rent' },
      { icon: '📉', text: 'Quantity supplied falls; quantity demanded rises' },
      { icon: '⏳', text: 'Excess demand rationed by queues, networks and key money' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – binding maximum price on rental housing creates a shortage',
    xLabel:    'Quantity of rental flats',
    yLabel:    'Rent (£ per month)',

    lines: [
      /* D (demand) – green downward-sloping */
      { x1: 110, y1: 60,  x2: 510, y2: 360, stroke: '#059669', strokeWidth: 2.5,
        label: 'D', labelX: 514, labelY: 360, labelFill: '#059669' },
      /* S (supply) – blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S', labelX: 492, labelY: 28, labelFill: '#2563eb' },
      /* P_max horizontal cap line – amber, below P_e */
      { x1: 100, y1: 280, x2: 545, y2: 280, stroke: '#d97706', strokeWidth: 2.5,
        label: 'P_max', labelX: 548, labelY: 283, labelFill: '#d97706' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E (P_e) */
      { x1: 100, y1: 210, x2: 310, y2: 210, tickLeft: 'P_e', tickLeftY: 213 },
      /* Vertical from E down to x-axis */
      { x1: 310, y1: 210, x2: 310, y2: 400, tickBottom: 'Q_e', tickBottomX: 310 },
      /* Vertical from Q_s up to P_max */
      { x1: 240, y1: 280, x2: 240, y2: 400, tickBottom: 'Q_s', tickBottomX: 240 },
      /* Vertical from Q_d up to P_max */
      { x1: 403, y1: 280, x2: 403, y2: 400, tickBottom: 'Q_d', tickBottomX: 403 }
    ],

    /* Shortage arrow: horizontal arrow along P_max between Q_s and Q_d */
    shiftArrow: { x1: 240, y1: 280, x2: 403, y2: 280, stroke: '#dc2626' },

    eqDots: [
      {
        cx: 310, cy: 210, fill: '#2563eb',
        initLabel: 'Free-market', initLabel2: 'equilibrium', initLabelX: 317, initLabelY: 205
      },
      {
        cx: 240, cy: 280, fill: '#d97706',
        newLabel: 'Quantity', newLabel2: 'actually traded', newLabelX: 130, newLabelY: 275
      }
    ],

    legend: [
      { color: '#059669', text: 'D = Demand for rental flats' },
      { color: '#2563eb', text: 'S = Supply of rental flats' },
      { color: '#d97706', text: 'P_max = Legal rent ceiling (below P_e ⇒ binding)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of a binding rent cap.',
    instruction: 'Place the correct labels on the diagram to identify the equilibrium, the ceiling, the quantities supplied and demanded, and the shortage.',
    hint:        'Skill focus: connect the visual ceiling to the quantities it creates.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'pmax-line',  label: 'P_max ceiling',         pctX: 80,  pctY: 62,   pctW: 18 },
      { id: 'eq',         label: 'Free-market equilibrium', pctX: 56, pctY: 44,  pctW: 23 },
      { id: 'qs',         label: 'Q_s (quantity supplied)', pctX: 35, pctY: 95,  pctW: 18 },
      { id: 'qd',         label: 'Q_d (quantity demanded)', pctX: 64, pctY: 95,  pctW: 18 },
      { id: 'shortage',   label: 'Shortage',              pctX: 47,  pctY: 67,   pctW: 18 }
    ],

    chips: [
      { id: 'pmax-line',   text: 'Binding rent ceiling',         icon: '–', zone: 'pmax-line', correct: true  },
      { id: 'eq',          text: 'Free-market equilibrium (P_e, Q_e)', icon: '●', zone: 'eq', correct: true  },
      { id: 'qs',          text: 'Q_s – quantity supplied at P_max', icon: '↓', zone: 'qs',  correct: true  },
      { id: 'qd',          text: 'Q_d – quantity demanded at P_max', icon: '↑', zone: 'qd',  correct: true  },
      { id: 'shortage',    text: 'Shortage = Q_d − Q_s',         icon: '↔', zone: 'shortage', correct: true  },
      { id: 'surplus-bad', text: 'Excess supply (surplus)',      icon: '↑', zone: null,      correct: false },
      { id: 'qs-rises',    text: 'Quantity supplied rises',      icon: '↑', zone: null,      correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram into clear written analysis of who gains, who loses and how the shortage is rationed.',

    vocab: ['maximum price', 'price ceiling', 'binding', 'shortage', 'Q_s', 'Q_d', 'non-price rationing', 'deadweight loss', 'key money', 'PES'],

    parts: [
      {
        num:         1,
        title:       'Explain why the cap is binding',
        prompt:      'Explain why the rent cap creates a shortage rather than having no effect.',
        maxChars:    240,
        modelAnswer: 'The rent cap is set roughly 20% below the free-market equilibrium rent P_e, so it sits below the price at which the market would otherwise clear. Because landlords are legally barred from charging more than P_max, they reduce the quantity of flats they are willing to let to Q_s (read off the supply curve at P_max), while tenants increase quantity demanded to Q_d (read off the demand curve at P_max). The horizontal gap Q_d − Q_s is the shortage – excess demand that the price mechanism is no longer allowed to clear. If P_max sat above P_e the cap would be non-binding and have no effect at all.'
      },
      {
        num:         2,
        title:       'Explain how the shortage is rationed',
        prompt:      'Q_d > Q_s at P_max. Which side of the market is the short side, and how is the limited supply allocated?',
        maxChars:    240,
        modelAnswer: 'Quantity supplied (Q_s) is the short side, so only Q_s flats are actually let – the market trades on the lower of Q_s and Q_d. The remaining Q_d − Q_s tenants cannot find a flat at P_max because price is no longer allowed to ration them out. Non-price rationing fills the gap: waiting lists, queues, allocation through personal networks, key-money side payments, or black-market sub-letting above the cap. Landlords may also cut maintenance to restore margins, so the headline rent is lower but the real product is also worse.'
      },
      {
        num:         3,
        title:       'Explain who gains, who loses and the welfare cost',
        prompt:      'Who gains and who loses from the binding cap, and where is the deadweight welfare loss?',
        maxChars:    240,
        modelAnswer: 'Sitting tenants who hold a tenancy gain a transfer: they pay a lower contractual rent on the Q_s flats still let, so producer surplus shifts to consumer surplus on those units. Landlords lose surplus on every unit and may exit the market entirely. The deadweight loss is the welfare from trades between Q_s and Q_e that would have happened at P_e but no longer occur – flats willing buyers would have paid more than the marginal cost for, but which are simply not let. Whether the policy raises total welfare depends on whether the equity gain to sitting tenants outweighs the DWL, the quality decline, and the new tenants pushed out by the shortage.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'State that P_max < P_e makes the cap binding',
      'Identify Q_s and Q_d and the shortage between them',
      'Name the short-side rule and non-price rationing',
      'Identify the gain to sitting tenants, the loss to landlords and the DWL'
    ],

    examAnswer: '"A rent cap set 20% below the equilibrium is a binding maximum price, so quantity supplied falls to Q_s while quantity demanded rises to Q_d, opening up a shortage of Q_d − Q_s. With price barred from clearing the market, the short side determines that only Q_s flats are actually let, and the excess demand is rationed by queues, networks and key money – often missing the lowest-income tenants. Sitting tenants gain a transfer from landlords on the Q_s units still traded, but the trades between Q_s and Q_e that would have happened at P_e are now lost as deadweight welfare loss, and landlords typically cut maintenance to restore margins."'
  }
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for price_controls
   Scenario: rent control (binding maximum price on housing)
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Government Intervention in Markets',
  estTime: '15–20 minutes',
  goal:    'Apply the price ceiling framework to a binding rent control – show why a maximum price below equilibrium creates a shortage, redistributes surplus and risks destroying welfare.',

  intro: {
    summary: "You've mastered how maximum prices, minimum prices, taxes, subsidies, permits, state and information provision and regulation each address a particular market failure. Now train the skills examiners reward – applying the price ceiling framework to a rent control case, building the binding cap → shortage → non-price rationing chain, and reaching a supported judgement on whether rent controls protect tenants.",
    heroKey: 'heroIntervention',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real context to test whether a rent cap protects low-income tenants in a tight housing market',
      'Build a watertight binding ceiling → shortage → non-price rationing causal chain',
      'Pick, label and explain the supply and demand diagram for a binding maximum price',
      'Evaluate the key conditions that change whether rent controls raise or lower welfare'
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
   Government Intervention in Markets: synthesise into an exam-quality judgement on rent control
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Government Intervention in Markets',
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
      id: 'rent-cap-judgement',
      claim: {
        icon:   '🏠',
        prompt: 'Policy claim',
        text:   'A binding rent cap on private-sector flats is the most effective way to protect low-income tenants in a tight urban housing market.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '40% of renters spend over half their income on housing; ~180,000 sitting tenants gain in the short run; Berlin cap cut new listings ~50% in a year; San Francisco maintenance fell ~8%; non-price rationing reaches better-connected tenants.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'P_max < P_e (binding) → Q_s falls and Q_d rises, opening a shortage → flats rationed by queues, networks and key money → sitting tenants gain a transfer, but DWL on lost trades and quality decline.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'Horizontal P_max line below P_e on standard S/D – Q_s on supply, Q_d on demand, shortage = Q_d − Q_s. Market trades on the short side (Q_s).' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on the long-run PES of housing, how the shortage is rationed in practice, and whether better-targeted alternatives (housing benefit, social housing, planning reform) would do less harm.' }
      ],
      cloze: 'Overall, a binding rent cap protects [1] in the short run but causes [2] in the long run as landlords exit the market. The cap is most defensible when supply is [3], because the shortage that opens up is then [4]. However, when supply is more elastic in the long run, non-price rationing tends to allocate capped flats to [5] rather than the lowest-income tenants, and landlords restore margins by cutting [6]. The strongest judgement is therefore that a rent cap is [7] as a tool for protecting low-income tenants, because better-targeted alternatives such as [8] preserve supply while transferring income more reliably to those in greatest need.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-sitting',     text: 'sitting tenants',                correct: true  },
            { id: 'b1-landlords',   text: 'landlords',                      correct: false },
            { id: 'b1-developers',  text: 'developers',                     correct: false },
            { id: 'b1-newcomers',   text: 'new tenants searching for flats', correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-shortage',    text: 'a shortage of rental flats',     correct: true  },
            { id: 'b2-surplus',     text: 'a surplus of unsold flats',      correct: false },
            { id: 'b2-inflation',   text: 'general price inflation',        correct: false },
            { id: 'b2-monopoly',    text: 'a landlord monopoly',            correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-inelastic',   text: 'price inelastic',                correct: true  },
            { id: 'b3-elastic',     text: 'price elastic',                  correct: false },
            { id: 'b3-perfectly',   text: 'perfectly elastic',              correct: false },
            { id: 'b3-income',      text: 'income elastic',                 correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-small',       text: 'small',                          correct: true  },
            { id: 'b4-large',       text: 'large',                          correct: false },
            { id: 'b4-zero',        text: 'eliminated entirely',            correct: false },
            { id: 'b4-permanent',   text: 'permanent',                      correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-connected',   text: 'better-connected or higher-income tenants', correct: true  },
            { id: 'b5-poorest',     text: 'the poorest households first',   correct: false },
            { id: 'b5-random',      text: 'tenants chosen at random',       correct: false },
            { id: 'b5-landlords',   text: 'landlords themselves',           correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-maintenance', text: 'maintenance and quality',        correct: true  },
            { id: 'b6-rent',        text: 'the contractual rent',           correct: false },
            { id: 'b6-tax',         text: 'their tax liability',            correct: false },
            { id: 'b6-marketing',   text: 'marketing spend',                correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-useful',      text: 'a useful but conditional',       correct: true  },
            { id: 'b7-perfect',     text: 'a perfect',                      correct: false },
            { id: 'b7-irrelevant',  text: 'an irrelevant',                  correct: false },
            { id: 'b7-only',        text: 'the only available',             correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-housing-ben', text: 'housing benefit or social housing', correct: true  },
            { id: 'b8-vat',         text: 'a VAT increase on rents',        correct: false },
            { id: 'b8-tariff',      text: 'tariffs on imported building materials', correct: false },
            { id: 'b8-ban',         text: 'an outright ban on private renting', correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',   text: 'A rent cap always protects low-income tenants because lower rents always help them',                          correct: false },
          { id: 'op-useful',   text: 'A rent cap helps sitting tenants but is a conditional tool – better-targeted alternatives usually dominate', correct: true  },
          { id: 'op-no',       text: 'Rent caps should never be used because they always destroy more welfare than they create',                    correct: false },
          { id: 'op-market',   text: 'Housing affordability is not a market failure and requires no government intervention',                       correct: false }
        ]
      },
      examBridge: '"A binding rent cap is a useful but conditional tool: it shifts surplus from landlords to sitting tenants in the short run, but pushes quantity supplied below Q_e and opens up a shortage that grows over time as long-run PES bites – Berlin\'s ~50% fall in new listings is the clearest evidence. Non-price rationing then allocates the limited supply via networks and key money, often missing the lowest-income tenants the policy was designed for, while landlords restore margins by cutting maintenance (~8% in San Francisco). Better-targeted alternatives such as housing benefit or social housing typically reach low-income tenants more reliably without choking off supply, so the strongest verdict is that a cap protects some at the expense of others rather than being the most effective instrument overall."'
    }
  ]
};

