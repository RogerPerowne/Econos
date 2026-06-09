/* ============================================================
   ECONOS – Development Factors: Domestic Capacity (Edexcel A 4.3.2)
   7 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   Building productive capacity at home: the capacity engine, the
   Harrod-Domar savings gap, credit and banking, infrastructure,
   demography, human capital, and institutions.

   New HTML visuals:
     - capacityEngineHub  (Card 1 — six foundations around a capacity engine)
     - savingsGapLoop     (Card 2 — the Harrod-Domar vicious circle)
     - demographyPyramids (Card 5 — burden vs dividend population pyramids)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'development-factors-domestic-capacity',
  topicNum: '4.3.2',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Development Factors: Domestic Capacity',
  estTime: '22 min',
  goal: 'Explain how a country builds productive capacity at home — through savings, finance, infrastructure, demography, human capital and institutions — and evaluate which foundation matters most',

  intro: {
    heroKey: 'heroGlobe',
    summary: 'While external barriers come from a country\'s place in the world economy, domestic capacity is about what a country builds at home. Development depends on turning people, savings and institutions into productive capacity. This deck works through the foundations. The Harrod-Domar model shows how low income can trap an economy in low saving, low investment and low growth — and how breaking that loop raises capital and productivity. Finance and banking matter because they turn savings into productive investment for firms and farmers. Infrastructure lowers costs and connects markets across the whole economy. Demography can be a burden or a dividend depending on jobs, skills and productivity. Human capital — education and skills — raises productivity and helps an economy absorb technology. And property rights, governance and political stability decide whether people invest, innovate and stay. The thread throughout: development is faster when a country strengthens the foundations that raise productivity.',
    doInThis: 'Map the foundations of productive capacity. Explain the Harrod-Domar savings gap and how to break it. Show how finance turns savings into investment. Explain infrastructure as a system constraint. Weigh demography as burden or dividend. Link human capital and institutions to growth and development.',
    outcomes: [
      'Map the foundations of productive capacity',
      'Explain the Harrod-Domar savings gap',
      'Link finance and banking to investment',
      'Explain infrastructure as a constraint',
      'Weigh demography: burden vs dividend',
      'Connect human capital and institutions to growth'
    ],
    tip: 'For each factor, explain how it changes productivity, investment or incentives — then link that to growth and development.',
    stages: [
      { num: 1, name: 'Learn',  sub: '7 cards \xb7 22 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'dfdc-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Domestic capacity — the big picture',
      lede: 'Development depends on whether a country can turn people, savings and institutions into productive capacity.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Long-run development depends on <strong>building productive capacity</strong>, not just waiting for growth to appear.' },

      visualKey: 'capacityEngineHub',
      visualLabel: 'THE CAPACITY ENGINE',
      visualEmoji: '\u{1F517}',

      causesLabel: 'WHAT THE FOUNDATIONS DO',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green',  icon: '\u{1F4B0}', head: 'Savings & investment', body: 'Provide the capital to expand.' },
        { tone: 'blue',   icon: '\u{1F3E6}', head: 'Finance & banking', body: 'Channel savings to firms.' },
        { tone: 'amber',  icon: '\u{1F6E3}️', head: 'Infrastructure', body: 'Lowers costs, connects markets.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'Demography', body: 'The size and skills of the workforce.' },
        { tone: 'purple', icon: '\u{1F393}', head: 'Education & skills', body: 'Raise productivity and adaptability.' },
        { tone: 'blue',   icon: '⚖️', head: 'Institutions & rights', body: 'Secure rules support investment.' }
      ],

      causes2Label: 'WHEN CAPACITY IS WEAK',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Low investment', body: 'Too little capital is built.' },
        { tone: 'rose', icon: '\u{1F6A7}', head: 'Bottlenecks', body: 'Poor infrastructure and finance slow activity.' },
        { tone: 'rose', icon: '\u{1F61F}', head: 'Weak incentives', body: 'Uncertain rights discourage risk-taking.' },
        { tone: 'rose', icon: '\u{1F3DA}️', head: 'Fragile growth', body: 'Shocks hit harder and progress reverses.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Domestic capacity turns resources and people into output by raising <strong>productivity across the economy</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Countries develop faster when they strengthen the foundations that raise productivity across the economy.' },
      examEdge: { title: 'EXAM EDGE', text: 'Explain how a factor changes productivity, investment or incentives — then link that to growth and development.' }
    },

    /* ============ CARD 2 – Harrod-Domar and the savings gap ============ */
    {
      id: 'dfdc-savings-gap',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Harrod-Domar and the savings gap',
      lede: 'Low income can trap an economy in low savings, low investment and low growth.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Without enough savings and investment, <strong>capital formation stays weak</strong> and development slows.' },

      visualKey: 'savingsGapLoop',
      visualLabel: 'THE SAVINGS-GAP LOOP',
      visualEmoji: '\u{1F517}',

      flowTitle: 'HOW TO BREAK THE LOOP',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F4B7}', title: 'Raise incomes', sub: 'Lift earnings and output.' },
        { tone: 'green', icon: '\u{1F3E6}', title: 'Mobilise savings', sub: 'Banks and foreign capital.' },
        { tone: 'green', icon: '\u{1F3D7}️', title: 'Attract investment', sub: 'Build the capital stock.' },
        { tone: 'green', icon: '\u{1F4C8}', title: 'Higher productivity', sub: 'And faster growth.' }
      ],

      causesLabel: 'LIMITS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'rose', icon: '\u{1F4B0}', head: 'Saving is not enough', body: 'It must become productive investment.' },
        { tone: 'rose', icon: '\u{1F50D}', head: 'Investment quality', body: 'Poor projects waste scarce capital.' },
        { tone: 'rose', icon: '\u{1F3DB}️', head: 'Institutions matter', body: 'Weak rules deter and misallocate funds.' },
        { tone: 'rose', icon: '\u{1F310}', head: 'Foreign capital risks', body: 'It can leave and add to debt.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The savings gap is one reason poor countries may struggle to grow — low income leaves <strong>too little to invest</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Harrod-Domar says growth depends on saving and investment — breaking the low-income loop means raising both.' },
      examEdge: { title: 'EXAM EDGE', text: 'Use Harrod-Domar to link saving to investment, capital and growth — then weigh its limits.' }
    },

    /* ============ CARD 3 – Credit, banking and investment ============ */
    {
      id: 'dfdc-finance',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Credit, banking and investment',
      lede: 'Financial systems help turn savings into productive investment across the economy.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Development advances when finance reaches firms, farmers and households that can <strong>invest productively</strong>.' },

      flowTitle: 'THE FINANCE CHANNEL',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F465}', title: 'Households', sub: 'Deposit their savings.' },
        { tone: 'blue', icon: '\u{1F3E6}', title: 'Banks & savers', sub: 'Mobilise and pool funds.' },
        { tone: 'blue', icon: '\u{1F33E}', title: 'Firms & farmers', sub: 'Borrow to invest.' },
        { tone: 'blue', icon: '\u{1F4C8}', title: 'Productivity & growth', sub: 'Higher output and incomes.' }
      ],

      causesLabel: 'WHY ACCESS MATTERS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F680}', head: 'Start businesses', body: 'Finance new firms and ideas.' },
        { tone: 'green', icon: '\u{1F6E0}️', head: 'Buy equipment', body: 'Raise capital per worker.' },
        { tone: 'green', icon: '\u{1F501}', head: 'Smooth cash flow', body: 'Survive seasonal and lean times.' },
        { tone: 'green', icon: '\u{1F393}', head: 'Invest in education', body: 'Fund skills and human capital.' },
        { tone: 'green', icon: '\u{1F4F1}', head: 'Adopt technology', body: 'Pay for better methods.' }
      ],

      causes2Label: 'WHEN FINANCE IS WEAK',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F6AB}', head: 'No collateral', body: 'The poor cannot secure loans.' },
        { tone: 'rose', icon: '\u{1F4C8}', head: 'High interest rates', body: 'Borrowing is too costly.' },
        { tone: 'rose', icon: '\u{1F91D}', head: 'Informal lending', body: 'Risky and expensive credit.' },
        { tone: 'rose', icon: '\u{1F510}', head: 'Financial exclusion', body: 'Many have no bank account.' }
      ],

      pairLabel: 'Inclusive finance vs Financial exclusion',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'green', icon: '\u{1F513}', iconStyle: 'circle', label: 'Inclusive finance',
        points: ['Broad access to credit', 'Savings and insurance', 'More investment and resilience']
      },
      right: {
        tone: 'rose', icon: '\u{1F512}', iconStyle: 'circle', label: 'Financial exclusion',
        points: ['Locked out of formal credit', 'Reliance on informal loans', 'Lower investment and growth']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Microfinance and mobile banking can connect savings to investment and allow more <strong>inclusive development</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Banking and credit matter because they connect savings to investment — and broaden who can take part.' },
      examEdge: { title: 'EXAM EDGE', text: 'Explain how weak access to credit holds back business expansion, technology adoption and capital formation.' }
    },

    /* ============ CARD 4 – Infrastructure ============ */
    {
      id: 'dfdc-infrastructure',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Infrastructure as a system constraint',
      lede: 'Roads, power, broadband, water and public services shape productivity across the whole economy.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Good infrastructure lowers costs and unlocks private investment across <strong>many sectors at once</strong>.' },

      causesPosition: 'top',
      causesLabel: 'THE INFRASTRUCTURE NETWORK',
      causesEmoji: '\u{1F517}',
      causes: [
        { tone: 'blue',   icon: '\u{1F6E3}️', head: 'Roads & transport', body: 'Move goods and people cheaply.' },
        { tone: 'blue',   icon: '\u{1F4F6}', head: 'Digital networks', body: 'Connect firms and markets.' },
        { tone: 'amber',  icon: '⚡', head: 'Electricity & power', body: 'Keep production running.' },
        { tone: 'green',  icon: '\u{1F6B0}', head: 'Water & sanitation', body: 'Underpin health and work.' },
        { tone: 'rose',   icon: '\u{1F3E5}', head: 'Health & education', body: 'Build a capable workforce.' },
        { tone: 'purple', icon: '\u{1F3ED}', head: 'Firms & households', body: 'All depend on the network.' }
      ],

      flowTitle: 'THE MULTIPLIER EFFECT',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F6E3}️', title: 'Better infrastructure', sub: 'Roads, power, broadband.' },
        { tone: 'green', icon: '\u{1F4C9}', title: 'Lower costs for firms', sub: 'Cheaper to produce and trade.' },
        { tone: 'green', icon: '\u{1F3D7}️', title: 'More investment', sub: 'Private capital follows.' },
        { tone: 'green', icon: '\u{1F4C8}', title: 'More output & jobs', sub: 'And higher living standards.' }
      ],

      causes2Label: 'WHY IT MATTERS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F69A}', head: 'Lower transport costs', body: 'Goods and people move cheaply.' },
        { tone: 'green', icon: '⚡', head: 'Reliable power', body: 'Factories can run without cuts.' },
        { tone: 'green', icon: '\u{1F4F6}', head: 'Faster communication', body: 'Information and trade flow.' },
        { tone: 'green', icon: '\u{1F3E5}', head: 'Better access', body: 'To health and education.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Stronger investment', body: 'Sector-wide gains attract capital.' }
      ],

      causes3Label: 'BOTTLENECKS',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'rose', icon: '\u{1F50C}', head: 'Power cuts', body: 'Halt production and deter firms.' },
        { tone: 'rose', icon: '\u{1F6A7}', head: 'Poor transport', body: 'Raise costs and limit markets.' },
        { tone: 'rose', icon: '\u{1F6AB}', head: 'Limited access', body: 'Rural and remote areas left out.' },
        { tone: 'rose', icon: '\u{1F527}', head: 'Disrepair', body: 'Neglect wastes the network.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Infrastructure is a platform that supports the whole economy — its gains spread far beyond one sector.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Infrastructure is a system-wide accelerator — but weak infrastructure can hold an entire economy back.' },
      examEdge: { title: 'EXAM EDGE', text: 'Link infrastructure to costs, productivity and private investment — its effects spread across many sectors.' }
    },

    /* ============ CARD 5 – Demography ============ */
    {
      id: 'dfdc-demography',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Demography — burden or dividend?',
      lede: 'Population growth can strain resources or create a demographic dividend if jobs, skills and productivity rise.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A growing population is only a dividend when the economy can <strong>educate, employ and equip</strong> it productively.' },

      visualKey: 'demographyPyramids',
      visualLabel: 'TWO PATHS',
      visualEmoji: '\u{1F517}',

      causesLabel: 'WHEN DEMOGRAPHY HELPS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F465}', head: 'Larger workforce', body: 'More people able to work.' },
        { tone: 'green', icon: '\u{1F6D2}', head: 'Bigger market', body: 'More demand for output.' },
        { tone: 'green', icon: '\u{1F3DB}️', head: 'More tax base', body: 'Revenue to fund development.' },
        { tone: 'green', icon: '\u{1F4B0}', head: 'Savings potential', body: 'Working-age people can save.' }
      ],

      causes2Label: 'WHEN DEMOGRAPHY HURTS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F3E5}', head: 'Strained services', body: 'Pressure on schools and hospitals.' },
        { tone: 'rose', icon: '\u{1F4BC}', head: 'Unemployment', body: 'Too few jobs for new workers.' },
        { tone: 'rose', icon: '\u{1F476}', head: 'Youth dependency', body: 'Many dependants, few earners.' },
        { tone: 'rose', icon: '\u{1F3D8}️', head: 'Strain on resources', body: 'Housing, food and water stretched.' }
      ],

      causes3Label: 'WHAT TIPS THE BALANCE',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'blue', icon: '\u{1F393}', head: 'Education', body: 'Turns numbers into skills.' },
        { tone: 'blue', icon: '\u{1F4BC}', head: 'Jobs', body: 'Productive work absorbs workers.' },
        { tone: 'blue', icon: '\u{1F3E5}', head: 'Health', body: 'Healthy people work and learn.' },
        { tone: 'blue', icon: '\u{1F4C8}', head: 'Productivity', body: 'Output per worker must rise.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Demography is not destiny — a population boom delivers a dividend only if it is <strong>employed productively</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'A growing population can power development or strain it — the difference is jobs, skills and productivity.' },
      examEdge: { title: 'EXAM EDGE', text: 'Evaluate demographic factors with context — age structure matters, but employment and productivity decide the outcome.' }
    },

    /* ============ CARD 6 – Education and human capital ============ */
    {
      id: 'dfdc-human-capital',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Education, skills and human capital',
      lede: 'Human capital raises productivity, supports diversification and helps countries absorb technology.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Education matters because it makes workers <strong>more productive</strong> and economies more adaptable.' },

      flowTitle: 'THE HUMAN-CAPITAL CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'purple', icon: '\u{1F393}', title: 'Education', sub: 'Schooling and training.' },
        { tone: 'purple', icon: '\u{1F9E0}', title: 'Knowledge & skills', sub: 'Human capital built.' },
        { tone: 'purple', icon: '\u{1F4C8}', title: 'Productivity', sub: 'Output per worker rises.' },
        { tone: 'purple', icon: '\u{1F4B7}', title: 'Higher incomes', sub: 'Better-paid work.' },
        { tone: 'purple', icon: '\u{1F4F1}', title: 'Technology adoption', sub: 'New methods absorbed.' },
        { tone: 'purple', icon: '\u{1F500}', title: 'Diversification', sub: 'New sectors and exports.' }
      ],

      causesLabel: 'WHY SKILLS MATTER',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F4BC}', head: 'Better jobs', body: 'Skilled work pays more.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Stronger productivity', body: 'More output per worker.' },
        { tone: 'green', icon: '\u{1F3ED}', head: 'Skilled sectors', body: 'Move up the value chain.' },
        { tone: 'green', icon: '\u{1F504}', head: 'Adaptability', body: 'Workers retrain as needs change.' },
        { tone: 'green', icon: '\u{1F4B7}', head: 'Higher earnings', body: 'And a wider tax base.' }
      ],

      causes2Label: 'SPILLOVER EFFECTS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue', icon: '\u{1F3E5}', head: 'Health knowledge', body: 'Better health behaviours.' },
        { tone: 'blue', icon: '\u{1F469}', head: 'Female participation', body: 'More of the workforce engaged.' },
        { tone: 'blue', icon: '\u{1F680}', head: 'Business formation', body: 'Skills enable enterprise.' },
        { tone: 'blue', icon: '\u{1F3DB}️', head: 'Stronger institutions', body: 'Capable people improve governance.' }
      ],

      causes3Label: 'WHEN HUMAN CAPITAL IS WEAK',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Low skills, low pay', body: 'Workers stuck in low-value jobs.' },
        { tone: 'rose', icon: '✈️', head: 'Brain drain', body: 'Skilled workers emigrate.' },
        { tone: 'rose', icon: '\u{1F6E0}️', head: 'Informal work', body: 'Little training or progression.' },
        { tone: 'rose', icon: '\u{1F40C}', head: 'Slow adoption', body: 'Hard to absorb new technology.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Human capital is one of the strongest long-run drivers of productivity, growth and resilience.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Educating and training people raises productivity, lifts incomes and helps an economy adopt new technology.' },
      examEdge: { title: 'EXAM EDGE', text: 'Go beyond schooling alone — explain how skills, training and technology adoption raise productivity.' }
    },

    /* ============ CARD 7 – Property rights and institutions ============ */
    {
      id: 'dfdc-institutions',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'Property rights, institutions and incentives',
      lede: 'Property rights, governance and political stability shape whether people invest, innovate and stay.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Development is stronger when rules are trusted, incentives are clear and institutions are <strong>stable</strong>.' },

      pairFirst: true,
      pairLabel: 'Strong institutions vs Weak institutions',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'green', icon: '\u{1F3DB}️', iconStyle: 'circle', label: 'Strong rights & rules',
        points: ['Investment and enterprise', 'Innovation and productivity', 'Sustainable growth and development']
      },
      right: {
        tone: 'rose', icon: '\u{1F4A5}', iconStyle: 'circle', label: 'Weak & fragile',
        points: ['Corruption and conflict', 'Uncertainty and capital flight', 'Stagnation and lost opportunities']
      },

      causesLabel: 'NON-ECONOMIC FOUNDATIONS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'blue',  icon: '\u{1F9D1}‍⚖️', head: 'Governance', body: 'Effective, accountable decisions.' },
        { tone: 'green', icon: '\u{1F54A}️', head: 'Political stability', body: 'Encourages long-term plans.' },
        { tone: 'amber', icon: '\u{1F575}️', head: 'Low corruption', body: 'Resources reach their purpose.' },
        { tone: 'blue',  icon: '⚖️', head: 'Institutional quality', body: 'Rules are applied fairly.' }
      ],

      causes2Label: 'WHY PROPERTY RIGHTS MATTER',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F6E1}️', head: 'Protect investment', body: 'Owners keep what they build.' },
        { tone: 'green', icon: '\u{1F3E6}', head: 'Firms can borrow', body: 'Assets can be used as collateral.' },
        { tone: 'green', icon: '\u{1F510}', head: 'Assets protected', body: 'Less fear of seizure.' },
        { tone: 'green', icon: '\u{1F4DC}', head: 'Contracts enforced', body: 'Deals can be relied upon.' }
      ],

      causes3Label: 'WHEN INCENTIVES BREAK DOWN',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'rose', icon: '\u{1F575}️', head: 'Informal economy', body: 'Activity moves off the books.' },
        { tone: 'rose', icon: '⏳', head: 'Short-term focus', body: 'Little long-term investment.' },
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Low returns', body: 'Risk and uncertainty deter capital.' },
        { tone: 'rose', icon: '✈️', head: 'Brain drain', body: 'Talent and money leave.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Institutions shape incentives — good rules and stable governance can unlock investment, while weak ones repel it.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Institutions and property rights are the foundation beneath every other factor — they decide whether capacity is built at all.' },
      examEdge: { title: 'EXAM EDGE', text: 'For evaluation, explain that the most economic policy may work only if institutions and property rights support it.' }
    }
  ]
};
