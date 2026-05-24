/* ============================================================
   ECONOS — Link It · It Depends On station data
   PPF: evaluate the green investment as rational PPF trade-off claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Production Possibility Frontiers',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether the long-run PPF shift justifies the short-run opportunity cost.',
  nextUrl:     TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'calc',    label: 'Calculate It',       href: TopicLoader.buildUrl('link_calc.html')    },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'ppf-green-investment',
      claim: {
        icon:   '🌱',
        prompt: 'Claim',
        text:   'Green investment is a rational PPF trade — SR sacrifice for LR shift.'
      },
      factors: [
        {
          id:    'time-preference',
          icon:  '⏱️',
          label: 'Society\'s time preference (present vs future)',
          why:   'The PPF trade-off involves giving up present consumption for future capacity. Whether this is rational depends on society\'s discount rate: how much future benefits are valued relative to current costs. A high discount rate (impatient society) favours current consumption; a low discount rate (patient society) favours investment. Government policy must reflect democratic time preferences.'
        },
        {
          id:    'productivity-multiplier',
          icon:  '🔧',
          label: 'Productivity of the investment (size of PPF shift)',
          why:   'The long-run justification only holds if green investment actually shifts the PPF outward by more than the opportunity cost. If offshore wind energy is cheap and reliable, the productivity gain across the economy may justify the current sacrifice. If cost overruns occur or technology underperforms, the PPF shift is smaller than expected — making the trade-off retrospectively poor.'
        },
        {
          id:    'crowding-out',
          icon:  '💷',
          label: 'Whether public investment crowds out or crowds in private investment',
          why:   'Government green investment may crowd out private green investment (competing for the same engineers, land and finance). Or it may crowd in private investment (de-risking early-stage projects, building supply chains, creating markets). IPPR estimates £3–4 of private investment per £1 public — if accurate, the opportunity cost of each £1 public investment is less than it appears because private activity amplifies the shift.'
        },
        {
          id:    'political-commitment',
          icon:  '🗳️',
          label: 'Political sustainability of the investment plan',
          why:   'Long-run PPF shifts require sustained investment over many years. If a green investment programme is abandoned mid-way (as the UK\'s £28bn pledge was scaled back before implementation), sunk costs are realised without the PPF shift completing. Political discontinuity reduces the expected value of investment — increasing effective opportunity cost.'
        },
        {
          id:    'international-competitiveness',
          icon:  '🌍',
          label: 'Whether competitors are making similar PPF investments',
          why:   'If all major economies invest in green infrastructure simultaneously (IRA in USA, EU Green Deal), the relative competitiveness effect is muted. If only the UK invests heavily, it may build a first-mover advantage in green industries — a larger PPF shift from the same opportunity cost. The global investment landscape shapes the return on UK PPF allocation.'
        },
        {
          id:    'resource-availability',
          icon:  '⚡',
          label: 'Availability of complementary resources (skilled workers, supply chains)',
          why:   'A PPF shift from green investment requires not just capital but also engineers, skilled construction workers, grid infrastructure, and supply chains. If these are scarce (UK currently imports most offshore wind components), the PPF shift is delayed and the short-run opportunity cost is higher while supply chains are built. Complementary resource availability determines the speed and magnitude of PPF shift.'
        },
        {
          id:    'distribution',
          icon:  '👥',
          label: 'Distribution of short-run sacrifice and long-run gains',
          why:   'The PPF trade-off may not be evenly shared: the short-run cost (higher energy prices, reduced welfare spending) may fall disproportionately on lower-income households, while long-run gains (energy security, new jobs) may accrue to higher-income skilled workers and shareholders. Even if the aggregate PPF shift is positive, distributional consequences affect whether the trade-off is equitable.'
        },
        {
          id:    'alternative-investment',
          icon:  '🏗️',
          label: 'Opportunity cost vs alternatives (health, education, housing)',
          why:   'Green infrastructure is not the only way to shift the PPF outward. Investment in healthcare capacity, education quality, or housing infrastructure also raises productive potential. The PPF argument for green investment is strongest when its productivity return exceeds that of alternatives — which requires careful cost-benefit comparison across competing investment categories.'
        }
      ],
      modelRanking: ['productivity-multiplier', 'political-commitment', 'crowding-out'],
      judgement: '"Whether green investment is the best PPF trade-off depends primarily on the size of the outward shift it produces: if cheap, reliable clean energy raises productivity across all sectors by more than the opportunity cost of foregone public services, the trade-off is rational. Political sustainability is the second key condition — the long-run shift requires consistent investment across multiple governments. And crowding-in of private capital determines the true opportunity cost of each £1 of public investment."'
    }
  ]
};
