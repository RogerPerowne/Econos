/* ============================================================
   ECONOS – Link It intro/landing data for factors_of_production
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Factors of Production',
  estTime: '15–20 minutes',
  goal:    'Bridge your factor-of-production knowledge into exam-quality application, analysis and evaluation using the UK\'s labour-shortage story.',

  intro: {
    summary: 'Use the UK\'s post-pandemic labour shortages and "missing workforce" to analyse how the quantity, quality and mobility of factors of production shape an economy\'s capacity – and whether supply-side policies can close the output gap.',
    heroKey: 'heroBars',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Apply factor-of-production theory to real UK labour-market data',
      'Trace how mobility-raising policies feed into output and productivity',
      'Pick and label the right macro diagram for a factor-quality improvement',
      'Evaluate which conditions decide whether a retraining scheme actually raises GDP'
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
