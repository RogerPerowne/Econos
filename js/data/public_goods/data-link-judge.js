/* ============================================================
   ECONOS — Link It · Make the Judgement station data
   Public Goods: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Public Goods',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.buildUrl('link_complete.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'extract', label: 'Read the Extract',   href: TopicLoader.buildUrl('link_extract.html') },
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
      id: 'public-goods-judgement',
      claim: {
        icon:   '🌊',
        prompt: 'Policy claim',
        text:   'State provision financed by general taxation is the only effective solution to the under-provision of pure public goods.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '£5.2bn EA programme, entirely government-funded. £8 return per £1 invested. 2007 Cumbria floods: £3.5bn damage. Private market provision: £0.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Non-excludable → free rider → D_private collapses to ≈0 → no private revenue stream → market provision = 0 → government taxation solves free rider problem → Q*.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'Free rider collapse: D_social → D_private ≈ 0. Social optimum at Q* only achievable via compulsory general taxation.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on degree of non-excludability, accuracy of cost-benefit analysis (Q* estimation), and risk of government failure.' }
      ],
      cloze: 'Pure public goods are [1] and [2] — so private firms cannot exclude non-payers and therefore cannot generate revenue to cover provision costs. The [3] problem means each household waits for others to fund the good → effective market demand (D_private) collapses to near zero, far below D_social (true WTP). Government solves this by [4] to fund provision — making payment compulsory so free riding is eliminated. However, state provision achieves Q* only if [5] accurately estimates the social value of the good. The policy is least effective when the public good is [6] — because technology enabling exclusion opens the door to market-based provision and user charges. State provision may also lead to [7] if political pressures cause over- or under-provision. Therefore, taxation-funded state provision is the [8] solution for pure public goods, but should be complemented by robust cost-benefit analysis and governance to minimise government failure.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-nr',      text: 'non-rival',    correct: true  },
            { id: 'b1-rival',   text: 'rival',        correct: false },
            { id: 'b1-exc',     text: 'excludable',   correct: false },
            { id: 'b1-dem',     text: 'demerit',      correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-ne',      text: 'non-excludable',  correct: true  },
            { id: 'b2-inel',    text: 'inelastic',       correct: false },
            { id: 'b2-comp',    text: 'complementary',   correct: false },
            { id: 'b2-inf',     text: 'inferior',        correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-fr',      text: 'free rider',       correct: true  },
            { id: 'b3-adv',     text: 'adverse selection', correct: false },
            { id: 'b3-mh',      text: 'moral hazard',     correct: false },
            { id: 'b3-pm',      text: 'price mechanism',  correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-tax',     text: 'levying compulsory general taxation',    correct: true  },
            { id: 'b4-bonds',   text: 'issuing voluntary bonds',                correct: false },
            { id: 'b4-pig',     text: 'applying Pigouvian taxes',               correct: false },
            { id: 'b4-sub',     text: 'subsidising private producers',          correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-cba',     text: 'cost-benefit analysis (CBA)',            correct: true  },
            { id: 'b5-price',   text: 'price signals from the market',          correct: false },
            { id: 'b5-survey',  text: 'consumer surveys',                       correct: false },
            { id: 'b5-elas',    text: 'income elasticity',                      correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-quasi',   text: 'quasi-public (partially excludable)',   correct: true  },
            { id: 'b6-inf',     text: 'inferior',                              correct: false },
            { id: 'b6-comp',    text: 'complementary',                         correct: false },
            { id: 'b6-intl',    text: 'international',                         correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-gf',      text: 'government failure',        correct: true  },
            { id: 'b7-mf',      text: 'market failure',            correct: false },
            { id: 'b7-ext',     text: 'positive externalities',    correct: false },
            { id: 'b7-dwl',     text: 'deadweight welfare loss',   correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-only',    text: 'only available',      correct: true  },
            { id: 'b8-least',   text: 'least desirable',     correct: false },
            { id: 'b8-cost',    text: 'most expensive',      correct: false },
            { id: 'b8-regr',    text: 'most regressive',     correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-market',  text: 'Markets can always provide public goods if prices are set correctly',                                                                    correct: false },
          { id: 'op-mix',     text: 'State taxation provision is necessary for pure public goods but may be supplemented by community or market mechanisms for quasi-public goods', correct: true  },
          { id: 'op-charity', text: 'Public goods are best provided by charitable organisations and do not require taxation',                                                 correct: false },
          { id: 'op-all',     text: 'All goods should be provided by the state to eliminate market failure',                                                                  correct: false }
        ]
      },
      examBridge: '"Coastal flood defences are non-rival and non-excludable — the free rider problem collapses effective market demand to near zero (D_private << D_social). No private firm can profitably provide protection it cannot withhold from non-payers. The Environment Agency\'s £5.2bn programme demonstrates that compulsory general taxation is the only mechanism that solves the free rider problem at scale — achieving Q* and realising the £8/£1 welfare return that markets cannot capture. The strongest evaluation acknowledges that government failure (CBA inaccuracy, political distortion) is the principal limitation of state provision, not the theoretical framework."'
    }
  ]
};
