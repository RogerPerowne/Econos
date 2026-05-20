window.ECONOS_TOPIC = {
  id: 'ppf',
  topicNum: '1.4',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Production Possibility Frontiers',
  estTime: '6-8 minutes',
  goal: 'Lock in PPF construction, opportunity cost along the frontier, shifts, and how the PPF illustrates core economic concepts.',
  intro: {
    heroKey: 'heroPPF',
    summary: 'The Production Possibility Frontier is economics\'s most versatile diagram. It simultaneously illustrates scarcity, choice, opportunity cost, efficiency, and economic growth — all in one simple curve.',
    doInThis: 'Work through 6 cards covering PPF construction, opportunity cost and the bowed-out shape, shifts, and applications to efficiency, growth, and resource allocation.',
    outcomes: [
      'Draw and label a PPF showing maximum output combinations for two goods',
      'Identify points of efficiency, inefficiency, and impossibility',
      'Calculate opportunity cost from a PPF and explain the bowed-out shape',
      'Explain inward and outward shifts of the PPF and their causes'
    ],
    tip: 'Any point ON the PPF = productively efficient. Inside = inefficient (resources wasted). Outside = currently impossible. A shift OUT = economic growth.',
    stages: [
      { num: 1, name: 'Learn it', sub: '6 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'ppf_1',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'The PPF: one diagram, five concepts',
      lede: 'The Production Possibility Frontier is the most versatile diagram in Theme 1 — explore construction, opportunity cost, shifts, and efficiency using the interactive diagram below.',
      diagramKey: 'ppfInteractive',
      steps: [
        {
          key: 'base',
          label: 'Construction',
          text: 'The PPF shows the <strong>maximum output combinations</strong> of two goods an economy can produce given current resources and technology. A point on the curve is <strong>productively efficient</strong>; inside is <strong>inefficient</strong> (resources wasted); outside is <strong>unattainable</strong>. Use this card to see the full picture — <strong>Card 2</strong> then builds the opportunity cost mechanics in detail.'
        },
        {
          key: 'extension',
          label: 'Opportunity cost',
          text: 'Moving along the PPF means gaining one good but sacrificing the other — that trade-off is the <strong>opportunity cost</strong>. The bowed-out shape means this cost rises the further you specialise in one good. <strong>Card 2</strong> covers the calculation and the reason the curve bends.'
        },
        {
          key: 'shift',
          label: 'Shifts',
          text: 'The PPF shifts <strong>outward</strong> when productive capacity increases and <strong>inward</strong> after negative supply shocks. Movement <em>along</em> PPF₁ is just reallocation of existing resources — the frontier itself does not move. <strong>Card 3</strong> maps out all four movement types.'
        },
        {
          key: 'efficiency',
          label: 'Efficiency',
          text: '<strong>Productive efficiency</strong> means being on the PPF — no wasted resources. <strong>Allocative efficiency</strong> means being at the <em>right</em> point on it — producing the combination that best matches consumer preferences. These are different tests. <strong>Card 5</strong> builds this distinction in full.'
        }
      ],
      examEdge: 'In exam diagrams always label: both axes with good names, the PPF curve, a point inside labelled "inefficient", a point on the curve labelled "efficient/on the PPF", and a point outside labelled "unattainable". Missing axis labels or unlabelled points are the most common PPF mark losses.'
    },

    {
      id: 'ppf_2',
      stepLabel: 'Learn: Step 2 of 6',
      diagramKey: 'ppfOpportunityCost',
      title: 'Opportunity Cost and the Bowed-Out Shape',
      tip: { icon: '💡', tone: 'blue', text: 'Opportunity cost changes at every point on the curve — and the bowed-out shape is what makes it rise as you specialise in one good.' },
      comparison: { title: 'Two types of PPF', emoji: '📊', left: { tone: 'blue', icon: '📏', label: 'Straight-line PPF', caption: 'Constant opportunity cost — resources are perfectly substitutable. The trade-off ratio stays fixed regardless of output mix.' }, right: { tone: 'amber', icon: '〰️', label: 'Bowed-out PPF', caption: 'Increasing opportunity cost — resources are specialised. Switching the easy ones first keeps cost low; the better-suited ones follow at progressively higher cost.' } },
      flow: [
        { icon: '🏭', title: 'All resources in Good A',       sub: 'Economy starts at one end of the PPF — maximum Good A, zero Good B.' },
        { icon: '🔄', title: 'Least suited resources switch',  sub: 'Resources poorly suited to Good A move first — small sacrifice, decent gain in Good B. Low opportunity cost.' },
        { icon: '⬆️', title: 'Better-suited resources follow', sub: 'Now you must transfer resources well-suited to Good A. Each extra unit of Good B costs progressively more Good A.' },
        { icon: '〰️', title: 'Result: the curve bows out',    sub: 'Rising sacrifice per extra unit = a curve that bends away from the origin. Only a straight line if resources are identical.' }
      ],
      flowTitle: 'Why opportunity cost rises as you specialise',
      flowEmoji: '📈',
      keyTerms: [
        { term: 'Opportunity cost on PPF', def: 'The quantity of one good given up to produce one more unit of the other — equal to the gradient of the PPF at that point.' },
        { term: 'Constant opportunity cost', def: 'Straight-line PPF: resources are perfectly substitutable; the trade-off ratio is fixed regardless of output mix.' },
        { term: 'Increasing opportunity cost', def: 'Bowed-out PPF (concave to origin): resources are specialised, so each extra unit of one good costs progressively more of the other as specialisation deepens.' },
        { term: 'Resource specificity', def: 'Resources are not equally suited to all uses — a surgeon and a farmer are not interchangeable without cost. This is what bows the PPF outward.' }
      ],
      examEdge: 'To calculate opportunity cost: find how many units of one good are sacrificed per unit gained of the other. From a diagram: read the slope. Show the step — "output of B falls from X to Y while A rises by Z, so OC = (X−Y)/Z units of B per unit of A." Draw a straight-line PPF only when the question specifies constant opportunity cost or perfectly homogeneous resources — in all other cases, the bowed-out curve is more realistic and earns the mark.'
    },

    {
      id: 'ppf_3',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 6',
      diagramKey: 'ppfMovesInteractive',
      title: 'Four Types of PPF Movement',
      lede: 'Not all output changes are equal — explore the four distinct ways an economy can change its production position and what each one means for capacity.',
      steps: [
        { key: 'along',    label: 'Movement along', text: 'Moving from D to E along PPF₁ means choosing to produce <strong>more capital goods</strong> but <strong>fewer consumer goods</strong>. The PPF itself does not move — existing resources are just reallocated. Every step along the curve has an <strong>opportunity cost</strong> equal to the slope of the PPF at that point.' },
        { key: 'recovery', label: 'Short-run recovery', text: 'Point X is <strong>inside</strong> the PPF — resources are idle (unemployment, spare capacity). As aggregate demand recovers, firms rehire workers and reactivate capacity. Output rises from X toward PPF₁. The frontier does NOT shift — this is <strong>demand-side / short-run growth</strong>.' },
        { key: 'outward',  label: 'Outward shift',   text: 'The PPF shifts outward from PPF₁ to PPF₂ when <strong>productive capacity permanently increases</strong>: better technology, more capital investment, population growth, or improved skills. This is <strong>supply-side / long-run growth</strong> — the economy\'s ceiling rises for good.' },
        { key: 'inward',   label: 'Inward shift',    text: 'Negative supply shocks push the PPF inward to PPF₃: war destroys capital, natural disasters eliminate resources, "brain drain" depletes skilled labour, or sustained disinvestment causes capital depreciation. <strong>Maximum productive capacity falls permanently.</strong>' }
      ],
      examEdge: 'Classic exam trap: "Country A recovers from recession" → a point inside moves ONTO PPF₁ — do NOT draw an outward shift. "Country A invests in new technology" → PPF₁ shifts out to PPF₂. Naming the type of growth (demand-side vs supply-side) earns a mark in its own right — always state it explicitly.'
    },

    {
      id: 'ppf_4',
      template: 'paired',
      stepLabel: 'Learn: Step 4 of 6',
      diagramKey: 'ppfConsumerCapital',
      title: 'Consumer vs Capital Goods Trade-Off',
      tip: { icon: '💡', tone: 'blue', text: 'Every economy chooses where to sit on the consumer–capital goods PPF. The choice today shapes where the PPF will be tomorrow.' },
      left: {
        label: 'Produce more consumer goods now',
        points: [
          'Higher present living standards',
          'Less investment in future productive capacity',
          'PPF shifts outward only slowly in the future',
          'Choice of developed economies with high income and low savings rates',
          'Risk: productive capacity stagnates relative to competitors'
        ]
      },
      right: {
        label: 'Produce more capital goods now',
        points: [
          'Lower present living standards — deferred consumption',
          'Greater future productive capacity (PPF shifts further outward)',
          'Long-run strategy for rapid growth (e.g. South Korea, China in development phase)',
          'Requires institutional capacity to sustain low consumption politically',
          'Risk: capital goods may become obsolete or misallocated'
        ]
      },
      table: {
        title: 'Where do economies stand?',
        emoji: '🌍',
        headers: ['Economy', 'Investment share of GDP'],
        rows: [
          { icon: '🇨🇳', label: 'China',   value: '~42% — decades of capital-led growth; rapid outward PPF shifts' },
          { icon: '🇩🇪', label: 'Germany', value: '~22% — manufacturing-heavy, more capital-oriented' },
          { icon: '🇬🇧', label: 'UK',      value: '~18% — services-led economy, closer to consumer end' },
          { icon: '🇺🇸', label: 'USA',     value: '~18% — similar to UK; high present consumption' }
        ]
      },
      examEdge: 'Where would you place these economies on a consumer–capital PPF? Use real investment-ratio data with the "guns vs butter" or "now vs later" framing for evaluation credit. Post-war Germany and Japan both chose high investment / low consumption to rebuild — their PPFs shifted dramatically outward over the following decades.'
    },

    {
      id: 'ppf_5',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'PPF and Economic Efficiency',
      tip: { icon: '💡', tone: 'blue', text: 'Productive efficiency = ON the PPF. Allocative efficiency = the <em>right</em> point on the PPF. These are different — and examiners test whether you know it.' },
      interactiveDiagram: {
        svgKey: 'ppfEfficiencyInteractive',
        label: 'Build the efficiency picture step by step',
        emoji: '⚙️',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'Three zones',
            tone: 'blue',
            head: 'The PPF defines three zones',
            body: 'Any combination ON the curve is productively feasible and uses all resources fully. Inside is achievable but wastes capacity. Outside is currently impossible.',
            analysis: 'The PPF is the maximum output frontier: every point on it represents a fully employed economy at the limit of its technology and resources. This boundary separates achievable from unachievable — not by price or policy, but by the hard constraint of productive capacity. Economists use it to define two distinct efficiency concepts that are often confused: productive efficiency (any point on the curve) and allocative efficiency (a specific point on the curve).'
          },
          {
            label: 'Productive inefficiency',
            tone: 'rose',
            head: 'H — inside the PPF',
            body: 'Point H represents idle resources: unemployed workers, spare factory capacity, misallocated inputs. Output could rise without any sacrifice — moving H to the frontier costs nothing.',
            analysis: 'Common causes: cyclical unemployment (recession leaves capital and labour idle), structural barriers (skills mismatches, immobility of factors), X-inefficiency (management slack in firms insulated from competition). Key exam point: a <em>recession</em> moves the whole-economy point inside the PPF — it does not shift the frontier itself. The frontier only shifts with a change in productive <em>capacity</em>, not how fully that capacity is used.'
          },
          {
            label: 'Productive efficiency',
            tone: 'green',
            head: 'Any point ON PPF₁ — productively efficient',
            body: 'Multiple points sit on the curve. All are productively efficient: resources are fully and efficiently employed. You cannot raise output of one good without reducing the other.',
            analysis: 'Productive efficiency does NOT mean the right goods are produced — only that production is at maximum capacity. A command economy could be on its PPF while producing only guns and no butter: productively efficient but allocatively catastrophic. The market test is P = minimum LRAC — firms produce at the lowest point on their long-run average cost curve, as competitive pressure forces in the long run.'
          },
          {
            label: 'Allocative efficiency',
            tone: 'amber',
            head: 'G★ — the one allocatively efficient point',
            body: 'G★ is the single combination on PPF₁ that society values most: P = MC. Every other on-curve point is productively efficient but allocatively wrong — producing too much of one good relative to what consumers want.',
            analysis: 'Allocative efficiency requires P = MC at every point: the marginal benefit to society equals the marginal cost of production. This is a single point on the PPF reflecting consumer preferences. Competitive markets drive P → MC through profit-maximisation. For A* marks: mention <strong>Pareto efficiency</strong> — G★ is Pareto optimal, meaning no-one can be made better off without making someone else worse off. Command economies cannot identify G★ without price signals — this is the socialist calculation problem.'
          }
        ]
      },
      examEdge: 'For A* responses: name <strong>Pareto efficiency</strong> explicitly — G★ is the only Pareto-optimal point on the PPF, where no-one can be made better off without making someone else worse off. Competitive markets approximate this through P = MC. The socialist calculation problem is the sharpest evaluative counter-example: without market price signals, a command economy cannot locate G★, even when it achieves full-capacity output on the PPF.'
    },

    {
      id: 'ppf_6',
      stepLabel: 'Learn: Step 6 of 6',
      diagramKey: 'ppfTrade',
      title: 'PPF Applications: Trade and Development',
      tip: { icon: '💡', tone: 'blue', text: 'Trade lets both countries consume <em>outside</em> their own PPF — that is the core economic argument for free trade.' },
      comparison: {
        title: 'Two big applications of the PPF',
        emoji: '🌐',
        left:  { tone: 'blue',  icon: '🤝', label: 'International trade',  caption: 'Specialise at your comparative-advantage good — where your opportunity cost is lowest. Trade then unlocks combinations neither country could reach alone.' },
        right: { tone: 'green', icon: '🌱', label: 'Economic development', caption: 'Development = shifting the PPF outward. The binding constraint is resources and productivity, not preference.' }
      },
      keyTerms: [
        { term: 'Specialisation', def: 'Concentrating production on goods where a country has comparative advantage — maximises combined output.' },
        { term: 'Gains from trade', def: 'The welfare improvement from countries specialising in their comparative-advantage goods and exchanging output — total production rises and both partners can consume more.' },
        { term: 'Development constraint', def: 'Poor countries face inward PPFs due to capital scarcity, low productivity, and weak institutions — development policy shifts the frontier outward.' }
      ],
      examEdge: 'Trade allows consumption outside the PPF — this is why free trade is welfare-improving even for a country with absolute advantage in all goods. Illustrating this with a PPF diagram, showing consumption points beyond the frontier after trade, is an A*-level response.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
