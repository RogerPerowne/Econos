/* ============================================================
   ECONOS — Link It · Chain station data
   Demand: build the income/confidence → demand shift → new equilibrium chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Demand',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_diagram.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'demand-income-confidence',
      scenario: {
        icon:  '🍽️',
        label: 'Scenario',
        text:  'UK leisure sector, summer 2021. Restaurants and hospitality venues reopen after COVID restrictions lift.'
      },
      anchor: 'Accumulated savings (£190bn) and rising consumer confidence release pent-up demand for leisure.',
      tiles: [
        {
          id:   'step-shift',
          icon: '💰',
          text: 'Consumer income and confidence rise → willingness and ability to pay for leisure increases → demand curve shifts right',
          pos:  0
        },
        {
          id:   'step-excess',
          icon: '📊',
          text: 'At the existing market price, quantity demanded now exceeds quantity supplied → excess demand creates upward pressure on prices',
          pos:  1
        },
        {
          id:   'step-eq',
          icon: '📈',
          text: 'Price rises to a new equilibrium P₂ > P₁, and quantity rises to Q₂ > Q₁ — restaurants, hotels, and event venues expand output',
          pos:  2
        },
        {
          id:   'dist-1',
          icon: '🏗️',
          text: 'Supply of leisure venues increases as new entrants open',
          pos:  null
        },
        {
          id:   'dist-2',
          icon: '🏛️',
          text: 'Government imposes a price ceiling to protect consumers',
          pos:  null
        },
        {
          id:   'dist-3',
          icon: '🔄',
          text: 'Consumers substitute towards cheaper goods as prices rise',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Income and savings release increase consumers\' willingness and ability to pay for leisure at every price level. Consumer confidence further amplifies this — households expect to maintain or grow their spending power and so commit to leisure purchases. These are non-price determinants of demand, so they shift the entire demand curve to the right from D₁ to D₂.'
        },
        {
          pos:  1,
          text: 'At the original market price P₁, the rightward demand shift means that the quantity consumers want to buy (Q demanded) now exceeds the quantity restaurants, hotels and venues can supply (Q supplied). This excess demand creates a queue or shortage — sellers realise they can raise prices and still find buyers, so upward price pressure develops.'
        },
        {
          pos:  2,
          text: 'Price rises from P₁ to P₂ as sellers exploit excess demand. The higher price signals profitability to the leisure sector: existing venues expand capacity and new restaurants and event spaces enter the market, raising quantity supplied. The market reaches a new equilibrium E₂ at P₂ and Q₂ — both price and quantity are higher than before.'
        }
      ],
      examBridge: '"The surge in consumer confidence and accumulated savings in summer 2021 shifted the demand curve for UK leisure services to the right. At the original price, quantity demanded exceeded quantity supplied, creating upward price pressure. The market reached a new equilibrium at a higher price P₂ and higher quantity Q₂, signalling the leisure sector to expand capacity and attract new entrants."',

      prompts: [
        'What causes the demand curve to shift right in this scenario?',
        'What does excess demand at the old price lead to?',
        'What is the new equilibrium and what does it imply for the market?'
      ],
      modelAnswers: [
        'Income and savings release increase consumers\' willingness and ability to pay at every price level — a non-price determinant change. Consumer confidence amplifies this because households expect to sustain their spending power. Together these shift the entire demand curve to the right from D₁ to D₂.',
        'At the original price P₁, quantity demanded now exceeds quantity supplied — a shortage or excess demand. Sellers can charge higher prices without losing all buyers, so price begins to rise. This continues until the market reaches a new equilibrium where the higher price clears the market.',
        'Higher price P₂ and higher quantity Q₂ — the leisure sector responds to the profit signal by expanding output. Existing venues extend capacity and new entrants (restaurants, event spaces, hotels) are attracted by the higher prices and profits. The new equilibrium reflects both higher consumer spending and a larger leisure sector.'
      ],
      vocab: ['demand curve', 'shift in demand', 'consumer confidence', 'income effect', 'excess demand', 'equilibrium price', 'equilibrium quantity', 'non-price determinants']
    }
  ]
};
