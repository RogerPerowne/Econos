/* ============================================================
   ECONOS — content data for factors_of_production
   8 cards · Edexcel Theme 1.1.3
   Uses Theme 1 rich templates: framing, paired, ad-interactive,
   mechanisms — for maximum visual richness.
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

    /* ----- CARD 1 — The Four Factors of Production ----- */
    {
      id: 'four-factors',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'The Four Factors of Production',
      lede: 'Every economy combines four key inputs to produce goods and services. Each has a role and earns a reward.',
      branches: [
        {
          tone: 'green',
          label: '🏞️ Land',
          sub: '<strong>Natural resources</strong> used in production: agricultural land, minerals, oil, water, forests, the radio spectrum. Reward: <strong>Rent</strong>.'
        },
        {
          tone: 'purple',
          label: '👥 Labour',
          sub: '<strong>Human effort</strong> — physical and mental — used in production: teachers, nurses, builders, software developers. Reward: <strong>Wages</strong>.'
        },
        {
          tone: 'amber',
          label: '🏭 Capital',
          sub: '<strong>Man-made resources</strong> used to produce other goods and services (not money): machinery, tools, buildings, technology. Reward: <strong>Interest</strong>.'
        },
        {
          tone: 'rose',
          label: '🚀 Enterprise',
          sub: 'The <strong>risk-taking and organising function</strong> that combines the other factors: entrepreneurs, managers, business leaders. Reward: <strong>Profit</strong> (or loss).'
        }
      ],
      examEdge: {
        title: 'Why this matters',
        text: 'The factors of production have different characteristics and earn different rewards. Later cards explore the <strong>quantity vs quality</strong> distinction, <strong>factor mobility</strong>, and how to evaluate the relative importance of each. Master this framework and you can answer most resource-allocation questions.'
      }
    },

    /* ----- CARD 2 — Land ----- */
    {
      id: 'land',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Land',
      lede: 'Land is <strong>everything provided by nature</strong> and used in the production of goods and services. It is not just fields — it includes all natural resources.',
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'Examples of land',
          text: 'Agricultural land · oil and gas · minerals (iron, copper, lithium) · water · forests · fisheries · the radio spectrum. Anything provided by nature that can be used in production.'
        },
        {
          num: '2',
          tone: 'amber',
          title: 'Key characteristics',
          text: '<strong>Fixed in total supply</strong> globally (you can\'t make more land). <strong>Usable supply can change</strong> with technology and discovery (fracking, satellite imaging). <strong>Non-homogeneous</strong> — location matters hugely.'
        },
        {
          num: '3',
          tone: 'purple',
          title: 'Factor reward: Rent',
          text: 'Land earns <strong>rent</strong> — the income earned from allowing others to use natural resources or locations. The fixed supply of land means rent is determined almost entirely by demand.'
        }
      ],
      examEdge: {
        title: 'Why this matters',
        text: 'Scarce natural resources lie behind many environmental economics debates — from climate change and deforestation to water rights, fisheries and land use. The fixed-supply nature of land also drives much of the conversation about housing affordability and urban planning.'
      },
      connection: {
        title: 'Remember',
        text: 'Land is not just fields — it includes <strong>all natural resources</strong>. The radio spectrum (used by mobile networks) is land. So is the geostationary orbit used by satellites.'
      }
    },

    /* ----- CARD 3 — Labour ----- */
    {
      id: 'labour',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Labour',
      lede: 'Labour is the <strong>human effort</strong> — both physical and mental — used in the production of goods and services. Its supply depends on both economic incentives and wider social factors.',
      tip: { icon: '💡', tone: 'blue', text: 'Tap the buttons to compare the quantity of labour (how many people are available) with the quality of labour (how productive each worker is). Both matter — and quality often matters more in modern economies.' },
      steps: [
        {
          key: 'quantity',
          label: 'Quantity of labour',
          text: '<strong>How many people are available and willing to work.</strong> Determined by: <em>population size</em> (births, deaths, immigration); <em>participation rate</em> (the share of working-age people in or seeking work); <em>hours worked</em> (part-time vs full-time, overtime); <em>retirement age</em> (when people leave the workforce).'
        },
        {
          key: 'quality',
          label: 'Quality of labour',
          text: '<strong>How productive each worker is.</strong> Determined by: <em>skills</em> (knowledge and ability); <em>education</em> (formal learning); <em>training</em> (on-the-job and courses); <em>experience</em> (learning by doing); <em>health</em> (healthier workers are more productive). This is what economists call <strong>human capital</strong>.'
        }
      ],
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
        { tone: 'green',  icon: '🎓', title: 'Skills & education',     sub: 'Build human capital — the quality side of labour.' },
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
      tip: { icon: '⚠️', tone: 'amber', text: 'A common exam trap: capital in economics means physical productive resources, <strong>NOT money</strong>. Money used to <em>buy</em> capital is "financial capital" — a different concept.' },
      steps: [
        {
          key: 'real',
          label: 'Real (physical) capital',
          text: '<strong>Physical, man-made resources used in production.</strong> Examples: a factory, a machine, a road, broadband infrastructure, a computer. This is what economists mean by "capital" in the four-factor framework. It contributes directly to productive capacity.'
        },
        {
          key: 'financial',
          label: 'Financial capital',
          text: '<strong>Money and financial assets used to buy real capital.</strong> Examples: savings, loans, shares, bonds. Financial capital is a <em>claim</em> on resources, not a productive resource itself. It funds investment in real capital.'
        }
      ],
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

    /* ----- CARD 5 — Enterprise ----- */
    {
      id: 'enterprise',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Enterprise',
      lede: 'Enterprise is the <strong>risk-taking and decision-making function</strong> that organises the other three factors of production — land, labour and capital — to produce goods and services.',
      mechanisms: [
        {
          num: '1',
          tone: 'blue',
          title: 'Identifies gaps in markets',
          text: 'Entrepreneurs spot <strong>unmet needs</strong> and opportunities others overlook. Without this function, profitable trades and useful products simply don\'t happen.'
        },
        {
          num: '2',
          tone: 'purple',
          title: 'Bears uncertainty and risk',
          text: 'Entrepreneurs invest time and money <strong>with no guarantee of success</strong>. They bear the loss if the venture fails. This is what distinguishes enterprise from labour.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Innovates',
          text: 'Enterprise creates <strong>new ideas, products or better ways of doing things</strong>. Schumpeter\'s "creative destruction" — old firms displaced by innovative new ones — is the engine of long-run growth.'
        },
        {
          num: '4',
          tone: 'green',
          title: 'Coordinates resources and decisions',
          text: 'Enterprise <strong>brings land, labour and capital together</strong> and makes the key decisions: what to produce, how to produce, how to price, who to hire. Without this organising function, the other factors sit idle.'
        }
      ],
      examEdge: {
        title: 'Evaluating enterprise',
        text: 'Enterprise can be <strong>encouraged or suppressed</strong> by the tax and regulatory environment. Lower business taxes, fewer bureaucratic barriers and strong property rights promote enterprise. High taxes, red tape and policy uncertainty discourage it. <em>"Without enterprise, resources stay idle"</em> is a powerful evaluation line.'
      },
      connection: {
        title: 'Real-world example',
        text: 'A founder spots demand for a meal-kit service. They <strong>hire cooks (labour)</strong>, <strong>rent a kitchen (land)</strong>, <strong>buy ovens (capital)</strong>, and launch the business — hoping customers buy and the business makes a profit. <em>That</em> is enterprise: the function that brings the other three factors together and bears the risk.'
      }
    },

    /* ----- CARD 6 — Factor Rewards Summary ----- */
    {
      id: 'factor-rewards',
      template: 'framing',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Factor Rewards Summary',
      lede: 'Each factor of production earns a different reward because each contributes something different to the production process. Lock these four pairings in.',
      branches: [
        {
          tone: 'green',
          label: '🏞️ Land → Rent',
          sub: 'Payment for the use of <strong>natural resources</strong>. Land is a fixed supply. Whoever owns it can charge others to use it for production, earning rent.'
        },
        {
          tone: 'purple',
          label: '👥 Labour → Wages',
          sub: 'Payment for the <strong>physical and mental effort</strong> of people. Workers give up their time and energy. Wages compensate them for this contribution to production.'
        },
        {
          tone: 'amber',
          label: '🏭 Capital → Interest',
          sub: 'Payment for the use of <strong>man-made productive resources</strong>. Capital goods wear out or could be used elsewhere. Interest rewards owners for their use and for giving up other options.'
        },
        {
          tone: 'rose',
          label: '🚀 Enterprise → Profit',
          sub: 'The <strong>residual return</strong> after all other costs have been paid. Entrepreneurs take risks and make decisions. Profit is what is <em>left over</em> after rent, wages and interest — it is not guaranteed.'
        }
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
      tip: { icon: '🚉', tone: 'blue', text: 'Mobility has two dimensions — moving between locations (geographic) and moving between industries (occupational). Both are often low in practice, which is why governments invest heavily in policies to improve them.' },
      steps: [
        {
          key: 'geographic',
          label: 'Geographic mobility',
          text: '<strong>Moving between locations.</strong> Workers move from one area to another to take up jobs. Higher geographic mobility helps match labour to where jobs exist, reducing regional unemployment mismatches. In practice, housing costs, family ties and information gaps keep geographic mobility lower than economists would like.'
        },
        {
          key: 'occupational',
          label: 'Occupational mobility',
          text: '<strong>Moving between jobs or industries.</strong> Workers change occupation or sector to find better opportunities. Supports structural change as the economy evolves (manufacturing → services → digital). Higher occupational mobility means a more adaptable labour force — but requires retraining and transferable skills.'
        }
      ],
      causesLabel: 'Why mobility is often low',
      causesEmoji: '🚧',
      causes: [
        { tone: 'amber',  icon: '💰', head: 'Retraining costs',  body: 'Learning new skills takes time and money. Mid-career workers may struggle to switch sectors without financial support.' },
        { tone: 'rose',   icon: '🏠', head: 'Housing costs',     body: 'Expensive or inflexible housing markets restrict moves. UK regional house-price gaps make moving to London prohibitive for many.' },
        { tone: 'purple', icon: '👨‍👩‍👧', head: 'Family ties',       body: 'Partners\' jobs, children\'s schools and elderly care duties anchor people to a location. Two-earner households are especially constrained.' },
        { tone: 'blue',   icon: 'ℹ️', head: 'Lack of information', body: 'Workers may not know about opportunities elsewhere. Job vacancies, training schemes and relocation support are often poorly advertised.' }
      ],
      flowTitle: 'Why low mobility matters',
      flowEmoji: '⚠️',
      flow: [
        { tone: 'purple', icon: '🚷', title: 'Low mobility',          sub: 'Workers can\'t easily move or retrain.' },
        { tone: 'amber',  icon: '🏚️', title: 'Labour market immobility', sub: 'Skills and jobs don\'t match up.' },
        { tone: 'rose',   icon: '📉', title: 'Structural unemployment', sub: 'Persistent joblessness in some areas and industries.' }
      ],
      causes2Label: 'Policy levers to raise mobility',
      causes2Emoji: '🛠️',
      causes2: [
        { tone: 'blue',  icon: '🎓', head: 'Apprenticeships',   body: 'Build skills while earning — combining work and training.' },
        { tone: 'green', icon: '🔄', head: 'Retraining schemes', body: 'Help mid-career workers switch sectors and update skills.' },
        { tone: 'amber', icon: 'ℹ️', head: 'Careers information', body: 'Improve guidance and awareness of opportunities and pathways.' },
        { tone: 'rose',  icon: '🏠', head: 'Housing reform',     body: 'More affordable homes and rental options support relocation.' },
        { tone: 'purple',icon: '🚆', head: 'Transport links',    body: 'Better connections open up more jobs within commuting distance.' }
      ],
      examEdge: {
        title: 'Why this matters in exam answers',
        text: 'Both geographic and occupational mobility matter for how quickly the economy can <strong>adjust to change, reduce unemployment and raise living standards</strong>. When asked about structural unemployment, supply-side policy, or regional inequality — mention factor mobility. It earns analytical depth marks.'
      }
    },

    /* ----- CARD 8 — Evaluating Factors of Production ----- */
    {
      id: 'evaluating-factors',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Evaluating Factors of Production',
      lede: 'The best evaluation goes <strong>beyond definitions</strong>. It compares how important, high quality and flexible each factor is in helping an economy produce more and improve living standards.',
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'Quantity vs quality',
          text: '<strong>More is not always better.</strong> Human capital (skills, health, education) and technology (efficient, modern capital) often matter more than sheer quantity. Quality raises productivity — that\'s what distinguishes rich from poor economies.'
        },
        {
          num: '2',
          tone: 'purple',
          title: 'Incentive effects',
          text: '<strong>Rewards shape supply.</strong> High wages attract labour. High profits attract enterprise. High interest rates encourage saving. The right incentive structure encourages effort, innovation and investment — the wrong one suppresses all three.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Policy influence',
          text: '<strong>Government can raise factor supply and mobility.</strong> Education, training, infrastructure, competition policy, clear regulation, immigration rules — all shape how much each factor contributes. Supply-side policy is largely about factors.'
        },
        {
          num: '4',
          tone: 'blue',
          title: 'Long run vs short run',
          text: '<strong>Time changes everything.</strong> In the long run, fixed and variable factors become less distinct. Capital can be expanded or upgraded, skills developed, resources discovered or substituted. Short-run constraints often ease over time.'
        }
      ],
      examEdge: {
        title: 'Big takeaway',
        text: 'Rich economies are usually distinguished by <strong>better-quality labour, stronger enterprise and more productive capital</strong> — not just by having more resources. This is why supply-side policy focuses on raising human capital, encouraging investment, and improving institutional incentives, rather than simply trying to grow the workforce.'
      },
      connection: {
        title: 'Exam technique: EVALUATE',
        text: '<strong>Define</strong> — state the concept clearly. <strong>Apply</strong> — use the idea in a relevant context. <strong>Evaluate</strong> — weigh up different factors and views. <strong>Judge</strong> — reach a supported overall conclusion. This four-step pattern works for any "evaluate" question on factors, growth, or policy.'
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
