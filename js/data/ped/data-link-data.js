/* ============================================================
   ECONOS — Link It · Read the Data station data
   PED: UK fuel prices, traffic volume and revenue implications
   ============================================================ */

window.ECONOS_LINK_DATA = {
  topic:   'Price Elasticity of Demand',
  backUrl: TopicLoader.buildUrl('link_diagram.html'),
  nextUrl: TopicLoader.buildUrl('link_depends.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.buildUrl('link_calc.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: -1,

  eyebrow:     'Read the Data',
  instruction: 'Economists use real data to test theoretical predictions. Read the table carefully, then answer each question — pay attention to anomalies (years where the data behaves unexpectedly).',

  dataset: {
    title: 'UK Average Petrol Pump Price and Road Traffic Volume, 2018–2023',
    source: 'Sources: RAC Foundation; Department for Transport (figures simulated for educational use)',
    notes: 'Petrol price = average UK pump price in pence per litre. Traffic = total vehicle miles (billions). % change = year-on-year.',
    table: {
      headers: ['Year', 'Petrol price (p/litre)', 'Annual change in price (%)', 'Traffic volume (bn miles)', 'Annual change in traffic (%)'],
      rows: [
        ['2018', '128', '+4.1', '323', '+1.2'],
        ['2019', '131', '+2.3', '327', '+1.2'],
        ['2020', '103', '−21.4', '258', '−21.1'],
        ['2021', '130', '+26.2', '313', '+21.3'],
        ['2022', '167', '+28.5', '308', '−1.6'],
        ['2023', '148', '−11.4', '315', '+2.3']
      ]
    },
    questions: [
      {
        id: 'ped-data-q1',
        question: 'In 2020, petrol prices fell 21.4% yet traffic volume also fell 21.1%. Which factor best explains this anomaly?',
        options: [
          'Falling prices always reduce traffic because drivers become complacent',
          'COVID-19 lockdowns suppressed travel demand regardless of fuel prices',
          'The data confirms that demand for petrol is unit elastic (PED = −1)',
          'Petrol demand in 2020 was perfectly inelastic — prices had no effect'
        ],
        correct: 1,
        explanation: '2020 is dominated by COVID-19 lockdowns, which made travel impossible or illegal for most of the year regardless of petrol prices. This is a demand-side shock driven by non-price factors (government restrictions, fear, remote working) — not a price effect. Data from 2020 should be excluded when estimating PED because it violates the ceteris paribus assumption.'
      },
      {
        id: 'ped-data-q2',
        question: 'Comparing 2019 and 2022 (excluding 2020–21): petrol prices rose from 131p to 167p (+27.5%) while traffic fell from 327bn to 308bn miles (−5.8%). What does this imply about the PED for petrol?',
        options: [
          'Demand is elastic (PED < −1): traffic fell more than proportionately to the price rise',
          'Demand is inelastic (0 > PED > −1): traffic fell less than proportionately to the price rise',
          'Demand is unit elastic (PED = −1): price and traffic changed by equal percentages',
          'Demand is perfectly inelastic: traffic volume is unaffected by petrol prices'
        ],
        correct: 1,
        explanation: 'PED ≈ −5.8 ÷ +27.5 ≈ −0.21. The magnitude is much less than 1, indicating highly inelastic demand. A 27.5% price rise caused only a 5.8% fall in traffic — drivers have few short-run substitutes (poor public transport, need to commute) and petrol is a small share of total car ownership costs. This supports the case for fuel duty as a revenue-raising tax.'
      },
      {
        id: 'ped-data-q3',
        question: 'In 2022, petrol prices hit 167p (a 10-year high following Russia\'s invasion of Ukraine). Using the PED implied by the 2019–2022 comparison, what does this suggest about using a fuel duty increase to reduce carbon emissions?',
        options: [
          'A fuel duty increase would effectively cut driving significantly, making it a strong climate policy tool',
          'A fuel duty increase would raise substantial tax revenue but have only a modest impact on driving behaviour',
          'A fuel duty increase would have no effect on either revenue or driving behaviour',
          'A fuel duty increase would reduce tax revenue because demand is elastic'
        ],
        correct: 1,
        explanation: 'With highly inelastic demand (estimated PED ≈ −0.21), a price rise generates large revenue increases but only small reductions in quantity. For a fuel duty rise to cut carbon emissions significantly, it would need to be very large — which raises equity concerns (regressive impact on low-income drivers). Complementary measures (improved public transport, EV subsidies) are needed alongside price rises to achieve meaningful emission reductions. This is an exam-quality evaluation of price-based environmental policy.'
      }
    ]
  }
};
