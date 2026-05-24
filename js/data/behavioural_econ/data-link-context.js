/* ============================================================
   ECONOS — Link It · Context station data
   Behavioural Economics: classify evidence on SDIL and nudges vs taxes
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Behavioural Economics',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_chain.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'extract', label: 'Read the extract',   href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether nudge-based interventions (SDIL + traffic light labelling) are more effective than a direct Pigouvian consumption tax at correcting overconsumption of high-sugar soft drinks?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion — not just what sounds economic.',

    extract: [
      'UK SDIL statistics show that [[reformulation|50% of soft drinks were reformulated to avoid the levy]] before it even took effect in April 2018, and that average sugar content of soft drinks [[sugar-fall|fell 29% between 2015 and 2019]] (Public Health England).',
      'Traffic light nutritional labelling research by the Behavioural Insights Team found that [[red-label|red labels reduce purchase likelihood by 15% for impulsive buyers]], suggesting that salient information at point of decision can correct present bias without coercion.',
      'UK childhood obesity rates [[obesity|stopped rising in 2019–20 for the first time in decades]], coinciding with SDIL implementation — though multiple policy changes and COVID-related activity changes occurred in the same period.',
      'Denmark\'s fat tax on high-fat foods — a direct Pigouvian consumption tax — was [[denmark|repealed after 15 months due to cross-border shopping]] and political unpopularity, with consumers simply buying taxed items in Germany and Sweden.',
      'HMRC data shows the SDIL [[revenue|generated £340 million in revenue in 2022–23]], with most of this raised from producers who chose not to reformulate their products rather than from a broad-based consumer tax.'
    ],

    evidence: {
      'reformulation': { text: '50% of soft drinks were reformulated to avoid the levy' },
      'sugar-fall':    { text: 'fell 29% between 2015 and 2019' },
      'red-label':     { text: 'red labels reduce purchase likelihood by 15% for impulsive buyers' },
      'obesity':       { text: 'stopped rising in 2019–20 for the first time in decades' },
      'denmark':       { text: 'repealed after 15 months due to cross-border shopping' },
      'revenue':       { text: 'generated £340 million in revenue in 2022–23' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports nudges over Pigouvian taxes',  tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against nudges over taxes',      tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',       tone: 'blue',  icon: '?' }
    ],

    correct: {
      'reformulation': 'supports',
      'sugar-fall':    'supports',
      'red-label':     'supports',
      'obesity':       'complicates',
      'denmark':       'supports',
      'revenue':       'complicates'
    },

    explain: {
      'reformulation': 'The 50% pre-levy reformulation shows the SDIL worked as a supply-side nudge: producers changed their recipes to avoid the levy rather than passing higher prices to consumers. This is exactly what nudge theory predicts — changing the choice architecture (product composition) rather than restricting consumer freedom. Strongly supports nudges over direct consumption taxes.',
      'sugar-fall':    'A 29% reduction in average sugar content between 2015 and 2019 is a large structural change achieved without raising consumer prices. A Pigouvian consumption tax would have achieved some demand reduction but would also have been regressive. The SDIL achieved the outcome more efficiently and equitably. Supports nudges.',
      'red-label':     'A 15% reduction in purchase likelihood from red labels demonstrates that salient information at the point of decision can correct present bias directly — without any price change. This is the mechanism nudge theory predicts. If nudges have measurable effects, they can substitute for more coercive instruments. Supports nudges.',
      'obesity':       'The coincidence of falling obesity rates with SDIL is consistent with the nudge being effective — but multiple confounders exist (COVID lockdowns changed eating habits; other food policy changes occurred simultaneously). Correlation does not establish causation. This complicates rather than settles the argument.',
      'denmark':       'Denmark\'s fat tax was a direct Pigouvian consumption tax — the instrument being compared to nudges. Its failure after 15 months due to cross-border shopping and political backlash is strong evidence that direct consumption taxes face practical limitations that supply-side nudges (like SDIL) avoid. Strongly supports nudges.',
      'revenue':       'The £340m revenue figure complicates the comparison: it shows the SDIL is partly working as a revenue instrument (those who didn\'t reformulate pay the levy) and partly as a nudge (those who did reformulate avoided it). Whether the revenue is a feature or a cost of the SDIL design depends on whether it is recycled effectively. This cuts both ways.'
    },

    bucketCue: 'Strong application changes the conclusion — it does not just describe what is in the extract.',

    examBridge: '"The 50% pre-levy reformulation and 29% sugar content reduction show the SDIL acted as an effective supply-side nudge — changing product composition without raising consumer prices. Denmark\'s fat tax failure demonstrates the practical limits of direct Pigouvian consumption taxes. However, the obesity correlation complicates attribution, and the £340m revenue figure shows the SDIL is a hybrid rather than a pure nudge."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'             },
      { icon: '❓', text: 'Ask which details change the conclusion'           },
      { icon: '⚖️', text: 'Separate supporting evidence from complications'   }
    ]
  }
};
