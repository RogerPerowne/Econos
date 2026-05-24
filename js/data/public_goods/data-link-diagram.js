/* ============================================================
   ECONOS — Link It · Diagram Connector data
   Public Goods: free rider collapses D_private far below D_social
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   S (cost of provision):   (130,390)→(490,30)   y = 520 - x
   D_social (true WTP):     (110,50)→(514,381)    slope ≈ 0.825   y = -40.75 + 0.825x  → E_social ≈ (307,213)
   D_private (free riding): (110,300)→(340,381)   slope ≈ 0.352   y = 261.3 + 0.352x   → E_private ≈ (191,329)  */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Public Goods',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_depends.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: -1,

  /* ── Stage 0: Select the right diagram ── */
  select: {
    eyebrow:     'Diagram Connector — Select the Diagram',
    title:       'Why does the private market fail to provide coastal flood defences? Which diagram correctly shows the effect of the free rider problem on market demand?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the free rider problem. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      'd-left',
        correct:  true,
        title:   'Demand shifts left',
        sub:     'Effective market demand falls far below true social demand — free riding means individuals do not reveal their true WTP, collapsing private market demand',
        why:     'Because non-payers cannot be excluded from flood protection, each household free rides — waiting for others to pay. No one reveals their true WTP → effective market demand (D_private) collapses to near zero, far below D_social (true aggregate WTP). The demand shift leftward represents the gap created by the free rider problem: what the market reveals versus what society truly values.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Flood defence provision becomes more costly, reducing supply',
        why:     'Supply shifting left would represent rising costs of flood defence construction — not the public goods mechanism. The reason private firms do not provide flood defences is not that supply is costly, but that they cannot generate revenue from non-excludable non-payers. The failure is on the demand (revenue) side, not the supply (cost) side.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Households demand more flood protection as flood risk increases',
        why:     'Demand shifting right would represent rising WTP for flood protection — perhaps as sea levels rise. But the public goods problem is that true WTP (D_social) already exceeds zero, yet effective market demand (D_private) collapses due to free riding. The issue is that true demand is not revealed, not that it is absent or rising.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'New technology reduces the cost of building flood defences',
        why:     'Supply shifting right would mean flood defences become cheaper to build — a technological improvement. This does not address the public goods market failure: even if defences were free to build, private firms still could not generate revenue from non-excludable beneficiaries. The demand collapse from free riding remains the core problem.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🌊',
    text:  'Environment Agency: £5.2bn flood investment programme (2021–27). £8 return per £1 invested. Private market provides: £0.',
    dataPoints: [
      { icon: '🤝', text: 'Non-excludable: cannot charge individual households for coastal protection' },
      { icon: '🔄', text: 'Non-rival: protection of one household does not reduce others\' protection' },
      { icon: '🎭', text: 'Free rider: each household waits for others → D_private ≈ 0' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram — free rider problem collapsing private market demand for coastal flood defences',
    xLabel:    'Quantity of flood protection',
    yLabel:    'Price / Cost (£)',

    lines: [
      /* S — cost of providing flood defences — blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S (cost)', labelX: 494, labelY: 28, labelFill: '#2563eb' },
      /* D_social — true WTP if free riding prevented — amber downward-sloping */
      { x1: 110, y1: 50,  x2: 514, y2: 381, stroke: '#d97706', strokeWidth: 2.5,
        label: 'D_social', labelX: 455, labelY: 372, labelFill: '#d97706' },
      /* D_private — collapsed demand due to free riding — red downward-sloping, near x-axis */
      { x1: 110, y1: 300, x2: 340, y2: 381, stroke: '#dc2626', strokeWidth: 2.5,
        label: 'D_private (free riding)', labelX: 344, labelY: 381, labelFill: '#dc2626' }
    ],

    /* Guide lines + tick labels */
    guides: [
      { x1: 100, y1: 213, x2: 307, y2: 213, tickLeft: 'Q*',        tickLeftY: 216 },
      { x1: 307, y1: 213, x2: 307, y2: 400, tickBottom: 'Q*',        tickBottomX: 307 },
      { x1: 191, y1: 329, x2: 191, y2: 400, tickBottom: 'Q_private', tickBottomX: 191 },
      { x1: 100, y1: 329, x2: 191, y2: 329, tickLeft: 'P_private',  tickLeftY: 332 }
    ],

    /* Shift arrow: D_social → D_private, pointing left — showing free rider collapse */
    shiftArrow: { x1: 400, y1: 200, x2: 340, y2: 200, stroke: '#dc2626' },

    eqDots: [
      {
        cx: 307, cy: 213, fill: '#d97706',
        initLabel: 'Social optimum', initLabel2: '(Q*, if tax-funded)', initLabelX: 314, initLabelY: 208
      },
      {
        cx: 191, cy: 329, fill: '#dc2626',
        newLabel: 'Market failure', newLabel2: '(Q_private ≈ 0)', newLabelX: 198, newLabelY: 324
      }
    ],

    legend: [
      { color: '#d97706', text: 'D_social = True social WTP (if free riding were prevented by taxation)' },
      { color: '#dc2626', text: 'D_private = Effective market demand (collapsed by free rider problem)' },
      { color: '#2563eb', text: 'S = Cost of flood defence provision' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector — Label the Diagram',
    title:       'Use the diagram to show the effect of the free rider problem on coastal flood defence provision.',
    instruction: 'Place the correct labels on the diagram to identify the free rider collapse, the two equilibria and the welfare gap.',
    hint:        'Skill focus: connect the visual demand collapse to the economic outcomes.',

    zones: [
      { id: 'free-rider', label: 'Free rider collapse',           pctX: 55,  pctY: 33,   pctW: 26 },
      { id: 'soc-opt',    label: 'Social optimum',                pctX: 56,  pctY: 42,   pctW: 20 },
      { id: 'mkt-fail',   label: 'Market failure equilibrium',    pctX: 32,  pctY: 65,   pctW: 22 },
      { id: 'und-qty',    label: 'Near-zero private quantity',    pctX: 30,  pctY: 93.5, pctW: 18 },
      { id: 'soc-qty',    label: 'Socially optimal quantity (Q*)', pctX: 52,  pctY: 93.5, pctW: 15 }
    ],

    chips: [
      { id: 'free-rider-chip', text: 'D_social → D_private (free rider collapse)', icon: '←', zone: 'free-rider', correct: true  },
      { id: 'soc-opt-chip',    text: 'Social optimum Q* (tax-funded)',                  icon: '●', zone: 'soc-opt',    correct: true  },
      { id: 'mkt-fail-chip',   text: 'Market failure equilibrium (Q ≈ 0)',         icon: '●', zone: 'mkt-fail',   correct: true  },
      { id: 'und-qty-chip',    text: 'Near-zero private quantity',                      icon: '↓', zone: 'und-qty',    correct: true  },
      { id: 'soc-qty-chip',    text: 'Socially optimal quantity (Q*)',                  icon: '↑', zone: 'soc-qty',    correct: true  },
      { id: 'dem-right',       text: 'D_private shifts right (more demand)',            icon: '→', zone: null,         correct: false },
      { id: 'sup-left',        text: 'Supply shifts left',                              icon: '←', zone: null,         correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector — Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis — bridge the diagram shift into clear written analysis.',

    vocab: ['public good', 'non-rival', 'non-excludable', 'free rider', 'market failure', 'under-provision', 'general taxation', 'revealed preference', 'social demand', 'private demand', 'Q*', 'D_social', 'D_private'],

    parts: [
      {
        num:         1,
        title:       'Explain why D_private falls below D_social',
        prompt:      'Why does D_private fall below D_social?',
        maxChars:    240,
        modelAnswer: 'Non-excludability means households cannot be prevented from benefiting from flood defences once provided. Each household\'s rational strategy is to wait for others to pay (free riding). No one reveals true WTP → effective market demand (D_private) collapses to near zero. D_social represents true aggregate WTP if taxation forced everyone to pay their share.'
      },
      {
        num:         2,
        title:       'Explain the welfare gap between Q* and Q_private',
        prompt:      'What is the welfare gap between Q* and Q_private?',
        maxChars:    240,
        modelAnswer: 'At Q_private ≈ 0, the welfare loss is enormous: all the flood damage that could have been avoided (£8 per £1 invested) is left unrealised. Society bears the cost of flooding (£3.5bn in 2007) that defences could have prevented at far lower cost. The gap between D_social and D_private at every quantity represents the welfare that free riding destroys.'
      },
      {
        num:         3,
        title:       'Explain how state provision solves the free rider problem',
        prompt:      'How does state provision via taxation solve the free rider problem?',
        maxChars:    240,
        modelAnswer: 'General taxation is compulsory — it solves the free rider problem by removing the option not to contribute. The government uses tax revenue to provide Q* of flood defences, converting D_social into effective collective demand. No private firm can do this because they have no mechanism to compel payment from non-payers — only the state\'s taxing power can overcome the free rider problem at national scale.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Apply non-rivalry and non-excludability',
      'Explain free rider problem and demand collapse',
      'State market failure outcome (Q ≈ 0)',
      'Explain how taxation solves free rider problem to achieve Q*'
    ],

    examAnswer: '"Coastal flood defences are non-rival and non-excludable — the free rider problem collapses effective market demand from D_social (true WTP = Q*) to D_private (≈0): no household reveals WTP because they cannot be excluded from protection once provided. Private firms cannot profitably supply the good — there is no revenue stream. The Environment Agency\'s £5.2bn programme demonstrates that compulsory general taxation is the only mechanism that can solve the free rider problem, achieving Q* and realising the £8/£1 welfare return."'
  }
};
