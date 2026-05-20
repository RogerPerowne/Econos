window.ECONOS_TOPIC = {
  id: 'taxes_subsidies_policy',
  topicNum: '4.1',
  theme: 'Theme 1 · Government Intervention',
  title: 'Taxes & Subsidies as Policy Tools',
  estTime: '5-7 minutes',
  goal: 'Move from the mechanics of indirect taxes and subsidies to the policy question: when are they justified, how do real UK schemes actually perform, and how do you evaluate them in an exam?',
  intro: {
    heroKey: 'heroIntervention',
    summary: 'A tax or subsidy in an otherwise efficient market destroys welfare. The case for either rests on a market failure they correct — a negative externality (tax) or a positive externality / merit good (subsidy). Whether the policy actually works depends on elasticity, the size of the externality, and unintended consequences.',
    doInThis: 'Work through 3 cards covering the justification logic (Pigouvian taxes, merit-good subsidies), five UK case studies (sugar levy, fuel duty, tobacco, CAP, CfD), and the three-axis evaluation framework you need for 25-mark essays. <strong>Mechanics and incidence are covered in topic 2.9 — Indirect Taxes & Subsidies.</strong>',
    outcomes: [
      'Identify when an indirect tax or subsidy is justified by a market failure (negative externality, positive externality, merit good)',
      'Evaluate real UK schemes — SDIL, fuel duty, tobacco duty, EU CAP, UK Contracts for Difference — against the theory',
      'Structure a 25-mark essay around the three axes: effectiveness, efficiency, equity'
    ],
    tip: 'The decisive question for any tax or subsidy: <strong>does the welfare gain from correcting the market failure exceed the DWL the policy itself creates?</strong> If yes, the policy raises welfare. If no, it destroys welfare. Always identify the underlying market failure (or its absence) explicitly before judging the policy.',
    stages: [
      { num: 1, name: 'Learn it', sub: '3 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    {
      id: 'taxes_subsidies_policy_1',
      stepLabel: 'Learn: Step 1 of 3',
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
      id: 'taxes_subsidies_policy_2',
      template: 'cause',
      stepLabel: 'Learn: Step 2 of 3',
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
      id: 'taxes_subsidies_policy_3',
      stepLabel: 'Learn: Step 3 of 3',
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
      examEdge: 'For any 25-mark tax/subsidy essay, structure your evaluation around three axes: <strong>(1) Effectiveness</strong> — did the policy actually change behaviour? Depends on PED and producer response (reformulation, substitution). <strong>(2) Efficiency</strong> — did it improve welfare? Compare the policy\'s DWL to the offsetting market failure. <strong>(3) Equity</strong> — who gained and who lost? Indirect taxes are typically regressive; subsidies can be captured by unintended beneficiaries (e.g. landowners under CAP). A strong answer hits all three axes and reaches a <em>context-aware</em> judgement. <strong>A* upgrade</strong>: name the elasticity assumption, the size of the externality (or its absence), and cite a real-world case (sugar tax, fuel duty, CAP, CfD) to ground the analysis.'
    }

  ]
};
