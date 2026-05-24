/* ============================================================
   ECONOS — Link It · Complete page data
   Positive Externalities
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Positive Externalities',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'diagram', label: 'Diagram connector',  max: 9, color: '#7c3aed' },
    { id: 'diagram', label: 'Diagram connector',  max: 9, color: '#7c3aed' },
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

  useInLandIt: 'Positive externalities cause underproduction: Q_market < Q*. Direct provision shifts effective supply right. The welfare case requires MEB to exceed the fiscal cost of provision. Always compare direct provision with partial subsidy and information campaigns — and note that ideological barriers (vaccine hesitancy) limit the effectiveness of price-based interventions.',

  focusInLandIt: {
    context: 'Use specific evidence — the 24,000 measles cases per 1% coverage point and the 8% private uptake figure — to anchor your application to the real-world case, not just generic externality theory.',
    chain:   'State the chain explicitly: MPB excludes MEB → consumer undervalues vaccination at Q_market → MSB > MPB throughout → Q_market < Q* → deadweight welfare loss.',
    diagram: 'Draw all four curves (MPB, MSB, MPC/S₁, S₂), label both equilibria (Q_m/P_m and Q*/P*), and identify the MEB gap (vertical distance between MSB and MPB). Shade the welfare-gain-forgone triangle between MSB, MPC and the vertical at Q_m.',
    depends: 'Lead with MEB size as your condition — if the external benefit is small or unmeasurable, the case for full public provision is weak regardless of delivery capacity. Then evaluate whether the unvaccinated group is price-sensitive or ideologically resistant.',
    judge:   'State a clear position, use the mechanism (effective supply shifts right from S₁ to S₂, DWL eliminated), add the condition (MEB measurability / price sensitivity / hesitancy), and explain the limitation honestly.'
  },

  nextUrl: TopicLoader.buildUrl('land_intro.html')
};
