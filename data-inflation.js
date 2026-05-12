/* ============================================================
   ECONOS — content data for inflation_causes
   7 cards · revision-tight · exam-edge gems flagged
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'inflation_causes',
  topicNum: '2.4',
  theme: 'Theme 2 · The National and Global Economy',
  sessionLabel: 'SESSION 1 OF 3: LEARN',
  title: 'Causes of Inflation & Deflation',
  estTime: '6-8 minutes',
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
      { num: 1, name: 'Learn',  sub: 'Recap and lock in the gems',     state: 'current' },
      { num: 2, name: 'Master', sub: 'Apply in exam-style questions',  state: 'locked' },
      { num: 3, name: 'Review', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 — Framing ----- */
    {
      id: 'framing',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
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
      stepLabel: 'Learn: Step 2 of 7',
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
        title: "Hallmarks - what you'll see",
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
      stepLabel: 'Learn: Step 3 of 7',
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
        title: "Hallmarks - what you'll see",
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
      stepLabel: 'Learn: Step 4 of 7',
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

    /* ----- CARD 5 — QE puzzle ----- */
    {
      id: 'qe-puzzle',
      template: 'puzzle',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'The QE puzzle',
      lede: "Money creation should cause inflation. So why didn't it?",
      classical: {
        title: 'The classical view',
        formula: 'MV = PY',
        formulaSub: 'money × velocity = prices × output',
        quote: '"Inflation is always and everywhere a monetary phenomenon." — Friedman',
        examples: 'Hyperinflations confirm it: <strong>Zimbabwe 2008</strong>, <strong>Weimar 1923</strong>, <strong>Hungary 1946</strong> - all monetary.'
      },
      puzzle: {
        title: 'The puzzle',
        chartCaption: 'UK monetary base (M0) vs CPI inflation, 2008-2022',
        bullets: [
          '<strong>2008-2022:</strong> Bank of England, Fed, and ECB all engaged in massive QE - expanding the monetary base by 5-10×.',
          '<strong>Critics warned</strong> of imminent hyperinflation.',
          "<strong>It didn't happen.</strong>"
        ],
        cliffhanger: 'Why?'
      },
      examEdge: {
        title: 'Theory vs reality',
        text: "Showing you understand <em>why</em> simple monetary theory failed in 2008-22 is exactly the kind of nuance that lifts an answer to A*. Don't just quote Friedman - explain when his rule holds and when it doesn't."
      }
    },

    /* ----- CARD 6 — Why QE didn't cause inflation ----- */
    {
      id: 'qe-resolution',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 6 of 7',
      title: "Why QE didn't cause inflation",
      lede: 'Four mechanisms. Each one matters in essays.',
      mechanisms: [
        {
          num: '1',
          tone: 'blue',
          title: 'Velocity collapsed',
          text: 'M rose 10× but V fell 10×. Banks held QE-created reserves rather than lending; firms hoarded cash. <strong>MV = PY</strong> held - V just did the adjusting.'
        },
        {
          num: '2',
          tone: 'green',
          title: 'Output gap',
          text: 'Economies were below potential. The AS curve was effectively flat in this region - new money raised output rather than prices.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Anchored expectations',
          text: "Decades of credible 2% inflation targeting kept expectations stable. People didn't expect inflation, so they didn't act in ways that caused it."
        },
        {
          num: '4',
          tone: 'rose',
          title: 'The counter-examples confirm it',
          text: 'Venezuela, Argentina, Turkey <em>did</em> get inflation from money creation - because their central banks lacked credibility, output gaps were smaller, and money was financing fiscal deficits.'
        }
      ],
      examEdge: {
        title: 'The takeaway gem',
        text: '"More money = more inflation" needs context. Money creation <strong>in a recession with anchored expectations</strong> doesn\'t cause inflation. Money creation <strong>by an unconstrained central bank financing deficits</strong> usually does.'
      },
      connection: {
        title: 'Connection to 2022-23',
        text: 'The 2022-23 UK inflation spike came from energy and supply chains - not QE. Inflation arrived <em>years</em> after QE ended. Timing matters.'
      }
    },

    /* ----- CARD 7 — Deflation ----- */
    {
      id: 'deflation',
      template: 'deflation',
      stepLabel: 'Learn: Step 7 of 7',
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
      quizCta: { href: 'quiz_inflation_causes.html', label: 'Test yourself →' }
    }
  ]
};
