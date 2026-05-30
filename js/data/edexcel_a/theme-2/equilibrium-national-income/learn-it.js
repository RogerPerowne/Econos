/* ============================================================
   ECONOS – Equilibrium National Income (Theme 2 · 4.4 / 5.2)
   4 cards · J=W view → AD/AS view → output gaps →
   reading national income data
   Spec: Edexcel A 2.4.3 + 2.5.2
   ============================================================ */

/* Mini chart references — SVG content lives in js/diagrams/static/inline-extracted.js
   Keys: eniMiniChartBoom (AD shifts right – boom) and eniMiniChartOil (SRAS shifts left – oil shock).
   We read from window.ECONOS_ICONS which is populated by that static file before app.js runs. */
const ENI_MINI_CHART_BOOM = (window.ECONOS_ICONS && window.ECONOS_ICONS['eniMiniChartBoom']) || '';
const ENI_MINI_CHART_OIL  = (window.ECONOS_ICONS && window.ECONOS_ICONS['eniMiniChartOil'])  || '';

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

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✓', text: 'When injections equal withdrawals, planned spending equals output.' },
        { type: 'calloutStrip', tone: 'blue', icon: '\u{1F4D0}', text: 'What is the 45° line? — It\'s the line where <strong>planned expenditure equals actual output</strong> (E = Y). Anywhere on it, what households and firms plan to spend exactly matches what the economy produces. Equilibrium national income is therefore wherever the <strong>E line crosses the 45° line</strong> – the only output level where plans and reality match.' },
        { type: 'econDiagram', chart: 'fortyFive', views: [
          {
            label: 'The 45° line',
            show: ['fortyfive'],
            analysis: 'The 45° line is the set of all points where planned expenditure equals actual output (AE = Y). Anywhere on this line the economy would be in equilibrium — the question is which point the AE schedule pins down.'
          },
          {
            label: 'Equilibrium at E₀',
            points: ['E0'],
            analysis: 'The AE schedule (slope = MPC < 1) is shallower than the 45° line. It crosses the 45° line at E₀ — equilibrium national income Y*. Above Y* planned spending falls short of output, so firms cut back. Below Y* planned spending exceeds output, so firms expand. Only at Y* are plans consistent.'
          }
        ]},
        { type: 'sectionHeader', icon: '\u{1F53A}', label: 'What if the economy is off equilibrium?' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'amber', icon: '\u{2B07}️', head: 'Below equilibrium', body: ENI_STEP_ROW('#F59E0B', [
            { icon: '\u{1F4CA}', label: 'Y too low', arrow: true },
            { icon: '\u{1F4E6}', label: 'Stocks fall', arrow: true },
            { icon: '\u{1F3ED}', label: 'Firms raise output', arrow: true },
            { icon: '\u{1F4C8}', label: 'Income rises back toward Y*', arrow: false }
          ]) },
          { type: 'tile', tone: 'blue', icon: '\u{2B06}️', head: 'Above equilibrium', body: ENI_STEP_ROW('#2563EB', [
            { icon: '\u{1F4CA}', label: 'Y too high', arrow: true },
            { icon: '\u{1F4E6}', label: 'Stocks pile up', arrow: true },
            { icon: '\u{1F3ED}', label: 'Firms cut output', arrow: true },
            { icon: '\u{1F4C9}', label: 'Income falls back toward Y*', arrow: false }
          ]) }
        ]},
        { type: 'sectionHeader', icon: '\u{1F4A1}', label: 'The big idea' },
        { type: 'mechanismChain', steps: [
          { label: 'Compare J with W',    detail: '' },
          { label: 'Watch inventories',   detail: '' },
          { label: 'Firms adjust output', detail: '' }
        ]},
        { type: 'bigIdea', text: 'Inventory movements are the adjustment mechanism. If planned spending exceeds output, firms respond by producing more. If planned spending falls short, they cut back.' },
        { type: 'examEdge', title: 'Exam edge', text: 'In strong essays, state that the equilibrium level of national income is where injections equal withdrawals – which is the same equilibrium shown where planned expenditure crosses the 45° line.' }
      ]
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

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✓', text: 'Equilibrium in AD/AS gives both P* and Y*.' },
        { type: 'diagram', svgKey: 'eniAdAsCore', caption: 'The core diagram' },
        { type: 'sectionHeader', icon: '\u{1F53A}', label: 'Two shocks, two outcomes' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'green', icon: '\u{2B06}️', head: 'AD shifts right – confidence boom', body: ENI_MINI_CHART_BOOM + '<ul style="margin:10px 0 0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.55;"><li><strong>P rises</strong></li><li><strong>Y rises</strong></li><li><strong>Demand is stronger</strong></li></ul><div style="font-size:12.5px;color:#475569;margin-top:6px;">Consumer confidence, spending and investment rise.</div>' },
          { type: 'tile', tone: 'amber', icon: '\u{2B07}️', head: 'SRAS shifts left – oil shock', body: ENI_MINI_CHART_OIL + '<ul style="margin:10px 0 0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.55;"><li><strong>P rises</strong></li><li><strong>Y falls</strong></li><li><strong>Stagflation risk</strong></li></ul><div style="font-size:12.5px;color:#475569;margin-top:6px;">Higher input costs squeeze output and raise prices.</div>' }
        ]},
        { type: 'sectionHeader', icon: '\u{1F50D}', label: 'Read the axes' },
        { type: 'mechanismChain', steps: [
          { label: 'Find the curves', detail: '' },
          { label: 'Read off P*',     detail: '' },
          { label: 'Read off Y*',     detail: '' }
        ]},
        { type: 'bigIdea', text: 'Big idea: The same economy can reach inflation in different ways. If AD rises, output usually rises too. If SRAS falls, prices rise while output falls.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Always identify which curve shifts. An AD shift and an SRAS shift can both raise inflation, but they imply different output effects and different policies.' }
      ]
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

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✓', text: 'A gap shows the distance between current equilibrium and full-employment output Y₀ₑ.' },
        { type: 'diagram', svgKey: 'eniOutputGapsTwin', caption: 'Two types of gap' },
        { type: 'sectionHeader', icon: '\u{1F465}', label: 'Classical vs Keynesian' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue',   icon: '\u{1F3DB}️', head: 'Classical view',  body: 'Wages and prices are flexible, so the economy tends back toward full employment in the long run.' },
          { type: 'tile', tone: 'purple', icon: '\u{1F9E0}',  head: 'Keynesian view', body: 'Wages and prices can be sticky, so equilibrium can persist below Y₀ₑ and policy may be needed.' }
        ]},
        { type: 'sectionHeader', icon: '⚙️', label: 'Policy logic' },
        { type: 'mechanismChain', steps: [
          { label: 'Spot the gap',                          detail: '' },
          { label: 'Diagnose spare capacity or overheating', detail: '' },
          { label: 'Choose stimulus or restraint',           detail: '' }
        ]},
        { type: 'bigIdea', text: 'Big idea: Below Y₀ₑ the problem is weak demand or sticky adjustment. Above Y₀ₑ the problem is overheating and inflation pressure.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Use the phrase <em>recessionary gap</em> for below-full-employment equilibrium and <em>inflationary gap</em> for above-full-employment equilibrium. Then state why the policy response differs.' }
      ]
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

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✓', text: 'A bigger GDP number is not automatically a bigger welfare gain.' },
        { type: 'sectionHeader', icon: '\u{1F50D}', label: 'The five filters' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',   icon: '\u{1F4C8}', head: 'Real',          body: 'Strip out inflation so growth is measured in volume, not just prices.' },
          { type: 'tile', tone: 'amber',  icon: '\u{1F465}', head: 'Per capita',    body: 'Divide by population to see what happens per person.' },
          { type: 'tile', tone: 'purple', icon: '⚖️',        head: 'Distribution',  body: 'Averages can hide inequality and weak median incomes.' },
          { type: 'tile', tone: 'green',  icon: '\u{1F343}', head: 'Sustainability', body: 'Depletion and pollution can make GDP look better than welfare.' },
          { type: 'tile', tone: 'blue',   icon: '\u{1F310}', head: 'PPP',           body: 'Use purchasing power parity for fairer cross-country comparisons.' },
          { type: 'tile', tone: 'rose',   icon: '\u{1F91D}', head: 'Non-market',    body: 'GDP misses unpaid work, household production and subsistence – welfare may be bigger than the number.' }
        ]},
        { type: 'sectionHeader', icon: '\u{1F3AF}', label: 'Turn GDP into a judgement' },
        { type: 'mechanismChain', steps: [
          { label: 'Start with GDP',           detail: '' },
          { label: 'Apply the 5 filters',      detail: '' },
          { label: 'Make a welfare judgement', detail: '' }
        ]},
        { type: 'sectionHeader', icon: '\u{1F50D}', label: 'Quick example' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'slate',  icon: '\u{1F4CA}', head: 'Country A: GDP up 4%', body: 'Headline figure – needs unpacking by the filters.' },
          { type: 'tile', tone: 'blue',   icon: '\u{1F4C8}', head: 'Real growth ≈ 1%',     body: 'Inflation is high. Population is rising, so per capita ≈ 0.2%.' },
          { type: 'tile', tone: 'purple', icon: '\u{279C}',  head: 'Welfare ≪ 4%',         body: 'Gains concentrated at the top mean median incomes barely move – welfare improved by much less than 4%.' }
        ]},
        { type: 'bigIdea', text: 'Big idea: National income is a useful starting point, but welfare analysis needs context, adjustment and judgement.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Strong evaluation moves beyond raw GDP. Mention real terms, per capita data, distribution and sustainability before concluding whether living standards truly improved.' }
      ],

      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};
