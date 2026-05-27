window.ECONOS_LAND_INTRO = {
  topic:        'Perfect Competition',
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
    'Applying the five assumptions of perfect competition to explain price-taking behaviour and long-run outcomes',
    'Drawing and interpreting short-run and long-run equilibrium diagrams for a perfectly competitive firm',
    'Evaluating productive, allocative, and dynamic efficiency in perfect competition versus other market structures',
    'Constructing a balanced essay on whether perfect competition is the most desirable market structure'
  ],

  tip: 'Always use two diagrams for perfect competition questions: the industry diagram (D and S determining the market price) and the individual firm diagram (horizontal demand at P*, with AC and MC). Show profit or loss on the firm diagram by comparing P to AC at the profit-maximising output Q* where MR&#160;=&#160;MC.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                               }
  ]
};
