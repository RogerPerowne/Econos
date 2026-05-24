/* ============================================================
   ECONOS — Link It · Context station data
   PED: classify evidence on raising UK fuel duty to cut emissions
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Price Elasticity of Demand',
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
    question:    'Which details in this extract most change whether the UK government should raise fuel duty to reduce carbon emissions from road transport?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion — not just what sounds economic.',

    extract: [
      'Government analysis confirms that road transport accounts for [[carbon|27% of total UK greenhouse gas emissions]], the largest single sector, and that emissions have fallen only 3% in the past decade despite improvements in vehicle efficiency.',
      'Economists at the Institute for Fiscal Studies estimate that [[inelastic|short-run PED for petrol ≈ −0.15, rising to −0.6 in the long run]] as households switch to electric vehicles or change commuting patterns.',
      '[[revenue|UK fuel duty raises approximately £25 billion per year]], making it one of the largest sources of government revenue — proponents argue that a higher rate would both reduce emissions and generate funds for green infrastructure investment.',
      'However, the Resolution Foundation reports that [[regressive|the lowest quintile spend 3.8% of income on fuel duty vs 1.2% for top]], raising serious concerns about the distributional impact of any further increase.',
      'Meanwhile, [[ev-growth|EV sales grew 40% in 2023 and now form 16% of new car registrations]], suggesting that over the longer term the demand for petrol may become more elastic as affordable substitutes become widely available.'
    ],

    evidence: {
      'carbon':    { text: '27% of total UK greenhouse gas emissions' },
      'inelastic': { text: 'short-run PED for petrol ≈ −0.15, rising to −0.6 in the long run' },
      'revenue':   { text: 'UK fuel duty raises approximately £25 billion per year' },
      'regressive':{ text: 'the lowest quintile spend 3.8% of income on fuel duty vs 1.2% for top' },
      'ev-growth': { text: 'EV sales grew 40% in 2023 and now form 16% of new car registrations' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports raising fuel duty',       tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against raising fuel duty', tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',  tone: 'blue',  icon: '?' }
    ],

    correct: {
      'carbon':    'supports',
      'inelastic': 'complicates',
      'revenue':   'supports',
      'regressive':'against',
      'ev-growth': 'complicates'
    },

    explain: {
      'carbon':    'Road transport being the single largest source of UK greenhouse gas emissions at 27% confirms a significant negative externality — the scale of the market failure directly supports a policy intervention such as a higher fuel duty.',
      'inelastic': 'With short-run PED ≈ −0.15, a large price rise causes only a small fall in quantity demanded. The tax raises substantial revenue but barely cuts emissions in the near term — complicating the case by suggesting it functions more as a revenue tool than an environmental instrument until long-run substitution takes effect.',
      'revenue':   'The existing £25bn annual revenue stream demonstrates that fuel duty is a proven fiscal instrument. Proponents can argue a higher rate would amplify both the revenue yield and the environmental signal, generating funds for green infrastructure that accelerates the transition.',
      'regressive':'Lowest-income households spending over three times the income share on fuel duty than the highest quintile means a further increase imposes a disproportionately heavy burden on those least able to absorb it — a compelling distributional argument against raising the duty without compensatory measures.',
      'ev-growth': 'Rapid EV uptake means the long-run PED for petrol is rising toward −0.6 as substitutes become available — complicating the case because the same tax will become more effective at cutting emissions over time, but the timing and pace of that transition are uncertain.'
    },

    bucketCue: 'Strong application changes the conclusion — it does not just describe what is in the extract.',

    examBridge: '"The 27% emissions share confirms a strong case for intervention, but with short-run PED ≈ −0.15, raising fuel duty is primarily a revenue instrument rather than an effective emissions-reduction tool in the near term — making the policy\'s environmental justification much weaker than its fiscal rationale."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};
