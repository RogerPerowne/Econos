/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Government Failure: demand shifts right on steep inelastic housing supply
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378

   S (steep inelastic housing supply, PES ≈ 0.4):
     (200,390)→(280,30)   slope = (30-390)/(280-200) = -360/80 = -4.5
     y = 1290 - 4.5x
     Check: x=200 → y=1290-900=390 ✓; x=280 → y=1290-1260=30 ✓

   D₁ (original demand):
     (110,80)→(490,360)   slope = (360-80)/(490-110) = 280/380 ≈ 0.737
     y = 0.737x - 1.1  (≈ 0.737x)

   D₂ (demand after Help to Buy, shifted +60px right):
     (170,80)→(543,354)   y = 0.737(x-60) = 0.737x - 44.2

   E₁ (D₁ ∩ S):  0.737x = 1290 - 4.5x  →  5.237x = 1290  →  x ≈ 246, y ≈ 182
   E₂ (D₂ ∩ S):  0.737x - 44.2 = 1290 - 4.5x  →  5.237x = 1334.2  →  x ≈ 255, y ≈ 144

   Key visual: ΔQ = 9px (tiny quantity rise), ΔP = 38px upward (large price rise)
   → government failure shown: price jumps, quantity barely moves             */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Government Failure',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('depends'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.routes.link('extract') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: -1,

  /* ── Stage 0: Select the right diagram ── */
  select: {
    eyebrow:     'Diagram Connector – Select the Diagram',
    title:       'Help to Buy equity loans increase first-time buyer purchasing power. UK housing supply is highly inelastic (PES ≈ 0.4). Which diagram correctly shows the market outcome?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the Help to Buy effect. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      'd-right',
        correct:  true,
        title:   'Demand shifts right',
        sub:     'Demand shifts right – subsidy raises buyer purchasing power, but inelastic supply means prices rise mainly rather than output increasing',
        why:     'Help to Buy equity loans raise effective purchasing power for first-time buyers – a demand-side subsidy. The demand curve shifts right from D₁ to D₂. Because housing supply is highly inelastic (PES ≈ 0.4), the supply curve is very steep. The new equilibrium is almost directly above the old one: a large price rise (P₁ → P₂) with barely any increase in quantity (Q₁ → Q₂). This is the government failure mechanism – demand stimulus absorbed into prices, not output.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Supply expands – more homes are built at every price level',
        why:     'A rightward supply shift would represent planning reform, faster construction, or lower build costs – which is exactly what Help to Buy did NOT address. Help to Buy was a demand-side subsidy only; it left housing supply constraints (planning restrictions, labour shortages, land costs) entirely unchanged. This is the core of the government failure: supply was not addressed.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Demand falls – buyers\' willingness to pay decreases',
        why:     'A leftward demand shift would require something that reduces buyers\' purchasing power or willingness to pay – such as rising interest rates, falling incomes, or regulatory restrictions on mortgages. Help to Buy did the opposite: it increased purchasing power through an equity loan subsidy. The direction is wrong.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Supply contracts – fewer homes are built at every price level',
        why:     'A leftward supply shift would represent rising construction costs, labour shortages worsening, or regulatory tightening of building permissions. Help to Buy had no direct effect on supply costs – and housebuilders responded to higher demand by raising prices, not reducing output. The supply curve was not shifted by Help to Buy.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🏗️',
    text:  'Help to Buy 2013–23: 310,000 homes supported. OBR: scheme added £8,000 to average new-build price. Developer margins hit record 21%.',
    dataPoints: [
      { icon: '📈', text: 'PES for new housing ≈ 0.4 – planning constraints prevent quick supply rise' },
      { icon: '💰', text: 'Demand stimulus: equity loans up to 20% of purchase price' },
      { icon: '⚠️', text: 'Government failure: prices rose, developers captured windfall' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – Help to Buy demand stimulus with inelastic housing supply',
    xLabel:    'Quantity of new homes',
    yLabel:    'Price (£)',

    lines: [
      /* S (steep inelastic housing supply, PES ≈ 0.4) – purple upward-sloping steep */
      { x1: 200, y1: 390, x2: 280, y2: 30,  stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'S (PES ≈ 0.4)', labelX: 284, labelY: 28, labelFill: '#7c3aed' },
      /* D₁ (original demand) – green downward-sloping */
      { x1: 110, y1: 80,  x2: 490, y2: 360, stroke: '#059669', strokeWidth: 2.5,
        label: 'D₁', labelX: 494, labelY: 360, labelFill: '#059669' },
      /* D₂ (demand after Help to Buy, shifted right 60px) – amber downward-sloping */
      { x1: 170, y1: 80,  x2: 543, y2: 354, stroke: '#d97706', strokeWidth: 2.5,
        label: 'D₂', labelX: 545, labelY: 352, labelFill: '#d97706' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₂ (post-HTB, higher price) */
      { x1: 100, y1: 144, x2: 255, y2: 144, tickLeft: 'P₂', tickLeftY: 147 },
      /* Horizontal from y-axis to E₁ (original price) */
      { x1: 100, y1: 182, x2: 246, y2: 182, tickLeft: 'P₁', tickLeftY: 185 },
      /* Vertical from E₂ down to x-axis */
      { x1: 255, y1: 144, x2: 255, y2: 400, tickBottom: 'Q₂', tickBottomX: 255 },
      /* Vertical from E₁ down to x-axis */
      { x1: 246, y1: 182, x2: 246, y2: 400, tickBottom: 'Q₁', tickBottomX: 246 }
    ],

    /* Shift arrow: D₁ → D₂ pointing right */
    shiftArrow: { x1: 280, y1: 110, x2: 340, y2: 110, stroke: '#d97706' },

    eqDots: [
      {
        cx: 246, cy: 182, fill: '#059669',
        initLabel: 'Pre-HTB equilibrium', initLabel2: '(Q₁, P₁)', initLabelX: 253, initLabelY: 177
      },
      {
        cx: 255, cy: 144, fill: '#d97706',
        newLabel: 'Post-HTB equilibrium', newLabel2: '(Q₂, P₂ – higher)', newLabelX: 262, newLabelY: 139
      }
    ],

    legend: [
      { color: '#059669', text: 'D₁ = Original housing demand (before Help to Buy)' },
      { color: '#d97706', text: 'D₂ = Demand after Help to Buy equity loan (shifted right)' },
      { color: '#7c3aed', text: 'S = Housing supply (highly inelastic, PES ≈ 0.4 – planning constraints)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the Help to Buy government failure.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',     label: 'Shift label',                 pctX: 54,  pctY: 19,   pctW: 22 },
      { id: 'new-eq',    label: 'New equilibrium',             pctX: 45,  pctY: 28,   pctW: 22 },
      { id: 'orig-eq',   label: 'Original equilibrium',        pctX: 43,  pctY: 36,   pctW: 22 },
      { id: 'hi-price',  label: 'Higher price P₂ (govt fail)', pctX: 0.5, pctY: 28,   pctW: 17 },
      { id: 'small-qty', label: 'Tiny quantity rise (Q₂≈Q₁)',  pctX: 41,  pctY: 93.5, pctW: 22 }
    ],

    chips: [
      { id: 'demand-shift', text: 'Demand shifts right (Help to Buy)', icon: '→', zone: 'shift',     correct: true  },
      { id: 'new-eq',       text: 'New equilibrium (Q₂, P₂)',          icon: '●', zone: 'new-eq',    correct: true  },
      { id: 'orig-eq',      text: 'Original equilibrium (Q₁, P₁)',     icon: '●', zone: 'orig-eq',   correct: true  },
      { id: 'hi-price',     text: 'Higher price P₂ (govt failure)',     icon: '↑', zone: 'hi-price',  correct: true  },
      { id: 'small-qty',    text: 'Tiny quantity rise (Q₂ ≈ Q₁)',      icon: '→', zone: 'small-qty', correct: true  },
      { id: 'sup-shift',    text: 'Supply shifts right',                icon: '→', zone: null,        correct: false },
      { id: 'big-qty',      text: 'Large quantity increase',            icon: '↑', zone: null,        correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['government failure', 'unintended consequences', 'inelastic supply', 'demand subsidy', 'price elasticity of supply', 'planning constraints', 'information failure', 'windfall profit', 'PES', 'producer surplus'],

    parts: [
      {
        num:         1,
        title:       'Explain why Help to Buy produces government failure',
        prompt:      'Why does Help to Buy produce government failure rather than success?',
        maxChars:    240,
        modelAnswer: 'Housing supply is highly inelastic (PES ≈ 0.4): planning constraints, construction labour shortages and land banking mean supply barely increases even when prices rise. Demand stimulus (HTB equity loans) shifts D right but almost all the adjustment is absorbed by higher prices, not more housing. The government failed to address the supply-side root cause.'
      },
      {
        num:         2,
        title:       'Explain who captures the subsidy',
        prompt:      'Who captures the benefit of the subsidy?',
        maxChars:    240,
        modelAnswer: 'With inelastic supply, sellers (developers) capture most of the subsidy as higher prices rather than consumers receiving affordability gains. This is the producer surplus capture effect: OBR found £8,000 average new-build price inflation and RICS found the new-build premium doubled. Buyers with HTB partially offset this with the equity loan; buyers without HTB face a higher price with no offset.'
      },
      {
        num:         3,
        title:       'Explain what policy would have avoided the failure',
        prompt:      'What policy would have avoided the government failure?',
        maxChars:    240,
        modelAnswer: 'Addressing supply inelasticity directly: zonal planning reform, social house-building, developer land value capture, or build-to-rent investment. Any demand stimulus without supply-side action repeats the same government failure – the price mechanism absorbs demand into prices rather than output when PES is low.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Identify the government failure mechanism (demand stimulus + inelastic supply)',
      'Show diagram outcome (large ΔP, small ΔQ)',
      'Identify who captures the subsidy (developers/suppliers)',
      'Propose a supply-side correction to avoid government failure'
    ],

    examAnswer: '"Help to Buy shifted demand for new-build homes right from D₁ to D₂. Because housing supply is highly inelastic (PES ≈ 0.4), the market absorbed the demand shock almost entirely through higher prices: E₂ is almost directly above E₁ – a large price rise (P₁ → P₂) with a tiny quantity increase. Developers captured the subsidy as windfall profits; non-HTB buyers faced higher prices. This is government failure: the policy worsened the affordability problem it was designed to solve, because the information failure – ignoring supply inelasticity – led to incomplete policy design."'
  }
};
