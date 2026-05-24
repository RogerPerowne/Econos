/* ============================================================
   ECONOS — Link It · Context station data
   Market Failure: classify evidence on information asymmetry in the used car market
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Market Failure',
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
    question:    'Which details in this extract most change whether information asymmetry is the primary cause of market failure in the UK used car market, justifying mandatory disclosure and consumer protection legislation?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion — not just what sounds economic.',

    extract: [
      'Citizens Advice research (2023) found that [[defects|1 in 3 UK used car buyers found a significant undisclosed defect]] — demonstrating that sellers systematically withhold quality information and buyers cannot verify vehicle condition before purchase.',
      'The [[cra-2015|Consumer Rights Act 2015: used cars must be satisfactory and as described]], giving buyers legal remedies when sellers misrepresent vehicle condition — a government attempt to correct information failure through mandatory disclosure.',
      'AutoTrader valuation data and HPI vehicle history checks are [[private-info|now widely available to UK buyers at low cost]], providing private-sector information intermediaries that partially reduce the information gap without government mandate.',
      'FCA research found that [[broader-failure|34% of financial product buyers did not fully understand the charges]] — suggesting that information asymmetry is a pervasive market failure extending well beyond the used car market, rather than a sector-specific problem.',
      'Trading Standards data indicate that [[enforcement|under 2% of used car disputes in England reach formal proceedings yearly]], suggesting that the deterrent effect of the Consumer Rights Act is limited by weak enforcement and high transaction costs for buyers.'
    ],

    evidence: {
      'defects':        { text: '1 in 3 UK used car buyers found a significant undisclosed defect' },
      'cra-2015':       { text: 'Consumer Rights Act 2015: used cars must be satisfactory and as described' },
      'private-info':   { text: 'now widely available to UK buyers at low cost' },
      'broader-failure': { text: '34% of financial product buyers did not fully understand the charges' },
      'enforcement':    { text: 'under 2% of used car disputes in England reach formal proceedings yearly' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports mandatory disclosure legislation', tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against mandatory disclosure',       tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',           tone: 'blue',  icon: '?' }
    ],

    correct: {
      'defects':         'supports',
      'cra-2015':        'supports',
      'private-info':    'against',
      'broader-failure': 'complicates',
      'enforcement':     'complicates'
    },

    explain: {
      'defects':         'If 1 in 3 buyers experience undisclosed defects, the information asymmetry is severe and pervasive — buyers systematically cannot distinguish quality. This directly confirms that the market failure justifies mandatory disclosure: without it, D remains depressed from D₁ to D₂ and quality sellers continue to exit.',
      'cra-2015':        'The Consumer Rights Act shows government has already recognised information asymmetry as a market failure requiring legal correction. Its existence supports the case for mandatory disclosure — the question is whether the law is effective, not whether intervention is justified in principle.',
      'private-info':    'If AutoTrader and HPI checks are widely available at low cost, the market may partially self-correct without government mandate. Private information intermediaries can move D₂ back toward D₁ voluntarily — weakening the argument that mandatory disclosure is the only or primary solution.',
      'broader-failure': 'The FCA data show that information asymmetry is not unique to used cars — it is a systemic market failure across many sectors. This complicates the case: it neither strengthens nor weakens the argument for disclosure specifically in used cars, but suggests that the problem may require broader regulatory frameworks rather than sector-specific legislation.',
      'enforcement':     'If fewer than 2% of disputes reach legal proceedings, the deterrent effect of the Consumer Rights Act is limited by enforcement costs. This complicates the case: mandatory disclosure exists but may not be delivering the correction D₂ → D₁ that the policy intended, without stronger enforcement mechanisms.'
    },

    bucketCue: 'Strong application changes the conclusion — it does not just describe what is in the extract.',

    examBridge: '"The pervasive information asymmetry (1 in 3 buyers experiencing undisclosed defects) confirms the market failure and supports mandatory disclosure — D is systematically depressed from D₁ to D₂ because buyers cannot verify quality. However, the case is complicated by two factors: private platforms (AutoTrader, HPI) already partially correct the gap without government mandate, and weak enforcement of the Consumer Rights Act (fewer than 2% of disputes reaching legal proceedings) means mandatory disclosure may not be effectively shifting D back toward D₁."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};
