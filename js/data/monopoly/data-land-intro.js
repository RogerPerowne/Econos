/* ============================================================
   ECONOS – Land It intro page data
   Topic: Monopoly (3.8)
   ============================================================ */

window.ECONOS_LAND_INTRO = {
  topic:        'Monopoly',
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
    'Drawing and interpreting monopoly profit-maximisation diagrams (MR = MC, P &gt; MC, deadweight welfare loss)',
    'Explaining sources of monopoly power: barriers to entry, economies of scale, network effects, patents',
    'Evaluating the costs and benefits of monopoly &#8211; including dynamic efficiency, natural monopoly, and X-inefficiency',
    'Applying UK competition policy (CMA, RPI-X regulation, market investigations) to real cases'
  ],

  tip: 'Start with a Section A diagram question to practise the MR = MC profit-maximisation rule. Section B pushes you into extended analysis using real UK cases; Section C builds your full essay technique under exam conditions.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.buildUrl('topic.html')      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.buildUrl('link_intro.html') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                               }
  ]
};
