/* ============================================================
   ECONOS – content data for agg_supply
   8 cards · ad-interactive template · Edexcel Theme 2.3
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'aggregate-supply',
  topicNum: '2.3',
  theme: 'Theme 2 \xb7 The National and Global Economy',
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

      // Classical ↔ Keynesian toggle. The toggle IS the lesson here:
      // the two schools disagree about the SHAPE of AS itself.
      //   Classical: SRAS (sloping) + LRAS (vertical at Yf)
      //   Keynesian: reverse-L AS – flat floor, bottleneck, vertical at Yf
      // View 1 shows just the AS curve(s); View 2 adds AD + the
      // equilibrium point E₁ at the schools' (different) intersections.
      interactiveDiagram: {
        svgKey: 'asIntroClassicalKeynesian',
        label: 'THE BASIC DIAGRAM',
        emoji: '📊',
        layers: ['ad', 'e1'],
        perspectives: ['classical', 'keynesian'],
        perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
        views: [
          {
            label: 'The AS curve', show: [],
            classical: {
              tone: 'purple',
              head: 'Classical view – two curves, two horizons.',
              body: ['<strong>SRAS</strong> slopes upward: in the short run, sticky wages mean rising prices boost profit margins so firms supply more.', '<strong>LRAS</strong> is vertical at Yf: in the long run, output is determined by capacity, not the price level.'] },
            keynesian: {
              tone: 'amber',
              head: 'Keynesian view – one reverse-L curve.',
              body: ['A single AS curve with three ranges: a <strong>flat floor</strong> in deep slack (idle resources, unit costs unchanged), a <strong>bottleneck</strong> as the economy approaches capacity, and <strong>vertical</strong> at Yf.', 'Output is demand-constrained until capacity binds.'] }
          },
          {
            label: 'Add AD: equilibrium', show: ['ad', 'e1'],
            classical: {
              tone: 'purple',
              head: 'Long-run equilibrium at LRAS.',
              body: ['AD meets the AS framework at E₁ – in the long run, on the <strong>vertical LRAS at Yf</strong>.', 'Whatever AD does, output ends at Yf; the price level adjusts.'],
              analysis: 'Classical reading: long-run output is anchored to capacity. The only sustainable way to raise Y is to shift LRAS (supply-side policy). Demand-side levers move the price level around, not real output.' },
            keynesian: {
              tone: 'amber',
              head: 'Equilibrium on the rising range.',
              body: ['AD meets reverse-L AS on its <strong>rising range</strong> at E₁ – output Y₁ sits <em>below</em> capacity Yf.', 'Actual output is constrained by demand, not by supply.'],
              analysis: 'Keynesian reading: the economy can settle at less than full employment. Boosting AD raises real output (with some inflation as you near capacity); supply-side reform raises potential, but actual output still needs demand to follow.' }
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
        layers: [],
        perspectives: ['classical', 'keynesian'],
        perspectiveLabels: { classical: 'Classical', keynesian: 'Keynesian' },
        views: [
          {
            label: 'LRAS shape',
            tone: 'slate',
            classical: {
              head: 'The classical view holds that LRAS is vertical at Yf.',
              body: ['With full flexibility of wages and prices, markets self-adjust.', 'Therefore, in the long run there is no trade-off between inflation and output.'],
              analysis: 'Output is determined entirely by capacity. Demand shocks change the price level but not Y in the long run – money is neutral.'
            },
            keynesian: {
              head: 'Keynesians argue LRAS has a flat range, a rising range and a vertical capacity ceiling.',
              body: ['When there is spare capacity (range 1), output can rise without much increase in the price level.', 'As the economy nears Yf, inflation pressure rises sharply.'],
              analysis: 'The shape of AS depends on where the economy sits. Deep in spare capacity, demand stimulus mostly raises Y. Near capacity, it mostly raises P.'
            }
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

      // Stepped interactive diagram with Classical/Keynesian toggle. The
      // same cost shock seen through two AS models – Classical (sloping
      // SRAS shifts left/up; LR self-correction noted in V3 analysis) vs
      // Keynesian (reverse-L price floor rises; no self-correction).
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
              body: ['Cost rises lift the reverse-L\'s <strong>price floor</strong> – costs at every output level have gone up.', 'Capacity Yf is unchanged: the vertical wall stays put, but the horizontal floor moves up.'] }
          },
          {
            label: 'Stagflation',
            show: ['c-sras1-dash', 'c-sras2', 'c-e2', 'c-cost-arrow', 'k-as1-dash', 'k-as2', 'k-e2', 'k-cost-arrow'],
            classical: {
              tone: 'rose',
              head: 'Short-run stagflation at E₂.',
              body: ['New equilibrium E₂: <strong>P₂ &gt; P₁ AND Y₂ &lt; Yf</strong> – higher prices, lower output, the defining feature of a supply shock.', 'A recessionary gap (Yf − Y₂) opens up.'],
              analysis: 'Classical verdict: the stagflation is a <em>short-run</em> position. Because Y₂ &lt; Yf, unemployment rises and wage pressure eases – SRAS gradually slides back rightward toward SRAS₁, returning the economy to Yf at the original price level P₁. The cost of disinflation is patience, not policy. Anchoring expectations matters because faster wage adjustment = quicker return.' },
            keynesian: {
              tone: 'rose',
              head: 'Stagflation at E₂.',
              body: ['E₂ sits up-and-left of E₁: <strong>P₂ &gt; P₁, Y₂ &lt; Y₁</strong> – higher prices, lower output simultaneously.', 'Real output is now further below capacity Yf.'],
              analysis: 'Keynesian verdict: with <strong>sticky wages and prices</strong>, the higher cost floor is persistent. The stagflation does <em>not</em> self-correct – the economy stays at E₂ until policy acts. And the policy is hard: tightening AD fights inflation but deepens the output loss; loosening AD supports output but embeds the higher price level. This is the cost-push policy dilemma.' }
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

      // Classical ↔ Keynesian toggle. Same capacity expansion, two
      // verdicts on whether actual output follows:
      //   Classical: economy lands at the new Yf₂ at lower P (clean).
      //   Keynesian: capacity wall slides right but actual output rises
      //     only along the AS rising range – a fresh output gap opens
      //     between Y₂ and Yf₂ until demand catches up.
      interactiveDiagram: {
        svgKey: 'lrasShiftRightClassicalKeynesian',
        label: 'CAPACITY EXPANSION – LRAS SHIFTS RIGHT',
        emoji: '📊',
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
              analysis: 'Classical verdict: this is the prize. Real capacity gains raise long-run output AND lower the price level; the AD shift you don\'t need is the one that just inflates. Demand-side levers can\'t reach this corner – only supply-side reform can.' },
            keynesian: {
              tone: 'rose',
              head: 'Potential rises – output LAGS it.',
              body: ['E₂ sits on AS₂\'s rising range: actual Y₂ rises and P falls, but <strong>Y₂ &lt; Yf₂</strong>.', 'A fresh output gap (rose arrow): the new capacity goes partly unused until demand catches up.'],
              analysis: 'Keynesian verdict: capacity expansion helps, but it is not enough on its own. With AD unchanged, real output rises only modestly; <strong>someone has to buy the extra output</strong>. The full benefit of supply-side reform needs demand-side support alongside it.' }
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
        { tone: 'green', icon: '🌐', head: 'Demographics &amp; migration', body: 'Ageing population shrinks the labour force; net inward migration of working-age adults expands it.' },
        { tone: 'green', icon: '🏭', head: 'Capital stock',       body: 'More machinery, tools and infrastructure.' },
        { tone: 'green', icon: '💡', head: 'Technology',          body: 'Innovations improve how resources are used.' },
        { tone: 'green', icon: '📈', head: 'Relative productivity', body: 'Output per worker compared with rivals. The UK lags Germany and the US – closing the gap would shift LRAS right.' },
        { tone: 'green', icon: '🎓', head: 'Education and skills', body: 'A more skilled workforce raises productive capacity.' },
        { tone: 'green', icon: '⚔️', head: 'Competition policy',  body: 'Stronger rivalry (CMA enforcement, removing entry barriers) pushes firms to cut costs and innovate – raising sustainable capacity.' },
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

      // Two stacked interactive diagrams – both with Classical/Keynesian
      // toggles. Demand-side stimulus shows the textbook AD-right split
      // (Classical: only P; Keynesian: Y AND P). Supply-side improvement
      // shows the LRAS-right split (Classical: clean landing at Yf₂;
      // Keynesian: potential rises, actual lags).
      interactiveDiagram: [
        {
          svgKey: 'adShiftClassicalKeynesian',
          label: 'DEMAND-SIDE STIMULUS – AD SHIFTS RIGHT',
          emoji: '📈',
          layers: ['idl-1', 'idl-2'],
          inverseLayers: ['idl-old-solid'],
          perspectives: ['classical', 'keynesian'],
          perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
          views: [
            { label: 'Starting point', show: [],
              classical: { tone: 'purple', head: 'Classical view – at potential.', body: ['AD₁ meets vertical LRAS at Yf – price level P₁.'] },
              keynesian: { tone: 'amber', head: 'Keynesian view – spare capacity.', body: ['AD₁ meets the rising range of reverse-L AS, below capacity.'] } },
            { label: 'AD shifts right', show: ['idl-1'],
              classical: { tone: 'purple', head: 'AD₁ → AD₂.', body: ['Government spending, tax cuts or looser monetary policy raise demand.'] },
              keynesian: { tone: 'amber', head: 'AD₁ → AD₂.', body: ['Government spending, tax cuts or looser monetary policy raise demand.'] } },
            { label: 'New equilibrium', show: ['idl-1', 'idl-2'],
              classical: { tone: 'purple', head: 'ONLY prices rise.', body: ['Output stays at Yf; P₂ ≫ P₁ – purely inflationary.'], analysis: 'Classical reading: demand stimulus at potential is eaten by inflation. The case for fiscal restraint hinges on this verdict.' },
              keynesian: { tone: 'green', head: 'Output AND prices rise.', body: ['Y₂ &gt; Y₁ and P₂ &gt; P₁; the closer to Yf, the more leaks into prices.'], analysis: 'Keynesian reading: with spare capacity, demand stimulus delivers real output and jobs. Near Yf the trade-off worsens.' } }
          ]
        },
        {
          svgKey: 'lrasShiftRightClassicalKeynesian',
          label: 'SUPPLY-SIDE IMPROVEMENT – LRAS SHIFTS RIGHT',
          emoji: '⚙️',
          layers: ['c-lras1-dash', 'c-lras2', 'c-lr-arrow', 'c-e2', 'k-as1-dash', 'k-as2', 'k-lr-arrow', 'k-e2', 'k-yf2', 'k-gap'],
          inverseLayers: ['c-lras1-solid', 'k-as1-solid'],
          perspectives: ['classical', 'keynesian'],
          perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
          views: [
            { label: 'Starting point', show: [],
              classical: { tone: 'purple', head: 'At potential at E₁.', body: ['AD meets vertical LRAS₁ at Yf₁.'] },
              keynesian: { tone: 'amber', head: 'Below capacity at E₁.', body: ['AD meets reverse-L AS₁ on its rising range – Y₁ &lt; Yf₁.'] } },
            { label: 'Capacity rises', show: ['c-lras1-dash', 'c-lras2', 'c-lr-arrow', 'k-as1-dash', 'k-as2', 'k-lr-arrow'],
              classical: { tone: 'green', head: 'LRAS₁ → LRAS₂.', body: ['Productivity, capital, labour, technology – capacity expands.'] },
              keynesian: { tone: 'green', head: 'Capacity wall slides right.', body: ['AS₁ → AS₂ is a parallel rightward shift; floor unchanged.'] } },
            { label: 'New equilibrium', show: ['c-lras1-dash', 'c-lras2', 'c-lr-arrow', 'c-e2', 'k-as1-dash', 'k-as2', 'k-lr-arrow', 'k-e2', 'k-yf2', 'k-gap'],
              classical: { tone: 'purple', head: 'Output up, prices down.', body: ['Y rises to Yf₂, P falls – sustainable non-inflationary growth.'], analysis: 'Classical reading: this is the prize – the corner demand-side levers can\'t reach.' },
              keynesian: { tone: 'rose', head: 'Potential up, output LAGS.', body: ['Actual Y₂ rises but sits BELOW the new potential Yf₂ – fresh output gap.'], analysis: 'Keynesian reading: supply-side reform raises the ceiling, but without demand catching up the new capacity goes partly unused.' } }
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

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0
   These questions used to live at /quiz/<topic>/<set> as a
   standalone shell. They now ride along with the Learn It data
   under the same window.ECONOS_QUIZ global. The /quiz/ URL
   contract is gone; the quiz is the natural finisher to the
   Learn It journey, so the data lives next to learn cards.
   ============================================================ */
/* ---- quiz-main.js (quiz pool, preserved from former /quiz/ shell) ---- */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Aggregate Supply',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.routes.learn('aggregate-supply'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers SRAS vs LRAS, Classical vs Keynesian AS, and output gaps',
    shortNames: [
      'SRAS vs LRAS','Classical LRAS','Keynesian AS','SRAS shift','Output gap',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'The Short-Run Aggregate Supply (SRAS) curve slopes upward because:',
        opts: [
          'Higher prices attract more workers and capital into the economy',
          'Higher prices make it profitable for firms to increase output, even though some costs are fixed',
          'In the short run, all factor prices are perfectly flexible',
          'Higher prices reduce the cost of imports'
        ],
        ans:  1,
        exp:  'In the short run, some costs (especially wages) are sticky. When the price level rises, firms receive higher revenue but face unchanged costs – so they expand output. This gives an upward-sloping SRAS.'
      },
      {
        type: 'mcq',
        q:    'In the Classical model, the Long-Run Aggregate Supply (LRAS) curve is:',
        opts: [
          'Upward sloping like SRAS',
          'Downward sloping like AD',
          'Perfectly vertical at the full-employment output level',
          'Perfectly horizontal at a fixed price level'
        ],
        ans:  2,
        exp:  'Classical economists argue that in the long run, all prices and wages are fully flexible, so the economy always returns to full employment (potential output, Yf). LRAS is vertical – output is fixed by supply-side capacity.'
      },
      {
        type: 'mcq',
        q:    'In the Keynesian model, the AS curve is horizontal at low output levels because:',
        opts: [
          'All resources are fully employed and fully flexible',
          'There is so much spare capacity that output can rise without any upward price pressure',
          'The government controls all prices below potential output',
          'Investment determines prices rather than output'
        ],
        ans:  1,
        exp:  'Keynes argued that during a recession (with mass unemployment and idle capital), firms can expand output by hiring unemployed resources without bidding up wages or prices. The AS curve is flat in this range.'
      },
      {
        type: 'mcq',
        q:    'Which of the following would shift SRAS to the LEFT (upward)?',
        opts: [
          'A fall in oil prices',
          'An improvement in labour productivity',
          'A sharp rise in raw material costs',
          'A fall in corporation tax'
        ],
        ans:  2,
        exp:  'A rise in raw material costs (a negative supply shock) increases the cost of production at every level of output. Firms produce less at any given price – SRAS shifts left, pushing prices up and output down (stagflation risk).'
      },
      {
        type: 'numeric_input',
        q:    'Potential output is £2,000bn. Actual output is £1,700bn. What is the output gap (£bn) and state the sign (negative for a deflationary gap).',
        answer: -300,
        tolerance: 0,
        unit: '£bn',
        hint: 'Output gap = Actual output − Potential output.',
        workingSteps: ['Output gap = £1,700bn − £2,000bn = −£300bn (negative / deflationary gap)']
      },
      {
        type: 'categorise',
        q:    'Categorise each factor as shifting SRAS or shifting LRAS.',
        categories: ['Shifts SRAS','Shifts LRAS'],
        items: [
          { item: 'Rise in wages (nominal)',                    category: 'Shifts SRAS' },
          { item: 'Improvement in technology and productivity', category: 'Shifts LRAS' },
          { item: 'Fall in commodity prices',                   category: 'Shifts SRAS' },
          { item: 'Net immigration increasing labour force',    category: 'Shifts LRAS' },
          { item: 'Oil price spike',                            category: 'Shifts SRAS' },
          { item: 'Investment in infrastructure',               category: 'Shifts LRAS' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each cause to its effect on aggregate supply.',
        pairs: [
          { cause: 'Oil prices fall sharply',                   effect: 'SRAS shifts right; prices fall, output rises' },
          { cause: 'Labour productivity improves',              effect: 'LRAS shifts right; potential output increases' },
          { cause: 'Cost-push inflation hits wages and inputs', effect: 'SRAS shifts left; stagflation risk' },
          { cause: 'Economy produces above potential output',   effect: 'Positive output gap; upward wage and price pressure' },
          { cause: 'Government invests in worker training',     effect: 'Human capital rises; LRAS shifts right over time' },
          { cause: 'Recession leaves large negative output gap',effect: 'Deflationary pressure; unemployment above natural rate' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out in the context of SRAS shifters?',
        opts: ['Change in input costs','Change in commodity prices','Change in potential output','Change in nominal wages'],
        ans:  2,
        exp:  'Changes in input costs, commodity prices, and nominal wages all shift SRAS by changing the cost of production in the short run. A change in potential output shifts LRAS – it is a long-run supply-side concept.'
      },
      {
        type: 'data_table',
        q:    'Use the data to identify which scenario involves stagflation.',
        tableHeaders: ['Scenario','Change in Price Level','Change in Real Output','Cause'],
        tableData: [
          ['A','Rises','Rises','AD increases'],
          ['B','Falls','Rises','AS increases'],
          ['C','Rises','Falls','SRAS shifts left (cost-push)'],
          ['D','Falls','Falls','AD decreases (recession)']
        ],
        opts: ['Scenario A','Scenario B','Scenario C','Scenario D'],
        ans:  2,
        exp:  'Stagflation is the combination of rising prices AND falling output – the worst of both worlds. Scenario C shows rising prices with falling output caused by a leftward SRAS shift (negative supply shock).'
      },
      {
        type: 'match_pairs',
        q:    'Match each aggregate supply concept to its description.',
        pairs: [
          { a: 'SRAS',              b: 'Short-run supply where some costs are fixed; upward sloping' },
          { a: 'LRAS (Classical)',  b: 'Vertical supply at full employment; determined by supply-side factors' },
          { a: 'Keynesian AS',      b: 'Horizontal range at low output; upward range; then vertical' },
          { a: 'Output gap',        b: 'Difference between actual and potential output' },
          { a: 'Stagflation',       b: 'Simultaneous rise in prices and fall in real output' },
          { a: 'Supply-side shock', b: 'Unexpected change in production costs that shifts SRAS' }
        ]
      }
    ]
  };

})();

