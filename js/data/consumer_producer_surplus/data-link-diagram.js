/* ============================================================
   ECONOS — Link It · Diagram Connector data
   Consumer & Producer Surplus: per-unit bus subsidy shifts supply right
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   D (MSB): (110,50)→(510,380)  slope = 0.825  ⟹  y = −40.75 + 0.825x
   S₁:      (130,390)→(490,30)  slope = −1.0   ⟹  y = 520 − x
   S₂:      (210,390)→(543,57)  80px right shift ⟹  y = 600 − x
   E₁ (D ∩ S₁): x ≈ 307, y ≈ 213  (original higher fare)
   E₂ (D ∩ S₂): x ≈ 351, y ≈ 249  (new lower fare — higher SVG y = lower price) */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Consumer & Producer Surplus',
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
    title:       'The government introduces a per-unit operating subsidy for bus operators. Which diagram correctly shows the effect on the bus travel market?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the subsidy. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      's-right',
        correct:  true,
        title:   'Supply shifts right',
        sub:     'Supply shifts right — subsidy reduces effective costs, lowering fares and increasing bus journeys',
        why:     'A per-unit subsidy is paid to bus operators, reducing their effective marginal cost. At every fare level, operators can now profitably supply more journeys — supply shifts right from S₁ to S₂. Fares fall from P₁ to P₂ and journeys rise from Q₁ to Q₂, expanding consumer surplus.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Supply falls — wrong direction for a subsidy',
        why:     'Supply shifting left means producers face higher costs and supply less. A per-unit subsidy reduces costs — the opposite of a tax. A leftward supply shift would represent a cost increase (e.g. fuel price rise or a Pigouvian tax), not a government subsidy to operators.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Demand rises — but the subsidy goes to the producer, not the consumer',
        why:     'The bus subsidy is paid to operators, not passengers. Consumer willingness to pay is unchanged — demand does not shift. A rightward demand shift would represent rising consumer income or a change in preferences (e.g. higher petrol prices attracting more bus users), not a production subsidy.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Demand falls — wrong: no mechanism causes demand to fall',
        why:     'Nothing in the subsidy mechanism reduces consumer demand for bus travel. A leftward demand shift would require a fall in consumer income, a fall in petrol prices (reducing the incentive to use buses), or a negative preference shift — none of which is caused by a government operating subsidy.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🚌',
    text:  'UK bus operating subsidy: £2.5bn/yr. DfT estimates £2.40 return per £1 subsidy. London (high subsidy) saw fares stable; non-London fell 46% in journeys.',
    dataPoints: [
      { icon: '💰', text: 'Subsidy = per-unit reduction in operators\' marginal cost' },
      { icon: '📈', text: 'Fare falls from P₁ to P₂; quantity rises from Q₁ to Q₂' },
      { icon: '🌿', text: 'Positive externalities: congestion relief, lower carbon' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram — per-unit bus subsidy shifts supply right, lowering fares and raising quantity',
    xLabel:    'Quantity of bus journeys',
    yLabel:    'Fare / Cost (£)',

    lines: [
      /* D (MSB) — green downward-sloping */
      { x1: 110, y1: 50,  x2: 510, y2: 380, stroke: '#059669', strokeWidth: 2.5,
        label: 'D (MSB)', labelX: 514, labelY: 380, labelFill: '#059669' },
      /* S₁ (before subsidy) — blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S₁', labelX: 494, labelY: 28, labelFill: '#2563eb' },
      /* S₂ (after subsidy, 80px right shift) — purple upward-sloping */
      { x1: 210, y1: 390, x2: 543, y2: 57,  stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'S₂', labelX: 545, labelY: 55, labelFill: '#7c3aed' }
    ],

    /* Guide lines + tick labels */
    guides: [
      /* Horizontal from y-axis to E₁ (original higher fare P₁) */
      { x1: 100, y1: 213, x2: 307, y2: 213, tickLeft: 'P₁', tickLeftY: 216 },
      /* Horizontal from y-axis to E₂ (new lower fare P₂) */
      { x1: 100, y1: 249, x2: 351, y2: 249, tickLeft: 'P₂', tickLeftY: 252 },
      /* Vertical from E₁ down to x-axis */
      { x1: 307, y1: 213, x2: 307, y2: 400, tickBottom: 'Q₁', tickBottomX: 307 },
      /* Vertical from E₂ down to x-axis */
      { x1: 351, y1: 249, x2: 351, y2: 400, tickBottom: 'Q₂', tickBottomX: 351 }
    ],

    /* Shift arrow: S₁ toward S₂ at y=80, pointing right */
    shiftArrow: { x1: 380, y1: 80, x2: 450, y2: 80, stroke: '#7c3aed' },

    eqDots: [
      {
        cx: 307, cy: 213, fill: '#2563eb',
        initLabel: 'Original equilibrium', initLabel2: '(Q₁, P₁)', initLabelX: 314, initLabelY: 208
      },
      {
        cx: 351, cy: 249, fill: '#7c3aed',
        newLabel: 'New equilibrium', newLabel2: '(Q₂, P₂ lower)', newLabelX: 358, newLabelY: 255
      }
    ],

    legend: [
      { color: '#059669', text: 'D (MSB) = Demand for bus travel (Marginal Social Benefit)' },
      { color: '#2563eb', text: 'S₁ = Supply before subsidy (operators\' marginal private cost)' },
      { color: '#7c3aed', text: 'S₂ = Supply after subsidy (MPC − subsidy per unit)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector — Label the Diagram',
    title:       'Use the diagram to show the effect of a per-unit bus operating subsidy.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for fare and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',      label: 'Shift label',              pctX: 62,  pctY: 13,   pctW: 22 },
      { id: 'new-eq',     label: 'New equilibrium',           pctX: 63,  pctY: 49,   pctW: 22 },
      { id: 'orig-eq',    label: 'Original equilibrium',      pctX: 56,  pctY: 42,   pctW: 22 },
      { id: 'orig-price', label: 'Original fare (P₁)',        pctX: 0.5, pctY: 43,   pctW: 15 },
      { id: 'lo-fare',    label: 'Lower fare (P₂)',           pctX: 0.5, pctY: 50,   pctW: 16 }
    ],

    chips: [
      { id: 'sub-shift',  text: 'Supply shifts right (subsidy)', icon: '→', zone: 'shift',      correct: true  },
      { id: 'new-eq',     text: 'New equilibrium (Q₂, P₂)',      icon: '●', zone: 'new-eq',     correct: true  },
      { id: 'orig-eq',    text: 'Original equilibrium (Q₁, P₁)', icon: '●', zone: 'orig-eq',    correct: true  },
      { id: 'orig-price', text: 'Original fare (P₁)',             icon: '−', zone: 'orig-price', correct: true  },
      { id: 'lo-fare',    text: 'Lower fare (P₂)',                icon: '↓', zone: 'lo-fare',    correct: true  },
      { id: 'sup-left',   text: 'Supply shifts left',             icon: '←', zone: null,         correct: false },
      { id: 'dem-right',  text: 'Demand shifts right',            icon: '→', zone: null,         correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector — Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis — bridge the diagram shift into clear written analysis.',

    vocab: ['consumer surplus', 'producer surplus', 'per-unit subsidy', 'supply shift', 'welfare triangle', 'deadweight welfare loss', 'allocative efficiency', 'positive externality', 'marginal social benefit'],

    parts: [
      {
        num:         1,
        title:       'Explain the CS change',
        prompt:      'How does consumer surplus change when fares fall from P₁ to P₂?',
        maxChars:    240,
        modelAnswer: 'CS is the area above price and below the demand curve. Before the subsidy: CS = triangle above P₁ below D up to Q₁. After the subsidy: CS expands by the rectangle (P₁ − P₂) × Q₁ plus a small new triangle. More passengers travel at the lower fare P₂, gaining surplus they previously could not access.'
      },
      {
        num:         2,
        title:       'Explain the PS and subsidy cost',
        prompt:      'What happens to producer surplus and what does the subsidy cost?',
        maxChars:    240,
        modelAnswer: 'PS for operators: the subsidy payment supplements revenue. The subsidy cost is the per-unit amount × Q₂ = (the vertical gap between S₁ and S₂) × Q₂. Some of this cost is transfer from taxpayers to operators; some transfers to consumers as lower fares. Net welfare gain = CS gain + positive externality benefit − taxpayer cost.'
      },
      {
        num:         3,
        title:       'Add a wider welfare effect',
        prompt:      'Add one argument about positive externalities and allocative efficiency.',
        maxChars:    240,
        modelAnswer: 'If bus travel creates positive externalities (fewer car journeys, less congestion, lower carbon), MSB > MPB and the market under-provides bus travel even without the subsidy. The subsidy may be justified on allocative efficiency grounds: moving output toward Q* (where MSB = MSC). The DfT\'s £2.40 return per £1 estimate supports a net welfare gain.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Identify CS change (area above P below D)',
      'Explain direction of supply shift and why',
      'State outcome for fare (P) and quantity (Q)',
      'Assess net welfare effect including externalities'
    ],

    examAnswer: '"A per-unit bus operating subsidy shifts supply right from S₁ to S₂, lowering fares from P₁ to P₂ and raising journeys from Q₁ to Q₂. Consumer surplus expands by the area between P₁ and P₂ up to the demand curve — additional passengers gain access to bus travel. The subsidy costs taxpayers (subsidy × Q₂), but if positive externalities (congestion relief, carbon reduction) push MSB above the demand curve, the welfare gain to society exceeds the transfer cost. The DfT estimate of £2.40 benefit per £1 subsidy is consistent with a net welfare improvement."'
  }
};
