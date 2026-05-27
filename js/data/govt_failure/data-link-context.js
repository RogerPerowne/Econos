/* ============================================================
   ECONOS – Link It · Context station data
   Government Failure: classify evidence on Help to Buy as government failure
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Government Failure',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('chain'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.routes.link('extract') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether Help to Buy (2013–23) represents government failure – a policy that worsened the housing affordability problem it was designed to solve?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'The Ministry of Housing, Communities and Local Government reported that Help to Buy equity loans [[supported|supported 310,000 home purchases in England between 2013 and 2023]], providing first-time buyers with equity loans covering up to 20% of a new-build\'s purchase price (40% in London).',
      'The Office for Budget Responsibility found that [[price-rise|Help to Buy added an average of £8,000 to new-build house prices]], concluding that the scheme had "limited impact on housing supply" because it did not address planning constraints, labour shortages or land costs.',
      'RICS research showed that [[premium|new-build premiums over second-hand homes rose from 9% to 22%]] before and after Help to Buy, indicating that developers – not buyers – captured much of the subsidy as higher margins.',
      'Barratt Developments reported [[margins|record operating margins of 21% in 2021–22]], partly attributed to Help to Buy demand support, suggesting that the policy created substantial windfall profits for housebuilders.',
      'Housing supply is highly price inelastic – the [[pes|PES for new housing ≈ 0.4]] due to planning constraints, construction labour shortages, and land banking by developers, meaning demand stimulus raises prices far more than it raises output.'
    ],

    evidence: {
      'supported': { text: 'supported 310,000 home purchases in England between 2013 and 2023' },
      'price-rise': { text: 'Help to Buy added an average of £8,000 to new-build house prices' },
      'premium':    { text: 'new-build premiums over second-hand homes rose from 9% to 22%' },
      'margins':    { text: 'record operating margins of 21% in 2021–22' },
      'pes':        { text: 'PES for new housing ≈ 0.4' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the government failure claim',    tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against the government failure claim', tone: 'pink', icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',          tone: 'blue',  icon: '?' }
    ],

    correct: {
      'supported':  'against',
      'price-rise': 'supports',
      'premium':    'supports',
      'margins':    'supports',
      'pes':        'supports'
    },

    explain: {
      'supported':  'At face value, 310,000 purchases suggests the scheme helped buyers – but this is a count of users, not evidence that they are better off. The counterfactual question is whether prices would have been lower without the scheme, making those buyers worse off than if it had never existed.',
      'price-rise': 'The OBR\'s £8,000 average new-build price inflation is the strongest single piece of evidence for government failure: the demand stimulus raised prices (benefiting developers) rather than producing more homes (benefiting buyers). This directly supports the claim.',
      'premium':    'The doubling of the new-build premium from 9% to 22% shows the price wedge between subsidised and unsubsidised markets – exactly what economic theory predicts when a demand subsidy meets inelastic supply. Suppliers capture the benefit.',
      'margins':    'Record housebuilder margins confirm that Help to Buy transferred wealth to developers rather than improving buyer affordability. This is the "windfall profit" mechanism of government failure: subsidy intended for consumers is captured by inelastic suppliers.',
      'pes':        'PES ≈ 0.4 is the structural reason Help to Buy produced government failure rather than success. With such inelastic supply, demand stimulus translates mainly into higher prices, not more homes. This supports the claim by explaining the mechanism.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The OBR\'s finding that Help to Buy added £8,000 to average new-build prices, combined with the doubling of the new-build premium (9% to 22%), strongly supports the government failure claim: demand stimulus met inelastic supply (PES ≈ 0.4), and the benefit was captured by developers as windfall profits. Only the count of 310,000 purchases partially complicates the case – but this measure ignores the counterfactual, making it weak evidence against the government failure interpretation."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'             },
      { icon: '❓', text: 'Ask which details change the conclusion'           },
      { icon: '⚖️', text: 'Separate supporting evidence from complications'   }
    ]
  }
};
