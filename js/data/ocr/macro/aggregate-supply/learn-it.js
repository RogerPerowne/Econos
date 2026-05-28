/* ============================================================
   ECONOS – content data for agg_supply
   8 cards · OCR variant · OCR H460 Component 2 § 1.3
   ─────────────────────────────────────────────────────────────
   OCR 1.3 covers AS in three steps: (a) AS, (b) the
   relationship between AS and price level in the short and
   long run (diagram), (c) shifts in the AS curve in the short
   and long run. OCR 2.8 then adds the Keynesian vs neo-
   classical approach to AS (diagram) alongside the Phillips
   Curve. Layout + diagrams identical to the Edexcel A
   baseline; copy retunes to OCR's evaluate-verb mark-scheme.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'aggregate-supply',
  topicNum: '1.3',
  theme: 'Component 2 · Macroeconomics',
  title: 'Aggregate Supply',
  estTime: '20 min',
  goal: 'Master SRAS, LRAS and the Classical vs Keynesian debate',

  intro: {
    heroKey: 'heroAggSupply',
    summary: 'Aggregate supply determines how much the economy can produce. SRAS responds to short-run cost conditions while LRAS reflects the economy\'s long-run productive capacity. The Classical vs Keynesian debate about LRAS shape drives everything from fiscal policy to growth strategy.',
    doInThis: 'Work through SRAS and LRAS curves, their shifts and policy implications. Compare demand-side and supply-side approaches. Finish with evaluation tools for exam essays.',
    outcomes: [
      'Explain why SRAS slopes upward and what shifts it',
      'Distinguish Classical and Keynesian views of LRAS',
      'Apply SRAS and LRAS shifts to macro equilibrium',
      'Evaluate supply-side policies against demand-side stimulus'
    ],
    tip: 'Draw the diagram as you go – seeing SRAS, LRAS, and AD interact makes the logic stick.',
    stages: [
      { num: 1, name: 'Learn',  sub: '8 cards \xb7 20 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 – What is Aggregate Supply? ----- */
    {
      id: 'what-is-as',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 8',
      title: 'What is Aggregate Supply?',
      lede: 'Aggregate supply (AS) is the total output firms in the economy are willing and able to produce at each price level.\nAS has two time horizons – SRAS in the short run and LRAS in the long run.',

      tip: { icon: '✅', tone: 'green', text: 'AS is about economy-wide output, not the supply of one product.' },

      causesFirst: true,
      causesLabel: 'THE CORE IDEA',
      causesEmoji: '💡',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '📊', head: 'Aggregate supply',  body: 'The total planned output at each price level across the whole economy.' },
        { tone: 'amber',  icon: '📈', head: 'SRAS',              body: 'Short run aggregate supply. Upward sloping – as prices rise, firms supply more. Costs can be sticky.' },
        { tone: 'purple', icon: '🏛️', head: 'LRAS',              body: 'Long run aggregate supply. Vertical at productive capacity (Yf). Prices do not change LRAS.' }
      ],

      interactiveDiagram: {
        svgKey: 'srasLrasIntro',
        label: 'THE BASIC DIAGRAM',
        emoji: '📊',
        layers: ['idl-1', 'idl-2'],
        views: [
          {
            label: 'SRAS',
            show: ['idl-1'],
            tone: 'blue',
            head: 'SRAS slopes upward.',
            body: ['Higher prices improve profit margins when wages are sticky.', 'Firms increase output in the short run as the price level rises.'],
            analysis: 'The upward slope reflects sticky costs – wages and supply contracts adjust slowly, so rising prices temporarily boost profit margins and output.'
          },
          {
            label: 'SRAS + LRAS',
            show: ['idl-1', 'idl-2'],
            tone: 'purple',
            head: 'LRAS is vertical at full-capacity output (Yf).',
            body: ['In the long run, all costs adjust. Output is determined by productive capacity.', 'The economy returns to Yf regardless of price level changes.'],
            analysis: 'Where SRAS crosses LRAS marks the long-run equilibrium at P₁ and Yf – the economy\'s maximum sustainable output.'
          }
        ]
      },

      pairLabel: 'SRAS VS LRAS',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue', icon: '📈', iconStyle: 'circle',
        label: 'SRAS',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Affected by wages, energy prices, taxes, import costs, productivity.</p>'
      },
      right: {
        tone: 'purple', icon: '🏛️', iconStyle: 'circle',
        label: 'LRAS',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Determined by labour, capital, technology, productivity and efficiency.</p>'
      },

      whyItMatters: {
        title: 'WHY IT MATTERS',
        emoji: '🎯',
        items: [
          { tone: 'blue',   icon: '📈', label: 'Inflation shocks', text: 'SRAS explains short-run cost-push inflation.' },
          { tone: 'amber',  icon: '📊', label: 'Growth potential', text: 'LRAS explains the economy\'s long-run capacity ceiling.' },
          { tone: 'green',  icon: '🔍', label: 'Diagnosis tool',   text: 'Together they help identify whether rising prices come from demand or supply.' }
        ]
      },

      conclusion: { title: 'Big idea', text: 'Short-run changes affect costs and inflation. Long-run changes affect the economy\'s productive capacity.' },
      examEdge: 'Strong essays distinguish movements along SRAS from shifts in SRAS – and they separate short-run supply conditions from long-run capacity.'
    },

    /* ----- CARD 2 – The SRAS curve ----- */
    {
      id: 'sras-curve',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'The SRAS curve',
      lede: 'Short-run aggregate supply (SRAS) slopes upward because many costs are sticky in the short run. When the general price level rises faster than firms\' costs, profit margins improve and firms increase output.',

      tip: { icon: '✅', tone: 'green', text: 'Higher prices can raise output in the short run because some costs adjust slowly.' },

      flowTitle: 'WHY SRAS SLOPES UPWARD',
      flowEmoji: '📈',
      flow: [
        { tone: 'blue',   icon: '£',  title: 'The general price level rises.' },
        { tone: 'amber',  icon: '🔒', title: 'Wages and some costs are sticky in the short run.' },
        { tone: 'green',  icon: '📊', title: 'Profit margins improve and firms produce more.' }
      ],

      interactiveDiagram: {
        svgKey: 'srasCurveStatic',
        label: 'THE SRAS DIAGRAM',
        emoji: '📊',
        layers: ['idl-1', 'idl-2'],
        views: [
          {
            label: 'Point A',
            show: ['idl-1'],
            tone: 'blue',
            head: 'Initial equilibrium at A.',
            body: ['At price level P₁, firms supply Y₁.', 'Wages and production costs are sticky – they have not yet risen.'],
            analysis: 'Point A is the starting position. Costs are fixed in the short run, so price and output sit at the lower-left of the curve.'
          },
          {
            label: 'Movement to B',
            show: ['idl-1', 'idl-2'],
            tone: 'blue',
            head: 'Price rises – output rises too.',
            body: ['The price level rises to P₂. Revenue increases but costs remain fixed short-term.', 'Higher profit margins encourage firms to produce more – moving up to B at Y₂.'],
            analysis: 'This is a movement along SRAS, not a shift. The slope reflects sticky costs making short-run supply responsive to price changes.'
          }
        ]
      },

      causesLabel: 'WHAT SHIFTS SRAS?',
      causesEmoji: '⚙️',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'purple', icon: '👥', head: 'Wages',                    shiftArrows: [{ dir: 'left', text: 'Rise in wages shifts SRAS left' }, { dir: 'right', text: 'Fall in wages shifts SRAS right' }] },
        { tone: 'amber',  icon: '⚡', head: 'Energy prices',            shiftArrows: [{ dir: 'left', text: 'Rise in energy prices shifts SRAS left' }, { dir: 'right', text: 'Fall in energy prices shifts right' }] },
        { tone: 'purple', icon: '📦', head: 'Raw material costs',       shiftArrows: [{ dir: 'left', text: 'Rise in raw material costs shifts SRAS left' }, { dir: 'right', text: 'Fall shifts SRAS right' }] },
        { tone: 'green',  icon: '📈', head: 'Productivity',             shiftArrows: [{ dir: 'right', text: 'Rise in productivity shifts SRAS right' }, { dir: 'left', text: 'Fall in productivity shifts left' }] },
        { tone: 'blue',   icon: '🌍', head: 'Import costs via exchange rate', shiftArrows: [{ dir: 'left', text: 'Currency depreciation raises import costs – shifts SRAS left' }, { dir: 'right', text: 'Appreciation shifts SRAS right' }] },
        { tone: 'amber',  icon: '🏛️', head: 'Indirect taxes / subsidies', shiftArrows: [{ dir: 'left', text: 'Rise in indirect taxes shifts SRAS left' }, { dir: 'right', text: 'Subsidies shift SRAS right' }] }
      ],

      pairLabel: 'LEFT OR RIGHT?',
      pairEmoji: '⚖️',
      left: {
        tone: 'rose', icon: '←', iconStyle: 'circle',
        label: 'Left shift',
        points: ['Costs rise at every price level.', 'Output falls.', 'Inflation rises.']
      },
      right: {
        tone: 'green', icon: '→', iconStyle: 'circle',
        label: 'Right shift',
        points: ['Costs fall or productivity rises.', 'Output rises.', 'Inflation eases.']
      },

      conclusion: { title: 'Big idea', text: 'SRAS responds to cost conditions. When costs rise, firms supply less at each price level.' },
      examEdge: 'In macro diagrams, a rise in energy prices shifts SRAS left – it is not a movement along the curve.'
    },

    /* ----- CARD 3 – The LRAS curve ----- */
    {
      id: 'lras-curve',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 8',
      title: 'The LRAS curve',
      lede: 'The long-run aggregate supply (LRAS) curve is vertical at Yf. In the long run, factor prices adjust, so output is determined by real productive capacity rather than the price level.',

      tip: { icon: '✅', tone: 'green', text: 'Long-run output depends on capacity, not on the price level.' },

      interactiveDiagram: {
        svgKey: 'lrasViewsInteractive',
        label: 'TWO VIEWS OF LRAS',
        emoji: '📊',
        layers: ['idl-1', 'idl-2'],
        views: [
          {
            label: 'Classical',
            show: ['idl-1'],
            tone: 'blue',
            head: 'The classical view holds that LRAS is vertical at Yf.',
            body: ['With full flexibility of wages and prices, markets self-adjust.', 'Therefore, in the long run there is no trade-off between inflation and output.']
          },
          {
            label: 'Keynesian',
            show: ['idl-2'],
            tone: 'amber',
            head: 'Keynesians argue LRAS is not vertical in the short run.',
            body: ['When there is spare capacity (range 1), output can rise without much increase in the price level.', 'As the economy nears Yf, inflation pressure rises sharply.']
          }
        ]
      },

      pairLabel: 'CLASSICAL VS KEYNESIAN',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue', icon: '🏛️', iconStyle: 'circle',
        label: 'Classical',
        checks: [
          { term: 'Vertical LRAS', body: 'LRAS is vertical at Yf.' },
          { term: 'Markets self-adjust', body: 'Flexible wages and prices restore equilibrium.' },
          { term: 'Long-run focus', body: 'Emphasis on capacity and money neutrality.' }
        ]
      },
      right: {
        tone: 'amber', icon: '📈', iconStyle: 'circle',
        label: 'Keynesian',
        checks: [
          { term: 'Kinked LRAS', body: 'LRAS has a Keynesian range in the short run.' },
          { term: 'Spare capacity', body: 'Output can expand before inflation bites.' },
          { term: 'Demand conditions', body: 'Short-run demand conditions and unused resources matter.' }
        ]
      },

      causesLast: true,
      causesLabel: 'WHY Yf MATTERS',
      causesEmoji: '🎯',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '🏭', head: 'Productive capacity', body: 'Yf represents the economy\'s maximum sustainable output with resources fully employed.' },
        { tone: 'green',  icon: '📈', head: 'Sustainable growth',  body: 'In the long run, output cannot exceed Yf without higher inflation.' },
        { tone: 'rose',   icon: '⏱️', head: 'Inflation pressure',  body: 'Pushing beyond Yf leads to rising costs, bottlenecks and accelerating inflation.' }
      ],

      conclusion: { title: 'Big idea', text: 'LRAS shows how much the economy can produce sustainably when resources are fully employed.' },
      examEdge: 'Use the Keynesian range when evaluating whether higher AD will raise real output or mostly create inflation.'
    },

    /* ----- CARD 4 – Shifts in SRAS ----- */
    {
      id: 'sras-shifts',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Shifts in SRAS',
      lede: 'A shift in short-run aggregate supply happens when firms\' costs or productivity change at every price level.',

      tip: { icon: '✅', tone: 'green', text: 'SRAS shifts left when costs rise – and right when costs fall or productivity improves.' },

      interactiveDiagram: {
        svgKey: 'srasShiftInteractive',
        label: 'THE INTERACTIVE IDEA',
        emoji: '📊',
        layers: ['idl-1', 'idl-2'],
        views: [
          {
            label: 'Base equilibrium',
            show: [],
            tone: 'slate',
            head: 'The economy at equilibrium.',
            body: ['AD and SRAS₁ intersect at E₁.', 'Price level is P₁, output is Y₁.']
          },
          {
            label: 'Cost shock',
            show: ['idl-1'],
            tone: 'rose',
            head: 'A cost shock shifts SRAS left.',
            body: ['Rising costs – wages, energy, raw materials – make every level of output more expensive.', 'SRAS₂ lies above and to the left of SRAS₁.']
          },
          {
            label: 'New equilibrium',
            show: ['idl-1', 'idl-2'],
            tone: 'rose',
            head: 'Result – stagflation.',
            body: ['P rises from P₁ to P₂ (higher price level).', 'Y falls from Y₁ to Y₂ (lower output).', 'This is the defining feature of a supply shock.']
          }
        ]
      },

      causesLabel: 'SIX SHIFT DRIVERS',
      causesEmoji: '⚙️',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'purple', icon: '👥', head: 'Wages',                    shiftArrows: [{ dir: 'left', text: 'Rise in wages shifts SRAS left' }, { dir: 'right', text: 'Fall in wages shifts SRAS right' }] },
        { tone: 'amber',  icon: '⚡', head: 'Energy prices',            shiftArrows: [{ dir: 'left', text: 'Rise in energy prices shifts SRAS left' }, { dir: 'right', text: 'Fall in energy prices shifts right' }] },
        { tone: 'purple', icon: '📦', head: 'Raw material costs',       shiftArrows: [{ dir: 'left', text: 'Rise in raw material costs shifts SRAS left' }, { dir: 'right', text: 'Fall shifts SRAS right' }] },
        { tone: 'green',  icon: '📈', head: 'Productivity',             shiftArrows: [{ dir: 'right', text: 'Rise in productivity shifts SRAS right' }, { dir: 'left', text: 'Fall in productivity shifts left' }] },
        { tone: 'blue',   icon: '🌍', head: 'Import costs via exchange rate', shiftArrows: [{ dir: 'left', text: 'Currency depreciation raises import costs – shifts SRAS left' }, { dir: 'right', text: 'Appreciation shifts SRAS right' }] },
        { tone: 'amber',  icon: '🏛️', head: 'Indirect taxes / subsidies', shiftArrows: [{ dir: 'left', text: 'Rise in indirect taxes shifts SRAS left' }, { dir: 'right', text: 'Subsidies shift SRAS right' }] }
      ],

      pairLabel: 'LEFT OR RIGHT?',
      pairEmoji: '⚖️',
      left: {
        tone: 'rose', icon: '←', iconStyle: 'circle',
        label: 'Left shift',
        points: ['Costs rise at every price level.', 'Output falls.', 'Inflation rises.']
      },
      right: {
        tone: 'green', icon: '→', iconStyle: 'circle',
        label: 'Right shift',
        points: ['Costs fall or productivity rises.', 'Output rises.', 'Inflation eases.']
      },

      summaryRow: [
        { tone: 'blue', icon: '📝', title: 'Essay link', text: 'SRAS shifts are central to cost-push inflation and cycle analysis. Always explain the cause, the shift, and the effect on output and the price level.' }
      ],

      conclusion: { title: 'Big idea', text: 'A supply shock changes the economy\'s short-run cost conditions at every price level.' },
      examEdge: 'When output falls and prices rise together, the strongest diagnosis is an adverse SRAS shift rather than demand-pull inflation.'
    },

    /* ----- CARD 5 – Shifts in LRAS ----- */
    {
      id: 'lras-shifts',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Shifts in LRAS',
      lede: 'LRAS shifts when the economy\'s productive capacity changes. A rightward shift means higher sustainable output without needing inflation.',

      tip: { icon: '✅', tone: 'green', text: 'LRAS moves when the economy\'s capacity changes – not when the price level changes.' },

      interactiveDiagram: {
        svgKey: 'lrasShiftDiagram',
        label: 'THE GROWTH DIAGRAM',
        emoji: '📊',
        layers: ['idl-1', 'idl-2'],
        views: [
          {
            label: 'Base equilibrium',
            show: [],
            tone: 'slate',
            head: 'Initial long-run equilibrium.',
            body: ['AD intersects LRAS₁ at E₁.', 'Price level is P₁. Real output is at full capacity Y₁.']
          },
          {
            label: 'LRAS shifts right',
            show: ['idl-1'],
            tone: 'green',
            head: 'Productive capacity expands.',
            body: ['LRAS shifts right to LRAS₂.', 'New full-capacity output is Y₂ – higher than before.']
          },
          {
            label: 'New equilibrium',
            show: ['idl-1', 'idl-2'],
            tone: 'green',
            head: 'Sustainable non-inflationary growth.',
            body: ['AD intersects LRAS₂ at E₂.', 'Real output rises from Y₁ to Y₂. The price level is stable or slightly lower.'],
            analysis: 'A rightward LRAS shift is the supply-side ideal – more output without inflation. This contrasts with a demand-led AD shift, which raises output and prices together.'
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'WHAT SHIFTS LRAS?',
      causesEmoji: '🎯',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '👥', head: 'Labour supply',       body: 'More people available and willing to work.' },
        { tone: 'green', icon: '🏭', head: 'Capital stock',       body: 'More machinery, tools and infrastructure.' },
        { tone: 'green', icon: '💡', head: 'Technology',          body: 'Innovations improve how resources are used.' },
        { tone: 'green', icon: '📈', head: 'Productivity',        body: 'More output produced per unit of input.' },
        { tone: 'green', icon: '🎓', head: 'Education and skills', body: 'A more skilled workforce raises productive capacity.' },
        { tone: 'green', icon: '⚙️', head: 'Deregulation / efficiency', body: 'Lower barriers and red tape improve resource use.' }
      ],

      flowTitle: 'WHY IT MATTERS',
      flowEmoji: '🎯',
      flow: [
        { tone: 'green',  icon: '📈', title: 'More capacity', sub: 'LRAS shifts right.' },
        { tone: 'blue',   icon: '🏭', title: 'Higher potential output', sub: 'The economy can produce more at any given price level.' },
        { tone: 'purple', icon: '🔍', title: 'Stronger long-run growth and lower inflation pressure', sub: 'Sustainable improvements in living standards.' }
      ],

      pairLabel: 'SHORT RUN VS LONG RUN',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue', icon: '⏱️', iconStyle: 'circle',
        label: 'Short run',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">SRAS right shift can lower costs now. Useful to reduce short-term inflation.</p>'
      },
      right: {
        tone: 'amber', icon: '🌄', iconStyle: 'circle',
        label: 'Long run',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">LRAS right shift expands the economy\'s frontier. Sustains growth without creating inflation.</p>'
      },

      conclusion: { title: 'Big idea', text: 'LRAS growth is the supply-side route to rising output without overheating the economy.' },
      examEdge: 'In essays, distinguish sustainable growth from a temporary AD-led boom – LRAS shifts raise capacity, not just spending.'
    },

    /* ----- CARD 6 – Supply-side policies ----- */
    {
      id: 'supply-side-policies',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Supply-side policies',
      lede: 'Supply-side policies aim to raise productive capacity or improve incentives and efficiency. Present both market-based and interventionist approaches.',

      tip: { icon: '✅', tone: 'green', text: 'Supply-side policy targets the economy\'s capacity, costs and efficiency.' },

      causesFirst: true,
      causesLabel: 'MARKET-BASED POLICIES',
      causesEmoji: '🔧',
      causesStyle: 'tinted-flat',
      causesCols: 2,
      causes: [
        { tone: 'blue', icon: '💹', head: 'Tax cuts',               body: 'Lower taxes to raise work incentives and investment. <span style="color:#3B82F6;font-size:11px;font-weight:700;">Fast · Low cost · Mixed evidence</span>' },
        { tone: 'blue', icon: '📋', head: 'Deregulation',           body: 'Remove barriers to entry and reduce red tape. <span style="color:#3B82F6;font-size:11px;font-weight:700;">Fast · Low cost · Mixed evidence</span>' },
        { tone: 'blue', icon: '🏛️', head: 'Privatisation',          body: 'Transfer state ownership to the private sector. <span style="color:#3B82F6;font-size:11px;font-weight:700;">Medium speed · Medium cost · Mixed evidence</span>' },
        { tone: 'blue', icon: '👥', head: 'Flexible labour markets', body: 'Easier hiring and firing to improve labour allocation. <span style="color:#3B82F6;font-size:11px;font-weight:700;">Fast · Low cost · Mixed evidence</span>' }
      ],

      causes2Label: 'INTERVENTIONIST POLICIES',
      causes2Emoji: '🏗️',
      causes2Cols: 2,
      causes2: [
        { tone: 'amber', icon: '🎓', head: 'Education and training', body: 'Improve skills to lift productivity and earning potential. <span style="color:#D97706;font-size:11px;font-weight:700;">Slow · High cost · Strong evidence</span>' },
        { tone: 'amber', icon: '🛣️', head: 'Infrastructure',         body: 'Invest in transport, energy and digital networks. <span style="color:#D97706;font-size:11px;font-weight:700;">Slow · High cost · Strong evidence</span>' },
        { tone: 'amber', icon: '🔬', head: 'R&D subsidies',          body: 'Support research and innovation through grants or tax relief. <span style="color:#D97706;font-size:11px;font-weight:700;">Medium speed · Medium cost · Mixed evidence</span>' },
        { tone: 'amber', icon: '🏭', head: 'Industrial strategy',    body: 'Target support for strategic sectors and clusters. <span style="color:#D97706;font-size:11px;font-weight:700;">Slow · High cost · Mixed evidence</span>' }
      ],

      pairLabel: 'WHEN EACH WORKS BEST',
      pairEmoji: '🎯',
      left: {
        tone: 'blue', icon: '👥', iconStyle: 'circle',
        label: 'Market-based',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Improves incentives and flexibility.</p>'
      },
      right: {
        tone: 'amber', icon: '👥', iconStyle: 'circle',
        label: 'Interventionist',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Builds human and physical capital.</p>'
      },

      summaryRow: [
        { tone: 'blue',   icon: '⏱️', title: 'Speed',              text: 'Market-based is faster. Interventionist takes time.' },
        { tone: 'amber',  icon: '£',        title: 'Fiscal cost',        text: 'Market-based is cheaper. Interventionist is costlier.' },
        { tone: 'purple', icon: '👥', title: 'Distributional impact', text: 'Market-based can widen gaps. Interventionist can reduce them.' }
      ],

      conclusion: { title: 'Big idea', text: 'The best supply-side strategy depends on the problem – incentives, skills, infrastructure or innovation.' },
      examEdge: 'Strong evaluation avoids saying \'supply-side\' as if it is one policy – split the answer into market-based and interventionist measures.'
    },

    /* ----- CARD 7 – AS in the AD/AS model ----- */
    {
      id: 'as-in-adas',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'AS in the AD/AS model',
      lede: 'Compare supply-side improvements with demand-side stimulus. Both may raise output, but the inflation consequences differ.',

      tip: { icon: '✅', tone: 'green', text: 'The same output gain can come from stronger demand or stronger supply – but the price effect is different.' },

      interactiveDiagram: [
        {
          svgKey: 'adShiftInteractive',
          label: 'DEMAND-SIDE STIMULUS',
          emoji: '📈',
          layers: ['idl-1', 'idl-2'],
          views: [
            { label: 'Base', show: [], tone: 'slate',
              head: 'Initial equilibrium at E₁.',
              body: ['AD and SRAS intersect at E₁.', 'Price level P₁, real output Y₁.'] },
            { label: 'AD shifts right', show: ['idl-1'], tone: 'blue',
              head: 'A demand stimulus shifts AD right to AD₂.',
              body: ['Government spending, tax cuts or looser monetary policy raise demand.', 'The whole AD curve shifts rightward.'] },
            { label: 'New equilibrium', show: ['idl-1', 'idl-2'], tone: 'blue',
              head: 'Output rises – but so does the price level.',
              body: ['The new equilibrium E₂ is higher on SRAS.', 'Y₂ > Y₁ but P₂ > P₁ – demand-pull inflation.'],
              analysis: 'Demand stimulus raises output and the price level together. Near full capacity, most of the boost becomes inflationary rather than productive.' }
          ]
        },
        {
          svgKey: 'srasRightShiftInteractive',
          label: 'SUPPLY-SIDE IMPROVEMENT',
          emoji: '⚙️',
          layers: ['idl-1', 'idl-2'],
          views: [
            { label: 'Base', show: [], tone: 'slate',
              head: 'Initial equilibrium at E₁.',
              body: ['AD and SRAS₁ intersect at E₁.', 'Price level P₁, real output Y₁.'] },
            { label: 'SRAS shifts right', show: ['idl-1'], tone: 'green',
              head: 'A supply-side improvement shifts SRAS right.',
              body: ['Higher productivity, lower costs or better technology cut firms\' costs at every price level.', 'SRAS₂ lies to the right of SRAS₁.'] },
            { label: 'New equilibrium', show: ['idl-1', 'idl-2'], tone: 'green',
              head: 'Output rises – price level stable or lower.',
              body: ['E₂ is to the right of and below E₁.', 'Y₂ > Y₁ and P₂ ≤ P₁ – non-inflationary growth.'],
              analysis: 'Supply-side improvement raises output while keeping inflation in check. This is the key advantage over demand stimulus – especially when the economy is near full capacity.' }
          ]
        }
      ],

      comparisonTable: {
        title: 'COMPARE THE OUTCOMES',
        emoji: '↔️',
        columns: ['Demand-side stimulus', 'Supply-side improvement'],
        columnTones: ['blue', 'green'],
        rows: [
          { label: '📊 Output',         values: ['Rises (AD shift)',               'Rises (capacity expands)'],             highlights: [false, true] },
          { label: '💹 Price level',    values: ['Rises (inflationary)',           'Stable or falling'],                    highlights: [false, true] },
          { label: '📅 Sustainability', values: ['Short-term boost',              'Long-term improvement'],                highlights: [false, true] },
          { label: '⚠️ Inflation risk', values: ['High near full employment',     'Low – capacity expands with output'],   highlights: [false, true] },
          { label: '🎯 Best use',       values: ['Recession / weak demand',       'Capacity constrained / high inflation'], highlights: [false, false] }
        ]
      },

      pairLabel: 'WHEN TO USE WHICH',
      pairEmoji: '🎯',
      left: {
        tone: 'blue', icon: '📉', iconStyle: 'circle',
        label: 'Weak AD and recession',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Demand management can help. Use fiscal or monetary policy to stimulate demand.</p>'
      },
      right: {
        tone: 'green', icon: '⚙️', iconStyle: 'circle',
        label: 'Capacity constraints and inflation pressure',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Supply-side reform is better. Expand productive capacity and remove supply-side bottlenecks.</p>'
      },

      tipLate: { tone: 'blue', icon: 'ℹ️', text: 'Combining both can work best: use demand policy when demand is weak now, but invest in supply-side improvements to raise potential output over time.' },

      conclusion: { title: 'Big idea', text: 'Demand policy changes spending. Supply policy changes capacity. The diagnosis determines the better cure.' },
      examEdge: 'Top essays compare the inflation impact – AD stimulus is more inflationary than supply-side expansion when the economy is close to full employment.'
    },

    /* ----- CARD 8 – Evaluating supply-side policy ----- */
    {
      id: 'evaluating-supply-side',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Evaluating supply-side policy',
      lede: 'Supply-side policy can raise long-run growth, but its success depends on time, cost, politics and context. This is the evaluative card.',

      tip: { icon: '✅', tone: 'green', text: 'Supply-side policy can be powerful – but usually slowly, unevenly and at a cost.' },

      causesFirst: true,
      causesLabel: 'SIX EVALUATION TESTS',
      causesEmoji: '⚖️',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '⏱️', head: '1. Time lags',           body: 'Effects are often very slow. Strengthens evaluation if reforms have long payback periods.' },
        { tone: 'amber',  icon: '£',        head: '2. Funding cost',        body: 'Infrastructure and education are expensive. Weakens if fiscal space is limited.' },
        { tone: 'purple', icon: '👥',  head: '3. Political feasibility', body: 'Reforms create losers as well as winners. Weakens if opposition is strong.' },
        { tone: 'green',  icon: '⚖️',  head: '4. Distributional effects', body: 'Some reforms can be regressive. Weakens if inequality worsens.' },
        { tone: 'blue',   icon: '🔗',  head: '5. Fits demand policy', body: 'Supply-side works best combined with demand management. Strengthens when macro conditions are favourable.' },
        { tone: 'amber',  icon: '🌍',  head: '6. Global context',    body: 'Global conditions matter. Weakens if trading partners also improve their supply-side.' }
      ],

      summaryRow: [
        {
          tone: 'blue',
          icon: '⭐',
          title: 'Overall judgement',
          text: 'Supply-side policy is most effective when it targets binding constraints – such as skills shortages, poor infrastructure or regulatory barriers – and when it is financed sustainably and given time to work.'
        }
      ],

      flow2Title: 'HOW TO JUDGE',
      flow2Emoji: '✅',
      flow2Sep: '→',
      flow2: [
        { tone: 'blue',   icon: '⚡', title: 'Speed',    sub: 'Will it work fast enough?' },
        { tone: 'amber',  icon: '📏', title: 'Scale',    sub: 'Will it be large enough?' },
        { tone: 'green',  icon: '⚖️', title: 'Fairness', sub: 'Who gains and who loses?' },
        { tone: 'purple', icon: '📊', title: 'Evidence', sub: 'What does experience show?' }
      ],

      conclusion: { title: 'Big idea', text: 'The right supply-side policy depends on the bottleneck – skills, incentives, infrastructure, innovation or regulation.' },
      examEdge: 'The strongest judgement balances long-run benefits against short-run limits – especially time lags, cost and distributional trade-offs.',

      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};
