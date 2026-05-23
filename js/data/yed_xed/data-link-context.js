/* ============================================================
   ECONOS — Link It · Context station data
   YED/XED: classify evidence on the UK cost of living crisis 2022–23
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Income & Cross-Price Elasticity',
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
    question:    'Which details in this extract most change whether falling real household income during the cost of living crisis reduced demand for luxury goods more than for necessities, consistent with their higher income elasticity of demand?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion — not just what sounds economic.',

    extract: [
      'Office for National Statistics data show that [[income|UK real disposable household income fell 2.5% in 2022]], the largest annual fall since ONS records began, as inflation (CPI 11.1% peak) outpaced wage growth.',
      'UK new luxury car registrations (£60,000+) [[luxury-cars|fell 18% in 2022]] while entry-level car sales held broadly stable (SMMT 2022) — consistent with luxury goods experiencing a disproportionate demand fall.',
      'Aldi and Lidl combined market share reached [[budget|a record 17.3% in 2023 (Kantar)]] as consumers traded down from premium to budget supermarkets — budget alternatives captured switching demand.',
      'UK overseas holiday bookings fell 15% in 2022, but [[holidays|domestic short breaks rose 8% (ABTA 2022)]] — suggesting substitution between international and domestic holidays rather than a pure income effect.',
      'Demand for food bank use [[foodbanks|rose 37% in 2022–23 (Trussell Trust)]] despite aggregate income statistics showing smaller falls — highlighting that income changes are unevenly distributed across households.'
    ],

    evidence: {
      'income':      { text: 'UK real disposable household income fell 2.5% in 2022' },
      'luxury-cars': { text: 'fell 18% in 2022' },
      'budget':      { text: 'a record 17.3% in 2023 (Kantar)' },
      'holidays':    { text: 'domestic short breaks rose 8% (ABTA 2022)' },
      'foodbanks':   { text: 'rose 37% in 2022–23 (Trussell Trust)' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports YED explaining the demand pattern', tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues another factor is primary',           tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',            tone: 'blue',  icon: '?' }
    ],

    correct: {
      'income':      'supports',
      'luxury-cars': 'supports',
      'budget':      'supports',
      'holidays':    'complicates',
      'foodbanks':   'complicates'
    },

    explain: {
      'income':      'A 2.5% real income fall is the trigger variable for any YED analysis. Real disposable income — not nominal wages — is what shifts the demand curve for income-sensitive goods. This is the necessary precondition: without a confirmed income fall, YED is irrelevant to the demand shift.',
      'luxury-cars': 'An 18% demand fall from a 2.5% income fall implies YED ≈ 7.2 — strongly consistent with luxury status (YED > 1). This directly confirms that demand for luxury goods fell more than proportionally, supporting YED as the explanation. The contrast with stable entry-level sales amplifies the point.',
      'budget':      'Rising budget supermarket share (17.3%) as incomes fall is consistent with YED < 0 for budget goods (inferior goods gaining) and YED > 1 for premium goods (falling). XED between luxury and value substitutes is positive — as premium demand fell, budget demand rose. This supports the YED framework.',
      'holidays':    'The shift from overseas to domestic holidays could reflect income effects (YED analysis) or substitution effects (XED — domestic as substitute for international travel). Both mechanisms could explain the pattern. Complicates the analysis because XED and YED are both at work, and it is not clear which is primary.',
      'foodbanks':   'A 37% rise in food bank use suggests extreme income falls for some households — far greater than the 2.5% aggregate figure. Aggregate YED can mislead if the income change is highly unevenly distributed: luxury demand may fall less than predicted if high-income households (the main luxury buyers) were relatively insulated. Complicates the aggregate YED explanation.'
    },

    bucketCue: 'Strong application changes the conclusion — it does not just describe what is in the extract.',

    examBridge: '"The 18% fall in luxury car registrations from a 2.5% income fall (implied YED ≈ 7) strongly supports YED > 1 for luxury goods. However, the aggregate income figure may mislead: food bank use rose 37%, suggesting the real income fall was concentrated among lower-income households who rarely buy luxury goods — which would mean aggregate luxury demand should have fallen less than predicted."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'          },
      { icon: '❓', text: 'Ask which details change the conclusion'        },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};
