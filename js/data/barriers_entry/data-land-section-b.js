window.ECONOS_LAND_SECTION_B = {
  topic:        'Barriers to Entry',
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
        title:       'Boeing&#8211;Airbus duopoly: sunk costs and barriers in aircraft manufacturing',
        tags:        ['20-year COMAC development', '$32bn R&#38;D per aircraft', 'two viable producers', 'sunk cost barrier'],
        defaultOpen: true,
        paragraphs: [
          'Commercial aircraft manufacturing is one of the world&#39;s most concentrated industries: only two firms &#8212; Boeing (US) and Airbus (EU) &#8212; are capable of producing large passenger jets at commercial scale. China&#39;s COMAC began developing its C919 narrowbody aircraft in 2008 and achieved its first commercial delivery only in 2023 &#8212; a 15-year development timeline &#8212; and the aircraft has not yet secured significant orders outside China&#39;s state-linked airlines. Analysts estimate Boeing and Airbus have each invested over $30 billion in research, development, and certification for their respective aircraft families, expenditure that is almost entirely sunk: specialised tooling, proprietary manufacturing processes, and years of flight-test data have no significant resale value outside the industry.',
          'The minimum efficient scale in aircraft manufacturing requires producing several hundred aircraft per year to achieve competitive unit costs &#8212; itself a barrier requiring enormous upfront investment in production capacity before a single commercial sale. Established players benefit from decades of learning-by-doing: each aircraft produced reduces unit costs as engineers and production teams accumulate specialised knowledge. COMAC faces the double disadvantage of both starting at the wrong point on the learning curve and lacking the maintenance, parts, and training infrastructure that airlines require when selecting an aircraft type for their fleets.',
          'Aviation safety certification requirements create an additional regulatory barrier. The US FAA and European EASA certifications &#8212; which are prerequisites for selling to most international airlines &#8212; require years of testing and verification. COMAC&#39;s C919 has received Chinese certification only; the FAA certification process, if pursued, could take a further decade. Incumbent producers have already incurred these certification costs, while new entrants face them as an additional sunk investment before any revenue can be earned.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'Digital platform barriers: Google, Meta and data network effects',
        tags:        ['network effects', 'data advantages', 'CMA Digital Markets Act 2024', 'switching costs'],
        defaultOpen: false,
        paragraphs: [
          'Google and Meta (Facebook, Instagram, WhatsApp) together accounted for approximately 75% of UK digital advertising revenue in 2023 &#8212; a level of market concentration that the CMA has described as &#8220;entrenched.&#8221; The CMA&#39;s Digital Markets investigation found that these firms&#39; dominance is underpinned by self-reinforcing barriers that are qualitatively different from traditional cost-based barriers: network effects (the value of each platform rises with its user base), proprietary data advantages (each user interaction generates data that improves targeting algorithms beyond the capability of smaller rivals), and ecosystem lock-in (consumers using Google Search, Chrome, Android, and Google Maps are embedded in an interconnected system that makes switching individually costly even if collectively beneficial).',
          'The data advantage is particularly significant. Google and Meta have collected and processed user behaviour data for over a decade at a scale no new entrant can replicate. This data is the raw material for advertising targeting algorithms &#8212; the core revenue driver for both businesses. A new digital advertising platform entering the market would face an insurmountable disadvantage: its algorithms would be trained on far less data, producing inferior targeting, lower conversion rates, and therefore lower advertiser willingness to pay. The incumbents&#39; data advantage is self-reinforcing: more users generate more data, which improves the algorithm, which attracts more advertisers, which generates more revenue to invest in services that attract more users.',
          'The Digital Markets, Competition and Consumers Act (DMCCA) 2024 created a new &#8220;strategic market status&#8221; (SMS) designation, giving the CMA powers to impose conduct requirements on designated firms &#8212; including data portability, interoperability, and prohibitions on self-preferencing. The legislation aims to lower barriers to entry by reducing the data and ecosystem advantages of incumbents, making it possible for rivals to compete on quality rather than accumulated data advantage.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Pharmaceutical patents: innovation incentive versus access barrier',
        tags:        ['20-year patent term', '80&#8211;90% price fall on expiry', 'R&#38;D incentive', 'access vs innovation'],
        defaultOpen: false,
        paragraphs: [
          'The pharmaceutical patent system grants 20-year exclusive production rights to drug developers in exchange for public disclosure of the innovation. This legal monopoly is explicitly designed to create a temporary barrier to entry &#8212; preventing generic manufacturers from copying and producing a drug at near-zero marginal cost until the patent expires. The rationale is that without this barrier, the commercial incentive to invest &#163;1.3 billion in average drug development costs would be eliminated: any successful drug would immediately face generic competition that priced the originator out of the market before costs could be recovered.',
          'The welfare trade-off is explicit and intentional. During the patent term, the drug manufacturer charges a monopoly price far above marginal cost &#8212; restricting access for patients who cannot afford the drug and creating a deadweight welfare loss. This is the cost of the barrier. On patent expiry, generic manufacturers enter and prices typically fall by 80&#8211;90%, dramatically expanding access: approximately 83% of UK prescriptions are now dispensed as generics. The welfare gain from innovation &#8212; the existence of the drug at all &#8212; is intended to outweigh the temporary access barrier during the patent term.',
          'Critics argue the 20-year patent term is poorly calibrated. Effective patent life (after development time) may be only 10&#8211;12 years for a drug approved late in its patent term, insufficient to recover costs in some cases and providing excessive protection in others. Evergreening &#8212; minor formulation changes that reset the patent clock &#8212; is a strategic practice that extends the effective barrier beyond the intended 20 years. Patent linkage in pharmaceutical regulatory approval processes can also delay generic entry beyond patent expiry. These strategic uses of intellectual property rights transform a justified innovation barrier into an anticompetitive one, and have been subject to CMA and European Commission investigation.'
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
        stem:   'Explain what is meant by a barrier to entry.',
        tips: [
          'Define a barrier to entry precisely: a factor that gives incumbents an advantage over potential entrants.',
          'Distinguish structural barriers (cost conditions, technology) from strategic barriers (incumbent behaviour).',
          'Use an example from the context pack to illustrate.',
          'Explain how barriers to entry enable firms to sustain supernormal profit in the long run.'
        ],
        modelAnswer: 'A barrier to entry is any factor that gives existing firms (incumbents) a cost or strategic advantage over potential new entrants, making entry into the industry difficult or commercially unattractive. Barriers prevent the free entry that would, in a competitive market, erode supernormal profits down to the normal profit level. Without barriers to entry, the promise of supernormal profit would attract entrants until profit is competed away; with barriers, incumbents can sustain supernormal profit in the long run. Barriers can be structural &#8212; arising naturally from the industry&#39;s cost conditions or technology &#8212; or strategic &#8212; deliberate actions by incumbents to deter entry. Extract A illustrates a structural barrier in aircraft manufacturing: sunk R&#38;D costs of over $30 billion per aircraft family have no resale value, creating an irreversible commitment that potential entrants must also make before generating any revenue. This asymmetric risk &#8212; the incumbent has already absorbed the sunk cost, the entrant still faces it &#8212; is a formidable deterrent. Extract C shows a legal barrier: the 20-year pharmaceutical patent creates a statutory barrier to imitation. Both enable incumbents to sustain prices above competitive levels without eroding market share to new entrants.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'Using Extract A, examine the barriers to entry in commercial aircraft manufacturing.',
        tips: [
          'Identify all barriers in the extract: sunk R&#38;D costs, economies of scale (MES), learning curve, certification requirements.',
          'Explain how each deters entry &#8212; particularly the asymmetry between incumbents (already incurred costs) and entrants (still face them).',
          'Use the COMAC example to show that even state-backed entry with 15 years of effort has not succeeded.',
          'Consider whether these barriers are structural (reflect genuine cost conditions) or artificially constructed.',
          'Assess whether the barriers serve any beneficial function.'
        ],
        modelAnswer: 'Extract A reveals that commercial aircraft manufacturing is protected by multiple reinforcing structural barriers that have limited the global market to two producers for over four decades. The primary barrier is sunk cost: Boeing and Airbus have each invested over $30 billion in aircraft development, and virtually all of this is irrecoverable &#8212; specialised tooling, proprietary manufacturing processes, and certification data have no significant resale value. A new entrant cannot gradually test the market: it must commit to comparable expenditure before earning a single dollar of commercial revenue. The COMAC C919 demonstrates this brutally &#8212; 15 years of development and state-level investment has produced an aircraft that has not yet secured significant international orders. Second, economies of scale and the learning curve create a cost barrier. The extract notes that competitive unit costs require producing several hundred aircraft annually &#8212; a minimum efficient scale that demands its own enormous capital investment. Incumbents have also descended the learning curve over decades: each aircraft produced reduces unit costs as production teams accumulate expertise. A new entrant begins at the top of the learning curve, permanently cost-disadvantaged until it has produced comparable numbers &#8212; a process that may take decades during which it cannot survive without state support. Third, regulatory certification provides a time and financial barrier: FAA and EASA certification may take a further decade for COMAC, adding to sunk costs before international sales are possible. These barriers are largely structural &#8212; they reflect genuine industry cost conditions rather than deliberate incumbent anticompetitive behaviour. However, they produce a duopoly with characteristics that concern regulators: limited competition on price, Boeing-Airbus capacity coordination, and very limited choice for airlines. The barriers can also be argued to serve consumers: they reflect the genuine engineering complexity and safety requirements of commercial aviation, and the scale needed to sustain viable production of a safe, certified aircraft.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss the extent to which barriers to entry are always harmful to consumers and competition. Refer to the extracts and your own knowledge.',
        tips: [
          'Case against barriers: restrict competition, sustain supernormal profit, reduce consumer welfare, create allocative inefficiency.',
          'Case for barriers (structural): reflect genuine cost conditions, may enable economies of scale, fund innovation (Extract C).',
          'Case for barriers (pharmaceutical patents, Extract C): designed to incentivise innovation &#8212; explicitly beneficial in long run.',
          'Digital barriers (Extract B): more concerning &#8212; self-reinforcing data advantages with no clear consumer benefit.',
          'Aircraft barriers (Extract A): structural, reflect genuine safety/cost conditions &#8212; not anticompetitive in intent.',
          'Distinguish strategic barriers (always harmful) from structural/legal barriers (may be justified).',
          'Conclude with a conditional judgement &#8212; the verdict depends on the type of barrier and the context.'
        ],
        modelAnswer: '<p>Barriers to entry restrict the competitive process that normally drives prices toward marginal cost, eliminates supernormal profit, and forces firms to innovate and improve efficiency. On this view, barriers harm consumers by sustaining prices above competitive levels, protecting inefficient incumbents, and reducing the dynamic pressure to innovate. However, the three extracts reveal a more nuanced picture: some barriers are socially desirable, others are harmful, and the distinction between them is the key analytical question.</p><p>The clearest case for harmful barriers is found in strategic behaviour: predatory pricing, exclusive contracts, or the digital platform practices described in Extract B. Google and Meta&#39;s data advantages are self-reinforcing &#8212; each additional user generates data that improves targeting algorithms, raising the competitive hurdle for rivals without reflecting any genuine social benefit to consumers. A new entrant cannot replicate years of accumulated behavioural data: this is an artificial barrier that concentrates market power without serving the consumer interest in innovation or cost reduction. The CMA&#39;s designation of strategic market status and the DMCCA 2024 powers to require data portability directly target these barriers as harmful. Similarly, pharmaceutical evergreening (minor formulation changes resetting the patent clock, noted in Extract C) represents a strategic abuse of the patent system that extends barriers beyond their intended and socially justified duration &#8212; clearly harmful to both consumer access and competition.</p><p>However, the structural barriers in Extract A &#8212; aircraft manufacturing sunk costs, economies of scale, and safety certification &#8212; reflect genuine engineering and economic conditions. The requirement for extensive testing, certification, and capital investment is not a device to exclude competitors; it reflects the actual cost and safety requirements of building aircraft. The resulting duopoly may be suboptimal from a static competition perspective, but it reflects real industry economics. Removing these barriers is not straightforwardly possible without changing the underlying technology or safety standards. More importantly, the pharmaceutical patent barrier (Extract C) is explicitly designed to be beneficial: the 20-year patent barrier is the mechanism by which society purchases innovation. Without it, the commercial incentive to invest &#163;1.3 billion in drug development disappears &#8212; and the absence of the drug harms consumers far more than a temporary access restriction. The 80&#8211;90% price fall on patent expiry, and the fact that 83% of UK prescriptions are now generics, confirms that the barrier is temporary and the long-run outcome is competitive.</p><p>In conclusion, barriers to entry are not always harmful. Strategic barriers designed to exclude competitors without generating consumer benefit are clearly harmful and should be subject to competition policy intervention. Structural barriers reflecting genuine cost conditions may be inevitable and in some contexts beneficial (enabling scale economies, funding R&#38;D). Legally mandated barriers like patents are explicitly welfare-improving if correctly calibrated. Policy should therefore focus on distinguishing barrier type &#8212; addressing strategic barriers firmly while accommodating structural ones &#8212; rather than pursuing an indiscriminate policy of barrier reduction.</p>'
      }
    ]
  },

  strongAnswers: [
    'Define barriers to entry precisely &#8212; structural vs strategic, and the asymmetry between incumbent and entrant',
    'Use specific data from Extract A: $30bn sunk costs, 15-year COMAC development, certification requirements',
    'Explain self-reinforcing digital barriers (Extract B): data &#8594; algorithm &#8594; revenue &#8594; more users &#8594; more data',
    'Distinguish between harmful barriers (strategic, evergreening) and potentially beneficial ones (patents incentivising R&#38;D)',
    'Conclude conditionally: the verdict depends on the type of barrier and whether it serves any legitimate economic purpose'
  ]
};
