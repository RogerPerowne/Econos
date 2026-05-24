(function () {

  window.ECONOS_QUIZ = {
    id:       'collusion_cartels_main',
    topicId:  'collusion_cartels_main',
    title:    'Collusion & Cartels',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'collusion_cartels' }),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers cartel theory, tacit collusion, and competition policy',
    shortNames: [
      'Cartel definition','Tacit collusion','Cartel instability','OPEC','Leniency',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_cc_1',
        type: 'mcq',
        q:    'A cartel is defined as:',
        opts: [
          'A single firm with a dominant market position',
          'A formal agreement between firms to fix prices or restrict output',
          'A merger between two competing businesses',
          'A government body that regulates prices'
        ],
        ans:  1,
        exp:  'A cartel is an explicit (overt) agreement between competing firms to coordinate pricing, output, or market sharing — effectively behaving as a collective monopoly. Cartels are illegal in most jurisdictions.'
      },
      {
        id:   'q_cc_2',
        type: 'mcq',
        q:    'Tacit collusion differs from explicit collusion because:',
        opts: [
          'It is perfectly legal and common',
          'Firms reach the same outcome through observation and imitation, without direct communication',
          'It requires a written agreement signed by all firms',
          'It only occurs in perfectly competitive markets'
        ],
        ans:  1,
        exp:  'Tacit collusion arises when firms recognise their interdependence and independently adopt similar pricing strategies (e.g., price matching, price leadership) without communicating directly.'
      },
      {
        id:   'q_cc_3',
        type: 'mcq',
        q:    'Cartels are inherently unstable because:',
        opts: [
          'Governments always detect and break them immediately',
          'Each member has an incentive to cheat by cutting price to gain market share',
          'The agreed price is always below marginal cost',
          'Consumers always boycott cartel products'
        ],
        ans:  1,
        exp:  'Even if a cartel agreement maximises joint profit, each individual firm can earn more by secretly undercutting the agreed price. This prisoner\'s dilemma logic makes cartels prone to collapse.'
      },
      {
        id:   'q_cc_4',
        type: 'mcq',
        q:    'A competition authority\'s leniency programme offers:',
        opts: [
          'Lower tax rates to all members of a cartel',
          'Reduced or zero penalties to cartel members who first report the cartel',
          'Government subsidies to exit a cartel',
          'Price controls to replace cartel pricing'
        ],
        ans:  1,
        exp:  'Leniency programmes (also called whistle-blower immunity) destabilise cartels by offering the first firm to self-report immunity from fines, making cheating on the cartel even more attractive.'
      },
      {
        id:   'q_cc_5',
        type: 'numeric_input',
        q:    'A three-firm cartel agrees to split the market equally and charge £50. If each firm cheats by cutting to £45, it can capture 40% of market demand of 600 units. What does a cheating firm earn? (P × Q)',
        answer: 10800,
        tolerance: 0,
        unit: '£',
        hint: 'Cheater earns: £45 × (0.40 × 600).',
        workingSteps: ['Market demand = 600 units','Cheater\'s share = 40% × 600 = 240 units','Revenue = £45 × 240 = £10,800']
      },
      {
        id:   'q_cc_6',
        type: 'categorise',
        q:    'Categorise each as a factor that promotes cartel stability or cartel breakdown.',
        categories: ['Promotes stability','Promotes breakdown'],
        items: [
          { item: 'Few firms in the cartel',                  category: 'Promotes stability' },
          { item: 'Incentive to secretly cut price',         category: 'Promotes breakdown' },
          { item: 'Homogeneous products, easy to monitor',   category: 'Promotes stability' },
          { item: 'Leniency programme in place',             category: 'Promotes breakdown' },
          { item: 'Repeated interaction and retaliation',    category: 'Promotes stability' },
          { item: 'New entrants undercut cartel price',      category: 'Promotes breakdown' }
        ]
      },
      {
        id:   'q_cc_7',
        type: 'cause_effect',
        q:    'Match each cause to its effect in cartel theory.',
        pairs: [
          { cause: 'Cartel members fix price above competitive level',   effect: 'Consumers pay higher prices; welfare loss occurs' },
          { cause: 'One firm secretly cuts price below cartel price',    effect: 'Other members lose customers; cartel pressure to collapse' },
          { cause: 'Leniency programme offers immunity',                 effect: 'Firms have more incentive to report cartel to authorities' },
          { cause: 'CMA fines cartel members heavily',                   effect: 'Deterrent effect reduces likelihood of future cartels' },
          { cause: 'Cartel restricts output',                            effect: 'Market price rises as supply falls' },
          { cause: 'Cartel successfully sustained',                      effect: 'Market functions like a monopoly' }
        ]
      },
      {
        id:   'q_cc_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Price fixing','Market sharing','Output restriction','Competitive tendering'],
        ans:  3,
        exp:  'Price fixing, market sharing, and output restriction are all forms of cartel behaviour. Competitive tendering is a procurement process designed to promote competition, not restrict it.'
      },
      {
        id:   'q_cc_9',
        type: 'data_table',
        q:    'Use the payoff matrix to identify the Nash Equilibrium outcome.',
        tableHeaders: ['Firm B: Keep price','Firm B: Cut price'],
        tableData: [
          ['Firm A: Keep price','Both earn £500','A earns £200, B earns £800'],
          ['Firm A: Cut price','A earns £800, B earns £200','Both earn £300']
        ],
        opts: [
          'Both keep price (£500, £500)',
          'A cuts, B keeps (£800, £200)',
          'A keeps, B cuts (£200, £800)',
          'Both cut price (£300, £300)'
        ],
        ans:  3,
        exp:  'Nash Equilibrium is where neither player wants to deviate. If both keep: A gets £500 but could get £800 by cutting, so A deviates. Both cutting (£300, £300) is the NE — each firm cuts regardless of what the other does.'
      },
      {
        id:   'q_cc_10',
        type: 'match_pairs',
        q:    'Match each term to its correct description.',
        pairs: [
          { a: 'Overt collusion',        b: 'Formal, explicit agreement between competitors to fix price or output' },
          { a: 'Tacit collusion',        b: 'Informal coordination through price leadership or signal-following' },
          { a: 'Nash Equilibrium',       b: 'Outcome where no player can improve by changing strategy alone' },
          { a: 'Leniency programme',     b: 'Policy giving reduced fines to firms that first expose a cartel' },
          { a: 'Cartel instability',     b: 'Tendency for members to cheat due to individual profit incentive' },
          { a: 'Price leadership',       b: 'Dominant firm sets price that rivals follow without explicit agreement' }
        ]
      }
    ]
  };

})();
