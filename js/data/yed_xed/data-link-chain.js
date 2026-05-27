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
