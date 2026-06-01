window.ECONOS_TOPIC = {
  id: 'introduction-to-economics',
  topicNum: '1.1.1',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Economics as a Social Science',
  estTime: '5-7 minutes',
  goal: 'Understand how economists think: who they model, the rationality assumption, and the micro/macro split of the discipline.',
  intro: {
    heroKey: 'heroScarcity',
    summary: 'Economics is a social science: it studies how people, firms and governments make choices, using simplified models to explain a complex world. This topic covers who economists model (the agents), the assumption that they behave rationally, and how the discipline divides into microeconomics and macroeconomics.',
    doInThis: 'Work through cards on economic agents and their objectives, the rational decision-making assumption, and the micro vs macro distinction. (Cards on models, ceteris paribus and the limits of economic experiments are being added.)',
    outcomes: [
      'Identify the main economic agents and their objectives',
      'Explain the rational economic agent assumption and its limits',
      'Distinguish microeconomics from macroeconomics'
    ],
    tip: 'Economics models a messy world with simplifying assumptions. The most important is that agents are rational – they weigh costs and benefits to maximise their objective.',
    stages: [
      { num: 1, name: 'Learn it', sub: '6 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    /* ----- CARD 1 – Thinking like an economist (spec 1.1.1a) ----- */
    {
      id: 'eass_thinking_like_economist',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'Thinking like an economist',
      lede: 'Economists use models to make sense of how the economy works. Models simplify reality so we can understand patterns and make predictions.',
      tip: { icon: '✅', tone: 'green', text: 'Economists simplify reality to understand patterns and make predictions.' },
      comparison: {
        title: 'What is a model?',
        emoji: '📦',
        left:  { tone: 'blue',  icon: '📦', label: 'Definition', caption: 'A model is a simplified representation of reality.' },
        right: { tone: 'amber', icon: '🎯', label: 'Purpose',    caption: 'It helps economists explain relationships, predict outcomes, and test ideas.' }
      },
      causes: [
        { head: 'Isolate key variables',               icon: '🔍', body: 'Focus on the factors that matter most to the question.' },
        { head: 'Make complex systems understandable', icon: '🧩', body: 'Break big problems into manageable parts.' },
        { head: 'Compare outcomes or policies',        icon: '⚖️', body: 'See how different changes might affect results.' }
      ],
      causesLabel: 'Why simplify?',
      causesEmoji: '🔻',
      table: {
        title: 'Assumptions make the model manageable',
        emoji: '📄',
        headers: ['Assumption', 'What it means'],
        rows: [
          { icon: '✅', label: 'Rational consumers',         value: 'People try to maximise their satisfaction (utility).' },
          { icon: '✅', label: 'Firms seek profit',          value: 'Businesses aim to maximise profits.' },
          { icon: '✅', label: 'Other influences set aside', value: 'Factors like weather or politics are held back – for now.' }
        ]
      },
      diagramPanel: {
        diagramKey: 'modelsSupplyDemand',
        title: 'Worked example – supply and demand',
        emoji: '📈',
        layout: 'side',
        position: 'after-table',
        bullets: [
          '<strong>Price and quantity:</strong> the model focuses on price (P) and quantity (Q).',
          '<strong>Buyers and sellers:</strong> demand comes from buyers, supply from sellers.',
          '<strong>Equilibrium:</strong> P* and Q* where supply equals demand.',
          '<strong>Why powerful:</strong> it explains how markets work and predicts how changes shift price or quantity – even though many real-world details are left out.'
        ]
      },
      tipLate: { icon: '⚠️', tone: 'amber', text: 'Unrealistic assumptions do not automatically make a model useless – what matters is whether the model helps explain and predict the issue at hand.' },
      keyTakeaway: 'Good economists know that a model is a tool, not reality itself.',
      examEdge: 'Stronger answers explain why models are useful and mention that simplifying assumptions help isolate relationships.'
    },

    /* ----- CARD 2 – Ceteris paribus (spec 1.1.1b) ----- */
    {
      id: 'eass_ceteris_paribus',
      template: 'framing',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'Ceteris paribus',
      lede: 'Economists often want to know how one factor affects another – for example, how price affects quantity demanded. To do this they use ceteris paribus: all other things being equal.',
      tip: { icon: '✅', tone: 'green', text: 'Ceteris paribus lets economists test one cause at a time.' },
      comparison: {
        title: 'The idea',
        emoji: '⚖️',
        left:  { tone: 'blue',  icon: '⚖️', label: 'Ceteris paribus (Latin)', caption: '‘all other things being equal’' },
        right: { tone: 'slate', icon: '💡', label: 'What it means',            caption: 'We hold all other relevant factors constant so we can focus on how one factor affects another.' }
      },
      flow: [
        { icon: '1️⃣', title: 'Many moving parts',        sub: 'Economies are complex. Many factors influence people’s decisions.' },
        { icon: '2️⃣', title: 'Isolate one relationship', sub: 'By holding other factors constant, we can see the effect of just one factor.' },
        { icon: '3️⃣', title: 'Clearer explanation',      sub: 'This makes cause and effect easier to identify and theory more testable.' }
      ],
      flowTitle: 'Why it is needed',
      flowEmoji: '🔗',
      diagramPanel: {
        diagramKey: 'ceterisParibusDemand',
        title: 'Worked example – price rises, quantity demanded falls',
        emoji: '📉',
        layout: 'side',
        bullets: [
          'If the price of a good rises from P₁ to P₂, quantity demanded falls from Q₁ to Q₂.',
          '<strong>Held constant (ceteris paribus):</strong> income, tastes and preferences, prices of substitutes and complements, and the number of buyers.',
          'Change just one thing – price – and the effect on quantity demanded is clear.'
        ]
      },
      tipLate: { icon: '⚠️', tone: 'rose', text: 'If several things change at once – for example, price rises and income also falls – it is hard to know which factor caused the change in quantity demanded.' },
      keyTakeaway: 'Economists isolate one variable to reveal a relationship.',
      examEdge: 'Top answers define ceteris paribus explicitly and use it to explain a movement along a demand curve.'
    },

    /* ----- CARD 3 – Why economics can't run lab experiments (spec 1.1.1c) ----- */
    {
      id: 'eass_no_experiments',
      template: 'framing',
      stepLabel: 'Learn: Step 3 of 6',
      title: 'Why economics can’t run lab experiments',
      lede: 'Economics studies real people and whole economies. That means perfect control is rarely possible, so economists use other methods to learn and test ideas.',
      tip: { icon: '✅', tone: 'green', text: 'Economists can’t usually run controlled lab experiments on entire economies.' },
      causes: [
        { head: 'No control over all variables', icon: '🎛️', body: 'Too many factors affect outcomes at once – you can’t hold everything else constant.' },
        { head: 'People change behaviour',       icon: '🧑', body: 'When policies or prices change, people react, adapt and learn. That affects the results.' },
        { head: 'Ethical and practical limits',  icon: '🛡️', body: 'We can’t ethically or realistically experiment with jobs, taxes, prices or poverty on people.' }
      ],
      causesLabel: 'Why not',
      causesEmoji: '⚖️',
      table: {
        title: 'What economists use instead',
        emoji: '🧰',
        headers: ['Method', 'What it is'],
        rows: [
          { icon: '🔍', label: 'Natural experiments', value: 'Real-world events that create a comparison group by chance. <em>Example: a minimum-wage change in one region but not in others.</em>' },
          { icon: '📅', label: 'Historical data',     value: 'Data collected over time reveals patterns and relationships. <em>Example: inflation data over many years to study causes and effects.</em>' },
          { icon: '🔗', label: 'Models',              value: 'Simplified representations that help explain how the economy works. <em>Example: the AD/AS model, or supply and demand.</em>' }
        ]
      },
      branches: [
        { tone: 'blue',   label: 'Evidence is often messy',          sub: 'Real economies are complex. Data is incomplete and influenced by many factors at once.' },
        { tone: 'amber',  label: 'Causal relationships are harder to prove', sub: 'It’s difficult to be certain that one change caused another.' },
        { tone: 'purple', label: 'Reasonable economists may read the same evidence differently', sub: 'Different models, values and assumptions can lead to different conclusions – two economists can see the same evidence and recommend opposite policies.' }
      ],
      branchesLabel: 'What this means',
      branchesEmoji: '💡',
      branchesLayout: 'stack',
      keyTakeaway: 'Economics is a social science – it studies people, so evidence is powerful but rarely perfect.',
      examEdge: 'High-level answers link the lack of controlled experiments to uncertainty and disagreement among economists.'
    },

    {
      id: 'basic_econ_problem_4',
      template: 'cause',
      stepLabel: 'Learn: Step 4 of 6',
      title: 'Economic Agents and Their Objectives',
      lede: 'An economy is made up of decision-makers – households, firms, governments and workers – each with their own objectives.',
      tip: { icon: '💡', tone: 'blue', text: 'An economy is made up of decision-makers – households, firms, governments and workers – each with their own objectives.' },
      body: 'Standard economic models start by asking <em>who</em> is making the decision. Different agents pursue different objectives, which is why conflict and trade-off are so central to economics.',
      causes: [
        { head: 'Households',  icon: '🏠', body: 'Aim to maximise utility (satisfaction) within a budget. Consume goods and services and supply labour. Assumed to be rational: weigh marginal costs and benefits.' },
        { head: 'Firms',       icon: '🏭', body: 'Produce goods and services to sell in markets. Standard theory assumes profit maximisation, but firms may also pursue revenue, growth or survival (covered in Theme 3).' },
        { head: 'Government',  icon: '🏛️', body: 'Sets rules, corrects market failures, redistributes income, provides public goods and stabilises the macroeconomy. Acts in the public interest – though government failure is possible.' },
        { head: 'Workers',     icon: '👤', body: 'Supply labour in return for wages. Face a work-leisure trade-off and care about wages, job security and satisfaction. Covered fully in Theme 3 labour markets.' }
      ],
      causesLabel: 'Who are the economic agents?',
      causesEmoji: '👥',
      table: {
        title: 'Common objectives',
        emoji: '🎯',
        headers: ['Agent', 'Likely objectives'],
        rows: [
          { icon: '🏠', label: 'Households', value: 'Maximise satisfaction / utility' },
          { icon: '🏭', label: 'Firms',      value: 'Profit, growth, survival, market share' },
          { icon: '🏛️', label: 'Government', value: 'Growth, low inflation, low unemployment, equity' },
          { icon: '👤', label: 'Workers',    value: 'Wages, job security, job satisfaction' }
        ]
      },
      branches: [
        { tone: 'amber',  label: 'Lower prices vs higher profits',     sub: 'Consumers want lower prices; firms want higher profits. Every price tag is a battleground between the two.' },
        { tone: 'rose',   label: 'Higher wages vs lower costs',        sub: 'Workers want higher wages; firms want to keep costs down. Wage bargaining and minimum-wage debates flow from this.' },
        { tone: 'green',  label: 'Economic growth vs the environment', sub: 'Faster growth can increase pollution and resource use; sustainability may slow growth. Modern policy must trade them off.' }
      ],
      branchesLabel: 'Why objectives can conflict',
      branchesEmoji: '⚔️',
      branchesLayout: 'triptych',
      examEdge: 'The rational self-interest assumption is a simplification challenged by behavioural economics (Theme 1.7). Top essays acknowledge that real agents are not always rational – they use heuristics, are loss-averse, and act on incomplete information.'
    },
    {
      id: 'basic_econ_problem_6',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'Rational Economic Decision-Making',
      lede: 'In simple economic models, decision-makers are assumed to act rationally – weighing up costs and benefits to maximise their objective.',
      tip: { icon: '💡', tone: 'blue', text: 'In simple economic models, decision-makers are assumed to act <strong>rationally</strong> – weighing up costs and benefits to maximise their objective.' },
      body: 'Rational means making decisions in a logical and consistent way to achieve the best possible outcome. The standard model walks through four steps:',
      flow: [
        { icon: '🔍', title: 'Identify the objective',     sub: 'Be clear about the goal you want to achieve.' },
        { icon: '⚖️', title: 'Compare costs and benefits', sub: 'List the costs and benefits of each available option.' },
        { icon: '✅', title: 'Choose the best option',     sub: 'Select the option that maximises net benefit (or utility).' },
        { icon: '🔄', title: 'Review the outcome',         sub: 'Check results and learn from the outcome for future decisions.' }
      ],
      flowTitle: 'What does rational mean?',
      flowEmoji: '🧠',
      causes: [
        { head: 'Consumer',   icon: '🛒', body: 'A consumer compares mobile phone plans and picks the cheapest option that gives the same data and minutes.' },
        { head: 'Firm',       icon: '🏭', body: 'A firm compares the cost of hiring extra workers against buying a machine that can do the same job – and chooses the lower-cost option.' },
        { head: 'Government', icon: '🏛️', body: 'A government evaluates competing policies and chooses the one with the greatest net benefit per pound spent.' }
      ],
      causesLabel: 'Examples',
      causesEmoji: '💡',
      branches: [
        { tone: 'amber',  label: 'Limited information', sub: 'Decision-makers rarely have complete or perfect information about every option – they decide under uncertainty.' },
        { tone: 'rose',   label: 'Bias and habit',      sub: 'Emotions, habits and cognitive biases (loss aversion, present bias, anchoring) lead to systematically suboptimal choices. Covered in Theme 1.7.' },
        { tone: 'blue',   label: 'Time pressure',       sub: 'Decisions often need to be made quickly with limited time to evaluate every option – so people use rules of thumb (heuristics) instead.' }
      ],
      branchesLabel: 'Limits to perfect rationality',
      branchesLayout: 'triptych',
      examEdge: 'MB = MC is the universal optimising condition in economics: firms maximise profit where MR = MC; consumers maximise utility where MU/P ratio is equalised; governments should intervene until MB of intervention = MC of intervention. Internalise this logic.'
    },
    {
      id: 'basic_econ_problem_7',
      template: 'paired',
      stepLabel: 'Learn: Step 6 of 6',
      title: 'Micro vs Macro Economics',
      lede: 'Microeconomics zooms in on individual markets and decision-makers. Macroeconomics zooms out to the whole economy.',
      tip: { icon: '💡', tone: 'blue', text: '<strong>Microeconomics</strong> zooms in on individual markets and decision-makers. <strong>Macroeconomics</strong> zooms out to the whole economy.' },
      left: {
        label: '🔍 Microeconomics',
        points: [
          'Looks at individual markets and decision-makers',
          'Demand and supply in a single market',
          'How firms compete in an industry',
          'Wages and employment within a firm',
          'Market failure and consumer choice',
          'Primary focus of Themes 1 and 3'
        ]
      },
      right: {
        label: '🌍 Macroeconomics',
        points: [
          'Looks at the economy as a whole',
          'Inflation and the price level',
          'Unemployment and economic growth',
          'Trade, imports and exports',
          'Fiscal and monetary policy',
          'Primary focus of Themes 2 and 4'
        ]
      },
      causes: [
        { head: 'Wages affect inflation',        body: 'Higher wages can raise costs for firms (micro), feeding into higher prices across the whole economy (macro).' },
        { head: 'Investment affects growth',     body: 'Business investment is a micro decision, but in aggregate it increases productive capacity and boosts national output.' },
        { head: 'Taxes affect both',             body: 'Taxes change incentives for individual workers and firms, and also shape government revenue and spending in the wider economy.' }
      ],
      causesLabel: 'They connect',
      causesEmoji: '🔗',
      keyTerms: [
        { term: 'Microeconomics',         def: 'Study of individual agents, markets and resource allocation at the level of the firm, household, and industry.' },
        { term: 'Macroeconomics',         def: 'Study of the economy as a whole – national income, price level, employment, and economic policy.' },
        { term: 'Fallacy of composition', def: 'The error of assuming what is true for a part is true for the whole: a wage cut helps one firm; if all firms cut wages, aggregate demand falls.' }
      ],
      examEdge: 'The micro-macro distinction matters for policy evaluation. Supply-side policies (micro-level reforms to labour and product markets) work through micro mechanisms but have macro effects. Always specify the transmission mechanism linking micro behaviour to macro outcomes in essays.',
      keyTakeaway: 'Micro explains the parts; macro explains the whole – and good economists link both.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};

/* ============================================================
   End-of-Learn-It quiz pool — Economics as a Social Science (1.1.1).
   Methodology focus: models & assumptions, ceteris paribus,
   economic agents, the rationality assumption, micro vs macro.
   ============================================================ */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Economics as a Social Science',
    subtitle: 'Theme 1 &middot; Topic 1.1.1 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('intro'),
    backLabel: 'Back to Learn It',
    lede: '6 questions · ~5 minutes · covers models and assumptions, ceteris paribus, economic agents, rationality, and the micro/macro split',
    shortNames: [
      'Why models', 'Ceteris paribus', 'Economic agents',
      'Rational agent', 'Micro vs macro', 'Methodology para-fill'
    ],

    questions: [

      /* 1 – MCQ: why economists build models */
      { type: 'mcq',
        stem: 'Why do economists build <strong>models</strong> that rely on simplifying assumptions?',
        opts: [
          'Because the real economy is too complex to study all at once – assumptions isolate the relationship being examined',
          'Because economists are not interested in how the real world actually behaves',
          'Because models are always perfectly accurate predictions of the future',
          'Because assumptions remove the need to collect any economic data'
        ],
        ans: 0,
        exp: 'Economics is a <strong>social science</strong> that studies a hugely complex world. A model deliberately simplifies reality – stripping out detail and holding some things constant – so that one relationship can be examined clearly (e.g. how price affects quantity demanded). The assumptions are not claims that the world is simple; they are a tool for isolating cause and effect. A model is judged by how useful its predictions are, not by whether its assumptions are literally true.'
      },

      /* 2 – Match pairs: methodology vocabulary */
      { type: 'match_pairs',
        stem: 'Match each methodology term to its meaning.',
        pairs: [
          { a: 'Model', b: 'A simplified representation of reality used to explain or predict' },
          { a: 'Ceteris paribus', b: 'All other things held equal, to isolate one relationship' },
          { a: 'Assumption', b: 'A simplifying condition taken as given when building a model' },
          { a: 'Social science', b: 'The study of human behaviour and choices, not a lab science' }
        ],
        exp: '<strong>Ceteris paribus</strong> ("all else equal") is the device that lets economists study one variable at a time – e.g. the effect of price on demand, holding income and tastes constant. <strong>Models</strong> and their <strong>assumptions</strong> are how a <strong>social science</strong> copes with a world it cannot put in a test tube.'
      },

      /* 3 – MCQ: economic agents */
      { type: 'mcq',
        stem: 'Which of the following correctly identifies <strong>economic agents</strong> and a primary objective each is assumed to pursue?',
        opts: [
          'Consumers maximise utility; firms maximise profit; government maximises social welfare',
          'Consumers maximise production; firms minimise consumption; government sets all prices',
          'Workers maximise taxes; owners maximise wages; voters maximise output',
          'Households save; firms consume; government invests on their behalf'
        ],
        ans: 0,
        exp: 'Standard models start by asking <em>who</em> is deciding and what they want. <strong>Consumers/households</strong> are assumed to maximise utility (satisfaction) within a budget; <strong>firms</strong> to maximise profit; <strong>government</strong> to maximise social welfare. These assumed objectives are simplifications – behavioural economics and the theory of the firm relax them later.'
      },

      /* 4 – MCQ: rational agent */
      { type: 'mcq',
        stem: 'Traditional economics assumes agents are <strong>rational</strong>. What does this require?',
        opts: [
          'Agents weigh costs and benefits consistently and choose the option that best meets their objective',
          'Agents always maximise social welfare and never act in self-interest',
          'Agents have complete and perfect information about every possible outcome',
          'Agents only act to benefit others – rationality means altruism'
        ],
        ans: 0,
        exp: 'The <strong>rational economic agent</strong> weighs marginal costs against marginal benefits and picks the option that maximises their objective (utility for consumers, profit for firms). It does NOT require perfect information or altruism. Behavioural economics challenges the assumption by showing people use heuristics and are subject to bias – but rationality remains the workhorse assumption of most models.'
      },

      /* 5 – Elastic sort: micro vs macro */
      { type: 'elastic_sort',
        stem: 'Classify each issue as <strong>microeconomics</strong> (individual markets/agents) or <strong>macroeconomics</strong> (the whole economy).',
        categories: ['micro', 'macro'],
        categoryLabels: ['Microeconomics', 'Macroeconomics'],
        goods: [
          { icon: '🍞', label: 'The effect of a poor harvest on the price of bread', note: '', ans: 'micro' },
          { icon: '📈', label: 'The UK\'s annual rate of inflation', note: '', ans: 'macro' },
          { icon: '🏭', label: 'How a single firm sets its output to maximise profit', note: '', ans: 'micro' },
          { icon: '🌍', label: 'The level of national unemployment', note: '', ans: 'macro' },
          { icon: '💷', label: 'A consumer choosing between two phone tariffs', note: '', ans: 'micro' },
          { icon: '🏦', label: 'The Bank of England setting the base interest rate', note: '', ans: 'macro' }
        ],
        exp: '<strong>Microeconomics</strong> zooms in on individual markets and decision-makers (one firm, one market, one consumer). <strong>Macroeconomics</strong> zooms out to the whole economy – inflation, unemployment, growth, and policy. The two connect: micro decisions aggregate into macro outcomes, and macro conditions shape micro choices.'
      },

      /* 6 – Para fill: methodology */
      { type: 'para_fill',
        stem: 'Complete the paragraph on economics as a social science.',
        anchor: 'Economics studies choices in a world it cannot put in a laboratory.',
        para: 'Economics is a [1] science: it studies human behaviour. Because the real world is complex, economists build [2] that rely on simplifying [3]. The [4] paribus assumption holds other things equal so one relationship can be studied. Standard models assume agents are [5] – weighing costs and benefits to maximise their objective. The subject divides into [6]economics, which studies individual markets, and [7]economics, which studies the economy as a [8].',
        blanks: [
          { id: 1, opts: ['social', 'natural', 'physical', 'formal'], ans: 0 },
          { id: 2, opts: ['models', 'laws', 'taxes', 'firms'], ans: 0 },
          { id: 3, opts: ['assumptions', 'forecasts', 'profits', 'subsidies'], ans: 0 },
          { id: 4, opts: ['ceteris', 'pari', 'extra', 'status'], ans: 0 },
          { id: 5, opts: ['rational', 'altruistic', 'random', 'irrational'], ans: 0 },
          { id: 6, opts: ['micro', 'macro', 'agri', 'inter'], ans: 0 },
          { id: 7, opts: ['macro', 'micro', 'multi', 'meta'], ans: 0 },
          { id: 8, opts: ['whole', 'market', 'firm', 'household'], ans: 0 }
        ],
        exp: '(1) <strong>social</strong>, (2) <strong>models</strong>, (3) <strong>assumptions</strong>, (4) <strong>ceteris</strong> paribus, (5) <strong>rational</strong>, (6) <strong>micro</strong>, (7) <strong>macro</strong>, (8) <strong>whole</strong>. Together these describe how economists turn a messy social world into something they can analyse.'
      }

    ]
  };

})();
