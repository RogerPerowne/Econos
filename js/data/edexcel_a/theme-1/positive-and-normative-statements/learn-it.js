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
            heading: 'Example 1: Minimum wage',
            left:  { tone: 'blue',  name: 'Economist A', premise: 'supports a higher minimum wage.', reason: 'improves fairness and helps low-paid workers achieve a decent standard of living.' },
            right: { tone: 'amber', name: 'Economist B', premise: 'opposes a higher minimum wage.',  reason: 'may lead to job losses and reduce flexibility for firms, especially for young or low-skilled workers.' }
          },
          {
            heading: 'Example 2: Carbon tax',
            left:  { tone: 'blue',  name: 'Economist A', premise: 'supports a carbon tax.', reason: 'tackles climate change, encourages cleaner choices and protects future generations.' },
            right: { tone: 'amber', name: 'Economist B', premise: 'opposes a carbon tax.',  reason: 'increases the cost of living and reduces competitiveness for businesses and households.' }
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
        position: 'after-branches',
        left:  { tone: 'blue',  icon: '📊', label: 'Positive (facts)',     caption: 'Describes what is – based on evidence and data.' },
        right: { tone: 'amber', icon: '⚖️', label: 'Normative (values)',   caption: 'Judges what ought to be – based on values and beliefs.' }
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
      body: '<strong>Clue words:</strong> should · ought · fair · unfair · better · worse · desirable. If a statement uses these words, it is likely to be normative.',
      table: {
        title: 'Try these',
        emoji: '✏️',
        headers: ['Statement', 'Type'],
        rows: [
          { icon: '1️⃣', label: 'A rise in VAT increases prices.',            value: 'Positive' },
          { icon: '2️⃣', label: 'The government should cut taxes.',           value: 'Normative' },
          { icon: '3️⃣', label: 'The minimum wage has increased.',            value: 'Positive' },
          { icon: '4️⃣', label: 'It is unfair that chief executives earn so much.', value: 'Normative' },
          { icon: '5️⃣', label: 'A carbon tax reduces demand for fossil fuels.', value: 'Positive' },
          { icon: '6️⃣', label: 'The NHS ought to receive more funding.',     value: 'Normative' }
        ]
      },
      tipLate: { icon: 'ℹ️', tone: 'blue', text: 'Some arguments include both positive and normative elements. Be clear about which is which.' },
      keyTakeaway: 'Look for evidence on one hand and judgement language on the other.',
      examEdge: 'When asked to distinguish the two, quote the part of the statement that makes it testable or value-based.'
    }
  ]
};

/* ============================================================
   End-of-Learn-It quiz pool — Positive & Normative Statements.
   New quiz for topic 1.1.2 (Edexcel A).
   ============================================================ */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Positive & Normative Statements',
    subtitle: 'Theme 1 &middot; Topic 1.1.2 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('intro'),
    backLabel: 'Back to Learn It',
    lede: '6 questions · ~5 minutes · covers the positive/normative distinction, flag words, and the role of value judgements in policy',
    shortNames: [
      'Define the distinction', 'Classify statements', 'Flag words',
      'Value judgements', 'Blended claim', 'Para fill'
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

      /* 4 – MCQ: role of value judgements */
      { type: 'mcq',
        stem: 'Two economists agree on every fact about a carbon tax’s effects, yet still disagree on whether to introduce it. What best explains this?',
        opts: [
          'They hold different value judgements about how to weigh growth, fairness and the environment',
          'One of them must have made an arithmetic error in the forecast',
          'Positive analysis is unreliable, so facts cannot guide policy',
          'Economic policy is purely scientific and disagreement is impossible'
        ],
        ans: 0,
        exp: 'Even with identical positive analysis (agreement on the facts and forecasts), policy choices depend on <strong>value judgements</strong>: how much weight to give present growth versus future sustainability, or efficiency versus fairness. This is why economists who share the same data can still recommend opposite policies – and why policy debate is never settled by evidence alone.'
      },

      /* 5 – MCQ: blended claim */
      { type: 'mcq',
        stem: 'Consider: "Inequality has risen since 1980, so the rich should pay more tax." Which is the most accurate analysis?',
        opts: [
          'The first clause is positive (testable); the second is normative (a value judgement)',
          'Both clauses are positive because they mention measurable things',
          'Both clauses are normative because they concern government policy',
          'The first clause is normative; the second is positive'
        ],
        ans: 0,
        exp: 'Real arguments blend the two. "Inequality has risen since 1980" is <strong>positive</strong> – it can be checked against income data. "The rich should pay more tax" is <strong>normative</strong> – it rests on a view about fairness that evidence cannot settle. Splitting a sentence into its positive and normative parts is exactly the skill examiners reward in evaluation.'
      },

      /* 6 – Para fill */
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
