/* ============================================================
   ECONOS — Link It · Make the Judgement station data
   Supply: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Supply',
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
      id: 'supply-energy-judgement',
      claim: {
        icon:   '🏭',
        prompt: 'Claim',
        text:   'Rising energy input costs are the most significant supply-side shock facing UK energy-intensive manufacturing industries in 2021–22.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'Gas prices +400% (Jan–Oct 2021); British Steel furnace suspended; food producer price inflation +14.8%; but hedged firms unaffected and EBRS partially offset the shock.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Rising energy costs → supply curve shifts left from S₁ to S₂ → shortage at P₁ → new equilibrium at higher P₂ and lower Q₂.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'S shifts left → new equilibrium at higher P₂ and lower Q₂ — cost-push inflation and output contraction.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Severity depends on energy intensity of sector, PED for the final good, and exposure to international competition from lower-cost overseas producers.' }
      ],
      cloze: 'A supply-side cost shock shifts the supply curve to the [1], because rising input costs increase [2] at every level of output. The new equilibrium settles at a [3] price and [4] quantity. The proportion of the cost rise passed to consumers as higher prices depends on the [5] of demand — where demand is price inelastic, firms can pass most of the cost through. However, the policy is less effective at restoring output where firms face [6] from lower-cost overseas producers. The strongest judgement is that energy cost shocks are most damaging in [7] sectors with [8], where the supply shift is large and producers cannot pass costs to buyers without losing market share to imports.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-left',      text: 'left',          correct: true  },
            { id: 'b1-right',     text: 'right',         correct: false },
            { id: 'b1-up-along',  text: 'upward along',  correct: false },
            { id: 'b1-dn-along',  text: 'downward along',correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-mpc',       text: 'marginal production costs',     correct: true  },
            { id: 'b2-wtp',       text: 'consumer willingness to pay',   correct: false },
            { id: 'b2-revenue',   text: 'government revenue',            correct: false },
            { id: 'b2-export',    text: 'export demand',                 correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-higher',    text: 'higher',        correct: true  },
            { id: 'b3-lower',     text: 'lower',         correct: false },
            { id: 'b3-unchanged', text: 'unchanged',     correct: false },
            { id: 'b3-indet',     text: 'indeterminate', correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-lower',     text: 'lower',         correct: true  },
            { id: 'b4-higher',    text: 'higher',        correct: false },
            { id: 'b4-unchanged', text: 'unchanged',     correct: false },
            { id: 'b4-indet',     text: 'indeterminate', correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-ped',       text: 'price elasticity',       correct: true  },
            { id: 'b5-yed',       text: 'income elasticity',      correct: false },
            { id: 'b5-xed',       text: 'cross-price elasticity', correct: false },
            { id: 'b5-pes',       text: 'supply elasticity',      correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-int-comp',  text: 'international competition', correct: true  },
            { id: 'b6-reg',       text: 'domestic regulation',       correct: false },
            { id: 'b6-boycott',   text: 'consumer boycotts',         correct: false },
            { id: 'b6-fiscal',    text: 'fiscal policy',             correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-energy',    text: 'energy-intensive',   correct: true  },
            { id: 'b7-low-cost',  text: 'low-cost',           correct: false },
            { id: 'b7-regulated', text: 'heavily regulated',  correct: false },
            { id: 'b7-labour',    text: 'labour-intensive',   correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-elastic',   text: 'price-elastic demand',   correct: true  },
            { id: 'b8-inelastic', text: 'price-inelastic demand', correct: false },
            { id: 'b8-monopoly',  text: 'monopoly pricing power', correct: false },
            { id: 'b8-subsidy',   text: 'government subsidies',   correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',    text: 'Energy cost shocks always reduce output more than price',                                                          correct: false },
          { id: 'op-condition', text: 'Energy cost shocks are most damaging in energy-intensive sectors facing elastic demand and international competition', correct: true  },
          { id: 'op-inflation', text: 'Supply shocks always cause inflation regardless of market structure',                                               correct: false },
          { id: 'op-govt',      text: 'Government intervention can fully offset any supply-side shock',                                                    correct: false }
        ]
      },
      examBridge: '"A 400% rise in gas prices shifted the supply curve for UK energy-intensive manufacturing sharply to the left, raising prices and reducing output. The severity of the output loss depended on PED for the final good — sectors with inelastic demand (steel, specialist glass) passed more cost to buyers, while those facing import competition bore larger output losses. Government energy price caps partially offset the shock, but permanent supply curve adjustments continued as some producers exited and others invested in efficiency."'
    }
  ]
};
