/* ============================================================
   ECONOS — Link It · Diagram Connector data
   Government Intervention in Markets: binding maximum price (rent cap) creates a shortage
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   D (demand):  (110,60)→(510,360)  slope = 0.75   ⟹  y = 60 + (x-110)*0.75
   S (supply):  (130,390)→(490,30)  slope = -1.0   ⟹  y = 520 - x
   E (S ∩ D): 520-x = 60+(x-110)*0.75 → 520-x = -22.5+0.75x → 542.5 = 1.75x → x ≈ 310, y ≈ 210
   P_max horizontal line at y=280 (below P_e in price terms, i.e. higher y in SVG)
   Q_s (on S at y=280): 520-x = 280 → x = 240
   Q_d (on D at y=280): 280 = 60 + (x-110)*0.75 → (x-110) = 293.33 → x ≈ 403
   Shortage = Q_d − Q_s ≈ 163 px wide                                              */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Government Intervention in Markets',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_depends.html'),

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
    title:       'The city government caps rents at 20% below the market-clearing level. Which diagram correctly shows the effect on the rental housing market?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the binding rent cap. Think about where the legal price sits relative to equilibrium, and what that does to quantities supplied and demanded.',
    hint:        'Skill focus: identify whether the intervention is binding, and which side of the market is the short side at the controlled price.',

    options: [
      {
        id:      'max-below-eq',
        correct:  true,
        title:   'Maximum price set below equilibrium',
        sub:     'A horizontal P_max line below P_e — Q_s falls, Q_d rises, a shortage opens up',
        why:     'A rent cap 20% below the market-clearing rent is the textbook binding price ceiling. At P_max < P_e, landlords reduce quantity supplied to Q_s, tenants increase quantity demanded to Q_d, and the horizontal gap Q_d − Q_s is the shortage. The market trades on the short side, so only Q_s flats are actually let. This is the diagram the scenario requires.'
      },
      {
        id:      'max-above-eq',
        correct:  false,
        title:   'Maximum price set above equilibrium',
        sub:     'A horizontal P_max line above P_e — no effect on the market',
        why:     'A maximum price above the free-market equilibrium is non-binding — the market would already clear at a price below the cap, so the cap never bites. With no shortage and no quantity change, this diagram cannot show the effect of a cap set 20% below the market rent.'
      },
      {
        id:      'min-below-eq',
        correct:  false,
        title:   'Minimum price set below equilibrium',
        sub:     'A horizontal P_min line below P_e — non-binding floor',
        why:     'A minimum price (price floor) below equilibrium is non-binding — sellers can already charge more than P_min in the free market, so the floor has no effect. Even if it were binding (set above P_e), a floor models the opposite policy: it would create excess supply, not a shortage. The wrong mechanism for a rent cap.'
      },
      {
        id:      'supply-shift-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'A leftward shift of the S curve — higher price, lower quantity',
        why:     'A leftward supply shift models a rise in landlords\' costs or a fall in the number of properties on the market — not a price control. With a rent cap the supply curve itself does not move; instead a horizontal legal price line is imposed below P_e, and quantity supplied slides down the unchanged supply curve. Wrong mechanism.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🏠',
    text:  'The city government caps private-sector rents at 2022 levels — roughly 20% below the current market-clearing rent.',
    dataPoints: [
      { icon: '🚫', text: 'P_max set ~20% below the equilibrium rent' },
      { icon: '📉', text: 'Quantity supplied falls; quantity demanded rises' },
      { icon: '⏳', text: 'Excess demand rationed by queues, networks and key money' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram — binding maximum price on rental housing creates a shortage',
    xLabel:    'Quantity of rental flats',
    yLabel:    'Rent (£ per month)',

    lines: [
      /* D (demand) — green downward-sloping */
      { x1: 110, y1: 60,  x2: 510, y2: 360, stroke: '#059669', strokeWidth: 2.5,
        label: 'D', labelX: 514, labelY: 360, labelFill: '#059669' },
      /* S (supply) — blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S', labelX: 492, labelY: 28, labelFill: '#2563eb' },
      /* P_max horizontal cap line — amber, below P_e */
      { x1: 100, y1: 280, x2: 545, y2: 280, stroke: '#d97706', strokeWidth: 2.5,
        label: 'P_max', labelX: 548, labelY: 283, labelFill: '#d97706' }
    ],

    /* Guide lines + tick labels — shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E (P_e) */
      { x1: 100, y1: 210, x2: 310, y2: 210, tickLeft: 'P_e', tickLeftY: 213 },
      /* Vertical from E down to x-axis */
      { x1: 310, y1: 210, x2: 310, y2: 400, tickBottom: 'Q_e', tickBottomX: 310 },
      /* Vertical from Q_s up to P_max */
      { x1: 240, y1: 280, x2: 240, y2: 400, tickBottom: 'Q_s', tickBottomX: 240 },
      /* Vertical from Q_d up to P_max */
      { x1: 403, y1: 280, x2: 403, y2: 400, tickBottom: 'Q_d', tickBottomX: 403 }
    ],

    /* Shortage arrow: horizontal arrow along P_max between Q_s and Q_d */
    shiftArrow: { x1: 240, y1: 280, x2: 403, y2: 280, stroke: '#dc2626' },

    eqDots: [
      {
        cx: 310, cy: 210, fill: '#2563eb',
        initLabel: 'Free-market', initLabel2: 'equilibrium', initLabelX: 317, initLabelY: 205
      },
      {
        cx: 240, cy: 280, fill: '#d97706',
        newLabel: 'Quantity', newLabel2: 'actually traded', newLabelX: 130, newLabelY: 275
      }
    ],

    legend: [
      { color: '#059669', text: 'D = Demand for rental flats' },
      { color: '#2563eb', text: 'S = Supply of rental flats' },
      { color: '#d97706', text: 'P_max = Legal rent ceiling (below P_e ⇒ binding)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector — Label the Diagram',
    title:       'Use the diagram to show the effect of a binding rent cap.',
    instruction: 'Place the correct labels on the diagram to identify the equilibrium, the ceiling, the quantities supplied and demanded, and the shortage.',
    hint:        'Skill focus: connect the visual ceiling to the quantities it creates.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'pmax-line',  label: 'P_max ceiling',         pctX: 80,  pctY: 62,   pctW: 18 },
      { id: 'eq',         label: 'Free-market equilibrium', pctX: 56, pctY: 44,  pctW: 23 },
      { id: 'qs',         label: 'Q_s (quantity supplied)', pctX: 35, pctY: 95,  pctW: 18 },
      { id: 'qd',         label: 'Q_d (quantity demanded)', pctX: 64, pctY: 95,  pctW: 18 },
      { id: 'shortage',   label: 'Shortage',              pctX: 47,  pctY: 67,   pctW: 18 }
    ],

    chips: [
      { id: 'pmax-line',   text: 'Binding rent ceiling',         icon: '—', zone: 'pmax-line', correct: true  },
      { id: 'eq',          text: 'Free-market equilibrium (P_e, Q_e)', icon: '●', zone: 'eq', correct: true  },
      { id: 'qs',          text: 'Q_s — quantity supplied at P_max', icon: '↓', zone: 'qs',  correct: true  },
      { id: 'qd',          text: 'Q_d — quantity demanded at P_max', icon: '↑', zone: 'qd',  correct: true  },
      { id: 'shortage',    text: 'Shortage = Q_d − Q_s',         icon: '↔', zone: 'shortage', correct: true  },
      { id: 'surplus-bad', text: 'Excess supply (surplus)',      icon: '↑', zone: null,      correct: false },
      { id: 'qs-rises',    text: 'Quantity supplied rises',      icon: '↑', zone: null,      correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector — Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis — bridge the diagram into clear written analysis of who gains, who loses and how the shortage is rationed.',

    vocab: ['maximum price', 'price ceiling', 'binding', 'shortage', 'Q_s', 'Q_d', 'non-price rationing', 'deadweight loss', 'key money', 'PES'],

    parts: [
      {
        num:         1,
        title:       'Explain why the cap is binding',
        prompt:      'Explain why the rent cap creates a shortage rather than having no effect.',
        maxChars:    240,
        modelAnswer: 'The rent cap is set roughly 20% below the free-market equilibrium rent P_e, so it sits below the price at which the market would otherwise clear. Because landlords are legally barred from charging more than P_max, they reduce the quantity of flats they are willing to let to Q_s (read off the supply curve at P_max), while tenants increase quantity demanded to Q_d (read off the demand curve at P_max). The horizontal gap Q_d − Q_s is the shortage — excess demand that the price mechanism is no longer allowed to clear. If P_max sat above P_e the cap would be non-binding and have no effect at all.'
      },
      {
        num:         2,
        title:       'Explain how the shortage is rationed',
        prompt:      'Q_d > Q_s at P_max. Which side of the market is the short side, and how is the limited supply allocated?',
        maxChars:    240,
        modelAnswer: 'Quantity supplied (Q_s) is the short side, so only Q_s flats are actually let — the market trades on the lower of Q_s and Q_d. The remaining Q_d − Q_s tenants cannot find a flat at P_max because price is no longer allowed to ration them out. Non-price rationing fills the gap: waiting lists, queues, allocation through personal networks, key-money side payments, or black-market sub-letting above the cap. Landlords may also cut maintenance to restore margins, so the headline rent is lower but the real product is also worse.'
      },
      {
        num:         3,
        title:       'Explain who gains, who loses and the welfare cost',
        prompt:      'Who gains and who loses from the binding cap, and where is the deadweight welfare loss?',
        maxChars:    240,
        modelAnswer: 'Sitting tenants who hold a tenancy gain a transfer: they pay a lower contractual rent on the Q_s flats still let, so producer surplus shifts to consumer surplus on those units. Landlords lose surplus on every unit and may exit the market entirely. The deadweight loss is the welfare from trades between Q_s and Q_e that would have happened at P_e but no longer occur — flats willing buyers would have paid more than the marginal cost for, but which are simply not let. Whether the policy raises total welfare depends on whether the equity gain to sitting tenants outweighs the DWL, the quality decline, and the new tenants pushed out by the shortage.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'State that P_max < P_e makes the cap binding',
      'Identify Q_s and Q_d and the shortage between them',
      'Name the short-side rule and non-price rationing',
      'Identify the gain to sitting tenants, the loss to landlords and the DWL'
    ],

    examAnswer: '"A rent cap set 20% below the equilibrium is a binding maximum price, so quantity supplied falls to Q_s while quantity demanded rises to Q_d, opening up a shortage of Q_d − Q_s. With price barred from clearing the market, the short side determines that only Q_s flats are actually let, and the excess demand is rationed by queues, networks and key money — often missing the lowest-income tenants. Sitting tenants gain a transfer from landlords on the Q_s units still traded, but the trades between Q_s and Q_e that would have happened at P_e are now lost as deadweight welfare loss, and landlords typically cut maintenance to restore margins."'
  }
};
