/* ============================================================
   ECONOS – Link It · Predict the Outcome station data
   Negative Externalities: policy interventions and market effects
   ============================================================ */

window.ECONOS_LINK_PREDICT = {
  topic:   'Negative Externalities',
  backUrl: TopicLoader.buildUrl('link_depends.html'),
  nextUrl: TopicLoader.buildUrl('link_judge.html'),

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
      id: 'neg-pigouvian-tax',
      icon: '🏭',
      title: 'Government introduces a Pigouvian tax on cement production',
      setup: 'To correct for pollution externalities, the government imposes a tax per tonne of cement equal to the estimated marginal external cost (MEC). The tax is levied on cement producers. Assume cement demand is inelastic in the short run.',
      variables: [
        {
          id: 'mpc_shift',
          label: 'Effective marginal private cost (MPC) for cement producers',
          correct: 'increase',
          reason: 'The per-unit tax is added to each tonne produced. From the firm\'s perspective, the tax becomes a cost just like wages or energy. The effective MPC rises by the amount of the tax – the supply curve shifts left by the amount of the tax.'
        },
        {
          id: 'output',
          label: 'Quantity of cement produced (Q_market)',
          correct: 'decrease',
          reason: 'Higher effective costs push the supply curve left. At the original price, producers supply less. The new equilibrium occurs at Q* (the social optimum) – output falls from Q_market toward Q*. The tax internalises the externality by closing the gap between MPC and MSC.'
        },
        {
          id: 'consumer_price',
          label: 'Price of cement paid by consumers',
          correct: 'increase',
          reason: 'With supply shifting left, the equilibrium price rises. Consumers pay a higher price (the extent of the rise depends on tax incidence – with inelastic demand, consumers bear most of the burden). The consumer price rises by approximately the consumer\'s share of the tax.'
        },
        {
          id: 'dwl',
          label: 'Deadweight welfare loss (DWL) from the externality',
          correct: 'decrease',
          reason: 'Before the tax, output was at Q_market (where MPC = MSB) but the social optimum was Q* (where MSC = MSB). The DWL triangle between Q* and Q_market represented welfare destroyed by overproduction. As the tax moves output toward Q*, the DWL shrinks – in theory, a perfectly calibrated Pigouvian tax eliminates it entirely.'
        },
        {
          id: 'tax_revenue',
          label: 'Government tax revenue from the levy',
          correct: 'increase',
          reason: 'Tax revenue = tax per tonne × quantity produced after the tax. Assuming the tax is positive and cement continues to be produced (demand is inelastic), the government collects meaningful revenue. This can be used to compensate affected third parties or fund environmental remediation.'
        }
      ],
      examBridge: '"A Pigouvian tax equal to MEC shifts the effective supply curve from MPC to MSC, reducing output from Q_market to Q*. Consumer price rises; DWL falls toward zero. Tax revenue = MEC × Q*. The limitation: accurately measuring MEC is technically difficult – if the tax is set too low, overproduction continues; too high, output falls below Q* and efficiency is reduced."'
    }
  ]
};
