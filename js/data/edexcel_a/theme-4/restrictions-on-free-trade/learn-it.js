/* ============================================================
   ECONOS – Restrictions on Free Trade (Edexcel A 4.1.6)
   7 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   Protectionism: why governments restrict trade, the four tools
   (tariffs, quotas, subsidies, non-tariff barriers) analysed on
   proper supply-and-demand welfare diagrams, then who gains and
   loses, and a balanced whole-story judgement.

   Card patterns (no two consecutive repeat):
     1 Flow overview + four-tools grid + who-is-affected
     2 Tile grid (six reasons) + political-logic flow + evaluation
     3 Interactive diagram (tariff, 4-step reveal) + how-to-read + who
     4 Interactive diagram (quota, 3-step) + tariff-vs-quota + why
     5 Interactive diagram (subsidy shift) + NTB grid + trade-offs
     6 Evidence (stakeholder scorecard + wider effects + equality)
     7 Evidence-then-verdict (chain + evaluation + mistakes + how-to)

   New chart specs (js/charts/specs/, bound in icons.js):
     - tariffDiagramInteractive  (Pw → Pt, revenue rectangle, DWL triangles)
     - quotaDiagramInteractive   (S + quota, price rises to Pq, quota rents)
     - subsidyTradeInteractive   (S₁ → S₂ shift, output up, imports displaced)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'restrictions-on-free-trade',
  topicNum: '4.1.6',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Restrictions on Free Trade',
  estTime: '20 min',
  goal: 'Explain why governments restrict trade, analyse tariffs, quotas, subsidies and non-tariff barriers on supply-and-demand diagrams, and evaluate the effects on consumers, producers, government and the wider economy',

  intro: {
    heroKey: 'heroTradeRestrictions',
    summary: 'Free trade raises total welfare, yet governments routinely restrict it. This topic explains why — infant industries, jobs, dumping, strategic sectors, the balance of payments and revenue — and then works through the four tools of protection on proper diagrams. A tariff is a tax on imports that raises price, lifts domestic output, cuts imports and earns revenue, but creates a deadweight welfare loss. A quota fixes the quantity of imports so the price adjusts upward and licence-holders earn rents. A subsidy shifts domestic supply right, raising output and displacing imports at the taxpayer’s expense. Non-tariff barriers protect quietly through rules and paperwork. The deck closes by mapping the winners and losers and building a balanced judgement.',
    doInThis: 'Set out the four tools of protection and who they affect. Explain the main reasons governments restrict trade. Analyse a tariff, a quota and a subsidy on supply-and-demand diagrams, reading off price, output, imports, revenue and welfare loss. Identify non-tariff barriers. Map the winners and losers, then build a balanced evaluation of protectionism as a trade-off.',
    outcomes: [
      'Identify the four tools of protection',
      'Explain why governments restrict trade',
      'Analyse a tariff on a diagram',
      'Analyse a quota on a diagram',
      'Analyse subsidies and non-tariff barriers',
      'Evaluate who gains and who loses'
    ],
    tip: 'The phrase to anchor on is welfare trade-off — protection defends some groups but usually reduces total efficiency.',
    stages: [
      { num: 1, name: 'Learn',  sub: '7 cards \xb7 20 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – The big picture
       ==================================================================== */
    {
      id: 'roft-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 7',
      title: 'Restrictions on free trade — the big picture',
      lede: 'Governments sometimes limit free trade to protect domestic interests — but every barrier creates trade-offs.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Protectionism raises the cost of foreign goods or limits their entry to protect <strong>domestic producers or wider national interests</strong>.' },

      flowTitle: 'THE CORE IDEA',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F30D}', title: 'Free trade' },
        { tone: 'amber',  icon: '\u{1F3DB}️', title: 'Government concern' },
        { tone: 'purple', icon: '\u{1F6A7}', title: 'Trade barrier' },
        { tone: 'blue',   icon: '\u{1F6D2}', title: 'Market changes' },
        { tone: 'green',  icon: '\u{1F465}', title: 'Winners & losers' }
      ],

      causesLabel: 'THE FOUR MAIN TOOLS',
      causesEmoji: '\u{1F9F0}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F3F7}️', head: 'Tariffs', body: 'A tax on imports.' },
        { tone: 'amber',  icon: '\u{1F4CA}', head: 'Quotas', body: 'A limit on import quantity.' },
        { tone: 'purple', icon: '\u{1F3ED}', head: 'Subsidies', body: 'Support for domestic firms.' },
        { tone: 'blue',   icon: '\u{1F4CB}', head: 'Non-tariff barriers', body: 'Rules, standards, paperwork and licences.' }
      ],

      causes2Label: 'WHO IS AFFECTED?',
      causes2Emoji: '\u{1F465}',
      causes2Style: 'icon-top',
      causes2Cols: 2,
      causes2: [
        { tone: 'green',  icon: '\u{1F6D2}', head: 'Consumers', body: 'Usually higher prices and less choice.' },
        { tone: 'purple', icon: '\u{1F4BC}', head: 'Producers', body: 'Domestic firms may gain protection.' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: 'Govt.', body: 'May gain revenue or face subsidy costs.' },
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Living standards', body: 'Can rise or fall depending on long-run efficiency.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Restrictions on free trade are also called <strong>protectionist policies</strong>.' },

      conclusion: { title: 'Big idea', text: 'Protection can defend domestic interests in the short run, but it usually reduces the gains from free trade.' },
      examEdge: 'Start by naming the barrier, then explain how it changes <strong>price, imports, output, and stakeholder welfare</strong>.'
    },

    /* ====================================================================
       CARD 2 – Why governments restrict trade
       ==================================================================== */
    {
      id: 'roft-why',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 7',
      title: 'Why governments restrict trade',
      lede: 'Protectionism is usually justified as helping domestic industries, workers, or national goals.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The same policy can be sold as <strong>economic defence, strategic protection, or political survival</strong>.' },

      causesFirst: true,
      causesLabel: 'THE MAIN REASONS',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F331}', head: '1 · Protect infant industries', body: 'Young firms may need time to grow.' },
        { tone: 'amber',  icon: '\u{1F465}', head: '2 · Protect jobs & communities', body: 'Import competition can threaten employment.' },
        { tone: 'purple', icon: '\u{1F6E1}️', head: '3 · Prevent dumping', body: 'Cheap imports may reflect state support or predatory pricing.' },
        { tone: 'green',  icon: '⭐', head: '4 · Defend strategic industries', body: 'Food, energy, defence or technology may be seen as vital.' },
        { tone: 'blue',   icon: '⚖️', head: '5 · Improve the balance of payments', body: 'Fewer imports may narrow deficits.' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: '6 · Raise government revenue', body: 'Tariffs can bring in tax income.' }
      ],

      flowTitle: 'THE POLITICAL LOGIC',
      flowEmoji: '\u{1F465}',
      flowSep: '→',
      flow: [
        { tone: 'blue',   icon: '\u{1F4E5}', title: 'Import pressure' },
        { tone: 'purple', icon: '\u{1F465}', title: 'Firms/workers lobby' },
        { tone: 'green',  icon: '\u{1F3DB}️', title: 'Government acts' },
        { tone: 'amber',  icon: '\u{1F6A7}', title: 'Barrier introduced' },
        { tone: 'purple', icon: '\u{1F30D}', title: 'Domestic wins, foreign loses' }
      ],

      causes3Label: 'EVALUATION',
      causes3Emoji: '⚖️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'green',  icon: '⏳', head: 'Short run vs long run', body: 'Benefits may be quick but costs build over time.' },
        { tone: 'blue',   icon: '⚙️', head: 'Efficiency vs protection', body: 'Barriers reduce competition and raise costs.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'National vs consumer interest', body: 'Industry gains may come at the expense of consumers.' },
        { tone: 'amber',  icon: '⚖️', head: 'Fair trade vs hidden protection', body: 'Some actions look fair but hide vested interests.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A reason may sound persuasive, but the key question is whether the <strong>benefits exceed the costs</strong>.' },

      conclusion: { title: 'Big idea', text: 'Governments restrict trade when they think the gains from protection outweigh the gains from free exchange.' },
      examEdge: 'Link each reason to a precise mechanism — e.g. infant-industry protection delays competition so firms can <strong>achieve scale and learn by doing</strong>.'
    },

    /* ====================================================================
       CARD 3 – Tariffs (interactive diagram)
       ==================================================================== */
    {
      id: 'roft-tariffs',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 7',
      title: 'Tariffs',
      lede: 'A tariff is a tax on imports — it raises the domestic price of imported goods and changes who gains and loses.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Tariffs protect domestic producers, cut imports and generate revenue — but they usually create a <strong>deadweight welfare loss</strong>.' },

      interactiveDiagram: {
        svgKey: 'tariffDiagramInteractive',
        label: 'THE TARIFF DIAGRAM',
        emoji: '\u{1F517}',
        maxWidth: '480px',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          { label: 'Free trade', tone: 'blue', show: [], head: 'Free trade at the world price', body: 'At the world price Pw, domestic firms supply Q₁ and consumers demand Q₄. The gap between them is imported.' },
          { label: 'Impose the tariff', tone: 'purple', show: ['idl-1'], head: 'The tariff raises the price to Pt', body: 'Domestic output rises from Q₁ to Q₂ and demand falls from Q₄ to Q₃, so imports shrink to the gap Q₂–Q₃.' },
          { label: 'Tariff revenue', tone: 'green', show: ['idl-1', 'idl-2'], head: 'Government collects revenue', body: 'Revenue is the tariff per unit times the remaining imports — the green rectangle between Q₂ and Q₃.' },
          { label: 'Welfare loss', tone: 'rose', show: ['idl-1', 'idl-2', 'idl-3'], head: 'Deadweight welfare loss', body: 'The two red triangles are lost welfare: production and consumption are now less efficient than under free trade.', analysis: 'Consumers lose the most. Part of their loss becomes producer gain and part becomes government revenue — but the two red triangles are lost by everyone: the net efficiency cost of the tariff.' }
        ]
      },

      flowTitle: 'HOW TO READ IT',
      flowEmoji: '\u{1F3AF}',
      flowSep: '→',
      flow: [
        { tone: 'blue',   icon: '\u{1F3F7}️', title: 'Tax imports' },
        { tone: 'amber',  icon: '⬆️', title: 'Import price rises' },
        { tone: 'purple', icon: '\u{1F465}', title: 'Output up, demand down' },
        { tone: 'green',  icon: '⬇️', title: 'Imports fall' }
      ],

      causesLabel: 'WHO GAINS AND WHO LOSES?',
      causesEmoji: '\u{1F465}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Producers gain', body: 'Higher price means higher revenue and profit.' },
        { tone: 'blue',   icon: '\u{1F3DB}️', head: 'Government gains', body: 'Tariff revenue from the reduced imports.' },
        { tone: 'rose',   icon: '\u{1F6D2}', head: 'Consumers lose', body: 'They pay more and have fewer imported goods.' },
        { tone: 'rose',   icon: '⚖️', head: 'Economy loses', body: 'Resources are used less efficiently than under free trade.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The consumer loss is larger than the combined producer gain and tariff revenue — the gap is the <strong>welfare loss</strong>.' },

      conclusion: { title: 'Big idea', text: 'Tariffs redistribute welfare from consumers towards producers and government, while reducing total efficiency.' },
      examEdge: 'In diagram analysis, always state: <strong>price up, imports down, domestic output up, consumer welfare down</strong>.'
    },

    /* ====================================================================
       CARD 4 – Quotas (interactive diagram)
       ==================================================================== */
    {
      id: 'roft-quotas',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 7',
      title: 'Quotas',
      lede: 'A quota limits the amount that can be imported — so the quantity is fixed and the price adjusts upward.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Unlike a tariff, a quota <strong>fixes import quantity</strong> rather than directly taxing each imported unit.' },

      interactiveDiagram: {
        svgKey: 'quotaDiagramInteractive',
        label: 'THE QUOTA DIAGRAM',
        emoji: '\u{1F517}',
        maxWidth: '480px',
        layers: ['idl-1', 'idl-2'],
        views: [
          { label: 'Free trade', tone: 'blue', show: [], head: 'Large imports at the world price', body: 'At the world price Pw domestic supply is small and demand is large — the country imports the wide gap between them.' },
          { label: 'Impose the quota', tone: 'amber', show: ['idl-1'], head: 'The quota fixes imports', body: 'Allowing only a fixed quantity in shifts effective supply to S + quota. The price rises to Pq; domestic output rises and demand falls.' },
          { label: 'Price and rents', tone: 'purple', show: ['idl-1', 'idl-2'], head: 'Price jumps and rents arise', body: 'The price rises from Pw to Pq. Whoever holds the import licences earns the quota rents — the amber rectangle.', analysis: 'Because the quantity is fixed, a rise in demand pushes the price up further than a tariff would — so quotas can make prices especially unstable.' }
        ]
      },

      pairFirst: true,
      pairLabel: 'Tariff vs Quota',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue',
        icon: '\u{1F3F7}️',
        iconStyle: 'circle',
        label: 'Tariff — tax per import',
        points: ['Government usually gets the revenue', 'Quantity changes with conditions (demand, world price)']
      },
      right: {
        tone: 'green',
        icon: '\u{1F4CB}',
        iconStyle: 'circle',
        label: 'Quota — quantity cap',
        points: ['Revenue depends on the licence system', 'Price may jump if demand rises']
      },

      causesLabel: 'WHY QUOTAS MATTER',
      causesEmoji: '\u{1F465}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F6E1}️', head: 'More protection', body: 'Domestic firms face less import competition.' },
        { tone: 'blue',   icon: '\u{1F30D}', head: 'Less competition', body: 'Imports are limited, protecting local producers.' },
        { tone: 'amber',  icon: '\u{1F4B0}', head: 'Quota rents', body: 'Valuable licences can create economic rents.' },
        { tone: 'rose',   icon: '\u{1F6D2}', head: 'Consumers pay more', body: 'Higher prices mean less consumption and welfare.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'If licences are given away rather than auctioned, the gain may go to <strong>importers or foreign exporters</strong> rather than the government.' },

      conclusion: { title: 'Big idea', text: 'Quotas protect by restricting quantity directly — which can make them even more rigid than tariffs.' },
      examEdge: 'In evaluation, note that a quota keeps imports fixed even when demand changes — so prices can become <strong>especially unstable</strong>.'
    },

    /* ====================================================================
       CARD 5 – Subsidies and non-tariff barriers (interactive diagram)
       ==================================================================== */
    {
      id: 'roft-subsidies-ntbs',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 7',
      title: 'Subsidies and non-tariff barriers',
      lede: 'Protection does not always look like a tariff — governments can shield domestic firms more quietly too.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Subsidies lower domestic producers’ costs, while non-tariff barriers raise the hurdles facing <strong>foreign producers</strong>.' },

      interactiveDiagram: {
        svgKey: 'subsidyTradeInteractive',
        label: 'SUBSIDIES TO DOMESTIC PRODUCERS',
        emoji: '\u{1F517}',
        maxWidth: '480px',
        layers: ['idl-1', 'idl-2'],
        views: [
          { label: 'Before the subsidy', tone: 'blue', show: [], head: 'The domestic market', body: 'Domestic supply S₁ and demand D set the price P₁ and output Q₁.' },
          { label: 'Supply shifts right', tone: 'green', show: ['idl-1'], head: 'Costs fall — supply shifts to S₂', body: 'The subsidy lowers unit costs, so domestic supply shifts right to S₂. Output rises to Q₂ and the price falls to P₂.' },
          { label: 'Imports displaced', tone: 'amber', show: ['idl-1', 'idl-2'], head: 'More domestic output, fewer imports', body: 'Higher domestic output at a lower price displaces imports. The government funds the subsidy from tax revenue.', analysis: 'Unlike a tariff, a subsidy keeps the consumer price low — but it costs the taxpayer money rather than raising revenue, and can provoke trade disputes.' }
        ]
      },

      causesFirst: true,
      causesLabel: 'NON-TARIFF BARRIERS',
      causesEmoji: '\u{1F4CB}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F4CB}', head: 'Product standards', body: 'Imports must meet detailed specifications.' },
        { tone: 'purple', icon: '➕', head: 'Safety or health rules', body: 'Extra checks foreign goods must pass.' },
        { tone: 'amber',  icon: '\u{1F4C4}', head: 'Import licences', body: 'Permission needed to bring goods in.' },
        { tone: 'green',  icon: '⏱️', head: 'Customs delays', body: 'Slow processing raises effective costs.' },
        { tone: 'blue',   icon: '\u{1F3ED}', head: 'Local-content rules', body: 'A share of inputs must be domestic.' },
        { tone: 'purple', icon: '\u{1F3DB}️', head: 'Procurement preferences', body: 'Governments favour domestic suppliers.' }
      ],

      flowTitle: 'HOW NON-TARIFF BARRIERS WORK',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'blue',   icon: '\u{1F4C4}', title: 'More paperwork' },
        { tone: 'amber',  icon: '\u{1F4B7}', title: 'Higher cost or slower entry' },
        { tone: 'rose',   icon: '⬇️', title: 'Imports reduced' }
      ],

      causes3Label: 'THE TRADE-OFFS',
      causes3Emoji: '⚖️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'green',  icon: '\u{1F3C6}', head: 'Firms may gain', body: 'Domestic competitiveness can improve.' },
        { tone: 'rose',   icon: '\u{1F6D2}', head: 'Consumers may lose', body: 'Less choice or higher prices.' },
        { tone: 'amber',  icon: '\u{1F4B8}', head: 'Taxpayers fund subsidies', body: 'Support is paid from public funds.' },
        { tone: 'purple', icon: '⚖️', head: 'Hard to detect', body: 'NTBs can be hidden and may provoke disputes.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Non-tariff barriers are often called <strong>hidden protectionism</strong> because they work through rules rather than import taxes.' },

      conclusion: { title: 'Big idea', text: 'Protection can be open and obvious, or subtle and administrative — but the economic logic is still about changing competitive pressure.' },
      examEdge: 'Do not forget that subsidies usually <strong>cost the government money</strong>, whereas tariffs may raise money.'
    },

    /* ====================================================================
       CARD 6 – Who gains and who loses?
       ==================================================================== */
    {
      id: 'roft-winners-losers',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 7',
      title: 'Who gains and who loses?',
      lede: 'Protectionist policies create clear winners and losers across consumers, firms, governments, and the wider economy.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Protection may help protected producers and some workers, but it often reduces <strong>consumer welfare and long-run efficiency</strong>.' },

      causesFirst: true,
      causesLabel: 'STAKEHOLDER SCORECARD',
      causesEmoji: '\u{1F465}',
      causesStyle: 'numbered-rows',
      causes: [
        { tone: 'green',  icon: '\u{1F6D2}', head: 'Consumers', body: '• Higher prices<br>• Less choice<br>• Lower real incomes' },
        { tone: 'blue',   icon: '\u{1F3ED}', head: 'Domestic producers', body: '• Higher sales<br>• Higher profits<br>• Less foreign pressure' },
        { tone: 'purple', icon: '\u{1F477}', head: 'Workers', body: '• Some jobs protected<br>• Other sectors face higher input costs' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: 'Government', body: '• Tariff revenue<br>• Subsidy cost<br>• Diplomatic trade-offs' },
        { tone: 'green',  icon: '\u{1F30D}', head: 'Foreign producers', body: '• Lose access<br>• Or face tougher conditions' }
      ],

      flowTitle: 'WIDER ECONOMIC EFFECTS',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '\u{1F6A7}', title: 'Barrier introduced' },
        { tone: 'amber',  icon: '⬇️', title: 'Imports fall' },
        { tone: 'purple', icon: '⬆️', title: 'Domestic prices rise' },
        { tone: 'blue',   icon: '\u{1F3ED}', title: 'Protected sectors expand' },
        { tone: 'amber',  icon: '\u{1F4C9}', title: 'Efficiency may fall' },
        { tone: 'rose',   icon: '\u{1F30D}', title: 'Retaliation risk rises' }
      ],

      causes3Label: 'LIVING STANDARDS AND EQUALITY',
      causes3Emoji: '\u{1F465}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'green',  icon: '⚖️', head: 'Living standards', body: 'Often lower if prices rise broadly.' },
        { tone: 'blue',   icon: '\u{1F465}', head: 'Equality may improve', body: 'For protected workers.' },
        { tone: 'amber',  icon: '\u{1F464}', head: 'Equality may worsen', body: 'If poorer households face higher prices.' },
        { tone: 'purple', icon: '\u{1F4C8}', head: 'Long-run growth', body: 'May weaken if protection cuts competition and productivity.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The evaluation often depends on <strong>time horizon, scale, and whether protection is temporary or permanent</strong>.' },

      conclusion: { title: 'Big idea', text: 'Protection is not simply good or bad — it redistributes costs and benefits across different groups.' },
      examEdge: 'For full evaluation, move beyond producers and consumers — mention <strong>government finances, living standards, and possible retaliation</strong>.'
    },

    /* ====================================================================
       CARD 7 – The whole story
       ==================================================================== */
    {
      id: 'roft-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 7 of 7',
      title: 'The whole story',
      lede: 'Strong answers explain why a barrier is used, how it works, and whether the overall effects justify it.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Trade restrictions can protect domestic interests, but they usually do so by <strong>giving up some of the gains from free trade</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F3DB}️', title: 'Government concern' },
        { tone: 'amber',  icon: '\u{1F9F0}', title: 'Choose policy tool' },
        { tone: 'purple', icon: '\u{1F6A7}', title: 'Imports restricted' },
        { tone: 'blue',   icon: '\u{1F6D2}', title: 'Market changes' },
        { tone: 'green',  icon: '\u{1F465}', title: 'Stakeholder effects' },
        { tone: 'purple', icon: '⚖️', title: 'Final judgement' }
      ],

      causesLabel: 'COMMON EVALUATION POINTS',
      causesEmoji: '\u{1F44D}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '⏳', head: 'Temporary vs permanent', body: 'Short-term help can become a lasting crutch.' },
        { tone: 'blue',   icon: '\u{1F331}', head: 'Infant industry vs inefficiency', body: 'Protected firms may never become competitive.' },
        { tone: 'green',  icon: '\u{1F465}', head: 'National vs consumer cost', body: 'Industry gains weighed against higher prices.' },
        { tone: 'blue',   icon: '\u{1F30D}', head: 'Risk of retaliation', body: 'Barriers can trigger trade wars.' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'rose', icon: '\u{1F3F7}️', head: 'Tariffs vs quotas', body: 'Do not confuse the two tools.' },
        { tone: 'rose', icon: '\u{1F6D2}', head: 'Ignoring consumers', body: 'Consumer welfare is central, not a footnote.' },
        { tone: 'rose', icon: '\u{1F3DB}️', head: 'Forgetting revenue or cost', body: 'Tariffs raise money; subsidies cost money.' },
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Protection fixes the BoP', body: 'It does not automatically improve the trade balance.' }
      ],

      causes3Label: 'HOW TO WRITE IT',
      causes3Emoji: '✍️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'blue', icon: '\u{1F4C4}', head: '1 · Define the restriction', body: 'Name the exact tool.' },
        { tone: 'blue', icon: '\u{1F4C8}', head: '2 · Explain the market effect', body: 'Use a diagram — price, output, imports.' },
        { tone: 'blue', icon: '\u{1F465}', head: '3 · Assess stakeholders', body: 'Winners and losers.' },
        { tone: 'blue', icon: '⚖️', head: '4 · Judge overall', body: 'Reach an evaluated conclusion.' }
      ],

      conclusion: { title: 'Big idea', text: 'The strongest answers treat protectionism as a trade-off between defence of domestic interests and the lost efficiency of freer trade.' },
      examEdge: 'Always balance the case for protection against <strong>higher prices, weaker competition, and possible retaliation</strong>.'
    }
  ]
};
