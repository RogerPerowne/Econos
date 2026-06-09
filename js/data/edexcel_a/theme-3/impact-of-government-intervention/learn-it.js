/* ============================================================
   ECONOS – Impact of Government Intervention (Edexcel A 3.6.2)
   6 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   The evaluation companion to the government-intervention deck:
   judges the impact on prices, profit, efficiency, quality and
   choice, and the limits (capture, asymmetric information).

   Card patterns (no two consecutive repeat; one dominant tile-grid):
     1 Tile grid (why intervene) + toolkit flow + benefits/downsides pair
     2 Decompose (price/profit tools) + who-gains + trade-off flow
     3 Tile grid (four outcomes) + improve/problem + tension visual + test
     4 Tile grid (open markets) + competition flow + consumers hub + pair
     5 Side-by-side pair (capture vs asymmetric info) + problems + flow
     6 Evidence-then-verdict (evaluation chain + scorecard + judgement)

   New visuals (js/icons.js):
     - priceProfitTools     (Card 2 visualKey — two-panel tools)
     - qualityVsCostTension (Card 3 flowChart — firm pulled both ways)
     - consumerChoiceHub    (Card 4 flowChart — CONSUMERS 4-spoke hub)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'impact-of-government-intervention',
  topicNum: '3.6.2',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Impact of Government Intervention',
  estTime: '16 min',
  goal: 'Evaluate the impact of government intervention on prices, profit, efficiency, quality and choice — and judge its limits, including regulatory capture and asymmetric information',

  intro: {
    heroKey: 'heroFirm',
    summary: 'Government intervention is judged by its impact. A good answer traces how a policy changes prices, profit, efficiency, quality and choice — then weighs those gains against the costs and the risk of government failure. This deck works through each impact dimension with diagrams and worked tensions, then turns to the limits of intervention: regulatory capture, asymmetric information and unintended consequences. The recurring question is whether the policy improves outcomes more than it creates new problems.',
    doInThis: 'Set out the five outcomes intervention is judged by. Use diagrams to analyse the impact on prices and profit, efficiency and quality, and choice and competition. Explain why intervention can fail — capture, information gaps and unintended consequences. Finally, build a balanced evaluation that compares intervention with the realistic market alternative.',
    outcomes: [
      'Identify the outcomes intervention is judged by',
      'Analyse the impact on prices and profit',
      'Analyse the impact on efficiency and quality',
      'Analyse the impact on choice and competition',
      'Explain the limits — capture and asymmetric information',
      'Build a balanced evaluation of intervention'
    ],
    tip: 'The phrase to reach for is judge the trade-offs — intervention is only worthwhile if it improves outcomes overall.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 16 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – The big picture
       Pattern: Tile grid (why intervene) + toolkit flow + benefits/downsides
       ==================================================================== */
    {
      id: 'igi-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Government intervention — the big picture',
      lede: 'Governments intervene to change how markets work when firms have too much power or competition is weak.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Intervention tries to improve market outcomes — but every policy <strong>changes incentives</strong> as well as outcomes.' },

      causesFirst: true,
      causesLabel: 'WHY GOVERNMENTS INTERVENE',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 5,
      causes: [
        { tone: 'blue',   icon: '\u{1F3F7}️', head: 'Prices', body: 'Curb high or unfair prices.' },
        { tone: 'amber',  icon: '\u{1F4B7}', head: 'Profit', body: 'Limit excess profit.' },
        { tone: 'blue',   icon: '⚙️', head: 'Efficiency', body: 'Raise productive and allocative efficiency.' },
        { tone: 'purple', icon: '\u{1F6E1}️', head: 'Quality', body: 'Protect service standards.' },
        { tone: 'green',  icon: '\u{1F6D2}', head: 'Choice', body: 'Protect choice and competition.' }
      ],

      flowTitle: 'THE POLICY TOOLKIT',
      flowEmoji: '\u{1F9F0}',
      flowSep: '→',
      flow: [
        { tone: 'blue',   icon: '\u{1F3DB}️', title: 'Merger control', sub: 'Block mergers.' },
        { tone: 'purple', icon: '\u{1F3F7}️', title: 'Price regulation', sub: 'Caps.' },
        { tone: 'amber',  icon: '\u{1F4B7}', title: 'Profit regulation', sub: 'Limit returns.' },
        { tone: 'green',  icon: '✅', title: 'Quality standards', sub: 'Minimums.' },
        { tone: 'blue',   icon: '\u{1F3AF}', title: 'Performance targets', sub: 'Set goals.' },
        { tone: 'green',  icon: '\u{1F465}', title: 'Pro-competition', sub: 'Ease entry.' }
      ],

      pairLabel: 'Potential benefits vs possible downsides',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '\u{1F44D}',
        iconStyle: 'circle',
        label: 'Potential benefits',
        points: ['Lower prices for consumers', 'Less monopoly abuse and unfair pricing', 'Better quality and more choice']
      },
      right: {
        tone: 'rose',
        icon: '⚠️',
        iconStyle: 'circle',
        label: 'Possible downsides',
        points: ['Weaker incentives to invest or innovate', 'Information problems for regulators', 'Capture and unintended consequences']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The same policy can help one objective but hurt another — economics is about judging the trade-offs.' },

      conclusion: { title: 'Big idea', text: 'Government intervention is judged by how it affects prices, profit, efficiency, quality and choice.' },
      examEdge: 'Good evaluation always weighs benefits against <strong>unintended consequences and government failure</strong>.'
    },

    /* ====================================================================
       CARD 2 – Prices and profit
       Pattern: Decompose (price/profit tools) + who-gains + trade-off flow
       ==================================================================== */
    {
      id: 'igi-prices-profit',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'Prices and profit',
      lede: 'Regulation often aims to lower prices or limit excess profit — but changing prices also changes incentives.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'When regulation squeezes price or profit, consumers may gain — but firms may <strong>invest less</strong> if returns fall too far.' },

      visualKey: 'priceProfitTools',
      visualLabel: 'TWO CORE TOOLS',
      visualEmoji: '\u{1F3AF}',

      causesFirst: true,
      causesLabel: 'WHO GAINS AND WHO LOSES?',
      causesEmoji: '\u{1F465}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F6D2}', head: 'Consumers', body: 'Lower bills and fairer pricing.' },
        { tone: 'purple', icon: '\u{1F3E2}', head: 'Firms', body: 'Lower retained profit and weaker incentives.' },
        { tone: 'blue',   icon: '\u{1F3DB}️', head: 'Regulators', body: 'Must set the right level.' },
        { tone: 'amber',  icon: '\u{1F4C8}', head: 'Dynamic effects', body: 'Lower prices today may mean less investment tomorrow.' }
      ],

      flowTitle: 'THE TRADE-OFF',
      flowEmoji: '⚖️',
      flow: [
        { tone: 'blue',   icon: '\u{1F6E1}️', title: 'Regulation tightened', sub: 'Caps or profit limits.' },
        { tone: 'amber',  icon: '\u{1F4C9}', title: 'Price / profit falls', sub: 'Returns squeezed.' },
        { tone: 'green',  icon: '\u{1F464}', title: 'Consumer welfare rises', sub: 'In the short run.' },
        { tone: 'rose',   icon: '\u{1F4C9}', title: 'Investment may weaken', sub: 'In the long run.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The best policy protects consumers without crushing incentives to innovate, maintain assets or improve service.' },

      conclusion: { title: 'Big idea', text: 'Price and profit regulation are judged by whether they improve consumer welfare more than they damage incentives.' },
      examEdge: 'Always evaluate <strong>both sides</strong> — lower prices help consumers, but weaker profit can reduce investment and long-run efficiency.'
    },

    /* ====================================================================
       CARD 3 – Efficiency and quality
       Pattern: Tile grid (four outcomes) + improve/problem + tension + test
       ==================================================================== */
    {
      id: 'igi-efficiency-quality',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'Efficiency and quality',
      lede: 'Intervention can push firms towards better outcomes — but it can also create new inefficiencies.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Good regulation tries to raise productive, allocative or dynamic efficiency <strong>while protecting service quality</strong>.' },

      causesFirst: true,
      causesLabel: 'FOUR OUTCOMES TO WATCH',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '⚙️', head: 'Productive efficiency', body: 'Pressure to cut waste and avoidable cost.' },
        { tone: 'amber',  icon: '\u{1F4CA}', head: 'Allocative efficiency', body: 'Prices and output move closer to consumer needs.' },
        { tone: 'purple', icon: '\u{1F4A1}', head: 'Dynamic efficiency', body: 'Innovation may rise or fall depending on incentives.' },
        { tone: 'green',  icon: '\u{1F6E1}️', head: 'Quality', body: 'Standards can improve when firms are monitored.' }
      ],

      causes2Label: 'HOW POLICIES AFFECT THEM',
      causes2Emoji: '⚖️',
      causes2Style: 'icon-top',
      causes2Cols: 2,
      causes2: [
        { tone: 'green', icon: '\u{1F44D}', head: 'Can improve outcomes', body: 'Price caps with efficiency targets, profit regulation with service obligations, quality standards and performance targets.' },
        { tone: 'rose',  icon: '⚠️', head: 'Can create problems', body: 'Compliance costs, box-ticking, weaker investment incentives, and regulators chasing the wrong metrics.' }
      ],

      flowChart: {
        svgKey: 'qualityVsCostTension',
        label: 'QUALITY VS COST CUTTING',
        emoji: '⚖️',
        caption: 'The firm is pulled both ways — regulation tries to keep cost discipline without sacrificing quality.'
      },

      causes3Label: 'THE EVALUATION TEST',
      causes3Emoji: '\u{1F9EA}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'blue',   icon: '\u{1F50D}', head: 'What changed?', body: 'Identify the key change the intervention caused.' },
        { tone: 'purple', icon: '\u{1F4CA}', head: 'Which efficiency?', body: 'Decide whether productive, allocative or dynamic efficiency changed.' },
        { tone: 'green',  icon: '\u{1F6E1}️', head: 'Did quality move?', body: 'Assess the effect on service quality and standards.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Do not assume intervention improves efficiency automatically — judge the evidence and the incentives.' },

      conclusion: { title: 'Big idea', text: 'Intervention is successful only if it improves efficiency and quality overall, not just on paper.' },
      examEdge: 'Name the efficiency type explicitly — <strong>productive, allocative or dynamic</strong> — and then evaluate the effect on quality.'
    },

    /* ====================================================================
       CARD 4 – Choice, competition and contestability
       Pattern: Tile grid (open markets) + competition flow + consumers hub + pair
       ==================================================================== */
    {
      id: 'igi-choice-competition',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'Choice, competition and contestability',
      lede: 'Some policies aim not to control firms directly, but to make markets more competitive.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'If intervention makes entry easier or weakens market power, consumers may get <strong>more choice</strong> and firms face stronger pressure.' },

      causesFirst: true,
      causesLabel: 'HOW GOVERNMENT CAN OPEN MARKETS',
      causesEmoji: '\u{1F6AA}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F331}', head: 'Support small businesses', body: 'Grants, finance and advice → more firms can enter.' },
        { tone: 'amber',  icon: '✂️', head: 'Deregulation', body: 'Simpler rules, fewer barriers → more rivalry.' },
        { tone: 'blue',   icon: '\u{1F4DD}', head: 'Competitive tendering', body: 'Rival firms bid → best offers win, incentives sharpen.' },
        { tone: 'purple', icon: '\u{1F3E2}', head: 'Privatisation', body: 'State assets to the private sector → sharper incentives.' }
      ],

      flowTitle: 'THE COMPETITION STORY',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F6AA}', title: 'Lower barriers', sub: 'More rivalry.' },
        { tone: 'amber',  icon: '⚡', title: 'Firms face pressure', sub: 'They must respond.' },
        { tone: 'blue',   icon: '\u{1F4C9}', title: 'Prices may fall', sub: 'Toward competitive.' },
        { tone: 'purple', icon: '\u{1F6D2}', title: 'Choice may rise', sub: 'More options.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Efficiency may improve', sub: 'Less waste.' }
      ],

      flowChart: {
        svgKey: 'consumerChoiceHub',
        label: 'IMPACT ON CHOICE',
        emoji: '\u{1F465}',
        caption: 'More competition can widen choice — but it can also duplicate effort or leave gaps.'
      },

      pairLabel: 'High contestability vs low contestability',
      pairEmoji: '\u{1F6E1}️',
      left: {
        tone: 'green',
        icon: '✅',
        iconStyle: 'circle',
        label: 'High contestability',
        points: ['The threat of entry keeps firms sharp', 'Prices and quality stay competitive', 'Profits are disciplined without a monopoly']
      },
      right: {
        tone: 'rose',
        icon: '⚠️',
        iconStyle: 'circle',
        label: 'Low contestability',
        points: ['Dominant firms keep power', 'Weak entry threat', 'Market power even without outright monopoly']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'More competition is not always the same as more welfare — a poorly designed reform can cause cream-skimming, instability or patchy coverage.' },

      conclusion: { title: 'Big idea', text: 'Policies that promote competition are judged by whether they create better prices, quality and choice — without creating new problems.' },
      examEdge: 'If the question mentions choice, link it to <strong>entry, rivalry and contestability</strong> — then evaluate whether consumers really gain.'
    },

    /* ====================================================================
       CARD 5 – Why intervention can fail
       Pattern: Side-by-side pair (capture vs asymmetric info) + problems + flow
       ==================================================================== */
    {
      id: 'igi-why-fail',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'Why intervention can fail',
      lede: 'Even well-meant regulation has limits — especially when regulators lack independence or information.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Government failure happens when intervention creates <strong>worse outcomes</strong> than the market problem it was meant to solve.' },

      pairFirst: true,
      pairLabel: 'Regulatory capture vs asymmetric information',
      pairEmoji: '⚠️',
      left: {
        tone: 'blue',
        icon: '\u{1F91D}',
        iconStyle: 'circle',
        label: 'Regulatory capture',
        points: ['Regulators may be influenced by the firms they regulate', 'Lobbying and revolving doors soften enforcement', 'Policy may protect producers, not consumers']
      },
      right: {
        tone: 'purple',
        icon: '\u{1F575}️',
        iconStyle: 'circle',
        label: 'Asymmetric information',
        points: ['Regulators may not know true costs, quality or demand', 'Firms often know more than the regulator', 'Targets and caps may be set too high or too low']
      },

      causesFirst: true,
      causesLabel: 'OTHER PRACTICAL PROBLEMS',
      causesEmoji: '\u{1F6E0}️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F4CB}', head: 'Administrative cost', body: 'Rules, reporting and compliance use resources.' },
        { tone: 'amber',  icon: '⏳', head: 'Delay', body: 'Regulation takes time to design and adjust.' },
        { tone: 'green',  icon: '⚠️', head: 'Unintended consequences', body: 'Policies can create new problems elsewhere.' },
        { tone: 'purple', icon: '\u{1F3DB}️', head: 'Political pressure', body: 'Pressure from voters, politicians or interests.' }
      ],

      flowTitle: 'HOW FAILURE HAPPENS',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F50D}', title: 'Market problem identified', sub: 'A real issue exists.' },
        { tone: 'amber',  icon: '\u{1F4DD}', title: 'Policy designed', sub: 'With imperfect information.' },
        { tone: 'purple', icon: '\u{1F465}', title: 'Firms respond strategically', sub: 'They game the rules.' },
        { tone: 'rose',   icon: '\u{1F4C9}', title: 'Outcome weaker than expected', sub: 'Capture, gaps, distortions.' }
      ],

      causes3Label: 'THE KEY QUESTION',
      causes3Emoji: '⚖️',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'blue',   icon: '\u{1F6E1}️', head: 'Is the regulator independent?', body: 'Free from capture and lobbying?' },
        { tone: 'amber',  icon: 'ℹ️', head: 'Does it have enough information?', body: 'Can it set the right level?' },
        { tone: 'green',  icon: '⚖️', head: 'Are the gains bigger than the new distortions?', body: 'Net of all costs.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Intervention should be compared with realistic market outcomes — not with a fantasy of perfect regulation.' },

      conclusion: { title: 'Big idea', text: 'The main limits to intervention are capture, information problems and unintended consequences.' },
      examEdge: 'Strong evaluation does not just praise intervention — it explains <strong>why regulation may misfire</strong>.'
    },

    /* ====================================================================
       CARD 6 – The whole story
       Pattern: Evidence-then-verdict (evaluation chain + scorecard + judgement)
       ==================================================================== */
    {
      id: 'igi-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole story',
      lede: 'Strong evaluation weighs the impact of intervention on outcomes — and then tests whether the policy itself may fail.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Intervention is worthwhile only if it improves market outcomes overall <strong>after allowing for trade-offs and government failure</strong>.' },

      flowTitle: 'THE EVALUATION CHAIN',
      flowEmoji: '\u{1F3AF}',
      flow: [
        { tone: 'rose',   icon: '\u{1F3E2}', title: 'Market power', sub: 'Too much power or high barriers.' },
        { tone: 'blue',   icon: '\u{1F3DB}️', title: 'Policy chosen', sub: 'An intervention to address it.' },
        { tone: 'amber',  icon: '\u{1F4B7}', title: 'Prices & profit change', sub: 'The first impact.' },
        { tone: 'purple', icon: '⚙️', title: 'Efficiency, quality, choice shift', sub: 'The wider effects.' },
        { tone: 'amber',  icon: '⚠️', title: 'Limits appear', sub: 'Capture, info, side effects.' },
        { tone: 'green',  icon: '⚖️', title: 'Final judgement', sub: 'Weigh it all up.' }
      ],

      causesLabel: 'THE SCORECARD',
      causesEmoji: '\u{1F4CB}',
      causesStyle: 'icon-top',
      causesCols: 5,
      causes: [
        { tone: 'blue',   icon: '\u{1F3F7}️', head: 'Prices', body: 'Often lower.' },
        { tone: 'amber',  icon: '\u{1F4B7}', head: 'Profit', body: 'Often lower or more constrained.' },
        { tone: 'blue',   icon: '⚙️', head: 'Efficiency', body: 'May improve, but not guaranteed.' },
        { tone: 'purple', icon: '\u{1F6E1}️', head: 'Quality', body: 'May rise if monitored well.' },
        { tone: 'green',  icon: '\u{1F6D2}', head: 'Choice', body: 'May rise when competition strengthens.' }
      ],

      causes2Label: 'DO NOT FORGET THE LIMITS',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '\u{1F91D}', head: 'Regulatory capture', body: 'Regulators influenced by the firms they regulate.' },
        { tone: 'rose', icon: 'ℹ️', head: 'Asymmetric information', body: 'Regulators may lack full or timely information.' },
        { tone: 'rose', icon: '\u{1F500}', head: 'Unintended consequences', body: 'Policies can create side effects that cut welfare.' }
      ],

      causes3Label: 'HOW TO WRITE IT',
      causes3Emoji: '✍️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'purple', icon: '\u{1F4C4}', head: '1 · Define the policy', body: 'Name the intervention and the problem.' },
        { tone: 'purple', icon: '\u{1F3AF}', head: '2 · Explain the impact', body: 'How it changes prices, profit or behaviour.' },
        { tone: 'purple', icon: '\u{1F4CA}', head: '3 · Assess the outcomes', body: 'Prices, profit, efficiency, quality, choice.' },
        { tone: 'purple', icon: '⚖️', head: '4 · Evaluate the limits', body: 'Capture, information, side effects, net impact.' }
      ],

      pairLabel: 'When intervention works vs when it disappoints',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '✅',
        iconStyle: 'circle',
        label: 'When intervention works',
        points: ['Curbs abuse of market power', 'Protects consumers', 'Improves outcomes overall']
      },
      right: {
        tone: 'rose',
        icon: '⚠️',
        iconStyle: 'circle',
        label: 'When it disappoints',
        points: ['Distorts incentives', 'Suffers from capture or poor information', 'Creates costs bigger than the benefits']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Compare intervention with the realistic market alternative — not with a fantasy of perfect regulation.' },

      conclusion: { title: 'Big idea', text: 'The right question is not whether government intervenes, but whether that intervention improves outcomes more than it creates new problems.' },
      examEdge: 'Track the impact on <strong>prices, profit, efficiency, quality and choice</strong>, then evaluate using capture and asymmetric information.'
    }
  ]
};
