window.ECONOS_TOPIC = {
  id: 'ppf',
  topicNum: '1.4',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Production Possibility Frontiers',
  estTime: '7-9 minutes',
  goal: 'Lock in PPF construction, opportunity cost along the frontier, shifts, and how the PPF illustrates core economic concepts.',
  intro: {
    heroKey: 'heroPPF',
    summary: 'The Production Possibility Frontier is economics\'s most versatile diagram. It simultaneously illustrates scarcity, choice, opportunity cost, efficiency, and economic growth — all in one simple curve.',
    doInThis: 'Work through 7 cards covering PPF construction, points on/inside/outside the frontier, opportunity cost, the bowed-out shape, shifts, and applications to growth and resource allocation.',
    outcomes: [
      'Draw and label a PPF showing maximum output combinations for two goods',
      'Identify points of efficiency, inefficiency, and impossibility',
      'Calculate opportunity cost from a PPF and explain the bowed-out shape',
      'Explain inward and outward shifts of the PPF and their causes'
    ],
    tip: 'Any point ON the PPF = productively efficient. Inside = inefficient (resources wasted). Outside = currently impossible. A shift OUT = economic growth.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'ppf_1',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'The PPF: one diagram, five concepts',
      lede: 'The Production Possibility Frontier is the most versatile diagram in Theme 1 — explore construction, opportunity cost, shifts, and efficiency using the interactive diagram below.',
      diagramKey: 'ppfInteractive',
      steps: [
        {
          key: 'base',
          label: 'Construction',
          text: 'The PPF shows the <strong>maximum combinations</strong> of two goods an economy can produce given current resources and technology. Point A (on the curve) is <strong>productively efficient</strong>. Point B (inside) is <strong>inefficient</strong> — resources are wasted or unemployed. Point C (outside) is <strong>unattainable</strong> with current resources — only achievable after economic growth.'
        },
        {
          key: 'extension',
          label: 'Opportunity cost',
          text: 'Moving from D to E along the PPF means gaining capital goods but sacrificing consumer goods — this is the <strong>opportunity cost</strong>. The curve is <strong>bowed out</strong> because resources are not equally suited to all uses. The further you specialise in one good, the less adaptable the remaining resources are, so each extra unit costs progressively more of the other good — <strong>increasing opportunity cost</strong>.'
        },
        {
          key: 'shift',
          label: 'Shifts',
          text: 'The PPF shifts <strong>outward (PPF₂)</strong> when productive capacity increases: better technology, more resources, or higher productivity. It shifts <strong>inward (PPF₃)</strong> after negative supply shocks: war, natural disaster, or capital depreciation. Movement along PPF₁ is just reallocation of existing resources — the frontier itself does not move.'
        },
        {
          key: 'efficiency',
          label: 'Efficiency',
          text: 'Point F shows <strong>productive efficiency</strong> — on the PPF, maximum output, no waste. Point G shows <strong>allocative efficiency</strong> — the specific point on the PPF where the combination produced matches consumer preferences (where P=MC). Point H (inside) is <strong>productively inefficient</strong>. Critical: being on the PPF (productive efficiency) does <em>not</em> guarantee being at the right point (allocative efficiency).'
        }
      ],
      examEdge: 'In exam diagrams always label: both axes with good names, the PPF curve, a point inside labelled "inefficient", a point on the curve labelled "efficient/on the PPF", and a point outside labelled "unattainable". Missing axis labels or unlabelled points are the most common PPF mark losses.'
    },
    {
      id: 'ppf_2',
      template: 'framing',
      title: 'Opportunity Cost on the PPF',
      body: 'Moving along the PPF from one point to another shows the <strong>opportunity cost</strong> of producing more of one good: the units of the other good that must be sacrificed.<br><br>On a <em>straight-line PPF</em> (constant opportunity cost), the trade-off ratio is constant — e.g., every 1 extra unit of Good A always costs 2 units of Good B.<br><br>On a <em>bowed-out PPF</em> (increasing opportunity cost), the trade-off worsens as you produce more of one good — resources are not perfectly suited to all uses, so switching becomes increasingly costly.',
      keyTerms: [
        { term: 'Opportunity cost on PPF', def: 'The quantity of Good B given up to produce one more unit of Good A — the gradient of the PPF at that point.' },
        { term: 'Constant opportunity cost', def: 'Straight-line PPF: resources perfectly substitutable; trade-off is constant.' },
        { term: 'Increasing opportunity cost', def: 'Bowed-out PPF: resources not perfectly adaptable; each extra unit of one good costs progressively more of the other.' }
      ],
      examEdge: 'To calculate opportunity cost from a table: find how many units of one good are given up per unit of the other gained. From a diagram: find the slope. Both are tested. Show the calculation step — "output of B falls from X to Y, while A rises by Z, so OC = (X-Y)/Z units of B per unit of A."'
    },
    {
      id: 'ppf_3',
      template: 'framing',
      title: 'Why the PPF Is Bowed Out',
      body: 'A realistic PPF is concave to the origin (bowed out) because of the <strong>law of increasing opportunity cost</strong>: resources are not perfectly suited to producing all goods equally. As you transfer resources from one good to another, you first move the resources least suited to the first good (low opportunity cost), then progressively the resources more suited to it (higher opportunity cost).<br><br><strong>Example:</strong> Transferring farmland to car production — the least fertile land moves first, then increasingly fertile land must be converted, causing a rising opportunity cost per car produced.',
      keyTerms: [
        { term: 'Concave to origin', def: 'The PPF bows outward — reflecting increasing opportunity cost as specialisation in one good deepens.' },
        { term: 'Law of increasing opportunity cost', def: 'As more of one good is produced, progressively more of the other must be sacrificed.' },
        { term: 'Resource specificity', def: 'Resources are not equally suited to all uses — a surgeon and a farmer are not interchangeable without cost.' }
      ],
      examEdge: 'A straight-line PPF is only valid if resources are perfectly homogeneous (interchangeable). Real economies have specialist resources, so bowed-out PPFs are more realistic. If the question specifies "constant opportunity cost" use a straight line; otherwise draw the curve.'
    },
    {
      id: 'ppf_4',
      template: 'cause',
      title: 'Shifts in the PPF',
      causes: [
        { head: 'Outward shift (economic growth)', body: 'The PPF shifts out if: more resources are available (population growth, discovery of raw materials), technology improves (more output per input), or productivity increases (better education/training). Not necessarily a parallel shift — if only one industry improves, only that axis shifts.' },
        { head: 'Inward shift (negative supply shock)', body: 'The PPF shifts in if: war destroys capital, natural disaster depletes resources, disease reduces labour supply, or environmental degradation limits land productivity.' },
        { head: 'Movement along (reallocation)', body: 'A change in how existing resources are used — moving along the existing PPF. Trade-off between goods; no new capacity.' },
        { head: 'Investment goods choice', body: 'Producing more capital goods now (forgoing consumer goods) shifts the PPF further out in the future — key choice for long-run growth. Low-consumption, high-investment strategy = faster future expansion.' }
      ],
      examEdge: 'A common exam question: "Country A produces more capital goods today." Show this as a point closer to the capital-goods axis on the PPF. Explain this shifts the PPF further outward in the future. This neatly combines PPF analysis with growth theory.'
    },
    {
      id: 'ppf_5',
      template: 'paired',
      title: 'Consumer vs Capital Goods Trade-Off',
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
      examEdge: 'Post-war Germany and Japan both chose high investment/low consumption to rebuild. China\'s decades of 35-45% investment/GDP ratios generated rapid PPF expansion. This is the classic "guns vs butter" or "now vs later" trade-off — use historical examples for evaluation credit.'
    },
    {
      id: 'ppf_6',
      template: 'mechanisms',
      title: 'PPF and Economic Efficiency',
      intro: 'The PPF is the primary vehicle for illustrating efficiency concepts in micro.',
      steps: [
        { label: 'Productive efficiency', text: 'Any point ON the PPF — maximum output from available resources. Impossible to produce more of one good without producing less of another.' },
        { label: 'Productive inefficiency', text: 'Any point INSIDE the PPF — output could be increased without sacrificing the other good. Caused by unemployment, idle capital, poor management, or structural barriers.' },
        { label: 'Allocative efficiency', text: 'The OPTIMAL point ON the PPF — where the combination produced reflects consumer preferences (social welfare maximised). A point on the PPF can be productively efficient but allocatively inefficient if it produces the "wrong" combination.' },
        { label: 'Growth', text: 'An outward shift of the PPF — increases productive potential. Previously unattainable points become attainable. Does not guarantee improved welfare if distribution is unequal.' }
      ],
      examEdge: 'Critical distinction: productive efficiency (on the PPF) ≠ allocative efficiency (right point on the PPF). A command economy might be on its PPF (no wasted resources) but allocatively inefficient (wrong goods produced for consumer preferences). Examiners test this distinction.'
    },
    {
      id: 'ppf_7',
      template: 'framing',
      title: 'PPF Applications: Trade and Development',
      body: 'The PPF has several real-world applications beyond illustrating scarcity.<br><br><strong>Trade:</strong> Comparative advantage means each country specialises on the PPF point corresponding to its lowest-opportunity-cost good. Trade enables both countries to consume outside their individual PPFs — a key argument for free trade (covered in Theme 4).<br><br><strong>Development:</strong> The key constraint for developing countries is not preference (they want more of everything) but resource availability and productivity — their PPF is small. Development economics is fundamentally about shifting the PPF outward through investment, institutional reform, and technology transfer.',
      keyTerms: [
        { term: 'Specialisation', def: 'Concentrating production on goods where a country has comparative advantage — maximises combined output.' },
        { term: 'Gains from trade', def: 'Both trading partners can consume beyond their individual PPFs when specialisation and trade occur.' },
        { term: 'Development constraint', def: 'Poor countries face inward PPFs due to capital scarcity, low productivity, and weak institutions — development policy shifts the frontier outward.' }
      ],
      examEdge: 'Trade allows consumption outside the PPF — this is why free trade is welfare-improving even for a country with absolute advantage in all goods. Illustrating this with a PPF diagram, showing consumption points beyond the frontier after trade, is an A*-level response.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
