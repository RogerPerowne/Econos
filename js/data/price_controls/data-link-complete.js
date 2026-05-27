/* ============================================================
   ECONOS – Link It · Complete page data
   Government Intervention in Markets – rent control scenario
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Government Intervention in Markets',
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
      { min: 55, text: 'Good – check Q_s, Q_d and the shortage' },
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

  useInLandIt: 'A binding rent cap (P_max < P_e) is a maximum price that reduces quantity supplied to Q_s, raises quantity demanded to Q_d and opens up a shortage of Q_d − Q_s. The market trades on the short side, so flats are rationed by queues, networks and key money – often missing the lowest-income tenants. Sitting tenants gain a transfer from landlords, but trades between Q_s and Q_e are lost as DWL and landlords cut maintenance to restore margins. For exam essays, always state the long-run PES assumption first, use the diagram to show the shortage, and evaluate whether better-targeted alternatives (housing benefit, social housing) would protect low-income tenants more reliably.',

  focusInLandIt: {
    context: 'Use specific figures from the extract – the 40% unaffordability rate, the 180,000 sitting tenants, the ~50% Berlin listings fall and the ~8% San Francisco maintenance fall – to anchor your application to the real-world case rather than generic price-ceiling theory.',
    chain:   'State the chain explicitly: P_max < P_e (binding) → Q_s falls and Q_d rises → shortage = Q_d − Q_s → non-price rationing by queues, networks and key money → sitting tenants gain a transfer, but DWL on lost trades plus quality decline as landlords cut maintenance.',
    diagram: 'Draw the standard S and D curves, mark the free-market equilibrium (P_e, Q_e), draw a horizontal P_max line below P_e, and label Q_s on the supply curve and Q_d on the demand curve at P_max. The horizontal gap between them is the shortage; the market trades on the short side (Q_s).',
    depends: 'Lead with the long-run PES of housing as your primary condition – when supply is more elastic in the long run, the shortage grows and the policy harms new tenants more than it helps sitting ones. The non-price rationing mechanism and the existence of better-targeted alternatives are the next most important factors.',
    judge:   'State a clear conditional position: the cap protects sitting tenants in the short run but creates a long-run shortage that harms new entrants, and better-targeted alternatives (housing benefit, social housing) usually dominate. Always acknowledge the quality decline and the targeting failure as key trade-offs.'
  },

  nextUrl: TopicLoader.routes.land('intro')
};
