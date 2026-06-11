/* ============================================================
   ECONOS – Oligopoly (Edexcel A 3.4.4)
   6 cards · interactive-first build
   Introduction deck only — collusion & cartels and game theory are
   taught as SEPARATE topics, so this deck deliberately stops short
   of them (and Card 6 flags that collusion is a related topic).

   Card patterns:
     1 Hub-and-spoke (4 core features) + tile grid (real examples)
     2 Sequential flow (reaction story) + twin (two price reactions)
     3 Decompose (interactive 3-view kinked demand curve — ACCURATE)
     4 Tile grid (4 non-price tools) + flow + examples + pair
     5 Tile grid (4 barriers) + flow + tile grid + pair
     6 Sequential flow (synthesis) + tile grids + how-to-write

   New visuals:
     - oligopolyHub             (Card 1 hero: 4-feature hub)
     - oligopolyPriceReactions  (Card 2: twin reaction panels)
     - oligopolyKinkedDemand    (Card 3: interactive 3-view, accurate)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'oligopoly',
  topicNum: '3.4.4',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Oligopoly',
  estTime: '15 min',
  goal: 'Define oligopoly and interdependence, build and read the kinked demand curve, and judge price rigidity, non-price competition and the persistence of oligopoly',

  intro: {
    heroKey: 'heroOligopoly',
    summary: 'An oligopoly is a market dominated by a few large firms whose decisions are closely linked. The defining idea is interdependence — each firm must think about how rivals will react before it acts. That strategic tension explains two classic results: price rigidity (modelled by the kinked demand curve) and heavy non-price competition (branding, quality, service, innovation). Barriers to entry let oligopolies persist over time. This deck is the introduction to oligopoly — collusion & cartels and game theory are studied as their own separate topics.',
    doInThis: 'Define oligopoly and explain interdependence. Build the kinked demand curve step by step and use it to explain price rigidity. Identify the main forms of non-price competition and the barriers that let oligopolies persist. Evaluate the outcomes for firms and consumers — without assuming they are always good or bad.',
    outcomes: [
      'Define oligopoly and explain why interdependence matters',
      'Build and interpret the kinked demand curve diagram',
      'Explain price rigidity using the gap in the MR curve',
      'Identify forms of non-price competition and barriers to entry',
      'Evaluate the outcomes of oligopoly for firms and consumers'
    ],
    tip: 'The word to reach for is interdependence — a firm’s best move depends on what it expects rivals to do.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 15 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Oligopoly: the big picture
       Pattern: Hub-and-spoke (4 features) + tile grid (real examples)
       ==================================================================== */
    {
      id: 'oli-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Oligopoly — the big picture',
      lede: 'An oligopoly is a market dominated by a few large firms whose decisions are closely linked.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The key idea is <strong>interdependence</strong> — each firm must think about how rivals will react.' },

      visualKey: 'oligopolyHub',
      visualLabel: 'THE CORE FEATURES',
      visualEmoji: '\u{1F9E9}',

      visualKey2: 'marketSpectrumOligopoly',
      visualLabel2: 'WHERE IT SITS',
      visualEmoji2: '\u{1F9ED}',

      causesLabel: 'WHAT THIS LOOKS LIKE',
      causesEmoji: '\u{1F3EA}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue', icon: '\u{26FD}', head: 'Petrol',          body: 'Few major brands; prices are watched closely.' },
        { tone: 'green', icon: '\u{1F6D2}', head: 'Supermarkets',   body: 'Advertising, loyalty schemes and price matching are common.' },
        { tone: 'purple', icon: '\u{1F4F1}', head: 'Mobile networks', body: 'Network strength and bundling matter as much as price.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Oligopoly sits between monopolistic competition and monopoly — there is competition, but not many competitors.' },

      conclusion: { title: 'Big idea', text: 'Oligopoly is really the story of a few powerful firms competing while constantly watching one another.' },
      examEdge: 'Define oligopoly, then use the phrase <strong>interdependence</strong> and support it with one or two clear features.'
    },

    /* ====================================================================
       CARD 2 – Interdependence: the key idea
       Pattern: Sequential flow (reaction story) + twin (price reactions)
       ==================================================================== */
    {
      id: 'oli-interdependence',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'Interdependence — the key idea',
      lede: 'In oligopoly, each firm must think strategically because one decision can trigger reactions from rivals.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Interdependence means a firm’s <strong>best move depends on what it expects rivals to do</strong>.' },

      flowTitle: 'THE REACTION STORY',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'blue',   icon: '\u{1F3F7}\u{FE0F}', title: 'Firm changes price', sub: 'A firm cuts or raises its price.' },
        { tone: 'purple', icon: '\u{1F3E2}', title: 'Rivals react',      sub: 'Rivals decide how to respond.' },
        { tone: 'blue',   icon: '\u{1F4CA}', title: 'Market conditions change', sub: 'Prices, quantities and shares are affected.' },
        { tone: 'amber',  icon: '\u{1F4B0}', title: 'Demand and profit shift', sub: 'Demand moves and profits change.' },
        { tone: 'green',  icon: '\u{267B}\u{FE0F}', title: 'Firm rethinks strategy', sub: 'The firm adjusts its plan going forward.' }
      ],

      visualKey: 'oligopolyPriceReactions',
      visualLabel: 'TWO COMMON PRICE REACTIONS',
      visualEmoji: '\u{2696}\u{FE0F}',

      causesLabel: 'NOT JUST ABOUT PRICE',
      causesEmoji: '\u{1F4E2}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F4E3}', head: 'Advertising',    body: 'Builds brand awareness and customer loyalty.' },
        { tone: 'purple', icon: '\u{1F396}\u{FE0F}', head: 'Product quality', body: 'Differentiates the offer and reduces rivalry.' },
        { tone: 'amber',  icon: '\u{1F3A7}', head: 'Service',        body: 'Gives consumers reasons to stay and return.' },
        { tone: 'green',  icon: '\u{1F4A1}', head: 'Innovation',     body: 'Can change the competitive game.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Interdependence helps explain why oligopolists often avoid simple price cutting and look for smarter ways to compete.' },

      conclusion: { title: 'Big idea', text: 'Oligopoly is strategic competition — every move is made with rivals in mind.' },
      examEdge: 'Use the word <strong>interdependence</strong>, then explain how a firm’s decision depends on the likely response of rivals.'
    },

    /* ====================================================================
       CARD 3 – The kinked demand curve
       Pattern: Decompose a diagram (interactive 3-view — ACCURATE build)
       ==================================================================== */
    {
      id: 'oli-kinked-demand',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'The kinked demand curve',
      lede: 'One model of oligopoly says prices can become sticky because rivals may react differently to price rises and price cuts.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Above the kink demand is <strong>more elastic</strong> — below the kink it is <strong>more inelastic</strong>.' },

      interactiveDiagram: {
        svgKey: 'oligopolyKinkedDemand',
        label: 'THE DIAGRAM — build it in three steps',
        emoji: '\u{1F4C8}',
        layers: ['kdc-1', 'kdc-2', 'kdc-3'],
        views: [
          {
            label: 'The kinked demand',
            tone: 'blue',
            head: 'Step 1 — a demand curve with a kink',
            body: 'At the current price the demand curve bends. <strong>Above the kink it is elastic</strong> (raise price and rivals don’t follow, so you lose lots of customers). <strong>Below the kink it is inelastic</strong> (cut price and rivals match, so you gain few extra customers).',
            show: ['kdc-1']
          },
          {
            label: 'The gap in MR',
            tone: 'amber',
            head: 'Step 2 — the marginal revenue gap',
            body: 'Each demand segment has its own MR line with twice the slope — so the two MR segments don’t meet. The result is a <strong>vertical gap (discontinuity) in MR, directly below the kink</strong>.',
            analysis: 'This gap is the engine of the whole model. It only exists because rivals react asymmetrically to rises versus cuts — pure interdependence drawn as geometry.',
            show: ['kdc-1', 'kdc-2']
          },
          {
            label: 'Why price is sticky',
            tone: 'green',
            head: 'Step 3 — MC can move within the gap',
            body: 'A firm produces where MC = MR. But MC can rise from <strong>MC₁ to MC₂</strong> and — as long as it still passes through the gap — the profit-maximising output and price <strong>do not change</strong>. The price is rigid.',
            analysis: 'That is the punchline: in oligopoly, costs can change and the firm still holds its price, because changing it risks a damaging reaction from rivals. The kinked demand curve turns interdependence into price rigidity.',
            show: ['kdc-1', 'kdc-2', 'kdc-3']
          }
        ]
      },

      causesLabel: 'WHY PRICES MAY STICK',
      causesEmoji: '\u{2753}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',  icon: '\u{1F4C8}', head: 'Price rise', body: 'Demand is very elastic — sales may fall sharply if rivals don’t follow.' },
        { tone: 'purple', icon: '\u{1F4C9}', head: 'Price cut',  body: 'Demand is more inelastic — rivals copy, so quantity rises little.' },
        { tone: 'green', icon: '\u{2696}\u{FE0F}', head: 'Result',    body: 'The firm may leave its price unchanged because changing it is risky.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'The kinked demand curve is a <strong>model</strong> — it helps explain one possible oligopoly outcome, not every market.' },

      conclusion: { title: 'Big idea', text: 'Interdependence can make price changes unattractive, so prices may remain stable.' },
      examEdge: 'When using the diagram, explain <strong>both sides of the kink</strong> and link the MR gap to price rigidity.'
    },

    /* ====================================================================
       CARD 4 – Non-price competition
       Pattern: Tile grid (4 tools) + flow + examples + pair
       ==================================================================== */
    {
      id: 'oli-non-price',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'Non-price competition',
      lede: 'Because price wars are risky, oligopolists often compete through differentiation rather than constant price cutting.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Non-price competition aims to <strong>win customers without simply lowering price</strong>.' },

      causesLabel: 'THE FOUR MAIN TOOLS',
      causesEmoji: '\u{1F4E2}',
      causesStyle: 'icon-top',
      causesCols: 2,
      causes: [
        { tone: 'green',  icon: '\u{1F4E3}', head: 'Advertising and branding', body: 'Builds awareness and loyalty.' },
        { tone: 'blue',   icon: '\u{1F396}\u{FE0F}', head: 'Quality and design', body: 'Makes the product more appealing.' },
        { tone: 'amber',  icon: '\u{1F3A7}', head: 'Customer service',      body: 'Improves the buying experience.' },
        { tone: 'purple', icon: '\u{1F4A1}', head: 'Innovation',            body: 'Creates new features or better performance.' }
      ],

      flowTitle: 'HOW IT WORKS',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green',  icon: '\u{1F3F7}\u{FE0F}', title: 'Differentiate the product', sub: 'Make the offer distinct.' },
        { tone: 'blue',   icon: '\u{1F465}', title: 'Consumers become less price-sensitive', sub: 'They value the brand.' },
        { tone: 'purple', icon: '\u{2764}\u{FE0F}', title: 'Brand loyalty rises', sub: 'Customers come back.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Firm gains some market power', sub: 'Demand becomes less elastic.' }
      ],

      causes2Label: 'REAL-WORLD EXAMPLES',
      causes2Emoji: '\u{1F30D}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green',  icon: '\u{1F6D2}', head: 'Supermarkets', body: 'Loyalty cards, ranges, store experience.' },
        { tone: 'blue',   icon: '\u{1F4F1}', head: 'Smartphones',  body: 'Design, ecosystems, branding.' },
        { tone: 'purple', icon: '\u{2708}\u{FE0F}', head: 'Airlines', body: 'Service, routes, rewards.' }
      ],

      pairLabel: 'THE LIMITS',
      pairEmoji: '\u{2696}\u{FE0F}',
      left: {
        tone: 'green',
        icon: '\u{1F44D}',
        iconStyle: 'circle',
        label: 'Why firms like it',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Avoids price wars.</li><li>Can support profit margins.</li></ul>'
      },
      right: {
        tone: 'rose',
        icon: '\u{26A0}\u{FE0F}',
        iconStyle: 'circle',
        label: 'What to watch',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Advertising can be costly.</li><li>Differentiation may be copied.</li></ul>'
      },

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Non-price competition is still competition — firms are trying to shift demand towards their own products.' },

      conclusion: { title: 'Big idea', text: 'In oligopoly, firms often compete hard — just not always through price.' },
      examEdge: 'In questions on oligopoly, mention branding, quality, service or innovation as alternatives to price competition.'
    },

    /* ====================================================================
       CARD 5 – Why oligopolies persist
       Pattern: Tile grid (4 barriers) + flow + tile grid + pair
       ==================================================================== */
    {
      id: 'oli-persist',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'Why oligopolies persist',
      lede: 'Oligopolies often last because new firms find it difficult to break in and challenge the established players.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Barriers to entry <strong>protect the position</strong> of the major firms.' },

      causesLabel: 'THE MAIN BARRIERS',
      causesEmoji: '\u{1F6E1}\u{FE0F}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Economies of scale', body: 'Large firms have lower average costs.' },
        { tone: 'amber',  icon: '\u{1F3C5}', head: 'Brand loyalty',      body: 'Consumers already trust famous names.' },
        { tone: 'blue',   icon: '\u{1F4B7}', head: 'High start-up or sunk costs', body: 'Entering the market is expensive and risky.' },
        { tone: 'purple', icon: '\u{1F517}', head: 'Patents, technology or network strength', body: 'Incumbents may own advantages that are hard to copy.' }
      ],

      flowTitle: 'HOW A BARRIER PROTECTS MARKET POWER',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'purple', icon: '\u{1F6A7}', title: 'Barrier to entry',  sub: 'A real obstacle for new firms.' },
        { tone: 'amber',  icon: '\u{1F465}', title: 'Few new rivals',     sub: 'Entry is deterred.' },
        { tone: 'blue',   icon: '\u{1F3E2}', title: 'Existing firms keep market share', sub: 'Incumbents stay dominant.' },
        { tone: 'green',  icon: '\u{1F4B0}', title: 'Pricing power or profits protected', sub: 'Market power persists.' }
      ],

      causes2Label: 'WHAT THIS MEANS FOR THE MARKET',
      causes2Emoji: '\u{1F3EA}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green', icon: '\u{1F967}', head: 'Concentration stays high', body: 'A few firms remain dominant.' },
        { tone: 'blue',  icon: '\u{1F6AA}', head: 'Contestability is weaker', body: 'The entry threat is limited.' },
        { tone: 'purple', icon: '\u{1F440}', head: 'Interdependence remains strong', body: 'The same firms keep watching one another.' }
      ],

      pairLabel: 'A QUICK EVALUATION',
      pairEmoji: '\u{2696}\u{FE0F}',
      left: {
        tone: 'green',
        icon: '\u{2705}',
        iconStyle: 'circle',
        label: 'Possible strengths',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Large firms may exploit scale.</li><li>R&D can be funded from strong profits.</li></ul>'
      },
      right: {
        tone: 'rose',
        icon: '\u{274C}',
        iconStyle: 'circle',
        label: 'Possible weaknesses',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Less pressure from entry.</li><li>Consumers may face higher prices or less choice.</li></ul>'
      },

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'High concentration does not automatically mean collusion — but it does make strategic interaction more important.' },

      conclusion: { title: 'Big idea', text: 'Oligopoly persists when entry is difficult and the market keeps tilting towards the established firms.' },
      examEdge: 'If asked why oligopoly exists, explain the barrier and then link it to few firms and market power.'
    },

    /* ====================================================================
       CARD 6 – The whole story
       Pattern: Sequential flow (synthesis) + tile grids + how-to-write
       ==================================================================== */
    {
      id: 'oli-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole story',
      lede: 'Strong answers define oligopoly, explain interdependence, and then judge the outcomes for firms and consumers.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Oligopoly is neither fully competitive nor fully monopolistic — outcomes depend on how the few dominant firms behave.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'blue',   icon: '\u{1F465}', title: 'Few large firms',     sub: 'Concentration.' },
        { tone: 'amber',  icon: '\u{1F512}', title: 'Barriers to entry',   sub: 'Rivals kept out.' },
        { tone: 'purple', icon: '\u{1F517}', title: 'Interdependence',     sub: 'Firms watch reactions.' },
        { tone: 'blue',   icon: '\u{265E}\u{FE0F}', title: 'Price rigidity or non-price competition', sub: 'Strategic behaviour.' },
        { tone: 'amber',  icon: '\u{1F4C8}', title: 'Possible outcomes',   sub: 'Profits, innovation, or weaker consumer pressure.' },
        { tone: 'green',  icon: '\u{2696}\u{FE0F}', title: 'Final judgement', sub: 'Context matters.' }
      ],

      causesLabel: 'COMMON EVALUATION POINTS',
      causesEmoji: '\u{2696}\u{FE0F}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F4B7}', head: 'Prices and profits', body: 'Can be above competitive levels.' },
        { tone: 'purple', icon: '\u{1F52C}', head: 'Innovation',         body: 'Large firms may spend heavily on R&D.' },
        { tone: 'green',  icon: '\u{1F6CD}\u{FE0F}', head: 'Choice and branding', body: 'Consumers may gain variety.' },
        { tone: 'amber',  icon: '\u{1F3DB}\u{FE0F}', head: 'Efficiency and power', body: 'Market power can also weaken the pressure to be efficient.' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '\u{26A0}\u{FE0F}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '\u{274C}', head: 'Do not define it as monopoly', body: 'Oligopoly has a few firms, not one.' },
        { tone: 'rose', icon: '\u{274C}', head: 'Do not forget interdependence', body: 'It is the defining feature.' },
        { tone: 'rose', icon: '\u{274C}', head: 'Do not jump straight to collusion', body: 'That is a related topic studied separately.' }
      ],

      flow2Title: 'HOW TO WRITE IT',
      flow2Emoji: '\u{270D}\u{FE0F}',
      flow2Sep: '\u{2192}',
      flow2: [
        { tone: 'purple', icon: '1', title: 'Define',     sub: 'Few large firms and interdependence.' },
        { tone: 'purple', icon: '2', title: 'Explain',    sub: 'Use features or a diagram such as the kinked demand curve.' },
        { tone: 'purple', icon: '3', title: 'Assess',     sub: 'Weigh non-price competition, entry barriers and market power.' },
        { tone: 'purple', icon: '4', title: 'Judge',      sub: 'Say whether the outcome is good or bad for consumers and firms in context.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Collusion & cartels and game theory build on this foundation — they are studied as their own separate topics.' },

      conclusion: { title: 'Big idea', text: 'Oligopoly is the market structure of strategic rivalry — a few powerful firms competing while constantly reacting to one another.' },
      examEdge: 'A top answer defines oligopoly, explains interdependence clearly, and then <strong>evaluates outcomes</strong> rather than assuming they are always good or bad.'
    }
  ]
};
