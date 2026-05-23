/* ============================================================
   ECONOS — Link It · Complete page data
   Public Goods
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Public Goods',
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

  useInLandIt: 'Pure public goods require state provision because non-excludability makes private revenue impossible. Always apply both non-rivalry AND non-excludability explicitly — then explain why the free rider problem makes D_private collapse, and why general taxation is the only mechanism that forces contribution. Evaluate by reference to quasi-public goods, CBA accuracy and government failure.',

  focusInLandIt: {
    context: 'Use specific evidence — the £5.2bn EA programme and the £8/£1 cost-benefit ratio — to anchor your application to the real-world flood defence case, not just generic public goods theory.',
    chain:   'State the chain explicitly: non-excludable → free rider → D_private ≈ 0 → no private revenue → zero market provision → general taxation solves free rider → Q* achieved.',
    diagram: 'Draw both demand curves (D_social and D_private) and the supply curve S, label both equilibria (Q* and Q_private ≈ 0), and explain the welfare gap between what society truly values (D_social) and what the market reveals (D_private).',
    depends: 'Lead with degree of non-excludability as your top condition — if the good is quasi-public (partially excludable), market mechanisms partially apply and taxation is not the only available solution.',
    judge:   'State a clear position, use the mechanism (non-excludable → free rider → D_private collapses → taxation solves), add the condition (pure vs quasi-public, CBA accuracy), and acknowledge the limitation honestly — government failure in setting Q* is the principal risk of state provision.'
  },

  nextUrl: TopicLoader.buildUrl('land_intro.html')
};
