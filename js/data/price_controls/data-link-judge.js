/* ============================================================
   ECONOS – Link It · Make the Judgement station data
   Government Intervention in Markets: synthesise into an exam-quality judgement on rent control
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Government Intervention in Markets',
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
      id: 'rent-cap-judgement',
      claim: {
        icon:   '🏠',
        prompt: 'Policy claim',
        text:   'A binding rent cap on private-sector flats is the most effective way to protect low-income tenants in a tight urban housing market.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '40% of renters spend over half their income on housing; ~180,000 sitting tenants gain in the short run; Berlin cap cut new listings ~50% in a year; San Francisco maintenance fell ~8%; non-price rationing reaches better-connected tenants.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'P_max < P_e (binding) → Q_s falls and Q_d rises, opening a shortage → flats rationed by queues, networks and key money → sitting tenants gain a transfer, but DWL on lost trades and quality decline.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'Horizontal P_max line below P_e on standard S/D – Q_s on supply, Q_d on demand, shortage = Q_d − Q_s. Market trades on the short side (Q_s).' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on the long-run PES of housing, how the shortage is rationed in practice, and whether better-targeted alternatives (housing benefit, social housing, planning reform) would do less harm.' }
      ],
      cloze: 'Overall, a binding rent cap protects [1] in the short run but causes [2] in the long run as landlords exit the market. The cap is most defensible when supply is [3], because the shortage that opens up is then [4]. However, when supply is more elastic in the long run, non-price rationing tends to allocate capped flats to [5] rather than the lowest-income tenants, and landlords restore margins by cutting [6]. The strongest judgement is therefore that a rent cap is [7] as a tool for protecting low-income tenants, because better-targeted alternatives such as [8] preserve supply while transferring income more reliably to those in greatest need.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-sitting',     text: 'sitting tenants',                correct: true  },
            { id: 'b1-landlords',   text: 'landlords',                      correct: false },
            { id: 'b1-developers',  text: 'developers',                     correct: false },
            { id: 'b1-newcomers',   text: 'new tenants searching for flats', correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-shortage',    text: 'a shortage of rental flats',     correct: true  },
            { id: 'b2-surplus',     text: 'a surplus of unsold flats',      correct: false },
            { id: 'b2-inflation',   text: 'general price inflation',        correct: false },
            { id: 'b2-monopoly',    text: 'a landlord monopoly',            correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-inelastic',   text: 'price inelastic',                correct: true  },
            { id: 'b3-elastic',     text: 'price elastic',                  correct: false },
            { id: 'b3-perfectly',   text: 'perfectly elastic',              correct: false },
            { id: 'b3-income',      text: 'income elastic',                 correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-small',       text: 'small',                          correct: true  },
            { id: 'b4-large',       text: 'large',                          correct: false },
            { id: 'b4-zero',        text: 'eliminated entirely',            correct: false },
            { id: 'b4-permanent',   text: 'permanent',                      correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-connected',   text: 'better-connected or higher-income tenants', correct: true  },
            { id: 'b5-poorest',     text: 'the poorest households first',   correct: false },
            { id: 'b5-random',      text: 'tenants chosen at random',       correct: false },
            { id: 'b5-landlords',   text: 'landlords themselves',           correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-maintenance', text: 'maintenance and quality',        correct: true  },
            { id: 'b6-rent',        text: 'the contractual rent',           correct: false },
            { id: 'b6-tax',         text: 'their tax liability',            correct: false },
            { id: 'b6-marketing',   text: 'marketing spend',                correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-useful',      text: 'a useful but conditional',       correct: true  },
            { id: 'b7-perfect',     text: 'a perfect',                      correct: false },
            { id: 'b7-irrelevant',  text: 'an irrelevant',                  correct: false },
            { id: 'b7-only',        text: 'the only available',             correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-housing-ben', text: 'housing benefit or social housing', correct: true  },
            { id: 'b8-vat',         text: 'a VAT increase on rents',        correct: false },
            { id: 'b8-tariff',      text: 'tariffs on imported building materials', correct: false },
            { id: 'b8-ban',         text: 'an outright ban on private renting', correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',   text: 'A rent cap always protects low-income tenants because lower rents always help them',                          correct: false },
          { id: 'op-useful',   text: 'A rent cap helps sitting tenants but is a conditional tool – better-targeted alternatives usually dominate', correct: true  },
          { id: 'op-no',       text: 'Rent caps should never be used because they always destroy more welfare than they create',                    correct: false },
          { id: 'op-market',   text: 'Housing affordability is not a market failure and requires no government intervention',                       correct: false }
        ]
      },
      examBridge: '"A binding rent cap is a useful but conditional tool: it shifts surplus from landlords to sitting tenants in the short run, but pushes quantity supplied below Q_e and opens up a shortage that grows over time as long-run PES bites – Berlin\'s ~50% fall in new listings is the clearest evidence. Non-price rationing then allocates the limited supply via networks and key money, often missing the lowest-income tenants the policy was designed for, while landlords restore margins by cutting maintenance (~8% in San Francisco). Better-targeted alternatives such as housing benefit or social housing typically reach low-income tenants more reliably without choking off supply, so the strongest verdict is that a cap protects some at the expense of others rather than being the most effective instrument overall."'
    }
  ]
};
