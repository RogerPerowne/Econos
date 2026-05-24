/* ============================================================
   ECONOS — Link It · Make the Judgement station data
   PED: synthesise into an exam-quality judgement on fuel duty effectiveness
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Price Elasticity of Demand',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.buildUrl('link_complete.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'calc',    label: 'Calculate It',       href: TopicLoader.buildUrl('link_calc.html')    },
    { id: 'data',    label: 'Read the data',      href: TopicLoader.buildUrl('link_data.html')    },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 6,

  wgll: [
    { icon: '🎯', text: 'Take a clear position'  },
    { icon: '🔗', text: 'Use the mechanism'       },
    { icon: '➕', text: 'Add a condition'         },
    { icon: '💬', text: 'Explain the limitation'  }
  ],

  scenarios: [
    {
      id: 'fuel-duty-judgement',
      claim: {
        icon:   '⛽',
        prompt: 'Policy claim',
        text:   'Raising fuel duty is the most effective policy for reducing carbon emissions from road transport.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '27% of UK GHG from road transport; PED −0.15 short run / −0.6 long run; £25bn revenue; lowest quintile spends 3.8% of income on fuel duty.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Tax → supply shifts left → consumer price rises sharply → quantity falls only a little (inelastic) → revenue rises but emissions barely fall.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'Supply shifts left; steep D curve shows large P rise (P₁→P₂) with small Q fall (Q₁→Q₂) — visually captures inelastic tax incidence.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on short-run PED, distributional impact, availability of alternatives, and whether revenue is recycled.' }
      ],
      cloze: 'Overall, raising fuel duty reduces emissions most effectively when demand is [1], because a price rise leads to a large [2] in quantity demanded, cutting both consumption and externalities. However, with short-run PED ≈ −0.15, the tax mainly raises [3] rather than cutting [4] — the bulk of the burden falls on [5] who have few alternatives. Therefore, the strongest judgement is that fuel duty is [6] as an environmental policy in the short run, but becomes more effective over time as [7] become widely available and PED [8].',
      blanks: [
        { id: 1, options: [
            { id: 'b1-elastic',   text: 'price elastic',         correct: true  },
            { id: 'b1-inelastic', text: 'price inelastic',       correct: false },
            { id: 'b1-income',    text: 'income elastic',        correct: false },
            { id: 'b1-cross',     text: 'cross-price elastic',   correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-reduction',      text: 'reduction',        correct: true  },
            { id: 'b2-increase',       text: 'increase',         correct: false },
            { id: 'b2-stabilisation',  text: 'stabilisation',    correct: false },
            { id: 'b2-redistribution', text: 'redistribution',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-revenue',   text: 'government revenue',   correct: true  },
            { id: 'b3-surplus',   text: 'consumer surplus',     correct: false },
            { id: 'b3-profit',    text: 'producer profit',      correct: false },
            { id: 'b3-dwl',       text: 'deadweight loss',      correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-emissions', text: 'carbon emissions',     correct: true  },
            { id: 'b4-spending',  text: 'government spending',  correct: false },
            { id: 'b4-costs',     text: 'producer costs',       correct: false },
            { id: 'b4-incomes',   text: 'consumer incomes',     correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-consumers', text: 'consumers',            correct: true  },
            { id: 'b5-producers', text: 'producers',            correct: false },
            { id: 'b5-gov',       text: 'the government',       correct: false },
            { id: 'b5-exporters', text: 'exporters',            correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-limited',    text: 'a limited revenue tool rather than an effective', correct: true  },
            { id: 'b6-effective',  text: 'the single most effective',                       correct: false },
            { id: 'b6-regressive', text: 'a regressive and irrelevant',                     correct: false },
            { id: 'b6-optimal',    text: 'an automatically optimal',                        correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-ev',        text: 'electric vehicles',           correct: true  },
            { id: 'b7-hydrogen',  text: 'hydrogen cars',               correct: false },
            { id: 'b7-coal',      text: 'coal-powered buses',          correct: false },
            { id: 'b7-hybrid',    text: 'petrol hybrids',              correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-rises',     text: 'rises',                       correct: true  },
            { id: 'b8-falls',     text: 'falls',                       correct: false },
            { id: 'b8-constant',  text: 'stays constant',              correct: false },
            { id: 'b8-perfect',   text: 'becomes perfectly inelastic', correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-longrun',  text: 'Fuel duty is effective in the long run but limited by inelastic short-run demand', correct: true  },
          { id: 'op-always',   text: 'Fuel duty always reduces emissions proportionally to the tax rate',                correct: false },
          { id: 'op-never',    text: 'Fuel duty should be abolished as it is purely regressive',                        correct: false },
          { id: 'op-market',   text: 'Carbon emissions require no government intervention',                             correct: false }
        ]
      },
      examBridge: '"Raising fuel duty is theoretically sound as a Pigouvian instrument: it raises the consumer price, shifting supply left and reducing quantity demanded. However, with short-run PED ≈ −0.15, the quantity response is minimal — the policy is primarily a revenue tool, not an effective emissions-reduction instrument, in the near term. The strongest judgement is that fuel duty becomes progressively more effective as substitutes emerge and long-run PED rises, but in the short run its environmental case is much weaker than its fiscal rationale."'
    }
  ]
};
