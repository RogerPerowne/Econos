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
    doInThis: 'Work through the cards covering the positive/normative distinction and the role value judgements play in real economic decision-making.',
    outcomes: [
      'Define positive and normative statements and tell them apart',
      'Spot the flag words that signal a value judgement',
      'Explain why value judgements shape economic policy and disagreement'
    ],
    tip: 'Flag words like "should", "ought", "fair" or "too much" almost always signal a normative statement. A positive statement could in principle be checked against data.',
    stages: [
      { num: 1, name: 'Learn it', sub: '2 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Coming soon', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'posnorm_1',
      template: 'paired',
      stepLabel: 'Learn: Step 1 of 2',
      title: 'Positive vs Normative Statements',
      lede: 'Positive statements describe how the world IS and can be tested. Normative statements judge how the world OUGHT to be and rest on values.',
      tip: { icon: 'ℹ️', text: '<strong>Positive</strong> statements can be tested with evidence. <strong>Normative</strong> statements involve value judgements about what ought to happen.', tone: 'blue' },
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
    {
      id: 'posnorm_2',
      template: 'cause',
      stepLabel: 'Learn: Step 2 of 2',
      title: 'Spotting the Distinction in Practice',
      lede: 'In exam extracts and real debate the two are tangled together. The fastest way to separate them is to hunt for the flag words.',
      tip: { icon: '🚩', tone: 'amber', text: 'Words like <strong>should</strong>, <strong>ought</strong>, <strong>fair</strong>, <strong>too much/little</strong> and <strong>better</strong> almost always signal a normative claim.' },
      body: 'A positive statement makes a claim you could, in principle, check against data – even if the data is hard to gather. A normative statement asks you to <em>agree with a value</em>, so no amount of evidence settles it. Train yourself to label each sentence in an extract: it makes the evaluation paragraph almost write itself.',
      causes: [
        { head: 'Positive – testable', icon: '📊', body: '"A carbon tax of \xa350/tonne would cut emissions by roughly 8%." A claim about cause and effect that data could confirm or refute.' },
        { head: 'Normative – value-laden', icon: '⚖️', body: '"The government ought to prioritise the environment over growth." Rests on what you think matters most – not on evidence.' },
        { head: 'Often blended', icon: '🔀', body: '"Inequality is rising (positive) and the rich should pay more tax (normative)." Real arguments stitch the two together – your job is to unpick them.' }
      ],
      causesLabel: 'Label every sentence',
      causesEmoji: '🔍',
      keyTakeaway: 'Find the flag word. If the claim asks you to share a value, it is normative; if it could be checked against evidence, it is positive.',
      examEdge: 'Examiners reward candidates who explicitly note when a statement in the extract is normative – it shows you know that a policy recommendation cannot be "proved" and must be evaluated against competing values.'
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
