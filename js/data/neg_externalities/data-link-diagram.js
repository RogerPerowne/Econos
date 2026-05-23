/* ============================================================
   ECONOS — Link It · Diagram Connector data
   Negative Externalities: Pigouvian tax shifts supply left (MPC → MSC)
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   MSB (D):  (110,50)→(510,380)  slope = 0.825  ⟹  y = 50 + (x-110)*0.825
   MPC (S₁): (130,390)→(490,30)  slope = -1.0   ⟹  y = 520 - x
   MSC (S₂): (130,330)→(430,30)  MEC = 60px vertical gap above MPC  ⟹  y = 460 - x
   E₁ (MPC ∩ MSB): x ≈ 307, y ≈ 213  (market equilibrium)
   E₂ (MSC ∩ MSB): x ≈ 274, y ≈ 186  (social optimum)                           */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Negative Externalities',
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
    title:       'The government imposes a Pigouvian tax equal to the MEC on the cement plant. Which diagram correctly shows the effect on the market?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the Pigouvian tax. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      's-left',
        correct:  true,
        title:   'Supply shifts left',
        sub:     'The tax raises firms\' effective costs — output falls, price rises toward the social optimum',
        why:     'A Pigouvian tax equal to the MEC is added to the firm\'s costs, raising effective supply from MPC to MSC. The supply curve shifts left: at every price, firms supply less. Output falls from Q_market to Q* and price rises from P_market to P*, eliminating the deadweight welfare loss.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Consumer spending falls, reducing the quantity demanded at every price',
        why:     'The Pigouvian tax is levied on producers, not consumers. Demand (MSB) does not shift — consumers\' willingness to pay is unchanged. A leftward demand shift would represent a fall in consumer income or preferences, which is not what happens here.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Output rises and prices fall as supply expands',
        why:     'Supply shifting right means firms can produce more at every price — this represents falling costs or a technology improvement. A Pigouvian tax raises costs; it does not reduce them. This diagram shows the opposite of what a corrective tax does.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Rising consumer demand pushes up the price level',
        why:     'Demand shifting right represents rising consumer spending or income. The Pigouvian tax affects the supply side (firms\' costs), not the demand side. This diagram is irrelevant to the mechanism of a corrective tax.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🏭',
    text:  'The government imposes a Pigouvian tax equal to the MEC on the cement plant to internalise the cost of pollution.',
    dataPoints: [
      { icon: '💸', text: 'Tax = MEC at the social optimum Q*' },
      { icon: '📉', text: 'Effective supply shifts: MPC + tax = MSC' },
      { icon: '🌱', text: 'Third parties benefit as output falls to Q*' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram — Pigouvian tax correcting a negative production externality',
    xLabel:    'Quantity of output',
    yLabel:    'Price / Cost (£)',

    lines: [
      /* MSB (= D) — green downward-sloping */
      { x1: 110, y1: 50,  x2: 510, y2: 380, stroke: '#059669', strokeWidth: 2.5,
        label: 'MSB (D)', labelX: 514, labelY: 380, labelFill: '#059669' },
      /* MPC (S₁ — supply before tax) — blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'MPC (S₁)', labelX: 492, labelY: 28, labelFill: '#2563eb' },
      /* MSC (S₂ — supply after Pigouvian tax) — purple upward-sloping, 60px above MPC */
      { x1: 130, y1: 330, x2: 430, y2: 30,  stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'MSC (S₂)', labelX: 433, labelY: 28, labelFill: '#7c3aed' }
    ],

    /* Guide lines + tick labels — shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₂ (social optimum) */
      { x1: 100, y1: 186, x2: 274, y2: 186, tickLeft: 'P*',  tickLeftY: 189 },
      /* Horizontal from y-axis to E₁ (market equilibrium) */
      { x1: 100, y1: 213, x2: 307, y2: 213, tickLeft: 'P_m', tickLeftY: 216 },
      /* Vertical from E₂ down to x-axis */
      { x1: 274, y1: 186, x2: 274, y2: 400, tickBottom: 'Q*',  tickBottomX: 274 },
      /* Vertical from E₁ down to x-axis */
      { x1: 307, y1: 213, x2: 307, y2: 400, tickBottom: 'Q_m', tickBottomX: 307 }
    ],

    /* Shift arrow: from MPC toward MSC at y=80, pointing left */
    shiftArrow: { x1: 436, y1: 80, x2: 384, y2: 80, stroke: '#7c3aed' },

    eqDots: [
      {
        cx: 307, cy: 213, fill: '#2563eb',
        initLabel: 'Market', initLabel2: 'equilibrium', initLabelX: 314, initLabelY: 208
      },
      {
        cx: 274, cy: 186, fill: '#7c3aed',
        newLabel: 'Social', newLabel2: 'optimum', newLabelX: 281, newLabelY: 181
      }
    ],

    legend: [
      { color: '#059669', text: 'MSB = Marginal Social Benefit (Demand)' },
      { color: '#2563eb', text: 'MPC = Marginal Private Cost (Supply before tax)' },
      { color: '#7c3aed', text: 'MSC = Marginal Social Cost (Supply after Pigouvian tax)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector — Label the Diagram',
    title:       'Use the diagram to show the effect of a Pigouvian tax equal to the MEC.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',    label: 'Shift label',          pctX: 62,  pctY: 13.5, pctW: 22 },
      { id: 'soc-opt',  label: 'Social optimum',       pctX: 49,  pctY: 37,   pctW: 22 },
      { id: 'mkt-eq',   label: 'Market equilibrium',   pctX: 56,  pctY: 44,   pctW: 24 },
      { id: 'hi-price', label: 'Higher price (P*)',     pctX: 0.5, pctY: 38,   pctW: 17 },
      { id: 'lo-out',   label: 'Lower output (Q*)',     pctX: 42,  pctY: 93.5, pctW: 18 }
    ],

    chips: [
      { id: 'tax-shift',  text: 'Tax shifts supply left',       icon: '←', zone: 'shift',    correct: true  },
      { id: 'soc-opt',    text: 'Social optimum (Q*, P*)',      icon: '●', zone: 'soc-opt',  correct: true  },
      { id: 'mkt-eq',     text: 'Market equilibrium (Q_m)',     icon: '●', zone: 'mkt-eq',   correct: true  },
      { id: 'hi-price',   text: 'Higher price (P*)',            icon: '↑', zone: 'hi-price', correct: true  },
      { id: 'lo-out',     text: 'Lower output (Q*)',            icon: '↓', zone: 'lo-out',   correct: true  },
      { id: 'dem-left',   text: 'Demand falls (MSB shifts)',    icon: '←', zone: null,       correct: false },
      { id: 'hi-out',     text: 'Higher output (Q_market)',     icon: '↑', zone: null,       correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector — Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis — bridge the diagram shift into clear written analysis.',

    vocab: ['MPC', 'MEC', 'MSC', 'MSB', 'Q*', 'Q_market', 'Pigouvian tax', 'social optimum', 'deadweight welfare loss', 'internalise', 'allocative efficiency'],

    parts: [
      {
        num:         1,
        title:       'Explain the curves',
        prompt:      'Why does MSC sit above MPC, and what does the gap between them represent?',
        maxChars:    240,
        modelAnswer: 'MSC sits above MPC because MSC = MPC + MEC — the marginal external cost imposed on third parties (pollution, health damage) that the firm does not pay for. The vertical gap between the two curves is the MEC: the cost the free market ignores and the Pigouvian tax is designed to internalise.'
      },
      {
        num:         2,
        title:       'Explain the shift',
        prompt:      'What happens to price and quantity when the Pigouvian tax is imposed?',
        maxChars:    240,
        modelAnswer: 'The tax raises the firm\'s effective supply from MPC to MSC. The equilibrium shifts from E₁ (Q_market, P_market) to E₂ (Q*, P*): output falls from Q_market to Q* and price rises from P_market to P*. The deadweight welfare loss — the triangle between MSC and MSB from Q* to Q_market — is eliminated.'
      },
      {
        num:         3,
        title:       'Add a wider effect',
        prompt:      'Add one effect on third parties or allocative efficiency.',
        maxChars:    240,
        modelAnswer: 'Third parties benefit from reduced external harm — less pollution, lower respiratory illness and reduced NHS costs. Allocative efficiency is restored: society now produces the quantity at which the true cost of each unit (MSC) equals its true benefit (MSB). If the tax revenue is reinvested in green infrastructure, the welfare gain is further amplified.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Reference both MPC and MSC',
      'Explain the direction of the shift',
      'State the outcome for Q and P',
      'Name the welfare effect'
    ],

    examAnswer: '"A Pigouvian tax equal to the MEC raises the firm\'s effective marginal cost from MPC to MSC, shifting the supply curve left and reducing output from Q_market to Q* — the social optimum. Price rises from P_market to P*, internalising the external cost and eliminating the deadweight welfare loss that arises when the free market overproduces beyond Q*. Third parties benefit from reduced harm, and allocative efficiency is restored at the point where MSC = MSB."'
  }
};
