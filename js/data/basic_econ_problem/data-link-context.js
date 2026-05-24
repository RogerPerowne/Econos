/* ============================================================
   ECONOS — Link It · Context station data
   The Economic Problem: classify evidence on NHS resource allocation
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'The Economic Problem',
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
    question:    'Which details in this extract most change whether scarcity is an unavoidable feature of NHS resource allocation — or a problem that better funding could eliminate?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion — not just what sounds economic.',

    extract: [
      'NHS England operated with a budget of [[budget|£167 billion in 2023–24]] — the largest in the organisation\'s history — yet NHS waiting lists reached [[waiting|7.7 million patients]], the highest since records began, confirming that demand for healthcare consistently outstrips the resources available to meet it.',
      'NICE (National Institute for Health and Care Excellence) uses a [[qaly|cost-effectiveness threshold of approximately £20,000–£30,000 per Quality-Adjusted Life Year (QALY)]] to approve drugs for NHS use — making the opportunity cost of every treatment decision explicit in institutional policy.',
      'Comparative data show that [[spending|UK NHS spending per capita is lower than comparable European health systems (Germany, France, Netherlands)]] — raising the question of whether NHS scarcity reflects fixed resource constraints or political choices about taxation and public spending.',
      'The NHS faces a projected [[workforce|shortfall of 264,000 clinical staff by 2036–37]] (NHS Long Term Workforce Plan 2023), demonstrating that scarcity is not purely financial — labour is a scarce factor of production even within the world\'s largest employer in Europe.',
      'In 2022–23, NHS spending of £10.8 billion on cancer treatments [[crowding|crowded out investment in mental health services and preventive care]], illustrating the three central economic questions — what, how, and for whom — in real allocation decisions.'
    ],

    evidence: {
      'budget':    { text: '£167 billion in 2023–24' },
      'waiting':   { text: '7.7 million patients' },
      'qaly':      { text: 'cost-effectiveness threshold of approximately £20,000–£30,000 per Quality-Adjusted Life Year (QALY)' },
      'spending':  { text: 'UK NHS spending per capita is lower than comparable European health systems (Germany, France, Netherlands)' },
      'workforce': { text: 'shortfall of 264,000 clinical staff by 2036–37' },
      'crowding':  { text: 'crowded out investment in mental health services and preventive care' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports — scarcity is unavoidable',        tone: 'green', icon: '↑' },
      { id: 'complicates', label: 'Complicates the case either way',            tone: 'blue',  icon: '?' },
      { id: 'against',     label: 'Argues scarcity is a political choice',      tone: 'pink',  icon: '↓' }
    ],

    correct: {
      'budget':    'supports',
      'waiting':   'supports',
      'qaly':      'supports',
      'spending':  'against',
      'workforce': 'supports',
      'crowding':  'supports'
    },

    explain: {
      'budget':    'Even at £167bn — the largest NHS budget ever — waiting lists hit a record high. This confirms that demand is effectively unlimited: more funding does not eliminate scarcity, it just shifts the frontier at which the constraint bites.',
      'waiting':   '7.7 million waiting patients alongside a record budget illustrates the gap between unlimited wants and finite resources — the defining feature of the economic problem. The highest waiting list on record supports the claim that scarcity is structural, not incidental.',
      'qaly':      'The QALY threshold is an institutional expression of opportunity cost: every treatment approved at £30,000/QALY means the same funds cannot be used elsewhere. This makes the economic problem explicit in NHS decision-making — scarcity is built into the approval process.',
      'spending':  'Lower per-capita spending than Germany, France, or the Netherlands suggests the severity of NHS scarcity is partly a political choice about tax levels and NHS funding, not purely a resource constraint. This complicates the claim that scarcity is entirely unavoidable — the frontier is not fixed.',
      'workforce': 'A projected 264,000 clinical staff shortfall shows that scarcity extends beyond finance to labour as a factor of production. Even if the NHS budget doubled, shortages of doctors and nurses would remain — supporting the view that scarcity is multi-dimensional and unavoidable.',
      'crowding':  'Cancer spending of £10.8bn explicitly crowded out mental health and prevention — a real-world instance of the economic problem in action. One allocation decision directly forecloses others, making opportunity cost visible in NHS budget choices.'
    },

    bucketCue: 'Strong application changes the conclusion — it does not just describe what is in the extract.',

    examBridge: '"NHS waiting lists of 7.7 million alongside a record £167bn budget confirm that demand for healthcare is effectively unlimited — scarcity is structural, not a funding gap. The QALY threshold makes opportunity cost explicit in policy: every approved treatment forecloses alternatives. The complication is that UK per-capita NHS spending is lower than peer European systems — so the severity of the economic problem partly reflects political choices, not purely fixed resource constraints."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'            },
      { icon: '❓', text: 'Ask which details change the conclusion'          },
      { icon: '⚖️', text: 'Separate supporting evidence from complications'  }
    ]
  }
};
