/* ============================================================
   ECONOS — Link It · Context station data
   The Price Mechanism: classify evidence on UK food prices 2021–23
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'The Price Mechanism',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_chain.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether higher food prices following the Ukraine war successfully rationed supply, signalled producers and incentivised investment — demonstrating the allocative power of the price mechanism?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion — not just what sounds economic.',

    extract: [
      'UK food price inflation hit [[inflation|19.2% in March 2023]] — the highest rate since 1977 (ONS) — indicating that the supply shock transmitted a large price signal to consumers, rationing demand for food at the original price level.',
      'UK farmland prices rose [[farmland|14% in 2023, the highest annual rise in 15 years]] (Savills), reflecting farmer investment responses to high commodity prices and confirming that the incentive function of the price mechanism was operating.',
      'UK wheat planting area rose [[planting|3% in 2023]] (AHDB) as farmers responded to high prices, providing direct evidence that the signalling function of the price mechanism was translating into expanded future supply.',
      'Global wheat output recovered by [[global-recovery|2023–24 as non-Ukraine producers (Argentina, Australia, Canada) expanded production]] in response to the price signal, suggesting the international price mechanism was successfully reallocating supply.',
      'UK food banks reported a [[foodbanks|37% increase in demand]] (Trussell Trust 2023), suggesting the rationing function of price excludes the lowest-income households from access to basic food.'
    ],

    evidence: {
      'inflation':        { text: '19.2% in March 2023' },
      'farmland':         { text: '14% in 2023, the highest annual rise in 15 years' },
      'planting':         { text: '3% in 2023' },
      'global-recovery':  { text: '2023–24 as non-Ukraine producers (Argentina, Australia, Canada) expanded production' },
      'foodbanks':        { text: '37% increase in demand' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the claim',      tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against the claim', tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case',     tone: 'blue',  icon: '?' }
    ],

    correct: {
      'inflation':       'supports',
      'farmland':        'supports',
      'planting':        'supports',
      'global-recovery': 'supports',
      'foodbanks':       'complicates'
    },

    explain: {
      'inflation':       'A 19.2% price rise is a large and clear price signal — the rationing function was operating strongly, with higher prices excluding lower-demand consumers and directing existing supply to those with highest WTP.',
      'farmland':        'A 14% rise in farmland prices — the highest in 15 years — directly confirms the incentive function: higher commodity prices raised the expected return on agricultural investment, attracting capital into farming.',
      'planting':        'A 3% rise in UK wheat planting confirms the signalling function: the price signal reached UK producers and changed their supply decisions for the next season, beginning to correct the supply shortfall.',
      'global-recovery': 'The international supply recovery shows the price mechanism coordinating production across borders — the global price signal directed Argentina, Australia and Canada to expand, reallocating world supply toward shortage areas.',
      'foodbanks':       'A 37% rise in food bank demand shows that price rationing excludes the poorest households from basic food access. The price mechanism rationed efficiently (demand was reduced) but inequitably (those with low incomes were priced out of necessities), complicating the claim that it is the most efficient allocator of food resources.'
    },

    bucketCue: 'Strong application changes the conclusion — it does not just describe what is in the extract.',

    examBridge: '"The 19.2% food price inflation, 3% rise in wheat planting and 14% farmland price rise all support the claim that the price mechanism performed its three functions after the Ukraine war supply shock. However, a 37% increase in food bank usage complicates the efficiency verdict — price rationing successfully reduced demand but did so by excluding the lowest-income households from food access, revealing an equity failure that requires complementary welfare policy."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};
