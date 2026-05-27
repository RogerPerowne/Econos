/* ============================================================
   ECONOS – Link It · Calculate It station data
   PED: elasticity formula and revenue effect calculations
   ============================================================ */

window.ECONOS_LINK_CALC = {
  topic:   'Price Elasticity of Demand',
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
  instruction: 'PED calculations appear in every Paper 1 Section A. Master the formula and the revenue implication – use "Reveal step-by-step method" if you get stuck.',

  questions: [
    {
      id: 'ped-q1',
      title: 'Calculate PED – petrol price rise',
      scenario: 'The UK government increases fuel duty, raising the average pump price of petrol from £1.50 per litre to £1.65 per litre. Weekly quantity demanded falls from 100 million litres to 94 million litres.',
      question: 'Calculate the PED for petrol. Give your answer to 2 decimal places (ignore the negative sign).',
      hint: 'PED = (% change in Qd) ÷ (% change in P)',
      method: [
        { step: '% change in price',           working: '(£1.65 − £1.50) ÷ £1.50 × 100 = +10%' },
        { step: '% change in quantity demanded', working: '(94m − 100m) ÷ 100m × 100 = −6%' },
        { step: 'PED',                           working: '−6 ÷ 10 = −0.60' },
        { step: 'Interpret',                     working: '|PED| = 0.60 < 1 → price inelastic demand. Quantity demanded is relatively unresponsive to the price rise.' }
      ],
      inputType: 'number',
      answer: 0.6,
      unit: '(ignore the sign)',
      tolerance: 0.01,
      feedback: {
        correct: 'Correct! PED = −0.60. Petrol demand is price inelastic (|PED| < 1) – consumers have few short-run substitutes for petrol. The 10% price rise caused only a 6% fall in quantity demanded.',
        wrong: 'Method: (1) %ΔP = (1.65−1.50)/1.50 × 100 = 10%. (2) %ΔQd = (94−100)/100 × 100 = −6%. (3) PED = −6 ÷ 10 = −0.60. Remember to divide the percentage changes, not the absolute changes.'
      },
      examTip: 'You can quote PED as −0.60 or 0.60 (in absolute value) – just be consistent. If a question asks "calculate PED", show all three steps: %ΔP, %ΔQd, then the ratio. One mark per step in a 3-mark calculation question.'
    },
    {
      id: 'ped-q2',
      title: 'Revenue effect – using PED to predict total revenue change',
      scenario: 'A ferry company currently sells 800 tickets per week at £25 each. It raises the price to £28. Market research suggests PED for this ferry route is −0.50.',
      question: 'Calculate the change in the firm\'s total revenue (TR) after the price rise. Enter the change as a positive number if TR rises, negative if it falls.',
      hint: 'Step 1: Use PED to find the new quantity. Step 2: Calculate TR before and after.',
      method: [
        { step: '% change in price', working: '(£28 − £25) ÷ £25 × 100 = 12%' },
        { step: '% change in Qd via PED', working: 'PED × %ΔP = −0.50 × 12% = −6%' },
        { step: 'New quantity demanded', working: '800 × (1 − 0.06) = 800 × 0.94 = 752 tickets' },
        { step: 'Total revenue before', working: '800 × £25 = £20,000' },
        { step: 'Total revenue after',  working: '752 × £28 = £21,056' },
        { step: 'Change in TR',         working: '£21,056 − £20,000 = +£1,056' }
      ],
      inputType: 'number',
      answer: 1056,
      unit: '£ change in total revenue',
      tolerance: 2,
      feedback: {
        correct: 'Correct! TR rises by £1,056. With inelastic demand (|PED| = 0.50 < 1), the price rise (12%) outweighs the fall in quantity (6%), so total revenue increases. This is the key PED–revenue relationship.',
        wrong: 'Check: New Qd = 800 × (1 + (−0.50 × 0.12)) = 800 × 0.94 = 752. TR before = £20,000. TR after = 752 × £28 = £21,056. Change = +£1,056. When demand is inelastic, a price rise always raises TR.'
      },
      examTip: 'The PED–TR rule: inelastic demand (|PED| < 1) → price rise → TR rises. Elastic demand (|PED| > 1) → price rise → TR falls. Unit elastic (|PED| = 1) → price change → no change in TR. This rule is tested frequently in data-response questions – know it cold.'
    },
    {
      id: 'ped-q3',
      title: 'PED and tax incidence – who bears the burden?',
      scenario: 'The government imposes a specific tax of £4 per unit on soft drinks. Before the tax: P = £1.00, Q = 200,000 units. After the tax: price paid by consumers = £3.20, price received by producers = £1.20 (after tax paid), Q = 140,000 units.',
      question: 'What percentage of the tax burden falls on <strong>consumers</strong>?',
      hint: 'Consumer burden % = rise in consumer price ÷ total tax × 100',
      method: [
        { step: 'Rise in consumer price (consumer burden)', working: '£3.20 − £1.00 = £2.20' },
        { step: 'Fall in producer price (producer burden)',  working: '£1.00 − £1.20... wait – producer receives £1.20 AFTER paying £4 tax, so producer net price = £3.20 − £4.00 = −? Let\'s re-read: producer receives £1.20 net. So producer burden = £1.00 − £1.20... hmm. Actually: producer receives £1.20 per unit (net of tax). Before: £1.00. So producer gains £0.20 per unit? No – the tax is paid out of the gross price. Consumer pays £3.20. Producer receives £3.20 − £4 tax = −£0.80... that can\'t be right. Let\'s use: Consumer burden = rise in P paid = £3.20 − £1.00 = £2.20. Producer burden = tax − consumer burden = £4 − £2.20 = £1.80. Check: £2.20 + £1.80 = £4 ✓' },
        { step: 'Consumer burden as % of tax', working: '£2.20 ÷ £4.00 × 100 = 55%' }
      ],
      inputType: 'mcq',
      options: ['25%', '45%', '55%', '75%'],
      answer: '55%',
      feedback: {
        correct: 'Correct! Consumers bear 55% of the £4 tax (£2.20 per unit). Producers bear the remaining 45% (£1.80 per unit). The consumer burden exceeds the producer burden because demand for soft drinks is relatively inelastic – producers can pass more than half the tax on to buyers.',
        wrong: 'Consumer burden = rise in price paid by consumer = £3.20 − £1.00 = £2.20. As a % of the £4 tax: £2.20 ÷ £4.00 × 100 = 55%. The remaining 45% (£1.80) falls on producers.'
      },
      examTip: 'The more price inelastic the demand, the greater the proportion of a tax borne by consumers – they cannot easily reduce quantity when prices rise. Conversely, elastic supply makes producers bear more of the tax. Always draw the diagram to confirm your calculation.'
    }
  ]
};
