(function () {

  window.ECONOS_QUIZ = {
    id:       'specialisation_money_main',
    topicId:  'specialisation_money_main',
    title:    'Specialisation &amp; Money',
    subtitle: 'Theme 1 &middot; Topic 1.5 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('specialisation_money_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers division of labour, barter problem, four functions of money, characteristics of good money, and globalisation links',
    shortNames: [
      'Division of labour', 'Benefits sort', 'Barter problem MCQ', 'Functions of money sort',
      'Characteristics match', 'Para fill', 'Cause & effect', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: division of labour */
      { type: 'mcq',
        id: 'q_spec_1',
        stem: 'Adam Smith\'s famous pin factory example illustrates the benefits of the <strong>division of labour</strong>. What is the primary economic argument?',
        opts: [
          'By breaking production into specialised tasks, each worker develops skill through repetition, tools can be designed for specific tasks, and time is saved switching between activities – dramatically raising output per worker',
          'Dividing labour means firms can pay workers less per hour – the cost savings are the main benefit',
          'Specialisation ensures that every worker is equally productive regardless of their natural abilities',
          'The division of labour is only possible in manufacturing – service industries cannot benefit from specialisation'
        ],
        ans: 0,
        exp: 'Smith\'s pin factory (Wealth of Nations, 1776): one worker making pins alone might produce 20 per day. With 18 workers each specialising in one of the 18 steps (drawing wire, cutting, pointing, etc.), the factory produces 48,000 pins per day – 2,400 per worker. The gains come from: <strong>skill development</strong> through repetition; <strong>specialised capital</strong> (tools designed for specific tasks); <strong>no time lost</strong> switching between activities. These gains apply to services too (an accountant vs a doctor vs a lawyer all specialise rather than each person doing all professional tasks).'
      },

      /* 2 – Elastic sort: benefits vs limitations of specialisation */
      { type: 'elastic_sort',
        id: 'q_spec_2',
        stem: 'Classify each statement as a <strong>benefit</strong> or <strong>limitation</strong> of specialisation and the division of labour.',
        categories: ['benefit', 'limitation'],
        categoryLabels: ['Benefit of specialisation', 'Limitation / drawback'],
        goods: [
          { icon: '📈', label: 'Labour productivity rises as workers develop deep skill in a narrow task', note: '', ans: 'benefit' },
          { icon: '😴', label: 'Repetitive tasks cause worker alienation, boredom, and high staff turnover', note: '', ans: 'limitation' },
          { icon: '⚙️', label: 'Capital equipment can be designed specifically for each specialised task', note: '', ans: 'benefit' },
          { icon: '⚠️', label: 'Production is vulnerable – if one worker is absent, the whole chain may stop', note: '', ans: 'limitation' },
          { icon: '🌍', label: 'International specialisation allows countries to export what they produce best', note: '', ans: 'benefit' },
          { icon: '🔧', label: 'Structural unemployment rises if a specialised industry declines', note: '', ans: 'limitation' }
        ],
        exp: '<strong>Benefits</strong>: higher productivity through skill and repetition; specialised capital; international trade and comparative advantage. <strong>Limitations</strong>: worker alienation and boredom (Marx\'s critique of industrial capitalism); production interdependence creates fragility (one absent worker halts the line); <strong>structural unemployment</strong> – when a specialised industry declines (e.g. UK coal mining), workers with narrow skills find it hard to transfer to other sectors. Trade-off: specialisation raises aggregate output but creates distributional and resilience risks.'
      },

      /* 3 – MCQ: barter and double coincidence */
      { type: 'mcq',
        id: 'q_spec_3',
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
        id: 'q_spec_4',
        stem: 'Classify each example under the correct <strong>function of money</strong>.',
        categories: ['medium_exchange', 'store_value', 'unit_account', 'standard_deferred'],
        categoryLabels: ['Medium of exchange', 'Store of value', 'Unit of account', 'Standard of deferred payment'],
        goods: [
          { icon: '🛒', label: 'You pay £3.50 for a coffee at a café', note: '', ans: 'medium_exchange' },
          { icon: '🏦', label: 'You save £500 in a bank account to use for holiday spending next year', note: '', ans: 'store_value' },
          { icon: '🏷️', label: 'A supermarket prices 10,000 products so consumers can compare value', note: '', ans: 'unit_account' },
          { icon: '📋', label: 'A mortgage allows you to borrow £300,000 today and repay it over 25 years', note: '', ans: 'standard_deferred' },
          { icon: '💰', label: 'A business prices its products in pounds so customers can assess relative value', note: '', ans: 'unit_account' },
          { icon: '🤝', label: 'A firm pays wages so workers can buy goods from many different employers', note: '', ans: 'medium_exchange' }
        ],
        exp: '<strong>Medium of exchange</strong>: money enables transactions without barter – solves the double coincidence of wants. <strong>Store of value</strong>: money can be saved and used in the future (unlike perishable goods). <strong>Unit of account</strong>: money provides a common measure of value – makes price comparison possible across millions of goods. <strong>Standard of deferred payment</strong>: money enables credit – borrow now, repay later in the same unit. All four functions require money to hold its value over time; hyperinflation destroys the store of value and standard of deferred payment functions first.'
      },

      /* 5 – Match pairs: characteristics of good money */
      { type: 'match_pairs',
        id: 'q_spec_5',
        stem: 'Match each characteristic of good money to an example of what happens when it is absent.',
        pairs: [
          { a: 'Durable', b: 'Milk cannot serve as money – it spoils; money must last' },
          { a: 'Portable', b: 'Large stones (Rai of Yap) are impractical for daily transactions' },
          { a: 'Divisible', b: 'A live cow is difficult to make change with – money must divide into small units' },
          { a: 'Acceptable', b: 'A currency not trusted by others loses its medium of exchange function' },
          { a: 'Limited supply / Scarce', b: 'Zimbabwean dollar lost value when government printed excessively; scarcity is essential' },
          { a: 'Uniform / Homogeneous', b: 'If every note differs in value, pricing becomes impossible – each unit must be identical' }
        ],
        exp: 'Good money must be: <strong>Durable</strong> (not deteriorate in storage – gold, paper notes); <strong>Portable</strong> (easy to carry – note evolution from gold coins to paper to digital); <strong>Divisible</strong> (can be split for small transactions – 1p coins to £50 notes); <strong>Acceptable</strong> (widely trusted and accepted – a currency\'s value depends on confidence); <strong>Scarce</strong> (limited supply maintains value – printing too much causes inflation); <strong>Uniform</strong> (each unit identical – essential for pricing). Bitcoin satisfies most but is volatile (poor store of value) and has limited divisibility for small transactions.'
      },

      /* 6 – Para fill: money and specialisation link */
      { type: 'para_fill',
        id: 'q_spec_6',
        stem: 'Complete the paragraph linking specialisation to the need for money.',
        anchor: 'Specialisation and money co-evolved – one made the other necessary.',
        para: 'As economies specialise, individuals produce [1] types of goods but need [2] types to survive. Without money, they face the [3] coincidence of wants problem – trades require both parties to want exactly what the other offers. Money solves this by acting as a [4] of exchange, allowing people to [5] their output for money and then [6] whatever they need from others. The more [7] an economy becomes, the more important the [8] system is, because the probability of matching [9] in barter falls toward zero.',
        blanks: [
          { id: 1, opts: ['fewer', 'more', 'different', 'identical'], ans: 0 },
          { id: 2, opts: ['many', 'fewer', 'identical', 'substitutable'], ans: 0 },
          { id: 3, opts: ['double', 'single', 'triple', 'zero'], ans: 0 },
          { id: 4, opts: ['medium', 'store', 'unit', 'standard'], ans: 0 },
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
        id: 'q_spec_7',
        stem: 'Match each failure of money to its economic consequence.',
        pairs: [
          { cause: 'Hyperinflation destroys money\'s store of value (Zimbabwe 2008)', effect: 'Barter and dollarisation emerge as people switch to more stable currencies' },
          { cause: 'Money supply grows faster than productive capacity', effect: 'Inflation – each unit of money buys less' },
          { cause: 'A bank run collapses confidence in money\'s acceptability', effect: 'Financial crisis – the medium of exchange function breaks down' },
          { cause: 'Cryptocurrency high volatility undermines predictability', effect: 'Businesses refuse to price or hold contracts in that currency' },
          { cause: 'Central bank achieves stable, low inflation', effect: 'Long-term contracts (mortgages, bonds) become feasible – standard of deferred payment works' },
          { cause: 'Counterfeiting reduces uniformity of banknotes', effect: 'Traders reject notes – acceptability and unit of account functions break down' }
        ],
        exp: 'Money\'s four functions are interdependent – when one breaks down, others follow. <strong>Store of value failure</strong> (hyperinflation): people stop holding money, resort to barter or foreign currency. <strong>Acceptability failure</strong> (bank run, counterfeiting): medium of exchange collapses. <strong>Unit of account failure</strong> (instability): pricing becomes impossible. <strong>Deferred payment failure</strong> (unpredictable inflation): long-term contracts become too risky. This is why central banks prioritise inflation control – without monetary stability, the foundations of a specialised, exchanged-based economy crumble.'
      },

      /* 8 – Odd one out: functions of money */
      { type: 'odd_one_out',
        id: 'q_spec_8',
        stem: 'Three of these describe <strong>functions of money</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '📊', label: 'Unit of account – money provides a standard measure of value for comparing prices', note: '' },
          { icon: '🔄', label: 'Medium of exchange – money facilitates transactions without barter', note: '' },
          { icon: '📈', label: 'Profit motive – money incentivises entrepreneurship by enabling profit measurement', note: '' },
          { icon: '💾', label: 'Store of value – money can be saved and spent in the future', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is the <strong>profit motive</strong>. This is not a function of money – it describes the motivation of entrepreneurs in a market economy. The four functions of money are: medium of exchange, store of value, unit of account, and standard of deferred payment. Note: the profit motive does depend on money (you can only measure profit if you have a unit of account), but being a prerequisite is not the same as being a function.'
      },

      /* 9 – Data table: specialisation and productivity */
      { type: 'data_table',
        id: 'q_spec_9',
        stem: 'The table compares productivity in a small economy before and after specialisation.',
        headers: ['Worker', 'Before specialisation (output/day each)', 'After specialisation (output/day total)'],
        rows: [
          ['Baker', '5 loaves + 2 pots', '20 loaves (specialised)'],
          ['Potter', '3 loaves + 4 pots', '18 pots (specialised)'],
          ['Total output', '8 loaves + 6 pots', '20 loaves + 18 pots']
        ],
        question: 'Which conclusion is <strong>best supported</strong> by the data?',
        opts: [
          'Specialisation increases total output (20 loaves vs 8; 18 pots vs 6) – demonstrating absolute and comparative advantage gains from the division of labour',
          'Specialisation reduces choice – workers are forced to produce only one good',
          'The data show that the baker is absolutely worse at pottery, so specialisation is unfair to potters',
          'Both workers should continue producing both goods to maintain self-sufficiency and reduce dependence'
        ],
        ans: 0,
        exp: 'The data show dramatic output gains from specialisation: loaves rise from 8 to 20 per day (+150%), pots rise from 6 to 18 per day (+200%). Both workers produce more of their specialised good than they could produce of any single good without specialisation. This is the core argument for the division of labour: specialisation raises aggregate output, enabling higher living standards through exchange. The gains arise from skill development, specialised tools, and no time lost switching tasks. Option D (self-sufficiency) sacrifices these gains for resilience – a genuine trade-off but one with large welfare costs.'
      },

      /* 10 – Multi-select: evaluation of money and specialisation */
      { type: 'multi_select',
        id: 'q_spec_10',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of the role of money in enabling a specialised economy?',
        opts: [
          'Money acts as a medium of exchange, store of value, unit of account, and standard of deferred payment',
          'While money enables specialisation and exchange, its effectiveness as a store of value depends critically on price stability – meaning the benefits of a specialised monetary economy are conditional on competent central bank management, rather than automatic',
          'Money is always better than barter for allocating resources',
          'Digital currencies like Bitcoin replicate money\'s medium of exchange and unit of account functions but fail the store of value test due to volatility, suggesting the technological form of money matters less than its stability properties',
          'The double coincidence of wants problem shows that barter is inefficient',
          'Specialisation requires exchange, which requires money, which requires monetary stability – so the productivity gains from the division of labour are ultimately contingent on institutional capacity (central banking, rule of law, contract enforcement) that many developing economies lack'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: qualifies the benefits of monetary economy by identifying the condition (price stability) on which they depend – reaching the conclusion that benefits are conditional, not automatic. D: applies the framework to Bitcoin, distinguishing which functions it performs well from those it fails at, and reaches a conclusion about what matters (stability properties, not technological form). F: extends the logic chain from specialisation through exchange to monetary stability to institutional capacity, reaching the conclusion that productivity gains are ultimately contingent on institutions – a multi-step evaluative move. A and E are descriptions; C is an overclaim without qualification.'
      }

    ]
  };

})();
