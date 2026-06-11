/* ============================================================
   ECONOS – Promoting Competition (Edexcel A 3.6.1)
   6 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   (Third of the government-intervention sub-topics.)
   NOTE: Card 6 (the whole story) was composed in the standard
   series "whole-story" pattern — the mockup arrived as a duplicate.

   Card patterns (no two consecutive repeat; one dominant tile-grid):
     1 Tile grid (four levers) + why-competition-matters + caveats
     2 Side-by-side pair (before/after) + how-it-works flow + benefits/risks
     3 Tile grid (why small firms) + toolbox + competition chain flow
     4 Sequential flow (tendering process) + why/risks + in-vs-for pair
     5 Side-by-side pair (state vs private) + supporters/criticisms
     6 Evidence-then-verdict (synthesis + final judgement)

   No bespoke visuals — conceptual topic (flow / pair / tile blocks).
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'promoting-competition',
  topicNum: '3.6.1',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Promoting Competition',
  estTime: '15 min',
  goal: 'Explain how governments promote competition — deregulation, support for small firms, competitive tendering and privatisation — and evaluate whether more competition improves outcomes',

  intro: {
    heroKey: 'heroPromoteComp',
    summary: 'Instead of regulating powerful firms directly, governments can make markets more competitive — making it easier for new firms to enter, survive and challenge incumbents. This deck works through the main levers: deregulation, support for small business, competitive tendering and privatisation. Each can lower prices, raise quality and spur innovation — but only if barriers really fall and the market is genuinely contestable. The deck closes by judging when promoting competition actually improves outcomes.',
    doInThis: 'Set out the four levers governments use to promote competition. Explain deregulation and the support given to small firms and new entrants. Analyse competitive tendering and privatisation, including their risks. Finally, judge whether more competition genuinely improves prices, quality, choice and innovation — or whether some markets need regulation instead.',
    outcomes: [
      'Explain the main ways to promote competition',
      'Analyse deregulation and its benefits and risks',
      'Explain support for small business and new entry',
      'Analyse competitive tendering and privatisation',
      'Evaluate whether more competition improves outcomes'
    ],
    tip: 'The phrase to reach for is contestability — promoting competition works only if entry becomes genuinely easier.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 15 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Promoting competition: the big picture
       Pattern: Tile grid (four levers) + why-competition-matters + caveats
       ==================================================================== */
    {
      id: 'pc-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Promoting competition — the big picture',
      lede: 'Governments can promote competition not by capping firms directly, but by making rivalry easier.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'More competition can pressure firms to <strong>cut prices, improve quality and innovate</strong>.' },

      causesFirst: true,
      causesLabel: 'THE FOUR LEVERS',
      causesEmoji: '\u{1F39B}️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F331}', head: 'Support small business', body: 'Help smaller rivals start and grow.' },
        { tone: 'blue',   icon: '✂️', head: 'Deregulation', body: 'Remove unnecessary barriers to entry.' },
        { tone: 'purple', icon: '\u{1F4DD}', head: 'Competitive tendering', body: 'Firms compete for government contracts.' },
        { tone: 'amber',  icon: '\u{1F3E2}', head: 'Privatisation', body: 'Move activity from state to private market.' }
      ],

      causes2Label: 'WHY COMPETITION MATTERS',
      causes2Emoji: '\u{1F4A1}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'green',  icon: '\u{1F4C9}', head: 'Prices', body: 'Rivalry pushes prices down.' },
        { tone: 'blue',   icon: '✅', head: 'Quality', body: 'Firms compete on quality and service.' },
        { tone: 'purple', icon: '\u{1F6D2}', head: 'Choice', body: 'More rivals mean more options.' },
        { tone: 'amber',  icon: '\u{1F4A1}', head: 'Innovation', body: 'Pressure drives new ideas and products.' }
      ],

      causes3Label: 'NOT A MAGIC WAND',
      causes3Emoji: '⚠️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'rose',  icon: '\u{1F3E2}', head: 'Markets may stay concentrated', body: 'Entry can still be hard in practice.' },
        { tone: 'amber', icon: '\u{1F6E1}️', head: 'Standards still needed', body: 'Safety and quality rules still matter.' },
        { tone: 'blue',  icon: '\u{1F504}', head: 'Short-run disruption', body: 'Entry and exit have real costs.' },
        { tone: 'purple', icon: '\u{1F6AA}', head: 'Contestability matters', body: 'The threat of entry counts, not just numbers.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Promoting competition mainly works through contestability — making the threat of entry real.' },

      conclusion: { title: 'Big idea', text: 'Governments can improve outcomes by increasing rivalry — not by directly controlling firms, but by making competition possible.' },
      examEdge: 'Explain how each lever works through <strong>entry and contestability</strong>, then judge whether it actually helps.'
    },

    /* ====================================================================
       CARD 2 – Deregulation
       Pattern: Side-by-side pair (before/after) + how-it-works flow + benefits/risks
       ==================================================================== */
    {
      id: 'pc-deregulation',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'Deregulation',
      lede: 'Deregulation means removing unnecessary rules that stop entry, expansion or competitive pressure.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Deregulation is a lighter or smarter set of rules to make markets <strong>more contestable</strong>.' },

      pairFirst: true,
      pairLabel: 'Heavily regulated vs more contestable',
      pairEmoji: '\u{1F504}',
      left: {
        tone: 'rose',
        icon: '\u{1F512}',
        iconStyle: 'circle',
        label: 'Heavily regulated market',
        points: ['Licensing and red tape', 'High entry costs', 'Few firms, weak pressure']
      },
      right: {
        tone: 'green',
        icon: '\u{1F513}',
        iconStyle: 'circle',
        label: 'More contestable market',
        points: ['Easier entry', 'More firms', 'More consumer pressure']
      },

      flowTitle: 'HOW IT WORKS',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '✂️', title: 'Fewer barriers', sub: 'Rules are eased.' },
        { tone: 'purple', icon: '\u{1F6AA}', title: 'More entry', sub: 'New firms come in.' },
        { tone: 'amber',  icon: '⚡', title: 'Incumbents pressured', sub: 'They must respond.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Prices & efficiency improve', sub: 'Consumers benefit.' }
      ],

      causesLabel: 'POSSIBLE BENEFITS',
      causesEmoji: '\u{1F44D}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F6AA}', head: 'Lower barriers', body: 'Easier for new firms to enter.' },
        { tone: 'blue',   icon: '\u{1F6D2}', head: 'More choice', body: 'Consumers get more options.' },
        { tone: 'purple', icon: '\u{1F4A1}', head: 'Dynamic pressure', body: 'More innovation over time.' },
        { tone: 'amber',  icon: '\u{1F4C8}', head: 'Efficiency gains', body: 'Firms cut waste to compete.' }
      ],

      causes2Label: 'THE RISKS',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'rose', icon: '\u{1F6E1}️', head: 'Safety & quality', body: 'Cutting rules can cut standards.' },
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Instability', body: 'Too much churn can disrupt supply.' },
        { tone: 'rose', icon: '\u{1F3ED}', head: 'Natural monopoly', body: 'Some markets should not be deregulated.' },
        { tone: 'rose', icon: '\u{1F352}', head: 'Cherry-picking', body: 'Firms may serve only profitable customers.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Deregulation works only where competition is possible — in a natural monopoly, regulation is still safer.' },

      conclusion: { title: 'Big idea', text: 'Deregulation can raise competition by lowering barriers — but it is risky where the market is not naturally competitive.' },
      examEdge: 'Deregulation aims to make markets easier to enter — link it to <strong>contestability</strong>, then weigh the risks.'
    },

    /* ====================================================================
       CARD 3 – Supporting small business and entry
       Pattern: Tile grid (why small firms) + toolbox + competition chain flow
       ==================================================================== */
    {
      id: 'pc-small-business',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'Supporting small business and entry',
      lede: 'Governments can strengthen competition by helping new firms start, survive and challenge larger incumbents.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Support for small business matters if it <strong>lowers entry barriers and creates credible rivals</strong>.' },

      causesFirst: true,
      causesLabel: 'WHY SMALL FIRMS MATTER',
      causesEmoji: '\u{1F331}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F6AA}', head: 'New entry', body: 'Fresh rivals add competition.' },
        { tone: 'blue',   icon: '\u{1F4A1}', head: 'Innovation', body: 'Small firms often try new ideas.' },
        { tone: 'purple', icon: '\u{1F3AF}', head: 'Niche markets', body: 'They serve specialised demand.' },
        { tone: 'amber',  icon: '\u{1F6AA}', head: 'Contestability', body: 'Incumbents must keep sharp.' }
      ],

      causes2Label: 'THE POLICY TOOLBOX',
      causes2Emoji: '\u{1F9F0}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'green',  icon: '\u{1F4B7}', head: 'Access to finance', body: 'Loans, guarantees and venture funding.' },
        { tone: 'blue',   icon: '\u{1F4C9}', head: 'Tax relief', body: 'Lower early-stage costs.' },
        { tone: 'purple', icon: '\u{1F9D1}‍\u{1F3EB}', head: 'Business advice', body: 'Mentoring and support services.' },
        { tone: 'amber',  icon: '\u{1F517}', head: 'Incubators & clusters', body: 'Networks and shared resources.' }
      ],

      flowTitle: 'THE COMPETITION CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F3DB}️', title: 'Policy support', sub: 'Help for small firms.' },
        { tone: 'purple', icon: '\u{1F6AA}', title: 'Lower entry barriers', sub: 'Easier to start up.' },
        { tone: 'green',  icon: '\u{1F331}', title: 'More startups', sub: 'New firms appear.' },
        { tone: 'amber',  icon: '⚡', title: 'More rivalry', sub: 'Pressure on incumbents.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Better outcomes', sub: 'Prices, choice, innovation.' }
      ],

      causes3Label: 'LIMITS AND EVALUATION',
      causes3Emoji: '⚠️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'rose',  icon: '\u{1F4C9}', head: 'Firms may fail', body: 'Support can be wasted on weak firms.' },
        { tone: 'amber', icon: '\u{1F3ED}', head: 'Small ≠ efficient', body: 'Big firms may have lower costs.' },
        { tone: 'blue',  icon: '\u{1F3AF}', head: 'Picking winners', body: 'Government may back the wrong firms.' },
        { tone: 'purple', icon: '⏳', head: 'Long-run impact', body: 'Effect on competition is uncertain.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Support only helps competition if small firms become genuine, lasting rivals — not just dependent on subsidy.' },

      conclusion: { title: 'Big idea', text: 'Helping small firms can widen competition — if it creates credible rivals, not just more weak firms.' },
      examEdge: 'Link small-firm support to a <strong>competition-policy goal</strong>: lower barriers and more credible rivals.'
    },

    /* ====================================================================
       CARD 4 – Competitive tendering
       Pattern: Sequential flow (tendering process) + why/risks + in-vs-for pair
       ==================================================================== */
    {
      id: 'pc-tendering',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'Competitive tendering',
      lede: 'Governments can make firms compete for public contracts, even when the service itself has only one provider at a time.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Tendering brings competition <strong>TO</strong> the market — firms compete <strong>FOR</strong> the contract, not always inside it.' },

      flowTitle: 'HOW TENDERING WORKS',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F4DD}', title: 'Service specified', sub: 'Government sets requirements.' },
        { tone: 'purple', icon: '\u{1F3F7}️', title: 'Firms submit bids', sub: 'On price and quality.' },
        { tone: 'amber',  icon: '⚖️', title: 'Bids compared', sub: 'Best value is chosen.' },
        { tone: 'green',  icon: '\u{1F3C6}', title: 'Contract awarded', sub: 'Winner provides the service.' },
        { tone: 'blue',   icon: '\u{1F441}️', title: 'Performance monitored', sub: 'Held to the contract.' }
      ],

      causesLabel: 'WHY IT CAN HELP',
      causesEmoji: '\u{1F44D}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F4B7}', head: 'Cost discipline', body: 'Bidding drives prices down.' },
        { tone: 'blue',   icon: '✅', head: 'Quality targets', body: 'Bids must meet standards.' },
        { tone: 'purple', icon: '\u{1F6AA}', head: 'Contestability', body: 'Incumbents can lose the contract.' },
        { tone: 'amber',  icon: '\u{1F4A1}', head: 'Innovation', body: 'Bidders may offer better methods.' }
      ],

      causes2Label: 'THE RISKS',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Underbidding', body: 'Win low, then cut corners.' },
        { tone: 'rose', icon: '\u{1F4DC}', head: 'Complex contracts', body: 'Hard to specify everything.' },
        { tone: 'rose', icon: '\u{1F4B7}', head: 'Monitoring costs', body: 'Oversight is expensive.' },
        { tone: 'rose', icon: '⏱️', head: 'Short-term focus', body: 'Firms may cut long-run quality.' }
      ],

      pairLabel: 'Competition in the market vs for the market',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue',
        icon: '\u{1F3EA}',
        iconStyle: 'circle',
        label: 'In the market',
        points: ['Many firms compete continuously', 'Rivalry every day', 'Consumers switch freely']
      },
      right: {
        tone: 'green',
        icon: '\u{1F3C6}',
        iconStyle: 'circle',
        label: 'For the market',
        points: ['Firms compete to win the contract', 'One provider at a time', 'Re-tendered periodically']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Tendering tries to create competition where full head-to-head rivalry is limited or impossible.' },

      conclusion: { title: 'Big idea', text: 'Competitive tendering can make a single-service monopoly behave more contestably — by forcing firms to compete for the right to supply.' },
      examEdge: 'Distinguish competition <strong>in</strong> the market from competition <strong>for</strong> the market.'
    },

    /* ====================================================================
       CARD 5 – Privatisation
       Pattern: Side-by-side pair (state vs private) + supporters/criticisms
       ==================================================================== */
    {
      id: 'pc-privatisation',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'Privatisation',
      lede: 'Privatisation transfers a business or service from state ownership to the private sector, aiming to sharpen incentives.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The case for privatisation is mainly about incentives — but the results depend on <strong>competition and regulation</strong>.' },

      pairFirst: true,
      pairLabel: 'State-owned vs privatised',
      pairEmoji: '\u{1F504}',
      left: {
        tone: 'blue',
        icon: '\u{1F3DB}️',
        iconStyle: 'circle',
        label: 'State-owned',
        points: ['Public ownership', 'Service objectives', 'Weaker profit incentive']
      },
      right: {
        tone: 'green',
        icon: '\u{1F3E2}',
        iconStyle: 'circle',
        label: 'Privatised',
        points: ['Private ownership', 'Profit focus', 'Shareholder and market pressure']
      },

      causesLabel: 'WHY SUPPORTERS LIKE IT',
      causesEmoji: '\u{1F44D}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '⚡', head: 'Stronger incentives', body: 'Profit motive sharpens decisions.' },
        { tone: 'blue',   icon: '\u{1F4C9}', head: 'Efficiency', body: 'Pressure to cut costs and waste.' },
        { tone: 'purple', icon: '\u{1F4A1}', head: 'Investment & innovation', body: 'Access to private finance.' },
        { tone: 'amber',  icon: '\u{1F465}', head: 'Wider share ownership', body: 'Shares sold to the public.' }
      ],

      causes2Label: 'THE CRITICISMS',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'rose', icon: '\u{1F451}', head: 'Private monopoly', body: 'Without competition, just a private monopoly.' },
        { tone: 'rose', icon: '\u{1F4C8}', head: 'Higher prices', body: 'Profit focus can raise prices.' },
        { tone: 'rose', icon: '⚖️', head: 'Equity concerns', body: 'Service to less profitable users may suffer.' },
        { tone: 'rose', icon: '⏱️', head: 'Short-termism', body: 'Pressure for quick returns.' }
      ],

      causes3Label: 'PRIVATISATION IS NOT THE SAME AS DEREGULATION',
      causes3Emoji: '\u{1F50D}',
      causes3Style: 'icon-top',
      causes3Cols: 2,
      causes3: [
        { tone: 'blue',  icon: '\u{1F3E2}', head: 'Privatisation', body: 'Changes WHO owns the firm — state to private.' },
        { tone: 'green', icon: '✂️', head: 'Deregulation', body: 'Changes the RULES firms must follow.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Privatisation only boosts competition if the market is contestable — otherwise strong regulation is needed.' },

      conclusion: { title: 'Big idea', text: 'Privatisation changes ownership and incentives — but a private monopoly still needs competition or regulation.' },
      examEdge: 'Always explain that privatisation helps competition only when the market is <strong>contestable</strong>.'
    },

    /* ====================================================================
       CARD 6 – The whole story (authored — see header note)
       Pattern: Evidence-then-verdict (synthesis + final judgement)
       ==================================================================== */
    {
      id: 'pc-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole story',
      lede: 'Strong answers explain how each lever promotes competition — then judge whether more competition actually improves outcomes.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Promoting competition is a <strong>means, not an end</strong> — judge it by prices, quality, choice and innovation.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'rose',   icon: '\u{1F3E2}', title: 'Weak competition', sub: 'The problem.' },
        { tone: 'blue',   icon: '\u{1F39B}️', title: 'Choose a lever', sub: 'Deregulate, support, tender, privatise.' },
        { tone: 'purple', icon: '\u{1F6AA}', title: 'More entry & rivalry', sub: 'If barriers fall.' },
        { tone: 'amber',  icon: '⚡', title: 'Pressure on firms', sub: 'They must compete.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Better outcomes', sub: 'Prices, quality, innovation.' },
        { tone: 'green',  icon: '⚖️', title: 'Final judgement', sub: 'Did it actually help?' }
      ],

      causesLabel: 'THE FOUR LEVERS',
      causesEmoji: '\u{1F39B}️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '✂️', head: 'Deregulation', body: 'Remove barriers to entry.' },
        { tone: 'green',  icon: '\u{1F331}', head: 'Support small firms', body: 'Build credible rivals.' },
        { tone: 'purple', icon: '\u{1F4DD}', head: 'Competitive tendering', body: 'Compete for the contract.' },
        { tone: 'amber',  icon: '\u{1F3E2}', head: 'Privatisation', body: 'Sharpen incentives.' }
      ],

      causes2Label: 'WHEN IT WORKS BEST',
      causes2Emoji: '✅',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green', icon: '\u{1F6AA}', head: 'Barriers really fall', body: 'Entry becomes genuinely easier.' },
        { tone: 'blue',  icon: '\u{1F504}', head: 'Market is contestable', body: 'New rivals can actually challenge.' },
        { tone: 'amber', icon: '\u{1F6E1}️', head: 'Backed by regulation', body: 'Quality and natural monopolies covered.' }
      ],

      pairLabel: 'Why it helps vs why caution is needed',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '✅',
        iconStyle: 'circle',
        label: 'Why it helps',
        points: ['Lower prices and more choice', 'Sharper efficiency and innovation', 'Weaker incumbent power']
      },
      right: {
        tone: 'rose',
        icon: '⚠️',
        iconStyle: 'circle',
        label: 'Why caution is needed',
        points: ['Some markets are natural monopolies', 'Standards and equity can suffer', 'A private monopoly may just replace a public one']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Promoting competition only improves outcomes if it raises real contestability — otherwise regulation may do more good.' },

      conclusion: { title: 'Big idea', text: 'Promoting competition works when it makes markets genuinely contestable — judge it by outcomes, not by ideology.' },
      examEdge: 'Explain the lever, link it to contestability, then judge the effect on <strong>prices, quality, choice and innovation</strong>.'
    }
  ]
};
