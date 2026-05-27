/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Market Failure: information asymmetry shifts demand left (D₁ → D₂)
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   S (supply, unchanged): (130,390)→(490,30)  slope = -1.0  ⟹  y = 520 - x
   D₁ (full-info demand): (110,50) →(514,381)  slope = 0.82  ⟹  y = -40.2 + 0.82x
     Check: x=110 → y=-40.2+90.2=50 ✓; x=514 → y=-40.2+421.5≈381 ✓
     E₁ (S ∩ D₁): 520-x = -40.2+0.82x → 560.2 = 1.82x → x≈308, y≈212
   D₂ (info-gap demand): (110,100)→(449,381)  slope = 0.83  ⟹  y = 8.7 + 0.83x
     Check: x=110 → y=8.7+91.3=100 ✓; x=449 → y=8.7+372.7≈381 ✓
     E₂ (S ∩ D₂): 520-x = 8.7+0.83x → 511.3 = 1.83x → x≈279, y≈241           */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Market Failure',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('depends'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.routes.link('extract') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: -1,

  /* ── Stage 0: Select the right diagram ── */
  select: {
    eyebrow:     'Diagram Connector – Select the Diagram',
    title:       'Buyers in the used car market cannot verify quality before purchase. Which diagram correctly shows the effect of information asymmetry on the market for used cars?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of information asymmetry. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      'd-left',
        correct:  true,
        title:   'Demand shifts left',
        sub:     'Effective demand falls – buyers reduce WTP because they cannot distinguish quality, depressing demand for quality cars',
        why:     'Information asymmetry depresses buyer WTP: unable to verify quality, buyers offer only average-quality prices. D₁ (full-information demand) shifts left to D₂ (information-gap demand). The equilibrium moves from Q₁ to Q₂: fewer quality cars are traded, at a lower price, and a deadweight welfare loss appears from the deals that never happen.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Rising consumer demand pushes up the price level',
        why:     'A rightward demand shift would mean buyers are willing to pay more – the opposite of what information asymmetry does. Information asymmetry depresses WTP because buyers cannot verify quality and assume average quality. Demand falls left, not right.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Output falls and prices rise as supply contracts',
        why:     'While adverse selection does eventually reduce the supply of quality cars (sellers exit), this is a secondary consequence of the primary demand-side effect. The direct mechanism of information asymmetry is that buyer WTP is depressed – a leftward demand shift – not that supply contracts first. In exam diagrams, the information asymmetry market failure is modelled as a demand-side failure.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Output rises and prices fall as supply expands',
        why:     'Supply shifting right would represent falling costs or improved technology – neither of which is caused by information asymmetry. Information asymmetry is primarily a demand-side failure: it depresses buyer WTP and shifts demand left, reducing the quantity of quality cars traded.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🚗',
    text:  'UK: 7.2m used car transactions (2022). 1 in 3 buyers experienced undisclosed defects (Citizens Advice 2023). Consumer Rights Act 2015 mandates disclosure.',
    dataPoints: [
      { icon: '❓', text: 'Buyers cannot verify quality: assume average → WTP depressed' },
      { icon: '📉', text: 'Good cars exit market (adverse selection spiral)' },
      { icon: '⚖️', text: 'Result: fewer quality cars than socially optimal (underproduction)' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – information asymmetry causing demand to fall left in the used car market',
    xLabel:    'Quantity of used cars (quality)',
    yLabel:    'Price (£)',

    lines: [
      /* S (supply of used cars, unchanged) – blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S', labelX: 494, labelY: 28, labelFill: '#2563eb' },
      /* D₁ (full-information demand) – amber downward-sloping */
      { x1: 110, y1: 50,  x2: 514, y2: 381, stroke: '#d97706', strokeWidth: 2.5,
        label: 'D₁ (full info)', labelX: 462, labelY: 381, labelFill: '#d97706' },
      /* D₂ (information-gap demand) – green downward-sloping, shifted left */
      { x1: 110, y1: 100, x2: 449, y2: 381, stroke: '#059669', strokeWidth: 2.5,
        label: 'D₂ (info gap)', labelX: 453, labelY: 381, labelFill: '#059669' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₁ (full-info equilibrium price P₁) */
      { x1: 100, y1: 212, x2: 308, y2: 212, tickLeft: 'P₁',  tickLeftY: 215 },
      /* Horizontal from y-axis to E₂ (info-gap equilibrium price P₂) */
      { x1: 100, y1: 241, x2: 279, y2: 241, tickLeft: 'P₂',  tickLeftY: 244 },
      /* Vertical from E₁ down to x-axis */
      { x1: 308, y1: 212, x2: 308, y2: 400, tickBottom: 'Q₁',  tickBottomX: 308 },
      /* Vertical from E₂ down to x-axis */
      { x1: 279, y1: 241, x2: 279, y2: 400, tickBottom: 'Q₂',  tickBottomX: 279 }
    ],

    /* Shift arrow: from D₁ toward D₂ at y=120, pointing left */
    shiftArrow: { x1: 410, y1: 120, x2: 350, y2: 120, stroke: '#059669' },

    eqDots: [
      {
        cx: 308, cy: 212, fill: '#d97706',
        initLabel: 'Full-info equilibrium', initLabel2: '(Q₁, P₁)', initLabelX: 315, initLabelY: 207
      },
      {
        cx: 279, cy: 241, fill: '#059669',
        newLabel: 'Info-gap equilibrium', newLabel2: '(Q₂, P₂)', newLabelX: 227, newLabelY: 248
      }
    ],

    legend: [
      { color: '#d97706', text: 'D₁ = Full-information demand (if buyers knew quality)' },
      { color: '#059669', text: 'D₂ = Effective demand with information gap (buyers assume average quality)' },
      { color: '#2563eb', text: 'S = Supply of used cars (unchanged)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of information asymmetry on the used car market.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',      label: 'Shift label',                pctX: 55,  pctY: 20,   pctW: 25 },
      { id: 'new-eq',     label: 'Info-gap equilibrium',       pctX: 40,  pctY: 47,   pctW: 22 },
      { id: 'orig-eq',    label: 'Full-info equilibrium',      pctX: 58,  pctY: 42,   pctW: 24 },
      { id: 'orig-price', label: 'Full-info price (P₁)',       pctX: 0.5, pctY: 43,   pctW: 14 },
      { id: 'lo-price',   label: 'Information-gap price (P₂)', pctX: 0.5, pctY: 50,   pctW: 14 }
    ],

    chips: [
      { id: 'dem-left',   text: 'Demand shifts left (info gap)',      icon: '←', zone: 'shift',      correct: true  },
      { id: 'new-eq',     text: 'Info-gap equilibrium (Q₂, P₂)',     icon: '●', zone: 'new-eq',     correct: true  },
      { id: 'orig-eq',    text: 'Full-info equilibrium (Q₁, P₁)',    icon: '●', zone: 'orig-eq',    correct: true  },
      { id: 'orig-price', text: 'Full-info price (P₁)',               icon: '−', zone: 'orig-price', correct: true  },
      { id: 'lo-price',   text: 'Information-gap price (P₂)',         icon: '↓', zone: 'lo-price',   correct: true  },
      { id: 'dem-right',  text: 'Demand shifts right',                icon: '→', zone: null,         correct: false },
      { id: 'sup-left',   text: 'Supply shifts left',                 icon: '←', zone: null,         correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['information asymmetry', 'adverse selection', 'market for lemons', 'D₁', 'D₂', 'WTP', 'deadweight welfare loss', 'Q₁', 'Q₂', 'mandatory disclosure', 'signalling', 'Consumer Rights Act'],

    parts: [
      {
        num:         1,
        title:       'Why does effective demand fall from D₁ to D₂?',
        prompt:      'Why does information asymmetry shift demand left from D₁ to D₂?',
        maxChars:    240,
        modelAnswer: 'Buyers cannot verify quality before purchase. They base WTP on expected average quality. If sellers know some cars are defective, the average quality is below what buyers would pay for a verified high-quality car. D₁ = what buyers would pay with perfect information; D₂ = what they actually offer, depressed by quality uncertainty. The gap between D₁ and D₂ at every quantity represents the welfare cost of the information gap.'
      },
      {
        num:         2,
        title:       'What is the welfare loss from the information gap?',
        prompt:      'What deadweight welfare loss does the shift from D₁ to D₂ create?',
        maxChars:    240,
        modelAnswer: 'At Q₂ < Q₁, there are unexploited gains from trade: a good-quality seller would gladly sell at P₁, and an informed buyer would gladly pay P₁. But the information gap prevents this deal – creating a deadweight welfare loss (the triangle between D₁, D₂ and the vertical at Q₂). Quality car sellers exit; buyers get worse cars than they would under full information.'
      },
      {
        num:         3,
        title:       'How does the Consumer Rights Act and private intermediaries correct this?',
        prompt:      'How do mandatory disclosure and private platforms shift D₂ back toward D₁?',
        maxChars:    240,
        modelAnswer: 'Mandatory disclosure (Consumer Rights Act 2015) requires sellers to reveal vehicle history – MOT records, finance checks, mileage – reducing buyer uncertainty and moving D₂ back toward D₁. Private information intermediaries (AutoTrader valuations, HPI checks) further close the gap by giving buyers better quality signals. However, enforcement costs are high and private solutions may be incomplete, leaving residual adverse selection and a persistent gap between D₂ and D₁.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Explain why D shifts left (information gap reduces WTP)',
      'Identify adverse selection mechanism',
      'State welfare loss (DWL from Q₂ < Q₁)',
      'Evaluate corrective policy effectiveness and limitations'
    ],

    examAnswer: '"Information asymmetry in the used car market depresses effective demand from the full-information level D₁ to D₂: buyers cannot distinguish quality and reduce WTP to reflect average expected quality, driving quality sellers from the market (adverse selection). The equilibrium shifts from Q₁ to Q₂, with a deadweight welfare loss representing deals that never happen. The Consumer Rights Act 2015 corrects this partly through mandatory disclosure – shifting D₂ back toward D₁ – but residual asymmetry persists where enforcement is difficult."'
  }
};
