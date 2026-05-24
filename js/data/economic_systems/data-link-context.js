/* ============================================================
   ECONOS — Link It · Context station data
   Economic Systems: classify evidence on the claim that free markets
   allocate resources more efficiently than command economies
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Economic Systems',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_chain.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'extract', label: 'Read the extract',   href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether free markets allocate resources more efficiently than command economies?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion — not just what sounds economic.',

    extract: [
      'Cuba operates a near-comprehensive command economy in which the state directs resource allocation centrally. Despite achieving [[cuba-literacy|near-universal literacy and free healthcare at the point of use]], Cuba\'s GDP per capita stood at approximately $9,000 (PPP) in 2024, and the country faces persistent [[cuba-shortages|severe consumer goods shortages, with queuing as the main allocation method]] for basic necessities.',
      'North Korea represents the most extreme surviving command economy. With [[north-korea-gdp|an estimated GDP per capita of approximately $1,800 (PPP)]], it ranks among the poorest economies in the world — a stark contrast to South Korea\'s market-oriented economy and GDP per capita exceeding $50,000.',
      'The United Kingdom operates a mixed economy: the price mechanism allocates resources in the private sector (over 80% of GDP), while the state provides the NHS and a welfare safety net. [[uk-nhs|NHS health outcomes match many higher-spending market systems]], suggesting that state provision can outperform markets in healthcare.',
      'In a hypothetical pure free market, [[price-mechanism|prices transmit scarcity to millions of decision-makers at once]], driving resources toward highest-valued uses without central coordination.',
      'China\'s "socialist market economy" uses [[china-hybrid|market pricing for consumer goods plus state ownership of key industries]], producing rapid growth while maintaining political control — demonstrating that hybrid systems can generate significant efficiency gains.'
    ],

    evidence: {
      'cuba-literacy':     { text: 'near-universal literacy and free healthcare at the point of use' },
      'cuba-shortages':    { text: 'severe consumer goods shortages, with queuing as the main allocation method' },
      'north-korea-gdp':   { text: 'an estimated GDP per capita of approximately $1,800 (PPP)' },
      'uk-nhs':            { text: 'NHS health outcomes match many higher-spending market systems' },
      'price-mechanism':   { text: 'prices transmit scarcity to millions of decision-makers at once' },
      'china-hybrid':      { text: 'market pricing for consumer goods plus state ownership of key industries' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the claim',    tone: 'green', icon: '↑' },
      { id: 'challenges',  label: 'Challenges the claim',  tone: 'pink',  icon: '↓' },
      { id: 'neither',     label: 'Neither',               tone: 'blue',  icon: '?' }
    ],

    correct: {
      'cuba-literacy':     'challenges',
      'cuba-shortages':    'supports',
      'north-korea-gdp':   'supports',
      'uk-nhs':            'challenges',
      'price-mechanism':   'supports',
      'china-hybrid':      'neither'
    },

    explain: {
      'cuba-literacy':     'Cuba\'s command economy achieves near-universal literacy and universal healthcare — social outcomes that pure free markets systematically underprovide due to positive externalities and merit good arguments. This challenges the simple claim that free markets allocate more efficiently.',
      'cuba-shortages':    'Persistent queuing for basic goods is the classic symptom of command economy failure: central planners cannot process the information needed to match supply and demand efficiently. This supports the claim that free markets, via the price mechanism, allocate more effectively.',
      'north-korea-gdp':   'North Korea\'s $1,800 GDP per capita — the result of near-total central planning — is powerful comparative evidence that command economies fail to generate the productive and allocative efficiency that free markets achieve. This strongly supports the claim.',
      'uk-nhs':            'The NHS achieving comparable health outcomes to higher-spending market-oriented systems challenges the claim that free markets are always more efficient allocators. In healthcare specifically, state provision appears to produce better outcomes per pound spent.',
      'price-mechanism':   'The price mechanism\'s ability to aggregate information from millions of individual decisions without central coordination is Hayek\'s core argument for market superiority. This directly supports the claim that markets allocate more efficiently than command systems.',
      'china-hybrid':      'China\'s hybrid model shows rapid growth from a command baseline — but it is neither a pure free market nor a command economy, so it does not cleanly support or challenge the binary claim. It complicates the comparison without settling it.'
    },

    bucketCue: 'Strong application changes the conclusion — it does not just describe what is in the extract.',

    examBridge: '"The North Korea GDP comparison and the price mechanism\'s information-processing advantage strongly support the claim that free markets outperform command economies on efficiency. However, Cuba\'s healthcare and literacy outcomes and the NHS evidence challenge the generalisation — in sectors with significant positive externalities and merit good characteristics, state provision can match or exceed market allocation. The China hybrid case complicates rather than settles the debate."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific data from the extract'                     },
      { icon: '❓', text: 'Ask which details change the conclusion'                },
      { icon: '⚖️', text: 'Distinguish efficiency from equity in your reasoning'   }
    ]
  }
};
