/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Indirect Taxes & Subsidies: specific tax shifts supply left (S₁ → S₂)
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   D (demand): (110,60)→(510,360)  slope = 0.75  ⟹  y = 60 + (x-110)*0.75
   S₁ (pre-tax): (130,390)→(490,30)  slope = -1.0   ⟹  y = 520 - x
   S₂ (post-tax): (130,310)→(400,30)  80px above S₁  ⟹  y = 440 - x
   E₁ (S₁ ∩ D): 520-x = 60+(x-110)*0.75 → 520-x = -22.5+0.75x → 542.5 = 1.75x → x ≈ 310, y ≈ 210
   E₂ (S₂ ∩ D): 440-x = 60+(x-110)*0.75 → 440-x = -22.5+0.75x → 462.5 = 1.75x → x ≈ 264, y ≈ 176
   P_p at Q_t: S₁ at x=264: y = 520-264 = 256                                           */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Indirect Taxes &amp; Subsidies',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('depends'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: -1,

  /* ── Stage 0: Select the right diagram ── */
  select: {
    eyebrow:     'Diagram Connector – Select the Diagram',
    title:       'The government imposes a specific tax on producers of high-sugar soft drinks. Which diagram correctly shows the effect on the market?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the specific tax. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      's-left',
        correct:  true,
        title:   'Supply shifts left',
        sub:     'Higher production costs from the tax reduce supply at every price level',
        why:     'A specific tax levied on producers raises their marginal cost of production at every quantity – they must now remit £0.24 per litre to government on top of their existing costs. This shifts the supply curve left (upward) by the amount of the tax. The equilibrium consumer price rises to P_c, the producer net price falls to P_p, and output falls from Q₀ to Q_t.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Consumer spending falls, reducing the quantity demanded at every price',
        why:     'The specific tax is levied on producers, not consumers. Consumers\' willingness to pay is unchanged – they face higher prices only because the supply shift raises the equilibrium price. Demand (D) does not shift. A leftward demand shift would represent a fall in consumer income or preferences, which is not what happens when a producer tax is imposed.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Output rises and prices fall as supply expands',
        why:     'Supply shifting right means firms can produce more at every price – this represents falling costs, a technology improvement or a subsidy. A specific tax raises producers\' costs; it does not reduce them. This diagram shows the opposite direction from what a specific tax creates.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Rising consumer demand pushes up the price level',
        why:     'Demand shifting right represents rising consumer spending, income or preferences. The specific tax affects the supply side (producers\' costs), not the demand side. Consumers\' willingness to pay per unit is unchanged – the higher price they face is a result of the supply shift, not a cause of a demand shift.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🍭',
    text:  'The government imposes a specific tax on producers of high-sugar soft drinks.',
    dataPoints: [
      { icon: '💸', text: 'Tax = £0.24 per litre on high-sugar drinks' },
      { icon: '📉', text: 'Supply shifts left by the tax amount at every quantity' },
      { icon: '⚖️', text: 'Incidence split by PED and PES' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – specific indirect tax on high-sugar soft drinks',
    xLabel:    'Quantity of output',
    yLabel:    'Price / Cost (£)',

    lines: [
      /* D (demand) – green downward-sloping */
      { x1: 110, y1: 60,  x2: 510, y2: 360, stroke: '#059669', strokeWidth: 2.5,
        label: 'D', labelX: 514, labelY: 360, labelFill: '#059669' },
      /* S₁ (pre-tax supply) – blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S₁ (pre-tax)', labelX: 492, labelY: 28, labelFill: '#2563eb' },
      /* S₂ (post-tax supply, 80px above S₁) – purple upward-sloping */
      { x1: 130, y1: 310, x2: 400, y2: 30,  stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'S₂ (+ tax)', labelX: 403, labelY: 28, labelFill: '#7c3aed' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₂ (consumer price P_c) */
      { x1: 100, y1: 176, x2: 264, y2: 176, tickLeft: 'P_c', tickLeftY: 179 },
      /* Horizontal from y-axis to P_p (producer price = S₁ at Q_t) */
      { x1: 100, y1: 256, x2: 264, y2: 256, tickLeft: 'P_p', tickLeftY: 259 },
      /* Vertical from E₂ down to x-axis */
      { x1: 264, y1: 176, x2: 264, y2: 400, tickBottom: 'Q_t', tickBottomX: 264 },
      /* Vertical from E₁ down to x-axis */
      { x1: 310, y1: 210, x2: 310, y2: 400, tickBottom: 'Q₀', tickBottomX: 310 }
    ],

    /* Shift arrow: from S₁ toward S₂ at y=120, pointing left */
    shiftArrow: { x1: 396, y1: 120, x2: 324, y2: 120, stroke: '#7c3aed' },

    eqDots: [
      {
        cx: 310, cy: 210, fill: '#2563eb',
        initLabel: 'Pre-tax', initLabel2: 'equilibrium', initLabelX: 317, initLabelY: 205
      },
      {
        cx: 264, cy: 176, fill: '#7c3aed',
        newLabel: 'Post-tax', newLabel2: 'equilibrium', newLabelX: 271, newLabelY: 171
      }
    ],

    legend: [
      { color: '#059669', text: 'D = Demand (Marginal Social Benefit)' },
      { color: '#2563eb', text: 'S₁ = Supply before tax (MPC)' },
      { color: '#7c3aed', text: 'S₂ = Supply after specific tax (MPC + tax)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of a specific tax on high-sugar soft drinks.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria, and the outcome for consumer price, producer price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',      label: 'Shift label',          pctX: 62,  pctY: 23,   pctW: 22 },
      { id: 'post-eq',    label: 'Post-tax equilibrium', pctX: 47,  pctY: 36,   pctW: 23 },
      { id: 'pre-eq',     label: 'Pre-tax equilibrium',  pctX: 56,  pctY: 44,   pctW: 23 },
      { id: 'cons-price', label: 'Consumer price (P_c)', pctX: 0.5, pctY: 37,   pctW: 16 },
      { id: 'prod-price', label: 'Producer price (P_p)', pctX: 0.5, pctY: 54,   pctW: 16 }
    ],

    chips: [
      { id: 'tax-shift',   text: 'Tax shifts supply left',     icon: '←', zone: 'shift',      correct: true  },
      { id: 'post-eq',     text: 'Post-tax equilibrium (Q_t)', icon: '●', zone: 'post-eq',    correct: true  },
      { id: 'pre-eq',      text: 'Pre-tax equilibrium (Q₀)',   icon: '●', zone: 'pre-eq',     correct: true  },
      { id: 'cons-price',  text: 'Consumer price (P_c)',       icon: '↑', zone: 'cons-price', correct: true  },
      { id: 'prod-price',  text: 'Producer price (P_p)',       icon: '↓', zone: 'prod-price', correct: true  },
      { id: 'dem-left',    text: 'Demand shifts left',         icon: '←', zone: null,         correct: false },
      { id: 'price-falls', text: 'Consumer price falls',       icon: '↓', zone: null,         correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['specific tax', 'incidence', 'P_c', 'P_p', 'PED', 'PES', 'consumer surplus', 'deadweight welfare loss', 'pass-through'],

    parts: [
      {
        num:         1,
        title:       'Explain the supply shift',
        prompt:      'Explain what a specific tax does to the supply curve and why.',
        maxChars:    240,
        modelAnswer: 'A specific tax of £0.24 per litre raises producers\' marginal cost at every quantity – they must remit the tax to government on every unit produced. The supply curve shifts left (upward) by exactly the tax amount at every quantity level, since producers require a higher market price to supply the same quantity as before. S₁ shifts up to S₂, with a constant vertical gap equal to the per-unit tax.'
      },
      {
        num:         2,
        title:       'Explain the new equilibrium',
        prompt:      'What happens to P_c, P_p and Q after the tax is imposed?',
        maxChars:    240,
        modelAnswer: 'At the new equilibrium (E₂), the consumer price rises to P_c (read off the demand curve at Q_t) and output falls from Q₀ to Q_t. Producers do not receive the full P_c – after remitting the tax, their net price is P_p, read off the original supply curve S₁ at Q_t. The vertical wedge between P_c and P_p equals the per-unit tax. Neither side bears the full tax; the burden is shared between consumers (who pay more) and producers (who receive less).'
      },
      {
        num:         3,
        title:       'Explain the incidence split',
        prompt:      'Who bears more of the tax burden here, and what determines the split?',
        maxChars:    240,
        modelAnswer: 'The incidence of the tax is determined by the relative price elasticities of demand (PED) and supply (PES). When demand is relatively inelastic – as with high-sugar drinks where consumers have few close substitutes – consumers cannot easily reduce quantity and so bear a larger share of the tax as a higher price. When supply is relatively inelastic, producers cannot redirect output and bear more. The less elastic side always carries the larger burden: the steeper the demand curve relative to the supply curve, the more consumers pay.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Explain the direction of the supply shift and why it occurs',
      'State the outcome for P_c, P_p and Q',
      'Identify the tax wedge between P_c and P_p',
      'Link the incidence split to PED and PES'
    ],

    examAnswer: '"A specific tax of £0.24 per litre raises producers\' marginal costs, shifting the supply curve left from S₁ to S₂ by the full tax amount at every quantity. The new equilibrium has a higher consumer price P_c and a lower producer net price P_p = P_c − tax, with output falling from Q₀ to Q_t. The tax wedge between P_c and P_p equals the per-unit tax, and the burden is split between consumers and producers in proportion to their relative inelasticity – when demand is inelastic, consumers bear the larger share of the burden."'
  }
};
