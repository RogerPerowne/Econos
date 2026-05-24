/* ============================================================
   ECONOS — Link It · It Depends On station data
   Consumer & Producer Surplus: evaluate the bus subsidy welfare claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Consumer & Producer Surplus',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether a per-unit bus subsidy actually maximises consumer welfare.',
  nextUrl:     TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'bus-subsidy-welfare',
      claim: {
        icon:   '🚌',
        prompt: 'Policy claim',
        text:   'Per-unit bus subsidies raise consumer surplus and allocative efficiency.'
      },
      factors: [
        {
          id:    'ped-bus',
          icon:  '📉',
          label: 'Price elasticity of demand for bus travel',
          why:   'If demand is price inelastic (short-run bus commuters with no alternative), a fare reduction increases CS mainly through the price reduction on existing journeys rather than attracting many new users. If demand is elastic, more new passengers board, expanding CS further. PED determines how much of the subsidy transfers to consumers vs simply increasing operator margins.'
        },
        {
          id:    'positive-ext',
          icon:  '🌿',
          label: 'Size of positive externalities from bus travel',
          why:   'The allocative efficiency case for the subsidy depends on MSB > MPB. The external benefits (congestion relief, carbon reduction, access for car-free households) must be significant enough to justify the taxpayer cost. If external benefits are small, the subsidy causes overproduction rather than correcting underproduction.'
        },
        {
          id:    'operator-efficiency',
          icon:  '🚌',
          label: 'Operator efficiency and pass-through rate',
          why:   'A per-unit subsidy reduces operators\' costs, but operators may not pass all the saving to passengers in the form of lower fares — they may retain it as profit. The proportion of the subsidy that becomes lower fares (rather than higher margins) determines how much CS rises. In deregulated markets, pass-through may be incomplete.'
        },
        {
          id:    'routing',
          icon:  '📍',
          label: 'Which routes receive the subsidy',
          why:   'Subsidies concentrated on profitable urban routes mainly boost CS for passengers who already had service. The welfare gain is highest when subsidies enable unprofitable socially necessary routes (rural, off-peak) to operate — serving passengers with no alternative. Geographic targeting of subsidy determines welfare impact.'
        },
        {
          id:    'alternative-modes',
          icon:  '🚗',
          label: 'Availability of alternative transport modes',
          why:   'If car ownership is high and petrol relatively cheap, bus fare reductions attract few new passengers — limiting the CS gain and the congestion relief externality. In dense cities with poor car access (e.g., London), bus demand is more elastic and fare reductions attract more new riders, maximising CS gain.'
        },
        {
          id:    'government-cost',
          icon:  '💷',
          label: 'Opportunity cost of public funding',
          why:   'Subsidy funding comes from taxation, which has an opportunity cost. If the £2.5bn spent on bus subsidies could generate a higher welfare return in healthcare or education, the subsidy is inefficient even if it raises bus CS. Full welfare accounting must compare the subsidy benefit against alternative uses of public funds.'
        },
        {
          id:    'crowding-out',
          icon:  '🏢',
          label: 'Crowding-out of private sector bus operators',
          why:   'Government subsidy to publicly franchised operators may deter private entry that could provide lower-cost services without subsidy. If subsidy creates market dependency or barriers to entry, long-run efficiency losses may outweigh short-run CS gains.'
        },
        {
          id:    'temporal',
          icon:  '⏱️',
          label: 'Whether demand and cost conditions are stable over time',
          why:   'A subsidy calibrated for current cost and demand conditions may become miscalibrated as fuel costs, technology (electric buses) and passenger patterns change. Ongoing subsidy review is needed to ensure the welfare gain persists — a fixed per-unit subsidy may over- or under-correct as conditions change.'
        }
      ],
      modelRanking: ['positive-ext', 'ped-bus', 'operator-efficiency'],
      judgement: '"Whether bus subsidies improve allocative efficiency depends fundamentally on whether MSB genuinely exceeds MPB — i.e., whether positive externalities are large enough to justify the taxpayer cost. If they are, the subsidy moves output toward Q*, raising CS and net welfare. But the PED for bus travel determines how much new ridership the lower fare attracts, and the pass-through rate determines whether operators share the subsidy benefit with passengers or retain it as profit."'
    }
  ]
};
