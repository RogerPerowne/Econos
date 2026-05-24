/* ============================================================
   ECONOS — Link It · Context station data
   Demand: classify evidence on the UK post-COVID leisure recovery
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Demand',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_chain.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'predict', label: 'Predict outcome',    href: TopicLoader.buildUrl('link_predict.html') },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether rising consumer income and confidence are the primary drivers of increased demand for UK leisure and hospitality services post-pandemic?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion — not just what sounds economic.',

    extract: [
      'Data from GfK show that the UK consumer confidence index reached [[confidence|+7 in July 2021 — its highest level since 2016]], reflecting a sharp recovery in households\' willingness to make major purchases and spend on leisure activities.',
      'ONS figures reveal that [[savings|the UK household savings ratio peaked at 29.1% in Q2 2020]] before falling sharply in 2021, as approximately £190 billion in accumulated savings were released into the economy and households increased spending on restaurants, hotels and events.',
      'OpenTable and CGA data show that [[bookings|restaurant and pub bookings in July 2021 were 60% above 2019 levels]], suggesting that pent-up demand surged well beyond pre-pandemic norms once restrictions were lifted.',
      'Travel industry data indicate that [[travel|UK international holiday bookings remained suppressed throughout 2021]] due to ongoing travel restrictions and health concerns, suggesting that some of the domestic leisure surge reflected diversion from overseas travel rather than purely income-driven spending.',
      'Trussell Trust figures show that [[foodbanks|UK food bank usage rose 33% in 2021]], despite aggregate household income rising — indicating that the recovery was deeply unequal and lower-income groups did not experience the leisure demand recovery seen in wealthier households.'
    ],

    evidence: {
      'confidence': { text: '+7 in July 2021 — its highest level since 2016' },
      'savings':    { text: 'the UK household savings ratio peaked at 29.1% in Q2 2020' },
      'bookings':   { text: 'restaurant and pub bookings in July 2021 were 60% above 2019 levels' },
      'travel':     { text: 'UK international holiday bookings remained suppressed throughout 2021' },
      'foodbanks':  { text: 'UK food bank usage rose 33% in 2021' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the claim',      tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against the claim', tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case',     tone: 'blue',  icon: '?' }
    ],

    correct: {
      'confidence': 'supports',
      'savings':    'supports',
      'bookings':   'supports',
      'travel':     'complicates',
      'foodbanks':  'complicates'
    },

    explain: {
      'confidence': 'A consumer confidence index at its highest since 2016 confirms that households\' expectations and willingness to spend improved — a key non-price demand shifter that directly caused the rightward shift in leisure demand.',
      'savings':    'The fall in the savings ratio as £190bn was released into spending provides direct evidence of income and wealth effects driving leisure demand. This confirms the mechanism: accumulated savings → greater ability to pay → demand shifts right.',
      'bookings':   'Bookings 60% above 2019 levels quantify the demand surge, confirming that market activity responded strongly to the income and confidence recovery. This is the outcome — consistent with a large rightward shift in demand.',
      'travel':     'If some of the domestic leisure surge came from households who could not travel abroad (substitution from international to domestic leisure), then income alone is not the full explanation. The absence of substitute activities inflated domestic demand beyond what income growth alone would predict — complicating the claim without refuting it.',
      'foodbanks':  'A 33% rise in food bank usage alongside aggregate income growth shows the recovery was highly unequal. Lower-income households did not accumulate savings and saw no leisure demand recovery. The aggregate demand shift masks very different experiences across income groups — complicating the claim that income was the primary driver for all consumers.'
    },

    bucketCue: 'Strong application changes the conclusion — it does not just describe what is in the extract.',

    examBridge: '"Consumer confidence at a 5-year high and the release of £190bn in accumulated savings directly supports the claim that income and confidence drove the leisure demand surge. However, the suppression of international travel suggests some recovery was diversion from substitute activities — not purely income-driven — and rising food bank usage confirms that the demand shift was concentrated among higher-income groups, complicating any general claim about consumer income as the primary driver."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};
