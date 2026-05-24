/* ============================================================
   ECONOS — Link It intro/landing data for specialisation_money
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Specialisation & Money',
  estTime: '12–18 minutes',
  goal:    'Bridge your knowledge of specialisation and money into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "You've locked in how the division of labour raises productivity and why money is needed to make exchange work. Now train the skills examiners reward — applying the framework to a real-world supply chain, building the watertight specialisation → surplus → exchange → money chain, and reaching a supported judgement on whether specialisation and money are the foundation of modern prosperity.",
    heroKey: 'heroBars',

    doInThis: 'Four short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use a real UK supply-chain scenario to classify evidence on specialisation and exchange',
      'Build the causal chain from division of labour through to the need for money',
      'Evaluate the key conditions that determine whether specialisation raises productivity',
      'Reach a supported judgement on the claim that specialisation and money underpin modern prosperity'
    ],
    tip: "These steps are cognitive drills — same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context',    skill: 'Application', sub: 'Read an extract and classify which evidence supports, challenges or neither supports the claim.',  href: TopicLoader.buildUrl('link_context.html'), state: 'available' },
      { num: 2, name: 'Build the chain',    skill: 'Analysis',    sub: 'Order the steps that explain why specialisation requires money to function.',                       href: TopicLoader.buildUrl('link_chain.html'),   state: 'available' },
      { num: 3, name: 'It depends on',      skill: 'Evaluation',  sub: 'Rank the factors that most change whether specialisation raises productivity.',                     href: TopicLoader.buildUrl('link_depends.html'), state: 'available' },
      { num: 4, name: 'Make the judgement', skill: 'Evaluation',  sub: 'Synthesise context, chain and conditions into an exam-quality judgement.',                         href: TopicLoader.buildUrl('link_judge.html'),   state: 'available' }
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
