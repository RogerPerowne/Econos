/* ============================================================
   ECONOS — content data for unemployment
   7 cards · revision-tight · exam-edge gems flagged
   Edexcel Theme 2.1.3
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'unemployment',
  topicNum: '2.1.3',
  theme: 'Theme 2 · The National and Global Economy',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Employment & Unemployment',
  estTime: '9-11 minutes',
  goal: 'Lock in the types, the diagnostic, and the cure',

  intro: {
    heroKey: 'heroUnemployment',
    summary: "Three labour-market states. Five types. One diagnostic move. Lock these in and every unemployment essay falls into place.",
    doInThis: 'Recap the classification, the five types, the diagnostic, why cyclical unemployment persists — plus a 25-mark essay scaffold on reducing unemployment.',
    outcomes: [
      'Classify employed/unemployed/inactive',
      'Match each type to its cure',
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

    /* ----- CARD 1 — Framing: Three labour-market states ----- */
    {
      id: 'classification',
      template: 'framing',
      diagramKey: 'labourClassification',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Three labour-market states',
      lede: "The working-age population splits into three buckets. Mixing them up is the most-marked-down error in labour-market questions.",
      branches: [
        { tone: 'green',  label: 'Employed',                sub: '<strong>Done at least 1 hour of paid work</strong> in the last week, OR temporarily away from a job. Includes part-time, zero-hours, and self-employed.' },
        { tone: 'amber',  label: 'Unemployed',              sub: '<strong>Not in work BUT actively seeking</strong> and able to start within 2 weeks. Discouraged workers are NOT here — they\'re inactive.' },
        { tone: 'blue',   label: 'Economically Inactive',   sub: '<strong>Not working AND not seeking work.</strong> Includes students, retirees, the long-term sick, carers, discouraged workers, and housewives/husbands.' }
      ],
      examEdge: {
        title: "The 'inactive' trap",
        text: 'A* answers correctly classify <strong>discouraged workers</strong>, <strong>long-term sick</strong>, and <strong>students</strong> as inactive — not unemployed. The ILO definition is strict: actively seeking AND able to start in two weeks.'
      },
      keyTakeaway: {
        title: 'Why this matters',
        text: "If the unemployment rate falls but inactivity rises, that's not progress — it's people giving up. Top answers watch BOTH numbers, not just the headline rate."
      }
    },

    /* ----- CARD 2 — Measuring unemployment: ILO vs Claimant Count ----- */
    {
      id: 'measurement',
      template: 'paired',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Measuring unemployment',
      lede: "Two measures, different stories. The gap between them is the gem most students miss.",
      pairs: [
        {
          tone: 'blue',
          label: 'ILO / Labour Force Survey',
          drivers: [
            'Monthly survey of ~40,000 UK households',
            'International standard — comparable across countries',
            'Captures all jobseekers, including those not claiming',
            'Usually HIGHER than the claimant count'
          ],
          example: '<strong>UK LFS rate:</strong> typically ~4-5% in recent years. Survey-based, so subject to sampling error (~0.3pp margin).'
        },
        {
          tone: 'purple',
          label: 'Claimant Count',
          drivers: [
            'Counts those claiming Jobseekers Allowance / Universal Credit',
            'Administrative data — no sampling error',
            'Excludes those over 18 in education, partner-earning households, voluntary unemployed',
            'Usually LOWER than the ILO measure'
          ],
          example: "<strong>2020 COVID shock:</strong> claimant count <em>doubled</em> to 2.5m as eligibility expanded. The gap between ILO and claimant count narrowed dramatically."
        }
      ],
      examEdge: {
        title: 'Cite the gap',
        text: "A* answers reference the gap between ILO and claimant count. The claimant count is <strong>politically convenient</strong> (lower number) but the ILO is the international standard. Showing you know which is which signals genuine literacy."
      },
      policy: {
        title: 'Why governments care',
        text: 'Different measures support different narratives. Governments often quote whichever number flatters their record. Top answers acknowledge the limitations of both — claimant count underestimates; ILO has sampling error.'
      }
    },

    /* ----- CARD 3 — The five types of unemployment ----- */
    {
      id: 'types',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'The five types of unemployment',
      lede: "Each type has a different cause — and therefore a different cure. Pairing them up is the analytical move examiners reward.",
      mechanisms: [
        {
          num: '1',
          tone: 'blue',
          title: 'Frictional (supply-side)',
          text: 'Short-term unemployment <strong>between jobs</strong>. Caused by imperfect information and time-lag in job search. Always present — even at "full employment".'
        },
        {
          num: '2',
          tone: 'green',
          title: 'Structural (supply-side)',
          text: '<strong>Skills mismatch</strong> with available jobs. Caused by deindustrialisation, technology, globalisation. Long-term — workers need retraining or relocation.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Seasonal (supply-side)',
          text: 'Predictable variation in demand for labour. Fruit pickers, tourism workers, Christmas retail. Short-term and cyclical within the year.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'Real-wage (classical)',
          text: 'Wages set <strong>above</strong> the market-clearing level — by unions, minimum wage, or labour rigidities. Excess supply of labour at that wage.'
        }
      ],
      examEdge: {
        title: 'Add cyclical as the fifth',
        text: 'A 5th type — <strong>cyclical unemployment</strong> — comes from <em>demand-side</em> shocks (the big one, covered on Card 5). The first four are supply-side; cyclical is demand-side. That distinction is the foundation of policy choice.'
      },
      connection: {
        title: 'Why this matters',
        text: 'Each type has different DURATION and different CURE. Frictional is short and self-correcting; structural is long and needs retraining; cyclical is medium-term and needs demand stimulus. Mixing them up is a classic essay error.'
      }
    },

    /* ----- CARD 4 — Diagnose the type ----- */
    {
      id: 'diagnose',
      template: 'diagnose',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Diagnose the type',
      lede: 'Identify the type from the symptoms. Get this right and your policy answer writes itself.',
      table: {
        headers: ['Type', 'Duration', 'Market signal', 'Policy response'],
        rows: [
          ['Frictional', 'Short',    'Job search delay',      'Improve information'],
          ['Structural', 'Long',     'Skills mismatch',       'Retraining / mobility'],
          ['Seasonal',   'Short',    'Predictable demand cycle', 'Diversification'],
          ['Real-wage',  'Persistent', 'Wage rigidity',       'Improve labour flexibility'],
          ['Cyclical',   'Medium',   'AD shock',              'Fiscal / monetary stimulus']
        ]
      },
      scenarios: {
        title: 'Diagnose these',
        items: [
          {
            label: 'A',
            text: 'Steelworkers laid off in 2010s as the UK industry shrinks; many lack tech skills demanded by growing sectors.',
            answer: 'Structural — skills mismatch needs retraining, not stimulus',
            tone: 'green'
          },
          {
            label: 'B',
            text: 'UK unemployment rises from 5% to 8% in 2009 as GDP falls 4%; mass layoffs across most sectors.',
            answer: 'Cyclical — AD-driven, fiscal/monetary stimulus appropriate',
            tone: 'amber'
          },
          {
            label: 'C',
            text: 'Fruit pickers in Lincolnshire out of work November through February every year.',
            answer: 'Seasonal — diversification, off-season retraining',
            tone: 'purple'
          }
        ]
      },
      examEdge: {
        title: 'Name the type first',
        text: 'Open every unemployment essay with: <em>"This is primarily [type] unemployment because…"</em> Naming the type before discussing policy is the analytical step that lifts answers from B to A*.'
      }
    },

    /* ----- CARD 5 — Cyclical unemployment & labour as derived demand ----- */
    {
      id: 'cyclical',
      template: 'ad-interactive',
      diagramKey: 'adAsRecession',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Cyclical unemployment & derived demand',
      lede: "The big one. Labour demand is DERIVED from output demand. When AD falls, labour demand falls — and wages don't fix it automatically.",
      steps: [
        {
          key: 'base',
          label: 'Full employment',
          text: 'AD meets AS at full employment output <strong>Y<sub>FE</sub></strong>. Labour markets clear — unemployment is at the natural rate (only frictional + structural + seasonal). The price level is P₁.'
        },
        {
          key: 'extension',
          label: 'AD falls (recession)',
          text: 'AD shifts LEFT — fall in C, I, G or (X−M). Demand for goods falls → demand for LABOUR falls (it\'s derived). Output drops to Y₁, below Y<sub>FE</sub>. <strong>The gap (Y<sub>FE</sub> − Y₁) is the cyclical unemployment.</strong>'
        },
        {
          key: 'shift',
          label: "Why wages don't fix it (Keynes)",
          text: 'Classical theory says wages should fall, re-clearing the market. <strong>Keynes disagreed:</strong> nominal wages are STICKY downward. Unions resist cuts; contracts are fixed; workers refuse pay cuts. So the unemployment <em>persists</em> — and fiscal/monetary stimulus is needed to shift AD back.'
        }
      ],
      examEdge: {
        title: 'Labour is a DERIVED demand',
        text: "A* answers state this explicitly: <em>'Because labour is a derived demand, a fall in AD reduces demand for labour and causes cyclical unemployment.'</em> Combined with <strong>wage stickiness</strong>, this is the textbook Keynesian explanation."
      }
    },

    /* ----- CARD 6 — Policy responses: not all unemployment is equal ----- */
    {
      id: 'policy',
      template: 'paired',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Different causes, different cures',
      lede: "The matrix that organises every unemployment policy essay. Match the toolkit to the type — using the wrong one is an A* trap.",
      pairs: [
        {
          tone: 'green',
          label: 'Supply-side toolkit',
          drivers: [
            'Education & retraining — for STRUCTURAL',
            'Job search support, info — for FRICTIONAL',
            'Mobility grants, housing — for STRUCTURAL',
            'NMW reform, union legislation — for REAL-WAGE',
            'Diversification incentives — for SEASONAL'
          ],
          example: '<strong>Restart Scheme (2021):</strong> long-term unemployed get intensive support — targets structural and frictional. <strong>Apprenticeship Levy (2017):</strong> tackles structural skills gaps.'
        },
        {
          tone: 'blue',
          label: 'Demand-side toolkit',
          drivers: [
            'Fiscal stimulus: ↑G or ↓T to lift AD',
            'Monetary loosening: ↓ interest rates → ↑C, ↑I',
            'Both shift AD right — output recovers, jobs return',
            'Targets CYCLICAL unemployment only'
          ],
          example: '<strong>2009 stimulus:</strong> BoE cut rates to 0.5%, QE began. Combined with fiscal stimulus, helped recovery. <strong>2020 furlough scheme:</strong> direct wage subsidies prevented mass unemployment.'
        }
      ],
      examEdge: {
        title: 'Wrong toolkit, wrong answer',
        text: 'Using <strong>fiscal stimulus to fix structural unemployment</strong> is a classic error. Stimulus raises AD but the unemployed lack the SKILLS for the new jobs — so inflation rises without unemployment falling. A* answers match cure to cause.'
      },
      policy: {
        title: 'The political reality',
        text: 'Politicians prefer demand-side policies (visible, fast) over supply-side (slow, expensive). But for structural unemployment, only supply-side works in the long run. Recognising this trade-off is itself an analytical move.'
      }
    },

    /* ----- CARD 7 — Consequences & hysteresis ----- */
    {
      id: 'consequences',
      template: 'deflation',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Consequences: not just lost output',
      lede: "Unemployment isn't just an economic loss. The costs are economic, social, personal — and they compound through hysteresis.",
      mechanismsTitle: 'Four ways unemployment damages the economy',
      mechanisms: [
        {
          icon: '💷',
          title: 'Economic costs',
          text: 'Lost output (below the PPF), lower tax revenue, higher welfare spending. The fiscal hit can be ~£10-15bn per percentage point of UK unemployment annually.'
        },
        {
          icon: '🧠',
          title: 'Social & personal costs',
          text: 'Mental health deterioration, family strain, loss of identity and status. Long-term unemployed face significantly worse health and life outcomes.'
        },
        {
          icon: '⏳',
          title: 'Hysteresis',
          text: 'Long-term unemployment damages future employability — skills atrophy, networks shrink, employers discriminate. A short shock can leave <em>permanent</em> scarring on labour-market participation.'
        },
        {
          icon: '📉',
          title: 'Wider macro effects',
          text: 'Lost consumption (C falls) → AD falls → further unemployment. The multiplier works in reverse. Plus fiscal pressure: higher welfare + lower tax = bigger deficit, constraining future policy.'
        }
      ],
      examples: {
        title: 'Episodes to know',
        items: [
          { period: '1980s UK',         text: 'mass structural unemployment from deindustrialisation; 3m+ unemployed; long-term scars in north of England.' },
          { period: '2008-09 recession', text: 'UK unemployment rose from 5% to 8%; recovery took ~5 years. Cyclical, but hysteresis effects lingered.' },
          { period: '2020 COVID shock', text: 'furlough scheme prevented mass cyclical unemployment; claimant count doubled briefly but recovered quickly.' }
        ]
      },
      examEdge: {
        title: 'Mention hysteresis',
        text: "A* answers cite <strong>hysteresis</strong> explicitly. It's the term for the long-term scarring effect — short-term unemployment becoming permanent through skill atrophy and stigma. Using the word signals economic literacy."
      },
      bridge: {
        title: "Where to next",
        text: "You've got the conceptual map. Now apply it: try the <strong>policy diagnostic simulator</strong> in <em>Land it</em> — given a scenario, pick the right toolkit and explain why."
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }

  ]
};
