/* ============================================================
   ECONOS — Link It · Complete page data
   Production Possibility Frontiers
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Production Possibility Frontiers',
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
      { min: 60, text: 'Good — review the complicating factors' },
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

  useInLandIt: 'PPF analysis requires you to distinguish: (1) movements along the frontier (trade-offs with fixed resources), (2) operating inside the frontier (inefficiency/unemployment), and (3) shifts of the frontier (economic growth from investment or technology). Always state which of these three is occurring, and state the opportunity cost of any movement along the frontier.',

  focusInLandIt: {
    context: 'Use specific evidence — the £28bn/£7.3bn investment figures, 0.5% productivity growth, and 30% renewable share — to anchor your application to the real-world case, not just generic PPF theory.',
    chain:   'State the chain explicitly: resources shift from consumption to investment → economy moves along the PPF → opportunity cost is forgone public services → if investment raises productive capacity, the PPF shifts outward in the long run.',
    depends: 'Lead with productivity return as your condition — if the PPF shift from green investment is smaller than the opportunity cost, the trade-off is not rational regardless of intentions.',
    judge:   'State a clear position (rational if productivity return is high and politically sustained), use the mechanism (movement along PPF → short-run trade-off → long-run outward shift), add the condition (political sustainability and crowding-in magnitude), and acknowledge the honest risk (the £28bn to £7.3bn revision shows commitment failure is a real constraint).'
  },

  nextUrl: TopicLoader.buildUrl('land_intro.html')
};
