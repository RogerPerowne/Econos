/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   Information Gaps: build the hidden cost → overconsumption → disclosure chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Information Gaps',
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
      id: 'info-gap-mechanism',
      scenario: {
        icon:  '💳',
        label: 'Scenario',
        text:  'Klarna, Clearpay and Laybuy offer \'pay later\' options at checkout without displaying APR or total cost of credit. Consumers cannot see the true price of the credit at the point of purchase.'
      },
      anchor: "BNPL checkouts hide APR – true credit cost is invisible at purchase.",
      tiles: [
        {
          id:  'step-gap',
          icon: '❓',
          text: "Info gap: hidden APR → effective demand inflated above D_rational",
          pos:  0
        },
        {
          id:  'step-over',
          icon: '📊',
          text: "Overconsumption Q_biased > Q_rational → marginal harm > benefit",
          pos:  1
        },
        {
          id:  'step-correct',
          icon: '✅',
          text: "Mandatory APR (FCA 2024) → demand shifts back to D_rational → less harm",
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '📈',
          text: 'Rising consumer confidence increases BNPL demand independently of info gaps',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '💰',
          text: 'BNPL providers increase credit limits, expanding effective supply of credit',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏦',
          text: 'Bank of England raises interest rates, reducing overall credit demand',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: "BNPL providers display the monthly instalment (e.g. 'pay £21.67 today') but not the APR or total cost of credit. Consumers perceive the effective price of the credit as lower than it actually is – so their willingness to borrow exceeds the level that a fully informed consumer would accept. Effective demand is inflated above D_rational: the demand curve the market actually operates on, rather than the rational demand curve consumers would reveal with full information."
        },
        {
          pos:  1,
          text: "Because effective demand is inflated to D_biased, the market equilibrium settles at Q_biased – a quantity of BNPL credit greater than the rational level Q_rational. For the units between Q_rational and Q_biased, the marginal cost to the consumer (late fees, debt collection charges, credit score damage) exceeds the marginal benefit. The 25% missed repayment rate and 11% debt collection rate are direct evidence of this welfare loss – overconsumption driven by hidden costs."
        },
        {
          pos:  2,
          text: "FCA mandatory APR disclosure (from 2024) requires BNPL providers to display APR and total cost of credit at the checkout page, not just in terms and conditions. When consumers see the true cost, their perceived effective price rises to the actual level – effective demand shifts left from D_biased toward D_rational. Market equilibrium quantity falls, fewer BNPL transactions are completed at the margin, and the incidence of missed repayments and debt collection is reduced."
        }
      ],
      examBridge: '"Hidden BNPL costs inflated effective consumer demand from D_rational to D_biased – consumers perceived the product as cheaper than it was. Market equilibrium Q_biased exceeded the rational quantity: 25% of users missed repayments and 11% faced debt collection. FCA mandatory disclosure shifts demand left toward D_rational, reducing overconsumption – but only if APR is displayed prominently enough to influence decision-making at checkout."',

      prompts: [
        'Why does the absence of APR disclosure inflate consumer demand above D_rational?',
        'What happens at market equilibrium Q_biased that causes consumer welfare loss?',
        'How does FCA mandatory disclosure correct the information gap?'
      ],
      modelAnswers: [
        "Without APR disclosure, consumers perceive only the instalment payment – the visible price – not the true cost of credit including late fees and interest. The perceived effective price is lower than the true price, so consumers' willingness to borrow exceeds what they would accept if fully informed. Effective demand is D_biased, inflated above D_rational.",
        "At Q_biased, consumers are taking on more credit than they would if they had full information about the true cost. For each unit of BNPL credit between Q_rational and Q_biased, the marginal cost (late fees, debt collection, credit score harm) exceeds the marginal consumer benefit. This creates a welfare loss – consumers are systematically worse off from the overconsumption driven by the information gap.",
        "FCA mandatory APR disclosure requires providers to display APR and total cost prominently at checkout. When consumers see the true cost of credit, their perceived effective price rises to the actual level. This reduces their willingness to borrow at any given price – effective demand shifts left from D_biased toward D_rational, and market equilibrium quantity falls from Q_biased toward Q_rational."
      ],
      vocab: ['information gap', 'asymmetric information', 'overconsumption', 'rational demand', 'moral hazard', 'mandatory disclosure', 'FCA regulation', 'consumer surplus', 'debt harm', 'market failure']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Information Gaps
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Information Gaps',
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

  useInLandIt: 'Information gaps cause demand to deviate from the rational level – upward for overconsumption (hidden costs), downward for underproduction (adverse selection). Mandatory disclosure corrects the information but not the behaviour if present bias is strong. Always evaluate both the information correction AND the behavioural response in exam answers.',

  focusInLandIt: {
    context: 'Use specific evidence – the 25% missed repayment rate and the Which? checkout audit – to anchor your application to the real-world BNPL case, not just generic information gap theory.',
    chain:   'State the chain explicitly: hidden APR → consumers underestimate cost → D inflated from D_rational to D_biased → overconsumption at Q_biased → debt harm (missed repayments, debt collection).',
    extract: 'Apply the Akerlof lemons logic to BNPL: hidden information (APR) creates an adverse selection dynamic where high-risk borrowers are most likely to use BNPL, and lenders cannot price-discriminate effectively without disclosure. Use the extract to show how regulation corrects the information failure.',
    depends: 'Lead with salience as your top condition – if APR is buried in T&Cs rather than displayed prominently at checkout, the disclosure requirement cannot shift demand back to D_rational regardless of how well-designed the regulation is.',
    judge:   'State a clear position, use the mechanism (hidden APR → D_biased → disclosure → D shifts left), add the condition (salience, financial literacy, present bias), and acknowledge the limitation honestly – present bias may prevent disclosure from fully restoring rational demand.'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   Information Gaps: classify evidence on FCA BNPL mandatory disclosure
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Information Gaps',
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
    question:    'Which details in this extract most change whether mandatory APR disclosure is the most effective policy for correcting information gaps in the UK Buy Now Pay Later market?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'The FCA Financial Lives Survey 2022 found that [[scale|27% of UK adults used Buy Now Pay Later in the 12 months to January 2023]], with the market growing rapidly in the cost-of-living crisis – evidence of the scale of potential information gap harm.',
      'FCA analysis revealed that [[debt-harm|25% of BNPL users missed a 2022 repayment; 11% sent to collection]] – consistent with demand inflated above the rational level by hidden credit costs.',
      'Before FCA regulation in 2023–24, [[no-apr|BNPL was not FCA-regulated; APR was rarely disclosed at the point of sale]], confirming that the information gap existed during the period of the market\'s most rapid growth.',
      'When [[which-test|Which? tested BNPL checkouts (2022): no major provider showed APR]] – the information gap was structural by design, raising questions about whether voluntary disclosure would ever work without a regulatory mandate.',
      'Behavioural economics research shows that [[present-bias|small-print APR at checkout does not change decisions for many consumers]] – particularly those with present bias who focus on paying nothing today rather than future repayment costs.'
    ],

    evidence: {
      'scale':        { text: '27% of UK adults used Buy Now Pay Later in the 12 months to January 2023' },
      'debt-harm':    { text: '25% of BNPL users missed a 2022 repayment; 11% sent to collection' },
      'no-apr':       { text: 'BNPL was not FCA-regulated; APR was rarely disclosed at the point of sale' },
      'which-test':   { text: 'Which? tested BNPL checkouts (2022): no major provider showed APR' },
      'present-bias': { text: 'small-print APR at checkout does not change decisions for many consumers' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports mandatory disclosure',       tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against mandatory disclosure', tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',     tone: 'blue',  icon: '?' }
    ],

    correct: {
      'scale':        'supports',
      'debt-harm':    'supports',
      'no-apr':       'supports',
      'which-test':   'complicates',
      'present-bias': 'complicates'
    },

    explain: {
      'scale':        'The scale of BNPL usage (27% of UK adults) confirms that the market is large – and the information gap affects a significant proportion of the adult population. This supports mandatory disclosure as a necessary corrective measure given the breadth of potential harm.',
      'debt-harm':    'A 25% missed repayment rate and 11% sent to debt collection directly evidence overconsumption – demand inflated above the rational level by hidden APR. This strongly supports mandatory disclosure as a corrective mechanism to shift demand back toward D_rational.',
      'no-apr':       'The structural absence of APR disclosure before FCA regulation confirms that the information gap was not being corrected by market forces – voluntary disclosure had not emerged. This supports the case for mandatory regulatory intervention rather than relying on providers to self-correct.',
      'which-test':   'The Which? finding that no provider displayed APR at checkout – even when technically required to in T&Cs – shows the gap was by design. This complicates the case: it suggests providers were actively minimising disclosure, raising the question of whether mandatory disclosure requirements will be complied with without strong enforcement.',
      'present-bias': 'Behavioural evidence that small-print APR warnings do not change decisions for present-biased consumers complicates the case for mandatory disclosure as the most effective policy. Even with correct information displayed, consumers may not act on it – meaning additional behavioural interventions (£-cost warnings, spending caps) may be needed alongside disclosure.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The evidence of large-scale debt harm (25% missed repayment rate, 11% debt collection) strongly supports mandatory disclosure as a corrective mechanism – the information gap is real and materially harmful. However, the Which? evidence on structural non-disclosure and behavioural research on present bias both complicate the case: disclosure must be prominent and in consumer-friendly formats (£ cost terms, not just APR) to shift demand back toward D_rational."',

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
   Information Gaps: evaluate a mandatory disclosure claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Information Gaps',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether mandatory APR disclosure actually corrects the information gap.',
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
      id: 'bnpl-disclosure-effectiveness',
      claim: {
        icon:   '💳',
        prompt: 'Policy claim',
        text:   'Mandatory cost disclosure best corrects info gaps in UK BNPL.'
      },
      factors: [
        {
          id:    'salience',
          icon:  '👁️',
          label: 'Salience and prominence of the disclosure',
          why:   'Research shows that burying APR in terms and conditions has minimal impact on consumer behaviour. The disclosure must be prominent at the point of decision to shift demand back to D_rational. FCA rules requiring APR on the checkout page – not just in T&Cs – are more effective than generic financial product warnings that consumers ignore.'
        },
        {
          id:    'present-bias',
          icon:  '⏱️',
          label: 'Present bias and consumer behavioural barriers',
          why:   'Consumers with present bias discount future repayment costs – even when disclosed. Seeing "APR: 43.7%" means little to a consumer focused on paying £0 today. Disclosure corrects information gaps but does not correct cognitive biases. A more effective intervention may be to require providers to display the total cost in £ terms (e.g. "this will cost you £X more than paying now") to make the future cost concrete.'
        },
        {
          id:    'financial-literacy',
          icon:  '📚',
          label: 'Consumer financial literacy',
          why:   'APR is a technically complex concept: many consumers cannot convert APR into monthly cost or compare it with alternatives. If financial literacy is low, disclosure of APR may not change behaviour – consumers still choose the cheapest-seeming option. Financial education or simplified disclosure formats (total cost in £) may be needed alongside APR disclosure.'
        },
        {
          id:    'competitive-market',
          icon:  '🏪',
          label: 'Degree of competition among BNPL providers',
          why:   'If multiple BNPL providers compete, APR disclosure enables price comparison – driving providers to reduce hidden costs or improve transparency voluntarily. In a competitive market, disclosure is more effective because consumers can credibly switch to lower-cost alternatives. If one provider dominates (market power), disclosure reduces harm but does not restore competition.'
        },
        {
          id:    'alternative-policies',
          icon:  '⚖️',
          label: 'Effectiveness of alternative corrective policies',
          why:   'Mandatory disclosure is one of three approaches: (1) disclosure (FCA 2024 BNPL regulation), (2) interest rate caps (preventing the market failure at source), and (3) affordability checks (requiring lenders to verify ability to repay). Rate caps reduce harm but may restrict credit supply to creditworthy borrowers. Affordability checks are more targeted but add friction to low-value BNPL transactions.'
        },
        {
          id:    'enforcement',
          icon:  '🚔',
          label: 'FCA enforcement capacity and penalties',
          why:   'Disclosure requirements only deter non-compliance if enforcement is credible. FCA enforcement actions against BNPL providers have been rare – in part because the market was unregulated until 2024. Without credible penalties, providers may minimise disclosure without fully complying. Enforcement capacity directly determines whether D shifts back toward D_rational.'
        },
        {
          id:    'product-design',
          icon:  '🎨',
          label: 'BNPL product design and checkout flow',
          why:   'Dark patterns in checkout design (pre-checked BNPL boxes, small APR text, emphasis on "pay nothing today") actively suppress the salience of cost information. Even with mandatory disclosure, design that buries APR can render the requirement ineffective. Regulators may need to mandate specific design standards – not just content – to prevent circumvention of disclosure intent.'
        },
        {
          id:    'substitute-credit',
          icon:  '💰',
          label: 'Availability of lower-cost credit alternatives',
          why:   'Disclosure is more effective when consumers have credible lower-cost alternatives (credit unions, 0% credit cards, deferred salary). If BNPL is the only accessible credit for a consumer, disclosure of high APR may not change behaviour – because alternatives are inaccessible. Financial inclusion policy (credit union expansion) complements disclosure by making low-cost alternatives available.'
        }
      ],
      modelRanking: ['salience', 'present-bias', 'financial-literacy'],
      judgement: '"Mandatory APR disclosure corrects the information gap only if consumers can process and act on the information. The primary conditions are: salience (APR must appear prominently at checkout, not in T&Cs), financial literacy (consumers must understand what APR means in £ cost terms), and the availability of credible alternatives (so consumers can switch away from high-cost BNPL). Where these conditions hold, disclosure shifts D left toward D_rational; where present bias is strong and alternatives are scarce, more interventionist policies (interest caps, affordability checks) are needed."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Information Gaps: demand shifts left as disclosure corrects the info gap
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   S (supply of BNPL credit):  (130,390)→(490,30)   y = 520 - x
   D_biased:  (110,50)→(514,381)  slope ≈ 0.825  y = -40.75 + 0.825x  → E_biased  ≈ (307,213)
   D_rational: (110,100)→(449,381) slope ≈ 0.825  y = 9.25 + 0.825x   → E_rational ≈ (280,240)  */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Information Gaps',
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
    title:       'FCA mandates that BNPL providers display APR at the point of sale. Which diagram correctly shows the effect of disclosure on consumer demand for BNPL credit?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of mandatory APR disclosure. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      'd-left',
        correct:  true,
        title:   'Demand shifts left',
        sub:     'Mandatory disclosure corrects the information gap, reducing demand from the artificially inflated level to the rational level',
        why:     'When consumers see the true APR and cost of credit, the perceived effective price of BNPL rises to its actual level. Consumers\'s willingness to borrow at any given price falls – effective demand shifts left from D_biased to D_rational. Equilibrium quantity falls from Q_biased to Q_rational, reducing overconsumption and debt harm.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Consumer demand rises, increasing the quantity of BNPL taken out',
        why:     'A rightward demand shift would represent rising consumer income or preferences for BNPL – the opposite of what happens when APR is disclosed. Disclosure reduces perceived attractiveness of BNPL credit by revealing its true cost; it does not make BNPL more desirable.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'BNPL providers reduce credit supply at every price',
        why:     'APR disclosure requirements affect the information available to consumers (the demand side), not the cost or willingness of providers to supply credit. Supply of BNPL credit is unchanged by disclosure requirements – the correction mechanism works through demand, not supply.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Credit supply expands, lowering the market interest rate',
        why:     'Supply shifting right means providers offer more credit at every price – this would represent falling funding costs or new market entrants. Mandatory disclosure does not change supply conditions; it changes the information available to consumers on the demand side.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '💳',
    text:  'FCA regulation (2024): BNPL providers must display APR. Previously: 25% of users missed repayments; 11% sent to debt collection.',
    dataPoints: [
      { icon: '❓', text: 'Without disclosure: consumers underestimate true credit cost → demand inflated' },
      { icon: '📉', text: 'With APR disclosure: demand falls to rational level' },
      { icon: '✅', text: 'FCA: reduces debt harm without banning BNPL market' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – FCA mandatory APR disclosure correcting information gap in BNPL credit market',
    xLabel:    'Quantity of BNPL credit',
    yLabel:    'Effective price / cost of credit',

    lines: [
      /* S – supply of BNPL credit, unchanged – blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S', labelX: 494, labelY: 28, labelFill: '#2563eb' },
      /* D_biased – inflated demand before disclosure – red downward-sloping */
      { x1: 110, y1: 50,  x2: 514, y2: 381, stroke: '#dc2626', strokeWidth: 2.5,
        label: 'D_biased', labelX: 470, labelY: 381, labelFill: '#dc2626' },
      /* D_rational – rational demand after disclosure – green downward-sloping */
      { x1: 110, y1: 100, x2: 449, y2: 381, stroke: '#059669', strokeWidth: 2.5,
        label: 'D_rational', labelX: 453, labelY: 381, labelFill: '#059669' }
    ],

    /* Guide lines + tick labels */
    guides: [
      { x1: 100, y1: 213, x2: 307, y2: 213, tickLeft: 'P_biased',   tickLeftY: 216 },
      { x1: 100, y1: 240, x2: 280, y2: 240, tickLeft: 'P_rational', tickLeftY: 243 },
      { x1: 307, y1: 213, x2: 307, y2: 400, tickBottom: 'Q_biased',   tickBottomX: 307 },
      { x1: 280, y1: 240, x2: 280, y2: 400, tickBottom: 'Q_rational', tickBottomX: 280 }
    ],

    /* Shift arrow: D_biased → D_rational, pointing left */
    shiftArrow: { x1: 410, y1: 120, x2: 350, y2: 120, stroke: '#059669' },

    eqDots: [
      {
        cx: 307, cy: 213, fill: '#dc2626',
        initLabel: 'Overconsumption', initLabel2: 'equilibrium (Q_biased)', initLabelX: 314, initLabelY: 208
      },
      {
        cx: 280, cy: 240, fill: '#059669',
        newLabel: 'Rational', newLabel2: 'equilibrium (Q_rational)', newLabelX: 228, newLabelY: 248
      }
    ],

    legend: [
      { color: '#dc2626', text: 'D_biased = Inflated demand (true cost hidden – before disclosure)' },
      { color: '#059669', text: 'D_rational = True rational demand (APR displayed – after disclosure)' },
      { color: '#2563eb', text: 'S = Supply of BNPL credit (unchanged)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of FCA mandatory APR disclosure.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    zones: [
      { id: 'shift',     label: 'Shift label',                   pctX: 55,  pctY: 20,   pctW: 26 },
      { id: 'over-eq',   label: 'Overconsumption equilibrium',   pctX: 58,  pctY: 42,   pctW: 24 },
      { id: 'rat-eq',    label: 'Rational equilibrium',          pctX: 40,  pctY: 48,   pctW: 22 },
      { id: 'over-price',label: 'Price at overconsumption level', pctX: 0.5, pctY: 43,   pctW: 16 },
      { id: 'rat-qty',   label: 'Rational quantity',             pctX: 43,  pctY: 93.5, pctW: 18 }
    ],

    chips: [
      { id: 'shift-chip',    text: 'Demand shifts left (disclosure corrects gap)', icon: '←', zone: 'shift',      correct: true  },
      { id: 'over-eq-chip',  text: 'Overconsumption equilibrium (Q_biased)',       icon: '●', zone: 'over-eq',    correct: true  },
      { id: 'rat-eq-chip',   text: 'Rational equilibrium (Q_rational)',            icon: '●', zone: 'rat-eq',     correct: true  },
      { id: 'price-chip',    text: 'Price at overconsumption level',               icon: '−', zone: 'over-price', correct: true  },
      { id: 'rat-qty-chip',  text: 'Rational quantity (Q_rational < Q_biased)',    icon: '↓', zone: 'rat-qty',    correct: true  },
      { id: 'dem-right',     text: 'Demand shifts right',                          icon: '→', zone: null,         correct: false },
      { id: 'sup-left',      text: 'Supply shifts left',                           icon: '←', zone: null,         correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['information gap', 'asymmetric information', 'overconsumption', 'rational demand', 'mandatory disclosure', 'FCA regulation', 'consumer surplus', 'debt harm', 'market failure', 'present bias', 'D_biased', 'D_rational'],

    parts: [
      {
        num:         1,
        title:       'Explain why D_biased sits above D_rational',
        prompt:      'Why is D_biased above D_rational?',
        maxChars:    240,
        modelAnswer: 'The information gap makes BNPL appear cheaper than it is – APR is not shown at checkout. Consumers\' perceived price is lower than the true price, so their effective WTP (and borrowing) exceeds the rational level. D_biased reflects overconsumption driven by hidden costs; D_rational reflects what demand would be with full APR disclosure.'
      },
      {
        num:         2,
        title:       'Explain the shift from D_biased to D_rational',
        prompt:      'What happens when disclosure moves D from D_biased to D_rational?',
        maxChars:    240,
        modelAnswer: 'Equilibrium shifts from Q_biased to Q_rational: fewer BNPL transactions are taken out, at a slightly lower effective market price. Consumer harm falls: fewer missed repayments and debt collection events. The welfare triangle between D_biased and D_rational represents the consumer harm previously absorbed as debt costs – this is eliminated when demand falls to the rational level.'
      },
      {
        num:         3,
        title:       'Evaluate the limitations of mandatory disclosure',
        prompt:      'What are the limitations of mandatory disclosure?',
        maxChars:    240,
        modelAnswer: 'Disclosure only works if consumers process the information and adjust behaviour. Behavioural economics research shows that displaying APR in small print at checkout does not change decisions for many consumers – particularly those with present bias. More effective disclosure (clear cost-of-credit in £ terms, comparison with alternatives) may be needed to fully correct the information gap. A ban on late fees or an interest cap may be needed as a complementary policy.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Explain why information gap inflates demand',
      'State that Q_biased > Q_rational (overconsumption)',
      'Explain disclosure mechanism (D shifts left)',
      'Evaluate limitations of disclosure (behavioural barriers)'
    ],

    examAnswer: '"Hidden BNPL costs inflated effective demand from D_rational to D_biased – consumers perceived the product as cheaper than its true cost, leading to overconsumption (Q_biased). FCA mandatory APR disclosure corrects the information gap, shifting demand left to D_rational and reducing debt harm. However, behavioural barriers (present bias, anchoring to the small monthly payment) mean disclosure alone may be insufficient – and complementary policies such as standardised cost-of-credit warnings or interest rate caps may be needed to fully restore rational demand."'
  }
};

/* ---- link-extract.js ---- */
/* ============================================================
   ECONOS – Link It · Read the Extract station data
   Information Gaps: adverse selection and moral hazard
   ============================================================ */

window.ECONOS_LINK_EXTRACT = {
  topic:   'Information Gaps',
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
  instruction: 'Read the passage carefully. Use asymmetric information concepts to interpret each question – distinguish between adverse selection (before the transaction) and moral hazard (after it).',

  passage: {
    title: 'Extract: Information failure in UK insurance and used car markets',
    source: 'Adapted from: Akerlof (1970); ABI UK Insurance Market Statistics (2022); Financial Conduct Authority Consumer Research',
    text: 'George Akerlof\'s 1970 paper "The Market for Lemons" showed that asymmetric information – where sellers know more about product quality than buyers – can cause markets to collapse. In the used car market, buyers cannot distinguish good cars from "lemons" (defective cars), so they offer only an average price. Sellers of good-quality cars find the average price too low and withdraw from the market. What remains is a pool of progressively worse cars – a classic adverse selection spiral.<br><br>A parallel problem affects UK private health insurance. Insurance companies cannot perfectly observe a buyer\'s health risk: applicants know far more about their own lifestyle and health history. Consequently, the sickest people are most willing to pay high premiums, skewing the insured pool toward high-risk individuals. The FCA estimates that 12% of UK motor insurance policies are sold to drivers who have provided inaccurate information – not all deliberately, but the effect is the same: the insured pool is riskier than the premium assumes.<br><br>Once insured, a second information problem emerges: moral hazard. An insured driver may drive less carefully than before, knowing the insurer bears the cost. A landlord with buildings insurance may delay maintenance, since the insurance covers fire or flood damage. The insurer cannot observe these post-contract behaviour changes.'
  },

  questions: [
    {
      id: 'ig-extract-q1',
      question: 'Akerlof\'s "Market for Lemons" describes which type of information failure, and what is the mechanism by which the market deteriorates?',
      options: [
        'Moral hazard – buyers of used cars take more risks after purchase because the cost of breakdown falls on the seller',
        'Adverse selection – asymmetric information causes buyers to offer only average prices, which drives high-quality sellers out of the market, leaving a pool of progressively worse cars',
        'Regulatory failure – the government has not required sellers to disclose vehicle quality, so the market produces the wrong mix of goods',
        'A negative externality – the seller\'s poor car imposes costs on other road users who are not party to the transaction'
      ],
      correct: 1,
      explanation: 'This is adverse selection: asymmetric information (sellers know quality, buyers don\'t) leads to market deterioration before the transaction occurs. Buyers rationally offer an average price reflecting the mix of good and bad cars. Good-car sellers find this unacceptable and exit. Now the pool is worse, the average price falls further, more good sellers exit – the market "unravels" toward only lemons. This is why Akerlof described information asymmetry as causing markets to fail, not just individual transactions.'
    },
    {
      id: 'ig-extract-q2',
      question: 'The FCA finding that "12% of motor insurance policies are sold to drivers who provided inaccurate information" – whether deliberately or not – describes what economic consequence?',
      options: [
        'The free rider problem – some drivers use roads without contributing to the costs their driving imposes',
        'A positive externality – careful drivers generate benefits for other road users that the insurance company does not capture',
        'Adverse selection – the insured pool is riskier than the average driver, because risky drivers have stronger incentives to insure, making premiums rise for all policyholders',
        'Moral hazard – insured drivers change their driving behaviour after taking out a policy'
      ],
      correct: 2,
      explanation: 'This is adverse selection in insurance: the people most likely to claim (high-risk drivers) are the most motivated to insure (and to shade the truth to get a lower premium), while low-risk drivers either don\'t bother or are priced out. The insured pool therefore contains a disproportionately high share of risky drivers relative to the general population. Insurers respond by raising premiums to reflect the actual (riskier) pool – which prices out more low-risk drivers and worsens the spiral. The 12% inaccuracy rate is the mechanism driving this selection effect.'
    },
    {
      id: 'ig-extract-q3',
      question: 'The extract describes two distinct information problems. Which correctly distinguishes adverse selection from moral hazard?',
      options: [
        'Adverse selection occurs after a contract is signed; moral hazard occurs before – when one party misrepresents information during the application',
        'Both adverse selection and moral hazard are forms of deliberate fraud – they differ only in whether the deception is financial or behavioural',
        'Adverse selection is a pre-contract problem (the wrong people enter the market because of hidden characteristics); moral hazard is a post-contract problem (behaviour changes because one party no longer bears the full cost of their actions)',
        'Adverse selection affects product markets like used cars; moral hazard only affects financial markets like insurance'
      ],
      correct: 2,
      explanation: 'The key distinction is timing relative to the contract. Adverse selection arises before the contract: asymmetric information about hidden characteristics (the car\'s quality, the driver\'s health risk) means the wrong people/products end up in the market. Moral hazard arises after the contract: once insured, an individual has reduced incentive to avoid the risk (the insurer now bears the cost). Both are information failures – the insurer cannot observe either the pre-existing characteristic or the post-contract behaviour change – but they require different policy solutions (screening/signalling for adverse selection; monitoring/co-payments for moral hazard).'
    }
  ]
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for info_gaps
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Information Gaps',
  estTime: '15–20 minutes',
  goal:    'Bridge your information gaps knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "Use the UK Buy Now Pay Later market to apply the information gap framework – how asymmetric information about true credit costs inflates demand above the rational level, causing overconsumption and consumer harm, and whether mandatory disclosure can correct this.",
    heroKey: 'heroBehavioural',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Explain how information asymmetry causes demand to deviate from the rational level',
      'Build the causal chain from hidden credit costs to overconsumption',
      'Apply economic theory to real-world BNPL extracts including the Akerlof lemons model',
      'Evaluate whether mandatory disclosure or alternative policies are most effective'
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
   Information Gaps: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Information Gaps',
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
      id: 'bnpl-disclosure-judgement',
      claim: {
        icon:   '💳',
        prompt: 'Policy claim',
        text:   'Mandatory cost disclosure is the most effective policy for correcting information gaps in the UK Buy Now Pay Later market.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '27% of UK adults used BNPL in 2023; 25% missed repayments; 11% faced debt collection. None of the major providers displayed APR at checkout (Which?, 2022).' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Hidden APR → consumers underestimate true cost → effective demand inflated from D_rational to D_biased → overconsumption at Q_biased → debt harm.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'FCA mandatory APR disclosure → demand shifts left from D_biased to D_rational → Q falls to Q_rational → debt harm reduced.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on salience of disclosure, consumer financial literacy, and whether present bias prevents consumers acting on information.' }
      ],
      cloze: 'Information gaps in the BNPL market inflate consumer demand from D_rational to D_biased because consumers [1] the true cost of credit when APR is not displayed at checkout. This creates [2] at Q_biased – where the marginal cost of the last unit of credit (hidden fees, debt collection) exceeds the marginal benefit. FCA mandatory disclosure corrects this by [3], shifting demand left toward D_rational. The policy works best when consumers [4] the disclosed information to compare costs – requiring [5] of the APR warning rather than burying it in terms and conditions. However, disclosure alone is insufficient when consumers suffer from [6]: even with full information, present bias leads them to discount future repayment costs. In this case, [7] or [8] may be more effective complementary instruments.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-under',   text: 'underestimate',       correct: true  },
            { id: 'b1-over',    text: 'overestimate',        correct: false },
            { id: 'b1-correct', text: 'correctly estimate',  correct: false },
            { id: 'b1-calc',    text: 'rationally calculate', correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-over',    text: 'overconsumption',      correct: true  },
            { id: 'b2-under',   text: 'underproduction',      correct: false },
            { id: 'b2-power',   text: 'market power',         correct: false },
            { id: 'b2-alloc',   text: 'allocative efficiency', correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-apr',     text: 'requiring APR to be displayed prominently at checkout', correct: true  },
            { id: 'b3-ban',     text: 'banning BNPL products',                                correct: false },
            { id: 'b3-sub',     text: 'subsidising repayments',                               correct: false },
            { id: 'b3-cap',     text: 'capping consumer spending',                            correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-process', text: 'can process and act on',              correct: true  },
            { id: 'b4-ignore',  text: 'ignore',                              correct: false },
            { id: 'b4-mis',     text: 'misinterpret in favour of borrowing', correct: false },
            { id: 'b4-del',     text: 'delegate to lenders',                 correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-clear',   text: 'clear and prominent display',  correct: true  },
            { id: 'b5-tech',    text: 'technical specification',       correct: false },
            { id: 'b5-vol',     text: 'voluntary industry code',       correct: false },
            { id: 'b5-news',    text: 'monthly newsletter',            correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-pb',      text: 'present bias',             correct: true  },
            { id: 'b6-rat',     text: 'perfect rationality',       correct: false },
            { id: 'b6-inc',     text: 'high income elasticity',    correct: false },
            { id: 'b6-sup',     text: 'supply-side constraints',   correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-cap',     text: 'an interest rate cap',         correct: true  },
            { id: 'b7-tax',     text: 'a higher BNPL tax',            correct: false },
            { id: 'b7-sub',     text: 'a subsidy for borrowers',      correct: false },
            { id: 'b7-dereg',   text: 'a deregulation of credit markets', correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-afford',  text: 'mandatory affordability checks', correct: true  },
            { id: 'b8-free',    text: 'free financial advice',          correct: false },
            { id: 'b8-corp',    text: 'reduced corporation tax',        correct: false },
            { id: 'b8-export',  text: 'export subsidies',               correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',  text: 'Mandatory disclosure always fully corrects information gaps regardless of consumer behaviour',                         correct: false },
          { id: 'op-useful',  text: 'Mandatory disclosure is most effective when disclosures are prominent, consumers are financially literate, and alternatives are available', correct: true  },
          { id: 'op-ban',     text: 'BNPL market failures are best corrected by banning BNPL entirely',                                                   correct: false },
          { id: 'op-irrel',   text: 'Information gaps are irrelevant – consumers always make rational choices with or without disclosure',                 correct: false }
        ]
      },
      examBridge: '"BNPL information gaps inflated demand above the rational level: 25% of users missed repayments and 11% faced debt collection – overconsumption driven by hidden APR. FCA mandatory disclosure (2024) shifts D left toward D_rational by requiring APR at checkout. However, present bias means disclosure alone may not fully restore rational demand – consumers with strong present bias discount future repayment costs even when disclosed. Complementary policies (standardised £-cost warnings, affordability checks, credit union expansion) address the remaining behavioural and supply-side barriers."'
    }
  ]
};

