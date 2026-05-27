/* ============================================================
   ECONOS – content data for macro_objectives
   7 cards · revision-tight · exam-edge gems flagged
   Edexcel Theme 2.5
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'macro_objectives',
  topicNum: '6.1',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Macroeconomic Objectives & Trade-offs',
  estTime: '9-11 minutes',
  goal: 'Lock in the five objectives, the Phillips curve, and every major trade-off',

  intro: {
    heroKey: 'heroMacroObjectives',
    summary: "Five objectives. Never all achievable simultaneously. The trade-offs between them – especially growth vs inflation, and the short-run Phillips curve – organise half of all macro essay arguments.",
    doInThis: 'Recap the five macro objectives, the conflicts between them, the Phillips curve, stagflation, and the NAIRU.',
    outcomes: [
      'State and explain the five macro objectives with current UK data',
      'Apply the Phillips curve to inflation-unemployment trade-offs',
      'Evaluate whether trade-offs can be resolved with supply-side policy'
    ],
    tip: 'These cards are revision, not first-time learning. They cue what you already know and flag the gems that lift answers from B to A*.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards',    state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 – Framing: the five objectives ----- */
    {
      id: 'five-objectives',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'The five macroeconomic objectives',
      lede: 'Every government pursues five goals. They cannot all be maximised simultaneously – and the conflicts between them drive most macro policy debates.',
      branches: [
        { tone: 'green',  label: 'Economic growth',         sub: '<strong>Target: 2-2.5% real GDP p.a.</strong> UK. Needed for rising living standards and fiscal space. Conflict: high growth can cause inflation.' },
        { tone: 'rose',   label: 'Low inflation',           sub: '<strong>Target: CPI 2%</strong> (BoE symmetric target). Needed for price stability and confidence. Conflict: tightening to hit target can cause recession.' },
        { tone: 'amber',  label: 'Low unemployment',        sub: '<strong>~4-5% UK natural rate.</strong> Full employment = only frictional + structural + seasonal. Conflict: pushing below NAIRU risks inflation.' },
        { tone: 'blue',   label: 'Current account balance', sub: '<strong>Sustainable BoP position.</strong> UK has had persistent current account deficit (~4-5% of GDP). Conflict: growth sucks in imports, widening the deficit.' }
      ],
      examEdge: {
        title: 'The fifth objective: environmental sustainability',
        text: 'Some syllabi add a fifth objective: <strong>environmental sustainability</strong> (or \'balanced growth\'). Edexcel includes this in the evaluation layer. Growth-environment trade-offs (Kuznets curve, carbon targets) are regularly examined. Always check if the question context includes environmental costs.'
      },
      keyTakeaway: {
        title: 'Quote current UK data',
        text: "A* answers anchor arguments with current approximate data: 'UK growth is ~0.5-1% (below trend), inflation has fallen from 11.1% peak to ~2% (2024), unemployment ~4.2%, current account deficit ~3-4% of GDP.' Having approximate values for each objective signals genuine economic literacy."
      }
    },

    /* ----- CARD 2 – Conflicts between objectives ----- */
    {
      id: 'objective-conflicts',
      template: 'diagnose',
      stepLabel: 'Learn: Step 2 of 8',
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
            answer: 'Inflation vs growth/employment. Higher rates reduced consumer spending and investment – GDP growth slowed to near-zero and mortgage holders faced sharply higher payments. The BoE accepted lower growth to restore price stability.',
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
            text: 'UK unemployment falls to 3.7% in 2022 – below most estimates of the natural rate. What macro risk does this create?',
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

    /* ----- CARD 3 – The Phillips curve ----- */
    {
      id: 'phillips-curve',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'The Phillips curve: inflation-unemployment trade-off',
      lede: "Bill Phillips discovered in 1958 that lower unemployment correlated with higher wage inflation. This became the theoretical foundation for demand management – and the controversy that followed is equally important.",
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
          text: 'Friedman and Phelps independently argued the trade-off only exists <strong>in the short run</strong>. If government persistently pushes unemployment below the natural rate, workers demand higher nominal wages to compensate for inflation – the SRPC shifts up. In the long run, the Phillips curve is <strong>vertical at the NAIRU</strong> – there is no lasting trade-off. Attempts to exploit the short-run trade-off only produce permanently higher inflation.'
        },
        {
          key: 'shift',
          label: '1970s stagflation: the curve breaks down',
          text: 'In the 1970s, the UK experienced <strong>rising unemployment AND rising inflation simultaneously</strong> – a combination the original Phillips curve said was impossible. The OPEC oil shocks shifted SRAS left, causing stagflation. The SRPC shifted upward – both unemployment and inflation rose together. This empirical failure ended the Keynesian consensus and launched monetarism as the new policy framework.'
        }
      ],
      examEdge: {
        title: 'Always include the long-run vertical Phillips curve',
        text: "A* Phillips curve answers always include three elements: (1) the downward-sloping SRPC, (2) the vertical LRPC at the NAIRU, (3) the mechanism (adaptive expectations shift the SRPC up). Drawing BOTH curves on one diagram and explaining the shift between them is the full-marks answer structure."
      }
    },

    /* ----- CARD 4 – The NAIRU ----- */
    {
      id: 'nairu',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'NAIRU: the natural rate of unemployment',
      lede: "The NAIRU – Non-Accelerating Inflation Rate of Unemployment – is the unemployment rate consistent with stable inflation. Push below it and inflation accelerates. It's unobservable but crucial.",
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
          text: 'After deep recessions, long-term unemployment causes skill atrophy and labour market detachment. The structural component rises – pushing the NAIRU higher. The 1980s UK recession left a legacy NAIRU of ~8%. This is hysteresis working through the NAIRU, not just the unemployment rate.'
        }
      ],
      examEdge: {
        title: 'NAIRU is unobservable – and that\'s important',
        text: "The NAIRU cannot be directly observed – it must be estimated. Policy errors arise when the true NAIRU is higher than assumed (stimulus → inflation) or lower (excessive tightening → unnecessary unemployment). The OBR's NAIRU estimate matters enormously for fiscal projections. Acknowledging this uncertainty is an A* evaluation point."
      },
      connection: {
        title: 'NAIRU and supply-side policy',
        text: 'The key implication: if you want permanently lower unemployment WITHOUT higher inflation, you must reduce the NAIRU – which requires supply-side reform, not demand management. This is the theoretical justification for every supply-side economics programme.'
      }
    },

    /* ----- CARD 5 – Stagflation ----- */
    {
      id: 'stagflation',
      template: 'cause',
      diagramKey: 'costPushDiagram',
      tone: 'rose',
      bannerLabel: 'The worst macro outcome',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Stagflation: stagnation + inflation',
      lede: 'Stagflation – rising inflation alongside rising unemployment – is the nightmare macro scenario. It breaks the standard policy toolkit because every response worsens one problem.',
      diagramCaption: 'SRAS shifts left: output falls (↑ unemployment), price level rises (↑ inflation). Both simultaneously.',
      causes: {
        title: 'Causes of stagflation',
        items: [
          'Supply-side (cost-push) shocks: oil price spikes, energy price surges, supply chain disruptions',
          'SRAS shifts left: output falls AND price level rises simultaneously',
          'Wage-price spirals: workers demand higher nominal wages to compensate for inflation → costs rise → SRAS left again',
          'External supply disruptions: pandemics, wars, commodity price shocks'
        ]
      },
      hallmarks: {
        title: 'Stagflation episodes',
        items: [
          '1973-74: OPEC quadrupled oil prices → UK inflation peaked at 25%, unemployment rose to 1m+',
          '1979-80: second oil shock compounded stagflation; Thatcher\'s tight monetary policy broke it but at cost of 3m+ unemployment',
          '2022-23: energy price surge post-Ukraine → UK inflation 11.1%, growth near-zero – mild modern parallel'
        ]
      },
      ukExamples: {
        title: 'The policy dilemma',
        text: '<strong>Demand-side response options:</strong> (1) Tighten to fight inflation → recession worsens, unemployment rises further. (2) Ease to protect output → inflation worsens. There is no \'good\' demand-side response. <strong>Supply-side response:</strong> shift SRAS right (energy subsidies, productivity improvements) – addresses both problems but takes time and may be unaffordable in a fiscal crisis.'
      },
      examEdge: {
        title: 'Stagflation is the \'evaluation trap\'',
        text: 'When a question asks \'can monetary/fiscal policy solve stagflation?\', the A* answer is <strong>no, not without a cost</strong>. Either tightening worsens the recession or easing worsens the inflation. The supply-side solution is theoretically correct but practically slow and expensive. This two-sided evaluation with a qualified conclusion is the mark-scoring structure.'
      },
      policy: {
        title: 'Thatcher\'s solution (1979-82)',
        text: 'Thatcher chose to break stagflation via tight monetary policy – accepting deep recession (unemployment rose to 3m+) to crush inflationary expectations. The sacrifice ratio was high. The benefit: credibility was restored and inflation fell from 22% to 3% by 1983. A* answers evaluate whether the sacrifice was \'worth it\' – acknowledging the lasting structural unemployment legacy.'
      }
    },

    /* ----- CARD 6 – Can supply-side policy resolve trade-offs? ----- */
    {
      id: 'resolve-tradeoffs',
      template: 'paired',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Resolving trade-offs: the supply-side argument',
      lede: 'Demand-side policies force governments to choose between objectives. Supply-side policies can, in theory, reduce multiple trade-offs simultaneously – but with important caveats.',
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
          example: '<strong>East Asian growth miracle:</strong> South Korea and Taiwan combined rapid growth with low inflation and falling inequality – achieved through investment in education, technology, and export competitiveness. The supply-side can resolve trade-offs if the structural foundations are right.'
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
        text: 'The A* conclusion structure: <em>\'Supply-side policy is the theoretically optimal solution to macro trade-offs – shifting LRAS right reduces the NAIRU and enables non-inflationary growth. However, the long time lags and upfront costs mean demand management remains necessary in the short run, even if supply-side reform is the long-run answer.\'</em>'
      },
      policy: {
        title: 'The policy mix',
        text: 'The most sophisticated macro policy discussions argue for a <strong>policy mix</strong>: demand-side management to stabilise the short-run cycle, supply-side reform to improve the long-run capacity of the economy. Using both in combination – and knowing when to switch emphasis – is the mark of a complete macroeconomic analysis.'
      }
    },

    /* ----- CARD 7 – UK macro performance: real data ----- */
    {
      id: 'uk-macro-data',
      template: 'deflation',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'UK macro performance: evidence to apply',
      lede: "Theory without data is philosophy. These are the UK macro episodes and data points examiners expect you to deploy as evidence in your answers.",
      mechanismsTitle: 'Key UK macro episodes by trade-off',
      mechanisms: [
        {
          icon: '📈',
          title: 'Growth vs inflation (2021-23)',
          text: 'Post-COVID demand bounce met supply constraints. UK growth recovered to 7.5% in 2021 – then energy shock and global bottlenecks pushed CPI to 11.1% (Oct 2022). Classic growth-inflation tension, with a supply-side origin.'
        },
        {
          icon: '⚖️',
          title: 'Unemployment vs inflation (2022-23)',
          text: 'UK unemployment fell to 3.7% – below most NAIRU estimates. Wage growth accelerated to 7-8%. The BoE raised Bank Rate to 5.25% – accepting lower growth to prevent wage-price spiral. Phillips curve operating in real time.'
        },
        {
          icon: '🌍',
          title: 'Growth vs BoP (2010-2019)',
          text: 'UK current account deficit averaged 4-5% of GDP – among the largest in the G7. Domestic consumption growth sucked in imports. Brexit compounded structural trade barriers from 2021. The growth-BoP conflict is a persistent feature of the UK economy.'
        },
        {
          icon: '🔄',
          title: 'Supply-side vs short-run (2010-12 austerity)',
          text: 'Coalition government prioritised fiscal consolidation (deficit reduction) – supply-side in motivation. Short-run cost: growth halved, unemployment peaked at 8.3%. Trade-off between long-run fiscal sustainability and short-run welfare. IMF later said multipliers were underestimated.'
        }
      ],
      examples: {
        title: 'Data benchmarks to memorise',
        items: [
          { period: 'Growth target', text: 'UK trend growth ~2-2.5%. Post-2008 average ~1.5%. 2023-24 near-zero stagnation. OBR forecast ~1.5% medium term.' },
          { period: 'Inflation target', text: 'BoE target: 2% CPI. Peak: 11.1% Oct 2022. Returning to ~2% by mid-2024. Raised Bank Rate from 0.1% to 5.25% (Aug 2023).' },
          { period: 'Unemployment', text: 'UK NAIRU estimate ~4-4.5%. Actual: 3.7% (2022 low), rising to ~4.2% by 2024. Youth unemployment ~11-13% – structurally higher.' }
        ]
      },
      examEdge: {
        title: 'Use real data in every answer',
        text: "A* answers consistently anchor analysis in real UK data: '...consistent with the UK\'s experience in 2022-23, when unemployment fell to 3.7% – below the NAIRU – and wage inflation accelerated to 7.8%, validating the short-run Phillips curve relationship.' Data-anchored answers always score higher than purely theoretical ones."
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
