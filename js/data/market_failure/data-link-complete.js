/* ============================================================
   ECONOS — Link It · Complete page data
   Market Failure
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Market Failure',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'extract', label: 'Read the Extract',   max: 3, color: '#8B5CF6' },
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

  useInLandIt: 'Information asymmetry causes market failure by depressing effective demand (D-left). Adverse selection is the key mechanism: high-quality sellers exit when buyers price on average quality. Mandatory disclosure and private information platforms are the two corrective mechanisms — evaluate their effectiveness by reference to enforcement and uptake.',

  focusInLandIt: {
    context: 'Use specific evidence — the 1-in-3 undisclosed defects figure and the sub-2% enforcement rate — to anchor your application to the real-world case, not just generic market failure theory.',
    chain:   'State the chain explicitly: buyers cannot verify quality → assume average quality → WTP depressed → adverse selection (quality sellers exit) → D shifts left from D₁ to D₂ → deadweight welfare loss.',
    diagram: 'Draw D₁ (full-information demand), D₂ (information-gap demand) and supply S unchanged. Label both equilibria (Q₁/P₁ and Q₂/P₂), shade the DWL triangle between D₁, D₂ and the vertical at Q₂, and show the leftward demand shift arrow.',
    depends: 'Lead with severity of information asymmetry as your condition — if the seller\'s information advantage is small or private platforms (AutoTrader, HPI) close it significantly, the case for mandatory government disclosure weakens. Then evaluate enforcement quality as the critical policy variable.',
    judge:   'State a clear position, use the mechanism (D shifts left, DWL created), add the condition (enforcement quality / private platform availability / product complexity), and explain the limitation honestly.'
  },

  nextUrl: TopicLoader.buildUrl('land_intro.html')
};
