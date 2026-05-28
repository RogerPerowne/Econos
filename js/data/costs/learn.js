window.ECONOS_TOPIC = {
  id: 'costs',
  topicNum: '3.2',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Costs',
  estTime: '7-9 minutes',
  goal: 'Lock in fixed vs variable costs, total/average/marginal cost, the law of diminishing returns, and U-shaped average cost curves.',
  intro: {
    heroKey: 'heroShortRunCosts',
    summary: 'Cost analysis is the bedrock of firm decision-making. In the short run, fixed costs are unavoidable and variable costs rise as output increases – eventually at an accelerating rate due to diminishing marginal returns. Understanding these curves is essential for all market structure analysis.',
    doInThis: 'Work through 7 cards covering fixed and variable costs, TC/AC/MC relationships, the law of diminishing returns, the U-shaped AC curve, marginal cost and supply, and cost concepts in practice.',
    outcomes: [
      'Distinguish fixed from variable costs and calculate total, average, and marginal costs',
      'Explain the law of diminishing marginal returns and its effect on costs',
      'Draw and explain the U-shaped average cost curve and its relationship to MC',
      'Apply short-run cost analysis to firm output and pricing decisions'
    ],
    tip: 'When MC < AC, AC is falling. When MC > AC, AC is rising. MC always crosses AC at its minimum. This must hold mathematically – if the marginal is below average, it pulls average down; above average, it pulls average up.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'short_run_costs_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Short-run costs: the big picture',
      lede: 'In the short run, capital is locked in. That single constraint shapes every cost curve – and explains the U-shape you\'ll draw a hundred times.',
      branches: [
        { tone: 'green',  label: 'Fixed vs variable',          sub: 'FC stays the same whatever you produce; VC rises with output. The split drives the whole short-run cost story.' },
        { tone: 'blue',   label: 'TC, AC and MC',              sub: 'AC = TC/Q; MC = ΔTC/ΔQ. MC always cuts AC at AC\'s minimum – a mathematical certainty.' },
        { tone: 'amber',  label: 'Diminishing returns',        sub: 'Add more labour to fixed capital and eventually each extra worker adds less. Rising MC follows directly.' },
        { tone: 'purple', label: 'The U-shaped AC',            sub: 'Falling AFC pulls AC down; rising AVC eventually pushes it up. The U is the visible signature of the fixed factor.' }
      ],
      body: 'In the <strong>short run</strong>, at least one factor of production is fixed (usually capital – machinery, buildings). This creates two categories of cost:<br><br><strong>Fixed costs (FC):</strong> do not vary with output. Must be paid whether the firm produces 0 or 1,000 units. Examples: rent, insurance, management salaries, loan repayments, depreciation on equipment.<br><br><strong>Variable costs (VC):</strong> increase as output rises. Examples: raw materials, hourly labour, energy for production.<br><br><strong>Total Cost (TC) = FC + VC.</strong> The distinction matters: in the short run, fixed costs are sunk (cannot be recovered by reducing output) – only variable costs can be reduced by cutting production.',
      keyTerms: [
        { term: 'Fixed cost', def: 'Cost that does not vary with output – paid regardless of production level. Creates economies of scale as it spreads over more units.' },
        { term: 'Variable cost', def: 'Cost that rises with output – raw materials, direct labour. Avoidable by not producing.' },
        { term: 'Sunk cost', def: 'A cost already incurred that cannot be recovered – should not influence future decisions (but often does due to sunk cost fallacy).' }
      ],
      examEdge: 'Fixed costs are crucial for economies of scale: as output rises, FC per unit falls (AFC = FC/Q → 0 as Q → ∞). This means firms with high fixed costs and low variable costs (pharmaceuticals, software) have dramatically falling average costs – a major competitive advantage at scale.'
    },
    {
      id: 'short_run_costs_2',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Total, Average, and Marginal Cost',
      lede: 'AFC falls, AVC bottoms then rises, AC inherits the U-shape. MC is the marginal – and it always crosses AVC and AC at their minima.',
      diagramKey: 'shortRunCostStack',
      steps: [
        {
          key: 'base',
          label: 'AFC + AVC → AC',
          text: '<strong>AFC = FC/Q</strong> always falls as Q rises – fixed costs get spread across more units. <strong>AVC</strong> falls first (specialisation and increasing returns to labour on fixed capital), then rises (diminishing returns). <strong>AC = AFC + AVC</strong>: inherits the U-shape because AFC drags it down on the left and AVC pushes it up on the right.'
        },
        {
          key: 'extension',
          label: 'Add the marginal',
          text: '<strong>MC = ΔTC/ΔQ</strong> – the cost of producing one more unit. Falls initially due to specialisation and increasing returns, then rises sharply as diminishing returns set in: each extra worker added to fixed capital produces less, so each extra unit costs more. Result: the Nike-tick shape.'
        },
        {
          key: 'shift',
          label: 'The crossing rule',
          text: '<strong>MC crosses every average at its minimum.</strong> This is a mathematical certainty, not a coincidence. When MC &lt; AC, MC pulls AC down. When MC &gt; AC, MC pushes AC up. So at the moment MC = AC, AC stops falling and starts rising – its minimum. Same logic gives MC = AVC at min AVC. The point where MC = AC = min AC is the firm\'s <strong>productively efficient output</strong>.'
        }
      ],
      examEdge: 'The MC-AC relationship is the most commonly incorrectly drawn diagram in exams. MC must cross AC at the bottom of the U. Quick check while drawing: does MC lie below AC on the left of AC\'s minimum? Does MC lie above AC on the right? If yes, you\'re correct. Same applies to MC vs AVC at min AVC.'
    },
    {
      id: 'short_run_costs_3',
      template: 'framing',
      title: 'The Law of Diminishing Marginal Returns',
      body: 'The <strong>law of diminishing marginal returns</strong> states that as successive units of a variable factor (labour) are added to a fixed factor (capital), beyond some point the marginal product of the variable factor will fall.<br><br><strong>Example:</strong> A kitchen with 2 ovens. Adding 1st chef → big output gain (can use both ovens). 2nd chef → good output gain. 3rd chef → smaller gain (starting to get in each other\'s way). 4th chef → very small gain. 5th → may even reduce output (chaos).<br><br><strong>Consequence for costs:</strong> as marginal product falls, it takes more labour per unit of output → marginal cost rises. The rising section of the MC curve reflects diminishing marginal returns.',
      keyTerms: [
        { term: 'Diminishing marginal returns', def: 'Beyond some output level, each additional unit of variable input adds less to output than the previous unit – with fixed capital.' },
        { term: 'Marginal product of labour (MPL)', def: 'Extra output produced by one more worker. When MPL falls, MC rises.' },
        { term: 'Short-run constraint', def: 'Fixed capital is the binding constraint – diminishing returns apply because the variable factor (labour) is being applied to a fixed factor (machinery).' }
      ],
      examEdge: 'Note: diminishing marginal returns is a SHORT-RUN concept. In the long run, all factors can be varied → no fixed factor → no diminishing returns. Long-run cost behaviour is governed by economies and diseconomies of scale – a different concept. This distinction is frequently confused in essays.'
    },
    {
      id: 'short_run_costs_4',
      template: 'framing',
      title: 'The U-Shaped Average Cost Curve',
      body: 'The average cost (AC) curve is U-shaped because of the interaction between fixed costs and variable costs:<br><br><strong>Left (falling) portion:</strong> Initially, FC per unit falls rapidly as output rises (spreading fixed costs). Also, increasing returns may initially raise labour productivity. AC falls.<br><br><strong>Middle (minimum point):</strong> The point of least cost per unit – where the spreading of fixed costs and the benefit of increasing returns is balanced against the onset of diminishing returns. This is the <em>minimum efficient scale</em> in the short run.<br><br><strong>Right (rising) portion:</strong> Diminishing marginal returns cause variable costs per unit to rise faster than fixed costs per unit fall. AC rises.',
      keyTerms: [
        { term: 'U-shaped AC curve', def: 'Average cost falls initially (fixed cost spreading + increasing returns), reaches a minimum, then rises (diminishing returns dominate).' },
        { term: 'Minimum point of AC', def: 'Short-run productive efficiency – where MC = AC; minimum cost per unit.' },
        { term: 'AFC', def: 'Average Fixed Cost = FC/Q. Always falls as Q rises – the "fixed cost spreading" effect that initially drives AC down.' }
      ],
      examEdge: 'Exam diagrams for market structures (perfect competition, monopoly, oligopoly) all require correct AC and MC curves. MC is J-shaped (steep on left, cuts AC at minimum, continues rising). AC is U-shaped. These two must always be drawn in correct relative positions. Practise until drawing them is automatic.'
    },
    {
      id: 'short_run_costs_5',
      template: 'diagnose',
      title: 'Cost Curves in Practice',
      intro: 'Different industries have very different cost structures – shape and level of AC and MC vary significantly.',
      rows: [
        { label: 'Industry', colA: 'Pharmaceutical drugs', colB: 'Restaurant meals' },
        { label: 'Cost structure', colA: 'Very high fixed costs (R&D: £1-2bn per drug). Very low variable costs (pill costs pennies to manufacture). AC falls steeply with scale.', colB: 'Moderate fixed costs (rent, kitchen, staff). Variable costs (ingredients, kitchen labour) significant. AC curve less dramatically U-shaped.' },
        { label: 'Implication', colA: 'Large scale needed to recover fixed costs. Patents protect market for 20 years – monopoly pricing justified as reward for R&D investment. AC at large scale is tiny → very high margins.', colB: 'Small firms can operate near AC minimum without huge scale. Industry remains relatively fragmented (many small restaurants). Competition keeps prices near AC.' }
      ],
      footer: 'High fixed cost industries naturally tend toward concentration: only large-scale firms can spread fixed costs sufficiently to be competitive. This explains why pharmaceuticals, aerospace, telecoms, and broadcasting are dominated by a few large firms.',
      examEdge: 'Software has extreme fixed cost structure: development costs are fixed; marginal cost of distributing one more digital copy is near zero. This creates winner-take-all dynamics (massive returns to scale, falling MC at all scales) – explains tech monopolies. This is the economic reason why Microsoft, Google, and Meta dominate their markets.'
    },
    {
      id: 'short_run_costs_6',
      template: 'framing',
      title: 'Marginal Cost and the Supply Decision',
      body: 'The MC curve is the firm\'s short-run supply curve (above the shutdown point, covered in the profits/shutdown topic).<br><br><strong>Why?</strong> A profit-maximising firm produces where P = MC. At any given market price, the firm produces where price equals the cost of the last unit. If price rises, the firm expands to the new point where P = MC → extends supply. If price falls, contracts to new point. The MC curve traces quantity supplied at each price = supply curve.<br><br>This is why supply curves slope upward: at higher prices, firms are willing to produce more because higher prices cover the rising marginal costs of greater output.',
      keyTerms: [
        { term: 'MC = supply curve', def: 'For a competitive firm, the MC curve above minimum AVC is the firm\'s supply curve – quantity supplied at each price.' },
        { term: 'P = MC', def: 'The profit-maximising condition for a price-taking firm – produce up to where market price equals marginal cost.' },
        { term: 'Producer surplus', def: 'In the short run, producer surplus = TR − VC = area above the MC (supply) curve below price.' }
      ],
      examEdge: 'The link between the firm\'s cost curves and the market supply curve is often under-explained in essays. Explicitly stating: "the MC curve represents the marginal cost of production; since a competitive firm produces where P = MC, each price corresponds to a specific output level – this is why the supply curve slopes upward, reflecting rising MC." This mechanism earns analytical marks.'
    },
    {
      id: 'short_run_costs_7',
      template: 'framing',
      title: 'Normal Profit, Economic Profit, and Cost Concepts',
      body: 'Economic costs include both explicit and implicit costs:<br><br><strong>Explicit costs:</strong> actual money payments (wages, rent, materials).<br><strong>Implicit costs:</strong> opportunity cost of resources owned by the firm (entrepreneur\'s time; capital invested).<br><br>Including implicit costs means normal profit is included in the cost curves:<br>• When TR = TC (economic), the firm earns zero economic profit = normal profit (just covers opportunity cost).<br>• When TR > TC, the firm earns supernormal (economic) profit.<br>• When TR < TC, the firm makes a loss even if it makes an accounting profit (if accounting profit < normal profit).',
      keyTerms: [
        { term: 'Economic cost', def: 'Explicit costs + implicit costs (opportunity cost of owned resources). Includes normal profit as a cost.' },
        { term: 'Zero economic profit', def: 'TR = TC (including normal profit in TC) – the long-run competitive equilibrium. Firm is covering all costs including opportunity cost of capital.' },
        { term: 'Accounting profit', def: 'TR − explicit costs. May be positive even when economic profit is negative (if accounting profit < implicit costs).' }
      ],
      examEdge: 'The economic vs accounting profit distinction is crucial for market structure analysis. "Breaking even" in economic terms means earning normal profit – not zero accounting profit. In long-run perfect competition, P = AC → zero economic profit = normal profit. This is the equilibrium, not a failure. Saying "competitive firms earn no profit" is wrong – they earn normal profit.',
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
    title:    'Short-Run Costs',
    subtitle: 'Theme 3 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('short_run_costs_main'),
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

