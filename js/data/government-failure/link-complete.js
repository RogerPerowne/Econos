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
