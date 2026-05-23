/* ============================================================
   ECONOS — Link It intro/landing data for indirect_taxes_subsidies
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Indirect Taxes &amp; Subsidies',
  estTime: '15–20 minutes',
  goal:    'Apply the tax incidence framework — who really pays a specific tax, and what changes how the burden is split.',

  intro: {
    summary: "You've mastered how specific and ad valorem taxes shift supply, how the burden splits between consumers and producers, and how elasticity determines who really pays. Now train the skills examiners reward — applying the incidence framework to real context, building a watertight supply-shift → price-split causal chain, and reaching a supported judgement on when a sugar levy is most effective.",
    heroKey: 'heroIntervention',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real context to test whether a sugar levy is justified and effective',
      'Build a watertight specific tax → supply shift → incidence causal chain',
      'Pick, label and explain the supply and demand diagram for a specific indirect tax.',
      'Evaluate the key conditions that change whether the tax corrects the externality'
    ],
    tip: "These steps are cognitive drills — same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context',    skill: 'Application', sub: 'Read an extract and classify which evidence changes the case for extending the sugar levy.',                        href: TopicLoader.buildUrl('link_context.html'), state: 'available' },
      { num: 2, name: 'Build the chain',    skill: 'Analysis',    sub: 'Order the steps that explain how a specific tax shifts supply and splits the burden between consumers and producers.', href: TopicLoader.buildUrl('link_chain.html'),   state: 'available' },
      { num: 3, name: 'Diagram connector',  skill: 'Analysis',    sub: 'Pick, label and explain the supply and demand diagram for a specific indirect tax.',                                  href: TopicLoader.buildUrl('link_diagram.html'), state: 'available' },
      { num: 4, name: 'It depends on',      skill: 'Evaluation',  sub: 'Rank the factors that most change whether a sugar levy reduces obesity-related externalities.',                        href: TopicLoader.buildUrl('link_depends.html'), state: 'available' },
      { num: 5, name: 'Make the judgement', skill: 'Evaluation',  sub: 'Synthesise context, chain, diagram and conditions into an exam-quality judgement.',                                   href: TopicLoader.buildUrl('link_judge.html'),   state: 'available' }
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
