window.ECONOS_LAND_INTRO = {
  topic:        'Barriers to Entry',
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
    'Distinguishing structural barriers (sunk costs, economies of scale, patents) from strategic barriers (limit pricing, predatory pricing)',
    'Explaining why sunk costs &#8211; not just fixed costs &#8211; deter entry',
    'Analysing network effects and data advantages as digital-era barriers to entry',
    'Evaluating whether barriers to entry are always harmful or can promote innovation and efficiency'
  ],

  tip: 'The key distinction is structural versus strategic barriers. Structural barriers arise naturally from the industry&#39;s cost or technology conditions &#8211; sunk costs, economies of scale, patents. Strategic barriers are actions incumbents deliberately take to deter entry &#8211; limit pricing, predatory pricing, brand proliferation. Always ask: does the barrier reflect a genuine cost advantage, or is it an artificial restriction on competition?',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.buildUrl('topic.html')      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.buildUrl('link_intro.html') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                               }
  ]
};
