/* ============================================================
   ECONOS — Link It · Context station data
   Consumer & Producer Surplus: classify evidence on the UK bus subsidy
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Consumer & Producer Surplus',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_chain.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether per-unit operating subsidies on public bus services increase consumer surplus and improve allocative efficiency?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion — not just what sounds economic.',

    extract: [
      'The UK government and local authorities spend approximately [[spend|£2.5bn per year on bus subsidies and concessionary fares]] (DfT 2023), reflecting a long-standing policy commitment to keeping public transport affordable for consumers.',
      'Average bus fares rose [[fares-london|75% in real terms outside London (2005–22), while London fares held stable]] under higher TfL subsidy — consistent with the view that a larger subsidy produces a larger consumer surplus gain.',
      'UK bus passenger journeys outside London [[journeys|fell 46% between 2005 and 2022, compared with a 10% fall in London]] — a difference attributable, in part, to the higher subsidy level maintained in the capital.',
      'The UK Department for Transport estimates that [[dft-ratio|each £1 of bus subsidy generates approximately £2.40 in economic benefits]], suggesting that the consumer surplus gain plus positive externality benefits exceed the taxpayer cost at the margin.',
      'The 2023 English bus reform found that [[routing|deregulated operators cut unprofitable routes regardless of subsidy]] — raising the question of whether a per-unit subsidy can sustain service on routes where demand is insufficient.'
    ],

    evidence: {
      'spend':      { text: '£2.5bn per year on bus subsidies and concessionary fares' },
      'fares-london': { text: '75% in real terms outside London (2005–22), while London fares held stable' },
      'journeys':   { text: 'fell 46% between 2005 and 2022, compared with a 10% fall in London' },
      'dft-ratio':  { text: 'each £1 of bus subsidy generates approximately £2.40 in economic benefits' },
      'routing':    { text: 'deregulated operators cut unprofitable routes regardless of subsidy' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the claim',      tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against the claim', tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case',     tone: 'blue',  icon: '?' }
    ],

    correct: {
      'spend':        'supports',
      'fares-london': 'supports',
      'journeys':     'supports',
      'dft-ratio':    'supports',
      'routing':      'complicates'
    },

    explain: {
      'spend':        'The scale of the subsidy (£2.5bn/yr) confirms it is a significant policy instrument, consistent with government intent to expand consumer access to bus travel and increase CS.',
      'fares-london': 'Higher subsidy in London kept fares stable — directly supporting the claim that larger subsidies prevent fare rises and protect consumer surplus for existing passengers.',
      'journeys':     'The contrast between London (−10%) and non-London (−46%) passenger journeys implies that subsidy-supported lower fares preserve both the quantity of travel and the associated consumer surplus.',
      'dft-ratio':    'A £2.40 return per £1 of subsidy implies the CS gain plus positive externality benefits exceed the taxpayer cost, supporting the allocative efficiency claim.',
      'routing':      'If operators withdraw from unprofitable routes even when subsidised, the supply shift is incomplete — some passengers lose access entirely, limiting the CS gain and complicating the allocative efficiency argument.'
    },

    bucketCue: 'Strong application changes the conclusion — it does not just describe what is in the extract.',

    examBridge: '"The £2.40/£1 return estimate strongly supports the allocative efficiency claim for bus subsidies, and the London–non-London comparison shows that higher subsidies do translate into better CS outcomes. However, the routing problem complicates the analysis: if operators withdraw from unprofitable routes despite subsidy, the supply shift is smaller than the diagram implies and the CS gain is reduced."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};
