/* ============================================================
   ECONOS – Link It · Context station data
   Supply: classify evidence on the UK energy price shock 2021–22
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Supply',
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
    question:    'Which details in this extract most change whether rising energy input costs are the most significant supply-side shock facing UK energy-intensive manufacturing in 2021–22?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'Natural gas wholesale prices in the UK [[gasprices|rose from ~50p to ~450p per therm (Jan–Oct 2021) – about +400%]], driven by post-COVID demand recovery and tightening Russian pipeline supplies into European markets.',
      'British Steel announced in November 2021 that it was [[steelfurnace|suspending a Scunthorpe blast furnace, citing surging energy costs]] that made continuous operation economically unviable at the prevailing output prices.',
      'ONS data show that [[foodinflation|UK food producer price inflation hit 14.8% in 2022]], as energy-intensive processing and transport costs surged through supply chains from farm gate to shelf, pushing input cost increases into consumer prices.',
      'Industry analysts noted that [[hedging|firms on fixed-price energy contracts were shielded from the spike]] in 2021–22, facing no immediate cost increase and therefore no supply contraction.',
      'In October 2022 the UK government introduced the [[ebrs|Energy Bill Relief Scheme (EBRS), capping industrial gas at £0.211/kWh]] for eligible businesses, partially reversing the cost shock and preventing some of the supply contraction that would otherwise have occurred.'
    ],

    evidence: {
      'gasprices':  { text: 'rose from ~50p to ~450p per therm (Jan–Oct 2021) – about +400%' },
      'steelfurnace': { text: 'suspending a Scunthorpe blast furnace, citing surging energy costs' },
      'foodinflation': { text: 'UK food producer price inflation hit 14.8% in 2022' },
      'hedging':    { text: 'firms on fixed-price energy contracts were shielded from the spike' },
      'ebrs':       { text: 'Energy Bill Relief Scheme (EBRS), capping industrial gas at £0.211/kWh' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the claim',      tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against the claim', tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case',     tone: 'blue',  icon: '?' }
    ],

    correct: {
      'gasprices':    'supports',
      'steelfurnace': 'supports',
      'foodinflation':'supports',
      'hedging':      'complicates',
      'ebrs':         'complicates'
    },

    explain: {
      'gasprices':     'A 400% rise in natural gas spot prices from Jan to Oct 2021 provides direct quantitative evidence of a large supply-side cost shock. For energy-intensive sectors where gas is 20–40% of total costs, this magnitude of increase raises marginal production costs substantially, shifting the supply curve left.',
      'steelfurnace':  'The temporary suspension of a blast furnace by British Steel is direct evidence that rising energy costs made production unviable at existing prices – a real-world supply contraction consistent with a leftward supply shift. This confirms the mechanism, not just the direction of change.',
      'foodinflation': 'Food producer price inflation of 14.8% demonstrates that the energy cost shock rippled through supply chains beyond the most obviously energy-intensive sectors. Rising processing and transport costs shifted supply curves left across multiple food markets, supporting the breadth of the claim.',
      'hedging':       'Firms with fixed-price energy contracts did not face higher costs in 2021–22 and therefore had no supply contraction. This means the aggregate supply shift was smaller than the spot price spike alone would suggest – only the proportion of firms exposed to spot prices actually shifted their supply curve. This complicates the claim without refuting it.',
      'ebrs':          'The EBRS cap partially reversed the cost shock from October 2022 onward, keeping some firms in production that would otherwise have exited. Government intervention moderated the supply contraction below what the unmitigated cost shock would have produced – complicating any assessment of how severe the supply-side impact actually was.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"A 400% rise in natural gas prices provides strong evidence of a significant supply-side cost shock, confirmed by the British Steel furnace suspension and a 14.8% rise in food producer price inflation. However, the significance of the shock was conditioned by hedging arrangements (which shielded some firms entirely) and government intervention through the EBRS (which partially offset the cost increase for others) – complicating any blanket claim about the shock\'s severity."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};
