window.ECONOS_TOPIC = {
  id: 'specialisation-and-money',
  topicNum: '1.5',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Specialisation & Money',
  estTime: '8-10 minutes',
  goal: 'Lock in the division of labour, the gains and risks of specialising to trade, the limitations of barter, and the four functions of money.',
  intro: {
    heroKey: 'heroSpecialisationMoney',
    summary: 'Specialisation dramatically raises productivity but creates a need for exchange. Barter is too inefficient to support complex trade – money solves this by acting as a medium of exchange, measure of value, store of value, and standard of deferred payment.',
    doInThis: 'Work through 8 cards: the big picture, Adam Smith’s pin factory and his three gains, the division of labour weighed up, specialising to trade across individuals, firms and countries, the barter problem, the four functions of money, what makes good money, and how money and specialisation lift living standards.',
    outcomes: [
      'Explain the division of labour using Adam Smith’s three gains (dexterity, time saved, machinery)',
      'Distinguish the advantages/disadvantages of the division of labour from those of specialising to trade',
      'Explain why barter is inefficient and how money solves the double coincidence of wants',
      'State and apply the four functions of money, and judge why monetary stability matters'
    ],
    tip: 'Money’s four functions (Edexcel wording): Medium of Exchange, Measure of Value (also called unit of account), Store of Value, and Standard of Deferred Payment.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    /* ================================================================
       CARD 1 – The big picture (Sequential flow chain)
       ================================================================ */
    {
      id: 'specialisation_money_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Specialisation & money: the big picture',
      tip: { icon: '💡', tone: 'blue', text: 'Resources are scarce. People, firms and countries therefore specialise in what they do relatively well, then trade for the rest.' },
      flow: [
        { icon: '🛠️', title: 'Specialisation',     sub: 'Focus on what you do relatively well.' },
        { icon: '📈', title: 'Higher productivity', sub: 'You produce more with the same resources.' },
        { icon: '🤝', title: 'Exchange',           sub: 'You trade for the goods and services you don\'t produce.' },
        { icon: '💵', title: 'Money',              sub: 'Money is accepted in exchange, making trade much easier.' },
        { icon: '🏡', title: 'Higher living standards', sub: 'More goods, more choice, better lives.' }
      ],
      flowTitle: 'The big-picture chain',
      flowEmoji: '🔗',
      keyTerms: [
        { term: '📈 More output',  def: 'We can produce more with the resources we have.' },
        { term: '🛒 More choice',  def: 'Trade lets us enjoy a wider variety of goods and services.' },
        { term: '🤝 Easier trade', def: 'Money removes the "double coincidence of wants" and simplifies exchange.' }
      ],
      keyTermsLabel: 'Why this matters',
      keyTermsEmoji: '⭐',
      examEdge: 'Specialisation only works well when exchange is possible – and money makes exchange far easier than barter. Make this link explicit in any answer that touches on productivity, trade or development.'
    },

    /* ================================================================
       CARD 2 – Adam Smith's pin factory (Worked example) — spec (a)
       ================================================================ */
    {
      id: 'specialisation_money_2',
      template: 'framing',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Adam Smith’s Pin Factory',
      tip: { icon: '💡', tone: 'blue', text: 'The division of labour splits one production process into separate tasks, each done by a different worker. Adam Smith showed how powerful this is.' },
      economistQuote: {
        portraitKey: 'economistAdamSmith',
        tone: 'amber',
        label: 'The founding example',
        quote: 'The greatest improvement in the productive powers of labour… seem to have been the effects of the division of labour.',
        attribution: 'Adam Smith, <em>Wealth of Nations</em> (1776)'
      },
      workedExample: {
        label: 'Smith’s pin factory: the numbers',
        emoji: '🪡',
        cards: [
          {
            tone: 'rose', icon: '👤', title: 'One worker, every step',
            subtitle: 'Draw, cut, point, head, whiten, pack…',
            body: 'Switching between all 18 stages, a single pin-maker manages perhaps <strong>20 pins a day</strong>.',
            badge: { icon: '🐌', text: '≈ 20 pins/day each' },
            op: '→'
          },
          {
            tone: 'green', icon: '🏭', title: '18 workers, one step each',
            subtitle: 'Each repeats a single specialised task',
            body: 'The same handful of people, each specialising, turn out about <strong>48,000 pins a day</strong>.',
            badge: { icon: '⚡', text: '≈ 4,800 pins/day each' }
          }
        ],
        summary: [
          { icon: '📈', label: '≈ 240× more output per worker — same people, same hours', tone: 'green' }
        ]
      },
      causes: [
        { tone: 'blue',  icon: '🎯', head: 'Dexterity',            body: 'Repeating one task builds speed and skill – a specialist gets far better at the narrow job than any generalist could.' },
        { tone: 'amber', icon: '⏱️', head: 'Time saved',           body: 'No time lost switching tools or moving between tasks; effort flows straight into output.' },
        { tone: 'green', icon: '⚙️', head: 'Machinery & invention', body: 'Narrow, repeated tasks are easy to mechanise – and a worker focused on one step is more likely to invent a tool that improves it.' }
      ],
      causesLabel: 'Why output jumps: Smith’s three gains',
      causesEmoji: '⭐',
      examEdge: 'These three gains – <strong>dexterity, time saved, and machinery/invention</strong> – are Smith’s core argument. Name them explicitly, and attribute them to the <em>division of labour</em>, not "specialisation" in general.'
    },

    /* ================================================================
       CARD 3 – Division of labour weighed up (Evidence-then-verdict) — spec (b)
       ================================================================ */
    {
      id: 'specialisation_money_3',
      template: 'framing',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'The Division of Labour: Gains vs Drawbacks',
      tip: { icon: '💡', tone: 'blue', text: 'Splitting work into specialised tasks raises output – but doing one narrow job all day has real costs for workers and firms.' },
      causes: [
        { tone: 'green', icon: '📈', head: 'Higher productivity', body: 'More output per worker from skill, speed and specialised tools.' },
        { tone: 'green', icon: '🎓', head: 'Quality & expertise', body: 'Specialists develop deep skill, raising the quality of what they make.' },
        { tone: 'green', icon: '🎯', head: 'Cheaper to train',    body: 'Training someone for one narrow task is faster and cheaper than for the whole process.' },
        { tone: 'green', icon: '⚙️', head: 'Specialised capital',  body: 'Machines can be designed for each single step, raising output further.' }
      ],
      causesLabel: 'Gains from the division of labour',
      causesEmoji: '⭐',
      causes2: [
        { tone: 'amber', icon: '😐', head: 'Monotony & alienation', body: 'Repetitive work is boring and demotivating – Marx’s "alienation of labour" – raising staff turnover.' },
        { tone: 'amber', icon: '🔗', head: 'Interdependence',       body: 'Tasks are linked: if one worker is absent or strikes, the whole line can stop.' },
        { tone: 'amber', icon: '🧰', head: 'Deskilling',            body: 'Narrow skills make workers less adaptable if the job changes.' },
        { tone: 'amber', icon: '🏚️', head: 'Structural unemployment', body: 'If the industry declines, narrow skills don’t transfer easily to other sectors.' }
      ],
      causes2Label: 'Drawbacks',
      causes2Emoji: '⚠️',
      conclusion: {
        title: 'Verdict',
        text: 'The division of labour reliably raises output, but the gains depend on keeping work varied enough to retain motivated workers – and on a flexible labour force that can retrain when industries change.'
      },
      examEdge: 'Strong evaluation pairs a gain with its cost: "Specialisation raises productivity, but the monotony it creates can raise turnover and training costs, partially offsetting the gain."'
    },

    /* ================================================================
       CARD 4 – Specialising to trade (Side-by-side / level grid) — spec (c)
       ================================================================ */
    {
      id: 'specialisation_money_4',
      template: 'framing',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Specialising to Trade',
      tip: { icon: '💡', tone: 'blue', text: 'Beyond the factory floor, whole people, firms and countries specialise – then trade for everything else.' },
      note: {
        tone: 'blue', icon: '🔎', head: 'Two different ideas – don’t mix them up',
        text: 'The <strong>division of labour</strong> splits one production process between workers. <strong>Specialising to trade</strong> is bigger: an individual, firm or country concentrates on what it does relatively best, then trades for the rest.'
      },
      notePosition: 'top',
      economistQuote: {
        portraitKey: 'economistAdamSmith',
        tone: 'amber',
        label: 'Why trade is the key',
        quote: 'The division of labour is limited by the extent of the market.',
        attribution: 'Adam Smith, <em>Wealth of Nations</em> (1776)'
      },
      versusList: {
        label: 'The gains – and the matching risk – at each level',
        emoji: '⚖️',
        rows: [
          {
            heading: 'Individuals & workers',
            left:  { tone: 'green', name: 'Gain',  icon: '📈', premise: 'Focus on one career or skill.',        reason: 'Higher productivity and pay; faster route to expertise.' },
            right: { tone: 'amber', name: 'Risk',  icon: '⚠️', premise: 'Skills become narrow.',                reason: 'Vulnerable if demand for that occupation falls – harder to switch jobs.' }
          },
          {
            heading: 'Firms',
            left:  { tone: 'green', name: 'Gain',  icon: '🏭', premise: 'Specialise in one product or stage.',  reason: 'Economies of scale, lower unit costs and higher quality.' },
            right: { tone: 'amber', name: 'Risk',  icon: '🔗', premise: 'Reliant on suppliers and buyers.',     reason: 'A disrupted supply chain (e.g. 2021 semiconductors) can halt production.' }
          },
          {
            heading: 'Countries',
            left:  { tone: 'green', name: 'Gain',  icon: '🌍', premise: 'Specialise at comparative advantage.', reason: 'Export strengths, import the rest – higher world output and consumer choice.' },
            right: { tone: 'amber', name: 'Risk',  icon: '📉', premise: 'Over-specialised economies.',          reason: 'Exposed to price swings and falling terms of trade; structural unemployment if a key industry fades.' }
          }
        ]
      },
      conclusion: {
        title: 'Verdict',
        text: 'Specialising to trade multiplies the gains from the division of labour across the whole economy – but it swaps self-sufficiency for interdependence. The gains hold only while exchange stays open and the economy stays flexible.'
      },
      examEdge: 'Distinguish the two questions Edexcel can ask: advantages/disadvantages of the <em>division of labour</em> (worker / factory level) versus advantages/disadvantages of <em>specialising to trade</em> (individuals, firms and countries).'
    },

    /* ================================================================
       CARD 5 – The Problem with Barter (Sequential flow chain) — spec (d) setup
       ================================================================ */
    {
      id: 'specialisation_money_5',
      template: 'framing',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'The Problem with Barter',
      tip: { icon: '💡', tone: 'blue', text: 'Barter means exchanging goods directly without money. Trade is difficult when needs do not match.' },
      flow: [
        { icon: '🍎', title: 'Tom has apples',      sub: 'He wants bread. The baker has bread, but doesn\'t want apples.', tone: 'rose', status: 'fail' },
        { icon: '🥖', title: 'The baker has bread', sub: 'She wants milk. The farmer has milk, but doesn\'t want bread.', tone: 'rose', status: 'fail' },
        { icon: '🥛', title: 'The farmer has milk', sub: 'He wants apples – and Tom has them – but only by chance.',     tone: 'rose', status: 'fail' }
      ],
      flowTitle: 'Why barter is difficult: the double coincidence of wants',
      flowEmoji: '🔄',
      verdict: {
        title: 'Barter vs money exchange',
        emoji: '⚖️',
        columns: [
          {
            tone: 'rose',
            icon: '🤝',
            label: 'Barter',
            items: [
              { ok: false, text: 'Needs must exactly match' },
              { ok: false, text: 'Hard to find trading partners' },
              { ok: false, text: 'Time-consuming' },
              { ok: false, text: 'Limits trade and growth' }
            ]
          },
          {
            tone: 'green',
            icon: '💵',
            label: 'Money exchange',
            items: [
              { ok: true, text: 'Anyone can accept money' },
              { ok: true, text: 'Easy to find trading partners' },
              { ok: true, text: 'Faster and more convenient' },
              { ok: true, text: 'Supports more trade and growth' }
            ]
          }
        ]
      },
      causes: [
        { head: 'No common measure of value', icon: '⚖️', body: 'It\'s hard to compare the value of different goods and services without a shared unit.' },
        { head: 'Indivisibility',             icon: '🧩', body: 'Many goods can\'t be easily split to make exact trades – half a cow for a loaf of bread won\'t do.' },
        { head: 'Lack of store of value',     icon: '🔐', body: 'Goods can spoil, wear out, or lose value over time – saving is difficult.' },
        { head: 'Double coincidence of wants', icon: '👥', body: 'Trade only happens when both people want what the other has – a punishingly rare match at scale.' }
      ],
      causesLabel: 'Key limitations of barter',
      causesEmoji: '🚫',
      keyTakeaway: 'Barter can work in small settings, but as economies grow these limits make it hopelessly inefficient. Money solves these problems and lets trade flourish.'
    },

    /* ================================================================
       CARD 6 – The Four Functions of Money (Tile grid) — spec (d)
       ================================================================ */
    {
      id: 'specialisation_money_6',
      template: 'framing',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'The Four Functions of Money',
      tip: { icon: '💡', tone: 'blue', text: 'Money solves the problems of barter because it performs four key jobs that make exchange possible, practical and efficient.' },
      causes: [
        {
          head: 'Medium of exchange',
          icon: '🤝',
          body: 'Money is accepted to buy and sell goods and services – eliminating the double coincidence of wants problem.',
          example: { icon: '🛒', text: 'You use money to buy groceries.' }
        },
        {
          head: 'Measure of value',
          icon: '🏷️',
          body: 'Money gives a common unit to price and compare goods across the whole economy (also called the <em>unit of account</em>).',
          example: { icon: '☕', text: 'A coffee is priced at £4.' }
        },
        {
          head: 'Store of value',
          icon: '🔐',
          body: 'Money can be saved today and used to buy goods and services in the future (assuming low inflation).',
          example: { icon: '🐷', text: 'You save money in a savings account.' }
        },
        {
          head: 'Standard of deferred payment',
          icon: '📅',
          body: 'Money allows payments to be made in future for goods received today – credit, mortgages, contracts.',
          example: { icon: '💳', text: 'You buy a laptop now and pay later.' }
        }
      ],
      causesLabel: 'The four functions',
      causesEmoji: '💵',
      flowBottom: [
        { icon: '👥', title: 'People want things',    sub: 'Goods and services are demanded.',         tone: 'blue' },
        { icon: '💵', title: 'Money is accepted',     sub: 'Medium of exchange.',                     tone: 'blue' },
        { icon: '🏷️', title: 'Prices compared',       sub: 'Measure of value.',                       tone: 'blue' },
        { icon: '🐷', title: 'Value saved',            sub: 'Store of value.',                        tone: 'blue' },
        { icon: '📅', title: 'Payments deferred',     sub: 'Deferred payment.',                       tone: 'blue' },
        { icon: '🔁', title: 'Smoother exchange',     sub: 'Trade is faster and more reliable.',     tone: 'blue' }
      ],
      flowBottomTitle: 'How these functions make exchange easier',
      flowBottomEmoji: '➡️',
      examEdge: 'Inflation attacks two functions: store of value (money buys less) and deferred payment (debts repaid in devalued currency). Hyperinflation (Zimbabwe, Weimar Germany) causes economies to revert to barter – a powerful real-world illustration.'
    },

    /* ================================================================
       CARD 7 – Characteristics of Good Money (Comparison / verdict)
       ================================================================ */
    {
      id: 'specialisation_money_7',
      template: 'framing',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Characteristics of Good Money',
      tip: { icon: '💡', tone: 'blue', text: 'For money to perform its four functions well, it has to have certain practical qualities. These are why modern currency beats shells or livestock.' },
      causes: [
        { head: 'Durable',             icon: '🛡️', body: 'It lasts a long time and can withstand regular use.' },
        { head: 'Portable',            icon: '👛', body: 'It is easy to carry and convenient to transport.' },
        { head: 'Divisible',           icon: '✂️', body: 'It can be divided into smaller units to make exact payments.' },
        { head: 'Acceptable',          icon: '✅', body: 'People are willing to accept it in payment for goods and services.' },
        { head: 'Scarce',              icon: '⚖️', body: 'It is limited in supply, so it holds its value over time.' },
        { head: 'Difficult to counterfeit', icon: '🔍', body: 'It is hard to fake, protecting trust in the monetary system.' }
      ],
      causesLabel: 'The six characteristics',
      causesEmoji: '⭐',
      verdict: {
        title: 'Why shells or livestock are weaker forms of money',
        emoji: '🔬',
        layout: 'arrow',
        columns: [
          {
            tone: 'rose',
            icon: '🐚',
            label: 'Shells',
            items: [
              { ok: false, text: 'Not durable' },
              { ok: false, text: 'Hard to verify' },
              { ok: false, text: 'Not divisible' },
              { ok: false, text: 'Supply can be inconsistent' }
            ]
          },
          {
            tone: 'amber',
            icon: '🐄',
            label: 'Livestock',
            items: [
              { ok: false, text: 'Hard to carry' },
              { ok: false, text: 'Not divisible' },
              { ok: false, text: 'Care and storage costs' },
              { ok: false, text: 'Value changes over time' }
            ]
          },
          {
            tone: 'green',
            icon: '💵',
            label: 'Modern currency',
            items: [
              { ok: true, text: 'Durable and portable' },
              { ok: true, text: 'Easily divisible' },
              { ok: true, text: 'Widely accepted' },
              { ok: true, text: 'Stable and scarce' }
            ]
          }
        ]
      },
      keyTakeaway: 'Good money supports exchange by being trusted, manageable and stable in value – which is exactly why every complex economy converges on currency rather than commodity money.'
    },

    /* ================================================================
       CARD 8 – Why money holds it together (Evidence-then-verdict) — synthesis
       ================================================================ */
    {
      id: 'specialisation_money_8',
      template: 'framing',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Why Money Holds It All Together',
      tip: { icon: '💡', tone: 'blue', text: 'Specialisation only pays off if exchange works – and exchange only works if money holds its value.' },
      causes: [
        { tone: 'blue',  icon: '🔗', head: 'The functions are interdependent', body: 'Break one and the others follow – if money stops holding value, people stop accepting it.' },
        { tone: 'rose',  icon: '🔥', head: 'Inflation attacks money first',     body: 'Rising prices erode the store of value and punish deferred payment – lenders are repaid in devalued currency.' },
        { tone: 'amber', icon: '🪙', head: 'Hyperinflation → barter',       body: 'In Zimbabwe (2008) and Weimar Germany, money failed and trade collapsed back toward barter and foreign currency.' },
        { tone: 'green', icon: '🏛️', head: 'Stability underpins it all',         body: 'A specialised economy needs trusted money and institutions – a central bank, contracts, rule of law – which many developing economies lack.' }
      ],
      causesLabel: 'The judgement: money is the enabler',
      causesEmoji: '🧠',
      flow: [
        { icon: '🛠️', title: 'Specialise',      sub: 'Focus on relative strengths.' },
        { icon: '🤝', title: 'Exchange',         sub: 'Trade for the rest.' },
        { icon: '💵', title: 'Stable money',     sub: 'Trusted store + measure of value.' },
        { icon: '🌐', title: 'Larger markets',   sub: 'Specialisation can go further.' },
        { icon: '🏙️', title: 'Living standards', sub: 'Higher output and choice over time.' }
      ],
      flowTitle: 'The chain that lifts living standards',
      flowEmoji: '🔗',
      balancedNote: {
        title: 'A balanced note',
        text: 'The gains aren’t automatic or evenly shared – economies over-dependent on a narrow range of exports, or where the gains accrue to a few, can be left vulnerable. Good institutions and policy spread the benefits.'
      },
      keyTakeaway: {
        title: 'The big takeaway',
        text: 'Scarcity drives specialisation; specialisation needs exchange; exchange needs money; and money only works if it stays stable. That chain – not money or specialisation alone – is what raises living standards.'
      },
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0
   These questions used to live at /quiz/<topic>/<set> as a
   standalone shell. They now ride along with the Learn It data
   under the same window.ECONOS_QUIZ global. The /quiz/ URL
   contract is gone; the quiz is the natural finisher to the
   Learn It journey, so the data lives next to learn cards.
   ============================================================ */
/* ---- quiz-main.js (quiz pool, preserved from former /quiz/ shell) ---- */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Specialisation &amp; Money',
    subtitle: 'Theme 1 &middot; Topic 1.5 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('specialisation_money_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers the division of labour, specialising to trade, the barter problem, the four functions of money, and good-money characteristics',
    shortNames: [
      'Division of labour', 'Division vs trade sort', 'Barter problem MCQ', 'Functions of money sort',
      'Characteristics match', 'Para fill', 'Cause & effect', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: division of labour */
      { type: 'mcq',
        stem: 'Adam Smith\'s famous pin factory example illustrates the benefits of the <strong>division of labour</strong>. What is the primary economic argument?',
        opts: [
          'By breaking production into specialised tasks, each worker develops skill through repetition, tools can be designed for specific tasks, and time is saved switching between activities – dramatically raising output per worker',
          'Dividing labour means firms can pay workers less per hour – the cost savings are the main benefit',
          'Specialisation ensures that every worker is equally productive regardless of their natural abilities',
          'The division of labour is only possible in manufacturing – service industries cannot benefit from specialisation'
        ],
        ans: 0,
        exp: 'Smith\'s pin factory (Wealth of Nations, 1776): one worker making pins alone might produce ~20 per day. With workers each specialising in one of the ~18 steps (drawing wire, cutting, pointing, etc.), the factory produces around 48,000 pins per day. The gains come from Smith\'s <strong>three sources</strong>: <strong>dexterity</strong> (skill through repetition); <strong>time saved</strong> (no switching between tasks); and <strong>machinery/invention</strong> (tools designed for one specialised step). These gains apply to services too (an accountant vs a doctor vs a lawyer all specialise rather than each person doing every professional task).'
      },

      /* 2 – Elastic sort: division of labour vs specialising to trade */
      { type: 'elastic_sort',
        stem: 'The spec separates two ideas. Classify each statement as being about the <strong>division of labour</strong> (splitting one production process between workers) or <strong>specialising to trade</strong> (individuals, firms or countries focusing, then trading).',
        categories: ['division', 'trade'],
        categoryLabels: ['Division of labour', 'Specialising to trade'],
        goods: [
          { icon: '🪡', label: 'A factory splits pin-making into 18 separate tasks, one per worker', note: '', ans: 'division' },
          { icon: '🌍', label: 'A country exports what it makes best and imports the rest', note: '', ans: 'trade' },
          { icon: '⚙️', label: 'A machine is designed for a single repeated step on the line', note: '', ans: 'division' },
          { icon: '🏭', label: 'A firm concentrates on one product to win economies of scale', note: '', ans: 'trade' },
          { icon: '😐', label: 'Workers doing one repetitive task all day become bored and demotivated', note: '', ans: 'division' },
          { icon: '📉', label: 'An economy reliant on one export is hit hard when its world price falls', note: '', ans: 'trade' }
        ],
        exp: '<strong>Division of labour</strong> operates inside a production process: tasks are split between workers (pin factory), specialised machinery is used, and the costs are worker-level (monotony, interdependence). <strong>Specialising to trade</strong> operates at the level of individuals, firms and whole countries: each focuses on its relative strength and trades for the rest, gaining from economies of scale and comparative advantage but risking over-dependence and exposure to price shocks. Edexcel can ask the advantages/disadvantages of <em>either</em> – know which level the question is about.'
      },

      /* 3 – MCQ: barter and double coincidence */
      { type: 'mcq',
        stem: 'The <strong>double coincidence of wants</strong> problem makes barter extremely inefficient. What does this problem involve?',
        opts: [
          'For a trade to occur, both parties must simultaneously want exactly what the other is offering – a near-impossible requirement in a complex economy',
          'Barter requires both traders to agree on the same price in money terms before the exchange can occur',
          'The problem arises because people in barter economies always want to consume more than they produce',
          'Both parties in a barter transaction must be in the same geographic location at the same time'
        ],
        ans: 0,
        exp: 'In a barter economy, for A to trade with B: A must want what B has, AND B must want what A has – simultaneously. This double coincidence is rarely satisfied. A baker who wants shoes must find a shoemaker who wants bread – at exactly the moment and in exactly the quantities both desire. As an economy becomes more complex with thousands of goods, the probability of matching coincidences falls toward zero. <strong>Money solves this</strong> by splitting the exchange into two transactions: sell for money, then buy with money – the coincidence of wants problem disappears.'
      },

      /* 4 – Elastic sort: four functions of money */
      { type: 'elastic_sort',
        stem: 'Classify each example under the correct <strong>function of money</strong>.',
        categories: ['medium_exchange', 'store_value', 'measure_value', 'standard_deferred'],
        categoryLabels: ['Medium of exchange', 'Store of value', 'Measure of value', 'Standard of deferred payment'],
        goods: [
          { icon: '🛒', label: 'You pay £3.50 for a coffee at a café', note: '', ans: 'medium_exchange' },
          { icon: '🏦', label: 'You save £500 in a bank account to use for holiday spending next year', note: '', ans: 'store_value' },
          { icon: '🏷️', label: 'A supermarket prices 10,000 products so consumers can compare value', note: '', ans: 'measure_value' },
          { icon: '📋', label: 'A mortgage allows you to borrow £300,000 today and repay it over 25 years', note: '', ans: 'standard_deferred' },
          { icon: '💰', label: 'A business prices its products in pounds so customers can assess relative value', note: '', ans: 'measure_value' },
          { icon: '🤝', label: 'A firm pays wages so workers can buy goods from many different employers', note: '', ans: 'medium_exchange' }
        ],
        exp: '<strong>Medium of exchange</strong>: money enables transactions without barter – solves the double coincidence of wants. <strong>Store of value</strong>: money can be saved and used in the future (unlike perishable goods). <strong>Measure of value</strong> (also called the unit of account): money provides a common measure – making price comparison possible across millions of goods. <strong>Standard of deferred payment</strong>: money enables credit – borrow now, repay later in the same unit. All four functions require money to hold its value over time; hyperinflation destroys the store of value and standard of deferred payment functions first.'
      },

      /* 5 – Match pairs: characteristics of good money */
      { type: 'match_pairs',
        stem: 'Match each characteristic of good money to an example of what happens when it is absent.',
        pairs: [
          { a: 'Durable', b: 'Milk cannot serve as money – it spoils; money must last' },
          { a: 'Portable', b: 'Large stones (Rai of Yap) are impractical for daily transactions' },
          { a: 'Divisible', b: 'A live cow is difficult to make change with – money must divide into small units' },
          { a: 'Acceptable', b: 'A currency not trusted by others loses its medium of exchange function' },
          { a: 'Limited supply / Scarce', b: 'Zimbabwean dollar lost value when government printed excessively; scarcity is essential' },
          { a: 'Difficult to counterfeit', b: 'If notes are easily faked, traders reject them and trust collapses' }
        ],
        exp: 'Good money must be: <strong>Durable</strong> (not deteriorate in storage – gold, paper notes); <strong>Portable</strong> (easy to carry – note evolution from gold coins to paper to digital); <strong>Divisible</strong> (can be split for small transactions – 1p coins to £50 notes); <strong>Acceptable</strong> (widely trusted and accepted – a currency\'s value depends on confidence); <strong>Scarce</strong> (limited supply maintains value – printing too much causes inflation); <strong>Difficult to counterfeit</strong> (so trust in the system holds). Bitcoin satisfies most but is volatile (poor store of value) and has limited divisibility for small transactions.'
      },

      /* 6 – Para fill: money and specialisation link */
      { type: 'para_fill',
        stem: 'Complete the paragraph linking specialisation to the need for money.',
        anchor: 'Specialisation and money co-evolved – one made the other necessary.',
        para: 'As economies specialise, individuals produce [1] types of goods but need [2] types to survive. Without money, they face the [3] coincidence of wants problem – trades require both parties to want exactly what the other offers. Money solves this by acting as a [4] of exchange, allowing people to [5] their output for money and then [6] whatever they need from others. The more [7] an economy becomes, the more important the [8] system is, because the probability of matching [9] in barter falls toward zero.',
        blanks: [
          { id: 1, opts: ['fewer', 'more', 'different', 'identical'], ans: 0 },
          { id: 2, opts: ['many', 'fewer', 'identical', 'substitutable'], ans: 0 },
          { id: 3, opts: ['double', 'single', 'triple', 'zero'], ans: 0 },
          { id: 4, opts: ['medium', 'store', 'measure', 'standard'], ans: 0 },
          { id: 5, opts: ['sell', 'barter', 'import', 'save'], ans: 0 },
          { id: 6, opts: ['buy', 'produce', 'export', 'save'], ans: 0 },
          { id: 7, opts: ['specialised', 'self-sufficient', 'equal', 'planned'], ans: 0 },
          { id: 8, opts: ['monetary', 'barter', 'trade', 'planning'], ans: 0 },
          { id: 9, opts: ['coincidences', 'prices', 'currencies', 'trades'], ans: 0 }
        ],
        exp: '(1) <strong>Fewer</strong> types – specialisation means producing less variety. (2) <strong>Many</strong> types – but needing food, clothing, housing, etc. (3) <strong>Double</strong> coincidence of wants. (4) <strong>Medium</strong> of exchange. (5) <strong>Sell</strong> output for money. (6) <strong>Buy</strong> whatever they need. (7) The more <strong>specialised</strong> the economy. (8) <strong>Monetary</strong> system. (9) Probability of matching <strong>coincidences</strong> in barter falls to near zero. The logical chain: scarcity → specialisation → exchange → need for money → monetary economy. This is why all complex economies use money rather than barter.'
      },

      /* 7 – Cause & effect: money and economic development */
      { type: 'cause_effect',
        stem: 'Match each failure of money to its economic consequence.',
        pairs: [
          { cause: 'Hyperinflation destroys money\'s store of value (Zimbabwe 2008)', effect: 'Barter and dollarisation emerge as people switch to more stable currencies' },
          { cause: 'Money supply grows faster than productive capacity', effect: 'Inflation – each unit of money buys less' },
          { cause: 'A bank run collapses confidence in money\'s acceptability', effect: 'Financial crisis – the medium of exchange function breaks down' },
          { cause: 'Cryptocurrency high volatility undermines predictability', effect: 'Businesses refuse to price or hold contracts in that currency' },
          { cause: 'Central bank achieves stable, low inflation', effect: 'Long-term contracts (mortgages, bonds) become feasible – standard of deferred payment works' },
          { cause: 'Counterfeiting reduces trust in banknotes', effect: 'Traders reject notes – acceptability and the measure-of-value function break down' }
        ],
        exp: 'Money\'s four functions are interdependent – when one breaks down, others follow. <strong>Store of value failure</strong> (hyperinflation): people stop holding money, resort to barter or foreign currency. <strong>Acceptability failure</strong> (bank run, counterfeiting): medium of exchange collapses. <strong>Measure of value failure</strong> (instability): pricing becomes impossible. <strong>Deferred payment failure</strong> (unpredictable inflation): long-term contracts become too risky. This is why central banks prioritise inflation control – without monetary stability, the foundations of a specialised, exchange-based economy crumble.'
      },

      /* 8 – Odd one out: functions of money */
      { type: 'odd_one_out',
        stem: 'Three of these describe <strong>functions of money</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '📊', label: 'Measure of value – money provides a standard measure for comparing prices', note: '' },
          { icon: '🔄', label: 'Medium of exchange – money facilitates transactions without barter', note: '' },
          { icon: '📈', label: 'Profit motive – money incentivises entrepreneurship by enabling profit measurement', note: '' },
          { icon: '💾', label: 'Store of value – money can be saved and spent in the future', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is the <strong>profit motive</strong>. This is not a function of money – it describes the motivation of entrepreneurs in a market economy. The four functions of money are: medium of exchange, store of value, measure of value, and standard of deferred payment. Note: the profit motive does depend on money (you can only measure profit if you have a measure of value), but being a prerequisite is not the same as being a function.'
      },

      /* 9 – Data table: specialisation and productivity */
      { type: 'data_table',
        stem: 'The table compares productivity in a small economy before and after specialisation.',
        headers: ['Worker', 'Before specialisation (output/day each)', 'After specialisation (output/day total)'],
        rows: [
          ['Baker', '5 loaves + 2 pots', '20 loaves (specialised)'],
          ['Potter', '3 loaves + 4 pots', '18 pots (specialised)'],
          ['Total output', '8 loaves + 6 pots', '20 loaves + 18 pots']
        ],
        question: 'Which conclusion is <strong>best supported</strong> by the data?',
        opts: [
          'Specialisation increases total output (20 loaves vs 8; 18 pots vs 6) – demonstrating the gains from specialising and then trading',
          'Specialisation reduces choice – workers are forced to produce only one good',
          'The data show that the baker is absolutely worse at pottery, so specialisation is unfair to potters',
          'Both workers should continue producing both goods to maintain self-sufficiency and reduce dependence'
        ],
        ans: 0,
        exp: 'The data show dramatic output gains from specialisation: loaves rise from 8 to 20 per day (+150%), pots rise from 6 to 18 per day (+200%). Each worker, specialising and then trading, ends up with more of both goods than they could produce alone. This is the core argument for specialising to trade: it raises total output, enabling higher living standards through exchange. Option D (self-sufficiency) sacrifices these gains for resilience – a genuine trade-off but one with large welfare costs.'
      },

      /* 10 – Multi-select: evaluation of money and specialisation */
      { type: 'multi_select',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of the role of money in enabling a specialised economy?',
        opts: [
          'Money acts as a medium of exchange, store of value, measure of value, and standard of deferred payment',
          'While money enables specialisation and exchange, its effectiveness as a store of value depends critically on price stability – meaning the benefits of a specialised monetary economy are conditional on competent central bank management, rather than automatic',
          'Money is always better than barter for allocating resources',
          'Digital currencies like Bitcoin replicate money\'s medium of exchange and measure of value functions but fail the store of value test due to volatility, suggesting the technological form of money matters less than its stability properties',
          'The double coincidence of wants problem shows that barter is inefficient',
          'Specialisation requires exchange, which requires money, which requires monetary stability – so the productivity gains from the division of labour are ultimately contingent on institutional capacity (central banking, rule of law, contract enforcement) that many developing economies lack'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: qualifies the benefits of a monetary economy by identifying the condition (price stability) on which they depend – concluding that benefits are conditional, not automatic. D: applies the framework to Bitcoin, distinguishing which functions it performs well from those it fails, and reaches a conclusion about what matters (stability, not technological form). F: extends the logic chain from specialisation through exchange to monetary stability to institutional capacity, concluding that productivity gains are ultimately contingent on institutions – a multi-step evaluative move. A and E are descriptions; C is an overclaim without qualification.'
      }

    ]
  };

})();
