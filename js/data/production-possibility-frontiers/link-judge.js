/* ============================================================
   ECONOS – Link It · Make the Judgement station data
   PPF: synthesise into an exam-quality judgement on green investment
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Production Possibility Frontiers',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.routes.link('complete'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
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
      id: 'ppf-green-investment-judgement',
      claim: {
        icon:   '🌱',
        prompt: 'Claim',
        text:   'Investment in green infrastructure represents a rational choice on the PPF – accepting a short-run sacrifice of consumption to achieve long-run outward PPF shift through sustainable economic growth.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green', icon: '🔍', title: 'Context',       text: 'UK pledged £28bn green investment (scaled to £7.3bn); productivity growth 0.5%/yr since 2008; renewables 30% of generation; £1 public → £3–4 private crowding-in.' },
        { id: 'chain',   tone: 'amber', icon: '🔗', title: 'Chain',         text: 'Resources shift from consumption to investment → move along PPF (opportunity cost of public services) → long-run PPF shift outward if investment raises productive capacity.' },
        { id: 'depends', tone: 'blue',  icon: '⚖️', title: 'It depends on', text: 'Productivity of the shift; political sustainability; crowding-in of private capital; distribution of sacrifice and gains.' }
      ],
      cloze: 'A PPF illustrates the [1] between producing investment goods and consumption goods with given resources. A movement [2] the PPF (from current consumption toward green investment) reduces current output of public services – this is the [3]. The long-run justification is an [4] shift of the PPF if the investment raises productive capacity – allowing more of both goods in future. The trade-off is most rational when the [5] of the investment is high (PPF shifts far outward for a given sacrifice) and [6] is sustainable across multiple governments. The risk is that if investment yields are lower than expected (cost overruns, technological failure), the PPF shifts [7] than anticipated, and the opportunity cost of forgone consumption goods [8] the benefit.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-tradeoff',  text: 'trade-off',          correct: true  },
            { id: 'b1-mf',        text: 'market failure',     correct: false },
            { id: 'b1-price',     text: 'price signal',       correct: false },
            { id: 'b1-income',    text: 'income effect',      correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-along',     text: 'along',    correct: true  },
            { id: 'b2-outside',   text: 'outside',  correct: false },
            { id: 'b2-inside',    text: 'inside',   correct: false },
            { id: 'b2-beyond',    text: 'beyond',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-opp',       text: 'opportunity cost',   correct: true  },
            { id: 'b3-cs',        text: 'consumer surplus',   correct: false },
            { id: 'b3-dwl',       text: 'deadweight loss',    correct: false },
            { id: 'b3-ps',        text: 'producer surplus',   correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-outward',   text: 'outward',    correct: true  },
            { id: 'b4-inward',    text: 'inward',     correct: false },
            { id: 'b4-parallel',  text: 'parallel',   correct: false },
            { id: 'b4-diagonal',  text: 'diagonal',   correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-prod',      text: 'productivity return',     correct: true  },
            { id: 'b5-pop',       text: 'political popularity',   correct: false },
            { id: 'b5-conf',      text: 'consumer confidence',    correct: false },
            { id: 'b5-ped',       text: 'PED',                    correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-pol',       text: 'political commitment',   correct: true  },
            { id: 'b6-demand',    text: 'consumer demand',        correct: false },
            { id: 'b6-monetary',  text: 'monetary policy',        correct: false },
            { id: 'b6-trade',     text: 'trade balance',          correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-less',      text: 'less far',     correct: true  },
            { id: 'b7-sharp',     text: 'more sharply', correct: false },
            { id: 'b7-instant',   text: 'instantly',    correct: false },
            { id: 'b7-inward',    text: 'inward',       correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-exceeds',   text: 'exceeds',          correct: true  },
            { id: 'b8-equals',    text: 'equals',           correct: false },
            { id: 'b8-below',     text: 'falls below',      correct: false },
            { id: 'b8-unrelated', text: 'is unrelated to',  correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',   text: 'Green investment always shifts the PPF outward by more than the opportunity cost',                                                                         correct: false },
          { id: 'op-rational', text: 'Green investment is a rational PPF trade-off when productivity return is high, politically sustained, and crowding-in is significant',                    correct: true  },
          { id: 'op-inferior', text: 'PPF analysis shows green investment is always inferior to current consumption',                                                                           correct: false },
          { id: 'op-irrelevant', text: 'The PPF is irrelevant to real-world policy decisions',                                                                                                 correct: false }
        ]
      },
      examBridge: '"Green investment moves the UK along its PPF from consumption toward investment goods – the opportunity cost is foregone NHS and welfare spending. The long-run case is an outward PPF shift: cheaper clean energy raises productive capacity across all sectors. Whether this is the best trade-off depends on the productivity return of the investment (vs alternatives like health or housing) and political sustainability (the £28bn to £7.3bn revision illustrates the risk of commitment failure)."'
    }
  ]
};
