/* ============================================================
   ECONOS – Link It · Chain station data
   Market Failure: build the information asymmetry → adverse selection → DWL chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Market Failure',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_diagram.html'),

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
      id: 'info-asymmetry-mechanism',
      scenario: {
        icon:  '🚗',
        label: 'Scenario',
        text:  'Car sellers know whether their vehicle has hidden defects (\'lemons\') or is high quality; buyers cannot reliably distinguish quality before purchase.'
      },
      anchor: 'Sellers know if cars are lemons; buyers cannot verify quality.',
      tiles: [
        {
          id:  'step-adverse',
          icon: '❓',
          text: 'Adverse selection: buyers pay average-quality price → good cars exit',
          pos:  0
        },
        {
          id:  'step-spiral',
          icon: '📉',
          text: 'Spiral: quality ↓ → WTP ↓ → more exits → demand shifts left',
          pos:  1
        },
        {
          id:  'step-dwl',
          icon: '⚖️',
          text: 'Market failure: too few quality cars → DWL from lost gains from trade',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '⛽',
          text: 'Rising petrol prices reduce overall demand for used cars',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '💰',
          text: 'Government imposes a tax on used car dealers to reduce profit margins',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏭',
          text: 'New car manufacturers increase production, reducing demand for used cars',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Buyers cannot verify quality before purchase – they face information asymmetry. Rational buyers therefore base their willingness to pay (WTP) on expected average quality rather than verified quality. This depresses WTP below the level a quality seller needs to cover costs. Quality sellers withdraw from the market when buyers will not pay the price that reflects their car\'s true quality.'
        },
        {
          pos:  1,
          text: 'As good-quality cars exit, the average quality of cars remaining falls further. Buyers observe this deterioration (or anticipate it), reducing WTP again. Another round of good-quality sellers exits. This self-reinforcing adverse selection spiral continues until the market for quality vehicles has largely collapsed – effective demand has shifted left from the full-information demand curve D₁ to the information-gap demand curve D₂.'
        },
        {
          pos:  2,
          text: 'The information-gap equilibrium produces fewer quality cars than the social optimum: Q₂ < Q₁. Between Q₂ and Q₁, there are deals that both a quality seller and a fully informed buyer would willingly strike – gains from trade that never materialise. This represents a deadweight welfare loss: resources (quality vehicles) are not allocated to their highest-valued use because information asymmetry prevents mutually beneficial exchange.'
        }
      ],
      examBridge: '"Information asymmetry depresses effective demand for used cars from the full-information level D₁ to the information-gap level D₂: buyers cannot verify quality so base WTP on average expected quality. The market equilibrium shifts to a lower quantity Q₂ and lower price P₂. This market failure – adverse selection causing underproduction of quality goods – is partially corrected by the Consumer Rights Act 2015 and private information intermediaries like AutoTrader valuations."',

      prompts: [
        'Why do buyers base WTP on average quality rather than true quality?',
        'Why do quality sellers exit the market first?',
        'What is the welfare loss from the information gap?'
      ],
      modelAnswers: [
        'Buyers cannot verify the quality of a used car before purchase – they face information asymmetry. A rational buyer therefore offers only the price that reflects the average quality of cars on the market, not the higher price that a verified high-quality car would justify. This is the core of Akerlof\'s \'lemons\' problem.',
        'When buyers offer only an average-quality price, high-quality sellers cannot recoup the value of their cars. A seller of a genuinely good car receives the same price as a seller of a lemon – so quality sellers withdraw. This adverse selection effect means that the cars remaining in the market skew toward lower quality, reinforcing the downward spiral in average quality and prices.',
        'Between Q₂ (information-gap equilibrium) and Q₁ (full-information equilibrium), quality sellers would be willing to sell and informed buyers would be willing to pay. These mutually beneficial transactions never occur because information asymmetry prevents buyers from distinguishing quality. The lost potential surplus – the deadweight welfare loss – is the welfare cost of the market failure.'
      ],
      vocab: ['information asymmetry', 'adverse selection', 'moral hazard', 'market for lemons', 'market failure', 'consumer surplus', 'deadweight welfare loss', 'mandatory disclosure', 'signalling', 'screening', 'WTP', 'full-information demand']
    }
  ]
};
