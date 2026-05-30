/* ============================================================
   ECONOS — Macro Conflicts & Trade-offs (Theme 2 · 2.6.4)
   6 cards · APPLIED case studies. Built tightly to the ChatGPT
   design mockups. Theory + Phillips-curve mechanics live in the
   sister topic `macroeconomic-objectives-and-trade-offs` (2.6.1).
     C1 Decompose a diagram       — the conflict lens (5-tile map)
     C2 Predict-then-reveal       — diagnose the trade-off (3 cases)
     C3 Sequential flow chain     — 1970s stagflation case
     C4 Side-by-side pair         — the 2021–23 inflation surge case
     C5 Side-by-side pair         — the supply-side escape route
     C6 Evidence-then-verdict     — the A* verdict on any conflict
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'macro-conflicts-and-trade-offs',
  topicNum: '6.4',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Macro Conflicts & Trade-offs',
  estTime: '11-13 minutes',
  goal: 'See the macro trade-offs play out in five real UK cases, and build the four-dimensional A* framework for evaluating any policy conflict.',

  intro: {
    heroKey: 'heroMacroObjectives',
    summary: 'Macroeconomic objectives often pull in different directions. This topic shows the theory of trade-offs in five real-world cases — 1970s stagflation, 2021–23 inflation, the 2010s current-account deficit, 2010–12 austerity, the net-zero pathway — and the framework for judging any policy that has to make a hard choice.',
    doInThis: 'Six cards: the conflict lens (a map of five real UK trade-offs); diagnose three real policy cases; the 1970s stagflation case in depth; the 2021–23 inflation surge in real time; the supply-side escape route; and the four-dimensional A* verdict framework.',
    outcomes: [
      'Map five real UK trade-offs to the objectives they pit against each other',
      'Diagnose the trade-off in any policy scenario from a short prompt',
      'Explain the 1970s stagflation case as the Phillips curve break-down',
      'Analyse the 2021–23 UK inflation surge and the BoE response',
      'Evaluate supply-side policy as the long-run escape route, with realistic caveats',
      'Structure A* essays around: objective advanced × compromised × magnitude × time horizon'
    ],
    tip: 'The theory — what each objective is, what the Phillips curve says, what each structural trade-off mechanism is — lives in the sister topic, Macroeconomic Objectives. This topic is the case studies.',
    stages: [
      { num: 1, name: 'Learn it', sub: '6 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [

    /* CARD 1 — The conflict lens (Decompose a diagram). */
    {
      id: 'conflict-lens',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'The conflict lens',
      lede: 'Macroeconomic objectives often pull in different directions. Policy is the art of managing these trade-offs to deliver the best possible outcome.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'diagram', svgKey: 'conflictLensMap' },
        { type: 'sectionHeader', icon: '📊', label: 'Conflict analysis' },
        { type: 'mechanismChain', steps: [
          { label: 'The trade-off',     detail: 'Which objectives collide and why?' },
          { label: 'The policy choice', detail: 'What can policy do about it?' },
          { label: 'The legacy',        detail: 'Who wins, who loses, and for how long?' }
        ]},
        { type: 'bigIdea', text: 'Big idea: Good macro analysis identifies both the gain and the sacrifice.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Strong essays identify the conflict before judging the policy.' }
      ]
    },

    /* CARD 2 — Diagnose the trade-off (Predict-then-reveal). */
    {
      id: 'diagnose-trade-off',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'Diagnose the trade-off',
      lede: 'Read each case and predict the likely macroeconomic trade-off. Then reveal the outcome.',
      ledeStyle: 'plain',

      diagnoseRowsLabel: 'Predict, then reveal',
      diagnoseRowsEmoji: '\u{1F441}\u{FE0F}',
      diagnoseRowsReveal: true,
      diagnoseRows: [
        {
          label: 'A', tone: 'blue',
          title: 'BoE rate hike 2021&ndash;23',
          case: 'The Bank of England raised Bank Rate from 0.1% to 5.25% to bring down high inflation.',
          prompt: 'What trade-off does this policy decision create?',
          verdictIcon: '\u{1F4CA}',
          verdict: 'Inflation improved, but growth weakened and unemployment edged up.',
          pills: [
            { label: 'Inflation Improved',     dir: 'down', tone: 'green' },
            { label: 'Growth Weaker',          dir: 'down', tone: 'rose' },
            { label: 'Unemployment Up slightly', dir: 'up', tone: 'rose' }
          ]
        },
        {
          label: 'B', tone: 'amber',
          title: 'Fiscal stimulus plus persistent current account deficit',
          case: 'Government boosts spending and tax cuts support demand and jobs, while imports rise faster than exports.',
          prompt: 'What trade-off does this policy mix create?',
          verdictIcon: '\u{1F4CA}',
          verdict: 'Growth and employment rose, but the external balance worsened and inflation pressure built.',
          pills: [
            { label: 'Growth Up',                  dir: 'up',   tone: 'green' },
            { label: 'Employment Up',              dir: 'up',   tone: 'green' },
            { label: 'Balance of payments Weaker', dir: 'down', tone: 'rose' },
            { label: 'Inflation Slightly higher',  dir: 'up',   tone: 'amber' }
          ]
        },
        {
          label: 'C', tone: 'green',
          title: 'Sub-NAIRU wages 2022',
          case: 'Unemployment fell below the NAIRU, labour shortages emerged and wage growth picked up.',
          prompt: 'What trade-off does this situation create?',
          verdictIcon: '\u{1F4CA}',
          verdict: 'Low unemployment supported activity, but wage and price pressures intensified.',
          pills: [
            { label: 'Unemployment Down',         dir: 'down', tone: 'green' },
            { label: 'Wage inflation Up',         dir: 'up',   tone: 'rose' },
            { label: 'CPI inflation pressure Up', dir: 'up',   tone: 'rose' },
            { label: 'Short-run growth Supported', dir: 'up',  tone: 'green' }
          ]
        }
      ],

      bottomTip: { tone: 'blue', icon: '\u{2139}\u{FE0F}', text: '<strong>Fast rule:</strong> policy conflicts can be spotted by asking: which objective improves &mdash; and which is sacrificed?' },

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'The same policy can help one macroeconomic objective while harming another.'
      },
      examEdge: 'The best answers name the trade-off explicitly, then judge whether the sacrifice was worth it.'
    },

    /* CARD 3 — 1970s stagflation (Sequential flow chain). */
    {
      id: 'stagflation-1970s',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 6',
      title: '1970s stagflation',
      lede: '<em>The case the Phillips curve could not explain.</em>',
      ledeStyle: 'plain',
      tip: { icon: '\u{2705}', tone: 'green', text: 'In the 1970s, economies faced rising inflation and rising unemployment at the same time &mdash; a challenge the simple Phillips curve could not explain.' },

      visualKey: 'stagflation5Step',
      visualLabel: 'The 1970s stagflation mechanism',
      visualEmoji: '\u{1F517}',

      interactiveDiagram: {
        svgKey: 'stagflationPhillipsInteractive',
        label: 'On the Phillips curve',
        emoji: '\u{1F4C9}',
        layers: ['phil-1', 'phil-2', 'phil-3'],
        views: [
          {
            label: 'Original 1958 SRPC',
            tone: 'blue',
            show: ['phil-1'],
            head: 'A clean inverse trade-off',
            body: 'Bill Phillips found a stable empirical inverse relationship between unemployment and wage inflation. Equilibrium <strong>A</strong> sat at the natural rate U_N with steady inflation π₀.',
            analysis: 'In the 1958 world, demand stimulus could buy lower unemployment by accepting higher inflation. Policymakers thought they had a stable menu of choices to pick from.'
          },
          {
            label: 'Friedman / Phelps long run',
            tone: 'purple',
            show: ['phil-2'],
            head: 'No long-run trade-off',
            body: 'Push unemployment below U_N to <strong>B</strong> and workers eventually demand wages to compensate for inflation. The SRPC shifts up to SRPC₂; the economy lands at <strong>C</strong> &mdash; back at U_N but with permanently higher inflation.',
            analysis: 'The long-run Phillips curve is vertical at the NAIRU. Adaptive expectations do the work: any attempt to exploit the short-run trade-off only ratchets up inflation.'
          },
          {
            label: '1970s stagflation',
            tone: 'rose',
            show: ['phil-3'],
            head: 'The curve breaks down',
            body: 'OPEC shocked SRAS left. SRPC₃ shifted up parallel to SRPC₁ &mdash; not from expectations but from a real supply shock. The economy ended at <strong>S</strong>: <em>higher</em> U <em>and</em> higher π &mdash; a point the original 1958 curve said was impossible.',
            analysis: 'Stagflation is the empirical falsification of the simple Phillips curve. It shows there is no single curve to walk along: the curve itself moves when supply conditions change.'
          }
        ]
      },

      visualKey2: 'stagflationTimeline',
      visualLabel2: 'The case study timeline',
      visualEmoji2: '\u{1F4C5}',

      causes3Label: 'Demand-side responses and their costs',
      causes3Emoji: '\u{2696}\u{FE0F}',
      causes3Cols: 3,
      causes3: [
        { tone: 'blue',  icon: '\u{1F4C8}', head: 'Tighten',          body: '<strong>Rates up / spending down.</strong><br>Inflation lower, but recession deeper.' },
        { tone: 'amber', icon: '\u{1F4C9}', head: 'Ease',             body: '<strong>Rates down / spending up.</strong><br>Growth support, but inflation worsens.' },
        { tone: 'green', icon: '\u{2699}\u{FE0F}', head: 'Supply-side route', body: '<strong>Productivity and competition help.</strong><br>Helps in the long run, but this is slower.' }
      ],

      bottomTip: { tone: 'amber', icon: '\u{26A0}\u{FE0F}', text: 'Stagflation is difficult because the cure for one symptom can worsen the other.' },

      examEdge: 'Stagflation is the classic case where the simple Phillips trade-off breaks down.'
    },

    /* CARD 4 — 2021–23 inflation surge (Side-by-side hero with charts). */
    {
      id: 'inflation-surge-2021-23',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 6',
      title: 'The 2021&ndash;23 inflation surge',
      lede: 'A modern UK case study of objectives colliding in real time.',
      ledeStyle: 'plain',

      visualKey: 'inflationSurge2021',
      visualLabel: 'Shock and response',
      visualEmoji: '\u{26A1}',

      interactiveDiagram: {
        svgKey: 'inflation2022AdAs',
        label: 'The trade-off in AD/AS',
        emoji: '\u{2696}\u{FE0F}',
        layers: ['ada-1', 'ada-2', 'ada-3'],
        views: [
          {
            label: 'Baseline · 2020–21',
            tone: 'blue',
            show: ['ada-1'],
            head: 'The pre-shock economy',
            body: 'Coming out of COVID, the UK economy sat at equilibrium <strong>E₀</strong> &mdash; close to full output Y₀ on long-run AS, with inflation near the 2% target P₀.',
            analysis: 'The post-COVID baseline was unusually benign: AD recovering, supply normalising, inflation expectations anchored to 2%.'
          },
          {
            label: 'Both shocks · 2021–22',
            tone: 'rose',
            show: ['ada-2'],
            head: 'AD↑ and SRAS↓ at once',
            body: 'A powerful demand rebound shifted <strong>AD right</strong>. Energy prices and the Ukraine shock shifted <strong>SRAS left</strong>. The new equilibrium <strong>E₁</strong> sat at lower Y₁ with sharply higher P₁ &mdash; the textbook supply+demand inflation shock.',
            analysis: 'This is why Phillips struggles here: Phillips only models movement <em>along</em> a curve. The 2021–22 episode was the curve itself shifting, driven by supply. AD/AS handles both shocks cleanly.'
          },
          {
            label: 'BoE response · 2022–23',
            tone: 'green',
            show: ['ada-3'],
            head: 'Tighter policy pulls AD back',
            body: 'The Bank of England raised Bank Rate from 0.1% to 5.25%. <strong>AD shifted left</strong> to AD₂. The new equilibrium <strong>E₂</strong> sat at even lower output Y₂ but with falling prices P₂ &mdash; inflation cooled, but at a real cost.',
            analysis: 'This is the trade-off in action: monetary tightening can bring inflation down, but it does so by pulling AD left into a still-weakened supply side. Lower P, lower Y &mdash; the squeeze on households.'
          }
        ]
      },

      bottomTip: [
        { tone: 'blue', icon: '\u{2696}\u{FE0F}', text: '<strong>Did the policy work?</strong> Yes &mdash; inflation came down sharply. But growth slowed, unemployment ticked up, and the cost to households was higher mortgage payments and weaker activity.' },
        { tone: 'green', icon: '\u{2728}', text: '<strong>Key insight:</strong> the Bank can cool inflation, but rarely for free &mdash; lower inflation often comes with lower growth.' }
      ],

      examEdge: 'Strong essays weigh whether the fall in inflation justified the sacrifice in growth and household finances.'
    },

    /* CARD 5 — Supply-side escape route (Side-by-side pair). */
    {
      id: 'supply-side-escape',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'The supply-side escape route',
      lede: 'Supply-side policy improves the capacity of the economy &mdash; raising potential output without higher inflation.',
      ledeStyle: 'plain',

      pairFirst: true,
      pairLabel: null,
      left: {
        tone: 'green',
        icon: '\u{1F4C8}',
        iconStyle: 'circle',
        label: 'What supply-side policy can do',
        labelCenter: true,
        rows: [
          { icon: '\u{2705}', text: '<strong>Reduces the NAIRU.</strong> Skills, training and better matching lower structural unemployment.' },
          { icon: '\u{2705}', text: '<strong>Shifts LRAS to the right.</strong> More productive resources raise potential output at every price level.' },
          { icon: '\u{2705}', text: '<strong>Improves productivity.</strong> Innovation, infrastructure and competition lift output per worker.' },
          { icon: '\u{2705}', text: '<strong>Supports non-inflationary growth.</strong> Higher potential growth reduces demand pressure and stabilises inflation.' },
          { icon: '\u{2705}', text: '<strong>Eases structural unemployment.</strong> Helps people adapt and move into growing sectors and regions.' }
        ],
        example: { icon: '\u{1F30F}', label: 'Case example &middot; The East Asian growth miracle', text: 'Investment in education, infrastructure and export-oriented industry lifted productivity and potential output across the region.' }
      },
      right: {
        tone: 'amber',
        icon: '\u{26A0}\u{FE0F}',
        iconStyle: 'circle',
        label: 'The caveats',
        labelCenter: true,
        rows: [
          { icon: '\u{25CB}', text: '<strong>Long time lags.</strong> Benefits take 10&ndash;20 years to materialise; politically hard to sustain.' },
          { icon: '\u{25CB}', text: '<strong>Upfront public or private cost.</strong> Investment in skills, R&amp;D and infrastructure requires resources today.' },
          { icon: '\u{25CB}', text: '<strong>Transition unemployment.</strong> Adjustment can displace workers and regions in the short run.' },
          { icon: '\u{25CB}', text: '<strong>Inequality risk.</strong> Returns may accrue to skilled or capital owners, widening disparities.' },
          { icon: '\u{25CB}', text: '<strong>Vulnerability to external shocks.</strong> Open economies remain exposed to terms-of-trade and global demand swings.' }
        ],
        example: { icon: '\u{1F4CA}', label: 'Case example &middot; The UK productivity puzzle', text: 'Weak investment, low R&amp;D and skills gaps have kept productivity growth below OECD peers for over a decade.' }
      },

      causes3Label: 'At a glance: the verdict',
      causes3Emoji: '\u{2696}\u{FE0F}',
      causes3Cols: 4,
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'blue',   icon: '\u{23F1}\u{FE0F}', head: 'Timescale',    body: 'Long-run: 10&ndash;20 years or more.' },
        { tone: 'amber',  icon: '\u{1F4B0}',         head: 'Cost',         body: 'High upfront cost, returns later.' },
        { tone: 'purple', icon: '\u{1F465}',         head: 'Distribution', body: 'Mixed &mdash; can widen or narrow inequality.' },
        { tone: 'green',  icon: '\u{1F3AF}',         head: 'Best use',     body: 'Structural reform and raising living standards.' }
      ],

      bottomTip: [
        { tone: 'green', icon: '\u{2728}', text: '<strong>Big idea:</strong> supply-side policy offers the best long-run route out of trade-offs.' },
        { tone: 'amber', icon: '\u{26A0}\u{FE0F}', text: '<strong>Caution:</strong> it is slow, uncertain and not a cure for short-run shocks or sudden downturns.' }
      ],

      examEdge: 'A* answers often combine short-run demand management with long-run supply-side reform.'
    },

    /* CARD 6 — The A* verdict (Evidence-then-verdict). */
    {
      id: 'a-star-verdict',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 6',
      title: 'The A* verdict on any policy conflict',
      lede: 'No policy delivers every objective at once. Great answers evaluate the trade-offs, weigh evidence and judge across time.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'sectionHeader', icon: '\u{1F4DA}', label: 'Evidence pile — four real-world cases' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue', icon: '\u{1F3DB}\u{FE0F}', head: '2010–12 austerity',                 body: 'Growth slowed, deficit control improved only gradually.' },
          { type: 'tile', tone: 'blue', icon: '\u{1F4C8}',         head: '2021–23 inflation surge',            body: 'Inflation fell after rate rises, but real incomes and growth were squeezed.' },
          { type: 'tile', tone: 'blue', icon: '\u{1F465}',         head: 'Sub-NAIRU wages 2022',                    body: 'Very low unemployment met stronger wage inflation.' },
          { type: 'tile', tone: 'blue', icon: '\u{1F310}',         head: 'Persistent current account deficit in the 2010s', body: 'Growth coexisted with an external imbalance.' }
        ]},
        { type: 'sectionHeader', icon: '\u{2696}\u{FE0F}', label: 'Four-dimensional judgement framework' },
        { type: 'grid', cols: 4, children: [
          { type: 'tile', tone: 'blue',   icon: '\u{1F3AF}',         head: 'Objective advanced',    body: 'Which objective did the policy prioritise?' },
          { type: 'tile', tone: 'amber',  icon: '\u{1F6E1}\u{FE0F}', head: 'Objective compromised', body: 'What was sacrificed?' },
          { type: 'tile', tone: 'green',  icon: '\u{1F4CA}',         head: 'Magnitude',             body: 'How large were the gains and losses?' },
          { type: 'tile', tone: 'purple', icon: '\u{23F0}',          head: 'Time horizon',          body: 'Short run, medium run, long run.' }
        ]},
        { type: 'calloutStrip', tone: 'blue', icon: '\u{2B50}', text: 'How to structure the judgement. Short-run trade-offs are real, so good policy names the sacrifice openly. The long-run answer usually lies in stronger potential growth and supply-side reform. Most A* essays mix demand-side stabilisation with a long-run supply-side strategy.' },
        { type: 'calloutStrip', tone: 'green', icon: '\u{2705}', text: 'Every policy win usually carries a cost elsewhere.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Structure the conclusion around trade-offs: state the conflict, evaluate the sacrifice, and judge over time.' }
      ],

      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself \u{2192}' }
    }

  ]
};

/* ============================================================
   End-of-Learn-It quiz pool
   ============================================================ */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Macro Conflicts & Trade-offs',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.routes.learn('macro-conflicts-and-trade-offs'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · the real UK trade-off cases and the A* framework',
    shortNames: [
      'Conflict lens','Diagnose case A','Diagnose case B','Stagflation cause','Stagflation cost',
      '2021–23 surge','BoE response','Supply-side use','Supply-side caveat','Framework'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'Which of these is NOT one of the five real UK trade-off cases in this topic?',
        opts: [
          'The 2021–23 inflation surge',
          'The 1973 OPEC stagflation',
          'The 1992 ERM exit',
          '2010–12 austerity'
        ],
        ans:  2,
        exp:  'The five cases mapped in this topic are: Phillips trade-off (2021–23), Growth-BoP (2010s persistent deficit), Stagflation (1973 OPEC), Spending–fiscal (2010–12 austerity), Growth–environment (net-zero pathway). The 1992 ERM exit is a separate exchange-rate episode.'
      },
      {
        type: 'mcq',
        q:    'In the BoE rate hike case (2021–23), which objective was most directly improved?',
        opts: ['Growth','Inflation','Unemployment','Balance of payments'],
        ans:  1,
        exp:  'Raising Bank Rate from 0.1% to 5.25% was designed to bring inflation back to target. Growth weakened and unemployment edged up as a cost.'
      },
      {
        type: 'mcq',
        q:    'A fiscal stimulus when the current account is already in deficit is most likely to:',
        opts: [
          'Improve the external balance',
          'Worsen the external balance via higher imports',
          'Have no effect on the current account',
          'Always reduce inflation pressure'
        ],
        ans:  1,
        exp:  'Higher domestic demand sucks in imports; the current-account deficit widens, and inflation pressure can build too.'
      },
      {
        type: 'mcq',
        q:    'What is the first step in the 1970s stagflation mechanism in this topic?',
        opts: [
          'Workers demand higher nominal wages',
          'SRAS shifts left',
          'A supply shock — OPEC cuts supply and oil prices jump',
          'Inflation expectations rise and the SRPC shifts up'
        ],
        ans:  2,
        exp:  'The mechanism starts with the supply shock. SRAS then shifts left, causing output to fall and prices to rise — wage demands and the SRPC shift come later in the spiral.'
      },
      {
        type: 'mcq',
        q:    'Why is the demand-side toolkit so limited in a stagflation?',
        opts: [
          'Because monetary policy has no effect during oil shocks',
          'Because tightening worsens recession while easing worsens inflation — neither lever helps both objectives',
          'Because the BoE is not independent',
          'Because central banks cannot raise rates above 5%'
        ],
        ans:  1,
        exp:  'In a stagflation both inflation and unemployment are above target. A demand-side lever can only push them in opposite directions, so any choice worsens one of the two problems.'
      },
      {
        type: 'numeric_input',
        q:    'UK CPI inflation peaked at what % in October 2022?',
        answer: 11.1,
        tolerance: 0.1,
        unit: '%',
        hint: 'Roughly 11%.',
        workingSteps: ['Peak CPI in Oct 2022: 11.1% (ONS).']
      },
      {
        type: 'numeric_input',
        q:    'The Bank of England raised Bank Rate from 0.1% in Dec 2021 to what % by Aug 2023?',
        answer: 5.25,
        tolerance: 0.1,
        unit: '%',
        hint: 'Above 5%.',
        workingSteps: ['Peak Bank Rate in Aug 2023: 5.25%.']
      },
      {
        type: 'categorise',
        q:    'Sort each statement into "Supply-side strength" or "Supply-side caveat".',
        categories: ['Supply-side strength','Supply-side caveat'],
        items: [
          { item: 'Reduces the NAIRU',                              category: 'Supply-side strength' },
          { item: 'Benefits take 10–20 years to materialise',       category: 'Supply-side caveat' },
          { item: 'Shifts LRAS to the right',                       category: 'Supply-side strength' },
          { item: 'Returns may accrue to skilled or capital owners', category: 'Supply-side caveat' },
          { item: 'Improves productivity',                          category: 'Supply-side strength' },
          { item: 'Transition unemployment in the short run',       category: 'Supply-side caveat' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out in the four-dimensional A* framework?',
        opts: ['Objective advanced','Objective compromised','Magnitude','Election cycle'],
        ans:  3,
        exp:  'The framework is: advanced × compromised × magnitude × time horizon. The election cycle is not one of the four dimensions.'
      },
      {
        type: 'match_pairs',
        q:    'Match each real-world case to its trade-off.',
        pairs: [
          { a: '2021–23 BoE rate hike',                    b: 'Inflation vs growth and unemployment' },
          { a: 'Fiscal stimulus + persistent CA deficit',  b: 'Growth vs external balance' },
          { a: 'Sub-NAIRU wages 2022',                     b: 'Unemployment vs inflation' },
          { a: '1970s OPEC oil shock',                     b: 'Stagflation — Phillips curve breakdown' },
          { a: '2010–12 austerity',                        b: 'Fiscal sustainability vs growth' },
          { a: 'Net-zero pathway today',                   b: 'Growth vs environment' }
        ]
      }
    ]
  };

})();
