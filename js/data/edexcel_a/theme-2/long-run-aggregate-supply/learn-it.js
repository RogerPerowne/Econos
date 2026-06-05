/* ============================================================
   ECONOS – Long-run Aggregate Supply (Edexcel A 2.3.3)
   6 cards · interactive-first rebuild
   Split from the legacy `aggregate-supply` topic on 2026-06-05;
   rebuilt 2026-06-05 around the LRAS curve itself. Supply-side
   POLICY detail lives in its own dedicated `supply-side-policies`
   topic – this lesson teaches the curve: what it is, why it is
   vertical, what shifts it, how it links to growth, and how to
   use it in the exam. Every diagram is an engine-rendered
   interactive chart; cards 1–3 carry the Classical/Keynesian
   toggle the spec ("Keynesian vs Classical shapes") demands.

   Card patterns (no two consecutive repeat):
     1 Interactive multi-state + decompose  (lrasViewsInteractive · C/K)
     2 Sequential flow chain + interactive   (lrasVerticalInteractive · C/K)
     3 Interactive multi-state + driver grid (lrasShiftRightClassicalKeynesian · C/K)
     4 Sequential flow chain + interactive   (lrasShiftDiagram)
     5 Side-by-side pair (static 2-panel synthesis · lrasDemandVsCapacity)
     6 Evidence-then-verdict (exam toolkit)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'long-run-aggregate-supply',
  topicNum: '2.3.3',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Long-run Aggregate Supply',
  estTime: '13 min',
  goal: 'Read the LRAS curve – its shape, what shifts it, and how it explains long-run growth',

  intro: {
    heroKey: 'heroAggSupply',
    summary: 'Long-run aggregate supply (LRAS) reflects the economy\'s productive capacity once costs have fully adjusted. The Classical view draws LRAS vertical at full employment; the Keynesian view draws a reverse-L. LRAS shifts when the supply-side fundamentals improve – productivity, education and skills, technology, capital, demographics and migration. Read it well and you can explain trend growth, the long-run limits of demand-side policy, and where inflation pressure comes from.',
    doInThis: 'Define LRAS and contrast the Classical and Keynesian shapes, see why it is vertical in the long run, map every capacity factor to a shift, link it to economic growth, and separate a demand change from a capacity change.',
    outcomes: [
      'Distinguish the Classical and Keynesian views of LRAS',
      'Explain why LRAS is vertical in the long run',
      'Identify the factors that shift LRAS and in which direction',
      'Link a rightward LRAS shift to long-run economic growth',
      'Separate a demand-side change from a capacity change'
    ],
    tip: 'LRAS is about capacity, not costs or current demand. If the change moves the economy\'s long-run productive potential, it shifts LRAS.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 13 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – LRAS, the big picture (Interactive multi-state + decompose)
       ==================================================================== */
    {
      id: 'lras-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 7',
      title: 'LRAS – the big picture',
      lede: 'Long-run aggregate supply shows the economy\'s productive capacity – the maximum real output it can sustain when resources are fully employed and productivity is given.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: '<strong>LRAS</strong> is about productive potential, not short-run willingness to produce.' },

      interactiveDiagram: {
        svgKey: 'lrasViewsInteractive',
        label: 'WHAT LRAS LOOKS LIKE',
        emoji: '\u{1F4CA}',
        layers: [],
        perspectives: ['classical', 'keynesian'],
        perspectiveLabels: { classical: 'Classical', keynesian: 'Keynesian' },
        views: [
          {
            label: 'LRAS shape',
            tone: 'slate',
            classical: {
              head: 'The Classical view: LRAS is vertical at Yf.',
              body: ['With flexible wages and prices, markets self-adjust, so long-run output is fixed by capacity alone.', 'Different price levels do not change real output – the curve is a vertical wall at potential output Yf.'],
              analysis: 'Output is determined entirely by capacity. A demand shock changes the price level but not Y in the long run – money is neutral.'
            },
            keynesian: {
              head: 'The Keynesian view: a reverse-L with three ranges.',
              body: ['When there is spare capacity (the flat range), output can rise with little change in the price level.', 'As the economy nears Yf the curve steepens, then becomes vertical at the capacity ceiling.'],
              analysis: 'The shape depends on where the economy sits. Deep in spare capacity, demand mostly raises Y; near capacity, it mostly raises P.'
            }
          }
        ]
      },

      causesLabel: 'WHAT LRAS SHOWS',
      causesEmoji: '\u{1F4C8}',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '\u{1F3F0}', head: 'Vertical at potential output', body: 'In the long run LRAS is vertical because productive capacity is fixed at any moment in time.' },
        { tone: 'blue',  icon: '\u{1F465}', head: 'Full employment, full capacity', body: 'It shows the output produced when all resources are fully and efficiently employed.' },
        { tone: 'purple', icon: '\u{1F4B7}', head: 'Price level does not change it', body: 'Prices can rise or fall, but long-run real output stays at Yf.' }
      ],

      causes2Label: 'BREAK DOWN THE NAME',
      causes2Emoji: '\u{1F9E9}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'blue',  icon: '\u{1F310}', head: 'Aggregate', body: 'Total output of the whole economy, not one firm or market.' },
        { tone: 'green', icon: '\u{1F3ED}', head: 'Supply', body: 'How much firms can produce when resources are fully used.' },
        { tone: 'amber', icon: '\u{23F3}', head: 'Long run', body: 'A horizon long enough for all prices and costs to adjust.' }
      ],

      causes3Label: 'WHY LRAS MATTERS',
      causes3Emoji: '\u{1F3AF}',
      causes3Cols: 3,
      causes3: [
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Economic growth', body: 'A rightward shift in LRAS raises potential output – the supply-side route to trend growth.' },
        { tone: 'amber',  icon: '\u{1F4B9}', head: 'Inflation context', body: 'If demand rises but LRAS does not, the result is inflation pressure, not real growth.' },
        { tone: 'purple', icon: '\u{1F3DB}\u{FE0F}', head: 'Policy focus', body: 'Supply-side policy aims to raise LRAS over time; demand-side policy cannot move it.' }
      ],

      conclusion: { title: 'Big idea', text: 'Long-run economic growth means shifting LRAS to the right.' },
      examEdge: 'Define LRAS as <strong>the economy\'s maximum potential real output when resources are fully employed</strong>.'
    },

    /* ====================================================================
       CARD 2 – Why LRAS is vertical (Sequential flow chain + interactive)
       ==================================================================== */
    {
      id: 'lras-vertical',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 7',
      title: 'Why LRAS is vertical',
      lede: 'In the long run, different price levels do not change potential real output. Wages and other costs adjust to the price level, so only the economy\'s productive capacity decides how much it can produce.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'In the long run, prices can change, but potential real output stays at <strong>Yf</strong>.' },

      flowTitle: 'THE CAUSAL CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '\u{1F4C8}', title: 'AD rises', sub: 'Higher spending lifts demand.' },
        { tone: 'amber',  icon: '\u{1F3F7}\u{FE0F}', title: 'Price level rises', sub: 'Firms can charge more.' },
        { tone: 'blue',   icon: '\u{2699}\u{FE0F}', title: 'Wages and costs adjust', sub: 'Sticky costs do not stay behind forever.' },
        { tone: 'purple', icon: '\u{1F3AF}', title: 'Output returns to Yf', sub: 'Long-run real GDP stays at potential.' }
      ],

      interactiveDiagram: {
        svgKey: 'lrasVerticalInteractive',
        label: 'SAME OUTPUT – DIFFERENT PRICES',
        emoji: '\u{1F4CA}',
        layers: ['v2'],
        inverseLayers: ['ad1c-solid', 'ad1k-solid'],
        perspectives: ['classical', 'keynesian'],
        perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
        views: [
          {
            label: 'Starting point', show: [],
            classical: {
              tone: 'purple',
              head: 'Classical – at potential at E₁.',
              body: ['AD₁ meets the vertical LRAS at E₁: output Yf, price level P₁.', 'In the long run the economy always sits on LRAS.'] },
            keynesian: {
              tone: 'amber',
              head: 'Keynesian – below capacity at E₁.',
              body: ['AD₁ meets the rising range of the reverse-L at E₁ – output Y₁ sits below capacity Yf.', 'There is still spare capacity to draw on.'] }
          },
          {
            label: 'AD rises', show: ['v2'],
            classical: {
              tone: 'rose',
              head: 'AD₁ → AD₂: only the price level rises.',
              body: ['Higher demand cannot push output past the capacity wall. The economy stays at Yf; the price level climbs P₁ → P₂.'],
              analysis: 'Classical verdict: in the long run money is neutral. A demand boost with no extra capacity is <strong>pure inflation</strong> – output is pinned at Yf.' },
            keynesian: {
              tone: 'green',
              head: 'AD₁ → AD₂: output AND prices rise.',
              body: ['With spare capacity, the extra demand is met by idle resources, so Y rises toward Yf and P rises only modestly.', 'The “only-prices” result holds once AD reaches the capacity wall.'],
              analysis: 'Keynesian verdict: LRAS is vertical, but <strong>only AT capacity</strong>. With spare capacity, demand still does real work – the vertical-only-prices story is the special case, not the general one.' }
          }
        ]
      },

      causes2Label: 'WHY IT HAPPENS',
      causes2Emoji: '\u{1F465}',
      causes2Cols: 3,
      causes2: [
        { tone: 'green', icon: '\u{1F501}', head: 'All prices and wages adjust', body: 'Nominal changes feed through to incomes and costs, cancelling out in real terms.' },
        { tone: 'blue',  icon: '\u{1F3ED}', head: 'Capacity sets the limit', body: 'The economy\'s productive capacity does not change just because the price level does.' },
        { tone: 'amber', icon: '\u{1F4CA}', head: 'Output depends on real factors', body: 'Only resources and productivity determine potential real output.' }
      ],

      conclusion: { title: 'Big idea', text: 'LRAS is vertical because long-run output is determined by productive capacity, not by the price level.' },
      examEdge: 'Say clearly that AD changes move the equilibrium <strong>price level</strong>, but not LRAS <strong>output</strong>, in the long run.'
    },

    /* ====================================================================
       CARD 3 – What shifts LRAS? (Interactive multi-state + driver grid)
       ==================================================================== */
    {
      id: 'lras-shifts',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 7',
      title: 'What shifts LRAS?',
      lede: 'LRAS shifts when the economy\'s productive capacity changes – because the quantity or quality of the factors of production changes.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'More labour, capital or productivity shifts LRAS <strong>right</strong>. Less shifts it <strong>left</strong>.' },

      interactiveDiagram: {
        svgKey: 'lrasShiftRightClassicalKeynesian',
        label: 'CAPACITY EXPANSION – LRAS SHIFTS RIGHT',
        emoji: '\u{1F4CA}',
        layers: ['c-lras1-dash', 'c-lras2', 'c-lr-arrow', 'c-e2', 'k-as1-dash', 'k-as2', 'k-lr-arrow', 'k-e2', 'k-yf2', 'k-gap'],
        inverseLayers: ['c-lras1-solid', 'k-as1-solid'],
        perspectives: ['classical', 'keynesian'],
        perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
        views: [
          {
            label: 'Starting point', show: [],
            classical: {
              tone: 'purple',
              head: 'Classical view – at potential at E₁.',
              body: ['AD meets vertical LRAS₁ at E₁ – output Yf₁, price level P₁.', 'In the long run the economy always sits on LRAS.'] },
            keynesian: {
              tone: 'amber',
              head: 'Keynesian view – below capacity at E₁.',
              body: ['AD meets the reverse-L AS₁ on its <strong>rising range</strong>, at E₁ – output Y₁ sits below capacity Yf₁.', 'Actual output is demand-limited; there is idle capacity.'] }
          },
          {
            label: 'Capacity rises',
            show: ['c-lras1-dash', 'c-lras2', 'c-lr-arrow', 'k-as1-dash', 'k-as2', 'k-lr-arrow'],
            classical: {
              tone: 'green',
              head: 'LRAS₁ → LRAS₂.',
              body: ['Better technology, more capital, higher productivity, a bigger or more-skilled labour force – any genuine capacity gain shifts LRAS rightward.', 'Potential output rises from Yf₁ to Yf₂.'] },
            keynesian: {
              tone: 'green',
              head: 'The capacity wall slides parallel-right.',
              body: ['The reverse-L\'s vertical capacity wall moves right (AS₁ → AS₂); the price floor stays put.', 'Potential output rises to Yf₂. Whether <em>actual</em> output follows depends on demand.'] }
          },
          {
            label: 'New equilibrium',
            show: ['c-lras1-dash', 'c-lras2', 'c-lr-arrow', 'c-e2', 'k-as1-dash', 'k-as2', 'k-lr-arrow', 'k-e2', 'k-yf2', 'k-gap'],
            classical: {
              tone: 'purple',
              head: 'Output up, prices down at E₂.',
              body: ['AD meets LRAS₂ at E₂: <strong>Y₂ = Yf₂ &gt; Yf₁ AND P₂ &lt; P₁</strong>.', 'Sustainable, non-inflationary growth – the supply-side ideal.'],
              analysis: 'Classical verdict: this is the prize. Real capacity gains raise long-run output AND lower the price level. Demand-side levers can\'t reach this corner – only supply-side reform can.' },
            keynesian: {
              tone: 'rose',
              head: 'Potential rises – output LAGS it.',
              body: ['E₂ sits on AS₂\'s rising range: actual Y₂ rises and P falls, but <strong>Y₂ &lt; Yf₂</strong>.', 'A fresh output gap (rose arrow): the new capacity goes partly unused until demand catches up.'],
              analysis: 'Keynesian verdict: capacity expansion helps, but it is not enough on its own. With AD unchanged, real output rises only modestly – <strong>someone has to buy the extra output</strong>. Supply-side reform needs demand-side support alongside it.' }
          }
        ]
      },

      causesLabel: 'THE GROWTH DRIVERS',
      causesEmoji: '\u{1F680}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '\u{1F465}', head: 'Labour quantity & quality', body: 'More workers (migration, participation) and better skills raise capacity.' },
        { tone: 'blue',   icon: '\u{1F3ED}', head: 'Capital stock', body: 'More machines, tools, factories and infrastructure to produce with.' },
        { tone: 'purple', icon: '\u{1F4BB}', head: 'Technology', body: 'Innovation lets the economy produce more from the same resources.' },
        { tone: 'amber',  icon: '\u{1F4C8}', head: 'Enterprise & productivity', body: 'Better organisation and management lift output per worker.' },
        { tone: 'green',  icon: '\u{1F3DB}\u{FE0F}', head: 'Infrastructure & institutions', body: 'Good transport, energy and strong institutions support higher output.' },
        { tone: 'blue',   icon: '\u{2696}\u{FE0F}', head: 'Competition & regulation', body: 'Stronger rivalry and lighter red tape push firms to use resources better.' }
      ],

      pairLabel: 'RIGHT OR LEFT?',
      pairEmoji: '↔\u{FE0F}',
      left: {
        tone: 'green', icon: '\u{2795}', iconStyle: 'circle',
        label: 'Increase in LRAS → right',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">More or better factors of production. Potential output rises (Yf₁ → Yf₂); the price level eases.</p>'
      },
      right: {
        tone: 'rose', icon: '\u{2796}', iconStyle: 'circle',
        label: 'Decrease in LRAS → left',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Fewer or worse factors – capital scrapped, skills lost, emigration. Potential output falls; price-level pressure builds.</p>'
      },

      flow2Title: 'HOW TO THINK ABOUT IT',
      flow2Emoji: '\u{1F4A1}',
      flow2Sep: '→',
      flow2: [
        { tone: 'green',  icon: '\u{1F50D}', title: 'Identify the determinant', sub: 'Which factor of production changed?' },
        { tone: 'amber',  icon: '❓', title: 'Capacity up or down?', sub: 'Does productive potential rise or fall?' },
        { tone: 'blue',   icon: '↔\u{FE0F}', title: 'Shift LRAS', sub: 'Right for more, left for less.' },
        { tone: 'purple', icon: '\u{1F4CA}', title: 'State the effect', sub: 'On potential output and the price level.' }
      ],

      conclusion: { title: 'Big idea', text: 'LRAS shifts only when the economy\'s underlying productive capacity changes.' },
      examEdge: 'Link the determinant to <strong>productive capacity</strong>, then explain the direction of the LRAS shift and the effect on real GDP.'
    },

    /* ====================================================================
       CARD 4 – LRAS and economic growth (Sequential flow chain + interactive)
       ==================================================================== */
    {
      id: 'lras-growth',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 7',
      title: 'LRAS and economic growth',
      lede: 'Long-run economic growth is shown by a rightward shift of LRAS – the economy can sustainably produce more real output, today\'s frontier becomes tomorrow\'s.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Trend growth means productive capacity increases and LRAS shifts <strong>right</strong>.' },

      interactiveDiagram: {
        svgKey: 'lrasShiftDiagram',
        label: 'TODAY → TOMORROW',
        emoji: '\u{1F4CA}',
        layers: ['idl-1', 'idl-2'],
        inverseLayers: ['idl-old-solid'],
        views: [
          {
            label: 'Today', show: [], tone: 'blue',
            head: 'Today\'s capacity at E₁.',
            body: ['AD meets LRAS₁ at E₁ – output Y₁ at price level P₁.', 'This is the economy\'s current productive frontier.'],
            analysis: 'Read LRAS₁ as the wall today\'s output cannot sustainably pass.'
          },
          {
            label: 'Capacity grows', show: ['idl-1'], tone: 'green',
            head: 'LRAS₁ → LRAS₂.',
            body: ['Investment, a more skilled workforce and better technology raise potential output.', 'The whole capacity wall slides rightward to LRAS₂.'],
            analysis: 'This rightward shift IS long-run growth – an increase in productive potential, not just more spending.'
          },
          {
            label: 'Tomorrow', show: ['idl-1', 'idl-2'], tone: 'green',
            head: 'Higher potential real GDP at E₂.',
            body: ['AD meets LRAS₂ at E₂: <strong>Y₂ &gt; Y₁ and P₂ &lt; P₁</strong>.', 'More real output at a lower price level.'],
            analysis: 'Sustainable growth: the economy produces more without overheating, because the extra output comes from real capacity, not demand alone.'
          }
        ]
      },

      flowTitle: 'THE GROWTH CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'blue',   icon: '\u{1F3D7}\u{FE0F}', title: 'Investment', sub: 'Firms and government invest today.' },
        { tone: 'green',  icon: '\u{1F477}', title: 'More capital & better skills', sub: 'Build capital and develop the workforce.' },
        { tone: 'amber',  icon: '\u{1F4C8}', title: 'Higher productivity', sub: 'Produce more from the same resources.' },
        { tone: 'purple', icon: '\u{23E9}', title: 'LRAS shifts right', sub: 'Productive capacity increases.' }
      ],

      pairLabel: 'THE TRADE-OFF',
      pairEmoji: '⚖\u{FE0F}',
      left: {
        tone: 'amber', icon: '\u{1F3ED}', iconStyle: 'circle',
        label: 'More capital now',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Resources used to invest rather than consume today – an opportunity cost in the present.</p>'
      },
      right: {
        tone: 'green', icon: '\u{1F465}', iconStyle: 'circle',
        label: 'Higher living standards later',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Greater productive capacity raises real output and living standards over time.</p>'
      },

      bottomTip: { icon: '\u{1F4A1}', tone: 'blue', text: 'The same growth story can be drawn as a <strong>PPF shifting outward</strong> – more potential output, two diagrams telling one story.' },

      conclusion: { title: 'Big idea', text: 'When LRAS shifts right, the economy\'s potential output rises.' },
      examEdge: 'If asked about growth, use the phrase <strong>“rightward shift of LRAS”</strong> or <strong>“increase in productive potential”</strong>.'
    },

    /* ====================================================================
       CARD 5 – Demand vs capacity (Side-by-side pair · static synthesis)
       ==================================================================== */
    {
      id: 'lras-demand-vs-capacity',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'Demand vs capacity',
      lede: 'Demand-side changes and capacity (LRAS) changes have very different long-run effects – one mainly moves the price level, the other changes potential output.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'More AD mainly raises the <strong>price level</strong> in the long run. More LRAS raises <strong>real output</strong>.' },

      visualKey: 'lrasDemandVsCapacity',
      visualLabel: 'TWO VERY DIFFERENT STORIES',
      visualEmoji: '\u{1F4CA}',
      visualCaption: 'A: more demand on fixed capacity → higher prices, same output. B: more capacity at fixed demand → more output, lower prices.',

      pairLabel: 'WHICH POLICY DOES WHAT?',
      pairEmoji: '⚖\u{FE0F}',
      left: {
        tone: 'blue', icon: '\u{1F6D2}', iconStyle: 'circle',
        label: 'Demand-side policy',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Boosts AD quickly, but can create inflation if capacity is already tight. It cannot raise potential output.</p>'
      },
      right: {
        tone: 'green', icon: '\u{1F3ED}', iconStyle: 'circle',
        label: 'Supply-side policy',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Raises LRAS more slowly, but improves long-run growth potential – more output without more inflation.</p>'
      },

      causesLabel: 'WHY IT MATTERS',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'amber',  icon: '\u{1F4B7}', head: 'Inflation control', body: 'Too much AD against tight capacity risks higher inflation without more real output.' },
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Real growth', body: 'Higher LRAS lifts potential output and living standards – sustainable, non-inflationary growth.' },
        { tone: 'purple', icon: '⚖\u{FE0F}', head: 'Policy judgement', body: 'Choose the mix that matches the economy\'s position – spare capacity vs full capacity.' }
      ],

      conclusion: { title: 'Big idea', text: 'Capacity creates long-run growth. Demand alone cannot permanently raise potential output.' },
      examEdge: 'Separate <strong>short-run demand effects</strong> from <strong>long-run capacity effects</strong> before judging any policy.'
    },

    /* ====================================================================
       CARD 6 – The LRAS exam toolkit (Evidence-then-verdict)
       ==================================================================== */
    {
      id: 'lras-exam-toolkit',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The LRAS exam toolkit',
      lede: 'LRAS helps explain productive capacity, trend growth, inflation pressure and the long-run limits of demand-side policy. One curve, many exam uses.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'One curve – many exam uses. Show whether <strong>capacity</strong> has changed, then judge the consequences.' },

      causesLabel: 'WHAT LRAS CAN SHOW',
      causesEmoji: '\u{1F4C8}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '\u{1F3F0}', head: 'Potential output', body: 'The maximum sustainable real output in the long run.' },
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Trend growth', body: 'How potential output rises over time as LRAS shifts right.' },
        { tone: 'purple', icon: '\u{1F4CF}', head: 'Capacity limits', body: 'Why the economy cannot sustain output above LRAS.' },
        { tone: 'amber',  icon: '\u{1F4B7}', head: 'Inflation pressure', body: 'Why demand above capacity creates upward pressure on prices.' },
        { tone: 'green',  icon: '\u{1F3DB}\u{FE0F}', head: 'Supply-side policy', body: 'How reforms shift LRAS right by improving productive capacity.' },
        { tone: 'blue',   icon: '⚖\u{FE0F}', head: 'Demand vs capacity', body: 'Compare a demand change with a capacity change to judge outcomes.' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '⚠\u{FE0F}',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '\u{1F6AB}', head: 'Confusing LRAS with SRAS', body: '<strong>Fix:</strong> LRAS is vertical and shows capacity in the long run; SRAS responds to short-run costs.' },
        { tone: 'rose', icon: '↔\u{FE0F}', head: 'Calling a movement a shift', body: '<strong>Fix:</strong> a shift changes LRAS; a movement along AS (driven by AD) does not.' },
        { tone: 'rose', icon: '❓', head: 'AD and LRAS do the same job', body: '<strong>Fix:</strong> AD shows demand; LRAS shows the economy\'s productive capacity – different jobs.' }
      ],

      flowTitle: 'HOW TO WRITE IT',
      flowEmoji: '✍\u{FE0F}',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '\u{1F50D}', title: 'Identify', sub: 'Is it AD, SRAS or LRAS?' },
        { tone: 'blue',   icon: '\u{1F3ED}', title: 'Explain', sub: 'What changed in productive capacity?' },
        { tone: 'amber',  icon: '\u{1F517}', title: 'Link', sub: 'Effect on real output and the price level.' },
        { tone: 'purple', icon: '⚖\u{FE0F}', title: 'Judge', sub: 'Time horizon, growth and inflation.' }
      ],

      causes3Label: 'USEFUL PHRASES',
      causes3Emoji: '\u{1F4AC}',
      causes3Style: 'plain-white',
      causes3Cols: 4,
      causes3: [
        { tone: 'green',  icon: '\u{1F4AC}', head: '“potential output”', body: 'The long-run capacity ceiling.' },
        { tone: 'blue',   icon: '\u{1F4AC}', head: '“productive capacity”', body: 'What LRAS measures.' },
        { tone: 'purple', icon: '\u{1F4AC}', head: '“vertical LRAS”', body: 'The Classical long-run shape.' },
        { tone: 'amber',  icon: '\u{1F4AC}', head: '“trend growth”', body: 'A rightward LRAS shift over time.' }
      ],

      conclusion: { title: 'Big idea', text: 'If you can read LRAS well, you can explain a large part of long-run macroeconomics.' },
      examEdge: 'Top answers say whether <strong>productive capacity</strong> has changed, explain the LRAS shift or non-shift, then judge the consequences.'
    }

  ]
};
