/* ============================================================
   ECONOS — Link It · Chain station data
   Government Failure: demand subsidy + inelastic supply → price rise
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Government Failure',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_extract.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'help-to-buy-failure',
      scenario: {
        icon:  '🏗️',
        label: 'Scenario',
        text:  'The UK government launches the Help to Buy equity loan scheme in 2013. First-time buyers can borrow up to 20% of a new-build\'s purchase price from the government, interest-free for five years. Housing supply is highly inelastic (PES ≈ 0.4).'
      },
      anchor: 'UK housing supply is highly inelastic (PES ≈ 0.4).',
      tiles: [
        {
          id:  'step-policy',
          icon: '💰',
          text: 'Help to Buy equity loans raise buyer purchasing power → demand shifts right',
          pos:  0
        },
        {
          id:  'step-unintended',
          icon: '📊',
          text: 'Inelastic supply → demand stimulus raises P far more than Q (+£8k per OBR)',
          pos:  1
        },
        {
          id:  'step-failure',
          icon: '⚠️',
          text: 'Non-scheme buyers face higher prices → subsidy captured by developers',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '📈',
          text: 'Interest rate rises reduce housing demand by raising mortgage costs',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '🏛️',
          text: 'Government imposes rent controls on the private rented sector',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '⏱️',
          text: 'Planning reforms cut time from permission to build completion',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Help to Buy equity loans effectively lower the deposit required from buyers, shifting their budget constraint rightward. This is a pure demand-side intervention: it raises purchasing power without touching the supply constraints (planning rules, labour availability, land costs) that determine how many homes can be built.'
        },
        {
          pos:  1,
          text: 'With PES ≈ 0.4, the housing supply curve is steep — housebuilders cannot rapidly increase output even when prices rise. When demand shifts right, the market adjustment falls almost entirely on price rather than quantity. Developers facing stronger demand with limited competition can raise prices; the OBR found this effect averaged £8,000 per new-build property.'
        },
        {
          pos:  2,
          text: 'Government failure occurs when an intervention produces an outcome worse than the market failure it was designed to correct. Help to Buy intended to improve affordability but, because supply inelasticity was not addressed, the main effect was to raise new-build prices — a windfall for developers and a deterioration in affordability for buyers outside the scheme. The information failure at design stage was failing to model how inelastic supply would absorb the demand shock.'
        }
      ],
      examBridge: '"Help to Buy shifted demand for new-build homes right from D₁ to D₂. Because housing supply is highly inelastic (PES ≈ 0.4), the new equilibrium at E₂ showed a large price rise and a small quantity increase — consistent with OBR evidence of £8,000 average new-build price inflation. Developers captured the benefit through higher margins; non-subsidised buyers faced higher prices. This is government failure: the intervention worsened the affordability problem it was designed to solve by stimulating demand without addressing supply constraints."',

      prompts: [
        'Why did Help to Buy fail to improve affordability despite its large scale?',
        'What happens to the market equilibrium when demand rises but supply is highly inelastic?',
        'Who captured the benefit of the Help to Buy subsidy, and why?'
      ],
      modelAnswers: [
        'Help to Buy was a demand-side intervention only: it increased purchasing power without changing the planning rules, labour availability or land costs that constrain housing supply. With PES ≈ 0.4, the supply curve barely shifts even when prices rise — so additional demand is absorbed as higher prices, not more homes. Affordability worsened for non-HTB buyers.',
        'With inelastic supply, a rightward demand shift produces a large price increase (P₁ → P₂) and a very small quantity increase (Q₁ → Q₂). On a diagram, the equilibrium moves almost vertically upward rather than horizontally rightward — this is the visual signature of government failure in a supply-constrained market.',
        'Developers (suppliers) captured most of the benefit. Because supply is inelastic, they could raise prices when demand increased without producing proportionally more homes. The OBR\'s £8,000 average new-build price inflation and Barratt\'s record 21% operating margins both confirm that the subsidy was transferred from buyers to developers — a classic incidence outcome when supply is more inelastic than demand.'
      ],
      vocab: ['government failure', 'unintended consequences', 'inelastic supply', 'demand subsidy', 'price elasticity of supply', 'planning constraints', 'information failure', 'regulatory capture', 'opportunity cost', 'windfall profit']
    }
  ]
};
