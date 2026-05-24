/* ============================================================
   ECONOS — Link It · Chain station data
   Supply: build the cost shock → supply shift → new equilibrium chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Supply',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_diagram.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'predict', label: 'Predict outcome',    href: TopicLoader.buildUrl('link_predict.html') },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'supply-cost-shock',
      scenario: {
        icon:  '🏭',
        label: 'Scenario',
        text:  'UK energy-intensive manufacturing, 2021–22. Natural gas wholesale prices rise 400%; energy costs represent 20–40% of total production costs in steel, ceramics and food processing.'
      },
      anchor: 'Gas +400%; energy is 20–40% of costs in steel, ceramics, food processing.',
      tiles: [
        {
          id:   'step-shift',
          icon: '⚡',
          text: 'Higher energy MC → supply shifts left (S₁ → S₂)',
          pos:  0
        },
        {
          id:   'step-excess',
          icon: '📊',
          text: 'At P₁, Q_s < Q_d → excess demand → upward pressure on prices',
          pos:  1
        },
        {
          id:   'step-eq',
          icon: '📉',
          text: 'New equilibrium: higher P₂, lower Q₂ → output contracts, some firms suspend',
          pos:  2
        },
        {
          id:   'dist-1',
          icon: '🏛️',
          text: 'Government increases corporation tax, reducing investment incentives',
          pos:  null
        },
        {
          id:   'dist-2',
          icon: '🛒',
          text: 'Demand for manufactured goods falls as disposable income is squeezed',
          pos:  null
        },
        {
          id:   'dist-3',
          icon: '💻',
          text: 'New technology reduces unit labour costs in the sector',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Energy is a key input into steel, ceramics and food processing — accounting for 20–40% of total costs. A 400% rise in gas prices raises the marginal cost of production at every level of output. This means firms can profitably supply less at every price than before — the supply curve shifts left from S₁ to S₂. This is a non-price determinant of supply (input costs), so it shifts the whole curve, not just a movement along it.'
        },
        {
          pos:  1,
          text: 'At the original market price P₁, the leftward supply shift means that quantity supplied by manufacturers now falls short of what buyers demand. This excess demand (shortage) gives sellers the ability to raise prices — buyers are competing for a reduced quantity of steel, ceramics and food products. Upward price pressure develops as the market seeks a new clearing price.'
        },
        {
          pos:  2,
          text: 'Price rises from P₁ to P₂ as the energy cost shock passes partly through to output prices. At the same time, output falls from Q₁ to Q₂ as firms reduce production or suspend some capacity (as British Steel did with its Scunthorpe furnace). The new equilibrium E₂ reflects both a higher price and lower quantity — cost-push inflation emerges and industrial output contracts.'
        }
      ],
      examBridge: '"Surging energy input costs shifted the supply curve for energy-intensive manufactured goods to the left from S₁ to S₂. At the original market price, excess demand emerged as output contracted. The new equilibrium E₂ settled at a higher price P₂ and lower quantity Q₂ — with consumers bearing part of the cost increase and firms absorbing the rest in squeezed margins."',

      prompts: [
        'Why does the supply curve shift left when energy prices rise?',
        'What happens at the original price after the supply curve shifts?',
        'What is the new equilibrium and what does it imply for the market?'
      ],
      modelAnswers: [
        'Energy is a key production input — rising energy costs raise marginal private cost at every output level. Firms can now supply less at every price than before, so the entire supply curve shifts left from S₁ to S₂. This is a non-price supply shifter (input costs), not a movement along the supply curve.',
        'At the original price P₁, quantity supplied is now lower than quantity demanded — excess demand (a shortage) emerges. Sellers can raise prices without losing all buyers, so upward price pressure develops as the market attempts to reach a new equilibrium.',
        'The new equilibrium E₂ is at a higher price P₂ and lower output Q₂. Consumers pay more and receive less output — cost-push inflation. Firms with the highest energy intensity or least pricing power are squeezed most severely; some (like British Steel) temporarily suspend production rather than absorbing full losses.'
      ],
      vocab: ['supply curve', 'shift in supply', 'input costs', 'marginal cost', 'excess demand', 'equilibrium price', 'cost-push inflation', 'producer surplus', 'incidence']
    }
  ]
};
