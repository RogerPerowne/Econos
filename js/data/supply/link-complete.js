/* ============================================================
   ECONOS – Link It · Complete page data
   Supply
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Supply',
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

  useInLandIt: 'A leftward supply shift raises equilibrium price and reduces quantity. The split between price rise and quantity fall depends on PED for the output – inelastic demand concentrates the shock into higher prices; elastic demand concentrates it in lower output. Both mechanisms should feature in a Land It response.',

  focusInLandIt: {
    context: 'Use specific evidence – the 400% gas price rise, the British Steel furnace suspension, and the 14.8% food producer price inflation – to anchor your application to the real-world case. Note that hedging and EBRS complicate the general picture.',
    chain:   'State the chain explicitly: energy costs rise → marginal production costs rise → supply curve shifts left from S₁ to S₂ → shortage at P₁ → new equilibrium at higher P₂ and lower Q₂.',
    diagram: 'Draw both supply curves (S₁ and S₂), label both equilibria (Q₁, P₁ and Q₂, P₂), and show the leftward shift arrow between S₁ and S₂. Keep demand unchanged. Note the higher price and lower output at the new equilibrium.',
    depends: 'Lead with energy intensity as your condition – the supply shift is only large where energy is a substantial fraction of total costs. Then add PED for the output (determines whether the shock hits price or quantity more) and international competition (determines whether domestic producers can pass costs on or lose market share).',
    judge:   'State a clear position, use the mechanism (S shifts left → shortage → new equilibrium at higher P and lower Q), add the condition (energy intensity, PED, international competition), and acknowledge the limitation (government intervention and hedging moderated the shock for some producers).'
  },

  nextUrl: TopicLoader.routes.land('intro')
};
