/* ============================================================
   ECONOS – Short-run Aggregate Supply (Edexcel A 2.3.2)
   6 cards · ad-interactive template · interactive-first design
   Split from the legacy `aggregate-supply` topic on 2026-06-05;
   rebuilt to a full 6-card visual lesson on 2026-06-05.

   Card patterns (no two consecutive repeat):
     1 Decompose a diagram   – big-picture SRAS, points A→B→C
     2 Sequential flow chain  – why SRAS slopes up (profit story)
     3 Decompose a diagram   – spare capacity vs bottleneck zones
     4 Interactive multi-state – increase vs decrease shifts
     5 Side-by-side (Cl/K)    – cost shock → stagflation
     6 Evidence-then-verdict  – the SRAS exam toolkit
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'short-run-aggregate-supply',
  topicNum: '2.3.2',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Short-run Aggregate Supply',
  estTime: '14 min',
  goal: 'Read the SRAS curve, explain its slope, and map every cost driver to a left or right shift.',

  intro: {
    heroKey: 'heroAggSupply',
    summary: 'Short-run aggregate supply (SRAS) shows the total output firms are willing to produce at each price level while some costs are still sticky. It slopes upward, flattens where there is spare capacity and steepens near full capacity, and it shifts whenever costs or productivity change at every price level.',
    doInThis: 'Read the curve point by point, explain why it slopes up, separate a movement from a shift, and trace a cost shock through to stagflation.',
    outcomes: [
      'Explain why SRAS slopes upward in the short run',
      'Distinguish a movement along SRAS from a shift of SRAS',
      'Map every spec cost driver to a left or right shift',
      'Diagnose a supply shock and its stagflation outcome'
    ],
    tip: 'When in doubt, ask: does this change firms’ costs at every price level? If yes, it shifts SRAS. If it is just the price level moving, it is a movement along SRAS.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 14 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [

    /* ====================================================================
       CARD 1 – SRAS, the big picture (Decompose a diagram)
       ==================================================================== */
    {
      id: 'sras-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'SRAS – the big picture',
      lede: 'Short-run aggregate supply shows the total output firms are willing to produce at different price levels in the short run.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: '<strong>SRAS</strong> slopes upward because higher prices can make extra output more profitable in the short run.' },

      interactiveDiagram: {
        svgKey: 'srasBigPicture',
        label: 'WHAT SRAS SHOWS',
        emoji: '📈',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'Point A', show: ['idl-1'], tone: 'blue',
            head: 'A – lower price level, lower real output.',
            body: ['At a low price level P₁, firms supply a small amount of output Y₁.', 'Profit margins are modest, so there is little incentive to push output higher.'],
            analysis: 'Point A sits low on the curve. Read it as “at low prices, firms choose to supply little” – the bottom of the willingness-to-produce range.'
          },
          {
            label: 'Point B', show: ['idl-1', 'idl-2'], tone: 'blue',
            head: 'B – medium price level, medium real output.',
            body: ['A higher price level P₂ lets firms charge more while many costs are still sticky.', 'Wider margins draw out more output, so the economy moves up to Y₂.'],
            analysis: 'Moving from A to B is a <strong>movement along</strong> SRAS, not a shift. The same curve maps each price level to the output firms willingly supply.'
          },
          {
            label: 'Point C', show: ['idl-1', 'idl-2', 'idl-3'], tone: 'blue',
            head: 'C – higher price level, higher real output.',
            body: ['At P₃ the curve is steeper: firms are near capacity, so the same price rise buys less extra output.', 'Output Y₃ is high but getting harder to lift further.'],
            analysis: 'Moving up the curve means a <strong>higher price level</strong> and <strong>more real output</strong> supplied – but the gain in output shrinks as the economy nears full capacity.'
          }
        ]
      },

      causesLabel: 'BREAK DOWN THE NAME',
      causesEmoji: '🧩',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',  icon: '🌐', head: 'Aggregate', body: 'Total output in the whole economy, not one firm or market.' },
        { tone: 'green', icon: '🏭', head: 'Supply', body: 'The output firms are <em>willing</em> to produce.' },
        { tone: 'amber', icon: '⏱️', head: 'Short run', body: 'A period where some costs are fixed or sticky.' }
      ],

      causes2Label: 'WHY THE SHORT RUN MATTERS',
      causes2Emoji: '👥',
      causes2Cols: 3,
      causes2: [
        { tone: 'purple', icon: '📝', head: 'Sticky wages', body: 'Money wages are often fixed by contracts for months at a time.' },
        { tone: 'purple', icon: '🏷️', head: 'Sticky prices', body: 'Some input prices do not adjust instantly when demand changes.' },
        { tone: 'purple', icon: '⏰', head: 'A response lag', body: 'Firms can respond before all of their costs fully catch up.' }
      ],

      conclusion: { title: 'Big idea', text: 'SRAS is about willingness to produce at each price level, not the economy’s absolute maximum capacity.' },
      examEdge: 'Define SRAS clearly as <strong>planned real output at different price levels in the short run</strong>.'
    },

    /* ====================================================================
       CARD 2 – Why SRAS slopes up (Sequential flow chain)
       ==================================================================== */
    {
      id: 'sras-slope',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'Why SRAS slopes up',
      lede: 'In the short run, a rise in the price level can make extra output worth producing because some costs are slow to rise.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'If output prices rise faster than sticky costs, <strong>profit per unit rises</strong> and firms expand output.' },

      flowTitle: 'THE CAUSAL CHAIN',
      flowEmoji: '🔗',
      flowSep: '→',
      flow: [
        { tone: 'blue',   icon: '💷', title: 'Price level rises', sub: 'Overall prices in the economy go up.' },
        { tone: 'blue',   icon: '📈', title: 'Selling prices rise', sub: 'Firms can charge more for output.' },
        { tone: 'amber',  icon: '🔒', title: 'Costs are sticky', sub: 'Wages and some costs rise little or not at once.' },
        { tone: 'green',  icon: '📊', title: 'Profit rises, output rises', sub: 'Firms expand production.' }
      ],

      interactiveDiagram: {
        svgKey: 'srasCurveStatic',
        label: 'MOVEMENT ALONG SRAS',
        emoji: '📊',
        layers: ['idl-1', 'idl-2'],
        views: [
          {
            label: 'Point A', show: ['idl-1'], tone: 'blue',
            head: 'Start at A.',
            body: ['At price level P₁ firms supply Y₁.', 'Wages and production costs are sticky – they have not yet risen.'],
            analysis: 'Costs are fixed in the short run, so price and output sit at the lower-left of the curve.'
          },
          {
            label: 'Movement to B', show: ['idl-1', 'idl-2'], tone: 'blue',
            head: 'Price rises – output rises too.',
            body: ['The price level rises to P₂ while costs lag behind.', 'Wider margins encourage firms to produce more – moving up to B at Y₂.'],
            analysis: 'This is a <strong>movement along</strong> SRAS. The slope itself comes from sticky costs making short-run supply responsive to price.'
          }
        ]
      },

      pairLabel: 'THE PROFIT STORY',
      pairEmoji: '⚖️',
      pairFirst: false,
      left: {
        tone: 'blue', icon: '💷', iconStyle: 'circle',
        label: 'Before',
        text: '<table style="width:100%;border-collapse:collapse;font-size:13.5px;color:#0B1426;"><tr><td style="padding:6px 0;">Selling price</td><td style="text-align:right;font-weight:800;">£10</td></tr><tr><td style="padding:6px 0;border-top:1px dashed #BFDBFE;">Unit cost</td><td style="text-align:right;font-weight:800;border-top:1px dashed #BFDBFE;">£8</td></tr><tr><td style="padding:6px 0;border-top:1px dashed #BFDBFE;font-weight:800;color:#1D4ED8;">Profit per unit</td><td style="text-align:right;font-weight:900;color:#1D4ED8;border-top:1px dashed #BFDBFE;">£2</td></tr></table>'
      },
      right: {
        tone: 'green', icon: '📈', iconStyle: 'circle',
        label: 'After price level rises',
        text: '<table style="width:100%;border-collapse:collapse;font-size:13.5px;color:#0B1426;"><tr><td style="padding:6px 0;">Selling price</td><td style="text-align:right;font-weight:800;">£12</td></tr><tr><td style="padding:6px 0;border-top:1px dashed #86EFAC;">Unit cost</td><td style="text-align:right;font-weight:800;border-top:1px dashed #86EFAC;">£9</td></tr><tr><td style="padding:6px 0;border-top:1px dashed #86EFAC;font-weight:800;color:#059669;">Profit per unit</td><td style="text-align:right;font-weight:900;color:#059669;border-top:1px dashed #86EFAC;">£3</td></tr></table>'
      },

      bottomTip: { icon: '✅', tone: 'green', text: 'Higher prices can raise real output supplied when <strong>profit incentives strengthen</strong>.' },

      causes2Label: 'WHY IT IS NOT VERTICAL',
      causes2Emoji: '📉',
      causes2Cols: 3,
      causes2: [
        { tone: 'purple', icon: '🎛️', head: 'Spare capacity exists', body: 'Machines, workers and stock can be used more intensively.' },
        { tone: 'purple', icon: '👥', head: 'Firms can do more', body: 'They can hire more labour or run machines harder in the short run.' },
        { tone: 'purple', icon: '📈', head: 'Costs catch up later', body: 'Stickiness does not last forever, so the curve slopes up rather than staying flat.' }
      ],

      conclusion: { title: 'Big idea', text: 'The upward slope comes from sticky costs and changing profit incentives in the short run.' },
      examEdge: 'Use the chain <strong>price level up → profit up → output up</strong> when explaining the slope of SRAS.'
    },

    /* ====================================================================
       CARD 3 – Spare capacity and bottlenecks (Decompose a diagram)
       ==================================================================== */
    {
      id: 'sras-spare-capacity',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'Spare capacity and bottlenecks',
      lede: 'The SRAS curve is often flatter when spare capacity is plentiful and steeper when the economy nears full capacity.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'At low output, firms can expand fairly easily. Near capacity, extra output becomes <strong>harder and more inflationary</strong>.' },

      interactiveDiagram: {
        svgKey: 'srasZones',
        label: 'READING THE CURVE',
        emoji: '📈',
        layers: ['idl-1', 'idl-2'],
        views: [
          {
            label: 'Spare capacity', show: ['idl-1'], tone: 'green',
            head: 'The flat green range – spare capacity.',
            body: ['With idle labour and unused machines, firms can raise output without bidding up costs much.', 'A small rise in the price level brings a <strong>large</strong> rise in real output.'],
            analysis: 'When resources are underused the curve is gentle: output responds strongly and the price level barely moves. This is the comfortable place for demand stimulus.'
          },
          {
            label: 'Bottlenecks', show: ['idl-1', 'idl-2'], tone: 'amber',
            head: 'The steep orange range – bottlenecks.',
            body: ['Near full capacity, shortages, overtime and capacity pressure appear.', 'Now the same price rise buys only a <strong>small</strong> rise in output – most of the pressure shows up as inflation.'],
            analysis: 'As bottlenecks bite, the price level rises faster than output. The closer the economy is to full capacity, the more an AD increase leaks into inflation rather than growth.'
          }
        ]
      },

      pairLabel: 'TWO DIFFERENT RESPONSES',
      pairEmoji: '👥',
      left: {
        tone: 'green', icon: 'A', iconStyle: 'circle',
        label: 'Early on the curve',
        points: ['Price level rises a little.', 'Real output rises a lot.', 'Spare capacity absorbs demand.']
      },
      right: {
        tone: 'amber', icon: 'B', iconStyle: 'circle',
        label: 'Later on the curve',
        points: ['Price level rises a little.', 'Real output rises only a little.', 'Capacity pressure feeds inflation.']
      },

      causes2Label: 'WHY THIS MATTERS',
      causes2Emoji: '💡',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose',   icon: '📈', head: 'Inflation risk near capacity', body: 'Adding output becomes costlier, pushing prices up faster.' },
        { tone: 'purple', icon: '🏛️', head: 'Prices over output', body: 'Stimulus can overheat demand and raise prices more than output when capacity is tight.' },
        { tone: 'blue',   icon: '🎯', head: 'Context matters', body: 'The same AD rise has different effects depending on where the economy sits on SRAS.' }
      ],

      conclusion: { title: 'Big idea', text: 'SRAS is often gentle when resources are underused and steeper when bottlenecks appear.' },
      examEdge: 'When judging an AD increase, say where the economy is on SRAS – <strong>spare capacity</strong> or <strong>near full capacity</strong>.'
    },

    /* ====================================================================
       CARD 4 – Shifts in SRAS (Interactive multi-state)
       ==================================================================== */
    {
      id: 'sras-shifts',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'Shifts in SRAS',
      lede: 'When production conditions change, the whole short-run aggregate supply curve shifts left or right.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'A <strong>cost or productivity change shifts SRAS</strong>. A price level change causes a <strong>movement along</strong> SRAS.' },

      interactiveDiagram: {
        svgKey: 'srasShiftDirections',
        label: 'INCREASE AND DECREASE',
        emoji: '📊',
        layers: ['inc', 'dec', 'sras1-dash'],
        inverseLayers: ['sras1-solid'],
        views: [
          {
            label: 'Start', show: [], tone: 'blue',
            head: 'Base equilibrium at E₁.',
            body: ['AD meets SRAS₁ at E₁, fixing the price level P₁ and real output Y₁.', 'Hold AD still and change firms’ costs to see the curve move.'],
            analysis: 'SRAS₁ is the reference. A shift moves the whole curve sideways, giving a new equilibrium where it crosses the unchanged AD.'
          },
          {
            label: 'Increase in SRAS', show: ['inc', 'sras1-dash'], tone: 'green',
            head: 'SRAS shifts right to SRAS₂.',
            body: ['Lower costs or higher productivity make every output level cheaper to produce.', 'The new equilibrium E₂ sits at a <strong>lower price level</strong> and <strong>higher real output</strong>.'],
            analysis: 'A rightward shift is the good news case: more output at every price level, easing inflation while supporting growth.'
          },
          {
            label: 'Decrease in SRAS', show: ['dec', 'sras1-dash'], tone: 'rose',
            head: 'SRAS shifts left to SRAS₃.',
            body: ['Higher costs make every output level more expensive to produce.', 'The new equilibrium E₃ sits at a <strong>higher price level</strong> and <strong>lower real output</strong>.'],
            analysis: 'A leftward shift is the supply-shock case: higher prices and lower output together – the seed of stagflation, covered next.'
          }
        ]
      },

      pairLabel: 'NOT A MOVEMENT',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue', icon: '↔️', iconStyle: 'circle',
        label: 'Movement along SRAS',
        points: ['Caused by a change in the price level.', 'Stay on the same SRAS curve.', 'Price level changes → real output changes.']
      },
      right: {
        tone: 'green', icon: '→', iconStyle: 'circle',
        label: 'Shift of SRAS',
        points: ['Caused by changes in costs, productivity or taxes.', 'The entire SRAS curve moves.', 'Real output at every price level changes.']
      },

      causesLabel: 'COMMON DRIVERS',
      causesEmoji: '⚙️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '🏷️', head: 'Input costs', body: 'Higher input costs shift SRAS left; lower input costs shift it right.' },
        { tone: 'green',  icon: '📈', head: 'Productivity', body: 'Higher productivity shifts SRAS right; lower productivity shifts it left.' },
        { tone: 'amber',  icon: '🏛️', head: 'Indirect taxes & subsidies', body: 'Higher taxes shift SRAS left; subsidies shift it right.' },
        { tone: 'purple', icon: '⚡', head: 'Supply shocks', body: 'Events like natural disasters or pandemics can shift SRAS left.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A <strong>right shift</strong> means more real output at every price level. A <strong>left shift</strong> means less.' },

      conclusion: { title: 'Big idea', text: 'SRAS shifts when firms become more or less willing to produce across the whole price-level range.' },
      examEdge: 'Always state whether the question describes a <strong>movement along SRAS</strong> or a <strong>shift of SRAS</strong> before you explain the outcome.'
    },

    /* ====================================================================
       CARD 5 – Costs, shocks and stagflation (Side-by-side Cl/K)
       Reuses the rich Classical-vs-Keynesian cost-shock interactive.
       ==================================================================== */
    {
      id: 'sras-shocks',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'Costs, shocks and stagflation',
      lede: 'Changes in costs and productivity shift SRAS, affecting both real output and the price level.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'A <strong>negative supply shock</strong> shifts SRAS left – pushing inflation up and real output down.' },

      interactiveDiagram: {
        svgKey: 'srasShiftLeftClassicalKeynesian',
        label: 'COST SHOCK – SRAS SHIFTS LEFT',
        emoji: '📊',
        layers: ['c-sras1-dash', 'c-sras2', 'c-e2', 'c-cost-arrow', 'k-as1-dash', 'k-as2', 'k-e2', 'k-cost-arrow'],
        inverseLayers: ['c-sras1-solid', 'k-as1-solid'],
        perspectives: ['classical', 'keynesian'],
        perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
        views: [
          {
            label: 'Base equilibrium', show: [],
            classical: {
              tone: 'purple',
              head: 'Classical view – at potential at E₁.',
              body: ['AD meets SRAS₁ on the <strong>vertical LRAS</strong> at E₁ – output at potential Yf, price level P₁.', 'Both labour and goods markets clear in the long run.'] },
            keynesian: {
              tone: 'amber',
              head: 'Keynesian view – near capacity at E₁.',
              body: ['AD meets the reverse-L AS₁ on its <strong>steep range</strong> near capacity Yf, at E₁ with price level P₁.', 'The price floor – set by unit costs – sits below P₁.'] }
          },
          {
            label: 'Cost shock',
            show: ['c-sras1-dash', 'c-sras2', 'c-cost-arrow', 'k-as1-dash', 'k-as2', 'k-cost-arrow'],
            classical: {
              tone: 'rose',
              head: 'SRAS shifts left to SRAS₂.',
              body: ['Higher unit costs – wages, energy, raw materials, import prices – make every output level more expensive to produce.', 'The whole SRAS curve slides <strong>up-and-left</strong> in a parallel shift to SRAS₂.'] },
            keynesian: {
              tone: 'rose',
              head: 'The price floor rises (AS₁ → AS₂).',
              body: ['Cost rises lift the reverse-L’s <strong>price floor</strong> – costs at every output level have gone up.', 'Capacity Yf is unchanged: the vertical wall stays put, but the horizontal floor moves up.'] }
          },
          {
            label: 'Stagflation',
            show: ['c-sras1-dash', 'c-sras2', 'c-e2', 'c-cost-arrow', 'k-as1-dash', 'k-as2', 'k-e2', 'k-cost-arrow'],
            classical: {
              tone: 'rose',
              head: 'Short-run stagflation at E₂.',
              body: ['New equilibrium E₂: <strong>P₂ &gt; P₁ AND Y₂ &lt; Yf</strong> – higher prices, lower output, the defining feature of a supply shock.', 'A recessionary gap (Yf − Y₂) opens up.'],
              analysis: 'Classical verdict: the stagflation is a <em>short-run</em> position. Because Y₂ &lt; Yf, unemployment rises and wage pressure eases – SRAS gradually slides back rightward toward SRAS₁, returning the economy to Yf at the original price level P₁. The cost of disinflation is patience, not policy.' },
            keynesian: {
              tone: 'rose',
              head: 'Stagflation at E₂.',
              body: ['E₂ sits up-and-left of E₁: <strong>P₂ &gt; P₁, Y₂ &lt; Y₁</strong> – higher prices, lower output simultaneously.', 'Real output is now further below capacity Yf.'],
              analysis: 'Keynesian verdict: with <strong>sticky wages and prices</strong>, the higher cost floor is persistent. The stagflation does <em>not</em> self-correct – the economy stays at E₂ until policy acts. And the policy is hard: tightening AD fights inflation but deepens the output loss; loosening AD supports output but embeds the higher price level.' }
          }
        ]
      },

      causesLabel: 'WHAT CAN SHIFT SRAS',
      causesEmoji: '⚙️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'amber',  icon: '🔥', head: 'Energy & raw-material prices', body: 'Higher input prices raise production costs.' },
        { tone: 'blue',   icon: '👥', head: 'Wages & labour costs', body: 'Higher wages increase the cost of production.' },
        { tone: 'purple', icon: '🏛️', head: 'Indirect tax & subsidy changes', body: 'Taxes raise costs; subsidies lower them.' },
        { tone: 'green',  icon: '🤖', head: 'Technology & productivity', body: 'Better technology lowers costs and raises productive capacity.' }
      ],

      flowTitle: 'WHY STAGFLATION MATTERS',
      flowEmoji: '⚠️',
      flowSep: '→',
      flow: [
        { tone: 'rose',   icon: '📈', title: 'Inflation rises', sub: 'Higher costs push the price level up.' },
        { tone: 'amber',  icon: '📊', title: 'Real growth weakens', sub: 'Higher costs reduce real output and growth.' },
        { tone: 'purple', icon: '⚖️', title: 'Policy becomes awkward', sub: 'Tight policy fights inflation but can hurt growth more.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Cost-push inflation may <strong>worsen</strong> the inflation–unemployment trade-off.' },

      conclusion: { title: 'Big idea', text: 'SRAS links the supply side of the economy to both inflation and real output.' },
      examEdge: 'Use the phrase <strong>negative supply shock</strong> or <strong>cost-push inflation</strong> when higher costs shift SRAS left.'
    },

    /* ====================================================================
       CARD 6 – The SRAS exam toolkit (Evidence-then-verdict)
       ==================================================================== */
    {
      id: 'sras-exam-toolkit',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The SRAS exam toolkit',
      lede: 'SRAS helps explain price-level changes, real-output changes, spare capacity, cost shocks and short-run inflation pressure.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'One curve – <strong>many exam uses</strong>.' },

      causesLabel: 'WHAT SRAS CAN SHOW',
      causesEmoji: '💼',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '📈', head: 'Short-run output response', body: 'How real output changes in the short run.' },
        { tone: 'green',  icon: '💷', head: 'Profit incentives', body: 'How higher prices affect firm profitability.' },
        { tone: 'amber',  icon: '🎛️', head: 'Spare capacity', body: 'Whether resources are fully used.' },
        { tone: 'purple', icon: '🏭', head: 'Bottlenecks', body: 'Supply constraints that limit output.' },
        { tone: 'blue',   icon: '⛈️', head: 'Supply shocks', body: 'How shocks shift the SRAS curve.' },
        { tone: 'green',  icon: '💷', head: 'Cost-push inflation', body: 'How higher costs raise the price level.' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '⚠️',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '🚫', head: 'Confusing SRAS with demand', body: 'SRAS shows supply, not willingness to buy.' },
        { tone: 'rose', icon: '↔️', head: 'Movement vs shift', body: 'Movement = along the curve. Shift = the curve moves.' },
        { tone: 'rose', icon: '≈', head: 'Treating SRAS as LRAS', body: 'SRAS is short run and can shift; LRAS behaves differently.' }
      ],

      flowTitle: 'HOW TO WRITE IT',
      flowEmoji: '📝',
      flowSep: '→',
      flow: [
        { tone: 'blue',   icon: '1', title: 'Identify', sub: 'Movement or shift? Be clear which.' },
        { tone: 'green',  icon: '2', title: 'Explain', sub: 'State the determinant and direction.' },
        { tone: 'purple', icon: '3', title: 'Link', sub: 'Say what happens to output and the price level.' },
        { tone: 'amber',  icon: '4', title: 'Judge', sub: 'Mention spare capacity, time horizon and inflation pressure.' }
      ],

      causes3Label: 'USEFUL PHRASES',
      causes3Emoji: '💬',
      causes3Cols: 4,
      causes3Style: 'plain-white',
      causes3: [
        { tone: 'blue', icon: '“”', head: 'sticky costs', body: '' },
        { tone: 'blue', icon: '“”', head: 'cost-push inflation', body: '' },
        { tone: 'blue', icon: '“”', head: 'negative supply shock', body: '' },
        { tone: 'blue', icon: '“”', head: 'spare capacity', body: '' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'SRAS is most powerful when linked to <strong>AD, inflation and real growth</strong> in one causal chain.' },

      conclusion: { title: 'Big idea', text: 'If you can read SRAS well, you can explain a large part of macroeconomics in the short run.' },
      examEdge: 'Top answers say whether the economy has <strong>spare capacity</strong>, whether SRAS <strong>moves or shifts</strong>, and what happens to both <strong>inflation and real GDP</strong>.'
    }

  ]
};
