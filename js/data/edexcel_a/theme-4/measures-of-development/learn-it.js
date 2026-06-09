/* ============================================================
   ECONOS – Measures of Development (Edexcel A 4.3.1)
   6 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   What development means, the three HDI dimensions, how HDI is
   built, HDI's strengths and limits, the wider indicator dashboard,
   and the whole story.

   New HTML visuals:
     - developmentMeaningHub (Card 1 — health/education/living-standards hub)
     - hdiBuild              (Card 3 — three indices → geometric mean → score)
     - developmentDashboard  (Card 5 — the wider indicator dashboard hub)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'measures-of-development',
  topicNum: '4.3.1',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Measures of Development',
  estTime: '18 min',
  goal: 'Define development broadly, build and read the Human Development Index, weigh its strengths and limits, and use a wider dashboard of indicators',

  intro: {
    heroKey: 'heroDevelopment',
    summary: 'Development is broader than output — it is about whether people live longer, healthier, better-educated lives with higher material living standards, not just how much an economy produces. This deck defines development as multidimensional, then builds the Human Development Index (HDI), which combines three dimensions — health (life expectancy), education (mean and expected years of schooling) and living standards (GNI per capita, PPP-adjusted) — by converting each into an index from 0 to 1 and combining them with a geometric mean. It weighs HDI honestly: broader and more comparable than GDP alone, but blind to inequality, the environment, freedom and data quality. It then widens out to the full development dashboard — income, social and quality-of-life indicators — and closes on how to write a balanced, well-evidenced answer.',
    doInThis: 'Define development as more than output. Set out the three HDI dimensions and how each is measured. Build HDI from its indices using a geometric mean and read the 0–1 score. Evaluate HDI\'s strengths and limitations. Use a wider dashboard of indicators, and structure a balanced answer.',
    outcomes: [
      'Define development as multidimensional',
      'Name the three HDI dimensions',
      'Build and read the HDI score',
      'Evaluate the strengths and limits of HDI',
      'Use a wider dashboard of indicators',
      'Structure a balanced development answer'
    ],
    tip: 'Define development broadly first — health, education and living standards — then explain how each is measured before evaluating HDI.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 18 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'mod-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'Measures of development — the big picture',
      lede: 'Development is broader than output — it is about health, education and living standards.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Development asks how well people <strong>live</strong>, not just how much an economy produces.' },

      visualKey: 'developmentMeaningHub',
      visualLabel: 'WHAT DEVELOPMENT MEANS',
      visualEmoji: '\u{1F517}',

      causesLabel: 'WHY WE MEASURE IT',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'blue',   icon: '\u{1F30D}', head: 'Compare countries', body: 'See who is more developed.' },
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Track progress', body: 'Judge change over time.' },
        { tone: 'purple', icon: '\u{1F9ED}', head: 'Guide policy', body: 'Spot weak areas that need attention.' },
        { tone: 'amber',  icon: '\u{1F680}', head: 'Go beyond GDP', body: 'Income alone misses too much.' }
      ],

      causes2Label: 'A QUICK PREVIEW OF THE TOOLS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green',  icon: '\u{1F3C5}', head: 'HDI', body: 'A composite index of three dimensions.' },
        { tone: 'amber',  icon: '\u{1F4B7}', head: 'Income measures', body: 'GDP or GNI per capita.' },
        { tone: 'rose',   icon: '❤️', head: 'Health indicators', body: 'Life expectancy, infant mortality.' },
        { tone: 'purple', icon: '\u{1F393}', head: 'Education indicators', body: 'Literacy and years of schooling.' },
        { tone: 'blue',   icon: '\u{1F4CA}', head: 'Wider indicators', body: 'Poverty, inequality and access.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'No single number captures development perfectly — economists use a <strong>range of measures</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Development is multidimensional — a country can grow richer without everyone living much better.' },
      examEdge: { title: 'EXAM EDGE', text: 'Start by defining development broadly, then explain how economists measure health, education and living standards.' }
    },

    /* ============ CARD 2 – HDI: the three dimensions ============ */
    {
      id: 'mod-three-dimensions',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'HDI — the three dimensions',
      lede: 'The Human Development Index combines health, education and living standards into one development measure.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'HDI matters because development is <strong>wider than income alone</strong>.' },

      causesLabel: 'THE THREE DIMENSIONS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'rose',   icon: '❤️', head: 'Health', body: 'Measured by <strong>life expectancy at birth</strong> — longer, healthier lives.' },
        { tone: 'purple', icon: '\u{1F393}', head: 'Education', body: 'Measured by <strong>mean and expected years of schooling</strong>.' },
        { tone: 'amber',  icon: '\u{1F3E0}', head: 'Living standards', body: 'Measured by <strong>GNI per capita</strong>, adjusted for PPP.' }
      ],

      causes2Label: 'WHY THESE THREE?',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue',   icon: '\u{1F4CA}', head: 'Broader than GDP', body: 'Considers far more than income.' },
        { tone: 'green',  icon: '\u{1F465}', head: 'People-centred', body: 'Focuses on real opportunities and well-being.' },
        { tone: 'purple', icon: '\u{1F30D}', head: 'Comparable', body: 'Uses a common method and scale.' },
        { tone: 'amber',  icon: '⭐', head: 'Quality of life', body: 'Reflects outcomes that people value.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Each dimension is converted into an index on a scale from 0 to 1 before being combined into the final HDI.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'HDI combines how long people live, how much they learn, and how well they can afford to live.' },
      examEdge: { title: 'EXAM EDGE', text: 'Name the three HDI dimensions precisely and link each one to its measure.' }
    },

    /* ============ CARD 3 – How HDI is built ============ */
    {
      id: 'mod-how-hdi-built',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 6',
      title: 'How HDI is built',
      lede: 'Raw data is turned into three dimension indices and then combined into a final score.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A higher HDI means higher human development, with scores running from <strong>0 to 1</strong>.' },

      visualKey: 'hdiBuild',
      visualLabel: 'THE BUILD PROCESS',
      visualEmoji: '\u{1F517}',

      causesLabel: 'INSIDE THE EDUCATION MEASURE',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 2,
      causes: [
        { tone: 'purple', icon: '\u{1F9D1}‍\u{1F3EB}', head: 'Mean years', body: 'The schooling adults have already completed.' },
        { tone: 'purple', icon: '\u{1F9D2}', head: 'Expected years', body: 'The schooling a child can expect to receive.' }
      ],

      causes2Label: 'HOW TO READ THE SCORE',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F947}', head: 'Closer to 1', body: 'Higher human development.' },
        { tone: 'blue',  icon: '\u{1F30D}', head: 'Compare countries', body: 'Rank and band economies.' },
        { tone: 'amber', icon: '\u{1F4C8}', head: 'Compare over time', body: 'Track progress in development.' },
        { tone: 'purple', icon: '\u{1F4CA}', head: 'HDI bands', body: 'Low, medium, high and very high.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'HDI uses GNI, not GDP, and adjusts for price differences through <strong>PPP</strong> — so living standards are realistic.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'HDI turns three dimensions of development into one comparable score between 0 and 1.' },
      examEdge: { title: 'EXAM EDGE', text: 'Explain the build process clearly — raw data, three dimension indices, then one final HDI score.' }
    },

    /* ============ CARD 4 – Strengths and limitations ============ */
    {
      id: 'mod-strengths-limits',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 6',
      title: 'HDI — strengths and limitations',
      lede: 'HDI is a useful development measure, but like all averages it leaves some things out.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The best evaluation is balanced — HDI is better than GDP alone, but it is <strong>not the whole story</strong>.' },

      causesLabel: 'WHY HDI IS USEFUL',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F4CA}', head: 'Broader than GDP', body: 'Includes health and education, not just income.' },
        { tone: 'green', icon: '\u{1F9E9}', head: 'Simple composite', body: 'Combines key dimensions into one score.' },
        { tone: 'green', icon: '\u{1F30D}', head: 'Easy to compare', body: 'Same method and scale for all countries.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Tracks change', body: 'Shows progress over time.' }
      ],

      causes2Label: 'WHAT HDI MISSES',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F465}', head: 'Hides inequality', body: 'One average can mask wide gaps.' },
        { tone: 'rose', icon: '\u{1F343}', head: 'Ignores environment', body: 'No account of pollution or depletion.' },
        { tone: 'rose', icon: '\u{1F54A}️', head: 'Misses freedom', body: 'Rights, security and happiness left out.' },
        { tone: 'rose', icon: '\u{1F4C4}', head: 'Data and weighting', body: 'Choices can affect rankings and results.' }
      ],

      causes3Label: 'HOW TO JUDGE IT',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'blue', icon: '\u{1F3C1}', head: 'Starting point', body: 'Use HDI to open, not close, the analysis.' },
        { tone: 'blue', icon: '➕', head: 'Add measures', body: 'Bring in inequality, poverty and more.' },
        { tone: 'blue', icon: '\u{1F441}️', head: 'Mind averages', body: 'A national average can hide a lot.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'One national average can hide major <strong>regional and social differences</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'HDI is a strong headline measure because it averages so much, but that average also hides a lot.' },
      examEdge: { title: 'EXAM EDGE', text: 'For evaluation, praise HDI for breadth and comparability, then criticise it for what the average conceals.' }
    },

    /* ============ CARD 5 – Other indicators ============ */
    {
      id: 'mod-other-indicators',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'Other indicators of development',
      lede: 'Economists use a wider dashboard because development has many dimensions.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'No single indicator is enough — <strong>each measure reveals something different</strong>.' },

      visualKey: 'developmentDashboard',
      visualLabel: 'THE DEVELOPMENT DASHBOARD',
      visualEmoji: '\u{1F517}',

      causesLabel: 'WHAT EACH TYPE TELLS US',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'amber',  icon: '\u{1F4B7}', head: 'Income measures', body: 'Economic output and material resources.' },
        { tone: 'rose',   icon: '❤️', head: 'Social indicators', body: 'Human well-being, health and education.' },
        { tone: 'blue',   icon: '\u{1F30D}', head: 'Quality-of-life', body: 'Living conditions, access and inclusion.' }
      ],

      causes2Label: 'WHY A DASHBOARD BEATS ONE NUMBER',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green',  icon: '\u{1F5BC}️', head: 'Richer picture', body: 'Captures more dimensions of development.' },
        { tone: 'amber',  icon: '⚖️', head: 'Reveals trade-offs', body: 'Gains in one area can mean losses in another.' },
        { tone: 'purple', icon: '\u{1F50D}', head: 'Spots weaknesses', body: 'Shows where development is held back.' },
        { tone: 'blue',   icon: '\u{1F3DB}️', head: 'Better policy', body: 'Targets resources where they are needed.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Some countries may have rising incomes without equal gains in health, education or basic access.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Development is best judged with a basket of indicators, not one statistic alone.' },
      examEdge: { title: 'EXAM EDGE', text: 'Use HDI as the headline measure, then strengthen your answer with other indicators.' }
    },

    /* ============ CARD 6 – The whole story ============ */
    {
      id: 'mod-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 6',
      title: 'The whole story',
      lede: 'Strong answers define development broadly, use HDI carefully, and then evaluate it with wider indicators.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The best judgement is that development is <strong>multidimensional</strong>, so measurement must be broad and balanced.' },

      flowTitle: 'THE ANSWER CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F4D6}', title: 'Define development', sub: 'Broad and multidimensional.' },
        { tone: 'green', icon: '\u{1F9ED}', title: 'Explain HDI dimensions', sub: 'Health, education, living standards.' },
        { tone: 'green', icon: '\u{1F9EE}', title: 'Show how HDI is built', sub: 'Indices into one score.' },
        { tone: 'green', icon: '\u{1F44D}', title: 'Use HDI strengths', sub: 'Broad and comparable.' },
        { tone: 'green', icon: '⚖️', title: 'Evaluate its limits', sub: 'What the average hides.' },
        { tone: 'green', icon: '\u{1F4CA}', title: 'Bring in wider indicators', sub: 'A fuller picture.' }
      ],

      causesLabel: 'COMMON EVALUATION POINTS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'blue', icon: '\u{1F465}', head: 'Averages hide gaps', body: 'A single figure can mask inequality.' },
        { tone: 'blue', icon: '\u{1F9E9}', head: 'No measure is complete', body: 'Every indicator leaves something out.' },
        { tone: 'blue', icon: '\u{1F4C8}', head: 'Compare over time', body: 'Trends are often more useful than levels.' },
        { tone: 'blue', icon: '\u{1F30D}', head: 'Context matters', body: 'Judge development against the country.' }
      ],

      causes2Label: 'HOW TO WRITE IT',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F4D0}', head: 'Define the measure', body: 'Start with a clear, broad definition.' },
        { tone: 'green', icon: '\u{1F50D}', head: 'Interpret the data', body: 'Explain the figures and what they show.' },
        { tone: 'green', icon: '\u{1F30D}', head: 'Compare clearly', body: 'Across countries and over time.' },
        { tone: 'green', icon: '⚖️', head: 'Weigh strengths & limits', body: 'Reach a balanced judgement.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'High GDP per head does not automatically mean high development on every dimension.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Development is multidimensional — measure it broadly, use HDI carefully, and evaluate with wider indicators.' },
      examEdge: { title: 'EXAM EDGE', text: 'Top answers explain HDI clearly but never stop there — they compare, interpret and evaluate.' }
    }
  ]
};
