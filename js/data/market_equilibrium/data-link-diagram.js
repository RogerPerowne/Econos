/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Market Equilibrium: demand shifts right, inelastic supply, new equilibrium
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   S (steep/inelastic): x1=130,y1=390, x2=370,y2=30  ⟹  y = 585 - 1.5x
   D₁ (original demand): x1=110,y1=80, x2=510,y2=360  ⟹  y = 80 + (x-110)*0.7
   D₂ (demand +60px right): x1=170,y1=80, x2=540,y2=339  ⟹  y = -39 + 0.7x
   E₁ (S ∩ D₁): x≈265, y≈188  (original equilibrium: P₁, Q₁)
   E₂ (S ∩ D₂): x≈284, y≈159  (new equilibrium: P₂, Q₂)
   Higher P (lower y) and higher Q (higher x) – demand shift right confirmed */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Market Equilibrium',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 2,

  /* ── Stage 0: Select the right diagram ── */
  select: {
    eyebrow:     'Diagram Connector – Select the Diagram',
    title:       'Population growth and rising incomes increase the demand for housing in a UK city. Supply is constrained by planning restrictions. Which diagram shows the market response?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the demand increase. Think about which curve shifts and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      'd-right',
        correct:  true,
        title:   'Demand shifts right',
        sub:     'Rising demand creates a shortage at the old rent; rents rise; quantity supplied increases slowly (inelastic supply); new equilibrium at higher P and Q',
        why:     'Population growth and rising incomes are non-price demand factors – they shift the demand curve right. At the original rent P₁, quantity demanded now exceeds quantity supplied, creating a housing shortage. Rents rise until the market clears at the new equilibrium E₂ (P₂, Q₂). With inelastic supply (PES ≈ 0.4), quantity supplied responds only modestly, so P₂ is significantly above P₁ while Q₂ is only slightly above Q₁.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Falling demand creates a surplus, pushing rents down to a new lower equilibrium',
        why:     'Demand shifting left represents a fall in the number of households wanting to rent – perhaps due to falling incomes or population decline. This is the opposite of the scenario: rising incomes and population growth increase demand, not reduce it.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Reduced supply at every price pushes rents up and quantity down',
        why:     'Supply shifting left represents a reduction in the amount of housing available at every rent level – for example if landlords exit the market or properties are demolished. The scenario describes a demand shock (population and income growth), not a supply reduction. Supply is slow to respond but has not actually fallen.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'More housing at every price level lowers rents and raises quantity supplied',
        why:     'Supply shifting right would represent an increase in housing supply – such as a successful housebuilding programme. The scenario describes the problem: supply is constrained by planning restrictions and responds slowly to the demand increase. A rightward supply shift would be the solution, not the initial market response.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🏠',
    text:  'Population growth and rising incomes increase the demand for housing in a UK city. Supply is constrained by planning restrictions.',
    dataPoints: [
      { icon: '📊', text: 'London rents +11.2% in 2023' },
      { icon: '🏗️', text: 'PES of housing supply ≈ 0.4 (inelastic)' },
      { icon: '📉', text: 'Housing completions 44% below needed' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – demand shifts right with inelastic housing supply, creating a new equilibrium at higher rent and quantity',
    xLabel:    'Quantity of housing',
    yLabel:    'Rent (£)',

    lines: [
      /* S – steep upward-sloping (inelastic housing supply) */
      { x1: 130, y1: 390, x2: 370, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S', labelX: 373, labelY: 28, labelFill: '#2563eb' },
      /* D₁ – original demand, downward-sloping */
      { x1: 110, y1: 80,  x2: 510, y2: 360, stroke: '#059669', strokeWidth: 2.5,
        label: 'D₁', labelX: 514, labelY: 360, labelFill: '#059669' },
      /* D₂ – new demand, shifted right 60px */
      { x1: 170, y1: 80,  x2: 540, y2: 339, stroke: '#059669', strokeWidth: 2.5,
        label: 'D₂', labelX: 514, labelY: 320, labelFill: '#059669' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₂ (new equilibrium, higher rent) */
      { x1: 100, y1: 159, x2: 284, y2: 159, tickLeft: 'P₂', tickLeftY: 162 },
      /* Horizontal from y-axis to E₁ (original equilibrium) */
      { x1: 100, y1: 188, x2: 265, y2: 188, tickLeft: 'P₁', tickLeftY: 191 },
      /* Vertical from E₂ down to x-axis */
      { x1: 284, y1: 159, x2: 284, y2: 400, tickBottom: 'Q₂', tickBottomX: 284 },
      /* Vertical from E₁ down to x-axis */
      { x1: 265, y1: 188, x2: 265, y2: 400, tickBottom: 'Q₁', tickBottomX: 265 }
    ],

    /* Shift arrow: horizontal, pointing right, at y=240 between D₁ and D₂ */
    shiftArrow: { x1: 343, y1: 240, x2: 391, y2: 240, stroke: '#059669' },

    eqDots: [
      {
        cx: 265, cy: 188, fill: '#059669',
        initLabel: 'Original', initLabel2: 'equilibrium', initLabelX: 272, initLabelY: 183
      },
      {
        cx: 284, cy: 159, fill: '#059669',
        newLabel: 'New', newLabel2: 'equilibrium', newLabelX: 291, newLabelY: 154
      }
    ],

    legend: [
      { color: '#2563eb', text: 'S = Housing supply (inelastic, PES ≈ 0.4)' },
      { color: '#059669', text: 'D₁ = Original demand' },
      { color: '#059669', text: 'D₂ = New demand (after population growth and rising incomes)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of rising demand on the housing market.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for rent and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',    label: 'Shift label',           pctX: 55,  pctY: 50,   pctW: 22 },
      { id: 'new-eq',   label: 'New equilibrium',        pctX: 51,  pctY: 31,   pctW: 21 },
      { id: 'init-eq',  label: 'Original equilibrium',   pctX: 47,  pctY: 38,   pctW: 23 },
      { id: 'hi-price', label: 'Higher rent (P₂)',        pctX: 0.5, pctY: 31,   pctW: 17 },
      { id: 'hi-out',   label: 'Higher quantity (Q₂)',    pctX: 44,  pctY: 93.5, pctW: 18 }
    ],

    chips: [
      { id: 'dem-right', text: 'Demand shifts right',       icon: '→', zone: 'shift',    correct: true  },
      { id: 'new-eq',    text: 'New equilibrium (Q₂, P₂)',  icon: '●', zone: 'new-eq',   correct: true  },
      { id: 'init-eq',   text: 'Original equilibrium (Q₁)', icon: '●', zone: 'init-eq',  correct: true  },
      { id: 'hi-price',  text: 'Higher rent (P₂)',          icon: '↑', zone: 'hi-price', correct: true  },
      { id: 'hi-out',    text: 'Higher quantity (Q₂)',      icon: '↑', zone: 'hi-out',   correct: true  },
      { id: 'dem-left',  text: 'Demand shifts left',        icon: '←', zone: null,       correct: false },
      { id: 'lo-price',  text: 'Lower rent (P₁)',           icon: '↓', zone: null,       correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['demand', 'supply', 'equilibrium', 'shortage', 'price mechanism', 'PES', 'price signal', 'long run', 'short run', 'allocative efficiency'],

    parts: [
      {
        num:         1,
        title:       'Explain why demand shifts and what happens at the original rent',
        prompt:      'Why does demand shift right, and what immediately happens at the original rent?',
        maxChars:    240,
        modelAnswer: 'Rising incomes and population growth mean more households are willing and able to pay for housing at every price level – the demand curve shifts right from D₁ to D₂. At the original rent P₁, quantity demanded now exceeds quantity supplied, creating a housing shortage. Landlords facing excess demand respond by raising rents.'
      },
      {
        num:         2,
        title:       'Explain the adjustment to the new equilibrium',
        prompt:      'What happens to rent and quantity as the market adjusts to the new equilibrium?',
        maxChars:    240,
        modelAnswer: 'Rents rise from P₁ to P₂ – higher prices signal scarcity and profitability, attracting new supply. Quantity supplied increases from Q₁ to Q₂. However, with inelastic supply (PES ≈ 0.4), the quantity response is small relative to the rent increase. The new equilibrium E₂ involves significantly higher rent and only modestly more housing.'
      },
      {
        num:         3,
        title:       'Explain what the steepness of the supply curve tells us',
        prompt:      'What does the steepness of the supply curve tell us about the effectiveness of the price mechanism here?',
        maxChars:    240,
        modelAnswer: 'A steep supply curve means housing supply is price inelastic (PES ≈ 0.4). The price mechanism is slow and limited: rents must rise substantially before quantity supplied increases even a little. This reflects structural constraints – planning restrictions, land costs, long construction times – that block the market from clearing the shortage quickly. The price mechanism works in direction but not in magnitude.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Identify the non-price demand factor that causes the shift',
      'Explain the shortage and upward pressure on rents',
      'State the outcome for rent (P) and quantity (Q)',
      'Link the inelastic supply to the slow, limited market adjustment'
    ],

    examAnswer: '"Population growth and rising incomes shift the demand curve for housing right from D₁ to D₂, creating a shortage at the original rent P₁ and driving rents upward to P₂. The price mechanism signals scarcity: higher rents attract new supply and quantity rises from Q₁ to Q₂. However, with price elasticity of supply at only 0.4, the quantity response is small relative to the rent increase – the new equilibrium at E₂ involves substantially higher rents with only a modest increase in housing supply, demonstrating that an inelastic supply curve limits the market\'s ability to self-correct."'
  }
};
