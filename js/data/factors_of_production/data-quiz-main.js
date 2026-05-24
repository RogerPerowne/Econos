(function () {

  window.ECONOS_QUIZ = {
    id:       'factors_of_production_main',
    topicId:  'factors_of_production_main',
    title:    'Factors of Production',
    subtitle: 'Theme 1 &middot; Topic 1.1.2 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'factors_of_production' }),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers the four factors, their rewards, quantity vs quality, factor mobility, and supply-side policy',
    shortNames: [
      'Land definition', 'Labour examples', 'Capital MCQ', 'Enterprise reward',
      'Match rewards', 'Quantity vs quality', 'Mobility types', 'Policy lever',
      'Odd one out', 'UK shortages context'
    ],

    questions: [

      /* 1 — MCQ: Land definition */
      { type: 'mcq',
        id: 'q_fop_1',
        stem: '<strong>Land</strong>, as a factor of production, is best defined as:',
        opts: [
          'All natural resources used in production — including soil, minerals, water, forests and fisheries',
          'Only the physical surface area on which production takes place — buildings and farmland',
          'Real estate that can be bought, sold or rented in property markets',
          'The capital invested in agricultural production'
        ],
        ans: 0,
        exp: '<strong>Land</strong>: all <em>natural resources</em> used in production — the gifts of nature that exist without human effort. This includes the physical surface, but also minerals (oil, gas, metals), water, forests, fisheries and air. The reward for land is <strong>rent</strong>. Land is in fixed supply (perfectly inelastic), which is what allows owners to charge for its use. The textbook error is to confuse "land" with property real estate — in economics, the term is much broader. Importantly, land is <em>not</em> the same as capital: capital is man-made, land is naturally occurring.'
      },

      /* 2 — MCQ: Labour examples */
      { type: 'mcq',
        id: 'q_fop_2',
        stem: 'Which of the following is the clearest example of the <strong>labour</strong> factor of production?',
        opts: [
          'A nurse working a 12-hour shift treating patients in an NHS hospital',
          'A delivery van used by a courier company',
          'A patent owned by a pharmaceutical firm',
          'An office building leased by an accountancy firm'
        ],
        ans: 0,
        exp: '<strong>Labour</strong> is the <em>human effort</em> — physical and mental — applied to production. A nurse working a shift is delivering labour: their time, skill and effort contribute directly to producing healthcare. The other options are <em>capital</em> (delivery van, office building) or intangible capital (patent). The reward for labour is <strong>wages</strong>. The quality of labour (skills, education, health) and the quantity (population × participation rate × hours) both matter — modern A-level questions test the quantity vs quality distinction frequently.'
      },

      /* 3 — MCQ: Capital common error */
      { type: 'mcq',
        id: 'q_fop_3',
        stem: 'Which statement about <strong>capital</strong> as a factor of production is correct?',
        opts: [
          'Capital is any man-made resource used to produce other goods and services — including machinery, tools, buildings and infrastructure',
          'Capital is the money a firm has in its bank account to fund production',
          'Capital is the financial investment of shareholders in a company',
          'Capital refers only to large fixed assets like factories, not smaller tools or equipment'
        ],
        ans: 0,
        exp: '<strong>Capital</strong> is <em>man-made productive resources</em> — machinery, tools, buildings, vehicles, technology, infrastructure. It does <strong>not</strong> mean money. Money is a medium of exchange that can be used to <em>buy</em> capital, but money itself doesn\'t produce anything. The reward for capital is <strong>interest</strong> — payment for the use of capital and for the opportunity cost of investing it rather than using funds elsewhere. The classic A-level error is "capital = money" — examiners deduct marks every time. Capital also includes "human capital" (skills) in some definitions, though most syllabuses keep that conceptually with labour.'
      },

      /* 4 — MCQ: Enterprise reward */
      { type: 'mcq',
        id: 'q_fop_4',
        stem: 'The reward for the <strong>enterprise</strong> factor of production is:',
        opts: [
          'Profit — the residual after all other costs (rent, wages, interest) have been paid',
          'Wages — a fixed payment for the entrepreneur\'s time',
          'Interest — payment for the capital the entrepreneur owns',
          'Rent — payment for the land the entrepreneur owns'
        ],
        ans: 0,
        exp: '<strong>Enterprise</strong> is the risk-taking and organising function that combines the other three factors. The reward is <strong>profit</strong> — the <em>residual</em> return after paying rent (to land), wages (to labour), and interest (to capital). Profit is special because it is <em>not guaranteed</em>: entrepreneurs may earn a loss instead. This is the compensation for bearing risk and for the entrepreneurial judgement involved. Calling profit "wages for the boss" is wrong — wages are a contractual payment regardless of outcome, profit is the residual that depends on the firm\'s success. The four-way pairing — Land→Rent, Labour→Wages, Capital→Interest, Enterprise→Profit — is the most-tested fact in this topic.'
      },

      /* 5 — Match pairs: factor → reward */
      { type: 'match_pairs',
        id: 'q_fop_5',
        stem: 'Match each <strong>factor of production</strong> to its reward.',
        leftItems:  ['Land', 'Labour', 'Capital', 'Enterprise'],
        rightItems: ['Rent', 'Wages', 'Interest', 'Profit'],
        correct:    [0, 1, 2, 3],
        exp: '<strong>Land → Rent</strong> (natural resources earn rent because supply is fixed). <strong>Labour → Wages</strong> (human effort earns wages — payment for time and skill). <strong>Capital → Interest</strong> (productive assets earn interest — reward for use and the opportunity cost of waiting). <strong>Enterprise → Profit</strong> (risk-taking earns profit — the residual, not guaranteed). This is the four-way mapping you must lock in. Common errors: "labour earns profit" (no — profit is the entrepreneur\'s residual), "capital earns wages" (no — wages are paid to people, interest to capital). The classic exam tip: always link the factor explicitly to its reward in your written answers.'
      },

      /* 6 — MCQ: quantity vs quality */
      { type: 'mcq',
        id: 'q_fop_6',
        stem: 'Which of the following is a change in the <strong>quality</strong> of labour rather than the <strong>quantity</strong>?',
        opts: [
          'A nationwide adult retraining programme that upgrades workers\' skills in shortage sectors',
          'A rise in net inward migration that adds 200,000 workers to the labour force',
          'A reduction in the school leaving age that brings 16-year-olds into the labour force a year earlier',
          'A higher state pension age that delays workers\' retirement by two years'
        ],
        ans: 0,
        exp: '<strong>Quality</strong> of labour means the productivity of each worker — their skills, education, training, health, motivation. A retraining programme upgrades skills, raising output per worker. <strong>Quantity</strong> of labour means the number of workers and hours available (population × participation rate × hours per worker). Migration, lower school leaving age, and higher state pension age all change the <em>quantity</em> (more workers, or workers for longer). The same distinction applies to capital (quantity = stock of machines; quality = how modern/productive they are) and to enterprise (quantity = number of entrepreneurs; quality = managerial skill). A-level evaluation answers often hinge on whether a policy raises quality or quantity — they have different effects on LRAS and on long-run productivity.'
      },

      /* 7 — MCQ: occupational vs geographic mobility */
      { type: 'mcq',
        id: 'q_fop_7',
        stem: 'The UK has persistent vacancies in social care while many former retail workers are unemployed. This is the clearest example of:',
        opts: [
          'Occupational immobility of labour — workers cannot easily move between different types of job',
          'Geographic immobility of labour — workers cannot easily move between different regions',
          'A shortage in the supply of land',
          'A fall in the demand for labour overall'
        ],
        ans: 0,
        exp: '<strong>Occupational immobility</strong>: workers cannot easily switch <em>between jobs of different kinds</em>. Skills are job-specific and don\'t always transfer — a retail worker cannot immediately do social care without training, qualifications and (often) a DBS check. This produces structural unemployment alongside unfilled vacancies. <strong>Geographic immobility</strong>, by contrast, is the inability to move <em>between places</em> — typically caused by high housing costs, family ties, or transport gaps. Policy levers differ: occupational immobility is targeted by apprentices, retraining and careers information; geographic immobility by housing reform and transport investment. Strong A-level answers identify which type of immobility is at work and match the policy to the cause.'
      },

      /* 8 — MCQ: policy lever */
      { type: 'mcq',
        id: 'q_fop_8',
        stem: 'Which UK policy most directly raises the <strong>quantity</strong> of labour rather than its quality or mobility?',
        opts: [
          'Expanding free childcare provision for working parents of under-5s',
          'Funding a national adult retraining programme in shortage occupations',
          'Improving careers information and advice in secondary schools',
          'Reforming planning rules to allow more housebuilding in productive regions'
        ],
        ans: 0,
        exp: '<strong>Free childcare</strong> reduces a barrier to participation, allowing parents (mostly mothers) to enter or re-enter the workforce. This raises the <em>quantity</em> of labour — adding workers who would otherwise be economically inactive. The OBR estimates the 2024 UK childcare expansion will add about 60,000 workers over five years. <strong>Retraining</strong> raises quality and occupational mobility; <strong>careers information</strong> raises occupational mobility; <strong>housing reform</strong> raises geographic mobility. All four are valid supply-side policies, but each targets a different dimension of the factor-of-production framework. A strong exam answer identifies which dimension a policy is targeting and explains why that matters for the predicted outcome.'
      },

      /* 9 — Odd one out */
      { type: 'mcq',
        id: 'q_fop_9',
        stem: 'Which of these is <strong>NOT</strong> a man-made factor of production?',
        opts: [
          'North Sea oil reserves',
          'A robotic assembly line in a Nissan plant',
          'The London Underground rail network',
          'Patented pharmaceutical formulations owned by GSK'
        ],
        ans: 0,
        exp: 'North Sea oil reserves are a natural resource — <strong>land</strong>, in factor-of-production terms. The other three options are all <strong>capital</strong>: man-made productive resources (a robotic line is physical capital; rail infrastructure is physical capital; patents are intangible capital). The fixed-supply nature of oil reserves is what makes them earn <em>rent</em> rather than <em>interest</em>. This question tests whether you can apply the land/capital distinction to specific real-world examples — examiners use this discrimination point to separate strong answers from weak ones.'
      },

      /* 10 — Data table: factor mobility and shortages */
      { type: 'mcq',
        id: 'q_fop_10',
        stem: 'In 2024, the UK has roughly <strong>700,000 fewer workers in the labour force than its pre-pandemic trend</strong> would predict, and persistent vacancies in social care, hospitality and HGV driving. Which conclusion is best supported by these facts?',
        opts: [
          'The UK faces both a fall in the quantity of labour and an occupational immobility problem, so a combined supply-side response (childcare + retraining) is appropriate',
          'The UK simply needs more migration — no other policy lever is necessary',
          'The UK has a pure aggregate demand problem and supply-side policy is irrelevant',
          'The fall in labour force size means inflation will automatically rise regardless of policy'
        ],
        ans: 0,
        exp: 'A 700,000 worker gap reflects a <strong>quantity</strong> problem (the labour force has shrunk); persistent vacancies in care/hospitality/HGV alongside available workers reflect an <strong>occupational immobility</strong> problem (skills don\'t match jobs). The two problems call for different policy levers: <em>quantity</em> policies (childcare, immigration, raising the state pension age) and <em>mobility/quality</em> policies (retraining, apprenticeships, careers information). Strong analytical answers diagnose both dimensions and propose a combined response. The other options oversimplify: migration alone (b) ignores skills mismatch; pure AD analysis (c) ignores the structural supply story; automatic inflation (d) ignores monetary policy and AD weakness.'
      }
    ]
  };

})();
