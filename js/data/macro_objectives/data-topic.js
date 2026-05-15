/* ============================================================
   ECONOS — content data for macro_objectives
   7 cards · revision-tight · exam-edge gems flagged
   Edexcel Theme 2.5
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'macro_objectives',
  topicNum: '2.5',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Macroeconomic Objectives & Trade-offs',
  estTime: '9-11 minutes',
  goal: 'Lock in the five objectives, the Phillips curve, and every major trade-off',

  intro: {
    heroKey: 'heroGrowth',
    summary: "Five objectives. Never all achievable simultaneously. The trade-offs between them — especially growth vs inflation, and the short-run Phillips curve — organise half of all macro essay arguments.",
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

    /* ----- CARD 1 — Framing: the five objectives ----- */
    {
      id: 'five-objectives',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'The five macroeconomic objectives',
      lede: 'Every government pursues five goals. They cannot all be maximised simultaneously — and the conflicts between them drive most macro policy debates.',
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

    /* ----- CARD 2 — Conflicts between objectives ----- */
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

    /* ----- CARD 3 — The Phillips curve ----- */
    {
      id: 'phillips-curve',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
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

    /* ----- CARD 4 — The NAIRU ----- */
    {
      id: 'nairu',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 4 of 8',
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
      },
      connection: {
        title: 'NAIRU and supply-side policy',
        text: 'The key implication: if you want permanently lower unemployment WITHOUT higher inflation, you must reduce the NAIRU — which requires supply-side reform, not demand management. This is the theoretical justification for every supply-side economics programme.'
      }
    },

    /* ----- CARD 5 — Stagflation ----- */
    {
      id: 'stagflation',
      template: 'cause',
      diagramKey: 'costPushDiagram',
      tone: 'rose',
      bannerLabel: 'The worst macro outcome',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Stagflation: stagnation + inflation',
      lede: 'Stagflation — rising inflation alongside rising unemployment — is the nightmare macro scenario. It breaks the standard policy toolkit because every response worsens one problem.',
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
          '2022-23: energy price surge post-Ukraine → UK inflation 11.1%, growth near-zero — mild modern parallel'
        ]
      },
      ukExamples: {
        title: 'The policy dilemma',
        text: '<strong>Demand-side response options:</strong> (1) Tighten to fight inflation → recession worsens, unemployment rises further. (2) Ease to protect output → inflation worsens. There is no \'good\' demand-side response. <strong>Supply-side response:</strong> shift SRAS right (energy subsidies, productivity improvements) — addresses both problems but takes time and may be unaffordable in a fiscal crisis.'
      },
      examEdge: {
        title: 'Stagflation is the \'evaluation trap\'',
        text: 'When a question asks \'can monetary/fiscal policy solve stagflation?\', the A* answer is <strong>no, not without a cost</strong>. Either tightening worsens the recession or easing worsens the inflation. The supply-side solution is theoretically correct but practically slow and expensive. This two-sided evaluation with a qualified conclusion is the mark-scoring structure.'
      },
      policy: {
        title: 'Thatcher\'s solution (1979-82)',
        text: 'Thatcher chose to break stagflation via tight monetary policy — accepting deep recession (unemployment rose to 3m+) to crush inflationary expectations. The sacrifice ratio was high. The benefit: credibility was restored and inflation fell from 22% to 3% by 1983. A* answers evaluate whether the sacrifice was \'worth it\' — acknowledging the lasting structural unemployment legacy.'
      }
    },

    /* ----- CARD 6 — Can supply-side policy resolve trade-offs? ----- */
    {
      id: 'resolve-tradeoffs',
      template: 'paired',
      stepLabel: 'Learn: Step 6 of 8',
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
      policy: {
        title: 'The policy mix',
        text: 'The most sophisticated macro policy discussions argue for a <strong>policy mix</strong>: demand-side management to stabilise the short-run cycle, supply-side reform to improve the long-run capacity of the economy. Using both in combination — and knowing when to switch emphasis — is the mark of a complete macroeconomic analysis.'
      }
    },

    /* ----- CARD 7 — UK macro performance: real data ----- */
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
          text: 'Post-COVID demand bounce met supply constraints. UK growth recovered to 7.5% in 2021 — then energy shock and global bottlenecks pushed CPI to 11.1% (Oct 2022). Classic growth-inflation tension, with a supply-side origin.'
        },
        {
          icon: '⚖️',
          title: 'Unemployment vs inflation (2022-23)',
          text: 'UK unemployment fell to 3.7% — below most NAIRU estimates. Wage growth accelerated to 7-8%. The BoE raised Bank Rate to 5.25% — accepting lower growth to prevent wage-price spiral. Phillips curve operating in real time.'
        },
        {
          icon: '🌍',
          title: 'Growth vs BoP (2010-2019)',
          text: 'UK current account deficit averaged 4-5% of GDP — among the largest in the G7. Domestic consumption growth sucked in imports. Brexit compounded structural trade barriers from 2021. The growth-BoP conflict is a persistent feature of the UK economy.'
        },
        {
          icon: '🔄',
          title: 'Supply-side vs short-run (2010-12 austerity)',
          text: 'Coalition government prioritised fiscal consolidation (deficit reduction) — supply-side in motivation. Short-run cost: growth halved, unemployment peaked at 8.3%. Trade-off between long-run fiscal sustainability and short-run welfare. IMF later said multipliers were underestimated.'
        }
      ],
      examples: {
        title: 'Data benchmarks to memorise',
        items: [
          { period: 'Growth target', text: 'UK trend growth ~2-2.5%. Post-2008 average ~1.5%. 2023-24 near-zero stagnation. OBR forecast ~1.5% medium term.' },
          { period: 'Inflation target', text: 'BoE target: 2% CPI. Peak: 11.1% Oct 2022. Returning to ~2% by mid-2024. Raised Bank Rate from 0.1% to 5.25% (Aug 2023).' },
          { period: 'Unemployment', text: 'UK NAIRU estimate ~4-4.5%. Actual: 3.7% (2022 low), rising to ~4.2% by 2024. Youth unemployment ~11-13% — structurally higher.' }
        ]
      },
      examEdge: {
        title: 'Use real data in every answer',
        text: "A* answers consistently anchor analysis in real UK data: '...consistent with the UK\'s experience in 2022-23, when unemployment fell to 3.7% — below the NAIRU — and wage inflation accelerated to 7.8%, validating the short-run Phillips curve relationship.' Data-anchored answers always score higher than purely theoretical ones."
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'mo-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: macroeconomic objectives',
      question: 'Evaluate the view that maintaining low inflation should be the primary macroeconomic objective for the UK government. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define the UK\'s macroeconomic objectives and explain why low inflation has been given priority via Bank of England independence.',
          hint: 'UK objectives: growth, low inflation (CPI 2% target), low unemployment, current account balance, environmental sustainability. BoE independence (1997): delegated inflation targeting to central bank — signals that low inflation is the primary short-run objective. But the 5 objectives often conflict — is inflation the right priority? Other countries prioritise growth or employment (the Fed\'s dual mandate).',
          model: 'The UK government pursues five macroeconomic objectives — economic growth, low inflation, low unemployment, current account stability, and environmental sustainability. Since 1997, operational independence of the Bank of England — with its primary remit to maintain CPI inflation at 2% — has institutionally prioritised low inflation as the anchor objective. This reflects the consensus that price stability provides the foundation for sustainable growth and employment. However, this prioritisation involves trade-offs: the short-run Phillips curve suggests that achieving low inflation may require higher unemployment, and the 2% inflation target may constrain growth in low-inflation recessions. This essay evaluates whether low inflation deserves its primacy.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — Why low inflation is important: the case for priority',
          prompt: 'Explain the economic and social costs of high inflation that justify its prioritisation.',
          hint: 'Costs of inflation: (1) arbitrary redistribution from creditors to debtors (real value of savings eroded), (2) shoe-leather costs (firms and consumers economise on money holdings), (3) menu costs (frequent repricing), (4) international competitiveness (high inflation → exports expensive), (5) wage-price spiral risk. Uncertainty: high and variable inflation impairs investment decisions (firms cannot plan efficiently). Political economy: inflation erodes living standards visibly → political instability (Weimar, Zimbabwe, Venezuela). Central bank credibility: once lost, very costly to restore (Volcker recession 1981-82).',
          model: 'High and variable inflation imposes substantial economic costs. It redistributes wealth arbitrarily from creditors and savers to debtors (eroding real asset values), reduces international competitiveness (UK exports become expensive relative to stable-inflation competitors), creates uncertainty that discourages long-term investment, and can trigger wage-price spirals that are costly to break. The UK\'s experience of double-digit inflation in the 1970s — combined with supply-side shocks — produced stagflation, requiring the deep 1980-81 recession to restore credibility. Central bank independence with a clear inflation target addresses the time-inconsistency problem: governments facing elections have incentives to allow excessive inflation for short-run growth gains; a rule-based independent central bank commits credibly to price stability, reducing inflation expectations and lowering the sacrifice ratio needed to achieve targets.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — The case for growth and employment as primary objectives',
          prompt: 'Evaluate why economic growth and employment may deserve equal or greater priority than inflation.',
          hint: 'Growth: long-run living standards are primarily determined by productivity growth and LRAS expansion — not inflation. Japan had 30 years of below-target inflation (deflation risk) and stagnant growth: shows inflation target too narrowly focused. Employment: hysteresis — long-term unemployment damages human capital, future productivity. Growth creates fiscal space for public services. US Fed has a dual mandate (price stability AND maximum employment) — arguably more balanced than UK single mandate. OBR vs BoE: growth forecasts and fiscal sustainability considerations argue for valuing growth alongside inflation.',
          model: 'Long-run living standards are determined primarily by economic growth — the expansion of productive capacity — rather than price stability per se. A country with 2% inflation and 0.5% growth achieves the inflation target while delivering declining relative living standards (as the UK has experienced since 2008). Japan\'s experience is instructive: three decades of below-target inflation did not prevent economic stagnation — deflation risk became the primary concern. The Federal Reserve\'s dual mandate (price stability and maximum employment) reflects a more balanced approach: unemployment imposes its own substantial welfare costs (lost output, skill atrophy, social deprivation) that a narrow inflation focus underweights. Hysteresis further complicates the trade-off: if tight monetary policy to achieve 2% inflation causes unemployment to remain elevated, human capital depreciates and the natural rate of unemployment rises permanently — creating long-run costs that exceed the short-run inflation benefit.'
        },
        {
          type: 'counter',
          label: 'Counter — Conflicts between objectives: when pursuing one undermines others',
          prompt: 'Evaluate the key objective conflicts that challenge any single prioritisation.',
          hint: 'Growth vs inflation: fiscal stimulus raises AD → growth + employment in short run → inflation risk (positive output gap). Growth vs BoP: growing economy sucks in imports → current account deficit widens → external vulnerability. Growth vs environment: GDP growth has historically been associated with carbon emissions (though decoupling is possible). Low inflation vs employment: at very low inflation (below 2%), deflation risk → higher real rates → lower investment → unemployment rises. Key evaluation: the "right" primary objective depends on the phase of the cycle — in recession, employment and growth; in boom, inflation; in structural supply shock, supply-side priorities.',
          model: 'The fundamental problem with designating any single objective as primary is that the macroeconomic objectives conflict. The short-run Phillips curve embeds the inflation-unemployment trade-off: pursuing low inflation via monetary tightening creates unemployment; pursuing full employment risks exceeding the NAIRU and triggering accelerating inflation. Fiscal stimulus to achieve growth simultaneously risks inflation (demand-pull) and current account deficit (import leakage). These conflicts mean the optimal priority depends on the current economic context: in a recessionary period with negative output gap, growth and employment deserve priority; in an inflationary boom, price stability becomes paramount. A single, invariant prioritisation of inflation, regardless of economic conditions, risks sacrificing welfare in cases where the low-inflation objective imposes greater costs than the alternative.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — Context-dependent prioritisation and the case for supply-side resolution',
          prompt: 'Weigh the case for prioritising inflation against growth/employment with reference to the current UK context.',
          hint: 'Supply-side resolution: only supply-side policy can simultaneously achieve growth, low inflation, and low unemployment (LRAS shift right). This is the A* resolution. But takes years. Short-run: the right priority depends on where the economy is. Post-pandemic 2022-23: inflation clearly the primary concern (11.1% CPI). Post-2024: inflation returning to target → growth and productivity the primary challenges. A single primary objective is inappropriate — the policy hierarchy should be context-dependent. UK productivity puzzle: persistent low productivity growth is the structural challenge — neither inflation targeting nor monetary policy addresses this directly.',
          model: 'The most persuasive evaluation recognises that optimal objective prioritisation is context-dependent, not permanent. In a period of significantly above-target inflation — as the UK experienced in 2021-23 — price stability was clearly the appropriate primary focus: 11.1% inflation imposed real welfare costs and risked wage-price spiral dynamics that would have been far more costly to break later. In a period of near-target inflation with weak growth — as the UK faces entering 2025 — growth and productivity should move to the fore. The deeper issue is that monetary policy and inflation targeting address short-run demand management but not the UK\'s structural productivity weakness. The UK\'s productivity growth has averaged only ~0.5% per year since 2008, far below historical trends — a supply-side failure that determines long-run living standards far more than whether CPI averages 2.0% or 2.5%. Supply-side reform that shifts LRAS right is the only policy that simultaneously achieves higher growth, lower inflation, lower unemployment, and improved competitiveness — but it operates on a different timescale from monetary policy.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Deliver a reasoned judgement: low inflation is an important objective but its primacy depends on context, and supply-side growth should share the priority focus.',
          hint: 'Low inflation is rightly prioritised when inflation is significantly above target — the costs of high inflation are real and credibility takes years to rebuild. But in a low-inflation, low-growth environment, prioritising the 2% target above all else may sacrifice growth unnecessarily. The most sophisticated answer advocates for context-dependent priority with supply-side structural reform as the long-run resolution.',
          model: 'Low inflation is an important macroeconomic objective that deserves priority when inflation is significantly above target — the costs of high inflation and lost central bank credibility are real and restoration is costly. The UK\'s institutional framework of Bank of England independence with a 2% CPI target has delivered substantially lower and more stable inflation than the pre-1997 arrangement, and this credibility is worth preserving. However, the view that low inflation should always be the primary objective — subordinating growth and employment to the inflation target regardless of economic context — is too rigid. In a low-inflation recession or period of structural supply weakness, pursuing the 2% target too zealously imposes unnecessary unemployment and foregone growth. The UK\'s most pressing macroeconomic challenge entering the late 2020s is not keeping inflation at 2% but achieving the productivity growth that has eluded it since 2008. This requires supply-side reform that addresses investment, skills, and infrastructure — objectives that monetary policy and the inflation target cannot deliver.'
        }
      ]
    }
  ]
};
