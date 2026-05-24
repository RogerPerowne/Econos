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
      stepLabel: 'Learn: Step 2 of 8',
      title: 'What is GDP?',
      lede: 'GDP (Gross Domestic Product) is the headline measure of an economy\'s size.',
      tip: { icon: '📊', tone: 'blue', head: 'DEFINITION', text: 'GDP is the <strong>total market value</strong> of all <strong>final</strong> goods and services produced <strong>within</strong> an economy in a given period.' },
      causesLabel: 'Three approaches, one answer',
      causesEmoji: '🔢',
      causesStyle: 'plain-white',
      causesCols: 3,
      causes: [
        {
          tone: 'green',
          icon: '①',
          head: 'Output approach',
          body: 'Add the value added at each stage of production.<br><br><div style="background:#ECFDF5;border:1px solid #A7F3D0;border-radius:8px;padding:10px 14px;text-align:center;font-family:Menlo,monospace;font-weight:800;color:#047857;font-size:14.5px;">GDP = Σ (Value added)</div><br><div style="font-size:12.5px;line-height:1.65;color:#475569;"><strong style="color:#0B1426;">Example:</strong><br>Agriculture value added<br>+ Manufacturing value added<br>+ Services value added<br>= <strong>GDP</strong></div>'
        },
        {
          tone: 'blue',
          icon: '②',
          head: 'Expenditure approach',
          body: 'Add up total spending on final goods and services.<br><br><div style="background:#EFF6FF;border:1px solid #BFDBFE;border-radius:8px;padding:10px 14px;text-align:center;font-family:Menlo,monospace;font-weight:800;color:#1D4ED8;font-size:14.5px;">GDP = C + I + G + (X − M)</div><br><div style="font-size:12.5px;line-height:1.75;color:#475569;"><strong style="color:#1D4ED8;">C</strong> Consumption (households)<br><strong style="color:#1D4ED8;">I</strong> Investment (business)<br><strong style="color:#1D4ED8;">G</strong> Government spending<br><strong style="color:#1D4ED8;">X</strong> Exports (sold abroad)<br><strong style="color:#1D4ED8;">M</strong> Imports (bought abroad)<br><span style="color:#1D4ED8;font-weight:700;">Net exports = Exports − Imports</span></div>'
        },
        {
          tone: 'amber',
          icon: '③',
          head: 'Income approach',
          body: 'Add the incomes earned in producing goods and services.<br><br><div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:8px;padding:10px 14px;text-align:center;font-family:Menlo,monospace;font-weight:800;color:#B45309;font-size:14.5px;">GDP = W + R + I + P</div><br><div style="font-size:12.5px;line-height:1.75;color:#475569;"><strong style="color:#B45309;">W</strong> Wages and salaries<br><strong style="color:#B45309;">R</strong> Rent<br><strong style="color:#B45309;">I</strong> Interest<br><strong style="color:#B45309;">P</strong> Profits<br><em style="color:#64748B;">(before taxes and subsidies on products)</em></div>'
        }
      ],
      causes2Label: 'Final goods only — why this matters',
      causes2Emoji: '🎯',
      causes2Style: 'plain-white',
      causes2Cols: 3,
      causes2: [
        {
          tone: 'purple',
          icon: '🔁',
          head: 'Why should the three match?',
          body: 'Every final good or service is produced <strong>somewhere</strong> (output), paid for by <strong>somehow</strong> (expenditure), and creates income for <strong>someone</strong> (income). Three views of the same circular flow.'
        },
        {
          tone: 'rose',
          icon: '⚠️',
          head: 'Exam trap: intermediate goods',
          body: 'GDP counts only <strong>final</strong> goods and services. Including intermediate goods leads to <strong>double-counting</strong>.<br><br><em>Example:</em> flour (£1) used to make bread (£3). Count bread (£3) in GDP, not both — the bread price already includes the flour value.'
        },
        {
          tone: 'blue',
          icon: '🧮',
          head: 'Worked example: final goods only',
          body: 'An economy in a year produces:<br>• Flour (used to make bread) — £1,000<br>• Bread (sold to consumers) — £3,000<br>• Haircuts — £800<br><br><strong style="color:#1D4ED8;">GDP = £3,000 + £800 = £3,800</strong><br><em style="color:#64748B;font-size:12px;">(Do not add flour — it is intermediate.)</em>'
        }
      ],
      examEdge: {
        title: 'Key idea',
        text: 'GDP measures the value of <strong>final output within</strong> an economy over a given period. All three approaches give the same answer because every transaction is simultaneously an output, an expenditure and an income.'
      }
    },

    /* ----- CARD 3 — Real vs nominal GDP ----- */
    {
      id: 'real-vs-nominal',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Real vs nominal GDP',
      lede: 'Real GDP is the only number that tells you whether people are actually better off.',
      tip: { icon: '💡', tone: 'blue', text: '<strong>Nominal GDP</strong> values output at <strong>current prices</strong> (includes inflation). <strong>Real GDP</strong> values output at <strong>constant prices</strong> (strips out inflation).' },
      causesLabel: 'Current prices vs constant prices',
      causesEmoji: '⚖️',
      causesStyle: 'plain-white',
      causesCols: 2,
      causes: [
        {
          tone: 'blue',
          icon: '💷',
          head: 'Nominal GDP — at current prices',
          body: '<div style="display:flex;flex-direction:column;gap:10px;font-size:13.5px;line-height:1.6;color:#0B1426;"><div style="display:flex;gap:10px;"><span style="color:#2563EB;font-size:16px;flex-shrink:0;">🏷️</span><div>Includes the effect of price changes (inflation or deflation)</div></div><div style="display:flex;gap:10px;"><span style="color:#2563EB;font-size:16px;flex-shrink:0;">📈</span><div>Tells us the size of the economy <strong>in money terms today</strong></div></div><div style="display:flex;gap:10px;"><span style="color:#2563EB;font-size:16px;flex-shrink:0;">📅</span><div>Useful for budgets, tax receipts and debt measured in £ today</div></div></div>'
        },
        {
          tone: 'green',
          icon: '📊',
          head: 'Real GDP — at constant prices',
          body: '<div style="display:flex;flex-direction:column;gap:10px;font-size:13.5px;line-height:1.6;color:#0B1426;"><div style="display:flex;gap:10px;"><span style="color:#059669;font-size:16px;flex-shrink:0;">✂️</span><div><strong>Strips out</strong> the effect of price changes (inflation)</div></div><div style="display:flex;gap:10px;"><span style="color:#059669;font-size:16px;flex-shrink:0;">📊</span><div>Shows changes in the <strong>volume</strong> of output</div></div><div style="display:flex;gap:10px;"><span style="color:#059669;font-size:16px;flex-shrink:0;">🎯</span><div>Best for judging <strong>living standards</strong>, growth and productivity</div></div></div>'
        }
      ],
      causes2Label: 'Converting and comparing',
      causes2Emoji: '🧮',
      causes2Style: 'plain-white',
      causes2Cols: 2,
      causes2: [
        {
          tone: 'amber',
          icon: '🧮',
          head: 'Converting nominal GDP to real GDP',
          body: 'Using a price index (the <strong>GDP deflator</strong>):<br><br><div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:8px;padding:14px 16px;text-align:center;font-family:Menlo,monospace;font-weight:800;color:#B45309;font-size:14px;line-height:1.5;">Real GDP = <br>Nominal GDP ÷ GDP deflator × 100<br><span style="font-size:11px;color:#92400E;">(base year deflator = 100)</span></div><br><div style="background:#FAFAFA;border-radius:8px;padding:10px 12px;font-size:12.5px;line-height:1.75;color:#475569;"><strong style="color:#B45309;">Worked example</strong><br>Nominal GDP (2024) = £2,200bn<br>GDP deflator (2024) = 125<br>Real GDP = 2,200 ÷ 125 × 100<br><strong style="color:#0B1426;">= £1,760bn (in base-year prices)</strong></div>'
        },
        {
          tone: 'purple',
          icon: '👥',
          head: 'GDP per capita — output per person',
          body: 'Adjusts output for population size so we can compare <strong>living standards</strong> across time and between countries.<br><br><div style="background:#F5F3FF;border:1px solid #DDD6FE;border-radius:8px;padding:14px 16px;text-align:center;font-family:Menlo,monospace;font-weight:800;color:#6D28D9;font-size:14px;line-height:1.5;">GDP per capita = <br>Real GDP ÷ Population</div><br><div style="background:#FAFAFA;border-radius:8px;padding:10px 12px;font-size:12.5px;line-height:1.75;color:#475569;"><strong style="color:#6D28D9;">Worked example</strong><br>Real GDP (2024) = £1,760bn<br>Population (2024) = 66 million<br>GDP per capita = 1,760 ÷ 66<br><strong style="color:#6D28D9;">= £26,667 per person</strong></div>'
        }
      ],
      examEdge: {
        title: 'Examiner tip',
        text: 'Essays usually want <strong>real GDP</strong> rather than nominal GDP. Writing just "GDP rose" signals you haven\'t adjusted for inflation — instant lost marks. Use <strong>real GDP</strong> (or <strong>real GDP per capita</strong>) when judging economic performance and living standards. A growing GDP with a faster-growing population still means falling GDP per capita — the trap most students miss.'
      }
    },

    /* ----- CARD 4 — GNP, GNI and comparing economies ----- */
    {
      id: 'gnp-gni-ppp',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'GNP, GNI and comparing economies',
      lede: 'GDP, GNI and PPP each adjust for different things — pick the right tool for the question.',
      tip: { icon: '💡', tone: 'blue', text: '<strong>GDP</strong> measures output <em>within</em> a country\'s borders. <strong>GNP / GNI</strong> adjust for income flows with the rest of the world. <strong>PPP</strong> adjustments make cross-country comparisons fairer.' },
      causesLabel: 'GDP vs GNP / GNI',
      causesEmoji: '🌍',
      causesStyle: 'plain-white',
      causesPosition: 'top',
      causesCols: 2,
      causes: [
        {
          tone: 'blue',
          icon: '🏛️',
          head: 'GDP — Gross Domestic Product',
          body: 'Measures output produced <strong>within the country\'s borders</strong>.<br><br>• Includes everyone who works inside the country, regardless of nationality<br>• Excludes income earned by residents abroad<br><br><span style="color:#1D4ED8;font-weight:700;">Focus:</span> <em>location of production.</em>'
        },
        {
          tone: 'green',
          icon: '🌎',
          head: 'GNP / GNI — Gross National Income',
          body: 'Measures income earned by a country\'s <strong>residents from anywhere in the world</strong>.<br><br>• Adds net property income from abroad (profits, interest, dividends, rents)<br>• Subtracts foreign-owned income earned within the country<br><br><span style="color:#047857;font-weight:700;">Focus:</span> <em>ownership of income.</em>'
        }
      ],
      flowTitle: 'How income flows affect GNP / GNI',
      flowEmoji: '🔁',
      flow: [
        { tone: 'blue',   icon: '🌍', title: 'Rest of the world', sub: 'Foreign firms earn income in our country' },
        { tone: 'amber',  icon: '↘️', title: 'Income in',         sub: '(e.g. foreign profits, interest)' },
        { tone: 'green',  icon: '🏠', title: 'Our country',       sub: 'GDP: output inside our borders' },
        { tone: 'rose',   icon: '↗️', title: 'Income out',         sub: '(e.g. profits sent abroad)' },
        { tone: 'blue',   icon: '🌍', title: 'Rest of the world', sub: 'Our firms earn income abroad' }
      ],
      causes2Label: 'Formula and case study',
      causes2Emoji: '🧮',
      causes2Style: 'plain-white',
      causes2Cols: 2,
      causes2: [
        {
          tone: 'green',
          icon: '🧮',
          head: 'The GNI formula',
          body: '<div style="background:#ECFDF5;border:1px solid #A7F3D0;border-radius:8px;padding:14px 16px;font-family:Menlo,monospace;font-weight:800;color:#047857;font-size:13px;line-height:1.6;text-align:center;">GNP (at factor cost) =<br>GDP + Net property<br>income from abroad</div><br><div style="font-size:12.5px;color:#475569;line-height:1.65;"><strong style="color:#0B1426;">GNI ≈ GNP</strong> in practice — small adjustments for taxes and subsidies on income.</div>'
        },
        {
          tone: 'purple',
          icon: '🇮🇪',
          head: 'Case study: Ireland and developing economies',
          body: 'Ireland\'s <strong>GNP per capita is much lower</strong> than its GDP per capita because of large profits earned by multinational firms abroad.<br><br>In many <strong>developing countries</strong>, GNP per capita is also lower than GDP per capita as profits flow out to foreign owners.'
        }
      ],
      examEdge: {
        title: 'Exam tip: PPP for fair international comparisons',
        text: '$1 buys very different things in <strong>London vs Lagos</strong>. <strong>Purchasing Power Parity (PPP)</strong> adjusts for different price levels so we compare real living standards, not just market exchange rates. Example — <strong>$100 buys ~4 items in London but ~14 items in Lagos.</strong> India\'s GDP per capita: ~$2,400 at market rates vs ~$9,200 at PPP. Use <strong>GNI per capita (PPP)</strong> for fair cross-country comparisons of living standards.'
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
