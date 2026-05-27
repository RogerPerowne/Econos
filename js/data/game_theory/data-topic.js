window.ECONOS_TOPIC = {
  id: 'game_theory',
  topicNum: '4.4.3',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Game Theory',
  estTime: '9-11 minutes',
  goal: 'Lock in the prisoner\'s dilemma, dominant strategies, Nash equilibrium, repeated games, and how game theory explains oligopoly behaviour and competition policy.',
  intro: {
    heroKey: 'heroGameTheory',
    summary: 'Game theory is the formal study of strategic interaction – situations where the outcome for each player depends on the choices of all players. It provides the rigorous framework behind oligopoly analysis, collusion stability, and competition policy design.',
    doInThis: 'Work through 7 cards covering the basic framework and payoff matrices, dominant strategies, Nash equilibrium, the prisoner\'s dilemma, repeated games and the Folk Theorem, sequential games and first-mover advantage, and evaluation of game theory\'s limits.',
    outcomes: [
      'Construct and interpret a payoff matrix for a two-player game',
      'Identify dominant strategies and Nash equilibria',
      'Use the prisoner\'s dilemma to analyse oligopoly and cartel instability',
      'Explain how repeated games can sustain collusion through the Folk Theorem'
    ],
    tip: 'Nash equilibrium: each player is making the best response to what the other is doing. Neither can improve their payoff by unilaterally changing strategy. Dominant strategy: best response regardless of what the other player does. If a dominant strategy exists, a rational player always chooses it.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'game_theory_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Game theory: the big picture',
      lede: 'In oligopoly, your best move depends on what rivals do – and they\'re thinking the same about you. Game theory makes this interdependence tractable.',
      branches: [
        { tone: 'green',  label: 'The framework',         sub: 'Players, strategies, payoffs. The payoff matrix turns strategic interaction into a problem you can actually solve.' },
        { tone: 'blue',   label: 'Nash equilibrium',      sub: 'Each player\'s strategy is a best response to the others. No one wants to unilaterally deviate – the workhorse solution concept.' },
        { tone: 'rose',   label: 'Prisoner\'s dilemma',   sub: 'Individual rationality produces a collectively worse outcome. Explains cartel breakdown, price wars, and arms races.' },
        { tone: 'amber',  label: 'Repeated games',        sub: 'When players interact repeatedly, cooperation can be sustained through punishment strategies. The folk theorem.' },
        { tone: 'purple', label: 'Sequential games',      sub: 'Order matters. First-mover advantage and commitment can lock in outcomes that simultaneous play cannot.' }
      ],
      body: '<strong>Game theory</strong> models strategic situations where: there are two or more players, each player has a set of strategies, and the payoff (outcome) for each player depends on the strategies chosen by ALL players.<br><br><strong>Key components of a game:</strong><br>• <strong>Players:</strong> the decision-makers (firms, countries, individuals)<br>• <strong>Strategies:</strong> the complete set of actions available to each player<br>• <strong>Payoffs:</strong> the outcome (profit, utility, market share) for each combination of strategies<br>• <strong>Information:</strong> what each player knows about the game and about rivals<br><br><strong>Payoff matrix:</strong> a table showing the payoff for each player for every possible combination of strategies. Player A\'s strategies are rows; Player B\'s strategies are columns. Each cell shows (payoff to A, payoff to B).<br><br><strong>Economic applications:</strong> oligopoly pricing, cartel stability, auction strategy, nuclear deterrence, trade policy, competition between platforms.',
      keyTerms: [
        { term: 'Game theory', def: 'Mathematical framework for analysing strategic interaction – situations where each player\'s outcome depends on all players\' choices.' },
        { term: 'Payoff matrix', def: 'A table showing the payoff to each player for every possible combination of strategies chosen by all players.' },
        { term: 'Strategy', def: 'A complete plan of action that specifies what a player will do in every possible situation in the game.' }
      ],
      examEdge: 'Game theory was developed by John von Neumann and Oskar Morgenstern (1944) and extended by John Nash (Nash equilibrium, 1950) – Nobel Prize 1994. Its application to economics transformed how we think about strategic behaviour in oligopolistic markets. The key insight: in strategic situations, maximising own payoff requires anticipating rivals\' rational responses – not treating rivals as passive. This is exactly the interdependence problem in oligopoly.'
    },
    {
      id: 'game_theory_2',
      template: 'framing',
      title: 'Dominant Strategies and Nash Equilibrium',
      body: '<strong>Dominant strategy:</strong> a strategy that gives the highest payoff regardless of what the opponent does. A rational player always chooses their dominant strategy if one exists.<br><br><strong>Nash equilibrium:</strong> a combination of strategies where no player can improve their payoff by unilaterally changing their strategy, given the other player\'s strategy. Both players are making their best response to each other simultaneously.<br><br><strong>Key distinction:</strong><br>• Dominant strategy: best response to EVERY strategy of the opponent<br>• Nash equilibrium: best response to the SPECIFIC strategy the opponent is playing<br>• All dominant strategy equilibria are Nash equilibria<br>• Nash equilibria may exist even when dominant strategies do not<br><br><strong>Multiple Nash equilibria:</strong> some games have more than one Nash equilibrium – e.g., coordination games (drive on left vs right). The theory does not specify which equilibrium is selected – requires additional assumptions.',
      keyTerms: [
        { term: 'Dominant strategy', def: 'The strategy that gives the best payoff regardless of what the opponent does – always chosen by a rational player.' },
        { term: 'Nash equilibrium', def: 'A strategy combination where no player can gain by unilaterally deviating – each player\'s strategy is the best response to the other\'s.' },
        { term: 'Best response', def: 'The strategy that maximises a player\'s payoff given the specific strategy being played by the opponent.' }
      ],
      examEdge: 'How to find a Nash equilibrium in a 2x2 payoff matrix: for each cell, check whether either player would want to deviate unilaterally. If neither would deviate → Nash equilibrium. Method: underline the best payoff in each column for Player A (row player); underline the best payoff in each row for Player B (column player). Cells where BOTH payoffs are underlined are Nash equilibria. This systematic approach is essential for exam diagram questions.'
    },
    {
      id: 'game_theory_3',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: "The Prisoner's Dilemma",
      lede: 'The most important game in economics – individually rational behaviour produces a collectively suboptimal outcome. Build it up cell by cell.',
      diagramKey: 'prisonersDilemmaInteractive',
      steps: [
        {
          key: 'base',
          label: 'The scenario',
          text: 'Two suspects are arrested separately – no communication possible. Each chooses <strong>stay silent</strong> (cooperate with partner) or <strong>confess</strong> (defect). Payoffs: both silent → <strong>1 year each</strong>. One confesses → <strong>0 / 10 years</strong> (confessor walks; silent partner takes the hit). Both confess → <strong>5 years each</strong>. Lower years = better outcome.'
        },
        {
          key: 'extension',
          label: "Player A's dominant strategy",
          text: 'Player A reasons separately for each of B\'s possible choices. If B stays silent: A gets 1yr (silent) vs 0yr (confess) → <strong>confess is better</strong>. If B confesses: A gets 10yr (silent) vs 5yr (confess) → <strong>confess is better</strong>. Confess beats silent <em>whatever B does</em> – that\'s a <strong>dominant strategy</strong>. By symmetry, B reasons the same way.'
        },
        {
          key: 'shift',
          label: 'The Nash equilibrium',
          text: 'Both play their dominant strategy → both confess → outcome (5, 5). This is the <strong>Nash equilibrium</strong>: a point where neither player can do better by unilaterally switching. Check it: if A switches to silent given B confesses, A gets 10yr instead of 5 – worse. Same for B. Nobody deviates.'
        },
        {
          key: 'efficiency',
          label: 'Nash ≠ Pareto',
          text: 'But (Silent, Silent) gives <strong>1 year each</strong> – both players are <strong>better off</strong> than at the Nash outcome of 5 each. The Pareto optimum exists but neither player can trust the other to play it. This gap between individual rationality and collective optimality is the dilemma. <strong>Applications</strong>: cartel cheating, arms races, advertising wars, climate action, free-riding.'
        }
      ],
      examEdge: 'The prisoner\'s dilemma is the analytical core of cartel instability. Replace "stay silent" with "honour quota" and "confess" with "cheat on quota." Dominant strategy: cheat. Nash equilibrium: both cheat → competitive outcome. This is why cartels are inherently unstable – the prisoner\'s dilemma is embedded in their structure.'
    },
    {
      id: 'game_theory_4',
      template: 'framing',
      title: 'Repeated Games and the Folk Theorem',
      body: 'The prisoner\'s dilemma predicts cheating – but in real markets, firms interact repeatedly, not once. <strong>Repeated games</strong> change the analysis fundamentally:<br><br>• If the game is repeated <strong>indefinitely</strong>, cooperation can be sustained as a Nash equilibrium. The future value of maintaining cooperation (sustained high prices) can outweigh the one-off gain from cheating (short-term profit boost followed by permanent price war).<br>• <strong>Trigger strategy (grim trigger):</strong> cooperate as long as the opponent cooperates; if opponent cheats once, defect forever. If both players adopt this, cooperation is individually rational if the discount factor (value of future payoffs) is high enough.<br>• <strong>Folk Theorem:</strong> in infinitely repeated games, almost any outcome (including cooperation) can be sustained as a Nash equilibrium for sufficiently patient players.<br><br><strong>What breaks cooperation in repeated games:</strong><br>• Short time horizon (end-game problem) – near end, no future to preserve<br>• High discount rate (impatient players – value immediate gain highly)<br>• Difficulty detecting cheating quickly',
      keyTerms: [
        { term: 'Repeated game', def: 'A game played multiple times between the same players – future interaction changes the strategic calculus.' },
        { term: 'Trigger strategy', def: 'Cooperate unless the opponent cheats; if cheated on, defect forever. Sustains cooperation by making punishment credible.' },
        { term: 'Folk Theorem', def: 'In infinitely repeated games, cooperation can be sustained as a Nash equilibrium if players are sufficiently patient.' }
      ],
      examEdge: 'Repeated games explain why real cartels last longer than the one-shot prisoner\'s dilemma predicts. OPEC has maintained some coordination for 60+ years despite ongoing cheating – the value of future cooperation (sustained oil revenues) is high enough to maintain the arrangement despite imperfect compliance. The grim trigger analysis also explains why competition authorities increase fines dramatically: making defection more attractive by reducing the gain from continued cooperation.'
    },
    {
      id: 'game_theory_5',
      template: 'framing',
      title: 'Sequential Games and First-Mover Advantage',
      body: 'In <strong>sequential games</strong>, players move in order rather than simultaneously. The player who moves first can gain strategic advantage by committing to an action that constrains rivals\' responses.<br><br><strong>Backward induction:</strong> to solve a sequential game, work backwards from the end – each player at each node plays their best response given what future players will do.<br><br><strong>First-mover advantage:</strong><br>• Incumbent firm commits to large output capacity → credibly threatens to flood market if rival enters → rational rival stays out (entry deterrence through commitment)<br>• Stackelberg model: quantity-setting oligopoly where one firm moves first → first-mover earns more profit than second-mover<br>• Amazon: early investment in logistics infrastructure committed to scale before rivals could respond<br><br><strong>Second-mover advantage (some games):</strong> in technology adoption (wait for winner to emerge), being second is better – e.g., VHS vs Betamax (JVC watched Sony\'s launch then improved).',
      keyTerms: [
        { term: 'Sequential game', def: 'Players move in order – each observes previous moves before choosing. Solved by backward induction.' },
        { term: 'Backward induction', def: 'Solving a sequential game by starting at the end and reasoning backwards about optimal choices at each node.' },
        { term: 'Commitment', def: 'A credible, irreversible action that constrains future choices and influences rivals\' behaviour – the source of first-mover advantage.' }
      ],
      examEdge: 'Entry deterrence through commitment is a key application of sequential game theory. An incumbent firm that visibly invests in excess capacity before a potential entrant makes its decision has committed to a strategy: if you enter, I will use that capacity to flood the market and drive price below your AC. This commitment is credible (the capacity exists) and deters rational entry. Without the commitment (no excess capacity), the threat of flooding the market is not credible – the incumbent would reduce output after entry because it maximises their profit to do so.'
    },
    {
      id: 'game_theory_6',
      template: 'diagnose',
      title: 'Game Theory Applications in Economics',
      intro: 'Game theory applies across economics and competition policy – not just oligopoly pricing.',
      rows: [
        { label: 'Application', colA: 'Trade policy (prisoner\'s dilemma)', colB: 'Auction design' },
        { label: 'Game structure', colA: 'Each country\'s dominant strategy is to impose tariffs regardless of what rivals do. But if all impose tariffs → everyone worse off (trade war). Nash equilibrium: tariffs everywhere. Optimal: free trade (cooperative outcome).', colB: 'Bidders in a sealed-bid auction must choose a bid without knowing rivals\' bids. The optimal strategy depends on the number of bidders and the distribution of valuations. "Winner\'s curse" in common value auctions: winner likely overestimated value.' },
        { label: 'Policy implication', colA: 'WTO as a mechanism to escape the trade prisoner\'s dilemma – binding commitments to reciprocal trade liberalisation. US-China trade war 2018-25: classic prisoner\'s dilemma with both sides imposing tariffs, both losing GDP.', colB: '5G spectrum auctions (OFCOM): auction design determined whether mobile operators bid competitive prices or colluded tacitly. Simultaneous ascending auctions at risk of collusive equilibria – OFCOM designed rules to limit this.' }
      ],
      footer: 'Mechanism design (reverse game theory): instead of asking "what happens in this game?" ask "what game should we design to achieve a desired outcome?" Nobel Prize 2007 (Hurwicz, Maskin, Myerson). Applied to: spectrum auctions, school assignment systems, organ donation matching, electricity markets.',
      examEdge: 'Trade policy as a prisoner\'s dilemma is an excellent cross-topic application linking Theme 3 (game theory) to Theme 4 (international trade). The WTO as a mechanism to sustain cooperation in the trade prisoner\'s dilemma parallels how leniency programmes destabilise cartel cooperation. Both are real-world applications of repeated game theory. Cross-topic synthesis like this distinguishes the very highest exam answers.'
    },
    {
      id: 'game_theory_7',
      template: 'paired',
      title: 'Evaluation: Limits of Game Theory',
      left: {
        label: 'Strengths and insights',
        points: [
          'Rigorous framework for analysing strategic interaction – replaces ad hoc intuitions',
          'Explains oligopoly price rigidity, cartel instability, and entry deterrence',
          'Predicts when cooperation can be sustained (repeated games, Folk Theorem)',
          'Underpins mechanism design: policy tools that exploit game structure',
          'Auction theory (game theory application) raised government revenue by billions (3G/4G spectrum)'
        ]
      },
      right: {
        label: 'Limitations and criticisms',
        points: [
          'Assumes rationality: real players make mistakes, have biases, and use heuristics',
          'Assumes common knowledge: rarely holds in practice – players have asymmetric information',
          'Multiple Nash equilibria: theory cannot always predict which equilibrium is selected',
          'Payoffs often not known: estimating rivals\' profit functions requires information firms don\'t have',
          'Behavioural game theory: experiments show cooperation in prisoner\'s dilemma beyond what theory predicts'
        ]
      },
      examEdge: 'The most important limitation is the behavioural challenge: experimental economics (ultimatum game, public goods game) consistently shows that real people cooperate more than rational self-interest predicts. Players care about fairness, reputation, and reciprocity – not just payoffs. Behavioural game theory (Kahneman, Thaler) incorporates these insights. This links game theory to behavioural economics – evaluating game theory\'s limits using behavioural evidence shows sophisticated cross-topic thinking.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};
