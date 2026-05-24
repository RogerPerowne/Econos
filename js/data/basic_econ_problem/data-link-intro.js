/* ============================================================
   ECONOS — Link It intro/landing data for basic_econ_problem
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'The Economic Problem',
  estTime: '15–20 minutes',
  goal:    'Bridge your knowledge of scarcity and opportunity cost into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "You've locked in scarcity, opportunity cost, and the three fundamental economic questions. Now train the skills examiners reward — applying the framework to a real context, building a watertight causal chain from unlimited wants to allocation decisions, and reaching a supported judgement about whether the economic problem is more or less severe in different systems.",
    heroKey: 'heroScarcity',

    doInThis: 'Four short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Apply scarcity and opportunity cost to a real-world resource allocation decision',
      'Build the causal chain from unlimited wants to the three economic questions',
      'Evaluate the conditions under which opportunity cost is most and least visible',
      'Construct a judgement about whether the economic problem is more or less severe in mixed economies'
    ],
    tip: "These steps are cognitive drills — same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context',    skill: 'Application', sub: 'Read an extract and classify which evidence changes the case for how severe the economic problem is.',    href: TopicLoader.buildUrl('link_context.html'), state: 'available' },
      { num: 2, name: 'Build the chain',    skill: 'Analysis',    sub: 'Order the steps that explain how scarcity forces the three central economic questions.',                  href: TopicLoader.buildUrl('link_chain.html'),   state: 'available' },
      { num: 3, name: 'It depends on',      skill: 'Evaluation',  sub: 'Rank the factors that most change whether the economic problem is more or less acute.',                   href: TopicLoader.buildUrl('link_depends.html'), state: 'available' },
      { num: 4, name: 'Make the judgement', skill: 'Evaluation',  sub: 'Synthesise context, chain and conditions into an exam-quality judgement on the unavoidability of the economic problem.', href: TopicLoader.buildUrl('link_judge.html'),   state: 'available' }
    ],

    stages: [
      { num: 1, name: 'Learn it', sub: 'Recap and lock in the gems',    state: 'done',    href: TopicLoader.buildUrl('topic.html')      },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'current'                                                },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked'                                                 }
    ],

    startUrl:   TopicLoader.buildUrl('link_context.html'),
    startLabel: 'Start Link it'
  }
};
