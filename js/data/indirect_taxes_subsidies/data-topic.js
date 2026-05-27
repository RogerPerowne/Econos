window.ECONOS_TOPIC = {
  id: 'indirect_taxes_subsidies',
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
      { num: 1, name: 'Learn it', sub: '4 concept cards',          state: 'done',      href: TopicLoader.buildUrl('topic.html')      },
      { num: 2, name: 'Link it',  sub: 'Apply skills in context',  state: 'available', href: TopicLoader.buildUrl('link_intro.html') },
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
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
