/* ============================================================
   ECONOS – Link It · Calculate It station data
   PPF: opportunity cost calculations
   ============================================================ */

window.ECONOS_LINK_CALC = {
  topic:   'Production Possibility Frontiers',
  backUrl: TopicLoader.routes.link('chain'),
  nextUrl: TopicLoader.routes.link('depends'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 2,

  eyebrow:     'Calculate It',
  instruction: 'Opportunity cost is the core calculation skill for PPF questions. Work through each question – use "Reveal step-by-step method" if you get stuck.',

  questions: [
    {
      id: 'ppf-q1',
      title: 'Opportunity cost – reading coordinates from the PPF',
      scenario: 'An economy produces two goods: machines (capital) and food (consumption). The table shows two points on its Production Possibility Frontier. The economy is currently at Point A and the government decides to invest more in capital goods.',
      table: {
        caption: 'Points on the PPF',
        headers: ['Point', 'Machines', 'Food (tonnes)'],
        rows: [
          ['A', '80', '20'],
          ['B', '60', '30']
        ]
      },
      question: 'Moving from Point A to Point B, calculate the opportunity cost of producing <strong>one extra tonne of food</strong>.',
      hint: 'Opportunity cost = what is given up ÷ what is gained',
      method: [
        { step: 'Change in machines (what is given up)', working: '80 − 60 = 20 machines' },
        { step: 'Change in food (what is gained)',        working: '30 − 20 = 10 tonnes of food' },
        { step: 'Opportunity cost per tonne of food',     working: '20 ÷ 10 = 2 machines per tonne' },
        { step: 'State the final answer',                 working: 'Moving from A to B, the opportunity cost of 1 extra tonne of food is 2 machines.' }
      ],
      inputType: 'number',
      answer: 2,
      unit: 'machines per tonne of food',
      tolerance: 0,
      feedback: {
        correct: 'Correct! You gave up 20 machines (80→60) to gain 10 extra tonnes of food (20→30). Divide the sacrifice by the gain: 20 ÷ 10 = 2 machines per tonne. The economy has moved along its PPF.',
        wrong: 'Not quite. The method: (1) Machines given up = 80 − 60 = 20. (2) Food gained = 30 − 20 = 10. (3) Opportunity cost = 20 ÷ 10 = 2 machines per tonne of food.'
      },
      examTip: 'Always state units clearly: "X machines per tonne of food." This shows the examiner you understand opportunity cost as a ratio, not just a number. A common error is to give the total sacrifice (20) rather than the per-unit opportunity cost (2).'
    },
    {
      id: 'ppf-q2',
      title: 'Opportunity cost – a different pair of points',
      scenario: 'The same linear PPF. Now compare Points C and D. The government is considering a different allocation – starting from the maximum machines scenario (Point C) and moving toward more food production.',
      table: {
        caption: 'Points on the PPF',
        headers: ['Point', 'Machines', 'Food (tonnes)'],
        rows: [
          ['C', '100', '0'],
          ['D', '70', '15']
        ]
      },
      question: 'Moving from Point C to Point D, calculate the opportunity cost of producing <strong>one extra tonne of food</strong>.',
      hint: 'Same method as Question 1 – divide sacrifice by gain.',
      method: [
        { step: 'Change in machines (given up)', working: '100 − 70 = 30 machines' },
        { step: 'Change in food (gained)',        working: '15 − 0 = 15 tonnes of food' },
        { step: 'Opportunity cost per tonne',     working: '30 ÷ 15 = 2 machines per tonne' },
        { step: 'State the answer',               working: 'Moving from C to D, the opportunity cost of 1 tonne of food is 2 machines.' }
      ],
      inputType: 'number',
      answer: 2,
      unit: 'machines per tonne of food',
      tolerance: 0,
      feedback: {
        correct: 'Correct! On a straight-line (linear) PPF, opportunity cost is constant at every point along the frontier – always 2 machines per tonne of food here. This is a key feature of the linear PPF model.',
        wrong: 'Check your calculation: 30 machines given up ÷ 15 tonnes gained = 2 machines per tonne. On a linear PPF, the opportunity cost is the same at every point.'
      },
      examTip: 'On a linear PPF, opportunity cost is constant – the frontier\'s gradient is fixed. On a concave (bowed-out) PPF, opportunity cost increases as you produce more of one good, because resources are not equally suited to all uses. Examiners often ask you to identify which shape implies what.'
    },
    {
      id: 'ppf-q3',
      title: 'Interpreting PPF positions – efficiency and growth',
      scenario: 'A country operates below its PPF. Unemployment is at 8%. The government introduces a new training programme. Five years later the economy is producing at a point that was previously outside the old PPF.',
      question: 'Which combination of outcomes correctly describes the economy at each stage?',
      hint: 'Think: what does operating inside the PPF represent? What causes an outward shift?',
      method: [
        { step: 'Operating below the PPF', working: 'Inside the PPF → productive inefficiency. Resources (labour) are unemployed or misallocated.' },
        { step: 'Training programme effect (short run)', working: 'Moves the economy toward its PPF – improving allocative and productive efficiency as unemployed workers gain skills and enter work.' },
        { step: 'Producing beyond the old PPF', working: 'The PPF itself has shifted outward. Training increased productive capacity (human capital), so more of both goods can now be produced.' },
        { step: 'Conclusion', working: 'Stage 1: Productive inefficiency (inside PPF). Stage 2: PPF shifts outward via human capital investment → economic growth.' }
      ],
      inputType: 'mcq',
      options: [
        'Initially inefficient (inside PPF); later operating outside the frontier through allocative efficiency',
        'Initially inefficient (inside PPF); later operating on an outward-shifted PPF due to increased productive capacity',
        'Initially on the PPF; later on an outward-shifted PPF through improved technology only',
        'Initially outside the PPF (impossible point); later on the original PPF after adjustment'
      ],
      answer: 'Initially inefficient (inside PPF); later operating on an outward-shifted PPF due to increased productive capacity',
      feedback: {
        correct: 'Correct! Operating at 8% unemployment means the economy is inside the PPF – resources are wasted. The training programme raises human capital, shifting the PPF outward over time. This is economic growth: the ability to produce more of all goods simultaneously.',
        wrong: 'Operating below the PPF = inside the frontier (inefficiency/unemployment, not a different type of efficiency). Producing at a previously impossible point means the PPF shifted outward – not that the economy became more allocatively efficient on the same frontier.'
      },
      examTip: 'Three key PPF scenarios examiners test: (1) Moving along the PPF – trade-off with fixed resources. (2) Inside the PPF – unemployed/misallocated resources. (3) PPF shifts outward – economic growth via technology, capital, human capital, or resources. Always identify which of these three is occurring.'
    }
  ]
};
