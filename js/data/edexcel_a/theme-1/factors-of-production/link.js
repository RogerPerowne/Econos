/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   Factors of Production: retraining policy → mobility → output
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Factors of Production',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('diagram'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'retraining-chain',
      scenario: {
        icon:  '🎓',
        label: 'Scenario',
        text:  'The UK government funds a large adult retraining scheme – paying for displaced workers in declining sectors to gain skills in shortage occupations (HGV driving, social care, construction).'
      },
      anchor: 'Retraining raises occupational mobility → reallocates labour to where it is most productive.',
      tiles: [
        {
          id:  'step-skills',
          icon: '🛠️',
          text: 'Workers gain new skills → quality of labour rises, occupational mobility improves',
          pos:  0
        },
        {
          id:  'step-reallocate',
          icon: '🔄',
          text: 'Labour moves from low-productivity sectors to shortage sectors → vacancies fall',
          pos:  1
        },
        {
          id:  'step-output',
          icon: '📈',
          text: 'More effective labour input + better factor allocation → LRAS shifts right, output rises',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '💷',
          text: 'Higher interest rates raise the cost of capital investment',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '🚪',
          text: 'Immigration controls reduce the inflow of overseas workers',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏘️',
          text: 'House prices rise in high-productivity regions, reducing geographic mobility',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'The retraining scheme directly raises the quality of labour by upgrading workers\' skills. A worker who can drive an HGV, deliver social care, or operate construction machinery is more productive – and more mobile between sectors – than the same worker without those skills. This is improvement in occupational mobility: the ability of labour to move between different uses.'
        },
        {
          pos:  1,
          text: 'With new skills, workers who were unemployed or stuck in declining roles can take up vacancies in shortage sectors. Persistent gaps in care, HGV driving and construction begin to close. Factor reallocation is the textbook supply-side benefit: the same total labour force produces more output because each worker is now in a higher-productivity use.'
        },
        {
          pos:  2,
          text: 'Better-skilled, better-allocated labour means the economy can produce more at every price level – long-run aggregate supply (LRAS) shifts right and the PPF moves outward. Real GDP rises, unemployment falls, and inflationary pressure from supply bottlenecks (e.g. wage pressure in shortage sectors) eases. This is the canonical supply-side policy outcome.'
        }
      ]
    }
  ],

  notes: [
    'Spot the difference between geographic mobility (moving between places) and occupational mobility (moving between jobs). Retraining mostly raises the latter.',
    'Quality vs quantity of labour: the workforce hasn\'t grown – the same workers are now more productive. That is a quality improvement.',
    'Distractors here include monetary policy (interest rates), immigration, and housing – all real factors, but not the mechanism this chain is about.'
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Factors of Production
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Factors of Production',
  stations: [
    { id: 'context', label: 'Use the context',    max: 7, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'diagram', label: 'Diagram connector',  max: 9, color: '#7c3aed' },
    { id: 'depends', label: 'It depends on',      max: 3, color: '#2563eb' },
    { id: 'judge',   label: 'Make the judgement', max: 8, color: '#0891b2' }
  ],

  overallMessages: [
    { min: 85, text: 'Excellent thinking structure – you\'re ready to write.' },
    { min: 70, text: 'Strong thinking structure – you\'re nearly ready to write.' },
    { min: 55, text: 'Good foundations – review your weakest step before Land It.' },
    { min: 0,  text: 'More practice recommended before tackling Land It.' }
  ],

  readinessLabels: [
    { min: 85, text: 'Ready for Land It' },
    { min: 70, text: 'Nearly ready for Land It' },
    { min: 55, text: 'Building readiness' },
    { min: 0,  text: 'More practice recommended' }
  ],

  stationFeedback: {
    context: [
      { min: 80, text: 'Strong evidence classification' },
      { min: 60, text: 'Good – review the complicating factors (capital gap, childcare scale)' },
      { min: 0,  text: 'Evidence classification needs work' }
    ],
    chain: [
      { min: 100, text: 'Perfect causal chain – skills → reallocation → LRAS' },
      { min: 50,  text: 'Clear causality – check the missing reallocation step' },
      { min: 0,   text: 'The causal chain needs work' }
    ],
    diagram: [
      { min: 80, text: 'Strong AD/LRAS reading' },
      { min: 55, text: 'Good – check the outcome for Y and P after the LRAS shift' },
      { min: 0,  text: 'Diagram work needs more attention' }
    ],
    depends: [
      { min: 80, text: 'Strong evaluation conditions identified' },
      { min: 50, text: 'Good – one key condition missed (capital, skills match, or geography)' },
      { min: 0,  text: 'Review the key evaluation conditions' }
    ],
    judge: [
      { min: 80, text: 'Excellent judgement structure' },
      { min: 60, text: 'Judgement is strong but could be more precise' },
      { min: 0,  text: 'Judgement structure needs more precision' }
    ]
  },

  useInLandIt: 'When factor mobility and quality improve, LRAS shifts right – real output rises and the price level falls. Always link the policy mechanism (retraining, childcare, housing, transport) to which kind of mobility it raises (occupational vs geographic) and to the labour quality vs quantity distinction. The output gain only materialises when complementary capital is available and aggregate demand can absorb the new labour.',

  focusInLandIt: {
    context: 'Anchor application in specific UK data – the 700,000 missing workers, 2.8m long-term sick, 30% fall in apprenticeships, 25% capital gap – not generic factor-of-production theory.',
    chain:   'State the chain explicitly: retraining → higher labour quality and occupational mobility → workers reallocate to shortage sectors → LRAS shifts right → real output rises and inflation pressure eases.',
    diagram: 'Draw AD and both LRAS curves; label both equilibria (Y₁/P₁ and Y₂/P₂); show the rightward LRAS shift with an arrow; identify the lower price level and higher real output.',
    depends: 'Lead with skills-employer demand match as your key condition – without it, retraining produces qualified workers who still cannot find shortage-sector jobs.',
    judge:   'Take a clear position, use the LRAS mechanism, add the condition (complementary capital + geographic mobility), and explain the limitation (any single policy lever is incremental – the OBR\'s 60,000 childcare estimate makes this concrete).'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   Factors of Production: UK labour shortages 2023–24 and factor mobility
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Factors of Production',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('chain'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether raising the mobility and quality of UK factors of production would meaningfully lift UK output?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'The UK has roughly [[missing|700,000 fewer workers than its pre-pandemic trend]] (ONS 2024), with much of the gap driven by long-term sickness and earlier retirement.',
      'Around [[inactive|2.8 million people are economically inactive due to long-term sickness]], up from 2.1 million in 2019 – a rise that has reduced the effective supply of labour even where vacancies remain unfilled.',
      'Job vacancies in [[care|care, hospitality and HGV driving remain above pre-pandemic norms]] for over two years, suggesting persistent occupational immobility between sectors where workers are available and sectors where they are needed.',
      'UK [[apprentice|apprenticeship starts have fallen by roughly 30% since 2017]], reducing the pipeline of medium-skill workers and limiting employers\' ability to grow the quality of labour input.',
      'UK [[invest|business investment is about 25% below the G7 average]] – a capital-quality gap that means even fully-employed workers produce less output per hour than peers abroad.',
      '[[housing|House prices reach 10–14× earnings in London and the South East]], limiting geographic mobility from low- to high-productivity areas of the country.',
      'The OBR forecasts that [[childcare|free childcare expansion will lift participation by ~60,000 over five years]] – a meaningful but modest mobility effect.'
    ],

    evidence: {
      'missing':   { text: '700,000 fewer workers than its pre-pandemic trend' },
      'inactive':  { text: '2.8 million people economically inactive due to long-term sickness' },
      'care':      { text: 'care, hospitality and HGV driving remain above pre-pandemic norms' },
      'apprentice':{ text: 'apprenticeship starts down roughly 30% since 2017' },
      'invest':    { text: 'business investment ~25% below the G7 average' },
      'housing':   { text: 'house prices 10–14× earnings in London and the South East' },
      'childcare': { text: 'free childcare expansion: +60,000 workers over five years' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports the claim',      tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against the claim', tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case',     tone: 'blue',  icon: '?' }
    ],

    correct: {
      'missing':    'supports',
      'inactive':   'supports',
      'care':       'supports',
      'apprentice': 'supports',
      'invest':     'complicates',
      'housing':    'supports',
      'childcare':  'complicates'
    },

    explain: {
      'missing':    'A 700,000 worker gap is direct evidence that the quantity of labour available is below trend. Raising mobility (e.g. via retraining, transport links, childcare) helps reactivate or reallocate workers – so this strongly supports the claim that mobility-raising policies would lift output.',
      'inactive':   'Long-term sickness has pulled 700,000 extra workers out of the labour force since 2019. Mobility policies that ease return-to-work (occupational health, flexible jobs, retraining) directly target this group – supporting the claim.',
      'care':       'Persistent vacancies alongside available workers is the textbook signal of occupational immobility – skills don\'t match jobs. This directly supports the case for mobility-raising policy like apprenticeships and retraining.',
      'apprentice': 'A 30% fall in apprenticeship starts means fewer workers are gaining medium-level skills – the quality of labour is weakening over time. Raising the apprenticeship pipeline would lift labour quality and therefore output. Supports the claim.',
      'invest':     'A 25% capital-quality gap means the problem is partly capital, not labour. Even if every worker were fully mobile, output per hour would still be held back by under-investment. This complicates the claim: mobility policy alone won\'t close the productivity gap.',
      'housing':    'High house-price ratios in productive regions create geographic immobility. Workers who could be more productive in London/SE can\'t afford to live there. Housing reform would raise mobility and output – directly supporting the claim.',
      'childcare':  'A 60,000 person gain is a meaningful policy success, but it is small set against the 700,000 missing-worker gap. It complicates the case: any single mobility lever is incremental, not transformative.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The 700,000 missing-worker gap and the 2.8m long-term sick clearly support the case that the UK has a factor-supply problem mobility policy could address. Persistent vacancies in care and HGV driving alongside the 30% fall in apprenticeships point to a skills-mismatch problem retraining could ease. However, the 25% capital-investment gap complicates the picture: mobility alone cannot close it. And the OBR childcare estimate (60,000 over five years) shows that individual mobility levers move the needle slowly – significant output gains require a combination of policies working together."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};

/* ---- link-depends.js ---- */
/* ============================================================
   ECONOS – Link It · It Depends On station data
   Factors of Production: evaluate whether retraining policy raises UK output
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Factors of Production',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether a large UK adult retraining scheme would actually raise GDP.',
  nextUrl:     TopicLoader.routes.link('judge'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'retraining-output',
      claim: {
        icon:   '🎓',
        prompt: 'Policy claim',
        text:   'A large UK adult retraining scheme would substantially raise real GDP by improving the mobility and quality of labour.'
      },
      factors: [
        {
          id:    'skills-match',
          icon:  '🎯',
          label: 'How well the training matches actual employer demand',
          why:   'If retraining produces skills that employers are actively hiring for (HGV drivers, social care, construction trades), workers move into shortage vacancies and output rises. If training programmes teach the wrong skills, workers complete courses but still cannot find jobs in shortage sectors – occupational mobility does not improve and output gains evaporate. This is the single largest determinant of whether the policy works.'
        },
        {
          id:    'capital-investment',
          icon:  '🏭',
          label: 'Complementary capital investment',
          why:   'Skilled labour without modern capital still produces less output per hour. The UK\'s 25% capital-investment gap means even fully-retrained workers operate on outdated equipment. If retraining is paired with capital investment (machinery, software, infrastructure), output gains multiply. Without it, the productivity gain is modest. Labour and capital are complements, not substitutes.'
        },
        {
          id:    'geographic',
          icon:  '🏘️',
          label: 'Geographic mobility – can workers reach the jobs?',
          why:   'Retrained workers in low-productivity regions can only fill shortage vacancies if they can move to where those jobs are. High housing costs in productive regions (London, the South East) lock workers in place. Without parallel housing reform or transport investment, occupational mobility improves but geographic mobility remains a binding constraint on output gains.'
        },
        {
          id:    'participation',
          icon:  '👥',
          label: 'Whether the scheme attracts the right people',
          why:   'A scheme is only effective if economically inactive workers (long-term sick, early retirees, parents) actually enrol. If the scheme is taken up mainly by already-employed workers seeking a better job, total employment does not rise – workers simply reallocate within the existing labour force. Outreach, financial support and removing barriers to participation determine the headcount effect.'
        },
        {
          id:    'macro-demand',
          icon:  '📊',
          label: 'State of aggregate demand',
          why:   'Even perfectly-trained, mobile workers cannot raise output if there are no jobs for them. In a recession with weak AD, retrained workers join unemployment queues. The supply-side gain only materialises if AD is strong enough to absorb the additional labour. Timing the policy with the macro cycle matters.'
        },
        {
          id:    'cost-funding',
          icon:  '💷',
          label: 'Opportunity cost of public spending',
          why:   'A large retraining scheme is funded from taxation or borrowing, which has alternative uses (NHS, defence, debt repayment). If those alternatives have higher returns, the policy reduces overall welfare. Evaluating the scheme requires comparing its output gains against the next-best use of the same public money.'
        },
        {
          id:    'time-lag',
          icon:  '⏳',
          label: 'Time lag between training and productivity gains',
          why:   'Skills take time to develop and longer still to translate into productivity. Workers retrained today may not reach full effectiveness for 2–5 years; capital and management practices must catch up too. Short-term output effects are small even when long-term effects are large. Policy evaluation must distinguish horizon.'
        },
        {
          id:    'wage-rigidity',
          icon:  '🔒',
          label: 'Wage rigidity in shortage sectors',
          why:   'Shortage sectors like social care often pay low wages set by public funding or regulation. If wages can\'t rise to attract retrained workers, vacancies persist even as the supply of skilled workers grows. The mobility gain stalls at the sectoral wage barrier.'
        }
      ],
      hint: 'Look for the factors that most decide whether mobility gains translate into output gains, not just the ones that affect the cost of the policy.',
      pickN: 3,
      modelRanking: ['skills-match', 'capital-investment', 'geographic'],
      judgement: '"Whether a large UK adult retraining scheme substantially raises GDP depends primarily on three conditions: the extent to which training matches genuine employer demand for skills; whether complementary capital investment accompanies the upskilled labour; and whether geographic mobility constraints – driven by housing costs in productive regions – prevent retrained workers from reaching the jobs. If skills match demand, LRAS shifts right and real output rises. If capital is absent or workers cannot move, the mobility gain is incomplete and GDP growth is modest."',
      examBridge: '"The scheme\'s output effect depends most on how well the training matches genuine employer demand, whether complementary capital investment accompanies it, and whether geographic mobility constraints (housing, transport) let retrained workers reach the jobs. Without all three, the policy produces qualified workers but limited GDP gains."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Factors of Production: factor-mobility improvement shifts LRAS right
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   AD:    (110,40)→(510,360)
   LRAS₁: vertical at x=280, y=21→399 (initial)
   LRAS₂: vertical at x=360, y=21→399 (after factor-quality/mobility improvement)
   E₁ (AD ∩ LRAS₁): (280, 176)
   E₂ (AD ∩ LRAS₂): (360, 240)  – lower P (higher SVG y), higher Y */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Factors of Production',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('depends'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 2,

  /* ── Stage 0: Select the right diagram ── */
  select: {
    eyebrow:     'Diagram Connector – Select the Diagram',
    title:       'A successful adult retraining and childcare expansion improves the mobility and quality of UK labour. Which diagram correctly shows the long-run macro effect?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the effect on the UK economy. Think about which curve is shifted by a permanent change in factor quality.',
    hint:        'Skill focus: identify whether the change is to long-run productive capacity or short-run output.',

    options: [
      {
        id:      'lras-right',
        correct:  true,
        title:   'LRAS shifts right',
        sub:     'LRAS shifts right – better factor quality and mobility raise productive capacity at every price level.',
        why:     'A permanent improvement in the quality and mobility of labour expands what the economy can produce when all factors are fully employed. Long-run aggregate supply shifts right from LRAS₁ to LRAS₂. The new long-run equilibrium has higher real output Y₂ and a lower price level P₂.'
      },
      {
        id:      'lras-left',
        correct:  false,
        title:   'LRAS shifts left',
        sub:     'LRAS falls – wrong direction for an improvement.',
        why:     'A leftward shift in LRAS represents a fall in productive capacity (e.g. natural disaster, mass emigration, capital destruction). Raising factor mobility and quality does the opposite – it increases the economy\'s capacity to produce.'
      },
      {
        id:      'ad-right',
        correct:  false,
        title:   'AD shifts right',
        sub:     'AD rises – but mobility policy is a supply-side change, not a demand-side one.',
        why:     'Aggregate demand shifts when consumption, investment, government spending or net exports change. A retraining/childcare programme raises the supply of effective labour, not aggregate demand. (There may be a small AD effect from higher incomes, but the principal effect is on LRAS.)'
      },
      {
        id:      'sras-left',
        correct:  false,
        title:   'SRAS shifts left',
        sub:     'SRAS falls – describes a short-run cost shock, not a factor-quality improvement.',
        why:     'A leftward SRAS shift represents rising input costs in the short run (e.g. energy price spike). A long-run factor-quality improvement works in the opposite direction and operates on long-run capacity, not on short-run cost pressures.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '🎓',
    text:  'Adult retraining + childcare expansion raises labour quality and mobility. The supply of effective labour rises permanently – a long-run supply-side improvement.',
    dataPoints: [
      { icon: '🧠', text: 'Higher labour quality (skills, training)' },
      { icon: '🔄', text: 'Higher occupational mobility (workers reach shortage sectors)' },
      { icon: '📈', text: 'LRAS shifts right → higher real output, lower price level' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'AD / LRAS diagram – factor-mobility improvement shifts LRAS right, raising real output and lowering the price level',
    xLabel:    'Real output (Y)',
    yLabel:    'Price level (P)',

    lines: [
      /* AD – green downward-sloping */
      { x1: 110, y1: 40,  x2: 510, y2: 360, stroke: '#059669', strokeWidth: 2.5,
        label: 'AD', labelX: 514, labelY: 360, labelFill: '#059669' },
      /* LRAS₁ – blue vertical (initial) */
      { x1: 280, y1: 21,  x2: 280, y2: 399, stroke: '#2563eb', strokeWidth: 2.5,
        label: 'LRAS₁', labelX: 256, labelY: 16, labelFill: '#2563eb' },
      /* LRAS₂ – purple vertical (after factor-mobility improvement) */
      { x1: 360, y1: 21,  x2: 360, y2: 399, stroke: '#7c3aed', strokeWidth: 2.5,
        label: 'LRAS₂', labelX: 368, labelY: 16, labelFill: '#7c3aed' }
    ],

    guides: [
      /* Horizontal from y-axis to E₁ */
      { x1: 100, y1: 176, x2: 280, y2: 176, tickLeft: 'P₁', tickLeftY: 179 },
      /* Horizontal from y-axis to E₂ (lower P) */
      { x1: 100, y1: 240, x2: 360, y2: 240, tickLeft: 'P₂', tickLeftY: 243 },
      /* Vertical from E₁ down */
      { x1: 280, y1: 176, x2: 280, y2: 400, tickBottom: 'Y₁', tickBottomX: 280 },
      /* Vertical from E₂ down */
      { x1: 360, y1: 240, x2: 360, y2: 400, tickBottom: 'Y₂', tickBottomX: 360 }
    ],

    /* Shift arrow: LRAS₁ → LRAS₂ at y=80, pointing right */
    shiftArrow: { x1: 290, y1: 80, x2: 350, y2: 80, stroke: '#7c3aed' },

    eqDots: [
      {
        cx: 280, cy: 176, fill: '#2563eb',
        initLabel: 'Original equilibrium', initLabel2: '(Y₁, P₁)', initLabelX: 156, initLabelY: 172
      },
      {
        cx: 360, cy: 240, fill: '#7c3aed',
        newLabel: 'New equilibrium', newLabel2: '(Y₂ higher, P₂ lower)', newLabelX: 368, newLabelY: 246
      }
    ],

    legend: [
      { color: '#059669', text: 'AD = Aggregate Demand' },
      { color: '#2563eb', text: 'LRAS₁ = Long-run Aggregate Supply (before)' },
      { color: '#7c3aed', text: 'LRAS₂ = Long-run Aggregate Supply (after factor-mobility improvement)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of improved factor mobility and labour quality on the UK economy.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for prices and real output.',
    hint:        'Skill focus: connect the supply-side improvement to long-run macro outcomes.',

    zones: [
      { id: 'shift',     label: 'Shift label',          pctX: 56,  pctY: 13,   pctW: 22 },
      { id: 'new-eq',    label: 'New equilibrium',       pctX: 65,  pctY: 49,   pctW: 22 },
      { id: 'orig-eq',   label: 'Original equilibrium',  pctX: 30,  pctY: 36,   pctW: 22 },
      { id: 'orig-price',label: 'Original price (P₁)',   pctX: 0.5, pctY: 36,   pctW: 16 },
      { id: 'lo-price',  label: 'Lower price (P₂)',      pctX: 0.5, pctY: 51,   pctW: 16 }
    ],

    chips: [
      { id: 'lras-shift', text: 'LRAS shifts right',           icon: '→', zone: 'shift',      correct: true  },
      { id: 'new-eq',     text: 'New equilibrium (Y₂, P₂)',     icon: '●', zone: 'new-eq',     correct: true  },
      { id: 'orig-eq',    text: 'Original equilibrium (Y₁, P₁)',icon: '●', zone: 'orig-eq',    correct: true  },
      { id: 'orig-price', text: 'Original price (P₁)',          icon: '−', zone: 'orig-price', correct: true  },
      { id: 'lo-price',   text: 'Lower price (P₂)',             icon: '↓', zone: 'lo-price',   correct: true  },
      { id: 'lras-left',  text: 'LRAS shifts left',             icon: '←', zone: null,         correct: false },
      { id: 'ad-right',   text: 'AD shifts right',              icon: '→', zone: null,         correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the LRAS shift into clear written analysis using factor-of-production language.',

    vocab: ['LRAS', 'aggregate demand', 'factor mobility', 'occupational mobility', 'geographic mobility', 'labour quality', 'productive capacity', 'supply-side policy', 'real output'],

    parts: [
      {
        num:         1,
        title:       'Explain the LRAS shift',
        prompt:      'Why does improving factor mobility and labour quality shift LRAS right?',
        maxChars:    240,
        modelAnswer: 'Better-trained workers produce more output per hour, and more mobile workers move from low- to high-productivity uses. The same labour force now generates a larger maximum sustainable output when all factors are employed – productive capacity rises. LRAS, which represents this maximum, therefore shifts right from LRAS₁ to LRAS₂.'
      },
      {
        num:         2,
        title:       'Explain the macro outcomes',
        prompt:      'What happens to real output and the price level – and why?',
        maxChars:    240,
        modelAnswer: 'At the new long-run equilibrium, real output rises from Y₁ to Y₂ and the price level falls from P₁ to P₂. Higher productive capacity meets the same aggregate demand, so output expands and inflationary pressure (from supply bottlenecks) eases. This is the classic "supply-side win" – more output and lower inflation simultaneously.'
      },
      {
        num:         3,
        title:       'Add a wider economic effect',
        prompt:      'Add one argument about the wider impact on unemployment or living standards.',
        maxChars:    240,
        modelAnswer: 'Higher LRAS implies higher full-employment output, so structural unemployment falls as displaced workers find jobs in shortage sectors. Real wages can rise without triggering inflation because productivity has improved. Living standards rise both directly (higher real GDP per head) and indirectly (lower inflation eroding purchasing power).'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Identify which curve shifts and why (LRAS, factor quality/mobility)',
      'State outcome for real output (Y) and price level (P)',
      'Explain the mechanism in factor-of-production language',
      'Mention wider effects (employment, productivity, living standards)'
    ],

    examAnswer: '"A successful retraining and childcare programme raises both the quality and the mobility of UK labour. Better-skilled workers reach shortage sectors and produce more per hour, lifting the economy\'s productive capacity. LRAS shifts right from LRAS₁ to LRAS₂. At the new long-run equilibrium, real output rises from Y₁ to Y₂ and the price level falls from P₁ to P₂. Structural unemployment eases as displaced workers reallocate to shortage sectors, and real wages can rise sustainably because productivity has improved. This is the canonical supply-side outcome: more output, lower inflation, higher living standards."'
  }
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for factors_of_production
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Factors of Production',
  estTime: '15–20 minutes',
  goal:    'Bridge your factor-of-production knowledge into exam-quality application, analysis and evaluation using the UK\'s labour-shortage story.',

  intro: {
    summary: 'Use the UK\'s post-pandemic labour shortages and "missing workforce" to analyse how the quantity, quality and mobility of factors of production shape an economy\'s capacity – and whether supply-side policies can close the output gap.',
    heroKey: 'heroBars',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Apply factor-of-production theory to real UK labour-market data',
      'Trace how mobility-raising policies feed into output and productivity',
      'Pick and label the right macro diagram for a factor-quality improvement',
      'Evaluate which conditions decide whether a retraining scheme actually raises GDP'
    ],
    tip: "These steps are cognitive drills – same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context', skill: 'Application', sub: 'Read an extract and judge which evidence changes the answer.', href: TopicLoader.routes.link('context'), state: 'available' },
      { num: 2, name: 'Build the chain', skill: 'Analysis', sub: 'Order or fill the steps in a reasoning chain.', href: TopicLoader.routes.link('chain'), state: 'available' },
      { num: 3, name: 'Diagram connector', skill: 'Analysis', sub: 'Pick, label, interpret and explain the right diagram.', href: TopicLoader.routes.link('diagram'), state: 'available' },
      { num: 4, name: 'It depends on', skill: 'Evaluation', sub: 'Rank the factors that most change the answer.', href: TopicLoader.routes.link('depends'), state: 'available' },
      { num: 5, name: 'Make the judgement', skill: 'Evaluation', sub: 'Synthesise everything into an exam-quality judgement.', href: TopicLoader.routes.link('judge'), state: 'available' }
    ],

    stages: [
      { num: 1, name: 'Learn it', sub: 'Recap and lock in the gems',    state: 'done',    href: TopicLoader.routes.learn()      },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'current'                                                },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked'                                                 }
    ],

    startUrl:   TopicLoader.routes.link('context'),
    startLabel: 'Start Link it'
  }
};

/* ---- link-judge.js ---- */
/* ============================================================
   ECONOS – Link It · Make the Judgement station data
   Factors of Production: judge the retraining-and-output claim
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Factors of Production',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.routes.link('complete'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 4,

  wgll: [
    { icon: '🎯', text: 'Take a clear position'  },
    { icon: '🔗', text: 'Use the mechanism'       },
    { icon: '➕', text: 'Add a condition'         },
    { icon: '💬', text: 'Explain the limitation'  }
  ],

  scenarios: [
    {
      id: 'retraining-judgement',
      claim: {
        icon:   '🎓',
        prompt: 'Policy claim',
        text:   'A large UK adult retraining scheme would substantially raise real GDP by improving the mobility and quality of the labour factor of production.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '700,000 missing workers; 2.8m long-term sick; persistent care/HGV vacancies; apprenticeship starts −30%; capital investment 25% below G7.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Retraining → higher labour quality and occupational mobility → workers reach shortage sectors → LRAS shifts right → output rises.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'LRAS shifts right from LRAS₁ to LRAS₂; real output rises Y₁ → Y₂, price level falls P₁ → P₂.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on skills-demand match, complementary capital investment, and geographic mobility (housing/transport).' }
      ],
      cloze: 'A large adult retraining scheme raises the [1] of the UK labour force by upgrading workers\' skills and improving [2] mobility between sectors. As displaced workers gain skills relevant to shortage occupations (care, HGV driving, construction), they can move into vacancies that were previously unfillable. The economy\'s productive capacity rises, so LRAS shifts to the [3] from LRAS₁ to LRAS₂. At the new long-run equilibrium, real output [4] from Y₁ to Y₂ and the price level [5]. The output gain is largest when training matches actual [6] and is paired with [7] capital investment. However, the policy is less effective if [8] mobility is constrained by high housing costs in productive regions, because retrained workers cannot reach the jobs. The strongest judgement is that the scheme materially raises GDP only when training, capital and housing reform act together.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-quality',  text: 'quality',  correct: true  },
            { id: 'b1-quantity', text: 'quantity', correct: false },
            { id: 'b1-price',    text: 'price',    correct: false },
            { id: 'b1-cost',     text: 'cost',     correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-occ',  text: 'occupational',  correct: true  },
            { id: 'b2-geo',  text: 'geographic',    correct: false },
            { id: 'b2-fin',  text: 'financial',     correct: false },
            { id: 'b2-leg',  text: 'legal',         correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-right', text: 'right', correct: true  },
            { id: 'b3-left',  text: 'left',  correct: false },
            { id: 'b3-up',    text: 'up',    correct: false },
            { id: 'b3-down',  text: 'down',  correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-rises',  text: 'rises',           correct: true  },
            { id: 'b4-falls',  text: 'falls',           correct: false },
            { id: 'b4-flat',   text: 'remains flat',    correct: false },
            { id: 'b4-indet',  text: 'becomes indeterminate', correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-falls',  text: 'falls',  correct: true  },
            { id: 'b5-rises',  text: 'rises',  correct: false },
            { id: 'b5-flat',   text: 'is unchanged', correct: false },
            { id: 'b5-doubles', text: 'doubles', correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-demand', text: 'employer demand for skills', correct: true  },
            { id: 'b6-supply', text: 'consumer demand for goods',  correct: false },
            { id: 'b6-prices', text: 'general price inflation',    correct: false },
            { id: 'b6-rates',  text: 'interest rates',             correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-comp',   text: 'complementary',  correct: true  },
            { id: 'b7-sub',    text: 'substitute',     correct: false },
            { id: 'b7-zero',   text: 'zero',           correct: false },
            { id: 'b7-foreign',text: 'foreign-only',   correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-geo',    text: 'geographic',  correct: true  },
            { id: 'b8-occ',    text: 'occupational',correct: false },
            { id: 'b8-fin',    text: 'financial',   correct: false },
            { id: 'b8-cap',    text: 'capital',     correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always', text: 'Retraining always raises GDP regardless of other conditions',                                                  correct: false },
          { id: 'op-cond',   text: 'Retraining raises GDP when training matches employer demand and is paired with capital investment and housing reform', correct: true  },
          { id: 'op-fall',   text: 'Retraining reduces GDP because it pulls workers out of productive jobs',                                       correct: false },
          { id: 'op-only',   text: 'Geographic mobility is the only thing that matters',                                                           correct: false }
        ]
      },
      examBridge: '"A large UK adult retraining scheme raises labour quality and occupational mobility, shifting LRAS right and lifting real output. The 700,000 missing-worker gap and persistent shortages in care, HGV driving and construction show there is room for the policy to bite. However, the GDP gain depends on whether training matches employer demand, whether complementary capital investment accompanies it, and whether geographic mobility (constrained by housing costs in productive regions) lets retrained workers reach the jobs. The OBR\'s modest 60,000-person estimate for childcare expansion suggests individual mobility levers are incremental – a substantial GDP gain requires several supply-side policies acting together."'
    }
  ]
};

