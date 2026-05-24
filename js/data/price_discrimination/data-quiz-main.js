(function () {

  window.ECONOS_QUIZ = {
    id:       'price_discrimination_main',
    topicId:  'price_discrimination_main',
    title:    'Price Discrimination',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'price_discrimination' }),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers conditions, three degrees, and welfare effects of price discrimination',
    shortNames: [
      'Conditions','1st degree','2nd degree','3rd degree','Consumer surplus',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_pd_1',
        type: 'mcq',
        q:    'Which of the following is NOT a condition required for price discrimination?',
        opts: [
          'The firm must have market power',
          'Markets must be separable',
          'There must be different price elasticities of demand',
          'The product must be homogeneous and identical in all markets'
        ],
        ans:  3,
        exp:  'Price discrimination requires market power, separable markets (to prevent resale), and different PEDs. It does not require homogeneous products — the product is the same but sold at different prices to different groups.'
      },
      {
        id:   'q_pd_2',
        type: 'mcq',
        q:    'First-degree price discrimination involves:',
        opts: [
          'Charging different prices to different consumer groups',
          'Charging lower prices for bulk purchases',
          'Charging each consumer their maximum willingness to pay',
          'Charging different prices at different times of day'
        ],
        ans:  2,
        exp:  'First-degree (perfect) price discrimination charges each individual consumer their maximum reservation price, capturing all consumer surplus. It is largely theoretical but approximated by auction markets.'
      },
      {
        id:   'q_pd_3',
        type: 'mcq',
        q:    'An example of third-degree price discrimination is:',
        opts: [
          'Selling bulk packs at a lower unit price',
          'Auctioning a painting to the highest bidder',
          'Student rail discounts versus standard adult fares',
          'Surge pricing on a ride-hailing app'
        ],
        ans:  2,
        exp:  'Third-degree price discrimination charges different prices to different identifiable groups (students vs adults, peak vs off-peak). Students have more elastic demand, so lower prices extract more revenue from them.'
      },
      {
        id:   'q_pd_4',
        type: 'mcq',
        q:    'Why must a price-discriminating firm prevent resale between markets?',
        opts: [
          'To protect intellectual property rights',
          'To stop consumers in the cheap market reselling to those in the expensive market',
          'Because resale is illegal under competition law',
          'To prevent government price regulation'
        ],
        ans:  1,
        exp:  'If consumers could buy cheap and resell, all buyers would access the low price, destroying the firm\'s ability to charge higher prices in the other segment and eliminating its extra profit.'
      },
      {
        id:   'q_pd_5',
        type: 'numeric_input',
        q:    'A firm charges Group A £20 (sells 100 units) and Group B £12 (sells 150 units). Without discrimination it would charge £15 (sell 200 units). Calculate the revenue gain from discrimination.',
        answer: 800,
        tolerance: 10,
        unit: '£',
        hint: 'Revenue with discrimination − revenue without discrimination.',
        workingSteps: ['With PD: (100×£20)+(150×£12) = £2,000+£1,800 = £3,800','Without PD: 200×£15 = £3,000','Gain = £3,800−£3,000 = £800']
      },
      {
        id:   'q_pd_6',
        type: 'categorise',
        q:    'Categorise each example by degree of price discrimination.',
        categories: ['1st degree','2nd degree','3rd degree'],
        items: [
          { item: 'Online auction: each bidder pays their maximum bid',      category: '1st degree' },
          { item: 'Buy 3 for price of 2 deal',                              category: '2nd degree' },
          { item: 'Student discount at cinema',                              category: '3rd degree' },
          { item: 'Personalised pricing via algorithm',                      category: '1st degree' },
          { item: 'Lower unit cost for larger gas usage',                    category: '2nd degree' },
          { item: 'Off-peak rail fares versus peak fares',                   category: '3rd degree' }
        ]
      },
      {
        id:   'q_pd_7',
        type: 'cause_effect',
        q:    'Match each cause to its effect regarding price discrimination.',
        pairs: [
          { cause: 'Firm charges high price to inelastic group',    effect: 'Revenue from that group increases' },
          { cause: 'Firm charges low price to elastic group',       effect: 'More sales made to price-sensitive consumers' },
          { cause: 'First-degree PD perfectly practised',           effect: 'All consumer surplus transferred to producer' },
          { cause: 'Resale prevented between markets',              effect: 'Price discrimination remains profitable' },
          { cause: 'Third-degree PD in pharmaceutical market',      effect: 'Lower prices in developing countries increase access' },
          { cause: 'Consumer cannot be identified by group',        effect: 'Third-degree price discrimination not possible' }
        ]
      },
      {
        id:   'q_pd_8',
        type: 'odd_one_out',
        q:    'Which of the following is the odd one out?',
        opts: ['Student rail discounts','Peak/off-peak cinema tickets','Single price set by competitive firm','Senior citizen discount'],
        ans:  2,
        exp:  'Student discounts, peak/off-peak tickets, and senior discounts are all examples of third-degree price discrimination. A single competitive price involves no price discrimination.'
      },
      {
        id:   'q_pd_9',
        type: 'data_table',
        q:    'A firm sells in two markets. Use the data to calculate total revenue with price discrimination.',
        tableHeaders: ['Market','Price (£)','Quantity','TR (£)'],
        tableData: [
          ['Adult','30','80','?'],
          ['Student','18','60','?'],
          ['Total (with PD)','—','140','?'],
          ['Single price','24','140','?']
        ],
        opts: ['£3,360','£3,480','£3,600','£3,720'],
        ans:  1,
        exp:  'Adult TR = 30×80=£2,400; Student TR = 18×60=£1,080. Total with PD = £2,400+£1,080 = £3,480. Single price: 24×140=£3,360. PD earns £120 more.'
      },
      {
        id:   'q_pd_10',
        type: 'match_pairs',
        q:    'Match each term to its correct description.',
        pairs: [
          { a: 'Consumer surplus',          b: 'Difference between what consumers pay and their willingness to pay' },
          { a: 'Market segmentation',       b: 'Dividing consumers into groups with different demand elasticities' },
          { a: 'Price elasticity of demand',b: 'Sensitivity of quantity demanded to price changes' },
          { a: 'Resale prevention',         b: 'Condition needed to maintain price discrimination' },
          { a: '2nd degree PD',             b: 'Lower unit prices for higher quantities purchased' },
          { a: 'Dynamic pricing',           b: 'Real-time price adjustment based on demand conditions' }
        ]
      }
    ]
  };

})();
