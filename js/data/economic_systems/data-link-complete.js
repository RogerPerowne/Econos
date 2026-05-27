/* ============================================================
   ECONOS – Link It · Complete page data
   Economic Systems
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Economic Systems',
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
      { min: 60, text: 'Good – review the challenging evidence' },
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

  useInLandIt: 'Free markets use the price mechanism to allocate resources efficiently through the profit incentive and consumer sovereignty – but market failures in public goods, externalities and information-asymmetry sectors mean state intervention is needed. A mixed economy like the UK\'s combines both, achieving better outcomes than either extreme. The efficiency advantage of free markets depends critically on the extent of market failures, secure property rights, and a sufficient income distribution.',

  focusInLandIt: {
    context: 'Use specific comparative data – North Korea\'s $1,800 GDP per capita versus South Korea, Cuba\'s healthcare outcomes, the NHS efficiency evidence – to anchor your application in real-world evidence rather than abstract theory.',
    chain:   'State the chain explicitly: price signals → profit incentive → productive efficiency; consumer sovereignty → allocative efficiency; Hayek\'s knowledge problem → why central planning fails to replicate this.',
    extract: 'Use the North Korea/South Korea divergence and Cuba/UK comparison from the extract to apply the free market vs command economy framework. When citing comparative evidence, always explain the mechanism – not just the statistic.',
    depends: 'Lead with market failure extent as your condition – where public goods, externalities or information asymmetry are significant, the price mechanism systematically fails and the efficiency case for free markets collapses in that sector.',
    judge:   'State a clear position, use the mechanism (price mechanism → efficiency), add the condition (market failures / property rights / income distribution), and acknowledge the normative dimension – the optimal mix between markets and state depends on social values, not just technical efficiency.'
  },

  nextUrl: TopicLoader.buildUrl('land_intro.html')
};
