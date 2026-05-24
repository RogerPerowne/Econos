/* ============================================================
   ECONOS — Link It · It Depends On station data
   PES: evaluate whether low PES is the primary cause of UK rent rises 2022–23
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Price Elasticity of Supply',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether low PES is truly the primary driver of the rent spike.',
  nextUrl:     TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.buildUrl('link_calc.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'pes-housing-depends',
      claim: {
        icon:   '🏠',
        prompt: 'Policy claim',
        text:   'Low PES of rental housing is the main reason UK rents outpaced inflation.'
      },
      factors: [
        {
          id:    'construction-time',
          icon:  '🏗️',
          label: 'Length of construction and planning lead times',
          why:   'New homes take 24–36 months from planning to completion in England. This creates an almost fixed supply in the short run regardless of the strength of the price signal. Faster planning approval and modular construction would raise PES and moderate the rent rise. This is the structural root cause of low PES.'
        },
        {
          id:    'landlord-exit',
          icon:  '🚪',
          label: 'Rate of landlord exit from the rental sector',
          why:   'Rising mortgage costs and increased regulation (EPC requirements, Renters\' Reform Bill) pushed landlords to sell properties rather than rent them. This reduced the stock of rental supply at the same time as demand surged — a simultaneous inward shift of supply compounding the PES constraint. It partly explains the rent spike independently of new supply elasticity.'
        },
        {
          id:    'planning-system',
          icon:  '📋',
          label: 'Rigidity of the planning system',
          why:   'England\'s discretionary planning system gives local authorities wide scope to refuse or delay applications. Even approved developments face legal challenges and conditions that extend lead times. A more rules-based (zonal) planning system — as in the Netherlands or Japan — produces higher PES and more responsive supply. Planning rigidity is a key determinant of low PES.'
        },
        {
          id:    'financing',
          icon:  '💰',
          label: 'Availability and cost of development finance',
          why:   'Rising interest rates (Bank Rate from 0.1% to 5.25% in 2021–23) raised the cost of development finance. Developers became more cautious about starting new projects, further reducing supply responsiveness to the rent price signal. High financing costs reduce PES by making new development less viable even when rents are high.'
        },
        {
          id:    'demand-composition',
          icon:  '👥',
          label: 'Composition of demand (short-term renters vs families)',
          why:   'Student and young professional demand (short-term, flexible) is more price elastic than family demand (longer-term, needs space). The composition of the demand surge matters: predominantly young renter demand raises rents in studio/1-bed markets more than family homes, affecting PES in different market segments differently.'
        },
        {
          id:    'geographic',
          icon:  '📍',
          label: 'Geographic concentration of demand',
          why:   'Migration and urban return concentrated demand in London and major cities where land is scarce and planning constraints are most severe. PES is lower in high-density cities than in suburban or rural areas. The rent crisis was partly a geographic mismatch between where supply can be added and where demand is concentrated.'
        },
        {
          id:    'rent-control',
          icon:  '⚖️',
          label: 'Impact of rent controls in reducing supply',
          why:   'Scotland introduced rent control measures in 2022. Evidence suggests this accelerated landlord exits and reduced new investment, further lowering effective supply. Where rent controls are introduced elsewhere, they reduce the incentive to build, worsening PES over time — a policy intervention that can compound the original PES problem.'
        },
        {
          id:    'lr-elasticity',
          icon:  '⏳',
          label: 'Short-run vs long-run PES distinction',
          why:   'In the very long run (5–10 years), PES for housing rises significantly as supply responds to sustained high prices — more planning permissions granted, more build-to-rent investment, densification permitted. The rent crisis is partly a short-run phenomenon; whether rents stabilise depends on whether supply responds over a longer time horizon. PES is not permanently near zero — it rises as time extends.'
        }
      ],
      modelRanking: ['construction-time', 'landlord-exit', 'planning-system'],
      judgement: '"The primary reason rents rose faster than inflation is the near-zero short-run PES: construction lead times of 24–36 months mean supply is essentially fixed regardless of the strength of the price signal. But PES alone is not sufficient — the landlord exit effect (rising mortgage costs and regulation) simultaneously contracted existing supply, compounding the inelastic new supply problem. Planning system reform addresses the structural PES constraint, but only over a multi-year horizon."'
    }
  ]
};
