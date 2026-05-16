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
      examEdge: 'Scarcity is distinct from poverty. A billionaire still faces scarcity — they cannot buy unlimited time or live forever. Scarcity is a universal condition; poverty is a distributional one. Examiners test whether you understand this distinction.'
    },
    {
      id: 'basic_econ_problem_2',
      template: 'framing',
      title: 'Opportunity Cost',
      body: '<strong>Opportunity cost</strong> is the value of the next best alternative forgone when a choice is made. It is the true cost of any decision — not just the financial cost but what had to be given up.<br><br><strong>Examples:</strong><br>• Government spends \xa310bn on NHS: opportunity cost = the roads, schools or tax cuts that could have been funded instead.<br>• A student studies economics: opportunity cost = the next best use of that time (e.g. working).<br>• A firm uses a factory for production A: opportunity cost = profits forgone from production B.<br><br>Opportunity cost underpins all rational decision-making — including the slopes of demand curves and PPF analysis.',
      keyTerms: [
        { term: 'Opportunity cost', def: 'The next best alternative forgone as a result of making a choice.' },
        { term: 'Explicit cost', def: 'Actual monetary payment for a resource (e.g. wage paid to a worker).' },
        { term: 'Implicit cost', def: 'Opportunity cost of a resource you own (e.g. foregone salary of an entrepreneur who works in their own firm).' }
      ],
      examEdge: 'In exam questions, always state what the opportunity cost IS — not just that "something is given up." For government spending questions, name the alternative use of funds explicitly. Vague answers lose marks.'
    },
    {
      id: 'basic_econ_problem_3',
      template: 'framing',
      title: 'The Three Fundamental Economic Questions',
      body: 'Scarcity forces every society to answer three questions:<br><br><strong>1. What to produce?</strong> Which goods and services, and in what quantities?<br><strong>2. How to produce?</strong> Which combination of factors of production — labour-intensive or capital-intensive?<br><strong>3. For whom to produce?</strong> How is output distributed — by price, need, merit, or government allocation?<br><br>Different economic systems answer these questions differently. A <em>free market</em> uses price signals; a <em>command economy</em> uses central planning; a <em>mixed economy</em> uses both. The "correct" answer is contested — it is a normative question.',
      keyTerms: [
        { term: 'What to produce', def: 'Resource allocation decision: which goods/services to create.' },
        { term: 'How to produce', def: 'Factor combination decision: labour vs capital intensity.' },
        { term: 'For whom to produce', def: 'Distribution decision: who receives the output.' }
      ],
      examEdge: 'The three questions are normative at heart — different political values lead to different answers. Recognising this earns evaluation credit: "The optimal answer depends on value judgements about efficiency, equality, and freedom."'
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
      examEdge: 'The rational self-interest assumption is a simplification challenged by behavioural economics (Theme 1.7). Top essays acknowledge that real agents are not always rational — they use heuristics, are loss-averse, and act on incomplete information.'
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
      examEdge: 'Many policy debates contain both positive and normative elements. "Raising minimum wage will reduce employment" is positive (testable). "We should raise it anyway because fairness matters more" is normative. Identifying this distinction in exam questions signals analytical maturity.'
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
      examEdge: 'MB = MC is the universal optimising condition in economics: firms maximise profit where MR = MC; consumers maximise utility where MU/P ratio is equalised; governments should intervene until MB of intervention = MC of intervention. Internalise this logic.'
    },
    {
      id: 'basic_econ_problem_7',
      template: 'framing',
      title: 'Micro vs Macro Economics',
      body: '<strong>Microeconomics</strong> studies individual markets, firms, and households: how prices are determined, how firms compete, why markets fail. Themes 1 and 3 are primarily micro.<br><br><strong>Macroeconomics</strong> studies the economy as a whole: GDP, inflation, unemployment, and government policy. Themes 2 and 4 are primarily macro.<br><br>The two are connected — micro behaviour aggregates into macro outcomes (e.g. individual spending decisions create aggregate demand). But the models used are distinct and sometimes contradictory (e.g. a wage cut may help a single firm but depress aggregate demand).<br><br>The Edexcel A-level assesses both, and examiners reward candidates who can integrate micro and macro perspectives.',
      keyTerms: [
        { term: 'Microeconomics', def: 'Study of individual economic agents, markets, and resource allocation at the level of the firm, household, and industry.' },
        { term: 'Macroeconomics', def: 'Study of the economy as a whole — national income, price level, employment, and economic policy.' },
        { term: 'Fallacy of composition', def: 'The error of assuming what is true for a part is true for the whole: a wage cut helps one firm but if all firms cut wages, aggregate demand falls.' }
      ],
      examEdge: 'The micro-macro distinction matters for policy evaluation. Supply-side policies (micro-level reforms to labour and product markets) work through micro mechanisms but have macro effects. Always specify the transmission mechanism linking micro behaviour to macro outcomes in essays.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
