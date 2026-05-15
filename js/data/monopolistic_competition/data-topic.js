window.ECONOS_TOPIC = {
  id: 'monopolistic_competition',
  topicNum: '3.12',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Monopolistic Competition',
  estTime: '9-11 minutes',
  goal: 'Lock in the assumptions, short-run and long-run equilibria, efficiency properties, and how monopolistic competition explains real markets with product differentiation.',
  intro: {
    heroKey: 'heroFirm',
    summary: 'Monopolistic competition blends elements of both monopoly and competition: many firms compete, but each has a degree of market power through product differentiation. The result is a market that achieves variety but sacrifices productive efficiency.',
    doInThis: 'Work through 7 cards covering the four assumptions, the downward-sloping demand curve, short-run supernormal profit, long-run normal profit equilibrium, excess capacity, efficiency analysis, and evaluation of the model. Finish with a 25-mark essay scaffold.',
    outcomes: [
      'State the four assumptions of monopolistic competition and how they differ from perfect competition',
      'Draw and explain short-run supernormal profit and long-run normal profit equilibria',
      'Explain the excess capacity result and its efficiency implications',
      'Evaluate whether monopolistic competition is preferable to perfect competition despite its inefficiency'
    ],
    tip: 'Short run: like monopoly — MR = MC, P > MC, supernormal profit possible. Long run: like competition — free entry eliminates supernormal profit, P = AC. But unlike perfect competition, P > MC and P > min AC in the long run — excess capacity and allocative inefficiency persist.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'monopolistic_competition_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Monopolistic competition: the big picture',
      lede: 'Many firms, differentiated products. A hybrid that delivers variety — but pays for it in efficiency.',
      branches: [
        { tone: 'green',  label: 'Many firms, free entry',   sub: 'Like perfect competition: no barriers, so supernormal profit gets competed away in the long run.' },
        { tone: 'blue',   label: 'Product differentiation',  sub: 'Each firm has a slightly different product → downward-sloping demand → some pricing power.' },
        { tone: 'amber',  label: 'Excess capacity',          sub: 'Long-run tangency sits to the left of minimum AC. Firms operate below efficient scale.' },
        { tone: 'purple', label: 'Variety vs efficiency',    sub: 'Consumers gain choice; the cost is allocative and productive inefficiency. The defining trade-off.' }
      ],
      body: 'Monopolistic competition (Chamberlin, 1930s) has four key assumptions:<br><br>1. <strong>Many sellers:</strong> many firms in the market — no firm is large enough to dominate; each has small market share.<br>2. <strong>Product differentiation:</strong> each firm\'s product is slightly different — branding, quality, location, design. This gives each firm a small degree of market power (downward-sloping demand).<br>3. <strong>No barriers to entry or exit:</strong> firms can freely enter profitable markets and exit loss-making ones — same as perfect competition.<br>4. <strong>Imperfect information:</strong> consumers don\'t have perfect knowledge of all products and prices — search costs and brand loyalty exist.<br><br><strong>Key difference from perfect competition:</strong> product differentiation means each firm is NOT a price-taker. Each faces a downward-sloping demand curve for its differentiated product.',
      keyTerms: [
        { term: 'Product differentiation', def: 'Each firm\'s product differs from rivals\' in real or perceived ways — gives each firm some pricing power.' },
        { term: 'Non-price competition', def: 'Competition through branding, quality, service, location, and advertising rather than solely on price.' },
        { term: 'Downward-sloping demand', def: 'Product differentiation means the firm faces a demand curve with negative slope — it has some power to set price above MC.' }
      ],
      examEdge: 'The critical difference from perfect competition is product differentiation → downward-sloping demand. In perfect competition: AR = MR (horizontal demand). In monopolistic competition: MR < AR (downward-sloping demand, so MR lies below AR). This single change generates fundamentally different long-run outcomes — specifically, the excess capacity result.'
    },
    {
      id: 'monopolistic_competition_2',
      template: 'framing',
      title: 'Short-Run Equilibrium',
      body: 'In the short run, monopolistically competitive firms behave like monopolists:<br><br>• Each firm faces a downward-sloping demand curve (due to product differentiation)<br>• Profit-maximising output: MR = MC<br>• Price set from demand curve at Q*: P > MC (since demand slopes down → MR < P)<br>• Can make <strong>supernormal profit</strong> if P > AC at Q*<br>• Can make <strong>normal profit</strong> (P = AC) or <strong>loss</strong> (P < AC)<br><br>The short run allows supernormal profit because entry hasn\'t yet occurred. The demand curve for an individual firm\'s product is relatively elastic (many close substitutes from rivals) but not perfectly elastic (product is differentiated, not identical).',
      keyTerms: [
        { term: 'Short-run supernormal profit', def: 'Possible when P > AC at the profit-maximising output MR = MC. Attracts new entry.' },
        { term: 'Elastic but downward-sloping demand', def: 'More elastic than monopoly (many close substitutes) but less elastic than perfect competition (product is differentiated).' },
        { term: 'Short-run monopoly behaviour', def: 'Monopolistic competitor is a "mini-monopolist" in the short run — uses MR = MC rule, P > MC.' }
      ],
      examEdge: 'The demand curve for a monopolistically competitive firm is more elastic than a monopolist\'s because there are many close substitutes — rivals sell similar (though not identical) products. A significant price rise causes substantial customer defection to rivals. This higher elasticity means the markup (P − MC) is lower than a pure monopolist\'s — limited market power, not zero market power.'
    },
    {
      id: 'monopolistic_competition_3',
      template: 'mechanisms',
      diagramKey: 'mcLrTangency',
      title: 'Long-Run Adjustment: Entry Erodes Profit',
      intro: 'Free entry eliminates supernormal profit in the long run — the same mechanism as perfect competition, but the long-run outcome is different.',
      steps: [
        { label: 'Start: supernormal profit', text: 'P > AC at Q*. New firms enter, attracted by supernormal profit. No entry barriers — entry is free.' },
        { label: 'Entry effect on demand', text: 'New firms offer close substitutes. The individual firm\'s demand curve shifts LEFT (fewer customers at any price) and becomes MORE ELASTIC (better substitutes available → consumers more price-sensitive).' },
        { label: 'Long-run equilibrium', text: 'Demand curve shifts until it is tangent to the AC curve. At this point: P = AC (normal profit). No further incentive to enter or exit.' },
        { label: 'Key long-run condition', text: 'P = AC (normal profit — zero supernormal profit). BUT: P > MC (because demand is still downward-sloping → MR < P → profit max at MR = MC → P > MC). The firm does NOT produce at minimum AC.' }
      ],
      examEdge: 'The tangency condition is crucial: the demand curve is tangent to (just touches) the AC curve at the long-run profit-maximising output. This tangency occurs to the LEFT of the minimum AC point. This means: (1) AC is not at its minimum — productive inefficiency, (2) P > MC — allocative inefficiency, (3) output is below the minimum-AC output — excess capacity.'
    },
    {
      id: 'monopolistic_competition_4',
      template: 'framing',
      title: 'Excess Capacity',
      body: '<strong>Excess capacity</strong> is the defining feature of monopolistic competition\'s long-run equilibrium:<br><br>• Firms produce at Q* (where MR = MC)<br>• Q* is to the LEFT of the minimum AC output<br>• The firm could produce more output at lower unit cost — it has spare productive capacity<br>• Excess capacity = minimum-AC output minus actual output<br><br><strong>Why excess capacity exists:</strong> product differentiation creates a downward-sloping demand that is tangent to AC to the left of minimum AC. The firm can\'t expand output without reducing price — and at Q*, it\'s already maximising profit.<br><br><strong>Real-world evidence:</strong> restaurants with empty tables at lunchtime, hairdressers with idle chairs, local shops operating below full capacity. All maintain differentiation (location, service, brand) but have unused capacity.',
      keyTerms: [
        { term: 'Excess capacity', def: 'The difference between the output at minimum AC and the actual profit-maximising output — the firm has unused productive capacity.' },
        { term: 'Tangency condition', def: 'In LR equilibrium, demand curve is tangent to AC curve — just touching at the profit-maximising output where P = AC.' },
        { term: 'Productive inefficiency', def: 'Firm does not produce at minimum AC — unit costs are higher than the technically achievable minimum.' }
      ],
      examEdge: 'Excess capacity is often described as the "cost of variety" — monopolistically competitive markets provide product diversity (restaurants, cafes, clothing brands) but at the cost of each firm operating below minimum efficient scale. The welfare question: is the value of variety worth the higher unit costs? This is the central evaluative tension in the topic.'
    },
    {
      id: 'monopolistic_competition_5',
      template: 'diagnose',
      title: 'Efficiency in Monopolistic Competition',
      intro: 'The long-run equilibrium of monopolistic competition fails both standard static efficiency conditions.',
      rows: [
        { label: 'Efficiency type', colA: 'Monopolistic competition', colB: 'Perfect competition' },
        { label: 'Productive efficiency (P = min AC)', colA: 'NOT achieved. Firm produces at P = AC but to the left of minimum AC. Higher unit costs due to excess capacity.', colB: 'ACHIEVED in long run. P = min AC — competitive pressure forces minimum cost production.' },
        { label: 'Allocative efficiency (P = MC)', colA: 'NOT achieved. P > MC — firm is a price-setter with some market power. Welfare loss relative to competitive price.', colB: 'ACHIEVED. P = MC in competitive equilibrium — resources allocated to highest value use.' }
      ],
      footer: 'Non-price competition: monopolistically competitive firms compete heavily on advertising, branding, and product development. This may generate dynamic efficiency (product innovation, consumer choice) but increases costs, shifting AC upward. Advertising is both a cost (reduces efficiency) and a benefit (conveys information, enables variety).',
      examEdge: 'The efficiency comparison table always shows monopolistic competition performing worse than perfect competition on static criteria. The evaluative counter-argument is variety and dynamic efficiency: consumers value choice between differentiated products; competition through product development may generate innovation. Which matters more depends on the specific market — a good essay addresses both sides.'
    },
    {
      id: 'monopolistic_competition_6',
      template: 'cause',
      title: 'Non-Price Competition',
      causes: [
        { head: 'Advertising and branding', body: 'Firms invest in advertising to shift demand rightward (more customers) and make it more inelastic (brand loyalty reduces price sensitivity). Increases AC but may increase profit if successful. Example: coffee shops spend on brand identity to justify premium prices.' },
        { head: 'Product development', body: 'Continuous minor product improvements to stay ahead of rivals and maintain differentiation. Fast fashion: constant new collections. Smartphone apps: regular updates. Generates dynamic efficiency but constant cost pressure.' },
        { head: 'Quality and service', body: 'Differentiation through service quality, reliability, speed, or after-sales support. Law firms, accountants, restaurants — service quality is the primary differentiator.' },
        { head: 'Location and convenience', body: 'Physical differentiation through proximity to consumers. Local cafes, corner shops, neighbourhood pharmacies compete partly on location. Location creates a degree of natural local monopoly.' }
      ],
      examEdge: 'Advertising in monopolistic competition has two economic effects: (1) it shifts demand rightward (more consumers) — revenue effect; (2) it shifts AC upward (higher costs) — cost effect. Net profit effect depends on which dominates. From a welfare perspective: advertising can be informative (reduces consumer search costs — beneficial) or purely persuasive (creates artificial brand loyalty — no welfare benefit, just cost). Distinguishing informative vs persuasive advertising is a sophisticated evaluation point.'
    },
    {
      id: 'monopolistic_competition_7',
      template: 'paired',
      title: 'Evaluation: Is Monopolistic Competition Desirable?',
      left: {
        label: 'Arguments for (vs perfect competition)',
        points: [
          'Provides consumer variety — product differentiation reflects genuine consumer preferences for choice',
          'Non-price competition may drive dynamic efficiency: innovation, quality improvement',
          'More realistic model than perfect competition — most real markets have some differentiation',
          'Local monopoly elements serve dispersed consumers who value proximity',
          'Advertising provides useful information about product characteristics'
        ]
      },
      right: {
        label: 'Arguments against (vs perfect competition)',
        points: [
          'Productive inefficiency: excess capacity means higher unit costs than necessary',
          'Allocative inefficiency: P > MC — under-production relative to social optimum',
          'Advertising expenditure is a resource cost with mixed consumer benefit',
          'Normal profit in long run, but at higher cost than perfectly competitive equilibrium',
          'Brand loyalty may be irrational — consumers pay premium for negligible real differences'
        ]
      },
      examEdge: 'The best markets for real-world application: restaurants (similar food, compete on atmosphere/cuisine/location), hairdressers (similar service, compete on style/reputation/location), clothing brands (similar garments, compete on brand/design), smartphone apps. All show the defining features: many sellers, differentiated products, free entry, supernormal profit eroded long-run. Using a specific industry example and applying the theory systematically always distinguishes top-band answers.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'mc-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: monopolistic competition',
      question: 'Evaluate the view that monopolistic competition leads to an inefficient allocation of resources. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define monopolistic competition and explain why its long-run equilibrium differs from perfect competition in terms of efficiency.',
          hint: 'Monopolistic competition: many firms, differentiated products, free entry. Long-run: P = AC (normal profit) but P > MC (allocative inefficiency) and P > min AC (productive inefficiency, excess capacity). The efficiency case against MC is well-established. But product variety and non-price competition may generate consumer benefits that the static efficiency framework misses.',
          model: 'Monopolistic competition — characterised by many competing firms selling differentiated products with free entry — produces a long-run equilibrium where the demand curve is tangent to the average cost curve. This generates normal profit but leaves the firm at an output below minimum average cost, with price above marginal cost. By the standard welfare criteria, this constitutes both allocative inefficiency (P > MC → output below social optimum) and productive inefficiency (P > min AC → excess capacity). However, a complete welfare assessment must also consider the consumer gains from product variety and non-price competition that differentiation enables.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — The case for inefficiency: excess capacity and DWL',
          prompt: 'Explain allocative and productive inefficiency in the monopolistic competition long-run equilibrium.',
          hint: 'Allocative inefficiency: P > MC — output where demand curve is tangent to AC lies to the LEFT of minimum AC. Each unit not produced between actual output and the socially optimal output represents DWL. Productive inefficiency: firms operate with excess capacity — they could lower AC by producing more. Chamberlin called this the "cost of monopolistic competition": consumers pay higher prices for variety. Empirical example: restaurant sector has persistent thin margins and many exits — excess capacity visible as half-empty restaurants.',
          model: 'In the long-run equilibrium of monopolistic competition, the demand curve is tangent to the average cost curve at a point to the left of minimum AC. This creates two efficiency losses simultaneously. First, allocative inefficiency: price exceeds marginal cost, meaning consumers would value additional units at more than the cost of producing them — a deadweight welfare loss. Second, productive inefficiency: firms operate with excess capacity, producing below the output at which average cost is minimised. They pay higher average costs than is technically necessary. Chamberlin described this as the "cost of monopolistic competition" — consumers pay for variety through higher prices and smaller individual firm scale. The restaurant industry illustrates this: intense product differentiation generates many small establishments operating below efficient scale, with persistent thin margins and high exit rates.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — The variety benefit: consumer welfare from differentiation',
          prompt: 'Explain how product differentiation generates consumer surplus and dynamic benefits that partially offset the efficiency losses.',
          hint: 'Product variety → consumer surplus from closer match to preferences (horizontal differentiation). Dixit-Stiglitz: consumers value variety intrinsically — a market with more differentiated options generates higher total welfare even with excess capacity. Non-price competition (quality, service, innovation) → dynamic efficiency through product improvement. Advertising may create information value (not just persuasion). Example: restaurant sector variety clearly improves consumer welfare vs a homogeneous food market.',
          model: 'The static efficiency framework understates the consumer benefits of monopolistic competition by ignoring the welfare gains from product variety. When products are differentiated, consumers can choose the variant that most closely matches their preferences — generating consumer surplus from a better fit between product and taste. The Dixit-Stiglitz (1977) framework formalises this: consumers have a preference for variety that is intrinsically welfare-improving, so a market with more differentiated options generates higher total welfare even if each firm operates with excess capacity. Non-price competition in monopolistic competition also drives dynamic efficiency improvements: firms invest in quality, design, service, and innovation to differentiate their product — a form of competitive pressure absent in homogeneous markets. The restaurant sector, often cited as excess capacity in static analysis, is also the sector with the fastest product innovation (cuisine development, service concepts) — a dynamic benefit the efficiency framework misses.'
        },
        {
          type: 'counter',
          label: 'Counter — Advertising waste and the X-inefficiency challenge',
          prompt: 'Evaluate whether advertising and branding in monopolistic competition generate welfare costs rather than benefits.',
          hint: 'Advertising: may be informative (welfare-improving) or persuasive (creates artificial differentiation, raises barriers). Galbraith: advertising manufactures demand — not genuine consumer preference. Dorfman-Steiner: monopolistically competitive firms over-invest in advertising relative to the social optimum. Brand loyalty may make demand less elastic → reduces the self-correcting competitive pressure. X-inefficiency: market power from differentiation reduces competitive discipline → higher costs than necessary.',
          model: 'The variety argument for monopolistic competition is strongest when differentiation reflects genuine product variation (taste differences in restaurants, quality differences in clothing). However, much product differentiation is created through advertising and branding that generates perceived rather than real differences — Galbraith\'s "manufactured wants." In this case, advertising expenditure is a welfare cost rather than a benefit: resources devoted to persuasive advertising (making Coca-Cola seem more appealing than Pepsi) could be used productively elsewhere. Brand loyalty artificially reduces the price elasticity of demand, reducing the competitive pressure that should erode supernormal profit. If advertising creates sustainable brand advantages, the long-run equilibrium may involve persistent supernormal profit — worse than the standard model suggests. X-inefficiency is also a concern: the degree of market power from differentiation, even if small, reduces the intensity of cost competition and may allow inefficient management practices to persist.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — Static vs dynamic efficiency; real-world market assessment',
          prompt: 'Weigh the static efficiency losses against the dynamic benefits of differentiation, and consider whether the outcome is preferable to perfect competition.',
          hint: 'The static efficiency losses in MC (P > MC, excess capacity) are real but relatively small compared to monopoly — the many-firms, free-entry conditions limit market power. The question is whether the variety benefit offsets these losses. Consumers revealed preference: they consistently choose differentiated markets when given the option. A world of homogeneous products (perfect competition) would be more statically efficient but impoverishes consumer choice. Key test: is the excess capacity and DWL large enough to justify policy intervention? In most MC markets, the answer is no.',
          model: 'The appropriate evaluation compares monopolistic competition not against the unattainable standard of perfect competition but against the realistic alternative of fewer, less differentiated firms. The excess capacity and DWL in monopolistic competition are real but modest: because there are many firms with free entry, individual market power is limited and the P − MC gap is smaller than in oligopoly or monopoly. The dynamic benefits of product variety and non-price competition are substantial and directly observable: consumers consistently reveal preferences for differentiated markets (choosing restaurants over cafeterias, branded clothing over uniform garments). The Schumpeterian dynamic efficiency argument — that competition through innovation and differentiation drives long-run welfare gains — is particularly applicable to monopolistic competition, where firms continuously innovate to maintain differentiation. On balance, the efficiency losses of monopolistic competition are a reasonable price for product variety in most industries, and policy intervention to force productively efficient output would be welfare-reducing overall.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Deliver a reasoned judgement: static inefficiency is real but modest; variety benefits likely outweigh the losses in most MC markets.',
          hint: 'Acknowledge allocative and productive inefficiency — they are genuine. But: losses are modest compared to monopoly; variety benefits are real and valued by consumers; dynamic competition through non-price means drives product improvement. Policy intervention rarely justified. The view that MC is always inefficient ignores the variety dimension of welfare.',
          model: 'Monopolistic competition does produce allocative and productive inefficiency relative to the perfectly competitive benchmark — this is not in dispute. However, the view that this constitutes a clear case of inefficient resource allocation that warrants policy intervention is too strong. The efficiency losses are inherent to having product differentiation, which is itself welfare-improving: consumers value the variety that differentiation provides, and revealed preferences consistently show they choose differentiated markets when available. The static efficiency losses are also modest relative to monopoly, given the many-firms free-entry conditions that constrain individual market power. Dynamic efficiency — through continuous product innovation and quality competition — partially offsets static losses over time. On balance, monopolistic competition achieves a welfare outcome that is, in most industries, superior to forcing competitive homogeneity: the "price" of excess capacity is worth paying for the variety and dynamism it enables.'
        }
      ]
    }
  ]
};
