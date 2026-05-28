window.ECONOS_TOPIC = {
  id: 'monopolistic-competition',
  topicNum: '4.3',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Monopolistic Competition',
  estTime: '9-11 minutes',
  goal: 'Lock in the assumptions, short-run and long-run equilibria, efficiency properties, and how monopolistic competition explains real markets with product differentiation.',
  intro: {
    heroKey: 'heroFirm',
    summary: 'Monopolistic competition blends elements of both monopoly and competition: many firms compete, but each has a degree of market power through product differentiation. The result is a market that achieves variety but sacrifices productive efficiency.',
    doInThis: 'Work through 7 cards covering the four assumptions, the downward-sloping demand curve, short-run supernormal profit, long-run normal profit equilibrium, excess capacity, efficiency analysis, and evaluation of the model. Finish with a 25-mark essay scaffold.',
    outcomes: [
      'State the four assumptions of monopolistic competition and how they differ from perfect competition',
      'Draw and explain short-run supernormal profit and long-run normal profit equilibria',
      'Explain the excess capacity result and its efficiency implications',
      'Evaluate whether monopolistic competition is preferable to perfect competition despite its inefficiency'
    ],
    tip: 'Short run: like monopoly – MR = MC, P > MC, supernormal profit possible. Long run: like competition – free entry eliminates supernormal profit, P = AC. But unlike perfect competition, P > MC and P > min AC in the long run – excess capacity and allocative inefficiency persist.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'monopolistic_competition_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Monopolistic competition: the big picture',
      lede: 'Many firms, differentiated products. A hybrid that delivers variety – but pays for it in efficiency.',
      branches: [
        { tone: 'green',  label: 'Many firms, free entry',   sub: 'Like perfect competition: no barriers, so supernormal profit gets competed away in the long run.' },
        { tone: 'blue',   label: 'Product differentiation',  sub: 'Each firm has a slightly different product → downward-sloping demand → some pricing power.' },
        { tone: 'amber',  label: 'Excess capacity',          sub: 'Long-run tangency sits to the left of minimum AC. Firms operate below efficient scale.' },
        { tone: 'purple', label: 'Variety vs efficiency',    sub: 'Consumers gain choice; the cost is allocative and productive inefficiency. The defining trade-off.' }
      ],
      body: 'Monopolistic competition (Chamberlin, 1930s) has four key assumptions:<br><br>1. <strong>Many sellers:</strong> many firms in the market – no firm is large enough to dominate; each has small market share.<br>2. <strong>Product differentiation:</strong> each firm\'s product is slightly different – branding, quality, location, design. This gives each firm a small degree of market power (downward-sloping demand).<br>3. <strong>No barriers to entry or exit:</strong> firms can freely enter profitable markets and exit loss-making ones – same as perfect competition.<br>4. <strong>Imperfect information:</strong> consumers don\'t have perfect knowledge of all products and prices – search costs and brand loyalty exist.<br><br><strong>Key difference from perfect competition:</strong> product differentiation means each firm is NOT a price-taker. Each faces a downward-sloping demand curve for its differentiated product.',
      keyTerms: [
        { term: 'Product differentiation', def: 'Each firm\'s product differs from rivals\' in real or perceived ways – gives each firm some pricing power.' },
        { term: 'Non-price competition', def: 'Competition through branding, quality, service, location, and advertising rather than solely on price.' },
        { term: 'Downward-sloping demand', def: 'Product differentiation means the firm faces a demand curve with negative slope – it has some power to set price above MC.' }
      ],
      examEdge: 'The critical difference from perfect competition is product differentiation → downward-sloping demand. In perfect competition: AR = MR (horizontal demand). In monopolistic competition: MR < AR (downward-sloping demand, so MR lies below AR). This single change generates fundamentally different long-run outcomes – specifically, the excess capacity result.'
    },
    {
      id: 'monopolistic_competition_2',
      template: 'framing',
      title: 'Short-Run Equilibrium',
      body: 'In the short run, monopolistically competitive firms behave like monopolists:<br><br>• Each firm faces a downward-sloping demand curve (due to product differentiation)<br>• Profit-maximising output: MR = MC<br>• Price set from demand curve at Q*: P > MC (since demand slopes down → MR < P)<br>• Can make <strong>supernormal profit</strong> if P > AC at Q*<br>• Can make <strong>normal profit</strong> (P = AC) or <strong>loss</strong> (P < AC)<br><br>The short run allows supernormal profit because entry hasn\'t yet occurred. The demand curve for an individual firm\'s product is relatively elastic (many close substitutes from rivals) but not perfectly elastic (product is differentiated, not identical).',
      keyTerms: [
        { term: 'Short-run supernormal profit', def: 'Possible when P > AC at the profit-maximising output MR = MC. Attracts new entry.' },
        { term: 'Elastic but downward-sloping demand', def: 'More elastic than monopoly (many close substitutes) but less elastic than perfect competition (product is differentiated).' },
        { term: 'Short-run monopoly behaviour', def: 'Monopolistic competitor is a "mini-monopolist" in the short run – uses MR = MC rule, P > MC.' }
      ],
      examEdge: 'The demand curve for a monopolistically competitive firm is more elastic than a monopolist\'s because there are many close substitutes – rivals sell similar (though not identical) products. A significant price rise causes substantial customer defection to rivals. This higher elasticity means the markup (P − MC) is lower than a pure monopolist\'s – limited market power, not zero market power.'
    },
    {
      id: 'monopolistic_competition_3',
      template: 'mechanisms',
      diagramKey: 'mcLrTangency',
      title: 'Long-Run Adjustment: Entry Erodes Profit',
      intro: 'Free entry eliminates supernormal profit in the long run – the same mechanism as perfect competition, but the long-run outcome is different.',
      steps: [
        { label: 'Start: supernormal profit', text: 'P > AC at Q*. New firms enter, attracted by supernormal profit. No entry barriers – entry is free.' },
        { label: 'Entry effect on demand', text: 'New firms offer close substitutes. The individual firm\'s demand curve shifts LEFT (fewer customers at any price) and becomes MORE ELASTIC (better substitutes available → consumers more price-sensitive).' },
        { label: 'Long-run equilibrium', text: 'Demand curve shifts until it is tangent to the AC curve. At this point: P = AC (normal profit). No further incentive to enter or exit.' },
        { label: 'Key long-run condition', text: 'P = AC (normal profit – zero supernormal profit). BUT: P > MC (because demand is still downward-sloping → MR < P → profit max at MR = MC → P > MC). The firm does NOT produce at minimum AC.' }
      ],
      examEdge: 'The tangency condition is crucial: the demand curve is tangent to (just touches) the AC curve at the long-run profit-maximising output. This tangency occurs to the LEFT of the minimum AC point. This means: (1) AC is not at its minimum – productive inefficiency, (2) P > MC – allocative inefficiency, (3) output is below the minimum-AC output – excess capacity.'
    },
    {
      id: 'monopolistic_competition_4',
      template: 'framing',
      title: 'Excess Capacity',
      body: '<strong>Excess capacity</strong> is the defining feature of monopolistic competition\'s long-run equilibrium:<br><br>• Firms produce at Q* (where MR = MC)<br>• Q* is to the LEFT of the minimum AC output<br>• The firm could produce more output at lower unit cost – it has spare productive capacity<br>• Excess capacity = minimum-AC output minus actual output<br><br><strong>Why excess capacity exists:</strong> product differentiation creates a downward-sloping demand that is tangent to AC to the left of minimum AC. The firm can\'t expand output without reducing price – and at Q*, it\'s already maximising profit.<br><br><strong>Real-world evidence:</strong> restaurants with empty tables at lunchtime, hairdressers with idle chairs, local shops operating below full capacity. All maintain differentiation (location, service, brand) but have unused capacity.',
      keyTerms: [
        { term: 'Excess capacity', def: 'The difference between the output at minimum AC and the actual profit-maximising output – the firm has unused productive capacity.' },
        { term: 'Tangency condition', def: 'In LR equilibrium, demand curve is tangent to AC curve – just touching at the profit-maximising output where P = AC.' },
        { term: 'Productive inefficiency', def: 'Firm does not produce at minimum AC – unit costs are higher than the technically achievable minimum.' }
      ],
      examEdge: 'Excess capacity is often described as the "cost of variety" – monopolistically competitive markets provide product diversity (restaurants, cafes, clothing brands) but at the cost of each firm operating below minimum efficient scale. The welfare question: is the value of variety worth the higher unit costs? This is the central evaluative tension in the topic.'
    },
    {
      id: 'monopolistic_competition_5',
      template: 'diagnose',
      title: 'Efficiency in Monopolistic Competition',
      intro: 'The long-run equilibrium of monopolistic competition fails both standard static efficiency conditions.',
      rows: [
        { label: 'Efficiency type', colA: 'Monopolistic competition', colB: 'Perfect competition' },
        { label: 'Productive efficiency (P = min AC)', colA: 'NOT achieved. Firm produces at P = AC but to the left of minimum AC. Higher unit costs due to excess capacity.', colB: 'ACHIEVED in long run. P = min AC – competitive pressure forces minimum cost production.' },
        { label: 'Allocative efficiency (P = MC)', colA: 'NOT achieved. P > MC – firm is a price-setter with some market power. Welfare loss relative to competitive price.', colB: 'ACHIEVED. P = MC in competitive equilibrium – resources allocated to highest value use.' }
      ],
      footer: 'Non-price competition: monopolistically competitive firms compete heavily on advertising, branding, and product development. This may generate dynamic efficiency (product innovation, consumer choice) but increases costs, shifting AC upward. Advertising is both a cost (reduces efficiency) and a benefit (conveys information, enables variety).',
      examEdge: 'The efficiency comparison table always shows monopolistic competition performing worse than perfect competition on static criteria. The evaluative counter-argument is variety and dynamic efficiency: consumers value choice between differentiated products; competition through product development may generate innovation. Which matters more depends on the specific market – a good essay addresses both sides.'
    },
    {
      id: 'monopolistic_competition_6',
      template: 'cause',
      title: 'Non-Price Competition',
      causes: [
        { head: 'Advertising and branding', body: 'Firms invest in advertising to shift demand rightward (more customers) and make it more inelastic (brand loyalty reduces price sensitivity). Increases AC but may increase profit if successful. Example: coffee shops spend on brand identity to justify premium prices.' },
        { head: 'Product development', body: 'Continuous minor product improvements to stay ahead of rivals and maintain differentiation. Fast fashion: constant new collections. Smartphone apps: regular updates. Generates dynamic efficiency but constant cost pressure.' },
        { head: 'Quality and service', body: 'Differentiation through service quality, reliability, speed, or after-sales support. Law firms, accountants, restaurants – service quality is the primary differentiator.' },
        { head: 'Location and convenience', body: 'Physical differentiation through proximity to consumers. Local cafes, corner shops, neighbourhood pharmacies compete partly on location. Location creates a degree of natural local monopoly.' }
      ],
      examEdge: 'Advertising in monopolistic competition has two economic effects: (1) it shifts demand rightward (more consumers) – revenue effect; (2) it shifts AC upward (higher costs) – cost effect. Net profit effect depends on which dominates. From a welfare perspective: advertising can be informative (reduces consumer search costs – beneficial) or purely persuasive (creates artificial brand loyalty – no welfare benefit, just cost). Distinguishing informative vs persuasive advertising is a sophisticated evaluation point.'
    },
    {
      id: 'monopolistic_competition_7',
      template: 'paired',
      title: 'Evaluation: Is Monopolistic Competition Desirable?',
      left: {
        label: 'Arguments for (vs perfect competition)',
        points: [
          'Provides consumer variety – product differentiation reflects genuine consumer preferences for choice',
          'Non-price competition may drive dynamic efficiency: innovation, quality improvement',
          'More realistic model than perfect competition – most real markets have some differentiation',
          'Local monopoly elements serve dispersed consumers who value proximity',
          'Advertising provides useful information about product characteristics'
        ]
      },
      right: {
        label: 'Arguments against (vs perfect competition)',
        points: [
          'Productive inefficiency: excess capacity means higher unit costs than necessary',
          'Allocative inefficiency: P > MC – under-production relative to social optimum',
          'Advertising expenditure is a resource cost with mixed consumer benefit',
          'Normal profit in long run, but at higher cost than perfectly competitive equilibrium',
          'Brand loyalty may be irrational – consumers pay premium for negligible real differences'
        ]
      },
      examEdge: 'The best markets for real-world application: restaurants (similar food, compete on atmosphere/cuisine/location), hairdressers (similar service, compete on style/reputation/location), clothing brands (similar garments, compete on brand/design), smartphone apps. All show the defining features: many sellers, differentiated products, free entry, supernormal profit eroded long-run. Using a specific industry example and applying the theory systematically always distinguishes top-band answers.',
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
    title:    'Monopolistic Competition',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.routes.learn('monopolistic-competition'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers product differentiation, SR/LR equilibrium, and excess capacity',
    shortNames: [
      'Key features','Downward demand','SR profit','LR normal profit','Excess capacity',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'Which of the following best describes monopolistic competition?',
        opts: [
          'A few large firms dominating the market',
          'Many firms selling differentiated products with free entry and exit',
          'A single firm protected by high barriers to entry',
          'Many firms selling identical products at the market price'
        ],
        ans:  1,
        exp:  'Monopolistic competition involves many firms, product differentiation, and free entry/exit. Each firm has some price-setting power due to its unique product, but competition limits long-run profit.'
      },
      {
        type: 'mcq',
        q:    'Why does a monopolistically competitive firm face a downward-sloping demand curve?',
        opts: [
          'It is the only seller of its product',
          'Its product is differentiated from competitors, giving it some pricing power',
          'The government sets a minimum price',
          'It sells a homogeneous product in a large market'
        ],
        ans:  1,
        exp:  'Product differentiation gives each firm a degree of brand loyalty. Consumers have preferences, so the firm can raise price without losing all customers – hence a downward-sloping (not horizontal) demand curve.'
      },
      {
        type: 'mcq',
        q:    'In the short run, a monopolistically competitive firm can earn supernormal profit. What happens in the long run?',
        opts: [
          'Supernormal profit persists because products are differentiated',
          'New firms enter, demand for each firm falls, and profit returns to normal',
          'The government taxes away the excess profit',
          'The firm becomes a natural monopoly'
        ],
        ans:  1,
        exp:  'Free entry means new firms enter attracted by supernormal profit. Each existing firm loses customers; demand shifts left until P = AC and only normal profit remains.'
      },
      {
        type: 'mcq',
        q:    'Excess capacity in monopolistic competition means:',
        opts: [
          'Firms produce more than the productively efficient output',
          'Firms produce less than the minimum average cost output',
          'Firms have surplus workers',
          'Firms produce where P = MC'
        ],
        ans:  1,
        exp:  'In long-run equilibrium, P = AC but this occurs on the downward-sloping part of the AC curve, above the minimum. Output is below the productively efficient level – hence excess capacity.'
      },
      {
        type: 'numeric_input',
        q:    'A firm sells 80 units at £15. TC = £1,050. Calculate profit.',
        answer: 150,
        tolerance: 0,
        unit: '£',
        hint: 'Profit = TR − TC = (P × Q) − TC.',
        workingSteps: ['TR = £15 × 80 = £1,200','Profit = £1,200 − £1,050 = £150']
      },
      {
        type: 'categorise',
        q:    'Categorise each statement as applying to monopolistic competition or perfect competition.',
        categories: ['Monopolistic competition','Perfect competition'],
        items: [
          { item: 'Downward-sloping demand curve',        category: 'Monopolistic competition' },
          { item: 'Horizontal (perfectly elastic) demand',category: 'Perfect competition' },
          { item: 'Non-price competition via advertising', category: 'Monopolistic competition' },
          { item: 'Homogeneous products',                  category: 'Perfect competition' },
          { item: 'Excess capacity in long run',           category: 'Monopolistic competition' },
          { item: 'Productive efficiency in long run',     category: 'Perfect competition' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each cause to its effect in monopolistic competition.',
        pairs: [
          { cause: 'Supernormal profit in short run',       effect: 'New firms enter attracted by profit' },
          { cause: 'New firms enter with similar products', effect: 'Each firm\'s demand curve shifts left' },
          { cause: 'Demand falls until P = AC',             effect: 'Only normal profit remains in long run' },
          { cause: 'Product differentiation',               effect: 'Firm has some price-setting power' },
          { cause: 'Long-run equilibrium reached',          effect: 'Excess capacity exists' },
          { cause: 'Advertising increases brand loyalty',   effect: 'Demand becomes less elastic' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out in the context of monopolistic competition?',
        opts: ['Product differentiation','Advertising','Homogeneous products','Free entry and exit'],
        ans:  2,
        exp:  'Monopolistic competition is characterised by product differentiation, advertising, and free entry/exit. Homogeneous products are a feature of perfect competition, not monopolistic competition.'
      },
      {
        type: 'data_table',
        q:    'A firm in monopolistic competition has the following data. Identify the long-run equilibrium output.',
        tableHeaders: ['Output','Price (£)','AC (£)','Profit (£)'],
        tableData: [
          ['40','18','15','120'],
          ['50','16','16','0'],
          ['60','14','17','-180'],
          ['70','12','19','-490']
        ],
        opts: ['Output = 40','Output = 50','Output = 60','Output = 70'],
        ans:  1,
        exp:  'Long-run equilibrium in monopolistic competition requires P = AC (normal profit = 0). This occurs at output = 50 where P = AC = £16 and profit = £0.'
      },
      {
        type: 'match_pairs',
        q:    'Match each term to its correct description.',
        pairs: [
          { a: 'Product differentiation',  b: 'Making a product distinct through quality, branding, or features' },
          { a: 'Excess capacity',          b: 'Output below the minimum average cost level' },
          { a: 'Non-price competition',    b: 'Competing through advertising, quality, not price' },
          { a: 'Long-run equilibrium',     b: 'P = AC; normal profit only; no incentive to enter or exit' },
          { a: 'Short-run supernormal',    b: 'TR exceeds TC including normal profit' },
          { a: 'Allocative inefficiency',  b: 'Price exceeds marginal cost; welfare loss occurs' }
        ]
      }
    ]
  };

})();

