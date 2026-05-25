/* ============================================================
   ECONOS — content data for inflation_meas
   6 cards · rebuilt from mockups · Edexcel Theme 2.2.1
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'inflation_meas',
  topicNum: '2.2.1',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Inflation: Measurement & Costs',
  estTime: '10-12 minutes',
  goal: 'Lock in what inflation is, how CPI / RPI / CPIH measure it, the costs of high inflation and deflation, and why real values matter.',

  intro: {
    heroKey: 'heroBars',
    summary: "Inflation, disinflation and deflation are not the same. CPI, RPI and CPIH measure prices differently. High inflation hurts savers, exporters and the uncertain — deflation traps the economy. And the gap between nominal and real values is where exam marks are won or lost.",
    doInThis: 'Seven cards: what inflation is, how CPI is built, a worked CPI calculation, the three UK measures (CPI / RPI / CPIH), the costs of inflation, fiscal drag and real vs nominal, and the costs of deflation.',
    outcomes: [
      'Distinguish inflation, disinflation and deflation precisely',
      'Explain how CPI is constructed and why weighting matters',
      'Compare CPI, RPI and CPIH and identify when each is used',
      'Evaluate the costs of inflation, deflation and the real-vs-nominal distinction'
    ],
    tip: 'Inflation is measured as the % change in a price index. CPI = 2% is the BoE target; RPI tends to run higher; CPIH adds owner-occupier housing costs.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards',                 state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context',   state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',      state: 'locked' }
    ]
  },

  cards: [

    /* ====================================================================
       CARD 1 — What is inflation?
       Inflation vs deflation vs disinflation. Why it matters. Common trap.
       ==================================================================== */
    {
      id: 'what-is-inflation',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'What is inflation?',
      lede: 'Inflation is a sustained rise in the general price level. Over time, money buys fewer goods and services — affecting wages, savings, living standards, and policy decisions.',
      ledeStyle: 'plain',

      keyDistinction: {
        icon: '🔎',
        title: 'The key distinction',
        items: [
          { term: 'Inflation',    color: '#059669', text: 'prices are rising and the general price level is going up.' },
          { term: 'Disinflation', color: '#7C3AED', text: 'inflation is still positive, but the rate of inflation is falling.' },
          { term: 'Deflation',    color: '#E11D48', text: 'the general price level is falling (negative inflation).' }
        ]
      },

      causesFirst: true,
      causesLabel: null,
      causes: [
        {
          tone: 'green',
          head: 'Inflation',
          svgKey: 'trendCurveUp',
          body: 'Prices are rising and the price level is going up.',
          example: { icon: '🧺', label: 'Example', text: 'Basket from <strong>£100 → £105</strong>' }
        },
        {
          tone: 'purple',
          head: 'Disinflation',
          svgKey: 'trendCurveWavy',
          body: 'Prices are still rising, but more slowly.',
          example: { icon: '🧺', label: 'Example', text: 'Basket from <strong>£100 → £102</strong>' }
        },
        {
          tone: 'rose',
          head: 'Deflation',
          svgKey: 'trendCurveDown',
          body: 'The general price level is falling.',
          example: { icon: '🧺', label: 'Example', text: 'Basket from <strong>£100 → £98</strong>' }
        }
      ],

      whyItMatters: {
        title: 'Why it matters',
        items: [
          { tone: 'green',  icon: '👥', label: 'Households',  text: 'Affects purchasing power, wages, and the value of savings.' },
          { tone: 'purple', icon: '🏭', label: 'Firms',       text: 'Affects costs, pricing decisions, investment, and profits.' },
          { tone: 'amber',  icon: '🏛️', label: 'Government',  text: 'Affects tax revenues, welfare costs, debt and living standards.' },
          { tone: 'blue',   icon: '🏦', label: 'Central bank', text: 'Monitors inflation to achieve price stability and support growth.' }
        ]
      },

      lockIn: {
        items: ['Definition of inflation', 'Inflation vs deflation vs disinflation', 'General price level idea', 'Why it matters']
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Examiners love the precise distinction between disinflation and deflation — use the terms accurately. State that inflation is measured as the <strong>rate of change of a price index</strong>, not the price level itself.'
      }
    },

    /* ====================================================================
       CARD 2 — Measuring inflation: CPI
       How the Consumer Prices Index is built. Weighted basket. Worked example.
       ==================================================================== */
    {
      id: 'measuring-cpi',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'Measuring inflation: CPI',
      lede: 'CPI tracks the average change in the prices households pay — but not every price moves equally, so <strong>weights matter</strong>.',

      flowTitle: 'How CPI is built',
      flow: [
        { tone: 'green',  icon: '🧺', title: 'Basket of goods & services', sub: 'A representative basket of ~700 everyday items the ONS tracks.' },
        { tone: 'blue',   icon: '⚖️', title: 'Weights',                    sub: 'Categories with bigger shares of household spending count more.' },
        { tone: 'amber',  icon: '🛒', title: 'Price collection',           sub: 'Prices gathered monthly from shops and online retailers across the UK.' },
        { tone: 'purple', icon: '📈', title: 'Index & annual rate',         sub: 'The basket cost is compared to a base period to give the inflation rate.' }
      ],

      causesLabel: 'Weighted categories (example CPI weights)',
      causes2Cols: 5,
      causes: [
        { tone: 'green',  icon: '🏠', head: 'Housing & household services', body: '<strong>32%</strong>' },
        { tone: 'blue',   icon: '🚗', head: 'Transport',                     body: '<strong>16%</strong>' },
        { tone: 'amber',  icon: '🍞', head: 'Food & drink',                   body: '<strong>15%</strong>' },
        { tone: 'purple', icon: '🎬', head: 'Recreation',                     body: '<strong>9%</strong>' },
        { tone: 'rose',   icon: '👕', head: 'Clothing',                       body: '<strong>5%</strong>' }
      ],

      equation: {
        label: 'Mini worked example',
        emoji: '🧮',
        terms: [
          { tone: 'slate', icon: '🧺', title: 'Basket cost last year', sub: '£200' },
          { tone: 'blue',  icon: '🧺', title: 'Basket cost this year',  sub: '£210' }
        ],
        operator: '→',
        resultOperator: '=',
        result: { tone: 'green', icon: '📈', title: 'Annual inflation', sub: '5%' }
      },

      conclusion: {
        title: 'Why weighting matters',
        text: 'If <strong>petrol has a high weight</strong>, fuel price rises matter more. If <strong>cinema tickets rise</strong>, the impact is smaller. CPI reflects average household spending patterns — not every household experiences the headline rate.'
      },

      tip: {
        icon: '⚠️',
        tone: 'rose',
        text: '<strong>Common trap:</strong> CPI is an average — <em>one</em> price rise does not prove inflation. The general price level across the basket must rise.'
      },

      lockIn: {
        items: ['Basket', 'Weights', 'Price collection', 'Annual percentage change']
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Strong answers explain that CPI is <strong>weighted</strong>, so categories with bigger shares of household spending influence the overall rate more. Note too that CPI <strong>excludes mortgage interest and council tax</strong> — a critical limitation for homeowners with large mortgages.'
      }
    },

    /* ====================================================================
       CARD 3 — Worked example: calculating CPI and the inflation rate
       Step-by-step weighted-average calculation. Salvaged from pre-rebuild.
       ==================================================================== */
    {
      id: 'cpi-worked',
      template: 'worked-example',
      stepLabel: 'Learn: Step 3 of 7',
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

    /* ====================================================================
       CARD 4 — RPI and CPIH
       Three measures, three uses. Why the measure chosen matters.
       ==================================================================== */
    {
      id: 'rpi-and-cpih',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'RPI and CPIH',
      lede: 'Different inflation measures include different housing costs — that is why the reported rate, and what it is used for, can differ.',

      causesFirst: true,
      causesLabel: 'Three measures at a glance',
      causes: [
        {
          tone: 'green',
          icon: '🏠',
          head: 'CPI',
          body: 'Official headline consumer inflation measure. Excludes most owner-occupier housing costs. <strong>Widely used by the Bank of England for the inflation target.</strong>'
        },
        {
          tone: 'amber',
          icon: '🏠',
          head: 'RPI',
          body: 'Older measure. Includes some housing-related costs such as <strong>mortgage interest</strong>. Still used in some index-linking settings (rail fares, index-linked gilts, some pensions).'
        },
        {
          tone: 'blue',
          icon: '🏠',
          head: 'CPIH',
          body: 'CPI plus <strong>owner-occupier housing costs</strong>. Aims to give a broader housing-adjusted picture. The ONS preferred measure since 2017.'
        }
      ],

      causes2Label: 'Why the measure chosen matters',
      causes2: [
        { tone: 'green', icon: '1️⃣', head: 'Pensions & rail fares',       body: 'Pension uprating, student loan interest and rail fares may differ depending on which index is cited.' },
        { tone: 'blue',  icon: '2️⃣', head: 'Wage negotiations',            body: 'Pay claims depend on which inflation measure unions and employers reference.' },
        { tone: 'amber', icon: '3️⃣', head: 'Policy conclusions',           body: 'If housing inflation is important, CPIH may show a very different picture from headline CPI.' }
      ],

      equation: {
        label: 'Example annual rates (illustrative)',
        emoji: '📊',
        terms: [
          { tone: 'green', icon: '🏠', title: 'CPI',  sub: '3.2%' },
          { tone: 'amber', icon: '🏠', title: 'RPI',  sub: '4.1%' }
        ],
        operator: '·',
        resultOperator: '·',
        result: { tone: 'blue', icon: '🏠', title: 'CPIH', sub: '3.6%' }
      },

      conclusion: {
        title: 'When housing costs rise quickly',
        text: 'When housing costs surge — as in 2022-23 — <strong>CPIH may report a higher rate than CPI</strong>. Choosing which measure to quote has real-world winners and losers: benefits uprating switched from RPI to CPI in 2010, saving the government billions because CPI was lower.'
      },

      lockIn: {
        items: ['CPI', 'RPI', 'CPIH', 'Why choice matters']
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Do not just list the measures — <strong>explain what is included</strong>, especially housing costs, and why that affects interpretation. Strong answers note the <strong>political dimension</strong>: governments choose which measure to quote depending on the policy context.'
      }
    },

    /* ====================================================================
       CARD 4 — Costs of inflation
       Five main costs. Winners and losers. The chain of impact.
       ==================================================================== */
    {
      id: 'costs-of-inflation',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Costs of inflation',
      lede: 'The harm depends on how high and how unpredictable inflation is — mild, anticipated inflation is manageable, but unstable inflation creates wider economic costs.',

      causesFirst: true,
      causesLabel: 'The main costs',
      causes: [
        { tone: 'green',  icon: '🏷️', head: 'Menu costs',         body: 'Firms must keep changing prices, menus, catalogues and systems.' },
        { tone: 'blue',   icon: '👟', head: 'Shoe-leather costs',  body: 'People spend time and effort managing cash balances and seeking the best rates.' },
        { tone: 'amber',  icon: '⚖️', head: 'Redistribution',      body: 'Creditors lose and debtors gain; fixed incomes fall behind variable incomes.' },
        { tone: 'rose',   icon: '☁️', head: 'Uncertainty',         body: 'Harder planning reduces investment, confidence and long-term spending.' },
        { tone: 'purple', icon: '🌐', head: 'Lost competitiveness', body: 'If UK inflation is higher than rivals, exports become less competitive and (X−M) deteriorates.' }
      ],

      pairLabel: 'Winners and losers',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '✅',
        iconStyle: 'circle',
        label: 'May gain',
        text: 'Debtors (real value of debt erodes). Owners of real assets (land, property). Governments with large nominal debt. Firms with pricing power that adjust prices quickly.'
      },
      right: {
        tone: 'rose',
        icon: '❌',
        iconStyle: 'circle',
        label: 'May lose',
        text: 'Savers and creditors on fixed nominal rates. Workers on fixed wages. Pensioners on fixed incomes. Holders of cash. Exporters in competitive markets.'
      },

      flowTitle: 'The chain of impact',
      flow: [
        { tone: 'amber',  icon: '📈', title: 'Higher inflation',  sub: 'Especially if high and volatile.' },
        { tone: 'amber',  icon: '❓', title: 'Uncertainty',        sub: 'Firms and households cannot plan.' },
        { tone: 'rose',   icon: '📉', title: 'Weaker investment',  sub: 'Long-term decisions get delayed.' },
        { tone: 'rose',   icon: '🐌', title: 'Slower growth',       sub: 'Reduced productive potential.' }
      ],

      tip: {
        icon: '⚠️',
        tone: 'rose',
        text: '<strong>Common trap:</strong> not all inflation is equally damaging — the biggest problems come when inflation is <em>high, volatile or unexpected</em>. Mild, anticipated inflation is manageable.'
      },

      lockIn: {
        items: ['Menu costs', 'Redistribution', 'Uncertainty', 'Competitiveness']
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Evaluation should distinguish between <strong>anticipated low inflation</strong> (largely benign) and <strong>high, unpredictable inflation</strong> (the latter causes the bigger welfare losses through uncertainty, lost investment and misallocation).'
      }
    },

    /* ====================================================================
       CARD 5 — Fiscal drag and real vs nominal
       The gap between nominal and real. Frozen thresholds = stealth tax rise.
       ==================================================================== */
    {
      id: 'fiscal-drag-real-vs-nominal',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Fiscal drag and real vs nominal',
      lede: 'Inflation changes money values on paper — what matters for living standards is the <strong>real value after inflation</strong>.',

      causesFirst: true,
      causesLabel: 'Nominal vs real — three worked examples',
      causes: [
        {
          tone: 'green',
          icon: '💷',
          head: 'Real wage growth',
          body: 'Nominal pay rises <strong>6%</strong> − inflation <strong>4%</strong> = <strong>real pay rises ~2%</strong>. Real growth shows the change in purchasing power.'
        },
        {
          tone: 'blue',
          icon: '🏦',
          head: 'Real interest rate',
          body: 'Nominal interest <strong>5%</strong> − inflation <strong>3%</strong> = <strong>real interest ~2%</strong>. The real rate shows the true return after inflation.'
        },
        {
          tone: 'amber',
          icon: '🏠',
          head: 'Real cost of debt',
          body: 'Mortgage rate <strong>5%</strong> − inflation <strong>4%</strong> = <strong>real cost ~1%</strong>. Inflation erodes the real burden of nominal debt.'
        }
      ],

      flowTitle: 'How fiscal drag works',
      flow: [
        { tone: 'slate',  icon: '❄️', title: 'Tax thresholds frozen',  sub: 'Personal allowance and bands held fixed in nominal terms.' },
        { tone: 'amber',  icon: '💷', title: 'Nominal wages rise',      sub: 'Pay rises with inflation, but thresholds do not.' },
        { tone: 'rose',   icon: '⬆️', title: 'More income above thresholds', sub: 'A larger share of pay falls into higher tax bands.' },
        { tone: 'rose',   icon: '🪙', title: 'Stealth tax rise',         sub: 'Workers pay more tax without any real pay increase.' }
      ],

      keyTerms: [
        { term: 'Nominal value',  def: 'A money amount stated in today\'s prices, ignoring inflation.' },
        { term: 'Real value',      def: 'A money amount adjusted for inflation — the change in actual purchasing power.' },
        { term: 'Fiscal drag',     def: 'Frozen tax thresholds plus rising nominal wages → more income taxed at higher rates → a stealth tax rise.' },
        { term: 'Real interest rate', def: 'Nominal interest rate minus the inflation rate.' }
      ],

      tip: {
        icon: '⚠️',
        tone: 'rose',
        text: '<strong>Common trap:</strong> a rise in <em>nominal</em> wages does not mean living standards have improved. Always compare with inflation to get the real change.'
      },

      lockIn: {
        items: ['Nominal values', 'Real values', 'Fiscal drag', 'Real pay']
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Always compare wages, interest or tax thresholds with inflation. Examiners reward the phrase <em>real value after adjusting for inflation</em> — and the explicit identification of fiscal drag as a stealth tax rise when thresholds are frozen.'
      }
    },

    /* ====================================================================
       CARD 6 — Costs of deflation
       The deflationary spiral. Why central banks fear it.
       ==================================================================== */
    {
      id: 'costs-of-deflation',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'Costs of deflation',
      lede: 'Lower prices sound attractive, but persistent deflation can <strong>weaken spending, output and jobs</strong> — and is far harder to escape than inflation.',

      flowTitle: 'Why deflation is dangerous',
      flow: [
        { tone: 'rose', icon: '📉', title: 'Falling prices',           sub: 'Across the basket, not just one sector.' },
        { tone: 'rose', icon: '⏸️', title: 'Consumers delay spending', sub: 'Why buy today if it will be cheaper next month?' },
        { tone: 'rose', icon: '🏭', title: 'Firms sell less',           sub: 'Demand falls; revenues shrink.' },
        { tone: 'rose', icon: '👥', title: 'Output & jobs fall',         sub: 'Firms cut production and lay off staff.' },
        { tone: 'rose', icon: '💰', title: 'Incomes fall',                sub: 'Wages stagnate or fall; spending power weakens further.' },
        { tone: 'rose', icon: '📉', title: 'Further downward pressure',  sub: 'The spiral feeds itself and gets harder to break.' }
      ],

      causesLabel: 'The key costs',
      causes: [
        { tone: 'rose', icon: '⏸️', head: 'Delayed spending',         body: 'Households wait for lower prices. Aggregate demand falls.' },
        { tone: 'rose', icon: '🧾', head: 'Real debt burden rises',    body: 'Debts are fixed in money terms — as prices fall, the real burden grows and debtors cut spending to repay.' },
        { tone: 'rose', icon: '🌀', head: 'Deflationary spiral risk',  body: 'Weaker demand feeds further falls in prices and output. Hard to break without aggressive policy.' }
      ],

      pairLabel: 'Inflation vs deflation',
      pairEmoji: '⚖️',
      left: {
        tone: 'amber',
        icon: '📈',
        iconStyle: 'circle',
        label: 'Inflation',
        text: 'Erodes purchasing power, but mild inflation is manageable and signals a growing economy.'
      },
      right: {
        tone: 'rose',
        icon: '📉',
        iconStyle: 'circle',
        label: 'Deflation',
        text: 'Weakens demand and raises real debt burdens. Central banks treat it as the bigger risk — Japan\'s lost decades are the canonical warning.'
      },

      conclusion: {
        title: 'Why policymakers worry',
        text: 'Deflation increases <strong>unemployment risk</strong>, raises <strong>recession risk</strong>, and makes <strong>monetary policy harder</strong> when interest rates are already low (the zero lower bound). The Bank of England targets 2% partly to keep a safe buffer above zero.'
      },

      lockIn: {
        items: ['Delayed spending', 'Real debt', 'Spiral', 'Difference from disinflation']
      },

      examEdge: {
        title: 'Exam edge',
        text: '<strong>Deflation is more dangerous than disinflation.</strong> Disinflation means prices are still rising — just more slowly. Deflation means the price level is <em>actually falling</em>. Distinguish too between <strong>benign deflation</strong> (productivity-driven, falling prices alongside rising output) and <strong>malign deflation</strong> (demand-driven, falling prices alongside falling output) — most exam scenarios are the malign variety.'
      },

      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
