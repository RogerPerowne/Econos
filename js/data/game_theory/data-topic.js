window.ECONOS_TOPIC = {
  id: 'game_theory',
  topicNum: '3.15',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Game Theory',
  estTime: '9-11 minutes',
  goal: 'Lock in the prisoner\'s dilemma, dominant strategies, Nash equilibrium, repeated games, and how game theory explains oligopoly behaviour and competition policy.',
  intro: {
    heroKey: 'heroGameTheory',
    summary: 'Game theory is the formal study of strategic interaction — situations where the outcome for each player depends on the choices of all players. It provides the rigorous framework behind oligopoly analysis, collusion stability, and competition policy design.',
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
      lede: 'In oligopoly, your best move depends on what rivals do — and they\'re thinking the same about you. Game theory makes this interdependence tractable.',
      branches: [
        { tone: 'green',  label: 'The framework',         sub: 'Players, strategies, payoffs. The payoff matrix turns strategic interaction into a problem you can actually solve.' },
        { tone: 'blue',   label: 'Nash equilibrium',      sub: 'Each player\'s strategy is a best response to the others. No one wants to unilaterally deviate — the workhorse solution concept.' },
        { tone: 'rose',   label: 'Prisoner\'s dilemma',   sub: 'Individual rationality produces a collectively worse outcome. Explains cartel breakdown, price wars, and arms races.' },
        { tone: 'amber',  label: 'Repeated games',        sub: 'When players interact repeatedly, cooperation can be sustained through punishment strategies. The folk theorem.' },
        { tone: 'purple', label: 'Sequential games',      sub: 'Order matters. First-mover advantage and commitment can lock in outcomes that simultaneous play cannot.' }
      ],
      body: '<strong>Game theory</strong> models strategic situations where: there are two or more players, each player has a set of strategies, and the payoff (outcome) for each player depends on the strategies chosen by ALL players.<br><br><strong>Key components of a game:</strong><br>• <strong>Players:</strong> the decision-makers (firms, countries, individuals)<br>• <strong>Strategies:</strong> the complete set of actions available to each player<br>• <strong>Payoffs:</strong> the outcome (profit, utility, market share) for each combination of strategies<br>• <strong>Information:</strong> what each player knows about the game and about rivals<br><br><strong>Payoff matrix:</strong> a table showing the payoff for each player for every possible combination of strategies. Player A\'s strategies are rows; Player B\'s strategies are columns. Each cell shows (payoff to A, payoff to B).<br><br><strong>Economic applications:</strong> oligopoly pricing, cartel stability, auction strategy, nuclear deterrence, trade policy, competition between platforms.',
      keyTerms: [
        { term: 'Game theory', def: 'Mathematical framework for analysing strategic interaction — situations where each player\'s outcome depends on all players\' choices.' },
        { term: 'Payoff matrix', def: 'A table showing the payoff to each player for every possible combination of strategies chosen by all players.' },
        { term: 'Strategy', def: 'A complete plan of action that specifies what a player will do in every possible situation in the game.' }
      ],
      examEdge: 'Game theory was developed by John von Neumann and Oskar Morgenstern (1944) and extended by John Nash (Nash equilibrium, 1950) — Nobel Prize 1994. Its application to economics transformed how we think about strategic behaviour in oligopolistic markets. The key insight: in strategic situations, maximising own payoff requires anticipating rivals\' rational responses — not treating rivals as passive. This is exactly the interdependence problem in oligopoly.'
    },
    {
      id: 'game_theory_2',
      template: 'framing',
      title: 'Dominant Strategies and Nash Equilibrium',
      body: '<strong>Dominant strategy:</strong> a strategy that gives the highest payoff regardless of what the opponent does. A rational player always chooses their dominant strategy if one exists.<br><br><strong>Nash equilibrium:</strong> a combination of strategies where no player can improve their payoff by unilaterally changing their strategy, given the other player\'s strategy. Both players are making their best response to each other simultaneously.<br><br><strong>Key distinction:</strong><br>• Dominant strategy: best response to EVERY strategy of the opponent<br>• Nash equilibrium: best response to the SPECIFIC strategy the opponent is playing<br>• All dominant strategy equilibria are Nash equilibria<br>• Nash equilibria may exist even when dominant strategies do not<br><br><strong>Multiple Nash equilibria:</strong> some games have more than one Nash equilibrium — e.g., coordination games (drive on left vs right). The theory does not specify which equilibrium is selected — requires additional assumptions.',
      keyTerms: [
        { term: 'Dominant strategy', def: 'The strategy that gives the best payoff regardless of what the opponent does — always chosen by a rational player.' },
        { term: 'Nash equilibrium', def: 'A strategy combination where no player can gain by unilaterally deviating — each player\'s strategy is the best response to the other\'s.' },
        { term: 'Best response', def: 'The strategy that maximises a player\'s payoff given the specific strategy being played by the opponent.' }
      ],
      examEdge: 'How to find a Nash equilibrium in a 2x2 payoff matrix: for each cell, check whether either player would want to deviate unilaterally. If neither would deviate → Nash equilibrium. Method: underline the best payoff in each column for Player A (row player); underline the best payoff in each row for Player B (column player). Cells where BOTH payoffs are underlined are Nash equilibria. This systematic approach is essential for exam diagram questions.'
    },
    {
      id: 'game_theory_3',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: "The Prisoner's Dilemma",
      lede: 'The most important game in economics — individually rational behaviour produces a collectively suboptimal outcome. Build it up cell by cell.',
      diagramKey: 'prisonersDilemmaInteractive',
      steps: [
        {
          key: 'base',
          label: 'The scenario',
          text: 'Two suspects are arrested separately — no communication possible. Each chooses <strong>stay silent</strong> (cooperate with partner) or <strong>confess</strong> (defect). Payoffs: both silent → <strong>1 year each</strong>. One confesses → <strong>0 / 10 years</strong> (confessor walks; silent partner takes the hit). Both confess → <strong>5 years each</strong>. Lower years = better outcome.'
        },
        {
          key: 'extension',
          label: "Player A's dominant strategy",
          text: 'Player A reasons separately for each of B\'s possible choices. If B stays silent: A gets 1yr (silent) vs 0yr (confess) → <strong>confess is better</strong>. If B confesses: A gets 10yr (silent) vs 5yr (confess) → <strong>confess is better</strong>. Confess beats silent <em>whatever B does</em> — that\'s a <strong>dominant strategy</strong>. By symmetry, B reasons the same way.'
        },
        {
          key: 'shift',
          label: 'The Nash equilibrium',
          text: 'Both play their dominant strategy → both confess → outcome (5, 5). This is the <strong>Nash equilibrium</strong>: a point where neither player can do better by unilaterally switching. Check it: if A switches to silent given B confesses, A gets 10yr instead of 5 — worse. Same for B. Nobody deviates.'
        },
        {
          key: 'efficiency',
          label: 'Nash ≠ Pareto',
          text: 'But (Silent, Silent) gives <strong>1 year each</strong> — both players are <strong>better off</strong> than at the Nash outcome of 5 each. The Pareto optimum exists but neither player can trust the other to play it. This gap between individual rationality and collective optimality is the dilemma. <strong>Applications</strong>: cartel cheating, arms races, advertising wars, climate action, free-riding.'
        }
      ],
      examEdge: 'The prisoner\'s dilemma is the analytical core of cartel instability. Replace "stay silent" with "honour quota" and "confess" with "cheat on quota." Dominant strategy: cheat. Nash equilibrium: both cheat → competitive outcome. This is why cartels are inherently unstable — the prisoner\'s dilemma is embedded in their structure.'
    },
    {
      id: 'game_theory_4',
      template: 'framing',
      title: 'Repeated Games and the Folk Theorem',
      body: 'The prisoner\'s dilemma predicts cheating — but in real markets, firms interact repeatedly, not once. <strong>Repeated games</strong> change the analysis fundamentally:<br><br>• If the game is repeated <strong>indefinitely</strong>, cooperation can be sustained as a Nash equilibrium. The future value of maintaining cooperation (sustained high prices) can outweigh the one-off gain from cheating (short-term profit boost followed by permanent price war).<br>• <strong>Trigger strategy (grim trigger):</strong> cooperate as long as the opponent cooperates; if opponent cheats once, defect forever. If both players adopt this, cooperation is individually rational if the discount factor (value of future payoffs) is high enough.<br>• <strong>Folk Theorem:</strong> in infinitely repeated games, almost any outcome (including cooperation) can be sustained as a Nash equilibrium for sufficiently patient players.<br><br><strong>What breaks cooperation in repeated games:</strong><br>• Short time horizon (end-game problem) — near end, no future to preserve<br>• High discount rate (impatient players — value immediate gain highly)<br>• Difficulty detecting cheating quickly',
      keyTerms: [
        { term: 'Repeated game', def: 'A game played multiple times between the same players — future interaction changes the strategic calculus.' },
        { term: 'Trigger strategy', def: 'Cooperate unless the opponent cheats; if cheated on, defect forever. Sustains cooperation by making punishment credible.' },
        { term: 'Folk Theorem', def: 'In infinitely repeated games, cooperation can be sustained as a Nash equilibrium if players are sufficiently patient.' }
      ],
      examEdge: 'Repeated games explain why real cartels last longer than the one-shot prisoner\'s dilemma predicts. OPEC has maintained some coordination for 60+ years despite ongoing cheating — the value of future cooperation (sustained oil revenues) is high enough to maintain the arrangement despite imperfect compliance. The grim trigger analysis also explains why competition authorities increase fines dramatically: making defection more attractive by reducing the gain from continued cooperation.'
    },
    {
      id: 'game_theory_5',
      template: 'framing',
      title: 'Sequential Games and First-Mover Advantage',
      body: 'In <strong>sequential games</strong>, players move in order rather than simultaneously. The player who moves first can gain strategic advantage by committing to an action that constrains rivals\' responses.<br><br><strong>Backward induction:</strong> to solve a sequential game, work backwards from the end — each player at each node plays their best response given what future players will do.<br><br><strong>First-mover advantage:</strong><br>• Incumbent firm commits to large output capacity → credibly threatens to flood market if rival enters → rational rival stays out (entry deterrence through commitment)<br>• Stackelberg model: quantity-setting oligopoly where one firm moves first → first-mover earns more profit than second-mover<br>• Amazon: early investment in logistics infrastructure committed to scale before rivals could respond<br><br><strong>Second-mover advantage (some games):</strong> in technology adoption (wait for winner to emerge), being second is better — e.g., VHS vs Betamax (JVC watched Sony\'s launch then improved).',
      keyTerms: [
        { term: 'Sequential game', def: 'Players move in order — each observes previous moves before choosing. Solved by backward induction.' },
        { term: 'Backward induction', def: 'Solving a sequential game by starting at the end and reasoning backwards about optimal choices at each node.' },
        { term: 'Commitment', def: 'A credible, irreversible action that constrains future choices and influences rivals\' behaviour — the source of first-mover advantage.' }
      ],
      examEdge: 'Entry deterrence through commitment is a key application of sequential game theory. An incumbent firm that visibly invests in excess capacity before a potential entrant makes its decision has committed to a strategy: if you enter, I will use that capacity to flood the market and drive price below your AC. This commitment is credible (the capacity exists) and deters rational entry. Without the commitment (no excess capacity), the threat of flooding the market is not credible — the incumbent would reduce output after entry because it maximises their profit to do so.'
    },
    {
      id: 'game_theory_6',
      template: 'diagnose',
      title: 'Game Theory Applications in Economics',
      intro: 'Game theory applies across economics and competition policy — not just oligopoly pricing.',
      rows: [
        { label: 'Application', colA: 'Trade policy (prisoner\'s dilemma)', colB: 'Auction design' },
        { label: 'Game structure', colA: 'Each country\'s dominant strategy is to impose tariffs regardless of what rivals do. But if all impose tariffs → everyone worse off (trade war). Nash equilibrium: tariffs everywhere. Optimal: free trade (cooperative outcome).', colB: 'Bidders in a sealed-bid auction must choose a bid without knowing rivals\' bids. The optimal strategy depends on the number of bidders and the distribution of valuations. "Winner\'s curse" in common value auctions: winner likely overestimated value.' },
        { label: 'Policy implication', colA: 'WTO as a mechanism to escape the trade prisoner\'s dilemma — binding commitments to reciprocal trade liberalisation. US-China trade war 2018-25: classic prisoner\'s dilemma with both sides imposing tariffs, both losing GDP.', colB: '5G spectrum auctions (OFCOM): auction design determined whether mobile operators bid competitive prices or colluded tacitly. Simultaneous ascending auctions at risk of collusive equilibria — OFCOM designed rules to limit this.' }
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
          'Rigorous framework for analysing strategic interaction — replaces ad hoc intuitions',
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
          'Assumes common knowledge: rarely holds in practice — players have asymmetric information',
          'Multiple Nash equilibria: theory cannot always predict which equilibrium is selected',
          'Payoffs often not known: estimating rivals\' profit functions requires information firms don\'t have',
          'Behavioural game theory: experiments show cooperation in prisoner\'s dilemma beyond what theory predicts'
        ]
      },
      examEdge: 'The most important limitation is the behavioural challenge: experimental economics (ultimatum game, public goods game) consistently shows that real people cooperate more than rational self-interest predicts. Players care about fairness, reputation, and reciprocity — not just payoffs. Behavioural game theory (Kahneman, Thaler) incorporates these insights. This links game theory to behavioural economics — evaluating game theory\'s limits using behavioural evidence shows sophisticated cross-topic thinking.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'gt-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: game theory',
      question: 'Evaluate the usefulness of game theory in explaining the behaviour of firms in oligopolistic markets. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define oligopoly and game theory. Introduce the key insight: in oligopolies, each firm\'s optimal strategy depends on what rivals do — making strategic interdependence the defining feature and game theory the natural analytical tool.',
          hint: 'Oligopoly: few large firms, high barriers to entry, strategic interdependence. Game theory: analyses strategic interaction — players, strategies, payoffs, equilibria. Nash equilibrium: no player can improve by changing strategy unilaterally. Applications: prisoner\'s dilemma (price wars), repeated games (tacit collusion), entry deterrence.',
          model: 'Oligopoly — a market structure dominated by a small number of large firms with high barriers to entry — is characterised by strategic interdependence: each firm\'s optimal decision depends critically on the actions of rivals. This interdependence makes simple price-taking models inapplicable. Game theory provides the analytical framework for these situations, modelling firms as players choosing strategies to maximise payoffs given expectations of rivals\' choices. Key tools include the Nash equilibrium (a strategy profile where no player benefits from unilaterally deviating), the prisoner\'s dilemma (explaining why mutually harmful competition can persist), and repeated game analysis (explaining how tacit collusion can be sustained). This essay evaluates how well these tools explain observed oligopoly behaviour.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — The prisoner\'s dilemma explains competitive outcomes and cartel instability',
          prompt: 'Explain how the prisoner\'s dilemma payoff matrix captures the incentive structure facing oligopolists — where defecting (undercutting on price or cheating on a cartel) is the dominant strategy, leading to a Nash equilibrium that is worse for both firms than cooperation.',
          hint: 'Payoff matrix: both firms choose high or low price. Dominant strategy: low price (undercut). Nash equilibrium: both low price = lower profits for both. Cartel: both choose high price = better outcome, but unstable (incentive to cheat). OPEC: cartel repeatedly undermined by member defection.',
          model: 'The prisoner\'s dilemma provides the clearest game-theoretic insight into oligopoly: even when mutual cooperation (e.g. maintaining high prices) would benefit all firms, individual incentives drive each firm to defect. In a standard two-firm payoff matrix where both can charge high or low prices, "low price" is the dominant strategy for each — regardless of the rival\'s choice, each firm does better by undercutting. The resulting Nash equilibrium (both charge low) delivers lower profits to both than mutual high pricing, yet it is the predicted outcome. This explains why price wars occur in oligopolies and why cartels are inherently unstable: member firms always have an individual incentive to cheat on the agreement. OPEC\'s repeated production quota violations illustrate this real-world cartel instability.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — Repeated games explain tacit collusion and stable oligopoly pricing',
          prompt: 'Explain how in a repeated game (the prisoner\'s dilemma played infinitely), firms can sustain cooperative outcomes through tit-for-tat strategies and the threat of punishment — explaining the observed stability of prices in many oligopolies.',
          hint: 'Repeated game: future matters. Discount rate: if firms value future profits sufficiently, cooperation is rational. Tit-for-tat: cooperate unless rival defects, then punish. Folk theorem: any outcome between Nash and cooperative can be sustained. UK petrol market: price leadership, parallel pricing without explicit agreement.',
          model: 'When the prisoner\'s dilemma is played repeatedly — as in ongoing business relationships — cooperative outcomes can be sustained through credible punishment strategies. Robert Axelrod\'s tournaments demonstrated that "tit-for-tat" — cooperate initially, then mirror the rival\'s last move — is highly successful in generating and sustaining cooperation. The Folk Theorem formalises this: in an infinitely repeated game with a sufficiently high discount factor (firms care enough about future profits), any payoff between the Nash equilibrium and the cooperative optimum can be sustained as an equilibrium. This explains tacit collusion — price coordination without explicit agreement — observed in UK petrol retail, supermarket pricing, and mobile phone tariffs. Firms signal willingness to cooperate through price leadership and parallel pricing, avoiding the welfare costs of price wars while staying within competition law.'
        },
        {
          type: 'counter',
          label: 'Counter — Game theory\'s rationality assumptions limit its real-world explanatory power',
          prompt: 'Argue that game theory\'s predictions depend on assumptions of common knowledge and rationality that frequently fail in real markets, limiting its ability to predict actual firm behaviour.',
          hint: 'Rationality assumption: firms correctly calculate payoff matrices and best responses. In practice: bounded rationality (Simon), heuristics, errors. Multiple Nash equilibria: theory cannot predict which is selected. Payoffs unknown: firms don\'t know rivals\' cost structures. Behavioural evidence: cooperation exceeds theory\'s prediction (public goods games).',
          model: 'Game theory\'s predictive power is constrained by its demanding assumptions. First, rational play requires common knowledge — each player knows the payoffs, knows the other knows them, and so on infinitely — a condition rarely met in real oligopolies where rival cost structures are private information. Second, Herbert Simon\'s concept of bounded rationality suggests that real decision-makers use heuristics and satisficing rather than calculating Nash equilibria. Third, when multiple Nash equilibria exist (a common occurrence in more complex games), theory cannot predict which will be selected without additional assumptions about equilibrium selection. Finally, experimental evidence from ultimatum games and public goods experiments consistently shows that real players cooperate, punish unfair offers, and consider reciprocity beyond what rational self-interest predicts — suggesting that game theory systematically underestimates the scope for cooperation.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — Game theory is most useful as a framework, not a precise predictor',
          prompt: 'Evaluate game theory\'s contribution as a conceptual framework for competition policy and oligopoly analysis, even if it cannot predict exact equilibria in complex real markets.',
          hint: 'Mechanism design: auction theory (government spectrum sales). Competition law: cartels exploit prisoner\'s dilemma logic — leniency programmes use game theory to destabilise cartels (first defector gets immunity). Entry deterrence: limit pricing, predatory pricing modelled as sequential games. Game theory is descriptively powerful even if not perfectly predictive.',
          model: 'The appropriate evaluation of game theory is as a conceptual framework rather than a precise predictive tool. Even where game theory cannot uniquely predict equilibrium, it structures the analysis of strategic interaction in ways that generate powerful policy insights. Competition authorities use prisoner\'s dilemma logic in cartel enforcement: leniency programmes — where the first cartel member to report the cartel receives immunity — deliberately exploit the game structure to destabilise collusion. The UK CMA\'s leniency programme has broken up major cartels in construction and financial services precisely because it changes the payoff matrix. Government spectrum auctions (3G, 4G) used mechanism design — an application of game theory — to raise over £22bn in the UK alone. These real policy successes demonstrate game theory\'s practical value, even where its predictive precision is limited.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Reach a judgement: is game theory a useful tool for explaining oligopoly behaviour, and what are its main limitations?',
          hint: 'Game theory is the most powerful available tool for oligopoly analysis — the key concepts (Nash equilibrium, prisoner\'s dilemma, repeated games, entry deterrence) explain patterns that other models cannot. Limitations are real but do not invalidate the framework. The appropriate response is to supplement with behavioural insights, not abandon game theory.',
          model: 'In conclusion, game theory is the most useful available framework for explaining oligopolistic behaviour, offering insights that no alternative model provides: why price wars occur despite their mutual harm, why tacit collusion persists without explicit agreements, and how entry threats discipline incumbent pricing. The prisoner\'s dilemma and repeated game models explain patterns observed in real markets from OPEC to supermarket pricing. However, game theory\'s predictive precision is limited by rationality assumptions, information requirements, and the problem of multiple equilibria. These limitations are best addressed by supplementing formal game-theoretic analysis with behavioural economics insights — recognising that real firms use heuristics, respond to social norms, and consider reputation — rather than abandoning the framework entirely. Game theory remains indispensable for competition policy and industrial economics despite, not because of, its idealised assumptions.'
        }
      ]
    }
  ]
};
