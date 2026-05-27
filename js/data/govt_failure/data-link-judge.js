/* ============================================================
   ECONOS – Link It · Make the Judgement station data
   Government Failure: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Government Failure',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.buildUrl('link_complete.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
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
      id: 'help-to-buy-judgement',
      claim: {
        icon:   '🏗️',
        prompt: 'Policy claim',
        text:   'Help to Buy is an example of government failure because it stimulated demand without addressing supply constraints.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'OBR: £8,000 average new-build price rise; RICS: new-build premium doubled to 22%; Barratt: 21% operating margins.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Demand stimulus → PES ≈ 0.4 → price rise >> quantity rise → developers capture windfall → non-HTB buyers worse off.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'D shifts right from D₁ to D₂; steep S means E₂ almost directly above E₁ – large ΔP, tiny ΔQ.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Verdict depends on housing PES, quality of government information at design, and political economy pressures.' }
      ],
      cloze: 'Government failure occurs when [1] produces an outcome worse than the market failure it was designed to correct. Help to Buy increased effective demand for new-build homes by [2], shifting the demand curve to the [3]. Because housing supply is highly [4] (PES ≈ 0.4), the new equilibrium showed a large [5] rise and barely any increase in housing output. The scheme transferred benefit to [6] as higher margins rather than improving affordability for buyers outside the scheme. This reflects an [7] at policy design stage – the government failed to account for how supply constraints would shape the market response. The lesson is that demand subsidies in [8] markets with low PES always risk creating price inflation rather than output expansion.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-intervention', text: 'government intervention',         correct: true  },
            { id: 'b1-market',       text: 'market forces',                   correct: false },
            { id: 'b1-consumer',     text: 'consumer demand',                 correct: false },
            { id: 'b1-price',        text: 'price mechanism',                 correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-equity',       text: 'equity loans covering up to 20% of the purchase price', correct: true  },
            { id: 'b2-pigouvian',    text: 'a Pigouvian subsidy',             correct: false },
            { id: 'b2-ceiling',      text: 'a price ceiling below equilibrium', correct: false },
            { id: 'b2-tax',          text: 'a per-unit production tax',       correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-right',        text: 'right',                           correct: true  },
            { id: 'b3-left',         text: 'left',                            correct: false },
            { id: 'b3-up',           text: 'upward',                          correct: false },
            { id: 'b3-down',         text: 'downward',                        correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-inelastic',    text: 'price inelastic',                 correct: true  },
            { id: 'b4-elastic',      text: 'price elastic',                   correct: false },
            { id: 'b4-income',       text: 'income elastic',                  correct: false },
            { id: 'b4-perfect',      text: 'perfectly elastic',               correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-price',        text: 'house price',                     correct: true  },
            { id: 'b5-qty',          text: 'quantity',                        correct: false },
            { id: 'b5-cs',           text: 'consumer surplus',                correct: false },
            { id: 'b5-revenue',      text: 'government tax revenue',          correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-dev',          text: 'developers',                      correct: true  },
            { id: 'b6-ftb',          text: 'first-time buyers',               correct: false },
            { id: 'b6-renters',      text: 'private renters',                 correct: false },
            { id: 'b6-foreign',      text: 'foreign investors',               correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-info',         text: 'information failure',             correct: true  },
            { id: 'b7-moral',        text: 'moral hazard',                    correct: false },
            { id: 'b7-free',         text: 'free rider problem',              correct: false },
            { id: 'b7-dwl',          text: 'deadweight welfare loss',         correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-constrained',  text: 'supply-constrained',              correct: true  },
            { id: 'b8-elastic',      text: 'demand-elastic',                  correct: false },
            { id: 'b8-competitive',  text: 'perfectly competitive',           correct: false },
            { id: 'b8-traded',       text: 'internationally traded',          correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-success',    text: 'Help to Buy was an unambiguous success that improved housing affordability for all first-time buyers',                               correct: false },
          { id: 'op-failure',    text: 'Help to Buy represents government failure because demand stimulus with inelastic supply mainly raises prices – benefiting developers rather than buyers', correct: true  },
          { id: 'op-always',     text: 'Any government housing policy is an example of government failure',                                                                correct: false },
          { id: 'op-corrupt',    text: 'Government failure only occurs when a policy is designed with corrupt intent',                                                     correct: false }
        ]
      },
      examBridge: '"Help to Buy shifted housing demand right from D₁ to D₂. With PES ≈ 0.4, the nearly vertical supply curve meant E₂ was almost directly above E₁ – a large price rise with barely more housing. The £8,000 new-build price inflation (OBR) and record developer margins (Barratt: 21%) show the subsidy was captured by suppliers, not consumers. This is classic government failure: incomplete information at policy design, political incentives favouring demand-side action, and no complementary supply-side reform."'
    }
  ]
};
