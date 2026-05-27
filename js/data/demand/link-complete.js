/* ============================================================
   ECONOS – Link It · Complete page data
   Demand
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Demand',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'diagram', label: 'Diagram connector',  max: 9, color: '#7c3aed' },
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

  useInLandIt: 'A rightward demand shift raises both equilibrium price and quantity. However, the strength of the effect depends on income elasticity (YED > 1 amplifies it) and whether consumer confidence sustains spending – two conditions that should anchor any evaluation of income-driven demand changes.',

  focusInLandIt: {
    context: 'Use specific evidence – the £190bn savings release, the +7 confidence index and the 60% booking surge – to anchor your application to the real-world case, not just generic demand theory.',
    chain:   'State the chain explicitly: income/confidence rise → demand curve shifts right from D₁ to D₂ → excess demand at P₁ → price rises to P₂ and quantity rises to Q₂ as firms expand output.',
    diagram: 'Draw and label both demand curves (D₁ and D₂), label both equilibria (Q₁, P₁ and Q₂, P₂), and show the rightward shift arrow between D₁ and D₂. Keep supply unchanged.',
    depends: 'Lead with income elasticity (YED > 1) as your condition – if leisure services were income inelastic, the same income rise would produce a much smaller demand shift. Then add confidence and substitute availability as the second and third conditions.',
    judge:   'State a clear position, use the mechanism (D shifts right → excess demand → new equilibrium at higher P and Q), add the condition (YED, confidence, substitute availability), and acknowledge the distributional limitation (concentrated savings among higher-income households).'
  },

  nextUrl: TopicLoader.routes.land('intro')
};
