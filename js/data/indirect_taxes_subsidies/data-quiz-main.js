(function () {

  window.ECONOS_QUIZ = {
    id:       'indirect_taxes_subsidies_main',
    topicId:  'indirect_taxes_subsidies_main',
    title:    'Indirect Taxes &amp; Subsidies',
    subtitle: 'Theme 1 &middot; Topic 2.9 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the mechanics of indirect taxes (specific vs ad valorem, the tax wedge, government revenue), tax incidence (legal vs economic, who really pays), the mirror-image mechanics of subsidies, and how elasticity determines the split between consumers and producers. Mixed formats: mcq, calculation, sort, diagnostic pair, chain, paragraph fill, and data analysis.',
    shortNames: {
      'indirect_taxes_subsidies_1': 'How indirect taxes work',
      'indirect_taxes_subsidies_2': 'Tax incidence',
      'indirect_taxes_subsidies_3': 'How subsidies work',
      'indirect_taxes_subsidies_4': 'Elasticity and who pays'
    },

    questions: [

      /* 1 — mcq: what an indirect tax is */
      { type: 'mcq',
        stem: 'Which statement most precisely describes how a <strong>specific indirect tax</strong> affects a supply-demand diagram?',
        opts: [
          'The supply curve shifts <em>parallel</em> upward by the tax amount at every quantity, because sellers require a higher price by exactly the tax per unit to be willing to supply the same quantity',
          'The supply curve shifts downward, because the tax reduces producers\' costs and allows them to supply more at each price',
          'The demand curve shifts leftward, because consumers now face a higher price and demand fewer units',
          'The supply curve <em>pivots</em> upward from the origin, because the tax is a percentage of the price and is therefore proportional to quantity'
        ],
        ans: 0,
        exp: 'A <strong>specific (per-unit) tax</strong> creates a fixed additional cost for the seller at every quantity. To maintain the same supply quantity, the seller now needs a price exactly £T higher than before &mdash; so the supply curve shifts <em>parallel</em> upward by £T. This distinguishes it from an <strong>ad valorem tax</strong> (a percentage of price), which produces a <em>pivot</em> upward (the gap widens at higher prices). Option B reverses the direction. Option C &mdash; shifting demand &mdash; is wrong because the tax is on sellers; demand shifts when the tax is on buyers. Option D correctly describes an ad valorem tax, not a specific one.'
      },

      /* 2 — elastic_sort: specific vs ad valorem tax characteristics */
      { type: 'elastic_sort',
        stem: 'Classify each characteristic as applying to a <strong>specific tax</strong>, an <strong>ad valorem tax</strong>, or both.',
        categories: ['specific', 'ad_valorem'],
        categoryLabels: ['Specific (per-unit) tax only', 'Ad valorem (percentage) tax only'],
        goods: [
          { icon: '📏', label: 'Produces a parallel upward shift of the supply curve &mdash; constant gap at all quantities', note: '', ans: 'specific' },
          { icon: '📐', label: 'Produces a pivoting upward shift &mdash; the absolute tax rises with the price', note: '', ans: 'ad_valorem' },
          { icon: '📉', label: 'Revenue erodes in real terms during periods of inflation unless the rate is manually uprated', note: '', ans: 'specific' },
          { icon: '🔄', label: 'Revenue rises automatically with inflation because the tax base (price) grows', note: '', ans: 'ad_valorem' },
          { icon: '🚬', label: 'UK alcohol excise duty &mdash; a fixed amount per litre of pure alcohol', note: '', ans: 'specific' },
          { icon: '🛒', label: '20% UK Value Added Tax &mdash; applied as a percentage of the selling price', note: '', ans: 'ad_valorem' }
        ],
        exp: '<strong>Specific tax</strong>: fixed £ per unit regardless of price. Supply shifts parallel (constant gap). Revenue erodes in inflation because the nominal tax stays the same while prices rise. UK alcohol and tobacco duties are the main examples &mdash; they must be manually uprated each Budget. <strong>Ad valorem tax</strong>: a percentage of price. Supply pivots (gap widens with price). Revenue rises automatically with inflation. 20% VAT is the dominant UK example. The key diagram distinction: parallel shift = specific; pivoting shift = ad valorem. Both create a tax wedge and both cause output to fall; the difference is only in the shape of the shift.'
      },

      /* 3 — calculation: tax burden split */
      { type: 'calculation',
        context: 'A specific tax of <strong>&pound;6 per unit</strong> is imposed on a market. Before the tax, the equilibrium price was <strong>&pound;20</strong>. After the tax, consumers pay <strong>&pound;24</strong> and producers receive <strong>&pound;18</strong>. Post-tax quantity is <strong>50 units</strong>.',
        working: [
          'Step 1: Verify the tax wedge',
          'Pc &minus; Pp = &pound;24 &minus; &pound;18 = &pound;6 = tax &check;',
          'Step 2: Consumer burden per unit',
          'Pc &minus; P&sub0; = &pound;24 &minus; &pound;20 = &pound;4 per unit',
          'Step 3: Producer burden per unit',
          'P&sub0; &minus; Pp = &pound;20 &minus; &pound;18 = &pound;2 per unit',
          'Step 4: Check: consumer + producer burden = &pound;4 + &pound;2 = &pound;6 = tax &check;',
          'Step 5: Total tax revenue = &pound;6 &times; 50 = &pound;300',
          'Consumer share of revenue = &pound;4 &times; 50 = &pound;200 (67%)',
          'Producer share of revenue = &pound;2 &times; 50 = &pound;100 (33%)'
        ],
        stem: 'Which set of figures correctly describes the tax burden split and total revenue?',
        opts: [
          { ped: 'Consumer burden: &pound;4/unit (67%); producer burden: &pound;2/unit (33%); total revenue: &pound;300', typ: 'Consumer bears more: Pc rose by &pound;4, Pp fell by &pound;2', rev: 'Compare each price change to P&sub0; = &pound;20' },
          { ped: 'Consumer burden: &pound;2/unit (33%); producer burden: &pound;4/unit (67%); total revenue: &pound;300', typ: 'Reverses consumer and producer shares', rev: 'Consumer paid &pound;24 vs &pound;20 before (a &pound;4 rise); producer received &pound;18 vs &pound;20 (a &pound;2 fall)' },
          { ped: 'Consumer burden: &pound;6/unit (100%); producer burden: &pound;0; total revenue: &pound;300', typ: 'Assumes full forward shift to consumer', rev: 'Price only rose by &pound;4, not the full &pound;6' },
          { ped: 'Consumer burden: &pound;4/unit (67%); producer burden: &pound;2/unit (33%); total revenue: &pound;600', typ: 'Doubles the revenue (uses Q before tax, not after)', rev: 'Revenue = wedge &times; post-tax quantity = &pound;6 &times; 50' }
        ],
        ans: 0,
        exp: 'Consumer burden = Pc &minus; P&sub0; = &pound;24 &minus; &pound;20 = <strong>&pound;4/unit</strong>. Producer burden = P&sub0; &minus; Pp = &pound;20 &minus; &pound;18 = <strong>&pound;2/unit</strong>. Together: &pound;4 + &pound;2 = &pound;6 = the tax. Revenue = &pound;6 &times; 50 = <strong>&pound;300</strong>. The consumer bears 67% because demand is more inelastic (less responsive to price) than supply. The split is always driven by relative elasticities &mdash; a common exam question is to infer the relative elasticity from the burden split: here, the consumer bears more &Rightarrow; demand is more inelastic than supply.'
      },

      /* 4 — diagnostic_pair: legal vs economic incidence */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Explain the difference between legal incidence and economic incidence of an indirect tax, and analyse what determines the economic incidence."</em> Which student gives the more precise answer?',
        students: [
          { name: 'Kezia', badge: 'Candidate A',
            answer: '<strong>Legal incidence</strong> is who is legally obligated to remit the tax to HMRC &mdash; for an indirect tax, typically the seller. But legal incidence tells us nothing about who actually bears the economic cost. <strong>Economic incidence</strong> describes who ultimately bears the burden through changes in the prices they pay or receive after the market has adjusted.<br><br>Economic incidence is determined by <strong>relative price elasticity of demand (PED) and price elasticity of supply (PES)</strong>. The less elastic side of the market is less able to respond to the price change, so it absorbs more of the tax. Formally:<br>&bull; If PED is low relative to PES: consumers bear more, because they cannot easily switch to substitutes. The consumer burden rectangle (Pc &minus; P&sub0;) &times; Qt is large.<br>&bull; If PES is low relative to PED: producers bear more, because they cannot easily redirect output. The producer burden rectangle (P&sub0; &minus; Pp) &times; Qt is large.<br><br>A real-world illustration: UK tobacco duty. PED for cigarettes is approximately &minus;0.4 (very inelastic). Consumers bear the majority &mdash; around 70&ndash;80% &mdash; of the duty, even though producers remit it to HMRC. This is precisely why governments target inelastic goods for excise duties: the burden falls heavily on consumers, and quantity falls only slightly, maximising revenue per unit.'
          },
          { name: 'Javier', badge: 'Candidate B',
            answer: 'Legal incidence is about who pays the tax to the government. For example, a shop might collect VAT and send it to HMRC. But this doesn\'t mean the shop bears the full cost of the tax. Economic incidence is about who really ends up worse off after the tax is imposed. If a shop can raise its prices, consumers bear more of the burden. If it can\'t raise prices, the shop bears more. Whether consumers or producers bear more depends on elasticity. If consumers are very price-sensitive (elastic demand), sellers find it hard to raise prices and bear more of the tax themselves. If consumers are not price-sensitive (inelastic), the seller can pass on most of the tax through higher prices. UK cigarette duty is an example where consumers bear most of the tax because demand is inelastic.'
          }
        ],
        ans: 0,
        exp: '<strong>Kezia</strong> provides the analytically stronger answer. She uses precise technical terms throughout (PED, PES, consumer burden rectangle (Pc &minus; P&sub0;) &times; Qt, producer burden rectangle (P&sub0; &minus; Pp) &times; Qt) and states the incidence rule formally. Her application of the rule to UK tobacco duty &mdash; citing PED &asymp; &minus;0.4 and the 70&ndash;80% consumer share &mdash; is a Level 4 application of theory to context. Javier explains the same concept clearly but without the formal vocabulary. He does not use PED and PES as labels, does not write the burden rectangles algebraically, and his explanation of the elasticity rule is slightly imprecise ("price-sensitive" is correct but less rigorous than "price elasticity of demand"). Javier accesses Level 3; Kezia Level 4.'
      },

      /* 5 — chain: steps to draw a tax diagram */
      { type: 'chain',
        stem: 'Place the steps for drawing a complete, correctly labelled <strong>indirect tax diagram</strong> in the right order.',
        items: [
          { label: 'Draw dashed horizontal lines from Pc and Pp to the price axis; draw a dashed vertical line from Qt to the quantity axis. Label all three clearly.', note: '' },
          { label: 'Draw a new supply curve (S + tax) shifted parallel upward by the tax amount. Label the new curve.', note: '' },
          { label: 'Draw axes, label them Price (£) and Quantity (Q), and plot the original downward-sloping demand curve (D) and upward-sloping supply curve (S). Mark the free-market equilibrium (Pe, Qe).', note: '' },
          { label: 'Shade the consumer burden rectangle (Pc &minus; Pe) &times; Qt in one colour and the producer burden rectangle (Pe &minus; Pp) &times; Qt in another. Identify the DWL triangle.', note: '' },
          { label: 'Locate the new equilibrium: where D intersects S + tax. Read off Pc (consumer price) and Qt (new quantity). Then find Pp = Pc &minus; tax (producer net price).', note: '' }
        ],
        correctOrder: [2, 1, 4, 0, 3],
        exp: '<strong>Correct sequence:</strong><br>1. Draw the base diagram (axes, D, S, Pe, Qe) &mdash; you need the baseline before you can show any change.<br>2. Draw S + tax (parallel shift upward by £T) and label it.<br>3. Find the new equilibrium: where D meets S + tax. Read Pc from the price axis. Compute Pp = Pc &minus; £T.<br>4. Draw dashed lines and label Pc, Pp, Qt precisely &mdash; this is where most marks are earned.<br>5. Shade the burden rectangles and identify the DWL triangle.<br><br>A common error: students skip step 4 or mislabel which horizontal line is Pc and which is Pp. Remember: Pc is above Pe (consumers pay more); Pp is below Pe (producers receive less).'
      },

      /* 6 — multi_select: effects of a subsidy */
      { type: 'multi_select',
        stem: 'Which of the following correctly describe the effects of a per-unit production subsidy?',
        opts: [
          'The supply curve shifts downward (rightward) by the subsidy amount, increasing market quantity',
          'Consumers pay a lower price (Pc &lt; Pe) and producers receive a higher net price (Pp &gt; Pe) after the subsidy',
          'The less elastic side of the market captures more of the subsidy benefit',
          'Government expenditure equals (Pp &minus; Pc) &times; Qs &mdash; the subsidy per unit times the post-subsidy quantity',
          'A subsidy always increases total welfare because both CS and PS rise',
          'The legal recipient of the subsidy (the producer) always captures all of the subsidy benefit'
        ],
        correct: [0, 1, 2, 3],
        exp: 'Options A, B, C, and D are correct. <strong>A</strong>: Subsidy shifts S downward; firms will supply the same quantity at a lower price. <strong>B</strong>: The subsidy wedge separates Pc (paid by buyer) from Pp (received by seller); both are better off than at Pe. <strong>C</strong>: Identical to the tax incidence rule but in reverse &mdash; the inelastic side captures more benefit. With inelastic demand, consumers gain more (prices fall substantially); with inelastic supply, producers gain more. <strong>D</strong>: Government cost = wedge &times; post-subsidy quantity. Option E is wrong: total welfare <em>falls</em> unless the subsidy corrects a positive externality &mdash; government cost exceeds CS + PS gain by the DWL. Option F is wrong: just as with taxes, economic incidence depends on elasticity; the legal recipient does not necessarily keep the benefit.'
      },

      /* 7 — odd_one_out: which is NOT an effect of an indirect tax */
      { type: 'odd_one_out',
        stem: 'Three of the following are effects of a per-unit indirect tax. Which is the ODD ONE OUT?',
        items: [
          { icon: '📊', label: 'Market output falls from Qe to Qt as the tax wedge reduces the number of mutually beneficial transactions', note: '' },
          { icon: '💰', label: 'Producer surplus rises because the government guarantee of a minimum net price lifts producers\' returns', note: '' },
          { icon: '📉', label: 'A deadweight welfare loss triangle appears, representing transactions that are no longer occurring and whose surplus is captured by no-one', note: '' },
          { icon: '🏛️', label: 'Government collects tax revenue equal to the tax per unit multiplied by the post-tax quantity sold', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is option B. An indirect tax <em>reduces</em> producer surplus &mdash; it does not raise it. The tax shifts supply upward, meaning producers receive a lower net price (Pp &lt; Pe) for each unit they sell. PS is the area below price and above supply, and this area shrinks. The description in option B (a "government guarantee of a minimum net price") actually describes a <em>price floor</em> or minimum price &mdash; a different policy instrument entirely. Options A (output falls), C (DWL triangle appears), and D (government collects revenue) are all standard, correct consequences of an indirect tax.'
      },

      /* 8 — para_fill: incidence rule */
      { type: 'para_fill',
        stem: 'Complete the paragraph explaining the elasticity rule for tax incidence.',
        anchor: 'One rule governs tax incidence: the less elastic side of the market bears more of the burden.',
        para: 'A seller legally remits an indirect tax to HMRC, but this does not determine who bears the [1] burden. The burden is shared between consumers and producers depending on their [2] relative to each other. The consumer bears more of the tax when demand is [3] &mdash; they have few alternatives and cannot reduce their purchases significantly when the price rises. The producer bears more when supply is [4] &mdash; they cannot easily redirect their output to other markets, so they accept a lower net price rather than lose sales. In the extreme case of [5] demand (vertical demand curve), the entire tax is passed on to consumers. In the opposite extreme of [6] supply (vertical supply curve), the entire tax falls on producers. In practice most taxes create a [7] split, with the specific ratio determined by the ratio of PES to PED.',
        blanks: [
          { id: 1, opts: ['economic', 'legal', 'marginal', 'average'], ans: 0 },
          { id: 2, opts: ['relative elasticities', 'relative incomes', 'market shares', 'profit margins'], ans: 0 },
          { id: 3, opts: ['inelastic', 'elastic', 'unit elastic', 'perfectly elastic'], ans: 0 },
          { id: 4, opts: ['inelastic', 'elastic', 'unit elastic', 'perfectly elastic'], ans: 0 },
          { id: 5, opts: ['perfectly inelastic', 'perfectly elastic', 'unit elastic', 'relatively elastic'], ans: 0 },
          { id: 6, opts: ['perfectly inelastic', 'perfectly elastic', 'unit elastic', 'relatively elastic'], ans: 0 },
          { id: 7, opts: ['shared', 'one-sided', 'equal', 'uniform'], ans: 0 }
        ],
        exp: '(1) <strong>Economic</strong>: who bears the economic cost, as opposed to the legal liability. (2) <strong>Relative elasticities</strong>: the ratio of PES to PED drives the incidence split. (3) <strong>Inelastic</strong>: consumers who cannot switch buy almost the same quantity and absorb the price rise. (4) <strong>Inelastic</strong>: producers who cannot redirect output accept a lower net price. (5) <strong>Perfectly inelastic</strong>: a vertical demand curve means consumers buy the same quantity regardless of price &mdash; 100% of the tax falls on them (e.g., insulin). (6) <strong>Perfectly inelastic</strong>: a vertical supply curve means producers supply the same quantity regardless of price &mdash; 100% falls on them (e.g., land in a fixed location). (7) <strong>Shared</strong>: in typical markets, both sides bear some portion.'
      },

      /* 9 — data_table: tobacco duty effectiveness */
      { type: 'data_table',
        stem: 'The table shows UK tobacco duty rates and smoking prevalence over time.',
        headers: ['Year', 'Duty rate (approx. £/20-cigarette pack)', 'Smoking prevalence (adults, %)', 'Illicit market share (%)'],
        rows: [
          ['2000', '~&pound;3.50', '27%', '~5%'],
          ['2010', '~&pound;5.20', '21%', '~15%'],
          ['2020', '~&pound;7.50', '14%', '~11%'],
          ['2023', '~&pound;8.00', '13%', '~12%']
        ],
        question: 'Which analysis of the tobacco duty data is most analytically complete?',
        opts: [
          'Tobacco duty illustrates both the benefits and limits of using indirect taxes for externality correction: rising duty has reduced smoking prevalence from 27% to 13% (effective), but has also stimulated a significant illicit market (&gt;10% share), reducing revenue, encouraging criminal activity, and limiting further duty increases',
          'The data shows tobacco duty is perfectly effective: smoking prevalence has halved since 2000, proving that indirect taxes always eliminate the negative externality they target',
          'The illicit market share of ~12% demonstrates that the tobacco duty has completely failed, since a significant portion of smokers evades the tax',
          'Tobacco duty is regressive because lower-income individuals smoke more &mdash; this alone makes it an unjustifiable policy regardless of its effectiveness at reducing smoking'
        ],
        ans: 0,
        exp: 'Option A is the most analytically complete because it evaluates tobacco duty on both the effectiveness axis (smoking down from 27% to 13%) and the efficiency axis (illicit market). The illicit market creates three problems: (1) reduces tax revenue (the illicit product pays no duty); (2) stimulates criminal supply chains; (3) caps how high the duty can be raised without further diversion. This is a genuine trade-off &mdash; higher duties reduce smoking more but increase the incentive to smuggle. Option B overclaims: "always eliminate" is wrong, and 13% prevalence is not zero. Option C treats 12% illicit share as complete failure, ignoring the 13-percentage-point fall in prevalence. Option D raises the equity dimension (valid) but dismissing the policy "regardless of effectiveness" is poor evaluation &mdash; the equity cost must be weighed against the health benefit, which falls disproportionately on lower-income groups (a genuine distributional complexity).'
      },

      /* 10 — mcq: subsidy benefit with inelastic demand */
      { type: 'mcq',
        stem: 'A government subsidises insulin production. Demand for insulin is <strong>highly inelastic</strong> (PED &asymp; &minus;0.05). Which outcome correctly describes how the subsidy benefit is distributed between consumers and producers?',
        opts: [
          'Consumers capture most of the subsidy benefit: because demand is almost perfectly inelastic, the price consumers pay falls substantially (nearly the full subsidy amount), while producers\' net price rises only slightly',
          'Producers capture most of the subsidy benefit: because supply is more elastic than demand, producers can maintain high prices while absorbing the subsidy as higher profit margins',
          'The benefit is split equally between consumers and producers regardless of elasticity, because the subsidy per unit is fixed',
          'Government captures the benefit through increased tax revenue, because the higher quantity sold generates additional income tax from producers\' extra profits'
        ],
        ans: 0,
        exp: 'Option A is correct. The <strong>less elastic side captures more of the subsidy benefit</strong> &mdash; this is the mirror of the tax incidence rule. With PED &asymp; &minus;0.05 (almost perfectly inelastic demand), consumers barely reduce their quantity demanded even if price rises; conversely, they capture nearly all price <em>reductions</em>. A subsidy on the supply side shifts S down, and with inelastic demand the equilibrium price falls by almost the full subsidy amount &mdash; so Pc falls substantially and consumers capture most of the benefit. Producers\' net price (Pp) rises only slightly. Option B would apply if supply were inelastic and demand elastic. Option C is wrong &mdash; the split is always determined by relative elasticities. Option D confuses the incidence framework entirely; the government\'s tax revenue from income tax on producers\' profits is a separate (and smaller) flow.'
      }

    ]
  };

})();
