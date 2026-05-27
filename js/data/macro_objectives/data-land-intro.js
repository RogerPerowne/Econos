window.ECONOS_LAND_INTRO = {
  topic:        'Macroeconomic Objectives and Conflicts',
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
    description: 'A 25-mark essay question. In the exam you choose from two options. In Land It you practice one.'
  },

  trains: [
    'Identifying and analysing conflicts between macroeconomic objectives',
    'Applying the Phillips curve and AD/AS to explain policy trade-offs',
    'Evaluating whether objectives can be pursued simultaneously or require trade-offs',
    'Practising extended writing under exam-style time pressure'
  ],

  tip: 'The core skill is identifying WHICH objectives conflict and WHY. Growth vs inflation, unemployment vs inflation (Phillips curve), current account vs growth &#8211; always explain the mechanism of conflict, not just state that it exists.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                     }
  ]
};
