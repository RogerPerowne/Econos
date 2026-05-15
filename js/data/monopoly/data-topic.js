window.ECONOS_TOPIC = {
  id: 'monopoly',
  topicNum: '3.8',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Monopoly',
  estTime: '7-9 minutes',
  goal: 'Lock in the monopoly model — sources of power, profit maximisation, welfare loss, and when monopoly may be beneficial.',
  intro: {
    heroKey: 'heroMarketPower',
    summary: 'A monopoly is a single supplier with no close substitutes. It is a price-maker that restricts output to raise price above marginal cost — creating a deadweight welfare loss. But monopoly can sometimes fund dynamic efficiency through R&D, and natural monopoly requires public intervention.',
    doInThis: 'Work through 7 cards covering the definition and sources of monopoly power, profit maximisation, welfare analysis, comparing monopoly to competition, natural monopoly, and evaluation.',
    outcomes: [
      'Define monopoly and identify the main sources of monopoly power',
      'Draw the monopoly profit-maximisation diagram and identify the profit and DWL areas',
      'Compare monopoly to perfect competition on price, output, and welfare',
      'Evaluate the case for and against monopoly including Schumpeterian arguments'
    ],
    tip: 'Monopoly: MR = MC (profit max). Price: read off demand curve at Q*. P > MC → allocative inefficiency. DWL triangle between competitive and monopoly equilibrium. Compare to PC outcome where P = MC.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'monopoly_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Monopoly: the big picture',
      lede: 'A single seller behind barriers. Restricts output, lifts price, captures surplus — but the story is not all bad.',
      branches: [
        { tone: 'blue',   label: 'Price-maker, not taker',     sub: 'Faces the market demand curve. MR lies below AR — selling more requires cutting price on all units.' },
        { tone: 'amber',  label: 'Output restricted, P > MC',  sub: 'Profit max at MR = MC produces less than the competitive level. The mark-up is the source of welfare loss.' },
        { tone: 'rose',   label: 'Deadweight loss',            sub: 'A triangle of surplus destroyed by under-supply. Plus a transfer of consumer surplus into monopoly profit.' },
        { tone: 'purple', label: 'The Schumpeter defence',     sub: 'Supernormal profits may fund R&D and innovation. Natural monopolies can serve markets at lower cost than rivals could.' }
      ],
      body: 'A <strong>pure monopoly</strong> is a market with a single seller producing a good with no close substitutes. In practice, monopoly power exists on a spectrum — the CMA defines a firm as having "monopoly" position if it has over 25% market share.<br><br>Key features:<br>• Price-maker (not price-taker): faces the downward-sloping market demand curve — must lower price to sell more<br>• MR < AR: to sell one more unit, must reduce price on all existing units → MR < P<br>• Barriers to entry: prevent competition from eroding supernormal profit<br>• Profit maximisation: produce where MR = MC; charge price from demand curve at that quantity',
      keyTerms: [
        { term: 'Pure monopoly', def: 'Single seller; no close substitutes. In practice, CMA uses 25% market share as indicative threshold.' },
        { term: 'Price-maker', def: 'A firm that faces a downward-sloping demand curve — can set price (but faces a trade-off with quantity).' },
        { term: 'MR < AR', def: 'Monopolist must lower price to sell more — each additional sale reduces revenue on existing sales, so MR < price.' }
      ],
      examEdge: 'The difference between price-taker (P = MR) and price-maker (MR < P) is fundamental. Price-takers produce where P = MC; price-makers produce where MR = MC but charge P > MC. This gap (P − MC) is the source of monopoly\'s allocative inefficiency — and is the focus of all welfare analysis.'
    },
    {
      id: 'monopoly_2',
      template: 'mechanisms',
      title: 'The Monopoly Diagram',
      intro: 'The monopoly diagram is the most important in Theme 3 — every market structure essay needs it or a variant of it.',
      steps: [
        { label: 'Draw the framework', text: 'P axis vertical; Q axis horizontal. Draw downward-sloping demand (AR) curve. Draw MR curve: same y-intercept, twice the slope (for linear demand). Draw MC curve (U-shaped or typically upward-sloping for simplicity). Draw AC curve (U-shaped, above MC, MC crosses at min AC).' },
        { label: 'Find profit-maximising output', text: 'Q* where MR = MC. Draw vertical line up from Q* to the demand curve.' },
        { label: 'Find price', text: 'P* is read off the demand (AR) curve at Q*. Mark this on the price axis. P* > MC at Q*.' },
        { label: 'Identify profit and DWL', text: 'Profit rectangle: (P* − AC at Q*) \xd7 Q*. Shade above AC, below P*. DWL triangle: between competitive output (where MC = Demand) and monopoly output Q*, bounded by demand and MC.' }
      ],
      examEdge: 'Common errors: (1) MR curve not drawn — always include it. (2) Profit read off incorrectly — AC at Q*, not at AC\'s minimum. (3) DWL triangle wrong — it is between Q* and the competitive quantity where MC intersects demand. Mark the competitive output point explicitly for full marks.'
    },
    {
      id: 'monopoly_3',
      template: 'framing',
      title: 'Sources of Monopoly Power',
      body: 'Monopoly power is maintained by <strong>barriers to entry</strong> — obstacles that prevent new firms from competing away supernormal profits. Key sources:<br><br>• <strong>Natural barriers:</strong> economies of scale (natural monopoly); control of essential resources (DeBeers diamonds); high sunk costs (aircraft manufacturing).<br>• <strong>Legal barriers:</strong> patents (20-year protection); copyright; operating licences (aviation, banking). Explicitly created by government to incentivise innovation.<br>• <strong>Strategic barriers:</strong> predatory pricing (price below cost to drive rivals out); limit pricing (set price just below rivals\' average cost to deter entry); brand proliferation; exclusive dealing contracts.<br>• <strong>Incumbency advantages:</strong> network effects (Facebook, WhatsApp — value rises with users); switching costs (consumers locked in by data/habits).',
      keyTerms: [
        { term: 'Barriers to entry', def: 'Obstacles preventing new firms from entering a profitable market — sustain supernormal profits in long run.' },
        { term: 'Network effects', def: 'Value of the product rises as more people use it — creates self-reinforcing monopoly (social media, payments networks).' },
        { term: 'Predatory pricing', def: 'Setting price below cost to drive out rivals — illegal if used to acquire or maintain monopoly position.' }
      ],
      examEdge: 'Network effects are the most important source of modern monopoly power. WhatsApp: all your contacts are on it → switching to a rival costs you access to your social network (switching cost). Facebook, Instagram, TikTok, Google Search all benefit from network effects → entrenched market positions that even better products struggle to dislodge. This is why Big Tech attracts antitrust scrutiny.'
    },
    {
      id: 'monopoly_4',
      template: 'framing',
      title: 'Welfare Analysis: Monopoly vs Competition',
      body: 'Comparing monopoly to perfect competition reveals the welfare cost of monopoly power:<br><br>Under perfect competition: P = MC = AC at efficient output Q_c<br>Under monopoly: P_m > MC, Q_m < Q_c<br><br><strong>Welfare effects:</strong><br>• Consumer surplus falls: higher price and lower quantity → large CS loss<br>• Producer surplus rises: supernormal profit is part of consumer surplus transferred to producer<br>• Deadweight welfare loss: the triangle between Q_m and Q_c bounded by demand and MC — neither consumer nor producer gets this surplus; it is destroyed<br>• Net social welfare: competition CS > monopoly CS + monopoly PS (because of DWL)',
      keyTerms: [
        { term: 'Deadweight loss from monopoly', def: 'Triangle of welfare destroyed by monopoly restriction of output — neither consumer nor producer receives this potential surplus.' },
        { term: 'Consumer surplus transfer', def: 'Part of the consumer surplus reduction is transferred to the monopolist as supernormal profit — redistribution, not destruction.' },
        { term: 'Net welfare loss', def: 'The DWL triangle — unambiguous welfare reduction from monopoly. The CS-to-PS transfer is distributional.' }
      ],
      examEdge: 'The distinction between CS transferred to monopolist (redistribution) and CS destroyed (DWL) is a sophisticated analytical point. Economists are concerned primarily about the DWL (efficiency loss); politicians and consumers are also concerned about the transfer (equity/fairness). Both arguments justify competition policy, but for different reasons.'
    },
    {
      id: 'monopoly_5',
      template: 'paired',
      title: 'Case For and Against Monopoly',
      left: {
        label: 'Case AGAINST monopoly',
        points: [
          'P > MC → allocative inefficiency → DWL',
          'P > minimum AC → may not be productively efficient',
          'X-inefficiency: no competitive pressure → management slack',
          'Transfer of CS to producer → equity concern',
          'Innovation may be stifled: monopoly can rest on market position rather than innovating'
        ]
      },
      right: {
        label: 'Case FOR monopoly (or tolerance)',
        points: [
          'Natural monopoly: one firm more efficient than competition (lower AC at scale)',
          'Schumpeterian: supernormal profit funds R&D → dynamic efficiency (pharmaceuticals, tech)',
          'Global competitiveness: domestic "champion" may need scale to compete internationally',
          'Cross-subsidy: profitable core subsidises loss-making socially valuable services (Royal Mail universal service)',
          'Short-run losses may be tolerated for long-run consumer benefit (Amazon building logistics network)'
        ]
      },
      examEdge: 'The strongest "case for" monopoly is natural monopoly (economies of scale) and Schumpeterian dynamics (R&D). The strongest "case against" is static welfare loss (DWL) and X-inefficiency. Top essays weigh these against each other with reference to the specific industry — pharmaceutical (strong case for, patent) vs water (natural monopoly but regulated, not justified in creating excess profit).'
    },
    {
      id: 'monopoly_6',
      template: 'framing',
      title: 'Natural Monopoly and Regulation',
      body: '<strong>Natural monopoly</strong> occurs when the market can be served most cheaply by a single firm (LRAC still falling at the market output level). Breaking it up into competing firms would raise average costs for all — each small firm on the high part of its LRAC curve.<br><br><strong>Regulation options:</strong><br>• <em>Average cost pricing:</em> force P = AC → normal profit; more output than profit-max. Not perfectly allocatively efficient (P > MC) but achieves normal profit.<br>• <em>Marginal cost pricing:</em> force P = MC → allocatively efficient but may be below AC → loss → requires public subsidy to sustain.<br>• <em>RPI-X price cap:</em> cap annual price rises → maintains profit incentive while limiting exploitation.<br>• <em>Nationalisation:</em> public ownership; price set by government at social optimum.',
      keyTerms: [
        { term: 'Average cost pricing', def: 'Regulate P = AC → zero economic profit; more output than profit-max; reduces (but does not eliminate) allocative inefficiency.' },
        { term: 'Marginal cost pricing', def: 'Regulate P = MC → allocatively efficient; may require subsidy if MC < AC (decreasing costs industry).' },
        { term: 'Two-part tariff', def: 'Fixed connection charge (recovers FC) plus usage charge at MC → achieves both cost recovery and allocative efficiency.' }
      ],
      examEdge: 'The two-part tariff is an elegant regulatory solution: charge a standing charge (recovers fixed costs) then P = MC for each unit. Achieves both allocative efficiency AND cost recovery. Examples: electricity/gas standing charges + unit rates; mobile phone plans (fixed monthly + per-call rates). Mention this as a solution to the natural monopoly dilemma.'
    },
    {
      id: 'monopoly_7',
      template: 'framing',
      title: 'Competition Policy and Monopoly',
      body: '<strong>UK competition policy</strong> under the Competition and Markets Authority (CMA):<br><br>• Merger control: block/approve mergers that substantially reduce competition (25% market share threshold)<br>• Market investigations: investigate markets that appear not to be working well (e.g. energy market, auditing, funeral services)<br>• Anticompetitive practices: investigate predatory pricing, exclusive dealing, market sharing agreements<br>• Enforcement: fines up to 10% of global revenue; require divestiture; impose behavioural remedies<br><br><strong>Effectiveness:</strong> CMA blocked Microsoft/Activision (2023, reversed on appeal); Google/Fitbit allowed with conditions; Meta/Giphy forced divestiture. Competition policy has become more active post-2020 in addressing tech platform power.',
      keyTerms: [
        { term: 'CMA', def: 'Competition and Markets Authority — UK regulator for mergers, markets, and anticompetitive practices.' },
        { term: 'Structural remedy', def: 'Require divestiture of assets or business units — restores competition by changing market structure.' },
        { term: 'Behavioural remedy', def: 'Impose conditions on firm behaviour (e.g. must supply rivals on fair terms) — preserves market structure but constrains conduct.' }
      ],
      examEdge: 'Structural vs behavioural remedies: structural (break up the firm, force divestiture) is cleaner and more durable — competition is embedded in market structure. Behavioural (conditions on conduct) is less disruptive but requires ongoing monitoring and is vulnerable to regulatory capture. CMA generally prefers structural remedies where possible. This distinction matters for essays on competition policy.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }
  ]
};
