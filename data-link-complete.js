/* ============================================================
   ECONOS — Link It · Complete page data
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic:        'Causes of Inflation & Deflation',
  sessionLabel: 'Session 2 of 3: Link',

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
      { min: 80, text: 'Strong evidence selection' },
      { min: 60, text: 'Good — review the borderline cases' },
      { min: 0,  text: 'Evidence selection needs work' }
    ],
    chain: [
      { min: 100, text: 'Perfect causal chain' },
      { min: 50,  text: 'Clear causality — check the missing step' },
      { min: 0,   text: 'The causal chain needs work' }
    ],
    diagram: [
      { min: 80, text: 'Strong diagram reading' },
      { min: 55, text: 'Good — check the output effect explanation' },
      { min: 0,  text: 'Diagram work needs more attention' }
    ],
    depends: [
      { min: 80, text: 'Strong evaluation factors' },
      { min: 50, text: 'Good factors — one key condition missed' },
      { min: 0,  text: 'Review the key evaluation conditions' }
    ],
    judge: [
      { min: 80, text: 'Excellent judgement' },
      { min: 60, text: 'Judgement is strong but could be more precise' },
      { min: 0,  text: 'Judgement structure needs more precision' }
    ]
  },

  useInLandIt: 'Higher interest rates can reduce inflation by lowering borrowing, consumption and investment, shifting AD left. However, this is most effective when inflation is demand-pull. If inflation is driven by global supply shocks, higher rates may be less effective and may weaken output and employment.',

  focusInLandIt: {
    context: 'Use specific evidence from the extract to change your conclusion — don\'t just apply generic economics to the claim.',
    chain:   'Write your causal chain explicitly — every step should follow mechanically from the last, naming the curve that shifts.',
    diagram: 'Make sure your explanation links the diagram shift to the specific cause of inflation, not just the direction of change in P and Y.',
    depends: 'Identify your single strongest condition and explain clearly how it tips the judgement for or against the policy.',
    judge:   'Combine your chain, diagram and evaluation into one structured judgement: clear position, mechanism, condition, limitation.'
  },

  nextUrl: 'land_inflation_intro.html'
};
