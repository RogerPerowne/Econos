/* ============================================================
   ECONOS — Link It · Calculate It station data
   Indirect taxes & subsidies: incidence and welfare calculations
   ============================================================ */

window.ECONOS_LINK_CALC = {
  topic:   'Indirect Taxes & Subsidies',
  backUrl: TopicLoader.buildUrl('link_chain.html'),
  nextUrl: TopicLoader.buildUrl('link_diagram.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.buildUrl('link_calc.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 2,

  eyebrow:     'Calculate It',
  instruction: 'Tax incidence questions test whether you can calculate how a tax is split between buyers and sellers. Use the method to work through each scenario.',

  questions: [
    {
      id: 'tax-q1',
      title: 'Tax incidence — who bears the burden?',
      scenario: 'The government imposes a specific (per-unit) tax of £6 on each bottle of wine. Before the tax: equilibrium price = £8.00 per bottle. After the tax: price paid by consumers rises to £12.50 per bottle; price received by producers falls to £6.50 per bottle.',
      question: 'What proportion of the £6 tax burden falls on <strong>consumers</strong>?',
      hint: 'Consumer burden = rise in consumer price ÷ total tax × 100. Check: consumer burden + producer burden = total tax.',
      method: [
        { step: 'Rise in consumer price (consumer burden)', working: '£12.50 − £8.00 = £4.50' },
        { step: 'Fall in producer price (producer burden)',  working: '£8.00 − £6.50 = £1.50' },
        { step: 'Check totals',                              working: '£4.50 + £1.50 = £6.00 ✓ (equals the tax)' },
        { step: 'Consumer burden as % of tax',              working: '£4.50 ÷ £6.00 × 100 = 75%' }
      ],
      inputType: 'mcq',
      options: ['25%', '50%', '75%', '100%'],
      answer: '75%',
      feedback: {
        correct: 'Correct! Consumers bear 75% (£4.50) of the £6 tax. Producers bear only 25% (£1.50). This high consumer burden reflects price inelastic demand for wine — consumers have limited ability to reduce consumption when prices rise, so producers can pass most of the tax on.',
        wrong: 'Consumer burden = rise in price PAID by consumers = £12.50 − £8.00 = £4.50. As a % of the £6 tax: £4.50 ÷ £6.00 × 100 = 75%. Producer burden = £8.00 − £6.50 = £1.50 (25%). The two must sum to 100%.'
      },
      examTip: 'Two rules to memorise: (1) The more inelastic the demand, the greater the consumer burden. (2) The more inelastic the supply, the greater the producer burden. On a diagram: the consumer burden = the vertical distance from old P to new consumer P; the producer burden = the vertical distance from old P to new producer P.'
    },
    {
      id: 'tax-q2',
      title: 'Tax revenue and deadweight loss',
      scenario: 'Market data before and after a £4 specific tax on cigarettes: Before tax: P = £5.00, Q = 10 million packs/week. After tax: P (consumer) = £8.20, P (producer) = £4.20, Q = 8 million packs/week.',
      question: 'Calculate the government\'s total weekly tax revenue (£ millions).',
      hint: 'Tax revenue = tax per unit × quantity traded after tax.',
      method: [
        { step: 'Tax per unit',         working: '£4 per pack (given)' },
        { step: 'Quantity after tax',   working: '8 million packs per week (given)' },
        { step: 'Tax revenue',          working: '£4 × 8 million = £32 million per week' },
        { step: 'Note on deadweight loss', working: 'The 2 million packs no longer traded represent a deadweight welfare loss — mutually beneficial transactions that no longer occur because the tax has raised the consumer price above the marginal benefit for some buyers.' }
      ],
      inputType: 'number',
      answer: 32,
      unit: '£ million per week',
      tolerance: 0,
      feedback: {
        correct: 'Correct! Tax revenue = £4 × 8m = £32 million per week. On the supply and demand diagram, this is the rectangle between the consumer price (£8.20) and producer price (£4.20), over the new equilibrium quantity (8m packs). Note: this is less than the maximum possible revenue (£4 × 10m = £40m) because the tax has reduced the quantity traded.',
        wrong: 'Tax revenue = tax per unit × new quantity traded = £4 × 8,000,000 = £32,000,000. Don\'t use the old quantity (10m) — the tax reduces the quantity traded to 8m. Always use the after-tax equilibrium quantity.'
      },
      examTip: 'Tax revenue on a diagram = the rectangle bounded by: consumer price (top), producer price (bottom), 0 (left), new quantity (right). Its area = tax per unit × new Qd. The triangles to the left and right of this rectangle (compared to the original equilibrium) represent the deadweight welfare loss — the market transactions that no longer take place due to the tax.'
    },
    {
      id: 'tax-q3',
      title: 'Subsidy — effect on consumer price and producer revenue',
      scenario: 'The government grants a subsidy of £3 per unit to electric vehicle (EV) manufacturers. Before subsidy: equilibrium price = £25,000, Q = 80,000 EVs per year. After subsidy: price paid by consumers = £22,500, price received by producers (including subsidy) = £25,500, Q = 95,000 per year.',
      question: 'What is the total annual cost of the subsidy to the government?',
      hint: 'Total subsidy cost = subsidy per unit × quantity after subsidy.',
      method: [
        { step: 'Subsidy per unit',          working: '£3,000 per EV (the difference: £25,500 received by producers − £22,500 paid by consumers = £3,000 ✓)' },
        { step: 'Quantity after subsidy',    working: '95,000 EVs (given)' },
        { step: 'Total government cost',     working: '£3,000 × 95,000 = £285,000,000 = £285 million' },
        { step: 'Note: benefit split',       working: 'Consumer benefit = £2,500 per unit (price falls from £25,000 to £22,500). Producer benefit = £500 per unit (price received rises from £25,000 to £25,500). Total = £3,000 per unit ✓' }
      ],
      inputType: 'number',
      answer: 285,
      unit: '£ million per year',
      tolerance: 1,
      feedback: {
        correct: 'Correct! Total subsidy cost = £3,000 × 95,000 = £285 million per year. Consumers receive most of the benefit (£2,500 of the £3,000 per unit) because demand is more elastic than supply for EVs — consumers shop around between EV and petrol alternatives, forcing producers to compete on price.',
        wrong: 'Total subsidy cost = subsidy per unit × new quantity = £3,000 × 95,000 = £285,000,000 = £285 million. Use the new (post-subsidy) quantity, not the original 80,000. The subsidy is paid on every unit produced, including the newly stimulated output.'
      },
      examTip: 'Subsidy cost on a diagram = the rectangle between producer price (top) and consumer price (bottom), over new quantity. How the benefit is split: more elastic demand → consumers get more. More elastic supply → producers get more. This is the mirror image of the tax incidence rule.'
    }
  ]
};
