(function () {

  window.ECONOS_QUIZ = {
    id:       'consumer_producer_surplus_main',
    topicId:  'consumer_producer_surplus_main',
    title:    'Consumer &amp; Producer Surplus',
    subtitle: 'Theme 1 &middot; Topic 2.8 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the definitions and diagrams for consumer and producer surplus, how to calculate both, the effects of taxes and subsidies on surplus, allocative efficiency, and real-world applications including rent controls and tariffs. Mixed formats: calculation, sort, diagnostic pair, chain, paragraph fill, and data analysis.',
    shortNames: {
      'consumer_producer_surplus_1': 'CS &amp; PS overview',
      'consumer_producer_surplus_2': 'Building the diagram',
      'consumer_producer_surplus_3': 'Taxes and surplus',
      'consumer_producer_surplus_4': 'Subsidies and surplus',
      'consumer_producer_surplus_5': 'Allocative efficiency',
      'consumer_producer_surplus_6': 'Real-world applications'
    },

    questions: [

      /* 1 — mcq: definition of consumer surplus */
      { type: 'mcq',
        stem: 'Which statement most precisely defines <strong>consumer surplus</strong>?',
        opts: [
          'The sum, across all buyers, of the difference between each buyer\'s maximum willingness to pay and the market price they actually pay',
          'The total amount consumers spend on a good at the equilibrium market price',
          'The profit consumers make from purchasing goods at a price lower than the average across all markets',
          'The area beneath the demand curve up to the quantity demanded, measured from the origin'
        ],
        ans: 0,
        exp: 'Consumer surplus is the <strong>aggregate gain to buyers</strong>: for each unit purchased, the difference between the buyer\'s maximum willingness to pay (their demand price, read off the demand curve) and the market price. Summed across all units, this is the triangle above the market price and below the demand curve. Option B describes total spending (P × Q), not the gain. Option C conflates surplus with profit in an unrelated sense. Option D describes the entire area under the demand curve &mdash; this includes both consumer surplus and the expenditure rectangle.'
      },

      /* 2 — calculation: find CS, PS, and total welfare */
      { type: 'calculation',
        context: 'In a market, the demand equation is <strong>P = 100 &minus; Q</strong> and the supply equation is <strong>P = 20 + Q</strong>.',
        working: [
          'Step 1: Find equilibrium',
          '100 &minus; Q = 20 + Q &rarr; 80 = 2Q &rarr; Q* = 40, P* = 60',
          'Step 2: Consumer surplus (triangle above P*, below demand)',
          'Height = demand intercept &minus; P* = 100 &minus; 60 = 40',
          'CS = &frac12; &times; base &times; height = &frac12; &times; 40 &times; 40 = &pound;800',
          'Step 3: Producer surplus (triangle below P*, above supply)',
          'Height = P* &minus; supply intercept = 60 &minus; 20 = 40',
          'PS = &frac12; &times; 40 &times; 40 = &pound;800',
          'Step 4: Total welfare = CS + PS = &pound;800 + &pound;800 = &pound;1,600'
        ],
        stem: 'Which set of values is correct for this market?',
        opts: [
          { ped: 'CS = &pound;800, PS = &pound;800, total welfare = &pound;1,600', typ: 'Both triangles have height 40 and base 40', rev: 'Use &frac12; &times; base &times; height for each' },
          { ped: 'CS = &pound;1,600, PS = &pound;800, total welfare = &pound;2,400', typ: 'CS double-counts the equilibrium rectangle', rev: 'CS is only the triangle above P*, not below it too' },
          { ped: 'CS = &pound;800, PS = &pound;40, total welfare = &pound;840', typ: 'PS uses quantity, not the height of the triangle', rev: 'PS = &frac12; &times; Q* &times; (P* &minus; supply intercept)' },
          { ped: 'CS = &pound;2,400, PS = &pound;2,400, total welfare = &pound;4,800', typ: 'Uses P &times; Q for both, not triangle areas', rev: 'Surplus is a triangle, not a rectangle' }
        ],
        ans: 0,
        exp: 'At equilibrium P* = 60, Q* = 40. <strong>CS</strong> = &frac12; &times; 40 &times; (100 &minus; 60) = &pound;800. <strong>PS</strong> = &frac12; &times; 40 &times; (60 &minus; 20) = &pound;800. <strong>Total welfare</strong> = &pound;1,600. This symmetric result arises because both lines have the same slope in absolute value (&plusmn;1). In asymmetric cases (different slopes), CS &ne; PS even at the same equilibrium.'
      },

      /* 3 — elastic_sort: classify effects of a per-unit tax */
      { type: 'elastic_sort',
        stem: 'When a per-unit indirect tax is imposed on a competitive market, classify each effect correctly.',
        categories: ['falls', 'rises'],
        categoryLabels: ['Falls / decreases', 'Rises / increases'],
        goods: [
          { icon: '🛒', label: 'Consumer surplus', note: 'Buyers pay a higher price', ans: 'falls' },
          { icon: '🏭', label: 'Producer surplus', note: 'Sellers receive a lower net price', ans: 'falls' },
          { icon: '🏛️', label: 'Government tax revenue', note: 'The wedge &times; quantity sold', ans: 'rises' },
          { icon: '📉', label: 'Deadweight welfare loss', note: 'Surplus destroyed by reduced output', ans: 'rises' },
          { icon: '📊', label: 'Market quantity traded', note: 'Fewer units sold at the higher price', ans: 'falls' },
          { icon: '💳', label: 'Price consumers pay (Pc)', note: 'Supply shift raises the buyer price', ans: 'rises' },
          { icon: '💰', label: 'Net price producers receive (Pp)', note: 'After remitting the tax', ans: 'falls' }
        ],
        exp: 'A per-unit tax shifts supply upward, creating a wedge between Pc (what buyers pay) and Pp (what sellers keep). <strong>CS falls</strong> because Pc &gt; Pe. <strong>PS falls</strong> because Pp &lt; Pe. <strong>Government revenue rises</strong> by (Pc &minus; Pp) &times; Qt &mdash; this is a transfer, not a welfare loss. <strong>DWL rises</strong> because output falls from Qe to Qt, destroying the surplus on those transactions. <strong>Quantity falls</strong>, Pc rises, and Pp falls. Note: tax revenue being a \'rise\' does not mean welfare is created &mdash; it is transferred from consumers and producers to government.'
      },

      /* 5 — multi_select: effects of a subsidy */
      { type: 'multi_select',
        stem: 'Which of the following are correct statements about the welfare effects of a per-unit subsidy in an otherwise competitive market?',
        opts: [
          'Consumer surplus increases because buyers pay a price below the free-market equilibrium',
          'Producer surplus increases because sellers receive a higher effective net price',
          'Total welfare always rises because both CS and PS increase',
          'Government expenditure equals (Ps &minus; Pc) &times; Qs, where Ps is the producer net price and Pc is the consumer price',
          'Deadweight welfare loss cannot arise from a subsidy if demand is inelastic',
          'Government expenditure exceeds the combined gain in CS and PS, with the difference equal to the deadweight welfare loss'
        ],
        correct: [0, 1, 3, 5],
        exp: 'Options A, B, D, and F are correct. <strong>A</strong>: Buyers pay Pc &lt; Pe &rarr; CS rises. <strong>B</strong>: Sellers receive Ps &gt; Pe &rarr; PS rises. <strong>D</strong>: Government cost = subsidy per unit &times; post-subsidy quantity; Ps &minus; Pc = subsidy amount. <strong>F</strong>: The gain in CS + PS is less than the subsidy bill &mdash; the difference is the DWL triangle from the units between Qe and Qs, which cost more to produce than consumers value them at. Option C is wrong: welfare falls unless the subsidy corrects a positive externality. Option E is wrong: DWL arises regardless of demand elasticity whenever output is pushed beyond Qe (though the triangle is smaller with more inelastic demand).'
      },

      /* 6 — para_fill: allocative efficiency */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph about allocative efficiency and total surplus.',
        anchor: 'The competitive equilibrium is allocatively efficient because it maximises total surplus.',
        para: 'Allocative efficiency occurs when [1] equals [2] &mdash; the price mechanism drives the market to this outcome. At this point the [3] of the last unit to consumers exactly equals its cost to producers, so no reallocation of resources can raise total [4]. Any output below equilibrium creates a surplus loss from missed [5] trades. Any output above equilibrium destroys welfare because units are produced where [6] exceeds [7]. Both deviations generate a [8] welfare loss &mdash; the area of foregone net surplus that accrues to no-one.',
        blanks: [
          { id: 1, opts: ['marginal benefit', 'total revenue', 'consumer surplus', 'average cost'], ans: 0 },
          { id: 2, opts: ['marginal cost', 'total cost', 'average revenue', 'fixed cost'], ans: 0 },
          { id: 3, opts: ['marginal benefit', 'average benefit', 'consumer expenditure', 'total benefit'], ans: 0 },
          { id: 4, opts: ['welfare', 'revenue', 'output', 'profit'], ans: 0 },
          { id: 5, opts: ['mutually beneficial', 'loss-making', 'unregulated', 'bilateral'], ans: 0 },
          { id: 6, opts: ['marginal cost', 'average cost', 'total cost', 'fixed cost'], ans: 0 },
          { id: 7, opts: ['marginal benefit', 'average benefit', 'total benefit', 'consumer surplus'], ans: 0 },
          { id: 8, opts: ['deadweight', 'net', 'gross', 'social'], ans: 0 }
        ],
        exp: '(1) <strong>Marginal benefit</strong>: what the next unit is worth to the buyer. (2) <strong>Marginal cost</strong>: what the next unit costs to produce. (3) <strong>Marginal benefit</strong>: the demand curve represents MB. (4) <strong>Welfare</strong>: CS + PS is maximised at the competitive equilibrium. (5) <strong>Mutually beneficial</strong>: below Qe, there are trades where MB &gt; MC that do not occur &mdash; both buyer and seller could gain. (6) <strong>Marginal cost</strong>. (7) <strong>Marginal benefit</strong>: above Qe, MC &gt; MB &mdash; producing those units consumes more resources than the benefit delivered. (8) <strong>Deadweight</strong>: the technical term for surplus lost, not transferred.'
      },

      /* 7 — chain: three-step welfare analysis method */
      { type: 'chain',
        stem: 'Place the steps of the three-step welfare analysis method in the correct order for an exam answer.',
        items: [
          { label: 'State the net effect on total surplus and evaluate whether a market failure justifies the intervention', note: '' },
          { label: 'Identify the policy type (tax, subsidy, price ceiling, floor) and state whether it raises or lowers the price consumers and producers face', note: '' },
          { label: 'Classify each area of the diagram: label what transferred to government revenue, what transferred between CS and PS, and what was destroyed as DWL', note: '' },
          { label: 'Draw the supply-demand diagram before and after the policy, and label Pc, Pp, and the new quantity', note: '' }
        ],
        correctOrder: [1, 3, 2, 0],
        exp: '<strong>Correct sequence:</strong><br>1. Identify the policy — you cannot draw or analyse before you know what the intervention is.<br>2. Draw the diagram — this is your evidence base for all subsequent analysis.<br>3. Classify each area — separate transfer (government revenue, redistribution between CS and PS) from destruction (DWL). This is the key analytical step many students skip.<br>4. State the net welfare effect and evaluate — only after the analysis is done. A conclusion like "welfare falls by the DWL triangle unless the externality corrected is larger" earns the evaluation mark.<br><br>Common errors: jumping to the conclusion before classifying areas, or describing only the CS fall without noting the revenue transfer.'
      },

      /* 8 — odd_one_out: consequences of a price ceiling */
      { type: 'odd_one_out',
        stem: 'Three of the following are consequences of a price ceiling set <em>below</em> the free-market equilibrium. Which is the ODD ONE OUT?',
        items: [
          { icon: '📉', label: 'Excess demand (shortage): at the ceiling price, quantity demanded exceeds quantity supplied', note: '' },
          { icon: '📈', label: 'Producer surplus increases as more producers can participate in the market at the regulated price', note: '' },
          { icon: '💔', label: 'A deadweight welfare loss arises from the mutually beneficial transactions that no longer occur', note: '' },
          { icon: '🏠', label: 'Some consumers who can obtain the good at the ceiling price gain &mdash; their consumer surplus increases', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is option B. A price ceiling set below Pe reduces producer surplus &mdash; it does <em>not</em> increase it. Producers are forced to sell at a price below the free-market equilibrium, reducing the gap between price received and their minimum supply price. Some producers exit the market entirely. Options A, C, and D are genuine consequences. <strong>A</strong>: shortage is the defining result of any binding price ceiling (Qd &gt; Qs at Pmax &lt; Pe). <strong>C</strong>: DWL arises from the units between Qs and Qe that are no longer traded. <strong>D</strong>: sitting tenants under rent control are the classic example &mdash; those lucky enough to get the controlled good gain.'
      },

      /* 9 — data_table: rent control evidence */
      { type: 'data_table',
        stem: 'The table summarises findings from a 2019 study of San Francisco rent control (Diamond et al.).',
        headers: ['Group affected', 'Outcome measured', 'Finding'],
        rows: [
          ['Tenants in rent-controlled units', 'Tenure length', 'Stayed 19% longer in same accommodation'],
          ['Landlords (multi-family pre-1980 buildings)', 'Supply of rental units', 'Reduced rental supply by ~15% through conversion and redevelopment'],
          ['All renters seeking housing (wider market)', 'Uncontrolled rents', 'Rents in uncontrolled market rose 5&ndash;7% (fewer units available)'],
          ['Economy-wide welfare', 'Net welfare effect', 'Estimated net welfare loss of $2.9bn over 10 years']
        ],
        question: 'Which analysis of rent control is best supported by this evidence?',
        opts: [
          'Rent control illustrates how a price ceiling can simultaneously benefit some consumers and reduce overall welfare: sitting tenants gain, but reduced supply and higher uncontrolled rents harm the broader rental market',
          'Rent control is economically efficient because it transfers surplus from landlords to tenants at zero net welfare cost',
          'The evidence shows rent control has no measurable effect on housing supply, so market failure in unaffordable housing is effectively corrected',
          'Rent control should be extended to all housing types since the data shows it successfully stabilises tenancies'
        ],
        ans: 0,
        exp: 'Option A is best supported. The study shows rent control produces a <em>mixed</em> distributional outcome: tenants in controlled units benefit (longer tenure, lower rent) but the overall market loses (15% less supply, 5&ndash;7% higher uncontrolled rents, $2.9bn net welfare loss). This is the classic economist critique of price ceilings: they transfer some CS from producers to consumers but destroy more welfare (DWL) than they transfer. Option B is directly contradicted by the $2.9bn net loss. Option C is directly contradicted by the 15% supply reduction. Option D ignores both the supply-destruction mechanism and the wider-market rental price increases.'
      },

      /* 10 — mcq: transfer vs welfare loss */
      { type: 'mcq',
        stem: 'An indirect tax generates government revenue and causes a deadweight welfare loss. Which statement correctly distinguishes the two?',
        opts: [
          'Tax revenue is a transfer of surplus from consumers and producers to the government &mdash; it still exists in the economy and can fund public services; deadweight welfare loss is surplus destroyed entirely and received by no-one',
          'Both tax revenue and deadweight welfare loss represent permanent destructions of economic welfare that cannot be recovered',
          'Deadweight welfare loss can be recovered by increasing the tax rate further, generating more revenue to redistribute',
          'Tax revenue represents a welfare loss because it reduces both CS and PS; deadweight welfare loss is the surplus that accrues to the government instead'
        ],
        ans: 0,
        exp: 'Option A is correct. <strong>Tax revenue</strong> is a <em>transfer</em>: the surplus originally held by consumers and producers is redistributed to government, which can deploy it on public goods, welfare payments, or deficit reduction. The money still exists in the economy. <strong>Deadweight welfare loss</strong> is genuine destruction: the mutually beneficial trades that no longer occur represent value that is eliminated entirely &mdash; no party (buyer, seller, or government) captures it. Option B is wrong &mdash; only DWL is permanent destruction. Option C is wrong &mdash; a higher tax raises the DWL (it grows with the square of the tax rate). Option D has the definitions completely reversed.'
      }

    ]
  };

})();
