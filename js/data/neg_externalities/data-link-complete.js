/* ============================================================
   ECONOS — Link It · Complete page data
   Negative Externalities
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Negative Externalities',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'extract', label: 'Read the Extract',   max: 3, color: '#8B5CF6' },
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

  useInLandIt: 'A Pigouvian tax corrects negative externalities by shifting effective supply from MPC to MSC, reducing output from Q_market to Q* and eliminating the deadweight welfare loss. However, it works best when the MEC is accurately measured and demand is elastic enough that the tax genuinely reduces output rather than mainly raising consumer prices.',

  focusInLandIt: {
    context: 'Use specific evidence — the £20bn MEC and ETS revenue figures — to anchor your application to the real-world case, not just generic externality theory.',
    chain:   'State the chain explicitly: MPC excludes MEC → firm overproduces at Q_market → MSC > MSB between Q* and Q_market → deadweight welfare loss.',
    diagram: 'Draw all three curves (MSB, MPC, MSC), label both equilibria (Q_market/P_market and Q*/P*), and shade the DWL triangle between MSC, MSB and the vertical at Q_market.',
    depends: 'Lead with MEC accuracy as your condition — if the tax is miscalibrated, the whole correction mechanism fails regardless of how the rest of the policy is designed.',
    judge:   'State a clear position, use the mechanism (MPC → MSC shift, DWL eliminated), add the condition (MEC measurability / elasticity / leakage), and explain the limitation honestly.'
  },

  nextUrl: TopicLoader.buildUrl('land_intro.html')
};
