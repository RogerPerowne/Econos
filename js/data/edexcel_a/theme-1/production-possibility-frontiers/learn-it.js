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
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'The PPF – the big picture',
      lede: 'A production possibility frontier shows the maximum combinations of two goods an economy can produce with its current resources and technology.',
      tip: { icon: '✅', tone: 'green', text: 'PPFs are about scarcity, choice and opportunity cost.' },
      diagramPanel: {
        diagramKey: 'ppfBigPicture',
        title: 'What a PPF shows',
        emoji: '📈',
        layout: 'side',
        bullets: [
          '<strong style="color:#2563EB;">A · Productively efficient</strong> — on the frontier, using resources fully and efficiently.',
          '<strong style="color:#D97706;">B · Inefficient / unemployed</strong> — inside the frontier, resources underused or not fully employed.',
          '<strong style="color:#059669;">C · Unattainable</strong> — outside the frontier, not possible with current resources and technology.'
        ]
      },
      methodGrid: {
        label: 'The three core ideas',
        emoji: '🎯',
        exampleLabel: 'Memory hook',
        items: [
          { tone: 'blue',  icon: '🔒', title: 'Scarcity',        body: 'Resources are limited.',                  example: 'We can’t have it all – choices are forced.' },
          { tone: 'amber', icon: '⚖️', title: 'Choice',          body: 'More of one good means less of another.', example: 'Every choice has a cost.' },
          { tone: 'green', icon: '🌱', title: 'Opportunity cost', body: 'The next best alternative forgone.',       example: 'What you give up is the real cost.' }
        ]
      },
      tileGrid: {
        label: 'Assumptions',
        emoji: '📄',
        items: [
          { tone: 'blue', icon: '👥', title: 'Resources fixed',  sub: 'A given amount of labour, capital, land and enterprise — no change in total resources.' },
          { tone: 'blue', icon: '⚙️', title: 'Technology fixed', sub: 'Methods of production stay the same — no technological improvement.' },
          { tone: 'blue', icon: '✅', title: 'Full employment',  sub: 'All resources used fully and efficiently — the economy sits on the frontier.' }
        ]
      },
      keyTakeaway: 'A PPF is not just a curve – it is a visual summary of scarcity, efficiency and trade-offs.',
      examEdge: 'In essays, use the PPF to show opportunity cost, unemployment inside the curve, and economic growth when the frontier shifts out.'
    },

    {
      id: 'ppf_2',
      template: 'framing',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Efficiency, unemployment and impossibility',
      lede: 'Where a point sits relative to the frontier tells us whether resources are used efficiently, underused, or are currently unattainable.',
      tip: { icon: '✅', tone: 'green', text: 'On the curve = efficient. Inside = underused. Outside = unattainable.' },
      diagramPanel: {
        diagramKey: 'ppfClassify',
        title: 'Classify the point',
        emoji: '🎯',
        layout: 'side',
        bullets: [
          '<strong style="color:#2563EB;">A · Productively efficient</strong> — on the frontier. All resources fully used: no waste, no unemployment.',
          '<strong style="color:#D97706;">B · Productively inefficient</strong> — inside the frontier. Some resources underused or unemployed (spare capacity).',
          '<strong style="color:#059669;">C · Unattainable now</strong> — outside the frontier. Achievable only with more resources or better technology.'
        ]
      },
      methodGrid: {
        label: 'What each region means',
        emoji: '📍',
        items: [
          { tone: 'amber', icon: '📉', title: 'Recession / spare capacity', body: 'The economy operates <strong>inside</strong> the curve — unemployment or idle resources exist.' },
          { tone: 'blue',  icon: '👥', title: 'Full employment',            body: 'The economy operates <strong>on</strong> the curve — resources fully used, no spare capacity.' },
          { tone: 'green', icon: '📈', title: 'Long-run growth',             body: 'Only pushing the frontier <strong>outward</strong> turns today’s unattainable point into a possible one.' }
        ]
      },
      note: { icon: 'ℹ️', tone: 'blue', text: 'Moving from inside the curve to the frontier does <strong>not</strong> require economic growth — it requires better use of existing resources.' },
      keyTakeaway: 'The PPF separates what is efficient, what is wasteful, and what is not yet possible.',
      examEdge: 'Always state whether a point is on, inside, or outside the frontier before explaining the economics.'
    },

    {
      id: 'ppf_3',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Opportunity cost – moving along the frontier',
      lede: 'When resources are fixed, producing more of one good means sacrificing some of the other good.',
      tip: { icon: '✅', tone: 'green', text: 'Opportunity cost is the next best alternative forgone.' },
      diagramKey: 'ppfOppCost',
      diagramLabel: 'A move along the curve',
      diagramEmoji: '📈',
      steps: [
        { key: 'ab', label: 'Move A → B',
          text: '<div style="font-size:13.5px;color:#0B1426;line-height:1.7;"><strong style="color:#D97706;">Capital goods rise from 20 → 30</strong> <span style="color:#475569;">(+10)</span><br><strong style="color:#D97706;">Consumer goods fall from 80 → 65</strong> <span style="color:#475569;">(−15)</span><br><br><strong>Opportunity cost = 15 consumer goods.</strong></div>' },
        { key: 'bc', label: 'Move B → C',
          text: '<div style="font-size:13.5px;color:#0B1426;line-height:1.7;"><strong style="color:#DC2626;">Capital goods rise from 30 → 40</strong> <span style="color:#475569;">(+10)</span><br><strong style="color:#DC2626;">Consumer goods fall from 65 → 40</strong> <span style="color:#475569;">(−25)</span><br><br><strong>Opportunity cost = 25 consumer goods.</strong></div>' }
      ],
      flowTitle: 'Why every move along the curve has a cost',
      flowEmoji: '🔁',
      flow: [
        { icon: '🏭', title: 'Want more capital goods', sub: '',  tone: 'blue'   },
        { icon: '🛒', title: 'Must give up consumer goods', sub: '', tone: 'amber' },
        { icon: '⚖️', title: 'The sacrifice is the opportunity cost', sub: '', tone: 'green' }
      ],
      methodGrid: {
        label: 'Why this matters',
        emoji: '💡',
        items: [
          { tone: 'blue',   icon: '👤',  title: 'Every choice has a cost',                  body: 'You can’t have more of everything. Choosing one option means giving up another.' },
          { tone: 'amber',  icon: '⚖️',  title: 'Cost is measured in real alternatives',    body: 'Opportunity cost is what you <em>forgo</em> when you make a choice — not just the money price.' },
          { tone: 'green',  icon: '📈',  title: 'The PPF makes trade-offs visible',          body: 'Moving along the curve shows exactly how one good is exchanged for the other.' }
        ]
      },
      tipLate: { icon: '⚠️', tone: 'amber', text: '<strong>No free lunch</strong> – more of one thing means less of something else while resources stay fixed.' },
      keyTakeaway: 'A movement along the frontier shows choice and opportunity cost, not economic growth.',
      examEdge: 'Use the phrase ‘opportunity cost’ explicitly when explaining a movement from one point on the PPF to another.'
    },

    {
      id: 'ppf_4',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Why the PPF bows out',
      lede: 'The bowed shape of the PPF reflects increasing opportunity cost. Resources are not equally good at producing both goods, so each extra unit comes at a bigger sacrifice.',
      tip: { icon: '✅', tone: 'green', text: 'The curve bows out because resources are specialised.' },
      interactiveDiagram: {
        svgKey: 'ppfBowedOutInteractive',
        label: 'Increasing opportunity cost',
        emoji: '📈',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          { label: 'Small cost',      tone: 'green', show: ['idl-1'],
            head: '+1 capital good early on costs only −1 consumer good.',
            body: 'Near point A the first resources to move into capital goods are those least suited to consumer-good production. Moving them costs little.',
            analysis: 'Adaptable resources transfer first. Their opportunity cost is low because they were only marginally productive in their original use.' },
          { label: 'Larger cost',     tone: 'amber', show: ['idl-1','idl-2'],
            head: 'Now +1 capital good costs −2 consumer goods.',
            body: 'Near point B the easy transfers are gone. The resources moving now were genuinely productive in consumer goods, so giving them up hurts more.',
            analysis: 'The sacrifice has roughly doubled for the same gain. Specialisation starts to bite.' },
          { label: 'Even larger cost', tone: 'rose', show: ['idl-1','idl-2','idl-3'],
            head: 'Near C, +1 capital good costs −3 consumer goods.',
            body: 'The most specialised consumer-good resources are the last to switch. Their opportunity cost is huge — the curve steepens sharply.',
            analysis: 'Equal increases in capital goods require bigger and bigger decreases in consumer goods. <strong>That is increasing opportunity cost.</strong>' }
        ]
      },
      methodGrid: {
        label: 'Why costs rise',
        emoji: '⚙️',
        items: [
          { tone: 'blue',  icon: '👤', title: '1. Best-suited first',     body: 'Some workers, land or capital are highly suited to producing consumer goods.' },
          { tone: 'amber', icon: '🔄', title: '2. Switch less-suited',     body: 'As production shifts, less-suitable resources must be reallocated.' },
          { tone: 'rose',  icon: '📈', title: '3. Cost rises',              body: 'Each extra unit of capital goods becomes more expensive in terms of forgone consumer goods.' }
        ]
      },
      versusList: {
        rows: [{
          left:  { tone: 'green', icon: '🏃', name: 'Early move (near A)', premise: 'Easy to transfer highly adaptable resources.', reason: 'Small sacrifice of consumer goods.' },
          right: { tone: 'rose',  icon: '🚶', name: 'Later move (near C)', premise: 'Harder to transfer specialised resources.',   reason: 'Large sacrifice of consumer goods.' }
        }]
      },
      keyTakeaway: 'The bowed shape is visual evidence that factors of production are specialised, not equally adaptable.',
      examEdge: 'If asked why the PPF is concave to the origin, say ‘increasing opportunity cost due to factor specificity’.'
    },

    {
      id: 'ppf_5',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'PPF and Economic Efficiency',
      tip: { icon: '💡', tone: 'blue', text: 'Productive efficiency = ON the PPF. Allocative efficiency = the <em>right</em> point on the PPF. These are different – and examiners test whether you know it.' },
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
            analysis: 'The PPF is the maximum output frontier: every point on it is a fully employed economy at the limit of its technology and resources. It separates achievable from unachievable, and defines two efficiency concepts often confused: productive (any point on the curve) and allocative (a specific point on it).'
          },
          {
            label: 'Productive inefficiency',
            tone: 'rose',
            head: 'H – inside the PPF',
            body: 'Point H represents idle resources: unemployed workers, spare factory capacity, misallocated inputs. Output could rise without any sacrifice – moving H to the frontier costs nothing.',
            analysis: 'Common causes: cyclical unemployment (idle capital and labour), structural barriers (skills mismatch, factor immobility), X-inefficiency (management slack). Key exam point: a <em>recession</em> moves the economy <em>inside</em> the PPF – it does not shift the frontier. The frontier shifts only with a change in productive <em>capacity</em>, not how fully it is used.'
          },
          {
            label: 'Productive efficiency',
            tone: 'green',
            head: 'Any point ON PPF₁ – productively efficient',
            body: 'Multiple points sit on the curve. All are productively efficient: resources are fully and efficiently employed. You cannot raise output of one good without reducing the other.',
            analysis: 'Productive efficiency does NOT mean the right goods are produced – only that output is at maximum capacity. A command economy could sit on its PPF making only guns and no butter: productively efficient but allocatively catastrophic. The market test is P = minimum LRAC – competition forces firms to the lowest point on their long-run average cost curve.'
          },
          {
            label: 'Allocative efficiency',
            tone: 'amber',
            head: 'G★ – the one allocatively efficient point',
            body: 'G★ is the single combination on PPF₁ that society values most: P = MC. Every other on-curve point is productively efficient but allocatively wrong – producing too much of one good relative to what consumers want.',
            analysis: 'Allocative efficiency requires P = MC: marginal social benefit equals marginal cost. It is one point on the PPF reflecting consumer preferences, and competition drives P → MC. For A*: mention <strong>Pareto efficiency</strong> – at G★ no-one can gain without someone losing. Command economies can\'t find G★ without price signals – the calculation problem.'
          }
        ]
      },
      examEdge: 'For A* responses: name <strong>Pareto efficiency</strong> explicitly – G★ is the only Pareto-optimal point on the PPF, where no-one can be made better off without making someone else worse off. Competitive markets approximate this through P = MC. The socialist calculation problem is the sharpest evaluative counter-example: without market price signals, a command economy cannot locate G★, even when it achieves full-capacity output on the PPF.'
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
            analysis: "Comparative advantage doesn't require absolute superiority. Even if a country is less efficient at both goods, it still gains by specialising where it sacrifices less. The gains come from differences in opportunity cost between countries, not absolute productivity gaps. P is the optimal production point given those relative costs."
          },
          {
            label: 'Consume at C',
            tone: 'amber',
            head: 'C is outside the PPF – only possible with trade',
            body: 'By exporting its surplus from specialising at P and importing the other good, the economy reaches consumption point C – a combination it could never produce alone. C lies outside its own PPF.',
            analysis: "The core welfare case for free trade: trade separates the production decision (where to produce on the PPF) from consumption (where to end up). Both partners reach points beyond their own frontiers, consuming more of both goods than autarky allows. For A*: draw C outside the PPF, label it 'consumption point (with trade)', and note both partners gain."
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

