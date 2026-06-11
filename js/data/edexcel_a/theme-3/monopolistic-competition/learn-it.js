/* ============================================================
   ECONOS – Monopolistic Competition (Edexcel A 3.4.3)
   6 cards · interactive-first build
   Maps the spec sub-points: characteristics of MC, the firm's
   downward-sloping demand, short-run profit max, long-run entry
   driving normal profit, and the efficiency / excess-capacity
   judgement.

   Card patterns:
     1 Hub-and-spoke (4 characteristics) + spectrum bar
     2 Hub-and-spoke (5 characteristics in detail)
     3 Decompose (interactive 3-view SR profit-max build-up)
     4 Decompose (interactive 3-view SR→entry→LR transition)
     5 Decompose (interactive 2-view LR + excess capacity reveal)
     6 Sequential flow + STRENGTHS/WEAKNESSES pair + 3-col compare

   New visuals (all hand-rolled):
     - mcMarketShape         (Card 1 hero: 4-hub + spectrum)
     - mcCharacteristicsHub  (Card 2 hero: 5-spoke hub)
     - mcShortRunDiagram     (Card 3 hero: interactive 3-view)
     - mcLongRunDiagram      (Card 4 hero: interactive 3-view)
     - mcEfficiencyDiagram   (Card 5 hero: interactive 2-view)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'monopolistic-competition',
  topicNum: '3.4.3',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Monopolistic Competition',
  estTime: '16 min',
  goal: 'Apply the monopolistic-competition model: identify the five characteristics, find SR profit max and LR equilibrium, and judge efficiency and excess capacity',

  intro: {
    heroKey: 'heroMonopolisticComp',
    summary: 'Monopolistic competition is a market with many firms, differentiated products and low barriers to entry. Each firm faces a downward-sloping (rather than perfectly elastic) demand curve thanks to product differentiation — so it has some price-making power. In the short run, profit-maximising firms can earn abnormal profit; in the long run, low entry barriers let new firms in, demand-per-firm shifts left, and the result is a tangency equilibrium where price equals average cost (normal profit only). Output sits below the AC minimum, giving "excess capacity" — a trade-off for the variety and choice that differentiation delivers.',
    doInThis: 'Name the five characteristics of monopolistic competition. Build the firm diagram step by step using MR = MC and draw the SR profit (or loss) rectangle. Show how entry shifts AR left to a tangency with AC in the long run, and explain what "excess capacity" means. Judge the efficiency trade-offs against perfect competition.',
    outcomes: [
      'List the five characteristics of monopolistic competition',
      'Show why each firm faces a downward-sloping demand curve',
      'Apply MC = MR to find SR profit-maximising output and price',
      'Trace the entry adjustment to LR equilibrium and explain tangency',
      'Diagnose productive, allocative and dynamic (in)efficiency in MC'
    ],
    tip: 'MC firms have some price-making power because of product differentiation — that is what makes their demand curve slope down.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 16 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – The big picture
       Pattern: Hub-and-spoke (4 features) + spectrum bar inside the visual
       ==================================================================== */
    {
      id: 'mc-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Monopolistic competition — the big picture',
      lede: 'Monopolistic competition is a market with many firms, differentiated products, and low barriers to entry — so firms compete strongly but still have some price-setting power.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F3F7}\u{FE0F}', tone: 'green', text: 'Many firms sell <strong>differentiated products</strong>, but each firm still faces a downward-sloping demand curve.' },

      visualKey: 'mcMarketShape',
      visualLabel: 'THE MARKET SHAPE',
      visualEmoji: '\u{1F3EA}',

      visualKey2: 'marketSpectrumMC',
      visualLabel2: 'WHERE IT SITS',
      visualEmoji2: '\u{1F9ED}',

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green', icon: '\u{1F465}', title: 'Many firms',          sub: 'In the market.' },
        { tone: 'amber', icon: '\u{1F3A8}', title: 'Products differ',      sub: 'Branding, style, quality.' },
        { tone: 'blue',  icon: '\u{1F60A}', title: 'Consumers have preferences', sub: 'Some loyalty to brands.' },
        { tone: 'purple', icon: '\u{1F4C9}', title: 'Each firm has some pricing power', sub: 'Downward-sloping demand.' },
        { tone: 'rose',  icon: '\u{1F4E2}', title: 'Firms compete on quality and advertising', sub: 'Non-price competition matters.' }
      ],

      causesLabel: 'EXAMPLES',
      causesEmoji: '\u{1F4DA}',
      causesStyle: 'icon-top',
      causesCols: 5,
      causes: [
        { tone: 'amber',  icon: '\u{2615}', head: 'Coffee shops',      body: '' },
        { tone: 'blue',   icon: '\u{1F487}', head: 'Hairdressers',     body: '' },
        { tone: 'green',  icon: '\u{1F35D}', head: 'Restaurants',      body: '' },
        { tone: 'purple', icon: '\u{1F457}', head: 'Clothing brands',  body: '' },
        { tone: 'rose',   icon: '\u{1F35F}', head: 'Takeaways',        body: '' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Monopolistic competition is <strong>not perfectly competitive</strong> — product differentiation gives each firm some price-making power.' },

      conclusion: { title: 'Big idea', text: 'Monopolistic competition sits between perfect competition (no differentiation) and monopoly (one seller). It is the most common real-world market structure.' },
      examEdge: 'Define the characteristics, then explain how each one feeds into the firm’s diagram in subsequent cards.'
    },

    /* ====================================================================
       CARD 2 – What makes this market different?
       Pattern: Hub-and-spoke (5 characteristics)
       ==================================================================== */
    {
      id: 'mc-characteristics',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'What makes this market different?',
      lede: 'Monopolistic competition mixes competitive rivalry with product differentiation and non-price competition.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F3F7}\u{FE0F}', tone: 'green', text: 'Many small differences create <strong>some market power</strong> for every firm — but never as much as a monopoly.' },

      visualKey: 'mcCharacteristicsHub',
      visualLabel: 'THE CHARACTERISTICS',
      visualEmoji: '\u{1F50D}',

      flowTitle: 'NON-PRICE COMPETITION',
      flowEmoji: '\u{1F4E2}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'blue',   icon: '\u{1F4E3}', title: 'Advertising', sub: 'Promotes the brand and lifts demand.' },
        { tone: 'purple', icon: '\u{1F451}', title: 'Branding',    sub: 'Build a strong identity in consumers’ minds.' },
        { tone: 'amber',  icon: '\u{1F4E6}', title: 'Packaging',   sub: 'Design and look attract attention on the shelf.' },
        { tone: 'green',  icon: '\u{1F3EA}', title: 'Service',     sub: 'Friendly staff or fast delivery raises loyalty.' }
      ],

      causesLabel: 'WHY DEMAND SLOPES DOWN',
      causesEmoji: '\u{1F4C9}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '\u{1F3AF}', head: 'Product preferences',  body: 'Each firm’s product is slightly different — consumers prefer certain brands or styles.' },
        { tone: 'amber', icon: '\u{1F465}', head: 'Customer loyalty',     body: 'Customers won’t switch instantly when prices change, so the firm has some pricing room.' },
        { tone: 'blue',  icon: '\u{1F4C9}', head: 'Differentiation creates a niche', body: 'To sell more, firms must lower the price; raise it, and some customers leave.' }
      ],

      causes2Label: 'REAL-WORLD EXAMPLES',
      causes2Emoji: '\u{1F30D}',
      causes2Style: 'icon-top',
      causes2Cols: 5,
      causes2: [
        { tone: 'amber',  icon: '\u{2615}', head: 'Cafés',             body: '' },
        { tone: 'blue',   icon: '\u{1F4AA}', head: 'Gyms',              body: '' },
        { tone: 'green',  icon: '\u{1F35D}', head: 'Local restaurants', body: '' },
        { tone: 'purple', icon: '\u{1F487}', head: 'Hair salons',       body: '' },
        { tone: 'rose',   icon: '\u{1F457}', head: 'Clothes shops',     body: '' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Firms are <strong>numerous, but products are not identical</strong>, so each seller faces its own demand analysis.' },

      conclusion: { title: 'Big idea', text: 'In other words, the characteristics produce a downward-sloping demand curve for each firm.' },
      examEdge: 'Use real examples in answers to bring monopolistic competition to life.'
    },

    /* ====================================================================
       CARD 3 – Short-run profit maximisation
       Pattern: Decompose a diagram (interactive 3-view build of firm diagram)
       ==================================================================== */
    {
      id: 'mc-short-run',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'Short-run profit maximisation',
      lede: 'In the short run, a firm in monopolistic competition can make abnormal profit or loss depending on demand and costs.',
      ledeStyle: 'plain',

      tip: { icon: '\u{2705}', tone: 'green', text: 'Use the same rule as elsewhere — <strong>produce where MC = MR</strong>, then read P from AR.' },

      interactiveDiagram: {
        svgKey: 'mcShortRunDiagram',
        label: 'THE FIRM DIAGRAM — step through the build',
        emoji: '\u{1F4CA}',
        layers: ['mcsr-1', 'mcsr-2', 'mcsr-3'],
        views: [
          {
            label: 'Step 1: find Q*',
            tone: 'blue',
            head: 'Step 1 — produce where MC = MR',
            body: 'Find the output where marginal cost equals marginal revenue. The black dot marks the intersection; drop straight down to the x-axis to read <strong>Q*</strong>.',
            show: ['mcsr-1']
          },
          {
            label: 'Step 2: read P from AR',
            tone: 'green',
            head: 'Step 2 — drop up to the demand curve',
            body: 'From Q*, go vertically UP to the AR curve to find the price the firm can charge. <strong>That is P*</strong>. AR > MR because demand slopes down — so price sits above MR.',
            show: ['mcsr-1', 'mcsr-2']
          },
          {
            label: 'Step 3: compare with AC',
            tone: 'rose',
            head: 'Step 3 — read AC at Q* and shade the profit rectangle',
            body: 'Read AC at Q* on the AC curve. If <strong>P > AC</strong>, the green rectangle shows abnormal profit. If P < AC, the rectangle would be a loss instead.',
            analysis: 'The procedure is the same as monopoly: <strong>MC = MR</strong> finds Q, <strong>AR</strong> gives P, <strong>AC</strong> determines profit per unit. What makes MC different is that the demand curve will SHIFT in the long run as new firms enter.',
            show: ['mcsr-1', 'mcsr-2', 'mcsr-3']
          }
        ]
      },

      causesLabel: 'THREE OUTCOMES',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '\u{1F4B0}', head: 'Abnormal profit', body: 'P > AC at Q*. The firm earns more than the minimum needed to stay open.' },
        { tone: 'blue',  icon: '\u{2696}\u{FE0F}', head: 'Normal profit',  body: 'P = AC at Q*. The firm covers all costs — including the opportunity cost of capital.' },
        { tone: 'rose',  icon: '\u{1F4C9}', head: 'Loss',            body: 'P < AC at Q*. The firm makes a loss in the short run but may still produce.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Product differentiation lets the same MC = MR rule produce <strong>different prices</strong> across firms — each draws AR from its own niche.' },

      conclusion: { title: 'Big idea', text: 'In the short run, output comes from MC = MR; price comes from AR. The gap between P and AC sets profit or loss.' },
      examEdge: 'Always lay out the diagram: MC, MR, AR (downward-sloping), AC. Show the steps clearly.'
    },

    /* ====================================================================
       CARD 4 – Long-run equilibrium
       Pattern: Decompose a diagram (interactive 3-view SR → entry → LR)
       ==================================================================== */
    {
      id: 'mc-long-run',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'Long-run equilibrium',
      lede: 'Low barriers to entry mean abnormal profit attracts new firms, which reduces each existing firm’s demand until only normal profit remains.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F501}', tone: 'green', text: 'Entry shifts each firm’s demand curve <strong>left</strong> until it is tangent to AC — normal profit only.' },

      flowTitle: 'THE STORY OF ENTRY',
      flowEmoji: '\u{1F4E5}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'amber',  icon: '\u{1F4B0}', title: 'Abnormal profit',           sub: 'Firms earn more than normal in SR.' },
        { tone: 'green',  icon: '\u{2795}',  title: 'New firms enter',            sub: 'Attracted by the profit signal.' },
        { tone: 'blue',   icon: '\u{1F465}', title: 'Each firm loses some customers', sub: 'Demand per firm falls.' },
        { tone: 'purple', icon: '\u{2B05}\u{FE0F}', title: 'Demand shifts left',       sub: 'AR moves inward until tangent to AC.' },
        { tone: 'slate',  icon: '\u{2696}\u{FE0F}', title: 'Normal profit remains',     sub: 'Long-run equilibrium reached — entry stops.' }
      ],

      interactiveDiagram: {
        svgKey: 'mcLongRunDiagram',
        label: 'THE LONG-RUN DIAGRAM — watch demand shift left',
        emoji: '\u{1F4C9}',
        layers: ['lr-1', 'lr-2', 'lr-3'],
        views: [
          {
            label: 'SR: abnormal profit',
            tone: 'amber',
            head: 'Short run — abnormal profit',
            body: 'In SR, the firm produces at Q*_SR where MC = MR_SR and reads price from the SR demand curve. <strong>P > AC</strong> means abnormal profit (green rectangle).',
            show: ['lr-1']
          },
          {
            label: 'Entry: demand shifts',
            tone: 'blue',
            head: 'Entry — new firms eat into demand',
            body: 'The profit signal attracts new firms. As they enter, each existing firm loses some customers, so <strong>its own AR curve shifts left</strong>. The dashed line shows where SR demand sat; the solid line is the new AR.',
            analysis: 'Notice the slope of AR can also flatten a little as substitutes become closer — but the dominant effect is the leftward shift.',
            show: ['lr-2']
          },
          {
            label: 'LR: tangent equilibrium',
            tone: 'green',
            head: 'Long run — tangent to AC',
            body: 'Entry stops when AR is just tangent to AC — at exactly <strong>P = AC</strong> at the firm’s output Q*_LR. The firm now earns only normal profit. MC still equals MR at the new Q*_LR.',
            analysis: 'The LR result is: <strong>MR = MC, P = AC, but P > MC</strong> (because AR slopes down). That last gap is why MC is not allocatively efficient — explored in the next card.',
            show: ['lr-3']
          }
        ]
      },

      causesLabel: 'WHAT ENTRY DOES',
      causesEmoji: '\u{1F4DD}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '\u{1F4C9}', head: 'Profits shift',            body: 'New firms compete away abnormal profit until only normal profit remains.' },
        { tone: 'blue',  icon: '\u{1F465}', head: 'Consumer choice rises',     body: 'More firms mean more variety, more differentiation, more options.' },
        { tone: 'purple', icon: '\u{1F4AA}', head: 'Stays competitive',         body: 'Free entry keeps pressure on prices and quality.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'At long-run equilibrium, total revenue covers all explicit and implicit costs — the entrepreneur earns the minimum needed to stay in the market.' },

      conclusion: { title: 'Big idea', text: 'Free entry pushes firms from abnormal profit toward normal profit — but the firm keeps some pricing power because its product is still differentiated.' },
      examEdge: 'The key LR result: P = AC and MR = MC, but P ≠ MC.'
    },

    /* ====================================================================
       CARD 5 – Efficiency and excess capacity
       Pattern: Decompose a diagram (interactive 2-view: tangent → excess capacity)
       ==================================================================== */
    {
      id: 'mc-efficiency',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'Efficiency and excess capacity',
      lede: 'Monopolistic competition offers variety and rivalry — but in the long run the typical firm is usually not fully allocatively or productively efficient.',
      ledeStyle: 'plain',

      tip: { icon: '\u{2696}\u{FE0F}', tone: 'green', text: 'Firms gain variety and choice — <strong>but not perfect efficiency</strong>. There’s a trade-off.' },

      interactiveDiagram: {
        svgKey: 'mcEfficiencyDiagram',
        label: 'THE LONG-RUN EFFICIENCY DIAGRAM',
        emoji: '\u{1F4CA}',
        layers: ['mce-1', 'mce-2'],
        views: [
          {
            label: 'LR tangency',
            tone: 'green',
            head: 'View 1 — tangent at Q*_LR',
            body: 'In LR equilibrium, AR is tangent to AC at the firm’s output Q*_LR. Price equals AC, but the tangent point sits to the LEFT of where AC is at its minimum.',
            show: ['mce-1']
          },
          {
            label: 'Excess capacity',
            tone: 'rose',
            head: 'View 2 — excess capacity below the AC minimum',
            body: 'Mark the AC minimum (Q_min). The horizontal gap <strong>Q*_LR &lt; Q_min</strong> is "excess capacity" — the firm could lower AC by producing more, but demand falls off too quickly. The y-axis AC gap shows it sits above the lowest sustainable cost.',
            analysis: 'This is what distinguishes MC from PC. In PC, firms produce at the AC minimum (productively efficient). In MC, the firm operates above min AC at all times — the cost of variety. Whether that variety is worth the inefficiency is the central evaluation question.',
            show: ['mce-1', 'mce-2']
          }
        ]
      },

      causesLabel: 'THREE JUDGEMENTS',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'rose',  icon: '\u{1F4C9}', head: 'Productive inefficiency', body: 'Not achieved — AC sits above the minimum at the firm’s output. <strong>Q*_LR &lt; Q_min</strong>.' },
        { tone: 'amber', icon: '\u{1F3AF}', head: 'Allocative inefficiency', body: 'Not achieved — at MC firm output, P > MC. Consumers value the next unit more than it costs to make.' },
        { tone: 'blue',  icon: '\u{1F4A1}', head: 'Dynamic efficiency',       body: 'Sometimes positive. Firms have some profit cushion and an incentive to innovate to defend their niche.' }
      ],

      causes2Label: 'WHY OTHERS CRITICISE IT',
      causes2Emoji: '\u{26A0}\u{FE0F}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Resources wasted',  body: 'Each firm runs below the most efficient scale — the kitchen / studio is too small.' },
        { tone: 'amber', icon: '\u{1F4C8}', head: 'Excess capacity',   body: 'Producing more would lower AC, but customers would not buy enough.' },
        { tone: 'blue',  icon: '\u{1F4E3}', head: 'Persuasion costs',  body: 'Lots of resources go into advertising, branding and packaging that could go into the product itself.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'The trade-off is real: more variety vs more efficiency.' },

      conclusion: { title: 'Big idea', text: 'In evaluation, mention both inefficiency and the benefits of consumer variety.' },
      examEdge: 'Always quote the excess-capacity result on the diagram: <em>Q*_LR &lt; Q_min</em>. That is the textbook signature of monopolistic competition.'
    },

    /* ====================================================================
       CARD 6 – The whole story
       Pattern: Sequential flow chain + STRENGTHS/WEAKNESSES pair + 3-col compare
       Uses existing engine blocks – no new visual.
       ==================================================================== */
    {
      id: 'mc-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole story',
      lede: 'Monopolistic competition sits between perfect competition and monopoly — strong rivalry, product differentiation, easy entry, with some short-run profit, long-run normal profit, and mixed efficiency.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F511}', tone: 'green', text: 'The best answers link characteristics, diagrams and evaluation into one story.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green',  icon: '\u{1F465}', title: 'Many firms in the market', sub: 'Lots of small sellers.' },
        { tone: 'amber',  icon: '\u{1F3A8}', title: 'Differentiated products',  sub: 'Branding, style, design.' },
        { tone: 'purple', icon: '\u{1F451}', title: 'Some market power',        sub: 'Downward-sloping demand.' },
        { tone: 'blue',   icon: '\u{1F4B0}', title: 'Short-run profit possible', sub: 'P > AC at Q*_SR.' },
        { tone: 'rose',   icon: '\u{1F4E5}', title: 'Entry erodes profit',       sub: 'Demand shifts left until tangent.' },
        { tone: 'slate',  icon: '\u{2696}\u{FE0F}', title: 'Long-run normal profit, with excess capacity', sub: 'P = AC, but Q < Q_min.' }
      ],

      pairLabel: 'STRENGTHS vs WEAKNESSES',
      pairEmoji: '\u{2696}\u{FE0F}',
      left: {
        tone: 'green',
        icon: '\u{2705}',
        iconStyle: 'circle',
        label: 'STRENGTHS',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Choice and variety for consumers.</li><li>Low barriers to entry.</li><li>Scope for innovation and product improvement.</li><li>Local convenience and brand identity.</li></ul>'
      },
      right: {
        tone: 'rose',
        icon: '\u{26A0}\u{FE0F}',
        iconStyle: 'circle',
        label: 'WEAKNESSES',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Not productively efficient.</li><li>Not allocatively efficient.</li><li>Duplicated costs across firms (e.g. advertising).</li><li>Persuasive advertising and branding can mislead.</li><li>Excess capacity in the long run.</li></ul>'
      },

      causesLabel: 'WHERE IT FITS',
      causesEmoji: '\u{1F4CB}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '\u{1F3EA}', head: 'Perfect competition',    body: 'Many identical products; P = MC; no price power.' },
        { tone: 'purple', icon: '\u{1F3EA}', head: 'Monopolistic competition', body: 'Many differentiated products; P &gt; MC; small price power.' },
        { tone: 'rose',   icon: '\u{1F3DB}\u{FE0F}', head: 'Monopoly',            body: 'One unique product; high price power; large allocative inefficiency.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'This market structure is not the efficiency champion, but it is realistic. Differentiation and variety help — and so it exists.' },

      conclusion: { title: 'Big idea', text: 'A strong essay defines the market, applies short-run and long-run diagrams, then explains the business implication.' },
      examEdge: 'In evaluation, mention <strong>both inefficiency and the benefits of consumer variety</strong>. Both are correct, and examiners reward students who weigh both sides.'
    }
  ]
};
