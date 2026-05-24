/* ============================================================
   ECONOS — Link It · Context station data
   PPF: classify evidence on UK green investment as a PPF trade-off
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Production Possibility Frontiers',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_chain.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether UK green investment represents a rational PPF trade-off — accepting a short-run sacrifice of consumption to achieve a long-run outward PPF shift?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion — not just what sounds economic.',

    extract: [
      'The UK Labour government pledged [[pledge|£28 billion per year in green investment]] as part of its 2024 general election manifesto — later scaled to £7.3 billion in the first term — focused on offshore wind, solar and battery storage, representing an explicit allocation of public resources toward investment goods rather than current consumption.',
      'UK productivity growth has averaged only [[productivity|0.5% per year since 2008]], compared with 2.5% pre-financial crisis (ONS 2023), suggesting the PPF has barely shifted outward since the financial crisis — reflecting insufficient investment in productive capacity.',
      'UK renewable energy capacity doubled between 2015 and 2023, with [[renewables|wind now providing 30% of electricity generation]] (National Grid ESO), demonstrating that previous green infrastructure investment has already shifted the production frontier — evidence the mechanism works.',
      'Every £1 of public green investment is estimated to [[crowdin|crowd in £3–4 of private green investment]] (IPPR/LSE Grantham Institute 2023) — suggesting the opportunity cost of green investment may be lower than the gross figure implies, as private activity amplifies each pound of public spending.',
      'UK defence spending is required by NATO to reach [[defence|2.5% of GDP — rising from 2.3% in 2023]] — meaning green investment competes not only with NHS and welfare spending but also with mandatory international commitments, constraining the trade-off space available.'
    ],

    evidence: {
      'pledge':      { text: '£28 billion per year in green investment' },
      'productivity': { text: '0.5% per year since 2008' },
      'renewables':  { text: 'wind now providing 30% of electricity generation' },
      'crowdin':     { text: 'crowd in £3–4 of private green investment' },
      'defence':     { text: '2.5% of GDP — rising from 2.3% in 2023' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the investment as a rational PPF trade-off', tone: 'green', icon: '↑' },
      { id: 'complicates', label: 'Complicates the case either way',                     tone: 'blue',  icon: '?' },
      { id: 'against',     label: 'Argues the trade-off is less justified',              tone: 'pink',  icon: '↓' }
    ],

    correct: {
      'pledge':       'supports',
      'productivity': 'supports',
      'renewables':   'supports',
      'crowdin':      'complicates',
      'defence':      'complicates'
    },

    explain: {
      'pledge':       'An explicit £28bn annual green investment pledge is a direct PPF allocation: public resources shift from current consumption (NHS, welfare) to investment goods (wind farms, battery storage). The scale of the commitment signals that the government judges the long-run PPF shift will exceed the opportunity cost — supporting the rational trade-off claim.',
      'productivity': 'Post-2008 productivity growth of only 0.5%/year confirms that the PPF has barely shifted outward over 15 years — a structural consequence of chronic underinvestment. This supports the case for green investment: the frontier needs to move, and past stagnation shows the cost of not investing.',
      'renewables':   'Wind energy already providing 30% of UK generation demonstrates that previous PPF trade-offs have delivered measurable outward capacity shifts. This is empirical evidence that the mechanism works — not just a theoretical claim. It directly supports the rationality of the current investment trade-off.',
      'crowdin':      'If each £1 of public investment crowds in £3–4 of private capital, the true opportunity cost of green investment is significantly lower than the headline figure suggests — the multiplier changes the trade-off calculation. However, if private crowding-in fails to materialise, the full opportunity cost falls on current public spending. This complicates rather than settles the verdict.',
      'defence':      'Rising NATO defence commitments mean green investment competes with a mandatory, internationally binding spending commitment — not just discretionary domestic priorities. This constrains the available resource pool and means the PPF trade-off is tighter than it appears, complicating the case without clearly settling it either way.'
    },

    bucketCue: 'Strong application changes the conclusion — it does not just describe what is in the extract.',

    examBridge: '"UK green investment is a classic PPF trade-off: the £28bn pledge moves resources from current consumption toward investment goods, with the long-run justification being an outward PPF shift. The fact that wind energy already provides 30% of generation demonstrates the mechanism has delivered in the past. However, the case is complicated by crowding-in uncertainty — the true opportunity cost depends on whether £3–4 of private investment actually materialises per £1 of public spending — and by rising defence commitments that tighten the resource constraint further."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};
