window.ECONOS_TOPIC = {
  id: 'perfect_competition',
  topicNum: '4.2',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Perfect Competition',
  estTime: '9-11 minutes',
  goal: 'Lock in the assumptions, short-run and long-run equilibria, efficiency properties, and limitations of the perfect competition model.',
  intro: {
    heroKey: 'heroFirm',
    summary: 'Perfect competition is the theoretical benchmark against which all other market structures are measured. Understanding its assumptions and equilibrium conditions enables rigorous evaluation of real markets that diverge from this ideal.',
    doInThis: 'Work through 8 cards covering the five assumptions, the price-taking firm, short-run profit and loss, long-run equilibrium, efficiency analysis, evaluation of the model\'s realism, and a 25-mark essay scaffold comparing perfect competition with monopoly.',
    outcomes: [
      'State the five assumptions of perfect competition and explain their implications',
      'Draw and interpret short-run supernormal profit, normal profit, and loss diagrams',
      'Explain the long-run adjustment process that eliminates supernormal profit',
      'Evaluate the efficiency properties of perfect competition and assess model limitations'
    ],
    tip: 'Short run: MR = MC determines output; compare P to AC to find profit/loss. Long run: entry/exit drives P = AC (normal profit). The long-run equilibrium has P = MC = AC = MR – all efficiency conditions satisfied simultaneously.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'perfect_competition_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Perfect competition: the big picture',
      lede: 'A theoretical benchmark, not a description of reality – and that\'s exactly what makes it useful for judging every other market.',
      branches: [
        { tone: 'green', label: 'Five strict assumptions', sub: 'Many price-takers, homogeneous product, perfect information, free entry and exit, mobile factors. The full set delivers efficiency.' },
        { tone: 'blue',  label: 'Price-taking firm',       sub: 'AR = MR = P horizontal at the market price. Firm decides only how much to produce – never what to charge.' },
        { tone: 'amber', label: 'Entry erodes profit',     sub: 'Short-run supernormal profit attracts entrants until price falls to AC. Long-run profit = normal.' },
        { tone: 'purple', label: 'The efficiency benchmark', sub: 'In long-run equilibrium: P = MC = minimum AC. Allocative and productive efficiency together – the yardstick for every other structure.' }
      ],
      body: 'Perfect competition has five key assumptions:<br><br>1. <strong>Many buyers and sellers:</strong> no single participant can influence price – all are price-takers.<br>2. <strong>Homogeneous product:</strong> identical goods – no brand differentiation; buyers are indifferent between sellers.<br>3. <strong>Perfect information:</strong> all buyers and sellers know all prices – no search costs.<br>4. <strong>No barriers to entry or exit:</strong> firms can freely enter profitable markets and exit unprofitable ones – any supernormal profit is competed away.<br>5. <strong>Factor mobility:</strong> resources can move freely between uses – labour and capital respond to price signals.',
      keyTerms: [
        { term: 'Price-taker', def: 'A firm that has no pricing power – must accept the market price. Cannot raise price without losing all customers (infinite PED).' },
        { term: 'Homogeneous product', def: 'Goods are identical – no differentiation between sellers\' products. Buyers choose purely on price.' },
        { term: 'No barriers to entry', def: 'Free entry ensures supernormal profits attract new firms until profits fall to normal – the key competitive discipline.' }
      ],
      examEdge: 'Each assumption generates a specific market prediction. No barriers to entry → long-run normal profit. Homogeneous product + perfect information → P = MC (firm cannot charge above market price). Factor mobility → long-run efficiency. Evaluating real markets against these assumptions reveals WHY they fail to achieve competitive outcomes.'
    },
    {
      id: 'perfect_competition_2',
      template: 'framing',
      title: 'The Perfectly Competitive Firm: Demand and Revenue',
      body: 'A perfectly competitive firm faces a <strong>perfectly elastic demand curve</strong> at the market price. This is because:<br>• The product is homogeneous – any price above market price loses all sales to identical rivals<br>• Perfect information – buyers know all prices immediately<br><br>Consequences:<br>• AR = MR = P (horizontal demand curve at market price)<br>• Any output can be sold at P – firm has no pricing decision<br>• Only decision: how much to produce<br><br>The market as a whole has a downward-sloping demand curve – price is determined by industry supply and demand. The individual firm takes this price as given.',
      keyTerms: [
        { term: 'Perfectly elastic demand (PED = ∞)', def: 'Any price rise above market price → zero demand. Firm is a price-taker. Horizontal demand curve.' },
        { term: 'AR = MR = P', def: 'For a perfectly competitive firm: average revenue equals marginal revenue equals price – since P is constant at all quantities.' },
        { term: 'Market vs firm diagrams', def: 'Two diagrams needed: market diagram (D and S with equilibrium price); individual firm diagram (horizontal demand at market price, plus AC and MC).' }
      ],
      examEdge: 'The two-diagram approach is essential for perfect competition exam questions: draw the market diagram (D and S → equilibrium price P*) AND the firm diagram (horizontal demand at P*, with MC and AC). Show profit/loss on the firm diagram. Changes in market conditions shift the market diagram, changing P*, which then shifts the firm\'s demand line.'
    },
    {
      id: 'perfect_competition_3',
      template: 'mechanisms',
      diagramKey: 'profitsShutdownDiagram',
      title: 'Short-Run Equilibrium: Three Cases',
      intro: 'In the short run, a perfectly competitive firm can make supernormal profit, normal profit, or a loss – depending on where market price P sits relative to its cost curves.',
      steps: [
        { label: 'Supernormal profit (P > AC at Q*)', text: 'P lies above AC at the profit-maximising output (MR = MC). Profit rectangle = (P − AC) \xd7 Q*. Shaded area above AC, below P, from 0 to Q*.' },
        { label: 'Normal profit (P = AC at Q*)', text: 'P exactly equals AC at the profit-maximising output. Zero economic profit – firm just covers all costs including opportunity cost. TR = TC.' },
        { label: 'Economic loss (AVC < P < AC)', text: 'P below AC but above AVC at Q*. Firm continues producing (P ≥ AVC → positive contribution to fixed costs). Loss = (AC − P) \xd7 Q*. Smaller than loss if firm shuts down (which would be FC).' },
        { label: 'Shutdown (P < AVC)', text: 'Revenue doesn\'t cover even variable costs. Output = 0. Loss = FC. Best of bad options.' }
      ],
      examEdge: 'The short-run diagram is highly testable. Given a price level, determine: find Q* (MR = MC), read off AC at Q*, compare P to AC. Supernormal if P > AC; loss if P < AC. Always use Q* (profit-max output) to read off AC – not the minimum point of AC.'
    },
    {
      id: 'perfect_competition_4',
      template: 'mechanisms',
      title: 'Long-Run Adjustment: Entry and Exit',
      intro: 'In the long run, free entry and exit eliminate supernormal profits and economic losses.',
      steps: [
        { label: 'From supernormal profit', text: 'P > AC → supernormal profit → new firms enter (no barriers) → market supply increases → price falls → each firm\'s demand curve (horizontal at P) shifts down → supernormal profit eroded → long-run: P = AC.' },
        { label: 'From economic loss', text: 'P < AC → loss → some firms exit → market supply decreases → price rises → each firm\'s demand line shifts up → losses disappear → long-run: P = AC.' },
        { label: 'Long-run equilibrium', text: 'P = AC → normal profit. All firms earn zero economic profit. No incentive to enter or exit. Stable equilibrium.' },
        { label: 'Efficiency at LR equilibrium', text: 'At long-run equilibrium, P = MC = AC = MR for the individual firm. This simultaneously achieves allocative efficiency (P = MC) and productive efficiency (P = min AC).' }
      ],
      examEdge: 'The long-run adjustment diagram shows: initial supernormal profit → entry → supply curve in market shifts right → market price falls → new firm diagram at lower price → AC = P (tangency at minimum). Drawing both diagrams for each stage earns high marks for process understanding.'
    },
    {
      id: 'perfect_competition_5',
      template: 'framing',
      title: 'Efficiency in Perfect Competition',
      body: 'The long-run perfectly competitive equilibrium simultaneously achieves multiple efficiency conditions:<br><br>• <strong>Productive efficiency:</strong> P = minimum AC – firms produce at lowest unit cost<br>• <strong>Allocative efficiency:</strong> P = MC – resources allocated to highest value use<br>• <strong>Maximum consumer surplus:</strong> competitive price is lower than monopoly price – larger consumer surplus<br>• <strong>Zero supernormal profit:</strong> no transfer of surplus to producers at consumers\' expense<br><br>This is why perfect competition is the welfare economics benchmark – it simultaneously achieves the maximum consumer surplus, minimum cost, and optimal resource allocation that any market can deliver (absent externalities).',
      keyTerms: [
        { term: 'Long-run equilibrium condition', def: 'P = MR = MC = AR = minimum LRAC. All efficiency conditions met simultaneously.' },
        { term: 'Consumer surplus maximisation', def: 'Competitive price is the lowest consistent with normal profit – maximises area between demand and price line.' },
        { term: 'Zero economic rent', def: 'No supernormal profits persist in the long run – all surplus accrues to consumers.' }
      ],
      examEdge: 'Perfect competition achieves: maximum CS, zero producer surplus above normal profit, P = MC, P = min AC – all simultaneously. No other market structure achieves all of these. This is why economists use it as the benchmark and why competition policy aims to make real markets more competitive.'
    },
    {
      id: 'perfect_competition_6',
      template: 'paired',
      title: 'Perfect Competition: Strengths and Limitations',
      left: {
        label: 'Strengths of the model',
        points: [
          'Clear theoretical benchmark for efficiency evaluation',
          'Demonstrates why competition promotes consumer welfare',
          'Entry/exit mechanism explains price dynamics in commodity markets',
          'Some real markets approximate PC: agricultural commodities, some financial markets',
          'MR = P insight explains price-taking behaviour even in imperfect markets'
        ]
      },
      right: {
        label: 'Limitations/criticisms',
        points: [
          'Homogeneous product: almost no real markets – branding, quality, service all differentiate',
          'Perfect information: search costs are real; information is costly',
          'Instant entry/exit: capital-specific investments, contracts, and setup costs mean entry takes time',
          'May underperform on dynamic efficiency: competitive pressure leaves no profit for R&D',
          'Ignores economies of scale: if MES is large, competition may be unsustainable'
        ]
      },
      examEdge: 'The closest real-world approximations to perfect competition: world commodity markets (wheat, coffee futures – standardised; many traders; transparent prices). Foreign exchange market (many traders, identical products). These markets behave approximately as the theory predicts. All other markets diverge significantly from the model.'
    },
    {
      id: 'perfect_competition_7',
      template: 'framing',
      title: 'Perfect Competition and Dynamic Efficiency',
      body: 'Perfect competition may paradoxically underperform on dynamic efficiency despite its static advantages:<br><br>• Firms earn only normal profit in the long run → no retained profits for R&D<br>• Any innovation is quickly copied (homogeneous product, perfect information) → no first-mover advantage → weak innovation incentive<br>• Price-taking firms have no pricing power → cannot raise prices to fund R&D<br><br>This is Schumpeter\'s critique: the "competitive" ideal is dynamically inefficient. Real innovation comes from firms with market power that can earn supernormal profit and invest it. The patent system explicitly creates temporary monopoly to incentivise innovation.<br><br>Conclusion: perfect competition is a static welfare ideal but a poor environment for dynamic innovation.',
      keyTerms: [
        { term: 'Innovation under competition', def: 'Competitive markets have weak innovation incentives – no supernormal profit for R&D, no first-mover advantage, no pricing power.' },
        { term: 'Schumpeter\'s hypothesis', def: 'Market power and supernormal profit are prerequisites for significant innovation – competitive markets innovate less.' },
        { term: 'Patent protection', def: 'Temporary monopoly right granted to innovators – deliberately creates market power to incentivise R&D investment.' }
      ],
      examEdge: 'The dynamic efficiency paradox of perfect competition is the most sophisticated evaluation point in all of market structure analysis. Use it in any essay comparing perfect competition favourably to monopoly: "while perfect competition achieves static efficiency, Schumpeter\'s hypothesis suggests it may be dynamically inferior – the pharmaceutical and tech industries demonstrate that significant innovation requires the profit incentives that only market power can provide."',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
