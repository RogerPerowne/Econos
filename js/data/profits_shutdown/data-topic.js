window.ECONOS_TOPIC = {
  id: 'profits_shutdown',
  topicNum: '3.5',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Revenue, Profit & Shutdown',
  estTime: '7-9 minutes',
  goal: 'Lock in average and marginal revenue concepts, profit calculation, the shutdown rule, and how to identify profit/loss areas on diagrams.',
  intro: {
    heroKey: 'business',
    summary: 'Revenue analysis bridges cost theory to market structure. Understanding how TR, AR, and MR behave under different demand conditions, combined with the shutdown rule, enables full profit analysis — the backbone of all market structure diagrams.',
    doInThis: 'Work through 7 cards covering TR/AR/MR relationships, normal vs supernormal profit, economic loss, the shutdown condition, break-even analysis, and how to read profit/loss rectangles on diagrams.',
    outcomes: [
      'Define AR, MR, and TR and explain their relationships under perfect competition and monopoly',
      'Calculate profit as TR − TC and identify normal/supernormal profit and loss',
      'Explain the shutdown rule: produce in short run if P ≥ AVC; close if P < AVC',
      'Read profit, loss, and normal profit zones from standard market structure diagrams'
    ],
    tip: 'Profit = (P − AC) \xd7 Q = area of the rectangle between price and AC over quantity Q. Supernormal profit: P > AC rectangle above AC. Loss: P < AC rectangle below price. Shutdown: P < AVC (cannot cover variable costs).',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'profits_shutdown_1',
      template: 'framing',
      title: 'Revenue Concepts: TR, AR, MR',
      body: '<strong>Total Revenue (TR)</strong> = Price \xd7 Quantity. Always rises initially as Q rises, then may fall depending on demand elasticity.<br><br><strong>Average Revenue (AR)</strong> = TR/Q = Price (P). The AR curve IS the demand curve — shows price at each quantity.<br><br><strong>Marginal Revenue (MR)</strong> = change in TR from selling one more unit. For a price-taking firm (perfect competition): demand is perfectly elastic → P is constant → MR = AR = P (horizontal). For a price-setter (monopoly): must lower price to sell more → MR < AR (MR curve lies below demand curve and falls twice as steeply for a linear demand curve).',
      keyTerms: [
        { term: 'Average Revenue (AR)', def: 'Revenue per unit = TR/Q = price. The AR curve is identical to the demand curve.' },
        { term: 'Marginal Revenue (MR)', def: 'Extra revenue from selling one more unit. Under monopoly, MR < AR because price must fall to sell more.' },
        { term: 'MR relationship to AR', def: 'For a linear demand curve, MR has the same intercept as AR but twice the slope — falls twice as fast.' }
      ],
      examEdge: 'For a linear demand curve P = a − bQ, MR = a − 2bQ. The MR curve has the same y-intercept as the demand curve but twice the slope. This means when MR = 0, Q = a/2b (half the quantity at which demand hits the x-axis). This geometric property is essential for monopoly diagrams.'
    },
    {
      id: 'profits_shutdown_2',
      template: 'framing',
      title: 'Normal Profit, Supernormal Profit, and Loss',
      body: 'Profit analysis uses <strong>economic profit</strong> (TR − economic costs, where economic costs include normal profit as a cost):<br><br>• <strong>Normal profit:</strong> TR = TC (economic). The firm covers all costs including opportunity cost. Zero economic profit = normal profit. In diagrams: P = AC → firm just breaks even economically.<br>• <strong>Supernormal profit:</strong> TR > TC. P > AC. Firm earns above normal return. Attracts new entrants in competitive markets.<br>• <strong>Loss (economic):</strong> TR < TC. P < AC. Firm makes a loss. May or may not continue operating depending on whether it covers variable costs.<br><br><strong>Profit rectangle:</strong> Profit = (P − AC) \xd7 Q → rectangle on diagram between P and AC, width Q.',
      keyTerms: [
        { term: 'Supernormal profit', def: 'P > AC — firm earns above normal return. Signals under-supply. Attracts entry in competitive markets.' },
        { term: 'Normal profit', def: 'P = AC — zero economic profit; all costs including opportunity cost are covered. Long-run competitive equilibrium.' },
        { term: 'Economic loss', def: 'P < AC — TR insufficient to cover all economic costs. Short-run: continue if P ≥ AVC. Long-run: exit.' }
      ],
      examEdge: 'Profit rectangle on diagram: at profit-maximising output Q*, the profit = rectangle with height (P − AC) and width Q*. If P > AC, shade above AC to P — supernormal profit. If P < AC, shade below P to AC — economic loss. The rectangle method is the most reliable way to show profit in exam diagrams.'
    },
    {
      id: 'profits_shutdown_3',
      template: 'mechanisms',
      title: 'The Shutdown Rule',
      intro: 'In the short run, a loss-making firm must decide whether to continue producing or shut down. The shutdown rule determines this.',
      steps: [
        { label: 'The key question', text: 'In the short run, fixed costs must be paid regardless of output. The choice is: produce at a loss, or shut down and still pay fixed costs (loss = FC). Which loss is smaller?' },
        { label: 'Produce if TR ≥ VC', text: 'If TR ≥ VC → at least covering variable costs → contribution to fixed costs → produce even at a loss. Equivalently: produce if P ≥ AVC.' },
        { label: 'Shutdown if TR < VC', text: 'If TR < VC → revenue doesn\'t even cover variable costs → loss = FC + (VC - TR) > FC → better to shut down and only lose FC. Equivalently: shutdown if P < AVC.' },
        { label: 'Long-run exit', text: 'In the long run, if P < AC (loss continues), the firm exits entirely — both fixed AND variable costs are avoidable in the long run.' }
      ],
      examEdge: 'The shutdown point on a diagram: P = AVC (minimum AVC). The MC curve above the minimum AVC point is the firm\'s short-run supply curve. Below this point, the firm shuts down. On a cost diagram: identify minimum AVC (where MC crosses AVC); if market price is below this, output = 0.'
    },
    {
      id: 'profits_shutdown_4',
      template: 'diagnose',
      title: 'Reading Profit and Loss on Diagrams',
      intro: 'Profit analysis is the universal ending point of any market structure diagram — practise reading these correctly.',
      rows: [
        { label: 'Situation', colA: 'P > AC at profit-max output', colB: 'AVC < P < AC at profit-max output' },
        { label: 'Profit/loss', colA: 'Supernormal profit. Rectangle: height = P − AC; width = Q*. Shade the rectangle between P and AC lines.', colB: 'Economic loss but continues producing. Loss = (AC − P) \xd7 Q*. TR covers VC; some contribution to FC. Shade the rectangle between AC and P.' },
        { label: 'Short-run decision', colA: 'Continue producing. Supernormal profit attracts entry (in competitive market) → drives down price toward AC.', colB: 'Continue producing in short run (P ≥ AVC). Exit in long run if loss persists. AVC < P means TR > VC → reducing loss below FC.' }
      ],
      footer: 'A third scenario: P < AVC. Loss = FC + (VC − TR) > FC → shut down immediately. Output = 0. Firm still pays FC but avoids making the variable cost loss worse.',
      examEdge: 'The most common diagram error in market structure questions: students draw the profit rectangle incorrectly by using the wrong AC level. Remember: AC at the profit-maximising output Q* is NOT the minimum of the AC curve — it is the AC curve\'s height at Q*. Always read off AC at Q*, not at AC\'s minimum point.'
    },
    {
      id: 'profits_shutdown_5',
      template: 'framing',
      title: 'Revenue Maximisation vs Profit Maximisation',
      body: 'Comparing the output and price implications of different objectives reveals how firm behaviour differs:<br><br><strong>Profit maximisation:</strong> MR = MC. The optimal output is where the last unit earns exactly as much as it costs.<br><br><strong>Revenue maximisation:</strong> MR = 0. Produce more than the profit-maximising firm. Lower price. Smaller profit margin. Maximum total revenue (area under demand curve from 0 to Q where MR = 0).<br><br><strong>Sales maximisation (with normal profit constraint):</strong> produce as much as possible while TR ≥ TC. Even more output than revenue-max; price may be just above AC.',
      keyTerms: [
        { term: 'Profit-max output', def: 'MR = MC. Lower output and higher price than revenue or sales max.' },
        { term: 'Revenue-max output', def: 'MR = 0. Higher output and lower price than profit max. Maximum TR.' },
        { term: 'Sales-max output', def: 'TR ≥ TC. Maximum output consistent with at least normal profit. Even lower price.' }
      ],
      examEdge: 'On a single diagram showing demand (AR), MR, and MC curves: profit-max Q1 (MR=MC intersection); revenue-max Q2 (MR=0); sales-max Q3 (AR=AC, if minimum profit constraint). Q1 < Q2 < Q3; P1 > P2 > P3. Draw these three points clearly — it\'s a high-marks diagram showing all objectives simultaneously.'
    },
    {
      id: 'profits_shutdown_6',
      template: 'framing',
      title: 'Contribution Analysis',
      body: '<strong>Contribution</strong> = TR − VC = revenue minus variable costs. It represents the amount "contributed" toward covering fixed costs and ultimately earning profit.<br><br><strong>Break-even point:</strong> output where TR = TC (total cost including FC). At break-even, contribution = FC exactly; zero economic profit.<br><br>Contribution analysis is practical for pricing decisions: a firm may accept a price below AC in the short run if the contribution is positive (P > AVC) — it reduces the loss below FC. Used in: pricing decisions for spare capacity orders, multi-product firms, and short-run pricing under competitive pressure.',
      keyTerms: [
        { term: 'Contribution', def: 'TR − VC = the revenue available after variable costs to cover fixed costs and profit.' },
        { term: 'Break-even output', def: 'Q where TR = TC. Contribution = FC. Zero economic profit.' },
        { term: 'Margin of safety', def: 'Current output minus break-even output — how much sales can fall before the firm makes a loss.' }
      ],
      examEdge: 'Contribution analysis explains predatory pricing strategy: a firm with large sunk fixed costs (airline, hotel) will accept prices well below AC as long as P > AVC — it is better to generate some contribution to cover fixed costs than to fly/run empty (zero contribution). This explains why airlines sell last-minute seats at huge discounts while maintaining high headline prices.'
    },
    {
      id: 'profits_shutdown_7',
      template: 'framing',
      title: 'Profit in Market Structures',
      body: 'How profit behaves across market structures depends on barriers to entry:<br><br><strong>Perfect competition (long run):</strong> supernormal profit → entry → supply rises → price falls → P = AC. Normal profit only in long run. Zero economic profit is the equilibrium.<br><br><strong>Monopoly (long run):</strong> barriers to entry prevent new competition → supernormal profit persists in long run. Monopoly profit = welfare transfer from consumers.<br><br><strong>Oligopoly:</strong> high barriers → supernormal profit possible but interdependence moderates outcomes. Collusion sustains monopoly-level profits; competition erodes them.<br><br><strong>Monopolistic competition (long run):</strong> differentiation creates short-run supernormal profit → entry → demand for each firm falls → P = AC (normal profit) but at less than MES.',
      keyTerms: [
        { term: 'Long-run competitive equilibrium', def: 'P = AC = MC. Normal profit. Maximum consumer surplus for that cost structure.' },
        { term: 'Supernormal profit persistence', def: 'Sustained in markets with barriers to entry — monopoly and oligopoly. Attracts but cannot be fully eroded by competition.' },
        { term: 'Entry and exit mechanism', def: 'The process by which competitive markets eliminate supernormal profit and economic losses in the long run.' }
      ],
      examEdge: 'The long-run profit outcome is the most important distinguishing feature between market structures: perfect competition → always normal profit long-run; monopoly → always supernormal; monopolistic competition → normal profit but at excess capacity. This should be stated explicitly at the end of any market structure essay — it summarises the welfare difference.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }
  ]
};
