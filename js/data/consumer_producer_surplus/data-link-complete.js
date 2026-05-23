/* ============================================================
   ECONOS — Link It · Complete page data
   Consumer & Producer Surplus
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Consumer & Producer Surplus',
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

  useInLandIt: 'When supply shifts right (via subsidy), price falls and CS rises. The welfare case requires MSB > MPC (positive externality justification). Always quantify the CS change (area above new P below D) and compare with subsidy cost (subsidy per unit × Q₂) to assess net welfare effect.',

  focusInLandIt: {
    context: 'Use specific evidence — the £2.5bn subsidy and the DfT\'s £2.40/£1 return — to anchor your application to the real-world bus case, not just generic surplus theory.',
    chain:   'State the chain explicitly: per-unit subsidy → operators\' effective MPC falls → supply shifts right S₁ to S₂ → fare falls P₁ to P₂ → CS expands by area between prices below demand curve.',
    diagram: 'Draw all three lines (D, S₁, S₂), label both equilibria (Q₁/P₁ and Q₂/P₂), and shade the CS gain rectangle plus triangle between P₁ and P₂ below the demand curve.',
    depends: 'Lead with positive externality size as your key condition — the allocative efficiency argument only holds if MSB genuinely exceeds MPB, making the subsidy a correction rather than a distortion.',
    judge:   'State a clear position, use the mechanism (supply right → fare falls → CS rises), add the condition (positive externalities must justify the cost), and explain the limitation (pass-through rate, PED) honestly.'
  },

  nextUrl: TopicLoader.buildUrl('land_intro.html')
};
