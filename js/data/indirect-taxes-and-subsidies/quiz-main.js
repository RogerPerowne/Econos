(function () {

  window.ECONOS_QUIZ = {
    title:    'Indirect Taxes &amp; Subsidies',
    subtitle: 'Theme 1 &middot; Topic 2.9 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('indirect_taxes_subsidies_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers specific vs ad valorem taxes, subsidy mechanics, tax incidence, consumer/producer surplus effects, and deadweight loss',
    shortNames: [
      'Specific vs ad valorem', 'Tax incidence MCQ', 'Numeric tax incidence', 'Subsidy effect',
      'Consumer surplus MCQ', 'Elastic demand tax', 'Cause & effect', 'Match pairs',
      'Odd one out', 'Data table'
    ],

    questions: [

      /* 1 – MCQ: specific vs ad valorem */
      { type: 'mcq',
        stem: 'A <strong>specific tax</strong> differs from an <strong>ad valorem tax</strong> in that:',
        opts: [
          'A specific tax is a fixed monetary amount per unit (e.g. 57p per litre of petrol); an ad valorem tax is a percentage of the price (e.g. 20% VAT)',
          'A specific tax is charged directly to consumers; an ad valorem tax is charged only to producers',
          'A specific tax increases as income rises; an ad valorem tax remains constant regardless of income',
          'A specific tax applies only to manufactured goods; an ad valorem tax applies only to services'
        ],
        ans: 0,
        exp: '<strong>Specific tax</strong>: fixed monetary amount per unit – shifts the supply curve upward by a constant vertical distance (e.g. UK fuel duty at 52.95p/litre). The gap between supply curves is the same at every quantity. <strong>Ad valorem tax</strong>: percentage of price – shifts the supply curve upward by a proportional amount (larger at higher prices). VAT at 20% on a £100 item = £20 tax; on a £200 item = £40 tax. On a diagram, a specific tax produces parallel supply curves; an ad valorem tax produces supply curves that diverge at higher prices. Most UK excise duties are specific (cigarettes, alcohol, fuel); VAT is ad valorem.'
      },

      /* 2 – MCQ: tax incidence and elasticity */
      { type: 'mcq',
        stem: 'The government imposes a specific tax on cigarettes. Given that demand is <strong>price inelastic</strong>, the incidence of this tax will fall mainly on:',
        opts: [
          'Consumers – inelastic demand means buyers cannot easily reduce quantity; they absorb most of the price rise through higher spending',
          'Producers – they must absorb the tax to maintain sales volume, as consumers are very sensitive to price',
          'The government – the tax revenue is the primary burden, borne by the state rather than market participants',
          'Foreign exporters – imported goods bear the incidence of domestic excise duties'
        ],
        ans: 0,
        exp: 'Tax incidence: with inelastic demand, consumers cannot easily reduce consumption when price rises → they absorb most of the tax. The supply curve shifts left by the tax amount → equilibrium price rises by almost the full tax → consumers pay most. With elastic demand, consumers can switch to substitutes → quantity falls sharply → producers absorb more through lower prices. The rule: <strong>the more inelastic the side, the greater their share of the tax burden</strong>. Cigarettes have inelastic demand (addiction, few substitutes) → consumers bear most of the tax – which is also why tobacco duties are effective revenue raisers.'
      },

      /* 3 – Numeric input: tax incidence calculation */
      { type: 'numeric_input',
        stem: 'Calculate the <strong>consumer\'s share of the tax</strong> (£ per unit) from the data below.',
        context: 'Before tax: price = £5.00, quantity = 1,000 units/day. A specific tax of £2.00 per unit is imposed. After tax: price paid by consumers = £6.50, price received by producers = £4.50, quantity = 700 units/day.',
        answer: 1.5,
        tolerance: 0.05,
        unit: '£',
        hint: 'Consumer share = new consumer price − old price. Producer share = old price − new producer price.',
        workingSteps: [
          'Before tax: consumer price = £5.00',
          'After tax: consumer price = £6.50',
          'Consumer share = £6.50 − £5.00 = £1.50',
          'Producer share = £5.00 − £4.50 = £0.50',
          'Check: £1.50 + £0.50 = £2.00 = full tax ✓'
        ],
        exp: 'Consumer share = £6.50 − £5.00 = <strong>£1.50</strong>. Producer share = £5.00 − £4.50 = <strong>£0.50</strong>. Total = £2.00 = the full tax. The £2 tax is split 75% consumer / 25% producer. This split reflects the relative elasticities: demand is more inelastic than supply in this market (consumers absorb more). If demand were perfectly inelastic, consumers would absorb 100%. If demand were perfectly elastic, producers would absorb 100%. The price mechanism splits the tax based on who can adjust most easily.'
      },

      /* 4 – MCQ: subsidy effect on consumer and producer surplus */
      { type: 'mcq',
        stem: 'A government introduces a per-unit subsidy on electric vehicles. What is the effect on <strong>consumer and producer surplus</strong>?',
        opts: [
          'Both consumer and producer surplus increase – the subsidy shifts supply rightward, lowering the market price (higher CS) and increasing the amount received by producers including the subsidy (higher PS)',
          'Consumer surplus increases; producer surplus falls – the subsidy lowers the price, benefiting consumers but reducing producer revenue',
          'Producer surplus increases; consumer surplus falls – the subsidy shifts demand, raising the market price',
          'Both consumer and producer surplus fall – the subsidy distorts the market away from the natural equilibrium'
        ],
        ans: 0,
        exp: 'A subsidy shifts the supply curve rightward (reduces effective cost of production per unit). The market price falls → <strong>consumer surplus increases</strong> (lower price for consumers). Producers receive the market price PLUS the subsidy from government → effective price received = market price + subsidy → <strong>producer surplus increases</strong>. Total surplus (CS + PS) rises, but the cost to government (subsidy × quantity) may exceed the welfare gain – creating a net deadweight cost if the market was already at the social optimum. If correcting a positive externality, the subsidy closes the gap between Q<sub>M</sub> and Q*, generating net welfare gains.'
      },

      /* 5 – MCQ: deadweight loss from tax */
      { type: 'mcq',
        stem: 'An indirect tax that is NOT correcting an externality creates a <strong>deadweight welfare loss</strong> because:',
        opts: [
          'The tax raises the price above the social optimum – transactions that would have been mutually beneficial (consumer WTP > producer MC) do not occur; the associated welfare is lost',
          'The tax transfers purchasing power from consumers to the government – this transfer is always a welfare loss regardless of how the revenue is spent',
          'The tax shifts the supply curve rightward, creating excess supply and reducing prices below the social optimum',
          'The tax reduces producer surplus by exactly the amount of the deadweight loss'
        ],
        ans: 0,
        exp: 'A non-corrective tax raises price above the competitive equilibrium → some mutually beneficial trades don\'t occur (WTP > MC but both below the new tax-inclusive price). These "suppressed" trades represent welfare that is neither captured as consumer surplus, producer surplus, nor government revenue – it is simply lost. The DWL is the triangle between the pre-tax and post-tax equilibria, bounded by demand and supply. Paradoxically, this DWL is SMALLER if demand and supply are both inelastic (smaller quantity reduction) – which is why taxing inelastic goods raises more revenue with less deadweight loss, explaining the Ramsey Rule for optimal taxation.'
      },

      /* 6 – Elastic sort: effect of elastic vs inelastic demand on tax outcomes */
      { type: 'elastic_sort',
        stem: 'Classify each outcome as more likely when demand is <strong>elastic</strong> or <strong>inelastic</strong> following an indirect tax.',
        categories: ['elastic', 'inelastic'],
        categoryLabels: ['Elastic demand (|PED| > 1)', 'Inelastic demand (|PED| < 1)'],
        goods: [
          { icon: '💰', label: 'Consumers bear a large share of the tax – price rises substantially', note: '', ans: 'inelastic' },
          { icon: '📉', label: 'Quantity demanded falls substantially – significant reduction in market output', note: '', ans: 'elastic' },
          { icon: '🏭', label: 'Producers absorb a large share of the tax through lower net prices received', note: '', ans: 'elastic' },
          { icon: '🏛️', label: 'Large tax revenue – quantity hardly falls, so the full tax is collected on almost unchanged output', note: '', ans: 'inelastic' },
          { icon: '🔺', label: 'Large deadweight welfare loss – many mutually beneficial trades suppressed by the tax', note: '', ans: 'elastic' },
          { icon: '📊', label: 'Price rises by close to the full amount of the tax', note: '', ans: 'inelastic' }
        ],
        exp: '<strong>Inelastic demand</strong>: consumers cannot substitute → small quantity fall → large consumer price rise → large consumer share of tax → large revenue, small DWL. <strong>Elastic demand</strong>: consumers easily substitute → large quantity fall → small price rise → producers absorb more → small revenue, large DWL. This is why governments tax petrol, tobacco, and alcohol (inelastic) heavily: maximum revenue with minimum quantity distortion. The Ramsey Rule formalises this: tax goods with inelastic demand to minimise deadweight loss from any given revenue target.'
      },

      /* 7 – Cause & effect: tax and subsidy chains */
      { type: 'cause_effect',
        stem: 'Match each policy action to its market effect.',
        pairs: [
          { cause: 'Specific tax of £2 imposed on a good with inelastic demand', effect: 'Price rises by approximately £2; consumers absorb most; government collects revenue; small DWL' },
          { cause: 'Subsidy on a positive externality good (e.g. electric vehicles)', effect: 'Supply shifts right; market price falls; Q rises toward social optimum; DWL eliminated' },
          { cause: 'Ad valorem tax of 20% on luxury goods', effect: 'Supply curve diverges from original at higher prices; tax burden higher in absolute terms on expensive items' },
          { cause: 'Tax on a good with elastic demand', effect: 'Large quantity fall; small price rise; producers bear more; small revenue; large DWL' },
          { cause: 'Subsidy on a good where MPC > MSC (no externality)', effect: 'Overproduction beyond social optimum; DWL created; government expenditure wasted' },
          { cause: 'Pigouvian tax equal to MEC on a polluting firm', effect: 'Output falls to social optimum; DWL eliminated; revenue collected; innovation incentive' }
        ],
        exp: 'Tax and subsidy effects depend critically on context: <strong>corrective taxes</strong> (Pigouvian) eliminate DWL by aligning private and social costs; <strong>non-corrective taxes</strong> create DWL; <strong>corrective subsidies</strong> eliminate DWL from positive externality underproduction; <strong>non-corrective subsidies</strong> create DWL by pushing output beyond the social optimum. The incidence of taxes depends on elasticity; the welfare effects of subsidies depend on whether they are correcting a market failure.'
      },

      /* 8 – Match pairs: tax and subsidy concepts */
      { type: 'match_pairs',
        stem: 'Match each concept to its definition.',
        pairs: [
          { a: 'Specific (unit) tax', b: 'Fixed monetary amount per unit – shifts supply curve up by constant amount' },
          { a: 'Ad valorem tax', b: 'Percentage of price – supply curve shifts up by proportional amount' },
          { a: 'Tax incidence', b: 'The distribution of the tax burden between buyers and sellers' },
          { a: 'Per-unit subsidy', b: 'Fixed monetary amount per unit paid to producers – shifts supply curve rightward' },
          { a: 'Deadweight welfare loss', b: 'Welfare destroyed by the tax/subsidy that is not transferred to any party – pure loss' },
          { a: 'Ramsey Rule', b: 'Tax goods with inelastic demand to minimise deadweight loss for a given revenue target' }
        ],
        exp: 'Tax analysis vocabulary: <strong>specific tax</strong> produces parallel supply curves (vertical distance = tax); <strong>ad valorem</strong> produces diverging supply curves. <strong>Tax incidence</strong> depends on relative elasticities – the more inelastic side bears more. <strong>Per-unit subsidy</strong> reduces effective cost of production, shifting supply right. <strong>DWL</strong> is the pure efficiency cost of the intervention (not including redistribution). <strong>Ramsey Rule</strong> (1927): optimal taxation minimises DWL by taxing goods in inverse proportion to their elasticity of demand.'
      },

      /* 9 – Odd one out: effects of a corrective tax */
      { type: 'odd_one_out',
        stem: 'Three of these are effects of a correctly set <strong>Pigouvian tax</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '📉', label: 'Market output falls from Q<sub>M</sub> to Q* – the social optimum', note: '' },
          { icon: '🏛️', label: 'Government collects tax revenue that can be used to compensate those harmed by the externality', note: '' },
          { icon: '📈', label: 'Consumer surplus increases as the tax correction improves market efficiency', note: '' },
          { icon: '🌿', label: 'Firms gain an incentive to invest in cleaner technology to reduce their tax liability', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>consumer surplus increases</strong>. A Pigouvian tax raises the market price, which <em>reduces</em> consumer surplus – consumers pay more for the good. However, the reduction in consumer surplus is offset (and exceeded for society as a whole) by the elimination of the external cost and the deadweight welfare loss. The net social welfare improves, but consumer surplus specifically falls. The other three are genuine effects: output correction to Q*; government revenue (can compensate or fund public goods – "double dividend"); innovation incentive (firms invest in cleaner technology to reduce tax liability – dynamic efficiency).'
      },

      /* 10 – Data table: UK tobacco duty and consumption */
      { type: 'data_table',
        stem: 'The table shows UK tobacco duty and smoking prevalence data.',
        headers: ['Year', 'Tobacco duty per 20 cigarettes (£)', 'Adult smoking prevalence (%)', 'Tobacco duty revenue (£bn)'],
        rows: [
          ['2000', '2.60', '27%', '7.8'],
          ['2010', '4.30', '21%', '9.1'],
          ['2015', '5.60', '17%', '9.5'],
          ['2020', '7.40', '14%', '9.8'],
          ['2023', '8.70', '12%', '9.6']
        ],
        question: 'Which conclusion about indirect taxes on demerit goods is <strong>best supported</strong> by the data?',
        opts: [
          'Rising tobacco duty has reduced smoking prevalence by more than half (27% to 12%) while maintaining high tax revenues – consistent with inelastic demand: large price rises, moderate quantity falls, sustained revenue',
          'Tobacco duty has failed – 12% of adults still smoke despite very high taxes, proving that price is ineffective at reducing smoking',
          'The falling revenue in 2023 proves tobacco duty has exceeded the revenue-maximising tax rate and should be reduced',
          'The data show elastic demand for tobacco – the large quantity fall (smoking prevalence) outpaces the price rise'
        ],
        ans: 0,
        exp: 'The data are consistent with inelastic demand for tobacco: over 23 years, duty more than tripled (£2.60 to £8.70 – +235%) while smoking prevalence fell by less than half (27% to 12% – −56%). Revenue remained robust (£7.8bn to £9.6bn – +23%), consistent with inelastic demand where tax revenue grows with price. Option B: 56% reduction in prevalence is a large public health success. Option C: 2023 revenue of £9.6bn is nearly the same as 2020 (£9.8bn) – not a collapse. Option D: a smaller percentage fall in quantity than percentage rise in price confirms inelastic, not elastic, demand.'
      }

    ]
  };

})();
