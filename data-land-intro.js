/* ============================================================
   ECONOS — Land It intro page data
   ============================================================ */

window.ECONOS_LAND_INTRO = {
  topic:        'Causes of Inflation & Deflation',
  sessionLabel: 'Session 3 of 3: Land',

  sectionA: {
    description: 'Short data-response questions worth 5 marks each. Select how many to include in your session.'
  },

  sectionB: {
    description: 'Choose the extended response question type. Each mark value represents a different question style.',
    options: [
      { id: 'b5',   label: '5 marks',  marks: 5  },
      { id: 'b8',   label: '8 marks',  marks: 8  },
      { id: 'b10',  label: '10 marks', marks: 10 },
      { id: 'b12',  label: '12 marks', marks: 12 },
      { id: 'b15',  label: '15 marks', marks: 15 },
      { id: 'none', label: 'Skip',     marks: 0  }
    ]
  },

  sectionC: {
    description: 'A 25-mark essay question. In the exam you choose from two options. In Land It you practice one.'
  },

  trains: [
    'Applying economic theory to unseen data and extracts',
    'Building extended chains of analysis with accurate diagrams',
    'Evaluating policy and reaching a supported final judgement',
    'Practising extended writing under exam-style time pressure'
  ],

  tip: 'Start with a Section B question for a focused 15-minute practice. Add Sections A and C when you are ready to simulate a fuller exam block.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: 'topic_inflation.html'      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: 'link_inflation_intro.html' },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                     }
  ]
};
