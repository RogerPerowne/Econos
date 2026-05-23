/* ============================================================
   ECONOS — Link It · Complete page data
   Taxes & Subsidies as Policy
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Taxes &amp; Subsidies as Policy',
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

  useInLandIt: 'A production subsidy corrects positive externalities by shifting effective supply right from MPC to MPC−subsidy, raising output from Q_market to Q* and eliminating the deadweight welfare loss from underproduction. The subsidy works best when the MEB is accurately estimated, and its net benefit is greatest when combined with carbon pricing that addresses the negative externality from fossil fuel use simultaneously.',

  focusInLandIt: {
    context: 'Use specific evidence — the £28 MEB per MWh, the 14 GW delivered capacity and the 63% cost reduction — to anchor your application to the real-world CfD case, not just generic positive externality theory.',
    chain:   'State the chain explicitly: MEB ignored by market → producers supply at Q_market < Q* → MSB > MPC between Q_market and Q* → deadweight welfare loss from underproduction.',
    diagram: 'Draw all three curves (MSB, S₁ = MPC, S₂ = MPC−subsidy), label both equilibria (Q₀/P₀ and Q_s/P_s), and show the supply shift right with the arrow pointing from S₁ toward S₂.',
    depends: 'Lead with MEB accuracy as your condition — if the subsidy is miscalibrated, the whole correction mechanism fails regardless of how the rest of the policy is designed.',
    judge:   'State a clear position, use the mechanism (supply shifts right, DWL eliminated), add the condition (MEB measurability / technology learning / funding equity), and note that subsidies paired with carbon pricing deliver the strongest correction on both sides of the market failure.'
  },

  nextUrl: TopicLoader.buildUrl('land_intro.html')
};
