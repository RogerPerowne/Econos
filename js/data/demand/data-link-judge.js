/* ============================================================
   ECONOS — Link It · Make the Judgement station data
   Demand: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Demand',
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
      id: 'demand-income-judgement',
      claim: {
        icon:   '🎭',
        prompt: 'Claim',
        text:   'Rising consumer income and confidence are the primary drivers of increased demand for UK leisure and hospitality services post-pandemic.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'Consumer confidence +7 (GfK, July 2021); £190bn savings released; bookings 60% above 2019; but food bank usage +33% and international travel suppressed.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Income/confidence rise → demand curve shifts right from D₁ to D₂ → excess demand at P₁ → price rises to P₂, quantity rises to Q₂.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'D shifts right → new equilibrium at higher P₂ and higher Q₂ — profit signal attracts capacity expansion.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Strength depends on YED (> 1 amplifies effect), consumer confidence, and availability of substitute activities (especially international holidays).' }
      ],
      cloze: 'Overall, rising consumer income and confidence [1] demand for UK leisure services, because higher income [2] consumers\' willingness and ability to pay at every price level, shifting the demand curve [3] from D₁ to D₂. This raises both price and [4], moving the market to a new equilibrium. However, the strength of the demand shift depends on the [5] of the relevant goods: where YED exceeds 1, the income effect is [6]. The impact is further conditioned by consumer [7]: if households expect future income uncertainty, they may save rather than spend even as current income rises. Therefore, income is a powerful driver of leisure demand, but it operates most strongly when goods are [8], confidence is high, and substitutes are unavailable.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-increases',  text: 'increases',        correct: true  },
            { id: 'b1-reduces',    text: 'reduces',          correct: false },
            { id: 'b1-no-effect',  text: 'has no effect on', correct: false },
            { id: 'b1-eliminates', text: 'eliminates',       correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-increases',  text: 'increases',   correct: true  },
            { id: 'b2-reduces',    text: 'reduces',     correct: false },
            { id: 'b2-stabilises', text: 'stabilises',  correct: false },
            { id: 'b2-eliminates', text: 'eliminates',  correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-right',    text: 'to the right',     correct: true  },
            { id: 'b3-left',     text: 'to the left',      correct: false },
            { id: 'b3-up-along', text: 'upward along',     correct: false },
            { id: 'b3-dn-along', text: 'downward along',   correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-quantity', text: 'quantity', correct: true  },
            { id: 'b4-supply',   text: 'supply',   correct: false },
            { id: 'b4-taxes',    text: 'taxes',    correct: false },
            { id: 'b4-costs',    text: 'costs',    correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-yed',   text: 'income elasticity',      correct: true  },
            { id: 'b5-ped',   text: 'price elasticity',       correct: false },
            { id: 'b5-xed',   text: 'cross-price elasticity', correct: false },
            { id: 'b5-pes',   text: 'supply elasticity',      correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-amplified',  text: 'amplified',  correct: true  },
            { id: 'b6-reduced',    text: 'reduced',    correct: false },
            { id: 'b6-reversed',   text: 'reversed',   correct: false },
            { id: 'b6-irrelevant', text: 'irrelevant', correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-confidence', text: 'confidence and expectations', correct: true  },
            { id: 'b7-ignorance',  text: 'rational ignorance',          correct: false },
            { id: 'b7-regulation', text: 'government regulation',       correct: false },
            { id: 'b7-producer',   text: 'producer efficiency',         correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-income-elastic',  text: 'income elastic',   correct: true  },
            { id: 'b8-price-inelastic', text: 'price inelastic',  correct: false },
            { id: 'b8-public',          text: 'a public good',    correct: false },
            { id: 'b8-demerit',         text: 'a demerit good',   correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',      text: 'Income is always the strongest driver of demand for any good',                                    correct: false },
          { id: 'op-conditional', text: 'Income is a powerful driver for income-elastic goods, but confidence and substitutes also matter', correct: true  },
          { id: 'op-price-only',  text: 'Demand is determined by price alone — income shifts have no lasting effect',                      correct: false },
          { id: 'op-confidence',  text: 'Consumer confidence is more important than income in all cases',                                   correct: false }
        ]
      },
      examBridge: '"Rising income and confidence boosted leisure demand because YED for hospitality exceeds 1 — so income gains shift the demand curve right by proportionally more. The new equilibrium delivers higher prices and higher output, but the effect is conditional: concentrated savings distribution and the availability of international substitutes mean the domestic surge was stronger in some segments than others. A strong judgement recognises income as a primary, but not exclusive, driver."'
    }
  ]
};
