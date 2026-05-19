(function () {

  window.ECONOS_QUIZ = {
    id:       'short_run_costs_main',
    topicId:  'short_run_costs_main',
    title:    'Short-Run Costs',
    subtitle: 'Theme 3.3 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering fixed and variable costs, total and marginal cost relationships, the law of diminishing marginal returns, the U-shaped average cost curve, and the link between MC and firm supply. Includes calculation, diagram interpretation, and extended evaluation questions.',
    shortNames: {
      'fixed_var':   'Fixed and variable costs',
      'tc_ac_mc':    'TC, AC and MC',
      'dmr':         'Diminishing marginal returns',
      'u_shape':     'U-shaped AC curve',
      'mc_supply':   'MC and supply',
      'econ_cost':   'Economic costs'
    },

    questions: [

      /* 1 — MCQ: fixed vs variable */
      { type: 'mcq',
        stem: 'Which of the following is most likely to be a <strong>fixed cost</strong> for a manufacturing firm in the short run?',
        opts: [
          'Annual rent on the factory building',
          'Expenditure on raw materials used in production',
          'Wages paid to hourly production workers',
          'Electricity used to power production machinery'
        ],
        ans: 0,
        exp: '<strong>Rent</strong> is a fixed cost: the firm must pay it regardless of how many units it produces (even if output = 0). Raw materials, hourly wages, and production electricity all vary directly with output &#8212; they are variable costs. In the short run, at least one factor (usually capital &#8212; the factory itself) is fixed. The rent on that capital is therefore unavoidable in the short run and must be paid even if the firm temporarily shuts down production. This distinction between fixed and variable costs is critical for the shutdown rule: in the short run, only variable costs can be saved by reducing output.'
      },

      /* 2 — Calculation: TC, AC, MC */
      { type: 'calculation',
        context: 'A firm has fixed costs of <strong>&#163;200</strong>. Its variable costs at different output levels are: Q=1: &#163;80; Q=2: &#163;150; Q=3: &#163;210; Q=4: &#163;290; Q=5: &#163;400.',
        working: [
          'TC = FC + VC',
          'Q=1: TC = 200+80 = 280; AC = 280/1 = 280; MC = 80',
          'Q=2: TC = 200+150 = 350; AC = 350/2 = 175; MC = 150-80 = 70',
          'Q=3: TC = 200+210 = 410; AC = 410/3 = 136.7; MC = 210-150 = 60',
          'Q=4: TC = 200+290 = 490; AC = 490/4 = 122.5; MC = 290-210 = 80',
          'Q=5: TC = 200+400 = 600; AC = 600/5 = 120; MC = 400-290 = 110',
          'AC falls from Q=1 to Q=5 but MC is falling up to Q=3 then rising',
          'At Q=5 AC=120 is still falling; MC=110 is rising and approaching AC'
        ],
        stem: 'Using the data, which statement about MC and AC is correct?',
        opts: [
          { ped: 'MC falls from Q=1 to Q=3 then rises, consistent with initially increasing then diminishing marginal returns', typ: 'MC: 80, 70, 60 (falling), 80, 110 (rising) &#8212; turning point at Q=3', rev: 'Compare successive VC differences to see MC direction' },
          { ped: 'AC rises continuously from Q=1 to Q=5 because variable costs are always increasing', typ: 'Confused rising TC with rising AC; AC = TC/Q which can fall even as TC rises', rev: 'AC = 280, 175, 136.7, 122.5, 120 &#8212; falling throughout' },
          { ped: 'MC equals AC at Q=3, so Q=3 is where AC is at its minimum', typ: 'MC (60) does not equal AC (136.7) at Q=3; minimum AC requires MC = AC', rev: 'MC = AC at the minimum of AC; MC is well below AC at Q=3' },
          { ped: 'AC and MC are equal at all output levels because both are derived from TC', typ: 'MC = change in TC; AC = level of TC/Q; they only coincide at the minimum of AC', rev: 'MC and AC are derived differently from TC; they are only equal at AC minimum' }
        ],
        ans: 0,
        exp: 'MC values: Q=1&#8594;80, Q=2&#8594;70, Q=3&#8594;60, Q=4&#8594;80, Q=5&#8594;110. MC <strong>falls up to Q=3 then rises</strong>, consistent with first increasing then diminishing marginal returns. AC values: 280, 175, 136.7, 122.5, 120 &#8212; falling throughout the data range because fixed costs are still being spread and MC is still below AC (MC &lt; AC pulls AC down). AC will eventually reach a minimum and rise once MC exceeds it. At Q=5, MC (110) is approaching but still below AC (120), so AC is still falling slightly. The minimum AC lies beyond Q=5 in this data set.'
      },

      /* 3 — Para fill: law of diminishing returns */
      { type: 'para_fill',
        stem: 'Complete the paragraph explaining the law of diminishing marginal returns.',
        anchor: 'The law of diminishing marginal returns is a short-run concept applying to variable inputs.',
        para: 'As successive units of a [1] factor are added to a [2] factor, beyond some point the marginal [3] of the variable factor will fall. This is because the fixed factor becomes increasingly [4] as more workers share it. When the marginal product of labour falls, the marginal [5] of producing an extra unit rises, because more labour is required per unit of output. This relationship explains why the MC curve is [6] in the short run beyond some output level.',
        blanks: [
          { id: 1, opts: ['variable', 'fixed', 'capital', 'financial'], ans: 0 },
          { id: 2, opts: ['fixed', 'variable', 'infinite', 'flexible'], ans: 0 },
          { id: 3, opts: ['product', 'cost', 'revenue', 'profit'], ans: 0 },
          { id: 4, opts: ['scarce', 'expensive', 'productive', 'efficient'], ans: 0 },
          { id: 5, opts: ['cost', 'revenue', 'product', 'value'], ans: 0 },
          { id: 6, opts: ['upward-sloping', 'downward-sloping', 'horizontal', 'vertical'], ans: 0 }
        ],
        exp: '(1) <strong>Variable</strong>: labour is the variable factor that is added in the short run. (2) <strong>Fixed</strong>: capital (machinery, factory space) is the fixed factor. (3) <strong>Product</strong>: marginal product of labour (MPL) &#8212; the extra output from one more worker. (4) <strong>Scarce</strong>: as more workers share the same capital, each worker has less of it to work with, so the fixed factor becomes increasingly scarce relative to labour. (5) <strong>Cost</strong>: when MPL falls, it takes more labour (and therefore more wage cost) to produce each extra unit, so marginal cost rises. (6) <strong>Upward-sloping</strong>: rising MC is reflected in the upward-sloping portion of the MC curve, which is precisely because diminishing returns have set in.'
      },

      /* 4 — Diagram interpretation: MC/AC crossing */
      { type: 'mcq',
        stem: 'A student draws a cost diagram for a firm. Their MC curve crosses the AC curve at a point to the <strong>right</strong> of AC\'s minimum. What error has been made?',
        opts: [
          'The MC curve must always cross AC exactly at AC\'s minimum point &#8212; crossing to the right implies MC was above AC before the minimum, which would have been raising AC, contradicting the diagram',
          'No error has been made &#8212; MC can cross AC at any point along the AC curve depending on the industry',
          'The only error is that MC should be drawn as a horizontal line, not an upward-sloping curve',
          'The error is that AC should be drawn as a straight downward-sloping line, not U-shaped'
        ],
        ans: 0,
        exp: 'The mathematical relationship between MC and AC is: when MC &lt; AC, AC is falling; when MC &gt; AC, AC is rising; when MC = AC, AC is at its minimum. If MC crosses AC to the <strong>right</strong> of the AC minimum, it implies that MC was below AC to the left of the minimum but also to the right &#8212; but that is impossible if AC has already started rising to the right of the minimum (which requires MC &gt; AC). The only consistent crossing point is exactly at the minimum of AC. This is a universal mathematical property, not an assumption &#8212; it holds for any smooth U-shaped AC curve. Examiners regularly penalise diagrams where MC does not cross AC at AC\'s minimum.'
      },

      /* 5 — Elastic sort: fixed or variable costs */
      { type: 'elastic_sort',
        stem: 'Classify each cost as <strong>fixed</strong> or <strong>variable</strong> for a bakery in the short run.',
        categories: ['fc', 'vc'],
        categoryLabels: ['Fixed cost', 'Variable cost'],
        goods: [
          { icon: '&#127968;', label: 'Annual lease on the bakery premises', note: '', ans: 'fc' },
          { icon: '&#127820;', label: 'Flour, eggs, and butter used in baking', note: '', ans: 'vc' },
          { icon: '&#9889;', label: 'Electricity to run ovens (directly proportional to output)', note: '', ans: 'vc' },
          { icon: '&#128640;', label: 'Depreciation on the industrial oven (time-based, not output-based)', note: '', ans: 'fc' },
          { icon: '&#128119;', label: 'Wages of the bakery manager on a fixed annual salary', note: '', ans: 'fc' },
          { icon: '&#128198;', label: 'Packaging materials used to wrap each loaf sold', note: '', ans: 'vc' }
        ],
        exp: '<strong>Fixed costs</strong> do not vary with output: the premises lease, depreciation on owned capital (time-based), and the manager\'s fixed salary must all be paid whether the bakery produces 0 or 1,000 loaves. <strong>Variable costs</strong> rise with output: ingredients (directly proportional), production electricity, and per-unit packaging all increase with each additional loaf. Note that depreciation can be fixed (time-based: the oven ages regardless of use) or variable (usage-based: each cycle wears the oven down) &#8212; the question specifies time-based here. This distinction matters for the shutdown rule: only variable costs are avoidable by reducing output.'
      },

      /* 6 — Multi-select: consequences of high fixed costs */
      { type: 'multi_select',
        stem: 'Which of the following are consequences for a firm operating in a <strong>high fixed cost, low variable cost</strong> industry (e.g. pharmaceuticals, software)?',
        opts: [
          'Average fixed cost per unit falls dramatically as output rises, creating large economies of scale',
          'The firm has a strong incentive to maximise volume of output once fixed costs are covered',
          'Very high barriers to entry for new firms that cannot afford the initial fixed cost investment',
          'Marginal cost is very low at all output levels, so the firm could profitably sell additional units at prices well below average cost',
          'The firm will always make supernormal profit because average cost is always falling',
          'Fixed costs are irrelevant to the firm\'s pricing decisions because they cannot be changed'
        ],
        correct: [0, 1, 2, 3],
        exp: 'Options A&#8211;D are all valid consequences of high fixed/low variable cost structures. <strong>A</strong>: AFC = FC/Q falls towards zero &#8212; large scale economies. <strong>B</strong>: once fixed costs are recovered, each additional unit costs very little to produce &#8212; strong incentive to sell more. <strong>C</strong>: high initial investment creates a barrier to entry (sunk cost). <strong>D</strong>: near-zero marginal cost means even deeply discounted prices generate positive contribution. Option E is incorrect &#8212; falling AC does not guarantee supernormal profit; it depends on whether revenue covers costs. Option F is incorrect &#8212; even though fixed costs cannot be changed in the short run, they affect the break-even price and the level of output at which the firm starts covering total costs.'
      },

      /* 7 — MCQ: sunk costs */
      { type: 'mcq',
        stem: 'A firm has spent &#163;2 million building a factory. An economist advises that this expenditure is a sunk cost and should be ignored in future decisions. This advice is correct because:',
        opts: [
          'The &#163;2 million cannot be recovered regardless of what the firm does next &#8212; it is irreversible and therefore irrelevant to forward-looking decisions',
          'Fixed costs always become sunk costs once spent, and sunk costs reduce future profitability by definition',
          'The factory has zero value once built because specific capital cannot be sold or redeployed',
          'The economist is wrong &#8212; all past expenditure must be considered in future pricing decisions to ensure full cost recovery'
        ],
        ans: 0,
        exp: 'A <strong>sunk cost</strong> is a past expenditure that cannot be recovered irrespective of future decisions. Since the &#163;2 million factory is already built and cannot be unsold, it should not influence forward-looking decisions &#8212; only <em>incremental future costs and revenues</em> are relevant. This is rational: including sunk costs leads to the "sunk cost fallacy" &#8212; continuing with a loss-making project because of past investment ("we\'ve already spent &#163;2 million, we can\'t stop now"). Option C is too strong &#8212; some specific capital retains scrap or alternative-use value. Option D describes how accountants (not economists) approach costs &#8212; full-cost pricing is a satisficing rule, not economically optimal forward-looking behaviour.'
      },

      /* 8 — Odd one out: cost concepts */
      { type: 'odd_one_out',
        stem: 'Three of these describe relationships between MC and AC that are always true. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#128200;', label: 'When MC is below AC, AC is falling', note: '' },
          { icon: '&#128201;', label: 'When MC is above AC, AC is rising', note: '' },
          { icon: '&#9971;', label: 'MC crosses AC at the minimum point of AC', note: '' },
          { icon: '&#128202;', label: 'MC is always lower than AC at every level of output', note: '' }
        ],
        ans: 3,
        exp: 'The odd one out is that <strong>MC is always lower than AC at every level of output</strong>. This is false: MC is below AC only while AC is falling (to the left of AC\'s minimum). Once AC reaches its minimum, MC = AC. Beyond the minimum, MC exceeds AC (which is why AC starts rising). The other three statements are all universally true mathematical relationships between MC and AC that must hold for any standard U-shaped average cost curve. These relationships flow directly from the mathematical definition: AC = TC/Q and MC = dTC/dQ (or &#916;TC/&#916;Q in discrete form).'
      },

      /* 9 — Diagnostic pair: diminishing returns explanation */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Explain why a firm\'s marginal cost curve rises in the short run."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Zara', badge: 'Candidate A',
            answer: 'A firm\'s MC curve rises in the short run because of the <strong>law of diminishing marginal returns</strong>. In the short run, at least one factor &#8212; typically capital &#8212; is fixed. As the firm expands output by employing more of the variable factor (labour), each additional worker has less of the fixed factor to work with. The <em>marginal product of labour</em> (MPL) therefore falls beyond some level of employment. Since MC = wage rate / MPL, when MPL falls, MC rises: it takes more labour (more cost) to produce each additional unit. Specifically, if the wage is &#163;500 per week and each worker initially produces 50 units (MPL=50), then MC = &#163;500/50 = &#163;10 per unit. If MPL falls to 25 units, MC = &#163;500/25 = &#163;20. The rising MC curve therefore directly reflects diminishing returns to the variable factor in the short run &#8212; it is not a rising curve in the long run when all factors can be varied.'
          },
          { name: 'Jack', badge: 'Candidate B',
            answer: 'A firm\'s MC curve rises in the short run because as it produces more output, costs go up. This is because of diminishing returns: when a firm adds more workers to a fixed amount of capital, the extra output from each worker gets smaller. So producing extra units becomes more expensive. For example, if a factory has a fixed number of machines and keeps hiring more workers, eventually the workers will get in each other\'s way and produce less extra output. This means each extra unit costs more to produce, which is why marginal cost is rising. The MC curve shows the cost of producing one extra unit, and since this rises due to diminishing returns, the MC curve slopes upward.'
          }
        ],
        ans: 0,
        exp: '<strong>Zara</strong> gives the stronger answer. She explicitly states the law of diminishing marginal returns, identifies the fixed factor (capital) and variable factor (labour), derives the relationship MC = w/MPL, and provides a numerical example that makes the logic unambiguous. She also notes the short-run specificity &#8212; rising MC is a short-run phenomenon, not a long-run one. Jack captures the core idea correctly but lacks the algebraic precision (MC = w/MPL) and the crucial clarification that this is a <em>short-run</em> concept. Zara accesses Level 4; Jack Level 3.'
      },

      /* 10 — MCQ: MC as supply curve */
      { type: 'mcq',
        stem: 'Why is the <strong>marginal cost curve above the minimum AVC</strong> the short-run supply curve for a perfectly competitive firm?',
        opts: [
          'A profit-maximising price-taker produces where P = MC, so each market price corresponds to a unique output level &#8212; the MC curve maps price to quantity supplied',
          'The MC curve is the supply curve because it shows the total cost of production at each output level',
          'The MC curve is the supply curve because competitive firms must always operate at minimum average cost',
          'The MC curve above minimum AVC is the supply curve because fixed costs are zero at this output range'
        ],
        ans: 0,
        exp: 'A perfectly competitive firm is a price-taker: it maximises profit by producing where <strong>P = MC</strong> (since MR = P for a price-taker). At any given market price, the firm expands to the output where that price equals marginal cost. This means the MC curve directly gives the quantity the firm will supply at each possible price &#8212; the definition of a supply curve. The curve is only the supply curve <strong>above minimum AVC</strong> because below this price the firm shuts down (P &lt; AVC &#8594; output = 0, not a point on the supply curve). This is why the short-run supply curve is the MC curve starting from the shutdown point, explaining why supply curves slope upward: higher prices justify producing at higher marginal cost (i.e. higher output).'
      }

    ]
  };

})();
