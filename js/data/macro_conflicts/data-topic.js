window.ECONOS_TOPIC = {
  id: 'macro_conflicts',
  topicNum: '6.4',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Macro Conflicts & Trade-offs',
  estTime: '9-11 minutes',
  goal: 'Lock in the Phillips curve, NAIRU, stagflation, and the question of whether supply-side policy can resolve macro trade-offs.',

  intro: {
    heroKey: 'heroMacroObjectives',
    summary: "The five macro objectives cannot all be maximised simultaneously. The Phillips curve captures the most famous trade-off — between inflation and unemployment — but the conflicts run deeper: growth vs BoP, growth vs inflation, unemployment vs sustainability. Understanding these trade-offs is the analytical backbone of every macro policy essay.",
    doInThis: 'Work through 4 cards: conflicts between objectives (with real UK scenarios), the Phillips curve and NAIRU, stagflation (the worst-case outcome), and whether supply-side policy can resolve the trade-offs.',
    outcomes: [
      'Apply the Phillips curve to inflation-unemployment trade-offs with SRPC and LRPC',
      'Explain the NAIRU and why unemployment below it accelerates inflation',
      'Analyse stagflation and why demand-side policy cannot resolve it without a cost',
      'Evaluate the supply-side argument for resolving macro trade-offs'
    ],
    tip: 'The key insight: demand-side policies force a choice between objectives (growth OR inflation). Supply-side policies shift LRAS right and lower the NAIRU — potentially achieving both simultaneously. But time lags and up-front costs limit this in practice.',
    stages: [
      { num: 1, name: 'Learn it', sub: '4 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 — Conflicts between objectives ----- */
    {
      id: 'objective-conflicts',
      template: 'diagnose',
      stepLabel: 'Learn: Step 1 of 4',
      title: 'Conflicts between macro objectives',
      lede: 'The heart of every macro policy essay: which objective does a policy advance, and which does it compromise? This table is the organiser.',
      table: {
        headers: ['Policy action', 'Objective advanced', 'Objective compromised'],
        rows: [
          ['↑ AD (fiscal stimulus)', 'Growth + employment', 'Inflation + BoP (imports rise)'],
          ['↑ Interest rates', 'Inflation control', 'Growth + employment'],
          ['↓ Exchange rate (depreciation)', 'BoP + growth (exports)', 'Inflation (import costs rise)'],
          ['Supply-side reform (e.g. education)', 'Growth + employment + inflation', 'Short-run budget deficit'],
          ['Fiscal austerity (↓G)', 'Debt sustainability / inflation', 'Growth + employment'],
          ['Immigration / labour supply ↑', 'NAIRU down + growth', 'Politically contested']
        ]
      },
      scenarios: {
        title: 'Diagnose the trade-off',
        items: [
          {
            label: 'A',
            text: 'The MPC raises Bank Rate from 0.1% to 5.25% between 2021 and 2023 to bring inflation from 11.1% back to target. What trade-off is this?',
            answer: 'Inflation vs growth/employment. Higher rates reduced consumer spending and investment — GDP growth slowed to near-zero and mortgage holders faced sharply higher payments. The BoE accepted lower growth to restore price stability.',
            tone: 'rose'
          },
          {
            label: 'B',
            text: 'The UK runs a persistent current account deficit of ~4% of GDP. Government wants to stimulate growth via fiscal expansion. What conflict arises?',
            answer: 'Growth vs BoP. Fiscal stimulus raises AD → income effect sucks in more imports → current account deficit widens further. The import leakage also reduces the multiplier. A trade-off between domestic growth and external balance.',
            tone: 'blue'
          },
          {
            label: 'C',
            text: 'UK unemployment falls to 3.7% in 2022 — below most estimates of the natural rate. What macro risk does this create?',
            answer: 'Employment vs inflation. Below the NAIRU, wage growth accelerates as workers have bargaining power. Firms pass higher labour costs into prices → wage-price spiral risk. The BoE sees this as inflationary pressure requiring tightening.',
            tone: 'amber'
          }
        ]
      },
      examEdge: {
        title: 'Structure every policy essay around trade-offs',
        text: 'Weak answers describe what a policy does. Strong answers identify <strong>which objective it advances AND which it compromises</strong>, evaluate the magnitude of each, and reach a qualified conclusion. The trade-off structure is the A* essay architecture.'
      }
    },

    /* ----- CARD 2 — The Phillips curve ----- */
    {
      id: 'phillips-curve',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 4',
      title: 'The Phillips curve: inflation-unemployment trade-off',
      lede: "Bill Phillips discovered in 1958 that lower unemployment correlated with higher wage inflation. This became the theoretical foundation for demand management — and the controversy that followed is equally important.",
      diagramKey: 'phillipsInteractive',
      steps: [
        {
          key: 'base',
          label: 'The original Phillips curve (1958)',
          text: 'Phillips found an empirical negative relationship between <strong>unemployment and wage inflation</strong> in UK data 1861-1957. As unemployment fell, workers gained bargaining power and wages rose. As unemployment rose, wage growth moderated. This gave policymakers a <strong>menu of choices</strong>: accept 3% unemployment and 2% inflation, or push to 2% unemployment and accept 4% inflation.'
        },
        {
          key: 'extension',
          label: 'Friedman and Phelps (1968): the long-run Phillips curve',
          text: 'Friedman and Phelps independently argued the trade-off only exists <strong>in the short run</strong>. If government persistently pushes unemployment below the natural rate, workers demand higher nominal wages to compensate for inflation — the SRPC shifts up. In the long run, the Phillips curve is <strong>vertical at the NAIRU</strong> — there is no lasting trade-off. Attempts to exploit the short-run trade-off only produce permanently higher inflation.'
        },
        {
          key: 'shift',
          label: '1970s stagflation: the curve breaks down',
          text: 'In the 1970s, the UK experienced <strong>rising unemployment AND rising inflation simultaneously</strong> — a combination the original Phillips curve said was impossible. The OPEC oil shocks shifted SRAS left, causing stagflation. The SRPC shifted upward — both unemployment and inflation rose together. This empirical failure ended the Keynesian consensus and launched monetarism as the new policy framework.'
        }
      ],
      examEdge: {
        title: 'Always include the long-run vertical Phillips curve',
        text: "A* Phillips curve answers always include three elements: (1) the downward-sloping SRPC, (2) the vertical LRPC at the NAIRU, (3) the mechanism (adaptive expectations shift the SRPC up). Drawing BOTH curves on one diagram and explaining the shift between them is the full-marks answer structure."
      }
    },

    /* ----- CARD 3 — The NAIRU ----- */
    {
      id: 'nairu',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 3 of 4',
      title: 'NAIRU: the natural rate of unemployment',
      lede: "The NAIRU — Non-Accelerating Inflation Rate of Unemployment — is the unemployment rate consistent with stable inflation. Push below it and inflation accelerates. It's unobservable but crucial.",
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'What the NAIRU is',
          text: 'The unemployment rate at which inflation is stable (neither accelerating nor decelerating). Consists of frictional + structural + real-wage (seasonal) unemployment. In the long-run, the LRPC is vertical <strong>at the NAIRU</strong>. UK estimate: ~4-4.5% (varies by decade).'
        },
        {
          num: '2',
          tone: 'blue',
          title: 'What pushes unemployment below the NAIRU',
          text: 'Demand stimulus (fiscal or monetary) reduces actual unemployment below the NAIRU. Workers have bargaining power → wages rise → firms\' costs rise → SRAS shifts left → inflation accelerates. The only way to sustain below-NAIRU unemployment is ever-accelerating inflation.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'What reduces the NAIRU',
          text: '<strong>Supply-side policies</strong> shift the NAIRU lower permanently: education/retraining (reduces structural unemployment), active labour market policies (reduces frictional), union reform/minimum wage adjustments (reduces real-wage). This is the supply-side case for long-run growth without inflation.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'Hysteresis: the NAIRU can shift up',
          text: 'After deep recessions, long-term unemployment causes skill atrophy and labour market detachment. The structural component rises — pushing the NAIRU higher. The 1980s UK recession left a legacy NAIRU of ~8%. This is hysteresis working through the NAIRU, not just the unemployment rate.'
        }
      ],
      examEdge: {
        title: 'NAIRU is unobservable — and that\'s important',
        text: "The NAIRU cannot be directly observed — it must be estimated. Policy errors arise when the true NAIRU is higher than assumed (stimulus → inflation) or lower (excessive tightening → unnecessary unemployment). The OBR's NAIRU estimate matters enormously for fiscal projections. Acknowledging this uncertainty is an A* evaluation point."
      }
    },

    /* ----- CARD 4 — Can supply-side policy resolve trade-offs? ----- */
    {
      id: 'resolve-tradeoffs',
      template: 'paired',
      stepLabel: 'Learn: Step 4 of 4',
      title: 'Resolving trade-offs: the supply-side argument',
      lede: 'Demand-side policies force governments to choose between objectives. Supply-side policies can, in theory, reduce multiple trade-offs simultaneously — but with important caveats.',
      pairs: [
        {
          tone: 'green',
          label: 'What supply-side policies can do',
          drivers: [
            'Reduce the NAIRU → lower unemployment without higher inflation',
            'Shift LRAS right → higher output AND lower inflation simultaneously',
            'Improve productivity → wage growth without cost-push pressure',
            'Reduce structural unemployment → growth without distributional deterioration',
            'Improve BoP (competitiveness) without damaging domestic growth'
          ],
          example: '<strong>East Asian growth miracle:</strong> South Korea and Taiwan combined rapid growth with low inflation and falling inequality — achieved through investment in education, technology, and export competitiveness. The supply-side can resolve trade-offs if the structural foundations are right.'
        },
        {
          tone: 'amber',
          label: 'The supply-side caveats',
          drivers: [
            'Long time lags: education takes 10-20 years to affect productivity',
            'Up-front costs: investment in skills, infrastructure requires spending now',
            'Unequal benefits: market-based supply-side can widen inequality',
            'Structural change causes transitional unemployment',
            'External shocks (commodity prices, global demand) can overwhelm supply-side gains'
          ],
          example: '<strong>UK productivity puzzle:</strong> despite supply-side reforms since the 1980s, UK productivity growth has lagged comparable economies. The limits of supply-side optimism are visible in the data. Supply-side is necessary but not sufficient for resolving all trade-offs.'
        }
      ],
      examEdge: {
        title: 'The supply-side conclusion',
        text: 'The A* conclusion structure: <em>\'Supply-side policy is the theoretically optimal solution to macro trade-offs — shifting LRAS right reduces the NAIRU and enables non-inflationary growth. However, the long time lags and upfront costs mean demand management remains necessary in the short run, even if supply-side reform is the long-run answer.\'</em>'
      },
      keyTakeaway: { title: 'The big picture', text: 'Macro trade-offs are real and unavoidable with demand-side tools alone. The Phillips curve shows the inflation-unemployment trade-off; stagflation shows what happens when supply shocks break that relationship. Supply-side policy offers a theoretical escape route — but the time lags and costs mean the trade-offs never fully disappear. The best macro policy combines short-run demand management with long-run supply-side reform.' },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
