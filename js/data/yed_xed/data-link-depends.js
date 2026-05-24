/* ============================================================
   ECONOS — Link It · It Depends On station data
   YED/XED: evaluate whether falling real income reduces luxury demand more than necessities
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Income & Cross-Price Elasticity',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether YED accurately predicts the luxury demand fall.',
  nextUrl:     TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.buildUrl('link_calc.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
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
          why:   'Luxury goods have YED > 1, but the exact coefficient varies widely. A good with YED = 1.5 sees demand fall 3.75% for a 2.5% income fall; one with YED = 3.0 sees a 7.5% fall. The sector-specific YED coefficient determines how much of the income shock is transmitted to demand — a detail that matters for specific market predictions.'
        },
        {
          id:    'income-distribution',
          icon:  '👥',
          label: 'Distribution of the income fall across households',
          why:   'Aggregate income fell 2.5% but the distribution was highly uneven. Lower-income households saw sharper real falls. Higher-income households — the main buyers of luxury goods — were partly insulated by savings buffers. Aggregate YED can mislead if the income change is concentrated among groups not purchasing the good.'
        },
        {
          id:    'real-vs-nominal',
          icon:  '📉',
          label: 'Whether income changes are real or nominal',
          why:   'The key variable is real disposable income (after inflation and tax). Nominal wages rose in 2022 but CPI peaked at 11.1% — producing the largest real income fall in modern ONS records. YED is calculated against real income changes; using nominal income would understate the demand shift.'
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
          why:   'Consumers with significant savings or credit access can maintain luxury spending despite income falls. UK household savings peaked at 29% in 2020 — some higher-income consumers drew on these to sustain spending through 2022, dampening the demand shift. Credit-constrained households had no such buffer.'
        },
        {
          id:    'peer-effects',
          icon:  '📱',
          label: 'Social influences and conspicuous consumption',
          why:   'Luxury goods are partly defined by their social signal value. During a visible cost-of-living crisis, social norms may shift against conspicuous consumption — reducing demand independently of income effects. Social media amplification of frugality trends may accelerate the demand shift beyond what YED alone predicts.'
        }
      ],
      modelRanking: ['yed-magnitude', 'income-distribution', 'real-vs-nominal'],
      judgement: '"Whether the demand fall for luxury goods matches YED predictions depends on the exact magnitude of YED for each specific good and the segment of the income distribution experiencing the fall. A uniform 2.5% income fall means little for luxury car buyers if higher-income households were insulated; the real fall was concentrated among middle-income households who are the marginal luxury buyers. The real vs nominal income distinction also matters: the 11.1% CPI peak meant the real income fall was much larger than nominal wage data suggested."'
    }
  ]
};
