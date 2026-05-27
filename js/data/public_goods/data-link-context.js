/* ============================================================
   ECONOS – Link It · Context station data
   Public Goods: classify evidence on UK coastal flood defence provision
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Public Goods',
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
    question:    'Which details in this extract most change whether coastal flood defences are a non-rival and non-excludable public good that justifies full state funding via general taxation?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'The Environment Agency\'s [[ea-programme|£5.2bn flood/coastal erosion programme (2021–27) is entirely state-funded]] – the private market does not provide coastal flood protection at all, confirming the public goods problem in practice.',
      'Cost-benefit analysis shows that [[cbr|every £1 of flood defence generates £8 of avoided damage on average]] (Environment Agency 2023) – the social benefit vastly exceeds cost, consistent with D_social far exceeding D_private.',
      'The [[cumbria|2007 Cumbria floods cost £3.5bn; later defences prevented ~£850m by 2020]] – direct evidence that state provision delivers welfare gains the private market would not realise.',
      'Community-funded local flood groups have raised funds for [[community-funds|smaller-scale defences in some areas]] – demonstrating that quasi-private provision exists at small scale in high-risk communities where excludability is more feasible, e.g. private flood barriers for specific properties.',
      'Insurance markets provide [[flood-insurance|flood insurance but require premiums that reflect true flood risk]] – an imperfect market-based solution that compensates for flood damage rather than preventing it, and excludes highest-risk households through unaffordable premiums.'
    ],

    evidence: {
      'ea-programme':    { text: '£5.2bn flood/coastal erosion programme (2021–27) is entirely state-funded' },
      'cbr':             { text: 'every £1 of flood defence generates £8 of avoided damage on average' },
      'cumbria':         { text: '2007 Cumbria floods cost £3.5bn; later defences prevented ~£850m by 2020' },
      'community-funds': { text: 'smaller-scale defences in some areas' },
      'flood-insurance': { text: 'flood insurance but require premiums that reflect true flood risk' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports state provision via taxation',       tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against full state provision',         tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',             tone: 'blue',  icon: '?' }
    ],

    correct: {
      'ea-programme':    'supports',
      'cbr':             'supports',
      'cumbria':         'supports',
      'community-funds': 'complicates',
      'flood-insurance': 'complicates'
    },

    explain: {
      'ea-programme':    'The fact that the entire £5.2bn programme is government-funded directly confirms complete market failure – the private market provides zero coastal flood protection. This is strong evidence for the public goods case: non-excludability makes private provision impossible, so taxation-funded state provision is the only available mechanism.',
      'cbr':             'An £8 return per £1 invested confirms that the social benefit (D_social) far exceeds the cost of provision. The welfare gain from flood defences is enormous – but it cannot be captured by a private firm because non-payers cannot be excluded. This cost-benefit ratio strongly supports state provision as the mechanism to realise the welfare gain.',
      'cumbria':         'The 2007 floods and subsequent prevention of £850m of damage demonstrate that state provision creates real, measurable welfare gains that the free market would never deliver. This supports the case for general taxation as the funding mechanism – the welfare return justifies compulsory contribution.',
      'community-funds': 'The existence of community-funded flood groups in some areas complicates the claim that state provision via general taxation is the only mechanism. In small, homogeneous communities with shared interests and visible local benefit, partial excludability may allow community-level funding to work – qualifying the "only solution" argument for purely local defences.',
      'flood-insurance': 'Private flood insurance provides a market-based response to flood risk, but it compensates for damage rather than preventing it – and it excludes the highest-risk households through unaffordable premiums. This complicates the analysis: insurance is a partial market response, but it does not substitute for defence provision and may create perverse incentives (moral hazard in flood-zone development).'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The £5.2bn programme and the £8/£1 cost-benefit ratio strongly support state provision via taxation as the mechanism that can realise the welfare gain that the free market cannot capture. However, the existence of community-funded local defences and private flood insurance both complicate the absolute claim – partial market and community mechanisms exist at small scale, qualifying the \'only solution\' conclusion for local and quasi-public goods."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};
