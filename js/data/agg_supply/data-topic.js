/* ============================================================
   ECONOS — content data for agg_supply
   7 cards · revision-tight · exam-edge gems flagged
   Edexcel Theme 2.3
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'agg_supply',
  topicNum: '3.1-3.3',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Aggregate Supply',
  estTime: '9-11 minutes',
  goal: 'Master SRAS, LRAS and the Classical vs Keynesian debate',

  intro: {
    heroKey: 'heroAggSupply',
    summary: "SRAS and LRAS do very different things. The Classical vs Keynesian debate about LRAS shape determines everything — what equilibrium means, whether fiscal policy works, and how inflation and output interact.",
    doInThis: 'Recap SRAS shifters, Classical and Keynesian LRAS, equilibrium, supply-side shifts, and output gap closure. Finish with a 25-mark essay scaffold.',
    outcomes: [
      'Distinguish SRAS from LRAS shifters',
      'Explain Classical and Keynesian LRAS shapes',
      'Apply AS shifts to macro equilibrium correctly'
    ],
    tip: 'These cards are revision, not first-time learning. They cue what you already know and flag the gems that lift answers from B to A*.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards',    state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 — Framing: SRAS vs LRAS ----- */
    {
      id: 'sras-lras-framing',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'SRAS vs LRAS: two very different curves',
      lede: 'Aggregate Supply has two versions with completely different shapes, shifters, and policy implications. Confusing them is the most-marked-down error in macro essays.',
      branches: [
        { tone: 'green',  label: 'SRAS (Short Run)',   sub: '<strong>Upward sloping.</strong> In the short run, wages and input costs are sticky — so firms can respond to higher prices by producing more. Price level rises → output rises. Shifts with costs and productivity.' },
        { tone: 'blue',   label: 'LRAS Classical',     sub: '<strong>Vertical</strong> at full employment output. In the long run, wages and prices are fully flexible, so the economy always returns to its natural rate of output. Fiscal stimulus has no lasting effect.' },
        { tone: 'amber',  label: 'LRAS Keynesian',     sub: '<strong>L-shaped.</strong> Horizontal at low output (spare capacity) then steep as full employment approaches. At low output, extra AD raises output without inflation. The case for fiscal stimulus.' }
      ],
      examEdge: {
        title: 'State the assumption first',
        text: 'Before analysing macro equilibrium, <strong>state which AS model you\'re using</strong>. If Classical: \'In the long run, LRAS is vertical — fiscal stimulus only raises the price level.\' If Keynesian: \'With spare capacity, the horizontal portion of LRAS means AD increases raise output without inflation.\' Naming the model is the first analytical mark.'
      },
      keyTakeaway: {
        title: 'Why both matter for exams',
        text: 'Edexcel expects you to use both models. Classical for long-run analysis and supply-side policy. Keynesian for short-run recessions and the case for fiscal stimulus. Switching between them fluently — and explicitly — is the A* move.'
      }
    },

    /* ----- CARD 2 — SRAS: slope and shifters ----- */
    {
      id: 'sras',
      template: 'cause',
      diagramKey: 'adAsCostPush',
      tone: 'green',
      bannerLabel: 'Short Run Aggregate Supply',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'SRAS: why it slopes upward and what shifts it',
      lede: 'SRAS slopes upward because input costs (especially wages) are sticky in the short run. When the price level rises, firms receive higher revenues but pay the same costs — so they produce more.',
      diagramCaption: 'SRAS: upward sloping in P-Y space. Shifts left on cost increases, right on productivity gains.',
      causes: {
        title: 'What shifts SRAS',
        items: [
          'Wage costs: the biggest driver — wage rises shift SRAS left (cost-push inflation)',
          'Raw material and energy costs: oil price spike → SRAS shifts left',
          'Import prices: exchange rate depreciation → import costs rise → SRAS left',
          'Productivity: productivity improvement → SRAS right (more output per unit of input)',
          'Indirect taxes: VAT rise → SRAS left; subsidy → SRAS right',
          'Exchange rate: affects import costs of inputs and finished goods'
        ]
      },
      hallmarks: {
        title: 'Real-world SRAS shocks',
        items: [
          '1973 OPEC oil shock: oil price \xd74 → SRAS shifted sharply left → stagflation',
          '2021-22 supply chain disruptions: input costs soared → SRAS left',
          '2022 energy price surge: gas prices rose 10\xd7 → SRAS left across Europe',
          'Post-pandemic wage rises (2022-23): tight labour market → wage growth → SRAS left'
        ]
      },
      ukExamples: {
        title: 'UK exam application',
        text: '<strong>2022-23 UK inflation:</strong> primarily a cost-push story — energy prices, supply chain bottlenecks, and post-COVID wage pressures all shifted SRAS left simultaneously. CPI hit 11.1%. The BoE faced a policy dilemma: raising rates to reduce AD risks recession when the problem is supply-side.'
      },
      examEdge: {
        title: 'SRAS shift = cost-push dilemma',
        text: 'When SRAS shifts left, output falls AND prices rise — <strong>stagflation</strong>. This is the policy dilemma: tighten to fight inflation (worsen recession) or ease to protect output (worsen inflation). A* answers identify this trade-off explicitly, naming it as the \'monetary policy dilemma in a supply shock\'.'
      },
      policy: {
        title: 'Policy tools for SRAS shocks',
        text: 'Demand-side policies cannot fix supply-side problems cleanly. The BoE can raise rates to bring down AD (reduces inflation but worsens output gap). Supply-side policies — reducing business costs, improving productivity — shift SRAS right without the dilemma. This is why supply-side reform matters.'
      }
    },

    /* ----- CARD 3 — LRAS Classical: the vertical curve ----- */
    {
      id: 'lras-classical',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'LRAS Classical: the self-correcting economy',
      lede: 'The Classical school says: in the long run, wages and prices are fully flexible. The economy always returns to full employment output. Government intervention is unnecessary — and counterproductive.',
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'Vertical LRAS at Y*',
          text: '<strong>LRAS is vertical at potential output Y*</strong> (full employment). This reflects the PPF — the economy\'s productive capacity. In the long run, only supply-side improvements shift LRAS. AD is neutral for output.'
        },
        {
          num: '2',
          tone: 'blue',
          title: 'The self-correcting mechanism',
          text: 'If AD falls → recession → wages fall (flexible) → SRAS shifts right → economy returns to Y* at a lower price level. No need for fiscal stimulus. The market corrects automatically. The key assumption: <strong>wage and price flexibility</strong>.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Fiscal stimulus is neutral',
          text: 'If the government spends more (↑G → AD right) but LRAS is vertical, output stays at Y* — all the stimulus does is raise the price level. This is the <strong>Classical critique of Keynesian fiscal policy</strong>: crowding out + inflation with no lasting output gain.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'Crowding out',
          text: 'Government borrowing to finance G competes with private sector for loanable funds → interest rates rise → private investment falls → private AD falls by the same amount as G rises. Net effect: zero. The full crowding out argument.'
        }
      ],
      examEdge: {
        title: 'Full vs partial crowding out',
        text: 'Classical economists argue for <strong>complete crowding out</strong>. Keynesians argue for partial crowding out — especially in recession when private saving is high and interest rate sensitivity of investment is low. A* answers present both sides with the conditioning assumption (is there spare capacity?).'
      },
      connection: {
        title: 'The supply-side implication',
        text: 'If LRAS is vertical, the ONLY way to raise long-run output is to shift LRAS right — via education, technology, capital investment, labour market reforms. This is the Classical/neoclassical case for supply-side economics. The policy implication is direct.'
      }
    },

    /* ----- CARD 4 — LRAS Keynesian: the L-shaped curve ----- */
    {
      id: 'lras-keynesian',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'LRAS Keynesian: when fiscal policy works',
      lede: "The Keynesian LRAS has three zones. Where the economy sits determines whether fiscal stimulus raises output or just prices. This is the key to every recession policy debate.",
      steps: [
        {
          key: 'base',
          label: 'Horizontal zone: recession with spare capacity',
          text: 'In the <strong>horizontal portion</strong> of LRAS, there is significant spare capacity — idle workers, unused factories. AD can rise without pushing up the price level because there are unemployed resources to absorb the extra demand. This is the Keynesian case for fiscal stimulus: output rises, price level unchanged.'
        },
        {
          key: 'extension',
          label: 'Intermediate zone: output rises, prices begin to rise',
          text: 'As the economy approaches potential, <strong>bottlenecks emerge</strong> — some sectors reach capacity before others. AD increases now raise both output and the price level simultaneously. Fiscal stimulus still works, but with inflationary side-effects. The multiplier effect is partially offset by rising prices.'
        },
        {
          key: 'shift',
          label: 'Vertical zone: at full capacity, all AD becomes inflation',
          text: 'Once at full employment output, the LRAS becomes vertical — the same as the Classical view. <strong>Any further AD increase is purely inflationary</strong>. Adding fiscal stimulus here raises prices, not output. The policy case for fiscal stimulus disappears entirely at this point.'
        }
      ],
      examEdge: {
        title: 'Always identify which zone',
        text: 'In any Keynesian AS question, <strong>state where the economy sits on the LRAS curve</strong>. \'With a large negative output gap, the economy is on the horizontal portion — AD stimulus raises output without inflation.\' This single analytical step locks in the mark for explaining the mechanism.'
      }
    },

    /* ----- CARD 5 — Macro equilibrium ----- */
    {
      id: 'macro-equilibrium',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Macro equilibrium: where AD meets AS',
      lede: 'Equilibrium in the macro model is where AD intersects AS. But which AS? And what happens when they shift? This card runs through the core scenarios.',
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'AD shifts right (demand-side boom)',
          text: 'AD right → output rises and price level rises (with SRAS). With Keynesian LRAS horizontal, output rises without price rise if spare capacity exists. <strong>Effect depends on which portion of LRAS the economy is on.</strong>'
        },
        {
          num: '2',
          tone: 'rose',
          title: 'SRAS shifts left (cost-push shock)',
          text: 'SRAS left → output falls AND price level rises → <strong>stagflation</strong>. The worst macro scenario: unemployment rises and inflation rises simultaneously. Policy dilemma: tighten (fight inflation, worsen recession) vs ease (protect output, worsen inflation).'
        },
        {
          num: '3',
          tone: 'blue',
          title: 'LRAS shifts right (long-run supply-side improvement)',
          text: 'LRAS right → potential output rises → economy can sustain higher actual output without inflation. This is <strong>non-inflationary growth</strong>. Caused by: better technology, more capital, higher labour productivity, increased participation rates.'
        },
        {
          num: '4',
          tone: 'amber',
          title: 'AD and SRAS both shift left (recession + cost shock)',
          text: 'Both curves shift left — the worst of both worlds. Output falls sharply. Price level change depends on relative magnitudes of the shifts. The 2008-09 crisis had elements of this: demand collapse AND banking system stress raising credit costs.'
        }
      ],
      examEdge: {
        title: 'State the direction of BOTH price and output',
        text: 'Macro equilibrium questions must identify what happens to <strong>both the price level and real output</strong>. Students who describe only one dimension lose marks. The analytical structure: \'AD shifts right → output rises from Y₁ to Y₂ AND price level rises from P₁ to P₂ along the upward-sloping SRAS.\''
      },
      connection: {
        title: 'Linking to macro objectives',
        text: 'Macro equilibrium directly determines the five macro objectives: growth (real output), inflation (price level), unemployment (output gap), BoP (affected by AD and price competitiveness), and living standards. A* answers link the shift to the objective affected.'
      }
    },

    /* ----- CARD 6 — SRAS vs LRAS shifters compared ----- */
    {
      id: 'shifter-comparison',
      template: 'paired',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'SRAS vs LRAS shifters: the key distinction',
      lede: 'The most common exam error: applying an LRAS shifter to SRAS, or vice versa. This card locks in the distinction.',
      pairs: [
        {
          tone: 'green',
          label: 'SRAS shifters (short run costs)',
          drivers: [
            'Wage and salary costs (biggest driver)',
            'Commodity and energy prices',
            'Import prices (exchange rate)',
            'Indirect tax rates (VAT, fuel duty)',
            'Productivity short-run improvements',
            'Supply chain disruption costs'
          ],
          example: '<strong>2022 energy shock:</strong> gas prices surged → firms\' energy costs rose → SRAS shifted left → stagflation. Purely a SRAS shift — did nothing to LRAS (long-run capacity was unchanged).'
        },
        {
          tone: 'blue',
          label: 'LRAS shifters (long run capacity)',
          drivers: [
            'Technology and innovation (TFP growth)',
            'Capital stock: investment in infrastructure and machinery',
            'Labour force size: net migration, participation rates',
            'Labour quality: education, training, health',
            'Institutional quality: rule of law, property rights',
            'Natural resource discovery or depletion'
          ],
          example: '<strong>Industrial revolution:</strong> steam power shifted LRAS dramatically right over decades. <strong>Modern parallel:</strong> AI-driven productivity improvements may shift LRAS right — but the timescale is long run, not policy-cycle.'
        }
      ],
      examEdge: {
        title: 'Don\'t confuse supply-side policies with SRAS shifts',
        text: 'Supply-side policies (education, R&D, infrastructure) operate on <strong>LRAS</strong>, not SRAS. They take years or decades to materialise. A tax cut might affect SRAS (via business costs) AND LRAS (via incentives to invest). A* answers distinguish the time horizon of each effect.'
      },
      policy: {
        title: 'The policy asymmetry',
        text: 'Monetary policy primarily operates through AD. But if the problem is a SRAS shock (cost-push), monetary tightening combats the inflation at the cost of worsening the output fall. Only supply-side policy that shifts SRAS right (e.g. energy price subsidies, productivity improvements) can address both problems simultaneously.'
      }
    },

    /* ----- CARD 7 — Output gaps revisited ----- */
    {
      id: 'output-gaps',
      template: 'deflation',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Output gaps and the adjustment process',
      lede: "Output gaps measure the distance between actual and potential output. Understanding how they open, persist, and close is the backbone of every macro policy discussion.",
      mechanismsTitle: 'The two output gaps and their dynamics',
      mechanisms: [
        {
          icon: '📉',
          title: 'Negative output gap (recession)',
          text: 'Actual output < potential. Spare capacity: idle workers, underutilised capital. <strong>Deflationary pressure</strong> — price level tends to fall or stay low. Self-correcting mechanism: wages fall → SRAS shifts right → gap closes (Classical). OR: fiscal/monetary stimulus needed if wages are sticky (Keynesian).'
        },
        {
          icon: '📈',
          title: 'Positive output gap (boom)',
          text: 'Actual output > potential. Economy above PPF — inflationary pressure builds. Wages rise, bottlenecks appear, prices rise. Self-correcting: wages rise → SRAS shifts left → output falls back to Y*. <strong>No free lunch:</strong> a boom above potential is temporary and ends in inflation.'
        },
        {
          icon: '⏰',
          title: 'Persistence: why gaps don\'t self-correct quickly',
          text: 'Classical self-correction is slow because: (1) wages are sticky downward, (2) expectations of further price falls delay adjustment, (3) hysteresis — long unemployment damages future labour supply. Keynesian: gaps can be <em>permanent</em> without intervention, requiring active fiscal/monetary policy.'
        },
        {
          icon: '📊',
          title: 'Measuring the output gap',
          text: 'The OBR estimates the UK output gap. Problem: potential output is unobservable — it\'s estimated, not measured. The OBR\'s estimate determines how much fiscal stimulus is \'safe\' without triggering inflation. Errors in estimating potential output have had major policy consequences.'
        }
      ],
      examples: {
        title: 'Output gap episodes',
        items: [
          { period: '2009 UK', text: 'OBR estimated a negative output gap of ~5% of GDP. This justified BoE QE and Bank Rate cuts to 0.5%. The gap took until ~2014 to close — slower than the Classical model would predict.' },
          { period: '2021-22', text: 'Post-COVID bounce created a positive output gap — excess demand met constrained supply. Inflation surged. BoE began tightening in late 2021 as the gap flipped positive.' },
          { period: '2024 UK', text: 'OBR estimated a roughly closed output gap — economy near potential. Inflation falling but above target. Monetary policy debate: how quickly to cut rates without re-opening the positive gap.' }
        ]
      },
      examEdge: {
        title: 'Estimate size, not just direction',
        text: 'A* macro answers <strong>estimate the size of the output gap</strong>, not just its direction. \'A negative output gap of approximately 2-3% of GDP suggests significant spare capacity — sufficient for AD stimulus without triggering inflation.\' Quantification is the mark-up.'
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }

  ]
};
