/* ============================================================
   ECONOS – Controlling Market Power (Edexcel A 3.6.1)
   5 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   (Second of the government-intervention sub-topics.)

   Card patterns (no two consecutive repeat; one dominant tile-grid):
     1 Side-by-side pair (the two jobs) + why-it-matters + distinctions
     2 Tile grid (why worry) + merger decision flow + arguments
     3 Interactive price-cap diagram + tools + what-happens flow
     4 Comparison (two tools) + why-price-not-enough + monitoring flow
     5 Evidence-then-verdict (decision chain + final judgement)

   New visual (js/icons.js):
     - priceCapMonopoly  (Card 3 interactive, pcm-1..pcm-2)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'controlling-market-power',
  topicNum: '3.6.1',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Controlling Market Power',
  estTime: '14 min',
  goal: 'Explain how governments control market power — merger control, price and profit regulation, and quality standards — and evaluate the trade-offs',

  intro: {
    heroKey: 'heroControlPower',
    summary: 'When firms gain too much market power, governments can act in two ways: stop it getting worse by controlling mergers, or regulate the power that already exists through price caps, profit limits and quality standards. This deck works through each tool — merger control, price and profit regulation, and quality and performance targets — using the price-cap diagram to show how regulation can lower prices and raise output, before weighing the trade-offs against the risk of government failure.',
    doInThis: 'Set out the two jobs of controlling market power. Explain how merger control works and when a merger is blocked. Use the price-cap diagram to show how regulating a monopoly can lower price and raise output. Explain quality standards and performance targets, then judge whether each intervention improves outcomes overall.',
    outcomes: [
      'Explain the two ways governments control market power',
      'Describe how merger control works',
      'Use the price-cap diagram to analyse monopoly regulation',
      'Explain quality standards and performance targets',
      'Evaluate the trade-offs of controlling market power'
    ],
    tip: 'The phrase to reach for is mimic competition — regulation tries to copy competitive pressure without killing investment.',
    stages: [
      { num: 1, name: 'Learn',  sub: '5 cards \xb7 14 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Controlling market power: the big picture
       Pattern: Side-by-side pair (the two jobs) + why-it-matters + distinctions
       ==================================================================== */
    {
      id: 'cmp-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 5',
      title: 'Controlling market power — the big picture',
      lede: 'Governments intervene when market power threatens higher prices, lower output, worse quality or weaker competition.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Two broad jobs: <strong>stop market power getting worse</strong>, or <strong>regulate it</strong> where it already exists.' },

      pairFirst: true,
      pairLabel: 'Stop it getting worse vs regulate the power',
      pairEmoji: '\u{1F6E0}️',
      left: {
        tone: 'blue',
        icon: '\u{1F6D1}',
        iconStyle: 'circle',
        label: '1 · Stop it getting worse',
        points: ['Merger control', 'Investigate, condition or block', 'Acts before a firm gets too big']
      },
      right: {
        tone: 'purple',
        icon: '\u{1F3DB}️',
        iconStyle: 'circle',
        label: '2 · Regulate monopoly power',
        points: ['Price and profit regulation', 'Quality standards', 'Performance targets']
      },

      causesLabel: 'WHY IT MATTERS',
      causesEmoji: '\u{1F4A1}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F6D2}', head: 'Consumers', body: 'Prices, choice and quality.' },
        { tone: 'blue',   icon: '\u{1F3ED}', head: 'Rival firms', body: 'Fairer access and competition.' },
        { tone: 'purple', icon: '\u{1F69A}', head: 'Suppliers', body: 'Bargaining power and fair treatment.' },
        { tone: 'amber',  icon: '\u{1F310}', head: 'The economy', body: 'Efficiency, innovation, incentives.' }
      ],

      causes3Label: 'QUICK DISTINCTIONS',
      causes3Emoji: '\u{1F50D}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'blue',   icon: '\u{1F517}', head: 'Merger control', body: 'Preventive — acts before market power grows.' },
        { tone: 'purple', icon: '\u{1F4CF}', head: 'Monopoly regulation', body: 'Limits abuse of power that already exists.' },
        { tone: 'green',  icon: '\u{1F3ED}', head: 'Natural monopoly', body: 'One firm is efficient — regulate, don’t break up.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Intervention is not anti-business by default — it aims to limit harm from market power.' },

      conclusion: { title: 'Big idea', text: 'Controlling market power means preventing harmful mergers and regulating the power that remains.' },
      examEdge: 'Start by identifying the problem — merger, monopoly power, or natural monopoly — then match the policy.'
    },

    /* ====================================================================
       CARD 2 – Merger control
       Pattern: Tile grid (why worry) + merger decision flow + arguments
       ==================================================================== */
    {
      id: 'cmp-merger-control',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 5',
      title: 'Merger control',
      lede: 'Governments try to stop mergers that would make markets less competitive — before the damage is done.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Merger control is <strong>preventive</strong> — it acts before a bigger firm can raise prices or weaken rivals.' },

      causesFirst: true,
      causesLabel: 'WHY GOVERNMENTS WORRY',
      causesEmoji: '\u{2753}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'rose',   icon: '\u{1F4C8}', head: 'Higher prices', body: 'Less rivalry lets the firm charge more.' },
        { tone: 'amber',  icon: '\u{1F4C9}', head: 'Less choice', body: 'A bigger firm may cut variety or service.' },
        { tone: 'blue',   icon: '\u{1F6A7}', head: 'Barriers to entry', body: 'A larger incumbent can deter new rivals.' },
        { tone: 'purple', icon: '\u{1F634}', head: 'Weaker innovation', body: 'Less pressure means less drive to improve.' }
      ],

      flowTitle: 'THE DECISION FLOW',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F4DD}', title: 'Merger proposed', sub: 'Firms want to combine.' },
        { tone: 'purple', icon: '\u{1F50D}', title: 'Investigate impact', sub: 'Regulator assesses competition.' },
        { tone: 'amber',  icon: '⚖️', title: 'Competition fall a lot?', sub: 'The key test.' },
        { tone: 'rose',   icon: '\u{1F6A6}', title: 'Approve, condition or block', sub: 'The decision.' }
      ],

      causes3Label: 'COMMON ARGUMENTS FOR THE MERGER',
      causes3Emoji: '\u{1F4AC}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'green', icon: '\u{1F4C8}', head: 'Economies of scale', body: 'Lower average costs could mean lower prices.' },
        { tone: 'blue',  icon: '\u{1F4B0}', head: 'Stronger investment', body: 'More finance and capacity for R&D.' },
        { tone: 'amber', icon: '\u{1F30D}', head: 'Global competition', body: 'A larger firm may compete better abroad.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Outcomes include selling assets, brands, or parts of the business — not just a simple yes or no.' },

      conclusion: { title: 'Big idea', text: 'Merger control weighs the loss of competition against any efficiency gains — and can attach conditions.' },
      examEdge: 'A merger is not bad just because firms get bigger — the key issue is whether <strong>competition is weakened</strong>.'
    },

    /* ====================================================================
       CARD 3 – Regulating monopoly price and profit
       Pattern: Interactive price-cap diagram + tools + what-happens flow
       ==================================================================== */
    {
      id: 'cmp-price-profit',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 5',
      title: 'Regulating monopoly price and profit',
      lede: 'When one firm already has strong market power, governments may cap prices or limit excessive profit.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The aim is to <strong>mimic competitive pressure</strong> without destroying the firm’s incentive to invest.' },

      interactiveDiagram: {
        svgKey: 'priceCapMonopoly',
        label: 'THE PRICE-CAP STORY — step through it',
        emoji: '\u{1F4C9}',
        layers: ['pcm-1', 'pcm-2'],
        views: [
          {
            label: 'The monopoly outcome',
            tone: 'rose',
            head: 'Unregulated monopoly',
            body: 'Left alone, the monopoly sets <strong>MR = MC</strong>: a high price <strong>Pm</strong> and a restricted output <strong>Qm</strong>.',
            show: ['pcm-1']
          },
          {
            label: 'Impose a price cap',
            tone: 'purple',
            head: 'A price cap',
            body: 'A cap below Pm forces a <strong>lower price</strong>. The firm now produces more — up to where the cap meets MC (<strong>Qc</strong>). Output rises and price falls.',
            analysis: 'A well-set cap mimics competition — lower price, higher output, closer to allocative efficiency. Set too low, though, it can squeeze the investment the market needs.',
            show: ['pcm-1', 'pcm-2']
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'TWO REGULATION TOOLS',
      causesEmoji: '\u{1F6E0}️',
      causesStyle: 'icon-top',
      causesCols: 2,
      causes: [
        { tone: 'blue',   icon: '\u{1F4CF}', head: 'Price regulation', body: 'Set a maximum price or a cap (e.g. RPI − X). Protects consumers from excessive prices and keeps services affordable.' },
        { tone: 'purple', icon: '\u{1F4B7}', head: 'Profit regulation', body: 'Limit the return a firm can earn to a fair level, so a dominant firm cannot make excessive profit. Harder to set in practice.' }
      ],

      flowTitle: 'WHAT HAPPENS WITH A PRICE CAP',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'purple', icon: '\u{1F4CF}', title: 'Price cap (Pc)', sub: 'Set below the monopoly price.' },
        { tone: 'blue',   icon: '\u{1F4C9}', title: 'Lower price', sub: 'Consumers pay less.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Higher output', sub: 'The firm produces more.' },
        { tone: 'green',  icon: '\u{1F6D2}', title: 'Consumer gain', sub: 'Closer to the efficient level.' }
      ],

      causes3Label: 'STRENGTHS AND RISKS',
      causes3Emoji: '⚖️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'green', icon: '\u{1F4C9}', head: 'Lower prices', body: 'Consumers gain from the cap.' },
        { tone: 'green', icon: '\u{1F3AF}', head: 'Better efficiency', body: 'Output moves toward P = MC.' },
        { tone: 'rose',  icon: '\u{1F4C9}', head: 'Weak investment risk', body: 'A tight cap can deter investment.' },
        { tone: 'amber', icon: 'ℹ️', head: 'Information problem', body: 'Regulators may lack full cost data.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'RPI − X price caps force efficiency: the firm keeps the savings it makes by beating the cap.' },

      conclusion: { title: 'Big idea', text: 'A price cap can push a monopoly toward the competitive outcome — lower price and higher output.' },
      examEdge: 'Always explain the transmission mechanism — cap → price or profit → output, efficiency and investment.'
    },

    /* ====================================================================
       CARD 4 – Quality standards and performance targets
       Pattern: Comparison (two tools) + why-price-not-enough + monitoring flow
       ==================================================================== */
    {
      id: 'cmp-quality-standards',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 5',
      title: 'Quality standards and performance targets',
      lede: 'Price is not the whole story — regulators may also protect service quality, reliability and long-run performance.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'If regulators focus only on price, firms may cut corners elsewhere — <strong>quality regulation closes that gap</strong>.' },

      causesFirst: true,
      causesLabel: 'WHY PRICE IS NOT ENOUGH',
      causesEmoji: '\u{2753}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F4CF}', head: 'Tighten prices', body: 'A price cap squeezes the firm.' },
        { tone: 'amber',  icon: '✂️', head: 'Cut corners', body: 'It may save money by cutting quality.' },
        { tone: 'rose',   icon: '⚠️', head: 'Service cuts', body: 'Reliability and safety can suffer.' },
        { tone: 'purple', icon: '\u{1F441}️', head: 'Need oversight', body: 'Quality must be watched too.' }
      ],

      causes2Label: 'THE TWO TOOLS',
      causes2Emoji: '\u{1F6E0}️',
      causes2Style: 'icon-top',
      causes2Cols: 2,
      causes2: [
        { tone: 'green', icon: '✅', head: 'Quality standards', body: 'Minimum standards a firm must meet — safety, reliability, coverage and customer service.' },
        { tone: 'blue',  icon: '\u{1F3AF}', head: 'Performance targets', body: 'Measurable targets that make firms accountable — punctuality, waiting times, complaints and investment.' }
      ],

      flowTitle: 'HOW MONITORING WORKS',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F4CB}', title: 'Set standards', sub: 'Define what good looks like.' },
        { tone: 'purple', icon: '\u{1F4CA}', title: 'Measure results', sub: 'Collect the data.' },
        { tone: 'amber',  icon: '⚖️', title: 'Compare with target', sub: 'Did the firm meet it?' },
        { tone: 'green',  icon: '\u{1F3C5}', title: 'Reward or penalty', sub: 'Hold the firm to account.' }
      ],

      causes3Label: 'BENEFITS AND LIMITS',
      causes3Emoji: '⚖️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'green', icon: '\u{1F6E1}️', head: 'Protects consumers', body: 'Guards quality, not just price.' },
        { tone: 'blue',  icon: '\u{1F4CA}', head: 'Makes it measurable', body: 'Outcomes become accountable.' },
        { tone: 'rose',  icon: '☑️', head: 'Box-ticking risk', body: 'Firms may game the targets.' },
        { tone: 'amber', icon: '\u{1F4B7}', head: 'Costly to monitor', body: 'Oversight uses real resources.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A firm can meet the letter of a target but miss the spirit — regulators must choose measures carefully.' },

      conclusion: { title: 'Big idea', text: 'Quality and performance regulation stops a price cap turning into worse service.' },
      examEdge: 'Government intervention is a trade-off — not one single policy — the skill is matching the right tool to the right problem.'
    },

    /* ====================================================================
       CARD 5 – The whole story
       Pattern: Evidence-then-verdict (decision chain + final judgement)
       ==================================================================== */
    {
      id: 'cmp-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 5',
      title: 'The whole story',
      lede: 'Strong answers identify the source of market power, match the intervention, and then judge the trade-offs.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Good evaluation asks not just whether intervention happens, but whether it <strong>improves outcomes overall</strong>.' },

      flowTitle: 'THE DECISION CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'rose',   icon: '\u{1F3E2}', title: 'Market power problem', sub: 'Where is the harm?' },
        { tone: 'amber',  icon: '\u{1F50D}', title: 'Identify type', sub: 'Merger, monopoly or quality.' },
        { tone: 'blue',   icon: '\u{1F6E0}️', title: 'Choose policy', sub: 'Match a tool to it.' },
        { tone: 'purple', icon: '\u{1F52E}', title: 'Predict effects', sub: 'Price, output, quality.' },
        { tone: 'green',  icon: '\u{1F465}', title: 'Assess stakeholders', sub: 'Winners and losers.' },
        { tone: 'green',  icon: '⚖️', title: 'Final judgement', sub: 'Do benefits win?' }
      ],

      causesLabel: 'QUICK MATCHES',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F517}', head: 'Merger threat', body: '→ merger control.' },
        { tone: 'purple', icon: '\u{1F4CF}', head: 'Strong monopoly', body: '→ price cap or profit limit.' },
        { tone: 'green',  icon: '✅', head: 'Quality concern', body: '→ standards and targets.' },
        { tone: 'amber',  icon: '\u{1F3ED}', head: 'Natural monopoly', body: '→ regulate, don’t break up.' }
      ],

      causes2Label: 'WHAT MAKES EVALUATION STRONG',
      causes2Emoji: '\u{1F9EA}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'blue',   icon: '\u{1F3AF}', head: 'Effectiveness', body: 'Does it actually fix the problem?' },
        { tone: 'green',  icon: '\u{1F4B7}', head: 'Efficiency', body: 'At what cost, and to whom?' },
        { tone: 'rose',   icon: '⚠️', head: 'Government failure', body: 'Could the cure be worse?' }
      ],

      pairLabel: 'Why intervention may help vs why caution is needed',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '✅',
        iconStyle: 'circle',
        label: 'Why it may help',
        points: ['Lower prices and better quality', 'Fairer, more competitive markets', 'Protects consumers and rivals']
      },
      right: {
        tone: 'rose',
        icon: '⚠️',
        iconStyle: 'circle',
        label: 'Why caution is needed',
        points: ['Regulatory capture and lobbying', 'Information gaps and lags', 'Caps can deter investment']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'No intervention is perfectly free — the real test is whether it improves on the unregulated outcome.' },

      conclusion: { title: 'Big idea', text: 'Controlling market power means matching the tool to the problem — then judging whether the benefits beat the costs.' },
      examEdge: 'Diagnose the problem, explain the policy, trace the effects, then make a contextual final judgement.'
    }
  ]
};
