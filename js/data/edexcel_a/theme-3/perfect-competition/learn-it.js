/* ============================================================
   ECONOS – Perfect Competition (Edexcel A 3.4.2)
   6 cards · interactive-first build
   Maps the spec sub-points: PC assumptions, the perfectly elastic
   demand curve facing each firm, short-run profit maximisation,
   losses and shutdown, long-run equilibrium and efficiency.

   Card patterns:
     1 Hub-and-spoke (5 PC assumptions around The market)
     2 Decompose (twin chart: industry market + individual firm)
     3 Decompose (SR profit diagram with shaded abnormal profit)
     4 Decompose (loss diagram with AVC + shaded loss region)
     5 Sequential flow (entry/exit) + LR equilibrium diagram
     6 Decompose (efficiency diagram with both efficiencies labelled)

   New visuals:
     - pcMarketHub                 (Card 1 hero)
     - pcPerfectlyElasticDemand    (Card 2 hero)
     - pcShortRunProfit            (Card 3 hero)
     - pcLossDiagram               (Card 4 hero)
     - pcLongRunDiagram            (Card 5 hero)
     - pcEfficiencyDiagram         (Card 6 hero)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'perfect-competition',
  topicNum: '3.4.2',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Perfect Competition',
  estTime: '16 min',
  goal: 'Apply the perfect-competition model: identify the assumptions, derive the firm’s perfectly elastic demand curve, find SR profit / loss / shutdown decisions, and judge LR equilibrium for efficiency',

  intro: {
    heroKey: 'heroFirm',
    summary: 'Perfect competition is the textbook benchmark for market efficiency. Five assumptions (many buyers and sellers, identical product, perfect information, free entry and exit, price-takers) deliver a powerful prediction: the firm faces a perfectly elastic demand curve at the market price. In the short run, firms can make abnormal profits or losses; in the long run, free entry and exit drives the market back to normal profit only — and at that point the firm is both productively and allocatively efficient. Real markets rarely meet all the assumptions, but the model gives us the yardstick to judge them against.',
    doInThis: 'State the five PC assumptions and show why the firm is a price taker. Distinguish the industry demand-supply diagram from the firm’s horizontal demand. Find profit-maximising output using MC = MR, identify abnormal profit / loss / shutdown regions, and trace the long-run adjustment back to normal profit. Explain why PC delivers both static efficiencies — and judge the limits of using it as a benchmark.',
    outcomes: [
      'List the five assumptions of perfect competition',
      'Show why each firm faces a perfectly elastic (horizontal) demand curve',
      'Identify SR abnormal profit, loss and shutdown using the MC = MR rule',
      'Trace the entry and exit process to long-run equilibrium',
      'Show why PC delivers productive and allocative efficiency'
    ],
    tip: 'Always draw two diagrams — the industry (D and S) and the firm (horizontal AR = MR). The industry sets P; the firm chooses Q.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 16 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – The big picture
       ==================================================================== */
    {
      id: 'pc-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Perfect competition — the big picture',
      lede: 'Perfect competition is a market structure with many small firms, identical products, free entry and exit, and firms that must accept the market price.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F3F7}\u{FE0F}', tone: 'green', text: 'In perfect competition, the <strong>market</strong> sets the price and each individual firm is a <strong>price taker</strong>.' },

      visualKey: 'pcMarketHub',
      visualLabel: 'WHAT IT LOOKS LIKE',
      visualEmoji: '\u{1F3EA}',

      flowTitle: 'WHY FIRMS ARE PRICE TAKERS',
      flowEmoji: '\u{1F50D}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green', icon: '\u{1F411}', title: 'One firm is tiny',  sub: 'Each firm is very small compared with the whole market.' },
        { tone: 'amber', icon: '\u{1F4C9}', title: 'No big share',       sub: 'Its output is a tiny share of total industry supply.' },
        { tone: 'blue',  icon: '\u{1F501}', title: 'Cannot move price',  sub: 'Changing its own output does not shift the market price.' },
        { tone: 'rose',  icon: '\u{2705}',  title: 'So it accepts it',   sub: 'The firm takes the market price as given.' }
      ],

      causesLabel: 'THE CORE IDEA',
      causesEmoji: '\u{1F4DD}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',  icon: '\u{1F3F7}\u{FE0F}', head: 'Price',   body: 'The market determines the price.' },
        { tone: 'amber', icon: '\u{1F4E6}', head: 'Quantity', body: 'The firm chooses output where it makes the highest profit.' },
        { tone: 'green', icon: '\u{1F4B0}', head: 'Profit',   body: 'Profits attract entry and losses force exit — driving long-run normal profit.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Perfect competition is the <strong>benchmark</strong> model of a highly competitive market — used to judge how close real markets get.' },

      conclusion: { title: 'Big idea', text: 'Perfect competition describes the discipline a fully competitive market puts on each firm — accept the price, or lose your customers.' },
      examEdge: 'Define the assumptions clearly. Then explain why each one feeds into the firm being a price taker — that single sentence sets up the rest of the topic.'
    },

    /* ====================================================================
       CARD 2 – The perfectly elastic demand curve
       ==================================================================== */
    {
      id: 'pc-elastic-demand',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'The perfectly elastic demand curve',
      lede: 'The market sets one price. An individual firm in perfect competition can sell as much as it wants at that price, but nothing above it.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4C8}', tone: 'green', text: 'For a price-taking firm, <strong>average revenue, marginal revenue and demand are the same horizontal line</strong> at the market price.' },

      visualKey: 'pcPerfectlyElasticDemand',
      visualLabel: 'THE TWO VIEWS — industry vs firm',
      visualEmoji: '\u{1F4CA}',

      causesLabel: 'WHAT IT MEANS',
      causesEmoji: '\u{1F4DD}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',  icon: '\u{1F3F7}\u{FE0F}', head: '1. Price taker',  body: 'Market demand and supply determine the price the firm faces.' },
        { tone: 'green', icon: '\u{1F4E6}', head: '2. Output chooser', body: 'Choose Q where MC = MR to maximise profit.' },
        { tone: 'amber', icon: '\u{1F4C8}', head: '3. Revenue line',   body: 'Because each extra unit sells at the same price, AR = MR = P.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'The firm’s demand is perfectly elastic because raising price above P* means losing <strong>all</strong> customers to identical rivals.' },

      conclusion: { title: 'Big idea', text: 'In perfect competition the firm’s demand curve is perfectly elastic — a tiny firm cannot influence the price.' },
      examEdge: 'In diagrams, always show two charts — industry sets P, firm chooses Q.'
    },

    /* ====================================================================
       CARD 3 – Profit maximisation in the short run
       ==================================================================== */
    {
      id: 'pc-sr-profit',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'Profit maximisation in the short run',
      lede: 'A price-taking firm produces where marginal cost equals marginal revenue. Profit depends on whether price sits above or below average cost.',
      ledeStyle: 'plain',

      tip: { icon: '\u{2705}', tone: 'green', text: 'The output rule is always <strong>MC = MR</strong>. Profit or loss is read at that output.' },

      visualKey: 'pcShortRunProfit',
      visualLabel: 'THE PROFIT DIAGRAM',
      visualEmoji: '\u{1F4C9}',

      flowTitle: 'THREE STEPS',
      flowEmoji: '\u{1F3AF}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green', icon: '\u{1F50D}', title: 'Step 1 — find Q*', sub: 'Produce where MC = MR.' },
        { tone: 'blue',  icon: '\u{1F441}\u{FE0F}', title: 'Step 2 — read P and AC at Q*', sub: 'Read price from AR line; cost from AC curve.' },
        { tone: 'amber', icon: '\u{1F4B0}', title: 'Step 3 — calculate profit', sub: 'Profit/unit = (P − AC). Multiply by Q* for total.' }
      ],

      causesLabel: 'WHAT THE DIAGRAM SAYS',
      causesEmoji: '\u{1F4D6}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green', icon: '\u{1F4C8}', head: 'Price is a horizontal line', body: 'AR = MR = P, and the firm sells as much as it wants at that price.' },
        { tone: 'blue',  icon: '\u{1F4CA}', head: 'Firm adjusts output',        body: 'Produce where MC = MR to maximise profit.' },
        { tone: 'amber', icon: '\u{1F4B0}', head: 'If P > AC: abnormal profit', body: 'Profit rectangle appears between AR and AC.' },
        { tone: 'rose',  icon: '\u{1F4C9}', head: 'If P < AC: a loss',          body: 'AC sits above AR — short-run loss.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Short-run profit lives between AR and AC at output Q*. Multiply by Q* to get the rectangle.' },

      conclusion: { title: 'Big idea', text: 'In the short run, a perfectly competitive firm makes <strong>abnormal profit or loss</strong> depending on where price sits relative to AC.' },
      examEdge: 'On the chart, draw the profit rectangle clearly between AC and AR over Q*.'
    },

    /* ====================================================================
       CARD 4 – Losses, shutdown and survival
       ==================================================================== */
    {
      id: 'pc-losses-shutdown',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'Losses, shutdown and survival',
      lede: 'A perfectly competitive firm may keep producing in the short run even if it makes a loss — as long as price still covers average variable cost.',
      ledeStyle: 'plain',

      tip: { icon: '\u{26A0}\u{FE0F}', tone: 'green', text: 'Produce in the short run if <strong>P ≥ AVC</strong>. Shut down if <strong>P &lt; AVC</strong>.' },

      visualKey: 'pcLossDiagram',
      visualLabel: 'THE LOSS DIAGRAM',
      visualEmoji: '\u{1F4C9}',

      pairLabel: 'THE SHUTDOWN RULE',
      pairEmoji: '\u{1F6E1}\u{FE0F}',
      left: {
        tone: 'green',
        icon: '\u{2705}',
        iconStyle: 'circle',
        label: 'Keep producing — P ≥ AVC',
        text: 'Price covers variable cost and contributes toward fixed cost. <em>Better to lose less than to shut down entirely.</em>'
      },
      right: {
        tone: 'rose',
        icon: '\u{26D4}',
        iconStyle: 'circle',
        label: 'Shut down — P < AVC',
        text: 'Price cannot even cover variable cost. <em>Stop producing in the short run to limit losses to fixed cost only.</em>'
      },

      flowTitle: 'HOW TO DECIDE',
      flowEmoji: '\u{1F4DD}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'blue',  icon: '\u{1F4CA}', title: '1. Compare P with AVC', sub: 'Read AVC at the firm’s output level.' },
        { tone: 'amber', icon: '\u{1F914}', title: '2. Decide',             sub: 'If P ≥ AVC, produce. If P < AVC, shut down.' },
        { tone: 'green', icon: '\u{1F501}', title: '3. Keep monitoring',    sub: 'As market conditions change, the decision may flip.' },
        { tone: 'rose',  icon: '\u{1F6AA}', title: '4. Exit in the long run', sub: 'If losses persist, the firm leaves the industry.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Fixed costs are sunk in the short run — that is why a loss-making firm may still keep going if P ≥ AVC.' },

      conclusion: { title: 'Big idea', text: 'A loss does not mean shutdown — the firm closes only when revenue cannot cover variable cost.' },
      examEdge: 'On the diagram, locate the shutdown condition clearly: P versus AVC at the firm’s output Q*.'
    },

    /* ====================================================================
       CARD 5 – Long-run equilibrium
       ==================================================================== */
    {
      id: 'pc-long-run',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'Long-run equilibrium',
      lede: 'In the long run, entry removes abnormal profit and exit removes losses, leaving firms with only normal profit.',
      ledeStyle: 'plain',

      tip: { icon: '\u{2696}\u{FE0F}', tone: 'green', text: '<strong>LR equilibrium: MC = MR = AR = AC at minimum AC.</strong> Firms earn normal profit only.' },

      flowTitle: 'ENTRY AND EXIT',
      flowEmoji: '\u{1F501}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green',  icon: '\u{1F4B0}', title: 'Abnormal profit',         sub: 'P > AC for existing firms.' },
        { tone: 'blue',   icon: '\u{2795}',  title: 'New firms enter',         sub: 'Attracted by the abnormal profit.' },
        { tone: 'amber',  icon: '\u{1F4C8}', title: 'Industry supply rises',   sub: 'Supply shifts right.' },
        { tone: 'rose',   icon: '\u{1F4C9}', title: 'Market price falls',      sub: 'Until abnormal profit is competed away.' },
        { tone: 'purple', icon: '\u{2796}',  title: 'Firms exit (if loss)',    sub: 'When P < AC; supply contracts; price recovers.' },
        { tone: 'slate',  icon: '\u{2696}\u{FE0F}', title: 'Normal profit only',     sub: 'P = AC at min AC. Free entry and exit has done its work.' }
      ],

      visualKey: 'pcLongRunDiagram',
      visualLabel: 'THE LONG-RUN FIRM',
      visualEmoji: '\u{1F4CA}',

      causesLabel: 'WHY IT IS IMPRESSIVE',
      causesEmoji: '\u{1F31F}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green', icon: '\u{1F50D}', head: 'No barriers to entry or exit', body: 'Firms can enter and exit until only normal profit remains.' },
        { tone: 'amber', icon: '\u{1F4B0}', head: 'Abnormal profit removed',      body: 'Profits in excess of normal are competed away.' },
        { tone: 'blue',  icon: '\u{1F4C9}', head: 'P = AC at min AC',             body: 'The lowest sustainable cost per unit.' },
        { tone: 'rose',  icon: '\u{1F3AF}', head: 'No abnormal profit remains',   body: 'Just enough profit to keep firms in the market.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: '<strong>Normal profit</strong> means the entrepreneur is earning the minimum needed to stay in the industry.' },

      conclusion: { title: 'Big idea', text: 'Free entry and exit drives the perfectly competitive long-run equilibrium to <strong>normal profit only</strong>.' },
      examEdge: 'Show both diagrams together — the entry/exit chain and the firm-level diagram — to explain why P = AC at the minimum of AC.'
    },

    /* ====================================================================
       CARD 6 – Efficiency and evaluation
       ==================================================================== */
    {
      id: 'pc-efficiency',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'Efficiency and evaluation',
      lede: 'Perfect competition is often used as the benchmark for efficiency — but its assumptions are demanding and real markets rarely match them exactly.',
      ledeStyle: 'plain',

      tip: { icon: '\u{2705}', tone: 'green', text: 'In long-run perfect competition, firms can be <strong>both</strong> productively and allocatively efficient.' },

      visualKey: 'pcEfficiencyDiagram',
      visualLabel: 'THE EFFICIENCY STORY',
      visualEmoji: '\u{1F3AF}',

      causesLabel: 'WHY IT IS IMPRESSIVE',
      causesEmoji: '\u{1F31F}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '\u{1F4B0}', head: 'Low costs',         body: 'Firms produce at minimum AC — resources are used efficiently.' },
        { tone: 'amber', icon: '\u{1F465}', head: 'Consumer welfare',  body: 'Prices reflect the marginal cost of providing the good — consumers get the right amount.' },
        { tone: 'blue',  icon: '\u{1F4C9}', head: 'No persistent abnormal profit', body: 'In the long run, no firm earns more than the minimum required to keep producing.' }
      ],

      causes2Label: 'BUT THERE ARE LIMITS',
      causes2Emoji: '\u{26A0}\u{FE0F}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose',  icon: '\u{1F4DA}', head: 'Perfect information rare',    body: 'Real markets rarely have full transparency — information gaps shift the result.' },
        { tone: 'amber', icon: '\u{1F3ED}', head: 'Little product differentiation', body: 'Many real markets thrive on quality, branding, design and uniqueness.' },
        { tone: 'blue',  icon: '\u{1F50D}', head: 'No room for dynamic efficiency', body: 'Firms have no spare profit to invest in innovation — long-run AC may not fall.' }
      ],

      pairLabel: 'WHY ASSUMPTIONS MATTER vs WHY EVALUATION MATTERS',
      pairEmoji: '\u{2696}\u{FE0F}',
      left: {
        tone: 'green',
        icon: '\u{1F4DA}',
        iconStyle: 'circle',
        label: 'Why assumptions matter',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Provides a clear benchmark for efficiency.</li><li>Sets up comparisons with other market structures.</li><li>Helps explain why real-world markets often deliver a different result.</li></ul>'
      },
      right: {
        tone: 'amber',
        icon: '\u{1F50D}',
        iconStyle: 'circle',
        label: 'Why evaluation matters',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Real markets rarely meet all five assumptions.</li><li>Compare PC predictions with real-world data.</li><li>Static efficiency may come at the cost of dynamic efficiency.</li></ul>'
      },

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'PC is a benchmark, not a target — it tells us what an idealised market looks like, not necessarily what real ones can deliver.' },

      conclusion: { title: 'Big idea', text: 'Perfect competition is the benchmark economists use to judge how competitive a market really is — not a snapshot of any real market.' },
      examEdge: 'For strong evaluation, show how PC efficiency depends on its strict assumptions — then explain what changes when those assumptions break.'
    }
  ]
};
