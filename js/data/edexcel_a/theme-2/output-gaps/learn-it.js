/* ============================================================
   ECONOS – Equilibrium National Income (Theme 2 · 4.4 / 5.2)
   4 cards · J=W view → AD/AS view → output gaps →
   reading national income data
   Spec: Edexcel A 2.4.3 + 2.5.2
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'output-gaps',
  topicNum: '2.5.2',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Output Gaps',
  estTime: '5 min',
  goal: 'Distinguish recessionary and inflationary output gaps and the policy response each calls for.',

  intro: {
    heroKey: 'heroOutputGaps',
    summary: 'Equilibrium is not always at full employment. When actual output falls below full-employment potential, the economy has a recessionary (negative) gap. When it overshoots, it has an inflationary (positive) gap. The size and sign of the gap shape the case for demand-side stimulus or restraint.',
    doInThis: 'Diagnose each kind of output gap on AD/AS, name the causes, and match the appropriate policy response.',
    outcomes: [
      'Distinguish recessionary from inflationary output gaps',
      'Show each on an AD/AS diagram',
      'Match a gap to the appropriate demand-side policy response'
    ],
    tip: 'Gaps are about distance from Yf. Always state which gap and how large, then pick the policy.',
    stages: [
      { num: 1, name: 'Learn it', sub: '1 concept card', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    /* ============================================================
       CARD 1 – Recessionary and inflationary gaps
       ============================================================ */
    {
      id: 'output-gaps',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Recessionary and inflationary gaps',
      lede: 'Equilibrium is <strong>not always at full employment output</strong>.',
      ledeStyle: 'plain',
      tip: { icon: '✓', tone: 'green', text: 'A gap shows the distance between current equilibrium and full-employment output Y₀ₑ.' },

      // Two stacked Classical/Keynesian toggles – one per gap type.
      // The recessionary gap (AD-left) and inflationary gap (AD-right)
      // are exactly where the two schools genuinely disagree: Classical
      // says either gap self-corrects via wage flex; Keynesian says
      // sticky wages keep the gap persistent until policy acts.
      interactiveDiagram: [
        {
          svgKey: 'adShiftLeftClassicalKeynesian',
          label: 'RECESSIONARY GAP – AD BELOW POTENTIAL',
          emoji: '\u{1F4C9}',
          layers: ['idl-1', 'idl-2'],
          inverseLayers: ['idl-old-solid'],
          perspectives: ['classical', 'keynesian'],
          perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
          views: [
            { label: 'At potential (Y₀ₑ)', show: [],
              classical: { tone: 'purple', head: 'At potential.', body: ['AD₁ meets LRAS at Y₀ₑ – no gap in the long run.'] },
              keynesian: { tone: 'amber', head: 'At capacity.', body: ['AD₁ meets the reverse-L AS at full employment Y₀ₑ.'] } },
            { label: 'AD falls', show: ['idl-1'],
              classical: { tone: 'purple', head: 'AD₁ → AD₂.', body: ['A negative demand shock (confidence collapse, fiscal tightening, foreign slowdown) shifts AD left.'] },
              keynesian: { tone: 'amber', head: 'AD₁ → AD₂.', body: ['A negative demand shock shifts AD left.'] } },
            { label: 'The gap', show: ['idl-1', 'idl-2'],
              classical: { tone: 'purple', head: 'No real gap in the long run.', body: ['Output returns to Y₀ₑ at a <strong>lower price level P₂</strong>. The short-run dip below Y₀ₑ is closed by <strong>downward wage pressure</strong> from unemployment – costs fall, SRAS slides back, the economy lands on LRAS.'], analysis: 'Classical reading: a recessionary gap is a <em>short-run</em> phenomenon – wages and prices flex, the economy self-corrects. The diagram shows the LR equilibrium; the temporary dip below Y₀ₑ during the adjustment isn\'t shown. No stimulus needed.' },
              keynesian: { tone: 'rose', head: 'Gap persists.', body: ['Output stays at Y₂ &lt; Y₀ₑ; the recessionary gap is the distance to potential.', '<strong>Sticky wages</strong> stop the self-correction – unemployment can persist for years.'], analysis: 'Keynesian reading: without fiscal or monetary stimulus to restore AD, the recessionary gap stays open. This is the case for active demand management – the textbook example of the 2008 crisis and the slow recovery that followed.' } }
          ]
        },
        {
          svgKey: 'adShiftClassicalKeynesian',
          label: 'INFLATIONARY GAP – AD ABOVE POTENTIAL',
          emoji: '\u{1F4C8}',
          layers: ['idl-1', 'idl-2'],
          inverseLayers: ['idl-old-solid'],
          perspectives: ['classical', 'keynesian'],
          perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
          views: [
            { label: 'At potential (Y₀ₑ)', show: [],
              classical: { tone: 'purple', head: 'At potential.', body: ['AD₁ meets LRAS at Y₀ₑ – no gap in the long run.'] },
              keynesian: { tone: 'amber', head: 'At capacity.', body: ['AD₁ meets the reverse-L AS at Y₀ₑ.'] } },
            { label: 'AD rises', show: ['idl-1'],
              classical: { tone: 'purple', head: 'AD₁ → AD₂.', body: ['A positive demand shock (loose monetary policy, fiscal expansion, export boom) shifts AD right.'] },
              keynesian: { tone: 'amber', head: 'AD₁ → AD₂.', body: ['A positive demand shock shifts AD right.'] } },
            { label: 'The gap', show: ['idl-1', 'idl-2'],
              classical: { tone: 'purple', head: 'Only prices rise – no real gap.', body: ['On vertical LRAS the AD shift is <strong>purely inflationary</strong>; output cannot exceed Y₀ₑ in the long run.'], analysis: 'Classical reading: there is no sustainable inflationary gap. Demand stimulus past full employment shows up as inflation only – the central case for monetary restraint.' },
              keynesian: { tone: 'rose', head: 'Output above potential – overheating.', body: ['Output pushes to Y₂ &gt; Y₀ₑ – labour and goods markets are stretched; the gap is inflationary.', 'Without policy restraint, wage demands rise and inflation expectations un-anchor.'], analysis: 'Keynesian reading: an inflationary gap is a real, persistent overheating that needs <strong>contractionary policy</strong> (higher rates, fiscal tightening) to close. Inflation is the cost of running the economy above its sustainable speed limit.' } }
          ]
        }
      ],

      pairFirst: true,
      pairLabel: 'Classical vs Keynesian',
      pairEmoji: '\u{1F465}',
      left: {
        tone: 'blue',
        icon: '\u{1F3DB}️',
        iconStyle: 'circle',
        label: 'Classical view',
        text: 'Wages and prices are flexible, so the economy tends back toward full employment in the long run.'
      },
      right: {
        tone: 'purple',
        icon: '\u{1F9E0}',
        iconStyle: 'circle',
        label: 'Keynesian view',
        text: 'Wages and prices can be sticky, so equilibrium can persist below Y₀ₑ and policy may be needed.'
      },

      flowTitle: 'Policy logic',
      flowEmoji: '⚙️',
      flowSep: '→',
      flow: [
        { tone: 'blue', icon: '1', title: 'Spot the gap',                          sub: '' },
        { tone: 'blue', icon: '2', title: 'Diagnose spare capacity or overheating', sub: '' },
        { tone: 'blue', icon: '3', title: 'Choose stimulus or restraint',           sub: '' }
      ],

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'Below Y₀ₑ the problem is weak demand or sticky adjustment. Above Y₀ₑ the problem is overheating and inflation pressure.'
      },
      examEdge: 'Use the phrase <em>recessionary gap</em> for below-full-employment equilibrium and <em>inflationary gap</em> for above-full-employment equilibrium. Then state why the policy response differs.'
    }

  ]
};
