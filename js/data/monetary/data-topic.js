/* ============================================================
   ECONOS – content data for monetary_policy
   7 cards · revision-tight · exam-edge gems flagged
   Edexcel Theme 2.6.2 / 3.2.4.3
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'monetary_policy',
  topicNum: '6.2.2',
  theme: 'Theme 2 · The National and Global Economy',
  title: 'Demand-side Policies: Monetary',
  estTime: '10-12 minutes',
  goal: 'Master the transmission chain – and when it breaks',

  intro: {
    heroKey: 'heroMonetary',
    summary: "One lever, five channels. Master the transmission chain and you'll know when it works – and when, like 2009 or 2022, it doesn't.",
    doInThis: 'Lock in the channels, run the chains, know what breaks the pipe – plus a 25-mark essay scaffold on monetary policy effectiveness.',
    outcomes: [
      'Name 5 transmission channels',
      'Spot when policy hits its limits',
      'Lock in 7 exam-edge gems'
    ],
    tip: "These cards are revision, not first-time learning. They cue what you already know and flag the gems that lift answers from B to A*.",
    stages: [
      { num: 1, name: 'Learn',  sub: 'Recap and lock in the gems',     state: 'current' },
      { num: 2, name: 'Master', sub: 'Apply in exam-style questions',  state: 'locked' },
      { num: 3, name: 'Review', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 – Framing: One lever, five channels ----- */
    {
      id: 'channels',
      template: 'framing',
      diagramKey: 'monetaryFraming',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'One lever, five channels',
      lede: "Monetary policy means one main lever – the Bank Rate. But it pulls five distinct strings to reach inflation. Naming them all is the first A* move.",
      branches: [
        { tone: 'green',  label: 'Borrowing cost',     sub: '<strong>Rates up → borrowing more expensive.</strong> Consumer credit and business loans shrink. C and I fall.' },
        { tone: 'amber',  label: 'Mortgages',          sub: '<strong>Variable mortgage payments rise</strong> with the base rate, eating into disposable income. UK households are particularly exposed.' },
        { tone: 'blue',   label: 'Savings & wealth',   sub: '<strong>Higher returns on savings</strong> → save more, spend less. Asset prices typically fall, eroding wealth (the reverse of the wealth effect).' },
        { tone: 'purple', label: 'Exchange rate',      sub: '<strong>Higher rates attract hot money</strong> → sterling appreciates → exports dearer, imports cheaper → net exports fall, imported inflation eased.' },
        { tone: 'rose',   label: 'Expectations',       sub: '<strong>A credible BoE shifts beliefs.</strong> Firms moderate price rises, unions moderate wage demands. Sometimes the strongest channel of all.' }
      ],
      examEdge: {
        title: 'Name multiple channels',
        text: 'Most students name one channel (usually borrowing cost). <strong>A* answers walk through 3-4</strong>, showing how monetary policy reaches AD via several routes simultaneously.'
      },
      keyTakeaway: {
        title: 'Why this matters',
        text: "If only one channel is working – say, mortgages while savings are inert – policy is half as powerful. Strong answers identify which channels are live in any given scenario."
      }
    },

    /* ----- CARD 2 – The Bank of England: mandate, MPC, tools ----- */
    {
      id: 'boe',
      template: 'paired',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'The Bank of England',
      lede: "Independence, mandate, machinery. Three things to lock in before you reason about policy.",
      pairs: [
        {
          tone: 'blue',
          label: 'Mandate & MPC',
          drivers: [
            'CPI inflation target: <strong>2% ±1pp</strong>',
            'Set by HM Treasury; BoE pursues it independently',
            'Monetary Policy Committee: 9 members',
            '8 scheduled meetings per year + emergency meetings',
            'Each member: one vote · Governor casts deciding vote'
          ],
          example: '<strong>1997:</strong> Gordon Brown granted BoE operational independence on his first day as Chancellor – globally influential institutional reform. Inflation expectations dropped sharply after.'
        },
        {
          tone: 'amber',
          label: 'Two main instruments',
          drivers: [
            '<strong>Bank Rate</strong> – the conventional lever',
            '<strong>QE / QT</strong> – bond purchases / sales, unconventional',
            'Forward guidance – signalling future intentions',
            'Macro-prudential tools – capital ratios, lending limits',
            'FX intervention (rare, last used 1992)'
          ],
          example: "<strong>2009-21:</strong> BoE did <strong>£895bn of QE</strong> total – £375bn after the GFC, £60bn post-Brexit vote, the rest during COVID. The QE era ended with QT starting in 2022."
        }
      ],
      examEdge: {
        title: 'BoE independence (1997)',
        text: 'Quoting <strong>1997 as the independence date</strong> is a credibility signal worth a sentence. Independent central banks have lower inflation expectations because they can\'t be pressured to monetise government debt.'
      },
      policy: {
        title: 'Why independence matters',
        text: 'If the central bank can be pressured by politicians, markets assume inflation will be tolerated to boost short-term growth. Independence anchors expectations – which (as Card 6 shows) is the strongest channel of all.'
      }
    },

    /* ----- CARD 3 – The transmission chain (INTERACTIVE) ----- */
    {
      id: 'transmission',
      template: 'transmission-chain',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'The transmission chain',
      lede: "Press each channel to follow the causal chain. Same starting point, same ending point, but five different routes.",
      action: 'Bank Rate rises ↑',
      outcome: 'AD falls → Inflation falls',
      channels: [
        {
          key: 'borrowing',
          tone: 'green',
          label: 'Borrowing cost',
          chain: [
            'Commercial bank rates follow Bank Rate up',
            'Cost of consumer credit and business loans rises',
            'Consumer borrowing for big-ticket items falls (C ↓)',
            'Firms postpone capex on marginal projects (I ↓)'
          ],
          micro: 'Strong if households and firms are credit-dependent.'
        },
        {
          key: 'mortgages',
          tone: 'amber',
          label: 'Mortgages',
          chain: [
            'Variable mortgage rates rise with Bank Rate',
            'Households on tracker/SVR mortgages see monthly payments jump',
            'Disposable income squeezed → less spending on other goods',
            'Discretionary consumption falls (C ↓)'
          ],
          micro: 'UK uniquely exposed: ~30% on variable rates; fixed-rate periods short (2-5 years) so the squeeze hits gradually.'
        },
        {
          key: 'savings',
          tone: 'blue',
          label: 'Savings & wealth',
          chain: [
            'Higher returns on cash savings make saving more attractive',
            'Households save more, spend less (C ↓)',
            'Asset prices (bonds, often equities, housing) fall – wealth effect reverses',
            'Households feel poorer; consumption falls further (C ↓)'
          ],
          micro: 'Strong when households have significant assets exposed to interest rates.'
        },
        {
          key: 'exchange',
          tone: 'purple',
          label: 'Exchange rate',
          chain: [
            'Higher UK rates attract foreign capital (hot money flows in)',
            'Demand for sterling rises → sterling appreciates',
            'Exports become more expensive abroad → X falls',
            'Imports become cheaper at home → M rises, import prices fall',
            'Net exports fall (X−M ↓) AND imported inflation falls'
          ],
          micro: 'Dual effect: reduces AD via trade AND directly damps imported inflation.'
        },
        {
          key: 'expectations',
          tone: 'rose',
          label: 'Expectations',
          chain: [
            'If BoE is credible, firms believe inflation will return to target',
            'Wage demands moderate (unions expect lower future inflation)',
            'Firms cap price rises (expect competitors to do the same)',
            'Inflation expectations get re-anchored to 2%',
            'Actual inflation falls – sometimes without big rate moves'
          ],
          micro: 'The most powerful channel when it works – and the most fragile when credibility breaks (see Card 6).'
        }
      ],
      examEdge: {
        title: 'Walk one chain fully',
        text: "Most students name channels in a list. <strong>A* answers pick one channel and walk it through fully</strong> – e.g. <em>'Higher rates → sterling appreciates → exports fall → AD falls → demand-pull inflation eases'</em>. Show the mechanism, don't just label it."
      }
    },

    /* ----- CARD 4 – Conventional vs unconventional ----- */
    {
      id: 'conventional-vs-qe',
      template: 'ad-interactive',
      diagramKey: 'adAsMonetary',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Conventional vs unconventional',
      lede: "Rates work most of the time. When they don't – like 2009 or 2020 at the zero lower bound – central banks reach for QE. Same target, different mechanism.",
      steps: [
        {
          key: 'base',
          label: 'Starting point',
          text: 'AD₁ meets AS at full employment Y<sub>FE</sub>. Inflation is at the 2% target. The BoE\'s job: respond to shocks that push the economy off this point.'
        },
        {
          key: 'extension',
          label: 'Conventional: rate hike',
          text: 'Inflation is too high. BoE raises Bank Rate → all 5 transmission channels work in the same direction → AD shifts LEFT to AD₂. Inflation falls, but so does output (the classic <strong>Phillips-curve trade-off</strong>).'
        },
        {
          key: 'shift',
          label: "Unconventional: QE (at ZLB)",
          text: 'Inflation is too LOW and rates are stuck at zero – the <strong>zero lower bound</strong>. BoE buys bonds: bond yields fall, asset prices rise, sterling depreciates, wealth effect kicks in → AD shifts RIGHT. <em>Different mechanism, opposite direction, same toolkit.</em>'
        }
      ],
      examEdge: {
        title: 'QE works when rates can\'t',
        text: "Naming <strong>the zero lower bound</strong> (ZLB) explicitly is the marker that you understand why QE exists. <em>'Rates couldn't fall further, so the BoE switched to bond purchases to boost AD.'</em> That sentence is worth 2-3 marks."
      }
    },

    /* ----- CARD 5 – When the pipe doesn't work (under stress) ----- */
    {
      id: 'under-stress',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 5 of 8',
      title: "When the pipe doesn't work",
      lede: "Monetary policy isn't magic. Four things that can break the transmission chain – spotting which one applies is the analytical move that lifts answers to A*.",
      mechanisms: [
        {
          num: '1',
          tone: 'rose',
          title: 'Liquidity trap',
          text: 'Rates near zero, but firms won\'t borrow and households won\'t spend regardless. Confidence is too damaged. <strong>Japan 1990s-2010s</strong> is the classic case; the UK flirted with this post-2008.'
        },
        {
          num: '2',
          tone: 'amber',
          title: 'Bank lending squeeze',
          text: "Banks won't pass through rate cuts because they're rebuilding balance sheets after a crisis. <strong>Post-2008 UK:</strong> base rate fell to 0.5% but mortgage rates barely budged for years. The pipe is blocked."
        },
        {
          num: '3',
          tone: 'green',
          title: 'Cost-push inflation',
          text: 'Monetary policy targets <strong>demand-pull</strong> inflation. It\'s much less effective against cost-push shocks like energy spikes. <strong>2022 UK:</strong> rates rose sharply, but inflation was driven by Ukraine-war gas prices – limited what monetary policy alone could do.'
        },
        {
          num: '4',
          tone: 'blue',
          title: 'Long time lags',
          text: '<strong>18-24 months</strong> between a rate decision and its peak impact on inflation. Data is backward-looking; policy is forward-looking. By the time policy works, the underlying conditions may have changed – leading to over- or under-tightening.'
        }
      ],
      examEdge: {
        title: 'Match the stress to the scenario',
        text: "When a question describes a scenario, <strong>identify which stress applies</strong>: cost-push shock? Banks deleveraging? Rates already at ZLB? Naming the specific constraint is the analytical step examiners reward – not just <em>'policy might not work'</em> but <em>'policy is constrained because…'</em>."
      },
      connection: {
        title: 'Why this matters',
        text: 'Every monetary policy question has a constraint hiding in it. The 2022-24 UK inflation episode was a textbook example: cost-push from energy + lagged transmission + credibility shock all at once. Spotting one of those gives you analytical depth.'
      }
    },

    /* ----- CARD 6 – Credibility & expectations ----- */
    {
      id: 'credibility',
      template: 'paired',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Credibility: the invisible tool',
      lede: "The BoE's most powerful tool is sometimes saying nothing. If markets believe inflation will return to target, it tends to. Lose belief – and you need a much bigger hammer.",
      pairs: [
        {
          tone: 'green',
          label: 'Credible BoE',
          drivers: [
            'Inflation expectations <strong>anchored at 2%</strong>',
            'Wage demands moderate – unions expect 2% inflation',
            'Firms cap price rises – expect competitors to do the same',
            'Smaller actual rate moves needed to control inflation',
            'Phillips curve flatter – less unemployment for given inflation control'
          ],
          example: '<strong>1997-2020 UK:</strong> CPI stayed close to 2% target for two decades. Even after 2008-09 crisis, expectations stayed anchored – allowing aggressive monetary loosening without runaway inflation.'
        },
        {
          tone: 'rose',
          label: 'Credibility lost',
          drivers: [
            'Inflation expectations <strong>de-anchor upward</strong>',
            'Wage-price spiral risk – workers demand higher pay',
            'Firms front-run inflation by raising prices preemptively',
            'Harsher rate rises needed to break the spiral',
            'Higher recession risk during disinflation'
          ],
          example: '<strong>2022 UK mini-budget crisis:</strong> Truss-Kwarteng announced £45bn of unfunded tax cuts. Gilt yields spiked, sterling crashed, BoE emergency intervention. Showed in days what losing credibility costs – and why independence matters.'
        }
      ],
      examEdge: {
        title: 'Cite 2022 mini-budget',
        text: "Naming the <strong>September 2022 mini-budget</strong> as your credibility example is vivid and recent. It crashed gilts, forced BoE intervention, ended a PM. Most concrete recent illustration of why credibility – and central bank independence – matter."
      },
      policy: {
        title: 'The Phillips curve link',
        text: 'Credibility flattens the short-run Phillips curve: less unemployment is needed to control inflation. Lose credibility and the curve steepens – disinflation requires a deeper recession.'
      }
    },

    /* ----- CARD 7 – Evaluation: strengths, weaknesses, fiscal interaction ----- */
    {
      id: 'evaluation',
      template: 'deflation',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Strengths, weaknesses & policy interaction',
      lede: "Monetary policy doesn't operate alone. Four things to remember when evaluating it – and one of them earns marks every time.",
      mechanismsTitle: 'Four things to evaluate',
      mechanisms: [
        {
          icon: '⚡',
          title: 'Speed of effect',
          text: 'Rate decisions are <strong>fast</strong> – MPC can vote in a day. But the impact on inflation takes <strong>18-24 months</strong> to fully transmit. So today\'s rate is for tomorrow\'s problem, based on yesterday\'s data.'
        },
        {
          icon: '🏠',
          title: 'Distributional effects',
          text: 'Rate rises hurt <strong>mortgage holders, borrowers, and the asset-poor</strong>; they help <strong>savers and the asset-rich</strong>. QE inflates asset prices – widens inequality. Monetary policy isn\'t distributionally neutral.'
        },
        {
          icon: '⚖',
          title: 'Trade-offs',
          text: '<strong>Inflation vs growth</strong> (the Phillips curve), <strong>inflation vs financial stability</strong> (rate rises stress indebted firms), <strong>credibility vs flexibility</strong> (anchoring takes years, can be lost in days). No costless policy.'
        },
        {
          icon: '🔗',
          title: 'Fiscal-monetary interaction',
          text: '<strong>Tight monetary + loose fiscal</strong> = mixed signal, conflicting effects, currency volatility. The <strong>2022 mini-budget</strong> showed exactly this. Coordination matters: when both lean the same way, policy is amplified; when they conflict, it\'s weakened.'
        }
      ],
      examples: {
        title: 'Episodes to know',
        items: [
          { period: '2009 QE',          text: 'BoE rate at 0.5%, ZLB binding. £375bn QE began. Asset prices recovered; recovery was slow but credibility held.' },
          { period: '2020 COVID',        text: 'Rate cut to 0.1%, £450bn extra QE. Combined with fiscal furlough – coordinated monetary + fiscal stimulus.' },
          { period: '2022 mini-budget',  text: 'Loose fiscal vs tight monetary clash. Gilt yields spiked, sterling fell, BoE emergency bond purchases. Credibility cost.' },
          { period: '2022-24 tightening', text: 'Rate rose 0.1% → 5.25% in 18 months – fastest tightening in decades. Inflation peaked 11%, fell to ~2% by 2024.' }
        ]
      },
      examEdge: {
        title: 'Mention fiscal-monetary interaction',
        text: 'Every monetary policy essay should reference <strong>fiscal-monetary interaction at least once</strong>. <em>"This rate decision is most effective if fiscal policy is complementary; if fiscal is loose, the BoE has to tighten harder."</em> One sentence, real analytical mark.'
      },
      bridge: {
        title: "Where to next",
        text: "You've got the chains, the constraints, and the credibility story. Now apply them: try the <strong>monetary policy simulator</strong> in <em>Land it</em> – given a scenario, choose the rate move and walk one chain."
      },
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};
