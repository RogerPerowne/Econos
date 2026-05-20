window.ECONOS_TOPIC = {
  id: 'indirect_taxes_subsidies',
  topicNum: '2.9',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Indirect Taxes & Subsidies',
  estTime: '9-11 minutes',
  goal: 'Master how indirect taxes and subsidies shift supply, who really bears the burden or captures the benefit, when they are justified by market failure, and how to evaluate them as policy tools.',
  intro: {
    heroKey: 'heroIntervention',
    summary: 'Indirect taxes raise the consumer price and lower the producer net price; subsidies do the opposite. In both cases the burden or benefit splits between consumers and producers depending on relative elasticity — not on who hands over the cash. The welfare case for either tool depends on the underlying market failure they correct.',
    doInThis: 'Work through 6 cards covering the mechanics of indirect taxes, tax incidence and elasticity, the mirror-image mechanics of subsidies, when taxes and subsidies are justified by market failure, real-world UK case studies, and exam technique.',
    outcomes: [
      'Draw and label specific and ad valorem tax diagrams correctly, identifying Pc, Pp, Qt and the tax wedge',
      'Apply the incidence rule (the less elastic side bears more of the burden) to real cases like fuel duty and luxury taxes',
      'Draw and label subsidy diagrams and identify who captures the benefit under different elasticities',
      'Evaluate indirect taxes and subsidies as tools for correcting externalities, weighing effectiveness, efficiency, and equity'
    ],
    tip: 'Tax → supply shifts UP (higher Pc, lower Pp, lower Q). Subsidy → supply shifts DOWN (lower Pc, higher Pp, higher Q). The wedge between Pc and Pp = the tax or subsidy per unit. The split between consumer and producer depends on elasticity — the less elastic side carries more of the burden (tax) or captures more of the benefit (subsidy).',
    stages: [
      { num: 1, name: 'Learn it', sub: '6 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    {
      id: 'indirect_taxes_subsidies_1',
      stepLabel: 'Learn: Step 1 of 6',
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
      stepLabel: 'Learn: Step 2 of 6',
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
      stepLabel: 'Learn: Step 3 of 6',
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
      examEdge: 'A subsidy mirrors a tax: same wedge geometry, opposite direction. The benefit split follows the same elasticity rule in reverse — <strong>the less elastic side captures MORE of the benefit</strong>. With inelastic demand (e.g. insulin), consumers gain little because they would buy anyway — producers capture most of the subsidy. With elastic demand, consumers gain more. Critical for evaluation: a subsidy meant to help consumers may end up enriching producers if demand is highly inelastic — or worse, capitalised into asset prices (as with farm subsidies inflating land values).'
    },

    {
      id: 'indirect_taxes_subsidies_4',
      stepLabel: 'Learn: Step 4 of 6',
      title: 'When are taxes and subsidies justified?',
      tip: { icon: '🎯', tone: 'blue', text: 'A tax or subsidy in an otherwise efficient market destroys welfare. The case for either rests on a market failure they correct — typically a negative externality (tax) or a positive externality / merit good (subsidy).' },
      comparison: {
        title: 'Taxes and subsidies as corrective tools',
        emoji: '🛠️',
        left:  { tone: 'rose',  icon: '🏭', label: 'Pigouvian tax — shrink output',    caption: 'When private cost &lt; social cost, the market over-produces. A tax equal to the marginal external cost shifts S up to the social-cost curve, moving the market to the socially optimal Q*. Examples: carbon tax, sugar tax, congestion charge, alcohol duty.' },
        right: { tone: 'green', icon: '📚', label: 'Merit good subsidy — grow output', caption: 'When private benefit &lt; social benefit (or information is imperfect), the market under-consumes. A subsidy equal to the marginal external benefit shifts the relevant curve to reach Q*. Examples: NHS, public education, vaccinations, renewable energy, childcare.' }
      },
      causes: [
        { tone: 'rose',  icon: '☣️', head: 'Negative externality (tax case)',     body: 'Pollution, smoking, sugar consumption, traffic congestion. Private agents ignore costs imposed on others. Market output exceeds the social optimum. A Pigouvian tax internalises the external cost — sellers and buyers now face the full social cost in the price.' },
        { tone: 'green', icon: '☀️', head: 'Positive externality (subsidy case)', body: 'Vaccinations protect others; education raises everyone\'s productivity; renewable energy reduces shared climate risk. Private agents ignore benefits enjoyed by others. Market output falls short of the social optimum. A subsidy internalises the external benefit.' },
        { tone: 'blue',  icon: '⭐', head: 'Merit good rationale',                 body: 'Even without a clear externality, society judges some goods to be under-consumed because of imperfect information or short-term myopia (e.g. dental care, financial advice). Subsidies push consumption up toward what informed long-run choice would deliver.' }
      ],
      causesStyle: 'tinted-flat',
      causesEmoji: '🧩',
      causesLabel: 'Three justification logics',
      keyTerms: [
        { term: 'Pigouvian tax',     def: 'A tax equal to the marginal external cost of a negative externality — internalises the externality and restores the socially optimal output level.' },
        { term: 'Merit good',        def: 'A good that society judges to be under-consumed relative to the social optimum, often due to imperfect information or positive externalities. Education, healthcare, vaccinations.' },
        { term: 'Internalisation',   def: 'Forcing private decision-makers to face the full social cost (via tax) or benefit (via subsidy) of their choices, so the market reaches the social optimum.' },
        { term: 'Welfare net gain',  def: 'A Pigouvian tax can <em>raise</em> total welfare because the welfare gain from eliminating the externality DWL exceeds the tax\'s own DWL.' }
      ],
      examEdge: 'The decisive question for any tax or subsidy: <strong>does the welfare gain from correcting the market failure exceed the DWL the policy itself creates?</strong> A revenue-raising tax in an otherwise-efficient market only destroys welfare. A well-targeted Pigouvian tax can raise welfare by eliminating a larger externality DWL. Identify the market failure (or its absence) explicitly before judging the policy. See the <strong>Negative Externalities</strong> and <strong>Positive Externalities</strong> topics for the full Pigouvian and merit-good frameworks.'
    },

    {
      id: 'indirect_taxes_subsidies_5',
      template: 'cause',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'Five UK case studies — what actually happens',
      tip: { icon: '🌍', tone: 'amber', text: 'In practice, the effectiveness of taxes and subsidies depends on the elasticity of behaviour, the size of the externality, and unintended consequences. Five UK examples show theory meeting reality.' },
      causesStyle: 'tinted-flat',
      causesEmoji: '📋',
      causesLabel: 'Real-world tax and subsidy outcomes',
      causes: [
        { tone: 'amber', icon: '🥤', head: 'Soft Drinks Industry Levy (sugar tax, 2018–)',   body: 'Ad valorem on drinks above 5g sugar/100ml; higher rate above 8g. Drove ~50% reformulation by manufacturers within 18 months — most cut sugar to avoid the tax altogether. Sales of taxed drinks fell 21%. Effective Pigouvian design: producers had an elastic response (reformulate), so welfare gains came largely without consumer regressivity.' },
        { tone: 'rose',  icon: '⛽', head: 'Fuel duty (UK, ~£24bn/yr)',                        body: 'Large excise (~53p/litre, plus VAT). Demand is inelastic in the short run (PED ~0.2–0.4) — consumers bear most. Revenue is huge but regressive (lower-income households spend a higher share of income on fuel). Climate justification holds, but political pressure froze the duty rate for 13 years (2011–2024).' },
        { tone: 'rose',  icon: '🚬', head: 'Tobacco duty (~£8/pack, world-leading rate)',     body: 'Among the highest in the world. Demand is inelastic for adults (PED ~0.4); consumers bear nearly all the burden. Combined with public health measures, smoking prevalence fell from 27% (2000) to 13% (2023) — strong Pigouvian effect. Side effect: illicit tobacco now ~12% of consumption, eroding revenue.' },
        { tone: 'green', icon: '🌾', head: 'EU Common Agricultural Policy (~€55bn/yr)',        body: 'Large producer subsidies for cereals, dairy, livestock. Heavy capitalisation: roughly 30–50% of subsidies inflate farmland values, so the benefit accrues to landowners rather than working farmers. Distorted production led to historic "butter mountains". Reformed since 1992 toward direct income support and environmental conditions.' },
        { tone: 'green', icon: '☀️', head: 'UK Contracts for Difference (renewable energy)',   body: 'Guaranteed prices via auction for offshore wind. Drove huge cost reductions — auction strike prices fell ~70% (2015–2022). Successful market-creation subsidy: initial DWL offset by long-run productivity gains. Demonstrates that subsidies can work when targeting infant industries with steep learning curves.' }
      ],
      keyTerms: [
        { term: 'Sin tax',         def: 'Indirect tax on goods generating negative externalities or judged harmful (alcohol, tobacco, sugar). Effective when PED is low — high revenue and behaviour change in the long run.' },
        { term: 'Regressive tax',  def: 'A tax taking a higher share of income from poorer households than richer ones. Most indirect taxes (VAT, fuel duty) are regressive unless essentials are exempted.' },
        { term: 'Capitalisation',  def: 'When a subsidy raises the price of an underlying asset (e.g. CAP subsidies inflating farmland prices), so the subsidy ends up rewarding existing owners rather than the intended beneficiary.' },
        { term: 'Reformulation',   def: 'Producer response to a tax by changing the product itself to avoid liability (e.g. drinks manufacturers cutting sugar content below the SDIL threshold). A major channel through which Pigouvian taxes deliver welfare gains.' }
      ],
      examEdge: 'Three evaluation moves worth memorising: <strong>(1) Did behaviour change?</strong> The sugar tax worked partly because producers had an elastic response (reformulation); fuel duty changes little because consumers do not. <strong>(2) Who bore the burden?</strong> Tobacco and fuel duty fall on consumers (inelastic demand) and are regressive; sugar tax fell mainly on producers via reformulation. <strong>(3) Was the welfare gain larger than the DWL?</strong> Strong Pigouvian designs (sugar, carbon, tobacco) clear this bar; pure revenue taxes do not. Naming the underlying elasticity and market failure before judging earns evaluation marks.'
    },

    {
      id: 'indirect_taxes_subsidies_6',
      stepLabel: 'Learn: Step 6 of 6',
      title: 'Exam technique: drawing, analysis, evaluation',
      tip: { icon: '✍️', tone: 'blue', text: 'Indirect taxes and subsidies appear in 25-mark essays, 9-mark questions, and short numerical questions. Master the four diagrams below and the three-axis evaluation structure to handle any of them.' },
      flow: [
        { icon: '📈', title: 'Diagram 1 — tax shift',           sub: 'S to S+tax (parallel for specific, pivoted for ad valorem). Label P<sub>c</sub>, P<sub>p</sub>, Q<sub>t</sub>, the wedge, and the revenue rectangle. Most common diagram type — fluent execution earns the foundation marks.' },
        { icon: '🎯', title: 'Diagram 2 — tax incidence',       sub: 'Same diagram but draw inelastic vs elastic D side-by-side. Show the burden split as two rectangles. Label which side bears more and link to PED magnitude.' },
        { icon: '📉', title: 'Diagram 3 — subsidy shift',       sub: 'S to S–subsidy. Label new lower P<sub>c</sub>, new higher P<sub>p</sub>, higher Q<sub>s</sub>, the subsidy wedge, and the government cost rectangle (wedge × Q<sub>s</sub>).' },
        { icon: '🌳', title: 'Diagram 4 — Pigouvian correction', sub: 'MPC, MSC, MPB curves. Show the external cost gap and the tax that shifts MPC up to MSC, moving the market from private equilibrium to social optimum Q*. Critical for externalities-linked questions.' }
      ],
      flowTitle: 'The four diagrams every student should draw fluently',
      flowEmoji: '📐',
      comparison: {
        title: 'Common exam errors',
        emoji: '⚠️',
        left:  { tone: 'rose', icon: '❌', label: 'Drawing errors',  caption: 'Wrong shift direction (subsidy drawn as shift left); ad valorem drawn parallel (should pivot from origin); missing P<sub>c</sub>, P<sub>p</sub>, or Q<sub>t</sub> labels; revenue rectangle not shaded; wedge not clearly identified.' },
        right: { tone: 'rose', icon: '❌', label: 'Analysis errors', caption: 'Confusing legal and economic incidence (assuming the seller pays just because they remit the cash); failing to identify the underlying market failure before judging; ignoring elasticity entirely; treating tax revenue as a welfare loss (it is a transfer, not a destruction).' }
      },
      keyTerms: [
        { term: 'The three labels',  def: 'P<sub>c</sub> (consumer price), P<sub>p</sub> (producer net price), Q<sub>t</sub> (post-tax / post-subsidy quantity). Missing any of these is the most frequent single mark loss on tax/subsidy diagrams.' },
        { term: 'Revenue rectangle', def: 'Wedge × Q<sub>t</sub>. For a tax this is government income; for a subsidy this is government cost. Always shade and label it explicitly.' },
        { term: 'DWL triangle',      def: 'The small triangle to the right of Q<sub>t</sub>, bounded by D and S. Trades that would have happened at P<sub>e</sub> but no longer occur. The welfare cost of the policy in an otherwise-efficient market.' }
      ],
      examEdge: 'For any 25-mark tax/subsidy essay, structure your evaluation around three axes: <strong>(1) Effectiveness</strong> — did the policy actually change behaviour? Depends on PED and producer response (reformulation, substitution). <strong>(2) Efficiency</strong> — did it improve welfare? Compare the policy\'s DWL to the offsetting market failure. <strong>(3) Equity</strong> — who gained and who lost? Indirect taxes are typically regressive; subsidies can be captured by unintended beneficiaries (e.g. landowners under CAP). A strong answer hits all three axes and reaches a <em>context-aware</em> judgement. <strong>A* upgrade</strong>: name the elasticity assumption, the size of the externality (or its absence), and cite a real-world case (sugar tax, fuel duty, CAP, CfD) to ground the analysis.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
