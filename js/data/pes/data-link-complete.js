/* ============================================================
   ECONOS — Link It · Complete page data
   Price Elasticity of Supply
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Price Elasticity of Supply',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'calc',    label: 'Calculate It',        max: 6, color: '#3B82F6' },
    { id: 'depends', label: 'It depends on',      max: 3, color: '#2563eb' },
    { id: 'judge',   label: 'Make the judgement', max: 8, color: '#0891b2' }
  ],

  overallMessages: [
    { min: 85, text: 'Excellent thinking structure — you\'re ready to write.' },
    { min: 70, text: 'Strong thinking structure — you\'re nearly ready to write.' },
    { min: 55, text: 'Good foundations — review your weakest step before Land It.' },
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
      { min: 60, text: 'Good — review the complicating factors' },
      { min: 0,  text: 'Evidence classification needs work' }
    ],
    chain: [
      { min: 100, text: 'Perfect causal chain' },
      { min: 50,  text: 'Clear causality — check the missing step' },
      { min: 0,   text: 'The causal chain needs work' }
    ],
    diagram: [
      { min: 80, text: 'Strong diagram reading' },
      { min: 55, text: 'Good — check the outcome for P and Q' },
      { min: 0,  text: 'Diagram work needs more attention' }
    ],
    depends: [
      { min: 80, text: 'Strong evaluation conditions identified' },
      { min: 50, text: 'Good — one key condition missed' },
      { min: 0,  text: 'Review the key evaluation conditions' }
    ],
    judge: [
      { min: 80, text: 'Excellent judgement structure' },
      { min: 60, text: 'Judgement is strong but could be more precise' },
      { min: 0,  text: 'Judgement structure needs more precision' }
    ]
  },

  useInLandIt: 'When PES is low, demand shocks raise price far more than quantity. In exam responses, the PES coefficient (≈0.2 for UK rental housing) should anchor the analysis of WHY supply cannot respond — reference planning lead times and landlord exit explicitly.',

  focusInLandIt: {
    context: 'Use specific evidence — the 745,000 net migration figure, 9.4% rent rise, and 1.3% listing growth — to anchor your application to the real-world case, not just generic PES theory.',
    chain:   'State the chain explicitly: demand surge → excess demand at existing rents → price signal → slow supply response (PES ≈ 0.2, 24–36 month lead time) → rents stay elevated.',
    diagram: 'Draw the near-vertical supply curve (PES ≈ 0.2), shift demand right, and show that E₂ is almost directly above E₁ — a large price rise and tiny quantity rise.',
    depends: 'Lead with construction lead times as your primary condition — this is the structural root cause of low PES. Add landlord exit as the compounding factor that worsened the short-run position.',
    judge:   'State a clear position, use the mechanism (near-vertical S, E₂ above E₁, 9.4% rent rise), add the condition (planning reform needed over medium run), and acknowledge the landlord exit complication honestly.'
  },

  nextUrl: TopicLoader.buildUrl('land_intro.html')
};
