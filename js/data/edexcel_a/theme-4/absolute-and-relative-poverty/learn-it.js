/* ============================================================
   ECONOS – Absolute & Relative Poverty (Edexcel A 4.2.1)
   6 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   The two ideas and benchmarks, how poverty is measured, when the
   two measures move differently, what changes absolute poverty,
   what changes relative poverty, and the whole story.

   New visuals:
     - povertyLineSpectrum     (Card 2 — poor/not-poor on an income axis)
     - povertyMoveDifferently  (Card 3 — scenarios + why + quick matrix)
     - povertyTrapCycle        (Card 4 — the low-income feedback loop)
     - incomeLadder            (Card 5 — median + 60% threshold + drivers)
     - povertyCausesOutcomes   (Card 6 — five causes into twin outcomes)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'absolute-and-relative-poverty',
  topicNum: '4.2.1',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Absolute & Relative Poverty',
  estTime: '18 min',
  goal: 'Distinguish absolute from relative poverty, measure each against the right benchmark, explain what changes them, and evaluate which poverty problem matters most in context',

  intro: {
    heroKey: 'heroGlobe',
    summary: 'Poverty has two faces. Absolute poverty is about basic survival — not having enough to meet basic needs such as food, shelter, clean water and healthcare, measured against a fixed basic-needs threshold. Relative poverty is about inequality and social exclusion — having far less than the normal living standard in your society, measured against a society-relative threshold such as 60% of median income. This deck pins down the distinction and the benchmarks, shows how poverty is measured (headcount, poverty gap, multidimensional measures), and explains when the two measures move together or split apart. It then traces what changes absolute poverty (growth, jobs, prices, shocks and the poverty trap) and what changes relative poverty (inequality, housing, the tax-benefit system), before closing on how to write a top-mark answer.',
    doInThis: 'Define absolute and relative poverty against the right benchmark. Name the common measures precisely. Explain when the two move together or apart. Trace the causes that change absolute poverty, including the poverty trap. Map the drivers of relative poverty. Evaluate which poverty problem and which policy matter most in context.',
    outcomes: [
      'Distinguish absolute from relative poverty',
      'Name and read the common poverty measures',
      'Explain when the two measures diverge',
      'Identify the causes of changes in absolute poverty',
      'Identify the drivers of relative poverty',
      'Evaluate poverty policy in context'
    ],
    tip: 'Always tie the cause to the correct benchmark — a fixed basic-needs threshold for absolute poverty, a society-relative threshold for relative poverty.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 18 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'poverty-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'Absolute and relative poverty — the big picture',
      lede: 'Poverty can mean not having enough to meet basic needs, or having far less than the normal living standard in your society.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Absolute poverty is about <strong>basic survival</strong> — relative poverty is about <strong>inequality and social exclusion</strong>.' },

      note: { tone: 'blue', icon: 'ℹ️', text: 'A person may escape absolute poverty but still be relatively poor.' },
      notePosition: 'top',

      pairFirst: true,
      pairLabel: 'Absolute poverty vs Relative poverty',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'green',
        icon: '\u{1F35C}',
        iconStyle: 'circle',
        label: 'Absolute poverty',
        text: 'Income or resources too low to meet <strong>basic needs</strong> such as food, shelter, clean water and healthcare.'
      },
      right: {
        tone: 'purple',
        icon: '\u{1F465}',
        iconStyle: 'circle',
        label: 'Relative poverty',
        text: 'Income well below the <strong>typical standard</strong> in that country, making normal participation in society difficult.'
      },

      causesLabel: 'WHAT EACH ONE ASKS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue', icon: '\u{1F9FA}', head: 'Basic needs',      body: 'Can people afford essentials?' },
        { tone: 'blue', icon: '\u{1F4CA}', head: 'Living standards', body: 'How far below the norm are they?' },
        { tone: 'blue', icon: '⚖️',        head: 'Benchmark',        body: 'Fixed threshold vs society-based threshold.' },
        { tone: 'blue', icon: '\u{1F3DB}️', head: 'Policy focus',     body: 'Growth and basic services vs distribution and inclusion.' }
      ],

      causes2Label: 'WHY THE DISTINCTION MATTERS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green',  icon: '\u{1F310}', head: 'Country comparisons',  body: 'Absolute poverty is useful for global development comparisons.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'Rich-country inequality', body: 'Relative poverty is often more useful within developed economies.' },
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Different trends',     body: 'Strong growth can cut absolute poverty without narrowing relative poverty.' }
      ],

      comparisonTable: {
        title: 'A QUICK COMPARISON',
        emoji: '\u{1F517}',
        columns: ['Benchmark', 'Typical use', 'Can it fall while inequality rises?'],
        columnTones: ['blue', 'purple', 'green'],
        rows: [
          { label: '\u{1F35C} Absolute poverty', values: ['Basic-needs fixed threshold', 'Cross-country and global development', '✅ <strong>Yes</strong> — absolute poverty can fall.'] },
          { label: '\u{1F465} Relative poverty', values: ['Society-relative threshold (e.g. median %)', 'Within-country inequality and social inclusion', '✅ <strong>Yes</strong> — relative poverty can rise.'] }
        ]
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Growth, prices and redistribution can affect absolute and relative poverty in <strong>different ways</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Absolute poverty asks whether people have enough to live — relative poverty asks how far behind the normal standard they are.' },
      examEdge: { title: 'EXAM EDGE', text: 'Always define the concept carefully and refer to the benchmark — basic-needs threshold or society-relative threshold.' }
    },

    /* ============ CARD 2 – How we measure poverty ============ */
    {
      id: 'poverty-measures',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'How we measure poverty',
      lede: 'Measures of poverty need a threshold, then a way to count who is below it and by how much.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Always ask three things — <strong>where</strong> is the poverty line, <strong>who</strong> is below it, and <strong>how far</strong> below it are they?' },

      pairFirst: true,
      pairLabel: 'Absolute poverty vs Relative poverty',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'green',
        icon: '\u{1F35C}',
        iconStyle: 'circle',
        label: 'Absolute poverty',
        text: 'Uses a <strong>fixed basic-needs or international poverty line</strong>. It reflects the minimum living standard needed for survival and basic participation. The World Bank uses this idea to compare living standards across countries.'
      },
      right: {
        tone: 'purple',
        icon: '\u{1F465}',
        iconStyle: 'circle',
        label: 'Relative poverty',
        text: 'Uses a line based on the <strong>income distribution</strong> within a society. A common rule is income below 60% of median household income. It shows inequality and how far people fall behind the typical standard.'
      },

      causesFirst: true,
      causesLabel: 'COMMON MEASURES',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue', icon: '\u{1F465}', head: 'Headcount ratio',  body: 'The share of people with income below the poverty line.' },
        { tone: 'blue', icon: '\u{1F4CA}', head: 'Poverty gap',      body: 'How far below the line the poor are, on average.' },
        { tone: 'blue', icon: '\u{1F4E6}', head: 'Deprivation', body: 'Looks at several deprivations — health, education, housing.' },
        { tone: 'blue', icon: '\u{1F3E0}', head: 'After-housing income', body: 'Adjusts income for household size and / or housing costs.' }
      ],

      flowChart: { svgKey: 'povertyLineSpectrum', label: 'HOW TO READ THE DATA', emoji: '\u{1F517}' },

      causes3Label: 'WHAT TO WATCH',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'green',  icon: '\u{1F3F7}️', head: 'Purchasing power', body: 'Use PPP or cost-of-living adjustments for fair comparison.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'Household size',   body: 'Larger households need equivalised income.' },
        { tone: 'green',  icon: '\u{1F6D2}', head: 'Cost of living',   body: 'Poverty depends on local prices and living costs.' },
        { tone: 'purple', icon: '\u{1F4C4}', head: 'Data quality',     body: 'Surveys have error and missing data — be cautious.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A poverty measure is only as useful as the <strong>threshold</strong> behind it.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Measures turn the idea of poverty into a threshold plus a count of who falls below it.' },
      examEdge: { title: 'EXAM EDGE', text: 'Name the measure precisely — headcount, poverty gap, or relative-income threshold — and explain what it captures.' }
    },

    /* ============ CARD 3 – When the two move differently ============ */
    {
      id: 'poverty-move-differently',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 6',
      title: 'When the two move differently',
      lede: 'Absolute and relative poverty can move together — or split apart — depending on growth, prices and inequality.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A fall in absolute poverty does <strong>not guarantee</strong> a fall in relative poverty.' },

      visualKey: 'povertyMoveDifferently',
      visualLabel: 'FOUR SCENARIOS',
      visualEmoji: '\u{1F517}',

      flowTitle: 'HOW TO EXPLAIN IT',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F50D}', title: 'Identify the change', sub: 'What has changed — growth, prices, unemployment, policy?' },
        { tone: 'blue', icon: '\u{1F4CA}', title: 'Say what happens',    sub: 'How do incomes, prices and inequality respond?' },
        { tone: 'blue', icon: '⚖️',        title: 'Compare to benchmark', sub: 'Against the basic-needs and society-relative thresholds.' },
        { tone: 'blue', icon: '\u{1F3AF}', title: 'State the outcome',   sub: 'What happens to absolute and relative poverty?' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Growth can reduce hardship without necessarily narrowing inequality.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Absolute poverty tracks basic hardship — relative poverty tracks living standards compared with the rest of society.' },
      examEdge: { title: 'EXAM EDGE', text: 'Always tie the cause to the correct benchmark — fixed basic-needs threshold or society-relative threshold.' }
    },

    /* ============ CARD 4 – What changes absolute poverty ============ */
    {
      id: 'poverty-changes-absolute',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 6',
      title: 'What changes absolute poverty?',
      lede: 'Absolute poverty changes when people move above or below the level needed to meet basic needs.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Growth matters — but so do <strong>food prices, jobs, public services and shocks</strong>.' },

      causesPosition: 'top',
      causesLabel: 'THE ESCAPE ROUTES',
      causesEmoji: '\u{1F517}',
      causes: [
        { tone: 'green', icon: '\u{1F465}', head: 'Jobs and wages',      body: 'More and better jobs raise incomes above the poverty line.' },
        { tone: 'green', icon: '\u{1F69C}', head: 'Farm output',   body: 'Higher productivity lifts food supply and rural incomes.' },
        { tone: 'green', icon: '\u{1F393}', head: 'Education and health', body: 'Skills and good health improve earnings and productivity.' },
        { tone: 'green', icon: '\u{1F6B0}', head: 'Infrastructure',    body: 'Better infrastructure cuts costs and opens access to markets.' },
        { tone: 'green', icon: '\u{1F6E1}️', head: 'Safety nets',       body: 'Cash transfers and support help families stay above the line.' }
      ],

      visualKey: 'povertyTrapCycle',
      visualLabel: 'THE POVERTY TRAP',
      visualEmoji: '\u{1F517}',

      causes2Label: 'WHAT CAN PUSH IT UP?',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F4BC}', head: 'Unemployment',    body: 'Job losses reduce incomes and increase poverty.' },
        { tone: 'rose', icon: '⚔️',         head: 'Conflict',      body: 'War and instability disrupt jobs, markets and services.' },
        { tone: 'rose', icon: '\u{1F9A0}', head: 'Disease',       body: 'Ill health lowers productivity and drains household resources.' },
        { tone: 'rose', icon: '⛈️',         head: 'Climate shocks', body: 'Droughts, floods and storms damage livelihoods and crops.' },
        { tone: 'rose', icon: '\u{1F4C8}', head: 'Price spikes',  body: 'Higher food or energy prices cut real incomes.' }
      ],

      causes3Label: 'POLICY LEVERS',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'blue', icon: '\u{1F4C8}', head: 'Sustained growth',   body: 'More output and better jobs increase real incomes.' },
        { tone: 'blue', icon: '\u{1F3DB}️', head: 'Basic services',     body: 'Health, education and infrastructure raise capabilities.' },
        { tone: 'blue', icon: '\u{1F465}', head: 'Safety nets',        body: 'Protect vulnerable households against shocks and downturns.' },
        { tone: 'blue', icon: '\u{1F3F7}️', head: 'Price stability',    body: 'Keep essential goods affordable through stable prices.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Absolute poverty is most sensitive to whether households can <strong>afford essentials</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Absolute poverty falls when more households can secure the basics of life.' },
      examEdge: { title: 'EXAM EDGE', text: 'Trace the cause to real incomes and the cost of essentials — then link it to the poverty threshold.' }
    },

    /* ============ CARD 5 – What changes relative poverty ============ */
    {
      id: 'poverty-changes-relative',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'What changes relative poverty?',
      lede: 'Relative poverty is shaped less by basic survival and more by how incomes and living standards are distributed.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Relative poverty moves with <strong>inequality, wages, housing costs and the tax-benefit system</strong>.' },

      visualKey: 'incomeLadder',
      visualLabel: null,

      causesLabel: 'WHY IT CAN STAY HIGH',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue', icon: '\u{1F4C8}', head: 'Growth bypasses the poor', body: 'Rising GDP does not always reach those at the bottom.' },
        { tone: 'blue', icon: '\u{1F464}', head: 'Insecure work',  body: 'Zero-hours and low-paid jobs can leave incomes near the threshold.' },
        { tone: 'blue', icon: '\u{1F3E0}', head: 'High rents',     body: 'More of earnings goes on housing, leaving less for other needs.' },
        { tone: 'blue', icon: '\u{1F4CA}', head: 'Threshold rises', body: 'If the average income rises, the poverty line rises too.' }
      ],

      causes2Label: 'POLICY TOOLS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F3DB}️', head: 'Progressive tax',      body: 'Higher earners pay more, helping to reduce inequality.' },
        { tone: 'green', icon: '\u{1F465}', head: 'Benefits',        body: 'Cash and in-kind support lifts incomes near the bottom.' },
        { tone: 'green', icon: '\u{1F4B7}', head: 'Living wages',    body: 'Raising pay floors supports low-paid workers.' },
        { tone: 'green', icon: '\u{1F393}', head: 'Skills training', body: 'Build skills and productivity for better-paid jobs.' },
        { tone: 'green', icon: '\u{1F3E0}', head: 'Affordable housing', body: 'Lower housing costs free up incomes.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Relative poverty is about <strong>distance from the norm</strong> — not just survival.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Relative poverty is an inequality story — who shares in rising living standards, and who does not.' },
      examEdge: { title: 'EXAM EDGE', text: 'Explain how a factor changes the income distribution or the threshold relative to median income.' }
    },

    /* ============ CARD 6 – The whole story ============ */
    {
      id: 'poverty-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 6',
      title: 'The whole story',
      lede: 'Strong answers define the measure, explain the cause, and then judge which poverty problem matters most in context.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Absolute poverty is about <strong>hardship</strong> — relative poverty is about <strong>inequality and participation</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F4D6}', title: 'Define the concept',  sub: 'State whether absolute or relative poverty.' },
        { tone: 'green', icon: '\u{1F3AF}', title: 'Identify the benchmark', sub: 'Specify the threshold or living standard.' },
        { tone: 'green', icon: '\u{1F4CA}', title: 'Choose the measure', sub: 'Use a suitable indicator for the concept.' },
        { tone: 'green', icon: '\u{1F50D}', title: 'Explain the cause',  sub: 'Analyse factors that change the measure.' },
        { tone: 'green', icon: '\u{1F310}', title: 'Apply the context',  sub: 'Use country and time information.' },
        { tone: 'green', icon: '⚖️',        title: 'Evaluate the policy', sub: 'Judge which option best reduces the problem.' }
      ],

      flowChart: { svgKey: 'povertyCausesOutcomes', label: 'CAUSES TO OUTCOMES', emoji: '\u{1F517}' },

      causesLabel: 'POLICY LENSES',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Growth policies', body: 'Investment, trade and productivity reforms — <strong>strongest against absolute poverty</strong>.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'Transfers',       body: 'Taxes, cash transfers and social security — <strong>strongest against relative poverty</strong>.' },
        { tone: 'blue',   icon: '\u{1F3E5}', head: 'Basic services',  body: 'Education, health, water and infrastructure — <strong>strongest against absolute poverty</strong>.' },
        { tone: 'amber',  icon: '\u{1F3AF}', head: 'Targeted support', body: 'Means-tested help for the poorest households — <strong>helps both poverty types</strong>.' }
      ],

      causes2Label: 'COMMON EVALUATION POINTS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'blue', icon: '\u{1F310}', head: 'Stage of development', body: 'Impacts differ between LICs, MICs and HICs.' },
        { tone: 'blue', icon: '\u{1F4C6}', head: 'Time horizon',      body: 'Short-term trade-offs may differ from long-term outcomes.' },
        { tone: 'blue', icon: '\u{1F4B7}', head: 'Cost of living',    body: 'Inflation and price shocks affect both measures.' },
        { tone: 'blue', icon: '\u{1F4CA}', head: 'Data limitations',  body: 'Indicators rely on estimates and may be outdated.' }
      ],

      causes3Label: 'COMMON MISTAKES',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'rose', icon: '❌', head: 'Treating them as one', body: 'The two measures capture different problems.' },
        { tone: 'rose', icon: '❗', head: 'Skipping the benchmark', body: 'Always state the threshold or living standard used.' },
        { tone: 'rose', icon: '↕️', head: 'Assuming they move together', body: 'Growth can cut hardship but leave inequality high.' },
        { tone: 'rose', icon: '\u{1F4AC}', head: 'Sweeping claims', body: 'Context and time period matter — avoid sweeping claims.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'The best poverty analysis distinguishes hardship from inequality, then judges which measure and policy matter most.' },
      examEdge: { title: 'EXAM EDGE', text: 'For top marks, compare absolute and relative poverty directly and evaluate how far a cause or policy changes each one.' }
    }
  ]
};
