/* ============================================================
   ECONOS – Link It · Complete page data
   The Economic Problem
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'The Economic Problem',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
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

  useInLandIt: 'Every economics answer involves scarcity and opportunity cost – even where no price or diagram is involved. Anchor responses to the NHS example: NICE\'s QALY threshold is the most explicit real-world expression of opportunity cost in UK public policy. Always state what is foregone, not just what is chosen.',

  focusInLandIt: {
    context: 'Use specific evidence – the £167bn budget, 7.7 million waiting list, and QALY threshold figures – to anchor your application to the real-world case, not just generic scarcity theory.',
    chain:   'State the chain explicitly: unlimited wants exceed finite resources → three economic questions must be answered (what, how, for whom) → every allocation has an opportunity cost equal to the next-best alternative foregone.',
    depends: 'Lead with the severity of the scarcity gap as your condition – the economic problem is always present but its intensity varies with productive capacity, technology, and political choices about funding.',
    judge:   'State a clear position (the economic problem is universal), use the mechanism (scarcity → choice → opportunity cost), add the condition (technology and economic system shape how severe and how visible the problem is), and acknowledge the honest limitation (the severity of scarcity is partly a political choice, not purely fixed by nature).'
  },

  nextUrl: TopicLoader.buildUrl('land_intro.html')
};
