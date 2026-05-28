/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   Behavioural Economics: present bias → overconsumption → nudge correction
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Behavioural Economics',
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
      id: 'present-bias-correction',
      scenario: {
        icon:  '🥤',
        label: 'Scenario',
        text:  'UK consumers regularly buy high-sugar soft drinks. At the point of purchase, they focus on immediate taste enjoyment and do not account for the future health costs of diabetes and obesity. The government introduces the Soft Drinks Industry Levy (SDIL) in 2018 and extends mandatory traffic light nutritional labelling.'
      },
      anchor: 'Present bias: consumers underweight future health costs vs taste.',
      tiles: [
        {
          id:  'step-failure',
          icon: '🧠',
          text: 'Present bias inflates demand D_rational → D_biased → overconsumption',
          pos:  0
        },
        {
          id:  'step-correction',
          icon: '↩️',
          text: 'Labels + SDIL make cost salient → effective demand shifts left',
          pos:  1
        },
        {
          id:  'step-outcome',
          icon: '✅',
          text: 'Q falls toward Q_rational; NHS costs cut; reformulation, not regressive tax',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '💰',
          text: 'Rising consumer incomes increase demand for premium low-sugar alternatives',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '🏋️',
          text: 'Government subsidises sports facilities as a complement to diet change',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '📉',
          text: 'Bank of England raises rates, reducing spending on discretionary goods',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Present bias operates through System 1 (Kahneman): at the point of purchase, the immediate sensory pleasure of a sugary drink is vivid and certain, while the health cost is distant, abstract, and discounted steeply. The rational consumer would weigh these correctly (D_rational); the actual consumer with present bias overweights the immediate pleasure (D_biased). The gap between D_biased and D_rational represents systematic overconsumption – a welfare loss as consumers impose costs on their future selves (internalities) and on the NHS (externalities).'
        },
        {
          pos:  1,
          text: 'Traffic light labelling works by making the future health cost salient at the exact moment of decision – the red label triggers System 2 processing and loss aversion, correcting the present bias in that moment. SDIL works as a supply-side nudge: by raising the cost of high-sugar recipes, it incentivises producers to reformulate without raising consumer prices – 50% reformulated before the levy took effect. Both mechanisms shift effective demand left from D_biased toward D_rational.'
        },
        {
          pos:  2,
          text: 'The joint outcome is a reduction in overconsumption (Q falls toward Q_rational) without the regressive burden of a direct consumption tax. Because the SDIL targets producers rather than consumers, lower-income households (who spend a larger share of income on soft drinks) do not face higher prices for reformulated products. Reformulation also preserves consumer choice – consumers can still buy high-sugar products if they choose, at a higher price, but the default available product is healthier. This is libertarian paternalism in practice.'
        }
      ],
      examBridge: '"Present bias inflated demand for high-sugar soft drinks above the rational level (D_biased > D_rational). The SDIL created a producer incentive to reformulate (50% of drinks reformulated before the levy took effect), effectively shifting the composition of available products toward lower-sugar alternatives – a supply-side nudge. Traffic light labelling corrected present bias at the point of purchase, shifting demand left toward D_rational. Together, these interventions reduced overconsumption without the regressivity of a direct Pigouvian consumption tax."',

      prompts: [
        'Why does present bias cause demand for high-sugar products to exceed the rational level?',
        'How do traffic light labelling and the SDIL each correct present bias?',
        'Why is the SDIL preferred over a direct consumer tax on soft drinks?'
      ],
      modelAnswers: [
        'Present bias means consumers discount future health costs (diabetes, obesity) too heavily relative to immediate taste enjoyment. At checkout, the health cost is distant and abstract – System 1 ignores it. So effective WTP for high-sugar products at the point of purchase (D_biased) exceeds what a fully rational consumer with correct time preferences would pay (D_rational). The gap is systematic and predictable, not random noise.',
        'Traffic light labelling makes the health cost salient at the point of decision – the red label activates System 2 processing and loss aversion, partially correcting the present bias in the moment (BIT: 15% purchase reduction for impulsive buyers). The SDIL works upstream: it raises the cost of producing high-sugar recipes, incentivising producers to reformulate – 50% did so before the levy took effect. Both mechanisms shift effective demand left from D_biased toward D_rational, but through different pathways (consumer information vs producer incentive).',
        'A direct consumer tax on soft drinks raises prices for all consumers – a regressive burden (lower-income households spend a higher proportion of income on soft drinks). Denmark\'s fat tax was repealed after 15 months due to cross-border shopping and political backlash. The SDIL targets producers: those who reformulate avoid the levy and can maintain prices, while those who don\'t pay the levy (which may or may not be passed on). The net outcome is reformulation (structural demand reduction) without regressive price effects – making the SDIL more equitable and more politically durable.'
      ],
      vocab: ['behavioural economics', 'present bias', 'status quo bias', 'nudge theory', 'libertarian paternalism', 'choice architecture', 'heuristics', 'bounded rationality', 'SDIL', 'Pigouvian tax', 'overconsumption', 'salience']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Behavioural Economics
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Behavioural Economics',
  stations: [
    { id: 'context', label: 'Use the context',    max: 6, color: '#059669' },
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
      { min: 60, text: 'Good – review the complicating factors' },
      { min: 0,  text: 'Evidence classification needs work' }
    ],
    chain: [
      { min: 100, text: 'Perfect causal chain' },
      { min: 50,  text: 'Clear causality – check the missing step' },
      { min: 0,   text: 'The causal chain needs work' }
    ],
    diagram: [
      { min: 80, text: 'Strong diagram reading' },
      { min: 55, text: 'Good – check the outcome for P and Q' },
      { min: 0,  text: 'Diagram work needs more attention' }
    ],
    depends: [
      { min: 80, text: 'Strong evaluation conditions identified' },
      { min: 50, text: 'Good – one key condition missed' },
      { min: 0,  text: 'Review the key evaluation conditions' }
    ],
    judge: [
      { min: 80, text: 'Excellent judgement structure' },
      { min: 60, text: 'Judgement is strong but could be more precise' },
      { min: 0,  text: 'Judgement structure needs more precision' }
    ]
  },

  useInLandIt: 'Behavioural economics identifies how present bias, status quo bias and bounded rationality cause demand to deviate from the rational level. Nudges correct demand without coercion; taxes correct it through price. Compare both on: effectiveness (strength of bias), equity (regressive vs neutral), and political feasibility. The SDIL is a hybrid: supply-side price incentive + structural reformulation.',

  focusInLandIt: {
    context: 'Use specific evidence – the 50% pre-levy reformulation, 29% sugar content fall, and Denmark fat tax failure – to anchor your application to the real-world case, not just generic behavioural theory.',
    chain:   'State the chain explicitly: present bias → D_biased > D_rational → overconsumption → SDIL reformulation + traffic light labelling → D shifts left → Q falls toward Q_rational → less overconsumption without regressive price effect.',
    diagram: 'Draw two demand curves (D_biased, D_rational) and a supply curve (S, approximately unchanged), label both equilibria, and show D shifting left with a leftward arrow between the curves.',
    depends: 'Lead with strength of present bias as your condition – if present bias is so strong that consumers ignore even prominent red labels, the nudge achieves little and a stronger instrument is needed. This is the pivotal factor.',
    judge:   'State a clear position (nudges outperform taxes when present bias is mild and equity matters), use the mechanism (D shifts left from D_biased to D_rational without price rise), add the condition (strength of bias / salience of nudge), and explain the limitation honestly (where bias is severe, nudges are insufficient).'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   Behavioural Economics: classify evidence on SDIL and nudges vs taxes
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Behavioural Economics',
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
    question:    'Which details in this extract most change whether nudge-based interventions (SDIL + traffic light labelling) are more effective than a direct Pigouvian consumption tax at correcting overconsumption of high-sugar soft drinks?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'UK SDIL statistics show that [[reformulation|50% of soft drinks were reformulated to avoid the levy]] before it even took effect in April 2018, and that average sugar content of soft drinks [[sugar-fall|fell 29% between 2015 and 2019]] (Public Health England).',
      'Traffic light nutritional labelling research by the Behavioural Insights Team found that [[red-label|red labels reduce purchase likelihood by 15% for impulsive buyers]], suggesting that salient information at point of decision can correct present bias without coercion.',
      'UK childhood obesity rates [[obesity|stopped rising in 2019–20 for the first time in decades]], coinciding with SDIL implementation – though multiple policy changes and COVID-related activity changes occurred in the same period.',
      'Denmark\'s fat tax on high-fat foods – a direct Pigouvian consumption tax – was [[denmark|repealed after 15 months due to cross-border shopping]] and political unpopularity, with consumers simply buying taxed items in Germany and Sweden.',
      'HMRC data shows the SDIL [[revenue|generated £340 million in revenue in 2022–23]], with most of this raised from producers who chose not to reformulate their products rather than from a broad-based consumer tax.'
    ],

    evidence: {
      'reformulation': { text: '50% of soft drinks were reformulated to avoid the levy' },
      'sugar-fall':    { text: 'fell 29% between 2015 and 2019' },
      'red-label':     { text: 'red labels reduce purchase likelihood by 15% for impulsive buyers' },
      'obesity':       { text: 'stopped rising in 2019–20 for the first time in decades' },
      'denmark':       { text: 'repealed after 15 months due to cross-border shopping' },
      'revenue':       { text: 'generated £340 million in revenue in 2022–23' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports nudges over Pigouvian taxes',  tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against nudges over taxes',      tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',       tone: 'blue',  icon: '?' }
    ],

    correct: {
      'reformulation': 'supports',
      'sugar-fall':    'supports',
      'red-label':     'supports',
      'obesity':       'complicates',
      'denmark':       'supports',
      'revenue':       'complicates'
    },

    explain: {
      'reformulation': 'The 50% pre-levy reformulation shows the SDIL worked as a supply-side nudge: producers changed their recipes to avoid the levy rather than passing higher prices to consumers. This is exactly what nudge theory predicts – changing the choice architecture (product composition) rather than restricting consumer freedom. Strongly supports nudges over direct consumption taxes.',
      'sugar-fall':    'A 29% reduction in average sugar content between 2015 and 2019 is a large structural change achieved without raising consumer prices. A Pigouvian consumption tax would have achieved some demand reduction but would also have been regressive. The SDIL achieved the outcome more efficiently and equitably. Supports nudges.',
      'red-label':     'A 15% reduction in purchase likelihood from red labels demonstrates that salient information at the point of decision can correct present bias directly – without any price change. This is the mechanism nudge theory predicts. If nudges have measurable effects, they can substitute for more coercive instruments. Supports nudges.',
      'obesity':       'The coincidence of falling obesity rates with SDIL is consistent with the nudge being effective – but multiple confounders exist (COVID lockdowns changed eating habits; other food policy changes occurred simultaneously). Correlation does not establish causation. This complicates rather than settles the argument.',
      'denmark':       'Denmark\'s fat tax was a direct Pigouvian consumption tax – the instrument being compared to nudges. Its failure after 15 months due to cross-border shopping and political backlash is strong evidence that direct consumption taxes face practical limitations that supply-side nudges (like SDIL) avoid. Strongly supports nudges.',
      'revenue':       'The £340m revenue figure complicates the comparison: it shows the SDIL is partly working as a revenue instrument (those who didn\'t reformulate pay the levy) and partly as a nudge (those who did reformulate avoided it). Whether the revenue is a feature or a cost of the SDIL design depends on whether it is recycled effectively. This cuts both ways.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The 50% pre-levy reformulation and 29% sugar content reduction show the SDIL acted as an effective supply-side nudge – changing product composition without raising consumer prices. Denmark\'s fat tax failure demonstrates the practical limits of direct Pigouvian consumption taxes. However, the obesity correlation complicates attribution, and the £340m revenue figure shows the SDIL is a hybrid rather than a pure nudge."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'             },
      { icon: '❓', text: 'Ask which details change the conclusion'           },
      { icon: '⚖️', text: 'Separate supporting evidence from complications'   }
    ]
  }
};

/* ---- link-depends.js ---- */
/* ============================================================
   ECONOS – Link It · It Depends On station data
   Behavioural Economics: evaluate nudges vs Pigouvian taxes claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Behavioural Economics',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether nudges outperform Pigouvian taxes for correcting irrational overconsumption.',
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
      id: 'nudge-vs-tax-depends',
      claim: {
        icon:   '🥤',
        prompt: 'Policy claim',
        text:   'Nudges beat Pigouvian taxes for correcting irrational overconsumption.'
      },
      factors: [
        {
          id:    'present-bias-strength',
          icon:  '⏱️',
          label: 'Strength of present bias in the target population',
          why:   'Nudges are most effective when present bias is mild to moderate – consumers need only be reminded of future costs to adjust. Where present bias is severe (addiction to high-sugar products, habitual consumption), making costs salient has minimal effect. In these cases, more coercive instruments (Pigouvian taxes, quantity restrictions) are needed to overcome the behavioural barrier.'
        },
        {
          id:    'salience-design',
          icon:  '👁️',
          label: 'Salience and design quality of the nudge',
          why:   'Traffic light labelling only works if consumers notice, process and respond to the red label at the point of decision. Eye-tracking research shows 40% of shoppers do not look at nutritional labels when making purchase decisions. Nudge effectiveness depends heavily on choice architecture quality – where the information is displayed, how large it is, and whether it is in intuitive format (% traffic light vs calorie counts).'
        },
        {
          id:    'regressivity',
          icon:  '💰',
          label: 'Regressive distributional impact of Pigouvian taxes vs nudges',
          why:   'A Pigouvian sugar tax raises prices for all consumers – imposing a proportionally larger burden on lower-income households (who spend a larger share of income on these goods). Nudges do not raise prices and are therefore non-regressive. Where equity concerns are paramount, nudges are preferred even if they achieve smaller demand corrections – because the welfare cost is distributed more fairly.'
        },
        {
          id:    'substitution',
          icon:  '🔄',
          label: 'Availability of healthier substitutes',
          why:   'Nudges shift demand from high-sugar to lower-sugar products only if acceptable substitutes exist. Reformulation (SDIL effect) creates those substitutes within the same product range – Coca-Cola Zero is a near-perfect substitute for regular Coca-Cola. Where substitutes are unavailable or less acceptable, nudges cause consumers to sacrifice welfare without achieving the health outcome.'
        },
        {
          id:    'habit',
          icon:  '🔁',
          label: 'Role of habit and status quo bias',
          why:   'Many soft drink consumption patterns are habitual – consumers do not actively choose at each purchase but repeat the same decision. Status quo bias means habitual choices persist even when nudges are present. Breaking habits requires stronger interventions than information nudges – default changes (making water the default drink in school vending machines) exploit status quo bias in the opposite direction.'
        },
        {
          id:    'political-feasibility',
          icon:  '🗳️',
          label: 'Political feasibility of tax vs nudge',
          why:   'Pigouvian taxes on food and drink face strong political opposition (accused of paternalism, regressivity, nanny state). The Denmark fat tax was repealed after 15 months. Nudges (labelling, reformulation incentives) face less political opposition because they preserve consumer choice. In practice, political feasibility often determines which instruments are adopted regardless of theoretical efficiency.'
        },
        {
          id:    'cross-border',
          icon:  '🌍',
          label: 'Cross-border substitution (purchase abroad or online)',
          why:   'A Pigouvian consumption tax on domestically-sold products can be circumvented by cross-border shopping (buying in Ireland, France, etc.) or online imports. This reduces effectiveness and introduces equity issues (wealthier consumers can afford to travel or bulk-buy abroad). Nudges embedded in UK product labelling requirements apply to all products sold in UK retail and are harder to circumvent.'
        },
        {
          id:    'long-run',
          icon:  '📅',
          label: 'Long-run vs short-run effectiveness of each instrument',
          why:   'Nudges may produce lasting changes in consumer habits if they shift norms (e.g., water becomes the expected default drink at school meals). Pigouvian taxes produce lasting effects while maintained but demand rebounds if taxes are removed. Reformulation under SDIL is potentially permanent – once recipes are changed, they tend to remain lower in sugar. Long-run effectiveness favours structural interventions (reformulation) over price signals that can be reversed.'
        }
      ],
      modelRanking: ['present-bias-strength', 'salience-design', 'regressivity'],
      judgement: '"Nudges outperform Pigouvian taxes when present bias is mild enough to be corrected by salient information (so labelling works), when equity concerns make price increases undesirable, and when political feasibility favours non-coercive instruments. The SDIL is a hybrid: a producer-side levy that funds reformulation (structural nudge) rather than a consumption tax – combining price incentives for producers with non-regressive consumer outcomes. It works best where reformulation creates acceptable substitutes, as with carbonated drinks."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   Behavioural Economics: present bias corrected – demand shifts left
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378

   S (supply of soft drinks, approximately unchanged):
     (130,390)→(490,30)   slope = -1.0   y = 520 - x

   D_biased (behaviourally inflated demand – before correction):
     (110,50)→(514,381)   slope = (381-50)/(514-110) = 331/404 ≈ 0.819
     y = 50 + 0.819*(x-110) = 50 + 0.819x - 90.1 = -40.1 + 0.819x ≈ -40.75 + 0.825x
     Using slope 0.825: y = -40.75 + 0.825x
     Check: x=110 → y=-40.75+90.75=50 ✓; x=514 → y=-40.75+424.1≈383≈381 ✓

   D_rational (after nudge corrects present bias – shifted left ~50px):
     (110,100)→(449,381)   y = 100 + 0.825*(x-110) = 100+0.825x-90.75 = 9.25+0.825x
     Check: x=110 → y=9.25+90.75=100 ✓; x=449 → y=9.25+370.4=379.7≈381 ✓

   E_biased (D_biased ∩ S): -40.75+0.825x = 520-x → 1.825x = 560.75 → x≈307, y≈213
   E_rational (D_rational ∩ S): 9.25+0.825x = 520-x → 1.825x = 510.75 → x≈280, y≈240  */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Behavioural Economics',
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
    title:       'Traffic light nutritional labelling and the SDIL reformulation incentive correct present bias in soft drink consumption. Which diagram correctly shows the effect on demand for high-sugar products?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the nudge effect. Think about which curve is directly affected and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      'd-left',
        correct:  true,
        title:   'Demand shifts left',
        sub:     'Demand shifts left – nudges and reformulation correct present bias, reducing demand from the behaviourally inflated level to the rational level',
        why:     'Present bias inflated demand above the rational level (D_biased > D_rational). Traffic light labelling corrects present bias at the point of decision, reducing WTP for high-sugar products. SDIL reformulation incentives change available products so consumers face lower-sugar options by default. Both mechanisms shift effective demand left from D_biased toward D_rational – reducing overconsumption without restricting consumer choice or raising consumer prices.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Demand rises – consumers\' willingness to pay for high-sugar products increases',
        why:     'Demand shifting right would mean consumers are willing to pay more for high-sugar products – the opposite of what the SDIL and traffic light labelling are designed to achieve. Present bias inflates D above D_rational; a corrective nudge shifts D back left toward D_rational. The direction is wrong.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Supply of high-sugar products contracts – producers reduce output at every price',
        why:     'A leftward supply shift would represent rising production costs for all soft drinks. While the SDIL raises costs for high-sugar recipes, producers responded mainly by reformulating (switching to lower-sugar recipes) rather than reducing total supply. The primary market effect is a demand correction (as reformulated products have lower-sugar content), not a supply contraction. Supply of reformulated products was maintained.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'Supply of high-sugar products expands – producers can supply more at every price',
        why:     'Supply shifting right would represent falling production costs or technology improvement – which is the opposite of what the SDIL creates (it raises costs for unreformulated products). This diagram shows no connection to the behavioural correction mechanism.'
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
    ariaLabel: 'Supply and demand diagram – nudge and SDIL shift demand left from D_biased to D_rational',
    xLabel:    'Quantity of high-sugar soft drinks',
    yLabel:    'Price (£)',

    lines: [
      /* S (supply of soft drinks, approximately unchanged) – blue upward-sloping */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S', labelX: 494, labelY: 28, labelFill: '#2563eb' },
      /* D_biased (behaviourally inflated demand – before correction) – red downward-sloping */
      { x1: 110, y1: 50,  x2: 514, y2: 381, stroke: '#dc2626', strokeWidth: 2.5,
        label: 'D_biased', labelX: 470, labelY: 381, labelFill: '#dc2626' },
      /* D_rational (demand after nudge corrects present bias) – green downward-sloping */
      { x1: 110, y1: 100, x2: 449, y2: 381, stroke: '#059669', strokeWidth: 2.5,
        label: 'D_rational', labelX: 453, labelY: 381, labelFill: '#059669' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
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
      { color: '#dc2626', text: 'D_biased = Behaviourally inflated demand (present bias – before nudge)' },
      { color: '#059669', text: 'D_rational = Rational demand (after traffic light labelling + SDIL reformulation)' },
      { color: '#2563eb', text: 'S = Supply of soft drinks (approximately unchanged)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
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
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['present bias', 'bounded rationality', 'nudge theory', 'libertarian paternalism', 'choice architecture', 'salience', 'SDIL', 'Pigouvian tax', 'overconsumption', 'internality', 'regressive', 'reformulation'],

    parts: [
      {
        num:         1,
        title:       'Explain why D_biased is above D_rational',
        prompt:      'Why is D_biased above D_rational?',
        maxChars:    240,
        modelAnswer: 'Present bias means consumers overweight immediate taste pleasure relative to future health costs (diabetes, obesity). At the point of purchase, the health costs are distant and abstract – so effective WTP for high-sugar products exceeds what a fully rational consumer would pay. D_biased reflects this behavioural overconsumption; D_rational is what demand would be if consumers correctly weighted future costs.'
      },
      {
        num:         2,
        title:       'Explain how nudges and SDIL shift demand left',
        prompt:      'How do nudges and SDIL shift demand left?',
        maxChars:    240,
        modelAnswer: 'Traffic light labelling makes the health cost salient at the point of decision – the red label triggers loss aversion and corrects present bias in the moment. SDIL incentivises producer reformulation: by making high-sugar products more expensive to produce, manufacturers switch to lower-sugar recipes, reducing the availability of the most harmful products. Both mechanisms shift effective demand from D_biased toward D_rational.'
      },
      {
        num:         3,
        title:       'Explain why nudges may be preferred to a Pigouvian tax',
        prompt:      'Why might nudges be preferred to a Pigouvian consumption tax?',
        maxChars:    240,
        modelAnswer: 'A Pigouvian tax on soft drinks raises prices for all consumers – a regressive burden (lower-income households spend a higher proportion of income on soft drinks). Denmark\'s fat tax was repealed after 15 months due to cross-border shopping and political unpopularity. Nudges (labelling, reformulation) achieve demand correction without regressive price effects and preserve consumer choice. However, nudges only work if consumers notice and process the information – strong present bias may require more coercive instruments in some cases.'
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

    examAnswer: '"Present bias inflates demand for high-sugar soft drinks above the rational level (D_biased). UK traffic light labelling and the SDIL reformulation incentive shift demand left from D_biased to D_rational – reducing overconsumption without the regressive burden of a direct consumption tax. The 29% average sugar content reduction and 50% pre-levy reformulation rate indicate that the SDIL was highly effective as a supply-side nudge. However, the nudge approach requires consumers to process and respond to the information signal – a residual limitation where present bias is very strong."'
  }
};

/* ---- link-extract.js ---- */
/* ============================================================
   ECONOS – Link It · Read the Extract station data
   Behavioural Economics: nudges, sugar tax and bounded rationality
   ============================================================ */

window.ECONOS_LINK_EXTRACT = {
  topic:   'Behavioural Economics',
  backUrl: TopicLoader.routes.link('chain'),
  nextUrl: TopicLoader.routes.link('diagram'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: -1,

  eyebrow:     'Read the Extract',
  instruction: 'Read the passage carefully, then use behavioural economics concepts to interpret each question. Connect what the extract says to specific theories you have studied.',

  passage: {
    title: 'Extract: The UK Soft Drinks Industry Levy and the architecture of choice',
    source: 'Adapted from: HM Treasury (2016–2018); PHE Sugar Reduction Programme; Thaler & Sunstein (2008)',
    text: 'When the UK introduced the Soft Drinks Industry Levy (SDIL) in 2018, manufacturers faced a choice: pay the tax on high-sugar drinks or reformulate to avoid it. Within two years, 50% of drinks previously subject to the levy had been reformulated – without any reduction in consumer choice. Meanwhile, NHS England\'s \'sugar smart\' defaults in hospital cafeterias – placing water at eye level and moving high-sugar drinks below the counter – reduced high-sugar drink sales by 15% without any price change or compulsion. Economists at the IFS noted that UK households consistently underestimate the long-run health costs of high-sugar consumption: a phenomenon they attribute to present bias and optimism bias. Unlike a Pigouvian tax, which assumes consumers respond rationally to price signals, the SDIL operates partly through the supply side – changing what manufacturers produce rather than leaving correction entirely to consumer demand.'
  },

  questions: [
    {
      id: 'be-extract-q1',
      question: 'The extract states that UK households "consistently underestimate the long-run health costs of high-sugar consumption." Which behavioural economics concepts explain this?',
      options: [
        'Herd behaviour – households copy each other\'s consumption patterns, creating a cascade of underestimation',
        'Present bias and optimism bias – people overweight immediate pleasure relative to future health costs, and irrationally believe bad health outcomes will not happen to them',
        'The sunk cost fallacy – consumers continue high-sugar consumption because they have already paid for previous purchases',
        'Loss aversion – consumers fear giving up sugary drinks more than they value the health gain'
      ],
      correct: 1,
      explanation: 'Present bias means consumers give excessive weight to immediate pleasure (the taste of a sugary drink now) relative to future costs (long-run health damage). Optimism bias means they systematically underestimate the probability that bad health outcomes will affect them personally. Both biases lead to choices that diverge from the individual\'s own long-run interest – a core behavioural economics critique of the standard rational agent model. This is why the IFS economists attribute the underestimation to behavioural bias, not ignorance of health information.'
    },
    {
      id: 'be-extract-q2',
      question: 'The NHS\'s "sugar smart" defaults – placing water at eye level and high-sugar drinks below the counter – are an example of which policy approach?',
      options: [
        'A Pigouvian tax – the NHS is pricing the health externality of high-sugar drinks into the choice',
        'A regulation – the NHS is banning high-sugar drinks from its cafeterias to protect consumer welfare',
        'A nudge – the choice architecture is altered to make the healthier option the default, without removing choice or adding a financial incentive',
        'An information provision policy – consumers are given additional health data to help them make more rational choices'
      ],
      correct: 2,
      explanation: 'A nudge (Thaler & Sunstein, 2008) alters the architecture of choice to make a desired behaviour the default, without restricting options or using price incentives. Placing water at eye level exploits status quo bias and salience – people tend to choose what they see first and what is most accessible. The consumer can still buy a high-sugar drink (it\'s below the counter), but the default has been shifted. The 15% reduction in sales shows the nudge worked – through architecture, not prices or prohibition.'
    },
    {
      id: 'be-extract-q3',
      question: 'The extract contrasts the SDIL with a "Pigouvian tax, which assumes consumers respond rationally to price signals." What does this contrast reveal about the SDIL\'s underlying logic?',
      options: [
        'The SDIL treats sugar as a public good that the free market under-provides',
        'The SDIL is based on the assumption that consumers are perfectly rational and respond to price signals exactly as standard theory predicts',
        'The SDIL operates partly through behavioural channels: by incentivising manufacturers to reformulate (supply-side nudge), it reduces sugar intake without relying on consumers to overcome their own present bias',
        'The SDIL is primarily designed to raise government revenue, with health improvement as an unintended side effect'
      ],
      correct: 2,
      explanation: 'The SDIL\'s genius (and its departure from standard Pigouvian logic) is that it targets the supply side rather than demanding that consumers overcome their present bias through price signals. By making the levy apply at the manufacturer level, the government gave producers a strong financial incentive to reformulate – so 50% of affected drinks were changed. The consumer never had to make the "rational choice"; the product itself changed. This is a practical acknowledgement that behavioural biases are hard to overcome with prices alone, and that supply-side intervention can bypass the behavioural problem entirely.'
    }
  ]
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for behavioural_econ
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Behavioural Economics',
  estTime: '15–20 minutes',
  goal:    'Bridge your behavioural economics knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: 'Use the UK Soft Drinks Industry Levy and nutritional labelling to apply behavioural economics – how present bias causes overconsumption of unhealthy products, and whether nudge theory or Pigouvian taxes are more effective at correcting behavioural market failure.',
    heroKey: 'heroBehavioural',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Explain present bias and its effect on consumer demand',
      'Build the causal chain from behavioural failure to overconsumption to policy correction',
      'Read a demand-left diagram showing how nudges correct present bias',
      'Evaluate the conditions under which nudges outperform Pigouvian taxes'
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
   Behavioural Economics: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Behavioural Economics',
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
      id: 'nudge-vs-tax-judgement',
      claim: {
        icon:   '🥤',
        prompt: 'Policy claim',
        text:   'Nudge-based interventions are more effective than Pigouvian taxes for correcting irrational overconsumption of unhealthy goods.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '50% of drinks reformulated pre-levy; 29% sugar content fall; red label cuts purchases 15%; Denmark fat tax repealed after 15 months.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Present bias inflates D above D_rational → SDIL + labelling → D shifts left → Q falls → less overconsumption, no regressive price effect.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'D shifts left from D_biased to D_rational; equilibrium moves from (Q_biased, P_biased) to (Q_rational, P_rational).' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Verdict depends on strength of present bias, salience of nudge design, and equity concerns about regressive tax burden.' }
      ],
      cloze: 'Present bias causes consumers to [1] future health costs relative to immediate taste enjoyment, inflating demand for high-sugar products above D_rational. Nudge interventions – such as traffic light labelling and SDIL reformulation incentives – correct this by making [2] at the point of purchase, shifting demand [3] from D_biased toward D_rational. This reduces overconsumption without [4], unlike a Pigouvian consumption tax which would raise prices and impose a [5] burden on lower-income households. However, nudges are only effective when consumers [6] the salient information – where [7] is very strong, consumers may ignore even prominent health warnings. The SDIL\'s producer-side design is particularly effective because it achieves reformulation through the [8] without requiring consumers to change habits at all.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-underweight',  text: 'underweight',                                  correct: true  },
            { id: 'b1-overweight',   text: 'overweight',                                   correct: false },
            { id: 'b1-correctly',    text: 'correctly weight',                             correct: false },
            { id: 'b1-discount',     text: 'rationally discount',                          correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-salient',      text: 'future health costs salient',                  correct: true  },
            { id: 'b2-producer',     text: 'producer costs higher',                        correct: false },
            { id: 'b2-tax',          text: 'government taxes visible',                     correct: false },
            { id: 'b2-surplus',      text: 'consumer surplus explicit',                    correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-left',         text: 'left',                                         correct: true  },
            { id: 'b3-right',        text: 'right',                                        correct: false },
            { id: 'b3-up',           text: 'upward along',                                 correct: false },
            { id: 'b3-down',         text: 'downward along',                               correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-prices',       text: 'raising prices',                               correct: true  },
            { id: 'b4-surplus',      text: 'reducing consumer surplus',                    correct: false },
            { id: 'b4-efficiency',   text: 'improving allocative efficiency',              correct: false },
            { id: 'b4-costs',        text: 'increasing producer costs',                    correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-regressive',   text: 'regressive',                                   correct: true  },
            { id: 'b5-progressive',  text: 'progressive',                                  correct: false },
            { id: 'b5-neutral',      text: 'neutral',                                      correct: false },
            { id: 'b5-proportionate',text: 'proportionate',                                correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-notice',       text: 'notice and respond to',                        correct: true  },
            { id: 'b6-ignore',       text: 'ignore',                                       correct: false },
            { id: 'b6-resist',       text: 'resist',                                       correct: false },
            { id: 'b6-reject',       text: 'rationally reject',                            correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-bias',         text: 'present bias',                                 correct: true  },
            { id: 'b7-cross',        text: 'cross-price elasticity',                       correct: false },
            { id: 'b7-govt',         text: 'government failure',                           correct: false },
            { id: 'b7-adverse',      text: 'adverse selection',                            correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-supply',       text: 'supply-side incentive (producer reformulation)', correct: true  },
            { id: 'b8-price',        text: 'price mechanism alone',                        correct: false },
            { id: 'b8-demand',       text: 'demand-side tax',                              correct: false },
            { id: 'b8-mandate',      text: 'consumer mandate',                             correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',   text: 'Nudges are always more effective than taxes regardless of the strength of behavioural bias',                                          correct: false },
          { id: 'op-nuanced',  text: 'Nudges outperform taxes when present bias is mild, equity matters, and substitutes exist – but taxes may be needed where bias is severe', correct: true  },
          { id: 'op-tax',      text: 'Pigouvian taxes are always the most efficient correction for behavioural market failures',                                            correct: false },
          { id: 'op-rational', text: 'Behavioural economics interventions are irrelevant because consumers are always rational',                                            correct: false }
        ]
      },
      examBridge: '"Present bias inflated demand for high-sugar soft drinks above D_rational. The SDIL\'s producer reformulation incentive and traffic light labelling both shifted demand left toward D_rational – without the regressive burden of a consumption tax. The 29% sugar content reduction and 50% pre-levy reformulation show the supply-side nudge (SDIL) was highly effective. However, nudges are insufficient where present bias is severe: some consumers ignored labelling despite awareness of health risks – suggesting a complementary role for more coercive instruments in the hardest-to-reach groups."'
    }
  ]
};

