/* ============================================================
   ECONOS – Business Objectives (Edexcel A 3.2.1)
   7 cards · interactive-first build
   Ships BEFORE 3.3 (revenue/costs/profits), so profit maximisation
   is explained in plain English – "the largest gap between money in
   and money out" – not as MR=MC. Inline mini-defs only in tips.

   Card patterns (no two consecutive repeat):
     1 Decompose (hub-and-spoke 5 objectives) + tile grid + flow chain
     2 Sequential flow chain (survival causal) + tile grid + tile grid
     3 Comparison (3 classic objectives) + flow chain + tile grid
     4 Evidence-then-verdict (growth) + tile grid + tile grid
     5 Side-by-side pair (owners vs managers) + flow chain + tile grid
     6 Tile grid (CSR menu) + flow chain + tile grid + twin pair
     7 Evidence-then-verdict (synthesis) + numbered chain + pair
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'business-objectives',
  topicNum: '3.2.1',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Business Objectives',
  estTime: '16 min',
  goal: 'Identify a firm’s objective and explain how it shapes the firm’s behaviour',

  intro: {
    heroKey: 'heroFirm',
    summary: 'Not every firm is trying to do the same thing. Some are scrambling to survive, some are squeezing for every last pound of profit, others care more about size, market share, or doing the right thing. The objective a firm chooses depends on its age, its owners, its market and the pressures it faces – and the objective then drives almost every decision it makes about prices, costs, growth and risk. This topic gives you the menu of objectives, the reasons firms choose between them, and the language to spot a firm’s real objective in an exam case.',
    doInThis: 'Map the main business objectives, explain why a firm’s objective depends on its context, distinguish profit, sales, growth and ethical aims, and analyse who inside the firm pushes for which.',
    outcomes: [
      'List the main objectives a firm can pursue and explain why they differ',
      'Explain why new firms often prioritise survival and what that looks like',
      'Distinguish profit maximisation, sales maximisation and satisficing',
      'Explain why some firms target growth or market share',
      'Identify whose preferences (owners, managers, stakeholders) shape the objective',
      'Recognise social, ethical and environmental objectives and their trade-offs'
    ],
    tip: 'A firm’s objective is rarely just “profit” – the exam reward is in spotting context and inferring which objective fits.',
    stages: [
      { num: 1, name: 'Learn',  sub: '7 cards \xb7 16 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Business objectives, the big picture
       Pattern: Decompose (5-spoke hub) + tile grid + flow chain (lifecycle)
       ==================================================================== */
    {
      id: 'bizobj-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 7',
      title: 'Business objectives – the big picture',
      lede: 'Different firms chase different goals. The objective a firm picks shapes nearly every decision it makes about prices, costs, growth and risk.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A <strong>business objective</strong> is the main goal a firm is trying to achieve – most firms pick from <strong>survival, profit, sales, growth</strong> or <strong>social</strong> aims.' },

      visualKey: 'businessObjectivesMap',
      visualLabel: 'THE FIVE MAIN OBJECTIVES',
      visualEmoji: '\u{1F9ED}',

      causesLabel: 'WHY OBJECTIVES DIFFER',
      causesEmoji: '\u{1F50D}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F331}', head: 'Age of the firm',  body: 'New firms often focus on staying alive; mature firms can afford to chase profit.' },
        { tone: 'blue',   icon: '\u{1F3DB}\u{FE0F}', head: 'Who owns it',     body: 'Shareholders, family owners and the state want different things.' },
        { tone: 'amber',  icon: '\u{1F4CA}', head: 'Market conditions', body: 'A recession or tough rival can push survival up the list.' },
        { tone: 'purple', icon: '\u{1F9ED}', head: 'Manager incentives', body: 'The people running the firm have their own goals too.' }
      ],

      flowTitle: 'A SIMPLE PATTERN',
      flowEmoji: '\u{1F501}',
      flow: [
        { tone: 'green',  icon: '\u{1F331}', title: 'New business',         sub: 'Just getting off the ground.' },
        { tone: 'amber',  icon: '\u{1F6E1}\u{FE0F}', title: 'Survival first',       sub: 'Keep the lights on, build customers.' },
        { tone: 'blue',   icon: '\u{1F3E2}', title: 'Established firm',     sub: 'Stable base, can plan further out.' },
        { tone: 'purple', icon: '\u{1F4C8}', title: 'Profit / growth push', sub: 'Push for profit, scale or market share.' },
        { tone: 'slate',   icon: '\u{1F3DB}\u{FE0F}', title: 'Mature firm under pressure', sub: 'Competition, regulation, scrutiny grow.' },
        { tone: 'rose',   icon: '\u{2696}\u{FE0F}', title: 'Balance profit with wider goals', sub: 'Add social, ethical and long-run aims.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Most firms pursue <strong>more than one objective at once</strong> – the question is which one wins when they pull in different directions.' },

      conclusion: { title: 'Big idea', text: 'A firm’s objective is a <strong>choice shaped by context</strong> – age, owners, market and pressure – and that choice then drives everything else.' },
      examEdge: 'Always <strong>name the objective first</strong>, then explain why this particular firm has chosen it.'
    },

    /* ====================================================================
       CARD 2 – Survival first
       Pattern: Sequential flow chain (causal) + tile grids
       ==================================================================== */
    {
      id: 'bizobj-survival-first',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 7',
      title: 'Survival first',
      lede: 'When a firm is new, struggling or facing a shock, the only objective that really matters is staying in business.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F6E1}\u{FE0F}', tone: 'green', text: '<strong>Survival</strong> means doing whatever it takes to keep the business trading – covering costs, paying bills and not running out of cash.' },

      causesLabel: 'WHEN SURVIVAL DOMINATES',
      causesEmoji: '\u{1F6A8}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F331}', head: 'A new start-up',      body: 'No reputation, no customer base, no cushion.' },
        { tone: 'amber',  icon: '\u{1F4C9}', head: 'A recession',         body: 'Demand falls and competitors cut prices.' },
        { tone: 'rose',   icon: '\u{26A0}\u{FE0F}', head: 'A sudden shock', body: 'A supplier fails, a rival enters, costs spike.' },
        { tone: 'purple', icon: '\u{1F3C1}', head: 'A struggling firm',    body: 'Losses are mounting and cash is tight.' }
      ],

      flowTitle: 'WHAT IT LOOKS LIKE',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F6CD}\u{FE0F}', title: 'Sales',          sub: 'Keep customers coming through the door.' },
        { tone: 'blue',   icon: '\u{1F4B0}', title: 'Cash inflow',    sub: 'Money actually arrives in the bank.' },
        { tone: 'amber',  icon: '\u{1F9FE}', title: 'Bills paid',     sub: 'Suppliers, staff and rent kept up to date.' },
        { tone: 'purple', icon: '\u{1F6E1}\u{FE0F}', title: 'Business survives', sub: 'The firm lives to trade another day.' }
      ],

      causes2Label: 'WHAT THE FIRM DOES',
      causes2Emoji: '\u{1F527}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green',  icon: '\u{1F3F7}\u{FE0F}', head: 'Low-risk pricing', body: 'Discounts and offers to keep volume flowing.' },
        { tone: 'amber',  icon: '\u{2702}\u{FE0F}', head: 'Careful spending', body: 'Pause investment, trim non-essential costs.' },
        { tone: 'blue',   icon: '\u{1F4B5}', head: 'Protect cash flow', body: 'Chase invoices early, stretch supplier terms.' }
      ],

      causes3Label: 'WHY IT MATTERS',
      causes3Emoji: '\u{1F4A1}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'green',  icon: '\u{1F6AA}', head: 'No survival, no future',  body: 'Every other objective needs the firm to still exist.' },
        { tone: 'amber',  icon: '\u{1F4C5}', head: 'Buys time',                body: 'Survival now lets the firm chase bigger goals later.' },
        { tone: 'purple', icon: '\u{1F50D}', head: 'Explains odd choices',    body: 'A struggling firm will accept very low margins to stay alive.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'amber', text: 'A firm in survival mode often <strong>looks irrational on profit grounds</strong> – because profit is not what it is optimising for.' },

      conclusion: { title: 'Big idea', text: 'Survival is the <strong>foundation objective</strong> – everything else only matters once the firm is safe.' },
      examEdge: 'If the case mentions a new firm, a recession or losses, lead with <strong>survival</strong> before reaching for profit or growth.'
    },

    /* ====================================================================
       CARD 3 – Sales, profit and satisficing
       Pattern: Comparison + flow chain + tile grid (don't mix them up)
       ==================================================================== */
    {
      id: 'bizobj-sales-profit-satisficing',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 7',
      title: 'Sales, profit and satisficing',
      lede: 'Once survival is secure, firms have a real choice – chase the biggest possible profit, push for the biggest possible sales, or just aim for “good enough” on several fronts.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4D6}', tone: 'green', text: '<strong>Profit max</strong> = biggest gap between money in and money out. <strong>Sales max</strong> = biggest revenue or volume. <strong>Satisficing</strong> = good enough across several goals.' },

      visualKey: 'threeClassicObjectives',
      visualLabel: 'THREE CLASSIC OBJECTIVES',
      visualEmoji: '\u{1F4CA}',

      flowTitle: 'WHO TENDS TO PREFER WHAT?',
      flowEmoji: '\u{1F465}',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '\u{1F3DB}\u{FE0F}', title: 'Owners',           sub: 'Lean toward profit – it is their return.' },
        { tone: 'blue',   icon: '\u{1F468}‍\u{1F4BC}', title: 'Managers',  sub: 'Often prefer sales or satisficing for an easier life.' },
        { tone: 'amber',  icon: '\u{26A0}\u{FE0F}', title: 'Firm under pressure', sub: 'Picks whichever objective best fits its situation.' }
      ],

      causes2Label: 'DON’T MIX THEM UP',
      causes2Emoji: '\u{26A0}\u{FE0F}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Higher sales',                body: 'More units sold or more revenue earned.' },
        { tone: 'amber',  icon: '\u{2260}\u{FE0F}', head: 'Does not automatically mean', body: 'Sales and profit are not the same thing.' },
        { tone: 'blue',   icon: '\u{1F4B0}', head: 'Higher profit',               body: 'Profit depends on what is left after costs.' },
        { tone: 'purple', icon: '\u{1F4B8}', head: 'Because costs may rise too',  body: 'Chasing volume can push costs up faster than revenue.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Satisficing is the <strong>real-world default</strong> for most managers – they don’t optimise one number, they hit acceptable levels on several.' },

      conclusion: { title: 'Big idea', text: 'Profit, sales and satisficing are <strong>different objectives that recommend different decisions</strong> – on pricing, on output, and on risk.' },
      examEdge: 'When you spot a firm cutting prices, ask whether it is pushing for <strong>sales max</strong> or just <strong>satisficing</strong> – they look similar but mean different things.'
    },

    /* ====================================================================
       CARD 4 – Growth and market share
       Pattern: Evidence-then-verdict (tile grid + visual + tiles + trade-offs)
       ==================================================================== */
    {
      id: 'bizobj-growth-market-share',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 7',
      title: 'Growth and market share',
      lede: 'Some firms care less about this year’s profit and more about getting bigger – either in absolute size or as a share of their market.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4C8}', tone: 'green', text: '<strong>Growth</strong> means increasing the size of the firm. <strong>Market share</strong> means the slice of total industry sales the firm controls.' },

      causesLabel: 'WHY FIRMS WANT TO GROW',
      causesEmoji: '\u{1F680}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{2699}\u{FE0F}', head: 'Economies of scale',      body: 'Bigger firms can spread fixed costs and bargain harder.' },
        { tone: 'blue',   icon: '\u{1F4AA}', head: 'More market power',       body: 'Set prices, set terms, lean on suppliers and buyers.' },
        { tone: 'amber',  icon: '\u{2B50}', head: 'Higher brand recognition', body: 'Bigger firms are trusted and remembered first.' },
        { tone: 'purple', icon: '\u{1F6E1}\u{FE0F}', head: 'Long-run survival', body: 'Scale makes it harder for rivals to push you out.' }
      ],

      visualKey: 'marketShareBar',
      visual2Label: 'MARKET SHARE MATTERS TOO',
      visual2Emoji: '\u{1F967}',

      causes2Label: 'WHY MARKET SHARE COUNTS',
      causes2Emoji: '\u{1F3AF}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green', icon: '\u{1F465}', head: 'Larger customer base',     body: 'More buyers to sell to today and tomorrow.' },
        { tone: 'blue',  icon: '\u{1F91D}', head: 'Stronger bargaining power', body: 'Suppliers and retailers can’t afford to lose you.' },
        { tone: 'amber', icon: '\u{1F441}\u{FE0F}', head: 'Harder for rivals to ignore', body: 'A big share buys defensive room in the market.' }
      ],

      causes3Label: 'THE TRADE-OFFS',
      causes3Emoji: '\u{2696}\u{FE0F}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'rose',   icon: '\u{1F4B8}', head: 'Fast growth can strain finance',     body: 'Cash and borrowing need to stretch a long way.' },
        { tone: 'amber',  icon: '\u{1F9E9}', head: 'Expansion can damage control / quality', body: 'Hard to keep standards as the firm scales.' },
        { tone: 'purple', icon: '\u{1F501}', head: 'Mergers bring integration risks',    body: 'Cultures, systems and teams may not fit together.' },
        { tone: 'rose',   icon: '\u{1F4C9}', head: 'Bigger is not always better',         body: 'Diseconomies of scale can quietly raise unit costs.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Growth often <strong>comes at the cost of short-run profit</strong> – expansion eats cash long before it pays back.' },

      conclusion: { title: 'Big idea', text: 'Growth and market share are <strong>strategic objectives</strong> – they pay off over the long run, but they raise short-run costs and risks.' },
      examEdge: 'When a firm is clearly investing, acquiring or undercutting on price, ask whether the real objective is <strong>growth or market share</strong>, not profit this year.'
    },

    /* ====================================================================
       CARD 5 – Who decides the objective?
       Pattern: Side-by-side pair (owners vs managers) + flow chain + tiles
       ==================================================================== */
    {
      id: 'bizobj-who-decides',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 7',
      title: 'Who decides the objective?',
      lede: 'A firm is not one person – it is owners, managers, workers, customers and regulators. The objective the firm actually pursues depends on whose voice wins.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F5E3}\u{FE0F}', tone: 'green', text: 'A firm’s objective reflects <strong>whoever has the most influence</strong> – not always the people who legally own it.' },

      visualKey: 'whoWantsWhatHub',
      visualLabel: 'WHO WANTS WHAT?',
      visualEmoji: '\u{1F465}',

      pairLabel: 'WHY CONFLICTS HAPPEN',
      pairEmoji: '\u{26A1}',
      left: {
        tone: 'green', icon: '\u{1F3DB}\u{FE0F}', iconStyle: 'circle',
        label: 'Owners (shareholders) want',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Higher profit and dividends.</li><li>A rising share price.</li><li>Long-run value from the business.</li><li>Efficient use of their capital.</li></ul>'
      },
      right: {
        tone: 'purple', icon: '\u{1F468}‍\u{1F4BC}', iconStyle: 'circle',
        label: 'Managers (agents) often prefer',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Higher salaries and bonuses.</li><li>A bigger firm to run (“empire building”).</li><li>Job security and an easier life.</li><li>Prestige projects, even if profit is thin.</li></ul>'
      },

      flowTitle: 'THE CLASSIC PATTERN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F510}', title: 'Separation of ownership from control', sub: 'Owners hire managers to run the firm day-to-day.' },
        { tone: 'amber',  icon: '\u{1F9ED}', title: 'Different incentives',                 sub: 'Owners and managers want different things.' },
        { tone: 'purple', icon: '\u{1F3AF}', title: 'Different objectives',                 sub: 'The firm’s actual goal drifts from “max profit”.' }
      ],

      causes2Label: 'WHAT THIS MEANS',
      causes2Emoji: '\u{1F4A1}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green',  icon: '\u{1F4E2}', head: 'Stakeholder pressure can change priorities', body: 'Workers, customers and regulators all push in different directions.' },
        { tone: 'amber',  icon: '\u{1F9ED}', head: 'Context determines which voice matters most', body: 'In a crisis, owners speak louder; in calm times, managers do.' },
        { tone: 'purple', icon: '\u{1F91D}', head: 'Objectives can be a compromise',              body: 'The final goal is often a blend, not one pure aim.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Whenever an exam case mentions a <strong>listed company with a CEO</strong>, watch for the gap between owners and managers – that’s where the objective gets contested.' },

      conclusion: { title: 'Big idea', text: 'The objective a firm ends up pursuing depends on <strong>who controls the firm</strong>, not just who owns it.' },
      examEdge: 'Name the stakeholders, then say <strong>whose objective is winning</strong> and why – that’s the analytical move.'
    },

    /* ====================================================================
       CARD 6 – Social, ethical and environmental objectives
       Pattern: Tile grid (CSR menu) + flow chain + tile grid + twin pair
       ==================================================================== */
    {
      id: 'bizobj-social-ethical',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 7',
      title: 'Social, ethical and environmental objectives',
      lede: 'Some firms aim for more than profit – they take on objectives about people, the planet and how the business behaves.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F30D}', tone: 'green', text: '<strong>Corporate Social Responsibility (CSR)</strong> means a firm voluntarily takes on objectives beyond pure profit – caring about workers, communities and the environment.' },

      causesFirst: true,
      causesLabel: 'WHAT CSR CAN INCLUDE',
      causesEmoji: '\u{1F4CB}',
      causesStyle: 'icon-top',
      causesCols: 2,
      causes: [
        { tone: 'green',  icon: '\u{1F465}', head: 'Fair treatment of workers',  body: 'Good pay, safe conditions, decent contracts.' },
        { tone: 'slate',  icon: '\u{1F33F}', head: 'Lower environmental impact', body: 'Less waste, lower emissions, cleaner inputs.' },
        { tone: 'amber',  icon: '\u{1F69A}', head: 'Ethical sourcing',           body: 'Suppliers vetted for labour and standards.' },
        { tone: 'blue',   icon: '\u{2705}',  head: 'Safe products',              body: 'Honest, well-tested, won’t harm customers.' },
        { tone: 'purple', icon: '\u{1F3D8}\u{FE0F}', head: 'Community support',  body: 'Local jobs, charity, schools, regeneration.' },
        { tone: 'rose',   icon: '\u{1F308}', head: 'Diversity and inclusion',    body: 'A workforce that reflects its customers.' }
      ],

      flowTitle: 'WHY FIRMS CHOOSE THESE OBJECTIVES',
      flowEmoji: '\u{1F4A1}',
      flow: [
        { tone: 'green',  icon: '\u{2728}', title: 'Responsible actions',     sub: 'Firm chooses to act beyond what the law requires.' },
        { tone: 'blue',   icon: '\u{1F31F}', title: 'Stronger brand and trust', sub: 'Customers and media notice and reward it.' },
        { tone: 'amber',  icon: '\u{1F91D}', title: 'Loyal customers and staff', sub: 'Repeat buyers and people who want to work there.' },
        { tone: 'purple', icon: '\u{1F4C8}', title: 'Long-run success',         sub: 'Today’s reputation feeds tomorrow’s profit.' }
      ],

      causes2Label: 'THE BENEFITS',
      causes2Emoji: '\u{1F3C6}',
      causes2Style: 'icon-top',
      causes2Cols: 2,
      causes2: [
        { tone: 'green',  icon: '\u{1F31F}', head: 'Reputation',                 body: 'A trusted name is a real competitive asset.' },
        { tone: 'blue',   icon: '\u{1F464}', head: 'Recruitment and retention',  body: 'Easier to hire and keep talented staff.' },
        { tone: 'amber',  icon: '\u{1F4DC}', head: 'Regulation risk',            body: 'Acting early heads off tougher future rules.' },
        { tone: 'purple', icon: '\u{1F4B9}', head: 'Investor expectations',      body: 'Many big investors now demand ESG standards.' }
      ],

      visualKey: 'csrTradeOffPair',
      visual2Label: 'THE TRADE-OFFS',
      visual2Emoji: '\u{2696}\u{FE0F}',

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'amber', text: 'CSR is not free – ethical inputs, fair pay and clean processes all <strong>raise costs in the short run</strong>. The bet is that they pay back over time.' },

      conclusion: { title: 'Big idea', text: 'Social, ethical and environmental objectives are <strong>strategic choices</strong> – they trade short-run cost for long-run reputation, loyalty and resilience.' },
      examEdge: 'Don’t treat CSR as charity – explain how it can <strong>support the firm’s long-run commercial interest</strong>, not just its conscience.'
    },

    /* ====================================================================
       CARD 7 – The whole story
       Pattern: Evidence-then-verdict (synthesis) + numbered chain + pair
       ==================================================================== */
    {
      id: 'bizobj-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 7 of 7',
      title: 'The whole story',
      lede: 'A firm’s objective is not random – it moves through a fairly predictable journey, and the exam asks you to read it.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F9ED}', tone: 'green', text: 'The exam reward sits in <strong>spotting the right objective for the right context</strong>, then chaining its consequences for prices, costs, growth and stakeholders.' },

      visualKey: 'objectivesJourney',
      visualLabel: 'THE JOURNEY',
      visualEmoji: '\u{1F6E4}\u{FE0F}',

      flowTitle: 'THE EXAM CHAIN',
      flowEmoji: '\u{270D}\u{FE0F}',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '1', title: 'Identify the context',           sub: 'Age, market, owners, pressures.' },
        { tone: 'blue',   icon: '2', title: 'Infer the objective',            sub: 'Which goal fits this firm right now?' },
        { tone: 'amber',  icon: '3', title: 'Explain the decisions it causes', sub: 'Prices, costs, output, growth.' },
        { tone: 'purple', icon: '4', title: 'Show who gains and loses',       sub: 'Owners, workers, customers, society.' },
        { tone: 'rose',   icon: '5', title: 'Judge whether the objective fits', sub: 'Is it the right choice for this firm?' }
      ],

      pairLabel: 'COMMON JUDGEMENTS',
      pairEmoji: '\u{2696}\u{FE0F}',
      left: {
        tone: 'green', icon: '\u{2705}', iconStyle: 'circle',
        label: 'Why one objective may fit',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Matches the firm’s stage of life.</li><li>Reflects the owners’ real interests.</li><li>Suits the competitive pressure in the market.</li><li>Plays to the firm’s strengths and assets.</li></ul>'
      },
      right: {
        tone: 'purple', icon: '\u{1F914}', iconStyle: 'circle',
        label: 'Why the answer must still qualify',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Firms usually pursue several objectives at once.</li><li>The right objective depends on time horizon.</li><li>Stakeholders can pull priorities in new directions.</li><li>What works today may not work in a downturn.</li></ul>'
      },

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Top answers <strong>name the objective, justify it from the context, and trace it through to a real decision</strong> – they don’t just list possibilities.' },

      conclusion: { title: 'Big idea', text: 'Objectives are the <strong>hidden steering wheel</strong> behind a firm’s behaviour – read them right and the rest of the case starts to make sense.' },
      examEdge: 'Move beyond “the firm wants profit” – say <strong>which objective dominates here and why</strong>, then chain it through to decisions and trade-offs.'
    }

  ]
};
