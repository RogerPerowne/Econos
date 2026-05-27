(function () {

  window.ECONOS_QUIZ = {
    id:       'behavioural_econ_main',
    topicId:  'behavioural_econ_main',
    title:    'Behavioural Economics',
    subtitle: 'Theme 1 &middot; Topic 2.10 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('behavioural_econ_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers bounded rationality, loss aversion, status quo bias, nudge theory, default options, and policy applications',
    shortNames: [
      'Bounded rationality MCQ', 'Biases categorise', 'Nudge theory MCQ', 'Default options',
      'Loss aversion', 'Cause & effect', 'Match pairs', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: bounded rationality */
      { type: 'mcq',
        id: 'q_be_1',
        stem: 'Herbert Simon\'s concept of <strong>bounded rationality</strong> suggests that humans:',
        opts: [
          'Make decisions within the limits of their cognitive capacity and available information – using heuristics (mental shortcuts) to simplify choices, often reaching satisfactory rather than optimal decisions ("satisficing")',
          'Are completely irrational and make random decisions with no consistent pattern or preference',
          'Are perfectly rational in all contexts but choose to ignore information when it is too costly to process',
          'Make rational decisions in familiar situations but become irrational when faced with complex choices'
        ],
        ans: 0,
        exp: 'Simon (1955): human rationality is "bounded" by limited information, limited cognitive capacity, and limited time. Rather than optimising (finding the best solution), people <strong>satisfice</strong> – find a solution that is "good enough" given their constraints. This produces systematic, predictable deviations from standard rational choice theory, which behavioural economics documents through experimental evidence. The deviations include heuristics (availability, representativeness, anchoring), biases (loss aversion, status quo, optimism), and framing effects. These are not random errors but systematic patterns – allowing policy designers to "nudge" behaviour predictably.'
      },

      /* 2 – Categorise: behavioural biases */
      { type: 'categorise',
        id: 'q_be_2',
        stem: 'Sort each example into the correct behavioural bias category.',
        categories: ['Loss aversion', 'Present bias', 'Social norms', 'Anchoring'],
        items: [
          { text: 'People are more upset about losing £100 than they are happy about gaining £100', category: 'Loss aversion' },
          { text: 'A person chooses to eat unhealthily today despite intending to start dieting next month', category: 'Present bias' },
          { text: 'A hotel advertises a "normal" price of £200 then shows a "discount" of £150 – buyers feel they are getting a deal', category: 'Anchoring' },
          { text: 'A person pays into a pension more when they see that 90% of their colleagues also contribute', category: 'Social norms' },
          { text: 'A homeowner refuses to sell their house below what they paid for it even if the market has permanently fallen', category: 'Loss aversion' },
          { text: 'People opt for a restaurant dish described as "90% fat-free" over one described as "10% fat" despite identical content', category: 'Anchoring' }
        ],
        exp: '<strong>Loss aversion</strong>: losses loom larger than equivalent gains – Kahneman and Tversky (1979) estimated losses feel approximately 2× as painful as equivalent gains feel good. <strong>Present bias</strong>: overweighting immediate costs and benefits vs future ones – "hyperbolic discounting"; justifies mandatory saving (pensions), sin taxes on addictive goods. <strong>Social norms</strong>: behaviour influenced by what others do – powerful nudge mechanism; HMRC tax compliance letters using "most people in your area pay on time." <strong>Anchoring</strong>: first number encountered anchors subsequent judgements – salary negotiations, retail pricing, property valuations.'
      },

      /* 3 – MCQ: nudge theory */
      { type: 'mcq',
        id: 'q_be_3',
        stem: 'Thaler and Sunstein\'s <strong>nudge theory</strong> proposes that governments should:',
        opts: [
          'Design "choice architectures" that make beneficial choices easier or more salient, without removing freedom of choice – preserving individual liberty (libertarian paternalism)',
          'Replace all individual choices with government mandates to ensure optimal outcomes for all citizens',
          'Use financial incentives (taxes and subsidies) as the primary tool for changing behaviour – nudges are too weak to influence behaviour significantly',
          'Rely entirely on information provision – giving people all the relevant facts will lead them to rational choices'
        ],
        ans: 0,
        exp: 'Thaler (2017 Nobel Prize) and Sunstein\'s nudge theory: since humans are predictably irrational, governments can improve outcomes by designing choice environments more carefully, without mandating behaviour. The term "libertarian paternalism" captures the apparent paradox: paternalism (improving welfare) + libertarian (preserving choice). Examples: <strong>default options</strong> (opt-out rather than opt-in for pensions – auto-enrolment); <strong>simplification</strong> (fewer options to avoid choice overload); <strong>social norms</strong> information (HMRC compliance letters); <strong>framing</strong> (healthier food at eye level). Nudges are low-cost compared to taxes/regulations and preserve individual autonomy.'
      },

      /* 4 – MCQ: default options and auto-enrolment */
      { type: 'mcq',
        id: 'q_be_4',
        stem: 'UK pension auto-enrolment changed the <strong>default option</strong> from "opt in" to "opt out." This works because:',
        opts: [
          'Status quo bias and inertia mean most people accept whatever the default is – by making pension contribution the default, most workers remain enrolled without having to make an active decision',
          'Auto-enrolment forces all workers to contribute whether they want to or not – it removes individual choice entirely',
          'Workers rationally calculate that pension contribution is always optimal and choose to enrol when prompted',
          'The opt-out requirement makes it illegal for workers to leave the pension scheme without government approval'
        ],
        ans: 0,
        exp: 'Default options are one of the most powerful nudges. <strong>Status quo bias</strong>: people tend to stick with whatever the default option is – changing it requires an active decision. Before auto-enrolment (opt-in), workers had to actively sign up → 35-40% participation. After auto-enrolment (opt-out), workers remain enrolled unless they actively opt out → 85%+ participation. Workers\' preferences haven\'t changed – only the default has. This harnesses status quo bias to increase retirement savings. Workers retain freedom to opt out – libertarian paternalism. The UK auto-enrolment scheme has enrolled 10 million+ previously non-saving workers since 2012.'
      },

      /* 5 – MCQ: loss aversion in policy */
      { type: 'mcq',
        id: 'q_be_5',
        stem: 'Behavioural economics suggests that framing a policy as avoiding a <strong>loss</strong> rather than achieving a <strong>gain</strong> will make it more persuasive. Which example best applies this?',
        opts: [
          '"You will lose £1,200 per year by not having adequate home insulation" is more motivating than "You will save £1,200 per year by insulating your home" – even though both convey identical information',
          '"Gain £1,000 in tax rebates" is more motivating than "Avoid £1,000 in tax penalties" because gains feel better than avoiding losses',
          'Framing effects are only relevant in marketing, not in government policy design',
          'Loss aversion only applies to financial decisions – environmental and health messages are not subject to framing effects'
        ],
        ans: 0,
        exp: 'Loss aversion (Kahneman and Tversky): losses are psychologically more powerful than equivalent gains – typically by a factor of approximately 2. So framing the same information as a "loss avoided" rather than a "gain obtained" makes it more motivating, even though the objective outcomes are identical. This is a framing effect – a classic behavioural economics result. Applications: energy efficiency campaigns framing in terms of bills saved vs current losses; tax authority framing around penalties owed vs rebates earned; health messaging framing (lives lost rather than lives saved). Rational agents should be unaffected by framing – but humans systematically are.'
      },

      /* 6 – Cause & effect: behavioural biases and outcomes */
      { type: 'cause_effect',
        id: 'q_be_6',
        stem: 'Match each behavioural bias to its real-world market or policy implication.',
        pairs: [
          { cause: 'Present bias – people heavily discount future health risks from smoking', effect: 'Underinvestment in health prevention; sin taxes and health warnings partially corrective' },
          { cause: 'Status quo bias – people do not switch energy suppliers even if they would save money', effect: 'Energy market lacks effective competition; automatic switching or collective switching schemes' },
          { cause: 'Anchoring – estate agents show an overpriced house first to make the next house seem cheaper', effect: 'Housing market decisions influenced by irrelevant reference points; buyers overpay' },
          { cause: 'Overconfidence – entrepreneurs overestimate success probability of new businesses', effect: 'Excess business start-ups; creative destruction benefits economy but individuals suffer losses' },
          { cause: 'Social norms – people recycle more when told most of their neighbours do', effect: 'Norm-based nudges can increase pro-social behaviour without taxes or regulation' },
          { cause: 'Loss aversion – homeowners refuse to sell below purchase price', effect: 'Housing market liquidity falls in downturns; transaction volume collapses; price stickiness' }
        ],
        exp: 'Behavioural biases have systematic market consequences: <strong>present bias</strong> → underprovision of insurance, healthcare, pension saving; <strong>status quo bias</strong> → market failures in switching costs; <strong>anchoring</strong> → price distortions; <strong>overconfidence</strong> → excess risk-taking (entrepreneurship, financial markets); <strong>social norms</strong> → powerful lever for pro-social behaviour change; <strong>loss aversion</strong> → market illiquidity and price stickiness in downturns. Each suggests a specific policy response – nudges for inertia-related failures, information provision for anchoring, norm communication for social behaviour.'
      },

      /* 7 – Match pairs: behavioural economics concepts */
      { type: 'match_pairs',
        id: 'q_be_7',
        stem: 'Match each concept to its definition.',
        pairs: [
          { a: 'Heuristic', b: 'Mental shortcut used to make quick decisions – often useful but systematically biased' },
          { a: 'Nudge', b: 'Change to choice architecture that steers behaviour without mandating it' },
          { a: 'Choice architecture', b: 'The design of the context in which choices are made – defaults, ordering, framing' },
          { a: 'Satisficing', b: 'Choosing the first option that meets a minimum threshold – "good enough" rather than optimal' },
          { a: 'Hyperbolic discounting', b: 'Over-weighting immediate outcomes vs future ones – time inconsistency in preferences' },
          { a: 'Libertarian paternalism', b: 'Improving welfare through nudges while preserving freedom of choice' }
        ],
        exp: 'Behavioural economics vocabulary: <strong>heuristic</strong> – availability (judge probability by ease of recall), representativeness (judge by similarity to stereotype), anchoring (first number biases estimates). <strong>Nudge</strong> – Thaler and Sunstein\'s policy tool. <strong>Choice architecture</strong> – the broader framework within which nudges operate (designed by BIT – UK Behavioural Insights Team). <strong>Satisficing</strong> – Simon\'s key concept: accept "good enough" rather than find the optimum. <strong>Hyperbolic discounting</strong> – the behavioural basis of present bias: the discount rate between now and next week is much higher than between next year and the year after.'
      },

      /* 8 – Odd one out: behavioural biases */
      { type: 'odd_one_out',
        id: 'q_be_8',
        stem: 'Three of these are well-established <strong>behavioural biases</strong> documented in experimental economics. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '😰', label: 'Loss aversion – people feel losses more strongly than equivalent gains', note: '' },
          { icon: '⏱️', label: 'Present bias – people prefer immediate rewards over larger future rewards at an irrational rate', note: '' },
          { icon: '📊', label: 'Perfect rationality – people always process all available information and optimise decisions', note: '' },
          { icon: '🔢', label: 'Anchoring – initial reference numbers disproportionately influence subsequent judgements', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>perfect rationality</strong>. This is the assumption of standard (neoclassical) economics – that agents process all information and optimise. Behavioural economics challenges this assumption with experimental evidence showing that humans systematically deviate from perfect rationality through biases, heuristics, and framing effects. Loss aversion (Kahneman & Tversky), present bias (Thaler), and anchoring (Tversky & Kahneman) are all well-documented behavioural phenomena that contradict perfect rationality. The recognition of these biases is what distinguishes behavioural economics from neoclassical theory.'
      },

      /* 9 – Data table: UK auto-enrolment pensions */
      { type: 'data_table',
        id: 'q_be_9',
        stem: 'The table shows UK workplace pension participation data before and after auto-enrolment (introduced 2012).',
        headers: ['Year', 'Private sector pension participation (%)', 'Opt-out rate (of auto-enrolled)'],
        rows: [
          ['2010 (opt-in default)', '38%', 'n/a'],
          ['2013 (auto-enrolment begins)', '45%', '9%'],
          ['2016', '62%', '8%'],
          ['2019', '77%', '8%'],
          ['2022', '80%', '8%']
        ],
        question: 'What do the data most strongly suggest about behavioural economics and policy design?',
        opts: [
          'Changing the default from opt-in to opt-out doubled pension participation from 38% to 80% – with a consistent 8% opt-out rate, showing that most workers accept the default; this is strong evidence of the power of default options and status quo bias in policy design',
          'The data show that workers prefer mandatory pension saving – they are willingly choosing to participate',
          'Auto-enrolment failed because 8% of workers opted out, proving the policy is unpopular',
          'The 80% participation rate proves workers are now making perfectly rational pension decisions'
        ],
        ans: 0,
        exp: 'The data powerfully demonstrate default effects: participation more than doubled (38% to 80%) with the same financial structure – only the default changed. The consistent 8% opt-out rate (those who actively choose not to participate) suggests that those who genuinely prefer not to save are exercising that freedom, while those who were previously inertially non-saving are now enrolled. This is precisely the "libertarian paternalism" Thaler and Sunstein advocated: improved outcomes (more retirement savings) without eliminating individual choice (workers can still opt out). The 10+ million newly enrolled workers represent a massive behavioural economics policy success.'
      },

      /* 10 – Multi-select: evaluation of behavioural economics in policy */
      { type: 'multi_select',
        id: 'q_be_10',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of behavioural economics as a policy framework?',
        opts: [
          'Behavioural economics identifies systematic deviations from rational behaviour through experimental evidence',
          'Nudge-based policies are less coercive than taxes and regulations, but their effectiveness is context-specific and often modest – the auto-enrolment pension success is exceptional rather than typical; many nudges produce small, temporary effects that fade as novelty wears off, suggesting they complement rather than replace traditional policy instruments',
          'Default options harness status quo bias to improve decisions without restricting choice',
          'The libertarian paternalism framework of nudge theory has a fundamental internal tension: if people\'s "true" preferences are unknown (that\'s why they need nudging), then the government is effectively imposing its view of what is best under the guise of preserving choice – which raises paternalism concerns that the "libertarian" label may obscure rather than resolve',
          'Loss aversion means people are more motivated by avoiding losses than achieving equivalent gains',
          'Behavioural interventions are most powerful at population scale but face an ethical problem: systematically exploiting cognitive biases to change behaviour, even for beneficial ends, treats citizens as objects to be manipulated rather than autonomous agents – and the same techniques used by government nudge units are also used by private firms to exploit consumers, suggesting that uncritical enthusiasm for behavioural policy overlooks the dark side of choice architecture'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: qualifies the nudge effectiveness argument by noting that the pension default success is exceptional – most nudges produce smaller effects – reaching the conclusion that nudges complement rather than replace traditional instruments. D: identifies the internal philosophical tension in "libertarian paternalism" – the liberty claim may be thinner than it appears if the government is the one deciding what counts as the "better" default. F: identifies the ethical dimension of choice architecture exploitation and notes the symmetry with private sector manipulation – a broader critical evaluation of the framework. A, C, and E are descriptions.'
      }

    ]
  };

})();
