/* ============================================================
   ECONOS — content data for inflation_causes
   7 cards · revision-tight · exam-edge gems flagged
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'inflation_causes',
  topicNum: '2.4',
  theme: 'Theme 2 · The National and Global Economy',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Causes of Inflation & Deflation',
  estTime: '8-10 minutes',
  goal: 'Lock in the gems that lift your answers',

  intro: {
    summary: "A tight summary of everything you need to know on inflation - with the exam gems flagged so you can spot them at a glance.",
    doInThis: 'Recap the three causes, the diagnostic skill, and the asymmetry that explains policy.',
    outcomes: [
      'Recap the three causes',
      'Build diagnostic skill',
      'Lock in 7 exam-edge gems'
    ],
    tip: "These cards are revision, not first-time learning. They cue what you already know and flag the gems that lift answers from B to A*.",
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards',       state: 'current'                                  },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context',    state: 'available', href: TopicLoader.buildUrl('link_intro.html') },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',       state: 'available', href: TopicLoader.buildUrl('land_intro.html') }
    ]
  },

  cards: [

    /* ----- CARD 1 — Framing ----- */
    {
      id: 'framing',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Inflation has many causes',
      lede: 'Three roots, one outcome. The cause matters because the cure depends on it.',
      branches: [
        { tone: 'green', label: 'Demand-pull', sub: 'AD outpaces AS. Prices rise <em>with</em> output.' },
        { tone: 'amber', label: 'Cost-push',   sub: 'SRAS shifts left. Prices rise <em>as</em> output falls. Stagflation.' },
        { tone: 'blue',  label: 'Monetary',    sub: 'Money grows faster than output. The long-run constraint.' }
      ],
      examEdge: {
        title: 'Real episodes mix causes',
        text: 'The 2022-23 UK spike was both cost-push (energy) AND demand-pull (post-COVID spending). Top answers identify <em>which dominates</em> rather than picking one.'
      },
      keyTakeaway: {
        title: 'Why this matters',
        text: "Different causes need different policies. Cost-push can't be cured by demand-suppression alone — that's where most students lose marks."
      }
    },

    /* ----- CARD 2 — Demand-pull ----- */
    {
      id: 'demand-pull',
      template: 'cause',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Demand-pull: when demand outruns supply',
      lede: 'AD shifts right faster than AS can keep up. Equilibrium price level rises - and so does output.',
      diagram: 'demand-pull',
      diagramCaption: 'AD₁ → AD₂. New equilibrium at higher P, higher Y.',
      causes: {
        title: 'Causes',
        items: [
          'Consumer confidence + spending boom',
          'Fiscal stimulus',
          'Cheap credit / falling savings ratio',
          'Surge in export demand'
        ]
      },
      hallmarks: {
        title: "Characteristics",
        items: [
          'Prices rising <strong>with</strong> output rising',
          'Falling unemployment',
          'Tight labour markets, wage pressure',
          'Strong business confidence'
        ]
      },
      ukExamples: {
        title: 'UK examples',
        text: '<strong>Lawson boom 1986-89</strong> - tax cuts + monetary loosening. <strong>2021-22</strong> - post-COVID demand surge as households spent built-up savings.'
      },
      examEdge: {
        title: 'Diagnose by output direction',
        text: 'Rising prices <strong>with</strong> rising output → demand-pull. The output direction is the cleanest diagnostic.'
      },
      policy: {
        title: 'Standard policy response',
        text: 'Tighten monetary policy (raise rates) and/or tighter fiscal policy (cut spending, raise tax). Both objectives - lower inflation, lower output - point the same way.'
      }
    },

    /* ----- CARD 3 — Cost-push ----- */
    {
      id: 'cost-push',
      template: 'cause',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Cost-push: when production gets more expensive',
      lede: 'SRAS shifts left as input costs rise. Prices climb - but output falls. The dangerous case.',
      diagram: 'cost-push',
      diagramCaption: 'SRAS₁ → SRAS₂. New equilibrium at higher P, <strong>lower</strong> Y.',
      causes: {
        title: 'Causes',
        items: [
          'Raw material spikes (oil, food, metals)',
          'Wage rises above productivity',
          'Currency depreciation → import costs ↑',
          'Supply chain disruption',
          'Regulatory cost shocks'
        ]
      },
      hallmarks: {
        title: "Characteristics",
        items: [
          'Prices rising <strong>while</strong> output falls',
          'Rising unemployment',
          'Slack labour markets',
          'External supply shocks visible'
        ]
      },
      ukExamples: {
        title: 'UK examples',
        text: '<strong>1973-74 oil crisis</strong> (oil prices quadrupled). <strong>1979-80</strong> second oil shock. <strong>2022 Russia-Ukraine</strong> energy shock.'
      },
      examEdge: {
        title: 'The word is "stagflation"',
        text: 'Rising prices <strong>+</strong> falling output <strong>+</strong> rising unemployment = stagflation. Use the term explicitly in essays - it signals you\'ve identified the type correctly.'
      },
      dilemma: {
        title: 'The policy dilemma',
        lines: [
          'Tighten policy → inflation falls but output collapse worsens.',
          'Loosen policy → output recovers but inflation entrenches.',
          '<strong>There\'s no costless cure.</strong> This is the core evaluation point.'
        ]
      }
    },

    /* ----- CARD 4 — Spotting the difference ----- */
    {
      id: 'diagnose',
      template: 'diagnose',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Spotting the difference',
      lede: 'The diagnostic skill examiners reward. Get this right and the rest of your answer flows.',
      table: {
        headers: ['', 'Demand-pull', 'Cost-push'],
        rows: [
          ['Output',        'Rising',  'Falling'],
          ['Unemployment',  'Falling', 'Rising'],
          ['Labour market', 'Tight',   'Slack'],
          ['Confidence',    'Strong',  'Weak'],
          ['Trigger',       'Internal demand', 'Often external shock']
        ]
      },
      scenarios: {
        title: 'Diagnose these',
        items: [
          {
            label: 'A',
            text: 'Inflation 8%, unemployment 3%, GDP growing strongly, vacancies at record highs.',
            answer: 'Demand-pull',
            tone: 'green'
          },
          {
            label: 'B',
            text: 'Inflation 11%, unemployment rising, GDP flat, oil prices doubled.',
            answer: 'Cost-push',
            tone: 'amber'
          },
          {
            label: 'C',
            text: 'Inflation 9%, post-pandemic demand surge AND energy shock simultaneous.',
            answer: 'Mixed (lean cost-push if energy dominates)',
            tone: 'purple'
          }
        ]
      },
      examEdge: {
        title: 'Always diagnose first',
        text: 'Top answers open with: <em>"This is primarily [cost-push/demand-pull/mixed] inflation because…"</em> Naming the type <strong>before</strong> discussing policy adds a clear analytical step examiners reward.'
      }
    },

    /* ----- CARD 5 — Monetary theory & QE (merged) ----- */
    {
      id: 'monetary',
      template: 'monetary',
      stepLabel: 'Learn: Step 5 of 8',
      title: "Money supply & QE",
      lede: "Classical theory says more money = more inflation. QE broke that rule — and understanding why is worth exam marks.",
      classical: {
        title: 'The classical view',
        formula: 'MV = PY',
        formulaSub: 'money × velocity = prices × output',
        quote: '"Inflation is always and everywhere a monetary phenomenon." — Friedman',
        examples: 'Hyperinflations confirm it: <strong>Zimbabwe 2008</strong>, <strong>Weimar 1923</strong>, <strong>Hungary 1946</strong> — all monetary.'
      },
      puzzle: {
        bullets: [
          '<strong>2008-2022:</strong> BoE, Fed and ECB expanded the monetary base by 5-10× through QE.',
          '<strong>Critics warned</strong> of imminent hyperinflation.',
          '<strong>It didn\'t happen.</strong> Four reasons explain why.'
        ]
      },
      mechanisms: [
        {
          num: '1',
          tone: 'blue',
          title: 'Velocity collapsed',
          text: 'M rose 10× but V fell 10×. Banks held QE-created reserves rather than lending. <strong>MV = PY</strong> held — V just did the adjusting.'
        },
        {
          num: '2',
          tone: 'green',
          title: 'Output gap',
          text: 'Economies were below potential. New money raised output rather than prices — the AS curve was effectively flat.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Anchored expectations',
          text: "Decades of credible 2% targeting kept expectations stable. People didn't expect inflation, so they didn't act in ways that caused it."
        },
        {
          num: '4',
          tone: 'rose',
          title: 'Counter-examples confirm it',
          text: 'Venezuela, Argentina, Turkey <em>did</em> get inflation — because their central banks lacked credibility and money financed fiscal deficits.'
        }
      ],
      examEdge: {
        title: 'The takeaway gem',
        text: '"More money = more inflation" needs context. QE <strong>in a recession with anchored expectations</strong> doesn\'t cause inflation. The 2022-23 spike came from energy shocks — not QE. Timing matters.'
      }
    },

    /* ----- CARD 6 — Impacts of inflation ----- */
    {
      id: 'impacts',
      template: 'impacts',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Impacts of inflation',
      lede: 'Inflation affects different groups in very different ways. The distributional story is where evaluation marks live.',
      groups: [
        {
          tone: 'purple',
          icon: '👥',
          label: 'Consumers',
          bullets: [
            'Real incomes fall when wages lag inflation',
            'Purchasing power erodes — the same money buys less',
            'Fixed-income groups (pensioners, benefit recipients) hit hardest'
          ]
        },
        {
          tone: 'amber',
          icon: '🏢',
          label: 'Firms',
          bullets: [
            'Rising input costs squeeze profit margins',
            'Uncertainty reduces investment',
            'Some firms pass costs on — others absorb and shrink'
          ]
        },
        {
          tone: 'blue',
          icon: '🌐',
          label: 'Economy',
          bullets: [
            'Loss of international competitiveness',
            'Exports fall, imports rise — worsens current account',
            'Slower growth if BoE raises rates to control it'
          ]
        }
      ],
      winnersLosers: {
        winners: {
          label: 'Winners',
          items: ['<strong>Borrowers</strong> — repay debt in lower real terms (incl. the government)']
        },
        losers: {
          label: 'Losers',
          items: [
            '<strong>Savers</strong> — real value of savings eroded',
            '<strong>Fixed-income earners</strong> — wages or pensions don\'t keep up',
            '<strong>Creditors</strong> — loans repaid in devalued money'
          ]
        }
      },
      example: 'The 2022-23 UK spike: energy costs doubled, real wages fell for 18 months. Low-income households — who spend a higher share of income on energy and food — were disproportionately affected.',
      examEdge: {
        title: 'Evaluation: who loses most?',
        text: 'The strongest evaluation identifies <em>which group</em> is worst affected and <em>why the burden is unequal</em>. Low-income households face a higher inflation rate on their basket — they can\'t easily switch away from essentials.'
      }
    },



    /* ----- CARD 7 — Deflation ----- */
    {
      id: 'deflation',
      template: 'deflation',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'The opposite problem: deflation',
      lede: "Falling prices. Sounds harmless. It isn't - and the asymmetry tells you why central banks target 2%, not 0%.",
      mechanismsTitle: 'Why deflation is dangerous',
      mechanisms: [
        {
          icon: '⏳',
          title: 'Demand postponement',
          text: 'If prices will be lower next month, consumers wait. Falling demand → worse deflation. Self-reinforcing.'
        },
        {
          icon: '💰',
          title: 'Real debt rises',
          text: 'Nominal debt is fixed; nominal income falls. £100k mortgage gets heavier. Defaults rise. Banks weaken.'
        },
        {
          icon: '🚫',
          title: 'Zero lower bound',
          text: "Nominal rates can't go far below zero. Real rates rise even when central banks cut. Monetary policy loses its main lever."
        },
        {
          icon: '🔒',
          title: 'Wage rigidity',
          text: "Workers resist nominal wage cuts. Real wages need to fall but can't - so firms cut jobs instead."
        }
      ],
      examples: {
        title: 'Examples to know',
        items: [
          { period: '1930s Great Depression',  text: 'prices fell ~25%, unemployment hit 25%+.' },
          { period: 'Japan 1995-2015',         text: '"lost decades", multiple QE rounds, slow escape.' },
          { period: 'UK',                       text: 'brief episodes 2009, 2015, 2020; aggressive BoE response prevented entrenchment.' }
        ]
      },
      examEdge: {
        title: 'The asymmetry argument',
        text: "Central banks target <strong>2%, not 0%</strong> because the costs are asymmetric. Modest inflation overshoots (3-4%) are manageable. Modest <em>undershoots</em> toward zero are dangerous. This is the strongest argument for the 2% target - use it in monetary policy questions."
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'causes'}), label: 'Test yourself →' }
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'inf-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: inflation',
      question: 'Evaluate the view that monetary policy is the most effective tool for controlling inflation. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define inflation and briefly explain the main tools for controlling it. Introduce the debate between monetary and alternative policy instruments.',
          hint: 'Inflation: sustained rise in the general price level. Main tools: monetary policy (Bank Rate, QE — targets demand-side inflation), supply-side policy (raises LRAS → reduces inflationary pressure), fiscal policy (contractionary fiscal policy reduces AD). The key question is whether monetary policy, specifically Bank Rate, is superior to alternatives. Demand-pull inflation: monetary policy is well-suited. Cost-push inflation: monetary policy creates a policy dilemma.',
          model: 'Inflation — a sustained rise in the general price level — can arise from demand-side (demand-pull) or supply-side (cost-push) sources. The primary tool for controlling inflation in the UK is monetary policy: the Bank of England\'s Monetary Policy Committee sets Bank Rate to influence aggregate demand, with an inflation target of CPI 2%. However, fiscal policy (contractionary government spending or tax rises) and supply-side policies (reducing cost pressures, increasing productive capacity) can also address inflation. This essay evaluates whether monetary policy deserves its primacy as an inflation control tool, or whether the source of inflation determines which instrument is most effective.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — How monetary policy controls demand-pull inflation',
          prompt: 'Explain the transmission mechanism through which Bank Rate controls demand-pull inflation.',
          hint: 'Transmission mechanism: ↑ Bank Rate → ↑ mortgage rates, savings rates, borrowing costs → ↓ consumption (income effect for mortgage holders), ↓ investment → ↓ AD → ↓ inflationary pressure. Also: ↑ exchange rate → ↓ export competitiveness + ↓ import prices → ↓ CPI. BoE independence (1997) provides credibility: low inflation expectations → wage demands moderate → self-fulfilling disinflation. 2021-23 episode: BoE raised rates from 0.1% to 5.25% → inflation fell from 11.1% to 2%.',
          model: 'Monetary policy works primarily through the interest rate transmission mechanism. When the Bank of England raises Bank Rate, commercial banks raise mortgage and borrowing rates: consumers with variable mortgages face higher debt service costs, reducing disposable income and spending; firms face higher investment costs, reducing capital expenditure. The resulting fall in aggregate demand reduces the output gap and eases inflationary pressure. An additional channel operates through the exchange rate: higher UK interest rates attract capital inflows → sterling appreciates → import prices fall → CPI falls directly. The 2021-23 tightening cycle illustrates this: the MPC raised Bank Rate from 0.1% to 5.25% between November 2021 and August 2023, contributing to the fall of CPI inflation from 11.1% to approximately 2% by mid-2024. Bank of England independence (granted 1997) enhances effectiveness by anchoring inflation expectations: if firms and workers believe the BoE will hit its 2% target, they moderate wage and price demands, reducing the sacrifice ratio.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — Limitations: cost-push inflation and the policy dilemma',
          prompt: 'Explain why monetary policy is a poor instrument for cost-push inflation and the trade-off it creates.',
          hint: 'Cost-push inflation: SRAS shifts left → price level rises AND output falls → stagflation. Tightening monetary policy (↑ Bank Rate) to reduce inflation from SRAS shock worsens the output gap further. Easing to protect output worsens inflation. The classic policy dilemma: monetary policy cannot fix supply-side problems without worsening the other half of the dilemma. 2022 UK: energy price shock caused cost-push inflation — BoE could not address root cause (supply). Only supply-side policy (domestic energy production, energy efficiency, price caps) could address the source.',
          model: 'Monetary policy\'s effectiveness is most compromised when inflation is cost-push rather than demand-pull. When SRAS shifts left — due to energy price shocks, supply chain disruption, or wage-price spirals — both output falls and prices rise simultaneously (stagflation). Raising Bank Rate to reduce inflation also reduces AD, worsening the output fall; easing policy to protect output worsens inflation. Neither approach resolves the problem, which lies on the supply side. The 2022 UK energy price crisis illustrates this acutely: the BoE faced CPI of 11.1% driven primarily by energy and food price shocks outside its control. Raising rates to 5.25% suppressed demand but could not address the root cause (energy supply restriction) and contributed to a near-recession. Supply-side interventions — energy price caps (the UK Energy Price Guarantee), domestic energy investment, and energy efficiency — were more directly targeted at the source of the inflation than monetary tightening.'
        },
        {
          type: 'counter',
          label: 'Counter — Fiscal policy and supply-side alternatives',
          prompt: 'Evaluate when fiscal policy or supply-side reform may be more effective at controlling inflation than monetary policy.',
          hint: 'Contractionary fiscal policy (↑ taxes, ↓ G) reduces AD → reduces inflationary pressure. May be targeted more precisely than blunt interest rate changes. No exchange rate appreciation side effect. But: subject to political cycle, slow to implement, may worsen deficit short-run. Supply-side policy: raises LRAS → reduces inflationary pressure while maintaining output → no trade-off. But: long lags (education, infrastructure) — not suited to short-run stabilisation. Price controls (energy price caps): directly cap CPI component — fast-acting but create supply distortions.',
          model: 'Contractionary fiscal policy — raising taxes or reducing government spending — can also reduce aggregate demand and inflationary pressure without the exchange rate appreciation that accompanies Bank Rate rises. In a coordinated setting, fiscal and monetary tightening together can achieve inflation control while maintaining more stable exchange rates. However, fiscal policy suffers from implementation lags (budget cycles, parliamentary process) and is subject to political constraints: governments facing elections are reluctant to raise taxes or cut spending, making fiscal policy pro-cyclical in practice. Supply-side policies represent the most direct response to structural inflationary pressure: education, infrastructure, and technology investment shift LRAS right, reducing inflation while maintaining output — a superior outcome to the AD-reducing instruments. However, supply-side reform takes years to produce measurable effects on the output gap, making it unsuitable for short-run inflation stabilisation.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — Source of inflation determines the best instrument',
          prompt: 'Weigh monetary policy against alternatives with reference to the type of inflation and the time horizon.',
          hint: 'Key judgement: monetary policy is most effective for demand-pull inflation where the target (reducing excess AD) matches the instrument (raising borrowing costs). It is least effective for cost-push inflation where it creates a policy dilemma. The appropriate instrument depends on the source of inflation. For UK 2022-23 inflation: monetary policy was part of the solution but supply-side and price interventions addressed the structural causes more directly. BoE independence is a major strength — credibility amplifies effectiveness. Long-run: supply-side policy is the most durable solution to structural inflationary pressure.',
          model: 'The most important evaluation dimension is the source of inflation. Monetary policy is clearly the most effective instrument for controlling demand-pull inflation: it directly targets excess aggregate demand, operates quickly through financial markets, and is enhanced by the credibility of Bank of England independence. The UK\'s successful return of CPI from 11.1% to target through the 2021-23 tightening cycle is strong evidence of its effectiveness in this context. However, monetary policy is a poor primary instrument for cost-push inflation: it addresses the symptom (high prices) rather than the cause (supply constraints), and creates a sacrifice of output that supply-side solutions do not. For cost-push inflation, targeted supply-side interventions — energy market reform, supply chain investment, competition policy to reduce mark-ups — are more effective at addressing the source without worsening the output gap. The optimal approach combines instruments: monetary policy for demand management, supply-side reform for structural competitiveness, and targeted fiscal measures for specific cost-push episodes.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Deliver a reasoned judgement: monetary policy is the best single tool for demand-pull inflation but not for cost-push, and long-run price stability ultimately requires supply-side foundations.',
          hint: 'Monetary policy is the most effective short-run stabilisation tool for demand-pull inflation, and BoE independence gives it credibility that amplifies this effectiveness. But it is insufficient alone: cost-push inflation requires supply-side responses; long-run price stability requires productive capacity growth (LRAS shifting right). The "most effective" claim is valid for demand-pull scenarios but requires qualification for cost-push episodes.',
          model: 'Monetary policy is the most effective single tool available to the UK for controlling inflation in the short to medium run, particularly for demand-pull episodes. Bank of England independence, the credibility of the 2% target, and the breadth of the interest rate transmission mechanism all enhance its effectiveness. However, the claim requires important qualification: monetary policy creates a policy dilemma for cost-push inflation, where tightening worsens the output gap without addressing the supply-side source of the price pressure. In these circumstances — as the 2022 energy shock demonstrated — supply-side interventions and targeted fiscal measures are more directly effective. Long-run price stability ultimately requires supply-side foundations: productive capacity that grows in line with demand, competitive markets that prevent mark-up inflation, and an institutional framework of BoE independence and fiscal responsibility. Monetary policy is the most effective stabilisation instrument; supply-side reform is the most durable one.'
        }
      ]
    }
  ]
};
