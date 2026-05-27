/* ============================================================
   ECONOS – Link It intro/landing data for market_failure
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Market Failure',
  estTime: '15–20 minutes',
  goal:    'Bridge your market failure knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "You've locked in the three routes to market failure, the welfare-loss triangle and the diagnostic framework. Now train the skills examiners reward – applying the information asymmetry framework to a real market, building a watertight adverse selection chain, and reaching a supported judgement on whether disclosure legislation is justified.",
    heroKey: 'heroBars',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real context to test whether information asymmetry justifies mandatory disclosure',
      'Build a watertight adverse selection causal chain',
      'Pick, label and explain the demand-fall diagram for information asymmetry',
      'Evaluate the key conditions that change whether disclosure or regulation is most effective'
    ],
    tip: "These steps are cognitive drills – same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context', skill: 'Application', sub: 'Read an extract and judge which evidence changes the answer.', href: TopicLoader.buildUrl('link_context.html'), state: 'available' },
      { num: 2, name: 'Build the chain', skill: 'Analysis', sub: 'Order or fill the steps in a reasoning chain.', href: TopicLoader.buildUrl('link_chain.html'), state: 'available' },
      { num: 3, name: 'Read the extract', skill: 'Analysis', sub: 'Pull the evaluation-worthy detail from a real-world extract.', href: TopicLoader.buildUrl('link_extract.html'), state: 'available' },
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
