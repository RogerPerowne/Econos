/* ============================================================
   ECONOS – Link It · Complete page data
   Factors of Production
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Factors of Production',
  stations: [
    { id: 'context', label: 'Use the context',    max: 7, color: '#059669' },
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
      { min: 60, text: 'Good – review the complicating factors (capital gap, childcare scale)' },
      { min: 0,  text: 'Evidence classification needs work' }
    ],
    chain: [
      { min: 100, text: 'Perfect causal chain – skills → reallocation → LRAS' },
      { min: 50,  text: 'Clear causality – check the missing reallocation step' },
      { min: 0,   text: 'The causal chain needs work' }
    ],
    diagram: [
      { min: 80, text: 'Strong AD/LRAS reading' },
      { min: 55, text: 'Good – check the outcome for Y and P after the LRAS shift' },
      { min: 0,  text: 'Diagram work needs more attention' }
    ],
    depends: [
      { min: 80, text: 'Strong evaluation conditions identified' },
      { min: 50, text: 'Good – one key condition missed (capital, skills match, or geography)' },
      { min: 0,  text: 'Review the key evaluation conditions' }
    ],
    judge: [
      { min: 80, text: 'Excellent judgement structure' },
      { min: 60, text: 'Judgement is strong but could be more precise' },
      { min: 0,  text: 'Judgement structure needs more precision' }
    ]
  },

  useInLandIt: 'When factor mobility and quality improve, LRAS shifts right – real output rises and the price level falls. Always link the policy mechanism (retraining, childcare, housing, transport) to which kind of mobility it raises (occupational vs geographic) and to the labour quality vs quantity distinction. The output gain only materialises when complementary capital is available and aggregate demand can absorb the new labour.',

  focusInLandIt: {
    context: 'Anchor application in specific UK data – the 700,000 missing workers, 2.8m long-term sick, 30% fall in apprenticeships, 25% capital gap – not generic factor-of-production theory.',
    chain:   'State the chain explicitly: retraining → higher labour quality and occupational mobility → workers reallocate to shortage sectors → LRAS shifts right → real output rises and inflation pressure eases.',
    diagram: 'Draw AD and both LRAS curves; label both equilibria (Y₁/P₁ and Y₂/P₂); show the rightward LRAS shift with an arrow; identify the lower price level and higher real output.',
    depends: 'Lead with skills-employer demand match as your key condition – without it, retraining produces qualified workers who still cannot find shortage-sector jobs.',
    judge:   'Take a clear position, use the LRAS mechanism, add the condition (complementary capital + geographic mobility), and explain the limitation (any single policy lever is incremental – the OBR\'s 60,000 childcare estimate makes this concrete).'
  },

  nextUrl: TopicLoader.buildUrl('land_intro.html')
};
