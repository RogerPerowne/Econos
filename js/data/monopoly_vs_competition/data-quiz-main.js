(function () {

  window.ECONOS_QUIZ = {
    id:       'monopoly_vs_competition_main',
    topicId:  'monopoly_vs_competition_main',
    title:    'Monopoly vs Competition',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'monopoly_vs_competition' }),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers welfare comparison, efficiency, and competition policy',
    shortNames: [
      'Welfare comparison','Deadweight loss','Dynamic efficiency','Competition policy','Natural monopoly',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_mvc_1',
        type: 'mcq',
        q:    'Compared to a perfectly competitive market, a monopoly typically produces:',
        opts: [
          'More output at a lower price',
          'Less output at a higher price',
          'The same output at the same price',
          'More output at a higher price'
        ],
        ans:  1,
        exp:  'A profit-maximising monopolist restricts output to where MR = MC and charges the price consumers are willing to pay for that quantity – which is above the competitive price and below the competitive output.'
      },
      {
        id:   'q_mvc_2',
        type: 'mcq',
        q:    'Deadweight welfare loss in monopoly represents:',
        opts: [
          'The profit earned by the monopolist',
          'The cost of regulation',
          'The loss of consumer and producer surplus versus competitive equilibrium',
          'The tax paid by the monopolist'
        ],
        ans:  2,
        exp:  'The deadweight loss (DWL) is the triangular area of net welfare that is lost because the monopolist produces less than the socially optimal output (where MC = Demand).'
      },
      {
        id:   'q_mvc_3',
        type: 'mcq',
        q:    'Which efficiency argument favours monopoly over competition?',
        opts: [
          'Monopolies produce at minimum average cost',
          'Monopolies set P = MC',
          'Supernormal profits can fund R&D and dynamic efficiency',
          'Monopolies have no barriers to entry'
        ],
        ans:  2,
        exp:  'A key argument for monopoly is dynamic efficiency: sustained supernormal profits provide funds and incentives for research, development, and innovation that may benefit consumers in the long run.'
      },
      {
        id:   'q_mvc_4',
        type: 'mcq',
        q:    'Competition policy aims to:',
        opts: [
          'Help large firms gain market share',
          'Prevent anti-competitive behaviour and promote consumer welfare',
          'Allow natural monopolies to set their own prices',
          'Reduce government regulation of business'
        ],
        ans:  1,
        exp:  'Competition policy (enforced by bodies like the CMA) aims to prevent mergers that reduce competition, stop price-fixing cartels, and protect consumer welfare.'
      },
      {
        id:   'q_mvc_5',
        type: 'numeric_input',
        q:    'Under competition, Q = 100 and P = £10. Under monopoly, Q = 60 and P = £16. If MC = £10, approximate the deadweight loss area (½ × base × height).',
        answer: 120,
        tolerance: 5,
        unit: '£',
        hint: 'DWL = ½ × (Qc − Qm) × (Pm − Pc).',
        workingSteps: ['Base = Qc − Qm = 100 − 60 = 40','Height = Pm − Pc = £16 − £10 = £6','DWL = ½ × 40 × 6 = £120']
      },
      {
        id:   'q_mvc_6',
        type: 'categorise',
        q:    'Categorise each statement as an argument for or against monopoly.',
        categories: ['Argument for monopoly','Argument against monopoly'],
        items: [
          { item: 'Funds R&D through supernormal profit',       category: 'Argument for monopoly' },
          { item: 'Creates deadweight welfare loss',            category: 'Argument against monopoly' },
          { item: 'Economies of scale reduce costs',            category: 'Argument for monopoly' },
          { item: 'P > MC leads to allocative inefficiency',    category: 'Argument against monopoly' },
          { item: 'Natural monopoly avoids duplication costs',  category: 'Argument for monopoly' },
          { item: 'X-inefficiency from lack of competition',    category: 'Argument against monopoly' }
        ]
      },
      {
        id:   'q_mvc_7',
        type: 'cause_effect',
        q:    'Match each cause to its effect when comparing monopoly and competition.',
        pairs: [
          { cause: 'Monopolist restricts output below Qc',       effect: 'Deadweight loss arises' },
          { cause: 'Supernormal profit funds R&D',               effect: 'Dynamic efficiency may be higher under monopoly' },
          { cause: 'CMA blocks an anti-competitive merger',      effect: 'Market remains more competitive' },
          { cause: 'Natural monopoly regulated at P = AC',       effect: 'Normal profit; no deadweight loss' },
          { cause: 'X-inefficiency develops under monopoly',     effect: 'Average costs rise above the minimum possible' },
          { cause: 'Price discrimination by monopolist',         effect: 'Consumer surplus transferred to producer' }
        ]
      },
      {
        id:   'q_mvc_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out in the context of arguments against monopoly?',
        opts: ['Allocative inefficiency','Deadweight loss','X-inefficiency','Dynamic efficiency'],
        ans:  3,
        exp:  'Allocative inefficiency, deadweight loss, and X-inefficiency are all criticisms of monopoly. Dynamic efficiency is an argument in favour of monopoly (supernormal profit funds innovation).'
      },
      {
        id:   'q_mvc_9',
        type: 'data_table',
        q:    'Use the table comparing competitive and monopoly outcomes to answer: which scenario has the greatest deadweight loss?',
        tableHeaders: ['Scenario','Competitive Q','Monopoly Q','Competitive P (£)','Monopoly P (£)'],
        tableData: [
          ['A','100','80','10','13'],
          ['B','200','120','8','14'],
          ['C','150','100','12','18'],
          ['D','80','70','15','17']
        ],
        opts: ['Scenario A','Scenario B','Scenario C','Scenario D'],
        ans:  1,
        exp:  'DWL ≈ ½ × ΔQ × ΔP. B: ½×80×6=240; A: ½×20×3=30; C: ½×50×6=150; D: ½×10×2=10. Scenario B has the largest DWL.'
      },
      {
        id:   'q_mvc_10',
        type: 'match_pairs',
        q:    'Match each concept to its correct description.',
        pairs: [
          { a: 'Allocative efficiency',   b: 'P = MC; production matches consumer preferences' },
          { a: 'X-inefficiency',          b: 'Costs above minimum due to lack of competitive pressure' },
          { a: 'Dynamic efficiency',      b: 'Innovation and product improvement over time' },
          { a: 'Competition policy',      b: 'Government rules to prevent anti-competitive behaviour' },
          { a: 'Price regulation',        b: 'Setting a maximum price for a natural monopoly' },
          { a: 'Deadweight loss',         b: 'Net welfare loss from under-production vs competition' }
        ]
      }
    ]
  };

})();
