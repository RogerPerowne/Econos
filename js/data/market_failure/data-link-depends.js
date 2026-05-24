/* ============================================================
   ECONOS — Link It · It Depends On station data
   Market Failure: evaluate an information asymmetry claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Market Failure',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether information asymmetry is really the primary cause of the market failure.',
  nextUrl:     TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'info-asymmetry-effectiveness',
      claim: {
        icon:   '🚗',
        prompt: 'Policy claim',
        text:   'Information asymmetry is the prime cause of used-car market failure.'
      },
      factors: [
        {
          id:    'info-severity',
          icon:  '🔍',
          label: 'Severity of information asymmetry (how much sellers know that buyers don\'t)',
          why:   'In markets where the seller\'s information advantage is large (complex used machinery, specialist equipment), the adverse selection problem is more severe and demand depression is larger. In used car markets with comprehensive digital history records (DVLA, AutoTrader), the asymmetry has shrunk — but not disappeared. The degree of information gap determines how far D shifts from D₁ to D₂.'
        },
        {
          id:    'enforcement',
          icon:  '⚖️',
          label: 'Strength of enforcement of mandatory disclosure laws',
          why:   'The Consumer Rights Act 2015 requires truthful disclosure, but enforcement relies on buyers pursuing legal remedies. Fewer than 2% of disputes reach legal proceedings — making the deterrent effect weak. If enforcement is low, sellers can continue withholding quality information despite legal requirements. Strong enforcement (Trading Standards, FCA) shifts D back toward D₁ more than weak enforcement.'
        },
        {
          id:    'private-info-intermediaries',
          icon:  '💻',
          label: 'Availability of private information platforms',
          why:   'AutoTrader valuations, HPI checks, mileage verification services and Carfax reports are private-sector responses to the information gap — charging buyers (or subsidising sellers) to verify quality. Where these are widely used and trusted, the market partially self-corrects without government mandate, reducing the market failure and moving D toward D₁ voluntarily.'
        },
        {
          id:    'repeat-purchase',
          icon:  '🔄',
          label: 'Frequency of repeat transactions and reputation effects',
          why:   'Dealers who repeatedly transact in the same market face reputation incentives to disclose quality — if they sell lemons, buyers will not return and word-of-mouth damages their business. For private sellers (one-off transactions), reputation effects are absent — adverse selection is more severe. The market failure is worse in anonymous markets than in markets with repeat trading.'
        },
        {
          id:    'signalling',
          icon:  '📡',
          label: 'Effectiveness of seller signalling mechanisms',
          why:   'Sellers of high-quality cars can try to signal quality (warranties, AA inspections, manufacturer-certified used programmes). If buyers trust these signals, sellers can differentiate and achieve higher WTP — reducing adverse selection. Where signalling is credible and costless to verify, the market partially corrects itself without external regulation.'
        },
        {
          id:    'consumer-sophistication',
          icon:  '🎓',
          label: 'Consumer ability to assess quality (financial literacy / product knowledge)',
          why:   'Sophisticated buyers (mechanics, car enthusiasts) have narrower information asymmetry — they can assess quality through inspection. Unsophisticated buyers (first-time buyers, elderly) face larger asymmetry and are more at risk of adverse selection. Mandatory disclosure addresses the least-sophisticated buyers; it cannot eliminate the knowledge advantage of expert sellers.'
        },
        {
          id:    'product-complexity',
          icon:  '🔧',
          label: 'Complexity of the product (ease of quality verification)',
          why:   'Cars are complex mechanical systems — even test drives reveal little about future reliability. More complex vehicles (electric cars with battery health unknown) have higher information asymmetry. Simpler products with observable quality (agricultural commodities) have lower asymmetry. Market failure from information gaps is proportional to product complexity.'
        },
        {
          id:    'market-concentration',
          icon:  '🏪',
          label: 'Market structure (independent dealers vs franchised dealers)',
          why:   'Large franchised dealerships with manufacturer backing offer certified pre-owned programmes and stronger warranty commitments — reducing adverse selection in that market segment. Independent dealers with lower overhead may have weaker disclosure incentives. Market structure determines whether the information problem is concentrated in particular segments.'
        }
      ],
      modelRanking: ['info-severity', 'enforcement', 'private-info-intermediaries'],
      judgement: '"The severity of information asymmetry depends on how much sellers know relative to buyers — which varies by product complexity and market structure. In the used car market, digital platforms (AutoTrader, HPI) have reduced but not eliminated the gap. Enforcement of mandatory disclosure laws (Consumer Rights Act) is the key policy variable: strong enforcement shifts D back toward D₁; weak enforcement leaves the adverse selection spiral intact despite legal requirements."'
    }
  ]
};
