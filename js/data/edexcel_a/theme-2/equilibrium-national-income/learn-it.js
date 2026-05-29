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
const ENI_MINI_CHART_BOOM = `
  <svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
    <line x1="40" y1="170" x2="305" y2="170" stroke="#94A3B8" stroke-width="1.2"/>
    <line x1="40" y1="170" x2="40" y2="20" stroke="#94A3B8" stroke-width="1.2"/>
    <polygon points="305,170 298,167 298,173" fill="#94A3B8"/>
    <polygon points="40,20 36,27 44,27" fill="#94A3B8"/>
    <text x="22" y="30" font-size="11" fill="#475569" font-family="Inter,sans-serif">P</text>
    <text x="298" y="188" font-size="11" fill="#475569" font-family="Inter,sans-serif">Y</text>
    <line x1="55" y1="165" x2="290" y2="35" stroke="#0B1426" stroke-width="2"/>
    <text x="294" y="38" font-size="11" fill="#0B1426" font-family="Inter,sans-serif" font-weight="700">SRAS</text>
    <line x1="50" y1="50" x2="250" y2="170" stroke="#2563EB" stroke-width="2" stroke-dasharray="4 3" opacity="0.55"/>
    <text x="245" y="158" font-size="10" fill="#2563EB" font-family="Inter,sans-serif" font-weight="600" opacity="0.75">AD₁</text>
    <line x1="100" y1="50" x2="300" y2="170" stroke="#2563EB" stroke-width="2.2"/>
    <text x="298" y="160" font-size="10" fill="#2563EB" font-family="Inter,sans-serif" font-weight="700">AD₂</text>
    <line x1="152" y1="111" x2="152" y2="170" stroke="#94A3B8" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="152" y1="111" x2="40" y2="111" stroke="#94A3B8" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="178" y1="97" x2="178" y2="170" stroke="#94A3B8" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="178" y1="97" x2="40" y2="97" stroke="#94A3B8" stroke-width="1" stroke-dasharray="3 3"/>
    <circle cx="152" cy="111" r="3.8" fill="#fff" stroke="#2563EB" stroke-width="2"/>
    <circle cx="178" cy="97" r="3.8" fill="#fff" stroke="#2563EB" stroke-width="2"/>
    <text x="22" y="115" font-size="10" fill="#475569" font-family="Inter,sans-serif">P₁</text>
    <text x="22" y="100" font-size="10" fill="#475569" font-family="Inter,sans-serif">P₂</text>
    <text x="146" y="184" font-size="10" fill="#475569" font-family="Inter,sans-serif">Y₁</text>
    <text x="172" y="184" font-size="10" fill="#475569" font-family="Inter,sans-serif">Y₂</text>
    <path d="M155 68 L200 68" stroke="#16A34A" stroke-width="2.2" marker-end="url(#eni-arrow-green-boom)"/>
    <defs>
      <marker id="eni-arrow-green-boom" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="#16A34A"/></marker>
    </defs>
  </svg>`;

/* Mini chart: SRAS shifts left (oil shock).
   House rules: SRAS always BLACK; shift keeps colour, only old=dashed/new=solid.
   Plot x:[40,300] y:[20,170].
   AD BLUE solid downward (50,50)→(290,170) slope +0.5 (unchanged).
   SRAS₁ BLACK DASHED upward (100,165)→(290,35) slope -0.684.
   SRAS₂ BLACK SOLID, shifted -50: (50,165)→(240,35) slope -0.684.
   Old eq (AD×SRAS₁): (176, 113). New eq (AD×SRAS₂): (147, 99).
   Y₂ < Y₁ ✓, P₂ > P₁ ✓.
   Shift arrow stays amber as a section-theme accent (not a curve). */
const ENI_MINI_CHART_OIL = `
  <svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
    <line x1="40" y1="170" x2="305" y2="170" stroke="#94A3B8" stroke-width="1.2"/>
    <line x1="40" y1="170" x2="40" y2="20" stroke="#94A3B8" stroke-width="1.2"/>
    <polygon points="305,170 298,167 298,173" fill="#94A3B8"/>
    <polygon points="40,20 36,27 44,27" fill="#94A3B8"/>
    <text x="22" y="30" font-size="11" fill="#475569" font-family="Inter,sans-serif">P</text>
    <text x="298" y="188" font-size="11" fill="#475569" font-family="Inter,sans-serif">Y</text>
    <line x1="100" y1="165" x2="290" y2="35" stroke="#0B1426" stroke-width="2" stroke-dasharray="4 3" opacity="0.55"/>
    <text x="292" y="28" font-size="10" fill="#0B1426" font-family="Inter,sans-serif" font-weight="600" opacity="0.75">SRAS₁</text>
    <line x1="50" y1="165" x2="240" y2="35" stroke="#0B1426" stroke-width="2.2"/>
    <text x="244" y="28" font-size="10" fill="#0B1426" font-family="Inter,sans-serif" font-weight="700">SRAS₂</text>
    <line x1="50" y1="50" x2="290" y2="170" stroke="#2563EB" stroke-width="2"/>
    <text x="294" y="178" font-size="11" fill="#2563EB" font-family="Inter,sans-serif" font-weight="700">AD</text>
    <line x1="176" y1="113" x2="176" y2="170" stroke="#94A3B8" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="176" y1="113" x2="40" y2="113" stroke="#94A3B8" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="147" y1="99" x2="147" y2="170" stroke="#94A3B8" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="147" y1="99" x2="40" y2="99" stroke="#94A3B8" stroke-width="1" stroke-dasharray="3 3"/>
    <circle cx="176" cy="113" r="3.8" fill="#fff" stroke="#2563EB" stroke-width="2"/>
    <circle cx="147" cy="99" r="3.8" fill="#fff" stroke="#2563EB" stroke-width="2"/>
    <text x="22" y="117" font-size="10" fill="#475569" font-family="Inter,sans-serif">P₁</text>
    <text x="22" y="103" font-size="10" fill="#475569" font-family="Inter,sans-serif">P₂</text>
    <text x="141" y="184" font-size="10" fill="#475569" font-family="Inter,sans-serif">Y₂</text>
    <text x="170" y="184" font-size="10" fill="#475569" font-family="Inter,sans-serif">Y₁</text>
    <path d="M195 68 L150 68" stroke="#F59E0B" stroke-width="2.2" marker-end="url(#eni-arrow-amber-oil)"/>
    <defs>
      <marker id="eni-arrow-amber-oil" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="#F59E0B"/></marker>
    </defs>
  </svg>`;

const ENI_STEP_DOT = (tone, icon) => `
  <span style="display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:#fff;border:1.5px solid ${tone};color:${tone};font-size:14px;line-height:1;">${icon}</span>`;

const ENI_STEP_ROW = (tone, steps) => `
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:6px;">
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
  goal: 'Lock in the J=W and 45° views of equilibrium, the AD/AS view, recessionary and inflationary gaps, and the five filters for reading national-income data.',

  intro: {
    heroKey: 'heroMultiplier',
    summary: 'Equilibrium national income is where the economy settles when planned spending equals output – the same point can be shown by injections meeting withdrawals, by E crossing the 45° line, or by AD meeting SRAS. The level the economy actually reaches is rarely the full-employment level, so output gaps appear and shape policy.',
    doInThis: 'Work through 4 cards: equilibrium on the J=W and 45° views, equilibrium on AD/AS, recessionary and inflationary gaps, and how to read GDP data with five welfare filters.',
    outcomes: [
      'Show equilibrium on a J=W diagram and a 45° diagram',
      'Show equilibrium on an AD/AS diagram and analyse demand and supply shocks',
      'Distinguish recessionary and inflationary output gaps and the policy response',
      'Apply the five filters when judging welfare from GDP data'
    ],
    tip: 'Every equilibrium story is the same story told three ways. Pick the diagram the question asks for, but link it back to J = W so your analysis stays coherent.',
    stages: [
      { num: 1, name: 'Learn it', sub: '4 concept cards', state: 'current' },
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
      stepLabel: 'Learn: Step 1 of 4',
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
      stepLabel: 'Learn: Step 2 of 4',
      title: 'AD/AS view of equilibrium',
      lede: 'The <strong>AD/AS model</strong> shows equilibrium where aggregate demand meets aggregate supply, giving both the equilibrium price level and real output.',
      ledeStyle: 'plain',
      tip: { icon: '✓', tone: 'green', text: 'Equilibrium in AD/AS gives both P* and Y*.' },

      visualKey: 'eniAdAsCore',
      visualLabel: 'The core diagram',
      visualEmoji: '⚖️',

      pairFirst: true,
      pairLabel: 'Two shocks, two outcomes',
      pairEmoji: '\u{1F53A}',
      left: {
        tone: 'green',
        icon: '\u{2B06}️',
        iconStyle: 'circle',
        label: 'AD shifts right – confidence boom',
        text: `${ENI_MINI_CHART_BOOM}
          <ul style="margin:10px 0 0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.55;">
            <li><strong>P rises</strong></li>
            <li><strong>Y rises</strong></li>
            <li><strong>Demand is stronger</strong></li>
          </ul>
          <div style="font-size:12.5px;color:#475569;margin-top:6px;">Consumer confidence, spending and investment rise.</div>`
      },
      right: {
        tone: 'amber',
        icon: '\u{2B07}️',
        iconStyle: 'circle',
        label: 'SRAS shifts left – oil shock',
        text: `${ENI_MINI_CHART_OIL}
          <ul style="margin:10px 0 0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.55;">
            <li><strong>P rises</strong></li>
            <li><strong>Y falls</strong></li>
            <li><strong>Stagflation risk</strong></li>
          </ul>
          <div style="font-size:12.5px;color:#475569;margin-top:6px;">Higher input costs squeeze output and raise prices.</div>`
      },

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
       CARD 3 – Recessionary and inflationary gaps
       ============================================================ */
    {
      id: 'output-gaps',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 4',
      title: 'Recessionary and inflationary gaps',
      lede: 'Equilibrium is <strong>not always at full employment output</strong>.',
      ledeStyle: 'plain',
      tip: { icon: '✓', tone: 'green', text: 'A gap shows the distance between current equilibrium and full-employment output Y₀ₑ.' },

      visualKey: 'eniOutputGapsTwin',
      visualLabel: 'Two types of gap',
      visualEmoji: '⚖️',

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
       CARD 4 – Reading national-income data
       ============================================================ */
    {
      id: 'reading-national-income-data',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 4',
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
        { tone: 'blue',   icon: '\u{1F310}', head: 'PPP',          body: 'Use purchasing power parity for fairer cross-country comparisons.' }
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
