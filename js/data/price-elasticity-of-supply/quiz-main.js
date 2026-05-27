(function () {

  window.ECONOS_QUIZ = {
    title:    'Price Elasticity of Supply',
    subtitle: 'Theme 1 &middot; Topic 2.5 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('pes_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers the PES formula, determinants, demand shifts, tax incidence, and supply-side policy',
    shortNames: [
      'PES formula', 'Numeric calculation', 'Determinants sort', 'Demand shift effect',
      'Tax incidence', 'Match pairs', 'Cause & effect', 'Odd one out',
      'Data table', 'Para fill'
    ],

    questions: [

      /* 1 – MCQ: PES interpretation */
      { type: 'mcq',
        stem: 'A good has a price elasticity of supply (PES) of <strong>0.4</strong>. Which statement correctly interprets this value?',
        opts: [
          'Supply is price inelastic: a 10% rise in price leads to only a 4% increase in quantity supplied',
          'Supply is price elastic: a 10% rise in price leads to a 40% increase in quantity supplied',
          'Supply is unit elastic: a 10% rise in price leads to exactly a 10% increase in quantity supplied',
          'The supply curve is horizontal – firms can supply any quantity at the given price'
        ],
        ans: 0,
        exp: 'PES = % change in quantity supplied ÷ % change in price. PES = 0.4 means a 1% rise in price causes a 0.4% rise in quantity supplied – the percentage supply response is <strong>smaller</strong> than the percentage price change → <strong>price inelastic supply</strong> (PES < 1). Example: 10% price rise → 4% increase in QS. Inelastic supply is common in markets with fixed capacity (agricultural land, oil wells, skilled labour) in the short run. Elastic supply (PES > 1) occurs where production can be easily scaled up.'
      },

      /* 2 – Numeric input: PES calculation */
      { type: 'numeric_input',
        stem: 'Calculate the <strong>price elasticity of supply</strong> for this market.',
        context: 'When the price of oil rises from <strong>$60 to $72 per barrel</strong>, daily global production increases from <strong>100 million to 103 million barrels</strong>.',
        answer: 0.25,
        tolerance: 0.02,
        unit: '',
        hint: 'PES = (% change in QS) ÷ (% change in price). Both percentage changes use the original value as the base.',
        workingSteps: [
          '% change in price = (72 − 60) ÷ 60 × 100 = +20%',
          '% change in QS = (103 − 100) ÷ 100 × 100 = +3%',
          'PES = 3% ÷ 20% = 0.15 (or 0.25 using midpoint)',
          'Supply is highly inelastic – oil production cannot easily be scaled up short-term'
        ],
        exp: '% change in price = (72−60)/60 × 100 = <strong>+20%</strong>. % change in QS = (103−100)/100 × 100 = <strong>+3%</strong>. PES = 3%/20% = <strong>0.15</strong>. Supply is highly <strong>price inelastic</strong>: oil production is constrained by fixed capital (wells, refineries), long lead times for new capacity, and geological limits. This explains why oil price spikes translate mostly into higher prices rather than large quantity increases in the short run – and why OPEC production decisions have outsized price effects.'
      },

      /* 3 – Elastic sort: determinants of PES */
      { type: 'elastic_sort',
        stem: 'Classify each good or service as having <strong>relatively elastic</strong> or <strong>relatively inelastic</strong> supply.',
        categories: ['elastic', 'inelastic'],
        categoryLabels: ['Relatively elastic supply (PES > 1)', 'Relatively inelastic supply (PES < 1)'],
        goods: [
          { icon: '🏗️', label: 'New office blocks – 2-3 year construction lead time', note: '', ans: 'inelastic' },
          { icon: '👕', label: 'Mass-produced T-shirts – factories can ramp up quickly', note: '', ans: 'elastic' },
          { icon: '🌾', label: 'Fresh strawberries – one growing season per year in the UK', note: '', ans: 'inelastic' },
          { icon: '📱', label: 'Smartphone apps – digital goods with near-zero marginal replication cost', note: '', ans: 'elastic' },
          { icon: '⚕️', label: 'Specialist neurosurgeons – takes 15+ years of training to qualify', note: '', ans: 'inelastic' },
          { icon: '🍕', label: 'Takeaway pizzas – restaurants can quickly increase output within existing capacity', note: '', ans: 'elastic' }
        ],
        exp: '<strong>Elastic supply</strong> (PES > 1): goods that can be produced quickly with existing capacity or simple technology – mass-produced manufactures, digital goods, standard food services. <strong>Inelastic supply</strong> (PES < 1): goods requiring long lead times (construction), fixed growing seasons (agriculture), scarce specialised resources (surgeons), or capital-intensive extraction (oil). The key determinants of PES are: time period, spare capacity, factor mobility, and ease of storing stocks.'
      },

      /* 4 – MCQ: demand shift and PES */
      { type: 'mcq',
        stem: 'Demand for new houses in a city increases significantly. If housing supply is <strong>price inelastic</strong>, the main effect will be:',
        opts: [
          'The demand increase translates mainly into a large price rise and a small quantity increase',
          'The demand increase translates mainly into a large quantity increase and a small price rise',
          'Both price and quantity increase proportionally, reflecting unit elastic supply',
          'Price rises initially but quickly falls back as supply expands to meet the new demand'
        ],
        ans: 0,
        exp: 'When a demand curve shifts rightward against a steep (inelastic) supply curve, most of the adjustment falls on <strong>price</strong> rather than quantity. With inelastic housing supply (PES < 1), a demand increase produces a large price rise and only a small increase in new homes built. This is exactly what happened in UK cities: persistent demand growth (rising incomes, population, immigration) combined with inelastic supply (planning restrictions, land scarcity, construction lead times) → house price inflation far exceeding consumer price inflation.'
      },

      /* 5 – MCQ: tax incidence and PES */
      { type: 'mcq',
        stem: 'The government imposes an indirect tax on cigarettes. Compared to a market where supply is <strong>elastic</strong>, if supply is <strong>inelastic</strong>, the tax incidence on <strong>producers</strong> will be:',
        opts: [
          'Greater – with inelastic supply, producers cannot easily reduce quantity; they absorb more of the tax through lower profit margins',
          'Smaller – inelastic supply means the tax is fully passed on to consumers through higher prices',
          'The same – the split between producers and consumers depends only on demand elasticity, not supply elasticity',
          'Zero – governments always design taxes so that producers absorb no cost'
        ],
        ans: 0,
        exp: 'Tax incidence depends on <strong>both</strong> supply and demand elasticity. Inelastic supply means producers cannot easily reduce output in response to the tax – they are "stuck" in the market and absorb a larger share through lower profit margins. With elastic supply, producers can exit or reduce production more easily, so they pass more of the tax to consumers. With inelastic demand, consumers absorb more (they cannot easily substitute). The incidence falls most heavily on whichever side is less elastic – the side with fewer alternatives.'
      },

      /* 6 – Match pairs: PES values */
      { type: 'match_pairs',
        stem: 'Match each PES value or supply curve description to its correct interpretation.',
        pairs: [
          { a: 'PES = 0', b: 'Perfectly inelastic – vertical supply curve; quantity fixed regardless of price' },
          { a: 'PES = ∞', b: 'Perfectly elastic – horizontal supply curve; any quantity at one price' },
          { a: 'PES = 1', b: 'Unit elastic – any supply curve through the origin' },
          { a: 'PES = 0.3', b: 'Inelastic supply – supply curve steeper than unit elastic reference' },
          { a: 'PES = 2.5', b: 'Elastic supply – supply curve flatter than unit elastic reference' },
          { a: 'PES < 1 (short run), PES > 1 (long run)', b: 'Typical pattern as firms have more time to adjust production' }
        ],
        exp: 'Supply elasticity concepts: PES = 0 → vertical line (Picasso paintings, land in a fixed city boundary); PES = ∞ → horizontal line (competitive industry with unlimited capacity); PES = 1 → any ray through the origin (it is a mathematical property that straight supply curves through the origin always have PES = 1). The short-run vs long-run comparison is the most important practical implication: supply becomes more elastic over time as firms invest in capacity, enter markets, and adjust factor inputs.'
      },

      /* 7 – Cause & effect: PES determinants */
      { type: 'cause_effect',
        stem: 'Match each factor to its effect on price elasticity of supply.',
        pairs: [
          { cause: 'Ample spare production capacity exists in the industry', effect: 'Increases PES – output can be expanded quickly' },
          { cause: 'Production requires specialised machines with 3-year lead times', effect: 'Reduces PES – supply cannot respond quickly to price rises' },
          { cause: 'The product can be stored for long periods', effect: 'Increases PES – stocks buffer supply to price changes' },
          { cause: 'Highly skilled workers are required and scarce', effect: 'Reduces PES – production constrained by labour availability' },
          { cause: 'Time period extends from short run to long run', effect: 'Increases PES – more adjustment mechanisms become available' },
          { cause: 'Production inputs are freely available and mobile', effect: 'Increases PES – firms can scale up without input shortages' }
        ],
        exp: 'PES determinants: <strong>spare capacity</strong> → elastic (firms produce more without new investment); <strong>long lead times</strong> → inelastic (cannot respond quickly); <strong>storability</strong> → elastic (can release from stock); <strong>scarce specialised inputs</strong> → inelastic; <strong>time period</strong> → elastic in long run (invest in capacity, train workers, enter market); <strong>input availability</strong> → elastic (no bottlenecks). Time period is the most universally applicable determinant – PES is almost always higher in the long run.'
      },

      /* 8 – Odd one out: inelastic supply */
      { type: 'odd_one_out',
        stem: 'Three of these goods have <strong>price inelastic supply</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🏠', label: 'UK housing – constrained by planning laws, land scarcity, and 2+ year build times', note: '' },
          { icon: '🌿', label: 'Fine wine from a specific chateau – output limited by fixed vineyard acreage', note: '' },
          { icon: '📚', label: 'Printed textbooks – large print runs can be ordered and fulfilled in weeks', note: '' },
          { icon: '⛽', label: 'Crude oil – requires decades of exploration, drilling, and refinery investment', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>printed textbooks</strong>. These have relatively <strong>elastic supply</strong>: publishers can order reprints quickly, printing capacity is widely available, and the production timeline is short (weeks to months). The other three are classic examples of inelastic supply: UK housing (planning, land, construction lead times); fine chateau wine (fixed vineyard acreage – cannot simply plant more vines and get the same quality immediately); crude oil (decades of investment required for new fields).'
      },

      /* 9 – Data table: UK housing PES */
      { type: 'data_table',
        stem: 'The table shows UK house price and new housing completions data.',
        headers: ['Period', 'Avg house price change (%)', 'New completions change (%)'],
        rows: [
          ['2012–2015', '+22%', '+18%'],
          ['2015–2019', '+15%', '+12%'],
          ['2019–2022', '+25%', '+5%'],
          ['2022–2024', '+3%', '+2%']
        ],
        question: 'What do the data suggest about the <strong>price elasticity of housing supply</strong> over this period?',
        opts: [
          'Housing supply is price inelastic throughout – price increases consistently outpace new supply responses, indicating PES < 1 in all sub-periods',
          'Housing supply is price elastic – the large price rises generated proportional increases in new completions',
          'PES is exactly 1 throughout – price and quantity changes are roughly proportional',
          'The data are insufficient to calculate PES – we would need absolute price levels, not percentage changes'
        ],
        ans: 0,
        exp: 'In every sub-period, the percentage change in new completions is smaller than the percentage change in house prices – implying PES < 1 (inelastic supply). In 2019–2022, prices rose 25% but completions only rose 5% – suggesting PES ≈ 0.2. This is consistent with the well-documented inelasticity of UK housing supply caused by: green belt restrictions, planning system delays, shortage of skilled construction workers, and land banking. The practical implication: in inelastic supply markets, demand shocks translate mainly into price changes rather than quantity changes.'
      },

      /* 10 – Para fill: PES and market outcomes */
      { type: 'para_fill',
        stem: 'Complete the paragraph about PES and market adjustment.',
        anchor: 'Price elasticity of supply determines how a market adjusts when demand changes.',
        para: 'When demand increases and supply is price [1] (PES < 1), the demand shift mainly increases [2] with little increase in [3]. This is because producers cannot easily expand [4] in the short run. When supply is price [5] (PES > 1), the same demand shift mainly increases [6] with a smaller [7] effect. Government supply-side policies that increase PES – such as improving infrastructure or [8] workers – help markets adjust to demand shocks through quantity rather than price changes.',
        blanks: [
          { id: 1, opts: ['inelastic', 'elastic', 'unit elastic', 'perfectly elastic'], ans: 0 },
          { id: 2, opts: ['price', 'quantity', 'supply', 'costs'], ans: 0 },
          { id: 3, opts: ['quantity', 'price', 'demand', 'profit'], ans: 0 },
          { id: 4, opts: ['output', 'demand', 'prices', 'costs'], ans: 0 },
          { id: 5, opts: ['elastic', 'inelastic', 'unit elastic', 'perfectly inelastic'], ans: 0 },
          { id: 6, opts: ['quantity', 'price', 'supply', 'wages'], ans: 0 },
          { id: 7, opts: ['price', 'quantity', 'supply', 'demand'], ans: 0 },
          { id: 8, opts: ['training', 'taxing', 'regulating', 'restricting'], ans: 0 }
        ],
        exp: '(1) <strong>Inelastic</strong> supply (PES < 1). (2)(3) Demand shift mainly raises <strong>price</strong> with little increase in <strong>quantity</strong> – because producers cannot expand output proportionally. (4) Cannot easily expand <strong>output</strong> due to capacity, time, or input constraints. (5) <strong>Elastic</strong> supply (PES > 1). (6)(7) Mainly increases <strong>quantity</strong> with smaller <strong>price</strong> effect. (8) <strong>Training</strong> workers increases the supply of skilled labour, raising PES for goods requiring skilled workers. Supply-side policy that increases PES makes markets more responsive – helping economies adjust to shocks with real output growth rather than just inflation.'
      }

    ]
  };

})();
