/* ============================================================
   ECONOS — content data for growth_measure
   8 cards · Edexcel Theme 2.1.1
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'growth_measure',
  topicNum: '2.1',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Measures of Economic Performance',
  estTime: '10-12 minutes',
  goal: 'Understand how GDP is measured, what it misses, and how to read growth data like an examiner.',

  intro: {
    heroKey: 'heroGrowth',
    summary: 'GDP is the headline number every policymaker watches. But knowing its limits — and when to switch to GNI, real values, or PPP — is what separates A* answers.',
    doInThis: 'Explore the four macro indicators, the three GDP measurement approaches, real vs nominal, GNP/GNI, PPP, output gaps, causes of growth, and the limitations of GDP as a welfare measure.',
    outcomes: [
      'Explain GDP and its three measurement approaches',
      'Distinguish real from nominal GDP and calculate GDP per capita',
      'Apply GNI and PPP correctly in international comparisons',
      'Identify positive and negative output gaps and their consequences',
      'Evaluate GDP as a measure of welfare using HDI and alternatives'
    ],
    tip: 'These cards are revision, not first-time learning. They cue what you already know and flag the gems that lift answers from B to A*.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards',    state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 — The macro dashboard ----- */
    {
      id: 'macro-dashboard',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'The macro dashboard',
      lede: 'Economists judge how well an economy is doing using four headline measures. Each tells us something different — and together they give the big picture.',
      branches: [
        {
          tone: 'green',
          label: 'Economic growth (GDP)',
          sub: 'The % change in real GDP over a period. Higher growth means more goods and services, rising incomes and improved living standards.'
        },
        {
          tone: 'amber',
          label: 'Inflation (CPI / RPI)',
          sub: 'The % change in the general price level. High inflation erodes purchasing power and creates uncertainty for businesses and households.'
        },
        {
          tone: 'blue',
          label: 'Unemployment (ILO / claimant count)',
          sub: 'The % of the labour force that is unemployed. High unemployment means wasted resources and personal hardship.'
        },
        {
          tone: 'purple',
          label: 'Balance of payments (current account)',
          sub: 'Net trade in goods, services, income and transfers. A persistent deficit signals reliance on foreign capital and puts pressure on the currency.'
        }
      ],
      examEdge: {
        title: 'Show how the measures interact',
        text: 'In essays and data-response questions, top marks come from explaining <strong>trade-offs</strong>, not just describing each indicator in isolation. Faster growth can push up inflation. Lower unemployment can worsen the current account. Anti-inflation policy can slow growth and raise unemployment.'
      },
      keyTakeaway: {
        title: 'Policy is about balance',
        text: 'Improving one macroeconomic target can worsen another. This is the central challenge for policymakers — and the central evaluation point in every macro essay. There are no free lunches.'
      }
    },

    /* ----- CARD 2 — What is GDP? ----- */
    {
      id: 'gdp-approaches',
      template: 'framing',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'What is GDP?',
      lede: 'GDP — Gross Domestic Product — is the <strong>total market value</strong> of all <strong>final</strong> goods and services produced <strong>within</strong> an economy in a given period. Three approaches, one answer.',
      branches: [
        {
          tone: 'green',
          label: '① Output approach',
          sub: 'Sum value added at each stage of production. <strong>GDP = Σ (Value added)</strong>. Agriculture + manufacturing + services value added = GDP.'
        },
        {
          tone: 'blue',
          label: '② Expenditure approach',
          sub: 'Sum total spending on final output. <strong>GDP = C + I + G + (X − M)</strong>. C = Consumption \xb7 I = Investment \xb7 G = Government spending \xb7 (X−M) = Net exports.'
        },
        {
          tone: 'amber',
          label: '③ Income approach',
          sub: 'Sum all incomes earned in production. <strong>GDP = W + R + I + P</strong>. Wages + Rent + Interest + Profits (before taxes and subsidies on products).'
        }
      ],
      examEdge: {
        title: 'Exam trap: intermediate goods and double-counting',
        text: 'GDP counts only <strong>final</strong> goods and services. Example — flour (\xa31) is used to make bread (\xa33). Count the bread (\xa33) in GDP, not both. The bread price already includes the flour value. Including both would overstate GDP by \xa31.'
      },
      keyTakeaway: {
        title: 'Why all three approaches give the same figure',
        text: 'Every pound of output is produced somewhere (output), paid for by someone (expenditure), and creates income for someone else (income). They are three views of the same circular flow — all three should give the same GDP in theory. Citing this identity signals analytical depth.'
      }
    },

    /* ----- CARD 3 — Real vs nominal GDP ----- */
    {
      id: 'real-vs-nominal',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Real vs nominal GDP',
      lede: "Nominal GDP rises when output rises AND when prices rise. Real GDP strips out inflation — and it’s the only number that tells you if people are actually better off.",
      mechanisms: [
        {
          num: '1',
          tone: 'amber',
          title: 'Nominal GDP',
          text: 'GDP measured at <strong>current prices</strong>. Rises with both output growth and price inflation. Can give a misleadingly rosy picture during high inflation. Useful for budgets, tax receipts and debt measured in today’s \xa3.'
        },
        {
          num: '2',
          tone: 'green',
          title: 'Real GDP',
          text: 'GDP measured at <strong>constant base-year prices</strong>. Removes the inflation effect. Real GDP growth = true increase in the volume of output. Best for judging living standards, growth and productivity over time.'
        },
        {
          num: '3',
          tone: 'blue',
          title: 'GDP deflator',
          text: 'The price index used to convert nominal to real. <strong>Real GDP = (Nominal GDP \xf7 GDP deflator) \xd7 100</strong>. Example: Nominal GDP \xa32,200bn \xf7 deflator 125 \xd7 100 = Real GDP \xa31,760bn (in base-year prices).'
        },
        {
          num: '4',
          tone: 'purple',
          title: 'GDP per capita',
          text: '<strong>Real GDP \xf7 Population</strong>. The go-to measure for average living standards. Example: \xa31,760bn \xf7 66m people = \xa326,667 per person. A growing GDP with a faster-growing population means falling GDP per capita — the trap most students miss.'
        }
      ],
      examEdge: {
        title: 'Always write “real”',
        text: 'When asked about economic growth or living standards, <strong>always specify real GDP</strong>. Writing “GDP rose” without “real” signals you haven’t adjusted for inflation. Essays want “real GDP” or “real GDP per capita” — one word is worth marks.'
      },
      connection: {
        title: 'The core distinction',
        text: 'If prices rise 5% and nominal GDP rises 5%, real GDP is unchanged — no actual growth has occurred. This is the mistake students make when conflating price rises with genuine economic expansion.'
      }
    },

    /* ----- CARD 4 — GNP, GNI and comparing economies ----- */
    {
      id: 'gnp-gni-ppp',
      template: 'paired',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'GNP, GNI and comparing economies',
      lede: 'GDP measures output <em>within</em> a country’s borders. GNP/GNI measures income <em>of</em> a country’s residents — wherever in the world they earn it. PPP adjusts for price differences so cross-country comparisons are fair.',
      pairs: [
        {
          tone: 'green',
          label: 'GDP — Gross Domestic Product',
          drivers: [
            'Measures output produced within the geographic borders',
            'Includes production by foreign-owned firms operating in the UK',
            'Excludes income earned by UK residents abroad',
            'Standard headline measure — focus: location of production'
          ],
          example: '<strong>Toyota UK plant:</strong> its output counts in UK GDP. Profits repatriated to Japan are subtracted when calculating UK GNI — they leave the UK economy.'
        },
        {
          tone: 'blue',
          label: 'GNP / GNI — Gross National Income',
          drivers: [
            'GNI = GDP + net property income from abroad',
            'Adds income earned by UK residents abroad (dividends, interest, wages)',
            'Subtracts income earned by foreign residents in the UK',
            'Better measure of a country’s actual income — focus: ownership of income'
          ],
          example: '<strong>Developing countries:</strong> where large profits from foreign-owned firms flow abroad, GDP > GNI. GNI is the better welfare measure. For the UK, GNI ≈ GDP as inflows and outflows roughly balance.'
        }
      ],
      examEdge: {
        title: 'Add PPP for fair international comparisons',
        text: '$1 buys very different things in London vs Lagos. <strong>Purchasing Power Parity (PPP)</strong> adjusts for different price levels so we compare real living standards, not just market exchange rates. India’s GDP per capita: ~$2,400 at market rates vs ~$9,200 at PPP — because goods and services are far cheaper in India. The World Bank’s $2.15/day extreme poverty line is in PPP dollars.'
      },
      policy: {
        title: 'When to use which measure',
        text: 'Use <strong>GDP</strong> for domestic output and AD analysis. Use <strong>GNI</strong> for international welfare comparisons, especially where FDI inflows are large. Use <strong>GNI per capita (PPP)</strong> for fair cross-country living standards comparisons — it is also the income dimension of the Human Development Index (HDI).'
      }
    },

    /* ----- CARD 5 — Actual vs potential output ----- */
    {
      id: 'actual-vs-potential',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Actual vs potential output',
      lede: 'Actual output is what the economy produces today. Potential output is the maximum sustainable output when all resources are fully employed and used efficiently.',
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'Actual (short-run) growth',
          text: 'Movement along or <strong>within</strong> the PPF — using spare capacity that already exists. Caused by increases in aggregate demand. Output rises but no new productive capacity is created. Limited by the current potential output level.'
        },
        {
          num: '2',
          tone: 'blue',
          title: 'Potential (long-run) growth',
          text: 'An <strong>outward shift</strong> of the PPF — expanding the economy’s productive capacity. Caused by more factors (more labour, more capital) or better quality factors (technology, skills, infrastructure). Shifts LRAS right in the AD/AS model.'
        },
        {
          num: '3',
          tone: 'rose',
          title: 'Positive output gap',
          text: '<strong>Actual output > Potential output.</strong> The economy is overheating. Consequences: inflationary pressure, demand overheating, growth that is unsustainable. Policy response: tighten monetary or fiscal policy to cool demand.'
        },
        {
          num: '4',
          tone: 'amber',
          title: 'Negative output gap',
          text: '<strong>Actual output < Potential output.</strong> Spare capacity exists in the economy. Consequences: unemployment, disinflation or deflation pressure, wasted resources. Policy response: stimulate demand — lower interest rates or fiscal expansion.'
        }
      ],
      examEdge: {
        title: 'Use precise terminology',
        text: 'Use <strong>“trend growth”</strong> or <strong>“potential growth”</strong> for long-run capacity growth, and <strong>“spare capacity”</strong> or <strong>“output gap”</strong> for short-run differences from potential. Vague use of “growth” that conflates the short and long run loses marks. Be precise about the time horizon.'
      },
      connection: {
        title: 'PPF and AD/AS are the same model',
        text: 'LRAS is the economy’s PPF — it shows productive capacity. Short-run growth = movement along SRAS as AD rises. Long-run growth = LRAS shifts right. Linking these two models explicitly is an A* analytical move. Closing the output gap is a key macroeconomic objective.'
      }
    },

    /* ----- CARD 6 — Causes of economic growth ----- */
    {
      id: 'growth-causes',
      template: 'paired',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Causes of economic growth',
      lede: 'Not all increases in output are the same. Short-run demand boosts can raise GDP briefly, but <strong>sustainable growth</strong> comes from expanding the economy’s productive capacity.',
      pairs: [
        {
          tone: 'blue',
          label: 'Short-run growth: demand boosts',
          drivers: [
            'Consumption (C): higher incomes, confidence, lower taxes',
            'Investment (I): businesses invest in machinery, buildings, technology',
            'Government spending (G): public sector wages and services',
            'Net exports (X−M): exports rise and/or imports fall',
            'All shift AD right → real GDP rises in the short run'
          ],
          example: '<strong>UK post-2020 recovery:</strong> fiscal stimulus (furlough, bounce-back loans) and ultra-low interest rates boosted AD and lifted GDP back towards pre-pandemic levels. A demand-side recovery — no new productive capacity was added.'
        },
        {
          tone: 'green',
          label: 'Long-run growth: expanding capacity',
          drivers: [
            'Quantity of factors: more labour (population, participation) and capital',
            'Quality of factors: better-educated, healthier, more skilled workers',
            'Technological progress: R&D, innovation, new processes',
            'Improved infrastructure: transport, energy, digital networks',
            'All shift LRAS right → PPF moves outward'
          ],
          example: '<strong>UK productivity puzzle:</strong> post-2008, GDP recovered but productivity stagnated. Despite near-full employment, long-run growth potential weakened — a supply-side failure, not a demand-side one. Output per hour barely grew for over a decade.'
        }
      ],
      examEdge: {
        title: 'Why supply-side reforms matter most',
        text: 'Demand-side policies boost short-run GDP but hit an inflationary ceiling at the PPF. <strong>Only supply-side policies shift the PPF</strong> and enable non-inflationary long-run growth. Short-run demand boosts can overheat the economy, raise inflation and increase debt. State this trade-off explicitly — it is worth 2–3 marks in growth essays.'
      },
      policy: {
        title: 'What examiners want to see',
        text: 'A complete growth essay covers both sides: <em>“In the short run, lower interest rates stimulate AD and raise actual output towards potential… However, sustained non-inflationary growth requires supply-side improvements that shift LRAS outward…”</em> The structure itself signals economic literacy.'
      }
    },

    /* ----- CARD 7 — What GDP misses ----- */
    {
      id: 'gdp-limits',
      template: 'deflation',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'What GDP misses',
      lede: "GDP measures the market value of final output — but it has important blind spots. These are key things that affect our wellbeing but don’t show up in GDP.",
      mechanismsTitle: 'Six things GDP does not capture',
      mechanisms: [
        {
          icon: '👥',
          title: 'Income inequality',
          text: 'GDP is an average. A rising GDP can hide rising inequality. A country can have rapid growth while the poorest see no improvement. The Gini coefficient and median income are better welfare indicators.'
        },
        {
          icon: '🕵️',
          title: 'Informal or shadow economy',
          text: 'Unpaid, untaxed and unrecorded activities — cash jobs, small trades, domestic work — are missing from GDP. In developing countries, the informal sector can be 30–50% of actual economic activity.'
        },
        {
          icon: '🌱',
          title: 'Environmental degradation',
          text: 'Pollution, resource depletion and biodiversity loss reduce future wellbeing — but GDP may still rise. GDP even counts pollution clean-up as positive output. Green GDP adjusts for environmental costs and is often much lower.'
        },
        {
          icon: '🏠',
          title: 'Unpaid household work',
          text: 'Cooking, cleaning, childcare and caring for elders create real economic value but are not priced in markets. If someone pays for childcare, it adds to GDP. If a parent provides the same care unpaid, it does not.'
        },
        {
          icon: '⏰',
          title: 'Leisure time',
          text: 'More output can mean longer working hours and less time for rest, family and community. A country where everyone works 80-hour weeks may have higher GDP but lower welfare than one with 35-hour weeks.'
        },
        {
          icon: '⚖️',
          title: 'Composition of output',
          text: 'GDP counts all output equally regardless of welfare value. Military spending and hospital spending add equally to GDP. Defensive expenditures — crime prevention, accident repair — add to GDP without improving wellbeing.'
        }
      ],
      examples: {
        title: 'Alternatives to GDP: broader ways to measure wellbeing',
        items: [
          { period: 'Human Development Index (HDI)', text: 'Combines income (GNI per capita, PPP), health (life expectancy) and education (expected years of schooling). Published annually by the UN — looks at people, not just output.' },
          { period: 'Genuine Progress Indicator (GPI)', text: 'Adjusts for inequality, environmental costs and unpaid work to estimate real progress. The US GPI peaked in the 1970s while GDP kept rising — suggesting growth and progress diverged.' },
          { period: 'Wellbeing indices', text: 'Survey how people feel about their lives (OECD Better Life Index, World Happiness Report). Costa Rica often scores higher than the USA on happiness despite far lower GDP per capita.' }
        ]
      },
      examEdge: {
        title: 'Cite both GDP and a superior measure',
        text: 'GDP is a powerful summary of economic activity — but it’s not the whole story. A* welfare answers always state what GDP includes, what it excludes, and whether it reflects wellbeing: <em>“While GDP per capita has risen, the HDI shows divergent trends in health and education, suggesting welfare improvements are unevenly distributed.”</em>'
      },
      bridge: {
        title: 'What comes next',
        text: 'Standard of Living & Wellbeing builds directly on these limitations — covering HDI in depth, the Kuznets curve, and the debate around composite vs single-dimensional welfare measures.'
      }
    },

    /* ----- CARD 8 — Exam summary: reading growth data ----- */
    {
      id: 'exam-summary-growth',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Exam summary: reading growth data',
      lede: 'In essays and data-response questions, success comes from a clear framework, UK context and precise interpretation. Use this as your last-stop checklist.',
      mechanisms: [
        {
          num: '1',
          tone: 'blue',
          title: 'State the data',
          text: 'Identify what is measured, the time period, units and source. Always state whether it is <strong>real or nominal</strong> and whether it is <strong>per capita or total</strong>. Vague data references lose marks.'
        },
        {
          num: '2',
          tone: 'green',
          title: 'Describe the trend',
          text: 'Note the <strong>overall movement</strong> (rise / fall / fluctuation). Comment on the <strong>rate</strong> and any <strong>turning points</strong>. Be precise: “GDP grew by X% between Y and Z, before falling sharply in…”'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Distinguish trend vs cyclical',
          text: 'Separate the underlying <strong>trend</strong> (long-run growth in potential output) from <strong>cyclical fluctuations</strong> (short-run ups and downs around that trend). Examiners reward students who make this distinction explicitly.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'Interpret & evaluate implications',
          text: 'Explain likely <strong>causes</strong> and <strong>consequences</strong> for the economy and policy. Use chains of reasoning and end with a clear <strong>judgement</strong>. Never just list facts — show the examiner your thinking.'
        }
      ],
      examEdge: {
        title: 'Top-band examiner phrases',
        text: '“This suggests that…” \xb7 “This indicates / implies that…” \xb7 “One possible reason is…” \xb7 “A likely consequence is…” \xb7 “In the short run… however, in the long run…” \xb7 “The data is consistent with…” \xb7 “On balance, this is more likely to…” \xb7 “A limitation of the data is…”'
      },
      connection: {
        title: 'UK context to use in answers',
        text: '<strong>Post-2008 productivity puzzle:</strong> real GDP grew but output per hour stagnated — weaker living standards than the headline figure suggests. <strong>2020 Covid contraction:</strong> real GDP fell −9.9%, the largest annual fall in the modern record. <strong>Post-pandemic recovery:</strong> strong rebound in 2021, then slower growth as inflation, rate rises and global shocks weighed on activity.'
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
