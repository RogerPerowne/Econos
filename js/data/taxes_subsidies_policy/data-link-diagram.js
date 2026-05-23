/* ============================================================
   ECONOS — Link It · Diagram Connector data
   Taxes & Subsidies as Policy: production subsidy shifts supply right (MPC → MPC−subsidy)
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   MSB (D):   (110,80)→(490,350)  slope = 0.711  ⟹  y = 80 + (x-110)*0.711
   S₁ (MPC):  (130,390)→(490,30)  slope = -1.0   ⟹  y = 520 - x
   S₂ (MPC−subsidy): (210,390)→(543,57)           ⟹  y = 600 - x  (80px shift right)
   E₁ (S₁ ∩ MSB): x ≈ 303, y ≈ 217  (market equilibrium — underproduction)
   E₂ (S₂ ∩ MSB): x ≈ 350, y ≈ 250  (social optimum after subsidy)              */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Taxes &amp; Subsidies as Policy',
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
    title:       'The government grants a production subsidy equal to the MEB to offshore wind producers. Which diagram correctly shows the market effect?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the production subsidy. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      's-right',
        correct:  true,
        title:   'Supply shifts right',
        sub:     'The subsidy reduces effective production costs — output rises toward Q*, price falls; underproduction is corrected',
        why:     'A production subsidy equal to the MEB reduces the firm\'s effective cost of supply, shifting the supply curve right. At every price, firms can now profitably supply more. Output rises from Q_market to Q* (the social optimum) and the consumer price falls from P₀ to P_s, eliminating the deadweight welfare loss from underproduction.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Rising consumer demand pushes up the price level',
        why:     'The production subsidy is paid to producers, not consumers. Demand (MSB) does not shift — consumers\' willingness to pay is unchanged. A rightward demand shift would represent rising consumer income or preferences, which is not the mechanism of a production subsidy.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Output falls and prices rise as supply contracts',
        why:     'Supply shifting left means producers face higher costs or a reduction in supply — this is the effect of a tax, not a subsidy. A production subsidy reduces effective costs and expands supply to the right. This diagram shows the opposite of what a corrective subsidy does.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Consumer spending falls, reducing the quantity demanded at every price',
        why:     'The production subsidy does not reduce consumer demand. Demand shifting left would represent a fall in consumer income or a change in preferences — neither of which is caused by a government subsidy to producers.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🌬️',
    text:  'The government grants a production subsidy equal to the MEB to offshore wind producers to correct the underproduction from a positive externality.',
    dataPoints: [
      { icon: '💸', text: 'Subsidy = MEB at the social optimum Q*' },
      { icon: '📈', text: 'Effective supply: MPC − subsidy = new lower cost curve' },
      { icon: '🌱', text: 'Output rises to Q*, eliminating the DWL from underproduction' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram — production subsidy correcting a positive externality (underproduction)',
    xLabel:    'Quantity of output',
    yLabel:    'Price / Cost (£)',

    lines: [
      /* MSB (= D) — green downward-sloping */
      { x1: 110, y1: 80,  x2: 490, y2: 350, stroke: '#059669', strokeWidth: 2.5,
        label: 'MSB (D)', labelX: 493, labelY: 350, labelFill: '#059669' },
      /* S₁ (MPC — supply before subsidy) — blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S₁ (MPC)', labelX: 492, labelY: 28, labelFill: '#2563eb' },
      /* S₂ (MPC−subsidy — supply after production subsidy) — purple upward-sloping, 80px right of S₁ */
      { x1: 210, y1: 390, x2: 543, y2: 57,  stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'S₂ (subsidy)', labelX: 514, labelY: 53, labelFill: '#7c3aed' }
    ],

    /* Guide lines + tick labels — shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₁ (original equilibrium price P₀) */
      { x1: 100, y1: 217, x2: 303, y2: 217, tickLeft: 'P₀',  tickLeftY: 220 },
      /* Horizontal from y-axis to E₂ (consumer price after subsidy P_s) */
      { x1: 100, y1: 250, x2: 350, y2: 250, tickLeft: 'P_s', tickLeftY: 253 },
      /* Vertical from E₁ down to x-axis */
      { x1: 303, y1: 217, x2: 303, y2: 400, tickBottom: 'Q₀',  tickBottomX: 303 },
      /* Vertical from E₂ down to x-axis */
      { x1: 350, y1: 250, x2: 350, y2: 400, tickBottom: 'Q_s', tickBottomX: 350 }
    ],

    /* Shift arrow: from S₁ toward S₂ at y=200, pointing right */
    shiftArrow: { x1: 324, y1: 200, x2: 396, y2: 200, stroke: '#7c3aed' },

    eqDots: [
      {
        cx: 303, cy: 217, fill: '#2563eb',
        initLabel: 'Original', initLabel2: 'equilibrium', initLabelX: 310, initLabelY: 212
      },
      {
        cx: 350, cy: 250, fill: '#7c3aed',
        newLabel: 'New', newLabel2: 'equilibrium', newLabelX: 357, newLabelY: 245
      }
    ],

    legend: [
      { color: '#059669', text: 'MSB (D) = Marginal Social Benefit (Demand)' },
      { color: '#2563eb', text: 'S₁ = MPC (supply before subsidy)' },
      { color: '#7c3aed', text: 'S₂ = MPC − subsidy (supply after production subsidy)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector — Label the Diagram',
    title:       'Use the diagram to show the effect of a production subsidy equal to the MEB.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',    label: 'Shift label',           pctX: 56,  pctY: 41,   pctW: 23 },
      { id: 'new-eq',   label: 'New equilibrium',        pctX: 63,  pctY: 51,   pctW: 22 },
      { id: 'pre-eq',   label: 'Original equilibrium',   pctX: 54,  pctY: 44,   pctW: 23 },
      { id: 'lo-price', label: 'Lower consumer price',   pctX: 0.5, pctY: 53,   pctW: 16 },
      { id: 'hi-out',   label: 'Higher output',          pctX: 56,  pctY: 93.5, pctW: 16 }
    ],

    chips: [
      { id: 'sub-shift', text: 'Subsidy shifts supply right', icon: '→', zone: 'shift',    correct: true  },
      { id: 'new-eq',    text: 'New equilibrium (Q_s, P_s)',  icon: '●', zone: 'new-eq',   correct: true  },
      { id: 'pre-eq',    text: 'Original equilibrium (Q₀)',   icon: '●', zone: 'pre-eq',   correct: true  },
      { id: 'lo-price',  text: 'Lower consumer price (P_s)',  icon: '↓', zone: 'lo-price', correct: true  },
      { id: 'hi-out',    text: 'Higher output (Q_s)',         icon: '↑', zone: 'hi-out',   correct: true  },
      { id: 'dem-right', text: 'Demand shifts right',         icon: '→', zone: null,       correct: false },
      { id: 'hi-price',  text: 'Consumer price rises',        icon: '↑', zone: null,       correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector — Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis — bridge the diagram shift into clear written analysis.',

    vocab: ['subsidy', 'MEB', 'MSB', 'MPC', 'MPB', 'Q*', 'Q_market', 'positive externality', 'underproduction', 'deadweight welfare loss', 'producer surplus', 'consumer surplus'],

    parts: [
      {
        num:         1,
        title:       'Explain the curves',
        prompt:      'Why does S₂ sit below and to the right of S₁, and what does the gap represent?',
        maxChars:    240,
        modelAnswer: 'The subsidy reduces the effective cost of production by the MEB amount per unit — producers now receive the market price plus the subsidy payment, making it profitable to supply more at each price. S₂ sits to the right of S₁ because the vertical distance between them equals the subsidy = MEB; this closes the gap between MPC and MSB, correcting the underproduction from the positive externality.'
      },
      {
        num:         2,
        title:       'Explain the shift',
        prompt:      'What happens to the consumer price and output level after the subsidy?',
        maxChars:    240,
        modelAnswer: 'The market equilibrium shifts from E₁ (Q₀, P₀) to E₂ (Q_s, P_s): consumer price falls from P₀ to P_s and output rises from Q₀ to Q_s (toward Q*). The deadweight welfare loss from underproduction — the triangle between MSB and MPC from Q_market to Q* — is eliminated as the socially optimal quantity is reached.'
      },
      {
        num:         3,
        title:       'Add a wider effect',
        prompt:      'Add one effect on external benefits or wider social welfare.',
        maxChars:    240,
        modelAnswer: 'As offshore wind output rises to Q_s, the MEB is delivered — carbon emissions fall, air quality improves and energy security increases; society gains the external benefit that the unsubsidised market would not have produced. If the subsidy is set exactly equal to the MEB at Q*, allocative efficiency is restored at the point where MSB = MPC.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Reference both S₁ (MPC) and S₂ (MPC − subsidy)',
      'Explain the direction of the shift',
      'State the outcome for Q and P',
      'Name the welfare effect'
    ],

    examAnswer: '"A production subsidy equal to the MEB reduces effective costs, shifting supply right from S₁ (MPC) to S₂ (MPC − subsidy) and raising output from Q₀ to Q_s — the social optimum. Consumer price falls from P₀ to P_s, and the deadweight welfare loss from underproduction is eliminated as the market now produces where MSB = MPC. Society gains the full marginal external benefit — reduced carbon, cleaner air and improved energy security — that the unsubsidised private market failed to deliver."'
  }
};
