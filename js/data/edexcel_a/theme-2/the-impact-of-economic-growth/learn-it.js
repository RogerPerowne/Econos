/* ============================================================
   ECONOS – The Impact of Economic Growth (Theme 2 · 2.5.4)
   6 cards · one storytelling pattern per card:
     C1 Decompose a diagram     — the growth scorecard hero
     C2 Spectrum / regime grid  — 5-band income spectrum
     C3 Sequential flow chain   — firm investment loop
     C4 Comparison table        — fiscal dividend breakdown
     C5 Interactive multi-state — 3 sustainability views
     C6 Evidence-then-verdict   — the four-dimensional verdict
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'the-impact-of-economic-growth',
  topicNum: '5.4',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'The Impact of Economic Growth',
  estTime: '11-13 minutes',
  goal: 'Move beyond GDP-as-headline: judge growth by who gains, how firms feed it back, what it does for public finances, whether it lasts, and ultimately by the four-dimensional A* framework.',

  intro: {
    heroKey: 'heroGrowth',
    summary: 'Growth is more than a single GDP number. Its real effect depends on who gets the gains, how firms convert them into investment, what it does for the public finances, and whether it can be sustained without bankrupting the future.',
    doInThis: 'Six cards: a beyond-GDP scorecard, an income-spectrum of consumer impact, the firm investment feedback loop, the fiscal dividend in numbers, three sustainability lenses, and the four-dimensional A* verdict.',
    outcomes: [
      'Distinguish the rate of growth from its quality, distribution and sustainability',
      'Assess how growth affects each income decile differently',
      'Trace the firm-level feedback from AD to investment to productivity',
      'Quantify the fiscal dividend a 2% growth year delivers',
      'Apply Kuznets, natural-capital and carbon-debt frames to sustainability',
      'Structure A* evaluation around rate × quality × distribution × sustainability'
    ],
    tip: 'Strong answers never call growth simply "good" or "bad". They split the rate from the three multipliers that turn rate into welfare.',
    stages: [
      { num: 1, name: 'Learn it', sub: '6 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [

    /* ============================================================
       CARD 1 – Pattern: Decompose a diagram
       Hero: growthScorecard. The hub-and-spoke visual carries the
       message that GDP is the headline, four dimensions modify
       whether the headline translates into welfare.
       ============================================================ */
    {
      id: 'beyond-gdp',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'Beyond GDP — what growth is, and isn’t',
      lede: 'Real GDP per capita growth is the <strong>headline rate</strong>. But four other dimensions determine whether the headline translates into actual welfare — and an A* evaluation has to track all five.',
      ledeStyle: 'plain',
      tip: { icon: '\u{1F4D0}', tone: 'blue', text: 'Growth is necessary but not sufficient. Rate × distribution × composition × sustainability × wellbeing = welfare.' },

      visualKey: 'growthScorecard',
      visualLabel: 'The growth scorecard',
      visualEmoji: '\u{1F4CA}',

      bottomTip: { tone: 'amber', icon: '\u{1F4A1}', text: '<strong>The Easterlin paradox:</strong> past roughly £30,000 of GDP per capita, self-reported life satisfaction stops tracking GDP. More money beyond that point buys more <em>stuff</em> but not more reported happiness. That’s why the wellbeing dimension exists on the scorecard.' },

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'Don’t evaluate growth on rate alone. The four satellite dimensions decide whether a 2% headline is genuinely improving lives or just inflating a misleading number.'
      },
      examEdge: 'When a question asks "evaluate the impact of growth", the high-band move is to set out the five-dimensional scorecard at the top of your essay and then check the case study against each dimension. Examiners reward the structure as much as the verdict.'
    },

    /* ============================================================
       CARD 2 – Pattern: Spectrum / regime grid
       ============================================================ */
    {
      id: 'impact-on-consumers',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'Impact on consumers — who gains, how much, and why it varies',
      lede: 'A "2% growth year" is an average. Across the UK income distribution, that average lands very differently on different households. Walk the spectrum from bottom to top.',
      ledeStyle: 'plain',
      tip: { icon: '\u{1F465}', tone: 'green', text: 'Growth raises average real income. Whether it raises YOUR real income depends on where you sit in the distribution.' },

      causesLabel: 'The UK income spectrum',
      causesEmoji: '\u{2696}\u{FE0F}',
      causesCols: 5,
      causes: [
        { tone: 'rose',   icon: '\u{1F33E}', head: 'Bottom 10%',     body: '<strong>Real-income gain: ~£200/yr.</strong> Spends 70%+ on essentials – food, energy, rent. Hit hardest by inflation that often accompanies growth. UK 2010-19: real wages at the bottom rose just 4% across the decade.' },
        { tone: 'amber',  icon: '\u{1F45F}', head: 'Lower-middle',   body: '<strong>~£500/yr.</strong> Some discretionary spending. Sensitive to childcare costs, NI thresholds. Universal Credit taper means growth-driven wage gains are partly clawed back.' },
        { tone: 'blue',   icon: '\u{1F3E0}', head: 'Middle',         body: '<strong>~£900/yr.</strong> Mortgage holders – interest rate sensitivity dominates. The "squeezed middle" of the 2010s saw real-terms incomes stagnate even when GDP grew.' },
        { tone: 'purple', icon: '\u{2708}\u{FE0F}', head: 'Upper-middle', body: '<strong>~£1,800/yr.</strong> Saving and investment exposure. Equity gains compound growth into wealth. Pension contributions rise with salary.' },
        { tone: 'green',  icon: '\u{1F3DB}\u{FE0F}', head: 'Top 1%',  body: '<strong>~£12,000+/yr.</strong> Capital gains often outpace wages. Owner-occupier housing wealth compounds. UK 2010-19: top-1% share of national income rose from 12% to 14%.' }
      ],

      bottomTip: { tone: 'purple', icon: '\u{1F4C8}', text: '<strong>Kuznets-curve intuition:</strong> in fast-developing economies, inequality typically widens before it narrows. The UK is well past the peak of its Kuznets curve — but that doesn’t mean growth is currently lowering inequality. Distributional outcome depends on the type of growth, not just its rate.' },

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'The same headline 2% growth year delivers a £200 gain to the bottom and a £12,000+ gain to the top. The headline rate without the distribution profile is incomplete evidence.'
      },
      examEdge: 'In data-response questions, watch for "growth has raised living standards" as a generic claim. The strong rebuttal: cite the bottom-decile real-income figure and the Kuznets-curve framing — growth has raised <em>averages</em>; it has raised <em>median</em> living standards much less.'
    },

    /* ============================================================
       CARD 3 – Pattern: Sequential flow chain
       ============================================================ */
    {
      id: 'impact-on-firms',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 6',
      title: 'Impact on firms — the investment feedback loop',
      lede: 'Growth feeds itself through the firm sector via a six-step chain. When the chain runs cleanly, growth becomes self-sustaining; when it breaks, growth becomes inflationary.',
      ledeStyle: 'plain',
      tip: { icon: '\u{1F501}', tone: 'green', text: 'When firms convert revenue gains into productive investment, growth becomes self-reinforcing — that’s the supply-side bonus.' },

      flowTitle: 'The investment feedback loop',
      flowEmoji: '\u{1F3ED}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'blue',  icon: '\u{1F4C8}', title: 'AD rises',           sub: 'consumer spending up' },
        { tone: 'blue',  icon: '\u{1F4B7}', title: 'Revenue rises',      sub: 'firms sell more units' },
        { tone: 'blue',  icon: '\u{1F4B0}', title: 'Profits rise',       sub: 'margins expand' },
        { tone: 'green', icon: '\u{1F3D7}\u{FE0F}', title: 'Investment rises', sub: 'capex, R&D, training' },
        { tone: 'green', icon: '\u{26A1}',  title: 'Productivity rises', sub: 'more output per worker' },
        { tone: 'green', icon: '\u{27A1}\u{FE0F}', title: 'AS shifts right', sub: 'non-inflationary growth' }
      ],

      causesLabel: 'But watch for the break points',
      causesEmoji: '\u{26A0}\u{FE0F}',
      causesCols: 3,
      causes: [
        { tone: 'amber', icon: '\u{1F465}', head: 'Labour shortages near full employment', body: 'When unemployment falls below ~4%, wage growth accelerates. Firms struggle to hire — capex plans get delayed. Recent UK case: post-Brexit + post-COVID staff shortages in hospitality and construction.' },
        { tone: 'amber', icon: '\u{1F30D}', head: 'Supply-chain bottlenecks',                body: 'A boom that draws in imported inputs faster than they can be supplied creates spot-price spikes. The 2021-22 chip shortage delayed UK car production for over a year.' },
        { tone: 'amber', icon: '\u{1F62C}', head: 'Weak business confidence',                body: 'Even with rising profits, firms hoard cash if they distrust the demand permanence. UK 2016-19: corporate cash balances rose £80bn while business investment was flat.' }
      ],

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'The investment loop is what turns a one-off demand boost into permanent productive capacity. When it works, growth is non-inflationary; when it breaks, the boost just inflates prices.'
      },
      examEdge: '<strong>The UK productivity puzzle</strong> is essentially the loop breaking down: post-2008 GDP recovered but investment-per-worker stayed below G7 peers. Cite this when a question asks why UK growth has felt fragile — the chain has been running, but the productivity step has misfired.'
    },

    /* ============================================================
       CARD 4 – Pattern: Comparison table (versusRows)
       ============================================================ */
    {
      id: 'impact-on-government',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 6',
      title: 'Impact on government — the fiscal dividend',
      lede: 'A 2% real-GDP growth year creates measurable <strong>fiscal headroom</strong>: tax revenue rises, welfare spending falls, debt-to-GDP shrinks. Walk the channels and the figures.',
      ledeStyle: 'plain',
      tip: { icon: '\u{1F4B7}', tone: 'green', text: 'Growth is the cheapest fiscal policy there is — it raises revenue and cuts spending simultaneously, without a single tax change.' },

      versusRows: {
        title: 'Fiscal channels: a 2% growth year, UK scale',
        emoji: '\u{1F4CA}',
        leftTone: 'green',
        rightTone: 'amber',
        rows: [
          {
            left:  { icon: '\u{1F4C8}', head: 'Income tax + NI: +£8-10bn',  sub: 'Rising wages → higher PAYE receipts. Fiscal drag (frozen thresholds) amplifies this.' },
            right: { icon: '\u{26A0}\u{FE0F}', head: 'Caveat: lags 6-12 months', sub: 'PAYE is real-time but self-assessment lags. The Treasury sees the receipts late.' }
          },
          {
            left:  { icon: '\u{1F4C9}', head: 'VAT receipts: +£3-4bn',      sub: 'Consumption rises with income. VAT is one of the most growth-elastic taxes.' },
            right: { icon: '\u{26A0}\u{FE0F}', head: 'Caveat: regressive',       sub: 'Heavier proportional hit on lower deciles. Distributional concern partially offsets the headline gain.' }
          },
          {
            left:  { icon: '\u{1F3ED}', head: 'Corporation tax: +£2-3bn',   sub: 'Higher profits → higher CT receipts. Sensitive to investment allowances.' },
            right: { icon: '\u{26A0}\u{FE0F}', head: 'Caveat: profit-shifting',  sub: 'Multinationals can route profits abroad. UK CT base is narrower than GDP would suggest.' }
          },
          {
            left:  { icon: '\u{1F4C9}', head: 'Welfare spending: −£3-5bn', sub: 'Lower unemployment → fewer JSA + UC claims. Universal Credit caseload is highly cyclical.' },
            right: { icon: '\u{26A0}\u{FE0F}', head: 'Caveat: limited near zero', sub: 'Once unemployment is at NAIRU, the welfare savings stop and labour-shortage pressures kick in.' }
          },
          {
            left:  { icon: '\u{1F4C9}', head: 'Debt-to-GDP: falls if g > r',     sub: 'When growth exceeds real interest rate, debt ratio falls without repayment. Free deleveraging.' },
            right: { icon: '\u{26A0}\u{FE0F}', head: 'Caveat: only if r stays low', sub: 'Post-2022, real rates have risen. Growth-driven deleveraging is harder than during the QE era.' }
          },
          {
            left:  { icon: '\u{1F3E5}', head: 'Net headroom: ~£20bn/yr',    sub: 'Annual net dividend in a typical 2% growth year. Compounds: ~£110bn over 5 years.' },
            right: { icon: '\u{26A0}\u{FE0F}', head: 'Caveat: spending pressure', sub: 'Public-service demand rises with population and ageing. The £20bn isn’t pure headroom — some is absorbed by NHS and social care.' }
          }
        ]
      },

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'Growth delivers roughly £20bn of fiscal headroom per year at UK scale — without legislating a single tax change. Compounded, that’s £100bn+ over a parliament. This is why every chancellor’s first priority is keeping growth alive.'
      },
      examEdge: 'A* answers quote the <em>scale</em> of the fiscal dividend explicitly. "Growth helps the budget" is a B-grade claim. "A 2% UK growth year creates roughly £20bn of net fiscal headroom" is A-grade. Numbers convert vague benefits into evaluative weight.'
    },

    /* ============================================================
       CARD 5 – Pattern: Interactive multi-state diagram
       Three mutually-exclusive sustainability views.
       ============================================================ */
    {
      id: 'sustainability-tradeoff',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'Current vs future generations — the sustainability trade-off',
      lede: 'Growth that depletes natural capital or builds carbon liabilities is transferring cost from today’s consumers to tomorrow’s. Three lenses on the same uncomfortable truth.',
      ledeStyle: 'plain',
      tip: { icon: '\u{231B}', tone: 'rose', text: 'If growth borrows from the future to pay the present, it’s not really growth — it’s consumption rebranded.' },

      interactiveDiagram: {
        svgKey: 'growthSustainability3View',
        wide: true,
        maxWidth: '100%',
        label: 'Click through the three sustainability lenses',
        emoji: '\u{1F30D}',
        layers: ['idl-kuznets', 'idl-natural', 'idl-carbon'],
        views: [
          {
            label: 'Kuznets curve',
            tone: 'green',
            show: ['idl-kuznets'],
            head: 'The Environmental Kuznets Curve',
            body: 'Pollution intensity (per unit of GDP) follows an inverted-U as countries develop. Early industrialisation pushes pollution UP — energy-intensive heavy industry, weak environmental standards. Past a turning point (~$10,000 GDP per capita in the original 1991 study), citizens demand cleaner air and water, and the curve bends DOWN.',
            analysis: '<strong>Three live examples on the curve right now:</strong> Niger (left side, low GDP, low intensity). China (near the peak, polluting heavily but with a peak target). UK (right side, post-industrial, falling carbon intensity for 30 years). The exam point: growth itself eventually cleans up, IF institutions force the bend. The curve doesn’t guarantee the descent — it just describes the rich-economy path.'
          },
          {
            label: 'Natural capital',
            tone: 'amber',
            show: ['idl-natural'],
            head: 'GDP vs Green GDP — the depletion gap',
            body: '<strong>Standard GDP</strong> measures value added but ignores natural-capital depletion. <strong>Green GDP</strong> subtracts the value of resources extracted (timber, fisheries, oil) and pollution costs (cleanup, health impact). The gap between them is the <em>real bill</em> growth is running up.',
            analysis: 'For the UK, the gap is small — a service economy doesn’t extract much. For Norway, the gap is large — North Sea oil extraction is huge value created but also huge natural capital consumed. For Saudi Arabia, the gap is bigger still — most measured GDP is just monetising a finite resource. The exam framing: a resource-extraction economy isn’t really growing in any sustainable sense; it’s converting natural capital into financial capital.'
          },
          {
            label: 'Carbon debt',
            tone: 'rose',
            show: ['idl-carbon'],
            head: 'Carbon debt — the bill the future inherits',
            body: 'The IPCC 1.5°C carbon budget is the <em>cumulative</em> CO₂ humanity can emit and still hit the 1.5°C warming limit. The world is burning through it at ~2% per year. Every tonne emitted above the budget transfers a cost — flood damage, crop failure, adaptation spending — to future generations.',
            analysis: 'This is the strongest "growth versus future" case. Unlike Kuznets (which eventually self-corrects) and natural-capital (which can be substituted), carbon debt compounds and lasts millennia in the atmosphere. Strong evaluation move: growth that doesn’t decouple from emissions is borrowing welfare from people who haven’t been born yet. The UK has decoupled (GDP +75% since 1990, emissions −50%); China hasn’t yet; the US is partially decoupled. The decoupling trajectory matters more than the headline growth rate.'
          }
        ]
      },

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'Sustainability isn’t a side-concern attached to growth — it determines whether the growth was real. Kuznets, natural-capital and carbon-debt all ask the same question: is this growth borrowed from the future?'
      },
      examEdge: 'Pair these three frames with the <strong>UK has decoupled GDP from carbon</strong> stat (−50% emissions since 1990 alongside +75% GDP). It demonstrates that growth and environmental performance are not inherently conflicting — but it requires policy choices, not just headline GDP rises.'
    },

    /* ============================================================
       CARD 6 – Pattern: Evidence-then-verdict
       ============================================================ */
    {
      id: 'four-dimensional-verdict',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 6',
      title: 'The four-dimensional verdict',
      lede: 'Synthesis time. Lay out the strongest case for growth and the strongest case against unconstrained growth, then apply the A* framework: <strong>rate × quality × distribution × sustainability</strong>.',
      ledeStyle: 'plain',
      tip: { icon: '\u{1F3AF}', tone: 'blue', text: 'A* essays never declare growth simply "good" or "bad". They judge it on four multipliers and conclude conditionally.' },

      pairFirst: true,
      pairLabel: 'The case for growth vs the case against unconstrained growth',
      pairEmoji: '\u{2696}\u{FE0F}',
      left: {
        tone: 'green',
        icon: '\u{2B06}\u{FE0F}',
        iconStyle: 'circle',
        label: 'The case FOR growth',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13.5px;color:#0B1426;line-height:1.7;">' +
          '<li><strong>Consumer real-income gains</strong> – even modestly distributed, growth lifts the average.</li>' +
          '<li><strong>Fiscal dividend of ~£20bn/yr</strong> – funds public services without tax rises.</li>' +
          '<li><strong>Investment loop</strong> – productive feedback that builds long-run capacity.</li>' +
          '<li><strong>Welfare lift below the £30k Easterlin threshold</strong> – clear life-satisfaction gains in lower-income countries.</li>' +
          '<li><strong>Decoupling is possible</strong> – the UK has shown growth and environmental progress can coexist (GDP +75%, emissions −50% since 1990).</li>' +
        '</ul>'
      },
      right: {
        tone: 'amber',
        icon: '\u{2B07}\u{FE0F}',
        iconStyle: 'circle',
        label: 'The case AGAINST unconstrained growth',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13.5px;color:#0B1426;line-height:1.7;">' +
          '<li><strong>Distribution skews to the top</strong> – Kuznets-curve inequality widens before it narrows; in mature economies it can re-widen.</li>' +
          '<li><strong>Carbon debt compounds</strong> – transferred to generations who haven’t been born yet.</li>' +
          '<li><strong>Resource depletion</strong> – Green GDP gap can be large in extractive economies.</li>' +
          '<li><strong>Wellbeing plateau above £30k</strong> – more stuff stops translating to more life satisfaction.</li>' +
          '<li><strong>Composition risk</strong> – growth in defence, prisons, gambling counts the same as growth in education and healthcare.</li>' +
        '</ul>'
      },

      causes2Label: 'High-quality vs low-quality growth — two real cases',
      causes2Emoji: '\u{1F3AD}',
      causes2Cols: 2,
      causes2: [
        { tone: 'green', icon: '\u{1F1F0}\u{1F1F7}', head: 'South Korea, 1965-95: high-quality growth', body: 'Real GDP per capita grew 8% per year for 30 years. Broad-based — middle class swelled, top-decile share fell, education spending tripled. Productivity-led: HE enrolment from 6% to 60%. Limited environmental damage relative to scale. Today: G20 economy with strong wellbeing scores.' },
        { tone: 'rose',  icon: '\u{26FD}', head: 'Resource-curse economies: low-quality growth',  body: 'Headline GDP growth driven by oil and gas extraction. Examples: Venezuela, Equatorial Guinea, Nigeria. Inequality entrenched, productive base hollowed out, currency volatile, institutions captured by extraction interests. When the resource depletes, growth collapses and welfare reverses. The headline rate was misleading throughout.' }
      ],

      causes3Label: 'The A* evaluation framework',
      causes3Emoji: '\u{1F3AF}',
      causes3Cols: 4,
      causes3: [
        { tone: 'blue', icon: '\u{1F4C8}', head: 'Rate',          body: 'How fast is real GDP per capita growing? The headline number.' },
        { tone: 'blue', icon: '\u{1F3ED}', head: 'Quality',       body: 'Is it productivity-driven or debt-fuelled? Investment-led or consumption-led?' },
        { tone: 'blue', icon: '\u{2696}\u{FE0F}', head: 'Distribution', body: 'Who gains? Are median incomes tracking the mean? Is the bottom decile improving?' },
        { tone: 'blue', icon: '\u{1F343}', head: 'Sustainability', body: 'Decoupled from emissions? Natural capital preserved? Carbon-budget respectful?' }
      ],

      conclusionPosition: 'end',
      conclusion: {
        title: 'The verdict',
        text: 'Growth is necessary but not sufficient for welfare. Multiply the rate by its quality, distribution and sustainability — that product is the real welfare gain. <strong>The best growth is broad-based (most households gain), productivity-driven (not debt or extraction), and sustainable (does not borrow from the future).</strong> Anything else is borrowed welfare in disguise.'
      },
      examEdge: '<strong>Strong evaluation distinguishes the rate of growth from its quality, distribution and sustainability.</strong> The four-multiplier framework is the structure that lifts B-band answers to A*: state the headline rate, then methodically apply each multiplier with one piece of evidence (numbers, case studies). Use the South Korea / resource-curse pair to anchor "high-quality vs low-quality growth"; use the UK decoupling stat to anchor "rate is not destiny".',

      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};
