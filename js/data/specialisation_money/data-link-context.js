/* ============================================================
   ECONOS — Link It · Context station data
   Specialisation & Money: classify evidence on the claim that
   specialisation raises productive efficiency but requires money
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Specialisation & Money',
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
    question:    'Which details in this extract most change whether the claim holds — that specialisation raises productive efficiency but requires money to function?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion — not just what sounds economic.',

    extract: [
      'Adam Smith\'s pin factory demonstrated that [[pin-factory|dividing pin production into 18 distinct operations allowed ten workers to produce 48,000 pins per day — compared with perhaps 20 if each worked alone]]. The division of labour raised output per worker dramatically through practice, specialisation of tools, and the elimination of time lost switching tasks.',
      'Modern UK manufacturing extends this logic across global supply chains. [[car-components|A single UK-built car requires over 30,000 components, most of them imported]], with suppliers themselves specialising in single sub-assemblies such as semiconductors, brake systems or wiring looms.',
      'However, this interdependence carries risk. [[toyota-shutdown|Toyota\'s UK plants halted production during the 2021 semiconductor shortage]], demonstrating that deep specialisation creates vulnerability when any link in the chain is disrupted.',
      'Exchange at this scale is only possible because money performs its three core functions. [[uk-trade|The UK trades over £800 billion of goods and services per year]] — a volume of exchange that would be impossible under barter, which requires a double coincidence of wants between every pair of trading partners.',
      'Without money, [[barter-constraint|a car-seat manufacturer wanting steel would need to find a steel producer who simultaneously wanted car seats]] — a condition so restrictive that complex supply chains could not exist.'
    ],

    evidence: {
      'pin-factory':       { text: 'dividing pin production into 18 distinct operations allowed ten workers to produce 48,000 pins per day — compared with perhaps 20 if each worked alone' },
      'car-components':    { text: 'A single UK-built car requires over 30,000 components, most of them imported' },
      'toyota-shutdown':   { text: 'Toyota\'s UK plants halted production during the 2021 semiconductor shortage' },
      'uk-trade':          { text: 'The UK trades over £800 billion of goods and services per year' },
      'barter-constraint': { text: 'a car-seat manufacturer wanting steel would need to find a steel producer who simultaneously wanted car seats' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the claim',    tone: 'green', icon: '↑' },
      { id: 'challenges',  label: 'Challenges the claim',  tone: 'pink',  icon: '↓' },
      { id: 'neither',     label: 'Neither',               tone: 'blue',  icon: '?' }
    ],

    correct: {
      'pin-factory':       'supports',
      'car-components':    'supports',
      'toyota-shutdown':   'challenges',
      'uk-trade':          'supports',
      'barter-constraint': 'supports'
    },

    explain: {
      'pin-factory':       'This is the classic evidence for the division of labour raising productivity. Outputper worker rises from ~2 to ~4,800 pins — a direct illustration that specialisation delivers productive efficiency gains.',
      'car-components':    'A modern car requiring 30,000+ imported components shows the depth and scale of specialisation in practice. This supports the claim that specialisation underpins modern large-scale production.',
      'toyota-shutdown':   'Plant shutdowns from a semiconductor shortage reveal a direct cost of deep specialisation — systemic interdependence creates fragility. This challenges the claim by showing that specialisation also creates vulnerability.',
      'uk-trade':          '£800bn in annual trade is the exchange system that specialisation depends on. Money makes this scale of exchange possible — directly supporting the claim that specialisation requires a medium of exchange to realise productivity gains.',
      'barter-constraint': 'The double coincidence of wants problem shows precisely why barter cannot support specialised economies. This supports the claim that money is a necessary condition for specialisation to deliver its efficiency benefits.'
    },

    bucketCue: 'Strong application changes the conclusion — it does not just describe what is in the extract.',

    examBridge: '"The pin factory and the 30,000-component car supply chain both confirm that specialisation dramatically raises productive efficiency. However, the Toyota shutdown shows that deep interdependence creates systemic vulnerability — the gains from specialisation depend on supply chains remaining intact. The double coincidence of wants problem confirms that money is not optional: without it, the scale of exchange needed to realise the gains from specialisation could not exist."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'             },
      { icon: '❓', text: 'Ask which details change the conclusion'           },
      { icon: '⚖️', text: 'Distinguish supporting evidence from challenges'   }
    ]
  }
};
