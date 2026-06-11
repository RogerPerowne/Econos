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
     - fixedVariableTotalChart  (Card 2 hero, 3-view reveal)
     - averageCostFamilyChart   (Card 3 hero, Marco's pizzeria, 3-view)
     - marginalCostChart        (Card 4 hero, 2-view reveal)
     - fullCostDiagram          (Card 5 hero, static)
     - costDataBakery           (Card 6 hero — bakery case, static)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'costs',
  topicNum: '3.3.2',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Costs',
  estTime: '16 min',
  goal: 'Understand the cost types a firm faces, calculate average and marginal cost, and read what the shape of each cost curve means',

  intro: {
    heroKey: 'heroCostCurves',
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
    },

    /* ====================================================================
       CARD 2 – Fixed, variable and total cost
       Pattern: Decompose a diagram (interactive 3-line reveal)
       Marco's Pizzeria: FC = £40/day, then TVC and TC built up.
       ==================================================================== */
    {
      id: 'costs-fixed-variable-total',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 7',
      title: 'Fixed, variable and total cost',
      lede: 'Some costs stay the same as output changes, while others rise with production. Total cost combines both.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4B7}', tone: 'green', text: '<strong>Total cost = fixed cost + variable cost.</strong> The two ingredients have very different behaviours – step through them to see why.' },

      interactiveDiagram: {
        svgKey: 'fixedVariableTotalChart',
        label: 'THE THREE LINES — Marco’s Pizzeria (FC = £40)',
        emoji: '\u{1F4CA}',
        layers: ['tfc-1', 'tfc-2', 'tfc-3'],
        views: [
          {
            label: 'Fixed cost',
            tone: 'green',
            head: 'TFC — the flat green line',
            body: 'Marco pays £40 a day for the oven, rent and insurance whether he makes 1 pizza or 50. <strong>TFC is the horizontal line</strong> – it stays at £40 regardless of output.',
            show: ['tfc-1']
          },
          {
            label: 'Variable cost',
            tone: 'amber',
            head: 'TVC — rising from the origin',
            body: 'Every extra pizza adds flour, cheese and topping. TVC starts at 0 and rises. <strong>By Q=4, TVC = £80</strong> – more than the fixed cost.',
            analysis: 'Notice TVC is not a straight line: the first few pizzas have low marginal cost (specialisation), but later units cost more (the kitchen gets crowded and ingredients are wasted).',
            show: ['tfc-1', 'tfc-2']
          },
          {
            label: 'Total cost',
            tone: 'blue',
            head: 'TC = TFC + TVC',
            body: 'The blue TC line sits <strong>£40 above</strong> TVC – exactly the fixed-cost gap. At Q=4, TC = £40 + £80 = <strong>£120</strong>.',
            analysis: 'The TC line is just the TVC line shifted up by the fixed-cost amount. That gap never closes – fixed cost is always there in the short run.',
            show: ['tfc-1', 'tfc-2', 'tfc-3']
          }
        ]
      },

      flowTitle: 'HOW TO SPOT EACH COST',
      flowEmoji: '\u{1F50D}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green',  icon: '\u{1F510}', title: 'Fixed costs', sub: 'Do not move with output — incurred even at zero output.' },
        { tone: 'amber',  icon: '\u{1F4E6}', title: 'Variable costs', sub: 'Rise with each extra unit made.' },
        { tone: 'blue',   icon: '\u{2795}',  title: 'Total cost', sub: 'The sum of fixed and variable.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'At zero output, variable cost is zero but <strong>fixed cost still exists</strong> – so TC at Q=0 equals FC.' },

      conclusion: { title: 'Big idea', text: 'The short-run cost story starts with one identity – <strong>fixed costs versus variable costs</strong> – and everything else (averages, marginal, decisions) is built from there.' },
      examEdge: 'When reading data, check TC = FC + VC at every row – the easiest sanity check in any cost question.'
    },

    /* ====================================================================
       CARD 3 – The average cost family (Marco’s Pizzeria)
       Pattern: Decompose a diagram (interactive 3-curve reveal)
       AFC = TFC/Q (hyperbolic), AVC = TVC/Q (U), AC = AVC + AFC (U).
       ==================================================================== */
    {
      id: 'costs-average-cost-family',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 7',
      title: 'The average cost family',
      lede: 'Average costs turn total spending into cost per unit. They help firms judge efficiency at different output levels.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F3F7}\u{FE0F}', tone: 'green', text: '<strong>Average cost means cost per unit of output.</strong> Three siblings live in this family: AFC, AVC and AC – step through them to see how they fit.' },

      interactiveDiagram: {
        svgKey: 'averageCostFamilyChart',
        label: 'Three averages, three curves — Marco’s Pizzeria',
        emoji: '\u{1F4C9}',
        layers: ['acf-1', 'acf-2', 'acf-3'],
        views: [
          {
            label: 'AFC',
            tone: 'amber',
            head: 'Average fixed cost — spreading £40 thinner',
            body: 'AFC = £40 ÷ Q. With 1 pizza the £40 oven cost falls entirely on that pizza (AFC = £40). With 4 pizzas it splits four ways (AFC = £10). The curve falls smoothly toward zero – fixed cost diluted across more units.',
            show: ['acf-1']
          },
          {
            label: 'AVC',
            tone: 'rose',
            head: 'Average variable cost — early efficiency then crowding',
            body: 'AVC = TVC ÷ Q. Early units gain from specialisation, so AVC falls (from around £33 down toward its £17 minimum near Q=6). As the kitchen fills up and dough is wasted, AVC turns back up — the result is a <strong>U-shape</strong>.',
            analysis: 'The U-shape comes from two opposing forces: early increasing returns (one worker does many things efficiently) versus later diminishing returns (one oven can only bake so much).',
            show: ['acf-1', 'acf-2']
          },
          {
            label: 'AC',
            tone: 'purple',
            head: 'Average cost — the headline figure',
            body: 'AC = TC ÷ Q = AVC + AFC. The AC curve sits ABOVE AVC – the gap is AFC – and that gap shrinks as more pizzas spread the fixed cost. AC is £30 at Q=4 and keeps falling to its minimum (about £23 near Q=7) before diminishing returns push it back up.',
            analysis: 'AC reaches its minimum to the <strong>right</strong> of AVC’s minimum, because as Q rises AFC keeps falling and pulls AC down even after AVC has started rising.',
            show: ['acf-1', 'acf-2', 'acf-3']
          }
        ]
      },

      flowTitle: 'WHY THE SHAPES LOOK LIKE THIS',
      flowEmoji: '\u{1F4A1}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'amber',  icon: '\u{1F4C9}', title: 'Spreading fixed cost', sub: 'AFC falls because £40 divides by more units.' },
        { tone: 'green',  icon: '\u{1F680}', title: 'Early efficiency',     sub: 'AVC falls early — workers specialise, kit runs full-tilt.' },
        { tone: 'rose',   icon: '\u{1F6A7}', title: 'Diminishing returns',  sub: 'AVC rises later — the kitchen gets crowded.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'AC minimum sits at <strong>higher output</strong> than AVC minimum — falling AFC keeps pulling AC down even after AVC has bottomed out.' },

      conclusion: { title: 'Big idea', text: 'Average cost curves explain why producing a bit more from low output cuts the cost per unit – up to the efficient scale, after which adding more units gets expensive.' },
      examEdge: 'Always name the shape: <strong>AFC falls smoothly; AVC and AC are U-shaped</strong>. Examiners reward the precise vocabulary.'
    },

    /* ====================================================================
       CARD 4 – Marginal cost – the cost of one more
       Pattern: Decompose a diagram (interactive 2-view reveal)
       Marco’s table → MC curve crossing AC and AVC at their minima.
       ==================================================================== */
    {
      id: 'costs-marginal-cost',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 7',
      title: 'Marginal cost — the cost of one more',
      lede: 'Marginal cost measures the extra cost of producing one additional unit – the most decision-relevant cost measure of all.',
      ledeStyle: 'plain',

      tip: { icon: '\u{2795}', tone: 'green', text: '<strong>Marginal cost = ΔTC ÷ ΔQ.</strong> The cost of one more unit – not the average across all units.' },

      interactiveDiagram: {
        svgKey: 'marginalCostChart',
        label: 'Marginal cost — Marco’s Pizzeria',
        emoji: '\u{1F4C8}',
        layers: ['mc-1', 'mc-2'],
        views: [
          {
            label: 'Marginal cost',
            tone: 'amber',
            head: 'Step 1 — MC is the cost of one more (a U-shape)',
            body: 'MC = ΔTC ÷ ΔQ. Going from 3 to 4 pizzas raises TC from about £110 to £120, so <strong>MC ≈ £10</strong>. Early units gain from specialisation so MC falls; then diminishing returns set in and MC rises — a U-shape, like AVC.',
            show: ['mc-1']
          },
          {
            label: 'Cuts AVC & AC',
            tone: 'rose',
            head: 'Step 2 — MC cuts AVC and AC at their minimum points',
            body: 'Add the (dashed) AVC and AC curves: MC crosses each one <strong>exactly at its lowest point</strong> — not anywhere else.',
            analysis: 'The rule is mechanical: when MC is BELOW the average, the average is being pulled down; when MC is ABOVE, the average is being pulled up; when MC = average, the average is at its turning point – its minimum.',
            show: ['mc-1', 'mc-2']
          }
        ]
      },

      flowTitle: 'WHY MC MATTERS',
      flowEmoji: '\u{1F3AF}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'blue',  icon: '\u{1F4E6}', title: 'Output decisions', sub: 'Compare MC with the extra revenue from the next unit.' },
        { tone: 'amber', icon: '\u{1F6A7}', title: 'Diminishing returns', sub: 'MC rises once early specialisation gains are exhausted.' },
        { tone: 'green', icon: '\u{1F517}', title: 'Link to averages',  sub: 'MC cuts AVC and AC at their minimum points – not anywhere else.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Marginal cost is the <strong>change in TC</strong> – it does NOT include fixed cost. Fixed cost adds the same £40 at every output, so it cancels out in ΔTC.' },

      conclusion: { title: 'Big idea', text: 'Marginal cost is the <strong>gain or loss</strong> from one more unit produced. It is the cost the firm should compare against the marginal revenue when deciding whether to scale up or down.' },
      examEdge: 'In a profit question, the rule is MR = MC. That is why marginal cost is the cost measure that drives output decisions.'
    },

    /* ====================================================================
       CARD 5 – How the cost curves fit together
       Pattern: Decompose a diagram (full static diagram + 3-step logic)
       Composite of all 4 curves (AFC, AVC, AC, MC) with annotations.
       ==================================================================== */
    {
      id: 'costs-full-diagram',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 7',
      title: 'How the cost curves fit together',
      lede: 'Four cost curves, one diagram. Each tells a different part of the same production story.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4D0}', tone: 'green', text: 'AFC <strong>falls</strong>, AVC and AC are <strong>U-shaped</strong>, and MC <strong>cuts AVC and AC at their minimum points</strong>. That is the whole picture in one sentence.' },

      visualKey: 'fullCostDiagram',
      visualLabel: 'THE FULL DIAGRAM',
      visualEmoji: '\u{1F4CA}',

      flowTitle: 'THE LOGIC',
      flowEmoji: '\u{1F9E0}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'amber',  icon: '\u{1F4C9}', title: 'Fixed cost spreads', sub: 'AFC falls — fewer £ of fixed cost per unit as Q rises.' },
        { tone: 'green',  icon: '\u{1F680}', title: 'Specialisation kicks in', sub: 'Early on, MC and AVC fall together as the firm becomes more efficient.' },
        { tone: 'rose',   icon: '\u{1F6A7}', title: 'Diminishing returns bite', sub: 'Eventually MC turns up, then AVC, then AC — capacity constraints win.' }
      ],

      causesLabel: 'THREE PHASES',
      causesEmoji: '\u{1F50D}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F4C9}', head: 'Low output',       body: '<strong>High AC</strong> driven by huge AFC. AVC and MC are also falling. Few units, fixed cost dominates.' },
        { tone: 'green',  icon: '\u{1F3AF}', head: 'Efficient region', body: '<strong>AC at its minimum</strong>, MC crosses AC. The firm is producing at the lowest possible cost per unit.' },
        { tone: 'amber',  icon: '\u{1F525}', head: 'Crowded capacity', body: '<strong>AC rising</strong> as diminishing returns dominate. MC and AVC both rising fast; extra output is expensive.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'MC is the only curve that does NOT have AFC in it — MC depends purely on the change in variable cost.' },

      conclusion: { title: 'Big idea', text: 'The cost curves are not four random shapes – they sit in <strong>fixed mathematical relationships</strong> to each other, and the geometry encodes the whole short-run production story.' },
      examEdge: 'Strong answers reference the <strong>relationship between curves</strong>, not just one curve in isolation. "MC cuts AC at its minimum" is the single highest-value sentence in the cost topic.'
    },

    /* ====================================================================
       CARD 6 – Using cost data in decisions
       Pattern: Sequential flow (4-step procedure) + worked bakery table
       Read a cost table → calculate AC/MC → interpret → act.
       ==================================================================== */
    {
      id: 'costs-data-decisions',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 7',
      title: 'Using cost data in decisions',
      lede: 'Cost measures become useful when firms calculate them carefully and then interpret what they imply.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4DD}', tone: 'green', text: 'Calculate → compare → interpret. <strong>That is the cost-analysis sequence</strong> the exam keeps testing.' },

      visualKey: 'costDataBakery',
      visualLabel: 'A 4-STEP PROCEDURE + BAKERY MINI-CASE',
      visualEmoji: '\u{1F35E}',

      causesLabel: 'COMMON EXAM TASKS',
      causesEmoji: '\u{1F4D8}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',  icon: '\u{1F50D}', head: 'Identify',  body: 'Spot which cost is fixed, which is variable, and which is missing from a table. Then label TC, AC and MC.' },
        { tone: 'green', icon: '\u{1F4CA}', head: 'Calculate', body: 'Compute AC = TC ÷ Q for each row, and MC as the change in TC between adjacent rows. Show working.' },
        { tone: 'amber', icon: '\u{1F4AC}', head: 'Explain',   body: 'State what the numbers imply for efficiency or output. Linking AC minimum to MC = AC scores top marks.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'A cost table becomes powerful only when you explain what the numbers mean — not just calculate them.' },

      conclusion: { title: 'Big idea', text: 'Cost data is just the beginning – top answers <strong>turn numbers into business judgement</strong>: which output level is most efficient, when to scale, when to stop.' },
      examEdge: 'Always show three things: the formula, the substitution and the answer. Pattern: <em>AC = TC ÷ Q = £105 ÷ 40 = £2.63 per loaf</em>.'
    },

    /* ====================================================================
       CARD 7 – The whole cost story
       Pattern: Sequential flow chain (6 steps) + tile grid + pair block
       Synthesis using only existing engine blocks – no new visual.
       ==================================================================== */
    {
      id: 'costs-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 7 of 7',
      title: 'The whole cost story',
      lede: 'Cost analysis links different measures into one coherent story about production, efficiency and decisions.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F517}', tone: 'green', text: 'From <strong>fixed and variable</strong> costs, we build <strong>total, average and marginal</strong> cost – then decisions.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green',  icon: '\u{1F510}', title: 'Fixed cost',     sub: 'Does not change with output in the short run.' },
        { tone: 'amber',  icon: '\u{1F4E6}', title: 'Variable cost',  sub: 'Rises with output (and may accelerate).' },
        { tone: 'blue',   icon: '\u{2795}',  title: 'Total cost',     sub: 'TC = FC + VC.' },
        { tone: 'purple', icon: '\u{1F3F7}\u{FE0F}', title: 'Average cost', sub: 'AC = TC ÷ Q  (=  AFC + AVC).' },
        { tone: 'rose',   icon: '\u{1F4C8}', title: 'Marginal cost',  sub: 'MC = ΔTC ÷ ΔQ – the cost of one more.' },
        { tone: 'slate',  icon: '\u{1F3AF}', title: 'Decisions',      sub: 'Use the right cost for the right call.' }
      ],

      causesLabel: 'DON’T FORGET THE DIFFERENCES',
      causesEmoji: '\u{26A0}\u{FE0F}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'rose',   icon: '\u{2716}\u{FE0F}', head: 'Total is the full bill', body: 'AC is the per-unit average – not the total. Multiply AC × Q to get back to TC.' },
        { tone: 'rose',   icon: '\u{2716}\u{FE0F}', head: 'FC does not move with output', body: 'In the short run. In the long run, even fixed costs can change.' },
        { tone: 'rose',   icon: '\u{2716}\u{FE0F}', head: 'Marginal means extra',         body: 'MC is the cost of the next unit – not an average, not a total.' }
      ],

      pairLabel: 'WHAT STUDENTS SHOULD BE ABLE TO DO',
      pairEmoji: '\u{1F3AF}',
      left: {
        tone: 'green',
        icon: '\u{1F522}',
        iconStyle: 'circle',
        label: 'Core calculations',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>TC = FC + VC at every row.</li><li>AC = TC ÷ Q for each output.</li><li>MC = change in TC between rows.</li><li>Spot AC minimum from the data.</li></ul>'
      },
      right: {
        tone: 'blue',
        icon: '\u{1F4AC}',
        iconStyle: 'circle',
        label: 'Core explanations',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Why AFC falls smoothly toward zero.</li><li>Why AVC and AC are U-shaped.</li><li>Why MC cuts AVC and AC at their minima.</li><li>What each cost implies for a decision.</li></ul>'
      },

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Costs are not just definitions – together they form the <strong>diagnostic toolkit</strong> for nearly every business decision a firm has to take.' },

      conclusion: { title: 'Big idea', text: 'Cost is not a single number — TR, AC, MC, AFC and AVC each play a distinct role. The trick is matching the right one to the right question.' },
      examEdge: 'In exam answers, define the measure, use the correct diagram or formula, then explain the business implication. That is the structure of a top cost answer.'
    }
  ]
};
