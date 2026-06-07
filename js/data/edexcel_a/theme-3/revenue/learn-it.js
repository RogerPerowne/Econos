/* ============================================================
   ECONOS – Revenue (Edexcel A 3.3.1)
   6 cards · interactive-first build
   Maps the spec sub-points: 3.3.1a (TR, AR, MR – definitions
   and calculation), 3.3.1b (the link between revenue and price
   elasticity of demand).

   Card patterns (no two consecutive repeats; bespoke visuals
   built fresh for cards 1-5 because the formula+chart hybrid
   doesn't fit the existing catalogue cleanly):
     1 Spectrum / regime grid (3 revenue metrics with formulas)
     2 Decompose a diagram (TR formula + worked examples + bars)
     3 Decompose a diagram (linear demand curve with A/B points)
     4 Decompose a diagram (AR vs MR curves + worked MR table)
     5 Spectrum / regime grid (3 PED cases with mini curves)
     6 Sequential flow chain (6-step revenue story) + tile grids

   New visuals (all pure SVG so spacing is locked):
     - revenueThreeMetrics      (Card 1 hero)
     - totalRevenueDiagram      (Card 2 hero) [TODO]
     - averageRevenueDiagram    (Card 3 hero) [TODO]
     - marginalRevenueDiagram   (Card 4 hero) [TODO]
     - revenueElasticityTriptych (Card 5 hero) [TODO]
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'revenue',
  topicNum: '3.3.1',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Revenue',
  estTime: '14 min',
  goal: 'Calculate and interpret total, average and marginal revenue, and link revenue to price elasticity of demand',

  intro: {
    heroKey: 'heroFirm',
    summary: 'Revenue is the money a firm receives from selling its output – different from profit because costs have not yet been taken off. The core story has three measures: total revenue (TR), average revenue (AR) and marginal revenue (MR). They sit together cleanly: TR is income from all sales, AR is income per unit, and MR is the income from the next unit sold. Price elasticity of demand decides whether a price change raises or lowers TR – the link the exam keeps testing.',
    doInThis: 'Define total, average and marginal revenue and calculate each from a small table. Show why AR equals price on a linear demand curve, and why MR falls twice as fast. Link revenue to PED so you can predict whether a price rise helps or hurts the firm.',
    outcomes: [
      'Calculate TR, AR and MR from a price-and-quantity table',
      'Show why average revenue equals price under a downward-sloping demand curve',
      'Explain why marginal revenue falls faster than average revenue',
      'Use PED to predict the revenue effect of a price change'
    ],
    tip: 'Always separate revenue from profit. Revenue is what comes in from sales; profit is what is left after costs.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 14 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Revenue: the big picture
       Pattern: Spectrum / regime grid (3 revenue metrics)
       Hero visual is a three-tile decompose of TR / AR / MR with each
       formula in a white inset panel; below it a 3-tile WHY FIRMS CARE.
       ==================================================================== */
    {
      id: 'revenue-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Revenue – the big picture',
      lede: 'Revenue is the money a firm receives from selling its output. The core story is total revenue, average revenue and marginal revenue.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4B0}', tone: 'green', text: '<strong>Revenue</strong> is sales income – <strong>not the same thing as profit</strong>. Profit only appears after costs are taken off.' },

      visualKey: 'revenueThreeMetrics',
      visualLabel: 'THE THREE REVENUE IDEAS',
      visualEmoji: '\u{1F4CA}',

      causesLabel: 'WHY FIRMS CARE',
      causesEmoji: '\u{1F50D}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F3F7}\u{FE0F}', head: 'Pricing',        body: 'Revenue helps judge whether a price change is worthwhile or self-defeating.' },
        { tone: 'amber',  icon: '\u{1F3AF}',         head: 'Sales strategy', body: 'Firms want to know whether selling one more unit adds enough revenue to be worth it.' },
        { tone: 'green',  icon: '\u{1F4C8}',         head: 'Performance',    body: 'Revenue shows the scale of sales before costs are deducted – the top of the income statement.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'TR tracks total sales income, AR tracks revenue <strong>per unit</strong>, and MR tracks the gain from one <strong>extra</strong> unit sold.' },

      conclusion: { title: 'Big idea', text: 'Revenue has three faces – <strong>total, average and marginal</strong> – and the exam reward comes from knowing which one each question is actually about.' },
      examEdge: 'Always separate revenue from cost and profit. <strong>Revenue is what comes in from sales</strong> – the rest of the story is in costs and profit.'
    }

    /* ====================================================================
       Cards 2-6 to follow in the next ship.
       - Card 2: Total revenue (TR formula + worked examples + bar chart)
       - Card 3: Average revenue (linear demand curve with A/B points)
       - Card 4: Marginal revenue (AR vs MR curves + worked table)
       - Card 5: Revenue and price elasticity (3 PED cases triptych)
       - Card 6: The whole revenue story (6-step chain + tile grids)
       ==================================================================== */
  ]
};
