/* ============================================================
   ECONOS — content data for aggregate_demand
   7 cards · revision-tight · exam-edge gems flagged
   Edexcel Theme 2.1 / 3.1
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'aggregate_demand',
  topicNum: '2.1',
  theme: 'Theme 2 · The National and Global Economy',
  sessionLabel: 'SESSION 1 OF 3: LEARN',
  title: 'Aggregate Demand',
  estTime: '8-10 minutes',
  goal: 'Own the four components — and know what moves each one',

  intro: {
    heroKey: 'heroAd',
    summary: "AD = C + I + G + (X−M). Four doors into the macroeconomy. Every demand-side shock enters through one of them. Lock in what determines each component and you can analyse any scenario on any paper.",
    doInThis: 'Pin down the four components, trace what shifts AD, and load the exam gems that turn B answers into A*.',
    outcomes: [
      'Define and weight C, I, G and (X−M)',
      'Explain what shifts AD — and why',
      'Lock in 7 exam-edge gems'
    ],
    tip: "These cards are revision, not first-time learning. They cue what you already know and flag the gems that lift answers from B to A*.",
    stages: [
      { num: 1, name: 'Learn',  sub: 'Recap and lock in the gems',      state: 'current' },
      { num: 2, name: 'Master', sub: 'Apply in exam-style questions',   state: 'locked' },
      { num: 3, name: 'Review', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 — Framing: Four components, one identity ----- */
    {
      id: 'components',
      template: 'framing',
      diagramKey: 'adComposition',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'AD = C + I + G + (X−M)',
      lede: "Aggregate demand is the total planned spending on UK-produced goods and services. Four components — and the diagram next to you shows exactly how much each one weighs in the UK.",
      branches: [
        {
          tone: 'green',
          label: 'Consumption (C) ≈ 60%',
          sub: '<strong>The largest and most stable component.</strong> Household spending on goods and services. Driven by: disposable income, consumer confidence, interest rates, wealth effects, and availability of credit. Key formula: C = a + bY<sub>d</sub> — autonomous spending plus a fraction of disposable income.'
        },
        {
          tone: 'amber',
          label: 'Investment (I) ≈ 17%',
          sub: '<strong>The most volatile component — and the examiner\'s favourite.</strong> Business capital formation plus housing investment. Driven by: interest rates, business confidence, expected future profits (animal spirits), accelerator effects, and access to finance. Keynes called long-run investment expectations "animal spirits".'
        },
        {
          tone: 'blue',
          label: 'Government spending (G) ≈ 20%',
          sub: '<strong>The policy lever.</strong> Government final consumption expenditure (excludes transfer payments like benefits — those affect C indirectly). Directly controlled by the Treasury. Can be used counter-cyclically via fiscal policy to stabilise the economy.'
        },
        {
          tone: 'purple',
          label: 'Net exports (X−M) ≈ 3%',
          sub: '<strong>The international channel.</strong> Export revenue minus import spending. Driven by: relative prices (linked to exchange rates), relative income growth, and non-price competitiveness. A stronger pound makes X dearer and M cheaper — so X−M typically falls. Note: the UK runs a persistent current account deficit, so X−M is usually negative.'
        }
      ],
      examEdge: {
        title: 'State the weights',
        text: 'Most students list the four components but never say how big they are. <strong>A* answers quantify: "Consumption is roughly 60% of UK AD, making it the largest and most powerful driver of demand-side fluctuations."</strong> One sentence, but it signals a student who knows the data rather than just the formula.'
      },
      keyTakeaway: {
        title: 'The transfer payments trap',
        text: "Government <em>transfer payments</em> (benefits, pensions) are NOT included in G — they're not spending on goods/services. They affect AD by boosting household incomes, which flows through to C. Mixing this up is one of the most-penalised errors in macro questions."
      }
    },

    /* ----- CARD 2 — Consumption and Investment ----- */
    {
      id: 'consumption-investment',
      template: 'paired',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Consumption and Investment',
      lede: "C is the engine room; I is the accelerant. Together they account for ~77% of UK AD — and between them they drive most of the business cycle.",
      bannerLabel: 'C & I · Engine and accelerant',
      bannerTone: 'green',
      pairs: [
        {
          tone: 'green',
          label: 'Consumption (C)',
          drivers: [
            '<strong>Disposable income</strong> — the primary driver (MPC ≈ 0.9 in UK)',
            '<strong>Consumer confidence</strong> — GfK index falls before recessions',
            '<strong>Interest rates</strong> — higher rates raise cost of credit, cut C',
            '<strong>Wealth effects</strong> — rising house/equity prices boost spending',
            '<strong>Credit availability</strong> — 2008 credit crunch showed this sharply'
          ],
          example: "<strong>2020 COVID lockdown:</strong> consumer confidence collapsed and C fell 25% in Q2 2020 — the sharpest single-quarter drop on record. Note: forced savings rose, then 'revenge spending' drove the 2021-22 recovery. C is the cycle."
        },
        {
          tone: 'amber',
          label: 'Investment (I)',
          drivers: [
            '<strong>Interest rates</strong> — higher rates raise cost of borrowing for capex',
            '<strong>Expected future profits</strong> — Keynes\'s "animal spirits"',
            '<strong>Accelerator effect</strong> — I rises faster than output growth (and falls harder)',
            '<strong>Business confidence</strong> — CBI surveys lead I by ~6 months',
            '<strong>Corporation tax / incentives</strong> — policy changes shift the I schedule'
          ],
          example: "<strong>Post-Brexit uncertainty 2016-19:</strong> UK business investment stagnated or fell for three consecutive years as firms delayed capex decisions — illustrating how uncertainty directly kills 'animal spirits'. The OBR estimated this cost UK investment 11% of GDP by 2019."
        }
      ],
      examEdge: {
        title: "Cite 'animal spirits'",
        text: "Quoting Keynes's <strong>'animal spirits'</strong> when explaining why investment is volatile earns immediate A* recognition. It signals you understand investment is not just about interest rates but about forward-looking expectations that can be irrational, self-fulfilling, and irreversible."
      },
      policy: {
        title: 'The accelerator link',
        text: 'The accelerator principle says investment is driven by the <em>change</em> in output, not the level. So when GDP growth slows — even if GDP is still rising — investment can fall. This is why recessions often bite harder than headline GDP numbers suggest: I amplifies downturns.'
      }
    },

    /* ----- CARD 3 — Government spending and Net Exports ----- */
    {
      id: 'govt-trade',
      template: 'paired',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Government spending and Net Exports',
      lede: "G is the most directly controllable component. (X−M) is the most internationally exposed. Both are essential for multi-perspective answers.",
      bannerLabel: 'G & X−M · Policy and trade',
      bannerTone: 'blue',
      pairs: [
        {
          tone: 'blue',
          label: 'Government spending (G)',
          drivers: [
            '<strong>Fiscal policy stance</strong> — expansionary: G↑; contractionary: G↓',
            '<strong>Political cycle</strong> — spending often rises ahead of elections',
            '<strong>Automatic stabilisers</strong> — G rises automatically in recessions (benefits ↑, tax ↑)',
            '<strong>Public investment plans</strong> — infrastructure, HS2, NHS capital',
            '<strong>Debt sustainability</strong> — high debt-to-GDP constrains G'
          ],
          example: "<strong>2020 COVID fiscal response:</strong> UK G rose by ~£300bn — the furlough scheme alone cost ~£70bn. This was the largest peacetime expansion of government spending in history. Without it, unemployment modelling suggested 3-4m job losses."
        },
        {
          tone: 'purple',
          label: 'Net Exports (X−M)',
          drivers: [
            '<strong>Exchange rate</strong> — appreciation → X dearer, M cheaper → X−M falls',
            '<strong>Relative inflation</strong> — UK inflation higher than trading partners → less competitive',
            '<strong>World income growth</strong> — faster global growth → demand for UK exports rises',
            '<strong>Non-price competitiveness</strong> — quality, branding, after-sales service',
            '<strong>Trade policy</strong> — tariffs, barriers, WTO membership, Brexit'
          ],
          example: "<strong>Post-Brexit 2021:</strong> UK goods exports to EU fell sharply in Q1 2021 as new customs barriers added friction. Financial services (a key UK export) lost EU market access via passporting rights. The OBR estimates Brexit reduced UK trade intensity by ~15% in the long run."
        }
      ],
      examEdge: {
        title: 'Transfer payments ≠ G',
        text: "Repeatedly flagged in mark schemes: <strong>government transfer payments (benefits, pensions, tax credits) are NOT included in G</strong> because no good or service is produced. They shift money between people. They affect AD indirectly through the consumption function — state this clearly and pick up the discriminator mark."
      },
      policy: {
        title: "Why the UK's X−M is persistently negative",
        text: "The UK has run a current account deficit in every year since 1984. Structural factors: de-industrialisation reduced goods export capacity; services (finance, education, tourism) partially offset this; but UK consumers have a high marginal propensity to import. A top answer treats a persistent deficit as a structural issue, not a one-off shock."
      }
    },

    /* ----- CARD 4 — The AD/AS framework (INTERACTIVE) ----- */
    {
      id: 'ad-framework',
      template: 'ad-interactive',
      diagramKey: 'adInteractive',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'The AD/AS framework',
      lede: "Press each tab to trace what happens when AD shifts. Same diagram — three different starting conditions. This is the core tool for every macroeconomic question.",
      steps: [
        {
          key: 'base',
          label: 'Starting point',
          text: 'AD₁ meets SRAS at the long-run equilibrium Y<sub>FE</sub>. The economy is at full employment with stable prices. Most AD/AS questions start here — then introduce a shock.'
        },
        {
          key: 'extension',
          label: 'AD shifts right',
          text: 'An increase in C, I, G, or X−M shifts AD right to AD₂. Equilibrium moves to a higher price level AND higher real output. In the short run: <strong>growth and inflation both rise</strong> (the classic trade-off). If the economy was already at Y<sub>FE</sub>, long-run AS is vertical and the shift only raises prices — no permanent output gain.'
        },
        {
          key: 'shift',
          label: 'AD shifts left',
          text: 'A fall in spending — recession, crisis, confidence shock — shifts AD left to AD₃. Output falls below Y<sub>FE</sub> (a negative output gap), unemployment rises, and the price level falls or disinflation occurs. <strong>Deflation risk</strong> increases. Policy response: expansionary fiscal or monetary policy to shift AD back right.'
        }
      ],
      examEdge: {
        title: 'State both effects of an AD shift',
        text: 'A common error: stating that "AD rises → output rises" and stopping there. <strong>A* answers always state the dual effect</strong>: "AD shifts right → both the price level and real output rise in the short run, creating inflationary pressure alongside growth." Two effects, one sentence, discriminator mark.'
      }
    },

    /* ----- CARD 5 — What shifts AD ----- */
    {
      id: 'ad-shifters',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'What shifts AD?',
      lede: "Every AD shock enters through one of four channels. Identifying which channel a scenario is hitting — and tracing the path — is the analytical skill examiners are testing.",
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'Consumer & business confidence',
          text: '<strong>Confidence shocks are fast and powerful.</strong> A fall in the GfK consumer confidence index or CBI business optimism survey immediately compresses C and I before any policy response. The <strong>2008 financial crisis</strong> and <strong>2020 COVID</strong> both showed how quickly confidence can collapse AD — faster than any policy can offset.'
        },
        {
          num: '2',
          tone: 'amber',
          title: 'Interest rates',
          text: '<strong>The monetary policy transmission.</strong> Bank Rate ↑ → mortgage costs ↑, consumer credit costs ↑, business borrowing costs ↑ → C and I both fall → AD shifts left. The reverse for rate cuts. Key constraint: the <strong>zero lower bound</strong> — rates can\'t go below ~0%, so the BoE uses QE when conventional policy runs out.'
        },
        {
          num: '3',
          tone: 'blue',
          title: 'Fiscal policy (G and taxes)',
          text: '<strong>The direct lever.</strong> Government spending (G) is a component of AD — a £1bn rise in G shifts AD right by £1bn, then the multiplier amplifies it. Tax cuts boost disposable income → C rises → AD rises. The size of the multiplier determines total impact: if k = 2, a £1bn G rise ultimately raises AD by £2bn.'
        },
        {
          num: '4',
          tone: 'purple',
          title: 'Exchange rate & world trade',
          text: '<strong>The external channel.</strong> A depreciation of sterling → exports cheaper abroad, imports dearer at home → (X−M) rises → AD shifts right (but imported inflation also rises). World income growth boosts export demand independently of the exchange rate. <strong>Post-Brexit trade barriers</strong> are a structural reduction in the (X−M) component.'
        }
      ],
      examEdge: {
        title: 'Name the component that shifts',
        text: "When explaining an AD shift, always <strong>name the specific component</strong> that is changing. Don't write 'AD rises because consumer spending increases' — write <em>'C rises → AD shifts right, moving the equilibrium to a higher price level and real output.'</em> Linking component → AD shift → dual effect is worth 2-3 marks."
      },
      connection: {
        title: 'Multiplier link',
        text: "Every shift in any component gets amplified by the multiplier. If the marginal propensity to consume is 0.8 and the marginal propensity to import is 0.1, the multiplier is 1/(1−0.8+0.1) = 3.3. That's the full ripple effect of a single injection into the circular flow — and a key evaluation point."
      }
    },

    /* ----- CARD 6 — A demand shock in action (TRANSMISSION CHAIN) ----- */
    {
      id: 'demand-shock',
      template: 'transmission-chain',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'A demand shock in action',
      lede: "Press each channel to follow a single shock — a Bank Rate cut — through to its effect on AD. Same starting point, same result, but different routes through the four components.",
      action: 'Bank Rate cut ↓',
      outcome: 'AD rises → Output and prices rise',
      channels: [
        {
          key: 'consumption',
          tone: 'green',
          label: 'Consumption (C)',
          chain: [
            'Bank Rate falls → commercial banks cut mortgage rates and personal loan rates',
            'Variable mortgage holders see monthly payments fall → disposable income rises',
            'Consumer credit becomes cheaper → durable goods spending rises',
            'Households feel wealthier as asset prices rise (bond prices, housing) → wealth effect',
            'Consumption rises (C ↑) → AD shifts right'
          ],
          micro: 'Strongest when households are highly indebted and sensitive to interest rate changes. UK households have unusually high mortgage debt, making this channel especially powerful.'
        },
        {
          key: 'investment',
          tone: 'amber',
          label: 'Investment (I)',
          chain: [
            'Bank Rate falls → cost of corporate borrowing falls',
            'More investment projects now have positive NPV (net present value)',
            'Firms expand capacity, buy equipment, commission new buildings',
            'Housing investment also rises as mortgage finance becomes cheaper',
            'Investment rises (I ↑) → AD shifts right'
          ],
          micro: "Strong when business confidence is already positive — 'animal spirits' amplify the signal. Weak when uncertainty is high (e.g. Brexit 2016-19): firms don't borrow even at low rates if future demand is unclear."
        },
        {
          key: 'exchange-rate',
          tone: 'purple',
          label: 'Net exports (X−M)',
          chain: [
            'Lower Bank Rate → less attractive to international investors → sterling falls',
            'Sterling depreciation → UK exports become cheaper for foreign buyers (X ↑)',
            'UK imports become more expensive → import volumes fall (M ↓)',
            'Net exports rise (X−M ↑) → AD shifts right',
            'Side effect: import prices rise → imported inflation increases'
          ],
          micro: 'Dual effect: raises AD via trade AND raises inflation via import costs. Strong evaluative point — a rate cut can both stimulate output and risk pushing inflation above the 2% target.'
        },
        {
          key: 'confidence',
          tone: 'rose',
          label: 'Expectations',
          chain: [
            'BoE rate cut signals intention to support growth and hit inflation target',
            'Firms expect higher future demand → increase planned investment (I ↑)',
            'Consumers expect job security to improve → confidence rises → C ↑',
            'Market expects further cuts → long-term interest rates also fall',
            'C and I both rise before the transmission channels fully work through'
          ],
          micro: 'The expectations channel works fastest — financial markets reprice before any real-economy effects arrive. If the BoE is credible, forward guidance alone can shift AD without actually moving rates.'
        }
      ],
      examEdge: {
        title: 'Walk one chain fully — with a side effect',
        text: "A* answers pick one channel and walk it in full, then <strong>name one side effect or constraint</strong>. For the exchange rate channel: <em>'Rate cut → sterling falls → exports rise → AD shifts right — but this also raises imported inflation, creating a tension between the growth and inflation objectives.'</em> That second sentence is worth the A*."
      }
    },

    /* ----- CARD 7 — Evaluation ----- */
    {
      id: 'evaluation',
      template: 'deflation',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'Evaluating AD analysis',
      lede: "An AD diagram is the start of the answer, not the end. Four evaluation moves that apply to almost every AD/AS question — and one of them earns marks every time.",
      mechanismsTitle: 'Four things to evaluate',
      mechanisms: [
        {
          icon: '📊',
          title: 'The size of the multiplier',
          text: "Any injection into AD is amplified — but by how much? The multiplier <strong>k = 1 / (MPS + MPT + MPM)</strong>. For the UK, with high propensity to import and significant tax burden, k is typically <strong>1.2–1.5</strong> — lower than the textbook Keynesian model suggests. A £1bn fiscal stimulus doesn't buy £5bn of output. Cite this to qualify over-optimistic claims."
        },
        {
          icon: '⚡',
          title: 'Time lags',
          text: '<strong>Monetary policy</strong> takes 18-24 months to peak. <strong>Fiscal policy</strong> takes 6-18 months for spending to reach the economy. By the time any policy works, conditions may have changed — leading to <em>pro-cyclical policy by accident</em>. The 2022 mini-budget cut taxes into a demand-side recovery already driving inflation: wrong policy, wrong time.'
        },
        {
          icon: '⚖',
          title: 'Supply-side constraints',
          text: 'If the economy is near Y<sub>FE</sub>, a rightward AD shift mainly raises <strong>prices, not output</strong>. The LRAS is vertical at full capacity — more demand hits a capacity ceiling. In 2021-22, post-COVID demand surged against supply shortages: the result was inflation, not growth. Always ask whether SRAS can expand to meet the extra demand.'
        },
        {
          icon: '🔗',
          title: 'Crowding out and fiscal space',
          text: '<strong>Higher G may reduce I</strong> if government borrowing pushes up interest rates (financial crowding out) or absorbs scarce skilled labour (resource crowding out). The degree of crowding out is debated — Keynesians say it\'s small in a recession (spare capacity exists); classicals say it\'s near-total. <strong>Fiscal space also matters:</strong> a government with high debt-to-GDP has less room to expand G without alarming bond markets.'
        }
      ],
      examples: {
        title: 'UK episodes to know',
        items: [
          { period: '2008-09 recession',  text: 'AD collapsed as C, I and X all fell simultaneously. Darling\'s £20bn fiscal stimulus helped, but the multiplier was small (high import content) and monetary policy hit the ZLB.' },
          { period: '2020 COVID',          text: 'G rose massively (furlough, bounce-back loans) to prevent a collapse in C. Without this, models predicted GDP could have fallen 30%+ — instead it fell ~10% peak-to-trough.' },
          { period: '2021-22 recovery',    text: 'Post-COVID demand surge (C recovery + fiscal support) collided with supply chain disruption. The result: inflation, not growth — illustrating SRAS constraints on AD expansion.' },
          { period: '2022 mini-budget',    text: 'Unfunded £45bn tax cut aimed to boost C and I but was delivered when AD was already excess — driving sterling down 10%, gilt yields spiking, BoE forced to intervene. Wrong channel, wrong timing.' }
        ]
      },
      examEdge: {
        title: 'Evaluate with a real episode',
        text: "Every AD evaluation answer should cite at least one of these episodes. <strong>The 2020 COVID response</strong> is the cleanest recent example of large-scale G expansion working as intended — but even then, the multiplier was limited by the import propensity of the stimulus. <em>Naming the episode + naming the constraint = two marks in one sentence.</em>"
      },
      bridge: {
        title: 'Where to next',
        text: "You've locked in the four components, the AD/AS framework, the four shifters, and the key evaluation moves. Next: the <em>Master</em> session applies these to unseen data questions and exam extracts — the move from knowing to doing."
      }
    }
  ]
};
