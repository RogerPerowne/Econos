/* ============================================================
   ECONOS – Land It intro page data
   Topic: Aggregate Supply (2.8)
   ============================================================ */

window.ECONOS_LAND_INTRO = {
  topic:        'Aggregate Supply',
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
    description: 'A 25-mark essay question. In the exam you choose from two options. In Land It you practise one.'
  },

  trains: [
    'Distinguishing between SRAS and LRAS and identifying what shifts each curve',
    'Applying supply-side shocks &#8211; particularly energy price changes &#8211; to the AD&#47;AS model',
    'Evaluating productivity data and its relationship to aggregate supply',
    'Constructing a balanced essay on the relative effectiveness of supply-side versus demand-side policies'
  ],

  tip: 'Start with a Section B question for a focused 15-minute practice. Add Sections A and C when you are ready to simulate a fuller exam block.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                               }
  ]
};
