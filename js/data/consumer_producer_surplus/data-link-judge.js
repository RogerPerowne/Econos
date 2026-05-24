/* ============================================================
   ECONOS — Link It · Make the Judgement station data
   Consumer & Producer Surplus: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Consumer & Producer Surplus',
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
      id: 'bus-subsidy-judgement',
      claim: {
        icon:   '🚌',
        prompt: 'Policy claim',
        text:   'Per-unit operating subsidies on public bus services increase consumer surplus and improve allocative efficiency by bringing fares closer to the social optimum.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '£2.5bn/yr subsidy; DfT £2.40/£1 return; London (high subsidy) fares stable; non-London journeys −46%.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Subsidy → supply right (S₁ → S₂) → fare falls P₁ to P₂ → CS expands → welfare gain requires MSB > MPC.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'Supply shifts right → fare falls from P₁ to P₂, quantity rises Q₁ to Q₂, CS area expands.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on positive externality size, PED for bus travel, and operator pass-through rate.' }
      ],
      cloze: 'A per-unit bus operating subsidy reduces operators\' effective costs, shifting the supply curve to the [1] from S₁ to S₂. This lowers fares from P₁ to [2] and increases bus journeys from Q₁ to Q₂. Consumer surplus [3] by the area between P₁ and P₂ up to the demand curve — more passengers can afford to travel. The subsidy cost per unit is equal to the [4] between S₁ and S₂ at Q₂. Net welfare gain depends on whether the [5] of bus travel (congestion relief, carbon reduction) justify the taxpayer cost. The policy is most welfare-improving when demand is [6], because fare reductions attract many new passengers and maximise the CS expansion. However, the subsidy may be less effective if operators do not [7] the full cost saving to passengers as lower fares. The strongest judgement is that bus subsidies improve allocative efficiency only when [8] exceeds the social marginal cost of provision.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-right',   text: 'right',   correct: true  },
            { id: 'b1-left',    text: 'left',    correct: false },
            { id: 'b1-up',      text: 'upward',  correct: false },
            { id: 'b1-down',    text: 'downward', correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-p2lo',    text: 'P₂ (lower fare)',    correct: true  },
            { id: 'b2-p2hi',    text: 'P₂ (higher fare)',   correct: false },
            { id: 'b2-pstar',   text: 'P* (social optimum)', correct: false },
            { id: 'b2-pmin',    text: 'P_min (price floor)', correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-rises',   text: 'increases',        correct: true  },
            { id: 'b3-falls',   text: 'decreases',        correct: false },
            { id: 'b3-same',    text: 'stays unchanged',  correct: false },
            { id: 'b3-indet',   text: 'becomes indeterminate', correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-vgap',    text: 'vertical gap',                         correct: true  },
            { id: 'b4-hdist',   text: 'horizontal distance',                  correct: false },
            { id: 'b4-dwl',     text: 'area of the DWL triangle',             correct: false },
            { id: 'b4-rect',    text: 'subsidy rectangle divided by Q₂',      correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-posext',  text: 'positive externalities (MSB > MPB)',   correct: true  },
            { id: 'b5-negext',  text: 'negative externalities',               correct: false },
            { id: 'b5-ied',     text: 'income elasticity',                    correct: false },
            { id: 'b5-ceil',    text: 'price ceiling effects',                correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-elastic', text: 'price elastic',       correct: true  },
            { id: 'b6-inelas',  text: 'price inelastic',     correct: false },
            { id: 'b6-incelas', text: 'income inelastic',    correct: false },
            { id: 'b6-cross',   text: 'cross-price elastic', correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-pass',    text: 'pass through',  correct: true  },
            { id: 'b7-cap',     text: 'capitalise',    correct: false },
            { id: 'b7-with',    text: 'withhold',      correct: false },
            { id: 'b7-tax',     text: 'tax',           correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-msb',     text: 'marginal social benefit (MSB)',  correct: true  },
            { id: 'b8-mpc',     text: 'marginal private cost',          correct: false },
            { id: 'b8-conf',    text: 'consumer confidence',            correct: false },
            { id: 'b8-ps',      text: 'producer surplus',               correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',  text: 'Bus subsidies always maximise consumer welfare regardless of conditions',                                 correct: false },
          { id: 'op-cond',    text: 'Bus subsidies improve allocative efficiency when MSB > MPB and operators pass cost savings to passengers', correct: true  },
          { id: 'op-ps',      text: 'Subsidies always reduce producer surplus',                                                                correct: false },
          { id: 'op-left',    text: 'Consumer surplus only rises when supply shifts left',                                                     correct: false }
        ]
      },
      examBridge: '"A per-unit bus subsidy shifts supply right from S₁ to S₂, lowering fares and raising journeys. CS rises by the area between the original and new price below the demand curve. The welfare case rests on whether MSB (including congestion and carbon externalities) exceeds the taxpayer cost — the DfT\'s £2.40/£1 return estimate suggests it does in aggregate, but pass-through rate and PED determine how evenly the benefit is distributed across current and new passengers."'
    }
  ]
};
