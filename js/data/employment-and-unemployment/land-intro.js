window.ECONOS_LAND_INTRO = {
  topic:        'Unemployment',
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
    'Applying the types of unemployment to data and extracts',
    'Analysing the causes and consequences of unemployment using AD/AS',
    'Evaluating demand-side vs supply-side policy responses',
    'Practising extended writing under exam-style time pressure'
  ],

  tip: 'Always distinguish the TYPE of unemployment before prescribing policy. Cyclical unemployment requires demand-side stimulus. Structural unemployment requires supply-side retraining. The wrong policy for the type is a classic evaluation trap.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                     }
  ]
};
