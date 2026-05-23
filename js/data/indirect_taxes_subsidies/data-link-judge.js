/* ============================================================
   ECONOS — Link It · Make the Judgement station data
   Indirect Taxes & Subsidies: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Indirect Taxes &amp; Subsidies',
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
      id: 'sugar-levy-judgement',
      claim: {
        icon:   '🍭',
        prompt: 'Policy claim',
        text:   'An indirect tax on sugary foods and drinks is the most effective way to reduce obesity-related negative externalities.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '£6.1bn annual NHS externality confirmed; existing levy triggered 28.8% sugar reduction through reformulation; confectionery PED ≈ −0.3 (inelastic); regressive impact on low-income households.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Specific tax raises marginal costs → supply shifts left by tax amount → P_c rises, P_p falls, Q falls → tax wedge split between consumers and producers by PED and PES.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'S₁ shifts left to S₂ → consumer price rises to P_c, producer net price falls to P_p, output falls from Q₀ to Q_t. Tax wedge = P_c − P_p = per-unit tax.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on PED (how much consumption falls), producer reformulation response, and the regressive distributional impact on low-income households.' }
      ],
      cloze: 'Overall, an indirect tax on sugary goods raises [1] and reduces consumption most effectively when demand is [2]. However, when demand is [3] — as with confectionery (PED ≈ −0.3) — the tax mainly raises [4] rather than reducing the externality. The split of the tax burden between consumers and producers depends on [5]: inelastic demand means [6] bear the larger share. Therefore, the strongest judgement is that a sugar levy is [7] as a corrective tool, but its power to change behaviour depends more on whether producers [8] than on the price signal alone.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-revenue',     text: 'government revenue',    correct: true  },
            { id: 'b1-surplus',     text: 'producer surplus',      correct: false },
            { id: 'b1-confidence',  text: 'consumer confidence',   correct: false },
            { id: 'b1-employment',  text: 'employment',            correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-elastic',     text: 'price elastic',         correct: true  },
            { id: 'b2-inelastic',   text: 'price inelastic',       correct: false },
            { id: 'b2-income',      text: 'income elastic',        correct: false },
            { id: 'b2-perfectly',   text: 'perfectly inelastic',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-inelastic',   text: 'price inelastic',       correct: true  },
            { id: 'b3-elastic',     text: 'price elastic',         correct: false },
            { id: 'b3-unit',        text: 'unit elastic',          correct: false },
            { id: 'b3-income',      text: 'income inelastic',      correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-revenue',     text: 'tax revenue',           correct: true  },
            { id: 'b4-profit',      text: 'producer profit',       correct: false },
            { id: 'b4-surplus',     text: 'consumer surplus',      correct: false },
            { id: 'b4-dwl',         text: 'deadweight loss',       correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-ped-pes',     text: 'relative PED and PES',  correct: true  },
            { id: 'b5-taxrate',     text: 'the government\'s tax rate', correct: false },
            { id: 'b5-power',       text: 'producer market power', correct: false },
            { id: 'b5-income',      text: 'consumer income',       correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-consumers',   text: 'consumers',             correct: true  },
            { id: 'b6-producers',   text: 'producers',             correct: false },
            { id: 'b6-government',  text: 'the government',        correct: false },
            { id: 'b6-third',       text: 'third parties',         correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-useful',      text: 'a useful but conditional', correct: true  },
            { id: 'b7-perfect',     text: 'a perfect',             correct: false },
            { id: 'b7-irrelevant',  text: 'an irrelevant',         correct: false },
            { id: 'b7-regressive',  text: 'a regressive-only',     correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-reformulate', text: 'reformulate products',  correct: true  },
            { id: 'b8-raise',       text: 'raise prices',          correct: false },
            { id: 'b8-reduce',      text: 'reduce output',         correct: false },
            { id: 'b8-lobby',       text: 'lobby for exemptions',  correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',   text: 'Sugar levies always reduce obesity because higher prices always change behaviour',        correct: false },
          { id: 'op-useful',   text: 'Sugar levies are useful but their effectiveness depends on producer reformulation response', correct: true  },
          { id: 'op-no',       text: 'Sugar levies should not be used — only regulation works on food markets',                 correct: false },
          { id: 'op-market',   text: 'Obesity is not a market failure and requires no government intervention',                  correct: false }
        ]
      },
      examBridge: '"A sugar levy is a useful but conditional corrective tool: it shifts the supply curve left, raising consumer prices and reducing output, but its power to reduce the obesity externality depends on whether producers reformulate products — as occurred with the soft drinks levy, where sugar content fell by 28.8% on average. Where demand is inelastic (PED ≈ −0.3 for confectionery), the tax mainly raises revenue and consumer prices rather than reducing consumption, and its regressive incidence on low-income households adds a distributional cost that must be weighed against any externality correction."'
    }
  ]
};
