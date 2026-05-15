window.ECONOS_TOPIC = {
  id: 'specialisation_money',
  topicNum: '1.3',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Specialisation & Money',
  estTime: '7-9 minutes',
  goal: 'Lock in division of labour, the gains from specialisation, the limitations of barter, and the four functions of money.',
  intro: {
    heroKey: 'trade',
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
    {
      id: 'specialisation_money_1',
      template: 'framing',
      title: 'Specialisation and the Division of Labour',
      body: '<strong>Specialisation</strong> occurs when individuals, firms, regions, or countries concentrate on producing what they are relatively most efficient at. <strong>Division of labour</strong> refers to breaking production into specialised tasks, with each worker performing only one or a few.<br><br>Adam Smith (Wealth of Nations, 1776): a pin factory with 10 workers each performing one step produces 48,000 pins/day. The same workers without specialisation could produce perhaps 200. Productivity multiplier: 240x.<br><br>Benefits at the national level: countries specialise in goods where they have comparative advantage, then trade — raising world output above what each could achieve in isolation.',
      keyTerms: [
        { term: 'Specialisation', def: 'Concentrating on one good or task in which you have relative efficiency.' },
        { term: 'Division of labour', def: 'Splitting production into specialised tasks performed by different workers.' },
        { term: 'Comparative advantage', def: 'Ability to produce a good at lower opportunity cost than another producer — basis for mutually beneficial trade.' }
      ],
      examEdge: 'Smith\'s pin factory is the classic exam example — know the numbers. The link to comparative advantage is crucial: specialisation at the firm level → division of labour gains; specialisation at the national level → comparative advantage gains. Same principle, different scale.'
    },
    {
      id: 'specialisation_money_2',
      template: 'cause',
      title: 'Benefits of Specialisation',
      causes: [
        { head: 'Higher productivity', body: 'Repetition and focus develop skill and speed. A worker who performs the same task thousands of times becomes expert — learning by doing.' },
        { head: 'Capital efficiency', body: 'Specialised machinery can be used where most productive. Automated assembly lines exploit economies of scale that generalised production cannot.' },
        { head: 'Time saving', body: 'No time lost switching between tasks. Smith noted workers switching tasks "dawdle" — specialisation eliminates this transition cost.' },
        { head: 'Innovation', body: 'Specialists notice inefficiencies in their specific task and develop labour-saving improvements. Division of labour drives invention.' },
        { head: 'International gains', body: 'Countries specialise in goods of comparative advantage, trade, and both gain — global output rises beyond what autarky allows.' }
      ],
      examEdge: 'Smith identified three main gains: dexterity, time-saving, and invention/machinery. Know this list — it\'s directly quotable. Evaluation: these gains require exchange (and therefore money), and create dependency risks if specialisation is too narrow.'
    },
    {
      id: 'specialisation_money_3',
      template: 'paired',
      title: 'Specialisation: Benefits vs Limitations',
      left: {
        label: 'Benefits',
        points: [
          'Higher output per worker — productivity gains',
          'Lower unit costs — enables economies of scale',
          'Comparative advantage exploited — world output rises',
          'Innovation spurred by focused expertise',
          'Higher wages possible from greater productivity surplus'
        ]
      },
      right: {
        label: 'Limitations',
        points: [
          'Repetitive tasks cause worker alienation, boredom and absenteeism (Marx: "alienation of labour")',
          'Interdependence — one bottleneck disrupts entire chain (e.g. semiconductor shortage 2021)',
          'Structural unemployment if specialised skills become obsolete (e.g. coal miners)',
          'Over-dependence on trade creates vulnerability to supply chain disruption',
          'Worker specialisation may limit career flexibility and social mobility'
        ]
      },
      examEdge: 'The COVID-19 pandemic and semiconductor crisis perfectly illustrate specialisation\'s vulnerability: global just-in-time supply chains broke down when one node failed. This is premier evaluation material for any essay touching on specialisation or globalisation.'
    },
    {
      id: 'specialisation_money_4',
      template: 'framing',
      title: 'The Problem with Barter',
      body: 'Specialisation requires exchange. Without money, exchange relies on <strong>barter</strong> — the direct swap of goods for goods. But barter requires a <em>double coincidence of wants</em>: I must want what you have, AND you must want what I have, at the same time and place.<br><br>This becomes exponentially harder as an economy grows. With N goods, there are N(N-1)/2 possible exchange ratios. With 1,000 goods: 499,500 prices to quote. Money reduces this to N prices — one price per good in money terms.<br><br>Barter also fails when goods are indivisible (you cannot give half a cow for a loaf of bread) or non-storable (fresh fish cannot be saved to buy boots later).',
      keyTerms: [
        { term: 'Barter', def: 'Direct exchange of goods for goods without a medium of exchange.' },
        { term: 'Double coincidence of wants', def: 'The requirement in barter that each party must want exactly what the other has.' },
        { term: 'Transaction costs', def: 'Time, effort and resources spent finding a trading partner — money dramatically reduces these.' }
      ],
      examEdge: 'The double coincidence of wants problem is the definitive exam explanation of why money exists. Express it precisely: "In barter, for exchange to occur, A must want what B has AND B must want what A has, at the same time — a condition that becomes impossibly restrictive as an economy diversifies."'
    },
    {
      id: 'specialisation_money_5',
      template: 'cause',
      title: 'The Four Functions of Money',
      causes: [
        { head: 'Medium of exchange', body: 'Money is universally accepted in payment for goods and services — eliminates the double coincidence of wants problem. The primary function.' },
        { head: 'Store of value', body: 'Money can be saved and used in future. Unlike perishable goods, money holds purchasing power over time (assuming low inflation). Inflation erodes this function.' },
        { head: 'Unit of account', body: 'Money provides a common measure of value — all prices expressed in the same unit (\xa3, $, €), enabling easy comparison of relative prices.' },
        { head: 'Standard of deferred payment', body: 'Money enables credit — goods and services can be received now with payment promised later. Essential for investment, mortgages, and complex contracts.' }
      ],
      examEdge: 'Inflation attacks two functions: store of value (money buys less in future) and standard of deferred payment (debts repaid in devalued currency — benefits debtors, harms creditors). Hyperinflation (Zimbabwe, Weimar Germany) causes societies to revert to barter — a powerful real-world illustration.'
    },
    {
      id: 'specialisation_money_6',
      template: 'framing',
      title: 'Characteristics of Good Money',
      body: 'For money to function effectively, it should possess specific characteristics — summarised by the mnemonic <strong>DAPS + P</strong>:<br><br><strong>Durable:</strong> lasts over time without deteriorating (coins, notes last; salt or tobacco do not).<br><strong>Acceptable:</strong> widely accepted in exchange — requires trust (legal tender status, government backing).<br><strong>Portable:</strong> easy to carry and transfer (notes better than gold bars; electronic transfers best of all).<br><strong>Scarce:</strong> limited supply maintains value — if money can be created freely, inflation destroys purchasing power.<br><strong>Divisible:</strong> can be broken into small units to facilitate small transactions (coins, cents).',
      keyTerms: [
        { term: 'Legal tender', def: 'Money that must be accepted by law in settlement of a debt.' },
        { term: 'Fiat money', def: 'Money with no intrinsic value — its value derives from government decree and public trust.' },
        { term: 'Commodity money', def: 'Money with intrinsic value (gold, silver) — its value exists independently of its monetary role.' }
      ],
      examEdge: 'Cryptocurrencies (Bitcoin) are tested as an application. Assessment: Bitcoin is durable and scarce (21m cap), but volatile (poor store of value), limited acceptance (acceptability weak), and divisible. Conclusion: functions as speculative asset better than as money — good evaluation content.'
    },
    {
      id: 'specialisation_money_7',
      template: 'framing',
      title: 'Specialisation, Exchange, and Economic Development',
      body: 'The sequence of development — specialisation → need for exchange → money → markets → financial system — is the foundation of modern economies. Without money facilitating exchange, complex specialisation is impossible; without specialisation, productivity cannot rise far above subsistence.<br><br>Development economists identify the emergence of reliable money (currency stability, banking) as a prerequisite for sustained growth. Countries with hyperinflation or weak currencies (Venezuela, Zimbabwe) see economic activity collapse toward barter as money fails its functions.<br><br>Digital money (contactless, crypto, Central Bank Digital Currencies) extends these functions further — reducing transaction costs of exchange to near-zero.',
      keyTerms: [
        { term: 'CBDC', def: 'Central Bank Digital Currency — electronic form of central bank money; e.g. the "digital pound" proposed by the Bank of England.' },
        { term: 'Hyperinflation', def: 'Extremely rapid inflation (typically >50%/month) destroying money\'s store of value and medium of exchange functions.' },
        { term: 'Financial intermediation', def: 'Banks channel savings into investment — enables capital accumulation needed for growth.' }
      ],
      examEdge: 'A strong essay note: the link between specialisation and money is circular — specialisation requires money to function; but money\'s development is itself driven by the gains from specialisation that make exchange worthwhile. This mutual reinforcement is a hallmark of market economies.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
