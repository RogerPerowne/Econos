/* ============================================================
   ECONOS – Link It intro/landing data for public_goods
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Public Goods',
  estTime: '15–20 minutes',
  goal:    'Bridge your public goods knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "Use UK coastal flood defence provision to apply the public goods framework – non-rivalry, non-excludability and the free rider problem – and evaluate why state provision financed by taxation is typically the only effective solution.",
    heroKey: 'heroPublicGoods',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Apply non-rivalry and non-excludability to a real public good',
      'Explain the free rider problem and its effect on market demand',
      'Apply the public goods framework to real-world cases including lighthouses and defence',
      'Evaluate whether state provision or market-based alternatives can solve the under-provision problem'
    ],
    tip: "These steps are cognitive drills – same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context', skill: 'Application', sub: 'Read an extract and judge which evidence changes the answer.', href: TopicLoader.routes.link('context'), state: 'available' },
      { num: 2, name: 'Build the chain', skill: 'Analysis', sub: 'Order or fill the steps in a reasoning chain.', href: TopicLoader.routes.link('chain'), state: 'available' },
      { num: 3, name: 'Read the extract', skill: 'Analysis', sub: 'Pull the evaluation-worthy detail from a real-world extract.', href: TopicLoader.routes.link('extract'), state: 'available' },
      { num: 4, name: 'It depends on', skill: 'Evaluation', sub: 'Rank the factors that most change the answer.', href: TopicLoader.routes.link('depends'), state: 'available' },
      { num: 5, name: 'Make the judgement', skill: 'Evaluation', sub: 'Synthesise everything into an exam-quality judgement.', href: TopicLoader.routes.link('judge'), state: 'available' }
    ],

    stages: [
      { num: 1, name: 'Learn it', sub: 'Recap and lock in the gems',    state: 'done',    href: TopicLoader.routes.learn()      },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'current'                                                },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked'                                                 }
    ],

    startUrl:   TopicLoader.routes.link('context'),
    startLabel: 'Start Link it'
  }
};
