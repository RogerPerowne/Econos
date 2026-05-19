window.ECONOS_LAND_INTRO = {
  topic:        'Monetary Policy',
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
    'Tracing the transmission mechanism from Bank Rate to inflation and output',
    'Analysing quantitative easing and its effects on the money supply',
    'Evaluating the limitations of monetary policy (lags, zero lower bound)',
    'Practising extended writing under exam-style time pressure'
  ],

  tip: 'Always trace the full transmission mechanism: Bank Rate → commercial interest rates → consumption and investment → aggregate demand → price level and output. Do not just say &#8220;raising rates reduces inflation&#8221; &#8212; show the mechanism step by step.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.buildUrl('topic.html')      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.buildUrl('link_intro.html') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                     }
  ]
};
