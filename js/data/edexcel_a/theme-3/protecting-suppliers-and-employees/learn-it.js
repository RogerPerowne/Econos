/* ============================================================
   ECONOS – Protecting Suppliers and Employees (Edexcel A 3.6.1)
   6 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   (Fourth and final government-intervention sub-topic.)
   NOTE: Card 6 (the whole story) was composed in the standard
   series "whole-story" pattern — the mockup arrived as a duplicate.

   Card patterns (no two consecutive repeat; one dominant tile-grid):
     1 Side-by-side pair (two routes) + why-intervene + story arc
     2 Tile grid (what creates monopsony) + how-it-works flow
     3 Interactive monopsony diagram (reused) + read-it + who-affected
     4 Interactive min-wage-in-monopsony + policy tools + evaluation
     5 Side-by-side pair (private vs public) + why/benefits/costs
     6 Evidence-then-verdict (synthesis + final judgement)

   New visual (js/icons.js):
     - monopsonyMinWage  (Card 4 interactive, mmw-1..mmw-2)
   Reused: monopsonyLabourDiagram (Card 3).
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'protecting-suppliers-and-employees',
  topicNum: '3.6.1',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Protecting Suppliers and Employees',
  estTime: '15 min',
  goal: 'Explain how governments protect workers and suppliers from monopsony power — through minimum wages, bargaining support and nationalisation — and evaluate the trade-offs',

  intro: {
    heroKey: 'heroProtect',
    summary: 'When one firm has too much buying power, workers and suppliers get squeezed — lower wages, weaker bargaining. Governments can restrict that monopsony power (minimum wages, support for bargaining, fair-dealing rules) or change ownership through nationalisation.',
    doInThis: 'Use the monopsony diagram to show how a minimum wage can raise both pay and employment, explain when nationalisation is used, and evaluate each tool against efficiency, fairness and the risk of government failure.',
    outcomes: [
      'Explain monopsony power and who it harms',
      'Read the monopsony labour-market diagram',
      'Show how a minimum wage can help in a monopsony',
      'Explain bargaining support and fair-dealing rules',
      'Explain nationalisation and its trade-offs',
      'Evaluate how to protect workers and suppliers'
    ],
    tip: 'The phrase to reach for is rebalancing power — protecting the weak side of the market.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 15 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Protecting suppliers and employees: the big picture
       Pattern: Side-by-side pair (two routes) + why-intervene + story arc
       ==================================================================== */
    {
      id: 'pse-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Protecting suppliers and employees — the big picture',
      lede: 'Governments step in when firms have too much buying power over workers or suppliers — or when ownership changes are judged necessary.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The state can protect workers and suppliers either by <strong>limiting monopsony power</strong> or by <strong>changing ownership</strong> through nationalisation.' },

      pairFirst: true,
      pairLabel: 'Restrict monopsony power vs nationalisation',
      pairEmoji: '\u{1F6E0}️',
      left: {
        tone: 'blue',
        icon: '\u{1F6E1}️',
        iconStyle: 'circle',
        label: '1 · Restrict monopsony power',
        points: ['Minimum wage', 'Support for bargaining', 'Competition and fair-dealing rules']
      },
      right: {
        tone: 'purple',
        icon: '\u{1F3DB}️',
        iconStyle: 'circle',
        label: '2 · Nationalisation',
        points: ['Move to public ownership', 'Run for service and security', 'Used where markets fail badly']
      },

      causesLabel: 'WHY INTERVENE',
      causesEmoji: '\u{1F4A1}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'amber',  icon: '\u{1F465}', head: 'Worker protection', body: 'Low wages or weak bargaining power.' },
        { tone: 'purple', icon: '\u{1F69A}', head: 'Supplier protection', body: 'Squeezed prices and tight margins.' },
        { tone: 'blue',   icon: '\u{1F3E5}', head: 'Public interest', body: 'Service quality and resilience.' },
        { tone: 'rose',   icon: '⚠️', head: 'Market failure', body: 'Buyer power may misallocate resources.' }
      ],

      flowTitle: 'THE STORY ARC',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'rose',   icon: '\u{1F3E2}', title: 'Buyer power', sub: 'One big buyer dominates.' },
        { tone: 'amber',  icon: '⚠️', title: 'Potential harm', sub: 'Workers / suppliers squeezed.' },
        { tone: 'blue',   icon: '\u{1F3DB}️', title: 'Government acts', sub: 'It sees a problem.' },
        { tone: 'purple', icon: '\u{1F6E0}️', title: 'Restrict or own', sub: 'Limit power or change ownership.' },
        { tone: 'green',  icon: '\u{1F465}', title: 'Stakeholder outcomes', sub: 'Winners and losers.' },
        { tone: 'green',  icon: '⚖️', title: 'Final judgement', sub: 'Did it help?' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Restricting monopoly and monopsony are different: monopoly is a seller’s power, monopsony is a buyer’s.' },

      conclusion: { title: 'Big idea', text: 'Protecting workers and suppliers means rebalancing power — by limiting the buyer or by taking over ownership.' },
      examEdge: 'Diagnose the buyer-power problem first, then justify the intervention, and judge the effects on stakeholders.'
    },

    /* ====================================================================
       CARD 2 – Monopsony power: one big buyer
       Pattern: Tile grid (what creates monopsony) + how-it-works flow
       ==================================================================== */
    {
      id: 'pse-monopsony-power',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'Monopsony power — one big buyer',
      lede: 'A monopsony exists when one buyer, or a few large buyers, dominate the market for labour or inputs.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'When sellers have few alternatives, the buyer can <strong>force down wages or buying prices</strong>.' },

      causesFirst: true,
      causesLabel: 'WHAT CREATES MONOPSONY',
      causesEmoji: '\u{2753}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F3E2}', head: 'Few buyers', body: 'One or a few large employers or purchasers.' },
        { tone: 'amber',  icon: '\u{1F465}', head: 'Many sellers', body: 'Workers or suppliers are fragmented.' },
        { tone: 'purple', icon: '\u{1F9F3}', head: 'Low mobility', body: 'Hard to switch job, place or customer.' },
        { tone: 'rose',   icon: '⚖️', head: 'Weak bargaining', body: 'No union or collective power.' }
      ],

      flowTitle: 'HOW THE POWER WORKS',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F3E2}', title: 'One large buyer', sub: 'Dominates the buying side.' },
        { tone: 'amber',  icon: '\u{1F4C9}', title: 'Terms pushed lower', sub: 'Wages or prices forced down.' },
        { tone: 'rose',   icon: '\u{1F465}', title: 'Sellers accept', sub: 'They have few alternatives.' }
      ],

      causes3Label: 'WHY IT CAN BE A PROBLEM',
      causes3Emoji: '⚠️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Lower wages or prices', body: 'Below the competitive level.' },
        { tone: 'amber', icon: '\u{1F4C9}', head: 'Lower employment', body: 'Fewer workers hired or inputs bought.' },
        { tone: 'purple', icon: '\u{1F3ED}', head: 'Under-investment', body: 'Squeezed suppliers can’t reinvest.' },
        { tone: 'blue', icon: '⚖️', head: 'Unfairness', body: 'The weak side bears the cost.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Real examples: a town’s main employer, supermarkets buying from farmers, and big processors buying from small producers.' },

      conclusion: { title: 'Big idea', text: 'Monopsony power lets a dominant buyer push wages and supplier prices below the competitive level.' },
      examEdge: 'Define monopsony clearly, then link the lack of alternatives to lower wages, lower prices and unfairness.'
    },

    /* ====================================================================
       CARD 3 – The monopsony diagram
       Pattern: Interactive monopsony diagram (reused) + read-it + who-affected
       ==================================================================== */
    {
      id: 'pse-monopsony-diagram',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'The monopsony diagram',
      lede: 'In a monopsony labour market, one large buyer of labour can pay a lower wage and hire fewer workers than under competition.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A monopsony hires where <strong>MCL = MRP</strong>, then pays the wage on the labour supply curve.' },

      interactiveDiagram: {
        svgKey: 'monopsonyLabourDiagram',
        label: 'THE DIAGRAM — step through it',
        emoji: '\u{1F4C9}',
        layers: ['ms-1', 'ms-2', 'ms-3'],
        views: [
          {
            label: 'The curves',
            tone: 'blue',
            head: 'The curves',
            body: 'The firm faces the upward supply curve (<strong>S = ACL</strong>); <strong>MCL</strong> lies above it; <strong>MRP</strong> is the demand for labour.',
            show: []
          },
          {
            label: 'Employment',
            tone: 'purple',
            head: 'Employment: MCL = MRP',
            body: 'The monopsony hires where the marginal cost of labour equals MRP — employment <strong>Lm</strong>.',
            show: ['ms-1']
          },
          {
            label: 'The wage',
            tone: 'rose',
            head: 'The wage: read down to supply',
            body: 'It only pays the wage on the supply curve — <strong>Wm</strong>, below the workers’ MRP.',
            show: ['ms-1', 'ms-2']
          },
          {
            label: 'Vs competition',
            tone: 'green',
            head: 'Vs the competitive market',
            body: 'A competitive market would pay <strong>Wc</strong> and employ <strong>Lc</strong> — both higher than the monopsony.',
            analysis: 'The gap between Wm and the workers’ MRP is the exploitation the next card’s minimum wage is designed to close.',
            show: ['ms-1', 'ms-2', 'ms-3']
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'READ IT IN 3 STEPS',
      causesEmoji: '\u{1F4CC}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F50D}', head: 'Find L_m', body: 'Where MCL = MRP.' },
        { tone: 'rose',   icon: '\u{1F4C9}', head: 'Find W_m', body: 'Read down to the supply curve.' },
        { tone: 'green',  icon: '⚖️', head: 'Compare', body: 'Wage and jobs both lower than competition.' }
      ],

      causes3Label: 'WHO IS AFFECTED',
      causes3Emoji: '\u{1F465}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'rose',   icon: '\u{1F465}', head: 'Workers', body: 'Lower pay and fewer jobs.' },
        { tone: 'amber',  icon: '\u{1F69A}', head: 'Suppliers', body: 'The same squeeze in product markets.' },
        { tone: 'green',  icon: '\u{1F3E2}', head: 'The firm', body: 'Lower costs and higher profit.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The monopsony diagram turns buyer power into a visual story — a lower wage and lower employment than the competitive benchmark.' },

      conclusion: { title: 'Big idea', text: 'A monopsony pays less and hires fewer workers than a competitive labour market would.' },
      examEdge: 'In exam questions, state the equilibrium rule (MCL = MRP) and the wage rule (read down to supply), then compare with competition.'
    },

    /* ====================================================================
       CARD 4 – Restricting monopsony power
       Pattern: Interactive min-wage-in-monopsony + policy tools + evaluation
       ==================================================================== */
    {
      id: 'pse-restricting',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'Restricting monopsony power',
      lede: 'Governments can protect workers and suppliers by strengthening the weak side of the market or limiting the buyer’s power.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The goal is not just higher pay — it is a <strong>fairer and more competitive</strong> outcome.' },

      interactiveDiagram: {
        svgKey: 'monopsonyMinWage',
        label: 'A POSSIBLE DIAGRAM EFFECT — step through it',
        emoji: '\u{1F4C8}',
        layers: ['mmw-1', 'mmw-2'],
        views: [
          {
            label: 'The monopsony outcome',
            tone: 'rose',
            head: 'The monopsony outcome',
            body: 'Left alone, the monopsony pays a low wage <strong>Wm</strong> and hires only <strong>Lm</strong> workers.',
            show: ['mmw-1']
          },
          {
            label: 'A minimum wage',
            tone: 'purple',
            head: 'A minimum wage',
            body: 'A minimum wage set between Wm and the competitive wage raises pay to <strong>W_min</strong> — and, surprisingly, <strong>raises employment too</strong> (to L_min).',
            analysis: 'In a monopsony the firm no longer has to raise the wage for everyone to hire more, so a well-set minimum wage can lift both pay and jobs — the opposite of its effect in a competitive market.',
            show: ['mmw-1', 'mmw-2']
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'POLICY TOOLS',
      causesEmoji: '\u{1F6E0}️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F4B7}', head: 'Minimum wage', body: 'A floor stops pay falling too low.' },
        { tone: 'blue',   icon: '\u{1F91D}', head: 'Support for bargaining', body: 'Unions and collective power.' },
        { tone: 'purple', icon: '⚖️', head: 'Competition policy', body: 'Stop buyer concentration.' },
        { tone: 'amber',  icon: '\u{1F4DC}', head: 'Fair-dealing rules', body: 'Supply-chain codes protect suppliers.' }
      ],

      causes3Label: 'WHEN IT WORKS BEST',
      causes3Emoji: '\u{1F3AF}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'green', icon: '\u{1F3E2}', head: 'Genuine monopsony', body: 'The firm really has buyer power.' },
        { tone: 'blue',  icon: '\u{1F4CF}', head: 'Set at the right level', body: 'Between Wm and the competitive wage.' },
        { tone: 'amber', icon: '\u{1F441}️', head: 'Well enforced', body: 'Rules are monitored and applied.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'Backed by bargaining', body: 'Workers have a real voice.' }
      ],

      pairLabel: 'Benefits vs risks',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '✅',
        iconStyle: 'circle',
        label: 'Benefits',
        points: ['Higher wages and fairer pay', 'Can raise employment in a monopsony', 'Better-protected suppliers']
      },
      right: {
        tone: 'rose',
        icon: '⚠️',
        iconStyle: 'circle',
        label: 'Risks',
        points: ['Set too high → job losses', 'Costs may pass to consumers', 'Hard to judge the right level']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The monopsony case is why a minimum wage does not always cost jobs — it depends on the market structure.' },

      conclusion: { title: 'Big idea', text: 'In a monopsony, a well-set minimum wage can raise both pay and employment — but the level matters.' },
      examEdge: 'Always say whether the market is a monopsony — it flips the standard minimum-wage verdict.'
    },

    /* ====================================================================
       CARD 5 – Nationalisation
       Pattern: Side-by-side pair (private vs public) + why/benefits/costs
       ==================================================================== */
    {
      id: 'pse-nationalisation',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'Nationalisation',
      lede: 'Sometimes the government goes beyond regulation and takes ownership or control of a firm or industry.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Nationalisation changes <strong>who owns the firm</strong> — and therefore which objectives are prioritised.' },

      pairFirst: true,
      pairLabel: 'Private ownership vs public ownership',
      pairEmoji: '\u{1F504}',
      left: {
        tone: 'blue',
        icon: '\u{1F3E2}',
        iconStyle: 'circle',
        label: 'Private ownership',
        points: ['Owned by shareholders', 'Profit objectives', 'Market and shareholder pressure']
      },
      right: {
        tone: 'green',
        icon: '\u{1F3DB}️',
        iconStyle: 'circle',
        label: 'Public ownership',
        points: ['Owned by the state', 'Public-service goals', 'Run for access and security']
      },

      causesLabel: 'WHY GOVERNMENTS DO IT',
      causesEmoji: '\u{2753}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F3ED}', head: 'Natural monopoly', body: 'Avoid wasteful duplication of networks.' },
        { tone: 'purple', icon: '\u{1F6E1}️', head: 'Strategic industry', body: 'Energy, defence or key infrastructure.' },
        { tone: 'amber',  icon: '\u{1F198}', head: 'Failing service', body: 'Rescue an essential service in trouble.' },
        { tone: 'green',  icon: '\u{1F465}', head: 'Protect jobs & suppliers', body: 'Prevent collapse or unfair treatment.' }
      ],

      causes2Label: 'POTENTIAL BENEFITS',
      causes2Emoji: '\u{1F44D}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'green', icon: '\u{1F3E5}', head: 'Service over profit', body: 'Universal access can be prioritised.' },
        { tone: 'green', icon: '\u{1F4C5}', head: 'Long-run investment', body: 'Less short-term pressure.' },
        { tone: 'green', icon: '\u{1F465}', head: 'Worker protection', body: 'Pay and conditions can be safeguarded.' },
        { tone: 'green', icon: '⚖️', head: 'Stable prices', body: 'Prices set in the public interest.' }
      ],

      causes3Label: 'POTENTIAL COSTS',
      causes3Emoji: '⚠️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Weaker incentives', body: 'Less pressure to cut costs.' },
        { tone: 'rose', icon: '\u{1F4B7}', head: 'Taxpayer cost', body: 'Losses fall on the public purse.' },
        { tone: 'rose', icon: '\u{1F634}', head: 'Inefficiency', body: 'Bureaucracy can creep in.' },
        { tone: 'rose', icon: '\u{1F3DB}️', head: 'Political interference', body: 'Decisions driven by politics.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Nationalisation vs regulation: regulation keeps private ownership but adds rules; nationalisation changes ownership itself.' },

      conclusion: { title: 'Big idea', text: 'Nationalisation swaps profit objectives for public-service goals — powerful for natural monopolies, but it can weaken efficiency.' },
      examEdge: 'Compare nationalisation with regulation — the lighter-touch alternative — before judging which fits the market.'
    },

    /* ====================================================================
       CARD 6 – The whole story (authored — see header note)
       Pattern: Evidence-then-verdict (synthesis + final judgement)
       ==================================================================== */
    {
      id: 'pse-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole story',
      lede: 'Strong answers identify the buyer-power or ownership problem, choose the right tool, and judge who gains and who loses.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Protecting suppliers and workers is about <strong>rebalancing power</strong> — judge it by fairness, efficiency and service.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'rose',   icon: '\u{1F3E2}', title: 'Buyer power problem', sub: 'Monopsony or ownership.' },
        { tone: 'amber',  icon: '\u{1F50D}', title: 'Identify the harm', sub: 'Who is squeezed?' },
        { tone: 'blue',   icon: '\u{1F6E0}️', title: 'Choose a tool', sub: 'Restrict or change ownership.' },
        { tone: 'purple', icon: '\u{1F4C8}', title: 'Trace the effect', sub: 'On wages, jobs, service.' },
        { tone: 'green',  icon: '\u{1F465}', title: 'Stakeholder effects', sub: 'Winners and losers.' },
        { tone: 'green',  icon: '⚖️', title: 'Final judgement', sub: 'Did it help?' }
      ],

      causesLabel: 'THE TOOLKIT',
      causesEmoji: '\u{1F9F0}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F4B7}', head: 'Minimum wage', body: 'A floor under pay.' },
        { tone: 'blue',   icon: '\u{1F91D}', head: 'Support bargaining', body: 'Strengthen the weak side.' },
        { tone: 'purple', icon: '⚖️', head: 'Competition policy', body: 'Limit buyer concentration.' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: 'Nationalisation', body: 'Change ownership.' }
      ],

      causes2Label: 'WHAT MAKES EVALUATION STRONG',
      causes2Emoji: '\u{1F9EA}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'blue',  icon: '\u{1F3E2}', head: 'Market structure', body: 'Is it really a monopsony?' },
        { tone: 'green', icon: '\u{1F465}', head: 'Who gains and loses', body: 'Workers, suppliers, taxpayers.' },
        { tone: 'rose',  icon: '⚠️', head: 'Government failure', body: 'Could the cure be worse?' }
      ],

      pairLabel: 'Why it helps vs why caution is needed',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '✅',
        iconStyle: 'circle',
        label: 'Why it helps',
        points: ['Fairer pay and protected suppliers', 'Can raise jobs in a monopsony', 'Better, more secure services']
      },
      right: {
        tone: 'rose',
        icon: '⚠️',
        iconStyle: 'circle',
        label: 'Why caution is needed',
        points: ['Higher costs or job losses if mis-set', 'Inefficiency under public ownership', 'Government failure and capture']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The right tool depends on the market — a minimum wage suits a monopsony, nationalisation suits a natural monopoly.' },

      conclusion: { title: 'Big idea', text: 'Protecting workers and suppliers means rebalancing power — judged by fairness, efficiency and the risk of government failure.' },
      examEdge: 'Match the tool to the problem, use the monopsony diagram where relevant, and finish with a balanced judgement.'
    }
  ]
};
