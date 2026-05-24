/* ============================================================
   ECONOS — Link It intro/landing data for taxes_subsidies_policy
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Taxes &amp; Subsidies as Policy',
  estTime: '15–20 minutes',
  goal:    'Apply the taxes and subsidies framework — when subsidies correct underproduction, and what conditions make them more or less effective than regulation.',

  intro: {
    summary: "You've locked in the justification logic, the UK case studies and the three-axis evaluation framework. Now train the skills examiners reward — applying the subsidy framework to real context, building a watertight MPB → underproduction chain, and reaching a supported judgement on whether the CfD scheme is justified.",
    heroKey: 'heroIntervention',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real context to test whether a production subsidy is justified',
      'Build a watertight MPB → underproduction → DWL causal chain',
      'Pick, label and explain the supply and demand diagram showing a production subsidy correcting underproduction.',
      'Evaluate the key conditions that change the policy verdict'
    ],
    tip: "These steps are cognitive drills — same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

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
