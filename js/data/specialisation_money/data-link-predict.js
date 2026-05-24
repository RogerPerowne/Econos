/* ============================================================
   ECONOS — Link It · Predict the Outcome station data
   Specialisation & Money: trade, comparative advantage and exchange
   ============================================================ */

window.ECONOS_LINK_PREDICT = {
  topic:   'Specialisation & Money',
  backUrl: TopicLoader.buildUrl('link_chain.html'),
  nextUrl: TopicLoader.buildUrl('link_depends.html'),

  stations: [
    { id: 'context', label: 'Use the context',     href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',     href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'predict', label: 'Predict the Outcome', href: TopicLoader.buildUrl('link_predict.html') },
    { id: 'depends', label: 'It depends on',       href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement',  href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 2,

  eyebrow:     'Predict the Outcome',
  instruction: 'For each scenario, predict which direction each variable will move. Think carefully about how specialisation and trade create winners and losers even when total output rises.',

  scenarios: [
    {
      id: 'spec-trade-deal',
      icon: '🚢',
      title: 'UK signs a trade deal removing tariffs on imported car parts',
      setup: 'The UK signs a free trade agreement with South Korea, removing all tariffs on imported car components. Previously a 10% tariff protected UK parts manufacturers. UK car assemblers can now buy Korean parts at 20% lower cost. Assume UK car demand is unchanged.',
      variables: [
        {
          id: 'parts_producers',
          label: 'UK car parts manufacturers (output and employment)',
          correct: 'decrease',
          reason: 'UK parts makers now face direct competition from cheaper Korean imports. The price of imported parts falls by 20%, which UK manufacturers cannot match. Some UK parts factories will close or downsize — output and employment in the UK parts sector falls. This is the cost side of comparative advantage: the UK has a comparative disadvantage in parts production relative to South Korea.'
        },
        {
          id: 'assembly_costs',
          label: 'Costs of UK car assembly firms',
          correct: 'decrease',
          reason: 'UK car assemblers (like Jaguar Land Rover, Nissan Sunderland) can now source components 20% more cheaply. Their input costs fall, improving profit margins or allowing them to cut prices. This is the gain from trade: the UK concentrates on assembly (where it has comparative advantage) and imports parts (where it has comparative disadvantage).'
        },
        {
          id: 'car_prices',
          label: 'Price of UK-assembled cars for consumers',
          correct: 'decrease',
          reason: 'With input costs falling, competition among assemblers is likely to drive final car prices down — passing some of the cost saving to consumers. The extent of the price fall depends on the PED for cars and the degree of competition in the market. This is the consumer benefit of international specialisation.'
        },
        {
          id: 'total_employment',
          label: 'Total UK automotive employment (parts + assembly)',
          correct: 'ambiguous',
          reason: 'This is genuinely uncertain. Jobs are lost in parts manufacturing (comparative disadvantage sector) but may be gained in assembly (comparative advantage sector) as lower costs make UK-assembled cars more competitive. The net effect depends on whether assembly gains exceed parts losses — and the speed of adjustment. In the short run, job losses in parts may dominate. In the long run, lower costs may support more assembly jobs. This is why trade liberalisation is controversial: gains are diffuse, losses are concentrated.'
        }
      ],
      examBridge: '"Removing tariffs on car parts allows the UK to import at comparative advantage prices, reducing assembly costs and consumer prices. But parts manufacturers face structural unemployment as their sector loses to cheaper imports. Aggregate welfare rises (more total output at lower cost) but distributional consequences are unequal — workers in the losing sector bear concentrated costs while consumers gain diffuse benefits."'
    },
    {
      id: 'spec-barter-breakdown',
      icon: '🔄',
      title: 'A remote island economy attempts to operate without money',
      setup: 'A thought experiment: 500 people on an island each specialise in producing one good (fishing, farming, building, medicine etc.). They attempt to exchange through barter rather than using money as a medium of exchange. Consider what happens to trade, specialisation, and living standards.',
      variables: [
        {
          id: 'exchange_volume',
          label: 'Volume of exchange between specialists',
          correct: 'decrease',
          reason: 'Barter requires a "double coincidence of wants": both parties must want exactly what the other produces at the same time. A fisherman wanting medicine must find a doctor who wants fish — at precisely the right moment. This search cost is enormous with 500 specialists. Most potential trades fail to occur. Exchange volume collapses compared to a money economy where any surplus can be sold for money and money used to buy anything.'
        },
        {
          id: 'specialisation_depth',
          label: 'Degree of specialisation in the economy',
          correct: 'decrease',
          reason: 'When exchange is difficult, specialisation becomes risky. If a doctor cannot exchange medical services for food, they must grow their own food — reducing time spent on medicine. Specialists retreat toward self-sufficiency. The gains from the division of labour depend on the ability to exchange surplus production: without money, specialisation becomes less feasible and depth of specialisation falls.'
        },
        {
          id: 'living_standards',
          label: 'Average living standards across the island',
          correct: 'decrease',
          reason: 'Specialisation raises productivity — a specialist doctor is far more productive than a farmer who occasionally treats illness. Without money, specialisation unravels, productivity falls, and total output declines. This is Adam Smith\'s insight: the division of labour is limited by the extent of the market. Money expands the market by eliminating the double coincidence problem — without it, the "market" shrinks and living standards fall.'
        },
        {
          id: 'money_emergence',
          label: 'Likelihood that some good spontaneously becomes money',
          correct: 'increase',
          reason: 'History shows that money tends to emerge spontaneously in barter economies. People quickly discover that holding a widely-accepted good (shells, gold, cigarettes in POW camps) makes exchange much easier. A commodity that is durable, divisible, portable and widely desired becomes a medium of exchange — proto-money. The barter failure creates the incentive to adopt money: its emergence is likely, illustrating why all known complex economies have used money.'
        }
      ],
      examBridge: '"Barter requires a double coincidence of wants, making exchange costly and unreliable. As trade volume falls, rational specialists retreat toward self-sufficiency — the division of labour unravels. Total productivity and living standards fall. Money solves this by acting as a medium of exchange, store of value and unit of account — enabling complex specialisation by eliminating search costs and the double coincidence requirement."'
    }
  ]
};
