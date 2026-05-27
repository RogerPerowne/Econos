/* ============================================================
   ECONOS – Link It · Make the Judgement station data
   YED/XED: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Income & Cross-Price Elasticity',
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
      id: 'yed-xed-judgement',
      claim: {
        icon:   '💰',
        prompt: 'Claim',
        text:   'Falling real income reduces demand for luxury goods more than for necessities, consistent with income elasticity of demand.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'Real income fell 2.5% (2022); luxury car sales fell 18%; Aldi/Lidl hit record 17.3% share; overseas holidays fell 15%.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Income falls → non-essential spending cut → YED > 1 amplifies luxury demand fall → D shifts left → new eq at lower P₂ and Q₂.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'D₁ shifts left to D₂ → new equilibrium (P₂, Q₂) below and to left of original → luxury revenues fall; budget substitutes gain.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'YED magnitude, income distribution, real vs nominal income, and whether income fall is expected to be temporary.' }
      ],
      cloze: 'When real household income falls, the effect on demand depends on [1]. For luxury goods where YED [2] 1, demand falls [3] proportionally than the income change, because consumers cut non-essential spending first. This shifts the demand curve to the [4] from D₁ to D₂, reducing equilibrium price to [5] and equilibrium quantity to Q₂. However, the size of the demand shift depends on [6] – if the income fall is concentrated among lower-income households who rarely buy luxury goods, aggregate demand for luxury goods falls less than YED predicts. In contrast, for [7] goods (YED < 0), falling income causes demand to [8] as consumers seek cheaper alternatives.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-yed',  text: 'income elasticity of demand (YED)', correct: true  },
            { id: 'b1-ped',  text: 'price elasticity of demand (PED)',  correct: false },
            { id: 'b1-xed',  text: 'cross-price elasticity (XED)',      correct: false },
            { id: 'b1-pes',  text: 'price elasticity of supply (PES)',  correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-exc',  text: 'exceeds',          correct: true  },
            { id: 'b2-eq',   text: 'equals',            correct: false },
            { id: 'b2-bel',  text: 'falls below',       correct: false },
            { id: 'b2-unr',  text: 'is unrelated to',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-more', text: 'more',            correct: true  },
            { id: 'b3-less', text: 'less',             correct: false },
            { id: 'b3-eq',   text: 'equally',          correct: false },
            { id: 'b3-unp',  text: 'unpredictably',    correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-left',  text: 'left',    correct: true  },
            { id: 'b4-right', text: 'right',   correct: false },
            { id: 'b4-up',    text: 'upward',  correct: false },
            { id: 'b4-down',  text: 'downward', correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-p2lt', text: 'P₂ < P₁',      correct: true  },
            { id: 'b5-p2gt', text: 'P₂ > P₁',      correct: false },
            { id: 'b5-p2eq', text: 'P₂ = P₁',      correct: false },
            { id: 'b5-ind',  text: 'indeterminate', correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-dist', text: 'the distribution of the income fall across households', correct: true  },
            { id: 'b6-conf', text: 'consumer confidence',                                   correct: false },
            { id: 'b6-pes',  text: 'supply elasticity',                                     correct: false },
            { id: 'b6-gov',  text: 'government intervention',                               correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-inf',  text: 'inferior',       correct: true  },
            { id: 'b7-norm', text: 'normal',          correct: false },
            { id: 'b7-lux',  text: 'luxury',          correct: false },
            { id: 'b7-comp', text: 'complementary',   correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-rise', text: 'rise',           correct: true  },
            { id: 'b8-fall', text: 'fall',            correct: false },
            { id: 'b8-stab', text: 'stabilise',       correct: false },
            { id: 'b8-inel', text: 'become price inelastic', correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-yed',   text: 'YED alone fully determines whether luxury demand falls during an income shock',                                  correct: false },
          { id: 'op-cond',  text: 'YED > 1 is the primary driver, but distribution of income change and temporary/permanent distinction also matter', correct: true  },
          { id: 'op-price', text: 'Luxury demand is determined by price, not income',                                                              correct: false },
          { id: 'op-nec',   text: 'Income changes never affect demand for necessities',                                                            correct: false }
        ]
      },
      examBridge: '"Falling real income shifts demand for luxury goods left by more than the income change percentage because YED > 1 – confirmed by the 18% fall in luxury car registrations from a 2.5% income fall. The new equilibrium (P₂, Q₂) lies below and to the left of the original, squeezing luxury sector revenues. However, the distributional incidence of the income fall and whether it is expected to be temporary both modify the strength of the YED effect – a sophisticated judgement acknowledges these conditions."'
    }
  ]
};
