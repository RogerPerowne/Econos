/* ============================================================
   ECONOS — Link It · Complete page data
   Market Equilibrium
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Market Equilibrium',
  stations: [
    { id: 'context', label: 'Use the context',     max: 5,  color: '#059669' },
    { id: 'chain',   label: 'Build the chain',     max: 3,  color: '#f59e0b' },
    { id: 'predict', label: 'Predict the Outcome', max: 12, color: '#EC4899' },
    { id: 'diagram', label: 'Diagram connector',   max: 9,  color: '#7c3aed' },
    { id: 'depends', label: 'It depends on',       max: 3,  color: '#2563eb' },
    { id: 'judge',   label: 'Make the judgement',  max: 8,  color: '#0891b2' }
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
      { min: 55, text: 'Good — check the outcome for rent and quantity' },
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

  useInLandIt: 'A demand increase shifts the demand curve right, creating a shortage at the original price and driving price upward via the price mechanism. With inelastic housing supply (PES ≈ 0.4), the new equilibrium involves a large rent rise and only a modest increase in quantity — demonstrating that the price mechanism is limited when supply is structurally constrained. Rent controls treat the symptom (high price) but not the cause (inelastic supply), and risk worsening the shortage by reducing landlord incentives to supply.',

  focusInLandIt: {
    context: 'Use specific figures from the extract — the 46% rent-to-earnings ratio, the Stockholm 15% supply fall, PES ≈ 0.4 — to anchor your application. Do not rely on generic supply-and-demand language.',
    chain:   'State the chain explicitly: rising incomes and population growth shift D right → shortage at P₁ → rents rise (price signal) → slow supply response (inelastic PES) → new equilibrium at P₂ > P₁ with Q₂ only slightly above Q₁.',
    diagram: 'Draw a steep supply curve to reflect inelastic housing supply. Show D₁ and D₂, label both equilibria (E₁ and E₂), drop dashed lines to both axes, and label P₁, P₂, Q₁, Q₂. The large rise in P relative to the small rise in Q is the key insight — make it visible.',
    depends: 'Lead with landlord exit risk as your primary condition — if landlords withdraw supply under a rent ceiling, the policy worsens the shortage it was designed to cure. Counterbalance with the PES point: inelastic supply means the supply-destruction effect of the ceiling is weaker than in more elastic markets.',
    judge:   'State a clear position, use the mechanism (demand shifts right → price signal → slow supply response), add the key condition (PES and landlord exit risk), and explain the limitation honestly. Conclude that supply-side reform — planning liberalisation, social housing — addresses the root cause more effectively than a price ceiling.'
  },

  nextUrl: TopicLoader.buildUrl('land_intro.html')
};
