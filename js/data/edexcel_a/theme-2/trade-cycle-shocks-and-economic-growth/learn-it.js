/* ============================================================
   ECONOS – Trade Cycle, Shocks & Economic Growth (Theme 2 · 2.5)
   5 cards · one storytelling pattern per card:
     C1 Interactive multi-state diagram (phase-by-phase wave)
     C2 Predict-then-reveal (5 historical shocks to diagnose)
     C3 Comparison table (Fight inflation vs Support growth)
     C4 Interactive multi-state diagram (trend build-up + hysteresis)
     C5 Evidence-then-verdict (benefits + costs → growth-quality verdict)
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
    doInThis: 'Click through the four phases of the cycle, diagnose five historical shocks, compare two policy stances in a stagflation, build up the actual-vs-potential picture stage by stage, and weigh the case for growth.',
    outcomes: [
      'Identify the four phases of the trade cycle from data',
      'Diagnose demand-side and supply-side shocks from P and Y',
      'Compare the Fight-inflation and Support-growth stances against a stagflation',
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
       CARD 1 – Pattern: Interactive multi-state diagram
       The wave SVG with 4 explicit-show phase highlights. Each click
       lights up that phase's band on the wave; analysis below describes
       the phase's characteristics.
       ============================================================ */
    {
      id: 'trade-cycle-wave',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 5',
      title: 'The trade cycle: the wave',
      lede: 'The trade cycle is the pattern of <strong>short-run fluctuations</strong> in real GDP around a rising long-run trend. Click through each phase to see where the wave sits relative to the trend, and what each phase looks like in the data.',
      ledeStyle: 'plain',
      tip: { icon: '\u{1F512}', tone: 'green', text: 'The trade cycle is short-run fluctuation around a rising long-run trend.' },

      interactiveDiagram: {
        svgKey: 'tradeWaveCycle',
        wide: true,
        maxWidth: '100%',
        label: 'Click a phase to see where it sits',
        emoji: '\u{3030}\u{FE0F}',
        layers: ['phase-boom', 'phase-slowdown', 'phase-recession', 'phase-recovery'],
        views: [
          {
            label: 'Boom',
            tone: 'green',
            show: ['phase-boom'],
            head: 'Boom — output above trend',
            body: 'Real GDP rises faster than the long-run trend. Unemployment is low, inflation pressure is rising, business confidence is strong, capacity utilisation is high.',
            analysis: '<strong>Investment leads, consumption follows.</strong> Firms invest first when they expect demand to keep rising; household spending lags by months. In a strong boom, watch capacity utilisation and wage growth – they are the leading indicators that the boom is hitting supply limits.'
          },
          {
            label: 'Slowdown',
            tone: 'amber',
            show: ['phase-slowdown'],
            head: 'Slowdown — growth weakens',
            body: 'GDP still grows but at a falling rate. Spare capacity appears, confidence softens, investment plans get postponed. The first signs of slack show up in the labour market as hiring slows.',
            analysis: 'Policy at this point is a judgement call: tighten now to head off lingering inflation, or hold to let the slowdown cool prices on its own. Central banks usually wait for hard evidence of falling demand before easing.'
          },
          {
            label: 'Recession',
            tone: 'rose',
            show: ['phase-recession'],
            head: 'Recession — output falls below trend',
            body: 'Two consecutive quarters of negative real GDP growth (the technical UK definition). Unemployment rises, inflation pressure eases or reverses, business confidence is weak, household saving rises precautionarily.',
            analysis: '<strong>Policy is asymmetric.</strong> Cooling a boom is easier than reviving a slump – rate cuts work less well when confidence has collapsed and households are paying down debt. The 2008-09 recession showed how slowly demand recovers even with aggressive stimulus.'
          },
          {
            label: 'Recovery',
            tone: 'blue',
            show: ['phase-recovery'],
            head: 'Recovery — output rises back toward trend',
            body: 'Output starts rising again, unemployment begins to fall, confidence returns. The recovery is usually slow at first – firms wait for clear demand signals before hiring – then accelerates as the labour market tightens.',
            analysis: 'Watch the gap between actual and trend GDP. A "jobless recovery" is one where GDP rises but employment lags – the UK saw this between 2010 and 2014. Wage growth in a recovery is a delayed signal: firms hire first, raise wages later.'
          }
        ]
      },

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'The trade cycle is short-run fluctuation around a rising trend. The trend is growth – the economy’s long-run capacity – and the next topic.'
      },
      examEdge: 'In exams, always <em>distinguish cyclical fluctuations from the long-run growth trend</em>. One is temporary; the other is structural. Naming the phase (boom vs slowdown vs recession vs recovery) and citing what it implies for unemployment and inflation lifts your answer.'
    },

    /* ============================================================
       CARD 2 – Pattern: Predict-then-reveal
       Five historical shocks. Student predicts demand-or-supply +
       positive-or-negative, then clicks to reveal the answer.
       Uses template: 'diagnose' which has scenarios.items[] with a
       reveal button per item.
       ============================================================ */
    {
      id: 'demand-vs-supply-shocks',
      template: 'diagnose',
      stepLabel: 'Learn: Step 2 of 5',
      title: 'Diagnose the shock',
      lede: 'Five real-world shocks. For each, ask yourself: <strong>did P and Y move together (demand shock) or in opposite directions (supply shock)?</strong> Then click <em>Make your call</em> to check.',
      diagramKey: 'demandShocksTwin',
      diagramCaption: 'The diagnostic rule: P and Y together → AD shifted; P and Y opposite → SRAS shifted. Direction tells you positive vs negative.',
      scenarios: {
        title: 'Five shocks to diagnose',
        items: [
          {
            tone: 'rose',
            label: '2008 Global Financial Crisis',
            text: 'US sub-prime mortgages turned toxic; banking system seized up; credit froze; consumer and business confidence collapsed. Across 2008-09 UK real GDP fell 6%, unemployment rose from 5% to 8%, inflation fell from 5% to negative briefly. Both <strong>output and prices fell</strong>.',
            answer: '<strong>Negative demand shock.</strong> P and Y both fell – they moved together – so AD shifted left, not SRAS. The trigger was the credit channel: banks cut lending → I and C collapsed → AD collapsed. Automatic stabilisers (tax fell, welfare rose) softened the blow; discretionary stimulus (QE, VAT cut, scrappage) added on top.'
          },
          {
            tone: 'amber',
            label: '1973-74 OPEC oil shock',
            text: 'OPEC quadrupled oil prices. UK inflation jumped from 7% to 24% over two years; real GDP fell 2.5% in 1974; unemployment rose. Energy was a critical input to almost every UK firm – production costs surged. <strong>Prices rose sharply while output fell.</strong>',
            answer: '<strong>Negative supply shock (the textbook stagflation case).</strong> P up and Y down – they moved in opposite directions – so SRAS shifted left, not AD. The Heath government tried wage and price controls; they failed. The Thatcher response a few years later (1979-83) chose the Fight-inflation stance – very high sacrifice ratio but it anchored expectations.'
          },
          {
            tone: 'rose',
            label: 'COVID lockdown March 2020',
            text: 'Government ordered most non-essential activity to stop. UK real GDP fell ~10% in Q2 2020 – the deepest quarterly fall on record. Most prices fell or held flat (oil briefly went negative); a few categories (food, electronics) saw spikes. <strong>Output collapsed; prices on balance fell.</strong>',
            answer: '<strong>Primarily a negative demand shock.</strong> Demand fell across services, restaurants, travel, retail – P and Y both fell together in the affected sectors. There was a supply-side component (factories shut) but the demand collapse dominated. Furlough scheme and Bank of England cut to 0.1% were the policy response.'
          },
          {
            tone: 'green',
            label: '2021 re-opening boom',
            text: 'Vaccines rolled out, restrictions lifted, households had built up £170bn of excess savings, fiscal support continued. UK real GDP grew ~7% in 2021 – fastest in G7. Inflation rose from 0.7% to 5% over the year as spending raced ahead of supply. <strong>Output and prices both rose.</strong>',
            answer: '<strong>Positive demand shock.</strong> P and Y both rose – moved together – so AD shifted right. Pent-up demand plus fiscal support lifted spending; supply chains couldn’t respond fast enough; inflation rose. The mirror of the 2020 lockdown collapse.'
          },
          {
            tone: 'green',
            label: 'AI productivity revolution (ongoing)',
            text: 'Large-language-model AI from 2023 onward is being deployed across knowledge work. Early estimates suggest 10-30% productivity gains in coding, writing, and routine analytics. Real output per worker rising; goods and services made more cheaply; prices in affected sectors easing.',
            answer: '<strong>Positive supply shock.</strong> Higher productivity shifts SRAS (and over time LRAS) right. P falls (or rises less) while Y rises – they move in opposite directions, the supply-shock signature, but the favourable direction. The rare "free lunch" shock that lifts the trend without inflation.'
          }
        ]
      },
      examEdge: '<strong>Before naming a shock, diagnose direction:</strong> P and Y together → demand shock; opposite → supply shock. Then sign each (positive or negative). State this diagnostic explicitly in your answer – examiners reward the systematic identification, not just the conclusion.'
    },

    /* ============================================================
       CARD 3 – Pattern: Comparison table
       Fight inflation vs Support growth as the stagflation policy
       dilemma, rated across 5 criteria via versusRows. Each row
       compares one criterion under the two stances.
       ============================================================ */
    {
      id: 'stagflation-policy-dilemma',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 5',
      title: 'The stagflation policy dilemma',
      lede: 'In a stagflation – a negative supply shock that pushes inflation up while output falls – every policy choice helps one symptom and worsens the other. Two stances dominate the debate.',
      ledeStyle: 'plain',
      tip: { icon: '\u{26A0}\u{FE0F}', tone: 'amber', text: 'A stagflation forces a choice between fighting inflation and supporting growth — no policy fixes both.' },

      visualKey: 'supplyShocksTwin',
      visualLabel: 'The supply-shock framing (a recap)',
      visualEmoji: '\u{3030}\u{FE0F}',

      versusRows: {
        title: 'Fight inflation vs Support growth',
        emoji: '\u{2696}\u{FE0F}',
        leftTone: 'amber',
        rightTone: 'green',
        rows: [
          {
            left:  { icon: '\u{1F4C8}', head: 'Inflation: brought down',     sub: 'Higher rates cool demand; expectations anchored; price stability restored within 1-2 years.' },
            right: { icon: '\u{1F4C8}', head: 'Inflation: persists or rises', sub: 'Looser policy lets the supply shock pass through fully into prices; second-round wage demands likely.' }
          },
          {
            left:  { icon: '\u{1F465}', head: 'Unemployment: rises sharply',  sub: 'Recession deepens; jobless count climbs by 1-3m typically; persistent youth unemployment risk.' },
            right: { icon: '\u{1F465}', head: 'Unemployment: contained',       sub: 'Output supported; labour market stays tighter; recession shallower or avoided.' }
          },
          {
            left:  { icon: '\u{1F4B8}', head: 'Sacrifice ratio: high',         sub: 'Several points of GDP lost per point of inflation reduced – the Thatcher 1979-83 ratio was particularly punishing.' },
            right: { icon: '\u{1F4B8}', head: 'Sacrifice ratio: low (now)',    sub: 'Output preserved in the short run; cost shows up later as entrenched higher inflation and a worse trade-off.' }
          },
          {
            left:  { icon: '\u{1F5F3}\u{FE0F}', head: 'Political feasibility: hard', sub: 'Recessions are unpopular; required credible commitment to tolerate the pain; risks losing the next election.' },
            right: { icon: '\u{1F5F3}\u{FE0F}', head: 'Political feasibility: easier', sub: 'Voters prefer policies that protect jobs in the short run; pressure on central bank to ease comes from all sides.' }
          },
          {
            left:  { icon: '\u{1F4DC}', head: 'Historical precedent: Thatcher 1979-83', sub: 'Chose Fight-inflation after the second oil shock. Unemployment passed 3m, inflation fell from 18% to 5%. Brutal but anchored expectations for two decades.' },
            right: { icon: '\u{1F4DC}', head: 'Historical precedent: 1970s Heath', sub: 'Chose Support-growth (and price controls). Inflation stayed high through the decade; the Thatcher tightening that followed was harsher because credibility had been lost.' }
          }
        ]
      },

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'Demand shocks move P and Y together. Supply shocks move them apart – and the policy response is a forced choice between two costly stances. There is no painless option.'
      },
      examEdge: '<strong>Top marks go to answers that pick a stance and justify it explicitly</strong> – usually citing the long-run cost of letting expectations un-anchor. The Thatcher 1979-83 example is the most-quoted historical case because it shows the sacrifice ratio in numbers.'
    },

    /* ============================================================
       CARD 4 – Pattern: Interactive multi-state diagram
       The two-lines chart with cumulative reveal: actual GDP wave first,
       then potential trend + Boom/Recession markers, then 5 drivers
       lifting the trend, then hysteresis bending it back down.
       ============================================================ */
    {
      id: 'actual-vs-potential-growth',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 5',
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
        layers: ['idl-trend', 'idl-drivers', 'idl-hysteresis'],
        views: [
          {
            label: 'Actual GDP only',
            tone: 'blue',
            head: 'Stage 1 — the cycle wave',
            body: 'Real GDP over time. The wave you saw on Card 1 – boom, slowdown, recession, recovery – is the short-run fluctuation. So far there is nothing underneath it to fluctuate <em>around</em>.',
            analysis: 'On its own, the wave is meaningless. A 3% fall in GDP from a high base is very different from a 3% fall from a stagnant base. We need a reference – something to compare actual GDP against.'
          },
          {
            label: '+ Potential trend',
            tone: 'green',
            head: 'Stage 2 — add potential GDP',
            body: 'The straight green line is <strong>potential GDP</strong> – the level the economy could produce with all factors fully and efficiently employed. The actual wave now has something to fluctuate around.',
            analysis: 'Booms sit above trend (positive output gap); recessions sit below it (negative output gap). The slope of the trend line is potential growth – the topic of this whole card. The wave is the trade cycle; the trend is growth.'
          },
          {
            label: '+ What lifts the trend',
            tone: 'green',
            head: 'Stage 3 — the five drivers',
            body: 'The trend rises over time because the economy’s productive capacity rises over time. Five drivers: <strong>labour force</strong>, <strong>capital stock</strong>, <strong>productivity</strong>, <strong>skills and education</strong>, <strong>technology and infrastructure</strong>. Each shifts LRAS right.',
            analysis: 'In AD/AS terms, every driver above is an LRAS shifter. Demand-side policy can lift actual growth temporarily; only supply-side investment lifts potential growth – the trend itself. The UK productivity puzzle (output per worker flat since 2008) is the canonical case of a supply-side challenge.'
          },
          {
            label: '+ Hysteresis',
            tone: 'rose',
            head: 'Stage 4 — when recessions damage the trend',
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
      examEdge: 'Policies that lift potential growth shift LRAS right and improve <em>non-inflationary growth</em>. The UK productivity puzzle is the defining supply-side challenge – cite it as the case study for why supply-side reform matters.'
    },

    /* ============================================================
       CARD 5 – Pattern: Evidence-then-verdict
       Benefits + costs as evidence, then a verdict block that judges
       growth-as-quality rather than growth-as-rate. Replaces the prior
       two-pair-plus-tile-grid layout.
       ============================================================ */
    {
      id: 'impact-of-growth',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 5',
      title: 'The impact of growth',
      lede: 'Growth raises living standards – but its costs depend on who gains and on whether it lasts. The evaluation framework: weigh the benefits, weigh the costs, then judge growth on quality not just rate.',
      ledeStyle: 'plain',
      tip: { icon: '\u{1F512}', tone: 'green', text: 'Growth is necessary but not sufficient – its quality and distribution matter as much as its rate.' },

      causesFirst: true,
      causesLabel: 'The case FOR growth',
      causesEmoji: '\u{2B06}\u{FE0F}',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '\u{1F4C8}', head: 'Higher living standards',          body: 'More goods and services, better health and education outcomes, longer life expectancy.' },
        { tone: 'green', icon: '\u{1F3DB}\u{FE0F}', head: 'Stronger public finances', body: 'Higher tax revenue funds schools, hospitals, infrastructure without raising tax rates.' },
        { tone: 'green', icon: '\u{1F465}', head: 'Jobs and poverty reduction',       body: 'Expanding economies create work; rising wages lift households out of poverty.' }
      ],

      causes2Label: 'The case AGAINST (or in qualification)',
      causes2Emoji: '\u{2B07}\u{FE0F}',
      causes2Cols: 3,
      causes2: [
        { tone: 'amber', icon: '\u{1F4B7}', head: 'Inflation pressure',     body: 'Strong demand can push up prices, especially near full capacity – eroding real living standards.' },
        { tone: 'amber', icon: '\u{1F464}', head: 'Inequality',             body: 'Gains often concentrated at the top – the Kuznets curve flags this as a normal feature of fast growth, not an aberration.' },
        { tone: 'amber', icon: '\u{1F343}', head: 'Environmental cost',     body: 'Pollution, resource depletion, climate impact – the Environmental Kuznets Curve suggests these worsen before they improve as countries develop.' }
      ],

      bottomTip: { tone: 'rose', icon: '\u{231B}', text: '<strong>The current-vs-future-generations trade-off</strong> sits beneath every evaluation. Growth that depletes natural capital or builds carbon liabilities transfers cost from today to tomorrow. Sustainability is the long-run version of distributional concern.' },

      conclusionPosition: 'end',
      conclusion: {
        title: 'The verdict — growth quality matters more than growth rate',
        text: 'The benefits of growth are real and material. The costs are also real and material, and they fall on different groups and different time horizons than the benefits. <strong>The best growth is broad-based (most households gain), productivity-driven (not built on debt or resource depletion), and sustainable (does not transfer cost to future generations).</strong> A* answers structure around this: short-run AD stimulus can lift the rate; only supply-side investment that respects environmental and distributional limits lifts the <em>quality</em>.'
      },
      examEdge: '<strong>Strong evaluation distinguishes the rate of growth from its quality, distribution and sustainability.</strong> Use the Environmental Kuznets Curve as the canonical evaluation tool for "fast growth in developing economies" questions. Use the UK productivity puzzle as the canonical evaluation tool for "why does the UK lag" questions.',

      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};
