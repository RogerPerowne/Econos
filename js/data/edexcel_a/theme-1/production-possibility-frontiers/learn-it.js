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
      interactiveDiagram: {
        svgKey: 'ppfOppCost',
        label: 'A move along the curve',
        emoji: '📈',
        layers: ['layer-ab', 'layer-bc'],
        views: [
          { label: 'Move A → B', tone: 'amber', show: ['layer-ab'],
            head: 'Move A → B',
            body: '<strong style="color:#D97706;">Capital goods rise from 20 → 30</strong> <span style="color:#475569;">(+10)</span><br><strong style="color:#D97706;">Consumer goods fall from 80 → 65</strong> <span style="color:#475569;">(−15)</span><br><br><strong>Opportunity cost = 15 consumer goods.</strong>' },
          { label: 'Move B → C', tone: 'rose', show: ['layer-bc'],
            head: 'Move B → C',
            body: '<strong style="color:#DC2626;">Capital goods rise from 30 → 40</strong> <span style="color:#475569;">(+10)</span><br><strong style="color:#DC2626;">Consumer goods fall from 65 → 40</strong> <span style="color:#475569;">(−25)</span><br><br><strong>Opportunity cost = 25 consumer goods.</strong>' }
        ]
      },
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
      template: 'framing',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Shifts in the PPF',
      lede: 'The whole production possibility frontier shifts when the economy’s productive capacity changes — not when it simply uses existing resources better.',
      tip: { icon: '✅', tone: 'green', text: 'A shift means the economy can produce more or less than before.' },
      diagramLabel: 'Three kinds of shift',
      diagramEmoji: '📈',
      diagramKey: 'ppfShiftsTrio',
      methodGrid: {
        label: 'What causes growth',
        emoji: '🌱',
        items: [
          { tone: 'green', icon: '👥', title: 'More labour and enterprise', body: 'A larger or more active workforce increases productive capacity.' },
          { tone: 'green', icon: '💰', title: 'More capital and investment', body: 'More machines, infrastructure and tools raise potential output.' },
          { tone: 'green', icon: '⚙️', title: 'Better technology and productivity', body: 'Improvements allow more output from the same resources.' },
          { tone: 'green', icon: '🎓', title: 'Better education and skills', body: 'A more skilled population uses resources more effectively.' }
        ]
      },
      methodGrid2: {
        label: 'What causes decline',
        emoji: '📉',
        items: [
          { tone: 'rose', icon: '🌋', title: 'Natural disaster or war',           body: 'Destroys resources and infrastructure, reducing productive capacity.' },
          { tone: 'rose', icon: '🍃', title: 'Resource depletion',                body: 'Finite resources run down, reducing what can be produced.' },
          { tone: 'rose', icon: '👥', title: 'Loss of workers or capital stock',  body: 'Emigration, illness, or damage reduces the economy’s capacity.' }
        ]
      },
      note: { icon: 'ℹ️', tone: 'blue', text: 'Moving from an interior point to the frontier is recovery or better efficiency. <strong>Shifting the frontier out is economic growth.</strong>' },
      keyTakeaway: 'The PPF shifts when productive capacity changes – not when the economy merely uses existing resources better.',
      examEdge: 'Differentiate clearly between a movement to the frontier and an outward shift of the frontier.'
    },

    {
      id: 'ppf_6',
      template: 'framing',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Capital goods vs consumer goods',
      lede: 'Choosing more capital goods today can mean faster growth tomorrow.',
      tip: { icon: '✅', tone: 'green', text: 'Sacrifice now can expand future productive capacity.' },
      diagramLabel: 'Today vs tomorrow',
      diagramEmoji: '⚖️',
      diagramKey: 'ppfTodayTomorrow',
      methodGrid: {
        label: 'Why capital goods matter',
        emoji: '📈',
        items: [
          { tone: 'blue', icon: '🏭', title: '1. Investment',          body: 'Investment builds machines and infrastructure.' },
          { tone: 'blue', icon: '📈', title: '2. More productive',      body: 'More capital raises future productivity and efficiency.' },
          { tone: 'blue', icon: '↔️', title: '3. Larger PPF',           body: 'A larger PPF means higher future potential output.' }
        ]
      },
      versusList: {
        rows: [{
          left:  { tone: 'blue',  icon: '🛒', name: 'More consumer goods now', premise: 'Higher living standards today, but slower future growth.' },
          right: { tone: 'amber', icon: '📈', name: 'More growth later',       premise: 'Lower consumption today, but higher future potential.' }
        }]
      },
      note: { icon: 'ℹ️', tone: 'blue', text: 'This is why economies must balance present living standards with future growth.' },
      keyTakeaway: 'PPFs show that growth often requires a present-day opportunity cost.',
      examEdge: 'Use capital-vs-consumer-goods examples to link PPF analysis to investment and long-run economic growth.'
    },

    /* ── CARD 7 — The PPF exam toolkit (consolidation) ────────────── */
    {
      id: 'ppf_7',
      template: 'framing',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'The PPF exam toolkit',
      lede: 'The PPF is one of the most flexible diagrams in introductory economics because it can show scarcity, efficiency, trade-offs, and growth.',
      tip: { icon: '✅', tone: 'green', text: 'One diagram – many exam uses.' },
      tileGrid: {
        label: 'What a PPF can show',
        emoji: '💼',
        cols: 3,
        items: [
          { tone: 'blue',   icon: '🔒', title: '1. Scarcity',              sub: 'Resources are limited. We cannot produce everything.' },
          { tone: 'amber',  icon: '⚖️', title: '2. Opportunity cost',      sub: 'Moving along the curve means giving up more of another good.' },
          { tone: 'green',  icon: '🎯', title: '3. Productive efficiency', sub: 'Points on the frontier use resources fully and efficiently.' },
          { tone: 'purple', icon: '👤', title: '4. Unemployment / spare capacity', sub: 'Points inside the frontier show resources that are underused.' },
          { tone: 'blue',   icon: '📈', title: '5. Economic growth',       sub: 'An outward shift shows more resources or better technology.' },
          { tone: 'cyan',   icon: '🧩', title: '6. Specialisation',        sub: 'The bowed shape shows rising opportunity cost and the gains from trade.' }
        ]
      },
      tileGrid2: {
        label: 'Common mistakes',
        emoji: '⚠️',
        cols: 3,
        items: [
          { tone: 'rose', icon: '✕', title: 'Inside the curve is not growth',     sub: 'It is inefficiency or unused resources.' },
          { tone: 'rose', icon: '✕', title: 'Moving along is not shifting',        sub: 'Movement = trade-off. Shift = more capacity.' },
          { tone: 'rose', icon: '✕', title: 'Opportunity cost ≠ money price',     sub: 'Always think in terms of the next best alternative.' }
        ]
      },
      flowBottomTitle: 'How to write it',
      flowBottomEmoji: '✍️',
      flowBottom: [
        { icon: '🔍',  title: '1. Identify', body: 'Identify the point or shift on the PPF.', tone: 'blue'   },
        { icon: '💬',  title: '2. State',    body: 'State what it means clearly.',             tone: 'amber'  },
        { icon: '🔗',  title: '3. Link',     body: 'Link it to the relevant concept (e.g. scarcity, efficiency, growth).', tone: 'green'  },
        { icon: '🏛️', title: '4. Finish',   body: 'Finish with the implication for the economy or policy decision.', tone: 'purple' }
      ],
      note: { icon: 'ℹ️', tone: 'blue', text: 'PPFs help economists tell the story of <strong>choice now, efficiency today, and growth tomorrow</strong>.' },
      keyTakeaway: 'If you can read a PPF well, you can explain a surprising amount of economics.',
      examEdge: 'Top answers use the PPF actively — they do not just label the curve, they explain the mechanism.',
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

