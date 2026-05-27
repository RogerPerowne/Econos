/* ============================================================
   ECONOS – content data for inflation (Causes of Inflation & Deflation)
   8 cards · rebuilt from mockups · Edexcel Theme 2.2.2
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'causes-of-inflation-and-deflation',
  topicNum: '2.2.2',
  theme: 'Theme 2 · The National and Global Economy',
  title: 'Causes of Inflation & Deflation',
  estTime: '12-15 minutes',
  goal: 'Diagnose inflation by cause – demand-pull, cost-push or monetary – and match the right policy to each.',

  intro: {
    heroKey: 'heroAggSupply',
    summary: "Inflation does not have a single cause. Demand-pull comes from too much spending. Cost-push comes from squeezed supply. Monetary and expectations-driven inflation comes from loose money and lost credibility. The same headline figure can require opposite policy responses depending on its origin – diagnosis is everything.",
    doInThis: 'Eight cards: the three causes, demand-pull and cost-push in detail, how to spot the difference, money and expectations, winners and losers, the dangers of deflation, and the policy toolkit.',
    outcomes: [
      'Distinguish demand-pull, cost-push and monetary inflation by their AD/AS signatures',
      'Use output direction as the diagnostic tell',
      'Explain why QE did not always cause inflation – velocity, slack and expectations',
      'Evaluate the winners and losers of inflation, and the dangers of deflation',
      'Match the policy response to the underlying cause'
    ],
    tip: 'Diagnose first, then treat. The same CPI figure can hide very different macroeconomic stories.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards',                 state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context',   state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',       state: 'available', href: TopicLoader.routes.land('intro') }
    ]
  },

  cards: [

    /* ====================================================================
       CARD 1 – What causes inflation?
       Framing: three causes, the diagnose-then-treat principle.
       ==================================================================== */
    {
      id: 'what-causes-inflation',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'What causes inflation?',
      lede: 'Inflation does not have a single cause. It can arise from demand pressures, supply shocks or from money and expectations spiralling together. Diagnosing the source is essential because each cause calls for a different policy.',
      ledeStyle: 'plain',

      tip: {
        icon: '✅',
        tone: 'green',
        text: '<strong>The same inflation figure can require opposite policy responses depending on its origin.</strong>'
      },

      causesFirst: true,
      causesLabel: null,
      causes: [
        {
          tone: 'blue',
          head: 'Demand-pull inflation',
          icon: '🛒',
          body: 'Too much spending chasing too little output.',
          example: { icon: '📈', label: 'Cue', text: 'AD rising faster than AS.' }
        },
        {
          tone: 'amber',
          head: 'Cost-push inflation',
          icon: '🏭',
          body: 'Firms face higher costs and pass them on.',
          example: { icon: '↩️', label: 'Cue', text: 'AS shifts left.' }
        },
        {
          tone: 'purple',
          head: 'Money & expectations',
          icon: '💭',
          body: 'Money growth and inflation psychology keep price rises going.',
          example: { icon: '∞', label: 'Cue', text: 'Inflation becomes embedded.' }
        }
      ],

      flowTitle: 'The big idea',
      flowEmoji: '💡',
      flow: [
        { tone: 'blue',   icon: '📊', title: 'Headline inflation',  sub: 'A single CPI figure.' },
        { tone: 'green',  icon: '🔎', title: 'Ask what caused it',   sub: 'Demand, costs or money?' },
        { tone: 'purple', icon: '🎯', title: 'Choose the right policy', sub: 'Diagnosis drives the cure.' }
      ],

      causes2Label: 'Treatment depends on the diagnosis',
      causes2Emoji: '🩺',
      causes2: [
        { tone: 'blue',   icon: '❄️', head: 'Demand problem',     body: 'Cool demand with tighter monetary or fiscal policy.' },
        { tone: 'amber',  icon: '🏭', head: 'Supply shock',       body: 'Ease costs or boost supply – supply-side measures.' },
        { tone: 'purple', icon: '🛡️', head: 'Expectations problem', body: 'Restore credibility through forward guidance and anchoring.' }
      ],

      conclusion: {
        title: '"Rising prices" is not a cause of inflation',
        text: 'Rising prices are the <strong>symptom</strong>. The <strong>cause</strong> is the underlying driver – demand, costs, money or expectations – that puts upward pressure on prices.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'High-level essays diagnose the source first and only then judge the policy. The same CPI figure may hide very different macroeconomic stories.'
      }
    },

    /* ====================================================================
       CARD 2 – Demand-pull inflation
       ==================================================================== */
    {
      id: 'demand-pull-inflation',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Demand-pull inflation',
      lede: 'Demand-pull inflation happens when aggregate demand rises faster than aggregate supply can respond. Firms raise prices while output also increases, because the economy is producing more to meet stronger demand.',
      ledeStyle: 'plain',

      tip: {
        icon: '✅',
        tone: 'green',
        text: '<strong>Output rises alongside prices – that is the key clue.</strong>'
      },

      interactiveDiagram: {
        svgKey: 'adDemandPullInteractive',
        label: 'The AD/AS diagram',
        emoji: '📊',
        layers: ['dpl-1', 'dpl-2'],
        views: [
          {
            label: 'Base equilibrium',
            tone: 'blue',
            head: 'Starting point: P₁ and Y₁',
            body: 'The economy is at equilibrium E₁ where AD₁ meets SRAS. The price level is P₁ and real output is Y₁. AD is unchanged in this view.'
          },
          {
            label: 'AD shifts right',
            tone: 'green',
            head: 'Demand shock – AD₁ → AD₂',
            body: 'A demand shock (consumer boom, cheap credit, government spending) shifts AD right to AD₂. Firms face excess demand and raise prices.',
            analysis: 'The rightward shift is the signature of demand-pull. SRAS is unchanged – the pressure comes entirely from the demand side.'
          },
          {
            label: 'New equilibrium',
            tone: 'green',
            head: 'Result: P ↑ and Y ↑',
            body: 'The new equilibrium E₂ is at higher price level P₂ and higher output Y₂. Inflation has occurred and the economy is producing more.',
            analysis: 'Both P and Y rise – that is the diagnostic tell for demand-pull. If output were falling instead, look to cost-push as the cause.'
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'Common causes',
      causesEmoji: '🔍',
      causesStyle: 'numbered-rows',
      causes: [
        { tone: 'blue',   icon: '🛍️', head: 'Consumer boom',       body: 'Households spend more on goods and services.' },
        { tone: 'amber',  icon: '🏛️', head: 'Government spending', body: 'Higher public spending increases demand in the economy.' },
        { tone: 'green',  icon: '£',  head: 'Cheap credit',         body: 'Lower interest rates or easy lending boost borrowing and spending.' },
        { tone: 'rose',   icon: '📉', head: 'Weak exchange rate',   body: 'Imports become dearer, raising domestic demand for local goods.' },
        { tone: 'purple', icon: '📈', head: 'Positive expectations', body: 'Firms and consumers expect higher prices and bring demand forward.' }
      ],

      pairLabel: 'Policy response',
      pairEmoji: '🛡️',
      left: {
        tone: 'blue',
        icon: '🏦',
        iconStyle: 'circle',
        label: 'Tighter monetary policy',
        text: 'Raise interest rates or reduce money supply to cool demand. <strong>Effect:</strong> AD shifts left – lower inflation, lower output.'
      },
      right: {
        tone: 'amber',
        icon: '🏛️',
        iconStyle: 'circle',
        label: 'Tighter fiscal policy',
        text: 'Reduce government spending or increase taxes to cool demand. <strong>Effect:</strong> AD shifts left – lower inflation, lower output.'
      },

      conclusion: {
        title: 'If output and prices are both rising, demand-pull is the leading candidate.',
        text: 'Use output direction as your first diagnostic. Rising output alongside rising prices points to demand-pull.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'The best answers explicitly link the diagram to the outcome: AD shifts right → higher price level (inflation) and higher real output.'
      }
    },

    /* ====================================================================
       CARD 3 – Cost-push inflation
       ==================================================================== */
    {
      id: 'cost-push-inflation',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Cost-push inflation',
      lede: 'Cost-push inflation happens when firms face higher production costs – such as rising input prices, wages or taxes – and pass them on to customers. Prices rise while output falls, because it becomes more expensive to produce.',
      ledeStyle: 'plain',

      tip: {
        icon: '⚠️',
        tone: 'amber',
        text: '<strong>Rising prices with falling output = stagflation risk.</strong>'
      },

      interactiveDiagram: {
        svgKey: 'adCostPushInteractive',
        label: 'The AD/AS diagram',
        emoji: '📊',
        layers: ['cpl-1', 'cpl-2'],
        views: [
          {
            label: 'Base equilibrium',
            tone: 'blue',
            head: 'Starting point: P₁ and Y₁',
            body: 'The economy is at E₁ where AD meets SRAS₁. The price level is P₁ and real output is Y₁. AD remains unchanged throughout this sequence.'
          },
          {
            label: 'SRAS shifts left',
            tone: 'amber',
            head: 'Supply shock – SRAS₁ → SRAS₂',
            body: 'Higher input costs (energy, wages, import prices) mean it now costs more to produce at every output level. SRAS shifts left to SRAS₂.',
            analysis: 'The leftward SRAS shift is the signature of cost-push. AD is unchanged – the pressure comes from the supply side alone.'
          },
          {
            label: 'Stagflation result',
            tone: 'amber',
            head: 'Result: P ↑ and Y ↓',
            body: 'The new equilibrium E₂ has higher price level P₂ but lower output Y₂. Inflation and falling output occur simultaneously – stagflation.',
            analysis: 'Both outcomes worsen at once. Raising rates fights inflation but deepens the output fall. Loosening policy helps output but risks embedding inflation.'
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'What causes it?',
      causesEmoji: '🔍',
      causesStyle: 'numbered',
      causes: [
        { tone: 'amber',  icon: '🔥', head: 'Higher energy prices',         body: 'More expensive fuel and electricity raise production costs.' },
        { tone: 'blue',   icon: '👥', head: 'Wage rises',                   body: 'Higher pay increases labour costs, especially if productivity does not keep up.' },
        { tone: 'green',  icon: '£',  head: 'Import costs from a weaker FX', body: 'Imports become more expensive, lifting input prices.' },
        { tone: 'purple', icon: '📄', head: 'Indirect taxes',               body: 'VAT or excise duty rises increase firms\' costs, which they pass on.' },
        { tone: 'amber',  icon: '⛈️', head: 'Supply shocks',                body: 'Events like bad weather, pandemics or war disrupt supply and lift costs.' }
      ],

      verdict: {
        title: 'The policy dilemma',
        emoji: '⚖️',
        layout: 'vs',
        columns: [
          {
            tone: 'blue',
            icon: '🛡️',
            label: 'Tighten policy to reduce inflation',
            items: [
              { text: 'Higher interest rates curb demand.' },
              { text: 'Helps bring inflation down.' },
              { ok: false, text: 'But output falls further and unemployment may rise.' }
            ]
          },
          {
            tone: 'rose',
            icon: '📈',
            label: 'Loosen policy to support the economy',
            items: [
              { text: 'Lower rates or fiscal support boost demand.' },
              { text: 'Helps output and jobs in the short run.' },
              { ok: false, text: 'But risks keeping inflation high and becoming harder to bring down later.' }
            ]
          }
        ]
      },

      summaryRow: [
        {
          tone: 'blue',
          icon: '🌍',
          title: 'UK 2021–23',
          text: 'Surging energy prices and higher import costs pushed inflation up while growth slowed.'
        },
        {
          tone: 'amber',
          icon: '🛢️',
          title: '1970s oil shock',
          text: 'Higher oil prices raised costs across the economy, leading to high inflation and high unemployment.'
        }
      ],

      examEdge: {
        title: 'Exam edge',
        text: 'Cost-push inflation is harder to cure because inflation and recession appear together – policymakers face an unpleasant trade-off.'
      }
    },

    /* ====================================================================
       CARD 4 – Spotting the difference
       ==================================================================== */
    {
      id: 'spotting-the-difference',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Spotting the difference',
      lede: 'The key diagnostic is output direction. Demand-pull inflation raises output because demand outpaces supply. Cost-push inflation lowers output because higher costs squeeze supply.',
      ledeStyle: 'plain',

      tip: {
        icon: '✅',
        tone: 'green',
        text: '<strong>Output is the tell.</strong>'
      },

      comparisonTable: {
        title: 'Comparison table',
        emoji: '📊',
        columns: ['🛒 Demand-pull inflation', '🏭 Cost-push inflation'],
        columnTones: ['blue', 'amber'],
        rows: [
          { label: '🎯 Main cause',          values: ['Demand rises faster than the economy can supply.', 'Input costs rise, pushing firms\' costs and prices up.'], highlights: [true, true] },
          { label: '↔️ AD/AS movement',      values: ['AD shifts right. AS unchanged.',                    'AS shifts left. AD unchanged.'] },
          { label: '📈 Output effect',       values: ['Output increases (above potential).',               'Output decreases (below potential).'] },
          { label: '£ Inflation clue',       values: ['Prices rise alongside stronger output.',            'Prices rise while output falls.'] },
          { label: '🛡️ Typical policy',      values: ['Tighten demand – raise rates or cut spending.',     'Relieve supply pressures – reduce costs or boost supply.'] }
        ]
      },

      causes2Label: 'Classify the case',
      causes2Emoji: '✏️',
      causes2: [
        { tone: 'amber', icon: '⚡', head: '2021 energy shock',     body: 'Global gas prices surged, lifting energy bills and production costs. Output fell as firms cut back. <strong style="display:block;margin-top:8px;color:#D97706;letter-spacing:0.08em;">→ COST-PUSH</strong>' },
        { tone: 'blue',  icon: '📈', head: '2020 lockdown release boom', body: 'Households spent savings as lockdowns ended. Demand jumped and output rose above potential. <strong style="display:block;margin-top:8px;color:#2563EB;letter-spacing:0.08em;">→ DEMAND-PULL</strong>' },
        { tone: 'amber', icon: '🏭', head: '1970s stagflation',     body: 'Oil shocks pushed prices up while output stalled. Unemployment rose at the same time. <strong style="display:block;margin-top:8px;color:#D97706;letter-spacing:0.08em;">→ COST-PUSH</strong>' }
      ],

      conclusion: {
        title: 'Fast test',
        text: 'Prices up + output up = <strong>demand-pull</strong>. Prices up + output down = <strong>cost-push</strong>.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'The highest-mark answers diagnose <em>before</em> recommending policy. Identify the cause using output direction first.'
      }
    },

    /* ====================================================================
       CARD 5 – Money, expectations and the 2021 puzzle
       ==================================================================== */
    {
      id: 'money-expectations',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Money, expectations and the 2021 puzzle',
      lede: 'Money and expectations can amplify inflation. But money supply growth alone does not mechanically create runaway inflation. Understanding the 2021 puzzle means looking beyond money to velocity, spare capacity and expectations.',
      ledeStyle: 'plain',

      tip: {
        icon: '✅',
        tone: 'green',
        text: '<strong>Quantity theory is a starting point – not the whole story.</strong>'
      },

      letterFormula: {
        label: 'The framework',
        emoji: '🧠',
        left:  [
          { letter: 'M', name: 'Money supply',         tone: 'green' },
          { letter: 'V', name: 'Velocity of circulation', tone: 'blue' }
        ],
        right: [
          { letter: 'P', name: 'Average price level',  tone: 'amber' },
          { letter: 'T', name: 'Transactions or real output', tone: 'purple' }
        ],
        caption: 'For a given level of real output (T), higher money (M) raises prices (P) only if velocity (V) is stable. If V falls or spare capacity exists, extra money may not feed through to higher inflation.'
      },

      flowTitle: 'Why QE did not trigger runaway inflation',
      flowEmoji: '📊',
      flow: [
        { tone: 'blue',   icon: '📉', title: 'Velocity fell',           sub: 'Pandemic uncertainty and precautionary saving depressed spending velocity.' },
        { tone: 'amber',  icon: '👥', title: 'Output gap absorbed demand', sub: 'Large spare capacity meant demand could rise without pushing prices up.' },
        { tone: 'purple', icon: '⚓', title: 'Expectations stayed anchored', sub: 'Credible central banks kept inflation expectations low and well anchored.' }
      ],

      causesLabel: 'Why 2021–23 was different',
      causesEmoji: '💡',
      causes: [
        { tone: 'green',  icon: '⚙️', head: 'Supply shock',         body: 'Energy, food and global supply disruptions pushed costs up.' },
        { tone: 'amber',  icon: '🛒', head: 'Post-COVID demand surge', body: 'Households spent savings and consumption rebounded strongly.' },
        { tone: 'purple', icon: '💰', head: 'Pre-loaded money supply', body: 'Large money creation met supply constraints, not spare capacity.' }
      ],

      conclusion: {
        title: 'Expectations: the self-fulfilling channel',
        text: 'If people <strong>expect</strong> higher inflation, they act – firms raise prices, workers ask for higher wages, households spend sooner. Those actions can make the higher inflation happen. Central bank credibility anchors expectations by convincing the public that the bank will bring inflation back to target.'
      },

      tip2: null,

      examEdge: {
        title: 'Exam edge',
        text: 'Strong essays use the quantity theory <em>carefully</em>. State the identity, then qualify it: velocity, slack and anchored expectations explain why money does not automatically cause inflation.'
      },
      economistQuote: {
        portraitKey: 'economistFriedman',
        tone: 'amber',
        label: 'Economist insight: Friedman and the monetarist view',
        quote: 'Inflation is always and everywhere a monetary phenomenon in the sense that it is and can be produced only by a more rapid increase in the quantity of money than in output.',
        attribution: 'Milton Friedman, <em>The Counter-Revolution in Monetary Theory</em> (1970)'
      },
      tipLate: {
        icon: '💡', tone: 'amber', head: 'Why this matters',
        text: 'Friedman\'s monetarism reframed the inflation debate: the long-run cause is excessive money supply growth relative to output, regardless of whether the proximate trigger looks like demand-pull or cost-push. The A* move is to use Friedman as a <strong>long-run anchor</strong> for the analysis – central bank credibility and money-supply discipline keep inflation in check – while still acknowledging that in the short run, velocity changes, output gaps, and anchored expectations all complicate the simple M → P link (as 2021 showed).'
      }
    },

    /* ====================================================================
       CARD 6 – Winners and losers
       ==================================================================== */
    {
      id: 'winners-and-losers',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Winners and losers',
      lede: 'Inflation redistributes purchasing power. It does not simply make everyone worse off. Who gains and who loses depends especially on whether inflation is <strong>anticipated</strong> or <strong>unanticipated</strong>.',
      ledeStyle: 'plain',

      tip: {
        icon: '✅',
        tone: 'green',
        text: '<strong>Inflation is not neutral – it redistributes.</strong>'
      },

      versusRows: {
        title: 'Who benefits? Who loses?',
        emoji: '👥',
        leftTone: 'green',
        rightTone: 'rose',
        rows: [
          {
            left:  { icon: '🐖', head: 'Savers and lenders',     sub: 'Real value of savings falls.' },
            right: { icon: '£',  head: 'Borrowers and debtors',  sub: 'Repay with cheaper money.' }
          },
          {
            left:  { icon: '👤', head: 'Fixed-wage workers',     sub: 'Real wages fall behind prices.' },
            right: { icon: '📈', head: 'Flexible-pay workers',    sub: 'Wages can rise with prices.' }
          },
          {
            left:  { icon: '🚢', head: 'Exporters',              sub: 'Home goods become cheaper abroad.' },
            right: { icon: '🛒', head: 'Importers',              sub: 'Imported inputs and goods become more expensive.' }
          },
          {
            left:  { icon: '🧓', head: 'Pensioners on fixed incomes', sub: 'Purchasing power is eroded.' },
            right: { icon: '🛡️', head: 'Those with index-linked incomes', sub: 'Payments rise with inflation.' }
          },
          {
            left:  { icon: '🏠', head: 'Holders of real assets', sub: 'Property and other assets rise in value.' },
            right: { icon: '💵', head: 'Holders of cash',         sub: 'Cash loses purchasing power.' }
          }
        ]
      },

      pairLabel: 'The big evaluation',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue',
        icon: '🔮',
        iconStyle: 'circle',
        label: 'Anticipated inflation',
        text: 'People can plan ahead, set wages and prices, and use index-linking. <strong style="color:#2563EB;">Distributional effects are smaller.</strong>'
      },
      right: {
        tone: 'amber',
        icon: '🔎',
        iconStyle: 'circle',
        label: 'Unanticipated inflation',
        text: 'Price rises outpace expectations. Some gain and others lose. <strong style="color:#D97706;">Distributional effects are larger.</strong>'
      },

      conclusion: {
        title: 'Governments and mortgage-holders',
        text: 'Governments and mortgage-holders can <strong>benefit</strong> when the real value of debt erodes, lowering the real cost of servicing and repaying debt.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'The strongest evaluation of winners and losers depends on <strong>expectations</strong> – and on how quickly incomes and contracts adjust to higher prices.'
      }
    },

    /* ====================================================================
       CARD 7 – Deflation: the harder problem
       ==================================================================== */
    {
      id: 'deflation-harder-problem',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Deflation – the harder problem',
      lede: 'Falling prices may sound attractive. But when they reflect collapsing demand, they can trigger a harmful cycle that is hard to escape. That is deflation.',
      ledeStyle: 'plain',

      tip: {
        icon: '❗',
        tone: 'rose',
        text: '<strong>Deflation can trap an economy in weakness.</strong>'
      },

      flowTitle: 'Why it is dangerous',
      flowEmoji: '⚠️',
      flow: [
        { tone: 'blue',   icon: '🏷️', title: 'Prices fall',              sub: 'Lower prices today signal lower demand tomorrow.' },
        { tone: 'green',  icon: '🛒', title: 'Consumers delay spending', sub: 'Households wait for better prices, so demand falls further.' },
        { tone: 'amber',  icon: '🏭', title: 'Firms cut output and jobs', sub: 'Sales fall, so firms cut production, investment and employment.' },
        { tone: 'rose',   icon: '📉', title: 'Prices weaken again',      sub: 'Lower income and weaker demand push prices down further.' }
      ],

      causesLabel: null,
      causes: [
        { tone: 'purple', icon: '⚖️', head: 'Real debt burdens rise',  body: 'When prices fall, the real value of debt increases. Borrowers struggle, defaults rise, and banks tighten credit.' },
        { tone: 'amber',  icon: '🔒', head: 'Zero-lower-bound trap',   body: 'Interest rates cannot fall much below zero. Monetary policy loses traction, so the economy stalls.' },
        { tone: 'blue',   icon: '👥', head: 'Downward wage rigidity',  body: 'Wages rarely fall easily. So firms cut jobs instead of pay, raising unemployment and weakening demand.' }
      ],

      comparisonTable: {
        title: 'Benign vs malign',
        emoji: '⚖️',
        columns: ['✅ Benign deflation', '✖ Malign deflation'],
        columnTones: ['green', 'rose'],
        rows: [
          { label: 'Source',         values: ['From productivity growth and rightward AS shift', 'From demand collapse and leftward AD shift'], highlights: [true, true] },
          { label: 'Cause',          values: ['Productivity improves → AS shifts right',          'Demand falls → AD shifts left'] },
          { label: 'Prices',         values: ['Fall, but output can rise',                        'Fall'] },
          { label: 'Output',         values: ['Rises',                                           'Falls'] },
          { label: 'Mainly harmful?', values: ['No – can raise real incomes',                     'Yes – traps the economy in weakness'] }
        ]
      },

      summaryRow: [
        {
          tone: 'blue',
          icon: '🗾',
          title: 'Case study: Japan in the 1990s–2010s',
          text: 'After the asset bubble burst in the early 1990s, Japan faced persistent deflation, weak demand and near-zero interest rates for decades – the classic example.'
        }
      ],

      examEdge: {
        title: 'Exam edge',
        text: 'Not all falling prices are equally bad – the <em>cause</em> matters. Deflation due to weak demand is dangerous; deflation due to higher productivity can be beneficial.'
      }
    },

    /* ====================================================================
       CARD 8 – Policy responses
       ==================================================================== */
    {
      id: 'policy-responses',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Policy responses',
      lede: 'There is no single cure for inflation. Different causes need different treatments. Policy only works well when the diagnosis is correct. Using the wrong tool – or the right tool on the wrong problem – can make inflation worse or damage the economy.',
      ledeStyle: 'plain',

      tip: {
        icon: '✅',
        tone: 'green',
        text: '<strong>Diagnose first, then treat.</strong>'
      },

      measureCards: [
        {
          tone: 'blue',
          icon: '🏦',
          acronym: 'BoE rate rises',
          fullName: 'Monetary policy – cools demand-pull inflation',
          points: [
            'Raises borrowing costs, reduces demand and eases inflation.',
            'Higher rates → higher borrowing costs → lower spending → lower inflation.'
          ]
        },
        {
          tone: 'amber',
          icon: '💼',
          acronym: 'Fiscal tightening',
          fullName: 'Lower spending or higher taxes',
          points: [
            'Reduce government spending or raise taxes to lower aggregate demand.',
            'Lower deficit → lower demand → lower inflationary pressure.'
          ]
        },
        {
          tone: 'green',
          icon: '🌱',
          acronym: 'Supply-side',
          fullName: 'Eases cost-push & lifts long-run capacity',
          points: [
            'Improve capacity, cut bottlenecks, boost productivity and skills.',
            'Lower costs / higher supply → lower prices → lower inflation.'
          ]
        },
        {
          tone: 'purple',
          icon: '💬',
          acronym: 'Forward guidance',
          fullName: 'Expectations anchoring',
          points: [
            'Clear communication to anchor expectations and prevent wage–price spirals.',
            'Credible guidance → stable expectations → lower future inflation.'
          ]
        }
      ],
      measureCardsLabel: 'The toolkit',
      measureCardsEmoji: '🛠️',
      measureCardsCols: 2,

      matchTable: {
        title: 'Match the policy to the problem',
        emoji: '🔗',
        columns: ['Cause of inflation', 'Goal', 'Policy response'],
        rows: [
          {
            cause:    { tone: 'blue',   icon: '📈', head: 'Demand-pull inflation', sub: 'Too much spending chasing too little output.' },
            goal:     { tone: 'blue',   icon: '❄️', head: 'Tighten demand',         sub: 'Cool the economy.' },
            response: { tone: 'blue',   icon: '🏦', head: 'Monetary or fiscal tightening' }
          },
          {
            cause:    { tone: 'amber',  icon: '🏭', head: 'Cost-push inflation',   sub: 'Firms face higher costs and pass them on.' },
            goal:     { tone: 'amber',  icon: '🌱', head: 'Ease costs & support supply', sub: 'Relieve cost pressures, boost capacity.' },
            response: { tone: 'amber',  icon: '🛠️', head: 'Supply-side policy & removing bottlenecks' }
          },
          {
            cause:    { tone: 'purple', icon: '💭', head: 'Expectations-driven', sub: 'People expect prices to keep rising.' },
            goal:     { tone: 'purple', icon: '⚓', head: 'Restore credibility', sub: 'Anchor inflation expectations.' },
            response: { tone: 'purple', icon: '💬', head: 'Forward guidance & credible frameworks' }
          }
        ]
      },

      whyItMatters: {
        title: 'How to evaluate',
        emoji: '⚖️',
        items: [
          { tone: 'blue',   icon: '⏱️', label: 'Speed',               text: 'How quickly will it reduce inflation?' },
          { tone: 'amber',  icon: '👥', label: 'Distributional effect', text: 'Who gains and who loses?' },
          { tone: 'green',  icon: '🏛️', label: 'Political feasibility', text: 'Can it realistically be implemented?' },
          { tone: 'purple', icon: '🔎', label: 'Correct diagnosis',    text: 'Does the policy match the true cause?' }
        ]
      },

      conclusion: {
        title: 'Link back to Card 1',
        text: 'Inflation has many causes – treating all inflation as the same is the biggest policy mistake.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'The best essays judge policies by the cause of inflation, not just by whether they reduce CPI. Analyse the diagnosis, the trade-offs and the likely effectiveness.'
      },

      quizCta: { href: TopicLoader.routes.quiz('causes'), label: 'Test yourself →' }
    }

  ]
};
