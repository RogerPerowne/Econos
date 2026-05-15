(function () {

  window.ECONOS_QUIZ = {
    id:       'perfect_competition_main',
    topicId:  'perfect_competition_main',
    title:    'Perfect Competition',
    subtitle: 'Theme 3.7 · Edexcel A-Level',
    sessionLabel: 'Session 1 of 3: Learn',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the five assumptions, price-taking behaviour, short-run and long-run equilibrium, the long-run adjustment mechanism, efficiency properties, dynamic efficiency limitations, and the realism of the model. Includes diagram interpretation, chain reasoning, and extended evaluation formats.',
    shortNames: {
      'assumptions':  'Five assumptions',
      'price_taker':  'Price-taking firm',
      'short_run':    'Short-run equilibrium',
      'long_run':     'Long-run adjustment',
      'efficiency':   'Efficiency properties',
      'limitations':  'Model limitations',
      'dynamic':      'Dynamic efficiency paradox'
    },

    questions: [

      /* 1 — Multi-select: five assumptions */
      { type: 'multi_select',
        stem: 'Which of the following are among the <strong>five standard assumptions</strong> of perfect competition?',
        opts: [
          'Many buyers and sellers, each too small to influence market price',
          'Homogeneous (identical) products sold by all firms in the industry',
          'Perfect information: all buyers and sellers know all prices instantly',
          'No barriers to entry or exit &#8212; firms can freely enter and leave the market',
          'Firms can differentiate their products through advertising to attract loyal customers',
          'A central regulatory authority sets the market price to prevent excess profit'
        ],
        correct: [0, 1, 2, 3],
        exp: 'The five standard assumptions of perfect competition are: (1) <strong>Many buyers and sellers</strong> &#8212; none large enough to affect price. (2) <strong>Homogeneous product</strong> &#8212; no differentiation, buyers choose on price alone. (3) <strong>Perfect information</strong> &#8212; no search costs; all prices known. (4) <strong>No barriers to entry/exit</strong> &#8212; supernormal profits attract entry until P = AC. (5) <strong>Factor mobility</strong> &#8212; labour and capital respond to price signals. Option E contradicts the homogeneous product assumption: advertising implies differentiation. Option F describes regulation, which is absent in a perfectly competitive market &#8212; price is set by the impersonal market mechanism.'
      },

      /* 2 — MCQ: AR = MR = P */
      { type: 'mcq',
        stem: 'For a firm in perfect competition, which of the following correctly describes the relationship between AR, MR, and Price?',
        opts: [
          'AR = MR = P: the firm faces a horizontal demand curve at the market price, so each unit sold adds exactly P to both average and total revenue',
          'MR < AR = P: the firm must lower price to sell more, so MR falls below P as output rises',
          'AR > MR = P: average revenue exceeds price because the firm earns extra surplus on infra-marginal units',
          'AR = P > MR: average revenue equals price but marginal revenue is below average revenue because of diminishing returns'
        ],
        ans: 0,
        exp: 'In perfect competition, the firm faces a <strong>perfectly elastic demand curve</strong> at the market price P. Since P is constant regardless of quantity: TR = P &#215; Q (linear in Q). Therefore AR = TR/Q = P (constant), and MR = &#916;TR/&#916;Q = P (constant). This gives <strong>AR = MR = P</strong> &#8212; all three are equal and constant. Option B describes a monopolist facing a downward-sloping demand curve: to sell more, it must lower price, making MR &lt; AR (MR &lt; P). This distinction is fundamental: the shape of the demand curve facing the firm determines the AR-MR relationship, which in turn determines the profit-maximising output rule (P = MC for competitive firms; MR = MC for monopoly).'
      },

      /* 3 — Para fill: long-run adjustment from supernormal profit */
      { type: 'para_fill',
        stem: 'Complete the paragraph describing the long-run adjustment process in perfect competition.',
        anchor: 'In the short run, perfectly competitive firms can earn supernormal profit.',
        para: 'When firms in a competitive market earn supernormal profit (P &gt; AC), this acts as a [1] signal attracting new firms into the industry. Because there are no [2] to entry, new firms can enter freely. As they do, market [3] increases, which causes the market [4] to fall. Each firm\'s [5] demand curve shifts [6] to the new lower market price. This process continues until price falls to [7] cost, at which point firms earn only [8] profit and there is no further incentive to enter.',
        blanks: [
          { id: 1, opts: ['profit', 'wage', 'cost', 'loss'], ans: 0 },
          { id: 2, opts: ['barriers', 'profits', 'incentives', 'competitors'], ans: 0 },
          { id: 3, opts: ['supply', 'demand', 'cost', 'revenue'], ans: 0 },
          { id: 4, opts: ['price', 'cost', 'output', 'profit'], ans: 0 },
          { id: 5, opts: ['horizontal', 'downward-sloping', 'vertical', 'upward-sloping'], ans: 0 },
          { id: 6, opts: ['down', 'up', 'right', 'left'], ans: 0 },
          { id: 7, opts: ['average', 'marginal', 'variable', 'fixed'], ans: 0 },
          { id: 8, opts: ['normal', 'supernormal', 'zero', 'minimum'], ans: 0 }
        ],
        exp: '(1) <strong>Profit</strong>: supernormal profit is the signal that attracts new entrants. (2) <strong>Barriers</strong>: absence of barriers to entry is the assumption that makes the adjustment work. (3) <strong>Supply</strong>: new entrants add their output, shifting the market supply curve right. (4) <strong>Price</strong>: increased supply drives the market price down. (5) <strong>Horizontal</strong>: each perfectly competitive firm faces a horizontal (perfectly elastic) demand curve at the prevailing market price. (6) <strong>Down</strong>: the horizontal demand line for each firm shifts down as the market price falls. (7) <strong>Average</strong>: price falls to average cost (P = AC). (8) <strong>Normal</strong>: P = AC means zero economic profit = normal profit.'
      },

      /* 4 — Diagram interpretation: two-diagram approach */
      { type: 'mcq',
        stem: 'In the long-run equilibrium of a perfectly competitive market, which of the following correctly describes the position on the <strong>individual firm\'s diagram</strong>?',
        opts: [
          'The horizontal demand/MR line at market price P* is tangent to the bottom of the AC curve, where P* = MC = min AC simultaneously',
          'The firm produces where demand intersects the AC curve from above, showing supernormal profit being eroded',
          'The firm produces at the minimum of the MC curve, where marginal cost is lowest and productive efficiency is first achieved',
          'The firm\'s demand curve becomes downward-sloping in the long run as it gains market power through reputation'
        ],
        ans: 0,
        exp: 'At <strong>long-run perfectly competitive equilibrium</strong>, the firm\'s horizontal demand line (at market price P*) is exactly tangent to the bottom of the U-shaped AC curve. At this tangency point: P* = MC (profit-maximising condition: the firm produces where MR = MC = P) AND P* = min AC (because the tangency occurs at AC\'s minimum). This single point simultaneously satisfies:<br>&#8226; MR = MC (profit maximisation)<br>&#8226; P = MC (allocative efficiency)<br>&#8226; P = min AC (productive efficiency)<br>&#8226; P = AC (normal profit, zero economic profit)<br>This is the "golden intersection" of long-run competitive equilibrium. Option C is incorrect: the firm produces at the minimum of AC (where MC = AC), not at the minimum of MC.'
      },

      /* 5 — Elastic sort: short-run situations */
      { type: 'elastic_sort',
        stem: 'Classify each description of a perfectly competitive firm\'s short-run situation.',
        categories: ['sp', 'np', 'el', 'sd'],
        categoryLabels: ['Supernormal profit', 'Normal profit', 'Economic loss (continue)', 'Shutdown'],
        goods: [
          { icon: '&#128200;', label: 'Market price of &#163;40 lies above the firm\'s AC of &#163;32 at profit-max output', note: '', ans: 'sp' },
          { icon: '&#9881;', label: 'Market price of &#163;28 exactly equals the firm\'s AC of &#163;28 at profit-max output', note: '', ans: 'np' },
          { icon: '&#128201;', label: 'Market price of &#163;22 is below AC (&#163;30) but above AVC (&#163;18) at profit-max output', note: '', ans: 'el' },
          { icon: '&#9940;', label: 'Market price of &#163;14 is below both AC (&#163;30) and AVC (&#163;17) at profit-max output', note: '', ans: 'sd' },
          { icon: '&#128176;', label: 'Market price of &#163;50 is far above AC of &#163;35 &#8212; short-run boom conditions', note: '', ans: 'sp' },
          { icon: '&#128680;', label: 'Market price of &#163;10 falls below minimum AVC of &#163;12 &#8212; firm cannot cover variable costs', note: '', ans: 'sd' }
        ],
        exp: '<strong>Supernormal profit</strong>: P &gt; AC (P=40&gt;AC=32; P=50&gt;AC=35). <strong>Normal profit</strong>: P = AC (P=28=AC=28). <strong>Economic loss &#8212; continue</strong>: AVC &le; P &lt; AC (P=22: AVC=18&le;22&lt;AC=30 &#8594; positive contribution; continue). <strong>Shutdown</strong>: P &lt; AVC (P=14&lt;AVC=17; P=10&lt;AVC=12). In both shutdown cases, TR &lt; VC &#8212; producing increases the loss beyond the fixed cost that the firm would pay anyway. The firm minimises losses by outputting zero and bearing only the fixed cost.'
      },

      /* 6 — Diagnostic pair: long-run adjustment from loss */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Using a diagram, explain the long-run adjustment process in perfect competition when firms are making economic losses."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Niamh', badge: 'Candidate A',
            answer: 'When market price falls below average cost in perfect competition, firms make economic losses (P &lt; AC). Because there are no barriers to exit, loss-making firms leave the industry. This can be shown on two diagrams: the <em>market diagram</em> (D and S curves) shows the market supply curve shifting <strong>leftward</strong> as firms exit &#8212; fewer firms in the industry reduces total supply. On the <em>firm diagram</em>, the market price therefore rises; the firm\'s horizontal demand line shifts <strong>upward</strong> as the market price rises. This process continues until price rises back to average cost. At long-run equilibrium: P = AC, firms earn normal profit (zero economic profit), losses have been eliminated, and there is no further incentive to exit. The equilibrium is simultaneously at P = MC = min AC &#8212; both allocative and productive efficiency are achieved. A critical point is that this mechanism only works because of the <em>assumption</em> of no exit barriers &#8212; in real markets with sunk costs, exit is slower and losses may persist longer.'
          },
          { name: 'Ryan', badge: 'Candidate B',
            answer: 'When firms in perfect competition make losses, they will leave the industry because they are not making enough profit to stay in business. As firms exit, the supply in the market decreases, which causes prices to rise. When prices rise, the remaining firms start to make normal profit again and the losses stop. This continues until all firms are making normal profit and the market is in equilibrium. I would draw a diagram showing the supply curve shifting left and the price rising. The firm diagram would show the price line moving up from below AC to exactly equal to AC, where the firm makes normal profit. This is the long-run equilibrium.'
          }
        ],
        ans: 0,
        exp: '<strong>Niamh</strong> gives the stronger answer. She explicitly references the two-diagram approach (market and firm), names the direction of the supply shift (leftward) and the demand line shift (upward), and correctly identifies the mechanism (exit reduces market supply, raising price). She also states the long-run equilibrium conditions precisely (P = AC = MC = min AC), connects to both efficiency types, and critically notes that the mechanism relies on the no-barriers-to-exit assumption &#8212; raising a genuine limitation. Ryan describes the correct process but lacks diagram precision (no direction of shifts named), does not state the equilibrium conditions formally, and omits the efficiency conclusion. Niamh accesses Level 4; Ryan Level 2&#8211;3.'
      },

      /* 7 — MCQ: perfect competition and dynamic efficiency */
      { type: 'mcq',
        stem: 'Schumpeter\'s critique of perfect competition as a market structure is that it:',
        opts: [
          'Achieves static efficiency at the cost of dynamic efficiency &#8212; zero long-run profit removes the incentive and means to invest in innovation',
          'Fails to achieve allocative efficiency because price-taking firms cannot set P = MC correctly',
          'Creates excessive monopoly power in the long run because the most efficient firms eliminate all rivals',
          'Is dynamically efficient but statically inefficient because competitive pressure drives constant innovation'
        ],
        ans: 0,
        exp: '<strong>Schumpeter\'s critique</strong> is that perfect competition is dynamically inferior: (1) zero long-run supernormal profit means firms have no retained earnings for R&D; (2) perfect information means any innovation is instantly imitated &#8212; no first-mover advantage; (3) price-taking means no pricing power to raise prices to fund investment. Schumpeter argued that "creative destruction" &#8212; the process of long-run growth and technological progress &#8212; requires firms with market power that can earn and invest supernormal profit. Option B is incorrect: price-taking firms do achieve P = MC (allocative efficiency). Option C is incorrect: perfect competition drives price toward AC, not toward monopoly. Option D reverses the critique.'
      },

      /* 8 — Odd one out: real-world approximations */
      { type: 'odd_one_out',
        stem: 'Three of these markets most closely approximate <strong>perfect competition</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#127807;', label: 'World wheat futures market: standardised contracts, many traders, transparent prices, no single dominant trader', note: '' },
          { icon: '&#128182;', label: 'Foreign exchange (forex) market: identical currency units, millions of transactions daily, instant price information', note: '' },
          { icon: '&#128663;', label: 'UK new car market: branded models, significant differentiation, large manufacturers with market power', note: '' },
          { icon: '&#9749;', label: 'Fresh produce (e.g. tomatoes) at a large wholesale market: many growers, similar product, buyers can compare prices easily', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is the <strong>UK new car market</strong>. This market violates multiple perfect competition assumptions: products are highly differentiated (brands, models, specifications); there are a small number of large manufacturers with market power (oligopoly); there are significant barriers to entry (capital, regulation, dealer networks); and information is imperfect (complex pricing, finance packages). Wheat futures, forex, and wholesale produce markets all approximate competitive conditions: standardised products, many participants, transparent prices, and easy arbitrage. These real-world approximations are why commodity and financial markets are studied in relation to competitive theory.'
      },

      /* 9 — Data table: long-run equilibrium evidence */
      { type: 'data_table',
        stem: 'The table shows market data for a competitive industry over a 5-year period following a demand increase.',
        headers: ['Year', 'Market price (&#163;)', 'Number of firms', 'Firm average cost (&#163;)', 'Firm economic profit (&#163;000)'],
        rows: [
          ['Year 1', '25', '100', '20', '500'],
          ['Year 2', '23', '115', '20', '300'],
          ['Year 3', '21', '130', '20', '100'],
          ['Year 4', '20', '140', '20', '0'],
          ['Year 5', '20', '140', '20', '0']
        ],
        question: 'Which interpretation is most consistent with the data?',
        opts: [
          'The data show the long-run competitive adjustment: supernormal profit attracted entry, supply increased, price fell to average cost, and normal profit was reached at long-run equilibrium',
          'The data show that competition is failing &#8212; prices are falling continuously and firms are being harmed by entry',
          'The data prove that the industry is a natural monopoly because average cost is constant at &#163;20 regardless of the number of firms',
          'The data show that Year 5 is the inefficient outcome because firms earn zero economic profit, which discourages investment'
        ],
        ans: 0,
        exp: 'The data trace the textbook <strong>long-run competitive adjustment</strong>. Year 1: supernormal profit (P=25 &gt; AC=20) &#8594; Year 2&#8211;3: entry increases number of firms from 100 to 130, market supply rises, price falls &#8594; Year 4&#8211;5: long-run equilibrium at P = AC = &#163;20, zero economic profit (normal profit), stable at 140 firms. No further incentive to enter or exit. This is the efficient long-run outcome: P = AC (normal profit) and &#8212; since this is a constant cost industry (AC constant at &#163;20) &#8212; P = MC = min AC (both efficiency conditions met). Option D reflects the "zero economic profit = bad" misconception: zero economic profit means normal profit, which means all costs including opportunity cost are covered &#8212; this is the efficient outcome, not a failure.'
      },

      /* 10 — Chain: demand increase in competitive market */
      { type: 'chain',
        stem: 'Demand for a competitively produced good increases permanently. Place the events in the correct order from the demand shift to the new long-run equilibrium.',
        items: [
          { label: 'New firms enter, attracted by the supernormal profit signal (no barriers to entry)', note: '' },
          { label: 'Short-run market price rises above average cost of existing firms &#8212; supernormal profit emerges', note: '' },
          { label: 'Long-run equilibrium: price returns to min AC, normal profit, more firms than before', note: '' },
          { label: 'Demand increases: D curve shifts right in the market diagram', note: '' },
          { label: 'Market supply increases as new firms add output: S curve shifts right', note: '' },
          { label: 'Market price falls back toward average cost as supply expands', note: '' }
        ],
        correctOrder: [3, 1, 0, 4, 5, 2],
        exp: '<strong>The correct sequence:</strong><br>1. Demand curve shifts right (demand increases).<br>2. Market price rises above AC &#8212; existing firms earn supernormal profit.<br>3. New firms enter (no barriers).<br>4. Market supply increases (S shifts right).<br>5. Price falls back toward AC.<br>6. Long-run equilibrium: P = AC (normal profit), more firms in industry than before.<br><br>This is the <strong>long-run supply response</strong> in a competitive market. In a constant-cost industry (input prices unaffected by industry scale), the long-run supply curve is horizontal at min AC &#8212; price returns to its initial level but with higher industry output (more firms). This shows why competitive markets are self-correcting: profit signals attract entry, which restores allocative efficiency through price adjustment.'
      }

    ]
  };

})();
