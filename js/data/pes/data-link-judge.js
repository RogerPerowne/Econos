/* ============================================================
   ECONOS — Link It · Make the Judgement station data
   PES: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Price Elasticity of Supply',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.buildUrl('link_complete.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
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
      id: 'pes-housing-judgement',
      claim: {
        icon:   '🏠',
        prompt: 'Policy claim',
        text:   'The low price elasticity of supply of rental housing is the primary reason UK rents rose faster than inflation in 2022–23.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '745,000 net migrants; rents up 9.4% (ONS); new listings up only 1.3% (Rightmove); landlords exiting sector.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Demand surge → excess demand at existing rents → price signal → slow supply response (PES ≈ 0.2) → rents stay elevated.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'D shifts right → near-vertical S → E₂ almost directly above E₁ → large rent rise, tiny quantity rise.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Construction lead times, landlord exit, planning rigidity — all modify how much PES alone explains.' }
      ],
      cloze: 'When demand for rental housing increases, the effect on rent vs quantity supplied depends on [1]. A near-vertical supply curve (PES ≈ 0.2) means most of the demand shock is absorbed by [2] rises rather than [3] increases. In the UK rental market, supply could not respond quickly because new housing takes [4] months to build — reflecting both planning constraints and construction lead times. However, the rent spike was worsened by [5], which reduced the existing stock of rental properties simultaneously. The effectiveness of the price signal as a rationing mechanism depends on whether [6] can respond over the medium term. Therefore, the strongest judgement is that low short-run PES is the primary cause, but [7] worsened the short-run position, and [8] reform is the most effective long-run policy response.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-pes',    text: 'price elasticity of supply (PES)', correct: true  },
            { id: 'b1-yed',    text: 'income elasticity',                correct: false },
            { id: 'b1-ped',    text: 'price elasticity of demand (PED)', correct: false },
            { id: 'b1-xed',    text: 'cross-price elasticity',           correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-rent',   text: 'rent (price)',        correct: true  },
            { id: 'b2-qty',    text: 'quantity',            correct: false },
            { id: 'b2-gov',    text: 'government revenue',  correct: false },
            { id: 'b2-conf',   text: 'consumer confidence', correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-qty',    text: 'quantity',      correct: true  },
            { id: 'b3-price',  text: 'price',         correct: false },
            { id: 'b3-tax',    text: 'tax revenue',   correct: false },
            { id: 'b3-emp',    text: 'employment',    correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-2436',   text: '24–36',  correct: true  },
            { id: 'b4-36',     text: '3–6',    correct: false },
            { id: 'b4-612',    text: '6–12',   correct: false },
            { id: 'b4-4872',   text: '48–72',  correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-exit',   text: 'landlord exit',                  correct: true  },
            { id: 'b5-rent',   text: 'government rent controls',       correct: false },
            { id: 'b5-tax',    text: 'mortgage interest tax relief',   correct: false },
            { id: 'b5-mig',    text: 'immigration restrictions',       correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-supply', text: 'new housing supply',      correct: true  },
            { id: 'b6-ad',     text: 'aggregate demand',        correct: false },
            { id: 'b6-mp',     text: 'monetary policy',         correct: false },
            { id: 'b6-conf',   text: 'consumer confidence',     correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-contr',  text: 'simultaneous supply contraction (landlord exit)', correct: true  },
            { id: 'b7-ped',    text: 'rising PED for housing',                          correct: false },
            { id: 'b7-conf',   text: 'falling consumer confidence',                     correct: false },
            { id: 'b7-mon',    text: 'monetary tightening',                             correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-plan',   text: 'planning system',  correct: true  },
            { id: 'b8-rent',   text: 'rent control',     correct: false },
            { id: 'b8-dep',    text: 'deposit scheme',   correct: false },
            { id: 'b8-mp',     text: 'monetary policy',  correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-all',     text: 'Low PES is entirely responsible for the rent crisis — no other factors matter',                                   correct: false },
          { id: 'op-primary', text: 'Low PES is the primary structural cause, but landlord exit and planning rigidity compound the effect',            correct: true  },
          { id: 'op-demand',  text: 'High demand growth is more important than supply constraints for explaining rent rises',                          correct: false },
          { id: 'op-rent',    text: 'Rent controls are the most effective policy response to a PES problem',                                           correct: false }
        ]
      },
      examBridge: '"The near-zero short-run PES of UK rental housing explains why a demand surge (745,000 net migrants) translated almost entirely into higher rents rather than more housing. The steep supply curve means E₂ is almost directly above E₁ — quantity barely rises while price rises sharply. The primary policy implication is supply-side reform: faster planning, build-to-rent incentives and reduced landlord regulation to raise PES over the medium run."'
    }
  ]
};
