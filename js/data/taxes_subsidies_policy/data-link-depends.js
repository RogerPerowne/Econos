/* ============================================================
   ECONOS – Link It · It Depends On station data
   Taxes & Subsidies as Policy: evaluate a production subsidy claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Taxes &amp; Subsidies as Policy',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether a production subsidy actually achieves its stated objective.',
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
      id: 'subsidy-effectiveness',
      claim: {
        icon:   '🌬️',
        prompt: 'Policy claim',
        text:   'Subsidies to renewables best correct clean energy underproduction.'
      },
      factors: [
        {
          id:    'meb-accuracy',
          icon:  '🔍',
          label: 'Accuracy of the MEB estimate',
          why:   'Like a Pigouvian tax, a production subsidy must equal the MEB at Q* to restore allocative efficiency. Estimating the MEB for carbon reduction, air quality and energy security is technically complex and subject to wide ranges. An incorrectly calibrated subsidy over- or under-corrects the externality – a subsidy above the MEB causes overproduction; one below leaves underproduction continuing.'
        },
        {
          id:    'technology-learning',
          icon:  '📉',
          label: 'Speed of technology cost reduction',
          why:   'If the subsidy successfully pulls renewable costs down the learning curve – as offshore wind costs fell 63% from 2012 to 2024 – the market may eventually self-sustain without the subsidy. The policy is most effective when it bridges the gap from high-cost early technology to cost-competitive maturity, at which point the subsidy becomes unnecessary and can be withdrawn.'
        },
        {
          id:    'regressive-cost',
          icon:  '💰',
          label: 'Who bears the cost of the subsidy',
          why:   'If funded by a flat levy on energy bills (like the CfD), the subsidy is regressive – low-income households bear a disproportionate share of the cost relative to their income. Progressive funding via general taxation would be fairer but requires political decisions about prioritisation. The distributional impact on who pays does not change whether the subsidy corrects the externality, but it determines whether the net welfare gain is equitable.'
        },
        {
          id:    'alternative-policies',
          icon:  '⚡',
          label: 'Effectiveness vs alternative instruments',
          why:   'Carbon taxes, cap-and-trade, emission standards and public investment in grid infrastructure each address renewable underproduction differently. Subsidies expand supply directly but do not price fossil fuels out of the market. Combining subsidies with a carbon price may be more effective than subsidies alone – the subsidy corrects the positive externality on the renewable side, while the carbon price corrects the negative externality on the fossil fuel side.'
        },
        {
          id:    'crowding-out',
          icon:  '🏦',
          label: 'Risk of crowding out private investment',
          why:   'If government subsidises renewable energy heavily, private investors may reduce their own R&D and deployment spending, expecting public funds to cover the gap. The net increase in investment may be smaller than the subsidy cost implies – the government expenditure partially displaces rather than supplements private capital, reducing the efficiency of the subsidy as a correction mechanism.'
        },
        {
          id:    'fossil-dependency',
          icon:  '🌍',
          label: 'Security of fossil fuel import dependency',
          why:   'Domestically produced renewables reduce import dependency and exposure to geopolitical energy shocks. This is a strategic argument for subsidies beyond the pure externality case – the UK imported 39% of its gas needs in 2022 – and may justify higher subsidy levels than the pure MEB calculation would indicate, strengthening the case for the CfD scheme.'
        },
        {
          id:    'grid-integration',
          icon:  '🔌',
          label: 'Grid capacity and storage constraints',
          why:   'Expanding renewable generation beyond what the grid can absorb creates curtailment – wasted output that cannot be transmitted or stored. Subsidies that increase generation without parallel investment in grid and storage infrastructure deliver less of the MEB than the theory predicts, because some of the output never reaches consumers and generates no external benefit.'
        },
        {
          id:    'time-horizon',
          icon:  '⏱️',
          label: 'Time horizon of the external benefit',
          why:   'Climate benefits from reduced emissions accrue over decades, while subsidy costs are immediate. If future benefits are heavily discounted (a high social discount rate), the case for large current subsidies weakens. Conversely, if future climate costs are underestimated – as many economists now argue – the subsidy is underpowered relative to the true MEB, and the correction is insufficient.'
        }
      ],
      modelRanking: ['meb-accuracy', 'technology-learning', 'alternative-policies'],
      judgement: '"Whether a production subsidy is the \'most effective\' policy depends primarily on whether the MEB can be accurately measured – a miscalibrated subsidy will under- or over-correct the externality. If the subsidy successfully pulls renewable technology down the learning curve, it may become redundant as market prices converge with the strike price. And whether subsidies are more effective than alternative instruments – such as a carbon price – depends on whether correcting the positive externality on the renewable side alone is sufficient, or whether the negative externality from fossil fuels must also be explicitly priced."'
    }
  ]
};
