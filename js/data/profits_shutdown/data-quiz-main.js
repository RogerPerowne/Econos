(function () {

  window.ECONOS_QUIZ = {
    id:       'profits_shutdown_main',
    topicId:  'profits_shutdown_main',
    title:    'Revenue, Profit &amp; Shutdown',
    subtitle: 'Theme 3.5 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering TR, AR, and MR relationships, normal and supernormal profit, economic loss, the shutdown rule, contribution analysis, and profit behaviour across market structures. Includes calculation, diagram reading, and extended evaluation formats.',
    shortNames: {
      'tr_ar_mr':    'TR, AR and MR',
      'profit':      'Normal and supernormal profit',
      'shutdown':    'Shutdown rule',
      'diagrams':    'Reading profit diagrams',
      'rev_vs_prof': 'Revenue vs profit max',
      'contribution':'Contribution analysis'
    },

    questions: [

      /* 1 — MCQ: AR = demand curve */
      { type: 'mcq',
        stem: 'For a firm with market power, which of the following correctly describes the relationship between the <strong>AR curve and the demand curve</strong>?',
        opts: [
          'They are identical &#8212; AR = TR/Q = Price, so the AR curve is the same as the demand curve',
          'The AR curve lies below the demand curve because the firm charges a price below demand',
          'The AR curve lies above the demand curve because firms always earn more revenue per unit than consumers are willing to pay',
          'They are unrelated &#8212; AR is a cost concept while the demand curve is a revenue concept'
        ],
        ans: 0,
        exp: '<strong>AR = TR / Q = (P &#215; Q) / Q = P</strong>. Since average revenue equals price, and the demand curve shows the price at each quantity, <strong>AR and the demand curve are the same curve</strong>. This is true for all firms regardless of market structure. For a price-taker (perfect competition), this is a horizontal line at market price. For a price-setter (monopoly), this is the firm\'s downward-sloping demand curve. The distinction matters when drawing MR: MR lies below the AR curve (demand) for any downward-sloping demand curve, because selling one more unit requires a lower price on all previous units.'
      },

      /* 2 — Calculation: profit rectangle */
      { type: 'calculation',
        context: 'A firm produces <strong>200 units</strong>. Market price = <strong>&#163;25</strong>. Average cost at this output = <strong>&#163;18</strong>.',
        working: [
          'TR = P × Q = 25 × 200 = £5,000',
          'TC = AC × Q = 18 × 200 = £3,600',
          'Profit = TR − TC = £5,000 − £3,600 = £1,400',
          'Alternatively: Profit = (P − AC) × Q = (25 − 18) × 200 = 7 × 200 = £1,400',
          'On a diagram: height of profit rectangle = P − AC = £7',
          'Width of profit rectangle = Q = 200',
          'Area = £1,400 = supernormal profit'
        ],
        stem: 'What is the firm\'s <strong>profit</strong> at this output, and how is it represented on a cost diagram?',
        opts: [
          { ped: '&#163;1,400 supernormal profit &#8212; a rectangle of height (P&#8722;AC) = &#163;7 and width Q = 200 units', typ: 'Profit = (P&#8722;AC) &#215; Q = 7 &#215; 200 = 1,400; P(25) > AC(18) so supernormal', rev: 'P > AC confirms supernormal; area of rectangle = height &#215; width' },
          { ped: '&#163;5,000 profit &#8212; total revenue equals total profit when the firm is operating efficiently', typ: 'Confused TR with profit; profit = TR &#8722; TC, not TR alone', rev: 'Profit = TR &#8722; TC; always subtract total cost from total revenue' },
          { ped: '&#163;200 profit &#8212; only the last unit contributes to profit so only Q units matter', typ: 'Confused MR-MC margin on the last unit with total profit over all units', rev: 'Profit is earned on ALL units, not just the last one' },
          { ped: '&#163;3,600 loss &#8212; total cost exceeds price so the firm is making a loss', typ: 'Compared TC to P (a single unit price) rather than to TR (total revenue)', rev: 'Compare TR (5,000) to TC (3,600): TR > TC means profit, not loss' }
        ],
        ans: 0,
        exp: '<strong>Profit = (P &#8722; AC) &#215; Q = (25 &#8722; 18) &#215; 200 = &#163;1,400 supernormal profit</strong>. Since P (&#163;25) &gt; AC (&#163;18), the firm earns supernormal profit. On a diagram, this is represented as a <strong>rectangle</strong> with height (P &#8722; AC) and width Q*, shaded between the price line and the AC curve from zero to Q*. This rectangle method is the standard way to read profit or loss off any market structure diagram &#8212; always use the AC at the profit-maximising output Q*, not at the minimum of AC.'
      },

      /* 3 — Para fill: shutdown rule */
      { type: 'para_fill',
        stem: 'Complete the paragraph explaining the shutdown decision.',
        anchor: 'The shutdown rule determines whether a loss-making firm should continue producing in the short run.',
        para: 'In the short run, a firm should continue producing if [1] revenue exceeds [2] costs, because doing so generates a positive [3] toward fixed costs &#8212; reducing the loss below what it would be if the firm shut down and still paid [4] costs. The firm should shut down immediately if price falls below [5] variable cost, because at that point producing makes the loss [6] than shutting down.',
        blanks: [
          { id: 1, opts: ['total', 'marginal', 'average', 'fixed'], ans: 0 },
          { id: 2, opts: ['variable', 'fixed', 'total', 'marginal'], ans: 0 },
          { id: 3, opts: ['contribution', 'profit', 'dividend', 'subsidy'], ans: 0 },
          { id: 4, opts: ['fixed', 'variable', 'sunk', 'marginal'], ans: 0 },
          { id: 5, opts: ['average', 'marginal', 'total', 'minimum'], ans: 0 },
          { id: 6, opts: ['worse', 'better', 'identical', 'irrelevant'], ans: 0 }
        ],
        exp: '(1) <strong>Total</strong>: the key comparison is TR vs VC (total revenue vs total variable cost). (2) <strong>Variable</strong>: fixed costs are irrelevant to the short-run shutdown decision because they must be paid regardless. (3) <strong>Contribution</strong>: TR &#8722; VC = contribution toward fixed costs and profit. Positive contribution reduces the loss. (4) <strong>Fixed</strong>: if the firm shuts down, it still pays fixed costs &#8212; the loss equals FC. If it produces with positive contribution, the loss is less than FC. (5) <strong>Average</strong>: shutdown if P &lt; AVC (minimum average variable cost &#8212; the shutdown point on the diagram). (6) <strong>Worse</strong>: below AVC, TR &lt; VC &#8212; producing adds variable cost losses on top of the fixed cost loss, making total loss larger than simply shutting down.'
      },

      /* 4 — Elastic sort: profit / loss / shutdown scenarios */
      { type: 'elastic_sort',
        stem: 'Classify each situation as <strong>supernormal profit</strong>, <strong>normal profit</strong>, <strong>economic loss (continue)</strong>, or <strong>shutdown</strong>.',
        categories: ['sn', 'nm', 'ls', 'sd'],
        categoryLabels: ['Supernormal profit', 'Normal profit', 'Economic loss &#8212; continue', 'Shutdown'],
        goods: [
          { icon: '&#128200;', label: 'P = &#163;30; AC = &#163;20; AVC = &#163;15 at profit-max output', note: '', ans: 'sn' },
          { icon: '&#9881;', label: 'P = &#163;20; AC = &#163;20; AVC = &#163;14 at profit-max output', note: '', ans: 'nm' },
          { icon: '&#128201;', label: 'P = &#163;16; AC = &#163;20; AVC = &#163;12 at profit-max output', note: '', ans: 'ls' },
          { icon: '&#128680;', label: 'P = &#163;10; AC = &#163;20; AVC = &#163;14 at profit-max output', note: '', ans: 'ls' },
          { icon: '&#9940;', label: 'P = &#163;8; AC = &#163;20; AVC = &#163;12 at profit-max output', note: '', ans: 'sd' },
          { icon: '&#128176;', label: 'P = &#163;25; AC = &#163;18; AVC = &#163;11 at profit-max output', note: '', ans: 'sn' }
        ],
        exp: '<strong>Supernormal profit</strong>: P &gt; AC (P=30&gt;AC=20; P=25&gt;AC=18). <strong>Normal profit</strong>: P = AC exactly (P=20=AC=20). <strong>Economic loss &#8212; continue</strong>: AC &gt; P &ge; AVC (P=16: AVC=12&le;P&lt;AC=20 &#8594; TR covers VC, positive contribution; P=10: AVC=14&gt;P?&#8230; wait: AVC=14&gt;P=10 &#8594; actually shutdown. Re-check: P=16, AVC=12: P&gt;AVC &#8594; continue. P=10, AVC=14: P&lt;AVC &#8594; shutdown). <strong>Shutdown</strong>: P &lt; AVC (P=8&lt;AVC=12; P=10&lt;AVC=14). The rule: always compare P to AVC first for the shutdown decision, then compare P to AC to determine profit/loss.'
      },

      /* 5 — Diagnostic pair: shutdown rule application */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"A firm\'s price falls below average cost. Should it shut down immediately?"</em> Which student gives the stronger answer?',
        students: [
          { name: 'Freya', badge: 'Candidate A',
            answer: 'Not necessarily. The shutdown decision depends on whether price has fallen below <strong>average variable cost (AVC)</strong>, not merely below average cost. In the short run, fixed costs must be paid regardless of output &#8212; they are sunk. If P &ge; AVC, the firm generates a positive <em>contribution</em> (TR &#8722; VC &gt; 0) toward fixed costs, so producing reduces the loss below what it would be if the firm shut down (loss = FC). For example, if FC = &#163;10,000, VC = &#163;6,000, and TR = &#163;8,000: contribution = &#163;2,000; loss = FC &#8722; contribution = &#163;8,000 &lt; &#163;10,000 (shutdown loss). Shutting down would increase the loss by &#163;2,000. Only if P &lt; AVC (TR &lt; VC) should the firm shut down immediately, because at that point producing actually <em>increases</em> the loss beyond FC. In the <strong>long run</strong>, if P &lt; AC persists, the firm should exit &#8212; since all costs (including FC) are avoidable in the long run. This is why airlines fill planes at heavily discounted last-minute prices: as long as P &gt; AVC (marginal fuel and service costs), any price generates positive contribution.'
          },
          { name: 'Ethan', badge: 'Candidate B',
            answer: 'A firm should not necessarily shut down if price falls below average cost. This is because in the short run, the firm still has to pay its fixed costs whether it produces or not. As long as the firm can cover its variable costs, it is better off continuing to produce because it will at least be contributing something to the fixed costs. If the firm shuts down, it loses all its revenue but still has to pay its fixed costs, so it makes a bigger loss. Only if the price falls so low that it cannot even cover its variable costs should the firm shut down in the short run. In the long run, if the price stays below average cost, the firm should exit the industry because it cannot cover all its costs and is making a persistent loss.'
          }
        ],
        ans: 0,
        exp: '<strong>Freya</strong> gives the stronger answer. She precisely identifies the relevant threshold (P = AVC, not P = AC), introduces the contribution concept with a numerical example that makes the logic concrete, and correctly distinguishes the short-run and long-run decisions. The airline example demonstrates real-world application. Ethan covers the same logic correctly but without a specific numerical example, the contribution concept by name, or the AVC threshold terminology. Freya accesses Level 4; Ethan Level 3.'
      },

      /* 6 — MCQ: MR under monopoly */
      { type: 'mcq',
        stem: 'For a monopolist facing a <strong>linear downward-sloping demand curve</strong>, the Marginal Revenue (MR) curve:',
        opts: [
          'Has the same vertical intercept as the demand curve but falls twice as steeply',
          'Is the same as the demand curve because the monopolist sets price equal to marginal revenue',
          'Lies above the demand curve because monopoly power enables the firm to earn premium revenues',
          'Is horizontal at the profit-maximising price because the firm sets output to match demand'
        ],
        ans: 0,
        exp: 'For a linear demand curve P = a &#8722; bQ, Total Revenue TR = PQ = aQ &#8722; bQ&#178;. Differentiating: MR = a &#8722; 2bQ. This has the <strong>same intercept (a) as the demand curve</strong> but the coefficient on Q is 2b instead of b &#8212; <strong>twice the slope</strong>. Geometrically, the MR curve starts at the same point on the price axis as the demand curve but falls twice as fast. When MR = 0: Q = a/(2b), which is exactly half the quantity at which demand hits the quantity axis. This geometric property &#8212; MR bisects the horizontal distance between the demand curve and the price axis &#8212; is essential for drawing monopoly diagrams correctly.'
      },

      /* 7 — Multi-select: profit across market structures */
      { type: 'multi_select',
        stem: 'Which of the following statements about profit in different market structures are <strong>correct</strong> in the <strong>long run</strong>?',
        opts: [
          'Perfect competition: firms earn only normal profit because supernormal profits attract entry until P = AC',
          'Monopoly: supernormal profit can persist because barriers to entry prevent the competitive erosion of profits',
          'Monopolistic competition: firms earn normal profit in the long run but at an output below minimum AC (excess capacity)',
          'Oligopoly: supernormal profit is always eliminated in the long run because of the kinked demand curve',
          'Perfect competition: firms earn supernormal profit in the long run due to productive efficiency',
          'All market structures converge to normal profit in the long run given enough time'
        ],
        correct: [0, 1, 2],
        exp: 'Options A, B, and C are correct. <strong>Perfect competition</strong>: free entry erodes supernormal profit; long-run equilibrium at P = AC (normal profit). <strong>Monopoly</strong>: high barriers (legal, technical, scale) prevent entry; supernormal profit persists in the long run. <strong>Monopolistic competition</strong>: low barriers allow entry; each entrant takes customers from existing firms, reducing demand until P = AC, but each firm operates at less than MES (excess capacity theorem). Option D is incorrect: the kinked demand curve explains price rigidity in oligopoly but does not eliminate supernormal profit &#8212; barriers to entry allow oligopolists to sustain above-normal profits. Option E is wrong: perfect competition achieves productive efficiency but normal profit only. Option F is incorrect: monopoly can sustain supernormal profit indefinitely.'
      },

      /* 8 — Odd one out: revenue concepts */
      { type: 'odd_one_out',
        stem: 'Three of these are true of a <strong>perfectly competitive firm\'s revenue</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#128200;', label: 'MR = AR = P: marginal, average, and market price are all equal', note: '' },
          { icon: '&#128251;', label: 'The demand curve facing the individual firm is perfectly elastic (horizontal)', note: '' },
          { icon: '&#128202;', label: 'TR rises then falls as output increases, because MR eventually becomes negative', note: '' },
          { icon: '&#127775;', label: 'The firm can sell any quantity at the market price without affecting that price', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is that <strong>TR rises then falls as output increases</strong>. This describes a monopolist\'s TR curve &#8212; for a monopolist, MR eventually becomes negative (when the demand curve is elastic), causing TR to fall. For a <em>perfectly competitive firm</em>, demand is perfectly elastic at the market price: MR = P at all output levels. Since MR is always positive (and constant), TR <strong>rises continuously</strong> with output (TR = P &#215; Q, linear relationship). The other three statements are all correct for a competitive firm: MR = AR = P; horizontal demand; and the firm is a price-taker that can sell any quantity at market price.'
      },

      /* 9 — Data table: objectives and profit outcomes */
      { type: 'data_table',
        stem: 'A firm faces the following revenue and cost data at different output levels.',
        headers: ['Output (units)', 'Price (&#163;)', 'TR (&#163;)', 'TC (&#163;)', 'MC (&#163;)', 'MR (&#163;)'],
        rows: [
          ['100', '50', '5,000', '4,200', '&#8212;', '&#8212;'],
          ['200', '46', '9,200', '7,800', '36', '42'],
          ['300', '42', '12,600', '11,200', '34', '34'],
          ['400', '38', '15,200', '15,600', '44', '26'],
          ['500', '34', '17,000', '21,000', '54', '18']
        ],
        question: 'At which output level does the firm maximise <strong>profit</strong>?',
        opts: [
          'Q = 300, where MR (&#163;34) = MC (&#163;34); profit = &#163;12,600 &#8722; &#163;11,200 = &#163;1,400',
          'Q = 500, where total revenue is highest at &#163;17,000',
          'Q = 200, where price is &#163;46 and total revenue per unit is largest relative to price',
          'Q = 400, because this is closest to where marginal cost equals average cost'
        ],
        ans: 0,
        exp: 'Profit at each output: Q=100: &#163;800; Q=200: &#163;1,400; Q=300: &#163;1,400; Q=400: &#163;-400 (loss); Q=500: &#163;-4,000 (loss). <strong>Q = 300 maximises profit</strong> (&#163;1,400), confirmed by MR = MC = &#163;34 at this output &#8212; the profit-maximising condition. Beyond Q = 300, MC (44, 54) exceeds MR (26, 18), meaning each additional unit reduces profit. The table illustrates why producing at maximum TR (Q=500, TR=&#163;17,000) is suboptimal: costs rise faster than revenue, turning profit negative. Revenue maximisation (where MR approaches 0) produces near Q=500; profit maximisation (MR=MC) occurs at Q=300.'
      },

      /* 10 — MCQ: contribution analysis */
      { type: 'mcq',
        stem: 'A hotel has fixed costs of <strong>&#163;50,000</strong> per month and variable costs of <strong>&#163;30</strong> per room per night. If the hotel charges <strong>&#163;45</strong> per room per night on a half-price promotional rate, should it accept this business (assuming spare capacity)?',
        opts: [
          'Yes &#8212; price (&#163;45) exceeds AVC (&#163;30), so each room generates a positive contribution of &#163;15 toward fixed costs',
          'No &#8212; the promotional price (&#163;45) is likely below average cost (including fixed costs), so accepting it makes a loss',
          'Yes &#8212; but only if the promotional price covers total average cost, including a share of the &#163;50,000 fixed costs',
          'No &#8212; any price below the normal rate is a form of price discrimination and is illegal'
        ],
        ans: 0,
        exp: 'The correct decision criterion when the hotel has <strong>spare capacity</strong> is whether price exceeds <em>average variable cost</em>, not average total cost. At &#163;45 per room with AVC of &#163;30: <strong>contribution = &#163;15 per room</strong>. Each room sold at &#163;45 adds &#163;15 to cover fixed costs &#8212; it reduces the overall loss. The hotel must pay the &#163;50,000 fixed costs regardless of occupancy. An empty room earns zero contribution; a &#163;45 room earns &#163;15. This is why hotels (and airlines, concert venues) sell last-minute at deep discounts: as long as P &gt; AVC, positive contribution is generated. This is contribution analysis in action, directly linked to the shutdown rule: produce if P &ge; AVC.'
      }

    ]
  };

})();
