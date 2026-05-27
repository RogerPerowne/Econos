window.ECONOS_TOPIC = {
  id: 'oligopoly',
  topicNum: '4.4.1',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Oligopoly',
  estTime: '9-11 minutes',
  goal: 'Lock in the characteristics of oligopoly, the kinked demand curve model, strategic interdependence, and how oligopolists behave in practice.',
  intro: {
    heroKey: 'heroGameTheory',
    summary: 'Oligopoly is the dominant real-world market structure: a few large firms with significant market power who must each consider rivals\' reactions when making decisions. Strategic interdependence – not just cost and demand – drives outcomes.',
    doInThis: 'Work through 8 cards covering the defining characteristics, strategic interdependence, the kinked demand curve model, price rigidity, non-price competition, the spectrum from competition to collusion, evaluation, and a 25-mark essay scaffold on oligopoly and consumer welfare.',
    outcomes: [
      'Identify the key characteristics of oligopoly and give real-world examples',
      'Explain strategic interdependence and why it complicates oligopolist decision-making',
      'Draw and interpret the kinked demand curve model and explain price rigidity',
      'Evaluate the kinked demand model and assess oligopoly\'s real-world behaviour'
    ],
    tip: 'Oligopoly key idea: each firm must consider rivals\' reactions. If I cut price, will rivals cut too? If I raise price, will rivals follow or undercut me? This strategic interdependence creates a range of possible behaviours – from fierce competition to tacit collusion.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'oligopoly_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Oligopoly: the big picture',
      lede: 'A few big firms watching each other. Strategic interdependence is the whole story – and it generates wildly different outcomes from the same structure.',
      branches: [
        { tone: 'blue',   label: 'Few firms, high barriers',  sub: 'High CR4 or HHI. Scale economies, brands, and network effects protect incumbents from entry.' },
        { tone: 'amber',  label: 'Strategic interdependence', sub: 'Every pricing or output move depends on guessing rivals\' reactions. Game theory replaces simple optimisation.' },
        { tone: 'purple', label: 'Price war or collusion',    sub: 'Same structure can produce fierce undercutting or tacit price-matching. The kinked demand curve explains why prices often stay sticky.' },
        { tone: 'green',  label: 'Non-price competition',     sub: 'Branding, loyalty schemes, R&D, advertising. Where price competition is dangerous, oligopolists fight elsewhere.' }
      ],
      body: 'An <strong>oligopoly</strong> exists when a small number of large firms dominate a market. Key characteristics:<br><br>• <strong>Few dominant firms:</strong> measured by concentration ratio – e.g., CR4 (four-firm concentration ratio) above 60% typically indicates oligopoly<br>• <strong>High barriers to entry:</strong> scale economies, sunk costs, brand loyalty, and network effects protect incumbents<br>• <strong>Interdependence:</strong> each firm\'s decisions affect rivals – and each firm knows this. Rivals\' reactions must be anticipated.<br>• <strong>Product differentiation possible:</strong> oligopolists may sell homogeneous (petrol, steel) or differentiated (cars, smartphones) products<br>• <strong>Non-price competition:</strong> advertising, branding, loyalty schemes, and product development are primary competitive tools<br><br><strong>Examples:</strong> UK supermarkets (Tesco, Sainsbury\'s, Asda, Morrisons), smartphones (Apple, Samsung), banking (big four), energy (big six historically), airlines.',
      keyTerms: [
        { term: 'Oligopoly', def: 'A market dominated by a few large firms – each is large enough that its decisions affect rivals and vice versa.' },
        { term: 'Concentration ratio', def: 'The combined market share of the largest N firms. CR4 > 60% typically indicates oligopoly.' },
        { term: 'Strategic interdependence', def: 'Firms must consider rivals\' reactions when making pricing and output decisions – cannot optimise independently.' }
      ],
      examEdge: 'The four-firm concentration ratio (CR4) is the standard measure. UK supermarket CR4 ≈ 70% (Tesco, Sainsbury\'s, Asda, Morrisons). UK banking CR5 ≈ 80%. Smartphone OS: Apple/Google duopoly ≈ 99%. These real figures demonstrate oligopoly\'s dominance in modern economies. The Herfindahl-Hirschman Index (HHI) is an alternative measure used by competition authorities – sum of squared market shares. HHI above 2,500 indicates high concentration.'
    },
    {
      id: 'oligopoly_2',
      template: 'framing',
      title: 'Strategic Interdependence',
      body: '<strong>Strategic interdependence</strong> is the defining feature of oligopoly: each firm\'s optimal decision depends on what rivals are expected to do.<br><br>This creates fundamental uncertainty: unlike perfect competition (where firms are price-takers) or monopoly (where firms face no rivals), oligopolists must form expectations about rivals\' behaviour.<br><br><strong>Two key questions every oligopolist faces:</strong><br>• If I <strong>raise</strong> my price, will rivals follow (maintaining relative market shares) or hold their price (undercutting me)?<br>• If I <strong>cut</strong> my price, will rivals match the cut (eliminating my sales gain) or hold their price (letting me gain market share)?<br><br>Different assumptions about rivals\' reactions generate very different equilibrium outcomes – from price wars to tacit collusion. This uncertainty makes oligopoly the hardest market structure to model and the most realistic.',
      keyTerms: [
        { term: 'Game theory', def: 'The study of strategic decision-making where outcomes depend on the choices of multiple players – applied to oligopoly behaviour.' },
        { term: 'Reaction function', def: 'Describes a firm\'s optimal response to every possible action by a rival – the foundation of oligopoly strategy.' },
        { term: 'Price war', def: 'Competitive cycle of price cutting as each firm responds to rivals\' price cuts – can result in prices near MC.' }
      ],
      examEdge: 'Strategic interdependence explains why oligopoly generates such a wide range of outcomes. The same market structure can produce: intense price competition (airline fuel surcharges); price rigidity (petrol retail); tacit collusion (banking fees); non-price competition (supermarket loyalty schemes). The specific outcome depends on history, cost structure, frequency of interaction, and regulatory environment – not just market structure alone.'
    },
    {
      id: 'oligopoly_3',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'The Kinked Demand Curve Model',
      lede: 'Sweezy (1939) explains oligopoly price rigidity by modelling asymmetric rival reactions: rivals match price cuts but ignore price rises.',
      diagramKey: 'kinkedDemandInteractive',
      steps: [
        {
          key: 'base',
          label: 'Price rise → elastic',
          text: 'If a firm RAISES its price above the current price P*, rivals do NOT follow – they hold their own prices steady to grab market share. The firm loses many customers quickly. → Demand is <strong>ELASTIC above P*</strong>: small price rise causes a large quantity fall.'
        },
        {
          key: 'extension',
          label: 'Price cut → inelastic',
          text: 'If the firm CUTS its price below P*, rivals DO match the cut – they fear losing market share if they don\'t. The firm gains few new customers (everyone has cut). → Demand is <strong>INELASTIC below P*</strong>: even a big cut produces only a small quantity gain. Combining both reactions gives a <strong>kinked demand curve</strong> at P*.'
        },
        {
          key: 'shift',
          label: 'MR gap at Q*',
          text: 'Derive MR from each segment separately. MR₁ (from elastic D₁) is gentle; MR₂ (from inelastic D₂) is much steeper and starts well below where MR₁ ended. The result: MR has a <strong>vertical discontinuity (gap)</strong> at the kink quantity Q*. MR jumps downward as output crosses Q*.'
        },
        {
          key: 'types-of-efficiency',
          label: 'Price rigidity',
          text: 'Firms set MR = MC. As long as MC passes through the vertical MR gap, profit-maximising output stays at Q* and the price stays at P*. <strong>Moderate cost shocks (dashed MC shifts) do not change the price</strong> – they still cross MR inside the gap. This explains why oligopoly prices are sticky even when input costs fluctuate.'
        }
      ],
      examEdge: 'The vertical gap in MR is the key analytical point. Cost shocks that shift MC within this gap leave price unchanged – explaining why oligopoly prices are "sticky" in practice. Petrol retailers: wholesale costs fluctuate with oil prices but retail prices often remain fixed for extended periods. Note the limitation: the model assumes asymmetric rival reactions but does not explain HOW the current price P* was established in the first place.'
    },
    {
      id: 'oligopoly_4',
      template: 'paired',
      title: 'Kinked Demand: Strengths and Limitations',
      left: {
        label: 'Strengths of the model',
        points: [
          'Explains price rigidity observed in many oligopolistic markets',
          'Captures asymmetric rival reactions in an intuitive way',
          'Shows why oligopolists prefer non-price competition to price changes',
          'Explains the "wait and see" approach of oligopolists to cost changes',
          'Real-world evidence: petrol prices, supermarket price matching, airline fares'
        ]
      },
      right: {
        label: 'Limitations/criticisms',
        points: [
          'Does not explain how the initial price P* is determined – only why it is sticky once set',
          'Assumes specific rival reactions (follow cuts, ignore rises) – this asymmetry is not always observed',
          'Stigler (1947) found little empirical evidence for price rigidity in US industries',
          'Cannot explain price wars or competitive price cutting – model predicts stability only',
          'Game theory provides more rigorous analysis of strategic interaction'
        ]
      },
      examEdge: 'The kinked demand model is frequently criticised for its internal inconsistency: it assumes rivals match price cuts but not price rises, without explaining why. In practice, rivals might match price rises (if they want higher industry profits). The model is a useful pedagogical device for understanding price rigidity but is not a complete theory of oligopoly behaviour. Game theory (prisoner\'s dilemma, Nash equilibrium) provides a more rigorous framework.'
    },
    {
      id: 'oligopoly_5',
      template: 'framing',
      title: 'Non-Price Competition in Oligopoly',
      body: 'Oligopolists prefer <strong>non-price competition</strong> because:<br>• Price cuts invite retaliation → price war → all firms worse off<br>• Price rises lose market share to rivals who do not follow<br>• Strategic interdependence makes price competition high-risk<br><br><strong>Forms of non-price competition:</strong><br>• <strong>Advertising:</strong> supermarkets, telecoms, and banks spend billions on brand building. UK advertising market: £35bn+ annually<br>• <strong>Product development:</strong> Apple\'s annual iPhone releases; car manufacturers\' model refreshes<br>• <strong>Loyalty schemes:</strong> Tesco Clubcard, Nectar, Avios – lock in customers and provide pricing data<br>• <strong>After-sales service:</strong> warranty length, customer support quality<br>• <strong>Bundling:</strong> telecom triple-play (broadband + TV + phone), financial services packages<br><br>Non-price competition can be beneficial (drives product quality) or wasteful (advertising arms races where all firms spend equally, none gains)',
      keyTerms: [
        { term: 'Non-price competition', def: 'Competing through advertising, branding, product quality, and service rather than through price cuts.' },
        { term: 'Advertising arms race', def: 'All oligopolists increase advertising spending in response to rivals, resulting in higher costs for all with no net market share gain.' },
        { term: 'Bundling', def: 'Selling products together as a package – reduces competitive exposure by making it harder for rivals to cherry-pick segments.' }
      ],
      examEdge: 'The advertising arms race is an important welfare argument against oligopoly: if all supermarkets spend £500m each on advertising and none gains net market share, this spending is pure waste from a social welfare perspective. The resources (labour, media time) could produce real goods instead. However, advertising may provide consumer information (reducing search costs) and fund content creation – so the welfare verdict is not straightforwardly negative.'
    },
    {
      id: 'oligopoly_6',
      template: 'diagnose',
      title: 'The Spectrum: Competition to Collusion',
      intro: 'Oligopoly outcomes span a spectrum from competitive behaviour to collusion – the position depends on market conditions and firm interactions.',
      rows: [
        { label: 'Behaviour type', colA: 'Competitive oligopoly', colB: 'Collusive oligopoly' },
        { label: 'Description', colA: 'Firms compete aggressively on price and/or quality. Rivals do not coordinate. Price wars possible. May approach competitive outcome if competition is fierce.', colB: 'Firms coordinate (explicitly or tacitly) to raise prices and restrict output. Behave collectively as a monopolist. Higher prices, lower output than competitive case.' },
        { label: 'Welfare effects', colA: 'Better for consumers: lower prices, more output. Price may approach MC in extreme cases (Bertrand competition with identical products).', colB: 'Worse for consumers: monopoly-like prices, deadweight welfare loss. Illegal if explicit (cartel). Tacit collusion difficult to prosecute.' }
      ],
      footer: 'Cournot competition (compete on quantity) and Bertrand competition (compete on price) are the two standard formal oligopoly models. Bertrand competition with homogeneous products drives price to MC (competitive outcome). Cournot competition results in price above MC but below monopoly price – an intermediate outcome.',
      examEdge: 'Bertrand paradox: with identical products and price competition, two firms are sufficient to achieve the competitive outcome (P = MC). This shows that market structure (number of firms) is not enough to predict outcomes – the form of competition matters. Two airlines competing identically on the same route → fierce price competition. Two airlines differentiating by service → non-price competition, higher prices. Same structure, different outcomes.'
    },
    {
      id: 'oligopoly_7',
      template: 'framing',
      title: 'Oligopoly and Market Performance',
      body: 'Evaluating oligopoly requires balancing static efficiency losses against potential dynamic benefits:<br><br><strong>Static efficiency:</strong><br>• Oligopolists typically set P > MC → allocative inefficiency<br>• High market power → X-inefficiency possible (management slack)<br>• Non-price competition may raise AC (advertising costs)<br>• Consumer surplus lower than competitive outcome<br><br><strong>Dynamic efficiency:</strong><br>• Supernormal profits fund substantial R&D – pharmaceutical, tech, and automotive oligopolists invest heavily<br>• Scale economies enable investment that smaller competitive firms could not afford<br>• Schumpeterian argument: market power and innovation incentive go together<br><br><strong>Overall assessment:</strong> oligopoly\'s welfare effects are context-dependent. Competitive oligopoly (price rivalry) is close to competitive outcome. Collusive oligopoly mimics monopoly. The policy response – blocking mergers, investigating cartels, regulating behaviour – depends on which tendency dominates.',
      keyTerms: [
        { term: 'Cournot equilibrium', def: 'Oligopoly equilibrium where firms simultaneously choose quantities, resulting in a price between monopoly and competitive levels.' },
        { term: 'First-mover advantage', def: 'In sequential games, the first firm to act (commit to price/quantity) can influence rivals\' reactions to its benefit.' },
        { term: 'Market performance', def: 'Assessment of a market across multiple criteria: price, output, efficiency, innovation, consumer welfare.' }
      ],
      examEdge: 'Essay on oligopoly welfare: acknowledge that the welfare verdict is not predetermined. Competitive oligopoly → near-competitive outcomes → broadly welfare-positive. Collusive oligopoly → monopoly-like outcomes → welfare-negative. The same structure (four large supermarkets) can produce price wars (2015–17 supermarket price war) or near-identical prices (petrol retailers). Competition policy must address behaviour, not just structure.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};
