/* ============================================================
   ECONOS – Link It · Context station data
   Factors of Production: UK labour shortages 2023–24 and factor mobility
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Factors of Production',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('chain'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether raising the mobility and quality of UK factors of production would meaningfully lift UK output?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'The UK has roughly [[missing|700,000 fewer workers than its pre-pandemic trend]] (ONS 2024), with much of the gap driven by long-term sickness and earlier retirement.',
      'Around [[inactive|2.8 million people are economically inactive due to long-term sickness]], up from 2.1 million in 2019 – a rise that has reduced the effective supply of labour even where vacancies remain unfilled.',
      'Job vacancies in [[care|care, hospitality and HGV driving remain above pre-pandemic norms]] for over two years, suggesting persistent occupational immobility between sectors where workers are available and sectors where they are needed.',
      'UK [[apprentice|apprenticeship starts have fallen by roughly 30% since 2017]], reducing the pipeline of medium-skill workers and limiting employers\' ability to grow the quality of labour input.',
      'UK [[invest|business investment is about 25% below the G7 average]] – a capital-quality gap that means even fully-employed workers produce less output per hour than peers abroad.',
      '[[housing|House prices reach 10–14× earnings in London and the South East]], limiting geographic mobility from low- to high-productivity areas of the country.',
      'The OBR forecasts that [[childcare|free childcare expansion will lift participation by ~60,000 over five years]] – a meaningful but modest mobility effect.'
    ],

    evidence: {
      'missing':   { text: '700,000 fewer workers than its pre-pandemic trend' },
      'inactive':  { text: '2.8 million people economically inactive due to long-term sickness' },
      'care':      { text: 'care, hospitality and HGV driving remain above pre-pandemic norms' },
      'apprentice':{ text: 'apprenticeship starts down roughly 30% since 2017' },
      'invest':    { text: 'business investment ~25% below the G7 average' },
      'housing':   { text: 'house prices 10–14× earnings in London and the South East' },
      'childcare': { text: 'free childcare expansion: +60,000 workers over five years' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the claim',      tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against the claim', tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case',     tone: 'blue',  icon: '?' }
    ],

    correct: {
      'missing':    'supports',
      'inactive':   'supports',
      'care':       'supports',
      'apprentice': 'supports',
      'invest':     'complicates',
      'housing':    'supports',
      'childcare':  'complicates'
    },

    explain: {
      'missing':    'A 700,000 worker gap is direct evidence that the quantity of labour available is below trend. Raising mobility (e.g. via retraining, transport links, childcare) helps reactivate or reallocate workers – so this strongly supports the claim that mobility-raising policies would lift output.',
      'inactive':   'Long-term sickness has pulled 700,000 extra workers out of the labour force since 2019. Mobility policies that ease return-to-work (occupational health, flexible jobs, retraining) directly target this group – supporting the claim.',
      'care':       'Persistent vacancies alongside available workers is the textbook signal of occupational immobility – skills don\'t match jobs. This directly supports the case for mobility-raising policy like apprenticeships and retraining.',
      'apprentice': 'A 30% fall in apprenticeship starts means fewer workers are gaining medium-level skills – the quality of labour is weakening over time. Raising the apprenticeship pipeline would lift labour quality and therefore output. Supports the claim.',
      'invest':     'A 25% capital-quality gap means the problem is partly capital, not labour. Even if every worker were fully mobile, output per hour would still be held back by under-investment. This complicates the claim: mobility policy alone won\'t close the productivity gap.',
      'housing':    'High house-price ratios in productive regions create geographic immobility. Workers who could be more productive in London/SE can\'t afford to live there. Housing reform would raise mobility and output – directly supporting the claim.',
      'childcare':  'A 60,000 person gain is a meaningful policy success, but it is small set against the 700,000 missing-worker gap. It complicates the case: any single mobility lever is incremental, not transformative.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The 700,000 missing-worker gap and the 2.8m long-term sick clearly support the case that the UK has a factor-supply problem mobility policy could address. Persistent vacancies in care and HGV driving alongside the 30% fall in apprenticeships point to a skills-mismatch problem retraining could ease. However, the 25% capital-investment gap complicates the picture: mobility alone cannot close it. And the OBR childcare estimate (60,000 over five years) shows that individual mobility levers move the needle slowly – significant output gains require a combination of policies working together."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};
