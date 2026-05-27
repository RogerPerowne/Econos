/* ============================================================
   ECONOS – Link It · Diagram Connector data
   The Price Mechanism: Ukraine war supply shock shifts supply left
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   D:  (110,60)→(510,360)  slope = 0.75  ⟹  y = −22.5 + 0.75x
   S₁: (130,390)→(490,30)  slope = −1.0  ⟹  y = 520 − x
   S₂: (130,330)→(430,30)  60px up (left shift)  ⟹  y = 460 − x
   E₁ (D ∩ S₁): x = 310, y = 210  (pre-shock equilibrium)
   E₂ (D ∩ S₂): x = 276, y = 184  (post-shock: higher P, lower Q – lower SVG y = higher price) */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'The Price Mechanism',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_depends.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'predict', label: 'Predict outcome', href: TopicLoader.buildUrl('link_predict.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: -1,

  /* ── Stage 0: Select the right diagram ── */
  select: {
    eyebrow:     'Diagram Connector – Select the Diagram',
    title:       'Ukraine war disrupts wheat exports, removing ~30% of world supply. Which diagram correctly shows the immediate effect on the UK food market?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the supply shock. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      's-left',
        correct:  true,
        title:   'Supply shifts left',
        sub:     'Supply shifts left – disruption reduces quantity supplied at every price, triggering the price mechanism',
        why:     'The Ukraine war removes ~30% of world wheat supply from global markets. At every price level, less wheat is available – supply shifts left from S₁ to S₂. This creates excess demand at the original price P₁, pushing prices up to P₂ and reducing quantity to Q₂. The price rise is the price signal that triggers all three price mechanism functions.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Demand rises – but the supply shock is the initial cause, not a rise in consumer demand',
        why:     'The initial shock is a supply disruption, not a rise in consumer demand. Demand for food is unchanged – the same consumers want the same food at the same prices. A rightward demand shift would represent rising consumer income or population growth, neither of which is the mechanism here. Supply shifts left is the accurate first-round effect.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Supply expands – wrong direction: a supply shock removes supply, it does not add it',
        why:     'Supply shifting right means more wheat is available at every price – representing entry of new producers, falling costs, or improved technology. The Ukraine war removed a major supplier from global markets, reducing the quantity supplied at every price. This is a leftward, not rightward, supply shift.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Demand falls – wrong: nothing in the supply shock reduces consumer demand for food',
        why:     'A leftward demand shift would mean consumers want less food at every price – reflecting falling income or a preference change. The Ukraine war does not reduce consumer demand for wheat products; people still need to eat. The first-round effect of a supply disruption is supply shifting left, not demand falling.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🌾',
    text:  'Ukraine war removes ~30% of global wheat supply. UK food inflation: 19.2% (March 2023). UK wheat planting +3%. Farmland prices +14%.',
    dataPoints: [
      { icon: '🔺', text: 'Rationing: price rise rations existing food supply to highest bidders' },
      { icon: '📡', text: 'Signalling: 14% farmland price rise attracts investment' },
      { icon: '🌱', text: 'Incentive: UK wheat planting area increases 3% (AHDB)' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – Ukraine war supply shock shifts supply left, raising food prices and reducing quantity',
    xLabel:    'Quantity of food',
    yLabel:    'Price (£)',

    lines: [
      /* D – green downward-sloping */
      { x1: 110, y1: 60,  x2: 510, y2: 360, stroke: '#059669', strokeWidth: 2.5,
        label: 'D (Demand)', labelX: 514, labelY: 360, labelFill: '#059669' },
      /* S₁ (pre-war supply) – blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S₁', labelX: 494, labelY: 28, labelFill: '#2563eb' },
      /* S₂ (post-war supply, shifted left 60px vertically) – red upward-sloping */
      { x1: 130, y1: 330, x2: 430, y2: 30,  stroke: '#dc2626', strokeWidth: 2.5,
        label: 'S₂', labelX: 434, labelY: 28, labelFill: '#dc2626' }
    ],

    /* Guide lines + tick labels */
    guides: [
      /* Horizontal from y-axis to E₂ (new higher price P₂) */
      { x1: 100, y1: 184, x2: 276, y2: 184, tickLeft: 'P₂', tickLeftY: 187 },
      /* Horizontal from y-axis to E₁ (original lower price P₁) */
      { x1: 100, y1: 210, x2: 310, y2: 210, tickLeft: 'P₁', tickLeftY: 213 },
      /* Vertical from E₂ down to x-axis */
      { x1: 276, y1: 184, x2: 276, y2: 400, tickBottom: 'Q₂', tickBottomX: 276 },
      /* Vertical from E₁ down to x-axis */
      { x1: 310, y1: 210, x2: 310, y2: 400, tickBottom: 'Q₁', tickBottomX: 310 }
    ],

    /* Shift arrow: from S₁ toward S₂ at y=80, pointing left */
    shiftArrow: { x1: 430, y1: 80, x2: 370, y2: 80, stroke: '#dc2626' },

    eqDots: [
      {
        cx: 310, cy: 210, fill: '#2563eb',
        initLabel: 'Pre-shock equilibrium', initLabel2: '(Q₁, P₁)', initLabelX: 317, initLabelY: 205
      },
      {
        cx: 276, cy: 184, fill: '#dc2626',
        newLabel: 'Post-shock equilibrium', newLabel2: '(Q₂, P₂)', newLabelX: 283, newLabelY: 179
      }
    ],

    legend: [
      { color: '#059669', text: 'D = Demand for food (unchanged)' },
      { color: '#2563eb', text: 'S₁ = Pre-war supply (Ukraine wheat available)' },
      { color: '#dc2626', text: 'S₂ = Post-war supply (Ukraine wheat removed)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of the Ukraine war supply shock on the food market.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',    label: 'Shift label',              pctX: 62,  pctY: 13,   pctW: 22 },
      { id: 'new-eq',   label: 'New equilibrium',           pctX: 49,  pctY: 36,   pctW: 22 },
      { id: 'orig-eq',  label: 'Original equilibrium',      pctX: 57,  pctY: 43,   pctW: 24 },
      { id: 'hi-price', label: 'Higher price – price signal', pctX: 0.5, pctY: 37,   pctW: 17 },
      { id: 'lo-qty',   label: 'Lower quantity (Q₂)',        pctX: 43,  pctY: 93.5, pctW: 18 }
    ],

    chips: [
      { id: 'sup-left',  text: 'Supply shifts left (supply shock)', icon: '←', zone: 'shift',    correct: true  },
      { id: 'new-eq',    text: 'New equilibrium (Q₂, P₂)',          icon: '●', zone: 'new-eq',   correct: true  },
      { id: 'orig-eq',   text: 'Original equilibrium (Q₁, P₁)',     icon: '●', zone: 'orig-eq',  correct: true  },
      { id: 'hi-price',  text: 'Higher price – price signal',        icon: '↑', zone: 'hi-price', correct: true  },
      { id: 'lo-qty',    text: 'Lower quantity (Q₂)',                icon: '↓', zone: 'lo-qty',   correct: true  },
      { id: 'sup-right', text: 'Supply shifts right',                icon: '→', zone: null,       correct: false },
      { id: 'lo-price',  text: 'Lower price',                        icon: '↓', zone: null,       correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['price mechanism', 'rationing function', 'signalling function', 'incentive function', 'excess demand', 'equilibrium price', 'price signal', 'allocative efficiency', 'PES', 'equity'],

    parts: [
      {
        num:         1,
        title:       'Explain the rationing function',
        prompt:      'How does the price rise from P₁ to P₂ ration existing food supply?',
        maxChars:    240,
        modelAnswer: 'Price rises from P₁ to P₂ when supply contracts. This rationing signal means existing supply flows to those willing and able to pay the higher price – reducing waste and ensuring supply is directed to highest-value uses. However, rationing by price excludes lower-income consumers who cannot afford P₂.'
      },
      {
        num:         2,
        title:       'Explain the signalling and incentive functions',
        prompt:      'How do higher prices at P₂ signal and incentivise producers?',
        maxChars:    240,
        modelAnswer: 'Higher P₂ transmits a price signal to producers globally: profitability has risen. Farmers plant more wheat; investors bid up farmland prices (+14%); suppliers in unaffected countries expand output. The incentive is the higher profit margin at P₂ > long-run average cost. Supply gradually shifts right again over 12–24 months as production responds.'
      },
      {
        num:         3,
        title:       'Evaluate: strengths and limitations',
        prompt:      'Where does the price mechanism work well and fail in this case?',
        maxChars:    240,
        modelAnswer: 'Works well: information is efficiently conveyed without central direction (Hayek\'s knowledge problem solved). Fails: equity (food bank use +37%) and speed of response (agricultural PES ≈ 0.2 in SR). A mixed approach – price mechanism plus emergency food support for low-income households – better addresses both dimensions.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Explain the supply shift mechanism',
      'Name and apply all three price mechanism functions',
      'State outcome for P and Q',
      'Evaluate equity and speed-of-response limitations'
    ],

    examAnswer: '"Ukraine war supply disruption shifted the food supply curve left from S₁ to S₂, raising prices from P₁ to P₂ and reducing output from Q₁ to Q₂. The price mechanism performed three functions: rationing existing supply through higher prices; signalling farmers to expand planting (UK wheat area +3%); and incentivising investment (farmland prices +14%). However, the rationing function was inequitable (food bank use +37%) and the supply response was slow (PES ≈ 0.2 in SR), suggesting a complementary role for targeted food support alongside the price mechanism."'
  }
};
