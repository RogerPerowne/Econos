window.ECONOS_TOPIC = {
  id: 'indirect-taxes-and-subsidies',
  topicNum: '2.9',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Indirect Taxes & Subsidies',
  estTime: '8-10 minutes',
  goal: 'Master the mechanics of indirect taxes and subsidies – how they shift supply, how to label the diagram, and how the burden or benefit splits between consumers and producers depending on elasticity.',
  intro: {
    heroKey: 'heroIntervention',
    summary: 'Indirect taxes raise the consumer price and lower the producer net price; subsidies do the opposite. In both cases the burden or benefit splits between consumers and producers depending on relative elasticity – not on who hands over the cash.',
    doInThis: 'Work through 4 interactive cards covering how indirect taxes shift supply, how the tax burden splits between consumers and producers, the mirror-image mechanics of subsidies, and how elasticity determines who really pays.',
    outcomes: [
      'Draw and label specific and ad valorem tax diagrams correctly, identifying Pc, Pp, Qt and the tax wedge',
      'Apply the incidence rule (the less elastic side bears more of the burden) to real cases like fuel duty and luxury taxes',
      'Draw and label subsidy diagrams and identify who captures the benefit under different elasticities'
    ],
    tip: 'Tax → supply shifts UP (higher Pc, lower Pp, lower Q). Subsidy → supply shifts DOWN (lower Pc, higher Pp, higher Q). The wedge between Pc and Pp = the tax or subsidy per unit. The split between consumer and producer depends on elasticity – the less elastic side carries more of the burden (tax) or captures more of the benefit (subsidy).',
    stages: [
      { num: 1, name: 'Learn it', sub: '4 concept cards',          state: 'done',      href: TopicLoader.routes.learn()      },
      { num: 2, name: 'Link it',  sub: 'Apply skills in context',  state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it',  sub: 'Exam paper',               state: 'locked'                                                  }
    ]
  },
  cards: [

    {
      id: 'indirect_taxes_subsidies_1',
      stepLabel: 'Learn: Step 1 of 4',
      title: 'How an indirect tax works',
      tip: { icon: '💡', tone: 'amber', text: 'An indirect tax is collected by sellers but borne by whoever is less elastic. Two forms – specific (fixed £ per unit) and ad valorem (% of price) – shift supply in different ways.' },
      interactiveDiagram: {
        svgKey: 'taxTypesInteractive',
        layers: ['idl-1', 'idl-2'],
        views: [
          {
            label: 'Free market',
            tone: 'blue',
            head: 'The free-market equilibrium',
            body: 'Before any tax, supply and demand determine price P₀ and quantity Q₀. Producers receive exactly what consumers pay – there is no wedge between the two.',
            analysis: 'This is the benchmark. Every effect of the tax is measured as a departure from P₀ and Q₀.'
          },
          {
            label: 'Specific tax',
            tone: 'blue',
            head: 'Specific tax – parallel shift (e.g. fuel duty)',
            body: 'A fixed amount per unit (e.g. 53p/litre of fuel duty). Sellers need an extra £T per unit – so the supply curve shifts <strong>parallel</strong> upward by exactly £T at every quantity. Consumer price rises to <strong>Pc</strong>; quantity falls to <strong>Qt</strong>.',
            analysis: 'The gap between S and S+T is the same at every quantity – that constant gap is £T. Government revenue = £T × Qt (the area of the wedge up to Qt).'
          },
          {
            label: 'Ad valorem tax',
            tone: 'amber',
            show: ['idl-2'],
            head: 'Ad valorem tax – pivot shift (e.g. 20% VAT)',
            body: 'A percentage of price (e.g. 20% VAT). The £ amount of tax is small at low prices and large at high prices – so the supply curve <strong>pivots</strong> upward. The gap between S and S+T% widens as price rises.',
            analysis: 'Ad valorem taxes yield more revenue on expensive goods and scale automatically with inflation. Specific taxes erode in real terms unless manually uprated – which is why UK alcohol duties were frozen for years while VAT revenue grew automatically.'
          }
        ]
      },
      keyTerms: [
        { term: 'Indirect tax',  def: 'A tax on spending – collected by sellers from buyers when goods or services are purchased. VAT and excise duties are the main UK examples.' },
        { term: 'Specific tax',  def: 'A fixed monetary amount per unit (e.g. £8.06 per litre of pure alcohol in UK spirits duty). Produces a parallel upward shift in supply.' },
        { term: 'Ad valorem tax', def: 'A percentage of the price (e.g. 20% VAT). Produces a pivoting upward shift in supply – the absolute tax grows with the price.' },
        { term: 'Tax wedge',     def: 'The vertical gap between the price consumers pay (P<sub>c</sub>) and the net price producers receive (P<sub>p</sub>) – equal to the tax per unit. Tax revenue = wedge × Q<sub>t</sub>.' }
      ],
      examEdge: 'Specific taxes shift S <em>parallel</em> upward (constant gap); ad valorem taxes <em>pivot</em> S upward (gap widens as price rises). Drawing the wrong shift is a common mark loser. Always label P<sub>c</sub>, P<sub>p</sub>, Q<sub>t</sub>, and the wedge between P<sub>c</sub> and P<sub>p</sub> – that wedge is the per-unit tax and its area (wedge × Q<sub>t</sub>) is government revenue.'
    },

    {
      id: 'indirect_taxes_subsidies_2',
      stepLabel: 'Learn: Step 2 of 4',
      title: 'Tax incidence: who actually pays?',
      tip: { icon: '⚖️', tone: 'rose', text: '<strong>Legal incidence</strong> (who hands over the cash) ≠ <strong>economic incidence</strong> (who bears the burden). Step through the diagram to see the consumer share, the producer share, and the resulting tax revenue.' },
      interactiveDiagram: {
        svgKey: 'taxIncidenceInteractive',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'Tax in place',
            tone: 'blue',
            head: 'The tax in place – Pc, Pp and the £T wedge',
            body: 'The tax has shifted supply up to S+T. Quantity falls to <strong>Qt</strong>. Consumers pay <strong>Pc</strong>; producers receive net price <strong>Pp</strong> after remitting the tax. The vertical gap between Pc and Pp is the per-unit tax, <strong>£T</strong>.',
            analysis: 'Pc > P₀ > Pp – consumers pay more, producers receive less, and the gap goes to government. The next steps split that gap into who bears how much, then total it as revenue.'
          },
          {
            label: 'Consumer burden',
            tone: 'blue',
            head: 'Step 2 – the consumer burden',
            body: 'The <strong style="color:#2563EB">blue rectangle</strong> is the consumer burden: <strong>(Pc − P₀) × Qt</strong>. It is the extra price consumers pay per unit times the quantity they actually buy.'
          },
          {
            label: 'Producer burden',
            tone: 'rose',
            head: 'Step 3 – the producer burden',
            body: 'The <strong style="color:#dc2626">red rectangle</strong> is the producer burden: <strong>(P₀ − Pp) × Qt</strong>. It is the reduction in net price per unit times the quantity sold.',
            analysis: 'Together the blue and red rectangles partition the tax wedge. The relative size of each depends on elasticity – covered in card 4.'
          },
          {
            label: 'Tax revenue',
            tone: 'purple',
            head: 'Step 4 – total tax revenue',
            body: 'The purple-outlined area is total <strong>tax revenue = £T × Qt</strong>. It is exactly the sum of the consumer and producer burdens – every penny paid by buyers and sellers above/below P₀ ends up at HMRC.',
            analysis: 'Whether this revenue is worth the deadweight loss and behavioural distortions is a policy judgement – see <strong>Taxes & Subsidies as Policy Tools</strong> (4.1).'
          }
        ]
      },
      keyTerms: [
        { term: 'Legal incidence',    def: 'Who is legally responsible for remitting the tax to government – typically the seller for indirect taxes.' },
        { term: 'Economic incidence', def: 'Who actually bears the burden through higher prices paid (consumers) or lower net receipts (producers) – determined by relative PED and PES.' },
        { term: 'Consumer burden',    def: 'The portion of the tax borne by buyers: (P<sub>c</sub> − P<sub>0</sub>) × Q<sub>t</sub>. Larger when demand is inelastic relative to supply.' },
        { term: 'Producer burden',    def: 'The portion of the tax borne by sellers: (P<sub>0</sub> − P<sub>p</sub>) × Q<sub>t</sub>. Larger when supply is inelastic relative to demand.' }
      ],
      examEdge: 'Always draw both the consumer burden and producer burden rectangles explicitly – many students draw the diagram correctly but forget to <strong>label and shade</strong> the burden split. A 25-mark answer needs both rectangles visible, both labelled, and a clear statement that Pc − Pp = £T per unit.'
    },

    {
      id: 'indirect_taxes_subsidies_3',
      stepLabel: 'Learn: Step 3 of 4',
      title: 'How a subsidy works',
      tip: { icon: '💡', tone: 'green', text: 'A subsidy is the mirror image of a tax – a government payment that shifts supply <em>down</em>, lowering the consumer price and raising the producer net price. Step through to see the consumer share, the producer share, and the cost to government.' },
      interactiveDiagram: {
        svgKey: 'subsidyInteractive',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'Subsidy in place',
            tone: 'green',
            head: 'Subsidy in place – Pc, Pp and £S wedge',
            body: 'The subsidy shifts supply down to S₁, raising quantity to <strong>Qs</strong>. Consumers pay <strong>Pc</strong> below P₀, while producers receive <strong>Pp</strong> above P₀ once the subsidy is added. The gap between Pp and Pc is the per-unit subsidy, <strong>£S</strong>.',
            analysis: 'Pp > P₀ > Pc – producers receive more, consumers pay less, and the difference comes from government. The next steps split the wedge into who captures how much, then total it as cost.'
          },
          {
            label: 'Consumer benefit',
            tone: 'blue',
            head: 'Step 2 – the consumer benefit',
            body: 'The <strong style="color:#2563EB">blue rectangle</strong> is the consumer benefit: <strong>(P₀ − Pc) × Qs</strong>. It is the price reduction per unit times the quantity bought at the new lower price.'
          },
          {
            label: 'Producer benefit',
            tone: 'green',
            head: 'Step 3 – the producer benefit',
            body: 'The <strong style="color:#059669">green rectangle</strong> is the producer benefit: <strong>(Pp − P₀) × Qs</strong>. It is the rise in net price per unit times the quantity sold.',
            analysis: 'Together the blue and green rectangles partition the subsidy wedge. The relative size depends on elasticity – covered in card 4.'
          },
          {
            label: 'Government cost',
            tone: 'purple',
            head: 'Step 4 – total government cost',
            body: 'The purple-outlined area is total <strong>subsidy cost = £S × Qs</strong>. It is exactly the sum of the consumer and producer benefits – every penny granted to buyers and sellers comes from the Treasury.',
            analysis: "Whether this cost delivers value for money – whether £S × Qs is justified by the externality being corrected – is the policy question covered in <strong>Taxes & Subsidies as Policy Tools</strong> (4.1)."
          }
        ]
      },
      keyTerms: [
        { term: 'Subsidy',            def: 'A government payment to producers (or consumers) that reduces the effective cost of a good or service. Shifts supply rightward / downward.' },
        { term: 'Production subsidy', def: 'Paid per unit of output to sellers (e.g. UK Contracts for Difference for renewable energy). Shifts S down by the subsidy amount.' },
        { term: 'Consumer subsidy',   def: 'A direct reduction in the price buyers face – childcare vouchers, EV grants, fuel poverty support. Effectively shifts D right or lowers P paid by consumers.' },
        { term: 'Subsidy wedge',      def: 'The vertical gap between the producer net price (P<sub>p</sub>) and the consumer price (P<sub>c</sub>) – equal to the subsidy per unit. Government cost = wedge × Q<sub>s</sub>.' }
      ],
      examEdge: 'A subsidy mirrors a tax: same wedge geometry, opposite direction. The benefit split follows the same elasticity rule in reverse – <strong>the less elastic side captures MORE of the benefit</strong>. With inelastic demand (e.g. insulin), consumers gain little because they would buy anyway – producers capture most of the subsidy. With elastic demand, consumers gain more. For the policy questions – when subsidies are justified, real UK cases, and how to evaluate them – see <strong>Taxes & Subsidies as Policy Tools</strong> (4.1).'
    },

    {
      id: 'indirect_taxes_subsidies_4',
      stepLabel: 'Learn: Step 4 of 4',
      title: 'Elasticity and who pays',
      tip: { icon: '⚖️', tone: 'blue', text: 'The same tax or subsidy falls differently on different markets. One rule governs both: <strong>the less elastic side carries more of the burden (tax) or captures more of the benefit (subsidy).</strong>' },
      interactiveDiagram: {
        svgKey: 'elasticityIncidenceInteractive',
        layers: ['idl-1', 'idl-2'],
        views: [
          {
            label: 'Same tax, two markets',
            tone: 'blue',
            head: 'The same tax – but two different markets',
            body: 'Both markets have the same supply curve and the same specific tax (S+T). The only difference is how elastic demand is. This alone changes who pays.'
          },
          {
            label: 'Add demand',
            tone: 'blue',
            head: 'Add the demand curves – steep (inelastic) vs flat (elastic)',
            body: 'Left: demand is steep – consumers <em>must</em> buy regardless of price. Right: demand is flat – consumers can switch to substitutes if the price rises.',
            analysis: 'The pre-tax equilibrium (P₀, Q₀) appears in both panels. Notice it is at a similar price in both markets – the difference is purely in how responsive buyers are.'
          },
          {
            label: 'Who pays?',
            tone: 'rose',
            head: 'The burden follows the less elastic side',
            body: 'Left (inelastic D): Pc rises sharply, so consumers bear about <strong>87%</strong> of the tax. Right (elastic D): Pc barely rises, so consumers bear only <strong>36%</strong>; producers absorb <strong>64%</strong>.',
            analysis: 'Producers absorb more when demand is elastic – they cannot afford to lose price-sensitive buyers. One rule covers both taxes and subsidies: the <strong>less elastic side</strong> bears more of a tax and captures more of a subsidy.'
          }
        ]
      },
      keyTerms: [
        { term: 'Legal incidence',    def: 'Who is legally responsible for remitting the tax – typically the seller. NOT the same as who bears the economic cost.' },
        { term: 'Economic incidence', def: 'Who actually bears the burden or captures the benefit, determined by relative PED and PES.' },
        { term: 'Consumer burden',    def: '(Pc − P₀) × Qt. Larger when demand is inelastic – consumers have few substitutes and cannot avoid the tax.' },
        { term: 'Producer burden',    def: '(P₀ − Pp) × Qt. Larger when supply is inelastic – producers cannot easily redirect output to other markets.' }
      ],
      examEdge: 'One rule governs both taxes and subsidies: <strong>the less elastic side bears more of a tax / captures more of a subsidy.</strong> For a 25-mark essay: state the elasticity assumption first, then use the diagram rectangles to show the split, then link to a real example – UK tobacco duty (PED ≈ −0.4, consumers bear most), EU farm subsidies (inelastic land supply, landlords capture most), or the 1990 US luxury yacht tax (elastic demand for US yachts, domestic producers bore the burden and the industry collapsed).',
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

