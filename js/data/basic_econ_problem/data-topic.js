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
      lede: 'Wants are infinite, resources are not. Every idea in economics flows from this single tension.',
      branches: [
        { tone: 'green',  label: 'Scarcity &amp; resources',     sub: 'Unlimited wants meet finite land, labour, capital and enterprise. Every economy, rich or poor, faces it.' },
        { tone: 'amber',  label: 'Opportunity cost',             sub: 'Every choice means giving something up. The next-best alternative forgone is the true cost of any decision.' },
        { tone: 'blue',   label: 'What, how, for whom',          sub: 'The three questions every economic system must answer about allocating scarce resources between competing uses.' },
        { tone: 'purple', label: 'Agents &amp; rationality',     sub: 'Consumers, firms and government each pursue their own objectives — and are assumed (mostly) to do so rationally.' },
        { tone: 'rose',   label: 'Positive vs normative',        sub: 'Facts versus value judgements. The line that separates economic analysis from political opinion.' }
      ],
      body: '<strong>Scarcity</strong> is the fundamental economic problem: human wants are unlimited, but the resources needed to satisfy them — land, labour, capital, and enterprise — are finite. Because resources are scarce, we cannot produce everything we want, so choices must be made.<br><br>Scarcity applies to all economies regardless of income level. Even the richest country cannot produce unlimited healthcare, education, infrastructure, and defence simultaneously. Scarcity forces trade-offs at every level: individual, firm, and government.',
      keyTerms: [
        { term: 'Scarcity', def: 'The condition where unlimited wants exceed the limited resources available to satisfy them.' },
        { term: 'Factors of production', def: 'Land (natural resources), Labour (human effort), Capital (man-made productive assets), Enterprise (risk-taking ability).' },
        { term: 'Free good', def: 'A good that is not scarce — available in unlimited quantity at zero opportunity cost. True free goods are extremely rare (e.g. air in most locations).' }
      ],
      examEdge: 'Scarcity is distinct from poverty. A billionaire still faces scarcity — they cannot buy unlimited time or live forever. Scarcity is a universal condition; poverty is a distributional one. Examiners test whether you understand this distinction.',
      keyTakeaway: 'Scarcity does not mean there is nothing left — it means there is not enough to satisfy all wants at zero cost.'
    },
    {
      id: 'basic_econ_problem_2',
      template: 'framing',
      title: 'Opportunity Cost',
      lede: 'Every choice means giving something up. Opportunity cost is the value of the next best alternative forgone — not the money you spent.',
      body: '<strong>Concrete picture:</strong> imagine you have \xa380 to spend and two options at the same price — a concert ticket and a pair of new trainers. You buy the concert ticket. Your <strong>opportunity cost</strong> is not \xa380 — it is the value of the trainers you gave up.<br><br>Opportunity cost is the true cost of any decision because resources are limited and every choice involves a trade-off. It underpins all rational decision-making, the slope of demand curves, and the shape of the production possibility frontier.',
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
      branches: [
        { tone: 'green',  label: '1. What to produce?',     sub: 'Decide which goods and services to produce with limited resources. Health care, gaming consoles, renewable energy — every yes is a no to something else.' },
        { tone: 'amber',  label: '2. How to produce?',      sub: 'Decide which combination of factors to use. Labour-intensive or capital-intensive? Local or imported inputs? Sustainable or fastest?' },
        { tone: 'blue',   label: '3. For whom to produce?', sub: 'Decide who gets the output. Distribution is shaped by income, prices, need, merit, and government allocation — never neutral.' }
      ],
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
      examEdge: 'The three questions are normative at heart — different political values lead to different answers. Recognising this earns evaluation credit: "The optimal answer depends on value judgements about efficiency, equality, and freedom."',
      keyTakeaway: 'The three questions sit at the heart of economics because scarcity forces every society to make choices.'
    },
    {
      id: 'basic_econ_problem_4',
      template: 'cause',
      title: 'Economic Agents and Their Objectives',
      causes: [
        { head: 'Consumers', body: 'Aim to maximise utility (satisfaction) subject to a budget constraint. Assumed to be rational: prefer more to less, weigh marginal costs and benefits.' },
        { head: 'Firms', body: 'Assumed to aim for profit maximisation in standard theory. Produce goods and services, employ labour, pay taxes. Alternative objectives: revenue, growth, satisficing (covered in Theme 3).' },
        { head: 'Government', body: 'Corrects market failures, redistributes income, provides public goods, and stabilises the macroeconomy. Acts in the public interest — though government failure is also possible.' },
        { head: 'Workers', body: 'Supply labour to maximise wages/utility (including leisure). Face work-leisure trade-off. Covered fully in Theme 3 labour markets.' }
      ],
      examEdge: 'The rational self-interest assumption is a simplification challenged by behavioural economics (Theme 1.7). Top essays acknowledge that real agents are not always rational — they use heuristics, are loss-averse, and act on incomplete information.',
      keyTakeaway: 'Economic decisions reflect objectives — and because objectives differ, conflict and trade-offs are common.'
    },
    {
      id: 'basic_econ_problem_5',
      template: 'paired',
      title: 'Positive vs Normative Statements',
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
      examEdge: 'Many policy debates contain both positive and normative elements. "Raising minimum wage will reduce employment" is positive (testable). "We should raise it anyway because fairness matters more" is normative. Identifying this distinction in exam questions signals analytical maturity.',
      keyTakeaway: 'Positive is about what is; normative is about what ought to be.'
    },
    {
      id: 'basic_econ_problem_6',
      template: 'mechanisms',
      title: 'Rational Economic Decision-Making',
      intro: 'Traditional economic theory assumes rational actors who maximise self-interest. This shapes all standard models.',
      steps: [
        { label: 'Marginal analysis', text: 'Rational agents make decisions at the margin — they continue an activity as long as marginal benefit (MB) ≥ marginal cost (MC). Stop when MB = MC for maximum net benefit.' },
        { label: 'Cost-benefit logic', text: 'Every economic decision involves weighing benefits against costs (including opportunity costs). The rational agent chooses the option with highest net benefit.' },
        { label: 'Self-interest assumption', text: 'Traditional models assume agents act in their own interest. Adam Smith: "It is not from the benevolence of the butcher... that we expect our dinner, but from their regard to their own interest."' },
        { label: 'Limitations', text: 'Behavioural economics shows agents use rules of thumb, are altruistic, loss-averse, and present-biased. The rational model is a useful simplification, not a complete description of human behaviour.' }
      ],
      examEdge: 'MB = MC is the universal optimising condition in economics: firms maximise profit where MR = MC; consumers maximise utility where MU/P ratio is equalised; governments should intervene until MB of intervention = MC of intervention. Internalise this logic.',
      keyTakeaway: 'Rational decision-making is a useful assumption — but in real life, decisions are often less than perfectly rational.'
    },
    {
      id: 'basic_econ_problem_7',
      template: 'paired',
      title: 'Micro vs Macro Economics',
      lede: 'Microeconomics zooms in on individual markets and decision-makers. Macroeconomics zooms out to the whole economy.',
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
