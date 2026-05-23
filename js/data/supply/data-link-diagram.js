/* ============================================================
   ECONOS — Link It · Diagram Connector data
   Supply: rising energy costs shift supply left (S₁ → S₂)
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   D (demand, unchanged): (110,50)→(514,381)  slope ≈ 0.825  ⟹  y = -40.75 + 0.825x
   S₁ (original supply): (130,390)→(490,30)  slope = -1.0  ⟹  y = 520 - x
   S₂ (new supply, shifted left — 60px vertical gap above S₁): (130,330)→(430,30)  ⟹  y = 460 - x
   E₁ (S₁ ∩ D): 520-x = -40.75+0.825x → 560.75 = 1.825x → x ≈ 307, y ≈ 213
   E₂ (S₂ ∩ D): 460-x = -40.75+0.825x → 500.75 = 1.825x → x ≈ 274, y ≈ 186   */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Supply',
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
    title:       'UK energy prices surge 400%. Which diagram correctly shows the effect on the market for energy-intensive manufactured goods?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the energy cost shock. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      's-left',
        correct:  true,
        title:   'Supply shifts left',
        sub:     'Supply shifts left — higher input costs mean firms can supply less at every price',
        why:     'Rising energy costs raise marginal production costs at every output level, so firms can profitably supply less at every price. The supply curve shifts left from S₁ to S₂. At the original price, a shortage emerges, pushing price up to P₂ while output falls to Q₂. Demand is unchanged — the shock is entirely on the supply side.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Supply expands — more output at every price level',
        why:     'Supply shifts right when input costs fall, technology improves, or more firms enter the market. A 400% rise in energy costs does the opposite — it raises production costs and shifts supply left, not right. A rightward shift would represent the solution to the cost crisis, not the crisis itself.'
      },
      {
        id:      'd-left',
        correct:  false,
        title:   'Demand shifts left',
        sub:     'Demand falls — buyers demand less at every price',
        why:     'A leftward demand shift would represent falling consumer income, worsening confidence, or a rise in substitute prices. The energy price shock affects the cost of production — a supply-side shock — not consumers\' willingness to buy. Demand for manufactured goods is unchanged in the first instance.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Demand rises — buyers demand more at every price',
        why:     'Demand shifts right when consumer income rises or confidence improves. This is a supply-side story — rising energy costs hit manufacturers\' cost curves. Demand for the output is unchanged. Choosing this diagram confuses the supply shock with a demand expansion.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🏭',
    text:  'UK natural gas prices rise 400% in 2021–22, surging input costs for steel, ceramics and food processing.',
    dataPoints: [
      { icon: '⚡', text: 'Energy = 20–40% of total costs in energy-intensive sectors' },
      { icon: '📉', text: 'UK steel blast furnace suspended; ceramics firms exit market' },
      { icon: '🍞', text: 'Food producer price inflation: +14.8% (ONS 2022)' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram — supply shifts left as energy input costs surge, creating a new equilibrium at higher price and lower output',
    xLabel:    'Quantity of manufactured goods',
    yLabel:    'Price / Cost (£)',

    lines: [
      /* D (Demand, unchanged) — green downward-sloping */
      { x1: 110, y1: 50,  x2: 514, y2: 381, stroke: '#059669', strokeWidth: 2.5,
        label: 'D', labelX: 516, labelY: 381, labelFill: '#059669' },
      /* S₁ (original supply) — blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S₁', labelX: 488, labelY: 28, labelFill: '#2563eb' },
      /* S₂ (new supply after cost shock — shifted left, 60px vertical gap above S₁) — red upward-sloping */
      { x1: 130, y1: 330, x2: 430, y2: 30,  stroke: '#dc2626', strokeWidth: 2.5,
        label: 'S₂', labelX: 424, labelY: 28, labelFill: '#dc2626' }
    ],

    /* Guide lines + tick labels — shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₂ (new equilibrium, higher price) */
      { x1: 100, y1: 186, x2: 274, y2: 186, tickLeft: 'P₂', tickLeftY: 189 },
      /* Horizontal from y-axis to E₁ (original equilibrium) */
      { x1: 100, y1: 213, x2: 307, y2: 213, tickLeft: 'P₁', tickLeftY: 216 },
      /* Vertical from E₂ down to x-axis */
      { x1: 274, y1: 186, x2: 274, y2: 400, tickBottom: 'Q₂', tickBottomX: 274 },
      /* Vertical from E₁ down to x-axis */
      { x1: 307, y1: 213, x2: 307, y2: 400, tickBottom: 'Q₁', tickBottomX: 307 }
    ],

    /* Shift arrow: horizontal, pointing left, at y=80 between S₁ and S₂ */
    shiftArrow: { x1: 436, y1: 80, x2: 376, y2: 80, stroke: '#dc2626' },

    eqDots: [
      {
        cx: 307, cy: 213, fill: '#2563eb',
        initLabel: 'Original equilibrium', initLabel2: '(Q₁, P₁)', initLabelX: 314, initLabelY: 208
      },
      {
        cx: 274, cy: 186, fill: '#dc2626',
        newLabel: 'New equilibrium', newLabel2: '(Q₂, P₂)', newLabelX: 281, newLabelY: 181
      }
    ],

    legend: [
      { color: '#059669', text: 'D = Demand for manufactured goods (unchanged)' },
      { color: '#2563eb', text: 'S₁ = Original supply (before energy cost shock)' },
      { color: '#dc2626', text: 'S₂ = New supply (after 400% gas price rise)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector — Label the Diagram',
    title:       'Use the diagram to show the effect of rising energy costs on the market for energy-intensive manufactured goods.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and output.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',    label: 'Shift label',           pctX: 62,  pctY: 13,   pctW: 22 },
      { id: 'new-eq',   label: 'New equilibrium',        pctX: 49,  pctY: 37,   pctW: 22 },
      { id: 'orig-eq',  label: 'Original equilibrium',   pctX: 56,  pctY: 44,   pctW: 24 },
      { id: 'hi-price', label: 'Higher price (P₂)',       pctX: 0.5, pctY: 38,   pctW: 17 },
      { id: 'lo-out',   label: 'Lower output (Q₂)',       pctX: 42,  pctY: 93.5, pctW: 18 }
    ],

    chips: [
      { id: 'sup-left',  text: 'Supply shifts left',            icon: '←', zone: 'shift',    correct: true  },
      { id: 'new-eq',    text: 'New equilibrium (Q₂, P₂)',      icon: '●', zone: 'new-eq',   correct: true  },
      { id: 'orig-eq',   text: 'Original equilibrium (Q₁, P₁)', icon: '●', zone: 'orig-eq',  correct: true  },
      { id: 'hi-price',  text: 'Higher price (P₂)',              icon: '↑', zone: 'hi-price', correct: true  },
      { id: 'lo-out',    text: 'Lower output (Q₂)',              icon: '↓', zone: 'lo-out',   correct: true  },
      { id: 'sup-right', text: 'Supply shifts right',            icon: '→', zone: null,       correct: false },
      { id: 'lo-price',  text: 'Lower price',                    icon: '↓', zone: null,       correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector — Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis — bridge the diagram shift into clear written analysis.',

    vocab: ['supply curve', 'shift in supply', 'input costs', 'marginal cost', 'excess demand', 'equilibrium price', 'cost-push inflation', 'producer surplus', 'incidence'],

    parts: [
      {
        num:         1,
        title:       'Why does the supply curve shift left?',
        prompt:      'Why does the supply curve shift left, not just contract along it?',
        maxChars:    300,
        modelAnswer: 'Energy cost rises increase the marginal cost of production at every output level — they are a non-price supply shifter. This means firms can supply less at every price than before, shifting the entire supply curve to the left from S₁ to S₂. A price change would cause a movement along the supply curve; a cost change shifts it.'
      },
      {
        num:         2,
        title:       'What happens to price and output?',
        prompt:      'What is the new equilibrium and who bears the cost?',
        maxChars:    300,
        modelAnswer: 'The new equilibrium settles at a higher price P₂ and lower output Q₂. Consumers pay more as the cost is partially passed through; producer surplus falls as margins are squeezed. Some producers exit or suspend production (as British Steel did) when they cannot pass enough of the cost increase to buyers.'
      },
      {
        num:         3,
        title:       'Add a wider effect',
        prompt:      'What are the supply-chain or economy-wide consequences?',
        maxChars:    300,
        modelAnswer: 'Cost-push inflation ripples through the supply chain: food processors raise prices → retailers pass costs to consumers → household real incomes fall. Government may need to intervene (e.g., the Energy Bill Relief Scheme) to prevent sector collapse and permanent capacity loss. Job losses in energy-intensive sectors add to macroeconomic costs.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Identify the supply shifter (input costs)',
      'State direction of shift (left)',
      'State outcome for P and Q',
      'Name a wider supply-chain or welfare effect'
    ],

    examAnswer: '"Surging energy input costs raised the marginal cost of production for UK manufacturers, shifting the supply curve left from S₁ to S₂. The new equilibrium settled at a higher price P₂ and lower output Q₂, squeezing consumer surplus and pushing cost-push inflation through supply chains. Third-party effects include industrial job losses and price pressure on households, particularly for essential goods with energy-intensive production processes."'
  }
};
