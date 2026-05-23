(function () {

  window.ECONOS_QUIZ = {
    id:       'specialisation_money_main',
    topicId:  'specialisation_money_main',
    title:    'Specialisation &amp; Money',
    subtitle: 'Theme 1.3 &#183; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the division of labour, gains from specialisation, Smith\'s pin factory, the double coincidence of wants problem, the four functions of money, and the characteristics of good money. Mixed formats &#8212; classification, paragraph completion, diagnostic pair, data table &#8212; designed for the analysis marks Edexcel rewards.',
    shortNames: {
      'specialisation_money_1': 'Division of labour',
      'specialisation_money_2': 'Benefits of specialisation',
      'specialisation_money_3': 'Benefits vs limitations',
      'specialisation_money_4': 'Problem with barter',
      'specialisation_money_5': 'Four functions of money',
      'specialisation_money_6': 'Characteristics of money',
      'specialisation_money_7': 'Development link'
    },

    questions: [

      /* 1 &#8212; MCQ: division of labour */
      { type: 'mcq',
        stem: 'Adam Smith\'s pin factory example (Wealth of Nations, 1776) demonstrated that 10 workers applying the <strong>division of labour</strong> could produce approximately 48,000 pins per day. The same workers without specialisation might produce around 200 pins. This primarily illustrates which economic principle?',
        opts: [
          'Specialisation and division of labour can raise productivity by a very large multiple &#8212; in this case approximately 240 times &#8212; through dexterity, time-saving, and task-specific machinery',
          'Capital equipment is always more important than labour in raising output; the machinery alone accounts for the productivity gain',
          'Large firms are always more efficient than small ones; scale is the primary driver of the output increase',
          'Trade allows countries to consume beyond their PPF; Smith\'s example shows comparative advantage between workers'
        ],
        ans: 0,
        exp: 'Smith identified <strong>three sources</strong> of the productivity gain from division of labour: (1) dexterity &#8212; workers become expert through repetition; (2) time-saving &#8212; no time lost switching between tasks; (3) task-specific machinery &#8212; specialised tools optimised for each step. The productivity multiple of approximately 240 is a direct result of these three gains combined. The example applies at the firm level (division of labour) and at the national level (comparative advantage). It does not make a general claim about firm size or capital vs labour.'
      },

      /* 2 &#8212; Elastic sort: benefits vs limitations of specialisation */
      { type: 'elastic_sort',
        stem: 'Classify each statement as a <strong>benefit</strong> or a <strong>limitation</strong> of specialisation.',
        categories: ['benefit', 'limit'],
        categoryLabels: ['Benefit of specialisation', 'Limitation of specialisation'],
        goods: [
          { icon: '&#128200;', label: 'Repetition and focus develop expert skills, raising output per worker', note: '', ans: 'benefit' },
          { icon: '&#128683;', label: 'Repetitive tasks cause worker boredom, alienation, and higher absenteeism', note: '', ans: 'limit' },
          { icon: '&#127758;', label: 'Countries exploit comparative advantage, raising global output above autarky levels', note: '', ans: 'benefit' },
          { icon: '&#9940;', label: 'A single supply-chain bottleneck (e.g. semiconductor shortage) can disrupt entire industries', note: '', ans: 'limit' },
          { icon: '&#128202;', label: 'Lower unit costs through economies of scale and specialised machinery', note: '', ans: 'benefit' },
          { icon: '&#128119;', label: 'Structural unemployment if a specialised skill becomes obsolete (e.g. coal mining)', note: '', ans: 'limit' }
        ],
        exp: '<strong>Benefits</strong>: dexterity/skill from repetition; exploitation of comparative advantage; economies of scale. <strong>Limitations</strong>: worker alienation (Marx\'s critique); supply-chain vulnerability (2021 semiconductor crisis, COVID-19 showed this graphically); structural unemployment when specialisms become redundant. The evaluative point is that the gains from specialisation require exchange (and therefore money) to be realised &#8212; and create interdependency that raises vulnerability to disruption.'
      },

      /* 3 &#8212; MCQ: double coincidence of wants */
      { type: 'mcq',
        stem: 'A <strong>double coincidence of wants</strong> is best defined as:',
        opts: [
          'The condition in barter where each party must simultaneously want exactly what the other has to offer, at the same time and place',
          'A situation where two countries simultaneously gain from trade due to comparative advantage',
          'The requirement that money must simultaneously serve as a medium of exchange and a store of value',
          'A condition where demand and supply are equal in both the goods market and the labour market at the same time'
        ],
        ans: 0,
        exp: 'The <strong>double coincidence of wants</strong> is the fundamental problem of barter: for exchange to occur, A must want what B has AND B must want what A has &#8212; simultaneously, in the same place. As economies grow and diversify, this condition becomes increasingly difficult to satisfy. With N goods, there are N(N&#8722;1)/2 possible exchange ratios &#8212; with 1,000 goods, that is 499,500 different prices. Money solves this by reducing the number of prices to N (one per good in money terms) and decoupling the timing and location of transactions.'
      },

      /* 4 &#8212; Multi-select: functions of money */
      { type: 'multi_select',
        stem: 'Select ALL four <strong>functions of money</strong>.',
        opts: [
          'Medium of exchange &#8212; universally accepted in payment for goods and services',
          'Store of value &#8212; money can be saved and used in the future',
          'Unit of account &#8212; provides a common measure of value for all goods and services',
          'Standard of deferred payment &#8212; enables credit and contracts involving future payment',
          'Instrument of taxation &#8212; governments use money to collect taxes and redistribute income',
          'Source of wealth &#8212; money accumulation is the primary source of household wealth'
        ],
        correct: [0, 1, 2, 3],
        exp: 'The four functions of money are: (1) <strong>Medium of exchange</strong> &#8212; eliminates the double coincidence of wants problem; the primary function. (2) <strong>Store of value</strong> &#8212; holds purchasing power over time (inflation erodes this). (3) <strong>Unit of account</strong> &#8212; common measure allowing price comparison (&#163;, $, &#8364;). (4) <strong>Standard of deferred payment</strong> &#8212; enables mortgages, credit, and commercial contracts. "Instrument of taxation" and "source of wealth" are not standard economic functions of money &#8212; they describe uses of money rather than its defining properties as a monetary instrument.'
      },

      /* 5 &#8212; Para fill: characteristics of good money */
      { type: 'para_fill',
        stem: 'Complete the paragraph about the characteristics of good money using the correct term.',
        anchor: 'For money to perform its functions effectively, it must possess specific properties.',
        para: 'Good money must be [1] &#8212; it must last over time without deteriorating; coins and notes satisfy this, while perishable goods like fish do not. It must be [2] &#8212; widely accepted in exchange, which typically requires government backing as legal tender. It must be [3] &#8212; easy to carry and transfer; electronic transfers have the highest portability. It must be [4] &#8212; limited in supply to maintain purchasing power; if money can be created freely, [5] destroys its value. Finally, it must be [6] &#8212; capable of being broken into small units for everyday transactions.',
        blanks: [
          { id: 1, opts: ['durable', 'portable', 'scarce', 'divisible'], ans: 0 },
          { id: 2, opts: ['acceptable', 'durable', 'divisible', 'portable'], ans: 0 },
          { id: 3, opts: ['portable', 'durable', 'scarce', 'acceptable'], ans: 0 },
          { id: 4, opts: ['scarce', 'durable', 'portable', 'divisible'], ans: 0 },
          { id: 5, opts: ['inflation', 'deflation', 'recession', 'taxation'], ans: 0 },
          { id: 6, opts: ['divisible', 'scarce', 'durable', 'acceptable'], ans: 0 }
        ],
        exp: 'The characteristics of good money are summarised as <strong>DAPS+D</strong>: <strong>D</strong>urable (lasts over time), <strong>A</strong>cceptable (widely accepted, usually via legal tender status), <strong>P</strong>ortable (easy to carry/transfer), <strong>S</strong>carce (limited supply prevents inflation), <strong>D</strong>ivisible (can make small transactions). The blank about consequences of unlimited money creation is <strong>inflation</strong> &#8212; as more money chases the same goods, prices rise and purchasing power falls. Hyperinflation (Zimbabwe 2008, Weimar Germany 1923) destroyed money\'s store-of-value function and drove economies toward barter.'
      },

      /* 6 &#8212; Data table: money functions under stress */
      { type: 'data_table',
        stem: 'The table shows data for Zimbabwe during its 2007&#8211;2009 hyperinflation episode.',
        headers: ['Indicator', '2007', 'Nov 2008 (peak)'],
        rows: [
          ['Annual inflation rate', '66,000%', '89.7 sextillion %'],
          ['Largest banknote denomination', 'Z$250,000', 'Z$100 trillion'],
          ['Real GDP (index, 2000=100)', '82', '39'],
          ['Reported barter activity', 'Low', 'Widespread']
        ],
        question: 'Which conclusion is most consistent with the <strong>functions of money</strong> framework?',
        opts: [
          'Hyperinflation destroyed money\'s store-of-value function and eroded its medium-of-exchange function, causing a reversion to barter as money failed to perform its core roles',
          'Hyperinflation improved the unit-of-account function because larger nominal numbers made price differences easier to express',
          'The collapse in real GDP was caused entirely by the government printing money, with no other contributing factors',
          'Barter was able to fully substitute for money once hyperinflation set in, restoring economic activity to normal levels'
        ],
        ans: 0,
        exp: 'Zimbabwe\'s hyperinflation is the definitive modern illustration of money\'s functions under stress. The <strong>store of value</strong> function collapsed first: money held overnight lost enormous purchasing power. The <strong>unit of account</strong> function broke down as prices changed hourly. The <strong>medium of exchange</strong> function eroded as sellers refused to accept Zimbabwean dollars. The result was widespread barter &#8212; confirming that money and specialisation are co-dependent: when money fails its functions, complex exchange collapses. Real GDP halving reflects the collapse of the market economy, not just the monetary system. Barter is an extremely inefficient substitute &#8212; it cannot restore complex economic activity.'
      },

      /* 7 &#8212; multi_select: evaluation of Bitcoin as money */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>the extent to which Bitcoin fulfils the functions of money</strong>. Which of the following statements demonstrate <strong>evaluation</strong> &#8212; as opposed to description or one-sided analysis?',
        opts: [
          'Bitcoin\'s price volatility means its store-of-value function is severely compromised &#8212; falling ~65% in 2022 alone &#8212; but this does not disqualify it from functioning as a medium of exchange in low-value or time-sensitive transactions where parties accept the short-run price risk',
          'Bitcoin is accepted as payment in some places, so it functions as a medium of exchange',
          'Bitcoin\'s fixed supply cap of 21 million units satisfies the scarcity characteristic, making it durable and resistant to inflation &#8212; but scarcity alone is insufficient for monetary function without the price stability that allows it to serve as a unit of account or standard of deferred payment',
          'Bitcoin is not controlled by any government, which is different from traditional currencies',
          'The relevant comparison for Bitcoin\'s monetary fitness is not ideal money but the alternative &#8212; in countries experiencing hyperinflation (e.g. Venezuela, Zimbabwe), Bitcoin\'s volatility may still make it a superior store of value compared to a rapidly depreciating national currency',
          'Bitcoin fulfils all four functions of money because it is decentralised and widely discussed'
        ],
        correct: [0, 2, 4],
        exp: '<strong>Option A</strong> is strong evaluation: it acknowledges Bitcoin\'s volatility weakness on the store-of-value function but then qualifies the conclusion &#8212; arguing the medium-of-exchange function can still partially work in specific transactional contexts. This is a genuine weighing of competing factors with a directional but nuanced conclusion. <strong>Option C</strong> is strong evaluation: it grants that scarcity is satisfied (conceding a point) and then identifies the precise additional condition &#8212; price stability &#8212; that scarcity alone cannot provide, making the evaluation conditional and specific. <strong>Option E</strong> is strong evaluation: it reframes the comparison set rather than evaluating against an absolute standard &#8212; a sophisticated move that shows the student is aware the verdict depends on the counterfactual, and reaches a directional conclusion for a specific context. <strong>Option B</strong> is a distractor: it states a fact (some merchants accept Bitcoin) without evaluating the significance, scale, or limitations of that acceptance. <strong>Option D</strong> is a distractor: it describes a feature of Bitcoin (decentralisation) without connecting it to any of the four monetary functions or reaching a directional evaluative conclusion. <strong>Option F</strong> is a distractor: it is an overclaim with no evidence or mechanism &#8212; Bitcoin does not function as a unit of account in everyday commerce, so the assertion is factually wrong as well as unevaluated.'
      },

      /* 8 &#8212; Odd one out: functions of money */
      { type: 'odd_one_out',
        stem: 'Three of these illustrate a function of money. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '&#128176;', label: 'A worker deposits their monthly salary in a bank account to spend later', note: '' },
          { icon: '&#128203;', label: 'A business takes out a five-year loan to be repaid in monthly &#163; instalments', note: '' },
          { icon: '&#127968;', label: 'A homeowner uses their house as collateral to secure a mortgage', note: '' },
          { icon: '&#128250;', label: 'A market trader quotes the price of all their goods in &#163; to compare their relative values', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>using a house as collateral</strong>. This involves property as an asset &#8212; not money performing one of its functions. The other three each illustrate a function: depositing salary to spend later = <strong>store of value</strong>; a loan with future &#163; repayments = <strong>standard of deferred payment</strong>; quoting all prices in &#163; to compare values = <strong>unit of account</strong>. The medium of exchange function (paying for goods with money) is not illustrated here, but the other three functions are.'
      },

      /* 9 &#8212; MCQ: specialisation and development link */
      { type: 'mcq',
        stem: 'Which of the following correctly describes the relationship between <strong>specialisation, money, and economic development</strong>?',
        opts: [
          'Specialisation raises productivity but requires exchange; money facilitates exchange by eliminating the double coincidence of wants &#8212; together they form the foundation of complex market economies',
          'Money is unnecessary for specialisation; countries can specialise without any medium of exchange as long as central planning coordinates production',
          'Specialisation always reduces overall welfare because workers become dependent on exchange rather than self-sufficient production',
          'Money causes specialisation &#8212; once a society introduces money, workers naturally begin to specialise without any other incentive'
        ],
        ans: 0,
        exp: 'The relationship is a virtuous circle: specialisation raises productivity but makes self-sufficiency impossible, so exchange becomes essential. Barter cannot support complex specialised exchange at scale. Money solves this by eliminating the double coincidence of wants, reducing transaction costs, and enabling credit (standard of deferred payment). This allows deeper specialisation, which raises productivity further. Countries with unstable currencies (hyperinflation, weak banking systems) cannot sustain this dynamic &#8212; development economists identify monetary stability as a precondition for growth. Central planning can coordinate specialisation but at high information cost (Hayek\'s knowledge problem).'
      },

      /* 10 &#8212; Chain: barter to money sequence */
      { type: 'chain',
        stem: 'Place the following events in the correct logical order, tracing the argument from the limits of barter to the emergence of money.',
        items: [
          { label: 'Money is adopted as a universal medium of exchange, eliminating the double coincidence of wants', note: '' },
          { label: 'As specialisation deepens, direct barter becomes impractically complex', note: '' },
          { label: 'Transaction costs fall dramatically &#8212; complex specialised exchange becomes feasible at scale', note: '' },
          { label: 'Economic agents specialise in producing what they are relatively best at', note: '' },
          { label: 'Agents find it increasingly difficult to locate partners who want exactly what they have to offer', note: '' },
          { label: 'Productivity rises sharply and living standards improve as division of labour deepens further', note: '' }
        ],
        correctOrder: [3, 1, 4, 0, 2, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Specialisation emerges &#8212; agents focus on what they do best.<br>2. Deepening specialisation makes barter increasingly complex.<br>3. The double coincidence of wants problem becomes acute.<br>4. Money is adopted to solve this &#8212; medium of exchange function.<br>5. Transaction costs fall &#8212; exchange becomes easy.<br>6. Deeper specialisation and higher productivity follow.<br><br>This sequence illustrates why money and specialisation are co-dependent: each enables the other. The collapse of either (hyperinflation, supply chain breakdown) disrupts the entire chain &#8212; which is why monetary stability is treated as a macroeconomic priority.'
      }

    ]
  };

})();
