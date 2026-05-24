(function () {

  window.ECONOS_QUIZ = {
    id:       'ped_main',
    topicId:  'ped_main',
    title:    'Price Elasticity of Demand',
    subtitle: 'Introduction to Markets and Market Failure',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'ped' }),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers the PED formula, determinants, total revenue, tax incidence, special cases, and short- vs long-run elasticity',
    shortNames: [
      'PED formula', 'PED numeric', 'Determinants cause/effect', 'PED & total revenue',
      'Tax incidence', 'Categorise goods', 'Match special cases', 'Short vs long run',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 — MCQ: PED interpretation */
      { type: 'mcq',
        id: 'ped-q1',
        stem: 'A good has a price elasticity of demand of <strong>−0.4</strong>. Which statement correctly interprets this value?',
        opts: [
          'Demand is price inelastic: a 10% rise in price causes only a 4% fall in quantity demanded',
          'Demand is price elastic: a 10% rise in price causes a 40% fall in quantity demanded',
          'Demand is unit elastic: a 10% rise in price causes exactly a 10% fall in quantity demanded',
          'The demand curve is horizontal — consumers will buy any quantity at the given price'
        ],
        ans: 0,
        exp: 'PED = % change in quantity demanded ÷ % change in price. PED = −0.4 means a 1% rise in price causes a 0.4% fall in quantity demanded — the percentage demand response is <strong>smaller</strong> than the percentage price change → <strong>price inelastic demand</strong> (|PED| < 1). Example: 10% price rise → 4% fall in QD. The negative sign reflects the inverse relationship between price and quantity demanded (law of demand); when classifying elasticity we use the absolute value. Inelastic demand is common for necessities, addictive goods, and products with few substitutes (energy, prescribed medicines, salt).'
      },

      /* 2 — Numeric input: PED calculation */
      { type: 'numeric_input',
        id: 'ped-q2',
        stem: 'Calculate the <strong>price elasticity of demand</strong> for this market.',
        context: 'When the price of a branded breakfast cereal rises from <strong>£3.00 to £3.30</strong> per box, weekly sales fall from <strong>200,000 to 170,000</strong> boxes.',
        answer: -1.5,
        tolerance: 0.05,
        unit: '',
        hint: 'PED = (% change in QD) ÷ (% change in price). Use the original values as the base for each percentage change.',
        workingSteps: [
          '% change in price = (3.30 − 3.00) ÷ 3.00 × 100 = +10%',
          '% change in QD = (170,000 − 200,000) ÷ 200,000 × 100 = −15%',
          'PED = −15% ÷ +10% = −1.5',
          '|PED| = 1.5 > 1 → demand is price elastic'
        ],
        exp: '% change in price = (3.30−3.00)/3.00 × 100 = <strong>+10%</strong>. % change in QD = (170,000−200,000)/200,000 × 100 = <strong>−15%</strong>. PED = −15%/+10% = <strong>−1.5</strong>. Since |PED| = 1.5 > 1, demand is <strong>price elastic</strong>. This makes sense for a branded cereal — consumers can easily switch to competitor brands or supermarket own-label alternatives. The revenue implication: TR before = £600,000; TR after = £561,000. Total revenue <strong>falls by £39,000</strong>, confirming the elastic-demand → price-rise → TR-falls rule.'
      },

      /* 3 — Cause & effect: PED determinants */
      { type: 'cause_effect',
        id: 'ped-q3',
        stem: 'Match each factor to its effect on the price elasticity of demand for a good.',
        pairs: [
          { cause: 'Many close substitutes are available', effect: 'Increases |PED| — consumers can easily switch when price rises' },
          { cause: 'The good is addictive (e.g. tobacco, caffeine)', effect: 'Reduces |PED| — habitual consumers continue buying despite higher prices' },
          { cause: 'The good takes a large share of household income', effect: 'Increases |PED| — consumers are more sensitive to price changes that hit their budget hard' },
          { cause: 'Consumers have a long time to adjust to a price change', effect: 'Increases |PED| — substitutes are found and habits change over time' },
          { cause: 'The good is a necessity with no realistic alternative', effect: 'Reduces |PED| — consumers must keep buying regardless of price' },
          { cause: 'The good is narrowly defined (e.g. Heinz baked beans, not "beans")', effect: 'Increases |PED| — substitutes are other brands of the same product' }
        ],
        exp: 'PED determinants (SPLAT mnemonic — Substitutes, Proportion of income, Luxury/necessity, Addictiveness, Time): <strong>Substitutes</strong> is the most important — more substitutes → more elastic. <strong>Proportion of income</strong>: high-share items face elastic demand (cars, holidays). <strong>Necessities</strong>: inelastic (insulin, electricity). <strong>Addictiveness</strong>: inelastic (cigarettes, heroin). <strong>Time</strong>: demand becomes more elastic in the long run as substitutes are discovered. <strong>Definition</strong>: narrowly-defined goods (one brand) are more elastic than broadly-defined goods (a whole category).'
      },

      /* 4 — MCQ: PED and total revenue */
      { type: 'mcq',
        id: 'ped-q4',
        stem: 'A firm sells a product with <strong>price elastic demand</strong> (|PED| = 2.5). It is considering a 10% price increase. What happens to <strong>total revenue</strong>?',
        opts: [
          'TR falls — the 10% price rise reduces QD by approximately 25%, and the revenue loss from reduced sales exceeds the gain from the higher price',
          'TR rises — any price increase raises revenue because the firm receives more per unit sold',
          'TR is unchanged — the price increase exactly offsets the fall in quantity demanded',
          'TR rises slightly — elastic demand means consumers are price-sensitive but still buy almost the same amount'
        ],
        ans: 0,
        exp: 'With |PED| = 2.5, a 10% price rise causes approximately a 25% fall in QD (10% × 2.5 = 25%). TR = P × Q. The revenue gain from +10% price is outweighed by the revenue loss from −25% quantity → <strong>TR falls</strong>. The <strong>inverse-elasticity rule</strong>: elastic demand → price rise → TR falls (price cut → TR rises); inelastic demand → price rise → TR rises (price cut → TR falls); unit elastic (|PED| = 1) → TR unchanged. Practical implication: firms facing many substitutes should compete on price; firms with pricing power (few substitutes, brand loyalty) should raise prices.'
      },

      /* 5 — Multi-select: tax incidence */
      { type: 'multi_select',
        id: 'ped-q5',
        stem: 'The government imposes an indirect tax on cigarettes. Select ALL statements that are <strong>correct</strong> about this tax.',
        opts: [
          'Most of the tax burden falls on consumers because demand for cigarettes is price inelastic',
          'The tax generates substantial revenue because inelastic demand means quantity purchased barely falls',
          'The deadweight welfare loss is relatively small because the quantity reduction is limited',
          'The tax is regressive — it takes a higher proportion of income from lower-income households who are more likely to smoke',
          'The tax burden falls mainly on producers because they cannot pass it on to consumers without losing customers',
          'A tax on a good with elastic demand would generate more revenue than the cigarette tax, since elastic demand means consumers keep buying'
        ],
        correct: [0, 1, 2, 3],
        exp: 'Options A, B, C, and D are all correct. <strong>A</strong>: inelastic demand → consumers bear most of the tax (price can rise sharply without losing many sales). <strong>B</strong>: inelastic demand → little quantity reduction → large tax revenue — the classic argument for taxing inelastic goods. <strong>C</strong>: deadweight loss = triangle proportional to quantity reduction; inelastic demand → small Q fall → small DWL. <strong>D</strong>: cigarette consumption takes a higher income share among lower-income households, making the tax regressive. <strong>E</strong> is wrong: inelastic demand means producers <em>can</em> pass the tax to consumers. <strong>F</strong> is wrong: elastic demand means a tax causes a large quantity fall → less revenue, not more.'
      },

      /* 6 — Categorise: elasticity buckets */
      { type: 'categorise',
        id: 'ped-q6',
        stem: 'Sort each good into the category that best describes the typical price elasticity of its demand.',
        categories: ['Elastic (|PED| > 1)', 'Inelastic (|PED| < 1)', 'Approximately unit elastic', 'Perfectly inelastic (PED = 0)'],
        items: [
          { label: 'A weekend break to Paris with many alternative city destinations', ans: 0 },
          { label: 'A branded takeaway coffee with multiple cafés on the same street', ans: 0 },
          { label: 'Household gas and electricity over the short run', ans: 1 },
          { label: 'Insulin for a Type 1 diabetic patient with no realistic substitute', ans: 3 },
          { label: 'Salt — a tiny share of household spending, used in small amounts', ans: 1 },
          { label: 'A composite consumer basket where firms have priced to keep revenue stable', ans: 2 }
        ],
        exp: '<strong>Elastic</strong>: Paris weekend (luxury + many substitutes) and branded coffee (many nearby substitutes). <strong>Inelastic</strong>: household energy (necessity, no short-run substitute) and salt (tiny share of income, no substitute). <strong>Approximately unit elastic</strong>: baskets/products priced so revenue is stable — a benchmark case. <strong>Perfectly inelastic</strong>: insulin — the patient must buy a fixed quantity regardless of price. Perfectly inelastic demand is rare and ethically charged: it creates extreme pricing power, which is why life-sustaining medicines are usually price-regulated or publicly funded.'
      },

      /* 7 — Match pairs: PED values to revenue effects */
      { type: 'match_pairs',
        id: 'ped-q7',
        stem: 'Match each PED value to the correct effect on <strong>total revenue</strong> following a <strong>price increase</strong>.',
        pairs: [
          { a: 'PED = 0 (perfectly inelastic)', b: 'TR rises in direct proportion to the price increase — quantity does not fall at all' },
          { a: 'PED = −0.4 (inelastic)', b: 'TR rises — the percentage fall in QD is smaller than the percentage price rise' },
          { a: 'PED = −1 (unit elastic)', b: 'TR is unchanged — percentage fall in QD exactly equals percentage price rise' },
          { a: 'PED = −2.5 (elastic)', b: 'TR falls — the percentage fall in QD exceeds the percentage price rise' },
          { a: 'PED = −∞ (perfectly elastic)', b: 'TR falls to zero — any price rise above the market price drives QD to zero' }
        ],
        exp: 'The <strong>inverse-elasticity rule</strong> applied across the full spectrum: <strong>perfectly inelastic</strong> → TR rises in lockstep with price (the seller captures all of any price increase); <strong>inelastic</strong> → TR rises (P effect dominates Q effect); <strong>unit elastic</strong> → TR unchanged (P and Q effects exactly cancel — a single point on a typical demand curve); <strong>elastic</strong> → TR falls (Q effect dominates); <strong>perfectly elastic</strong> → TR collapses to zero (firm in perfect competition cannot charge above market price). Reverse the direction for a price cut: elastic + price cut → TR rises, inelastic + price cut → TR falls.'
      },

      /* 8 — MCQ: short run vs long run PED */
      { type: 'mcq',
        id: 'ped-q8',
        stem: 'The price of petrol rises sharply and stays high. Which statement best describes the <strong>short-run vs long-run</strong> price elasticity of demand for petrol?',
        opts: [
          'Demand is inelastic in the short run but more elastic in the long run, as drivers switch to electric vehicles, use public transport, or move closer to work',
          'Demand is elastic in the short run but inelastic in the long run, as consumers initially cut back sharply but eventually return to their old driving habits',
          'PED is the same in the short and long run because the determinants of demand do not change over time',
          'Demand becomes perfectly inelastic in the long run because petrol is a necessity for car owners'
        ],
        ans: 0,
        exp: 'Demand is <strong>more elastic in the long run</strong> for almost every good — and petrol is the textbook illustration. <strong>Short run</strong>: consumers are locked into their existing cars, jobs, and homes; they can only cut a few discretionary trips → inelastic (estimates ≈ −0.2 to −0.3). <strong>Long run</strong>: consumers can switch to fuel-efficient vehicles, EVs, public transport, cycling, or move closer to work → much more elastic (estimates ≈ −0.6 to −0.8). The 1970s oil shocks confirmed this: short-run demand barely fell, but over a decade vehicle fleets shifted toward smaller, more efficient cars. Time is a key determinant of PED — substitution possibilities expand as consumers adjust.'
      },

      /* 9 — Data table: petrol PED */
      { type: 'data_table',
        id: 'ped-q9',
        stem: 'The table shows UK petrol market data before and after a significant fuel-duty rise.',
        headers: ['Variable', 'Before duty rise', 'After duty rise'],
        rows: [
          ['Average pump price', '£1.50/litre', '£1.65/litre'],
          ['Petrol consumption (bn litres/yr)', '42.0', '40.6'],
          ['Government fuel-duty revenue (£bn)', '28.1', '28.4'],
          ['Share of income spent on petrol (low-income households)', '4.8%', '5.3%']
        ],
        question: 'Which conclusion is <strong>most consistent</strong> with PED theory and the data?',
        opts: [
          'PED ≈ −0.33 (inelastic); the duty raises modest extra revenue with limited quantity reduction, but the rising income share for low-income households shows the burden is regressive',
          '|PED| > 1 (elastic) — the percentage fall in consumption confirms strong consumer sensitivity to petrol prices',
          'The small revenue rise shows that taxing inelastic goods is ineffective at raising revenue',
          'The data show the duty is progressive — wealthier households consume more petrol in absolute terms'
        ],
        ans: 0,
        exp: '%ΔQD = (40.6−42.0)/42.0 × 100 ≈ <strong>−3.3%</strong>. %ΔP = (1.65−1.50)/1.50 × 100 = <strong>+10%</strong>. PED ≈ −3.3%/+10% = <strong>−0.33</strong> → clearly <strong>inelastic</strong>. Revenue rose from £28.1bn to £28.4bn — consistent with the inelastic-good → tax → revenue-rises rule. The regressive distributional impact (low-income share rises from 4.8% to 5.3%) is a genuine policy concern. Option B contradicts the calculation. Option C is wrong — revenue did rise. Option D confuses absolute spending with the income share, which is the proper measure of regressivity.'
      },

      /* 10 — Multi-select: evaluation of PED applications */
      { type: 'multi_select',
        id: 'ped-q10',
        stem: 'A student is writing a 25-mark essay on the <strong>application of PED</strong>. Which statements demonstrate <strong>evaluation</strong> as opposed to mere description?',
        opts: [
          'Price elasticity of demand measures the responsiveness of quantity demanded to a change in price, calculated as %ΔQD ÷ %ΔP',
          'The PED–TR rule applies differently across airline segments: Ryanair targets elastic leisure travellers and maximises revenue by cutting base fares, while British Airways targets inelastic business travellers and maximises revenue through premium pricing — the same principle generates opposite strategies depending on elasticity',
          'Pharmaceutical firms can exploit inelastic demand for patented medicines to raise prices and revenue, but this same inelasticity attracts regulatory scrutiny and price controls, qualifying any claim that pricing power translates directly into unconstrained profit',
          'Inelastic demand means a price rise leads to a smaller proportional fall in quantity, so total revenue rises when price increases',
          'Taxing inelastic goods such as fuel involves a genuine trade-off: high revenue yield and small deadweight loss against a regressive burden that falls hardest on lower-income households — making the policy desirable on efficiency grounds but contentious on equity grounds',
          'When demand is perfectly elastic (PED = −∞), the demand curve is horizontal and any price rise drives quantity demanded to zero'
        ],
        correct: [1, 2, 4],
        exp: '<strong>B, C, and E are evaluation.</strong> (B) applies the TR rule to two real firms operating under opposite elasticity conditions and reaches a comparative conclusion — a textbook evaluative move. (C) qualifies the pharmaceutical pricing-power claim by introducing regulation as a countervailing force, reaching a balanced direction. (E) explicitly weighs efficiency benefits against equity costs of taxing inelastic goods and concludes the policy involves a genuine trade-off. <strong>A, D, and F are not evaluation.</strong> (A) is a textbook definition. (D) accurately states the inelastic–TR rule but applies it to no context and weighs no counter-considerations. (F) describes the perfectly elastic special case without any application or judgement. Evaluation requires application + weighing + reaching a qualified direction — not just accurate description.'
      }

    ]
  };

})();
