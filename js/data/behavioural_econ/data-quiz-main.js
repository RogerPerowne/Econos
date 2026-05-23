(function () {

  window.ECONOS_QUIZ = {
    id:       'behavioural_econ_main',
    topicId:  'behavioural_econ_main',
    title:    'Behavioural Economics',
    subtitle: 'Theme 1.21 \xb7 Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering bounded rationality, the four key biases (anchoring, loss aversion, availability, social norms), bounded self-control and commitment devices, UK nudges (pension auto-enrolment, organ donation, HMRC letters, NHS reminders), and evaluation across the policy spectrum.',
    shortNames: {
      'behavioural_econ_1': 'Why people aren\'t rational',
      'behavioural_econ_2': 'The four biases',
      'behavioural_econ_3': 'Bounded self-control',
      'behavioural_econ_4': 'UK nudges',
      'behavioural_econ_5': 'Evaluation'
    },

    questions: [

      /* 1 — mcq: bounded rationality */
      { type: 'mcq',
        stem: 'Herbert Simon\'s concept of <strong>bounded rationality</strong> challenges the neoclassical assumption of homo economicus. Which statement most accurately describes bounded rationality?',
        opts: [
          'People are rational within cognitive limits &mdash; they use heuristics (mental shortcuts) because full optimisation is cognitively costly and often impossible, producing predictable, systematic biases',
          'People are completely irrational and make random, unpredictable decisions that cannot be modelled or influenced by policy',
          'Bounded rationality only applies to uninformed consumers &mdash; economists and experts make fully rational decisions',
          'Heuristics always lead to worse decisions than full optimisation; behavioural economics shows all shortcuts are harmful'
        ],
        ans: 0,
        exp: 'Bounded rationality (Simon, 1955) holds that people are rational <em>within limits</em>: cognitive capacity, time, and information are finite, so people use heuristics &mdash; rules of thumb that work well most of the time but cause systematic errors in specific contexts. The key word is <em>systematic</em>: biases are predictable and consistent, not random. This is what makes behavioural economics policy-relevant &mdash; if biases were random, nudges could not work. Option B overstates irrationality. Option C is elitist and unsupported. Option D is wrong: heuristics are evolutionarily adaptive and produce good decisions in familiar environments; they fail in novel or complex financial/health contexts.'
      },

      /* 2 — elastic_sort: classify biases */
      { type: 'elastic_sort',
        stem: 'Classify each consumer behaviour as an example of <strong>loss aversion</strong>, <strong>present bias</strong>, or <strong>anchoring</strong>.',
        categories: ['loss', 'present', 'anchor'],
        categoryLabels: ['Loss aversion', 'Present bias', 'Anchoring'],
        goods: [
          { icon: '📉', label: 'An investor holds a losing share for years because selling "locks in" a loss that feels worse than the paper loss', note: '', ans: 'loss' },
          { icon: '🎂', label: 'A shopper sees a jacket "was &#163;200, now &#163;80" and buys it immediately, feeling it is a bargain even without comparing other prices', note: '', ans: 'anchor' },
          { icon: '🚬', label: 'A smoker repeatedly says "I\'ll quit next week" but each week chooses to smoke rather than endure immediate discomfort', note: '', ans: 'present' },
          { icon: '🏦', label: 'A saver transfers money to a current account paying 5% AER rather than a fixed ISA paying 6% AER because withdrawing feels like losing money', note: '', ans: 'loss' },
          { icon: '🏃', label: 'A person joins a gym in January but stops going by March, preferring leisure time over the future health benefits', note: '', ans: 'present' },
          { icon: '🏠', label: 'A homebuyer\'s willingness to pay is strongly influenced by the first asking price they see for a neighbourhood', note: '', ans: 'anchor' }
        ],
        exp: '<strong>Loss aversion</strong>: decisions are distorted by the asymmetric weight given to losses vs gains. Holding losing shares (avoiding realising the loss) and preferring the account with lower return to avoid the "loss" of withdrawing both reflect the &#8776;2:1 loss-gain asymmetry. <strong>Present bias</strong>: systematic over-weighting of immediate rewards vs future ones. Delayed quitting and gym abandonment both reflect hyperbolic discounting. <strong>Anchoring</strong>: the first numerical reference point disproportionately influences judgements. The "was &#163;200" price and the first asking price both function as anchors that distort willingness to pay.'
      },

      /* 3 — multi_select: nudge examples */
      { type: 'multi_select',
        stem: 'Which of the following are examples of <strong>nudges</strong> (changes to choice architecture that alter behaviour without restricting options or changing financial incentives)?',
        opts: [
          'Making pension auto-enrolment the default, with workers able to opt out at any time',
          'Displaying calorie counts on restaurant menus so consumers can easily see nutritional information',
          'Banning the sale of sugary drinks larger than 16oz (as tried in New York)',
          'Sending HMRC letters stating "86% of people in your area have already paid their tax"',
          'Increasing tax on tobacco to &#163;7.90 per 20 cigarettes to deter smoking',
          'Placing fruit and vegetables at eye level in supermarket displays rather than near the checkout'
        ],
        correct: [0, 1, 3, 5],
        exp: 'Options A, B, D, and F are nudges. <strong>Auto-enrolment</strong> (A): changes the default without removing choice &mdash; workers can still opt out. <strong>Calorie display</strong> (B): makes information more salient; does not restrict choice. <strong>HMRC social norm</strong> (D): alters the information context to activate social comparison; no financial change. <strong>Supermarket placement</strong> (F): changes the choice architecture (what you see first) without any restriction. Option C (size ban) is a <em>regulation</em> &mdash; it removes the option of large drinks entirely. Option E (tobacco tax) is a <em>price incentive</em>, not a nudge &mdash; it changes the financial cost of the choice.'
      },

      /* 4 — odd_one_out */
      { type: 'odd_one_out',
        stem: 'Three of these are features of <strong>prospect theory</strong> (Kahneman and Tversky). Which is the ODD ONE OUT?',
        items: [
          { icon: '📍', label: 'Outcomes are evaluated relative to a reference point (current position), not absolute wealth levels', note: '' },
          { icon: '⚖️', label: 'People make decisions by maximising expected utility based on objective probabilities and linear preferences', note: '' },
          { icon: '📉', label: 'Losses from the reference point are weighted approximately twice as heavily as equivalent gains (loss aversion)', note: '' },
          { icon: '🎲', label: 'People overweight small probabilities and underweight large probabilities (probability distortion)', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is option B &mdash; this describes <strong>expected utility theory</strong>, the neoclassical model that prospect theory was designed to challenge. Prospect theory (1979) departed from expected utility theory in three key ways: (A) <strong>reference dependence</strong>: outcomes evaluated relative to a reference point, not absolute; (C) <strong>loss aversion</strong>: the loss function is steeper than the gain function; (D) <strong>probability weighting</strong>: people distort probabilities (overweighting small chances, underweighting large ones). Kahneman and Tversky won the Nobel Prize (2002) precisely because prospect theory provides a better empirical description of actual decision-making than expected utility theory.'
      },

      /* 5 — para_fill: auto-enrolment */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph about UK pension auto-enrolment as a nudge.',
        anchor: 'Pension auto-enrolment exploits status quo bias to dramatically increase retirement saving.',
        para: 'Under the old opt-[1] pension system, workers had to actively choose to join a workplace pension. Because of [2] bias and present bias, many workers never got round to enrolling &mdash; the [3] (inertia) was to have no pension. Auto-enrolment changed the default to opt-[4]: workers are automatically enrolled at a combined employer and employee contribution rate of [5]% unless they actively choose to leave. Participation in workplace pensions rose from approximately [6]% to [7]% of private sector workers. The critical insight: the same individual, facing the same pension options, makes a radically different decision depending on the [8].',
        blanks: [
          { id: 1, opts: ['in', 'out', 'up', 'down'], ans: 0 },
          { id: 2, opts: ['status quo', 'loss aversion', 'herding', 'anchoring'], ans: 0 },
          { id: 3, opts: ['default', 'outcome', 'target', 'barrier'], ans: 0 },
          { id: 4, opts: ['out', 'in', 'up', 'down'], ans: 0 },
          { id: 5, opts: ['8', '3', '15', '5'], ans: 0 },
          { id: 6, opts: ['55', '30', '80', '45'], ans: 0 },
          { id: 7, opts: ['87', '70', '60', '95'], ans: 0 },
          { id: 8, opts: ['default', 'price', 'income', 'risk'], ans: 0 }
        ],
        exp: '(1) <strong>In</strong>: the old system required active opt-in. (2) <strong>Status quo</strong>: status quo bias means people stick with the default. (3) <strong>Default</strong>: the default determined outcomes for the majority who never actively decided. (4) <strong>Out</strong>: auto-enrolment makes membership the default &mdash; workers must opt out to leave. (5) <strong>8%</strong>: total minimum contribution (5% employee + 3% employer). (6) <strong>55%</strong>: approximately 55% before 2012 reforms. (7) <strong>87%</strong>: approximately 87% by 2022 &mdash; a 32 percentage point increase at near-zero policy cost. (8) <strong>Default</strong>: the power of defaults is the central behavioural insight; the same person makes different decisions under different defaults.'
      },

      /* 6 — calculation: nudge vs tax cost comparison */
      { type: 'calculation',
        context: 'The government wants to increase the pension saving rate. <strong>Option A (nudge):</strong> auto-enrolment default, implementation cost &#163;50 million. This raises pension participation by 30 percentage points, benefiting 8 million workers.<br><strong>Option B (tax incentive):</strong> increase pension tax relief, cost &#163;2 billion per year. This raises pension participation by 12 percentage points, benefiting 3 million workers.',
        working: [
          'Step 1: cost per worker helped under Option A (nudge)',
          '&#163;50,000,000 \xf7 8,000,000 = &#163;6.25 per worker',
          'Step 2: cost per worker helped under Option B (tax relief)',
          '&#163;2,000,000,000 \xf7 3,000,000 = &#163;666.67 per worker',
          'Step 3: cost-effectiveness comparison',
          'Nudge is &#163;666.67 \xf7 &#163;6.25 = 106.7x cheaper per worker helped',
          'Step 4: additional consideration',
          'Tax relief disproportionately benefits higher-rate taxpayers; nudge is neutral across income groups'
        ],
        stem: 'Compare the cost-effectiveness of the two approaches in &#163; per worker helped.',
        opts: [
          { ped: 'Nudge: &#163;6.25/worker; tax relief: &#163;666.67/worker &mdash; the nudge is over 100 times more cost-effective', typ: 'Nudge: &#163;50m &#247; 8m workers = &#163;6.25. Tax relief: &#163;2,000m &#247; 3m workers = &#163;666.67.', rev: 'Divide total cost by number of workers benefited for each option' },
          { ped: 'Nudge: &#163;50/worker; tax relief: &#163;667/worker', typ: 'Divided &#163;50m by 1m instead of 8m; otherwise correct method', rev: 'Use 8 million workers benefited by the nudge, not 1 million' },
          { ped: 'Nudge: &#163;6.25/worker; tax relief: &#163;200/worker', typ: 'Divided &#163;2bn by 10m workers instead of 3m', rev: 'Use 3 million workers actually helped by the tax relief, not total workforce' },
          { ped: 'Both options are equally cost-effective because they both increase pension saving', typ: 'Did not calculate cost per worker; compared outcomes qualitatively only', rev: 'Calculate cost &#247; workers helped for each option separately' }
        ],
        ans: 0,
        exp: 'Nudge cost per worker: &#163;50m &#247; 8m = <strong>&#163;6.25/worker</strong>. Tax relief cost per worker: &#163;2,000m &#247; 3m = <strong>&#163;666.67/worker</strong>. The nudge is approximately <strong>107 times more cost-effective</strong> per worker helped. This is the key policy case for nudge theory: achieving equivalent or better outcomes at a fraction of the fiscal cost. Additional equity argument: pension tax relief disproportionately benefits higher-rate taxpayers (who get 40% relief vs 20% for basic rate), making it regressive as well as expensive. Auto-enrolment benefits all workers equally as a proportion of salary.'
      },

      /* 7 — data_table */
      { type: 'data_table',
        stem: 'The HMRC Behavioural Insights Team tested different letter formats to improve tax compliance. The table shows response rates for unpaid tax.',
        headers: ['Letter type', 'Payment rate (%)', 'Incremental payments vs control (&#163;m)', 'Key psychological technique'],
        rows: [
          ['Control (standard reminder)', '33%', 'Baseline', 'None'],
          ['Social norm: "Most people in your area have paid"', '38%', '&#163;210m', 'Social proof / herd behaviour'],
          ['Loss frame: "You are one of the few who have not paid"', '40%', '&#163;280m', 'Loss aversion'],
          ['Personalised: "Dear [name], your tax of [amount] is due"', '42%', '&#163;330m', 'Salience / personal relevance'],
          ['Combined: social norm + personalised', '45%', '&#163;420m', 'Multiple nudges combined']
        ],
        question: 'Which conclusion is best supported by the data?',
        opts: [
          'Multiple nudge techniques work better together; personalisation and loss framing are the most potent individual nudges; all nudges significantly outperform the standard reminder at near-zero marginal cost',
          'The social norm letter alone (38%) is more effective than the loss frame letter (40%), so social proof is the strongest nudge',
          'The data shows that nudges alone are sufficient to achieve 100% tax compliance and that fines and penalties are no longer needed',
          'The combined letter\'s 45% payment rate proves that all tax compliance problems can be solved by behavioural interventions without any enforcement mechanisms'
        ],
        ans: 0,
        exp: 'Option A is best supported. The combined letter achieves the highest payment rate (45% vs 33% control), and the incremental revenue (&#163;420m) significantly exceeds the near-zero cost of changing letter text. The loss frame (40%) outperforms the social norm (38%), consistent with Kahneman and Tversky\'s finding that loss framing is more motivating than gain framing. Personalisation (42%) achieves even more &mdash; consistent with salience increasing attention to the message. Combining techniques achieves 45% (not 33% + 12pp for each technique &mdash; there are diminishing marginal returns to stacking nudges). Options B, C, and D all misread the data or over-claim for nudge effectiveness.'
      },

      /* 8 — multi_select: evaluation of behavioural economics */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>behavioural economics and nudge theory</strong>. Which of the following statements demonstrate <strong>evaluation</strong> &mdash; as opposed to description or one-sided analysis?',
        opts: [
          'UK pension auto-enrolment raised participation from ~55% to ~87% at near-zero policy cost, but this success is specific to a context where status quo bias is strong &#8212; nudges will be far less effective where the target behaviour requires sustained active effort (such as regular exercise) rather than a one-off default change',
          'Nudge theory is based on the idea that people are not fully rational and use heuristics that lead to systematic biases',
          'The same techniques that make nudges effective for policymakers &#8212; exploiting status quo bias, loss framing, and social norms &#8212; are used by firms to trap consumers in unwanted subscriptions and manipulate purchasing decisions, which means that validating nudge policy also legitimises commercial manipulation and may weaken consumer protection norms',
          'Loss aversion means people feel losses approximately twice as strongly as equivalent gains, so loss-framed messages tend to be more persuasive than gain-framed ones',
          'Nudges are best evaluated against a specific counterfactual: not \'do they change behaviour?\' but \'are they more cost-effective than the alternative (taxation, regulation, information campaigns)?\' &#8212; the HMRC personalised letter raised &#163;330m at near-zero cost versus the multi-billion-pound cost of equivalent tax relief, making it the dominant policy instrument for this specific compliance problem',
          'The government\'s Behavioural Insights Team has applied nudge theory across a range of policy areas including tax compliance, organ donation, and pension saving'
        ],
        correct: [0, 2, 4],
        exp: 'Option A is strong evaluation: it uses specific evidence (55% to 87%) to establish the success of auto-enrolment, then qualifies it with a mechanistic limitation (defaults only work where behaviour is passive, not active), reaching a direction &#8212; nudges have differential effectiveness by context. Option C is strong evaluation: it identifies a genuine symmetry between policy nudges and commercial manipulation, draws out the implication (validating nudge policy may weaken consumer protection norms), and reaches a conditional conclusion &#8212; this is genuine two-sided reasoning with a specific concern. Option E is strong evaluation: it reframes the evaluation criterion from a binary (does it work?) to a comparative (is it more cost-effective than alternatives?), applies specific quantified evidence (&#163;330m revenue vs multi-billion-pound tax relief cost), and reaches a directional conclusion &#8212; the hallmark of top-band essay evaluation. Option B describes bounded rationality and heuristics &#8212; knowledge content, not evaluation. Option D describes loss aversion accurately but does not weigh it, qualify it, or use it to reach any conditional conclusion. Option F is pure description of where nudge theory has been applied &#8212; a knowledge statement without analytical direction.'
      },

      /* 9 — chain: nudge policy sequence */
      { type: 'chain',
        stem: 'England switched from opt-in to opt-out organ donation in 2020. Place the following events in the correct logical order.',
        items: [
          { label: 'Organ donor register size increases; transplant waiting list shortens over time', note: '' },
          { label: 'Policy analysis identifies status quo bias: most people support donation but forget to register', note: '' },
          { label: 'England switches to soft opt-out default: adults are deemed to consent unless they register an objection', note: '' },
          { label: 'Evidence from Wales (2015 opt-out) shows consent rates rose significantly under the new default', note: '' },
          { label: 'Government identifies shortage of donor organs; transplant patients dying on waiting lists', note: '' },
          { label: 'Evaluation: donation rates higher under opt-out; some concerns about informed consent and family override remain', note: '' }
        ],
        correctOrder: [4, 1, 3, 2, 0, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Government identifies the problem: organ shortage, preventable deaths on waiting lists.<br>2. Behavioural analysis: status quo bias prevents registration despite supportive attitudes.<br>3. Evidence from Wales (2015 opt-out) provides a real-world test case.<br>4. England adopts soft opt-out default (2020).<br>5. Donor register grows; transplant capacity improves.<br>6. Policy evaluation: higher donation rates but ongoing debate about autonomy and informed consent.<br><br>This sequence illustrates the nudge policy process: identify behavioural barrier &rarr; find evidence &rarr; change default &rarr; measure outcome &rarr; evaluate. The Wales natural experiment was crucial: it provided causal evidence before national rollout.'
      },

      /* 10 — multi_select: internalities */
      { type: 'multi_select',
        stem: 'Which of the following are examples of <strong>internalities</strong> (costs imposed by present-biased decisions on one\'s own future self)?',
        opts: [
          'A 20-year-old starts smoking despite knowing the long-run health risks, trading future health for present enjoyment',
          'A carbon-emitting factory imposes costs on nearby residents through air pollution',
          'A person makes only minimum credit card repayments each month despite high interest rates, accumulating long-run debt',
          'A firm overfishes a common fishery, depleting stocks that others also depend on',
          'A worker contributes the minimum to their pension despite later preferences to have retired earlier and more comfortably',
          'A property developer builds in a flood risk area, increasing insurance premiums for all policyholders'
        ],
        correct: [0, 2, 4],
        exp: 'Options A, C, and E are internalities: costs that present-biased decisions impose on one\'s own future self. <strong>Smoking</strong> (A): immediate pleasure vs long-run cancer risk. <strong>Debt accumulation</strong> (C): immediate consumption vs long-run interest burden. <strong>Under-saving</strong> (E): present consumption vs future retirement comfort. Options B, D, and F are <em>externalities</em>: costs imposed on <em>other people</em>. Factory pollution harms neighbours. Overfishing depletes commons shared by others. Flood risk building raises costs for other policyholders. The distinction matters for policy: internalities justify paternalistic intervention to protect individuals from their own future selves; externalities justify corrective taxes and regulation to protect third parties.'
      }

    ]
  };

})();
