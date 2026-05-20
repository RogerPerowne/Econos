/* ============================================================
   ECONOS — content data for sol_wellbeing
   7 cards · revision-tight · exam-edge gems flagged
   Edexcel Theme 2.1.2
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'sol_wellbeing',
  topicNum: '2.1.2',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Standard of Living',
  estTime: '9-11 minutes',
  goal: 'Move beyond GDP to measure what actually matters',

  intro: {
    heroKey: 'heroWellbeing',
    summary: "GDP is the starting point, not the answer. Standard of living questions demand a richer toolkit — HDI, composite measures, inequality adjustments, and wellbeing evidence. These cards cover all of them.",
    doInThis: 'Recap HDI construction, Kuznets curve, limitations of composite measures, and the subjective wellbeing debate.',
    outcomes: [
      'Construct and interpret the HDI',
      'Apply the Kuznets curve argument',
      'Evaluate composite vs single-dimension welfare measures'
    ],
    tip: 'These cards are revision, not first-time learning. They cue what you already know and flag the gems that lift answers from B to A*.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards',    state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 — Framing: three dimensions of welfare ----- */
    {
      id: 'welfare-framing',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Standard of living: three dimensions',
      lede: 'Material living standards are about income and consumption. But welfare is broader — health, education, environment, security. Different measures capture different dimensions.',
      branches: [
        { tone: 'green',  label: 'Material living standards',  sub: 'Income, consumption, wealth, access to goods and services. GDP per capita (PPP) is the primary proxy — but limited to what can be bought.' },
        { tone: 'amber',  label: 'Human development',          sub: 'Health (life expectancy), education (years of schooling, literacy), and income combined. The HDI captures this three-way view.' },
        { tone: 'blue',   label: 'Subjective wellbeing',       sub: "Self-reported life satisfaction, happiness, and sense of purpose. Surveys like the World Happiness Report measure this — often diverging from income trends." }
      ],
      examEdge: {
        title: 'GDP vs HDI — know when to switch',
        text: 'When exam questions ask about <strong>‘living standards’ or ‘welfare’</strong>, switch from GDP to HDI or composite measures. GDP per capita is a starting point, not an endpoint. Naming the limitation and the superior measure in the same sentence is an A* move.'
      },
      keyTakeaway: {
        title: 'Why this framing matters',
        text: 'Development economics questions routinely pit GDP growth against welfare outcomes. A country can have rising GDP but worsening health, widening inequality, or environmental degradation. The ability to hold these tensions together is what examiners reward.'
      }
    },

    /* ----- CARD 2 — HDI: construction and interpretation ----- */
    {
      id: 'hdi',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'The Human Development Index (HDI)',
      lede: 'Published annually by the UN since 1990. Scores countries 0–1 across three equally-weighted dimensions. The world’s most-used composite welfare measure.',
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'Health dimension',
          text: '<strong>Life expectancy at birth.</strong> Captures mortality, access to healthcare, nutrition, sanitation. Ranges from ~50 years (low HDI) to ~85 years (high HDI). Min = 20, Max = 85 for normalisation.'
        },
        {
          num: '2',
          tone: 'blue',
          title: 'Education dimension',
          text: '<strong>Mean years of schooling</strong> (adults) + <strong>expected years of schooling</strong> (children). Captures both current and future human capital. Weighted 2:1 for adults vs children in current formula.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Income dimension',
          text: '<strong>GNI per capita (PPP, log scale)</strong>. Uses the natural log because each extra dollar matters less as income rises. The diminishing marginal utility of income is baked into the formula.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'Composite score',
          text: '<strong>HDI = (Health index \xd7 Education index \xd7 Income index)^(1/3)</strong> — geometric mean of the three sub-indices. Using a geometric mean means low performance in ANY dimension drags down the score.'
        }
      ],
      examEdge: {
        title: 'Geometric mean vs arithmetic mean',
        text: 'The geometric mean means you <strong>cannot compensate</strong> for low health with high income. An A* answer states: ‘Unlike a simple average, the geometric mean penalises imbalances — a country with high income but poor health cannot hide its human development deficit.’'
      },
      connection: {
        title: 'HDI in practice',
        text: 'Norway consistently tops the HDI (>0.95). Niger is often at the bottom (<0.40). The UK scores ~0.93. Knowing a few reference points lets you use HDI as real evidence rather than abstract theory.'
      }
    },

    /* ----- CARD 3 — Limitations of GDP as welfare proxy ----- */
    {
      id: 'gdp-welfare-limits',
      template: 'diagnose',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'GDP: what it misses for welfare',
      lede: 'GDP per capita is necessary but not sufficient. Here are the standard limitations examiners expect you to apply.',
      table: {
        headers: ['Limitation', 'What GDP misses', 'Better measure'],
        rows: [
          ['Income distribution', 'Equal GDP can mask extreme inequality', 'Gini coefficient, median income'],
          ['Environmental costs', 'Pollution counted as positive output', 'Green GDP, Genuine Progress Indicator'],
          ['Informal economy', 'Unpaid work, subsistence farming', 'Larger in developing countries; MPI'],
          ['Composition of output', 'Military = healthcare in GDP terms', 'HDI, GPI'],
          ['Life expectancy / health', 'A sick wealthy country can have high GDP', 'HDI health sub-index'],
          ['Leisure and stress', 'Long working hours = higher GDP', 'Life satisfaction surveys']
        ]
      },
      scenarios: {
        title: 'Apply the limitation',
        items: [
          {
            label: 'A',
            text: 'China\'s GDP has grown 7%+ per year for decades, but inequality (Gini) has widened sharply. What does this tell us?',
            answer: 'GDP growth does not imply welfare gains for all — the income distribution limitation. HDI or median income would better capture whether ordinary citizens benefited.',
            tone: 'amber'
          },
          {
            label: 'B',
            text: 'Saudi Arabia has high GDP per capita (PPP) but scores significantly lower on the HDI than expected. Why?',
            answer: 'High income does not automatically translate to health and education gains. HDI penalises this through the geometric mean — Saudi Arabia’s education and gender equality scores drag down its HDI.',
            tone: 'blue'
          },
          {
            label: 'C',
            text: 'Bolivia has a large informal economy of subsistence farming and home production. Why does GDP understate welfare?',
            answer: 'GDP excludes non-marketed production. Subsistence output and informal work have real welfare value not captured in official statistics — particularly relevant in lower-income countries.',
            tone: 'green'
          }
        ]
      },
      examEdge: {
        title: 'Always pair limitation with evidence',
        text: "A* answers don't list limitations — they <strong>apply them to the specific context</strong>. If the question is about Nigeria, cite informality. If it's about the UAE, cite income distribution and gender gaps. Generic lists score C; applied analysis scores A*."
      }
    },

    /* ----- CARD 4 — Kuznets curve ----- */
    {
      id: 'kuznets',
      template: 'cause',
      tone: 'blue',
      bannerLabel: 'The growth-inequality relationship',
      diagramKey: 'kuznetsCurve',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'The Kuznets curve',
      lede: "Simon Kuznets' 1955 hypothesis: as countries develop, inequality first rises then falls. The inverted-U shape that organises every development/inequality essay.",
      diagramCaption: 'Kuznets curve: inequality rises then falls as per-capita income grows.',
      causes: {
        title: 'The logic of the curve',
        items: [
          'Early industrialisation: workers move from low-wage farming to higher-wage manufacturing — gap widens',
          'Modern sector expands: more workers benefit from higher wages — inequality stabilises',
          'Services and redistribution: richer countries can afford welfare states, education — inequality falls',
          'Prediction: all countries will eventually see inequality fall as they develop'
        ]
      },
      hallmarks: {
        title: 'Evidence and counter-evidence',
        items: [
          'UK and other early-industrialised nations followed the curve broadly',
          'East Asian ‘tigers’ (South Korea, Taiwan) achieved growth WITH equality — contradicts the curve',
          'US and UK saw inequality RISE in the 1980s-2000s despite high income — the ‘second hump’',
          'Globalisation, skill-biased technological change explain the divergence from the original curve'
        ]
      },
      ukExamples: {
        title: 'Environmental Kuznets Curve (EKC)',
        text: '<strong>An extension:</strong> the same inverted-U relationship applies to pollution — as countries grow richer, they first pollute more, then clean up. Evidence is mixed: some pollutants follow the EKC (local air quality), others do not (CO₂). A* answers note the distinction between local and global pollutants.'
      },
      examEdge: {
        title: 'Criticise and evaluate',
        text: 'Never present the Kuznets curve as established fact. A* answers note: (1) the East Asian counterexample, (2) rising inequality in rich countries, (3) the <strong>conditional convergence</strong> argument — institutions and policies mediate the relationship. The curve is a hypothesis, not a law.'
      },
      policy: {
        title: 'Policy implication',
        text: 'If the Kuznets curve holds, governments should simply wait for development to reduce inequality. Critics argue this ‘trickle-down’ view justifies inaction. The counter-argument: redistribution policies can achieve the inequality-reducing phase faster and with less social cost.'
      }
    },

    /* ----- CARD 5 — Composite vs single measures ----- */
    {
      id: 'composite-measures',
      template: 'paired',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Composite vs single-dimension measures',
      lede: 'Should we collapse welfare into one number or track multiple dimensions? Both approaches have defenders and critics.',
      pairs: [
        {
          tone: 'green',
          label: 'Composite measures (e.g. HDI, MPI)',
          drivers: [
            'Capture multiple dimensions simultaneously',
            'Avoid over-reliance on income alone',
            'Useful for policy targeting in multiple dimensions',
            'HDI, IHDI (inequality-adjusted HDI), MPI (Multidimensional Poverty Index)'
          ],
          example: '<strong>IHDI</strong> adjusts HDI for within-country inequality in each dimension. The gap between HDI and IHDI reveals how much development is lost to inequality — large in South Africa, small in Denmark.'
        },
        {
          tone: 'amber',
          label: 'Single-dimension measures',
          drivers: [
            'Simpler and easier to communicate to policymakers',
            'GDP per capita (income), life expectancy (health), literacy rate (education)',
            'Less subject to arbitrary weighting choices',
            'Easier to track over time and identify causes'
          ],
          example: '<strong>Life expectancy</strong> as a single measure: clearly dropped during COVID-19, easy to attribute causally. The HDI’s composite score makes causal attribution harder.'
        }
      ],
      examEdge: {
        title: 'Weighting is a value judgment',
        text: "A* answers flag that composite indices <strong>embed value judgments</strong>: why weight health, education, and income equally? Why not weight inequality? Why not include security or political freedom? There's no 'correct' weighting — just different judgments about what matters."
      },
      policy: {
        title: 'The OECD Better Life Index',
        text: 'Lets users choose their own weights across 11 dimensions (housing, income, health, education, environment, community, civic engagement, work-life balance, safety, life satisfaction). Showing you know this signals genuine engagement with the measurement debate.'
      }
    },

    /* ----- CARD 6 — Happiness economics and subjective wellbeing ----- */
    {
      id: 'happiness',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Happiness economics and subjective wellbeing',
      lede: "Since Easterlin (1974), economists have tried to reconcile a puzzle: rising incomes don't always raise reported happiness. The evidence is richer — and messier — than first appears.",
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'Easterlin paradox',
          text: 'Within a country, richer people are happier. But <strong>as countries get richer over time, average happiness doesn’t rise</strong>. Possible explanation: relative income (comparing yourself to others) matters more than absolute income.'
        },
        {
          num: '2',
          tone: 'blue',
          title: 'Hedonic adaptation',
          text: 'People adapt quickly to higher income and material gains. A pay rise improves happiness temporarily, then reverts to baseline. The ‘hedonic treadmill’ — you keep running but never arrive.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Satiation point',
          text: 'Research (Kahneman, later revised by Killingsworth) finds happiness keeps rising with income, but the relationship is <strong>diminishing and logarithmic</strong> — consistent with economists’ standard diminishing marginal utility assumption.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'Non-income determinants',
          text: 'Social connection, health, sense of purpose, political freedom, and security predict happiness more strongly than income above a threshold. Bhutan’s Gross National Happiness index formalises this.'
        }
      ],
      examEdge: {
        title: 'The Easterlin paradox is exam gold',
        text: 'Citing <strong>Easterlin (1974)</strong> in a wellbeing essay is an immediate A* signal — it shows you know the academic debate, not just the textbook definition. The paradox suggests GDP growth alone cannot guarantee welfare improvement even at the aggregate level.'
      },
      connection: {
        title: 'Policy implication',
        text: 'If relative income matters more than absolute income (social comparison), redistribution raises aggregate happiness even without growth — because the losers in relative terms are fewer. This challenges pure growth-focused policy.'
      }
    },

    /* ----- CARD 7 — UK wellbeing in practice ----- */
    {
      id: 'uk-wellbeing',
      template: 'deflation',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Measuring wellbeing in practice: the UK',
      lede: "The UK measures national wellbeing formally — and the results often tell a different story to GDP. This is the real-world evidence base for wellbeing questions.",
      mechanismsTitle: 'UK wellbeing frameworks you should know',
      mechanisms: [
        {
          icon: '🏴',
          title: 'ONS Wellbeing Framework',
          text: 'The UK Office for National Statistics tracks <strong>10 domains</strong>: personal wellbeing, relationships, health, what we do, where we live, personal finance, economy, education and skills, governance, and environment. Published quarterly.'
        },
        {
          icon: '📊',
          title: 'Personal wellbeing scores',
          text: 'ONS asks four questions: life satisfaction, sense of worthwhile, happiness yesterday, anxiety yesterday. All scored 0–10. Average UK life satisfaction ~7.3 (2023). Fell sharply during COVID, particularly for young adults.'
        },
        {
          icon: '🏆',
          title: 'World Happiness Report',
          text: 'UK typically ranks in the top 15-20 globally. Nordic countries (Finland, Denmark) dominate the top spots due to social connection, trust, and low inequality — not just income.'
        },
        {
          icon: '⚠️',
          title: 'Mental health and the gap',
          text: 'UK GDP per capita grew steadily 2010–20, but recorded mental health problems rose — especially among young people. This divergence between GDP and wellbeing is powerful exam evidence.'
        }
      ],
      examples: {
        title: 'Evidence to use in essays',
        items: [
          { period: 'Pandemic (2020)', text: 'UK GDP fell 11% — but social connection and community support improved for some groups. Wellbeing impacts were unequal by age, income, and housing tenure.' },
          { period: 'Cost of living (2022-23)', text: 'Real wages fell and anxiety scores rose sharply — even as headline unemployment remained low. GDP did not capture the welfare deterioration.' },
          { period: 'Post-austerity (2010-19)', text: 'ONS wellbeing surveys showed stagnant or falling scores for low-income households even as aggregate GDP grew — classic distribution failure.' }
        ]
      },
      examEdge: {
        title: 'GDP and wellbeing can diverge — cite UK evidence',
        text: "The strongest A* answers bring in <strong>specific UK wellbeing data</strong>: ONS scores, mental health trends, the COVID divergence. It signals you're not just reciting theory — you're applying it to real observed patterns."
      },
      bridge: {
        title: 'Where to next',
        text: 'Inflation Measurement & Costs builds on the price level concepts introduced here — how we measure the cost of living, and who gains and loses from inflation.'
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
