/* ============================================================
   ECONOS — Link It · Predict the Outcome station data
   The Price Mechanism: price signals, rationing and incentivising
   ============================================================ */

window.ECONOS_LINK_PREDICT = {
  topic:   'The Price Mechanism',
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
  instruction: 'For each scenario, predict the directional effect on each variable. Trace the three price mechanism functions: rationing (who gets the good now), signalling (what does the price tell producers) and incentivising (what action does the signal prompt).',

  scenarios: [
    {
      id: 'pm-house-price-rise',
      icon: '🏠',
      title: 'London house prices rise 25% in two years',
      setup: 'A combination of falling interest rates, rising population and constrained planning permission causes London house prices to rise 25% over two years. The price mechanism is the primary allocation mechanism for the private housing market.',
      variables: [
        {
          id: 'rationing',
          label: 'Who gets London housing (allocation effect)',
          correct: 'ambiguous',
          reason: 'Higher prices ration housing toward those able and willing to pay more. First-time buyers and lower-income households are priced out; those with higher incomes or existing equity can still buy. This is the rationing function of the price mechanism at work — but whether this allocation is efficient or equitable is contested. Markets ration by willingness to pay, not by need or social value.'
        },
        {
          id: 'building_profits',
          label: 'Profit margins for property developers and house builders',
          correct: 'increase',
          reason: 'Higher house prices, with input costs (land, labour, materials) initially unchanged, mean wider profit margins for builders. This is the signalling function: rising prices signal that housing is in shortage, and high profits are the market\'s way of incentivising more supply. This is precisely how the price mechanism is supposed to work in theory.'
        },
        {
          id: 'new_housing_supply',
          label: 'Rate of new house building in London',
          correct: 'increase',
          reason: 'Higher prices and profits incentivise developers to build more — this is the incentivising function. Firms respond to the price signal by redirecting resources (capital, workers, land) into housing construction. In a well-functioning market, supply rises to close the gap. In the UK, however, planning restrictions limit this response — supply is inelastic, so price rises persist longer than pure theory predicts.'
        },
        {
          id: 'rental_prices',
          label: 'Private rental prices in London',
          correct: 'increase',
          reason: 'Higher house prices push potential buyers into the rental market (they cannot afford to buy). Demand for rental properties rises, while rental supply is unchanged in the short run. Landlords can charge higher rents — rental prices rise. This illustrates how house price rises transmit to the rental market through the substitution effect: buying and renting are substitutes.'
        }
      ],
      examBridge: '"Rising London house prices demonstrate all three price mechanism functions simultaneously: rationing (housing moves to those willing to pay more), signalling (the price rise communicates shortage to developers and investors), and incentivising (higher profits attract new building). However, UK planning restrictions limit the supply response — PES for housing is low — so prices rise further than in a market with elastic supply, and the rationing function creates significant distributional concerns."'
    },
    {
      id: 'pm-gas-price-surge',
      icon: '⛽',
      title: 'UK gas prices treble following a supply disruption',
      setup: 'A major disruption to UK gas imports causes the wholesale price of natural gas to treble in three months. Gas is used for domestic heating, cooking, and as an input in manufacturing and electricity generation. The government has not capped prices.',
      variables: [
        {
          id: 'gas_consumption',
          label: 'UK household gas consumption',
          correct: 'decrease',
          reason: 'The higher price rations gas — this is the rationing function. Households reduce consumption by turning down thermostats, improving insulation, or switching to alternatives. The fall in consumption depends on PED for gas: in the short run, demand is quite inelastic (households need heat) so consumption falls less than proportionately to the price rise. In the long run, as households invest in insulation or heat pumps, demand is more elastic.'
        },
        {
          id: 'heat_pump_demand',
          label: 'Demand for heat pumps and electric heating (substitutes)',
          correct: 'increase',
          reason: 'Gas and electricity-based heat pumps are substitutes. When gas prices treble, the relative cost of gas heating rises sharply compared to electric alternatives. Cross-price elasticity of demand (XED) for heat pumps with respect to gas price is positive — demand for heat pumps rises. The price signal incentivises the switch to alternatives, which is the market\'s mechanism for promoting energy transition.'
        },
        {
          id: 'gas_investment',
          label: 'Investment in UK domestic gas production and storage',
          correct: 'increase',
          reason: 'High gas prices signal shortage and create profit opportunities for producers. The incentivising function: energy firms and investors are attracted by the higher returns available from increased gas production, storage investment, or LNG import terminal capacity. This is how the price mechanism is supposed to encourage supply-side adjustment to correct a shortage.'
        },
        {
          id: 'manufacturing_costs',
          label: 'Production costs for gas-intensive UK manufacturers',
          correct: 'increase',
          reason: 'Gas is a key input for glass, ceramics, chemicals and food processing. When gas prices treble, input costs for these industries rise substantially. This shifts their supply curves left — higher prices to consumers and/or lower output and employment in these sectors. The price signal transmits a negative supply shock from energy markets into manufacturing, illustrating how price mechanism shocks ripple across interconnected markets.'
        }
      ],
      examBridge: '"Tripling gas prices performs all three price mechanism functions: rationing (lower consumption as price rises), signalling (shortage communicated to producers and investors), and incentivising (firms invest in alternatives and new gas capacity). However, distributional concerns arise — higher energy bills are regressive, taking a larger share of income from poorer households. This is a classic case where the market mechanism is allocatively efficient but raises equity concerns that justify government intervention (energy subsidies, windfall taxes)."'
    }
  ]
};
