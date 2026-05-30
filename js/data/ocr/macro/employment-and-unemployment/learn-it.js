/* ============================================================
   ECONOS – content data for unemployment
   8 cards · OCR variant · OCR H460 Component 2 § 2.3
   ─────────────────────────────────────────────────────────────
   OCR 2.3 lists five sub-points: (a) employment and
   unemployment, (b) the policy objective of full employment,
   (c) the LFS and claimant count measures, (d) evaluate causes
   and consequences of unemployment, (e) evaluate effects of
   full employment. The natural rate of unemployment shows up
   in OCR 2.8 alongside the Phillips Curve – cross-reference it
   here. Layout + diagrams identical to the Edexcel A baseline.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'employment-and-unemployment',
  topicNum: '2.3',
  theme: 'Component 2 · Macroeconomics',
  title: 'Employment & Unemployment',
  estTime: '9-11 minutes',
  goal: 'Lock in the types, the diagnostic, and the cure',

  intro: {
    heroKey: 'heroUnemployment',
    summary: "Three labour-market states. Six types – four supply-side, two demand-side. One diagnostic move. Lock these in and every unemployment essay falls into place.",
    doInThis: 'Recap the classification, the six types, the diagnostic, why cyclical unemployment persists – plus a 25-mark essay scaffold on reducing unemployment.',
    outcomes: [
      'Classify employed/unemployed/inactive',
      'Match each type to its cure',
      'Lock in 7 exam-edge gems'
    ],
    tip: "These cards are revision, not first-time learning. They cue what you already know and flag the gems that lift answers from B to A*.",
    stages: [
      { num: 1, name: 'Learn',  sub: 'Recap and lock in the gems',     state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions',  state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 – Three labour-market states ----- */
    {
      id: 'classification',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Three labour-market states',
      lede: 'The labour market is not just about jobs. People are either employed, unemployed, or economically inactive. Getting this distinction right is essential for diagnosis and policy.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'Do not confuse unemployment with inactivity – this is an easy exam distinction.' },

        { type: 'sectionHeader', icon: '👥', label: 'THE THREE STATES' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'green',  icon: '💼', head: 'Employed',                body: 'People aged 16+ who did paid work in the reference week, or were temporarily away from a job. Examples: Full-time worker · part-time worker · self-employed' },
          { type: 'tile', tone: 'amber',  icon: '🔍', head: 'Unemployed',              body: 'Not in work but actively seeking and available to start within 2 weeks. Examples: Graduate job seeker · recently redundant worker' },
          { type: 'tile', tone: 'purple', icon: '👤', head: 'Economically inactive',   body: 'Not in work and not actively seeking or available for work. Examples: Full-time student not looking · retiree · long-term carer' }
        ]},

        { type: 'mechanismChain', steps: [
          { label: 'Labour force',       detail: '= employed + unemployed' },
          { label: 'Participation rate',  detail: '= labour force ÷ working-age population' },
          { label: 'Unemployment rate',   detail: '= unemployed ÷ labour force' }
        ]},

        { type: 'bigIdea', text: 'The inactive trap — If many people leave the labour force, the unemployment rate can fall even when the jobs picture has not improved. A healthy labour market needs people in work – watch participation and unemployment, not just the headline rate.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Always distinguish unemployed from economically inactive. Use participation-rate evidence when relevant – it gives a fuller picture of the labour market.' }
      ]
    },

    /* ----- CARD 2 – Measuring unemployment ----- */
    {
      id: 'measurement',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Measuring unemployment',
      lede: 'Two official measures tell slightly different stories.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'The gap between measures is evidence of measurement difficulty.' },

        { type: 'sectionHeader', icon: '⚖️', label: 'THE TWO MEASURES' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue',  icon: '📄', head: 'Claimant Count',          body: 'People claiming unemployment-related benefits. Scope: narrow · Frequency: monthly · Influenced by: eligibility rules and sanctions · Limitation: easy to game.' },
          { type: 'tile', tone: 'amber', icon: '👥', head: 'ILO / Labour Force Survey', body: 'Surveyed households. Unemployed if without a job, available and actively seeking. Scope: broader · Frequency: quarterly · Strength: internationally comparable · Role: headline rate.' }
        ]},

        { type: 'versusRows',
          left:  { label: 'Claimant Count',            tone: 'blue' },
          right: { label: 'ILO / Labour Force Survey', tone: 'amber' },
          rows: [
            { criterion: 'Scope',      left: 'Benefit claimants only',             right: 'All people in the labour force' },
            { criterion: 'Strengths',  left: 'Timely; monthly data',               right: 'Comprehensive; internationally comparable' },
            { criterion: 'Weaknesses', left: 'Affected by rules and behaviour',    right: 'Smaller sample; subject to sampling error' },
            { criterion: 'Best use',   left: 'Short-term benefit claimant trends', right: 'Headline unemployment rate and comparisons' }
          ]
        },

        { type: 'sectionHeader', icon: '💡', label: 'They do not always match' },
        { type: 'bigIdea', text: 'Different definitions and coverage mean the two measures often diverge. Policy changes can move the Claimant Count without changing real unemployment. Use both measures to build a fuller picture.' },
        { type: 'examEdge', title: 'Exam move', text: 'A rise in the Claimant Count may overstate or understate labour-market weakness depending on benefit eligibility rules. A* answers cite the gap between the two measures as evidence of measurement difficulty.' }
      ]
    },

    /* ----- CARD 3 – The six types of unemployment ----- */
    {
      id: 'types',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'The six types of unemployment',
      lede: 'Six causes – but only two flavours. Four are supply-side (frictions and rigidities in the labour market). Two are demand-side (cyclical and demand-deficient).',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'Four supply-side types · two demand-side types. Different causes need different cures.' },

        { type: 'sectionHeader', icon: '⚖️', label: 'THE BIG SPLIT' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'green', icon: '🔧', head: 'Supply-side · 4 types',
            body: 'Caused by frictions and rigidities in the labour market. Workers stuck even when AD is strong. Frictional – between jobs. Structural – skills / location mismatch. Seasonal – predictable seasonal demand. Real-wage – wage above market-clearing. Cure: supply-side policy (retraining, mobility, market reform).' },
          { type: 'tile', tone: 'rose',  icon: '📉', head: 'Demand-side · 2 types',
            body: 'Caused by weak aggregate demand. Output falls → labour demand falls (labour is a derived demand). Cyclical – short-run, follows the business cycle. Demand-deficient – persistent, even outside recession. Cure: demand stimulus (fiscal / monetary).' }
        ]},

        { type: 'sectionHeader', icon: '⛓️', label: 'THE DEMAND-SIDE CHAIN' },
        { type: 'mechanismChain', steps: [
          { label: 'AD falls',            detail: 'C, I, G or (X−M) drops' },
          { label: 'Output falls',        detail: 'firms produce less' },
          { label: 'Labour demand falls', detail: 'derived demand effect' },
          { label: 'Unemployment ↑',      detail: 'cyclical OR demand-deficient' }
        ]},

        { type: 'sectionHeader', icon: '🧩', label: 'THE SIX TYPES' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue',   icon: '🚶', head: 'Frictional',
            body: 'Short-term unemployment between jobs. Caused by imperfect information and search time. Always present – even at "full employment". Example: Graduate searching after university.' },
          { type: 'tile', tone: 'amber',  icon: '⛏️', head: 'Structural',
            body: 'Skills or location mismatch with available jobs. Caused by deindustrialisation, technology, globalisation. Long-term – workers need retraining or relocation. Example: Ex-miners in South Wales.' },
          { type: 'tile', tone: 'purple', icon: '⛷️', head: 'Seasonal',
            body: 'Predictable variation in labour demand at different times of year. Short-term and recurring. Example: Ski instructors in summer.' },
          { type: 'tile', tone: 'green',  icon: '⚖️', head: 'Real-wage (classical)',
            body: 'Wages held above equilibrium by unions, minimum wage, or contracts – excess labour supply at that wage. Example: Low-skilled workers priced out of jobs.' },
          { type: 'tile', tone: 'rose',   icon: '📉', head: 'Cyclical',
            body: 'Caused by falling AD in a recession. Firms need fewer workers when output falls. Self-correcting as the economy recovers. Example: Recession layoffs across sectors.' },
          { type: 'tile', tone: 'rose',   icon: '🌀', head: 'Demand-deficient',
            body: 'Persistent weak AD – even outside recession (Keynes\'s "underemployment equilibrium"). Hysteresis can make cyclical unemployment become structural. Example: Japan\'s lost decades; eurozone post-2008.' }
        ]},

        { type: 'bigIdea', text: 'Four supply-side, two demand-side. Demand stimulus on a supply-side problem is wasteful – and supply-side reform on a demand-side problem misses the point.' },
        { type: 'examEdge', title: 'Classify before you cure', text: 'Open every unemployment essay with the type: "This is primarily [type] unemployment because…". The 4-vs-2 split is the analytical move that lifts answers from B to A*. Note that "demand-deficient" is the Keynesian / persistent variant of cyclical – flag the relationship if your textbook treats them as one.' }
      ]
    },

    /* ----- CARD 4 – Diagnose the type ----- */
    {
      id: 'diagnose',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Diagnose the type',
      lede: 'Examiners reward correct diagnosis before policy. Identifying the right type of unemployment shows you understand the underlying mechanism – and that determines the right solution.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '🔒', text: 'The clue is in the mechanism, not just the symptom of joblessness.' },

        { type: 'sectionHeader', icon: '🗂️', label: 'CLASSIFY THE CASE' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue',   icon: '🎓', head: 'Frictional',
            body: 'Graduates between jobs after finishing university. Type: Between jobs – job-search lag, not a structural mismatch.' },
          { type: 'tile', tone: 'amber',  icon: '⛏️', head: 'Structural',
            body: 'Ex-miners in Wales whose skills no longer match local jobs. Type: Skills mismatch – deindustrialisation created a permanent gap.' },
          { type: 'tile', tone: 'purple', icon: '⛷️', head: 'Seasonal',
            body: 'Ski instructors with little work in the summer. Type: Time of year – demand for labour falls predictably off-season.' },
          { type: 'tile', tone: 'rose',   icon: '📉', head: 'Cyclical',
            body: 'A recession cuts spending and car plants lay off workers. Type: Weak AD – firms need fewer workers when output falls.' },
          { type: 'tile', tone: 'green',  icon: '⚖️', head: 'Real-wage',
            body: 'A wage floor above equilibrium leaves some low-skilled workers unemployed. Type: Wage rigidity – price of labour held above market-clearing level.' },
          { type: 'tile', tone: 'rose',   icon: '🌀', head: 'Demand-deficient',
            body: 'A region\'s unemployment stays high for years after a recession ends – even as the national economy grows. Type: Persistent weak AD – hysteresis turns cyclical unemployment into long-run joblessness.' }
        ]},

        { type: 'sectionHeader', icon: '⚡', label: 'FAST TEST' },
        { type: 'mechanismChain', steps: [
          { label: 'Between jobs?',      detail: '→ Frictional' },
          { label: 'Mismatch?',          detail: '→ Structural' },
          { label: 'Time of year?',      detail: '→ Seasonal' },
          { label: 'Recession?',         detail: '→ Cyclical' },
          { label: 'Persistent weak AD?', detail: '→ Demand-deficient' }
        ]},

        { type: 'bigIdea', text: 'Watch out — Structural unemployment can persist even when demand recovers – the skills gap doesn\'t close just because firms are hiring. Demand stimulus helps cyclical, not structural.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Open every unemployment essay with: "This is primarily [type] unemployment because…" Naming the type before discussing policy is the analytical step that lifts answers from B to A*.' }
      ]
    },

    /* ----- CARD 5 – Cyclical unemployment & derived demand ----- */
    {
      id: 'cyclical',
      template: 'ad-interactive',
      diagramKey: 'adAsRecession',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Cyclical unemployment & derived demand',
      lede: 'Labour is a derived demand – firms hire workers because they expect to sell output. When AD falls, firms need fewer workers.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'When aggregate demand falls, firms need fewer workers.' },

      steps: [
        {
          key: 'base',
          label: 'Base equilibrium',
          text: 'AD meets AS at full-employment output <strong>Y<sub>FE</sub></strong>. Labour markets clear – unemployment is at the natural rate (frictional + structural + seasonal only). Price level is P₁.'
        },
        {
          key: 'extension',
          label: 'AD shifts left',
          text: 'AD shifts <strong>LEFT</strong> – fall in C, I, G or (X−M). Demand for goods falls, so demand for labour falls too: <em>labour is a derived demand</em>. Output drops to Y₁, below Y<sub>FE</sub>. The gap (Y<sub>FE</sub>−Y₁) is the cyclical unemployment.'
        },
        {
          key: 'shift',
          label: 'Labour demand falls',
          text: '<strong>Wages are sticky downward</strong> (Keynes) – unions resist cuts, contracts are fixed, workers refuse pay reductions. So the labour market doesn\'t self-correct. Cyclical unemployment <em>persists</em> until AD recovers. Fiscal or monetary stimulus is needed.'
        }
      ],

      flowTitle: 'THE EMPLOYMENT CHAIN',
      flowEmoji: '🔗',
      flow: [
        { icon: '📉', title: 'AD falls',                sub: 'C, I, G or X−M drops' },
        { icon: '🏭', title: 'Output falls',            sub: 'firms produce less' },
        { icon: '✂️', title: 'Firms cut production',    sub: 'less labour needed' },
        { icon: '👥', title: 'Labour demand falls',     sub: 'derived demand effect' },
        { icon: '📊', title: 'Unemployment rises',      sub: 'cyclical unemployment' }
      ],

      pairLabel: 'POLICY RESPONSE',
      pairEmoji: '🛡️',
      left: {
        tone: 'blue',
        icon: '🏛️',
        iconStyle: 'circle',
        label: 'Monetary policy',
        points: [
          'Lower interest rates → ↑ borrowing → ↑ C and ↑ I',
          'Increases money supply (QE)',
          'Boosts AD → output recovers → firms re-hire'
        ]
      },
      right: {
        tone: 'amber',
        icon: '🏛️',
        iconStyle: 'circle',
        label: 'Fiscal policy',
        points: [
          'Increase government spending (↑ G)',
          'Cut taxes → ↑ household disposable income',
          'Multiplier effect amplifies the AD boost'
        ]
      },

      conclusion: {
        title: 'Big idea',
        text: 'Cyclical unemployment is demand-deficient – the cure is to restore AD, not to retrain workers. That\'s why the wrong policy diagnosis (supply-side for a cyclical problem) wastes money and fails.'
      },

      examEdge: {
        title: 'Exam edge',
        text: "Always use the phrase <em>\"labour is a derived demand\"</em> when explaining why falling output raises unemployment. Combined with <strong>wage stickiness</strong>, this is the textbook Keynesian explanation."
      }
    },

    /* ----- CARD 6 – Different causes, different cures ----- */
    {
      id: 'policy',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Different causes, different cures',
      lede: 'Unemployment has multiple causes, and each needs a different policy response. Policy only works well when the diagnosis is correct.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'The wrong toolkit wastes money and may not solve the problem.' },

      comparisonTable: {
        title: 'MATCH THE TYPE TO THE POLICY',
        emoji: '🧩',
        columns: ['❓ What is going wrong?', '✅ Best policy response'],
        columnTones: ['amber', 'green'],
        rows: [
          { label: '📉 Cyclical',          values: ['Recession – weak AD short-run',                'Fiscal or monetary expansion.'] },
          { label: '🌀 Demand-deficient',  values: ['Persistent weak AD (Keynesian)',               'Sustained stimulus + supply-side support to prevent hysteresis.'] },
          { label: '🧩 Structural',        values: ['Skills or location mismatch',                  'Retraining, apprenticeships, mobility grants, regional support.'] },
          { label: '🔍 Frictional',        values: ['Poor information and search time',             'JobCentres, job-matching platforms, better vacancy information.'] },
          { label: '£ Real-wage',          values: ['Labour too expensive relative to equilibrium', 'Labour market reform, flexibility, lower non-wage costs.'] },
          { label: '☀️ Seasonal',           values: ['Predictable swings in demand',                 'Diversification, retraining, temporary support or off-season mobility.'] }
        ]
      },

      whyItMatters: {
        title: "DON'T MIX UP THE CURES",
        emoji: '🔧',
        items: [
          { tone: 'rose',   icon: '📉', label: 'Demand-side',          text: 'Best for weak aggregate demand.' },
          { tone: 'amber',  icon: '👤', label: 'Supply-side',           text: 'Best for mismatches in skills or location.' },
          { tone: 'blue',   icon: 'ℹ️', label: 'Information',           text: 'Best for search friction and information gaps.' },
          { tone: 'green',  icon: '⚖️', label: 'Labour market reform',  text: 'Best for wage rigidity and market rigidities.' }
        ]
      },

      summaryRow: [
        { tone: 'amber', icon: '⚠️', title: '', text: 'Retraining will not fix cyclical unemployment if firms still face weak demand.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'Policy should target the mechanism – demand weakness, mismatch, search frictions, wage rigidity, or seasonality.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'A strong judgement says why one policy is appropriate for one type of unemployment but weak for another.'
      }
    },

    /* ----- CARD 7 – Consequences: not just lost output ----- */
    {
      id: 'consequences',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Consequences – not just lost output',
      lede: 'Unemployment matters because its costs spread across the whole economy and society. It affects growth, public finances, communities and individuals – today and in the future.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'rose', icon: '⚠️', text: '<strong>Unemployment damages both current output and future potential.</strong>' },

        { type: 'sectionHeader', icon: '📦', label: 'FOUR COST CHANNELS' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue',   icon: '📊', head: '1. Economic costs',
            body: 'Lost GDP lowers living standards and future income. Lower tax revenue and higher welfare spending strain public finances.' },
          { type: 'tile', tone: 'amber',  icon: '👥', head: '2. Social and personal costs',
            body: 'Unemployment brings mental-health strain, family stress and higher crime risk. It can damage self-esteem and reduce confidence and aspirations.' },
          { type: 'tile', tone: 'green',  icon: '🔗', head: '3. Hysteresis',
            body: 'Long unemployment weakens skills and attachment to the labour market. So temporary unemployment can become structural.' },
          { type: 'tile', tone: 'purple', icon: '🌍', head: '4. Wider macro effects',
            body: 'Weakens the balance of payments and slows long-run growth. Can cause regional decline and put pressure on public finances.' }
        ]},

        { type: 'sectionHeader', icon: '🔗', label: 'THE HYSTERESIS CHAIN' },
        { type: 'mechanismChain', steps: [
          { label: 'Cyclical unemployment', detail: 'recession job losses' },
          { label: 'Skills atrophy',         detail: 'human capital decays' },
          { label: 'Employability falls',    detail: 'employers prefer others' },
          { label: 'Structural risk',        detail: 'permanent scarring' }
        ]},

        { type: 'calloutStrip', tone: 'amber', icon: 'ℹ️', text: 'Youth unemployment can have especially long-lasting scarring effects.' },

        { type: 'bigIdea', text: 'The full cost of unemployment is larger than the lost output in the current year.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Use "hysteresis" to explain why prolonged cyclical unemployment can worsen the supply side of the economy.' }
      ]
    },

    /* ----- CARD 8 – Where to next ----- */
    {
      id: 'where-next',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Where to next',
      lede: 'Unemployment links directly to the rest of macroeconomics.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Unemployment is not a silo – it connects to inflation, macro policy and long-run supply.' },

      causesFirst: true,
      causesStyle: 'numbered',
      causesLabel: 'THE PATHWAYS AHEAD',
      causesEmoji: '🔭',
      causes: [
        {
          tone: 'blue',
          icon: '📉',
          head: 'Inflation / Phillips curve',
          body: 'Short-run trade-off between lower unemployment and higher inflation.<div style="margin-top:12px;text-align:center;"><span style="border:1px solid #93C5FD;border-radius:16px;padding:3px 12px;font-size:11.5px;color:#2563EB;font-weight:700;">Overheating vs spare capacity</span></div>'
        },
        {
          tone: 'amber',
          icon: '🏛️',
          head: 'Fiscal and monetary policy',
          body: 'Demand-side cures for cyclical unemployment – stabilise demand, close the output gap.<div style="margin-top:12px;text-align:center;"><span style="border:1px solid #FCD34D;border-radius:16px;padding:3px 12px;font-size:11.5px;color:#D97706;font-weight:700;">Counter-cyclical tools</span></div>'
        },
        {
          tone: 'green',
          icon: '📈',
          head: 'Supply-side policy',
          body: 'Structural cures via training, mobility and incentives to raise productivity and jobs.<div style="margin-top:12px;text-align:center;"><span style="border:1px solid #6EE7B7;border-radius:16px;padding:3px 12px;font-size:11.5px;color:#059669;font-weight:700;">Lift capacity, lower NAIRU</span></div>'
        }
      ],

      conclusion: {
        title: 'Core takeaway',
        text: 'Diagnose the cause, measure carefully, match the policy, and evaluate the trade-offs.'
      },

      lockIn: {
        title: 'REVISION CHECKLIST',
        icon: '✅',
        items: [
          'Define key unemployment states.',
          'Compare headline measures accurately.',
          'Classify types of unemployment.',
          'Match the right policy to the cause.'
        ]
      },

      examEdge: {
        title: 'Exam edge',
        text: 'The best essays move from diagnosis to policy, then evaluate whether the cure fits the cause.'
      }
    }

  ]
};
