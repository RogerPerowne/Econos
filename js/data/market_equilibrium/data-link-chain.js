/* ============================================================
   ECONOS — Link It · Chain station data
   Market Equilibrium: build the demand-shift → new equilibrium chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Market Equilibrium',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_predict.html'),

  stations: [
    { id: 'context', label: 'Use the context',     href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',     href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'predict', label: 'Predict the Outcome', href: TopicLoader.buildUrl('link_predict.html') },
    { id: 'diagram', label: 'Diagram connector',   href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',       href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement',  href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'housing-demand-shift',
      scenario: {
        icon:  '🏠',
        label: 'Scenario',
        text:  'Population grows and real incomes rise in a major UK city. Demand for housing increases while new supply is slow to respond due to planning restrictions.'
      },
      anchor: 'Rising incomes and population growth increase the number of households willing and able to pay for housing at every price',
      tiles: [
        {
          id:  'step-shift',
          icon: '📈',
          text: 'Demand shifts right — at the existing equilibrium rent, there is now a housing shortage',
          pos:  0
        },
        {
          id:  'step-signal',
          icon: '💰',
          text: 'Rents rise, signalling to developers that building is profitable; existing landlords earn higher returns',
          pos:  1
        },
        {
          id:  'step-supply',
          icon: '🏗️',
          text: 'Over time, higher rents attract new supply — but with inelastic supply (PES ≈ 0.4), quantity responds slowly, keeping rents high',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🏛️',
          text: 'The government immediately imposes a rent ceiling, freezing rents at the old level',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '💼',
          text: 'Higher wages allow workers to save more, eliminating the housing problem automatically',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '⚡',
          text: 'Supply shifts right instantly in response to the shortage, restoring the original rent level',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'When incomes rise and population grows, more households can afford to rent and want to rent. At the old equilibrium rent (P₁), quantity demanded now exceeds quantity supplied — a shortage appears. The demand curve has shifted right: at every rent level, more households seek housing than before.'
        },
        {
          pos:  1,
          text: 'The shortage puts upward pressure on rents. As rents rise, the price mechanism sends a signal: developers see rising returns and begin planning new builds; existing landlords earn above-normal returns. This is the price signal at work — higher prices communicate scarcity and attract resources toward housing. Without this signal, there would be no incentive to increase supply.'
        },
        {
          pos:  2,
          text: 'Higher rents do attract some new supply, but the speed of response matters. With PES ≈ 0.4 in London, a 10% rise in rent triggers only a 4% increase in quantity supplied. Planning restrictions, land costs and construction lead times mean the new equilibrium is reached slowly, and at a significantly higher rent than before. Inelastic supply means the price mechanism is weak: rents must rise a lot before quantity supplied increases even a little.'
        }
      ],
      examBridge: '"Rising incomes and population growth shift the demand curve for housing to the right, creating a shortage at the old equilibrium rent and driving rents upward. The price mechanism signals scarcity and attracting new supply — but with price elasticity of supply at only 0.4, quantity responds slowly and the new equilibrium settles at a substantially higher rent with only modestly more housing."',

      prompts: [
        'Why does demand shift right, and what disequilibrium does this create?',
        'How does the price mechanism respond to the housing shortage?',
        'Why does the new equilibrium involve a much higher rent but only a small increase in quantity?'
      ],
      modelAnswers: [
        'Rising incomes increase households\' ability and willingness to pay for housing; population growth increases the number of households seeking accommodation. At the old rent, quantity demanded now exceeds quantity supplied — a shortage — so there is upward pressure on rents.',
        'Rents rise because landlords face excess demand for their properties. Higher rents act as a price signal: they indicate to developers that building new homes is profitable and to existing landlords that they can charge more. This is the price mechanism allocating resources toward a sector where they are needed.',
        'Housing supply is price inelastic (PES ≈ 0.4) because new supply requires planning permission, takes years to build, and depends on expensive land. A large rise in rent causes only a small increase in quantity supplied. The new equilibrium is therefore at a much higher rent (P₂ >> P₁) with only a modest increase in quantity (Q₂ slightly above Q₁).'
      ],
      vocab: ['demand', 'supply', 'equilibrium', 'shortage', 'surplus', 'price mechanism', 'PES', 'PED', 'price signal', 'long run', 'short run']
    }
  ]
};
