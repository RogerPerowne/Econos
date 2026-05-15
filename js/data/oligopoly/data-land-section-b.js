window.ECONOS_LAND_SECTION_B = {
  topic:        'Oligopoly',
  sessionLabel: 'Session 3 of 3: Land',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'UK supermarket industry: competitive dynamics 2015&#8211;2024',
        tags:        ['CR4 &#8776; 64%', 'discounter disruption', '2014&#8211;16 price war', 'Clubcard and loyalty'],
        defaultOpen: true,
        paragraphs: [
          'The UK grocery market is one of the world&#39;s most studied oligopolies. In 2024, the four largest supermarkets &#8212; Tesco (27.3%), Sainsbury&#39;s (15.1%), Asda (12.6%), and Morrisons (8.7%) &#8212; collectively held a CR4 of approximately 63.7%, with a further 18% between Aldi and Lidl. The market has undergone dramatic structural change since 2015, driven by the rise of German discounters whose proposition of high quality at lower cost challenged the established oligopolists&#39; pricing power.',
          'Between 2014 and 2016, the big four engaged in an aggressive price war, collectively sacrificing an estimated &#163;4 billion in operating profit. Tesco&#39;s margin fell from 6% to near 1%. The response ultimately proved insufficient to stop the discounters: Aldi and Lidl continued growing because their structural cost advantage &#8212; simpler product ranges, smaller formats, different employment practices &#8212; could not be neutralised by the incumbents simply matching prices. By 2018, analysis by the Institute of Grocery Distribution suggested the big four had partially retreated from pure price competition towards differentiation strategies.',
          'Tesco&#39;s response centred on its Clubcard loyalty scheme, which by 2024 had accumulated approximately 22 million members. Clubcard Prices &#8212; differentiated discounts available only to members &#8212; were estimated to save members an average of &#163;346 per year and created significant customer lock-in. Sainsbury&#39;s Nectar card pursued a similar strategy. These schemes collected extensive data on purchasing behaviour, enabling highly targeted promotional activity that smaller rivals and new entrants struggled to replicate. Analysts noted that the schemes also functioned as a form of personalised price discrimination, offering lower prices to price-sensitive members while maintaining headline shelf prices.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'The kinked demand model and price rigidity in petrol retail',
        tags:        ['rockets and feathers', 'CMA investigation 2023', '&#163;900m excess margins', 'price matching behaviour'],
        defaultOpen: false,
        paragraphs: [
          'The UK petrol retail market, dominated by BP, Shell, Esso, and Jet, provides a textbook illustration of the kinked demand curve model. Research by the Competition and Markets Authority (2023) found that the four major branded retailers maintained near-identical prices at local forecourts &#8212; typically within 0.5 pence per litre of each other &#8212; despite significant fluctuations in wholesale oil prices. The CMA described this behaviour as &#8220;rockets and feathers&#8221;: retail prices respond rapidly (&#8220;like a rocket&#8221;) to wholesale cost increases but adjust slowly and incompletely (&#8220;like a feather&#8221;) when wholesale prices fall.',
          'The kinked demand model offers an explanation for this asymmetry. Each major retailer assumes that rivals will match any price reduction (eliminating the sales gain from cutting) but will not follow a price increase (allowing rivals to capture market share from the firm that raised its price). Under these assumptions, no firm has an incentive to move away from the prevailing market price &#8212; demand is elastic above P* (losing customers to rivals who hold their price) and inelastic below P* (rivals match and the sales gain is negligible). The vertical gap in the MR curve at current output means moderate cost changes do not alter the profit-maximising price.',
          'The CMA estimated that excess retail margins in petrol &#8212; the gap between wholesale and retail price above a competitive benchmark &#8212; cost UK motorists approximately &#163;900 million per year. The regulator stopped short of concluding that explicit collusion had occurred but noted that the market was characterised by &#8220;weak competitive dynamics&#8221; and recommended structural measures including a statutory price transparency scheme to facilitate consumer price comparison. Independent retailers, who held approximately 30% of sites, consistently undercut the majors, suggesting competitive conditions could be improved by reducing the market power of the dominant branded retailers.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Non-price competition and brand loyalty in oligopolistic markets',
        tags:        ['loyalty schemes', 'advertising spend', 'switching costs', 'consumer welfare debate'],
        defaultOpen: false,
        paragraphs: [
          'Non-price competition is the dominant competitive strategy in most UK oligopolistic markets. Where price cuts risk retaliation and a mutually destructive price war, advertising, loyalty schemes, product development, and service investment offer more durable competitive advantages. UK businesses spend over &#163;35 billion annually on advertising, with consumer goods oligopolists &#8212; supermarkets, telecoms, banks, and energy companies &#8212; accounting for a disproportionate share. The four major UK supermarkets alone spend in excess of &#163;800 million on advertising annually.',
          'The welfare implications of non-price competition are contested. Defenders argue it serves consumers by providing information (helping them identify products that meet their needs), funding content creation (advertising supports media and sports), and driving product quality improvements (firms invest in product development to differentiate, benefiting consumers). Tesco&#39;s Clubcard, for instance, provides genuine price reductions to members &#8212; estimated average savings of &#163;346 per year &#8212; and convenient personalised promotions.',
          'Critics counter that much non-price competition is wasteful from a social perspective. An advertising arms race &#8212; where all supermarkets increase spending in response to rivals, with no net change in market shares &#8212; consumes resources (labour, media capacity, creative services) that could produce goods or services with direct consumer value. Loyalty schemes that create switching costs may reduce consumer choice and undermine competition over time: if 22 million shoppers are locked into Tesco&#39;s Clubcard ecosystem, the barrier to switching to a rival or new entrant rises. The Office of Fair Trading has previously noted that loyalty schemes, while individually beneficial to members, may in aggregate reduce competitive pressure on incumbents.'
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
        stem:   'Explain the key characteristics of an oligopolistic market.',
        tips: [
          'Identify at least three distinct characteristics &#8212; do not just list them, explain what each means.',
          'Strategic interdependence is the most important characteristic &#8212; explain why firms must consider rivals&#39; reactions.',
          'Relate characteristics to real UK examples where possible (supermarkets, petrol, banking).',
          'Distinguish oligopoly from perfect competition and monopoly to show you understand the spectrum of market structures.'
        ],
        modelAnswer: 'Oligopoly is characterised by a small number of large firms dominating a market, typically measured by a CR4 above 60%. The UK supermarket CR4 of approximately 63.7% and the banking CR5 of around 80% illustrate this. Each firm is large enough that its pricing and output decisions affect rivals and vice versa &#8212; this is strategic interdependence, the defining feature of oligopoly. Unlike perfect competition (where firms are price-takers) or monopoly (where one firm dominates), oligopolists must form expectations about rivals&#39; reactions before making decisions. High barriers to entry &#8212; economies of scale, brand loyalty, sunk costs, and network effects &#8212; protect incumbents from new competition and sustain market concentration. Oligopolists may sell homogeneous products (petrol, steel) or differentiated ones (supermarket offerings, smartphones), but in either case tend to prefer non-price competition &#8212; advertising, loyalty schemes, product development &#8212; over price cuts, which risk triggering mutually destructive price wars.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extract A, examine the competitive dynamics of the UK supermarket industry between 2015 and 2024.',
        tips: [
          'Use specific data from Extract A: market shares, CR4, the price war, Clubcard figures.',
          'Explain what the discounter entry means for the oligopoly model &#8212; how did it change strategic behaviour?',
          'Analyse the shift from price competition to non-price competition (Clubcard, Nectar) and explain the strategic logic.',
          'Consider whether the outcome has been good or bad for consumers.',
          'Reach a balanced assessment &#8212; include a counter-argument.'
        ],
        modelAnswer: 'Extract A documents a decade of significant structural change in the UK supermarket oligopoly. The entry of Aldi and Lidl &#8212; growing from approximately 5% to 18% combined market share &#8212; disrupted the established equilibrium by introducing a structural cost advantage (simpler ranges, smaller formats, lower labour costs) that the big four found difficult to match. This triggered the 2014&#8211;16 price war &#8212; a classic game theory outcome in which strategic interdependence drove all incumbents to match price cuts regardless of the collective profit destruction. Extract A records &#163;4 billion in sacrificed operating profit and Tesco&#39;s margin compressed from 6% to near 1% &#8212; the prisoner&#39;s dilemma outcome where each firm&#39;s dominant strategy was to cut, even though cooperation would have preserved more profit for all. The price war benefited consumers significantly: food price inflation was suppressed and real grocery prices fell during this period. However, as Extract A notes, the big four eventually recognised that price matching could not neutralise the discounters&#39; structural cost advantage and shifted strategy towards non-price differentiation. Tesco&#39;s Clubcard &#8212; with 22 million members by 2024 and estimated annual savings of &#163;346 per member &#8212; is the most prominent example. By tying consumers to the scheme through personalised pricing, Tesco created switching costs that reinforced its market position while ostensibly offering consumers benefit. Sainsbury&#39;s pursued the same strategy through Nectar. The welfare implications are mixed. The shift to non-price competition reduced the direct competitive pressure on prices that the price war had generated &#8212; loyalty scheme pricing is a form of personalised price discrimination, not transparent competitive pricing. But the schemes deliver real savings to members. Overall, the period illustrates oligopoly&#39;s complex competitive dynamics: fierce price competition when triggered by structural disruption, followed by a retreat to non-price strategies that partially restore margins while providing selective consumer benefits.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss the extent to which oligopoly is harmful to consumers. Refer to Extract C and your own knowledge.',
        tips: [
          'Begin by establishing the theoretical case that oligopoly harms consumers (P > MC, deadweight loss, X-inefficiency, non-price competition costs).',
          'Use Extract C: advertising arms race, loyalty scheme switching costs, non-price competition welfare debate.',
          'Then develop the counter-arguments: dynamic efficiency (R&amp;D investment), product variety, financial stability (banking), economies of scale.',
          'Apply the kinked demand model and game theory evidence from the other extracts.',
          'Reach a conditional, supported conclusion: it depends on whether oligopoly is competitive or collusive, and on which welfare dimension matters most.'
        ],
        modelAnswer: 'Whether oligopoly harms consumers depends critically on how concentrated market power is exercised &#8212; the range of possible outcomes spans from near-competitive results to near-monopoly outcomes &#8212; and on how welfare is defined across static and dynamic dimensions. The theoretical case for harm rests on the standard market power argument. Oligopolists typically set prices above marginal cost (P&#160;&#62;&#160;MC), creating allocative inefficiency and a deadweight welfare loss: output is below the socially optimal level, and consumer surplus is transferred to producer profit. The UK banking data illustrates this: with a CR5 of 80% and &#163;44 billion in combined profits, major banks passed through only 40% of Bank Rate rises to savers, compressing depositor returns while maintaining lending margins. This is consistent with the theory that concentrated markets with high switching costs enable above-competitive pricing at consumers&#39; expense. X-inefficiency provides a further harm: reduced competitive pressure allows management slack to inflate actual costs above their minimum. The CMA&#39;s &#163;900 million estimate of excess petrol retail margins and the &#163;340 million NatWest fine further suggest that oligopolistic pricing and behaviour impose quantifiable costs on consumers. Extract C contributes the non-price competition dimension. The advertising arms race &#8212; where all supermarkets spend over &#163;800 million annually, with no net market share gain &#8212; consumes real resources (labour, media capacity) that could produce goods with direct consumer value. Loyalty schemes, while offering individual benefits, create switching costs that may reduce competitive pressure over time: with 22 million Clubcard members, Extract C notes the risk that incumbent lock-in limits effective competition and barriers to new entry. However, several counter-arguments qualify the harm conclusion. Dynamic efficiency is potentially oligopoly&#39;s strongest counter-claim. Supernormal profits fund substantial R&D investment: pharmaceutical oligopolists invest 15&#8211;20% of revenue in R&D; tech oligopolists (Apple, Google) fund the innovations that consumers adopt rapidly. The Schumpeterian argument &#8212; that market power generates the profit and incentive necessary for major innovation &#8212; is particularly compelling in knowledge-intensive industries. Competitive oligopoly can deliver near-competitive outcomes: the 2014&#8211;16 supermarket price war cut consumer grocery bills significantly, and the sustained competitive pressure from Aldi and Lidl has maintained downward price pressure since. The sector also benefits from economies of scale &#8212; large supermarkets&#39; buying power reduces supplier costs and ultimately retail prices &#8212; that fragmented competitive markets could not replicate. Product variety is another consumer benefit: oligopolistic firms invest in product development and service quality to differentiate, providing range and quality that homogeneous competitive markets cannot offer. In conclusion, oligopoly is not uniformly harmful to consumers &#8212; its welfare effects are context-dependent and dynamic. Collusive oligopoly, where firms coordinate to restrict output and raise prices, produces monopoly-like harm: welfare losses, excess profits, and consumer detriment that competition policy must address. Competitive oligopoly &#8212; with active rivalry on price, quality, and innovation &#8212; may deliver near-competitive outcomes with the added benefit of scale economies and innovation investment. The key determinant of consumer welfare is not market structure per se but the intensity and form of competition within that structure. UK competition policy correctly focuses on behaviour &#8212; blocking cartels, investigating price coordination, enforcing consumer protection &#8212; rather than on atomising concentrated industries that derive genuine efficiency benefits from scale.'
      }
    ]
  },

  strongAnswers: [
    'Use specific data from all three extracts &#8212; quote market shares, profit figures, and the CMA estimates',
    'Apply game theory concepts precisely: prisoner&#39;s dilemma, Nash equilibrium, dominant strategy',
    'Distinguish competitive from collusive oligopoly &#8212; the welfare verdict depends on which type applies',
    'Develop the dynamic efficiency counter-argument &#8212; this is the key evaluative balance point for the 12-mark question'
  ]
};
