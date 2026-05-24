/* ============================================================
   ECONOS — Link It · Complete page data
   Specialisation & Money
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Specialisation & Money',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
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
      { min: 60, text: 'Good — review the challenging evidence' },
      { min: 0,  text: 'Evidence classification needs work' }
    ],
    chain: [
      { min: 100, text: 'Perfect causal chain' },
      { min: 50,  text: 'Clear causality — check the missing step' },
      { min: 0,   text: 'The causal chain needs work' }
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

  useInLandIt: 'Specialisation raises labour productivity through the division of labour, generating output surpluses that require exchange. Money solves the double coincidence of wants problem, enabling large-scale supply chains. The gains from specialisation depend on task divisibility, human capital and functioning exchange systems — and deep specialisation creates systemic vulnerability when any link in the chain fails.',

  focusInLandIt: {
    context: 'Use specific examples — the pin factory, the 30,000-component car, Toyota\'s shutdown — to anchor your application to real-world evidence rather than abstract theory.',
    chain:   'State the chain explicitly: specialisation → surplus output → need for exchange → double coincidence of wants problem → money as solution → large-scale supply chains possible.',
    depends: 'Lead with task divisibility as your condition — if the production process cannot be subdivided, the division of labour offers no gains regardless of how skilled or motivated workers are.',
    judge:   'State a clear position, use the mechanism (division of labour → surplus → money → exchange), add the condition (task divisibility / human capital / exchange systems), and acknowledge the limitation (systemic vulnerability from interdependence).'
  },

  nextUrl: TopicLoader.buildUrl('land_intro.html')
};
