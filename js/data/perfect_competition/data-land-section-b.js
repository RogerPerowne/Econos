window.ECONOS_LAND_SECTION_B = {
  topic:        'Perfect Competition',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.routes.land('intro'),

  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'UK agricultural commodity markets: wheat prices and farm income volatility',
        tags:        ['&#163;340/tonne peak (2022)', 'farm income volatility', '&#8776;10,000 farms', 'price-taker behaviour'],
        defaultOpen: true,
        paragraphs: [
          'UK wheat markets provide one of the closest real-world approximations to perfect competition. There are approximately 10,000 commercial wheat-growing farms in the UK, each supplying a fraction of a percent of national output. Wheat of a given grade is highly standardised &#8212; a buyer is largely indifferent between suppliers &#8212; and prices are set transparently through commodity exchanges, with individual farmers having no meaningful ability to influence the price they receive.',
          'This price-taking structure produces significant income volatility. UK wheat prices moved from approximately &#163;150 per tonne in early 2020 to a record &#163;340 per tonne in May 2022 &#8212; driven by the Russian invasion of Ukraine disrupting Black Sea exports that account for roughly 30% of global wheat trade &#8212; before falling back to below &#163;180 per tonne by late 2023. Farmers who had locked in forward contracts at low prices during 2021 saw their input costs soar as energy and fertiliser prices rose simultaneously, resulting in significant losses. Those who had delayed selling could capitalise on the price spike.',
          'The 2022&#8211;23 cycle illustrates the adjustment mechanism of competitive markets. High prices attracted significant investment: the area of UK land planted with wheat rose by approximately 12% in autumn 2022. As supply responded domestically and global disruption eased, prices collapsed. Farm incomes, which had surged in 2022, fell sharply in 2023. Analysts at the Agriculture and Horticulture Development Board noted that this price volatility, while consistent with competitive theory, creates serious planning difficulties for farm businesses with long investment horizons.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'The 2022 energy crisis: competitive versus monopoly market responses',
        tags:        ['cost-push energy shock', 'price mechanism response', 'supply inelasticity', 'short-run vs long-run'],
        defaultOpen: false,
        paragraphs: [
          'The 2022 European energy crisis exposed contrasting dynamics between competitive and non-competitive markets. In natural gas wholesale markets &#8212; where large numbers of buyers and sellers trade standardised contracts &#8212; prices responded rapidly and dramatically to the supply shock caused by reduced Russian pipeline flows, with European gas prices rising over 400% between early 2021 and August 2022. The price mechanism functioned as theory predicts: high prices rationed existing supply, incentivised demand reduction, and &#8212; over a longer horizon &#8212; stimulated investment in alternative supply sources including liquefied natural gas (LNG) terminals and renewable capacity.',
          'In retail energy markets, by contrast, concentration among a small number of large suppliers meant the adjustment was more complicated. UK household energy prices were ultimately capped through government intervention (the Energy Price Guarantee), with the cost of maintaining below-market prices for consumers falling on public finances rather than being transmitted to demand-side adjustment. Critics argued that a more competitive retail market would have transmitted price signals more efficiently, accelerating behavioural responses such as energy efficiency investment.',
          'The crisis demonstrated a fundamental insight about competitive markets: the price mechanism is a powerful allocative tool that functions most effectively when markets are close to the competitive ideal. But it also revealed the distributional cost &#8212; competitive price signals impose the full burden of supply shocks on consumers, which may be socially acceptable for luxury goods but raises serious equity concerns in essential markets such as energy and food.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Real-world approximations to perfect competition',
        tags:        ['commodity markets', 'financial markets', 'limitations of the model', 'static vs dynamic efficiency'],
        defaultOpen: false,
        paragraphs: [
          'Perfect competition is a theoretical benchmark rather than a description of any real market, but several real-world markets come close to its defining conditions. Foreign exchange markets involve millions of buyers and sellers trading identical contracts (currencies), with prices determined continuously by supply and demand and no single trader able to influence the rate. Similarly, global commodity markets for standardised grades of oil, gold, wheat, and coffee approximate many of the model\'s conditions: large numbers of participants, homogeneous products, and transparent pricing.',
          'These near-competitive markets deliver many of the efficiency properties the theory predicts. Foreign exchange markets are highly liquid, with minimal bid-ask spreads reflecting near-zero transaction costs. Commodity prices adjust rapidly to new supply and demand information &#8212; as the 2022 wheat price spike shows, markets can process a major geopolitical shock within days.',
          'However, even these close approximations fall short of the ideal. Agricultural markets involve significant government intervention: UK farmers receive subsidies through the post-Brexit Environmental Land Management scheme, distorting the price signal. Commodity trading involves informational asymmetries &#8212; large trading firms may have better data on inventories, shipping, and weather than small producers. And all these markets score poorly on dynamic efficiency: commodity producers invest little in R&D, and the homogeneous product competition they face gives them no incentive to innovate beyond cost reduction. Perfect competition&#39;s static efficiency advantages must therefore be set alongside its dynamic efficiency limitations.'
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
        stem:   'Explain two assumptions of perfect competition and their implications for firm behaviour.',
        tips: [
          'Identify two distinct assumptions &#8212; do not repeat the same point.',
          'For each assumption, explain the market condition it describes and then explain what that means for how firms behave.',
          'The strongest answers link each assumption to a specific behavioural implication: e.g. homogeneous product → price-taking; no barriers to entry → long-run normal profit.'
        ],
        modelAnswer: 'First, the assumption of homogeneous product means that goods sold by different firms are identical &#8212; buyers are completely indifferent between sellers. The implication is that no firm can charge a price above the market price without losing all its customers to rivals offering an equivalent good at a lower price. This makes each firm a price-taker with a perfectly elastic demand curve. Second, the assumption of no barriers to entry or exit means that firms can freely enter a market if supernormal profit exists, and exit if losses persist. The implication is that supernormal profit is competed away in the long run: new entrants increase market supply, driving the price down until P = AC and only normal profit remains. This entry/exit mechanism disciplines firms and ensures the long-run equilibrium achieves normal profit &#8212; unlike monopoly, where barriers protect supernormal profit indefinitely.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extract A, examine why agricultural markets display characteristics of perfect competition and what this means for farmers\' incomes.',
        tips: [
          'Start by identifying the characteristics of perfect competition present in UK wheat markets, using specific evidence from Extract A.',
          'Explain how these characteristics produce price-taking behaviour and income volatility.',
          'Use the price data (&#163;150 → &#163;340 → &#163;180) to illustrate how competitive adjustment works.',
          'Assess whether the competitive adjustment is beneficial or harmful for farmers.',
          'Consider limitations: is the wheat market truly perfectly competitive? (subsidies, forward contracts, informational asymmetries)'
        ],
        modelAnswer: 'Extract A identifies three characteristics of UK wheat markets that approximate perfect competition. There are approximately 10,000 commercial wheat farms, with each supplying a fraction of a percent of national output &#8212; no single farm can influence price. Wheat of a given grade is highly standardised, making buyers indifferent between sellers. And prices are set on commodity exchanges with full price transparency. Together, these conditions produce the price-taking behaviour that perfect competition theory predicts: farmers accept the market price as given, with no ability to differentiate their product or charge a premium. For farmers&#39; incomes, this creates extreme volatility. Extract A documents a movement from approximately &#163;150 per tonne in 2020, to a record &#163;340 per tonne in May 2022 &#8212; as the Russian invasion disrupted 30% of global wheat trade &#8212; before collapsing below &#163;180 by late 2023. In a competitive market, price fully transmits every supply and demand shock to producers, since they have no pricing power to smooth the impact. Farmers who locked in forward contracts at low prices faced losses as input costs (energy, fertiliser) surged; others benefited from the spike. The high prices then triggered the long-run adjustment mechanism the theory predicts: UK wheat acreage rose 12% in autumn 2022, expanding supply and contributing to the subsequent price collapse. Farm incomes surged in 2022 and fell sharply in 2023. However, the extract also notes that this volatility creates &#8220;serious planning difficulties&#8221; for businesses with long investment horizons &#8212; an important qualification. Agricultural markets are not perfectly competitive: UK farmers receive government subsidies, creating price distortions, and large commodity traders may have informational advantages over individual producers. On balance, UK wheat markets exhibit many competitive characteristics and generate the income volatility the model predicts, but government intervention limits the extent to which the pure competitive model applies.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss whether perfect competition represents an ideal market structure from a welfare perspective. Refer to Extract C and your own knowledge.',
        tips: [
          'Define welfare and outline the efficiency criteria used to assess market structures.',
          'Explain the static efficiency advantages of perfect competition: allocative (P = MC) and productive (P = minimum AC) efficiency.',
          'Use Extract C: commodity markets approximate competitive conditions and deliver many efficiency benefits.',
          'Evaluate the dynamic efficiency limitation: Schumpeter\'s argument, R&D spending, patent protection as counter-evidence.',
          'Consider the distributional dimension (Extract B/C): competitive price signals can impose disproportionate burdens in essential markets.',
          'Conclude with a balanced, conditional judgement.'
        ],
        modelAnswer: 'Consumer and social welfare in economics is typically assessed against two efficiency criteria: allocative efficiency (P = MC &#8212; resources flow to their highest-valued uses) and productive efficiency (production at minimum average cost &#8212; no resource waste). Perfect competition uniquely achieves both simultaneously in long-run equilibrium, where P = MR = MC = minimum AC. This is the primary argument for its claim as an ideal market structure. In long-run competitive equilibrium, consumer surplus is maximised: the price is the lowest consistent with normal profit, with no transfer of welfare to supernormal producers as in monopoly. There is no deadweight welfare loss. As Extract C notes, near-competitive markets such as foreign exchange and commodity markets &#8212; with their minimal bid-ask spreads and rapid price adjustment &#8212; demonstrate that these efficiency properties are not merely theoretical. However, perfect competition faces a powerful dynamic efficiency critique. Extract C acknowledges that agricultural and commodity producers &#8220;invest little in R&D&#8221; and have no incentive to innovate beyond cost reduction. This is Schumpeter&#39;s argument: in a perfectly competitive market, firms earn only normal profit in the long run, leaving no retained earnings for R&D investment. Any innovation is immediately copied by rivals (homogeneous product, perfect information), eliminating the first-mover advantage that makes innovation commercially worthwhile. The pharmaceutical industry illustrates the counter-model: AstraZeneca, with significant market power, invested &#163;8.1 billion in R&D in 2023 &#8212; inconceivable for a price-taking commodity firm. The patent system explicitly creates temporary monopoly rights to incentivise innovation, acknowledging that dynamic efficiency requires departures from perfect competition. There is also a distributional dimension that the welfare concept must address. Extract B and C note that competitive price signals impose the full burden of supply shocks on consumers &#8212; appropriate for luxury goods where demand is elastic and adjustment is feasible, but problematic in essential markets such as food and energy where demand is inelastic and lower-income households spend a larger share of their income. The 2022 energy crisis prompted government intervention in the UK precisely because competitive price transmission was socially unacceptable in an essential market. Perfect competition&#39;s welfare claim rests on the premise that markets are complete and consumers can adjust &#8212; neither always holds. In conclusion, perfect competition is the static welfare benchmark because it simultaneously achieves all efficiency conditions and maximises consumer surplus. But it is not an unconditionally ideal market structure. Its weakness on dynamic efficiency makes it unsuitable as a welfare ideal for innovation-intensive industries; its price-transmission mechanism raises equity concerns in essential markets. The ideal market structure is therefore context-dependent: competitive conditions are most desirable in standardised, non-essential goods markets where static efficiency dominates; some degree of market power may be preferable where dynamic efficiency and innovation are the primary welfare criterion.'
      }
    ]
  },

  strongAnswers: [
    'Apply the five assumptions precisely and link each to a specific market prediction',
    'Use Extract A data directly &#8212; quote the price figures and relate them to theoretical conditions',
    'Distinguish static from dynamic efficiency &#8212; this is the central evaluative tension in the question',
    'Reach a conditional conclusion &#8212; the ideal market structure depends on the industry context'
  ]
};
