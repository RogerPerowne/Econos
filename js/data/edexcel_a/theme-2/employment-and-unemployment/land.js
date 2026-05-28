/* ============================================================
   ECONOS – Land It · consolidated section data
   Concatenated from per-section files at v0.4.0. Quiz pools
   from the former quiz-*.js shells are folded in here too —
   the questions live on as Land It content.
   ============================================================ */

/* ---- land-complete.js ---- */
window.ECONOS_LAND_COMPLETE = {
  topic:   'Unemployment',
  nextUrl: '/',

  sections: {
    A: { label: 'Section A', sublabel: 'Short questions',    color: '#ec2d68' },
    B: { label: 'Section B', sublabel: 'Extended response',  color: '#f59e0b' },
    C: { label: 'Section C', sublabel: 'Essay',              color: '#2563eb' }
  },

  nextCard: {
    icon:  '&#x1F680;',
    title: 'What to do next',
    text:  'Compare your written answers with the model responses. Check whether you correctly identified the type of unemployment before prescribing policy &#8211; this is the most common error in this topic. Note where your chain of analysis could be extended and whether your evaluation reached a clear supported judgement.'
  }
};

/* ---- land-intro.js ---- */
window.ECONOS_LAND_INTRO = {
  topic:        'Unemployment',
  sectionA: {
    description: 'Short data-response questions worth 5 marks each. Select how many to include in your session.'
  },

  sectionB: {
    description: 'Each mark value represents a different question style. Select one or more to practise in this session.',
    options: [
      { id: 'b5',   label: '5 marks',  marks: 5  },
      { id: 'b8',   label: '8 marks',  marks: 8  },
      { id: 'b12',  label: '12 marks', marks: 12 },
      { id: 'none', label: 'Skip',     marks: 0  }
    ]
  },

  sectionC: {
    description: 'A 25-mark essay question. In the exam you choose from two options. In Land It you practice one.'
  },

  trains: [
    'Applying the types of unemployment to data and extracts',
    'Analysing the causes and consequences of unemployment using AD/AS',
    'Evaluating demand-side vs supply-side policy responses',
    'Practising extended writing under exam-style time pressure'
  ],

  tip: 'Always distinguish the TYPE of unemployment before prescribing policy. Cyclical unemployment requires demand-side stimulus. Structural unemployment requires supply-side retraining. The wrong policy for the type is a classic evaluation trap.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                     }
  ]
};

/* ---- land-section-a.js ---- */
window.ECONOS_LAND_SECTION_A = {
  topic:        'Unemployment',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.routes.land('intro'),

  questions: [

    /* ── Q1 – Measuring unemployment ─────────────────────────── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'Measuring unemployment',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%', label: 'UK unemployment rate (ILO, 2024 Q1)', value: '4.2%'     },
          { color: 'rose',  icon: '%', label: 'UK youth unemployment rate (16-24)',   value: '13.2%'    },
          { color: 'green', icon: '%', label: 'Economic inactivity rate',             value: '21.8%'    },
          { color: 'blue',  icon: 'm', label: 'Claimant count (JSA/UC claimants)',    value: '1.65m'    }
        ]
      },

      parts: [
        {
          id:     'q1a',
          letter: 'a',
          marks:  1,
          type:   'mcq',
          stem:   'The claimant count and the ILO measure of unemployment often differ. Which of the following best explains why the ILO measure is generally higher than the claimant count?',
          options: [
            { id: 'opt-a', text: 'The claimant count includes people who are economically inactive'          },
            { id: 'opt-b', text: 'The ILO measure includes people seeking work but not claiming benefits'    },
            { id: 'opt-c', text: 'The ILO measure excludes part-time workers from the labour force'         },
            { id: 'opt-d', text: 'The claimant count covers a wider age range than the ILO measure'         }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The ILO measure counts everyone without work who is actively seeking and available for work, regardless of whether they claim benefits. The claimant count only covers those claiming JSA or Universal Credit &#8212; it misses those who are not entitled to or do not claim benefits.',
          feedbackWrong:   'The correct answer is B. The ILO Labour Force Survey counts all people who are out of work, actively seeking work, and available to start within two weeks &#8212; even if they receive no benefits. Many people are not entitled to claim or choose not to, so the claimant count is usually lower.'
        },
        {
          id:          'q1b',
          letter:      'b',
          marks:       4,
          type:        'freetext',
          stem:        'Explain two limitations of using the unemployment rate as a measure of labour market performance.',
          hint:        '4-mark response &#8212; identify two distinct limitations and develop each with explanation.',
          modelAnswer: 'First, the unemployment rate excludes the economically inactive &#8212; those who are neither working nor seeking work. The data shows an economic inactivity rate of 21.8%, far higher than the unemployment rate of 4.2%. If large numbers of discouraged workers have given up looking for work, the unemployment rate understates the true weakness of the labour market. Second, the unemployment rate does not capture underemployment &#8212; people working part-time who would prefer full-time work, or those in jobs well below their skill level. A low unemployment rate with widespread underemployment may still signal labour market inefficiency, as productive capacity is not being fully utilised.'
        }
      ]
    },

    /* ── Q2 – Types of unemployment ──────────────────────────── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'Types of unemployment',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from a UK government skills strategy report, 2023',
        text:   'The collapse of traditional industries &#8212; coal mining, steel production, and textile manufacturing &#8212; across the North of England during the 1980s and 1990s left many communities with persistently high unemployment. Workers who had spent decades developing industry-specific skills found these skills had no value in the emerging service economy. Three decades later, regional unemployment disparities between London and former industrial areas persist, despite overall UK unemployment falling to historically low levels.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain why the type of unemployment described is difficult to reduce through demand-side macroeconomic policies.',
          hint:        '4-mark response &#8212; identify the type of unemployment, explain its cause, and explain why demand-side policies are insufficient.',
          modelAnswer: 'The extract describes structural unemployment &#8212; unemployment caused by a long-run mismatch between workers\' skills and the skills demanded by employers in the economy. Workers who developed coal mining or steelmaking skills found these industry-specific skills had no value in the service economy. Demand-side policies such as lower interest rates or higher government spending increase aggregate demand across the economy, raising output and employment in expanding sectors. However, they cannot address the skills mismatch at the heart of structural unemployment &#8212; even if there are job vacancies in financial services or technology, former industrial workers lack the qualifications and training to fill them. The persistence of regional disparities three decades later demonstrates that demand stimulus alone is insufficient when the problem is a structural skills gap rather than a deficiency of aggregate demand.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'A worker who is between jobs and spending time searching for a position that best matches their skills is best described as experiencing which type of unemployment?',
          options: [
            { id: 'opt-a', text: 'Cyclical unemployment'    },
            { id: 'opt-b', text: 'Structural unemployment'  },
            { id: 'opt-c', text: 'Frictional unemployment'  },
            { id: 'opt-d', text: 'Seasonal unemployment'    }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. Frictional unemployment occurs when workers voluntarily move between jobs and take time to search for the best match. It is a normal feature of a dynamic labour market.',
          feedbackWrong:   'The correct answer is C &#8212; Frictional unemployment. The worker is between jobs by choice, searching for the best match. Cyclical unemployment is caused by recession; structural unemployment by skills mismatch between sectors; seasonal unemployment by predictable seasonal changes in demand.'
        }
      ]
    },

    /* ── Q3 – Costs of unemployment ──────────────────────────── */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'Economic and social costs of unemployment',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '&#163;', label: 'Annual JSA/UC cost per claimant',        value: '&#163;5,200'   },
          { color: 'rose',  icon: '&#163;', label: 'Estimated annual tax revenue lost per unemployed worker', value: '&#163;8,400' },
          { color: 'blue',  icon: '%',      label: 'UK NEET rate (16-24, not in education, employment or training)', value: '12.2%' },
          { color: 'green', icon: '%',      label: 'Hysteresis effect: long-term unemployed re-entering work within 1 year', value: '28%' }
        ]
      },

      parts: [
        {
          id:          'q3a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain two economic costs of unemployment to the government.',
          hint:        '4-mark response &#8212; use specific data to identify and explain two distinct economic costs.',
          modelAnswer: 'First, unemployment imposes a direct fiscal cost on the government through benefit payments. The data shows a JSA/Universal Credit cost of &#163;5,200 per claimant annually. With 1.65 million claimants, total benefit expenditure exceeds &#163;8.5 billion per year &#8212; a significant call on public spending that must be funded through taxation or borrowing. Second, unemployment reduces government tax revenues. The data shows an estimated &#163;8,400 in lost tax revenue per unemployed worker, representing forgone income tax and National Insurance contributions. Combining benefit costs and forgone revenue, the net fiscal cost per unemployed person approaches &#163;13,600 annually, placing severe pressure on the government&#39;s fiscal position and reducing the resources available for public services.'
        },
        {
          id:     'q3b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which term describes the process by which long-term unemployment permanently reduces a worker\'s human capital and employability, making future unemployment more likely?',
          options: [
            { id: 'opt-a', text: 'The accelerator effect'    },
            { id: 'opt-b', text: 'Hysteresis'                },
            { id: 'opt-c', text: 'Creative destruction'      },
            { id: 'opt-d', text: 'Structural adjustment'     }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Hysteresis describes how a cyclical rise in unemployment can become permanent &#8212; prolonged unemployment erodes skills, weakens networks and signals poor employability, reducing the NAIRU and making high unemployment self-sustaining.',
          feedbackWrong:   'The correct answer is B &#8212; Hysteresis. Prolonged unemployment damages workers\' human capital: skills atrophy, contacts are lost and employers view long gaps negatively. This raises the natural rate of unemployment even after the original cyclical shock has passed.'
        }
      ]
    },

    /* ── Q4 – The Phillips curve ──────────────────────────────── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'The Phillips curve trade-off',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from the Bank of England Monetary Policy Report, 2023',
        text:   'The Bank of England faces a difficult balancing act. Raising interest rates further to reduce persistent above-target inflation risks tipping the economy into recession and pushing unemployment significantly higher. The MPC must judge whether the costs of higher unemployment in the short run are outweighed by the benefits of restoring price stability. Some members argue that maintaining tight monetary policy is necessary to prevent inflation expectations becoming unanchored; others caution that the labour market is already showing signs of softening, with vacancies falling and pay growth slowing.'
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain the short-run trade-off between inflation and unemployment that the Bank of England faces.',
          hint:        '4-mark response &#8212; reference the Phillips curve, explain the mechanism linking monetary tightening to unemployment, and use the extract.',
          modelAnswer: 'The extract illustrates the short-run Phillips curve trade-off: lower inflation can be achieved by raising unemployment, and vice versa. The Bank of England&#39;s tool is the Bank Rate &#8212; raising it increases borrowing costs, reduces consumer spending and business investment, and shifts aggregate demand to the left. Lower AD reduces both inflationary pressure (firms compete harder for customers) and employment (firms produce less output and shed labour). The extract shows this dilemma clearly: further rate rises would cool inflation but risk recession and &#8220;significantly higher unemployment.&#8221; The MPC must weigh these costs against the benefit of restoring the 2% target. The extract also hints at a longer-run consideration: if inflation expectations become unanchored, the Phillips curve shifts outward, making future disinflation even more painful &#8212; this provides the MPC&#39;s case for tolerating short-run unemployment costs now to avoid worse trade-offs later.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'In the long run, the Phillips curve is generally considered to be:',
          options: [
            { id: 'opt-a', text: 'Downward-sloping &#8212; a permanent trade-off exists between inflation and unemployment' },
            { id: 'opt-b', text: 'Upward-sloping &#8212; higher inflation causes higher unemployment in the long run'       },
            { id: 'opt-c', text: 'Vertical at the natural rate of unemployment &#8212; no permanent trade-off exists'       },
            { id: 'opt-d', text: 'Horizontal &#8212; unemployment is unaffected by the inflation rate in the long run'     }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. The long-run Phillips curve (LRPC) is vertical at the natural rate of unemployment (NAIRU). Any attempt to push unemployment below NAIRU causes accelerating inflation as workers and firms adjust their expectations upward, but unemployment returns to NAIRU in the long run.',
          feedbackWrong:   'The correct answer is C. The Friedman-Phelps natural rate hypothesis holds that in the long run, the economy returns to the NAIRU regardless of inflation. Attempts to permanently reduce unemployment below NAIRU simply raise inflation without affecting long-run unemployment &#8212; making the LRPC vertical.'
        }
      ]
    },

    /* ── Q5 – Supply-side policies to reduce unemployment ────── */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'Supply-side policies to reduce unemployment',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%', label: 'UK apprenticeship starts (2022-23)',        value: '0.7m'   },
          { color: 'green', icon: '%', label: 'Employment rate of apprenticeship completers after 6 months', value: '84%' },
          { color: 'rose',  icon: '%', label: 'Long-term unemployment (12+ months)',       value: '24.9% of unemployed' },
          { color: 'blue',  icon: '%', label: 'Employer-funded training (% of firms providing it)', value: '47%' }
        ]
      },

      parts: [
        {
          id:          'q5a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain how investment in education and training can reduce structural unemployment.',
          hint:        '4-mark response &#8212; link skills investment to the skills mismatch that causes structural unemployment, using specific data where relevant.',
          modelAnswer: 'Structural unemployment arises from a mismatch between workers\' skills and the skills required by employers in growing sectors. Investment in education and training directly addresses this by reskilling workers and making their human capital relevant to labour demand. The data shows that 84% of apprenticeship completers find employment within 6 months, demonstrating the effectiveness of targeted vocational training in converting unemployed individuals into employable workers. With 24.9% of unemployed workers in long-term unemployment, where skills atrophy is severe, targeted retraining programmes are especially important for breaking the hysteresis cycle. By shifting the aggregate supply of skilled labour, training investment can reduce the natural rate of unemployment without the inflationary consequences of demand stimulus, offering a more durable solution to structural unemployment.'
        },
        {
          id:     'q5b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'A government reduces the level of unemployment benefits to make work more financially attractive relative to not working. This policy is best described as:',
          options: [
            { id: 'opt-a', text: 'An automatic stabiliser'             },
            { id: 'opt-b', text: 'A supply-side reform'                },
            { id: 'opt-c', text: 'A demand-side fiscal stimulus'       },
            { id: 'opt-d', text: 'A monetary policy instrument'        }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Reducing the replacement ratio (benefit/wage ratio) increases the financial incentive to work, raising labour supply and reducing the natural rate of unemployment. This is a supply-side reform targeting labour market incentives.',
          feedbackWrong:   'The correct answer is B &#8212; A supply-side reform. By reducing the replacement ratio (the ratio of benefits to in-work income), the government makes work more financially attractive, reducing voluntary frictional and structural unemployment. This acts on the supply side of the labour market, not aggregate demand.'
        }
      ]
    }

  ]
};

/* ---- land-section-b.js ---- */
window.ECONOS_LAND_SECTION_B = {
  topic:        'Unemployment',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.routes.land('intro'),

  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'UK unemployment during and after the COVID-19 pandemic',
        tags:        ['Furlough scheme', '&#163;70bn cost', 'unemployment avoided', 'scarring effects'],
        defaultOpen: true,
        paragraphs: [
          'The Coronavirus Job Retention Scheme (furlough) supported up to 9.6 million jobs at its peak in 2020, at a cost of approximately &#163;70 billion. By subsidising 80% of furloughed workers\' wages, the scheme prevented a sharp rise in unemployment that economists feared could have reached 15% or higher.',
          'UK unemployment peaked at only 5.2% in late 2020 &#8212; far below the experience in countries without equivalent schemes. However, critics noted that the furlough scheme may have prevented necessary structural adjustment, keeping workers in sectors that would inevitably contract, such as aviation and retail.',
          'By 2022, the UK labour market had tightened dramatically, with the unemployment rate falling below 4% and vacancies exceeding 1.3 million for the first time on record. Long-term unemployment remained elevated among workers aged 50+, who were less likely to re-enter employment after furlough ended.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'The rise of long-term unemployment and hysteresis',
        tags:        ['Long-term unemployed', 'skill atrophy', 'hysteresis', 'NAIRU'],
        defaultOpen: false,
        paragraphs: [
          'Economists have long been concerned about the &#8220;hysteresis&#8221; effect &#8212; the tendency of cyclical unemployment to become structural over time. Workers who remain unemployed for more than 12 months experience accelerating deterioration of their human capital: vocational skills atrophy, professional networks weaken, and employers increasingly view extended employment gaps as a negative signal.',
          'Research by the Resolution Foundation found that workers who experienced significant unemployment spells during the 2008&#8211;09 recession earned 10&#8211;15% less than comparable workers five years later, even after finding re-employment. This &#8220;scarring effect&#8221; suggests unemployment imposes permanent costs beyond the immediate income loss.',
          'The NAIRU &#8212; the non-accelerating inflation rate of unemployment &#8212; appears to have risen following recessions, consistent with hysteresis. If the NAIRU rises, the economy cannot be stimulated to lower unemployment rates without triggering inflation, making recovery more difficult.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Regional unemployment disparities in the UK',
        tags:        ['Regional divide', 'North-South', 'skills mismatch', 'geographical immobility'],
        defaultOpen: false,
        paragraphs: [
          'Unemployment rates vary significantly across UK regions. In 2023, London had an unemployment rate of 4.8% but also the highest concentration of high-skilled vacancies. The North East of England had an unemployment rate of 5.6% with a higher proportion of long-term unemployment and a skills profile less matched to the sectors where vacancy growth is concentrated.',
          'Labour market economists identify geographical immobility as a key barrier to reducing regional disparities. High house prices in prosperous areas prevent workers from lower-wage regions from relocating to take available jobs. Commuting distances make some regional labour market adjustment physically impossible.',
          'Government &#8220;Levelling Up&#8221; initiatives aimed to address regional imbalances through infrastructure investment and devolved skills funding. However, the IFS estimated that closing the North-South productivity gap would require sustained investment of &#163;10&#8211;15 billion per year over a decade.'
        ]
      }
    ]
  },

  question: {
    id:       'q1',
    title:    'Extended response using the context pack',
    subtitle: 'Refer to the extracts where directed, and bring in your own knowledge.',
    marks:    25,

    parts: [
      {
        id:     'q1a',
        letter: 'a',
        marks:  5,
        type:   'freetext',
        stem:   'Explain two economic costs of unemployment to the individual.',
        tips: [
          'Identify two distinct costs experienced by the unemployed person themselves.',
          'Go beyond &#8220;they lose income&#8221; &#8212; develop the mechanism and consequences.',
          'Consider financial costs (income, savings, pension) and non-financial costs (skills, health, wellbeing).'
        ],
        modelAnswer: 'First, unemployment causes immediate loss of earned income. The unemployed individual must rely on benefit payments (JSA or Universal Credit) which typically replace only a fraction of previous earnings, compressing their standard of living. Over time, savings may be depleted and pension contributions interrupted, reducing long-run financial security. Second, prolonged unemployment causes deterioration of human capital &#8212; the skills, qualifications and professional networks that determine a worker\&#39;s future earnings potential. As Extract B notes, workers unemployed for extended periods face a &#8220;scarring effect&#8221;: even after re-entering employment, they earn 10&#8211;15% less than comparable workers who were not unemployed. This permanent damage to lifetime earnings represents a significant personal economic cost beyond the immediate income loss.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extract A, examine the likely economic effects of the UK government\'s furlough scheme on unemployment during the COVID-19 pandemic.',
        tips: [
          'Define what the furlough scheme was and what it aimed to achieve (Extract A provides the key data).',
          'Explain how the scheme prevented cyclical unemployment through aggregate demand support.',
          'Consider the argument in Extract A that it may have delayed structural adjustment.',
          'Evaluate: was preventing higher short-term unemployment worth the &#163;70bn cost?'
        ],
        modelAnswer: 'The Coronavirus Job Retention Scheme subsidised 80% of furloughed workers\&#39; wages up to a cap, retaining them in employment rather than laying them off. By maintaining household incomes, the scheme supported aggregate demand at a time when the economy had effectively shut down, preventing a collapse in consumer spending that would have deepened the recession further. Extract A shows unemployment peaked at only 5.2% &#8212; far below the predicted 15% without intervention &#8212; demonstrating the scheme\&#39;s direct effectiveness at preventing cyclical unemployment. By preserving employer-employee relationships, it also avoided the frictional costs of mass redundancies followed by wholesale recruitment when the economy reopened. However, Extract A also raises concerns that the scheme may have prevented necessary structural adjustment. The pandemic accelerated long-run shifts away from aviation, office-based work and traditional retail. By keeping workers in these contracting sectors, furlough may have delayed the reallocation of labour to growing sectors such as logistics, healthcare and digital services. In this sense, the scheme traded short-term employment preservation for potentially higher structural unemployment later. On balance, given the magnitude of the shock and the risk of hysteresis from mass long-term unemployment (highlighted in Extract B), the prevention of a 15% unemployment spike appears to have justified the &#163;70bn cost &#8212; though the structural adjustment argument deserves longer-run evaluation.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss the extent to which supply-side policies are more effective than demand-side policies in reducing unemployment in the UK. Refer to Extract B and your own knowledge.',
        tips: [
          'Explain what supply-side policies are (training, education, labour market reform) and how they address unemployment.',
          'Explain demand-side policies (fiscal stimulus, monetary easing) and what types of unemployment they address.',
          'Use Extract B: hysteresis and the long-term unemployed demonstrate limits of demand stimulus.',
          'Evaluate: demand-side better for cyclical; supply-side better for structural. The type matters.',
          'Consider practical constraints: supply-side takes time; demand-side is faster but creates inflation risk.',
          'Conclude with a supported, balanced judgement.'
        ],
        modelAnswer: 'Supply-side policies address unemployment by improving the functioning of the labour market itself: education and training reduce the skills mismatch that causes structural unemployment; welfare reform reduces the replacement ratio and improves financial incentives to work; geographic mobility schemes reduce search friction. These policies directly target the structural and frictional causes of unemployment and, if successful, permanently reduce the NAIRU &#8212; allowing lower unemployment without inflationary pressure. The hysteresis evidence in Extract B strengthens the supply-side case: if prolonged unemployment permanently raises the NAIRU, the only way to restore lower equilibrium unemployment is to actively rebuild human capital through training programmes, not simply stimulate demand. Demand-side policies &#8212; fiscal stimulus (lower taxes, higher government spending) or monetary easing (lower Bank Rate) &#8212; raise aggregate demand and are effective against cyclical unemployment caused by recession. When the economy operates below potential output, boosting AD can close the output gap and return employment toward the NAIRU without significant inflationary risk. The furlough scheme in Extract A is an extreme example: demand support preventing a catastrophic cyclical unemployment rise. However, demand-side policies have significant limitations. They are inflationary when the economy approaches full capacity; they cannot overcome a structural skills mismatch (no amount of demand stimulus creates chemical engineers from out-of-work retail workers); and they work poorly against regional unemployment disparities (Extract C) driven by geographical immobility that demand stimulus cannot address. On balance, the relative effectiveness depends critically on the cause and type of unemployment. For cyclical unemployment, demand-side policy is more immediate and appropriate. For structural and long-term unemployment, supply-side investment in skills and incentives is superior. In practice, the most effective approach combines both: short-term demand support to prevent hysteresis, alongside sustained supply-side investment to permanently reduce the NAIRU. Given that much of UK unemployment has structural components &#8212; regional mismatches, long-term inactivity &#8212; supply-side reform arguably delivers more durable improvement, but operates over years rather than months.'
      }
    ]
  },

  strongAnswers: [
    'Distinguish the type of unemployment before prescribing policy',
    'Use extract data precisely &#8212; cite specific figures',
    'Develop the chain of analysis from policy to outcome',
    'Reach a supported judgement on relative effectiveness'
  ]
};

/* ---- land-section-c.js ---- */
window.ECONOS_LAND_SECTION_C = {
  topic:        'Unemployment',
  sectionLabel: 'Section C &#8212; Essay',
  backUrl:      TopicLoader.routes.land('intro'),

  question: {
    id:               'qc',
    commandWord:      'Evaluate',
    stem:             'Evaluate the view that supply-side policies are the most effective way to reduce unemployment in the UK.',
    marks:            25,
    suggestedMinutes: 30,

    structureTips: [
      'Define unemployment and briefly identify the main types: cyclical, structural, frictional.',
      'Explain supply-side policies: education and training, welfare reform (replacement ratio), trade union reform, deregulation.',
      'Apply to unemployment: how supply-side policy reduces the NAIRU and addresses skills mismatch.',
      'Counter-argument: demand-side policies (fiscal stimulus, monetary easing) better address cyclical unemployment &#8212; especially in recession.',
      'Evaluate supply-side limits: time lags (years not months), distributional concerns, unproven effectiveness.',
      'Evaluate demand-side limits: inflation risk, cannot address structural mismatch.',
      'Conclude: type of unemployment determines appropriate policy &#8212; supply-side best for structural; demand-side for cyclical.'
    ],

    modelAnswer:
      '<p>Unemployment in the UK can be categorised into cyclical unemployment (caused by insufficient aggregate demand), structural unemployment (arising from skills mismatches between workers and available jobs), and frictional unemployment (the time taken to search for a new job). Supply-side policies aim to reduce structural and frictional unemployment by improving the operation of the labour market itself, rather than by stimulating overall demand. The question is whether this makes them the <em>most effective</em> approach to reducing unemployment overall.</p>'
    + '<p>Supply-side policies work through several channels. Investment in education and vocational training directly addresses the human capital gap at the heart of structural unemployment &#8212; workers who lack the skills demanded by employers in growth sectors such as technology, healthcare and green energy can be retrained to fill these vacancies. Apprenticeship programmes, further education reform, and employer-funded skills development all raise the productive quality of the labour force and reduce the NAIRU &#8212; the unemployment rate consistent with stable inflation. Welfare reform &#8212; specifically reducing the replacement ratio (the ratio of benefits to wages) &#8212; increases financial incentives to work, reducing voluntary frictional unemployment. Deregulation of the labour market can reduce hiring costs and encourage employers to take on more workers.</p>'
    + '<p>The case for supply-side policies is strongest when unemployment is predominantly structural or frictional. Regional unemployment disparities in the UK &#8212; where ex-industrial communities lack skills matched to modern employers &#8212; cannot be resolved by demand stimulus. Raising government spending increases demand across the economy, but the vacancies being created in London financial services or Cambridge technology clusters cannot be filled by unemployed workers in the North East who lack the required qualifications. Only supply-side reskilling can close this gap. Furthermore, if supply-side policies succeed in reducing the NAIRU, the economy can sustain lower unemployment without inflationary pressure &#8212; a lasting improvement rather than a temporary demand-side boost.</p>'
    + '<p>However, supply-side policies have significant limitations. They operate with long time lags &#8212; retraining programmes take years to produce qualified workers, and their effects on unemployment may not materialise for a decade. During an acute recession, demand-side policies &#8212; fiscal stimulus (higher government spending, tax cuts) or monetary easing (lower Bank Rate) &#8212; provide far more immediate relief. Cyclical unemployment &#8212; caused by a shortfall in aggregate demand relative to productive capacity &#8212; is simply not addressable by supply-side means. No amount of skills training helps a worker if firms are cutting output and labour demand has collapsed. The furlough scheme during COVID-19 demonstrates this: supply-side policy would have been useless in 2020; only direct demand support prevented mass unemployment. Additionally, supply-side reforms that reduce welfare benefits impose hardship on the most vulnerable and may be socially unjust if alternative employment opportunities are genuinely scarce.</p>'
    + '<p>In conclusion, the effectiveness of supply-side policies relative to demand-side alternatives depends critically on the type of unemployment being addressed. For structural and long-term frictional unemployment &#8212; which represent significant components of UK unemployment &#8212; supply-side investment in skills and incentives is not only more appropriate but the only genuinely effective approach. For cyclical unemployment in recession, demand-side policy is superior and supply-side action is largely irrelevant. The most effective overall strategy therefore combines both: demand-side support to prevent hysteresis from cyclical shocks, plus sustained supply-side investment to reduce the NAIRU and address structural mismatches. The view that supply-side policies are <em>most</em> effective is therefore partially correct &#8212; they address the supply-side causes of unemployment better than any alternative &#8212; but incomplete as a sole approach, since they cannot address cyclical unemployment at all.</p>'
  },

  strongAnswers: [
    'Define the different types of unemployment before evaluating policy',
    'Apply the correct policy tool to each type of unemployment',
    'Use specific UK evidence: furlough, regional disparities, NAIRU estimates',
    'Balance the analysis &#8212; neither policy approach is dominant in all circumstances',
    'Conclude with a clear, type-conditional judgement'
  ]
};

