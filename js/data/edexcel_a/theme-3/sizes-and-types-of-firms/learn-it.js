/* ============================================================
   ECONOS – Sizes & Types of Firms (Edexcel A 3.1.1)
   7 cards · interactive-first build
   Maps the spec sub-points: 3.1.1a (why firms stay small or grow),
   3.1.1b (divorce of ownership from control – principal-agent),
   3.1.1c (public vs private sector organisations),
   3.1.1d (profit vs not-for-profit).

   Card patterns (no two consecutive repeat):
     1 Decompose (4-lens hub) + flow chain + tile grid
     2 Decompose (5-measure hub) + tile grid + flow chain
     3 Decompose (6-reason hub) + side-by-side pair + tile grid
     4 Decompose (growth flywheel) + tile grid + side-by-side pair
     5 Decompose (ownership + objectives) + comparison table
     6 Sequential flow chain + side-by-side pair + flow chain
     7 Evidence-then-verdict (chain + mistakes + how-to-write)

   All visuals carried by hand-rolled icons.js hub family (firmFourLensesHub,
   firmSizeMeasuresHub, firmStaySmallHub, firmGrowthFlywheel,
   firmOwnershipObjectives) – built to share the rationalAgentHub /
   demandDeterminantsHub grammar so the lesson reads as part of the same
   visual family.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'sizes-and-types-of-firms',
  topicNum: '3.1.1',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Sizes and Types of Firms',
  estTime: '16 min',
  goal: 'Analyse a firm by its size, type, objectives and who controls it',

  intro: {
    heroKey: 'heroFirm',
    summary: 'Firms differ in size, ownership and objectives, and those differences explain how they behave. Some firms stay deliberately small; others grow aggressively. Some chase profit for shareholders; others reinvest every surplus into a mission. In large companies, ownership and control can come apart – producing the principal-agent problem. This topic gives you the four lenses (size, type, objectives, control) and the language to use them in the exam.',
    doInThis: 'Measure firm size in five different ways, classify firms by ownership and by objective, explain why some firms stay small and others grow, and define the principal-agent problem.',
    outcomes: [
      'Use five measures of firm size and explain when each is appropriate',
      'Distinguish private from public sector, and for-profit from not-for-profit',
      'Explain why some firms stay small and why others grow',
      'Define the divorce of ownership and control and the principal-agent problem'
    ],
    tip: 'Size is one lens; type, objectives and control are three more. Strong answers use all four.',
    stages: [
      { num: 1, name: 'Learn',  sub: '7 cards \xb7 16 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Sizes and types of firms – the big picture
       Pattern: Decompose + flow chain + tile grid
       ==================================================================== */
    {
      id: 'firms-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 7',
      title: 'Sizes and types of firms – the big picture',
      lede: 'Firms differ in size, ownership and objectives. Those differences help explain how they behave, why some stay small, and why others grow.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A firm can be analysed by its <strong>size</strong>, its <strong>type</strong>, its <strong>objectives</strong> and <strong>who controls it</strong>.' },

      visualKey: 'firmFourLensesHub',
      visualLabel: 'THE FOUR LENSES',
      visualEmoji: '\u{1F50D}',

      causesLabel: 'A QUICK ORIENTATION',
      causesEmoji: '\u{1F9ED}',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '\u{1F3EA}', head: 'Small firms', body: 'Often flexible, local and owner-led.' },
        { tone: 'blue',   icon: '\u{1F3E2}', head: 'Large firms', body: 'Often complex, scaled and professionally managed.' },
        { tone: 'purple', icon: '\u{2696}\u{FE0F}', head: 'Different types', body: 'Ownership and objectives shape decisions.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Size does not tell us everything – two firms can be similar in size but very different in ownership or objectives.' },

      conclusion: { title: 'Big idea', text: 'To understand a firm, ask four questions – how big is it, what type is it, what does it want, and who really controls it?' },
      examEdge: 'Strong answers <strong>define the firm clearly</strong>, then link size and type to behaviour, growth and objectives.'
    },

    /* ====================================================================
       CARD 2 – How do we measure firm size?
       Pattern: Decompose + tile grid + flow chain
       ==================================================================== */
    {
      id: 'firms-measure-size',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 7',
      title: 'How do we measure firm size?',
      lede: 'There is no single perfect measure of size. Economists and businesses use several indicators, depending on what they want to compare.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Firm size can be judged by <strong>employees, sales revenue, output, capital employed</strong> and <strong>market share</strong>.' },

      visualKey: 'firmSizeMeasuresHub',
      visualLabel: 'THE FIVE MEASURES',
      visualEmoji: '\u{1F4CA}',

      causesLabel: 'WHY MEASURES DIFFER',
      causesEmoji: '\u{1F4A1}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '\u{1F465}', head: 'Labour-intensive business', body: 'Many workers, lower capital.' },
        { tone: 'amber',  icon: '\u{1F3ED}', head: 'Capital-intensive firm',    body: 'Fewer workers, high assets.' },
        { tone: 'purple', icon: '\u{2B50}', head: 'Brand giant',                body: 'Strong sales and market share.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Two firms can be <strong>similar in one measure and very different in another</strong>.' },

      flow2Title: 'WHEN TO USE EACH',
      flow2Emoji: '\u{1F3AF}',
      flow2Sep: '→',
      flow2: [
        { tone: 'green',  icon: '❓', title: 'Ask the question',    sub: 'What are you actually comparing?' },
        { tone: 'amber',  icon: '\u{1F4DC}', title: 'Choose the best measure', sub: 'Pick the indicator that fits.' },
        { tone: 'blue',   icon: '⚖️', title: 'Compare like with like', sub: 'Same industry, same year.' },
        { tone: 'purple', icon: '\u{2757}', title: 'Explain the limitation',  sub: 'Say why no measure is perfect.' }
      ],

      conclusion: { title: 'Big idea', text: 'Size is not one number – it depends on what aspect of the business you are measuring.' },
      examEdge: 'Always <strong>name the measure of size</strong> you are using, then explain why it is appropriate.'
    },

    /* ====================================================================
       CARD 3 – Why some firms stay small (3.1.1a)
       Pattern: Decompose + side-by-side pair + tile grid
       ==================================================================== */
    {
      id: 'firms-stay-small',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 7',
      title: 'Why some firms stay small',
      lede: 'Small size is not always a weakness. Some firms stay small by choice, while others find growth difficult.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A firm may stay small because of <strong>owner objectives, niche markets, limited finance, risk</strong> or <strong>managerial constraints</strong>.' },

      visualKey: 'firmStaySmallHub',
      visualLabel: 'WHY STAY SMALL?',
      visualEmoji: '\u{1F50D}',

      pairLabel: 'BY CHOICE VS BY CONSTRAINT',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', icon: '\u{1F44D}', iconStyle: 'circle',
        label: 'By choice',
        text: '<p style="margin:0 0 8px;font-size:13px;color:#0B1426;line-height:1.55;">Owners deliberately keep the firm small because it fits their goals.</p><ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.65;"><li>Control over decisions and direction.</li><li>Flexibility in working and lifestyle.</li><li>Close relationships with customers.</li></ul>'
      },
      right: {
        tone: 'purple', icon: '⚠️', iconStyle: 'circle',
        label: 'By constraint',
        text: '<p style="margin:0 0 8px;font-size:13px;color:#0B1426;line-height:1.55;">Firms would like to grow but face barriers that hold them back.</p><ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.65;"><li>Lack of capital to invest.</li><li>Shortage of skills or management.</li><li>Small or slow-growing market.</li></ul>'
      },

      causes2Label: 'SMALL CAN STILL BE GOOD',
      causes2Emoji: '⭐',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green', icon: '\u{1F680}', head: 'Flexible', body: 'Can adapt quickly.' },
        { tone: 'amber', icon: '\u{1F465}', head: 'Personal', body: 'Close to customers.' },
        { tone: 'blue',  icon: '\u{1F3AF}', head: 'Focused',  body: 'Strong local or specialist identity.' }
      ],

      bottomTip: { icon: '⚠️', tone: 'amber', text: 'Small does not mean unsuccessful – many firms stay small <strong>because that fits their aims or market</strong>.' },

      conclusion: { title: 'Big idea', text: 'A firm\'s size reflects both its opportunities and its objectives.' },
      examEdge: 'When explaining why a firm stays small, be clear whether it is a <strong>deliberate choice</strong> or a <strong>barrier to growth</strong>.'
    },

    /* ====================================================================
       CARD 4 – Why other firms grow (3.1.1a continued)
       Pattern: Decompose (flywheel) + tile grid + side-by-side pair
       ==================================================================== */
    {
      id: 'firms-why-grow',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 7',
      title: 'Why other firms grow',
      lede: 'Growth can happen because managers see profit opportunities, want economies of scale, or need to survive in a competitive market.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Firms often grow to raise <strong>profit</strong>, lower <strong>average costs</strong>, spread <strong>risk</strong> and strengthen <strong>market position</strong>.' },

      visualKey: 'firmGrowthFlywheel',
      visualLabel: 'THE GROWTH FLYWHEEL',
      visualEmoji: '\u{1F501}',

      causesLabel: 'WHY GROW?',
      causesEmoji: '\u{1F4A1}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F4C9}', head: 'Economies of scale', body: 'Lower average costs.' },
        { tone: 'amber',  icon: '⭐', head: 'Market power',          body: 'Stronger brand or bargaining power.' },
        { tone: 'blue',   icon: '\u{1F4CA}', head: 'Diversification',    body: 'Spread risk across products or markets.' },
        { tone: 'purple', icon: '\u{1F6E1}️', head: 'Survival',     body: 'Compete more effectively.' }
      ],

      pairLabel: 'THE TRADE-OFF',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', icon: '\u{1F44D}', iconStyle: 'circle',
        label: 'Benefits of growth',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Lower costs, more profit, market presence.</p>'
      },
      right: {
        tone: 'rose', icon: '⚠️', iconStyle: 'circle',
        label: 'Possible drawbacks',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Loss of control, coordination problems, culture change.</p>'
      },

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Growth is not always better – it depends on whether <strong>the benefits outweigh the new costs and risks</strong>.' },

      conclusion: { title: 'Big idea', text: 'Firms grow when the expected gains from expansion are greater than the costs and risks.' },
      examEdge: 'Link growth to a clear reason – <strong>scale, profit, survival, diversification</strong> or <strong>market power</strong>.'
    },

    /* ====================================================================
       CARD 5 – Who owns the firm – and what is it for? (3.1.1c + 3.1.1d)
       Pattern: Decompose (ownership + objectives) + comparison table
       ==================================================================== */
    {
      id: 'firms-ownership-objectives',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 7',
      title: 'Who owns the firm – and what is it for?',
      lede: 'Ownership tells us who controls the organisation. Objectives tell us what it is trying to achieve.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: '<strong>Public vs private</strong> and <strong>profit vs not-for-profit</strong> are different distinctions – one is about ownership, the other about objectives.' },

      visualKey: 'firmOwnershipObjectives',
      visualLabel: 'OWNERSHIP',
      visualEmoji: '\u{1F465}',

      comparisonTable: {
        title: 'PUTTING THE TWO TOGETHER',
        emoji: '\u{1F532}',
        columns: ['Private sector', 'Public sector'],
        columnTones: ['green', 'blue'],
        rows: [
          { label: '\u{1F3AF} For-profit',     values: ['A private firm can be for-profit.', 'Rare – public bodies are not set up to make profit for owners.'], highlights: [true, false] },
          { label: '\u{1F91D} Not-for-profit', values: ['An organisation can be not-for-profit.', 'Public organisations are usually service-led rather than profit-maximising.'], highlights: [true, true] }
        ]
      },

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Do not confuse ownership with objective – a question may ask about one, the other, or both. <strong>Ownership and objectives overlap</strong>, but they are separate distinctions.' },

      conclusion: { title: 'Big idea', text: 'Types of firms differ not just by what they do, but by <strong>who owns them</strong> and <strong>what they are trying to achieve</strong>.' },
      examEdge: 'Define the type carefully – <strong>private or public</strong>, then <strong>profit-making or not-for-profit</strong> if relevant.'
    },

    /* ====================================================================
       CARD 6 – Ownership and control – the principal-agent problem (3.1.1b)
       Pattern: Sequential flow chain + side-by-side pair + flow chain
       ==================================================================== */
    {
      id: 'firms-principal-agent',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 7',
      title: 'Ownership and control – the principal-agent problem',
      lede: 'In small firms, owners often run the business directly. In large companies, ownership and control can separate.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'The <strong>principal-agent problem</strong> arises when managers (agents) make decisions that do not fully match the interests of owners (principals).' },

      flowTitle: 'THE SEPARATION',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'green', icon: '\u{1F465}', title: 'Shareholders',     sub: 'Want profit, value and good returns.' },
        { tone: 'blue',  icon: '\u{1F468}‍\u{1F4BC}', title: 'Board / managers', sub: 'Control day-to-day decisions.' },
        { tone: 'amber', icon: '\u{1F4CB}', title: 'Business decisions', sub: 'Separation – the owner is not always the decision-maker.' }
      ],

      pairLabel: 'WHERE CONFLICT CAN ARISE',
      pairEmoji: '⚡',
      left: {
        tone: 'green', icon: '\u{1F3AF}', iconStyle: 'circle',
        label: 'Owners may want',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Higher profit.</li><li>Efficient use of resources.</li><li>Long-term value.</li></ul>'
      },
      right: {
        tone: 'purple', icon: '\u{1F468}‍\u{1F4BC}', iconStyle: 'circle',
        label: 'Managers may prefer',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Higher salary.</li><li>Empire-building.</li><li>Job security.</li><li>Short-term targets.</li><li>Prestige.</li></ul>'
      },

      flow2Title: 'HOW FIRMS TRY TO ALIGN THEM',
      flow2Emoji: '\u{1F6E1}️',
      flow2Sep: '→',
      flow2: [
        { tone: 'green',  icon: '1', title: 'Performance pay',     sub: 'Bonuses linked to results.' },
        { tone: 'blue',   icon: '2', title: 'Monitoring',          sub: 'Reporting and oversight.' },
        { tone: 'amber',  icon: '3', title: 'Corporate governance', sub: 'Clearer rules and accountability.' },
        { tone: 'purple', icon: '4', title: 'Shareholder pressure', sub: 'Voting or threat of takeover.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'The principal-agent problem is most relevant where <strong>ownership is widely spread</strong> and managers have significant discretion.' },

      conclusion: { title: 'Big idea', text: 'When ownership and control separate, incentives matter.' },
      examEdge: 'Define the <strong>principal</strong>, define the <strong>agent</strong>, then explain why their incentives may differ.'
    },

    /* ====================================================================
       CARD 7 – The whole story (exam toolkit · Evidence-then-verdict)
       Pattern: chain (recap) + tile grid (mistakes) + flow chain (write it)
       ==================================================================== */
    {
      id: 'firms-exam-toolkit',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 7 of 7',
      title: 'The whole story',
      lede: 'To analyse a firm well, we need to connect size, type, objectives, growth and control.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Top answers <strong>define the firm clearly</strong>, then link its size and type to behaviour, objectives and trade-offs.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F4CF}', title: 'Measure size',      sub: '' },
        { tone: 'amber',  icon: '\u{1F3F7}\u{FE0F}', title: 'Identify type',     sub: '' },
        { tone: 'purple', icon: '\u{1F3AF}', title: 'State objective',   sub: '' },
        { tone: 'blue',   icon: '\u{1F4C8}', title: 'Stay small or grow?', sub: '' },
        { tone: 'green',  icon: '\u{1F511}', title: 'Who owns it?',      sub: '' },
        { tone: 'amber',  icon: '\u{1F3DB}\u{FE0F}', title: 'Who controls it?',  sub: '' },
        { tone: 'purple', icon: '⚖️', title: 'Judge trade-offs', sub: '' }
      ],

      causesLabel: 'COMMON MISTAKES',
      causesEmoji: '⚠️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'rose', icon: '\u{1F6AB}', head: 'No single size measure', body: '<strong>Fix:</strong> say which measure you mean.' },
        { tone: 'rose', icon: '\u{1F3DB}️', head: 'Ownership is not objective', body: '<strong>Fix:</strong> public/private is different from profit/not-for-profit.' },
        { tone: 'rose', icon: '\u{1F331}', head: 'Small is not failure',    body: '<strong>Fix:</strong> context matters.' },
        { tone: 'rose', icon: '\u{1F465}', head: 'Owners and managers may differ', body: '<strong>Fix:</strong> principal-agent.' }
      ],

      flow2Title: 'HOW TO WRITE IT',
      flow2Emoji: '✍️',
      flow2Sep: '→',
      flow2: [
        { tone: 'blue',   icon: '1', title: 'Define',  sub: 'Size or type.' },
        { tone: 'green',  icon: '2', title: 'Apply',   sub: 'Use the case or example.' },
        { tone: 'amber',  icon: '3', title: 'Explain', sub: 'Link to objectives or growth.' },
        { tone: 'purple', icon: '4', title: 'Judge',   sub: 'Weigh benefits, costs and trade-offs.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'The strongest answers combine <strong>classification, explanation</strong> and <strong>evaluation</strong>.' },

      conclusion: { title: 'Big idea', text: 'Firms are shaped by size, ownership, objectives and incentives – not by size alone.' },
      examEdge: 'Always move beyond labels – explain <strong>how the type of firm changes behaviour and outcomes</strong>.'
    }

  ]
};
