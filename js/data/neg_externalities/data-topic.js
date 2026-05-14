window.ECONOS_TOPIC = {
  id: 'neg_externalities',
  topicNum: '1.12',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Negative Externalities',
  estTime: '7-9 minutes',
  goal: 'Lock in the externality framework — MSC vs MPC, deadweight welfare loss, and how to draw and evaluate the negative externality diagram.',
  intro: {
    heroKey: 'environment',
    summary: 'Negative externalities arise when production or consumption imposes costs on third parties not reflected in market prices. The result: the market overproduces relative to the socially optimal level, creating a welfare loss.',
    doInThis: 'Work through 7 cards covering the definition and types of negative externalities, the MSC/MPC diagram, welfare loss triangle, real-world examples, production vs consumption externalities, and policy responses.',
    outcomes: [
      'Define negative externality and distinguish production from consumption externalities',
      'Draw and interpret the negative production externality diagram with MSC above MPC',
      'Identify the market output, socially optimal output, and deadweight welfare loss',
      'Evaluate government policies to correct negative externalities'
    ],
    tip: 'Negative externality → MSC > MPC → market overproduces. Deadweight welfare loss = triangle between market output and socially optimal output. Government corrects via Pigouvian tax to shift MPC up to MSC.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'neg_externalities_1',
      template: 'framing',
      title: 'What Is a Negative Externality?',
      body: 'An <strong>externality</strong> occurs when a third party (not the buyer or seller) is affected by an economic transaction. A <strong>negative externality</strong> is an external cost — a cost imposed on third parties who receive no compensation.<br><br>Key terminology:<br>• <strong>Private cost (MPC):</strong> the cost borne by the producer or consumer directly.<br>• <strong>External cost (MEC):</strong> the cost borne by third parties not party to the transaction.<br>• <strong>Social cost (MSC):</strong> MSC = MPC + MEC — the total cost to society of producing one more unit.<br><br>When negative externalities exist, MSC > MPC. Market prices only reflect MPC, so the market overproduces — more output is produced than is socially optimal.',
      keyTerms: [
        { term: 'Negative externality', def: 'An external cost imposed on third parties as a result of economic activity — not reflected in market price.' },
        { term: 'MSC', def: 'Marginal Social Cost = MPC + MEC. The true cost to society of one more unit of output.' },
        { term: 'Overproduction', def: 'Market output exceeds socially optimal output because private costs understate social costs.' }
      ],
      examEdge: 'Always distinguish private cost from social cost. The market fails because prices reflect MPC, not MSC. If MPC = MSC (no externality), market is efficient. If MSC > MPC (negative externality), market overproduces by the amount between Q-market and Q-optimal. This logic must be explicit in any externality answer.'
    },
    {
      id: 'neg_externalities_2',
      template: 'mechanisms',
      title: 'The Negative Production Externality Diagram',
      intro: 'This is the most important diagram in market failure. Every element must be precisely labelled.',
      steps: [
        { label: 'Axes and curves', text: 'P on vertical axis, Q on horizontal. Draw downward-sloping demand curve (= MSB = MPB when no positive externality). Draw MPC (supply) upward-sloping. Draw MSC above MPC — the vertical gap between them is the marginal external cost (MEC).' },
        { label: 'Market equilibrium', text: 'Market produces where MPC = MSB (demand). Mark this Q-market and P-market. This is the free market output — too high.' },
        { label: 'Socially optimal output', text: 'Optimal output where MSC = MSB. Mark Q-optimal < Q-market and P-optimal > P-market. Society would be better off at this lower output level.' },
        { label: 'Deadweight welfare loss', text: 'Triangle between Q-optimal and Q-market, bounded above by MSC and below by MSB (demand). This represents the net welfare loss from overproduction.' }
      ],
      examEdge: 'Diagram technique: label MPC (supply), MSC (above it), demand = MSB, market equilibrium (Q-market, P-market), socially optimal point (Q-opt, P-opt), and shade the DWL triangle. Missing any of these loses marks. Draw the MSC as a parallel shift above MPC for a constant external cost.'
    },
    {
      id: 'neg_externalities_3',
      template: 'cause',
      title: 'Types of Negative Externalities',
      causes: [
        { head: 'Production externalities', body: 'Pollution from manufacturing: chemical plant discharges into river; power station CO2 emissions; noise from airport. The external cost falls on households, other firms, or the environment. Classic for the MSC > MPC diagram.' },
        { head: 'Consumption externalities', body: 'Negative effects from using a product: passive smoking (tobacco); traffic congestion (car use); noise from music events. The external cost arises from consumption, not production. Demand = MPB < MSB for positive externalities; here MSC ≠ MPC diagram adjusts — MPB > MSB.' },
        { head: 'Environmental damage', body: 'Carbon emissions, deforestation, overfishing — externalities that damage natural capital with long-run consequences. Characterised by stock externalities (accumulate over time) rather than flow externalities.' },
        { head: 'Global externalities', body: 'Climate change is a global externality — emissions in one country impose costs worldwide. No single government can internalise all costs; requires international cooperation (Paris Agreement, carbon trading schemes).' }
      ],
      examEdge: 'Distinguish production from consumption externalities in the diagram: production externality → MSC shifts above MPC (supply side). Consumption externality (negative) → MPB shifts below MSB (demand side — use this when the question involves consumer behaviour, not firm production).'
    },
    {
      id: 'neg_externalities_4',
      template: 'framing',
      title: 'Coase Theorem and Private Solutions',
      body: 'Ronald Coase (1960) argued that if property rights are well-defined and transaction costs are zero, private bargaining will internalise externalities without government intervention — regardless of who holds the property right.<br><br><strong>Example:</strong> Factory (polluter) and fishermen (victim). If fishermen have right to clean water: factory will compensate fishermen to permit some pollution, up to the point where marginal profit from pollution = marginal external cost. Efficient outcome reached privately.<br><br><strong>Limitation:</strong> Transaction costs are rarely zero. When many parties are affected (climate change), private bargaining is impossible. Public goods nature of the environment means Coasian solutions apply only to small numbers of identifiable parties.',
      keyTerms: [
        { term: 'Coase theorem', def: 'With well-defined property rights and zero transaction costs, private bargaining will internalise externalities efficiently.' },
        { term: 'Transaction costs', def: 'Costs of identifying parties, negotiating, and enforcing agreements — often too high for large-scale externalities.' },
        { term: 'Property rights', def: 'Legal rights over resources — Coase argued that clear property rights are sufficient for efficient externality resolution.' }
      ],
      examEdge: 'Coase is the strongest theoretical argument against government intervention for externalities — but its limitations (high transaction costs, many affected parties, global spillovers) explain why most externality corrections do require government action. Using Coase as an evaluation point in essays gains credit.'
    },
    {
      id: 'neg_externalities_5',
      template: 'cause',
      title: 'Government Policies to Correct Negative Externalities',
      causes: [
        { head: 'Pigouvian tax', body: 'Tax equal to the marginal external cost at the socially optimal output level. Raises MPC to equal MSC → market produces Q-optimal. Example: UK fuel duty, sugar tax. Advantage: uses price mechanism; raises revenue. Limitation: difficult to measure MEC accurately; may be regressive.' },
        { head: 'Cap-and-trade (emissions trading)', body: 'Set a total cap on emissions; issue tradeable permits. Firms can only emit within their permit allocation; buy extra permits from firms that reduce emissions cheaply. EU ETS example. Advantage: achieves environmental target efficiently; flexible. Limitation: permit price volatility; lobbying for free permits.' },
        { head: 'Regulation and legislation', body: 'Legal limits on pollution; mandatory standards (Euro emission standards); outright bans. Advantage: certain outcome if enforced. Limitation: "one size fits all"; compliance costs; regulatory capture risk.' },
        { head: 'State provision', body: 'Government takes over the externality-creating activity and forces socially optimal output. Nationalised industries can set output at Q-optimal. Limitation: government failure risk; information requirement.' }
      ],
      examEdge: 'Evaluation framework for Pigouvian taxes: (1) Is the MEC measurable? (2) Is demand sufficiently inelastic to achieve the output reduction? (3) What are the distributional consequences? (4) Risk of evasion/black markets. Use these four questions to structure evaluation paragraphs on any externality policy.'
    },
    {
      id: 'neg_externalities_6',
      template: 'diagnose',
      title: 'Case Study: Carbon Emissions',
      intro: 'Carbon emissions are the largest-scale negative externality — global, long-lasting, and politically contested.',
      rows: [
        { label: 'Feature', colA: 'Scale of externality', colB: 'Policy response' },
        { label: 'Detail', colA: 'Global public bad — emissions in any country affect all. MEC is enormous but disputed: social cost of carbon estimated at $51-$185/tonne CO2 (IPCC range). Stock externality — accumulates over centuries.', colB: 'Carbon taxes (UK: ~\xa350/tonne ETS price). EU ETS: cap-and-trade. Paris Agreement: voluntary national targets. No binding global mechanism → free rider problem remains.' },
        { label: 'Key tension', colA: 'Measuring MEC requires long-run discounted projections — contested by economists. Lower discount rate (Stern) → higher MEC; higher discount rate (Nordhaus) → lower MEC.', colB: 'Unilateral carbon pricing risks "carbon leakage" — firms relocate to lower-cost jurisdictions. EU CBAM (Carbon Border Adjustment Mechanism) attempts to address this.' }
      ],
      footer: 'Carbon is the ultimate test of externality policy: the polluter is everyone (consumption externality); the victim is everyone (global); and the solution requires unprecedented international coordination.',
      examEdge: 'Climate change demonstrates both the limits of market solutions (Coase impossible at global scale) and the limits of government solutions (free rider problem across nations). Top essays acknowledge this double failure and evaluate the feasibility of international agreements.'
    },
    {
      id: 'neg_externalities_7',
      template: 'paired',
      title: 'Taxes vs Regulation: Evaluation',
      left: {
        label: 'Taxes (Pigouvian)',
        points: [
          'Allows firms to choose how to reduce pollution — minimises total compliance cost',
          'Generates government revenue for green investment',
          'Dynamic efficiency: firms continually incentivised to innovate to reduce tax burden',
          'Limitation: requires accurate measurement of MEC (difficult)',
          'Limitation: may be regressive — energy taxes hit low-income households hardest'
        ]
      },
      right: {
        label: 'Regulation (command-and-control)',
        points: [
          'Provides certainty about the environmental outcome',
          'Simple to communicate and enforce (e.g. emission limits)',
          'Does not require accurate MEC measurement — just a standard',
          'Limitation: "one size fits all" — may be inefficient if firms have different abatement costs',
          'Limitation: regulatory capture risk — polluters lobby for weak standards'
        ]
      },
      examEdge: 'Economists generally prefer taxes (price-based instruments) for efficiency; environmentalists may prefer regulations for certainty. A hybrid is often optimal: regulations set a minimum standard; taxes create incentives beyond compliance. Acknowledge this in essays for a balanced evaluation.'
    }
  ]
};
