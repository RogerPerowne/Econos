/* ============================================================
   ECONOS – Link It · Context station data
   Information Gaps: classify evidence on FCA BNPL mandatory disclosure
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Information Gaps',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_chain.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether mandatory APR disclosure is the most effective policy for correcting information gaps in the UK Buy Now Pay Later market?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'The FCA Financial Lives Survey 2022 found that [[scale|27% of UK adults used Buy Now Pay Later in the 12 months to January 2023]], with the market growing rapidly in the cost-of-living crisis – evidence of the scale of potential information gap harm.',
      'FCA analysis revealed that [[debt-harm|25% of BNPL users missed a 2022 repayment; 11% sent to collection]] – consistent with demand inflated above the rational level by hidden credit costs.',
      'Before FCA regulation in 2023–24, [[no-apr|BNPL was not FCA-regulated; APR was rarely disclosed at the point of sale]], confirming that the information gap existed during the period of the market\'s most rapid growth.',
      'When [[which-test|Which? tested BNPL checkouts (2022): no major provider showed APR]] – the information gap was structural by design, raising questions about whether voluntary disclosure would ever work without a regulatory mandate.',
      'Behavioural economics research shows that [[present-bias|small-print APR at checkout does not change decisions for many consumers]] – particularly those with present bias who focus on paying nothing today rather than future repayment costs.'
    ],

    evidence: {
      'scale':        { text: '27% of UK adults used Buy Now Pay Later in the 12 months to January 2023' },
      'debt-harm':    { text: '25% of BNPL users missed a 2022 repayment; 11% sent to collection' },
      'no-apr':       { text: 'BNPL was not FCA-regulated; APR was rarely disclosed at the point of sale' },
      'which-test':   { text: 'Which? tested BNPL checkouts (2022): no major provider showed APR' },
      'present-bias': { text: 'small-print APR at checkout does not change decisions for many consumers' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports mandatory disclosure',       tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against mandatory disclosure', tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',     tone: 'blue',  icon: '?' }
    ],

    correct: {
      'scale':        'supports',
      'debt-harm':    'supports',
      'no-apr':       'supports',
      'which-test':   'complicates',
      'present-bias': 'complicates'
    },

    explain: {
      'scale':        'The scale of BNPL usage (27% of UK adults) confirms that the market is large – and the information gap affects a significant proportion of the adult population. This supports mandatory disclosure as a necessary corrective measure given the breadth of potential harm.',
      'debt-harm':    'A 25% missed repayment rate and 11% sent to debt collection directly evidence overconsumption – demand inflated above the rational level by hidden APR. This strongly supports mandatory disclosure as a corrective mechanism to shift demand back toward D_rational.',
      'no-apr':       'The structural absence of APR disclosure before FCA regulation confirms that the information gap was not being corrected by market forces – voluntary disclosure had not emerged. This supports the case for mandatory regulatory intervention rather than relying on providers to self-correct.',
      'which-test':   'The Which? finding that no provider displayed APR at checkout – even when technically required to in T&Cs – shows the gap was by design. This complicates the case: it suggests providers were actively minimising disclosure, raising the question of whether mandatory disclosure requirements will be complied with without strong enforcement.',
      'present-bias': 'Behavioural evidence that small-print APR warnings do not change decisions for present-biased consumers complicates the case for mandatory disclosure as the most effective policy. Even with correct information displayed, consumers may not act on it – meaning additional behavioural interventions (£-cost warnings, spending caps) may be needed alongside disclosure.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The evidence of large-scale debt harm (25% missed repayment rate, 11% debt collection) strongly supports mandatory disclosure as a corrective mechanism – the information gap is real and materially harmful. However, the Which? evidence on structural non-disclosure and behavioural research on present bias both complicate the case: disclosure must be prominent and in consumer-friendly formats (£ cost terms, not just APR) to shift demand back toward D_rational."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};
