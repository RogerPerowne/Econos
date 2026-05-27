/* ============================================================
   ECONOS – Link It · Complete page data
   Information Gaps
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Information Gaps',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'extract', label: 'Read the Extract',   max: 3, color: '#8B5CF6' },
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
    extract: [
      { min: 80, text: 'Strong extract reading' },
      { min: 55, text: 'Good – check your evidence application' },
      { min: 0,  text: 'Extract analysis needs more attention' }
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

  useInLandIt: 'Information gaps cause demand to deviate from the rational level – upward for overconsumption (hidden costs), downward for underproduction (adverse selection). Mandatory disclosure corrects the information but not the behaviour if present bias is strong. Always evaluate both the information correction AND the behavioural response in exam answers.',

  focusInLandIt: {
    context: 'Use specific evidence – the 25% missed repayment rate and the Which? checkout audit – to anchor your application to the real-world BNPL case, not just generic information gap theory.',
    chain:   'State the chain explicitly: hidden APR → consumers underestimate cost → D inflated from D_rational to D_biased → overconsumption at Q_biased → debt harm (missed repayments, debt collection).',
    extract: 'Apply the Akerlof lemons logic to BNPL: hidden information (APR) creates an adverse selection dynamic where high-risk borrowers are most likely to use BNPL, and lenders cannot price-discriminate effectively without disclosure. Use the extract to show how regulation corrects the information failure.',
    depends: 'Lead with salience as your top condition – if APR is buried in T&Cs rather than displayed prominently at checkout, the disclosure requirement cannot shift demand back to D_rational regardless of how well-designed the regulation is.',
    judge:   'State a clear position, use the mechanism (hidden APR → D_biased → disclosure → D shifts left), add the condition (salience, financial literacy, present bias), and acknowledge the limitation honestly – present bias may prevent disclosure from fully restoring rational demand.'
  },

  nextUrl: TopicLoader.routes.land('intro')
};
