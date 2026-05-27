/* ============================================================
   ECONOS – Link It · Make the Judgement station data
   Economic Systems: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Economic Systems',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.routes.link('complete'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.routes.link('extract') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 4,

  wgll: [
    { icon: '🎯', text: 'Take a clear position'  },
    { icon: '🔗', text: 'Use the mechanism'       },
    { icon: '➕', text: 'Add a condition'         },
    { icon: '💬', text: 'Explain the limitation'  }
  ],

  scenarios: [
    {
      id: 'mixed-economy-judgement',
      claim: {
        icon:   '⚖️',
        prompt: 'Overall claim',
        text:   'A mixed economy best balances the efficiency of free markets with the equity of state intervention.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context analysis',  text: 'You found that free markets generally outperform command economies on efficiency metrics, but that pure market outcomes can fail on equity and in sectors with large externalities.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'The causal chain',  text: 'Price signals → profit incentive → productive and allocative efficiency – but this chain breaks down when market failures are present or when income inequality distorts consumer sovereignty.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on…',   text: 'Free market efficiency depends on the extent of market failures, the security of property rights, and whether the income distribution is sufficient to translate consumer sovereignty into socially optimal outcomes.' }
      ],
      cloze: 'Overall, a mixed economy [1] the efficiency of free markets with equity considerations because the [2] is powerful at allocating most goods efficiently, but [3] – including public goods, externalities and information asymmetry – prevent it from working well in every sector. The UK\'s mixed economy demonstrates this: the private sector (over [4] of GDP) benefits from competitive markets and the profit incentive, while the NHS uses state provision in a sector where [5] would systematically underprovide. However, the claim that a mixed economy is "best" is contested – the optimal balance depends on a society\'s values regarding [6] versus efficiency, and critics argue the UK may be too [7] in housing and too state-oriented in other sectors. The strongest judgement is therefore that mixed economies are pragmatically superior to either extreme, but that the correct balance is [8] rather than theoretically determined.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-balances',    text: 'best balances',                correct: true  },
            { id: 'b1-ignores',     text: 'entirely ignores',              correct: false },
            { id: 'b1-eliminates',  text: 'eliminates',                   correct: false },
            { id: 'b1-undermines',  text: 'fundamentally undermines',      correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-price',       text: 'price mechanism',              correct: true  },
            { id: 'b2-central',     text: 'central planning committee',   correct: false },
            { id: 'b2-taxation',    text: 'progressive tax system',       correct: false },
            { id: 'b2-trade',       text: 'international trade system',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-failures',    text: 'market failures',              correct: true  },
            { id: 'b3-profits',     text: 'excessive profits',            correct: false },
            { id: 'b3-deficits',    text: 'trade deficits',               correct: false },
            { id: 'b3-wages',       text: 'high wages',                   correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-80pct',       text: '80%',                          correct: true  },
            { id: 'b4-40pct',       text: '40%',                          correct: false },
            { id: 'b4-20pct',       text: '20%',                          correct: false },
            { id: 'b4-99pct',       text: '99%',                          correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-market',      text: 'the free market',              correct: true  },
            { id: 'b5-taxation',    text: 'progressive taxation',         correct: false },
            { id: 'b5-command',     text: 'a command economy',            correct: false },
            { id: 'b5-barter',      text: 'a barter system',              correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-equity',      text: 'equity',                       correct: true  },
            { id: 'b6-inflation',   text: 'inflation control',            correct: false },
            { id: 'b6-trade',       text: 'trade surpluses',              correct: false },
            { id: 'b6-gdp',         text: 'GDP maximisation',             correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-market',      text: 'market-oriented',              correct: true  },
            { id: 'b7-command',     text: 'command-oriented',             correct: false },
            { id: 'b7-socialist',   text: 'socialist',                    correct: false },
            { id: 'b7-protectionist', text: 'protectionist',              correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-normative',   text: 'a normative judgement',        correct: true  },
            { id: 'b8-positive',    text: 'a positive economic fact',     correct: false },
            { id: 'b8-automatic',   text: 'automatically determined by markets', correct: false },
            { id: 'b8-fixed',       text: 'fixed across all countries',   correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-agree',    text: 'Largely agree – the UK\'s mixed economy shows that combining market efficiency with targeted state intervention outperforms either extreme',                                                                correct: true  },
          { id: 'op-partial',  text: 'Partially agree – mixed economies are pragmatic but the optimal balance is contested; the UK may be too market-oriented in some sectors (housing) and too state-oriented in others',                      correct: false },
          { id: 'op-disagree', text: 'Largely disagree – the concept of a \'best balance\' is ideological; the right system depends entirely on a society\'s values regarding equity vs efficiency',                                           correct: false },
          { id: 'op-none',     text: 'Neither agree nor disagree – the evidence is too mixed to reach a clear verdict',                                                                                                                          correct: false }
        ]
      },
      examBridge: '"A mixed economy best balances market efficiency and equity because the price mechanism effectively allocates most goods – generating productive and allocative efficiency through the profit incentive and consumer sovereignty – while targeted state intervention corrects market failures in sectors such as healthcare and public goods provision. However, the claim rests on a normative judgement: the optimal balance between efficiency and equity cannot be determined by economic analysis alone, and the evidence from the UK (housing, social care) suggests the balance may be imperfect even in a mixed economy."'
    }
  ]
};
