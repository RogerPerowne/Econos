window.ECONOS_TOPIC = {
  id: 'contestability',
  topicNum: '3.17',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Contestable Markets',
  estTime: '9-11 minutes',
  goal: 'Lock in the theory of contestable markets, the role of sunk costs, hit-and-run entry, and how contestability reshapes competition policy beyond market structure.',
  intro: {
    heroKey: 'heroMarketPower',
    summary: 'Contestability theory (Baumol, 1982) challenges the conventional view that market structure determines behaviour. If entry and exit are costless, even a monopolist must price competitively — the threat of entry disciplines behaviour without actual competition.',
    doInThis: 'Work through 7 cards covering the definition and assumptions, sunk costs as the key variable, hit-and-run entry, the perfectly contestable market, how incumbents respond to contestability, real-world approximations, and evaluation.',
    outcomes: [
      'Define a contestable market and state the conditions required for perfect contestability',
      'Explain why sunk costs are the primary determinant of market contestability',
      'Analyse how the threat of hit-and-run entry disciplines incumbent behaviour',
      'Evaluate contestability theory and its implications for competition policy'
    ],
    tip: 'Contestability is about ease of ENTRY AND EXIT, not the number of firms. A monopoly in a perfectly contestable market sets P = AC (normal profit) because any excess profit would attract instant entry. The number of firms is irrelevant — potential competition is what matters.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'contestability_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Contestable markets: the big picture',
      lede: 'Sometimes a monopolist prices like a competitor — because the threat of entry is enough. Contestability rewrites how we judge market power.',
      branches: [
        { tone: 'green',  label: 'The core idea',         sub: 'Potential competition disciplines incumbent behaviour. What matters is not the number of firms but how easy entry and exit are.' },
        { tone: 'blue',   label: 'Sunk costs are key',    sub: 'Recoverable costs don\'t deter entry. Only sunk (irrecoverable) costs create the asymmetry that protects incumbents.' },
        { tone: 'amber',  label: 'Hit-and-run entry',     sub: 'Where sunk costs are zero, entrants can swoop in, profit briefly, and exit before retaliation — keeping prices near cost.' },
        { tone: 'purple', label: 'Policy implications',   sub: 'Don\'t just count firms — assess entry and exit costs. Changes how regulators view monopoly and merger control.' }
      ],
      body: 'A <strong>contestable market</strong> (Baumol, Panzar, Willig, 1982) is one where entry and exit are costless — any firm can enter, compete, and exit without losing capital if unsuccessful.<br><br><strong>Perfectly contestable market conditions:</strong><br>• Zero sunk costs (all costs recoverable on exit)<br>• No entry barriers of any kind<br>• Instant access to the same technology and inputs as incumbents<br>• Potential entrants face the same cost conditions as incumbents<br><br><strong>Key insight:</strong> in a perfectly contestable market, the incumbent must price at AC (normal profit), not at the monopoly price. Any supernormal profit invites entry. Because entry and exit are costless, a potential entrant faces no risk — they can enter, undercut the incumbent, earn profit, and exit before the incumbent can respond. This is "hit-and-run entry."<br><br>Contestability is NOT about the number of firms — it is about the credibility of the entry threat.',
      keyTerms: [
        { term: 'Contestable market', def: 'A market where entry and exit are costless — potential competition disciplines incumbent behaviour even without actual competition.' },
        { term: 'Sunk cost', def: 'An irrecoverable cost — if a firm exits, sunk costs are lost. Sunk costs are the primary barrier to contestability.' },
        { term: 'Hit-and-run entry', def: 'An entrant exploits a temporary profit opportunity, enters, earns profit, then exits before the incumbent can respond — possible only if sunk costs are zero.' }
      ],
      examEdge: 'Contestability theory was a radical departure from structure-conduct-performance analysis. Traditional view: monopoly → high prices (because no competition). Contestability: monopoly in a contestable market → competitive prices (because threat of entry). The policy implication: don\'t just count firms — assess whether potential entrants face sunk costs. This fundamentally changed how economists and regulators think about market power.'
    },
    {
      id: 'contestability_2',
      template: 'framing',
      title: 'Sunk Costs: The Key Variable',
      body: '<strong>Sunk costs</strong> are the primary determinant of contestability. They create an asymmetry between incumbents and potential entrants:<br><br>• <strong>Incumbent:</strong> has already paid sunk costs — they are committed, not a current consideration<br>• <strong>Potential entrant:</strong> must commit sunk costs to enter — if unsuccessful, these costs are lost<br>• This asymmetry makes entry risky — and the higher the sunk costs, the riskier<br><br><strong>Examples of sunk costs that reduce contestability:</strong><br>• Aircraft R&D (£10-20bn per new aircraft model — cannot be sold if firm exits)<br>• Brand advertising (once spent, cannot be recovered)<br>• Specialist equipment with no alternative use<br>• Regulatory approval costs (pharmaceutical trials, airport slots)<br><br><strong>Contrast — recoverable costs that don\'t reduce contestability:</strong><br>• Leased equipment (can be returned)<br>• Rented premises (sub-lettable)<br>• Standard vehicles (resaleable)',
      keyTerms: [
        { term: 'Sunk cost asymmetry', def: 'Incumbent has already paid sunk costs; entrant faces the full risk of committing them — this asymmetry is the entry barrier.' },
        { term: 'Recoverable (avoidable) costs', def: 'Costs that can be recouped on exit — leased equipment, rented premises. These do NOT reduce contestability.' },
        { term: 'Exit costs', def: 'The sunk costs that would be lost on exit — the higher these are, the less contestable the market.' }
      ],
      examEdge: 'Sunk costs vs fixed costs: this distinction is critical and frequently examined. Fixed costs are INCURRED regardless of output level — but they may or may not be recoverable. A factory is a fixed cost AND a sunk cost (specialist building). Leased office space is a fixed cost but NOT a sunk cost (can be sub-let). ONLY sunk costs reduce contestability — recoverable fixed costs do not create exit barriers, so the market remains contestable even with high fixed costs.'
    },
    {
      id: 'contestability_3',
      template: 'mechanisms',
      diagramKey: 'contestabilityDiagram',
      title: 'Hit-and-Run Entry',
      intro: 'Hit-and-run entry is the mechanism by which potential entrants discipline incumbent pricing in contestable markets.',
      steps: [
        { label: 'Incumbent earns supernormal profit', text: 'Incumbent prices above AC, earning supernormal profit. In a non-contestable market, this would persist. In a contestable market, it attracts attention.' },
        { label: 'Entrant identifies opportunity', text: 'A potential entrant observes the supernormal profit. It calculates that entry is profitable: price (P) > AC (including their own costs). Since sunk costs are zero, the risk of entering is minimal.' },
        { label: 'Hit: entrant enters', text: 'Entrant enters quickly (uses same technology, same cost conditions). Undercuts incumbent\'s price slightly but above its own AC — earns profit.' },
        { label: 'Run: entrant exits before retaliation', text: 'Incumbent cannot immediately lower price (it takes time to adjust). Entrant earns profit for the window of opportunity, then exits when incumbent responds. All costs recoverable → no losses on exit.' }
      ],
      examEdge: 'Hit-and-run entry only works if: (1) entry is fast (before incumbent can respond with price cut); (2) exit is free (sunk costs are zero — can exit without losses); (3) entrant can access the same cost technology immediately. These conditions are rarely perfectly met — which is why perfect contestability is theoretical. But partial contestability exists in markets with low sunk costs, and the THREAT of hit-and-run entry is sufficient to discipline incumbent pricing even without actual entry.'
    },
    {
      id: 'contestability_4',
      template: 'diagnose',
      title: 'Perfectly Contestable vs Non-Contestable',
      intro: 'The degree of contestability determines how close incumbent behaviour comes to the competitive outcome.',
      rows: [
        { label: 'Feature', colA: 'Perfectly contestable market', colB: 'Non-contestable market (high sunk costs)' },
        { label: 'Incumbent pricing', colA: 'Sets P = AC (normal profit). Any supernormal profit immediately attracts hit-and-run entry. Incumbent disciplines itself to avoid triggering entry.', colB: 'Can set P > AC (supernormal profit) without attracting entry. High sunk costs deter potential entrants from risking capital.' },
        { label: 'Competition policy implication', colA: 'No intervention needed even for monopoly or duopoly — potential competition ensures competitive outcome. Structure does not determine performance.', colB: 'Intervention may be needed: regulate pricing, block mergers, facilitate entry by reducing sunk costs (e.g., infrastructure sharing, spectrum allocation).' }
      ],
      footer: 'Real markets lie between these extremes. The policy task: assess the degree of contestability by evaluating sunk costs, entry time, and technology access. Low sunk costs → allow concentration. High sunk costs → regulate the incumbent.',
      examEdge: 'The contestability insight challenges the traditional SCP (Structure-Conduct-Performance) model of industrial economics. SCP says: concentrated structure → non-competitive conduct → poor performance. Contestability says: concentrated structure + low sunk costs → competitive conduct → good performance. Both can be right — the critical variable is sunk costs. Modern competition economics uses both frameworks and evaluates each market on its own sunk cost characteristics.'
    },
    {
      id: 'contestability_5',
      template: 'cause',
      title: 'Incumbent Responses to Contestability Threats',
      causes: [
        { head: 'Limit pricing', body: 'Incumbent prices just below the level at which an entrant could profitably enter (taking account of entry costs). Sacrifices some short-run profit to prevent entry. Credible if incumbent can sustain lower prices (cost advantage, deep pockets).' },
        { head: 'Excess capacity as deterrent', body: 'Maintaining spare capacity signals that incumbent can rapidly increase output and cut prices if entry occurs. Makes the threat of post-entry competition more credible — rational entrant anticipates this and stays out.' },
        { head: 'Loyalty programmes and switching costs', body: 'Create artificial sunk costs for consumers — loyalty points, long-term contracts, data lock-in. Raises effective entry barrier by making consumers reluctant to switch to entrant.' },
        { head: 'Contracts and exclusive dealing', body: 'Long-term contracts with suppliers or buyers lock up inputs/distribution channels. Entrant cannot access the same resources → reduces their contestability advantage.' }
      ],
      examEdge: 'Incumbent responses to contestability threats are strategically rational but potentially anticompetitive. Excess capacity deterrence: investment in capacity that would never be fully used in absence of entry threat. This is wasteful in productive efficiency terms (resources committed, not used) but profit-maximising strategically. The CMA examines whether excess capacity is a genuine operational requirement or primarily an entry deterrent — the latter may constitute strategic abuse of dominant position.'
    },
    {
      id: 'contestability_6',
      template: 'framing',
      title: 'Real-World Contestability: Examples',
      body: '<strong>High contestability (low sunk costs):</strong><br>• Airline routes (aircraft can be redeployed to other routes — asset is the plane, not the route)<br>• Taxi and private hire (low entry cost — car is recoverable asset; Uber proved this)<br>• Some professional services (IT consultancy, staffing agencies — minimal fixed capital)<br>• Online retail — low physical infrastructure required<br><br><strong>Low contestability (high sunk costs):</strong><br>• Aircraft manufacturing — Boeing-Airbus duopoly; COMAC (China) has invested 20+ years with state support just to approach the market<br>• Pharmaceutical R&D — £1-2bn per drug, 10+ years, no recovery if product fails<br>• Mobile networks — spectrum licences, mast infrastructure, huge upfront costs<br>• Nuclear power — plant construction costs are almost entirely sunk<br><br><strong>Uber case study:</strong> Uber entered the taxi market by demonstrating its contestability — the car (the main asset) is recoverable, regulatory approval (private hire licence) is obtainable, and technology (the platform) reduced the traditional dispatch advantage incumbents held. Dramatically increased contestability of urban taxi markets.',
      keyTerms: [
        { term: 'Asset mobility', def: 'Degree to which assets deployed in one market can be redeployed elsewhere — high mobility → high contestability.' },
        { term: 'Route contestability', def: 'Airlines can enter and exit specific routes by redirecting aircraft — routes are more contestable than entire airline markets.' },
        { term: 'Regulatory entry barrier', def: 'Licences and approvals that must be obtained before entry — adds time cost and potentially sunk application cost.' }
      ],
      examEdge: 'Airline route contestability is nuanced. A specific route (London-Paris) is highly contestable — an airline already flying can add this route with minimal sunk cost. But airport slots are scarce and non-contestable — Heathrow slots are allocated and extremely valuable (£50m+ per pair). So the route is contestable, but access to Heathrow is not. Competition policy must distinguish between the contestable route market and the non-contestable slot market — different regulatory approaches for each.'
    },
    {
      id: 'contestability_7',
      template: 'paired',
      title: 'Evaluation: Contestability Theory',
      left: {
        label: 'Strengths of contestability theory',
        points: [
          'Challenges market structure fixation — a monopoly need not be harmful if market is contestable',
          'Identifies sunk costs as the correct policy variable — not firm numbers',
          'Explains why some concentrated markets perform well (low sunk costs)',
          'Has direct policy implications: reduce sunk costs (infrastructure sharing, open access) to improve contestability',
          'Digital markets: low sunk costs may make tech markets more contestable than traditional concentration ratios suggest'
        ]
      },
      right: {
        label: 'Limitations and criticisms',
        points: [
          'Perfect contestability is theoretical — zero sunk costs and instant entry are unrealistic',
          'Entry time matters: incumbent can retaliate before costless exit occurs in practice',
          'Asymmetric information: entrant cannot know incumbent\'s cost structure or reaction function',
          'Network effects create sunk costs for consumers (switching costs) — reduces contestability even with zero firm sunk costs',
          'Digital markets: some argue they are natural monopolies with strong network barriers, not contestable'
        ]
      },
      examEdge: 'Contestability theory\'s most powerful policy implication: regulators should focus on reducing sunk costs through infrastructure sharing and open access mandates rather than breaking up large firms. Examples: BT Openreach (open access to fibre infrastructure reduces sunk costs for broadband providers — increases contestability). Mobile virtual network operators (MVNOs) access incumbent networks without building their own — reduces sunk costs, increases contestability. The theory directly guides this approach to competition policy.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'cont-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: contestability',
      question: 'Evaluate the view that contestability is a more effective way of promoting competition than breaking up monopolies. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define contestability and explain the core theoretical claim: even a monopoly will price competitively if entry is sufficiently easy.',
          hint: 'Contestable market (Baumol, Panzar, Willig 1982): market with no barriers to entry or exit, zero sunk costs. Even a monopoly in a perfectly contestable market prices at P = AC (normal profit) — threat of hit-and-run entry disciplines incumbent. Breaking up monopolies: structural remedy that splits the incumbent into competing firms. Key question: does the threat of entry achieve the same outcome as actual competition?',
          model: 'Contestability theory (Baumol, Panzar, and Willig, 1982) holds that market structure — the number of firms — is less important than the ease of entry and exit. In a perfectly contestable market, even a single incumbent firm prices at average cost and earns only normal profit: any attempt to earn supernormal profit would attract hit-and-run entry by firms that enter, capture profit, and exit before the incumbent can respond. Under this theory, the threat of entry is as effective as actual competition in disciplining incumbent behaviour. This challenges the conventional remedy of breaking up monopolies — the structural approach — arguing that regulatory focus on reducing barriers to entry achieves competitive outcomes more efficiently.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — How contestability disciplines incumbents without structural change',
          prompt: 'Explain how the threat of hit-and-run entry constrains monopoly pricing in a contestable market.',
          hint: 'Mechanism: if P > AC → supernormal profit → attracts entrant → incumbent must cut price or lose market share. If exit is costless (no sunk costs), entrant bears no exit risk → lowers entry threshold. Result: incumbent anticipates entry and prices at P = AC preemptively. No actual entry needed — the THREAT disciplines. Policy application: BT Openreach open access mandate → reduces sunk costs for ISPs → more contestable broadband market → BT pressured to price competitively.',
          model: 'In a contestable market, the incumbent prices to deter entry rather than to maximise short-run profit. If the incumbent sets P > AC, a new entrant can profitably enter, serve consumers at a lower price, earn profit, and then exit before the incumbent retaliates — a hit-and-run strategy. Since exit is costless (no irrecoverable sunk costs), the entrant faces no downside risk. Knowing this, the incumbent preemptively sets P = AC — extracting only normal profit. The competitive outcome is achieved without any firm entering the market. This mechanism has direct policy applications: UK regulators have pursued infrastructure sharing mandates (BT Openreach, railway track access) specifically to reduce entrants\' sunk costs — making markets more contestable without requiring the costly and disruptive process of breaking up the incumbent firm.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — The case for breaking up monopolies: structural remedies',
          prompt: 'Explain when breaking up monopolies may be more effective than relying on contestability.',
          hint: 'Some markets have intrinsic sunk costs that cannot be reduced by regulation — natural monopoly infrastructure (water pipes, electricity grid, gas networks). For these, contestability is impossible regardless of regulatory effort. Structural breakup (or regulated access pricing) may be the only option. Also: breaking up creates actual competition immediately, whereas contestability requires correct conditions. Historical: Standard Oil breakup (1911), AT&T breakup (1982) created vibrant competitive markets.',
          model: 'Structural remedies — breaking up the incumbent — are most effective in markets where sunk costs cannot be practically reduced to contestable levels. Natural monopoly infrastructure (water networks, electricity grids, railway track) has such high fixed and sunk costs that hit-and-run entry is impossible regardless of regulatory mandates. For these industries, the correct response is regulated access pricing or structural separation (as with British Rail\'s Railtrack/Network Rail structure). Historically, major structural breakups have created competitive markets that did not exist before: the 1982 AT&T breakup transformed US telecommunications from a monopoly to a vibrant competitive sector, and the subsequent innovation explosion (mobile, internet) suggests the structural remedy created more dynamic competition than contestability-based regulation alone could have achieved.'
        },
        {
          type: 'counter',
          label: 'Counter — Limits of contestability: sunk costs, asymmetric information, first-mover advantages',
          prompt: 'Evaluate the theoretical and practical limitations of contestability as a competitive mechanism.',
          hint: 'Perfect contestability is theoretical — real markets always have some sunk costs (brand building, regulatory approval, customer relationships). Asymmetric information: incumbent has knowledge advantages → entrant uncertainty raises effective entry cost. First-mover advantages: network effects, economies of scale, accumulated customer data create structural advantages that persist even when sunk costs are reduced. Digital markets: platform network effects create winner-takes-all dynamics that contestability cannot dissolve.',
          model: 'Contestability theory rests on the assumption of zero sunk costs and perfect information, which is rarely satisfied in practice. Brand recognition, customer relationships, regulatory licences, and R&D all involve sunk investments that even the most open access mandate cannot eliminate. In digital platform markets, network effects create structural advantages for incumbents that persist regardless of how low sunk costs are: a new social network faces the cold-start problem (no users → no value → no users) that cannot be resolved by cost-based entry deregulation. Google\'s search algorithm accumulated over two decades of query data represents a competitive asset entrants cannot replicate from scratch, making the market uncontestable despite no formal barriers. In these markets, contestability theory provides an incomplete diagnosis, and structural remedies — or behavioural remedies like data portability and interoperability — may be more effective.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — Context determines which approach is superior',
          prompt: 'Weigh contestability vs structural remedies with reference to market type, sunk costs, and the nature of incumbent advantage.',
          hint: 'Key judgement: contestability works best when sunk costs can genuinely be reduced (telecommunications infrastructure sharing, aviation airport slots, broadband). Structural breakup works best when: (a) sunk costs are intrinsic, (b) first-mover advantage is structural, (c) incumbent scale creates persistent competitive disadvantage for entrants. Digital markets: neither approach is fully satisfactory — contestability is insufficient, breakup is technically complex and risks destroying value. Behavioural remedies (interoperability, data portability) may be needed.',
          model: 'The relative merits of contestability-based regulation and structural breakup depend critically on the source of the incumbent\'s market power. Where market power derives primarily from sunk costs that regulation can address — as in fixed-line telecommunications infrastructure and broadband — contestability-enhancing measures are more efficient: they preserve scale economies while disciplining pricing, without the transition costs and complexity of structural breakup. Where market power derives from intrinsic natural monopoly characteristics (water, gas, electricity grids) or self-reinforcing network effects (digital platforms), contestability is insufficient and stronger intervention is required. The most sophisticated competition policy uses a combination: infrastructure sharing mandates to maximise contestability where possible, structural separation where natural monopoly is unavoidable, and behavioural remedies (interoperability, data access) for digital platforms where neither contestability nor breakup fully addresses the competitive problem.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Deliver a reasoned judgement: contestability is often superior to breakup but its effectiveness depends on whether sunk costs can genuinely be reduced.',
          hint: 'Contestability is the better approach where sunk costs can be reduced through regulation — it achieves competitive outcomes without the disruption of structural breakup. But it is insufficient for intrinsic natural monopoly and digital platform markets where first-mover advantages cannot be regulated away. Context is everything.',
          model: 'Contestability-based regulation is often more effective than structural breakup in promoting competition efficiently, because it can achieve competitive outcomes without destroying the scale economies that justify large incumbent firms. Where regulators can reduce sunk costs through infrastructure sharing and open access mandates — as in telecommunications and aviation — contestability provides a proportionate and practical remedy. However, it is not a universal solution: in markets with intrinsic natural monopoly characteristics or platform network effects, the conditions for contestability cannot be achieved regardless of regulatory effort, and structural or behavioural remedies are required. The most effective competition policy framework treats contestability and structural remedies as complementary tools, each appropriate in different market contexts, rather than as competing philosophies demanding a single universal answer.'
        }
      ]
    }
  ]
};
