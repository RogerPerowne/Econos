/* ============================================================
   ECONOS — Link It · Predict the Outcome station data
   Supply: cost shocks and technology on market supply
   ============================================================ */

window.ECONOS_LINK_PREDICT = {
  topic:   'Supply',
  backUrl: TopicLoader.buildUrl('link_chain.html'),
  nextUrl: TopicLoader.buildUrl('link_diagram.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'predict', label: 'Predict the Outcome', href: TopicLoader.buildUrl('link_predict.html') },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 2,

  eyebrow:     'Predict the Outcome',
  instruction: 'For each scenario, predict which direction each market variable will move. Choose ↑ Increase, ↓ Decrease, → No change, or ? Uncertain.',

  scenarios: [
    {
      id: 'sup-energy-cost-shock',
      icon: '⚡',
      title: 'Energy costs surge 40% for UK manufacturers',
      setup: 'Global gas prices spike, raising energy costs for UK manufacturers by an average of 40%. Energy is a significant input cost for steel, cement, glass and food processing. Assume demand for manufactured goods is unchanged in the short run.',
      variables: [
        {
          id: 'supply_steel',
          label: 'Supply of steel (energy-intensive industry)',
          correct: 'decrease',
          reason: 'Energy is a major production cost for steel — blast furnaces require enormous electricity. A 40% rise in energy costs shifts the supply curve for steel left: firms are only willing to supply the same quantity at a higher price (or less at the same price). The supply curve shifts left.'
        },
        {
          id: 'price_steel',
          label: 'Equilibrium price of steel',
          correct: 'increase',
          reason: 'With supply shifting left and demand unchanged, there is a shortage at the original price. The price of steel rises until the market clears. The magnitude of the price rise depends on the PES and PED for steel — inelastic supply and demand amplify the price increase.'
        },
        {
          id: 'quantity_steel',
          label: 'Equilibrium quantity of steel',
          correct: 'decrease',
          reason: 'At the new higher equilibrium price, the quantity demanded is lower (movement along demand curve). The new Q* is less than the original equilibrium quantity. Less steel is traded despite higher prices.'
        },
        {
          id: 'profit_margins',
          label: 'Profit margins of steel producers',
          correct: 'ambiguous',
          reason: 'This is genuinely uncertain: profit margins depend on how much of the cost rise producers can pass on to buyers. If PED for steel is inelastic, producers can pass most of the cost rise through higher prices — margins may be partially protected. If steel buyers can switch to imports or alternative materials, producers cannot pass costs on fully — margins fall. The outcome is ambiguous and depends on market structure and substitutability.'
        }
      ],
      examBridge: '"An energy cost surge shifts supply curves left for energy-intensive industries — steel, cement, glass. Equilibrium prices rise and quantities fall. The degree of price pass-through depends on PED: more inelastic demand allows producers to maintain margins; more elastic demand means cost rises squeeze profits rather than consumer prices."'
    },
    {
      id: 'sup-automation-technology',
      icon: '🤖',
      title: 'New automation technology halves assembly-line labour costs',
      setup: 'A major technological breakthrough halves the cost of robotic assembly across UK car manufacturing. The technology is rapidly adopted by all UK manufacturers. Assume consumer demand for cars is unchanged initially.',
      variables: [
        {
          id: 'supply_cars',
          label: 'Supply of UK-manufactured cars',
          correct: 'increase',
          reason: 'Lower production costs from automation shift the supply curve right: firms can profitably supply more cars at every price. This is a classic positive supply-side shock — the same output can now be produced at lower cost, or more output at the same cost. Supply increases.'
        },
        {
          id: 'price_cars',
          label: 'Equilibrium price of cars',
          correct: 'decrease',
          reason: 'With supply shifting right and demand unchanged, there is a surplus at the original price. Competition among producers drives prices down to a new lower equilibrium. Consumers benefit from the productivity gain.'
        },
        {
          id: 'quantity_cars',
          label: 'Equilibrium quantity of cars sold',
          correct: 'increase',
          reason: 'The lower equilibrium price stimulates demand — consumers move down their demand curve and buy more cars. Q* rises. The supply shift → price fall → demand response creates the new higher equilibrium quantity.'
        },
        {
          id: 'employment_assembly',
          label: 'Employment of assembly-line workers',
          correct: 'decrease',
          reason: 'Automation substitutes capital for labour — robots replace assembly-line workers. Even though output rises, fewer workers are needed per unit of output. Assembly-line employment falls as firms substitute toward the now-cheaper robotic technology. This is the standard displacement effect of labour-saving technology.'
        }
      ],
      examBridge: '"Automation shifts the supply curve right: lower costs → lower prices → higher Q*. Consumers gain from lower prices. But the technology substitutes capital for labour — assembly-line employment falls even as output rises. This is the central tension of productivity-enhancing automation: aggregate efficiency gains coexist with specific labour market disruption."'
    }
  ]
};
