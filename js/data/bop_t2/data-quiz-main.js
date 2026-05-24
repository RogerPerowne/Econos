(function () {

  window.ECONOS_QUIZ = {
    id:       'bop_t2_main',
    topicId:  'bop_t2_main',
    title:    'Balance of Payments',
    subtitle: 'International Economics',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'bop_t2' }),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers BoP accounts, current account deficit causes, J-curve, and correction policies',
    shortNames: [
      'BoP structure','Current account','Capital account','Current account deficit','J-curve',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_bop_1',
        type: 'mcq',
        q:    'The Balance of Payments (BoP) records:',
        opts: [
          'Only the government\'s budget deficit or surplus',
          'All economic transactions between a country and the rest of the world',
          'The exchange rate between domestic and foreign currencies',
          'Only physical trade in goods and services'
        ],
        ans:  1,
        exp:  'The BoP is a comprehensive record of all monetary transactions between a country\'s residents and the rest of the world, including trade in goods, services, income flows, and financial transactions.'
      },
      {
        id:   'q_bop_2',
        type: 'mcq',
        q:    'The current account of the balance of payments records:',
        opts: [
          'Foreign direct investment flows',
          'Changes in official foreign exchange reserves',
          'Trade in goods, trade in services, primary income, and secondary income',
          'Purchases and sales of government bonds by foreigners'
        ],
        ans:  2,
        exp:  'The current account has four components: trade in goods (visible trade), trade in services (invisible trade), primary income (investment income and wages), and secondary income (transfers like overseas aid and remittances).'
      },
      {
        id:   'q_bop_3',
        type: 'mcq',
        q:    'A persistent current account deficit suggests:',
        opts: [
          'The country is exporting more than it imports',
          'The country is spending more on imports and income payments abroad than it receives from exports',
          'The economy is growing faster than its trading partners',
          'The government is running a fiscal surplus'
        ],
        ans:  1,
        exp:  'A current account deficit means outflows (imports, income payments) exceed inflows (exports, income receipts). It must be financed by a surplus in the financial account (borrowing or selling assets abroad).'
      },
      {
        id:   'q_bop_4',
        type: 'mcq',
        q:    'The J-curve effect occurs because:',
        opts: [
          'Depreciation immediately improves the current account in month one',
          'After depreciation, the trade deficit initially worsens before improving as export and import volumes adjust',
          'Appreciation always worsens the current account permanently',
          'The current account follows the letter J in all exchange rate scenarios'
        ],
        ans:  1,
        exp:  'After a currency depreciation, export prices fall and import prices rise in domestic currency. But volumes take time to adjust (contracts, habits). Initially the deficit worsens (top of J), then improves as quantities respond.'
      },
      {
        id:   'q_bop_5',
        type: 'numeric_input',
        q:    'Goods exports = £400bn, goods imports = £500bn, services exports = £200bn, services imports = £150bn. What is the trade balance (£bn)?',
        answer: -50,
        tolerance: 0,
        unit: '£bn',
        hint: 'Trade balance = (X goods + X services) − (M goods + M services).',
        workingSteps: ['Total X = £400bn + £200bn = £600bn','Total M = £500bn + £150bn = £650bn','Balance = £600bn − £650bn = −£50bn']
      },
      {
        id:   'q_bop_6',
        type: 'categorise',
        q:    'Categorise each transaction as a current account credit (+) or debit (−).',
        categories: ['Current account credit (+)','Current account debit (−)'],
        items: [
          { item: 'UK exports car engines to Germany',          category: 'Current account credit (+)' },
          { item: 'UK buys crude oil from Saudi Arabia',        category: 'Current account debit (−)' },
          { item: 'Foreign tourists spend in UK hotels',        category: 'Current account credit (+)' },
          { item: 'UK residents holiday abroad',                category: 'Current account debit (−)' },
          { item: 'UK receives dividends from overseas shares', category: 'Current account credit (+)' },
          { item: 'UK sends overseas development aid',          category: 'Current account debit (−)' }
        ]
      },
      {
        id:   'q_bop_7',
        type: 'cause_effect',
        q:    'Match each cause to its effect on the balance of payments.',
        pairs: [
          { cause: 'Exchange rate depreciates',             effect: 'Exports cheaper; imports dearer; trade balance may improve (J-curve lag)' },
          { cause: 'Domestic economy grows strongly',       effect: 'Import demand rises; current account may worsen' },
          { cause: 'UK inflation above trading partners\' rate', effect: 'Exports less competitive; current account worsens' },
          { cause: 'Supply-side reforms boost productivity',  effect: 'Export competitiveness improves; current account improves' },
          { cause: 'Marshall-Lerner condition is met',      effect: 'Depreciation successfully improves the current account' },
          { cause: 'BoP must always sum to zero',           effect: 'Current account deficit financed by financial account surplus' }
        ]
      },
      {
        id:   'q_bop_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Current account','Capital account','Financial account','Lorenz curve'],
        ans:  3,
        exp:  'Current account, capital account, and financial account are all sub-accounts of the Balance of Payments. The Lorenz curve measures income inequality — it has nothing to do with the BoP.'
      },
      {
        id:   'q_bop_9',
        type: 'data_table',
        q:    'Use the BoP data to calculate the overall current account balance.',
        tableHeaders: ['Component','Balance (£bn)'],
        tableData: [
          ['Trade in goods','-120'],
          ['Trade in services','+80'],
          ['Primary income','+15'],
          ['Secondary income','-25'],
          ['Current account total','?']
        ],
        opts: ['−£50bn','−£60bn','−£70bn','−£80bn'],
        ans:  0,
        exp:  'Current account = −120 + 80 + 15 − 25 = −£50bn. The UK runs a current account deficit of £50bn.'
      },
      {
        id:   'q_bop_10',
        type: 'match_pairs',
        q:    'Match each BoP concept to its description.',
        pairs: [
          { a: 'Current account',         b: 'Records trade in goods/services, income, and transfers' },
          { a: 'Financial account',        b: 'Records FDI, portfolio investment, and reserve changes' },
          { a: 'J-curve',                  b: 'Trade deficit worsens initially after depreciation, then improves' },
          { a: 'Marshall-Lerner condition',b: 'Depreciation improves trade balance if sum of PEDs exceeds 1' },
          { a: 'Trade deficit',            b: 'Imports of goods and services exceed exports' },
          { a: 'Expenditure switching',    b: 'Policy shifting spending from imports to domestic products' }
        ]
      }
    ]
  };

})();
