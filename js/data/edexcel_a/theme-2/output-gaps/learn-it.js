/* ============================================================
   ECONOS – Output Gaps (Edexcel A 2.5.2)
   3 cards · expanded from the single split-out card (v0.162.1).
   Split from `equilibrium-national-income` on 2026-06-05.

   Card patterns:
     1 Twin-comparison chart (outputGapSign) + flow chain (definition)
     2 Dual Classical/Keynesian AD/AS interactives (the diagram card)
     3 Tile grid (measurement problems) + pair (policy stakes) —
       spec 2.5.2(b) names measurement difficulty explicitly
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'output-gaps',
  topicNum: '2.5.2',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Output Gaps',
  estTime: '12 min',
  goal: 'Define the output gap against the long-term trend, diagnose positive and negative gaps on AD/AS, and evaluate why gaps are hard to measure.',

  intro: {
    heroKey: 'heroOutputGaps',
    summary: 'Equilibrium is not always at full employment. When actual output falls below full-employment potential, the economy has a recessionary (negative) gap. When it overshoots, it has an inflationary (positive) gap. The size and sign of the gap shape the case for demand-side stimulus or restraint.',
    doInThis: 'Diagnose each kind of output gap on AD/AS, name the causes, and match the appropriate policy response.',
    outcomes: [
      'Define the output gap as actual output relative to the long-term trend',
      'Distinguish recessionary from inflationary output gaps',
      'Show each on an AD/AS diagram',
      'Match a gap to the appropriate demand-side policy response',
      'Explain why output gaps are difficult to measure'
    ],
    tip: 'Gaps are about distance from Yf. Always state which gap and how large, then pick the policy.',
    stages: [
      { num: 1, name: 'Learn it', sub: '3 cards \xb7 12 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    /* ============================================================
       CARD 1 – What an output gap is — actual vs trend
       Pattern: Twin-comparison chart + flow chain
       ============================================================ */
    {
      id: 'gap-definition',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 3',
      title: 'What an output gap is — actual vs trend',
      lede: 'Actual output rides above and below the economy’s long-term trend. The output gap is the distance between them at a moment in time — and its sign names the problem.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4CF}', tone: 'green', text: 'Mind the units: actual and trend <strong>growth</strong> are rates of change; the output <strong>gap</strong> is a level — actual output minus potential output, usually quoted as % of potential.' },

      visualKey: 'outputGapSign',
      visualLabel: 'THE SIGN OF THE GAP',
      visualEmoji: '\u{3030}\u{FE0F}',
      visualCaption: 'Same rising trend in both panels — only the position of actual output differs.',

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Trend output rises', sub: 'Potential grows with capacity (2.5.1).' },
        { tone: 'blue',   icon: '\u{3030}\u{FE0F}', title: 'Actual output fluctuates', sub: 'The trade cycle moves it above and below trend.' },
        { tone: 'purple', icon: '\u{1F4CF}', title: 'The gap opens', sub: 'Gap = actual − potential, at a point in time.' },
        { tone: 'amber',  icon: '\u{2696}\u{FE0F}', title: 'The sign names the problem', sub: 'Negative = spare capacity; positive = overheating.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Negative gaps pair with unemployment and disinflation; positive gaps with labour shortages and rising inflation. The next card draws both on AD/AS.' },

      conclusion: { title: 'Big idea', text: 'The output gap turns "how is the economy doing?" into one signed number: distance from the sustainable trend.' },
      examEdge: 'Define the gap in one sentence — actual output relative to potential output — then immediately give its sign and what that implies. Examiners reward the sign-to-problem link.'
    },

    /* ============================================================
       CARD 2 – Recessionary and inflationary gaps (AD/AS)
       ============================================================ */
    {
      id: 'output-gaps',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 3',
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
          svgKey: 'ogRecessCK',
          label: 'RECESSIONARY GAP – AD BELOW POTENTIAL',
          emoji: '\u{1F4C9}',
          layers: ['idl-1', 'idl-2'],
          inverseLayers: ['idl-old-solid'],
          perspectives: ['classical', 'keynesian'],
          perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
          views: [
            { label: 'At potential (Yf)', show: [],
              classical: { tone: 'purple', head: 'At potential.', body: ['AD₁ meets LRAS at Yf — SRAS₁ passes through the same point E₁.'] },
              keynesian: { tone: 'amber', head: 'At capacity.', body: ['AD₁ meets the reverse-L AS at full employment Yf.'] } },
            { label: 'AD falls — the gap opens', show: ['idl-1'],
              classical: { tone: 'rose', head: 'Short run: down SRAS₁ to E₂.', body: ['A negative demand shock shifts AD left. In the short run the economy slides down <strong>SRAS₁</strong> to E₂: output falls to <strong>Y₂ &lt; Yf</strong> — a recessionary gap opens <em>even in the classical world</em>.'] },
              keynesian: { tone: 'amber', head: 'AD₁ → AD₂.', body: ['A negative demand shock shifts AD left.'] } },
            { label: 'What happens to the gap', show: ['idl-1', 'idl-2'],
              classical: { tone: 'purple', head: 'Long run: the gap closes itself.', body: ['Unemployment puts <strong>downward pressure on wages</strong>; costs fall, so <strong>SRAS₁ shifts to SRAS₂</strong>. The economy lands at E₃ — back on LRAS at Yf, at a lower price level <strong>P₃</strong>.'], analysis: 'Classical reading: the recessionary gap is real but <em>temporary</em> — wage flexibility closes it without help. The dispute with Keynes is not whether the gap exists; it is whether wages actually fall fast enough. No stimulus needed.' },
              keynesian: { tone: 'rose', head: 'Gap persists.', body: ['Output stays at Y₂ &lt; Yf; the recessionary gap is the distance to potential.', '<strong>Sticky wages</strong> stop the self-correction – unemployment can persist for years.'], analysis: 'Keynesian reading: without fiscal or monetary stimulus to restore AD, the recessionary gap stays open. This is the case for active demand management – the textbook example of the 2008 crisis and the slow recovery that followed.' } }
          ]
        },
        {
          svgKey: 'ogInflatCK',
          label: 'INFLATIONARY GAP – AD ABOVE POTENTIAL',
          emoji: '\u{1F4C8}',
          layers: ['idl-1', 'idl-2'],
          inverseLayers: ['idl-old-solid'],
          perspectives: ['classical', 'keynesian'],
          perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
          views: [
            { label: 'At potential (Yf)', show: [],
              classical: { tone: 'purple', head: 'At potential.', body: ['AD₁ meets LRAS at Yf — SRAS₁ passes through the same point E₁.'] },
              keynesian: { tone: 'amber', head: 'At capacity.', body: ['AD₁ meets the reverse-L AS at Yf.'] } },
            { label: 'AD rises — the gap opens', show: ['idl-1'],
              classical: { tone: 'rose', head: 'Short run: up SRAS₁ to E₂.', body: ['A positive demand shock shifts AD right. In the short run the economy rides up <strong>SRAS₁</strong> to E₂: output pushes to <strong>Y₂ &gt; Yf</strong> — an inflationary gap, with overtime, re-hired capacity and stretched supply chains doing the impossible-on-paper.'] },
              keynesian: { tone: 'amber', head: 'AD₁ → AD₂.', body: ['A positive demand shock shifts AD right.'] } },
            { label: 'What happens to the gap', show: ['idl-1', 'idl-2'],
              classical: { tone: 'purple', head: 'Long run: wages bid the gap away.', body: ['Tight labour markets <strong>bid wages up</strong>; costs rise, so <strong>SRAS₁ shifts to SRAS₂</strong>. The economy lands at E₃ — back on LRAS at Yf, at a higher price level <strong>P₃</strong>.'], analysis: 'Classical reading: the boom above Yf cannot last — it burns itself out as wages catch up, leaving only inflation behind. That is the central case for monetary restraint: stimulus past full employment buys a temporary gap at a permanent price-level cost.' },
              keynesian: { tone: 'rose', head: 'Output above potential – overheating.', body: ['Output pushes to Y₂ &gt; Yf – labour and goods markets are stretched; the gap is inflationary.', 'Without policy restraint, wage demands rise and inflation expectations un-anchor.'], analysis: 'Keynesian reading: an inflationary gap is a real, persistent overheating that needs <strong>contractionary policy</strong> (higher rates, fiscal tightening) to close. Inflation is the cost of running the economy above its sustainable speed limit.' } }
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
    },

    /* ============================================================
       CARD 3 – Why output gaps are hard to measure
       Pattern: Tile grid (measurement problems) + pair (policy stakes)
       Spec 2.5.2(b) names measurement difficulty explicitly.
       ============================================================ */
    {
      id: 'gap-measurement',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 3',
      title: 'Why output gaps are hard to measure',
      lede: 'Policy hangs on the size and sign of the gap — yet the gap itself cannot be observed. Every number you see is an estimate, and estimates disagree.',
      ledeStyle: 'plain',

      tip: { icon: '\u{26A0}\u{FE0F}', tone: 'amber', text: 'Potential output is <strong>invisible</strong>. Only actual GDP is measured — the trend it is compared against has to be estimated.' },

      causesLabel: 'THE THREE MEASUREMENT PROBLEMS',
      causesEmoji: '\u{1F50D}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'purple', icon: '\u{1F47B}', head: 'Potential is unobservable', body: 'No statistician can measure full capacity directly — it is inferred from trends, unemployment and survey data.' },
        { tone: 'blue',   icon: '\u{1F4DD}', head: 'GDP gets revised',          body: 'Early GDP estimates are corrected for years afterwards — the "actual" side of the gap moves too.' },
        { tone: 'amber',  icon: '\u{1F3DB}\u{FE0F}', head: 'Estimates disagree', body: 'The OBR, the Bank of England and the OECD routinely publish different gaps for the same economy at the same moment.' }
      ],

      pairLabel: 'WHY IT MATTERS — the policy stakes',
      pairEmoji: '\u{2696}\u{FE0F}',
      left: {
        tone: 'rose',
        icon: '\u{1F4C9}',
        iconStyle: 'circle',
        label: 'Overestimate the (negative) gap…',
        text: 'Policymakers stimulate an economy with less spare capacity than they think — the “gap” closes into <strong>inflation</strong>. Many economists read the 1970s, and 2021–22, this way.'
      },
      right: {
        tone: 'blue',
        icon: '\u{1F9CA}',
        iconStyle: 'circle',
        label: '…or underestimate it',
        text: 'Policymakers hold back while genuine spare capacity sits idle — slower recovery, avoidable unemployment, and possible <strong>hysteresis</strong> damage to the trend itself.'
      },

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'This is why central banks track a dashboard — vacancies, wage growth, capacity-utilisation surveys — rather than trusting any single gap estimate.' },

      conclusion: { title: 'Big idea', text: 'The output gap is essential and unmeasurable at the same time — treat every published gap as an estimate with error bars, not a fact.' },
      examEdge: 'Measurement difficulty is a ready-made evaluation paragraph: any policy argument built on the gap inherits the uncertainty of the gap estimate itself. Name one source of error and one consequence of getting it wrong.'
    }

  ]
};
