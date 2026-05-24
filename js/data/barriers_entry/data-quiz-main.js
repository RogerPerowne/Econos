(function () {

  window.ECONOS_QUIZ = {
    id:       'barriers_entry_main',
    topicId:  'barriers_entry_main',
    title:    'Barriers to Entry',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'barriers_entry' }),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers types of barriers, their effects on competition, and policy responses',
    shortNames: [
      'Natural barriers','Artificial barriers','Sunk costs','Predatory pricing','Patents',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_be2_1',
        type: 'mcq',
        q:    'A natural barrier to entry arises from:',
        opts: [
          'A firm patenting its product',
          'Structural features of the market such as economies of scale',
          'An incumbent firm cutting its price to drive out rivals',
          'Government granting an exclusive licence'
        ],
        ans:  1,
        exp:  'Natural (or innocent) barriers arise from the inherent structure of the market — e.g., very high minimum efficient scale, or large sunk costs, not deliberate incumbent strategy.'
      },
      {
        id:   'q_be2_2',
        type: 'mcq',
        q:    'Which of the following is an example of a strategic (artificial) barrier to entry?',
        opts: [
          'Large economies of scale enjoyed by the incumbent',
          'High capital requirements for a capital-intensive industry',
          'Predatory pricing to drive out or deter rivals',
          'Ownership of a scarce natural resource'
        ],
        ans:  2,
        exp:  'Strategic barriers are deliberately created by incumbents. Predatory pricing — temporarily cutting prices below cost to deter or eliminate rivals — is a classic example. It is illegal under competition law in many countries.'
      },
      {
        id:   'q_be2_3',
        type: 'mcq',
        q:    'Patents protect a firm\'s market position by:',
        opts: [
          'Preventing all competition in the market permanently',
          'Giving the inventor an exclusive right to produce the product for a set period',
          'Allowing the government to set the price for the product',
          'Requiring rivals to pay a subsidy to the patent holder'
        ],
        ans:  1,
        exp:  'A patent grants the inventor exclusive rights (typically 20 years in the UK) to produce and sell the invention. This prevents imitation and acts as a legal barrier to entry.'
      },
      {
        id:   'q_be2_4',
        type: 'mcq',
        q:    'Sunk costs create a barrier to entry because:',
        opts: [
          'They are paid by the government, not the firm',
          'They make entry expensive and irreversible, increasing risk',
          'They are recovered easily when a firm exits the market',
          'They only apply to existing firms, not new entrants'
        ],
        ans:  1,
        exp:  'Sunk costs cannot be recovered if a firm exits. For a potential entrant, the prospect of losing unrecoverable spending makes entry risky and deters investment — creating a barrier.'
      },
      {
        id:   'q_be2_5',
        type: 'numeric_input',
        q:    'An incumbent has average costs of £15 per unit. A new entrant would face AC of £22 per unit. The incumbent sets limit price at £21. Calculate the entrant\'s profit per unit.',
        answer: -1,
        tolerance: 0,
        unit: '£',
        hint: 'Profit per unit = P − AC for the entrant.',
        workingSteps: ['Entrant\'s profit per unit = £21 − £22 = −£1 (loss)']
      },
      {
        id:   'q_be2_6',
        type: 'categorise',
        q:    'Categorise each barrier as natural (innocent) or strategic (artificial).',
        categories: ['Natural barrier','Strategic barrier'],
        items: [
          { item: 'Economies of scale (MES is large)',     category: 'Natural barrier' },
          { item: 'Predatory pricing',                     category: 'Strategic barrier' },
          { item: 'Ownership of a unique resource',        category: 'Natural barrier' },
          { item: 'Exclusive dealing contracts',           category: 'Strategic barrier' },
          { item: 'Very high sunk costs in the industry',  category: 'Natural barrier' },
          { item: 'Limit pricing by incumbent',            category: 'Strategic barrier' }
        ]
      },
      {
        id:   'q_be2_7',
        type: 'cause_effect',
        q:    'Match each barrier to its effect on market competition.',
        pairs: [
          { cause: 'High economies of scale',               effect: 'New entrant faces higher average costs than incumbent' },
          { cause: 'Patent granted to firm',                effect: 'Rivals legally prevented from copying the product' },
          { cause: 'Incumbent practises predatory pricing', effect: 'Rival exits or potential entrants deterred' },
          { cause: 'Regulatory barrier removed',            effect: 'More firms can enter, competition increases' },
          { cause: 'Strong incumbent brand loyalty',        effect: 'New entrant must spend heavily on advertising to compete' },
          { cause: 'High sunk costs in industry',           effect: 'Market becomes less contestable' }
        ]
      },
      {
        id:   'q_be2_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Patent','Government licence','Free entry and exit','Economies of scale'],
        ans:  2,
        exp:  'Patents, government licences, and economies of scale are all barriers to entry. Free entry and exit is the absence of barriers — it is a condition for perfect competition and contestability.'
      },
      {
        id:   'q_be2_9',
        type: 'data_table',
        q:    'Use the table to identify the industry with the highest barrier to entry.',
        tableHeaders: ['Industry','MES as % of market','Typical sunk costs','Key barrier type'],
        tableData: [
          ['Hairdressing','<1%','Low','None significant'],
          ['Pharmaceuticals','5%','Very high','Patents + R&D sunk costs'],
          ['Online content','<1%','Low','Network effects'],
          ['Water supply','100%','Extremely high','Natural monopoly / infrastructure']
        ],
        opts: ['Hairdressing','Pharmaceuticals','Online content','Water supply'],
        ans:  3,
        exp:  'Water supply has the highest barriers: MES equals the entire market (natural monopoly), and infrastructure sunk costs are enormous. No new firm could profitably enter at smaller scale.'
      },
      {
        id:   'q_be2_10',
        type: 'match_pairs',
        q:    'Match each term to its correct description.',
        pairs: [
          { a: 'Minimum Efficient Scale',  b: 'Lowest output at which long-run average cost is minimised' },
          { a: 'Predatory pricing',        b: 'Pricing below cost to drive out a rival' },
          { a: 'Patent',                   b: 'Legal right to exclude others from making an invention' },
          { a: 'Sunk cost',                b: 'Cost that cannot be recovered on exit from a market' },
          { a: 'Limit pricing',            b: 'Pricing just low enough to make entry unprofitable' },
          { a: 'Regulatory barrier',       b: 'Licence or legal requirement restricting market entry' }
        ]
      }
    ]
  };

})();
