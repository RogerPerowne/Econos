/* ============================================================
   ECONOS — content data for inflation_meas
   7 cards · revision-tight · exam-edge gems flagged
   Edexcel Theme 2.2.1
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'inflation_meas',
  topicNum: '2.2.1',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Inflation: Measurement & Costs',
  estTime: '9-11 minutes',
  goal: 'Lock in CPI, RPI, CPIH and who wins and loses from inflation',

  intro: {
    heroKey: 'heroBars',
    summary: "The 2% target. The basket of goods. The difference between CPI, RPI, and CPIH. And the six groups who win or lose depending on whether inflation rises or falls. All the gems are here.",
    doInThis: 'Work through 8 cards: inflation definition, CPI construction, a CPI calculation worked example, RPI vs CPI, price index limitations, costs of inflation, deflation, and the 2% target rationale.',
    outcomes: [
      'Distinguish CPI, RPI, and CPIH',
      'Identify winners and losers from inflation',
      'Evaluate the costs of deflation vs inflation'
    ],
    tip: 'These cards are revision, not first-time learning. They cue what you already know and flag the gems that lift answers from B to A*.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Recap and lock in the gems',    state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 — Framing: What is inflation? ----- */
    {
      id: 'inflation-framing',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Inflation: a sustained general rise in the price level',
      lede: 'One definition. Three things to note. Knowing the three qualifiers separates exam answers from everyday conversations about prices.',
      branches: [
        { tone: 'green',  label: 'Sustained',   sub: 'One-off price rises (e.g. a bad harvest) are NOT inflation. Inflation requires prices to keep rising over time. A single spike that reverses is a <em>price level shock</em>, not inflation.' },
        { tone: 'amber',  label: 'General',      sub: 'One sector rising is NOT inflation. The general price level across the economy must rise. A* answers distinguish sector-specific price changes from economy-wide inflation.' },
        { tone: 'blue',   label: 'Price level',  sub: 'Inflation is measured as the <em>rate of change</em> of a price index. Even at low inflation, prices are still rising. Falling inflation (‘disinflation’) is NOT the same as falling prices (‘deflation’).' }
      ],
      examEdge: {
        title: 'Disinflation ≠ deflation',
        text: '<strong>Disinflation:</strong> inflation rate falls (e.g. from 5% to 2%) — prices still rising, just more slowly. <strong>Deflation:</strong> negative inflation — prices actually falling. Confusing these two is a classic exam error that costs marks.'
      },
      keyTakeaway: {
        title: 'The 2% target',
        text: "The Bank of England targets <strong>CPI inflation at 2%</strong>. Why not 0%? Because some inflation is a sign of a healthy, growing economy; and because near-zero risks slipping into deflation, which is much harder to escape."
      }
    },

    /* ----- CARD 2 — Measuring inflation: CPI ----- */
    {
      id: 'cpi',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'How CPI is constructed',
      lede: 'The Consumer Price Index is the UK\'s official inflation measure and the Bank of England\'s target. Knowing how it\'s built exposes its limitations.',
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'The basket of goods',
          text: 'A representative sample of ~700 categories of goods and services bought by UK households. Updated every year to reflect changing spending patterns. Categories include food, transport, clothing, entertainment, housing costs (rents, not mortgages).'
        },
        {
          num: '2',
          tone: 'blue',
          title: 'Weighting',
          text: 'Each category is weighted by its share of total household spending. Food and housing are heavily weighted. A 10% rise in a 5%-weight category has half the impact of a 10% rise in a 10%-weight category.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Price collection',
          text: 'ONS price-collectors visit ~140 locations monthly and collect ~180,000 individual price quotes. Online prices are increasingly included. The index is recalculated monthly with a base year = 100.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'International standard',
          text: 'CPI uses the HICP (Harmonised Index of Consumer Prices) methodology — comparable across EU countries. This is why the UK uses CPI (not RPI) for the official 2% target and for international comparisons.'
        }
      ],
      examEdge: {
        title: 'CPI excludes housing costs',
        text: 'A critical A* point: <strong>CPI excludes mortgage interest payments and council tax</strong>. For homeowners with large mortgages, CPI understates their experienced cost of living — especially when interest rates rise sharply, as in 2022-23.'
      },
      connection: {
        title: 'The base year problem',
        text: 'The base year is set to 100. If CPI = 115, prices are 15% higher than in the base year. If the base year is outdated, spending pattern weights become inaccurate — which is why the ONS updates the basket annually.'
      }
    },

    /* ----- CARD 3 — CPI Worked Example ----- */
    {
      id: 'cpi-worked',
      template: 'worked-example',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Worked Example: Calculating CPI and the Inflation Rate',
      scenario: 'The ONS constructs a simplified price index for a hypothetical economy using three categories. The <strong>base year is 2023</strong> (index = 100).<br><br><table style="width:100%;border-collapse:collapse;font-size:13px;margin-top:8px;"><thead><tr style="background:#0B1426;color:#fff;"><th style="padding:8px 10px;text-align:left;">Category</th><th style="padding:8px 10px;text-align:center;">Weight</th><th style="padding:8px 10px;text-align:center;">2023 price</th><th style="padding:8px 10px;text-align:center;">2024 price</th></tr></thead><tbody><tr style="background:#F8FAFC;"><td style="padding:8px 10px;">Food &amp; drink</td><td style="padding:8px 10px;text-align:center;">0.40</td><td style="padding:8px 10px;text-align:center;">100p</td><td style="padding:8px 10px;text-align:center;">120p</td></tr><tr style="background:#fff;"><td style="padding:8px 10px;">Transport</td><td style="padding:8px 10px;text-align:center;">0.35</td><td style="padding:8px 10px;text-align:center;">200p</td><td style="padding:8px 10px;text-align:center;">210p</td></tr><tr style="background:#F8FAFC;"><td style="padding:8px 10px;">Recreation</td><td style="padding:8px 10px;text-align:center;">0.25</td><td style="padding:8px 10px;text-align:center;">50p</td><td style="padding:8px 10px;text-align:center;">50p</td></tr></tbody></table>',
      steps: [
        {
          prompt: 'Step 1 — Calculate the price relative for each category',
          hint: 'Price relative = (current year price ÷ base year price). This tells you how prices have changed, ignoring units.',
          answer: 'Food: 120 ÷ 100 = <strong>1.20</strong> (prices rose 20%)<br>Transport: 210 ÷ 200 = <strong>1.05</strong> (prices rose 5%)<br>Recreation: 50 ÷ 50 = <strong>1.00</strong> (no change)'
        },
        {
          prompt: 'Step 2 — Multiply each price relative by its weight',
          hint: 'Weighted contribution = price relative × weight. This captures how much each category matters in typical household spending.',
          answer: 'Food: 1.20 × 0.40 = <strong>0.480</strong><br>Transport: 1.05 × 0.35 = <strong>0.368</strong><br>Recreation: 1.00 × 0.25 = <strong>0.250</strong>'
        },
        {
          prompt: 'Step 3 — Sum the weighted contributions to get CPI',
          hint: 'CPI = Σ (price relative × weight). This is a weighted average of price changes. Multiply by 100 if expressing as an index.',
          answer: '0.480 + 0.368 + 0.250 = <strong>1.098</strong><br>CPI (2024) = <strong>109.8</strong> (base year = 100)'
        },
        {
          prompt: 'Step 4 — Calculate the inflation rate',
          hint: 'Inflation rate = ((CPI current − CPI base) ÷ CPI base) × 100',
          answer: 'Inflation = ((109.8 − 100) ÷ 100) × 100 = <strong>9.8%</strong>'
        },
        {
          prompt: 'Step 5 — Interpret: why is inflation 9.8% when food prices rose 20%?',
          hint: 'Think about the role of weights. What happens if Recreation had a 0.60 weight instead of 0.25?',
          answer: 'Food rose 20% but has only a 0.40 weight — its contribution is capped. Transport rose 5% and Recreation rose 0%. The weighted average (9.8%) is pulled below food\'s 20% rise because other categories rose less. <strong>Key exam point:</strong> if Recreation had a 0.60 weight with food at 0.15, CPI would be far lower — weights are crucial. This is why the ONS updates the basket annually as spending patterns change.'
        }
      ],
      conclusion: 'CPI (2024) = 109.8 → Inflation rate = <strong>9.8%</strong>. The weighting system means overall inflation reflects the full range of household spending, not just the categories with the largest price rises. Food\'s 20% rise is diluted because transport (35% weight) rose only 5% and recreation (25% weight) didn\'t rise at all.',
      examEdge: 'A common exam error is treating the CPI calculation as a simple average of price rises: (20% + 5% + 0%) ÷ 3 = 8.3%. This ignores weights. The correct method weights each category by its share of household spending. Also: CPI excludes mortgage payments and council tax — relevant for evaluating whether CPI accurately reflects the cost of living for different households.'
    },

    /* ----- CARD 3 — RPI vs CPI vs CPIH ----- */
    {
      id: 'rpi-cpi-cpih',
      template: 'paired',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'RPI vs CPI vs CPIH: the three measures',
      lede: 'Three price indices, three different numbers, three different policy uses. Knowing which is which — and when each is quoted — is an immediate A* signal.',
      pairs: [
        {
          tone: 'blue',
          label: 'RPI (Retail Price Index)',
          drivers: [
            'Includes mortgage interest payments and council tax',
            'Older, less internationally comparable methodology',
            'Usually HIGHER than CPI (by ~1 percentage point)',
            'Used for: uprating of index-linked gilts, some pension contracts, rail fares'
          ],
          example: '<strong>Why RPI matters:</strong> student loan interest rates are linked to RPI in many cohorts. Rail fares use RPI+X formula. Government prefers CPI for benefits uprating — because it\'s lower.'
        },
        {
          tone: 'green',
          label: 'CPIH (CPI + housing)',
          drivers: [
            'CPI + owner-occupier housing costs (OOH) + council tax',
            'OOH measured by rental equivalence (what it would cost to rent your home)',
            'The ONS\'s preferred headline measure since 2017',
            'Sits between CPI and RPI in most months'
          ],
          example: '<strong>Why CPIH matters:</strong> in 2022-23, housing costs surged as rents rose. CPIH captured this where CPI did not. The gap between CPI and CPIH widened — making CPIH a more accurate read for homeowners and renters.'
        }
      ],
      examEdge: {
        title: 'The political dimension',
        text: 'Governments <strong>strategically choose which measure to quote</strong>. Benefits uprating switched from RPI to CPI under the coalition in 2010 — saving billions as CPI was lower. Rail operators prefer RPI because it justifies higher fare increases. Showing you know this is a sophisticated analytical point.'
      },
      policy: {
        title: 'The Bank of England\'s target measure',
        text: 'The MPC targets <strong>CPI at 2%</strong>, not RPI or CPIH. When inflation is reported as above or below target, it\'s CPI that matters for monetary policy decisions. Always specify which index you mean in policy answers.'
      }
    },

    /* ----- CARD 4 — Limitations of price indices ----- */
    {
      id: 'price-index-limits',
      template: 'diagnose',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Limitations of measuring inflation',
      lede: 'Every price index is an average — and averages hide variation. Knowing the limitations prevents over-reliance on a single number.',
      table: {
        headers: ['Limitation', 'The problem', 'Who it affects most'],
        rows: [
          ['Substitution bias', 'People switch to cheaper alternatives when prices rise — basket becomes unrepresentative', 'Laspeyres index users (CPI)'],
          ['Quality change', 'A laptop today is better than 2010 — price rise partly reflects quality, not pure inflation', 'Technology goods'],
          ['New products', 'Products not yet in basket (e.g. streaming services) distort the index', 'Young households'],
          ['Regional variation', 'Inflation varies by UK region — one number conceals this', 'Low-income households'],
          ['Income group variation', 'Low-income households spend more on food & energy — face higher effective inflation', 'Poorest quintile'],
          ['Weights become outdated', 'Pandemic shifted spending patterns rapidly — basket lagged', '2020-21 households']
        ]
      },
      scenarios: {
        title: 'Apply the limitation',
        items: [
          {
            label: 'A',
            text: 'During 2022-23, energy prices surged 80%. Low-income households, who spend ~10% of income on energy (vs ~3% for high-income), experienced much higher effective inflation. What does this reveal?',
            answer: 'CPI masks distributional variation. The effective inflation rate for the poorest households was significantly above headline CPI. A poverty-targeted measure would have shown much higher inflation for the poorest.',
            tone: 'amber'
          },
          {
            label: 'B',
            text: 'In 2020, CPI fell despite consumers feeling financially squeezed. Clothing and holiday prices dropped, but food and energy — what the locked-down population actually spent on — rose. What\'s the issue?',
            answer: 'Substitution bias and basket composition. CPI fell due to falling weights in categories people couldn\'t buy (holidays, clothing). The basket weights did not reflect pandemic spending patterns.',
            tone: 'blue'
          }
        ]
      },
      examEdge: {
        title: 'The household inflation rate',
        text: 'ONS publishes household-specific inflation rates across income deciles. <strong>In 2022-23, the poorest decile faced ~15% inflation; the richest ~8%</strong> — a near-doubling of effective inequality through the price mechanism. Using this evidence lifts a welfare essay significantly.'
      }
    },

    /* ----- CARD 5 — Costs of inflation ----- */
    {
      id: 'inflation-costs',
      template: 'impacts',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Costs of inflation',
      lede: 'High and volatile inflation imposes real economic costs — not just higher prices. Seven distinct mechanisms, each worth a point in an exam answer.',
      groups: [
        {
          tone: 'rose',
          icon: '💸',
          label: 'Shoe-leather costs',
          bullets: [
            'People make more frequent trips to the bank to minimise cash holdings',
            'Time and transaction costs of managing money increase',
            'Named for the shoe leather worn making extra bank trips',
            'More relevant when inflation is high — less relevant at 2%'
          ]
        },
        {
          tone: 'amber',
          icon: '🏷️',
          label: 'Menu costs',
          bullets: [
            'Firms must frequently update prices — menus, catalogues, price labels',
            'Administrative burden increases with inflation rate',
            'Reduced by digital pricing but not eliminated',
            'More serious for small firms with manual pricing'
          ]
        },
        {
          tone: 'blue',
          icon: '📊',
          label: 'Fiscal drag',
          bullets: [
            'Inflation pushes nominal incomes into higher tax brackets',
            'Real tax burden rises even with no change in tax rates',
            'Sometimes called &apos;bracket creep&apos;',
            'Governments gain — workers lose purchasing power without a pay rise'
          ]
        },
        {
          tone: 'green',
          icon: '🌐',
          label: 'International competitiveness',
          bullets: [
            'Higher domestic inflation → UK goods relatively more expensive abroad',
            'Exports fall, imports rise → (X−M) deteriorates → AD falls',
            'Particularly damaging in competitive export markets',
            'Reversed if exchange rate depreciates to compensate'
          ]
        }
      ],
      winnersLosers: {
        winners: {
          label: 'Winners from inflation',
          items: [
            'Borrowers (debt erodes in real terms)',
            'Owners of real assets (land, property)',
            'Governments (debt burden falls)',
            'Firms with pricing power'
          ]
        },
        losers: {
          label: 'Losers from inflation',
          items: [
            'Savers on fixed nominal rates',
            'Holders of cash',
            'Workers on fixed wages',
            'Creditors / lenders',
            'Those on fixed incomes (pensions)'
          ]
        }
      },
      example: '<strong>UK 2022-23:</strong> CPI peaked at 11.1% (Oct 2022). Real wages fell ~4%. Mortgage holders on variable rates faced surging repayments. But owner-occupiers saw house prices hold up — a classic winners-and-losers split from inflation.',
      examEdge: {
        title: 'Uncertainty cost is the biggest',
        text: 'The most economically damaging cost of <strong>high, volatile inflation</strong> is uncertainty. Firms cannot plan investment. Workers demand higher nominal wages. Interest rates rise. Contracts become costly to write. A* answers identify this as the primary long-run cost — beyond shoe-leather and menu costs.'
      }
    },

    /* ----- CARD 6 — Costs of deflation ----- */
    {
      id: 'deflation-costs',
      template: 'deflation',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Costs of deflation: the deflationary spiral',
      lede: "Deflation sounds good — prices falling, money worth more. But it creates a self-reinforcing trap that is far harder to escape than inflation. This is why central banks fear it.",
      mechanismsTitle: 'The deflationary spiral: four interlocking mechanisms',
      mechanisms: [
        {
          icon: '⏸️',
          title: 'Consumers delay spending',
          text: 'If prices are falling, rational consumers wait — tomorrow\'s goods are cheaper than today\'s. Consumption falls → AD falls → firms cut output and staff → wages fall → consumption falls further.'
        },
        {
          icon: '📉',
          title: 'Real debt burden rises',
          text: 'Nominal debts are fixed; falling prices mean wages and revenues fall. The real value of debt <strong>rises</strong>. Firms and households cut spending to service debt → further demand collapse → Fisher debt deflation spiral.'
        },
        {
          icon: '⛔',
          title: 'Wages are sticky downward',
          text: 'Firms cannot cut nominal wages easily (unions, contracts, morale). Instead they cut jobs. Unemployment rises → incomes fall → spending falls → more deflation. The Keynesian trap the 1930s demonstrated at catastrophic scale.'
        },
        {
          icon: '🏦',
          title: 'Zero lower bound on interest rates',
          text: 'Normally central banks cut rates to stimulate. But if rates are already at 0%, there\'s no room. Real interest rates (nominal − inflation) rise as prices fall — making borrowing more expensive in real terms despite nominal zero rates.'
        }
      ],
      examples: {
        title: 'Historical episodes',
        items: [
          { period: 'Japan 1990s-2010s', text: '\'Lost decade\' of near-zero growth and intermittent deflation. Despite near-zero interest rates, the Bank of Japan struggled to reignite inflation. Still a cautionary tale for central banks.' },
          { period: 'Great Depression 1930-33', text: 'US prices fell ~25%. Real debt burdens soared. Consumption and investment collapsed. The textbook deflationary spiral — took WWII fiscal stimulus to escape.' },
          { period: 'UK 2009 fears', text: 'CPI briefly went negative in 2009. The BoE cut to 0.5% and launched QE to prevent a deflationary spiral. The intervention worked — but the risk was real.' }
        ]
      },
      examEdge: {
        title: 'Benign vs malign deflation',
        text: 'Not all deflation is harmful. <strong>Benign deflation</strong> from productivity improvements (technology making goods cheaper) is fine. <strong>Malign deflation</strong> from falling demand is the dangerous kind. A* answers distinguish the two — most exam scenarios describe the malign variety.'
      }
    },

    /* ----- CARD 7 — The 2% target: why not zero? ----- */
    {
      id: 'inflation-target',
      template: 'puzzle',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'The 2% target: why not zero?',
      lede: "If inflation is a cost, why doesn't the Bank of England target zero? The answer reveals deep insights about how monetary policy works — and is a classic A* question.",
      classical: {
        title: 'The rationale for the 2% target',
        formula: 'Target: CPI = 2% (symmetric)',
        formulaSub: 'Set by the Chancellor. The MPC is operationally independent to achieve it.',
        quote: '"A little inflation is the oil that keeps the economic machine running smoothly."',
        examples: 'The 2% target is <strong>symmetric</strong> — the Bank worries equally about overshooting (high inflation) and undershooting (deflation risk). The MPC must write an open letter to the Chancellor if CPI deviates more than 1pp from target in either direction.'
      },
      puzzle: {
        title: 'Why not 0%?',
        chartCaption: 'UK CPI inflation, 2010 – Jan 2026. The 2% target is the reference; the 2022 spike to 11.1% and the 2015-16 dip to near zero both illustrate why a buffer matters.',
        bullets: [
          '<strong>Deflation buffer:</strong> 2% provides room for the economy to absorb shocks without slipping into deflation (which is much harder to escape).',
          '<strong>Wage stickiness:</strong> with 2% inflation, firms can cut real wages by simply not raising nominal wages — lubricating labour market adjustment without the resistance that nominal cuts provoke.',
          '<strong>Measurement bias:</strong> price indices may overstate true inflation by ~0.5-1pp (substitution bias, quality adjustment). Targeting 2% may effectively be targeting ~1% true inflation.',
          '<strong>Monetary policy headroom:</strong> positive inflation allows positive nominal interest rates, giving the BoE room to cut when recession hits.'
        ],
        cliffhanger: 'Why not 4% or 5%?',
        reveal: {
          title: 'The upper constraint',
          text: "Higher inflation targets risk unanchoring expectations — if people expect 5% inflation, they demand 5% wage rises, firms raise prices, and inflation becomes self-fulfilling. The 2% target is a <strong>credibility anchor</strong>. Once lost, it's very costly to regain (as the 1970s showed).",
          hints: ['credibility', 'expectations', 'sacrifice ratio', '1970s stagflation']
        }
      },
      examEdge: {
        title: 'The sacrifice ratio',
        text: 'Reducing inflation once it\'s above target is costly. Each percentage point reduction in inflation requires roughly <strong>1-3% of GDP to be sacrificed</strong> in lost output (the sacrifice ratio). This is why central banks work hard to keep inflation anchored — regaining credibility after a shock is far more expensive than never losing it.'
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }
  ]
};
