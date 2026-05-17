window.ECONOS_TOPIC = {
  id: 'basic_econ_problem',
  topicNum: '1.1-1.3',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Introduction to Economics',
  estTime: '7-9 minutes',
  goal: 'Lock in scarcity, choice, opportunity cost, and the three fundamental economic questions that shape every economy.',
  intro: {
    heroKey: 'heroPPF',
    summary: 'Economics begins with one unavoidable fact: resources are scarce but wants are unlimited. Every choice involves giving something up. Understanding this constraint — and how societies resolve it — is the foundation of all economic thinking.',
    doInThis: 'Work through 7 concept cards covering scarcity, choice, opportunity cost, economic agents, rationality assumptions, and the three fundamental economic questions.',
    outcomes: [
      'Define scarcity and explain why it makes choice inevitable',
      'Calculate and apply opportunity cost to real decisions',
      'Identify the three fundamental economic questions and how different systems answer them',
      'Distinguish positive from normative economic statements'
    ],
    tip: 'Opportunity cost is not money spent — it is the next best alternative forgone. Always ask: what had to be given up to make this choice?',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
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
      tip: 'Economics begins with a simple tension — our wants are unlimited, but the resources to satisfy them are limited.',
      comparison: {
        title: 'The core problem',
        emoji: '⚡',
        left:  { tone: 'rose',  icon: '❤️', label: 'Unlimited wants',   caption: 'Our wants are endless and ever-changing.' },
        right: { tone: 'green', icon: '📦', label: 'Limited resources', caption: 'Resources are finite and can be used in many ways.' }
      },
      body: '<strong>Scarcity</strong> is the fundamental economic problem: human wants are unlimited, but the resources needed to satisfy them are finite. Because resources are scarce, we cannot produce everything we want — so choices must be made.<br><br>Scarcity applies to <em>every</em> economy regardless of wealth. Even the richest country cannot produce unlimited healthcare, education, infrastructure and defence simultaneously. Scarcity forces trade-offs at every level: individual, firm, and government.',
      causes: [
        { head: 'Land',       icon: '🌿', body: 'Natural resources provided by the earth — minerals, forests, fertile soil, water, fish stocks, oil and gas.' },
        { head: 'Labour',     icon: '👥', body: 'The mental and physical effort of people — and the skills they bring. Quantity (workforce) and quality (education) both matter.' },
        { head: 'Capital',    icon: '🏭', body: 'Man-made tools, machinery, factories and infrastructure used to produce other goods and services.' },
        { head: 'Enterprise', icon: '💡', body: 'The ability to organise the other three factors, take risks and innovate. Without enterprise nothing gets made.' }
      ],
      causesLabel: 'Resources are scarce — the four factors of production',
      causesEmoji: '🏗️',
      keyTerms: [
        { term: 'Scarcity', def: 'The condition where unlimited wants exceed the limited resources available to satisfy them.' },
        { term: 'Factors of production', def: 'Land (natural resources), Labour (human effort), Capital (man-made productive assets), Enterprise (risk-taking ability).' },
        { term: 'Free good', def: 'A good that is not scarce — available in unlimited quantity at zero opportunity cost. True free goods are extremely rare (e.g. air in most locations).' }
      ],
      examEdge: 'Scarcity is distinct from poverty. A billionaire still faces scarcity — they cannot buy unlimited time or live forever. Scarcity is a universal condition; poverty is a distributional one. Examiners test whether you understand this distinction.'
    },
    {
      id: 'basic_econ_problem_2',
      template: 'framing',
      title: 'Opportunity Cost',
      lede: 'Every choice means giving something up. Opportunity cost is the value of the next best alternative forgone — not the money you spent.',
      tip: 'Every choice means giving something up. Opportunity cost is the next best alternative forgone.',
      comparison: {
        title: 'A concrete picture — both cost £80',
        emoji: '🎯',
        left:  { tone: 'green', icon: '🎫', label: 'Concert ticket',  value: '\xa380', caption: 'What you choose' },
        right: { tone: 'amber', icon: '👟', label: 'New trainers',    value: '\xa380', caption: 'What you give up' }
      },
      body: 'You spent <strong>\xa380</strong> on the concert ticket — but your <strong>opportunity cost</strong> is not \xa380. It is the value of the trainers you gave up. The same logic underpins every economic decision a consumer, firm or government makes — and it shapes demand curves, supply choices and the slope of the production possibility frontier.',
      causes: [
        { head: 'Consumers',  icon: '🛍️', body: 'A consumer choosing a cinema ticket instead of saving that money for next month\'s bills. The opportunity cost is whatever the saved money would have bought.' },
        { head: 'Firms',      icon: '🏭', body: 'A firm investing in new machines instead of advertising. The opportunity cost is the extra sales the advertising campaign might have produced.' },
        { head: 'Government', icon: '🏛️', body: 'A government spending £10bn on hospitals instead of building new roads. The opportunity cost is the roads, schools or tax cuts that could have been funded.' }
      ],
      causesLabel: 'Who faces it?',
      causesEmoji: '👥',
      branches: [
        { tone: 'green',  label: 'Same choice, different cost',                 sub: 'If the next best alternative changes, so does the opportunity cost — even if the choice itself is identical.' },
        { tone: 'amber',  label: 'Sunk costs do not count',                     sub: 'Past costs cannot be changed by today\'s decision, so they are never part of the opportunity cost — only the foregone alternatives count.' },
        { tone: 'blue',   label: 'Better alternatives = higher opportunity cost', sub: 'The more valuable the next best option, the higher the opportunity cost of the choice you made.' }
      ],
      branchesLabel: 'It depends on the next best alternative',
      branchesEmoji: '⚖️',
      keyTerms: [
        { term: 'Opportunity cost', def: 'The value of the next best alternative forgone as a result of making a choice.' },
        { term: 'Explicit cost',    def: 'Actual monetary payment for a resource (e.g. wage paid to a worker).' },
        { term: 'Implicit cost',    def: 'Opportunity cost of a resource you own (e.g. foregone salary of an entrepreneur working in their own firm).' }
      ],
      examEdge: 'In exam questions, always state what the opportunity cost IS — not just that "something is given up." For government spending questions, name the alternative use of funds explicitly. Vague answers lose marks.',
      keyTakeaway: 'Opportunity cost is not all the alternatives you give up — it is the value of the next best one.'
    },
    {
      id: 'basic_econ_problem_3',
      template: 'framing',
      title: 'The Three Fundamental Economic Questions',
      lede: 'Because resources are scarce, every economy must answer three core questions — and the answers shape the entire system.',
      tip: 'Because resources are scarce, every economy must answer three core questions: <strong>what</strong> to produce, <strong>how</strong> to produce, and <strong>for whom</strong> to produce.',
      branches: [
        { tone: 'green',  label: '1. What to produce?',     sub: 'Decide which goods and services to produce with limited resources. Health care, gaming consoles, renewable energy — every yes is a no to something else.' },
        { tone: 'amber',  label: '2. How to produce?',      sub: 'Decide which combination of factors to use. Labour-intensive or capital-intensive? Local or imported inputs? Sustainable or fastest?' },
        { tone: 'blue',   label: '3. For whom to produce?', sub: 'Decide who gets the output. Distribution is shaped by income, prices, need, merit, and government allocation — never neutral.' }
      ],
      branchesLabel: 'The three questions',
      branchesEmoji: '❓',
      body: 'Scarcity forces every society to answer these three questions. They are deceptively simple — but the answers determine production, employment, and the distribution of wealth. Different economic systems answer them very differently, which is what the next section explores.',
      causes: [
        { head: 'Market economy',  icon: '🛒', body: 'Individuals and firms answer the three questions through choices made in markets, guided by prices and profit. Decentralised, fast-moving, prone to inequality and market failure.' },
        { head: 'Command economy', icon: '🏛️', body: 'Central government planners make the main decisions about what, how and for whom to produce. Aims for equity and coordination, but struggles with information and incentive problems.' },
        { head: 'Mixed economy',   icon: '⚖️', body: 'Markets and government share the decisions, varying by industry and policy goals. The dominant model in the modern world — including the UK.' }
      ],
      causesLabel: 'Different systems answer differently',
      causesEmoji: '🌍',
      keyTerms: [
        { term: 'What to produce',     def: 'Resource allocation decision: which goods and services to create.' },
        { term: 'How to produce',      def: 'Factor combination decision: labour vs capital intensity, sustainable vs cheapest.' },
        { term: 'For whom to produce', def: 'Distribution decision: who receives the output and on what basis.' }
      ],
      examEdge: 'The three questions are normative at heart — different political values lead to different answers. Recognising this earns evaluation credit: "The optimal answer depends on value judgements about efficiency, equality, and freedom."'
    },
    {
      id: 'basic_econ_problem_4',
      template: 'cause',
      title: 'Economic Agents and Their Objectives',
      lede: 'An economy is made up of decision-makers — households, firms, governments and workers — each with their own objectives.',
      tip: 'An economy is made up of decision-makers — households, firms, governments and workers — each with their own objectives.',
      body: 'Standard economic models start by asking <em>who</em> is making the decision. Different agents pursue different objectives, which is why conflict and trade-off are so central to economics.',
      causes: [
        { head: 'Households',  icon: '🏠', body: 'Aim to maximise utility (satisfaction) within a budget. Consume goods and services and supply labour. Assumed to be rational: weigh marginal costs and benefits.' },
        { head: 'Firms',       icon: '🏭', body: 'Produce goods and services to sell in markets. Standard theory assumes profit maximisation, but firms may also pursue revenue, growth or survival (covered in Theme 3).' },
        { head: 'Government',  icon: '🏛️', body: 'Sets rules, corrects market failures, redistributes income, provides public goods and stabilises the macroeconomy. Acts in the public interest — though government failure is possible.' },
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
      examEdge: 'The rational self-interest assumption is a simplification challenged by behavioural economics (Theme 1.7). Top essays acknowledge that real agents are not always rational — they use heuristics, are loss-averse, and act on incomplete information.'
    },
    {
      id: 'basic_econ_problem_5',
      template: 'paired',
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
          'Cannot be resolved purely by evidence — reflect values and priorities',
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
      title: 'Rational Economic Decision-Making',
      lede: 'In simple economic models, decision-makers are assumed to act rationally — weighing up costs and benefits to maximise their objective.',
      tip: 'In simple economic models, decision-makers are assumed to act <strong>rationally</strong> — weighing up costs and benefits to maximise their objective.',
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
        { head: 'Firm',       icon: '🏭', body: 'A firm compares the cost of hiring extra workers against buying a machine that can do the same job — and chooses the lower-cost option.' },
        { head: 'Government', icon: '🏛️', body: 'A government evaluates competing policies and chooses the one with the greatest net benefit per pound spent.' }
      ],
      causesLabel: 'Examples',
      causesEmoji: '💡',
      branches: [
        { tone: 'amber',  label: 'Limited information', sub: 'Decision-makers rarely have complete or perfect information about every option — they decide under uncertainty.' },
        { tone: 'rose',   label: 'Bias and habit',      sub: 'Emotions, habits and cognitive biases (loss aversion, present bias, anchoring) lead to systematically suboptimal choices. Covered in Theme 1.7.' },
        { tone: 'blue',   label: 'Time pressure',       sub: 'Decisions often need to be made quickly with limited time to evaluate every option — so people use rules of thumb (heuristics) instead.' }
      ],
      branchesLabel: 'Limits to perfect rationality',
      examEdge: 'MB = MC is the universal optimising condition in economics: firms maximise profit where MR = MC; consumers maximise utility where MU/P ratio is equalised; governments should intervene until MB of intervention = MC of intervention. Internalise this logic.'
    },
    {
      id: 'basic_econ_problem_7',
      template: 'paired',
      title: 'Micro vs Macro Economics',
      lede: 'Microeconomics zooms in on individual markets and decision-makers. Macroeconomics zooms out to the whole economy.',
      tip: '<strong>Microeconomics</strong> zooms in on individual markets and decision-makers. <strong>Macroeconomics</strong> zooms out to the whole economy.',
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
        { term: 'Macroeconomics',         def: 'Study of the economy as a whole — national income, price level, employment, and economic policy.' },
        { term: 'Fallacy of composition', def: 'The error of assuming what is true for a part is true for the whole: a wage cut helps one firm; if all firms cut wages, aggregate demand falls.' }
      ],
      examEdge: 'The micro-macro distinction matters for policy evaluation. Supply-side policies (micro-level reforms to labour and product markets) work through micro mechanisms but have macro effects. Always specify the transmission mechanism linking micro behaviour to macro outcomes in essays.',
      keyTakeaway: 'Micro explains the parts; macro explains the whole — and good economists link both.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
