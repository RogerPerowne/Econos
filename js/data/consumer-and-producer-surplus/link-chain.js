/* ============================================================
   ECONOS – Link It · Chain station data
   Consumer & Producer Surplus: supply shift → CS gain → welfare assessment
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Consumer & Producer Surplus',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('diagram'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'bus-subsidy-chain',
      scenario: {
        icon:  '🚌',
        label: 'Scenario',
        text:  'The UK government introduces a per-unit operating subsidy to bus operators. Bus operators receive a fixed payment for each journey provided, reducing their effective marginal cost.'
      },
      anchor: 'Per-unit subsidy to operators cuts MC → more journeys at lower fares.',
      tiles: [
        {
          id:  'step-supply',
          icon: '📊',
          text: 'Subsidy cuts MC → supply shifts right (S₁ → S₂)',
          pos:  0
        },
        {
          id:  'step-eq',
          icon: '📉',
          text: 'New equilibrium: fare P₁ → P₂, quantity Q₁ → Q₂ → CS expands',
          pos:  1
        },
        {
          id:  'step-welfare',
          icon: '⚖️',
          text: 'CS rises; cost = subsidy × Q₂; net gain hinges on externality value',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🚗',
          text: 'Demand for bus travel shifts right as petrol prices rise',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '🏛️',
          text: 'The government imposes a maximum fare (price ceiling) on bus operators',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '⚡',
          text: 'New electric buses reduce production costs without any subsidy',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'The per-unit subsidy is a payment to operators for each bus journey provided. This reduces their effective marginal cost – the amount they need to receive from fares to cover costs falls by the subsidy amount. At every fare level they can profitably run more services, so the supply curve shifts right from S₁ to S₂.'
        },
        {
          pos:  1,
          text: 'With supply shifted right, the new market equilibrium is at a lower fare P₂ and higher quantity Q₂. Consumers who were previously priced out of bus travel can now afford to travel – consumer surplus expands by the area between P₁ and P₂ up to the demand curve (a rectangle plus a new triangle).'
        },
        {
          pos:  2,
          text: 'The subsidy cost to government is (P₁ − P₂) × Q₂ – the subsidy per unit multiplied by all journeys. This exceeds the private CS gain alone. However, if bus travel generates positive externalities (congestion relief, carbon reduction), the social benefit exceeds the private CS gain. The DfT\'s £2.40/£1 return estimate implies net welfare is positive when externalities are included.'
        }
      ],
      examBridge: '"A per-unit bus subsidy shifts supply right from S₁ to S₂, lowering fares from P₁ to P₂ and increasing quantity from Q₁ to Q₂. Consumer surplus rises by the area between P₁ and P₂ up to the demand curve – more passengers travel at a lower fare. The subsidy cost is (P₁ − P₂) × Q₂ (subsidy rectangle). Net welfare gain materialises when the CS increase plus the positive externality benefits exceeds the taxpayer cost."',

      prompts: [
        'Why does the per-unit subsidy shift supply right rather than demand right?',
        'How does consumer surplus change when fares fall from P₁ to P₂?',
        'How do positive externalities affect the welfare case for the subsidy?'
      ],
      modelAnswers: [
        'The subsidy is paid to bus operators, not consumers – it reduces the operators\' effective marginal cost. Each operator can now profitably supply more journeys at any given fare, so the supply curve shifts right. Consumer demand (willingness to pay) is unchanged.',
        'When fares fall from P₁ to P₂, existing passengers gain surplus equal to (P₁ − P₂) × Q₁ – the fare reduction on their existing journeys. New passengers who board at P₂ but not P₁ add a further triangle of CS. Total CS rises by the area between P₁ and P₂ below the demand curve up to Q₂.',
        'If bus travel creates positive externalities (fewer car journeys → congestion relief, lower carbon), MSB > MPB. The market under-provides bus travel even without the subsidy. The subsidy corrects this: moving output toward Q* (where MSB = MSC) improves allocative efficiency and the total welfare gain exceeds the private CS calculation alone.'
      ],
      vocab: ['consumer surplus', 'producer surplus', 'per-unit subsidy', 'supply shift', 'welfare triangle', 'deadweight welfare loss', 'allocative efficiency', 'positive externality', 'marginal social benefit']
    }
  ]
};
