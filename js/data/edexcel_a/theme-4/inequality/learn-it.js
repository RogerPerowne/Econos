/* ============================================================
   ECONOS – Inequality (Edexcel A 4.2.2)
   6 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   The income/wealth distinction, why wealth is more unequal, the
   Lorenz curve, reading and comparing Lorenz curves, the Gini
   coefficient, and the whole story.

   Chart-engine specs (Lorenz/Gini geometry, not hand-rolled SVG):
     - lorenzCurve    (Card 3 — the Lorenz diagram)
     - lorenzCompare  (Card 4 — country & over-time comparisons)
     - giniAreas      (Card 5 — the A/B areas behind the Gini)
   New HTML visuals:
     - flowVsStock    (Card 2 — income flow vs wealth stock metaphor)
     - giniScale      (Card 5 — the 0→1 Gini scale)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'inequality',
  topicNum: '4.2.2',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Inequality',
  estTime: '18 min',
  goal: 'Distinguish income from wealth inequality, measure it with the Lorenz curve and Gini coefficient, read and compare distributions, and evaluate what the measures do and miss',

  intro: {
    heroKey: 'heroInequality',
    summary: 'Inequality is about how unevenly economic resources are shared. The first job is to separate what people earn (income — a flow that arrives over time: wages, profits, rent, benefits) from what people own (wealth — a stock that builds up: property, savings, shares, pensions). Wealth is usually far more unequal and more persistent than income, because it is inherited, compounds through asset price growth and saving capacity, and attracts capital gains. The deck then builds the two standard tools: the Lorenz curve — a picture of the whole distribution against the 45° line of equality — and the Gini coefficient, which turns that picture into one number between 0 (perfect equality) and 1 (perfect inequality). It shows how to read a curve, compare countries and track change over time, and closes on what each measure does best and what it misses.',
    doInThis: 'Separate income from wealth and explain why wealth is more unequal. Build and read a Lorenz curve. Compare Lorenz curves across countries and over time. Turn the curve into a Gini coefficient and read the 0→1 scale. Judge what the Lorenz curve and Gini do well and what they miss.',
    outcomes: [
      'Distinguish income from wealth inequality',
      'Explain why wealth is more unequal',
      'Build and read a Lorenz curve',
      'Compare Lorenz curves across cases',
      'Read the Gini coefficient and its scale',
      'Evaluate what the measures do and miss'
    ],
    tip: 'Always separate income from wealth, and name the measure precisely — a Lorenz curve shows the shape, a Gini coefficient gives one number.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 18 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'ineq-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'Inequality — the big picture',
      lede: 'Income is a flow. Wealth is a stock. Inequality is about how unevenly they are shared.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'To study inequality well, separate <strong>what people earn</strong> from <strong>what people own</strong>.' },

      causesPosition: 'top',
      causesLabel: 'THE CORE IDEA',
      causesEmoji: '\u{1F517}',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '\u{1F465}', head: 'People or households', body: 'Everyone has different levels of income and wealth.' },
        { tone: 'blue',   icon: '\u{1F4B0}', head: 'Income flow, wealth stock', body: 'Income is earned over time; wealth is owned.' },
        { tone: 'purple', icon: '⚖️',        head: 'Unequal distribution', body: 'Resources are shared unevenly across people.' }
      ],

      pairFirst: true,
      pairLabel: 'Income vs Wealth',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'blue',
        icon: '\u{1F4B7}',
        iconStyle: 'circle',
        label: 'Income',
        sub: 'a flow over time',
        points: ['Wages and salaries', 'Rent, interest, dividends', 'Profits', 'State benefits']
      },
      right: {
        tone: 'green',
        icon: '\u{1F3E0}',
        iconStyle: 'circle',
        label: 'Wealth',
        sub: 'a stock of assets',
        points: ['Property and land', 'Savings and shares', 'Pensions', 'Business, inheritance']
      },

      causes2Label: 'WHY INEQUALITY MATTERS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'green',  icon: '\u{1F3E1}', head: 'Living standards', body: 'Consumption and access to essentials.' },
        { tone: 'blue',   icon: '\u{1F31F}', head: 'Life chances',     body: 'Opportunity, education and mobility.' },
        { tone: 'purple', icon: '\u{1F4AA}', head: 'Power',            body: 'Influence over markets and politics.' },
        { tone: 'rose',   icon: '\u{1F465}', head: 'Social effects',   body: 'Cohesion, health and fairness.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A country can grow richer overall while still becoming <strong>more unequal</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Inequality is about how unevenly economic resources are shared across people or households.' },
      examEdge: { title: 'EXAM EDGE', text: 'Define the measure clearly — income or wealth — before explaining how evenly or unevenly it is shared.' }
    },

    /* ============ CARD 2 – Income vs wealth inequality ============ */
    {
      id: 'ineq-income-vs-wealth',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'Income vs wealth inequality',
      lede: 'Income is earned over time. Wealth is accumulated and owned.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Wealth inequality is usually <strong>greater and more persistent</strong> than income inequality.' },

      pairFirst: true,
      pairLabel: 'Income vs Wealth',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'blue',
        icon: '\u{1F4B7}',
        iconStyle: 'circle',
        label: 'Income',
        sub: 'a flow over time',
        points: ['Wages and salaries', 'Self-employment profit', 'Rent, interest and dividends', 'State benefits']
      },
      right: {
        tone: 'green',
        icon: '\u{1F3E0}',
        iconStyle: 'circle',
        label: 'Wealth',
        sub: 'a stock of assets',
        points: ['Property and land', 'Savings and shares', 'Pensions', 'Business and inheritance']
      },

      flowChart: { svgKey: 'flowVsStock', label: 'FLOW VS STOCK', emoji: '\u{1F517}' },

      causesLabel: 'WHY WEALTH IS OFTEN MORE UNEQUAL',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'purple', icon: '\u{1F381}', head: 'Inherited wealth', body: 'Assets are passed down across generations.' },
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Asset price growth', body: 'Rising house and share prices reward existing owners.' },
        { tone: 'green',  icon: '\u{1F4B0}', head: 'Saving capacity', body: 'Higher earners can save and invest far more.' },
        { tone: 'amber',  icon: '\u{1F3E6}', head: 'Capital gains', body: 'Returns on assets compound over time.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Two households can have the same income today but very different wealth.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Income is a flow that arrives over time; wealth is a stock that builds up — and wealth is far more concentrated.' },
      examEdge: { title: 'EXAM EDGE', text: 'Define clearly whether the question is about income inequality or wealth inequality before your point or measure.' }
    },

    /* ============ CARD 3 – The Lorenz curve ============ */
    {
      id: 'ineq-lorenz-curve',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 6',
      title: 'The Lorenz curve',
      lede: 'A Lorenz curve shows how evenly or unevenly income is distributed across a population.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The further the curve lies below the 45° line, the <strong>greater the inequality</strong>.' },

      visualKey: 'lorenzCurve',
      visualLabel: 'THE DIAGRAM',
      visualEmoji: '\u{1F517}',

      flowTitle: 'HOW TO BUILD IT',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F465}', title: 'Rank households', sub: 'Poorest to richest.' },
        { tone: 'blue', icon: '\u{1F4CA}', title: 'Cumulative population', sub: 'Add up the % of people.' },
        { tone: 'blue', icon: '\u{1F4B7}', title: 'Cumulative income', sub: 'Add up the % of income.' },
        { tone: 'blue', icon: '\u{1F4C8}', title: 'Plot the curve', sub: 'One point per group.' }
      ],

      causesLabel: 'HOW TO READ IT',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'slate',  icon: '\u{1F4D0}', head: 'Perfect equality', body: 'The straight 45° line — everyone has an equal share.' },
        { tone: 'purple', icon: '\u{1F4C9}', head: 'Real-world spread', body: 'A bowed curve below the line — the usual shape.' },
        { tone: 'rose',   icon: '↘️',         head: 'More inequality', body: 'The further from the line, the more unequal.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The Lorenz curve turns income distribution into a single picture.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'The Lorenz curve shows the shape of the distribution — its bow measures how unequal income is.' },
      examEdge: { title: 'EXAM EDGE', text: 'Always label the axes as cumulative % of population and cumulative % of income, and draw the 45° line.' }
    },

    /* ============ CARD 4 – Reading the Lorenz curve ============ */
    {
      id: 'ineq-reading-lorenz',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 6',
      title: 'Reading the Lorenz curve',
      lede: 'Compare the bow — the more bowed the curve, the more unequal the distribution.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A curve further from the line of equality shows <strong>greater inequality</strong>.' },

      visualKey: 'lorenzCompare',
      visualLabel: 'COMPARE THE BOW',
      visualEmoji: '\u{1F517}',
      visualCaption: 'Left: Country B bows further from the line, so it is more unequal than Country A. Right: the curve moves closer to the line, so inequality has fallen.',

      causesLabel: 'INTERPRETATION RULES',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F4D0}', head: 'Closer = equal', body: 'A curve near the 45° line is more equal.' },
        { tone: 'rose',   icon: '\u{1F4C9}', head: 'Bowed = unequal', body: 'A deeper bow means more inequality.' },
        { tone: 'blue',   icon: '✖️',         head: 'Curves can cross', body: 'One country can be more equal at one end only.' },
        { tone: 'purple', icon: '\u{1F504}', head: 'Track over time', body: 'Compare the same country across years.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Reading inequality is about comparison, not just spotting a curve.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'A Lorenz curve is strongest when you compare one distribution with another.' },
      examEdge: { title: 'EXAM EDGE', text: 'Always compare explicitly — say which curve is closer to the line of equality and what that means.' }
    },

    /* ============ CARD 5 – The Gini coefficient ============ */
    {
      id: 'ineq-gini',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'The Gini coefficient',
      lede: 'The Gini turns the Lorenz curve into a single inequality number.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Gini = area between the line of equality and the Lorenz curve, divided by the <strong>total area below the line</strong>.' },

      visualKey: 'giniAreas',
      visualLabel: 'FROM CURVE TO NUMBER',
      visualEmoji: '\u{1F517}',
      visualCaption: 'Gini = A ÷ (A + B). The bigger area A is relative to the whole triangle, the more unequal the distribution.',

      flowChart: { svgKey: 'giniScale', label: 'HOW TO READ IT', emoji: '\u{1F517}' },

      causesLabel: 'STRENGTHS AND LIMITS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F30D}', head: 'Easy comparisons', body: 'One number compares countries and years.' },
        { tone: 'blue',   icon: '\u{1F522}', head: 'One summary', body: 'Simple to rank and track over time.' },
        { tone: 'amber',  icon: '\u{1F648}', head: 'Hides detail', body: 'It does not show where inequality sits.' },
        { tone: 'rose',   icon: '\u{1F4C4}', head: 'Data quality', body: 'Only as good as the income data behind it.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'The Gini coefficient is a summary measure of inequality, not the whole story.' },
      examEdge: { title: 'EXAM EDGE', text: 'Quote the scale — 0 is perfect equality, 1 (or 100) is perfect inequality — and say what a higher number means.' }
    },

    /* ============ CARD 6 – The whole story ============ */
    {
      id: 'ineq-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 6',
      title: 'The whole story',
      lede: 'Strong answers define the type of inequality, choose the right measure, interpret it, then evaluate what it shows.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Do not just name a Lorenz curve or Gini coefficient — <strong>explain what it shows</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F4D6}', title: 'Identify the concept', sub: 'What kind of inequality?' },
        { tone: 'green', icon: '\u{1F4B7}', title: 'Income or wealth', sub: 'Pick the right one.' },
        { tone: 'green', icon: '\u{1F4CA}', title: 'Choose Lorenz or Gini', sub: 'Shape or single number.' },
        { tone: 'green', icon: '\u{1F50D}', title: 'Interpret the evidence', sub: 'What does it show?' },
        { tone: 'green', icon: '\u{1F4A1}', title: 'Explain what it suggests', sub: 'Link to living standards.' },
        { tone: 'green', icon: '⚖️',        title: 'Evaluate the limits', sub: 'What it misses.' }
      ],

      causesLabel: 'WHAT EACH MEASURE DOES BEST',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 2,
      causes: [
        { tone: 'purple', icon: '\u{1F4C9}', head: 'Lorenz curve', body: 'Shows the shape of the distribution and is ideal for visual comparison — you can see whether one curve is more bowed.' },
        { tone: 'blue',   icon: '\u{1F522}', head: 'Gini coefficient', body: 'One summary number, useful for quick cross-country or over-time comparisons and rankings.' }
      ],

      causes2Label: 'WHAT THEY MISS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'rose', icon: '\u{1F3E1}', head: 'Living standards', body: 'Inequality is not the same as absolute hardship.' },
        { tone: 'rose', icon: '\u{1F648}', head: 'Hidden patterns', body: 'The same Gini can hide very different distributions.' },
        { tone: 'rose', icon: '\u{1F3E0}', head: 'Wealth missed', body: 'Income measures ignore the stock of wealth.' },
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Not poverty', body: 'A society can be equal but poor, or rich but unequal.' }
      ],

      causes3Label: 'HOW TO WRITE IT',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'blue', icon: '\u{1F4D0}', head: 'Define it', body: 'Name income or wealth inequality.' },
        { tone: 'blue', icon: '\u{1F4CA}', head: 'Describe it', body: 'Use the curve or the Gini number.' },
        { tone: 'blue', icon: '⚖️',        head: 'Compare clearly', body: 'Across countries or over time.' },
        { tone: 'blue', icon: '\u{1F3AF}', head: 'Evaluate', body: 'Add context and state the limits.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The best answers combine accurate measurement with confident interpretation and evaluation.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Inequality is measured through both pictures and numbers — each measure reveals something the other hides.' },
      examEdge: { title: 'EXAM EDGE', text: 'Score top marks by naming the right measure, interpreting it precisely, and then judging its limitations.' }
    }
  ]
};
