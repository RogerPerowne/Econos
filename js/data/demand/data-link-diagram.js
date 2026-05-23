/* ============================================================
   ECONOS — Link It · Diagram Connector data
   Demand: rising income/confidence shifts demand right (D₁ → D₂)
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   S (Supply): (130,390)→(490,30)  slope = -1.0  ⟹  y = 520 - x
   D₁ (original demand): (110,50)→(514,381)  slope ≈ 0.825  ⟹  y = -40.75 + 0.825x
   D₂ (demand shifted right 60px): (170,50)→(540,355)  ⟹  y = -90.25 + 0.825x
   E₁ (S ∩ D₁): 520-x = -40.75+0.825x → 560.75 = 1.825x → x ≈ 307, y ≈ 213
   E₂ (S ∩ D₂): 520-x = -90.25+0.825x → 610.25 = 1.825x → x ≈ 334, y ≈ 186   */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Demand',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_depends.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 2,

  /* ── Stage 0: Select the right diagram ── */
  select: {
    eyebrow:     'Diagram Connector — Select the Diagram',
    title:       'Consumer incomes and confidence rise sharply after the pandemic. Which diagram correctly shows the effect on the market for restaurant meals?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the income and confidence rise. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      'd-right',
        correct:  true,
        title:   'Demand shifts right',
        sub:     'Demand shifts right — more meals demanded at every price as income and confidence rise',
        why:     'Rising income and consumer confidence are non-price determinants of demand — they increase consumers\' willingness and ability to pay for restaurant meals at every price level. This shifts the demand curve to the right from D₁ to D₂. At the original price, excess demand emerges, pushing price up to P₂ and quantity to Q₂. The supply curve is unchanged.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Demand falls — fewer meals demanded at every price',
        why:     'Demand shifts left when income falls, consumer confidence deteriorates, or the prices of substitutes fall. In this scenario, income and confidence are rising — so demand shifts right, not left. A leftward shift would represent the opposite of the post-COVID recovery.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Supply contracts — fewer meals supplied at every price',
        why:     'A leftward supply shift would result from rising input costs, a tax on producers, or fewer restaurants in the market. The post-COVID leisure recovery is a demand-side story — rising consumer income and confidence — not a supply shock. The supply of restaurant meals is unchanged in this scenario.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Supply increases — more meals supplied at every price',
        why:     'Supply shifts right when production costs fall, technology improves, or new firms enter the market. While new entrants may eventually follow the demand surge, the initial impact of rising income and confidence is on demand, not supply. This diagram shows the wrong side of the market.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🍽️',
    text:  'Post-COVID recovery: £190bn savings released; consumer confidence at 5-year high.',
    dataPoints: [
      { icon: '💰', text: 'Savings ratio falls from 29% to 7% as spending surges' },
      { icon: '📈', text: 'Restaurant bookings 60% above 2019 levels (OpenTable)' },
      { icon: '🎉', text: 'Consumer confidence index: +7 (GfK, July 2021)' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram — demand shifts right as consumer income and confidence rise, creating a new equilibrium at higher price and quantity',
    xLabel:    'Quantity of restaurant meals',
    yLabel:    'Price (£)',

    lines: [
      /* S (Supply) — blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S', labelX: 494, labelY: 28, labelFill: '#2563eb' },
      /* D₁ (original demand) — green downward-sloping */
      { x1: 110, y1: 50,  x2: 514, y2: 381, stroke: '#059669', strokeWidth: 2.5,
        label: 'D₁', labelX: 516, labelY: 381, labelFill: '#059669' },
      /* D₂ (new demand, shifted right 60px) — amber downward-sloping */
      { x1: 170, y1: 50,  x2: 540, y2: 355, stroke: '#d97706', strokeWidth: 2.5,
        label: 'D₂', labelX: 542, labelY: 353, labelFill: '#d97706' }
    ],

    /* Guide lines + tick labels — shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₂ (new equilibrium, higher price) */
      { x1: 100, y1: 186, x2: 334, y2: 186, tickLeft: 'P₂', tickLeftY: 189 },
      /* Horizontal from y-axis to E₁ (original equilibrium) */
      { x1: 100, y1: 213, x2: 307, y2: 213, tickLeft: 'P₁', tickLeftY: 216 },
      /* Vertical from E₂ down to x-axis */
      { x1: 334, y1: 186, x2: 334, y2: 400, tickBottom: 'Q₂', tickBottomX: 334 },
      /* Vertical from E₁ down to x-axis */
      { x1: 307, y1: 213, x2: 307, y2: 400, tickBottom: 'Q₁', tickBottomX: 307 }
    ],

    /* Shift arrow: horizontal, pointing right, at y=120 between D₁ and D₂ */
    shiftArrow: { x1: 280, y1: 120, x2: 340, y2: 120, stroke: '#d97706' },

    eqDots: [
      {
        cx: 307, cy: 213, fill: '#059669',
        initLabel: 'Original equilibrium', initLabel2: '(Q₁, P₁)', initLabelX: 314, initLabelY: 208
      },
      {
        cx: 334, cy: 186, fill: '#d97706',
        newLabel: 'New equilibrium', newLabel2: '(Q₂, P₂)', newLabelX: 341, newLabelY: 181
      }
    ],

    legend: [
      { color: '#059669', text: 'D₁ = Original demand (before income/confidence rise)' },
      { color: '#d97706', text: 'D₂ = New demand (after savings release and confidence surge)' },
      { color: '#2563eb', text: 'S = Supply of restaurant meals (unchanged)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector — Label the Diagram',
    title:       'Use the diagram to show the effect of rising consumer income and confidence on the market for restaurant meals.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',    label: 'Shift label',                   pctX: 54,  pctY: 21,   pctW: 22 },
      { id: 'new-eq',   label: 'New equilibrium',                pctX: 61,  pctY: 35,   pctW: 20 },
      { id: 'orig-eq',  label: 'Original equilibrium',           pctX: 56,  pctY: 43,   pctW: 22 },
      { id: 'hi-price', label: 'Higher price (P₂)',               pctX: 0.5, pctY: 37,   pctW: 15 },
      { id: 'hi-qty',   label: 'Higher quantity (Q₂)',            pctX: 58,  pctY: 93.5, pctW: 15 }
    ],

    chips: [
      { id: 'dem-right', text: 'Demand shifts right',          icon: '→', zone: 'shift',    correct: true  },
      { id: 'new-eq',    text: 'New equilibrium (Q₂, P₂)',     icon: '●', zone: 'new-eq',   correct: true  },
      { id: 'orig-eq',   text: 'Original equilibrium (Q₁, P₁)',icon: '●', zone: 'orig-eq',  correct: true  },
      { id: 'hi-price',  text: 'Higher price (P₂)',             icon: '↑', zone: 'hi-price', correct: true  },
      { id: 'hi-qty',    text: 'Higher quantity (Q₂)',          icon: '↑', zone: 'hi-qty',   correct: true  },
      { id: 'dem-left',  text: 'Demand shifts left',            icon: '←', zone: null,       correct: false },
      { id: 'lo-price',  text: 'Lower price',                   icon: '↓', zone: null,       correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector — Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis — bridge the diagram shift into clear written analysis.',

    vocab: ['demand curve', 'shift in demand', 'consumer confidence', 'income effect', 'excess demand', 'equilibrium price', 'equilibrium quantity', 'non-price determinants'],

    parts: [
      {
        num:         1,
        title:       'Explain the shift',
        prompt:      'Why does the demand curve shift right, not just move along?',
        maxChars:    300,
        modelAnswer: 'Non-price determinants change: income rises and consumer confidence improves, increasing willingness and ability to pay for restaurant meals at every price level. This shifts the entire demand curve to the right from D₁ to D₂ — not a movement along D₁.'
      },
      {
        num:         2,
        title:       'Explain the new equilibrium',
        prompt:      'What happens to price and quantity?',
        maxChars:    300,
        modelAnswer: 'At the original price, quantity demanded exceeds quantity supplied (excess demand). Price rises until the market clears at the new equilibrium E₂: higher price P₂ and higher quantity Q₂. Firms expand output and new entrants are attracted by the profit signal.'
      },
      {
        num:         3,
        title:       'Add a wider effect',
        prompt:      'What does this mean for consumers and the sector?',
        maxChars:    300,
        modelAnswer: 'Rising prices partially erode the consumer surplus gained from higher incomes, but total welfare rises as the gains from trade expand at Q₂. However, the price rise may exclude lower-income households who did not benefit from accumulated savings, worsening distributional equity.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Name the non-price demand shifter',
      'Explain the direction of the shift',
      'State the outcome for P and Q',
      'Comment on welfare or distributional effect'
    ],

    examAnswer: '"Rising consumer income and confidence after the pandemic shifted the demand curve for restaurant meals to the right from D₁ to D₂. At the original equilibrium price, excess demand emerged, driving prices up to P₂ and output to Q₂. The hospitality sector responded to the profit signal by expanding capacity, though the higher price partly offset gains in consumer welfare and affected households unequally."'
  }
};
