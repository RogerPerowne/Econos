(function () {

  window.ECONOS_QUIZ = {
    id:       'short_run_costs_main',
    topicId:  'short_run_costs_main',
    title:    'Short-Run Costs',
    subtitle: 'Theme 3 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'short_run_costs_main' }),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers fixed/variable costs, marginal and average costs, diminishing returns, and cost curve shapes',
    shortNames: [
      'Fixed vs variable MCQ', 'Diminishing returns MCQ', 'Cost curves sort', 'MC calculation',
      'ATC minimum', 'Para fill', 'Cause & effect', 'Match pairs',
      'Odd one out', 'Data table'
    ],

    questions: [

      /* 1 – MCQ: fixed vs variable costs */
      { type: 'mcq',
        id: 'q_src_1',
        stem: 'Which of the following is a <strong>fixed cost</strong> for a manufacturing firm in the short run?',
        opts: [
          'The annual rent paid on a factory – this must be paid regardless of how much is produced',
          'The cost of raw materials used in production – this increases as output increases',
          'Overtime wages paid to workers during peak production periods',
          'The electricity used to power production machinery – this varies with output'
        ],
        ans: 0,
        exp: '<strong>Fixed costs</strong>: do not change with output in the short run – paid whether producing zero or maximum capacity. Examples: factory rent, business rates, insurance, loan repayments, depreciation of capital, management salaries. <strong>Variable costs</strong>: change directly with output – raw materials, hourly labour, energy for production. The distinction matters for short-run decisions: in the short run, at least one factor (capital) is fixed. If revenue covers variable costs, a firm will continue producing even if it makes a loss overall (as it covers its variable costs and contributes to fixed costs).'
      },

      /* 2 – MCQ: law of diminishing returns */
      { type: 'mcq',
        id: 'q_src_2',
        stem: 'The <strong>law of diminishing returns</strong> states that:',
        opts: [
          'As more units of a variable factor (e.g. labour) are added to a fixed factor (e.g. capital), the marginal product of the variable factor eventually falls',
          'As output increases, the average total cost of production always falls due to the spreading of fixed costs',
          'Returns to a factor of production always diminish from the very first unit added',
          'Diminishing returns occur because workers become less skilled over time as they specialize in narrow tasks'
        ],
        ans: 0,
        exp: 'The <strong>law of diminishing returns</strong> (or diminishing marginal product) is a short-run concept: with at least one fixed factor, adding more of the variable factor eventually produces smaller and smaller additions to output. Example: a factory with fixed capital – 1st worker adds greatly to output; 2nd worker adds less (machinery is now being shared); 10th worker might barely add anything as the factory is overcrowded. When marginal product falls, marginal cost rises. This links short-run production to cost theory: the rising MC curve reflects diminishing marginal productivity of labour.'
      },

      /* 3 – Elastic sort: costs classification */
      { type: 'elastic_sort',
        id: 'q_src_3',
        stem: 'Classify each cost as <strong>fixed</strong> or <strong>variable</strong> for a cafe in the short run.',
        categories: ['fixed', 'variable'],
        categoryLabels: ['Fixed cost', 'Variable cost'],
        goods: [
          { icon: '🏠', label: 'Monthly rent for the cafe premises', note: '', ans: 'fixed' },
          { icon: '☕', label: 'Cost of coffee beans and milk used each day', note: '', ans: 'variable' },
          { icon: '💡', label: 'Electricity for lights and heating (partially fixed, mainly variable)', note: '', ans: 'variable' },
          { icon: '📋', label: 'Business rates paid to the local council quarterly', note: '', ans: 'fixed' },
          { icon: '👷', label: 'Wages paid to part-time staff based on hours worked', note: '', ans: 'variable' },
          { icon: '🔧', label: 'Annual depreciation of the espresso machine and furniture', note: '', ans: 'fixed' }
        ],
        exp: '<strong>Fixed costs</strong>: rent, business rates, depreciation – paid regardless of cups of coffee sold; represent the cost of being in business. <strong>Variable costs</strong>: ingredients, variable labour (hourly/part-time), variable energy – directly linked to production volume. Fixed costs are "sunk" in the short run – cannot be reduced by cutting output. The key managerial insight: if revenue covers variable costs + some fixed costs, continue operating (loss is smaller than if the firm closes and still has to pay fixed costs).'
      },

      /* 4 – Numeric input: marginal cost */
      { type: 'numeric_input',
        id: 'q_src_4',
        stem: 'Calculate the <strong>marginal cost</strong> of the 5th unit.',
        context: 'A firm\'s total costs: 1 unit = £50; 2 units = £90; 3 units = £120; 4 units = £145; <strong>5 units = £175</strong>; 6 units = £210.',
        answer: 30,
        tolerance: 0.5,
        unit: '£',
        hint: 'Marginal cost = change in total cost ÷ change in output. MC of 5th unit = TC(5) − TC(4).',
        workingSteps: [
          'MC(5th unit) = TC(5) − TC(4) = £175 − £145 = £30'
        ],
        exp: 'Marginal cost (MC) = change in total cost ÷ change in quantity. MC(5) = £175 − £145 = <strong>£30</strong>. For the sequence: MC(1)=50, MC(2)=40, MC(3)=30, MC(4)=25, MC(5)=30, MC(6)=35. MC first falls (increasing marginal product of labour as the firm reaches optimal workforce size) then rises (diminishing returns set in). This U-shape of MC is fundamental to cost theory. The minimum point of MC occurs at the output where diminishing returns begin. MC crosses ATC at the minimum of ATC – a key diagram relationship.'
      },

      /* 5 – MCQ: ATC minimum and MC relationship */
      { type: 'mcq',
        id: 'q_src_5',
        stem: 'On a standard cost curve diagram, the <strong>marginal cost (MC) curve passes through the minimum point of the average total cost (ATC) curve</strong>. Why?',
        opts: [
          'When MC < ATC, ATC is being pulled down; when MC > ATC, ATC is being pulled up. ATC is only at its minimum when MC = ATC – pulling neither up nor down',
          'MC and ATC curves always have the same shape, so they must cross at the minimum point',
          'ATC is minimised when marginal costs are at their lowest – both curves reach their minimum at the same output',
          'The government requires firms to produce at minimum ATC – so the crossing point is mandated by regulation'
        ],
        ans: 0,
        exp: 'This is a mathematical relationship called the "marginal-average rule": when the marginal value is below the average, it pulls the average down; when the marginal is above the average, it pulls the average up; when marginal equals average, the average is neither rising nor falling – it is at its minimum (or maximum). The same relationship exists for exam scores (if your marginal score is below your average, your average falls), batting averages, and AVC/ATC/MC in cost theory. ATC minimum = MC crossing ATC is the productive efficiency benchmark.'
      },

      /* 6 – Para fill: cost curves */
      { type: 'para_fill',
        id: 'q_src_6',
        stem: 'Complete the paragraph about short-run cost curves.',
        anchor: 'Short-run cost curves reflect the law of diminishing returns.',
        para: 'In the short run, as output increases, the marginal cost curve first [1] (as the workforce reaches its most efficient size) and then [2] (as diminishing returns set in and each additional worker adds less to output). The average [3] cost curve is U-shaped because fixed costs are spread over more units (so [4] falls) but eventually rising marginal costs dominate (so [5] rises). The MC curve crosses both the AVC and ATC at their [6] points. Average [7] cost falls continuously as output rises, because the fixed cost component is spread over more units.',
        blanks: [
          { id: 1, opts: ['falls', 'rises', 'stays flat', 'jumps'], ans: 0 },
          { id: 2, opts: ['rises', 'falls', 'stays flat', 'disappears'], ans: 0 },
          { id: 3, opts: ['total', 'fixed', 'variable', 'marginal'], ans: 0 },
          { id: 4, opts: ['ATC', 'MC', 'AVC', 'TFC'], ans: 0 },
          { id: 5, opts: ['ATC', 'AFC', 'MC', 'TVC'], ans: 0 },
          { id: 6, opts: ['minimum', 'maximum', 'average', 'inflection'], ans: 0 },
          { id: 7, opts: ['fixed', 'variable', 'marginal', 'total'], ans: 0 }
        ],
        exp: '(1) MC first <strong>falls</strong>. (2) Then <strong>rises</strong> as diminishing returns dominate. (3) Average <strong>total</strong> cost is U-shaped. (4) <strong>ATC</strong> falls initially (fixed cost spreading effect). (5) Eventually <strong>ATC</strong> rises (rising AVC from diminishing returns outweighs falling AFC). (6) MC crosses AVC and ATC at their <strong>minimum</strong> points. (7) Average <strong>fixed</strong> cost falls continuously (TFC ÷ more units = smaller AFC at every higher output level). These relationships form the foundation of all market structure diagrams.'
      },

      /* 7 – Cause & effect: costs and production decisions */
      { type: 'cause_effect',
        id: 'q_src_7',
        stem: 'Match each change in production conditions to its effect on short-run costs.',
        pairs: [
          { cause: 'A firm adds a third shift to its factory, running beyond optimal capacity', effect: 'Marginal and average variable costs rise – diminishing returns intensify' },
          { cause: 'A firm\'s landlord raises factory rent by 20%', effect: 'Fixed costs rise; ATC shifts up; AVC and MC unchanged at each output level' },
          { cause: 'Automation of one repetitive task reduces direct labour required per unit', effect: 'AVC falls; MC shifts downward; ATC falls at every output level' },
          { cause: 'Raw material costs (variable input) double due to global supply shock', effect: 'AVC and MC both rise; ATC shifts upward; fixed costs unchanged' },
          { cause: 'A firm operates below its optimal capacity (inside the PPF)', effect: 'Productive inefficiency – ATC above minimum; idle resources' },
          { cause: 'A firm reaches the output level where MC = ATC', effect: 'ATC is at its minimum – the productively efficient output level' }
        ],
        exp: 'Cost effects by type: <strong>changes in fixed costs</strong> (rent, rates) → shift ATC but not AVC or MC; <strong>changes in variable input costs</strong> (labour, materials) → shift AVC, MC, and ATC; <strong>technology improvements</strong> → shift MC and AVC down; <strong>diminishing returns worsened</strong> (overcapacity) → MC and AVC rise more steeply. Operating below minimum ATC = productive inefficiency. Operating at minimum ATC = productive efficiency. Understanding which cost curves are affected is key to diagrams and policy analysis.'
      },

      /* 8 – Match pairs: cost curve concepts */
      { type: 'match_pairs',
        id: 'q_src_8',
        stem: 'Match each cost concept to its definition.',
        pairs: [
          { a: 'Total Fixed Cost (TFC)', b: 'Costs that do not change with output in the short run' },
          { a: 'Total Variable Cost (TVC)', b: 'Costs that vary directly with output' },
          { a: 'Average Total Cost (ATC)', b: 'Total cost ÷ quantity – U-shaped in the short run' },
          { a: 'Marginal Cost (MC)', b: 'Change in total cost from producing one more unit' },
          { a: 'Productive efficiency', b: 'Producing at minimum average total cost – no waste' },
          { a: 'Law of diminishing returns', b: 'Adding more variable factor to fixed capital eventually yields smaller marginal output gains' }
        ],
        exp: 'Core short-run cost vocabulary: TFC (the floor – paid whether or not anything is produced); TVC (rises with output – variable proportionally); ATC = AFC + AVC (both components, U-shaped overall); MC (the slope of TC – pulls averages toward it); productive efficiency at minimum ATC (relevant to market structure comparisons – perfect competition achieves it in long run; monopoly typically does not). Diminishing returns is the production-side explanation for the rising portion of the MC and AVC curves.'
      },

      /* 9 – Odd one out: variable costs */
      { type: 'odd_one_out',
        id: 'q_src_9',
        stem: 'Three of these are <strong>variable costs</strong> for an airline. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '⛽', label: 'Jet fuel used on each flight – more flights means more fuel', note: '' },
          { icon: '👨‍✈️', label: 'Crew wages paid per flight hour – more flights means more crew hours', note: '' },
          { icon: '🏢', label: 'Annual lease payments on aircraft – fixed regardless of how many flights are operated', note: '' },
          { icon: '🍽️', label: 'In-flight catering costs – more passengers means more meals served', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>annual aircraft lease payments</strong>. This is a fixed cost – paid whether the aircraft flies 1 or 500 times during the year. The lease agreement commits the airline to a fixed sum regardless of utilisation. Fuel, crew hours, and catering are all variable costs – they rise with the number of flights or passengers. For airlines, the large proportion of fixed costs (aircraft leases, landing slots, maintenance commitments) means they have high operational leverage: a fall in passenger numbers has a magnified effect on profit because fixed costs cannot be reduced.'
      },

      /* 10 – Data table: cost analysis */
      { type: 'data_table',
        id: 'q_src_10',
        stem: 'The table shows short-run cost data for a manufacturing firm.',
        headers: ['Output (units)', 'Total Fixed Cost (£)', 'Total Variable Cost (£)', 'Total Cost (£)', 'Marginal Cost (£)'],
        rows: [
          ['0', '200', '0', '200', '–'],
          ['1', '200', '80', '280', '80'],
          ['2', '200', '140', '340', '60'],
          ['3', '200', '180', '380', '40'],
          ['4', '200', '240', '440', '60'],
          ['5', '200', '340', '540', '100']
        ],
        question: 'At which output level do <strong>diminishing returns</strong> begin according to the data?',
        opts: [
          'Between output 3 and output 4 – MC rises from £40 to £60, indicating the marginal product of the variable factor has started to fall',
          'Between output 1 and output 2 – MC falls from £80 to £60, showing increasing returns initially',
          'At output 5 – where MC is highest at £100 and diminishing returns are most severe',
          'Diminishing returns have not yet set in – the data show only falling MC throughout'
        ],
        ans: 0,
        exp: 'Diminishing returns begin when MC starts rising. The sequence: MC(1)=80, MC(2)=60, MC(3)=40, MC(4)=60, MC(5)=100. MC falls from units 1-3 (increasing marginal returns), then rises from units 3-5. Diminishing returns begin <strong>between units 3 and 4</strong> – this is where the marginal product of the variable factor peaks (cheapest additional unit is unit 3 at £40) and then starts declining. At output 3, ATC = £380/3 = £126.67. The MC = ATC minimum would occur at a slightly higher output level (where MC has risen enough to equal the falling ATC).'
      }

    ]
  };

})();
