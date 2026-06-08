/* ============================================================
   ECONOS – Collusion and Cartels (Edexcel A 3.4.4)
   6 cards · interactive-first build
   Follows the Oligopoly introduction deck — this deck covers
   COLLUSION specifically (explicit vs tacit, the cartel diagram,
   why firms collude, why cartels break down). Game theory is a
   separate topic.

   Card patterns:
     1 Decompose + tile grids — "the big picture" (hub + 4-feature
       vulnerability grid + 4-step "what firms try to achieve")
     2 Decompose a diagram (INTERACTIVE 3-view cartel joint-profit)
       — Q_c < Q_comp and P_c > P_comp, MC tick-shaped (matches
       Costs and Oligopoly kinked-demand)
     3 Side-by-side pair — explicit vs tacit + practices tile grid
       + tacit-coordination flow
     4 Evidence-then-verdict — why firms collude (attractions +
       Rivalry vs Collusion pair + who wins / who loses)
     5 Sequential flow chain — why cartels break down (5 reasons
       unstable + cheating-temptation chain + regulator response)
     6 Sequential flow (synthesis) — "the whole story" chain +
       evaluation + common mistakes + how-to-write

   New visuals:
     - collusionBigPicture        (Card 1 hero hub)
     - cartelJointProfitDiagram   (Card 2: interactive 3-view)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'collusion-and-cartels',
  topicNum: '3.4.4',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Collusion and Cartels',
  estTime: '15 min',
  goal: 'Define collusion and cartels, build and read the joint-profit diagram, and judge why cartels are attractive, unstable and usually illegal',

  intro: {
    heroKey: 'heroFirm',
    summary: 'Collusion happens when rival firms coordinate rather than compete. A cartel is a group of firms acting together to raise their joint profit — usually by restricting output and pushing price above the competitive level. The defining tension is that the same agreement that benefits the cartel internally creates strong incentives for each member to cheat, and almost always falls foul of competition law. This deck builds the diagram, separates explicit from tacit collusion, and ends with a clear synthesis of when (and why) cartels collapse.',
    doInThis: 'Define collusion and identify the main forms a cartel can take. Build the joint-profit diagram and read it cleanly. Separate explicit cartels from tacit coordination. Explain why firms collude — and why each firm is tempted to cheat. Evaluate the consequences for firms, consumers and the wider economy, then judge how regulators respond.',
    outcomes: [
      'Define collusion, cartel, explicit and tacit collusion',
      'Build and interpret the cartel joint-profit diagram (Q_c, P_c)',
      'Explain why oligopolies are vulnerable to collusion',
      'Identify common collusive practices and how cartels are policed',
      'Evaluate why cartels break down and what governments do about them'
    ],
    tip: 'Treat a cartel as an oligopoly <strong>trying to behave like a monopoly</strong> — that one phrase unlocks most of the analysis.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 15 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Collusion and cartels: the big picture
       Pattern: Decompose hub + tile grids
       ==================================================================== */
    {
      id: 'col-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Collusion and cartels — the big picture',
      lede: 'Collusion happens when rival firms coordinate rather than compete. A cartel is a group of firms acting together to raise joint profit.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Collusion means coordinating <strong>price, output or market behaviour</strong> to earn higher joint profit.' },

      visualKey: 'collusionBigPicture',
      visualLabel: 'WHAT COLLUSION IS',
      visualEmoji: '\u{1F517}',

      causesLabel: 'TWO FORMS OF COLLUSION',
      causesEmoji: '\u{1F4DC}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F4CB}', head: 'Explicit collusion', body: 'A formal agreement such as price fixing or output quotas.' },
        { tone: 'purple', icon: '\u{1F4AC}', head: 'Tacit collusion',    body: 'An unwritten understanding where firms avoid aggressive competition.' },
        { tone: 'green',  icon: '\u{1F465}', head: 'Cartel',             body: 'A formal collusive agreement between producers — usually illegal.' }
      ],

      causes2Label: 'WHY OLIGOPOLIES ARE VULNERABLE',
      causes2Emoji: '\u{1F3AF}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'blue',   icon: '\u{1F465}', head: 'Few firms',          body: 'A small number of firms means each one matters.' },
        { tone: 'blue',   icon: '\u{1F6E1}\u{FE0F}', head: 'High barriers', body: 'Barriers to entry make outside competition weak.' },
        { tone: 'blue',   icon: '\u{1F517}', head: 'Interdependence',    body: 'One firm’s choice affects the others’ decisions and results.' },
        { tone: 'blue',   icon: '\u{1F3F7}\u{FE0F}', head: 'Similar products or costs', body: 'When products or costs are alike, coordination can be easier.' }
      ],

      flowTitle: 'WHAT FIRMS TRY TO ACHIEVE',
      flowEmoji: '\u{1F4C8}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'purple', icon: '\u{1F91D}', title: 'Agree',           sub: 'Firms reach an agreement to coordinate.' },
        { tone: 'amber',  icon: '\u{1F6AB}', title: 'Restrict output', sub: 'They limit the quantity supplied to the market.' },
        { tone: 'blue',   icon: '\u{1F3F7}\u{FE0F}', title: 'Raise price', sub: 'With less supply, firms can charge a higher price.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Earn supernormal profit', sub: 'Higher price and lower output boost joint profit.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Collusion usually reduces competition and harms consumers through higher prices, lower output and weaker choice.' },

      conclusion: { title: 'Big idea', text: 'Cartels try to make an oligopoly behave more like a monopoly.' },
      examEdge: 'Define collusion clearly, then explain why it can raise profit and why it may harm consumers.'
    },

    /* ====================================================================
       CARD 2 – How a cartel works (the joint-profit diagram)
       Pattern: Decompose a diagram (INTERACTIVE 3-view)
       ==================================================================== */
    {
      id: 'col-cartel-diagram',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'How a cartel works',
      lede: 'A cartel tries to coordinate like a single monopolist — restricting total output so the market price rises.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Cartels maximise joint profit by <strong>lowering industry output and raising price</strong>.' },

      interactiveDiagram: {
        svgKey: 'cartelJointProfitInteractive',
        label: 'THE JOINT-PROFIT DIAGRAM — build it in three steps',
        emoji: '\u{1F4C8}',
        wide: true,
        layers: ['cjp-1', 'cjp-2', 'cjp-3'],
        views: [
          {
            label: 'Demand and MR',
            tone: 'blue',
            head: 'Step 1 — the market demand curve and MR',
            body: 'A cartel faces the <strong>industry demand curve D</strong>. Its marginal revenue curve <strong>MR</strong> starts at the same price but has twice the slope, because to sell more the cartel must drop price on every unit.',
            show: ['cjp-1']
          },
          {
            label: 'Cartel output and price',
            tone: 'amber',
            head: 'Step 2 — set output where MR = MC',
            body: 'Treating the cartel as one big monopolist, total output is set where <strong>MR = MC</strong>. That gives the cartel quantity <strong>Q₌</strong>; projecting up to the demand curve gives the cartel price <strong>P₌</strong>.',
            analysis: 'Notice that MR cuts MC well to the left of where MC would cross demand under competition. That is exactly how the cartel raises price — by holding back output.',
            show: ['cjp-1', 'cjp-2']
          },
          {
            label: 'Why it pays',
            tone: 'green',
            head: 'Step 3 — compare with competition',
            body: 'Under competition firms would produce where <strong>MC = D</strong> at <strong>Q_comp / P_comp</strong>. The cartel deliberately moves output left and price up, capturing a larger <strong>joint profit area</strong> for its members.',
            analysis: 'Q₌ is less than Q_comp; P₌ is greater than P_comp. The shaded area is the cartel’s extra reward for restricting output — and the source of consumer harm.',
            show: ['cjp-1', 'cjp-2', 'cjp-3']
          }
        ]
      },

      flowTitle: 'HOW THE AGREEMENT WORKS',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'purple', icon: '1', title: 'Set industry output', sub: 'Choose the total cartel quantity.' },
        { tone: 'purple', icon: '2', title: 'Share quotas',         sub: 'Divide output between member firms.' },
        { tone: 'purple', icon: '3', title: 'Monitor behaviour',    sub: 'Check whether firms stick to the agreement.' },
        { tone: 'purple', icon: '4', title: 'Punish cheating',      sub: 'Use threats or retaliation if a firm undercuts.' }
      ],

      causesLabel: 'WHAT CHANGES',
      causesEmoji: '\u{2696}\u{FE0F}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',  icon: '\u{1F967}', head: 'Output', body: 'Lower than under rivalry.' },
        { tone: 'purple', icon: '\u{1F3F7}\u{FE0F}', head: 'Price', body: 'Higher than under rivalry.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Profit', body: 'Higher joint profit for the cartel.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'A cartel works only if firms can agree total output and stop members from secretly selling more.' },

      conclusion: { title: 'Big idea', text: 'A cartel behaves like a monopoly at industry level, even though several firms are involved.' },
      examEdge: 'Use the diagram to show <strong>lower output and higher price</strong>, then explain how quotas and monitoring support the cartel.'
    },

    /* ====================================================================
       CARD 3 – Explicit vs tacit collusion
       Pattern: Side-by-side pair + tile grids + tacit flow
       ==================================================================== */
    {
      id: 'col-explicit-tacit',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'Explicit vs tacit collusion',
      lede: 'Collusion can be formal and obvious — or informal and much harder to prove.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Not all collusion needs a written agreement — <strong>some of it is tacit</strong>.' },

      pairFirst: true,
      pairLabel: 'TWO FORMS OF COLLUSION',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'blue',
        icon: '\u{1F4CB}',
        iconStyle: 'circle',
        label: 'Explicit collusion',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Direct agreement</li><li>Price fixing or quotas</li><li>Clear cartel behaviour</li><li>Usually easier to prosecute</li></ul>'
      },
      right: {
        tone: 'green',
        icon: '\u{1F4AC}',
        iconStyle: 'circle',
        label: 'Tacit collusion',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>No formal contract</li><li>Firms read each other’s signals</li><li>Avoid aggressive price cuts</li><li>Harder to prove legally</li></ul>'
      },

      causesLabel: 'COMMON COLLUSIVE PRACTICES',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F3F7}\u{FE0F}', head: 'Price fixing', body: 'Agree a common price.' },
        { tone: 'amber',  icon: '\u{1F4CA}', head: 'Output quotas',         body: 'Restrict supply.' },
        { tone: 'blue',   icon: '\u{1F30D}', head: 'Market sharing',        body: 'Divide regions or customers.' },
        { tone: 'green',  icon: '\u{2696}\u{FE0F}', head: 'Bid rigging',     body: 'Coordinate tender outcomes.' }
      ],

      flowTitle: 'HOW TACIT COLLUSION CAN LOOK',
      flowEmoji: '\u{1F4C8}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'blue',   icon: '\u{1F6A9}', title: 'Price leader moves first', sub: '' },
        { tone: 'purple', icon: '\u{1F465}', title: 'Rivals follow',            sub: '' },
        { tone: 'green',  icon: '\u{2705}',  title: 'Price war avoided',        sub: '' }
      ],

      causes2Label: 'TELL-TALE SIGNALS',
      causes2Emoji: '\u{1F50D}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Stable prices',     body: 'Little movement even when costs change.' },
        { tone: 'purple', icon: '\u{1F3F7}\u{FE0F}', head: 'Parallel pricing', body: 'Rival prices move in lockstep.' },
        { tone: 'green',  icon: '\u{1F501}', head: 'Repeated interaction', body: 'Firms watch each other over time.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Tacit collusion may emerge in concentrated markets even when firms never sign a formal agreement.' },

      conclusion: { title: 'Big idea', text: 'Explicit collusion is clearer, but tacit collusion can still weaken competition.' },
      examEdge: 'Distinguish clearly between <strong>overt cartel agreements</strong> and <strong>tacit coordination</strong> when evaluating oligopoly behaviour.'
    },

    /* ====================================================================
       CARD 4 – Why firms collude
       Pattern: Evidence-then-verdict
       ==================================================================== */
    {
      id: 'col-why-collude',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'Why firms collude',
      lede: 'Firms collude because competition is risky — and coordination can make profits larger and more predictable.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The main attraction of collusion is <strong>higher and more stable joint profit</strong>.' },

      causesLabel: 'WHY IT IS ATTRACTIVE',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Higher profit',        body: 'Restricting output can raise price and supernormal profit.' },
        { tone: 'purple', icon: '\u{1F6E1}\u{FE0F}', head: 'Less uncertainty', body: 'Firms avoid unpredictable price wars.' },
        { tone: 'blue',   icon: '\u{1F967}', head: 'Protect market share', body: 'Coordination can stabilise a concentrated industry.' },
        { tone: 'amber',  icon: '\u{1F4C5}', head: 'Easier planning',      body: 'Firms can plan output and pricing with more confidence.' }
      ],

      pairLabel: 'COMPETITION VS COLLUSION',
      pairEmoji: '\u{2696}\u{FE0F}',
      left: {
        tone: 'blue',
        icon: '\u{1F465}',
        iconStyle: 'circle',
        label: 'Rivalry',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Price cuts</li><li>Advertising battles</li><li>Lower margins</li><li>Uncertain outcomes</li></ul>'
      },
      right: {
        tone: 'green',
        icon: '\u{1F91D}',
        iconStyle: 'circle',
        label: 'Collusion',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Coordinated price</li><li>Restricted output</li><li>Higher margins</li><li>More predictable outcomes</li></ul>'
      },

      causes2Label: 'WHO BENEFITS — WHO LOSES',
      causes2Emoji: '\u{1F465}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green',  icon: '\u{1F3E2}', head: 'Firms',     body: 'Often gain through higher profit.' },
        { tone: 'amber',  icon: '\u{1F6D2}', head: 'Consumers', body: 'Usually face higher prices and less choice.' },
        { tone: 'purple', icon: '\u{1F4A1}', head: 'Dynamic performance', body: 'Weaker rivalry may reduce pressure to innovate.' }
      ],

      bottomTip: { icon: '\u{2696}\u{FE0F}', tone: 'blue', text: 'Collusion helps insiders most — the public gains far less.' },

      conclusion: { title: 'Big idea', text: 'Collusion replaces competitive pressure with coordinated self-interest.' },
      examEdge: 'Explain <strong>why firms collude</strong>, then balance firm gains against the losses faced by consumers and the wider market.'
    },

    /* ====================================================================
       CARD 5 – Why cartels break down
       Pattern: Sequential flow chain (instability + regulator response)
       ==================================================================== */
    {
      id: 'col-breakdown',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'Why cartels break down — and why the law steps in',
      lede: 'Cartels can be profitable, but they are hard to sustain and often illegal.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Each firm wants the cartel price — but each also has an <strong>incentive to cheat</strong>.' },

      causesLabel: 'WHY COLLUSION IS UNSTABLE',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 5,
      causes: [
        { tone: 'blue', icon: '\u{1F3AD}', head: 'Cheating',           body: 'A firm may secretly cut price or exceed its quota.' },
        { tone: 'blue', icon: '\u{1F6AA}', head: 'New entrants',       body: 'Outsiders undermine the agreement.' },
        { tone: 'blue', icon: '\u{2696}\u{FE0F}', head: 'Different costs', body: 'Firms may want different prices or outputs.' },
        { tone: 'blue', icon: '\u{1F4C9}', head: 'Demand shocks',      body: 'Changing demand makes agreement harder.' },
        { tone: 'blue', icon: '\u{1F50D}', head: 'Monitoring problems', body: 'Members may not detect cheating quickly.' }
      ],

      flowTitle: 'THE CHEATING TEMPTATION',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'purple', icon: '\u{1F3F7}\u{FE0F}', title: 'Cartel sets high price', sub: '' },
        { tone: 'purple', icon: '\u{1F4C9}', title: 'One firm undercuts slightly',   sub: '' },
        { tone: 'purple', icon: '\u{1F6D2}', title: 'Sells more than quota',         sub: '' },
        { tone: 'purple', icon: '\u{1F465}', title: 'Others retaliate',              sub: '' },
        { tone: 'purple', icon: '\u{1F517}', title: 'Cartel weakens or collapses',   sub: '' }
      ],

      causes2Label: 'WHY GOVERNMENTS CARE',
      causes2Emoji: '\u{1F465}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'green', icon: '\u{1F4B0}', head: 'Higher prices',  body: 'Consumers pay more.' },
        { tone: 'green', icon: '\u{1F4CA}', head: 'Lower output',   body: 'Markets supply less.' },
        { tone: 'green', icon: '\u{1F6D2}', head: 'Less choice',    body: 'Competition weakens.' },
        { tone: 'green', icon: '\u{2699}\u{FE0F}', head: 'Possible inefficiency', body: 'Weaker pressure to innovate or cut cost.' }
      ],

      flow2Title: 'THE REGULATOR RESPONSE',
      flow2Emoji: '\u{1F3DB}\u{FE0F}',
      flow2Sep: '\u{2192}',
      flow2: [
        { tone: 'blue', icon: '\u{1F50D}', title: 'Investigate',  sub: '' },
        { tone: 'blue', icon: '\u{1F4DD}', title: 'Gather evidence', sub: '' },
        { tone: 'blue', icon: '\u{26A0}\u{FE0F}', title: 'Fine firms', sub: '' },
        { tone: 'blue', icon: '\u{2696}\u{FE0F}', title: 'Break up the cartel', sub: '' }
      ],

      bottomTip: { icon: '\u{26A0}\u{FE0F}', tone: 'amber', text: 'In many economies, explicit cartel behaviour is <strong>illegal under competition law</strong>.' },

      conclusion: { title: 'Big idea', text: 'Cartels are unstable because private incentives pull firms away from the collective agreement.' },
      examEdge: 'A strong evaluation explains <strong>both sides</strong> — why collusion is profitable and why cheating, entry or the law may destroy it.'
    },

    /* ====================================================================
       CARD 6 – The whole story
       Pattern: Sequential flow (synthesis) + evaluation + mistakes + how-to-write
       ==================================================================== */
    {
      id: 'col-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole story',
      lede: 'Top answers define collusion, explain how a cartel works, then judge whether it is stable and what it means for consumers.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Collusion can raise joint profit, but it usually <strong>harms competition</strong> and may be difficult to sustain.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'blue',   icon: '\u{1F3E2}', title: 'Few firms',          sub: 'Concentrated market.' },
        { tone: 'purple', icon: '\u{1F91D}', title: 'Collusion',          sub: 'Firms coordinate.' },
        { tone: 'amber',  icon: '\u{1F6AB}', title: 'Restrict output',    sub: 'Total supply is reduced.' },
        { tone: 'blue',   icon: '\u{1F3F7}\u{FE0F}', title: 'Price rises', sub: 'Market price increases.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Joint profit rises', sub: 'Cartel members gain.' },
        { tone: 'purple', icon: '\u{2696}\u{FE0F}', title: 'Instability and law', sub: 'Cheating and regulation threaten the cartel.' }
      ],

      causesLabel: 'COMMON EVALUATION POINTS',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{23F0}', head: 'Short run vs long run', body: 'Profits now, instability later.' },
        { tone: 'purple', icon: '\u{1F4AC}', head: 'Explicit vs tacit',    body: 'Not all collusion is equally visible.' },
        { tone: 'green',  icon: '\u{1F465}', head: 'Consumer harm',        body: 'Higher price and weaker choice matter.' },
        { tone: 'blue',   icon: '\u{1F6E1}\u{FE0F}', head: 'Context matters', body: 'Entry barriers and monitoring affect stability.' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '\u{26A0}\u{FE0F}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '\u{1F465}', head: 'Treating cartel as competition', body: 'It behaves more like monopoly.' },
        { tone: 'rose', icon: '\u{1F3AD}', head: 'Forgetting cheating',            body: 'Stability is never guaranteed.' },
        { tone: 'rose', icon: '\u{2696}\u{FE0F}', head: 'Ignoring legality',       body: 'Explicit collusion is often illegal.' }
      ],

      flow2Title: 'HOW TO WRITE IT',
      flow2Emoji: '\u{270D}\u{FE0F}',
      flow2Sep: '\u{2192}',
      flow2: [
        { tone: 'purple', icon: '1', title: 'Define',  sub: 'Collusion / cartel.' },
        { tone: 'purple', icon: '2', title: 'Explain', sub: 'Lower output, higher price, higher joint profit.' },
        { tone: 'purple', icon: '3', title: 'Assess',  sub: 'Incentives to cheat and barriers to stability.' },
        { tone: 'purple', icon: '4', title: 'Judge',   sub: 'Weigh firm gains against consumer harm and legal risk.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Game theory takes this further — it formalises the cheat-or-cooperate decision as a strategic game.' },

      conclusion: { title: 'Big idea', text: 'A cartel is best understood as an <strong>oligopoly trying to behave like a monopoly</strong> — but with internal tensions.' },
      examEdge: 'Use the cartel diagram, mention <strong>interdependence</strong>, then evaluate <strong>stability, consumer welfare and legality</strong>.'
    }
  ]
};
