(function () {

  window.ECONOS_QUIZ = {
    id:       'game_theory_main',
    topicId:  'game_theory_main',
    title:    'Game Theory',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.routes.learn('game-theory'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers payoff matrices, Nash equilibrium, dominant strategies, and the prisoner\'s dilemma',
    shortNames: [
      'Nash Equilibrium','Dominant strategy','Prisoner\'s dilemma','First mover','Repeated games',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_gt_1',
        type: 'mcq',
        q:    'A Nash Equilibrium is reached when:',
        opts: [
          'Both firms earn the highest possible joint payoff',
          'No player can improve their outcome by changing strategy, given what rivals do',
          'One player dominates the other completely',
          'The government sets a price that no firm wants to change'
        ],
        ans:  1,
        exp:  'A Nash Equilibrium is a set of strategies where no individual player has an incentive to deviate unilaterally. It does not necessarily produce the best joint outcome.'
      },
      {
        id:   'q_gt_2',
        type: 'mcq',
        q:    'A dominant strategy is one that:',
        opts: [
          'Produces the highest payoff only when rivals cooperate',
          'Is chosen by the largest firm in the market',
          'Produces the best outcome regardless of what the rival does',
          'Always results in a Nash Equilibrium'
        ],
        ans:  2,
        exp:  'A dominant strategy is the best response for a player regardless of the opponent\'s choice. When both players have dominant strategies, they determine the Nash Equilibrium.'
      },
      {
        id:   'q_gt_3',
        type: 'mcq',
        q:    'In the classic prisoner\'s dilemma, why do both prisoners confess even though mutual silence is better?',
        opts: [
          'They communicate and agree to confess together',
          'Confessing is each prisoner\'s dominant strategy regardless of what the other does',
          'The authorities force them both to confess',
          'Silence is always punished more severely'
        ],
        ans:  1,
        exp:  'Confessing is individually rational regardless of the other\'s choice. If the other stays silent, confessing gives a lighter sentence; if the other confesses, staying silent gives a harsher sentence. So each confesses – reaching a NE that is worse for both than mutual silence.'
      },
      {
        id:   'q_gt_4',
        type: 'mcq',
        q:    'In repeated games, cooperative outcomes are more likely because:',
        opts: [
          'Players have no information about rivals\' past choices',
          'Firms fear punishment strategies like tit-for-tat in future rounds',
          'Governments always intervene to enforce cooperation',
          'Payoffs increase in every round'
        ],
        ans:  1,
        exp:  'In repeated (ongoing) games, the threat of retaliation in future rounds (tit-for-tat) can sustain cooperation. The shadow of the future makes defection less attractive.'
      },
      {
        id:   'q_gt_5',
        type: 'numeric_input',
        q:    'In a one-shot game: cooperate = £600 each; defect when rival cooperates = £900; both defect = £300. What is the gain from defecting if the rival cooperates?',
        answer: 300,
        tolerance: 0,
        unit: '£',
        hint: 'Gain = defect payoff − cooperate payoff.',
        workingSteps: ['Gain = £900 − £600 = £300']
      },
      {
        id:   'q_gt_6',
        type: 'categorise',
        q:    'Categorise each situation as a one-shot game or a repeated game.',
        categories: ['One-shot game','Repeated game'],
        items: [
          { item: 'Two firms set price once in a market that will close',     category: 'One-shot game' },
          { item: 'Rivals set output levels every quarter for years',         category: 'Repeated game' },
          { item: 'Two countries negotiate a single trade deal',              category: 'One-shot game' },
          { item: 'Airlines adjust fares daily in response to each other',    category: 'Repeated game' },
          { item: 'Firms compete in a one-time government tender',            category: 'One-shot game' },
          { item: 'Supermarkets match each other\'s prices each week',        category: 'Repeated game' }
        ]
      },
      {
        id:   'q_gt_7',
        type: 'cause_effect',
        q:    'Match each cause to its effect in game theory.',
        pairs: [
          { cause: 'Both firms have a dominant strategy to defect',    effect: 'Nash Equilibrium is mutual defection' },
          { cause: 'Tit-for-tat strategy is adopted',                 effect: 'Cooperation may be sustained over time' },
          { cause: 'Game is repeated indefinitely',                   effect: 'Firms weigh future punishment against short-run gain' },
          { cause: 'First-mover advantage exists',                    effect: 'First firm to act gains a strategic benefit' },
          { cause: 'Communication between rivals is prohibited',      effect: 'Firms must rely on implicit signals or prior behaviour' },
          { cause: 'Payoff matrix is asymmetric',                     effect: 'One player may have a dominant strategy the other lacks' }
        ]
      },
      {
        id:   'q_gt_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Nash Equilibrium','Dominant strategy','Tit-for-tat','Perfectly elastic demand'],
        ans:  3,
        exp:  'Nash Equilibrium, dominant strategy, and tit-for-tat are all game theory concepts. Perfectly elastic demand is a microeconomic concept from the theory of the competitive firm, not game theory.'
      },
      {
        id:   'q_gt_9',
        type: 'data_table',
        q:    'Use the payoff matrix to identify each firm\'s dominant strategy and the Nash Equilibrium.',
        tableHeaders: ['','Firm B: Low price','Firm B: High price'],
        tableData: [
          ['Firm A: Low price','(200, 200)','(350, 100)'],
          ['Firm A: High price','(100, 350)','(300, 300)']
        ],
        opts: [
          'Both firms choose High price (NE: 300, 300)',
          'Both firms choose Low price (NE: 200, 200)',
          'A chooses Low, B chooses High',
          'No Nash Equilibrium exists'
        ],
        ans:  0,
        exp:  'For Firm A: if B plays Low, A gets 200 (Low) vs 100 (High) → Low is better. If B plays High, A gets 350 (Low) vs 300 (High) → Low is better. Low is dominant for A, and similarly for B. NE: both Low price (200, 200).'
      },
      {
        id:   'q_gt_10',
        type: 'match_pairs',
        q:    'Match each game theory term to its correct description.',
        pairs: [
          { a: 'Payoff matrix',         b: 'Table showing outcomes for each combination of strategies' },
          { a: 'Dominant strategy',     b: 'Best choice regardless of what the opponent does' },
          { a: 'Nash Equilibrium',      b: 'No player benefits by changing strategy unilaterally' },
          { a: 'Tit-for-tat',           b: 'Mirror the opponent\'s previous action in next round' },
          { a: 'First-mover advantage', b: 'Strategic benefit gained by acting before the rival' },
          { a: 'Prisoner\'s dilemma',   b: 'Individually rational choices lead to collectively worse outcome' }
        ]
      }
    ]
  };

})();
