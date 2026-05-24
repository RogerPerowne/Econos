/* ============================================================
   ECONOS — Link It · Context station data
   Positive Externalities: classify evidence on NHS vaccination provision
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Positive Externalities',
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
    question:    'Which details in this extract most change whether direct public provision of vaccinations is the most effective policy to correct the underproduction caused by positive consumption externalities?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion — not just what sounds economic.',

    extract: [
      'NHS England data for 2023–24 show that [[mmr-coverage|MMR vaccination coverage for children aged 5 reached 95.1%]] — meeting the WHO herd immunity threshold of 95% for measles, which requires sustained national uptake to prevent outbreaks.',
      'UK Health Security Agency analysis estimates that [[meb-size|each 1 ppt rise in measles coverage prevents ~24,000 cases per year]] in England — providing a large, quantifiable marginal external benefit that the free market systematically fails to deliver.',
      'Research on UK private flu vaccination (employer schemes and pharmacies) shows [[private-uptake|only 8% uptake before NHS programme expansion]] — compared with 73% of at-risk adults covered under the NHS flu programme (2022–23) — confirming that the unsubsidised market produces well below the social optimum.',
      'Evidence from vaccine hesitancy surveys (2022) suggests that [[hesitancy|~15% of MMR-declining parents cited ideology, not cost or access]] for non-vaccination.',
      'The 2019 measles outbreak in England (991 cases) followed [[coverage-fall|MMR coverage falling to 91.2% in 2018 — 3.8 ppt below herd immunity]] — illustrating that small coverage falls can trigger large externality losses and that the benefit of public provision is sensitive to near-threshold effects.'
    ],

    evidence: {
      'mmr-coverage':    { text: 'MMR vaccination coverage for children aged 5 reached 95.1%' },
      'meb-size':        { text: 'each 1 ppt rise in measles coverage prevents ~24,000 cases per year' },
      'private-uptake':  { text: 'only 8% uptake before NHS programme expansion' },
      'hesitancy':       { text: '~15% of MMR-declining parents cited ideology, not cost or access' },
      'coverage-fall':   { text: 'MMR coverage falling to 91.2% in 2018 — 3.8 ppt below herd immunity' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports direct public provision',        tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against direct provision',         tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',         tone: 'blue',  icon: '?' }
    ],

    correct: {
      'mmr-coverage':   'supports',
      'meb-size':       'supports',
      'private-uptake': 'supports',
      'hesitancy':      'against',
      'coverage-fall':  'complicates'
    },

    explain: {
      'mmr-coverage':   'Coverage of 95.1% confirms that NHS free provision achieves the social optimum Q* — the herd immunity threshold. This directly supports the claim that public provision corrects the underproduction from positive consumption externalities.',
      'meb-size':       'A quantified MEB of 24,000 fewer measles cases per 1% coverage point is large and measurable — precisely the conditions under which direct provision is most justified. It confirms that the external benefit ignored by the market is substantial.',
      'private-uptake': 'Private uptake of only 8% vs NHS-driven coverage of 73% demonstrates the size of the gap between Q_market and Q*. Without free provision, the market systematically fails to reach the social optimum — directly supporting the case for direct public provision.',
      'hesitancy':      'If 15% of non-vaccinators cite ideology rather than cost, free provision cannot convert them — the price barrier is not binding for this group. Direct provision has a ceiling and cannot achieve Q* alone, arguing against it as the sole correction mechanism.',
      'coverage-fall':  'The 2019 outbreak shows that the MEB is non-linear near the threshold: a small fall from 95.1% to 91.2% triggered a large externality loss. This complicates rather than settles the case — it shows that direct provision must be sustained indefinitely and complemented by behavioural policy to maintain Q*.'
    },

    bucketCue: 'Strong application changes the conclusion — it does not just describe what is in the extract.',

    examBridge: '"The large, quantified MEB (24,000 fewer measles cases per 1% coverage point) and the collapse of private uptake to 8% strongly support direct public provision — the NHS programme achieves Q* reliably where the market fails. However, the case is complicated by vaccine hesitancy (ideological refusal does not respond to price reduction) and by the coverage-fall evidence — sustaining Q* above the herd immunity threshold requires both continuous public provision and complementary behavioural interventions."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};
