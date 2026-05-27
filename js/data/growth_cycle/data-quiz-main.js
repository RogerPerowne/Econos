(function () {

  window.ECONOS_QUIZ = {
    id:       'growth_cycle_main',
    topicId:  'growth_cycle_main',
    title:    'Trade Cycle, Shocks & Economic Growth',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.routes.learn('growth_cycle'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers the four trade cycle phases, demand/supply shocks, and costs and benefits of growth',
    shortNames: [
      'Trade cycle phases','Boom','Recession','Demand shock','Supply shock',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        id:   'q_gc_1',
        type: 'mcq',
        q:    'The four phases of the trade cycle in correct order are:',
        opts: [
          'Boom → Recovery → Recession → Trough',
          'Recovery → Boom → Recession → Trough',
          'Boom → Recession → Trough → Recovery',
          'Trough → Boom → Recovery → Recession'
        ],
        ans:  2,
        exp:  'The trade (business) cycle follows: Boom (peak) → Recession (falling output) → Trough (lowest point) → Recovery (rising output back toward boom). The cycle then repeats.'
      },
      {
        id:   'q_gc_2',
        type: 'mcq',
        q:    'During a boom phase, which of the following is most likely to occur?',
        opts: [
          'Unemployment rises and prices fall',
          'Output rises, employment is high, and inflationary pressure builds',
          'Firms cut investment and consumer confidence falls',
          'Government tax revenues fall sharply'
        ],
        ans:  1,
        exp:  'A boom is characterised by rapid growth, high consumer spending, low unemployment, and rising inflationary pressure as the economy approaches or exceeds potential output.'
      },
      {
        id:   'q_gc_3',
        type: 'mcq',
        q:    'A negative demand shock would typically cause:',
        opts: [
          'AD to shift right, reducing unemployment',
          'SRAS to shift left, raising prices',
          'AD to shift left, reducing output and price level',
          'LRAS to shift right, increasing potential output'
        ],
        ans:  2,
        exp:  'A negative demand shock (e.g., financial crisis, collapse in consumer confidence) shifts AD leftward – output and the price level both fall. Unemployment rises.'
      },
      {
        id:   'q_gc_4',
        type: 'mcq',
        q:    'A positive supply-side shock (e.g., a fall in oil prices) would:',
        opts: [
          'Shift SRAS left, raising prices and cutting output',
          'Shift SRAS right, lowering prices and raising output simultaneously',
          'Only shift AD, leaving AS unchanged',
          'Cause stagflation by raising both unemployment and inflation'
        ],
        ans:  1,
        exp:  'Lower input costs shift SRAS right. The economy moves to a higher output and lower price level simultaneously – a rare "free lunch" in macroeconomics that improves inflation and growth together.'
      },
      {
        id:   'q_gc_5',
        type: 'numeric_input',
        q:    'An economy grows at 2.5% per year. Starting from a base GDP of £800bn, what is GDP after two years (to the nearest £bn)?',
        answer: 841,
        tolerance: 2,
        unit: '£bn',
        hint: 'Apply growth rate twice: GDP₂ = GDP₀ × (1.025)².',
        workingSteps: ['Year 1: £800bn × 1.025 = £820bn','Year 2: £820bn × 1.025 = £840.5bn ≈ £841bn']
      },
      {
        id:   'q_gc_6',
        type: 'categorise',
        q:    'Categorise each event as a demand-side shock or a supply-side shock.',
        categories: ['Demand shock','Supply shock'],
        items: [
          { item: 'Global financial crisis reduces confidence',   category: 'Demand shock' },
          { item: 'Oil price spike due to conflict',             category: 'Supply shock' },
          { item: 'Government unexpectedly cuts spending sharply',category: 'Demand shock' },
          { item: 'Major technological breakthrough boosts productivity',category: 'Supply shock' },
          { item: 'Consumer credit tightens sharply',            category: 'Demand shock' },
          { item: 'Pandemic disrupts global supply chains',      category: 'Supply shock' }
        ]
      },
      {
        id:   'q_gc_7',
        type: 'cause_effect',
        q:    'Match each trade cycle phase or event to its macroeconomic effect.',
        pairs: [
          { cause: 'Boom phase',                     effect: 'Inflation risk rises; positive output gap' },
          { cause: 'Recession (two negative GDP quarters)', effect: 'Unemployment rises; tax revenue falls' },
          { cause: 'Trough reached',                 effect: 'Output is at its lowest; large negative output gap' },
          { cause: 'Recovery begins',                effect: 'Output, employment, and confidence start to rise' },
          { cause: 'Negative supply shock hits',     effect: 'SRAS shifts left; stagflation risk emerges' },
          { cause: 'Government runs counter-cyclical fiscal policy', effect: 'Automatic stabilisers smooth the cycle' }
        ]
      },
      {
        id:   'q_gc_8',
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Boom','Trough','Recession','Consumer Price Index'],
        ans:  3,
        exp:  'Boom, trough, and recession are all phases of the trade cycle. The Consumer Price Index measures inflation – it is not a trade cycle phase.'
      },
      {
        id:   'q_gc_9',
        type: 'data_table',
        q:    'Use the GDP growth table to identify which year the economy entered a recession.',
        tableHeaders: ['Year','GDP Growth (%)'],
        tableData: [
          ['2019','+2.1'],
          ['2020','-1.8'],
          ['2021','-0.9'],
          ['2022','+4.2'],
          ['2023','+1.5']
        ],
        opts: ['2019','2020','2021','2022'],
        ans:  1,
        exp:  'A recession is defined as two consecutive quarters (or here, years) of negative GDP growth. Growth was negative in 2020 (−1.8%) and 2021 (−0.9%), so the recession began in 2020.'
      },
      {
        id:   'q_gc_10',
        type: 'match_pairs',
        q:    'Match each trade cycle concept to its description.',
        pairs: [
          { a: 'Boom',                      b: 'Peak of the cycle; high growth, low unemployment, inflationary pressure' },
          { a: 'Recession',                 b: 'Falling output for at least two consecutive quarters' },
          { a: 'Trough',                    b: 'Lowest point of the cycle; largest negative output gap' },
          { a: 'Recovery',                  b: 'Output rising again after reaching the trough' },
          { a: 'Negative demand shock',     b: 'Sudden fall in AD causing output and prices to fall' },
          { a: 'Counter-cyclical policy',   b: 'Government spending or tax changes that smooth the economic cycle' }
        ]
      }
    ]
  };

})();
