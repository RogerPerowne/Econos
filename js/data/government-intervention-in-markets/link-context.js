/* ============================================================
   ECONOS – Link It · Context station data
   Government Intervention in Markets: classify evidence on a rent control proposal
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Government Intervention in Markets',
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
    question:    'Which details in this extract most change whether a binding rent cap is the right way to protect tenants in a tight urban housing market?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'Average market rents in the city have risen 32% over the last three years, and [[affordability|~40% of private renters spend over half their post-tax income on housing]] – a level widely classed as severely unaffordable.',
      'Campaigners argue that an immediate cap holding rents at 2022 levels would [[short-run-gain|protect ~180,000 sitting tenants, locking in lower payments]] and preventing further displacement.',
      'However, landlord associations warn that [[supply-response|LR PES is high – Berlin\'s 2020 cap cut listings ~50% in a year]], as landlords sell to owner-occupiers or convert flats to short-term lets.',
      'City planning data show that [[quality-decline|SF maintenance per flat fell ~8% in the decade after rent stabilisation]], with landlords cutting non-essential repairs to offset capped revenue.',
      'A recent LSE study finds that [[targeting|capped flats are increasingly allocated via networks and key-money payments]] – disproportionately reaching higher-income or better-connected tenants rather than those in greatest need.'
    ],

    evidence: {
      'affordability':  { text: '~40% of private renters spend over half their post-tax income on housing' },
      'short-run-gain': { text: 'protect ~180,000 sitting tenants, locking in lower payments' },
      'supply-response':{ text: 'LR PES is high – Berlin\'s 2020 cap cut listings ~50% in a year' },
      'quality-decline':{ text: 'SF maintenance per flat fell ~8% in the decade after rent stabilisation' },
      'targeting':      { text: 'capped flats are increasingly allocated via networks and key-money payments' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports imposing the rent cap',    tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against the rent cap',       tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',   tone: 'blue',  icon: '?' }
    ],

    correct: {
      'affordability':   'supports',
      'short-run-gain':  'supports',
      'supply-response': 'against',
      'quality-decline': 'against',
      'targeting':       'complicates'
    },

    explain: {
      'affordability':   'A measured affordability crisis – 40% of renters spending over half their income on housing – confirms a genuine welfare problem the policy is trying to address. This supports intervention, because the status quo is producing severe consumer hardship that the market alone is not correcting through new supply quickly enough.',
      'short-run-gain':  'In the short run, sitting tenants benefit directly from a binding cap: lower contractual rents, less displacement, and a transfer of surplus from landlords to renters. This is a real and quantifiable welfare gain for 180,000 households and is the strongest case for the policy on equity grounds.',
      'supply-response': 'Evidence that listings fall by around 50% within a year of a binding cap – as in Berlin – is a direct measurement of the shortage the standard model predicts. It shows the long-run supply response is large: landlords exit the market, reducing the total stock of rented accommodation and leaving new entrants worse off. This is the central economic argument against the cap.',
      'quality-decline': 'An 8% fall in maintenance spending per flat after rent stabilisation is non-price rationing at work: when sellers cannot raise the price, they cut quality to restore margins. The headline rent is lower but the real product is also worse – undermining the welfare gain the cap is supposed to deliver.',
      'targeting':       'If capped flats end up reaching well-connected or higher-income tenants rather than the poorest households, the cap fails on its own distributional terms. This complicates the case either way: the policy still helps some lower-income tenants who hold tenancies, but means-tested housing benefit or direct provision could plausibly reach the target group more reliably.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"Quantified evidence of severe unaffordability (40% of renters spending over half their income on housing) and short-run protection for 180,000 sitting tenants supports a binding rent cap, but a 50% fall in new listings after Berlin\'s cap and an 8% drop in maintenance spending after San Francisco-style stabilisation directly evidence the shortage and quality-decline the standard model predicts – and non-price rationing via networks and key money means the cap does not reliably reach the lowest-income tenants."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};
