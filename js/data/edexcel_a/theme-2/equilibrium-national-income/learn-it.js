/* ============================================================
   ECONOS – Equilibrium National Income (Theme 2 · 4.4 / 5.2)
   4 cards · J=W view → AD/AS view → output gaps →
   reading national income data
   Spec: Edexcel A 2.4.3 + 2.5.2
   ============================================================ */

/* Mini chart: AD shifts right (boom).
   House rules: AD always BLUE; shift keeps colour, only old=dashed/new=solid.
   Plot x:[40,300] y:[20,170].
   SRAS BLACK upward (55,165)→(290,35) slope -0.553.
   AD₁ BLUE DASHED (55% opacity) downward (50,50)→(250,170) slope +0.6.
   AD₂ BLUE SOLID, parallel-shifted +50: (100,50)→(300,170) slope +0.6.
   Old eq (SRAS×AD₁): (152, 111). New eq (SRAS×AD₂): (178, 97).
   Y₂ > Y₁ ✓, P₂ > P₁ ✓ (lower SVG y = higher visually).
   Shift arrow stays green as a section-theme accent (not a curve). */
/* The boom + oil-shock mini-charts that used to live here as inline SVGs
   have been replaced by the stacked Classical/Keynesian interactive
   toggle diagrams in Card 2 (see `interactiveDiagram:` array). */

const ENI_STEP_DOT = (tone, icon) => `
  <span style="display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:#fff;border:1.5px solid ${tone};color:${tone};font-size:14px;line-height:1;">${icon}</span>`;

const ENI_STEP_ROW = (tone, steps) => `
  <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;margin-top:6px;">
    ${steps.map(s => `
      <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:6px;">
        <div style="display:flex;align-items:center;gap:4px;">
          ${ENI_STEP_DOT(tone, s.icon)}
          ${s.arrow ? `<span style="color:#94A3B8;font-size:12px;line-height:1;">→</span>` : ''}
        </div>
        <div style="font-size:11.5px;color:#0B1426;line-height:1.25;font-weight:500;">${s.label}</div>
      </div>`).join('')}
  </div>`;

window.ECONOS_TOPIC = {
  id: 'equilibrium-national-income',
  topicNum: '4.4',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Equilibrium National Income',
  estTime: '8-10 minutes',
  goal: 'Lock in the J=W and 45° views of equilibrium, the AD/AS view, and the five filters for reading national-income data.',

  intro: {
    heroKey: 'heroMultiplier',
    summary: 'Equilibrium national income is where the economy settles when planned spending equals output – the same point can be shown by injections meeting withdrawals, by E crossing the 45° line, or by AD meeting SRAS. Output gaps (the distance from full-employment output) are covered on the dedicated `output-gaps` topic (2.5.2).',
    doInThis: 'Work through equilibrium on the J=W and 45° views, on AD/AS, then read GDP data with five welfare filters.',
    outcomes: [
      'Show equilibrium on a J=W diagram and a 45° diagram',
      'Show equilibrium on an AD/AS diagram and analyse demand and supply shocks',
      'Apply the five filters when judging welfare from GDP data'
    ],
    tip: 'Every equilibrium story is the same story told three ways. Pick the diagram the question asks for, but link it back to J = W so your analysis stays coherent.',
    stages: [
      { num: 1, name: 'Learn it', sub: '3 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [

    /* ============================================================
       CARD 1 – Equilibrium national income (J=W + 45°)
       ============================================================ */
    {
      id: 'equilibrium-national-income',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 3',
      title: 'Equilibrium national income',
      lede: 'Income settles where <strong>injections equal withdrawals</strong> – and the same equilibrium can be shown on both the J = W view and the 45° diagram.',
      ledeStyle: 'plain',
      tip: { icon: '✓', tone: 'green', text: 'When injections equal withdrawals, planned spending equals output.' },

      notePosition: 'top',
      note: {
        tone: 'blue',
        icon: '\u{1F4D0}',
        head: 'What is the 45° line?',
        text: 'It\'s the line where <strong>planned expenditure equals actual output</strong> (E = Y). Anywhere on it, what households and firms plan to spend exactly matches what the economy produces. Equilibrium national income is therefore wherever the <strong>E line crosses the 45° line</strong> – the only output level where plans and reality match.'
      },

      visualKey: 'eniTwinJW45',
      visualLabel: 'Two diagrams – same answer',
      visualEmoji: '⚖️',

      pairFirst: true,
      pairLabel: 'What if the economy is off equilibrium?',
      pairEmoji: '\u{1F53A}',
      left: {
        tone: 'amber',
        icon: '\u{2B07}️',
        iconStyle: 'circle',
        label: 'Below equilibrium',
        text: ENI_STEP_ROW('#F59E0B', [
          { icon: '\u{1F4CA}', label: 'Y too low', arrow: true },
          { icon: '\u{1F4E6}', label: 'Stocks fall', arrow: true },
          { icon: '\u{1F3ED}', label: 'Firms raise output', arrow: true },
          { icon: '\u{1F4C8}', label: 'Income rises back toward Y*', arrow: false }
        ])
      },
      right: {
        tone: 'blue',
        icon: '\u{2B06}️',
        iconStyle: 'circle',
        label: 'Above equilibrium',
        text: ENI_STEP_ROW('#2563EB', [
          { icon: '\u{1F4CA}', label: 'Y too high', arrow: true },
          { icon: '\u{1F4E6}', label: 'Stocks pile up', arrow: true },
          { icon: '\u{1F3ED}', label: 'Firms cut output', arrow: true },
          { icon: '\u{1F4C9}', label: 'Income falls back toward Y*', arrow: false }
        ])
      },

      flowTitle: 'The big idea',
      flowEmoji: '\u{1F4A1}',
      flowSep: '→',
      flow: [
        { tone: 'blue',   icon: '1', title: 'Compare J with W',  sub: '' },
        { tone: 'blue',   icon: '2', title: 'Watch inventories', sub: '' },
        { tone: 'blue',   icon: '3', title: 'Firms adjust output', sub: '' }
      ],

      conclusionPosition: 'end',
      conclusion: {
        title: 'Inventory movements are the adjustment mechanism.',
        text: 'If planned spending exceeds output, firms respond by producing more. If planned spending falls short, they cut back.'
      },
      examEdge: 'In strong essays, state that the equilibrium level of national income is where injections equal withdrawals – which is the same equilibrium shown where planned expenditure crosses the 45° line.'
    },

    /* ============================================================
       CARD 2 – AD/AS view of equilibrium
       ============================================================ */
    {
      id: 'ad-as-equilibrium',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 3',
      title: 'AD/AS view of equilibrium',
      lede: 'The <strong>AD/AS model</strong> shows equilibrium where aggregate demand meets aggregate supply, giving both the equilibrium price level and real output.',
      ledeStyle: 'plain',
      tip: { icon: '✓', tone: 'green', text: 'Equilibrium in AD/AS gives both P* and Y*.' },

      // Three stacked interactive toggles:
      //   1. AS intro – define equilibrium with the Classical/Keynesian split
      //   2. Boom (AD shifts right) – same toggle pattern as fiscal/monetary
      //   3. Oil shock (SRAS shifts left) – Classical SR / Keynesian floor
      // The "two shocks, two outcomes" pair below stays in text-only form.
      interactiveDiagram: [
        {
          svgKey: 'asIntroClassicalKeynesian',
          label: 'EQUILIBRIUM IN AD/AS',
          emoji: '⚖️',
          layers: ['ad', 'e1'],
          perspectives: ['classical', 'keynesian'],
          perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
          views: [
            { label: 'The AS curve', show: [],
              classical: { tone: 'purple', head: 'Classical view – two curves.', body: ['SRAS slopes up (sticky-cost short run); LRAS is vertical at potential output Yf.'] },
              keynesian: { tone: 'amber', head: 'Keynesian view – one reverse-L curve.', body: ['Flat floor (deep slack), rising bottleneck, vertical at Yf.'] } },
            { label: 'Add AD – equilibrium', show: ['ad', 'e1'],
              classical: { tone: 'purple', head: 'Equilibrium at the LRAS / SRAS / AD triple intersection.', body: ['E₁ sits on the vertical LRAS at Yf – output is at potential in the long run.'], analysis: 'Classical reading: long-run output is anchored to capacity. Read off P₁ on the y-axis and Yf on the x-axis.' },
              keynesian: { tone: 'amber', head: 'Equilibrium on the rising range.', body: ['E₁ sits below capacity on AS – actual output Y₁ is demand-constrained.'], analysis: 'Keynesian reading: the economy can settle at less than full employment. Read off P₁ and Y₁.' } }
          ]
        },
        {
          svgKey: 'adShiftClassicalKeynesian',
          label: 'CONFIDENCE BOOM – AD SHIFTS RIGHT',
          emoji: '\u{2B06}\u{FE0F}',
          layers: ['idl-1', 'idl-2'],
          inverseLayers: ['idl-old-solid'],
          perspectives: ['classical', 'keynesian'],
          perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
          views: [
            { label: 'Starting point', show: [],
              classical: { tone: 'purple', head: 'At potential.', body: ['AD₁ meets vertical LRAS at Yf.'] },
              keynesian: { tone: 'amber', head: 'Spare capacity.', body: ['AD₁ meets reverse-L AS on the rising range.'] } },
            { label: 'Confidence boom', show: ['idl-1'],
              classical: { tone: 'purple', head: 'AD₁ → AD₂.', body: ['Consumer confidence, spending and investment rise.'] },
              keynesian: { tone: 'amber', head: 'AD₁ → AD₂.', body: ['Consumer confidence, spending and investment rise.'] } },
            { label: 'New equilibrium', show: ['idl-1', 'idl-2'],
              classical: { tone: 'purple', head: 'ONLY prices rise.', body: ['Output stays at Yf; the boom is purely inflationary.'], analysis: 'Classical reading: in the long run, a confidence boom just inflates the price level.' },
              keynesian: { tone: 'green', head: 'Output AND prices rise.', body: ['Y₂ &gt; Y₁ and P₂ &gt; P₁ – demand is stronger.'], analysis: 'Keynesian reading: with spare capacity, a confidence boom genuinely raises real output.' } }
          ]
        },
        {
          svgKey: 'srasShiftLeftClassicalKeynesian',
          label: 'OIL SHOCK – SRAS SHIFTS LEFT',
          emoji: '\u{2B07}\u{FE0F}',
          layers: ['c-sras1-dash', 'c-sras2', 'c-e2', 'c-cost-arrow', 'k-as1-dash', 'k-as2', 'k-e2', 'k-cost-arrow'],
          inverseLayers: ['c-sras1-solid', 'k-as1-solid'],
          perspectives: ['classical', 'keynesian'],
          perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
          views: [
            { label: 'Before the shock', show: [],
              classical: { tone: 'purple', head: 'At potential.', body: ['AD meets SRAS₁ on the vertical LRAS at Yf.'] },
              keynesian: { tone: 'amber', head: 'Near capacity.', body: ['AD meets the reverse-L AS₁ near the steep range.'] } },
            { label: 'Oil price spike', show: ['c-sras1-dash', 'c-sras2', 'c-cost-arrow', 'k-as1-dash', 'k-as2', 'k-cost-arrow'],
              classical: { tone: 'rose', head: 'SRAS shifts left.', body: ['Higher input costs lift the SR supply curve up and to the left.'] },
              keynesian: { tone: 'rose', head: 'The price floor rises.', body: ['Higher input costs lift the reverse-L\'s floor; capacity unchanged.'] } },
            { label: 'Stagflation', show: ['c-sras1-dash', 'c-sras2', 'c-e2', 'c-cost-arrow', 'k-as1-dash', 'k-as2', 'k-e2', 'k-cost-arrow'],
              classical: { tone: 'rose', head: 'P up, Y down.', body: ['Higher input costs squeeze output and raise prices.'], analysis: 'Classical reading: the stagflation is short-run; wages eventually adjust and SRAS slides back toward Yf at the original price level.' },
              keynesian: { tone: 'rose', head: 'P up, Y down.', body: ['Higher input costs squeeze output and raise prices.'], analysis: 'Keynesian reading: with sticky wages the higher cost floor persists – the stagflation does not self-correct.' } }
          ]
        }
      ],

      flowTitle: 'Read the axes',
      flowEmoji: '\u{1F50D}',
      flowSep: '→',
      flow: [
        { tone: 'blue', icon: '1', title: 'Find the curves', sub: '' },
        { tone: 'blue', icon: '2', title: 'Read off P*',     sub: '' },
        { tone: 'blue', icon: '3', title: 'Read off Y*',     sub: '' }
      ],

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'The same economy can reach inflation in different ways. If AD rises, output usually rises too. If SRAS falls, prices rise while output falls.'
      },
      examEdge: 'Always identify which curve shifts. An AD shift and an SRAS shift can both raise inflation, but they imply different output effects and different policies.'
    },

    /* ============================================================
       CARD 3 – Reading national-income data
       ============================================================ */
    {
      id: 'reading-national-income-data',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 3',
      title: 'Reading national-income data',
      lede: 'GDP data only becomes meaningful for welfare after a series of <strong>adjustments and judgements</strong>.',
      ledeStyle: 'plain',
      tip: { icon: '✓', tone: 'green', text: 'A bigger GDP number is not automatically a bigger welfare gain.' },

      causesFirst: true,
      causesLabel: 'The five filters',
      causesEmoji: '\u{1F50D}',
      causes: [
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Real',         body: 'Strip out inflation so growth is measured in volume, not just prices.' },
        { tone: 'amber',  icon: '\u{1F465}', head: 'Per capita',   body: 'Divide by population to see what happens per person.' },
        { tone: 'purple', icon: '⚖️', head: 'Distribution', body: 'Averages can hide inequality and weak median incomes.' },
        { tone: 'green',  icon: '\u{1F343}', head: 'Sustainability', body: 'Depletion and pollution can make GDP look better than welfare.' },
        { tone: 'blue',   icon: '\u{1F310}', head: 'PPP',          body: 'Use purchasing power parity for fairer cross-country comparisons.' },
        { tone: 'rose',   icon: '\u{1F91D}', head: 'Non-market',   body: 'GDP misses unpaid work, household production and subsistence – welfare may be bigger than the number.' }
      ],

      flowTitle: 'Turn GDP into a judgement',
      flowEmoji: '\u{1F3AF}',
      flowSep: '→',
      flow: [
        { tone: 'blue', icon: '1', title: 'Start with GDP',        sub: '' },
        { tone: 'blue', icon: '2', title: 'Apply the 5 filters',   sub: '' },
        { tone: 'blue', icon: '3', title: 'Make a welfare judgement', sub: '' }
      ],

      causes2Label: 'Quick example',
      causes2Emoji: '\u{1F50D}',
      causes2Cols: 3,
      causes2: [
        { tone: 'slate',  icon: '\u{1F4CA}', head: 'Country A: GDP up 4%', body: 'Headline figure – needs unpacking by the filters.' },
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Real growth ≈ 1%',     body: 'Inflation is high. Population is rising, so per capita ≈ 0.2%.' },
        { tone: 'purple', icon: '\u{279C}',  head: 'Welfare ≪ 4%',    body: 'Gains concentrated at the top mean median incomes barely move – welfare improved by much less than 4%.' }
      ],

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'National income is a useful starting point, but welfare analysis needs context, adjustment and judgement.'
      },
      examEdge: 'Strong evaluation moves beyond raw GDP. Mention real terms, per capita data, distribution and sustainability before concluding whether living standards truly improved.',

      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};
