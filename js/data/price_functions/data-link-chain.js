/* ============================================================
   ECONOS — Link It · Chain station data
   The Price Mechanism: rationing → signalling → incentivising chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'The Price Mechanism',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_predict.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'predict', label: 'Predict the Outcome', href: TopicLoader.buildUrl('link_predict.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'ukraine-price-mechanism',
      scenario: {
        icon:  '🌾',
        label: 'Scenario',
        text:  'Ukraine and Russia supplied approximately 30% of world wheat exports. The 2022 war disrupted these exports severely, creating an immediate global wheat shortage and triggering a cascade through the price mechanism.'
      },
      anchor: 'Ukraine war disrupts global wheat exports, removing ~30% of world wheat supply from markets and creating an immediate global shortage.',
      tiles: [
        {
          id:  'step-ration',
          icon: '⚖️',
          text: 'Rationing function: at the original price P₁, quantity demanded exceeds quantity supplied (excess demand) → price rises to P₂ → higher price rations existing supply to consumers with highest WTP',
          pos:  0
        },
        {
          id:  'step-signal',
          icon: '📡',
          text: 'Signalling function: the higher price P₂ transmits a clear signal to UK and global farmers → farmland prices and wheat futures rise → farmers plan to increase planting area and investment in the next season',
          pos:  1
        },
        {
          id:  'step-incentive',
          icon: '🌱',
          text: 'Incentive function: profit opportunity created by P₂ > long-run average cost → new entry and investment → supply eventually increases → price gradually falls back toward long-run equilibrium (though slowly, given low agricultural PES in SR)',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🏛️',
          text: 'Government introduces a maximum price on bread to protect consumers from inflation',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '🛒',
          text: 'Consumer demand for wheat falls as households substitute to rice',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏦',
          text: 'Central bank raises interest rates, reducing investment in food processing',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'With Ukrainian wheat removed from global supply, existing world supply cannot satisfy demand at the original price P₁. Excess demand pushes the price up to P₂ — the rationing function is operating. Higher prices signal to consumers to reduce consumption, switching to substitutes (rice, pasta) or cutting food waste, until quantity demanded falls to match available supply. UK food inflation of 19.2% in March 2023 is direct evidence of this rationing at work.'
        },
        {
          pos:  1,
          text: 'The higher food price P₂ is a signal that wheat has become scarcer and that expanding production is profitable. UK farmland prices rose 14% in 2023 — investors and farmers read the price signal and valued agricultural land more highly because the expected return on wheat production had risen. UK wheat planting area rose 3% in 2023, confirming that the price signal was transmitting to supply decisions for the following season.'
        },
        {
          pos:  2,
          text: 'With P₂ above long-run average cost, there is an abnormal profit opportunity in wheat production. This incentivises entry and investment — globally, Argentina, Australia and Canada expanded production in 2022–23. However, the supply response is constrained by agricultural PES ≈ 0.2 in the short run — planting decisions are seasonal and supply cannot respond faster than one growing season. The incentive function worked, but the time lag meant prices remained elevated for 12–24 months.'
        }
      ],
      examBridge: '"The Ukraine war supply shock created excess demand at the original price P₁. The price mechanism rationed existing supply through rising prices (to 19.2% food inflation), signalled farmers to plant more (UK planting area +3%), and incentivised farmland investment (+14%). However, the supply response was slow due to agricultural PES ≈ 0.2 in the short run — and the rationing function excluded the lowest-income households from access, reducing equity."',

      prompts: [
        'How does the rationing function direct existing food supply when a shortage occurs?',
        'What price signal reaches farmers, and how do they respond?',
        'Why does the incentive function take 12–24 months to restore supply in agriculture?'
      ],
      modelAnswers: [
        'When supply contracts, the price rises above P₁ to eliminate excess demand. Higher prices ration existing supply to those with highest WTP — consumers with lower budgets reduce or switch away from wheat products. This happens immediately: the rationing function operates through the price change itself.',
        'Higher wheat prices raise the profit margin above long-run average cost. Farmland prices rise (a derived demand signal) as investors anticipate higher agricultural returns. Farmers respond by planning to increase planting area in the next season — the signalling function converts price information into supply decisions. UK planting area rose 3% in 2023.',
        'Agricultural production is seasonal — planting decisions for wheat must be made months before harvest. Even with a clear price signal and strong profit incentive, supply cannot increase until the next growing cycle. PES ≈ 0.2 means that a 10% price rise only increases supply by 2% in the short run. The incentive function works, but with a biological and seasonal time lag, keeping prices elevated for 12–24 months.'
      ],
      vocab: ['price mechanism', 'rationing function', 'signalling function', 'incentive function', 'excess demand', 'equilibrium price', 'price signal', 'allocative efficiency', 'PES', 'equity']
    }
  ]
};
