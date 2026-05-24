/* ============================================================
   ECONOS — Link It · Chain station data
   PED: build the fuel duty → tax incidence → limited emissions cut chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Price Elasticity of Demand',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_diagram.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'calc',    label: 'Calculate It',       href: TopicLoader.buildUrl('link_calc.html')    },
    { id: 'data',    label: 'Read the data',      href: TopicLoader.buildUrl('link_data.html')    },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'ped-fuel-duty-mechanism',
      scenario: {
        icon:  '⛽',
        label: 'Scenario',
        text:  'The government raises fuel duty by 5p per litre on petrol and diesel. Short-run PED for petrol is −0.15.'
      },
      anchor: 'Higher fuel duty raises the effective cost of petrol production and supply',
      tiles: [
        {
          id:  'step-supply',
          icon: '🏭',
          text: 'Supply shifts left — the tax is levied on producers, raising the effective supply price at every quantity',
          pos:  0
        },
        {
          id:  'step-incidence',
          icon: '📉',
          text: 'The consumer price rises by more than the producer price falls — with inelastic demand, buyers absorb most of the tax',
          pos:  1
        },
        {
          id:  'step-outcome',
          icon: '🌱',
          text: 'Quantity demanded falls only a little (PED −0.15) — the tax raises revenue but barely cuts emissions in the short run',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🚗',
          text: 'Consumers immediately switch to electric vehicles, eliminating demand for petrol',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '📊',
          text: 'The demand curve shifts left as consumers become aware of climate change',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏛️',
          text: 'Producers pay the entire tax and consumer prices remain unchanged',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Fuel duty is a specific tax levied on producers at the point of sale. It raises the cost of supplying each litre of petrol, so the supply curve shifts left — at every price, producers are willing to supply less. This is the mechanical first step: the tax enters the market through the supply side.'
        },
        {
          pos:  1,
          text: 'With PED ≈ −0.15, demand is highly inelastic — consumers have few short-run alternatives to petrol. This gives sellers the power to pass most of the tax onto buyers as a higher price. The consumer price rises sharply while the producer price falls only a little. Tax incidence falls heavily on the consumer side precisely because of the inelasticity of demand.'
        },
        {
          pos:  2,
          text: 'Because PED is −0.15, a large percentage increase in price produces only a small percentage fall in quantity demanded. Emissions barely decline. The tax succeeds in raising government revenue — consistent with the £25bn already raised — but fails to significantly correct the carbon externality in the short run. The longer-run PED of −0.6 suggests greater effectiveness as EVs become substitutes.'
        }
      ],
      examBridge: '"With short-run PED ≈ −0.15, the fuel duty increase shifts supply left, raises the consumer price substantially and generates significant revenue, but quantity demanded — and therefore emissions — falls only a little, making the tax a more effective fiscal instrument than an environmental one in the near term."',

      prompts: [
        'Why does the tax cause the supply curve to shift rather than the demand curve?',
        'How does the PED of −0.15 determine who bears most of the tax burden?',
        'What does the small fall in quantity demanded imply for the environmental effectiveness of the policy?'
      ],
      modelAnswers: [
        'Fuel duty is levied on producers — it raises their cost of supplying petrol at every quantity. This shifts the supply curve left. The demand curve does not shift because consumers\' underlying willingness to pay for petrol is unchanged; only the supply-side costs have risen.',
        'With PED ≈ −0.15, consumers are highly unresponsive to price changes. They have few short-run substitutes and cannot easily reduce petrol use. This gives them little bargaining power — producers can pass almost all of the tax on as a higher price. The more inelastic the demand, the greater the share of the tax borne by consumers.',
        'A PED of −0.15 means a 10% price rise causes only a 1.5% fall in quantity demanded. The quantity response is tiny relative to the price increase, so emissions barely fall. The tax is effective at raising revenue but largely ineffective as an environmental policy in the short run — the externality remains largely uncorrected.'
      ],
      vocab: ['PED', 'price elasticity', 'tax incidence', 'inelastic', 'elastic', 'consumer burden', 'revenue', 'substitutes', 'long run', 'short run']
    }
  ]
};
