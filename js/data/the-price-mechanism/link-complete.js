/* ============================================================
   ECONOS – Link It · Complete page data
   The Price Mechanism
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'The Price Mechanism',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'predict', label: 'Predict the Outcome', max: 4, color: '#7c3aed' },
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
    predict: [
      { min: 80, text: 'Strong outcome prediction' },
      { min: 55, text: 'Good – check the direction of one variable' },
      { min: 0,  text: 'Prediction skills need more practice' }
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

  useInLandIt: 'The price mechanism performs three functions simultaneously: rationing (P rises → WTP determines allocation), signalling (P rise → producers plan to expand) and incentivising (profit margin → investment). The strongest answers apply all three functions and then evaluate limitations (PES, equity, market power).',

  focusInLandIt: {
    context: 'Use specific evidence – 19.2% food inflation, 14% farmland price rise, +3% wheat planting – to anchor your application to the 2021–23 food price case, not just generic price mechanism theory.',
    chain:   'State the chain explicitly: supply shock → supply shifts left → excess demand at P₁ → P rises to P₂ → rationing (existing buyers priced out) → signalling (farmers plan expansion) → incentivising (farmland investment rises).',
    predict: 'Apply the three functions of the price mechanism to novel shocks (London housing, gas prices). Always state which function is operating – rationing (P rations existing supply), signalling (P signals producers), incentivising (profit attracts entry) – and note which time horizon each applies to.',
    depends: 'Lead with agricultural PES as your key condition – the rationing function works immediately but the incentive and signalling functions are delayed by the growing season. This is the most exam-relevant limitation of the price mechanism in food markets.',
    judge:   'State a clear position (informationally efficient but not equitably efficient), use the mechanism (supply left → P rises → three functions), add the condition (PES determines speed of supply response), and explain the limitation (price rationing excludes low-income households, requiring welfare support).'
  },

  nextUrl: TopicLoader.routes.land('intro')
};
