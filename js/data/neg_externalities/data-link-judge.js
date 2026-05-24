/* ============================================================
   ECONOS — Link It · Make the Judgement station data
   Negative Externalities: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Negative Externalities',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.buildUrl('link_complete.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'extract', label: 'Read the Extract',   href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
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
      id: 'pigouvian-tax-judgement',
      claim: {
        icon:   '💸',
        prompt: 'Policy claim',
        text:   'A Pigouvian tax is the most effective policy to correct negative externalities from industrial pollution.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '£20bn annual MEC confirmed; ETS raised £4.4bn reinvested in green transition; inelastic demand (PED −0.15).' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'MEC ignored by market → firm produces at Q_market > Q* → overproduction → deadweight welfare loss.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'Tax shifts supply left from MPC to MSC → Q falls to Q*, P rises to P*, DWL eliminated.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on MEC accuracy, price elasticity of demand, and risk of carbon leakage.' }
      ],
      cloze: 'Overall, a Pigouvian tax is [1] when the [2] can be accurately measured, because it forces firms to face the true [3] of their output, shifting effective supply left from MPC to [4]. This eliminates the [5] and restores [6]. However, the policy is less effective when demand is [7], since the tax raises [8] substantially while reducing output only a little. Therefore, the strongest judgement is that a Pigouvian tax is theoretically efficient but practically limited — and command-and-control regulation may produce a more certain outcome when irreversibility of harm is the primary concern.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-effective',   text: 'most effective',       correct: true  },
            { id: 'b1-irrelevant',  text: 'largely irrelevant',   correct: false },
            { id: 'b1-harmful',     text: 'harmful in all cases', correct: false },
            { id: 'b1-automatic',   text: 'automatically optimal', correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-mec',         text: 'marginal external cost',     correct: true  },
            { id: 'b2-gdp',         text: 'national income level',      correct: false },
            { id: 'b2-mpc',         text: 'marginal private cost',      correct: false },
            { id: 'b2-ped',         text: 'price elasticity of supply', correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-social',      text: 'social cost',          correct: true  },
            { id: 'b3-private',     text: 'private benefit',      correct: false },
            { id: 'b3-consumer',    text: 'consumer surplus',     correct: false },
            { id: 'b3-tax',         text: 'tax revenue burden',   correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-msc',         text: 'MSC',  correct: true  },
            { id: 'b4-msb',         text: 'MSB',  correct: false },
            { id: 'b4-ad',          text: 'AD',   correct: false },
            { id: 'b4-lras',        text: 'LRAS', correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-dwl',         text: 'deadweight welfare loss', correct: true  },
            { id: 'b5-cs',          text: 'consumer surplus',        correct: false },
            { id: 'b5-price',       text: 'general price level',     correct: false },
            { id: 'b5-revenue',     text: 'tax revenue',             correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-allocative',  text: 'allocative efficiency', correct: true  },
            { id: 'b6-gdp',         text: 'GDP growth',            correct: false },
            { id: 'b6-trade',       text: 'trade balance',         correct: false },
            { id: 'b6-monetary',    text: 'monetary stability',    correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-inelastic',   text: 'price inelastic',    correct: true  },
            { id: 'b7-elastic',     text: 'price elastic',      correct: false },
            { id: 'b7-income',      text: 'income elastic',     correct: false },
            { id: 'b7-cross',       text: 'cross-price elastic', correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-prices',      text: 'consumer prices',   correct: true  },
            { id: 'b8-spending',    text: 'government spending', correct: false },
            { id: 'b8-producer',    text: 'producer surplus',  correct: false },
            { id: 'b8-wages',       text: 'real wages',        correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',   text: 'Pigouvian taxes always achieve the social optimum',                      correct: false },
          { id: 'op-useful',   text: 'Pigouvian taxes are theoretically efficient but practically conditional', correct: true  },
          { id: 'op-no',       text: 'Pigouvian taxes should not be used — only regulation works',             correct: false },
          { id: 'op-market',   text: 'Market failure does not require government intervention',                 correct: false }
        ]
      },
      examBridge: '"A Pigouvian tax is theoretically efficient: it shifts effective supply left from MPC to MSC, reducing output to Q* and eliminating the deadweight welfare loss. However, its practical effectiveness depends on the accuracy of the MEC estimate, the elasticity of demand, and whether carbon leakage undermines the environmental outcome. The strongest judgement is that it is a useful first-line tool, but command-and-control regulation may be preferred where irreversibility of harm demands certainty of outcome."'
    }
  ]
};
