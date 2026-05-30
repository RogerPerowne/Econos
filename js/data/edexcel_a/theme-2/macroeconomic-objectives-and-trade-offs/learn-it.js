/* ============================================================
   ECONOS – Macroeconomic Objectives & Trade-offs (Theme 2 · 2.6.1)
   6 cards · one storytelling pattern per card:
     C1 Decompose a diagram     — the macro objectives scorecard
     C2 Interactive multi-state — the Phillips curve, 3 views
     C3 Predict-then-reveal     — diagnose the trade-off
     C4 Sequential flow chain   — stagflation mechanism
     C5 Side-by-side pair        — the supply-side argument
     C6 Evidence-then-verdict   — the trade-off verdict
   Rebuilt from ChatGPT mockups; folds in the strong UK-data content
   from the prior build.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'macroeconomic-objectives-and-trade-offs',
  topicNum: '6.1',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Macroeconomic Objectives & Trade-offs',
  estTime: '10-12 minutes',
  goal: 'Judge the economy by the whole scorecard of objectives, master the Phillips curve, and structure every policy answer around the trade-offs.',

  intro: {
    heroKey: 'heroMacroObjectives',
    summary: 'Governments pursue a whole scorecard of objectives — stable inflation, low unemployment, sustainable growth, a healthy external balance, sound public finances, and environmental sustainability. They can never all be maximised at once, and the conflicts between them organise half of every macro essay.',
    doInThis: 'Six cards: the macro objectives scorecard, the Phillips curve, diagnosing real trade-offs, the stagflation mechanism, the supply-side argument, and the four-dimensional A* verdict.',
    outcomes: [
      'State the macro objectives with their targets and current UK data',
      'Apply the Phillips curve — SRPC, the vertical LRPC, and the NAIRU',
      'Diagnose which objective a policy advances and which it compromises',
      'Explain why a supply shock causes stagflation and breaks the toolkit',
      'Evaluate whether supply-side policy can resolve the trade-offs',
      'Structure A* answers around rate × magnitude × distribution × time horizon'
    ],
    tip: 'The key insight: demand-side policy forces a choice between objectives. Supply-side reform can, in theory, ease several at once — but with long lags and up-front costs.',
    stages: [
      { num: 1, name: 'Learn it', sub: '6 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [

    /* ============================================================
       CARD 1 – Pattern: Decompose a diagram
       Hero: macroObjectivesScorecard. Six objective gauges/tiles
       carry the message that we judge the whole scorecard, then a
       5-tile row previews the trade-offs the rest of the topic explores.
       ============================================================ */
    {
      id: 'macro-objectives-scorecard',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'The macro objectives scorecard',
      lede: 'We judge the economy by a whole set of objectives, not just one number. Each has a target — and the UK rarely hits them all at once.',
      ledeStyle: 'plain',
      tip: { icon: '✅', tone: 'green', text: 'Good policy balances the whole scorecard – improving one objective can worsen another.' },

      visualKey: 'macroObjectivesScorecard',
      visualLabel: 'The six macro objectives',
      visualEmoji: '\u{1F4CA}',

      causesFirst: true,
      causesLabel: 'Five key trade-offs we will explore',
      causesEmoji: '⚖️',
      causesStyle: 'icon-top',
      causesCols: 5,
      causes: [
        { tone: 'rose',   icon: '\u{1F4C9}', head: 'Lower inflation vs higher unemployment', body: 'Tight policy cools prices but can raise joblessness.' },
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Faster growth vs more inflation',        body: 'Stimulus lifts output but can overheat the economy.' },
        { tone: 'green',  icon: '\u{1F33F}', head: 'Growth vs environmental sustainability', body: 'Strong growth today can mean higher emissions tomorrow.' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: 'Public services spending vs fiscal sustainability', body: 'More spending improves services but can raise debt and taxes.' },
        { tone: 'purple', icon: '\u{1F310}', head: 'Strong domestic demand vs external balance', body: 'High demand boosts jobs but can widen the current-account deficit.' }
      ],

      examEdge: 'Strong macro answers weigh the whole scorecard. Identify which objective improves, which worsens, by how much, and over what time horizon.'
    },

    /* ============================================================
       CARD 2 – Pattern: Interactive multi-state diagram
       Reuses the phillipsInteractive SVG (3 views) + folds the NAIRU
       material into a closing 3-tile "what you need to know" row.
       ============================================================ */
    {
      id: 'phillips-curve',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'The Phillips curve',
      lede: 'The inflation–unemployment trade-off exists in the short run, but not always in the long run.',
      ledeStyle: 'plain',
      tip: { icon: '✅', tone: 'green', text: 'In the short run, lower unemployment can come with higher inflation – but expectations can shift the whole curve.' },

      diagramKey: 'phillipsInteractive',
      steps: [
        {
          key: 'base',
          label: 'Original 1958 SRPC',
          text: 'Phillips found an empirical negative relationship between <strong>unemployment and wage inflation</strong> in UK data 1861-1957. As unemployment fell, workers gained bargaining power and wages rose. This gave policymakers a <strong>menu of choices</strong>: accept higher unemployment and low inflation, or push unemployment down and accept higher inflation.'
        },
        {
          key: 'extension',
          label: 'Friedman / Phelps',
          text: 'Friedman and Phelps argued the trade-off only exists <strong>in the short run</strong>. Push unemployment below the natural rate and workers demand higher nominal wages to compensate for inflation – the SRPC shifts up. In the long run the Phillips curve is <strong>vertical at the NAIRU</strong>: exploiting the short-run trade-off only produces permanently higher inflation.'
        },
        {
          key: 'shift',
          label: '1970s stagflation',
          text: 'In the 1970s the UK saw <strong>rising unemployment AND rising inflation together</strong> – impossible on the original curve. OPEC oil shocks shifted SRAS left; the SRPC shifted upward and both rose at once. This empirical failure ended the Keynesian consensus and launched monetarism.'
        }
      ],

      causesFirst: true,
      causesLabel: 'What you need to know',
      causesEmoji: '\u{1F9ED}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '⚖️', head: 'NAIRU',                body: 'The unemployment rate consistent with stable inflation – where the long-run Phillips curve is vertical. UK estimate ~4–4.5%.' },
        { tone: 'amber', icon: '\u{1F9E0}', head: 'Adaptive expectations', body: 'Workers and firms build recent inflation into wage and price setting, which is what shifts the short-run curve up.' },
        { tone: 'rose',  icon: '⚠️', head: 'Trade-off breaks down', body: 'In the long run you cannot keep unemployment below the NAIRU without ever-accelerating inflation.' }
      ],

      examEdge: 'Use the Phillips curve dynamically. Name the view, explain the mechanism, then say whether the trade-off is short-run only or has broken down. A* answers draw BOTH the SRPC and the vertical LRPC on one diagram.'
    },

    /* ============================================================
       CARD 3 – Pattern: Predict-then-reveal
       Three real UK scenarios; spot the conflict, then a fast-diagnosis
       checklist. Reuses the strong scenarios from the prior build.
       ============================================================ */
    {
      id: 'diagnose-trade-off',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 6',
      title: 'Diagnose the trade-off',
      lede: 'Policy choices usually improve one objective but strain another. Spot the conflict before judging the policy.',
      ledeStyle: 'plain',
      tip: { icon: '✅', tone: 'green', text: 'Strong answers diagnose the trade-off first – then decide whether it is worth it.' },

      diagnoseRowsLabel: 'Classify the case',
      diagnoseRowsEmoji: '⚖️',
      diagnoseRows: [
        {
          label: 'A', tone: 'rose', icon: '\u{1F3DB}️',
          case: 'The Bank of England raised interest rates sharply in 2021–23 (Bank Rate 0.1% → 5.25%) to bring inflation from 11.1% back to target.',
          verdict: 'Inflation objective improved, but growth weakened to near-zero and mortgage holders faced sharply higher payments – unemployment risk rose.',
          pills: [ { label: 'Inflation', dir: 'down', tone: 'rose' }, { label: 'Growth', dir: 'down', tone: 'blue' }, { label: 'Unemployment', dir: 'up', tone: 'purple' } ]
        },
        {
          label: 'B', tone: 'blue', icon: '\u{1F4C8}',
          case: 'A fiscal stimulus boosts demand while the UK already runs a persistent current-account deficit of ~4% of GDP.',
          verdict: 'Growth and jobs may improve, but the income effect sucks in imports – inflation pressure and the balance-of-payments deficit can both worsen.',
          pills: [ { label: 'Growth', dir: 'up', tone: 'blue' }, { label: 'Inflation', dir: 'up', tone: 'rose' }, { label: 'External balance', dir: 'down', tone: 'green' } ]
        },
        {
          label: 'C', tone: 'green', icon: '\u{1F465}',
          case: 'Unemployment falls to 3.7% in 2022 – below most NAIRU estimates – and wage growth accelerates to 7–8%.',
          verdict: 'Strong employment, but below the NAIRU workers gain bargaining power and inflation pressure rises through wage-push forces.',
          pills: [ { label: 'Unemployment', dir: 'down', tone: 'green' }, { label: 'Inflation', dir: 'up', tone: 'rose' } ]
        }
      ],

      flowTitle: 'Fast diagnosis',
      flowEmoji: '⚡',
      flow: [
        { tone: 'amber', title: 'Which objective improves?' },
        { tone: 'amber', title: 'Which objective worsens?' },
        { tone: 'amber', title: 'How big is the trade-off?' },
        { tone: 'amber', title: 'Over what time horizon?' }
      ],

      bottomTip: { tone: 'amber', icon: '⚠️', text: 'Do not stop at the first benefit. Macro policy nearly always has a cost elsewhere on the scorecard.' },

      examEdge: 'Write the trade-off as a sentence: <em>this policy supports X, but may worsen Y, especially in the short run.</em>'
    },

    /* ============================================================
       CARD 4 – Pattern: Sequential flow chain
       The stagflation mechanism as a 5-step chain, then history
       examples and the three policy responses.
       ============================================================ */
    {
      id: 'stagflation-mechanism',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 6',
      title: 'Stagflation – the mechanism',
      lede: 'A supply shock creates the hardest macro trade-off – prices rise while output falls.',
      ledeStyle: 'plain',
      tip: { icon: '⚠️', tone: 'amber', text: 'Stagflation is difficult because the cure for one symptom can worsen the other.' },

      flowTitle: 'The stagflation chain',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'rose',   icon: '\u{1F6E2}️', title: 'Supply shock',                   sub: 'OPEC 1973, oil shock, Ukraine energy spike.' },
        { tone: 'amber',  icon: '\u{1F4C9}',       title: 'SRAS shifts left',               sub: 'firms face higher costs.' },
        { tone: 'purple', icon: '\u{1F4CA}',       title: 'Output falls and prices rise',   sub: 'the stagflation point.' },
        { tone: 'blue',   icon: '\u{1F465}',       title: 'Workers demand higher wages',    sub: 'trying to protect real incomes.' },
        { tone: 'rose',   icon: '\u{1F504}',       title: 'Wage-price spiral',              sub: 'costs rise again and SRAS shifts further left.' }
      ],

      causes2Label: 'Examples in history',
      causes2Emoji: '\u{1F4C5}',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose',  icon: '\u{1F4C5}', head: '1973–74', body: 'OPEC quadrupled oil prices – UK inflation peaked at ~25%, unemployment rose past 1m.' },
        { tone: 'amber', icon: '\u{1F4C5}', head: '1979–80', body: 'Second oil shock – Thatcher’s tight money broke it, but at the cost of 3m+ unemployment.' },
        { tone: 'blue',  icon: '\u{1F4C5}', head: '2022–23', body: 'Energy price spike post-Ukraine – UK inflation 11.1%, growth near-zero. A milder modern parallel.' }
      ],

      causes3Label: 'Policy responses',
      causes3Emoji: '⚖️',
      causes3Cols: 3,
      causes3: [
        { tone: 'blue',  icon: '\u{1F4C9}', head: 'Tighten demand',       body: 'Lower inflation pressure, but recession worsens.<br><span style="color:#1E3A8A;font-weight:700;">Example tools:</span> higher interest rates, fiscal restraint.' },
        { tone: 'amber', icon: '\u{1F4C8}', head: 'Loosen demand',        body: 'Supports output, but inflation worsens.<br><span style="color:#B45309;font-weight:700;">Example tools:</span> lower interest rates, fiscal stimulus.' },
        { tone: 'green', icon: '⚙️', head: 'Supply-side response', body: 'Tackles the cause more directly, but slow to work.<br><span style="color:#065F46;font-weight:700;">Example tools:</span> boost energy supply, improve productivity.' }
      ],

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'Demand-side policy is blunt in a stagflation shock – tightening worsens the recession, easing worsens the inflation. The best long-run answer is to ease the supply constraint.'
      },
      examEdge: 'State clearly that a <strong>negative supply shock</strong> moves inflation and output in opposite directions – that is why the policy dilemma appears and why there is no ‘good’ demand-side response.'
    },

    /* ============================================================
       CARD 5 – Pattern: Side-by-side pair
       Can supply-side policy escape the trade-offs? Reuses the
       what-it-can-do vs caveats content from the prior build.
       ============================================================ */
    {
      id: 'supply-side-argument',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'The supply-side argument',
      lede: 'Can better productivity and capacity help us escape the usual trade-offs?',
      ledeStyle: 'plain',
      tip: { icon: '✅', tone: 'green', text: 'Supply-side policy can ease trade-offs – but it is no magic wand.' },

      pairFirst: true,
      pairLabel: 'Can we escape the trade-offs?',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        label: 'What supply-side policy can do',
        labelCenter: true,
        rows: [
          { icon: '\u{1F3AF}', text: 'Reduce the NAIRU – lower unemployment without higher inflation' },
          { icon: '\u{1F4C8}', text: 'Shift LRAS right – higher output AND lower inflation' },
          { icon: '\u{1F465}', text: 'Raise productivity and living standards' },
          { icon: '⚡',     text: 'Support growth with less inflation pressure' }
        ],
        example: { icon: '★', label: 'Example', text: 'East Asian growth miracle – fast productivity growth supported rapid expansion with low inflation and falling inequality.' }
      },
      right: {
        tone: 'amber',
        label: 'The caveats',
        labelCenter: true,
        rows: [
          { icon: '⏳', text: 'Long time lags, often 10–20 years' },
          { icon: '\u{1F4B0}', text: 'Upfront fiscal cost' },
          { icon: '\u{1F464}', text: 'Transition unemployment can rise' },
          { icon: '\u{1F465}', text: 'Inequality may widen' },
          { icon: '⛈️', text: 'External shocks can overwhelm reforms' }
        ],
        example: { icon: '★', label: 'Example', text: 'UK productivity puzzle – despite decades of reform, weak productivity limited the gains from growth.' }
      },

      causes2Label: 'Verdict pills',
      causes2Emoji: '\u{1F48A}',
      causes2Cols: 4,
      causes2: [
        { tone: 'blue',   icon: '⏱️', head: 'Timescale',    body: 'Slow – reforms take years to bite.' },
        { tone: 'rose',   icon: '\u{1F4B0}',     head: 'Cost',         body: 'Often high upfront.' },
        { tone: 'purple', icon: '\u{1F465}',     head: 'Distribution', body: 'Can be uneven across groups.' },
        { tone: 'green',  icon: '\u{1F6E1}️', head: 'Best use',   body: 'Combine with short-run demand management.' }
      ],

      examEdge: 'Use supply-side reform as the long-run answer, but say what happens in the short run while the reform is still working through – demand management still matters.'
    },

    /* ============================================================
       CARD 6 – Pattern: Evidence-then-verdict
       The evidence pile, the four-dimensional A* framework, and the
       synthesised verdict. Reuses UK macro episodes from the prior build.
       ============================================================ */
    {
      id: 'trade-off-verdict',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 6',
      title: 'The trade-off verdict',
      lede: 'Short-run trade-offs are real. Strong macro judgement weighs what improves, what worsens, and for how long.',
      ledeStyle: 'plain',
      tip: { icon: '✅', tone: 'green', text: 'Most top answers mix short-run demand management with long-run supply-side reform.' },

      causesFirst: true,
      causesLabel: 'The evidence pile',
      causesEmoji: '\u{1F4CA}',
      causesStyle: 'numbered-rows',
      causes: [
        { tone: 'rose',   icon: '\u{1F4C9}', head: '2010–12 austerity',             body: 'Tighter fiscal policy reduced the deficit, but growth halved and unemployment peaked at 8.3%. The IMF later said multipliers had been underestimated.' },
        { tone: 'purple', icon: '\u{1F4C8}', head: '2021–23 inflation surge',        body: 'Inflation jumped to 11.1%, showing the Phillips curve trade-off in real time and forcing the Bank to raise Bank Rate to 5.25%.' },
        { tone: 'blue',   icon: '\u{1F465}', head: 'Unemployment below NAIRU',           body: 'At 3.7% in 2022, tight labour markets pushed wage growth to 7–8% and added inflation pressure.' },
        { tone: 'green',  icon: '\u{1F310}', head: 'Persistent current-account deficit', body: 'The UK can sustain deficits of ~4–5% of GDP for a time, but external imbalance remains a recurring constraint on demand.' }
      ],

      causes3Label: 'The A* framework',
      causes3Emoji: '⚖️',
      causes3Cols: 4,
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'rose',  icon: '\u{1F3AF}',     head: 'Objective advanced',    body: 'Which goal does the policy help?' },
        { tone: 'blue',  icon: '\u{1F6E1}️', head: 'Objective compromised', body: 'Which goal does it strain?' },
        { tone: 'green', icon: '\u{1F39A}️', head: 'Magnitude',             body: 'How large is each effect?' },
        { tone: 'amber', icon: '\u{1F4C5}',     head: 'Time horizon',          body: 'Short-run cost, long-run gain?' }
      ],

      bottomTip: { tone: 'slate', icon: '⚖️', text: 'Judge whether the gain on one objective is worth the loss on another, and whether the trade-off is temporary or persistent.' },

      conclusionPosition: 'end',
      conclusion: {
        title: 'Final verdict',
        text: 'Short-run trade-offs are real, especially when inflation, unemployment, growth, the external balance, and fiscal pressures pull in different directions. The best policy mix is usually a blend: <strong>demand management for short-run stabilisation, and supply-side reform for the long run.</strong>'
      },
      examEdge: 'Structure every macro policy essay around trade-offs. Say which objective improves, which worsens, by how much, and over what time horizon – that four-part structure is what lifts a B to an A*.',

      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0
   These questions used to live at /quiz/<topic>/<set> as a
   standalone shell. They now ride along with the Learn It data
   under the same window.ECONOS_QUIZ global. The /quiz/ URL
   contract is gone; the quiz is the natural finisher to the
   Learn It journey, so the data lives next to learn cards.
   ============================================================ */
/* ---- quiz-main.js (quiz pool, preserved from former /quiz/ shell) ---- */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Macroeconomic Objectives & Trade-offs',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.routes.learn('macroeconomic-objectives-and-trade-offs'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers the five objectives, trade-offs, Phillips curve, and NAIRU',
    shortNames: [
      'Five objectives','Conflict: inflation/unemploy','Phillips curve','NAIRU','Stagflation',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'Which of the following is NOT typically listed as a macroeconomic objective?',
        opts: [
          'Low and stable inflation',
          'Low unemployment',
          'Maximising firm profit',
          'Sustainable economic growth'
        ],
        ans:  2,
        exp:  'The five main macroeconomic objectives are: low inflation, low unemployment, sustainable growth, a satisfactory current account, and fiscal sustainability. Maximising firm profit is a microeconomic business objective, not a macroeconomic goal.'
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
        exp:  'The original Phillips curve (1958) showed a negative relationship: when unemployment was low, wage demands pushed prices up (higher inflation); when unemployment was high, wage pressure fell (lower inflation). This is the short-run trade-off.'
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
        exp:  'NAIRU is the Non-Accelerating Inflation Rate of Unemployment – the level of unemployment at which inflation is stable. Below NAIRU, inflation accelerates; above it, inflation falls. It corresponds to the vertical long-run Phillips curve.'
      },
      {
        type: 'mcq',
        q:    'A potential conflict between macroeconomic objectives occurs when:',
        opts: [
          'A policy to reduce inflation simultaneously reduces unemployment',
          'A policy to boost growth also improves the current account',
          'Policies to reduce unemployment by boosting demand may also raise inflation',
          'Lower interest rates reduce both inflation and unemployment'
        ],
        ans:  2,
        exp:  'Expanding demand (e.g., lower interest rates) can reduce unemployment but also push up prices – this is the classic inflation-unemployment trade-off. More growth can also worsen the current account as imports rise.'
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
        q:    'Categorise each policy as more likely to achieve lower inflation or lower unemployment.',
        categories: ['Reduces inflation','Reduces unemployment'],
        items: [
          { item: 'Raising interest rates',                   category: 'Reduces inflation' },
          { item: 'Expanding vocational training programmes', category: 'Reduces unemployment' },
          { item: 'Cutting government spending (austerity)',  category: 'Reduces inflation' },
          { item: 'Increasing job centre effectiveness',      category: 'Reduces unemployment' },
          { item: 'Tightening monetary policy',               category: 'Reduces inflation' },
          { item: 'Subsidising apprenticeships',              category: 'Reduces unemployment' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each macroeconomic cause to its effect on objectives.',
        pairs: [
          { cause: 'Government stimulates AD to cut unemployment',  effect: 'Inflation may rise – trade-off activated' },
          { cause: 'Strong growth boosts imports',                  effect: 'Current account deficit may widen' },
          { cause: 'Central bank raises interest rates',            effect: 'Inflation falls but growth and employment may suffer' },
          { cause: 'Supply-side policies improve productivity',     effect: 'Growth rises without inflation – objectives aligned' },
          { cause: 'Negative supply shock hits the economy',        effect: 'Stagflation: higher inflation and higher unemployment' },
          { cause: 'Large fiscal deficit persists',                 effect: 'Government debt rises; fiscal sustainability threatened' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Phillips curve','NAIRU','Laffer curve','Stagflation'],
        ans:  2,
        exp:  'The Phillips curve, NAIRU, and stagflation are all directly related to the inflation-unemployment relationship. The Laffer curve is a fiscal concept about the relationship between tax rates and tax revenue – not an inflation/employment-and-unemployment concept.'
      },
      {
        type: 'data_table',
        q:    'Use the table to identify which country best achieves multiple macroeconomic objectives.',
        tableHeaders: ['Country','Inflation (%)','Unemployment (%)','GDP growth (%)','Current account (% GDP)'],
        tableData: [
          ['Alpia','2.1','4.2','2.5','-1.2'],
          ['Bortia','8.5','7.8','1.1','-6.3'],
          ['Centri','1.8','3.9','3.0','+0.5'],
          ['Dorus','12.0','5.0','4.5','-8.0']
        ],
        opts: ['Alpia','Bortia','Centri','Dorus'],
        ans:  2,
        exp:  'Centri has near-target inflation (1.8%), low unemployment (3.9%), solid growth (3%), and a small current account surplus. It best achieves multiple macro objectives simultaneously.'
      },
      {
        type: 'match_pairs',
        q:    'Match each macroeconomic concept to its correct description.',
        pairs: [
          { a: 'Phillips curve',      b: 'Short-run negative trade-off between inflation and unemployment' },
          { a: 'NAIRU',               b: 'Unemployment rate at which inflation is stable' },
          { a: 'Stagflation',         b: 'Rising inflation occurring simultaneously with rising unemployment' },
          { a: 'Current account',     b: 'Record of trade in goods, services, and income transfers with the rest of the world' },
          { a: 'Fiscal sustainability',b: 'Government managing debt and deficit without endangering long-run finances' },
          { a: 'Supply-side policy',  b: 'Measures that improve productive capacity and shift LRAS rightward' }
        ]
      }
    ]
  };

})();
