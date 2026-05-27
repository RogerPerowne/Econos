/* ============================================================
   ECONOS – Link It · It Depends On station data
   Supply: evaluate the energy cost shock claim for UK manufacturing
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Supply',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether energy costs are the dominant supply-side shock.',
  nextUrl:     TopicLoader.routes.link('judge'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'supply-energy-shock',
      claim: {
        icon:   '🏭',
        prompt: 'Claim',
        text:   'Energy costs were the top supply shock for UK manufacturing in 2021–22.'
      },
      factors: [
        {
          id:    'energy-intensity',
          icon:  '⚡',
          label: 'Energy intensity of the production process',
          why:   'In sectors where energy accounts for 20–40% of total costs (steel, ceramics, glass), a 400% gas price rise has a massive effect on marginal cost and shifts supply left dramatically. For sectors where energy is only 5% of costs, the same price spike barely moves the supply curve. The significance of the cost shock depends entirely on how energy-intensive production is.'
        },
        {
          id:    'ped-output',
          icon:  '📉',
          label: 'Price elasticity of demand for the product',
          why:   'If demand is price inelastic (steel, specialist glass), producers can pass more of the cost rise to buyers via higher prices – reducing the output cut. If demand is price elastic, the price rise destroys demand, forcing larger output reductions. PED shapes how the cost shock splits between price and quantity effects – determining whether the supply shift mainly causes inflation or mainly causes output loss.'
        },
        {
          id:    'international-competition',
          icon:  '🌍',
          label: 'Exposure to international competition',
          why:   'UK manufacturers compete with producers in countries with lower energy costs or government subsidies. A UK-specific energy cost shock makes domestic producers uncompetitive against imports, compounding the output loss – the supply curve shifts left AND demand for domestic output may fall. Without border protections, the domestic industry can be hollowed out by lower-cost foreign competitors.'
        },
        {
          id:    'hedging',
          icon:  '🛡️',
          label: 'Degree of energy price hedging',
          why:   'Firms with long-term fixed-price energy contracts were largely shielded from the 2021–22 spot-market spike. Only firms exposed to spot prices bore the full cost increase. The aggregate supply shift is smaller than the raw spot-price data suggests – and varies widely across firms in the same sector. Hedging fundamentally limits the significance of the shock for protected firms.'
        },
        {
          id:    'substitution',
          icon:  '🔄',
          label: 'Substitutability of energy inputs',
          why:   'Some producers can switch from gas to electricity, hydrogen or waste-heat recovery in the medium run, reducing their dependence on natural gas. The more substitutable the energy input, the less permanent the supply shift – and the faster producers can adjust and partially offset the cost increase. In the very short run, however, most industrial processes cannot substitute away from gas quickly.'
        },
        {
          id:    'government-support',
          icon:  '🏛️',
          label: 'Government energy support schemes',
          why:   'The UK Energy Bill Relief Scheme (EBRS) from October 2022 capped gas prices for industrial users, partially reversing the supply shift and keeping firms in production that would otherwise have exited. The actual supply contraction depended on how comprehensive, swift and sustained government intervention was – a key evaluation point about the real-world severity of the shock.'
        },
        {
          id:    'labour-capital',
          icon:  '🛠️',
          label: 'Labour and capital cost changes',
          why:   'Energy costs rose alongside labour costs (tight post-COVID labour market, National Living Wage increases) and raw materials (metals, chemicals). The total shift in supply depends on all input cost changes simultaneously – energy was the largest component but not the only one. A holistic supply-side assessment requires considering the combined cost squeeze.'
        },
        {
          id:    'time-horizon',
          icon:  '⏳',
          label: 'Time horizon and firm exit/entry',
          why:   'In the very short run, some firms suspended production temporarily rather than exiting permanently. Over a longer period, sustained high costs forced permanent closures and investment in energy efficiency – changing the shape of the supply curve itself. The supply-side impact grows more severe if costs remain elevated, as permanent capacity exits the market.'
        }
      ],
      modelRanking: ['energy-intensity', 'ped-output', 'international-competition'],
      judgement: '"Whether energy costs are the most significant supply-side shock depends on the energy intensity of the sector – for steel and ceramics, the effect is dominant. But its impact on equilibrium price vs quantity is shaped by the PED for the output: inelastic demand allows firms to pass costs forward, while elastic demand amplifies output losses. International competition is a critical third factor – UK-specific cost rises push production abroad rather than simply reducing global output."'
    }
  ]
};
