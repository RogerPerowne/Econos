window.ECONOS_LAND_INTRO = {
  topic:        'Types of Efficiency',
  sessionLabel: 'Session 3 of 3: Land',

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
    'Distinguishing productive, allocative, dynamic, and X-efficiency with precise definitions and conditions',
    'Explaining why monopoly fails allocative efficiency (P &gt; MC) but may achieve dynamic efficiency',
    'Analysing the static versus dynamic efficiency trade-off in pharmaceutical markets',
    'Evaluating whether perfect competition is always more efficient than monopoly across all four types'
  ],

  tip: 'Never confuse the four types of efficiency. Productive: minimum average cost (lowest point of AC curve). Allocative: P = MC (resources match consumer preferences). Dynamic: investment in innovation over time. X-efficiency: no internal slack or waste given existing technology. A monopoly may fail productive and allocative efficiency yet outperform on dynamic efficiency &#8212; the overall verdict depends on which type matters most in context.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.buildUrl('topic.html')      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.buildUrl('link_intro.html') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                               }
  ]
};
