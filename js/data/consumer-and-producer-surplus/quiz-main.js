(function () {

  window.ECONOS_QUIZ = {
    title:    'Consumer &amp; Producer Surplus',
    subtitle: 'Theme 1 &middot; Topic 2.8 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('consumer_producer_surplus_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers CS and PS definitions, calculation, total welfare, deadweight loss, and policy effects on surplus',
    shortNames: [
      'CS definition MCQ', 'PS definition MCQ', 'Numeric CS', 'Total welfare',
      'DWL from tax', 'Price ceiling effect', 'Match pairs', 'Cause & effect',
      'Odd one out', 'Data table'
    ],

    questions: [

      /* 1 – MCQ: consumer surplus */
      { type: 'mcq',
        stem: '<strong>Consumer surplus</strong> is best defined as:',
        opts: [
          'The difference between what consumers are willing to pay (maximum willingness to pay) and what they actually pay (market price) – the welfare gain from market exchange',
          'The profit earned by consumers from buying goods at prices below the cost of production',
          'The total amount that consumers spend in a market in any given period',
          'The difference between the highest price charged and the lowest price charged for the same good'
        ],
        ans: 0,
        exp: '<strong>Consumer surplus (CS)</strong>: for each unit purchased, the consumer\'s welfare gain = (maximum WTP − price paid). CS is the area below the demand curve and above the market price – the triangle between the demand curve, the price level, and the quantity axis (up to equilibrium quantity). CS represents the "bonus" to consumers from market exchange – the gain above what was paid. A lower market price increases CS; a higher price decreases it. CS is the welfare measure used to assess consumer gains from markets, price changes, and policy interventions.'
      },

      /* 2 – MCQ: producer surplus */
      { type: 'mcq',
        stem: '<strong>Producer surplus</strong> is best defined as:',
        opts: [
          'The difference between the price received by producers (market price) and their minimum acceptable price (marginal cost) – the welfare gain from selling in the market',
          'The total revenue earned by firms in a market – the sum of all prices received for goods sold',
          'The profit earned by firms after all costs are deducted – synonymous with economic profit',
          'The difference between the market price and the average cost of production for all firms'
        ],
        ans: 0,
        exp: '<strong>Producer surplus (PS)</strong>: for each unit sold, the firm\'s welfare gain = (price received − minimum acceptable price, i.e. marginal cost). PS is the area above the supply curve and below the market price – the triangle between the supply curve, the price level, and the quantity axis. PS is NOT the same as profit (which deducts fixed costs); PS = total revenue − variable costs. A higher market price increases PS; a lower price decreases it. Together, CS + PS = total welfare (total surplus) in the market – the measure of net gains from trade.'
      },

      /* 3 – Numeric input: consumer surplus calculation */
      { type: 'numeric_input',
        stem: 'Calculate the <strong>consumer surplus</strong> (£) in this market.',
        context: 'In a competitive market for concert tickets: maximum WTP = £100 (top of demand curve); equilibrium market price = £40; equilibrium quantity = 500 tickets sold. Assume a straight-line (linear) demand curve.',
        answer: 15000,
        tolerance: 500,
        unit: '£',
        hint: 'CS = ½ × (max WTP − market price) × equilibrium quantity. This is the area of the triangle above price and below demand curve.',
        workingSteps: [
          'Height of CS triangle = max WTP − market price = £100 − £40 = £60',
          'Base of CS triangle = equilibrium quantity = 500 tickets',
          'CS = ½ × base × height = ½ × 500 × £60 = £15,000'
        ],
        exp: 'CS = ½ × (£100 − £40) × 500 = ½ × £60 × 500 = <strong>£15,000</strong>. This is the area of the triangle above the market price and below the demand curve. Each ticket purchaser enjoys a welfare gain equal to their WTP minus the £40 they paid – ranging from £60 for the highest-WTP buyer (who valued it at £100) to £0 for the marginal buyer (who valued it at exactly £40). Total CS is the sum of all individual surpluses = £15,000. If price falls to £30, CS increases; if a concert is cancelled entirely (zero provision), CS falls to zero.'
      },

      /* 4 – MCQ: total welfare */
      { type: 'mcq',
        stem: 'In a competitive market at equilibrium, <strong>total economic welfare</strong> (total surplus) equals:',
        opts: [
          'Consumer surplus + producer surplus – the sum of all gains from trade to both buyers and sellers',
          'Consumer surplus only – producer surplus is not counted as it reflects profit extraction rather than genuine welfare',
          'Producer surplus only – firms are the creators of value so their surplus is the true welfare measure',
          'Total revenue – this represents the total value created by market exchange'
        ],
        ans: 0,
        exp: '<strong>Total welfare (W) = CS + PS</strong>. This is maximised at the competitive equilibrium where supply = demand. CS captures the welfare gains to buyers; PS captures the welfare gains to sellers. Both are genuine welfare measures: CS reflects the "bonus" to consumers (paid less than they were willing to); PS reflects the "bonus" to producers (received more than their minimum acceptable price). Policies that reduce total welfare (taxes not correcting externalities, price controls, monopoly pricing) create a <strong>deadweight welfare loss</strong> – the reduction in (CS + PS) that is not transferred to anyone else.'
      },

      /* 5 – MCQ: deadweight loss from tax */
      { type: 'mcq',
        stem: 'A non-corrective indirect tax reduces <strong>consumer surplus</strong>, <strong>producer surplus</strong>, and creates a <strong>deadweight welfare loss</strong>. Which of the following correctly accounts for all these effects?',
        opts: [
          'CS falls (higher consumer price); PS falls (lower producer net price); the tax revenue (CS + PS transferred to government) and deadweight loss (triangle of lost trades) together account for the full reduction in (CS + PS)',
          'CS falls; PS is unchanged because producers simply pass the full tax to consumers; DWL equals the tax revenue collected',
          'CS is unchanged; PS falls by the full amount of the tax; DWL equals the change in PS',
          'Both CS and PS fall by identical amounts; DWL is zero because the tax revenue exactly equals the combined CS and PS reduction'
        ],
        ans: 0,
        exp: 'An indirect tax: <strong>CS falls</strong> (consumer price rises); <strong>PS falls</strong> (producer net price falls); the reduction in (CS + PS) = <strong>tax revenue</strong> (transferred to government) + <strong>DWL</strong> (pure welfare loss from suppressed trades). The DWL is the triangle between the pre-tax and post-tax equilibria – trades that were mutually beneficial (WTP > MC) but are suppressed by the tax-inclusive price. Total: reduction in CS + reduction in PS = government revenue + DWL. This accounting identity is essential for welfare analysis of taxation.'
      },

      /* 6 – MCQ: price ceiling and welfare */
      { type: 'mcq',
        stem: 'A price ceiling set <strong>below</strong> the equilibrium price: what happens to <strong>consumer surplus</strong>?',
        opts: [
          'CS is ambiguous – some consumers gain (those who can still buy pay less); but CS is lost for consumers who can no longer find the good due to the shortage the ceiling creates',
          'CS definitely increases – all consumers pay less, so all consumer surplus increases unambiguously',
          'CS definitely decreases – lower prices mean consumers value the good less, reducing their welfare',
          'CS is unchanged – the price ceiling transfers welfare from producers to consumers dollar for dollar'
        ],
        ans: 0,
        exp: 'Price ceiling below equilibrium: the controlled price is lower than P* → some CS is gained by those who can still buy (rectangle between old and new price). But the shortage (QD > QS at controlled price) means some consumers who would have bought at P* cannot find the good → their CS is lost. Net effect on CS is <strong>ambiguous</strong>: if the quantity reduction is large relative to the price saving, CS may fall overall. PS definitely falls (lower price and possibly lower quantity). A DWL triangle emerges (trades between P* quantity and QS quantity that no longer occur). The price ceiling is not a "free" benefit to consumers – it has welfare costs.'
      },

      /* 7 – Match pairs: welfare concepts */
      { type: 'match_pairs',
        stem: 'Match each concept to its definition in welfare analysis.',
        pairs: [
          { a: 'Consumer surplus', b: 'Area below demand curve and above market price – welfare gain to buyers' },
          { a: 'Producer surplus', b: 'Area above supply curve and below market price – welfare gain to sellers' },
          { a: 'Total welfare (total surplus)', b: 'CS + PS – maximised at competitive equilibrium' },
          { a: 'Deadweight welfare loss', b: 'Loss of welfare not transferred to anyone – pure efficiency cost of market distortion' },
          { a: 'Allocative efficiency', b: 'Resources allocated to uses where MSB = MSC – all beneficial trades occur; DWL = 0' },
          { a: 'Price discrimination', b: 'Charging different prices to different consumers – converts CS into PS' }
        ],
        exp: 'Welfare analysis vocabulary: CS and PS together = total surplus, maximised at competitive equilibrium where supply = demand (P = MC = MB). Any distortion (monopoly, tax, price control not correcting an externality) reduces total surplus, creating DWL. <strong>Allocative efficiency</strong> requires DWL = 0 (all beneficial trades occurring). <strong>Price discrimination</strong>: allows firms to extract CS – a redistribution from consumers to producers that may or may not change total welfare depending on whether it allows additional trades.'
      },

      /* 8 – Cause & effect: policies and welfare */
      { type: 'cause_effect',
        stem: 'Match each policy to its effect on consumer surplus, producer surplus, and total welfare.',
        pairs: [
          { cause: 'Monopoly restricts output and raises price above MC', effect: 'CS falls; PS may rise (transfer from consumers); DWL created – total welfare falls' },
          { cause: 'Government introduces per-unit production subsidy (no externality)', effect: 'CS rises (lower price); PS rises (higher effective price); total welfare falls (DWL from overproduction)' },
          { cause: 'Competitive market reaches equilibrium without intervention', effect: 'CS + PS maximised; no DWL; allocative efficiency achieved' },
          { cause: 'Corrective Pigouvian tax on negative externality', effect: 'CS falls; PS falls; tax revenue collected; DWL eliminated; total social welfare rises' },
          { cause: 'Price floor above equilibrium (minimum wage)', effect: 'Some PS rises (higher wage for those employed); CS may fall; DWL if employment falls' },
          { cause: 'Perfect price discrimination by monopolist', effect: 'All CS converted to PS; total welfare same as competitive outcome; distribution shifts to firm' }
        ],
        exp: 'Welfare analysis applied: <strong>monopoly</strong> – DWL from restricted output (classic inefficiency); <strong>non-corrective subsidy</strong> – DWL from overproduction; <strong>competitive equilibrium</strong> – optimal (no DWL); <strong>corrective tax</strong> – removes DWL from externality (increases social welfare even as CS and PS fall); <strong>price floor</strong> – DWL from reduced quantity; <strong>perfect price discrimination</strong> – no quantity DWL but massive distributional shift. Always ask: does an intervention create or eliminate a DWL? Corrective policies eliminate existing DWL; non-corrective policies create new DWL.'
      },

      /* 9 – Odd one out: effects on consumer surplus */
      { type: 'odd_one_out',
        stem: 'Three of these would <strong>increase consumer surplus</strong> in a market. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '📉', label: 'Market price falls due to a rightward shift in supply (technology improvement)', note: '' },
          { icon: '🏛️', label: 'A per-unit production subsidy lowers the market price paid by consumers', note: '' },
          { icon: '📈', label: 'The market price rises due to a leftward shift in supply (input cost increase)', note: '' },
          { icon: '✅', label: 'New firms enter the market, increasing competition and driving down prices', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>market price rising due to a supply contraction</strong>. A higher price reduces consumer surplus – consumers pay more and the area between the demand curve and price line shrinks. The other three all lower the market price, increasing CS: technology improvement shifts supply right → lower equilibrium price → higher CS; production subsidy shifts supply right → lower consumer price → higher CS; new firm entry increases competition → lower prices → higher CS. Consumer surplus moves inversely with price: lower price → higher CS; higher price → lower CS.'
      },

      /* 10 – Data table: monopoly vs competition welfare */
      { type: 'data_table',
        stem: 'The table compares market outcomes under perfect competition and monopoly.',
        headers: ['Market structure', 'Price', 'Quantity', 'Consumer Surplus', 'Producer Surplus', 'DWL'],
        rows: [
          ['Perfect competition', '£20', '1,000', '£5,000', '£2,500', '£0'],
          ['Monopoly', '£30', '600', '£1,800', '£4,200', '£1,500'],
          ['Change (monopoly vs competition)', '+£10', '−400', '−£3,200', '+£1,700', '+£1,500']
        ],
        question: 'Which conclusion is <strong>best supported</strong> by the data?',
        opts: [
          'Monopoly transfers £1,700 of CS to PS (producer gains at consumer expense) and destroys £1,500 of welfare as DWL – total welfare is lower under monopoly by £1,500; the monopolist gains less than consumers lose',
          'Monopoly is more efficient because producer surplus is higher under monopoly than perfect competition',
          'The DWL of £1,500 equals the consumer surplus loss – all CS is destroyed by the monopoly',
          'The data show that consumers are better off under monopoly because fewer units are produced and higher prices indicate greater quality'
        ],
        ans: 0,
        exp: 'The data show the standard monopoly welfare analysis: CS falls by £3,200 (consumers pay more for fewer units). PS rises by £1,700 (the monopolist captures this from consumers through higher price). DWL = £1,500 (the 400 units of suppressed output where MB > MC – pure welfare loss). Accounting: CS loss (£3,200) = PS gain (£1,700) + DWL (£1,500). The transfer from CS to PS is a distributional effect – not a welfare loss itself. The DWL is the real efficiency cost of monopoly. Total welfare falls by £1,500 – the competitive outcome maximises (CS + PS). This is the core economic case against monopoly power: it creates DWL by restricting output below the social optimum.'
      }

    ]
  };

})();
