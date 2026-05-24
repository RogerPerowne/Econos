/* ============================================================
   ECONOS — Link It · Make the Judgement station data
   Market Equilibrium: synthesise into an exam-quality judgement on rent controls
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Market Equilibrium',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.buildUrl('link_complete.html'),

  stations: [
    { id: 'context', label: 'Use the context',     href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',     href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'predict', label: 'Predict the Outcome', href: TopicLoader.buildUrl('link_predict.html') },
    { id: 'diagram', label: 'Diagram connector',   href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',       href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement',  href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 5,

  wgll: [
    { icon: '🎯', text: 'Take a clear position'  },
    { icon: '🔗', text: 'Use the mechanism'       },
    { icon: '➕', text: 'Add a condition'         },
    { icon: '💬', text: 'Explain the limitation'  }
  ],

  scenarios: [
    {
      id: 'rent-control-judgement',
      claim: {
        icon:   '🏠',
        prompt: 'Policy claim',
        text:   'The UK government should introduce rent controls to make housing more affordable in UK cities.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'London rents at 46% of median earnings; completions 44% below need; Stockholm saw 15% supply reduction under controls; PES ≈ 0.4.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Rising demand → demand curve shifts right → shortage at old rent → rents rise → price signal → slow supply response (inelastic) → new higher-rent equilibrium.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'Steep supply curve (PES ≈ 0.4): demand shifts right → P rises sharply, Q rises modestly → new equilibrium at much higher rent.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on landlord exit risk, housing supply elasticity, and availability of supply-side alternatives.' }
      ],
      cloze: 'Overall, rent controls may provide short-run relief for existing tenants but are likely to [1] the housing shortage over time, because landlords facing [2] below market levels will [3] properties from the rental market. With PES ≈ 0.4, housing supply is already [4] — so any further reduction in supply incentives will push rents up in the uncontrolled sector. Therefore, the strongest judgement is that rent controls are a [5] policy tool: they redistribute [6] rather than creating new supply. Supply-side alternatives — planning reform, social housing investment — address the [7] of the housing shortage more directly. The most effective long-run approach is to make housing supply more [8] to price signals.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-worsen',      text: 'worsen',      correct: true  },
            { id: 'b1-eliminate',   text: 'eliminate',   correct: false },
            { id: 'b1-solve',       text: 'solve',       correct: false },
            { id: 'b1-redistribute',text: 'redistribute',correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-rents',       text: 'rents',               correct: true  },
            { id: 'b2-wages',       text: 'wages',               correct: false },
            { id: 'b2-interest',    text: 'interest rates',      correct: false },
            { id: 'b2-planning',    text: 'planning permissions', correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-withdraw',    text: 'withdraw',   correct: true  },
            { id: 'b3-add',         text: 'add',        correct: false },
            { id: 'b3-maintain',    text: 'maintain',   correct: false },
            { id: 'b3-subsidise',   text: 'subsidise',  correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-inelastic',       text: 'inelastic',            correct: true  },
            { id: 'b4-elastic',         text: 'elastic',              correct: false },
            { id: 'b4-perf-elastic',    text: 'perfectly elastic',    correct: false },
            { id: 'b4-unit-elastic',    text: 'unit elastic',         correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-distributional',  text: 'distributional rather than allocative', correct: true  },
            { id: 'b5-efficient',       text: 'perfectly efficient',                   correct: false },
            { id: 'b5-supply',          text: 'supply-expanding',                      correct: false },
            { id: 'b5-demand',          text: 'demand-reducing',                       correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-existing',        text: 'existing housing among tenants',  correct: true  },
            { id: 'b6-new',             text: 'new housing across the city',     correct: false },
            { id: 'b6-revenue',         text: 'government revenue',              correct: false },
            { id: 'b6-producer',        text: 'producer surplus to consumers',   correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-root',            text: 'root cause',    correct: true  },
            { id: 'b7-price',           text: 'price level',   correct: false },
            { id: 'b7-demand',          text: 'demand curve',  correct: false },
            { id: 'b7-income',          text: 'income effect', correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-responsive',      text: 'responsive',          correct: true  },
            { id: 'b8-inelastic',       text: 'inelastic',           correct: false },
            { id: 'b8-fixed',           text: 'fixed',               correct: false },
            { id: 'b8-perf-inelastic',  text: 'perfectly inelastic', correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-blunt',    text: 'Rent controls are a blunt tool that treats symptoms; supply-side reform addresses the root cause', correct: true  },
          { id: 'op-always',   text: 'Rent controls always make housing more affordable for all renters',                                correct: false },
          { id: 'op-no',       text: 'Rent controls should never be used — only market forces can solve housing affordability',           correct: false },
          { id: 'op-demand',   text: 'The housing shortage is caused by excess demand, so demand management is the best solution',       correct: false }
        ]
      },
      examBridge: '"Rent controls reduce rents for existing tenants in the short run, but the risk of landlords withdrawing supply — as demonstrated by a 15% supply reduction in Stockholm — means the policy is likely to worsen the housing shortage over time. With housing supply already inelastic (PES ≈ 0.4), a rent ceiling further reduces the incentive to build, invest or maintain rental properties. The strongest judgement is that rent controls are a distributional instrument, not an allocative one: they redistribute existing housing more cheaply among current tenants rather than creating the new supply needed to shift the long-run equilibrium to a lower rent."'
    }
  ]
};
