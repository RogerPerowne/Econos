/* ============================================================
   ECONOS — Quiz content for: Game Theory
   10 questions covering payoff matrices, dominant strategies,
   Nash equilibrium, the prisoner's dilemma, repeated games,
   first-mover advantage, and game theory's limits.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'game_theory_main',
    topicId:  'game_theory_main',
    title:    'Game Theory',
    subtitle: 'Theme 3.15 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering payoff matrices, dominant strategies, Nash equilibria, the prisoner\'s dilemma and its applications to cartels and trade policy, repeated games and the Folk Theorem, sequential games and first-mover advantage, and behavioural limits to the theory. Designed for the analytical depth Edexcel rewards at Levels 3 and 4.',
    shortNames: {
      'framework':  'Game theory basics',
      'dominant':   'Dominant strategies',
      'prisoners':  "Prisoner's dilemma",
      'repeated':   'Repeated games',
      'sequential': 'First-mover advantage',
      'limits':     'Limits of game theory'
    },

    questions: [

      /* 1 — mcq: identifying a dominant strategy */
      { type: 'mcq',
        stem: 'In a two-player game, Firm A has a <strong>dominant strategy</strong>. What does this mean?',
        opts: [
          'Firm A\'s chosen strategy gives the highest payoff regardless of what Firm B does',
          'Firm A\'s chosen strategy gives the highest payoff only if Firm B also chooses its best strategy',
          'Firm A always earns a higher profit than Firm B in every possible outcome of the game',
          'Firm A can unilaterally change its strategy to improve its payoff once it observes Firm B\'s choice'
        ],
        ans: 0,
        exp: 'A <strong>dominant strategy</strong> gives the highest payoff for one player regardless of the other player\'s choice. It is the "best response to every strategy." This is stronger than a Nash equilibrium best response (best response to the <em>specific</em> strategy the opponent is playing). A rational player always plays their dominant strategy when one exists — they do not need to know or anticipate what the opponent will do. In the prisoner\'s dilemma, "confess" (or "cheat" in the cartel context) is a dominant strategy for both players — better whether the opponent cooperates or defects. Options B, C, and D all describe different (weaker) concepts — mutual best responses, relative payoffs, or sequential adjustment.'
      },

      /* 2 — diagram_interp: reading a payoff matrix */
      { type: 'diagram_interp',
        stem: 'Two airlines, AirNorth and AirSouth, compete on the same route. Each can price <strong>High</strong> or <strong>Low</strong>. The payoff matrix shows annual profits (&#163;m) as (AirNorth, AirSouth).',
        svg: '<svg viewBox="0 0 420 270" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif"><rect x="10" y="10" width="400" height="250" fill="#F8FAFC" rx="6"/><text x="260" y="35" fill="#0B1426" font-size="12" text-anchor="middle" font-weight="700">AIRSOUTH</text><text x="175" y="58" fill="#0B1426" font-size="11" text-anchor="middle">High price</text><text x="315" y="58" fill="#0B1426" font-size="11" text-anchor="middle">Low price</text><text x="60" y="135" fill="#0B1426" font-size="12" text-anchor="middle" font-weight="700">AN</text><text x="60" y="155" fill="#0B1426" font-size="11" text-anchor="middle">High</text><text x="60" y="210" fill="#0B1426" font-size="11" text-anchor="middle">Low</text><rect x="105" y="65" width="130" height="90" fill="none" stroke="#CBD5E1" stroke-width="1.5"/><rect x="235" y="65" width="160" height="90" fill="none" stroke="#CBD5E1" stroke-width="1.5"/><rect x="105" y="155" width="130" height="90" fill="none" stroke="#CBD5E1" stroke-width="1.5"/><rect x="235" y="155" width="160" height="90" fill="none" stroke="#CBD5E1" stroke-width="1.5"/><text x="170" y="115" fill="#1FB574" font-size="14" text-anchor="middle" font-weight="700">(60, 60)</text><text x="315" y="115" fill="#EC2D68" font-size="14" text-anchor="middle" font-weight="700">(15, 90)</text><text x="170" y="205" fill="#EC2D68" font-size="14" text-anchor="middle" font-weight="700">(90, 15)</text><text x="315" y="205" fill="#F5B800" font-size="14" text-anchor="middle" font-weight="700">(35, 35)</text></svg>',
        caption: 'Payoffs are annual profits (&#163;m) shown as (AirNorth, AirSouth). The airlines set prices simultaneously without knowing the other\'s choice.',
        question: 'What is the <strong>Nash equilibrium</strong> of this simultaneous game?',
        opts: [
          '(Low, Low) — both earn &#163;35m; Low is the dominant strategy for both airlines',
          '(High, High) — both earn &#163;60m; the airlines coordinate on the jointly optimal outcome',
          '(High, Low) — AirNorth sets High and AirSouth sets Low, exploiting the asymmetry',
          'There is no Nash equilibrium because each airline always wants to undercut the other'
        ],
        ans: 0,
        exp: '<strong>(Low, Low) = &#163;35m each</strong> is the Nash equilibrium. Check AirNorth: if AirSouth plays High, AirNorth earns &#163;90m by playing Low vs &#163;60m by playing High — Low is better. If AirSouth plays Low, AirNorth earns &#163;35m by Low vs &#163;15m by High — still Low. So Low dominates for AirNorth. By symmetry, Low also dominates for AirSouth. Both play Low → Nash equilibrium (&#163;35m, &#163;35m). The (High, High) outcome (&#163;60m, &#163;60m) is jointly optimal but not a Nash equilibrium — each airline would unilaterally deviate to Low if the other plays High. This is exactly the airline price war prisoner\'s dilemma: individually rational price competition drives both firms below the cooperative outcome.'
      },

      /* 3 — para_fill: prisoner's dilemma */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph by selecting the correct word or phrase for each numbered blank.',
        anchor: 'The prisoner\'s dilemma shows how individual rationality can produce collectively suboptimal outcomes.',
        para: 'In the prisoner\'s dilemma, each player has a [1] strategy that gives the highest payoff regardless of the opponent\'s choice. When both players follow this logic, they reach a [2] equilibrium that is [3] for both than if they had cooperated. The dilemma arises because the payoff from [4] is higher than from cooperating when the opponent cooperates, but both players [5] when both defect. This means the collectively [6] outcome (both cooperate) is not individually [7], and so rational players fail to achieve it.',
        blanks: [
          { id: 1, opts: ['dominant', 'cooperative', 'mixed', 'backward'], ans: 0 },
          { id: 2, opts: ['Nash', 'Pareto', 'cooperative', 'sequential'], ans: 0 },
          { id: 3, opts: ['worse', 'better', 'identical', 'equivalent'], ans: 0 },
          { id: 4, opts: ['defecting', 'cooperating', 'waiting', 'signalling'], ans: 0 },
          { id: 5, opts: ['both lose', 'both gain', 'one wins', 'neither plays'], ans: 0 },
          { id: 6, opts: ['optimal', 'harmful', 'inefficient', 'impossible'], ans: 0 },
          { id: 7, opts: ['rational', 'feasible', 'legal', 'observable'], ans: 0 }
        ],
        exp: '(1) <strong>Dominant</strong>: defecting is best regardless of what the other does. (2) <strong>Nash</strong>: no player can improve by unilaterally switching — each is playing a best response. (3) <strong>Worse</strong>: the Nash equilibrium (defect, defect) gives lower payoffs than the cooperative outcome (cooperate, cooperate). (4) <strong>Defecting</strong>: the temptation payoff (defect when other cooperates) is the highest individual payoff. (5) <strong>Both lose</strong>: mutual defection gives the punishment payoff — worse than mutual cooperation. (6) <strong>Optimal</strong>: the Pareto-optimal outcome is mutual cooperation — but this is not a Nash equilibrium. (7) <strong>Rational</strong>: individually rational play leads away from the collectively optimal outcome — the dilemma.'
      },

      /* 4 — elastic_sort: classify game theory concepts */
      { type: 'elastic_sort',
        stem: 'Classify each statement as relating to <strong>one-shot games</strong> or <strong>repeated games</strong>.',
        categories: ['oneshot', 'repeated'],
        categoryLabels: ['One-shot (single play)', 'Repeated game'],
        goods: [
          { icon: '🔄', label: 'The Folk Theorem: almost any outcome can be sustained as a Nash equilibrium if players are sufficiently patient', note: '', ans: 'repeated' },
          { icon: '⚖️', label: 'The dominant strategy equilibrium predicts mutual defection even though both players would be better off cooperating', note: '', ans: 'oneshot' },
          { icon: '🎯', label: 'Grim trigger strategy: cooperate unless the opponent cheats; if cheated on, defect forever', note: '', ans: 'repeated' },
          { icon: '📉', label: 'End-game problem: cooperation unravels as the known final round approaches', note: '', ans: 'repeated' },
          { icon: '🃏', label: 'Each player chooses their dominant strategy without reference to future interactions', note: '', ans: 'oneshot' },
          { icon: '🤝', label: 'OPEC maintains some coordination for 60+ years because the value of future oil revenues makes cheating suboptimal', note: '', ans: 'repeated' }
        ],
        exp: '<strong>One-shot games</strong>: played once, with no future interaction. The dominant strategy analysis — both defect, both worse off — applies cleanly. Without repetition, there is no mechanism to sustain cooperation through threats or promises about future behaviour. <strong>Repeated games</strong>: played multiple times between the same players. Future interaction changes the calculus — the threat of future punishment (grim trigger) can deter current defection. The Folk Theorem formalises this: for sufficiently patient players, cooperation can be sustained as a Nash equilibrium in infinitely repeated games. The end-game problem: if the game has a known finite end, backward induction unravels cooperation from the final round backwards — making sustained cooperation difficult in finitely repeated games.'
      },

      /* 5 — mcq: Folk Theorem */
      { type: 'mcq',
        stem: 'The <strong>Folk Theorem</strong> states that in infinitely repeated games, cooperation can be sustained as a Nash equilibrium if:',
        opts: [
          'Players are sufficiently patient — the value of future cooperative payoffs outweighs the short-run gain from defecting',
          'All players have full information about each other\'s payoff functions and past strategies',
          'The number of players is small enough that coordination is logistically feasible',
          'Players can communicate and reach a binding agreement before each round of play'
        ],
        ans: 0,
        exp: 'The Folk Theorem condition is player <strong>patience</strong> — captured by a high discount factor (&#948;). The condition for cooperation to hold under the grim trigger strategy is: (gain from defecting today) &#8804; (loss from future punishment). As &#948; → 1 (very patient), future losses are fully weighted — cooperation is individually rational. As &#948; → 0 (very impatient), future is irrelevant — cheat today. Full information (B) helps but is not required. Small numbers (C) make coordination easier but are not the Folk Theorem\'s formal condition. Binding agreements (D) are not needed — the Folk Theorem shows cooperation can be sustained through self-enforcing threats, not formal contracts. This is why OPEC can maintain coordination without a binding legal mechanism: future oil revenues are the "discount factor" that makes cheating suboptimal.'
      },

      /* 6 — multi_select: first-mover advantage conditions */
      { type: 'multi_select',
        stem: 'Which of the following are <strong>conditions that enhance first-mover advantage</strong> in a sequential game? Select all that apply.',
        opts: [
          'The first mover can make a credible and irreversible commitment (e.g., build capacity that cannot be easily removed)',
          'The follower has full information about the first mover\'s action before making their own decision',
          'The market has no significant learning-by-doing effects — all firms have identical cost functions at all times',
          'The commitment by the first mover credibly deters entry by altering the post-entry payoff landscape',
          'The first mover\'s action is costless to reverse — they can change strategy easily after the follower responds',
          'Sunk costs are low — first mover\'s investment does not lock in a strategy, keeping options open'
        ],
        correct: [0, 1, 3],
        exp: 'Options A, B, and D enhance first-mover advantage. (A) <strong>Credible irreversible commitment</strong> is the core of first-mover advantage — capacity, technology, or contracts that cannot be cheaply reversed make threats credible. (B) <strong>Full information for the follower</strong> is required for sequential game analysis — the follower must observe the first mover\'s action to respond to it; this is what distinguishes sequential from simultaneous games. (D) <strong>Credible entry deterrence</strong> — the value of first-mover advantage comes from deterring profitable responses. Option C (no learning effects) actually removes one source of first-mover advantage (cost leadership through experience). Options E and F are the <em>opposite</em> of first-mover conditions — if commitment is costless to reverse, the threat is not credible and the first-mover gain disappears (Coase conjecture).'
      },

      /* 7 — odd_one_out: game theory applications */
      { type: 'odd_one_out',
        stem: 'Three of these are <strong>real-world applications of the prisoner\'s dilemma</strong> framework. Which is the ODD ONE OUT?',
        items: [
          { icon: '🌐', label: 'International trade: each country\'s dominant strategy is to impose tariffs, but all imposing tariffs leads to a trade war that makes all countries worse off', note: '' },
          { icon: '🏭', label: 'Arms race: each nation\'s dominant strategy is to arm heavily, but mutual heavy armament is more dangerous than mutual disarmament', note: '' },
          { icon: '🏆', label: 'Backward induction in chess: working from the end of the game, each player\'s optimal move at each node is determined by what comes after', note: '' },
          { icon: '📢', label: 'Advertising: firms in a duopoly must each advertise heavily even though industry-wide advertising adds little to total demand', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>backward induction in chess</strong>. Backward induction is a method for solving <em>sequential</em> games — it is a solution technique, not an application of the prisoner\'s dilemma. The other three are all prisoner\'s dilemma structures: trade tariffs (dominant strategy: impose tariffs regardless of rival; mutual tariffs = trade war = mutually harmful outcome); arms races (dominant strategy: arm; mutual arming = costly and risky for all); advertising (dominant strategy: advertise; mutual advertising = same market share but higher costs for all). Each has the hallmark prisoner\'s dilemma structure: dominant strategy leads to a mutually suboptimal Nash equilibrium.'
      },

      /* 8 — multi_select: evaluating game theory */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>game theory as an explanation of oligopoly behaviour</strong>. Which of the following statements demonstrate <strong>evaluation</strong> — as opposed to description or one-sided analysis?',
        opts: [
          'In a prisoner\'s dilemma, both players have a dominant strategy to defect, producing a Nash equilibrium that is worse for both than mutual cooperation',
          'The Folk Theorem provides an apparent solution to the prisoner\'s dilemma in repeated games, but its practical relevance to oligopoly is limited by the end-game problem: as firms anticipate exit, merger, or regulatory intervention, cooperation unravels from the last period backwards, suggesting that game theory\'s prediction of sustained collusion relies on an infinite-horizon assumption that is rarely satisfied in real markets',
          'The assumption of rational, payoff-maximising players is the most significant limitation of applying game theory to oligopoly: experimental evidence from ultimatum games and public goods experiments consistently shows that individuals value fairness and are willing to forgo personal gains to punish perceived unfairness — a pattern that standard game theory cannot explain without importing behavioural assumptions',
          'Nash equilibrium is a situation where no player can improve their payoff by unilaterally changing their strategy',
          'Game theory is a powerful framework for analysing oligopoly, but it generates multiple predictions (many games have several Nash equilibria) without a mechanism for selecting which will prevail — in markets with asymmetric information about costs and capacities, the "correct" equilibrium is indeterminate, limiting game theory\'s usefulness as a predictive tool rather than a descriptive framework',
          'Firms in oligopoly are interdependent because the profit of each depends on the strategies of rivals'
        ],
        correct: [1, 2, 4],
        exp: '<strong>Options B, C, and E are genuine evaluation moves.</strong> Option B identifies a specific internal weakness in the Folk Theorem argument: the end-game problem means infinite-horizon cooperation assumptions are violated in real oligopolies — this is evaluation by testing the theory\'s key assumption against market reality and drawing a conditional conclusion about its practical relevance. Option C engages with the rationality assumption using specific behavioural evidence (ultimatum games, public goods experiments) and explains why standard game theory cannot accommodate the finding — this is evaluation by contrasting the theory\'s assumptions with empirical evidence. Option E identifies the multiple-equilibria problem and derives its implication: game theory describes possibilities but cannot predict outcomes in information-asymmetric markets — this is evaluation by diagnosing the precise source of the theory\'s predictive limits. <strong>Option A</strong> describes the prisoner\'s dilemma structure — pure description. <strong>Option D</strong> defines Nash equilibrium — definition, not evaluation. <strong>Option F</strong> describes interdependence — a background fact, not evaluation of the framework\'s explanatory scope.'
      },

      /* 9 — calculation: evaluating the grim trigger */
      { type: 'calculation',
        context: 'Firm A and Firm B are in a duopoly. If both cooperate (honour quotas), each earns <strong>&#163;100m per year</strong>. If Firm A defects while B cooperates, A earns <strong>&#163;140m</strong> this year but then both earn <strong>&#163;60m per year forever</strong> (punishment phase under grim trigger). The discount factor is <strong>&#948; = 0.9</strong>.',
        working: [
          'Value of cooperating forever (starting this year):',
          '&#163;100m + &#163;100m&#215;0.9 + &#163;100m&#215;0.9&#178; + ... = &#163;100m &#247; (1 &#8722; 0.9) = &#163;1,000m',
          'Value of defecting this year then receiving punishment forever:',
          '&#163;140m + &#163;60m&#215;0.9 &#247; (1 &#8722; 0.9) = &#163;140m + &#163;540m = &#163;680m',
          'Compare: cooperation (&#163;1,000m) > defection (&#163;680m)',
          'Cooperation IS individually rational under grim trigger at &#948; = 0.9'
        ],
        stem: 'Under the grim trigger strategy with &#948; = 0.9, what should Firm A rationally do?',
        opts: [
          { ped: 'Cooperate — the present value of cooperation (&#163;1,000m) exceeds the present value of defection (&#163;680m)', typ: 'Correctly compared the infinite-horizon cooperative payoff against the one-off defection gain plus punishment stream', rev: 'Cooperation is the individually rational choice when discount factor is high' },
          { ped: 'Defect — the immediate gain (&#163;140m vs &#163;100m = &#163;40m extra today) always makes defection worthwhile', typ: 'Ignored the future punishment — only counted the one-period gain without discounting future losses', rev: 'Must account for the present value of all future punishment payoffs' },
          { ped: 'Defect — firms always defect in infinitely repeated games because the game never ends', typ: 'Confused finite end-game problem with infinite repetition — Folk Theorem shows cooperation CAN be sustained infinitely', rev: 'Infinite repetition makes cooperation sustainable; it is finitely repeated games that unravel' },
          { ped: 'Cooperate — firms always cooperate in infinitely repeated games regardless of the discount factor', typ: 'Ignored that very low discount rates (impatient players) make defection rational even in repeated games', rev: 'Cooperation requires the discount factor to exceed a critical threshold' }
        ],
        ans: 0,
        exp: '<strong>Cooperate.</strong> Cooperative stream: &#163;100m per year from this period = &#163;100m &#247; (1 &#8722; 0.9) = <strong>&#163;1,000m</strong>. Defect then punishment: &#163;140m today + &#163;60m &#247; (1 &#8722; 0.9) &#215; 0.9 = &#163;140m + &#163;540m = <strong>&#163;680m</strong>. Since &#163;1,000m > &#163;680m, cooperation dominates. Intuitively: the short-run gain from defecting (&#163;40m extra this year) is outweighed by the permanent reduction in future payoffs (from &#163;100m to &#163;60m per year — &#163;40m loss compounded forever). At high &#948; (patient firms), the future matters a lot, making cooperation individually rational. This is why OPEC can sustain coordination: the value of future oil revenues (&#948; high) exceeds the gain from unilateral overproduction.'
      },

      /* 10 — data_table: trade policy as prisoner's dilemma */
      { type: 'data_table',
        stem: 'The table shows simplified GDP growth outcomes (%) for two large trading nations, A and B, under different combinations of trade policy.',
        headers: ['Policy combination', 'Nation A GDP growth', 'Nation B GDP growth', 'World trade volume'],
        rows: [
          ['Both free trade', '+2.5%', '+2.5%', 'High'],
          ['A protects, B free trade', '+3.2%', '+1.1%', 'Medium'],
          ['A free trade, B protects', '+1.1%', '+3.2%', 'Medium'],
          ['Both protect (trade war)', '+1.4%', '+1.4%', 'Low']
        ],
        question: 'Which interpretation of the data is most consistent with the prisoner\'s dilemma framework?',
        opts: [
          'Both nations have a dominant strategy to impose protection (each gains individually from protecting regardless of what the other does), but mutual protection produces lower growth for both than mutual free trade — a classic prisoner\'s dilemma',
          'Free trade is the dominant strategy for both nations — each nation always grows faster under free trade, so mutual free trade is the Nash equilibrium',
          'The data show that trade wars always benefit both nations equally — the symmetric outcomes prove that protection is optimal',
          'Nation A should always adopt free trade because it grows faster under free trade than under protection when B also chooses free trade'
        ],
        ans: 0,
        exp: 'The data show a classic prisoner\'s dilemma. Check for dominant strategies: If B chooses free trade, A grows 3.2% (protect) vs 2.5% (free) — protect is better for A. If B protects, A grows 1.4% (protect) vs 1.1% (free) — still better to protect. Protection is A\'s dominant strategy. By symmetry, protection is also B\'s dominant strategy. Both protect → Nash equilibrium: 1.4% each. But both free trade gives 2.5% each — collectively better. The Nash equilibrium (protect, protect) is mutually worse than (free, free). This is exactly why the WTO exists: as a mechanism to escape the trade prisoner\'s dilemma through binding reciprocal commitments to liberalisation — analogous to how leniency programmes escape the cartel prisoner\'s dilemma. Option B is wrong — free trade is NOT dominant (3.2% protect > 2.5% free when other chooses free trade).'
      }

    ]
  };

})();
