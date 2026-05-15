window.ECONOS_TOPIC = {
  id: 'profit_cost_changes',
  topicNum: '3.16',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Changes in Costs and Revenues',
  estTime: '7-9 minutes',
  goal: 'Lock in how changes in costs and revenues shift the profit-maximising output, price, and profit — across all market structures.',
  intro: {
    heroKey: 'business',
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
      lede: 'When the world shifts — taxes, oil prices, consumer tastes — the MR = MC point moves with it. A disciplined method gets the new equilibrium right every time.',
      branches: [
        { tone: 'blue',   label: 'Start from MR = MC',     sub: 'Every change in cost or demand re-locates the profit-maximising output. Always begin by identifying which curve has moved.' },
        { tone: 'amber',  label: 'Cost shock',             sub: 'Variable cost rises shift MC up → lower Q, higher P. The pass-through depends on PED.' },
        { tone: 'green',  label: 'Demand shock',           sub: 'A rise in demand shifts AR and MR right → higher Q and higher P. Profit usually expands.' },
        { tone: 'purple', label: 'Fixed vs variable',      sub: 'Lump-sum costs hit profit but not Q or P. Per-unit costs change MC → ripple through to price and output.' }
      ],
      body: 'All profit analysis is built on the MR = MC condition. To analyse any change:<br><br><strong>Step 1:</strong> Identify what has changed — cost side (MC or AC) or revenue side (AR/MR).<br><strong>Step 2:</strong> Draw or redraw the relevant curve(s).<br><strong>Step 3:</strong> Find the new MR = MC intersection → new Q*.<br><strong>Step 4:</strong> Read off the new price from the demand curve at Q*.<br><strong>Step 5:</strong> Compare AC at new Q* with P → new profit per unit. Calculate profit rectangle: (P − AC) \xd7 Q*.<br><br><strong>Key principle:</strong> A change in fixed costs does NOT change the profit-maximising output. Fixed costs shift AC (and hence the profit rectangle) but do NOT shift MC. Since MR = MC determines Q*, and MC hasn\'t moved, Q* and P are unchanged. Only profit (the rectangle) changes.',
      keyTerms: [
        { term: 'Profit-maximising output Q*', def: 'The output where MR = MC. This is the starting point for all profit analysis.' },
        { term: 'Profit rectangle', def: '(P − AC) \xd7 Q* — the area showing supernormal profit or loss on a diagram.' },
        { term: 'Fixed cost change', def: 'Shifts AC but NOT MC. Does not change Q* or P — only changes the profit rectangle area.' }
      ],
      examEdge: 'A lump-sum tax (fixed cost) does not change the profit-maximising output or price because it does not change MC. The firm cannot pass it on to consumers by raising price — the MR = MC intersection is unchanged. A per-unit tax (variable cost) DOES change MC → shifts Q* and P → can be partially passed on to consumers. This distinction is the most commonly tested tax incidence point in profit analysis questions.'
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
        { label: 'Profit effect', text: 'Higher price and higher quantity → TR increases substantially. TC increases (more output) but less than proportionally if AC is flat or falling. Net effect: profit increases. Profit rectangle is larger — wider (more Q) and taller (higher P − AC margin).' }
      ],
      examEdge: 'The asymmetry between cost changes and demand changes is important. Cost increase: Q falls, P rises (partial offset). Demand increase: Q rises, P rises (both move in profit-positive direction). This means demand increases are more powerful profit drivers than equivalent cost reductions: a 10% demand increase raises both output AND price, while a 10% cost reduction raises output and lowers price (partially offsetting revenue effect). Understanding this asymmetry distinguishes nuanced analysis.'
    },
    {
      id: 'profit_cost_changes_4',
      template: 'framing',
      title: 'Tax Incidence: Per-Unit vs Lump-Sum',
      body: 'Taxes are a key application of cost change analysis. Two types with very different effects:<br><br><strong>Per-unit (specific) tax:</strong> e.g., £x per unit sold (excise duties on alcohol, tobacco, petrol). This is a variable cost — shifts MC upward by the tax rate. New Q* is lower; P rises but by less than the full tax. Tax is split between producer (lower profit per unit) and consumer (higher price). Split depends on PED: inelastic demand → more passed to consumer; elastic demand → more borne by producer.<br><br><strong>Lump-sum tax:</strong> e.g., corporation tax, fixed annual licence fee. This is a fixed cost — shifts AC but NOT MC. New Q* and P are unchanged. Producer bears the entire tax through lower profit. Cannot be passed to consumers.<br><br>Conclusion: per-unit taxes are the primary price-influencing tool; lump-sum taxes are pure profit extractions.',
      keyTerms: [
        { term: 'Per-unit tax', def: 'Tax per unit produced or sold — shifts MC up. Raises price and reduces quantity. Shared between producer and consumer.' },
        { term: 'Lump-sum tax', def: 'Fixed tax independent of output — shifts AC but not MC. No change in Q* or P. Fully borne by producer.' },
        { term: 'Tax incidence', def: 'The division of a tax burden between producers and consumers — determined by relative PED.' }
      ],
      examEdge: 'Petrol duty (per-unit tax): MC shifts up → price rises → consumers pay more. Retailer\'s margin is squeezed → producer bears some. PED for petrol is inelastic ≈ −0.3, so most of duty is passed to consumers. UK petrol duty is ≈ 53p/litre — approximately 50% of the pump price. Corporation tax (lump-sum tax for a given profit level): does not affect MC → no change in output or price → fully borne by shareholders through lower post-tax profit. This distinction is why economists prefer per-unit Pigouvian taxes on externalities (they do change behaviour) over lump-sum taxes (which don\'t).'
    },
    {
      id: 'profit_cost_changes_5',
      template: 'framing',
      title: 'Cost Reduction and Innovation',
      body: 'A fall in variable costs (e.g., through process innovation, improved productivity, cheaper inputs) shifts MC downward. Effects:<br><br>• MC shifts down → new intersection with MR at higher Q**<br>• Price falls slightly (competitive markets) or partially (monopoly/oligopoly)<br>• Profit increases — lower AC improves the profit margin at each output level<br><br><strong>Dynamic efficiency through cost reduction:</strong> firms invest in R&D to achieve process innovations that lower MC. This gives a first-mover cost advantage — incumbent with lower costs can undercut new entrants or earn higher profit at the same price.<br><br><strong>Productive efficiency distinction:</strong> cost reduction moves AC downward (a genuine improvement in productive efficiency). Moving along the AC curve to its minimum is also productive efficiency — these are different routes to lower unit cost.',
      keyTerms: [
        { term: 'Process innovation', def: 'Reducing the cost of producing existing products — shifts MC and AC downward at every output level.' },
        { term: 'Cost advantage', def: 'A firm with lower MC than rivals can undercut on price, increase output, or earn higher profit — strategic competitive tool.' },
        { term: 'Learning by doing', def: 'Unit costs fall as cumulative production experience grows — dynamic cost reduction from scale and learning.' }
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
      footer: 'Oligopoly: depends on strategic response. If rivals match cost increase — all raise prices together (tacit coordination). If one firm faces cost increase alone — complex strategic response. Game theory framework applies.',
      examEdge: 'The key difference between perfect competition and monopoly response to demand increase: in perfect competition, entry erodes the profit and price returns to min AC. In monopoly, no entry → supernormal profit persists. This is the same long-run difference that justifies competition policy — the ability to sustain profit in the face of demand growth is the mark of persistent market power.'
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
          'Prevents profit margin being eroded — protects shareholders',
          'Risk: if demand is elastic, higher price loses significant sales → revenue falls',
          'Example: energy companies raised prices sharply during 2022 gas crisis — inelastic demand'
        ]
      },
      right: {
        label: 'Absorb the cost (margin squeeze)',
        points: [
          'Necessary when demand is elastic — raising price would lose too many customers',
          'Competitive markets: rival firms hold price → cannot pass on without losing market share',
          'Strategic: accept lower short-run profit to maintain market share and long-run position',
          'May trigger cost-cutting internally (efficiency improvements)',
          'Example: supermarkets during 2022 inflation initially absorbed costs to maintain price positioning'
        ]
      },
      examEdge: 'The supermarket response to 2022-23 food inflation illustrates both strategies in one industry. Discounters (Aldi, Lidl) with lower cost bases held prices more effectively. Premium supermarkets (Waitrose) absorbed more cost to protect brand positioning. Mid-market (Tesco, Sainsbury\'s) mixed strategies — selective price holding in visible categories, passing costs elsewhere. The strategic response depends on competitive position, brand identity, and demand elasticity — not just market structure.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }
  ]
};
