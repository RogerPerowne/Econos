/* ============================================================
   ECONOS — Link It · Make the Judgement station data
   The Economic Problem: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'The Economic Problem',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.buildUrl('link_complete.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 3,

  wgll: [
    { icon: '🎯', text: 'Take a clear position'  },
    { icon: '🔗', text: 'Use the mechanism'       },
    { icon: '➕', text: 'Add a condition'         },
    { icon: '💬', text: 'Explain the limitation'  }
  ],

  scenarios: [
    {
      id: 'econ-problem-judgement',
      claim: {
        icon:   '⚕️',
        prompt: 'Claim',
        text:   'Scarcity makes the economic problem unavoidable — all societies must prioritise among competing wants, and every choice involves an opportunity cost.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green', icon: '🔍', title: 'Context',       text: 'NHS budget £167bn; waiting lists 7.7m (record); NICE QALY threshold £20k–£30k; workforce shortfall 264k by 2036.' },
        { id: 'chain',   tone: 'amber', icon: '🔗', title: 'Chain',         text: 'Unlimited wants + finite resources → WHAT, HOW, FOR WHOM decisions → opportunity cost of every choice (QALY threshold makes this explicit).' },
        { id: 'depends', tone: 'blue',  icon: '⚖️', title: 'It depends on', text: 'Severity depends on gap between capacity and wants; technology both widens and narrows it; economic system determines how trade-offs are made.' }
      ],
      cloze: 'Scarcity arises because [1] are unlimited while the resources available to satisfy them are [2]. This makes the economic problem [3]: every society — whether market, command or mixed — must answer the three central questions of what, how and [4]. Every allocation decision involves an opportunity cost — the value of the [5] alternative foregone. The NHS QALY threshold makes opportunity cost explicit: every drug approved means [6] not funded. The severity of the economic problem depends partly on [7]: new medical technologies expand both productive capacity and human wants simultaneously. In a mixed economy like the UK, scarcity is addressed through a combination of [8] and government allocation — but neither eliminates the fundamental trade-off.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-wants',     text: 'human wants',       correct: true  },
            { id: 'b1-outputs',   text: 'resource outputs',  correct: false },
            { id: 'b1-budgets',   text: 'government budgets', correct: false },
            { id: 'b1-prices',    text: 'consumer prices',   correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-finite',    text: 'finite',            correct: true  },
            { id: 'b2-unlimited', text: 'unlimited',         correct: false },
            { id: 'b2-elastic',   text: 'elastic',           correct: false },
            { id: 'b2-free',      text: 'freely available',  correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-universal', text: 'universal and unavoidable',                  correct: true  },
            { id: 'b3-temp',      text: 'temporary',                                 correct: false },
            { id: 'b3-command',   text: 'relevant only in command economies',         correct: false },
            { id: 'b3-growth',    text: 'solved by economic growth',                  correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-forwhom',   text: 'for whom to produce',  correct: true  },
            { id: 'b4-when',      text: 'when to produce',      correct: false },
            { id: 'b4-whether',   text: 'whether to produce',   correct: false },
            { id: 'b4-why',       text: 'why to produce',       correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-nextbest',  text: 'next-best',      correct: true  },
            { id: 'b5-worst',     text: 'worst',          correct: false },
            { id: 'b5-cheapest',  text: 'cheapest',       correct: false },
            { id: 'b5-popular',   text: 'most popular',   correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-other',     text: 'other treatments are',   correct: true  },
            { id: 'b6-tax',       text: 'tax revenue is',         correct: false },
            { id: 'b6-cs',        text: 'consumer surplus is',    correct: false },
            { id: 'b6-profit',    text: 'producer profit is',     correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-tech',      text: 'technology',       correct: true  },
            { id: 'b7-inflation', text: 'inflation',        correct: false },
            { id: 'b7-monetary',  text: 'monetary policy',  correct: false },
            { id: 'b7-fx',        text: 'exchange rates',   correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-price',     text: 'price signals',         correct: true  },
            { id: 'b8-subsidy',   text: 'subsidy mechanisms',    correct: false },
            { id: 'b8-trade',     text: 'trade agreements',      correct: false },
            { id: 'b8-tax',       text: 'tax thresholds',        correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-growth',   text: 'Economic growth permanently solves the economic problem by eliminating scarcity',                                              correct: false },
          { id: 'op-universal', text: 'The economic problem is universal — scarcity and opportunity cost exist in all economies regardless of system or affluence', correct: true  },
          { id: 'op-command',  text: 'Only command economies face the economic problem — markets solve scarcity automatically',                                      correct: false },
          { id: 'op-poor',     text: 'The economic problem only applies to poor countries — wealthy nations have no meaningful scarcity',                            correct: false }
        ]
      },
      examBridge: '"NHS resource allocation demonstrates that scarcity is universal and unavoidable: a £167bn budget cannot meet 7.7 million waiting patients simultaneously. NICE\'s QALY threshold makes opportunity cost explicit — every approved treatment forecloses alternatives. Technology complicates the picture: it raises productive capacity but expands wants (new treatments, precision medicine) simultaneously. The economic problem cannot be permanently solved — it can only be managed through allocation mechanisms that minimise waste and distribute trade-offs fairly."'
    }
  ]
};
