/* ============================================================
   ECONOS – Business Growth (Edexcel A 3.1.2)
   8 cards · interactive-first build
   Maps the spec sub-points: 3.1.2a (organic growth + reasons),
   3.1.2b (vertical / horizontal / conglomerate integration and
   their advantages and disadvantages), 3.1.2c (constraints on
   business growth – market size, access to finance, owner
   objectives, regulation).

   Card patterns (no two consecutive repeat):
     1 Decompose (4-route hub) + tile grid + flow chain
     2 Sequential flow chain + side-by-side pair
     3 Decompose (supply-chain anatomy) + side-by-side pair + tile grid
     4 Side-by-side pair (decompose hero) + side-by-side pair + tile grid
     5 Decompose (4-industry hub) + tile grid + side-by-side pair
     6 Predict-then-reveal (six real integration deals to diagnose)
     7 Spectrum / regime grid (road-blockers) + tile grid + flow chain
     8 Comparison table + comparison table + flow chain
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'business-growth',
  topicNum: '3.1.2',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Business Growth',
  estTime: '18 min',
  goal: 'Compare the routes to business growth, weigh their benefits and risks, and explain the constraints',

  intro: {
    heroKey: 'heroBusinessGrowth',
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
      { num: 1, name: 'Learn',  sub: '8 cards \xb7 18 min', state: 'current' },
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
      stepLabel: 'Learn: Card 1 of 8',
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
      stepLabel: 'Learn: Card 2 of 8',
      title: 'Organic growth',
      lede: 'Organic growth is internal expansion – growing through the firm’s own efforts rather than by merging or taking over another business.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: '<strong>Organic growth</strong> means expanding from within using existing resources, profits and new capacity.' },

      flowTitle: 'HOW IT WORKS',
      flowEmoji: '\u{1F50D}',
      flow: [
        { tone: 'green',  icon: '£',         title: 'Retained profit',     sub: 'Keep profits within the business.' },
        { tone: 'blue',   icon: '\u{1F465}', title: 'Invest internally',   sub: 'Spend on staff, marketing or capacity.' },
        { tone: 'amber',  icon: '\u{1F4C8}', title: 'Sales rise',          sub: 'Higher output and more customers.' },
        { tone: 'purple', icon: '\u{1F3E2}', title: 'Firm grows',          sub: 'Revenue, profits and capacity increase.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Examples include <strong>opening new branches</strong>, <strong>launching new products</strong>, hiring more staff, or increasing output from existing sites.' },

      pairLabel: 'BENEFITS VS DRAWBACKS',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', iconStyle: 'circle', icon: '\u{1F48E}',
        label: 'Why firms like it',
        text: '<ul><li><strong>Control.</strong> Owners keep control over pace and culture.</li><li><strong>Lower risk.</strong> No need to integrate another firm.</li><li><strong>Cheaper to start.</strong> Can be financed gradually from retained profit.</li><li><strong>Stronger culture.</strong> Existing systems and brand stay coherent.</li></ul>'
      },
      right: {
        tone: 'purple', iconStyle: 'circle', icon: '⚠️',
        label: 'The drawbacks',
        text: '<ul><li><strong>Slow.</strong> Growth can take time.</li><li><strong>Finance limits.</strong> Expansion depends on internal funds or borrowing.</li><li><strong>Market size.</strong> Demand may not be large enough.</li><li><strong>Competitive pressure.</strong> Rivals may react before the firm scales up.</li></ul>'
      },

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
      stepLabel: 'Learn: Card 3 of 8',
      title: 'Vertical integration',
      lede: 'Vertical integration happens when a firm grows by merging with or taking over another firm at a different stage of production or distribution.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: '<strong>Backward</strong> integration moves toward <strong>suppliers</strong>. <strong>Forward</strong> integration moves toward <strong>retailers</strong> or distribution.' },

      visualKey: 'verticalSupplyChain',
      visualLabel: 'THE SUPPLY CHAIN',
      visualEmoji: '\u{1F50D}',

      pairFirst: true,
      pairLabel: 'BENEFITS VS RISKS',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', iconStyle: 'circle', icon: '\u{1F48E}',
        label: 'Why firms do it',
        text: '<ul><li><strong>Security of supply.</strong> Fewer disruptions.</li><li><strong>Quality control.</strong> Better oversight.</li><li><strong>Keep the margin.</strong> Profit captured from another stage.</li><li><strong>Better information.</strong> Closer knowledge of demand or inputs.</li></ul>'
      },
      right: {
        tone: 'purple', iconStyle: 'circle', icon: '⚠️',
        label: 'The risks',
        text: '<ul><li><strong>High cost.</strong> Acquisitions can be expensive.</li><li><strong>Managerial complexity.</strong> More stages to run.</li><li><strong>Less flexibility.</strong> Harder to switch supplier or distributor.</li><li><strong>Diseconomies.</strong> Growth can create coordination problems.</li></ul>'
      },

      causesLabel: 'EXAMPLES',
      causesEmoji: '\u{1F4D1}',
      causesCols: 2,
      causes: [
        { tone: 'green',  icon: '←', head: 'Backward', body: 'A car maker buying a parts supplier.' },
        { tone: 'purple', icon: '→', head: 'Forward',  body: 'A coffee roaster opening retail cafés.' }
      ],

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
      stepLabel: 'Learn: Card 4 of 8',
      title: 'Horizontal integration',
      lede: 'Horizontal integration is growth by merging with or taking over another firm at the same stage of production in the same industry.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: '<strong>Horizontal integration</strong> means growing wider in the same market.' },

      visualKey: 'horizontalCombineDiagram',
      visualLabel: 'AT THE SAME STAGE',
      visualEmoji: '\u{1F50D}',

      pairLabel: 'APPEAL VS RISKS',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', iconStyle: 'circle', icon: '\u{1F48E}',
        label: 'Why it appeals',
        text: '<ul><li><strong>Market share.</strong> Bigger share of sales.</li><li><strong>Economies of scale.</strong> Lower average costs.</li><li><strong>Brand power.</strong> Stronger pricing or advertising position.</li><li><strong>Fewer competitors.</strong> Rivalry may weaken.</li></ul>'
      },
      right: {
        tone: 'rose', iconStyle: 'circle', icon: '⚠️',
        label: 'What could go wrong',
        text: '<ul><li><strong>Competition concerns.</strong> Regulators may intervene.</li><li><strong>Culture clash.</strong> Merged firms may not fit well.</li><li><strong>Job overlap.</strong> Restructuring can be disruptive.</li><li><strong>Overpayment.</strong> Firms may pay too much for the target.</li></ul>'
      },

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
      stepLabel: 'Learn: Card 5 of 8',
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
      causes2Cols: 2,
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
       Pattern: Predict-then-reveal (diagnose six real-world cases).
       Synthesis card after all four routes have been introduced — for each
       deal, the student predicts the integration type then clicks for the
       answer.
       ==================================================================== */
    {
      id: 'business-growth-diagnose',
      template: 'diagnose',
      stepLabel: 'Learn: Card 6 of 8',
      title: 'Diagnose the integration',
      lede: 'Six real-world deals. For each one, ask yourself: <strong>are the two firms at the same stage, a different stage of the same chain, or in different industries?</strong> Then click <em>Make your call</em> to check.',
      table: {
        headers: ['Type', 'How to spot it', 'The give-away'],
        rows: [
          ['↕️ Vertical',     'Same supply chain, different stage', 'Backward = toward suppliers; forward = toward the customer.'],
          ['\u{1F3E2} Horizontal',   'Same stage, same industry',          'Two competitors at the same level join forces.'],
          ['\u{1F310} Conglomerate', 'Different industries',                'Unrelated activities sit under one parent.']
        ]
      },
      scenarios: {
        title: 'Six deals to diagnose',
        items: [
          {
            tone: 'amber',
            label: '1',
            text: '<strong>Disney + Pixar (2006).</strong> Disney, the world\'s largest entertainment company, paid $7.4bn to acquire Pixar – the leading computer-animation studio behind <em>Toy Story</em> and <em>Finding Nemo</em>. Both firms made animated feature films for the same global cinema audience.',
            answer: '<strong>Horizontal integration.</strong> Both Disney and Pixar were at the same stage of the same industry (film production), so this is a same-stage merger. The deal gave Disney scale, a dominant share of family animation and access to Pixar\'s technical talent.'
          },
          {
            tone: 'blue',
            label: '2',
            text: '<strong>Apple Stores (from 2001).</strong> Apple, primarily a maker of consumer electronics (iPhones, Macs, iPads), started opening its own branded retail stores worldwide rather than relying only on third-party retailers like Best Buy or Currys to reach customers.',
            answer: '<strong>Forward vertical integration.</strong> Apple moved <em>down</em> the supply chain – from manufacturing toward the customer-facing retail stage. The aim was greater control over the brand experience, customer data, and the full retail margin that had previously gone to third-party shops.'
          },
          {
            tone: 'purple',
            label: '3',
            text: '<strong>Tata Group.</strong> The Indian conglomerate owns Jaguar Land Rover (luxury cars), Tata Steel (one of Europe\'s largest steelmakers), Tata Consultancy Services (global IT services) and Tetley Tea – plus airlines, hotels and chemicals.',
            answer: '<strong>Conglomerate integration.</strong> Tata\'s businesses operate in completely different industries with little operational overlap. The logic is risk diversification and using one strong group balance sheet to support many unrelated activities.'
          },
          {
            tone: 'blue',
            label: '4',
            text: '<strong>IKEA in Romania (2015).</strong> IKEA, the world\'s largest furniture retailer, bought 33,600 hectares of Romanian forest – making it one of Europe\'s biggest private forest owners. The timber is used to make IKEA\'s flat-pack furniture.',
            answer: '<strong>Backward vertical integration.</strong> IKEA moved <em>up</em> the supply chain – from furniture retail toward the raw-material input (timber). The aim was security of supply, lower long-run cost, and tighter control over sustainability standards.'
          },
          {
            tone: 'amber',
            label: '5',
            text: '<strong>Vodafone + Three UK (proposed 2024).</strong> Vodafone (the UK\'s third-largest mobile network) agreed to merge its UK business with Three UK (the fourth-largest), creating a combined operator that would leapfrog BT/EE to become the country\'s biggest mobile carrier by customer count.',
            answer: '<strong>Horizontal integration.</strong> Both are mobile network operators at the same stage of the same industry. Scale and spectrum efficiency are the upside; the Competition and Markets Authority (CMA) review reflected horizontal-merger concerns about competition between only three remaining UK networks.'
          },
          {
            tone: 'purple',
            label: '6',
            text: '<strong>Berkshire Hathaway.</strong> Warren Buffett\'s investment vehicle directly owns insurance giants (GEICO), BNSF Railway, See\'s Candies, Dairy Queen, Duracell batteries, and large minority stakes in Apple, Coca-Cola and American Express – all sitting under one parent company.',
            answer: '<strong>Conglomerate integration.</strong> Berkshire\'s holdings span insurance, transport, sweets, batteries and technology – with little operational synergy. The integrating logic is capital allocation across unrelated businesses, not value-chain or market-share gains.'
          }
        ]
      }
    },

    /* ====================================================================
       CARD 7 – Constraints on business growth (3.1.2c)
       Pattern: Spectrum / regime grid (4 road-blockers) + tile grid + flow chain
       ==================================================================== */
    {
      id: 'business-growth-constraints',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 7 of 8',
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
      stepLabel: 'Learn: Card 8 of 8',
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
