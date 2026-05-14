window.ECONOS_TOPIC = {
  id: 'monopoly_vs_competition',
  topicNum: '3.10',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Monopoly vs Competition',
  estTime: '7-9 minutes',
  goal: 'Lock in the systematic welfare comparison between monopoly and perfect competition, the natural monopoly case, and how competition policy responds.',
  intro: {
    heroKey: 'business',
    summary: 'The welfare comparison between monopoly and perfect competition is the central evaluation question in market structure analysis. Understanding the trade-offs — static vs dynamic efficiency, scale economies vs market power — is essential for top-band essay answers.',
    doInThis: 'Work through 7 cards covering the formal welfare comparison, natural monopoly justification, static vs dynamic efficiency trade-off, consumer harm evidence, merger policy, and the role of contestability in limiting monopoly abuse.',
    outcomes: [
      'Compare price, output, and welfare between monopoly and perfect competition using diagrams',
      'Explain the three circumstances where monopoly may be preferable to competition',
      'Apply contestability theory to show when monopoly behaviour approximates competitive outcomes',
      'Evaluate the case for competition policy intervention and its limitations'
    ],
    tip: 'Monopoly: higher P, lower Q, DWL, possible X-inefficiency. BUT: may have better dynamic efficiency (R&D), natural cost advantages (scale), or be constrained by contestability (threat of entry). Never be absolute in either direction.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'monopoly_vs_competition_1',
      template: 'diagnose',
      title: 'Static Welfare Comparison',
      intro: 'Comparing monopoly and perfect competition on static efficiency criteria using the same cost conditions.',
      rows: [
        { label: 'Criterion', colA: 'Perfect competition', colB: 'Monopoly' },
        { label: 'Price', colA: 'P = MC = minimum AC. Lowest possible price (at long-run equilibrium).', colB: 'P > MC. Price above competitive level — monopoly mark-up.' },
        { label: 'Output', colA: 'Q_c: socially optimal output where P = MC = AC.', colB: 'Q_m < Q_c: restricted output to raise price. Fewer goods produced.' }
      ],
      footer: 'Consumer surplus: higher under perfect competition (lower price, higher quantity). Producer surplus: monopolist earns supernormal profit; competitive firms earn only normal profit. Deadweight welfare loss: zero under competition; positive triangle under monopoly (the "welfare cost of monopoly"). Total social welfare: greater under perfect competition by the size of the DWL triangle.',
      examEdge: 'The DWL from monopoly is the definitive welfare measure. In practice, the size matters: if the demand curve is very inelastic and MC is flat, the DWL triangle is relatively small (price rises a lot but quantity falls little). If demand is elastic, DWL is larger. Competition policy is most warranted where DWL is large relative to the scale of the market.'
    },
    {
      id: 'monopoly_vs_competition_2',
      template: 'framing',
      title: 'When Monopoly May Be Preferable: Natural Monopoly',
      body: 'Natural monopoly: LRAC still falling at the scale needed to serve the whole market. Breaking the natural monopoly into competing firms would raise average costs — each small firm operates on the high part of its LRAC curve.\n\n<strong>Comparison:</strong> a single regulated monopoly producing at lower AC (larger scale) can supply at lower regulated price than two competing firms each at higher AC. Competition destroys efficiency.\n\n<strong>Policy implication:</strong> regulate the natural monopoly (RPI-X price cap, access regulation) rather than breaking it up. The goal is to capture scale economies while preventing exploitation.\n\n<strong>UK examples:</strong> water distribution, electricity grid (National Grid), gas pipes, rail infrastructure (Network Rail), BT Openreach (fibre network).',
      keyTerms: [
        { term: 'Natural monopoly cost advantage', def: 'Single firm can serve the market at lower average cost than multiple competing firms — due to economies of scale not yet exhausted.' },
        { term: 'Cost-saving monopoly', def: 'A monopoly where the scale advantages generate sufficient savings to serve consumers at lower price than fragmented competition.' },
        { term: 'Access regulation', def: 'Requiring the natural monopoly infrastructure owner to provide access to rivals at regulated prices — e.g. BT Openreach must supply rival ISPs.' }
      ],
      examEdge: 'Natural monopoly is the strongest justification for monopoly: in this case, monopoly is not an aberration but the efficient market structure. Policy aim: capture scale economies (don\'t break up) while preventing exploitation (regulate price and access). This is distinct from regulatory challenges facing non-natural monopolies where competitive market structure is feasible.'
    },
    {
      id: 'monopoly_vs_competition_3',
      template: 'framing',
      title: 'When Monopoly May Be Preferable: Dynamic Efficiency',
      body: 'Schumpeter\'s hypothesis: monopoly profits are the incentive and the funding mechanism for innovation. Three arguments:<br><br>1. <strong>R&D funding:</strong> supernormal profit → retained earnings → invest in research. Competitive firms earn only normal profit → less available for R&D.\n2. <strong>Scale of R&D:</strong> large firms can spread R&D risk across multiple projects; small competitive firms cannot afford high-risk research programmes.\n3. <strong>First-mover advantage:</strong> a firm that innovates becomes a monopolist until imitated — this temporary monopoly is the reward incentivising the initial innovation.\n\n<strong>Evidence:</strong> mixed. Large firms do more R&D in absolute terms. But some evidence that smaller firms in competitive markets innovate more per pound spent. Relationship is industry-specific.',
      keyTerms: [
        { term: 'Schumpeter\'s hypothesis', def: 'Market power and supernormal profit are prerequisites for significant innovation — competitive markets may innovate less than oligopolies.' },
        { term: 'Inverted-U hypothesis', def: 'Innovation is highest at intermediate market concentration — too competitive (no profit for R&D) or too concentrated (no competitive pressure) both reduce innovation.' },
        { term: 'First-mover advantage', def: 'Early entrant in a new market gains temporary monopoly — the prospect of this monopoly incentivises the innovation investment.' }
      ],
      examEdge: 'The inverted-U hypothesis (Aghion et al.) is the empirically supported nuance: innovation peaks at intermediate concentration levels. Very competitive markets (no profit for R&D) and very concentrated markets (no competitive pressure) both underperform. Oligopoly with some competitive pressure may be optimal for dynamic efficiency — a sophisticated evaluation point.'
    },
    {
      id: 'monopoly_vs_competition_4',
      template: 'framing',
      title: 'Contestability: The Third Way',
      body: '<strong>Contestability theory</strong> (Baumol, 1982): a market is contestable if entry and exit are free — even a monopolist must price competitively if the threat of entry is credible. In a perfectly contestable market, a monopolist cannot sustain supernormal profit because any excess would attract entry.\n\nImplication: market structure (number of firms) matters less than the ease of entry. A monopolist in a contestable market behaves competitively. An oligopoly in a non-contestable market may be more exploitative than a monopoly in a contestable one.\n\nKey condition: <strong>sunk costs must be zero</strong> — if entry is costless and exit is costless, the threat of entry is credible even without actual entry.',
      keyTerms: [
        { term: 'Contestable market', def: 'A market where entry and exit are free — even a single firm must price competitively due to the threat of hit-and-run entry.' },
        { term: 'Hit-and-run entry', def: 'Enter a profitable market, earn supernormal profit, exit before retaliation. Only possible if sunk costs are zero.' },
        { term: 'Potential competition', def: 'The threat of new firms entering a market — constrains the behaviour of incumbents even before entry actually occurs.' }
      ],
      examEdge: 'Airline markets are the classic contestability example: aircraft are mobile (low sunk costs — can be redeployed to different routes), entry on new routes is straightforward → a monopoly airline on a route must price near AC or a rival will enter. This is why route pricing (rather than simply firm concentration) matters for air travel competition policy.'
    },
    {
      id: 'monopoly_vs_competition_5',
      template: 'cause',
      title: 'Evidence on Monopoly Harm',
      causes: [
        { head: 'Price above competitive level', body: 'Healthcare in the US (no universal system + lack of competitive insurance markets): healthcare prices 2-3x higher than comparable OECD countries for equivalent outcomes. Pharmaceutical pricing: branded drugs 10-100x more expensive than generics with identical active ingredients.' },
        { head: 'Quality and innovation stagnation', body: 'UK rail: fragmented franchise structure has delivered poor punctuality, high fares, and limited innovation. Multiple monopoly franchises → no competition on routes → consumer capture. Water companies: persistent underinvestment in infrastructure despite monopoly pricing.' },
        { head: 'Consumer harm in digital markets', body: 'Google search: 92% market share → search ranking manipulated to favour Google\'s own products (CMA and EU findings). Meta: acquisition of Instagram and WhatsApp eliminated future competition rather than creating synergies. Amazon: uses marketplace data to clone best-selling third-party products.' }
      ],
      examEdge: 'UK CMA Market Studies (regular reports on markets not working well) provide real-world evidence of monopoly harm. Recent studies: mortgages, funeral services, loyalty card fuel pricing, investment consultancy, digital platforms. Citing a specific CMA study in an essay demonstrates awareness of real-world application and earns contextual marks.'
    },
    {
      id: 'monopoly_vs_competition_6',
      template: 'mechanisms',
      title: 'Competition Policy Tools',
      intro: 'The UK competition policy framework has three main tools, each targeting different aspects of market power.',
      steps: [
        { label: 'Merger control (ex-ante)', text: 'CMA reviews proposed mergers above turnover/market share thresholds. Test: does the merger substantially lessen competition? Remedies: block (Microsoft/Activision CMA block, later reversed); require divestiture; impose conditions.' },
        { label: 'Market investigations', text: 'CMA investigates markets not working well even without a specific merger. Example: UK retail fuel market (2023) — found margins rose post-COVID; required transparency measures. Can impose sweeping structural or behavioural remedies.' },
        { label: 'Antitrust enforcement (ex-post)', text: 'Investigate abusive conduct by dominant firms: predatory pricing, tying, refusal to supply, excessive pricing. Fines up to 10% of global revenue. UK follows EU precedent but independently since Brexit.' },
        { label: 'Digital Markets Unit', text: 'New CMA unit (2021) with specific focus on tech platform power. Strategic Market Status designation → binding codes of conduct for Google, Apple, Meta, Amazon. Proactive regulation rather than reactive enforcement.' }
      ],
      examEdge: 'The shift from reactive to proactive competition policy (CMA Digital Markets Unit) is a significant evolution. Traditional competition law reacts to harm after it occurs. In digital markets, network effects and data accumulation can create irreversible dominance before traditional enforcement can act — hence the need for ex-ante regulation (behaviour codes) rather than just ex-post fines.'
    },
    {
      id: 'monopoly_vs_competition_7',
      template: 'paired',
      title: 'Competition Policy: Effectiveness Evaluation',
      left: {
        label: 'Why competition policy works',
        points: [
          'Deterrence: fines and reputational risk deter anticompetitive behaviour',
          'Market investigations have produced significant structural remedies (electricity market reform)',
          'Merger control blocks harmful concentrations (water, utilities)',
          'CMA fines are large enough to change behaviour (cartels → 10% of global turnover)',
          'International coordination (CMA + EC + FTC + DOJ) increasing for global markets'
        ]
      },
      right: {
        label: 'Limitations and failures',
        points: [
          'Information asymmetry: firms know their costs and strategies; regulators rely on submitted evidence',
          'Regulatory capture: revolving door between CMA/regulators and industry',
          'Slow: investigations take years; tech markets evolve in months',
          'Global platforms evade national regulators — international coordination is slow',
          'Remedies imperfect: behavioural conditions are hard to monitor; structural remedies may destroy value'
        ]
      },
      examEdge: 'Google Shopping case (EU, 2017): fined €2.4bn for favouring own comparison service in search results. Google appealed for 5 years while continuing the behaviour. By the time remedy took effect, market had moved on. Illustrates the speed problem: competition enforcement is too slow for fast-moving digital markets — hence CMA\'s proactive ex-ante approach.'
    }
  ]
};
