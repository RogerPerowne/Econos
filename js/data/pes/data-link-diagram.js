/* ============================================================
   ECONOS — Link It · Diagram Connector data
   PES: demand shifts right, near-vertical inelastic supply, steep price rise
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   S (steep/inelastic, PES ≈ 0.2): x1=200,y1=390, x2=290,y2=30  ⟹  y = 1190 - 4x
     verify: x=200 → y=1190-800=390 ✓; x=290 → y=1190-1160=30 ✓
   D₁ (original demand): x1=110,y1=90, x2=500,y2=363  slope≈0.7  ⟹  y = 13 + 0.7x
     verify: x=110 → y=13+77=90 ✓; x=500 → y=13+350=363 ✓
   D₂ (new demand, shifted right 60px): x1=170,y1=90, x2=543,y2=351  ⟹  y = -27 + 0.7x
     verify: x=170 → y=-27+119=92≈90; x=543 → y=-27+380=353≈351
   E₁ (S ∩ D₁): 1190-4x = 13+0.7x → 1177=4.7x → x≈250.4, y=1190-1002=188  → E₁=(250,188)
   E₂ (S ∩ D₂): 1190-4x = -27+0.7x → 1217=4.7x → x≈259.0, y=1190-1036=154  → E₂=(259,154)
   Key visual: x changes 9px (tiny Q rise), y changes 34px (large P rise) — inelastic supply confirmed */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Price Elasticity of Supply',
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
    title:       'Net migration surges, driving up rental demand. Housing supply is highly price inelastic in the short run. Which diagram correctly shows the market outcome?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the effect of the demand surge. Think about which curve shifts and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      'd-right',
        correct:  true,
        title:   'Demand shifts right',
        sub:     'Demand shifts right — rents rise steeply because inelastic supply cannot respond',
        why:     'Net migration and post-COVID urban return are non-price demand factors — they shift the demand curve right. At the original rent, quantity demanded exceeds quantity supplied. Rents rise until the market clears at the new equilibrium. Because PES ≈ 0.2 (near-vertical supply), almost all adjustment is through higher rents rather than more housing.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Supply expands — more housing at every price level',
        why:     'Supply shifting right would represent an increase in rental supply — for example, from a successful house-building programme. The scenario describes the problem: supply is constrained by long construction lead times and cannot respond quickly. Supply has not expanded; it is the demand that has surged.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Falling demand reduces rents and quantity',
        why:     'Demand shifting left represents a fall in the number of households seeking rental accommodation — perhaps due to falling incomes or population decline. This is the opposite of the scenario: record net migration and urban return increased rental demand sharply.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Supply contracts — rents rise and quantity falls',
        why:     'Supply shifting left would be the landlord exit effect — a real complicating factor in 2022–23. But the primary diagram for a demand surge with inelastic supply is a rightward demand shift, not a leftward supply shift. The steep (near-vertical) supply curve already captures the inelastic response; it does not need to shift left to model low PES.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🏠',
    text:  'UK net migration: 745,000 in 2023. New rental listings up only 1.3%. Rents up 9.4%.',
    dataPoints: [
      { icon: '📈', text: 'PES for rental housing ≈ 0.2 in short run (24–36 month build cycle)' },
      { icon: '🔴', text: 'Excess demand: more renters than available properties' },
      { icon: '💸', text: 'Rents rose 9.4% (ONS 2023) — fastest on record' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram — demand shifts right with near-vertical inelastic housing supply, producing a steep rent rise and tiny quantity increase',
    xLabel:    'Quantity of rental properties',
    yLabel:    'Rent (£)',

    lines: [
      /* S — near-vertical (PES ≈ 0.2, highly inelastic supply) */
      { x1: 200, y1: 390, x2: 290, y2: 30,  stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'S (PES ≈ 0.2)', labelX: 294, labelY: 28, labelFill: '#7c3aed' },
      /* D₁ — original demand, downward-sloping */
      { x1: 110, y1: 90,  x2: 500, y2: 363, stroke: '#059669', strokeWidth: 2.5,
        label: 'D₁', labelX: 504, labelY: 363, labelFill: '#059669' },
      /* D₂ — new demand, shifted right ~60px */
      { x1: 170, y1: 90,  x2: 543, y2: 351, stroke: '#d97706', strokeWidth: 2.5,
        label: 'D₂', labelX: 545, labelY: 349, labelFill: '#d97706' }
    ],

    /* Guide lines + tick labels — shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₂ (new equilibrium, higher rent) */
      { x1: 100, y1: 154, x2: 259, y2: 154, tickLeft: 'P₂', tickLeftY: 157 },
      /* Horizontal from y-axis to E₁ (original equilibrium) */
      { x1: 100, y1: 188, x2: 250, y2: 188, tickLeft: 'P₁', tickLeftY: 191 },
      /* Vertical from E₂ down to x-axis */
      { x1: 259, y1: 154, x2: 259, y2: 400, tickBottom: 'Q₂', tickBottomX: 259 },
      /* Vertical from E₁ down to x-axis */
      { x1: 250, y1: 188, x2: 250, y2: 400, tickBottom: 'Q₁', tickBottomX: 250 }
    ],

    /* Shift arrow: horizontal, pointing right, showing D shifts right */
    shiftArrow: { x1: 280, y1: 110, x2: 340, y2: 110, stroke: '#d97706' },

    eqDots: [
      {
        cx: 250, cy: 188, fill: '#059669',
        initLabel: 'Original rent', initLabel2: 'equilibrium', initLabelX: 257, initLabelY: 183
      },
      {
        cx: 259, cy: 154, fill: '#d97706',
        newLabel: 'New rent', newLabel2: 'equilibrium', newLabelX: 266, newLabelY: 149
      }
    ],

    legend: [
      { color: '#059669', text: 'D₁ = Original demand for rental housing' },
      { color: '#d97706', text: 'D₂ = New demand (after migration surge)' },
      { color: '#7c3aed', text: 'S = Supply of rental housing (PES ≈ 0.2 in SR — highly inelastic)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector — Label the Diagram',
    title:       'Use the diagram to show the effect of a demand surge on the rental housing market with inelastic supply.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for rent and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',       label: 'Shift label',                  pctX: 54,  pctY: 18,   pctW: 22 },
      { id: 'new-eq',      label: 'New equilibrium',               pctX: 47,  pctY: 28,   pctW: 20 },
      { id: 'orig-eq',     label: 'Original equilibrium',          pctX: 44,  pctY: 38,   pctW: 22 },
      { id: 'hi-price',    label: 'Sharply higher rent (P₂)',       pctX: 0.5, pctY: 28,   pctW: 17 },
      { id: 'lo-qty-rise', label: 'Tiny quantity rise (Q₂ ≈ Q₁)',  pctX: 42,  pctY: 93.5, pctW: 22 }
    ],

    chips: [
      { id: 'dem-right',   text: 'Demand shifts right',              icon: '→', zone: 'shift',       correct: true  },
      { id: 'new-eq',      text: 'New equilibrium (higher rent P₂)', icon: '●', zone: 'new-eq',      correct: true  },
      { id: 'orig-eq',     text: 'Original equilibrium (Q₁, P₁)',    icon: '●', zone: 'orig-eq',     correct: true  },
      { id: 'hi-price',    text: 'Sharply higher rent (P₂)',         icon: '↑', zone: 'hi-price',    correct: true  },
      { id: 'lo-qty-rise', text: 'Tiny quantity rise (Q₂ ≈ Q₁)',    icon: '→', zone: 'lo-qty-rise', correct: true  },
      { id: 'sup-right',   text: 'Supply shifts right',              icon: '→', zone: null,          correct: false },
      { id: 'large-qty',   text: 'Large quantity increase',          icon: '↑', zone: null,          correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector — Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis — bridge the diagram shift into clear written analysis.',

    vocab: ['price elasticity of supply', 'PES', 'supply response', 'price signal', 'inelastic', 'demand shift', 'equilibrium', 'consumer surplus', 'producer surplus', 'planning permission'],

    parts: [
      {
        num:         1,
        title:       'What does the steep supply curve represent?',
        prompt:      'What does the steep supply curve represent?',
        maxChars:    240,
        modelAnswer: 'PES is approximately 0.2 in the SR. The near-vertical supply line means that for any price increase, quantity supplied barely rises — because new builds take 24–36 months from planning to completion. Even a large rent rise sends a weak price signal that cannot unlock more housing quickly.'
      },
      {
        num:         2,
        title:       'What happens to rent and quantity when demand shifts right?',
        prompt:      'What happens to rent and quantity when demand shifts right?',
        maxChars:    240,
        modelAnswer: 'E₂ is almost directly above E₁: rent rises sharply from P₁ to P₂ while quantity increases only marginally from Q₁ to Q₂. Almost all of the demand shock is absorbed by higher rents, not by more housing — consistent with PES ≈ 0.2 in the short run.'
      },
      {
        num:         3,
        title:       'What are the welfare effects and what policy could help?',
        prompt:      'What are the welfare effects and what policy could help?',
        maxChars:    240,
        modelAnswer: 'Consumer surplus for tenants falls substantially — they pay higher rents for essentially the same housing. Landlords and developers gain. To restore equilibrium at lower rents, policy must increase supply elasticity: faster planning approvals, build-to-rent incentives, or social house-building to shift S right over the longer run.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Explain why supply is inelastic (reference time/planning)',
      'Relate PES to the steepness of supply curve',
      'State outcome for P and Q (large price rise, small quantity rise)',
      'Identify welfare or policy implication'
    ],

    examAnswer: '"The demand shift from record migration shifted the rental housing demand curve to the right. Because PES ≈ 0.2 in the short run — reflecting 24–36 month construction lead times — the supply curve is near-vertical. The new equilibrium E₂ is almost directly above E₁: rents rose 9.4% while the quantity of available rentals barely changed. Consumer surplus for tenants fell sharply, while the price signal (higher rents) will only translate into increased supply years later."'
  }
};
