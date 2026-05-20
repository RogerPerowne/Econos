window.ECONOS_TOPIC = {
  id: 'ppf',
  topicNum: '1.4',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
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
      stepLabel: 'Learn: Step 2 of 7',
      diagramKey: 'ppfOpportunityCost',
      title: 'Opportunity Cost on the PPF',
      tip: { icon: '💡', tone: 'blue', text: 'The opportunity cost of moving along the PPF is the units of one good sacrificed to produce one more unit of the other — it changes at every point on the curve.' },
      comparison: { title: 'Two types of PPF', emoji: '📊', left: { tone: 'blue', icon: '📏', label: 'Straight-line PPF', caption: 'Constant opportunity cost — resources perfectly substitutable. The trade-off ratio stays fixed regardless of how much you produce.' }, right: { tone: 'amber', icon: '〰️', label: 'Bowed-out PPF', caption: 'Increasing opportunity cost — resources are specialised. Each extra unit of Good B costs progressively more Good A.' } },
      keyTerms: [
        { term: 'Opportunity cost on PPF', def: 'The quantity of Good B given up to produce one more unit of Good A — the gradient of the PPF at that point.' },
        { term: 'Constant opportunity cost', def: 'Straight-line PPF: resources perfectly substitutable; trade-off is constant.' },
        { term: 'Increasing opportunity cost', def: 'Bowed-out PPF: resources not perfectly adaptable; each extra unit of one good costs progressively more of the other.' }
      ],
      examEdge: 'To calculate opportunity cost from a table: find how many units of one good are given up per unit of the other gained. From a diagram: find the slope. Both are tested. Show the calculation step — "output of B falls from X to Y, while A rises by Z, so OC = (X-Y)/Z units of B per unit of A."'
    },

    {
      id: 'ppf_3',
      stepLabel: 'Learn: Step 3 of 7',
      diagramKey: 'ppfBowedOut',
      title: 'Why the PPF Is Bowed Out',
      tip: { icon: '💡', tone: 'blue', text: 'Resources are not equally suited to all uses. Switch the easy ones first — then the increasingly costly ones follow, driving the curve outward.' },
      flow: [
        { icon: '🏭', title: 'All resources in Good A',       sub: 'Economy starts at one end of the PPF — maximum Good A, zero Good B.' },
        { icon: '🔄', title: 'Least suited resources switch',  sub: 'Resources poorly suited to Good A move first — small sacrifice, decent gain in Good B. Low opportunity cost.' },
        { icon: '⬆️', title: 'Better-suited resources follow', sub: 'Now you must transfer resources well-suited to Good A. Each extra unit of Good B costs progressively more Good A.' },
        { icon: '〰️', title: 'Result: the curve bows out',    sub: 'Rising sacrifice per extra unit = a curve that bends away from the origin. Only a straight line if resources are identical.' }
      ],
      flowTitle: 'Why opportunity cost rises as you specialise',
      flowEmoji: '📈',
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
      stepLabel: 'Learn: Step 4 of 7',
      diagramKey: 'ppfShifts',
      title: 'Shifts in the PPF',
      tip: { icon: '💡', tone: 'blue', text: 'Movement <em>along</em> the PPF = reallocation of existing resources. Movement <em>of</em> the PPF = a change in productive capacity.' },
      causes: [
        { head: 'Movement along PPF₁', icon: '↔️', body: 'Reallocating existing resources between the two goods — opportunity cost in action. No change in total capacity, just a different mix of the two goods.', tone: 'blue' },
        { head: 'Short-run growth (→ PPF)', icon: '🔄', body: 'Recovery from recession: unemployment falls, spare capacity is reactivated, output rises by moving from inside the PPF onto the curve. The frontier itself does not move — this is demand-side growth.', tone: 'amber' },
        { head: 'Long-run growth (PPF₁ → PPF₂)', icon: '📈', body: 'The PPF shifts outward: more or higher-quality factor inputs — population growth, capital investment, better technology, education and training. This is supply-side growth and the only route to a permanently higher ceiling.', tone: 'green' },
        { head: 'Inward shift (PPF₁ → PPF₃)', icon: '📉', body: 'Negative supply shocks shrink productive capacity: war destroys capital, natural disasters destroy resources, "brain drain" emigration depletes skilled labour, lack of investment lets capital depreciate.', tone: 'rose' }
      ],
      causesStyle: 'tinted-flat',
      causesLabel: 'Four types of PPF movement',
      causesEmoji: '🧭',
      examEdge: 'Two diagrams in one question: "Country A is recovering from recession" → show a point moving from inside the PPF onto the curve (short-run / demand-side). "Country A invests in new technology" → show PPF₁ → PPF₂ shifting outward (long-run / supply-side). Confusing the two is the classic mark loss — name the type of growth explicitly.'
    },

    {
      id: 'ppf_5',
      template: 'paired',
      stepLabel: 'Learn: Step 5 of 7',
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
      id: 'ppf_6',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 6 of 7',
      diagramKey: 'ppfEfficiency',
      title: 'PPF and Economic Efficiency',
      tip: { icon: '💡', tone: 'blue', text: 'Productive efficiency = ON the PPF. Allocative efficiency = the <em>right</em> point on the PPF. These are different — and examiners test whether you know it.' },
      causes: [
        { head: 'Productive efficiency',   icon: '✅', body: 'Any point <strong>ON the PPF</strong> — maximum output from available resources. Impossible to produce more of one good without producing less of another.' },
        { head: 'Productive inefficiency', icon: '❌', body: 'Any point <strong>INSIDE the PPF</strong> — output could be increased without sacrificing the other good. Caused by unemployment, idle capital, poor management, or structural barriers.' },
        { head: 'Allocative efficiency',   icon: '🎯', body: 'The <strong>optimal point ON the PPF</strong> — where the combination produced matches consumer preferences (social welfare maximised). A point on the PPF can be productively efficient but allocatively inefficient.' },
        { head: 'Economic growth',         icon: '📈', body: 'An <strong>outward shift</strong> of the PPF — increases productive potential. Previously unattainable points become attainable. Does not guarantee improved welfare if distribution is unequal.' }
      ],
      causesLabel: 'Four efficiency concepts',
      causesEmoji: '⚙️',
      examEdge: 'Critical distinction: productive efficiency (on the PPF) ≠ allocative efficiency (right point on the PPF). A command economy might be on its PPF (no wasted resources) but allocatively inefficient (wrong goods produced for consumer preferences). <strong>Pareto efficiency</strong> is the welfare benchmark sitting behind allocative efficiency — a position where no one can be made better off without making someone else worse off. Examiners test the productive ≠ allocative distinction; mentioning Pareto signals A* polish.'
    },

    {
      id: 'ppf_7',
      stepLabel: 'Learn: Step 7 of 7',
      diagramKey: 'ppfTrade',
      title: 'PPF Applications: Trade and Development',
      tip: { icon: '💡', tone: 'blue', text: 'Trade lets both countries consume <em>outside</em> their own PPF — that is the core economic argument for free trade.' },
      comparison: {
        title: 'Two big applications of the PPF',
        emoji: '🌐',
        left:  { tone: 'blue',  icon: '🤝', label: 'International trade',  caption: 'Specialise at your lowest opportunity-cost point. Trade lets both partners consume beyond their individual PPFs.' },
        right: { tone: 'green', icon: '🌱', label: 'Economic development', caption: 'Development = shifting the PPF outward. The binding constraint is resources and productivity, not preference.' }
      },
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
