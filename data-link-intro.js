/* ============================================================
   ECONOS — Link It intro/landing data for inflation
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:        'Causes of Inflation & Deflation',
  sessionLabel: 'SESSION 2 OF 3: LINK',
  estTime:      '15–20 minutes',
  goal:         'Bridge knowledge to exam application',

  intro: {
    summary: "Now you've locked in the content. Time to train the skills examiners reward — applying it to context, building chains of reasoning, spotting flaws and reaching a judgement.",
    heroKey: 'heroBars',

    doInThis: 'Four short stations train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real news context to change the answer',
      'Build watertight chains of reasoning',
      'Spot examiner-grade flaws and reach a judgement'
    ],
    tip: "These stations are not tests — they're cognitive drills. Treat them like circuits in the gym: same movement patterns, different topic content.",

    stations: [
      { num: 1, name: 'Use the context',    skill: 'Application', sub: 'Read an extract and judge which evidence changes the answer.', href: 'link_inflation_context.html', state: 'available' },
      { num: 2, name: 'Build the chain',    skill: 'Analysis',    sub: 'Order or fill the steps in a reasoning chain.',                href: 'link_inflation_chain.html',    state: 'available' },
      { num: 3, name: 'Spot the flaw',      skill: 'Evaluation',  sub: 'Pick the strongest answer; name the flaws in the others.',     href: '#',                            state: 'locked'    },
      { num: 4, name: 'Make the judgement', skill: 'Evaluation',  sub: 'Choose the strongest evaluative pivot and complete the line.', href: '#',                            state: 'locked'    }
    ],

    stages: [
      { num: 1, name: 'Learn it', sub: 'Recap and lock in the gems',       state: 'done',     href: 'topic_inflation.html'      },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context',    state: 'current'                                       },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',       state: 'locked'                                        }
    ],

    startUrl:   'link_inflation_context.html',
    startLabel: 'Start Link it'
  }
};
