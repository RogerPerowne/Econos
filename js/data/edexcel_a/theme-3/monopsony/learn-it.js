/* ============================================================
   ECONOS – Monopsony (Edexcel A 3.4.6)
   6 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.

   Card patterns (no two consecutive repeat; two tile-grid cards max):
     1 Hub (one powerful buyer; labour vs buying monopsony)
     2 Interactive diagram (ACL/MCL/MRP → Lm → Wm → wage gap)
     3 Tile grid (5 conditions) + what-to-look-for + two contexts
     4 Evidence-then-verdict (stakeholder effects + trade-off pair)
     5 Tile grid (4 real-world scenarios) + how-to-spot flow
     6 Evidence-then-verdict (synthesis + how-to-write)

   New visuals (js/icons.js):
     - monopsonyBuyerHub  (Card 1 hub)
     - monopsonyLabourDiagram (Card 2 interactive, ms-1..ms-3)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'monopsony',
  topicNum: '3.4.6',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Monopsony',
  estTime: '15 min',
  goal: 'Define monopsony and buyer power, build and read the monopsony labour-market diagram, explain when buyer power exists, and evaluate who gains and who loses',

  intro: {
    heroKey: 'heroMonopsony',
    summary: 'A monopsony is one dominant buyer — the mirror of monopoly\'s single seller — typically the main employer of labour or a giant purchaser facing many small suppliers. With sellers short of alternatives, the buyer can push the wage or price below the competitive level and buy less.',
    doInThis: 'Build the labour-market monopsony diagram to find the wage and employment level versus a competitive market, identify the conditions that create buyer power, and evaluate who gains, who loses, and how a minimum wage changes the result.',
    outcomes: [
      'Define monopsony and explain buyer power',
      'Build the monopsony diagram with ACL, MCL and MRP',
      'Find the monopsony wage and employment level',
      'Explain the conditions that create monopsony power',
      'Identify monopsony in real labour and supplier markets',
      'Evaluate who gains and who loses from buyer power'
    ],
    tip: 'The phrase to reach for is buyer power — a monopsonist sets the wage or price because sellers have nowhere else to go.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 15 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Monopsony: the big picture
       Pattern: Hub (one powerful buyer) + when-it-happens + why-it-matters
       ==================================================================== */
    {
      id: 'mps-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Monopsony — the big picture',
      lede: 'A monopsony is a market with one buyer who has substantial power — often a labour market where many workers sell to one powerful employer.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Monopsony is <strong>buyer power</strong> — the buyer can set the price or wage paid below the competitive level.' },

      visualKey: 'monopsonyBuyerHub',
      visualLabel: 'WHAT A MONOPSONY IS',
      visualEmoji: '\u{1F9E9}',

      causesFirst: true,
      causesLabel: 'WHEN IT CAN HAPPEN',
      causesEmoji: '\u{1F4CD}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F465}', head: 'Few alternative buyers', body: 'Sellers or workers have few places to go.' },
        { tone: 'amber',  icon: '\u{1F9F3}', head: 'Low mobility',           body: 'Hard to switch location, job or customer.' },
        { tone: 'purple', icon: '\u{1F6A7}', head: 'Barriers to entry',      body: 'New buyers do not easily appear.' },
        { tone: 'rose',   icon: '⚖️', head: 'Buyer bargaining power', body: 'The buyer can influence the wage or price.' }
      ],

      causes2Label: 'WHY IT MATTERS',
      causes2Emoji: '\u{1F4A1}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'green',  icon: '\u{1F3E2}', head: 'Firm / buyer', body: 'Lower wage or purchase cost.' },
        { tone: 'amber',  icon: '\u{1F465}', head: 'Employees',    body: 'Lower wages than in a competitive market.' },
        { tone: 'purple', icon: '\u{1F69A}', head: 'Suppliers',    body: 'Squeezed prices and tighter margins.' },
        { tone: 'blue',   icon: '\u{1F6D2}', head: 'Consumers',    body: 'Lower prices — but only if savings are passed on.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Monopsony is the mirror image of monopoly: monopoly is one seller, monopsony is one buyer.' },

      conclusion: { title: 'Big idea', text: 'Monopsony power usually means a lower wage or price, and a lower quantity bought, than the competitive level.' },
      examEdge: 'Define monopsony, then note the parallel: <strong>monopoly is one seller, monopsony is one buyer</strong>.'
    },

    /* ====================================================================
       CARD 2 – How a monopsony sets wages and employment
       Pattern: Interactive diagram (monopsonyLabourDiagram, ms-1..ms-3)
       ==================================================================== */
    {
      id: 'mps-diagram',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'How a monopsony sets wages and employment',
      lede: 'In a labour-market monopsony, the firm faces the labour supply curve and a higher marginal cost of labour.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The monopsony hires where <strong>MCL = MRP</strong>, then pays the wage found on the labour supply curve.' },

      interactiveDiagram: {
        svgKey: 'monopsonyLabourDiagram',
        label: 'THE MONOPSONY DIAGRAM — build it step by step',
        emoji: '\u{1F4C9}',
        layers: ['ms-1', 'ms-2', 'ms-3'],
        views: [
          {
            label: 'The curves',
            tone: 'blue',
            head: 'Step 1 — why MCL is above supply',
            body: 'The firm faces the labour supply curve (<strong>ACL = S</strong>). To hire one more worker it must raise the wage for everyone — so <strong>MCL lies above</strong> the supply curve.',
            show: []
          },
          {
            label: 'Employment: MCL = MRP',
            tone: 'purple',
            head: 'Step 2 — the employment level',
            body: 'The monopsony hires where the marginal cost of labour equals the marginal revenue product (<strong>MCL = MRP</strong>): employment <strong>Lm</strong>.',
            show: ['ms-1']
          },
          {
            label: 'Wage: read down to supply',
            tone: 'rose',
            head: 'Step 3 — the wage',
            body: 'It only needs the wage on the <strong>supply curve</strong> to attract Lm workers, so it pays <strong>Wm</strong> — below the workers’ MRP.',
            show: ['ms-1', 'ms-2']
          },
          {
            label: 'The wage gap',
            tone: 'green',
            head: 'Step 4 — vs the competitive market',
            body: 'A competitive market would pay <strong>Wc</strong> and employ <strong>Lc</strong> — both higher. The gap Wc − Wm is the monopsony’s wage suppression.',
            analysis: 'This is why a minimum wage set between Wm and the competitive wage can raise both pay and employment in a monopsony — the opposite of its effect in a competitive market.',
            show: ['ms-1', 'ms-2', 'ms-3']
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'WHY MCL IS ABOVE SUPPLY',
      causesEmoji: '\u{1F4C8}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Supply curve', body: 'To attract more labour, the firm must offer a higher wage.' },
        { tone: 'rose',   icon: '\u{1F4B7}', head: 'MCL curve',    body: 'It pays that higher wage to all workers, so MCL exceeds the wage.' },
        { tone: 'amber',  icon: '\u{1F517}', head: 'Result',       body: 'The buyer restricts employment to keep wages low.' }
      ],

      causes3Label: 'WHAT THE DIAGRAM SHOWS',
      causes3Emoji: '\u{1F50D}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'rose',   icon: '\u{1F4C9}', head: 'Lower wage',      body: 'Wm is below the competitive wage.' },
        { tone: 'amber',  icon: '\u{1F465}', head: 'Lower employment', body: 'Lm is below the competitive level.' },
        { tone: 'blue',   icon: '\u{1F3E2}', head: 'Buyer power',     body: 'The firm pays less than each worker’s MRP.' },
        { tone: 'purple', icon: '⚠️', head: 'Possible exploitation', body: 'Wage below marginal product.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A monopsonist has no labour demand curve in the usual sense — employment and wage come from MCL = MRP and the supply curve.' },

      conclusion: { title: 'Big idea', text: 'A monopsony employs fewer workers and pays a lower wage than a competitive labour market.' },
      examEdge: 'Show MCL <strong>above</strong> the supply curve, hire where MCL = MRP, then read the wage <strong>down</strong> on the supply curve.'
    },

    /* ====================================================================
       CARD 3 – When can monopsony power exist?
       Pattern: Tile grid (5 conditions) + what-to-look-for + two contexts
       ==================================================================== */
    {
      id: 'mps-conditions',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'When can monopsony power exist?',
      lede: 'Buyer power is strongest when sellers or workers have few outside options.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The less choice the seller has, the <strong>more power the buyer</strong> has.' },

      causesFirst: true,
      causesLabel: 'THE FIVE CONDITIONS',
      causesEmoji: '✅',
      causesStyle: 'numbered-rows',
      causes: [
        { tone: 'blue',   icon: '\u{1F465}', head: 'Few buyers',      body: 'One or a few large buyers dominate the market, so sellers have little choice about who to deal with.' },
        { tone: 'amber',  icon: '\u{1F9F3}', head: 'Low mobility',    body: 'Workers or suppliers can’t easily switch location, job or customer, so they are tied to the buyer.' },
        { tone: 'purple', icon: '\u{1F6A7}', head: 'Barriers to entry', body: 'New buyers don’t easily appear on the buying side to compete the dominant buyer’s power away.' },
        { tone: 'green',  icon: '\u{1F9E9}', head: 'Fragmented sellers', body: 'Many small, unorganised sellers can’t co-ordinate to bargain against one large buyer.' },
        { tone: 'rose',   icon: '\u{1F4C9}', head: 'Inelastic supply', body: 'Sellers can’t quickly cut supply in response, so the buyer isn’t very responsive to them.' }
      ],

      causes3Label: 'WHAT TO LOOK FOR',
      causes3Emoji: '\u{1F50E}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'purple', icon: '\u{1F4CA}', head: 'Concentration', body: 'A high share of buying in one firm.' },
        { tone: 'amber',  icon: '\u{1F6AA}', head: 'Weak alternatives', body: 'Sellers have nowhere else to go.' },
        { tone: 'blue',   icon: '\u{1F4B7}', head: 'Buyer influences price', body: 'The wage or price is set by the buyer.' },
        { tone: 'green',  icon: '\u{1F4C9}', head: 'Lower quantity', body: 'Less is bought than in a competitive market.' }
      ],

      pairLabel: 'Labour-market vs buying monopsony',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue',
        icon: '\u{1F477}',
        iconStyle: 'circle',
        label: 'Labour-market monopsony',
        points: ['Many workers, one big employer', 'A specialist hospital or care provider', 'Workers face switching costs']
      },
      right: {
        tone: 'amber',
        icon: '\u{1F69A}',
        iconStyle: 'circle',
        label: 'Buying monopsony',
        points: ['Many suppliers, one big buyer', 'A supermarket buying from farms', 'Small suppliers depend on one customer']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Monopsony power depends on market concentration, low mobility and weak outside options.' },

      conclusion: { title: 'Big idea', text: 'Monopsony power exists wherever sellers depend on a buyer that has real alternatives of its own.' },
      examEdge: 'Don’t confuse it with monopoly: <strong>monopoly is a seller, monopsony is a buyer</strong>.'
    },

    /* ====================================================================
       CARD 4 – Who gains and who loses?
       Pattern: Evidence-then-verdict (stakeholder effects + trade-off pair)
       ==================================================================== */
    {
      id: 'mps-gains-losses',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'Who gains and who loses?',
      lede: 'Monopsony changes who has bargaining power — but the overall effect depends on how far cost savings are passed on.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The buyer often gains first, while workers or suppliers may receive <strong>lower wages or prices</strong>.' },

      causesFirst: true,
      causesLabel: 'STAKEHOLDER EFFECTS',
      causesEmoji: '\u{1F465}',
      causesStyle: 'numbered-rows',
      causes: [
        { tone: 'green',  icon: '\u{1F3E2}', head: 'Firm / buyer', body: '<strong>✓ Gains:</strong> lower wage or purchase cost, higher profit margin and stronger bargaining power. &nbsp; <strong>✗ Risk:</strong> reputational damage and weaker supplier relationships.' },
        { tone: 'amber',  icon: '\u{1F465}', head: 'Employees', body: '<strong>✗ Lose:</strong> lower wages than a competitive market and reduced bargaining power. &nbsp; <strong>✓ But:</strong> a min wage can push pay back up.' },
        { tone: 'purple', icon: '\u{1F69A}', head: 'Suppliers', body: '<strong>✗ Lose:</strong> squeezed selling prices and thinner margins, so less to reinvest. &nbsp; <strong>✓ But:</strong> guaranteed large orders bring stability.' },
        { tone: 'blue',   icon: '\u{1F6D2}', head: 'Consumers', body: '<strong>✓ Gain:</strong> possible lower retail prices if the buyer passes savings on. &nbsp; <strong>✗ Or not:</strong> the buyer may simply keep the saving as profit.' }
      ],

      causes3Label: 'EVALUATION POINTS',
      causes3Emoji: '⚖️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'blue',   icon: '\u{1F4AA}', head: 'How strong?', body: 'How much buyer power does the firm really have?' },
        { tone: 'amber',  icon: '⏱️', head: 'Time horizon', body: 'Short run gains vs long-run supplier exit.' },
        { tone: 'green',  icon: '\u{1F501}', head: 'Pass-through', body: 'Do savings reach consumers?' },
        { tone: 'purple', icon: '\u{1F30D}', head: 'Context', body: 'Is a minimum wage or regulation in place?' }
      ],

      pairLabel: 'Buyer costs fall vs wages and prices fall',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '\u{1F4B0}',
        iconStyle: 'circle',
        label: 'Buyer costs fall',
        points: ['Higher profit, or lower prices', 'Stronger bargaining position', 'Stable, large-scale purchasing']
      },
      right: {
        tone: 'rose',
        icon: '\u{1F4C9}',
        iconStyle: 'circle',
        label: 'Wages and prices paid fall',
        points: ['Workers and suppliers worse off', 'Output and quantity bought may fall', 'Risk of long-run under-investment']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Monopsony is not automatically good for consumers — buyer power often means lower wages, with mixed final effects.' },

      conclusion: { title: 'Big idea', text: 'The buyer gains first; whether anyone else gains depends on how far savings are passed on.' },
      examEdge: 'Weigh the <strong>firm’s gain</strong> against the wider effects on employees, suppliers and consumers.'
    },

    /* ====================================================================
       CARD 5 – Monopsony in the real world
       Pattern: Tile grid (4 scenarios) + how-to-spot flow + why-it-matters
       ==================================================================== */
    {
      id: 'mps-real-world',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'Monopsony in the real world',
      lede: 'Buyer power appears in both labour markets and supplier markets — especially where one large organisation dominates.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'To apply monopsony, identify the <strong>market, the powerful buyer, and why sellers have weak alternatives</strong>.' },

      visualKey: 'monopsonyScenarios',
      visualLabel: 'FOUR MARKET SCENARIOS',
      visualEmoji: '\u{1F30D}',
      visualCaption: 'Four versions of the same structure: many weak sellers, one powerful buyer.',

      flowTitle: 'HOW TO SPOT IT',
      flowEmoji: '\u{1F50E}',
      flow: [
        { tone: 'blue',   icon: '\u{1F3E2}', title: 'One big buyer',    sub: 'Dominates the buying side.' },
        { tone: 'amber',  icon: '\u{1F465}', title: 'Many small sellers', sub: 'Fragmented and weak.' },
        { tone: 'purple', icon: '\u{1F512}', title: 'Hard to switch',   sub: 'Few alternatives for sellers.' },
        { tone: 'rose',   icon: '\u{1F4C9}', title: 'Wage / price pushed down', sub: 'Below the competitive level.' }
      ],

      causes3Label: 'WHY IT MATTERS',
      causes3Emoji: '\u{1F4A1}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'blue',   icon: '\u{1F4B7}', head: 'Pay and costs',  body: 'Buyer power affects wages, prices and margins.' },
        { tone: 'amber',  icon: '\u{1F91D}', head: 'Bargaining',     body: 'Workers and suppliers care about their power to negotiate.' },
        { tone: 'purple', icon: '\u{1F3DB}️', head: 'Policy', body: 'Minimum wages and regulators respond to buyer power.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The same idea covers labour markets (wages) and supplier markets (prices) — the buyer is powerful in both.' },

      conclusion: { title: 'Big idea', text: 'Monopsony is a real-world market-power story — not just a labour-market diagram.' },
      examEdge: 'Application marks come from linking the model to the sellers, and the reason their outside options are weak.'
    },

    /* ====================================================================
       CARD 6 – The whole story
       Pattern: Evidence-then-verdict (synthesis + how-to-write)
       ==================================================================== */
    {
      id: 'mps-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole monopsony story',
      lede: 'Strong answers define monopsony, explain why buyer power exists, and then judge the effects on firms, workers, suppliers and consumers.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A monopsony matters when buyer power is strong enough to push the wage or price <strong>below the competitive level</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F465}', title: 'Few buyers',      sub: 'One dominant purchaser.' },
        { tone: 'amber',  icon: '\u{1F6AA}', title: 'Weak alternatives', sub: 'Sellers can’t switch.' },
        { tone: 'purple', icon: '\u{1F3E2}', title: 'Buyer power',     sub: 'Sets the wage or price.' },
        { tone: 'rose',   icon: '\u{1F4C9}', title: 'Lower wage / price', sub: 'Below competitive.' },
        { tone: 'amber',  icon: '\u{1F4E6}', title: 'Lower quantity',  sub: 'Less bought or hired.' },
        { tone: 'green',  icon: '⚖️', title: 'Judgement',     sub: 'Weigh the effects.' }
      ],

      causesLabel: 'WHAT TO EVALUATE',
      causesEmoji: '⚖️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F4AA}', head: 'How strong is the power?', body: 'Real buyer power, or just a large share?' },
        { tone: 'amber',  icon: '\u{1F9F3}', head: 'How mobile are sellers?',  body: 'Can workers or suppliers walk away?' },
        { tone: 'purple', icon: '⏱️', head: 'Time horizon',      body: 'Short-run gain vs long-run supplier exit.' },
        { tone: 'green',  icon: '\u{1F381}', head: 'Who gets the benefit?', body: 'Firm profit, lower prices, or neither?' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '❌', head: 'Monopsony is not monopoly', body: 'One buyer, not one seller.' },
        { tone: 'rose', icon: '\u{1F4E6}', head: 'Don’t ignore quantity', body: 'Employment or output falls too.' },
        { tone: 'rose', icon: '\u{1F6D2}', head: 'Consumer effects are mixed', body: 'Not automatically lower prices.' }
      ],

      causes3Label: 'HOW TO WRITE IT',
      causes3Emoji: '✍️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'purple', icon: '\u{1F4C4}', head: '1 · Define', body: 'One dominant buyer, buyer power.' },
        { tone: 'purple', icon: '\u{1F4C9}', head: '2 · Explain the condition', body: 'Why sellers have weak alternatives.' },
        { tone: 'purple', icon: '\u{1F465}', head: '3 · Assess stakeholders', body: 'Firm, workers, suppliers, consumers.' },
        { tone: 'purple', icon: '⚖️', head: '4 · Judge overall', body: 'On balance, in context.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Use the diagram, explain why buyer power exists, and remember the effects reach beyond the firm.' },

      conclusion: { title: 'Big idea', text: 'Monopsony turns buyer power into a question: who gains from lower wages or prices, and at what cost?' },
      economistQuote: {
        portraitKey: 'economistMarx',
        tone: 'amber',
        label: 'Economist insight on labour and power',
        quote: 'Capital is dead labour which, vampire-like, lives only by sucking living labour, and lives the more, the more labour it sucks.',
        attribution: 'Karl Marx, <em>Capital, Volume I</em> (1867)'
      },
      examEdge: 'Anchor the <strong>diagram and context</strong> to a clear judgement across firms, employees, suppliers and consumers.'
    }
  ]
};
