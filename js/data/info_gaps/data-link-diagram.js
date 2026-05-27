/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Information Gaps: demand shifts left as disclosure corrects the info gap
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   S (supply of BNPL credit):  (130,390)→(490,30)   y = 520 - x
   D_biased:  (110,50)→(514,381)  slope ≈ 0.825  y = -40.75 + 0.825x  → E_biased  ≈ (307,213)
   D_rational: (110,100)→(449,381) slope ≈ 0.825  y = 9.25 + 0.825x   → E_rational ≈ (280,240)  */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Information Gaps',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_depends.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: -1,

  /* ── Stage 0: Select the right diagram ── */
  select: {
    eyebrow:     'Diagram Connector – Select the Diagram',
    title:       'FCA mandates that BNPL providers display APR at the point of sale. Which diagram correctly shows the effect of disclosure on consumer demand for BNPL credit?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of mandatory APR disclosure. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      'd-left',
        correct:  true,
        title:   'Demand shifts left',
        sub:     'Mandatory disclosure corrects the information gap, reducing demand from the artificially inflated level to the rational level',
        why:     'When consumers see the true APR and cost of credit, the perceived effective price of BNPL rises to its actual level. Consumers\'s willingness to borrow at any given price falls – effective demand shifts left from D_biased to D_rational. Equilibrium quantity falls from Q_biased to Q_rational, reducing overconsumption and debt harm.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Consumer demand rises, increasing the quantity of BNPL taken out',
        why:     'A rightward demand shift would represent rising consumer income or preferences for BNPL – the opposite of what happens when APR is disclosed. Disclosure reduces perceived attractiveness of BNPL credit by revealing its true cost; it does not make BNPL more desirable.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'BNPL providers reduce credit supply at every price',
        why:     'APR disclosure requirements affect the information available to consumers (the demand side), not the cost or willingness of providers to supply credit. Supply of BNPL credit is unchanged by disclosure requirements – the correction mechanism works through demand, not supply.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Credit supply expands, lowering the market interest rate',
        why:     'Supply shifting right means providers offer more credit at every price – this would represent falling funding costs or new market entrants. Mandatory disclosure does not change supply conditions; it changes the information available to consumers on the demand side.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '💳',
    text:  'FCA regulation (2024): BNPL providers must display APR. Previously: 25% of users missed repayments; 11% sent to debt collection.',
    dataPoints: [
      { icon: '❓', text: 'Without disclosure: consumers underestimate true credit cost → demand inflated' },
      { icon: '📉', text: 'With APR disclosure: demand falls to rational level' },
      { icon: '✅', text: 'FCA: reduces debt harm without banning BNPL market' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – FCA mandatory APR disclosure correcting information gap in BNPL credit market',
    xLabel:    'Quantity of BNPL credit',
    yLabel:    'Effective price / cost of credit',

    lines: [
      /* S – supply of BNPL credit, unchanged – blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S', labelX: 494, labelY: 28, labelFill: '#2563eb' },
      /* D_biased – inflated demand before disclosure – red downward-sloping */
      { x1: 110, y1: 50,  x2: 514, y2: 381, stroke: '#dc2626', strokeWidth: 2.5,
        label: 'D_biased', labelX: 470, labelY: 381, labelFill: '#dc2626' },
      /* D_rational – rational demand after disclosure – green downward-sloping */
      { x1: 110, y1: 100, x2: 449, y2: 381, stroke: '#059669', strokeWidth: 2.5,
        label: 'D_rational', labelX: 453, labelY: 381, labelFill: '#059669' }
    ],

    /* Guide lines + tick labels */
    guides: [
      { x1: 100, y1: 213, x2: 307, y2: 213, tickLeft: 'P_biased',   tickLeftY: 216 },
      { x1: 100, y1: 240, x2: 280, y2: 240, tickLeft: 'P_rational', tickLeftY: 243 },
      { x1: 307, y1: 213, x2: 307, y2: 400, tickBottom: 'Q_biased',   tickBottomX: 307 },
      { x1: 280, y1: 240, x2: 280, y2: 400, tickBottom: 'Q_rational', tickBottomX: 280 }
    ],

    /* Shift arrow: D_biased → D_rational, pointing left */
    shiftArrow: { x1: 410, y1: 120, x2: 350, y2: 120, stroke: '#059669' },

    eqDots: [
      {
        cx: 307, cy: 213, fill: '#dc2626',
        initLabel: 'Overconsumption', initLabel2: 'equilibrium (Q_biased)', initLabelX: 314, initLabelY: 208
      },
      {
        cx: 280, cy: 240, fill: '#059669',
        newLabel: 'Rational', newLabel2: 'equilibrium (Q_rational)', newLabelX: 228, newLabelY: 248
      }
    ],

    legend: [
      { color: '#dc2626', text: 'D_biased = Inflated demand (true cost hidden – before disclosure)' },
      { color: '#059669', text: 'D_rational = True rational demand (APR displayed – after disclosure)' },
      { color: '#2563eb', text: 'S = Supply of BNPL credit (unchanged)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of FCA mandatory APR disclosure.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    zones: [
      { id: 'shift',     label: 'Shift label',                   pctX: 55,  pctY: 20,   pctW: 26 },
      { id: 'over-eq',   label: 'Overconsumption equilibrium',   pctX: 58,  pctY: 42,   pctW: 24 },
      { id: 'rat-eq',    label: 'Rational equilibrium',          pctX: 40,  pctY: 48,   pctW: 22 },
      { id: 'over-price',label: 'Price at overconsumption level', pctX: 0.5, pctY: 43,   pctW: 16 },
      { id: 'rat-qty',   label: 'Rational quantity',             pctX: 43,  pctY: 93.5, pctW: 18 }
    ],

    chips: [
      { id: 'shift-chip',    text: 'Demand shifts left (disclosure corrects gap)', icon: '←', zone: 'shift',      correct: true  },
      { id: 'over-eq-chip',  text: 'Overconsumption equilibrium (Q_biased)',       icon: '●', zone: 'over-eq',    correct: true  },
      { id: 'rat-eq-chip',   text: 'Rational equilibrium (Q_rational)',            icon: '●', zone: 'rat-eq',     correct: true  },
      { id: 'price-chip',    text: 'Price at overconsumption level',               icon: '−', zone: 'over-price', correct: true  },
      { id: 'rat-qty-chip',  text: 'Rational quantity (Q_rational < Q_biased)',    icon: '↓', zone: 'rat-qty',    correct: true  },
      { id: 'dem-right',     text: 'Demand shifts right',                          icon: '→', zone: null,         correct: false },
      { id: 'sup-left',      text: 'Supply shifts left',                           icon: '←', zone: null,         correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['information gap', 'asymmetric information', 'overconsumption', 'rational demand', 'mandatory disclosure', 'FCA regulation', 'consumer surplus', 'debt harm', 'market failure', 'present bias', 'D_biased', 'D_rational'],

    parts: [
      {
        num:         1,
        title:       'Explain why D_biased sits above D_rational',
        prompt:      'Why is D_biased above D_rational?',
        maxChars:    240,
        modelAnswer: 'The information gap makes BNPL appear cheaper than it is – APR is not shown at checkout. Consumers\' perceived price is lower than the true price, so their effective WTP (and borrowing) exceeds the rational level. D_biased reflects overconsumption driven by hidden costs; D_rational reflects what demand would be with full APR disclosure.'
      },
      {
        num:         2,
        title:       'Explain the shift from D_biased to D_rational',
        prompt:      'What happens when disclosure moves D from D_biased to D_rational?',
        maxChars:    240,
        modelAnswer: 'Equilibrium shifts from Q_biased to Q_rational: fewer BNPL transactions are taken out, at a slightly lower effective market price. Consumer harm falls: fewer missed repayments and debt collection events. The welfare triangle between D_biased and D_rational represents the consumer harm previously absorbed as debt costs – this is eliminated when demand falls to the rational level.'
      },
      {
        num:         3,
        title:       'Evaluate the limitations of mandatory disclosure',
        prompt:      'What are the limitations of mandatory disclosure?',
        maxChars:    240,
        modelAnswer: 'Disclosure only works if consumers process the information and adjust behaviour. Behavioural economics research shows that displaying APR in small print at checkout does not change decisions for many consumers – particularly those with present bias. More effective disclosure (clear cost-of-credit in £ terms, comparison with alternatives) may be needed to fully correct the information gap. A ban on late fees or an interest cap may be needed as a complementary policy.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Explain why information gap inflates demand',
      'State that Q_biased > Q_rational (overconsumption)',
      'Explain disclosure mechanism (D shifts left)',
      'Evaluate limitations of disclosure (behavioural barriers)'
    ],

    examAnswer: '"Hidden BNPL costs inflated effective demand from D_rational to D_biased – consumers perceived the product as cheaper than its true cost, leading to overconsumption (Q_biased). FCA mandatory APR disclosure corrects the information gap, shifting demand left to D_rational and reducing debt harm. However, behavioural barriers (present bias, anchoring to the small monthly payment) mean disclosure alone may be insufficient – and complementary policies such as standardised cost-of-credit warnings or interest rate caps may be needed to fully restore rational demand."'
  }
};
