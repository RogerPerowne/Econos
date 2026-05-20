window.ECONOS_TOPIC = {
  id: 'indirect_taxes_subsidies',
  topicNum: '2.9',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Indirect Taxes & Subsidies',
  estTime: '5-6 minutes',
  goal: 'Master the mechanics of indirect taxes and subsidies — how they shift supply, how to label the diagram, and how the burden or benefit splits between consumers and producers depending on elasticity.',
  intro: {
    heroKey: 'heroIntervention',
    summary: 'Indirect taxes raise the consumer price and lower the producer net price; subsidies do the opposite. In both cases the burden or benefit splits between consumers and producers depending on relative elasticity — not on who hands over the cash.',
    doInThis: 'Work through 3 cards covering the mechanics of indirect taxes, tax incidence and elasticity, and the mirror-image mechanics of subsidies. The policy questions — when to use these tools, how to evaluate them, and real UK case studies — are covered in the <strong>Taxes & Subsidies as Policy Tools</strong> topic (4.1).',
    outcomes: [
      'Draw and label specific and ad valorem tax diagrams correctly, identifying Pc, Pp, Qt and the tax wedge',
      'Apply the incidence rule (the less elastic side bears more of the burden) to real cases like fuel duty and luxury taxes',
      'Draw and label subsidy diagrams and identify who captures the benefit under different elasticities'
    ],
    tip: 'Tax → supply shifts UP (higher Pc, lower Pp, lower Q). Subsidy → supply shifts DOWN (lower Pc, higher Pp, higher Q). The wedge between Pc and Pp = the tax or subsidy per unit. The split between consumer and producer depends on elasticity — the less elastic side carries more of the burden (tax) or captures more of the benefit (subsidy).',
    stages: [
      { num: 1, name: 'Learn it', sub: '3 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    {
      id: 'indirect_taxes_subsidies_1',
      stepLabel: 'Learn: Step 1 of 3',
      title: 'The anatomy of an indirect tax',
      tip: { icon: '💡', tone: 'amber', text: 'An indirect tax is collected by the seller but paid by whoever bears the burden — and that may not be who hands over the cash. Two forms: a flat per-unit amount (specific) or a percentage of price (ad valorem).' },
      comparison: {
        title: 'Two types of indirect tax',
        emoji: '📊',
        left:  { tone: 'blue',  icon: '📏', label: 'Specific tax',   caption: 'A fixed amount per unit (e.g. £8.06/litre of pure alcohol in UK spirits duty). Shifts the supply curve <strong>parallel</strong> upward by the tax amount — same vertical gap at every quantity.' },
        right: { tone: 'amber', icon: '%',  label: 'Ad valorem tax', caption: 'A percentage of price (e.g. 20% VAT). <strong>Pivots</strong> the supply curve upward — vertical gap widens as price rises. The same percentage produces a much larger absolute tax on expensive goods.' }
      },
      diagramKey: 'taxMiniDiagram',
      flow: [
        { icon: '🏛️', title: 'Government imposes the tax',           sub: 'Legal incidence: sellers must remit £T per unit (or T% of price) to HMRC. Drinks producers, fuel retailers, importers all act as collection agents.' },
        { icon: '⬆️',  title: 'Effective supply shifts up',           sub: 'To stay viable, sellers must receive an extra £T per unit. The effective supply curve shifts up by the tax (specific) or pivots up (ad valorem).' },
        { icon: '⚖️', title: 'New equilibrium',                       sub: 'Quantity falls from Q<sub>e</sub> to Q<sub>t</sub>. Consumer price rises from P<sub>e</sub> to P<sub>c</sub>; producer net price falls from P<sub>e</sub> to P<sub>p</sub>. The market does NOT fully pass the tax through — the split depends on elasticity (card 2).' },
        { icon: '💰', title: 'Tax wedge = government revenue',        sub: 'The vertical gap between P<sub>c</sub> and P<sub>p</sub> equals the tax per unit. Multiplied by Q<sub>t</sub>, this is total tax revenue (the green rectangle in the diagram).' }
      ],
      flowTitle: 'How an indirect tax works',
      flowEmoji: '⚙️',
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
      stepLabel: 'Learn: Step 2 of 3',
      title: 'Tax incidence: who really pays?',
      tip: { icon: '⚖️', tone: 'rose', text: '<strong>Legal incidence</strong> (who hands over the cash) is not the same as <strong>economic incidence</strong> (who bears the burden). The less price-elastic side of the market always carries more of the tax.' },
      diagramKey: 'taxIncidenceDiagram',
      comparison: {
        title: 'Same tax, different incidence',
        emoji: '🎯',
        left:  { tone: 'blue',  icon: '🚬', label: 'Inelastic demand — consumer bears most',  caption: 'Cigarettes, fuel, prescription drugs. PED ≈ 0.3–0.5: consumers have few substitutes and cannot easily reduce consumption. The seller passes most of the tax through as a higher P<sub>c</sub>; quantity falls only slightly; revenue is large.' },
        right: { tone: 'green', icon: '🛥️', label: 'Elastic demand — producer bears most',    caption: 'Luxury goods, restaurant meals, branded fashion. PED &gt; 1: buyers switch easily to substitutes or simply do without. Sellers cannot pass the tax through — they absorb most of it as lower P<sub>p</sub>; quantity falls sharply; revenue is small.' }
      },
      keyTerms: [
        { term: 'Legal incidence',    def: 'Who is legally responsible for remitting the tax to government — typically the seller for indirect taxes.' },
        { term: 'Economic incidence', def: 'Who actually bears the burden through higher prices paid (consumers) or lower net receipts (producers) — determined by relative PED and PES.' },
        { term: 'Consumer burden',    def: 'The portion of the tax borne by buyers: (P<sub>c</sub> − P<sub>e</sub>) × Q<sub>t</sub>. Larger when demand is inelastic relative to supply.' },
        { term: 'Producer burden',    def: 'The portion of the tax borne by sellers: (P<sub>e</sub> − P<sub>p</sub>) × Q<sub>t</sub>. Larger when supply is inelastic relative to demand.' }
      ],
      examEdge: 'The incidence rule in one line: <strong>the more inelastic side bears more of the tax</strong>. If PED &lt; PES (demand more inelastic), consumers bear more — UK tobacco duty raises ~£10bn/year because smokers cannot easily quit. If PES &lt; PED (supply more inelastic), producers bear more — the 1990 US luxury yacht tax destroyed the domestic industry because buyers switched to foreign builders while US shipyards could not redeploy quickly. Always state the elasticity assumption explicitly before judging who pays.'
    },

    {
      id: 'indirect_taxes_subsidies_3',
      stepLabel: 'Learn: Step 3 of 3',
      title: 'The anatomy of a subsidy',
      tip: { icon: '💡', tone: 'green', text: 'A subsidy is the mirror image of a tax — a government payment to sellers (or buyers) that lowers the effective price. Supply shifts <em>down</em> by the subsidy per unit. The benefit splits between consumers and producers — and again, the less elastic side captures more.' },
      diagramKey: 'subsidyMiniDiagram',
      flow: [
        { icon: '🏛️', title: 'Government pays the subsidy',          sub: 'Sellers receive £S per unit produced (or buyers receive a price reduction). Common forms: per-unit production grants, feed-in tariffs, refundable tax credits, voucher schemes.' },
        { icon: '⬇️',  title: 'Effective supply shifts down',         sub: 'The producer\'s effective cost falls by £S per unit. The supply curve shifts down by the subsidy amount — sellers will now supply each quantity at a lower market price.' },
        { icon: '⚖️', title: 'New equilibrium',                       sub: 'Quantity rises from Q<sub>e</sub> to Q<sub>s</sub>. Consumer price falls from P<sub>e</sub> to P<sub>c</sub>; producer net price (market price + subsidy) rises from P<sub>e</sub> to P<sub>p</sub>. The benefit splits — split depends on elasticity (mirror of card 2).' },
        { icon: '💸', title: 'Subsidy wedge = government cost',       sub: 'The vertical gap between P<sub>p</sub> (producer net) and P<sub>c</sub> (consumer price) equals the subsidy per unit. Total cost = wedge × Q<sub>s</sub> — usually <em>larger</em> than CS + PS gain. The difference is DWL.' }
      ],
      flowTitle: 'How a subsidy works (the mirror of a tax)',
      flowEmoji: '🔄',
      keyTerms: [
        { term: 'Subsidy',            def: 'A government payment to producers (or consumers) that reduces the effective cost of a good or service. Shifts supply rightward / downward.' },
        { term: 'Production subsidy', def: 'Paid per unit of output to sellers (e.g. UK Contracts for Difference for renewable energy). Shifts S down by the subsidy amount.' },
        { term: 'Consumer subsidy',   def: 'A direct reduction in the price buyers face — childcare vouchers, EV grants, fuel poverty support. Effectively shifts D right or lowers P paid by consumers.' },
        { term: 'Subsidy wedge',      def: 'The vertical gap between the producer net price (P<sub>p</sub>) and the consumer price (P<sub>c</sub>) — equal to the subsidy per unit. Government cost = wedge × Q<sub>s</sub>.' }
      ],
      examEdge: 'A subsidy mirrors a tax: same wedge geometry, opposite direction. The benefit split follows the same elasticity rule in reverse — <strong>the less elastic side captures MORE of the benefit</strong>. With inelastic demand (e.g. insulin), consumers gain little because they would buy anyway — producers capture most of the subsidy. With elastic demand, consumers gain more. For the policy questions — when subsidies are justified, real UK cases, and how to evaluate them — see <strong>Taxes & Subsidies as Policy Tools</strong> (4.1).',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
