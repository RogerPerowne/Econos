/* ============================================================
   ECONOS – Link It intro/landing data for supply
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Supply',
  estTime: '15–20 minutes',
  goal:    'Bridge your supply knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "You've locked in the law of supply, curve shifts and producer surplus. Now train the skills examiners reward – applying the framework to a real cost shock, building a watertight cost → supply shift → new equilibrium chain, and reaching a supported judgement on when cost increases are most damaging.",
    heroKey: 'heroSupply',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Identify supply shifters in a real UK industrial cost context',
      'Build the causal chain from rising energy costs to a new market equilibrium',
      'Read and label a supply-shift diagram correctly',
      'Evaluate when cost increases are more vs less damaging to firms and consumers'
    ],
    tip: "These steps are cognitive drills – same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context', skill: 'Application', sub: 'Read an extract and judge which evidence changes the answer.', href: TopicLoader.buildUrl('link_context.html'), state: 'available' },
      { num: 2, name: 'Build the chain', skill: 'Analysis', sub: 'Order or fill the steps in a reasoning chain.', href: TopicLoader.buildUrl('link_chain.html'), state: 'available' },
      { num: 3, name: 'Diagram connector', skill: 'Analysis', sub: 'Pick, label, interpret and explain the right diagram.', href: TopicLoader.buildUrl('link_diagram.html'), state: 'available' },
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
