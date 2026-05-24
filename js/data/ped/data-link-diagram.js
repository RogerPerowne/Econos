/* ============================================================
   ECONOS — Link It · Diagram Connector data
   PED: fuel duty raises supply costs — supply shifts left on inelastic demand
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   D (inelastic, steep): (200,30)→(420,390)  slope = 360/220 = 1.636  ⟹  y = 30 + (x−200)*1.636
   S₁ (pre-tax):  (130,390)→(490,30)  slope = −1.0  ⟹  y = 520 − x
   S₂ (post-tax): (130,320)→(420,30)  ⟹  y = 450 − x
   E₁ (S₁ ∩ D): 520−x = −297.3+1.636x  →  x ≈ 310, y ≈ 210
   E₂ (S₂ ∩ D): 450−x = −297.3+1.636x  →  x ≈ 284, y ≈ 166                */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Price Elasticity of Demand',
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
    title:       'The government raises fuel duty by 5p per litre. Petrol demand is highly price inelastic in the short run (PED ≈ −0.15). Which diagram correctly shows the market effect?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the fuel duty increase. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      's-left',
        correct:  true,
        title:   'Supply shifts left',
        sub:     'The tax raises producers\' costs — price rises significantly but quantity falls only a little because demand is inelastic',
        why:     'Fuel duty is levied on producers, raising their cost of supplying each litre of petrol. The supply curve shifts left: at every price, producers supply less. With highly inelastic demand (PED ≈ −0.15), the equilibrium price rises substantially from P₁ to P₂ while quantity falls only slightly from Q₁ to Q₂ — the steep demand curve visually captures this muted quantity response.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Consumer spending on petrol falls, reducing the quantity demanded at every price',
        why:     'Fuel duty is levied on producers, not consumers. Demand (consumers\' willingness to pay) does not shift — consumers\' preferences for petrol journeys are unchanged. A leftward demand shift would represent a fall in consumer income or a change in tastes, neither of which the duty directly causes.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Output rises and prices fall as supply expands',
        why:     'Supply shifting right means producers can supply more at every price — this represents falling costs or a technology improvement. Fuel duty raises producers\' costs; it does not reduce them. This diagram shows the opposite of the mechanism at work.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Rising consumer demand pushes up the price level',
        why:     'Demand shifting right represents an increase in consumers\' willingness to pay — perhaps from rising incomes or a preference shift. Fuel duty affects the supply side (producers\' costs). This diagram is irrelevant to the mechanism of an indirect tax.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '⛽',
    text:  'The government raises fuel duty by 5p per litre on petrol and diesel.',
    dataPoints: [
      '📉 PED ≈ −0.15 in the short run',
      '💸 Fuel duty = ~57p per litre currently',
      '🌱 Long-run PED rises to −0.6 as EVs become available'
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram — fuel duty tax on inelastic petrol demand',
    xLabel:    'Quantity of petrol',
    yLabel:    'Price (£ per litre)',

    lines: [
      /* D (inelastic) — green steep downward-sloping */
      { x1: 200, y1: 30,  x2: 420, y2: 390, stroke: '#059669', strokeWidth: 2.5,
        label: 'D (inelastic)', labelX: 424, labelY: 368, labelFill: '#059669' },
      /* S₁ (pre-tax) — blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S₁', labelX: 492, labelY: 28, labelFill: '#2563eb' },
      /* S₂ (post-tax, shifted left) — purple upward-sloping */
      { x1: 130, y1: 320, x2: 420, y2: 30,  stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'S₂ (+ tax)', labelX: 423, labelY: 28, labelFill: '#7c3aed' }
    ],

    /* Guide lines + tick labels — shown at stage 2 */
    guides: [
      { x1: 100, y1: 166, x2: 284, y2: 166, tickLeft: 'P₂', tickLeftY: 169 },
      { x1: 100, y1: 210, x2: 310, y2: 210, tickLeft: 'P₁', tickLeftY: 213 },
      { x1: 284, y1: 166, x2: 284, y2: 400, tickBottom: 'Q₂', tickBottomX: 284 },
      { x1: 310, y1: 210, x2: 310, y2: 400, tickBottom: 'Q₁', tickBottomX: 310 }
    ],

    /* Shift arrow pointing left — from S₁ toward S₂ */
    shiftArrow: { x1: 420, y1: 90, x2: 358, y2: 90, stroke: '#7c3aed' },

    eqDots: [
      {
        cx: 310, cy: 210, fill: '#2563eb',
        initLabel: 'Initial', initLabel2: 'equilibrium', initLabelX: 317, initLabelY: 205
      },
      {
        cx: 284, cy: 166, fill: '#7c3aed',
        newLabel: 'New', newLabel2: 'equilibrium', newLabelX: 291, newLabelY: 161
      }
    ],

    legend: [
      { color: '#059669', text: 'D = Demand (price inelastic — steep curve)' },
      { color: '#2563eb', text: 'S₁ = Supply before tax' },
      { color: '#7c3aed', text: 'S₂ = Supply after fuel duty increase' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector — Label the Diagram',
    title:       'Use the diagram to show the effect of raising fuel duty on an inelastic petrol market.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',    label: 'Shift label',              pctX: 62,  pctY: 14,   pctW: 22 },
      { id: 'new-eq',   label: 'New equilibrium',          pctX: 51,  pctY: 34,   pctW: 21 },
      { id: 'init-eq',  label: 'Initial equilibrium',      pctX: 56,  pctY: 44,   pctW: 22 },
      { id: 'hi-price', label: 'Higher price (P₂)',        pctX: 0.5, pctY: 34,   pctW: 17 },
      { id: 'lo-out',   label: 'Lower quantity (Q₂)',      pctX: 42,  pctY: 93.5, pctW: 18 }
    ],

    chips: [
      { id: 'tax-shift', text: 'Tax shifts supply left',        icon: '←', zone: 'shift',    correct: true  },
      { id: 'new-eq',    text: 'New equilibrium (Q₂, P₂)',      icon: '●', zone: 'new-eq',   correct: true  },
      { id: 'init-eq',   text: 'Initial equilibrium (Q₁, P₁)', icon: '●', zone: 'init-eq',  correct: true  },
      { id: 'hi-price',  text: 'Higher consumer price (P₂)',    icon: '↑', zone: 'hi-price', correct: true  },
      { id: 'lo-out',    text: 'Lower quantity (Q₂)',           icon: '↓', zone: 'lo-out',   correct: true  },
      { id: 'dem-left',  text: 'Demand shifts left',            icon: '←', zone: null,       correct: false },
      { id: 'big-drop',  text: 'Large fall in quantity',        icon: '↓', zone: null,       correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector — Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis — bridge the diagram shift into clear written analysis.',

    vocab: ['PED', 'price elasticity', 'inelastic', 'elastic', 'tax incidence', 'consumer burden', 'producer burden', 'revenue', 'short run', 'long run'],

    parts: [
      {
        num:         1,
        title:       'Explain the curves',
        prompt:      'What does the steep slope of the demand curve tell you about the PED for petrol?',
        maxChars:    240,
        modelAnswer: 'The steep slope signals that demand is price inelastic — PED lies between 0 and −1. A large price rise causes only a small fall in quantity demanded. In the short run, petrol drivers have few close substitutes: most journeys cannot easily switch to other transport modes, so consumers absorb the price rise rather than cutting consumption significantly.'
      },
      {
        num:         2,
        title:       'Explain the shift',
        prompt:      'What happens to price and quantity when the fuel duty is raised?',
        maxChars:    240,
        modelAnswer: 'Fuel duty raises producers\' costs, shifting supply left from S₁ to S₂. The equilibrium moves from (Q₁, P₁) to (Q₂, P₂): price rises substantially from P₁ to P₂, but quantity falls only a little from Q₁ to Q₂. The steep demand curve visually captures this: the new and old equilibria are close horizontally but far apart vertically, showing a large price rise with a muted quantity response.'
      },
      {
        num:         3,
        title:       'Add a wider effect',
        prompt:      'Who bears most of the tax burden and what does this imply for policy effectiveness?',
        maxChars:    240,
        modelAnswer: 'With inelastic demand, consumers bear most of the tax burden — the price they pay rises sharply while the price producers receive falls only a little. The small fall in quantity demanded means emissions barely decline, so the tax functions mainly as a revenue instrument rather than an effective environmental policy in the short run. In the long run, as EVs become substitutes, PED rises toward −0.6 and the same tax becomes more effective at reducing emissions.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Reference the steep demand curve and link it to inelastic PED',
      'Explain the direction of the supply shift',
      'State the outcome for Q and P',
      'Name the implication for tax incidence and emissions'
    ],

    examAnswer: '"Fuel duty is levied on producers, shifting supply left from S₁ to S₂ and raising the equilibrium price from P₁ to P₂. Because demand for petrol is highly price inelastic in the short run (PED ≈ −0.15), the steep demand curve means quantity demanded falls only a little from Q₁ to Q₂ despite the large price rise — consumers absorb most of the tax burden. As a result, the policy raises substantial government revenue but cuts emissions only marginally in the short run; its environmental effectiveness improves in the long run as electric vehicles become available and PED rises."'
  }
};
