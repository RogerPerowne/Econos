/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-calc.js ---- */
/* ============================================================
   ECONOS – Link It · Calculate It station data
   Indirect taxes & subsidies: incidence and welfare calculations
   ============================================================ */

window.ECONOS_LINK_CALC = {
  topic:   'Indirect Taxes & Subsidies',
  backUrl: TopicLoader.routes.link('chain'),
  nextUrl: TopicLoader.routes.link('diagram'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 2,

  eyebrow:     'Calculate It',
  instruction: 'Tax incidence questions test whether you can calculate how a tax is split between buyers and sellers. Use the method to work through each scenario.',

  questions: [
    {
      id: 'tax-q1',
      title: 'Tax incidence – who bears the burden?',
      scenario: 'The government imposes a specific (per-unit) tax of £6 on each bottle of wine. Before the tax: equilibrium price = £8.00 per bottle. After the tax: price paid by consumers rises to £12.50 per bottle; price received by producers falls to £6.50 per bottle.',
      question: 'What proportion of the £6 tax burden falls on <strong>consumers</strong>?',
      hint: 'Consumer burden = rise in consumer price ÷ total tax × 100. Check: consumer burden + producer burden = total tax.',
      method: [
        { step: 'Rise in consumer price (consumer burden)', working: '£12.50 − £8.00 = £4.50' },
        { step: 'Fall in producer price (producer burden)',  working: '£8.00 − £6.50 = £1.50' },
        { step: 'Check totals',                              working: '£4.50 + £1.50 = £6.00 ✓ (equals the tax)' },
        { step: 'Consumer burden as % of tax',              working: '£4.50 ÷ £6.00 × 100 = 75%' }
      ],
      inputType: 'mcq',
      options: ['25%', '50%', '75%', '100%'],
      answer: '75%',
      feedback: {
        correct: 'Correct! Consumers bear 75% (£4.50) of the £6 tax. Producers bear only 25% (£1.50). This high consumer burden reflects price inelastic demand for wine – consumers have limited ability to reduce consumption when prices rise, so producers can pass most of the tax on.',
        wrong: 'Consumer burden = rise in price PAID by consumers = £12.50 − £8.00 = £4.50. As a % of the £6 tax: £4.50 ÷ £6.00 × 100 = 75%. Producer burden = £8.00 − £6.50 = £1.50 (25%). The two must sum to 100%.'
      },
      examTip: 'Two rules to memorise: (1) The more inelastic the demand, the greater the consumer burden. (2) The more inelastic the supply, the greater the producer burden. On a diagram: the consumer burden = the vertical distance from old P to new consumer P; the producer burden = the vertical distance from old P to new producer P.'
    },
    {
      id: 'tax-q2',
      title: 'Tax revenue and deadweight loss',
      scenario: 'Market data before and after a £4 specific tax on cigarettes: Before tax: P = £5.00, Q = 10 million packs/week. After tax: P (consumer) = £8.20, P (producer) = £4.20, Q = 8 million packs/week.',
      question: 'Calculate the government\'s total weekly tax revenue (£ millions).',
      hint: 'Tax revenue = tax per unit × quantity traded after tax.',
      method: [
        { step: 'Tax per unit',         working: '£4 per pack (given)' },
        { step: 'Quantity after tax',   working: '8 million packs per week (given)' },
        { step: 'Tax revenue',          working: '£4 × 8 million = £32 million per week' },
        { step: 'Note on deadweight loss', working: 'The 2 million packs no longer traded represent a deadweight welfare loss – mutually beneficial transactions that no longer occur because the tax has raised the consumer price above the marginal benefit for some buyers.' }
      ],
      inputType: 'number',
      answer: 32,
      unit: '£ million per week',
      tolerance: 0,
      feedback: {
        correct: 'Correct! Tax revenue = £4 × 8m = £32 million per week. On the supply and demand diagram, this is the rectangle between the consumer price (£8.20) and producer price (£4.20), over the new equilibrium quantity (8m packs). Note: this is less than the maximum possible revenue (£4 × 10m = £40m) because the tax has reduced the quantity traded.',
        wrong: 'Tax revenue = tax per unit × new quantity traded = £4 × 8,000,000 = £32,000,000. Don\'t use the old quantity (10m) – the tax reduces the quantity traded to 8m. Always use the after-tax equilibrium quantity.'
      },
      examTip: 'Tax revenue on a diagram = the rectangle bounded by: consumer price (top), producer price (bottom), 0 (left), new quantity (right). Its area = tax per unit × new Qd. The triangles to the left and right of this rectangle (compared to the original equilibrium) represent the deadweight welfare loss – the market transactions that no longer take place due to the tax.'
    },
    {
      id: 'tax-q3',
      title: 'Subsidy – effect on consumer price and producer revenue',
      scenario: 'The government grants a subsidy of £3 per unit to electric vehicle (EV) manufacturers. Before subsidy: equilibrium price = £25,000, Q = 80,000 EVs per year. After subsidy: price paid by consumers = £22,500, price received by producers (including subsidy) = £25,500, Q = 95,000 per year.',
      question: 'What is the total annual cost of the subsidy to the government?',
      hint: 'Total subsidy cost = subsidy per unit × quantity after subsidy.',
      method: [
        { step: 'Subsidy per unit',          working: '£3,000 per EV (the difference: £25,500 received by producers − £22,500 paid by consumers = £3,000 ✓)' },
        { step: 'Quantity after subsidy',    working: '95,000 EVs (given)' },
        { step: 'Total government cost',     working: '£3,000 × 95,000 = £285,000,000 = £285 million' },
        { step: 'Note: benefit split',       working: 'Consumer benefit = £2,500 per unit (price falls from £25,000 to £22,500). Producer benefit = £500 per unit (price received rises from £25,000 to £25,500). Total = £3,000 per unit ✓' }
      ],
      inputType: 'number',
      answer: 285,
      unit: '£ million per year',
      tolerance: 1,
      feedback: {
        correct: 'Correct! Total subsidy cost = £3,000 × 95,000 = £285 million per year. Consumers receive most of the benefit (£2,500 of the £3,000 per unit) because demand is more elastic than supply for EVs – consumers shop around between EV and petrol alternatives, forcing producers to compete on price.',
        wrong: 'Total subsidy cost = subsidy per unit × new quantity = £3,000 × 95,000 = £285,000,000 = £285 million. Use the new (post-subsidy) quantity, not the original 80,000. The subsidy is paid on every unit produced, including the newly stimulated output.'
      },
      examTip: 'Subsidy cost on a diagram = the rectangle between producer price (top) and consumer price (bottom), over new quantity. How the benefit is split: more elastic demand → consumers get more. More elastic supply → producers get more. This is the mirror image of the tax incidence rule.'
    }
  ]
};

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   Indirect Taxes & Subsidies: build the specific tax → supply shift → incidence chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Indirect Taxes &amp; Subsidies',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('diagram'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'specific-tax-mechanism',
      scenario: {
        icon:  '🍭',
        label: 'Scenario',
        text:  'A specific tax of £0.24 per litre is imposed on soft drinks with more than 8g of sugar per 100ml. The tax is levied on producers at the point of manufacture.'
      },
      anchor: 'The specific tax raises MC for every litre of high-sugar drink.',
      tiles: [
        {
          id:   'step-supply',
          icon: '🏭',
          text: 'Supply shifts left by the tax amount at every quantity',
          pos:  0
        },
        {
          id:   'step-prices',
          icon: '💰',
          text: 'New equilibrium: higher P_c, lower P_p (P_p = P_c − tax)',
          pos:  1
        },
        {
          id:   'step-incidence',
          icon: '📊',
          text: 'Q₀ → Q_t; tax burden splits between consumers/producers per PED, PES',
          pos:  2
        },
        {
          id:   'dist-1',
          icon: '🛒',
          text: 'Consumers immediately pay the full tax at the point of sale',
          pos:  null
        },
        {
          id:   'dist-2',
          icon: '📈',
          text: 'Supply shifts right as producers expand to offset the tax revenue',
          pos:  null
        },
        {
          id:   'dist-3',
          icon: '🏛️',
          text: 'Government sets the new market price directly, ousting the mechanism',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'A specific tax of £0.24 per litre is an additional cost the producer must pay to government for every unit sold. This raises the marginal cost of production at every quantity – not because inputs changed, but because the firm must now remit £0.24 per litre to HMRC. The supply curve therefore shifts left (or equivalently, upward) by exactly £0.24 at every quantity, since producers need a higher price to supply the same quantity as before.'
        },
        {
          pos:  1,
          text: 'With supply shifted left, the new equilibrium price consumers pay (P_c) is higher than before the tax. But producers do not keep the full P_c – they must remit £0.24 per litre to government, leaving them with a net price P_p = P_c − tax. The tax creates a wedge between what consumers pay and what producers receive. Crucially, neither side bears the full tax; the split depends on the relative elasticities of supply and demand.'
        },
        {
          pos:  2,
          text: 'At the new equilibrium quantity Q_t (which is lower than Q₀), the tax wedge is fully visible: P_c lies on the demand curve and P_p lies on the original supply curve at Q_t. The consumer burden is (P_c − P₀) × Q_t; the producer burden is (P₀ − P_p) × Q_t. When demand is inelastic relative to supply, consumers bear the larger share. When supply is inelastic, producers bear more. PED and PES jointly determine the split.'
        }
      ],
      examBridge: '"A specific tax of £0.24 per litre raises producers\' marginal costs and shifts the supply curve left by the tax amount, raising the consumer price to P_c and lowering the producer net price to P_p = P_c − tax. Output falls from Q₀ to Q_t, and the tax burden is split between consumers and producers in proportion to their relative price inelasticity – the less elastic side bears the larger share."',

      prompts: [
        'Why does a tax levied on producers shift the supply curve rather than the demand curve?',
        'What is the relationship between P_c, P_p and the tax rate at the new equilibrium?',
        'What determines how the tax burden is divided between consumers and producers?'
      ],
      modelAnswers: [
        'The tax is an additional cost per unit of production – it raises the price producers require to supply any given quantity. This shifts the supply curve left (upward) by exactly the tax amount at every quantity. Demand is unchanged because consumers\' willingness to pay is unaffected by who is legally liable to remit the tax.',
        'At the new equilibrium Q_t, consumers pay P_c (read off the demand curve) and producers receive P_p (read off the original supply curve at Q_t). The vertical distance P_c − P_p equals the tax per unit. Government revenue = tax × Q_t, which equals the sum of the consumer and producer burdens.',
        'The burden split is determined by the relative price elasticities of demand (PED) and supply (PES). When demand is more inelastic than supply, consumers cannot easily reduce quantity demanded when price rises – so they bear more of the tax. When supply is more inelastic, producers cannot easily redirect output – so they bear more. In the extreme, perfectly inelastic demand means consumers bear the entire tax; perfectly inelastic supply means producers bear it all.'
      ],
      vocab: ['specific tax', 'supply curve', 'incidence', 'P_c', 'P_p', 'PED', 'PES', 'consumer surplus', 'producer surplus', 'deadweight welfare loss']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Indirect Taxes & Subsidies
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Indirect Taxes &amp; Subsidies',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'calc',    label: 'Calculate It',        max: 6, color: '#3B82F6' },
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
      { min: 55, text: 'Good – check the outcome for P_c, P_p and Q' },
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

  useInLandIt: 'A specific tax shifts the supply curve left by the tax amount, raising the consumer price to P_c and lowering the producer net price to P_p – the wedge between them equals the per-unit tax. The incidence split between consumers and producers depends on relative PED and PES: the less elastic side bears more. For exam essays, always state the elasticity assumption first, then use the diagram wedge to show the split, and evaluate whether the tax corrects the externality or mainly raises revenue.',

  focusInLandIt: {
    context: 'Use specific figures from the extract – the £6.1bn NHS externality cost, the 28.8% reformulation response and the PED of −0.3 for confectionery – to anchor your application to the real-world case rather than generic tax theory.',
    chain:   'State the chain explicitly: specific tax raises marginal costs → supply shifts left by tax amount → new equilibrium at lower Q_t → P_c rises, P_p falls → tax wedge = P_c − P_p = per-unit tax → burden split by PED and PES.',
    diagram: 'Draw all three curves (D, S₁, S₂), label both equilibria (Q₀ and Q_t), mark P_c on the demand curve and P_p on S₁ at Q_t, and show the tax wedge rectangle between P_c and P_p. The wedge area = government revenue.',
    depends: 'Lead with PED as your primary condition – if demand is inelastic (as with confectionery), the tax mainly raises prices and revenue rather than reducing consumption and correcting the externality. The reformulation response is the second most important factor.',
    judge:   'State a clear conditional position: the levy is effective when producers reformulate (supply-side correction) but less effective when demand is inelastic (price signal is weak). Always acknowledge the regressive incidence as the key trade-off.'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   Indirect Taxes & Subsidies: classify evidence on extending the UK sugar levy
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Indirect Taxes &amp; Subsidies',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('chain'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether the UK government should extend the sugar levy to a wider range of high-sugar foods?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      '[[health-costs|The NHS spends £6.1bn per year treating obesity-related conditions]], including type 2 diabetes, cardiovascular disease and joint replacements – costs ultimately borne by taxpayers rather than those consuming excess sugar.',
      'Supporters of extension argue that the existing levy has already reduced sugar content in drinks by 28.8% on average, with manufacturers reformulating products to avoid the charge – evidence that [[reformulation|the tax drives producer behaviour change without raising consumer prices]] for those choosing reformulated products.',
      'However, food industry groups warn that applying the levy to confectionery and baked goods would [[regressive|raise costs disproportionately for low-income households]], who spend a larger share of income on these goods, making the tax regressive in its distributional impact.',
      'Nutritionists point out that [[substitutes|demand for chocolate and biscuits is price inelastic short-run – PED ≈ −0.3]] – meaning a levy would raise prices without significantly reducing consumption.',
      'New research suggests that [[evidence-base|a 10% price rise from the sugar drinks levy cut sales 12%]], indicating the original levy worked as intended where demand was more elastic than initially forecast.'
    ],

    evidence: {
      'health-costs':  { text: 'The NHS spends £6.1bn per year treating obesity-related conditions' },
      'reformulation': { text: 'the tax drives producer behaviour change without raising consumer prices' },
      'regressive':    { text: 'raise costs disproportionately for low-income households' },
      'substitutes':   { text: 'demand for chocolate and biscuits is price inelastic short-run – PED ≈ −0.3' },
      'evidence-base': { text: 'a 10% price rise from the sugar drinks levy cut sales 12%' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports extending the levy',       tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against extending the levy', tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',   tone: 'blue',  icon: '?' }
    ],

    correct: {
      'health-costs':  'supports',
      'reformulation': 'supports',
      'regressive':    'against',
      'substitutes':   'complicates',
      'evidence-base': 'supports'
    },

    explain: {
      'health-costs':  'Quantifying £6.1bn of annual NHS costs confirms a large negative externality from excess sugar consumption. This measured external cost directly justifies intervention to correct the overconsumption that arises when consumers do not face the full social cost of their choices.',
      'reformulation': 'Evidence that producers reformulated drinks to avoid the existing levy – reducing sugar content by 28.8% without raising consumer prices – shows the tax can correct the externality through a supply-side channel rather than just a price signal to consumers. This is a powerful argument for extension.',
      'regressive':    'If extending the levy to confectionery and baked goods raises costs for low-income households disproportionately, the distributional impact is regressive – the tax takes a larger share of income from those least able to afford it. This is a concrete welfare argument against extension, especially without compensatory measures.',
      'substitutes':   'A PED of −0.3 for confectionery means the levy would raise prices significantly but reduce consumption only modestly. The tax would generate revenue but do little to reduce the obesity externality – complicating rather than settling the case, since the degree of correction depends on which goods are taxed and whether PED differs across product categories.',
      'evidence-base': 'A price elasticity implied by a 10% price rise causing a 12% fall in sales volume (PED ≈ −1.2) for soft drinks shows the original levy succeeded in reducing consumption where demand was more elastic. This positive evidence supports extension, though it also highlights that effectiveness will vary where PED differs – as with confectionery.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"Quantified evidence of £6.1bn in NHS externality costs and producer reformulation strongly supports extending the levy, but the case is complicated by the inelastic demand for confectionery (PED ≈ −0.3) – the tax would raise prices substantially while reducing consumption only modestly – and by the regressive distributional impact on low-income households who spend a larger share of income on these goods."',

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
   Indirect Taxes & Subsidies: evaluate a sugar levy claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Indirect Taxes &amp; Subsidies',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether a sugar levy actually reduces obesity-related externalities.',
  nextUrl:     TopicLoader.routes.link('judge'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'sugar-levy-effectiveness',
      claim: {
        icon:   '🍭',
        prompt: 'Policy claim',
        text:   'A sugar tax is the most effective way to cut obesity externalities.'
      },
      factors: [
        {
          id:    'price-elasticity-of-demand',
          icon:  '📉',
          label: 'Price elasticity of demand for the taxed good',
          why:   'If PED is inelastic (−0.3 for confectionery), a large price rise barely reduces consumption; the tax raises revenue but does little to correct the externality. The policy works best where demand is more elastic – as with soft drinks, where a 10% price rise produced a 12% fall in sales volume (PED ≈ −1.2). The effectiveness of the levy in reducing obesity critically depends on which goods are taxed and how responsive consumers are to price.'
        },
        {
          id:    'mec-size',
          icon:  '🔍',
          label: 'Size of the marginal external cost (MEC)',
          why:   'The tax rate should ideally equal the MEC at the socially optimal quantity. If the MEC from obesity is large (£6.1bn in annual NHS costs), a higher rate is theoretically justified. However, measuring the MEC precisely is difficult – costs like reduced productivity, informal care and mental health impacts are hard to quantify. A tax set below the true MEC under-corrects the externality; set above it, the market is distorted unnecessarily.'
        },
        {
          id:    'reformulation',
          icon:  '🏭',
          label: 'Producer reformulation response',
          why:   'If producers reduce sugar content to avoid the levy – as occurred with the existing soft drinks levy, where average sugar content fell by 28.8% – the externality falls without consumers paying more. This supply-side response is a powerful effect that the static incidence model misses. A levy that triggers reformulation may be far more effective at reducing harm than one that simply raises prices, because it changes the product rather than just deterring consumption.'
        },
        {
          id:    'regressive',
          icon:  '💰',
          label: 'Distributional (regressive) impact',
          why:   'Indirect taxes on food take a larger share of income from low-income households, who spend more of their budget on food including high-sugar goods. This regressive impact may be seen as unfair and reduces the political feasibility of extension. It also raises a welfare trade-off: the levy may correct one market failure (the obesity externality) while worsening distributional outcomes – undermining the overall case unless compensatory transfers are made.'
        },
        {
          id:    'substitutes',
          icon:  '🔄',
          label: 'Availability of substitutes',
          why:   'If low-sugar alternatives exist and are affordable, consumers can switch when the levy raises prices – reducing harm and supporting the policy\'s goal. If substitutes are unavailable or significantly more expensive (as may be the case for low-income households), the levy simply raises costs without reducing consumption. Cross-price elasticity of demand for healthier substitutes is therefore a key determinant of whether the levy achieves its corrective purpose.'
        },
        {
          id:    'regulation',
          icon:  '📋',
          label: 'Effectiveness vs direct regulation',
          why:   'Advertising bans, reformulation mandates or school food standards may change behaviour more directly than a price signal, especially for children who respond less to prices. Unlike a tax, regulation can guarantee a minimum standard (e.g. sugar caps per 100g) rather than relying on the price mechanism to shift behaviour. Where the externality arises from habitual consumption or information failure rather than rational price response, regulation may correct it more reliably than a levy.'
        },
        {
          id:    'international',
          icon:  '🌍',
          label: 'International evidence and precedent',
          why:   'Mexico, Denmark and France have implemented sugar or fat taxes with mixed results. Denmark reversed its fat tax due to cross-border shopping, which displaced sales to Germany rather than reducing consumption – showing that a unilateral national tax can fail when substitution across borders is easy. This complicates the claim that the tax is the "most effective" instrument, particularly where the taxed goods are easily sourced from untaxed jurisdictions.'
        },
        {
          id:    'revenue-use',
          icon:  '♻️',
          label: 'How the revenue is used',
          why:   'If levy revenue funds NHS obesity treatment, health education or food vouchers for low-income families, the net welfare effect is amplified – a "double dividend" that both corrects the externality and addresses its distributional impact. Revenue that disappears into general government spending without any link to the externality weakens the economic case for the levy over other instruments, since the corrective effect then relies entirely on the price signal.'
        }
      ],
      modelRanking: ['price-elasticity-of-demand', 'reformulation', 'regressive'],
      judgement: '"Whether an indirect tax is the \'most effective\' way to reduce obesity-related externalities depends primarily on the price elasticity of demand for the goods taxed – where PED is inelastic (as with confectionery), the tax raises prices significantly while doing little to reduce consumption or harm. Effectiveness is greatly enhanced if producers reformulate products to avoid the levy, since this reduces the externality through the supply side rather than through the price mechanism alone. And the regressive distributional impact on low-income households must be weighed against any gains in correcting the externality."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Indirect Taxes & Subsidies: specific tax shifts supply left (S₁ → S₂)
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   D (demand): (110,60)→(510,360)  slope = 0.75  ⟹  y = 60 + (x-110)*0.75
   S₁ (pre-tax): (130,390)→(490,30)  slope = -1.0   ⟹  y = 520 - x
   S₂ (post-tax): (130,310)→(400,30)  80px above S₁  ⟹  y = 440 - x
   E₁ (S₁ ∩ D): 520-x = 60+(x-110)*0.75 → 520-x = -22.5+0.75x → 542.5 = 1.75x → x ≈ 310, y ≈ 210
   E₂ (S₂ ∩ D): 440-x = 60+(x-110)*0.75 → 440-x = -22.5+0.75x → 462.5 = 1.75x → x ≈ 264, y ≈ 176
   P_p at Q_t: S₁ at x=264: y = 520-264 = 256                                           */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Indirect Taxes &amp; Subsidies',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('depends'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: -1,

  /* ── Stage 0: Select the right diagram ── */
  select: {
    eyebrow:     'Diagram Connector – Select the Diagram',
    title:       'The government imposes a specific tax on producers of high-sugar soft drinks. Which diagram correctly shows the effect on the market?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the specific tax. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      's-left',
        correct:  true,
        title:   'Supply shifts left',
        sub:     'Higher production costs from the tax reduce supply at every price level',
        why:     'A specific tax levied on producers raises their marginal cost of production at every quantity – they must now remit £0.24 per litre to government on top of their existing costs. This shifts the supply curve left (upward) by the amount of the tax. The equilibrium consumer price rises to P_c, the producer net price falls to P_p, and output falls from Q₀ to Q_t.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Consumer spending falls, reducing the quantity demanded at every price',
        why:     'The specific tax is levied on producers, not consumers. Consumers\' willingness to pay is unchanged – they face higher prices only because the supply shift raises the equilibrium price. Demand (D) does not shift. A leftward demand shift would represent a fall in consumer income or preferences, which is not what happens when a producer tax is imposed.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Output rises and prices fall as supply expands',
        why:     'Supply shifting right means firms can produce more at every price – this represents falling costs, a technology improvement or a subsidy. A specific tax raises producers\' costs; it does not reduce them. This diagram shows the opposite direction from what a specific tax creates.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Rising consumer demand pushes up the price level',
        why:     'Demand shifting right represents rising consumer spending, income or preferences. The specific tax affects the supply side (producers\' costs), not the demand side. Consumers\' willingness to pay per unit is unchanged – the higher price they face is a result of the supply shift, not a cause of a demand shift.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🍭',
    text:  'The government imposes a specific tax on producers of high-sugar soft drinks.',
    dataPoints: [
      { icon: '💸', text: 'Tax = £0.24 per litre on high-sugar drinks' },
      { icon: '📉', text: 'Supply shifts left by the tax amount at every quantity' },
      { icon: '⚖️', text: 'Incidence split by PED and PES' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – specific indirect tax on high-sugar soft drinks',
    xLabel:    'Quantity of output',
    yLabel:    'Price / Cost (£)',

    lines: [
      /* D (demand) – green downward-sloping */
      { x1: 110, y1: 60,  x2: 510, y2: 360, stroke: '#059669', strokeWidth: 2.5,
        label: 'D', labelX: 514, labelY: 360, labelFill: '#059669' },
      /* S₁ (pre-tax supply) – blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S₁ (pre-tax)', labelX: 492, labelY: 28, labelFill: '#2563eb' },
      /* S₂ (post-tax supply, 80px above S₁) – purple upward-sloping */
      { x1: 130, y1: 310, x2: 400, y2: 30,  stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'S₂ (+ tax)', labelX: 403, labelY: 28, labelFill: '#7c3aed' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₂ (consumer price P_c) */
      { x1: 100, y1: 176, x2: 264, y2: 176, tickLeft: 'P_c', tickLeftY: 179 },
      /* Horizontal from y-axis to P_p (producer price = S₁ at Q_t) */
      { x1: 100, y1: 256, x2: 264, y2: 256, tickLeft: 'P_p', tickLeftY: 259 },
      /* Vertical from E₂ down to x-axis */
      { x1: 264, y1: 176, x2: 264, y2: 400, tickBottom: 'Q_t', tickBottomX: 264 },
      /* Vertical from E₁ down to x-axis */
      { x1: 310, y1: 210, x2: 310, y2: 400, tickBottom: 'Q₀', tickBottomX: 310 }
    ],

    /* Shift arrow: from S₁ toward S₂ at y=120, pointing left */
    shiftArrow: { x1: 396, y1: 120, x2: 324, y2: 120, stroke: '#7c3aed' },

    eqDots: [
      {
        cx: 310, cy: 210, fill: '#2563eb',
        initLabel: 'Pre-tax', initLabel2: 'equilibrium', initLabelX: 317, initLabelY: 205
      },
      {
        cx: 264, cy: 176, fill: '#7c3aed',
        newLabel: 'Post-tax', newLabel2: 'equilibrium', newLabelX: 271, newLabelY: 171
      }
    ],

    legend: [
      { color: '#059669', text: 'D = Demand (Marginal Social Benefit)' },
      { color: '#2563eb', text: 'S₁ = Supply before tax (MPC)' },
      { color: '#7c3aed', text: 'S₂ = Supply after specific tax (MPC + tax)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of a specific tax on high-sugar soft drinks.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria, and the outcome for consumer price, producer price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',      label: 'Shift label',          pctX: 62,  pctY: 23,   pctW: 22 },
      { id: 'post-eq',    label: 'Post-tax equilibrium', pctX: 47,  pctY: 36,   pctW: 23 },
      { id: 'pre-eq',     label: 'Pre-tax equilibrium',  pctX: 56,  pctY: 44,   pctW: 23 },
      { id: 'cons-price', label: 'Consumer price (P_c)', pctX: 0.5, pctY: 37,   pctW: 16 },
      { id: 'prod-price', label: 'Producer price (P_p)', pctX: 0.5, pctY: 54,   pctW: 16 }
    ],

    chips: [
      { id: 'tax-shift',   text: 'Tax shifts supply left',     icon: '←', zone: 'shift',      correct: true  },
      { id: 'post-eq',     text: 'Post-tax equilibrium (Q_t)', icon: '●', zone: 'post-eq',    correct: true  },
      { id: 'pre-eq',      text: 'Pre-tax equilibrium (Q₀)',   icon: '●', zone: 'pre-eq',     correct: true  },
      { id: 'cons-price',  text: 'Consumer price (P_c)',       icon: '↑', zone: 'cons-price', correct: true  },
      { id: 'prod-price',  text: 'Producer price (P_p)',       icon: '↓', zone: 'prod-price', correct: true  },
      { id: 'dem-left',    text: 'Demand shifts left',         icon: '←', zone: null,         correct: false },
      { id: 'price-falls', text: 'Consumer price falls',       icon: '↓', zone: null,         correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['specific tax', 'incidence', 'P_c', 'P_p', 'PED', 'PES', 'consumer surplus', 'deadweight welfare loss', 'pass-through'],

    parts: [
      {
        num:         1,
        title:       'Explain the supply shift',
        prompt:      'Explain what a specific tax does to the supply curve and why.',
        maxChars:    240,
        modelAnswer: 'A specific tax of £0.24 per litre raises producers\' marginal cost at every quantity – they must remit the tax to government on every unit produced. The supply curve shifts left (upward) by exactly the tax amount at every quantity level, since producers require a higher market price to supply the same quantity as before. S₁ shifts up to S₂, with a constant vertical gap equal to the per-unit tax.'
      },
      {
        num:         2,
        title:       'Explain the new equilibrium',
        prompt:      'What happens to P_c, P_p and Q after the tax is imposed?',
        maxChars:    240,
        modelAnswer: 'At the new equilibrium (E₂), the consumer price rises to P_c (read off the demand curve at Q_t) and output falls from Q₀ to Q_t. Producers do not receive the full P_c – after remitting the tax, their net price is P_p, read off the original supply curve S₁ at Q_t. The vertical wedge between P_c and P_p equals the per-unit tax. Neither side bears the full tax; the burden is shared between consumers (who pay more) and producers (who receive less).'
      },
      {
        num:         3,
        title:       'Explain the incidence split',
        prompt:      'Who bears more of the tax burden here, and what determines the split?',
        maxChars:    240,
        modelAnswer: 'The incidence of the tax is determined by the relative price elasticities of demand (PED) and supply (PES). When demand is relatively inelastic – as with high-sugar drinks where consumers have few close substitutes – consumers cannot easily reduce quantity and so bear a larger share of the tax as a higher price. When supply is relatively inelastic, producers cannot redirect output and bear more. The less elastic side always carries the larger burden: the steeper the demand curve relative to the supply curve, the more consumers pay.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Explain the direction of the supply shift and why it occurs',
      'State the outcome for P_c, P_p and Q',
      'Identify the tax wedge between P_c and P_p',
      'Link the incidence split to PED and PES'
    ],

    examAnswer: '"A specific tax of £0.24 per litre raises producers\' marginal costs, shifting the supply curve left from S₁ to S₂ by the full tax amount at every quantity. The new equilibrium has a higher consumer price P_c and a lower producer net price P_p = P_c − tax, with output falling from Q₀ to Q_t. The tax wedge between P_c and P_p equals the per-unit tax, and the burden is split between consumers and producers in proportion to their relative inelasticity – when demand is inelastic, consumers bear the larger share of the burden."'
  }
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for indirect_taxes_subsidies
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Indirect Taxes &amp; Subsidies',
  estTime: '15–20 minutes',
  goal:    'Apply the tax incidence framework – who really pays a specific tax, and what changes how the burden is split.',

  intro: {
    summary: "You've mastered how specific and ad valorem taxes shift supply, how the burden splits between consumers and producers, and how elasticity determines who really pays. Now train the skills examiners reward – applying the incidence framework to real context, building a watertight supply-shift → price-split causal chain, and reaching a supported judgement on when a sugar levy is most effective.",
    heroKey: 'heroIntervention',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real context to test whether a sugar levy is justified and effective',
      'Build a watertight specific tax → supply shift → incidence causal chain',
      'Pick, label and explain the supply and demand diagram for a specific indirect tax.',
      'Evaluate the key conditions that change whether the tax corrects the externality'
    ],
    tip: "These steps are cognitive drills – same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context', skill: 'Application', sub: 'Read an extract and judge which evidence changes the answer.', href: TopicLoader.routes.link('context'), state: 'available' },
      { num: 2, name: 'Build the chain', skill: 'Analysis', sub: 'Order or fill the steps in a reasoning chain.', href: TopicLoader.routes.link('chain'), state: 'available' },
      { num: 3, name: 'Calculate It', skill: 'Analysis', sub: 'Work through the calculations with revealable methods.', href: TopicLoader.routes.link('calc'), state: 'available' },
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
   Indirect Taxes & Subsidies: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Indirect Taxes &amp; Subsidies',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.routes.link('complete'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
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
      id: 'sugar-levy-judgement',
      claim: {
        icon:   '🍭',
        prompt: 'Policy claim',
        text:   'An indirect tax on sugary foods and drinks is the most effective way to reduce obesity-related negative externalities.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '£6.1bn annual NHS externality confirmed; existing levy triggered 28.8% sugar reduction through reformulation; confectionery PED ≈ −0.3 (inelastic); regressive impact on low-income households.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Specific tax raises marginal costs → supply shifts left by tax amount → P_c rises, P_p falls, Q falls → tax wedge split between consumers and producers by PED and PES.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'S₁ shifts left to S₂ → consumer price rises to P_c, producer net price falls to P_p, output falls from Q₀ to Q_t. Tax wedge = P_c − P_p = per-unit tax.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on PED (how much consumption falls), producer reformulation response, and the regressive distributional impact on low-income households.' }
      ],
      cloze: 'Overall, an indirect tax on sugary goods raises [1] and reduces consumption most effectively when demand is [2]. However, when demand is [3] – as with confectionery (PED ≈ −0.3) – the tax mainly raises [4] rather than reducing the externality. The split of the tax burden between consumers and producers depends on [5]: inelastic demand means [6] bear the larger share. Therefore, the strongest judgement is that a sugar levy is [7] as a corrective tool, but its power to change behaviour depends more on whether producers [8] than on the price signal alone.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-revenue',     text: 'government revenue',    correct: true  },
            { id: 'b1-surplus',     text: 'producer surplus',      correct: false },
            { id: 'b1-confidence',  text: 'consumer confidence',   correct: false },
            { id: 'b1-employment',  text: 'employment',            correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-elastic',     text: 'price elastic',         correct: true  },
            { id: 'b2-inelastic',   text: 'price inelastic',       correct: false },
            { id: 'b2-income',      text: 'income elastic',        correct: false },
            { id: 'b2-perfectly',   text: 'perfectly inelastic',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-inelastic',   text: 'price inelastic',       correct: true  },
            { id: 'b3-elastic',     text: 'price elastic',         correct: false },
            { id: 'b3-unit',        text: 'unit elastic',          correct: false },
            { id: 'b3-income',      text: 'income inelastic',      correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-revenue',     text: 'tax revenue',           correct: true  },
            { id: 'b4-profit',      text: 'producer profit',       correct: false },
            { id: 'b4-surplus',     text: 'consumer surplus',      correct: false },
            { id: 'b4-dwl',         text: 'deadweight loss',       correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-ped-pes',     text: 'relative PED and PES',  correct: true  },
            { id: 'b5-taxrate',     text: 'the government\'s tax rate', correct: false },
            { id: 'b5-power',       text: 'producer market power', correct: false },
            { id: 'b5-income',      text: 'consumer income',       correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-consumers',   text: 'consumers',             correct: true  },
            { id: 'b6-producers',   text: 'producers',             correct: false },
            { id: 'b6-government',  text: 'the government',        correct: false },
            { id: 'b6-third',       text: 'third parties',         correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-useful',      text: 'a useful but conditional', correct: true  },
            { id: 'b7-perfect',     text: 'a perfect',             correct: false },
            { id: 'b7-irrelevant',  text: 'an irrelevant',         correct: false },
            { id: 'b7-regressive',  text: 'a regressive-only',     correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-reformulate', text: 'reformulate products',  correct: true  },
            { id: 'b8-raise',       text: 'raise prices',          correct: false },
            { id: 'b8-reduce',      text: 'reduce output',         correct: false },
            { id: 'b8-lobby',       text: 'lobby for exemptions',  correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',   text: 'Sugar levies always reduce obesity because higher prices always change behaviour',        correct: false },
          { id: 'op-useful',   text: 'Sugar levies are useful but their effectiveness depends on producer reformulation response', correct: true  },
          { id: 'op-no',       text: 'Sugar levies should not be used – only regulation works on food markets',                 correct: false },
          { id: 'op-market',   text: 'Obesity is not a market failure and requires no government intervention',                  correct: false }
        ]
      },
      examBridge: '"A sugar levy is a useful but conditional corrective tool: it shifts the supply curve left, raising consumer prices and reducing output, but its power to reduce the obesity externality depends on whether producers reformulate products – as occurred with the soft drinks levy, where sugar content fell by 28.8% on average. Where demand is inelastic (PED ≈ −0.3 for confectionery), the tax mainly raises revenue and consumer prices rather than reducing consumption, and its regressive incidence on low-income households adds a distributional cost that must be weighed against any externality correction."'
    }
  ]
};

