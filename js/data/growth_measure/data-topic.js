/* ============================================================
   ECONOS — content data for growth_measure
   7 cards · revision-tight · exam-edge gems flagged
   Edexcel Theme 2.1.1
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'growth_measure',
  topicNum: '5.1',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Economic Growth & National Income',
  estTime: '9-11 minutes',
  goal: 'Lock in GDP, GNP, PPP and what growth really means',

  intro: {
    heroKey: 'heroGrowth',
    summary: 'GDP is the headline number every policymaker watches. But knowing its limits — and when to switch to GNI, real values, or PPP — is what separates A* answers.',
    doInThis: 'Recap the three measurement approaches, real vs nominal, GNP/GNI, PPP, and the short vs long run distinction.',
    outcomes: [
      'Explain GDP and its three measurement approaches',
      'Distinguish real from nominal GDP',
      'Apply GNI and PPP correctly in international comparisons'
    ],
    tip: 'These cards are revision, not first-time learning. They cue what you already know and flag the gems that lift answers from B to A*.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards',    state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 — Framing: What is GDP? ----- */
    {
      id: 'gdp-framing',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'GDP: three ways to measure one thing',
      lede: 'GDP = Gross Domestic Product = the total value of all final goods and services produced in a country over a given period. Three approaches, one answer.',
      branches: [
        { tone: 'green',  label: 'Expenditure approach',  sub: '<strong>C + I + G + (X−M)</strong> — adds up all spending on final output. The most-used in exam questions. GDP = consumption + investment + government spending + net exports.' },
        { tone: 'amber',  label: 'Income approach',       sub: 'Sums all incomes earned from producing output — wages, profit, rent, interest. Avoids double-counting transfer payments (benefits, pensions).' },
        { tone: 'blue',   label: 'Output approach',       sub: 'Sums the value added at each stage of production. Value added = output price − input cost. Avoids double-counting intermediate goods.' }
      ],
      examEdge: {
        title: 'All three should be equal',
        text: 'Because every pound of output generates a pound of income and a pound of spending, all three approaches give the <strong>same GDP figure</strong> in theory. Citing this circular flow logic is an A* analytical signal.'
      },
      keyTakeaway: {
        title: 'Why the expenditure approach dominates',
        text: 'Exam questions almost always use C+I+G+(X−M). Know the four components, their approximate UK sizes, and which ones are volatile — that sets up every AD/growth question that follows.'
      }
    },

    /* ----- CARD 2 — Real vs Nominal GDP ----- */
    {
      id: 'real-vs-nominal',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Real vs nominal GDP',
      lede: "Nominal GDP rises when output rises AND when prices rise. Real GDP strips out inflation — and it's the only number that tells you if people are actually better off.",
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'Nominal GDP',
          text: 'GDP measured at <strong>current prices</strong>. Rises with both output growth and price inflation. Can give a misleadingly rosy picture during high inflation.'
        },
        {
          num: '2',
          tone: 'blue',
          title: 'Real GDP',
          text: 'GDP measured at <strong>constant base-year prices</strong>. Removes the inflation effect. Real GDP growth = true increase in productive capacity and living standards.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'GDP deflator',
          text: 'The price index used to convert nominal to real: <strong>Real GDP = (Nominal GDP \xf7 GDP deflator) \xd7 100</strong>. The deflator covers the whole economy, unlike CPI which covers consumer goods only.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'GDP per capita',
          text: '<strong>GDP \xf7 population</strong>. The go-to measure for average living standards. A growing GDP with a faster-growing population means falling GDP per capita — the trap most students miss.'
        }
      ],
      examEdge: {
        title: 'Always state ‘real’',
        text: 'When asked about economic growth or living standards, <strong>always specify real GDP</strong>. Stating nominal GDP in a growth essay signals you haven\'t adjusted for inflation. One word — \'real\' — is worth marks.'
      },
      connection: {
        title: 'The key distinction',
        text: 'If prices rise 5% and nominal GDP rises 5%, <em>real</em> GDP is unchanged — no actual growth has occurred. This is the core mistake students make when conflating price rises with genuine economic expansion.'
      }
    },

    /* ----- CARD 3 — GDP vs GNP / GNI ----- */
    {
      id: 'gnp-gni',
      template: 'paired',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'GDP vs GNP / GNI',
      lede: 'GDP measures output <em>within</em> a country. GNP/GNI measures income <em>of</em> a country’s residents — wherever in the world they earn it.',
      pairs: [
        {
          tone: 'green',
          label: 'GDP (Domestic)',
          drivers: [
            'Output produced within the geographic borders',
            'Includes production by foreign-owned firms in the UK',
            'Excludes income earned by UK residents abroad',
            'The standard headline measure'
          ],
          example: '<strong>Toyota UK plant:</strong> its output counts in UK GDP. Profits repatriated to Japan are subtracted when calculating UK GNI.'
        },
        {
          tone: 'blue',
          label: 'GNP / GNI (National)',
          drivers: [
            'GNI = GDP + net income from abroad',
            'Adds income earned by UK residents abroad',
            'Subtracts income earned by foreign residents in the UK',
            'Better measure of a country’s actual income'
          ],
          example: '<strong>For developing countries</strong> with large foreign investment, GDP > GNI (profits leave). For the UK, GNI ≈ GDP, as inflows and outflows roughly balance.'
        }
      ],
      examEdge: {
        title: 'The GNI gap matters for developing countries',
        text: 'A key A* point: in countries with heavy foreign investment (e.g. many Sub-Saharan African nations), <strong>GDP significantly overstates living standards</strong> because profits are repatriated abroad. GNI is the better welfare measure.'
      },
      policy: {
        title: 'When to use which',
        text: 'Use GDP for measuring domestic productive capacity and short-run AD. Use GNI for international welfare comparisons, especially where FDI inflows are large. Examiners reward students who can switch measures appropriately.'
      }
    },

    /* ----- CARD 4 — Purchasing Power Parity ----- */
    {
      id: 'ppp',
      template: 'cause',
      tone: 'amber',
      bannerLabel: 'Adjustment for price level differences',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Purchasing Power Parity (PPP)',
      lede: '$1 buys very different things in New York vs Nairobi. PPP adjusts for this — so international income comparisons actually make sense.',
      diagramCaption: 'PPP converts GDP into equivalent purchasing power across countries.',
      causes: {
        title: 'Why PPP is needed',
        items: [
          'Exchange rates reflect financial flows, not just traded goods',
          'Non-traded goods (haircuts, housing) are cheaper in poor countries',
          'Converting at market rates understates real income in developing economies',
          'The ‘Big Mac Index’ (Economist) is the famous informal PPP test'
        ]
      },
      hallmarks: {
        title: 'What PPP adjustment does',
        items: [
          'China\'s GDP overtakes the USA earlier on PPP than on market exchange rates',
          'Developing country incomes look higher after PPP adjustment',
          'Used by the World Bank and IMF for official comparisons',
          'HDI uses GNI per capita (PPP) for its income dimension'
        ]
      },
      ukExamples: {
        title: 'Exam application',
        text: '<strong>India\'s GDP per capita</strong> in 2023: ~$2,400 at market rates, but ~$9,200 at PPP — reflecting cheaper non-traded goods. <strong>Implication:</strong> comparing countries at market exchange rates alone understates living standards in lower-income nations.'
      },
      examEdge: {
        title: 'PPP ≠ market exchange rate',
        text: 'A* answers note that market exchange rates are driven by trade, capital flows, and speculation — not by what money actually buys. PPP is the <strong>welfare-relevant comparison</strong> for living standards questions.'
      },
      policy: {
        title: 'Development context',
        text: 'International aid and development targets use PPP-adjusted figures. The World Bank $2.15/day extreme poverty line is in PPP dollars. Showing you understand this signals real-world application.'
      }
    },

    /* ----- CARD 5 — Short run vs Long run growth ----- */
    {
      id: 'sr-lr-growth',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Short run vs long run economic growth',
      lede: 'The PPF is the key distinction. Short run growth moves <em>towards</em> the frontier. Long run growth pushes it <em>outward</em>. Getting this wrong loses marks every time.',
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'Short run economic growth',
          text: '<strong>Using spare capacity</strong> that already exists — the economy moves towards the PPF. Caused by increases in AD (C, I, G or X-M). Output rises but no new productive capacity is created. Limited by the current PPF.'
        },
        {
          num: '2',
          tone: 'blue',
          title: 'Long run economic growth',
          text: '<strong>Shifting the PPF outward</strong>. Caused by increases in the quantity or quality of factors of production — more capital, better technology, larger/more productive labour force. Shifts LRAS right in the AD/AS model.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Actual vs potential growth',
          text: '<strong>Actual growth</strong> = change in real GDP (can be SR or LR). <strong>Potential growth</strong> = growth in productive capacity (LR only). If actual growth exceeds potential, inflationary pressure builds.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'Positive and negative output gaps',
          text: '<strong>Positive output gap:</strong> actual output > potential — economy overheating, inflation risk. <strong>Negative output gap:</strong> actual < potential — spare capacity, unemployment, disinflationary pressure. The trade cycle oscillates around potential.'
        }
      ],
      examEdge: {
        title: 'Always distinguish SR from LR',
        text: "Exam questions on growth almost always need this distinction. <em>'In the short run, growth uses spare capacity and shifts AD; in the long run, growth requires supply-side improvements that shift LRAS outward.'</em> This is the two-sided answer examiners reward."
      },
      connection: {
        title: 'PPF and AS connection',
        text: 'In the AD/AS model, LRAS is the same as the PPF — it shows productive capacity. SR growth = movement along LRAS. LR growth = LRAS shifting right. Linking these two models explicitly is an A* analytical move.'
      }
    },

    /* ----- CARD 6 — Causes of economic growth ----- */
    {
      id: 'growth-causes',
      template: 'paired',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Causes of economic growth',
      lede: 'Growth requires either using spare capacity (SR) or expanding capacity (LR). The causes and policies differ completely.',
      pairs: [
        {
          tone: 'green',
          label: 'Short run causes (AD-side)',
          drivers: [
            'Rising consumer confidence → ↑C',
            'Lower interest rates → ↑I and ↑C',
            'Fiscal stimulus: ↑G or ↓T',
            'Export boom: ↑(X−M)',
            'All shift AD right → output rises towards PPF'
          ],
          example: '<strong>UK 2010-14:</strong> loose monetary policy (low rates + QE) fuelled SR recovery. Consumption and house prices rose as spare capacity was absorbed.'
        },
        {
          tone: 'blue',
          label: 'Long run causes (AS-side)',
          drivers: [
            '↑ Capital stock: investment in machines, infrastructure',
            '↑ Labour quality: education, training, health',
            '↑ Technology: R&D, innovation, TFP growth',
            '↑ Labour supply: immigration, participation rates',
            'All shift LRAS right → PPF moves outward'
          ],
          example: '<strong>UK productivity puzzle:</strong> post-2008, productivity growth stalled. Despite near-full employment, LR growth potential weakened — a supply-side failure, not a demand-side one.'
        }
      ],
      examEdge: {
        title: 'The policy implication',
        text: 'Demand-side policies boost SR growth but hit an inflationary ceiling at the PPF. <strong>Only supply-side policies shift the PPF</strong> and enable non-inflationary long-run growth. Stating this trade-off is a 2-3 mark gem in growth essays.'
      },
      policy: {
        title: 'What examiners want to see',
        text: 'A complete growth essay covers both sides: ‘In the short run, lower interest rates stimulate AD… However, sustained growth requires supply-side improvements such as…’ The structure itself signals economic literacy.'
      }
    },

    /* ----- CARD 7 — Limitations of GDP as a welfare measure ----- */
    {
      id: 'gdp-limits',
      template: 'deflation',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'GDP: what it misses',
      lede: "GDP is the world's most-cited statistic — and one of its most incomplete. Knowing its limits is essential for welfare and development questions.",
      mechanismsTitle: 'Six things GDP does not capture',
      mechanisms: [
        {
          icon: '⚖️',
          title: 'Income distribution',
          text: 'GDP says nothing about how income is shared. A country can have rising GDP and worsening inequality simultaneously. The Gini coefficient and median income are better welfare indicators.'
        },
        {
          icon: '🌿',
          title: 'Externalities and environmental quality',
          text: 'GDP counts pollution clean-up as positive output. It ignores carbon emissions, resource depletion, biodiversity loss. Green GDP adjusts for environmental costs — often much lower.'
        },
        {
          icon: '🛠️',
          title: 'Informal economy',
          text: 'Unpaid domestic work, childcare, volunteering — all excluded. In developing countries, the informal sector can be 30-50% of actual economic activity. GDP badly understates output there.'
        },
        {
          icon: '📉',
          title: 'Defensive expenditures',
          text: 'Spending to fix problems (crime, accidents, illness) adds to GDP but doesn\'t improve welfare. If crime rises and the police budget rises, GDP goes up — that\'s clearly not better living standards.'
        },
        {
          icon: '⏰',
          title: 'Leisure time and quality of life',
          text: 'A country where everyone works 80-hour weeks might have higher GDP than one with 35-hour weeks — but lower welfare. GDP ignores leisure, stress, and life satisfaction.'
        },
        {
          icon: '📊',
          title: 'Composition of output',
          text: 'Military spending and healthcare both count equally in GDP. But $1bn on weapons ≠ $1bn on hospitals for welfare purposes. GDP is quantity, not quality.'
        }
      ],
      examples: {
        title: 'Better welfare measures',
        items: [
          { period: 'HDI (Human Development Index)', text: 'Combines income (GNI per capita, PPP), health (life expectancy), and education (years of schooling). Published annually by the UN.' },
          { period: 'Genuine Progress Indicator (GPI)', text: 'Adjusts GDP for inequality, crime, pollution, and adds value of unpaid work. Often diverges significantly from GDP trends.' },
          { period: 'Happy Planet Index', text: 'Measures wellbeing achieved per unit of environmental impact. Costa Rica often scores higher than the USA.' }
        ]
      },
      examEdge: {
        title: 'Use GDP and HDI together',
        text: 'A* welfare answers cite <strong>both GDP limitations and a superior measure</strong>. E.g.: ‘While GDP per capita has risen, the HDI shows divergent trends in health and education, suggesting welfare improvements are unevenly distributed.’'
      },
      bridge: {
        title: 'What comes next',
        text: 'Standard of Living & Wellbeing builds directly on these limitations — covering HDI in depth, the Kuznets curve, and the debate around composite vs single-dimensional measures.'
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }

  ]
};
