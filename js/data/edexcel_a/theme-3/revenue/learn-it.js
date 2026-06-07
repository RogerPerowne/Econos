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
    },

    /* ====================================================================
       CARD 2 – Total revenue
       Pattern: Decompose a diagram (interactive 3-scenario reveal)
       Hero is an interactive diagram: same firm tries three (price,
       quantity) combinations along a downward-sloping demand schedule.
       Each click reveals (i) a new row in the worked-examples table
       and (ii) a new bar in the bar chart. The third reveal also
       drops in the trend line + the "TR rises even though price
       falls" annotation – the key counter-intuitive insight.
       ==================================================================== */
    {
      id: 'revenue-total-revenue',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'Total revenue',
      lede: 'Total revenue is the money earned from all sales – price multiplied by quantity sold.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4B8}', tone: 'green', text: '<strong>TR changes</strong> when price, quantity sold, or both change. The challenge is predicting which way it moves.' },

      interactiveDiagram: {
        svgKey: 'totalRevenueInteractive',
        label: 'Three scenarios — same firm, different (price, quantity) pairs',
        emoji: '\u{1F4CA}',
        wide: true,
        layers: ['tr-1', 'tr-2', 'tr-3'],
        views: [
          {
            label: 'Scenario A',
            tone: 'blue',
            head: 'Scenario A — the baseline',
            body: 'Sell 100 units at £10 each. <strong>TR = £10 × 100 = £1,000.</strong> Both the table row and the first bar light up — this is the starting point we will compare the next two scenarios to.',
            show: ['tr-1']
          },
          {
            label: 'Scenario B',
            tone: 'amber',
            head: 'Scenario B — drop price, sell more',
            body: 'Cut the price to £9 and quantity sold rises to 120 units. <strong>TR = £9 × 120 = £1,080.</strong> Total revenue went UP even though the price went DOWN.',
            analysis: 'This is only possible because the price cut attracted enough extra customers to <strong>more than offset</strong> the lower revenue per unit. The bar in the chart is now visibly taller than scenario A.',
            show: ['tr-1', 'tr-2']
          },
          {
            label: 'Scenario C',
            tone: 'green',
            head: 'Scenario C — push it further',
            body: 'Drop price again to £8 and quantity rises to 140. <strong>TR = £8 × 140 = £1,120.</strong> Three bars, three calculations, one clear upward trend.',
            analysis: 'Demand here is elastic enough that successive price cuts keep raising TR. The story flips when demand becomes <strong>inelastic</strong> — at that point a price cut shrinks TR rather than growing it. That link to PED is Card 5.',
            show: ['tr-1', 'tr-2', 'tr-3']
          }
        ]
      },

      flowTitle: 'WHAT MOVES TR',
      flowEmoji: '\u{2696}\u{FE0F}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'blue',   icon: '\u{1F3F7}\u{FE0F}', title: 'Price changes', sub: 'Lower price reduces revenue per unit — but pulls in more customers.' },
        { tone: 'purple', icon: '\u{1F4C9}',         title: 'PED decides the response', sub: 'Elastic demand → quantity jumps. Inelastic → quantity barely moves.' },
        { tone: 'green',  icon: '\u{1F4E6}',         title: 'Net effect on TR', sub: 'TR rises if quantity grows enough; TR falls if it does not.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'A lower price <strong>does not always</strong> mean lower total revenue – it depends on how much quantity responds.' },

      conclusion: { title: 'Big idea', text: 'Total revenue is about the <strong>combined effect of price and quantity</strong> – not just the price.' },
      examEdge: 'Always calculate TR <strong>step by step</strong> – do not guess from the price alone. Show the multiplication so the examiner sees you understand both inputs.'
    },

    /* ====================================================================
       CARD 3 – Average revenue
       Pattern: Decompose a diagram (interactive 2-point reveal on a
       linear demand curve). The teaching point: AR = price at every
       point on the demand curve, so the AR "curve" IS the demand curve.
       ==================================================================== */
    {
      id: 'revenue-average-revenue',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'Average revenue',
      lede: 'Average revenue (AR) is total revenue divided by quantity sold – which for a single price always works out to the price itself.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4B0}', tone: 'green', text: '<strong>AR changes</strong> when the firm moves to a different point on its demand curve – higher or lower price means higher or lower AR.' },

      interactiveDiagram: {
        svgKey: 'averageRevenueInteractive',
        label: 'AR and the demand curve',
        emoji: '\u{1F4C8}',
        wide: true,
        layers: ['ar-1', 'ar-2'],
        views: [
          {
            label: 'Point A',
            tone: 'blue',
            head: 'Point A — high price, low quantity',
            body: 'At <strong>price £12</strong> the firm sells <strong>50 units</strong>. TR = £12 × 50 = <strong>£600</strong>. AR = £600 ÷ 50 = <strong>£12</strong> – exactly the price.',
            analysis: 'The dashed guidelines drop from Point A to the axes so the price and quantity read straight off the chart. AR matches the price because every one of the 50 units sold at the same £12.',
            show: ['ar-1']
          },
          {
            label: 'Point B',
            tone: 'green',
            head: 'Point B — lower price, higher quantity',
            body: 'At <strong>price £10</strong> the firm sells <strong>70 units</strong>. TR = £10 × 70 = <strong>£700</strong>. AR = £700 ÷ 70 = <strong>£10</strong> – exactly the price again.',
            analysis: 'Pick any point on the demand curve and the same identity holds: <strong>AR = P</strong>. That is why an economist will say the demand curve and the AR curve are the same line.',
            show: ['ar-1', 'ar-2']
          }
        ]
      },

      flowTitle: 'WHY IT MATTERS',
      flowEmoji: '\u{1F50D}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'blue',   icon: '\u{1F3F7}\u{FE0F}', title: 'Price = AR', sub: 'Average revenue is just the price the firm sells each unit for.' },
        { tone: 'amber',  icon: '\u{1F4C9}',         title: 'Demand curve = AR curve', sub: 'The downward slope shows how AR falls as the firm pushes more units into the market.' },
        { tone: 'green',  icon: '\u{1F4C8}',         title: 'AR + Q gives TR', sub: 'Multiply AR by Q and you have total revenue at that point.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'The label <strong>AR curve</strong> and the label <strong>demand curve</strong> describe the same line. Examiners use both.' },

      conclusion: { title: 'Big idea', text: 'Average revenue tells you the <strong>price per unit</strong> the firm receives – it slides up and down the demand curve as price changes.' },
      examEdge: 'Calculate AR at named points (A, B, …) on a demand curve and check it matches the price. Easy marks for the connection.'
    },

    /* ====================================================================
       CARD 4 – Marginal revenue
       Pattern: Decompose a diagram (interactive worked-table + AR/MR
       chart). Two views: (1) reveal the table and the AR curve so the
       MR column visibly drops 8→6→4→2 as output rises; (2) overlay the
       MR curve and the "MR sits below AR" caption.
       ==================================================================== */
    {
      id: 'revenue-marginal-revenue',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'Marginal revenue',
      lede: 'Marginal revenue is the extra revenue a firm gains from selling one more unit.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4C8}', tone: 'green', text: '<strong>MR is the change in TR</strong> caused by one extra unit sold. It usually falls as output rises.' },

      interactiveDiagram: {
        svgKey: 'marginalRevenueInteractive',
        label: 'From a worked table to an AR/MR diagram',
        emoji: '\u{1F4CA}',
        wide: true,
        layers: ['mr-1', 'mr-2'],
        views: [
          {
            label: 'Read the table',
            tone: 'amber',
            head: 'Step 1 — see MR fall as output rises',
            body: 'The firm must drop price to sell more (£10 → £6 across five units). Total revenue rises (£10 → £30) but by <strong>smaller amounts each time</strong>: MR drops £8 → £6 → £4 → £2. The AR curve below is just the price–quantity pairs plotted out.',
            show: ['mr-1']
          },
          {
            label: 'Plot the MR curve',
            tone: 'rose',
            head: 'Step 2 — MR sits below AR',
            body: 'Now drop the MR points (£8 at Q≈1.5, £6 at Q≈2.5, £4 at Q≈3.5, £2 at Q≈4.5) onto the chart and join them. The red MR line falls <strong>twice as steeply</strong> as the blue AR line and crosses the x-axis at Q ≈ 5.5.',
            analysis: 'Because the firm has to cut price for <strong>all</strong> units (not just the new one) to sell that extra unit, MR is always below AR on a downward-sloping demand curve. When MR = 0 the firm has reached the output where TR is maximised – any further unit would actually shrink TR.',
            show: ['mr-1', 'mr-2']
          }
        ]
      },

      flowTitle: 'WHY FIRMS USE MR',
      flowEmoji: '\u{1F3AF}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'blue',   icon: '\u{1F4E6}',          title: 'Output decisions', sub: 'Compare MR with the extra cost of the next unit – produce if MR ≥ MC.' },
        { tone: 'amber',  icon: '\u{1F4B0}',          title: 'Extra-sales thinking', sub: 'MR focuses on the gain from the next sale, not the average across all sales.' },
        { tone: 'green',  icon: '\u{1F4C8}',          title: 'Link to profit',   sub: 'MR vs MC is the rule that finds profit-maximising output later in the course.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: '<strong>TR is at its highest when MR = 0.</strong> After that point MR is negative and TR is falling – a useful shortcut for revenue-max questions.' },

      conclusion: { title: 'Big idea', text: 'MR is the <strong>gain from the next unit</strong> – not the average from all units. It sits below AR and drops twice as fast on a linear demand curve.' },
      examEdge: 'In many questions, explain that <strong>MR is below AR because the price cut applies to every unit</strong>, not just the new one. That single sentence anchors the whole answer.'
    },

    /* ====================================================================
       CARD 5 – Revenue and price elasticity
       Pattern: Spectrum / regime grid (3 PED cases shown side-by-side)
       Static triptych (no reveal) — the comparison IS the lesson.
       Each panel: mini D-curve + PED rule + % rule + TR rule.
       ==================================================================== */
    {
      id: 'revenue-elasticity',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'Revenue and price elasticity',
      lede: 'PED helps predict whether a price change will raise or lower total revenue – the link that examiners test again and again.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4C9}', tone: 'green', text: '<strong>Elastic and inelastic demand create opposite revenue effects.</strong> The shape of the demand curve decides which way TR moves when price changes.' },

      visualKey: 'revenueElasticityTriptych',
      visualLabel: 'THE THREE CASES',
      visualEmoji: '\u{2696}\u{FE0F}',

      causesLabel: 'PRICING DECISIONS IN PRACTICE',
      causesEmoji: '\u{1F4B5}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',  icon: '\u{1F686}', head: 'Train tickets',   body: 'Likely <strong>elastic</strong> at most price points – many travellers can drive, cycle or skip the trip if prices rise. Operators use off-peak discounts to fill seats and lift TR.' },
        { tone: 'amber', icon: '\u{1F457}', head: 'Luxury clothing', body: 'Often closer to <strong>unit elastic</strong> – price rises shrink demand by roughly the same percentage, so TR moves only modestly.' },
        { tone: 'green', icon: '\u{1F4A7}', head: 'Bottled water',   body: 'Likely <strong>inelastic</strong> in a hot stadium or on a long-haul flight – there is no close substitute, so price rises raise TR while volumes barely fall.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Price and total revenue move in <strong>opposite</strong> directions when demand is elastic – and in the <strong>same</strong> direction when demand is inelastic.' },

      conclusion: { title: 'Big idea', text: 'Before changing price, ask how strongly <strong>quantity demanded</strong> is likely to respond. PED is the bridge from price decisions to revenue outcomes.' },
      examEdge: 'State the likely <strong>PED first</strong>, then explain the direction of the change in total revenue. Two-step reasoning collects the marks.'
    },

    /* ====================================================================
       CARD 6 – The whole revenue story
       Pattern: Sequential flow chain (6 steps) + tile grids
       Synthesis card pulling the topic together: a chain from price
       decision through to MR, plus tiles for WHEN TO USE EACH MEASURE
       and COMMON MISTAKES. Uses only existing engine blocks – no new
       visual needed.
       ==================================================================== */
    {
      id: 'revenue-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole revenue story',
      lede: 'Price, demand and output decisions become much clearer once TR, AR and MR are linked together.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F517}', tone: 'green', text: 'Strong answers move from <strong>price and demand</strong> to <strong>TR, AR and MR</strong> in a clear chain – not in isolation.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'blue',   icon: '\u{1F3F7}\u{FE0F}', title: 'Price decision',       sub: 'Firms choose where to set the price.' },
        { tone: 'purple', icon: '\u{1F4C9}',         title: 'PED / demand response', sub: 'Quantity demanded responds; PED governs by how much.' },
        { tone: 'green',  icon: '\u{1F4E6}',         title: 'Quantity sold',         sub: 'A new (P, Q) pair on the demand curve.' },
        { tone: 'amber',  icon: '\u{1F4B0}',         title: 'Total revenue',         sub: 'TR = P × Q – the headline sales number.' },
        { tone: 'rose',   icon: '\u{1F3F7}\u{FE0F}', title: 'Average revenue',       sub: 'AR = TR ÷ Q, which equals P at that point.' },
        { tone: 'slate',  icon: '\u{1F4C8}',         title: 'Marginal revenue',      sub: 'MR = ΔTR from the next unit sold.' }
      ],

      causesLabel: 'WHEN TO USE EACH MEASURE',
      causesEmoji: '\u{1F4CA}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',  icon: '\u{1F4B0}', head: 'Total revenue (TR)',   body: 'Best for judging the <strong>overall scale of sales</strong> and the size of the firm in revenue terms.' },
        { tone: 'amber', icon: '\u{1F3F7}\u{FE0F}', head: 'Average revenue (AR)', body: 'Best for spotting the <strong>price per unit</strong> and reading directly off the demand curve.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Marginal revenue (MR)', body: 'Best for <strong>decisions about the next unit</strong> – produce it if MR ≥ MC, stop if MR &lt; MC.' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '\u{26A0}\u{FE0F}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'rose', icon: '\u{2717}', head: 'Revenue is not profit',           body: 'Revenue is sales income. Profit is what is left after costs are deducted.' },
        { tone: 'rose', icon: '\u{2717}', head: 'AR is not TR',                    body: 'AR is per-unit revenue (the price). TR is the total across all units sold.' },
        { tone: 'rose', icon: '\u{2717}', head: 'MR is extra, not average',        body: 'MR is the change in TR from the next unit – not an average across all units.' },
        { tone: 'rose', icon: '\u{2717}', head: 'TR-max happens when MR = 0',      body: 'Past that output MR turns negative and TR starts falling – not at MR = MC.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Revenue is <strong>not one number</strong> – TR, AR and MR each tell a different part of the same story. The trick is matching the right one to the question.' },

      conclusion: { title: 'Big idea', text: 'Define the measure, use the right <strong>formula</strong>, link it to the <strong>diagram</strong> – that is the structure of a top revenue answer.' },
      examEdge: 'Practise switching between the three measures in a single answer. Examiners reward students who can move from TR to AR to MR without losing the thread.'
    }
  ]
};
