/* ============================================================
   ECONOS — Link It · Complete page data
   Price Elasticity of Demand
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Price Elasticity of Demand',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'diagram', label: 'Diagram connector',  max: 9, color: '#7c3aed' },
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

  useInLandIt: 'When fuel duty is raised on an inelastic good (PED ≈ −0.15), supply shifts left, the consumer price rises significantly and quantity demanded falls only a little — so the tax is primarily a revenue instrument rather than an effective emissions-reduction tool in the short run. In the long run, as electric vehicles become viable substitutes and PED rises toward −0.6, the same tax becomes progressively more effective at cutting emissions.',

  focusInLandIt: {
    context: 'Use specific figures from the extract — the 27% emissions share, PED −0.15, the £25bn revenue and the 3.8% vs 1.2% income shares — to anchor application to the real-world case, not just generic PED theory.',
    chain:   'State the chain explicitly: duty levied on producers → supply shifts left → consumer price rises → with PED −0.15, quantity falls only a little → revenue rises but emissions barely fall.',
    diagram: 'Draw both supply curves (S₁ and S₂) and the steep demand curve (D), label both equilibria (Q₁/P₁ and Q₂/P₂), and make clear the small horizontal shift versus the large vertical price movement — this is the visual signature of inelastic demand.',
    depends: 'Lead with short-run PED as your primary condition — if demand is highly inelastic, the price mechanism cannot deliver meaningful emissions reduction regardless of the tax rate in the near term.',
    judge:   'State a clear position (fuel duty is effective in the long run but limited in the short run), use the mechanism (supply shift, inelastic demand, revenue vs emissions trade-off), add the condition (PED rising as EVs become substitutes), and explain the limitation honestly.'
  },

  nextUrl: TopicLoader.buildUrl('land_intro.html')
};
