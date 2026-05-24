/* ============================================================
   ECONOS — content data for factors_of_production
   8 cards · Edexcel Theme 1.1.3
   Uses Theme 1 rich templates (framing, paired, ad-interactive,
   mechanisms) — with ad-interactive used in no-step mode for the
   2×2 factor grids on cards 1, 5, 6.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'factors_of_production',
  topicNum: '1.3',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Factors of Production',
  estTime: '10-12 minutes',
  goal: 'Lock in the four factors, their rewards, factor mobility, and how to evaluate the role of each in an economy.',

  intro: {
    heroKey: 'heroScarcity',
    summary: 'Every economy combines four inputs — land, labour, capital and enterprise — to produce goods and services. Each has a distinct character and earns a distinct reward. The quality and mobility of these factors shapes how much an economy can produce and how quickly it can adapt.',
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

    /* ----- CARD 1 — The Four Factors of Production -----
       2×2 factor grid (via ad-interactive causes) + factor flow */
    {
      id: 'four-factors',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'The Four Factors of Production',
      lede: 'Every economy combines four key inputs to produce goods and services. Each has a distinct role — and each earns a distinct reward.',
      causesLabel: 'The four factors at a glance',
      causesEmoji: '🧩',
      causes: [
        {
          tone: 'green',
          icon: '🏞️',
          head: 'Land',
          body: 'Natural resources used in production.<br><br><strong>Examples:</strong> land, minerals, water, forests<br><br><span style="display:inline-block;margin-top:4px;padding:5px 12px;border-radius:999px;background:#D1FAE5;color:#065F46;font-size:12px;font-weight:700;">💰 Reward: Rent</span>'
        },
        {
          tone: 'purple',
          icon: '👥',
          head: 'Labour',
          body: 'Human effort, physical and mental.<br><br><strong>Examples:</strong> teachers, nurses, builders, software developers<br><br><span style="display:inline-block;margin-top:4px;padding:5px 12px;border-radius:999px;background:#EDE9FE;color:#5B21B6;font-size:12px;font-weight:700;">💰 Reward: Wages</span>'
        },
        {
          tone: 'amber',
          icon: '🏭',
          head: 'Capital',
          body: 'Man-made resources used to produce other goods and services — <strong>not money</strong>.<br><br><strong>Examples:</strong> machinery, tools, buildings, technology<br><br><span style="display:inline-block;margin-top:4px;padding:5px 12px;border-radius:999px;background:#FEF3C7;color:#92400E;font-size:12px;font-weight:700;">💰 Reward: Interest</span>'
        },
        {
          tone: 'rose',
          icon: '🚀',
          head: 'Enterprise',
          body: 'The risk-taking and organising function that combines the other factors.<br><br><strong>Examples:</strong> entrepreneurs, managers, business leaders<br><br><span style="display:inline-block;margin-top:4px;padding:5px 12px;border-radius:999px;background:#FEE2E2;color:#B91C1C;font-size:12px;font-weight:700;">💰 Reward: Profit</span>'
        }
      ],
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
      examEdge: {
        title: 'Why this matters',
        text: 'The factors of production have different characteristics and earn different rewards. Later cards explore the <strong>quantity vs quality</strong> distinction, <strong>factor mobility</strong>, and how to evaluate the relative importance of each. Master this framework and you can answer most resource-allocation questions.'
      }
    },

    /* ----- CARD 2 — Land -----
       3-column tile row + remember footer */
    {
      id: 'land',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Land',
      lede: 'Land is <strong>everything provided by nature</strong> and used in the production of goods and services. It is not just fields — it includes all natural resources.',
      visualKey: 'landTypesSvg',
      causesLabel: 'Key characteristics &amp; reward',
      causesEmoji: '⭐',
      causes: [
        {
          tone: 'amber',
          icon: '⭐',
          head: 'Key characteristics',
          body: '<strong>Fixed in total supply</strong> globally — you can\'t make more land.<br><br><strong>Usable supply can change</strong> with technology and discovery (fracking, satellites).<br><br><strong>Non-homogeneous</strong> — location matters hugely.'
        },
        {
          tone: 'purple',
          icon: '🤝',
          head: 'Factor reward: Rent',
          body: 'Land earns <strong>Rent</strong>.<br><br>Rent is the income earned from allowing others to use natural resources or locations.<br><br>Because land\'s supply is fixed, rent is driven almost entirely by <em>demand</em>.'
        }
      ],
      causes2Label: 'Why this matters',
      causes2Emoji: '🌍',
      causes2: [
        {
          tone: 'blue',
          icon: '🏞️',
          head: 'Land is not just fields',
          body: 'It includes <strong>all natural resources</strong> — including non-physical ones. The radio spectrum used by mobile networks is land. So is the geostationary orbit used by satellites.'
        },
        {
          tone: 'green',
          icon: '♻️',
          head: 'Environmental economics',
          body: 'Scarce natural resources lie behind many policy debates — climate change, deforestation, water rights, fisheries, urban planning. Fixed supply also drives housing affordability.'
        }
      ],
      examEdge: {
        title: 'Exam edge',
        text: 'When asked about land, <strong>specify whether you mean physical land or the broader concept of natural resources</strong>. The fixed-supply property of land is the most-tested feature — it makes rent demand-driven and explains why land values rise so sharply with population growth.'
      }
    },

    /* ----- CARD 3 — Labour ----- */
    {
      id: 'labour',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Labour',
      lede: 'Labour is the <strong>human effort</strong> — both physical and mental — used in the production of goods and services. Its supply depends on both economic incentives and wider social factors.',
      pairFirst: true,
      pairLabel: 'Two dimensions of labour',
      pairEmoji: '👥',
      left: {
        tone: 'blue',
        icon: '🧮',
        iconStyle: 'circle',
        label: 'Quantity of labour',
        text: '<strong>How many people are available and willing to work.</strong><br><br>Determined by: <em>population size</em> (births, deaths, immigration); <em>participation rate</em> (the share of working-age people in or seeking work); <em>hours worked</em> (part-time vs full-time, overtime); <em>retirement age</em> (when people leave the workforce).'
      },
      right: {
        tone: 'purple',
        icon: '🎓',
        iconStyle: 'circle',
        label: 'Quality of labour',
        text: '<strong>How productive each worker is.</strong><br><br>Determined by: <em>skills</em> (knowledge and ability); <em>education</em> (formal learning); <em>training</em> (on-the-job and courses); <em>experience</em> (learning by doing); <em>health</em> (healthier workers are more productive). This is what economists call <strong>human capital</strong>.'
      },
      causesLabel: 'What affects labour supply?',
      causesEmoji: '📈',
      causes: [
        {
          tone: 'amber',
          icon: '💷',
          head: 'Economic incentives',
          body: '<strong>Higher wages</strong> encourage more people to work or work more hours. <strong>Taxes and national insurance</strong> reduce the reward from work. <strong>Benefits and welfare</strong> can affect the incentive to take a job. Labour supply curves slope upward — usually.'
        },
        {
          tone: 'rose',
          icon: '👨‍👩‍👧',
          head: 'Social factors',
          body: '<strong>Childcare and family support</strong> affect the ability to work (especially for women). <strong>Retirement-age policies</strong> influence participation. <strong>Migration rules</strong> change the size and mix of the labour force. <strong>Culture and family choices</strong> shape work decisions.'
        }
      ],
      flowTitle: 'How labour supply is built',
      flowEmoji: '🧱',
      flow: [
        { tone: 'green',  icon: '🎓', title: 'Skills & education',     sub: 'Build human capital — the quality side.' },
        { tone: 'blue',   icon: '👥', title: 'Available labour force', sub: 'The pool of people who could work.' },
        { tone: 'purple', icon: '🎯', title: 'Participation & incentives', sub: 'Decisions about whether and how much to work.' }
      ],
      conclusion: { title: 'Why labour supply matters', text: 'Labour supply is shaped by <strong>both economic incentives and wider social policy</strong>. Understanding these influences helps explain changes in employment, participation rates and wage levels — and why two countries with similar populations can have very different labour markets.' },
      examEdge: {
        title: 'Quantity vs quality is the key distinction',
        text: 'Top-band answers always distinguish the <em>quantity</em> of labour from its <em>quality</em>. Two economies can have the same workforce size but very different output if their <strong>human capital</strong> — skills, education, health — differs. This is why education and training feature so heavily in supply-side policy.'
      }
    },

    /* ----- CARD 4 — Capital ----- */
    {
      id: 'capital',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Capital',
      lede: '<strong>Capital</strong> refers to man-made resources used to produce other goods and services — tools, equipment, machinery, buildings and infrastructure. It is built up through investment and can depreciate over time.',
      visualKey: 'capitalTypesSvg',
      tip: { icon: '⚠️', tone: 'amber', text: 'A common exam trap: capital in economics means physical productive resources, <strong>NOT money</strong>. Money used to <em>buy</em> capital is "financial capital" — a different concept.' },
      pairFirst: true,
      pairLabel: 'Capital is not money',
      pairEmoji: '💡',
      left: {
        tone: 'green',
        icon: '🏭',
        iconStyle: 'circle',
        label: 'Real (physical) capital',
        text: '<strong>Physical, man-made resources used in production.</strong><br><br>Examples: a factory, a machine, a road, broadband infrastructure, a computer.<br><br>This is what economists mean by "capital" in the four-factor framework. It contributes directly to productive capacity.'
      },
      right: {
        tone: 'blue',
        icon: '💷',
        iconStyle: 'circle',
        label: 'Financial capital',
        text: '<strong>Money and financial assets used to buy real capital.</strong><br><br>Examples: savings, loans, shares, bonds.<br><br>Financial capital is a <em>claim</em> on resources, not a productive resource itself. It funds investment in real capital.'
      },
      flowTitle: 'How capital is built',
      flowEmoji: '🏗️',
      flow: [
        { tone: 'amber',  icon: '🐷', title: 'Saving',             sub: 'Sacrificing current consumption.' },
        { tone: 'blue',   icon: '📈', title: 'Investment',         sub: 'Allocating resources to create capital goods.' },
        { tone: 'green',  icon: '🏭', title: 'More capital stock', sub: 'Machines, tools, infrastructure and technology.' },
        { tone: 'purple', icon: '🚀', title: 'Higher capacity',    sub: 'Greater productive potential — the PPF shifts out.' }
      ],
      causesLabel: 'Capital wears out — and must be replaced',
      causesEmoji: '🔄',
      causes: [
        {
          tone: 'rose',
          icon: '📉',
          head: 'Depreciation',
          body: 'Capital wears out, becomes obsolete or less productive over time. Machines break, technology dates, infrastructure crumbles. The capital stock falls if not maintained.'
        },
        {
          tone: 'blue',
          icon: '🔄',
          head: 'Replacement investment',
          body: 'Investment needed just to <em>maintain</em> the existing capital stock. <strong>Net investment</strong> = Gross investment − Depreciation. Only positive net investment expands productive capacity.'
        }
      ],
      conclusion: { title: 'Why capital accumulation matters', text: 'Capital accumulation can raise long-run productivity and living standards — but only if <strong>investment is sustained</strong> and capital is <strong>efficiently used</strong>. China invests ~42% of GDP; the UK and US invest ~18%. Decades of high investment can transform an economy.' },
      examEdge: {
        title: 'Capital ≠ money',
        text: 'The single most common exam mistake on this topic. <strong>Capital is physical productive resources</strong>: machines, factories, roads, tools. Money used to buy them is <em>financial</em> capital — a different concept. Always specify which one you mean.'
      }
    },

    /* ----- CARD 5 — Enterprise -----
       4-function grid + factor-combination flow + worked example */
    {
      id: 'enterprise',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Enterprise & Institutions',
      lede: 'Enterprise is the <strong>risk-taking and decision-making function</strong> that organises the other three factors. More broadly, <strong>institutions</strong> — government, legal frameworks, property rights — shape whether enterprise can flourish at all.',
      visualKey: 'enterpriseCombinationSvg',
      causesLabel: 'The four functions of enterprise',
      causesEmoji: '🎯',
      causes: [
        {
          tone: 'blue',
          icon: '🔍',
          head: 'Identifies gaps in markets',
          body: 'Spots <strong>unmet needs</strong> and opportunities others overlook. Without this function, profitable trades and useful products simply don\'t happen.'
        },
        {
          tone: 'purple',
          icon: '🛡️',
          head: 'Bears uncertainty and risk',
          body: 'Invests time and money <strong>with no guarantee of success</strong>. Bears the loss if the venture fails. This is what distinguishes enterprise from labour.'
        },
        {
          tone: 'amber',
          icon: '💡',
          head: 'Innovates',
          body: 'Creates <strong>new ideas, products or better ways of doing things</strong>. Schumpeter\'s "creative destruction" is the engine of long-run growth.'
        },
        {
          tone: 'green',
          icon: '🧩',
          head: 'Coordinates resources',
          body: 'Brings <strong>land, labour and capital together</strong> and makes the key decisions: what to produce, how, at what price, who to hire.'
        }
      ],
      pairLabel: 'Reward and a worked example',
      pairEmoji: '💼',
      left: {
        tone: 'rose',
        icon: '💰',
        iconStyle: 'circle',
        label: 'Factor reward: Profit (or loss)',
        text: 'Enterprise earns <strong>profit</strong> — the <em>residual</em> return after rent, wages and interest have been paid. Profit is <strong>not guaranteed</strong>: a failed venture earns a loss, which the entrepreneur absorbs.'
      },
      right: {
        tone: 'blue',
        icon: '🍳',
        iconStyle: 'circle',
        label: 'Real-world example',
        text: 'A founder spots demand for a meal-kit service. They <strong>hire cooks</strong> (labour), <strong>rent a kitchen</strong> (land), <strong>buy ovens</strong> (capital) and launch the business — hoping customers buy and the business makes a profit. <em>That is enterprise.</em>'
      },
      economistQuote: {
        portraitKey: 'economistSchumpeter',
        label: 'Economist insight · Schumpeter on the entrepreneur',
        quote: 'The function of entrepreneurs is to reform or revolutionize the pattern of production… This process of Creative Destruction is the essential fact about capitalism.',
        attribution: 'Joseph Schumpeter, Capitalism, Socialism and Democracy (1942)'
      },
      examEdge: {
        title: 'Evaluating enterprise',
        text: 'Enterprise can be <strong>encouraged or suppressed</strong> by the tax and regulatory environment. Lower business taxes, fewer bureaucratic barriers and strong property rights promote enterprise. High taxes, red tape and policy uncertainty discourage it. <em>"Without enterprise, resources stay idle"</em> is a powerful evaluation line.'
      }
    },

    /* ----- CARD 6 — Factor Rewards Summary -----
       2×2 grid: each tile shows Factor → Reward + Why */
    {
      id: 'factor-rewards',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Factor Rewards Summary',
      lede: 'Each factor of production earns a different reward because each contributes something different to the production process. Lock these four pairings in.',
      causesLabel: 'Match each factor to its reward',
      causesEmoji: '🎁',
      causes: [
        {
          tone: 'green',
          icon: '🏞️',
          head: 'Land → Rent',
          body: '<strong>Definition:</strong> payment for the use of natural resources.<br><br><strong>Why this reward?</strong> Land is in fixed supply. Whoever owns it can charge others to use it for production, earning rent.'
        },
        {
          tone: 'purple',
          icon: '👥',
          head: 'Labour → Wages',
          body: '<strong>Definition:</strong> payment for the physical and mental effort of people.<br><br><strong>Why this reward?</strong> Workers give up their time and energy. Wages compensate them for this contribution to production.'
        },
        {
          tone: 'amber',
          icon: '🏭',
          head: 'Capital → Interest',
          body: '<strong>Definition:</strong> payment for the use of man-made productive resources.<br><br><strong>Why this reward?</strong> Capital wears out or could be used elsewhere. Interest rewards owners for use and the opportunity cost.'
        },
        {
          tone: 'rose',
          icon: '🚀',
          head: 'Enterprise → Profit',
          body: '<strong>Definition:</strong> the residual return after all other costs have been paid.<br><br><strong>Why this reward?</strong> Entrepreneurs take risks and make decisions. Profit is what is <em>left over</em> — it is not guaranteed.'
        }
      ],
      causes2Label: 'Memory strip',
      causes2Emoji: '🧠',
      causes2: [
        { tone: 'green',  icon: '🏞️', head: 'Land → Rent',         body: 'Natural resources earn rent because supply is fixed.' },
        { tone: 'purple', icon: '👥', head: 'Labour → Wages',      body: 'Human effort earns wages — payment for time and skill.' },
        { tone: 'amber',  icon: '🏭', head: 'Capital → Interest',  body: 'Productive assets earn interest — reward for use and waiting.' },
        { tone: 'rose',   icon: '🚀', head: 'Enterprise → Profit', body: 'Risk-taking earns profit — the residual, not guaranteed.' }
      ],
      examEdge: {
        title: 'Exam tip: never mix these up',
        text: 'Don\'t confuse capital with money, or profit with wages. The classic A-level error is "capital earns wages" or "labour earns profit." Always link the factor to the reward it earns: <strong>Land→Rent, Labour→Wages, Capital→Interest, Enterprise→Profit</strong>. Profit is special — it\'s a residual, not a fixed payment.'
      }
    },

    /* ----- CARD 7 — Factor Mobility ----- */
    {
      id: 'factor-mobility',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Factor Mobility',
      lede: 'Mobility is the <strong>ability of a factor — especially labour — to move</strong> between places and jobs. Low mobility is a major cause of structural unemployment and regional inequality.',
      pairFirst: true,
      pairLabel: 'Two dimensions of mobility',
      pairEmoji: '🚉',
      left: {
        tone: 'green',
        icon: '📍',
        iconStyle: 'circle',
        label: 'Geographic mobility',
        text: '<strong>Moving between locations.</strong><br><br>Workers move from one area to another to take up jobs. Helps match labour to where jobs exist, reducing regional unemployment mismatches.<br><br>In practice, housing costs, family ties and information gaps keep geographic mobility lower than economists would like.'
      },
      right: {
        tone: 'purple',
        icon: '💼',
        iconStyle: 'circle',
        label: 'Occupational mobility',
        text: '<strong>Moving between jobs or industries.</strong><br><br>Workers change occupation or sector to find better opportunities. Supports structural change as the economy evolves (manufacturing → services → digital).<br><br>Higher occupational mobility means a more adaptable labour force — but requires retraining and transferable skills.'
      },
      causesLabel: 'Why mobility is often low',
      causesEmoji: '🚧',
      causes: [
        { tone: 'amber',  icon: '💰', head: 'Retraining costs',    body: 'Learning new skills takes time and money. Mid-career workers may struggle to switch sectors without financial support.' },
        { tone: 'rose',   icon: '🏠', head: 'Housing costs',       body: 'Expensive or inflexible housing markets restrict moves. UK regional house-price gaps make moving to London prohibitive for many.' },
        { tone: 'purple', icon: '👨‍👩‍👧', head: 'Family ties',         body: 'Partners\' jobs, children\'s schools and elderly care duties anchor people to a location. Two-earner households are especially constrained.' },
        { tone: 'blue',   icon: 'ℹ️', head: 'Lack of information', body: 'Workers may not know about opportunities elsewhere. Job vacancies, training schemes and relocation support are often poorly advertised.' }
      ],
      flowTitle: 'Why low mobility matters',
      flowEmoji: '⚠️',
      flow: [
        { tone: 'purple', icon: '🚷', title: 'Low mobility',              sub: 'Workers can\'t easily move or retrain.' },
        { tone: 'amber',  icon: '🏚️', title: 'Labour market immobility', sub: 'Skills and jobs don\'t match up.' },
        { tone: 'rose',   icon: '📉', title: 'Structural unemployment',  sub: 'Persistent joblessness in some areas and industries.' }
      ],
      causes2Label: 'Policy levers to raise mobility',
      causes2Emoji: '🛠️',
      causes2: [
        { tone: 'blue',   icon: '🎓', head: 'Apprenticeships',     body: 'Build skills while earning — combining work and training.' },
        { tone: 'green',  icon: '🔄', head: 'Retraining schemes',  body: 'Help mid-career workers switch sectors and update skills.' },
        { tone: 'amber',  icon: 'ℹ️', head: 'Careers information', body: 'Improve guidance and awareness of opportunities and pathways.' },
        { tone: 'rose',   icon: '🏠', head: 'Housing reform',      body: 'More affordable homes and rental options support relocation.' },
        { tone: 'purple', icon: '🚆', head: 'Transport links',     body: 'Better connections open up more jobs within commuting distance.' }
      ],
      examEdge: {
        title: 'Why this matters in exam answers',
        text: 'Both geographic and occupational mobility matter for how quickly the economy can <strong>adjust to change, reduce unemployment and raise living standards</strong>. When asked about structural unemployment, supply-side policy, or regional inequality — mention factor mobility. It earns analytical depth marks.'
      }
    },

    /* ----- CARD 8 — Evaluating Factors of Production -----
       4 evaluation tiles + EVALUATE framework flow */
    {
      id: 'evaluating-factors',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Evaluating Factors of Production',
      lede: 'The best evaluation goes <strong>beyond definitions</strong>. It compares how important, high quality and flexible each factor is in helping an economy produce more and improve living standards.',
      causesLabel: 'Four ways to evaluate factor importance',
      causesEmoji: '⚖️',
      causes: [
        {
          tone: 'green',
          icon: '🎯',
          head: 'Quantity vs quality',
          body: '<strong>More is not always better.</strong> Human capital (skills, health, education) and technology (efficient, modern capital) often matter more than sheer quantity. Quality raises productivity — that\'s what distinguishes rich from poor economies.'
        },
        {
          tone: 'purple',
          icon: '🏆',
          head: 'Incentive effects',
          body: '<strong>Rewards shape supply.</strong> High wages attract labour. High profits attract enterprise. High interest rates encourage saving. The right incentive structure encourages effort, innovation and investment — the wrong one suppresses all three.'
        },
        {
          tone: 'amber',
          icon: '🏛️',
          head: 'Policy influence',
          body: '<strong>Government can raise factor supply and mobility.</strong> Education, training, infrastructure, competition policy, clear regulation, immigration rules — all shape how much each factor contributes. Supply-side policy is largely about factors.'
        },
        {
          tone: 'blue',
          icon: '⏳',
          head: 'Long run vs short run',
          body: '<strong>Time changes everything.</strong> In the long run, fixed and variable factors become less distinct. Capital can be expanded or upgraded, skills developed, resources discovered or substituted. Short-run constraints often ease over time.'
        }
      ],
      flowTitle: 'Exam technique: EVALUATE',
      flowEmoji: '📝',
      flow: [
        { tone: 'blue',   icon: '📖', title: 'Define',   sub: 'State the concept clearly.' },
        { tone: 'green',  icon: '🌍', title: 'Apply',    sub: 'Use the idea in a relevant context.' },
        { tone: 'amber',  icon: '⚖️', title: 'Evaluate', sub: 'Weigh up different factors and views.' },
        { tone: 'purple', icon: '⚖️', title: 'Judge',    sub: 'Reach a supported overall conclusion.' }
      ],
      conclusion: { title: 'Big takeaway', text: 'Rich economies are usually distinguished by <strong>better-quality labour, stronger enterprise and more productive capital</strong> — not just by having more resources. This is why supply-side policy focuses on raising human capital, encouraging investment, and improving institutional incentives, rather than simply trying to grow the workforce.' },
      examEdge: {
        title: 'A balanced evaluation always wins',
        text: 'When you evaluate factors, don\'t just rank them — explain that the <em>right mix</em>, the <em>quality</em>, and the <em>institutional environment</em> matter together. Avoid blanket statements like "labour is most important." Instead: "in <em>this</em> economy, weak human capital is the binding constraint, so further investment in education matters more than adding workers."'
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
