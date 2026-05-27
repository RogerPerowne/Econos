window.ECONOS_TOPIC = {
  id: 'contestable-markets',
  topicNum: '4.7',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Contestable Markets',
  estTime: '9-11 minutes',
  goal: 'Lock in the theory of contestable markets, the role of sunk costs, hit-and-run entry, and how contestability reshapes competition policy beyond market structure.',
  intro: {
    heroKey: 'heroMarketPower',
    summary: 'Contestability theory (Baumol, 1982) challenges the conventional view that market structure determines behaviour. If entry and exit are costless, even a monopolist must price competitively – the threat of entry disciplines behaviour without actual competition.',
    doInThis: 'Work through 7 cards covering the definition and assumptions, sunk costs as the key variable, hit-and-run entry, the perfectly contestable market, how incumbents respond to contestability, real-world approximations, and evaluation.',
    outcomes: [
      'Define a contestable market and state the conditions required for perfect contestability',
      'Explain why sunk costs are the primary determinant of market contestability',
      'Analyse how the threat of hit-and-run entry disciplines incumbent behaviour',
      'Evaluate contestability theory and its implications for competition policy'
    ],
    tip: 'Contestability is about ease of ENTRY AND EXIT, not the number of firms. A monopoly in a perfectly contestable market sets P = AC (normal profit) because any excess profit would attract instant entry. The number of firms is irrelevant – potential competition is what matters.',
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
      lede: 'Sometimes a monopolist prices like a competitor – because the threat of entry is enough. Contestability rewrites how we judge market power.',
      branches: [
        { tone: 'green',  label: 'The core idea',         sub: 'Potential competition disciplines incumbent behaviour. What matters is not the number of firms but how easy entry and exit are.' },
        { tone: 'blue',   label: 'Sunk costs are key',    sub: 'Recoverable costs don\'t deter entry. Only sunk (irrecoverable) costs create the asymmetry that protects incumbents.' },
        { tone: 'amber',  label: 'Hit-and-run entry',     sub: 'Where sunk costs are zero, entrants can swoop in, profit briefly, and exit before retaliation – keeping prices near cost.' },
        { tone: 'purple', label: 'Policy implications',   sub: 'Don\'t just count firms – assess entry and exit costs. Changes how regulators view monopoly and merger control.' }
      ],
      body: 'A <strong>contestable market</strong> (Baumol, Panzar, Willig, 1982) is one where entry and exit are costless – any firm can enter, compete, and exit without losing capital if unsuccessful.<br><br><strong>Perfectly contestable market conditions:</strong><br>• Zero sunk costs (all costs recoverable on exit)<br>• No entry barriers of any kind<br>• Instant access to the same technology and inputs as incumbents<br>• Potential entrants face the same cost conditions as incumbents<br><br><strong>Key insight:</strong> in a perfectly contestable market, the incumbent must price at AC (normal profit), not at the monopoly price. Any supernormal profit invites entry. Because entry and exit are costless, a potential entrant faces no risk – they can enter, undercut the incumbent, earn profit, and exit before the incumbent can respond. This is "hit-and-run entry."<br><br>Contestability is NOT about the number of firms – it is about the credibility of the entry threat.',
      keyTerms: [
        { term: 'Contestable market', def: 'A market where entry and exit are costless – potential competition disciplines incumbent behaviour even without actual competition.' },
        { term: 'Sunk cost', def: 'An irrecoverable cost – if a firm exits, sunk costs are lost. Sunk costs are the primary barrier to contestability.' },
        { term: 'Hit-and-run entry', def: 'An entrant exploits a temporary profit opportunity, enters, earns profit, then exits before the incumbent can respond – possible only if sunk costs are zero.' }
      ],
      examEdge: 'Contestability theory was a radical departure from structure-conduct-performance analysis. Traditional view: monopoly → high prices (because no competition). Contestability: monopoly in a contestable market → competitive prices (because threat of entry). The policy implication: don\'t just count firms – assess whether potential entrants face sunk costs. This fundamentally changed how economists and regulators think about market power.'
    },
    {
      id: 'contestability_2',
      template: 'framing',
      title: 'Sunk Costs: The Key Variable',
      body: '<strong>Sunk costs</strong> are the primary determinant of contestability. They create an asymmetry between incumbents and potential entrants:<br><br>• <strong>Incumbent:</strong> has already paid sunk costs – they are committed, not a current consideration<br>• <strong>Potential entrant:</strong> must commit sunk costs to enter – if unsuccessful, these costs are lost<br>• This asymmetry makes entry risky – and the higher the sunk costs, the riskier<br><br><strong>Examples of sunk costs that reduce contestability:</strong><br>• Aircraft R&D (£10-20bn per new aircraft model – cannot be sold if firm exits)<br>• Brand advertising (once spent, cannot be recovered)<br>• Specialist equipment with no alternative use<br>• Regulatory approval costs (pharmaceutical trials, airport slots)<br><br><strong>Contrast – recoverable costs that don\'t reduce contestability:</strong><br>• Leased equipment (can be returned)<br>• Rented premises (sub-lettable)<br>• Standard vehicles (resaleable)',
      keyTerms: [
        { term: 'Sunk cost asymmetry', def: 'Incumbent has already paid sunk costs; entrant faces the full risk of committing them – this asymmetry is the entry barrier.' },
        { term: 'Recoverable (avoidable) costs', def: 'Costs that can be recouped on exit – leased equipment, rented premises. These do NOT reduce contestability.' },
        { term: 'Exit costs', def: 'The sunk costs that would be lost on exit – the higher these are, the less contestable the market.' }
      ],
      examEdge: 'Sunk costs vs fixed costs: this distinction is critical and frequently examined. Fixed costs are INCURRED regardless of output level – but they may or may not be recoverable. A factory is a fixed cost AND a sunk cost (specialist building). Leased office space is a fixed cost but NOT a sunk cost (can be sub-let). ONLY sunk costs reduce contestability – recoverable fixed costs do not create exit barriers, so the market remains contestable even with high fixed costs.'
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
        { label: 'Hit: entrant enters', text: 'Entrant enters quickly (uses same technology, same cost conditions). Undercuts incumbent\'s price slightly but above its own AC – earns profit.' },
        { label: 'Run: entrant exits before retaliation', text: 'Incumbent cannot immediately lower price (it takes time to adjust). Entrant earns profit for the window of opportunity, then exits when incumbent responds. All costs recoverable → no losses on exit.' }
      ],
      examEdge: 'Hit-and-run entry only works if: (1) entry is fast (before incumbent can respond with price cut); (2) exit is free (sunk costs are zero – can exit without losses); (3) entrant can access the same cost technology immediately. These conditions are rarely perfectly met – which is why perfect contestability is theoretical. But partial contestability exists in markets with low sunk costs, and the THREAT of hit-and-run entry is sufficient to discipline incumbent pricing even without actual entry.'
    },
    {
      id: 'contestability_4',
      template: 'diagnose',
      title: 'Perfectly Contestable vs Non-Contestable',
      intro: 'The degree of contestability determines how close incumbent behaviour comes to the competitive outcome.',
      rows: [
        { label: 'Feature', colA: 'Perfectly contestable market', colB: 'Non-contestable market (high sunk costs)' },
        { label: 'Incumbent pricing', colA: 'Sets P = AC (normal profit). Any supernormal profit immediately attracts hit-and-run entry. Incumbent disciplines itself to avoid triggering entry.', colB: 'Can set P > AC (supernormal profit) without attracting entry. High sunk costs deter potential entrants from risking capital.' },
        { label: 'Competition policy implication', colA: 'No intervention needed even for monopoly or duopoly – potential competition ensures competitive outcome. Structure does not determine performance.', colB: 'Intervention may be needed: regulate pricing, block mergers, facilitate entry by reducing sunk costs (e.g., infrastructure sharing, spectrum allocation).' }
      ],
      footer: 'Real markets lie between these extremes. The policy task: assess the degree of contestability by evaluating sunk costs, entry time, and technology access. Low sunk costs → allow concentration. High sunk costs → regulate the incumbent.',
      examEdge: 'The contestability insight challenges the traditional SCP (Structure-Conduct-Performance) model of industrial economics. SCP says: concentrated structure → non-competitive conduct → poor performance. Contestability says: concentrated structure + low sunk costs → competitive conduct → good performance. Both can be right – the critical variable is sunk costs. Modern competition economics uses both frameworks and evaluates each market on its own sunk cost characteristics.'
    },
    {
      id: 'contestability_5',
      template: 'cause',
      title: 'Incumbent Responses to Contestability Threats',
      causes: [
        { head: 'Limit pricing', body: 'Incumbent prices just below the level at which an entrant could profitably enter (taking account of entry costs). Sacrifices some short-run profit to prevent entry. Credible if incumbent can sustain lower prices (cost advantage, deep pockets).' },
        { head: 'Excess capacity as deterrent', body: 'Maintaining spare capacity signals that incumbent can rapidly increase output and cut prices if entry occurs. Makes the threat of post-entry competition more credible – rational entrant anticipates this and stays out.' },
        { head: 'Loyalty programmes and switching costs', body: 'Create artificial sunk costs for consumers – loyalty points, long-term contracts, data lock-in. Raises effective entry barrier by making consumers reluctant to switch to entrant.' },
        { head: 'Contracts and exclusive dealing', body: 'Long-term contracts with suppliers or buyers lock up inputs/distribution channels. Entrant cannot access the same resources → reduces their contestability advantage.' }
      ],
      examEdge: 'Incumbent responses to contestability threats are strategically rational but potentially anticompetitive. Excess capacity deterrence: investment in capacity that would never be fully used in absence of entry threat. This is wasteful in productive efficiency terms (resources committed, not used) but profit-maximising strategically. The CMA examines whether excess capacity is a genuine operational requirement or primarily an entry deterrent – the latter may constitute strategic abuse of dominant position.'
    },
    {
      id: 'contestability_6',
      template: 'framing',
      title: 'Real-World Contestability: Examples',
      body: '<strong>High contestability (low sunk costs):</strong><br>• Airline routes (aircraft can be redeployed to other routes – asset is the plane, not the route)<br>• Taxi and private hire (low entry cost – car is recoverable asset; Uber proved this)<br>• Some professional services (IT consultancy, staffing agencies – minimal fixed capital)<br>• Online retail – low physical infrastructure required<br><br><strong>Low contestability (high sunk costs):</strong><br>• Aircraft manufacturing – Boeing-Airbus duopoly; COMAC (China) has invested 20+ years with state support just to approach the market<br>• Pharmaceutical R&D – £1-2bn per drug, 10+ years, no recovery if product fails<br>• Mobile networks – spectrum licences, mast infrastructure, huge upfront costs<br>• Nuclear power – plant construction costs are almost entirely sunk<br><br><strong>Uber case study:</strong> Uber entered the taxi market by demonstrating its contestability – the car (the main asset) is recoverable, regulatory approval (private hire licence) is obtainable, and technology (the platform) reduced the traditional dispatch advantage incumbents held. Dramatically increased contestability of urban taxi markets.',
      keyTerms: [
        { term: 'Asset mobility', def: 'Degree to which assets deployed in one market can be redeployed elsewhere – high mobility → high contestability.' },
        { term: 'Route contestability', def: 'Airlines can enter and exit specific routes by redirecting aircraft – routes are more contestable than entire airline markets.' },
        { term: 'Regulatory entry barrier', def: 'Licences and approvals that must be obtained before entry – adds time cost and potentially sunk application cost.' }
      ],
      examEdge: 'Airline route contestability is nuanced. A specific route (London-Paris) is highly contestable – an airline already flying can add this route with minimal sunk cost. But airport slots are scarce and non-contestable – Heathrow slots are allocated and extremely valuable (£50m+ per pair). So the route is contestable, but access to Heathrow is not. Competition policy must distinguish between the contestable route market and the non-contestable slot market – different regulatory approaches for each.'
    },
    {
      id: 'contestability_7',
      template: 'paired',
      title: 'Evaluation: Contestability Theory',
      left: {
        label: 'Strengths of contestability theory',
        points: [
          'Challenges market structure fixation – a monopoly need not be harmful if market is contestable',
          'Identifies sunk costs as the correct policy variable – not firm numbers',
          'Explains why some concentrated markets perform well (low sunk costs)',
          'Has direct policy implications: reduce sunk costs (infrastructure sharing, open access) to improve contestability',
          'Digital markets: low sunk costs may make tech markets more contestable than traditional concentration ratios suggest'
        ]
      },
      right: {
        label: 'Limitations and criticisms',
        points: [
          'Perfect contestability is theoretical – zero sunk costs and instant entry are unrealistic',
          'Entry time matters: incumbent can retaliate before costless exit occurs in practice',
          'Asymmetric information: entrant cannot know incumbent\'s cost structure or reaction function',
          'Network effects create sunk costs for consumers (switching costs) – reduces contestability even with zero firm sunk costs',
          'Digital markets: some argue they are natural monopolies with strong network barriers, not contestable'
        ]
      },
      examEdge: 'Contestability theory\'s most powerful policy implication: regulators should focus on reducing sunk costs through infrastructure sharing and open access mandates rather than breaking up large firms. Examples: BT Openreach (open access to fibre infrastructure reduces sunk costs for broadband providers – increases contestability). Mobile virtual network operators (MVNOs) access incumbent networks without building their own – reduces sunk costs, increases contestability. The theory directly guides this approach to competition policy.'
    },

    /* ----- Market Power & Contestability (merged from monopoly_vs_competition) ----- */
    {
      id: 'mvc_2',
      template: 'ad-interactive',
      title: 'The two limit cases: PC vs Monopoly',
      lede: 'A firm-level diagram for each extreme. PC firm: horizontal AR=MR=P (price-taker). Monopoly: faces the whole downward demand, MR below AR.',
      diagramKey: 'firmLevelPcVsMonopoly',
      steps: [
        {
          key: 'base',
          label: 'PC firm (price-taker)',
          text: 'Under perfect competition the individual firm is a <strong>price-taker</strong>. The market sets P; the firm faces a perfectly elastic <strong>horizontal demand: AR = MR = P</strong>. The firm chooses output where <strong>MC = MR (= P)</strong>. In the long run, free entry drives profit to zero: <strong>P = MC = min AC</strong> – both allocatively and productively efficient.'
        },
        {
          key: 'extension',
          label: 'Monopoly firm (price-maker)',
          text: 'The monopolist faces the <strong>whole market demand</strong>. AR is downward-sloping, so to sell another unit it must cut price on every unit. Hence <strong>MR &lt; AR</strong> (MR has twice the slope of a linear AR). Profit-max where <strong>MR = MC</strong> gives Q_m. Price is read up to AR, giving <strong>P_m &gt; MC</strong>. Supernormal profit (P_m − AC) × Q_m persists if entry is blocked.'
        },
        {
          key: 'shift',
          label: 'Compare side-by-side',
          text: 'Same cost curves, different demand. PC firm produces at <strong>min AC</strong> (productive efficiency) and <strong>P = MC</strong> (allocative efficiency). Monopoly firm produces less, at higher AC per unit, charges above MC, and earns supernormal profit. <strong>BUT</strong>: these are limit cases. Whether the monopoly outcome persists depends on contestability.'
        }
      ],
      examEdge: 'For a PC firm the demand curve is HORIZONTAL at market price – NEVER draw a downward slope for the individual PC firm. The downward slope is the INDUSTRY demand curve. Mixing firm-level and industry-level diagrams is one of the most common A-level errors.'
    },
    {
      id: 'mvc_5',
      template: 'framing',
      title: 'When market power isn\'t all bad',
      body: 'The DWL diagram assumes monopoly is unambiguously worse. Three counter-arguments push back:<br><br><strong>1. Natural monopoly cost advantage.</strong> If LRAC is still falling at the scale of market demand, a single firm produces at lower AC than several smaller competitors would. Breaking it up raises costs. Examples: water distribution, electricity grid, gas pipelines, rail track. Policy response: regulate (RPI-X price cap, access regulation), don\'t break up.<br><br><strong>2. Schumpeterian dynamic efficiency.</strong> Supernormal monopoly profit funds R&D. Competitive firms earn only normal profit and cannot afford ambitious research. Patents – a temporary legal monopoly – are the standard incentive for innovation. Aghion et al. find an <em>inverted-U</em>: innovation peaks at intermediate concentration, not at the extremes.<br><br><strong>3. Contestability.</strong> A single firm in a contestable market behaves competitively. Number of firms is the wrong metric; entry conditions are the right metric.',
      keyTerms: [
        { term: 'Natural monopoly', def: 'A market where one firm can serve demand at lower AC than multiple firms – LRAC still falling at minimum efficient scale relative to demand size.' },
        { term: 'Schumpeterian hypothesis', def: 'Market power and supernormal profit are prerequisites for significant innovation; pure competition under-invests in R&D.' },
        { term: 'Inverted-U hypothesis (Aghion)', def: 'Innovation peaks at intermediate market concentration – neither pure competition nor pure monopoly is optimal for dynamic efficiency.' }
      ],
      examEdge: 'In evaluation, push back against the static welfare diagram with these three arguments. Natural monopoly is the strongest rebuttal – for water and rail track, breaking up genuinely raises costs. Schumpeter is weaker as a general principle (mixed evidence) but strong for specific industries (pharma, where patents are essential). Contestability is the modern framework: regulate barriers, not concentration.'
    },
    {
      id: 'mvc_6',
      template: 'cause',
      title: 'Where real markets sit',
      causes: [
        { head: 'Big Tech – high barriers, market power', body: 'Google search (92% share), Meta (Facebook + Instagram + WhatsApp), Apple (App Store control), Amazon (marketplace + own products). <strong>High barriers</strong>: network effects (more users → better service → more users), data accumulation, switching costs. Entry by new search engines or social networks consistently fails. CMA Digital Markets Unit (2021) targets these specifically with conduct codes.' },
        { head: 'Airlines – contestable on routes', body: 'Aircraft are <strong>mobile capital</strong> – low route-specific sunk costs. Even a monopoly route is contestable: rivals can redeploy aircraft when profits attract them. Ryanair and easyJet entering legacy carrier routes systematically eroded margins. Outcome: prices closer to AC than route-level concentration suggests.' },
        { head: 'Utilities – natural monopoly + regulation', body: 'Water, gas pipes, electricity grid, rail track (Network Rail). Distribution is a <strong>natural monopoly</strong> – duplicate networks waste resources. UK approach: separate the network (regulated monopoly, e.g. Network Rail, National Grid) from competitive layers (train operators, energy retailers). Access regulation prevents the network owner from abusing dominance.' },
        { head: 'Supermarkets – oligopoly, contestable in segments', body: 'Tesco, Sainsbury\'s, Asda, Morrisons control most volume but face entry pressure from Aldi and Lidl, which roughly doubled share between 2013 and 2024. Online grocery is contestable; physical big-box stores less so (planning constraints). CMA studies on fuel pricing and loyalty schemes target specific conduct issues rather than overall structure.' }
      ],
      examEdge: 'Use specific real-world examples in essays – they earn application marks. Always mention CONTESTABILITY status alongside concentration: e.g. "UK groceries: top-4 concentration ratio ~65%, but contestable due to Aldi/Lidl expansion and low consumer switching costs."'
    },
    {
      id: 'mvc_7',
      template: 'paired',
      title: 'Modern competition policy: targeting barriers, not structure',
      left: {
        label: 'The contestability-based approach works',
        points: [
          'CMA Digital Markets Unit: ex-ante codes of conduct for SMS-designated firms (Google, Apple, Meta) – targets behaviour, not break-up',
          'Merger control prevents concentration-INCREASING deals that raise entry barriers (Microsoft/Activision CMA scrutiny)',
          'Market investigations target SPECIFIC barriers: loyalty schemes, data portability, switching costs, fuel margin opacity',
          'Access regulation in utilities preserves natural monopoly cost advantages while preventing exploitation',
          'Fines deter abuse: up to 10% of global turnover (Google Shopping €2.4bn, 2017)'
        ]
      },
      right: {
        label: 'Limitations and tensions',
        points: [
          'Defining "contestable" is contentious – incumbents always claim more contestability than entrants experience',
          'Information asymmetry: firms know their cost structures and strategies; regulators rely on submitted evidence',
          'Speed: digital markets evolve in months; investigations take years (Google Shopping appeal: 5 years)',
          'Cross-border platforms evade single-jurisdiction regulators; international coordination is slow',
          'Risk of regulatory capture as agencies repeatedly engage the same firms'
        ]
      },
      examEdge: 'The modern framework is genuinely different from textbook PC vs Monopoly. Strong evaluation: "While breaking up Big Tech may seem appealing under the static welfare model, the contestability framework prefers conduct codes that preserve scale benefits while preventing entry-barrier abuse – the approach embedded in the UK Digital Markets, Competition and Consumers Act 2024."'
    },
    {
      id: 'mvc_8',
      template: 'market-structures-comparison',
      title: 'Market structures at a glance',
      lede: 'All four structures side by side. Use the \'Reveal\' rows to self-test the efficiency verdicts before checking – this is exactly the kind of comparison an examiner expects you to make fluently.',
      rows: [
        { label: 'No. of firms',    pc: 'Many (infinite in theory)', mc: 'Many',        ol: 'Few (typically 3–10)',                mo: 'One' },
        { label: 'Product type',    pc: 'Homogeneous (identical)',    mc: 'Differentiated', ol: 'Homogeneous or differentiated',      mo: 'Unique – no close substitutes' },
        { label: 'Entry barriers',  pc: 'None – free entry & exit',  mc: 'Low',         ol: 'High (scale, capital, brands)',         mo: 'Very high (legal, natural, strategic)' },
        { label: 'Price control',   pc: 'None – price-taker',        mc: 'Slight',      ol: 'Significant',                          mo: 'Full – price-maker' },
        { label: 'SR profit',       pc: 'Supernormal possible',       mc: 'Supernormal possible', ol: 'Supernormal likely',          mo: 'Supernormal likely' },
        { label: 'LR profit',       pc: 'Normal only (entry erodes)', mc: 'Normal only (entry erodes)', ol: 'Supernormal likely (barriers protect)', mo: 'Supernormal likely (barriers protect)' },
        { reveal: true, label: 'Productive efficiency', pc: '✓ P = min AC in LR', mc: '✗ Excess capacity – P > min AC', ol: '✗ Usually not', mo: '✗ P > min AC' },
        { reveal: true, label: 'Allocative efficiency', pc: '✓ P = MC',            mc: '✗ P > MC',                       ol: '✗ P > MC',     mo: '✗ P > MC (deadweight loss)' },
        { reveal: true, label: 'Dynamic efficiency',    pc: '✗ Normal profit = no R&D budget', mc: '✓ Limited', ol: '✓ Often strong – supernormal funds R&D', mo: '✓ Possible if profits reinvested (Schumpeter)' },
        { label: 'UK examples',     pc: 'Foreign exchange, commodity markets', mc: 'Coffee shops, hairdressers, restaurants', ol: 'Supermarkets (Big 4), banks, airlines', mo: 'Water utilities, Royal Mail (letters)' }
      ],
      examEdge: 'Don\'t just list structures – compare them on efficiency and link to policy. Strong analysis: "Unlike PC, monopoly is neither productively nor allocatively efficient in the static model – but may achieve greater dynamic efficiency if Schumpeterian supernormal profit funds R&D. Whether the static losses outweigh dynamic gains is an empirical question, not a theoretical one." Always qualify with contestability.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};
