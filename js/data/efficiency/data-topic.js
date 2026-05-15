window.ECONOS_TOPIC = {
  id: 'efficiency',
  topicNum: '3.6',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Types of Efficiency',
  estTime: '9-11 minutes',
  goal: 'Lock in productive, allocative, dynamic, and X-efficiency — their definitions, conditions, and how different market structures perform against each criterion.',
  intro: {
    heroKey: 'heroCostCurves',
    summary: 'Efficiency is economics\'s gold standard for evaluating markets. But there are four distinct types — and markets that perform well on one criterion may perform poorly on another. Understanding the trade-offs between them is essential for all market structure evaluation.',
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
      lede: 'Efficiency means different things — and market structures trade them against each other. Knowing which type matters is what separates B from A* answers.',
      branches: [
        { tone: 'green',  label: 'Productive',            sub: 'Production at minimum average cost — no waste. Achieved at the bottom of the LRAC curve.' },
        { tone: 'blue',   label: 'Allocative',            sub: 'Resources go to their highest-value uses: P = MC. Marginal benefit to consumers equals marginal cost of production.' },
        { tone: 'purple', label: 'Dynamic',               sub: 'Efficiency over time: innovation, R&D, product improvement. Requires retained profit — often missing in perfect competition.' },
        { tone: 'amber',  label: 'X-inefficiency',        sub: 'Costs above the minimum due to weak competitive pressure. Monopolies become slack; competition trims fat.' },
        { tone: 'rose',   label: 'Static vs dynamic',     sub: 'The policy dilemma: perfect competition is statically efficient but may be dynamically poor. Monopoly may be the reverse.' }
      ],
      body: '<strong>Productive efficiency</strong> is achieved when output is produced at the lowest possible average cost — the firm operates at the minimum point of the LRAC curve.<br><br><strong>Condition:</strong> P = minimum LRAC (long run) or MC = AC (minimum AC in short run).<br><br>Productively efficient firms are producing at minimum cost per unit — no waste of resources. The firm cannot reduce cost without reducing output.<br><br>In market structures: perfect competition achieves productive efficiency in the long run (competitive pressure forces firms to minimum AC or they are priced out). Monopoly may not achieve it (operates beyond or before minimum AC; lacks competitive pressure).',
      keyTerms: [
        { term: 'Productive efficiency', def: 'Production at minimum long-run average cost — no waste; resources fully and efficiently employed.' },
        { term: 'P = minimum LRAC', def: 'The condition for productive efficiency — price equals minimum long-run average cost.' },
        { term: 'Allocating resources to production', def: 'Productive efficiency focuses on HOW goods are produced (minimum cost); allocative efficiency focuses on WHAT goods are produced (best use).' }
      ],
      examEdge: 'Common confusion: "productive efficiency" does NOT mean the firm is on the PPF at the right point — that is allocative efficiency. Productive efficiency means being ON the PPF (or minimum AC) — it is about production efficiency, not allocation. A monopoly can be on its production frontier (no waste internally) but still be allocatively inefficient (P > MC).'
    },
    {
      id: 'efficiency_2',
      template: 'framing',
      diagramKey: 'allocativeEfficiencyDiagram',
      title: 'Allocative Efficiency',
      body: '<strong>Allocative efficiency</strong> is achieved when resources are allocated to their highest-value uses — producing the combination of goods and services that maximises social welfare.<br><br><strong>Condition:</strong> P = MC for every good. At this price, the marginal value to consumers (P) equals the marginal cost of production (MC) — no reallocation of resources can increase total welfare.<br><br>If P > MC: consumers value additional units more than they cost → too little is being produced → welfare gain from expanding output. If P < MC: additional units cost more than consumers value them → too much is being produced.<br><br>Competitive markets with no externalities achieve P = MC at equilibrium.',
      keyTerms: [
        { term: 'Allocative efficiency', def: 'P = MC — resources are allocated to their highest-value uses; social welfare is maximised.' },
        { term: 'P > MC', def: 'Allocative inefficiency: marginal value exceeds marginal cost → under-production. Typical of monopoly.' },
        { term: 'Social optimum', def: 'The combination of goods and services where MSB = MSC — requires P = MC with no externalities.' }
      ],
      examEdge: 'Monopoly fails allocative efficiency because it produces where MR = MC but charges P > MC. The gap (P − MC) represents a "mark-up" above competitive price — consumers pay more than the cost of the last unit. This is the welfare loss from monopoly. P = MC is achievable only under perfect competition (or with regulation forcing P = MC on a monopolist).'
    },
    {
      id: 'efficiency_3',
      template: 'framing',
      title: 'Dynamic Efficiency',
      body: '<strong>Dynamic efficiency</strong> refers to long-run improvements in productive capacity through innovation, technological progress, R&D, and investment in new products and processes. It is about how efficiently the economy improves over time, not just how efficiently it uses resources now.<br><br><strong>The tension:</strong><br>• Perfect competition → static efficiency (P = MC, min AC) but may lack dynamic efficiency (firms have no supernormal profit to fund R&D; competitive pressure leaves no slack for investment)<br>• Monopoly → lacks static efficiency (P > MC) but may have dynamic efficiency (supernormal profits fund R&D; scale enables large research investments; patent system incentivises innovation)<br><br>Schumpeter: monopoly profits are the reward for and incentive for innovation — "creative destruction."',
      keyTerms: [
        { term: 'Dynamic efficiency', def: 'Long-run improvement in productive capacity through innovation, R&D, and new products/processes.' },
        { term: 'Schumpeter\'s hypothesis', def: 'Larger firms with market power are better innovators — supernormal profit funds R&D; scale makes innovation feasible.' },
        { term: 'Creative destruction', def: 'Successful innovation replaces old industries and products — monopoly profits incentivise this destructive but beneficial process.' }
      ],
      examEdge: 'The static vs dynamic efficiency trade-off is the most important efficiency evaluation point for essays. Perfect competition: great static efficiency, potentially poor dynamic efficiency. Monopoly: poor static, potentially good dynamic. Most market structures trade off between the two — the optimal policy depends on which efficiency type matters more in the specific industry (mature vs innovative).'
    },
    {
      id: 'efficiency_4',
      template: 'framing',
      title: 'X-Efficiency',
      body: '<strong>X-efficiency</strong> (Leibenstein, 1966): a firm is X-efficient if it produces at the minimum cost possible given its resources — i.e., it is on the cost frontier, not inside it. X-inefficiency occurs when a firm could produce at lower cost but fails to due to lack of competitive pressure, management slack, or poor incentives.<br><br>Unlike productive efficiency (which requires producing at the minimum of the AC curve, a point about scale), X-efficiency is about whether the firm is operating at the minimum cost possible for its chosen scale. A monopolist may be at minimum AC for its output level but still be X-inefficient if it could reduce costs further with better management.<br><br>X-inefficiency is particularly common in: monopolies (no competitive pressure), public sector organisations (no profit motive), and over-staffed regulated industries.',
      keyTerms: [
        { term: 'X-efficiency', def: 'Producing at minimum cost possible for a given output and input combination — no waste or slack.' },
        { term: 'X-inefficiency', def: 'Producing above the cost frontier — due to management slack, poor incentives, or lack of competitive pressure.' },
        { term: 'Productive frontier', def: 'The minimum cost achievable for each output level given existing technology — X-efficient firm operates on this.' }
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
      footer: 'Dynamic efficiency: perfect competition performs poorly (no supernormal profit for R&D). Monopoly may perform better (supernormal profit funds innovation) but evidence is mixed — lack of competitive pressure can reduce innovation incentive.\n\nX-efficiency: perfect competition high (competitive pressure minimises waste). Monopoly low (management slack common without competitive discipline).',
      examEdge: 'Essay structure for market structure evaluation: always cover all four efficiency types, note where the structure performs well, and acknowledge trade-offs. A one-dimensional analysis (perfect competition is always better) misses the Schumpeterian argument and loses top-band marks. Balanced assessment is essential.'
    },
    {
      id: 'efficiency_6',
      template: 'framing',
      title: 'Social Efficiency',
      body: '<strong>Social efficiency</strong> (also called "optimal efficiency") is achieved where MSB = MSC — where social marginal benefit equals social marginal cost, incorporating externalities.<br><br>This extends allocative efficiency (P = MC) to include external costs and benefits. In competitive markets without externalities: P = MC = MSC, MSB = MPB = demand → social efficiency achieved. With negative externalities: MSC > MPC → market price understates true social cost → over-production → social inefficiency.<br><br>Social efficiency is the welfare economics benchmark: it is the output level that maximises total social welfare including all externalities. It is almost never fully achieved in practice — it requires both competitive markets AND absence of externalities.',
      keyTerms: [
        { term: 'Social efficiency', def: 'MSB = MSC — the combination of goods that maximises total social welfare including externalities.' },
        { term: 'Welfare maximisation', def: 'Achieved at social efficiency — no reallocation of resources can increase total society-wide welfare.' },
        { term: 'Double market failure', def: 'Monopoly AND negative externality simultaneously: P > MC (allocative inefficiency) AND MSC > MPC (externality). Outcome is very far from social optimum.' }
      ],
      examEdge: 'The concept of a "socially optimal" output level is used throughout the syllabus — externalities, public goods, merit goods, and monopoly all involve divergence from social optimum. Being precise about what "social optimum" means (MSB = MSC) and why the market fails to reach it is a mark of analytical precision that distinguishes top-band answers.'
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
      examEdge: 'Pharmaceutical industry: perfect static efficiency (P = MC) would mean generic drugs immediately, no patent. But this destroys dynamic efficiency (no incentive to spend £2bn developing a new drug). Patent system trades 20 years of monopoly pricing for long-run pharmaceutical innovation. This is the deliberate statutory trade-off between static and dynamic efficiency — and a superb exam example.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'eff-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: efficiency',
      question: 'Evaluate the view that perfect competition achieves a more efficient allocation of resources than monopoly. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define allocative, productive, and dynamic efficiency. Introduce the comparison between perfect competition and monopoly across all three efficiency concepts.',
          hint: 'Allocative efficiency: P = MC (resources go where valued most). Productive efficiency: production at minimum AC. Dynamic efficiency: innovation and long-run cost reduction. X-efficiency: no slack within the firm. Perfect competition achieves static efficiency; monopoly may have dynamic advantages.',
          model: 'Efficiency in economics encompasses multiple dimensions: allocative efficiency (P = MC, so output is at the socially optimal level), productive efficiency (output at minimum average cost, eliminating waste), dynamic efficiency (ongoing investment in R&D and innovation), and X-efficiency (absence of managerial slack within firms). Perfect competition is widely regarded as the benchmark for static efficiency, as the long-run equilibrium produces at P = MC = minimum AC. Monopoly, by contrast, restricts output and sets P > MC, creating deadweight welfare loss. However, the comparison is more nuanced across all efficiency dimensions, and particularly when dynamic considerations are incorporated. This essay evaluates whether perfect competition or monopoly achieves the more efficient outcome overall.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — Perfect competition achieves allocative and productive efficiency',
          prompt: 'Explain how competitive pressure forces firms to the long-run equilibrium P = MC = minimum AC, achieving both allocative and productive efficiency simultaneously. Contrast with monopoly\'s equilibrium where P > MC and output is restricted.',
          hint: 'Perfect competition LR equilibrium: P = MC = min AC (normal profit). Monopoly: P > MC (allocative inefficiency) and MC = MR ≠ min AC (typically not productively efficient). Deadweight loss triangle. No supernormal profit in LR for PC → no incentive to restrict output.',
          model: 'In the long-run equilibrium of perfect competition, free entry eliminates supernormal profit, forcing each firm to produce where P = MC = minimum average cost — simultaneously achieving both allocative efficiency (resources flow to their highest-valued use) and productive efficiency (no waste). Consumers pay a price equal to the true marginal cost of the last unit, and production occurs at the most technically efficient scale. Monopoly fails on both counts: the profit-maximising condition MR = MC leads to an equilibrium where P > MC, meaning the last unit produced is valued more by consumers than it costs to produce — a socially suboptimal restriction of output. The resulting deadweight welfare loss triangle represents permanently forgone gains from trade and constitutes a clear efficiency failure relative to the competitive benchmark.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — Perfect competition also eliminates X-inefficiency through competitive pressure',
          prompt: 'Explain how the constant threat of losing market share to equally efficient competitors in a perfectly competitive market forces firms to minimise costs and eliminate managerial slack, while monopolists face no such discipline.',
          hint: 'Monopoly: no competitive pressure → managers may pursue quiet life (Hicks), organisational slack, higher costs. X-inefficiency: actual costs above minimum possible. Perfect competition: any firm with costs above MC loses customers → eliminated. Empirical: nationalised monopolies vs privatised firms.',
          model: 'Beyond the allocative and productive efficiency comparisons, perfect competition generates X-efficiency — the absence of managerial slack — through the constant competitive discipline of market entry and rivalry. Any firm with costs above the competitive minimum loses customers to more efficient rivals, creating an existential incentive to minimise waste, optimise processes, and eliminate organisational slack. Monopolists, shielded from competitive pressure by barriers to entry, face no such discipline: John Hicks observed that "the best of all monopoly profits is a quiet life." Empirical evidence from the UK\'s privatisation programme — British Telecom, British Gas, British Airways — suggests that exposure to competition (not merely private ownership) reduced costs and improved productivity, consistent with the X-efficiency argument.'
        },
        {
          type: 'counter',
          label: 'Counter — Monopoly may achieve superior dynamic efficiency through R&D investment',
          prompt: 'Argue that monopoly supernormal profits provide the financial resources and incentive for R&D investment, generating dynamic efficiency gains that may outweigh static efficiency losses over the long run.',
          hint: 'Schumpeter\'s creative destruction: monopoly profits fund R&D that destroys existing monopolies. Patents protect innovation returns. Pharmaceutical R&D: £2bn per drug. Perfect competition (normal profits only) → no funds or incentive for costly, risky R&D. Dynamic efficiency: iPhones, vaccines, electric vehicles.',
          model: 'Joseph Schumpeter argued that the pursuit of monopoly profits is the primary driver of innovation and dynamic efficiency in capitalist economies. The prospect of supernormal profit from a successful innovation motivates costly, risky R&D investment — a rational calculation that requires the expectation of a period of market power to recover the upfront cost. Pharmaceutical companies spend approximately £2bn developing a new drug over 12–15 years, an investment feasible only because patent protection creates a temporary monopoly that allows recovery of this cost. Perfect competition, by eliminating supernormal profits, also eliminates the financial resources and incentive for such R&D. Schumpeter\'s "creative destruction" — where innovative monopolists are periodically displaced by newer innovators — suggests that dynamic efficiency under monopoly may deliver greater long-run welfare than the static efficiency of perfect competition.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — The efficiency comparison depends on industry characteristics',
          prompt: 'Evaluate how the nature of the industry (natural monopoly, R&D intensity, information asymmetry) determines whether the static efficiency of competition or the dynamic advantages of monopoly deliver greater welfare.',
          hint: 'Natural monopoly: competition wasteful (duplicate infrastructure). R&D-intensive sectors: dynamic efficiency paramount. Homogeneous commodity markets: static efficiency most important. Regulation can capture monopoly scale while limiting static losses (RPI-X).',
          model: 'The relative efficiency of competition versus monopoly is highly industry-specific. In natural monopoly industries — water, electricity networks, railways — duplication of infrastructure would be technically inefficient, and a regulated monopoly achieves productive efficiency at lower cost than competition. In R&D-intensive sectors (pharmaceuticals, aerospace, semiconductors), the dynamic efficiency case for protected monopoly is strongest: the welfare gains from innovation far exceed the static deadweight loss from monopoly pricing. In homogeneous commodity markets (wheat, cement), where innovation opportunities are limited and scale economies are modest, competitive markets deliver superior allocative efficiency without meaningful dynamic trade-offs. This context-dependency explains why competition policy takes a case-by-case approach rather than mandating competition in all markets.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Reach a judgement: does perfect competition achieve more efficient outcomes than monopoly overall?',
          hint: 'For static efficiency: yes, clearly. For dynamic efficiency: depends on industry. Overall: regulated markets that combine competitive elements with appropriate protection for innovation represent the most efficient outcome. Policy should target competition where dynamic gains are limited and R&D protection where they are large.',
          model: 'In conclusion, perfect competition unambiguously achieves superior static efficiency — allocative, productive, and X-efficiency — compared to unregulated monopoly. The deadweight welfare loss and X-inefficiency of monopoly represent real costs to consumers and society. However, in dynamic terms, the comparison is more nuanced: monopoly profits and patent protection drive the R&D investment responsible for the most transformative long-run welfare improvements, from life-saving drugs to digital technologies. The most efficient market structure is therefore industry-dependent: competitive markets should be promoted where innovation opportunities are limited and scale economies modest, while regulated monopoly or patent-protected competition is appropriate in R&D-intensive industries. Competition policy that reflexively breaks up all concentration without considering dynamic efficiency — or that tolerates monopoly power without regulatory oversight — will fail to maximise overall welfare.'
        }
      ]
    }
  ]
};
