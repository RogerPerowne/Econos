(function () {

  window.ECONOS_QUIZ = {
    id:       'trading_blocs_main',
    topicId:  'trading_blocs_main',
    title:    'Trading Blocs & the WTO',
    subtitle: 'International Economics',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'trading_blocs' }),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers integration hierarchy, trade creation/diversion, WTO, and Brexit evaluation',
    shortNames: [
      'Integration types','FTA vs Customs Union','Trade creation','Trade diversion','WTO role',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_tb_1',
        type: 'mcq',
        q:    'In a Free Trade Area (FTA), member countries:',
        opts: [
          'Adopt a common external tariff against non-members',
          'Remove tariffs between themselves but each sets its own tariffs against non-members',
          'Use a single currency and a common central bank',
          'Harmonise all economic policies including fiscal and monetary'
        ],
        ans:  1,
        exp:  'In an FTA (e.g., EFTA, USMCA), barriers between members are removed, but each member maintains its own trade policy toward non-members. This is less integrated than a customs union.'
      },
      {
        id:   'q_tb_2',
        type: 'mcq',
        q:    'A Customs Union differs from a Free Trade Area because it also has:',
        opts: [
          'A common currency',
          'A common external tariff applied to all non-member imports',
          'Free movement of labour and capital',
          'A unified fiscal policy'
        ],
        ans:  1,
        exp:  'A customs union (e.g., the EU customs union, Mercosur) removes internal barriers AND establishes a Common External Tariff (CET) against non-members. This adds a layer of coordination beyond an FTA.'
      },
      {
        id:   'q_tb_3',
        type: 'mcq',
        q:    'Trade creation occurs when:',
        opts: [
          'A new trade barrier redirects trade to less efficient producers',
          'Joining a bloc causes a country to import from a lower-cost member instead of a higher-cost domestic producer',
          'A country creates new export markets by signing bilateral deals',
          'Trade volumes fall due to increased tariffs on imports'
        ],
        ans:  1,
        exp:  'Trade creation is a welfare gain: joining a bloc replaces expensive domestic production with cheaper imports from a more efficient bloc member. This increases specialisation and economic efficiency.'
      },
      {
        id:   'q_tb_4',
        type: 'mcq',
        q:    'Trade diversion is a welfare loss because:',
        opts: [
          'It increases competition from non-member countries',
          'It redirects imports from an efficient non-member to a less efficient bloc member due to the common external tariff',
          'It causes a current account deficit to worsen',
          'It prevents firms from achieving economies of scale'
        ],
        ans:  1,
        exp:  'Trade diversion occurs when the common external tariff makes non-member imports more expensive, diverting trade to less efficient bloc producers. The net welfare effect of joining a bloc depends on whether trade creation exceeds trade diversion.'
      },
      {
        id:   'q_tb_5',
        type: 'numeric_input',
        q:    'Before joining a bloc, a country imports good X at £10/unit (world price + 30% tariff = £13). After joining, it imports from a bloc member at £11 (no tariff). What is the trade creation saving per unit?',
        answer: 2,
        tolerance: 0,
        unit: '£',
        hint: 'Saving = old import cost − new import cost.',
        workingSteps: ['Old cost (domestic/tariff protected): £13','New cost (bloc member, no tariff): £11','Saving = £13 − £11 = £2 per unit']
      },
      {
        id:   'q_tb_6',
        type: 'categorise',
        q:    'Categorise each level of economic integration in order from least to most integrated.',
        categories: ['Less integrated','More integrated'],
        items: [
          { item: 'Free Trade Area (remove internal tariffs)',       category: 'Less integrated' },
          { item: 'Economic Union (common policies + single market)',category: 'More integrated' },
          { item: 'Customs Union (CET + free internal trade)',       category: 'Less integrated' },
          { item: 'Monetary Union (single currency)',                category: 'More integrated' },
          { item: 'Preferential Trade Agreement (reduced tariffs)',  category: 'Less integrated' },
          { item: 'Common Market (free movement of factors)',        category: 'More integrated' }
        ]
      },
      {
        id:   'q_tb_7',
        type: 'cause_effect',
        q:    'Match each trading bloc concept to its effect.',
        pairs: [
          { cause: 'Country joins customs union',               effect: 'Common external tariff applied; trade with non-members may fall' },
          { cause: 'Trade creation exceeds trade diversion',    effect: 'Net welfare gain from joining the bloc' },
          { cause: 'Single market eliminates non-tariff barriers',effect: 'Trade costs fall further; integration deepens' },
          { cause: 'WTO Most Favoured Nation principle',        effect: 'Trade concessions to one member must be extended to all' },
          { cause: 'Regional bloc forms',                       effect: 'Potential stumbling block for multilateral WTO liberalisation' },
          { cause: 'UK exits EU Single Market',                effect: 'Non-tariff barriers and customs checks raise trade costs' }
        ]
      },
      {
        id:   'q_tb_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Free Trade Area','Customs Union','Common Market','Laffer Curve'],
        ans:  3,
        exp:  'Free Trade Area, Customs Union, and Common Market are all levels of regional economic integration. The Laffer Curve is a fiscal policy concept about the tax rate–revenue relationship, not trade integration.'
      },
      {
        id:   'q_tb_9',
        type: 'data_table',
        q:    'Use the cost data to identify whether joining a trading bloc creates trade or diverts it.',
        tableHeaders: ['Supplier','Unit cost before bloc (incl. tariff)','Unit cost after bloc (incl. tariff)'],
        tableData: [
          ['Domestic producer','£15','£15 (unchanged)'],
          ['Bloc member (no tariff)','£18 + 20% = £21.60','£18 (tariff removed)'],
          ['Non-member (tariff maintained)','£10 + 20% = £12','£10 + 20% = £12']
        ],
        opts: [
          'Trade creation: country switches from £15 domestic to £18 bloc member',
          'Trade diversion: country switches from £12 non-member to £18 bloc member',
          'No trade effect: domestic production is always chosen',
          'Trade creation: country switches from non-member to domestic producer'
        ],
        ans:  1,
        exp:  'After joining: cheapest source = bloc member at £18 (tariff removed). Before joining: cheapest was non-member at £12. The bloc\'s common external tariff now makes the cheaper non-member uncompetitive. This is trade diversion — a welfare loss.'
      },
      {
        id:   'q_tb_10',
        type: 'match_pairs',
        q:    'Match each trading bloc term to its description.',
        pairs: [
          { a: 'Free Trade Area',    b: 'Internal tariffs removed; each member sets own external tariffs' },
          { a: 'Customs Union',      b: 'Internal free trade plus common external tariff' },
          { a: 'Common Market',      b: 'Customs union plus free movement of labour and capital' },
          { a: 'Trade creation',     b: 'Welfare gain: high-cost domestic production replaced by lower-cost bloc imports' },
          { a: 'Trade diversion',    b: 'Welfare loss: efficient non-member excluded by common external tariff' },
          { a: 'WTO',                b: 'Multilateral organisation promoting global free trade and dispute resolution' }
        ]
      }
    ]
  };

})();
