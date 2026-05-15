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
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'unemployment-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      question: 'Evaluate the view that supply-side policies are the most effective way to reduce unemployment. [25 marks]',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define unemployment and identify the main types. Explain why the correct policy depends on which type of unemployment dominates. Signal a conditional conclusion.',
          hint: 'Unemployment = actively seeking work but not employed. Types: cyclical (demand-deficient), structural (skills/location mismatch), frictional (transitional), seasonal, classical (real wages above clearing). Different types → different cures: supply-side for structural/frictional, demand-side for cyclical.',
          model: 'Unemployment describes the situation in which individuals of working age actively seek employment but cannot find it. The appropriate policy response depends critically on the type of unemployment: cyclical (demand-deficient) unemployment, caused by insufficient aggregate demand, requires demand-management policies; structural unemployment, caused by skill or geographical mismatches between workers and available jobs, responds to supply-side interventions targeting labour market skills and mobility; and frictional unemployment — the temporary period between jobs — is minimised by improving information flows and job-matching efficiency. Supply-side policies aim to reduce the natural rate of unemployment (NRU) — the unemployment rate consistent with stable inflation — by improving the flexibility, skills, and productivity of the labour force. Their effectiveness as the "most effective" approach depends on the relative importance of structural versus cyclical unemployment in any given context, the time horizon of the policy, and the complementarity with demand-side measures.'
        },
        {
          type: 'analysis',
          label: 'Analysis — how supply-side policies reduce structural and frictional unemployment',
          prompt: 'Explain education/training, welfare reform, and labour market flexibility policies with specific UK examples.',
          hint: 'Education and training: skills bootcamps, apprenticeships, T-Levels → reduce structural mismatch. Welfare reform: UC work requirements reduce unemployment trap (but poverty trap remains). Labour flexibility: lower employment protection → easier hiring/firing → lower frictional unemployment (UK jobcentres, Universal Credit). NLW: some argue reduces long-run employment, others disagree.',
          model: 'Supply-side policies address the structural and frictional components of unemployment by improving the match between workers\' skills and employers\' requirements. Education and training investment — skills bootcamps (funded by HMRC, focusing on digital, engineering, and construction), apprenticeships (3 million starts planned 2024-27), and T-Level technical qualifications — directly reduces the mismatch between available skills and job vacancies. The UK\'s persistent skills shortages in construction, healthcare, and technology represent structural unemployment that demand stimulus cannot resolve: no amount of fiscal expansion creates qualified software engineers or NHS nurses in the short run. Welfare reform, through Universal Credit\'s conditionality requirements (job-seeking evidence, work coach meetings), aims to reduce frictional unemployment by shortening job searches and maintaining labour market attachment. Reducing the replacement ratio (the ratio of out-of-work benefits to in-work income) — by making work more financially rewarding relative to inactivity — shifts the labour supply curve rightward, reducing equilibrium unemployment and the NAIRU. Labour market flexibility reforms — reducing employment protection legislation, trade union power, and occupational licensing barriers — lower the cost of hiring and firing, enabling firms to match workers to jobs more rapidly and reducing the natural rate of unemployment. These policies work most effectively when structural unemployment dominates — as in the post-deindustrialisation UK regions (South Wales, North East) where the problem is not lack of demand but mismatch of skills and location.'
        },
        {
          type: 'counter',
          label: 'Counter-argument — demand-side policies for cyclical unemployment',
          prompt: 'Explain why fiscal/monetary expansion is more effective when cyclical unemployment dominates. Reference the 2009 crisis and COVID-19.',
          hint: 'Cyclical unemployment: caused by AD falling (2008-09 recession, COVID). Supply-side policies cannot cure this — training a worker does not create a job if firms have no demand. Fiscal stimulus (furlough scheme, Job Retention Scheme) directly maintained employment during COVID. Monetary policy rate cuts → investment → employment. Hysteresis: cyclical → structural if demand deficiency persists too long.',
          model: 'When cyclical unemployment dominates — caused by a collapse in aggregate demand — supply-side policies are largely ineffective. Training workers or reducing employment protection cannot create jobs when firms have insufficient sales to justify hiring: the constraint is demand, not supply. The 2008-09 recession demonstrated this: structural programmes were inadequate in the face of the deepest demand collapse since the 1930s. The UK\'s Keynesian fiscal response (the 2009 VAT cut, public sector job protection) and monetary easing (Bank Rate to 0.5%, then QE) were essential. The COVID-19 furlough scheme — which protected approximately 11 million jobs at peak cost of ~£70bn — provided an example of demand-side employment protection that supply-side training programmes could not have replicated. A critical concern is hysteresis: if cyclical unemployment persists for an extended period, workers lose skills and become detached from the labour market — cyclical unemployment becomes structural through the scarring effect. This makes early demand-side intervention particularly important: failure to prevent prolonged cyclical unemployment creates the structural unemployment that supply-side policies must then address.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — context determines the optimal policy mix',
          prompt: 'Evaluate what determines the relative effectiveness of supply-side vs demand-side approaches. Consider UK-specific factors: productivity puzzle, regional unemployment, NMW effects.',
          hint: 'UK post-2008: productivity puzzle (growth stagnated despite near-record employment) suggests structural not cyclical. But regional unemployment divergence (6%+ in NE vs 2% in London/SE) has demand AND supply components. Long lags of supply-side policies (training takes years) vs faster demand-side effects. Complementarity: supply-side + demand works better together than either alone.',
          model: 'The relative effectiveness of supply-side versus demand-side policies depends on the composition of unemployment, the economy\'s position in the business cycle, and the time horizon considered. In the UK\'s post-2008 context, the "productivity puzzle" — strong employment growth alongside near-zero productivity growth — suggests that labour demand has been met by absorbing previously underemployed workers into lower-productivity roles rather than structural skills mismatch being the primary constraint. This complicates the supply-side diagnosis: if productivity is the underlying problem, improving skills is necessary but must be accompanied by effective demand for higher-productivity work. Regional unemployment patterns offer a further nuance: the North East\'s higher unemployment (~5%) compared to London (~3%) reflects both structural factors (post-industrial skills mismatch) and demand deficiency (lower business density, weaker local multipliers). Supply-side policies alone cannot close a regional demand gap — place-based fiscal investment (through local enterprise zones, infrastructure) is also required. A critical practical limitation of supply-side policies is their time horizon: meaningful skills reform takes 5-10 years to affect labour market outcomes. During that period, cyclical or frictional unemployment must be managed by demand and information policy. The IMF and OECD evidence consistently shows that the most effective unemployment reduction occurs when supply-side reforms are implemented during periods of positive economic growth when demand-side conditions support job creation — neither tool works optimally in isolation.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Make a conditional judgement: when are supply-side policies most effective? When is demand-side essential? What is the optimal framework?',
          hint: 'Supply-side most effective when: structural/frictional unemployment dominates, economy near capacity, long-run sustainable employment is the goal. Demand-side essential when: cyclical unemployment dominates, ZLB or recession context. Optimal framework: demand-side to maintain employment in downturns + supply-side to reduce NRU and improve matching over the long run.',
          model: 'Supply-side policies are not the most effective approach to reducing unemployment in all circumstances, but they are the most effective tool for addressing the structural and frictional components of unemployment that demand management cannot cure. Their superiority is clearest when the economy is near capacity — when cyclical unemployment is low and the dominant problem is skills mismatch, regional immobility, or labour market rigidities that prevent efficient worker-job matching. In these conditions, fiscal stimulus would be inflationary rather than employment-creating; training, flexibility reform, and welfare reform are the appropriate interventions. However, when cyclical unemployment is significant — as in recessions or the COVID-19 shock — demand-side policies (fiscal stimulus, automatic stabilisers, monetary expansion) are essential and supply-side policies alone are inadequate. The most effective unemployment policy framework combines both: automatic stabilisers and countercyclical fiscal/monetary policy maintain employment through the business cycle, while sustained supply-side investment in education, training, and labour market flexibility progressively reduces the natural rate of unemployment and expands the productive capacity of the labour market. Neither tool alone — supply-side without demand management, or demand stimulus without structural reform — achieves the full employment and productivity outcomes that a coordinated approach can deliver.'
        }
      ]
    }
  ]
};
