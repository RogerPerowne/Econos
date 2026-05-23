/* ============================================================
   ECONOS — Link It · Context station data
   Negative Externalities: classify evidence on extending the UK ETS
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Negative Externalities',
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
    question:    'Which details in this extract most change whether the government should extend and tighten the UK Emissions Trading Scheme to cover all major industrial polluters?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion — not just what sounds economic.',

    extract: [
      'New analysis from the Office for Environmental Protection estimates that UK steel and cement production generates [[health-costs|around £20 billion in annual health and environmental damage]], including respiratory illness, reduced life expectancy and climate impacts on communities near industrial sites.',
      'Proponents of extending the UK Emissions Trading Scheme argue that the existing scheme [[revenue|raised £4.4 billion in 2023, much of which was channelled into clean energy subsidies and green investment]] — evidence that a well-designed carbon price can both correct externalities and fund the green transition.',
      'However, industry groups warn that tightening the ETS would [[competitiveness|raise steel production costs by 18–22%]], threatening the viability of blast furnace operations in South Wales and Yorkshire.',
      'Economists raise the concern of [[leakage|carbon leakage: if UK steel production falls but global demand is met by producers in countries with weaker environmental controls]], total global emissions may not fall — and the domestic economic cost would be borne for no net environmental benefit.',
      'New elasticity estimates suggest that the [[inelastic|short-run price elasticity of demand for industrial steel is approximately −0.15]], meaning a large price rise from an extended ETS would result in only a modest reduction in output.'
    ],

    evidence: {
      'health-costs':    { text: 'around £20 billion in annual health and environmental damage' },
      'revenue':         { text: 'raised £4.4 billion in 2023, much of which was channelled into clean energy subsidies and green investment' },
      'competitiveness': { text: 'raise steel production costs by 18–22%' },
      'leakage':         { text: 'carbon leakage: if UK steel production falls but global demand is met by producers in countries with weaker environmental controls' },
      'inelastic':       { text: 'short-run price elasticity of demand for industrial steel is approximately −0.15' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports extending the ETS',       tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against extending the ETS', tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',  tone: 'blue',  icon: '?' }
    ],

    correct: {
      'health-costs':    'supports',
      'revenue':         'supports',
      'competitiveness': 'against',
      'leakage':         'complicates',
      'inelastic':       'complicates'
    },

    explain: {
      'health-costs':    'Quantifying £20bn of annual harm confirms a large MEC — the measured external cost directly justifies intervention to correct the overproduction from unregulated markets.',
      'revenue':         'Tax revenue recycled into clean energy subsidies creates a "double dividend": the ETS both corrects the externality and generates funds for further green transition. This strengthens the case for extending it.',
      'competitiveness': 'An 18–22% rise in production costs may make UK steel unviable, triggering plant closures and regional unemployment. This is a concrete argument against tightening the ETS without border adjustment protection.',
      'leakage':         'If UK output falls but global demand is satisfied by less regulated producers, total emissions may not fall. This complicates rather than settles the argument — border adjustment mechanisms (like a CBAM) could resolve it, or they might not.',
      'inelastic':       'With PED ≈ −0.15, a large price increase from the ETS cuts output and pollution only a little in the short run. The tax achieves less correction of overproduction than the theory predicts — complicating the case without clearly settling it.'
    },

    bucketCue: 'Strong application changes the conclusion — it does not just describe what is in the extract.',

    examBridge: '"Quantified evidence of a £20bn MEC strongly supports intervention, but the case for extending the ETS is complicated by inelastic short-run demand — the tax will raise prices significantly while reducing output only modestly — and by the risk of carbon leakage if unilateral UK action shifts production to less regulated economies."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};
