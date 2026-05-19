/* ============================================================
   ECONOS — Quiz content for: Changes in Costs and Revenues
   10 questions covering the MR=MC framework, cost increases,
   demand shifts, tax incidence, cost innovation, and
   comparisons across market structures.
   ============================================================ */

(function () {

  var PROFIT_SVG =
    '<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif">' +
    '<line x1="50" y1="20" x2="50" y2="285" stroke="#0B1426" stroke-width="2"/>' +
    '<line x1="50" y1="285" x2="400" y2="285" stroke="#0B1426" stroke-width="2"/>' +
    '<text x="38" y="22" fill="#0B1426" font-size="11" text-anchor="end" font-weight="700">&#163;</text>' +
    '<text x="398" y="300" fill="#0B1426" font-size="11" font-weight="700">Q</text>' +
    '<line x1="70" y1="60" x2="370" y2="240" stroke="#2563EB" stroke-width="2.5"/>' +
    '<text x="373" y="240" fill="#2563EB" font-size="11" font-weight="700">AR=D</text>' +
    '<line x1="70" y1="100" x2="370" y2="200" stroke="#2563EB" stroke-width="2" stroke-dasharray="5,3"/>' +
    '<text x="373" y="200" fill="#2563EB" font-size="11" font-weight="700">MR</text>' +
    '<path d="M 60 240 Q 140 180 200 155 Q 280 135 370 140" fill="none" stroke="#1FB574" stroke-width="2.5"/>' +
    '<text x="373" y="140" fill="#1FB574" font-size="11" font-weight="700">AC</text>' +
    '<path d="M 60 260 Q 130 200 200 175 Q 280 165 370 180" fill="none" stroke="#EC2D68" stroke-width="2.5"/>' +
    '<text x="373" y="180" fill="#EC2D68" font-size="11" font-weight="700">MC</text>' +
    '<line x1="210" y1="20" x2="210" y2="285" stroke="#0B1426" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>' +
    '<circle cx="210" cy="163" r="5" fill="#F5B800"/>' +
    '<text x="210" y="300" fill="#0B1426" font-size="10" text-anchor="middle" font-weight="700">Q*</text>' +
    '<line x1="50" y1="130" x2="210" y2="130" stroke="#0B1426" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>' +
    '<text x="38" y="134" fill="#0B1426" font-size="10" text-anchor="end" font-weight="700">P*</text>' +
    '<line x1="50" y1="155" x2="210" y2="155" stroke="#1FB574" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>' +
    '<text x="38" y="159" fill="#1FB574" font-size="10" text-anchor="end">AC*</text>' +
    '<rect x="50" y="130" width="160" height="25" fill="#F5B800" opacity="0.25"/>' +
    '</svg>';

  window.ECONOS_QUIZ = {
    id:       'profit_cost_changes_main',
    topicId:  'profit_cost_changes_main',
    title:    'Changes in Costs and Revenues',
    subtitle: 'Theme 3.16 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the MR = MC framework for profit maximisation, the effects of cost increases and demand shifts on output, price, and profit, tax incidence under per-unit and lump-sum taxes, cost-reducing innovation, and how the same changes affect firms differently across market structures. Mixed formats with real UK examples.',
    shortNames: {
      'mrmc':      'MR = MC framework',
      'costshift': 'Cost increase effects',
      'demandshift': 'Demand shift effects',
      'taxtype':   'Tax incidence',
      'innovation': 'Cost innovation',
      'structures': 'Across market structures'
    },

    questions: [

      /* 1 — mcq: MR=MC and fixed costs */
      { type: 'mcq',
        stem: 'A monopolist faces a large increase in its annual <strong>rent</strong> payment (a fixed cost). What happens to the profit-maximising output and price?',
        opts: [
          'Output and price are unchanged — fixed costs do not shift MC, so the MR = MC intersection is unaffected',
          'Output falls and price rises — the higher fixed cost shifts MC upward, reducing the profit-maximising quantity',
          'Output rises — the firm must sell more to cover the higher fixed cost',
          'Output falls but price is unchanged — the firm absorbs the fixed cost through lower profit per unit'
        ],
        ans: 0,
        exp: 'A fixed cost does <strong>not</strong> change MC — rent is the same whether the firm produces 100 or 10,000 units. Since the MR = MC condition determines Q* and P*, neither changes. The only effect is on the <strong>profit rectangle</strong>: AC shifts up (spreading the higher fixed cost over units), so the (P &#8722; AC) margin narrows and total profit falls. This is the most commonly tested fixed vs variable cost distinction. A <em>per-unit</em> tax (variable cost) DOES shift MC → does change Q* and P. A corporation tax (profit tax, lump-sum) does NOT shift MC → Q* and P unchanged. The policy implication: per-unit taxes change behaviour; lump-sum taxes extract profit without changing allocative decisions.'
      },

      /* 2 — diagram_interp: cost increase effect */
      { type: 'diagram_interp',
        stem: 'A monopolist is initially at profit-maximising equilibrium Q*, P*. A sharp rise in raw material costs shifts MC <strong>upward</strong>.',
        svg: PROFIT_SVG,
        caption: 'Initial equilibrium: MR = MC at Q*. Price P* read from AR curve. Profit rectangle shaded amber: (P* &#8722; AC*) &#215; Q*.',
        question: 'In the <strong>new equilibrium</strong> after the MC shift, which outcome is correct?',
        opts: [
          'Q falls, P rises, but P rises by less than the full cost increase — profit falls as the firm absorbs part of the cost rise',
          'Q rises, P falls — higher costs force the firm to increase output to maintain total revenue',
          'Q and P are both unchanged — MC shifts only affect fixed costs, not the profit-maximising intersection',
          'Q falls, P rises by exactly the full amount of the cost increase — the firm passes all costs to consumers'
        ],
        ans: 0,
        exp: 'MC shifts <strong>up</strong> → new MR = MC intersection at <strong>lower Q</strong>. Reading off the demand curve at the new lower Q gives a <strong>higher P</strong>. However, P rises by <em>less than</em> the full cost increase because the demand curve is downward-sloping — raising price reduces quantity sold, which offsets some of the revenue gain. How much is passed on depends on PED: inelastic demand → more of the cost rise passed to consumers → smaller profit fall. Elastic demand → more absorbed by the firm → larger profit fall. Option D (full pass-through) would only occur if demand were perfectly inelastic (vertical demand curve) — unrealistic for almost all goods.'
      },

      /* 3 — elastic_sort: fixed vs variable cost */
      { type: 'elastic_sort',
        stem: 'Classify each cost as a <strong>variable cost</strong> (shifts MC) or a <strong>fixed cost</strong> (does NOT shift MC).',
        categories: ['variable', 'fixed'],
        categoryLabels: ['Variable cost (shifts MC)', 'Fixed cost (does not shift MC)'],
        goods: [
          { icon: '🛢️', label: 'Cost of crude oil per barrel used in refining — rises sharply with OPEC production cuts', note: '', ans: 'variable' },
          { icon: '🏢', label: 'Annual rent on factory premises — paid regardless of output level', note: '', ans: 'fixed' },
          { icon: '💰', label: 'Per-unit excise duty on each litre of petrol sold', note: '', ans: 'variable' },
          { icon: '📋', label: 'Annual corporation tax bill based on total profit', note: '', ans: 'fixed' },
          { icon: '👷', label: 'Wages of production-line workers paid per unit assembled', note: '', ans: 'variable' },
          { icon: '🔬', label: 'Fixed annual R&D budget allocated regardless of current output', note: '', ans: 'fixed' }
        ],
        exp: '<strong>Variable costs</strong> change with output — they shift MC. Crude oil per barrel, per-unit excise duty, and piece-rate wages all directly depend on output volume, so they raise MC. <strong>Fixed costs</strong> are incurred regardless of output — they do NOT shift MC. Rent, corporation tax, and fixed R&D budgets are the same whether output is zero or at maximum. The critical exam distinction: only variable cost changes alter the profit-maximising Q* and P*. Fixed cost changes only affect the profit rectangle (via AC), not the MR = MC equilibrium. A per-unit tax is variable (shifts MC → changes Q* and P*). A lump-sum tax is fixed (does not shift MC → Q* and P* unchanged).'
      },

      /* 4 — calculation: tax incidence */
      { type: 'calculation',
        context: 'The government imposes a <strong>per-unit tax of &#163;4</strong> on each unit sold by a monopolist. Before the tax, the profit-maximising output was <strong>500 units</strong> at a price of <strong>&#163;20</strong>. After the tax shifts MC up by &#163;4, the new equilibrium is <strong>450 units</strong> at a price of <strong>&#163;22</strong>.',
        working: [
          'Tax per unit: &#163;4',
          'Price rise: &#163;22 &#8722; &#163;20 = &#163;2',
          'Consumer burden (price rise per unit): &#163;2',
          'Producer burden (tax borne by firm per unit): &#163;4 &#8722; &#163;2 = &#163;2',
          'Tax split: 50% consumer, 50% producer',
          'Total tax revenue: &#163;4 &#215; 450 = &#163;1,800'
        ],
        stem: 'What is the tax incidence split between consumers and producers?',
        opts: [
          { ped: 'Consumers bear &#163;2 (50%) and producers bear &#163;2 (50%) of the &#163;4 per-unit tax', typ: 'Correctly computed: consumer burden = price rise = &#163;2; producer burden = tax &#8722; price rise = &#163;2', rev: 'Tax split: consumer burden = price rise; producer burden = tax rate &#8722; price rise' },
          { ped: 'Consumers bear the full &#163;4 per unit — firms always pass on 100% of a per-unit tax', typ: 'Only possible with perfectly inelastic demand — not the case here since quantity fell from 500 to 450', rev: 'Quantity fell, showing some consumer price response — elasticity determines split' },
          { ped: 'Producers bear the full &#163;4 per unit — firms cannot raise price after a per-unit tax', typ: 'Ignored the price rise from &#163;20 to &#163;22 shown in the data', rev: 'Price rose &#163;2 → consumer does bear some of the tax' },
          { ped: 'Consumers bear &#163;3 and producers bear &#163;1 — the government captures the rest', typ: 'Confused tax revenue sharing — tax revenue goes entirely to government; incidence split is between producers and consumers only', rev: 'All &#163;4/unit goes to government; the split refers to who bears the welfare cost' }
        ],
        ans: 0,
        exp: 'The consumer pays <strong>&#163;2 more</strong> per unit (price rises from &#163;20 to &#163;22). The firm receives only &#163;22 &#8722; &#163;4 = <strong>&#163;18 net</strong> per unit, compared with &#163;20 before. So the firm bears <strong>&#163;2 per unit</strong> of the tax. The split is 50/50. The division depends on PED: more inelastic demand → more passed to consumers; more elastic demand → more borne by producers. Total tax revenue: &#163;4 &#215; 450 = <strong>&#163;1,800</strong>. The DWL (deadweight loss) from the tax is the area of the triangle created by the reduction in output from 500 to 450 units — allocative inefficiency created by the tax wedge.'
      },

      /* 5 — multi_select: effects of a demand increase */
      { type: 'multi_select',
        stem: 'A monopolist experiences a significant rightward shift in its demand curve (AR and MR shift right). Which of the following effects are correct? Select all that apply.',
        opts: [
          'The new MR = MC intersection occurs at a higher output level Q** > Q*',
          'The new price P** > P* — read off the new (higher) demand curve at Q**',
          'Total revenue falls because the firm must lower price to sell more output',
          'Profit increases — both Q and P are higher, expanding the profit rectangle',
          'MC is unchanged — the demand shift does not affect the firm\'s cost structure',
          'In perfect competition, new entrants would be attracted by the supernormal profit, but in monopoly the profit persists'
        ],
        correct: [0, 1, 3, 4, 5],
        exp: 'Options A, B, D, E, and F are correct. (A) Rightward AR/MR shift → new MR intersects MC at higher Q. (B) Higher Q on the new (higher) demand curve → higher P. (D) Both Q and P rise → TR rises strongly, TC rises by less (if AC is flat) → profit rectangle expands. (E) A demand shift does not affect MC — costs depend on input prices and technology, not product demand. (F) Under monopoly, high barriers prevent entry → supernormal profit persists; in perfect competition, entry would erode it. Option C is wrong: TR rises (both Q and P increase) — there is no output-price trade-off here because demand has shifted outward, not the firm moving along a given demand curve. This asymmetry (demand rise: both Q and P rise; cost rise: Q falls, P rises partially) is a key evaluation point.'
      },

      /* 6 — mcq: cost reduction under different structures */
      { type: 'mcq',
        stem: 'A firm achieves a <strong>process innovation</strong> that significantly lowers its MC. In a <strong>perfectly competitive</strong> market, who benefits most in the long run?',
        opts: [
          'Consumers — competition forces the cost reduction to be passed on through lower prices as rivals imitate or new firms enter',
          'The innovating firm — it can earn permanent supernormal profit because it has a cost advantage',
          'The government — lower costs mean higher profit and more corporation tax revenue, but no benefit to consumers',
          'Shareholders — the firm\'s share price rises permanently due to the perpetual cost advantage'
        ],
        ans: 0,
        exp: 'In perfect competition, long-run equilibrium requires P = min AC. A cost reduction shifts MC down → the innovating firm initially earns supernormal profit (cost below the industry AC). This attracts new entrants and encourages rivals to imitate. As more firms adopt the process innovation, industry supply increases, price falls toward the new lower AC. <strong>Long-run result: consumers gain the full benefit through lower prices; the innovating firm loses its temporary advantage.</strong> This contrasts with monopoly: the monopolist can sustain the cost advantage permanently because barriers prevent entry. The innovation benefit is retained as higher profit → shareholders benefit in monopoly, consumers in perfect competition. This is part of the static vs dynamic efficiency trade-off used to evaluate monopoly and competition policy.'
      },

      /* 7 — para_fill: per-unit vs lump-sum tax */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph by selecting the correct word or phrase for each numbered blank.',
        anchor: 'The effects of taxation on a firm depend critically on whether the tax is per-unit or lump-sum.',
        para: 'A <strong>per-unit tax</strong> is equivalent to a rise in [1] costs — it shifts the [2] curve upward. As a result, the profit-maximising [3] falls and price [4], with the tax split between consumers and producers depending on [5]. By contrast, a <strong>lump-sum tax</strong> is a [6] cost — it shifts [7] but leaves MC unchanged. The firm cannot alter its output or price to reduce the tax burden, so the lump-sum tax falls entirely on [8].',
        blanks: [
          { id: 1, opts: ['variable', 'fixed', 'sunk', 'overhead'], ans: 0 },
          { id: 2, opts: ['MC', 'AC only', 'AR', 'MR'], ans: 0 },
          { id: 3, opts: ['output (Q*)', 'price', 'revenue', 'demand'], ans: 0 },
          { id: 4, opts: ['rises', 'falls', 'stays the same', 'doubles'], ans: 0 },
          { id: 5, opts: ['price elasticity of demand', 'market structure', 'firm size', 'MR only'], ans: 0 },
          { id: 6, opts: ['fixed', 'variable', 'sunk', 'marginal'], ans: 0 },
          { id: 7, opts: ['AC', 'MC', 'both AC and MC', 'MR'], ans: 0 },
          { id: 8, opts: ['the producer (through lower profit)', 'consumers (through higher price)', 'the government', 'workers'], ans: 0 }
        ],
        exp: '(1) <strong>Variable</strong>: per-unit tax adds to cost per unit. (2) <strong>MC</strong>: MC shifts up by the tax per unit. (3) <strong>Output Q*</strong>: new MR = MC at lower Q. (4) <strong>Rises</strong>: reading from the demand curve at lower Q gives higher P. (5) <strong>PED</strong>: inelastic demand → more passed to consumers; elastic → more borne by firm. (6) <strong>Fixed</strong>: lump-sum tax is the same regardless of output. (7) <strong>AC</strong>: fixed cost is spread over units → AC shifts up; MC is unaffected. (8) <strong>Producer (through lower profit)</strong>: MR = MC unchanged → Q* and P unchanged → consumer pays same price → full tax burden on producer as lower profit. This is why economists prefer per-unit Pigouvian taxes (e.g., carbon tax) over lump-sum taxes — only variable cost taxes change allocative decisions.'
      },

      /* 8 — odd_one_out: what affects profit-maximising Q* */
      { type: 'odd_one_out',
        stem: 'Three of these changes <strong>directly shift the profit-maximising output Q*</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '🛢️', label: 'A sharp rise in the price of raw materials used in production — a variable input cost', note: '' },
          { icon: '📢', label: 'A major marketing campaign successfully increases consumer demand for the product', note: '' },
          { icon: '🏢', label: 'A significant rise in annual rent for the firm\'s factory premises — a fixed cost', note: '' },
          { icon: '💱', label: 'Sterling depreciates sharply, raising the cost of imported components used in production', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is the <strong>rent increase</strong>. Rent is a fixed cost — it does not shift MC. Since Q* is determined by MR = MC, and MC is unchanged, Q* is unchanged. Only the profit rectangle shrinks (via AC). The other three all directly shift Q*: (A) higher raw material prices are a variable cost → MC shifts up → lower Q*. (B) higher demand shifts AR and MR right → new MR = MC at higher Q*. (D) a weaker sterling raises the cost of imported components per unit produced → MC shifts up → lower Q*. The fixed vs variable cost distinction is one of the most frequently examined points in this topic — always ask: does this cost change with output? If yes, it shifts MC and changes Q*.'
      },

      /* 9 — data_table: comparing cost increase effects across structures */
      { type: 'data_table',
        stem: 'The table shows the effect of a &#163;5 per-unit cost increase on two firms in different market structures.',
        headers: ['Outcome', 'Perfect competition firm', 'Monopoly firm'],
        rows: [
          ['Change in output', 'No change immediately (price-taker)', 'Falls (new MR = MC at lower Q)'],
          ['Change in price', 'Market price rises (industry MC shifts)', 'Rises, but by less than &#163;5'],
          ['Profit effect', 'Firms earning normal profit may exit', 'Profit falls; firm remains if P > AVC'],
          ['Consumer impact', 'Price rises by the full cost increase (competitive pass-through)', 'Price rises by less than &#163;5 (monopolist absorbs some)'],
          ['Long-run adjustment', 'Exit until surviving firms earn normal profit', 'No exit mechanism — barriers protect monopoly']
        ],
        question: 'Which conclusion is <strong>most consistent</strong> with the data?',
        opts: [
          'Under perfect competition, the full cost increase is eventually passed to consumers through market price rises, while a monopolist may absorb part of the increase depending on PED — making consumers better protected under monopoly in the short run',
          'Monopolists always raise prices more than competitive firms after a cost increase, making monopoly consistently more harmful to consumers',
          'Cost increases never affect consumers in competitive markets because firms are price-takers and cannot raise prices',
          'Both market structures produce identical outcomes for consumers because the MR = MC rule applies in both cases'
        ],
        ans: 0,
        exp: 'Option A is the strongest conclusion from the data. Under perfect competition, the market supply curve shifts left → price rises until surviving firms earn normal profit → the <em>full</em> cost increase is passed on to consumers in the long run (competitive pass-through). A monopolist facing a downward-sloping demand curve partially absorbs the MC rise — the price increase is less than the cost increase, with the split depending on PED. <strong>Paradoxically, consumers may face a smaller price rise under monopoly than perfect competition in the short run</strong> — though this must be weighed against the monopoly markup already present. Option B is too strong — the data show the monopolist\'s price rise is <em>less than</em> &#163;5. Option C ignores the market-level mechanism. Option D ignores structural differences in how the MR = MC rule translates into price-setting.'
      },

      /* 10 — chain: demand increase transmission in monopoly */
      { type: 'chain',
        stem: 'A monopolist experiences a sustained increase in consumer incomes, raising demand for its product. Place the events in the correct logical order.',
        items: [
          { label: 'Both output Q* and price P* rise — the monopolist expands at higher prices', note: '' },
          { label: 'Consumer incomes rise — demand for the monopolist\'s product increases', note: '' },
          { label: 'Profit rectangle expands — both the (P &#8722; AC) margin and Q are larger', note: '' },
          { label: 'AR (demand) curve and MR curve both shift rightward/upward', note: '' },
          { label: 'The new MR curve intersects unchanged MC at a higher output level', note: '' },
          { label: 'Supernormal profit persists — high barriers prevent new entrants from competing away the profit', note: '' }
        ],
        correctOrder: [1, 3, 4, 0, 2, 5],
        exp: '<strong>Correct sequence:</strong><br>1. Consumer incomes rise (initial shock).<br>2. AR and MR both shift right — derived from the increased demand.<br>3. New MR intersects the unchanged MC at higher Q.<br>4. Higher Q read off the new, higher demand curve gives higher P.<br>5. Profit rectangle expands (wider Q, taller P &#8722; AC).<br>6. Supernormal profit persists because barriers block entry.<br><br>This is the key contrast with perfect competition: a demand increase leads to the same short-run expansion (Q and P rise) but monopoly retains the profit in the long run because there is no entry mechanism. In perfect competition, step 6 would instead be "new entrants are attracted, supply increases, price returns to min AC." This structural contrast is the foundation of the dynamic efficiency argument for competition policy.'
      }

    ]
  };

})();
