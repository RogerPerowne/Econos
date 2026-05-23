(function () {

  window.ECONOS_QUIZ = {
    id:       'basic_econ_problem_main',
    topicId:  'basic_econ_problem_main',
    title:    'The Basic Economic Problem',
    subtitle: 'Theme 1 &middot; Topic 1.1 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering scarcity, opportunity cost, the three fundamental economic questions, economic agents, positive vs normative statements, rational decision-making, and the micro&#8211;macro distinction. Mixed formats &#8212; sort, calculation, paragraph completion, chain &#8212; designed for the analysis marks Edexcel rewards.',
    shortNames: {
      'basic_econ_problem_1': 'Scarcity',
      'basic_econ_problem_2': 'Opportunity cost',
      'basic_econ_problem_3': 'Three questions',
      'basic_econ_problem_4': 'Economic agents',
      'basic_econ_problem_5': 'Positive vs normative',
      'basic_econ_problem_6': 'Rational decisions',
      'basic_econ_problem_7': 'Micro vs macro'
    },

    questions: [

      /* 1 &#8212; MCQ: scarcity */
      { type: 'mcq',
        stem: 'Which of the following statements about <strong>scarcity</strong> is correct?',
        opts: [
          'Scarcity is a universal condition &#8212; it applies to all economies regardless of income level because human wants are unlimited relative to finite resources',
          'Scarcity affects only developing countries; wealthy economies like the UK have sufficient resources to satisfy all wants',
          'Scarcity is identical to poverty &#8212; a billionaire does not face scarcity because they can purchase almost anything',
          'Scarcity would be eliminated if governments used central planning to allocate all resources'
        ],
        ans: 0,
        exp: 'Scarcity is universal: even the richest economies face finite land, labour, capital, and enterprise relative to unlimited wants. A billionaire still faces scarcity &#8212; they cannot buy unlimited time or live forever. Scarcity is the fundamental economic problem; poverty is a distributional question about how resources are shared. No system, market or planned, eliminates scarcity &#8212; it merely determines how the constraint is managed.'
      },

      /* 2 &#8212; Elastic sort: factors of production */
      { type: 'elastic_sort',
        stem: 'Classify each resource as one of the four <strong>factors of production</strong>.',
        categories: ['land', 'labour', 'capital', 'enterprise'],
        categoryLabels: ['Land', 'Labour', 'Capital', 'Enterprise'],
        goods: [
          { icon: '&#127807;', label: 'A wheat field in Lincolnshire', note: '', ans: 'land' },
          { icon: '&#128119;', label: 'A warehouse worker packing orders at an Amazon fulfilment centre', note: '', ans: 'labour' },
          { icon: '&#128674;', label: 'A fleet of lorries owned by a logistics firm', note: '', ans: 'capital' },
          { icon: '&#128200;', label: 'A founder who risks personal savings to start a new tech company', note: '', ans: 'enterprise' },
          { icon: '&#9981;', label: 'A wind turbine installed off the coast of Yorkshire', note: '', ans: 'capital' },
          { icon: '&#127758;', label: 'Offshore oil reserves beneath the North Sea', note: '', ans: 'land' }
        ],
        exp: '<strong>Land</strong> covers all natural resources &#8212; farmland, oil reserves, rivers, mineral deposits. <strong>Labour</strong> is human effort, both physical and mental, applied to production. <strong>Capital</strong> is man-made productive assets (machinery, tools, infrastructure) used to produce other goods. <strong>Enterprise</strong> is the risk-taking function that combines the other factors and bears uncertainty. Wind turbines and lorries are capital (man-made); oil reserves and farmland are land (natural). The entrepreneur-founder is the classic enterprise example.'
      },

      /* 3 &#8212; Calculation: opportunity cost */
      { type: 'calculation',
        context: 'The UK government has a budget of <strong>&#163;20 billion</strong> available for public spending. It can choose between the following projects (each is indivisible &#8212; all or nothing):<br><br>Option A: Build 10 new hospitals at &#163;2bn each (total &#163;20bn)<br>Option B: Upgrade the national rail network (&#163;20bn)<br>Option C: Increase defence spending by &#163;20bn<br><br>The government chooses Option B.',
        working: [
          'The government must spend the entire &#163;20bn on one option.',
          'Choosing Option B (rail upgrade) means Options A and C cannot be funded.',
          'The next best alternative given up is the option ranked second &#8212; assume hospitals (Option A) is preferred to defence (Option C).',
          'Opportunity cost = value of Option A forgone = 10 new hospitals.'
        ],
        stem: 'What is the <strong>opportunity cost</strong> of the government choosing to upgrade the rail network?',
        opts: [
          { ped: 'The 10 new hospitals that could have been built', typ: 'The opportunity cost is the next best alternative forgone &#8212; if hospitals were the second-ranked option, they are the opportunity cost', rev: 'Opportunity cost is the next best alternative, not all alternatives' },
          { ped: 'The &#163;20 billion spent on the rail upgrade', typ: 'The monetary cost is not the opportunity cost &#8212; it is the explicit financial outlay', rev: 'Opportunity cost is what is given up, not the cash spent' },
          { ped: 'Both the hospitals AND defence spending', typ: 'Opportunity cost is specifically the NEXT BEST alternative, not all alternatives', rev: 'Only the highest-ranked forgone option counts as opportunity cost' },
          { ped: 'Zero &#8212; the government has unlimited borrowing capacity', typ: 'All governments face resource constraints; even borrowed funds have opportunity costs', rev: 'Scarcity applies to all economic agents including governments' }
        ],
        ans: 0,
        exp: 'Opportunity cost is the <strong>next best alternative forgone</strong>. By choosing the rail upgrade, the government cannot also build the hospitals. The opportunity cost is the 10 new hospitals &#8212; not the &#163;20bn (which is the explicit/financial cost) and not all options simultaneously (only the next best alternative counts). This principle applies at every scale: individuals, firms, and governments all face opportunity costs in every decision.'
      },

      /* 4 &#8212; Multi-select: shifts the three questions */
      { type: 'multi_select',
        stem: 'Which of the following are among the <strong>three fundamental economic questions</strong> every society must answer?',
        opts: [
          'What to produce &#8212; which goods and services, and in what quantities?',
          'How to produce &#8212; which combination of factors of production to use?',
          'For whom to produce &#8212; how is output distributed among the population?',
          'When to produce &#8212; at what point in the business cycle should output be maximised?',
          'Why to produce &#8212; what is the philosophical justification for economic activity?'
        ],
        correct: [0, 1, 2],
        exp: 'The three fundamental questions are <strong>What, How, and For Whom</strong>. These are forced on every economy by scarcity. "When to produce" is not one of the three (it is a macroeconomic stabilisation issue, not a fundamental allocation question). "Why to produce" is a philosophical question outside the standard economic framework. Different systems answer the three questions differently: free markets use price signals; command economies use directives; mixed economies use both.'
      },

      /* 5 &#8212; Para fill: rational decision-making */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph about rational decision-making by selecting the correct term for each blank.',
        anchor: 'Traditional economic theory assumes that agents are rational maximisers.',
        para: 'A rational consumer continues to consume a good as long as the [1] benefit of an additional unit exceeds its [2] cost. The optimal consumption point is where [3] benefit equals [4] cost. This is analogous to the firm, which maximises profit where marginal [5] equals marginal [6]. Both apply the same underlying [7] principle: continue an activity until the benefit of the last unit exactly equals the cost of the last unit.',
        blanks: [
          { id: 1, opts: ['marginal', 'average', 'total', 'fixed'], ans: 0 },
          { id: 2, opts: ['marginal', 'average', 'total', 'sunk'], ans: 0 },
          { id: 3, opts: ['marginal', 'average', 'total', 'minimum'], ans: 0 },
          { id: 4, opts: ['marginal', 'average', 'total', 'opportunity'], ans: 0 },
          { id: 5, opts: ['revenue', 'cost', 'output', 'wage'], ans: 0 },
          { id: 6, opts: ['cost', 'revenue', 'output', 'profit'], ans: 0 },
          { id: 7, opts: ['marginal', 'average', 'total', 'fixed'], ans: 0 }
        ],
        exp: '(1&#8211;4) The rational consumer optimises at the <strong>margin</strong>: continue as long as MB &#8805; MC; stop when MB = MC. Using "average" or "total" would describe a different (incorrect) decision rule. (5&#8211;6) Firms maximise profit where <strong>MR = MC</strong> (marginal revenue = marginal cost). (7) This is the <strong>marginal</strong> principle: the universal optimising condition in economics. It applies to consumers (MU/P ratio equalised), firms (MR = MC), and governments (MB of intervention = MC of intervention).'
      },

      /* 6 &#8212; Odd one out: economic agents */
      { type: 'odd_one_out',
        stem: 'Three of these are <strong>standard economic agents</strong> covered in microeconomic theory. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '&#128100;', label: 'Consumers &#8212; maximise utility subject to a budget constraint', note: '' },
          { icon: '&#127970;', label: 'Firms &#8212; assumed to maximise profit', note: '' },
          { icon: '&#127968;', label: 'Households &#8212; supply labour and consume goods and services', note: '' },
          { icon: '&#127758;', label: 'The global climate &#8212; a shared environmental resource that affects production', note: '' }
        ],
        ans: 3,
        exp: 'The <strong>global climate</strong> is not an economic agent &#8212; it is an environmental resource or externality, not a decision-maker with objectives. The standard economic agents are <strong>consumers</strong> (maximise utility), <strong>firms</strong> (maximise profit), <strong>government</strong> (maximise social welfare / correct market failures), and <strong>workers</strong> (maximise utility including leisure). Households combine consumer and worker roles. The climate matters enormously in economics (externalities, public goods) but it is the context in which agents operate, not an agent itself.'
      },

      /* 7 &#8212; Data table: government spending trade-offs */
      { type: 'data_table',
        stem: 'The table shows UK government spending allocations (&#163;bn) across selected departments in a hypothetical spending review.',
        headers: ['Department', 'Current spend (&#163;bn)', 'Proposed spend (&#163;bn)', 'Change'],
        rows: [
          ['NHS (Health)', '182', '200', '+18'],
          ['Education', '73', '68', '&#8722;5'],
          ['Defence', '55', '60', '+5'],
          ['Transport', '28', '20', '&#8722;8'],
          ['Housing / Planning', '12', '10', '&#8722;2']
        ],
        question: 'Which interpretation best applies the concept of <strong>opportunity cost</strong> to this data?',
        opts: [
          'The &#163;18bn increase in NHS spending has an opportunity cost: the main alternative use forgone is the transport and education spending that was cut to help fund it',
          'There is no opportunity cost because the government can borrow any amount it needs without constraint',
          'Opportunity cost applies only to private firms; government spending decisions are made on the basis of need, not trade-offs',
          'The opportunity cost of NHS spending is exactly &#163;18bn in monetary terms'
        ],
        ans: 0,
        exp: 'Opportunity cost applies to <em>all</em> economic agents, including governments. Increasing NHS spending by &#163;18bn while cutting transport (&#8722;&#163;8bn) and education (&#8722;&#163;5bn) illustrates the trade-off: the main opportunity cost of more health spending is the infrastructure improvements and educational investment that are forgone. Monetary cost (&#163;18bn) is the explicit cost, not the opportunity cost. Governments do face borrowing constraints and always face scarcity &#8212; the spending review process exists precisely to manage these trade-offs.'
      },

      /* 8 &#8212; Multi-select: evaluation of the basic economic problem */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>the basic economic problem and how societies allocate scarce resources</strong>. Which of the following statements demonstrate <strong>evaluation</strong> &#8212; as opposed to description or one-sided analysis?',
        opts: [
          'Free markets answer the three fundamental economic questions through the price mechanism, but may produce outcomes that are allocatively efficient yet deeply inequitable &#8212; meaning that efficiency and equity are often competing objectives that require normative judgement to weigh against each other',
          'All economies face the basic economic problem of scarcity because human wants are unlimited but resources are finite',
          'The opportunity cost of any resource allocation decision is not fixed &#8212; it changes as circumstances change: the opportunity cost of spending &#163;20bn on defence differs in peacetime from wartime, making context essential to any evaluation of government spending choices',
          'Opportunity cost is the value of the next best alternative forgone when a decision is made',
          'Whether a market or planned economy better solves the basic economic problem cannot be answered in the abstract: historical evidence (Soviet planning failures, market failures in healthcare) suggests both systems have systematic weaknesses, and the best outcome typically involves a mixed economy that combines price signals with corrective intervention',
          'Positive economics is about facts while normative economics is about opinions'
        ],
        correct: [0, 2, 4],
        exp: 'Option A is strong evaluation: it identifies a genuine tension between two policy objectives (efficiency vs equity), explains that the tension requires a normative judgement rather than a purely economic answer, and thereby limits the scope of any claim that free markets &#8220;solve&#8221; the allocation problem &#8212; this is a qualifying, direction-giving move. Option C is strong evaluation: it challenges the implicit assumption that opportunity cost is a fixed datum, demonstrates that context changes the ranking of alternatives, and uses a concrete contrast (peacetime vs wartime defence) to reach a directional conclusion about the importance of context &#8212; exactly the sophistication examiners reward. Option E is strong evaluation: it explicitly refuses to answer a comparative question in the abstract, marshals historical evidence from both systems to demonstrate systematic failure on each side, and reaches a qualified conclusion (mixed economy) &#8212; this is conditional evaluation at its best. Option B is pure description &#8212; it defines scarcity without any qualifying, weighing, or conditional reasoning. Option D is a definitional statement of opportunity cost &#8212; knowledge content, not evaluation. Option F describes the positive/normative distinction without applying it, qualifying it, or using it to reach any conclusion.'
      },

      /* 9 &#8212; MCQ: micro vs macro */
      { type: 'mcq',
        stem: 'Which of the following is the best example of a <strong>macroeconomic</strong> question rather than a microeconomic one?',
        opts: [
          'What is the effect of a rise in interest rates on the overall level of unemployment and GDP growth in the UK?',
          'How does an increase in the price of petrol affect the demand for electric vehicles?',
          'Why do firms in the pharmaceutical industry earn higher profit margins than those in the supermarket sector?',
          'What happens to the consumer surplus in the housing market when stamp duty is reduced?'
        ],
        ans: 0,
        exp: '<strong>Macroeconomics</strong> studies the economy as a whole &#8212; GDP, unemployment, the aggregate price level, and national policy. The interest rate question concerns aggregate outcomes (unemployment rate, GDP growth) and is clearly macroeconomic. Options B, C, and D all concern individual markets (petrol/EVs, pharmaceuticals, housing) &#8212; these are microeconomic questions about relative prices, individual firm behaviour, and welfare in specific markets. The micro&#8211;macro distinction matters because the same policy can have different effects at different levels (the fallacy of composition).'
      },

      /* 10 &#8212; Chain: scarcity to economic systems */
      { type: 'chain',
        stem: 'Place the following ideas in the correct logical order, tracing the argument from the basic economic problem to the debate about economic systems.',
        items: [
          { label: 'Every society must decide what, how, and for whom to produce', note: '' },
          { label: 'Human wants are unlimited but resources (land, labour, capital, enterprise) are finite', note: '' },
          { label: 'Different economic systems &#8212; free market, command, mixed &#8212; offer different answers and involve different trade-offs', note: '' },
          { label: 'Scarcity means choices must be made &#8212; and every choice involves an opportunity cost', note: '' },
          { label: 'These choices can be made by the price mechanism, by central planning, or by a combination of both', note: '' },
          { label: 'The optimal system depends on value judgements about efficiency, equality, and freedom &#8212; a normative question', note: '' }
        ],
        correctOrder: [1, 3, 0, 4, 2, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Resources are finite, wants are unlimited &#8212; the basic economic problem.<br>2. Scarcity forces choices, and choices involve opportunity costs.<br>3. The three fundamental questions must therefore be answered by every society.<br>4. Different mechanisms (price, planning, mixed) can answer them.<br>5. Different economic systems are essentially different answers to these questions.<br>6. Choosing the best system is a normative question &#8212; it depends on value judgements.<br><br>This chain connects the whole of Topic 1.1 and sets up the rest of Theme 1.'
      }

    ]
  };

})();
