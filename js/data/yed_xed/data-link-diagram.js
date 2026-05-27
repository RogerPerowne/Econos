/* ============================================================
   ECONOS – Link It · Diagram Connector data
   YED/XED: demand shifts left for luxury goods after income fall
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   S (Supply, unchanged): x1=130,y1=390, x2=490,y2=30  ⟹  y = 520 - x
   D₁ (original, higher demand): x1=110,y1=50, x2=514,y2=381  slope≈0.818  ⟹  y = -40.0 + 0.818x
     verify: x=110 → y=-40+90=50 ✓; x=514 → y=-40+420.5≈381 ✓
   D₂ (new, lower demand – shifted left ~30px in x): x1=110,y1=100, x2=449,y2=381  slope≈0.828  ⟹  y = 8.9 + 0.828x
     verify: x=110 → y=8.9+91.1=100 ✓; x=449 → y=8.9+371.7=380.6≈381 ✓
   E₁ (S ∩ D₁): 520-x = -40+0.818x → 560=1.818x → x≈308, y=520-308=212  → E₁=(308,212)
   E₂ (S ∩ D₂): 520-x = 8.9+0.828x → 511.1=1.828x → x≈279.6≈280, y=520-280=240  → E₂=(280,240)
   New eq: lower x (Q₂<Q₁) and higher y-value in SVG (lower price P₂<P₁ – lower SVG y means higher price)
   P₂ < P₁ (price falls) and Q₂ < Q₁ (quantity falls) – demand shifts left confirmed */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Income & Cross-Price Elasticity',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_depends.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.buildUrl('link_calc.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: -1,

  /* ── Stage 0: Select the right diagram ── */
  select: {
    eyebrow:     'Diagram Connector – Select the Diagram',
    title:       'UK real household income falls 2.5% in 2022. Which diagram correctly shows the effect on demand for luxury goods (YED > 1)?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the income fall on luxury goods. Think about which curve shifts and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      'd-left',
        correct:  true,
        title:   'Demand shifts left',
        sub:     'Demand shifts left – falling real income reduces willingness and ability to buy luxury goods disproportionately',
        why:     'Real income is a non-price demand factor. When it falls, households reduce non-essential spending first. For goods with YED > 1 (luxury cars, premium hotels, overseas holidays), the demand fall is more than proportional to the income fall. The entire demand curve shifts left: at every price, fewer luxury goods are demanded. The new equilibrium is at lower P₂ and lower Q₂.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Rising consumer demand pushes up prices and quantity',
        why:     'Demand shifting right would represent rising income or improved consumer confidence – the opposite of the scenario. In 2022, real incomes fell sharply (2.5%). For luxury goods with YED > 1, falling income reduces demand, shifting the curve left, not right.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Reduced supply at every price pushes prices up and quantity down',
        why:     'Supply shifting left would represent rising production costs or firms leaving the industry – a supply-side shock. The scenario describes an income fall, which affects the demand side. Supply for luxury goods is not directly changed by a fall in consumer real income.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'More supply at every price lowers prices and raises quantity',
        why:     'Supply shifting right would represent falling production costs or a technology improvement. This is not the mechanism described. The income fall affects demand, not supply. A rightward supply shift would reduce prices but is unrelated to the YED mechanism.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '💸',
    text:  'UK real income falls 2.5% (2022); luxury car sales fall 18%; budget supermarkets hit record 17.3% share.',
    dataPoints: [
      { icon: '📉', text: 'YED for luxury cars > 1 → 18% demand fall from 2.5% income fall' },
      { icon: '🛒', text: 'Aldi & Lidl share: record 17.3% – inferior/value goods gain' },
      { icon: '✈️', text: 'Overseas holidays fall 15%; domestic breaks rise 8%' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – demand shifts left for luxury goods after a real income fall, producing lower price and lower quantity at new equilibrium',
    xLabel:    'Quantity of luxury goods',
    yLabel:    'Price (£)',

    lines: [
      /* S – upward-sloping, unchanged */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S', labelX: 494, labelY: 28, labelFill: '#2563eb' },
      /* D₁ – original higher demand (before income fall) */
      { x1: 110, y1: 50,  x2: 514, y2: 381, stroke: '#d97706', strokeWidth: 2.5,
        label: 'D₁', labelX: 516, labelY: 381, labelFill: '#d97706' },
      /* D₂ – new lower demand (after income fall, shifted left) */
      { x1: 110, y1: 100, x2: 449, y2: 381, stroke: '#059669', strokeWidth: 2.5,
        label: 'D₂', labelX: 453, labelY: 381, labelFill: '#059669' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₁ (original equilibrium, higher price) */
      { x1: 100, y1: 212, x2: 308, y2: 212, tickLeft: 'P₁', tickLeftY: 215 },
      /* Horizontal from y-axis to E₂ (new equilibrium, lower price) */
      { x1: 100, y1: 240, x2: 280, y2: 240, tickLeft: 'P₂', tickLeftY: 243 },
      /* Vertical from E₁ down to x-axis */
      { x1: 308, y1: 212, x2: 308, y2: 400, tickBottom: 'Q₁', tickBottomX: 308 },
      /* Vertical from E₂ down to x-axis */
      { x1: 280, y1: 240, x2: 280, y2: 400, tickBottom: 'Q₂', tickBottomX: 280 }
    ],

    /* Shift arrow: horizontal, pointing left, showing D₁ → D₂ */
    shiftArrow: { x1: 400, y1: 120, x2: 340, y2: 120, stroke: '#059669' },

    eqDots: [
      {
        cx: 308, cy: 212, fill: '#d97706',
        initLabel: 'Original equilibrium', initLabel2: '(Q₁, P₁)', initLabelX: 315, initLabelY: 207
      },
      {
        cx: 280, cy: 240, fill: '#059669',
        newLabel: 'New equilibrium', newLabel2: '(Q₂, P₂)', newLabelX: 227, newLabelY: 248
      }
    ],

    legend: [
      { color: '#d97706', text: 'D₁ = Demand before income fall (higher real income)' },
      { color: '#059669', text: 'D₂ = Demand after income fall (YED > 1 amplifies reduction)' },
      { color: '#2563eb', text: 'S = Supply of luxury goods (unchanged)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of falling real income on demand for luxury goods.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',      label: 'Shift label',              pctX: 55,  pctY: 20,   pctW: 22 },
      { id: 'new-eq',     label: 'New equilibrium',           pctX: 40,  pctY: 47,   pctW: 20 },
      { id: 'orig-eq',    label: 'Original equilibrium',      pctX: 57,  pctY: 42,   pctW: 22 },
      { id: 'orig-price', label: 'Original price (P₁)',        pctX: 0.5, pctY: 43,   pctW: 15 },
      { id: 'lo-price',   label: 'Lower price (P₂)',           pctX: 0.5, pctY: 50,   pctW: 15 }
    ],

    chips: [
      { id: 'dem-left',   text: 'Demand shifts left',         icon: '←', zone: 'shift',      correct: true  },
      { id: 'new-eq',     text: 'New equilibrium (Q₂, P₂)',   icon: '●', zone: 'new-eq',     correct: true  },
      { id: 'orig-eq',    text: 'Original equilibrium (Q₁, P₁)', icon: '●', zone: 'orig-eq', correct: true  },
      { id: 'orig-price', text: 'Original price (P₁)',         icon: '−', zone: 'orig-price', correct: true  },
      { id: 'lo-price',   text: 'Lower price (P₂)',            icon: '↓', zone: 'lo-price',  correct: true  },
      { id: 'dem-right',  text: 'Demand shifts right',         icon: '→', zone: null,         correct: false },
      { id: 'hi-price',   text: 'Higher price',                icon: '↑', zone: null,         correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['income elasticity of demand', 'YED', 'cross-price elasticity', 'XED', 'luxury good', 'inferior good', 'real income', 'demand shift', 'equilibrium', 'consumer surplus'],

    parts: [
      {
        num:         1,
        title:       'Why does the demand curve shift left – and why is the shift large for luxury goods?',
        prompt:      'Why does the demand curve shift left – and why is the shift large for luxury goods?',
        maxChars:    240,
        modelAnswer: 'YED > 1 for luxury goods means demand falls more than proportionally when income falls. A 2.5% income fall produces a 5%+ fall in luxury demand. Income is a non-price determinant: it shifts D left rather than moving along D. The larger the YED coefficient, the larger the leftward shift for any given income fall.'
      },
      {
        num:         2,
        title:       'What happens to price and quantity?',
        prompt:      'What happens to price and quantity at the new equilibrium?',
        maxChars:    240,
        modelAnswer: 'New equilibrium at P₂ < P₁ and Q₂ < Q₁: luxury good producers face lower prices AND lower sales volumes, squeezing revenues. Consumer surplus for remaining buyers at P₂ is lower in absolute terms because fewer units are traded. The luxury sector contracts on both dimensions simultaneously.'
      },
      {
        num:         3,
        title:       'What does XED add to the analysis?',
        prompt:      'What does XED add to the analysis of this income fall?',
        maxChars:    240,
        modelAnswer: 'For substitute goods (budget supermarkets vs premium), XED > 0: as luxury goods\' effective demand falls, consumers switch to value alternatives. More importantly, the income fall simultaneously raises demand for inferior/value substitutes (YED < 0), shifting their demand right – explaining Aldi/Lidl\'s record 17.3% market share in 2023.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Reference YED > 1 and explain amplification',
      'State direction of shift (left) and mechanism (income falls)',
      'State outcome for P and Q',
      'Add XED analysis of substitute markets'
    ],

    examAnswer: '"Falling real income shifted the demand curve for luxury goods to the left from D₁ to D₂. Because YED > 1 for luxury goods, a 2.5% income fall produced a disproportionately large demand contraction – consistent with the 18% fall in luxury car registrations. The new equilibrium at P₂ and Q₂ reduced luxury sector revenues. Simultaneously, XED effects meant value substitutes gained demand – reflected in the record market share achieved by budget supermarkets."'
  }
};
