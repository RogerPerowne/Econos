/* ============================================================
   ECONOS – Supply of Labour (Edexcel A 3.5.2)
   6 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.

   Card patterns (no two consecutive repeat; one dominant tile-grid):
     1 Interactive supply curve (movement along) + drivers
     2 Interactive supply shift + what-shifts + not-a-shift
     3 Hub (one occupation, 6 factors) + recruit struggles + stories
     4 Sequential flow (moving between jobs) + immobility + failure
     5 Decompose (regional story) + barriers + why-economists-care
     6 Evidence-then-verdict (synthesis + how-to-write)

   New visuals (js/icons.js):
     - labourSupplyCurve   (Card 1 interactive, ls-1..ls-2)
     - labourSupplyShift    (Card 2 interactive, lss-1..lss-3)
     - occupationChoiceHub  (Card 3 hub)
     - regionalMobility     (Card 5 static)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'supply-of-labour',
  topicNum: '3.5.2',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Supply of Labour',
  estTime: '15 min',
  goal: 'Explain what determines the supply of labour to a job, distinguish shifts from movements, and analyse occupational and geographical mobility',

  intro: {
    heroKey: 'heroSupplyLabour',
    summary: 'The supply of labour shows how many workers are willing and able to work in a job at different wage rates. Higher wages usually attract more workers, but non-wage factors — conditions, benefits, training and location — shape the whole curve. This deck builds the labour-supply curve, separates shifts from movements, explores what makes one occupation easier to staff than another, and explains why occupational and geographical immobility can cause labour-market failure.',
    doInThis: 'Define labour supply and build the supply curve. Distinguish a movement along the curve (a wage change) from a shift (a non-wage change). Explain what shapes supply to a particular occupation, and analyse occupational and geographical mobility. Finally, judge how immobility leads to shortages, wage pressure and market failure.',
    outcomes: [
      'Define the supply of labour and build the supply curve',
      'Distinguish a movement along the curve from a shift',
      'Explain what shifts labour supply to an occupation',
      'Analyse occupational mobility and immobility',
      'Analyse geographical mobility and immobility',
      'Judge how immobility causes labour-market failure'
    ],
    tip: 'The phrase to reach for is willing and able — labour supply needs both the desire and the means to do the job.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 15 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Supply of labour: the big picture
       Pattern: Interactive supply curve (movement along) + drivers
       ==================================================================== */
    {
      id: 'sol-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Supply of labour — the big picture',
      lede: 'The supply of labour shows how many workers are willing and able to work in a job at different wage rates.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'For a given occupation, higher wages usually attract more workers — but <strong>non-wage factors matter too</strong>.' },

      interactiveDiagram: {
        svgKey: 'labourSupplyCurve',
        label: 'THE DIAGRAM — read it step by step',
        emoji: '\u{1F4C8}',
        layers: ['ls-1', 'ls-2'],
        views: [
          {
            label: 'The supply curve',
            tone: 'green',
            head: 'Step 1 — the supply curve',
            body: 'More workers are willing to work as the wage rises, so the labour-supply curve <strong>slopes upward</strong>.',
            show: []
          },
          {
            label: 'At wage W₁',
            tone: 'blue',
            head: 'Step 2 — at wage W₁',
            body: 'At a wage of <strong>W₁</strong>, <strong>L₁</strong> workers are willing to work — point A.',
            show: ['ls-1']
          },
          {
            label: 'A higher wage',
            tone: 'green',
            head: 'Step 3 — a higher wage',
            body: 'A higher wage <strong>W₂</strong> attracts more workers (<strong>L₂</strong>) — a <strong>movement along</strong> the curve from A to B, not a shift.',
            analysis: 'Only a wage change moves you along the curve. Anything else — conditions, benefits, training — shifts the whole curve, which is the next card.',
            show: ['ls-1', 'ls-2']
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'THE MAIN DRIVERS',
      causesEmoji: '\u{1F4CD}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F4B7}', head: 'Pay', body: 'Higher wages attract more workers.' },
        { tone: 'purple', icon: '\u{1F381}', head: 'Non-wage benefits', body: 'Pensions, holidays and perks.' },
        { tone: 'blue',   icon: '\u{1F393}', head: 'Skills and qualifications', body: 'Training requirements limit who can supply.' },
        { tone: 'amber',  icon: '\u{1F9BA}', head: 'Working conditions', body: 'Risk, stress and hours affect willingness.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Supply of labour needs both willingness AND ability — a job can pay well but still lack qualified workers.' },

      conclusion: { title: 'Big idea', text: 'Supply of labour rises with the wage — but the whole curve depends on non-wage incentives too.' },
      examEdge: 'Separate a <strong>movement along</strong> the curve (a wage change) from a <strong>shift</strong> (a non-wage change).'
    },

    /* ====================================================================
       CARD 2 – Shifts in the supply of labour
       Pattern: Interactive supply shift + what-shifts + not-a-shift
       ==================================================================== */
    {
      id: 'sol-shifts',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'Shifts in the supply of labour',
      lede: 'When non-wage factors change, the whole supply curve for an occupation can shift left or right.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A <strong>wage change</strong> moves along the curve — a <strong>non-wage change</strong> shifts the whole curve.' },

      interactiveDiagram: {
        svgKey: 'labourSupplyShift',
        label: 'INCREASE AND DECREASE — step through it',
        emoji: '\u{1F4CA}',
        layers: ['lss-1', 'lss-2', 'lss-3'],
        views: [
          {
            label: 'The supply curve',
            tone: 'blue',
            head: 'The starting curve',
            body: 'The original labour-supply curve <strong>S</strong> for the occupation.',
            show: ['lss-1']
          },
          {
            label: 'Increase → shift right',
            tone: 'green',
            head: 'An increase in supply',
            body: 'More attractive non-wage factors raise supply — the curve shifts <strong>right to S₁</strong>: more workers at every wage.',
            show: ['lss-1', 'lss-2']
          },
          {
            label: 'Decrease → shift left',
            tone: 'rose',
            head: 'A decrease in supply',
            body: 'Worse conditions or harder entry cut supply — the curve shifts <strong>left to S₂</strong>: fewer workers at every wage.',
            analysis: 'At every wage, more or fewer workers are willing and able to work — that is a shift, not a movement.',
            show: ['lss-1', 'lss-2', 'lss-3']
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'WHAT CAN SHIFT IT',
      causesEmoji: '\u{1F504}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F381}', head: 'Non-wage benefits', body: 'Better perks and pensions raise supply.' },
        { tone: 'blue',   icon: '\u{1F6AA}', head: 'Easier entry and training', body: 'Lower qualification barriers raise supply.' },
        { tone: 'rose',   icon: '\u{1F975}', head: 'Worse working conditions', body: 'Long hours or risk reduce supply.' },
        { tone: 'amber',  icon: '\u{1F4CD}', head: 'Location and community', body: 'Amenities and ties affect who will work.' }
      ],

      causes3Label: 'NOT A SHIFT',
      causes3Emoji: '↔️',
      causes3Style: 'icon-top',
      causes3Cols: 2,
      causes3: [
        { tone: 'slate', icon: '\u{1F4C8}', head: 'Higher wage', body: 'A movement UP the existing supply curve.' },
        { tone: 'slate', icon: '\u{1F4C9}', head: 'Lower wage', body: 'A movement DOWN the existing supply curve.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Supply shifts when incentives or barriers change — not when wages change.' },

      conclusion: { title: 'Big idea', text: 'Non-wage factors shift the whole supply curve; only a wage change moves along it.' },
      examEdge: 'State clearly whether the question describes a <strong>movement along</strong> the curve or a <strong>shift</strong> of it.'
    },

    /* ====================================================================
       CARD 3 – What shapes supply to a particular occupation?
       Pattern: Hub (one occupation, 6 factors) + recruit struggles + stories
       ==================================================================== */
    {
      id: 'sol-occupation',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'What shapes supply to a particular occupation?',
      lede: 'People compare the rewards, requirements and realities of different jobs before deciding to enter or stay.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Supply to a job depends on both <strong>willingness and ability</strong> to do that work.' },

      visualKey: 'occupationChoiceHub',
      visualLabel: 'THE OCCUPATION CHOICE',
      visualEmoji: '\u{1F9ED}',

      causesFirst: true,
      causesLabel: 'WHY SOME JOBS STRUGGLE TO RECRUIT',
      causesEmoji: '\u{1F50D}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F393}', head: 'Long training route', body: 'Years of study delay entry and limit supply.' },
        { tone: 'amber',  icon: '\u{1F975}', head: 'Poor conditions', body: 'Unsocial hours or high stress put workers off.' },
        { tone: 'purple', icon: '\u{1F5FA}️', head: 'Geographical mismatch', body: 'Jobs are where workers do not want to live.' }
      ],

      causes2Label: 'ONE JOB, DIFFERENT STORIES',
      causes2Emoji: '\u{1F465}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green',  icon: '\u{1F3E5}', head: 'Nursing', body: 'Strong sense of purpose, but pay and conditions affect supply.' },
        { tone: 'amber',  icon: '\u{1F3D7}️', head: 'Construction', body: 'Decent pay, but cyclical and flexible demand.' },
        { tone: 'blue',   icon: '\u{1F4BB}', head: 'Tech roles', body: 'Strong pay and flexible work, yet a skills shortage.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'You can compare net advantage across jobs — total reward (pay plus non-pay) versus the requirements.' },

      conclusion: { title: 'Big idea', text: 'Supply to an occupation reflects all its rewards and requirements, not just the wage.' },
      examEdge: 'Occupational labour supply reflects <strong>relative attractiveness</strong>, not just pay.'
    },

    /* ====================================================================
       CARD 4 – Occupational mobility and immobility
       Pattern: Sequential flow (moving between jobs) + immobility + failure
       ==================================================================== */
    {
      id: 'sol-occupational-mobility',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'Occupational mobility and immobility',
      lede: 'Occupational mobility is the ease with which workers can move between different jobs.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The more <strong>transferable</strong> a worker’s skills, the more occupationally mobile labour is.' },

      flowTitle: 'MOVING BETWEEN JOBS',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F4BC}', title: 'Current job', sub: 'Worker is in their existing role.' },
        { tone: 'purple', icon: '\u{1F6E0}️', title: 'Skills and experience', sub: 'What transfers across jobs.' },
        { tone: 'amber',  icon: '\u{1F504}', title: 'Retraining or adaptation', sub: 'New learning may be needed.' },
        { tone: 'green',  icon: '\u{1F195}', title: 'New occupation', sub: 'The worker moves into a different job.' }
      ],

      causesLabel: 'WHY IMMOBILITY HAPPENS',
      causesEmoji: '⚠️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'rose',   icon: '\u{1F393}', head: 'Qualifications', body: 'Specific certificates are needed to switch.' },
        { tone: 'amber',  icon: '\u{1F9E9}', head: 'Skills mismatch', body: 'Existing skills don’t fit the new role.' },
        { tone: 'blue',   icon: 'ℹ️', head: 'Lack of information', body: 'Workers don’t know about openings elsewhere.' },
        { tone: 'purple', icon: '\u{1F4B7}', head: 'Risk and cost', body: 'Retraining takes time, money and uncertainty.' }
      ],

      causes2Label: 'WHY IT CAN CAUSE MARKET FAILURE',
      causes2Emoji: '\u{1F4C9}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'green', icon: '\u{1F4C8}', head: 'Demand rises', body: 'A growing sector needs more workers.' },
        { tone: 'rose',  icon: '\u{1F6AB}', head: 'Workers can’t move', body: 'Skills don’t transfer to the new jobs.' },
        { tone: 'amber', icon: '⏳', head: 'Shortage persists', body: 'Vacancies stay unfilled.' },
        { tone: 'rose',  icon: '\u{1F4B0}', head: 'Wages rise', body: 'Pay and inequality may widen.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Immobility slows adjustment and can leave some markets understaffed while others have spare labour.' },

      conclusion: { title: 'Big idea', text: 'Occupational immobility traps labour away from the jobs that need it — a cause of market failure.' },
      examEdge: 'Define occupational mobility, then explain the <strong>barrier and the consequence</strong> for shortages and wages.'
    },

    /* ====================================================================
       CARD 5 – Geographical mobility and immobility
       Pattern: Decompose (regional story) + barriers + why-economists-care
       ==================================================================== */
    {
      id: 'sol-geographical-mobility',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'Geographical mobility and immobility',
      lede: 'Geographical mobility is the ease with which workers can move from one place to another for work.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'If workers cannot move to where the jobs are, labour shortages and <strong>regional imbalances</strong> can persist.' },

      visualKey: 'regionalMobility',
      visualLabel: 'THE REGIONAL STORY',
      visualEmoji: '\u{1F5FA}️',

      causesFirst: true,
      causesLabel: 'BARRIERS TO MOVING',
      causesEmoji: '\u{1F6A7}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'rose',   icon: '\u{1F3E0}', head: 'Housing costs', body: 'Expensive to move to job-rich areas.' },
        { tone: 'amber',  icon: '\u{1F468}‍\u{1F469}‍\u{1F467}', head: 'Family and social ties', body: 'Reluctance to leave home and community.' },
        { tone: 'blue',   icon: 'ℹ️', head: 'Information gaps', body: 'Workers don’t know about opportunities elsewhere.' },
        { tone: 'purple', icon: '\u{1F687}', head: 'Transport and distance', body: 'Commuting is costly and time-consuming.' }
      ],

      causes2Label: 'WHY ECONOMISTS CARE',
      causes2Emoji: '\u{1F30D}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Regional demand', body: 'Booming regions struggle to fill vacancies.' },
        { tone: 'blue',   icon: '\u{1F3D9}️', head: 'London and the South East', body: 'High housing costs can crowd workers out.' },
        { tone: 'amber',  icon: '\u{1F69C}', head: 'Remote and rural areas', body: 'Jobs there can be hard to fill.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Geographical and occupational immobility together explain why some labour shortages are so stubborn.' },

      conclusion: { title: 'Big idea', text: 'Geographical immobility means labour can’t flow to where it’s needed — widening regional gaps.' },
      examEdge: 'Use a <strong>barrier plus a consequence</strong> — e.g. housing costs → low mobility → regional shortages.'
    },

    /* ====================================================================
       CARD 6 – The whole story
       Pattern: Evidence-then-verdict (synthesis + how-to-write)
       ==================================================================== */
    {
      id: 'sol-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole story',
      lede: 'Strong answers explain what affects labour supply, then judge how mobility and immobility shape labour-market outcomes.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Supply of labour is about <strong>incentives, entry barriers and the ease of moving</strong> between jobs and places.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F4B7}', title: 'Wage and non-wage factors', sub: 'Shape willingness.' },
        { tone: 'purple', icon: '⚖️', title: 'Workers compare', sub: 'Net advantage across jobs.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Supply rises or falls', sub: 'To a job or place.' },
        { tone: 'amber',  icon: '\u{1F500}', title: 'Mobility matters', sub: 'Can workers move?' },
        { tone: 'rose',   icon: '⚠️', title: 'Shortages and gaps', sub: 'If they can’t.' },
        { tone: 'green',  icon: '\u{1F50D}', title: 'Overall judgement', sub: 'Efficiency and failure.' }
      ],

      causesLabel: 'COMMON EXAM THEMES',
      causesEmoji: '\u{1F4DA}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F9ED}', head: 'Particular occupation', body: 'Answer in a job-specific way.' },
        { tone: 'purple', icon: '\u{1F504}', head: 'Occupational mobility', body: 'Can workers retrain or switch?' },
        { tone: 'amber',  icon: '\u{1F5FA}️', head: 'Geographical mobility', body: 'Can workers move region?' },
        { tone: 'rose',   icon: '⚠️', head: 'Market failure', body: 'Immobility distorts labour allocation.' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '❌', head: 'Willingness only', body: 'Supply needs ability too, not just desire.' },
        { tone: 'rose', icon: '\u{1F4B7}', head: 'Wage as the only influence', body: 'Non-wage factors matter just as much.' },
        { tone: 'rose', icon: '\u{1F500}', head: 'Forgetting mobility', body: 'Occupational and geographical both count.' }
      ],

      causes3Label: 'HOW TO WRITE IT',
      causes3Emoji: '✍️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'purple', icon: '\u{1F4C4}', head: '1 · Define supply', body: 'Willing and able at each wage.' },
        { tone: 'purple', icon: '\u{1F50D}', head: '2 · Identify the factor', body: 'Wage, non-wage or barrier.' },
        { tone: 'purple', icon: '\u{1F500}', head: '3 · Analyse mobility', body: 'Occupational and geographical.' },
        { tone: 'purple', icon: '⚖️', head: '4 · Judge the outcome', body: 'Shortages, wages, efficiency.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Labour supply is strongest where jobs are attractive and labour is mobile.' },

      conclusion: { title: 'Big idea', text: 'Supply of labour depends on incentives, barriers and mobility — and immobility is a key source of market failure.' },
      economistQuote: {
        portraitKey: 'economistGoldin',
        tone: 'amber',
        label: 'Economist insight on the labour market',
        quote: 'A flexible job almost always comes at a price. Much of what remains of the gender earnings gap is not about what men and women do, but about the premium the labour market pays for long, particular and unpredictable hours.',
        attribution: 'Claudia Goldin, <em>Career and Family</em> (2021)'
      },
      examEdge: 'Link <strong>incentives and mobility</strong> to a clear labour-market outcome.'
    }
  ]
};
