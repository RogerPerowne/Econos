window.ECONOS_TOPIC = {
  id: 'positive-and-normative-statements',
  topicNum: '1.1.2',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Positive & Normative Statements',
  estTime: '5-7 minutes',
  goal: 'Distinguish positive (testable) from normative (value-laden) statements, and see how value judgements shape economic policy.',
  intro: {
    heroKey: 'heroScarcity',
    summary: 'Economists try to keep two kinds of claim apart: statements of fact that can be tested against evidence, and statements of value about what ought to happen. Mixing them up is one of the most common ways exam answers lose marks – and one of the main reasons economists who agree on the facts still disagree on policy.',
    doInThis: 'Work through three cards: the positive/normative distinction, the role value judgements play in policy, and how to spot the distinction in practice.',
    outcomes: [
      'Define positive and normative statements and tell them apart',
      'Explain why value judgements shape economic policy and disagreement',
      'Spot the flag words that signal a normative claim'
    ],
    tip: 'Flag words like "should", "ought", "fair" or "too much" almost always signal a normative statement. A positive statement could in principle be checked against data.',
    stages: [
      { num: 1, name: 'Learn it', sub: '3 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Coming soon', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'posnorm_1',
      template: 'paired',
      stepLabel: 'Learn: Step 1 of 3',
      title: 'Positive vs Normative Statements',
      lede: 'Positive statements describe how the world IS and can be tested. Normative statements judge how the world OUGHT to be and rest on values.',
      comparison: {
        left:  { tone: 'blue',  icon: '🔍', label: 'Positive', caption: 'Describes how the world IS – and can be tested against evidence.' },
        right: { tone: 'amber', icon: '⚖️', label: 'Normative', caption: 'Judges how the world OUGHT to be – and rests on values.' }
      },
      pairLabel: 'What to look for',
      pairEmoji: '🔎',
      left: {
        label: 'Positive statements',
        points: [
          'Objective, factual claims about how the world IS',
          'Can be tested against evidence and accepted or rejected',
          'Example: "Raising the minimum wage to \xa312/hr increases employment costs for SMEs"',
          'Example: "UK inflation was 2.3% in October 2024"',
          'Economics as a social science aspires to positive analysis'
        ]
      },
      right: {
        label: 'Normative statements',
        points: [
          'Subjective value judgements about how the world SHOULD be',
          'Cannot be resolved purely by evidence – reflect values and priorities',
          'Example: "The government should redistribute income more aggressively"',
          'Example: "Economic growth is more important than environmental protection"',
          'Policy recommendations are inherently normative'
        ]
      },
      keyTerms: [
        { term: 'Positive statement', def: 'An objective statement that can be tested against the available evidence and found to be true or false.' },
        { term: 'Normative statement', def: 'A subjective statement that involves a value judgement about what ought to be – it cannot be settled by evidence alone.' },
        { term: 'Value judgement', def: 'An opinion about what is desirable or fair, reflecting personal or political values rather than facts.' }
      ],
      examEdge: 'Many policy debates contain both positive and normative elements. "Raising the minimum wage will reduce employment" is positive (testable). "We should raise it anyway because fairness matters more" is normative. Identifying this distinction in exam questions signals analytical maturity.'
    },
    /* ----- CARD 2 – The role of value judgements (spec 1.1.2b) ----- */
    {
      id: 'posnorm_value_judgements',
      template: 'framing',
      stepLabel: 'Learn: Step 2 of 3',
      title: 'The role of value judgements',
      lede: 'Two economists can agree on the facts but still disagree on policy. Value judgements about what ought to happen shape the conclusions they reach.',
      tip: { icon: '✅', tone: 'green', text: 'Facts alone do not decide policy – values matter too.' },
      bodyLabel: 'What is a value judgement',
      bodyEmoji: '⚖️',
      bodyTone: 'purple',
      bodyIcon: '👤',
      body: '<strong>A value judgement is a view based on opinion, ethics or beliefs about what ought to happen.</strong> It goes beyond facts and reflects what people think is desirable or acceptable.',
      versusList: {
        label: 'Same facts – different policies',
        emoji: '👥',
        rows: [
          {
            heading: 'Example 1: UK National Living Wage (raised to £11.44/hr in 2024)',
            left:  { tone: 'blue',  name: 'Economist A', premise: 'supports the rise.', reason: 'lifts ~3m low-paid workers above the real Living Wage and shifts income toward those with the highest marginal propensity to consume.' },
            right: { tone: 'amber', name: 'Economist B', premise: 'opposes the rise.',  reason: 'risks hours-cuts and youth unemployment in low-margin sectors (hospitality, care); OBR estimated 20–50k job losses.' }
          },
          {
            heading: 'Example 2: UK net-zero by 2050 (carbon pricing, ICE-car ban, heat-pump targets)',
            left:  { tone: 'blue',  name: 'Economist A', premise: 'backs the legally binding target.', reason: 'long-run climate costs (CCC estimate: 1–2% of GDP/year unmitigated) dwarf the transition cost; the UK should lead.' },
            right: { tone: 'amber', name: 'Economist B', premise: 'wants the target softened.',  reason: 'transition cost (~£50bn/yr to 2050) hits low-income households hardest and risks carbon leakage if rivals don\'t follow.' }
          }
        ]
      },
      branches: [
        { tone: 'green', icon: '👥', label: 'Different priorities',                 sub: 'People value goals differently – e.g. equality vs growth.' },
        { tone: 'green', icon: '⏱️', label: 'Different time horizons',              sub: 'Short-term costs and long-term benefits are weighed differently.' },
        { tone: 'green', icon: '⚖️', label: 'Different views of fairness or efficiency', sub: 'People disagree on what is a fair or efficient outcome.' }
      ],
      branchesLabel: 'Why disagreement happens',
      branchesEmoji: '🧩',
      branchesLayout: 'triptych',
      comparison: {
        title: 'Facts vs values',
        emoji: '📊',
        vs: '+',
        resultJoin: '=',
        position: 'after-branches',
        left:   { tone: 'blue',  icon: '📊', label: 'Positive (facts)',     caption: 'Describes what is – based on evidence and data.' },
        right:  { tone: 'amber', icon: '⚖️', label: 'Normative (values)',   caption: 'Judges what ought to be – based on values and beliefs.' },
        result: { tone: 'green', icon: '🏛️', label: 'A policy choice',      caption: 'Evidence frames the options; values decide between them.' }
      },
      keyTakeaway: 'Policy debate is not just about what is true – it is also about what society values.',
      examEdge: 'The strongest answers explain that two economists may agree on the evidence but disagree because of different value judgements.'
    },

    /* ----- CARD 3 – Spotting the distinction in practice (spec 1.1.2a) ----- */
    {
      id: 'posnorm_spotting',
      template: 'framing',
      stepLabel: 'Learn: Step 3 of 3',
      title: 'Spotting the distinction in practice',
      lede: 'Economists make positive statements about what is, and normative statements about what ought to be. Two quick tests tell them apart.',
      tip: { icon: '✅', tone: 'green', text: 'Positive statements can be tested with evidence. Normative statements express a judgement.' },
      comparison: {
        title: 'Fast test',
        emoji: '⚡',
        left:  { tone: 'blue',  icon: '🔍', label: 'Can it be checked with evidence?', caption: 'Is it about what is, was or will be? If yes → POSITIVE.' },
        right: { tone: 'amber', icon: '⚖️', label: 'Does it express what ought to happen or what is fair?', caption: 'Is it a value judgement or opinion? If yes → NORMATIVE.' }
      },
      chipWall: {
        label: 'Flag words',
        emoji: '🚩',
        tone: 'amber',
        intro: 'Spot any of these and the statement is almost certainly <strong>normative</strong> – it is making a value judgement, not stating a fact.',
        chips: ['should', 'ought', 'fair', 'unfair', 'better', 'worse', 'too much', 'desirable']
      },
      classifyList: {
        label: 'Try these',
        emoji: '✏️',
        intro: 'Make your call on each statement – tap Positive or Normative.',
        items: [
          { statement: 'A rise in VAT increases prices.',                              answer: 'positive',  why: 'A testable cause-and-effect claim – check it against price data.' },
          { statement: 'The government <strong>should</strong> cut taxes.',            answer: 'normative', why: '“should” is a value judgement about what ought to happen.' },
          { statement: 'The minimum wage has increased.',                              answer: 'positive',  why: 'A plain statement of fact you can verify.' },
          { statement: 'It is <strong>unfair</strong> that chief executives earn so much.', answer: 'normative', why: '“unfair” reflects an opinion about fairness, not a fact.' },
          { statement: 'A carbon tax reduces demand for fossil fuels.',                answer: 'positive',  why: 'A testable prediction about how people respond.' },
          { statement: 'The NHS <strong>ought to</strong> receive more funding.',      answer: 'normative', why: '“ought to” signals what someone thinks should happen.' }
        ]
      },
      tipLate: { icon: 'ℹ️', tone: 'blue', text: 'Some arguments include both positive and normative elements. Be clear about which is which.' },
      keyTakeaway: 'Look for evidence on one hand and judgement language on the other.',
      examEdge: 'When asked to distinguish the two, quote the part of the statement that makes it testable or value-based.'
    }
  ]
};

/* ============================================================
   End-of-Learn-It quiz pool – Positive & Normative Statements.
   New quiz for topic 1.1.2 (Edexcel A).
   ============================================================ */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Positive & Normative Statements',
    subtitle: 'Theme 1 &middot; Topic 1.1.2 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('intro'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · the positive/normative distinction, flag words, value judgements and blended claims',
    shortNames: [
      'Define positive', 'Classify statements', 'Find the positive',
      'Select normatives', 'Match the framing', 'Read the claims',
      'Blended claim', 'Best answer', 'Positive / Normative / Blended', 'Para fill'
    ],

    questions: [

      /* 1 – MCQ: the distinction */
      { type: 'mcq',
        stem: 'Which of the following best describes a <strong>positive economic statement</strong>?',
        opts: [
          'A statement that can, in principle, be tested against evidence and found to be true or false',
          'A statement that describes a desirable or fair outcome the economy should aim for',
          'A statement that is always optimistic about future economic prospects',
          'A statement made by a government rather than by an independent economist'
        ],
        ans: 0,
        exp: 'A <strong>positive statement</strong> is objective: it makes a claim about how the world is (or will be) that could be checked against data. "Positive" has nothing to do with optimism – a gloomy forecast ("unemployment will rise to 6%") is still positive because it is testable. <strong>Normative statements</strong>, by contrast, involve value judgements about what ought to happen and cannot be settled by evidence alone.'
      },

      /* 2 – Elastic sort: positive vs normative */
      { type: 'elastic_sort',
        stem: 'Classify each statement as <strong>positive</strong> (factual, testable) or <strong>normative</strong> (value judgement, opinion).',
        categories: ['positive', 'normative'],
        categoryLabels: ['Positive statement', 'Normative statement'],
        goods: [
          { icon: '📊', label: 'A 10% rise in the minimum wage reduces employment by approximately 2% in low-skill sectors', note: '', ans: 'positive' },
          { icon: '⚖️', label: 'The government should raise the minimum wage to reduce income inequality', note: '', ans: 'normative' },
          { icon: '📈', label: 'UK inflation rose to 11.1% in October 2022 – the highest in 41 years', note: '', ans: 'positive' },
          { icon: '🌍', label: 'Climate change is the most important economic problem facing humanity', note: '', ans: 'normative' },
          { icon: '🏦', label: 'Quantitative easing increases the money supply and can reduce long-term interest rates', note: '', ans: 'positive' },
          { icon: '🏥', label: 'Healthcare should be provided free at the point of use, funded by general taxation', note: '', ans: 'normative' }
        ],
        exp: '<strong>Positive statements</strong> are objective, factual claims that can in principle be tested or falsified using data. <strong>Normative statements</strong> express value judgements about what ought to happen ("should", "most important", "fair") – these cannot be settled by evidence alone, as they depend on ethical priorities.'
      },

      /* 3 – Odd one out: flag words */
      { type: 'odd_one_out',
        stem: 'Three of these statements are <strong>normative</strong>. Which is the <strong>odd one out</strong> (the positive statement)?',
        items: [
          { icon: '💷', label: 'The Bank of England should cut interest rates to support struggling households', note: '' },
          { icon: '📉', label: 'A 1 percentage-point cut in interest rates tends to raise consumer borrowing within 12 months', note: '' },
          { icon: '🏗️', label: 'The government ought to spend more on infrastructure than on defence', note: '' },
          { icon: '💸', label: 'Taxes on the wealthy are too low and should be increased', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is the <strong>positive</strong> statement: "a 1pp cut in interest rates tends to raise consumer borrowing within 12 months" is a testable cause-and-effect claim. The other three all contain flag words – "should", "ought", "too low" – that signal a <strong>value judgement</strong> about what is desirable, which cannot be proved by data.'
      },

      /* 4 – Multi-select: pick every normative statement */
      { type: 'multi_select',
        stem: 'Tick <strong>every normative statement</strong> below.',
        opts: [
          'The UK economy grew by 0.6% in the last quarter',
          'The government should spend more on the NHS',
          'Higher interest rates reduce consumer borrowing',
          'It is wrong that some children grow up in poverty',
          'Income tax ought to be more progressive',
          'Unemployment fell to 4.2% in March'
        ],
        correct: [1, 3, 4],
        exp: 'The normative statements are <strong>B, D and E</strong> – each rests on a value judgement ("should", "wrong", "ought"). A, C and F are <strong>positive</strong>: factual claims you could check against data, whether or not they turn out to be true. (Ticking everything is penalised, so commit only to the ones you can justify.)'
      },

      /* 5 – Match pairs: the same topic stated as fact vs judgement */
      { type: 'match_pairs',
        stem: 'Every topic can be stated as a <strong>fact</strong> or as a <strong>judgement</strong>. Match each positive statement to the normative claim about the same topic.',
        pairs: [
          { a: 'Inflation rose to 11% in 2022',          b: 'Inflation is far too high and must be cut' },
          { a: 'The minimum wage is £11.44 an hour',     b: 'The minimum wage should be raised' },
          { a: 'The top 1% own 23% of UK wealth',        b: 'Wealth is distributed unfairly' },
          { a: 'A carbon tax raises fuel prices',        b: 'A carbon tax is the right way to cut emissions' }
        ],
        exp: 'Each pair describes one topic two ways. The left tiles are <strong>positive</strong> – measurable facts. The right tiles are <strong>normative</strong> – they judge the same situation with "too high", "should", "unfairly", "right". Recognising that any topic can be framed both ways is the heart of evaluation.'
      },

      /* 6 – Data table: spot the single positive claim */
      { type: 'data_table',
        stem: 'A news article makes four claims about the housing market.',
        headers: ['#', 'Claim'],
        rows: [
          ['1', 'House prices rose 4% last year'],
          ['2', 'First-time buyers are being treated unfairly'],
          ['3', 'The government should build more social housing'],
          ['4', 'Rents are too expensive']
        ],
        question: 'Which claim is the only <strong>positive</strong> statement?',
        opts: ['Claim 1', 'Claim 2', 'Claim 3', 'Claim 4'],
        ans: 0,
        exp: 'Only <strong>Claim 1</strong> ("house prices rose 4%") is positive – a factual claim you can verify against market data. Claims 2–4 are normative: "unfairly", "should" and "too expensive" are value judgements that evidence alone cannot settle.'
      },

      /* 7 – Confidence MCQ: blended claim */
      { type: 'confidence_mcq',
        stem: 'Consider: "<em>Inequality has risen since 1980, so the rich should pay more tax.</em>" Which analysis is correct?',
        opts: [
          'The first clause is positive (testable); the second is normative (a value judgement)',
          'Both clauses are positive because they mention measurable things',
          'Both clauses are normative because they concern government policy',
          'The first clause is normative; the second is positive'
        ],
        ans: 0,
        exp: '"Inequality has risen since 1980" is <strong>positive</strong> – checkable against income data. "The rich should pay more tax" is <strong>normative</strong> – it rests on a view about fairness. Real arguments blend the two, and splitting a sentence into its positive and normative parts is exactly the skill examiners reward.'
      },

      /* 8 – Diagnostic pair: which answer scores higher */
      { type: 'diagnostic_pair',
        stem: '"Explain the difference between a positive and a normative statement." (4 marks)',
        students: [
          { name: 'Student A', badge: 'Answer A', answer: 'A positive statement is a good thing for the economy, and a normative statement is a bad or negative thing. For example, growth is positive and a recession is normative.' },
          { name: 'Student B', badge: 'Answer B', answer: 'A positive statement is an objective claim that can be tested against evidence (e.g. "inflation was 4%"). A normative statement is a value judgement about what ought to happen (e.g. "inflation should be lower") and cannot be settled by data alone.' }
        ],
        ans: 1,
        exp: '<strong>Student B</strong> scores higher: each term is defined precisely (testable vs value judgement) with a clear example. Student A makes the classic error of confusing "positive" with "good" and "normative" with "bad" – remember, "positive" means <em>testable</em>, not optimistic.'
      },

      /* 9 – Categorise: positive / normative / blended */
      { type: 'categorise',
        stem: 'Sort each statement into <strong>Positive</strong>, <strong>Normative</strong>, or <strong>Blended</strong> (a fact plus a judgement).',
        categories: ['Positive', 'Normative', 'Blended'],
        items: [
          { text: 'GDP per head is higher in Norway than in the UK',     category: 'Positive' },
          { text: 'The UK should aim to match Norway’s living standards', category: 'Normative' },
          { text: 'Unemployment is 4%, which is far too high',           category: 'Blended' },
          { text: 'A weaker pound raises import prices',                 category: 'Positive' },
          { text: 'It is unfair that graduates out-earn non-graduates',  category: 'Normative' },
          { text: 'House prices rose 4%, so the government must act',     category: 'Blended' }
        ],
        exp: 'Positive = pure fact; Normative = pure judgement; Blended = a factual claim <em>plus</em> a value judgement. "Unemployment is 4%" (fact) + "far too high" (judgement) is blended, as is "house prices rose 4%" (fact) + "the government must act" (judgement). Blended claims are the most common in real arguments – and separating them is where the marks are.'
      },

      /* 10 – Para fill */
      { type: 'para_fill',
        stem: 'Complete the paragraph on the positive/normative distinction.',
        anchor: 'Economists try to keep facts and values apart.',
        para: 'A [1] statement describes how the world is and can be [2] against evidence. A [3] statement involves a [4] judgement about how the world ought to be, and cannot be settled by [5] alone. Words such as "should" or "[6]" usually signal a normative claim. Because policy choices depend on values, economists who agree on the [7] can still [8] about what to do.',
        blanks: [
          { id: 1, opts: ['positive', 'normative', 'neutral', 'negative'], ans: 0 },
          { id: 2, opts: ['tested', 'ignored', 'assumed', 'imagined'], ans: 0 },
          { id: 3, opts: ['normative', 'positive', 'factual', 'statistical'], ans: 0 },
          { id: 4, opts: ['value', 'price', 'cost', 'data'], ans: 0 },
          { id: 5, opts: ['evidence', 'opinion', 'voting', 'taxation'], ans: 0 },
          { id: 6, opts: ['ought', 'is', 'was', 'equals'], ans: 0 },
          { id: 7, opts: ['facts', 'values', 'votes', 'prices'], ans: 0 },
          { id: 8, opts: ['disagree', 'agree', 'forecast', 'measure'], ans: 0 }
        ],
        exp: '(1) <strong>positive</strong>, (2) <strong>tested</strong>, (3) <strong>normative</strong>, (4) <strong>value</strong>, (5) <strong>evidence</strong>, (6) <strong>ought</strong>, (7) <strong>facts</strong>, (8) <strong>disagree</strong>. The distinction is the backbone of evaluation: separate the testable claims from the value judgements, and weigh the values explicitly.'
      }

    ]
  };

})();
