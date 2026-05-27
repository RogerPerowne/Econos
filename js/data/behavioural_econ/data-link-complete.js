/* ============================================================
   ECONOS – Link It · Complete page data
   Behavioural Economics
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Behavioural Economics',
  stations: [
    { id: 'context', label: 'Use the context',    max: 6, color: '#059669' },
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
      { min: 55, text: 'Good – check the outcome for P and Q' },
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

  useInLandIt: 'Behavioural economics identifies how present bias, status quo bias and bounded rationality cause demand to deviate from the rational level. Nudges correct demand without coercion; taxes correct it through price. Compare both on: effectiveness (strength of bias), equity (regressive vs neutral), and political feasibility. The SDIL is a hybrid: supply-side price incentive + structural reformulation.',

  focusInLandIt: {
    context: 'Use specific evidence – the 50% pre-levy reformulation, 29% sugar content fall, and Denmark fat tax failure – to anchor your application to the real-world case, not just generic behavioural theory.',
    chain:   'State the chain explicitly: present bias → D_biased > D_rational → overconsumption → SDIL reformulation + traffic light labelling → D shifts left → Q falls toward Q_rational → less overconsumption without regressive price effect.',
    diagram: 'Draw two demand curves (D_biased, D_rational) and a supply curve (S, approximately unchanged), label both equilibria, and show D shifting left with a leftward arrow between the curves.',
    depends: 'Lead with strength of present bias as your condition – if present bias is so strong that consumers ignore even prominent red labels, the nudge achieves little and a stronger instrument is needed. This is the pivotal factor.',
    judge:   'State a clear position (nudges outperform taxes when present bias is mild and equity matters), use the mechanism (D shifts left from D_biased to D_rational without price rise), add the condition (strength of bias / salience of nudge), and explain the limitation honestly (where bias is severe, nudges are insufficient).'
  },

  nextUrl: TopicLoader.buildUrl('land_intro.html')
};
