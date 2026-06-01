/* ============================================================
   ECONOS – content data for the-economic-problem (Edexcel 1.1.3)
   11 cards: scarcity, opportunity cost and the three economic
   questions (1.1.3 core), followed by the four factors of
   production and their rewards/mobility (folded in from the former
   standalone factors-of-production topic).
   Uses Theme 1 rich templates (framing, paired, ad-interactive,
   mechanisms). NOTE: a "renewable vs non-renewable resources" card
   (spec 1.1.3b) is still to be authored and slotted in.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'the-economic-problem',
  topicNum: '1.1.3',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'The Economic Problem',
  estTime: '12-15 minutes',
  goal: 'Lock in scarcity, opportunity cost and the three economic questions, then the four factors of production, their rewards and mobility.',

  intro: {
    heroKey: 'heroScarcity',
    summary: 'Economics begins with one unavoidable fact: wants are unlimited but resources are finite. That scarcity forces every choice to carry an opportunity cost, and forces every society to answer three questions – what, how, and for whom to produce. The resources being allocated are the four factors of production: land, labour, capital and enterprise.',
    doInThis: 'Work through scarcity, opportunity cost and the three economic questions, then the four factors of production – their rewards, the quantity/quality distinction, factor mobility, and the evaluation points that lift exam answers.',
    outcomes: [
      'Define scarcity and explain why it makes choice and opportunity cost inevitable',
      'Apply opportunity cost to consumers, firms and government',
      'Identify the three fundamental economic questions',
      'Identify the four factors of production, their rewards and their mobility'
    ],
    tip: 'Opportunity cost is not money spent – it is the next best alternative forgone. Always ask: what had to be given up to make this choice?',
    stages: [
      { num: 1, name: 'Learn it', sub: '11 concept cards', state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Coming soon', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Exam paper',  state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 – Scarcity: the basic economic problem ----- */
    {
      id: 'econ-problem-scarcity',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 11',
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

    /* ----- CARD 2 – Opportunity cost ----- */
    {
      id: 'econ-problem-opp-cost',
      template: 'framing',
      stepLabel: 'Learn: Step 2 of 11',
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
      branchesLayout: 'quotes',
      keyTerms: [
        { term: 'Opportunity cost', def: 'The value of the next best alternative forgone as a result of making a choice.' },
        { term: 'Explicit cost',    def: 'Actual monetary payment for a resource (e.g. wage paid to a worker).' },
        { term: 'Implicit cost',    def: 'Opportunity cost of a resource you own (e.g. foregone salary of an entrepreneur working in their own firm).' }
      ],
      examEdge: 'In exam questions, always state what the opportunity cost IS – not just that "something is given up." For government spending questions, name the alternative use of funds explicitly. Vague answers lose marks.',
      keyTakeaway: 'Opportunity cost is not all the alternatives you give up – it is the value of the next best one.'
    },

    /* ----- CARD 3 – The three fundamental economic questions ----- */
    {
      id: 'econ-problem-three-questions',
      template: 'framing',
      stepLabel: 'Learn: Step 3 of 11',
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
      branchesLayout: 'triptych',
      body: 'Scarcity forces every society to answer these three questions. They are deceptively simple – but the answers determine production, employment, and the distribution of wealth. Different economic systems answer them very differently, which is what a later topic explores.',
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

    /* ----- CARD 4 – The Four Factors of Production -----
       2×2 factor grid (via ad-interactive causes) + factor flow */
    {
      id: 'four-factors',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 11',
      title: 'The Four Factors of Production',
      lede: 'Every economy combines four key inputs to produce goods and services. Each has a distinct role – and each earns a distinct reward.',
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
          body: 'Man-made resources used to produce other goods and services – <strong>not money</strong>.<br><br><strong>Examples:</strong> machinery, tools, buildings, technology<br><br><span style="display:inline-block;margin-top:4px;padding:5px 12px;border-radius:999px;background:#FEF3C7;color:#92400E;font-size:12px;font-weight:700;">💰 Reward: Interest</span>'
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

    /* ----- CARD 2 – Land -----
       3-column tile row + remember footer */
    {
      id: 'land',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 11',
      title: 'Land',
      lede: 'Land is <strong>everything provided by nature</strong> and used in the production of goods and services. It is not just fields – it includes all natural resources.',
      visualKey: 'landTypesSvg',
      causesLabel: 'Key characteristics &amp; reward',
      causesEmoji: '⭐',
      causes: [
        {
          tone: 'amber',
          icon: '⭐',
          head: 'Key characteristics',
          body: '<strong>Fixed in total supply</strong> globally – you can\'t make more land.<br><br><strong>Usable supply can change</strong> with technology and discovery (fracking, satellites).<br><br><strong>Non-homogeneous</strong> – location matters hugely.'
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
          body: 'It includes <strong>all natural resources</strong> – including non-physical ones. The radio spectrum used by mobile networks is land. So is the geostationary orbit used by satellites.'
        },
        {
          tone: 'green',
          icon: '♻️',
          head: 'Environmental economics',
          body: 'Scarce natural resources lie behind many policy debates – climate change, deforestation, water rights, fisheries, urban planning. Fixed supply also drives housing affordability.'
        }
      ],
      examEdge: {
        title: 'Exam edge',
        text: 'When asked about land, <strong>specify whether you mean physical land or the broader concept of natural resources</strong>. The fixed-supply property of land is the most-tested feature – it makes rent demand-driven and explains why land values rise so sharply with population growth.'
      }
    },

    /* ----- CARD 3 – Labour ----- */
    {
      id: 'labour',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 11',
      title: 'Labour',
      lede: 'Labour is the <strong>human effort</strong> – both physical and mental – used in the production of goods and services. Its supply depends on both economic incentives and wider social factors.',
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
          body: '<strong>Higher wages</strong> encourage more people to work or work more hours. <strong>Taxes and national insurance</strong> reduce the reward from work. <strong>Benefits and welfare</strong> can affect the incentive to take a job. Labour supply curves slope upward – usually.'
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
        { tone: 'green',  icon: '🎓', title: 'Skills & education',     sub: 'Build human capital – the quality side.' },
        { tone: 'blue',   icon: '👥', title: 'Available labour force', sub: 'The pool of people who could work.' },
        { tone: 'purple', icon: '🎯', title: 'Participation & incentives', sub: 'Decisions about whether and how much to work.' }
      ],
      conclusion: { title: 'Why labour supply matters', text: 'Labour supply is shaped by <strong>both economic incentives and wider social policy</strong>. Understanding these influences helps explain changes in employment, participation rates and wage levels – and why two countries with similar populations can have very different labour markets.' },
      examEdge: {
        title: 'Quantity vs quality is the key distinction',
        text: 'Top-band answers always distinguish the <em>quantity</em> of labour from its <em>quality</em>. Two economies can have the same workforce size but very different output if their <strong>human capital</strong> – skills, education, health – differs. This is why education and training feature so heavily in supply-side policy.'
      }
    },

    /* ----- CARD 4 – Capital ----- */
    {
      id: 'capital',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 11',
      title: 'Capital',
      lede: '<strong>Capital</strong> refers to man-made resources used to produce other goods and services – tools, equipment, machinery, buildings and infrastructure. It is built up through investment and can depreciate over time.',
      visualKey: 'capitalTypesSvg',
      tip: { icon: '⚠️', tone: 'amber', text: 'A common exam trap: capital in economics means physical productive resources, <strong>NOT money</strong>. Money used to <em>buy</em> capital is "financial capital" – a different concept.' },
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
        { tone: 'purple', icon: '🚀', title: 'Higher capacity',    sub: 'Greater productive potential – the PPF shifts out.' }
      ],
      causesLabel: 'Capital wears out – and must be replaced',
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
      conclusion: { title: 'Why capital accumulation matters', text: 'Capital accumulation can raise long-run productivity and living standards – but only if <strong>investment is sustained</strong> and capital is <strong>efficiently used</strong>. China invests ~42% of GDP; the UK and US invest ~18%. Decades of high investment can transform an economy.' },
      examEdge: {
        title: 'Capital ≠ money',
        text: 'The single most common exam mistake on this topic. <strong>Capital is physical productive resources</strong>: machines, factories, roads, tools. Money used to buy them is <em>financial</em> capital – a different concept. Always specify which one you mean.'
      }
    },

    /* ----- CARD 5 – Enterprise -----
       4-function grid + factor-combination flow + worked example */
    {
      id: 'enterprise',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 11',
      title: 'Enterprise & Institutions',
      lede: 'Enterprise is the <strong>risk-taking and decision-making function</strong> that organises the other three factors. More broadly, <strong>institutions</strong> – government, legal frameworks, property rights – shape whether enterprise can flourish at all.',
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
        text: 'Enterprise earns <strong>profit</strong> – the <em>residual</em> return after rent, wages and interest have been paid. Profit is <strong>not guaranteed</strong>: a failed venture earns a loss, which the entrepreneur absorbs.'
      },
      right: {
        tone: 'blue',
        icon: '🍳',
        iconStyle: 'circle',
        label: 'Real-world example',
        text: 'A founder spots demand for a meal-kit service. They <strong>hire cooks</strong> (labour), <strong>rent a kitchen</strong> (land), <strong>buy ovens</strong> (capital) and launch the business – hoping customers buy and the business makes a profit. <em>That is enterprise.</em>'
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

    /* ----- CARD 6 – Factor Rewards Summary -----
       2×2 grid: each tile shows Factor → Reward + Why */
    {
      id: 'factor-rewards',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 9 of 11',
      title: 'Factor Rewards Summary',
      lede: 'Each factor of production earns a different reward because each contributes something different to the production process. Lock these four pairings in.',
      causesLabel: 'Match each factor to its reward',
      causesEmoji: '🎁',
      causes: [
        {
          tone: 'green',
          icon: '🏞️',
          head: 'Land → Rent',
          body: '<strong>Definition:</strong> payment for the use of natural resources.<br><br><strong>Why this reward?</strong> Land is in fixed supply. Whoever owns it can charge others to use it for production, earning rent.<br><br><span style="display:block;margin-top:8px;padding:8px 12px;border-radius:8px;background:rgba(6,95,70,0.08);font-size:13px;font-style:italic;color:#065F46;">🧠 Remember: natural resources earn rent because supply is fixed.</span>'
        },
        {
          tone: 'purple',
          icon: '👥',
          head: 'Labour → Wages',
          body: '<strong>Definition:</strong> payment for the physical and mental effort of people.<br><br><strong>Why this reward?</strong> Workers give up their time and energy. Wages compensate them for this contribution to production.<br><br><span style="display:block;margin-top:8px;padding:8px 12px;border-radius:8px;background:rgba(91,33,182,0.08);font-size:13px;font-style:italic;color:#5B21B6;">🧠 Remember: human effort earns wages – payment for time and skill.</span>'
        },
        {
          tone: 'amber',
          icon: '🏭',
          head: 'Capital → Interest',
          body: '<strong>Definition:</strong> payment for the use of man-made productive resources.<br><br><strong>Why this reward?</strong> Capital wears out or could be used elsewhere. Interest rewards owners for use and the opportunity cost.<br><br><span style="display:block;margin-top:8px;padding:8px 12px;border-radius:8px;background:rgba(146,64,14,0.08);font-size:13px;font-style:italic;color:#92400E;">🧠 Remember: productive assets earn interest – reward for use and waiting.</span>'
        },
        {
          tone: 'rose',
          icon: '🚀',
          head: 'Enterprise → Profit',
          body: '<strong>Definition:</strong> the residual return after all other costs have been paid.<br><br><strong>Why this reward?</strong> Entrepreneurs take risks and make decisions. Profit is what is <em>left over</em> – it is not guaranteed.<br><br><span style="display:block;margin-top:8px;padding:8px 12px;border-radius:8px;background:rgba(185,28,28,0.08);font-size:13px;font-style:italic;color:#B91C1C;">🧠 Remember: risk-taking earns profit – the residual, not guaranteed.</span>'
        }
      ],
      examEdge: {
        title: 'Exam tip: never mix these up',
        text: 'Don\'t confuse capital with money, or profit with wages. The classic A-level error is "capital earns wages" or "labour earns profit." Always link the factor to the reward it earns: <strong>Land→Rent, Labour→Wages, Capital→Interest, Enterprise→Profit</strong>. Profit is special – it\'s a residual, not a fixed payment.'
      }
    },

    /* ----- CARD 7 – Factor Mobility ----- */
    {
      id: 'factor-mobility',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 10 of 11',
      title: 'Factor Mobility',
      lede: 'Mobility is the <strong>ability of a factor – especially labour – to move</strong> between places and jobs. Low mobility is a major cause of structural unemployment and regional inequality.',
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
        text: '<strong>Moving between jobs or industries.</strong><br><br>Workers change occupation or sector to find better opportunities. Supports structural change as the economy evolves (manufacturing → services → digital).<br><br>Higher occupational mobility means a more adaptable labour force – but requires retraining and transferable skills.'
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
        { tone: 'blue',   icon: '🎓', head: 'Apprentices',         body: 'Build skills while earning – combining work and training.' },
        { tone: 'green',  icon: '🔄', head: 'Retraining schemes',  body: 'Help mid-career workers switch sectors and update skills.' },
        { tone: 'amber',  icon: 'ℹ️', head: 'Careers information', body: 'Improve guidance and awareness of opportunities and pathways.' },
        { tone: 'rose',   icon: '🏠', head: 'Housing reform',      body: 'More affordable homes and rental options support relocation.' },
        { tone: 'purple', icon: '🚆', head: 'Transport links',     body: 'Better connections open up more jobs within commuting distance.' },
        { tone: 'slate',  icon: '👶', head: 'Childcare provision', body: 'Affordable childcare frees parents to enter or re-enter the workforce.' }
      ],
      examEdge: {
        title: 'Why this matters in exam answers',
        text: 'Both geographic and occupational mobility matter for how quickly the economy can <strong>adjust to change, reduce unemployment and raise living standards</strong>. When asked about structural unemployment, supply-side policy, or regional inequality – mention factor mobility. It earns analytical depth marks.'
      }
    },

    /* ----- CARD 8 – Evaluating Factors of Production -----
       4 evaluation tiles + EVALUATE framework flow */
    {
      id: 'evaluating-factors',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 11 of 11',
      title: 'Evaluating Factors of Production',
      lede: 'The best evaluation goes <strong>beyond definitions</strong>. It compares how important, high quality and flexible each factor is in helping an economy produce more and improve living standards.',
      causesLabel: 'Four ways to evaluate factor importance',
      causesEmoji: '⚖️',
      causes: [
        {
          tone: 'green',
          icon: '🎯',
          head: 'Quantity vs quality',
          body: '<strong>More is not always better.</strong> Human capital (skills, health, education) and technology (efficient, modern capital) often matter more than sheer quantity. Quality raises productivity – that\'s what distinguishes rich from poor economies.'
        },
        {
          tone: 'purple',
          icon: '🏆',
          head: 'Incentive effects',
          body: '<strong>Rewards shape supply.</strong> High wages attract labour. High profits attract enterprise. High interest rates encourage saving. The right incentive structure encourages effort, innovation and investment – the wrong one suppresses all three.'
        },
        {
          tone: 'amber',
          icon: '🏛️',
          head: 'Policy influence',
          body: '<strong>Government can raise factor supply and mobility.</strong> Education, training, infrastructure, competition policy, clear regulation, immigration rules – all shape how much each factor contributes. Supply-side policy is largely about factors.'
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
      conclusion: { title: 'Big takeaway', text: 'Rich economies are usually distinguished by <strong>better-quality labour, stronger enterprise and more productive capital</strong> – not just by having more resources. This is why supply-side policy focuses on raising human capital, encouraging investment, and improving institutional incentives, rather than simply trying to grow the workforce.' },
      examEdge: {
        title: 'A balanced evaluation always wins',
        text: 'When you evaluate factors, don\'t just rank them – explain that the <em>right mix</em>, the <em>quality</em>, and the <em>institutional environment</em> matter together. Avoid blanket statements like "labour is most important." Instead: "in <em>this</em> economy, weak human capital is the binding constraint, so further investment in education matters more than adding workers."'
      },
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
    title:    'The Economic Problem',
    subtitle: 'Theme 1 &middot; Topic 1.1.3 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('intro'),
    backLabel: 'Back to Learn It',
    lede: '13 questions · ~12 minutes · covers scarcity, opportunity cost, the three economic questions, and the four factors of production',
    shortNames: [
      'Scarcity MCQ', 'Opportunity cost', 'Three questions sort',
      'Categorise factors', 'Capital MCQ', 'Match rewards', 'Sequence retraining',
      'Cause & effect: policy', 'Odd one out', 'UK labour data', 'Evaluation multi-select',
      'Mobility para-fill', 'Participation rate'
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
        exp: '<strong>Scarcity</strong> is the fundamental economic problem: human wants are unlimited, but the resources to satisfy them (land, labour, capital, enterprise) are finite. This applies to all goods – not just rare commodities. Even wealthy societies face scarcity of time, skilled labour, and environmental capacity. Technology can shift the PPF outward but cannot eliminate scarcity, because wants expand with new possibilities.'
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
        exp: 'Opportunity cost = £2,000,000,000 ÷ £8,000 = <strong>250,000 hospital operations</strong>. Government decisions always involve trade-offs – choosing infrastructure means not spending on healthcare. The opportunity cost framework forces policymakers to think explicitly about what is sacrificed, not just what is gained.'
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
        exp: 'The <strong>three fundamental economic questions</strong> arise from scarcity: <strong>What</strong> to produce; <strong>How</strong> to produce it (labour- vs capital-intensive); <strong>For whom</strong> to produce (how to distribute output). Different economic systems answer these differently – market economies use the price mechanism; command economies use central planning.'
      },

      /* 4 – Categorise: sort items into the four factors */
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

