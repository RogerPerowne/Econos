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
      visualKey: 'macroDashboardSvg',
      notePosition: 'top',
      note: 'Every government judges economic success against <strong>all four indicators simultaneously</strong>. The difficulty is that they can pull in opposite directions: policies that boost growth can stoke inflation; cutting unemployment can widen the current-account deficit; squeezing inflation can slow growth and raise joblessness. Understanding these tensions is what separates descriptive answers from analytical ones.',
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
          body: 'Add the value added at each stage of production.<br><br><div style="text-align:center;font-family:Menlo,monospace;padding:4px 0 10px;"><div style="font-size:13px;color:#64748B;font-weight:600;">GDP =</div><div style="font-size:17px;font-weight:800;color:#047857;margin-top:6px;letter-spacing:0.3px;">Σ(Value added)</div></div><div style="font-size:12.5px;line-height:1.65;color:#475569;"><strong style="color:#0B1426;">Example:</strong><br>Agriculture value added<br>+ Manufacturing value added<br>+ Services value added<br>= <strong>GDP</strong></div>'
        },
        {
          tone: 'blue',
          icon: '②',
          head: 'Expenditure approach',
          body: 'Add up total spending on final goods and services.<br><br><div style="text-align:center;font-family:Menlo,monospace;padding:4px 0 10px;"><div style="font-size:13px;color:#64748B;font-weight:600;">GDP =</div><div style="font-size:22px;font-weight:800;color:#1D4ED8;margin-top:4px;letter-spacing:0.5px;">C+I+G+(X−M)</div></div><div style="font-size:12.5px;line-height:1.75;color:#475569;"><strong style="color:#1D4ED8;">C</strong> Consumption (households)<br><strong style="color:#1D4ED8;">I</strong> Investment (business)<br><strong style="color:#1D4ED8;">G</strong> Government spending<br><strong style="color:#1D4ED8;">X</strong> Exports (sold abroad)<br><strong style="color:#1D4ED8;">M</strong> Imports (bought abroad)<br><span style="color:#1D4ED8;font-weight:700;">Net exports = Exports − Imports</span></div>'
        },
        {
          tone: 'amber',
          icon: '③',
          head: 'Income approach',
          body: 'Add the incomes earned in producing goods and services.<br><br><div style="text-align:center;font-family:Menlo,monospace;padding:4px 0 10px;"><div style="font-size:13px;color:#64748B;font-weight:600;">GDP =</div><div style="font-size:22px;font-weight:800;color:#B45309;margin-top:4px;letter-spacing:0.5px;">W+R+I+P</div></div><div style="font-size:12.5px;line-height:1.75;color:#475569;"><strong style="color:#B45309;">W</strong> Wages and salaries<br><strong style="color:#B45309;">R</strong> Rent<br><strong style="color:#B45309;">I</strong> Interest<br><strong style="color:#B45309;">P</strong> Profits<br><em style="color:#64748B;">(before taxes and subsidies on products)</em></div>'
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
      causes2Label: 'Adjusting for inflation: nominal → real',
      causes2Emoji: '🧮',
      causes2Style: 'plain-white',
      causes2Cols: 1,
      causes2: [
        {
          tone: 'amber',
          icon: '🧮',
          head: 'Converting nominal GDP to real GDP',
          body: 'Use a price index (the <strong>GDP deflator</strong>) to strip out the effect of inflation.<br><br><div style="display:grid;grid-template-columns:3fr 2fr;gap:14px;align-items:stretch;"><div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:8px;padding:18px 18px;text-align:center;font-family:Menlo,monospace;display:flex;flex-direction:column;justify-content:center;align-items:center;"><div style="display:inline-flex;align-items:center;gap:10px;color:#B45309;font-weight:800;"><span style="font-size:15px;">Real GDP =</span><div style="display:inline-flex;flex-direction:column;text-align:center;line-height:1.3;"><span style="font-size:15px;padding:0 10px 4px;border-bottom:2px solid #B45309;">Nominal GDP</span><span style="font-size:15px;padding:4px 10px 0;">GDP deflator</span></div><span style="font-size:15px;">× 100</span></div><div style="font-size:11px;color:#92400E;margin-top:12px;font-weight:400;">(base year deflator = 100)</div></div><div style="background:#FAFAFA;border-radius:8px;padding:12px 14px;font-size:13px;line-height:1.75;color:#475569;"><strong style="color:#B45309;">Worked example</strong><br>Nominal GDP (2024) = £2,200bn<br>GDP deflator (2024) = 125<br>Real GDP = 2,200 ÷ 125 × 100<br><strong style="color:#0B1426;">= £1,760bn (in base-year prices)</strong></div></div>'
        }
      ],
      causes3Label: 'Adjusting for population: GDP per capita',
      causes3Emoji: '👥',
      causes3Style: 'plain-white',
      causes3Cols: 1,
      causes3: [
        {
          tone: 'purple',
          icon: '👥',
          head: 'GDP per capita — output per person',
          body: 'Adjusts output for population size so we can compare <strong>living standards</strong> across time and between countries.<br><br><div style="display:grid;grid-template-columns:3fr 2fr;gap:14px;align-items:stretch;"><div style="background:#F5F3FF;border:1px solid #DDD6FE;border-radius:8px;padding:18px 18px;text-align:center;font-family:Menlo,monospace;display:flex;flex-direction:column;justify-content:center;align-items:center;"><div style="display:inline-flex;align-items:center;gap:10px;color:#6D28D9;font-weight:800;"><span style="font-size:15px;">GDP per capita =</span><div style="display:inline-flex;flex-direction:column;text-align:center;line-height:1.3;"><span style="font-size:15px;padding:0 10px 4px;border-bottom:2px solid #6D28D9;">Real GDP</span><span style="font-size:15px;padding:4px 10px 0;">Population</span></div></div></div><div style="background:#FAFAFA;border-radius:8px;padding:12px 14px;font-size:13px;line-height:1.75;color:#475569;"><strong style="color:#6D28D9;">Worked example</strong><br>Real GDP (2024) = £1,760bn<br>Population (2024) = 66 million<br>GDP per capita = 1,760 ÷ 66<br><strong style="color:#6D28D9;">= £26,667 per person</strong></div></div>'
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
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Actual vs potential output',
      lede: 'Actual output is what the economy produces today. Potential output is the maximum sustainable output when resources are fully employed and the economy is operating efficiently.',
      causesLabel: 'Actual vs potential growth',
      causesEmoji: '📈',
      causesStyle: 'plain-white',
      causesPosition: 'top',
      causesCols: 2,
      causes: [
        {
          tone: 'blue',
          icon: '↗️',
          head: 'Actual (short-run) growth',
          body: '<div style="font-size:12px;color:#1D4ED8;font-weight:700;text-align:center;letter-spacing:0.04em;margin-bottom:6px;">MOVEMENT ALONG OR WITHIN THE FRONTIER</div><svg viewBox="0 0 280 200" style="width:100%;height:auto;max-height:200px;display:block;" xmlns="http://www.w3.org/2000/svg"><defs><marker id="aa" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#2563EB"/></marker></defs><line x1="40" y1="170" x2="265" y2="170" stroke="#475569" stroke-width="1.2"/><line x1="40" y1="170" x2="40" y2="20" stroke="#475569" stroke-width="1.2"/><polygon points="38,24 42,24 40,16" fill="#475569"/><polygon points="261,168 261,172 269,170" fill="#475569"/><text x="4" y="32" font-size="9" font-weight="700" fill="#0B1426">Capital</text><text x="4" y="42" font-size="9" font-weight="700" fill="#0B1426">goods</text><text x="262" y="184" font-size="9" font-weight="700" fill="#0B1426" text-anchor="end">Consumer</text><text x="262" y="194" font-size="9" font-weight="700" fill="#0B1426" text-anchor="end">goods</text><text x="32" y="186" font-size="9" fill="#475569">0</text><path d="M 50 115 A 110 50 0 0 1 160 165" fill="none" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 50 50 A 210 110 0 0 1 260 160" fill="none" stroke="#2563EB" stroke-width="2.5"/><circle cx="115" cy="103" r="4.5" fill="#2563EB"/><text x="122" y="118" font-size="10" font-weight="700" fill="#2563EB" text-anchor="start">A (underutilisation)</text><circle cx="175" cy="72" r="4.5" fill="#2563EB"/><text x="183" y="70" font-size="10" font-weight="700" fill="#2563EB" text-anchor="start">B (efficient use)</text><line x1="120" y1="100" x2="170" y2="76" stroke="#2563EB" stroke-width="1.5" marker-end="url(#aa)"/></svg><div style="background:#EFF6FF;border-radius:8px;padding:8px 12px;font-size:12.5px;line-height:1.5;color:#1D4ED8;text-align:center;margin-top:8px;">Resources unused or misallocated. <strong>More output possible without increasing capacity.</strong></div>'
        },
        {
          tone: 'green',
          icon: '🚀',
          head: 'Potential (long-run) growth',
          body: '<div style="font-size:12px;color:#047857;font-weight:700;text-align:center;letter-spacing:0.04em;margin-bottom:6px;">OUTWARD SHIFT OF THE FRONTIER</div><svg viewBox="0 0 280 200" style="width:100%;height:auto;max-height:200px;display:block;" xmlns="http://www.w3.org/2000/svg"><defs><marker id="bb" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="#059669"/></marker></defs><line x1="40" y1="170" x2="265" y2="170" stroke="#475569" stroke-width="1.2"/><line x1="40" y1="170" x2="40" y2="20" stroke="#475569" stroke-width="1.2"/><polygon points="38,24 42,24 40,16" fill="#475569"/><polygon points="261,168 261,172 269,170" fill="#475569"/><text x="4" y="32" font-size="9" font-weight="700" fill="#0B1426">Capital</text><text x="4" y="42" font-size="9" font-weight="700" fill="#0B1426">goods</text><text x="262" y="184" font-size="9" font-weight="700" fill="#0B1426" text-anchor="end">Consumer</text><text x="262" y="194" font-size="9" font-weight="700" fill="#0B1426" text-anchor="end">goods</text><text x="32" y="186" font-size="9" fill="#475569">0</text><path d="M 50 70 A 175 95 0 0 1 225 165" fill="none" stroke="#2563EB" stroke-width="2.2"/><path d="M 50 50 A 210 110 0 0 1 260 160" fill="none" stroke="#059669" stroke-width="2.5"/><text x="90" y="92" font-size="10" font-weight="700" fill="#2563EB" text-anchor="middle">PPF₁ (t₀)</text><text x="190" y="62" font-size="10" font-weight="700" fill="#059669" text-anchor="middle">PPF₂ (t₁)</text><line x1="135" y1="82" x2="148" y2="64" stroke="#059669" stroke-width="2.4" marker-end="url(#bb)"/></svg><div style="background:#ECFDF5;border-radius:8px;padding:8px 12px;font-size:12.5px;line-height:1.5;color:#047857;text-align:center;margin-top:8px;"><strong>More resources, better technology, higher skills.</strong> Increases the economy\'s productive capacity.</div>'
        }
      ],
      causes2Label: 'The output gap',
      causes2Emoji: '📊',
      causes2Style: 'plain-white',
      causes2Cols: 2,
      causes2: [
        {
          tone: 'rose',
          icon: '🔥',
          head: 'Positive output gap',
          body: '<svg viewBox="0 0 200 110" style="width:100%;height:auto;max-height:160px;display:block;" xmlns="http://www.w3.org/2000/svg"><path d="M 30 95 A 70 70 0 0 1 170 95" fill="none" stroke="#FEE2E2" stroke-width="16"/><path d="M 100 25 A 70 70 0 0 1 170 95" fill="none" stroke="#DC2626" stroke-width="16"/><line x1="100" y1="95" x2="142" y2="53" stroke="#0B1426" stroke-width="3" stroke-linecap="round"/><circle cx="100" cy="95" r="6" fill="#0B1426"/></svg><div style="font-size:13px;color:#0B1426;line-height:1.6;margin-top:6px;"><strong style="color:#B91C1C;">Actual output &gt; Potential output</strong><br><br><strong>Consequences:</strong><br>• Inflationary pressure<br>• Demand overheating<br>• May not be sustainable</div>'
        },
        {
          tone: 'blue',
          icon: '❄️',
          head: 'Negative output gap',
          body: '<svg viewBox="0 0 200 110" style="width:100%;height:auto;max-height:160px;display:block;" xmlns="http://www.w3.org/2000/svg"><path d="M 30 95 A 70 70 0 0 1 170 95" fill="none" stroke="#DBEAFE" stroke-width="16"/><path d="M 30 95 A 70 70 0 0 1 100 25" fill="none" stroke="#2563EB" stroke-width="16"/><line x1="100" y1="95" x2="58" y2="53" stroke="#0B1426" stroke-width="3" stroke-linecap="round"/><circle cx="100" cy="95" r="6" fill="#0B1426"/></svg><div style="font-size:13px;color:#0B1426;line-height:1.6;margin-top:6px;"><strong style="color:#1D4ED8;">Actual output &lt; Potential output</strong><br><br><strong>Consequences:</strong><br>• Unemployment<br>• Disinflation or deflation pressure<br>• Spare capacity exists</div>'
        }
      ],
      causes3Label: 'Link to AD/AS',
      causes3Emoji: '🔗',
      causes3Style: 'plain-white',
      causes3Cols: 1,
      examEdge: {
        title: 'Exam vocabulary: be precise with time horizons',
        text: 'Always distinguish between actual and potential output. <strong>Short-run fluctuations</strong> move output relative to the frontier — use <em>"spare capacity"</em> or <em>"output gap."</em> <strong>Long-run growth</strong> means the frontier shifts outward — say <em>"LRAS shifts right"</em> or <em>"productive potential increases."</em> A* phrasing: <em>"A positive output gap arises when actual output exceeds potential, generating inflationary pressure. Eliminating it sustainably requires supply-side policies that expand productive capacity, not demand management alone."</em>'
      },
      causes3: [
        {
          tone: 'purple',
          icon: '🔗',
          head: 'How the PPF maps onto the AD/AS model',
          body: '<div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:10px 14px;display:flex;align-items:center;gap:10px;margin-bottom:14px;"><span style="font-size:14px;">ℹ️</span><span style="font-size:12.5px;color:#475569;"><strong style="color:#0B1426;">Closing the gap</strong> is a key macroeconomic objective.</span></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;align-items:stretch;"><div style="background:#FAFAFA;border:1px solid #E7E7EA;border-radius:10px;padding:12px 14px;"><div style="font-size:11px;font-weight:800;color:#6D28D9;letter-spacing:0.08em;margin-bottom:8px;">SHORT-RUN (AD/AS)</div><svg viewBox="0 0 200 150" style="width:100%;height:auto;display:block;" xmlns="http://www.w3.org/2000/svg"><defs><marker id="srGap" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><polygon points="0,0 5,2.5 0,5" fill="#DC2626"/></marker></defs><line x1="25" y1="125" x2="188" y2="125" stroke="#475569" stroke-width="1.2"/><line x1="25" y1="125" x2="25" y2="12" stroke="#475569" stroke-width="1.2"/><polygon points="23,16 27,16 25,8" fill="#475569"/><polygon points="184,123 184,127 192,125" fill="#475569"/><text x="14" y="18" font-size="9" font-weight="700" fill="#0B1426">P</text><text x="188" y="140" font-size="9" font-weight="700" fill="#0B1426" text-anchor="end">Y</text><line x1="130" y1="18" x2="130" y2="125" stroke="#2563EB" stroke-width="2"/><text x="133" y="24" font-size="8" font-weight="700" fill="#2563EB">LRAS</text><line x1="35" y1="115" x2="175" y2="30" stroke="#059669" stroke-width="2"/><text x="177" y="30" font-size="8" font-weight="700" fill="#059669" text-anchor="start">SRAS</text><line x1="25" y1="25" x2="155" y2="125" stroke="#DC2626" stroke-width="2"/><text x="26" y="22" font-size="8" font-weight="700" fill="#DC2626">AD</text><circle cx="95" cy="79" r="3.5" fill="#0B1426"/><line x1="95" y1="79" x2="95" y2="125" stroke="#475569" stroke-width="0.8" stroke-dasharray="2.5,2"/><line x1="25" y1="79" x2="95" y2="79" stroke="#475569" stroke-width="0.8" stroke-dasharray="2.5,2"/><text x="93" y="135" font-size="7.5" fill="#475569" text-anchor="middle">Y₁</text><text x="130" y="135" font-size="7.5" fill="#2563EB" text-anchor="middle">Yp</text><text x="22" y="82" font-size="7.5" fill="#475569" text-anchor="end">P₁</text><line x1="97" y1="141" x2="130" y2="141" stroke="#DC2626" stroke-width="1" marker-end="url(#srGap)"/><text x="113" y="149" font-size="6.5" fill="#DC2626" text-anchor="middle">Rec. gap</text></svg><div style="font-size:11.5px;color:#475569;line-height:1.55;margin-top:8px;">Changes in <strong>AD</strong> move output along the <strong>SRAS</strong> — both real GDP and the price level shift.</div></div><div style="background:#FAFAFA;border:1px solid #E7E7EA;border-radius:10px;padding:12px 14px;"><div style="font-size:11px;font-weight:800;color:#6D28D9;letter-spacing:0.08em;margin-bottom:8px;">LONG-RUN (LRAS)</div><svg viewBox="0 0 200 150" style="width:100%;height:auto;display:block;" xmlns="http://www.w3.org/2000/svg"><defs><marker id="lrShift" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#7C3AED"/></marker></defs><line x1="25" y1="125" x2="188" y2="125" stroke="#475569" stroke-width="1.2"/><line x1="25" y1="125" x2="25" y2="12" stroke="#475569" stroke-width="1.2"/><polygon points="23,16 27,16 25,8" fill="#475569"/><polygon points="184,123 184,127 192,125" fill="#475569"/><text x="14" y="18" font-size="9" font-weight="700" fill="#0B1426">P</text><text x="188" y="140" font-size="9" font-weight="700" fill="#0B1426" text-anchor="end">Y</text><line x1="90" y1="18" x2="90" y2="125" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="4,3"/><text x="88" y="14" font-size="7.5" fill="#94A3B8" text-anchor="middle">LRAS₁</text><line x1="140" y1="18" x2="140" y2="125" stroke="#2563EB" stroke-width="2"/><text x="142" y="24" font-size="8" font-weight="700" fill="#2563EB">LRAS₂</text><line x1="35" y1="115" x2="175" y2="30" stroke="#059669" stroke-width="2"/><text x="177" y="30" font-size="8" font-weight="700" fill="#059669" text-anchor="start">SRAS</text><line x1="93" y1="15" x2="175" y2="78" stroke="#DC2626" stroke-width="2"/><text x="177" y="78" font-size="8" font-weight="700" fill="#DC2626" text-anchor="start">AD</text><circle cx="140" cy="51" r="3.5" fill="#0B1426"/><line x1="140" y1="51" x2="140" y2="125" stroke="#475569" stroke-width="0.8" stroke-dasharray="2.5,2"/><line x1="25" y1="51" x2="140" y2="51" stroke="#475569" stroke-width="0.8" stroke-dasharray="2.5,2"/><line x1="93" y1="70" x2="137" y2="70" stroke="#7C3AED" stroke-width="1.5" marker-end="url(#lrShift)"/><text x="88" y="135" font-size="7.5" fill="#94A3B8" text-anchor="middle">Y₁*</text><text x="140" y="135" font-size="7.5" fill="#2563EB" text-anchor="middle">Y₂*</text><text x="22" y="54" font-size="7.5" fill="#475569" text-anchor="end">P₁</text></svg><div style="font-size:11.5px;color:#475569;line-height:1.55;margin-top:8px;">Growth occurs when <strong>LRAS shifts right</strong> — raises potential output (capacity).</div></div></div>'
        }
      ]
    },

    /* ----- CARD 6 — Causes of economic growth ----- */
    {
      id: 'growth-causes',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Causes of economic growth',
      lede: 'Not all increases in output are the same — only supply-side expansion is truly sustainable.',
      visualKey: 'causesOfGrowthSvg',
      examEdge: {
        title: 'Why supply-side reforms matter most',
        text: 'Short-run demand boosts can <strong>overheat the economy</strong>, raise inflation and increase debt. Supply-side reforms <strong>expand capacity</strong>, lift potential output and support higher living standards <em>without inflationary pressure</em> — the key to <strong>sustainable long-run growth</strong>. A complete essay covers both: <em>"In the short run, lower interest rates stimulate AD… However, sustained non-inflationary growth requires supply-side improvements that shift LRAS outward."</em>'
      }
    },

    /* ----- CARD 7 — What GDP misses ----- */
    {
      id: 'gdp-limits',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'What GDP misses',
      lede: 'GDP measures the market value of final goods and services, but it has important blind spots. These are key things that affect our wellbeing but don\'t show up in GDP.',
      causesLabel: 'Six blind spots in GDP',
      causesEmoji: '🚫',
      causesStyle: 'plain-white',
      causesPosition: 'top',
      causesCols: 3,
      causes: [
        {
          tone: 'rose',
          icon: '👥',
          head: '1. Income inequality',
          body: 'GDP is an <strong>average</strong>. It doesn\'t show how income is distributed. A rising GDP can hide rising inequality.'
        },
        {
          tone: 'amber',
          icon: '🕵️',
          head: '2. Informal or shadow economy',
          body: 'Unpaid, untaxed and unrecorded activities (e.g., cash jobs, small trades) are often <strong>missing from GDP</strong>.'
        },
        {
          tone: 'green',
          icon: '🌿',
          head: '3. Environmental degradation',
          body: 'Pollution, resource depletion and loss of biodiversity reduce future wellbeing — <strong>but GDP may rise</strong>.'
        },
        {
          tone: 'purple',
          icon: '🏠',
          head: '4. Unpaid household work',
          body: 'Cooking, cleaning, childcare and caring for elders create real value but <strong>aren\'t priced in markets</strong>.'
        },
        {
          tone: 'blue',
          icon: '⏰',
          head: '5. Leisure time',
          body: 'More output can mean longer hours and less time for rest, family and community — <strong>not captured by GDP</strong>.'
        },
        {
          tone: 'slate',
          icon: '⚖️',
          head: '6. Composition of output',
          body: 'GDP counts goods and services <strong>regardless of what they are</strong>. Guns and hospitals both add to GDP equally.'
        }
      ],
      causes2Label: 'Alternatives to GDP: broader ways to measure wellbeing',
      causes2Emoji: '💡',
      causes2Style: 'plain-white',
      causes2Cols: 3,
      causes2: [
        {
          tone: 'blue',
          icon: '🌐',
          head: 'Human Development Index (HDI)',
          body: '<div style="font-size:13px;color:#1D4ED8;font-weight:600;margin-bottom:8px;">Looks at people, not just output.</div><div style="display:flex;flex-direction:column;gap:6px;font-size:12.5px;color:#0B1426;line-height:1.5;"><div style="display:flex;gap:8px;align-items:flex-start;"><span style="font-size:18px;flex-shrink:0;">💰</span><div><strong>Income</strong><br><em style="color:#64748B;">(standard of living, GNI per capita PPP)</em></div></div><div style="display:flex;gap:8px;align-items:flex-start;"><span style="font-size:18px;flex-shrink:0;">❤️</span><div><strong>Health</strong><br><em style="color:#64748B;">(life expectancy at birth)</em></div></div><div style="display:flex;gap:8px;align-items:flex-start;"><span style="font-size:18px;flex-shrink:0;">🎓</span><div><strong>Education</strong><br><em style="color:#64748B;">(expected years of schooling)</em></div></div></div>'
        },
        {
          tone: 'green',
          icon: '🌱',
          head: 'Genuine Progress Indicator (GPI)',
          body: '<div style="font-size:13px;color:#047857;line-height:1.6;">Adjusts for <strong>inequality</strong>, <strong>environmental costs</strong> and <strong>unpaid work</strong> to estimate real progress.<br><br><em style="color:#64748B;">The US GPI peaked in the 1970s while GDP kept rising.</em></div>'
        },
        {
          tone: 'purple',
          icon: '😊',
          head: 'Wellbeing indices',
          body: '<div style="font-size:13px;color:#6D28D9;line-height:1.6;">Surveys how people feel about their lives (e.g., <strong>OECD Better Life Index</strong>, <strong>World Happiness Report</strong>).<br><br><em style="color:#64748B;">Costa Rica often beats the USA despite lower GDP per capita.</em></div>'
        }
      ],
      examEdge: {
        title: 'Exam tip',
        text: 'GDP is a powerful summary of economic activity — but it\'s <strong>not the whole story</strong>. Always consider what it <em>includes</em>, what it <em>excludes</em>, and whether it reflects wellbeing. A* phrasing: <em>"While GDP per capita has risen, the HDI shows divergent trends in health and education, suggesting welfare improvements are unevenly distributed."</em>'
      }
    },

    /* ----- CARD 8 — Exam summary: reading growth data ----- */
    {
      id: 'exam-summary-growth',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Exam summary: reading growth data',
      lede: 'In essays and data-response questions, success comes from a clear framework, UK context and precise interpretation. Use this page as your last-stop checklist.',
      causesLabel: 'The essay framework',
      causesEmoji: '🗺️',
      causesStyle: 'plain-white',
      causesPosition: 'top',
      causesCols: 4,
      causes: [
        {
          tone: 'blue',
          icon: '⚖️',
          head: '1. State the data',
          body: 'Identify what is measured, period, units and source. Always state whether it is <strong style="color:#1D4ED8;">REAL or NOMINAL</strong> and whether it is <strong style="color:#1D4ED8;">PER CAPITA.</strong>'
        },
        {
          tone: 'green',
          icon: '📈',
          head: '2. Describe the trend',
          body: 'Note the overall movement (rise / fall / fluctuations). Comment on the <strong>RATE</strong> and any turning points.'
        },
        {
          tone: 'amber',
          icon: '〰️',
          head: '3. Distinguish trend vs cyclical',
          body: 'Explain the underlying <strong style="color:#B45309;">TREND</strong> (long-run growth) and any <strong style="color:#B45309;">CYCLICAL</strong> fluctuations (short-run ups and downs).'
        },
        {
          tone: 'purple',
          icon: '🔍',
          head: '4. Interpret &amp; evaluate',
          body: 'Explain likely causes and consequences for the economy and policy. Use chains of reasoning and judgement.'
        }
      ],
      note: {
        icon: '🇬🇧',
        tone: 'blue',
        head: 'UK context snapshot',
        text: '<strong>Post-2008 productivity puzzle:</strong> real GDP grew, but productivity (GDP per hour) stagnated — weaker living standards. · <strong>2020 Covid contraction:</strong> real GDP fell by −9.9%, the largest annual fall in the modern record. · <strong>Post-pandemic recovery:</strong> strong rebound in 2021, then slower growth as inflation, rate rises and global shocks weighed on activity.'
      },
      causes2Label: 'Phrases &amp; checklist',
      causes2Emoji: '✅',
      causes2Style: 'plain-white',
      causes2Cols: 2,
      causes2: [
        {
          tone: 'green',
          icon: '💬',
          head: 'Examiner-friendly phrases (top-band language)',
          body: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 14px;font-size:12.5px;color:#0B1426;line-height:1.55;"><div>✓ "This suggests that…"</div><div>✓ "In the short run… however, in the long run…"</div><div>✓ "This indicates / implies that…"</div><div>✓ "The data is consistent with…"</div><div>✓ "One possible reason is…"</div><div>✓ "On balance, this is more likely to…"</div><div>✓ "A likely consequence is…"</div><div>✓ "A limitation of the data is…"</div><div>✓ "This could lead to…"</div></div><div style="background:#FFFBEB;border-radius:6px;padding:8px 10px;font-size:12px;color:#92400E;margin-top:10px;"><strong>💡 Tip:</strong> Write in full sentences, link ideas, and use specific evidence from the data.</div>'
        },
        {
          tone: 'blue',
          icon: '✅',
          head: 'How to read growth data: checklist',
          body: '<div style="display:flex;flex-direction:column;gap:6px;font-size:12.5px;color:#0B1426;line-height:1.5;"><div style="display:flex;gap:8px;"><span style="background:#2563EB;color:#fff;border-radius:50%;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex-shrink:0;">1</span><div>Identify the variable (e.g. real GDP, GDP per capita).</div></div><div style="display:flex;gap:8px;"><span style="background:#2563EB;color:#fff;border-radius:50%;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex-shrink:0;">2</span><div>State the time period, units and source.</div></div><div style="display:flex;gap:8px;"><span style="background:#2563EB;color:#fff;border-radius:50%;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex-shrink:0;">3</span><div>State: real or nominal? Per capita or total?</div></div><div style="display:flex;gap:8px;"><span style="background:#2563EB;color:#fff;border-radius:50%;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex-shrink:0;">4</span><div>Describe the overall trend and key turning points.</div></div><div style="display:flex;gap:8px;"><span style="background:#2563EB;color:#fff;border-radius:50%;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex-shrink:0;">5</span><div>Separate trend from cyclical movements.</div></div><div style="display:flex;gap:8px;"><span style="background:#2563EB;color:#fff;border-radius:50%;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex-shrink:0;">6</span><div>Explain causes and consequences. Conclude with a clear overall judgement.</div></div></div>'
        }
      ],
      examEdge: {
        title: 'Exam edge',
        text: 'Marks are won by <strong>clarity</strong>, <strong>accuracy</strong> and <strong>evaluation</strong>. Always define the data, use the framework, and connect to the UK economy. Show judgement — don\'t just list facts.'
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
