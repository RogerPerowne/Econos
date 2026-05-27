(function () {

  window.ECONOS_QUIZ = {
    id:       'factors_of_production_main',
    topicId:  'factors_of_production_main',
    title:    'Factors of Production',
    subtitle: 'Theme 1 &middot; Topic 1.1.2 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'factors_of_production' }),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~10 minutes · covers the four factors, rewards, quantity vs quality, mobility, and applying the framework to UK labour shortages',
    shortNames: [
      'Categorise factors', 'Capital MCQ', 'Match rewards', 'Sequence retraining',
      'Cause & effect: policy', 'Odd one out', 'UK labour data', 'Evaluation multi-select',
      'Mobility para-fill', 'Participation rate'
    ],

    questions: [

      /* 1 – Categorise: sort items into the four factors */
      { type: 'categorise',
        id: 'q_fop_1',
        stem: 'Sort each example into the correct <strong>factor of production</strong>.',
        categories: ['Land', 'Labour', 'Capital', 'Enterprise'],
        items: [
          { text: 'North Sea oil and gas reserves',                                 category: 'Land' },
          { text: 'A nurse working a 12-hour shift in an NHS hospital',             category: 'Labour' },
          { text: 'A robotic assembly line in a Nissan car plant',                  category: 'Capital' },
          { text: 'A founder taking personal financial risk to launch a tech startup', category: 'Enterprise' },
          { text: 'A patent owned by a pharmaceutical firm',                        category: 'Capital' },
          { text: 'The fish stocks of the North Atlantic',                          category: 'Land' },
          { text: 'A software developer writing code',                              category: 'Labour' },
          { text: 'A managing director coordinating land, labour and capital to grow output', category: 'Enterprise' }
        ],
        exp: '<strong>Land</strong> = naturally occurring resources (oil, gas, fish stocks, soil, minerals, water, forests). <strong>Labour</strong> = human effort, physical and mental (nurses, developers, drivers). <strong>Capital</strong> = man-made productive resources, including intangibles like patents (machinery, infrastructure, IP). <strong>Enterprise</strong> = risk-taking and the organising function that combines the other three to produce goods and services. Classic mistakes: confusing patents (intangible capital) with enterprise, or treating a CEO managing a firm (enterprise) as ordinary labour. The risk-bearing element is what distinguishes enterprise from labour.'
      },

      /* 2 – MCQ: capital common error */
      { type: 'mcq',
        id: 'q_fop_2',
        stem: 'Which statement about <strong>capital</strong> as a factor of production is correct?',
        opts: [
          'Capital is any man-made resource used to produce other goods and services – including machinery, tools, buildings, infrastructure, and patents',
          'Capital is the money a firm has in its bank account that it can use to fund production',
          'Capital is the financial investment of shareholders in a company',
          'Capital refers only to large fixed assets like factories – not smaller tools, IT equipment or intangibles'
        ],
        ans: 0,
        exp: '<strong>Capital</strong> is man-made productive resources – machinery, tools, buildings, vehicles, infrastructure, technology, and intangibles like patents and software. It does <strong>not</strong> mean money. Money is a medium of exchange that can be used to buy capital, but money itself doesn\'t produce anything. The reward for capital is <strong>interest</strong> – payment for use and for the opportunity cost of investing capital rather than using funds elsewhere. The classic A-level error is "capital = money" – examiners deduct marks every time. The UK\'s low business investment per worker (about 25% below the G7 average) is a capital-quantity and quality problem holding back productivity.'
      },

      /* 3 – Match pairs: factor → reward */
      { type: 'match_pairs',
        id: 'q_fop_3',
        stem: 'Match each <strong>factor of production</strong> to the reward it earns.',
        pairs: [
          { a: 'Land',       b: 'Rent – paid because supply is fixed and owners can charge for use' },
          { a: 'Labour',     b: 'Wages – payment for time, effort and skill applied to production' },
          { a: 'Capital',    b: 'Interest – reward for use and the opportunity cost of waiting' },
          { a: 'Enterprise', b: 'Profit – the residual return after rent, wages and interest are paid' }
        ],
        exp: 'The four-way mapping is the most-tested fact in this topic: <strong>Land → Rent</strong>, <strong>Labour → Wages</strong>, <strong>Capital → Interest</strong>, <strong>Enterprise → Profit</strong>. Profit is special because it is the <em>residual</em> after all contractual payments are made – it is not guaranteed and can be negative (a loss). Wages and rent are typically contracted; profit is the entrepreneur\'s reward for bearing the risk that revenue may not cover costs. Common errors: "labour earns profit" (no – profit is the entrepreneur\'s residual) and "capital earns wages" (no – wages are paid to people, interest to capital).'
      },

      /* 4 – Sequence: how a successful retraining scheme raises GDP */
      { type: 'sequence',
        id: 'q_fop_4',
        stem: 'A large adult retraining scheme upgrades displaced workers\' skills for shortage occupations. Place the steps showing how the policy raises real GDP in the correct order.',
        instr: 'Tap the steps in the correct order, from first to last.',
        items: [
          { label: 'Workers gain new skills – quality of labour rises and occupational mobility improves', note: '' },
          { label: 'Retrained workers fill vacancies in care, HGV driving and construction', note: '' },
          { label: 'Persistent shortage-sector vacancies fall; structural unemployment drops', note: '' },
          { label: 'Each worker is now in a higher-productivity use – output per worker rises', note: '' },
          { label: 'LRAS shifts right as the economy\'s productive capacity expands', note: '' },
          { label: 'Real GDP rises and inflationary pressure from supply bottlenecks eases', note: '' }
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        exp: 'The chain is the canonical supply-side outcome: skills upgrade (labour quality) → occupational mobility improves → workers move into shortage sectors → vacancies fall and each worker is more productive → LRAS shifts right → real output rises with downward pressure on prices. The mechanism is improved <strong>factor reallocation</strong> – the same labour force produces more output because each worker is now in a higher-productivity use. This is why supply-side policies are scored on whether they raise <em>quality</em> and <em>mobility</em>, not just <em>quantity</em>.'
      },

      /* 5 – Cause & effect: policy levers and their effects */
      { type: 'cause_effect',
        id: 'q_fop_5',
        stem: 'Match each UK supply-side policy to its primary effect on the labour factor of production.',
        pairs: [
          { cause: 'Expanding free childcare for under-5s',           effect: 'Raises the quantity of labour by lifting participation among parents (mostly mothers)' },
          { cause: 'A national adult retraining programme',           effect: 'Raises the quality of labour and improves occupational mobility into shortage sectors' },
          { cause: 'Planning reform to allow more housebuilding in productive regions', effect: 'Raises geographic mobility by lowering housing costs in high-productivity areas' },
          { cause: 'Improved careers information and advice in schools', effect: 'Raises occupational mobility by helping new entrants choose training and roles employers actually need' },
          { cause: 'Higher state pension age',                        effect: 'Raises the quantity of labour by keeping older workers in the workforce for longer' },
          { cause: 'Investment in inter-city rail and bus networks',   effect: 'Raises geographic mobility by widening the area workers can commute within' }
        ],
        exp: 'Each policy targets a specific dimension of the labour factor: <strong>quantity</strong> (childcare, pension age) brings more workers in; <strong>quality</strong> (retraining) makes each worker more productive; <strong>occupational mobility</strong> (retraining, careers info) helps workers switch jobs/sectors; <strong>geographic mobility</strong> (housing, transport) helps workers reach the jobs. A strong exam answer identifies <em>which</em> dimension a policy targets and explains why that matters for the outcome (e.g. retraining without complementary capital investment produces qualified workers in obsolete jobs).'
      },

      /* 6 – Odd one out: capital identification */
      { type: 'odd_one_out',
        id: 'q_fop_6',
        stem: 'Three of these are examples of the <strong>capital</strong> factor of production. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🛣️', label: 'The M25 motorway and surrounding infrastructure', note: '' },
          { icon: '🛢️', label: 'North Sea oil and gas reserves',                  note: '' },
          { icon: '🤖', label: 'A robotic welding arm on a car production line',   note: '' },
          { icon: '💻', label: 'Enterprise software licensed by a logistics firm', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is <strong>North Sea oil and gas reserves</strong> – a natural resource, so it is <strong>land</strong>, not capital. The other three are all capital: the M25 is physical infrastructure (built by humans); the robotic welder is physical capital; the software licence is intangible capital. Capital is <em>man-made</em>; land is <em>naturally occurring</em>. This distinction matters for the rewards too: oil reserves earn <em>rent</em> (because supply is fixed), while infrastructure, machinery and software earn <em>interest</em> (because they were created using saved resources that had alternative uses).'
      },

      /* 7 – Data table: UK labour market 2023 */
      { type: 'data_table',
        id: 'q_fop_7',
        stem: 'The table shows approximate UK labour-market indicators for 2023, with the pre-pandemic 2019 figures for comparison.',
        headers: ['Indicator', '2019', '2023', 'Change'],
        rows: [
          ['Labour force (millions, 16+)',           '34.0',       '33.7',     '−0.3m'],
          ['Inactive, long-term sick (millions)',    '2.1',        '2.8',      '+0.7m'],
          ['Job vacancies (millions)',               '0.8',        '1.0',      '+0.2m'],
          ['Apprenticeship starts (000s, annual)',   '393',        '337',      '−14%'],
          ['Business investment per worker (UK vs G7 average)', '−22%', '−25%', 'wider gap']
        ],
        question: 'Which conclusion is <strong>best supported</strong> by the data?',
        opts: [
          'The UK faces both a fall in the quantity of labour and a persistent skills-mismatch problem; together with a widening capital-investment gap, a combined supply-side response (quantity + quality + capital) is appropriate',
          'The data show a pure aggregate demand problem; supply-side policy is not the right response',
          'Vacancies have risen, so the labour market is in surplus – no policy intervention is required',
          'The only problem is the apprenticeship fall – fixing that alone would close the entire labour shortage'
        ],
        ans: 0,
        exp: 'The data tell a multi-dimensional supply-side story: (1) labour <strong>quantity</strong> has fallen (labour force −0.3m, long-term sick +0.7m); (2) <strong>quality and mobility</strong> are weakening (apprenticeship starts down 14%); (3) <strong>capital</strong> is also lagging (investment-per-worker gap has widened from −22% to −25%). Persistent vacancies alongside fewer workers is the textbook signal of occupational immobility – skills don\'t match the jobs available. A serious response needs all three levers acting together. Option B ignores the structural story; C confuses vacancies with surplus (high vacancies = unfilled jobs); D oversimplifies a multi-causal problem.'
      },

      /* 8 – Multi-select: genuine evaluation */
      { type: 'multi_select',
        id: 'q_fop_8',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of the claim that "improving factor mobility would substantially raise UK output"?',
        opts: [
          'Improving factor mobility involves both occupational and geographic dimensions',
          'Retraining only raises output when training matches genuine employer demand – the OBR\'s modest 60,000-person estimate for childcare expansion shows that any single mobility lever is incremental rather than transformative',
          'Mobility policy is irrelevant because the only thing that matters is aggregate demand',
          'Even fully-mobile workers cannot lift productivity without complementary capital – the UK\'s 25% capital-investment gap means mobility policies alone will produce qualified workers on outdated equipment, blunting the output effect',
          'A national retraining programme would always raise output because skills are always valuable',
          'The geographic-mobility argument depends heavily on housing reform: with house-price-to-earnings ratios of 10–14× in productive regions, retrained workers cannot reach the jobs without parallel planning reform – so mobility policy is contingent on housing policy'
        ],
        correct: [1, 3, 5],
        exp: '<strong>B, D and F demonstrate evaluation.</strong> B qualifies the claim by introducing a condition (skills-employer match) and a scale check (OBR\'s 60k estimate). D introduces a complementary-factors qualification – labour and capital are complements, not substitutes. F links the labour-mobility argument to a parallel housing constraint, reaching a context-dependent conclusion. A is a description, not evaluation. C is an unsupported assertion that ignores the supply-side mechanism. E overstates ("always raises output") – strong evaluation avoids universal claims and identifies the conditions under which the claim holds.'
      },

      /* 9 – Para fill: factor mobility */
      { type: 'para_fill',
        id: 'q_fop_9',
        stem: 'Complete the paragraph summarising factor mobility and supply-side policy.',
        anchor: 'Factor mobility shapes how quickly an economy can adjust to change.',
        para: 'Factor mobility describes how easily factors of production can move between different [1] (occupational mobility) and between different [2] (geographic mobility). Where workers are unable to switch jobs because their skills don\'t match available vacancies, the economy experiences [3] unemployment alongside unfilled posts. A retraining programme primarily raises [4] mobility by upgrading the skills of the workforce, which is also an improvement in labour [5]. Housing reform and transport investment, by contrast, target [6] mobility by reducing the cost of moving to where the jobs are. Free childcare provision raises the [7] of labour by enabling parents to enter or re-enter the workforce. When mobility-raising policies succeed, the economy\'s productive capacity expands and the [8] curve shifts to the right, lifting real output and easing inflationary pressure from supply bottlenecks.',
        blanks: [
          { id: 1, opts: ['uses',         'incomes',       'industries only', 'currencies'],  ans: 0 },
          { id: 2, opts: ['locations',    'time periods',  'price levels',    'firms'],       ans: 0 },
          { id: 3, opts: ['structural',   'frictional',    'cyclical',        'seasonal'],    ans: 0 },
          { id: 4, opts: ['occupational', 'geographic',    'financial',       'political'],   ans: 0 },
          { id: 5, opts: ['quality',      'quantity',      'cost',            'price'],       ans: 0 },
          { id: 6, opts: ['geographic',   'occupational',  'industrial',      'legal'],       ans: 0 },
          { id: 7, opts: ['quantity',     'quality',       'cost',            'price'],       ans: 0 },
          { id: 8, opts: ['LRAS',         'AD',            'demand',          'Phillips'],    ans: 0 }
        ],
        exp: '(1) Different <strong>uses</strong> = occupational mobility. (2) Different <strong>locations</strong> = geographic mobility. (3) <strong>Structural</strong> unemployment is the textbook signal of occupational immobility – jobs exist but the unemployed lack matching skills. (4) Retraining → <strong>occupational</strong> mobility. (5) Skills upgrade is also a labour <strong>quality</strong> improvement. (6) Housing and transport → <strong>geographic</strong> mobility. (7) Childcare → labour <strong>quantity</strong> (more workers participate). (8) The macro effect is a rightward shift of <strong>LRAS</strong> – higher productive capacity at every price level.'
      },

      /* 10 – Numeric input: labour-force participation rate */
      { type: 'numeric_input',
        id: 'q_fop_10',
        stem: 'Calculate the UK <strong>labour-force participation rate</strong> as a percentage of the working-age population.',
        context: 'In a given year, the UK working-age population (16–64) is <strong>42.0 million</strong>. Of these, <strong>32.0 million are employed</strong>, <strong>1.4 million are unemployed and actively seeking work</strong>, and the remainder are <strong>economically inactive</strong> (long-term sick, students, carers, early retirees).',
        answer: 79.5,
        tolerance: 0.5,
        unit: '%',
        hint: 'Labour force = employed + unemployed. Participation rate = labour force ÷ working-age population × 100.',
        workingSteps: [
          'Labour force = 32.0m (employed) + 1.4m (unemployed) = 33.4 million',
          'Participation rate = 33.4m ÷ 42.0m × 100',
          'Participation rate = 0.7952... × 100 ≈ 79.5%',
          'Economically inactive = 42.0 − 33.4 = 8.6 million (about 20.5% of working-age population)'
        ],
        exp: 'Labour force = employed + unemployed = 32.0m + 1.4m = <strong>33.4 million</strong>. Participation rate = 33.4 ÷ 42.0 × 100 = <strong>≈ 79.5%</strong>. The remaining <strong>8.6 million</strong> are economically inactive – they are not in the labour force at all. Mobility policies (childcare, occupational health, retraining) aim to convert some of this inactive group into active labour-force participants. Even a small percentage-point gain in the participation rate represents hundreds of thousands of additional workers – illustrating why the OBR\'s estimated 60,000-person gain from the 2024 childcare expansion is meaningful but modest set against the scale of the inactive population.'
      }
    ]
  };

})();
