/* ============================================================
   ECONOS – Profits & Losses (Edexcel A 3.3.4)
   6 cards · interactive-first build
   Maps the spec sub-points: profit and loss definitions, the
   profit equation, break-even, profit per unit vs profit margin,
   causes of profits and losses, and the wider story.

   Card patterns:
     1 Decompose (interactive 3-bar profit equation)
     2 Twin pair (Revenue side vs Cost side around centre)
     3 Decompose (interactive 3-view break-even chart)
     4 Decompose (interactive 2-measure comparison)
     5 4-tile causes grid + responses tile grid
     6 Sequential flow chain (synthesis – uses existing blocks)

   New visuals:
     - profitCoreEquation     (Card 1 hero, interactive)
     - whereProfitComesFrom   (Card 2 hero, static)
     - breakEvenChart         (Card 3 hero, interactive)
     - profitMeasures         (Card 4 hero, interactive)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'profits-and-losses',
  topicNum: '3.3.4',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Profits & Losses',
  estTime: '14 min',
  goal: 'Calculate profit and loss, explain break-even and the link between profit per unit and profit margin, and judge what drives profits and losses up or down',

  intro: {
    heroKey: 'heroFirm',
    summary: 'Profit is what remains after a firm pays its costs from total revenue. The exam toolkit splits into a small number of measures: the core profit equation (Profit = Total revenue − Total costs), break-even (where revenue just covers cost), profit per unit (selling price − cost per unit) and profit margin (profit as a % of revenue). The Theme 3 task is to recognise the cause of any change in profit — a price move, a cost rise, a productivity gain or a competition squeeze — and to chain that back to the business response.',
    doInThis: 'Calculate profit using TR − TC. Sketch and label a break-even chart and read the profit/loss regions from it. Distinguish profit per unit from profit margin, and compare two products using both. Diagnose the cause of any change in profit and propose a sensible business response.',
    outcomes: [
      'State and apply the profit equation: Profit = TR − TC',
      'Identify break-even, profit and loss regions on a chart',
      'Calculate profit per unit and profit margin from a worked table',
      'Diagnose why profits rise or fall in a given context',
      'Suggest a credible business response to a loss'
    ],
    tip: 'Always separate revenue, cost and profit in your working. Examiners reward students who show every step.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 14 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Profit and loss: the big picture
       Pattern: Decompose a diagram (interactive 3-view bar reveal)
       Step through the core profit identity Profit = TR − TC using a
       worked example (£120k − £95k = £25k).
       ==================================================================== */
    {
      id: 'pl-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Profit and loss — the big picture',
      lede: 'Profit is what remains after a firm’s total costs are deducted from its total revenue.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4B0}', tone: 'green', text: '<strong>Profit = Total revenue − Total costs.</strong> A loss is just the same equation with a negative answer.' },

      interactiveDiagram: {
        svgKey: 'profitCoreEquation',
        label: 'THE CORE EQUATION — a worked example',
        emoji: '\u{1F4C8}',
        wide: true,
        maxWidth: '720px',
        layers: ['pce-1', 'pce-2', 'pce-3'],
        views: [
          {
            label: 'Revenue',
            tone: 'blue',
            head: 'Step 1 — total revenue',
            body: 'The firm brings in <strong>£120,000 of total revenue</strong> from sales. This is the headline sales number — money IN from customers before any costs are taken off.',
            show: ['pce-1']
          },
          {
            label: 'Costs',
            tone: 'amber',
            head: 'Step 2 — total costs',
            body: 'The firm also spends <strong>£95,000 of total costs</strong> on wages, materials, energy and rent. This is everything that goes OUT of the business.',
            analysis: 'Total cost is the sum of fixed and variable costs. The cost bar is shorter than the revenue bar — which is good news, because profit lives in the gap between them.',
            show: ['pce-1', 'pce-2']
          },
          {
            label: 'Profit',
            tone: 'green',
            head: 'Step 3 — profit is what is left',
            body: 'Take total costs away from total revenue: <strong>£120,000 − £95,000 = £25,000 profit.</strong> The green bar shows exactly the gap between the two larger bars.',
            analysis: 'If costs had EXCEEDED revenue, the green bar would be negative — that is the definition of a loss. The whole topic flows from this identity: revenue, cost, and the gap between them.',
            show: ['pce-1', 'pce-2', 'pce-3']
          }
        ]
      },

      causesLabel: 'THREE OUTCOMES',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '\u{1F4B0}', head: '1. Profit',     body: 'Revenue is <strong>greater</strong> than cost — the gap is positive. The firm has something left to reinvest, distribute or save.' },
        { tone: 'blue',  icon: '\u{2696}\u{FE0F}', head: '2. Break-even', body: 'Revenue <strong>equals</strong> cost — the firm is neither making nor losing money. Surviving, but not yet rewarding.' },
        { tone: 'rose',  icon: '\u{1F4C9}', head: '3. Loss',       body: 'Cost is <strong>greater</strong> than revenue. The gap is negative — money is leaving the business faster than it is coming in.' }
      ],

      flowTitle: 'WHY IT MATTERS',
      flowEmoji: '\u{1F50D}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'blue',  icon: '\u{1F4B5}', title: 'Returns to shareholders', sub: 'High sales alone don’t protect shareholders — high profit does.' },
        { tone: 'green', icon: '\u{1F680}', title: 'Funds growth',            sub: 'Retained profit can fund new investment and expansion.' },
        { tone: 'amber', icon: '\u{26A0}\u{FE0F}', title: 'Warning signal',         sub: 'A loss signals a problem with prices, sales or costs.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Profit is the gap between what a firm earns and what it spends.' },

      conclusion: { title: 'Big idea', text: 'Profit clearly, then explain whether the answer is positive or negative — and what it means for the business next.' },
      examEdge: 'Always lay out the calculation: <em>Profit = TR − TC = £120,000 − £95,000 = £25,000</em>. Showing every step protects the marks.'
    },

    /* ====================================================================
       CARD 2 – Where profit comes from
       Pattern: Twin pair (Revenue side vs Cost side around centre pill)
       ==================================================================== */
    {
      id: 'pl-where-from',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'Where profit comes from',
      lede: 'Profit changes when revenue, cost, or both move. Anything that raises revenue faster than cost boosts profit.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4B5}', tone: 'green', text: 'Two sides of the same story: <strong>revenue</strong> depends on price and quantity; <strong>cost</strong> depends on fixed and variable inputs.' },

      visualKey: 'whereProfitComesFrom',
      visualLabel: 'THE TWO SIDES OF THE STORY',
      visualEmoji: '\u{1F517}',

      causesLabel: 'FOUR QUICK SCENARIOS',
      causesEmoji: '\u{1F4C8}',
      causesStyle: 'icon-top',
      causesCols: 2,
      causes: [
        { tone: 'green', icon: '\u{1F4C8}', head: '1. Sales rise',            body: 'More units sold → revenue up → <strong>profit up</strong> (if costs hold steady).' },
        { tone: 'blue',  icon: '\u{1F3F7}\u{FE0F}', head: '2. Price rise or fall', body: 'Revenue effect depends on the <strong>PED</strong> — how much quantity responds.' },
        { tone: 'rose',  icon: '\u{1F4B8}', head: '3. Costs rise',            body: 'Higher wages, energy or materials → <strong>profit squeezed</strong>.' },
        { tone: 'amber', icon: '\u{2699}\u{FE0F}', head: '4. Productivity improves', body: 'Unit cost falls → <strong>profit improves</strong> even at the same revenue.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: '<strong>High revenue does not automatically mean high profit</strong> — the cost side determines the gap.' },

      conclusion: { title: 'Big idea', text: 'Profit depends on the <strong>gap</strong> between what comes in (revenue) and what goes out (cost).' },
      examEdge: 'When analysing profit, explain whether the change came from <strong>revenue, cost, or both</strong> — and chain it through to demand or productivity.'
    },

    /* ====================================================================
       CARD 3 – Profit, loss and break-even
       Pattern: Decompose a diagram (interactive 3-view chart reveal)
       Break-even at Q=40, TR=TC=£80k. FC=£40k, VC=£1k/unit, P=£2k/unit.
       ==================================================================== */
    {
      id: 'pl-break-even',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'Profit, loss and break-even',
      lede: 'A break-even chart shows where total revenue just covers total cost — the line between loss and profit.',
      ledeStyle: 'plain',

      tip: { icon: '\u{2696}\u{FE0F}', tone: 'green', text: '<strong>Break-even</strong> is the output where total revenue equals total cost — profit is exactly zero.' },

      interactiveDiagram: {
        svgKey: 'breakEvenChart',
        label: 'THE BREAK-EVEN CHART — three reveal steps',
        emoji: '\u{1F4CA}',
        layers: ['bec-1', 'bec-2', 'bec-3'],
        views: [
          {
            label: 'Costs',
            tone: 'rose',
            head: 'Step 1 — total cost starts at fixed cost',
            body: 'The red TC line starts at the firm’s <strong>£40k fixed cost</strong> on the y-axis (output = 0 but rent and equipment still cost money) and rises gently as variable cost adds <strong>£1k per unit</strong>.',
            show: ['bec-1']
          },
          {
            label: 'Revenue',
            tone: 'green',
            head: 'Step 2 — total revenue starts at zero',
            body: 'The green TR line starts at zero (no sales, no revenue) and rises steeply — <strong>£2k per unit sold</strong>. Initially TR sits BELOW TC because fixed cost has not been covered yet.',
            analysis: 'The vertical gap between the two lines tells you instantly whether the firm is in profit (TR > TC) or loss (TC > TR) at that output.',
            show: ['bec-1', 'bec-2']
          },
          {
            label: 'Break-even',
            tone: 'blue',
            head: 'Step 3 — break-even, loss and profit',
            body: 'TR and TC cross at <strong>Q = 40, £80k</strong> — the break-even point. Below that output → loss (red region). Above that output → profit (green region).',
            analysis: 'Algebra check: TR = TC → 2Q = 40 + Q → Q = 40. Selling 40 units at £2k brings in £80k, just enough to cover £40k fixed + £40k variable cost.',
            show: ['bec-1', 'bec-2', 'bec-3']
          }
        ]
      },

      flowTitle: 'WHY FIRMS CARE',
      flowEmoji: '\u{1F3AF}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green',  icon: '\u{1F3AF}', title: 'Target output',    sub: 'Tells the firm the volume of sales needed to cover total cost.' },
        { tone: 'blue',   icon: '\u{1F6E1}\u{FE0F}', title: 'Margin of safety', sub: 'How far above break-even can output fall before losses begin?' },
        { tone: 'purple', icon: '\u{1F4DD}', title: 'Decision making',  sub: 'Guides pricing, cost control and capacity planning.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Break-even is not the goal — firms normally want output <strong>well beyond</strong> it. But it is the floor that has to be cleared.' },

      conclusion: { title: 'Big idea', text: 'Break-even is the <strong>turning point</strong> between loss and profit. Everything above it is profit; everything below it is loss.' },
      examEdge: 'On the chart, always label the break-even point, then explain which region shows profit and which shows loss.'
    },

    /* ====================================================================
       CARD 4 – Profit per unit and profit margin
       Pattern: Decompose a diagram (interactive 2-measure compare)
       Profit per unit = £4 (price £20 − cost £16); margin = 20%.
       ==================================================================== */
    {
      id: 'pl-measures',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'Profit per unit and profit margin',
      lede: 'Total profit matters, but firms also care how much profit they make on each sale.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4C8}', tone: 'green', text: '<strong>Profit per unit</strong> and <strong>profit margin</strong> show how efficiently a firm turns sales into profit.' },

      interactiveDiagram: {
        svgKey: 'profitMeasures',
        label: 'Two measures of profitability — step through both',
        emoji: '\u{1F4CA}',
        wide: true,
        maxWidth: '700px',
        layers: ['pm-1', 'pm-2'],
        views: [
          {
            label: 'Profit per unit',
            tone: 'green',
            head: 'Step 1 — the gap on each sale',
            body: 'For each unit sold: <strong>Selling price £20 − Cost per unit £16 = Profit per unit £4.</strong> The thin green strip on top of the cost bar shows the gap visually.',
            show: ['pm-1']
          },
          {
            label: 'Profit margin',
            tone: 'purple',
            head: 'Step 2 — profit as a percentage of revenue',
            body: 'Profit margin = <strong>(Profit ÷ Revenue) × 100</strong>. With £24,000 profit on £120,000 revenue, the margin is <strong>20%</strong> — for every £1 of sales, 20p is profit.',
            analysis: 'Margin is the comparable measure across products of different sizes. A small product can have a higher margin than a large one — the Product A vs Product B comparison below shows exactly that.',
            show: ['pm-1', 'pm-2']
          }
        ]
      },

      flowTitle: 'WHAT IT TELLS US',
      flowEmoji: '\u{1F50D}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'blue',   icon: '\u{2699}\u{FE0F}', title: 'Efficiency',     sub: 'Higher margin means the firm keeps more of every £ of sales.' },
        { tone: 'amber',  icon: '\u{1F4B5}', title: 'Pricing power',  sub: 'Strong margins suggest customers accept the prices the firm sets.' },
        { tone: 'rose',   icon: '\u{1F6E1}\u{FE0F}', title: 'Vulnerability', sub: 'Thin margins leave less buffer if costs rise or competition stiffens.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'A business can have lower total profits but still struggle if <strong>margins are thin</strong>. Margin matters as much as the total.' },

      conclusion: { title: 'Big idea', text: 'Profitability is about what is <strong>left over per sale</strong>, not just how much was sold.' },
      examEdge: 'Use margin evidence to underpin statements about business performance.'
    },

    /* ====================================================================
       CARD 5 – Why profits rise — and why losses happen
       Pattern: 4-tile causes grid + responses flow
       Uses existing engine blocks (no new visual).
       ==================================================================== */
    {
      id: 'pl-rise-fall',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'Why profits rise — and why losses happen',
      lede: 'Profits improve when firms raise revenue, cut costs, or do both. Losses appear when the story goes the other way.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4CA}', tone: 'green', text: 'Most profit stories come back to <strong>revenue up, costs down — or the reverse</strong>.' },

      causesLabel: 'FOUR COMMON STORIES',
      causesEmoji: '\u{1F4D6}',
      causesStyle: 'icon-top',
      causesCols: 2,
      causes: [
        { tone: 'green', icon: '\u{1F4C8}', head: 'Demand rises',         body: 'More units sold → revenue up → <strong>profit up</strong>. The most welcome story for any firm.' },
        { tone: 'blue',  icon: '\u{2699}\u{FE0F}', head: 'Productivity improves', body: 'Unit cost falls → <strong>profit up</strong> even at the same revenue. Tech and training both play a part.' },
        { tone: 'rose',  icon: '\u{1F4C9}', head: 'Costs rise',           body: 'Wages, rent or energy → <strong>profit squeezed</strong>. Hard to pass through if competition is strong.' },
        { tone: 'amber', icon: '\u{1F3F7}\u{FE0F}', head: 'Price competition',    body: 'Discounts cut margin → <strong>profit may fall</strong> even if quantity holds up.' }
      ],

      flowTitle: 'RESPONSES TO LOSS',
      flowEmoji: '\u{1F6E0}\u{FE0F}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green', icon: '\u{1F4C8}', title: 'Raise revenue', sub: 'Increase prices where possible, improve the product mix, or push marketing.' },
        { tone: 'amber', icon: '\u{2702}\u{FE0F}', title: 'Cut cost', sub: 'Improve efficiency, renegotiate supplier deals, automate or downsize.' },
        { tone: 'blue',  icon: '\u{1F50D}', title: 'Review the product mix', sub: 'Shift to higher-margin lines and away from loss-making items.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Cutting cost can help profit but in extreme cases it damages <strong>quality, morale or customer service</strong>.' },

      conclusion: { title: 'Big idea', text: 'Profit is <strong>dynamic</strong> — it changes as price, demand, productivity and cost conditions change.' },
      examEdge: 'Strong answers do not just say <em>profits fell</em> — they explain the <strong>causal chain</strong> behind the change.'
    },

    /* ====================================================================
       CARD 6 – The whole story
       Pattern: Sequential flow chain + pair block + tile grid
       Synthesis card using existing engine blocks – no new visual.
       ==================================================================== */
    {
      id: 'pl-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole story',
      lede: 'Strong answers link profit or loss to causes, consequences and judgement.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F511}', tone: 'green', text: 'The key is <strong>not just the number</strong> — it is what caused it, what it means, and what happens next.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green',  icon: '\u{1F4B0}', title: 'Revenue earned',     sub: 'Price × quantity over the period.' },
        { tone: 'amber',  icon: '\u{1F4B8}', title: 'Costs incurred',     sub: 'Fixed and variable costs paid out.' },
        { tone: 'blue',   icon: '\u{2696}\u{FE0F}', title: 'Profit or loss outcome', sub: 'TR − TC gives the headline number.' },
        { tone: 'purple', icon: '\u{1F3AF}', title: 'Business response',  sub: 'Management acts: prices, cost cuts, investment, exit.' },
        { tone: 'rose',   icon: '\u{1F465}', title: 'Stakeholder effects', sub: 'Shareholders, workers, customers and HMRC all feel it.' },
        { tone: 'slate',  icon: '\u{1F50D}', title: 'Evaluation',          sub: 'Judge whether the outcome is sustainable or one-off.' }
      ],

      pairLabel: 'WHY PROFIT CAN BE GOOD vs WHY LOSS MATTERS',
      pairEmoji: '\u{2696}\u{FE0F}',
      left: {
        tone: 'green',
        icon: '\u{2705}',
        iconStyle: 'circle',
        label: 'Why profit can be good',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Funds investment and growth.</li><li>Rewards owners — justifies the risk of running the business.</li><li>Greater security for workers — profitable firms are more stable.</li><li>Scope for innovation — research and product development.</li></ul>'
      },
      right: {
        tone: 'rose',
        icon: '\u{26A0}\u{FE0F}',
        iconStyle: 'circle',
        label: 'Why loss matters',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Pressure on cash flow — losses reduce cash reserves.</li><li>Possible inefficiency or weak demand exposed.</li><li>Weaker confidence — investors, lenders and customers worry.</li><li>Risk of closure if losses continue.</li></ul>'
      },

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '\u{26A0}\u{FE0F}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'rose', icon: '\u{2717}', head: 'Costs must be deducted',     body: 'Profit is not gross revenue — it is the gap that remains AFTER costs are taken away.' },
        { tone: 'rose', icon: '\u{2717}', head: 'Break-even is not a profit', body: 'It means no profit — not a good thing on its own.' },
        { tone: 'rose', icon: '\u{2717}', head: 'High sales ≠ high profit',   body: 'Big revenue can still be loss-making if costs are higher.' },
        { tone: 'rose', icon: '\u{2717}', head: 'Short-run losses can be OK', body: 'Investment today can lead to bigger profits later — context matters.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Strong answers do not just say the firm has made a profit — they explain the <strong>causal chain</strong> behind it.' },

      conclusion: { title: 'Big idea', text: 'Profit and loss are <strong>signals</strong> — they help us judge performance, but they need context: causes, consequences, judgement.' },
      examEdge: 'Top essays define the measure, use the correct formula or diagram, then explain the business implication.'
    }
  ]
};
