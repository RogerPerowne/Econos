/* ============================================================
   ECONOS – Short-run Aggregate Supply (Edexcel A 2.3.2)
   2 cards · ad-interactive template
   Split from the legacy `aggregate-supply` topic on 2026-06-05.
   The 2.3.1 characteristics overview lives at `aggregate-supply`;
   the 2.3.3 long-run material lives at `long-run-aggregate-supply`.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'short-run-aggregate-supply',
  topicNum: '2.3.2',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Short-run Aggregate Supply',
  estTime: '6 min',
  goal: 'Master the SRAS curve and the factors that shift it',

  intro: {
    heroKey: 'heroAggSupply',
    summary: 'Short-run aggregate supply (SRAS) slopes upward: as the price level rises, firms produce more, because some costs (wages, contracts) are sticky in the short run. SRAS shifts when those costs change at every price level – raw materials, energy, exchange rates, indirect taxes.',
    doInThis: 'Explain why SRAS slopes upward, then map every spec factor (raw material and energy costs, exchange rates, tax rates) to a left or right shift.',
    outcomes: [
      'Explain why SRAS slopes upward in the short run',
      'Identify the spec factors that shift SRAS',
      'Apply an SRAS shift to the AD/AS equilibrium'
    ],
    tip: 'When in doubt, ask: does this change firms\' costs at every price level? If yes, it shifts SRAS.',
    stages: [
      { num: 1, name: 'Learn',  sub: '2 cards \xb7 6 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 – The SRAS curve ----- */
    {
      id: 'sras-curve',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 2',
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

    /* ----- CARD 2 – Shifts in SRAS ----- */
    {
      id: 'sras-shifts',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 2',
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
    }

  ]
};
