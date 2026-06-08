/* ============================================================
   ECONOS – Contestable Markets (Edexcel A 3.4.7)
   6 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.

   Card patterns (no two consecutive repeat; one dominant tile-grid):
     1 Sequential flow chain (the basic story) + contestable tiles
     2 Tile grid (entry + exit barriers) + why-this-matters chain
     3 Interactive timeline (hit-and-run) + sunk-cost contrasts
     4 Side-by-side pair (protected vs contestable) + pressures + cause-effect
     5 Comparison (high vs low) + differences + examples + how-to-judge
     6 Evidence-then-verdict (synthesis + how-to-answer)

   New visual (js/icons.js):
     - hitAndRunCycle  (Card 3 interactive, hr-1..hr-5)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'contestable-markets',
  topicNum: '3.4.7',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Contestable Markets',
  estTime: '15 min',
  goal: 'Define contestability and the role of barriers and sunk costs, explain hit-and-run competition, and evaluate how the threat of entry shapes firm behaviour',

  intro: {
    heroKey: 'heroFirm',
    summary: 'A market is contestable when firms already in it behave competitively because new firms could enter at any time. What matters is not the number of firms but the threat of entry — and that threat depends on barriers to entry and exit, and especially on sunk costs. This deck explains what makes a market contestable, how hit-and-run competition works, and how the threat of entry disciplines incumbents even when no one actually enters.',
    doInThis: 'Define contestability and distinguish it from the number of firms. Explain barriers to entry and exit and the central role of sunk costs. Walk through hit-and-run competition and how the threat of entry changes firm behaviour. Finally, judge how contestable a market is and evaluate the usefulness of the theory.',
    outcomes: [
      'Define a contestable market and the threat of entry',
      'Explain barriers to entry and exit',
      'Explain sunk costs and hit-and-run competition',
      'Analyse how contestability changes firm behaviour',
      'Judge how contestable a market is',
      'Evaluate the usefulness and limits of the theory'
    ],
    tip: 'The phrase to reach for is the threat of entry — contestability is about potential competition, not just actual rivals.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 15 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Contestability: the big picture
       Pattern: Sequential flow chain (the basic story) + tiles
       ==================================================================== */
    {
      id: 'cm-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Contestability — the big picture',
      lede: 'A market can behave competitively even when only a few firms are present — if entry is easy and cheap.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Contestability is about the <strong>threat of entry</strong>, not just the number of firms already in the market.' },

      causesFirst: true,
      causesLabel: 'WHAT MAKES A MARKET CONTESTABLE',
      causesEmoji: '\u{1F9E9}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F6AA}', head: 'Low barriers to entry', body: 'New firms can enter without major legal or financial obstacles.' },
        { tone: 'blue',   icon: '↩️', head: 'Low barriers to exit', body: 'Firms can leave easily and recover most resources.' },
        { tone: 'purple', icon: '\u{1F4B8}', head: 'Low sunk costs',     body: 'Entry spending can be recovered if the firm leaves.' },
        { tone: 'amber',  icon: '\u{1F310}', head: 'Access to customers', body: 'Entrants can reach buyers and technology.' }
      ],

      flowTitle: 'THE BASIC STORY',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F4B0}', title: 'Supernormal profit', sub: 'Attracts attention.' },
        { tone: 'blue',   icon: '\u{1F465}', title: 'Attracts entry',     sub: 'Outsiders eye the market.' },
        { tone: 'amber',  icon: '⚠️', title: 'Threat of entry',    sub: 'Incumbents feel the pressure.' },
        { tone: 'purple', icon: '⚡', title: 'Firms compete',      sub: 'They behave competitively.' },
        { tone: 'green',  icon: '\u{1F4C9}', title: 'Lower prices',       sub: 'Consumers gain.' },
        { tone: 'blue',   icon: '\u{1F4C8}', title: 'Better efficiency',  sub: 'Waste is cut.' }
      ],

      causes3Label: 'WHY IT MATTERS',
      causes3Emoji: '\u{1F4A1}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'green',  icon: '\u{1F4B7}', head: 'Prices',     body: 'Potential entry keeps prices down.' },
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Efficiency', body: 'Firms cut waste to stay competitive.' },
        { tone: 'purple', icon: '\u{1F4CA}', head: 'Profits',    body: 'Long-run supernormal profit is harder to sustain.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Even a monopoly may keep prices low if its market is genuinely easy to enter.' },

      conclusion: { title: 'Big idea', text: 'In a contestable market, the threat of entry — not the number of firms — keeps firms competitive.' },
      examEdge: 'Contestability focuses on <strong>potential competition</strong> — firms already in the market are only part of the story.'
    },

    /* ====================================================================
       CARD 2 – Barriers to entry and exit
       Pattern: Tile grid (entry + exit barriers) + why-this-matters chain
       ==================================================================== */
    {
      id: 'cm-barriers',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'Barriers to entry and exit',
      lede: 'Contestability depends on how easy it is to enter a market — and how painful it is to leave it.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The fewer the barriers — especially <strong>sunk costs</strong> — the more contestable the market.' },

      causesFirst: true,
      causesLabel: 'ENTRY BARRIERS',
      causesEmoji: '\u{1F6AA}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F3DB}️', head: 'Legal and regulatory', body: 'Licences, patents or regulation can keep entrants out.' },
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Economies of scale', body: 'Incumbents’ low average costs make entry unattractive.' },
        { tone: 'purple', icon: '\u{1F4E3}', head: 'Brand loyalty', body: 'Strong customer habits are hard for entrants to break.' },
        { tone: 'amber',  icon: '♟️', head: 'Strategic behaviour', body: 'Limit or predatory pricing can deter entry.' }
      ],

      causes2Label: 'EXIT BARRIERS',
      causes2Emoji: '↩️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'rose',   icon: '⚙️', head: 'Specialised assets', body: 'Machinery or sites that have little resale value.' },
        { tone: 'amber',  icon: '\u{1F4DD}', head: 'Contract commitments', body: 'Long leases or supply deals are costly to break.' },
        { tone: 'purple', icon: '\u{1F4B7}', head: 'Closure costs', body: 'Redundancy and shutdown costs make leaving expensive.' },
        { tone: 'blue',   icon: '\u{1F4C9}', head: 'Reputational damage', body: 'Exit can harm standing with owners and investors.' }
      ],

      flowTitle: 'WHY THIS MATTERS',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'amber',  icon: '\u{1F6A7}', title: 'Higher barriers', sub: 'On the way in or out.' },
        { tone: 'blue',   icon: '\u{1F465}', title: 'Fewer credible entrants', sub: 'Entry looks risky.' },
        { tone: 'purple', icon: '\u{1F6E1}️', title: 'Weaker threat', sub: 'Incumbents feel safe.' },
        { tone: 'rose',   icon: '\u{1F4C9}', title: 'Lower contestability', sub: 'Less competitive pressure.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'High exit barriers are also entry barriers — firms won’t enter a market they can’t leave without huge losses.' },

      conclusion: { title: 'Big idea', text: 'Contestability is shaped by barriers on the way in AND the way out.' },
      examEdge: 'Distinguish clearly between <strong>barriers to entry, barriers to exit, and sunk costs</strong> — examiners reward precision.'
    },

    /* ====================================================================
       CARD 3 – Sunk costs and hit-and-run competition
       Pattern: Interactive timeline (hitAndRunCycle) + sunk-cost contrasts
       ==================================================================== */
    {
      id: 'cm-sunk-costs',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'Sunk costs and hit-and-run competition',
      lede: 'Low sunk costs make it easier for a new firm to enter, test the market, and leave again if profits disappear.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Sunk costs are <strong>unrecoverable</strong> costs — the lower they are, the more real the threat of entry becomes.' },

      interactiveDiagram: {
        svgKey: 'hitAndRunCycle',
        label: 'THE HIT-AND-RUN STORY — step through it',
        emoji: '\u{1F3C3}',
        wide: true,
        maxWidth: '820px',
        layers: ['hr-1', 'hr-2', 'hr-3', 'hr-4', 'hr-5'],
        views: [
          {
            label: 'Supernormal profit',
            tone: 'green',
            head: 'Step 1 — profit on offer',
            body: 'An incumbent is earning <strong>supernormal profit</strong> in the market.',
            show: ['hr-1']
          },
          {
            label: 'Entrant spots it',
            tone: 'blue',
            head: 'Step 2 — an entrant notices',
            body: 'A new firm sees the profit and considers entering to grab a share of it.',
            show: ['hr-1', 'hr-2']
          },
          {
            label: 'Entry',
            tone: 'amber',
            head: 'Step 3 — easy entry',
            body: 'Because <strong>sunk costs are low</strong>, the entrant can come in cheaply — there is little to lose.',
            show: ['hr-1', 'hr-2', 'hr-3']
          },
          {
            label: 'Profits competed away',
            tone: 'rose',
            head: 'Step 4 — profit erodes',
            body: 'Extra supply pushes <strong>prices and profits down</strong> for everyone in the market.',
            show: ['hr-1', 'hr-2', 'hr-3', 'hr-4']
          },
          {
            label: 'Hit-and-run exit',
            tone: 'purple',
            head: 'Step 5 — the run',
            body: 'Once the profit is gone, the entrant <strong>exits again</strong> with little loss — hit-and-run.',
            analysis: 'The crucial point: the incumbent knows this can happen, so it keeps prices low even when no one actually enters. The threat does the work.',
            show: ['hr-1', 'hr-2', 'hr-3', 'hr-4', 'hr-5']
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'WHAT SUNK COSTS ARE',
      causesEmoji: '\u{1F4B8}',
      causesStyle: 'icon-top',
      causesCols: 2,
      causes: [
        { tone: 'green', icon: '↩️', head: 'Recoverable costs', body: 'Can be sold or recovered on exit — resaleable equipment, flexible contracts, reusable premises.' },
        { tone: 'rose',  icon: '\u{1F525}', head: 'Non-recoverable (sunk) costs', body: 'Gone for good — specialised kit, advertising, one-off compliance and set-up spending.' }
      ],

      causes2Label: 'LOW VS HIGH SUNK COSTS',
      causes2Emoji: '⚖️',
      causes2Style: 'icon-top',
      causes2Cols: 2,
      causes2: [
        { tone: 'green', icon: '\u{1F7E2}', head: 'Low sunk costs → more contestable', body: 'Entry and exit are cheap, so the threat of entry is strong and real.' },
        { tone: 'rose',  icon: '\u{1F534}', head: 'High sunk costs → less contestable', body: 'Entry is risky and exit is costly, so incumbents feel safe.' }
      ],

      causes3Label: 'WHY IT MATTERS',
      causes3Emoji: '\u{1F4A1}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'rose',   icon: '⚠️', head: 'Entry risk',     body: 'Sunk costs are what an entrant could lose.' },
        { tone: 'amber',  icon: '\u{1F914}', head: 'Entry decision', body: 'Firms weigh sunk costs before entering.' },
        { tone: 'blue',   icon: '\u{1F4CA}', head: 'Market behaviour', body: 'Incumbents stay sharp when sunk costs are low.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Sunk costs are the bridge between barriers and contestability — they decide whether the threat of entry is credible.' },

      conclusion: { title: 'Big idea', text: 'Low sunk costs make hit-and-run entry possible, and the threat of it keeps incumbents competitive.' },
      examEdge: 'When asked about contestability, mention <strong>sunk costs</strong> explicitly — they decide whether entry is a real threat.'
    },

    /* ====================================================================
       CARD 4 – How contestability changes firm behaviour
       Pattern: Side-by-side pair (protected vs contestable) + pressures + flow
       ==================================================================== */
    {
      id: 'cm-firm-behaviour',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'How contestability changes firm behaviour',
      lede: 'Even without many rivals already in the market, firms may act competitively if they fear new entry.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Potential competition can <strong>discipline existing firms</strong> — even before an entrant arrives.' },

      causesFirst: true,
      causesLabel: 'THE FOUR PRESSURES',
      causesEmoji: '\u{1F4AA}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F4B7}', head: 'Limit pricing', body: 'Keep prices low to make entry unattractive.' },
        { tone: 'blue',   icon: '⚙️', head: 'Cost control', body: 'Cut waste to stay lean and competitive.' },
        { tone: 'purple', icon: '\u{1F31F}', head: 'Better quality', body: 'Raise quality and service to hold customers.' },
        { tone: 'amber',  icon: '\u{1F4C9}', head: 'Lower long-run profit', body: 'Excess profit is harder to protect.' }
      ],

      flowTitle: 'CAUSE AND EFFECT',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F6AA}', title: 'Easy entry',     sub: 'Low barriers and sunk costs.' },
        { tone: 'amber',  icon: '⚠️', title: 'Threat of entry', sub: 'Incumbents take note.' },
        { tone: 'blue',   icon: '⚡', title: 'Compete harder', sub: 'They behave competitively.' },
        { tone: 'purple', icon: '\u{1F4C9}', title: 'Prices stay lower', sub: 'Even with few rivals.' },
        { tone: 'green',  icon: '\u{1F6D2}', title: 'Consumers benefit', sub: 'Better value.' }
      ],

      causes3Label: 'WHO BENEFITS',
      causes3Emoji: '\u{1F381}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'green',  icon: '\u{1F6D2}', head: 'Consumers', body: 'Lower prices and better service.' },
        { tone: 'blue',   icon: '\u{1F3E2}', head: 'Firms',     body: 'Forced to improve and stay efficient.' },
        { tone: 'purple', icon: '\u{1F310}', head: 'The market', body: 'Greater efficiency overall.' }
      ],

      pairLabel: 'Protected market vs contestable market',
      pairEmoji: '⚖️',
      left: {
        tone: 'rose',
        icon: '\u{1F6E1}️',
        iconStyle: 'circle',
        label: 'Protected market',
        points: ['Entry is blocked', 'Less competitive pressure', 'More room for complacency']
      },
      right: {
        tone: 'green',
        icon: '\u{1F513}',
        iconStyle: 'circle',
        label: 'Contestable market',
        points: ['Credible entry threat', 'Sharper pricing and efficiency', 'Profits are less secure']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A contestable monopoly can behave very differently from a protected one — structure alone doesn’t decide conduct.' },

      conclusion: { title: 'Big idea', text: 'In a contestable market, the threat of competition can matter almost as much as competition itself.' },
      examEdge: 'Link contestability to behaviour — <strong>limit pricing, lower profits, stronger efficiency</strong> — not just to entry.'
    },

    /* ====================================================================
       CARD 5 – High vs low contestability
       Pattern: Comparison (more vs less) + differences + examples + how-to-judge
       ==================================================================== */
    {
      id: 'cm-high-low',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'High vs low contestability',
      lede: 'Real markets differ not just in the number of firms, but in how exposed they are to new competition.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Few firms does not always mean weak competition — contestability depends on <strong>entry and exit conditions</strong>.' },

      pairFirst: true,
      pairLabel: 'More contestable vs less contestable',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '\u{1F4C8}',
        iconStyle: 'circle',
        label: 'More contestable market',
        points: ['Low barriers to entry and exit', 'Low sunk costs', 'Profits kept under pressure']
      },
      right: {
        tone: 'rose',
        icon: '\u{1F6E1}️',
        iconStyle: 'circle',
        label: 'Less contestable market',
        points: ['High barriers and sunk costs', 'Entrants face real risk', 'Incumbents keep more market power']
      },

      causesFirst: true,
      causesLabel: 'WHAT MAKES THE DIFFERENCE',
      causesEmoji: '\u{1F50D}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'purple', icon: '\u{1F4B8}', head: 'Sunk costs', body: 'Recoverable spending makes entry easier.' },
        { tone: 'green',  icon: '\u{1F4E3}', head: 'Brand loyalty', body: 'Strong loyalty makes entry harder.' },
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Economies of scale', body: 'Incumbents’ low costs deter entrants.' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: 'Regulation', body: 'Rules can block — or invite — new entry.' }
      ],

      causes2Label: 'TWO SIMPLE EXAMPLES',
      causes2Emoji: '\u{1F4A1}',
      causes2Style: 'icon-top',
      causes2Cols: 2,
      causes2: [
        { tone: 'green', icon: '\u{1F4BB}', head: 'A · More contestable', body: 'Set-up costs are modest and assets are reusable, so entry is easy and low-risk.' },
        { tone: 'rose',  icon: '\u{1F3ED}', head: 'B · Less contestable', body: 'Huge fixed and sunk costs make entry hard and risky, so few firms try.' }
      ],

      flowTitle: 'HOW TO JUDGE IT',
      flowEmoji: '\u{1F9ED}',
      flow: [
        { tone: 'blue',   icon: '\u{1F6A7}', title: 'Look at barriers', sub: 'Entry and exit.' },
        { tone: 'purple', icon: '\u{1F4B8}', title: 'Look at sunk costs', sub: 'Recoverable or not?' },
        { tone: 'amber',  icon: '⚠️', title: 'Check the entry threat', sub: 'Is it credible?' },
        { tone: 'green',  icon: '✅', title: 'Decide how contestable', sub: 'Weigh it up.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A concentrated market can still be quite contestable if an entrant can arrive quickly and cheaply.' },

      conclusion: { title: 'Big idea', text: 'A contestable market can still be concentrated — what matters is the threat of entry.' },
      examEdge: 'Judge contestability by <strong>entry/exit conditions and sunk costs</strong>, not by counting the firms.'
    },

    /* ====================================================================
       CARD 6 – The whole story
       Pattern: Evidence-then-verdict (synthesis + how-to-answer)
       ==================================================================== */
    {
      id: 'cm-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole story',
      lede: 'Strong answers explain contestability through barriers, sunk costs, the threat of entry, and the way firms respond.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Contestability links market conditions to firm behaviour — and helps explain why even concentrated markets may act competitively.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F4CA}', title: 'Market structure', sub: 'How many firms.' },
        { tone: 'amber',  icon: '\u{1F6A7}', title: 'Barriers',         sub: 'Entry and exit.' },
        { tone: 'purple', icon: '\u{1F4B8}', title: 'Sunk costs',       sub: 'Recoverable or not.' },
        { tone: 'rose',   icon: '⚠️', title: 'Threat of entry',  sub: 'Credible or weak.' },
        { tone: 'green',  icon: '⚡', title: 'Firm behaviour',   sub: 'Pricing and efficiency.' },
        { tone: 'blue',   icon: '\u{1F4C8}', title: 'Outcomes',         sub: 'Prices, profits, service.' }
      ],

      causesLabel: 'WHY THE THEORY HELPS',
      causesEmoji: '\u{1F44D}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '\u{1F465}', head: 'Potential competition', body: 'Focuses on the threat, not just how many firms already exist.' },
        { tone: 'green', icon: '⚡', head: 'Explains behaviour', body: 'Why incumbents may limit prices or stay efficient.' },
        { tone: 'green', icon: '⚖️', head: 'Evaluation', body: 'A sharper lens than market power alone.' }
      ],

      causes2Label: 'THE LIMITS',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '\u{1F6A7}', head: 'Real barriers exist', body: 'Entry is rarely costless in practice.' },
        { tone: 'rose', icon: '\u{1F4B8}', head: 'Sunk costs are often large', body: 'Many markets are hard to enter.' },
        { tone: 'rose', icon: '❌', head: 'Perfect contestability is rare', body: 'Most markets are only partly contestable.' }
      ],

      causes3Label: 'HOW TO ANSWER AN ESSAY',
      causes3Emoji: '✍️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'purple', icon: '\u{1F4C4}', head: '1 · Define', body: 'Contestability and the threat of entry.' },
        { tone: 'purple', icon: '\u{1F6AA}', head: '2 · Assess entry/exit', body: 'Barriers and sunk costs.' },
        { tone: 'purple', icon: '⚡', head: '3 · Explain behaviour', body: 'How firms respond to the threat.' },
        { tone: 'purple', icon: '⚖️', head: '4 · Judge', body: 'How contestable, in context.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Perfect contestability — costless entry and exit with no sunk costs — is a theoretical benchmark, not a real market.' },

      conclusion: { title: 'Big idea', text: 'Contestability is about the threat of competition — perfect contestability is the limiting case.' },
      examEdge: 'Move from definition to <strong>barriers and sunk costs</strong>, then finish with firm behaviour and evaluation.'
    }
  ]
};
