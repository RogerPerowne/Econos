/* ============================================================
   ECONOS – Link It · Predict the Outcome station data
   Demand: income changes and cross-price effects on demand
   ============================================================ */

window.ECONOS_LINK_PREDICT = {
  topic:   'Demand',
  backUrl: TopicLoader.buildUrl('link_chain.html'),
  nextUrl: TopicLoader.buildUrl('link_diagram.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: -1,

  eyebrow:     'Predict the Outcome',
  instruction: 'For each scenario, predict which direction each demand variable will move. Choose ↑ Increase, ↓ Decrease, → No change, or ? Uncertain.',

  scenarios: [
    {
      id: 'dem-recession-normal-inferior',
      icon: '📉',
      title: 'Recession causes household incomes to fall by 8%',
      setup: 'A UK recession reduces average real disposable incomes by 8%. Consider how this affects demand for: foreign holidays (a normal good), own-brand supermarket food (an inferior good), and Starbucks coffee (a luxury good).',
      variables: [
        {
          id: 'holidays',
          label: 'Demand for foreign holidays (normal good)',
          correct: 'decrease',
          reason: 'Foreign holidays are a normal good – demand rises with income and falls when income falls. An 8% income fall will reduce demand for holidays. The demand curve shifts left. The exact fall depends on the income elasticity of demand (YED); for a luxury like holidays, YED > 1, so demand falls more than proportionately.'
        },
        {
          id: 'ownbrand',
          label: 'Demand for own-brand supermarket food (inferior good)',
          correct: 'increase',
          reason: 'Inferior goods are goods where demand rises as income falls and falls as income rises. When consumers feel poorer, they switch from branded to own-brand food. YED < 0 for inferior goods – the demand curve shifts right as income falls.'
        },
        {
          id: 'starbucks',
          label: 'Demand for Starbucks coffee (luxury good)',
          correct: 'decrease',
          reason: 'Starbucks is a luxury (YED > 1). As incomes fall, consumers cut discretionary spending first. Demand for premium coffee shops falls more than proportionately relative to income – consumers switch to cheaper coffee or home brewing. The demand curve shifts left significantly.'
        },
        {
          id: 'price_level',
          label: 'Price of foreign holidays (ceteris paribus)',
          correct: 'decrease',
          reason: 'With demand shifting left (fewer buyers) and supply initially unchanged, there is a surplus of holiday packages at the original price. Airlines and tour operators cut prices to clear excess supply. The equilibrium price falls. This is the transmission from the demand shift to the price outcome.'
        }
      ],
      examBridge: '"A recession reduces real incomes, shifting demand curves: normal goods (holidays, Starbucks) shift left; inferior goods (own-brand food) shift right. The magnitude of the shift depends on YED: luxury goods with high positive YED see the largest demand falls. Prices of normal goods fall as the demand curve moves left – a negative income effect for producers."'
    },
    {
      id: 'dem-petrol-ev',
      icon: '🚗',
      title: 'Petrol price doubles following a new carbon tax',
      setup: 'The government introduces a carbon tax that doubles the price of petrol from 150p to 300p per litre. Electric vehicles (EVs) are substitutes for petrol cars; public transport is also a substitute. Assume consumer incomes are unchanged.',
      variables: [
        {
          id: 'petrol_q',
          label: 'Quantity of petrol demanded',
          correct: 'decrease',
          reason: 'The price of petrol has risen (this is a movement along the demand curve – a change in quantity demanded, not a shift). With PED for petrol typically around −0.2 to −0.4, the fall in quantity demanded is modest. A 100% price rise might reduce quantity by 20–40% in the short run.'
        },
        {
          id: 'ev_demand',
          label: 'Demand for electric vehicles (substitutes)',
          correct: 'increase',
          reason: 'EVs are substitutes for petrol cars – when petrol prices rise, the cost of running a petrol car increases, making EVs relatively more attractive. Demand for EVs shifts right (rises). Cross-price elasticity of demand (XED) for EVs with respect to petrol price is positive (they are substitutes).'
        },
        {
          id: 'public_transport',
          label: 'Demand for public transport (substitute)',
          correct: 'increase',
          reason: 'Higher petrol prices make driving more expensive, so some commuters switch to trains, buses, and cycling. Demand for public transport rises – the demand curve shifts right. The size of this shift depends on the availability and quality of public transport, which varies significantly by region.'
        },
        {
          id: 'new_petrol_cars',
          label: 'Demand for new petrol cars',
          correct: 'decrease',
          reason: 'Higher petrol prices raise the ongoing running cost of petrol cars. This reduces the effective value of owning a petrol car – demand for new petrol cars falls (demand curve shifts left) as consumers anticipate higher future fuel costs and switch toward EVs or delay purchases.'
        }
      ],
      examBridge: '"A carbon tax raising petrol prices shifts demand across substitute markets: EV demand rises (positive XED), public transport demand rises. Demand for new petrol cars falls as running costs increase. This is a cascade of demand shifts triggered by a single price change – showing how interconnected markets transmit price shocks."'
    }
  ]
};
