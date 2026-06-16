/* ============================================================
   ECONOS – Public Expenditure (Edexcel A 4.5.1)
   7 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   Government spending: the big picture, the three types, why it changes,
   productivity and growth, living standards and equality, taxation /
   borrowing / crowding out, and the whole story.

   New HTML visual:
     - govBudgetHub (Card 3 — six drivers around the government budget)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'public-expenditure',
  topicNum: '4.5.1',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Public Expenditure',
  estTime: '20 min',
  goal: 'Classify public spending, explain why it changes, and evaluate its effects on growth, living standards, equality and the tax burden',

  intro: {
    heroKey: 'heroFiscalPolicy',
    summary: 'Public expenditure is government spending — but what the state spends on, and how much, shapes growth, services, equality and the tax burden. The three types (capital, current and transfer payments) behave differently, and every pound must be financed through tax or borrowing.',
    doInThis: 'Classify spending as capital, current or a transfer, and explain why it changes. Link productive spending to growth and transfers to equality, then weigh financing and the risk of crowding out.',
    outcomes: [
      'Classify the three types of public spending',
      'Explain why public expenditure changes',
      'Link productive spending to growth',
      'Explain effects on living standards and equality',
      'Explain financing, borrowing and crowding out',
      'Evaluate public spending in context'
    ],
    tip: 'Distinguish what the government spends on from why spending changes and what the trade-offs are.',
    stages: [
      { num: 1, name: 'Learn',  sub: '7 cards \xb7 20 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'pubex-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Public expenditure — the big picture',
      lede: 'Public expenditure is government spending — but what the state spends on, and how much, shapes growth, services, equality and the tax burden.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Distinguish <strong>what</strong> the government spends on from <strong>why</strong> spending changes and what the trade-offs are.' },

      causesPosition: 'top',
      causesLabel: 'THE THREE TYPES OF SPENDING',
      causesEmoji: '\u{1F517}',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F3D7}️', head: 'Capital expenditure', body: 'Long-term investment: roads, schools, hospitals.' },
        { tone: 'green',  icon: '\u{1F468}‍⚕️', head: 'Current expenditure', body: 'Day-to-day spending on wages, medicines and running services.' },
        { tone: 'purple', icon: '\u{1F4B7}', head: 'Transfer payments', body: 'Income redistributed without a good or service: pensions, benefits.' }
      ],

      causes2Label: 'WHY IT MATTERS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F4C8}', head: 'Productivity & growth', body: 'Investment lifts the economy’s capacity.' },
        { tone: 'blue',  icon: '\u{1F3E1}', head: 'Living standards', body: 'Public services raise quality of life.' },
        { tone: 'purple', icon: '⚖️', head: 'Equality', body: 'Transfers and services narrow gaps.' },
        { tone: 'amber', icon: '\u{1F4B8}', head: 'Tax & borrowing', body: 'Spending must be paid for.' }
      ],

      causes3Label: 'THE CORE TRADE-OFF',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'green', icon: '\u{1F3E5}', head: 'Better services', body: 'More spending can improve provision.' },
        { tone: 'rose',  icon: '\u{1F4B8}', head: 'Higher tax or debt', body: 'It has to be financed.' },
        { tone: 'blue',  icon: '⚖️', head: 'A balance', body: 'The right level depends on context.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Public money is raised through taxation and other revenues, then allocated across capital, current and transfer spending.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Public expenditure is not one thing — what the state spends on matters as much as how much it spends.' },
      examEdge: { title: 'EXAM EDGE', text: 'Classify the spending first, then judge how it affects growth, equality and the public finances.' }
    },

    /* ============ CARD 2 – The three types ============ */
    {
      id: 'pubex-three-types',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'The three types of public spending',
      lede: 'Economists distinguish long-term investment, day-to-day service spending, and transfer payments because they affect the economy in different ways.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Do not confuse spending on services with transfer payments — only the latter gives income without a <strong>direct good or service</strong>.' },

      causesPosition: 'top',
      causesLabel: 'THE THREE TYPES',
      causesEmoji: '\u{1F517}',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F3D7}️', head: 'Capital expenditure', body: 'Investment in long-lived assets — roads, schools, hospitals. Raises future productive capacity.' },
        { tone: 'green',  icon: '\u{1F3E5}', head: 'Current expenditure', body: 'Day-to-day running costs — wages, medicines, administration. Keeps services going now.' },
        { tone: 'purple', icon: '\u{1F4B7}', head: 'Transfer payments', body: 'Pensions, benefits and child support — income moved between groups, not payment for output.' }
      ],

      causes2Label: 'HOW TO SPOT THEM',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue',   icon: '\u{1F686}', head: 'New railway', body: 'Capital — a new long-lived asset.' },
        { tone: 'green',  icon: '\u{1F469}‍⚕️', head: 'Paying nurses', body: 'Current — an ongoing wage.' },
        { tone: 'purple', icon: '\u{1F474}', head: 'State pension', body: 'Transfer — income, not output.' },
        { tone: 'blue',   icon: '\u{1F3E5}', head: 'Build a hospital', body: 'Capital — investment.' },
        { tone: 'green',  icon: '\u{1F48A}', head: 'Buy medicines', body: 'Current — day-to-day cost.' }
      ],

      causes3Label: 'WHY THE DISTINCTION MATTERS',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Capital aids growth', body: 'It builds productive capacity.' },
        { tone: 'blue',   icon: '\u{1F501}', head: 'Current keeps it running', body: 'Services need ongoing funding.' },
        { tone: 'purple', icon: '⚖️', head: 'Transfers redistribute', body: 'They shape the income distribution.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'In public accounts, the same job (say, a hospital) can involve all three types — building it, running it, and supporting its patients.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Capital builds the future, current runs the present, and transfers redistribute — three different jobs, three different effects.' },
      examEdge: { title: 'EXAM EDGE', text: 'Be precise: a transfer payment is not government consumption — it does not directly add to demand for output.' }
    },

    /* ============ CARD 3 – Why it changes ============ */
    {
      id: 'pubex-why-changes',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Why public expenditure changes',
      lede: 'Government spending changes because economies, societies and political priorities change.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Public spending shifts with the <strong>size of the population, the economy and political priorities</strong>.' },

      visualKey: 'govBudgetHub',
      visualLabel: 'THE MAIN DRIVERS',
      visualEmoji: '\u{1F517}',

      causesLabel: 'SIZE VS COMPOSITION',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 2,
      causes: [
        { tone: 'blue',   icon: '\u{1F4CF}', head: 'Size of spending', body: 'Total public expenditure as a share of GDP — how big the state is.' },
        { tone: 'purple', icon: '\u{1F967}', head: 'Composition of spending', body: 'How the budget is split between health, education, defence, welfare and debt interest.' }
      ],

      causes2Label: 'A GLOBAL CONTEXT',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green', icon: '\u{1F475}', head: 'Ageing economies', body: 'Spend more on pensions and care.' },
        { tone: 'blue',  icon: '\u{1F476}', head: 'Younger economies', body: 'Spend more on schools and jobs.' },
        { tone: 'amber', icon: '\u{1F3DB}️', head: 'Different priorities', body: 'Politics shapes the mix.' }
      ],

      causes3Label: 'HOW TO EXPLAIN IT',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'green', icon: '\u{1F50D}', head: 'Name the driver', body: 'Ageing, recession, debt, shocks.' },
        { tone: 'green', icon: '\u{1F517}', head: 'Explain the link', body: 'How it changes spending.' },
        { tone: 'green', icon: '\u{1F4CA}', head: 'Size or mix?', body: 'Total spend or its composition.' },
        { tone: 'green', icon: '⚖️', head: 'Judge it', body: 'Is the change sustainable?' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A higher level of spending is not automatically better — it depends on what it buys and how it is financed.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Public spending is driven by demography, the economic cycle, debt and priorities — and both its size and its mix matter.' },
      examEdge: { title: 'EXAM EDGE', text: 'Separate the size of spending (% of GDP) from its composition — examiners reward both.' }
    },

    /* ============ CARD 4 – Productivity and growth ============ */
    {
      id: 'pubex-growth',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Public expenditure, productivity and growth',
      lede: 'Some public spending builds the economy’s productive potential — but only if it is efficient and well targeted.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Capital spending on infrastructure, education and health can raise <strong>long-run aggregate supply</strong>.' },

      flowTitle: 'THE GROWTH CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F3DB}️', title: 'Public expenditure', sub: 'Resources directed by the state.' },
        { tone: 'green', icon: '\u{1F6E3}️', title: 'Infrastructure, skills, R&D', sub: 'The economy’s capacity is built.' },
        { tone: 'green', icon: '\u{1F4C8}', title: 'Higher productivity', sub: 'Workers and firms produce more.' },
        { tone: 'green', icon: '\u{1F680}', title: 'More output & growth', sub: 'And higher living standards.' }
      ],

      causesLabel: 'PRODUCTIVE SPENDING',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F6E3}️', head: 'Infrastructure', body: 'Lowers costs across the economy.' },
        { tone: 'green', icon: '\u{1F393}', head: 'Education & skills', body: 'Raises human capital.' },
        { tone: 'green', icon: '\u{1F3E5}', head: 'Healthcare', body: 'A healthier, more productive workforce.' },
        { tone: 'green', icon: '\u{1F52C}', head: 'Research & digital', body: 'New technology and capacity.' }
      ],

      causes2Label: 'WHY IT MAY FAIL',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F3AF}', head: 'Poor targeting', body: 'Money spent on the wrong things.' },
        { tone: 'rose', icon: '\u{1F4CB}', head: 'Bureaucracy', body: 'Inefficiency wastes resources.' },
        { tone: 'rose', icon: '\u{1F575}️', head: 'Corruption or waste', body: 'Funds leak away.' },
        { tone: 'rose', icon: '⏳', head: 'Time lags', body: 'Benefits take years to appear.' }
      ],

      pairLabel: 'Productive vs Wasteful spending',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'green', icon: '✅', iconStyle: 'circle', label: 'Productive',
        points: ['Builds capacity and skills', 'Raises long-run growth', 'Returns exceed the cost']
      },
      right: {
        tone: 'rose', icon: '⚠️', iconStyle: 'circle', label: 'Wasteful',
        points: ['Poorly targeted or run', 'Debt-financed with weak returns', 'Little lasting benefit']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Whether public spending raises growth depends on efficiency, targeting and how it is financed.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Public spending can be an investment in growth or a drag on the public finances — efficiency decides which.' },
      examEdge: { title: 'EXAM EDGE', text: 'Always condition the growth argument: spending raises capacity only if it is productive and well managed.' }
    },

    /* ============ CARD 5 – Living standards and equality ============ */
    {
      id: 'pubex-living-standards',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Living standards and equality',
      lede: 'Public expenditure affects how people live — through services, social protection and redistribution.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Higher public spending may improve quality of life, but the outcome depends on <strong>how effectively the money is used</strong>.' },

      causesPosition: 'top',
      causesLabel: 'HOW SPENDING RAISES LIVING STANDARDS',
      causesEmoji: '\u{1F517}',
      causes: [
        { tone: 'rose',   icon: '\u{1F3E5}', head: 'Healthcare', body: 'Longer, healthier lives.' },
        { tone: 'purple', icon: '\u{1F393}', head: 'Education', body: 'Skills and opportunity.' },
        { tone: 'blue',   icon: '\u{1F687}', head: 'Transport', body: 'Access to jobs and services.' },
        { tone: 'green',  icon: '\u{1F3E0}', head: 'Housing & services', body: 'Clean, safe communities.' },
        { tone: 'amber',  icon: '\u{1F6E1}️', head: 'Social security', body: 'A safety net against hardship.' }
      ],

      flowTitle: 'HOW SPENDING AFFECTS EQUALITY',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F4B7}', title: 'Market income', sub: 'Before tax and transfers.' },
        { tone: 'blue', icon: '\u{1F3DB}️', title: 'Taxes & transfers', sub: 'The state redistributes.' },
        { tone: 'blue', icon: '\u{1F4B5}', title: 'Disposable income', sub: 'More evenly shared.' },
        { tone: 'blue', icon: '⚖️', title: 'Lower inequality', sub: 'If well targeted.' }
      ],

      causes2Label: 'WHY RESULTS DIFFER',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'amber', icon: '⭐', head: 'Quality of service', body: 'Spending is not the same as outcomes.' },
        { tone: 'amber', icon: '\u{1F3AF}', head: 'Access & targeting', body: 'Does help reach those who need it?' },
        { tone: 'amber', icon: '\u{1F5FA}️', head: 'Regional reach', body: 'Some areas are better served.' },
        { tone: 'amber', icon: '\u{1F465}', head: 'Reaches the poorest?', body: 'Universal vs means-tested help.' }
      ],

      pairLabel: 'Benefits vs Limits',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'green', icon: '✅', iconStyle: 'circle', label: 'Benefits',
        points: ['Stronger safety net', 'Better access to services', 'Lower inequality']
      },
      right: {
        tone: 'rose', icon: '⚠️', iconStyle: 'circle', label: 'Limits',
        points: ['Waste and inefficiency', 'Dependency concerns', 'Costly to fund well']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Public services and transfers can raise living standards and cut inequality — but only if they are well run and well targeted.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Spending shapes both how well people live and how evenly resources are shared — quality and targeting decide the impact.' },
      examEdge: { title: 'EXAM EDGE', text: 'Distinguish raising average living standards from reducing inequality — and stress that outcomes depend on delivery.' }
    },

    /* ============ CARD 6 – Taxation, borrowing and crowding out ============ */
    {
      id: 'pubex-crowding-out',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Taxation, borrowing and crowding out',
      lede: 'Public spending has to be financed — and that creates macroeconomic trade-offs.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The key evaluation question is whether public spending crowds out <strong>private activity</strong> or crowds it in.' },

      causesPosition: 'top',
      causesLabel: 'HOW SPENDING IS FINANCED',
      causesEmoji: '\u{1F517}',
      causesCols: 3,
      causes: [
        { tone: 'blue',  icon: '\u{1F3DB}️', head: 'Taxation', body: 'Revenue raised from income, spending and profits.' },
        { tone: 'amber', icon: '\u{1F4B8}', head: 'Borrowing', body: 'Issuing bonds when spending exceeds tax.' },
        { tone: 'green', icon: '\u{1F4B0}', head: 'Other revenues', body: 'Fees, asset sales and central-bank profits.' }
      ],

      flowTitle: 'WHAT IS CROWDING OUT?',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'rose', icon: '\u{1F3DB}️', title: 'More public borrowing', sub: 'The state competes for funds.' },
        { tone: 'rose', icon: '\u{1F4C8}', title: 'Higher interest rates', sub: 'Demand for loanable funds rises.' },
        { tone: 'rose', icon: '\u{1F3ED}', title: 'Dearer to borrow', sub: 'For firms and households.' },
        { tone: 'rose', icon: '\u{1F4C9}', title: 'Less private investment', sub: 'Crowded out by the state.' }
      ],

      causes2Label: 'WHEN CROWDING OUT MAY BE SMALL',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F4C9}', head: 'In a recession', body: 'Spare savings sit idle.' },
        { tone: 'green', icon: '\u{1F3ED}', head: 'Spare capacity', body: 'Resources are unemployed.' },
        { tone: 'green', icon: '\u{1F4B2}', head: 'Low interest rates', body: 'Borrowing stays cheap.' },
        { tone: 'green', icon: '\u{1F6E3}️', head: 'Productive spend', body: 'It can crowd private investment in.' }
      ],

      causes3Label: 'THE CORE TRADE-OFFS',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'rose',  icon: '\u{1F3DB}️', head: 'Higher taxation', body: 'Can blunt incentives.' },
        { tone: 'rose',  icon: '\u{1F4B8}', head: 'More borrowing', body: 'Adds to debt and interest.' },
        { tone: 'amber', icon: '\u{1F4C9}', head: 'Possible crowding out', body: 'Private investment may fall.' },
        { tone: 'green', icon: '\u{1F680}', head: 'But potential gains', body: 'If the spending is productive.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Crowding out is most likely when the economy is near full capacity; in a slump, public spending can crowd private activity <strong>in</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Every pound of spending must be financed — and how it is financed shapes interest rates, debt and private investment.' },
      examEdge: { title: 'EXAM EDGE', text: 'Make crowding out conditional: it depends on the cycle, spare capacity and whether the spending is productive.' }
    },

    /* ============ CARD 7 – The whole story ============ */
    {
      id: 'pubex-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'The whole story',
      lede: 'Strong answers classify the spending, explain why it changes, then evaluate the macroeconomic trade-offs.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The best public-expenditure answers judge the quantity, composition, efficiency and <strong>financing</strong> of spending.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F3F7}️', title: 'Classify spending', sub: 'Capital, current or transfer.' },
        { tone: 'green', icon: '\u{1F50D}', title: 'Explain why', sub: 'What drives the change.' },
        { tone: 'green', icon: '\u{1F4CA}', title: 'Size & composition', sub: '% of GDP and the mix.' },
        { tone: 'green', icon: '\u{1F4C8}', title: 'Analyse effects', sub: 'Growth and inequality.' },
        { tone: 'green', icon: '\u{1F4B8}', title: 'Weigh financing', sub: 'Tax, borrowing, crowding out.' },
        { tone: 'green', icon: '⚖️', title: 'Reach a judgement', sub: 'Balanced and in context.' }
      ],

      causesLabel: 'THE BIG DEBATES',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'blue', icon: '\u{1F3D7}️', head: 'Investment vs waste', body: 'Does it build lasting capacity?' },
        { tone: 'blue', icon: '⚖️', head: 'Equality vs incentives', body: 'Fairness against work incentives.' },
        { tone: 'blue', icon: '\u{1F3E5}', head: 'Services vs taxes', body: 'Better provision against the burden.' },
        { tone: 'blue', icon: '\u{1F504}', head: 'Crowd out vs crowd in', body: 'Private investment helped or hurt.' }
      ],

      causes2Label: 'HOW TO WRITE IT',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F3F7}️', head: 'Define the type', body: 'Capital, current or transfer.' },
        { tone: 'green', icon: '\u{1F310}', head: 'Apply context', body: 'Use a real economy and data.' },
        { tone: 'green', icon: '\u{1F517}', head: 'Explain the effect', body: 'On growth, equality or finances.' },
        { tone: 'green', icon: '⚖️', head: 'Evaluate', body: 'Weigh the trade-offs.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'There is no ideal level of public expenditure for all countries — what matters is context, composition, efficiency and fiscal sustainability.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Good public-expenditure analysis weighs what spending buys, who gains and how it is paid for — not just how much is spent.' },
      examEdge: { title: 'EXAM EDGE', text: 'The highest-mark responses balance benefits for growth, living standards and equality against the cost and financing of spending.' }
    }
  ]
};
