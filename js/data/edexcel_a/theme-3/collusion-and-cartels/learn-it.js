window.ECONOS_TOPIC = {
  id: 'collusion-and-cartels',
  topicNum: '4.4.2',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Collusion and Cartels',
  estTime: '9-11 minutes',
  goal: 'Lock in the distinction between explicit and tacit collusion, why cartels form and why they are unstable, real-world cartel examples, and competition policy responses.',
  intro: {
    heroKey: 'heroGameTheory',
    summary: 'Collusion occurs when oligopolists coordinate behaviour rather than compete independently. Explicit cartels are illegal but extremely harmful. Tacit collusion is legal but hard to distinguish from parallel behaviour. Understanding why cartels form – and why they break down – requires game theory.',
    doInThis: 'Work through 7 cards covering explicit vs tacit collusion, the prisoner\'s dilemma and cartel instability, OPEC as a case study, tacit collusion mechanisms, competition law, leniency programmes, and evaluation.',
    outcomes: [
      'Distinguish explicit collusion (cartel) from tacit collusion',
      'Use the prisoner\'s dilemma to explain why cartels are unstable',
      'Analyse OPEC as a real-world cartel case study',
      'Evaluate competition policy tools for addressing collusion'
    ],
    tip: 'Cartels face an internal contradiction: each member has an individual incentive to cheat (produce more than agreed → more profit), but if all cheat, the cartel collapses and all earn lower profits. This is the prisoner\'s dilemma. Understanding this instability is the key insight.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'collusion_cartels_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Collusion and cartels: the big picture',
      lede: 'Coordinated oligopolists can mimic a monopoly – but every cartel member has an incentive to cheat. Stability is the whole story.',
      branches: [
        { tone: 'green',  label: 'Explicit vs tacit',     sub: 'Formal cartels (illegal) and parallel behaviour without agreement (legal but harmful). Both push prices above competitive levels.' },
        { tone: 'blue',   label: 'Why firms collude',     sub: 'Joint profit maximisation, avoiding destructive price wars, and reducing strategic uncertainty in oligopoly.' },
        { tone: 'rose',   label: 'Why cartels collapse',  sub: 'The prisoner\'s dilemma: each member gains by cheating. Cartels are inherently unstable unless punishment is credible.' },
        { tone: 'amber',  label: 'Sustaining collusion',  sub: 'Price leadership, repeated games, and tacit signals can hold coordination together – even without illegal communication.' },
        { tone: 'purple', label: 'Competition policy',    sub: 'CMA, leniency programmes, and case law. Detecting tacit collusion is the hardest problem in competition law.' }
      ],
      body: '<strong>Collusion</strong> occurs when oligopolists coordinate behaviour – on price, output, market share, or other competitive variables – to raise joint profits above the competitive level.<br><br><strong>Explicit collusion (cartel):</strong> formal, secret agreement between firms to fix prices, divide markets, or restrict output. Illegal under UK and EU competition law. Examples: OPEC, vitamins cartel, construction cartels.<br><br><strong>Tacit collusion:</strong> firms coordinate behaviour through signals and parallel behaviour without formal agreement. Legal but hard to detect. Firms learn from experience what prices rivals will accept without triggering price wars. Examples: price leadership, petrol pricing cycles.<br><br><strong>Why both are problematic:</strong> both result in prices above the competitive level, output below competitive level, and consumer surplus transferred to producers. The welfare effect is similar to monopoly.',
      keyTerms: [
        { term: 'Cartel', def: 'A formal agreement between competing firms to coordinate prices, output, or market sharing – illegal in most jurisdictions.' },
        { term: 'Tacit collusion', def: 'Firms coordinate pricing behaviour without explicit agreement – through price leadership or repeated interaction.' },
        { term: 'Price leadership', def: 'A dominant firm sets the price and rivals follow – results in collusive outcome without formal agreement.' }
      ],
      examEdge: 'The key legal distinction: explicit collusion requires a specific agreement (meeting of minds). Tacit collusion – merely following a price leader – is not illegal under UK/EU competition law unless the "meeting of minds" can be proven. This creates a policy challenge: parallel pricing by supermarkets or petrol retailers may be exploitative but is very difficult to prosecute without evidence of communication. The CMA can investigate but must prove coordination, not just parallel behaviour.'
    },
    {
      id: 'collusion_cartels_2',
      template: 'cause',
      title: 'Why Firms Collude',
      causes: [
        { head: 'Maximise joint profit', body: 'Acting as a joint monopolist maximises industry profit – higher than any competitive outcome. Each firm shares in the monopoly profit. Incentive is strongest when firms have similar cost structures (easier to agree on a common price) and products are homogeneous.' },
        { head: 'Avoid destructive price wars', body: 'Price wars push prices toward MC, destroying all supernormal profit. Collusion stabilises prices at a higher level – all firms are better off than in a price war. The prisoner\'s dilemma shows that competition can be mutually destructive.' },
        { head: 'Reduce uncertainty', body: 'Strategic interdependence creates uncertainty about rivals\' reactions. Explicit or tacit collusion removes this uncertainty – firms know what price rivals will charge. Particularly valuable in markets with high fixed costs and volatile demand.' },
        { head: 'Market conditions favour collusion', body: 'Collusion is easier when: few firms (easier to monitor and coordinate); homogeneous products (easier to agree on a common price); high barriers to entry (no new entrants to undercut the cartel price); stable demand (easier to detect cheating from output fluctuations).' }
      ],
      examEdge: 'The fewer the firms, the more homogeneous the product, and the higher the barriers to entry, the more stable any collusive arrangement. This is why OPEC (13 oil producers, identical product – oil) can maintain some coordination for decades despite instability, while a cartel in a market with 50 differentiated product sellers would quickly collapse. Market structure determines collusion feasibility.'
    },
    {
      id: 'collusion_cartels_3',
      template: 'mechanisms',
      diagramKey: 'cartelPrisonersDilemma',
      title: 'Why Cartels Are Unstable: The Prisoner\'s Dilemma',
      intro: 'Even if a cartel is formed, each individual member has an incentive to cheat – making cartels inherently unstable.',
      steps: [
        { label: 'The cartel agreement', text: 'All members agree to set output at the agreed level Q/n (market quantity divided equally). Price is at cartel price P* (above competitive price). Each earns share of monopoly profit.' },
        { label: 'Incentive to cheat', text: 'Individual firm considers cheating: if it secretly produces MORE than its quota while others stick to theirs, price stays near P* but cheating firm sells more → earns more profit than other members. Short-run gain from cheating.' },
        { label: 'All firms face same incentive', text: 'All members reason identically – all want to produce more than quota. If all cheat, total output rises, price falls. Cartel collapses. All earn lower (competitive) profit – worse outcome than if all had stuck to quota.' },
        { label: 'Nash equilibrium: cheating', text: 'The dominant strategy for every firm is to cheat – regardless of what others do, cheating gives higher payoff. But all cheating → cartel collapse. Classic prisoner\'s dilemma: rational individual behaviour produces collectively irrational outcome.' }
      ],
      examEdge: 'The prisoner\'s dilemma payoff matrix is the most important analytical tool for cartel analysis. Draw a 2x2 matrix: rows = Firm A (cheat/cooperate), columns = Firm B (cheat/cooperate). Payoffs: (cooperate, cooperate) = high for both; (cheat, cooperate) = very high for cheater, low for other; (cooperate, cheat) = low for cooperator, very high for cheater; (cheat, cheat) = medium for both (competitive outcome). Nash equilibrium: (cheat, cheat). Collectively optimal: (cooperate, cooperate). The dilemma is clear.'
    },
    {
      id: 'collusion_cartels_4',
      template: 'framing',
      diagramKey: 'cartelJointProfitDiagram',
      title: 'OPEC: The World\'s Most Famous Cartel',
      body: '<strong>OPEC</strong> (Organisation of Petroleum Exporting Countries) is the classic real-world cartel study:<br><br>• Founded 1960; 13 member countries including Saudi Arabia, UAE, Iraq, Iran<br>• Controls ≈ 40% of world oil supply and ≈ 80% of proven reserves<br>• Sets production quotas for members to limit output → maintain high prices<br><br><strong>Key cartel tensions in OPEC:</strong><br>• Members frequently exceed their production quotas (classic cheating)<br>• Saudi Arabia acts as "swing producer" – adjusts own output to compensate for others\' cheating<br>• Non-OPEC producers (USA shale, Russia, Norway) are not bound by quotas → produce freely<br>• Internal conflicts: price hawks (Iran, Venezuela need high prices for fiscal solvency) vs moderates (Saudi Arabia can sustain lower prices)<br><br><strong>2020 crisis:</strong> OPEC+ failed to agree cuts during COVID → Saudi Arabia launched price war → oil price crashed to $20/barrel → all parties damaged.',
      keyTerms: [
        { term: 'OPEC', def: 'Organisation of Petroleum Exporting Countries – cartel that sets production quotas for 13 member countries to influence world oil prices.' },
        { term: 'Production quota', def: 'Agreed output ceiling for each cartel member – keeping total output below competitive level to maintain high prices.' },
        { term: 'Swing producer', def: 'A dominant cartel member (Saudi Arabia) that adjusts its own output to compensate for others\' cheating and maintain the cartel price.' }
      ],
      examEdge: 'OPEC demonstrates all the key cartel dynamics: (1) explicit coordination → price above competitive level; (2) cheating by members → quotas constantly exceeded; (3) dominant member (Saudi Arabia) as swing producer to maintain price; (4) external competitors (US shale) undermine cartel power over time; (5) internal conflicts undermine stability. Use OPEC throughout any cartel essay – it contains every theoretical point in a single real-world example.'
    },
    {
      id: 'collusion_cartels_5',
      template: 'cause',
      title: 'Sustaining Collusion: Tacit Mechanisms',
      causes: [
        { head: 'Price leadership', body: 'A dominant firm (price leader) announces a price change; rivals interpret this as the new industry price and follow. No explicit communication needed. Common in petrol retail, banking (mortgage rates), and supermarkets. Price leader role may rotate or be stable.' },
        { head: 'Meeting competition clause', body: 'Contracts guaranteeing to match any rival\'s lower price. Paradox: sounds competitive but actually facilitates collusion – if all firms guarantee to match any price cut, cutting price gains no market share advantage → no incentive to cut → prices remain high.' },
        { head: 'Most-favoured-nation clause', body: 'Commitment to give buyer the lowest price offered to any customer. Like meeting competition clauses, this removes the incentive to selectively discount – actually stabilises prices at a higher level.' },
        { head: 'Transparent pricing', body: 'Public price lists and predictable pricing enable rivals to monitor for cheating without communication. Petrol forecourt prices are publicly posted – any deviation from cartel price is immediately visible to rivals who can retaliate instantly.' }
      ],
      examEdge: 'Meeting competition (MCC) and most-favoured-nation (MFN) clauses are powerful examples of contractual arrangements that facilitate tacit collusion without explicit agreement. They are not obviously anticompetitive – "we will match any price" sounds pro-consumer. But the economic effect is to eliminate the incentive to compete on price, because matching guarantees rivals cannot gain from undercutting. The CMA has investigated online platform MFN clauses in hotel booking and insurance comparison.'
    },
    {
      id: 'collusion_cartels_6',
      template: 'diagnose',
      title: 'Competition Law: Tackling Cartels',
      intro: 'Competition law targets explicit collusion with a range of tools. Tacit collusion is harder to address.',
      rows: [
        { label: 'Tool', colA: 'Leniency (immunity) programme', colB: 'Fines and prosecution' },
        { label: 'How it works', colA: 'First cartel member to self-report receives full immunity from fines. Subsequent reporters receive reduced fines. Destabilises cartels by making defection individually rational – ratting out partners beats waiting to be caught.', colB: 'CMA and EU Commission can impose fines up to 10% of global turnover for cartel behaviour. UK: criminal prosecution of individuals possible (up to 5 years imprisonment). Aims to deter via expected cost exceeding expected gain.' },
        { label: 'Effectiveness', colA: 'Very effective at uncovering cartels – 50%+ of EU cartel cases initiated by leniency applicants. Creates race to confess between cartel members. Weakness: only works after cartel is formed; doesn\'t prevent formation.', colB: 'Deterrence effect depends on probability of detection × fine. If detection probability is low, even large fines may not deter. Corporate culture and compliance programmes reduce recidivism.' }
      ],
      footer: 'UK vitamins cartel (2001): price-fixing of vitamins B, C, E and others. EU fines totalled £750m. Classic example of successful leniency programme – Roche applied first and received immunity; rivals received heavy fines. Demonstrates how leniency breaks cartel solidarity.',
      examEdge: 'The leniency programme turns the prisoner\'s dilemma against the cartel: it makes confessing (defecting from the cartel) individually rational because the first to confess gets immunity. This is game theory applied as competition policy. The result: cartel members face a new prisoner\'s dilemma – confess first or wait and risk being exposed by a rival confessing. Brilliant mechanism design that uses the cartel\'s own instability against it.'
    },
    {
      id: 'collusion_cartels_7',
      template: 'paired',
      title: 'Evaluation: Are All Cartels Equally Harmful?',
      left: {
        label: 'Factors increasing harm',
        points: [
          'Homogeneous product: full monopoly pricing power – significant consumer welfare loss',
          'Essential goods: healthcare, food, energy – inelastic demand means large price rises',
          'Long-running cartels: sustained welfare loss compounds over years',
          'High barriers to entry: cartel protected from competitive entry that would restore competition',
          'International cartels (OPEC): harm consumers globally without any one jurisdiction able to prosecute'
        ]
      },
      right: {
        label: 'Factors reducing harm (contested)',
        points: [
          'Some industries have very high fixed costs – coordination may be needed to ensure supply',
          'Joint R&D agreements ("research cartels") may generate innovation benefits',
          'Cartel in declining industry may smooth exit and reduce adjustment costs',
          'Crisis cartels (wartime, pandemic) may coordinate supply when markets fail',
          'Competition law allows "block exemptions" for cooperation that generates efficiency gains'
        ]
      },
      examEdge: 'The EU block exemption framework acknowledges that not all inter-firm coordination is harmful. R&D agreements between competitors can be exempted from cartel prohibition if they generate innovation benefits that consumers share. Joint purchasing agreements, standardisation agreements, and crisis cartels have been permitted under specific conditions. The principle: prohibition applies to agreements that restrict competition without generating offsetting consumer benefits.',
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
    title:    'Collusion & Cartels',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.routes.learn('collusion-and-cartels'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers cartel theory, tacit collusion, and competition policy',
    shortNames: [
      'Cartel definition','Tacit collusion','Cartel instability','OPEC','Leniency',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'A cartel is defined as:',
        opts: [
          'A single firm with a dominant market position',
          'A formal agreement between firms to fix prices or restrict output',
          'A merger between two competing businesses',
          'A government body that regulates prices'
        ],
        ans:  1,
        exp:  'A cartel is an explicit (overt) agreement between competing firms to coordinate pricing, output, or market sharing – effectively behaving as a collective monopoly. Cartels are illegal in most jurisdictions.'
      },
      {
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
        type: 'numeric_input',
        q:    'A three-firm cartel agrees to split the market equally and charge £50. If each firm cheats by cutting to £45, it can capture 40% of market demand of 600 units. What does a cheating firm earn? (P × Q)',
        answer: 10800,
        tolerance: 0,
        unit: '£',
        hint: 'Cheater earns: £45 × (0.40 × 600).',
        workingSteps: ['Market demand = 600 units','Cheater\'s share = 40% × 600 = 240 units','Revenue = £45 × 240 = £10,800']
      },
      {
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
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Price fixing','Market sharing','Output restriction','Competitive tendering'],
        ans:  3,
        exp:  'Price fixing, market sharing, and output restriction are all forms of cartel behaviour. Competitive tendering is a procurement process designed to promote competition, not restrict it.'
      },
      {
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
        exp:  'Nash Equilibrium is where neither player wants to deviate. If both keep: A gets £500 but could get £800 by cutting, so A deviates. Both cutting (£300, £300) is the NE – each firm cuts regardless of what the other does.'
      },
      {
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

