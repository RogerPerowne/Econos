window.ECONOS_TOPIC = {
  id: 'changes-in-costs-and-revenues',
  topicNum: '3.16',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Changes in Costs and Revenues',
  estTime: '7-9 minutes',
  goal: 'Lock in how changes in costs and revenues shift the profit-maximising output, price, and profit – across all market structures.',
  intro: {
    heroKey: 'heroShortRunCosts',
    summary: 'The profit-maximising condition MR = MC is the starting point. When costs or revenues change, the equilibrium shifts. Understanding precisely how, and in which direction, is essential for exam diagram analysis across monopoly, perfect competition, and oligopoly.',
    doInThis: 'Work through 7 cards covering cost increases and their effects, revenue changes, shifts in demand and MR, the impact on the profit rectangle, tax incidence, cost-reducing innovation, and a comparison across market structures.',
    outcomes: [
      'Analyse how a cost increase shifts MC and changes profit-maximising output and price',
      'Distinguish between demand-side and cost-side shifts and their effects on equilibrium',
      'Calculate and show graphically how the profit rectangle changes',
      'Apply cost and revenue analysis to tax incidence and innovation'
    ],
    tip: 'Always start from MR = MC. A cost increase shifts MC up → new intersection with MR at lower Q and (usually) higher P. A demand increase shifts AR and MR right → new intersection at higher Q and higher P. The profit rectangle changes with both AC and P at the new Q.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'profit_cost_changes_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Changes in costs and revenues: the big picture',
      lede: 'When the world shifts – taxes, oil prices, consumer tastes – the MR = MC point moves with it. A disciplined method gets the new equilibrium right every time.',
      branches: [
        { tone: 'blue',   label: 'Start from MR = MC',     sub: 'Every change in cost or demand re-locates the profit-maximising output. Always begin by identifying which curve has moved.' },
        { tone: 'amber',  label: 'Cost shock',             sub: 'Variable cost rises shift MC up → lower Q, higher P. The pass-through depends on PED.' },
        { tone: 'green',  label: 'Demand shock',           sub: 'A rise in demand shifts AR and MR right → higher Q and higher P. Profit usually expands.' },
        { tone: 'purple', label: 'Fixed vs variable',      sub: 'Lump-sum costs hit profit but not Q or P. Per-unit costs change MC → ripple through to price and output.' }
      ],
      body: 'All profit analysis is built on the MR = MC condition. To analyse any change:<br><br><strong>Step 1:</strong> Identify what has changed – cost side (MC or AC) or revenue side (AR/MR).<br><strong>Step 2:</strong> Draw or redraw the relevant curve(s).<br><strong>Step 3:</strong> Find the new MR = MC intersection → new Q*.<br><strong>Step 4:</strong> Read off the new price from the demand curve at Q*.<br><strong>Step 5:</strong> Compare AC at new Q* with P → new profit per unit. Calculate profit rectangle: (P − AC) \xd7 Q*.<br><br><strong>Key principle:</strong> A change in fixed costs does NOT change the profit-maximising output. Fixed costs shift AC (and hence the profit rectangle) but do NOT shift MC. Since MR = MC determines Q*, and MC hasn\'t moved, Q* and P are unchanged. Only profit (the rectangle) changes.',
      keyTerms: [
        { term: 'Profit-maximising output Q*', def: 'The output where MR = MC. This is the starting point for all profit analysis.' },
        { term: 'Profit rectangle', def: '(P − AC) \xd7 Q* – the area showing supernormal profit or loss on a diagram.' },
        { term: 'Fixed cost change', def: 'Shifts AC but NOT MC. Does not change Q* or P – only changes the profit rectangle area.' }
      ],
      examEdge: 'A lump-sum tax (fixed cost) does not change the profit-maximising output or price because it does not change MC. The firm cannot pass it on to consumers by raising price – the MR = MC intersection is unchanged. A per-unit tax (variable cost) DOES change MC → shifts Q* and P → can be partially passed on to consumers. This distinction is the most commonly tested tax incidence point in profit analysis questions.'
    },
    {
      id: 'profit_cost_changes_2',
      template: 'mechanisms',
      title: 'Effect of a Cost Increase',
      intro: 'A rise in variable costs (e.g., raw material prices, wage costs) shifts the MC curve upward. Trace through the effects.',
      steps: [
        { label: 'MC shifts up', text: 'A rise in variable cost per unit shifts MC upward at every output level. The new MC curve is above the original.' },
        { label: 'New MR = MC intersection', text: 'The new, higher MC intersects MR at a LOWER quantity Q** < Q*. The firm reduces output.' },
        { label: 'New price', text: 'Reading off the demand curve at the new, lower Q**: price rises P** > P*. The firm passes some of the cost increase to consumers through a higher price.' },
        { label: 'Profit effect', text: 'Two effects on profit: (1) higher costs → AC shifts up; (2) price also rises. Net effect: profit usually falls (costs rise by more than revenue). The profit rectangle shrinks. With very inelastic demand, firm can pass on most of the cost → profit hit is smaller.' }
      ],
      examEdge: 'How much of a cost increase is passed to consumers depends on PED. Inelastic demand: firm can raise price significantly → passes most of cost increase to consumers → profit falls less. Elastic demand: raising price loses many customers → firm absorbs more of the cost → profit falls more. This is the tax incidence argument applied to cost changes. An oil price rise hitting a petrol retailer with inelastic demand → most passed to consumers. Same rise hitting a price-sensitive online retailer → absorbed by the firm.'
    },
    {
      id: 'profit_cost_changes_3',
      template: 'mechanisms',
      title: 'Effect of a Demand Increase',
      intro: 'A rise in demand for the firm\'s product shifts both AR and MR rightward/upward. Trace through the effects on output, price, and profit.',
      steps: [
        { label: 'Demand rises: AR and MR shift right', text: 'An increase in demand (consumer incomes rise, tastes change, rival exits) shifts the demand (AR) curve right. MR shifts right by the same horizontal distance.' },
        { label: 'New MR = MC intersection', text: 'The new MR intersects MC (unchanged) at a HIGHER quantity Q** > Q*. The firm increases output.' },
        { label: 'New price', text: 'At Q** on the new demand curve, price reads off at P** > P*. Both output and price increase.' },
        { label: 'Profit effect', text: 'Higher price and higher quantity → TR increases substantially. TC increases (more output) but less than proportionally if AC is flat or falling. Net effect: profit increases. Profit rectangle is larger – wider (more Q) and taller (higher P − AC margin).' }
      ],
      examEdge: 'The asymmetry between cost changes and demand changes is important. Cost increase: Q falls, P rises (partial offset). Demand increase: Q rises, P rises (both move in profit-positive direction). This means demand increases are more powerful profit drivers than equivalent cost reductions: a 10% demand increase raises both output AND price, while a 10% cost reduction raises output and lowers price (partially offsetting revenue effect). Understanding this asymmetry distinguishes nuanced analysis.'
    },
    {
      id: 'profit_cost_changes_4',
      template: 'framing',
      title: 'Tax Incidence: Per-Unit vs Lump-Sum',
      body: 'Taxes are a key application of cost change analysis. Two types with very different effects:<br><br><strong>Per-unit (specific) tax:</strong> e.g., £x per unit sold (excise duties on alcohol, tobacco, petrol). This is a variable cost – shifts MC upward by the tax rate. New Q* is lower; P rises but by less than the full tax. Tax is split between producer (lower profit per unit) and consumer (higher price). Split depends on PED: inelastic demand → more passed to consumer; elastic demand → more borne by producer.<br><br><strong>Lump-sum tax:</strong> e.g., corporation tax, fixed annual licence fee. This is a fixed cost – shifts AC but NOT MC. New Q* and P are unchanged. Producer bears the entire tax through lower profit. Cannot be passed to consumers.<br><br>Conclusion: per-unit taxes are the primary price-influencing tool; lump-sum taxes are pure profit extractions.',
      keyTerms: [
        { term: 'Per-unit tax', def: 'Tax per unit produced or sold – shifts MC up. Raises price and reduces quantity. Shared between producer and consumer.' },
        { term: 'Lump-sum tax', def: 'Fixed tax independent of output – shifts AC but not MC. No change in Q* or P. Fully borne by producer.' },
        { term: 'Tax incidence', def: 'The division of a tax burden between producers and consumers – determined by relative PED.' }
      ],
      examEdge: 'Petrol duty (per-unit tax): MC shifts up → price rises → consumers pay more. Retailer\'s margin is squeezed → producer bears some. PED for petrol is inelastic ≈ −0.3, so most of duty is passed to consumers. UK petrol duty is ≈ 53p/litre – approximately 50% of the pump price. Corporation tax (lump-sum tax for a given profit level): does not affect MC → no change in output or price → fully borne by shareholders through lower post-tax profit. This distinction is why economists prefer per-unit Pigouvian taxes on externalities (they do change behaviour) over lump-sum taxes (which don\'t).'
    },
    {
      id: 'profit_cost_changes_5',
      template: 'framing',
      title: 'Cost Reduction and Innovation',
      body: 'A fall in variable costs (e.g., through process innovation, improved productivity, cheaper inputs) shifts MC downward. Effects:<br><br>• MC shifts down → new intersection with MR at higher Q**<br>• Price falls slightly (competitive markets) or partially (monopoly/oligopoly)<br>• Profit increases – lower AC improves the profit margin at each output level<br><br><strong>Dynamic efficiency through cost reduction:</strong> firms invest in R&D to achieve process innovations that lower MC. This gives a first-mover cost advantage – incumbent with lower costs can undercut new entrants or earn higher profit at the same price.<br><br><strong>Productive efficiency distinction:</strong> cost reduction moves AC downward (a genuine improvement in productive efficiency). Moving along the AC curve to its minimum is also productive efficiency – these are different routes to lower unit cost.',
      keyTerms: [
        { term: 'Process innovation', def: 'Reducing the cost of producing existing products – shifts MC and AC downward at every output level.' },
        { term: 'Cost advantage', def: 'A firm with lower MC than rivals can undercut on price, increase output, or earn higher profit – strategic competitive tool.' },
        { term: 'Learning by doing', def: 'Unit costs fall as cumulative production experience grows – dynamic cost reduction from scale and learning.' }
      ],
      examEdge: 'Cost reduction through innovation has different effects in competitive vs non-competitive markets. Perfect competition: cost reduction → price falls (competed to consumers by rivals entering if incumbent earns supernormal profit). Monopoly: cost reduction → profit rises (monopolist need not cut price since no rivals can enter). This shows why innovation incentives differ: competitive firms share benefits with consumers; monopolists retain them. Another dimension of the static vs dynamic efficiency trade-off.'
    },
    {
      id: 'profit_cost_changes_6',
      template: 'diagnose',
      title: 'Comparing Effects Across Market Structures',
      intro: 'The same cost or demand change has different effects depending on market structure.',
      rows: [
        { label: 'Change', colA: 'Cost increase (MC rises)', colB: 'Demand increase (AR/MR shifts right)' },
        { label: 'Perfect competition', colA: 'MC shifts up → some firms exit if P < AC → market supply falls → price rises to restore equilibrium. Individual firm: output unchanged (price-taker). Profit: initial loss may trigger exit.', colB: 'Market demand shifts → market price rises → individual firm\'s horizontal demand shifts up → firm increases output. Supernormal profit attracts entry → long-run price returns to min AC.' },
        { label: 'Monopoly', colA: 'MC shifts up → new MR = MC at lower Q*, higher P. Firm reduces output and raises price (partially). Profit falls. No risk of exit (monopolist maintains market even at lower profit if covering AVC).', colB: 'AR and MR shift right → new MR = MC at higher Q*, higher P. Output and price both rise. Profit increases substantially. No entry, so supernormal profit persists.' }
      ],
      footer: 'Oligopoly: depends on strategic response. If rivals match cost increase – all raise prices together (tacit coordination). If one firm faces cost increase alone – complex strategic response. Game theory framework applies.',
      examEdge: 'The key difference between perfect competition and monopoly response to demand increase: in perfect competition, entry erodes the profit and price returns to min AC. In monopoly, no entry → supernormal profit persists. This is the same long-run difference that justifies competition policy – the ability to sustain profit in the face of demand growth is the mark of persistent market power.'
    },
    {
      id: 'profit_cost_changes_7',
      template: 'paired',
      title: 'Evaluation: How Firms Respond to Cost Changes',
      left: {
        label: 'Pass on to consumers (price rise)',
        points: [
          'More feasible when demand is inelastic (consumers less responsive to price)',
          'Possible when the firm has market power (can set price above MC)',
          'Prevents profit margin being eroded – protects shareholders',
          'Risk: if demand is elastic, higher price loses significant sales → revenue falls',
          'Example: energy companies raised prices sharply during 2022 gas crisis – inelastic demand'
        ]
      },
      right: {
        label: 'Absorb the cost (margin squeeze)',
        points: [
          'Necessary when demand is elastic – raising price would lose too many customers',
          'Competitive markets: rival firms hold price → cannot pass on without losing market share',
          'Strategic: accept lower short-run profit to maintain market share and long-run position',
          'May trigger cost-cutting internally (efficiency improvements)',
          'Example: supermarkets during 2022 inflation initially absorbed costs to maintain price positioning'
        ]
      },
      examEdge: 'The supermarket response to 2022-23 food inflation illustrates both strategies in one industry. Discounters (Aldi, Lidl) with lower cost bases held prices more effectively. Premium supermarkets (Waitrose) absorbed more cost to protect brand positioning. Mid-market (Tesco, Sainsbury\'s) mixed strategies – selective price holding in visible categories, passing costs elsewhere. The strategic response depends on competitive position, brand identity, and demand elasticity – not just market structure.',
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
    title:    'Changes in Costs and Revenues',
    subtitle: 'Theme 3 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('profit_cost_changes_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers MR=MC profit maximisation, cost and demand shifts, tax incidence, and cross-market comparisons',
    shortNames: [
      'MR=MC rule', 'Cost increase effect', 'Demand shift effect', 'Tax on firm MCQ',
      'Innovation cost', 'Para fill', 'Cause & effect', 'Match pairs',
      'Odd one out', 'Data table'
    ],

    questions: [

      /* 1 – MCQ: MR = MC profit maximisation */
      { type: 'mcq',
        stem: 'A profit-maximising firm should produce the output where:',
        opts: [
          'Marginal revenue equals marginal cost (MR = MC) – at lower outputs MR > MC so more can be made by expanding; at higher outputs MR < MC so less is made by contracting',
          'Average revenue equals average total cost – to ensure the firm earns normal profit at all times',
          'Total revenue is maximised – where MR = 0 and the firm sells as much as possible',
          'Average total cost is minimised – to achieve productive efficiency at all times'
        ],
        ans: 0,
        exp: 'Profit = TR − TC. To maximise profit, the firm expands output as long as MR > MC (each unit adds more revenue than cost). It stops when MR = MC. Beyond this, MR < MC (each extra unit costs more to produce than it adds to revenue) – profit would fall. MR = MC is the universal profit-maximisation rule, applicable to all market structures (perfect competition, monopoly, oligopoly). Total revenue maximisation (MR = 0) gives higher output but lower profit. ATC minimisation (productive efficiency) is a cost objective, not a profit objective.'
      },

      /* 2 – MCQ: cost increase effect on profit-maximising output */
      { type: 'mcq',
        stem: 'A firm faces a <strong>rise in variable costs</strong> (e.g. higher wages). What happens to its profit-maximising output and price?',
        opts: [
          'MC shifts upward – the profit-maximising output falls (MR now equals the higher MC at a lower quantity) and the price rises',
          'MC is unchanged – variable costs are included in average costs, not marginal costs',
          'The firm increases output to maintain total profits by selling more volume at the original price',
          'Price falls as the firm passes cost savings to consumers to maintain market share'
        ],
        ans: 0,
        exp: 'Higher variable costs raise MC (MC = ΔTC/ΔQ – adding variable cost increases the incremental cost of each unit). The MC curve shifts upward. At the original output, MR < new MC → the firm reduces output until MR = new MC at a lower quantity. The reduced supply with unchanged demand means price rises. Profit falls unless the price rise fully compensates. This is the mechanism by which input cost inflation (wages, raw materials, energy) transmits to consumer prices – the supply-side inflation transmission mechanism.'
      },

      /* 3 – MCQ: demand shift and profit maximisation */
      { type: 'mcq',
        stem: 'Demand for a firm\'s product <strong>increases</strong> (demand curve shifts rightward). At the original profit-maximising output, MR is now:',
        opts: [
          'Higher – the rightward shift in demand lifts the AR (demand) curve and MR curve; MR now exceeds MC at original output; the firm should expand',
          'Lower – increased demand reduces the marginal value of each unit to consumers',
          'Unchanged – MR only changes if costs change, not if demand changes',
          'Zero – the new demand curve intersects MR at a quantity that makes MR exactly zero'
        ],
        ans: 0,
        exp: 'A rightward demand shift moves both the AR (demand) curve and MR curve upward. At the original profit-maximising output (where old MR = MC), the new MR now exceeds MC → the firm should expand production. The new profit-maximising output is higher (new MR = MC at a higher quantity), and the new price is higher (reading off the new demand curve at the expanded quantity). Both output and price rise with a demand increase – consistent with positive demand shift diagrams in any market structure.'
      },

      /* 4 – MCQ: indirect tax on firm */
      { type: 'mcq',
        stem: 'The government imposes a specific tax of <strong>£5 per unit</strong> on a monopolist\'s output. The immediate effect on the profit-maximising outcome is:',
        opts: [
          'MC shifts upward by £5 – the new profit-maximising output is lower and the price rises by less than £5 (the tax is split between producer and consumer)',
          'Price rises by exactly £5 – the monopolist passes the full tax to consumers and quantity is unchanged',
          'Output is unchanged – a monopolist\'s pricing power allows it to absorb the tax in profits without changing price',
          'The monopolist exits the market if the tax exceeds its profit margin'
        ],
        ans: 0,
        exp: 'A specific tax adds £5 to the marginal cost of every unit – MC shifts up by £5. The new MR = MC intersection occurs at a lower output. Reading off the demand curve, the new price rises – but by less than £5 (unless demand is perfectly inelastic). The tax incidence is shared: consumers pay some (higher price) and producers bear some (lower net revenue). The split depends on elasticity of demand – the less elastic demand, the more consumers pay. Even a monopolist cannot pass the full tax to consumers unless demand is perfectly inelastic, because the price rise reduces quantity demanded and therefore total profit.'
      },

      /* 5 – MCQ: cost innovation and competitive advantage */
      { type: 'mcq',
        stem: 'A firm introduces a new technology that reduces its marginal cost. In a competitive market, the long-run consequence for this firm is:',
        opts: [
          'Initially higher profits, but entry of new firms attracted by the abnormal profit restores normal profit in the long run – unless the technology creates a barrier to entry (e.g. patent)',
          'Permanent supernormal profits – technology advantages cannot be competed away in the long run',
          'No change in profit – competitors immediately adopt the same technology, equalising costs instantaneously',
          'The firm exits because lower costs signal that the product is no longer valuable to consumers'
        ],
        ans: 0,
        exp: 'In perfect competition: cost innovation → lower MC → new MR = MC at lower price → supernormal profit (price > ATC at new output). This attracts entry → supply increases → market price falls → supernormal profit eroded → long-run normal profit. BUT if the technology is patented or requires scarce expertise, entry is blocked → supernormal profits persist. This is Schumpeter\'s "creative destruction": innovation creates temporary monopoly profits that attract competition; competition erodes profits but spurs the next round of innovation. The dynamic case for monopoly rents: they incentivise the R&D that leads to cost-reducing technologies.'
      },

      /* 6 – Para fill: MR = MC analysis */
      { type: 'para_fill',
        stem: 'Complete the paragraph about profit maximisation.',
        anchor: 'The MR = MC rule is the universal profit-maximisation condition across all market structures.',
        para: 'A firm maximises profit by expanding output as long as [1] exceeds [2]. At the profit-maximising output, MR = MC. If [3] rises due to higher input costs, the profit-maximising output [4] and the market price [5]. If demand increases, both the AR and [6] curves shift upward, causing the profit-maximising output to [7] and the price to [8]. In perfect competition, the long-run equilibrium is also the point of [9] efficiency (P = minimum ATC), whereas a monopolist typically produces at [10] than minimum ATC.',
        blanks: [
          { id: 1, opts: ['MR', 'MC', 'AR', 'TR'], ans: 0 },
          { id: 2, opts: ['MC', 'MR', 'AC', 'AR'], ans: 0 },
          { id: 3, opts: ['MC', 'MR', 'AR', 'TR'], ans: 0 },
          { id: 4, opts: ['falls', 'rises', 'stays constant', 'doubles'], ans: 0 },
          { id: 5, opts: ['rises', 'falls', 'stays constant', 'halves'], ans: 0 },
          { id: 6, opts: ['MR', 'MC', 'AC', 'TC'], ans: 0 },
          { id: 7, opts: ['rise', 'fall', 'stay constant', 'jump'], ans: 0 },
          { id: 8, opts: ['rise', 'fall', 'stay constant', 'become indeterminate'], ans: 0 },
          { id: 9, opts: ['productive', 'allocative', 'dynamic', 'X-'], ans: 0 },
          { id: 10, opts: ['higher', 'lower', 'equal to', 'identical to'], ans: 0 }
        ],
        exp: '(1)(2) Expands as long as <strong>MR</strong> exceeds <strong>MC</strong>. (3)(4)(5) If <strong>MC</strong> rises → output <strong>falls</strong> → price <strong>rises</strong>. (6)(7)(8) Demand shift lifts <strong>MR</strong> → output <strong>rises</strong> → price <strong>rises</strong>. (9) Perfect competition long-run = <strong>productive</strong> efficiency (P = min ATC). (10) Monopolist produces at <strong>higher</strong> ATC (not at minimum ATC – productively inefficient). This paragraph links profit maximisation to market structure outcomes.'
      },

      /* 7 – Cause & effect: cost and revenue changes */
      { type: 'cause_effect',
        stem: 'Match each change to its effect on the profit-maximising output and price.',
        pairs: [
          { cause: 'Fixed costs increase (e.g. higher rent)', effect: 'Profit-maximising output and price unchanged – MC and MR unaffected; only profits fall' },
          { cause: 'Variable costs fall (e.g. cheaper raw materials)', effect: 'MC shifts down; profit-maximising output rises; price falls' },
          { cause: 'Demand shifts rightward (rising consumer incomes)', effect: 'MR shifts up; profit-maximising output rises; price rises' },
          { cause: 'Demand becomes more elastic (new substitutes enter the market)', effect: 'MR curve becomes flatter; firm faces greater pricing constraint; may reduce price to maintain share' },
          { cause: 'Specific tax imposed per unit of output', effect: 'MC rises by the tax; profit-maximising output falls; price rises by less than the tax' },
          { cause: 'Subsidy per unit of output', effect: 'MC falls by the subsidy; profit-maximising output rises; price falls' }
        ],
        exp: 'Key insight: <strong>fixed costs do not affect MR = MC profit-maximising output or price</strong> – a common exam error is to say rent increases cause price rises. Only changes to MC or MR alter the profit-maximising decision. Variable costs → MC shifts; demand changes → MR (and AR) shift; specific taxes → MC up; subsidies → MC down; elasticity changes → slope of MR curve changes. This framework applies across all market structures.'
      },

      /* 8 – Match pairs: revenue and profit concepts */
      { type: 'match_pairs',
        stem: 'Match each concept to its definition.',
        pairs: [
          { a: 'Marginal Revenue (MR)', b: 'Extra revenue from selling one more unit' },
          { a: 'Average Revenue (AR)', b: 'Total revenue ÷ quantity = price (= demand curve)' },
          { a: 'Supernormal profit', b: 'Revenue > total costs including opportunity cost – AR > ATC' },
          { a: 'Normal profit', b: 'Revenue covers all costs including opportunity cost – AR = ATC' },
          { a: 'Shut-down point', b: 'Price falls below average variable cost – losses exceed fixed costs even at optimal output' },
          { a: 'Break-even point', b: 'AR = ATC – total revenue exactly covers total cost' }
        ],
        exp: 'Revenue and profit vocabulary: <strong>AR = demand curve</strong> (downward sloping for monopolist, horizontal for perfect competitor); <strong>MR always lies below AR</strong> for a downward-sloping demand curve (to sell more, price must fall for all units – MR < price). <strong>Supernormal profit</strong>: attracts entry in competitive markets. <strong>Normal profit</strong>: long-run equilibrium in perfect competition and monopolistic competition. <strong>Shut-down</strong>: if P < AVC, better to shut down (loss = fixed costs) than produce (loss > fixed costs). <strong>Break-even</strong>: P = ATC – normal profit, zero economic profit.'
      },

      /* 9 – Odd one out: profit-maximising rules */
      { type: 'odd_one_out',
        stem: 'Three of these statements about profit maximisation are <strong>correct</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '⚖️', label: 'A rise in fixed costs does not change the profit-maximising output level', note: '' },
          { icon: '📈', label: 'A rise in demand (rightward shift) leads a profit-maximiser to expand output and raise price', note: '' },
          { icon: '💰', label: 'A firm maximises profit by producing where average revenue equals average cost', note: '' },
          { icon: '📉', label: 'A rise in variable costs causes the profit-maximising output to fall', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>profit is maximised where AR = ATC</strong>. This is wrong – AR = ATC is the <em>break-even</em> condition (normal profit), not the profit-maximisation condition. Profit is maximised where <strong>MR = MC</strong>. When MR = MC and AR > ATC, the firm earns supernormal profit (the maximum). When AR = ATC, the firm earns normal profit (zero economic profit). Confusing the break-even rule with the profit-maximisation rule is a classic exam error. The other three are correct: fixed costs don\'t affect MR=MC; demand shifts change both output and price; variable cost rises reduce profit-maximising output.'
      },

      /* 10 – Data table: profit maximisation with data */
      { type: 'data_table',
        stem: 'The table shows revenue and cost data for a firm.',
        headers: ['Output (units)', 'Price (AR) (£)', 'MR (£)', 'MC (£)', 'Profit (TR − TC)'],
        rows: [
          ['1', '100', '100', '30', '70'],
          ['2', '90', '80', '35', '115'],
          ['3', '80', '60', '40', '135'],
          ['4', '70', '40', '45', '130'],
          ['5', '60', '20', '50', '100'],
          ['6', '50', '0', '60', '40']
        ],
        question: 'At what output does the firm <strong>maximise profit</strong>, and what is the maximum profit?',
        opts: [
          'Output = 3 units (MR = £60 > MC = £40, still profitable to expand; but at output 4, MR = £40 < MC = £45 – profit falls). Maximum profit = £135',
          'Output = 4 units where profit is still rising – maximum profit = £130',
          'Output = 6 units to maximise total revenue (MR = 0) – maximum profit = £40',
          'Output = 2 units where MC is lowest – maximum profit = £115'
        ],
        ans: 0,
        exp: 'Profit maximisation: produce while MR > MC, stop when MR < MC. At output 3: MR (£60) > MC (£40) → expand. At output 4: MR (£40) < MC (£45) → don\'t expand. Maximum profit at output <strong>3 units = £135</strong>. Note: profit still positive at output 4 (£130) but lower – profit is maximised, not just positive, at output 3. Output 6 maximises revenue (MR=0) but profit = only £40. This confirms: profit max ≠ revenue max ≠ ATC min. The MR=MC rule directs the firm to the globally maximum profit point.'
      }

    ]
  };

})();

