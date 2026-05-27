/* ============================================================
   ECONOS – Link It intro/landing data for economic_systems
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Economic Systems',
  estTime: '12–18 minutes',
  goal:    'Bridge your knowledge of market, command and mixed economies into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "You've locked in how different economic systems allocate resources – through the price mechanism, central planning, or a combination of both. Now train the skills examiners reward – applying the framework to real comparisons between the UK, Cuba and North Korea, building the watertight price mechanism → efficiency chain, and reaching a supported judgement on whether a mixed economy is the optimal system.",
    heroKey: 'heroBars',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real comparative data to classify evidence on free market vs command economy efficiency',
      'Build the causal chain from price signals through to allocative efficiency',
      'Apply the economic systems framework to North Korea, South Korea and Cuba case extracts',
      'Evaluate the key conditions that determine whether free markets outperform command economies',
      'Reach a supported judgement on whether a mixed economy best balances efficiency and equity'
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
