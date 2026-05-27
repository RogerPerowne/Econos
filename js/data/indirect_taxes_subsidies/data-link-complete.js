/* ============================================================
   ECONOS – Link It · Complete page data
   Indirect Taxes & Subsidies
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Indirect Taxes &amp; Subsidies',
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
      { min: 55, text: 'Good – check the outcome for P_c, P_p and Q' },
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

  useInLandIt: 'A specific tax shifts the supply curve left by the tax amount, raising the consumer price to P_c and lowering the producer net price to P_p – the wedge between them equals the per-unit tax. The incidence split between consumers and producers depends on relative PED and PES: the less elastic side bears more. For exam essays, always state the elasticity assumption first, then use the diagram wedge to show the split, and evaluate whether the tax corrects the externality or mainly raises revenue.',

  focusInLandIt: {
    context: 'Use specific figures from the extract – the £6.1bn NHS externality cost, the 28.8% reformulation response and the PED of −0.3 for confectionery – to anchor your application to the real-world case rather than generic tax theory.',
    chain:   'State the chain explicitly: specific tax raises marginal costs → supply shifts left by tax amount → new equilibrium at lower Q_t → P_c rises, P_p falls → tax wedge = P_c − P_p = per-unit tax → burden split by PED and PES.',
    diagram: 'Draw all three curves (D, S₁, S₂), label both equilibria (Q₀ and Q_t), mark P_c on the demand curve and P_p on S₁ at Q_t, and show the tax wedge rectangle between P_c and P_p. The wedge area = government revenue.',
    depends: 'Lead with PED as your primary condition – if demand is inelastic (as with confectionery), the tax mainly raises prices and revenue rather than reducing consumption and correcting the externality. The reformulation response is the second most important factor.',
    judge:   'State a clear conditional position: the levy is effective when producers reformulate (supply-side correction) but less effective when demand is inelastic (price signal is weak). Always acknowledge the regressive incidence as the key trade-off.'
  },

  nextUrl: TopicLoader.routes.land('intro')
};
