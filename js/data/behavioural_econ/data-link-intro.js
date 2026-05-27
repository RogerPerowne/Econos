/* ============================================================
   ECONOS – Link It intro/landing data for behavioural_econ
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Behavioural Economics',
  estTime: '15–20 minutes',
  goal:    'Bridge your behavioural economics knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: 'Use the UK Soft Drinks Industry Levy and nutritional labelling to apply behavioural economics – how present bias causes overconsumption of unhealthy products, and whether nudge theory or Pigouvian taxes are more effective at correcting behavioural market failure.',
    heroKey: 'heroBehavioural',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Explain present bias and its effect on consumer demand',
      'Build the causal chain from behavioural failure to overconsumption to policy correction',
      'Read a demand-left diagram showing how nudges correct present bias',
      'Evaluate the conditions under which nudges outperform Pigouvian taxes'
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
