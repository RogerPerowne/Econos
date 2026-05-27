window.ECONOS_LAND_INTRO = {
  topic:        'Oligopoly',
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
    'Interpreting concentration ratios and explaining what they reveal about market structure',
    'Drawing and explaining the kinked demand curve model and the vertical gap in MR',
    'Applying game theory and the prisoner\'s dilemma to oligopoly pricing decisions',
    'Evaluating whether oligopoly is beneficial or harmful to consumers using real UK evidence'
  ],

  tip: 'Strategic interdependence is the central concept in oligopoly: every decision a firm makes must account for how rivals will react. When applying the kinked demand curve, remember that the vertical gap in the MR curve is the key analytical point &#8211; as long as MC passes through the gap, price remains rigid at P* even if costs change.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                               }
  ]
};
