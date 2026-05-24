/* ============================================================
   ECONOS — Link It · Chain station data
   Public Goods: build the non-excludable → free rider → market failure → taxation chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Public Goods',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_extract.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'extract', label: 'Read the Extract',   href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'public-goods-mechanism',
      scenario: {
        icon:  '🌊',
        label: 'Scenario',
        text:  'The UK Environment Agency is considering whether to build new coastal flood defences protecting 5,000 households in a coastal community. There is no current government provision and no private firm is building defences.'
      },
      anchor: "Coastal flood defences are non-rival (one household's protection does not reduce availability to others) and non-excludable (impossible to charge individual households for coastal protection).",
      tiles: [
        {
          id:  'step-freerider',
          icon: '🎭',
          text: "Free rider problem: because flood protection cannot be withheld from non-payers, each household has an incentive to wait for others to fund it → no one reveals true WTP → effective market demand collapses to near zero (D_private << D_social)",
          pos:  0
        },
        {
          id:  'step-market-fail',
          icon: '📉',
          text: "Market failure: private firms cannot profitably provide flood defences — they cannot charge non-payers → no revenue stream → zero private provision → Q_market ≈ 0, far below Q* (the socially optimal level of flood protection)",
          pos:  1
        },
        {
          id:  'step-state',
          icon: '🏛️',
          text: "State solution: government provides flood defences via general taxation — using compulsory payment to solve the free rider problem → Q rises toward Q* → welfare gain (£8 per £1 invested) is realised without relying on voluntary revealed preference",
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '📈',
          text: 'Rising sea levels increase the marginal social cost of not providing flood defences',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '☂️',
          text: 'Insurance companies price flood risk accurately, providing an alternative to state provision',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏘️',
          text: 'Local councils raise council tax to fund community flood barriers',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: "Non-excludability is the key: because flood protection is available to all coastal households once built — regardless of whether they contribute — each household's rational strategy is to wait for others to pay. This is the free rider problem. No one reveals their true WTP for flood protection because they expect to benefit for free. Effective market demand (D_private) collapses to near zero — far below the true social demand (D_social) that reflects the aggregated WTP of all protected households."
        },
        {
          pos:  1,
          text: "Without revealed demand, no private firm can generate enough revenue to cover the cost of provision. Even if a firm were willing to invest in flood defences, it would have no mechanism to charge the 5,000 households it protects — non-excludability prevents revenue collection. Private market provision collapses to Q_market ≈ 0, far below Q* — the socially optimal level at which the marginal social benefit (£8 per £1 invested) would justify provision."
        },
        {
          pos:  2,
          text: "General taxation solves the free rider problem by making payment compulsory. Households cannot opt out of their tax contribution — so the government can collect sufficient revenue to fund Q* of flood protection. The £5.2bn Environment Agency programme demonstrates exactly this: state provision via taxation converts D_social (true aggregate WTP) into effective collective demand, realising the £8/£1 welfare return that the private market could never capture."
        }
      ],
      examBridge: '"Coastal flood defences exhibit both non-rivalry and non-excludability — making them a pure public good. The free rider problem collapses effective market demand from D_social (true WTP) to D_private (revealed WTP ≈ 0) — no private firm can profitably provide protection it cannot exclude non-payers from enjoying. The Environment Agency\'s £5.2bn programme demonstrates state provision via general taxation as the only mechanism that can compel payment and realise the £8/£1 welfare return."',

      prompts: [
        'Why does non-excludability cause effective market demand to collapse to near zero?',
        'Why can no private firm profitably provide coastal flood defences?',
        'How does general taxation solve the free rider problem?'
      ],
      modelAnswers: [
        "Non-excludability means that once flood defences are built, no household can be prevented from benefiting — regardless of whether they contributed. Each household therefore has a dominant strategy of free riding: waiting for others to pay while expecting to receive the protection anyway. Since every household follows this strategy, no one reveals their true WTP — effective market demand collapses to D_private ≈ 0, far below D_social.",
        "A private firm's revenue comes from charging customers. Flood defences protect all coastal households simultaneously — but non-excludability means the firm cannot withhold protection from non-payers. Without a mechanism to collect payment from all beneficiaries, the firm's revenue is far less than the cost of provision. No private firm will supply flood defences because the investment would not be commercially viable — Q_market ≈ 0.",
        "General taxation is compulsory: households cannot choose to opt out. This removes the free rider option — every household contributes via their tax bill, regardless of whether they would voluntarily reveal WTP for flood protection. The government can then use this revenue to fund Q* of flood defences, converting the true aggregate D_social into effective collective demand and realising welfare gains the market cannot capture."
      ],
      vocab: ['public good', 'non-rival', 'non-excludable', 'free rider', 'market failure', 'under-provision', 'general taxation', 'revealed preference', 'social demand', 'private demand', 'quasi-public good']
    }
  ]
};
