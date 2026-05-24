/* ============================================================
   ECONOS — Link It · Make the Judgement station data
   Positive Externalities: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Positive Externalities',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.buildUrl('link_complete.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'extract', label: 'Read the Extract',   href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
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
      id: 'direct-provision-judgement',
      claim: {
        icon:   '💉',
        prompt: 'Policy claim',
        text:   'Direct public provision is the most effective policy to correct the underproduction of goods with positive consumption externalities.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'MMR coverage 95.1% (meets herd immunity threshold); private uptake only 8% before NHS expansion; 24,000 measles cases prevented per 1% coverage point.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'MEB ignored by market → consumers produce at Q_market (MPB = MPC) < Q* (MSB = MPC) → underproduction → deadweight welfare loss.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'NHS provision shifts effective supply right from S₁ to S₂ → Q rises from Q_m to Q*, P* below P_m, DWL eliminated.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on size of MEB, whether unvaccinated group is price-sensitive, and whether alternatives (subsidy, mandate, information) are more cost-effective.' }
      ],
      cloze: 'In a positive consumption externality, the [1] (herd immunity for vaccination) means MSB sits [2] MPB at every quantity. The free market produces Q_market where [3] equals MPC — below Q* where MSB equals MPC. This underproduction generates a [4] that represents welfare forgone. NHS free provision shifts effective supply [5] from S₁ to S₂, closing the gap between Q_market and [6]. The policy works best when the MEB is [7]: if the external benefit is large and measurable, full public provision is justified and achieves Q* reliably. However, if non-vaccinators are motivated by [8] rather than price, free provision cannot achieve Q* — and information campaigns or mandates become more effective complementary tools.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-meb',     text: 'MEB (marginal external benefit)', correct: true  },
            { id: 'b1-mec',     text: 'MEC (marginal external cost)',     correct: false },
            { id: 'b1-msc',     text: 'MSC (marginal social cost)',       correct: false },
            { id: 'b1-dwl',     text: 'DWL (deadweight welfare loss)',    correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-above',   text: 'above',       correct: true  },
            { id: 'b2-below',   text: 'below',       correct: false },
            { id: 'b2-equal',   text: 'equal to',    correct: false },
            { id: 'b2-unrel',   text: 'unrelated to', correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-mpb',     text: 'MPB',  correct: true  },
            { id: 'b3-msb',     text: 'MSB',  correct: false },
            { id: 'b3-mpc',     text: 'MPC',  correct: false },
            { id: 'b3-msc',     text: 'MSC',  correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-dwl',     text: 'deadweight welfare loss',  correct: true  },
            { id: 'b4-cs',      text: 'consumer surplus gain',    correct: false },
            { id: 'b4-ps',      text: 'producer surplus',         correct: false },
            { id: 'b4-tax',     text: 'tax revenue',              correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-right',   text: 'right',   correct: true  },
            { id: 'b5-left',    text: 'left',    correct: false },
            { id: 'b5-up',      text: 'upward',  correct: false },
            { id: 'b5-down',    text: 'downward', correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-qstar',   text: 'Q*',        correct: true  },
            { id: 'b6-qmkt',    text: 'Q_market',  correct: false },
            { id: 'b6-msc',     text: 'MSC',       correct: false },
            { id: 'b6-mec',     text: 'MEC',       correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-large',   text: 'large and measurable',   correct: true  },
            { id: 'b7-small',   text: 'small and uncertain',    correct: false },
            { id: 'b7-mpc',     text: 'equal to MPC',          correct: false },
            { id: 'b7-zero',    text: 'zero',                   correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-ideo',    text: 'ideological resistance (vaccine hesitancy)', correct: true  },
            { id: 'b8-price',   text: 'price',                                     correct: false },
            { id: 'b8-income',  text: 'income constraints',                        correct: false },
            { id: 'b8-reg',     text: 'regulatory barriers',                       correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',   text: 'Direct public provision always achieves the social optimum regardless of conditions',    correct: false },
          { id: 'op-cond',     text: 'Direct provision is most effective when MEB is large, measurable and the barrier to uptake is price', correct: true  },
          { id: 'op-never',    text: 'Subsidies never correct positive externalities',                                         correct: false },
          { id: 'op-unlimited', text: 'Positive externalities justify unlimited government spending without welfare analysis',  correct: false }
        ]
      },
      examBridge: '"The NHS vaccination programme demonstrates that direct provision corrects positive consumption externalities where MEB is large (24,000 measles cases prevented per 1% coverage point) and the unvaccinated population is primarily price-sensitive. The shift in effective supply from S₁ to S₂ raises coverage from Q_market (~50%) to Q* (95.1%), meeting the herd immunity threshold and fully internalising the externality. However, the 2019 measles outbreak following a 3.8pp coverage fall illustrates the fragility of the outcome — sustained provision and complementary behavioural interventions are required to maintain Q*."'
    }
  ]
};
