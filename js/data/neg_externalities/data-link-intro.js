/* ============================================================
   ECONOS — Link It intro/landing data for neg_externalities
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Negative Externalities',
  estTime: '15–20 minutes',
  goal:    'Bridge your externality knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "You've locked in the costs trilogy, the negative externality diagram and the key policies. Now train the skills examiners reward — applying the framework to real context, building a watertight MPC → MSC chain, and reaching a supported judgement on whether intervention is justified.",
    heroKey: 'heroBars',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real context to test whether intervention is justified',
      'Build a watertight MPC → MSC → overproduction causal chain',
      'Pick, label and explain the negative externality supply and demand diagram',
      'Evaluate the key conditions that change the policy verdict'
    ],
    tip: "These steps are cognitive drills — same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context',    skill: 'Application', sub: 'Read an extract and classify which evidence changes the case for intervention.',                    href: TopicLoader.buildUrl('link_context.html'), state: 'available' },
      { num: 2, name: 'Build the chain',    skill: 'Analysis',    sub: 'Order the steps that explain why the market overproduces beyond the social optimum.',               href: TopicLoader.buildUrl('link_chain.html'),   state: 'available' },
      { num: 3, name: 'Read the Extract',   skill: 'Application', sub: 'Analyse a real policy extract (ULEZ) and identify the market failure and intervention type.',      href: TopicLoader.buildUrl('link_extract.html'), state: 'available' },
      { num: 4, name: 'Diagram connector',  skill: 'Analysis',    sub: 'Pick, label and explain the supply and demand diagram for a negative externality.',                href: TopicLoader.buildUrl('link_diagram.html'), state: 'available' },
      { num: 5, name: 'It depends on',      skill: 'Evaluation',  sub: 'Rank the factors that most change whether a Pigouvian tax corrects the externality.',               href: TopicLoader.buildUrl('link_depends.html'), state: 'available' },
      { num: 6, name: 'Make the judgement', skill: 'Evaluation',  sub: 'Synthesise context, chain, diagram and conditions into an exam-quality judgement.',                 href: TopicLoader.buildUrl('link_judge.html'),   state: 'available' }
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
