/* ============================================================
   ECONOS — Link It · Diagram Connector data
   Behavioural Economics: present bias corrected — demand shifts left
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378

   S (supply of soft drinks, approximately unchanged):
     (130,390)→(490,30)   slope = -1.0   y = 520 - x

   D_biased (behaviourally inflated demand — before correction):
     (110,50)→(514,381)   slope = (381-50)/(514-110) = 331/404 ≈ 0.819
     y = 50 + 0.819*(x-110) = 50 + 0.819x - 90.1 = -40.1 + 0.819x ≈ -40.75 + 0.825x
     Using slope 0.825: y = -40.75 + 0.825x
     Check: x=110 → y=-40.75+90.75=50 ✓; x=514 → y=-40.75+424.1≈383≈381 ✓

   D_rational (after nudge corrects present bias — shifted left ~50px):
     (110,100)→(449,381)   y = 100 + 0.825*(x-110) = 100+0.825x-90.75 = 9.25+0.825x
     Check: x=110 → y=9.25+90.75=100 ✓; x=449 → y=9.25+370.4=379.7≈381 ✓

   E_biased (D_biased ∩ S): -40.75+0.825x = 520-x → 1.825x = 560.75 → x≈307, y≈213
   E_rational (D_rational ∩ S): 9.25+0.825x = 520-x → 1.825x = 510.75 → x≈280, y≈240  */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Behavioural Economics',
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
    title:       'Traffic light nutritional labelling and the SDIL reformulation incentive correct present bias in soft drink consumption. Which diagram correctly shows the effect on demand for high-sugar products?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the nudge effect. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      'd-left',
        correct:  true,
        title:   'Demand shifts left',
        sub:     'Demand shifts left — nudges and reformulation correct present bias, reducing demand from the behaviourally inflated level to the rational level',
        why:     'Present bias inflated demand above the rational level (D_biased > D_rational). Traffic light labelling corrects present bias at the point of decision, reducing WTP for high-sugar products. SDIL reformulation incentives change available products so consumers face lower-sugar options by default. Both mechanisms shift effective demand left from D_biased toward D_rational — reducing overconsumption without restricting consumer choice or raising consumer prices.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Demand rises — consumers\' willingness to pay for high-sugar products increases',
        why:     'Demand shifting right would mean consumers are willing to pay more for high-sugar products — the opposite of what the SDIL and traffic light labelling are designed to achieve. Present bias inflates D above D_rational; a corrective nudge shifts D back left toward D_rational. The direction is wrong.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Supply of high-sugar products contracts — producers reduce output at every price',
        why:     'A leftward supply shift would represent rising production costs for all soft drinks. While the SDIL raises costs for high-sugar recipes, producers responded mainly by reformulating (switching to lower-sugar recipes) rather than reducing total supply. The primary market effect is a demand correction (as reformulated products have lower-sugar content), not a supply contraction. Supply of reformulated products was maintained.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Supply of high-sugar products expands — producers can supply more at every price',
        why:     'Supply shifting right would represent falling production costs or technology improvement — which is the opposite of what the SDIL creates (it raises costs for unreformulated products). This diagram shows no connection to the behavioural correction mechanism.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🥤',
    text:  'UK SDIL 2018: 50% of drinks reformulated pre-levy. Average sugar content fell 29% by 2019. Traffic light labelling: red label reduces purchases by 15%.',
    dataPoints: [
      { icon: '🧠', text: 'Present bias: consumers discount future diabetes/obesity risk at checkout' },
      { icon: '↩️', text: 'Nudge: traffic light labels make future cost salient → corrects bias' },
      { icon: '🔧', text: 'SDIL: producer reformulation → fewer high-sugar options available' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram — nudge and SDIL shift demand left from D_biased to D_rational',
    xLabel:    'Quantity of high-sugar soft drinks',
    yLabel:    'Price (£)',

    lines: [
      /* S (supply of soft drinks, approximately unchanged) — blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S', labelX: 494, labelY: 28, labelFill: '#2563eb' },
      /* D_biased (behaviourally inflated demand — before correction) — red downward-sloping */
      { x1: 110, y1: 50,  x2: 514, y2: 381, stroke: '#dc2626', strokeWidth: 2.5,
        label: 'D_biased', labelX: 470, labelY: 381, labelFill: '#dc2626' },
      /* D_rational (demand after nudge corrects present bias) — green downward-sloping */
      { x1: 110, y1: 100, x2: 449, y2: 381, stroke: '#059669', strokeWidth: 2.5,
        label: 'D_rational', labelX: 453, labelY: 381, labelFill: '#059669' }
    ],

    /* Guide lines + tick labels — shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E_biased */
      { x1: 100, y1: 213, x2: 307, y2: 213, tickLeft: 'P_biased',   tickLeftY: 216 },
      /* Horizontal from y-axis to E_rational */
      { x1: 100, y1: 240, x2: 280, y2: 240, tickLeft: 'P_rational', tickLeftY: 243 },
      /* Vertical from E_biased down to x-axis */
      { x1: 307, y1: 213, x2: 307, y2: 400, tickBottom: 'Q_biased',   tickBottomX: 307 },
      /* Vertical from E_rational down to x-axis */
      { x1: 280, y1: 240, x2: 280, y2: 400, tickBottom: 'Q_rational', tickBottomX: 280 }
    ],

    /* Shift arrow: D_biased → D_rational pointing left */
    shiftArrow: { x1: 410, y1: 120, x2: 350, y2: 120, stroke: '#059669' },

    eqDots: [
      {
        cx: 307, cy: 213, fill: '#dc2626',
        initLabel: 'Overconsumption', initLabel2: 'equilibrium (present bias)', initLabelX: 314, initLabelY: 208
      },
      {
        cx: 280, cy: 240, fill: '#059669',
        newLabel: 'Rational', newLabel2: 'equilibrium (after nudge)', newLabelX: 228, newLabelY: 248
      }
    ],

    legend: [
      { color: '#dc2626', text: 'D_biased = Behaviourally inflated demand (present bias — before nudge)' },
      { color: '#059669', text: 'D_rational = Rational demand (after traffic light labelling + SDIL reformulation)' },
      { color: '#2563eb', text: 'S = Supply of soft drinks (approximately unchanged)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector — Label the Diagram',
    title:       'Use the diagram to show how nudges correct present bias in the soft drinks market.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the quantities.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',    label: 'Shift label',                    pctX: 55,  pctY: 20,   pctW: 26 },
      { id: 'bias-eq',  label: 'Overconsumption equilibrium',    pctX: 57,  pctY: 41,   pctW: 24 },
      { id: 'rat-eq',   label: 'Rational equilibrium',           pctX: 40,  pctY: 47,   pctW: 22 },
      { id: 'bias-qty', label: 'Biased quantity (Q_biased)',      pctX: 52,  pctY: 93.5, pctW: 15 },
      { id: 'rat-qty',  label: 'Rational quantity (Q_rational)',  pctX: 44,  pctY: 87,   pctW: 16 }
    ],

    chips: [
      { id: 'shift-left', text: 'D shifts left (nudge corrects bias)',          icon: '←', zone: 'shift',    correct: true  },
      { id: 'bias-eq',    text: 'Overconsumption equilibrium (Q_biased)',       icon: '●', zone: 'bias-eq',  correct: true  },
      { id: 'rat-eq',     text: 'Rational equilibrium (Q_rational)',            icon: '●', zone: 'rat-eq',   correct: true  },
      { id: 'bias-qty',   text: 'Biased quantity (Q_biased)',                   icon: '↓', zone: 'bias-qty', correct: true  },
      { id: 'rat-qty',    text: 'Rational quantity (Q_rational)',               icon: '↓', zone: 'rat-qty',  correct: true  },
      { id: 'dem-right',  text: 'Demand shifts right',                          icon: '→', zone: null,       correct: false },
      { id: 'sup-left',   text: 'Supply shifts left',                           icon: '←', zone: null,       correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector — Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis — bridge the diagram shift into clear written analysis.',

    vocab: ['present bias', 'bounded rationality', 'nudge theory', 'libertarian paternalism', 'choice architecture', 'salience', 'SDIL', 'Pigouvian tax', 'overconsumption', 'internality', 'regressive', 'reformulation'],

    parts: [
      {
        num:         1,
        title:       'Explain why D_biased is above D_rational',
        prompt:      'Why is D_biased above D_rational?',
        maxChars:    240,
        modelAnswer: 'Present bias means consumers overweight immediate taste pleasure relative to future health costs (diabetes, obesity). At the point of purchase, the health costs are distant and abstract — so effective WTP for high-sugar products exceeds what a fully rational consumer would pay. D_biased reflects this behavioural overconsumption; D_rational is what demand would be if consumers correctly weighted future costs.'
      },
      {
        num:         2,
        title:       'Explain how nudges and SDIL shift demand left',
        prompt:      'How do nudges and SDIL shift demand left?',
        maxChars:    240,
        modelAnswer: 'Traffic light labelling makes the health cost salient at the point of decision — the red label triggers loss aversion and corrects present bias in the moment. SDIL incentivises producer reformulation: by making high-sugar products more expensive to produce, manufacturers switch to lower-sugar recipes, reducing the availability of the most harmful products. Both mechanisms shift effective demand from D_biased toward D_rational.'
      },
      {
        num:         3,
        title:       'Explain why nudges may be preferred to a Pigouvian tax',
        prompt:      'Why might nudges be preferred to a Pigouvian consumption tax?',
        maxChars:    240,
        modelAnswer: 'A Pigouvian tax on soft drinks raises prices for all consumers — a regressive burden (lower-income households spend a higher proportion of income on soft drinks). Denmark\'s fat tax was repealed after 15 months due to cross-border shopping and political unpopularity. Nudges (labelling, reformulation) achieve demand correction without regressive price effects and preserve consumer choice. However, nudges only work if consumers notice and process the information — strong present bias may require more coercive instruments in some cases.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Explain present bias and how it inflates demand above rational level',
      'Explain how nudge/SDIL shifts demand left',
      'State outcome (Q falls, P falls, overconsumption reduced)',
      'Compare nudge with Pigouvian tax (regressive vs proportionate; coercive vs voluntary)'
    ],

    examAnswer: '"Present bias inflates demand for high-sugar soft drinks above the rational level (D_biased). UK traffic light labelling and the SDIL reformulation incentive shift demand left from D_biased to D_rational — reducing overconsumption without the regressive burden of a direct consumption tax. The 29% average sugar content reduction and 50% pre-levy reformulation rate indicate that the SDIL was highly effective as a supply-side nudge. However, the nudge approach requires consumers to process and respond to the information signal — a residual limitation where present bias is very strong."'
  }
};
