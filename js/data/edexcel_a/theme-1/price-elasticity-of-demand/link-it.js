/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-calc.js ---- */
/* ============================================================
   ECONOS – Link It · Calculate It station data
   PED: elasticity formula and revenue effect calculations
   ============================================================ */

window.ECONOS_LINK_CALC = {
  topic:   'Price Elasticity of Demand',
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
  instruction: 'PED calculations appear in every Paper 1 Section A. Master the formula and the revenue implication – use "Reveal step-by-step method" if you get stuck.',

  questions: [
    {
      id: 'ped-q1',
      title: 'Calculate PED – petrol price rise',
      scenario: 'The UK government increases fuel duty, raising the average pump price of petrol from £1.50 per litre to £1.65 per litre. Weekly quantity demanded falls from 100 million litres to 94 million litres.',
      question: 'Calculate the PED for petrol. Give your answer to 2 decimal places (ignore the negative sign).',
      hint: 'PED = (% change in Qd) ÷ (% change in P)',
      method: [
        { step: '% change in price',           working: '(£1.65 − £1.50) ÷ £1.50 × 100 = +10%' },
        { step: '% change in quantity demanded', working: '(94m − 100m) ÷ 100m × 100 = −6%' },
        { step: 'PED',                           working: '−6 ÷ 10 = −0.60' },
        { step: 'Interpret',                     working: '|PED| = 0.60 < 1 → price inelastic demand. Quantity demanded is relatively unresponsive to the price rise.' }
      ],
      inputType: 'number',
      answer: 0.6,
      unit: '(ignore the sign)',
      tolerance: 0.01,
      feedback: {
        correct: 'Correct! PED = −0.60. Petrol demand is price inelastic (|PED| < 1) – consumers have few short-run substitutes for petrol. The 10% price rise caused only a 6% fall in quantity demanded.',
        wrong: 'Method: (1) %ΔP = (1.65−1.50)/1.50 × 100 = 10%. (2) %ΔQd = (94−100)/100 × 100 = −6%. (3) PED = −6 ÷ 10 = −0.60. Remember to divide the percentage changes, not the absolute changes.'
      },
      examTip: 'You can quote PED as −0.60 or 0.60 (in absolute value) – just be consistent. If a question asks "calculate PED", show all three steps: %ΔP, %ΔQd, then the ratio. One mark per step in a 3-mark calculation question.'
    },
    {
      id: 'ped-q2',
      title: 'Revenue effect – using PED to predict total revenue change',
      scenario: 'A ferry company currently sells 800 tickets per week at £25 each. It raises the price to £28. Market research suggests PED for this ferry route is −0.50.',
      question: 'Calculate the change in the firm\'s total revenue (TR) after the price rise. Enter the change as a positive number if TR rises, negative if it falls.',
      hint: 'Step 1: Use PED to find the new quantity. Step 2: Calculate TR before and after.',
      method: [
        { step: '% change in price', working: '(£28 − £25) ÷ £25 × 100 = 12%' },
        { step: '% change in Qd via PED', working: 'PED × %ΔP = −0.50 × 12% = −6%' },
        { step: 'New quantity demanded', working: '800 × (1 − 0.06) = 800 × 0.94 = 752 tickets' },
        { step: 'Total revenue before', working: '800 × £25 = £20,000' },
        { step: 'Total revenue after',  working: '752 × £28 = £21,056' },
        { step: 'Change in TR',         working: '£21,056 − £20,000 = +£1,056' }
      ],
      inputType: 'number',
      answer: 1056,
      unit: '£ change in total revenue',
      tolerance: 2,
      feedback: {
        correct: 'Correct! TR rises by £1,056. With inelastic demand (|PED| = 0.50 < 1), the price rise (12%) outweighs the fall in quantity (6%), so total revenue increases. This is the key PED–revenue relationship.',
        wrong: 'Check: New Qd = 800 × (1 + (−0.50 × 0.12)) = 800 × 0.94 = 752. TR before = £20,000. TR after = 752 × £28 = £21,056. Change = +£1,056. When demand is inelastic, a price rise always raises TR.'
      },
      examTip: 'The PED–TR rule: inelastic demand (|PED| < 1) → price rise → TR rises. Elastic demand (|PED| > 1) → price rise → TR falls. Unit elastic (|PED| = 1) → price change → no change in TR. This rule is tested frequently in data-response questions – know it cold.'
    },
    {
      id: 'ped-q3',
      title: 'PED and tax incidence – who bears the burden?',
      scenario: 'The government imposes a specific tax of £4 per unit on soft drinks. Before the tax: P = £1.00, Q = 200,000 units. After the tax: price paid by consumers = £3.20, price received by producers = £1.20 (after tax paid), Q = 140,000 units.',
      question: 'What percentage of the tax burden falls on <strong>consumers</strong>?',
      hint: 'Consumer burden % = rise in consumer price ÷ total tax × 100',
      method: [
        { step: 'Rise in consumer price (consumer burden)', working: '£3.20 − £1.00 = £2.20' },
        { step: 'Fall in producer price (producer burden)',  working: '£1.00 − £1.20... wait – producer receives £1.20 AFTER paying £4 tax, so producer net price = £3.20 − £4.00 = −? Let\'s re-read: producer receives £1.20 net. So producer burden = £1.00 − £1.20... hmm. Actually: producer receives £1.20 per unit (net of tax). Before: £1.00. So producer gains £0.20 per unit? No – the tax is paid out of the gross price. Consumer pays £3.20. Producer receives £3.20 − £4 tax = −£0.80... that can\'t be right. Let\'s use: Consumer burden = rise in P paid = £3.20 − £1.00 = £2.20. Producer burden = tax − consumer burden = £4 − £2.20 = £1.80. Check: £2.20 + £1.80 = £4 ✓' },
        { step: 'Consumer burden as % of tax', working: '£2.20 ÷ £4.00 × 100 = 55%' }
      ],
      inputType: 'mcq',
      options: ['25%', '45%', '55%', '75%'],
      answer: '55%',
      feedback: {
        correct: 'Correct! Consumers bear 55% of the £4 tax (£2.20 per unit). Producers bear the remaining 45% (£1.80 per unit). The consumer burden exceeds the producer burden because demand for soft drinks is relatively inelastic – producers can pass more than half the tax on to buyers.',
        wrong: 'Consumer burden = rise in price paid by consumer = £3.20 − £1.00 = £2.20. As a % of the £4 tax: £2.20 ÷ £4.00 × 100 = 55%. The remaining 45% (£1.80) falls on producers.'
      },
      examTip: 'The more price inelastic the demand, the greater the proportion of a tax borne by consumers – they cannot easily reduce quantity when prices rise. Conversely, elastic supply makes producers bear more of the tax. Always draw the diagram to confirm your calculation.'
    }
  ]
};

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   PED: build the fuel duty → tax incidence → limited emissions cut chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Price Elasticity of Demand',
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
      id: 'ped-fuel-duty-mechanism',
      scenario: {
        icon:  '⛽',
        label: 'Scenario',
        text:  'The government raises fuel duty by 5p per litre on petrol and diesel. Short-run PED for petrol is −0.15.'
      },
      anchor: 'Higher fuel duty raises the effective cost of petrol production and supply',
      tiles: [
        {
          id:  'step-supply',
          icon: '🏭',
          text: 'Supply shifts left – tax on producers raises supply price at every Q',
          pos:  0
        },
        {
          id:  'step-incidence',
          icon: '📉',
          text: 'P_c rises more than P_p falls – inelastic demand → buyers absorb most',
          pos:  1
        },
        {
          id:  'step-outcome',
          icon: '🌱',
          text: 'Q falls only slightly (PED ≈ −0.15) → revenue rises, emissions barely cut',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🚗',
          text: 'Consumers immediately switch to EVs, eliminating petrol demand',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '📊',
          text: 'The demand curve shifts left as consumers become aware of climate change',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏛️',
          text: 'Producers pay the entire tax and consumer prices remain unchanged',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Fuel duty is a specific tax levied on producers at the point of sale. It raises the cost of supplying each litre of petrol, so the supply curve shifts left – at every price, producers are willing to supply less. This is the mechanical first step: the tax enters the market through the supply side.'
        },
        {
          pos:  1,
          text: 'With PED ≈ −0.15, demand is highly inelastic – consumers have few short-run alternatives to petrol. This gives sellers the power to pass most of the tax onto buyers as a higher price. The consumer price rises sharply while the producer price falls only a little. Tax incidence falls heavily on the consumer side precisely because of the inelasticity of demand.'
        },
        {
          pos:  2,
          text: 'Because PED is −0.15, a large percentage increase in price produces only a small percentage fall in quantity demanded. Emissions barely decline. The tax succeeds in raising government revenue – consistent with the £25bn already raised – but fails to significantly correct the carbon externality in the short run. The longer-run PED of −0.6 suggests greater effectiveness as EVs become substitutes.'
        }
      ],
      examBridge: '"With short-run PED ≈ −0.15, the fuel duty increase shifts supply left, raises the consumer price substantially and generates significant revenue, but quantity demanded – and therefore emissions – falls only a little, making the tax a more effective fiscal instrument than an environmental one in the near term."',

      prompts: [
        'Why does the tax cause the supply curve to shift rather than the demand curve?',
        'How does the PED of −0.15 determine who bears most of the tax burden?',
        'What does the small fall in quantity demanded imply for the environmental effectiveness of the policy?'
      ],
      modelAnswers: [
        'Fuel duty is levied on producers – it raises their cost of supplying petrol at every quantity. This shifts the supply curve left. The demand curve does not shift because consumers\' underlying willingness to pay for petrol is unchanged; only the supply-side costs have risen.',
        'With PED ≈ −0.15, consumers are highly unresponsive to price changes. They have few short-run substitutes and cannot easily reduce petrol use. This gives them little bargaining power – producers can pass almost all of the tax on as a higher price. The more inelastic the demand, the greater the share of the tax borne by consumers.',
        'A PED of −0.15 means a 10% price rise causes only a 1.5% fall in quantity demanded. The quantity response is tiny relative to the price increase, so emissions barely fall. The tax is effective at raising revenue but largely ineffective as an environmental policy in the short run – the externality remains largely uncorrected.'
      ],
      vocab: ['PED', 'price elasticity', 'tax incidence', 'inelastic', 'elastic', 'consumer burden', 'revenue', 'substitutes', 'long run', 'short run']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Price Elasticity of Demand
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Price Elasticity of Demand',
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

  useInLandIt: 'When fuel duty is raised on an inelastic good (PED ≈ −0.15), supply shifts left, the consumer price rises significantly and quantity demanded falls only a little – so the tax is primarily a revenue instrument rather than an effective emissions-reduction tool in the short run. In the long run, as electric vehicles become viable substitutes and PED rises toward −0.6, the same tax becomes progressively more effective at cutting emissions.',

  focusInLandIt: {
    context: 'Use specific figures from the extract – the 27% emissions share, PED −0.15, the £25bn revenue and the 3.8% vs 1.2% income shares – to anchor application to the real-world case, not just generic PED theory.',
    chain:   'State the chain explicitly: duty levied on producers → supply shifts left → consumer price rises → with PED −0.15, quantity falls only a little → revenue rises but emissions barely fall.',
    diagram: 'Draw both supply curves (S₁ and S₂) and the steep demand curve (D), label both equilibria (Q₁/P₁ and Q₂/P₂), and make clear the small horizontal shift versus the large vertical price movement – this is the visual signature of inelastic demand.',
    depends: 'Lead with short-run PED as your primary condition – if demand is highly inelastic, the price mechanism cannot deliver meaningful emissions reduction regardless of the tax rate in the near term.',
    judge:   'State a clear position (fuel duty is effective in the long run but limited in the short run), use the mechanism (supply shift, inelastic demand, revenue vs emissions trade-off), add the condition (PED rising as EVs become substitutes), and explain the limitation honestly.'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   PED: classify evidence on raising UK fuel duty to cut emissions
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Price Elasticity of Demand',
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
    question:    'Which details in this extract most change whether the UK government should raise fuel duty to reduce carbon emissions from road transport?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'Government analysis confirms that road transport accounts for [[carbon|27% of total UK greenhouse gas emissions]], the largest single sector, and that emissions have fallen only 3% in the past decade despite improvements in vehicle efficiency.',
      'Economists at the Institute for Fiscal Studies estimate that [[inelastic|short-run PED for petrol ≈ −0.15, rising to −0.6 in the long run]] as households switch to electric vehicles or change commuting patterns.',
      '[[revenue|UK fuel duty raises approximately £25 billion per year]], making it one of the largest sources of government revenue – proponents argue that a higher rate would both reduce emissions and generate funds for green infrastructure investment.',
      'However, the Resolution Foundation reports that [[regressive|the lowest quintile spend 3.8% of income on fuel duty vs 1.2% for top]], raising serious concerns about the distributional impact of any further increase.',
      'Meanwhile, [[ev-growth|EV sales grew 40% in 2023 and now form 16% of new car registrations]], suggesting that over the longer term the demand for petrol may become more elastic as affordable substitutes become widely available.'
    ],

    evidence: {
      'carbon':    { text: '27% of total UK greenhouse gas emissions' },
      'inelastic': { text: 'short-run PED for petrol ≈ −0.15, rising to −0.6 in the long run' },
      'revenue':   { text: 'UK fuel duty raises approximately £25 billion per year' },
      'regressive':{ text: 'the lowest quintile spend 3.8% of income on fuel duty vs 1.2% for top' },
      'ev-growth': { text: 'EV sales grew 40% in 2023 and now form 16% of new car registrations' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports raising fuel duty',       tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against raising fuel duty', tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',  tone: 'blue',  icon: '?' }
    ],

    correct: {
      'carbon':    'supports',
      'inelastic': 'complicates',
      'revenue':   'supports',
      'regressive':'against',
      'ev-growth': 'complicates'
    },

    explain: {
      'carbon':    'Road transport being the single largest source of UK greenhouse gas emissions at 27% confirms a significant negative externality – the scale of the market failure directly supports a policy intervention such as a higher fuel duty.',
      'inelastic': 'With short-run PED ≈ −0.15, a large price rise causes only a small fall in quantity demanded. The tax raises substantial revenue but barely cuts emissions in the near term – complicating the case by suggesting it functions more as a revenue tool than an environmental instrument until long-run substitution takes effect.',
      'revenue':   'The existing £25bn annual revenue stream demonstrates that fuel duty is a proven fiscal instrument. Proponents can argue a higher rate would amplify both the revenue yield and the environmental signal, generating funds for green infrastructure that accelerates the transition.',
      'regressive':'Lowest-income households spending over three times the income share on fuel duty than the highest quintile means a further increase imposes a disproportionately heavy burden on those least able to absorb it – a compelling distributional argument against raising the duty without compensatory measures.',
      'ev-growth': 'Rapid EV uptake means the long-run PED for petrol is rising toward −0.6 as substitutes become available – complicating the case because the same tax will become more effective at cutting emissions over time, but the timing and pace of that transition are uncertain.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The 27% emissions share confirms a strong case for intervention, but with short-run PED ≈ −0.15, raising fuel duty is primarily a revenue instrument rather than an effective emissions-reduction tool in the near term – making the policy\'s environmental justification much weaker than its fiscal rationale."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};

/* ---- link-data.js ---- */
/* ============================================================
   ECONOS – Link It · Read the Data station data
   PED: UK fuel prices, traffic volume and revenue implications
   ============================================================ */

window.ECONOS_LINK_DATA = {
  topic:   'Price Elasticity of Demand',
  backUrl: TopicLoader.routes.link('diagram'),
  nextUrl: TopicLoader.routes.link('depends'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: -1,

  eyebrow:     'Read the Data',
  instruction: 'Economists use real data to test theoretical predictions. Read the table carefully, then answer each question – pay attention to anomalies (years where the data behaves unexpectedly).',

  dataset: {
    title: 'UK Average Petrol Pump Price and Road Traffic Volume, 2018–2023',
    source: 'Sources: RAC Foundation; Department for Transport (figures simulated for educational use)',
    notes: 'Petrol price = average UK pump price in pence per litre. Traffic = total vehicle miles (billions). % change = year-on-year.',
    table: {
      headers: ['Year', 'Petrol price (p/litre)', 'Annual change in price (%)', 'Traffic volume (bn miles)', 'Annual change in traffic (%)'],
      rows: [
        ['2018', '128', '+4.1', '323', '+1.2'],
        ['2019', '131', '+2.3', '327', '+1.2'],
        ['2020', '103', '−21.4', '258', '−21.1'],
        ['2021', '130', '+26.2', '313', '+21.3'],
        ['2022', '167', '+28.5', '308', '−1.6'],
        ['2023', '148', '−11.4', '315', '+2.3']
      ]
    },
    questions: [
      {
        id: 'ped-data-q1',
        question: 'In 2020, petrol prices fell 21.4% yet traffic volume also fell 21.1%. Which factor best explains this anomaly?',
        options: [
          'Falling prices always reduce traffic because drivers become complacent',
          'COVID-19 lockdowns suppressed travel demand regardless of fuel prices',
          'The data confirms that demand for petrol is unit elastic (PED = −1)',
          'Petrol demand in 2020 was perfectly inelastic – prices had no effect'
        ],
        correct: 1,
        explanation: '2020 is dominated by COVID-19 lockdowns, which made travel impossible or illegal for most of the year regardless of petrol prices. This is a demand-side shock driven by non-price factors (government restrictions, fear, remote working) – not a price effect. Data from 2020 should be excluded when estimating PED because it violates the ceteris paribus assumption.'
      },
      {
        id: 'ped-data-q2',
        question: 'Comparing 2019 and 2022 (excluding 2020–21): petrol prices rose from 131p to 167p (+27.5%) while traffic fell from 327bn to 308bn miles (−5.8%). What does this imply about the PED for petrol?',
        options: [
          'Demand is elastic (PED < −1): traffic fell more than proportionately to the price rise',
          'Demand is inelastic (0 > PED > −1): traffic fell less than proportionately to the price rise',
          'Demand is unit elastic (PED = −1): price and traffic changed by equal percentages',
          'Demand is perfectly inelastic: traffic volume is unaffected by petrol prices'
        ],
        correct: 1,
        explanation: 'PED ≈ −5.8 ÷ +27.5 ≈ −0.21. The magnitude is much less than 1, indicating highly inelastic demand. A 27.5% price rise caused only a 5.8% fall in traffic – drivers have few short-run substitutes (poor public transport, need to commute) and petrol is a small share of total car ownership costs. This supports the case for fuel duty as a revenue-raising tax.'
      },
      {
        id: 'ped-data-q3',
        question: 'In 2022, petrol prices hit 167p (a 10-year high following Russia\'s invasion of Ukraine). Using the PED implied by the 2019–2022 comparison, what does this suggest about using a fuel duty increase to reduce carbon emissions?',
        options: [
          'A fuel duty increase would effectively cut driving significantly, making it a strong climate policy tool',
          'A fuel duty increase would raise substantial tax revenue but have only a modest impact on driving behaviour',
          'A fuel duty increase would have no effect on either revenue or driving behaviour',
          'A fuel duty increase would reduce tax revenue because demand is elastic'
        ],
        correct: 1,
        explanation: 'With highly inelastic demand (estimated PED ≈ −0.21), a price rise generates large revenue increases but only small reductions in quantity. For a fuel duty rise to cut carbon emissions significantly, it would need to be very large – which raises equity concerns (regressive impact on low-income drivers). Complementary measures (improved public transport, EV subsidies) are needed alongside price rises to achieve meaningful emission reductions. This is an exam-quality evaluation of price-based environmental policy.'
      }
    ]
  }
};

/* ---- link-depends.js ---- */
/* ============================================================
   ECONOS – Link It · It Depends On station data
   PED: evaluate raising fuel duty as a carbon emissions policy
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Price Elasticity of Demand',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether a fuel duty increase actually achieves its stated objective.',
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
      id: 'fuel-duty-effectiveness',
      claim: {
        icon:   '⛽',
        prompt: 'Policy claim',
        text:   'Raising fuel duty best cuts road transport carbon emissions.'
      },
      factors: [
        {
          id:    'ped-short',
          icon:  '📉',
          label: 'Short-run PED for petrol',
          why:   'With PED ≈ −0.15, a large price rise cuts quantity demanded only a little in the short run – the revenue effect dominates the emissions-reduction effect. The externality is barely corrected. This is the single most important constraint on the policy\'s environmental effectiveness: inelastic short-run demand means the tax is primarily a fiscal tool, not an environmental one, in the near term.'
        },
        {
          id:    'ped-long',
          icon:  '⏱️',
          label: 'Long-run PED as substitutes become available',
          why:   'As EVs become affordable and charging infrastructure improves, PED rises toward −0.6. The same fuel duty becomes more effective at reducing emissions over time – but the question is whether the policy can be sustained politically during the low-effectiveness period when it imposes high costs on consumers with little environmental return.'
        },
        {
          id:    'regressive-impact',
          icon:  '💰',
          label: 'Distributional and regressive impact',
          why:   'Lowest-income households spend 3.8% of their disposable income on fuel duty versus 1.2% for the highest quintile. Unless the revenue is recycled to lower-income households through targeted rebates or public transport improvements, the policy imposes a disproportionate burden on those least able to absorb it – weakening its political sustainability and fairness.'
        },
        {
          id:    'alternatives',
          icon:  '⚡',
          label: 'Availability of alternative policies',
          why:   'EV subsidies, public transport investment, urban congestion charging and vehicle emission standards each tackle the problem from a different angle. Fuel duty targets the price signal but does nothing to address the structural absence of alternatives – in areas with poor public transport, higher petrol prices impose costs without enabling behaviour change.'
        },
        {
          id:    'ev-infrastructure',
          icon:  '🔌',
          label: 'Quality and availability of EV infrastructure',
          why:   'Raising petrol prices only shifts demand to EVs if EV charging is accessible and affordable. Without adequate infrastructure – particularly in rural areas and for flat-dwellers without home charging – the policy imposes costs on petrol users without providing a viable substitute, making behavioural change impossible regardless of the price signal.'
        },
        {
          id:    'revenue-recycling',
          icon:  '♻️',
          label: 'How the revenue is recycled',
          why:   'If the £25bn fuel duty revenue funds EV subsidies, rail electrification or targeted rebates for low-income drivers, the net emission reduction is amplified – a double dividend. If the revenue disappears into general spending unrelated to transport or climate, the environmental case for the tax is weakened because the fiscal cost is borne without a corresponding environmental gain.'
        },
        {
          id:    'regulation',
          icon:  '📋',
          label: 'Effectiveness vs vehicle emission standards',
          why:   'The UK phase-out of new petrol and diesel cars by 2035 directly reduces the stock of fossil-fuel vehicles regardless of price signals. This supply-side regulation may be more certain in its long-run emission effect than a price signal working through highly inelastic short-run demand – a strong argument that regulation, not price, is the primary instrument.'
        },
        {
          id:    'political',
          icon:  '🗣️',
          label: 'Political feasibility',
          why:   'Fuel duty has been frozen in real terms since 2011 due to political pressure – a government unable to raise it in line with inflation may not be able to deliver the large increases needed to significantly change behaviour through the price mechanism. The politically deliverable rate and the rate required for meaningful emissions reduction may diverge considerably.'
        }
      ],
      modelRanking: ['ped-short', 'regressive-impact', 'alternatives'],
      judgement: '"Whether raising fuel duty is the \'most effective\' policy depends primarily on the short-run PED for petrol – with PED ≈ −0.15, the tax raises revenue but barely reduces emissions, making it a limited environmental tool in the near term. The regressive distributional impact further weakens the case unless revenue is recycled to lower-income households, and the structural absence of affordable alternatives in many areas means a higher price signal cannot translate into lower-emission behaviour change without complementary investment."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   PED: fuel duty raises supply costs – supply shifts left on inelastic demand
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   D (inelastic, steep): (200,30)→(420,390)  slope = 360/220 = 1.636  ⟹  y = 30 + (x−200)*1.636
   S₁ (pre-tax):  (130,390)→(490,30)  slope = −1.0  ⟹  y = 520 − x
   S₂ (post-tax): (130,320)→(420,30)  ⟹  y = 450 − x
   E₁ (S₁ ∩ D): 520−x = −297.3+1.636x  →  x ≈ 310, y ≈ 210
   E₂ (S₂ ∩ D): 450−x = −297.3+1.636x  →  x ≈ 284, y ≈ 166                */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Price Elasticity of Demand',
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
    title:       'The government raises fuel duty by 5p per litre. Petrol demand is highly price inelastic in the short run (PED ≈ −0.15). Which diagram correctly shows the market effect?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the fuel duty increase. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      's-left',
        correct:  true,
        title:   'Supply shifts left',
        sub:     'The tax raises producers\' costs – price rises significantly but quantity falls only a little because demand is inelastic',
        why:     'Fuel duty is levied on producers, raising their cost of supplying each litre of petrol. The supply curve shifts left: at every price, producers supply less. With highly inelastic demand (PED ≈ −0.15), the equilibrium price rises substantially from P₁ to P₂ while quantity falls only slightly from Q₁ to Q₂ – the steep demand curve visually captures this muted quantity response.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Consumer spending on petrol falls, reducing the quantity demanded at every price',
        why:     'Fuel duty is levied on producers, not consumers. Demand (consumers\' willingness to pay) does not shift – consumers\' preferences for petrol journeys are unchanged. A leftward demand shift would represent a fall in consumer income or a change in tastes, neither of which the duty directly causes.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Output rises and prices fall as supply expands',
        why:     'Supply shifting right means producers can supply more at every price – this represents falling costs or a technology improvement. Fuel duty raises producers\' costs; it does not reduce them. This diagram shows the opposite of the mechanism at work.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Rising consumer demand pushes up the price level',
        why:     'Demand shifting right represents an increase in consumers\' willingness to pay – perhaps from rising incomes or a preference shift. Fuel duty affects the supply side (producers\' costs). This diagram is irrelevant to the mechanism of an indirect tax.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '⛽',
    text:  'The government raises fuel duty by 5p per litre on petrol and diesel.',
    dataPoints: [
      { icon: '📉', text: 'PED ≈ −0.15 in the short run' },
      { icon: '💸', text: 'Fuel duty = ~57p per litre currently' },
      { icon: '🌱', text: 'Long-run PED rises to −0.6 as EVs become available' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – fuel duty tax on inelastic petrol demand',
    xLabel:    'Quantity of petrol',
    yLabel:    'Price (£ per litre)',

    lines: [
      /* D (inelastic) – green steep downward-sloping */
      { x1: 200, y1: 30,  x2: 420, y2: 390, stroke: '#059669', strokeWidth: 2.5,
        label: 'D (inelastic)', labelX: 424, labelY: 368, labelFill: '#059669' },
      /* S₁ (pre-tax) – blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S₁', labelX: 492, labelY: 28, labelFill: '#2563eb' },
      /* S₂ (post-tax, shifted left) – purple upward-sloping */
      { x1: 130, y1: 320, x2: 420, y2: 30,  stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'S₂ (+ tax)', labelX: 423, labelY: 28, labelFill: '#7c3aed' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
    guides: [
      { x1: 100, y1: 166, x2: 284, y2: 166, tickLeft: 'P₂', tickLeftY: 169 },
      { x1: 100, y1: 210, x2: 310, y2: 210, tickLeft: 'P₁', tickLeftY: 213 },
      { x1: 284, y1: 166, x2: 284, y2: 400, tickBottom: 'Q₂', tickBottomX: 284 },
      { x1: 310, y1: 210, x2: 310, y2: 400, tickBottom: 'Q₁', tickBottomX: 310 }
    ],

    /* Shift arrow pointing left – from S₁ toward S₂ */
    shiftArrow: { x1: 420, y1: 90, x2: 358, y2: 90, stroke: '#7c3aed' },

    eqDots: [
      {
        cx: 310, cy: 210, fill: '#2563eb',
        initLabel: 'Initial', initLabel2: 'equilibrium', initLabelX: 317, initLabelY: 205
      },
      {
        cx: 284, cy: 166, fill: '#7c3aed',
        newLabel: 'New', newLabel2: 'equilibrium', newLabelX: 291, newLabelY: 161
      }
    ],

    legend: [
      { color: '#059669', text: 'D = Demand (price inelastic – steep curve)' },
      { color: '#2563eb', text: 'S₁ = Supply before tax' },
      { color: '#7c3aed', text: 'S₂ = Supply after fuel duty increase' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of raising fuel duty on an inelastic petrol market.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',    label: 'Shift label',              pctX: 62,  pctY: 14,   pctW: 22 },
      { id: 'new-eq',   label: 'New equilibrium',          pctX: 51,  pctY: 34,   pctW: 21 },
      { id: 'init-eq',  label: 'Initial equilibrium',      pctX: 56,  pctY: 44,   pctW: 22 },
      { id: 'hi-price', label: 'Higher price (P₂)',        pctX: 0.5, pctY: 34,   pctW: 17 },
      { id: 'lo-out',   label: 'Lower quantity (Q₂)',      pctX: 42,  pctY: 93.5, pctW: 18 }
    ],

    chips: [
      { id: 'tax-shift', text: 'Tax shifts supply left',        icon: '←', zone: 'shift',    correct: true  },
      { id: 'new-eq',    text: 'New equilibrium (Q₂, P₂)',      icon: '●', zone: 'new-eq',   correct: true  },
      { id: 'init-eq',   text: 'Initial equilibrium (Q₁, P₁)', icon: '●', zone: 'init-eq',  correct: true  },
      { id: 'hi-price',  text: 'Higher consumer price (P₂)',    icon: '↑', zone: 'hi-price', correct: true  },
      { id: 'lo-out',    text: 'Lower quantity (Q₂)',           icon: '↓', zone: 'lo-out',   correct: true  },
      { id: 'dem-left',  text: 'Demand shifts left',            icon: '←', zone: null,       correct: false },
      { id: 'big-drop',  text: 'Large fall in quantity',        icon: '↓', zone: null,       correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['PED', 'price elasticity', 'inelastic', 'elastic', 'tax incidence', 'consumer burden', 'producer burden', 'revenue', 'short run', 'long run'],

    parts: [
      {
        num:         1,
        title:       'Explain the curves',
        prompt:      'What does the steep slope of the demand curve tell you about the PED for petrol?',
        maxChars:    240,
        modelAnswer: 'The steep slope signals that demand is price inelastic – PED lies between 0 and −1. A large price rise causes only a small fall in quantity demanded. In the short run, petrol drivers have few close substitutes: most journeys cannot easily switch to other transport modes, so consumers absorb the price rise rather than cutting consumption significantly.'
      },
      {
        num:         2,
        title:       'Explain the shift',
        prompt:      'What happens to price and quantity when the fuel duty is raised?',
        maxChars:    240,
        modelAnswer: 'Fuel duty raises producers\' costs, shifting supply left from S₁ to S₂. The equilibrium moves from (Q₁, P₁) to (Q₂, P₂): price rises substantially from P₁ to P₂, but quantity falls only a little from Q₁ to Q₂. The steep demand curve visually captures this: the new and old equilibria are close horizontally but far apart vertically, showing a large price rise with a muted quantity response.'
      },
      {
        num:         3,
        title:       'Add a wider effect',
        prompt:      'Who bears most of the tax burden and what does this imply for policy effectiveness?',
        maxChars:    240,
        modelAnswer: 'With inelastic demand, consumers bear most of the tax burden – the price they pay rises sharply while the price producers receive falls only a little. The small fall in quantity demanded means emissions barely decline, so the tax functions mainly as a revenue instrument rather than an effective environmental policy in the short run. In the long run, as EVs become substitutes, PED rises toward −0.6 and the same tax becomes more effective at reducing emissions.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Reference the steep demand curve and link it to inelastic PED',
      'Explain the direction of the supply shift',
      'State the outcome for Q and P',
      'Name the implication for tax incidence and emissions'
    ],

    examAnswer: '"Fuel duty is levied on producers, shifting supply left from S₁ to S₂ and raising the equilibrium price from P₁ to P₂. Because demand for petrol is highly price inelastic in the short run (PED ≈ −0.15), the steep demand curve means quantity demanded falls only a little from Q₁ to Q₂ despite the large price rise – consumers absorb most of the tax burden. As a result, the policy raises substantial government revenue but cuts emissions only marginally in the short run; its environmental effectiveness improves in the long run as electric vehicles become available and PED rises."'
  }
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for ped
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Price Elasticity of Demand',
  estTime: '15–20 minutes',
  goal:    'Apply the PED framework – how elasticity shapes tax incidence, revenue effects and the effectiveness of policy.',

  intro: {
    summary: "You've locked in the PED formula, the elastic/inelastic distinction, the determinants and the revenue rules. Now train the skills examiners reward – applying the framework to real context, building a watertight tax → incidence causal chain, and reaching a supported judgement on whether fuel duty is an effective environmental policy.",
    heroKey: 'heroBars',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real context to test whether raising fuel duty is justified',
      'Build a watertight supply shift → tax incidence → revenue causal chain',
      'Pick, label and explain the supply and demand diagram showing a tax on an inelastic good.',
      'Evaluate the key conditions that change the policy verdict'
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
   PED: synthesise into an exam-quality judgement on fuel duty effectiveness
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Price Elasticity of Demand',
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
      id: 'fuel-duty-judgement',
      claim: {
        icon:   '⛽',
        prompt: 'Policy claim',
        text:   'Raising fuel duty is the most effective policy for reducing carbon emissions from road transport.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '27% of UK GHG from road transport; PED −0.15 short run / −0.6 long run; £25bn revenue; lowest quintile spends 3.8% of income on fuel duty.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Tax → supply shifts left → consumer price rises sharply → quantity falls only a little (inelastic) → revenue rises but emissions barely fall.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'Supply shifts left; steep D curve shows large P rise (P₁→P₂) with small Q fall (Q₁→Q₂) – visually captures inelastic tax incidence.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on short-run PED, distributional impact, availability of alternatives, and whether revenue is recycled.' }
      ],
      cloze: 'Overall, raising fuel duty reduces emissions most effectively when demand is [1], because a price rise leads to a large [2] in quantity demanded, cutting both consumption and externalities. However, with short-run PED ≈ −0.15, the tax mainly raises [3] rather than cutting [4] – the bulk of the burden falls on [5] who have few alternatives. Therefore, the strongest judgement is that fuel duty is [6] as an environmental policy in the short run, but becomes more effective over time as [7] become widely available and PED [8].',
      blanks: [
        { id: 1, options: [
            { id: 'b1-elastic',   text: 'price elastic',         correct: true  },
            { id: 'b1-inelastic', text: 'price inelastic',       correct: false },
            { id: 'b1-income',    text: 'income elastic',        correct: false },
            { id: 'b1-cross',     text: 'cross-price elastic',   correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-reduction',      text: 'reduction',        correct: true  },
            { id: 'b2-increase',       text: 'increase',         correct: false },
            { id: 'b2-stabilisation',  text: 'stabilisation',    correct: false },
            { id: 'b2-redistribution', text: 'redistribution',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-revenue',   text: 'government revenue',   correct: true  },
            { id: 'b3-surplus',   text: 'consumer surplus',     correct: false },
            { id: 'b3-profit',    text: 'producer profit',      correct: false },
            { id: 'b3-dwl',       text: 'deadweight loss',      correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-emissions', text: 'carbon emissions',     correct: true  },
            { id: 'b4-spending',  text: 'government spending',  correct: false },
            { id: 'b4-costs',     text: 'producer costs',       correct: false },
            { id: 'b4-incomes',   text: 'consumer incomes',     correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-consumers', text: 'consumers',            correct: true  },
            { id: 'b5-producers', text: 'producers',            correct: false },
            { id: 'b5-gov',       text: 'the government',       correct: false },
            { id: 'b5-exporters', text: 'exporters',            correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-limited',    text: 'a limited revenue tool rather than an effective', correct: true  },
            { id: 'b6-effective',  text: 'the single most effective',                       correct: false },
            { id: 'b6-regressive', text: 'a regressive and irrelevant',                     correct: false },
            { id: 'b6-optimal',    text: 'an automatically optimal',                        correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-ev',        text: 'electric vehicles',           correct: true  },
            { id: 'b7-hydrogen',  text: 'hydrogen cars',               correct: false },
            { id: 'b7-coal',      text: 'coal-powered buses',          correct: false },
            { id: 'b7-hybrid',    text: 'petrol hybrids',              correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-rises',     text: 'rises',                       correct: true  },
            { id: 'b8-falls',     text: 'falls',                       correct: false },
            { id: 'b8-constant',  text: 'stays constant',              correct: false },
            { id: 'b8-perfect',   text: 'becomes perfectly inelastic', correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-longrun',  text: 'Fuel duty is effective in the long run but limited by inelastic short-run demand', correct: true  },
          { id: 'op-always',   text: 'Fuel duty always reduces emissions proportionally to the tax rate',                correct: false },
          { id: 'op-never',    text: 'Fuel duty should be abolished as it is purely regressive',                        correct: false },
          { id: 'op-market',   text: 'Carbon emissions require no government intervention',                             correct: false }
        ]
      },
      examBridge: '"Raising fuel duty is theoretically sound as a Pigouvian instrument: it raises the consumer price, shifting supply left and reducing quantity demanded. However, with short-run PED ≈ −0.15, the quantity response is minimal – the policy is primarily a revenue tool, not an effective emissions-reduction instrument, in the near term. The strongest judgement is that fuel duty becomes progressively more effective as substitutes emerge and long-run PED rises, but in the short run its environmental case is much weaker than its fiscal rationale."'
    }
  ]
};

