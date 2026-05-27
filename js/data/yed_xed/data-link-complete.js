/* ============================================================
   ECONOS – Link It · Complete page data
   Income & Cross-Price Elasticity
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Income & Cross-Price Elasticity',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'calc',    label: 'Calculate It',        max: 6, color: '#3B82F6' },
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

  useInLandIt: 'YED > 1 means income changes shift demand more than proportionally for luxury goods; YED < 0 means inferior good demand rises. In exam responses, always state the YED sign and magnitude before drawing the demand shift, and note whether the income change is real or nominal and temporary or permanent.',

  focusInLandIt: {
    context: 'Use specific evidence – 2.5% real income fall, 18% luxury car fall, Aldi/Lidl 17.3% share – to anchor your application to the real-world case, not just generic YED theory.',
    chain:   'State the chain explicitly: real income falls → non-essential spending cut → YED > 1 amplifies luxury demand fall → D shifts left → new equilibrium at lower P₂ and Q₂.',
    diagram: 'Draw both D₁ and D₂ (D shifts left), keep S unchanged, label both equilibria, and show P₂ < P₁ and Q₂ < Q₁. Add the XED insight: budget substitutes\' demand shifts right simultaneously.',
    depends: 'Lead with YED magnitude as your primary condition – the exact coefficient determines how much luxury demand falls. Add income distribution as the key complication – aggregate figures can mislead.',
    judge:   'State a clear position, use the mechanism (YED > 1 → D shifts left → lower P and Q), add the condition (distribution of income fall, real vs nominal), and acknowledge the temporary/permanent distinction as an honest limitation.'
  },

  nextUrl: TopicLoader.buildUrl('land_intro.html')
};
