/* ============================================================
   ECONOS – content data for unemployment
   8 cards · revision-tight · exam-edge gems flagged
   Edexcel Theme 2.1.3
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'employment-and-unemployment',
  topicNum: '1.3',
  theme: 'Theme 2 · The National and Global Economy',
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
          { type: 'tile', tone: 'green',  icon: '💼', head: 'Employed',              body: 'People aged 16+ who did paid work in the reference week, or were temporarily away from a job.' },
          { type: 'tile', tone: 'amber',  icon: '🔍', head: 'Unemployed',            body: 'Not in work but actively seeking and available to start within 2 weeks.' },
          { type: 'tile', tone: 'purple', icon: '👤', head: 'Economically inactive', body: 'Not in work and not actively seeking or available for work.' }
        ]},
        { type: 'sectionHeader', icon: '📊', label: 'WHY THE DISTINCTION MATTERS' },
        { type: 'mechanismChain', steps: [
          { label: 'Labour force',       detail: '= employed + unemployed' },
          { label: 'Participation rate', detail: '= labour force ÷ working-age population' },
          { label: 'Unemployment rate',  detail: '= unemployed ÷ labour force' }
        ]},
        { type: 'bigIdea', text: 'The inactive trap: If many people leave the labour force, the unemployment rate can fall even when the jobs picture has not improved. A healthy labour market needs people in work – watch participation and unemployment, not just the headline rate.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Always distinguish <strong>unemployed</strong> from <strong>economically inactive</strong>. Use participation-rate evidence when relevant – it gives a fuller picture of the labour market.' }
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
          { type: 'tile', tone: 'blue',  icon: '📄', head: 'Claimant Count',          body: '<p style="font-size:13.5px;color:#0B1426;margin:0 0 10px;">People claiming unemployment-related benefits.</p><ul style="margin:0;padding:0 0 0 1.2em;font-size:13px;color:#0B1426;line-height:1.7;"><li><strong>Scope:</strong> narrow</li><li><strong>Frequency:</strong> monthly</li><li><strong>Influenced by:</strong> eligibility rules and sanctions</li><li><strong>Limitation:</strong> easy to game</li></ul>' },
          { type: 'tile', tone: 'amber', icon: '👥', head: 'ILO / Labour Force Survey', body: '<p style="font-size:13.5px;color:#0B1426;margin:0 0 10px;">Surveyed households. Unemployed if without a job, available and actively seeking.</p><ul style="margin:0;padding:0 0 0 1.2em;font-size:13px;color:#0B1426;line-height:1.7;"><li><strong>Scope:</strong> broader</li><li><strong>Frequency:</strong> quarterly</li><li><strong>Strength:</strong> internationally comparable</li><li><strong>Role:</strong> headline rate</li></ul>' }
        ]},
        { type: 'bigIdea', text: 'They do not always match: Different definitions and coverage mean the two measures often diverge. Policy changes can move the Claimant Count without changing real unemployment. Use both measures to build a fuller picture.' },
        { type: 'examEdge', title: 'Exam move', text: 'A rise in the Claimant Count may overstate or understate <em>labour-market weakness</em> depending on benefit eligibility rules. A* answers cite the gap between the two measures as evidence of measurement difficulty.' }
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
          { type: 'tile', tone: 'green', icon: '🔧', head: 'Supply-side · 4 types', body: '<p style="font-size:13px;color:#0B1426;margin:0 0 10px;line-height:1.55;">Caused by frictions and rigidities in the labour market. Workers stuck even when AD is strong.</p><ul style="margin:0;padding:0 0 0 16px;font-size:13px;line-height:1.7;color:#0B1426;"><li><strong>Frictional</strong> – between jobs</li><li><strong>Structural</strong> – skills / location mismatch</li><li><strong>Seasonal</strong> – predictable seasonal demand</li><li><strong>Real-wage</strong> – wage above market-clearing</li></ul><p style="margin:10px 0 0;font-size:12px;color:#047857;font-weight:700;">Cure: supply-side policy (retraining, mobility, market reform).</p>' },
          { type: 'tile', tone: 'rose',  icon: '📉', head: 'Demand-side · 2 types', body: '<p style="font-size:13px;color:#0B1426;margin:0 0 10px;line-height:1.55;">Caused by weak aggregate demand. Output falls → labour demand falls (labour is a <em>derived demand</em>).</p><ul style="margin:0;padding:0 0 0 16px;font-size:13px;line-height:1.7;color:#0B1426;"><li><strong>Cyclical</strong> – short-run, follows the business cycle</li><li><strong>Demand-deficient</strong> – persistent, even outside recession</li></ul><p style="margin:10px 0 0;font-size:12px;color:#9F1239;font-weight:700;">Cure: demand stimulus (fiscal / monetary).</p>' }
        ]},
        { type: 'sectionHeader', icon: '⛓️', label: 'THE DEMAND-SIDE CHAIN' },
        { type: 'mechanismChain', steps: [
          { label: 'AD falls',           detail: 'C, I, G or (X−M) drops' },
          { label: 'Output falls',       detail: 'firms produce less' },
          { label: 'Labour demand falls', detail: 'derived demand effect' },
          { label: 'Unemployment ↑',     detail: 'cyclical OR demand-deficient' }
        ]},
        { type: 'sectionHeader', icon: '🧩', label: 'THE SIX TYPES' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue',   icon: '🚶', head: 'Frictional',          body: 'Short-term unemployment <strong>between jobs</strong>. Caused by imperfect information and search time. Always present – even at "full employment".' },
          { type: 'tile', tone: 'amber',  icon: '⛏️', head: 'Structural',          body: '<strong>Skills or location mismatch</strong> with available jobs. Caused by deindustrialisation, technology, globalisation. Long-term – workers need retraining or relocation.' },
          { type: 'tile', tone: 'purple', icon: '⛷️', head: 'Seasonal',            body: 'Predictable variation in labour demand at different times of year. Short-term and recurring.' },
          { type: 'tile', tone: 'green',  icon: '⚖️', head: 'Real-wage (classical)', body: 'Wages held <strong>above equilibrium</strong> by unions, minimum wage, or contracts – excess labour supply at that wage.' },
          { type: 'tile', tone: 'rose',   icon: '📉', head: 'Cyclical',            body: 'Caused by <strong>falling AD in a recession</strong>. Firms need fewer workers when output falls. <em>Self-correcting as the economy recovers.</em>' },
          { type: 'tile', tone: 'rose',   icon: '🌀', head: 'Demand-deficient',    body: '<strong>Persistent weak AD</strong> – even outside recession (Keynes\'s "underemployment equilibrium"). Hysteresis can make cyclical unemployment become structural.' }
        ]},
        { type: 'bigIdea', text: '<strong>Four supply-side, two demand-side.</strong> Demand stimulus on a supply-side problem is wasteful – and supply-side reform on a demand-side problem misses the point.' },
        { type: 'examEdge', title: 'Classify before you cure', text: 'Open every unemployment essay with the type: <em>"This is primarily [type] unemployment because…"</em>. The 4-vs-2 split is the analytical move that lifts answers from B to A*. Note that "demand-deficient" is the Keynesian / persistent variant of cyclical – flag the relationship if your textbook treats them as one.' }
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
          { type: 'tile', tone: 'blue',   icon: '🎓', head: 'Frictional',          body: 'Graduates between jobs after finishing university. Between jobs – job-search lag, not a structural mismatch.' },
          { type: 'tile', tone: 'amber',  icon: '⛏️', head: 'Structural',          body: 'Ex-miners in Wales whose skills no longer match local jobs. Skills mismatch – deindustrialisation created a permanent gap.' },
          { type: 'tile', tone: 'purple', icon: '⛷️', head: 'Seasonal',            body: 'Ski instructors with little work in the summer. Time of year – demand for labour falls predictably off-season.' },
          { type: 'tile', tone: 'rose',   icon: '📉', head: 'Cyclical',            body: 'A recession cuts spending and car plants lay off workers. Weak AD – firms need fewer workers when output falls.' },
          { type: 'tile', tone: 'green',  icon: '⚖️', head: 'Real-wage',          body: 'A wage floor above equilibrium leaves some low-skilled workers unemployed. Wage rigidity – price of labour held above market-clearing level.' },
          { type: 'tile', tone: 'rose',   icon: '🌀', head: 'Demand-deficient',    body: 'A region\'s unemployment stays high for years after a recession ends – even as the national economy grows. Persistent weak AD – hysteresis turns cyclical unemployment into long-run joblessness.' }
        ]},
        { type: 'sectionHeader', icon: '⚡', label: 'FAST TEST' },
        { type: 'mechanismChain', steps: [
          { label: 'Between jobs?',      detail: '→ Frictional' },
          { label: 'Mismatch?',          detail: '→ Structural' },
          { label: 'Time of year?',      detail: '→ Seasonal' },
          { label: 'Recession?',         detail: '→ Cyclical' },
          { label: 'Persistent weak AD?', detail: '→ Demand-deficient' }
        ]},
        { type: 'bigIdea', text: 'Watch out: Structural unemployment can persist even when demand recovers – the skills gap doesn\'t close just because firms are hiring. Demand stimulus helps cyclical, not structural.' },
        { type: 'examEdge', title: 'Exam edge', text: "Open every unemployment essay with: <em>\"This is primarily [type] unemployment because…\"</em> Naming the type before discussing policy is the analytical step that lifts answers from B to A*." }
      ]
    },

    /* ----- CARD 5 – Cyclical unemployment & derived demand ----- */
    {
      id: 'cyclical',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Cyclical unemployment & derived demand',
      lede: 'Labour is a derived demand – firms hire workers because they expect to sell output. When AD falls, firms need fewer workers.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '🔒', text: 'When aggregate demand falls, firms need fewer workers.' },
        { type: 'sectionHeader', icon: '📉', label: 'AD FALLS, OUTPUT FALLS BELOW FULL EMPLOYMENT' },
        {
          type: 'econDiagram',
          chart: 'adas',
          views: [
            {
              label: 'Base equilibrium',
              head: 'Base equilibrium at full employment',
              body: 'AD meets SRAS at full-employment output, on the LRAS line.',
              analysis: 'AD meets AS at full-employment output Yₑ, on the LRAS line. Labour markets clear – unemployment is at the natural rate (frictional + structural + seasonal only). Read the price level Pₑ off the vertical axis.'
            },
            {
              label: 'AD shifts left',
              shifts: { AD: -120 },
              head: 'AD shifts left – a recessionary gap opens',
              body: 'A fall in C, I, G or (X−M) shifts AD left, so output falls below LRAS.',
              analysis: 'AD shifts LEFT – a fall in C, I, G or (X−M). Demand for goods falls, so demand for labour falls too: labour is a derived demand. Output drops to Y₁, below full employment. The gap between LRAS and Y₁ is the cyclical unemployment.'
            },
            {
              label: 'Labour demand falls',
              shifts: { AD: -120 },
              head: 'Wages are sticky, so the gap persists',
              body: 'Sticky wages mean the labour market does not self-correct – the gap persists until AD recovers.',
              analysis: 'Wages are sticky downward (Keynes) – unions resist cuts, contracts are fixed, workers refuse pay reductions. So the labour market does not self-correct. Cyclical unemployment persists at the lower output until AD recovers. Fiscal or monetary stimulus is needed.'
            }
          ]
        },
        { type: 'sectionHeader', icon: '🔗', label: 'THE EMPLOYMENT CHAIN' },
        { type: 'mechanismChain', steps: [
          { label: 'AD falls',             detail: 'C, I, G or X−M drops' },
          { label: 'Output falls',         detail: 'firms produce less' },
          { label: 'Firms cut production', detail: 'less labour needed' },
          { label: 'Labour demand falls',  detail: 'derived demand effect' },
          { label: 'Unemployment rises',   detail: 'cyclical unemployment' }
        ]},
        { type: 'sectionHeader', icon: '🛡️', label: 'POLICY RESPONSE' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue',  icon: '🏛️', head: 'Monetary policy', body: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.7;"><li>Lower interest rates → ↑ borrowing → ↑ C and ↑ I</li><li>Increases money supply (QE)</li><li>Boosts AD → output recovers → firms re-hire</li></ul>' },
          { type: 'tile', tone: 'amber', icon: '🏛️', head: 'Fiscal policy',   body: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.7;"><li>Increase government spending (↑ G)</li><li>Cut taxes → ↑ household disposable income</li><li>Multiplier effect amplifies the AD boost</li></ul>' }
        ]},
        { type: 'bigIdea', text: 'Cyclical unemployment is demand-deficient – the cure is to restore AD, not to retrain workers. That\'s why the wrong policy diagnosis (supply-side for a cyclical problem) wastes money and fails.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Always use the phrase <em>"labour is a derived demand"</em> when explaining why falling output raises unemployment. Combined with <strong>wage stickiness</strong>, this is the textbook Keynesian explanation.' }
      ]
    },

    /* ----- CARD 6 – Different causes, different cures ----- */
    {
      id: 'policy',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Different causes, different cures',
      lede: 'Unemployment has multiple causes, and each needs a different policy response. Policy only works well when the diagnosis is correct.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '🔒', text: 'The wrong toolkit wastes money and may not solve the problem.' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'rose',  icon: '📉', head: 'Cyclical',         body: 'Recession – weak AD short-run → Fiscal or monetary expansion.' },
          { type: 'tile', tone: 'rose',  icon: '🌀', head: 'Demand-deficient', body: 'Persistent weak AD (Keynesian) → Sustained stimulus + supply-side support to prevent hysteresis.' },
          { type: 'tile', tone: 'amber', icon: '🧩', head: 'Structural',       body: 'Skills or location mismatch → Retraining, apprenticeships, mobility grants, regional support.' },
          { type: 'tile', tone: 'blue',  icon: '🔍', head: 'Frictional',       body: 'Poor information and search time → JobCentres, job-matching platforms, better vacancy information.' },
          { type: 'tile', tone: 'green', icon: '⚖️', head: 'Real-wage',        body: 'Labour too expensive relative to equilibrium → Labour market reform, flexibility, lower non-wage costs.' },
          { type: 'tile', tone: 'purple', icon: '☀️', head: 'Seasonal',        body: 'Predictable swings in demand → Diversification, retraining, temporary support or off-season mobility.' }
        ]},
        { type: 'sectionHeader', icon: '🔧', label: "DON'T MIX UP THE CURES" },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'rose',  icon: '📉', head: 'Demand-side',         body: 'Best for weak aggregate demand.' },
          { type: 'tile', tone: 'amber', icon: '👤', head: 'Supply-side',          body: 'Best for mismatches in skills or location.' },
          { type: 'tile', tone: 'blue',  icon: 'ℹ️', head: 'Information',          body: 'Best for search friction and information gaps.' },
          { type: 'tile', tone: 'green', icon: '⚖️', head: 'Labour market reform', body: 'Best for wage rigidity and market rigidities.' }
        ]},
        { type: 'calloutStrip', tone: 'amber', icon: '⚠️', text: 'Retraining will not fix cyclical unemployment if firms still face weak demand.' },
        { type: 'bigIdea', text: 'Big idea: Policy should target the mechanism – demand weakness, mismatch, search frictions, wage rigidity, or seasonality.' },
        { type: 'examEdge', title: 'Exam edge', text: 'A strong judgement says why one policy is appropriate for one type of unemployment but weak for another.' }
      ]
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
          { type: 'tile', tone: 'blue',   icon: '📊', head: '1. Economic costs',         body: 'Lost GDP lowers living standards and future income.<div style="border-top:1px dashed #93C5FD;margin:10px 0 8px;"></div>Lower tax revenue and higher welfare spending strain public finances.' },
          { type: 'tile', tone: 'amber',  icon: '👥', head: '2. Social and personal costs', body: 'Unemployment brings mental-health strain, family stress and higher crime risk.<div style="border-top:1px dashed #FCD34D;margin:10px 0 8px;"></div>It can damage self-esteem and reduce confidence and aspirations.' },
          { type: 'tile', tone: 'green',  icon: '🔗', head: '3. Hysteresis',              body: 'Long unemployment weakens skills and attachment to the labour market.<div style="border-top:1px dashed #6EE7B7;margin:10px 0 8px;"></div>So temporary unemployment can become structural.' },
          { type: 'tile', tone: 'purple', icon: '🌍', head: '4. Wider macro effects',     body: 'Weakens the balance of payments and slows long-run growth.<div style="border-top:1px dashed #C4B5FD;margin:10px 0 8px;"></div>Can cause regional decline and put pressure on public finances.' }
        ]},
        { type: 'sectionHeader', icon: '🔗', label: 'THE HYSTERESIS CHAIN' },
        { type: 'mechanismChain', steps: [
          { label: 'Cyclical unemployment', detail: 'recession job losses' },
          { label: 'Skills atrophy',         detail: 'human capital decays' },
          { label: 'Employability falls',    detail: 'employers prefer others' },
          { label: 'Structural risk',        detail: 'permanent scarring' }
        ]},
        { type: 'calloutStrip', tone: 'amber', icon: 'ℹ️', text: 'Youth unemployment can have especially long-lasting scarring effects.' },
        { type: 'bigIdea', text: 'Big idea: The full cost of unemployment is larger than the lost output in the current year.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Use <strong>"hysteresis"</strong> to explain why prolonged cyclical unemployment can worsen the supply side of the economy.' }
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

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'Unemployment is not a silo – it connects to inflation, macro policy and long-run supply.' },
        { type: 'sectionHeader', icon: '🔭', label: 'THE PATHWAYS AHEAD' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',  icon: '📉', head: 'Inflation / Phillips curve', body: 'Short-run trade-off between lower unemployment and higher inflation.<div style="margin-top:12px;text-align:center;"><span style="border:1px solid #93C5FD;border-radius:16px;padding:3px 12px;font-size:11.5px;color:#2563EB;font-weight:700;">Overheating vs spare capacity</span></div>' },
          { type: 'tile', tone: 'amber', icon: '🏛️', head: 'Fiscal and monetary policy', body: 'Demand-side cures for cyclical unemployment – stabilise demand, close the output gap.<div style="margin-top:12px;text-align:center;"><span style="border:1px solid #FCD34D;border-radius:16px;padding:3px 12px;font-size:11.5px;color:#D97706;font-weight:700;">Counter-cyclical tools</span></div>' },
          { type: 'tile', tone: 'green', icon: '📈', head: 'Supply-side policy',          body: 'Structural cures via training, mobility and incentives to raise productivity and jobs.<div style="margin-top:12px;text-align:center;"><span style="border:1px solid #6EE7B7;border-radius:16px;padding:3px 12px;font-size:11.5px;color:#059669;font-weight:700;">Lift capacity, lower NAIRU</span></div>' }
        ]},
        { type: 'bigIdea', text: 'Core takeaway: Diagnose the cause, measure carefully, match the policy, and evaluate the trade-offs.' },
        { type: 'examEdge', title: 'Exam edge', text: 'The best essays move from diagnosis to policy, then evaluate whether the cure fits the cause.' }
      ]
    }

  ]
};

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0
   These questions used to live at /quiz/<topic>/<set> as a
   standalone shell. They now ride along with the Learn It data
   under the same window.ECONOS_QUIZ global. The /quiz/ URL
   contract is gone; the quiz is the natural finisher to the
   Learn It journey, so the data lives next to learn cards.
   ============================================================ */
/* ---- quiz-main.js (quiz pool, preserved from former /quiz/ shell) ---- */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Employment & Unemployment',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.routes.learn('employment-and-unemployment'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers types of unemployment, measurement, policy responses, and hysteresis',
    shortNames: [
      'Unemployment definition','Frictional','Structural','Cyclical','Hysteresis',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'The ILO definition classifies a person as unemployed if they are:',
        opts: [
          'Not in work and not looking for work',
          'Without a job but actively seeking and available for work',
          'Working part-time but wanting full-time work',
          'On a zero-hours contract with irregular hours'
        ],
        ans:  1,
        exp:  'The ILO (International Labour Organisation) standard defines unemployment as: without a job, available to start work within two weeks, and actively sought work in the past four weeks.'
      },
      {
        type: 'mcq',
        q:    'Frictional unemployment arises because:',
        opts: [
          'The economy is in a recession and firms are laying off workers',
          'Workers are between jobs and searching for new employment',
          'Workers\' skills no longer match the requirements of available jobs',
          'The minimum wage is set above the market-clearing wage'
        ],
        ans:  1,
        exp:  'Frictional unemployment is the temporary unemployment that occurs when workers transition between jobs. It is often considered inevitable and even healthy – it allows better job matching.'
      },
      {
        type: 'mcq',
        q:    'Structural unemployment is caused by:',
        opts: [
          'A general fall in aggregate demand reducing output',
          'Workers changing jobs in a healthy economy',
          'Changes in the structure of the economy making certain skills or industries obsolete',
          'Seasonal variation in demand for labour'
        ],
        ans:  2,
        exp:  'Structural unemployment arises when industries decline (e.g., manufacturing, mining) or technology replaces roles. Workers\' skills no longer match available vacancies – a supply-side mismatch that requires retraining.'
      },
      {
        type: 'mcq',
        q:    'Hysteresis in unemployment means:',
        opts: [
          'Unemployment always returns to its natural rate quickly after a shock',
          'Long-term unemployment causes skills to atrophy, permanently raising the natural rate',
          'Cyclical unemployment is always temporary',
          'The government can eliminate unemployment with enough spending'
        ],
        ans:  1,
        exp:  'Hysteresis means past events have persistent effects. Prolonged cyclical unemployment can become structural – workers lose skills and motivation, employers "scar" them by preferring recent graduates, raising the long-run natural rate permanently.'
      },
      {
        type: 'numeric_input',
        q:    'The labour force is 32 million. 1.6 million are unemployed. What is the unemployment rate (%)?',
        answer: 5,
        tolerance: 0,
        unit: '%',
        hint: 'Unemployment rate = (unemployed ÷ labour force) × 100.',
        workingSteps: ['Rate = (1.6m ÷ 32m) × 100 = 5%']
      },
      {
        type: 'categorise',
        q:    'Categorise each type of unemployment as demand-deficient or supply-side.',
        categories: ['Demand-deficient','Supply-side'],
        items: [
          { item: 'Cyclical unemployment from recession',          category: 'Demand-deficient' },
          { item: 'Structural unemployment from deindustrialisation',category: 'Supply-side' },
          { item: 'Recession-driven mass layoffs',                 category: 'Demand-deficient' },
          { item: 'Frictional unemployment between jobs',          category: 'Supply-side' },
          { item: 'Keynes\'s deficient effective demand',          category: 'Demand-deficient' },
          { item: 'Seasonal unemployment in tourism',              category: 'Supply-side' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each unemployment cause to its policy response.',
        pairs: [
          { cause: 'Cyclical unemployment from falling AD',         effect: 'Fiscal or monetary stimulus to boost demand' },
          { cause: 'Structural unemployment from skills mismatch',  effect: 'Investment in retraining and vocational education' },
          { cause: 'Frictional unemployment from poor job matching',effect: 'Improve job centres and labour market information' },
          { cause: 'Real wage unemployment above market-clearing',  effect: 'Reform minimum wage or union power' },
          { cause: 'Hysteresis raising long-run natural rate',      effect: 'Active labour market policies targeting long-term unemployed' },
          { cause: 'Geographical immobility of labour',             effect: 'Housing subsidies and relocation support' }
        ]
      },
      {
        type: 'mcq',
        q:    'Which is the odd one out?',
        opts: ['Frictional unemployment','Structural unemployment','Cyclical unemployment','Deflation'],
        ans:  3,
        exp:  'Frictional, structural, and cyclical are all types of unemployment. Deflation is a macroeconomic price-level concept – it can cause unemployment but is not itself a type of unemployment.'
      },
      {
        type: 'data_table',
        q:    'Use the data to calculate the unemployment rate for Country B.',
        tableHeaders: ['Country','Working-age population (m)','Employed (m)','Unemployed (m)','Inactive (m)'],
        tableData: [
          ['A','50','38','2','10'],
          ['B','40','29','3','8'],
          ['C','60','48','4','8'],
          ['D','30','22','1','7']
        ],
        opts: ['7.5%','9.4%','10%','11.2%'],
        ans:  1,
        exp:  'Labour force = Employed + Unemployed = 29 + 3 = 32m. Unemployment rate = (3 ÷ 32) × 100 = 9.375% ≈ 9.4%.'
      },
      {
        type: 'match_pairs',
        q:    'Match each unemployment concept to its description.',
        pairs: [
          { a: 'Frictional',           b: 'Short-term unemployment while searching for a new job' },
          { a: 'Structural',           b: 'Skills or location mismatch due to changing economic structure' },
          { a: 'Cyclical',             b: 'Unemployment caused by a fall in aggregate demand' },
          { a: 'Seasonal',             b: 'Regular fluctuations in employment due to time of year' },
          { a: 'Hysteresis',           b: 'Long-term unemployment becoming permanent, raising NAIRU' },
          { a: 'Natural rate',         b: 'Unemployment rate when economy is at full employment (NAIRU)' }
        ]
      }
    ]
  };

})();
