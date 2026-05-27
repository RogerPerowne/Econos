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
