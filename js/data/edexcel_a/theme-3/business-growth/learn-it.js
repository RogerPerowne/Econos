/* ============================================================
   ECONOS – Business Growth (Edexcel A 3.1.2)
   7 cards · interactive-first build
   Maps the spec sub-points: 3.1.2a (organic growth + reasons),
   3.1.2b (vertical / horizontal / conglomerate integration and
   their advantages and disadvantages), 3.1.2c (constraints on
   business growth – market size, access to finance, owner
   objectives, regulation).

   Card patterns (no two consecutive repeat):
     1 Decompose (4-route hub) + tile grid + flow chain
     2 Sequential flow chain + tile grid + tile grid
     3 Decompose (supply-chain anatomy) + tile grid + side-by-side pair
     4 Side-by-side pair (decompose hero) + tile grid + tile grid
     5 Decompose (4-industry hub) + tile grid + side-by-side pair
     6 Spectrum / regime grid (road-blockers) + tile grid + flow chain
     7 Comparison table + comparison table + flow chain
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'business-growth',
  topicNum: '3.1.2',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Business Growth',
  estTime: '16 min',
  goal: 'Compare the routes to business growth, weigh their benefits and risks, and explain the constraints',

  intro: {
    heroKey: 'heroFirm',
    summary: 'Firms grow in different ways – internally through their own resources, or externally by merging with or acquiring other firms. Each route changes a firm’s costs, market position and risk. Some firms can’t (or won’t) grow at all, held back by limited demand, scarce finance, owner preferences or regulation. This topic gives you the four growth routes, the trade-offs they involve, and the constraints that shape every real-world decision.',
    doInThis: 'Define organic growth, distinguish vertical / horizontal / conglomerate integration, weigh the benefits and risks of each, and explain the four main constraints on business growth.',
    outcomes: [
      'Explain organic growth and why firms might prefer it',
      'Distinguish vertical, horizontal and conglomerate integration and identify forward vs backward',
      'Evaluate the benefits and risks of each external-growth route',
      'Explain why market size, finance, owner objectives and regulation constrain growth'
    ],
    tip: 'Growth is a choice, not a default. The strongest answers compare the route to the firm’s objectives and the market’s constraints.',
    stages: [
      { num: 1, name: 'Learn',  sub: '7 cards \xb7 16 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Business growth: the big picture
       Pattern: Decompose (4-route hub) + tile grid + flow chain
       ==================================================================== */
    {
      id: 'business-growth-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 7',
      title: 'Business growth – the big picture',
      lede: 'Firms can grow in different ways, but every growth strategy involves trade-offs.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: '<strong>Business growth</strong> means an increase in the scale of a firm’s operations.' },

      visualKey: 'businessGrowthMapHub',
      visualLabel: 'THE GROWTH MAP',
      visualEmoji: '\u{1F50D}',

      causesLabel: 'WHY FIRMS GROW',
      causesEmoji: '\u{1F48E}',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Profit',          body: 'Increase profits and returns for owners.' },
        { tone: 'blue',   icon: '\u{1F967}', head: 'Market share',    body: 'Gain a bigger share of existing or new markets.' },
        { tone: 'amber',  icon: '⚙️', head: 'Economies of scale', body: 'Lower average costs and improve efficiency.' },
        { tone: 'purple', icon: '\u{1F6E1}️', head: 'Survival / power', body: 'Strengthen resilience and bargaining power.' }
      ],

      flowTitle: 'WHAT YOU WILL LEARN',
      flowEmoji: '\u{1F5FA}️',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '1', title: 'Big picture',       sub: '' },
        { tone: 'amber',  icon: '2', title: 'Organic growth',    sub: '' },
        { tone: 'purple', icon: '3', title: 'Vertical',          sub: '' },
        { tone: 'blue',   icon: '4', title: 'Horizontal',        sub: '' },
        { tone: 'green',  icon: '5', title: 'Conglomerate',      sub: '' },
        { tone: 'amber',  icon: '6', title: 'Constraints',       sub: '' },
        { tone: 'purple', icon: '7', title: 'The whole story',   sub: '' }
      ],

      conclusion: { title: 'BIG IDEA', text: 'Growth is not one thing – firms must <strong>choose a route</strong>, weigh the benefits and risks, and judge whether bigger is actually better.' },
      examEdge: 'Strong answers <strong>define the growth method</strong>, explain why a firm chooses it, then evaluate the likely costs, benefits and constraints.'
    },

    /* ====================================================================
       CARD 2 – Organic growth
       Pattern: Sequential flow chain + tile grid + tile grid
       ==================================================================== */
    {
      id: 'business-growth-organic',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 7',
      title: 'Organic growth',
      lede: 'Organic growth is internal expansion – growing through the firm’s own efforts rather than by merging or taking over another business.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: '<strong>Organic growth</strong> means expanding from within using existing resources, profits and new capacity.' },

      flowTitle: 'HOW IT WORKS',
      flowEmoji: '\u{1F50D}',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '£',         title: 'Retained profit',                       sub: 'Keep profits within the business.' },
        { tone: 'blue',   icon: '\u{1F465}', title: 'Invest in staff, marketing or capacity', sub: 'Use resources to build capability and scale.' },
        { tone: 'amber',  icon: '\u{1F4C8}', title: 'Sales rise',                             sub: 'Higher output and more customers.' },
        { tone: 'purple', icon: '\u{1F3E2}', title: 'Firm grows',                             sub: 'Revenue, profits and capacity increase.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Examples include <strong>opening new branches</strong>, <strong>launching new products</strong>, hiring more staff, or increasing output from existing sites.' },

      causesLabel: 'WHY FIRMS LIKE IT',
      causesEmoji: '\u{1F48E}',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F6E1}️', head: 'Control',         body: 'Owners keep control over pace and culture.' },
        { tone: 'blue',   icon: '\u{1F512}',  head: 'Lower risk',      body: 'No need to integrate another firm.' },
        { tone: 'amber',  icon: '£',         head: 'Cheaper to start', body: 'Can be financed gradually from retained profit.' },
        { tone: 'green',  icon: '\u{1F465}', head: 'Stronger culture', body: 'Existing systems and brand stay coherent.' }
      ],

      causes2Label: 'THE DRAWBACKS',
      causes2Emoji: '⚠️',
      causes2Cols: 4,
      causes2: [
        { tone: 'purple', icon: '⏳',         head: 'Slow',                  body: 'Growth can take time.' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: 'Finance limits',  body: 'Expansion depends on internal funds or borrowing.' },
        { tone: 'blue',   icon: '\u{1F967}', head: 'Market size',           body: 'Demand may not be large enough.' },
        { tone: 'green',  icon: '♟️',  head: 'Competitive pressure', body: 'Rivals may react before the firm scales up.' }
      ],

      summaryRow: { tone: 'blue', icon: '⚖️', text: 'Organic growth = <strong>slower</strong> but often <strong>safer</strong>.' },

      conclusion: { title: 'BIG IDEA', text: 'Organic growth gives firms <strong>control</strong> and <strong>continuity</strong>, but it is often constrained by time, finance and the size of the market.' },
      examEdge: 'In answers, <strong>define organic growth clearly</strong>, then weigh lower integration risk against slower speed.'
    },

    /* ====================================================================
       CARD 3 – Vertical integration
       Pattern: Decompose (supply-chain anatomy) + tile grid + side-by-side pair
       ==================================================================== */
    {
      id: 'business-growth-vertical',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 7',
      title: 'Vertical integration',
      lede: 'Vertical integration happens when a firm grows by merging with or taking over another firm at a different stage of production or distribution.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: '<strong>Backward</strong> integration moves toward <strong>suppliers</strong>. <strong>Forward</strong> integration moves toward <strong>retailers</strong> or distribution.' },

      visualKey: 'verticalSupplyChain',
      visualLabel: 'THE SUPPLY CHAIN',
      visualEmoji: '\u{1F50D}',

      causesLabel: 'WHY FIRMS DO IT',
      causesEmoji: '\u{1F48E}',
      causesCols: 4,
      causes: [
        { tone: 'green', icon: '\u{1F6E1}️', head: 'Security of supply', body: 'Fewer disruptions.' },
        { tone: 'green', icon: '\u{1F50D}', head: 'Quality control',    body: 'Better oversight.' },
        { tone: 'green', icon: '£',         head: 'Keep the margin',    body: 'Profit captured from another stage.' },
        { tone: 'green', icon: '\u{1F4CA}', head: 'Better information', body: 'Closer knowledge of demand or inputs.' }
      ],

      causes2Label: 'THE RISKS',
      causes2Emoji: '⚠️',
      causes2Cols: 4,
      causes2: [
        { tone: 'purple', icon: '£',         head: 'High cost',              body: 'Acquisitions can be expensive.' },
        { tone: 'purple', icon: '\u{1F4CB}', head: 'Managerial complexity',  body: 'More stages to run.' },
        { tone: 'purple', icon: '↔️',        head: 'Less flexibility',       body: 'Harder to switch supplier or distributor.' },
        { tone: 'purple', icon: '\u{1F9E9}', head: 'Diseconomies',           body: 'Growth can create coordination problems.' }
      ],

      pairLabel: 'EXAMPLES',
      pairEmoji: '\u{1F4D1}',
      left:  { tone: 'green',  iconStyle: 'circle', icon: '←', label: 'Backward', text: '<strong>Examples:</strong> a car maker buying a parts supplier.' },
      right: { tone: 'purple', iconStyle: 'circle', icon: '→', label: 'Forward',  text: '<strong>Examples:</strong> a coffee roaster opening retail cafés.' },

      conclusion: { title: 'BIG IDEA', text: 'Vertical integration <strong>changes a firm’s position in the supply chain</strong>, aiming to improve control, margins or reliability.' },
      examEdge: 'Always state whether the move is <strong>forward or backward</strong>, then explain the likely advantage and one possible drawback.'
    },

    /* ====================================================================
       CARD 4 – Horizontal integration
       Pattern: Side-by-side pair (decompose hero) + tile grid + tile grid
       ==================================================================== */
    {
      id: 'business-growth-horizontal',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 7',
      title: 'Horizontal integration',
      lede: 'Horizontal integration is growth by merging with or taking over another firm at the same stage of production in the same industry.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: '<strong>Horizontal integration</strong> means growing wider in the same market.' },

      visualKey: 'horizontalCombineDiagram',
      visualLabel: 'AT THE SAME STAGE',
      visualEmoji: '\u{1F50D}',

      causesLabel: 'WHY IT APPEALS',
      causesEmoji: '\u{1F48E}',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F967}', head: 'Market share',      body: 'Bigger share of sales.' },
        { tone: 'amber',  icon: '⚙️',        head: 'Economies of scale', body: 'Lower average costs.' },
        { tone: 'purple', icon: '\u{1F6E1}️', head: 'Brand power',       body: 'Stronger pricing or advertising position.' },
        { tone: 'green',  icon: '\u{1F465}', head: 'Fewer competitors', body: 'Rivalry may weaken.' }
      ],

      causes2Label: 'WHAT COULD GO WRONG',
      causes2Emoji: '⚠️',
      causes2Cols: 4,
      causes2: [
        { tone: 'rose', icon: '⚖️',         head: 'Competition concerns', body: 'Regulators may intervene.' },
        { tone: 'rose', icon: '\u{1F465}', head: 'Culture clash',        body: 'Merged firms may not fit well.' },
        { tone: 'rose', icon: '\u{1F4BC}', head: 'Job overlap',          body: 'Restructuring can be disruptive.' },
        { tone: 'rose', icon: '£',         head: 'Overpayment',          body: 'Firms may pay too much for the target.' }
      ],

      causes3Label: 'WHEN IT WORKS BEST',
      causes3Emoji: '\u{1F3C6}',
      causes3Cols: 3,
      causes3Style: 'tinted-flat',
      causes3: [
        { tone: 'blue', icon: '\u{1F3AF}',  head: 'Strong strategic fit', body: 'Similar products, customers and capabilities.' },
        { tone: 'blue', icon: '\u{1F4C9}',  head: 'Real cost savings',    body: 'Clear economies of scale.' },
        { tone: 'blue', icon: '\u{1F3DB}️', head: 'Manageable regulation', body: 'Unlikely to trigger major objections.' }
      ],

      conclusion: { title: 'BIG IDEA', text: 'Horizontal integration can make a firm <strong>much bigger in its own market</strong>, but the gains depend on successful integration and regulator approval.' },
      examEdge: 'State clearly that the firms are <strong>at the same stage</strong>, then evaluate scale benefits against possible monopoly power or integration problems.'
    },

    /* ====================================================================
       CARD 5 – Conglomerate integration
       Pattern: Decompose (4-industry hub) + tile grid + side-by-side pair
       ==================================================================== */
    {
      id: 'business-growth-conglomerate',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 7',
      title: 'Conglomerate integration',
      lede: 'Conglomerate integration happens when a firm grows by joining with a business in a different industry or market.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: '<strong>Conglomerate growth</strong> spreads into new markets rather than deepening one existing market.' },

      visualKey: 'conglomerateRiskHub',
      visualLabel: 'THE DIVERSIFICATION IDEA',
      visualEmoji: '\u{1F50D}',

      bottomTip: { icon: '\u{1F6E1}️', tone: 'purple', text: 'By <strong>diversifying</strong> into different markets, the firm aims to reduce risk if one area underperforms.' },

      causesLabel: 'WHY FIRMS TRY IT',
      causesEmoji: '\u{1F48E}',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F6E1}️', head: 'Risk spreading', body: 'Weaker performance in one market may be offset by another.' },
        { tone: 'blue',   icon: '\u{1F4C8}',  head: 'New revenue streams', body: 'More sources of profit.' },
        { tone: 'amber',  icon: '£',         head: 'Use spare finance',  body: 'Cash from one division can fund another.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'Stronger overall group', body: 'Shared management or brand strength may help.' }
      ],

      causes2Label: 'THE LIMITS',
      causes2Emoji: '⚠️',
      causes2Cols: 4,
      causes2: [
        { tone: 'rose', icon: '\u{1F9E9}',  head: 'Little synergy',    body: 'Businesses may not fit together.' },
        { tone: 'rose', icon: '\u{1F464}', head: 'Lack of expertise', body: 'Managers may know one market better than another.' },
        { tone: 'rose', icon: '\u{1F578}️', head: 'Complexity',        body: 'Harder to coordinate a broad group.' },
        { tone: 'rose', icon: '\u{1F3AF}', head: 'Unclear focus',     body: 'Investors may prefer specialised firms.' }
      ],

      pairLabel: 'CONGLOMERATE VS HORIZONTAL',
      pairEmoji: '⚖️',
      left:  { tone: 'purple', iconStyle: 'circle', icon: '\u{1F3E2}', label: 'Conglomerate', text: '<strong>Different market.</strong> Unrelated or loosely related businesses.' },
      right: { tone: 'blue',   iconStyle: 'circle', icon: '\u{1F3EC}', label: 'Horizontal',   text: '<strong>Same market.</strong> Businesses at the same stage or industry.' },

      conclusion: { title: 'BIG IDEA', text: 'Conglomerate growth is mainly about <strong>diversification</strong> – its strength is risk spreading, but its weakness is often weak strategic fit.' },
      examEdge: 'If asked to evaluate conglomerate growth, discuss <strong>diversification benefits</strong> but also whether the businesses actually complement each other.'
    },

    /* ====================================================================
       CARD 6 – Constraints on business growth
       Pattern: Spectrum / regime grid (4 road-blockers) + tile grid + flow chain
       ==================================================================== */
    {
      id: 'business-growth-constraints',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 7',
      title: 'Constraints on business growth',
      lede: 'Not every firm can grow as much as it wants – real-world limits affect how fast and how far expansion can go.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Growth depends not just on ambition, but on <strong>market conditions</strong>, <strong>finance</strong>, <strong>objectives</strong> and <strong>regulation</strong>.' },

      visualKey: 'growthRoadblockers',
      visualLabel: 'THE FOUR MAIN CONSTRAINTS',
      visualEmoji: '\u{1F6A7}',

      causesLabel: 'WHY SMALL CAN BE RATIONAL',
      causesEmoji: '\u{1F49C}',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F6E1}️', head: 'Control',  body: 'Owner keeps decision-making.' },
        { tone: 'blue',   icon: '\u{1F334}', head: 'Lifestyle', body: 'Avoiding stress or overwork.' },
        { tone: 'amber',  icon: '☂️',        head: 'Risk',     body: 'Slower expansion reduces exposure.' },
        { tone: 'purple', icon: '\u{1F396}️', head: 'Quality', body: 'Maintaining standards matters more than size.' }
      ],

      flow2Title: 'WHAT THIS MEANS',
      flow2Emoji: '\u{1F6A6}',
      flow2Sep: '→',
      flow2: [
        { tone: 'green',  icon: '\u{1F50D}', title: 'Opportunity',     sub: 'A chance for growth exists.' },
        { tone: 'blue',   icon: '\u{1F6A7}', title: 'Constraint',      sub: 'One or more limits get in the way.' },
        { tone: 'amber',  icon: '\u{1F500}', title: 'Growth choice',   sub: 'The firm chooses how (or whether) to grow.' },
        { tone: 'purple', icon: '\u{1F4C8}', title: 'Outcome',         sub: 'Results depend on the choice and the constraints.' }
      ],

      bottomTip: { icon: '\u{1F501}', tone: 'slate', text: 'A firm may choose <strong>organic growth</strong> because it lacks finance for takeovers, or <strong>remain small</strong> because the owner values independence.' },

      conclusion: { title: 'BIG IDEA', text: 'Growth is a <strong>choice shaped by external limits and internal objectives</strong> – bigger is not always better.' },
      examEdge: 'In evaluation, do not assume every firm wants maximum growth – <strong>owner aims and market limits matter</strong>.'
    },

    /* ====================================================================
       CARD 7 – The whole story
       Pattern: Comparison table + comparison table + flow chain
       ==================================================================== */
    {
      id: 'business-growth-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 7 of 7',
      title: 'The whole story',
      lede: 'There is no single best route to growth – the right strategy depends on the firm’s aims, market and constraints.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Strong evaluation compares the <strong>route</strong>, the <strong>benefits</strong>, the <strong>risks</strong> and the <strong>context</strong>.' },

      comparisonTable: {
        title: 'THE GROWTH ROUTES',
        emoji: '\u{1F3AF}',
        columns: ['\u{1F331} Organic', '↕️ Vertical', '\u{1F3E2} Horizontal', '\u{1F310} Conglomerate'],
        columnTones: ['green', 'blue', 'amber', 'purple'],
        rows: [
          { label: 'How it grows', values: [
            'Internal expansion using own resources (sales, outlets, capacity).',
            'Backward (suppliers) or forward (distributors) integration.',
            'Merge or acquire competitors at the same stage.',
            'Merge or acquire in different industries or markets.'
          ], highlights: [true, true, true, true] },
          { label: 'Best for', values: [
            'Firms with strong demand and resources who want to grow independently.',
            'Firms needing more control over inputs or distribution and reliability.',
            'Firms seeking market share, scale economies and stronger market position.',
            'Firms wanting diversification and to spread risk across sectors.'
          ] }
        ]
      },

      comparisonTable2: {
        title: 'ADVANTAGES VS DISADVANTAGES',
        emoji: '⚖️',
        columns: ['✅ Advantages', '❌ Disadvantages'],
        columnTones: ['green', 'rose'],
        rows: [
          { label: '\u{1F331} Organic',      values: ['Uses own resources, lower risk, keeps culture.', 'Slower growth, may miss opportunities, limited by internal capacity.'] },
          { label: '↕️ Vertical',           values: ['More control over supply chain, lower costs, assured quality.', 'Complex and costly, inflexible, management challenge.'] },
          { label: '\u{1F3E2} Horizontal',   values: ['Greater market share, economies of scale, stronger market power.', 'Regulation and anti-competitive concerns, integration difficulties.'] },
          { label: '\u{1F310} Conglomerate', values: ['Diversifies risk, uses excess resources, spreads downturns.', 'Weak synergy risk, harder to manage, returns may be lower.'] }
        ]
      },

      flowTitle: 'HOW TO WRITE IT',
      flowEmoji: '✏️',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '1', title: 'Identify the growth method',           sub: 'State the method the firm is using.' },
        { tone: 'blue',   icon: '2', title: 'Explain how it works',                 sub: 'Describe clearly how this method helps the firm grow.' },
        { tone: 'amber',  icon: '3', title: 'Apply one advantage and one drawback', sub: 'Use one advantage and one disadvantage with development.' },
        { tone: 'purple', icon: '4', title: 'Judge using context and constraints',  sub: 'Reach a justified judgement based on the firm’s situation.' }
      ],

      bottomTip: { icon: '⚖️', tone: 'blue', text: '<strong>It depends.</strong> The best strategy depends on market conditions, finance, owner objectives, and whether the firm values speed, control or diversification.' },

      conclusion: { title: 'BIG IDEA', text: 'Business growth is <strong>not just about getting bigger</strong> – it is about choosing the route that best fits the firm’s objectives.' },
      examEdge: 'Top answers <strong>compare methods directly</strong> and avoid blanket claims such as “growth is always good”.'
    }
  ]
};
