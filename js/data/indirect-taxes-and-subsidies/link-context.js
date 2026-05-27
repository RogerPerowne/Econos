/* ============================================================
   ECONOS – Link It · Context station data
   Indirect Taxes & Subsidies: classify evidence on extending the UK sugar levy
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Indirect Taxes &amp; Subsidies',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('chain'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether the UK government should extend the sugar levy to a wider range of high-sugar foods?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      '[[health-costs|The NHS spends £6.1bn per year treating obesity-related conditions]], including type 2 diabetes, cardiovascular disease and joint replacements – costs ultimately borne by taxpayers rather than those consuming excess sugar.',
      'Supporters of extension argue that the existing levy has already reduced sugar content in drinks by 28.8% on average, with manufacturers reformulating products to avoid the charge – evidence that [[reformulation|the tax drives producer behaviour change without raising consumer prices]] for those choosing reformulated products.',
      'However, food industry groups warn that applying the levy to confectionery and baked goods would [[regressive|raise costs disproportionately for low-income households]], who spend a larger share of income on these goods, making the tax regressive in its distributional impact.',
      'Nutritionists point out that [[substitutes|demand for chocolate and biscuits is price inelastic short-run – PED ≈ −0.3]] – meaning a levy would raise prices without significantly reducing consumption.',
      'New research suggests that [[evidence-base|a 10% price rise from the sugar drinks levy cut sales 12%]], indicating the original levy worked as intended where demand was more elastic than initially forecast.'
    ],

    evidence: {
      'health-costs':  { text: 'The NHS spends £6.1bn per year treating obesity-related conditions' },
      'reformulation': { text: 'the tax drives producer behaviour change without raising consumer prices' },
      'regressive':    { text: 'raise costs disproportionately for low-income households' },
      'substitutes':   { text: 'demand for chocolate and biscuits is price inelastic short-run – PED ≈ −0.3' },
      'evidence-base': { text: 'a 10% price rise from the sugar drinks levy cut sales 12%' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports extending the levy',       tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against extending the levy', tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',   tone: 'blue',  icon: '?' }
    ],

    correct: {
      'health-costs':  'supports',
      'reformulation': 'supports',
      'regressive':    'against',
      'substitutes':   'complicates',
      'evidence-base': 'supports'
    },

    explain: {
      'health-costs':  'Quantifying £6.1bn of annual NHS costs confirms a large negative externality from excess sugar consumption. This measured external cost directly justifies intervention to correct the overconsumption that arises when consumers do not face the full social cost of their choices.',
      'reformulation': 'Evidence that producers reformulated drinks to avoid the existing levy – reducing sugar content by 28.8% without raising consumer prices – shows the tax can correct the externality through a supply-side channel rather than just a price signal to consumers. This is a powerful argument for extension.',
      'regressive':    'If extending the levy to confectionery and baked goods raises costs for low-income households disproportionately, the distributional impact is regressive – the tax takes a larger share of income from those least able to afford it. This is a concrete welfare argument against extension, especially without compensatory measures.',
      'substitutes':   'A PED of −0.3 for confectionery means the levy would raise prices significantly but reduce consumption only modestly. The tax would generate revenue but do little to reduce the obesity externality – complicating rather than settling the case, since the degree of correction depends on which goods are taxed and whether PED differs across product categories.',
      'evidence-base': 'A price elasticity implied by a 10% price rise causing a 12% fall in sales volume (PED ≈ −1.2) for soft drinks shows the original levy succeeded in reducing consumption where demand was more elastic. This positive evidence supports extension, though it also highlights that effectiveness will vary where PED differs – as with confectionery.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"Quantified evidence of £6.1bn in NHS externality costs and producer reformulation strongly supports extending the levy, but the case is complicated by the inelastic demand for confectionery (PED ≈ −0.3) – the tax would raise prices substantially while reducing consumption only modestly – and by the regressive distributional impact on low-income households who spend a larger share of income on these goods."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};
