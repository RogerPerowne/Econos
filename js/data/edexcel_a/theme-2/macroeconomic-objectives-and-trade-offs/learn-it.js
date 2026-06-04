/* ============================================================
   ECONOS – Macroeconomic Objectives (Theme 2 · 2.6.1)
   6 cards · THEORY ONLY · one storytelling pattern per card:
     C1 Decompose a diagram     — the cockpit (7 gauges)
     C2 Spectrum / regime grid  — the headline three (character sheets)
     C3 Spectrum / regime grid  — the four constraints (compass)
     C4 Interactive multi-state — Phillips workstation (2 views, theory)
     C5 Comparison              — flow-chain mechanisms (4 trade-offs)
     C6 Evidence-then-verdict   — the constraint web + A* framework
   Stagflation / historical conflicts live in the SISTER topic
   `macro-conflicts-and-trade-offs` (spec 2.6.4) — DO NOT add
   case studies here.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'macroeconomic-objectives-and-trade-offs',
  topicNum: '6.1',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Macroeconomic Objectives',
  estTime: '10-12 minutes',
  goal: 'Know the seven UK macro objectives, the structural trade-offs between them, and the A* framework for weighing one against another.',

  intro: {
    heroKey: 'heroMacroObjectives',
    summary: 'Governments pursue a whole scorecard of objectives — stable inflation, low unemployment, sustainable growth, a healthy external balance, sound public finances, environmental sustainability, and greater income equality. They cannot all be maximised at once, and the structural trade-offs between them organise half of every macro essay.',
    doInThis: 'Six cards: the cockpit (all seven objectives at a glance); the headline three (inflation, unemployment, growth); the four supporting constraints (BoP, fiscal, environment, equality); the Phillips curve as the prototypical trade-off; four more structural trade-offs; and the constraint web that ties them all together.',
    outcomes: [
      'Name and explain all seven UK macro objectives with target and measure',
      'Read a UK macro scorecard at a glance',
      'Apply the Phillips curve — SRPC, vertical LRPC, NAIRU and adaptive expectations',
      'Name the structural mechanism behind each of the five trade-offs',
      'Use the four-dimensional framework (advanced × compromised × magnitude × time horizon) to evaluate any policy'
    ],
    tip: 'Real-world UK case studies — stagflation, 2008, 2021–23, Thatcher — live in the sister topic, Macro Conflicts & Trade-offs. This topic is the theory.',
    stages: [
      { num: 1, name: 'Learn it', sub: '6 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [

    /* ============================================================
       CARD 1 — Pattern: Decompose a diagram
       Hero: macroCockpit. Seven UK macro gauges arranged as a
       pilot's dashboard. The visual IS the lesson: some gauges in
       target, some not — judge the whole scorecard.
       ============================================================ */
    {
      id: 'macro-cockpit',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'The cockpit',
      lede: 'We judge the UK economy by a whole set of objectives, not just one number. Here is the dashboard — seven gauges, seven targets, the UK\'s current reading on each.',
      ledeStyle: 'plain',
      tip: { icon: '\u{1F3AF}', tone: 'green', text: 'Good policy balances the whole scorecard — improving one objective can worsen another. Read the dashboard before you act.' },

      visualKey: 'macroCockpit',
      visualLabel: 'UK macro dashboard',
      visualEmoji: '\u{1F4CA}',

      causesPosition: 'top',
      causesLabel: 'The seven objectives',
      causesEmoji: '\u{1F4CB}',
      causesStyle: 'numbered-rows',
      causes: [
        { tone: 'rose',   icon: '\u{1F4C9}', head: 'Inflation',      body: 'Low and stable price growth — the BoE\'s <strong>2% CPI symmetric target</strong>. (CPI is the headline rate; <em>CPIH</em> adds owner-occupier housing costs and is the ONS\'s preferred measure for cost of living; <em>RPI</em> is older and overstates.)' },
        { tone: 'blue',   icon: '\u{1F465}', head: 'Unemployment',    body: 'Low joblessness — UK NAIRU around 4–5%.' },
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Growth',          body: 'Real GDP growth of around 2–2.5% per year.' },
        { tone: 'purple', icon: '\u{1F310}', head: 'Balance of payments', body: 'A sustainable current-account position with the rest of the world.' },
        { tone: 'amber',  icon: '\u{1F3DB}', head: 'Balanced government budget', body: 'Spending matched to tax receipts over the cycle — a <strong>deficit</strong> means borrowing now (debt rises); a <strong>surplus</strong> means net repayment. The objective is debt on a stable or falling path, not zero deficit every year.' },
        { tone: 'green',  icon: '\u{1F343}', head: 'Environment',     body: 'Decarbonisation compatible with net zero by 2050.' },
        { tone: 'slate',  icon: '\u{2696}',  head: 'Income equality', body: 'A falling, or at least stable, Gini coefficient.' }
      ],

      examEdge: 'Strong macro answers cite the whole dashboard — not just growth. Identify which objective the policy advances, which it strains, by how much, and over what time horizon.'
    },

    /* ============================================================
       CARD 2 — Pattern: Spectrum / regime grid
       Hero: macroHeadlineCards. The three quarterly headline
       objectives anthropomorphised as character cards. Theory only.
       ============================================================ */
    {
      id: 'headline-three',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'The headline three',
      lede: 'Three objectives are the headline numbers reported every quarter. Inflation moves fast and loud. Unemployment moves slowly with a fierce floor. Growth is the headline you read first.',
      ledeStyle: 'plain',
      tip: { icon: '\u{2705}', tone: 'green', text: 'For each: know the target, the measure, and the why. That trio is the A* anchor in every answer.' },

      visualKey: 'macroHeadlineCards',
      visualLabel: 'Meet the headline three',
      visualEmoji: '\u{1F4F0}',

      causesLabel: 'TARGET · MEASURE · CURRENT UK READING',
      causesEmoji: '\u{1F4CA}',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'rose',  icon: '\u{1F4C8}', head: 'Inflation',
          body: '<strong>Target:</strong> 2% CPI ±1pp (BoE remit).<br><strong>Measure:</strong> CPI year-on-year (ONS, monthly).<br><strong>Current:</strong> ~2.8% (a touch above target — sticky services component).' },
        { tone: 'amber', icon: '\u{1F465}', head: 'Unemployment',
          body: '<strong>Target:</strong> at or below the NAIRU (~4–5% UK estimate).<br><strong>Measure:</strong> ILO rate, 16+, three-month average (ONS).<br><strong>Current:</strong> ~4.3%.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Real GDP growth',
          body: '<strong>Target:</strong> ~2% per year (long-run UK trend).<br><strong>Measure:</strong> Real GDP, quarterly, annualised (ONS).<br><strong>Current:</strong> ~1.4% — below trend; productivity puzzle dragging.' }
      ],

      bottomTip: { tone: 'blue', icon: '\u{1F4D3}', text: 'These three are the <strong>flow</strong> measures of the economy — they update every quarter, and central banks and Treasury respond to their movement in real time. The next card covers the four <strong>constraint</strong> objectives that operate on longer time horizons.' },

      examEdge: 'Cite all three numbers from memory in any policy essay. "Inflation 2.8%, unemployment 5.0%, growth ~1.4%" is the kind of opener that signals real-economy literacy — and lets you reach for the right policy lever.'
    },

    /* ============================================================
       CARD 3 — Pattern: Spectrum / regime grid (visual pivot)
       Hero: macroConstraintCompass. Compass rose with the four
       supporting objectives at the cardinals. Two needles outside
       the green safe zone signal constraint violations at a glance.
       ============================================================ */
    {
      id: 'four-constraints',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 6',
      title: 'The four constraints',
      lede: 'Beyond the headline numbers, four more objectives shape whether growth genuinely improves lives — and whether today\'s outcomes can be sustained. Think of them as boundaries the economy must stay within.',
      ledeStyle: 'plain',
      tip: { icon: '\u{1F9ED}', tone: 'green', text: 'These are the objectives examiners reach for when they ask you to evaluate. The "yes growth was 2%, but..." pivot lives here.' },

      visualKey: 'macroConstraintCompass',
      visualLabel: 'The four supporting objectives',
      visualEmoji: '\u{1F9ED}',

      causesFirst: true,
      causesLabel: 'Each constraint in one line',
      causesEmoji: '\u{1F4D0}',
      causesStyle: 'numbered-rows',
      causes: [
        {
          tone: 'purple', icon: '\u{1F310}', head: 'Balance of payments',
          body: '<strong>Target</strong> sustainable current-account position. <strong>Measure</strong> current account % of GDP. <strong>UK current</strong> &minus;2.4% (Q4 2025). Persistent large deficits require foreign financing; the country is effectively borrowing demand from the rest of the world.'
        },
        {
          tone: 'amber', icon: '\u{1F3DB}', head: 'Fiscal sustainability',
          body: '<strong>Target</strong> debt on a stable or falling path. <strong>Measure</strong> public sector net debt % of GDP. <strong>UK current</strong> 93.8% (Mar 2026). Fiscal headroom is the buffer for the next crisis — rising debt narrows future policy choices.'
        },
        {
          tone: 'green', icon: '\u{1F343}', head: 'Protection of the environment',
          body: '<strong>Target</strong> decarbonisation path to net zero by 2050. <strong>Measure</strong> annual CO₂ emissions and the gap to the carbon budget. <strong>UK current</strong> mixed progress. Growth that breaches the budget transfers cost to people who haven’t been born yet.'
        },
        {
          tone: 'slate', icon: '\u{2696}', head: 'Greater income equality',
          body: '<strong>Target</strong> falling Gini coefficient. <strong>Measure</strong> Gini coefficient (ONS / HBAI). <strong>UK current</strong> Gini ≈ 0.36. Growth that lifts only the top deciles raises the average without raising the median — the headline is misleading.'
        }
      ],

      examEdge: 'These constraints are where the marks live. In every essay, after stating the growth/inflation/unemployment effects, pivot to: "however, this also acts on [BoP / debt / emissions / Gini] in the following way..." That pivot is the difference between a B and an A*.'
    },

    /* ============================================================
       CARD 4 — Pattern: Interactive multi-state diagram
       Hero: macroPhillipsWorkstation. Phillips curve as a lab
       notebook. Two views (SRPC, LRPC) + a CSS play-pause that
       auto-cycles the A→B→C path. THEORY ONLY — no 1970s
       stagflation view (that lives in Topic B).
       ============================================================ */
    {
      id: 'phillips-workstation',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 6',
      title: 'The Phillips curve — the prototypical trade-off',
      lede: 'The inflation–unemployment trade-off is the prototypical example of how two objectives can pull against each other. It also illustrates the most important point about every trade-off: <strong>they can break down in the long run.</strong>',
      ledeStyle: 'plain',
      tip: { icon: '\u{2705}', tone: 'green', text: 'Lower unemployment can come with higher inflation in the short run — but the relationship is unstable once expectations adjust. Press play on the diagram to watch why.' },

      visualKey: 'macroPhillipsWorkstation',
      visualLabel: 'Phillips workstation',
      visualEmoji: '\u{1F52C}',

      causesFirst: true,
      causesLabel: 'Three things you need to know',
      causesEmoji: '\u{1F9E0}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '\u{2696}', head: 'NAIRU', body: 'The unemployment rate consistent with stable inflation — where the long-run Phillips curve is vertical. UK estimate ~4–4.5%.' },
        { tone: 'amber', icon: '\u{1F4AD}', head: 'Adaptive expectations', body: 'Workers and firms build recent inflation into wage and price setting. That feedback is what shifts the short-run curve up.' },
        { tone: 'rose',  icon: '\u{26A0}', head: 'No long-run trade-off', body: 'Attempts to keep U below the NAIRU produce ever-accelerating inflation, not lower joblessness.' }
      ],

      examEdge: 'Always draw BOTH the SRPC and the vertical LRPC on the same axes; name the NAIRU; explain that adaptive expectations are what shift the SRPC up. The dynamic version of the diagram is what scores marks — a static SRPC alone is a B-grade answer.'
    },

    /* ============================================================
       CARD 5 — Pattern: Comparison (4 flow-chain tiles)
       Hero: macroTradeoffChains. Four structural trade-offs visualised
       as 3-step mechanism flow chains. Tap
       left-to-right to read each chain through the mechanism.
       ============================================================ */
    {
      id: 'structural-trade-offs',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'Four more structural trade-offs',
      lede: 'Beyond Phillips, four more pairs of objectives pull against each other in theory. Each is a structural mechanism — a chain that runs from a policy through one objective to the next. Read each chain left-to-right.',
      ledeStyle: 'plain',
      tip: { icon: '\u{1F501}', tone: 'green', text: 'Every macro trade-off is a chain. A policy raises objective X via some mechanism, and the SAME chain reduces objective Y as a side-effect.' },

      visualKey: 'macroTradeoffChains',
      visualLabel: 'Four structural trade-offs',
      visualEmoji: '\u{2696}',

      comparisonTable: {
        title: 'THE MECHANISM IN EACH CHAIN',
        emoji: '\u{1F517}',
        columns: ['Trade-off', 'Mechanism'],
        columnTones: ['blue', 'amber'],
        rows: [
          { label: 'Growth ↔ inflation',           values: ['<strong>Stronger AD raises Y AND P together</strong>',                'The closer to capacity, the steeper SRAS — more of the AD shift leaks into prices rather than output.'] },
          { label: 'Growth ↔ current account',     values: ['<strong>Higher income sucks in imports</strong>',                     'Marginal propensity to import &gt; marginal propensity to export response. A growing economy widens (X − M) deficit until competitiveness catches up.'] },
          { label: 'Growth ↔ environment',         values: ['<strong>Output rises with emissions / resource use</strong>',          'Historically Y ∝ CO₂. Decoupling requires structural change (clean tech + efficiency) outpacing output growth — not yet achieved at scale.'] },
          { label: 'Spending ↔ fiscal balance',    values: ['<strong>More G raises the budget deficit unless T responds</strong>',  'Without offsetting tax rises, the gap widens. Debt-to-GDP rises if real growth doesn\'t exceed real interest rate (r − g rule).'] }
        ]
      },

      bottomTip: { tone: 'slate', icon: '\u{1F4DD}', text: '<strong>These are theoretical mechanisms, not historical events.</strong> Real-world examples — 1970s stagflation, the 2008 GFC, 2021&ndash;23 inflation, the UK\'s persistent current-account deficit &mdash; live in the sister topic, <em>Macro Conflicts &amp; Trade-offs</em>.' },

      examEdge: 'When evaluating any policy, name <em>which</em> trade-off it activates — Phillips, growth&ndash;inflation, growth&ndash;BoP, growth&ndash;environment, or spending&ndash;fiscal. The named mechanism is what scores the marks; the example just illustrates it.'
    },

    /* ============================================================
       CARD 6 — Pattern: Evidence-then-verdict
       Hero: macroConstraintWeb. Radial diagram with 7 nodes and
       5 tension lines (hover-highlight in CSS). Below: the
       4-dimensional A* framework + a theory verdict (no examples).
       ============================================================ */
    {
      id: 'constraint-web',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 6',
      title: 'Why no objective stands alone',
      lede: 'The objectives don\'t sit in isolation. Every one of them is connected to at least one other through a structural trade-off mechanism. That\'s why we score the whole scorecard, not just one number — and why every macro essay needs a framework, not a verdict.',
      ledeStyle: 'plain',
      tip: { icon: '\u{2705}', tone: 'green', text: 'In every macro answer, name the objective being advanced AND the objective being compromised. That pair is the structure of the argument.' },

      visualKey: 'macroConstraintWeb',
      visualLabel: 'The constraint web + A* framework',
      visualEmoji: '\u{1F578}',

      conclusionPosition: 'end',
      conclusion: {
        title: 'The theory verdict',
        text: 'Macroeconomic policy is never the optimisation of one number; it is a choice along a constraint set. A good policy is one whose gains on the advanced objective outweigh its losses on the compromised one, evaluated at the right time horizon. <strong>The next topic shows you how to apply this framework to real UK conflicts.</strong>'
      },
      examEdge: 'Structure every macro policy essay around the four-dimensional framework: <em>advanced × compromised × magnitude × time horizon</em>. The framework is the difference between a B answer and an A*.',

      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};

/* ============================================================
   End-of-Learn-It quiz pool
   ============================================================ */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Macroeconomic Objectives',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.routes.learn('macroeconomic-objectives-and-trade-offs'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers the seven objectives, the Phillips curve, and the structural trade-offs',
    shortNames: [
      'Seven objectives','Phillips trade-off','SRPC vs LRPC','NAIRU','Mechanism: growth–inflation',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'Which of the following is NOT one of the seven UK macroeconomic objectives in the Edexcel spec?',
        opts: [
          'Low and stable inflation',
          'Low unemployment',
          'Maximising firm profit',
          'Greater income equality'
        ],
        ans:  2,
        exp:  'The seven Edexcel-A macro objectives are: economic growth; low unemployment; low and stable inflation; balance-of-payments equilibrium on current account; balanced government budget; protection of the environment; greater income equality. Maximising firm profit is a microeconomic business objective.'
      },
      {
        type: 'mcq',
        q:    'The short-run Phillips curve shows:',
        opts: [
          'A positive relationship between inflation and unemployment',
          'A negative relationship between inflation and unemployment',
          'The relationship between GDP growth and current account',
          'The trade-off between growth and the environment'
        ],
        ans:  1,
        exp:  'The original Phillips curve (1958) showed a negative relationship: lower unemployment came with higher wage inflation. This is the short-run trade-off.'
      },
      {
        type: 'mcq',
        q:    'According to Friedman and Phelps, the long-run Phillips curve is:',
        opts: [
          'Downward sloping, like the SRPC but flatter',
          'Vertical at the natural rate of unemployment',
          'Horizontal at the inflation target',
          'Upward sloping in periods of stagflation'
        ],
        ans:  1,
        exp:  'The LRPC is vertical at the NAIRU. Attempts to keep unemployment below the NAIRU produce ever-accelerating inflation rather than a lasting reduction in joblessness.'
      },
      {
        type: 'mcq',
        q:    'NAIRU stands for:',
        opts: [
          'National Association of Inflation Regulation Units',
          'Non-Accelerating Inflation Rate of Unemployment',
          'Net Annual Inflation Rate and Unemployment Index',
          'Nominal Adjusted Interest Rate and Unemployment'
        ],
        ans:  1,
        exp:  'NAIRU is the Non-Accelerating Inflation Rate of Unemployment — the unemployment rate at which inflation is stable. It corresponds to the vertical long-run Phillips curve.'
      },
      {
        type: 'numeric_input',
        q:    'The inflation target is 2%. Actual inflation is 5.5%. By how many percentage points does inflation exceed the target?',
        answer: 3.5,
        tolerance: 0,
        unit: 'pp',
        hint: 'Overshoot = actual − target.',
        workingSteps: ['Overshoot = 5.5% − 2% = 3.5 percentage points']
      },
      {
        type: 'categorise',
        q:    'For each policy, identify which objective it most directly advances.',
        categories: ['Lowers inflation','Lowers unemployment'],
        items: [
          { item: 'Raising interest rates',                   category: 'Lowers inflation' },
          { item: 'Expanding vocational training programmes', category: 'Lowers unemployment' },
          { item: 'Cutting government spending (austerity)',  category: 'Lowers inflation' },
          { item: 'Active labour market policies',            category: 'Lowers unemployment' },
          { item: 'Tightening monetary policy',               category: 'Lowers inflation' },
          { item: 'Subsidising apprenticeships',              category: 'Lowers unemployment' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each policy cause to the trade-off mechanism it activates.',
        pairs: [
          { cause: 'AD↑ near full capacity',                 effect: 'P↑ — growth–inflation trade-off activated' },
          { cause: 'Higher domestic income',                 effect: 'Imports↑ — growth–BoP trade-off activated' },
          { cause: 'Output↑ without decoupling',             effect: 'Emissions↑ — growth–environment trade-off activated' },
          { cause: 'G↑ without higher taxes',                effect: 'Debt/GDP↑ — spending–fiscal trade-off activated' },
          { cause: 'U pushed below NAIRU',                   effect: 'Wage demands↑ → SRPC shifts up' },
          { cause: 'Productivity gains',                     effect: 'LRAS shifts right — multiple objectives advanced' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out among the four "supporting" objectives (those that don\'t appear as a quarterly headline number)?',
        opts: ['Balance of payments','Fiscal sustainability','Inflation','Greater income equality'],
        ans:  2,
        exp:  'Inflation is a headline objective reported in monthly CPI data — it is one of the "headline three". The other three options are all constraint objectives operating on slower time horizons.'
      },
      {
        type: 'data_table',
        q:    'Use the table to identify which country best balances multiple macroeconomic objectives.',
        tableHeaders: ['Country','Inflation (%)','Unemployment (%)','GDP growth (%)','Current account (% GDP)'],
        tableData: [
          ['Alpia','2.1','4.2','2.5','-1.2'],
          ['Bortia','8.5','7.8','1.1','-6.3'],
          ['Centri','1.8','3.9','3.0','+0.5'],
          ['Dorus','12.0','5.0','4.5','-8.0']
        ],
        opts: ['Alpia','Bortia','Centri','Dorus'],
        ans:  2,
        exp:  'Centri sits closest to target on every gauge: near-target inflation, low unemployment, solid growth, and a small current-account surplus. It best balances the scorecard.'
      },
      {
        type: 'match_pairs',
        q:    'Match each concept to its correct description.',
        pairs: [
          { a: 'Phillips curve',      b: 'Short-run negative trade-off between inflation and unemployment' },
          { a: 'NAIRU',               b: 'Unemployment rate at which inflation is stable' },
          { a: 'Adaptive expectations', b: 'Workers and firms build recent inflation into wage setting' },
          { a: 'Current account',     b: 'Record of trade in goods, services, and income with the rest of the world' },
          { a: 'Gini coefficient',    b: 'A measure of income inequality from 0 (perfect equality) to 1' },
          { a: 'Net zero by 2050',    b: 'The UK\'s target for balancing greenhouse-gas emissions and removals' }
        ]
      }
    ]
  };

})();
