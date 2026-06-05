/* ============================================================
   ECONOS – Causes of Growth (Edexcel A 2.5.1)
   1 card · interactive multi-state diagram for actual vs potential
   Split from `trade-cycle-shocks-and-economic-growth` on 2026-06-05.
   The trade-cycle wave / shock diagnosis / stagflation policy
   material stays on `trade-business-cycle` (2.5.3); the impact of
   growth lives on `the-impact-of-economic-growth` (2.5.4).
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'causes-of-growth',
  topicNum: '2.5.1',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Causes of Growth',
  estTime: '6 min',
  goal: 'Distinguish actual from potential growth and identify what lifts the trend.',

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
      { num: 1, name: 'Learn it', sub: '1 concept card', state: 'current' },
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
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Actual vs potential growth',
      lede: 'Build up the picture stage by stage: the wave you already know, the trend underneath it, the levers that lift the trend, and the risk that a deep recession bends the trend down.',
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
            body: 'Real GDP over time. The wave you saw on Card 1 – boom, slowdown, recession, recovery – is the short-run fluctuation. So far there is nothing underneath it to fluctuate <em>around</em>.',
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
            analysis: 'In AD/AS terms, every driver above is an LRAS shifter. Demand-side policy can lift actual growth temporarily; only supply-side investment lifts potential growth – the trend itself. The UK productivity puzzle (output per worker flat since 2008) is the canonical case of a supply-side challenge. <strong>Export-led growth</strong> – South Korea, Germany, China – uses access to global demand to scale faster than the domestic market alone allows; spec 2.5.1 explicitly names the importance of trade for growth.'
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

      causesLabel: 'THE SIX DRIVERS OF POTENTIAL GROWTH',
      causesEmoji: '\u{1F680}',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '\u{1F465}', head: 'Labour force',          body: 'More working-age adults, higher participation, net inward migration of working-age workers.' },
        { tone: 'blue',   icon: '\u{1F3ED}', head: 'Capital stock',         body: 'More machinery, infrastructure and digital capital per worker – capital deepening.' },
        { tone: 'amber',  icon: '\u{1F4C8}', head: 'Productivity',          body: 'Output per worker rises. The UK productivity puzzle (flat since 2008) is the textbook bottleneck.' },
        { tone: 'purple', icon: '\u{1F393}', head: 'Skills and education',  body: 'Higher human capital – better schools, vocational training, lifelong learning, R&amp;D talent.' },
        { tone: 'blue',   icon: '\u{1F4A1}', head: 'Technology &amp; infrastructure', body: 'Faster diffusion of new tech; better transport, energy and digital networks.' },
        { tone: 'green',  icon: '\u{1F30D}', head: 'Trade &amp; export markets', body: 'Access to global demand – export-led growth (S. Korea, Germany, China) scales faster than the domestic market alone allows.' }
      ],

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'Short-run growth is movement along the cycle wave. Long-run growth is the rise of the trend itself – driven by supply-side investment, threatened by deep recessions via hysteresis.'
      },
      examEdge: 'Policies that lift potential growth shift LRAS right and improve <em>non-inflationary growth</em>. The UK productivity puzzle is the defining supply-side challenge – cite it as the case study for why supply-side reform matters.'
    }

  ]
};
