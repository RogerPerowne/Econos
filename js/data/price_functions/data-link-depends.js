/* ============================================================
   ECONOS — Link It · It Depends On station data
   The Price Mechanism: evaluate the food allocation efficiency claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'The Price Mechanism',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether the price mechanism is the most efficient allocator of food during a supply disruption.',
  nextUrl:     TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'predict', label: 'Predict outcome',    href: TopicLoader.buildUrl('link_predict.html') },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 4,

  scenarios: [
    {
      id: 'price-mechanism-food',
      claim: {
        icon:   '🌾',
        prompt: 'Policy claim',
        text:   'The price mechanism best allocates scarce food after a supply shock.'
      },
      factors: [
        {
          id:    'information-quality',
          icon:  '📡',
          label: 'Quality and speed of price signal transmission',
          why:   'The price mechanism works best when prices adjust quickly and accurately to new information. For commodities traded on global exchanges (wheat futures), prices adjusted within hours of the Ukraine invasion. For locally produced goods with slow price transmission, the signal reaches producers later — reducing the speed of supply response.'
        },
        {
          id:    'pes-agri',
          icon:  '🌾',
          label: 'Agricultural PES in the short run',
          why:   'Even with a clear price signal, supply cannot respond faster than the growing season. Agricultural PES ≈ 0.2 in the short run because planting decisions are seasonal. The price mechanism transmits the incentive perfectly, but physical production constraints limit how quickly supply responds. The rationing function works immediately; the incentive function takes 6–24 months.'
        },
        {
          id:    'equity',
          icon:  '⚖️',
          label: 'Distributional consequences of price rationing',
          why:   'Price rationing is informationally efficient but potentially inequitable. When food prices rise 19.2%, households with lower income are rationed out of purchasing food they need. The price mechanism maximises allocative efficiency but does not ensure equity of distribution — requiring complementary welfare policy (food banks, universal credit uplifts) to address the distributional failure.'
        },
        {
          id:    'market-power',
          icon:  '🏪',
          label: 'Degree of competition in the supply chain',
          why:   'If supermarkets or food processors have market power, they may widen margins during the supply shock rather than passing the full price signal to producers. A less competitive supply chain distorts the price signal — farmers receive less of the higher consumer price, reducing the supply incentive. The price mechanism works best in competitive markets.'
        },
        {
          id:    'speculation',
          icon:  '📈',
          label: 'Role of speculation and futures markets',
          why:   'Commodity futures markets allow hedgers and speculators to price in expected future supply/demand. In 2022, speculation in wheat futures amplified the price spike beyond what physical shortages warranted — oversignalling to producers and consumers. If futures prices deviate from fundamentals, the price signal is distorted, triggering over-investment.'
        },
        {
          id:    'international',
          icon:  '🌍',
          label: 'International coordination of price signals',
          why:   'Global food markets transmit price signals across borders. Countries that imposed export restrictions (India for rice in 2023) disrupted the international price mechanism — preventing supply from flowing to highest-value uses globally. The efficiency of the price mechanism in allocating food depends on how open borders are to trade.'
        },
        {
          id:    'storage',
          icon:  '📦',
          label: 'Availability of commodity storage (buffer stocks)',
          why:   'If private or public grain storage exists, surplus from good harvests can buffer the price spike in bad years — smoothing the price signal and reducing the rationing impact. Without storage, supply shocks cause more extreme price volatility, amplifying both the rationing and signalling functions beyond what is optimal.'
        },
        {
          id:    'non-market',
          icon:  '🏛️',
          label: 'Existence of non-market food provision',
          why:   'Some food provision (school meals, NHS catering) occurs through public procurement rather than market prices. In these segments, the price mechanism does not directly operate — government must make rationing and allocation decisions directly. The efficiency comparison between price mechanism and public allocation determines whether supplementing the market improves overall welfare.'
        }
      ],
      modelRanking: ['information-quality', 'pes-agri', 'equity'],
      judgement: '"The price mechanism allocates food efficiently during supply disruptions when prices adjust quickly and producers can respond within the same growing season — i.e., when PES is higher. In UK agriculture, where PES ≈ 0.2, the rationing function operates immediately (P rises) but the incentive and signalling functions take 12–24 months to translate into more output. The mechanism is also least efficient on equity grounds — requiring complementary support policy to protect households priced out of basic food access."'
    }
  ]
};
