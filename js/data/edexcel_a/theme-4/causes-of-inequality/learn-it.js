/* ============================================================
   ECONOS – Causes of Inequality (Edexcel A 4.2.2)
   7 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   Why inequality changes, causes of income and wealth inequality
   within countries, inequality between countries, economic change
   and development (Kuznets), capitalism and inequality, the whole story.

   Chart-engine spec:
     - kuznetsDevelopment (Card 5 — the inverted-U Kuznets curve)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'causes-of-inequality',
  topicNum: '4.2.2',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Causes of Inequality',
  estTime: '20 min',
  goal: 'Explain why inequality changes within and between countries, link economic development and capitalism to inequality, and evaluate the likely impact with context and policy',

  intro: {
    heroKey: 'heroCausesInequality',
    summary: 'Inequality is not fixed — it shifts when market rewards, asset ownership and redistribution change who earns income and who builds wealth. This deck explains the causes. Within countries, income inequality moves with labour-market drivers (skills, wage gaps, unemployment, bargaining power), structural forces (technology, trade, family structure) and how far the state redistributes; wealth inequality is driven by ownership, inheritance and the compounding of returns, which is why it is usually larger and more persistent. Between countries, differences in productivity, institutions, infrastructure and history shape what people can produce and earn. The deck then sets out the Kuznets hypothesis — inequality may rise in early development before flattening or falling — and weighs how capitalism can raise living standards while also concentrating income and wealth, before closing on how to structure a cause-to-consequence answer.',
    doInThis: 'Explain why inequality changes through market rewards, assets and redistribution. Separate the causes of income and wealth inequality within countries. Explain inequality between countries. Use the Kuznets curve to link development and inequality. Judge how capitalism affects inequality, and structure a top-mark answer.',
    outcomes: [
      'Explain why inequality changes',
      'Identify the causes of income inequality',
      'Identify the causes of wealth inequality',
      'Explain inequality between countries',
      'Use the Kuznets curve and judge it',
      'Evaluate capitalism and inequality'
    ],
    tip: 'Always identify whether the question is about income or wealth inequality, and whether it is within or between countries.',
    stages: [
      { num: 1, name: 'Learn',  sub: '7 cards \xb7 20 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'coi-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Why inequality changes — the big picture',
      lede: 'Inequality shifts when market rewards, asset ownership and redistribution change who gets income and who builds wealth.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Inequality changes when the gap in <strong>earnings, asset ownership or redistribution</strong> changes.' },

      flowTitle: 'THE CORE STORY',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F9D1}‍\u{1F393}', title: 'Skills, jobs & markets', sub: 'Access to skills and jobs shapes earning potential.' },
        { tone: 'blue', icon: '\u{1F4B7}', title: 'Household income', sub: 'People earn different amounts from work and other sources.' },
        { tone: 'blue', icon: '\u{1F3E0}', title: 'Assets & wealth', sub: 'Some can save and invest; others have little or none.' },
        { tone: 'blue', icon: '\u{1F3DB}️', title: 'Taxes & benefits', sub: 'The state redistributes income and provides services.' },
        { tone: 'blue', icon: '⚖️', title: 'Final distribution', sub: 'The result shapes income and wealth across society.' }
      ],

      causesLabel: 'THREE BIG FORCES',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '\u{1F4CA}', head: 'Market rewards', body: 'Wages, profits and bargaining power.' },
        { tone: 'purple', icon: '\u{1F3E0}', head: 'Asset ownership', body: 'Housing, shares, savings and inheritance.' },
        { tone: 'blue',   icon: '\u{1F3DB}️', head: 'Government redistribution', body: 'Taxes, benefits and public services.' }
      ],

      pairLabel: 'Income vs Wealth',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'blue', icon: '\u{1F4B7}', iconStyle: 'circle', label: 'Income', sub: 'a flow',
        points: ['Earnings over time', 'Wages, profits, benefits', 'Can change quickly']
      },
      right: {
        tone: 'green', icon: '\u{1F3E0}', iconStyle: 'circle', label: 'Wealth', sub: 'a stock',
        points: ['Assets built up', 'Property, shares, pensions', 'More persistent']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Income inequality can change quickly; <strong>wealth inequality changes more slowly</strong> because assets accumulate over time.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Inequality changes when market rewards, asset ownership or redistribution change who gets income and who builds wealth.' },
      examEdge: { title: 'EXAM EDGE', text: 'Start by identifying whether the question is about income inequality, wealth inequality, or both.' }
    },

    /* ============ CARD 2 – Income inequality within countries ============ */
    {
      id: 'coi-income-causes',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Causes of income inequality within countries',
      lede: 'Income inequality widens when labour-market rewards and redistribution increasingly favour some households over others.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Income inequality is mostly about differences in <strong>earnings, work and redistribution</strong>.' },

      causesFirst: true,
      causesLabel: 'LABOUR-MARKET DRIVERS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'blue', icon: '\u{1F393}', head: 'Skills & education', body: 'Higher human capital raises wages.' },
        { tone: 'blue', icon: '\u{1F4CA}', head: 'Wage gaps', body: 'Occupations and sectors pay differently.' },
        { tone: 'blue', icon: '\u{1F4BC}', head: 'Unemployment', body: 'No job means little or no earned income.' },
        { tone: 'blue', icon: '\u{1F91D}', head: 'Bargaining power', body: 'Unions, firms and labour scarcity affect pay.' }
      ],

      causes2Label: 'STRUCTURAL FORCES',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'purple', icon: '\u{1F4BB}', head: 'Technology', body: 'Rewards skilled labour and hollows out routine jobs.' },
        { tone: 'purple', icon: '\u{1F30D}', head: 'Trade & globalisation', body: 'Some sectors gain while others face pressure.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'Family structure', body: 'Dual-earner vs single-earner households widen gaps.' }
      ],

      flowTitle: 'POLICY AND REDISTRIBUTION',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'amber', icon: '\u{1F4B0}', title: 'Market income', sub: 'Earned before tax and benefits.' },
        { tone: 'amber', icon: '\u{1F3DB}️', title: 'Tax and benefits', sub: 'The state redistributes.' },
        { tone: 'amber', icon: '\u{1F4B5}', title: 'Disposable income', sub: 'Income after tax and benefits.' }
      ],

      flow2Title: 'A QUICK CAUSAL CHAIN',
      flow2Emoji: '\u{1F517}',
      flow2Sep: '→',
      flow2: [
        { tone: 'rose', icon: '\u{1F393}', title: 'Education gap' },
        { tone: 'rose', icon: '\u{1F4C8}', title: 'Productivity gap' },
        { tone: 'rose', icon: '\u{1F4B7}', title: 'Pay gap' },
        { tone: 'rose', icon: '⚖️', title: 'Income inequality' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Income inequality is usually measured <strong>after tax and benefits</strong> — the disposable-income distribution.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Income inequality widens when labour-market rewards and redistribution favour some workers over others.' },
      examEdge: { title: 'EXAM EDGE', text: 'Separate market-income drivers from redistribution — the causes overlap, but they are not identical.' }
    },

    /* ============ CARD 3 – Wealth inequality within countries ============ */
    {
      id: 'coi-wealth-causes',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Causes of wealth inequality within countries',
      lede: 'Wealth gaps widen when some households own appreciating assets while others struggle to save or borrow.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Wealth inequality is driven by <strong>ownership, inheritance and the compounding of returns</strong> over time.' },

      flowTitle: 'HOW WEALTH BUILDS',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F4B5}', title: 'Income left over', sub: 'After spending.' },
        { tone: 'green', icon: '\u{1F3E6}', title: 'Saving', sub: 'Put aside and invested.' },
        { tone: 'green', icon: '\u{1F3E0}', title: 'Buying assets', sub: 'Homes, shares, pensions.' },
        { tone: 'green', icon: '\u{1F4C8}', title: 'Asset values rise', sub: 'Returns and price growth.' },
        { tone: 'green', icon: '\u{1F4B0}', title: 'More wealth next period', sub: 'And the cycle repeats.' }
      ],

      causesLabel: 'SIX MAIN DRIVERS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'purple', icon: '\u{1F3E0}', head: 'Asset ownership', body: 'Some households already own appreciating assets.' },
        { tone: 'blue',   icon: '\u{1F3D8}️', head: 'House prices', body: 'Rising prices reward existing owners.' },
        { tone: 'green',  icon: '\u{1F4B0}', head: 'Savings capacity', body: 'Higher earners can save and invest more.' },
        { tone: 'purple', icon: '\u{1F381}', head: 'Inheritance', body: 'Wealth is passed down across generations.' },
        { tone: 'amber',  icon: '\u{1F4C8}', head: 'Capital gains', body: 'Returns on assets compound over time.' },
        { tone: 'blue',   icon: '\u{1F3E6}', head: 'Access to finance', body: 'Credit helps some buy assets others cannot.' }
      ],

      causes2Label: 'WHY IT PERSISTS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '\u{1F501}', head: 'Compounding', body: 'Returns build on returns, year after year.' },
        { tone: 'rose', icon: '⏱️', head: 'Early advantage', body: 'Assets owned early grow for decades.' },
        { tone: 'rose', icon: '\u{1F6AB}', head: 'Barriers to entry', body: 'Deposits, credit scores and low savings block access.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Wealth inequality is often greater than income inequality because <strong>stocks of assets accumulate</strong> across years and generations.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Wealth inequality is a stock story — once households own assets, gains can snowball.' },
      examEdge: { title: 'EXAM EDGE', text: 'For wealth inequality, focus on ownership, inheritance and asset returns, not just earnings.' }
    },

    /* ============ CARD 4 – Inequality between countries ============ */
    {
      id: 'coi-between-countries',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Inequality between countries',
      lede: 'Countries differ because productivity, institutions and development paths shape what workers and firms can produce and earn.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Cross-country inequality reflects deep differences in <strong>productivity, institutions, opportunity and history</strong>.' },

      causesLabel: 'WHY COUNTRIES DIFFER',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green',  icon: '\u{1F3ED}', head: 'Productivity', body: 'Output per worker differs hugely.' },
        { tone: 'blue',   icon: '⚖️', head: 'Institutions', body: 'Property rights, governance and corruption.' },
        { tone: 'amber',  icon: '\u{1F6E3}️', head: 'Infrastructure', body: 'Roads, power and connectivity.' },
        { tone: 'purple', icon: '\u{1F310}', head: 'Trade access', body: 'Openness and access to markets.' },
        { tone: 'rose',   icon: '⚔️', head: 'Conflict & stability', body: 'War and instability disrupt growth.' },
        { tone: 'slate',  icon: '\u{1F5FA}️', head: 'Geography & history', body: 'Landlocked status, disease, colonial legacy.' }
      ],

      causes2Label: 'DEVELOPMENT PATHS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F393}', head: 'Educate & invest', body: 'Builds skills, capital and higher incomes.' },
        { tone: 'green', icon: '\u{1F3DB}️', head: 'Strong institutions', body: 'Attract investment and raise productivity.' },
        { tone: 'rose',  icon: '\u{1F4A5}', head: 'Weak or unstable', body: 'Conflict and poor rule deter investment.' },
        { tone: 'rose',  icon: '\u{1F4C9}', head: 'Low productivity', body: 'Locks in persistent poverty.' }
      ],

      causes3Label: 'CATCH-UP IS POSSIBLE',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'blue', icon: '\u{1F3ED}', head: 'Industrialisation', body: 'Move up the value chain.' },
        { tone: 'blue', icon: '\u{1F4F1}', head: 'Technology adoption', body: 'Import know-how from abroad.' },
        { tone: 'blue', icon: '\u{1F517}', head: 'Integration', body: 'Join trade and investment flows.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Inequality between countries can narrow if poorer economies grow faster, but some remain <strong>trapped by weak institutions</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Between-country inequality is fundamentally about productivity and institutions, not just current income.' },
      examEdge: { title: 'EXAM EDGE', text: 'Separate within-country inequality from between-country inequality — the causes overlap but are not identical.' }
    },

    /* ============ CARD 5 – Economic change and development ============ */
    {
      id: 'coi-development',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Economic change and development',
      lede: 'Growth can reduce poverty while changing who gains most — so development may lower poverty yet still widen inequality for a time.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Development often creates <strong>winners and losers</strong> — inequality may rise before it later stabilises or falls.' },

      interactiveDiagram: {
        svgKey: 'kuznetsDevelopment',
        label: 'THE DEVELOPMENT STORY',
        emoji: '\u{1F517}',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'Inequality rises', show: ['idl-1'], tone: 'green',
            head: 'Early development: inequality rises.',
            body: 'As an economy industrialises, some sectors and regions grow first. Early gains are uneven, so <strong>inequality climbs</strong> up the left of the curve.',
            analysis: 'Structural change — urbanisation, a skills premium, capital owners gaining first — pulls incomes apart in the early stages.'
          },
          {
            label: 'Take-off peak', show: ['idl-1', 'idl-2'], tone: 'rose',
            head: 'Take-off peak: inequality is highest.',
            body: 'Through the industrial take-off the gap between the modern and traditional economy is at its <strong>widest</strong> — inequality peaks.',
            analysis: 'This is the top of the inverted-U: rapid growth, but the least evenly shared.'
          },
          {
            label: 'May flatten or fall', show: ['idl-1', 'idl-2', 'idl-3'], tone: 'blue',
            head: 'Mature economy: inequality may flatten or fall.',
            body: 'In a mature economy, wider education, redistribution and a larger welfare state can <strong>narrow the gap</strong> again — the right of the curve.',
            analysis: 'Kuznets is a <strong>hypothesis, not a law</strong>: many advanced economies have seen inequality widen again, so treat the downturn as possible, not guaranteed.'
          }
        ]
      },

      causesLabel: 'WHY GROWTH CAN RAISE INEQUALITY',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'rose', icon: '\u{1F3D9}️', head: 'Urban-rural gaps', body: 'Some sectors and regions grow first.' },
        { tone: 'rose', icon: '\u{1F393}', head: 'Skills premium', body: 'Modern sectors reward educated workers.' },
        { tone: 'rose', icon: '\u{1F4C8}', head: 'Asset gains', body: 'Early owners capture rising values.' }
      ],

      causes2Label: 'WHY GROWTH CAN REDUCE POVERTY',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green', icon: '\u{1F4BC}', head: 'More jobs', body: 'Rising labour demand pulls people into work.' },
        { tone: 'green', icon: '\u{1F4B7}', head: 'Higher wages', body: 'Formal-sector pay tends to rise.' },
        { tone: 'green', icon: '\u{1F3E5}', head: 'Better services', body: 'Growth funds health and education.' }
      ],

      pairLabel: 'Winners vs Losers',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'green', icon: '\u{1F3C6}', iconStyle: 'circle', label: 'Winners',
        points: ['Early adopters', 'Skilled workers', 'Capital owners']
      },
      right: {
        tone: 'rose', icon: '\u{1F4C9}', iconStyle: 'circle', label: 'Losers',
        points: ['Displaced workers', 'Lagging regions', 'Informal sector']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Use the Kuznets curve carefully — it is a <strong>tendency, not a universal law</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Development can cut poverty without automatically making the income distribution more equal.' },
      examEdge: { title: 'EXAM EDGE', text: 'Always separate poverty from inequality — growth can lower one while raising the other for a time.' }
    },

    /* ============ CARD 6 – Capitalism and inequality ============ */
    {
      id: 'coi-capitalism',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Capitalism and inequality',
      lede: 'Capitalism can raise innovation and living standards, but it can also widen gaps when rewards to ownership grow faster than rewards to work.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Capitalism is dynamic — it can create prosperity while also <strong>concentrating income and wealth</strong>.' },

      causesLabel: 'WHY CAPITALISM CAN WIDEN GAPS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'rose', icon: '\u{1F3E6}', head: 'Returns to capital', body: 'Owners can gain faster than workers.' },
        { tone: 'rose', icon: '\u{1F454}', head: 'Market power', body: 'Large firms extract higher profits.' },
        { tone: 'rose', icon: '\u{1F381}', head: 'Inheritance', body: 'Wealth and advantage pass down.' },
        { tone: 'rose', icon: '\u{1F6AA}', head: 'Unequal chances', body: 'Uneven access to finance and education.' }
      ],

      causes2Label: 'WHY CAPITALISM CAN RAISE LIVING STANDARDS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F4A1}', head: 'Innovation', body: 'New products and methods emerge.' },
        { tone: 'green', icon: '\u{1F3D7}️', head: 'Investment', body: 'Savings fund productive capacity.' },
        { tone: 'green', icon: '\u{1F3C1}', head: 'Competition', body: 'Pressure drives efficiency and choice.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Growth', body: 'Higher average incomes over time.' }
      ],

      causes3Label: 'THE ROLE OF POLICY',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'blue', icon: '\u{1F465}', head: 'Redistribution', body: 'Taxes and transfers narrow gaps.' },
        { tone: 'blue', icon: '\u{1F3E5}', head: 'Public services', body: 'Education and health widen opportunity.' },
        { tone: 'blue', icon: '\u{1F4DC}', head: 'Regulation', body: 'Curb market power and abuse.' },
        { tone: 'blue', icon: '⚖️', head: 'Balanced growth', body: 'Spread the gains more widely.' }
      ],

      pairLabel: 'Dynamic gains vs Concentration risks',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'green', icon: '\u{1F680}', iconStyle: 'circle', label: 'Dynamic gains',
        points: ['Innovation and choice', 'Rising living standards', 'Stronger growth']
      },
      right: {
        tone: 'rose', icon: '⚠️', iconStyle: 'circle', label: 'Concentration risks',
        points: ['Unequal bargaining power', 'Weaker equity', 'Entrenched advantage']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Capitalism does not mechanically produce ever-rising inequality — <strong>institutions and redistribution matter</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Capitalism can raise living standards and inequality at once — the outcome depends on policy and institutions.' },
      examEdge: { title: 'EXAM EDGE', text: 'Give a balanced answer: explain why capitalism can raise both prosperity and inequality, then judge the net effect.' }
    },

    /* ============ CARD 7 – The whole story ============ */
    {
      id: 'coi-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'The whole story',
      lede: 'Strong answers identify the type of inequality, explain the cause, and then judge the likely impact using context and policy.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The best inequality answers distinguish income from wealth, explain the driver, then <strong>evaluate the outcome</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F39B}️', title: 'Driver changes', sub: 'Technology, trade, education, tax.' },
        { tone: 'green', icon: '\u{1F4B7}', title: 'Income or wealth', sub: 'Which one is affected?' },
        { tone: 'green', icon: '\u{1F4CA}', title: 'Distribution shifts', sub: 'More or less unequal.' },
        { tone: 'green', icon: '\u{1F50D}', title: 'Measure & evidence', sub: 'Gini, Lorenz, income shares.' },
        { tone: 'green', icon: '\u{1F310}', title: 'Context & policy', sub: 'Institutions and country.' },
        { tone: 'green', icon: '\u{1F3AF}', title: 'Final outcome', sub: 'Income and wealth inequality.' }
      ],

      causesLabel: 'COMMON EVALUATION POINTS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'blue', icon: '\u{1F4B7}', head: 'Income or wealth?', body: 'Define clearly which the question means.' },
        { tone: 'blue', icon: '⏳', head: 'Short vs long run', body: 'Effects can differ over time.' },
        { tone: 'blue', icon: '\u{1F3DB}️', head: 'Policy matters', body: 'Tax, benefits and institutions reshape it.' },
        { tone: 'blue', icon: '\u{1F310}', head: 'Within vs between', body: 'Countries differ — be specific.' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '❌', head: 'Poverty vs inequality', body: 'They are different problems.' },
        { tone: 'rose', icon: '\u{1F4C8}', head: 'Kuznets as a law', body: 'It is a tendency, not a rule.' },
        { tone: 'rose', icon: '\u{1F3E0}', head: 'Ignoring wealth', body: 'Do not answer only on income.' }
      ],

      causes3Label: 'HOW TO WRITE IT',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'green', icon: '\u{1F4D0}', head: 'Define it', body: 'Income or wealth inequality.' },
        { tone: 'green', icon: '\u{1F517}', head: 'Explain the driver', body: 'Trace the mechanism.' },
        { tone: 'green', icon: '\u{1F310}', head: 'Apply context', body: 'Country, time and policy.' },
        { tone: 'green', icon: '⚖️', head: 'Judge the impact', body: 'Evaluate and conclude.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The highest marks come from clear definitions, a precise causal chain, and a <strong>balanced judgement</strong> about context and policy.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Inequality analysis is a causal story — name the type, explain the driver, then evaluate the impact in context.' },
      economistQuote: {
        portraitKey: 'economistSen',
        tone: 'amber',
        label: 'Economist insight on inequality',
        quote: 'Poverty must be seen as the deprivation of basic capabilities, rather than merely as lowness of incomes.',
        attribution: 'Amartya Sen, <em>Development as Freedom</em> (1999)'
      },
      examEdge: { title: 'EXAM EDGE', text: 'Identify the type of inequality, explain the driver, then evaluate the likely impact using context and policy.' }
    }
  ]
};
