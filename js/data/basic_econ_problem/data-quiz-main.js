(function () {

  window.ECONOS_QUIZ = {
    id:       'basic_econ_problem_main',
    topicId:  'basic_econ_problem_main',
    title:    'The Basic Economic Problem',
    subtitle: 'Theme 1 &middot; Topic 1.1 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'basic_econ_problem_main' }),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers scarcity, opportunity cost, the three economic questions, positive/normative statements, and rational decision-making',
    shortNames: [
      'Scarcity MCQ', 'Opportunity cost', 'Three questions sort', 'Economic agents',
      'Positive vs normative', 'Rational behaviour', 'Match pairs', 'Cause & effect',
      'Odd one out', 'Para fill'
    ],

    questions: [

      /* 1 — MCQ: scarcity */
      { type: 'mcq',
        id: 'q_bep_1',
        stem: 'Which statement best defines the concept of <strong>scarcity</strong> in economics?',
        opts: [
          'Resources are finite but human wants are unlimited — creating a fundamental mismatch that forces choices at every level of society',
          'Scarcity applies only to rare natural resources such as gold and oil; manufactured goods are not subject to scarcity',
          'Scarcity means that some individuals or countries are too poor to afford essential goods',
          'Scarcity will be eliminated once technology advances sufficiently to produce unlimited quantities of all goods'
        ],
        ans: 0,
        exp: '<strong>Scarcity</strong> is the fundamental economic problem: human wants are unlimited (always more desired), but the resources to satisfy them (land, labour, capital, enterprise) are finite. This applies to all goods — not just rare commodities — because even abundant resources have alternative uses. Even wealthy societies face scarcity of time, skilled labour, and environmental capacity. Technology can shift the PPF outward but cannot eliminate scarcity, because wants expand with new possibilities. This is why economics is the study of choice under constraint.'
      },

      /* 2 — Numeric input: opportunity cost */
      { type: 'numeric_input',
        id: 'q_bep_2',
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
        exp: 'Opportunity cost = £2,000,000,000 ÷ £8,000 = <strong>250,000 hospital operations</strong>. This illustrates that government decisions always involve trade-offs — choosing to spend on infrastructure means not spending on healthcare. The opportunity cost framework forces policymakers to think explicitly about what is sacrificed, not just what is gained. This is why cost-benefit analysis should always include the value of the next best alternative — the true cost of any choice.'
      },

      /* 3 — Elastic sort: three fundamental economic questions */
      { type: 'elastic_sort',
        id: 'q_bep_3',
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
        exp: 'The <strong>three fundamental economic questions</strong> arise from scarcity: <strong>What</strong> to produce (which goods, which public services, what mix of consumption vs investment); <strong>How</strong> to produce it (which technology, which combination of factors — labour-intensive vs capital-intensive); <strong>For whom</strong> to produce (how to distribute output — by price, need, merit, or lottery). Different economic systems (market, command, mixed) answer these questions differently. Market economies use the price mechanism; command economies use central planning; mixed economies use both.'
      },

      /* 4 — MCQ: economic agents */
      { type: 'mcq',
        id: 'q_bep_4',
        stem: 'Which of the following correctly identifies the <strong>four main types of economic agent</strong> and their primary economic role?',
        opts: [
          'Consumers (maximise utility), Firms (maximise profit), Government (maximise social welfare), Banks (allocate financial capital)',
          'Consumers (maximise production), Firms (minimise consumption), Government (set prices), Banks (set interest rates)',
          'Workers (maximise wages), Owners (minimise taxes), Voters (maximise utility), Exporters (maximise trade)',
          'Households (produce), Firms (consume), Government (save), Central Bank (invest)'
        ],
        ans: 0,
        exp: 'The four main economic agents and their assumed objectives: <strong>Consumers/households</strong> — maximise utility (satisfaction) from consumption given budget constraint. <strong>Firms</strong> — traditionally assumed to maximise profit (though behavioural economics challenges this with satisficing, revenue maximisation, etc.). <strong>Government</strong> — maximise social welfare (subject to political constraints). <strong>Financial institutions/banks</strong> — allocate financial capital, and the central bank manages monetary policy. Each agent responds to price signals in the market, and their interactions determine market outcomes.'
      },

      /* 5 — Elastic sort: positive vs normative statements */
      { type: 'elastic_sort',
        id: 'q_bep_5',
        stem: 'Classify each statement as <strong>positive</strong> (factual, testable) or <strong>normative</strong> (value judgement, opinion).',
        categories: ['positive', 'normative'],
        categoryLabels: ['Positive statement (factual/testable)', 'Normative statement (value judgement)'],
        goods: [
          { icon: '📊', label: 'A 10% rise in the minimum wage reduces employment by approximately 2% in low-skill sectors', note: '', ans: 'positive' },
          { icon: '⚖️', label: 'The government should raise the minimum wage to reduce income inequality', note: '', ans: 'normative' },
          { icon: '📈', label: 'UK inflation rose to 11.1% in October 2022 — the highest in 41 years', note: '', ans: 'positive' },
          { icon: '🌍', label: 'Climate change is the most important economic problem facing humanity', note: '', ans: 'normative' },
          { icon: '🏦', label: 'Quantitative easing increases the money supply and can reduce long-term interest rates', note: '', ans: 'positive' },
          { icon: '🏥', label: 'Healthcare should be provided free at the point of use, funded by general taxation', note: '', ans: 'normative' }
        ],
        exp: '<strong>Positive statements</strong> are objective, factual claims that can in principle be tested or falsified using data (inflation rates, employment effects, money supply changes). <strong>Normative statements</strong> express value judgements about what ought to happen ("should", "most important", "fair") — these cannot be settled by evidence alone, as they depend on ethical priorities. Economists aim to keep positive and normative analysis separate: we can say what a policy will do (positive) but not whether it is the right thing to do (normative).'
      },

      /* 6 — MCQ: rational behaviour */
      { type: 'mcq',
        id: 'q_bep_6',
        stem: 'Traditional economics assumes that economic agents are <strong>rational</strong>. What does this assumption require?',
        opts: [
          'Agents weigh up costs and benefits consistently, choose the option that maximises their self-interest, and update their decisions when information changes',
          'Agents always make decisions that maximise social welfare and never act against their own long-run interests',
          'Agents have complete information about all prices, alternatives, and future outcomes before making any decision',
          'Agents only make decisions that benefit others — rationality means altruism and cooperation'
        ],
        ans: 0,
        exp: 'The <strong>rational economic agent</strong> assumption: agents (i) evaluate options systematically, (ii) weigh marginal costs against marginal benefits, (iii) choose the option that maximises their objective (utility for consumers, profit for firms), and (iv) update decisions when new information arrives. This does NOT require complete information — rational behaviour under uncertainty is still rationality. It also doesn\'t require altruism — self-interest is the assumed motivation. Behavioural economics challenges this by showing humans systematically deviate from rational behaviour through biases, heuristics, and framing effects.'
      },

      /* 7 — Match pairs: economic concepts */
      { type: 'match_pairs',
        id: 'q_bep_7',
        stem: 'Match each economic concept to its definition.',
        pairs: [
          { a: 'Scarcity', b: 'Unlimited wants but finite resources — forces choices' },
          { a: 'Opportunity cost', b: 'The value of the next best alternative foregone' },
          { a: 'Ceteris paribus', b: 'All other things being equal — holding other variables constant' },
          { a: 'Positive statement', b: 'Objective, factual claim that can be tested with evidence' },
          { a: 'Normative statement', b: 'Value judgement about what ought to be' },
          { a: 'Rational economic agent', b: 'Decision-maker who maximises objectives by weighing costs and benefits' }
        ],
        exp: 'Core vocabulary: <strong>scarcity</strong> is the starting point of all economics. <strong>Opportunity cost</strong> is the most important concept — real cost is always what you gave up, not what you paid. <strong>Ceteris paribus</strong> is the analytical device that makes it possible to study one relationship at a time. <strong>Positive/normative</strong> distinction keeps economic analysis from being contaminated by value judgements. <strong>Rational agent</strong> is the simplifying assumption that makes most micro and macro models tractable — behavioural economics relaxes it.'
      },

      /* 8 — Cause & effect: scarcity and choice */
      { type: 'cause_effect',
        id: 'q_bep_8',
        stem: 'Match each scenario to the opportunity cost or trade-off it reveals.',
        pairs: [
          { cause: 'A student spends an evening studying economics instead of working a part-time shift', effect: 'Opportunity cost = the wages foregone from not working' },
          { cause: 'A government builds a new nuclear power station', effect: 'Opportunity cost = the hospitals, schools, or tax cuts foregone' },
          { cause: 'A farmer uses land to grow wheat rather than rapeseed', effect: 'Opportunity cost = the profit foregone from not growing rapeseed' },
          { cause: 'A consumer buys a gym membership instead of a streaming service', effect: 'Opportunity cost = the entertainment value of the streaming service foregone' },
          { cause: 'A country devotes more resources to capital goods production', effect: 'Opportunity cost = the consumer goods not produced today (but future capacity grows)' },
          { cause: 'A firm trains workers rather than replacing them with automation', effect: 'Opportunity cost = the efficiency gains from automation not realised' }
        ],
        exp: 'Every decision involves an opportunity cost — the value of the next best alternative foregone. Opportunity cost is not necessarily monetary: a student\'s cost is foregone wages; a government\'s cost is foregone public services; a country\'s development trade-off is foregone consumption today for future capacity. The key insight is that resources are scarce and have alternative uses — using them for one purpose means not using them for another. This applies to time, money, land, and capital equally.'
      },

      /* 9 — Odd one out: economic resources (factors of production) */
      { type: 'odd_one_out',
        id: 'q_bep_9',
        stem: 'Three of these are recognised <strong>factors of production</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '👷', label: 'Labour — the mental and physical effort of human workers in production', note: '' },
          { icon: '💰', label: 'Money — the medium of exchange used to purchase goods and services', note: '' },
          { icon: '🏗️', label: 'Capital — man-made resources used in production (machinery, buildings, infrastructure)', note: '' },
          { icon: '🌱', label: 'Land — natural resources used in production (farmland, minerals, water)', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is <strong>money</strong>. Money is not a factor of production — it is a medium of exchange that facilitates transactions but is not directly used to produce goods. The four factors of production are: <strong>Land</strong> (natural resources), <strong>Labour</strong> (human effort), <strong>Capital</strong> (man-made productive assets), and <strong>Enterprise</strong> (entrepreneurial risk and organisation). Money is needed to buy factors of production but is not itself a productive resource. This is an important distinction in macroeconomics: increasing the money supply does not automatically increase productive capacity.'
      },

      /* 10 — Para fill: the basic economic problem */
      { type: 'para_fill',
        id: 'q_bep_10',
        stem: 'Complete the paragraph summarising the basic economic problem.',
        anchor: 'Economics begins with a fundamental tension between wants and resources.',
        para: 'The basic economic problem arises because human [1] are unlimited while the resources available to satisfy them are [2]. This means that society must make [3] about how to allocate scarce resources. Every choice involves an [4] cost — the value of the next best [5] foregone. The three fundamental economic questions are: what to [6], how to produce it, and [7] to produce it for. Different [8] systems answer these questions in different ways — market economies use the [9] mechanism; command economies rely on central [10].',
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
