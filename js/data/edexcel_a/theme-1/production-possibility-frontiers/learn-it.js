window.ECONOS_TOPIC = {
  id: 'production-possibility-frontiers',
  topicNum: '1.4',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Production Possibility Frontiers',
  estTime: '6-8 minutes',
  goal: 'Lock in PPF construction, opportunity cost along the frontier, shifts, and how the PPF illustrates core economic concepts.',
  intro: {
    heroKey: 'heroPPF',
    summary: 'The Production Possibility Frontier is economics\'s most versatile diagram. It simultaneously illustrates scarcity, choice, opportunity cost, efficiency, and economic growth – all in one simple curve.',
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
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'ppf_1',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'The PPF: one diagram, five concepts',
      lede: 'The Production Possibility Frontier is the most versatile diagram in Theme 1 – explore construction, opportunity cost, shifts, and efficiency using the interactive diagram below.',
      diagramKey: 'ppfInteractive',
      steps: [
        {
          key: 'base',
          label: 'Construction',
          text: 'The PPF shows the <strong>maximum output combinations</strong> of two goods an economy can produce given current resources and technology. A point on the curve is <strong>productively efficient</strong>; inside is <strong>inefficient</strong> (resources wasted); outside is <strong>unattainable</strong>. Use this card to see the full picture – <strong>Card 2</strong> then builds the opportunity cost mechanics in detail.'
        },
        {
          key: 'extension',
          label: 'Opportunity cost',
          text: 'Moving along the PPF means gaining one good but sacrificing the other – that trade-off is the <strong>opportunity cost</strong>. The bowed-out shape means this cost rises the further you specialise in one good. <strong>Card 2</strong> covers the calculation and the reason the curve bends.'
        },
        {
          key: 'shift',
          label: 'Shifts',
          text: 'The PPF shifts <strong>outward</strong> when productive capacity increases and <strong>inward</strong> after negative supply shocks. Movement <em>along</em> PPF₁ is just reallocation of existing resources – the frontier itself does not move. <strong>Card 3</strong> maps out all four movement types.'
        },
        {
          key: 'types-of-efficiency',
          label: 'Efficiency',
          text: '<strong>Productive efficiency</strong> means being on the PPF – no wasted resources. <strong>Allocative efficiency</strong> means being at the <em>right</em> point on it – producing the combination that best matches consumer preferences. These are different tests. <strong>Card 5</strong> builds this distinction in full.'
        }
      ],
      examEdge: 'In exam diagrams always label: both axes with good names, the PPF curve, a point inside labelled "inefficient", a point on the curve labelled "efficient/on the PPF", and a point outside labelled "unattainable". Missing axis labels or unlabelled points are the most common PPF mark losses.'
    },

    {
      id: 'ppf_2',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'Opportunity Cost and the Bowed-Out Shape',
      blocks: [
        { type: 'tip', tone: 'blue', icon: '💡', text: 'Opportunity cost changes at every point on the curve – and the bowed-out shape is what makes it rise as you specialise in one good.' },
        {
          type: 'econDiagram',
          chart: 'ppf',
          views: [
            {
              label: 'The PPF',
              points: [],
              analysis: 'The shape encodes information about resource adaptability. A straight-line PPF would mean perfect homogeneity – every unit of labour, land, and capital equally suited to either good. Real economies have specialists: surgeons, farmers, software engineers, factories. The bowed-out (concave) curve is the visual signature of that specialisation.'
            },
            {
              label: 'Low opportunity cost',
              points: ['A'],
              analysis: 'Early specialisation is cheap. The economy deploys its most adaptable resources first – those with the weakest attachment to Good A (capital goods). They were only marginally productive there; moving them to Good B (consumer goods) yields a large gain at a small sacrifice. Point A sits high on the frontier: many capital goods, few consumer goods. The curve is relatively shallow here, encoding a low opportunity cost per unit of consumer goods gained.'
            },
            {
              label: 'Rising opportunity cost',
              points: ['A', 'B'],
              arrows: [['A', 'B', { tone: 'amber' }]],
              analysis: 'The economy has used up its easy transfers. Moving from A to B along the frontier – gaining consumer goods (rightward) – requires sacrificing capital goods. The PPF steepens toward B: the same horizontal step requires a larger vertical sacrifice. This is increasing opportunity cost made visible. Resources remaining in capital-goods production are progressively more specialised – their transfer to consumer-goods production is proportionally costlier.'
            },
            {
              label: 'High opportunity cost',
              points: ['A', 'B'],
              arrows: [['A', 'B', { tone: 'rose' }]],
              analysis: 'The most specialised resources – those most highly adapted to capital-goods production – are the last to transfer. Their opportunity cost is enormous. The PPF steepens sharply near the x-axis (consumer-goods end). A straight-line PPF only arises if resources are perfectly homogeneous: equally suited to both goods at every point on the curve. Draw a straight line only when a question explicitly specifies constant opportunity cost – otherwise the bowed-out curve is more realistic and earns the mark.'
            }
          ]
        },
        { type: 'glossaryRow', terms: [
          { term: 'Opportunity cost on PPF', definition: 'The quantity of one good given up to produce one more unit of the other – equal to the gradient of the PPF at that point.' },
          { term: 'Constant opportunity cost', definition: 'Straight-line PPF: resources are perfectly substitutable; the trade-off ratio is fixed regardless of output mix.' },
          { term: 'Increasing opportunity cost', definition: 'Bowed-out PPF (concave to origin): resources are specialised, so each extra unit of one good costs progressively more of the other as specialisation deepens.' },
          { term: 'Resource specificity', definition: 'Resources are not equally suited to all uses – a surgeon and a farmer are not interchangeable without cost. This is what bows the PPF outward.' }
        ]},
        { type: 'examEdge', text: 'To calculate opportunity cost: find how many units of one good are sacrificed per unit gained of the other. From a diagram: read the slope. Show the step – “output of B falls from X to Y while A rises by Z, so OC = (X−Y)/Z units of B per unit of A.” Draw a straight-line PPF only when the question specifies constant opportunity cost or perfectly homogeneous resources – in all other cases, the bowed-out curve is more realistic and earns the mark.' }
      ]
    },

    {
      id: 'ppf_3',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 6',
      diagramKey: 'ppfMovesInteractive',
      title: 'Four Types of PPF Movement',
      lede: 'Not all output changes are equal – explore the four distinct ways an economy can change its production position and what each one means for capacity.',
      steps: [
        { key: 'along',    label: 'Movement along', text: 'Moving from D to E along PPF₁ means choosing to produce <strong>more capital goods</strong> but <strong>fewer consumer goods</strong>. The PPF itself does not move – existing resources are just reallocated. Every step along the curve has an <strong>opportunity cost</strong> equal to the slope of the PPF at that point.' },
        { key: 'recovery', label: 'Short-run recovery', text: 'Point X is <strong>inside</strong> the PPF – resources are idle (unemployment, spare capacity). As aggregate demand recovers, firms rehire workers and reactivate capacity. Output rises from X toward PPF₁. The frontier does NOT shift – this is <strong>demand-side / short-run growth</strong>.' },
        { key: 'outward',  label: 'Outward shift',   text: 'The PPF shifts outward from PPF₁ to PPF₂ when <strong>productive capacity permanently increases</strong>: better technology, more capital investment, population growth, or improved skills. This is <strong>supply-side / long-run growth</strong> – the economy\'s ceiling rises for good.' },
        { key: 'inward',   label: 'Inward shift',    text: 'Negative supply shocks push the PPF inward to PPF₃: war destroys capital, natural disasters eliminate resources, "brain drain" depletes skilled labour, or sustained disinvestment causes capital depreciation. <strong>Maximum productive capacity falls permanently.</strong>' }
      ],
      examEdge: 'Classic exam trap: "Country A recovers from recession" → a point inside moves ONTO PPF₁ – do NOT draw an outward shift. "Country A invests in new technology" → PPF₁ shifts out to PPF₂. Naming the type of growth (demand-side vs supply-side) earns a mark in its own right – always state it explicitly.'
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
          'Lower present living standards – deferred consumption',
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
          { icon: '🇨🇳', label: 'China',   value: '~42% – decades of capital-led growth; rapid outward PPF shifts' },
          { icon: '🇩🇪', label: 'Germany', value: '~22% – manufacturing-heavy, more capital-oriented' },
          { icon: '🇬🇧', label: 'UK',      value: '~18% – services-led economy, closer to consumer end' },
          { icon: '🇺🇸', label: 'USA',     value: '~18% – similar to UK; high present consumption' }
        ]
      },
      examEdge: 'Where would you place these economies on a consumer–capital PPF? Use real investment-ratio data with the "guns vs butter" or "now vs later" framing for evaluation credit. Post-war Germany and Japan both chose high investment / low consumption to rebuild – their PPFs shifted dramatically outward over the following decades.'
    },

    {
      id: 'ppf_5',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'PPF and Economic Efficiency',
      blocks: [
        { type: 'tip', tone: 'blue', icon: '💡', text: 'Productive efficiency = ON the PPF. Allocative efficiency = the right point on the PPF. These are different – and examiners test whether you know it.' },
        {
          type: 'econDiagram',
          chart: 'ppf',
          views: [
            {
              label: 'Three zones',
              points: [],
              analysis: 'The PPF is the maximum output frontier: every point on it represents a fully employed economy at the limit of its technology and resources. This boundary separates achievable from unachievable – not by price or policy, but by the hard constraint of productive capacity. Economists use it to define two distinct efficiency concepts that are often confused: productive efficiency (any point on the curve) and allocative efficiency (a specific point on the curve). Points on the curve are productively efficient. Points inside are achievable but waste capacity. Points outside are currently impossible.'
            },
            {
              label: 'Productive inefficiency',
              points: ['I'],
              analysis: 'Point I sits well inside the frontier – it represents idle resources: unemployed workers, spare factory capacity, misallocated inputs. Output could rise without any sacrifice by moving toward the frontier. Common causes: cyclical unemployment (recession leaves capital and labour idle), structural barriers (skills mismatches, immobility of factors), X-inefficiency (management slack in firms insulated from competition). Key exam point: a recession moves the whole-economy point inside the PPF – it does not shift the frontier itself. The frontier only shifts with a change in productive capacity, not how fully that capacity is used.'
            },
            {
              label: 'Productive efficiency',
              points: ['A', 'B'],
              analysis: 'Points A and B both sit on the frontier – both are productively efficient. Resources are fully and efficiently employed at both points. You cannot raise output of one good without reducing the other. Productive efficiency does NOT mean the right goods are produced – only that production is at maximum capacity. A command economy could be on its PPF while producing only guns and no butter: productively efficient but allocatively catastrophic. The market test is P = minimum LRAC – firms produce at the lowest point on their long-run average cost curve, as competitive pressure forces in the long run.'
            },
            {
              label: 'Allocative efficiency',
              points: ['B'],
              analysis: 'G★ (represented here by point B) marks the single combination on the PPF that society values most: where P = MC for every good. Every other on-curve point is productively efficient but allocatively wrong – producing too much of one good relative to what consumers want. Allocative efficiency requires P = MC at every point: the marginal benefit to society equals the marginal cost of production. Competitive markets drive P to MC through profit-maximisation. For A★ marks: mention Pareto efficiency – this is the only Pareto-optimal point on the PPF, meaning no-one can be made better off without making someone else worse off. Command economies cannot identify this point without price signals – the socialist calculation problem.'
            }
          ]
        },
        { type: 'examEdge', text: 'For A* responses: name Pareto efficiency explicitly – G★ is the only Pareto-optimal point on the PPF, where no-one can be made better off without making someone else worse off. Competitive markets approximate this through P = MC. The socialist calculation problem is the sharpest evaluative counter-example: without market price signals, a command economy cannot locate G★, even when it achieves full-capacity output on the PPF.' }
      ]
    },

    {
      id: 'ppf_6',
      stepLabel: 'Learn: Step 6 of 6',
      title: 'PPF Applications: Trade and Development',
      tip: { icon: '💡', tone: 'blue', text: 'Trade lets both countries consume <em>outside</em> their own PPF – that is the core economic argument for free trade.' },
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
            body: 'Without trade, a country can only consume what it produces. Any consumption point must lie on or inside its own PPF – the frontier is a hard limit set by its resources and technology alone.',
            analysis: "In autarky, the PPF is simultaneously the production frontier and the consumption possibility set. No point beyond it is achievable, regardless of preferences or willingness to pay. This constraint can only be relaxed in two ways: by shifting the frontier outward (economic growth) or by separating production from consumption through trade."
          },
          {
            label: 'Specialise at P',
            tone: 'green',
            head: 'Produce at P – comparative advantage',
            body: "The economy concentrates production at P, the point where its opportunity cost is lowest. This is comparative advantage: produce what you give up least, not necessarily what you're best at in absolute terms.",
            analysis: "Comparative advantage doesn't require absolute superiority. Even if a country is less efficient at producing both goods, it still gains from specialising in whichever good it sacrifices less to produce. The gains come from differences in opportunity costs between countries, not absolute productivity gaps. P is the optimal production point given those relative costs."
          },
          {
            label: 'Consume at C',
            tone: 'amber',
            head: 'C is outside the PPF – only possible with trade',
            body: 'By exporting its surplus from specialising at P and importing the other good, the economy reaches consumption point C – a combination it could never produce alone. C lies outside its own PPF.',
            analysis: "This is the core welfare case for free trade: trade separates the production decision (where to produce on the PPF) from the consumption decision (where to end up). Both partners reach points beyond their individual frontiers, consuming more of both goods than autarky allows. For A*: draw C clearly outside the PPF, label it 'consumption point (with trade)', and note that both trading partners benefit – this single diagram captures the entire gains-from-trade argument."
          }
        ]
      },
      keyTerms: [
        { term: 'Comparative advantage', def: 'The ability to produce a good at a lower opportunity cost than a trading partner – the basis for mutually beneficial specialisation even when one country has absolute advantage in all goods.' },
        { term: 'Gains from trade', def: 'The welfare improvement from countries specialising in their comparative-advantage goods and exchanging output – total production rises and both partners can consume more.' },
        { term: 'Development constraint', def: 'Poor countries face inward PPFs due to capital scarcity, low productivity, and weak institutions – development policy shifts the frontier outward through investment, technology transfer, and reform.' }
      ],
      examEdge: 'Illustrating C beyond the PPF in your exam diagram is an A*-level response – it shows trade separating production from consumption decisions. The development application uses the same logic in reverse: poor countries have inward PPFs due to capital scarcity and low productivity; outward shifts require investment, technology transfer, or institutional reform – not just trade liberalisation.',
      economistQuote: {
        portraitKey: 'economistRicardo',
        tone: 'amber',
        label: 'Economist insight: Ricardo and comparative advantage',
        quote: 'Under a system of perfectly free commerce, each country naturally devotes its capital and labour to such employments as are most beneficial to each. This pursuit of individual advantage is admirably connected with the universal good of the whole.',
        attribution: 'David Ricardo, <em>On the Principles of Political Economy and Taxation</em> (1817)'
      },
      tipLate: {
        icon: '💡', tone: 'amber', head: 'Why this matters',
        text: 'Ricardo\'s breakthrough was showing that mutually beneficial trade does <strong>not</strong> require one country to be better at producing everything – it only requires <em>differences in opportunity cost</em>. His famous example: Portugal could produce both wine and cloth more cheaply than England, yet both countries gained by specialising in their comparative-advantage good and trading. The A* move is to anchor any trade or globalisation answer to Ricardo: gains come from <strong>relative</strong>, not absolute, productivity differences – which is why even low-productivity developing economies can benefit from opening to trade.'
      },
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
    title:    'Production Possibility Frontiers',
    subtitle: 'Theme 1 &middot; Topic 1.4 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('ppf_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers PPF construction, productive efficiency, opportunity cost, the bowed-out shape, shifts, and capital vs consumer goods',
    shortNames: [
      'PPF definition', 'Numeric opp cost', 'Bowed-out shape', 'Points on PPF',
      'Shifts of PPF', 'Categorise points', 'Cause & effect', 'Match pairs',
      'Data table', 'Para fill'
    ],

    questions: [

      /* 1 – MCQ: productive efficiency */
      { type: 'mcq',
        stem: 'A point <strong>on</strong> the production possibility frontier (PPF) represents:',
        opts: [
          'Productive efficiency – the economy is using all its resources to maximum effect and cannot produce more of one good without producing less of the other',
          'Allocative efficiency – the economy is producing the combination that maximises consumer welfare',
          'Productive inefficiency – the economy has unused resources and could produce more without giving anything up',
          'Unattainable output – the combination lies outside what the economy can produce'
        ],
        ans: 0,
        exp: 'A point <strong>on</strong> the PPF represents <strong>productive efficiency</strong>: all resources are fully and efficiently employed. Moving from one point on the frontier to another requires a trade-off – to produce more of one good, you must sacrifice some of the other. A point <strong>inside</strong> the PPF is productively inefficient (unused resources – unemployment, spare capacity). A point <strong>outside</strong> is currently unattainable. Allocative efficiency is a separate concept requiring P = MC – not shown directly on the PPF diagram.'
      },

      /* 2 – Numeric input: opportunity cost */
      { type: 'numeric_input',
        stem: 'Calculate the <strong>opportunity cost</strong> of producing one additional unit of good A.',
        context: 'An economy can produce on its PPF at the following combinations: Point X: 100 units of A and 200 units of B. Point Y: 110 units of A and 170 units of B.',
        answer: 3,
        tolerance: 0.1,
        unit: 'units of B',
        hint: 'Opportunity cost = units of B given up ÷ units of A gained',
        workingSteps: [
          'Moving from X to Y: A increases by 10 (from 100 to 110)',
          'B decreases by 30 (from 200 to 170)',
          'Opportunity cost per unit of A = 30 ÷ 10 = 3 units of B'
        ],
        exp: 'Moving from Point X (100A, 200B) to Point Y (110A, 170B): gain 10 units of A but sacrifice 30 units of B. Opportunity cost per unit of A = 30 ÷ 10 = <strong>3 units of B</strong>. This is the marginal opportunity cost – the trade-off at the margin. On a bowed-out PPF, the opportunity cost rises as more of one good is produced (increasing opportunity cost), because resources are not perfectly adaptable between uses. If the PPF were a straight line, opportunity cost would be constant.'
      },

      /* 3 – MCQ: bowed-out shape */
      { type: 'mcq',
        stem: 'Why is the production possibility frontier typically <strong>bowed outward</strong> (concave to the origin) rather than a straight line?',
        opts: [
          'Resources are not perfectly adaptable between different uses – as more of one good is produced, increasingly less suitable resources must be used, raising the opportunity cost',
          'Firms face economies of scale – as they produce more of one good, costs fall and they can also produce more of the other good',
          'Technology improves automatically as more goods are produced – this shifts the frontier outward',
          'The government intervenes to ensure production is diversified, creating the bowed shape through regulation'
        ],
        ans: 0,
        exp: 'The bowed-out shape reflects <strong>increasing opportunity cost</strong>: resources are not perfectly adaptable between uses. Initially, the most suitable resources are transferred – low opportunity cost. As more of one good is produced, progressively less suitable resources are reassigned – raising the marginal opportunity cost. Example: the first farmland converted from wheat to corn is land already nearly suited to corn. Later conversions use land poorly suited to corn – low yield per wheat unit sacrificed. A straight-line PPF would imply constant opportunity cost – only if all resources were equally adaptable.'
      },

      /* 4 – Categorise: points on the PPF */
      { type: 'categorise',
        stem: 'Sort each production point into the correct category.',
        categories: ['On the PPF (efficient)', 'Inside the PPF (inefficient)', 'Outside the PPF (unattainable)'],
        items: [
          { text: 'An economy is at full employment producing 500 guns and 200 tonnes of butter at its maximum capacity combination', category: 'On the PPF (efficient)' },
          { text: 'High unemployment means 15% of the workforce is idle – output is below the frontier', category: 'Inside the PPF (inefficient)' },
          { text: 'A country wants to produce 700 guns and 300 tonnes of butter but lacks the resources and technology to achieve this', category: 'Outside the PPF (unattainable)' },
          { text: 'Factories are running at 60% capacity due to a recession', category: 'Inside the PPF (inefficient)' },
          { text: 'After a new invention doubles agricultural productivity, the economy reaches a previously impossible output combination', category: 'On the PPF (efficient)' },
          { text: 'A country borrows technology from abroad and immediately produces a combination not achievable domestically before', category: 'Outside the PPF (unattainable)' }
        ],
        exp: '<strong>On the PPF</strong>: full employment of all resources – productive efficiency. <strong>Inside the PPF</strong>: productive inefficiency – unused resources (unemployment, spare capacity, poor allocation). The economy could reach the frontier without giving anything up. <strong>Outside the PPF</strong>: currently unattainable with existing resources and technology – requires a rightward shift (economic growth) through technology improvement, increased factor inputs, or institutional change. Technology transfer can shift the frontier, making previously unattainable combinations achievable.'
      },

      /* 5 – MCQ: shifts of the PPF */
      { type: 'mcq',
        stem: 'Which of the following would cause the PPF to shift <strong>outward</strong> (economic growth)?',
        opts: [
          'A breakthrough in renewable energy technology that lowers the cost of power across all industries',
          'A fall in unemployment rate from 8% to 4% – the economy moves to a point on the existing PPF',
          'An increase in consumer spending that shifts the demand curve for goods rightward',
          'A reallocation of resources from consumer goods to capital goods production within the existing PPF'
        ],
        ans: 0,
        exp: 'An outward shift of the PPF represents genuine <strong>economic growth</strong> – an increase in productive capacity. This requires either more resources (population growth, capital investment, immigration) or better technology. A technology breakthrough achieves more output from the same resources – outward shift. Option B (unemployment falls) is a <em>movement to</em> the existing frontier, not a shift of it. Option C (demand increase) does not create new productive capacity. Option D is a movement along the PPF (trading off consumer for capital goods) – though producing more capital goods today does shift the PPF outward in the future.'
      },

      /* 6 – Match pairs: PPF concepts */
      { type: 'match_pairs',
        stem: 'Match each PPF concept to its correct description.',
        pairs: [
          { a: 'Point inside the PPF', b: 'Productive inefficiency – unused or misallocated resources' },
          { a: 'Point on the PPF', b: 'Productive efficiency – maximum output given resources' },
          { a: 'Outward shift of the PPF', b: 'Economic growth – increased productive capacity' },
          { a: 'Increasing opportunity cost', b: 'Bowed-out shape – resources not perfectly adaptable' },
          { a: 'Capital vs consumer goods trade-off', b: 'Current sacrifice boosts future productive capacity' },
          { a: 'Comparative advantage', b: 'Countries specialise in goods where relative opportunity cost is lowest' }
        ],
        exp: 'PPF vocabulary: inside (inefficiency); on frontier (productive efficiency); outward shift (growth); bowed-out shape (increasing opportunity cost, imperfect factor adaptability); capital-consumer trade-off (key development question – sacrifice now for greater capacity later); comparative advantage (the PPF framework extends to international trade – countries at different points on their PPFs can gain from specialisation and trade even if one country is absolutely better at everything).'
      },

      /* 7 – Cause & effect: what shifts the PPF */
      { type: 'cause_effect',
        stem: 'Match each change to its effect on the PPF.',
        pairs: [
          { cause: 'A country invests heavily in education and workforce skills', effect: 'PPF shifts outward – more human capital increases productive capacity' },
          { cause: 'A major earthquake destroys 20% of a country\'s capital stock', effect: 'PPF shifts inward – productive capacity is reduced' },
          { cause: 'Mass immigration of working-age skilled workers', effect: 'PPF shifts outward – increased labour force quantity and quality' },
          { cause: 'A country prioritises capital good production over consumer goods', effect: 'PPF shifts outward more in the future – current sacrifice, future gain' },
          { cause: 'A devastating pandemic kills 10% of the labour force', effect: 'PPF shifts inward – labour force shrinks, reducing output potential' },
          { cause: 'A country adopts a new agricultural technology that doubles food yields', effect: 'PPF shifts outward, especially in the food production direction' }
        ],
        exp: 'The PPF shifts <strong>outward</strong> when productive capacity increases: more resources (labour, capital, land), better technology, improved human capital, or better institutions. It shifts <strong>inward</strong> when capacity is destroyed: natural disasters, pandemics, capital depreciation without replacement, war. The capital-consumer goods trade-off is particularly important: sacrificing consumption today (moving up the PPF toward capital goods) shifts the PPF outward more rapidly in the future – the fundamental development choice facing poor countries.'
      },

      /* 8 – Odd one out: what shifts the PPF outward */
      { type: 'odd_one_out',
        stem: 'Three of these will shift the PPF <strong>outward</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🎓', label: 'A government doubles spending on university education and vocational training', note: '' },
          { icon: '🏭', label: 'New industrial robots replace manual labour, cutting production costs across all sectors', note: '' },
          { icon: '📈', label: 'Consumer confidence rises and households increase spending on goods and services', note: '' },
          { icon: '🌱', label: 'Favourable weather enables a record harvest, expanding agricultural productive capacity', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>rising consumer confidence and spending</strong>. An increase in consumer demand causes a movement toward the existing PPF (reducing unemployment/spare capacity) – it does not shift the frontier outward. The other three directly increase productive capacity: education investment builds human capital; industrial robots are new technology; a record harvest expands agricultural output potential. Demand-side increases close the gap between actual output (inside PPF) and potential output (on PPF) – supply-side improvements shift the PPF itself.'
      },

      /* 9 – Data table: capital vs consumer goods trade-off */
      { type: 'data_table',
        stem: 'Two economies with identical starting PPFs make different allocation choices over 20 years.',
        headers: ['Economy', 'Capital goods share of output (avg)', 'Consumer goods share', 'GDP growth (annual avg)'],
        rows: [
          ['Economy Alpha', '35%', '65%', '6.2%'],
          ['Economy Beta', '18%', '82%', '2.1%'],
          ['South Korea 1960–1990 (reference)', '32%', '68%', '8.1%'],
          ['UK 1990–2010 (reference)', '17%', '83%', '2.4%']
        ],
        question: 'Which conclusion is <strong>best supported</strong> by the data in terms of PPF theory?',
        opts: [
          'Higher capital goods investment is associated with faster PPF outward shifts – consistent with the capital-consumer goods trade-off theory',
          'Maximising consumer goods production is the best development strategy – Economy Beta\'s citizens are better off in every period',
          'Both economies will converge to the same PPF position over time regardless of allocation choices',
          'The data show that Alpha\'s growth is unsustainable – excessive capital investment always leads to diminishing returns'
        ],
        ans: 0,
        exp: 'The data show a consistent pattern: economies allocating more resources to capital goods (Alpha: 35%, S.Korea: 32%) achieve higher long-run growth rates (6.2%, 8.1%) versus those prioritising consumption (Beta: 18%, UK: 17% → 2.1%, 2.4% growth). This is consistent with PPF theory: capital goods investment shifts the PPF outward more rapidly (new machines, infrastructure, technology). The trade-off is real – Beta\'s citizens consume more now but forfeit faster future growth. South Korea\'s industrialisation strategy is the canonical real-world example of this trade-off paying off.'
      },

      /* 10 – Para fill: PPF and opportunity cost */
      { type: 'para_fill',
        stem: 'Complete the paragraph about the PPF and resource allocation.',
        anchor: 'The PPF illustrates the fundamental economic concepts of scarcity, choice, and opportunity cost.',
        para: 'The PPF shows the maximum combinations of two goods an economy can produce when all resources are [1] used. Any point [2] the frontier is productively efficient – producing more of one good requires [3] less of the other. The [4] shape of the PPF reflects increasing opportunity cost: as more resources are shifted to one good, [5] suitable resources are used, making each additional unit more [6] to produce. An outward shift of the PPF represents [7], caused by better [8] or increased [9] inputs.',
        blanks: [
          { id: 1, opts: ['fully', 'partially', 'efficiently', 'freely'], ans: 0 },
          { id: 2, opts: ['on', 'inside', 'outside', 'near'], ans: 0 },
          { id: 3, opts: ['producing', 'consuming', 'importing', 'exporting'], ans: 0 },
          { id: 4, opts: ['bowed-out', 'straight', 'bowed-in', 'vertical'], ans: 0 },
          { id: 5, opts: ['less', 'more', 'equally', 'perfectly'], ans: 0 },
          { id: 6, opts: ['costly', 'cheap', 'easy', 'profitable'], ans: 0 },
          { id: 7, opts: ['economic growth', 'economic decline', 'full employment', 'causes-of-inflation-and-deflation'], ans: 0 },
          { id: 8, opts: ['technology', 'prices', 'demand', 'exports'], ans: 0 },
          { id: 9, opts: ['factor', 'consumer', 'financial', 'traded'], ans: 0 }
        ],
        exp: '(1) <strong>Fully</strong> – all resources employed efficiently. (2) <strong>On</strong> the frontier – productive efficiency. (3) <strong>Producing</strong> – the trade-off: more of A means less of B. (4) <strong>Bowed-out</strong> (concave) – the characteristic shape. (5) <strong>Less</strong> suitable resources are used as we move along the frontier. (6) <strong>Costly</strong> – increasing opportunity cost. (7) <strong>Economic growth</strong> – outward shift = more capacity. (8) <strong>Technology</strong> – TFP improvements shift the frontier. (9) <strong>Factor</strong> inputs – more labour, capital, or land also shift the PPF outward.'
      }

    ]
  };

})();

