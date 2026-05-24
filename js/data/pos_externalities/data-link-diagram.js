/* ============================================================
   ECONOS — Link It · Diagram Connector data
   Positive Externalities: NHS free provision shifts supply right (MPC → MPC−subsidy)
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   MPB (D):   (110,150)→(510,380)  slope = 0.575  ⟹  y = 86.75 + 0.575x
   MSB:       (110,70) →(510,300)  slope = 0.575  ⟹  y = 6.75 + 0.575x   (80px above MPB)
   MPC (S₁):  (130,390)→(490,30)   slope = -1.0   ⟹  y = 520 - x
   S₂ (NHS):  (210,390)→(543,57)   slope = -1.0   ⟹  y = 600 - x   (80px right of S₁)
   E_market (MPC ∩ MPB): 86.75+0.575x = 520-x → 1.575x = 433.25 → x≈275, y≈245
   E_social  (MPC ∩ MSB): 6.75+0.575x = 520-x  → 1.575x = 513.25 → x≈326, y≈194        */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Positive Externalities',
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
    eyebrow:     'Diagram Connector — Select the Diagram',
    title:       'The NHS provides free flu vaccinations to correct the underproduction caused by positive externalities. Which diagram correctly shows the effect on the vaccination market?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of free NHS provision. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      's-right',
        correct:  true,
        title:   'Supply shifts right',
        sub:     'Free provision reduces effective price to consumers, raising quantity toward the social optimum',
        why:     'NHS free provision eliminates the price barrier for consumers — the effective consumer cost falls to zero, below the market MPC. This is equivalent to a supply-side subsidy: the effective supply curve shifts right from MPC to MPC − subsidy (S₂). Output rises from Q_m to Q*, and coverage crosses the herd immunity threshold, fully realising the MEB.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Output falls and prices rise as supply contracts',
        why:     'Supply shifting left means costs rise or supply falls — the effect of a tax or a cost increase. NHS free provision reduces the effective cost to consumers and raises the quantity supplied at any given price. A leftward shift shows the opposite of what public provision achieves.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Consumer spending falls, reducing the quantity demanded at every price',
        why:     'Demand (MPB) shifting left would mean consumers value vaccination less — the opposite of what happens. NHS provision works on the supply and cost side: it removes the price barrier, not by changing MPB, but by making the effective price zero. D does not shift in this model.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Rising consumer demand pushes up the price level',
        why:     'A rightward demand shift would represent rising consumer willingness to pay — a change in MPB. NHS public provision does not increase consumer valuation; it reduces the effective price to zero. The primary mechanism is a supply-side shift, not a demand shift. Demand rising would push price up, which is not what free provision does.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '💉',
    text:  'NHS provides free vaccinations. MMR coverage: 95.1% (meets herd immunity threshold). Without provision: estimated 50% uptake.',
    dataPoints: [
      { icon: '🦠', text: 'MEB: each % point of MMR coverage prevents 24,000 measles cases/year' },
      { icon: '📈', text: 'NHS shifts effective supply right: Q_market (50%) → Q* (95%)' },
      { icon: '🤝', text: 'Herd immunity: unvaccinated individuals protected by others\' coverage' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram — NHS free provision correcting a positive consumption externality (underproduction)',
    xLabel:    'Quantity of vaccinations',
    yLabel:    'Price / Cost (£)',

    lines: [
      /* MPB (private demand = consumer benefit) — green downward-sloping */
      { x1: 110, y1: 150, x2: 510, y2: 380, stroke: '#059669', strokeWidth: 2.5,
        label: 'MPB (D)', labelX: 514, labelY: 380, labelFill: '#059669' },
      /* MSB (social demand = MPB + MEB) — darker green, dashed, 80px above MPB */
      { x1: 110, y1: 70,  x2: 510, y2: 300, stroke: '#16a34a', strokeWidth: 2,
        strokeDasharray: '6,3',
        label: 'MSB', labelX: 514, labelY: 300, labelFill: '#16a34a' },
      /* MPC (S₁ — supply before NHS provision) — blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'MPC (S₁)', labelX: 494, labelY: 28, labelFill: '#2563eb' },
      /* S₂ (after NHS free provision, 80px right of MPC) — purple upward-sloping */
      { x1: 210, y1: 390, x2: 543, y2: 57,  stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'S₂ (after NHS)', labelX: 450, labelY: 30, labelFill: '#7c3aed' }
    ],

    /* Guide lines + tick labels — shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E_social (social optimum) */
      { x1: 100, y1: 194, x2: 326, y2: 194, tickLeft: 'P*',  tickLeftY: 197 },
      /* Horizontal from y-axis to E_market (market equilibrium) */
      { x1: 100, y1: 245, x2: 275, y2: 245, tickLeft: 'P_m', tickLeftY: 248 },
      /* Vertical from E_social down to x-axis */
      { x1: 326, y1: 194, x2: 326, y2: 400, tickBottom: 'Q*',  tickBottomX: 326 },
      /* Vertical from E_market down to x-axis */
      { x1: 275, y1: 245, x2: 275, y2: 400, tickBottom: 'Q_m', tickBottomX: 275 }
    ],

    /* Shift arrow: from S₁ toward S₂ at y=80, pointing right */
    shiftArrow: { x1: 380, y1: 80, x2: 450, y2: 80, stroke: '#7c3aed' },

    eqDots: [
      {
        cx: 275, cy: 245, fill: '#2563eb',
        initLabel: 'Market', initLabel2: 'equilibrium (Q_m)', initLabelX: 282, initLabelY: 240
      },
      {
        cx: 326, cy: 194, fill: '#7c3aed',
        newLabel: 'Social', newLabel2: 'optimum (Q*)', newLabelX: 333, newLabelY: 189
      }
    ],

    legend: [
      { color: '#059669', text: 'MPB = Marginal Private Benefit (individual vaccination benefit)' },
      { color: '#16a34a', text: 'MSB = Marginal Social Benefit (MPB + MEB herd immunity)' },
      { color: '#2563eb', text: 'MPC (S₁) = Marginal Private Cost (before NHS provision)' },
      { color: '#7c3aed', text: 'S₂ = Effective supply after NHS free provision (MPC − subsidy)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector — Label the Diagram',
    title:       'Use the diagram to show the effect of NHS free vaccination provision.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',    label: 'Shift label',              pctX: 62,  pctY: 13,   pctW: 22 },
      { id: 'soc-opt',  label: 'Social optimum',           pctX: 59,  pctY: 37,   pctW: 20 },
      { id: 'mkt-eq',   label: 'Market equilibrium',       pctX: 49,  pctY: 48,   pctW: 22 },
      { id: 'meb-gap',  label: 'MEB gap (MSB − MPB)', pctX: 0.5, pctY: 37,   pctW: 16 },
      { id: 'hi-qty',   label: 'Higher quantity (Q*)',      pctX: 55,  pctY: 93.5, pctW: 18 }
    ],

    chips: [
      { id: 'supply-shift', text: 'Supply shifts right (NHS provision)', icon: '→', zone: 'shift',   correct: true  },
      { id: 'soc-opt',      text: 'Social optimum (Q*, P*)',             icon: '●', zone: 'soc-opt', correct: true  },
      { id: 'mkt-eq',       text: 'Market equilibrium (Q_m)',            icon: '●', zone: 'mkt-eq',  correct: true  },
      { id: 'meb-gap',      text: 'MEB gap (MSB − MPB)',            icon: '↕', zone: 'meb-gap', correct: true  },
      { id: 'hi-qty',       text: 'Higher quantity (Q*)',                icon: '↑', zone: 'hi-qty',  correct: true  },
      { id: 'sup-left',     text: 'Supply shifts left',                  icon: '←', zone: null,      correct: false },
      { id: 'dem-right',    text: 'Demand shifts right',                 icon: '→', zone: null,      correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector — Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis — bridge the diagram shift into clear written analysis.',

    vocab: ['MPB', 'MEB', 'MSB', 'MPC', 'Q*', 'Q_market', 'positive externality', 'herd immunity', 'underproduction', 'deadweight welfare loss', 'social optimum', 'direct provision', 'subsidy'],

    parts: [
      {
        num:         1,
        title:       'Explain why MSB sits above MPB',
        prompt:      'Why does MSB sit above MPB, and what does the vertical gap between them represent?',
        maxChars:    240,
        modelAnswer: 'MSB = MPB + MEB. The MEB is the herd immunity benefit: when you vaccinate, you protect not just yourself but also unvaccinated and vulnerable people who cannot be immunised. The vertical gap between MSB and MPB at every quantity represents this external benefit — which the market ignores because individuals only consider MPB when deciding whether to vaccinate.'
      },
      {
        num:         2,
        title:       'Explain the shift from Q_m to Q*',
        prompt:      'What happens to quantity when the NHS provides free vaccinations?',
        maxChars:    240,
        modelAnswer: 'Free NHS provision reduces the effective cost to consumers to zero (below MPC), shifting effective supply right from S₁ to S₂. The equilibrium moves from E_market (Q_m, P_m) to E_social (Q*, P*): quantity rises from Q_market to Q*. More people vaccinate because there is no price barrier. Coverage crosses the herd immunity threshold, fully realising the MEB.'
      },
      {
        num:         3,
        title:       'Evaluate: direct provision vs subsidy',
        prompt:      'Is direct provision always better than a partial subsidy for correcting this externality?',
        maxChars:    240,
        modelAnswer: 'Direct provision (free at point of use) fully removes the price barrier, achieving Q* reliably. A partial subsidy that reduces price but does not eliminate it may still leave Q below Q* if the remaining price deters price-sensitive individuals. However, direct provision has a higher fiscal cost — a targeted subsidy might achieve near-Q* at lower cost where uptake is driven by convenience rather than price sensitivity. If non-vaccinators refuse on ideological grounds, neither approach achieves Q*.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Explain MEB and why MSB > MPB',
      'State that market produces Q_m < Q* (underproduction)',
      'Explain supply shift mechanism',
      'Evaluate direct provision vs subsidy'
    ],

    examAnswer: '"The positive consumption externality from vaccination (herd immunity = MEB) means MSB > MPB — the free market produces Q_m < Q*, leaving a deadweight welfare loss. NHS free provision shifts effective supply right from S₁ to S₂, removing the price barrier and raising coverage to Q*. MMR coverage of 95.1% meets the herd immunity threshold — the MEB is fully internalised. Direct provision outperforms a partial subsidy here because it reaches price-sensitive and convenience-sensitive groups simultaneously."'
  }
};
