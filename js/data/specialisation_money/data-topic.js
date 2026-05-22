window.ECONOS_TOPIC = {
  id: 'specialisation_money',
  topicNum: '1.5',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Specialisation & Money',
  estTime: '7-9 minutes',
  goal: 'Lock in division of labour, the gains from specialisation, the limitations of barter, and the four functions of money.',
  intro: {
    heroKey: 'heroSpecialisationMoney',
    summary: 'Specialisation dramatically raises productivity but creates a need for exchange. Barter is too inefficient to support complex trade — money solves this by acting as a medium of exchange, store of value, unit of account, and standard of deferred payment.',
    doInThis: 'Work through 7 cards covering specialisation by individuals and countries, Adam Smith\'s pin factory, the division of labour, barter\'s problems, money\'s four functions, and the characteristics of good money.',
    outcomes: [
      'Explain how specialisation raises output using the division of labour example',
      'Identify the gains and limitations of specialisation',
      'Explain why barter is inefficient and how money solves the double coincidence of wants problem',
      'State and apply the four functions of money'
    ],
    tip: 'Money functions: Medium of Exchange (lubricates trade), Store of Value (holds purchasing power), Unit of Account (common measure of price), Standard of Deferred Payment (enables credit).',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    /* ================================================================
       CARD 1 — The big picture: 5-step chain + "Why this matters"
       ================================================================ */
    {
      id: 'specialisation_money_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
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
      examEdge: 'Specialisation only works well when exchange is possible — and money makes exchange far easier than barter. Make this link explicit in any answer that touches on productivity, trade or development.'
    },

    /* ================================================================
       CARD 2 — Benefits of Specialisation: 4 icon tiles with worker/firm/country examples inline
       ================================================================ */
    {
      id: 'specialisation_money_2',
      template: 'cause',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Benefits of Specialisation',
      tip: { icon: '💡', tone: 'blue', text: 'By focusing on what we do best, we raise efficiency and output. Specialisation helps workers, firms and countries achieve more.' },
      economistQuote: {
        portraitKey: 'economistAdamSmith',
        tone: 'amber',
        label: 'Economist insight on specialisation',
        quote: 'The division of labour is limited by the extent of the market.',
        attribution: 'Adam Smith, <em>Wealth of Nations</em> (1776)'
      },
      causes: [
        {
          head: 'Higher productivity & efficiency',
          icon: '⚡',
          body: 'Specialists complete tasks faster and with fewer errors, so more can be produced in less time.',
          example: { icon: '👤', text: 'A baker who focuses on baking gets faster and better, making more loaves and earning more.' }
        },
        {
          head: 'Gains from division of labour',
          icon: '🔧',
          body: 'Breaking tasks into steps and repeating them builds skill and speed — Smith\'s pin factory turned 200 pins/day into 48,000.',
          example: { icon: '🪡', text: 'Adam Smith\'s pin factory: 10 specialised workers produced ~240× more pins than working alone.' }
        },
        {
          head: 'Lower unit costs & economies of scale',
          icon: '🏭',
          body: 'Larger, specialised production spreads fixed costs and reduces the cost per unit.',
          example: { icon: '🚗', text: 'A car factory specialising in engines produces more engines, of higher quality, at lower cost.' }
        },
        {
          head: 'More trade and consumer choice',
          icon: '🌍',
          body: 'Specialisation enables trade, bringing more goods of better quality at a wider range of prices.',
          example: { icon: '🚢', text: 'A country specialising at its comparative advantage trades for the rest — raising living standards.' }
        }
      ],
      causesLabel: 'The key benefits',
      causesEmoji: '⭐',
      examEdge: 'Smith identified three core gains: dexterity, time-saving, and invention/machinery. Know the list verbatim. Evaluation: these gains require exchange — without trade, specialisation cannot deliver.'
    },

    /* ================================================================
       CARD 3 — Benefits vs Limitations: paired with icon rows + green conclusion
       ================================================================ */
    {
      id: 'specialisation_money_3',
      template: 'paired',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Specialisation: Benefits vs Limitations',
      tip: { icon: '💡', tone: 'blue', text: 'Specialisation usually raises efficiency but can also create risk.' },
      left: {
        label: 'Benefits',
        icon: '⭐',
        tone: 'green',
        rows: [
          { icon: '📈', title: 'Higher output',    text: 'People and firms produce more in less time.' },
          { icon: '🎓', title: 'Expertise',        text: 'Specialists develop skills and produce better quality.' },
          { icon: '💷', title: 'Lower costs',      text: 'Doing fewer tasks allows firms to cut costs and save resources.' },
          { icon: '🛒', title: 'Wider choice',     text: 'More products and services are available to consumers.' }
        ]
      },
      right: {
        label: 'Limitations',
        icon: '⚠️',
        tone: 'amber',
        rows: [
          { icon: '😐', title: 'Monotony',                  text: 'Repetitive tasks can become boring and less satisfying — Marx\'s "alienation of labour".' },
          { icon: '🔗', title: 'Dependence on others',     text: 'You rely on others — and global supply chains — for the goods and services you need.' },
          { icon: '⛈️', title: 'Vulnerability to shocks',  text: 'Disruptions to suppliers or markets can cause large knock-on problems (e.g. semiconductors 2021).' },
          { icon: '🎯', title: 'Over-specialisation risk', text: 'Focusing too narrowly can limit adaptability — coal regions hit by structural unemployment.' }
        ]
      },
      conclusion: {
        title: 'Best conclusion',
        text: 'Specialisation is usually beneficial, but the gains depend on flexibility and exchange.'
      },
      examEdge: 'Strong evaluation links a benefit to its possible downside. For example: "Specialisation lowers costs, but over-specialisation can leave an economy vulnerable to shocks if it relies too heavily on one industry."'
    },

    /* ================================================================
       CARD 4 — The Problem with Barter: failure-flow + verdict + 4 limitations
       ================================================================ */
    {
      id: 'specialisation_money_4',
      template: 'framing',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'The Problem with Barter',
      tip: { icon: '💡', tone: 'blue', text: 'Barter means exchanging goods directly without money. Trade is difficult when needs do not match.' },
      flow: [
        { icon: '🍎', title: 'Tom has apples',      sub: 'He wants bread. The baker has bread, but doesn\'t want apples.', tone: 'rose', status: 'fail' },
        { icon: '🥖', title: 'The baker has bread', sub: 'She wants milk. The farmer has milk, but doesn\'t want bread.', tone: 'rose', status: 'fail' },
        { icon: '🥛', title: 'The farmer has milk', sub: 'He wants apples — and Tom has them — but only by chance.',     tone: 'rose', status: 'fail' }
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
        { head: 'Indivisibility',             icon: '🧩', body: 'Many goods can\'t be easily split to make exact equal trades — half a cow for a loaf of bread won\'t do.' },
        { head: 'Lack of store of value',     icon: '🔐', body: 'Goods can spoil, wear out, or lose value over time — savings are difficult.' },
        { head: 'Double coincidence of wants', icon: '👥', body: 'Trade only happens when both people want what the other has — a punishingly rare match at scale.' }
      ],
      causesLabel: 'Key limitations of barter',
      causesEmoji: '🚫',
      keyTakeaway: 'Barter can work in small settings, but as economies grow these limits make it hopelessly inefficient. Money solves these problems and lets trade flourish.'
    },

    /* ================================================================
       CARD 5 — Four Functions of Money: per-tile examples + lean flow
       ================================================================ */
    {
      id: 'specialisation_money_5',
      template: 'cause',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'The Four Functions of Money',
      tip: { icon: '💡', tone: 'blue', text: 'Money solves the problems of barter because it performs four key jobs that make exchange possible, practical and efficient.' },
      causes: [
        {
          head: 'Medium of exchange',
          icon: '🤝',
          body: 'Money is accepted to buy and sell goods and services — eliminating the double coincidence of wants problem.',
          example: { icon: '🛒', text: 'You use money to buy groceries.' }
        },
        {
          head: 'Measure of value',
          icon: '🏷️',
          body: 'Money provides a common unit to price and compare goods and services across the whole economy.',
          example: { icon: '☕', text: 'A coffee is priced at £4.' }
        },
        {
          head: 'Store of value',
          icon: '🔐',
          body: 'Money can be saved today and used to buy goods and services in the future (assuming low inflation).',
          example: { icon: '🐷', text: 'You save money in a savings account.' }
        },
        {
          head: 'Deferred payment',
          icon: '📅',
          body: 'Money allows payments to be made in the future for goods and services received today — credit, mortgages, contracts.',
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
      examEdge: 'Inflation attacks two functions: store of value (money buys less) and deferred payment (debts repaid in devalued currency). Hyperinflation (Zimbabwe, Weimar Germany) causes economies to revert to barter — a powerful real-world illustration.'
    },

    /* ================================================================
       CARD 6 — Characteristics of Good Money: 6 tiles + 3-col verdict
       ================================================================ */
    {
      id: 'specialisation_money_6',
      template: 'framing',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Characteristics of Good Money',
      tip: { icon: '💡', tone: 'blue', text: 'Good money must be widely trusted and practical to use. These characteristics make money effective in everyday life.' },
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
      keyTakeaway: 'Good money supports exchange by being trusted, manageable, and stable in value.'
    },

    /* ================================================================
       CARD 7 — Specialisation, Exchange & Development: 6-step chain + tinted 3-channel + balanced note
       ================================================================ */
    {
      id: 'specialisation_money_7',
      template: 'framing',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'Specialisation, Exchange, and Economic Development',
      tip: { icon: '💡', tone: 'blue', text: 'When people, firms and countries specialise and trade successfully, output and living standards can rise.' },
      flow: [
        { icon: '🛠️', title: 'Specialisation',     sub: 'Focus on what you do relatively well.' },
        { icon: '🤝', title: 'Exchange',           sub: 'Trade to get what you don\'t produce as well.' },
        { icon: '💵', title: 'Money',              sub: 'Money is accepted in exchange, making trade much easier.' },
        { icon: '🌐', title: 'Larger markets',     sub: 'Access to more buyers and suppliers.' },
        { icon: '📈', title: 'Higher productivity', sub: 'More efficiency, innovation and better use of skills.' },
        { icon: '🏙️', title: 'Economic development', sub: 'Higher output, better jobs and rising living standards.' }
      ],
      flowTitle: 'How the ideas connect',
      flowEmoji: '🔗',
      causes: [
        { head: 'Rising incomes',          icon: '💼', tone: 'green',  body: 'Specialisation and trade enable more output and better-paying jobs, lifting incomes over time.' },
        { head: 'Wider markets and trade', icon: '🌐', tone: 'blue',   body: 'Firms and countries can sell to more customers and source better inputs, spreading opportunity more widely.' },
        { head: 'Better access to goods',  icon: '🛒', tone: 'purple', body: 'People enjoy greater choice, improved quality and lower prices in everyday life.' }
      ],
      causesLabel: 'Three development channels',
      causesEmoji: '🌱',
      causesStyle: 'tinted-flat',
      balancedNote: {
        title: 'A balanced note',
        text: 'Dependence on a narrow range of exports or unequal distribution of gains can be risks. Good policies and institutions help ensure the benefits are broad and sustainable.'
      },
      keyTakeaway: {
        title: 'The big takeaway',
        text: 'Specialisation and money help economies grow because they make exchange easier and more productive — connecting people, firms and countries to create more value and better lives.'
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
