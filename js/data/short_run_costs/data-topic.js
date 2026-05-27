window.ECONOS_TOPIC = {
  id: 'short_run_costs',
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
