window.ECONOS_TOPIC = {
  id: 'long_run_costs',
  topicNum: '3.3',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Economies & Diseconomies of Scale',
  estTime: '7-9 minutes',
  goal: 'Lock in the LRAC curve, minimum efficient scale, economies and diseconomies of scale, and their implications for market structure.',
  intro: {
    heroKey: 'heroLongRunCosts',
    summary: 'In the long run, all factors can be varied. The shape of the long-run average cost curve reveals the optimal scale of production and explains why some industries have few large firms while others have many small ones.',
    doInThis: 'Work through 7 cards covering the LRAC curve as an envelope, minimum efficient scale, internal economies of scale, external economies of scale, diseconomies of scale, and implications for natural monopoly and market structure.',
    outcomes: [
      'Explain why the LRAC is the "envelope" of short-run average cost curves',
      'Identify and explain the main sources of internal economies of scale',
      'Define minimum efficient scale and explain its relationship to market structure',
      'Distinguish economies from diseconomies of scale and evaluate their policy implications'
    ],
    tip: 'LRAC falls due to economies of scale. It reaches its minimum at MES (Minimum Efficient Scale). Beyond MES, LRAC may rise (diseconomies) or remain flat (constant returns to scale). The lower the MES relative to market size, the more firms the industry can support.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'long_run_costs_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      diagramKey: 'lracEnvelope',
      title: 'Long-run costs: the big picture',
      lede: 'In the long run everything is variable. The shape of the cost curve determines what market structure the industry can sustain.',
      branches: [
        { tone: 'green',  label: 'The LRAC curve',        sub: 'The envelope of all short-run cost curves. Shows the lowest cost per unit when firms can choose any scale of operation.' },
        { tone: 'blue',   label: 'Economies of scale',    sub: 'Technical, managerial, financial, marketing, risk-bearing. Why bigger firms can undercut smaller ones on price.' },
        { tone: 'amber',  label: 'Diseconomies of scale', sub: 'Coordination costs, communication failures, X-inefficiency. Why getting too big eventually pushes unit costs back up.' },
        { tone: 'purple', label: 'MES and structure',     sub: 'Minimum efficient scale relative to market size determines whether the industry supports many firms, few firms, or a natural monopoly.' }
      ],
      body: 'In the <strong>long run</strong>, all factors of production can be varied — no fixed costs. The firm chooses the optimal scale of operation for each output level.<br><br>The <strong>Long-Run Average Cost (LRAC) curve</strong> is the "envelope" of all possible short-run average cost curves — each point on the LRAC represents the lowest possible cost of producing that output using the optimal capital stock for that scale.<br><br>The LRAC curve is typically:<br>• <strong>Initially falling:</strong> economies of scale as output rises<br>• <strong>Flat (or minimum) at MES:</strong> constant returns to scale at the minimum efficient scale<br>• <strong>Eventually rising (possibly):</strong> diseconomies of scale at very large scales',
      keyTerms: [
        { term: 'LRAC', def: 'Long-Run Average Cost — the minimum average cost achievable at each output level when all inputs can be varied.' },
        { term: 'Envelope curve', def: 'The LRAC is tangent to (touches) each SRAC curve from below — represents the minimum cost attainable for each output.' },
        { term: 'Minimum Efficient Scale (MES)', def: 'The output level at which LRAC reaches its minimum — the smallest scale of operation needed to fully exploit economies of scale.' }
      ],
      examEdge: 'The LRAC diagram is an essential long-run diagram. Draw multiple U-shaped SRAC curves (for increasing capital stocks), then trace the LRAC along the bottom of each. The LRAC touches (is tangent to) each SRAC at a different output level. This envelope construction explains why LRAC is flatter and lower than any individual SRAC.'
    },
    {
      id: 'long_run_costs_2',
      template: 'cause',
      title: 'Internal Economies of Scale',
      causes: [
        { head: 'Technical economies', body: 'Larger machines are proportionally cheaper to run — "cube-square law": doubling dimensions of a container increases volume 8x but surface area only 4x → fewer materials per unit of volume. Large blast furnaces, tankers, aircraft — all exploit this geometry.' },
        { head: 'Purchasing economies', body: 'Large firms buy in bulk → negotiate lower input prices. Walmart negotiates supplier prices that small retailers cannot match. Supermarket private labels exploit purchasing economies at scale.' },
        { head: 'Managerial/specialisation economies', body: 'Large firms afford specialist managers (HR director, chief data scientist) that small firms cannot. Specialisation raises productivity; fixed manager cost spread over more output.' },
        { head: 'Marketing economies', body: 'Advertising costs spread over large output — cost per unit falls. A national TV campaign costs the same whether firm sells 1m or 10m units. Branded consumer goods firms have large advantages here.' },
        { head: 'Financial economies', body: 'Large firms access credit at lower interest rates (lower perceived risk, ability to pledge assets). Listed companies access equity markets. Small firms pay higher rates and may face credit rationing.' }
      ],
      examEdge: 'The cube-square law (technical economies) is the most intellectually satisfying economy of scale — it is a physical law, not just a business optimisation. Large oil tankers, nuclear power plants, and jumbo jets all exploit it. Mentioning this with a specific example elevates technical depth in essays.'
    },
    {
      id: 'long_run_costs_3',
      template: 'framing',
      title: 'External Economies of Scale',
      body: '<strong>External economies of scale</strong> arise from the growth of the industry or cluster, not the individual firm. They reduce costs for all firms in the industry when the industry grows:<br><br>• <strong>Skilled labour pool:</strong> Silicon Valley — workers with rare tech skills; firms can hire without training from scratch<br>• <strong>Specialised suppliers:</strong> Detroit auto cluster — thousands of component suppliers co-locate near car manufacturers, reducing logistics costs for all<br>• <strong>Knowledge spillovers:</strong> universities, research institutes, and competitor proximity → ideas spread → innovation higher<br>• <strong>Infrastructure:</strong> ports, airports, broadband — better as more firms co-locate and justify the investment<br><br>External economies create regional clusters: Silicon Valley, City of London, Cambridge biotech.',
      keyTerms: [
        { term: 'External economies of scale', def: 'Cost reductions for all firms in an industry arising from the growth of the industry rather than individual firm size.' },
        { term: 'Agglomeration', def: 'Geographical clustering of firms in the same industry — exploits external economies of scale and knowledge spillovers.' },
        { term: 'Knowledge spillover', def: 'Ideas and innovations that spread from one firm to others in close proximity — a positive externality creating external economies.' }
      ],
      examEdge: 'Cambridge Biomedical Campus illustrates external economies: AstraZeneca, Wellcome Sanger Institute, Addenbrooke\'s Hospital, and 5,000+ biotech companies co-locate. A startup there benefits from a ready supply of PhD scientists, clinical trial infrastructure, and proximity to collaborators — none of these advantages exist in isolation. Government investment in clusters exploits external economies.'
    },
    {
      id: 'long_run_costs_4',
      template: 'framing',
      title: 'Diseconomies of Scale',
      body: '<strong>Diseconomies of scale</strong> occur when LRAC rises as output increases beyond the optimal scale. Causes:<br><br>• <strong>Management coordination problems:</strong> larger organisations are harder to manage; communication slows; bureaucracy increases costs<br>• <strong>Industrial relations problems:</strong> large workforces are harder to motivate; union power increases; absenteeism and strikes more likely<br>• <strong>X-inefficiency:</strong> absence of competitive pressure in large dominant firms → management slack, unnecessary costs, failure to adopt best practice<br>• <strong>Loss of entrepreneurial dynamism:</strong> large firms lose the innovation culture of startups; bureaucracy stifles initiative<br><br>In practice, LRAC may not rise sharply — many industries have U-shaped LRAC with a long flat bottom (constant returns zone) before diseconomies.',
      keyTerms: [
        { term: 'Diseconomies of scale', def: 'LRAC rises at very large scales — management complexity, coordination costs, and X-inefficiency overwhelm economies of scale.' },
        { term: 'X-inefficiency', def: 'Productive inefficiency arising from lack of competitive pressure — firms produce at higher cost than the minimum possible.' },
        { term: 'Optimal scale', def: 'The output level at minimum LRAC — where economies of scale are fully exploited but before diseconomies set in.' }
      ],
      examEdge: 'X-inefficiency is one of the key costs of monopoly power. Without competitive pressure, managers have less incentive to minimise costs — the firm operates above its minimum cost frontier. Leibenstein (1966) estimated X-inefficiency costs could be larger than the standard deadweight loss triangle. This makes monopoly even more costly than standard models suggest.'
    },
    {
      id: 'long_run_costs_5',
      template: 'framing',
      title: 'Minimum Efficient Scale and Market Structure',
      body: 'The <strong>Minimum Efficient Scale (MES)</strong> determines whether an industry can support many small firms or must be dominated by a few large ones:<br><br>• If MES is small relative to market size → many firms can achieve minimum cost → competitive industry (hairdressers, cafes)<br>• If MES is large relative to market size → only a few firms can reach MES → oligopoly or natural monopoly (water distribution, railways, electricity networks)<br><br><strong>Natural monopoly:</strong> the LRAC is still falling at the output required to serve the whole market — a single firm can supply at lower cost than multiple competing firms. Market structure is inherently monopolistic. Government intervention needed to regulate price.',
      keyTerms: [
        { term: 'Minimum Efficient Scale', def: 'The output level where LRAC reaches its minimum — determines how many firms can efficiently operate in the market.' },
        { term: 'Natural monopoly', def: 'An industry where LRAC is still declining at market demand — one firm can serve the market at lower cost than two or more; sub-additive cost function.' },
        { term: 'Sub-additive cost', def: 'It costs less for one firm to produce total output than for two or more firms to divide production — the technical definition of natural monopoly.' }
      ],
      examEdge: 'Natural monopoly is the key economic justification for utility regulation (water, electricity networks, rail infrastructure). Since one firm can supply most cheaply, breaking it up increases costs — so competition is not the solution. Instead: regulate the price (RPI-X regulation in UK), require access by competitors (network access), or nationalise. Privatisation of UK water (1989) is a live debate — is re-nationalisation justified?'
    },
    {
      id: 'long_run_costs_6',
      template: 'diagnose',
      title: 'MES and Industry Structure: Examples',
      intro: 'MES relative to market size determines the typical number of firms in an industry.',
      rows: [
        { label: 'Industry', colA: 'Commercial aircraft', colB: 'Restaurants' },
        { label: 'MES relative to market', colA: 'Very large — development costs (\xa310-20bn per aircraft model), factory scale require near-global market to reach MES. Only 2 firms (Boeing, Airbus) can operate at MES globally.', colB: 'Very small — a single restaurant can reach its AC minimum serving a local area. No significant scale advantages beyond 1-3 locations. Thousands of firms co-exist.' },
        { label: 'Market structure', colA: 'Duopoly — two firms dominate globally. High barriers to entry: sunk cost of certification, engineering knowledge, supplier relationships. New entrant (COMAC China) struggling despite state backing.', colB: 'Near-perfect competition or monopolistic competition — easy entry, low barriers, differentiated products. Highly fragmented.' }
      ],
      footer: 'The range between aircraft (2 global firms) and restaurants (millions worldwide) illustrates how MES-driven scale economies determine market concentration. Competition policy and regulation are most needed where MES is large relative to the national market.',
      examEdge: 'The Boeing-Airbus duopoly is the premier oligopoly market structure example for A-level: high barriers (scale, certification, accumulated reputation), strategic interdependence, government subsidies used to achieve/maintain MES, and powerful strategic trade theory arguments for supporting domestic champions. All key market structure concepts visible in one market.'
    },
    {
      id: 'long_run_costs_7',
      template: 'framing',
      title: 'RPI-X Regulation of Natural Monopolies',
      body: 'UK utility regulation uses <strong>RPI-X (price cap regulation)</strong> to constrain natural monopoly pricing:<br><br>• Regulator sets a maximum annual price increase = RPI (inflation) minus X (efficiency improvement required)<br>• If RPI = 3% and X = 2%, the firm can raise prices by at most 1% per year in real terms<br>• The X factor is set based on the regulator\'s assessment of how much costs can be reduced<br>• Firm keeps all efficiency gains above X → incentive to innovate and cut costs<br><br><strong>Examples:</strong> Ofwat (water), Ofgem (energy), Ofcom (telecoms), ORR (rail). The system replaced nationalised industry pricing and has generally improved productive efficiency but faced criticism over investment underinvestment (UK water quality issues).',
      keyTerms: [
        { term: 'RPI-X regulation', def: 'Price cap regulation: maximum annual price increase = inflation minus efficiency improvement target. Incentivises cost reduction.' },
        { term: 'Price cap', def: 'Regulatory upper limit on prices — allows firm to keep efficiency gains above the cap, creating dynamic incentive.' },
        { term: 'Regulatory period', def: 'The period (typically 5 years) for which the X factor is set — reviewed and reset by the regulator.' }
      ],
      examEdge: 'RPI-X regulation is the best case study for evaluation of natural monopoly regulation. Strengths: incentivises efficiency (firm benefits from beating the target). Weaknesses: information asymmetry (firm knows its costs better than regulator → sets X too easy or too hard); underinvestment risk (caps create incentive to cut capex to boost short-run profit); regulatory capture risk. UK water companies: delivered efficiency but underinvested in infrastructure (sewage spills).',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
