/* ============================================================
   ECONOS — content data for growth_measure
   8 cards · Edexcel Theme 2.1
   Uses Theme 1 rich templates: framing, paired, ad-interactive,
   mechanisms — for maximum visual richness.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'growth_measure',
  topicNum: '2.1',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Measures of Economic Performance',
  estTime: '11-13 minutes',
  goal: 'Master the four macro indicators, the three GDP approaches, real vs nominal, GNI/PPP, output gaps, and the limits of GDP as a welfare measure.',

  intro: {
    heroKey: 'heroGrowth',
    summary: 'GDP is the headline number every policymaker watches. But knowing its limits — and when to switch to GNI, real values, PPP or wellbeing measures — is what separates A* answers.',
    doInThis: 'Explore the four headline indicators, the three GDP measurement approaches, real vs nominal, GNI and PPP, the actual-vs-potential output framework, causes of growth, the limits of GDP, and how to read growth data in exams.',
    outcomes: [
      'Explain GDP and its three measurement approaches with worked examples',
      'Distinguish real from nominal GDP and apply the GDP deflator',
      'Apply GNI and PPP correctly in international comparisons',
      'Diagnose positive and negative output gaps and their consequences',
      'Evaluate GDP as a measure of welfare against HDI and alternatives'
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
      stepLabel: 'Learn: Step 1 of 8',
      title: 'The macro dashboard',
      lede: 'Economists judge how well an economy is doing using four headline measures. Each tells us something different — and together they give the big picture.',
      causesLabel: 'The macro dashboard',
      causesEmoji: '📊',
      causesStyle: 'plain-white',
      causesPosition: 'top',
      causesCols: 4,
      causes: [
        {
          tone: 'green',
          icon: '📈',
          head: 'Economic growth (GDP)',
          body: 'The % change in real GDP over a period.<br><br><span style="display:inline-flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;border-radius:50%;background:#059669;display:inline-block;"></span><strong style="color:#047857;">Why it matters</strong></span><br><span style="font-size:12.5px;color:#475569;line-height:1.55;">Higher growth means more goods and services, rising incomes and improved living standards.</span>'
        },
        {
          tone: 'amber',
          icon: '💷',
          head: 'Inflation (CPI / RPI)',
          body: 'The % change in the general price level.<br><br><span style="display:inline-flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;border-radius:50%;background:#F59E0B;display:inline-block;"></span><strong style="color:#B45309;">Why it matters</strong></span><br><span style="font-size:12.5px;color:#475569;line-height:1.55;">High inflation erodes purchasing power and creates uncertainty.</span>'
        },
        {
          tone: 'blue',
          icon: '👥',
          head: 'Unemployment (ILO / claimant count)',
          body: 'The % of the labour force that is unemployed.<br><br><span style="display:inline-flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;border-radius:50%;background:#2563EB;display:inline-block;"></span><strong style="color:#1D4ED8;">Why it matters</strong></span><br><span style="font-size:12.5px;color:#475569;line-height:1.55;">High unemployment means wasted resources and personal hardship.</span>'
        },
        {
          tone: 'purple',
          icon: '🌍',
          head: 'Balance of payments (current account)',
          body: 'Net trade in goods, services, income and transfers.<br><br><span style="display:inline-flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;border-radius:50%;background:#7C3AED;display:inline-block;"></span><strong style="color:#6D28D9;">Why it matters</strong></span><br><span style="font-size:12.5px;color:#475569;line-height:1.55;">A persistent deficit means reliance on foreign capital and currency pressure.</span>'
        }
      ],
      flowTitle: 'The trade-offs: indicators can conflict',
      flowEmoji: '⚖️',
      flow: [
        { tone: 'green',  icon: '📈', title: 'Faster growth',       sub: 'can increase demand…' },
        { tone: 'amber',  icon: '📈', title: '…which can',           sub: 'push up inflation.' },
        { tone: 'blue',   icon: '👥', title: 'Lower unemployment',  sub: 'can raise imports and worsen the current account.' },
        { tone: 'purple', icon: '🏛️', title: 'Anti-inflation policy', sub: 'can slow growth and raise unemployment.' }
      ],
      examEdge: {
        title: 'Show how the four measures interact',
        text: '<strong>Policy is about balance — there are no free lunches.</strong> Top marks come from explaining the <strong>trade-offs</strong>, not just describing each indicator in isolation. Faster growth can push up inflation. Lower unemployment can worsen the current account. Anti-inflation policy can slow growth.'
      }
    },

    /* ----- CARD 2 — What is GDP? ----- */
    {
      id: 'gdp-three-approaches',
      template: 'framing',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'What is GDP?',
      lede: 'GDP — Gross Domestic Product — is the <strong>total market value</strong> of all <strong>final</strong> goods and services produced <strong>within</strong> an economy in a given period. Three approaches, one answer.',
      branches: [
        {
          tone: 'green',
          label: '① Output approach',
          sub: 'Sum the <strong>value added</strong> at each stage of production. <code>GDP = Σ (Value added)</code>. Agriculture + manufacturing + services value added = GDP. Avoids double-counting intermediate goods.'
        },
        {
          tone: 'blue',
          label: '② Expenditure approach',
          sub: 'Sum <strong>total spending</strong> on final output. <code>GDP = C + I + G + (X − M)</code>. C = Consumption · I = Investment · G = Government spending · (X−M) = Net exports. The exam favourite.'
        },
        {
          tone: 'amber',
          label: '③ Income approach',
          sub: 'Sum all <strong>incomes earned</strong> in production. <code>GDP = W + R + I + P</code>. Wages + Rent + Interest + Profits (before taxes and subsidies on products). Should equal the other two.'
        }
      ],
      examEdge: {
        title: 'Exam trap: intermediate goods and double-counting',
        text: 'GDP counts only <strong>final</strong> goods and services. Example — flour (\xa31) is used to make bread (\xa33). Count the bread (\xa33) in GDP, not both. The bread price already includes the flour value. Including both would overstate GDP by \xa31. <em>Why the three approaches agree:</em> every pound of output is produced somewhere, paid for by someone, and creates income for someone else — three views of the same circular flow.'
      }
    },

    /* ----- CARD 3 — Real vs nominal GDP ----- */
    {
      id: 'real-vs-nominal',
      template: 'paired',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Real vs nominal GDP',
      lede: "Nominal GDP rises when output rises AND when prices rise. Real GDP strips out inflation — and it's the only number that tells you if people are actually better off.",
      bannerLabel: 'At current prices  vs  At constant prices',
      bannerTone: 'blue',
      pairs: [
        {
          tone: 'amber',
          label: 'Nominal GDP — at current prices',
          drivers: [
            'Includes the effect of price changes (inflation or deflation)',
            'Tells us the size of the economy in <em>money terms today</em>',
            'Useful for budgets, tax receipts and government debt measured in current \xa3',
            'Rising 5% may just mean inflation — no actual growth',
            'Reported as the headline GDP figure in news bulletins'
          ],
          example: '<strong>UK 2022:</strong> nominal GDP rose ~10% — but most of that was high inflation. Real GDP rose only ~4%. Quoting nominal GDP in a growth essay would lose marks.'
        },
        {
          tone: 'green',
          label: 'Real GDP — at constant prices',
          drivers: [
            'Measured at a fixed base-year price level (e.g. 2019 prices)',
            'Strips out inflation — shows changes in the <em>volume</em> of output',
            'Best for judging living standards, productivity and growth over time',
            '<code>Real GDP = (Nominal GDP \xf7 GDP deflator) \xd7 100</code>',
            'Example: Nominal \xa32,200bn \xf7 deflator 125 \xd7 100 = Real \xa31,760bn'
          ],
          example: '<strong>GDP per capita:</strong> Real GDP \xf7 Population. \xa31,760bn \xf7 66m = \xa326,667 per person. A growing GDP with a faster-growing population still means falling GDP per capita — the trap most students miss.'
        }
      ],
      examEdge: {
        title: 'Always write “real”',
        text: 'When asked about economic growth or living standards, <strong>always specify real GDP</strong>. Writing “GDP rose” without “real” signals you haven\'t adjusted for inflation. If prices rise 5% and nominal GDP rises 5%, real GDP is unchanged — no actual growth has occurred. Essays want “real GDP” or “real GDP per capita” — one word is worth marks.'
      },
      policy: {
        title: 'The GDP deflator vs CPI',
        text: 'The GDP deflator covers <em>all</em> goods and services produced in the economy — including investment goods, government services and exports. CPI covers only the typical consumer\'s shopping basket. The deflator is the right price index for converting nominal to real GDP. CPI is the right one for measuring household inflation.'
      }
    },

    /* ----- CARD 4 — GNP, GNI and comparing economies ----- */
    {
      id: 'gnp-gni-ppp',
      template: 'paired',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'GNP, GNI and comparing economies',
      lede: 'GDP measures output <em>within</em> a country\'s borders. GNP/GNI measures income <em>of</em> a country\'s residents — wherever in the world they earn it. PPP adjusts for price differences so cross-country comparisons are fair.',
      bannerLabel: 'Location of production  vs  Ownership of income',
      bannerTone: 'purple',
      pairs: [
        {
          tone: 'blue',
          label: 'GDP — Gross Domestic Product',
          drivers: [
            'Measures output produced within the geographic borders',
            'Includes production by foreign-owned firms operating in the UK',
            'Excludes income earned by UK residents abroad',
            'Standard headline measure — focus: <em>location of production</em>',
            'Used for AD analysis and domestic output comparisons'
          ],
          example: '<strong>Toyota UK plant:</strong> its output counts in UK GDP. Profits repatriated to Japan are then <em>subtracted</em> when calculating UK GNI — that money leaves the UK economy.'
        },
        {
          tone: 'purple',
          label: 'GNP / GNI — Gross National Income',
          drivers: [
            'GNI = GDP + net property income from abroad',
            'Adds income earned by UK residents abroad (dividends, interest, wages)',
            'Subtracts income earned by foreign residents in the UK',
            'Better measure of a country\'s actual income — focus: <em>ownership</em>',
            'Often used for international welfare comparisons'
          ],
          example: '<strong>Ireland:</strong> GNI per capita is ~25% lower than GDP per capita because large multinational profits flow abroad. For the UK, GNI ≈ GDP — flows roughly balance.'
        }
      ],
      examEdge: {
        title: 'Add PPP for fair international comparisons',
        text: '$1 buys very different things in London vs Lagos. <strong>Purchasing Power Parity (PPP)</strong> adjusts for different price levels so we compare real living standards, not just market exchange rates. India\'s GDP per capita: <strong>~$2,400 at market rates</strong> vs <strong>~$9,200 at PPP</strong> — because goods and services are far cheaper there. The World Bank\'s $2.15/day extreme poverty line is in PPP dollars.'
      },
      policy: {
        title: 'When to use which measure',
        text: 'Use <strong>GDP</strong> for domestic output and AD analysis. Use <strong>GNI</strong> for international welfare comparisons, especially where FDI inflows are large. Use <strong>GNI per capita (PPP)</strong> for fair cross-country living standards comparisons — it\'s also the income dimension of the UN\'s <em>Human Development Index (HDI)</em>.'
      }
    },

    /* ----- CARD 5 — Actual vs potential output ----- */
    {
      id: 'actual-vs-potential',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Actual vs potential output',
      lede: 'Actual output is what the economy produces today. Potential output is the maximum sustainable output when resources are fully employed and used efficiently. The gap between them shapes everything.',
      diagramKey: 'ppfMovesInteractive',
      tip: { icon: '🎯', tone: 'blue', text: 'Tap the four buttons below to see how an economy can change its position relative to its productive capacity. The PPF is the visual twin of LRAS in the AD/AS model — both show potential output.' },
      steps: [
        {
          key: 'recovery',
          label: 'Closing a negative gap',
          text: 'Point <strong>X</strong> sits inside the PPF — actual output is <em>below</em> potential. There is a <strong>negative output gap</strong>: spare capacity, unemployed workers, idle factories. As AD recovers, firms rehire and reactivate capacity. Output rises toward PPF₁. The frontier does not move — this is <strong>actual / short-run growth</strong>, driven by demand.'
        },
        {
          key: 'outward',
          label: 'Potential rises',
          text: 'PPF₁ shifts outward to <strong>PPF₂</strong>: productive capacity has permanently increased. Better technology, more capital investment, larger labour force, improved skills or infrastructure. This is <strong>potential / long-run growth</strong> — the only kind that delivers <em>non-inflationary</em> rises in living standards. In AD/AS, LRAS shifts right.'
        },
        {
          key: 'along',
          label: 'Reallocation along PPF',
          text: 'Movement <strong>along</strong> PPF₁ from D to E — the economy chooses to produce more capital goods and fewer consumer goods (or vice versa). Total potential output is unchanged. There is always an <strong>opportunity cost</strong> equal to the slope of the curve. This is about the <em>composition</em> of output, not growth.'
        },
        {
          key: 'inward',
          label: 'Capacity destroyed',
          text: 'PPF₁ shifts inward to <strong>PPF₃</strong>: a negative supply shock has cut productive capacity. War, natural disaster, pandemic, capital depreciation, "brain drain" — all push potential output down. <strong>The 2020 Covid contraction</strong> is the modern example: real UK GDP fell −9.9%, the largest annual fall on record.'
        }
      ],
      causesLabel: 'Output gaps in the trade cycle',
      causesEmoji: '📊',
      causes: [
        {
          tone: 'rose',
          icon: '🔥',
          head: 'Positive output gap',
          body: '<strong>Actual > Potential.</strong> The economy is overheating — operating beyond sustainable capacity. Consequences: <em>inflationary pressure, demand overheating, unsustainable growth</em>. Policy response: tighten monetary or fiscal policy to cool demand.'
        },
        {
          tone: 'amber',
          icon: '❄️',
          head: 'Negative output gap',
          body: '<strong>Actual < Potential.</strong> Spare capacity exists. Consequences: <em>unemployment, disinflation or deflation pressure, wasted resources</em>. Policy response: stimulate demand — lower interest rates or fiscal expansion to close the gap.'
        }
      ],
      pairLabel: 'Short-run vs long-run growth',
      pairEmoji: '⚖️',
      left:  { tone: 'blue', icon: '⚡', iconStyle: 'circle', label: 'Short-run growth', text: 'Driven by AD. Uses existing spare capacity. Hits an inflationary ceiling at the PPF. Volatile — rises in booms, falls in recessions. Closes negative output gaps but cannot raise potential.' },
      right: { tone: 'green', icon: '🚀', iconStyle: 'circle', label: 'Long-run growth',  text: 'Driven by AS — quantity and quality of factors of production. Shifts the PPF outward. Steady — depends on investment, education, technology, infrastructure. Raises potential output permanently.' },
      conclusion: { title: 'Why the distinction matters', text: 'Demand-side policies boost short-run output but hit an inflationary ceiling at the PPF. <strong>Only supply-side policies shift the PPF outward</strong> and enable non-inflationary long-run growth. Examiners reward students who link the PPF, AD/AS and the trade cycle together.' },
      examEdge: {
        title: 'Use precise terminology',
        text: 'Use <strong>"trend growth"</strong> or <strong>"potential growth"</strong> for long-run capacity. Use <strong>"spare capacity"</strong> or <strong>"output gap"</strong> for short-run differences. Vague use of "growth" that conflates the two loses marks. Classic exam trap: <em>"Country A recovers from recession"</em> → a point inside PPF moves <em>onto</em> it. Do NOT draw an outward shift — that\'s long-run growth.'
      }
    },

    /* ----- CARD 6 — Causes of economic growth ----- */
    {
      id: 'growth-causes',
      template: 'paired',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Causes of economic growth',
      lede: 'Not all increases in output are the same. Short-run demand boosts can raise GDP briefly, but <strong>sustainable growth</strong> comes from expanding the economy\'s productive capacity.',
      bannerLabel: 'Demand-side  vs  Supply-side',
      bannerTone: 'amber',
      pairs: [
        {
          tone: 'blue',
          label: 'Short-run causes — demand boosts',
          drivers: [
            '<strong>Consumption (C):</strong> higher confidence, lower taxes, easier credit',
            '<strong>Investment (I):</strong> firms invest in machinery, buildings, technology',
            '<strong>Government spending (G):</strong> stimulus, public services, capital projects',
            '<strong>Net exports (X−M):</strong> exports rise or imports fall',
            'All shift AD right → real GDP rises in the short run',
            'Hits an inflationary ceiling at potential output'
          ],
          example: '<strong>UK post-2020 recovery:</strong> fiscal stimulus (furlough, bounce-back loans) and ultra-low interest rates lifted AD. GDP recovered to pre-pandemic levels by 2022 — but no new productive capacity was added.'
        },
        {
          tone: 'green',
          label: 'Long-run causes — expanding capacity',
          drivers: [
            '<strong>Quantity of factors:</strong> more labour (population, participation), more capital',
            '<strong>Quality of factors:</strong> better-educated, healthier, more skilled workers',
            '<strong>Technological progress:</strong> R&D, innovation, new processes, AI',
            '<strong>Infrastructure:</strong> transport, energy, digital networks, ports',
            '<strong>Higher productivity:</strong> more output from the same inputs — the ultimate driver',
            'All shift LRAS right → PPF moves outward'
          ],
          example: '<strong>UK productivity puzzle:</strong> post-2008, GDP recovered but output per hour stagnated. Despite near-full employment, long-run growth potential weakened — a supply-side failure, not a demand-side one. Real wages stagnated for over a decade.'
        }
      ],
      examEdge: {
        title: 'Why supply-side reforms matter most',
        text: 'Demand-side policies boost short-run GDP but hit an inflationary ceiling at the PPF. <strong>Only supply-side policies shift the PPF</strong> and enable non-inflationary long-run growth. Short-run demand boosts can overheat the economy, raise inflation and increase debt. State this trade-off explicitly — it\'s worth 2–3 marks in growth essays.'
      },
      policy: {
        title: 'What examiners want to see',
        text: 'A complete growth essay covers both sides: <em>"In the short run, lower interest rates stimulate AD and raise actual output towards potential… However, sustained non-inflationary growth requires supply-side improvements that shift LRAS outward…"</em> The two-sided structure itself signals economic literacy and earns evaluation marks.'
      }
    },

    /* ----- CARD 7 — What GDP misses ----- */
    {
      id: 'gdp-limits',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'What GDP misses',
      lede: "GDP measures the market value of final output — but it has six important blind spots that affect wellbeing and don't show up in the headline figure.",
      mechanisms: [
        {
          num: '1',
          tone: 'rose',
          title: 'Income inequality',
          text: 'GDP is an <strong>average</strong>. A rising GDP can hide rising inequality — the poorest may see no improvement. The <em>Gini coefficient</em> and <em>median income</em> are better welfare indicators.'
        },
        {
          num: '2',
          tone: 'amber',
          title: 'Informal / shadow economy',
          text: 'Unpaid, untaxed and unrecorded activities — cash jobs, small trades, domestic work — are missing from GDP. In developing countries, the informal sector can be <strong>30–50% of activity</strong>.'
        },
        {
          num: '3',
          tone: 'green',
          title: 'Environmental degradation',
          text: 'Pollution, resource depletion and biodiversity loss reduce future wellbeing — but GDP may still rise. GDP even counts <em>pollution clean-up as positive output</em>. Green GDP adjusts for this.'
        },
        {
          num: '4',
          tone: 'purple',
          title: 'Unpaid household work',
          text: 'Cooking, cleaning, childcare and caring for elders create real value but are not priced in markets. If a parent pays for childcare, GDP rises. If they provide the same care unpaid, it doesn\'t.'
        },
        {
          num: '5',
          tone: 'blue',
          title: 'Leisure time',
          text: 'More output can mean longer working hours and less time for rest, family and community. An economy with 80-hour weeks may have higher GDP but lower welfare than one with 35-hour weeks.'
        },
        {
          num: '6',
          tone: 'slate',
          title: 'Composition of output',
          text: 'GDP counts all output equally regardless of welfare value. Military spending and hospital spending add <em>equally</em>. Defensive expenditures (crime, accidents) add to GDP without improving wellbeing.'
        }
      ],
      examEdge: {
        title: 'Cite both GDP and a superior measure',
        text: 'GDP is a powerful summary of economic activity — but it\'s not the whole story. A* welfare answers state what GDP <em>includes</em>, what it <em>excludes</em>, and whether it reflects wellbeing: <em>"While GDP per capita has risen, the HDI shows divergent trends in health and education, suggesting welfare improvements are unevenly distributed."</em>'
      },
      connection: {
        title: 'Alternatives to GDP: broader ways to measure wellbeing',
        text: '<strong>HDI</strong> combines income (GNI per capita, PPP), health (life expectancy) and education (expected years of schooling) — UN, annual. <strong>GPI</strong> adjusts for inequality, environmental costs and unpaid work — the US GPI peaked in the 1970s while GDP kept rising. <strong>Wellbeing indices</strong> (OECD Better Life, World Happiness Report) survey how people actually feel — Costa Rica often beats the USA despite lower GDP per capita.'
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
          text: 'Note the <strong>overall movement</strong> (rise / fall / fluctuation). Comment on the <strong>rate</strong> and any <strong>turning points</strong>. Be precise: "GDP grew by X% between Y and Z, before falling sharply in…"'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Trend vs cyclical',
          text: 'Separate the underlying <strong>trend</strong> (long-run growth in potential output) from <strong>cyclical fluctuations</strong> (short-run ups and downs around that trend). Examiners reward students who make this explicit.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'Interpret & evaluate',
          text: 'Explain likely <strong>causes</strong> and <strong>consequences</strong> for the economy and policy. Use chains of reasoning and end with a clear <strong>judgement</strong>. Never just list facts — show your thinking.'
        }
      ],
      examEdge: {
        title: 'Top-band examiner phrases',
        text: '"This suggests that…" \xb7 "This indicates / implies that…" \xb7 "One possible reason is…" \xb7 "A likely consequence is…" \xb7 "In the short run… however, in the long run…" \xb7 "The data is consistent with…" \xb7 "On balance, this is more likely to…" \xb7 "A limitation of the data is…"'
      },
      connection: {
        title: 'UK context to deploy in answers',
        text: '<strong>Post-2008 productivity puzzle:</strong> real GDP grew but output per hour stagnated — weaker living standards than headline figures suggest. <strong>2020 Covid contraction:</strong> real GDP fell −9.9%, the largest annual fall in the modern record. <strong>Post-pandemic recovery:</strong> strong rebound in 2021, then slower growth as inflation, rate rises and global shocks weighed on activity.'
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
