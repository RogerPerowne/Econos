/* ============================================================
   ECONOS — Link It · Make the Judgement station data
   Behavioural Economics: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Behavioural Economics',
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
      id: 'nudge-vs-tax-judgement',
      claim: {
        icon:   '🥤',
        prompt: 'Policy claim',
        text:   'Nudge-based interventions are more effective than Pigouvian taxes for correcting irrational overconsumption of unhealthy goods.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '50% of drinks reformulated pre-levy; 29% sugar content fall; red label cuts purchases 15%; Denmark fat tax repealed after 15 months.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Present bias inflates D above D_rational → SDIL + labelling → D shifts left → Q falls → less overconsumption, no regressive price effect.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'D shifts left from D_biased to D_rational; equilibrium moves from (Q_biased, P_biased) to (Q_rational, P_rational).' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Verdict depends on strength of present bias, salience of nudge design, and equity concerns about regressive tax burden.' }
      ],
      cloze: 'Present bias causes consumers to [1] future health costs relative to immediate taste enjoyment, inflating demand for high-sugar products above D_rational. Nudge interventions — such as traffic light labelling and SDIL reformulation incentives — correct this by making [2] at the point of purchase, shifting demand [3] from D_biased toward D_rational. This reduces overconsumption without [4], unlike a Pigouvian consumption tax which would raise prices and impose a [5] burden on lower-income households. However, nudges are only effective when consumers [6] the salient information — where [7] is very strong, consumers may ignore even prominent health warnings. The SDIL\'s producer-side design is particularly effective because it achieves reformulation through the [8] without requiring consumers to change habits at all.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-underweight',  text: 'underweight',                                  correct: true  },
            { id: 'b1-overweight',   text: 'overweight',                                   correct: false },
            { id: 'b1-correctly',    text: 'correctly weight',                             correct: false },
            { id: 'b1-discount',     text: 'rationally discount',                          correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-salient',      text: 'future health costs salient',                  correct: true  },
            { id: 'b2-producer',     text: 'producer costs higher',                        correct: false },
            { id: 'b2-tax',          text: 'government taxes visible',                     correct: false },
            { id: 'b2-surplus',      text: 'consumer surplus explicit',                    correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-left',         text: 'left',                                         correct: true  },
            { id: 'b3-right',        text: 'right',                                        correct: false },
            { id: 'b3-up',           text: 'upward along',                                 correct: false },
            { id: 'b3-down',         text: 'downward along',                               correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-prices',       text: 'raising prices',                               correct: true  },
            { id: 'b4-surplus',      text: 'reducing consumer surplus',                    correct: false },
            { id: 'b4-efficiency',   text: 'improving allocative efficiency',              correct: false },
            { id: 'b4-costs',        text: 'increasing producer costs',                    correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-regressive',   text: 'regressive',                                   correct: true  },
            { id: 'b5-progressive',  text: 'progressive',                                  correct: false },
            { id: 'b5-neutral',      text: 'neutral',                                      correct: false },
            { id: 'b5-proportionate',text: 'proportionate',                                correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-notice',       text: 'notice and respond to',                        correct: true  },
            { id: 'b6-ignore',       text: 'ignore',                                       correct: false },
            { id: 'b6-resist',       text: 'resist',                                       correct: false },
            { id: 'b6-reject',       text: 'rationally reject',                            correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-bias',         text: 'present bias',                                 correct: true  },
            { id: 'b7-cross',        text: 'cross-price elasticity',                       correct: false },
            { id: 'b7-govt',         text: 'government failure',                           correct: false },
            { id: 'b7-adverse',      text: 'adverse selection',                            correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-supply',       text: 'supply-side incentive (producer reformulation)', correct: true  },
            { id: 'b8-price',        text: 'price mechanism alone',                        correct: false },
            { id: 'b8-demand',       text: 'demand-side tax',                              correct: false },
            { id: 'b8-mandate',      text: 'consumer mandate',                             correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',   text: 'Nudges are always more effective than taxes regardless of the strength of behavioural bias',                                          correct: false },
          { id: 'op-nuanced',  text: 'Nudges outperform taxes when present bias is mild, equity matters, and substitutes exist — but taxes may be needed where bias is severe', correct: true  },
          { id: 'op-tax',      text: 'Pigouvian taxes are always the most efficient correction for behavioural market failures',                                            correct: false },
          { id: 'op-rational', text: 'Behavioural economics interventions are irrelevant because consumers are always rational',                                            correct: false }
        ]
      },
      examBridge: '"Present bias inflated demand for high-sugar soft drinks above D_rational. The SDIL\'s producer reformulation incentive and traffic light labelling both shifted demand left toward D_rational — without the regressive burden of a consumption tax. The 29% sugar content reduction and 50% pre-levy reformulation show the supply-side nudge (SDIL) was highly effective. However, nudges are insufficient where present bias is severe: some consumers ignored labelling despite awareness of health risks — suggesting a complementary role for more coercive instruments in the hardest-to-reach groups."'
    }
  ]
};
