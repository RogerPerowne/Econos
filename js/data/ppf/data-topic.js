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
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'available', href: TopicLoader.buildUrl('link_intro.html') },
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
      title: 'Opportunity Cost and the Bowed-Out Shape',
      tip: { icon: '💡', tone: 'blue', text: 'Opportunity cost changes at every point on the curve — and the bowed-out shape is what makes it rise as you specialise in one good.' },
      interactiveDiagram: {
        svgKey: 'ppfBowedOutInteractive',
        label: 'See opportunity cost rise as you move along the curve',
        emoji: '📈',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'The PPF',
            tone: 'blue',
            head: 'The production possibility frontier',
            body: 'This bowed-out curve reflects a key property of real economies: resources are not equally suited to producing both goods. Move along the curve from left to right and watch how the trade-off changes at each point.',
            analysis: 'The shape encodes information about resource adaptability. A straight-line PPF would mean perfect homogeneity — every unit of labour, land, and capital equally suited to either good. Real economies have specialists: surgeons, farmers, software engineers, factories. The bowed-out (concave) curve is the visual signature of that specialisation.'
          },
          {
            label: 'Low opportunity cost',
            tone: 'green',
            head: 'Pa — small sacrifice, decent gain',
            body: 'A 30-unit gain in Good B costs only 11 units of Good A. The first resources to transfer are those least suited to Good A — moving them costs little because they were barely productive there anyway.',
            analysis: 'Early specialisation is cheap. The economy deploys its most adaptable resources first — those with the weakest attachment to Good A. They were only marginally productive there; moving them to Good B yields a large gain at a small sacrifice. The opportunity cost ratio (vertical leg ÷ horizontal leg of the triangle) is small.'
          },
          {
            label: 'Rising opportunity cost',
            tone: 'amber',
            head: 'Pb — same gain, bigger sacrifice',
            body: 'The same gain in Good B now costs roughly twice as much Good A. The resources switching now were better suited to Good A — their transfer is proportionally costlier. Compare the two triangles: equal width, but Pb\'s is visibly taller.',
            analysis: 'The economy has used up its easy transfers. Remaining resources in Good A are progressively more specialised — more productive there and less adaptable to Good B. Transferring them yields a smaller gain relative to the sacrifice. The ratio grows. This is increasing opportunity cost made visible: the triangle taller despite the same horizontal step.'
          },
          {
            label: 'High opportunity cost',
            tone: 'rose',
            head: 'Pc — steep sacrifice for modest gain',
            body: 'A smaller gain in Good B now costs far more Good A. All three triangles share similar widths, but the vertical sacrifices are 11, 24, and 40 units respectively. The law of increasing opportunity cost, graphed.',
            analysis: 'The most specialised resources — those most highly adapted to Good A — are the last to transfer. Their opportunity cost is enormous. The PPF steepens sharply near the axis. A straight-line PPF only arises if resources are perfectly homogeneous: equally suited to both goods at every point on the curve. Draw a straight line only when a question explicitly specifies constant opportunity cost — otherwise the bowed-out curve is more realistic and earns the mark.'
          }
        ]
      },
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
      title: 'PPF Applications: Trade and Development',
      tip: { icon: '💡', tone: 'blue', text: 'Trade lets both countries consume <em>outside</em> their own PPF — that is the core economic argument for free trade.' },
      interactiveDiagram: {
        svgKey: 'ppfTradeInteractive',
        label: 'Follow the logic of gains from trade',
        emoji: '🌐',
        layers: ['idl-1', 'idl-2'],
        views: [
          {
            label: 'The production frontier',
            tone: 'blue',
            head: "A closed economy's consumption ceiling",
            body: 'Without trade, a country can only consume what it produces. Any consumption point must lie on or inside its own PPF — the frontier is a hard limit set by its resources and technology alone.',
            analysis: "In autarky, the PPF is simultaneously the production frontier and the consumption possibility set. No point beyond it is achievable, regardless of preferences or willingness to pay. This constraint can only be relaxed in two ways: by shifting the frontier outward (economic growth) or by separating production from consumption through trade."
          },
          {
            label: 'Specialise at P',
            tone: 'green',
            head: 'Produce at P — comparative advantage',
            body: "The economy concentrates production at P, the point where its opportunity cost is lowest. This is comparative advantage: produce what you give up least, not necessarily what you're best at in absolute terms.",
            analysis: "Comparative advantage doesn't require absolute superiority. Even if a country is less efficient at producing both goods, it still gains from specialising in whichever good it sacrifices less to produce. The gains come from differences in opportunity costs between countries, not absolute productivity gaps. P is the optimal production point given those relative costs."
          },
          {
            label: 'Consume at C',
            tone: 'amber',
            head: 'C is outside the PPF — only possible with trade',
            body: 'By exporting its surplus from specialising at P and importing the other good, the economy reaches consumption point C — a combination it could never produce alone. C lies outside its own PPF.',
            analysis: "This is the core welfare case for free trade: trade separates the production decision (where to produce on the PPF) from the consumption decision (where to end up). Both partners reach points beyond their individual frontiers, consuming more of both goods than autarky allows. For A*: draw C clearly outside the PPF, label it 'consumption point (with trade)', and note that both trading partners benefit — this single diagram captures the entire gains-from-trade argument."
          }
        ]
      },
      keyTerms: [
        { term: 'Comparative advantage', def: 'The ability to produce a good at a lower opportunity cost than a trading partner — the basis for mutually beneficial specialisation even when one country has absolute advantage in all goods.' },
        { term: 'Gains from trade', def: 'The welfare improvement from countries specialising in their comparative-advantage goods and exchanging output — total production rises and both partners can consume more.' },
        { term: 'Development constraint', def: 'Poor countries face inward PPFs due to capital scarcity, low productivity, and weak institutions — development policy shifts the frontier outward through investment, technology transfer, and reform.' }
      ],
      examEdge: 'Illustrating C beyond the PPF in your exam diagram is an A*-level response — it shows trade separating production from consumption decisions. The development application uses the same logic in reverse: poor countries have inward PPFs due to capital scarcity and low productivity; outward shifts require investment, technology transfer, or institutional reform — not just trade liberalisation.',
      economistQuote: {
        portraitKey: 'economistRicardo',
        tone: 'amber',
        label: 'Economist insight: Ricardo and comparative advantage',
        quote: 'Under a system of perfectly free commerce, each country naturally devotes its capital and labour to such employments as are most beneficial to each. This pursuit of individual advantage is admirably connected with the universal good of the whole.',
        attribution: 'David Ricardo, <em>On the Principles of Political Economy and Taxation</em> (1817)'
      },
      tipLate: {
        icon: '💡', tone: 'amber', head: 'Why this matters',
        text: 'Ricardo\'s breakthrough was showing that mutually beneficial trade does <strong>not</strong> require one country to be better at producing everything — it only requires <em>differences in opportunity cost</em>. His famous example: Portugal could produce both wine and cloth more cheaply than England, yet both countries gained by specialising in their comparative-advantage good and trading. The A* move is to anchor any trade or globalisation answer to Ricardo: gains come from <strong>relative</strong>, not absolute, productivity differences — which is why even low-productivity developing economies can benefit from opening to trade.'
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
