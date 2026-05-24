/* ============================================================
   ECONOS — Link It · Predict the Outcome station data
   Market Equilibrium: demand/supply shocks and policy interventions
   ============================================================ */

window.ECONOS_LINK_PREDICT = {
  topic:   'Market Equilibrium',
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
  instruction: 'For each scenario, predict which direction each market variable will move. Choose ↑ Increase, ↓ Decrease, → No change, or ? Uncertain.',

  scenarios: [
    {
      id: 'eq-drought-wheat',
      icon: '🌾',
      title: 'Drought hits the UK wheat harvest',
      setup: 'A severe summer drought reduces UK wheat output by 30%. Wheat is used to produce bread, pasta, and breakfast cereals. Simultaneously, consumer incomes remain unchanged.',
      variables: [
        {
          id: 'supply',
          label: 'Supply of wheat',
          correct: 'decrease',
          reason: 'The drought is a negative supply shock — it directly reduces the quantity of wheat that farmers can bring to market at any given price. The supply curve shifts left.'
        },
        {
          id: 'price',
          label: 'Equilibrium price of wheat',
          correct: 'increase',
          reason: 'With supply shifting left and demand unchanged, there is a shortage at the old price. The price rises until quantity demanded falls and quantity supplied rises to a new equilibrium. P* increases.'
        },
        {
          id: 'quantity',
          label: 'Equilibrium quantity of wheat traded',
          correct: 'decrease',
          reason: 'The new equilibrium is at a lower quantity: supply shifted left, and the higher price causes buyers to demand less. Q* falls — less wheat is traded despite the higher price.'
        },
        {
          id: 'bread_price',
          label: 'Price of bread (derived demand)',
          correct: 'increase',
          reason: 'Wheat is a key input for bread. Higher wheat prices raise production costs for bakers, shifting the supply of bread left — leading to a higher equilibrium price for bread. The shock transmits through derived demand.'
        }
      ],
      examBridge: '"A drought shifts the wheat supply curve left, creating a shortage at the original price. The price rises to P₂ where Qd = Qs once again. The new equilibrium has higher P* and lower Q*. Derived demand means this shock transmits to bread and pasta markets — all goods using wheat as an input see costs rise and prices increase."'
    },
    {
      id: 'eq-minimum-wage',
      icon: '💷',
      title: 'Government raises the minimum wage',
      setup: 'The government increases the National Living Wage from £10.42 to £12.00 per hour in all sectors. The minimum wage now exceeds the existing market equilibrium wage in low-skill labour markets.',
      variables: [
        {
          id: 'wage_floor',
          label: 'Wage received by minimum-wage workers',
          correct: 'increase',
          reason: 'The minimum wage is a binding price floor set above the equilibrium wage. Workers who retain employment receive the higher wage of £12.00, up from the market wage of approximately £10.42. Wages rise by definition for those employed.'
        },
        {
          id: 'labour_demanded',
          label: 'Quantity of labour demanded by firms',
          correct: 'decrease',
          reason: 'The higher wage raises firms\' labour costs. As labour becomes more expensive, firms substitute toward capital (automation) or produce less. Quantity of labour demanded falls along the demand curve — this is the standard labour demand response to a price floor above equilibrium.'
        },
        {
          id: 'labour_supplied',
          label: 'Quantity of labour supplied by workers',
          correct: 'increase',
          reason: 'The higher wage makes work more attractive — more workers are willing to supply their labour at £12.00 than were willing at the lower market wage. Quantity supplied rises along the supply curve.'
        },
        {
          id: 'unemployment',
          label: 'Unemployment in low-skill markets',
          correct: 'increase',
          reason: 'A binding minimum wage creates a surplus of labour: Qs > Qd at the floor wage. The gap between quantity supplied and quantity demanded is structural (demand-deficient) unemployment. Note this is contested — some economists argue monopsony power in labour markets means a minimum wage can raise employment. In competitive models, unemployment rises.'
        }
      ],
      examBridge: '"A binding minimum wage set above the competitive equilibrium creates a labour surplus (Qs > Qd). Workers who retain jobs gain from the higher wage; those who lose employment face a welfare loss. Net effect on total employment income depends on whether the wage rise for those employed outweighs the job losses."'
    }
  ]
};
