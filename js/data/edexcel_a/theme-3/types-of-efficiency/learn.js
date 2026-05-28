window.ECONOS_TOPIC = {
  id: 'types-of-efficiency',
  topicNum: '4.1',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Types of Efficiency',
  estTime: '9-11 minutes',
  goal: 'Lock in productive, allocative, dynamic, and X-efficiency – their definitions, conditions, and how different market structures perform against each criterion.',
  intro: {
    heroKey: 'heroCostCurves',
    summary: 'Efficiency is economics\'s gold standard for evaluating markets. But there are four distinct types – and markets that perform well on one criterion may perform poorly on another. Understanding the trade-offs between them is essential for all market structure evaluation.',
    doInThis: 'Work through 7 cards covering productive efficiency, allocative efficiency, dynamic efficiency, X-efficiency, the efficiency conditions in different market structures, and how to evaluate market performance.',
    outcomes: [
      'Define and distinguish the four types of economic efficiency',
      'State the conditions for productive and allocative efficiency',
      'Explain why perfect competition achieves both static efficiency types but may underperform on dynamic efficiency',
      'Apply efficiency concepts to evaluate different market structures'
    ],
    tip: 'Productive efficiency: P = min AC (on the LRAC). Allocative efficiency: P = MC (resources to highest value use). Dynamic efficiency: long-run innovation and progress. X-efficiency: absence of management slack.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'efficiency_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Types of efficiency: the big picture',
      lede: 'Efficiency means different things – and market structures trade them against each other. Knowing which type matters is what separates B from A* answers.',
      branches: [
        { tone: 'green',  label: 'Productive',            sub: 'Production at minimum average cost – no waste. Achieved at the bottom of the LRAC curve.' },
        { tone: 'blue',   label: 'Allocative',            sub: 'Resources go to their highest-value uses: P = MC. Marginal benefit to consumers equals marginal cost of production.' },
        { tone: 'purple', label: 'Dynamic',               sub: 'Efficiency over time: innovation, R&D, product improvement. Requires retained profit – often missing in perfect competition.' },
        { tone: 'amber',  label: 'X-inefficiency',        sub: 'Costs above the minimum due to weak competitive pressure. Monopolies become slack; competition trims fat.' },
        { tone: 'rose',   label: 'Static vs dynamic',     sub: 'The policy dilemma: perfect competition is statically efficient but may be dynamically poor. Monopoly may be the reverse.' }
      ],
      body: '<strong>Productive efficiency</strong> is achieved when output is produced at the lowest possible average cost – the firm operates at the minimum point of the LRAC curve.<br><br><strong>Condition:</strong> P = minimum LRAC (long run) or MC = AC (minimum AC in short run).<br><br>Productively efficient firms are producing at minimum cost per unit – no waste of resources. The firm cannot reduce cost without reducing output.<br><br>In market structures: perfect competition achieves productive efficiency in the long run (competitive pressure forces firms to minimum AC or they are priced out). Monopoly may not achieve it (operates beyond or before minimum AC; lacks competitive pressure).',
      keyTerms: [
        { term: 'Productive efficiency', def: 'Production at minimum long-run average cost – no waste; resources fully and efficiently employed.' },
        { term: 'P = minimum LRAC', def: 'The condition for productive efficiency – price equals minimum long-run average cost.' },
        { term: 'Allocating resources to production', def: 'Productive efficiency focuses on HOW goods are produced (minimum cost); allocative efficiency focuses on WHAT goods are produced (best use).' }
      ],
      examEdge: 'Common confusion: "productive efficiency" does NOT mean the firm is on the PPF at the right point – that is allocative efficiency. Productive efficiency means being ON the PPF (or minimum AC) – it is about production efficiency, not allocation. A monopoly can be on its production frontier (no waste internally) but still be allocatively inefficient (P > MC).'
    },
    {
      id: 'efficiency_2',
      template: 'framing',
      diagramKey: 'allocativeEfficiencyDiagram',
      title: 'Allocative Efficiency',
      body: '<strong>Allocative efficiency</strong> is achieved when resources are allocated to their highest-value uses – producing the combination of goods and services that maximises social welfare.<br><br><strong>Condition:</strong> P = MC for every good. At this price, the marginal value to consumers (P) equals the marginal cost of production (MC) – no reallocation of resources can increase total welfare.<br><br>If P > MC: consumers value additional units more than they cost → too little is being produced → welfare gain from expanding output. If P < MC: additional units cost more than consumers value them → too much is being produced.<br><br>Competitive markets with no externalities achieve P = MC at equilibrium.',
      keyTerms: [
        { term: 'Allocative efficiency', def: 'P = MC – resources are allocated to their highest-value uses; social welfare is maximised.' },
        { term: 'P > MC', def: 'Allocative inefficiency: marginal value exceeds marginal cost → under-production. Typical of monopoly.' },
        { term: 'Social optimum', def: 'The combination of goods and services where MSB = MSC – requires P = MC with no externalities.' }
      ],
      examEdge: 'Monopoly fails allocative efficiency because it produces where MR = MC but charges P > MC. The gap (P − MC) represents a "mark-up" above competitive price – consumers pay more than the cost of the last unit. This is the welfare loss from monopoly. P = MC is achievable only under perfect competition (or with regulation forcing P = MC on a monopolist).'
    },
    {
      id: 'efficiency_3',
      template: 'framing',
      title: 'Dynamic Efficiency',
      body: '<strong>Dynamic efficiency</strong> refers to long-run improvements in productive capacity through innovation, technological progress, R&D, and investment in new products and processes. It is about how efficiently the economy improves over time, not just how efficiently it uses resources now.<br><br><strong>The tension:</strong><br>• Perfect competition → static efficiency (P = MC, min AC) but may lack dynamic efficiency (firms have no supernormal profit to fund R&D; competitive pressure leaves no slack for investment)<br>• Monopoly → lacks static efficiency (P > MC) but may have dynamic efficiency (supernormal profits fund R&D; scale enables large research investments; patent system incentivises innovation)<br><br>Schumpeter: monopoly profits are the reward for and incentive for innovation – "creative destruction."',
      keyTerms: [
        { term: 'Dynamic efficiency', def: 'Long-run improvement in productive capacity through innovation, R&D, and new products/processes.' },
        { term: 'Schumpeter\'s hypothesis', def: 'Larger firms with market power are better innovators – supernormal profit funds R&D; scale makes innovation feasible.' },
        { term: 'Creative destruction', def: 'Successful innovation replaces old industries and products – monopoly profits incentivise this destructive but beneficial process.' }
      ],
      examEdge: 'The static vs dynamic efficiency trade-off is the most important efficiency evaluation point for essays. Perfect competition: great static efficiency, potentially poor dynamic efficiency. Monopoly: poor static, potentially good dynamic. Most market structures trade off between the two – the optimal policy depends on which efficiency type matters more in the specific industry (mature vs innovative).'
    },
    {
      id: 'efficiency_4',
      template: 'framing',
      title: 'X-Efficiency',
      body: '<strong>X-efficiency</strong> (Leibenstein, 1966): a firm is X-efficient if it produces at the minimum cost possible given its resources – i.e., it is on the cost frontier, not inside it. X-inefficiency occurs when a firm could produce at lower cost but fails to due to lack of competitive pressure, management slack, or poor incentives.<br><br>Unlike productive efficiency (which requires producing at the minimum of the AC curve, a point about scale), X-efficiency is about whether the firm is operating at the minimum cost possible for its chosen scale. A monopolist may be at minimum AC for its output level but still be X-inefficient if it could reduce costs further with better management.<br><br>X-inefficiency is particularly common in: monopolies (no competitive pressure), public sector organisations (no profit motive), and over-staffed regulated industries.',
      keyTerms: [
        { term: 'X-efficiency', def: 'Producing at minimum cost possible for a given output and input combination – no waste or slack.' },
        { term: 'X-inefficiency', def: 'Producing above the cost frontier – due to management slack, poor incentives, or lack of competitive pressure.' },
        { term: 'Productive frontier', def: 'The minimum cost achievable for each output level given existing technology – X-efficient firm operates on this.' }
      ],
      examEdge: 'X-inefficiency is a key cost of monopoly beyond the deadweight loss triangle: the standard welfare diagram shows the DWL from P > MC; but X-inefficiency means the monopolist\'s cost curves are also higher than necessary. Total monopoly welfare cost = DWL from restricted output + X-inefficiency from management slack. This double impact is a powerful essay point.'
    },
    {
      id: 'efficiency_5',
      template: 'diagnose',
      title: 'Efficiency Across Market Structures',
      intro: 'A structured comparison of efficiency performance across the main market structures.',
      rows: [
        { label: 'Market structure', colA: 'Perfect competition', colB: 'Monopoly' },
        { label: 'Productive efficiency', colA: 'YES (long run): competitive pressure forces firms to minimum AC or they exit.', colB: 'NO: monopolist maximises profit at MR = MC; this output is below minimum AC (typically).' },
        { label: 'Allocative efficiency', colA: 'YES: P = MC in competitive equilibrium. No market power to raise P above MC.', colB: 'NO: P > MC. Deadweight welfare loss. Resources under-allocated to the monopoly good.' }
      ],
      footer: 'Dynamic efficiency: perfect competition performs poorly (no supernormal profit for R&D). Monopoly may perform better (supernormal profit funds innovation) but evidence is mixed – lack of competitive pressure can reduce innovation incentive.\n\nX-efficiency: perfect competition high (competitive pressure minimises waste). Monopoly low (management slack common without competitive discipline).',
      examEdge: 'Essay structure for market structure evaluation: always cover all four efficiency types, note where the structure performs well, and acknowledge trade-offs. A one-dimensional analysis (perfect competition is always better) misses the Schumpeterian argument and loses top-band marks. Balanced assessment is essential.'
    },
    {
      id: 'efficiency_6',
      template: 'framing',
      title: 'Social Efficiency',
      body: '<strong>Social efficiency</strong> (also called "optimal efficiency") is achieved where MSB = MSC – where social marginal benefit equals social marginal cost, incorporating externalities.<br><br>This extends allocative efficiency (P = MC) to include external costs and benefits. In competitive markets without externalities: P = MC = MSC, MSB = MPB = demand → social efficiency achieved. With negative externalities: MSC > MPC → market price understates true social cost → over-production → social inefficiency.<br><br>Social efficiency is the welfare economics benchmark: it is the output level that maximises total social welfare including all externalities. It is almost never fully achieved in practice – it requires both competitive markets AND absence of externalities.',
      keyTerms: [
        { term: 'Social efficiency', def: 'MSB = MSC – the combination of goods that maximises total social welfare including externalities.' },
        { term: 'Welfare maximisation', def: 'Achieved at social efficiency – no reallocation of resources can increase total society-wide welfare.' },
        { term: 'Double market failure', def: 'Monopoly AND negative externality simultaneously: P > MC (allocative inefficiency) AND MSC > MPC (externality). Outcome is very far from social optimum.' }
      ],
      examEdge: 'The concept of a "socially optimal" output level is used throughout the syllabus – externalities, public goods, merit goods, and monopoly all involve divergence from social optimum. Being precise about what "social optimum" means (MSB = MSC) and why the market fails to reach it is a mark of analytical precision that distinguishes top-band answers.'
    },
    {
      id: 'efficiency_7',
      template: 'paired',
      title: 'Static vs Dynamic Efficiency: The Policy Dilemma',
      left: {
        label: 'Prioritise static efficiency',
        points: [
          'Break up monopolies → more competition → P = MC → allocative efficiency',
          'Regulate prices of natural monopolies → force P toward MC',
          'Block mergers that increase market concentration',
          'Consumers benefit from lower prices now',
          'Risk: insufficient R&D investment → long-run productivity falls'
        ]
      },
      right: {
        label: 'Prioritise dynamic efficiency',
        points: [
          'Allow monopoly profits to incentivise R&D (patent system)',
          'Permit large mergers if they generate scale economies and innovation',
          'Government funds basic research where private R&D is insufficient',
          'Consumers benefit from better products and lower costs in the future',
          'Risk: short-run consumer exploitation; supernormal profit becomes entrenched'
        ]
      },
      examEdge: 'Pharmaceutical industry: perfect static efficiency (P = MC) would mean generic drugs immediately, no patent. But this destroys dynamic efficiency (no incentive to spend £2bn developing a new drug). Patent system trades 20 years of monopoly pricing for long-run pharmaceutical innovation. This is the deliberate statutory trade-off between static and dynamic efficiency – and a superb exam example.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0
   These questions used to live at /quiz/<topic>/<set> as a
   standalone shell. They now ride along with the Learn It data
   under the same window.ECONOS_QUIZ global. The /quiz/ URL
   contract is gone; the quiz is the natural finisher to the
   Learn It journey, so the data lives next to learn cards.
   ============================================================ */
/* ---- quiz-main.js (quiz pool, preserved from former /quiz/ shell) ---- */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Efficiency',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.routes.learn('types-of-efficiency'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers allocative, productive, dynamic, and X-inefficiency',
    shortNames: [
      'Allocative eff.','Productive eff.','Dynamic eff.','X-inefficiency','Pareto efficiency',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'Allocative efficiency is achieved when:',
        opts: [
          'Firms produce at minimum average cost',
          'Price equals marginal cost (P = MC)',
          'All resources are fully employed',
          'A firm earns only normal profit'
        ],
        ans:  1,
        exp:  'Allocative efficiency means resources are allocated to their highest-value use. This occurs when P = MC: price reflects both what consumers value the last unit at and what it costs society to produce it.'
      },
      {
        type: 'mcq',
        q:    'Productive efficiency requires that firms produce:',
        opts: [
          'Where price equals marginal cost',
          'At the output that maximises total revenue',
          'At the lowest point on the average cost curve',
          'Where marginal revenue equals marginal cost'
        ],
        ans:  2,
        exp:  'Productive efficiency is achieved when output is produced at minimum average cost – the firm is on the lowest point of its long-run average cost curve, using resources without waste.'
      },
      {
        type: 'mcq',
        q:    'Dynamic efficiency refers to:',
        opts: [
          'Producing the current level of output at minimum cost',
          'Prices equalling marginal cost in all markets simultaneously',
          'Innovation, R&D, and new product development over time',
          'Eliminating X-inefficiency within a firm'
        ],
        ans:  2,
        exp:  'Dynamic efficiency occurs when firms invest in research and development, producing new products and better production methods over time. It is a benefit sometimes associated with monopoly (funded by supernormal profit).'
      },
      {
        type: 'mcq',
        q:    'X-inefficiency is most likely to occur when:',
        opts: [
          'Firms face intense competition and must minimise costs',
          'A firm faces little competitive pressure and allows costs to rise above minimum',
          'Firms invest heavily in automation to reduce unit costs',
          'Price equals marginal cost across the industry'
        ],
        ans:  1,
        exp:  'X-inefficiency (Leibenstein) refers to unnecessary internal cost inflation caused by managerial slack, lack of discipline, or absence of competitive pressure. Monopolies are especially prone to it.'
      },
      {
        type: 'numeric_input',
        q:    'A firm produces 500 units at AC = £8. Its technically minimum AC is £6. Calculate the total X-inefficiency cost.',
        answer: 1000,
        tolerance: 0,
        unit: '£',
        hint: 'X-ineff cost = (AC − min AC) × Q.',
        workingSteps: ['Excess cost per unit = £8 − £6 = £2','Total X-inefficiency = £2 × 500 = £1,000']
      },
      {
        type: 'categorise',
        q:    'Categorise each condition as evidence of allocative efficiency or productive efficiency.',
        categories: ['Allocative efficiency','Productive efficiency'],
        items: [
          { item: 'P = MC',                              category: 'Allocative efficiency' },
          { item: 'Output at minimum AC',                category: 'Productive efficiency' },
          { item: 'No deadweight welfare loss',          category: 'Allocative efficiency' },
          { item: 'No productive waste in production',   category: 'Productive efficiency' },
          { item: 'Resources match consumer preferences',category: 'Allocative efficiency' },
          { item: 'Minimum efficient scale achieved',    category: 'Productive efficiency' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each cause to its effect on economic efficiency.',
        pairs: [
          { cause: 'Monopolist sets P > MC',              effect: 'Allocative inefficiency arises' },
          { cause: 'Intense competition forces cost cuts',effect: 'X-inefficiency is eliminated' },
          { cause: 'Supernormal profit funds R&D',        effect: 'Dynamic efficiency increases over time' },
          { cause: 'Firm produces at min AC',             effect: 'Productive efficiency achieved' },
          { cause: 'Resources flow to highest-value use', effect: 'Allocative efficiency is achieved' },
          { cause: 'Lack of competitive pressure',        effect: 'X-inefficiency and cost inflation develop' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Allocative efficiency','Productive efficiency','X-inefficiency','Dynamic efficiency'],
        ans:  2,
        exp:  'Allocative, productive, and dynamic efficiency are all desirable economic states. X-inefficiency is an undesirable outcome – unnecessary cost inflation from lack of competitive pressure.'
      },
      {
        type: 'data_table',
        q:    'Use the table to identify which firm is productively efficient.',
        tableHeaders: ['Firm','Output (Q)','TC (£)','AC (£)','Min AC (£)'],
        tableData: [
          ['Alpha','100','600','6.00','5.50'],
          ['Beta','200','1,000','5.00','5.00'],
          ['Gamma','150','900','6.00','5.00'],
          ['Delta','80','560','7.00','5.50']
        ],
        opts: ['Alpha','Beta','Gamma','Delta'],
        ans:  1,
        exp:  'Productive efficiency requires AC = minimum AC. Only Beta achieves this: AC = £5.00 = min AC. The other firms all operate above their minimum average cost.'
      },
      {
        type: 'match_pairs',
        q:    'Match each efficiency concept to its correct description.',
        pairs: [
          { a: 'Allocative efficiency',  b: 'P = MC; resources flow to highest-value uses' },
          { a: 'Productive efficiency',  b: 'Production at minimum average cost' },
          { a: 'Dynamic efficiency',     b: 'Innovation and improvement in products over time' },
          { a: 'X-inefficiency',         b: 'Avoidable costs rising above minimum due to competitive slack' },
          { a: 'Pareto efficiency',      b: 'Cannot make one person better off without making another worse off' },
          { a: 'Deadweight loss',        b: 'Welfare lost when output is below the allocatively efficient level' }
        ]
      }
    ]
  };

})();

