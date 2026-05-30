/* ============================================================
   ECONOS – content data for factors_of_production
   8 cards · Edexcel Theme 1.1.3
   Uses Theme 1 rich templates (framing, paired, ad-interactive,
   mechanisms) – with ad-interactive used in no-step mode for the
   2×2 factor grids on cards 1, 5, 6.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'factors-of-production',
  topicNum: '1.3',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Factors of Production',
  estTime: '10-12 minutes',
  goal: 'Lock in the four factors, their rewards, factor mobility, and how to evaluate the role of each in an economy.',

  intro: {
    heroKey: 'heroScarcity',
    summary: 'Every economy combines four inputs – land, labour, capital and enterprise – to produce goods and services. Each has a distinct character and earns a distinct reward. The quality and mobility of these factors shapes how much an economy can produce and how quickly it can adapt.',
    doInThis: 'Explore the four factors, their rewards (rent, wages, interest, profit), the distinction between quantity and quality, factor mobility, and the evaluation points that separate strong exam answers.',
    outcomes: [
      'Identify the four factors of production and what each contributes',
      'Match each factor to its reward and explain why',
      'Distinguish geographic from occupational mobility',
      'Evaluate factors of production by quality, incentives and policy influence'
    ],
    tip: 'These cards revise material you have already met. They cue what you know and flag the gems that lift answers from B to A*.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards',    state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 – The Four Factors of Production ----- */
    {
      id: 'four-factors',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'The Four Factors of Production',
      lede: 'Every economy combines four key inputs to produce goods and services. Each has a distinct role – and each earns a distinct reward.',
      equation: {
        label: 'The factors of production equation',
        emoji: '🧮',
        terms: [
          { tone: 'green',  icon: '🏞️', title: 'Land',       sub: 'Natural resources' },
          { tone: 'purple', icon: '👥', title: 'Labour',     sub: 'Human effort' },
          { tone: 'amber',  icon: '🏭', title: 'Capital',    sub: 'Man-made resources' },
          { tone: 'rose',   icon: '🚀', title: 'Enterprise', sub: 'Risk + coordination' }
        ],
        operator: '+',
        resultOperator: '=',
        result: { tone: 'blue', icon: '🛒', title: 'Goods & services', sub: 'The output that supports living standards' }
      },
      blocks: [
        { type: 'sectionHeader', icon: '🧩', label: 'The four factors at a glance' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'green',  icon: '🏞️', head: 'Land',       body: 'Natural resources used in production.\n\nExamples: land, minerals, water, forests\n\nReward: Rent' },
          { type: 'tile', tone: 'purple', icon: '👥', head: 'Labour',     body: 'Human effort, physical and mental.\n\nExamples: teachers, nurses, builders, software developers\n\nReward: Wages' },
          { type: 'tile', tone: 'amber',  icon: '🏭', head: 'Capital',    body: 'Man-made resources used to produce other goods and services – not money.\n\nExamples: machinery, tools, buildings, technology\n\nReward: Interest' },
          { type: 'tile', tone: 'rose',   icon: '🚀', head: 'Enterprise', body: 'The risk-taking and organising function that combines the other factors.\n\nExamples: entrepreneurs, managers, business leaders\n\nReward: Profit' }
        ]},
        { type: 'examEdge', title: 'Why this matters', text: 'The factors of production have different characteristics and earn different rewards. Later cards explore the quantity vs quality distinction, factor mobility, and how to evaluate the relative importance of each. Master this framework and you can answer most resource-allocation questions.' }
      ]
    },

    /* ----- CARD 2 – Land ----- */
    {
      id: 'land',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Land',
      lede: 'Land is <strong>everything provided by nature</strong> and used in the production of goods and services. It is not just fields – it includes all natural resources.',
      blocks: [
        { type: 'diagram', svgKey: 'landTypesSvg' },
        { type: 'sectionHeader', icon: '⭐', label: 'Key characteristics &amp; reward' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'amber',  icon: '⭐', head: 'Key characteristics', body: 'Fixed in total supply globally – you can\'t make more land.\n\nUsable supply can change with technology and discovery (fracking, satellites).\n\nNon-homogeneous – location matters hugely.' },
          { type: 'tile', tone: 'purple', icon: '🤝', head: 'Factor reward: Rent', body: 'Land earns Rent.\n\nRent is the income earned from allowing others to use natural resources or locations.\n\nBecause land\'s supply is fixed, rent is driven almost entirely by demand.' }
        ]},
        { type: 'sectionHeader', icon: '🌍', label: 'Why this matters' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue',  icon: '🏞️', head: 'Land is not just fields', body: 'It includes all natural resources – including non-physical ones. The radio spectrum used by mobile networks is land. So is the geostationary orbit used by satellites.' },
          { type: 'tile', tone: 'green', icon: '♻️', head: 'Environmental economics', body: 'Scarce natural resources lie behind many policy debates – climate change, deforestation, water rights, fisheries, urban planning. Fixed supply also drives housing affordability.' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'When asked about land, specify whether you mean physical land or the broader concept of natural resources. The fixed-supply property of land is the most-tested feature – it makes rent demand-driven and explains why land values rise so sharply with population growth.' }
      ]
    },

    /* ----- CARD 3 – Labour ----- */
    {
      id: 'labour',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Labour',
      lede: 'Labour is the <strong>human effort</strong> – both physical and mental – used in the production of goods and services. Its supply depends on both economic incentives and wider social factors.',
      blocks: [
        { type: 'sectionHeader', icon: '👥', label: 'Two dimensions of labour' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue',   icon: '🧮', head: 'Quantity of labour', body: 'How many people are available and willing to work.\n\nDetermined by: population size (births, deaths, immigration); participation rate (share of working-age people in or seeking work); hours worked (part-time vs full-time, overtime); retirement age (when people leave the workforce).' },
          { type: 'tile', tone: 'purple', icon: '🎓', head: 'Quality of labour',  body: 'How productive each worker is.\n\nDetermined by: skills (knowledge and ability); education (formal learning); training (on-the-job and courses); experience (learning by doing); health (healthier workers are more productive). This is what economists call human capital.' }
        ]},
        { type: 'sectionHeader', icon: '📈', label: 'What affects labour supply?' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'amber', icon: '💷', head: 'Economic incentives', body: 'Higher wages encourage more people to work or work more hours. Taxes and national insurance reduce the reward from work. Benefits and welfare can affect the incentive to take a job. Labour supply curves slope upward – usually.' },
          { type: 'tile', tone: 'rose',  icon: '👨‍👩‍👧', head: 'Social factors',      body: 'Childcare and family support affect the ability to work (especially for women). Retirement-age policies influence participation. Migration rules change the size and mix of the labour force. Culture and family choices shape work decisions.' }
        ]},
        { type: 'sectionHeader', icon: '🧱', label: 'How labour supply is built' },
        { type: 'mechanismChain', steps: [
          { label: 'Skills & education',         detail: 'Build human capital – the quality side.' },
          { label: 'Available labour force',     detail: 'The pool of people who could work.' },
          { label: 'Participation & incentives', detail: 'Decisions about whether and how much to work.' }
        ]},
        { type: 'bigIdea', text: 'Why labour supply matters: Labour supply is shaped by both economic incentives and wider social policy. Understanding these influences helps explain changes in employment, participation rates and wage levels – and why two countries with similar populations can have very different labour markets.' },
        { type: 'examEdge', title: 'Quantity vs quality is the key distinction', text: 'Top-band answers always distinguish the quantity of labour from its quality. Two economies can have the same workforce size but very different output if their human capital – skills, education, health – differs. This is why education and training feature so heavily in supply-side policy.' }
      ]
    },

    /* ----- CARD 4 – Capital ----- */
    {
      id: 'capital',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Capital',
      lede: '<strong>Capital</strong> refers to man-made resources used to produce other goods and services – tools, equipment, machinery, buildings and infrastructure. It is built up through investment and can depreciate over time.',
      blocks: [
        { type: 'calloutStrip', tone: 'amber', icon: '⚠️', text: 'A common exam trap: capital in economics means physical productive resources, NOT money. Money used to buy capital is "financial capital" – a different concept.' },
        { type: 'diagram', svgKey: 'capitalTypesSvg' },
        { type: 'sectionHeader', icon: '💡', label: 'Capital is not money' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'green', icon: '🏭', head: 'Real (physical) capital',  body: 'Physical, man-made resources used in production.\n\nExamples: a factory, a machine, a road, broadband infrastructure, a computer.\n\nThis is what economists mean by "capital" in the four-factor framework. It contributes directly to productive capacity.' },
          { type: 'tile', tone: 'blue',  icon: '💷', head: 'Financial capital',        body: 'Money and financial assets used to buy real capital.\n\nExamples: savings, loans, shares, bonds.\n\nFinancial capital is a claim on resources, not a productive resource itself. It funds investment in real capital.' }
        ]},
        { type: 'sectionHeader', icon: '🏗️', label: 'How capital is built' },
        { type: 'mechanismChain', steps: [
          { label: 'Saving',              detail: 'Sacrificing current consumption.' },
          { label: 'Investment',          detail: 'Allocating resources to create capital goods.' },
          { label: 'More capital stock',  detail: 'Machines, tools, infrastructure and technology.' },
          { label: 'Higher capacity',     detail: 'Greater productive potential – the PPF shifts out.' }
        ]},
        { type: 'sectionHeader', icon: '🔄', label: 'Capital wears out – and must be replaced' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'rose', icon: '📉', head: 'Depreciation',           body: 'Capital wears out, becomes obsolete or less productive over time. Machines break, technology dates, infrastructure crumbles. The capital stock falls if not maintained.' },
          { type: 'tile', tone: 'blue', icon: '🔄', head: 'Replacement investment', body: 'Investment needed just to maintain the existing capital stock. Net investment = Gross investment − Depreciation. Only positive net investment expands productive capacity.' }
        ]},
        { type: 'bigIdea', text: 'Why capital accumulation matters: Capital accumulation can raise long-run productivity and living standards – but only if investment is sustained and capital is efficiently used. China invests ~42% of GDP; the UK and US invest ~18%. Decades of high investment can transform an economy.' },
        { type: 'examEdge', title: 'Capital ≠ money', text: 'The single most common exam mistake on this topic. Capital is physical productive resources: machines, factories, roads, tools. Money used to buy them is financial capital – a different concept. Always specify which one you mean.' }
      ]
    },

    /* ----- CARD 5 – Enterprise ----- */
    {
      id: 'enterprise',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Enterprise & Institutions',
      lede: 'Enterprise is the <strong>risk-taking and decision-making function</strong> that organises the other three factors. More broadly, <strong>institutions</strong> – government, legal frameworks, property rights – shape whether enterprise can flourish at all.',
      economistQuote: {
        portraitKey: 'economistSchumpeter',
        label: 'Economist insight · Schumpeter on the entrepreneur',
        quote: 'The function of entrepreneurs is to reform or revolutionize the pattern of production… This process of Creative Destruction is the essential fact about capitalism.',
        attribution: 'Joseph Schumpeter, Capitalism, Socialism and Democracy (1942)'
      },
      blocks: [
        { type: 'diagram', svgKey: 'enterpriseCombinationSvg' },
        { type: 'sectionHeader', icon: '🎯', label: 'The four functions of enterprise' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue',   icon: '🔍', head: 'Identifies gaps in markets', body: 'Spots unmet needs and opportunities others overlook. Without this function, profitable trades and useful products simply don\'t happen.' },
          { type: 'tile', tone: 'purple', icon: '🛡️', head: 'Bears uncertainty and risk',  body: 'Invests time and money with no guarantee of success. Bears the loss if the venture fails. This is what distinguishes enterprise from labour.' },
          { type: 'tile', tone: 'amber',  icon: '💡', head: 'Innovates',                   body: 'Creates new ideas, products or better ways of doing things. Schumpeter\'s "creative destruction" is the engine of long-run growth.' },
          { type: 'tile', tone: 'green',  icon: '🧩', head: 'Coordinates resources',       body: 'Brings land, labour and capital together and makes the key decisions: what to produce, how, at what price, who to hire.' }
        ]},
        { type: 'sectionHeader', icon: '💼', label: 'Reward and a worked example' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'rose', icon: '💰', head: 'Factor reward: Profit (or loss)', body: 'Enterprise earns profit – the residual return after rent, wages and interest have been paid. Profit is not guaranteed: a failed venture earns a loss, which the entrepreneur absorbs.' },
          { type: 'tile', tone: 'blue', icon: '🍳', head: 'Real-world example',              body: 'A founder spots demand for a meal-kit service. They hire cooks (labour), rent a kitchen (land), buy ovens (capital) and launch the business – hoping customers buy and the business makes a profit. That is enterprise.' }
        ]},
        { type: 'examEdge', title: 'Evaluating enterprise', text: 'Enterprise can be encouraged or suppressed by the tax and regulatory environment. Lower business taxes, fewer bureaucratic barriers and strong property rights promote enterprise. High taxes, red tape and policy uncertainty discourage it. "Without enterprise, resources stay idle" is a powerful evaluation line.' }
      ]
    },

    /* ----- CARD 6 – Factor Rewards Summary ----- */
    {
      id: 'factor-rewards',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Factor Rewards Summary',
      lede: 'Each factor of production earns a different reward because each contributes something different to the production process. Lock these four pairings in.',
      blocks: [
        { type: 'sectionHeader', icon: '🎁', label: 'Match each factor to its reward' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'green',  icon: '🏞️', head: 'Land → Rent',       body: 'Definition: payment for the use of natural resources.\n\nWhy this reward? Land is in fixed supply. Whoever owns it can charge others to use it for production, earning rent.\n\nRemember: natural resources earn rent because supply is fixed.' },
          { type: 'tile', tone: 'purple', icon: '👥', head: 'Labour → Wages',    body: 'Definition: payment for the physical and mental effort of people.\n\nWhy this reward? Workers give up their time and energy. Wages compensate them for this contribution to production.\n\nRemember: human effort earns wages – payment for time and skill.' },
          { type: 'tile', tone: 'amber',  icon: '🏭', head: 'Capital → Interest', body: 'Definition: payment for the use of man-made productive resources.\n\nWhy this reward? Capital wears out or could be used elsewhere. Interest rewards owners for use and the opportunity cost.\n\nRemember: productive assets earn interest – reward for use and waiting.' },
          { type: 'tile', tone: 'rose',   icon: '🚀', head: 'Enterprise → Profit', body: 'Definition: the residual return after all other costs have been paid.\n\nWhy this reward? Entrepreneurs take risks and make decisions. Profit is what is left over – it is not guaranteed.\n\nRemember: risk-taking earns profit – the residual, not guaranteed.' }
        ]},
        { type: 'examEdge', title: 'Exam tip: never mix these up', text: 'Don\'t confuse capital with money, or profit with wages. The classic A-level error is "capital earns wages" or "labour earns profit." Always link the factor to the reward it earns: Land→Rent, Labour→Wages, Capital→Interest, Enterprise→Profit. Profit is special – it\'s a residual, not a fixed payment.' }
      ]
    },

    /* ----- CARD 7 – Factor Mobility ----- */
    {
      id: 'factor-mobility',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Factor Mobility',
      lede: 'Mobility is the <strong>ability of a factor – especially labour – to move</strong> between places and jobs. Low mobility is a major cause of structural unemployment and regional inequality.',
      blocks: [
        { type: 'sectionHeader', icon: '🚉', label: 'Two dimensions of mobility' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'green',  icon: '📍', head: 'Geographic mobility',    body: 'Moving between locations.\n\nWorkers move from one area to another to take up jobs. Helps match labour to where jobs exist, reducing regional unemployment mismatches.\n\nIn practice, housing costs, family ties and information gaps keep geographic mobility lower than economists would like.' },
          { type: 'tile', tone: 'purple', icon: '💼', head: 'Occupational mobility',  body: 'Moving between jobs or industries.\n\nWorkers change occupation or sector to find better opportunities. Supports structural change as the economy evolves (manufacturing → services → digital).\n\nHigher occupational mobility means a more adaptable labour force – but requires retraining and transferable skills.' }
        ]},
        { type: 'sectionHeader', icon: '🚧', label: 'Why mobility is often low' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'amber',  icon: '💰', head: 'Retraining costs',   body: 'Learning new skills takes time and money. Mid-career workers may struggle to switch sectors without financial support.' },
          { type: 'tile', tone: 'rose',   icon: '🏠', head: 'Housing costs',      body: 'Expensive or inflexible housing markets restrict moves. UK regional house-price gaps make moving to London prohibitive for many.' },
          { type: 'tile', tone: 'purple', icon: '👨‍👩‍👧', head: 'Family ties',        body: 'Partners\' jobs, children\'s schools and elderly care duties anchor people to a location. Two-earner households are especially constrained.' },
          { type: 'tile', tone: 'blue',   icon: 'ℹ️', head: 'Lack of information', body: 'Workers may not know about opportunities elsewhere. Job vacancies, training schemes and relocation support are often poorly advertised.' }
        ]},
        { type: 'sectionHeader', icon: '⚠️', label: 'Why low mobility matters' },
        { type: 'mechanismChain', steps: [
          { label: 'Low mobility',              detail: 'Workers can\'t easily move or retrain.' },
          { label: 'Labour market immobility',  detail: 'Skills and jobs don\'t match up.' },
          { label: 'Structural unemployment',   detail: 'Persistent joblessness in some areas and industries.' }
        ]},
        { type: 'sectionHeader', icon: '🛠️', label: 'Policy levers to raise mobility' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',   icon: '🎓', head: 'Apprentices',         body: 'Build skills while earning – combining work and training.' },
          { type: 'tile', tone: 'green',  icon: '🔄', head: 'Retraining schemes',  body: 'Help mid-career workers switch sectors and update skills.' },
          { type: 'tile', tone: 'amber',  icon: 'ℹ️', head: 'Careers information', body: 'Improve guidance and awareness of opportunities and pathways.' },
          { type: 'tile', tone: 'rose',   icon: '🏠', head: 'Housing reform',      body: 'More affordable homes and rental options support relocation.' },
          { type: 'tile', tone: 'purple', icon: '🚆', head: 'Transport links',     body: 'Better connections open up more jobs within commuting distance.' },
          { type: 'tile', tone: 'slate',  icon: '👶', head: 'Childcare provision', body: 'Affordable childcare frees parents to enter or re-enter the workforce.' }
        ]},
        { type: 'examEdge', title: 'Why this matters in exam answers', text: 'Both geographic and occupational mobility matter for how quickly the economy can adjust to change, reduce unemployment and raise living standards. When asked about structural unemployment, supply-side policy, or regional inequality – mention factor mobility. It earns analytical depth marks.' }
      ]
    },

    /* ----- CARD 8 – Evaluating Factors of Production ----- */
    {
      id: 'evaluating-factors',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Evaluating Factors of Production',
      lede: 'The best evaluation goes <strong>beyond definitions</strong>. It compares how important, high quality and flexible each factor is in helping an economy produce more and improve living standards.',
      blocks: [
        { type: 'sectionHeader', icon: '⚖️', label: 'Four ways to evaluate factor importance' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'green',  icon: '🎯', head: 'Quantity vs quality',  body: 'More is not always better. Human capital (skills, health, education) and technology (efficient, modern capital) often matter more than sheer quantity. Quality raises productivity – that\'s what distinguishes rich from poor economies.' },
          { type: 'tile', tone: 'purple', icon: '🏆', head: 'Incentive effects',    body: 'Rewards shape supply. High wages attract labour. High profits attract enterprise. High interest rates encourage saving. The right incentive structure encourages effort, innovation and investment – the wrong one suppresses all three.' },
          { type: 'tile', tone: 'amber',  icon: '🏛️', head: 'Policy influence',    body: 'Government can raise factor supply and mobility. Education, training, infrastructure, competition policy, clear regulation, immigration rules – all shape how much each factor contributes. Supply-side policy is largely about factors.' },
          { type: 'tile', tone: 'blue',   icon: '⏳', head: 'Long run vs short run', body: 'Time changes everything. In the long run, fixed and variable factors become less distinct. Capital can be expanded or upgraded, skills developed, resources discovered or substituted. Short-run constraints often ease over time.' }
        ]},
        { type: 'sectionHeader', icon: '📝', label: 'Exam technique: EVALUATE' },
        { type: 'mechanismChain', steps: [
          { label: 'Define',   detail: 'State the concept clearly.' },
          { label: 'Apply',    detail: 'Use the idea in a relevant context.' },
          { label: 'Evaluate', detail: 'Weigh up different factors and views.' },
          { label: 'Judge',    detail: 'Reach a supported overall conclusion.' }
        ]},
        { type: 'bigIdea', text: 'Big takeaway: Rich economies are usually distinguished by better-quality labour, stronger enterprise and more productive capital – not just by having more resources. This is why supply-side policy focuses on raising human capital, encouraging investment, and improving institutional incentives, rather than simply trying to grow the workforce.' },
        { type: 'examEdge', title: 'A balanced evaluation always wins', text: 'When you evaluate factors, don\'t just rank them – explain that the right mix, the quality, and the institutional environment matter together. Avoid blanket statements like "labour is most important." Instead: "in this economy, weak human capital is the binding constraint, so further investment in education matters more than adding workers."' }
      ],
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
    title:    'Factors of Production',
    subtitle: 'Theme 1 &middot; Topic 1.1.2 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('factors-of-production'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~10 minutes · covers the four factors, rewards, quantity vs quality, mobility, and applying the framework to UK labour shortages',
    shortNames: [
      'Categorise factors', 'Capital MCQ', 'Match rewards', 'Sequence retraining',
      'Cause & effect: policy', 'Odd one out', 'UK labour data', 'Evaluation multi-select',
      'Mobility para-fill', 'Participation rate'
    ],

    questions: [

      /* 1 – Categorise: sort items into the four factors */
      { type: 'categorise',
        stem: 'Sort each example into the correct <strong>factor of production</strong>.',
        categories: ['Land', 'Labour', 'Capital', 'Enterprise'],
        items: [
          { text: 'North Sea oil and gas reserves',                                 category: 'Land' },
          { text: 'A nurse working a 12-hour shift in an NHS hospital',             category: 'Labour' },
          { text: 'A robotic assembly line in a Nissan car plant',                  category: 'Capital' },
          { text: 'A founder taking personal financial risk to launch a tech startup', category: 'Enterprise' },
          { text: 'A patent owned by a pharmaceutical firm',                        category: 'Capital' },
          { text: 'The fish stocks of the North Atlantic',                          category: 'Land' },
          { text: 'A software developer writing code',                              category: 'Labour' },
          { text: 'A managing director coordinating land, labour and capital to grow output', category: 'Enterprise' }
        ],
        exp: '<strong>Land</strong> = naturally occurring resources (oil, gas, fish stocks, soil, minerals, water, forests). <strong>Labour</strong> = human effort, physical and mental (nurses, developers, drivers). <strong>Capital</strong> = man-made productive resources, including intangibles like patents (machinery, infrastructure, IP). <strong>Enterprise</strong> = risk-taking and the organising function that combines the other three to produce goods and services. Classic mistakes: confusing patents (intangible capital) with enterprise, or treating a CEO managing a firm (enterprise) as ordinary labour. The risk-bearing element is what distinguishes enterprise from labour.'
      },

      /* 2 – MCQ: capital common error */
      { type: 'mcq',
        stem: 'Which statement about <strong>capital</strong> as a factor of production is correct?',
        opts: [
          'Capital is any man-made resource used to produce other goods and services – including machinery, tools, buildings, infrastructure, and patents',
          'Capital is the money a firm has in its bank account that it can use to fund production',
          'Capital is the financial investment of shareholders in a company',
          'Capital refers only to large fixed assets like factories – not smaller tools, IT equipment or intangibles'
        ],
        ans: 0,
        exp: '<strong>Capital</strong> is man-made productive resources – machinery, tools, buildings, vehicles, infrastructure, technology, and intangibles like patents and software. It does <strong>not</strong> mean money. Money is a medium of exchange that can be used to buy capital, but money itself doesn\'t produce anything. The reward for capital is <strong>interest</strong> – payment for use and for the opportunity cost of investing capital rather than using funds elsewhere. The classic A-level error is "capital = money" – examiners deduct marks every time. The UK\'s low business investment per worker (about 25% below the G7 average) is a capital-quantity and quality problem holding back productivity.'
      },

      /* 3 – Match pairs: factor → reward */
      { type: 'match_pairs',
        stem: 'Match each <strong>factor of production</strong> to the reward it earns.',
        pairs: [
          { a: 'Land',       b: 'Rent – paid because supply is fixed and owners can charge for use' },
          { a: 'Labour',     b: 'Wages – payment for time, effort and skill applied to production' },
          { a: 'Capital',    b: 'Interest – reward for use and the opportunity cost of waiting' },
          { a: 'Enterprise', b: 'Profit – the residual return after rent, wages and interest are paid' }
        ],
        exp: 'The four-way mapping is the most-tested fact in this topic: <strong>Land → Rent</strong>, <strong>Labour → Wages</strong>, <strong>Capital → Interest</strong>, <strong>Enterprise → Profit</strong>. Profit is special because it is the <em>residual</em> after all contractual payments are made – it is not guaranteed and can be negative (a loss). Wages and rent are typically contracted; profit is the entrepreneur\'s reward for bearing the risk that revenue may not cover costs. Common errors: "labour earns profit" (no – profit is the entrepreneur\'s residual) and "capital earns wages" (no – wages are paid to people, interest to capital).'
      },

      /* 4 – Sequence: how a successful retraining scheme raises GDP */
      { type: 'sequence',
        stem: 'A large adult retraining scheme upgrades displaced workers\' skills for shortage occupations. Place the steps showing how the policy raises real GDP in the correct order.',
        instr: 'Tap the steps in the correct order, from first to last.',
        items: [
          { label: 'Workers gain new skills – quality of labour rises and occupational mobility improves', note: '' },
          { label: 'Retrained workers fill vacancies in care, HGV driving and construction', note: '' },
          { label: 'Persistent shortage-sector vacancies fall; structural unemployment drops', note: '' },
          { label: 'Each worker is now in a higher-productivity use – output per worker rises', note: '' },
          { label: 'LRAS shifts right as the economy\'s productive capacity expands', note: '' },
          { label: 'Real GDP rises and inflationary pressure from supply bottlenecks eases', note: '' }
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        exp: 'The chain is the canonical supply-side outcome: skills upgrade (labour quality) → occupational mobility improves → workers move into shortage sectors → vacancies fall and each worker is more productive → LRAS shifts right → real output rises with downward pressure on prices. The mechanism is improved <strong>factor reallocation</strong> – the same labour force produces more output because each worker is now in a higher-productivity use. This is why supply-side policies are scored on whether they raise <em>quality</em> and <em>mobility</em>, not just <em>quantity</em>.'
      },

      /* 5 – Cause & effect: policy levers and their effects */
      { type: 'cause_effect',
        stem: 'Match each UK supply-side policy to its primary effect on the labour factor of production.',
        pairs: [
          { cause: 'Expanding free childcare for under-5s',           effect: 'Raises the quantity of labour by lifting participation among parents (mostly mothers)' },
          { cause: 'A national adult retraining programme',           effect: 'Raises the quality of labour and improves occupational mobility into shortage sectors' },
          { cause: 'Planning reform to allow more housebuilding in productive regions', effect: 'Raises geographic mobility by lowering housing costs in high-productivity areas' },
          { cause: 'Improved careers information and advice in schools', effect: 'Raises occupational mobility by helping new entrants choose training and roles employers actually need' },
          { cause: 'Higher state pension age',                        effect: 'Raises the quantity of labour by keeping older workers in the workforce for longer' },
          { cause: 'Investment in inter-city rail and bus networks',   effect: 'Raises geographic mobility by widening the area workers can commute within' }
        ],
        exp: 'Each policy targets a specific dimension of the labour factor: <strong>quantity</strong> (childcare, pension age) brings more workers in; <strong>quality</strong> (retraining) makes each worker more productive; <strong>occupational mobility</strong> (retraining, careers info) helps workers switch jobs/sectors; <strong>geographic mobility</strong> (housing, transport) helps workers reach the jobs. A strong exam answer identifies <em>which</em> dimension a policy targets and explains why that matters for the outcome (e.g. retraining without complementary capital investment produces qualified workers in obsolete jobs).'
      },

      /* 6 – Odd one out: capital identification */
      { type: 'odd_one_out',
        stem: 'Three of these are examples of the <strong>capital</strong> factor of production. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🛣️', label: 'The M25 motorway and surrounding infrastructure', note: '' },
          { icon: '🛢️', label: 'North Sea oil and gas reserves',                  note: '' },
          { icon: '🤖', label: 'A robotic welding arm on a car production line',   note: '' },
          { icon: '💻', label: 'Enterprise software licensed by a logistics firm', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is <strong>North Sea oil and gas reserves</strong> – a natural resource, so it is <strong>land</strong>, not capital. The other three are all capital: the M25 is physical infrastructure (built by humans); the robotic welder is physical capital; the software licence is intangible capital. Capital is <em>man-made</em>; land is <em>naturally occurring</em>. This distinction matters for the rewards too: oil reserves earn <em>rent</em> (because supply is fixed), while infrastructure, machinery and software earn <em>interest</em> (because they were created using saved resources that had alternative uses).'
      },

      /* 7 – Data table: UK labour market 2023 */
      { type: 'data_table',
        stem: 'The table shows approximate UK labour-market indicators for 2023, with the pre-pandemic 2019 figures for comparison.',
        headers: ['Indicator', '2019', '2023', 'Change'],
        rows: [
          ['Labour force (millions, 16+)',           '34.0',       '33.7',     '−0.3m'],
          ['Inactive, long-term sick (millions)',    '2.1',        '2.8',      '+0.7m'],
          ['Job vacancies (millions)',               '0.8',        '1.0',      '+0.2m'],
          ['Apprenticeship starts (000s, annual)',   '393',        '337',      '−14%'],
          ['Business investment per worker (UK vs G7 average)', '−22%', '−25%', 'wider gap']
        ],
        question: 'Which conclusion is <strong>best supported</strong> by the data?',
        opts: [
          'The UK faces both a fall in the quantity of labour and a persistent skills-mismatch problem; together with a widening capital-investment gap, a combined supply-side response (quantity + quality + capital) is appropriate',
          'The data show a pure aggregate demand problem; supply-side policy is not the right response',
          'Vacancies have risen, so the labour market is in surplus – no policy intervention is required',
          'The only problem is the apprenticeship fall – fixing that alone would close the entire labour shortage'
        ],
        ans: 0,
        exp: 'The data tell a multi-dimensional supply-side story: (1) labour <strong>quantity</strong> has fallen (labour force −0.3m, long-term sick +0.7m); (2) <strong>quality and mobility</strong> are weakening (apprenticeship starts down 14%); (3) <strong>capital</strong> is also lagging (investment-per-worker gap has widened from −22% to −25%). Persistent vacancies alongside fewer workers is the textbook signal of occupational immobility – skills don\'t match the jobs available. A serious response needs all three levers acting together. Option B ignores the structural story; C confuses vacancies with surplus (high vacancies = unfilled jobs); D oversimplifies a multi-causal problem.'
      },

      /* 8 – Multi-select: genuine evaluation */
      { type: 'multi_select',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of the claim that "improving factor mobility would substantially raise UK output"?',
        opts: [
          'Improving factor mobility involves both occupational and geographic dimensions',
          'Retraining only raises output when training matches genuine employer demand – the OBR\'s modest 60,000-person estimate for childcare expansion shows that any single mobility lever is incremental rather than transformative',
          'Mobility policy is irrelevant because the only thing that matters is aggregate demand',
          'Even fully-mobile workers cannot lift productivity without complementary capital – the UK\'s 25% capital-investment gap means mobility policies alone will produce qualified workers on outdated equipment, blunting the output effect',
          'A national retraining programme would always raise output because skills are always valuable',
          'The geographic-mobility argument depends heavily on housing reform: with house-price-to-earnings ratios of 10–14× in productive regions, retrained workers cannot reach the jobs without parallel planning reform – so mobility policy is contingent on housing policy'
        ],
        correct: [1, 3, 5],
        exp: '<strong>B, D and F demonstrate evaluation.</strong> B qualifies the claim by introducing a condition (skills-employer match) and a scale check (OBR\'s 60k estimate). D introduces a complementary-factors qualification – labour and capital are complements, not substitutes. F links the labour-mobility argument to a parallel housing constraint, reaching a context-dependent conclusion. A is a description, not evaluation. C is an unsupported assertion that ignores the supply-side mechanism. E overstates ("always raises output") – strong evaluation avoids universal claims and identifies the conditions under which the claim holds.'
      },

      /* 9 – Para fill: factor mobility */
      { type: 'para_fill',
        stem: 'Complete the paragraph summarising factor mobility and supply-side policy.',
        anchor: 'Factor mobility shapes how quickly an economy can adjust to change.',
        para: 'Factor mobility describes how easily factors of production can move between different [1] (occupational mobility) and between different [2] (geographic mobility). Where workers are unable to switch jobs because their skills don\'t match available vacancies, the economy experiences [3] unemployment alongside unfilled posts. A retraining programme primarily raises [4] mobility by upgrading the skills of the workforce, which is also an improvement in labour [5]. Housing reform and transport investment, by contrast, target [6] mobility by reducing the cost of moving to where the jobs are. Free childcare provision raises the [7] of labour by enabling parents to enter or re-enter the workforce. When mobility-raising policies succeed, the economy\'s productive capacity expands and the [8] curve shifts to the right, lifting real output and easing inflationary pressure from supply bottlenecks.',
        blanks: [
          { id: 1, opts: ['uses',         'incomes',       'industries only', 'currencies'],  ans: 0 },
          { id: 2, opts: ['locations',    'time periods',  'price levels',    'firms'],       ans: 0 },
          { id: 3, opts: ['structural',   'frictional',    'cyclical',        'seasonal'],    ans: 0 },
          { id: 4, opts: ['occupational', 'geographic',    'financial',       'political'],   ans: 0 },
          { id: 5, opts: ['quality',      'quantity',      'cost',            'price'],       ans: 0 },
          { id: 6, opts: ['geographic',   'occupational',  'industrial',      'legal'],       ans: 0 },
          { id: 7, opts: ['quantity',     'quality',       'cost',            'price'],       ans: 0 },
          { id: 8, opts: ['LRAS',         'AD',            'demand',          'Phillips'],    ans: 0 }
        ],
        exp: '(1) Different <strong>uses</strong> = occupational mobility. (2) Different <strong>locations</strong> = geographic mobility. (3) <strong>Structural</strong> unemployment is the textbook signal of occupational immobility – jobs exist but the unemployed lack matching skills. (4) Retraining → <strong>occupational</strong> mobility. (5) Skills upgrade is also a labour <strong>quality</strong> improvement. (6) Housing and transport → <strong>geographic</strong> mobility. (7) Childcare → labour <strong>quantity</strong> (more workers participate). (8) The macro effect is a rightward shift of <strong>LRAS</strong> – higher productive capacity at every price level.'
      },

      /* 10 – Numeric input: labour-force participation rate */
      { type: 'numeric_input',
        stem: 'Calculate the UK <strong>labour-force participation rate</strong> as a percentage of the working-age population.',
        context: 'In a given year, the UK working-age population (16–64) is <strong>42.0 million</strong>. Of these, <strong>32.0 million are employed</strong>, <strong>1.4 million are unemployed and actively seeking work</strong>, and the remainder are <strong>economically inactive</strong> (long-term sick, students, carers, early retirees).',
        answer: 79.5,
        tolerance: 0.5,
        unit: '%',
        hint: 'Labour force = employed + unemployed. Participation rate = labour force ÷ working-age population × 100.',
        workingSteps: [
          'Labour force = 32.0m (employed) + 1.4m (unemployed) = 33.4 million',
          'Participation rate = 33.4m ÷ 42.0m × 100',
          'Participation rate = 0.7952... × 100 ≈ 79.5%',
          'Economically inactive = 42.0 − 33.4 = 8.6 million (about 20.5% of working-age population)'
        ],
        exp: 'Labour force = employed + unemployed = 32.0m + 1.4m = <strong>33.4 million</strong>. Participation rate = 33.4 ÷ 42.0 × 100 = <strong>≈ 79.5%</strong>. The remaining <strong>8.6 million</strong> are economically inactive – they are not in the labour force at all. Mobility policies (childcare, occupational health, retraining) aim to convert some of this inactive group into active labour-force participants. Even a small percentage-point gain in the participation rate represents hundreds of thousands of additional workers – illustrating why the OBR\'s estimated 60,000-person gain from the 2024 childcare expansion is meaningful but modest set against the scale of the inactive population.'
      }
    ]
  };

})();
