/* ============================================================
   ECONOS – Game Theory (Edexcel A 3.4.4)
   6 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline. The recurring
   2×2 price-cutting game is ONE manipulable payoff matrix the
   student drives across cards 2–4 (build it → find the dominant
   strategy → land on the Nash cell). Card 5 steps through an
   interactive tit-for-tat cycle.

   Card patterns:
     1 Sequential flow chain (why game theory matters) + simple matrix
     2 Interactive multi-state (matrix anatomy: players→strategies→payoffs→pair)
     3 Interactive multi-state (dominant strategy → prisoner's dilemma)
     4 Side-by-side pair (cooperative vs Nash) on an interactive matrix
     5 Interactive multi-state (tit-for-tat cycle) + one-shot vs repeated
     6 Evidence-then-verdict (synthesis + final judgement)

   New visuals (js/icons.js):
     - gameMatrixSimple     (Card 1 static taster)
     - gameMatrixAnatomy    (Card 2 interactive, gma-1..gma-4)
     - gameMatrixDilemma    (Card 3 interactive, gmd-1..gmd-3)
     - gameMatrixNash       (Card 4 interactive, gmn-1..gmn-3)
     - repeatedGameCycle    (Card 5 interactive, rgc-* tit-for-tat loop)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'game-theory',
  topicNum: '3.4.4',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Game Theory',
  estTime: '16 min',
  goal: 'Explain strategic interdependence, read a payoff matrix, find dominant strategies and the Nash equilibrium, and judge why repeated interaction can sustain co-operation',

  intro: {
    heroKey: 'heroGameTheory',
    summary: 'Game theory studies how firms decide when their best move depends on what rivals do. In oligopoly that strategic interdependence is everything. This deck builds one payoff matrix and reuses it: you learn to read it, find each firm’s dominant strategy, and locate the Nash equilibrium — then see why the prisoner’s dilemma makes collusion fragile, and how repeated games and tit-for-tat can rescue co-operation.',
    doInThis: 'Define interdependence and the parts of a payoff matrix. Work out each firm’s best response and dominant strategy, then identify the Nash equilibrium. Explain the prisoner’s dilemma and why the stable outcome can be worse for everyone. Finally, evaluate how repeated interaction, monitoring and time horizons change the result.',
    outcomes: [
      'Explain strategic interdependence and why oligopolists think ahead',
      'Read a payoff matrix: players, strategies and payoffs',
      'Find dominant strategies and the prisoner’s dilemma',
      'Identify a Nash equilibrium and judge whether it is desirable',
      'Evaluate why repeated games can sustain co-operation'
    ],
    tip: 'The phrase to reach for is interdependence — a firm’s best move depends on what it expects rivals to do.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 16 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Game theory: the big picture
       Pattern: Sequential flow chain + static matrix taster
       ==================================================================== */
    {
      id: 'gt-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Game theory — the big picture',
      lede: 'In oligopoly, each firm’s best move depends on what its rivals do — so firms must think strategically.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Game theory studies <strong>strategic interdependence</strong> — firms think ahead because rivals react.' },

      flowTitle: 'WHY GAME THEORY MATTERS',
      flowEmoji: '\u{1F3AF}',
      flow: [
        { tone: 'green',  icon: '\u{1F465}', title: 'Few firms',         sub: 'A market with only a handful of rivals.' },
        { tone: 'blue',   icon: '\u{1F517}', title: 'Interdependence',   sub: 'One firm’s action affects the others.' },
        { tone: 'purple', icon: '\u{1FAA7}', title: 'Choices',           sub: 'Price, output, advertising, product design.' },
        { tone: 'amber',  icon: '\u{1F4B7}', title: 'Payoffs',           sub: 'Profits depend on both firms’ choices.' },
        { tone: 'green',  icon: '\u{1F9E0}', title: 'Strategic thinking', sub: 'Each firm predicts rival reactions.' }
      ],

      flowChart: {
        svgKey: 'gameMatrixSimple',
        label: 'A SIMPLE GAME',
        emoji: '\u{1F3B2}',
        caption: 'Each cell shows the profit outcome from both firms’ choices: (Firm A, Firm B).'
      },

      causesLabel: 'THE THREE INGREDIENTS',
      causesEmoji: '\u{1F9E9}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '\u{1F465}', head: 'Players',    body: 'The decision-makers — the firms.' },
        { tone: 'blue',   icon: '\u{1FAA7}', head: 'Strategies', body: 'The options available — e.g. high or low price.' },
        { tone: 'purple', icon: '\u{1F4CA}', head: 'Payoffs',    body: 'The rewards from each outcome.' }
      ],

      causes2Label: 'WHAT TO REMEMBER',
      causes2Emoji: '\u{1F516}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'green',  icon: '\u{1F465}', head: 'Rivals matter',          body: 'Your best choice depends on theirs.' },
        { tone: 'blue',   icon: '\u{1F9E0}', head: 'Think jointly',          body: 'The same action can pay differently depending on the rival.' },
        { tone: 'amber',  icon: '⚠️', head: 'Not always best together', body: 'Firms may end up in a worse joint outcome.' },
        { tone: 'purple', icon: '\u{1F3DB}️', head: 'For oligopoly', body: 'Ideal for markets with a few large firms.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Game theory does not assume firms cooperate — it asks what rational firms do when they know rivals will react.' },

      conclusion: { title: 'Big idea', text: 'In oligopoly, firms are strategically interdependent — each choice must be judged against the likely response of rivals.' },
      examEdge: 'Define <strong>interdependence</strong> clearly, then use a payoff matrix or simple example to explain why oligopolists think strategically.'
    },

    /* ====================================================================
       CARD 2 – How to read a payoff matrix
       Pattern: Interactive multi-state (matrix anatomy build-up)
       ==================================================================== */
    {
      id: 'gt-read-matrix',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'How to read a payoff matrix',
      lede: 'A payoff matrix maps the choices of two firms and the profit outcome from each combination.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Read across one firm’s options and down the other’s — then <strong>compare the payoffs</strong> in each cell.' },

      interactiveDiagram: {
        svgKey: 'gameMatrixAnatomy',
        label: 'THE ANATOMY OF THE MATRIX — build it in four steps',
        emoji: '\u{1F9E9}',
        wide: true,
        maxWidth: '680px',
        layers: ['gma-1', 'gma-2', 'gma-3', 'gma-4'],
        views: [
          {
            label: 'The players',
            tone: 'blue',
            head: 'Step 1 — the players',
            body: 'The two <strong>players</strong> are the firms making the decision. Firm A reads across the rows; Firm B reads down the columns.',
            show: ['gma-1']
          },
          {
            label: 'The strategies',
            tone: 'purple',
            head: 'Step 2 — the strategies',
            body: 'Each firm picks a <strong>strategy</strong> — here, a high or a low price. Firm A chooses a row; Firm B chooses a column.',
            show: ['gma-1', 'gma-2']
          },
          {
            label: 'The payoffs',
            tone: 'amber',
            head: 'Step 3 — the payoffs',
            body: 'Where a row meets a column, the cell shows the <strong>payoffs</strong> — the profit each firm earns from that combination of choices.',
            analysis: 'Higher numbers are better here (profit, £m). The matrix turns invisible strategic interdependence into a visible decision map you can reason about.',
            show: ['gma-1', 'gma-2', 'gma-3']
          },
          {
            label: 'The ordered pair',
            tone: 'green',
            head: 'Step 4 — the ordered pair',
            body: 'Each cell is an <strong>ordered pair</strong>: the first number is always Firm A’s profit (green), the second is Firm B’s (blue). Order matters — read it the right way round.',
            show: ['gma-4']
          }
        ]
      },

      flowTitle: 'HOW TO READ IT',
      flowEmoji: '\u{1F3AF}',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '\u{1F465}', title: 'Identify the players',    sub: 'Who is choosing?' },
        { tone: 'blue',   icon: '\u{1FAA7}', title: 'Identify the strategies', sub: 'What can they do?' },
        { tone: 'purple', icon: '\u{1F522}', title: 'Read one cell at a time', sub: 'One combination of choices.' },
        { tone: 'amber',  icon: '\u{1F4CA}', title: 'Compare outcomes',        sub: 'Which payoff is better?' }
      ],

      causesLabel: 'COMMON MISTAKES',
      causesEmoji: '⚠️',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'rose', icon: '\u{1F501}', head: 'Wrong order',             body: 'The first number belongs to Firm A, not Firm B.' },
        { tone: 'rose', icon: '\u{1F465}', head: 'Ignoring the rival',      body: 'Your best option depends on the rival’s choice.' },
        { tone: 'rose', icon: '⭐',    head: 'Chasing the biggest number', body: 'Focus on best responses, not just one tempting cell.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The same matrix can describe price, output, advertising or any other strategic choice.' },

      conclusion: { title: 'Big idea', text: 'A payoff matrix turns interdependence into a visible decision map.' },
      examEdge: 'In exam answers, define the <strong>players, strategies and payoffs</strong> before explaining the likely outcome.'
    },

    /* ====================================================================
       CARD 3 – Dominant strategies and the prisoner's dilemma
       Pattern: Interactive multi-state (column-by-column reasoning)
       ==================================================================== */
    {
      id: 'gt-dominant-dilemma',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'Dominant strategies and the prisoner’s dilemma',
      lede: 'Sometimes each firm has a privately rational move that leaves both firms worse off together.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A <strong>dominant strategy</strong> is the best move whatever the rival does — even if it leads to a weak joint outcome.' },

      interactiveDiagram: {
        svgKey: 'gameMatrixDilemma',
        label: 'THE PRICE-CUTTING GAME — find Firm A’s best move',
        emoji: '\u{1F3B2}',
        wide: true,
        maxWidth: '680px',
        layers: ['gmd-1', 'gmd-2', 'gmd-3'],
        views: [
          {
            label: 'If Firm B keeps price high',
            tone: 'blue',
            head: 'If Firm B keeps price HIGH',
            body: 'Firm A compares the left column: keep price high → <strong>8</strong>, or cut → <strong>12</strong>. Cutting wins.',
            show: ['gmd-1']
          },
          {
            label: 'If Firm B cuts to low',
            tone: 'amber',
            head: 'If Firm B cuts to LOW',
            body: 'Firm A compares the right column: keep price high → <strong>2</strong>, or cut → <strong>5</strong>. Cutting wins again.',
            show: ['gmd-1', 'gmd-2']
          },
          {
            label: 'Low price dominates',
            tone: 'purple',
            head: 'Low price dominates → (5, 5)',
            body: 'Cutting is best for Firm A <strong>whatever</strong> Firm B does — so Low price is a dominant strategy. By symmetry, so is Firm B’s. The result is <strong>(5, 5)</strong>.',
            analysis: 'Both firms would prefer (8, 8) from keeping prices high, but each has a private incentive to cut. Individually rational choices produce a collectively worse outcome — the prisoner’s dilemma, and the reason collusion is hard to sustain.',
            show: ['gmd-1', 'gmd-2', 'gmd-3']
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'WHAT IT SHOWS',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '↔️', head: 'Dominant strategy',  body: 'Low price beats high price for Firm A whatever Firm B does — and vice versa.' },
        { tone: 'blue',   icon: '\u{1F465}',    head: 'Joint outcome',      body: 'Both firms would prefer (8, 8) to (5, 5).' },
        { tone: 'purple', icon: '⚙️', head: 'Why collusion is hard', body: 'Each firm has an incentive to cheat and cut price, even if both are worse off.' }
      ],

      flowTitle: 'THE DILEMMA CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F465}', title: 'Both want high profits', sub: 'Each prefers a high price and higher profits.' },
        { tone: 'blue',   icon: '⚠️', title: 'Each fears being undercut', sub: 'Cutting price wins customers if the rival doesn’t.' },
        { tone: 'purple', icon: '✂️', title: 'Both cut price', sub: 'The dominant strategy is to cut.' },
        { tone: 'amber',  icon: '\u{1F4C9}', title: 'Industry profit falls', sub: 'Both end up with lower profits (5, 5).' }
      ],

      causes3Label: 'DO NOT OVERSTATE IT',
      causes3Emoji: '⚠️',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'green',  icon: '\u{1F50D}', head: 'Only a model',              body: 'Real markets may be repeated games, not one-shot.' },
        { tone: 'blue',   icon: '\u{1F39B}️', head: 'Different strategies', body: 'Firms can compete on more than just price.' },
        { tone: 'purple', icon: '\u{1F6E1}️', head: 'Context matters',      body: 'Monitoring and retaliation can change behaviour.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The prisoner’s dilemma explains why collusion can be unstable in oligopoly.' },

      conclusion: { title: 'Big idea', text: 'Individually rational choices can produce a collectively worse outcome.' },
      examEdge: 'Use the phrase <strong>dominant strategy</strong>, then explain why the Nash outcome may be worse than the cooperative one.'
    },

    /* ====================================================================
       CARD 4 – Nash equilibrium
       Pattern: Side-by-side pair (cooperative vs Nash) on interactive matrix
       ==================================================================== */
    {
      id: 'gt-nash',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'Nash equilibrium',
      lede: 'A Nash equilibrium is a position where no firm wants to change strategy on its own.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'At a Nash equilibrium, each firm’s choice is the <strong>best response</strong> to the rival’s choice.' },

      interactiveDiagram: {
        svgKey: 'gameMatrixNash',
        label: 'FINDING THE EQUILIBRIUM — mark each firm’s best response',
        emoji: '\u{1F3AF}',
        wide: true,
        maxWidth: '680px',
        layers: ['gmn-1', 'gmn-2', 'gmn-3'],
        views: [
          {
            label: 'Firm A’s best responses',
            tone: 'green',
            head: 'Firm A’s best responses',
            body: 'For each of Firm B’s choices, mark Firm A’s best reply. A always prefers <strong>Low price</strong> (12 &gt; 8, and 5 &gt; 2) — both green ticks land in the Low row.',
            show: ['gmn-1']
          },
          {
            label: 'Firm B’s best responses',
            tone: 'blue',
            head: 'Firm B’s best responses',
            body: 'Now do the same for Firm B. B also prefers <strong>Low price</strong> (12 &gt; 8, and 5 &gt; 2) — both blue ticks land in the Low column.',
            show: ['gmn-1', 'gmn-2']
          },
          {
            label: 'The Nash equilibrium',
            tone: 'purple',
            head: 'The Nash equilibrium → (5, 5)',
            body: 'The cell ticked by <strong>both</strong> firms is the Nash equilibrium: <strong>(5, 5)</strong>. Neither firm can do better by switching alone.',
            analysis: 'Stable does not mean best. Both firms would earn more at (8, 8), but from (5, 5) neither moves first — switching to a high price while the rival stays low cuts your payoff from 5 to 2. The equilibrium is self-enforcing, not desirable.',
            show: ['gmn-1', 'gmn-2', 'gmn-3']
          }
        ]
      },

      pairFirst: true,
      pairLabel: 'Cooperative outcome vs Nash outcome',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '\u{1F465}',
        iconStyle: 'circle',
        label: 'Cooperative outcome',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.7;"><li>High price, high price.</li><li><strong>(8, 8)</strong> — the best joint profit.</li></ul>'
      },
      right: {
        tone: 'purple',
        icon: '\u{1F9CD}',
        iconStyle: 'circle',
        label: 'Nash outcome',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.7;"><li>Low price, low price.</li><li><strong>(5, 5)</strong> — stable but lower profit.</li></ul>'
      },

      causesLabel: 'WHY IT MATTERS IN OLIGOPOLY',
      causesEmoji: '\u{1F4C8}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F50D}', head: 'Predicts outcomes',     body: 'Helps explain which pricing outcomes are likely to be stable.' },
        { tone: 'amber',  icon: '⚖️', head: 'Shows tension',       body: 'Stability is not the same as efficiency.' },
        { tone: 'green',  icon: '\u{1F517}', head: 'Links to interdependence', body: 'Each action depends on how rivals are expected to react.' },
        { tone: 'purple', icon: '\u{1F9E0}', head: 'Useful but simplified', body: 'Assumes firms play a stylised game.' }
      ],

      causes2Label: 'COMMON CONFUSIONS',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'amber', icon: '⚠️', head: 'Not the highest profit', body: 'Equilibrium may give lower profits than if firms cooperated.' },
        { tone: 'amber', icon: '⚠️', head: 'Not always cooperative',  body: 'Firms may act in self-interest, not work together.' },
        { tone: 'amber', icon: '⚠️', head: 'Not always permanent',    body: 'Market changes can shift strategies and outcomes.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A Nash equilibrium can still leave both firms worse off than another possible outcome.' },

      conclusion: { title: 'Big idea', text: 'Stable does not mean best — it means no one wants to deviate alone.' },
      examEdge: 'State the equilibrium clearly, then explain why it is stable and whether it is desirable.'
    },

    /* ====================================================================
       CARD 5 – Repeated games and why co-operation can last
       Pattern: Interactive multi-state (tit-for-tat cycle) + one-shot vs repeated
       ==================================================================== */
    {
      id: 'gt-repeated-games',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'Repeated games and why co-operation can last',
      lede: 'When firms meet again and again, future reactions can change today’s choice.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Repeated interaction makes <strong>retaliation</strong> possible — that can discourage cheating and support co-operation.' },

      interactiveDiagram: {
        svgKey: 'repeatedGameCycle',
        label: 'HOW RETALIATION WORKS — step through the cycle',
        emoji: '\u{1F501}',
        wide: true,
        maxWidth: '720px',
        layers: ['rgc-1', 'rgc-2', 'rgc-2b', 'rgc-3', 'rgc-3b', 'rgc-4', 'rgc-4b', 'rgc-loopg'],
        views: [
          {
            label: 'Today: co-operate',
            tone: 'green',
            head: 'Today: co-operate',
            body: 'Both firms hold a high price and share the high joint profit (8, 8).',
            show: ['rgc-1']
          },
          {
            label: 'A rival cheats',
            tone: 'amber',
            head: 'A rival cheats',
            body: 'One firm breaks the agreement and cuts price to grab market share — tempting in a one-shot game.',
            show: ['rgc-1', 'rgc-2', 'rgc-2b']
          },
          {
            label: 'You retaliate',
            tone: 'purple',
            head: 'You retaliate next round',
            body: 'Because the game repeats, you can punish the cheat by matching the price cut in the next round.',
            show: ['rgc-1', 'rgc-2', 'rgc-2b', 'rgc-3', 'rgc-3b']
          },
          {
            label: 'Cheating doesn’t pay',
            tone: 'rose',
            head: 'Profits fall — so cheating doesn’t pay',
            body: 'Retaliation drops both firms to the low-profit outcome (5, 5). Knowing this, the rival’s best move is to keep co-operating — <strong>tit-for-tat</strong>.',
            analysis: 'In a one-shot game, cutting is the dominant strategy. But repetition adds a future: the threat of retaliation can make co-operation the rational choice. This is why some oligopolies sustain high prices without a formal cartel.',
            show: ['rgc-1', 'rgc-2', 'rgc-2b', 'rgc-3', 'rgc-3b', 'rgc-4', 'rgc-4b', 'rgc-loopg']
          }
        ]
      },

      pairFirst: true,
      pairLabel: 'One-shot game vs Repeated game',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue',
        icon: '⏱️',
        iconStyle: 'circle',
        label: 'One-shot game',
        rows: [
          { icon: '\u{1F3F7}️', text: '<strong>Temptation to undercut</strong> — undercutting brings an immediate gain.' },
          { icon: '\u{1F6E1}️', text: '<strong>Weak trust</strong> — no assurance rivals will co-operate.' },
          { icon: '\u{1F517}', text: '<strong>Collusion fragile</strong> — agreements break down easily.' }
        ]
      },
      right: {
        tone: 'green',
        icon: '\u{1F501}',
        iconStyle: 'circle',
        label: 'Repeated game',
        rows: [
          { icon: '⏳', text: '<strong>Future retaliation matters</strong> — cheating today triggers punishment tomorrow.' },
          { icon: '⭐', text: '<strong>Reputation matters</strong> — a good record encourages rivals to co-operate.' },
          { icon: '\u{1F91D}', text: '<strong>Collusion more sustainable</strong> — co-operation can last and support higher profits.' }
        ]
      },

      causesFirst: true,
      causesLabel: 'WHEN CO-OPERATION IS MORE LIKELY',
      causesEmoji: '✅',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green', icon: '\u{1F465}', head: 'Few firms',            body: 'Easier to co-ordinate and monitor behaviour.' },
        { tone: 'green', icon: '\u{1F441}️', head: 'Easy monitoring', body: 'Rivals can see each other’s prices or output.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Stable demand and costs', body: 'Less uncertainty makes agreements hold better.' },
        { tone: 'green', icon: '\u{1F3F0}', head: 'High barriers to entry', body: 'New firms are less likely to undercut and disrupt.' }
      ],

      causes3Label: 'WHEN IT BREAKS DOWN',
      causes3Emoji: '⚠️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'rose', icon: '\u{1F465}', head: 'Many firms',           body: 'Harder to co-ordinate and enforce agreement.' },
        { tone: 'rose', icon: '\u{1F3F7}️', head: 'Secret discounting', body: 'Hard to detect and easier to cheat.' },
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Changing conditions',  body: 'More uncertainty makes agreements unstable.' },
        { tone: 'rose', icon: '⚖️', head: 'Strong legal pressure', body: 'Authorities may break up or fine agreements.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The core idea: repeated contact → fear of retaliation → less cheating → more stable co-operation. This is why some oligopolies avoid constant price wars.' },

      conclusion: { title: 'Big idea', text: 'The future can discipline the present — repeated interaction changes incentives.' },
      examEdge: 'In evaluation, ask three things: is the game <strong>one-shot or repeated</strong>, can firms <strong>monitor</strong> each other, and is retaliation a <strong>credible threat</strong>? Credibility is what makes tit-for-tat bite.'
    },

    /* ====================================================================
       CARD 6 – The whole story
       Pattern: Evidence-then-verdict (synthesis + final judgement)
       ==================================================================== */
    {
      id: 'gt-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole story',
      lede: 'Game theory explains why oligopolists think strategically, why collusion is fragile, and why outcomes depend on incentives and time horizons.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Strong answers define interdependence, use a matrix clearly, and then judge how realistic the model is.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F465}', title: 'Few firms',       sub: 'A few rivals.' },
        { tone: 'blue',   icon: '\u{1F517}', title: 'Interdependence', sub: 'Rivals react.' },
        { tone: 'purple', icon: '\u{1FAA7}', title: 'Strategies',      sub: 'Each firm’s options.' },
        { tone: 'amber',  icon: '\u{1F3B2}', title: 'Payoff matrix',   sub: 'Map the payoffs.' },
        { tone: 'green',  icon: '\u{1F91D}', title: 'Nash outcome',    sub: 'The stable result.' },
        { tone: 'green',  icon: '\u{1F50D}', title: 'Evaluation',      sub: 'Judge with context.' }
      ],

      causesLabel: 'THE KEY TAKEAWAYS',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F465}', head: 'Interdependence',  body: 'Rivals matter — think in moves and counter-moves.' },
        { tone: 'purple', icon: '\u{1F3C6}', head: 'Dominant strategy', body: 'Sometimes one move is always best.' },
        { tone: 'blue',   icon: '⚖️', head: 'Nash equilibrium', body: 'Stable, but not always best.' },
        { tone: 'green',  icon: '\u{1F501}', head: 'Repeated games',    body: 'Future reactions can support co-operation.' }
      ],

      causes2Label: 'COMMON PITFALLS',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '❌', head: 'Don’t confuse Nash with best', body: 'A stable outcome can still be worse for both firms.' },
        { tone: 'rose', icon: '\u{1F64D}', head: 'Don’t ignore the rival',    body: 'Each firm’s best move depends on the other’s response.' },
        { tone: 'rose', icon: '❗', head: 'Don’t forget repetition',     body: 'One-shot and repeated games give different outcomes.' }
      ],

      causes3Label: 'HOW TO WRITE IT',
      causes3Emoji: '✍️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'purple', icon: '\u{1F4C4}', head: '1 · Define the game',  body: 'Set out the firms and the choices.' },
        { tone: 'purple', icon: '\u{1F500}', head: '2 · Strategies & payoffs', body: 'Explain the matrix and the numbers.' },
        { tone: 'purple', icon: '\u{1F3AF}', head: '3 · Likely outcome',  body: 'Identify the dominant strategy and Nash cell.' },
        { tone: 'purple', icon: '✅', head: '4 · Evaluate',          body: 'Use realism, repeated interaction and context.' }
      ],

      pairLabel: 'Why game theory helps vs why you must evaluate',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '\u{1F44D}',
        iconStyle: 'circle',
        label: 'Why game theory helps',
        points: ['Clarifies interdependence', 'Predicts strategic behaviour', 'Explains unstable collusion']
      },
      right: {
        tone: 'blue',
        icon: '\u{1F6E1}️',
        iconStyle: 'circle',
        label: 'Why evaluation matters',
        points: ['Matrices simplify reality', 'Firms may cooperate repeatedly', 'Legal and market context matter']
      },

      conclusion: { title: 'Big idea', text: 'Game theory turns oligopoly into a strategic story — outcomes depend on what each firm expects the other to do.' },
      examEdge: 'Use matrix language precisely, then weigh whether the assumptions fit the market in the question.'
    }
  ]
};
