/* ============================================================
   ECONOS – Link It · Calculate It station data
   YED & XED: income and cross-price elasticity calculations
   ============================================================ */

window.ECONOS_LINK_CALC = {
  topic:   'Income & Cross-Price Elasticity',
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
  instruction: 'YED and XED calculations test your ability to classify goods and predict demand responses. Work through both formulas and interpret each result.',

  questions: [
    {
      id: 'yed-q1',
      title: 'Calculate YED – classify a good',
      scenario: 'UK average household income rises from £32,000 to £35,200 per year (a rise of 10%). Over the same period: (a) Demand for domestic flights rises from 60m to 67.2m passengers, and (b) Demand for bus journeys falls from 5.2bn to 4.94bn annually.',
      question: 'Calculate YED for <strong>domestic flights</strong>. Is this a normal good, inferior good, or luxury?',
      hint: 'YED = (% change in Qd) ÷ (% change in income). YED > 1 → luxury; 0 < YED < 1 → normal; YED < 0 → inferior.',
      method: [
        { step: '% change in income',   working: '(35,200 − 32,000) ÷ 32,000 × 100 = 10%' },
        { step: '% change in Qd (flights)', working: '(67.2m − 60m) ÷ 60m × 100 = 12%' },
        { step: 'YED for flights',      working: '12 ÷ 10 = +1.20' },
        { step: 'Classify',             working: 'YED = +1.20 > 1 → luxury good (income elastic). Demand rises faster than income – consistent with flights being a discretionary purchase.' }
      ],
      inputType: 'number',
      answer: 1.2,
      unit: '(YED value)',
      tolerance: 0.01,
      feedback: {
        correct: 'Correct! YED = +1.20. Domestic flights are a luxury good (YED > 1) – demand is income elastic. As income rises 10%, demand rises 12%. This makes sense: flights are discretionary and consumers substitute from lower-cost transport as they get richer.',
        wrong: 'Method: %ΔIncome = 10%. %ΔQd(flights) = (67.2−60)/60 × 100 = 12%. YED = 12/10 = 1.20. Remember: YED > 1 = luxury; 0 < YED < 1 = normal; YED < 0 = inferior.'
      },
      examTip: 'The sign of YED is critical: positive means normal good, negative means inferior good. The magnitude tells you how responsive demand is to income. Luxury goods (YED > 1) face more volatile demand over the business cycle – an exam-quality evaluation point.'
    },
    {
      id: 'yed-q2',
      title: 'Calculate YED – inferior good',
      scenario: 'Use the same income data (10% rise). Demand for bus journeys falls from 5.2bn to 4.94bn annually.',
      question: 'Calculate YED for <strong>bus journeys</strong>. Is this a normal good, inferior good, or luxury?',
      hint: 'Same formula – but notice that quantity demanded FALLS when income rises.',
      method: [
        { step: '% change in income',   working: '10% (as before)' },
        { step: '% change in Qd (bus)', working: '(4.94bn − 5.2bn) ÷ 5.2bn × 100 = −5%' },
        { step: 'YED for bus journeys', working: '−5 ÷ 10 = −0.50' },
        { step: 'Classify',             working: 'YED = −0.50 < 0 → inferior good. As income rises, consumers substitute away from buses toward cars or flights.' }
      ],
      inputType: 'number',
      answer: -0.5,
      unit: '(YED value, include sign)',
      tolerance: 0.01,
      feedback: {
        correct: 'Correct! YED = −0.50. Bus journeys are an inferior good – as income rises, consumers substitute toward more expensive transport (cars, trains, flights). The negative sign is essential here: it\'s what classifies the good as inferior.',
        wrong: 'Method: %ΔQd(bus) = (4.94−5.2)/5.2 × 100 = −5%. YED = −5/10 = −0.50. The negative sign matters – it shows the good is inferior. Don\'t ignore the sign when classifying goods.'
      },
      examTip: 'Inferior goods are not bad goods – they\'re goods that consumers buy less of as they get richer, because better alternatives become affordable. Examples: instant noodles, bus travel, own-brand supermarket food. Demand for inferior goods rises in recessions – an evaluation point for macro questions.'
    },
    {
      id: 'xed-q1',
      title: 'Calculate XED – substitutes or complements?',
      scenario: 'The price of butter rises from £1.00 to £1.20 per 250g pack (a 20% rise). Over the same period, demand for margarine increases from 2.0m packs to 2.3m packs per week.',
      question: 'Calculate XED between margarine (Qd) and butter (P). Are they substitutes or complements?',
      hint: 'XED = (% change in Qd of good A) ÷ (% change in price of good B). Positive → substitutes; Negative → complements.',
      method: [
        { step: '% change in price of butter',    working: '(£1.20 − £1.00) ÷ £1.00 × 100 = 20%' },
        { step: '% change in Qd of margarine',    working: '(2.3m − 2.0m) ÷ 2.0m × 100 = 15%' },
        { step: 'XED',                             working: '15 ÷ 20 = +0.75' },
        { step: 'Classify',                        working: 'XED = +0.75 > 0 → substitutes. As butter becomes more expensive, consumers switch to margarine.' }
      ],
      inputType: 'number',
      answer: 0.75,
      unit: '(XED value)',
      tolerance: 0.01,
      feedback: {
        correct: 'Correct! XED = +0.75. Butter and margarine are substitutes – a positive cross-price elasticity confirms this. As butter\'s price rises 20%, demand for margarine rises 15%. The relationship is moderately strong (XED = 0.75).',
        wrong: 'Method: %ΔP(butter) = 20%. %ΔQd(margarine) = (2.3−2.0)/2.0 × 100 = 15%. XED = 15/20 = 0.75. Positive XED → substitutes; negative XED → complements; near zero → unrelated goods.'
      },
      examTip: 'XED has two uses in A-level questions: (1) Classifying goods (substitutes vs complements). (2) Business strategy – a firm with a high positive XED faces intense competitive pressure from the substitute. A firm with a highly negative XED (complements) benefits from price cuts in the complementary good (e.g., cheap printers → more ink sales).'
    }
  ]
};
