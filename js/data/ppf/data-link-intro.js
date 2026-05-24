/* ============================================================
   ECONOS — Link It intro/landing data for ppf
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Production Possibility Frontiers',
  estTime: '15–20 minutes',
  goal:    'Bridge your PPF knowledge into exam-quality application, analysis and evaluation of real-world trade-offs.',

  intro: {
    summary: "You've locked in PPF construction, opportunity cost, shifts, and efficiency. Now train the skills examiners reward — applying PPF analysis to a real government investment decision, building a watertight causal chain from trade-off to long-run shift, and reaching a supported judgement about whether the short-run sacrifice of current consumption is justified.",
    heroKey: 'heroPPF',

    doInThis: 'Four short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Explain what points on, inside, and beyond the PPF represent',
      'Build the causal chain from investment choice to PPF shift',
      'Evaluate the conditions under which outward PPF shifts are more or less likely',
      'Judge whether the sacrifice of current consumption for investment is economically justified'
    ],
    tip: "These steps are cognitive drills — same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context',    skill: 'Application', sub: 'Read an extract and classify which evidence changes the case for green investment as a rational PPF trade-off.', href: TopicLoader.buildUrl('link_context.html'), state: 'available' },
      { num: 2, name: 'Build the chain',    skill: 'Analysis',    sub: 'Order the steps that explain how green investment moves the economy along the PPF and can shift it outward.',     href: TopicLoader.buildUrl('link_chain.html'),   state: 'available' },
      { num: 3, name: 'Calculate It',       skill: 'Application', sub: 'Calculate opportunity costs from PPF coordinates and interpret points on, inside, and beyond the frontier.',      href: TopicLoader.buildUrl('link_calc.html'),    state: 'available' },
      { num: 4, name: 'It depends on',      skill: 'Evaluation',  sub: 'Rank the factors that most change whether the long-run PPF shift justifies the short-run opportunity cost.',     href: TopicLoader.buildUrl('link_depends.html'), state: 'available' },
      { num: 5, name: 'Make the judgement', skill: 'Evaluation',  sub: 'Synthesise context, chain and conditions into an exam-quality judgement on the green investment trade-off.',      href: TopicLoader.buildUrl('link_judge.html'),   state: 'available' }
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
