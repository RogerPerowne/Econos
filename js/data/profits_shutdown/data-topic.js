window.ECONOS_TOPIC = {
  id: 'profits_shutdown',
  topicNum: '3.4',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Profits & Losses',
  estTime: '10-12 minutes',
  goal: 'Lock in profit calculation, the shutdown rule, how to read profit/loss rectangles on diagrams, and how cost and demand changes affect the profit equilibrium.',
  intro: {
    heroKey: 'heroShortRunCosts',
    summary: 'Profit analysis is the backbone of all market structure diagrams. Normal vs supernormal profit, the shutdown rule, reading profit rectangles, and understanding how cost or demand shocks shift the profit-maximising equilibrium — these skills are tested in every Topic 3 exam question.',
    doInThis: 'Work through 11 cards covering profit types, the shutdown condition, reading diagrams, contribution analysis, profit across market structures, and how changes in costs and revenues affect profit-maximising output, price, and profit.',
    outcomes: [
      'Calculate profit as TR − TC and identify normal/supernormal profit and loss on diagrams',
      'Explain the shutdown rule: produce in short run if P ≥ AVC; close if P < AVC',
      'Analyse how cost increases and demand increases shift the profit-maximising equilibrium',
      'Distinguish per-unit taxes from lump-sum taxes and explain their different effects on output and price'
    ],
    tip: 'Profit = (P − AC) × Q = rectangle on diagram. Shutdown: P < AVC. Cost change: shifts MC → new Q* and P. Demand change: shifts AR and MR → new Q* and P. Fixed cost change: shifts AC only → no change in Q* or P, only profit.',
    stages: [
      { num: 1, name: 'Learn it', sub: '11 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'profits_shutdown_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 11',
      title: 'Profits and losses: the big picture',
      lede: 'Profit is the gap between revenue and cost — but the rule for when to keep producing during a loss surprises most students.',
      branches: [
        { tone: 'green',  label: 'Normal vs supernormal',    sub: 'Normal profit (P = AC) just covers opportunity cost. Supernormal (P > AC) attracts entry in competitive markets.' },
        { tone: 'amber',  label: 'The shutdown rule',        sub: 'In the short run, keep producing if P ≥ AVC — even at a loss. Below AVC, shutdown beats operating.' },
        { tone: 'blue',   label: 'Reading the diagram',      sub: 'Profit is always a rectangle: height (P − AC) by width Q*. The single most-tested visual skill in Theme 3.' },
        { tone: 'purple', label: 'Cost and demand changes',  sub: 'Cost shocks shift MC → new Q* and P. Demand shocks shift AR/MR → new Q* and P. Fixed costs shift AC only.' }
      ],
      body: '<strong>Economic profit</strong> = TR − TC (where TC includes normal profit as a cost).<br><br>• <strong>Normal profit:</strong> TR = TC → zero economic profit. Covers all costs including opportunity cost. P = AC on a diagram.<br>• <strong>Supernormal profit:</strong> TR > TC → P > AC. Attracts new entrants in competitive markets.<br>• <strong>Economic loss:</strong> TR < TC → P < AC. May or may not continue operating depending on whether variable costs are covered.<br><br><strong>Profit rectangle:</strong> Profit = (P − AC) \xd7 Q → rectangle on diagram between price line and AC curve, width Q*.',
      keyTerms: [
        { term: 'Supernormal profit', def: 'P > AC — firm earns above normal return. Signals under-supply. Attracts entry in competitive markets.' },
        { term: 'Normal profit', def: 'P = AC — zero economic profit; all costs including opportunity cost are covered. Long-run competitive equilibrium.' },
        { term: 'Economic loss', def: 'P < AC — TR insufficient to cover all economic costs. Short-run: continue if P ≥ AVC. Long-run: exit.' }
      ],
      examEdge: 'The economic vs accounting profit distinction is crucial for market structure analysis. "Breaking even" in economic terms means earning normal profit — not zero accounting profit. In long-run perfect competition, P = AC → zero economic profit = normal profit. This is the equilibrium, not a failure. Saying "competitive firms earn no profit" is wrong — they earn normal profit.'
    },
    {
      id: 'profits_shutdown_2',
      template: 'framing',
      stepLabel: 'Learn: Step 2 of 11',
      diagramKey: 'profitsShutdownDiagram',
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
      stepLabel: 'Learn: Step 3 of 11',
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
      stepLabel: 'Learn: Step 4 of 11',
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
      id: 'profits_shutdown_6',
      template: 'framing',
      stepLabel: 'Learn: Step 5 of 11',
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
      stepLabel: 'Learn: Step 6 of 11',
      title: 'Profit in Market Structures',
      body: 'How profit behaves across market structures depends on barriers to entry:<br><br><strong>Perfect competition (long run):</strong> supernormal profit → entry → supply rises → price falls → P = AC. Normal profit only in long run. Zero economic profit is the equilibrium.<br><br><strong>Monopoly (long run):</strong> barriers to entry prevent new competition → supernormal profit persists in long run. Monopoly profit = welfare transfer from consumers.<br><br><strong>Oligopoly:</strong> high barriers → supernormal profit possible but interdependence moderates outcomes. Collusion sustains monopoly-level profits; competition erodes them.<br><br><strong>Monopolistic competition (long run):</strong> differentiation creates short-run supernormal profit → entry → demand for each firm falls → P = AC (normal profit) but at less than MES.',
      keyTerms: [
        { term: 'Long-run competitive equilibrium', def: 'P = AC = MC. Normal profit. Maximum consumer surplus for that cost structure.' },
        { term: 'Supernormal profit persistence', def: 'Sustained in markets with barriers to entry — monopoly and oligopoly. Attracts but cannot be fully eroded by competition.' },
        { term: 'Entry and exit mechanism', def: 'The process by which competitive markets eliminate supernormal profit and economic losses in the long run.' }
      ],
      examEdge: 'The long-run profit outcome is the most important distinguishing feature between market structures: perfect competition → always normal profit long-run; monopoly → always supernormal; monopolistic competition → normal profit but at excess capacity. This should be stated explicitly at the end of any market structure essay — it summarises the welfare difference.'
    },

    /* ----- Changes in Costs and Revenues (merged from profit_cost_changes) ----- */
    {
      id: 'profit_cost_changes_1',
      template: 'framing',
      stepLabel: 'Learn: Step 7 of 11',
      title: 'Changes in costs and revenues: the framework',
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
      stepLabel: 'Learn: Step 8 of 11',
      title: 'Effect of a cost increase',
      intro: 'A rise in variable costs (e.g., raw material prices, wage costs) shifts the MC curve upward. Trace through the effects.',
      steps: [
        { label: 'MC shifts up', text: 'A rise in variable cost per unit shifts MC upward at every output level. The new MC curve is above the original.' },
        { label: 'New MR = MC intersection', text: 'The new, higher MC intersects MR at a LOWER quantity Q** < Q*. The firm reduces output.' },
        { label: 'New price', text: 'Reading off the demand curve at the new, lower Q**: price rises P** > P*. The firm passes some of the cost increase to consumers through a higher price.' },
        { label: 'Profit effect', text: 'Two effects on profit: (1) higher costs → AC shifts up; (2) price also rises. Net effect: profit usually falls (costs rise by more than revenue). The profit rectangle shrinks. With very inelastic demand, firm can pass on most of the cost → profit hit is smaller.' }
      ],
      examEdge: 'How much of a cost increase is passed to consumers depends on PED. Inelastic demand: firm can raise price significantly → passes most of cost increase to consumers → profit falls less. Elastic demand: raising price loses many customers → firm absorbs more of the cost → profit falls more. This is the tax incidence argument applied to cost changes.'
    },
    {
      id: 'profit_cost_changes_3',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 9 of 11',
      title: 'Effect of a demand increase',
      intro: 'A rise in demand for the firm\'s product shifts both AR and MR rightward/upward. Trace through the effects on output, price, and profit.',
      steps: [
        { label: 'Demand rises: AR and MR shift right', text: 'An increase in demand (consumer incomes rise, tastes change, rival exits) shifts the demand (AR) curve right. MR shifts right by the same horizontal distance.' },
        { label: 'New MR = MC intersection', text: 'The new MR intersects MC (unchanged) at a HIGHER quantity Q** > Q*. The firm increases output.' },
        { label: 'New price', text: 'At Q** on the new demand curve, price reads off at P** > P*. Both output and price increase.' },
        { label: 'Profit effect', text: 'Higher price and higher quantity → TR increases substantially. TC increases (more output) but less than proportionally if AC is flat or falling. Net effect: profit increases. Profit rectangle is larger — wider (more Q) and taller (higher P − AC margin).' }
      ],
      examEdge: 'Cost increase: Q falls, P rises (partial offset). Demand increase: Q rises, P rises (both move in profit-positive direction). Demand increases are more powerful profit drivers — a 10% demand increase raises both output AND price, while a 10% cost reduction raises output and lowers price (partially offsetting revenue effect).'
    },
    {
      id: 'profit_cost_changes_4',
      template: 'framing',
      stepLabel: 'Learn: Step 10 of 11',
      title: 'Tax incidence: per-unit vs lump-sum',
      body: 'Taxes are a key application of cost change analysis. Two types with very different effects:<br><br><strong>Per-unit (specific) tax:</strong> e.g., £x per unit sold (excise duties on alcohol, tobacco, petrol). This is a variable cost — shifts MC upward by the tax rate. New Q* is lower; P rises but by less than the full tax. Tax is split between producer (lower profit per unit) and consumer (higher price). Split depends on PED: inelastic demand → more passed to consumer; elastic demand → more borne by producer.<br><br><strong>Lump-sum tax:</strong> e.g., corporation tax, fixed annual licence fee. This is a fixed cost — shifts AC but NOT MC. New Q* and P are unchanged. Producer bears the entire tax through lower profit. Cannot be passed to consumers.<br><br>Conclusion: per-unit taxes are the primary price-influencing tool; lump-sum taxes are pure profit extractions.',
      keyTerms: [
        { term: 'Per-unit tax', def: 'Tax per unit produced or sold — shifts MC up. Raises price and reduces quantity. Shared between producer and consumer.' },
        { term: 'Lump-sum tax', def: 'Fixed tax independent of output — shifts AC but not MC. No change in Q* or P. Fully borne by producer.' },
        { term: 'Tax incidence', def: 'The division of a tax burden between producers and consumers — determined by relative PED.' }
      ],
      examEdge: 'Petrol duty (per-unit tax): MC shifts up → price rises → consumers pay more. PED for petrol is inelastic ≈ −0.3, so most of duty is passed to consumers. Corporation tax (lump-sum tax for a given profit level): does not affect MC → no change in output or price → fully borne by shareholders through lower post-tax profit. This distinction is why economists prefer per-unit Pigouvian taxes on externalities (they do change behaviour) over lump-sum taxes (which don\'t).'
    },
    {
      id: 'profit_cost_changes_7',
      template: 'paired',
      stepLabel: 'Learn: Step 11 of 11',
      title: 'Evaluation: how firms respond to cost changes',
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
      examEdge: 'The supermarket response to 2022-23 food inflation illustrates both strategies in one industry. Discounters (Aldi, Lidl) with lower cost bases held prices more effectively. Premium supermarkets (Waitrose) absorbed more cost to protect brand positioning. Mid-market (Tesco, Sainsbury\'s) mixed strategies. The strategic response depends on competitive position, brand identity, and demand elasticity — not just market structure.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
