window.ECONOS_LAND_SECTION_B = {
  topic:        'Price Discrimination',
  sectionLabel: 'Section B &#8211; Extended response',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'UK rail ticket pricing: peak, off-peak and advance fares',
        tags:        ['Peak vs off-peak', '&#163;247 vs &#163;32', 'inelastic business demand', 'ORR regulation'],
        defaultOpen: true,
        paragraphs: [
          'UK rail operators charge dramatically different prices for the same journey depending on time of travel and how far in advance the ticket is purchased. A walk-up peak fare from London to Manchester with LNER costs approximately &#163;247 in 2024, while an advance off-peak ticket for the same route purchased four weeks ahead can cost as little as &#163;32 &#8211; a ratio of more than 7:1 for the same service. The Office of Rail and Road (ORR) estimates that business travellers &#8211; who typically travel at peak times and book late &#8211; contribute a disproportionate share of rail revenue despite representing a minority of journeys.',
          'Rail operators argue the pricing structure reflects genuine demand differences and serves a welfare purpose: peak fares from price-inelastic business travellers cross-subsidise off-peak and rural services that would otherwise be commercially unviable. Transport economists note that the marginal cost of carrying one additional passenger on an existing train service is close to zero, meaning the price differences between fare types far exceed any cost justification &#8211; confirming that third-degree price discrimination is occurring.',
          'The ORR has raised concerns that fare complexity &#8211; with thousands of ticket types available &#8211; creates information asymmetries that disadvantage less experienced travellers, who may pay higher prices than necessary without realising equivalent fare types are available. A 2023 ORR review proposed simplifying the fare structure to improve transparency, though operators resisted changes that would reduce their ability to charge different prices to different passenger groups.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'Pharmaceutical price discrimination between rich and poor countries',
        tags:        ['HIV drug &#163;18,400 vs &#163;85', 'access vs profit', 'WTO TRIPS agreement', 'cross-subsidy'],
        defaultOpen: false,
        paragraphs: [
          'The same HIV antiretroviral drug sold for approximately &#163;18,400 per patient per year in the United States sells for &#163;85 in India &#8211; a ratio of over 200:1. Similar price differentials exist for cancer treatments, hepatitis drugs, and vaccines across high- and low-income countries. Pharmaceutical firms justify this international price discrimination by arguing that high prices in wealthy, insured markets fund the research and development that creates the drugs in the first place: each new approved drug costs an estimated &#163;1.3 billion to develop, and approximately 45% of global pharmaceutical R&#38;D revenues come from the US market alone.',
          'The welfare analysis is complex. In high-income countries, monopoly pricing restricts access for uninsured or underinsured patients and places pressure on healthcare budgets. In low-income countries, if prices are set at or near marginal cost, access is dramatically expanded &#8211; serving patients who would otherwise receive no treatment. Médecins Sans Frontières has argued that pharmaceutical price discrimination in the access direction &#8211; low prices in poor countries &#8211; is one of the most effective global health mechanisms available, providing access to life-saving drugs to hundreds of millions of patients who could not afford developed-world prices.',
          'However, the system is vulnerable to arbitrage. The WTO TRIPS agreement and parallel importation rules create tension between firms&#39; interest in maintaining price differentials and governments&#39; interest in accessing cheaper drugs for their healthcare systems. Some European countries have begun parallel importing drugs from lower-priced EU member states, challenging pharmaceutical firms&#39; ability to sustain large price differentials within integrated trading blocs.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Digital personalised pricing and CMA scrutiny',
        tags:        ['algorithmic pricing', 'CMA investigation', 'first-degree discrimination', 'consumer awareness'],
        defaultOpen: false,
        paragraphs: [
          'The Competition and Markets Authority (CMA) launched a programme of digital markets investigations in 2022&#8211;24, examining how online platforms use personal data to set individualised prices. Unlike traditional third-degree price discrimination &#8211; which groups consumers by observable characteristics &#8211; personalised pricing uses machine learning algorithms trained on individual browsing history, purchase patterns, device type, and location to estimate each user&#39;s willingness to pay. Hotel booking sites, airline booking engines, ride-hailing apps, and e-commerce platforms have all been scrutinised.',
          'The CMA found evidence that some platforms showed different prices to different users for identical services based on inferred personal characteristics, with differences of up to 30% for the same hotel room or flight. Consumers were in most cases entirely unaware that prices were individualised. The CMA noted this represents a significant shift toward first-degree price discrimination: extracting consumer surplus at the individual level, not merely the group level. A consumer shown a higher price because their past behaviour signals high willingness to pay cannot easily detect this or seek redress.',
          'The policy response is developing. EU Digital Markets Act (DMA) provisions require designated gatekeepers to provide data portability and interoperability that could reduce the data advantages underpinning personalised pricing. The CMA&#39;s Digital Markets, Competition and Consumers Act (2024) creates new powers to impose conduct requirements on firms with strategic market status, potentially including restrictions on personalised pricing practices that harm consumers through opacity and individual exploitation.'
        ]
      }
    ]
  },

  question: {
    id:       'q1',
    title:    'Extended response using the context pack',
    subtitle: 'Refer to the extracts where directed, and bring in your own knowledge.',
    marks:    25,

    parts: [
      {
        id:     'q1a',
        letter: 'a',
        marks:  5,
        type:   'freetext',
        stem:   'Explain what is meant by third-degree price discrimination.',
        tips: [
          'Define third-degree price discrimination precisely &#8211; identifiable groups, different PED, different prices.',
          'State the profit-maximising rule: MR&#8320; = MR&#8321; = MC.',
          'Use an example from the context pack (rail or pharmaceutical) to illustrate.',
          'Explain why it requires both market segmentation and prevention of arbitrage.'
        ],
        modelAnswer: 'Third-degree price discrimination occurs when a firm with market power charges different prices to identifiable groups of consumers who have different price elasticities of demand &#8211; where the price difference is not justified by cost differences. The firm identifies groups based on observable characteristics (age, employment status, location, time of purchase) that correlate with different demand elasticities. Extract A illustrates this with rail pricing: peak walk-up fares (&#163;247) target business travellers with inelastic demand &#8211; who must travel at a specific time and face no substitute &#8211; while advance off-peak fares (&#163;32) target price-elastic leisure travellers who are flexible on timing. The profit-maximising condition across segments is MR&#8320; = MR&#8321; = MC: marginal revenue is equalised across segments and set equal to marginal cost. Since the group with lower PED has a higher MR at any given price level, profit maximisation implies a higher price for the inelastic group. The 7:1 price ratio in the extract far exceeds any marginal cost difference between peak and off-peak passengers &#8211; confirming discrimination. Two conditions must hold: the firm must be able to identify the groups (market segmentation) and must prevent arbitrage &#8211; resale between segments &#8211; which rail operators achieve through non-transferable, identity-checked tickets.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'Using Extract B, examine whether pharmaceutical price discrimination between rich and poor countries is beneficial or harmful to welfare.',
        tips: [
          'Define the type of price discrimination and identify the two segments (rich/poor country markets).',
          'Explain the welfare gain in low-income markets: output expansion, access to treatment.',
          'Explain the welfare cost in high-income markets: restricted access for uninsured/underinsured consumers.',
          'Use the R&#38;D cross-subsidy argument &#8211; refer to the &#163;1.3bn development cost and 45% US revenue figure.',
          'Consider the arbitrage threat (TRIPS, parallel imports) as a limitation.',
          'Reach a balanced, supported assessment.'
        ],
        modelAnswer: 'Extract B describes international third-degree price discrimination in pharmaceuticals: HIV drugs priced at &#163;18,400 per year in the US versus &#163;85 in India &#8211; a 200:1 price ratio exploiting the dramatically different price elasticities of demand between wealthy-insured and poor-uninsured patient populations. The welfare effects are mixed and depend on the analytical framework applied. The strongest argument in favour is the output expansion effect. If a single global price were charged, it would either be set at or near the US level &#8211; excluding virtually all patients in India &#8211; or at near the Indian price &#8211; making R&#38;D commercially unviable. Price discrimination enables both outcomes simultaneously: high prices in inelastic rich-country markets recover &#163;1.3bn in average R&#38;D costs (with the US contributing approximately 45% of global R&#38;D revenues) while low prices in elastic poor-country markets extend access to life-saving treatment to hundreds of millions of patients. Médecins Sans Frontières&#39; endorsement of this mechanism reflects the enormous welfare gain from pharmaceutical access in low-income countries. The cross-subsidy is real: without US-level pricing, neither the R&#38;D investment nor the low-price access model would be sustainable. However, the welfare costs in high-income markets are significant. US consumers &#8211; particularly uninsured or underinsured patients &#8211; face prices far above competitive levels, restricting access for those who cannot afford treatment even in a wealthy country. Consumer surplus is transferred to pharmaceutical firms, representing a regressive redistribution within rich countries. Furthermore, the system faces structural vulnerability from arbitrage: parallel importation within the EU challenges firms&#39; ability to maintain large price differentials. If arbitrage were to collapse the price differential, low-income country access would likely disappear &#8211; a worse outcome than the discriminatory status quo. On balance, pharmaceutical international price discrimination is a pragmatic second-best solution to the fundamental tension between incentivising innovation and ensuring access: welfare-improving globally if the alternative is a single high price that excludes poor-country patients, but still allocatively inefficient and distributionally problematic in rich-country markets.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss the extent to which price discrimination benefits or harms consumers. Refer to the extracts and your own knowledge.',
        tips: [
          'Begin with the case that price discrimination harms consumers: consumer surplus transfer, higher prices for inelastic groups, information asymmetry (Extract C).',
          'Develop the case that price discrimination benefits consumers: output expansion (new segments served), cross-subsidy for affordable access, enabling services that would otherwise be unviable (Extract A).',
          'Consider digital personalised pricing (Extract C) as an extreme case &#8211; approaching first-degree discrimination, which eliminates all consumer surplus.',
          'Consider different groups of consumers: some gain (elastic group, low-income country), some lose (inelastic group, uninsured high-income).',
          'Conclude with a supported, conditional judgement &#8211; the verdict depends on the degree, the context, and what the firm does with the extra profit.'
        ],
        modelAnswer: '<p>Price discrimination &#8211; charging different prices to different consumers for the same good where differences are not cost-based &#8211; generates complex and context-dependent effects on consumer welfare. The overall verdict depends critically on the degree of discrimination, whether total output rises, and how the additional producer surplus is used.</p><p>The case against price discrimination centres on consumer surplus extraction. In every form of price discrimination, producer surplus increases at consumers&#39; expense: the firm captures willingness-to-pay that consumers would otherwise retain. In third-degree discrimination (Extract A), business rail travellers pay &#163;247 for a journey priced at &#163;32 for leisure travellers &#8211; the inelastic group is explicitly exploited, paying prices that reflect their captive position rather than cost. Their consumer surplus is reduced. Furthermore, Extract C reveals that digital personalised pricing approaches first-degree discrimination: algorithms individually estimate willingness to pay, eliminating consumer surplus at the individual level. The CMA found price differences of up to 30% for identical services, with consumers entirely unaware. This opacity prevents the informed choices that competitive markets require &#8211; a market failure compounded by the scale of digital platform data advantages.</p><p>However, the consumer harm case is substantially qualified by the output expansion argument. If third-degree price discrimination enables a firm to serve market segments it would otherwise exclude at a single monopoly price, consumers in the newly served segment gain welfare they would otherwise forgo entirely. Extract A notes that cross-subsidies from peak business fares maintain off-peak and rural services that would be commercially unviable under uniform pricing &#8211; representing a welfare gain for those consumers, even if business travellers lose surplus. Extract B&#39;s pharmaceutical example is more compelling: 200:1 price differentials enable access to life-saving HIV drugs for patients who could not afford developed-world prices. The welfare gain for millions of patients in India from access to &#163;85 treatment likely exceeds the welfare loss from &#163;18,400 pricing in the US &#8211; and the R&#38;D cross-subsidy (US revenues funding 45% of global pharma R&#38;D) creates the future innovations from which all consumers eventually benefit.</p><p>The verdict therefore depends on which consumers we consider and over what time horizon. Inelastic groups consistently lose consumer surplus; elastic groups or newly-served segments may gain. In the long run, dynamic efficiency gains from R&#38;D funded by discriminatory profits may benefit all consumers through new products. Digital personalised pricing (Extract C) is the most concerning development: approaching first-degree discrimination with no output expansion justification &#8211; consumers already in the market are individually re-priced without welfare gain. In conclusion, price discrimination benefits consumers when it expands output or funds socially valuable investment; it harms consumers when it merely extracts existing consumer surplus using market power and information asymmetries. Policy should distinguish these cases rather than treating price discrimination as uniformly harmful or beneficial.</p>'
      }
    ]
  },

  strongAnswers: [
    'Define third-degree price discrimination precisely &#8211; identifiable groups, different PED, MR&#8320; = MR&#8321; = MC',
    'Use specific data from the extracts: the 7:1 rail price ratio, the 200:1 pharmaceutical differential, the 30% digital pricing difference',
    'Distinguish between consumers who gain (elastic/new segment) and consumers who lose (inelastic/existing segment)',
    'Apply the output expansion test: does discrimination increase or merely reprice existing output?',
    'Reach a conditional judgement &#8211; the verdict depends on context, degree, and how the extra profit is used'
  ]
};
