/* ============================================================
   ECONOS — Link It · Context station data
   Inflation: read a news extract, classify the evidence
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:        'Causes of Inflation & Deflation',
  sessionLabel: 'Session 2 of 3: Link',
  backUrl:      'link_inflation_intro.html',

  stations: [
    { id: 'context', label: 'Use the context',    href: 'link_inflation_context.html' },
    { id: 'chain',   label: 'Build the chain',    href: 'link_inflation_chain.html'   },
    { id: 'flaw',    label: 'Spot the flaw'       },
    { id: 'judge',   label: 'Make the judgement'  }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in the extract matter most for judging whether inflationary pressure is easing?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Focus on what changes the answer, not just what sounds economic.',

    extract: [
      'UK inflation data this morning showed CPI inflation has [[cpi-fall|fallen from 6.8% to 3.2%]] in the year to March, the lowest rate since mid-2021.',
      'The Office for National Statistics said [[energy|energy prices have eased]] compared with the same period last year, helped by [[wholesale|lower wholesale gas prices]] and [[gov-support|government support in the first half of the year]].',
      'However, [[wages|wage growth remains above 5%]], with average regular pay rising 5.6% in the three months to February.',
      'Retail sales were also notable — [[retail|retail sales are weak]], falling 0.6% in March after a 0.4% drop in February.',
      'Meanwhile, [[services|many service firms continue to raise prices]], with the [[pmi|services PMI index still well above its long-run average]], according to S&P Global.'
    ],

    evidence: {
      'cpi-fall':    { text: 'fallen from 6.8% to 3.2%' },
      'energy':      { text: 'energy prices have eased' },
      'wholesale':   { text: 'lower wholesale gas prices' },
      'gov-support': { text: 'government support in the first half of the year' },
      'wages':       { text: 'wage growth remains above 5%' },
      'retail':      { text: 'retail sales are weak' },
      'services':    { text: 'many service firms continue to raise prices' },
      'pmi':         { text: 'services PMI index still well above its long-run average' }
    },

    buckets: [
      { id: 'easing',      label: 'Suggests inflation is easing',    tone: 'green', icon: '↑' },
      { id: 'persist',     label: 'Suggests inflation may persist',  tone: 'amber', icon: '∿' },
      { id: 'complicates', label: 'Complicates the judgement',       tone: 'blue',  icon: '?' }
    ],

    correct: {
      'cpi-fall':    'easing',
      'energy':      'easing',
      'wholesale':   'easing',
      'wages':       'persist',
      'services':    'persist',
      'pmi':         'persist',
      'retail':      'complicates',
      'gov-support': 'complicates'
    },

    explain: {
      'cpi-fall':    'The headline rate falling is the clearest direct evidence inflation is easing.',
      'energy':      'Cost-push pressure unwinding — directly reduces upward pressure on SRAS.',
      'wholesale':   'Falling input costs feed through to lower CPI with a lag.',
      'wages':       'Above-inflation wage growth sustains demand-pull pressure and risks a wage–price spiral.',
      'services':    'Sticky services inflation is the Bank of England\'s key worry — underlying inflation has not yet eased.',
      'pmi':         'A leading indicator that services firms are still raising prices, so price pressure is likely to persist.',
      'retail':      'Weak demand could ease inflation, but also signals economic weakness — it cuts both ways.',
      'gov-support': 'Support held energy prices down artificially in H1 — its absence going forward could put pressure back on.'
    },

    bucketCue: 'Good application uses context to change the conclusion.',

    examBridge: '"Although headline CPI has fallen sharply, persistent services inflation and strong wage growth suggest underlying pressure remains, complicating the case for early rate cuts."',

    whatGoodLooksLike: [
      { icon: '🔍',  text: 'Use evidence from the extract'        },
      { icon: '❓',  text: 'Ask which details matter most'        },
      { icon: '⚖️',  text: 'Separate evidence from judgement'     }
    ]
  }
};
