/* ============================================================
   ECONOS — Link It · Make the Judgement station data
   Taxes & Subsidies as Policy: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Taxes &amp; Subsidies as Policy',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.buildUrl('link_complete.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.buildUrl('link_diagram.html') },
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
      id: 'subsidy-judgement',
      claim: {
        icon:   '🌬️',
        prompt: 'Policy claim',
        text:   'Government subsidies to renewable energy producers are the most effective way to correct the underproduction of clean energy.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '£28 MEB per MWh confirmed; 14 GW of offshore wind delivered; 63% cost reduction 2012–24; regressive £65/yr levy on household bills.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'MEB ignored by market → producers supply at Q_market < Q* → underproduction → deadweight welfare loss.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'Subsidy shifts supply right from S₁ (MPC) to S₂ (MPC−subsidy) → Q rises to Q_s, P falls to P_s, DWL eliminated.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on MEB accuracy, speed of technology cost reduction, and whether subsidies are paired with carbon pricing.' }
      ],
      cloze: 'Overall, a production subsidy is effective at correcting renewable energy underproduction when it is set equal to the [1], because it shifts effective supply right from MPC to [2], raising output from Q_market to [3] and eliminating the deadweight welfare loss. However, the subsidy is less effective when the [4] cannot be accurately measured, risking over- or under-correction of the externality. The cost of the subsidy falls on [5] via the energy bill levy, creating a [6] burden. Therefore, the strongest judgement is that subsidies are a [7] instrument for correcting positive externalities, but their net benefit depends on combining them with policies that also [8] fossil fuels, such as a carbon price.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-meb',       text: 'marginal external benefit (MEB)', correct: true  },
            { id: 'b1-mpb',       text: 'marginal private benefit',        correct: false },
            { id: 'b1-ar',        text: 'average revenue',                 correct: false },
            { id: 'b1-cs',        text: 'consumer surplus',                correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-msb',       text: 'MSB',  correct: true  },
            { id: 'b2-mpb',       text: 'MPB',  correct: false },
            { id: 'b2-mpc',       text: 'MPC',  correct: false },
            { id: 'b2-ad',        text: 'AD',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-qstar',     text: 'Q*, the social optimum',  correct: true  },
            { id: 'b3-qmarket',   text: 'Q_market',                correct: false },
            { id: 'b3-lras',      text: 'LRAS',                    correct: false },
            { id: 'b3-orig',      text: 'the original equilibrium', correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-meb',       text: 'MEB',              correct: true  },
            { id: 'b4-mpc',       text: 'MPC',              correct: false },
            { id: 'b4-price',     text: 'consumer price',   correct: false },
            { id: 'b4-budget',    text: 'government budget', correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-consumers', text: 'energy consumers', correct: true  },
            { id: 'b5-producers', text: 'producers',        correct: false },
            { id: 'b5-gov',       text: 'the government',   correct: false },
            { id: 'b5-foreign',   text: 'foreign investors', correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-regressive',   text: 'regressive',   correct: true  },
            { id: 'b6-progressive',  text: 'progressive',  correct: false },
            { id: 'b6-proportional', text: 'proportional', correct: false },
            { id: 'b6-neutral',      text: 'neutral',       correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-conditional', text: 'theoretically sound but conditional',  correct: true  },
            { id: 'b7-perfect',     text: 'perfect and self-sustaining',          correct: false },
            { id: 'b7-irrelevant',  text: 'irrelevant to market failure',         correct: false },
            { id: 'b7-superior',    text: 'always superior to regulation',        correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-price-in',   text: 'price in the cost of',    correct: true  },
            { id: 'b8-expand',     text: 'expand the production of', correct: false },
            { id: 'b8-subsidise',  text: 'subsidise the use of',    correct: false },
            { id: 'b8-import',     text: 'import more',             correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-best',       text: 'Subsidies correct positive externalities but are most effective when paired with carbon pricing to address the negative externality side', correct: true  },
          { id: 'op-always',     text: 'Subsidies always achieve the social optimum for positive externalities',                                                                  correct: false },
          { id: 'op-no',         text: 'Subsidies should not be used — only regulation corrects renewable underproduction',                                                       correct: false },
          { id: 'op-market',     text: 'Renewable energy underproduction does not require government intervention',                                                               correct: false }
        ]
      },
      examBridge: '"A production subsidy is theoretically sound: it shifts effective supply right from MPC to S₂, raising output to Q* and eliminating the deadweight welfare loss from underproduction of a positive externality. However, its practical effectiveness depends on the accuracy of the MEB estimate, the speed at which technology costs fall, and whether the regressive funding mechanism can be replaced with a more equitable alternative. The strongest judgement is that subsidies are a useful first-line tool for correcting positive externalities, but their net benefit is maximised when combined with a carbon price that also addresses the negative externality from fossil fuel use."'
    }
  ]
};
