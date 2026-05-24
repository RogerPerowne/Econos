/* ============================================================
   ECONOS — Link It · Chain station data
   Indirect Taxes & Subsidies: build the specific tax → supply shift → incidence chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Indirect Taxes &amp; Subsidies',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_diagram.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'calc',    label: 'Calculate It',       href: TopicLoader.buildUrl('link_calc.html')    },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'specific-tax-mechanism',
      scenario: {
        icon:  '🍭',
        label: 'Scenario',
        text:  'A specific tax of £0.24 per litre is imposed on soft drinks with more than 8g of sugar per 100ml. The tax is levied on producers at the point of manufacture.'
      },
      anchor: 'The specific tax raises MC for every litre of high-sugar drink.',
      tiles: [
        {
          id:   'step-supply',
          icon: '🏭',
          text: 'Supply shifts left by the tax amount at every quantity',
          pos:  0
        },
        {
          id:   'step-prices',
          icon: '💰',
          text: 'New equilibrium: higher P_c, lower P_p (P_p = P_c − tax)',
          pos:  1
        },
        {
          id:   'step-incidence',
          icon: '📊',
          text: 'Q₀ → Q_t; tax burden splits between consumers/producers per PED, PES',
          pos:  2
        },
        {
          id:   'dist-1',
          icon: '🛒',
          text: 'Consumers immediately pay the full tax at the point of sale',
          pos:  null
        },
        {
          id:   'dist-2',
          icon: '📈',
          text: 'Supply shifts right as producers expand to offset the tax revenue',
          pos:  null
        },
        {
          id:   'dist-3',
          icon: '🏛️',
          text: 'Government sets the new market price directly, ousting the mechanism',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'A specific tax of £0.24 per litre is an additional cost the producer must pay to government for every unit sold. This raises the marginal cost of production at every quantity — not because inputs changed, but because the firm must now remit £0.24 per litre to HMRC. The supply curve therefore shifts left (or equivalently, upward) by exactly £0.24 at every quantity, since producers need a higher price to supply the same quantity as before.'
        },
        {
          pos:  1,
          text: 'With supply shifted left, the new equilibrium price consumers pay (P_c) is higher than before the tax. But producers do not keep the full P_c — they must remit £0.24 per litre to government, leaving them with a net price P_p = P_c − tax. The tax creates a wedge between what consumers pay and what producers receive. Crucially, neither side bears the full tax; the split depends on the relative elasticities of supply and demand.'
        },
        {
          pos:  2,
          text: 'At the new equilibrium quantity Q_t (which is lower than Q₀), the tax wedge is fully visible: P_c lies on the demand curve and P_p lies on the original supply curve at Q_t. The consumer burden is (P_c − P₀) × Q_t; the producer burden is (P₀ − P_p) × Q_t. When demand is inelastic relative to supply, consumers bear the larger share. When supply is inelastic, producers bear more. PED and PES jointly determine the split.'
        }
      ],
      examBridge: '"A specific tax of £0.24 per litre raises producers\' marginal costs and shifts the supply curve left by the tax amount, raising the consumer price to P_c and lowering the producer net price to P_p = P_c − tax. Output falls from Q₀ to Q_t, and the tax burden is split between consumers and producers in proportion to their relative price inelasticity — the less elastic side bears the larger share."',

      prompts: [
        'Why does a tax levied on producers shift the supply curve rather than the demand curve?',
        'What is the relationship between P_c, P_p and the tax rate at the new equilibrium?',
        'What determines how the tax burden is divided between consumers and producers?'
      ],
      modelAnswers: [
        'The tax is an additional cost per unit of production — it raises the price producers require to supply any given quantity. This shifts the supply curve left (upward) by exactly the tax amount at every quantity. Demand is unchanged because consumers\' willingness to pay is unaffected by who is legally liable to remit the tax.',
        'At the new equilibrium Q_t, consumers pay P_c (read off the demand curve) and producers receive P_p (read off the original supply curve at Q_t). The vertical distance P_c − P_p equals the tax per unit. Government revenue = tax × Q_t, which equals the sum of the consumer and producer burdens.',
        'The burden split is determined by the relative price elasticities of demand (PED) and supply (PES). When demand is more inelastic than supply, consumers cannot easily reduce quantity demanded when price rises — so they bear more of the tax. When supply is more inelastic, producers cannot easily redirect output — so they bear more. In the extreme, perfectly inelastic demand means consumers bear the entire tax; perfectly inelastic supply means producers bear it all.'
      ],
      vocab: ['specific tax', 'supply curve', 'incidence', 'P_c', 'P_p', 'PED', 'PES', 'consumer surplus', 'producer surplus', 'deadweight welfare loss']
    }
  ]
};
