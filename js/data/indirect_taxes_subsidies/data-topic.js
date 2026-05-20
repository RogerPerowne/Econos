window.ECONOS_TOPIC = {
  id: 'indirect_taxes_subsidies',
  topicNum: '2.9',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Indirect Taxes & Subsidies',
  estTime: '8-10 minutes',
  goal: 'Master the mechanics of indirect taxes and subsidies — how they shift supply, how to label the diagram, and how the burden or benefit splits between consumers and producers depending on elasticity.',
  intro: {
    heroKey: 'heroIntervention',
    summary: 'Indirect taxes raise the consumer price and lower the producer net price; subsidies do the opposite. In both cases the burden or benefit splits between consumers and producers depending on relative elasticity — not on who hands over the cash.',
    doInThis: 'Work through 4 interactive cards covering how indirect taxes shift supply, how the tax burden splits between consumers and producers, the mirror-image mechanics of subsidies, and how elasticity determines who really pays.',
    outcomes: [
      'Draw and label specific and ad valorem tax diagrams correctly, identifying Pc, Pp, Qt and the tax wedge',
      'Apply the incidence rule (the less elastic side bears more of the burden) to real cases like fuel duty and luxury taxes',
      'Draw and label subsidy diagrams and identify who captures the benefit under different elasticities'
    ],
    tip: 'Tax → supply shifts UP (higher Pc, lower Pp, lower Q). Subsidy → supply shifts DOWN (lower Pc, higher Pp, higher Q). The wedge between Pc and Pp = the tax or subsidy per unit. The split between consumer and producer depends on elasticity — the less elastic side carries more of the burden (tax) or captures more of the benefit (subsidy).',
    stages: [
      { num: 1, name: 'Learn it', sub: '4 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    {
      id: 'indirect_taxes_subsidies_1',
      stepLabel: 'Learn: Step 1 of 4',
      title: 'How an indirect tax works',
      tip: { icon: '💡', tone: 'amber', text: 'An indirect tax is collected by sellers but borne by whoever is less elastic. Two forms — specific (fixed £ per unit) and ad valorem (% of price) — shift supply in different ways.' },
      interactiveDiagram: {
        svgKey: 'taxTypesInteractive',
        layers: ['idl-1', 'idl-2'],
        views: [
          {
            label: 'Free market',
            tone: 'blue',
            head: 'The free-market equilibrium',
            body: 'Before any tax, supply and demand determine price P₀ and quantity Q₀. Producers receive exactly what consumers pay — there is no wedge between the two.',
            analysis: 'This is the benchmark. Every effect of the tax is measured as a departure from P₀ and Q₀.'
          },
          {
            label: 'Specific tax',
            tone: 'blue',
            head: 'Specific tax — parallel shift (e.g. fuel duty)',
            body: 'A fixed amount per unit (e.g. 53p/litre of fuel duty). To stay viable, sellers need an extra £T per unit — so the supply curve shifts <strong>parallel</strong> upward by exactly £T at every quantity. Consumer price rises to Pc; producer net price falls to Pp; quantity falls from Q₀ to Qt.',
            analysis: 'The constant gap between S and S+T equals £T regardless of price level. Total government revenue = £T × Qt — the rectangle between Pc and Pp up to Qt.'
          },
          {
            label: 'Ad valorem tax',
            tone: 'amber',
            head: 'Ad valorem tax — pivot shift (e.g. 20% VAT)',
            body: 'A percentage of price (e.g. 20% VAT). At a low price the £ amount of tax is small; at a high price it is large. This makes the supply curve <strong>pivot</strong> upward — the gap between S and S+T% widens as price rises. Both lines are shown here: S₁ (blue, parallel — constant gap) and S₂ (amber, pivoted — widening gap).',
            analysis: 'Practical implication: ad valorem taxes yield more revenue on expensive goods and scale automatically with inflation. Specific taxes erode in real terms unless manually uprated — which is why UK alcohol duties were frozen for years while VAT revenue grew automatically.'
          }
        ]
      },
      keyTerms: [
        { term: 'Indirect tax',  def: 'A tax on spending — collected by sellers from buyers when goods or services are purchased. VAT and excise duties are the main UK examples.' },
        { term: 'Specific tax',  def: 'A fixed monetary amount per unit (e.g. £8.06 per litre of pure alcohol in UK spirits duty). Produces a parallel upward shift in supply.' },
        { term: 'Ad valorem tax', def: 'A percentage of the price (e.g. 20% VAT). Produces a pivoting upward shift in supply — the absolute tax grows with the price.' },
        { term: 'Tax wedge',     def: 'The vertical gap between the price consumers pay (P<sub>c</sub>) and the net price producers receive (P<sub>p</sub>) — equal to the tax per unit. Tax revenue = wedge × Q<sub>t</sub>.' }
      ],
      examEdge: 'Specific taxes shift S <em>parallel</em> upward (constant gap); ad valorem taxes <em>pivot</em> S upward (gap widens as price rises). Drawing the wrong shift is a common mark loser. Always label P<sub>c</sub>, P<sub>p</sub>, Q<sub>t</sub>, and the wedge between P<sub>c</sub> and P<sub>p</sub> — that wedge is the per-unit tax and its area (wedge × Q<sub>t</sub>) is government revenue.'
    },

    {
      id: 'indirect_taxes_subsidies_2',
      stepLabel: 'Learn: Step 2 of 4',
      title: 'Tax incidence: who actually pays?',
      tip: { icon: '⚖️', tone: 'rose', text: '<strong>Legal incidence</strong> (who hands over the cash) ≠ <strong>economic incidence</strong> (who bears the burden). The burden splits between consumers and producers — build up the diagram below to see who pays what.' },
      interactiveDiagram: {
        svgKey: 'taxIncidenceInteractive',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'The market',
            tone: 'blue',
            head: 'Step 1 — the supply and demand framework',
            body: 'Start with demand (D) and supply (S) — two curves that together determine the price and quantity in any market. The tax will shift one of these curves.'
          },
          {
            label: 'Pre-tax equilibrium',
            tone: 'blue',
            head: 'Step 2 — the pre-tax equilibrium (P₀, Q₀)',
            body: 'Before the tax, the market clears at price P₀ and quantity Q₀. This is the benchmark — every effect of the tax is measured as a departure from this point.',
            analysis: 'Producers receive exactly P₀ per unit and consumers pay exactly P₀ — there is no wedge between them.'
          },
          {
            label: 'Supply shifts up',
            tone: 'blue',
            head: 'Step 3 — the tax shifts supply up',
            body: "The tax increases sellers' costs. To supply the same quantity they now need a higher market price, so the effective supply curve shifts up to S+T. The market moves to a new equilibrium: <strong>consumer price rises to Pc, quantity falls to Qt.</strong>",
            analysis: 'Pc is the price consumers pay. It is higher than P₀ — part of the tax has been passed through. But Pc has not risen by the full £T amount, because sellers are absorbing part too.'
          },
          {
            label: 'Burden split',
            tone: 'rose',
            head: 'Step 4 — the burden splits between consumers and producers',
            body: 'The <strong style="color:#2563EB">blue rectangle</strong> is the consumer burden — (Pc − P₀) × Qt, the extra amount consumers pay per unit × the units bought. The <strong style="color:#dc2626">red rectangle</strong> is the producer burden — (P₀ − Pp) × Qt, the reduction in net receipts. Together they equal total tax revenue.',
            analysis: 'Pp is the net price producers receive — market price minus the tax they remit. Pp < P₀ means producers are worse off. The split between the two rectangles depends on relative elasticity — covered on card 4.'
          }
        ]
      },
      keyTerms: [
        { term: 'Legal incidence',    def: 'Who is legally responsible for remitting the tax to government — typically the seller for indirect taxes.' },
        { term: 'Economic incidence', def: 'Who actually bears the burden through higher prices paid (consumers) or lower net receipts (producers) — determined by relative PED and PES.' },
        { term: 'Consumer burden',    def: 'The portion of the tax borne by buyers: (P<sub>c</sub> − P<sub>e</sub>) × Q<sub>t</sub>. Larger when demand is inelastic relative to supply.' },
        { term: 'Producer burden',    def: 'The portion of the tax borne by sellers: (P<sub>e</sub> − P<sub>p</sub>) × Q<sub>t</sub>. Larger when supply is inelastic relative to demand.' }
      ],
      examEdge: 'Always draw both the consumer burden and producer burden rectangles explicitly — many students draw the diagram correctly but forget to <strong>label and shade</strong> the burden split. A 25-mark answer needs both rectangles visible, both labelled, and a clear statement that Pc − Pp = £T per unit.'
    },

    {
      id: 'indirect_taxes_subsidies_3',
      stepLabel: 'Learn: Step 3 of 4',
      title: 'How a subsidy works',
      tip: { icon: '💡', tone: 'green', text: 'A subsidy is the mirror image of a tax — a government payment that shifts supply <em>down</em>, lowering the consumer price and raising the producer net price. Build up the diagram to see who captures the benefit.' },
      interactiveDiagram: {
        svgKey: 'subsidyInteractive',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'The market',
            tone: 'green',
            head: 'Step 1 — the supply and demand framework',
            body: 'Same framework as the tax diagram. Demand (D) slopes down; supply (S) slopes up. The subsidy will shift supply in the <em>opposite</em> direction to a tax.'
          },
          {
            label: 'Pre-subsidy',
            tone: 'green',
            head: 'Step 2 — the pre-subsidy equilibrium (P₀, Q₀)',
            body: 'The market clears at P₀ and Q₀. This is the benchmark — the subsidy moves the market away from this point toward a higher quantity and a lower consumer price.',
            analysis: 'Without intervention, markets may under-provide goods with positive externalities (e.g. vaccines, clean energy). The subsidy is designed to correct this.'
          },
          {
            label: 'Supply shifts down',
            tone: 'green',
            head: 'Step 3 — the subsidy shifts supply down',
            body: "The subsidy reduces sellers' effective costs by £S per unit. They can now supply each quantity at a lower market price, so S shifts <strong>down</strong> to S₁. The new equilibrium: <strong>consumer price falls to Pc, quantity rises to Qs.</strong>",
            analysis: 'This is the exact mirror of the tax shift: instead of supply going up (consumers pay more, producers receive less), it goes down — consumers pay less, producers receive more.'
          },
          {
            label: 'Benefit split',
            tone: 'green',
            head: 'Step 4 — the benefit splits between consumers and producers',
            body: 'The <strong style="color:#059669">green rectangle</strong> is the producer benefit — (Pp − P₀) × Qs: producers now receive a higher net price than before. The <strong style="color:#2563EB">blue rectangle</strong> is the consumer benefit — (P₀ − Pc) × Qs: consumers pay a lower price. Together they equal total government subsidy cost.',
            analysis: 'Pp > P₀ > Pc. Producers receive market price Pc plus the subsidy payment from government, giving net price Pp. The benefit split depends on relative elasticity — covered next.'
          }
        ]
      },
      keyTerms: [
        { term: 'Subsidy',            def: 'A government payment to producers (or consumers) that reduces the effective cost of a good or service. Shifts supply rightward / downward.' },
        { term: 'Production subsidy', def: 'Paid per unit of output to sellers (e.g. UK Contracts for Difference for renewable energy). Shifts S down by the subsidy amount.' },
        { term: 'Consumer subsidy',   def: 'A direct reduction in the price buyers face — childcare vouchers, EV grants, fuel poverty support. Effectively shifts D right or lowers P paid by consumers.' },
        { term: 'Subsidy wedge',      def: 'The vertical gap between the producer net price (P<sub>p</sub>) and the consumer price (P<sub>c</sub>) — equal to the subsidy per unit. Government cost = wedge × Q<sub>s</sub>.' }
      ],
      examEdge: 'A subsidy mirrors a tax: same wedge geometry, opposite direction. The benefit split follows the same elasticity rule in reverse — <strong>the less elastic side captures MORE of the benefit</strong>. With inelastic demand (e.g. insulin), consumers gain little because they would buy anyway — producers capture most of the subsidy. With elastic demand, consumers gain more. For the policy questions — when subsidies are justified, real UK cases, and how to evaluate them — see <strong>Taxes & Subsidies as Policy Tools</strong> (4.1).'
    },

    {
      id: 'indirect_taxes_subsidies_4',
      stepLabel: 'Learn: Step 4 of 4',
      title: 'Elasticity and who pays',
      tip: { icon: '⚖️', tone: 'blue', text: 'The same tax or subsidy falls differently on different markets. One rule governs both: <strong>the less elastic side carries more of the burden (tax) or captures more of the benefit (subsidy).</strong>' },
      diagramKey: 'taxSubsidyElasticityStatic',
      keyTerms: [
        { term: 'Legal incidence',    def: 'Who is legally responsible for remitting the tax — typically the seller. NOT the same as who bears the economic cost.' },
        { term: 'Economic incidence', def: 'Who actually bears the burden or captures the benefit, determined by relative PED and PES.' },
        { term: 'Consumer burden',    def: '(Pc − P₀) × Qt. Larger when demand is inelastic — consumers have few substitutes and cannot avoid the tax.' },
        { term: 'Producer burden',    def: '(P₀ − Pp) × Qt. Larger when supply is inelastic — producers cannot easily redirect output to other markets.' }
      ],
      examEdge: 'The incidence rule in one sentence: <strong>the more inelastic side bears more of a tax / captures more of a subsidy.</strong> UK tobacco duty (PED ≈ −0.4): inelastic demand → consumers bear nearly all of it (~£10bn/year). UK farm subsidies (EU CAP): inelastic land supply → subsidies capitalised into farmland prices, accruing to landowners not farmers. The 1990 US luxury yacht tax (elastic demand for US-built yachts): producers bore the burden — the domestic industry collapsed within two years. Always state the elasticity assumption before judging who pays.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
