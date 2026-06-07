/* ============================================================
   ECONOS – Costs (Edexcel A 3.3.2)
   7 cards · interactive-first build
   Maps the spec sub-points: fixed and variable costs, total
   cost, average cost (AFC / AVC / AC), marginal cost, and the
   relationships between them.

   Card patterns (no two consecutive repeats; bespoke visuals
   built fresh for cards 1-6 because the formula+chart+table
   composites don't fit existing components cleanly):
     1 Hub-and-spoke (TC centre + FC/VC/AC/MC spokes)
     2 Decompose (interactive TFC / TVC / TC lines)
     3 Decompose (interactive AFC / AVC / AC — Marco's pizzeria)
     4 Decompose (interactive MC table → MC curve)
     5 Decompose (full diagram + 3-step logic + 3 phases)
     6 Sequential flow (read-a-cost-table procedure + bakery)
     7 Sequential flow chain (synthesis – uses existing blocks)

   New visuals:
     - costsHub                 (Card 1 hero)
     - fixedVariableTotalChart  (Card 2 hero) [TODO]
     - averageCostFamilyChart   (Card 3 hero, Marco's pizzeria) [TODO]
     - marginalCostChart        (Card 4 hero) [TODO]
     - fullCostDiagram          (Card 5 hero) [TODO]
     - costDataFlow             (Card 6 hero — bakery case) [TODO]
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'costs',
  topicNum: '3.3.2',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Costs',
  estTime: '16 min',
  goal: 'Understand the cost types a firm faces, calculate average and marginal cost, and read what the shape of each cost curve means',

  intro: {
    heroKey: 'heroFirm',
    summary: 'A firm cannot judge profit without judging cost. The toolkit splits into five measures: fixed cost (does not change with output), variable cost (rises with output), total cost (the sum of both), average cost (cost per unit) and marginal cost (the extra cost of one more unit). Each one is calculated from a small table, plotted on a chart, and used to take a real business decision – set a price, accept an order, expand or scale back. The shapes of the curves matter: AC and AVC are U-shaped because early efficiency gives way to diminishing returns, and MC cuts both at their minimum points.',
    doInThis: 'Define each cost type and calculate it from a worked table. Plot the cost curves and read off the relationships between them. Use the cost data to take real-world decisions – price-setting, accepting an order, expanding production.',
    outcomes: [
      'Distinguish fixed, variable and total cost from a worked example',
      'Calculate average fixed, average variable, average and marginal cost',
      'Explain why AC and AVC are U-shaped and why MC cuts both at their minima',
      'Use cost data to take a real-world business decision'
    ],
    tip: 'Costs are the foundation. Almost every other Theme 3 idea – profit, pricing, scale – uses one of these five measures somewhere in the chain.',
    stages: [
      { num: 1, name: 'Learn',  sub: '7 cards \xb7 16 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Costs: the big picture
       Pattern: Hub-and-spoke (4 cost types around central Total cost)
       Hero hub mirrors firmFourLensesHub / dem-hub grammar so the
       lesson feels visually coherent with the rest of the site.
       ==================================================================== */
    {
      id: 'costs-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 7',
      title: 'Costs – the big picture',
      lede: 'Costs show what a firm spends as it produces output. Different cost measures help firms understand efficiency, set prices and make decisions.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4B7}', tone: 'green', text: '<strong>Total cost = fixed cost + variable cost.</strong> Everything else in this topic – average cost, marginal cost – is built from these three.' },

      visualKey: 'costsHub',
      visualLabel: 'THE COST MAP',
      visualEmoji: '\u{1F5FA}\u{FE0F}',

      flowTitle: 'WHY COSTS MATTER',
      flowEmoji: '\u{1F50D}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'blue',  icon: '\u{1F3F7}\u{FE0F}', title: 'Pricing',   sub: 'Firms compare cost per unit with the price customers will pay.' },
        { tone: 'green', icon: '\u{1F4B0}',         title: 'Profit',    sub: 'Profit depends on the gap between total revenue and total cost.' },
        { tone: 'amber', icon: '\u{1F3AF}',         title: 'Decisions', sub: 'Output choices depend on how cost per unit changes as the firm scales up or down.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'In the short run, at least one cost is fixed – so total cost has both a constant part and a part that grows with output.' },

      conclusion: { title: 'Big idea', text: 'Cost analysis turns production into a decision lens – from spending, to efficiency, to profit.' },
      examEdge: 'Always separate the <strong>type</strong> of cost (fixed or variable) from the <strong>measure</strong> (total, average or marginal). The exam keeps testing the distinction.'
    }

    /* ====================================================================
       Cards 2-7 to follow in the next ship.
       - Card 2: Fixed, variable and total cost (TFC/TVC/TC chart + reveal)
       - Card 3: The average cost family (AFC/AVC/AC + Marco's pizzeria)
       - Card 4: Marginal cost – the cost of one more
       - Card 5: How the cost curves fit together (full MC/AC/AVC/AFC diagram)
       - Card 6: Using cost data in decisions (read-a-table + bakery case)
       - Card 7: The whole cost story (synthesis flow + tile grids)
       ==================================================================== */
  ]
};
