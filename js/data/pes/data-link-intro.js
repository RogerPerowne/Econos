/* ============================================================
   ECONOS – Link It intro/landing data for pes
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Price Elasticity of Supply',
  estTime: '15–20 minutes',
  goal:    'Bridge your PES knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "Use the UK rental housing shortage of 2022–23 to apply PES – how the responsiveness of supply shapes whether a demand shock causes large price rises, large quantity rises, or both.",
    heroKey: 'heroElasticity',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Identify what determines PES in a real housing context',
      'Build the causal chain from demand surge to price spike via low PES',
      'Read a demand-shift diagram with inelastic supply',
      'Evaluate the conditions under which PES determines market outcomes'
    ],
    tip: "These steps are cognitive drills – same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context', skill: 'Application', sub: 'Read an extract and judge which evidence changes the answer.', href: TopicLoader.buildUrl('link_context.html'), state: 'available' },
      { num: 2, name: 'Build the chain', skill: 'Analysis', sub: 'Order or fill the steps in a reasoning chain.', href: TopicLoader.buildUrl('link_chain.html'), state: 'available' },
      { num: 3, name: 'Calculate It', skill: 'Analysis', sub: 'Work through the calculations with revealable methods.', href: TopicLoader.buildUrl('link_calc.html'), state: 'available' },
      { num: 4, name: 'It depends on', skill: 'Evaluation', sub: 'Rank the factors that most change the answer.', href: TopicLoader.buildUrl('link_depends.html'), state: 'available' },
      { num: 5, name: 'Make the judgement', skill: 'Evaluation', sub: 'Synthesise everything into an exam-quality judgement.', href: TopicLoader.buildUrl('link_judge.html'), state: 'available' }
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
