/* ============================================================
   ECONOS – Monopoly (Edexcel A 3.4.5)
   9 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.

   Card patterns (no two consecutive repeat; one dominant tile-grid):
     1 Hub-and-spoke (monopoly firm + 6 feature spokes)
     2 Tile grid (6 barriers) + "how barriers create power" flow
     3 Interactive diagram (profit-max: MR=MC → Qm → Pm → profit)
     4 Interactive diagram (welfare: monopoly vs competitive + DWL)
     5 Hub (one firm → two markets) + conditions + who-gains pair
     6 Interactive 3-panel diagram (price discrimination)
     7 Evidence-then-verdict (4 stakeholder lenses + SR vs LR)
     8 Interactive diagram (natural monopoly + regulation)
     9 Evidence-then-verdict (synthesis + how-to-write)

   New visuals (js/icons.js):
     - monopolyFeaturesHub  (Card 1 hub)
     - monopolyProfitMax    (Card 3 interactive, mp-1..mp-4)
     - monopolyWelfare      (Card 4 interactive, mw-1..mw-3)
     - priceDiscHub         (Card 5 hub)
     - priceDiscPanels      (Card 6 interactive 3-panel, pd-1..pd-3)
     - naturalMonopoly      (Card 8 interactive, nm-1..nm-3)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'monopoly',
  topicNum: '3.4.5',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Monopoly',
  estTime: '22 min',
  goal: 'Define monopoly and the sources of monopoly power, build and read the monopoly diagram, analyse price discrimination and natural monopoly, and evaluate the costs and benefits',

  intro: {
    heroKey: 'heroFirm',
    summary: 'A monopoly is a market dominated by a single seller protected by strong barriers to entry. Because rivals cannot easily challenge it, the firm is a price maker: it chooses output where MC = MR and reads its price up on the demand curve. This deck builds the monopoly diagram, uses it to judge output and welfare, then explores two important extensions — price discrimination and natural monopoly — before weighing the costs and benefits for every stakeholder.',
    doInThis: 'Define monopoly and explain where monopoly power comes from. Build the monopoly diagram and use it to find price, output and profit, then to identify the deadweight loss. Explain third-degree price discrimination and natural monopoly with their diagrams. Finally, evaluate monopoly using efficiency and context — without assuming it is always bad.',
    outcomes: [
      'Define monopoly and identify the sources of monopoly power',
      'Build the monopoly diagram and find price, output and profit',
      'Analyse output, welfare and the deadweight loss',
      'Explain third-degree price discrimination and its diagrams',
      'Explain natural monopoly and the case for regulation',
      'Evaluate the costs and benefits of monopoly in context'
    ],
    tip: 'The phrase to reach for is price maker — a monopolist sets price because no rival can easily challenge it.',
    stages: [
      { num: 1, name: 'Learn',  sub: '9 cards \xb7 22 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Monopoly: the big picture
       Pattern: Hub-and-spoke (6 feature spokes) + why-it-matters + story flow
       ==================================================================== */
    {
      id: 'mon-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 9',
      title: 'Monopoly — the big picture',
      lede: 'A monopoly is a market dominated by a single seller with strong barriers to entry and significant market power.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Monopoly power means the firm is a <strong>price maker</strong>, not a price taker.' },

      visualKey: 'monopolyFeaturesHub',
      visualLabel: 'WHAT A MONOPOLY IS',
      visualEmoji: '\u{1F9E9}',

      causesFirst: true,
      causesLabel: 'WHY IT MATTERS',
      causesEmoji: '\u{1F4A1}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F3F7}️', head: 'Pricing',    body: 'Can raise price above the competitive level.' },
        { tone: 'amber',  icon: '\u{1F4E6}', head: 'Output',     body: 'May restrict output to protect profit.' },
        { tone: 'purple', icon: '\u{1F52C}', head: 'Innovation', body: 'Profit can fund research and development.' },
        { tone: 'green',  icon: '⚖️', head: 'Welfare',    body: 'Effects on consumers depend on context.' }
      ],

      flowTitle: 'THE STORY AHEAD',
      flowEmoji: '\u{1F5FA}️',
      flow: [
        { tone: 'green',  icon: '\u{1F3DB}️', title: 'Characteristics', sub: 'What defines a monopoly.' },
        { tone: 'blue',   icon: '\u{1F4C8}', title: 'Profit max',      sub: 'Price, output and profit.' },
        { tone: 'purple', icon: '\u{1F3AF}', title: 'Price discrimination', sub: 'Different prices by group.' },
        { tone: 'amber',  icon: '\u{1F3ED}', title: 'Natural monopoly', sub: 'When one firm is cheapest.' },
        { tone: 'green',  icon: '\u{1F50D}', title: 'Evaluation',      sub: 'Costs and benefits.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Pure monopoly is rare — many real markets are highly concentrated rather than literal single-seller monopolies.' },

      conclusion: { title: 'Big idea', text: 'Monopoly is really about market power: the firm can set its price because no rival can easily challenge it.' },
      examEdge: 'Start by defining monopoly, then distinguish <strong>market power</strong> (common) from a <strong>pure single-seller monopoly</strong> (rare).'
    },

    /* ====================================================================
       CARD 2 – Where monopoly power comes from
       Pattern: Tile grid (6 barriers) + "how barriers create power" flow
       ==================================================================== */
    {
      id: 'mon-power-sources',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 9',
      title: 'Where monopoly power comes from',
      lede: 'Monopoly power usually rests on barriers to entry that protect the incumbent from competition.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Strong barriers let a dominant firm <strong>keep rivals out and keep profits in</strong>.' },

      causesFirst: true,
      causesLabel: 'THE MAIN BARRIERS',
      causesEmoji: '\u{1F6E1}️',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Economies of scale',    body: 'Large firms can undercut smaller entrants.' },
        { tone: 'purple', icon: '\u{1F4DC}', head: 'Patents and legal protection', body: 'Law can block rivals from copying.' },
        { tone: 'green',  icon: '\u{1F4E3}', head: 'Brand loyalty and advertising', body: 'Strong reputation makes switching unlikely.' },
        { tone: 'amber',  icon: '\u{1F6E2}️', head: 'Control of key resources', body: 'Ownership of an essential input or supply.' },
        { tone: 'rose',   icon: '\u{1F578}️', head: 'Network effects', body: 'The product is more valuable as more people use it.' },
        { tone: 'slate',  icon: '♟️', head: 'Strategic behaviour', body: 'Predatory or limit pricing can deter entry.' }
      ],

      flowTitle: 'HOW BARRIERS CREATE POWER',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'purple', icon: '\u{1F6A7}', title: 'Barriers to entry', sub: 'Real obstacles for new firms.' },
        { tone: 'amber',  icon: '\u{1F465}', title: 'Few rivals',        sub: 'Entry is deterred.' },
        { tone: 'blue',   icon: '\u{1F4C9}', title: 'Weak competition',  sub: 'Little pressure on price.' },
        { tone: 'green',  icon: '\u{1F3F7}️', title: 'Price maker',  sub: 'The firm sets its own price.' },
        { tone: 'green',  icon: '\u{1F4B0}', title: 'Abnormal profit',   sub: 'Can persist into the long run.' }
      ],

      causes3Label: 'NOT ALL MONOPOLY POWER LOOKS THE SAME',
      causes3Emoji: '\u{1F50D}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'purple', icon: '\u{1F451}', head: 'Pure monopoly',   body: 'A single seller — rare in reality.' },
        { tone: 'blue',   icon: '\u{1F3E2}', head: 'Dominant firm',   body: 'A very high share alongside small rivals.' },
        { tone: 'amber',  icon: '\u{1F6AA}', head: 'Contestable threat', body: 'If entry is easy, power is limited even with a high share.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A high market share alone is not monopoly power — what matters is whether barriers keep that share protected.' },

      conclusion: { title: 'Big idea', text: 'Barriers to entry are the source of monopoly power: no barriers, no lasting power.' },
      examEdge: 'When explaining monopoly, name the <strong>barrier</strong> and link it to weaker competition, pricing power and profit.'
    },

    /* ====================================================================
       CARD 3 – Profit maximising equilibrium
       Pattern: Interactive diagram (monopolyProfitMax, mp-1..mp-4)
       ==================================================================== */
    {
      id: 'mon-profit-max',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 9',
      title: 'Profit maximising equilibrium',
      lede: 'A monopoly maximises profit where marginal cost equals marginal revenue, then charges the price consumers will pay on the demand curve.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Use <strong>MC = MR</strong> to find output — then go up to AR to find the price.' },

      interactiveDiagram: {
        svgKey: 'monopolyProfitMax',
        label: 'THE CORE DIAGRAM — build it step by step',
        emoji: '\u{1F4C8}',
        wide: true,
        layers: ['mp-1', 'mp-2', 'mp-3', 'mp-4'],
        views: [
          {
            label: 'Find MR = MC',
            tone: 'blue',
            head: 'Step 1 — find MR = MC',
            body: 'The profit-maximising output is where the <strong>MC curve cuts MR</strong> from below. This is the firm’s key decision point.',
            show: ['mp-1']
          },
          {
            label: 'Drop to Qm',
            tone: 'purple',
            head: 'Step 2 — read the output',
            body: 'Drop straight down to the output axis to read the monopolist’s output, <strong>Qm</strong>. It is lower than a competitive market would produce.',
            show: ['mp-1', 'mp-2']
          },
          {
            label: 'Go up to AR for Pm',
            tone: 'green',
            head: 'Step 3 — read the price',
            body: 'Go up from Qm to the <strong>demand curve (AR)</strong> and across to the price axis to read <strong>Pm</strong> — set above marginal cost.',
            show: ['mp-1', 'mp-2', 'mp-3']
          },
          {
            label: 'Compare price and cost',
            tone: 'amber',
            head: 'Step 4 — the supernormal profit',
            body: 'Read AC at Qm. The gap between <strong>Pm and AC</strong> is the profit per unit; over Qm units it is the shaded <strong>supernormal profit</strong> rectangle.',
            analysis: 'Because barriers block entry, this profit is not competed away — it can persist into the long run. That is the central difference from perfect competition.',
            show: ['mp-1', 'mp-2', 'mp-3', 'mp-4']
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'WHAT THE DIAGRAM SHOWS',
      causesEmoji: '\u{1F4CC}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'rose',   icon: '\u{1F4C9}', head: 'Restricted output', body: 'The monopolist produces less than a competitive market would.' },
        { tone: 'amber',  icon: '\u{1F4C8}', head: 'Higher price',      body: 'Price is set above marginal cost (P &gt; MC).' },
        { tone: 'green',  icon: '\u{1F4B0}', head: 'Persistent profit', body: 'Barriers to entry keep rivals out, so profit can last.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A monopolist does not have a supply curve — output and price come straight from MC = MR and the demand curve.' },

      conclusion: { title: 'Big idea', text: 'The monopolist chooses output where MC = MR, then reads the price up on demand.' },
      examEdge: 'Always show <strong>MC = MR first</strong> for output, then go up to AR for price — and label Pm, Qm and the profit clearly.'
    },

    /* ====================================================================
       CARD 4 – Monopoly, output and welfare
       Pattern: Interactive diagram (monopolyWelfare) + efficiency + gains/losses
       ==================================================================== */
    {
      id: 'mon-welfare',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 9',
      title: 'Monopoly, output and welfare',
      lede: 'A monopoly may restrict output and raise price, creating inefficiency — but it may also fund innovation and reap scale economies.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The core question: does market power <strong>hurt consumers more</strong> than any efficiency gains help them?' },

      interactiveDiagram: {
        svgKey: 'monopolyWelfare',
        label: 'THE WELFARE DIAGRAM — monopoly vs competition',
        emoji: '⚖️',
        wide: true,
        layers: ['mw-1', 'mw-2', 'mw-3'],
        views: [
          {
            label: 'The monopoly outcome',
            tone: 'green',
            head: 'The monopoly outcome',
            body: 'The monopolist restricts output to <strong>Qm</strong> and charges <strong>Pm</strong>, which is above marginal cost.',
            show: ['mw-1']
          },
          {
            label: 'The competitive benchmark',
            tone: 'blue',
            head: 'The competitive benchmark',
            body: 'A competitive market would produce where <strong>P = MC</strong> (Qc): a higher output at a lower price, Pc. This is the allocatively efficient point.',
            show: ['mw-1', 'mw-2']
          },
          {
            label: 'The deadweight loss',
            tone: 'rose',
            head: 'The deadweight loss',
            body: 'Between Qm and Qc, units worth more to consumers than they cost to make go <strong>unproduced</strong>. That lost welfare is the deadweight loss triangle.',
            analysis: 'This is the efficiency case against monopoly: output is restricted below the social optimum, transferring surplus to the firm and destroying some of it entirely.',
            show: ['mw-1', 'mw-2', 'mw-3']
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'THREE EFFICIENCY QUESTIONS',
      causesEmoji: '\u{1F4CA}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'rose',   icon: '\u{1F3AF}', head: 'Allocative', body: 'P &gt; MC, so the firm under-produces — it fails allocative efficiency.' },
        { tone: 'amber',  icon: '⚙️', head: 'Productive', body: 'Output is not at minimum AC, so it may fail productive efficiency.' },
        { tone: 'green',  icon: '\u{1F4A1}', head: 'Dynamic',    body: 'Profits may fund R&D and innovation — it can pass dynamic efficiency.' }
      ],

      pairLabel: 'Potential gains vs potential losses',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '\u{1F44D}',
        iconStyle: 'circle',
        label: 'Potential gains',
        points: ['Economies of scale lower average cost', 'Profits can fund R&D and innovation', 'Scale supports investment and exports']
      },
      right: {
        tone: 'rose',
        icon: '⚠️',
        iconStyle: 'circle',
        label: 'Potential losses',
        points: ['Higher prices for consumers', 'Restricted output and deadweight loss', 'X-inefficiency from weak competition']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The deadweight loss is the welfare case against monopoly — but a monopolist with falling costs could still charge less than many small firms.' },

      conclusion: { title: 'Big idea', text: 'Monopoly is not automatically good or bad — the verdict rests on efficiency and context.' },
      examEdge: 'Use <strong>allocative, productive and dynamic efficiency</strong> to structure the judgement, then weigh them against context.'
    },

    /* ====================================================================
       CARD 5 – Third degree price discrimination
       Pattern: Hub (one firm → two markets) + conditions + who-gains pair
       ==================================================================== */
    {
      id: 'mon-price-discrimination',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 9',
      title: 'Third degree price discrimination',
      lede: 'A monopolist can charge different prices to different groups when their demand elasticities differ.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Charge a <strong>higher price where demand is less elastic</strong> and a lower price where demand is more elastic.' },

      visualKey: 'priceDiscHub',
      visualLabel: 'THE CORE IDEA',
      visualEmoji: '\u{1F3AF}',
      visualCaption: 'The same product, sold to two groups at different prices — because their demand differs.',

      causesFirst: true,
      causesLabel: 'THE FOUR CONDITIONS',
      causesEmoji: '✅',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'purple', icon: '\u{1F3F7}️', head: 'Market power',    body: 'The firm must be a price maker.' },
        { tone: 'blue',   icon: '✂️', head: 'Separable markets', body: 'Groups must be identifiable and kept apart.' },
        { tone: 'amber',  icon: '\u{1F4CA}', head: 'Different elasticities', body: 'Demand must differ between the groups.' },
        { tone: 'rose',   icon: '\u{1F6AB}', head: 'Prevent resale',   body: 'No arbitrage — cheap buyers can’t resell to others.' }
      ],

      causes2Label: 'COMMON EXAMPLES',
      causes2Emoji: '\u{1F30D}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'green',  icon: '\u{1F686}', head: 'Rail tickets',   body: 'Peak vs off-peak fares.' },
        { tone: 'blue',   icon: '\u{1F3AC}', head: 'Cinema tickets', body: 'Student, adult and senior prices.' },
        { tone: 'purple', icon: '✈️', head: 'Airline seats', body: 'Higher fares at busy times.' },
        { tone: 'amber',  icon: '\u{1F393}', head: 'Student deals',  body: 'Discounts on software and travel.' }
      ],

      pairLabel: 'Consumers vs the firm',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue',
        icon: '\u{1F465}',
        iconStyle: 'circle',
        label: 'Consumers',
        points: ['Some groups pay less than a single price', 'But others pay more', 'Access can widen for low-value users']
      },
      right: {
        tone: 'green',
        icon: '\u{1F3E2}',
        iconStyle: 'circle',
        label: 'The firm',
        points: ['Captures more consumer surplus as profit', 'Higher total revenue', 'Profit can fund investment']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Some consumers may be better off — so whether price discrimination is “unfair” is a value judgement, not a fact.' },

      conclusion: { title: 'Big idea', text: 'Price discrimination splits one market into several to capture more consumer surplus as profit.' },
      examEdge: 'State the <strong>conditions first</strong>, then explain how the firm sets a higher price in the less elastic market.'
    },

    /* ====================================================================
       CARD 6 – Third degree price discrimination — diagrams
       Pattern: Interactive 3-panel diagram (priceDiscPanels, pd-1..pd-3)
       ==================================================================== */
    {
      id: 'mon-price-discrimination-diagrams',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 9',
      title: 'Price discrimination — the diagrams',
      lede: 'The monopolist allocates output across markets so that marginal revenue is equalised, then charges each market its own price.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The more <strong>inelastic</strong> market ends up with the higher price.' },

      interactiveDiagram: {
        svgKey: 'priceDiscPanels',
        label: 'THE DIAGRAM STORY — three panels, one MC',
        emoji: '\u{1F4CA}',
        wide: true,
        maxWidth: '760px',
        layers: ['pd-1', 'pd-2', 'pd-3'],
        views: [
          {
            label: 'The combined market',
            tone: 'blue',
            head: 'Panel 1 — the combined market',
            body: 'Across all buyers, the firm sets total <strong>MR = MC</strong>. That fixes the marginal cost level it will charge in every sub-market.',
            show: ['pd-1']
          },
          {
            label: 'Market A — inelastic',
            tone: 'amber',
            head: 'Panel 2 — the inelastic market',
            body: 'In Market A, set <strong>MR_A = MC</strong>. The steep (inelastic) demand gives a <strong>high price, P_A</strong>.',
            show: ['pd-1', 'pd-2']
          },
          {
            label: 'Market B — elastic',
            tone: 'green',
            head: 'Panel 3 — the elastic market',
            body: 'In Market B, set <strong>MR_B = MC</strong>. The flat (elastic) demand gives a <strong>low price, P_B</strong> — so P_A &gt; P_B.',
            analysis: 'The same product carries the same MC, yet the price differs purely because elasticity differs. The firm charges more to the group least able to walk away.',
            show: ['pd-1', 'pd-2', 'pd-3']
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'HOW TO READ IT',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '✂️', head: 'Split the markets', body: 'Draw a panel for each group plus the total.' },
        { tone: 'purple', icon: '\u{1F4CC}', head: 'Equalise MR = MC', body: 'The same MC level applies in every market.' },
        { tone: 'amber',  icon: '\u{1F4C8}', head: 'Read each price',  body: 'Go up to each market’s own AR for its price.' },
        { tone: 'green',  icon: '⚖️', head: 'Compare prices', body: 'The inelastic market pays more than the elastic one.' }
      ],

      causes3Label: 'WHAT IT IMPLIES',
      causes3Emoji: '\u{1F4A1}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'rose',   icon: '\u{1F4C8}', head: 'Inelastic pays more', body: 'Less able to switch → charged a premium.' },
        { tone: 'green',  icon: '\u{1F4C9}', head: 'Elastic pays less',   body: 'Price-sensitive buyers get a lower price.' },
        { tone: 'blue',   icon: '\u{1F465}', head: 'Wider access',        body: 'Low-value users may still be served.' },
        { tone: 'amber',  icon: '\u{1F4B0}', head: 'Higher total profit', body: 'Captures more of the consumer surplus.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The markets must be kept separate — if cheap buyers could resell to expensive ones, the strategy collapses.' },

      conclusion: { title: 'Big idea', text: 'Same product, same MC — but different elasticities give different prices.' },
      examEdge: 'Draw separate market panels sharing <strong>one MC level</strong>, and show each price coming from that market’s own demand.'
    },

    /* ====================================================================
       CARD 7 – Costs and benefits of monopoly
       Pattern: Evidence-then-verdict (4 stakeholder lenses + SR vs LR)
       ==================================================================== */
    {
      id: 'mon-costs-benefits',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 7 of 9',
      title: 'Costs and benefits of monopoly',
      lede: 'Monopoly affects firms, workers and suppliers as well as consumers — and who gains or loses depends on how market power is used.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Top evaluation weighs <strong>stakeholder effects</strong>, not just price and output.' },

      causesFirst: true,
      causesLabel: 'FOUR STAKEHOLDER LENSES',
      causesEmoji: '\u{1F465}',
      causesStyle: 'numbered-rows',
      causes: [
        { tone: 'blue',   icon: '\u{1F3E2}', head: 'Firms', body: '<strong>✓ Benefits:</strong> abnormal profit, scale economies and funds for R&D. &nbsp; <strong>✗ Costs:</strong> reduced pressure to innovate and a risk of complacency.' },
        { tone: 'green',  icon: '\u{1F6D2}', head: 'Consumers', body: '<strong>✓ Benefits:</strong> reliable supply, possible innovation, and lower prices where scale economies are passed on. &nbsp; <strong>✗ Costs:</strong> higher prices, less choice and lower quality.' },
        { tone: 'amber',  icon: '\u{1F477}', head: 'Employees', body: '<strong>✓ Benefits:</strong> stable jobs and possibly higher pay funded by profits. &nbsp; <strong>✗ Costs:</strong> weaker bargaining power, and inefficiency may pressure jobs over time.' },
        { tone: 'purple', icon: '\u{1F69A}', head: 'Suppliers', body: '<strong>✓ Benefits:</strong> large, predictable orders. &nbsp; <strong>✗ Costs:</strong> a dominant buyer can squeeze supplier prices and margins.' }
      ],

      pairLabel: 'Short run vs long run',
      pairEmoji: '⏱️',
      left: {
        tone: 'amber',
        icon: '⏱️',
        iconStyle: 'circle',
        label: 'Short run',
        points: ['Monopoly may exploit its power', 'Higher prices and restricted output', 'Surplus transferred to the firm']
      },
      right: {
        tone: 'green',
        icon: '\u{1F501}',
        iconStyle: 'circle',
        label: 'Long run',
        points: ['Innovation and scale gains may emerge', 'Or entry and regulation erode the power', 'Contestability can discipline behaviour']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A monopoly that passes scale economies on as lower prices can leave consumers better off than fragmented competition would.' },

      conclusion: { title: 'Big idea', text: 'The best judgement depends on which stakeholder matters most and whether the gains are shared.' },
      examEdge: 'Use context — <strong>utilities, pharma and digital platforms</strong> can lead to very different verdicts.'
    },

    /* ====================================================================
       CARD 8 – Natural monopoly
       Pattern: Interactive diagram (naturalMonopoly, nm-1..nm-3)
       ==================================================================== */
    {
      id: 'mon-natural-monopoly',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 8 of 9',
      title: 'Natural monopoly',
      lede: 'A natural monopoly exists when one firm can supply the whole market at a lower average cost than several smaller rivals could.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Very high fixed costs and <strong>falling average costs</strong> make one supplier cheaper than many.' },

      interactiveDiagram: {
        svgKey: 'naturalMonopoly',
        label: 'THE DIAGRAM — falling cost over the whole market',
        emoji: '\u{1F3ED}',
        wide: true,
        layers: ['nm-1', 'nm-2', 'nm-3', 'nm-4'],
        views: [
          {
            label: 'Economies of scale',
            tone: 'purple',
            head: 'Step 1 — economies of scale',
            body: 'AC <strong>falls across the whole market</strong> and MC sits below it. Splitting demand between several firms would push each up its cost curve, raising unit costs — so one firm is cheapest.',
            show: ['nm-1']
          },
          {
            label: 'Unregulated outcome',
            tone: 'green',
            head: 'Step 2 — the unregulated outcome',
            body: 'Left alone, the firm profit-maximises at <strong>MR = MC</strong>: a high price P₁ and a restricted output Q₁, earning supernormal profit.',
            show: ['nm-1', 'nm-2']
          },
          {
            label: 'P = MC (allocative)',
            tone: 'rose',
            head: 'Step 3 — force P = MC (allocative efficiency)',
            body: 'A regulator could force <strong>P = MC</strong> at Q₃ — allocatively efficient. But because AC is still falling, <strong>P &lt; AC here, so the firm makes a loss</strong> and needs a subsidy to survive.',
            show: ['nm-1', 'nm-2', 'nm-3']
          },
          {
            label: 'P = AC (break-even)',
            tone: 'blue',
            head: 'Step 4 — average-cost pricing (P = AC)',
            body: 'Average-cost pricing sets <strong>P = AC</strong> at Q₂ — the firm just breaks even (a fair return), no subsidy needed. Output is higher and price lower than unregulated, but still <strong>P &gt; MC</strong>, so not fully allocatively efficient.',
            analysis: 'This is the heart of utility regulation: because AC is still falling, marginal-cost pricing cannot also cover average cost. Regulators trade allocative efficiency (P=MC, needs a subsidy) against financial viability (P=AC, breaks even).',
            show: ['nm-1', 'nm-2', 'nm-3', 'nm-4']
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'WHY IT HAPPENS',
      causesEmoji: '❓',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F3D7}️', head: 'High fixed costs', body: 'Huge upfront infrastructure spending.' },
        { tone: 'purple', icon: '\u{1F4C8}', head: 'Scale economies', body: 'Average cost keeps falling as output grows.' },
        { tone: 'green',  icon: '\u{1F4C9}', head: 'Falling AC',      body: 'Cost falls over the whole relevant range.' },
        { tone: 'amber',  icon: '\u{1F3ED}', head: 'One supplier',    body: 'A single firm can serve the market most cheaply.' }
      ],

      causes3Label: 'THE REGULATION TOOLKIT',
      causes3Emoji: '\u{1F6E0}️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'blue',   icon: '\u{1F4CF}', head: 'Price cap', body: 'RPI − X caps to mimic competition.' },
        { tone: 'green',  icon: '\u{1F4B7}', head: 'Subsidy',   body: 'Fund the loss to allow P = MC.' },
        { tone: 'purple', icon: '\u{1F3DB}️', head: 'Public ownership', body: 'Run in the public interest.' },
        { tone: 'amber',  icon: '\u{1F441}️', head: 'Regulation', body: 'A watchdog oversees price and quality.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Water, rail track and the electricity grid are classic natural monopolies — duplicating the network would be hugely wasteful.' },

      conclusion: { title: 'Big idea', text: 'When AC keeps falling, one firm is the most efficient supplier — but it must be regulated to protect consumers.' },
      examEdge: 'Separate the <strong>reason</strong> it is natural (the cost curve) from the <strong>response</strong> (regulation), and link them.'
    },

    /* ====================================================================
       CARD 9 – The whole monopoly story
       Pattern: Evidence-then-verdict (synthesis + how-to-write)
       ==================================================================== */
    {
      id: 'mon-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 9 of 9',
      title: 'The whole monopoly story',
      lede: 'Strong monopoly answers define the market, explain the source of power, analyse the diagram, and then judge the impact on different groups.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Monopoly is successful only if any <strong>efficiency gains outweigh</strong> the risks of market power.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'amber',  icon: '\u{1F6E1}️', title: 'Barriers',  sub: 'Protect the incumbent.' },
        { tone: 'purple', icon: '\u{1F451}', title: 'Market power', sub: 'The firm is a price maker.' },
        { tone: 'blue',   icon: '\u{1F4C8}', title: 'Profit max',  sub: 'MC = MR, price on AR.' },
        { tone: 'green',  icon: '\u{1F3AF}', title: 'Price discrimination', sub: 'Price by elasticity.' },
        { tone: 'amber',  icon: '\u{1F3ED}', title: 'Natural monopoly', sub: 'One firm, lowest cost.' },
        { tone: 'green',  icon: '\u{1F50D}', title: 'Evaluation',  sub: 'Judge in context.' }
      ],

      causesLabel: 'WHY MONOPOLY CAN HELP',
      causesEmoji: '\u{1F44D}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '\u{1F4C8}', head: 'Economies of scale', body: 'Lower average cost can mean lower prices.' },
        { tone: 'green', icon: '\u{1F52C}', head: 'R&D and innovation',  body: 'Profit can fund dynamic efficiency.' },
        { tone: 'green', icon: '\u{1F4C5}', head: 'Stable investment',   body: 'Predictable returns support long-term projects.' }
      ],

      causes2Label: 'WHY IT CAN HARM',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'rose', icon: '\u{1F4B7}', head: 'Higher prices',     body: 'Above the competitive level.' },
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Restricted output', body: 'Less is produced than is socially optimal.' },
        { tone: 'rose', icon: '\u{1F3AF}', head: 'Allocative loss',   body: 'P &gt; MC creates a deadweight loss.' },
        { tone: 'rose', icon: '\u{1F634}', head: 'Weak competition',  body: 'X-inefficiency and complacency.' }
      ],

      causes3Label: 'HOW TO WRITE IT',
      causes3Emoji: '✍️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'purple', icon: '\u{1F4C4}', head: '1 · Define the market', body: 'Single seller, barriers, price maker.' },
        { tone: 'purple', icon: '\u{1F4C8}', head: '2 · Analyse the diagram', body: 'MC = MR, price, profit, deadweight loss.' },
        { tone: 'purple', icon: '\u{1F30D}', head: '3 · Apply context', body: 'Utility, pharma or digital platform.' },
        { tone: 'purple', icon: '⚖️', head: '4 · Weigh and judge', body: 'Efficiency and stakeholders, in context.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The strongest answers anchor the diagram and the context to a clear evaluation — firms, workers and suppliers all matter.' },

      conclusion: { title: 'Big idea', text: 'Monopoly turns market power into a question: do the efficiency gains outweigh the costs to consumers?' },
      examEdge: 'Anchor the <strong>diagram and context</strong> to a clear judgement, and remember monopoly affects every stakeholder.'
    }
  ]
};
