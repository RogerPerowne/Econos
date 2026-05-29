/* ============================================================
   ECONOS – Trade Cycle, Shocks & Economic Growth (Theme 2 · 2.5)
   5 cards · the wave → demand shocks → supply shocks →
   actual vs potential growth → impact of growth
   Spec: Edexcel A 2.5.1 + 2.5.3 + 2.5.4
   (2.5.2 output gaps already covered in Equilibrium National Income)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'trade-cycle-shocks-and-economic-growth',
  topicNum: '5',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Trade Cycle, Shocks & Economic Growth',
  estTime: '10-12 minutes',
  goal: 'Lock in the four phases of the cycle, demand and supply shocks, actual vs potential growth, and the trade-offs of growth.',

  intro: {
    heroKey: 'heroGrowth',
    summary: 'Real GDP rides a wave of short-run booms and recessions around a rising long-run trend. The wave is the trade cycle; the trend is growth. Shocks knock the economy off the trend; supply-side improvements lift the trend itself.',
    doInThis: 'Work through 5 cards: the four phases of the cycle, demand-side shocks, supply-side shocks (and the stagflation policy dilemma), actual vs potential growth (with hysteresis), and the benefits and costs of growth.',
    outcomes: [
      'Identify the four phases of the trade cycle from data',
      'Distinguish demand-side from supply-side shocks on AD/AS',
      'Explain the stagflation policy dilemma',
      'Distinguish actual from potential growth and identify what lifts the trend',
      'Evaluate the benefits, costs and sustainability of growth'
    ],
    tip: 'A* answers separate the wave (cycle) from the trend (growth), and judge shocks by whether P and Y move together or apart.',
    stages: [
      { num: 1, name: 'Learn it', sub: '5 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [

    /* ============================================================
       CARD 1 – The trade cycle: the wave
       ============================================================ */
    {
      id: 'trade-cycle-wave',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 5',
      title: 'The trade cycle: the wave',
      lede: 'The trade cycle is the pattern of <strong>short-run fluctuations</strong> in real GDP around a rising long-run trend. Growth, as a separate topic, is about that trend itself – the economy’s expanding capacity over time.',
      ledeStyle: 'plain',
      tip: { icon: '\u{1F512}', tone: 'green', text: 'The trade cycle is short-run fluctuation around a rising long-run trend.' },

      visualKey: 'tradeWaveCycle',
      visualLabel: 'The wave',
      visualEmoji: '\u{3030}\u{FE0F}',

      causesLabel: 'The four phases',
      causesEmoji: '\u{1F4C8}',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Boom',     body: 'Output above trend, unemployment low, inflation pressure rising, confidence strong.' },
        { tone: 'amber',  icon: '\u{27A1}\u{FE0F}', head: 'Slowdown', body: 'Growth weakens, spare capacity appears, confidence softens.' },
        { tone: 'rose',   icon: '\u{1F4C9}', head: 'Recession', body: 'Output falls or sits below trend, unemployment rises, confidence weak.' },
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Recovery', body: 'Output starts rising again, unemployment begins to fall, confidence returns.' }
      ],

      bottomTip: { tone: 'blue', icon: '\u{2139}\u{FE0F}', text: '<strong>In the data:</strong> look for movements in output relative to trend, unemployment, inflation and business confidence to identify where the economy is in the cycle. <em>Investment leads, consumption follows</em> – capex picks up before household spending in a recovery.' },

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'The trade cycle is short-run fluctuation around a rising trend. The trend is growth – the economy’s long-run capacity.'
      },
      examEdge: 'In exams, always <em>distinguish cyclical fluctuations from the long-run growth trend</em>. One is temporary; the other is structural. Policy is asymmetric – fighting a boom is easier than reviving a slump.'
    },

    /* ============================================================
       CARD 2 – Demand-side shocks
       ============================================================ */
    {
      id: 'demand-side-shocks',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 5',
      title: 'Demand-side shocks',
      lede: 'Sudden, unexpected changes in aggregate demand can push the economy into boom or recession. These shocks are often triggered by financial crises, confidence collapses, export-market slumps, or large fiscal swings.',
      ledeStyle: 'plain',
      tip: { icon: '\u{1F512}', tone: 'green', text: 'For a demand shock, prices and output move in the same direction.' },

      visualKey: 'demandShocksTwin',
      visualLabel: 'The AD/AS diagrams',
      visualEmoji: '\u{3030}\u{FE0F}',

      causesLabel: 'Examples',
      causesEmoji: '\u{1F5C2}\u{FE0F}',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '\u{1F4C9}', head: '2008 GFC', body: '<strong>Negative shock.</strong> Credit freeze and confidence collapse cut spending; output and prices fell. Banking-system crisis transmitted faster than any policy could respond.' },
        { tone: 'amber',  icon: '\u{1F4C8}', head: '2021 re-opening boom', body: '<strong>Positive shock.</strong> Pent-up demand and fiscal support lifted spending; output and prices rose. The mirror of the 2020 lockdown collapse.' },
        { tone: 'slate',  icon: '\u{1F3DB}\u{FE0F}', head: 'Big fiscal tightening', body: '<strong>Negative shock.</strong> Spending cuts and tax rises reduced demand; output and prices fell. Automatic stabilisers cushion but don’t eliminate the blow.' }
      ],

      bottomTip: { tone: 'blue', icon: '\u{2705}', text: '<strong>Fast test &middot; Demand shock = P and Y move together.</strong> Positive shock: both rise. Negative shock: both fall. Automatic stabilisers (tax falls, welfare rises) trigger instantly to soften the blow; discretionary stimulus comes second.' },

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'Demand shocks shift AD. Both P and Y move in the same direction – the defining feature that distinguishes them from supply shocks.'
      },
      examEdge: '<strong>Before calling it a demand shock, diagnose whether P and Y move in the same direction.</strong> If they do, AD shifted. If they move opposite ways, it’s a supply shock.'
    },

    /* ============================================================
       CARD 3 – Supply-side shocks
       ============================================================ */
    {
      id: 'supply-side-shocks',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 5',
      title: 'Supply-side shocks',
      lede: 'Supply-side shocks are sudden, unexpected changes in SRAS. They shift the economy in a different way from demand shocks. Examples include oil shocks, war, pandemic supply chains and commodity price spikes (negative shocks). Productivity breakthroughs or technology revolutions (positive shocks) shift supply outward.',
      ledeStyle: 'plain',
      tip: { icon: '\u{26A0}\u{FE0F}', tone: 'amber', text: 'For a supply shock, prices and output move in opposite directions.' },

      visualKey: 'supplyShocksTwin',
      visualLabel: 'The AD/AS diagrams',
      visualEmoji: '\u{3030}\u{FE0F}',

      pairLabel: 'The policy dilemma',
      pairEmoji: '\u{2696}\u{FE0F}',
      left: {
        tone: 'amber',
        icon: '\u{1F4C8}',
        iconStyle: 'circle',
        label: 'Fight inflation',
        text: '<strong>Rates rise.</strong> Inflation pressure eases, but recession deepens. This was the <strong>Thatcher response to the 1979-80 oil shock</strong> – accepting deep recession and 3m+ unemployment to anchor inflation. The sacrifice ratio was very high.'
      },
      right: {
        tone: 'green',
        icon: '\u{1F4C9}',
        iconStyle: 'circle',
        label: 'Support growth',
        text: '<strong>Policy loosens.</strong> Output is supported, but inflation worsens. <em>Stagflation is hard because the cure for one symptom worsens the other.</em>'
      },

      causesLabel: 'Examples',
      causesEmoji: '\u{1F5C2}\u{FE0F}',
      causesCols: 3,
      causes: [
        { tone: 'amber',  icon: '\u{1F6E2}\u{FE0F}', head: '1970s oil shock', body: 'OPEC price quadrupling. Input costs surged; output fell, inflation rose. The canonical stagflation case.' },
        { tone: 'blue',   icon: '\u{1F30D}', head: '2021-23 energy spike', body: 'Russia-Ukraine war drove energy and commodity prices up. Inflation jumped above 11% UK; growth slowed.' },
        { tone: 'green',  icon: '\u{1F4BB}', head: 'Tech productivity boom', body: 'Better technology lifts SRAS rightward. More output at lower prices – the rare “free lunch” supply shock.' }
      ],

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'Demand shocks move P and Y together. Supply shocks move them in opposite directions. The diagnostic flips the policy choice.'
      },
      examEdge: '<strong>Stagflation (high inflation + low growth) almost always signals a negative supply shock.</strong> The Thatcher 1979-83 response is the textbook case study – very high sacrifice ratio, accepted to anchor expectations.'
    },

    /* ============================================================
       CARD 4 – Actual vs potential growth
       ============================================================ */
    {
      id: 'actual-vs-potential-growth',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 5',
      title: 'Actual vs potential growth',
      lede: 'Actual growth is the short-run fluctuation of output around the trend. Potential growth is the growth of the economy’s <strong>long-run productive capacity</strong>. When potential growth rises, the economy’s potential GDP increases – the LRAS shifts right.',
      ledeStyle: 'plain',
      tip: { icon: '\u{1F512}', tone: 'green', text: 'Actual growth rides around the trend. Potential growth is the trend itself.' },

      visualKey: 'actualVsPotentialGrowth',
      visualLabel: 'The two lines',
      visualEmoji: '\u{3030}\u{FE0F}',

      causesFirst: true,
      causesLabel: 'What shifts the trend up?',
      causesEmoji: '\u{1F9F1}',
      causes: [
        { tone: 'green', icon: '\u{1F465}', head: 'Labour force',     body: 'More people in work and fewer structural barriers.' },
        { tone: 'green', icon: '\u{1FA99}', head: 'Capital stock',    body: 'More machinery, equipment and buildings.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Productivity',     body: 'More output from the same inputs.' },
        { tone: 'green', icon: '\u{1F393}', head: 'Skills and education', body: 'A more skilled and adaptable workforce.' },
        { tone: 'green', icon: '\u{1F3E2}', head: 'Technology and infrastructure', body: 'Better technology and networks raise capacity.' }
      ],

      bottomTip: { tone: 'blue', icon: '\u{1F30D}', text: '<strong>Export-led growth:</strong> stronger exports can drag the trend up via investment in exporting sectors – a specific channel through which trade lifts potential output.' },

      flowTitle: 'Hysteresis: when a recession damages the trend',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'rose', icon: '\u{1F4C9}', title: 'Recession',          sub: 'Output falls.' },
        { tone: 'rose', icon: '\u{231B}',  title: 'Long unemployment',  sub: 'People out of work for longer.' },
        { tone: 'rose', icon: '\u{1F9E0}', title: 'Skills loss',        sub: 'Human capital erodes.' },
        { tone: 'rose', icon: '\u{2B07}\u{FE0F}', title: 'Lower potential growth', sub: 'Trend shifts down.' }
      ],

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'Short-run booms and recessions are not the same as long-run growth. Potential growth is the economy’s productive capacity over time – and recessions can permanently damage it via hysteresis.'
      },
      examEdge: 'Policies that lift potential growth shift LRAS right and improve non-inflationary growth. The <strong>UK productivity puzzle</strong> – stagnant output per worker since 2008 – is the defining supply-side challenge for UK policy.'
    },

    /* ============================================================
       CARD 5 – The impact of growth
       ============================================================ */
    {
      id: 'impact-of-growth',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 5',
      title: 'The impact of growth',
      lede: 'Economic growth can raise living standards and create opportunities. But its effects depend on <strong>who gains, who loses, and whether growth is sustainable</strong> over the long run.',
      ledeStyle: 'plain',
      tip: { icon: '\u{1F512}', tone: 'green', text: 'Growth is necessary but not sufficient – its quality and distribution matter too.' },

      pairFirst: true,
      pairLabel: 'Benefits vs costs',
      pairEmoji: '\u{2696}\u{FE0F}',
      left: {
        tone: 'green',
        icon: '\u{2B06}\u{FE0F}',
        iconStyle: 'circle',
        label: 'Benefits',
        text: '<div style="display:flex;flex-direction:column;gap:10px;"><div style="display:flex;align-items:flex-start;gap:10px;"><span style="font-size:18px;flex-shrink:0;line-height:1;">\u{1F4C8}</span><div><strong style="color:#065F46;">Higher living standards</strong><br/><span style="color:#475569;font-size:12.5px;">More goods and services improve health, education and quality of life.</span></div></div><div style="display:flex;align-items:flex-start;gap:10px;"><span style="font-size:18px;flex-shrink:0;line-height:1;">\u{1F3DB}\u{FE0F}</span><div><strong style="color:#065F46;">More tax revenue and public services</strong><br/><span style="color:#475569;font-size:12.5px;">Stronger public finances support schools, hospitals and infrastructure.</span></div></div><div style="display:flex;align-items:flex-start;gap:10px;"><span style="font-size:18px;flex-shrink:0;line-height:1;">\u{1F465}</span><div><strong style="color:#065F46;">Lower poverty</strong><br/><span style="color:#475569;font-size:12.5px;">More income and jobs help lift people out of poverty.</span></div></div><div style="display:flex;align-items:flex-start;gap:10px;"><span style="font-size:18px;flex-shrink:0;line-height:1;">\u{1F4B0}</span><div><strong style="color:#065F46;">Higher profits and investment</strong><br/><span style="color:#475569;font-size:12.5px;">Firms earn more and invest in new machines, ideas and capacity.</span></div></div><div style="display:flex;align-items:flex-start;gap:10px;"><span style="font-size:18px;flex-shrink:0;line-height:1;">\u{1F4BC}</span><div><strong style="color:#065F46;">More jobs and opportunity</strong><br/><span style="color:#475569;font-size:12.5px;">Expanding economies create work and open new career paths.</span></div></div></div>'
      },
      right: {
        tone: 'amber',
        icon: '\u{2B07}\u{FE0F}',
        iconStyle: 'circle',
        label: 'Costs / limits',
        text: '<div style="display:flex;flex-direction:column;gap:10px;"><div style="display:flex;align-items:flex-start;gap:10px;"><span style="font-size:18px;flex-shrink:0;line-height:1;">\u{1F4B7}</span><div><strong style="color:#C2410C;">Inflation pressure</strong><br/><span style="color:#475569;font-size:12.5px;">Strong demand can push up prices, eroding living standards.</span></div></div><div style="display:flex;align-items:flex-start;gap:10px;"><span style="font-size:18px;flex-shrink:0;line-height:1;">\u{1F464}</span><div><strong style="color:#C2410C;">Income inequality</strong><br/><span style="color:#475569;font-size:12.5px;">Gains may be concentrated, leaving some people and regions behind – the Kuznets curve.</span></div></div><div style="display:flex;align-items:flex-start;gap:10px;"><span style="font-size:18px;flex-shrink:0;line-height:1;">\u{1F343}</span><div><strong style="color:#C2410C;">Environmental damage and resource depletion</strong><br/><span style="color:#475569;font-size:12.5px;">Pollution, habitat loss and finite resources impose long-run costs.</span></div></div><div style="display:flex;align-items:flex-start;gap:10px;"><span style="font-size:18px;flex-shrink:0;line-height:1;">\u{2764}\u{FE0F}</span><div><strong style="color:#C2410C;">Stress and well-being concerns</strong><br/><span style="color:#475569;font-size:12.5px;">Long hours, congestion and housing pressure can reduce well-being.</span></div></div><div style="display:flex;align-items:flex-start;gap:10px;"><span style="font-size:18px;flex-shrink:0;line-height:1;">\u{231B}</span><div><strong style="color:#C2410C;">Current-vs-future-generations trade-off</strong><br/><span style="color:#475569;font-size:12.5px;">Today’s growth can reduce tomorrow’s options and living standards.</span></div></div></div>'
      },

      causes2Label: 'Sustainable vs unsustainable',
      causes2Emoji: '\u{1F343}',
      causes2Cols: 2,
      causes2: [
        { tone: 'amber',  icon: '\u{26A0}\u{FE0F}', head: 'High growth + high environmental damage', body: 'Short-term gains, long-term losses. Depleted resources and carbon costs reduce future prosperity. The Environmental Kuznets Curve flags this risk in fast-growing developing economies.' },
        { tone: 'green',  icon: '\u{1F343}',         head: 'Moderate growth + green investment',    body: 'Cleaner air, resilient ecosystems and efficient technology support stronger, lasting living standards.' }
      ],

      causes3Label: 'Who wins?',
      causes3Emoji: '\u{1F465}',
      causes3Cols: 4,
      causes3: [
        { tone: 'blue', icon: '\u{1F3E0}', head: 'Households',         body: 'Higher incomes, if prices and jobs improve.' },
        { tone: 'blue', icon: '\u{1F3E2}', head: 'Firms',              body: 'Higher profits, if costs and risks are managed.' },
        { tone: 'blue', icon: '\u{1F3DB}\u{FE0F}', head: 'Government', body: 'More revenue, but must manage stability and equity.' },
        { tone: 'blue', icon: '\u{1F30D}', head: 'Future generations', body: 'Benefit only if growth is sustainable and responsible.' }
      ],

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'The best growth is broad-based, productivity-driven and sustainable. It lifts living standards today without limiting tomorrow.'
      },
      examEdge: '<strong>Strong evaluation distinguishes the rate of growth from the quality, distribution and sustainability of growth.</strong> A* answers structure around: in the short run AD stimulus can drive growth; in the long run sustainable growth needs supply-side investment that shifts the PPF outward.',

      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};
