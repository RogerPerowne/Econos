/* ============================================================
   ECONOS – Link It · Calculate It station data
   PES: price elasticity of supply formula and interpretation
   ============================================================ */

window.ECONOS_LINK_CALC = {
  topic:   'Price Elasticity of Supply',
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
  instruction: 'PES measures how responsive quantity supplied is to a price change. Practise the formula – then use your answer to make a policy judgement.',

  questions: [
    {
      id: 'pes-q1',
      title: 'Calculate PES – wheat supply',
      scenario: 'The UK wholesale price of wheat rises from £150 per tonne to £180 per tonne following a poor harvest in major exporting countries. UK farmers respond by increasing output from 14.0 million tonnes to 14.7 million tonnes over the following harvest.',
      question: 'Calculate the PES for UK wheat. Give your answer to 2 decimal places.',
      hint: 'PES = (% change in Qs) ÷ (% change in P)',
      method: [
        { step: '% change in price',              working: '(£180 − £150) ÷ £150 × 100 = +20%' },
        { step: '% change in quantity supplied',  working: '(14.7m − 14.0m) ÷ 14.0m × 100 = +5%' },
        { step: 'PES',                             working: '5 ÷ 20 = 0.25' },
        { step: 'Interpret',                       working: 'PES = 0.25 < 1 → price inelastic supply. A 20% price rise generates only a 5% increase in supply – farmers cannot rapidly expand production due to growing seasons and fixed land.' }
      ],
      inputType: 'number',
      answer: 0.25,
      unit: '(PES value)',
      tolerance: 0.01,
      feedback: {
        correct: 'Correct! PES = 0.25. Wheat supply is price inelastic because of growing seasons (it takes months to increase output), fixed land availability, and the time needed to plant and harvest additional crops. This is typical of primary agricultural commodities.',
        wrong: 'Method: (1) %ΔP = (180−150)/150 × 100 = 20%. (2) %ΔQs = (14.7−14.0)/14.0 × 100 = 5%. (3) PES = 5 ÷ 20 = 0.25. PES is always positive (supply curves slope upward).'
      },
      examTip: 'PES is always positive (price and quantity supplied move in the same direction). PES < 1 = inelastic; PES > 1 = elastic; PES = 1 = unit elastic; PES = 0 = perfectly inelastic; PES = ∞ = perfectly elastic. Agricultural commodities typically have low PES in the short run due to growing seasons.'
    },
    {
      id: 'pes-q2',
      title: 'PES and tax burden – connecting PES to policy',
      scenario: 'Two markets face the same specific tax of £5 per unit. In Market A, PES = 3.0 (elastic supply). In Market B, PES = 0.2 (inelastic supply). Assume demand elasticity is similar in both markets.',
      question: 'In which market do producers bear a <strong>greater proportion</strong> of the tax burden, and why?',
      hint: 'More elastic supply → producers can more easily reduce supply and shift the tax onto consumers.',
      method: [
        { step: 'Market A: Elastic supply (PES = 3.0)', working: 'Producers can quickly adjust output. If the tax raises their costs, they can reduce supply significantly. But to sell at all, they must accept some price reduction → elastic supply means producers bear MORE of the tax burden.' },
        { step: 'Market B: Inelastic supply (PES = 0.2)', working: 'Producers cannot easily reduce output (fixed capacity, growing seasons). They must continue supplying even if price falls. This means they can pass more of the tax on to consumers → inelastic supply means producers bear LESS of the tax.' },
        { step: 'Conclusion', working: 'Producers in Market A (elastic supply) bear a greater share of the tax burden than producers in Market B (inelastic supply).' }
      ],
      inputType: 'mcq',
      options: [
        'Market A (elastic supply, PES = 3.0) – producers bear more because they can quickly reduce output',
        'Market B (inelastic supply, PES = 0.2) – producers bear more because they cannot reduce output',
        'Both markets equally – PES does not affect tax incidence',
        'Market A (elastic supply, PES = 3.0) – producers bear more because consumers have no substitutes'
      ],
      answer: 'Market A (elastic supply, PES = 3.0) – producers bear more because they can quickly reduce output',
      feedback: {
        correct: 'Correct! With elastic supply (PES = 3.0), producers can rapidly reduce output if the post-tax net price falls below their costs. This willingness to exit the market forces them to absorb more of the tax to stay competitive. Inelastic suppliers (Market B) have no choice but to keep supplying, so they can pass more of the tax burden to consumers.',
        wrong: 'Elastic supply means producers are willing to reduce output significantly if the price they receive falls. This makes them more sensitive to the tax and forces them to absorb more of it. Inelastic suppliers (PES = 0.2) cannot easily reduce output, so they accept the lower net price – meaning they can pass more of the tax onto consumers who have fewer choices.'
      },
      examTip: 'Tax incidence depends on BOTH demand elasticity AND supply elasticity. More elastic supply → more of the tax falls on producers. More elastic demand → more of the tax falls on producers (consumers can switch). Perfectly inelastic supply → 100% of tax falls on producers. This is a Level 4 analysis point in longer mark questions.'
    }
  ]
};
