window.ECONOS_TOPIC = {
  id: 'introduction-to-economics',
  topicNum: '1.1-1.2',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Introduction to Economics',
  estTime: '7-9 minutes',
  goal: 'Lock in scarcity, choice, opportunity cost, and the three fundamental economic questions that shape every economy.',
  intro: {
    heroKey: 'heroScarcity',
    summary: 'Economics begins with one unavoidable fact: resources are scarce but wants are unlimited. Every choice involves giving something up. Understanding this constraint – and how societies resolve it – is the foundation of all economic thinking.',
    doInThis: 'Work through 7 concept cards covering scarcity, choice, opportunity cost, economic agents, rationality assumptions, and the three fundamental economic questions.',
    outcomes: [
      'Define scarcity and explain why it makes choice inevitable',
      'Calculate and apply opportunity cost to real decisions',
      'Identify the three fundamental economic questions and how different systems answer them',
      'Distinguish positive from normative economic statements'
    ],
    tip: 'Opportunity cost is not money spent – it is the next best alternative forgone. Always ask: what had to be given up to make this choice?',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'basic_econ_problem_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'The basic economic problem: the big picture',
      lede: 'Economics begins with a simple tension: our wants are unlimited, but the resources to satisfy them are limited.',
      tip: { icon: '💡', tone: 'blue', text: 'Economics begins with a simple tension – our wants are unlimited, but the resources to satisfy them are limited.' },
      comparison: {
        title: 'The core problem',
        emoji: '⚡',
        left:  { tone: 'rose',  icon: '❤️', label: 'Unlimited wants',   caption: 'Our wants are endless and ever-changing.' },
        right: { tone: 'green', icon: '📦', label: 'Limited resources', caption: 'Resources are finite and can be used in many ways.' }
      },
      body: '<strong>Scarcity</strong> is the fundamental economic problem: human wants are unlimited, but the resources needed to satisfy them are finite. Because resources are scarce, we cannot produce everything we want – so choices must be made.<br><br>Scarcity applies to <em>every</em> economy regardless of wealth. Even the richest country cannot produce unlimited healthcare, education, infrastructure and defence simultaneously. Scarcity forces trade-offs at every level: individual, firm, and government.',
      causes: [
        { head: 'Land',       icon: '🌿', body: 'Natural resources provided by the earth – minerals, forests, fertile soil, water, fish stocks, oil and gas.' },
        { head: 'Labour',     icon: '👥', body: 'The mental and physical effort of people – and the skills they bring. Quantity (workforce) and quality (education) both matter.' },
        { head: 'Capital',    icon: '🏭', body: 'Man-made tools, machinery, factories and infrastructure used to produce other goods and services.' },
        { head: 'Enterprise', icon: '💡', body: 'The ability to organise the other three factors, take risks and innovate. Without enterprise nothing gets made.' }
      ],
      causesLabel: 'Resources are scarce – the four factors of production',
      causesEmoji: '🏗️',
      keyTerms: [
        { term: 'Scarcity', def: 'The condition where unlimited wants exceed the limited resources available to satisfy them.' },
        { term: 'Factors of production', def: 'Land (natural resources), Labour (human effort), Capital (man-made productive assets), Enterprise (risk-taking ability).' },
        { term: 'Free good', def: 'A good that is not scarce – available in unlimited quantity at zero opportunity cost. True free goods are extremely rare (e.g. air in most locations).' }
      ],
      examEdge: 'Scarcity is distinct from poverty. A billionaire still faces scarcity – they cannot buy unlimited time or live forever. Scarcity is a universal condition; poverty is a distributional one. Examiners test whether you understand this distinction.'
    },
    {
      id: 'basic_econ_problem_2',
      template: 'framing',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Opportunity Cost',
      lede: 'Every choice means giving something up. Opportunity cost is the value of the next best alternative forgone – not the money you spent.',
      tip: { icon: '💡', tone: 'blue', text: 'Every choice means giving something up. Opportunity cost is the next best alternative forgone.' },
      comparison: {
        title: 'A concrete picture – both cost £80',
        emoji: '🎯',
        left:  { tone: 'green', icon: '🎫', label: 'Concert ticket',  value: '\xa380', caption: 'What you choose' },
        right: { tone: 'amber', icon: '👟', label: 'New trainers',    value: '\xa380', caption: 'What you give up' }
      },
      body: 'You spent <strong>\xa380</strong> on the concert ticket – but your <strong>opportunity cost</strong> is not \xa380. It is the value of the trainers you gave up. The same logic underpins every economic decision a consumer, firm or government makes – and it shapes demand curves, supply choices and the slope of the production possibility frontier.',
      causes: [
        { head: 'Consumers',  icon: '🛍️', body: 'A consumer choosing a cinema ticket instead of saving that money for next month\'s bills. The opportunity cost is whatever the saved money would have bought.' },
        { head: 'Firms',      icon: '🏭', body: 'A firm investing in new machines instead of advertising. The opportunity cost is the extra sales the advertising campaign might have produced.' },
        { head: 'Government', icon: '🏛️', body: 'A government spending £10bn on hospitals instead of building new roads. The opportunity cost is the roads, schools or tax cuts that could have been funded.' }
      ],
      causesLabel: 'Who faces it?',
      causesEmoji: '👥',
      branches: [
        { tone: 'green',  label: 'Same choice, different cost',                 sub: 'If the next best alternative changes, so does the opportunity cost – even if the choice itself is identical.' },
        { tone: 'amber',  label: 'Sunk costs do not count',                     sub: 'Past costs cannot be changed by today\'s decision, so they are never part of the opportunity cost – only the foregone alternatives count.' },
        { tone: 'blue',   label: 'Better alternatives = higher opportunity cost', sub: 'The more valuable the next best option, the higher the opportunity cost of the choice you made.' }
      ],
      branchesLabel: 'It depends on the next best alternative',
      branchesEmoji: '⚖️',
      keyTerms: [
        { term: 'Opportunity cost', def: 'The value of the next best alternative forgone as a result of making a choice.' },
        { term: 'Explicit cost',    def: 'Actual monetary payment for a resource (e.g. wage paid to a worker).' },
        { term: 'Implicit cost',    def: 'Opportunity cost of a resource you own (e.g. foregone salary of an entrepreneur working in their own firm).' }
      ],
      examEdge: 'In exam questions, always state what the opportunity cost IS – not just that "something is given up." For government spending questions, name the alternative use of funds explicitly. Vague answers lose marks.',
      keyTakeaway: 'Opportunity cost is not all the alternatives you give up – it is the value of the next best one.'
    },
    {
      id: 'basic_econ_problem_3',
      template: 'framing',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'The Three Fundamental Economic Questions',
      lede: 'Because resources are scarce, every economy must answer three core questions – and the answers shape the entire system.',
      tip: { icon: '💡', tone: 'blue', text: 'Because resources are scarce, every economy must answer three core questions: <strong>what</strong> to produce, <strong>how</strong> to produce, and <strong>for whom</strong> to produce.' },
      branches: [
        { tone: 'green',  label: '1. What to produce?',     sub: 'Decide which goods and services to produce with limited resources. Health care, gaming consoles, renewable energy – every yes is a no to something else.' },
        { tone: 'amber',  label: '2. How to produce?',      sub: 'Decide which combination of factors to use. Labour-intensive or capital-intensive? Local or imported inputs? Sustainable or fastest?' },
        { tone: 'blue',   label: '3. For whom to produce?', sub: 'Decide who gets the output. Distribution is shaped by income, prices, need, merit, and government allocation – never neutral.' }
      ],
      branchesLabel: 'The three questions',
      branchesEmoji: '❓',
      body: 'Scarcity forces every society to answer these three questions. They are deceptively simple – but the answers determine production, employment, and the distribution of wealth. Different economic systems answer them very differently, which is what the next section explores.',
      causes: [
        { head: 'Market economy',  icon: '🛒', body: 'Individuals and firms answer the three questions through choices made in markets, guided by prices and profit. Decentralised, fast-moving, prone to inequality and market failure.' },
        { head: 'Command economy', icon: '🏛️', body: 'Central government planners make the main decisions about what, how and for whom to produce. Aims for equity and coordination, but struggles with information and incentive problems.' },
        { head: 'Mixed economy',   icon: '⚖️', body: 'Markets and government share the decisions, varying by industry and policy goals. The dominant model in the modern world – including the UK.' }
      ],
      causesLabel: 'Different systems answer differently',
      causesEmoji: '🌍',
      keyTerms: [
        { term: 'Choice',     def: 'Scarcity means we cannot have everything, so choices must be made.' },
        { term: 'Efficiency', def: 'The right answers aim to use resources well and avoid waste.' },
        { term: 'Equity',     def: 'Decisions affect how fairly goods and services are shared among people.' }
      ],
      keyTermsLabel: 'Why this matters',
      keyTermsEmoji: '💡',
      examEdge: 'The three questions are normative at heart – different political values lead to different answers. Recognising this earns evaluation credit: "The optimal answer depends on value judgements about efficiency, equality, and freedom."'
    },
    {
      id: 'basic_econ_problem_4',
      template: 'cause',
      stepLabel: 'Learn: Step 4 of 7',
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
      examEdge: 'The rational self-interest assumption is a simplification challenged by behavioural economics (Theme 1.7). Top essays acknowledge that real agents are not always rational – they use heuristics, are loss-averse, and act on incomplete information.'
    },
    {
      id: 'basic_econ_problem_5',
      template: 'paired',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Positive vs Normative Statements',
      tip: { icon: 'ℹ️', text: '<strong>Positive</strong> statements can be tested with evidence. <strong>Normative</strong> statements involve value judgements about what ought to happen.', tone: 'blue' },
      left: {
        label: 'Positive statements',
        points: [
          'Objective, factual claims about how the world IS',
          'Can be tested against evidence and accepted or rejected',
          'Example: "Raising minimum wage to \xa312/hr increases employment costs for SMEs"',
          'Example: "UK inflation was 2.3% in October 2024"',
          'Economics as a social science aspires to positive analysis'
        ]
      },
      right: {
        label: 'Normative statements',
        points: [
          'Subjective value judgements about how the world SHOULD be',
          'Cannot be resolved purely by evidence – reflect values and priorities',
          'Example: "The government should redistribute income more aggressively"',
          'Example: "Economic growth is more important than environmental protection"',
          'Policy recommendations are inherently normative'
        ]
      },
      examEdge: 'Many policy debates contain both positive and normative elements. "Raising minimum wage will reduce employment" is positive (testable). "We should raise it anyway because fairness matters more" is normative. Identifying this distinction in exam questions signals analytical maturity.'
    },
    {
      id: 'basic_econ_problem_6',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 6 of 7',
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
      examEdge: 'MB = MC is the universal optimising condition in economics: firms maximise profit where MR = MC; consumers maximise utility where MU/P ratio is equalised; governments should intervene until MB of intervention = MC of intervention. Internalise this logic.'
    },
    {
      id: 'basic_econ_problem_7',
      template: 'paired',
      stepLabel: 'Learn: Step 7 of 7',
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
    title:    'The Basic Economic Problem',
    subtitle: 'Theme 1 &middot; Topic 1.1 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('basic_econ_problem_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers scarcity, opportunity cost, the three economic questions, positive/normative statements, and rational decision-making',
    shortNames: [
      'Scarcity MCQ', 'Opportunity cost', 'Three questions sort', 'Economic agents',
      'Positive vs normative', 'Rational behaviour', 'Match pairs', 'Cause & effect',
      'Odd one out', 'Para fill'
    ],

    questions: [

      /* 1 – MCQ: scarcity */
      { type: 'mcq',
        stem: 'Which statement best defines the concept of <strong>scarcity</strong> in economics?',
        opts: [
          'Resources are finite but human wants are unlimited – creating a fundamental mismatch that forces choices at every level of society',
          'Scarcity applies only to rare natural resources such as gold and oil; manufactured goods are not subject to scarcity',
          'Scarcity means that some individuals or countries are too poor to afford essential goods',
          'Scarcity will be eliminated once technology advances sufficiently to produce unlimited quantities of all goods'
        ],
        ans: 0,
        exp: '<strong>Scarcity</strong> is the fundamental economic problem: human wants are unlimited (always more desired), but the resources to satisfy them (land, labour, capital, enterprise) are finite. This applies to all goods – not just rare commodities – because even abundant resources have alternative uses. Even wealthy societies face scarcity of time, skilled labour, and environmental capacity. Technology can shift the PPF outward but cannot eliminate scarcity, because wants expand with new possibilities. This is why economics is the study of choice under constraint.'
      },

      /* 2 – Numeric input: opportunity cost */
      { type: 'numeric_input',
        stem: 'Calculate the <strong>opportunity cost</strong> of the government\'s decision, measured in hospital operations.',
        context: 'A government has a fixed budget of <strong>£2 billion</strong>. It decides to build a new motorway at a cost of <strong>£2 billion</strong>. A hospital operation costs <strong>£8,000</strong> per patient. How many hospital operations are foregone?',
        answer: 250000,
        tolerance: 1000,
        unit: 'operations',
        hint: 'Opportunity cost = value of next best alternative foregone. Divide the £2bn by the cost per operation.',
        workingSteps: [
          'Budget spent on motorway: £2,000,000,000',
          'Cost per hospital operation: £8,000',
          'Operations foregone = £2,000,000,000 ÷ £8,000 = 250,000'
        ],
        exp: 'Opportunity cost = £2,000,000,000 ÷ £8,000 = <strong>250,000 hospital operations</strong>. This illustrates that government decisions always involve trade-offs – choosing to spend on infrastructure means not spending on healthcare. The opportunity cost framework forces policymakers to think explicitly about what is sacrificed, not just what is gained. This is why cost-benefit analysis should always include the value of the next best alternative – the true cost of any choice.'
      },

      /* 3 – Elastic sort: three fundamental economic questions */
      { type: 'elastic_sort',
        stem: 'Classify each policy question under the correct fundamental economic problem it addresses.',
        categories: ['what', 'how', 'for_whom'],
        categoryLabels: ['What to produce?', 'How to produce it?', 'For whom to produce?'],
        goods: [
          { icon: '🏥', label: 'Should the government prioritise building hospitals or roads this year?', note: '', ans: 'what' },
          { icon: '🤖', label: 'Should car factories use robots or human workers on the assembly line?', note: '', ans: 'how' },
          { icon: '💊', label: 'Should cancer drugs be allocated by willingness to pay or medical need?', note: '', ans: 'for_whom' },
          { icon: '🌾', label: 'Should the UK produce more food domestically or import it from abroad?', note: '', ans: 'what' },
          { icon: '🎓', label: 'Should university education be free for all or charged based on income?', note: '', ans: 'for_whom' },
          { icon: '⚡', label: 'Should electricity be generated using coal, nuclear, or renewable energy?', note: '', ans: 'how' }
        ],
        exp: 'The <strong>three fundamental economic questions</strong> arise from scarcity: <strong>What</strong> to produce (which goods, which public services, what mix of consumption vs investment); <strong>How</strong> to produce it (which technology, which combination of factors – labour-intensive vs capital-intensive); <strong>For whom</strong> to produce (how to distribute output – by price, need, merit, or lottery). Different economic systems (market, command, mixed) answer these questions differently. Market economies use the price mechanism; command economies use central planning; mixed economies use both.'
      },

      /* 4 – MCQ: economic agents */
      { type: 'mcq',
        stem: 'Which of the following correctly identifies the <strong>four main types of economic agent</strong> and their primary economic role?',
        opts: [
          'Consumers (maximise utility), Firms (maximise profit), Government (maximise social welfare), Banks (allocate financial capital)',
          'Consumers (maximise production), Firms (minimise consumption), Government (set prices), Banks (set interest rates)',
          'Workers (maximise wages), Owners (minimise taxes), Voters (maximise utility), Exporters (maximise trade)',
          'Households (produce), Firms (consume), Government (save), Central Bank (invest)'
        ],
        ans: 0,
        exp: 'The four main economic agents and their assumed objectives: <strong>Consumers/households</strong> – maximise utility (satisfaction) from consumption given budget constraint. <strong>Firms</strong> – traditionally assumed to maximise profit (though behavioural economics challenges this with satisficing, revenue maximisation, etc.). <strong>Government</strong> – maximise social welfare (subject to political constraints). <strong>Financial institutions/banks</strong> – allocate financial capital, and the central bank manages monetary policy. Each agent responds to price signals in the market, and their interactions determine market outcomes.'
      },

      /* 5 – Elastic sort: positive vs normative statements */
      { type: 'elastic_sort',
        stem: 'Classify each statement as <strong>positive</strong> (factual, testable) or <strong>normative</strong> (value judgement, opinion).',
        categories: ['positive', 'normative'],
        categoryLabels: ['Positive statement (factual/testable)', 'Normative statement (value judgement)'],
        goods: [
          { icon: '📊', label: 'A 10% rise in the minimum wage reduces employment by approximately 2% in low-skill sectors', note: '', ans: 'positive' },
          { icon: '⚖️', label: 'The government should raise the minimum wage to reduce income inequality', note: '', ans: 'normative' },
          { icon: '📈', label: 'UK inflation rose to 11.1% in October 2022 – the highest in 41 years', note: '', ans: 'positive' },
          { icon: '🌍', label: 'Climate change is the most important economic problem facing humanity', note: '', ans: 'normative' },
          { icon: '🏦', label: 'Quantitative easing increases the money supply and can reduce long-term interest rates', note: '', ans: 'positive' },
          { icon: '🏥', label: 'Healthcare should be provided free at the point of use, funded by general taxation', note: '', ans: 'normative' }
        ],
        exp: '<strong>Positive statements</strong> are objective, factual claims that can in principle be tested or falsified using data (inflation rates, employment effects, money supply changes). <strong>Normative statements</strong> express value judgements about what ought to happen ("should", "most important", "fair") – these cannot be settled by evidence alone, as they depend on ethical priorities. Economists aim to keep positive and normative analysis separate: we can say what a policy will do (positive) but not whether it is the right thing to do (normative).'
      },

      /* 6 – MCQ: rational behaviour */
      { type: 'mcq',
        stem: 'Traditional economics assumes that economic agents are <strong>rational</strong>. What does this assumption require?',
        opts: [
          'Agents weigh up costs and benefits consistently, choose the option that maximises their self-interest, and update their decisions when information changes',
          'Agents always make decisions that maximise social welfare and never act against their own long-run interests',
          'Agents have complete information about all prices, alternatives, and future outcomes before making any decision',
          'Agents only make decisions that benefit others – rationality means altruism and cooperation'
        ],
        ans: 0,
        exp: 'The <strong>rational economic agent</strong> assumption: agents (i) evaluate options systematically, (ii) weigh marginal costs against marginal benefits, (iii) choose the option that maximises their objective (utility for consumers, profit for firms), and (iv) update decisions when new information arrives. This does NOT require complete information – rational behaviour under uncertainty is still rationality. It also doesn\'t require altruism – self-interest is the assumed motivation. Behavioural economics challenges this by showing humans systematically deviate from rational behaviour through biases, heuristics, and framing effects.'
      },

      /* 7 – Match pairs: economic concepts */
      { type: 'match_pairs',
        stem: 'Match each economic concept to its definition.',
        pairs: [
          { a: 'Scarcity', b: 'Unlimited wants but finite resources – forces choices' },
          { a: 'Opportunity cost', b: 'The value of the next best alternative foregone' },
          { a: 'Ceteris paribus', b: 'All other things being equal – holding other variables constant' },
          { a: 'Positive statement', b: 'Objective, factual claim that can be tested with evidence' },
          { a: 'Normative statement', b: 'Value judgement about what ought to be' },
          { a: 'Rational economic agent', b: 'Decision-maker who maximises objectives by weighing costs and benefits' }
        ],
        exp: 'Core vocabulary: <strong>scarcity</strong> is the starting point of all economics. <strong>Opportunity cost</strong> is the most important concept – real cost is always what you gave up, not what you paid. <strong>Ceteris paribus</strong> is the analytical device that makes it possible to study one relationship at a time. <strong>Positive/normative</strong> distinction keeps economic analysis from being contaminated by value judgements. <strong>Rational agent</strong> is the simplifying assumption that makes most micro and macro models tractable – behavioural economics relaxes it.'
      },

      /* 8 – Cause & effect: scarcity and choice */
      { type: 'cause_effect',
        stem: 'Match each scenario to the opportunity cost or trade-off it reveals.',
        pairs: [
          { cause: 'A student spends an evening studying economics instead of working a part-time shift', effect: 'Opportunity cost = the wages foregone from not working' },
          { cause: 'A government builds a new nuclear power station', effect: 'Opportunity cost = the hospitals, schools, or tax cuts foregone' },
          { cause: 'A farmer uses land to grow wheat rather than rapeseed', effect: 'Opportunity cost = the profit foregone from not growing rapeseed' },
          { cause: 'A consumer buys a gym membership instead of a streaming service', effect: 'Opportunity cost = the entertainment value of the streaming service foregone' },
          { cause: 'A country devotes more resources to capital goods production', effect: 'Opportunity cost = the consumer goods not produced today (but future capacity grows)' },
          { cause: 'A firm trains workers rather than replacing them with automation', effect: 'Opportunity cost = the efficiency gains from automation not realised' }
        ],
        exp: 'Every decision involves an opportunity cost – the value of the next best alternative foregone. Opportunity cost is not necessarily monetary: a student\'s cost is foregone wages; a government\'s cost is foregone public services; a country\'s development trade-off is foregone consumption today for future capacity. The key insight is that resources are scarce and have alternative uses – using them for one purpose means not using them for another. This applies to time, money, land, and capital equally.'
      },

      /* 9 – Odd one out: economic resources (factors of production) */
      { type: 'odd_one_out',
        stem: 'Three of these are recognised <strong>factors of production</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '👷', label: 'Labour – the mental and physical effort of human workers in production', note: '' },
          { icon: '💰', label: 'Money – the medium of exchange used to purchase goods and services', note: '' },
          { icon: '🏗️', label: 'Capital – man-made resources used in production (machinery, buildings, infrastructure)', note: '' },
          { icon: '🌱', label: 'Land – natural resources used in production (farmland, minerals, water)', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is <strong>money</strong>. Money is not a factor of production – it is a medium of exchange that facilitates transactions but is not directly used to produce goods. The four factors of production are: <strong>Land</strong> (natural resources), <strong>Labour</strong> (human effort), <strong>Capital</strong> (man-made productive assets), and <strong>Enterprise</strong> (entrepreneurial risk and organisation). Money is needed to buy factors of production but is not itself a productive resource. This is an important distinction in macroeconomics: increasing the money supply does not automatically increase productive capacity.'
      },

      /* 10 – Para fill: the basic economic problem */
      { type: 'para_fill',
        stem: 'Complete the paragraph summarising the basic economic problem.',
        anchor: 'Economics begins with a fundamental tension between wants and resources.',
        para: 'The basic economic problem arises because human [1] are unlimited while the resources available to satisfy them are [2]. This means that society must make [3] about how to allocate scarce resources. Every choice involves an [4] cost – the value of the next best [5] foregone. The three fundamental economic questions are: what to [6], how to produce it, and [7] to produce it for. Different [8] systems answer these questions in different ways – market economies use the [9] mechanism; command economies rely on central [10].',
        blanks: [
          { id: 1, opts: ['wants', 'needs', 'goods', 'services'], ans: 0 },
          { id: 2, opts: ['finite', 'infinite', 'growing', 'shrinking'], ans: 0 },
          { id: 3, opts: ['choices', 'laws', 'prices', 'plans'], ans: 0 },
          { id: 4, opts: ['opportunity', 'financial', 'sunk', 'average'], ans: 0 },
          { id: 5, opts: ['alternative', 'good', 'option', 'resource'], ans: 0 },
          { id: 6, opts: ['produce', 'consume', 'import', 'price'], ans: 0 },
          { id: 7, opts: ['whom', 'when', 'where', 'why'], ans: 0 },
          { id: 8, opts: ['economic', 'political', 'social', 'financial'], ans: 0 },
          { id: 9, opts: ['price', 'planning', 'government', 'trade'], ans: 0 },
          { id: 10, opts: ['planning', 'pricing', 'taxation', 'regulation'], ans: 0 }
        ],
        exp: '(1) Human <strong>wants</strong> are unlimited. (2) Resources are <strong>finite</strong>. (3) Society must make <strong>choices</strong>. (4) <strong>Opportunity</strong> cost. (5) Next best <strong>alternative</strong>. (6) What to <strong>produce</strong>. (7) <strong>Whom</strong> to produce for. (8) <strong>Economic</strong> systems. (9) The <strong>price</strong> mechanism. (10) Central <strong>planning</strong>. This paragraph captures the entire framework of introductory economics: scarcity → choice → opportunity cost → the three questions → how different systems answer them.'
      }

    ]
  };

})();

