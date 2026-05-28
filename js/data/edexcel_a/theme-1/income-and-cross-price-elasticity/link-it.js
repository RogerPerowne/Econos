/* ============================================================
   ECONOS – Link It · consolidated station data
   Concatenated from per-station files at v0.4.0; each station's
   IIFE still publishes its own window.ECONOS_LINK_* global so
   engines need no changes.
   ============================================================ */

/* ---- link-calc.js ---- */
/* ============================================================
   ECONOS – Link It · Calculate It station data
   YED & XED: income and cross-price elasticity calculations
   ============================================================ */

window.ECONOS_LINK_CALC = {
  topic:   'Income & Cross-Price Elasticity',
  backUrl: TopicLoader.routes.link('chain'),
  nextUrl: TopicLoader.routes.link('diagram'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 2,

  eyebrow:     'Calculate It',
  instruction: 'YED and XED calculations test your ability to classify goods and predict demand responses. Work through both formulas and interpret each result.',

  questions: [
    {
      id: 'yed-q1',
      title: 'Calculate YED – classify a good',
      scenario: 'UK average household income rises from £32,000 to £35,200 per year (a rise of 10%). Over the same period: (a) Demand for domestic flights rises from 60m to 67.2m passengers, and (b) Demand for bus journeys falls from 5.2bn to 4.94bn annually.',
      question: 'Calculate YED for <strong>domestic flights</strong>. Is this a normal good, inferior good, or luxury?',
      hint: 'YED = (% change in Qd) ÷ (% change in income). YED > 1 → luxury; 0 < YED < 1 → normal; YED < 0 → inferior.',
      method: [
        { step: '% change in income',   working: '(35,200 − 32,000) ÷ 32,000 × 100 = 10%' },
        { step: '% change in Qd (flights)', working: '(67.2m − 60m) ÷ 60m × 100 = 12%' },
        { step: 'YED for flights',      working: '12 ÷ 10 = +1.20' },
        { step: 'Classify',             working: 'YED = +1.20 > 1 → luxury good (income elastic). Demand rises faster than income – consistent with flights being a discretionary purchase.' }
      ],
      inputType: 'number',
      answer: 1.2,
      unit: '(YED value)',
      tolerance: 0.01,
      feedback: {
        correct: 'Correct! YED = +1.20. Domestic flights are a luxury good (YED > 1) – demand is income elastic. As income rises 10%, demand rises 12%. This makes sense: flights are discretionary and consumers substitute from lower-cost transport as they get richer.',
        wrong: 'Method: %ΔIncome = 10%. %ΔQd(flights) = (67.2−60)/60 × 100 = 12%. YED = 12/10 = 1.20. Remember: YED > 1 = luxury; 0 < YED < 1 = normal; YED < 0 = inferior.'
      },
      examTip: 'The sign of YED is critical: positive means normal good, negative means inferior good. The magnitude tells you how responsive demand is to income. Luxury goods (YED > 1) face more volatile demand over the business cycle – an exam-quality evaluation point.'
    },
    {
      id: 'yed-q2',
      title: 'Calculate YED – inferior good',
      scenario: 'Use the same income data (10% rise). Demand for bus journeys falls from 5.2bn to 4.94bn annually.',
      question: 'Calculate YED for <strong>bus journeys</strong>. Is this a normal good, inferior good, or luxury?',
      hint: 'Same formula – but notice that quantity demanded FALLS when income rises.',
      method: [
        { step: '% change in income',   working: '10% (as before)' },
        { step: '% change in Qd (bus)', working: '(4.94bn − 5.2bn) ÷ 5.2bn × 100 = −5%' },
        { step: 'YED for bus journeys', working: '−5 ÷ 10 = −0.50' },
        { step: 'Classify',             working: 'YED = −0.50 < 0 → inferior good. As income rises, consumers substitute away from buses toward cars or flights.' }
      ],
      inputType: 'number',
      answer: -0.5,
      unit: '(YED value, include sign)',
      tolerance: 0.01,
      feedback: {
        correct: 'Correct! YED = −0.50. Bus journeys are an inferior good – as income rises, consumers substitute toward more expensive transport (cars, trains, flights). The negative sign is essential here: it\'s what classifies the good as inferior.',
        wrong: 'Method: %ΔQd(bus) = (4.94−5.2)/5.2 × 100 = −5%. YED = −5/10 = −0.50. The negative sign matters – it shows the good is inferior. Don\'t ignore the sign when classifying goods.'
      },
      examTip: 'Inferior goods are not bad goods – they\'re goods that consumers buy less of as they get richer, because better alternatives become affordable. Examples: instant noodles, bus travel, own-brand supermarket food. Demand for inferior goods rises in recessions – an evaluation point for macro questions.'
    },
    {
      id: 'xed-q1',
      title: 'Calculate XED – substitutes or complements?',
      scenario: 'The price of butter rises from £1.00 to £1.20 per 250g pack (a 20% rise). Over the same period, demand for margarine increases from 2.0m packs to 2.3m packs per week.',
      question: 'Calculate XED between margarine (Qd) and butter (P). Are they substitutes or complements?',
      hint: 'XED = (% change in Qd of good A) ÷ (% change in price of good B). Positive → substitutes; Negative → complements.',
      method: [
        { step: '% change in price of butter',    working: '(£1.20 − £1.00) ÷ £1.00 × 100 = 20%' },
        { step: '% change in Qd of margarine',    working: '(2.3m − 2.0m) ÷ 2.0m × 100 = 15%' },
        { step: 'XED',                             working: '15 ÷ 20 = +0.75' },
        { step: 'Classify',                        working: 'XED = +0.75 > 0 → substitutes. As butter becomes more expensive, consumers switch to margarine.' }
      ],
      inputType: 'number',
      answer: 0.75,
      unit: '(XED value)',
      tolerance: 0.01,
      feedback: {
        correct: 'Correct! XED = +0.75. Butter and margarine are substitutes – a positive cross-price elasticity confirms this. As butter\'s price rises 20%, demand for margarine rises 15%. The relationship is moderately strong (XED = 0.75).',
        wrong: 'Method: %ΔP(butter) = 20%. %ΔQd(margarine) = (2.3−2.0)/2.0 × 100 = 15%. XED = 15/20 = 0.75. Positive XED → substitutes; negative XED → complements; near zero → unrelated goods.'
      },
      examTip: 'XED has two uses in A-level questions: (1) Classifying goods (substitutes vs complements). (2) Business strategy – a firm with a high positive XED faces intense competitive pressure from the substitute. A firm with a highly negative XED (complements) benefits from price cuts in the complementary good (e.g., cheap printers → more ink sales).'
    }
  ]
};

/* ---- link-chain.js ---- */
/* ============================================================
   ECONOS – Link It · Chain station data
   YED/XED: income fall → luxury demand collapse via YED > 1
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Income & Cross-Price Elasticity',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('diagram'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'yed-xed-mechanism',
      scenario: {
        icon:  '💸',
        label: 'Scenario',
        text:  'UK real household disposable income falls 2.5% in 2022 – the largest annual fall since records began – driven by inflation (11.1% CPI peak) outpacing wage growth.'
      },
      anchor: 'UK real disposable income falls 2.5% in 2022 (CPI peak 11.1%).',
      tiles: [
        {
          id:   'step-income',
          icon: '📉',
          text: 'Real income falls → luxury demand cut → demand curve shifts left',
          pos:  0
        },
        {
          id:   'step-yed',
          icon: '📊',
          text: 'YED > 1: 2.5% income fall → 5–18% demand drop for luxuries',
          pos:  1
        },
        {
          id:   'step-market',
          icon: '⚖️',
          text: 'New equilibrium: lower P₂, Q₂; budget substitutes gain (positive XED)',
          pos:  2
        },
        {
          id:   'dist-1',
          icon: '🏭',
          text: 'Firms increase prices to recover rising production costs',
          pos:  null
        },
        {
          id:   'dist-2',
          icon: '🏛️',
          text: 'Government raises income tax, cutting disposable income via the budget',
          pos:  null
        },
        {
          id:   'dist-3',
          icon: '🍞',
          text: 'Demand for staple foods rises as consumers prioritise essentials',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Real income – disposable income adjusted for inflation – is the key variable. When it falls, households face a budget constraint: they must cut spending. Non-essential goods (luxuries) are cut first. Income is a non-price determinant of demand: when it falls, the entire demand curve for luxury goods shifts left – at every price, fewer units are demanded.'
        },
        {
          pos:  1,
          text: 'YED > 1 for luxury goods means demand falls more than proportionally when income falls. A 2.5% income fall produces a 5%+ fall in luxury demand – confirmed by the 18% fall in luxury car registrations (implied YED ≈ 7). This is the amplification mechanism: the higher the YED, the larger the demand shift for any given income change.'
        },
        {
          pos:  2,
          text: 'The leftward demand shift creates a new equilibrium at lower P₂ and lower Q₂ – luxury producers face both lower prices and lower volumes, squeezing revenues. Simultaneously, positive XED means value substitutes gained demand: budget supermarkets (Aldi, Lidl) captured switching consumers. The cost of living crisis thus redistributed demand across the market spectrum, not just reduced it overall.'
        }
      ],
      examBridge: '"Falling real incomes shifted the demand curve for luxury goods to the left: consumers with YED > 1 reduced their luxury spending by more than the income fall percentage. The new equilibrium at lower P₂ and lower Q₂ contracted the luxury sector while budget alternatives captured switching demand. The XED between luxury and value substitutes (positive) amplified the budget sector demand rise."',

      prompts: [
        'Why does a fall in real income shift the demand curve for luxury goods rather than moving along it?',
        'Why does the YED amplify the demand fall for luxury goods beyond the income fall percentage?',
        'What happens to revenue in the luxury sector and demand in the budget sector?'
      ],
      modelAnswers: [
        'Income is a non-price determinant of demand. When real income falls, the whole schedule of demand shifts – at every price, households are willing and able to buy fewer luxury goods. This is a shift of the demand curve (left), not a movement along it (which would require the price of the luxury good itself to change).',
        'YED > 1 means demand is more sensitive to income than proportionally. A 2.5% income fall produces a luxury demand fall greater than 2.5% – because consumers treat non-essentials as the first spending category to cut. The higher the YED coefficient, the larger the leftward demand shift for the same income change.',
        'Luxury sector revenues fall because both price and quantity fall at the new equilibrium (P₂ < P₁ and Q₂ < Q₁). Budget sector demand rises because: (a) consumers trade down (XED > 0 between luxury and budget substitutes) and (b) for inferior goods (YED < 0), demand rises as income falls. Aldi/Lidl\'s record 17.3% market share reflects both effects.'
      ],
      vocab: ['income elasticity of demand', 'YED', 'cross-price elasticity', 'XED', 'normal good', 'inferior good', 'luxury good', 'necessity', 'substitute', 'complement', 'real income', 'demand shift']
    }
  ]
};

/* ---- link-complete.js ---- */
/* ============================================================
   ECONOS – Link It · Complete page data
   Income & Cross-Price Elasticity
   ============================================================ */

window.ECONOS_LINK_COMPLETE = {
  topic: 'Income & Cross-Price Elasticity',
  stations: [
    { id: 'context', label: 'Use the context',    max: 5, color: '#059669' },
    { id: 'chain',   label: 'Build the chain',    max: 3, color: '#f59e0b' },
    { id: 'calc',    label: 'Calculate It',        max: 6, color: '#3B82F6' },
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

  useInLandIt: 'YED > 1 means income changes shift demand more than proportionally for luxury goods; YED < 0 means inferior good demand rises. In exam responses, always state the YED sign and magnitude before drawing the demand shift, and note whether the income change is real or nominal and temporary or permanent.',

  focusInLandIt: {
    context: 'Use specific evidence – 2.5% real income fall, 18% luxury car fall, Aldi/Lidl 17.3% share – to anchor your application to the real-world case, not just generic YED theory.',
    chain:   'State the chain explicitly: real income falls → non-essential spending cut → YED > 1 amplifies luxury demand fall → D shifts left → new equilibrium at lower P₂ and Q₂.',
    diagram: 'Draw both D₁ and D₂ (D shifts left), keep S unchanged, label both equilibria, and show P₂ < P₁ and Q₂ < Q₁. Add the XED insight: budget substitutes\' demand shifts right simultaneously.',
    depends: 'Lead with YED magnitude as your primary condition – the exact coefficient determines how much luxury demand falls. Add income distribution as the key complication – aggregate figures can mislead.',
    judge:   'State a clear position, use the mechanism (YED > 1 → D shifts left → lower P and Q), add the condition (distribution of income fall, real vs nominal), and acknowledge the temporary/permanent distinction as an honest limitation.'
  },

  nextUrl: TopicLoader.routes.land('intro')
};

/* ---- link-context.js ---- */
/* ============================================================
   ECONOS – Link It · Context station data
   YED/XED: classify evidence on the UK cost of living crisis 2022–23
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Income & Cross-Price Elasticity',
  backUrl: TopicLoader.routes.link('intro'),
  nextUrl: TopicLoader.routes.link('chain'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether falling real household income during the cost of living crisis reduced demand for luxury goods more than for necessities, consistent with their higher income elasticity of demand?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion – not just what sounds economic.',

    extract: [
      'Office for National Statistics data show that [[income|UK real disposable household income fell 2.5% in 2022]], the largest annual fall since ONS records began, as inflation (CPI 11.1% peak) outpaced wage growth.',
      'UK new luxury car registrations (£60,000+) [[luxury-cars|fell 18% in 2022]] while entry-level car sales held broadly stable (SMMT 2022) – consistent with luxury goods experiencing a disproportionate demand fall.',
      'Aldi and Lidl combined market share reached [[budget|a record 17.3% in 2023 (Kantar)]] as consumers traded down from premium to budget supermarkets – budget alternatives captured switching demand.',
      'UK overseas holiday bookings fell 15% in 2022, but [[holidays|domestic short breaks rose 8% (ABTA 2022)]] – suggesting substitution between international and domestic holidays rather than a pure income effect.',
      'Demand for food bank use [[foodbanks|rose 37% in 2022–23 (Trussell Trust)]] despite aggregate income statistics showing smaller falls – highlighting that income changes are unevenly distributed across households.'
    ],

    evidence: {
      'income':      { text: 'UK real disposable household income fell 2.5% in 2022' },
      'luxury-cars': { text: 'fell 18% in 2022' },
      'budget':      { text: 'a record 17.3% in 2023 (Kantar)' },
      'holidays':    { text: 'domestic short breaks rose 8% (ABTA 2022)' },
      'foodbanks':   { text: 'rose 37% in 2022–23 (Trussell Trust)' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports YED explaining the demand pattern', tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues another factor is primary',           tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way',            tone: 'blue',  icon: '?' }
    ],

    correct: {
      'income':      'supports',
      'luxury-cars': 'supports',
      'budget':      'supports',
      'holidays':    'complicates',
      'foodbanks':   'complicates'
    },

    explain: {
      'income':      'A 2.5% real income fall is the trigger variable for any YED analysis. Real disposable income – not nominal wages – is what shifts the demand curve for income-sensitive goods. This is the necessary precondition: without a confirmed income fall, YED is irrelevant to the demand shift.',
      'luxury-cars': 'An 18% demand fall from a 2.5% income fall implies YED ≈ 7.2 – strongly consistent with luxury status (YED > 1). This directly confirms that demand for luxury goods fell more than proportionally, supporting YED as the explanation. The contrast with stable entry-level sales amplifies the point.',
      'budget':      'Rising budget supermarket share (17.3%) as incomes fall is consistent with YED < 0 for budget goods (inferior goods gaining) and YED > 1 for premium goods (falling). XED between luxury and value substitutes is positive – as premium demand fell, budget demand rose. This supports the YED framework.',
      'holidays':    'The shift from overseas to domestic holidays could reflect income effects (YED analysis) or substitution effects (XED – domestic as substitute for international travel). Both mechanisms could explain the pattern. Complicates the analysis because XED and YED are both at work, and it is not clear which is primary.',
      'foodbanks':   'A 37% rise in food bank use suggests extreme income falls for some households – far greater than the 2.5% aggregate figure. Aggregate YED can mislead if the income change is highly unevenly distributed: luxury demand may fall less than predicted if high-income households (the main luxury buyers) were relatively insulated. Complicates the aggregate YED explanation.'
    },

    bucketCue: 'Strong application changes the conclusion – it does not just describe what is in the extract.',

    examBridge: '"The 18% fall in luxury car registrations from a 2.5% income fall (implied YED ≈ 7) strongly supports YED > 1 for luxury goods. However, the aggregate income figure may mislead: food bank use rose 37%, suggesting the real income fall was concentrated among lower-income households who rarely buy luxury goods – which would mean aggregate luxury demand should have fallen less than predicted."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'          },
      { icon: '❓', text: 'Ask which details change the conclusion'        },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};

/* ---- link-depends.js ---- */
/* ============================================================
   ECONOS – Link It · It Depends On station data
   YED/XED: evaluate whether falling real income reduces luxury demand more than necessities
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Income & Cross-Price Elasticity',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether YED accurately predicts the luxury demand fall.',
  nextUrl:     TopicLoader.routes.link('judge'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'yed-xed-depends',
      claim: {
        icon:   '💰',
        prompt: 'Claim',
        text:   'Falling real income hits luxury demand more than necessities (higher YED).'
      },
      factors: [
        {
          id:    'yed-magnitude',
          icon:  '📊',
          label: 'Magnitude of YED for the specific good',
          why:   'Luxury goods have YED > 1, but the exact coefficient varies widely. A good with YED = 1.5 sees demand fall 3.75% for a 2.5% income fall; one with YED = 3.0 sees a 7.5% fall. The sector-specific YED coefficient determines how much of the income shock is transmitted to demand – a detail that matters for specific market predictions.'
        },
        {
          id:    'income-distribution',
          icon:  '👥',
          label: 'Distribution of the income fall across households',
          why:   'Aggregate income fell 2.5% but the distribution was highly uneven. Lower-income households saw sharper real falls. Higher-income households – the main buyers of luxury goods – were partly insulated by savings buffers. Aggregate YED can mislead if the income change is concentrated among groups not purchasing the good.'
        },
        {
          id:    'real-vs-nominal',
          icon:  '📉',
          label: 'Whether income changes are real or nominal',
          why:   'The key variable is real disposable income (after inflation and tax). Nominal wages rose in 2022 but CPI peaked at 11.1% – producing the largest real income fall in modern ONS records. YED is calculated against real income changes; using nominal income would understate the demand shift.'
        },
        {
          id:    'xed-substitutes',
          icon:  '🔄',
          label: 'Cross-price elasticity with substitutes',
          why:   'As luxury goods demand fell, value substitutes gained demand. The strength of the XED relationship determines how much demand flows between segments. If substitutes are close (premium vs budget supermarkets) and XED is high, the demand shift between segments is large; if substitutes are imperfect, consumers may reduce spending altogether rather than substitute.'
        },
        {
          id:    'habit-formation',
          icon:  '🔁',
          label: 'Degree of habit formation and brand loyalty',
          why:   'Consumers with strong habits may reduce other spending before cutting luxury purchases. Luxury goods producers (car manufacturers, high-end hotels) may retain loyal customers longer than YED predicts, especially if the income fall is expected to be temporary. Habit persistence dampens the short-run demand fall even where YED > 1.'
        },
        {
          id:    'time-horizon',
          icon:  '⏱️',
          label: 'Temporary vs permanent income fall',
          why:   'Permanent Income Hypothesis: consumers maintain consumption by drawing on savings when income falls are temporary. If the cost of living squeeze is seen as temporary (an energy price spike), luxury demand may fall less than YED predicts. If the income fall is permanent (structural wage compression), the demand shift will be larger and longer-lasting.'
        },
        {
          id:    'credit-access',
          icon:  '💳',
          label: 'Access to credit and savings buffers',
          why:   'Consumers with significant savings or credit access can maintain luxury spending despite income falls. UK household savings peaked at 29% in 2020 – some higher-income consumers drew on these to sustain spending through 2022, dampening the demand shift. Credit-constrained households had no such buffer.'
        },
        {
          id:    'peer-effects',
          icon:  '📱',
          label: 'Social influences and conspicuous consumption',
          why:   'Luxury goods are partly defined by their social signal value. During a visible cost-of-living crisis, social norms may shift against conspicuous consumption – reducing demand independently of income effects. Social media amplification of frugality trends may accelerate the demand shift beyond what YED alone predicts.'
        }
      ],
      modelRanking: ['yed-magnitude', 'income-distribution', 'real-vs-nominal'],
      judgement: '"Whether the demand fall for luxury goods matches YED predictions depends on the exact magnitude of YED for each specific good and the segment of the income distribution experiencing the fall. A uniform 2.5% income fall means little for luxury car buyers if higher-income households were insulated; the real fall was concentrated among middle-income households who are the marginal luxury buyers. The real vs nominal income distinction also matters: the 11.1% CPI peak meant the real income fall was much larger than nominal wage data suggested."'
    }
  ]
};

/* ---- link-diagram.js ---- */
/* ============================================================
   ECONOS – Link It · Diagram Connector data
   YED/XED: demand shifts left for luxury goods after income fall
   ============================================================ */

/* Diagram coordinate notes (viewBox 0 0 560 430):
   Axes: y-axis at x=100 (y=20→400), x-axis at y=400 (x=100→545)
   Clip rect: x=101 y=21 w=442 h=378
   S (Supply, unchanged): x1=130,y1=390, x2=490,y2=30  ⟹  y = 520 - x
   D₁ (original, higher demand): x1=110,y1=50, x2=514,y2=381  slope≈0.818  ⟹  y = -40.0 + 0.818x
     verify: x=110 → y=-40+90=50 ✓; x=514 → y=-40+420.5≈381 ✓
   D₂ (new, lower demand – shifted left ~30px in x): x1=110,y1=100, x2=449,y2=381  slope≈0.828  ⟹  y = 8.9 + 0.828x
     verify: x=110 → y=8.9+91.1=100 ✓; x=449 → y=8.9+371.7=380.6≈381 ✓
   E₁ (S ∩ D₁): 520-x = -40+0.818x → 560=1.818x → x≈308, y=520-308=212  → E₁=(308,212)
   E₂ (S ∩ D₂): 520-x = 8.9+0.828x → 511.1=1.828x → x≈279.6≈280, y=520-280=240  → E₂=(280,240)
   New eq: lower x (Q₂<Q₁) and higher y-value in SVG (lower price P₂<P₁ – lower SVG y means higher price)
   P₂ < P₁ (price falls) and Q₂ < Q₁ (quantity falls) – demand shifts left confirmed */

window.ECONOS_LINK_DIAGRAM = {
  topic:   'Income & Cross-Price Elasticity',
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
    title:       'UK real household income falls 2.5% in 2022. Which diagram correctly shows the effect on demand for luxury goods (YED > 1)?',
    instruction: 'Read the scenario, then choose the diagram that correctly models the impact of the income fall on luxury goods. Think about which curve shifts and in which direction.',
    hint:        'Skill focus: identify the mechanism before choosing the model.',

    options: [
      {
        id:      'd-left',
        correct:  true,
        title:   'Demand shifts left',
        sub:     'Demand shifts left – falling real income reduces willingness and ability to buy luxury goods disproportionately',
        why:     'Real income is a non-price demand factor. When it falls, households reduce non-essential spending first. For goods with YED > 1 (luxury cars, premium hotels, overseas holidays), the demand fall is more than proportional to the income fall. The entire demand curve shifts left: at every price, fewer luxury goods are demanded. The new equilibrium is at lower P₂ and lower Q₂.'
      },
      {
        id:      'd-right',
        correct:  false,
        title:   'Demand shifts right',
        sub:     'Rising consumer demand pushes up prices and quantity',
        why:     'Demand shifting right would represent rising income or improved consumer confidence – the opposite of the scenario. In 2022, real incomes fell sharply (2.5%). For luxury goods with YED > 1, falling income reduces demand, shifting the curve left, not right.'
      },
      {
        id:      's-left',
        correct:  false,
        title:   'Supply shifts left',
        sub:     'Reduced supply at every price pushes prices up and quantity down',
        why:     'Supply shifting left would represent rising production costs or firms leaving the industry – a supply-side shock. The scenario describes an income fall, which affects the demand side. Supply for luxury goods is not directly changed by a fall in consumer real income.'
      },
      {
        id:      's-right',
        correct:  false,
        title:   'Supply shifts right',
        sub:     'More supply at every price lowers prices and raises quantity',
        why:     'Supply shifting right would represent falling production costs or a technology improvement. This is not the mechanism described. The income fall affects demand, not supply. A rightward supply shift would reduce prices but is unrelated to the YED mechanism.'
      }
    ]
  },

  /* ── Scenario context shown across all stages ── */
  scenario: {
    icon:  '💸',
    text:  'UK real income falls 2.5% (2022); luxury car sales fall 18%; budget supermarkets hit record 17.3% share.',
    dataPoints: [
      { icon: '📉', text: 'YED for luxury cars > 1 → 18% demand fall from 2.5% income fall' },
      { icon: '🛒', text: 'Aldi & Lidl share: record 17.3% – inferior/value goods gain' },
      { icon: '✈️', text: 'Overseas holidays fall 15%; domestic breaks rise 8%' }
    ]
  },

  /* ── Diagram specification ── */
  diagram: {
    ariaLabel: 'Supply and demand diagram – demand shifts left for luxury goods after a real income fall, producing lower price and lower quantity at new equilibrium',
    xLabel:    'Quantity of luxury goods',
    yLabel:    'Price (£)',

    lines: [
      /* S – upward-sloping, unchanged */
      { x1: 130, y1: 390, x2: 490, y2: 30,  stroke: '#2563eb', strokeWidth: 2.5,
        label: 'S', labelX: 494, labelY: 28, labelFill: '#2563eb' },
      /* D₁ – original higher demand (before income fall) */
      { x1: 110, y1: 50,  x2: 514, y2: 381, stroke: '#d97706', strokeWidth: 2.5,
        label: 'D₁', labelX: 516, labelY: 381, labelFill: '#d97706' },
      /* D₂ – new lower demand (after income fall, shifted left) */
      { x1: 110, y1: 100, x2: 449, y2: 381, stroke: '#059669', strokeWidth: 2.5,
        label: 'D₂', labelX: 453, labelY: 381, labelFill: '#059669' }
    ],

    /* Guide lines + tick labels – shown at stage 2 */
    guides: [
      /* Horizontal from y-axis to E₁ (original equilibrium, higher price) */
      { x1: 100, y1: 212, x2: 308, y2: 212, tickLeft: 'P₁', tickLeftY: 215 },
      /* Horizontal from y-axis to E₂ (new equilibrium, lower price) */
      { x1: 100, y1: 240, x2: 280, y2: 240, tickLeft: 'P₂', tickLeftY: 243 },
      /* Vertical from E₁ down to x-axis */
      { x1: 308, y1: 212, x2: 308, y2: 400, tickBottom: 'Q₁', tickBottomX: 308 },
      /* Vertical from E₂ down to x-axis */
      { x1: 280, y1: 240, x2: 280, y2: 400, tickBottom: 'Q₂', tickBottomX: 280 }
    ],

    /* Shift arrow: horizontal, pointing left, showing D₁ → D₂ */
    shiftArrow: { x1: 400, y1: 120, x2: 340, y2: 120, stroke: '#059669' },

    eqDots: [
      {
        cx: 308, cy: 212, fill: '#d97706',
        initLabel: 'Original equilibrium', initLabel2: '(Q₁, P₁)', initLabelX: 315, initLabelY: 207
      },
      {
        cx: 280, cy: 240, fill: '#059669',
        newLabel: 'New equilibrium', newLabel2: '(Q₂, P₂)', newLabelX: 227, newLabelY: 248
      }
    ],

    legend: [
      { color: '#d97706', text: 'D₁ = Demand before income fall (higher real income)' },
      { color: '#059669', text: 'D₂ = Demand after income fall (YED > 1 amplifies reduction)' },
      { color: '#2563eb', text: 'S = Supply of luxury goods (unchanged)' }
    ]
  },

  /* ── Stage 1: Label the diagram ── */
  label: {
    eyebrow:     'Diagram Connector – Label the Diagram',
    title:       'Use the diagram to show the effect of falling real income on demand for luxury goods.',
    instruction: 'Place the correct labels on the diagram to identify the shift, the two equilibria and the outcome for price and quantity.',
    hint:        'Skill focus: connect the visual shift to the economic outcomes.',

    /* Zone positions as % of 560×430 SVG viewBox */
    zones: [
      { id: 'shift',      label: 'Shift label',              pctX: 55,  pctY: 20,   pctW: 22 },
      { id: 'new-eq',     label: 'New equilibrium',           pctX: 40,  pctY: 47,   pctW: 20 },
      { id: 'orig-eq',    label: 'Original equilibrium',      pctX: 57,  pctY: 42,   pctW: 22 },
      { id: 'orig-price', label: 'Original price (P₁)',        pctX: 0.5, pctY: 43,   pctW: 15 },
      { id: 'lo-price',   label: 'Lower price (P₂)',           pctX: 0.5, pctY: 50,   pctW: 15 }
    ],

    chips: [
      { id: 'dem-left',   text: 'Demand shifts left',         icon: '←', zone: 'shift',      correct: true  },
      { id: 'new-eq',     text: 'New equilibrium (Q₂, P₂)',   icon: '●', zone: 'new-eq',     correct: true  },
      { id: 'orig-eq',    text: 'Original equilibrium (Q₁, P₁)', icon: '●', zone: 'orig-eq', correct: true  },
      { id: 'orig-price', text: 'Original price (P₁)',         icon: '−', zone: 'orig-price', correct: true  },
      { id: 'lo-price',   text: 'Lower price (P₂)',            icon: '↓', zone: 'lo-price',  correct: true  },
      { id: 'dem-right',  text: 'Demand shifts right',         icon: '→', zone: null,         correct: false },
      { id: 'hi-price',   text: 'Higher price',                icon: '↑', zone: null,         correct: false }
    ]
  },

  /* ── Stage 2: Read & write the diagram ── */
  explain: {
    eyebrow:     'Diagram Connector – Read &amp; Write the Diagram',
    title:       'Turn the diagram into an exam-quality explanation.',
    instruction: 'For each prompt, write a short answer using the diagram, then check against the model. Combine the three at the end into an exam-quality paragraph.',
    hint:        'Skill focus: Analysis – bridge the diagram shift into clear written analysis.',

    vocab: ['income elasticity of demand', 'YED', 'cross-price elasticity', 'XED', 'luxury good', 'inferior good', 'real income', 'demand shift', 'equilibrium', 'consumer surplus'],

    parts: [
      {
        num:         1,
        title:       'Why does the demand curve shift left – and why is the shift large for luxury goods?',
        prompt:      'Why does the demand curve shift left – and why is the shift large for luxury goods?',
        maxChars:    240,
        modelAnswer: 'YED > 1 for luxury goods means demand falls more than proportionally when income falls. A 2.5% income fall produces a 5%+ fall in luxury demand. Income is a non-price determinant: it shifts D left rather than moving along D. The larger the YED coefficient, the larger the leftward shift for any given income fall.'
      },
      {
        num:         2,
        title:       'What happens to price and quantity?',
        prompt:      'What happens to price and quantity at the new equilibrium?',
        maxChars:    240,
        modelAnswer: 'New equilibrium at P₂ < P₁ and Q₂ < Q₁: luxury good producers face lower prices AND lower sales volumes, squeezing revenues. Consumer surplus for remaining buyers at P₂ is lower in absolute terms because fewer units are traded. The luxury sector contracts on both dimensions simultaneously.'
      },
      {
        num:         3,
        title:       'What does XED add to the analysis?',
        prompt:      'What does XED add to the analysis of this income fall?',
        maxChars:    240,
        modelAnswer: 'For substitute goods (budget supermarkets vs premium), XED > 0: as luxury goods\' effective demand falls, consumers switch to value alternatives. More importantly, the income fall simultaneously raises demand for inferior/value substitutes (YED < 0), shifting their demand right – explaining Aldi/Lidl\'s record 17.3% market share in 2023.'
      }
    ],

    combined: {
      prompt:   'Combine your three parts into a 2–3 sentence exam explanation.',
      maxChars: 400
    },

    criteria: [
      'Reference YED > 1 and explain amplification',
      'State direction of shift (left) and mechanism (income falls)',
      'State outcome for P and Q',
      'Add XED analysis of substitute markets'
    ],

    examAnswer: '"Falling real income shifted the demand curve for luxury goods to the left from D₁ to D₂. Because YED > 1 for luxury goods, a 2.5% income fall produced a disproportionately large demand contraction – consistent with the 18% fall in luxury car registrations. The new equilibrium at P₂ and Q₂ reduced luxury sector revenues. Simultaneously, XED effects meant value substitutes gained demand – reflected in the record market share achieved by budget supermarkets."'
  }
};

/* ---- link-intro.js ---- */
/* ============================================================
   ECONOS – Link It intro/landing data for yed_xed
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Income & Cross-Price Elasticity',
  estTime: '15–20 minutes',
  goal:    'Bridge your YED and XED knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "Use UK household spending data from the 2022–23 cost of living crisis to apply YED and XED – how falling real incomes reshaped demand across different goods, and how petrol prices triggered demand shifts in related markets.",
    heroKey: 'heroElasticity',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Classify goods using YED (normal, luxury, inferior, necessity)',
      'Build the causal chain from income fall to demand shift',
      'Read a demand-left diagram showing a luxury good market',
      'Evaluate which factors determine whether income changes drive demand significantly'
    ],
    tip: "These steps are cognitive drills – same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context', skill: 'Application', sub: 'Read an extract and judge which evidence changes the answer.', href: TopicLoader.routes.link('context'), state: 'available' },
      { num: 2, name: 'Build the chain', skill: 'Analysis', sub: 'Order or fill the steps in a reasoning chain.', href: TopicLoader.routes.link('chain'), state: 'available' },
      { num: 3, name: 'Calculate It', skill: 'Analysis', sub: 'Work through the calculations with revealable methods.', href: TopicLoader.routes.link('calc'), state: 'available' },
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
   YED/XED: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Income & Cross-Price Elasticity',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.routes.link('complete'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
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
      id: 'yed-xed-judgement',
      claim: {
        icon:   '💰',
        prompt: 'Claim',
        text:   'Falling real income reduces demand for luxury goods more than for necessities, consistent with income elasticity of demand.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'Real income fell 2.5% (2022); luxury car sales fell 18%; Aldi/Lidl hit record 17.3% share; overseas holidays fell 15%.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Income falls → non-essential spending cut → YED > 1 amplifies luxury demand fall → D shifts left → new eq at lower P₂ and Q₂.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'D₁ shifts left to D₂ → new equilibrium (P₂, Q₂) below and to left of original → luxury revenues fall; budget substitutes gain.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'YED magnitude, income distribution, real vs nominal income, and whether income fall is expected to be temporary.' }
      ],
      cloze: 'When real household income falls, the effect on demand depends on [1]. For luxury goods where YED [2] 1, demand falls [3] proportionally than the income change, because consumers cut non-essential spending first. This shifts the demand curve to the [4] from D₁ to D₂, reducing equilibrium price to [5] and equilibrium quantity to Q₂. However, the size of the demand shift depends on [6] – if the income fall is concentrated among lower-income households who rarely buy luxury goods, aggregate demand for luxury goods falls less than YED predicts. In contrast, for [7] goods (YED < 0), falling income causes demand to [8] as consumers seek cheaper alternatives.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-yed',  text: 'income elasticity of demand (YED)', correct: true  },
            { id: 'b1-ped',  text: 'price elasticity of demand (PED)',  correct: false },
            { id: 'b1-xed',  text: 'cross-price elasticity (XED)',      correct: false },
            { id: 'b1-pes',  text: 'price elasticity of supply (PES)',  correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-exc',  text: 'exceeds',          correct: true  },
            { id: 'b2-eq',   text: 'equals',            correct: false },
            { id: 'b2-bel',  text: 'falls below',       correct: false },
            { id: 'b2-unr',  text: 'is unrelated to',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-more', text: 'more',            correct: true  },
            { id: 'b3-less', text: 'less',             correct: false },
            { id: 'b3-eq',   text: 'equally',          correct: false },
            { id: 'b3-unp',  text: 'unpredictably',    correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-left',  text: 'left',    correct: true  },
            { id: 'b4-right', text: 'right',   correct: false },
            { id: 'b4-up',    text: 'upward',  correct: false },
            { id: 'b4-down',  text: 'downward', correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-p2lt', text: 'P₂ < P₁',      correct: true  },
            { id: 'b5-p2gt', text: 'P₂ > P₁',      correct: false },
            { id: 'b5-p2eq', text: 'P₂ = P₁',      correct: false },
            { id: 'b5-ind',  text: 'indeterminate', correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-dist', text: 'the distribution of the income fall across households', correct: true  },
            { id: 'b6-conf', text: 'consumer confidence',                                   correct: false },
            { id: 'b6-pes',  text: 'supply elasticity',                                     correct: false },
            { id: 'b6-gov',  text: 'government intervention',                               correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-inf',  text: 'inferior',       correct: true  },
            { id: 'b7-norm', text: 'normal',          correct: false },
            { id: 'b7-lux',  text: 'luxury',          correct: false },
            { id: 'b7-comp', text: 'complementary',   correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-rise', text: 'rise',           correct: true  },
            { id: 'b8-fall', text: 'fall',            correct: false },
            { id: 'b8-stab', text: 'stabilise',       correct: false },
            { id: 'b8-inel', text: 'become price inelastic', correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-yed',   text: 'YED alone fully determines whether luxury demand falls during an income shock',                                  correct: false },
          { id: 'op-cond',  text: 'YED > 1 is the primary driver, but distribution of income change and temporary/permanent distinction also matter', correct: true  },
          { id: 'op-price', text: 'Luxury demand is determined by price, not income',                                                              correct: false },
          { id: 'op-nec',   text: 'Income changes never affect demand for necessities',                                                            correct: false }
        ]
      },
      examBridge: '"Falling real income shifts demand for luxury goods left by more than the income change percentage because YED > 1 – confirmed by the 18% fall in luxury car registrations from a 2.5% income fall. The new equilibrium (P₂, Q₂) lies below and to the left of the original, squeezing luxury sector revenues. However, the distributional incidence of the income fall and whether it is expected to be temporary both modify the strength of the YED effect – a sophisticated judgement acknowledges these conditions."'
    }
  ]
};

