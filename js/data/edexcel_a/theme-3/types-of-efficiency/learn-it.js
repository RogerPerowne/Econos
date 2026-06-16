/* ============================================================
   ECONOS – Types of Efficiency (Edexcel A 3.4.1)
   6 cards · interactive-first build
   Maps the spec sub-points: productive, allocative and dynamic
   efficiency; X-inefficiency; the trade-offs between them.

   Card patterns:
     1 Hub-and-spoke (flywheel) – 3 efficiency types around centre
     2 Decompose a diagram (productive — AC with MC at minimum)
     3 Decompose a diagram (allocative — D and MC cross at P=MC)
     4 Decompose a diagram (dynamic — AC before/after innovation)
     5 Side-by-side pair + 3-tile cause grid (efficiencies clash)
     6 Sequential flow chain (synthesis – uses existing blocks)

   New visuals:
     - efficiencyFlywheel             (Card 1 hero)
     - productiveEfficiencyDiagram    (Card 2 hero)
     - toeAllocativeDiagram           (Card 3 hero)
     - dynamicEfficiencyDiagram       (Card 4 hero)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'types-of-efficiency',
  topicNum: '3.4.1',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Types of Efficiency',
  estTime: '15 min',
  goal: 'Distinguish productive, allocative and dynamic efficiency; identify their conditions on a diagram; and judge the trade-offs between them in different market structures',

  intro: {
    heroKey: 'heroEfficiency',
    summary: 'Efficiency comes in three flavours — productive (lowest cost, MC = AC), allocative (right output for society, P = MC) and dynamic (AC falling over time) — each readable off a diagram. The challenge is judging the trade-offs, because no real market is efficient on every measure at once.',
    doInThis: 'Identify the diagram condition for each efficiency type, distinguish static from dynamic, and judge the trade-offs — including why monopoly is often allocatively inefficient yet may deliver dynamic efficiency through reinvested profit.',
    outcomes: [
      'Define productive, allocative and dynamic efficiency',
      'Identify the diagram condition for each (MC = AC, P = MC, AC shifts down)',
      'Distinguish X-inefficiency from technical inefficiency',
      'Judge the trade-offs between competition and innovation in different market structures'
    ],
    tip: 'Efficiency questions always ask: which type, on what diagram, with what condition. Examiners reward students who name the exact rule.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 15 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Efficiency: the big picture (the flywheel)
       Pattern: Hub-and-spoke (3 efficiency types around central gauge)
       ==================================================================== */
    {
      id: 'toe-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Efficiency — the big picture',
      lede: 'Efficiency asks whether resources are used well — at the lowest cost, for the right output, and with improvement over time.',
      ledeStyle: 'plain',

      tip: { icon: '\u{2696}\u{FE0F}', tone: 'green', text: '<strong>Different efficiency types answer different questions.</strong> Pick the right one for the question being asked.' },

      visualKey: 'efficiencyFlywheel',
      visualLabel: 'THE THREE TYPES',
      visualEmoji: '\u{2699}\u{FE0F}',

      flowTitle: 'ASK THESE THREE QUESTIONS',
      flowEmoji: '\u{2753}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green', icon: '\u{1F4E6}', title: 'Are we wasting resources?', sub: 'If yes → productive inefficiency.' },
        { tone: 'amber', icon: '\u{1F3AF}', title: 'Is the right amount being produced?', sub: 'If no → allocative inefficiency.' },
        { tone: 'blue',  icon: '\u{1F680}', title: 'Are we getting better over time?', sub: 'If no → dynamic inefficiency.' }
      ],

      pairLabel: 'STATIC vs DYNAMIC',
      pairEmoji: '\u{1F501}',
      left: {
        tone: 'amber',
        icon: '\u{1F4F8}',
        iconStyle: 'circle',
        label: 'Static efficiency',
        text: 'Productive + allocative efficiency — judged at a <strong>point in time</strong>. Asks whether resources are being used well right now.'
      },
      right: {
        tone: 'blue',
        icon: '\u{1F501}',
        iconStyle: 'circle',
        label: 'Dynamic efficiency',
        text: 'Judged <strong>over time</strong>. Linked to investment, innovation and lower future costs.'
      },

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Efficiency is not one thing — economists measure different angles, allocative efficiency or dynamic efficiency, depending on the question.' },

      conclusion: { title: 'Big idea', text: 'Strong answers name the type of efficiency first, then use the right diagram or condition to explain it.' },
      examEdge: 'Examiners reward the precise vocabulary: productive (MC = AC), allocative (P = MC), dynamic (AC shifts down). Get the rule first.'
    },

    /* ====================================================================
       CARD 2 – Productive efficiency
       Pattern: Decompose a diagram (AC U-curve with MC crossing min AC)
       ==================================================================== */
    {
      id: 'toe-productive',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'Productive efficiency',
      lede: 'A firm is productively efficient when it produces at the lowest possible average cost.',
      ledeStyle: 'plain',

      tip: { icon: '\u{2699}\u{FE0F}', tone: 'green', text: '<strong>Productive efficiency is about cost minimisation</strong> — not simply producing more.' },

      interactiveDiagram: {
        svgKey: 'productiveEfficiencyDiagram',
        label: 'THE DIAGRAM — build it in three steps',
        emoji: '\u{1F4C9}',
        layers: ['pe-1', 'pe-2', 'pe-3'],
        views: [
          {
            label: 'The AC curve',
            tone: 'blue',
            head: 'Step 1 — average cost is U-shaped',
            body: 'The AC curve shows <strong>cost per unit</strong> at each output. It falls early as fixed costs spread, bottoms out, then rises as capacity crowds. The lowest point is the target.',
            show: ['pe-1']
          },
          {
            label: 'Add MC',
            tone: 'rose',
            head: 'Step 2 — MC cuts AC at its minimum',
            body: 'The marginal cost curve crosses AC <strong>exactly at its lowest point</strong> — never anywhere else.',
            analysis: 'When the next unit costs less than the average, it pulls the average down; when it costs more, it pushes the average up. So MC must cross AC precisely at the bottom of the U.',
            show: ['pe-1', 'pe-2']
          },
          {
            label: 'The efficient point',
            tone: 'green',
            head: 'Step 3 — productive efficiency at Q*',
            body: 'At <strong>Q*</strong> the firm produces at the <strong>lowest possible average cost</strong>. The condition to quote: <strong>MC = AC</strong>.',
            analysis: 'At any other output the same units cost more to make — resources are being wasted. X-inefficiency is different again: operating <strong>above</strong> the AC curve altogether through slack.',
            show: ['pe-1', 'pe-2', 'pe-3']
          }
        ]
      },

      causesLabel: 'WHAT IT MEANS',
      causesEmoji: '\u{1F4DD}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '\u{1F4B0}', head: 'Lowest average cost', body: 'Resources are used with the least cost per unit possible.' },
        { tone: 'blue',  icon: '\u{1F6AB}', head: 'No spare cost slack',  body: 'Materials, labour and capital are all being fully used.' },
        { tone: 'amber', icon: '\u{2705}', head: 'Better use of inputs', body: 'Labour, capital and materials are used well.' }
      ],

      flowTitle: 'WHY FIRMS MAY MISS IT',
      flowEmoji: '\u{26A0}\u{FE0F}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'rose',  icon: '\u{1F4C9}', title: 'X-inefficiency', sub: 'Poor management or weak competition leads to wasted cost.' },
        { tone: 'amber', icon: '\u{1F3ED}', title: 'Wrong scale',    sub: 'Producing below or above the level where AC is lowest.' },
        { tone: 'blue',  icon: '\u{1F570}\u{FE0F}', title: 'Outdated methods', sub: 'Older equipment or poor organisation can keep costs high.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Producing more does not always mean cheaper — productive efficiency is about the <strong>per-unit cost</strong>, not total output.' },

      conclusion: { title: 'Big idea', text: 'Productive efficiency focuses on cost — the efficient point is where AC is at its lowest sustainable level.' },
      examEdge: 'In the diagram, identify the <strong>minimum point of AC</strong> and explain that this is the lowest cost per unit.'
    },

    /* ====================================================================
       CARD 3 – Allocative efficiency
       Pattern: Decompose a diagram (D and MC cross at P = MC)
       ==================================================================== */
    {
      id: 'toe-allocative',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'Allocative efficiency',
      lede: 'Allocative efficiency means producing the right output for society — where price equals marginal cost.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F3AF}', tone: 'green', text: '<strong>Allocative efficiency</strong> is about the right output for society — not the lowest cost.' },

      interactiveDiagram: {
        svgKey: 'toeAllocativeDiagram',
        label: 'THE DIAGRAM — build it in three steps',
        emoji: '\u{1F4CA}',
        layers: ['ta-1', 'ta-2', 'ta-3'],
        views: [
          {
            label: 'Demand = value',
            tone: 'blue',
            head: 'Step 1 — demand shows what buyers value',
            body: 'The demand curve is the <strong>marginal benefit</strong> line — what consumers will pay for one more unit. Reading down the curve, each extra unit is valued a little less.',
            show: ['ta-1']
          },
          {
            label: 'MC = cost',
            tone: 'rose',
            head: 'Step 2 — MC shows what it costs society',
            body: 'The marginal cost curve shows what one more unit <strong>costs society to produce</strong>. It rises as output expands and resources get scarcer.',
            show: ['ta-1', 'ta-2']
          },
          {
            label: 'Where P = MC',
            tone: 'green',
            head: 'Step 3 — allocative efficiency at Q*',
            body: 'At <strong>Q*</strong> the value of the last unit exactly equals its cost: <strong>P = MC</strong>. Society gets the right amount of this good.',
            analysis: 'Below Q* the next unit is worth more than it costs — society wants more produced. Beyond Q* units cost more than they are worth — those resources should go elsewhere. Only at P = MC is the mix right.',
            show: ['ta-1', 'ta-2', 'ta-3']
          }
        ]
      },

      causesLabel: 'WHAT IT TELLS US',
      causesEmoji: '\u{1F4D6}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '\u{1F4E6}', head: 'Right amount produced', body: 'Society gets the output it values most.' },
        { tone: 'blue',  icon: '\u{1F465}', head: 'Consumer value matched', body: 'Price reflects marginal benefit.' },
        { tone: 'amber', icon: '\u{2696}\u{FE0F}', head: 'Opportunity cost covered', body: 'MC shows the cost of producing one more unit.' }
      ],

      pairLabel: 'DON’T CONFUSE WITH PRODUCTIVE EFFICIENCY',
      pairEmoji: '\u{2196}\u{FE0F}',
      left: {
        tone: 'blue',
        icon: '\u{2699}\u{FE0F}',
        iconStyle: 'circle',
        label: 'Productive efficiency',
        text: 'Lowest possible <strong>average cost</strong>. Condition: <em>MC = AC</em>.'
      },
      right: {
        tone: 'amber',
        icon: '\u{1F3AF}',
        iconStyle: 'circle',
        label: 'Allocative efficiency',
        text: '<strong>Output where consumers value the next unit just as much as it costs to make.</strong> Condition: <em>P = MC</em>.'
      },

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'A firm can be productively efficient without being allocatively efficient — the two answers different questions.' },

      conclusion: { title: 'Big idea', text: 'Allocative efficiency tells us whether the economy is producing the right things in the right amounts — not just producing cheaply.' },
      examEdge: 'Always show MC and D on the diagram, mark the <strong>intersection</strong>, and explain that the condition is P = MC.'
    },

    /* ====================================================================
       CARD 4 – Dynamic efficiency
       Pattern: Decompose a diagram (AC before vs after innovation)
       ==================================================================== */
    {
      id: 'toe-dynamic',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'Dynamic efficiency',
      lede: 'Dynamic efficiency is about improvement over time — better products, better methods, and lower future costs.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F501}', tone: 'green', text: '<strong>Dynamic efficiency is driven by innovation, investment, and learning over time.</strong>' },

      flowTitle: 'HOW IT WORKS',
      flowEmoji: '\u{2699}\u{FE0F}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green', icon: '\u{1F331}', title: 'Investment',  sub: 'R&D, training and new machinery.' },
        { tone: 'blue',  icon: '\u{1F4A1}', title: 'Innovation',  sub: 'Better methods, new products.' },
        { tone: 'amber', icon: '\u{1F4C8}', title: 'Higher future profits', sub: 'Lower costs or greater consumer value over time.' }
      ],

      interactiveDiagram: {
        svgKey: 'dynamicEfficiencyDiagram',
        label: 'THE TIME-BASED DIAGRAM — costs fall over time',
        emoji: '\u{1F4C9}',
        layers: ['de-1', 'de-2'],
        inverseLayers: ['de-old-solid'],
        views: [
          {
            label: 'Costs today',
            tone: 'blue',
            head: 'Step 1 — the firm’s costs today',
            body: 'AC₁ shows cost per unit <strong>today</strong>. Static efficiency is judged on this curve alone — it says nothing about whether the firm is improving.',
            show: []
          },
          {
            label: 'Innovation',
            tone: 'green',
            head: 'Step 2 — innovation shifts the whole curve down',
            body: 'Investment in R&D, training and new methods shifts the curve down to <strong>AC₂</strong> — cheaper at <strong>every</strong> output, not just one point.',
            show: ['de-1']
          },
          {
            label: 'The dynamic gain',
            tone: 'amber',
            head: 'Step 3 — same output, lower cost',
            body: 'At the same output <strong>Q̄</strong> the firm now produces each unit more cheaply — that vertical drop is the <strong>dynamic-efficiency gain</strong>, paid for by yesterday’s investment.',
            analysis: 'This is why dynamic efficiency is judged <strong>over time</strong>: the sacrifice (investment spending today) and the payoff (a lower cost curve tomorrow) sit in different periods.',
            show: ['de-1', 'de-2']
          }
        ]
      },

      causesLabel: 'WHY IT MATTERS',
      causesEmoji: '\u{1F50D}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '\u{1F4C9}', head: 'Lower future costs', body: 'Innovation reduces cost per unit, freeing up future profits.' },
        { tone: 'blue',  icon: '\u{1F381}', head: 'Better products',    body: 'Consumers gain greater quality, more variety and improved features.' },
        { tone: 'amber', icon: '\u{1F680}', head: 'Long-run growth',    body: 'Investment today can raise future productivity for the whole economy.' }
      ],

      pairLabel: 'THE TRADE-OFF',
      pairEmoji: '\u{2696}\u{FE0F}',
      left: {
        tone: 'rose',
        icon: '\u{1F4C9}',
        iconStyle: 'circle',
        label: 'Short-run sacrifice',
        text: 'Investment may raise costs or reduce profits today.'
      },
      right: {
        tone: 'green',
        icon: '\u{1F680}',
        iconStyle: 'circle',
        label: 'Long-run gain',
        text: 'Pays back in lower future costs, better products and stronger long-run productivity.'
      },

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'A firm with no investment may look efficient today — but its dynamic position is weak.' },

      conclusion: { title: 'Big idea', text: 'Dynamic efficiency is about progress — firms become more efficient over time through innovation, R&D, and better future products or costs.' },
      examEdge: 'Use the AC shift down diagram — clearly state that innovation lowers future cost.'
    },

    /* ====================================================================
       CARD 5 – When efficiencies clash
       Pattern: pair (trade-off) + tile grid (why monopoly inefficient) +
       flow (why some profit can help). Uses existing engine blocks.
       ==================================================================== */
    {
      id: 'toe-clash',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'When efficiencies clash',
      lede: 'A market structure can look efficient on one measure and weaker on another.',
      ledeStyle: 'plain',
      // Render the numbered sections in title order: 1 the trade-off (pair),
      // 2 why monopoly is inefficient (causes), 3 but why some profit helps (flow).
      pairFirst: true,
      causesFirst: true,

      tip: { icon: '\u{2696}\u{FE0F}', tone: 'green', text: '<strong>Static and dynamic efficiency do not always point to the same market outcome.</strong>' },

      pairLabel: '1. THE TRADE-OFF',
      pairEmoji: '\u{2696}\u{FE0F}',
      left: {
        tone: 'green',
        icon: '\u{1F4C8}',
        iconStyle: 'circle',
        label: 'More competition',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Pressure to cut waste and price close to cost.</li><li>Closer to productive efficiency.</li><li>Closer to allocative efficiency.</li><li>Less slack / less X-inefficiency.</li></ul>'
      },
      right: {
        tone: 'purple',
        icon: '\u{1F3DB}\u{FE0F}',
        iconStyle: 'circle',
        label: 'Some market power',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Supernormal profit can support investment and innovation.</li><li>Funds for R&D.</li><li>Scope for long-run innovation.</li><li>Possible dynamic efficiency.</li></ul>'
      },

      causesLabel: '2. WHY MONOPOLY CAN BE INEFFICIENT',
      causesEmoji: '\u{1F6AB}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'rose',  icon: '\u{1F4C8}', head: 'Higher price',           body: 'P may exceed MC — output below the allocatively efficient level.' },
        { tone: 'amber', icon: '\u{1F4C9}', head: 'Slack / X-inefficiency', body: 'Weak pressure may raise cost — AC sits above its lowest level.' },
        { tone: 'blue',  icon: '\u{1F4DD}', head: 'Restricted output',      body: 'Fewer units than the allocatively efficient amount.' }
      ],

      flowTitle: '3. BUT WHY SOME PROFIT CAN HELP',
      flowEmoji: '\u{1F4A1}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'purple', icon: '\u{1F4B0}', title: 'Supernormal profit', sub: 'Large firms can fund investment.' },
        { tone: 'blue',   icon: '\u{1F331}', title: 'Investment',          sub: 'Profit funds R&D, new equipment and training.' },
        { tone: 'green',  icon: '\u{1F4A1}', title: 'Innovation',          sub: 'New products, new methods, better quality.' },
        { tone: 'amber',  icon: '\u{1F4C8}', title: 'Possible dynamic gain', sub: 'AC may fall over time and consumers may benefit later.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'In real markets, economies often weigh static efficiency against dynamic efficiency.' },

      conclusion: { title: 'Big idea', text: 'Competitive pressure often raises static efficiency, while market power may sometimes support dynamic efficiency.' },
      examEdge: 'Compare static and dynamic efficiency when treating efficiency as an allowed trade-off.'
    },

    /* ====================================================================
       CARD 6 – The whole story
       Pattern: Sequential flow chain (6-step) + 3-column compare + pair
       Synthesis using existing engine blocks – no new visual.
       ==================================================================== */
    {
      id: 'toe-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole story',
      lede: 'Good answers identify the efficiency type, use the right condition or diagram, then judge the trade-offs.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F511}', tone: 'green', text: 'Efficiency is a <strong>three-part story</strong> — cost, output and improvement over time.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green',  icon: '\u{1F3ED}', title: 'Market or firm',  sub: 'What are we analysing?' },
        { tone: 'amber',  icon: '\u{1F3F7}\u{FE0F}', title: 'Efficiency type', sub: 'Productive, allocative or dynamic?' },
        { tone: 'blue',   icon: '\u{2696}\u{FE0F}', title: 'Condition',    sub: 'MC = AC, P = MC, or innovation over time.' },
        { tone: 'purple', icon: '\u{1F4CA}', title: 'Diagram',       sub: 'AC + MC, or D + MC, or two-panel time comparison.' },
        { tone: 'rose',   icon: '\u{1F3AF}', title: 'Outcome',       sub: 'What changes — price, output or quality?' },
        { tone: 'slate',  icon: '\u{1F50D}', title: 'Judgement',     sub: 'Which efficiency matters most in this context?' }
      ],

      causesLabel: '2. COMPARE THE THREE',
      causesEmoji: '\u{1F4CB}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '\u{2699}\u{FE0F}', head: 'Productive', body: '<strong>Question</strong> — Are we producing at lowest cost?<br/><strong>Condition</strong> — minimum AC.' },
        { tone: 'amber', icon: '\u{1F3AF}', head: 'Allocative', body: '<strong>Question</strong> — Is the right amount produced?<br/><strong>Condition</strong> — P = MC.' },
        { tone: 'blue',  icon: '\u{1F4A1}', head: 'Dynamic',    body: '<strong>Question</strong> — Are we improving over time?<br/><strong>Condition</strong> — innovation, investment, lower future cost or better quality.' }
      ],

      pairLabel: '3. FINAL JUDGEMENT',
      pairEmoji: '\u{2696}\u{FE0F}',
      left: {
        tone: 'blue',
        icon: '\u{1F6E1}\u{FE0F}',
        iconStyle: 'circle',
        label: 'Why static efficiency matters',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Lower waste of scarce resources.</li><li>Better resource use today.</li><li>Useful at a point in time.</li></ul>'
      },
      right: {
        tone: 'purple',
        icon: '\u{1F680}',
        iconStyle: 'circle',
        label: 'Why dynamic efficiency matters',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Higher productivity in the long run.</li><li>Better products and innovation over time.</li><li>Lower costs and prices later on.</li></ul>'
      },

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'In real markets, economists often look at <strong>both static and dynamic angles</strong> — they tell different stories.' },

      conclusion: { title: 'Big idea', text: 'Efficiency is not one single number — economies can be efficient on one measure and inefficient on another, both judge the firm at any point in time.' },
      examEdge: 'Top answers identify the type of efficiency, apply the right condition or diagram, and then judge the trade-offs in context.'
    }
  ]
};
