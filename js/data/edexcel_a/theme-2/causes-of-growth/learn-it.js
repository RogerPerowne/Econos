/* ============================================================
   ECONOS – Causes of Growth (Edexcel A 2.5.1)
   3 cards · expanded from the single split-out card (v0.161.0)
   Split from `trade-cycle-shocks-and-economic-growth` on 2026-06-05.
   The trade-cycle wave / shock diagnosis / stagflation policy
   material stays on `trade-business-cycle` (2.5.3); the impact of
   growth lives on `the-impact-of-economic-growth` (2.5.4).

   Card patterns:
     1 Interactive multi-state diagram (wave → trend → drivers → hysteresis)
     2 Hub-and-spoke (growthDriversHub) + flow chain (driver → LRAS → trend)
     3 Sequential flow (export-led engine) + country cases + pair (evaluation)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'causes-of-growth',
  topicNum: '2.5.1',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Causes of Growth',
  estTime: '12 min',
  goal: 'Distinguish actual from potential growth, identify the supply-side drivers that lift the trend, and explain the importance of international trade for export-led growth.',

  intro: {
    heroKey: 'heroGrowth',
    summary: 'Real GDP rides a wave of short-run booms and recessions around a rising long-run trend. The wave is the trade cycle; the trend is growth. Shocks knock the economy off the trend; supply-side improvements – productivity, skills, technology, capital deepening, export-led demand – lift the trend itself.',
    doInThis: 'Build up the actual-vs-potential picture stage by stage: the wave, the trend, the levers that lift the trend, and the risk that a deep recession bends the trend down.',
    outcomes: [
      'Distinguish actual growth from potential growth',
      'Identify the supply-side factors that lift the trend',
      'Explain the importance of trade for export-led growth'
    ],
    tip: 'Always separate the wave (cycle) from the trend (growth). Only supply-side change shifts the trend.',
    stages: [
      { num: 1, name: 'Learn it', sub: '3 cards \xb7 12 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    /* ============================================================
       CARD 1 – Actual vs potential growth
       ============================================================ */
    {
      id: 'actual-vs-potential-growth',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 3',
      title: 'Actual vs potential growth',
      lede: 'Build up the picture stage by stage: the short-run wave, the trend underneath it, the levers that lift the trend, and the risk that a deep recession bends the trend down.',
      ledeStyle: 'plain',
      tip: { icon: '\u{1F512}', tone: 'green', text: 'Actual growth rides around the trend. Potential growth IS the trend.' },

      interactiveDiagram: {
        svgKey: 'actualVsPotentialGrowth',
        wide: true,
        maxWidth: '100%',
        label: 'Click through the four stages',
        emoji: '\u{3030}\u{FE0F}',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'Actual GDP only',
            tone: 'blue',
            head: 'Stage 1 – the cycle wave',
            body: 'Real GDP over time. The wave — boom, slowdown, recession, recovery — is the short-run fluctuation (covered in full in the Trade &amp; Business Cycle topic). So far there is nothing underneath it to fluctuate <em>around</em>.',
            analysis: 'On its own, the wave is meaningless. A 3% fall in GDP from a high base is very different from a 3% fall from a stagnant base. We need a reference – something to compare actual GDP against.'
          },
          {
            label: '+ Potential trend',
            tone: 'green',
            head: 'Stage 2 – add potential GDP',
            body: 'The straight green line is <strong>potential GDP</strong> – the level the economy could produce with all factors fully and efficiently employed. The actual wave now has something to fluctuate around.',
            analysis: 'Booms sit above trend (positive output gap); recessions sit below it (negative output gap). The slope of the trend line is potential growth – the topic of this whole card. The wave is the trade cycle; the trend is growth.'
          },
          {
            label: '+ What lifts the trend',
            tone: 'green',
            head: 'Stage 3 – the six drivers',
            body: 'The trend rises over time because the economy’s productive capacity rises over time. Six drivers: <strong>labour force</strong>, <strong>capital stock</strong>, <strong>productivity</strong>, <strong>skills and education</strong>, <strong>technology and infrastructure</strong>, and <strong>trade and export markets</strong>. Each shifts LRAS right.',
            analysis: 'In AD/AS terms, every driver is an LRAS shifter. Demand-side policy can lift actual growth temporarily; only supply-side investment lifts potential growth – the trend itself. Cards 2 and 3 take the drivers (and trade) one at a time.'
          },
          {
            label: '+ Hysteresis',
            tone: 'rose',
            head: 'Stage 4 – when recessions damage the trend',
            body: 'A deep or prolonged recession can bend the trend line <strong>down</strong>. The mechanism: long-term unemployment → skills erode → human capital lost → the economy permanently produces less than it could have.',
            analysis: 'Hysteresis is what makes recessions different from booms in their long-run footprint. A boom does not permanently lift the trend (capacity catches up); a deep recession can permanently lower it. This is one of the strongest arguments for fiscal stimulus in a downturn: not just to soften the wave, but to protect the trend.'
          }
        ]
      },

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'Short-run growth is movement along the cycle wave. Long-run growth is the rise of the trend itself – driven by supply-side investment, threatened by deep recessions via hysteresis.'
      },
      examEdge: 'Always separate the wave from the trend in your first sentence — actual growth is movement around the trend; potential growth is the trend. The next two cards cover what lifts it.'
    },

    /* ============================================================
       CARD 2 – What lifts the trend — the six drivers
       Pattern: Hub-and-spoke (growthDriversHub) + flow chain
       ============================================================ */
    {
      id: 'six-drivers',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 3',
      title: 'What lifts the trend — the six drivers',
      lede: 'Potential growth has supply-side causes: more inputs, better inputs, and better ways of combining them. Six drivers cover every exam answer.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F680}', tone: 'green', text: 'Every driver below is an <strong>LRAS shifter</strong> — that is what makes it a cause of <em>potential</em> (not just actual) growth.' },

      visualKey: 'growthDriversHub',
      visualLabel: 'THE SIX DRIVERS OF POTENTIAL GROWTH',
      visualEmoji: '\u{1F680}',

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green',  icon: '\u{1F527}', title: 'A driver improves',       sub: 'More workers, capital, skills or technology.' },
        { tone: 'blue',   icon: '\u{1F3ED}', title: 'Productive capacity rises', sub: 'The economy can make more with what it has.' },
        { tone: 'purple', icon: '\u{27A1}\u{FE0F}', title: 'LRAS shifts right',  sub: 'The same idea drawn in the AD/AS model.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'The trend line rises',     sub: 'Potential growth — without extra inflation.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Demand-side policy can lift <strong>actual</strong> growth temporarily; only supply-side improvement lifts the <strong>trend</strong> itself.' },

      conclusion: { title: 'Big idea', text: 'Potential growth is the supply side getting stronger — more inputs, better inputs, better technology. The UK productivity puzzle (output per worker flat since 2008) shows what happens when the engine stalls.' },
      examEdge: 'For any "causes of growth" question, name the driver, then complete the chain: capacity rises → LRAS shifts right → non-inflationary growth. The chain is where the analysis marks live.'
    },

    /* ============================================================
       CARD 3 – Export-led growth — trade as the growth engine
       Pattern: Sequential flow + country cases + pair (evaluation)
       Spec 2.5.1 explicitly names the importance of international
       trade for (export-led) growth.
       ============================================================ */
    {
      id: 'export-led-growth',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 3',
      title: 'Export-led growth — trade as the growth engine',
      lede: 'The spec names trade explicitly: access to world markets lets an economy grow faster than its home market alone would ever allow.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F30D}', tone: 'green', text: 'The home market caps demand-led expansion. <strong>World demand has no such cap</strong> — that is the whole appeal of exporting.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'blue',   icon: '\u{1F6A2}', title: 'Sell to world markets', sub: 'Demand no longer capped by the home economy.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Exports scale up',      sub: 'Firms grow far beyond domestic size.' },
        { tone: 'purple', icon: '\u{1F3ED}', title: 'Investment follows',    sub: 'Profits fund capital, skills and technology.' },
        { tone: 'amber',  icon: '\u{1F9E0}', title: 'Productivity spillovers', sub: 'Competing globally forces firms to match the best.' },
        { tone: 'green',  icon: '\u{1F680}', title: 'The trend lifts',       sub: 'Export earnings finance long-run capacity.' }
      ],

      causesLabel: 'THREE ECONOMIES THAT DID IT',
      causesEmoji: '\u{1F3C6}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F1F0}\u{1F1F7}', head: 'South Korea', body: 'From war-torn poverty to high income in two generations — ships, cars, then semiconductors.' },
        { tone: 'amber',  icon: '\u{1F1E9}\u{1F1EA}', head: 'Germany',     body: 'The Mittelstand exports precision engineering worldwide — exports ≈ 40% of GDP.' },
        { tone: 'green',  icon: '\u{1F1E8}\u{1F1F3}', head: 'China',       body: 'The "workshop of the world" strategy lifted hundreds of millions out of poverty after 1980.' }
      ],

      pairLabel: 'THE EVALUATION',
      pairEmoji: '\u{2696}\u{FE0F}',
      left: {
        tone: 'green',
        icon: '\u{2705}',
        iconStyle: 'circle',
        label: 'Why it works',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Demand beyond the home market — scale without domestic limits.</li><li>Global competition forces productivity up.</li><li>Export earnings fund imported capital and technology.</li></ul>'
      },
      right: {
        tone: 'rose',
        icon: '\u{26A0}\u{FE0F}',
        iconStyle: 'circle',
        label: 'The risks',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Exposed to global downturns — world recessions hit exporters first.</li><li>Depends on open trading partners; tariffs and trade wars bite.</li><li>Can suppress domestic consumption for years (China’s rebalancing problem).</li></ul>'
      },

      conclusion: { title: 'Big idea', text: 'Trade turns the world’s demand into a growth engine for one economy — the fastest sustained growth episodes in history were export-led. The price is exposure to the world’s downturns too.' },
      examEdge: 'Cite one country case by name and one mechanism from the chain — "South Korea used export earnings to fund capital deepening" earns more than a generic "trade helps growth".'
    }

  ]
};
