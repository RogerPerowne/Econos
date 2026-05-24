/* ============================================================
   ECONOS — Link It intro/landing data for info_gaps
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Information Gaps',
  estTime: '15–20 minutes',
  goal:    'Bridge your information gaps knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "Use the UK Buy Now Pay Later market to apply the information gap framework — how asymmetric information about true credit costs inflates demand above the rational level, causing overconsumption and consumer harm, and whether mandatory disclosure can correct this.",
    heroKey: 'heroBehavioural',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Explain how information asymmetry causes demand to deviate from the rational level',
      'Build the causal chain from hidden credit costs to overconsumption',
      'Apply economic theory to real-world BNPL extracts including the Akerlof lemons model',
      'Evaluate whether mandatory disclosure or alternative policies are most effective'
    ],
    tip: "These steps are cognitive drills — same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context',    skill: 'Application', sub: 'Read an extract and classify which evidence changes the case for mandatory disclosure.',         href: TopicLoader.buildUrl('link_context.html'), state: 'available' },
      { num: 2, name: 'Build the chain',    skill: 'Analysis',    sub: 'Order the steps that explain why hidden BNPL costs inflate demand above the rational level.',   href: TopicLoader.buildUrl('link_chain.html'),   state: 'available' },
      { num: 3, name: 'Read the Extract',   skill: 'Analysis',    sub: 'Apply the Akerlof lemons model and information asymmetry theory to real BNPL market extracts.', href: TopicLoader.buildUrl('link_extract.html'), state: 'available' },
      { num: 4, name: 'It depends on',      skill: 'Evaluation',  sub: 'Rank the factors that most change whether mandatory disclosure corrects the information gap.',    href: TopicLoader.buildUrl('link_depends.html'), state: 'available' },
      { num: 5, name: 'Make the judgement', skill: 'Evaluation',  sub: 'Synthesise context, chain, extract and conditions into an exam-quality judgement.',              href: TopicLoader.buildUrl('link_judge.html'),   state: 'available' }
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
