window.ECONOS_LAND_SECTION_C = {
  topic:        'Price Discrimination',
  sectionLabel: 'Section C &#8212; Essay',
  backUrl:      TopicLoader.routes.land('intro'),

  question: {
    id:               'qc',
    commandWord:      'Evaluate',
    stem:             'Evaluate the view that price discrimination is always harmful to consumers.',
    marks:            25,
    suggestedMinutes: 30,

    structureTips: [
      'Define price discrimination precisely &#8212; different prices not justified by cost differences, requiring market power, segmentation, and arbitrage prevention.',
      'Explain the case that price discrimination harms consumers: consumer surplus transfer, inelastic groups exploited, digital personalised pricing approaching first-degree.',
      'Explain the case that price discrimination benefits (some) consumers: output expansion, cross-subsidy, enabling commercially unviable services.',
      'Apply the output expansion test: is total output higher or lower under discrimination than under single-price monopoly?',
      'Use specific examples: rail cross-subsidy, pharmaceutical access, digital personalised pricing (CMA investigation).',
      'Evaluate the degree of price discrimination: first-degree eliminates all consumer surplus; third-degree has mixed effects.',
      'Conclude with a supported, conditional judgement &#8212; &#8220;always harmful&#8221; is an overstatement; the verdict depends on degree, context, and what the firm does with the extra profit.'
    ],

    modelAnswer:
      '<p>Price discrimination occurs when a firm with market power charges different prices to different consumers for the same good or service, where the price difference is not justified by cost differences. It requires three conditions: market power (price-setting ability), market segmentation (identification of groups with different price elasticities of demand), and prevention of arbitrage (resale between groups). The claim that price discrimination is &#8220;always&#8221; harmful to consumers is an overstatement &#8212; the welfare effects are mixed, context-dependent, and vary significantly across the three degrees.</p>'
    + '<p>The strongest case for consumer harm arises from the transfer of consumer surplus to producers. In third-degree price discrimination &#8212; the most common form &#8212; the group with inelastic demand pays a price above what a single monopoly price would require, losing consumer surplus that is captured by the firm. UK rail pricing illustrates this: business travellers paying &#163;247 for a walk-up peak ticket (vs &#163;32 for an advance off-peak ticket) are paying a price that reflects their captive demand rather than any cost difference. Their consumer surplus is systematically extracted. First-degree (perfect) price discrimination is the most extreme case: charging every individual their exact willingness to pay eliminates consumer surplus entirely &#8212; all welfare gains flow to the producer. The CMA&#39;s investigations into digital personalised pricing found that online platforms use algorithmic analysis of individual browsing and purchase data to approach this outcome, with consumers unaware that they are being individually priced up to 30% above others for identical services. This opacity removes any market discipline &#8212; consumers cannot detect, avoid, or bargain against individually tailored prices, making personalised pricing the most concerning form of discrimination from a consumer welfare perspective.</p>'
    + '<p>However, the case that price discrimination always harms consumers fails on two important grounds. First, the output expansion effect: if discrimination enables a firm to serve market segments that would be excluded under a single monopoly price, total output rises and new consumer surplus is created in the newly served segment. UK cinema pricing provides a clear example: students paying &#163;10.50 while adults pay &#163;17.50 may represent access for students who could not afford the adult price. If the student segment is genuinely new &#8212; served only because the discriminating price covers marginal cost &#8212; total welfare increases. Second, the cross-subsidy argument: rail operators use peak business fares to subsidise off-peak and rural services that would be commercially unviable under uniform pricing. Rural passengers who would otherwise lose their service gain access to transport they would not have under a non-discriminating single-price monopolist. The welfare gain to these consumers may outweigh the welfare loss to business travellers who pay above the single-monopoly price.</p>'
    + '<p>Pharmaceutical international price discrimination is the strongest welfare-improving case. Charging &#163;18,400 in the US and &#163;85 in India for the same HIV drug exploits dramatic PED differences between wealthy-insured and poor-uninsured patient populations. But the Indian price, close to marginal cost, enables access to life-saving treatment for patients who would otherwise receive none &#8212; a welfare gain of enormous magnitude. The cross-subsidy also funds R&#38;D costing &#163;1.3bn per drug, benefiting future patients globally. The welfare loss to uninsured US patients at &#163;18,400 is real and significant; but the global net welfare effect of pharmaceutical price discrimination is likely positive compared with the alternative of a single high global price that excludes developing-world patients.</p>'
    + '<p>In conclusion, price discrimination is not always harmful to consumers. It is most harmful when it merely transfers existing consumer surplus without expanding output &#8212; particularly in digital markets where algorithmic personalised pricing approaches first-degree discrimination with no social justification. It is least harmful, and may be positively beneficial, when it expands output to previously excluded segments or funds cross-subsidies that maintain access to services that would otherwise be commercially unviable. The appropriate policy response is therefore nuanced: regulating opaque digital personalised pricing while recognising the legitimate welfare role of third-degree discrimination in pharmaceuticals and transport.</p>'
  },

  strongAnswers: [
    'Define all three degrees and apply the output expansion test as the key welfare criterion',
    'Use specific UK evidence: rail pricing ratios, pharmaceutical international differentials, CMA digital pricing investigation',
    'Distinguish consumers who gain (elastic/excluded segment) from consumers who lose (inelastic/existing segment)',
    'Acknowledge first-degree discrimination as the limiting case &#8212; eliminates all consumer surplus, most harmful',
    'Reach a conditional judgement: &#8220;always harmful&#8221; is wrong &#8212; the verdict depends on degree, output effect, and use of discriminatory profit'
  ]
};
