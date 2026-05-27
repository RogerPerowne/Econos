/* ============================================================
   ECONOS – Link It · Context station data
   PES: classify evidence on the UK rental housing shortage 2022–23
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Price Elasticity of Supply',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_chain.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.buildUrl('link_calc.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether the low price elasticity of supply of rental housing is the primary reason UK rents rose faster than inflation in 2022–23?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'Office for National Statistics data show that [[migration|UK net migration reached a record 745,000 in the year to June 2023]], driving exceptional demand for rental accommodation at a time when urban return post-COVID was already pushing up city rents.',
      'The average time from planning permission to first occupation for new housing in England is 24–36 months; even with [[approval|planning approval rates at 86%]], new supply cannot reach the market quickly enough to absorb a demand surge.',
      'The result was stark: [[rents|UK private rental prices rose 9.4% in 2023 (ONS)]], the highest annual rate since ONS records began – consistent with a market where price, not quantity, absorbs almost all of the adjustment pressure.',
      'Net rental supply – new listings entering the market – grew by only [[listings|1.3% in 2023 (Rightmove)]], despite the strength of the price signal sent to landlords and developers.',
      'The UK government\'s Renters\' Reform Bill 2024 increased landlord regulatory compliance costs, leading to [[landlords|landlords exiting the sector]] – reducing effective supply at the same time as demand was rising.'
    ],

    evidence: {
      'migration': { text: 'UK net migration reached a record 745,000 in the year to June 2023' },
      'approval':  { text: 'planning approval rates at 86%' },
      'rents':     { text: 'UK private rental prices rose 9.4% in 2023 (ONS)' },
      'listings':  { text: '1.3% in 2023 (Rightmove)' },
      'landlords': { text: 'landlords exiting the sector' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports low PES as primary cause', tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues another factor is primary',  tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',   tone: 'blue',  icon: '?' }
    ],

    correct: {
      'migration': 'supports',
      'approval':  'supports',
      'rents':     'supports',
      'listings':  'supports',
      'landlords': 'complicates'
    },

    explain: {
      'migration': 'A demand surge of 745,000 net migrants is the trigger: it generates excess demand for rental properties. That excess demand turns into a price spike only because PES is low – confirming the mechanism that low PES converts demand shocks into price spikes rather than quantity rises.',
      'approval':  'Even an 86% planning approval rate cannot unlock supply quickly because build times are 24–36 months. This quantifies the structural time lag that keeps PES near zero in the short run – the planning system cannot be blamed alone; the construction lead time is the binding constraint.',
      'rents':     'A 9.4% rent rise from a demand shift that only increased listings 1.3% is the clearest evidence that almost all adjustment went through price. This is precisely what a near-vertical (highly inelastic) supply curve predicts – supporting low PES as the primary cause.',
      'listings':  'Just 1.3% new listing growth despite a 9.4% rent price signal confirms the supply response was negligible. This directly measures the inelasticity: a large price rise produced almost no quantity response – the definition of low PES.',
      'landlords': 'Landlord exit reduced the existing stock of rental properties simultaneously with rising demand. This is a supply contraction – not just slow supply growth. It complicates the PES explanation because the rent spike reflects both inelastic new supply and a shrinking existing supply, not PES alone.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The 9.4% rent rise from just 1.3% listing growth confirms that supply is highly price inelastic: PES ≈ 0.2 in the short run because new builds take 24–36 months from planning to completion. However, the rent spike also reflects landlord exit from the sector – a simultaneous supply contraction that compounds the PES constraint and complicates a pure PES explanation."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'          },
      { icon: '❓', text: 'Ask which details change the conclusion'        },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};
