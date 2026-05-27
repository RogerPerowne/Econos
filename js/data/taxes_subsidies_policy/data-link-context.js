/* ============================================================
   ECONOS – Link It · Context station data
   Taxes & Subsidies as Policy: classify evidence on the UK CfD scheme
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Taxes &amp; Subsidies as Policy',
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
    question:    'Which details in this extract most change whether the UK government\'s Contracts for Difference (CfD) subsidy scheme is an effective way to expand renewable energy production?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'The UK\'s Contracts for Difference scheme guarantees offshore wind producers a fixed "strike price" – currently £44 per MWh – regardless of the market price, with the difference paid by a levy on household energy bills. The scheme has [[capacity|delivered 14 GW of offshore wind – the world\'s largest such market]] by installed capacity.',
      'Independent economists calculate that each megawatt-hour of wind energy generates [[meb|approximately £28 in marginal external benefits]] – through avoided carbon damage, reduced air pollution and energy security gains – which the private market would otherwise not reward producers for providing.',
      'However, consumer groups warn that the CfD levy adds [[regressive-cost|an estimated £65 per year to average household energy bills]], with the burden falling disproportionately on fuel-poor households who spend the highest share of income on energy.',
      'The Energy Transitions Commission notes that [[cost-reduction|offshore wind LCOE fell from £120/MWh (2012) to £44/MWh (2024) – −63%]] – suggesting that the subsidy is successfully pulling technology down the learning curve and may become less necessary as the sector matures.',
      'Energy security analysts point out that [[fossil-dependency|the UK imported 39% of its gas needs in 2022]], exposing consumers to volatile international markets; domestic renewable expansion directly reduces this dependency, an external benefit not captured in market prices.'
    ],

    evidence: {
      'capacity':         { text: 'delivered 14 GW of offshore wind – the world\'s largest such market' },
      'meb':              { text: 'approximately £28 in marginal external benefits' },
      'regressive-cost':  { text: 'an estimated £65 per year to average household energy bills' },
      'cost-reduction':   { text: 'offshore wind LCOE fell from £120/MWh (2012) to £44/MWh (2024) – −63%' },
      'fossil-dependency': { text: 'the UK imported 39% of its gas needs in 2022' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the CfD subsidy scheme',  tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against the CfD scheme',    tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',  tone: 'blue',  icon: '?' }
    ],

    correct: {
      'capacity':          'supports',
      'meb':               'supports',
      'regressive-cost':   'against',
      'cost-reduction':    'complicates',
      'fossil-dependency': 'supports'
    },

    explain: {
      'capacity':          'Delivering 14 GW and the world\'s largest offshore wind market is direct evidence of deployment success – the subsidy has expanded output well beyond what the unsubsidised private market would have provided, strongly supporting the CfD scheme\'s effectiveness.',
      'meb':               'Quantifying £28 of MEB per MWh confirms that a significant positive externality exists and goes unrewarded by the private market. This is the theoretical foundation for the subsidy: it closes the gap between MPB and MSB, correcting the underproduction from the unsubsidised market.',
      'regressive-cost':   'A flat levy of £65 per year on household energy bills is regressive – fuel-poor households spend a higher share of income on energy and bear a disproportionate burden. This is a concrete argument against the CfD\'s funding mechanism, even if the subsidy itself is justified by the externality.',
      'cost-reduction':    'A 63% fall in levelised costs strengthens the case that the subsidy is working – the technology is maturing and costs are converging with the strike price. But this also raises the question of whether the subsidy is still needed as market prices approach £44/MWh, complicating the case rather than settling it either way.',
      'fossil-dependency': 'The UK\'s 39% gas import dependency creates energy security risks not captured in private market prices – this is an external benefit of domestic renewables beyond just carbon reduction. Quantifying this supports the case that the MEB is large enough to justify the CfD subsidy.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"Quantified evidence of £28 MEB per MWh and 14 GW of delivered capacity strongly supports the CfD scheme, but the case is complicated by the 63% cost reduction – the subsidy may be self-undermining as market prices converge with the strike price – and the regressive burden of the levy on fuel-poor households argues for an alternative funding mechanism even if the subsidy itself remains justified."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};
