/* ============================================================
   ECONOS — content data for sol_wellbeing
   7 cards · revision-tight · exam-edge gems flagged
   Edexcel Theme 2.1.2
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'sol_wellbeing',
  topicNum: '2.1.2',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Standard of Living & Wellbeing',
  estTime: '9-11 minutes',
  goal: 'Move beyond GDP to measure what actually matters',

  intro: {
    heroKey: 'heroGrowth',
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
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'sw-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: standard of living and wellbeing',
      question: 'Evaluate the view that GDP per capita is an inadequate measure of living standards and that governments should use alternative indicators to guide policy. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define GDP per capita and living standards. Introduce the debate: does GDP per capita adequately capture welfare, or do composite and subjective measures provide a more complete picture?',
          hint: 'GDP per capita = total output/population. Measures material living standards. Limitations: ignores distribution, non-market activity, environmental degradation, subjective wellbeing. Alternatives: HDI, GNI, Happy Planet Index, ONS wellbeing framework.',
          model: 'GDP per capita — the value of all goods and services produced in an economy divided by the population — is the most widely used indicator of material living standards. It offers comparability across countries and time, reflects productive capacity, and correlates with key outcomes such as life expectancy and educational attainment. However, it captures only market-priced output and ignores the distribution of income, environmental sustainability, unpaid work, leisure, and subjective wellbeing. This essay evaluates whether these limitations are sufficiently serious to require governments to supplement or replace GDP per capita with richer indicators when setting policy priorities.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — GDP per capita fails to capture distribution and inequality',
          prompt: 'Explain how GDP per capita can rise while median household welfare stagnates or falls if income growth is concentrated at the top of the distribution. Use UK evidence.',
          hint: 'UK 2010-2019: aggregate GDP grew but median real wages stagnant. Gini coefficient rose. GDP per capita hid growing inequality. Simon Kuznets himself warned "welfare of a nation can scarcely be inferred from national income".',
          model: 'The most significant limitation of GDP per capita as a welfare indicator is its insensitivity to income distribution. As a mean rather than a median measure, GDP per capita rises when the incomes of the wealthiest grow rapidly, even if the majority of the population experiences no improvement. In the UK between 2010 and 2019, real GDP per capita grew modestly, yet median real wages were essentially stagnant, food bank usage tripled, and poverty rates among working households rose. The architect of national income accounting, Simon Kuznets, explicitly warned that "the welfare of a nation can scarcely be inferred from a measurement of national income" — a caution that governments largely ignored for decades. The HDI partially addresses this by incorporating life expectancy and education, but composite indices remain susceptible to the same averaging problem.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — GDP ignores environmental sustainability and non-market welfare',
          prompt: 'Explain how GDP counts environmental depletion as positive output and ignores unpaid work, leisure, and subjective wellbeing — all of which matter for true welfare.',
          hint: 'Oil spill → clean-up costs add to GDP. Deforestation → timber adds to GDP but natural capital lost. Unpaid care (£1.24 trillion in UK). Mental health crisis not captured. Happy Planet Index: Costa Rica outranks USA.',
          model: 'GDP systematically mismeasures welfare in two further ways. First, it treats environmental depletion as positive: extracting finite oil reserves, clearing forests for agriculture, and even cleaning up pollution all add to measured output, while the loss of natural capital — which sustains future welfare — is invisible. This violates sustainability: GDP can rise while the foundations of long-term welfare are eroded. Second, GDP excludes non-market welfare: the UK Office for National Statistics estimates the value of unpaid household production (caring, cooking, volunteering) at over £1.24 trillion annually — nearly 60% of measured GDP — yet none appears in national accounts. Mental health, leisure time, and social connection also matter for welfare but are absent from GDP. Alternative measures like the Genuine Progress Indicator (GPI) explicitly adjust for these factors, typically showing a divergence from GDP trends after the 1970s.'
        },
        {
          type: 'counter',
          label: 'Counter — GDP per capita remains the most practical and internationally comparable measure',
          prompt: 'Argue that despite its limitations, GDP per capita is robust, universally comparable, and highly correlated with good outcomes — and that composite measures have their own methodological weaknesses.',
          hint: 'Cross-country comparisons: GDP strongly predicts life expectancy, infant mortality, education outcomes. HDI components are collinear with GDP. Composite indices are subjective in weighting. Governments need a simple, consistent metric for fiscal and monetary policy.',
          model: 'Despite its well-documented limitations, GDP per capita retains important advantages. It is universally comparable across 190+ countries, regularly updated, and robust to political manipulation. Crucially, it correlates strongly with human development outcomes: in cross-country data, GDP per capita explains approximately 80% of the variation in life expectancy, infant mortality, and educational attainment — suggesting it captures much of what matters for welfare. The HDI\'s three components (income, health, education) are themselves highly collinear with GDP per capita, meaning the composite index adds limited information. Composite indices also embed subjective value judgements in their weightings — how much more does an extra year of life expectancy matter than an extra year of schooling? — that are not grounded in revealed preference and can vary arbitrarily between researchers.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — The right measure depends on the policy question',
          prompt: 'Evaluate whether different indicators are appropriate for different policy purposes, and assess the practical feasibility of government adopting multi-dimensional wellbeing frameworks.',
          hint: 'GDP: monetary policy, fiscal sustainability, international investment. HDI: human capital investment priorities. ONS wellbeing: social policy, mental health, inequality. New Zealand Wellbeing Budget (2019) as example of multi-framework government.',
          model: 'A nuanced evaluation recognises that no single indicator can serve all policy purposes, and the choice of measure should be dictated by the policy question at hand. GDP per capita remains the most appropriate guide for monetary policy (output gap), fiscal sustainability (debt-to-GDP), and international competitiveness. For human capital investment priorities, HDI comparisons reveal where education and health are underperforming relative to income. For social policy — housing, mental health, community, environment — the ONS\'s national wellbeing framework and subjective wellbeing data provide insights that GDP cannot. New Zealand\'s 2019 Wellbeing Budget explicitly allocated resources based on multi-dimensional wellbeing indicators, embedding five government priorities beyond GDP. This approach represents a practical model for governments seeking to move beyond GDP without abandoning its analytical utility entirely.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Reach a judgement: is GDP per capita inadequate, and should governments adopt alternative indicators?',
          hint: 'GDP is inadequate as a sole welfare measure but remains indispensable as a component. Governments should use a dashboard of indicators, with GDP for economic management and composite/subjective measures for social policy. Commit to a conditional recommendation.',
          model: 'In conclusion, GDP per capita is inadequate as a sole measure of living standards because it systematically ignores distribution, environmental sustainability, non-market welfare, and subjective wellbeing — all of which matter for policy. However, it is not without value: its universality, precision, and correlation with human development outcomes make it indispensable for economic management. The appropriate response is not to replace GDP but to supplement it with a dashboard of indicators — HDI for human development, the ONS wellbeing framework for social policy, and adjusted net savings for sustainability. Governments that set targets exclusively around GDP risk optimising for a narrow dimension of welfare at the expense of health, equity, and environmental sustainability. The UK government\'s adoption of ONS wellbeing reporting alongside GDP represents a step in the right direction, though embedding wellbeing fully in budget decisions remains a work in progress.'
        }
      ]
    }
  ]
};
