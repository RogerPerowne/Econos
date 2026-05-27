/* ============================================================
   ECONOS – Land It intro page data
   Topic: Negative Externalities (1.12)
   ============================================================ */

window.ECONOS_LAND_INTRO = {
  topic:        'Negative Externalities',
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
    'Drawing and interpreting MSC/MSB diagrams and identifying the deadweight welfare loss triangle',
    'Explaining how taxes, regulation, and tradeable permits correct negative externalities &#8211; and their limitations',
    'Evaluating market-based vs command-and-control approaches using UK evidence (ETS, congestion charge, fuel duty)',
    'Constructing a balanced essay on government intervention to correct negative externalities'
  ],

  tip: 'Start with a Section A question to build your diagram confidence. Add Section B when you are ready to apply analysis to a real context, and Section C to practise full essay technique under timed conditions.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                               }
  ]
};
